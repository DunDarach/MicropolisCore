var nt=Object.defineProperty;var ot=(u,s,e)=>s in u?nt(u,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[s]=e;var l=(u,s,e)=>(ot(u,typeof s!="symbol"?s+"":s,e),e);import{l as rt,p as st,u as lt,n as j,j as W,f as V,a as K,e as P,g as G,b as H,i as at,h as ct,$ as ht}from"../chunks/disclose-version.PTWSzQB1.js";import{p as Q,a as Z}from"../chunks/runtime.DsRB8KFS.js";const ut=!0,wt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ut},Symbol.toStringTag,{value:"Module"})),ft=""+new URL("../assets/tiles.CXP0i5T3.png",import.meta.url).href;class q{constructor(){l(this,"canvas");l(this,"context");l(this,"mapData");l(this,"mapWidth",0);l(this,"mapHeight",0);l(this,"tileWidth",0);l(this,"tileHeight",0);l(this,"panX",0);l(this,"panY",0);l(this,"viewWidth",0);l(this,"viewHeight",0);l(this,"zoom",1);this.canvas=void 0,this.context=void 0,this.mapData=new Uint16Array(0),this.mapWidth=1,this.mapHeight=1,this.tileWidth=0,this.tileHeight=0,this.viewWidth=0,this.viewHeight=0}initialize(s,e,i,t,o,r,a,c){return this.canvas=s,this.context=e,this.mapData=i,this.mapWidth=t,this.mapHeight=o,this.tileWidth=r,this.tileHeight=a,Promise.resolve()}screenToTile(s,e){const i=(s+this.panX)/(this.tileWidth*this.zoom),t=(e+this.panY)/(this.tileHeight*this.zoom);return[i,t]}tileToScreen(s,e){const i=s*this.tileWidth*this.zoom-this.panX,t=e*this.tileHeight*this.zoom-this.panY;return[i,t]}handleDrag(s,e){this.panX+=s,this.panY+=e}handleZoom(s,e,i){this.zoom*=s,this.panX=(this.panX-e)*s+e,this.panY=(this.panY-i)*s+i}updateScreenSize(s,e){this.viewWidth=s,this.viewHeight=e}}class xt extends q{constructor(){super();l(this,"tileImage",null)}initialize(e,i,t,o,r,a,c,f){return super.initialize(e,i,t,o,r,a,c,f).then(()=>(this.context=i,this.tileImage=new Image,this.tileImage.src=f,new Promise((m,x)=>{if(!this.context||!this.tileImage)throw new Error("Canvas context or tile image is not properly initialized.");this.tileImage.onload=()=>m(),this.tileImage.onerror=()=>x(new Error(`Failed to load image at ${f}`))})))}render(){if(!this.canvas||!this.context||!this.tileImage)throw new Error("The canvas, 2d context, or tile image are not properly initialized.");this.updateScreenSize(this.canvas.width,this.canvas.height),this.context.fillStyle="#000000",this.context.fillRect(0,0,this.context.canvas.width,this.context.canvas.height);const e=this.context.canvas.width,i=this.context.canvas.height,t=e/2,o=i/2;this.tileWidth*this.zoom,this.tileHeight*this.zoom;const r=Math.max(0,Math.floor(this.panX/this.zoom)),a=Math.max(0,Math.floor(this.panY/this.zoom)),c=this.mapWidth,f=this.mapHeight;for(let m=a;m<f;m++)for(let x=r;x<c;x++){const A=this.mapData[m*this.mapWidth+x],D=t+(x-this.panX)*this.tileWidth*this.zoom,T=o+(m-this.panY)*this.tileHeight*this.zoom,p=this.tileImage.width/this.tileWidth,d=A%p*this.tileWidth,g=Math.floor(A/p)*this.tileHeight;this.context.drawImage(this.tileImage,d,g,this.tileWidth,this.tileHeight,D,T,this.tileWidth*this.zoom,this.tileHeight*this.zoom)}}}class dt extends q{constructor(){super();l(this,"tilesTexture",null);l(this,"mapTexture",null);l(this,"tilesWidth",0);l(this,"tilesHeight",0);l(this,"tileProgramInfo",null);l(this,"tileBufferInfo",null);l(this,"screenTileArray",new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]))}initialize(e,i,t,o,r,a,c,f){return super.initialize(e,i,t,o,r,a,c,f).then(()=>(this.context=i,this.context.getExtension("EXT_texture_norm16")?(this.tileProgramInfo=this.createShaderProgram(),this.tileBufferInfo=this.createBuffers(),this.mapTexture=this.createMapTexture(t,o,r),this.loadTexture(f)):(console.error("R32UI format is not supported on this device."),null))).then(()=>{}).catch(m=>{throw m})}createMapTexture(e,i,t){if(!this.context)return console.error("GL context is not initialized."),null;const o=this.context.createTexture();return this.context.bindTexture(this.context.TEXTURE_2D,o),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.R16UI,i,t,0,this.context.RED_INTEGER,this.context.UNSIGNED_SHORT,e),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MAG_FILTER,this.context.NEAREST),o}loadTexture(e){return new Promise((i,t)=>{if(!this.context){t(new Error("GL context is not initialized."));return}const o=this.context.createTexture();this.tilesTexture=o,this.context.bindTexture(this.context.TEXTURE_2D,o),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGBA,1,1,0,this.context.RGBA,this.context.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]));const r=new Image;r.onload=()=>{if(!this.context){t(new Error("GL context is not initialized."));return}this.tilesWidth=r.width,this.tilesHeight=r.height,this.context.bindTexture(this.context.TEXTURE_2D,o),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGBA,this.context.RGBA,this.context.UNSIGNED_BYTE,r),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.LINEAR),i()},r.onerror=()=>{t(new Error(`Failed to load texture at ${e}`))},r.src=e})}createShaderProgram(){if(!this.context)throw new Error("The WebGL context is not initialized.");const t=this.compileShaders(`#version 300 es
precision mediump float;
in vec3 a_position;
in vec2 a_screenTile;
out vec2 v_screenTile;

void main() {

    gl_Position = vec4(a_position, 1.0);
    v_screenTile = a_screenTile;

}
`,`#version 300 es
precision mediump float;
precision highp usampler2D;
uniform vec2 u_tileSize; // 16 16
uniform vec2 u_tilesSize; // 256 960
uniform sampler2D u_tiles;
uniform vec2 u_mapSize; // 256 256
uniform usampler2D u_map;
in vec2 v_screenTile;
out vec4 fragColor;

void main() {

    // Calculate the screen tile coordinate.
    vec2 screenTileColRow = floor(v_screenTile);
    vec2 screenTilePosition = v_screenTile - screenTileColRow;

    vec2 cellColRow = mod(screenTileColRow, u_mapSize);
    vec2 cellUV = cellColRow / u_mapSize;

    // Extract data from the 16-bit unsigned integer texture
    float cellValue = float(texture(u_map, cellUV).r); // Directly use the red channel as the cell value

    // Calculate the tile row and column from the cell value.
    float tilesPerRow = u_tilesSize.x / u_tileSize.x;
    float tilesPerCol = u_tilesSize.y / u_tileSize.y;

    // Wrap the cell value by the number of tiles there are.
    cellValue = mod(cellValue, tilesPerRow * tilesPerCol);

    float tileRow = floor(cellValue / tilesPerRow);
    float tileCol = mod(cellValue, tilesPerRow);

    // Calculate which pixel of the tile to sample.
    vec2 tileCorner = vec2(tileCol, tileRow) * u_tileSize;
    vec2 tilePixel = tileCorner + (screenTilePosition * u_tileSize);
    vec2 uv = tilePixel / u_tilesSize;

    // Sample the tile.
    fragColor = texture(u_tiles, uv);

}
`);if(!t)throw new Error("Unable to create shader program");const o={position:this.context.getAttribLocation(t,"a_position"),screenTile:this.context.getAttribLocation(t,"a_screenTile")},r={tileSize:this.context.getUniformLocation(t,"u_tileSize"),tilesSize:this.context.getUniformLocation(t,"u_tilesSize"),tiles:this.context.getUniformLocation(t,"u_tiles"),mapSize:this.context.getUniformLocation(t,"u_mapSize"),map:this.context.getUniformLocation(t,"u_map")};for(const[a,c]of Object.entries(o))if(c===-1)throw new Error(`Shader attribute location not found: ${a}`);for(const[a,c]of Object.entries(r))if(c===null)throw new Error(`Shader uniform location not found: ${a}`);return{program:t,attributeLocations:o,uniformLocations:r}}compileShaders(e,i){if(!this.context)throw new Error("The WebGL context is not initialized.");const t=this.loadShader(this.context.VERTEX_SHADER,e),o=this.loadShader(this.context.FRAGMENT_SHADER,i),r=this.context.createProgram();if(!r)throw new Error("Unable to create shader program");if(this.context.attachShader(r,t),this.context.attachShader(r,o),this.context.linkProgram(r),!this.context.getProgramParameter(r,this.context.LINK_STATUS)){const a=this.context.getProgramInfoLog(r);throw this.context.deleteProgram(r),new Error("Failed to link shader program: "+a)}return r}loadShader(e,i){if(!this.context)throw new Error("The WebGL context is not initialized.");const t=this.context.createShader(e);if(!t)throw new Error("Unable to create shader.");if(this.context.shaderSource(t,i),this.context.compileShader(t),!this.context.getShaderParameter(t,this.context.COMPILE_STATUS)){const o=this.context.getShaderInfoLog(t);throw this.context.deleteShader(t),new Error("An error occurred compiling the shaders: "+o)}return t}createBuffers(){if(!this.context)throw new Error("The WebGL context is not initialized.");const e=this.context.createBuffer();this.context.bindBuffer(this.context.ARRAY_BUFFER,e);const i=[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0];this.context.bufferData(this.context.ARRAY_BUFFER,new Float32Array(i),this.context.STATIC_DRAW);const t=this.context.createBuffer(),o=this.context.createBuffer();this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER,o);const r=[0,1,2,2,1,3];return this.context.bufferData(this.context.ELEMENT_ARRAY_BUFFER,new Uint16Array(r),this.context.STATIC_DRAW),{position:e,screenTile:t,indices:o}}updateScreenTileArray(){if(!this.context||!this.tileBufferInfo)throw new Error("The WebGL context is not initialized.");const e=this.panX,i=this.panX+this.viewWidth/this.zoom,t=this.panY,o=this.panY+this.viewHeight/this.zoom;this.screenTileArray.set([e,o,i,o,e,t,e,t,i,o,i,t]),this.context.bindBuffer(this.context.ARRAY_BUFFER,this.tileBufferInfo.screenTile),this.context.bufferData(this.context.ARRAY_BUFFER,this.screenTileArray,this.context.DYNAMIC_DRAW)}render(){if(!this.canvas||!this.context||!this.tileProgramInfo||!this.tileBufferInfo||!this.tilesTexture)throw new Error("The canvas, WebGL context, shaders, or textures are not properly initialized.");this.updateScreenSize(this.canvas.width,this.canvas.height),this.context.viewport(0,0,this.context.drawingBufferWidth,this.context.drawingBufferHeight),this.context.clearColor(0,0,0,1),this.context.clearDepth(1),this.context.enable(this.context.DEPTH_TEST),this.context.depthFunc(this.context.LEQUAL),this.context.clear(this.context.COLOR_BUFFER_BIT|this.context.DEPTH_BUFFER_BIT),this.context.useProgram(this.tileProgramInfo.program),this.context.uniform2f(this.tileProgramInfo.uniformLocations.tileSize,this.tileWidth,this.tileHeight),this.context.uniform2f(this.tileProgramInfo.uniformLocations.tilesSize,this.tilesWidth,this.tilesHeight),this.context.activeTexture(this.context.TEXTURE0),this.context.bindTexture(this.context.TEXTURE_2D,this.tilesTexture),this.context.uniform1i(this.tileProgramInfo.uniformLocations.tiles,0),this.context.activeTexture(this.context.TEXTURE1),this.context.bindTexture(this.context.TEXTURE_2D,this.mapTexture),this.context.uniform1i(this.tileProgramInfo.uniformLocations.map,1),this.context.uniform2f(this.tileProgramInfo.uniformLocations.mapSize,this.mapWidth,this.mapHeight),this.context.bindBuffer(this.context.ARRAY_BUFFER,this.tileBufferInfo.position),this.context.vertexAttribPointer(this.tileProgramInfo.attributeLocations.position,3,this.context.FLOAT,!1,0,0),this.context.enableVertexAttribArray(this.tileProgramInfo.attributeLocations.position),this.updateScreenTileArray(),this.context.bindBuffer(this.context.ARRAY_BUFFER,this.tileBufferInfo.screenTile),this.context.vertexAttribPointer(this.tileProgramInfo.attributeLocations.screenTile,2,this.context.FLOAT,!1,0,0),this.context.enableVertexAttribArray(this.tileProgramInfo.attributeLocations.screenTile),this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER,this.tileBufferInfo.indices),this.context.viewport(0,0,this.context.canvas.width,this.context.canvas.height),this.context.drawElements(this.context.TRIANGLES,6,this.context.UNSIGNED_SHORT,0)}}var mt=H('<div><canvas class="svelte-mnct6x"></canvas> <br> <canvas class="svelte-mnct6x"></canvas></div>');function Tt(u,s){Z(s,!0),st(s,"name",3,"Tile View");let e=16,i=16,t=960,o=256,r=960,a=ft,c=256,f=256,m=c*f,x=new Uint16Array(Array.from({length:m},()=>Math.floor(Math.random()*t))),A=512,D=512,T=null,p=null,d=null,g=null,_=null,E=null,L=[],C=10,U=null,b=!1,w=[0,0],z=[0,0];function J(){for(let n=0,h=x.length;n<h;n++)x[n]=Math.floor(Math.random()*t)}function X(){for(let n of L)!n||!n.canvas||n.render()}function tt(){J(),X()}function et(n){if(!n)return null;for(let h of L)if(h.canvas==n)return h;return null}function B(n){let h=et(n.target);return h==null?(console.log("TileView: trackMouse: no TileRenderer for event target:",n.target),null):(z=w,w=[n.clientX,n.clientY],h)}function F(n,h){for(let v of L)v.panX+=n,v.panY+=h}function Y(n){B(n)&&(b=!0,console.log("TileView: onmousedown: event:",n,"target:",n.target,"mousePos:",w))}function y(n){if(!b)return;let h=B(n);if(!h)return;let v=h.screenToTile(w),I=h.screenToTile(z),O=I[0]-v[0],k=I[1]-v[1];console.log("TileView: onmousemove: event:",n,"target:",n.target,"dx:",O,"dy:",k,"tilePos:",v,"tilePosLast:",I,"mousePos:",w,"mousePosLast:",z),F(O,k),X()}function M(n){if(!b||(console.log("TileView: onmouseup: event:",n,"target:",n.target),!B(n)))return;let v=z[0]-w[0],I=z[1]-w[1];F(v,I),b=!1,X()}function $(n){if(n<=0){U!==null&&(clearInterval(U),U=null);return}U=setInterval(tt,1e3/C)}lt(()=>{if(console.log("TileView: $effect: ","tileWidth:",e,"tileHeight:",i,"tileCount:",t,"tileTextureWidth:",o,"tileTextureHeight:",r,"tileTexture:",a,"mapWidth:",c,"mapHeight:",f,"mapLength:",m,"mapData:",x),console.log("TileView: $effect:","canvas2D:",T),T==null){console.log("TileView: $effect: canvas2D is null!");return}if(p=T.getContext("2d"),console.log("TileView: $effect:","ctx2D:",p),p==null){console.log("TileView: $effect: no ctx!");return}if(d=new xt,console.log("TileView: $effect: canvasTileRenderer:",d),d==null){console.log("TileView: $effect: no canvasTileRenderer!");return}if(console.log("TileView: $effect: initialize:","canvas2D:",T,"ctx2D:",p,"canvasTileRenderer:",d),d.initialize(T,p,x,c,f,e,i,a).then(()=>{if(console.log("TileView: $effect: initialize: then:","canvas2D:",T,"ctx2D:",p,"canvasTileRenderer:",d),T==null){console.log("TileView: $effect: initialize: then: no canvas2D!");return}if(p==null){console.log("TileView: $effect: initialize: then: no ctx2D!");return}if(d==null){console.log("TileView: $effect: initialize: then: no canvasTileRenderer!");return}d.render(),L.push(d)}),console.log("TileView: $effect:","canvasGL:",g),g==null){console.log("TileView: $effect: canvasGL is null!");return}if(_=g.getContext("webgl2"),console.log("TileView: $effect:","ctxGL:",_),_==null){console.log("TileView: $effect: no ctxGL!");return}if(E=new dt,console.log("TileView: $effect: glTileRenderer:",E),d==null){console.log("TileView: $effect: no glTileRenderer!");return}return console.log("TileView: $effect: initialize:","canvasGL:",g,"ctxGL:",_,"glTileRenderer:",E),E.initialize(g,_,x,c,f,e,i,a).then(()=>{if(console.log("TileView: $effect: initialize: then:","canvasGL:",g,"ctxGL:",_,"glTileRenderer:",E),g==null){console.log("TileView: $effect: initialize: then: no canvasGL!");return}if(_==null){console.log("TileView: $effect: initialize: then: no ctxGL!");return}if(E==null){console.log("TileView: $effect: initialize: then: no glTileRenderer!");return}L.push(E),E.render()}),$(C),()=>{console.log("TileView: $effect: clean up"),$(0)}});var N=G(u,!0,mt),R=K(N);j(R,n=>T=n,T),W(R,"width",A),W(R,"height",D);var it=P(P(R,!0)),S=P(P(it,!0));j(S,n=>g=n,g),W(S,"width",A),W(S,"height",D),R.__mousedown=Y,R.__mousemove=y,R.__mouseup=M,S.__mousedown=Y,S.__mousemove=y,S.__mouseup=M,V(u,N),Q()}rt(["mousedown","mousemove","mouseup"]);var gt=H('<meta name="description" content="Micropolis Home">'),pt=H('<section class="svelte-5p4ri1"><h1 class="svelte-5p4ri1">Canvas and WebGL Tile View Test:</h1> <!></section>');function Rt(u,s){Z(s,!1),at();var e=G(u,!0,pt);ct(o=>{var r=G(o,!0,gt);ht.title="Micropolis Home",V(o,r)});var i=K(e),t=P(P(i,!0));Tt(t,{}),V(u,e),Q()}export{Rt as component,wt as universal};
