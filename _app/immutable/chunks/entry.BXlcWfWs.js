var st,it;import{s as le,a4 as lt}from"./runtime.DP-0YJoL.js";new URL("sveltekit-internal://");function ct(e,r){return e==="/"||r==="ignore"?e:r==="never"?e.endsWith("/")?e.slice(0,-1):e:r==="always"&&!e.endsWith("/")?e+"/":e}function ut(e){return e.split("%25").map(decodeURI).join("%25")}function ft(e){for(const r in e)e[r]=decodeURIComponent(e[r]);return e}function ce({href:e}){return e.split("#")[0]}const dt=["href","pathname","search","toString","toJSON"];function pt(e,r,t){const n=new URL(e);Object.defineProperty(n,"searchParams",{value:new Proxy(n.searchParams,{get(o,a){if(a==="get"||a==="getAll"||a==="has")return s=>(t(s),o[a](s));r();const i=Reflect.get(o,a);return typeof i=="function"?i.bind(o):i}}),enumerable:!0,configurable:!0});for(const o of dt)Object.defineProperty(n,o,{get(){return r(),e[o]},enumerable:!0,configurable:!0});return n}const ht="/__data.json",mt=".html__data.json";function gt(e){return e.endsWith(".html")?e.replace(/\.html$/,mt):e.replace(/\/$/,"")+ht}function yt(...e){let r=5381;for(const t of e)if(typeof t=="string"){let n=t.length;for(;n;)r=r*33^t.charCodeAt(--n)}else if(ArrayBuffer.isView(t)){const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let o=n.length;for(;o;)r=r*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}function wt(e){const r=atob(e),t=new Uint8Array(r.length);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t.buffer}const Le=window.fetch;window.fetch=(e,r)=>((e instanceof Request?e.method:(r==null?void 0:r.method)||"GET")!=="GET"&&B.delete(ue(e)),Le(e,r));const B=new Map;function vt(e,r){const t=ue(e,r),n=document.querySelector(t);if(n!=null&&n.textContent){let{body:o,...a}=JSON.parse(n.textContent);const i=n.getAttribute("data-ttl");return i&&B.set(t,{body:o,init:a,ttl:1e3*Number(i)}),n.getAttribute("data-b64")!==null&&(o=wt(o)),Promise.resolve(new Response(o,a))}return window.fetch(e,r)}function bt(e,r,t){if(B.size>0){const n=ue(e,t),o=B.get(n);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(o.body,o.init);B.delete(n)}}return window.fetch(r,t)}function ue(e,r){let t=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(r!=null&&r.headers||r!=null&&r.body){const n=[];r.headers&&n.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&n.push(r.body),t+=`[data-hash="${yt(...n)}"]`}return t}const kt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Et(e){const r=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Rt(e).map(t=>{const n=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(n)return r.push({name:n[1],matcher:n[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(o)return r.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!t)return;const a=t.split(/\[(.+?)\](?!\])/);return"/"+a.map((i,s)=>{if(s%2){if(i.startsWith("x+"))return fe(String.fromCharCode(parseInt(i.slice(2),16)));if(i.startsWith("u+"))return fe(String.fromCharCode(...i.slice(2).split("-").map(p=>parseInt(p,16))));const l=kt.exec(i),[,c,f,h,d]=l;return r.push({name:h,matcher:d,optional:!!c,rest:!!f,chained:f?s===1&&a[0]==="":!1}),f?"(.*?)":c?"([^/]*)?":"([^/]+?)"}return fe(i)}).join("")}).join("")}/?$`),params:r}}function St(e){return!/^\([^)]+\)$/.test(e)}function Rt(e){return e.slice(1).split("/").filter(St)}function At(e,r,t){const n={},o=e.slice(1),a=o.filter(s=>s!==void 0);let i=0;for(let s=0;s<r.length;s+=1){const l=r[s];let c=o[s-i];if(l.chained&&l.rest&&i&&(c=o.slice(s-i,s+1).filter(f=>f).join("/"),i=0),c===void 0){l.rest&&(n[l.name]="");continue}if(!l.matcher||t[l.matcher](c)){n[l.name]=c;const f=r[s+1],h=o[s+1];f&&!f.rest&&f.optional&&h&&l.chained&&(i=0),!f&&!h&&Object.keys(n).length===a.length&&(i=0);continue}if(l.optional&&l.chained){i++;continue}return}if(!i)return n}function fe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function xt({nodes:e,server_loads:r,dictionary:t,matchers:n}){const o=new Set(r);return Object.entries(t).map(([s,[l,c,f]])=>{const{pattern:h,params:d}=Et(s),p={id:s,exec:y=>{const u=h.exec(y);if(u)return At(u,d,n)},errors:[1,...f||[]].map(y=>e[y]),layouts:[0,...c||[]].map(i),leaf:a(l)};return p.errors.length=p.layouts.length=Math.max(p.errors.length,p.layouts.length),p});function a(s){const l=s<0;return l&&(s=~s),[l,e[s]]}function i(s){return s===void 0?s:[o.has(s),e[s]]}}function Ue(e,r=JSON.parse){try{return r(sessionStorage[e])}catch{}}function Pe(e,r,t=JSON.stringify){const n=t(r);try{sessionStorage[e]=n}catch{}}const $=[];function _t(e,r){return e!=e?r==r:e!==r||e&&typeof e=="object"||typeof e=="function"}function de(e,r=le){let t=null;const n=new Set;function o(s){if(_t(e,s)&&(e=s,t)){const l=!$.length;for(const c of n)c[1](),$.push(c,e);if(l){for(let c=0;c<$.length;c+=2)$[c][0]($[c+1]);$.length=0}}}function a(s){o(s(e))}function i(s,l=le){const c=[s,l];return n.add(c),n.size===1&&(t=r(o,a)||le),s(e),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:o,update:a,subscribe:i}}const U=((st=globalThis.__sveltekit_1v68s)==null?void 0:st.base)??"",Lt=((it=globalThis.__sveltekit_1v68s)==null?void 0:it.assets)??U,Ut="1719675856796",je="sveltekit:snapshot",Oe="sveltekit:scroll",Te="sveltekit:states",Pt="sveltekit:pageurl",C="sveltekit:history",F="sveltekit:navigation",H={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},M=location.origin;function $e(e){if(e instanceof URL)return e;let r=document.baseURI;if(!r){const t=document.getElementsByTagName("base");r=t.length?t[0].href:document.URL}return new URL(e,r)}function pe(){return{x:pageXOffset,y:pageYOffset}}function I(e,r){return e.getAttribute(`data-sveltekit-${r}`)}const Ce={...H,"":H.hover};function Ie(e){let r=e.assignedSlot??e.parentNode;return(r==null?void 0:r.nodeType)===11&&(r=r.host),r}function Ne(e,r){for(;e&&e!==r;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ie(e)}}function he(e,r){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const n=e instanceof SVGAElement?e.target.baseVal:e.target,o=!t||!!n||X(t,r)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),a=(t==null?void 0:t.origin)===M&&e.hasAttribute("download");return{url:t,external:o,target:n,download:a}}function K(e){let r=null,t=null,n=null,o=null,a=null,i=null,s=e;for(;s&&s!==document.documentElement;)n===null&&(n=I(s,"preload-code")),o===null&&(o=I(s,"preload-data")),r===null&&(r=I(s,"keepfocus")),t===null&&(t=I(s,"noscroll")),a===null&&(a=I(s,"reload")),i===null&&(i=I(s,"replacestate")),s=Ie(s);function l(c){switch(c){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ce[n??"off"],preload_data:Ce[o??"off"],keepfocus:l(r),noscroll:l(t),reload:l(a),replace_state:l(i)}}function De(e){const r=de(e);let t=!0;function n(){t=!0,r.update(i=>i)}function o(i){t=!1,r.set(i)}function a(i){let s;return r.subscribe(l=>{(s===void 0||t&&l!==s)&&i(s=l)})}return{notify:n,set:o,subscribe:a}}function jt(){const{set:e,subscribe:r}=de(!1);let t;async function n(){clearTimeout(t);try{const o=await fetch(`${Lt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const a=(await o.json()).version!==Ut;return a&&(e(!0),clearTimeout(t)),a}catch{return!1}}return{subscribe:r,check:n}}function X(e,r){return e.origin!==M||!e.pathname.startsWith(r)}const Ot=-1,Tt=-2,$t=-3,Ct=-4,It=-5,Nt=-6;function Dt(e,r){if(typeof e=="number")return o(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,n=Array(t.length);function o(a,i=!1){if(a===Ot)return;if(a===$t)return NaN;if(a===Ct)return 1/0;if(a===It)return-1/0;if(a===Nt)return-0;if(i)throw new Error("Invalid input");if(a in n)return n[a];const s=t[a];if(!s||typeof s!="object")n[a]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const l=s[0],c=r==null?void 0:r[l];if(c)return n[a]=c(o(s[1]));switch(l){case"Date":n[a]=new Date(s[1]);break;case"Set":const f=new Set;n[a]=f;for(let p=1;p<s.length;p+=1)f.add(o(s[p]));break;case"Map":const h=new Map;n[a]=h;for(let p=1;p<s.length;p+=2)h.set(o(s[p]),o(s[p+1]));break;case"RegExp":n[a]=new RegExp(s[1],s[2]);break;case"Object":n[a]=Object(s[1]);break;case"BigInt":n[a]=BigInt(s[1]);break;case"null":const d=Object.create(null);n[a]=d;for(let p=1;p<s.length;p+=2)d[s[p]]=o(s[p+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(s.length);n[a]=l;for(let c=0;c<s.length;c+=1){const f=s[c];f!==Tt&&(l[c]=o(f))}}else{const l={};n[a]=l;for(const c in s){const f=s[c];l[c]=o(f)}}return n[a]}return o(0)}const Ve=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ve];const Vt=new Set([...Ve]);[...Vt];function qt(e){return e.filter(r=>r!=null)}class Y{constructor(r,t){this.status=r,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class qe{constructor(r,t){this.status=r,this.location=t}}class me extends Error{constructor(r,t,n){super(n),this.status=r,this.text=t}}const Bt="x-sveltekit-invalidated",Ft="x-sveltekit-trailing-slash";function Q(e){return e instanceof Y||e instanceof me?e.status:500}function Mt(e){return e instanceof me?e.text:"Internal Error"}const T=Ue(Oe)??{},J=Ue(je)??{},j={url:De({}),page:De({}),navigating:de(null),updated:jt()};function ge(e){T[e]=pe()}function Jt(e,r){let t=e+1;for(;T[t];)delete T[t],t+=1;for(t=r+1;J[t];)delete J[t],t+=1}function N(e){return location.href=e.href,new Promise(()=>{})}function Be(){}let Z,ye,ee,O,we,D;const Fe=[],te=[];let x=null;const Me=[],Wt=[];let V=[],w={branch:[],error:null,url:null},ve=!1,re=!1,Je=!0,W=!1,G=!1,We=!1,be=!1,ke,R,_,L,ne;const z=new Set;async function Gt(e,r,t){var o,a;document.URL!==location.href&&(location.href=location.href),D=e,Z=xt(e),O=document.documentElement,we=r,ye=e.nodes[0],ee=e.nodes[1],ye(),ee(),R=(o=history.state)==null?void 0:o[C],_=(a=history.state)==null?void 0:a[F],R||(R=_=Date.now(),history.replaceState({...history.state,[C]:R,[F]:_},""));const n=T[R];n&&(history.scrollRestoration="manual",scrollTo(n.x,n.y)),t?await er(we,t):Qt(location.href,{replaceState:!0}),Zt()}function zt(){Fe.length=0,be=!1}function Ge(e){te.some(r=>r==null?void 0:r.snapshot)&&(J[e]=te.map(r=>{var t;return(t=r==null?void 0:r.snapshot)==null?void 0:t.capture()}))}function ze(e){var r;(r=J[e])==null||r.forEach((t,n)=>{var o,a;(a=(o=te[n])==null?void 0:o.snapshot)==null||a.restore(t)})}function He(){ge(R),Pe(Oe,T),Ge(_),Pe(je,J)}async function Ke(e,r,t,n){return se({type:"goto",url:$e(e),keepfocus:r.keepFocus,noscroll:r.noScroll,replace_state:r.replaceState,state:r.state,redirect_count:t,nav_token:n,accept:()=>{r.invalidateAll&&(be=!0)}})}async function Ht(e){if(e.id!==(x==null?void 0:x.id)){const r={};z.add(r),x={id:e.id,token:r,promise:Ze({...e,preload:r}).then(t=>(z.delete(r),t.type==="loaded"&&t.state.error&&(x=null),t))}}return x.promise}async function Ee(e){const r=Z.find(t=>t.exec(et(e)));r&&await Promise.all([...r.layouts,r.leaf].map(t=>t==null?void 0:t[1]()))}function Xe(e,r,t){var a;w=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),L=e.props.page,ke=new D.root({target:r,props:{...e.props,stores:j,components:te},hydrate:t}),ze(_);const o={from:null,to:{params:w.params,route:{id:((a=w.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};V.forEach(i=>i(o)),re=!0}async function oe({url:e,params:r,branch:t,status:n,error:o,route:a,form:i}){let s="never";if(U&&(e.pathname===U||e.pathname===U+"/"))s="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);e.pathname=ct(e.pathname,s),e.search=e.search;const l={type:"loaded",state:{url:e,params:r,branch:t,error:o,route:a},props:{constructors:qt(t).map(d=>d.node.component),page:L}};i!==void 0&&(l.props.form=i);let c={},f=!L,h=0;for(let d=0;d<Math.max(t.length,w.branch.length);d+=1){const p=t[d],y=w.branch[d];(p==null?void 0:p.data)!==(y==null?void 0:y.data)&&(f=!0),p&&(c={...c,...p.data},f&&(l.props[`data_${h}`]=c),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==o||i!==void 0&&i!==L.form||f)&&(l.props.page={error:o,params:r,route:{id:(a==null?void 0:a.id)??null},state:{},status:n,url:new URL(e),form:i??null,data:f?c:L.data}),l}async function Se({loader:e,parent:r,url:t,params:n,route:o,server_data_node:a}){var f,h,d;let i=null,s=!0;const l={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},c=await e();if((f=c.universal)!=null&&f.load){let p=function(...u){for(const g of u){const{href:v}=new URL(g,t);l.dependencies.add(v)}};const y={route:new Proxy(o,{get:(u,g)=>(s&&(l.route=!0),u[g])}),params:new Proxy(n,{get:(u,g)=>(s&&l.params.add(g),u[g])}),data:(a==null?void 0:a.data)??null,url:pt(t,()=>{s&&(l.url=!0)},u=>{s&&l.search_params.add(u)}),async fetch(u,g){let v;u instanceof Request?(v=u.url,g={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...g}):v=u;const A=new URL(v,t);return s&&p(A.href),A.origin===t.origin&&(v=A.href.slice(t.origin.length)),re?bt(v,A.href,g):vt(v,g)},setHeaders:()=>{},depends:p,parent(){return s&&(l.parent=!0),r()},untrack(u){s=!1;try{return u()}finally{s=!0}}};i=await c.universal.load.call(null,y)??null}return{node:c,loader:e,server:a,universal:(h=c.universal)!=null&&h.load?{type:"data",data:i,uses:l}:null,data:i??(a==null?void 0:a.data)??null,slash:((d=c.universal)==null?void 0:d.trailingSlash)??(a==null?void 0:a.slash)}}function Ye(e,r,t,n,o,a){if(be)return!0;if(!o)return!1;if(o.parent&&e||o.route&&r||o.url&&t)return!0;for(const i of o.search_params)if(n.has(i))return!0;for(const i of o.params)if(a[i]!==w.params[i])return!0;for(const i of o.dependencies)if(Fe.some(s=>s(new URL(i))))return!0;return!1}function Re(e,r){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?r??null:null}function Kt(e,r){if(!e)return new Set(r.searchParams.keys());const t=new Set([...e.searchParams.keys(),...r.searchParams.keys()]);for(const n of t){const o=e.searchParams.getAll(n),a=r.searchParams.getAll(n);o.every(i=>a.includes(i))&&a.every(i=>o.includes(i))&&t.delete(n)}return t}function Qe({error:e,url:r,route:t,params:n}){return{type:"loaded",state:{error:e,url:r,route:t,params:n,branch:[]},props:{page:L,constructors:[]}}}async function Ze({id:e,invalidating:r,url:t,params:n,route:o,preload:a}){if((x==null?void 0:x.id)===e)return z.delete(x.token),x.promise;const{errors:i,layouts:s,leaf:l}=o,c=[...s,l];i.forEach(m=>m==null?void 0:m().catch(()=>{})),c.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let f=null;const h=w.url?e!==w.url.pathname+w.url.search:!1,d=w.route?o.id!==w.route.id:!1,p=Kt(w.url,t);let y=!1;const u=c.map((m,k)=>{var P;const E=w.branch[k],S=!!(m!=null&&m[0])&&((E==null?void 0:E.loader)!==m[1]||Ye(y,d,h,p,(P=E.server)==null?void 0:P.uses,n));return S&&(y=!0),S});if(u.some(Boolean)){try{f=await nt(t,u)}catch(m){const k=await q(m,{url:t,params:n,route:{id:e}});return z.has(a)?Qe({error:k,url:t,params:n,route:o}):ae({status:Q(m),error:k,url:t,route:o})}if(f.type==="redirect")return f}const g=f==null?void 0:f.nodes;let v=!1;const A=c.map(async(m,k)=>{var P;if(!m)return;const E=w.branch[k],S=g==null?void 0:g[k];if((!S||S.type==="skip")&&m[1]===(E==null?void 0:E.loader)&&!Ye(v,d,h,p,(P=E.universal)==null?void 0:P.uses,n))return E;if(v=!0,(S==null?void 0:S.type)==="error")throw S;return Se({loader:m[1],url:t,params:n,route:o,parent:async()=>{var _e;const xe={};for(let ie=0;ie<k;ie+=1)Object.assign(xe,(_e=await A[ie])==null?void 0:_e.data);return xe},server_data_node:Re(S===void 0&&m[0]?{type:"skip"}:S??null,m[0]?E==null?void 0:E.server:void 0)})});for(const m of A)m.catch(()=>{});const b=[];for(let m=0;m<c.length;m+=1)if(c[m])try{b.push(await A[m])}catch(k){if(k instanceof qe)return{type:"redirect",location:k.location};if(z.has(a))return Qe({error:await q(k,{params:n,url:t,route:{id:o.id}}),url:t,params:n,route:o});let E=Q(k),S;if(g!=null&&g.includes(k))E=k.status??E,S=k.error;else if(k instanceof Y)S=k.body;else{if(await j.updated.check())return await N(t);S=await q(k,{params:n,url:t,route:{id:o.id}})}const P=await Xt(m,b,i);return P?await oe({url:t,params:n,branch:b.slice(0,P.idx).concat(P.node),status:E,error:S,route:o}):await rt(t,{id:o.id},S,E)}else b.push(void 0);return await oe({url:t,params:n,branch:b,status:200,error:null,route:o,form:r?void 0:null})}async function Xt(e,r,t){for(;e--;)if(t[e]){let n=e;for(;!r[n];)n-=1;try{return{idx:n+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ae({status:e,error:r,url:t,route:n}){const o={};let a=null;if(D.server_loads[0]===0)try{const l=await nt(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;a=l.nodes[0]??null}catch{(t.origin!==M||t.pathname!==location.pathname||ve)&&await N(t)}const i=await Se({loader:ye,url:t,params:o,route:n,parent:()=>Promise.resolve({}),server_data_node:Re(a)}),s={node:await ee(),loader:ee,universal:null,server:null,data:null};return await oe({url:t,params:o,branch:[i,s],status:e,error:r,route:null})}function Ae(e,r){if(!e||X(e,U))return;let t;try{t=D.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const n=et(t);for(const o of Z){const a=o.exec(n);if(a)return{id:e.pathname+e.search,invalidating:r,route:o,params:ft(a),url:e}}}function et(e){return ut(e.slice(U.length)||"/")}function tt({url:e,type:r,intent:t,delta:n}){let o=!1;const a=at(w,t,e,r);n!==void 0&&(a.navigation.delta=n);const i={...a.navigation,cancel:()=>{o=!0,a.reject(new Error("navigation cancelled"))}};return W||Me.forEach(s=>s(i)),o?null:a}async function se({type:e,url:r,popped:t,keepfocus:n,noscroll:o,replace_state:a,state:i={},redirect_count:s=0,nav_token:l={},accept:c=Be,block:f=Be}){const h=Ae(r,!1),d=tt({url:r,type:e,delta:t==null?void 0:t.delta,intent:h});if(!d){f();return}const p=R,y=_;c(),W=!0,re&&j.navigating.set(d.navigation),ne=l;let u=h&&await Ze(h);if(!u){if(X(r,U))return await N(r);u=await rt(r,{id:null},await q(new me(404,"Not Found",`Not found: ${r.pathname}`),{url:r,params:{},route:{id:null}}),404)}if(r=(h==null?void 0:h.url)||r,ne!==l)return d.reject(new Error("navigation aborted")),!1;if(u.type==="redirect")if(s>=20)u=await ae({status:500,error:await q(new Error("Redirect loop"),{url:r,params:{},route:{id:null}}),url:r,route:{id:null}});else return Ke(new URL(u.location,r).href,{},s+1,l),!1;else u.props.page.status>=400&&await j.updated.check()&&await N(r);if(zt(),ge(p),Ge(y),u.props.page.url.pathname!==r.pathname&&(r.pathname=u.props.page.url.pathname),i=t?t.state:i,!t){const b=a?0:1,m={[C]:R+=b,[F]:_+=b,[Te]:i};(a?history.replaceState:history.pushState).call(history,m,"",r),a||Jt(R,_)}if(x=null,u.props.page.state=i,re){w=u.state,u.props.page&&(u.props.page.url=r);const b=(await Promise.all(Wt.map(m=>m(d.navigation)))).filter(m=>typeof m=="function");if(b.length>0){let m=function(){V=V.filter(k=>!b.includes(k))};b.push(m),V.push(...b)}ke.$set(u.props),We=!0}else Xe(u,we,!1);const{activeElement:g}=document;await lt();const v=t?t.scroll:o?pe():null;if(Je){const b=r.hash&&document.getElementById(decodeURIComponent(r.hash.slice(1)));v?scrollTo(v.x,v.y):b?b.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==g&&document.activeElement!==document.body;!n&&!A&&tr(),Je=!0,u.props.page&&(L=u.props.page),W=!1,e==="popstate"&&ze(_),d.fulfil(void 0),V.forEach(b=>b(d.navigation)),j.navigating.set(null)}async function rt(e,r,t,n){return e.origin===M&&e.pathname===location.pathname&&!ve?await ae({status:n,error:t,url:e,route:r}):await N(e)}function Yt(){let e;O.addEventListener("mousemove",a=>{const i=a.target;clearTimeout(e),e=setTimeout(()=>{n(i,2)},20)});function r(a){n(a.composedPath()[0],1)}O.addEventListener("mousedown",r),O.addEventListener("touchstart",r,{passive:!0});const t=new IntersectionObserver(a=>{for(const i of a)i.isIntersecting&&(Ee(i.target.href),t.unobserve(i.target))},{threshold:0});function n(a,i){const s=Ne(a,O);if(!s)return;const{url:l,external:c,download:f}=he(s,U);if(c||f)return;const h=K(s);if(!h.reload)if(i<=h.preload_data){const d=Ae(l,!1);d&&Ht(d)}else i<=h.preload_code&&Ee(l.pathname)}function o(){t.disconnect();for(const a of O.querySelectorAll("a")){const{url:i,external:s,download:l}=he(a,U);if(s||l)continue;const c=K(a);c.reload||(c.preload_code===H.viewport&&t.observe(a),c.preload_code===H.eager&&Ee(i.pathname))}}V.push(o),o()}function q(e,r){if(e instanceof Y)return e.body;const t=Q(e),n=Mt(e);return D.hooks.handleError({error:e,event:r,status:t,message:n})??{message:n}}function Qt(e,r={}){return e=$e(e),e.origin!==M?Promise.reject(new Error("goto: invalid URL")):Ke(e,r,0)}function Zt(){var r;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(He(),!W){const o=at(w,void 0,null,"leave"),a={...o.navigation,cancel:()=>{n=!0,o.reject(new Error("navigation cancelled"))}};Me.forEach(i=>i(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&He()}),(r=navigator.connection)!=null&&r.saveData||Yt(),O.addEventListener("click",async t=>{var h;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Ne(t.composedPath()[0],O);if(!n)return;const{url:o,external:a,target:i,download:s}=he(n,U);if(!o)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const l=K(n);if(!(n instanceof SVGAElement)&&o.protocol!==location.protocol&&!(o.protocol==="https:"||o.protocol==="http:")||s)return;if(a||l.reload){tt({url:o,type:"link"})?W=!0:t.preventDefault();return}const[c,f]=o.href.split("#");if(f!==void 0&&c===ce(location)){const[,d]=w.url.href.split("#");if(d===f){t.preventDefault(),f===""||f==="top"&&n.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(h=n.ownerDocument.getElementById(f))==null||h.scrollIntoView();return}if(G=!0,ge(R),e(o),!l.replace_state)return;G=!1}t.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),se({type:"link",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),O.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),o=t.submitter;if(((o==null?void 0:o.formMethod)||n.method)!=="get")return;const a=new URL((o==null?void 0:o.hasAttribute("formaction"))&&(o==null?void 0:o.formAction)||n.action);if(X(a,U))return;const i=t.target,s=K(i);if(s.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(i),c=o==null?void 0:o.getAttribute("name");c&&l.append(c,(o==null?void 0:o.getAttribute("value"))??""),a.search=new URLSearchParams(l).toString(),se({type:"form",url:a,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??a.href===location.href})}),addEventListener("popstate",async t=>{var n;if((n=t.state)!=null&&n[C]){const o=t.state[C];if(ne={},o===R)return;const a=T[o],i=t.state[Te]??{},s=new URL(t.state[Pt]??location.href),l=t.state[F],c=ce(location)===ce(w.url);if(l===_&&(We||c)){e(s),T[R]=pe(),a&&scrollTo(a.x,a.y),i!==L.state&&(L={...L,state:i},ke.$set({page:L})),R=o;return}const f=o-R;await se({type:"popstate",url:s,popped:{state:i,scroll:a,delta:f},accept:()=>{R=o,_=l},block:()=>{history.go(-f)},nav_token:ne})}else if(!G){const o=new URL(location.href);e(o)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[C]:++R,[F]:_},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&j.navigating.set(null)});function e(t){w.url=t,j.page.set({...L,url:t}),j.page.notify()}}async function er(e,{status:r=200,error:t,node_ids:n,params:o,route:a,data:i,form:s}){ve=!0;const l=new URL(location.href);({params:o={},route:a={id:null}}=Ae(l,!1)||{});let c;try{const f=n.map(async(p,y)=>{const u=i[y];return u!=null&&u.uses&&(u.uses=ot(u.uses)),Se({loader:D.nodes[p],url:l,params:o,route:a,parent:async()=>{const g={};for(let v=0;v<y;v+=1)Object.assign(g,(await f[v]).data);return g},server_data_node:Re(u)})}),h=await Promise.all(f),d=Z.find(({id:p})=>p===a.id);if(d){const p=d.layouts;for(let y=0;y<p.length;y++)p[y]||h.splice(y,0,void 0)}c=await oe({url:l,params:o,branch:h,status:r,error:t,form:s,route:d??null})}catch(f){if(f instanceof qe){await N(new URL(f.location,location.href));return}c=await ae({status:Q(f),error:await q(f,{url:l,params:o,route:a}),url:l,route:a})}c.props.page&&(c.props.page.state={}),Xe(c,e,!0)}async function nt(e,r){var o;const t=new URL(e);t.pathname=gt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Ft,"1"),t.searchParams.append(Bt,r.map(a=>a?"1":"0").join(""));const n=await Le(t.href);if(!n.ok){let a;throw(o=n.headers.get("content-type"))!=null&&o.includes("application/json")?a=await n.json():n.status===404?a="Not Found":n.status===500&&(a="Internal Error"),new Y(n.status,a)}return new Promise(async a=>{var h;const i=new Map,s=n.body.getReader(),l=new TextDecoder;function c(d){return Dt(d,{Promise:p=>new Promise((y,u)=>{i.set(p,{fulfil:y,reject:u})})})}let f="";for(;;){const{done:d,value:p}=await s.read();if(d&&!f)break;for(f+=!p&&f?`
`:l.decode(p,{stream:!0});;){const y=f.indexOf(`
`);if(y===-1)break;const u=JSON.parse(f.slice(0,y));if(f=f.slice(y+1),u.type==="redirect")return a(u);if(u.type==="data")(h=u.nodes)==null||h.forEach(g=>{(g==null?void 0:g.type)==="data"&&(g.uses=ot(g.uses),g.data=c(g.data))}),a(u);else if(u.type==="chunk"){const{id:g,data:v,error:A}=u,b=i.get(g);i.delete(g),A?b.reject(c(A)):b.fulfil(c(v))}}}})}function ot(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function tr(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const r=document.body,t=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),t!==null?r.setAttribute("tabindex",t):r.removeAttribute("tabindex");const n=getSelection();if(n&&n.type!=="None"){const o=[];for(let a=0;a<n.rangeCount;a+=1)o.push(n.getRangeAt(a));setTimeout(()=>{if(n.rangeCount===o.length){for(let a=0;a<n.rangeCount;a+=1){const i=o[a],s=n.getRangeAt(a);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}n.removeAllRanges()}})}}}function at(e,r,t,n){var s,l;let o,a;const i=new Promise((c,f)=>{o=c,a=f});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((s=e.route)==null?void 0:s.id)??null},url:e.url},to:t&&{params:(r==null?void 0:r.params)??null,route:{id:((l=r==null?void 0:r.route)==null?void 0:l.id)??null},url:t},willUnload:!r,type:n,complete:i},fulfil:o,reject:a}}export{Gt as a,j as s};
