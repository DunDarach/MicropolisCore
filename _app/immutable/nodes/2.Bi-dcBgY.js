var W=Object.defineProperty;var H=(a,i,t)=>i in a?W(a,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[i]=t;var s=(a,i,t)=>(H(a,typeof i!="symbol"?i+"":i,t),t);import{i as z,h as M,f as I,g as u,j as v,$ as _,b as X,m as Y,e as x,k as b,a as y}from"../chunks/disclose-version.DUeRa1m_.js";import{p as D,a as C,g as f,s as T}from"../chunks/runtime.CdZnOCbx.js";import{o as R}from"../chunks/main-client.UNMAZ1nK.js";const j=!0,q=Object.freeze(Object.defineProperty({__proto__:null,prerender:j},Symbol.toStringTag,{value:"Module"}));class E{constructor(){s(this,"context");s(this,"mapData");s(this,"mapWidth",0);s(this,"mapHeight",0);s(this,"tileWidth",0);s(this,"tileHeight",0);s(this,"panX",0);s(this,"panY",0);s(this,"viewWidth",0);s(this,"viewHeight",0);s(this,"zoom",1);this.context=void 0,this.mapData=[],this.mapWidth=0,this.mapHeight=0,this.tileWidth=0,this.tileHeight=0,this.viewWidth=0,this.viewHeight=0}initialize(i,t,e,o,l,h,n){return this.context=i,this.mapData=t,this.mapWidth=e,this.mapHeight=o,this.tileWidth=l,this.tileHeight=h,Promise.resolve()}handleDrag(i,t){this.panX+=i,this.panY+=t}handleZoom(i,t,e){this.zoom*=i,this.panX=(this.panX-t)*i+t,this.panY=(this.panY-e)*i+e}updateScreenSize(i){this.viewWidth=i.width,this.viewHeight=i.height}}class P extends E{constructor(){super();s(this,"tileImage",null)}initialize(t,e,o,l,h,n,r){return super.initialize(t,e,o,l,h,n,r).then(()=>(this.context=t,this.tileImage=new Image,this.tileImage.src=r,new Promise((p,m)=>{if(!this.context||!this.tileImage)throw new Error("Canvas context or tile image is not properly initialized.");this.tileImage.onload=()=>p(),this.tileImage.onerror=()=>m(new Error(`Failed to load image at ${r}`))})))}render(){if(!this.context||!this.tileImage)throw new Error("Canvas context or tile image is not properly initialized.");this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);const t=Math.max(0,Math.floor(this.panX/this.zoom)),e=Math.max(0,Math.floor(this.panY/this.zoom)),o=Math.min(this.mapWidth,Math.ceil((this.panX+this.viewWidth/this.zoom)/this.tileWidth)),l=Math.min(this.mapHeight,Math.ceil((this.panY+this.viewHeight/this.zoom)/this.tileHeight));for(let h=e;h<l;h++)for(let n=t;n<o;n++){const r=this.mapData[h*this.mapWidth+n],p=(n*this.tileWidth-this.panX)*this.zoom,m=(h*this.tileHeight-this.panY)*this.zoom,d=r%(this.tileImage.width/this.tileWidth)*this.tileWidth,g=Math.floor(r/(this.tileImage.width/this.tileWidth))*this.tileHeight;this.context.drawImage(this.tileImage,d,g,this.tileWidth,this.tileHeight,p,m,this.tileWidth*this.zoom,this.tileHeight*this.zoom)}}}var O=X('<meta name="description" content="Micropolis Home">'),S=b(`<section class="svelte-19xx0bt"><script>
	<\/script> <canvas width="512" height="512"></canvas></section>`);function B(a,i){C(i,!1);let t=Y(null),e=null;const o=256,l=256,h=16,n=16,r="/images/tiles.png",p=Array.from({length:o*l},()=>Math.floor(Math.random()*256));R(()=>{if(f(t)==null){console.log("canvas is null!");return}const c=f(t).getContext("2d");if(c==null){console.log("no 2d canvas context!");return}if(e=new P,e==null){console.log("no CanvasTileRenderer!");return}e.initialize(c,p,o,l,h,n,r).then(()=>{if(e==null){console.log("no renderer!");return}e.render()})}),z();var m=v(a,!0,S);M(c=>{var w=v(c,!0,O);_.title="Micropolis Home",u(c,w)});var d=y(m),g=x(x(d,!0));I(g,c=>T(t,c),t),u(a,m),D()}export{B as component,q as universal};
