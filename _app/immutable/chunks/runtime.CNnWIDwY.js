var Nn=Array.isArray,Jn=Array.from,Qn=Object.isFrozen,Xn=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,In=Object.getOwnPropertyDescriptors,tt=Object.prototype,et=Array.prototype,Pn=Object.getPrototypeOf;const k=2,on=4,x=8,un=16,T=32,Z=64,R=128,b=256,y=512,w=1024,D=2048,q=4096,F=8192,qn=16384,ln=32768,rt=65536,X=Symbol("$state"),st=Symbol("$state.frozen");function fn(n){return n===this.v}function xn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function an(n){return!xn(n,this.v)}const ot=1,ut=2,lt=4,ft=8,it=1,at=2,ct="[",Fn="]",_t="",pt=`${Fn}!`,vt={},gn=Symbol(),dt=["touchstart","touchmove","touchend"];function Cn(n){throw new Error("effect_in_teardown")}function Ln(){throw new Error("effect_in_unowned_derived")}function Mn(n){throw new Error("effect_orphan")}function bn(){throw new Error("effect_update_depth_exceeded")}function ht(){throw new Error("hydration_failed")}function Et(n){throw new Error("props_invalid_value")}function Yn(){throw new Error("state_unsafe_mutation")}function cn(n){return{f:0,reactions:null,equals:fn,v:n,version:0}}function yt(n){var e;const t=cn(n);return t.equals=an,v!==null&&v.l!==null&&((e=v.l).s??(e.s=[])).push(t),t}function mt(n,t){var e=n.v!==gn;return!m&&e&&d!==null&&$()&&d.f&k&&Yn(),n.equals(t)||(n.v=t,n.version++,$()&&e&&i!==null&&i.f&y&&!(i.f&T)&&(_!==null&&_.includes(n)?(E(i,w),U(i)):A===null?Zn([n]):A.push(n)),J(n,w,!0)),t}function Tt(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function jn(n){if(Nn(n))for(var t=0;t<n.length;t++){var e=n[t];e.isConnected&&e.remove()}else n.isConnected&&n.remove()}function _n(n){i===null&&d===null&&Mn(),V&&Cn()}function nn(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function g(n,t,e){var r=(n&Z)!==0,s={ctx:v,deps:null,dom:null,f:n|w,first:null,fn:t,last:null,next:null,parent:r?null:i,prev:null,teardown:null,transitions:null};if(d!==null&&!r){var o=d.f;o&k&&(o&R&&Ln(),i!==null&&nn(s,i)),nn(s,d)}if(e){var l=I;try{tn(!0),H(s),s.f|=qn}finally{tn(l)}}else t!==null&&U(s);return s}function wt(n){const t=g(x,null,!1);return E(t,y),t.teardown=n,t}function Ot(n){_n();var t=i!==null&&(i.f&x)!==0&&v!==null&&!v.m;if(t){var e=v;(e.e??(e.e=[])).push(n)}else{var r=pn(n);return r}}function At(n){return _n(),vn(n)}function Rt(n){const t=g(Z,n,!0);return()=>{G(t)}}function pn(n){return g(on,n,!1)}function vn(n){return g(x,n,!0)}function St(n){return vn(n)}function kt(n,t=0){return g(x|un|t,n,!0)}function Dt(n){return g(x|T,n,!0)}function dn(n){var t=n.teardown;if(t!==null){const e=V,r=m;en(!0),rn(!0);try{t.call(null)}finally{en(e),rn(r)}}}function G(n,t=!0){var e=n.dom;if(e!==null&&t&&jn(e),W(n,t),j(n,0),E(n,F),n.transitions)for(const l of n.transitions)l.stop();dn(n);var r=n.parent;if(r!==null&&n.f&T&&r.first!==null){var s=n.prev,o=n.next;s!==null?o!==null?(s.next=o,o.prev=s):(s.next=null,r.last=s):o!==null?(o.prev=null,r.first=o):(r.first=null,r.last=null)}n.next=n.prev=n.teardown=n.ctx=n.dom=n.deps=n.parent=n.fn=null}function Nt(n,t){var e=[];hn(n,e,!0),Hn(e,()=>{G(n),t&&t()})}function Hn(n,t){var e=n.length;if(e>0){var r=()=>--e||t();for(var s of n)s.out(r)}else t()}function hn(n,t,e){if(!(n.f&q)){if(n.f^=q,n.transitions!==null)for(const l of n.transitions)(l.is_global||e)&&t.push(l);for(var r=n.first;r!==null;){var s=r.next,o=(r.f&ln)!==0||(r.f&T)!==0;hn(r,t,o?e:!1),r=s}}}function It(n){En(n,!0)}function En(n,t){if(n.f&q){n.f^=q,L(n)&&H(n);for(var e=n.first;e!==null;){var r=e.next,s=(e.f&ln)!==0||(e.f&T)!==0;En(e,s?t:!1),e=r}if(n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&o.in()}}const Pt=()=>{};function qt(n){return n()}function Un(n){for(var t=0;t<n.length;t++)n[t]()}let Y=!1,z=[];function yn(){Y=!1;const n=z.slice();z=[],Un(n)}function xt(n){Y||(Y=!0,queueMicrotask(yn)),z.push(n)}function Bn(){Y&&yn()}function zn(n){let t=k|w;i===null&&(t|=R);const e={deps:null,deriveds:null,equals:fn,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(d!==null&&d.f&k){var r=d;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function Ft(n){const t=zn(n);return t.equals=an,t}function mn(n){W(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var e=0;e<t.length;e+=1)$n(t[e])}}function Tn(n,t){mn(n);var e=On(n),r=(N||n.f&R)&&n.deps!==null?D:y;E(n,r);var s=n.equals(e);return s||(n.v=e,J(n,w,t)),s}function $n(n){mn(n),j(n,0),E(n,F),n.first=n.last=n.deps=n.reactions=n.fn=null}const wn=0,Kn=1;let M=wn,C=!1,I=!1,V=!1;function tn(n){I=n}function en(n){V=n}function rn(n){m=n}let S=[],P=0,d=null,i=null,_=null,c=0,A=null;function Zn(n){A=n}let m=!1,N=!1,v=null;function $(){return v!==null&&v.l===null}function L(n){var O;var t=n.f,e=(t&w)!==0,r=(t&R)!==0;if(e&&!r)return!0;var s=(t&b)!==0;if(t&D||e&&r){var o=n.deps;if(o!==null)for(var l=o.length,h,u,f=0;f<l;f++){var a=o[f];!e&&L(a)&&(h=Tn(a,!0));var p=a.version;if(r){if(p>n.version)return n.version=p,!h;!N&&!((O=a==null?void 0:a.reactions)!=null&&O.includes(n))&&(u=a.reactions,u===null?a.reactions=[n]:u.push(n))}else{if(n.f&w)return!0;s&&(p>n.version&&(n.version=p,e=!0),u=a.reactions,u===null?a.reactions=[n]:u.includes(n)||u.push(n))}}r||E(n,y),s&&(n.f^=b)}return e}function Gn(n,t,e){throw n}function On(n){const t=_,e=c,r=A,s=d,o=N,l=m;_=null,c=0,A=null,d=n,N=!I&&(n.f&R)!==0,m=!1;try{let h=(0,n.fn)(),u=n.deps;if(_!==null){let f;if(u!==null){const a=u.length,p=c===0?_:u.slice(0,c).concat(_),Q=p.length>16&&a-c>1?new Set(p):null;for(f=c;f<a;f++){const B=u[f];(Q!==null?!Q.has(B):!p.includes(B))&&An(n,B)}}if(u!==null&&c>0)for(u.length=c+_.length,f=0;f<_.length;f++)u[c+f]=_[f];else n.deps=u=_;if(!N)for(f=c;f<u.length;f++){const a=u[f],p=a.reactions;p===null?a.reactions=[n]:p[p.length-1]!==n&&p.push(n)}}else u!==null&&c<u.length&&(j(n,c),u.length=c);return h}finally{_=t,c=e,A=r,d=s,N=o,m=l}}function An(n,t){const e=t.reactions;let r=0;if(e!==null){r=e.length-1;const s=e.indexOf(n);s!==-1&&(r===0?t.reactions=null:(e[s]=e[r],e.pop()))}r===0&&t.f&k&&(E(t,D),t.f&(R|b)||(t.f^=b),j(t,0))}function j(n,t){const e=n.deps;if(e!==null){const r=t===0?null:e.slice(0,t);let s;for(s=t;s<e.length;s++){const o=e[s];(r===null||!r.includes(o))&&An(n,o)}}}function W(n,t=!0){let e=n.first;n.first=null,n.last=null;for(var r;e!==null;)r=e.next,G(e,t),e=r}function H(n){var t=n.f;if(!(t&F)){E(n,y);var e=n.ctx,r=i,s=v;i=n,v=e;try{t&un||W(n),dn(n);var o=On(n);n.teardown=typeof o=="function"?o:null}catch(l){Gn(l)}finally{i=r,v=s}}}function Rn(){P>1e3&&(P=0,bn()),P++}function Sn(n){const t=n.length;if(t!==0){Rn();var e=I;I=!0;try{for(var r=0;r<t;r++){var s=n[r];if(s.first===null&&!(s.f&T))sn([s]);else{var o=[];kn(s,o),sn(o)}}}finally{I=e}}}function sn(n){var t=n.length;if(t!==0)for(var e=0;e<t;e++){var r=n[e];!(r.f&(F|q))&&L(r)&&H(r)}}function Vn(){if(C=!1,P>1001)return;const n=S;S=[],Sn(n),C||(P=0)}function U(n){M===wn&&(C||(C=!0,queueMicrotask(Vn)));for(var t=n;t.parent!==null;){t=t.parent;var e=t.f;if(e&T){if(!(e&y))return;E(t,D)}}S.push(t)}function kn(n,t){var e=n.first,r=[];n:for(;e!==null;){var s=e.f,o=(s&(F|q))===0,l=s&T,h=(s&y)!==0,u=e.first;if(o&&(!l||!h)){if(l&&E(e,y),s&x){if(!l&&L(e)&&(H(e),u=e.first),u!==null){e=u;continue}}else if(s&on)if(l||h){if(u!==null){e=u;continue}}else r.push(e)}var f=e.next;if(f===null){let O=e.parent;for(;O!==null;){if(n===O)break n;var a=O.next;if(a!==null){e=a;continue n}O=O.parent}}e=f}for(var p=0;p<r.length;p++)u=r[p],t.push(u),kn(u,t)}function Dn(n,t=!0){var e=M,r=S;try{Rn();const o=[];M=Kn,S=o,C=!1,t&&Sn(r);var s=n==null?void 0:n();return Bn(),(S.length>0||o.length>0)&&Dn(),P=0,s}finally{M=e,S=r}}async function gt(){await Promise.resolve(),Dn()}function Ct(n){const t=n.f;if(t&F)return n.v;if(d!==null&&!(d.f&(T|Z))&&!m){const e=(d.f&R)!==0,r=d.deps;_===null&&r!==null&&r[c]===n&&!(e&&i!==null)?c++:(r===null||c===0||r[c-1]!==n)&&(_===null?_=[n]:_[_.length-1]!==n&&_.push(n)),A!==null&&i!==null&&i.f&y&&!(i.f&T)&&A.includes(n)&&(E(i,w),U(i))}return t&k&&L(n)&&Tn(n,!1),n.v}function J(n,t,e){var r=n.reactions;if(r!==null)for(var s=$(),o=r.length,l=0;l<o;l++){var h=r[l],u=h.f;if(!(u&w||(!e||!s)&&h===i)){E(h,t);var f=(u&D)!==0,a=(u&R)!==0;(u&y||f&&a)&&(h.f&k?J(h,D,e):U(h))}}}function Lt(n){const t=m;try{return m=!0,n()}finally{m=t}}const Wn=~(w|D|y);function E(n,t){n.f=n.f&Wn|t}function Mt(n,t=!1,e){v={p:v,c:null,e:null,m:!1,s:n,x:null,l:null},t||(v.l={s:null,u:null,r1:[],r2:cn(!1)})}function bt(n){const t=v;if(t!==null){const r=t.e;if(r!==null){t.e=null;for(var e=0;e<r.length;e++)pn(r[e])}v=t.p,t.m=!0}return{}}function Yt(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(X in n)K(n);else if(!Array.isArray(n))for(let t in n){const e=n[t];typeof e=="object"&&e&&X in e&&K(e)}}}function K(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let r in n)try{K(n[r],t)}catch{}const e=Pn(n);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=In(e);for(let s in r){const o=r[s].get;if(o)try{o.call(n)}catch{}}}}}export{pt as $,Ft as A,ft as B,yt as C,At as D,Ot as E,Un as F,qt as G,ct as H,Yt as I,Pt as J,St as K,rt as L,Fn as M,_t as N,i as O,dt as P,Tt as Q,at as R,X as S,it as T,gn as U,Qn as V,st as W,tt as X,et as Y,cn as Z,Pn as _,vt as a,jn as a0,It as a1,Nt as a2,ln as a3,gt as a4,Jn as b,Dt as c,bt as d,Rt as e,Dn as f,v as g,ht as h,Xn as i,Nn as j,kt as k,pn as l,nt as m,Et as n,lt as o,Mt as p,xt as q,vn as r,an as s,wt as t,Lt as u,Ct as v,mt as w,ot as x,ut as y,zn as z};
