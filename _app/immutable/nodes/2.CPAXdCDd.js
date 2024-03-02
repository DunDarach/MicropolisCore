var H=Object.defineProperty;var F=(r,s,e)=>s in r?H(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var l=(r,s,e)=>(F(r,typeof s!="symbol"?s+"":s,e),e);import{l as Y,p as y,u as M,n as I,j as S,f as L,a as B,e as _,g as z,b as P,i as $,h as N,$ as O}from"../chunks/disclose-version.PTWSzQB1.js";import{p as X,a as G}from"../chunks/runtime.DsRB8KFS.js";const k=!0,nt=Object.freeze(Object.defineProperty({__proto__:null,prerender:k},Symbol.toStringTag,{value:"Module"})),j=""+new URL("../assets/tiles.CXP0i5T3.png",import.meta.url).href;class V{constructor(){l(this,"canvas");l(this,"context");l(this,"mapData");l(this,"mapWidth",0);l(this,"mapHeight",0);l(this,"tileWidth",0);l(this,"tileHeight",0);l(this,"panX",0);l(this,"panY",0);l(this,"viewWidth",0);l(this,"viewHeight",0);l(this,"zoom",1);this.canvas=void 0,this.context=void 0,this.mapData=[],this.mapWidth=0,this.mapHeight=0,this.tileWidth=0,this.tileHeight=0,this.viewWidth=0,this.viewHeight=0}initialize(s,e,o,t,i,n,a,c){return this.canvas=s,this.context=e,this.mapData=o,this.mapWidth=t,this.mapHeight=i,this.tileWidth=n,this.tileHeight=a,Promise.resolve()}handleDrag(s,e){this.panX+=s,this.panY+=e}handleZoom(s,e,o){this.zoom*=s,this.panX=(this.panX-e)*s+e,this.panY=(this.panY-o)*s+o}updateScreenSize(s,e){this.viewWidth=s,this.viewHeight=e}}class K extends V{constructor(){super();l(this,"tileImage",null)}initialize(e,o,t,i,n,a,c,h){return super.initialize(e,o,t,i,n,a,c,h).then(()=>(this.context=o,this.tileImage=new Image,this.tileImage.src=h,new Promise((f,m)=>{if(!this.context||!this.tileImage)throw new Error("Canvas context or tile image is not properly initialized.");this.tileImage.onload=()=>f(),this.tileImage.onerror=()=>m(new Error(`Failed to load image at ${h}`))})))}render(){if(console.log("CanvasTileRenderer: render: this:",this),!this.canvas||!this.context||!this.tileImage)throw new Error("The canvas, 2d context, or tile image are not properly initialized.");this.updateScreenSize(this.canvas.width,this.canvas.height),this.context.fillStyle="#000000",this.context.fillRect(0,0,this.context.canvas.width,this.context.canvas.height);const e=this.context.canvas.width,o=this.context.canvas.height,t=e/2,i=o/2;this.tileWidth*this.zoom,this.tileHeight*this.zoom;const n=Math.max(0,Math.floor(this.panX/this.zoom)),a=Math.max(0,Math.floor(this.panY/this.zoom)),c=this.mapWidth,h=this.mapHeight;for(let f=a;f<h;f++)for(let m=n;m<c;m++){const w=this.mapData[f*this.mapWidth+m],R=t+(m-this.panX)*this.tileWidth*this.zoom,x=i+(f-this.panY)*this.tileHeight*this.zoom,d=this.tileImage.width/this.tileWidth,u=w%d*this.tileWidth,T=Math.floor(w/d)*this.tileHeight;this.context.drawImage(this.tileImage,u,T,this.tileWidth,this.tileHeight,R,x,this.tileWidth*this.zoom,this.tileHeight*this.zoom)}}}class Q extends V{constructor(){super();l(this,"tilesTexture",null);l(this,"mapTexture",null);l(this,"tilesWidth",0);l(this,"tilesHeight",0);l(this,"tileProgramInfo",null);l(this,"tileBufferInfo",null);l(this,"screenTileArray",new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]))}initialize(e,o,t,i,n,a,c,h){return super.initialize(e,o,t,i,n,a,c,h).then(()=>(this.context=o,this.context.getExtension("EXT_texture_norm16")?(this.tileProgramInfo=this.createShaderProgram(),this.tileBufferInfo=this.createBuffers(),this.mapTexture=this.createMapTexture(t,i,n),this.loadTexture(h)):(console.error("R32UI format is not supported on this device."),null))).then(()=>{}).catch(f=>{throw f})}createMapTexture(e,o,t){if(!this.context)return console.error("GL context is not initialized."),null;const i=this.context.createTexture();return this.context.bindTexture(this.context.TEXTURE_2D,i),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.R16UI,o,t,0,this.context.RED_INTEGER,this.context.UNSIGNED_SHORT,new Uint16Array(e)),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MAG_FILTER,this.context.NEAREST),i}loadTexture(e){return new Promise((o,t)=>{if(!this.context){t(new Error("GL context is not initialized."));return}const i=this.context.createTexture();this.tilesTexture=i,this.context.bindTexture(this.context.TEXTURE_2D,i),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGBA,1,1,0,this.context.RGBA,this.context.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]));const n=new Image;n.onload=()=>{if(!this.context){t(new Error("GL context is not initialized."));return}this.tilesWidth=n.width,this.tilesHeight=n.height,this.context.bindTexture(this.context.TEXTURE_2D,i),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGBA,this.context.RGBA,this.context.UNSIGNED_BYTE,n),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.LINEAR),o()},n.onerror=()=>{t(new Error(`Failed to load texture at ${e}`))},n.src=e})}createShaderProgram(){if(!this.context)throw new Error("The WebGL context is not initialized.");const t=this.compileShaders(`#version 300 es
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
`);if(!t)throw new Error("Unable to create shader program");const i={position:this.context.getAttribLocation(t,"a_position"),screenTile:this.context.getAttribLocation(t,"a_screenTile")},n={tileSize:this.context.getUniformLocation(t,"u_tileSize"),tilesSize:this.context.getUniformLocation(t,"u_tilesSize"),tiles:this.context.getUniformLocation(t,"u_tiles"),mapSize:this.context.getUniformLocation(t,"u_mapSize"),map:this.context.getUniformLocation(t,"u_map")};for(const[a,c]of Object.entries(i))if(c===-1)throw new Error(`Shader attribute location not found: ${a}`);for(const[a,c]of Object.entries(n))if(c===null)throw new Error(`Shader uniform location not found: ${a}`);return{program:t,attributeLocations:i,uniformLocations:n}}compileShaders(e,o){if(!this.context)throw new Error("The WebGL context is not initialized.");const t=this.loadShader(this.context.VERTEX_SHADER,e),i=this.loadShader(this.context.FRAGMENT_SHADER,o),n=this.context.createProgram();if(!n)throw new Error("Unable to create shader program");if(this.context.attachShader(n,t),this.context.attachShader(n,i),this.context.linkProgram(n),!this.context.getProgramParameter(n,this.context.LINK_STATUS)){const a=this.context.getProgramInfoLog(n);throw this.context.deleteProgram(n),new Error("Failed to link shader program: "+a)}return n}loadShader(e,o){if(!this.context)throw new Error("The WebGL context is not initialized.");const t=this.context.createShader(e);if(!t)throw new Error("Unable to create shader.");if(this.context.shaderSource(t,o),this.context.compileShader(t),!this.context.getShaderParameter(t,this.context.COMPILE_STATUS)){const i=this.context.getShaderInfoLog(t);throw this.context.deleteShader(t),new Error("An error occurred compiling the shaders: "+i)}return t}createBuffers(){if(!this.context)throw new Error("The WebGL context is not initialized.");const e=this.context.createBuffer();this.context.bindBuffer(this.context.ARRAY_BUFFER,e);const o=[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0];this.context.bufferData(this.context.ARRAY_BUFFER,new Float32Array(o),this.context.STATIC_DRAW);const t=this.context.createBuffer(),i=this.context.createBuffer();this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER,i);const n=[0,1,2,2,1,3];return this.context.bufferData(this.context.ELEMENT_ARRAY_BUFFER,new Uint16Array(n),this.context.STATIC_DRAW),{position:e,screenTile:t,indices:i}}updateScreenTileArray(){if(!this.context||!this.tileBufferInfo)throw new Error("The WebGL context is not initialized.");const e=this.panX,o=this.panX+this.viewWidth/this.zoom,t=this.panY,i=this.panY+this.viewHeight/this.zoom;this.screenTileArray.set([e,i,o,i,e,t,e,t,o,i,o,t]),this.context.bindBuffer(this.context.ARRAY_BUFFER,this.tileBufferInfo.screenTile),this.context.bufferData(this.context.ARRAY_BUFFER,this.screenTileArray,this.context.DYNAMIC_DRAW)}render(){if(console.log("GLTileRenderer: render: this:",this),!this.canvas||!this.context||!this.tileProgramInfo||!this.tileBufferInfo||!this.tilesTexture)throw new Error("The canvas, WebGL context, shaders, or textures are not properly initialized.");this.updateScreenSize(this.canvas.width,this.canvas.height),this.context.viewport(0,0,this.context.drawingBufferWidth,this.context.drawingBufferHeight),this.context.clearColor(0,0,0,1),this.context.clearDepth(1),this.context.enable(this.context.DEPTH_TEST),this.context.depthFunc(this.context.LEQUAL),this.context.clear(this.context.COLOR_BUFFER_BIT|this.context.DEPTH_BUFFER_BIT),this.context.useProgram(this.tileProgramInfo.program),this.context.uniform2f(this.tileProgramInfo.uniformLocations.tileSize,this.tileWidth,this.tileHeight),this.context.uniform2f(this.tileProgramInfo.uniformLocations.tilesSize,this.tilesWidth,this.tilesHeight),this.context.activeTexture(this.context.TEXTURE0),this.context.bindTexture(this.context.TEXTURE_2D,this.tilesTexture),this.context.uniform1i(this.tileProgramInfo.uniformLocations.tiles,0),this.context.activeTexture(this.context.TEXTURE1),this.context.bindTexture(this.context.TEXTURE_2D,this.mapTexture),this.context.uniform1i(this.tileProgramInfo.uniformLocations.map,1),this.context.uniform2f(this.tileProgramInfo.uniformLocations.mapSize,this.mapWidth,this.mapHeight),this.context.bindBuffer(this.context.ARRAY_BUFFER,this.tileBufferInfo.position),this.context.vertexAttribPointer(this.tileProgramInfo.attributeLocations.position,3,this.context.FLOAT,!1,0,0),this.context.enableVertexAttribArray(this.tileProgramInfo.attributeLocations.position),this.updateScreenTileArray(),this.context.bindBuffer(this.context.ARRAY_BUFFER,this.tileBufferInfo.screenTile),this.context.vertexAttribPointer(this.tileProgramInfo.attributeLocations.screenTile,2,this.context.FLOAT,!1,0,0),this.context.enableVertexAttribArray(this.tileProgramInfo.attributeLocations.screenTile),this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER,this.tileBufferInfo.indices),this.context.viewport(0,0,this.context.canvas.width,this.context.canvas.height),this.context.drawElements(this.context.TRIANGLES,6,this.context.UNSIGNED_SHORT,0)}}function U(r){console.log("TileView: onmousedown: event:",r,"target:",r.target)}function b(r){console.log("TileView: onmouseup: event:",r,"target:",r.target)}function W(r){console.log("TileView: onmousemove: event:",r,"target:",r.target)}var Z=P('<div><canvas class="svelte-mnct6x"></canvas> <br> <canvas class="svelte-mnct6x"></canvas></div>');function q(r,s){G(s,!0),y(s,"name",3,"Tile View");let e=16,o=16,t=960,i=256,n=960,a=j,c=256,h=256,f=c*h,m=Array.from({length:f},()=>Math.floor(Math.random()*t)),w=512,R=512,x=null,d=null,u=null,T=null,g=null,E=null;M(()=>{if(console.log("TileView: $effect: ","tileWidth:",e,"tileHeight:",o,"tileCount:",t,"tileTextureWidth:",i,"tileTextureHeight:",n,"tileTexture:",a,"mapWidth:",c,"mapHeight:",h,"mapLength:",f,"mapData:",m),console.log("TileView: $effect:","canvas2D:",x),x==null){console.log("TileView: $effect: canvas2D is null!");return}if(d=x.getContext("2d"),console.log("TileView: $effect:","ctx2D:",d),d==null){console.log("TileView: $effect: no ctx!");return}if(u=new K,console.log("TileView: $effect: canvasTileRenderer:",u),u==null){console.log("TileView: $effect: no canvasTileRenderer!");return}if(console.log("TileView: $effect: initialize:","canvas2D:",x,"ctx2D:",d,"canvasTileRenderer:",u),u.initialize(x,d,m,c,h,e,o,a).then(()=>{if(console.log("TileView: $effect: initialize: then:","canvas2D:",x,"ctx2D:",d,"canvasTileRenderer:",u),x==null){console.log("TileView: $effect: initialize: then: no canvas2D!");return}if(d==null){console.log("TileView: $effect: initialize: then: no ctx2D!");return}if(u==null){console.log("TileView: $effect: initialize: then: no canvasTileRenderer!");return}u.updateScreenSize(x.width,x.height),u.panX=c/2,u.panY=h/2,u.render()}),console.log("TileView: $effect:","canvasGL:",T),T==null){console.log("TileView: $effect: canvasGL is null!");return}if(g=T.getContext("webgl2"),console.log("TileView: $effect:","ctxGL:",g),g==null){console.log("TileView: $effect: no ctxGL!");return}if(E=new Q,console.log("TileView: $effect: glTileRenderer:",E),u==null){console.log("TileView: $effect: no glTileRenderer!");return}return console.log("TileView: $effect: initialize:","canvasGL:",T,"ctxGL:",g,"glTileRenderer:",E),E.initialize(T,g,m,c,h,e,o,a).then(()=>{if(console.log("TileView: $effect: initialize: then:","canvasGL:",T,"ctxGL:",g,"glTileRenderer:",E),T==null){console.log("TileView: $effect: initialize: then: no canvasGL!");return}if(g==null){console.log("TileView: $effect: initialize: then: no ctxGL!");return}if(E==null){console.log("TileView: $effect: initialize: then: no glTileRenderer!");return}}),()=>{console.log("TileView: $effect: clean up")}});var D=z(r,!0,Z),p=B(D);I(p,A=>x=A,x),S(p,"width",w),S(p,"height",R);var C=_(_(p,!0)),v=_(_(C,!0));I(v,A=>T=A,T),S(v,"width",w),S(v,"height",R),p.__mousedown=[U],p.__mousemove=[W],p.__mouseup=[b],v.__mousedown=[U],v.__mousemove=[W],v.__mouseup=[b],L(r,D),X()}Y(["mousedown","mousemove","mouseup"]);var J=P('<meta name="description" content="Micropolis Home">'),tt=P('<section class="svelte-5p4ri1"><h1 class="svelte-5p4ri1">Canvas and WebGL Tile View Test:</h1> <!></section>');function st(r,s){G(s,!1),$();var e=z(r,!0,tt);N(i=>{var n=z(i,!0,J);O.title="Micropolis Home",L(i,n)});var o=B(e),t=_(_(o,!0));q(t,{}),L(r,e),X()}export{st as component,nt as universal};
