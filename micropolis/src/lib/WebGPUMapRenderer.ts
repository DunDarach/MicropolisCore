import type { MicropolisSimulator } from "./MicropolisSimulator";
import type {WebGPUTileRenderer} from "./WebGPUTileRenderer";
import {verticesDescription} from "./WebGPUTileRenderer";
class WebGPUMapRenderer {
    
     private pipeline: GPURenderPipeline;
     private bindGroup: GPUBindGroup;
     private device: GPUDevice;

     private mapTexture: GPUTexture;
     private mapTextureView: GPUTextureView;

     private mapData: Uint8Array;
     
    constructor() {      
        this.pipeline = {} as GPURenderPipeline;
        this.bindGroup = {} as GPUBindGroup;
        this.device = {} as GPUDevice;

        this.mapTexture = {} as GPUTexture;
        this.mapTextureView = {} as GPUTextureView;
        this.mapData = {} as Uint8Array;
    }

    initialize(micropolisSimulator: MicropolisSimulator, device: GPUDevice ) {       
        this.device = device;
        const mapHeight= 100, mapWidth =120;

        this.mapData = micropolisSimulator.micropolisengine.HEAPU8.subarray(121608 , 121608+12000 );

        this.mapTexture = this.device.createTexture({
            size: [ mapHeight, mapWidth], // Map data is column major order, so the width is the second dimension.
            format:'r8uint',
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
        });
        this.mapTextureView = this.mapTexture.createView();


        device.queue.writeTexture( {texture:this.mapTexture}, this.mapData,
             {bytesPerRow:mapHeight * Uint8Array.BYTES_PER_ELEMENT}, { width: mapHeight, height:mapWidth });


        const bindGroupLayout = device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: { sampleType: 'uint' },
                },
            ],
        });

        const vertexShaderModule = device.createShaderModule({
            code: /*wgsl*/`

            struct VertexOutput {
                    @builtin(position) position: vec4<f32>,
                    @location(0) fragCoord: vec2<f32>,
            };

            @vertex
            fn main(
                @location(0) position : vec4f, @location(1) mapCoord : vec2f) -> VertexOutput {
                return VertexOutput(position, mapCoord);
            }`,
        });

        const fragmentShaderModule = device.createShaderModule({
            code: /*wgsl*/`
            
                @group(0) @binding(0) var powerMap: texture_2d<u32>;

                struct VertexOutput {
                    @builtin(position) position: vec4<f32>,
                    @location(0) fragCoord: vec2<f32>,
                };

               
                @fragment
                fn main(input: VertexOutput) -> @location(0) vec4f {     
                    
                    let mapCoord = vec2<i32>(floor(input.fragCoord));
                    let outOfMap = mapCoord.x < 0 || mapCoord.x >= 120 || mapCoord.y < 0 || mapCoord.y >= 100;
                    let powerValue = select(textureLoad(powerMap, vec2<i32>(mapCoord.y, mapCoord.x), 0).r, 0 ,outOfMap);
                  
                    return vec4f(f32(powerValue), 0,0, 0.2);
                }`,
        });

        this.pipeline = device.createRenderPipeline({
            layout: device.createPipelineLayout({ bindGroupLayouts: [bindGroupLayout] }),
            vertex: {
                module: vertexShaderModule,
                entryPoint: 'main',
                buffers: [verticesDescription()],
            },
            fragment: {
                module: fragmentShaderModule,
                entryPoint: 'main',
                targets: [
                    {
                        format: 'bgra8unorm',
                        blend: {
                         color:{
                                operation: 'add',
                                srcFactor: 'one',
                                dstFactor: 'one-minus-src',
                              },
                             
                               alpha : {
                                operation: 'add',
                                srcFactor: 'one',
                                dstFactor: 'one-minus-src',
                              }                             
                        }
                    },
                ],                
            },
            primitive: {
                topology: 'triangle-list',
            },
        });

        this.bindGroup = this.device.createBindGroup({
            layout: bindGroupLayout,
            entries: [              {
                binding: 0,
                resource: this.mapTextureView,
            },                            
            ],
        });
    }

    encodeRenderPass(commandEncoder:GPUCommandEncoder, textureView: GPUTextureView, verticeBuffer:GPUBuffer ): void {
        console.log("MapRenderer render");
        
        // Update Data
        this.device.queue.writeTexture({texture:this.mapTexture}, this.mapData, {bytesPerRow:100 * Uint8Array.BYTES_PER_ELEMENT}, { width: 100, height:120 });
 
        const renderPassDescriptor: GPURenderPassDescriptor = {
            colorAttachments: [
                {
                    view: textureView,
                    loadOp: 'load',
                    storeOp: 'store',                        
                },
            ],                
        };

        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setVertexBuffer(0,verticeBuffer);
        passEncoder.setBindGroup(0, this.bindGroup);
        passEncoder.draw(6);//, 1, 0, 0);
        passEncoder.end();
        
    }

}


export {WebGPUMapRenderer };