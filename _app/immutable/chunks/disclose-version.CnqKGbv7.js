import{r as g,t as x,w as ye,R as B,M as S,x as h,E as X,y as Ee,P as ee,D as ve,U as xe,C as ne,z as $,A as H,B as Te,F as be,j as C,G as Ce,e as L,H as U,m as N,J as Ne,K as Se,L as we,N as Re,l as te,O as re,a as Ae,p as Ie,Q as Oe,g as O,s as Le,d as j,T as k,u as D,V as Pe,q as ke,W as q,S as De}from"./runtime.BlpWqKUm.js";function se(e,n){return e===n}function le(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function ue(e,n){return!le(e,n)}function fe(e,n,t){return{b:t,c:null,d:null,e:null,f:e,l:0,i:null,r:null,v:n,w:0,x:null,y:null}}function oe(e,n){const t=e.r;t===null?e.r=[n]:t.push(n)}function w(e,n,t,r,s){const f=fe(e|ve,null,r);return f.i=n,f.x=x,h!==null&&(f.l=h.l+1,e&S||oe(h,f)),s&&ye(f,t),f}function _n(){return h?(h.f&S)===0:!1}function K(e){if(h===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=h.f&B&&x!==null&&!x.m,t=w(X,e,!1,g,!n);if(n){const r=x;(r.e??(r.e=[])).push(t)}return t}function Be(e){return w(X|S,e,!1,g,!0)}function Fe(e,n){return w(ee|S,e,n,g,!0)}function Ve(e){if(h===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=h!==null&&(h.f&B)!==0;return w(ee,()=>{const t=e();return Ee(),t},n,g,!0)}function b(e,n=g,t=!1,r=!0){let s=B;return t&&(s|=S),w(s,e,r,n,!0)}function Me(e){const t=h===null?H|Te:H,r=fe(t|ne,xe,g);return r.i=e,r.e=se,$!==null&&oe($,r),r}function $e(e){return Ue(be|ne,e)}function He(e){var t;const n=$e(e);return n.e=ue,x&&((t=x).d??(t.d=[])).push(n),n}function Ue(e,n){return{c:null,e:se,f:e,v:n,w:0}}var T,I,W,ce,ie,F,ae,je;function de(){T===void 0&&(T=Node.prototype,I=Element.prototype,W=Text.prototype,ce=T.appendChild,ie=T.cloneNode,je=document,I.__click=void 0,W.__nodeValue=" ",I.__className="",F=C(T,"firstChild").get,ae=C(T,"nextSibling").get,C(T,"textContent").set,C(I,"className").set)}function Y(e,n){ce.call(e,n)}function qe(e,n){return ie.call(e,n)}function y(){return document.createTextNode("")}function Ke(e){const n=F.call(e);if(_)if(n===null){const t=y();return e.appendChild(t),t}else return V(n);return n}function pn(e,n){if(_){const t=e[0];if(n&&(t==null?void 0:t.nodeType)!==3){const r=y();return m.unshift(r),t&&t.parentNode.insertBefore(r,t),r}return t!==null?V(t):t}return F.call(e)}function hn(e,n=!1){const t=ae.call(e);if(_){if(n&&(t==null?void 0:t.nodeType)!==3){const r=y();if(t){const s=m.indexOf(t);m.splice(s,0,r),t.parentNode.insertBefore(r,t)}else m.push(r);return r}if(t!==null)return V(t)}return t}function V(e){if(e.nodeType===8&&e.data.startsWith("ssr:")&&m.at(-1)!==e){const n=P(e),r=(n.at(-1)||e).nextSibling;return r.$$fragment=n,r}return e}let _=!1,m=null;function E(e){_=e!==null,m=e}function P(e,n=!1){const t=[];let r=e,s=null;for(;r!==null;){const f=r.nodeType,o=r.nextSibling;if(f===8){const c=r.data;if(c.startsWith("ssr:")){const i=c.slice(4);if(s===null)s=i;else if(i===s){if(n&&t.length===0){const l=y();t.push(l),r.parentNode.insertBefore(l,r)}return t}else t.push(r);r=o;continue}}s!==null&&t.push(r),r=o}return null}function M(e,n){if(_){let t=e;if(n&&(t=t.firstChild),t.nodeType===8){let r=t.$$fragment;r===void 0?r=P(t):Ce(()=>{t.$$fragment=void 0}),E(r)}else{const r=t.firstChild;E(r===null?[]:[r])}}}function We(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Ye(e,n,t){if(L(e)){for(var r=0,s;r<e.length;r++)s=e[r],t===null?Y(n,s):t.before(s);return e[0]}else e!==null&&(t===null?Y(n,e):t.before(e));return e}function v(e){var n=e;if(L(e))for(var t=0,r;t<e.length;t++)r=e[t],t===0&&(n=r),r.isConnected&&r.remove();else e.isConnected&&e.remove();return n}const ze=1,Ge=2,Ze=4,Je=8,z=["touchstart","touchmove","touchend"];function Qe(e,n,t){const r=[];for(const s of e){const f=s.r,o=s.e;n==="in"?(f==="in"||f==="both"?s.in():s.c(),s.d.inert=!1,U(o,!1)):n==="key"?f==="key"&&(s.p||(s.p=s.i(t)),s.in()):((f==="out"||f==="both")&&(s.p||(s.p=s.i()),r.push(s.o)),s.d.inert=!0,U(o,!0))}if(r.length>0){const s=Fe(()=>{N(s);const f=Be(()=>{N(f),Ne(r)})},!1)}}function Xe(e){return{d:null,e:null,i:e,p:null,r:null,t:Se}}function en(){return{d:null,e:null,p:g,r:null,t:we}}function nn(){return{d:null,e:null,p:g,r:null,t:Re}}const tn=new Set,G=new Set;function _e(e,n){let t;return()=>{if(t===void 0){const r=We(e);t=n?r:Ke(r)}return t}}function pe(e,n,t,r){if(_){t!==null&&M(t,!1);const s=m;if(s!==null)return e?s:s[0]}return n?qe(r(),!0):document.importNode(r(),!0)}function rn(e,n,t){return pe(!1,n,e,t)}function sn(e,n,t){return pe(!0,n,e,t)}const ln=_e(" ",!1),un=_e("<!>",!0);function mn(e){var n=rn(e,!0,ln);return _&&(n==null?void 0:n.nodeType)!==3&&(n=y(),e.before(n)),n}function gn(e){if(_&&e.nodeType!==3){const n=y();return e.before(n),n}return e}function yn(e){return sn(e,!0,un)}function he(e,n,t){const r=g,s=n?L(e)?e:Array.from(e.childNodes):e;!_&&t!==null&&Ye(s,null,t),r.d=s}function En(e,n){he(n,!1,e)}function vn(e,n){he(n,!0,e)}function xn(e,n){b(()=>fn(e,n()))}function fn(e,n){const t=e.__nodeValue,r=on(n);_&&e.nodeValue===r?e.__nodeValue=r:t!==r&&(e.nodeValue=r,e.__nodeValue=r)}function Z(e){return e!=null&&typeof e=="object"&&De in e}function Tn(e,n,t){b(()=>(Z(t)||q(t)&&Z(t.v)?n(e):D(()=>n(e)),()=>{b(()=>{D(()=>{(!q(t)||t.v===e)&&n(null)})})}))}function J(e,n){var c;const t=n.type,r=((c=n.composedPath)==null?void 0:c.call(n))||[];let s=r[0]||n.target;n.target!==s&&j(n,"target",{configurable:!0,value:s});let f=0;const o=n.__root;if(o){const i=r.indexOf(o);if(i!==-1&&e===document){n.__root=document;return}const l=r.indexOf(e);if(l===-1)return;i<=l&&(f=i+1)}for(s=r[f]||n.target,j(n,"currentTarget",{configurable:!0,get(){return s||document}});s!==null;){const i=s.parentNode||s.host||null,l="__"+t,u=s[l];if(u!==void 0&&!s.disabled)if(L(u)){const[a,...p]=u;a.apply(s,[n,...p])}else u.call(s,n);if(n.cancelBubble||i===e||s===e)break;s=i}n.__root=e,s=e}function bn(e,n,t,r){M(e),n===void 0?r!==null&&r(e):n(e,t)}function Cn(e){const n=en();let t=null,r=null,s=_;s&&(t=P(document.head.firstChild),r=m,E(t));try{const f=b(()=>{const o=n.d;o!==null&&(v(o),n.d=null);let c=null;_||(c=y(),document.head.appendChild(c)),e(c)},n,!1);te(f,()=>{const o=n.d;o!==null&&v(o)}),n.e=f}finally{s&&E(r)}}function Nn(e,n,t){const r=nn();let s=null;M(e);let f=null;r.r=l=>{const u=s,a=u.s;a.add(l),l.f(()=>{a.delete(l),a.size===0&&s!==u&&u.e!==null&&(u.d!==null&&(v(u.d),u.d=null),N(u.e),u.e=null)})};const o=()=>{const l={d:null,e:null,s:new Set,p:s},u=b(()=>{const a=r.d;a!==null&&(v(a),r.d=null),f&&t(f),l.d=r.d,r.d=null},r,!0);l.e=u,s=l},c=()=>{const l=s;if(l===null){o();return}const u=l.s;u.size===0?(l.d!==null&&(v(l.d),l.d=null),l.e?ke(l.e):o()):(o(),Qe(u,"out"))},i=b(()=>{const l=n();f!==l&&(f=l,c())},r,!1);te(i,()=>{let l=s;for(;l!==null;){const u=l.d;u!==null&&v(u);const a=l.e;a!==null&&N(a),l=l.p}}),r.e=i}function on(e){return typeof e=="string"?e:e==null?"":e+""}function Sn(e,n,t){t=t==null?null:t+"",(!_||e.getAttribute(n)!==t&&n!=="src"&&n!=="href"&&n!=="srcset")&&(t===null?e.removeAttribute(n):e.setAttribute(n,t))}function cn(e,n){de();const t=y();return n.target.appendChild(t),re(()=>me(e,{...n,anchor:t}),!1)}function wn(e,n){var i,l;de();const t=n.target,r=t.firstChild,s=P(r,!0),f=m;E(s);let o=null;s===null&&(o=y(),t.appendChild(o));let c=!1;try{return re(()=>{const u=me(e,{...n,anchor:o});return E(null),c=!0,u},!1)}catch(u){if(!c&&n.recover!==!1&&s!==null)return console.error("ERR_SVELTE_HYDRATION_MISMATCH",u),v(s),r.remove(),(l=(i=s.at(-1))==null?void 0:i.nextSibling)==null||l.remove(),E(null),cn(e,n);throw u}finally{E(f)}}function me(e,n){const t=new Set,r=n.target,s=Xe(n.intro||!1);let f;const o=b(()=>{n.context&&(Ae({}),x.c=n.context),n.props||(n.props={}),n.events&&(n.props.$$events=n.events),f=e(n.anchor,n.props)||{},n.context&&Ie()},s,!0);s.e=o;const c=J.bind(null,r),i=J.bind(null,document),l=u=>{for(let a=0;a<u.length;a++){const p=u[a];t.has(p)||(t.add(p),r.addEventListener(p,c,z.includes(p)?{passive:!0}:void 0),document.addEventListener(p,i,z.includes(p)?{passive:!0}:void 0))}};return l(Oe(tn)),G.add(l),ge.set(f,()=>{for(const a of t)r.removeEventListener(a,c);G.delete(l);const u=s.d;u!==null&&v(u),N(s.e)}),f}let ge=new WeakMap;function Rn(e){const n=ge.get(e);n==null||n()}function An(e,n,t,r){var p;var s=(t&ze)!==0,f=(t&Ge)!==0,o=e[n],c=(p=C(e,n))==null?void 0:p.set;if(o===void 0&&r!==void 0){if(c&&f)throw new Error("ERR_SVELTE_BINDING_FALLBACK");t&Je&&(r=r()),o=r,c&&c(o)}var i=()=>{var d=e[n];return d!==void 0&&(r=void 0),d===void 0?r:d};if(!(t&Ze))return i;if(c)return function(d){return arguments.length===1?(c(d),d):i()};var l=!1,u=He(o),a=Me(()=>{var d=i(),R=O(u);return l?(l=!1,R):u.v=d});return s||(a.e=ue),function(d,R=!1){var A=O(a);return arguments.length>0?((R||(s?d!==A:le(d,A)))&&(l=!0,Le(u,R?A:d),O(a)),d):A}}function In(){const e=x,n=e.u;n&&(Ve(()=>{Q(e),n.b.forEach(k)}),K(()=>{const t=D(()=>n.m.map(k));return()=>{for(const r of t)typeof r=="function"&&r()}}),K(()=>{Q(e),n.a.forEach(k)}))}function Q(e){if(e.d)for(const n of e.d)O(n);Pe(e.s)}const an="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(an);export{je as $,cn as A,Rn as B,An as C,Ve as D,Nn as E,xn as F,yn as G,mn as H,Tn as I,Ke as a,_e as b,vn as c,pn as d,hn as e,En as f,rn as g,Cn as h,In as i,Sn as j,bn as k,$e as l,He as m,_n as n,sn as o,v as p,M as q,b as r,gn as s,fn as t,K as u,Qe as v,_ as w,m as x,E as y,wn as z};
