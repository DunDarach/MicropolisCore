var N=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var _=(t,e,n)=>(N(t,e,"read from private field"),n?n.call(t):e.get(t)),T=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},F=(t,e,n,r)=>(N(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);import{i as ne,S as g,o as re,d as ae,e as $,f as ie,s as E,h as G,j as oe,k as H,g as x,U as I,l as le,m as ce,q as W,r as O,t as ue,I as fe,a as de,v as _e,p as me}from"../chunks/runtime.CdZnOCbx.js";import{n as R,m as Y,p as Z,r as A,q as L,v as he,w as p,x as ge,y as j,z,A as ve,B as ye,C as be,D as B,E as we,u as Ee,c as C,F as q,G as ke,f as J,o as xe,d as D,e as Q,H as U,g as Pe,a as Re,I as Ie,b as ee,s as Le,j as V}from"../chunks/disclose-version.DMY_hBnz.js";import{o as Oe}from"../chunks/main-client.sAjnxwfy.js";function P(t,e=!0,n){if(typeof t=="object"&&t!=null&&!ne(t)){if(g in t){const s=t[g];if(s.t===t||s.p===t)return s.p}const r=le(t);if(r===re||r===ae){const s=new Proxy(t,pe);return $(t,g,{value:{s:new Map,v:R(0),a:ie(t),i:e,p:s,t},writable:!0,enumerable:!1}),s}}return t}const pe={defineProperty(t,e,n){if(n.value){const r=t[g],s=r.s.get(e);s!==void 0&&E(s,P(n.value,r.i,r.o))}return Reflect.defineProperty(t,e,n)},deleteProperty(t,e){const n=t[g],r=n.s.get(e),s=n.a,i=delete t[e];if(s&&i){const a=n.s.get("length"),o=t.length-1;a!==void 0&&a.v!==o&&E(a,o)}return r!==void 0&&E(r,I),i&&G(n.v),i},get(t,e,n){var i;if(e===g)return Reflect.get(t,g);const r=t[g];let s=r.s.get(e);if(s===void 0&&(Z()||oe)&&(!(e in t)||(i=H(t,e))!=null&&i.writable)&&(s=(r.i?R:Y)(P(t[e],r.i,r.o)),r.s.set(e,s)),s!==void 0){const a=x(s);return a===I?void 0:a}return Reflect.get(t,e,n)},getOwnPropertyDescriptor(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);if(n&&"value"in n){const s=t[g].s.get(e);s&&(n.value=x(s))}return n},has(t,e){var i;if(e===g)return!0;const n=t[g],r=Reflect.has(t,e);let s=n.s.get(e);return(s!==void 0||Z()&&(!r||(i=H(t,e))!=null&&i.writable))&&(s===void 0&&(s=(n.i?R:Y)(r?P(t[e],n.i,n.o):I),n.s.set(e,s)),x(s)===I)?!1:r},set(t,e,n){const r=t[g],s=r.s.get(e);s!==void 0&&E(s,P(n,r.i,r.o));const i=r.a,a=!(e in t);if(i&&e==="length")for(let o=n;o<t.length;o+=1){const m=r.s.get(o+"");m!==void 0&&E(m,I)}if(t[e]=n,a){if(i){const o=r.s.get("length"),m=t.length;o!==void 0&&o.v!==m&&E(o,m)}G(r.v)}return!0},ownKeys(t){const e=t[g];return x(e.v),Reflect.ownKeys(t)}};function Ce(){return{a:null,ae:null,c:null,ce:null,d:null,e:null,p:ue,r:null,t:fe,v:!1}}function K(t,e,n,r){const s=Ce();he(t);let i=!1,a=null,o=null,m=!1,b=null;const v=A(()=>{var d,u;const f=!!e();if(s.v!==f||!m){if(s.v=f,m){const h=s.c,w=s.a;f?(w===null||w.size===0?O(c):p(w,"out"),h===null||h.size===0?O(l):p(h,"in")):(h===null||h.size===0?O(l):p(h,"out"),w===null||w.size===0?O(c):p(w,"in"))}else if(ge){const h=(u=(d=j)==null?void 0:d[0])==null?void 0:u.data;!h||h==="ssr:if:true"&&!f||h==="ssr:if:false"&&f?(L(j),z(null),i=!0):j.shift()}m=!0}},s,!1),l=A((f,d)=>{const u=s.v;!u&&a!==null&&(L(a),a=null),u&&b!==d&&(n(t),i&&b===null&&z([]),b=d,a=s.d),s.d=null},s,!0);s.ce=l;const c=A((f,d)=>{const u=s.v;u&&o!==null&&(L(o),o=null),!u&&b!==d&&(r!==null&&r(t),i&&b===null&&z([]),b=d,o=s.d),s.d=null},s,!0);s.ae=c,ce(v,()=>{a!==null&&L(a),o!==null&&L(o),W(l),W(c)}),s.e=v}function De(t){return class extends Se{constructor(e){super({component:t,...e})}}}var k,y;class Se{constructor(e){T(this,k,{});T(this,y,void 0);const n=P({...e.props||{},$$events:_(this,k)},!1);F(this,y,(e.hydrate?ve:ye)(e.component,{target:e.target,props:n,context:e.context,intro:e.intro,recover:e.recover}));for(const r of Object.keys(_(this,y)))$(this,r,{get(){return _(this,y)[r]},set(s){_(this,y)[r]=s},enumerable:!0});_(this,y).$set=r=>{Object.assign(n,r)},_(this,y).$destroy=()=>{be(_(this,y))}}$set(e){_(this,y).$set(e)}$on(e,n){_(this,k)[e]=_(this,k)[e]||[];const r=(...s)=>n.call(this,...s);return _(this,k)[e].push(r),()=>{_(this,k)[e]=_(this,k)[e].filter(s=>s!==r)}}$destroy(){_(this,y).$destroy()}}k=new WeakMap,y=new WeakMap;const Te="modulepreload",Ae=function(t,e){return new URL(t,e).href},X={},S=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(a=>{if(a=Ae(a,r),a in X)return;X[a]=!0;const o=a.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const c=i[l];if(c.href===a&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${m}`))return;const v=document.createElement("link");if(v.rel=o?"stylesheet":Te,o||(v.as="script",v.crossOrigin=""),v.href=a,document.head.appendChild(v),o)return new Promise((l,c)=>{v.addEventListener("load",l),v.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},Me={};var je=ee('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ze=ee("<!> <!>",!0);function Be(t,e){de(e,!0);let n=B(e,"components",11,()=>[]),r=B(e,"data_0",3,null),s=B(e,"data_1",3,null);we(()=>e.stores.page.set(e.page)),Ee(()=>{e.stores,e.page,e.constructors,n(),e.form,r(),s(),e.stores.page.notify()});let i=R(!1),a=R(!1),o=R(null);Oe(()=>{const l=e.stores.page.subscribe(()=>{x(i)&&(E(a,!0),_e().then(()=>{E(o,P(document.title||"untitled page"))}))});return E(i,!0),l});var m=xe(t,!0,ze),b=D(m),v=Q(Q(b,!0));K(b,()=>e.constructors[1],l=>{var c=U(l),f=D(c);q(f,()=>e.constructors[0],d=>{V(d(f,{get data(){return r()},children:(u,h)=>{var w=U(u),M=D(w);q(M,()=>e.constructors[1],te=>{V(te(M,{get data(){return s()},get form(){return e.form}}),se=>n()[1]=se,n)}),C(u,w)}}),u=>n()[0]=u,n)}),C(l,c)},l=>{var c=U(l),f=D(c);q(f,()=>e.constructors[0],d=>{V(d(f,{get data(){return r()},get form(){return e.form}}),u=>n()[0]=u,n)}),C(l,c)}),K(v,()=>x(i),l=>{var c=Pe(l,!0,je),f=Re(c);K(f,()=>x(a),d=>{var u=Ie(d),h=Le(u);ke(h,()=>x(o)),J(d,u)},null),J(l,c)},null),C(t,m),me()}const Ne=De(Be),Fe=[()=>S(()=>import("../nodes/0.BolR6HNB.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>S(()=>import("../nodes/1.BBKp5eMi.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url),()=>S(()=>import("../nodes/2.CjFUi2x5.js"),__vite__mapDeps([7,1,2,8,9]),import.meta.url),()=>S(()=>import("../nodes/3.DSKy_wDe.js"),__vite__mapDeps([10,1,2]),import.meta.url)],Ge=[],He={"/":[2],"/about":[3]},We={handleError:({error:t})=>{console.error(t)},reroute:()=>{}};export{He as dictionary,We as hooks,Me as matchers,Fe as nodes,Ne as root,Ge as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.BolR6HNB.js","../chunks/disclose-version.DMY_hBnz.js","../chunks/runtime.CdZnOCbx.js","../chunks/stores.BTHdhDVJ.js","../chunks/entry.L9fDOGS8.js","../assets/0.BdnsRUYR.css","../nodes/1.BBKp5eMi.js","../nodes/2.CjFUi2x5.js","../chunks/main-client.sAjnxwfy.js","../assets/2.B_lrqDPb.css","../nodes/3.DSKy_wDe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
