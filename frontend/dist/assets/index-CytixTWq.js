function sx(t,r){for(var i=0;i<r.length;i++){const o=r[i];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in t)){const c=Object.getOwnPropertyDescriptor(o,l);c&&Object.defineProperty(t,l,c.get?c:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Fm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nu={exports:{}},Fi={},ru={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function ox(){if(Hp)return pe;Hp=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,j={};function E(N,V,de){this.props=N,this.context=V,this.refs=j,this.updater=de||C}E.prototype.isReactComponent={},E.prototype.setState=function(N,V){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,V,"setState")},E.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function L(){}L.prototype=E.prototype;function F(N,V,de){this.props=N,this.context=V,this.refs=j,this.updater=de||C}var M=F.prototype=new L;M.constructor=F,T(M,E.prototype),M.isPureReactComponent=!0;var $=Array.isArray,H=Object.prototype.hasOwnProperty,X={current:null},te={key:!0,ref:!0,__self:!0,__source:!0};function z(N,V,de){var he,ge={},ye=null,Ee=null;if(V!=null)for(he in V.ref!==void 0&&(Ee=V.ref),V.key!==void 0&&(ye=""+V.key),V)H.call(V,he)&&!te.hasOwnProperty(he)&&(ge[he]=V[he]);var we=arguments.length-2;if(we===1)ge.children=de;else if(1<we){for(var Te=Array(we),wt=0;wt<we;wt++)Te[wt]=arguments[wt+2];ge.children=Te}if(N&&N.defaultProps)for(he in we=N.defaultProps,we)ge[he]===void 0&&(ge[he]=we[he]);return{$$typeof:t,type:N,key:ye,ref:Ee,props:ge,_owner:X.current}}function Q(N,V){return{$$typeof:t,type:N.type,key:V,ref:N.ref,props:N.props,_owner:N._owner}}function oe(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function fe(N){var V={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(de){return V[de]})}var Ne=/\/+/g;function Ge(N,V){return typeof N=="object"&&N!==null&&N.key!=null?fe(""+N.key):V.toString(36)}function ut(N,V,de,he,ge){var ye=typeof N;(ye==="undefined"||ye==="boolean")&&(N=null);var Ee=!1;if(N===null)Ee=!0;else switch(ye){case"string":case"number":Ee=!0;break;case"object":switch(N.$$typeof){case t:case r:Ee=!0}}if(Ee)return Ee=N,ge=ge(Ee),N=he===""?"."+Ge(Ee,0):he,$(ge)?(de="",N!=null&&(de=N.replace(Ne,"$&/")+"/"),ut(ge,V,de,"",function(wt){return wt})):ge!=null&&(oe(ge)&&(ge=Q(ge,de+(!ge.key||Ee&&Ee.key===ge.key?"":(""+ge.key).replace(Ne,"$&/")+"/")+N)),V.push(ge)),1;if(Ee=0,he=he===""?".":he+":",$(N))for(var we=0;we<N.length;we++){ye=N[we];var Te=he+Ge(ye,we);Ee+=ut(ye,V,de,Te,ge)}else if(Te=w(N),typeof Te=="function")for(N=Te.call(N),we=0;!(ye=N.next()).done;)ye=ye.value,Te=he+Ge(ye,we++),Ee+=ut(ye,V,de,Te,ge);else if(ye==="object")throw V=String(N),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return Ee}function xt(N,V,de){if(N==null)return N;var he=[],ge=0;return ut(N,he,"","",function(ye){return V.call(de,ye,ge++)}),he}function it(N){if(N._status===-1){var V=N._result;V=V(),V.then(function(de){(N._status===0||N._status===-1)&&(N._status=1,N._result=de)},function(de){(N._status===0||N._status===-1)&&(N._status=2,N._result=de)}),N._status===-1&&(N._status=0,N._result=V)}if(N._status===1)return N._result.default;throw N._result}var ce={current:null},q={transition:null},ne={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:q,ReactCurrentOwner:X};function K(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:xt,forEach:function(N,V,de){xt(N,function(){V.apply(this,arguments)},de)},count:function(N){var V=0;return xt(N,function(){V++}),V},toArray:function(N){return xt(N,function(V){return V})||[]},only:function(N){if(!oe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},pe.Component=E,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=F,pe.StrictMode=o,pe.Suspense=h,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,pe.act=K,pe.cloneElement=function(N,V,de){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var he=T({},N.props),ge=N.key,ye=N.ref,Ee=N._owner;if(V!=null){if(V.ref!==void 0&&(ye=V.ref,Ee=X.current),V.key!==void 0&&(ge=""+V.key),N.type&&N.type.defaultProps)var we=N.type.defaultProps;for(Te in V)H.call(V,Te)&&!te.hasOwnProperty(Te)&&(he[Te]=V[Te]===void 0&&we!==void 0?we[Te]:V[Te])}var Te=arguments.length-2;if(Te===1)he.children=de;else if(1<Te){we=Array(Te);for(var wt=0;wt<Te;wt++)we[wt]=arguments[wt+2];he.children=we}return{$$typeof:t,type:N.type,key:ge,ref:ye,props:he,_owner:Ee}},pe.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:c,_context:N},N.Consumer=N},pe.createElement=z,pe.createFactory=function(N){var V=z.bind(null,N);return V.type=N,V},pe.createRef=function(){return{current:null}},pe.forwardRef=function(N){return{$$typeof:p,render:N}},pe.isValidElement=oe,pe.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:it}},pe.memo=function(N,V){return{$$typeof:g,type:N,compare:V===void 0?null:V}},pe.startTransition=function(N){var V=q.transition;q.transition={};try{N()}finally{q.transition=V}},pe.unstable_act=K,pe.useCallback=function(N,V){return ce.current.useCallback(N,V)},pe.useContext=function(N){return ce.current.useContext(N)},pe.useDebugValue=function(){},pe.useDeferredValue=function(N){return ce.current.useDeferredValue(N)},pe.useEffect=function(N,V){return ce.current.useEffect(N,V)},pe.useId=function(){return ce.current.useId()},pe.useImperativeHandle=function(N,V,de){return ce.current.useImperativeHandle(N,V,de)},pe.useInsertionEffect=function(N,V){return ce.current.useInsertionEffect(N,V)},pe.useLayoutEffect=function(N,V){return ce.current.useLayoutEffect(N,V)},pe.useMemo=function(N,V){return ce.current.useMemo(N,V)},pe.useReducer=function(N,V,de){return ce.current.useReducer(N,V,de)},pe.useRef=function(N){return ce.current.useRef(N)},pe.useState=function(N){return ce.current.useState(N)},pe.useSyncExternalStore=function(N,V,de){return ce.current.useSyncExternalStore(N,V,de)},pe.useTransition=function(){return ce.current.useTransition()},pe.version="18.3.1",pe}var Wp;function ac(){return Wp||(Wp=1,ru.exports=ox()),ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function ax(){if(Kp)return Fi;Kp=1;var t=ac(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(p,h,g){var y,v={},w=null,C=null;g!==void 0&&(w=""+g),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(C=h.ref);for(y in h)o.call(h,y)&&!c.hasOwnProperty(y)&&(v[y]=h[y]);if(p&&p.defaultProps)for(y in h=p.defaultProps,h)v[y]===void 0&&(v[y]=h[y]);return{$$typeof:r,type:p,key:w,ref:C,props:v,_owner:l.current}}return Fi.Fragment=i,Fi.jsx=u,Fi.jsxs=u,Fi}var Gp;function lx(){return Gp||(Gp=1,nu.exports=ax()),nu.exports}var m=lx(),b=ac();const _m=Fm(b),ux=sx({__proto__:null,default:_m},[b]);var bo={},iu={exports:{}},mt={},su={exports:{}},ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function cx(){return Yp||(Yp=1,function(t){function r(q,ne){var K=q.length;q.push(ne);e:for(;0<K;){var N=K-1>>>1,V=q[N];if(0<l(V,ne))q[N]=ne,q[K]=V,K=N;else break e}}function i(q){return q.length===0?null:q[0]}function o(q){if(q.length===0)return null;var ne=q[0],K=q.pop();if(K!==ne){q[0]=K;e:for(var N=0,V=q.length,de=V>>>1;N<de;){var he=2*(N+1)-1,ge=q[he],ye=he+1,Ee=q[ye];if(0>l(ge,K))ye<V&&0>l(Ee,ge)?(q[N]=Ee,q[ye]=K,N=ye):(q[N]=ge,q[he]=K,N=he);else if(ye<V&&0>l(Ee,K))q[N]=Ee,q[ye]=K,N=ye;else break e}}return ne}function l(q,ne){var K=q.sortIndex-ne.sortIndex;return K!==0?K:q.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var u=Date,p=u.now();t.unstable_now=function(){return u.now()-p}}var h=[],g=[],y=1,v=null,w=3,C=!1,T=!1,j=!1,E=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(q){for(var ne=i(g);ne!==null;){if(ne.callback===null)o(g);else if(ne.startTime<=q)o(g),ne.sortIndex=ne.expirationTime,r(h,ne);else break;ne=i(g)}}function $(q){if(j=!1,M(q),!T)if(i(h)!==null)T=!0,it(H);else{var ne=i(g);ne!==null&&ce($,ne.startTime-q)}}function H(q,ne){T=!1,j&&(j=!1,L(z),z=-1),C=!0;var K=w;try{for(M(ne),v=i(h);v!==null&&(!(v.expirationTime>ne)||q&&!fe());){var N=v.callback;if(typeof N=="function"){v.callback=null,w=v.priorityLevel;var V=N(v.expirationTime<=ne);ne=t.unstable_now(),typeof V=="function"?v.callback=V:v===i(h)&&o(h),M(ne)}else o(h);v=i(h)}if(v!==null)var de=!0;else{var he=i(g);he!==null&&ce($,he.startTime-ne),de=!1}return de}finally{v=null,w=K,C=!1}}var X=!1,te=null,z=-1,Q=5,oe=-1;function fe(){return!(t.unstable_now()-oe<Q)}function Ne(){if(te!==null){var q=t.unstable_now();oe=q;var ne=!0;try{ne=te(!0,q)}finally{ne?Ge():(X=!1,te=null)}}else X=!1}var Ge;if(typeof F=="function")Ge=function(){F(Ne)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,xt=ut.port2;ut.port1.onmessage=Ne,Ge=function(){xt.postMessage(null)}}else Ge=function(){E(Ne,0)};function it(q){te=q,X||(X=!0,Ge())}function ce(q,ne){z=E(function(){q(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){T||C||(T=!0,it(H))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return i(h)},t.unstable_next=function(q){switch(w){case 1:case 2:case 3:var ne=3;break;default:ne=w}var K=w;w=ne;try{return q()}finally{w=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,ne){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var K=w;w=q;try{return ne()}finally{w=K}},t.unstable_scheduleCallback=function(q,ne,K){var N=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?N+K:N):K=N,q){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=K+V,q={id:y++,callback:ne,priorityLevel:q,startTime:K,expirationTime:V,sortIndex:-1},K>N?(q.sortIndex=K,r(g,q),i(h)===null&&q===i(g)&&(j?(L(z),z=-1):j=!0,ce($,K-N))):(q.sortIndex=V,r(h,q),T||C||(T=!0,it(H))),q},t.unstable_shouldYield=fe,t.unstable_wrapCallback=function(q){var ne=w;return function(){var K=w;w=ne;try{return q.apply(this,arguments)}finally{w=K}}}}(ou)),ou}var Qp;function dx(){return Qp||(Qp=1,su.exports=cx()),su.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function fx(){if(Xp)return mt;Xp=1;var t=ac(),r=dx();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function c(e,n){u(e,n),u(e+"Capture",n)}function u(e,n){for(l[e]=n,e=0;e<n.length;e++)o.add(n[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function w(e){return h.call(v,e)?!0:h.call(y,e)?!1:g.test(e)?v[e]=!0:(y[e]=!0,!1)}function C(e,n,s,a){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,n,s,a){if(n===null||typeof n>"u"||C(e,n,s,a))return!0;if(a)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function j(e,n,s,a,d,f,x){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=e,this.type=n,this.sanitizeURL=f,this.removeEmptyString=x}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){E[e]=new j(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];E[n]=new j(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){E[e]=new j(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){E[e]=new j(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){E[e]=new j(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){E[e]=new j(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){E[e]=new j(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){E[e]=new j(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){E[e]=new j(e,5,!1,e.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function F(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(L,F);E[n]=new j(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(L,F);E[n]=new j(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(L,F);E[n]=new j(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){E[e]=new j(e,1,!1,e.toLowerCase(),null,!1,!1)}),E.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){E[e]=new j(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,n,s,a){var d=E.hasOwnProperty(n)?E[n]:null;(d!==null?d.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(T(n,s,d,a)&&(s=null),a||d===null?w(n)&&(s===null?e.removeAttribute(n):e.setAttribute(n,""+s)):d.mustUseProperty?e[d.propertyName]=s===null?d.type===3?!1:"":s:(n=d.attributeName,a=d.attributeNamespace,s===null?e.removeAttribute(n):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,a?e.setAttributeNS(a,n,s):e.setAttribute(n,s))))}var $=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),X=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),fe=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),q=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,N;function V(e){if(N===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||""}return`
`+N+e}var de=!1;function he(e,n){if(!e||de)return"";de=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(D){var a=D}Reflect.construct(e,[],n)}else{try{n.call()}catch(D){a=D}e.call(n.prototype)}else{try{throw Error()}catch(D){a=D}e()}}catch(D){if(D&&a&&typeof D.stack=="string"){for(var d=D.stack.split(`
`),f=a.stack.split(`
`),x=d.length-1,S=f.length-1;1<=x&&0<=S&&d[x]!==f[S];)S--;for(;1<=x&&0<=S;x--,S--)if(d[x]!==f[S]){if(x!==1||S!==1)do if(x--,S--,0>S||d[x]!==f[S]){var k=`
`+d[x].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=x&&0<=S);break}}}finally{de=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?V(e):""}function ge(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=he(e.type,!1),e;case 11:return e=he(e.type.render,!1),e;case 1:return e=he(e.type,!0),e;default:return""}}function ye(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case te:return"Fragment";case X:return"Portal";case Q:return"Profiler";case z:return"StrictMode";case Ge:return"Suspense";case ut:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fe:return(e.displayName||"Context")+".Consumer";case oe:return(e._context.displayName||"Context")+".Provider";case Ne:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xt:return n=e.displayName||null,n!==null?n:ye(e.type)||"Memo";case it:n=e._payload,e=e._init;try{return ye(e(n))}catch{}}return null}function Ee(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(n);case 8:return n===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function we(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wt(e){var n=Te(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fs(e){e._valueTracker||(e._valueTracker=wt(e))}function Qc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),a="";return e&&(a=Te(e)?e.checked?"true":"false":e.value),e=a,e!==s?(n.setValue(e),!0):!1}function ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ua(e,n){var s=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Xc(e,n){var s=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;s=we(n.value!=null?n.value:s),e._wrapperState={initialChecked:a,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Jc(e,n){n=n.checked,n!=null&&M(e,"checked",n,!1)}function ca(e,n){Jc(e,n);var s=we(n.value),a=n.type;if(s!=null)a==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?da(e,n.type,s):n.hasOwnProperty("defaultValue")&&da(e,n.type,we(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Zc(e,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,s||n===e.value||(e.value=n),e.defaultValue=n}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function da(e,n,s){(n!=="number"||ps(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Jr=Array.isArray;function fr(e,n,s,a){if(e=e.options,n){n={};for(var d=0;d<s.length;d++)n["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=n.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&a&&(e[s].defaultSelected=!0)}else{for(s=""+we(s),n=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function fa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ed(e,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(i(92));if(Jr(s)){if(1<s.length)throw Error(i(93));s=s[0]}n=s}n==null&&(n=""),s=n}e._wrapperState={initialValue:we(s)}}function td(e,n){var s=we(n.value),a=we(n.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),n.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),a!=null&&(e.defaultValue=""+a)}function nd(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function rd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?rd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hs,id=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,a,d){MSApp.execUnsafeLocalFunction(function(){return e(n,s,a,d)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(hs=hs||document.createElement("div"),hs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=hs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Zr(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uy=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){uy.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ei[n]=ei[e]})});function sd(e,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||ei.hasOwnProperty(e)&&ei[e]?(""+n).trim():n+"px"}function od(e,n){e=e.style;for(var s in n)if(n.hasOwnProperty(s)){var a=s.indexOf("--")===0,d=sd(s,n[s],a);s==="float"&&(s="cssFloat"),a?e.setProperty(s,d):e[s]=d}}var cy=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ha(e,n){if(n){if(cy[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function ma(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ga=null;function ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,pr=null,hr=null;function ad(e){if(e=Ei(e)){if(typeof va!="function")throw Error(i(280));var n=e.stateNode;n&&(n=Fs(n),va(e.stateNode,e.type,n))}}function ld(e){pr?hr?hr.push(e):hr=[e]:pr=e}function ud(){if(pr){var e=pr,n=hr;if(hr=pr=null,ad(e),n)for(e=0;e<n.length;e++)ad(n[e])}}function cd(e,n){return e(n)}function dd(){}var xa=!1;function fd(e,n,s){if(xa)return e(n,s);xa=!0;try{return cd(e,n,s)}finally{xa=!1,(pr!==null||hr!==null)&&(dd(),ud())}}function ti(e,n){var s=e.stateNode;if(s===null)return null;var a=Fs(s);if(a===null)return null;s=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(i(231,n,typeof s));return s}var wa=!1;if(p)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){wa=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{wa=!1}function dy(e,n,s,a,d,f,x,S,k){var D=Array.prototype.slice.call(arguments,3);try{n.apply(s,D)}catch(I){this.onError(I)}}var ri=!1,ms=null,gs=!1,Sa=null,fy={onError:function(e){ri=!0,ms=e}};function py(e,n,s,a,d,f,x,S,k){ri=!1,ms=null,dy.apply(fy,arguments)}function hy(e,n,s,a,d,f,x,S,k){if(py.apply(this,arguments),ri){if(ri){var D=ms;ri=!1,ms=null}else throw Error(i(198));gs||(gs=!0,Sa=D)}}function $n(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function pd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function hd(e){if($n(e)!==e)throw Error(i(188))}function my(e){var n=e.alternate;if(!n){if(n=$n(e),n===null)throw Error(i(188));return n!==e?null:e}for(var s=e,a=n;;){var d=s.return;if(d===null)break;var f=d.alternate;if(f===null){if(a=d.return,a!==null){s=a;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===s)return hd(d),e;if(f===a)return hd(d),n;f=f.sibling}throw Error(i(188))}if(s.return!==a.return)s=d,a=f;else{for(var x=!1,S=d.child;S;){if(S===s){x=!0,s=d,a=f;break}if(S===a){x=!0,a=d,s=f;break}S=S.sibling}if(!x){for(S=f.child;S;){if(S===s){x=!0,s=f,a=d;break}if(S===a){x=!0,a=f,s=d;break}S=S.sibling}if(!x)throw Error(i(189))}}if(s.alternate!==a)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?e:n}function md(e){return e=my(e),e!==null?gd(e):null}function gd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=gd(e);if(n!==null)return n;e=e.sibling}return null}var yd=r.unstable_scheduleCallback,vd=r.unstable_cancelCallback,gy=r.unstable_shouldYield,yy=r.unstable_requestPaint,Me=r.unstable_now,vy=r.unstable_getCurrentPriorityLevel,Ea=r.unstable_ImmediatePriority,xd=r.unstable_UserBlockingPriority,ys=r.unstable_NormalPriority,xy=r.unstable_LowPriority,wd=r.unstable_IdlePriority,vs=null,Ht=null;function wy(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(vs,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:by,Sy=Math.log,Ey=Math.LN2;function by(e){return e>>>=0,e===0?32:31-(Sy(e)/Ey|0)|0}var xs=64,ws=4194304;function ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ss(e,n){var s=e.pendingLanes;if(s===0)return 0;var a=0,d=e.suspendedLanes,f=e.pingedLanes,x=s&268435455;if(x!==0){var S=x&~d;S!==0?a=ii(S):(f&=x,f!==0&&(a=ii(f)))}else x=s&~d,x!==0?a=ii(x):f!==0&&(a=ii(f));if(a===0)return 0;if(n!==0&&n!==a&&(n&d)===0&&(d=a&-a,f=n&-n,d>=f||d===16&&(f&4194240)!==0))return n;if((a&4)!==0&&(a|=s&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)s=31-zt(n),d=1<<s,a|=e[s],n&=~d;return a}function Cy(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ky(e,n){for(var s=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,f=e.pendingLanes;0<f;){var x=31-zt(f),S=1<<x,k=d[x];k===-1?((S&s)===0||(S&a)!==0)&&(d[x]=Cy(S,n)):k<=n&&(e.expiredLanes|=S),f&=~S}}function ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sd(){var e=xs;return xs<<=1,(xs&4194240)===0&&(xs=64),e}function Ca(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function si(e,n,s){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-zt(n),e[n]=s}function Ty(e,n){var s=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<s;){var d=31-zt(s),f=1<<d;n[d]=0,a[d]=-1,e[d]=-1,s&=~f}}function ka(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var a=31-zt(s),d=1<<a;d&n|e[a]&n&&(e[a]|=n),s&=~d}}var Se=0;function Ed(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var bd,Ta,Cd,kd,Td,Pa=!1,Es=[],hn=null,mn=null,gn=null,oi=new Map,ai=new Map,yn=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(e,n){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":oi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(n.pointerId)}}function li(e,n,s,a,d,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:s,eventSystemFlags:a,nativeEvent:f,targetContainers:[d]},n!==null&&(n=Ei(n),n!==null&&Ta(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function jy(e,n,s,a,d){switch(n){case"focusin":return hn=li(hn,e,n,s,a,d),!0;case"dragenter":return mn=li(mn,e,n,s,a,d),!0;case"mouseover":return gn=li(gn,e,n,s,a,d),!0;case"pointerover":var f=d.pointerId;return oi.set(f,li(oi.get(f)||null,e,n,s,a,d)),!0;case"gotpointercapture":return f=d.pointerId,ai.set(f,li(ai.get(f)||null,e,n,s,a,d)),!0}return!1}function jd(e){var n=qn(e.target);if(n!==null){var s=$n(n);if(s!==null){if(n=s.tag,n===13){if(n=pd(s),n!==null){e.blockedOn=n,Td(e.priority,function(){Cd(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Na(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var a=new s.constructor(s.type,s);ga=a,s.target.dispatchEvent(a),ga=null}else return n=Ei(s),n!==null&&Ta(n),e.blockedOn=s,!1;n.shift()}return!0}function Nd(e,n,s){bs(e)&&s.delete(n)}function Ny(){Pa=!1,hn!==null&&bs(hn)&&(hn=null),mn!==null&&bs(mn)&&(mn=null),gn!==null&&bs(gn)&&(gn=null),oi.forEach(Nd),ai.forEach(Nd)}function ui(e,n){e.blockedOn===n&&(e.blockedOn=null,Pa||(Pa=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ny)))}function ci(e){function n(d){return ui(d,e)}if(0<Es.length){ui(Es[0],e);for(var s=1;s<Es.length;s++){var a=Es[s];a.blockedOn===e&&(a.blockedOn=null)}}for(hn!==null&&ui(hn,e),mn!==null&&ui(mn,e),gn!==null&&ui(gn,e),oi.forEach(n),ai.forEach(n),s=0;s<yn.length;s++)a=yn[s],a.blockedOn===e&&(a.blockedOn=null);for(;0<yn.length&&(s=yn[0],s.blockedOn===null);)jd(s),s.blockedOn===null&&yn.shift()}var mr=$.ReactCurrentBatchConfig,Cs=!0;function Ry(e,n,s,a){var d=Se,f=mr.transition;mr.transition=null;try{Se=1,ja(e,n,s,a)}finally{Se=d,mr.transition=f}}function Ay(e,n,s,a){var d=Se,f=mr.transition;mr.transition=null;try{Se=4,ja(e,n,s,a)}finally{Se=d,mr.transition=f}}function ja(e,n,s,a){if(Cs){var d=Na(e,n,s,a);if(d===null)Wa(e,n,a,ks,s),Pd(e,a);else if(jy(d,e,n,s,a))a.stopPropagation();else if(Pd(e,a),n&4&&-1<Py.indexOf(e)){for(;d!==null;){var f=Ei(d);if(f!==null&&bd(f),f=Na(e,n,s,a),f===null&&Wa(e,n,a,ks,s),f===d)break;d=f}d!==null&&a.stopPropagation()}else Wa(e,n,a,null,s)}}var ks=null;function Na(e,n,s,a){if(ks=null,e=ya(a),e=qn(e),e!==null)if(n=$n(e),n===null)e=null;else if(s=n.tag,s===13){if(e=pd(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ks=e,null}function Rd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vy()){case Ea:return 1;case xd:return 4;case ys:case xy:return 16;case wd:return 536870912;default:return 16}default:return 16}}var vn=null,Ra=null,Ts=null;function Ad(){if(Ts)return Ts;var e,n=Ra,s=n.length,a,d="value"in vn?vn.value:vn.textContent,f=d.length;for(e=0;e<s&&n[e]===d[e];e++);var x=s-e;for(a=1;a<=x&&n[s-a]===d[f-a];a++);return Ts=d.slice(e,1<a?1-a:void 0)}function Ps(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function js(){return!0}function Ld(){return!1}function St(e){function n(s,a,d,f,x){this._reactName=s,this._targetInst=d,this.type=a,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(s=e[S],this[S]=s?s(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?js:Ld,this.isPropagationStopped=Ld,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),n}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Aa=St(gr),di=K({},gr,{view:0,detail:0}),Ly=St(di),La,Da,fi,Ns=K({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(La=e.screenX-fi.screenX,Da=e.screenY-fi.screenY):Da=La=0,fi=e),La)},movementY:function(e){return"movementY"in e?e.movementY:Da}}),Dd=St(Ns),Dy=K({},Ns,{dataTransfer:0}),Oy=St(Dy),My=K({},di,{relatedTarget:0}),Oa=St(My),zy=K({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=St(zy),_y=K({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vy=St(_y),Iy=K({},gr,{data:0}),Od=St(Iy),By={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$y[e])?!!n[e]:!1}function Ma(){return qy}var Hy=K({},di,{key:function(e){if(e.key){var n=By[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(e){return e.type==="keypress"?Ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wy=St(Hy),Ky=K({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=St(Ky),Gy=K({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),Yy=St(Gy),Qy=K({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xy=St(Qy),Jy=K({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=St(Jy),ev=[9,13,27,32],za=p&&"CompositionEvent"in window,pi=null;p&&"documentMode"in document&&(pi=document.documentMode);var tv=p&&"TextEvent"in window&&!pi,zd=p&&(!za||pi&&8<pi&&11>=pi),Fd=" ",_d=!1;function Vd(e,n){switch(e){case"keyup":return ev.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function nv(e,n){switch(e){case"compositionend":return Id(n);case"keypress":return n.which!==32?null:(_d=!0,Fd);case"textInput":return e=n.data,e===Fd&&_d?null:e;default:return null}}function rv(e,n){if(yr)return e==="compositionend"||!za&&Vd(e,n)?(e=Ad(),Ts=Ra=vn=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zd&&n.locale!=="ko"?null:n.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!iv[e.type]:n==="textarea"}function Ud(e,n,s,a){ld(a),n=Os(n,"onChange"),0<n.length&&(s=new Aa("onChange","change",null,s,a),e.push({event:s,listeners:n}))}var hi=null,mi=null;function sv(e){af(e,0)}function Rs(e){var n=Er(e);if(Qc(n))return e}function ov(e,n){if(e==="change")return n}var $d=!1;if(p){var Fa;if(p){var _a="oninput"in document;if(!_a){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),_a=typeof qd.oninput=="function"}Fa=_a}else Fa=!1;$d=Fa&&(!document.documentMode||9<document.documentMode)}function Hd(){hi&&(hi.detachEvent("onpropertychange",Wd),mi=hi=null)}function Wd(e){if(e.propertyName==="value"&&Rs(mi)){var n=[];Ud(n,mi,e,ya(e)),fd(sv,n)}}function av(e,n,s){e==="focusin"?(Hd(),hi=n,mi=s,hi.attachEvent("onpropertychange",Wd)):e==="focusout"&&Hd()}function lv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rs(mi)}function uv(e,n){if(e==="click")return Rs(n)}function cv(e,n){if(e==="input"||e==="change")return Rs(n)}function dv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ft=typeof Object.is=="function"?Object.is:dv;function gi(e,n){if(Ft(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),a=Object.keys(n);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var d=s[a];if(!h.call(n,d)||!Ft(e[d],n[d]))return!1}return!0}function Kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gd(e,n){var s=Kd(e);e=0;for(var a;s;){if(s.nodeType===3){if(a=e+s.textContent.length,e<=n&&a>=n)return{node:s,offset:n-e};e=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Kd(s)}}function Yd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qd(){for(var e=window,n=ps();n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=ps(e.document)}return n}function Va(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function fv(e){var n=Qd(),s=e.focusedElem,a=e.selectionRange;if(n!==s&&s&&s.ownerDocument&&Yd(s.ownerDocument.documentElement,s)){if(a!==null&&Va(s)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(e,s.value.length);else if(e=(n=s.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=s.textContent.length,f=Math.min(a.start,d);a=a.end===void 0?f:Math.min(a.end,d),!e.extend&&f>a&&(d=a,a=f,f=d),d=Gd(s,f);var x=Gd(s,a);d&&x&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==x.node||e.focusOffset!==x.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),f>a?(e.addRange(n),e.extend(x.node,x.offset)):(n.setEnd(x.node,x.offset),e.addRange(n)))}}for(n=[],e=s;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)e=n[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pv=p&&"documentMode"in document&&11>=document.documentMode,vr=null,Ia=null,yi=null,Ba=!1;function Xd(e,n,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ba||vr==null||vr!==ps(a)||(a=vr,"selectionStart"in a&&Va(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),yi&&gi(yi,a)||(yi=a,a=Os(Ia,"onSelect"),0<a.length&&(n=new Aa("onSelect","select",null,n,s),e.push({event:n,listeners:a}),n.target=vr)))}function As(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var xr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionend:As("Transition","TransitionEnd")},Ua={},Jd={};p&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Ls(e){if(Ua[e])return Ua[e];if(!xr[e])return e;var n=xr[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Jd)return Ua[e]=n[s];return e}var Zd=Ls("animationend"),ef=Ls("animationiteration"),tf=Ls("animationstart"),nf=Ls("transitionend"),rf=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,n){rf.set(e,n),c(n,[e])}for(var $a=0;$a<sf.length;$a++){var qa=sf[$a],hv=qa.toLowerCase(),mv=qa[0].toUpperCase()+qa.slice(1);xn(hv,"on"+mv)}xn(Zd,"onAnimationEnd"),xn(ef,"onAnimationIteration"),xn(tf,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(nf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));function of(e,n,s){var a=e.type||"unknown-event";e.currentTarget=s,hy(a,n,void 0,e),e.currentTarget=null}function af(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var a=e[s],d=a.event;a=a.listeners;e:{var f=void 0;if(n)for(var x=a.length-1;0<=x;x--){var S=a[x],k=S.instance,D=S.currentTarget;if(S=S.listener,k!==f&&d.isPropagationStopped())break e;of(d,S,D),f=k}else for(x=0;x<a.length;x++){if(S=a[x],k=S.instance,D=S.currentTarget,S=S.listener,k!==f&&d.isPropagationStopped())break e;of(d,S,D),f=k}}}if(gs)throw e=Sa,gs=!1,Sa=null,e}function Ce(e,n){var s=n[Ja];s===void 0&&(s=n[Ja]=new Set);var a=e+"__bubble";s.has(a)||(lf(n,e,2,!1),s.add(a))}function Ha(e,n,s){var a=0;n&&(a|=4),lf(s,e,a,n)}var Ds="_reactListening"+Math.random().toString(36).slice(2);function xi(e){if(!e[Ds]){e[Ds]=!0,o.forEach(function(s){s!=="selectionchange"&&(gv.has(s)||Ha(s,!1,e),Ha(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ds]||(n[Ds]=!0,Ha("selectionchange",!1,n))}}function lf(e,n,s,a){switch(Rd(n)){case 1:var d=Ry;break;case 4:d=Ay;break;default:d=ja}s=d.bind(null,n,s,e),d=void 0,!wa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(n,s,{capture:!0,passive:d}):e.addEventListener(n,s,!0):d!==void 0?e.addEventListener(n,s,{passive:d}):e.addEventListener(n,s,!1)}function Wa(e,n,s,a,d){var f=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var x=a.tag;if(x===3||x===4){var S=a.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(x===4)for(x=a.return;x!==null;){var k=x.tag;if((k===3||k===4)&&(k=x.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;x=x.return}for(;S!==null;){if(x=qn(S),x===null)return;if(k=x.tag,k===5||k===6){a=f=x;continue e}S=S.parentNode}}a=a.return}fd(function(){var D=f,I=ya(s),B=[];e:{var _=rf.get(e);if(_!==void 0){var G=Aa,J=e;switch(e){case"keypress":if(Ps(s)===0)break e;case"keydown":case"keyup":G=Wy;break;case"focusin":J="focus",G=Oa;break;case"focusout":J="blur",G=Oa;break;case"beforeblur":case"afterblur":G=Oa;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Yy;break;case Zd:case ef:case tf:G=Fy;break;case nf:G=Xy;break;case"scroll":G=Ly;break;case"wheel":G=Zy;break;case"copy":case"cut":case"paste":G=Vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Md}var Z=(n&4)!==0,ze=!Z&&e==="scroll",R=Z?_!==null?_+"Capture":null:_;Z=[];for(var P=D,A;P!==null;){A=P;var U=A.stateNode;if(A.tag===5&&U!==null&&(A=U,R!==null&&(U=ti(P,R),U!=null&&Z.push(wi(P,U,A)))),ze)break;P=P.return}0<Z.length&&(_=new G(_,J,null,s,I),B.push({event:_,listeners:Z}))}}if((n&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",_&&s!==ga&&(J=s.relatedTarget||s.fromElement)&&(qn(J)||J[en]))break e;if((G||_)&&(_=I.window===I?I:(_=I.ownerDocument)?_.defaultView||_.parentWindow:window,G?(J=s.relatedTarget||s.toElement,G=D,J=J?qn(J):null,J!==null&&(ze=$n(J),J!==ze||J.tag!==5&&J.tag!==6)&&(J=null)):(G=null,J=D),G!==J)){if(Z=Dd,U="onMouseLeave",R="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Md,U="onPointerLeave",R="onPointerEnter",P="pointer"),ze=G==null?_:Er(G),A=J==null?_:Er(J),_=new Z(U,P+"leave",G,s,I),_.target=ze,_.relatedTarget=A,U=null,qn(I)===D&&(Z=new Z(R,P+"enter",J,s,I),Z.target=A,Z.relatedTarget=ze,U=Z),ze=U,G&&J)t:{for(Z=G,R=J,P=0,A=Z;A;A=wr(A))P++;for(A=0,U=R;U;U=wr(U))A++;for(;0<P-A;)Z=wr(Z),P--;for(;0<A-P;)R=wr(R),A--;for(;P--;){if(Z===R||R!==null&&Z===R.alternate)break t;Z=wr(Z),R=wr(R)}Z=null}else Z=null;G!==null&&uf(B,_,G,Z,!1),J!==null&&ze!==null&&uf(B,ze,J,Z,!0)}}e:{if(_=D?Er(D):window,G=_.nodeName&&_.nodeName.toLowerCase(),G==="select"||G==="input"&&_.type==="file")var ee=ov;else if(Bd(_))if($d)ee=cv;else{ee=lv;var ie=av}else(G=_.nodeName)&&G.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(ee=uv);if(ee&&(ee=ee(e,D))){Ud(B,ee,s,I);break e}ie&&ie(e,_,D),e==="focusout"&&(ie=_._wrapperState)&&ie.controlled&&_.type==="number"&&da(_,"number",_.value)}switch(ie=D?Er(D):window,e){case"focusin":(Bd(ie)||ie.contentEditable==="true")&&(vr=ie,Ia=D,yi=null);break;case"focusout":yi=Ia=vr=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,Xd(B,s,I);break;case"selectionchange":if(pv)break;case"keydown":case"keyup":Xd(B,s,I)}var se;if(za)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else yr?Vd(e,s)&&(le="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(le="onCompositionStart");le&&(zd&&s.locale!=="ko"&&(yr||le!=="onCompositionStart"?le==="onCompositionEnd"&&yr&&(se=Ad()):(vn=I,Ra="value"in vn?vn.value:vn.textContent,yr=!0)),ie=Os(D,le),0<ie.length&&(le=new Od(le,e,null,s,I),B.push({event:le,listeners:ie}),se?le.data=se:(se=Id(s),se!==null&&(le.data=se)))),(se=tv?nv(e,s):rv(e,s))&&(D=Os(D,"onBeforeInput"),0<D.length&&(I=new Od("onBeforeInput","beforeinput",null,s,I),B.push({event:I,listeners:D}),I.data=se))}af(B,n)})}function wi(e,n,s){return{instance:e,listener:n,currentTarget:s}}function Os(e,n){for(var s=n+"Capture",a=[];e!==null;){var d=e,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=ti(e,s),f!=null&&a.unshift(wi(e,f,d)),f=ti(e,n),f!=null&&a.push(wi(e,f,d))),e=e.return}return a}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uf(e,n,s,a,d){for(var f=n._reactName,x=[];s!==null&&s!==a;){var S=s,k=S.alternate,D=S.stateNode;if(k!==null&&k===a)break;S.tag===5&&D!==null&&(S=D,d?(k=ti(s,f),k!=null&&x.unshift(wi(s,k,S))):d||(k=ti(s,f),k!=null&&x.push(wi(s,k,S)))),s=s.return}x.length!==0&&e.push({event:n,listeners:x})}var yv=/\r\n?/g,vv=/\u0000|\uFFFD/g;function cf(e){return(typeof e=="string"?e:""+e).replace(yv,`
`).replace(vv,"")}function Ms(e,n,s){if(n=cf(n),cf(e)!==n&&s)throw Error(i(425))}function zs(){}var Ka=null,Ga=null;function Ya(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qa=typeof setTimeout=="function"?setTimeout:void 0,xv=typeof clearTimeout=="function"?clearTimeout:void 0,df=typeof Promise=="function"?Promise:void 0,wv=typeof queueMicrotask=="function"?queueMicrotask:typeof df<"u"?function(e){return df.resolve(null).then(e).catch(Sv)}:Qa;function Sv(e){setTimeout(function(){throw e})}function Xa(e,n){var s=n,a=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(a===0){e.removeChild(d),ci(n);return}a--}else s!=="$"&&s!=="$?"&&s!=="$!"||a++;s=d}while(s);ci(n)}function wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ff(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Sr,Si="__reactProps$"+Sr,en="__reactContainer$"+Sr,Ja="__reactEvents$"+Sr,Ev="__reactListeners$"+Sr,bv="__reactHandles$"+Sr;function qn(e){var n=e[Wt];if(n)return n;for(var s=e.parentNode;s;){if(n=s[en]||s[Wt]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=ff(e);e!==null;){if(s=e[Wt])return s;e=ff(e)}return n}e=s,s=e.parentNode}return null}function Ei(e){return e=e[Wt]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Fs(e){return e[Si]||null}var Za=[],br=-1;function Sn(e){return{current:e}}function ke(e){0>br||(e.current=Za[br],Za[br]=null,br--)}function be(e,n){br++,Za[br]=e.current,e.current=n}var En={},Je=Sn(En),ct=Sn(!1),Hn=En;function Cr(e,n){var s=e.type.contextTypes;if(!s)return En;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in s)d[f]=n[f];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function dt(e){return e=e.childContextTypes,e!=null}function _s(){ke(ct),ke(Je)}function pf(e,n,s){if(Je.current!==En)throw Error(i(168));be(Je,n),be(ct,s)}function hf(e,n,s){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return s;a=a.getChildContext();for(var d in a)if(!(d in n))throw Error(i(108,Ee(e)||"Unknown",d));return K({},s,a)}function Vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Hn=Je.current,be(Je,e),be(ct,ct.current),!0}function mf(e,n,s){var a=e.stateNode;if(!a)throw Error(i(169));s?(e=hf(e,n,Hn),a.__reactInternalMemoizedMergedChildContext=e,ke(ct),ke(Je),be(Je,e)):ke(ct),be(ct,s)}var tn=null,Is=!1,el=!1;function gf(e){tn===null?tn=[e]:tn.push(e)}function Cv(e){Is=!0,gf(e)}function bn(){if(!el&&tn!==null){el=!0;var e=0,n=Se;try{var s=tn;for(Se=1;e<s.length;e++){var a=s[e];do a=a(!0);while(a!==null)}tn=null,Is=!1}catch(d){throw tn!==null&&(tn=tn.slice(e+1)),yd(Ea,bn),d}finally{Se=n,el=!1}}return null}var kr=[],Tr=0,Bs=null,Us=0,kt=[],Tt=0,Wn=null,nn=1,rn="";function Kn(e,n){kr[Tr++]=Us,kr[Tr++]=Bs,Bs=e,Us=n}function yf(e,n,s){kt[Tt++]=nn,kt[Tt++]=rn,kt[Tt++]=Wn,Wn=e;var a=nn;e=rn;var d=32-zt(a)-1;a&=~(1<<d),s+=1;var f=32-zt(n)+d;if(30<f){var x=d-d%5;f=(a&(1<<x)-1).toString(32),a>>=x,d-=x,nn=1<<32-zt(n)+d|s<<d|a,rn=f+e}else nn=1<<f|s<<d|a,rn=e}function tl(e){e.return!==null&&(Kn(e,1),yf(e,1,0))}function nl(e){for(;e===Bs;)Bs=kr[--Tr],kr[Tr]=null,Us=kr[--Tr],kr[Tr]=null;for(;e===Wn;)Wn=kt[--Tt],kt[Tt]=null,rn=kt[--Tt],kt[Tt]=null,nn=kt[--Tt],kt[Tt]=null}var Et=null,bt=null,Pe=!1,_t=null;function vf(e,n){var s=Rt(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=e,n=e.deletions,n===null?(e.deletions=[s],e.flags|=16):n.push(s)}function xf(e,n){switch(e.tag){case 5:var s=e.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Et=e,bt=wn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Et=e,bt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=Wn!==null?{id:nn,overflow:rn}:null,e.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=Rt(18,null,null,0),s.stateNode=n,s.return=e,e.child=s,Et=e,bt=null,!0):!1;default:return!1}}function rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function il(e){if(Pe){var n=bt;if(n){var s=n;if(!xf(e,n)){if(rl(e))throw Error(i(418));n=wn(s.nextSibling);var a=Et;n&&xf(e,n)?vf(a,s):(e.flags=e.flags&-4097|2,Pe=!1,Et=e)}}else{if(rl(e))throw Error(i(418));e.flags=e.flags&-4097|2,Pe=!1,Et=e}}}function wf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function $s(e){if(e!==Et)return!1;if(!Pe)return wf(e),Pe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ya(e.type,e.memoizedProps)),n&&(n=bt)){if(rl(e))throw Sf(),Error(i(418));for(;n;)vf(e,n),n=wn(n.nextSibling)}if(wf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(n===0){bt=wn(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}e=e.nextSibling}bt=null}}else bt=Et?wn(e.stateNode.nextSibling):null;return!0}function Sf(){for(var e=bt;e;)e=wn(e.nextSibling)}function Pr(){bt=Et=null,Pe=!1}function sl(e){_t===null?_t=[e]:_t.push(e)}var kv=$.ReactCurrentBatchConfig;function bi(e,n,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(i(309));var a=s.stateNode}if(!a)throw Error(i(147,e));var d=a,f=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===f?n.ref:(n=function(x){var S=d.refs;x===null?delete S[f]:S[f]=x},n._stringRef=f,n)}if(typeof e!="string")throw Error(i(284));if(!s._owner)throw Error(i(290,e))}return e}function qs(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ef(e){var n=e._init;return n(e._payload)}function bf(e){function n(R,P){if(e){var A=R.deletions;A===null?(R.deletions=[P],R.flags|=16):A.push(P)}}function s(R,P){if(!e)return null;for(;P!==null;)n(R,P),P=P.sibling;return null}function a(R,P){for(R=new Map;P!==null;)P.key!==null?R.set(P.key,P):R.set(P.index,P),P=P.sibling;return R}function d(R,P){return R=An(R,P),R.index=0,R.sibling=null,R}function f(R,P,A){return R.index=A,e?(A=R.alternate,A!==null?(A=A.index,A<P?(R.flags|=2,P):A):(R.flags|=2,P)):(R.flags|=1048576,P)}function x(R){return e&&R.alternate===null&&(R.flags|=2),R}function S(R,P,A,U){return P===null||P.tag!==6?(P=Ql(A,R.mode,U),P.return=R,P):(P=d(P,A),P.return=R,P)}function k(R,P,A,U){var ee=A.type;return ee===te?I(R,P,A.props.children,U,A.key):P!==null&&(P.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===it&&Ef(ee)===P.type)?(U=d(P,A.props),U.ref=bi(R,P,A),U.return=R,U):(U=mo(A.type,A.key,A.props,null,R.mode,U),U.ref=bi(R,P,A),U.return=R,U)}function D(R,P,A,U){return P===null||P.tag!==4||P.stateNode.containerInfo!==A.containerInfo||P.stateNode.implementation!==A.implementation?(P=Xl(A,R.mode,U),P.return=R,P):(P=d(P,A.children||[]),P.return=R,P)}function I(R,P,A,U,ee){return P===null||P.tag!==7?(P=tr(A,R.mode,U,ee),P.return=R,P):(P=d(P,A),P.return=R,P)}function B(R,P,A){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Ql(""+P,R.mode,A),P.return=R,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case H:return A=mo(P.type,P.key,P.props,null,R.mode,A),A.ref=bi(R,null,P),A.return=R,A;case X:return P=Xl(P,R.mode,A),P.return=R,P;case it:var U=P._init;return B(R,U(P._payload),A)}if(Jr(P)||ne(P))return P=tr(P,R.mode,A,null),P.return=R,P;qs(R,P)}return null}function _(R,P,A,U){var ee=P!==null?P.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return ee!==null?null:S(R,P,""+A,U);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case H:return A.key===ee?k(R,P,A,U):null;case X:return A.key===ee?D(R,P,A,U):null;case it:return ee=A._init,_(R,P,ee(A._payload),U)}if(Jr(A)||ne(A))return ee!==null?null:I(R,P,A,U,null);qs(R,A)}return null}function G(R,P,A,U,ee){if(typeof U=="string"&&U!==""||typeof U=="number")return R=R.get(A)||null,S(P,R,""+U,ee);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case H:return R=R.get(U.key===null?A:U.key)||null,k(P,R,U,ee);case X:return R=R.get(U.key===null?A:U.key)||null,D(P,R,U,ee);case it:var ie=U._init;return G(R,P,A,ie(U._payload),ee)}if(Jr(U)||ne(U))return R=R.get(A)||null,I(P,R,U,ee,null);qs(P,U)}return null}function J(R,P,A,U){for(var ee=null,ie=null,se=P,le=P=0,Ke=null;se!==null&&le<A.length;le++){se.index>le?(Ke=se,se=null):Ke=se.sibling;var ve=_(R,se,A[le],U);if(ve===null){se===null&&(se=Ke);break}e&&se&&ve.alternate===null&&n(R,se),P=f(ve,P,le),ie===null?ee=ve:ie.sibling=ve,ie=ve,se=Ke}if(le===A.length)return s(R,se),Pe&&Kn(R,le),ee;if(se===null){for(;le<A.length;le++)se=B(R,A[le],U),se!==null&&(P=f(se,P,le),ie===null?ee=se:ie.sibling=se,ie=se);return Pe&&Kn(R,le),ee}for(se=a(R,se);le<A.length;le++)Ke=G(se,R,le,A[le],U),Ke!==null&&(e&&Ke.alternate!==null&&se.delete(Ke.key===null?le:Ke.key),P=f(Ke,P,le),ie===null?ee=Ke:ie.sibling=Ke,ie=Ke);return e&&se.forEach(function(Ln){return n(R,Ln)}),Pe&&Kn(R,le),ee}function Z(R,P,A,U){var ee=ne(A);if(typeof ee!="function")throw Error(i(150));if(A=ee.call(A),A==null)throw Error(i(151));for(var ie=ee=null,se=P,le=P=0,Ke=null,ve=A.next();se!==null&&!ve.done;le++,ve=A.next()){se.index>le?(Ke=se,se=null):Ke=se.sibling;var Ln=_(R,se,ve.value,U);if(Ln===null){se===null&&(se=Ke);break}e&&se&&Ln.alternate===null&&n(R,se),P=f(Ln,P,le),ie===null?ee=Ln:ie.sibling=Ln,ie=Ln,se=Ke}if(ve.done)return s(R,se),Pe&&Kn(R,le),ee;if(se===null){for(;!ve.done;le++,ve=A.next())ve=B(R,ve.value,U),ve!==null&&(P=f(ve,P,le),ie===null?ee=ve:ie.sibling=ve,ie=ve);return Pe&&Kn(R,le),ee}for(se=a(R,se);!ve.done;le++,ve=A.next())ve=G(se,R,le,ve.value,U),ve!==null&&(e&&ve.alternate!==null&&se.delete(ve.key===null?le:ve.key),P=f(ve,P,le),ie===null?ee=ve:ie.sibling=ve,ie=ve);return e&&se.forEach(function(ix){return n(R,ix)}),Pe&&Kn(R,le),ee}function ze(R,P,A,U){if(typeof A=="object"&&A!==null&&A.type===te&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case H:e:{for(var ee=A.key,ie=P;ie!==null;){if(ie.key===ee){if(ee=A.type,ee===te){if(ie.tag===7){s(R,ie.sibling),P=d(ie,A.props.children),P.return=R,R=P;break e}}else if(ie.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===it&&Ef(ee)===ie.type){s(R,ie.sibling),P=d(ie,A.props),P.ref=bi(R,ie,A),P.return=R,R=P;break e}s(R,ie);break}else n(R,ie);ie=ie.sibling}A.type===te?(P=tr(A.props.children,R.mode,U,A.key),P.return=R,R=P):(U=mo(A.type,A.key,A.props,null,R.mode,U),U.ref=bi(R,P,A),U.return=R,R=U)}return x(R);case X:e:{for(ie=A.key;P!==null;){if(P.key===ie)if(P.tag===4&&P.stateNode.containerInfo===A.containerInfo&&P.stateNode.implementation===A.implementation){s(R,P.sibling),P=d(P,A.children||[]),P.return=R,R=P;break e}else{s(R,P);break}else n(R,P);P=P.sibling}P=Xl(A,R.mode,U),P.return=R,R=P}return x(R);case it:return ie=A._init,ze(R,P,ie(A._payload),U)}if(Jr(A))return J(R,P,A,U);if(ne(A))return Z(R,P,A,U);qs(R,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,P!==null&&P.tag===6?(s(R,P.sibling),P=d(P,A),P.return=R,R=P):(s(R,P),P=Ql(A,R.mode,U),P.return=R,R=P),x(R)):s(R,P)}return ze}var jr=bf(!0),Cf=bf(!1),Hs=Sn(null),Ws=null,Nr=null,ol=null;function al(){ol=Nr=Ws=null}function ll(e){var n=Hs.current;ke(Hs),e._currentValue=n}function ul(e,n,s){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===s)break;e=e.return}}function Rr(e,n){Ws=e,ol=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ft=!0),e.firstContext=null)}function Pt(e){var n=e._currentValue;if(ol!==e)if(e={context:e,memoizedValue:n,next:null},Nr===null){if(Ws===null)throw Error(i(308));Nr=e,Ws.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return n}var Gn=null;function cl(e){Gn===null?Gn=[e]:Gn.push(e)}function kf(e,n,s,a){var d=n.interleaved;return d===null?(s.next=s,cl(n)):(s.next=d.next,d.next=s),n.interleaved=s,sn(e,a)}function sn(e,n){e.lanes|=n;var s=e.alternate;for(s!==null&&(s.lanes|=n),s=e,e=e.return;e!==null;)e.childLanes|=n,s=e.alternate,s!==null&&(s.childLanes|=n),s=e,e=e.return;return s.tag===3?s.stateNode:null}var Cn=!1;function dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kn(e,n,s){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(me&2)!==0){var d=a.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),a.pending=n,sn(e,s)}return d=a.interleaved,d===null?(n.next=n,cl(a)):(n.next=d.next,d.next=n),a.interleaved=n,sn(e,s)}function Ks(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,s|=a,n.lanes=s,ka(e,s)}}function Pf(e,n){var s=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var d=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var x={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};f===null?d=f=x:f=f.next=x,s=s.next}while(s!==null);f===null?d=f=n:f=f.next=n}else d=f=n;s={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:a.shared,effects:a.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}function Gs(e,n,s,a){var d=e.updateQueue;Cn=!1;var f=d.firstBaseUpdate,x=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var k=S,D=k.next;k.next=null,x===null?f=D:x.next=D,x=k;var I=e.alternate;I!==null&&(I=I.updateQueue,S=I.lastBaseUpdate,S!==x&&(S===null?I.firstBaseUpdate=D:S.next=D,I.lastBaseUpdate=k))}if(f!==null){var B=d.baseState;x=0,I=D=k=null,S=f;do{var _=S.lane,G=S.eventTime;if((a&_)===_){I!==null&&(I=I.next={eventTime:G,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var J=e,Z=S;switch(_=n,G=s,Z.tag){case 1:if(J=Z.payload,typeof J=="function"){B=J.call(G,B,_);break e}B=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=Z.payload,_=typeof J=="function"?J.call(G,B,_):J,_==null)break e;B=K({},B,_);break e;case 2:Cn=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,_=d.effects,_===null?d.effects=[S]:_.push(S))}else G={eventTime:G,lane:_,tag:S.tag,payload:S.payload,callback:S.callback,next:null},I===null?(D=I=G,k=B):I=I.next=G,x|=_;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;_=S,S=_.next,_.next=null,d.lastBaseUpdate=_,d.shared.pending=null}}while(!0);if(I===null&&(k=B),d.baseState=k,d.firstBaseUpdate=D,d.lastBaseUpdate=I,n=d.shared.interleaved,n!==null){d=n;do x|=d.lane,d=d.next;while(d!==n)}else f===null&&(d.shared.lanes=0);Xn|=x,e.lanes=x,e.memoizedState=B}}function jf(e,n,s){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],d=a.callback;if(d!==null){if(a.callback=null,a=s,typeof d!="function")throw Error(i(191,d));d.call(a)}}}var Ci={},Kt=Sn(Ci),ki=Sn(Ci),Ti=Sn(Ci);function Yn(e){if(e===Ci)throw Error(i(174));return e}function fl(e,n){switch(be(Ti,n),be(ki,e),be(Kt,Ci),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:pa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=pa(n,e)}ke(Kt),be(Kt,n)}function Ar(){ke(Kt),ke(ki),ke(Ti)}function Nf(e){Yn(Ti.current);var n=Yn(Kt.current),s=pa(n,e.type);n!==s&&(be(ki,e),be(Kt,s))}function pl(e){ki.current===e&&(ke(Kt),ke(ki))}var Re=Sn(0);function Ys(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var hl=[];function ml(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var Qs=$.ReactCurrentDispatcher,gl=$.ReactCurrentBatchConfig,Qn=0,Ae=null,Ue=null,He=null,Xs=!1,Pi=!1,ji=0,Tv=0;function Ze(){throw Error(i(321))}function yl(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Ft(e[s],n[s]))return!1;return!0}function vl(e,n,s,a,d,f){if(Qn=f,Ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Qs.current=e===null||e.memoizedState===null?Rv:Av,e=s(a,d),Pi){f=0;do{if(Pi=!1,ji=0,25<=f)throw Error(i(301));f+=1,He=Ue=null,n.updateQueue=null,Qs.current=Lv,e=s(a,d)}while(Pi)}if(Qs.current=eo,n=Ue!==null&&Ue.next!==null,Qn=0,He=Ue=Ae=null,Xs=!1,n)throw Error(i(300));return e}function xl(){var e=ji!==0;return ji=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ae.memoizedState=He=e:He=He.next=e,He}function jt(){if(Ue===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var n=He===null?Ae.memoizedState:He.next;if(n!==null)He=n,Ue=e;else{if(e===null)throw Error(i(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Ae.memoizedState=He=e:He=He.next=e}return He}function Ni(e,n){return typeof n=="function"?n(e):n}function wl(e){var n=jt(),s=n.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var a=Ue,d=a.baseQueue,f=s.pending;if(f!==null){if(d!==null){var x=d.next;d.next=f.next,f.next=x}a.baseQueue=d=f,s.pending=null}if(d!==null){f=d.next,a=a.baseState;var S=x=null,k=null,D=f;do{var I=D.lane;if((Qn&I)===I)k!==null&&(k=k.next={lane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),a=D.hasEagerState?D.eagerState:e(a,D.action);else{var B={lane:I,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null};k===null?(S=k=B,x=a):k=k.next=B,Ae.lanes|=I,Xn|=I}D=D.next}while(D!==null&&D!==f);k===null?x=a:k.next=S,Ft(a,n.memoizedState)||(ft=!0),n.memoizedState=a,n.baseState=x,n.baseQueue=k,s.lastRenderedState=a}if(e=s.interleaved,e!==null){d=e;do f=d.lane,Ae.lanes|=f,Xn|=f,d=d.next;while(d!==e)}else d===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function Sl(e){var n=jt(),s=n.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var a=s.dispatch,d=s.pending,f=n.memoizedState;if(d!==null){s.pending=null;var x=d=d.next;do f=e(f,x.action),x=x.next;while(x!==d);Ft(f,n.memoizedState)||(ft=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,a]}function Rf(){}function Af(e,n){var s=Ae,a=jt(),d=n(),f=!Ft(a.memoizedState,d);if(f&&(a.memoizedState=d,ft=!0),a=a.queue,El(Of.bind(null,s,a,e),[e]),a.getSnapshot!==n||f||He!==null&&He.memoizedState.tag&1){if(s.flags|=2048,Ri(9,Df.bind(null,s,a,d,n),void 0,null),We===null)throw Error(i(349));(Qn&30)!==0||Lf(s,n,d)}return d}function Lf(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=Ae.updateQueue,n===null?(n={lastEffect:null,stores:null},Ae.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function Df(e,n,s,a){n.value=s,n.getSnapshot=a,Mf(n)&&zf(e)}function Of(e,n,s){return s(function(){Mf(n)&&zf(e)})}function Mf(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Ft(e,s)}catch{return!0}}function zf(e){var n=sn(e,1);n!==null&&Ut(n,e,1,-1)}function Ff(e){var n=Gt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},n.queue=e,e=e.dispatch=Nv.bind(null,Ae,e),[n.memoizedState,e]}function Ri(e,n,s,a){return e={tag:e,create:n,destroy:s,deps:a,next:null},n=Ae.updateQueue,n===null?(n={lastEffect:null,stores:null},Ae.updateQueue=n,n.lastEffect=e.next=e):(s=n.lastEffect,s===null?n.lastEffect=e.next=e:(a=s.next,s.next=e,e.next=a,n.lastEffect=e)),e}function _f(){return jt().memoizedState}function Js(e,n,s,a){var d=Gt();Ae.flags|=e,d.memoizedState=Ri(1|n,s,void 0,a===void 0?null:a)}function Zs(e,n,s,a){var d=jt();a=a===void 0?null:a;var f=void 0;if(Ue!==null){var x=Ue.memoizedState;if(f=x.destroy,a!==null&&yl(a,x.deps)){d.memoizedState=Ri(n,s,f,a);return}}Ae.flags|=e,d.memoizedState=Ri(1|n,s,f,a)}function Vf(e,n){return Js(8390656,8,e,n)}function El(e,n){return Zs(2048,8,e,n)}function If(e,n){return Zs(4,2,e,n)}function Bf(e,n){return Zs(4,4,e,n)}function Uf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $f(e,n,s){return s=s!=null?s.concat([e]):null,Zs(4,4,Uf.bind(null,n,e),s)}function bl(){}function qf(e,n){var s=jt();n=n===void 0?null:n;var a=s.memoizedState;return a!==null&&n!==null&&yl(n,a[1])?a[0]:(s.memoizedState=[e,n],e)}function Hf(e,n){var s=jt();n=n===void 0?null:n;var a=s.memoizedState;return a!==null&&n!==null&&yl(n,a[1])?a[0]:(e=e(),s.memoizedState=[e,n],e)}function Wf(e,n,s){return(Qn&21)===0?(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=s):(Ft(s,n)||(s=Sd(),Ae.lanes|=s,Xn|=s,e.baseState=!0),n)}function Pv(e,n){var s=Se;Se=s!==0&&4>s?s:4,e(!0);var a=gl.transition;gl.transition={};try{e(!1),n()}finally{Se=s,gl.transition=a}}function Kf(){return jt().memoizedState}function jv(e,n,s){var a=Nn(e);if(s={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null},Gf(e))Yf(n,s);else if(s=kf(e,n,s,a),s!==null){var d=ot();Ut(s,e,a,d),Qf(s,n,a)}}function Nv(e,n,s){var a=Nn(e),d={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null};if(Gf(e))Yf(n,d);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,S=f(x,s);if(d.hasEagerState=!0,d.eagerState=S,Ft(S,x)){var k=n.interleaved;k===null?(d.next=d,cl(n)):(d.next=k.next,k.next=d),n.interleaved=d;return}}catch{}finally{}s=kf(e,n,d,a),s!==null&&(d=ot(),Ut(s,e,a,d),Qf(s,n,a))}}function Gf(e){var n=e.alternate;return e===Ae||n!==null&&n===Ae}function Yf(e,n){Pi=Xs=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function Qf(e,n,s){if((s&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,s|=a,n.lanes=s,ka(e,s)}}var eo={readContext:Pt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},Rv={readContext:Pt,useCallback:function(e,n){return Gt().memoizedState=[e,n===void 0?null:n],e},useContext:Pt,useEffect:Vf,useImperativeHandle:function(e,n,s){return s=s!=null?s.concat([e]):null,Js(4194308,4,Uf.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Js(4194308,4,e,n)},useInsertionEffect:function(e,n){return Js(4,2,e,n)},useMemo:function(e,n){var s=Gt();return n=n===void 0?null:n,e=e(),s.memoizedState=[e,n],e},useReducer:function(e,n,s){var a=Gt();return n=s!==void 0?s(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=jv.bind(null,Ae,e),[a.memoizedState,e]},useRef:function(e){var n=Gt();return e={current:e},n.memoizedState=e},useState:Ff,useDebugValue:bl,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=Ff(!1),n=e[0];return e=Pv.bind(null,e[1]),Gt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,s){var a=Ae,d=Gt();if(Pe){if(s===void 0)throw Error(i(407));s=s()}else{if(s=n(),We===null)throw Error(i(349));(Qn&30)!==0||Lf(a,n,s)}d.memoizedState=s;var f={value:s,getSnapshot:n};return d.queue=f,Vf(Of.bind(null,a,f,e),[e]),a.flags|=2048,Ri(9,Df.bind(null,a,f,s,n),void 0,null),s},useId:function(){var e=Gt(),n=We.identifierPrefix;if(Pe){var s=rn,a=nn;s=(a&~(1<<32-zt(a)-1)).toString(32)+s,n=":"+n+"R"+s,s=ji++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=Tv++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Av={readContext:Pt,useCallback:qf,useContext:Pt,useEffect:El,useImperativeHandle:$f,useInsertionEffect:If,useLayoutEffect:Bf,useMemo:Hf,useReducer:wl,useRef:_f,useState:function(){return wl(Ni)},useDebugValue:bl,useDeferredValue:function(e){var n=jt();return Wf(n,Ue.memoizedState,e)},useTransition:function(){var e=wl(Ni)[0],n=jt().memoizedState;return[e,n]},useMutableSource:Rf,useSyncExternalStore:Af,useId:Kf,unstable_isNewReconciler:!1},Lv={readContext:Pt,useCallback:qf,useContext:Pt,useEffect:El,useImperativeHandle:$f,useInsertionEffect:If,useLayoutEffect:Bf,useMemo:Hf,useReducer:Sl,useRef:_f,useState:function(){return Sl(Ni)},useDebugValue:bl,useDeferredValue:function(e){var n=jt();return Ue===null?n.memoizedState=e:Wf(n,Ue.memoizedState,e)},useTransition:function(){var e=Sl(Ni)[0],n=jt().memoizedState;return[e,n]},useMutableSource:Rf,useSyncExternalStore:Af,useId:Kf,unstable_isNewReconciler:!1};function Vt(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var s in e)n[s]===void 0&&(n[s]=e[s]);return n}return n}function Cl(e,n,s,a){n=e.memoizedState,s=s(a,n),s=s==null?n:K({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var to={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var a=ot(),d=Nn(e),f=on(a,d);f.payload=n,s!=null&&(f.callback=s),n=kn(e,f,d),n!==null&&(Ut(n,e,d,a),Ks(n,e,d))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var a=ot(),d=Nn(e),f=on(a,d);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=kn(e,f,d),n!==null&&(Ut(n,e,d,a),Ks(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=ot(),a=Nn(e),d=on(s,a);d.tag=2,n!=null&&(d.callback=n),n=kn(e,d,a),n!==null&&(Ut(n,e,a,s),Ks(n,e,a))}};function Xf(e,n,s,a,d,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,f,x):n.prototype&&n.prototype.isPureReactComponent?!gi(s,a)||!gi(d,f):!0}function Jf(e,n,s){var a=!1,d=En,f=n.contextType;return typeof f=="object"&&f!==null?f=Pt(f):(d=dt(n)?Hn:Je.current,a=n.contextTypes,f=(a=a!=null)?Cr(e,d):En),n=new n(s,f),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=to,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=f),n}function Zf(e,n,s,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,a),n.state!==e&&to.enqueueReplaceState(n,n.state,null)}function kl(e,n,s,a){var d=e.stateNode;d.props=s,d.state=e.memoizedState,d.refs={},dl(e);var f=n.contextType;typeof f=="object"&&f!==null?d.context=Pt(f):(f=dt(n)?Hn:Je.current,d.context=Cr(e,f)),d.state=e.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Cl(e,n,f,s),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&to.enqueueReplaceState(d,d.state,null),Gs(e,s,d,a),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,n){try{var s="",a=n;do s+=ge(a),a=a.return;while(a);var d=s}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:n,stack:d,digest:null}}function Tl(e,n,s){return{value:e,source:null,stack:s??null,digest:n??null}}function Pl(e,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var Dv=typeof WeakMap=="function"?WeakMap:Map;function ep(e,n,s){s=on(-1,s),s.tag=3,s.payload={element:null};var a=n.value;return s.callback=function(){lo||(lo=!0,Ul=a),Pl(e,n)},s}function tp(e,n,s){s=on(-1,s),s.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var d=n.value;s.payload=function(){return a(d)},s.callback=function(){Pl(e,n)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(s.callback=function(){Pl(e,n),typeof a!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var x=n.stack;this.componentDidCatch(n.value,{componentStack:x!==null?x:""})}),s}function np(e,n,s){var a=e.pingCache;if(a===null){a=e.pingCache=new Dv;var d=new Set;a.set(n,d)}else d=a.get(n),d===void 0&&(d=new Set,a.set(n,d));d.has(s)||(d.add(s),e=Kv.bind(null,e,n,s),n.then(e,e))}function rp(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ip(e,n,s,a,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=on(-1,1),n.tag=2,kn(s,n,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var Ov=$.ReactCurrentOwner,ft=!1;function st(e,n,s,a){n.child=e===null?Cf(n,null,s,a):jr(n,e.child,s,a)}function sp(e,n,s,a,d){s=s.render;var f=n.ref;return Rr(n,d),a=vl(e,n,s,a,f,d),s=xl(),e!==null&&!ft?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,an(e,n,d)):(Pe&&s&&tl(n),n.flags|=1,st(e,n,a,d),n.child)}function op(e,n,s,a,d){if(e===null){var f=s.type;return typeof f=="function"&&!Yl(f)&&f.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=f,ap(e,n,f,a,d)):(e=mo(s.type,null,a,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,(e.lanes&d)===0){var x=f.memoizedProps;if(s=s.compare,s=s!==null?s:gi,s(x,a)&&e.ref===n.ref)return an(e,n,d)}return n.flags|=1,e=An(f,a),e.ref=n.ref,e.return=n,n.child=e}function ap(e,n,s,a,d){if(e!==null){var f=e.memoizedProps;if(gi(f,a)&&e.ref===n.ref)if(ft=!1,n.pendingProps=a=f,(e.lanes&d)!==0)(e.flags&131072)!==0&&(ft=!0);else return n.lanes=e.lanes,an(e,n,d)}return jl(e,n,s,a,d)}function lp(e,n,s){var a=n.pendingProps,d=a.children,f=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Or,Ct),Ct|=s;else{if((s&1073741824)===0)return e=f!==null?f.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,be(Or,Ct),Ct|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=f!==null?f.baseLanes:s,be(Or,Ct),Ct|=a}else f!==null?(a=f.baseLanes|s,n.memoizedState=null):a=s,be(Or,Ct),Ct|=a;return st(e,n,d,s),n.child}function up(e,n){var s=n.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function jl(e,n,s,a,d){var f=dt(s)?Hn:Je.current;return f=Cr(n,f),Rr(n,d),s=vl(e,n,s,a,f,d),a=xl(),e!==null&&!ft?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,an(e,n,d)):(Pe&&a&&tl(n),n.flags|=1,st(e,n,s,d),n.child)}function cp(e,n,s,a,d){if(dt(s)){var f=!0;Vs(n)}else f=!1;if(Rr(n,d),n.stateNode===null)ro(e,n),Jf(n,s,a),kl(n,s,a,d),a=!0;else if(e===null){var x=n.stateNode,S=n.memoizedProps;x.props=S;var k=x.context,D=s.contextType;typeof D=="object"&&D!==null?D=Pt(D):(D=dt(s)?Hn:Je.current,D=Cr(n,D));var I=s.getDerivedStateFromProps,B=typeof I=="function"||typeof x.getSnapshotBeforeUpdate=="function";B||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(S!==a||k!==D)&&Zf(n,x,a,D),Cn=!1;var _=n.memoizedState;x.state=_,Gs(n,a,x,d),k=n.memoizedState,S!==a||_!==k||ct.current||Cn?(typeof I=="function"&&(Cl(n,s,I,a),k=n.memoizedState),(S=Cn||Xf(n,s,S,a,_,k,D))?(B||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(n.flags|=4194308)):(typeof x.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=k),x.props=a,x.state=k,x.context=D,a=S):(typeof x.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{x=n.stateNode,Tf(e,n),S=n.memoizedProps,D=n.type===n.elementType?S:Vt(n.type,S),x.props=D,B=n.pendingProps,_=x.context,k=s.contextType,typeof k=="object"&&k!==null?k=Pt(k):(k=dt(s)?Hn:Je.current,k=Cr(n,k));var G=s.getDerivedStateFromProps;(I=typeof G=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(S!==B||_!==k)&&Zf(n,x,a,k),Cn=!1,_=n.memoizedState,x.state=_,Gs(n,a,x,d);var J=n.memoizedState;S!==B||_!==J||ct.current||Cn?(typeof G=="function"&&(Cl(n,s,G,a),J=n.memoizedState),(D=Cn||Xf(n,s,D,a,_,J,k)||!1)?(I||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(a,J,k),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(a,J,k)),typeof x.componentDidUpdate=="function"&&(n.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof x.componentDidUpdate!="function"||S===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=J),x.props=a,x.state=J,x.context=k,a=D):(typeof x.componentDidUpdate!="function"||S===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),a=!1)}return Nl(e,n,s,a,f,d)}function Nl(e,n,s,a,d,f){up(e,n);var x=(n.flags&128)!==0;if(!a&&!x)return d&&mf(n,s,!1),an(e,n,f);a=n.stateNode,Ov.current=n;var S=x&&typeof s.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&x?(n.child=jr(n,e.child,null,f),n.child=jr(n,null,S,f)):st(e,n,S,f),n.memoizedState=a.state,d&&mf(n,s,!0),n.child}function dp(e){var n=e.stateNode;n.pendingContext?pf(e,n.pendingContext,n.pendingContext!==n.context):n.context&&pf(e,n.context,!1),fl(e,n.containerInfo)}function fp(e,n,s,a,d){return Pr(),sl(d),n.flags|=256,st(e,n,s,a),n.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function pp(e,n,s){var a=n.pendingProps,d=Re.current,f=!1,x=(n.flags&128)!==0,S;if((S=x)||(S=e!==null&&e.memoizedState===null?!1:(d&2)!==0),S?(f=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),be(Re,d&1),e===null)return il(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(x=a.children,e=a.fallback,f?(a=n.mode,f=n.child,x={mode:"hidden",children:x},(a&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=x):f=go(x,a,0,null),e=tr(e,a,s,null),f.return=n,e.return=n,f.sibling=e,n.child=f,n.child.memoizedState=Al(s),n.memoizedState=Rl,e):Ll(n,x));if(d=e.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return Mv(e,n,x,a,S,d,s);if(f){f=a.fallback,x=n.mode,d=e.child,S=d.sibling;var k={mode:"hidden",children:a.children};return(x&1)===0&&n.child!==d?(a=n.child,a.childLanes=0,a.pendingProps=k,n.deletions=null):(a=An(d,k),a.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=An(S,f):(f=tr(f,x,s,null),f.flags|=2),f.return=n,a.return=n,a.sibling=f,n.child=a,a=f,f=n.child,x=e.child.memoizedState,x=x===null?Al(s):{baseLanes:x.baseLanes|s,cachePool:null,transitions:x.transitions},f.memoizedState=x,f.childLanes=e.childLanes&~s,n.memoizedState=Rl,a}return f=e.child,e=f.sibling,a=An(f,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=s),a.return=n,a.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=a,n.memoizedState=null,a}function Ll(e,n){return n=go({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function no(e,n,s,a){return a!==null&&sl(a),jr(n,e.child,null,s),e=Ll(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mv(e,n,s,a,d,f,x){if(s)return n.flags&256?(n.flags&=-257,a=Tl(Error(i(422))),no(e,n,x,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(f=a.fallback,d=n.mode,a=go({mode:"visible",children:a.children},d,0,null),f=tr(f,d,x,null),f.flags|=2,a.return=n,f.return=n,a.sibling=f,n.child=a,(n.mode&1)!==0&&jr(n,e.child,null,x),n.child.memoizedState=Al(x),n.memoizedState=Rl,f);if((n.mode&1)===0)return no(e,n,x,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var S=a.dgst;return a=S,f=Error(i(419)),a=Tl(f,a,void 0),no(e,n,x,a)}if(S=(x&e.childLanes)!==0,ft||S){if(a=We,a!==null){switch(x&-x){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|x))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,sn(e,d),Ut(a,e,d,-1))}return Gl(),a=Tl(Error(i(421))),no(e,n,x,a)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=Gv.bind(null,e),d._reactRetry=n,null):(e=f.treeContext,bt=wn(d.nextSibling),Et=n,Pe=!0,_t=null,e!==null&&(kt[Tt++]=nn,kt[Tt++]=rn,kt[Tt++]=Wn,nn=e.id,rn=e.overflow,Wn=n),n=Ll(n,a.children),n.flags|=4096,n)}function hp(e,n,s){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),ul(e.return,n,s)}function Dl(e,n,s,a,d){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:d}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=s,f.tailMode=d)}function mp(e,n,s){var a=n.pendingProps,d=a.revealOrder,f=a.tail;if(st(e,n,a.children,s),a=Re.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hp(e,s,n);else if(e.tag===19)hp(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(be(Re,a),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(s=n.child,d=null;s!==null;)e=s.alternate,e!==null&&Ys(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=n.child,n.child=null):(d=s.sibling,s.sibling=null),Dl(n,!1,d,s,f);break;case"backwards":for(s=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&Ys(e)===null){n.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}Dl(n,!0,s,null,f);break;case"together":Dl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ro(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function an(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Xn|=n.lanes,(s&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,s=An(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=An(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function zv(e,n,s){switch(n.tag){case 3:dp(n),Pr();break;case 5:Nf(n);break;case 1:dt(n.type)&&Vs(n);break;case 4:fl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,d=n.memoizedProps.value;be(Hs,a._currentValue),a._currentValue=d;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(be(Re,Re.current&1),n.flags|=128,null):(s&n.child.childLanes)!==0?pp(e,n,s):(be(Re,Re.current&1),e=an(e,n,s),e!==null?e.sibling:null);be(Re,Re.current&1);break;case 19:if(a=(s&n.childLanes)!==0,(e.flags&128)!==0){if(a)return mp(e,n,s);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),be(Re,Re.current),a)break;return null;case 22:case 23:return n.lanes=0,lp(e,n,s)}return an(e,n,s)}var gp,Ol,yp,vp;gp=function(e,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ol=function(){},yp=function(e,n,s,a){var d=e.memoizedProps;if(d!==a){e=n.stateNode,Yn(Kt.current);var f=null;switch(s){case"input":d=ua(e,d),a=ua(e,a),f=[];break;case"select":d=K({},d,{value:void 0}),a=K({},a,{value:void 0}),f=[];break;case"textarea":d=fa(e,d),a=fa(e,a),f=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=zs)}ha(s,a);var x;s=null;for(D in d)if(!a.hasOwnProperty(D)&&d.hasOwnProperty(D)&&d[D]!=null)if(D==="style"){var S=d[D];for(x in S)S.hasOwnProperty(x)&&(s||(s={}),s[x]="")}else D!=="dangerouslySetInnerHTML"&&D!=="children"&&D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&D!=="autoFocus"&&(l.hasOwnProperty(D)?f||(f=[]):(f=f||[]).push(D,null));for(D in a){var k=a[D];if(S=d?.[D],a.hasOwnProperty(D)&&k!==S&&(k!=null||S!=null))if(D==="style")if(S){for(x in S)!S.hasOwnProperty(x)||k&&k.hasOwnProperty(x)||(s||(s={}),s[x]="");for(x in k)k.hasOwnProperty(x)&&S[x]!==k[x]&&(s||(s={}),s[x]=k[x])}else s||(f||(f=[]),f.push(D,s)),s=k;else D==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,S=S?S.__html:void 0,k!=null&&S!==k&&(f=f||[]).push(D,k)):D==="children"?typeof k!="string"&&typeof k!="number"||(f=f||[]).push(D,""+k):D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&(l.hasOwnProperty(D)?(k!=null&&D==="onScroll"&&Ce("scroll",e),f||S===k||(f=[])):(f=f||[]).push(D,k))}s&&(f=f||[]).push("style",s);var D=f;(n.updateQueue=D)&&(n.flags|=4)}},vp=function(e,n,s,a){s!==a&&(n.flags|=4)};function Ai(e,n){if(!Pe)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function et(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,a=0;if(n)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=s,n}function Fv(e,n,s){var a=n.pendingProps;switch(nl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(n),null;case 1:return dt(n.type)&&_s(),et(n),null;case 3:return a=n.stateNode,Ar(),ke(ct),ke(Je),ml(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($s(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_t!==null&&(Hl(_t),_t=null))),Ol(e,n),et(n),null;case 5:pl(n);var d=Yn(Ti.current);if(s=n.type,e!==null&&n.stateNode!=null)yp(e,n,s,a,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(i(166));return et(n),null}if(e=Yn(Kt.current),$s(n)){a=n.stateNode,s=n.type;var f=n.memoizedProps;switch(a[Wt]=n,a[Si]=f,e=(n.mode&1)!==0,s){case"dialog":Ce("cancel",a),Ce("close",a);break;case"iframe":case"object":case"embed":Ce("load",a);break;case"video":case"audio":for(d=0;d<vi.length;d++)Ce(vi[d],a);break;case"source":Ce("error",a);break;case"img":case"image":case"link":Ce("error",a),Ce("load",a);break;case"details":Ce("toggle",a);break;case"input":Xc(a,f),Ce("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!f.multiple},Ce("invalid",a);break;case"textarea":ed(a,f),Ce("invalid",a)}ha(s,f),d=null;for(var x in f)if(f.hasOwnProperty(x)){var S=f[x];x==="children"?typeof S=="string"?a.textContent!==S&&(f.suppressHydrationWarning!==!0&&Ms(a.textContent,S,e),d=["children",S]):typeof S=="number"&&a.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&Ms(a.textContent,S,e),d=["children",""+S]):l.hasOwnProperty(x)&&S!=null&&x==="onScroll"&&Ce("scroll",a)}switch(s){case"input":fs(a),Zc(a,f,!0);break;case"textarea":fs(a),nd(a);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(a.onclick=zs)}a=d,n.updateQueue=a,a!==null&&(n.flags|=4)}else{x=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rd(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=x.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=x.createElement(s,{is:a.is}):(e=x.createElement(s),s==="select"&&(x=e,a.multiple?x.multiple=!0:a.size&&(x.size=a.size))):e=x.createElementNS(e,s),e[Wt]=n,e[Si]=a,gp(e,n,!1,!1),n.stateNode=e;e:{switch(x=ma(s,a),s){case"dialog":Ce("cancel",e),Ce("close",e),d=a;break;case"iframe":case"object":case"embed":Ce("load",e),d=a;break;case"video":case"audio":for(d=0;d<vi.length;d++)Ce(vi[d],e);d=a;break;case"source":Ce("error",e),d=a;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),d=a;break;case"details":Ce("toggle",e),d=a;break;case"input":Xc(e,a),d=ua(e,a),Ce("invalid",e);break;case"option":d=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},d=K({},a,{value:void 0}),Ce("invalid",e);break;case"textarea":ed(e,a),d=fa(e,a),Ce("invalid",e);break;default:d=a}ha(s,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var k=S[f];f==="style"?od(e,k):f==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&id(e,k)):f==="children"?typeof k=="string"?(s!=="textarea"||k!=="")&&Zr(e,k):typeof k=="number"&&Zr(e,""+k):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?k!=null&&f==="onScroll"&&Ce("scroll",e):k!=null&&M(e,f,k,x))}switch(s){case"input":fs(e),Zc(e,a,!1);break;case"textarea":fs(e),nd(e);break;case"option":a.value!=null&&e.setAttribute("value",""+we(a.value));break;case"select":e.multiple=!!a.multiple,f=a.value,f!=null?fr(e,!!a.multiple,f,!1):a.defaultValue!=null&&fr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=zs)}switch(s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return et(n),null;case 6:if(e&&n.stateNode!=null)vp(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(i(166));if(s=Yn(Ti.current),Yn(Kt.current),$s(n)){if(a=n.stateNode,s=n.memoizedProps,a[Wt]=n,(f=a.nodeValue!==s)&&(e=Et,e!==null))switch(e.tag){case 3:Ms(a.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ms(a.nodeValue,s,(e.mode&1)!==0)}f&&(n.flags|=4)}else a=(s.nodeType===9?s:s.ownerDocument).createTextNode(a),a[Wt]=n,n.stateNode=a}return et(n),null;case 13:if(ke(Re),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&bt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Sf(),Pr(),n.flags|=98560,f=!1;else if(f=$s(n),a!==null&&a.dehydrated!==null){if(e===null){if(!f)throw Error(i(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Wt]=n}else Pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;et(n),f=!1}else _t!==null&&(Hl(_t),_t=null),f=!0;if(!f)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=s,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Re.current&1)!==0?$e===0&&($e=3):Gl())),n.updateQueue!==null&&(n.flags|=4),et(n),null);case 4:return Ar(),Ol(e,n),e===null&&xi(n.stateNode.containerInfo),et(n),null;case 10:return ll(n.type._context),et(n),null;case 17:return dt(n.type)&&_s(),et(n),null;case 19:if(ke(Re),f=n.memoizedState,f===null)return et(n),null;if(a=(n.flags&128)!==0,x=f.rendering,x===null)if(a)Ai(f,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(x=Ys(e),x!==null){for(n.flags|=128,Ai(f,!1),a=x.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=s,s=n.child;s!==null;)f=s,e=a,f.flags&=14680066,x=f.alternate,x===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=x.childLanes,f.lanes=x.lanes,f.child=x.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=x.memoizedProps,f.memoizedState=x.memoizedState,f.updateQueue=x.updateQueue,f.type=x.type,e=x.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return be(Re,Re.current&1|2),n.child}e=e.sibling}f.tail!==null&&Me()>Mr&&(n.flags|=128,a=!0,Ai(f,!1),n.lanes=4194304)}else{if(!a)if(e=Ys(x),e!==null){if(n.flags|=128,a=!0,s=e.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),Ai(f,!0),f.tail===null&&f.tailMode==="hidden"&&!x.alternate&&!Pe)return et(n),null}else 2*Me()-f.renderingStartTime>Mr&&s!==1073741824&&(n.flags|=128,a=!0,Ai(f,!1),n.lanes=4194304);f.isBackwards?(x.sibling=n.child,n.child=x):(s=f.last,s!==null?s.sibling=x:n.child=x,f.last=x)}return f.tail!==null?(n=f.tail,f.rendering=n,f.tail=n.sibling,f.renderingStartTime=Me(),n.sibling=null,s=Re.current,be(Re,a?s&1|2:s&1),n):(et(n),null);case 22:case 23:return Kl(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(Ct&1073741824)!==0&&(et(n),n.subtreeFlags&6&&(n.flags|=8192)):et(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function _v(e,n){switch(nl(n),n.tag){case 1:return dt(n.type)&&_s(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ar(),ke(ct),ke(Je),ml(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return pl(n),null;case 13:if(ke(Re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Pr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ke(Re),null;case 4:return Ar(),null;case 10:return ll(n.type._context),null;case 22:case 23:return Kl(),null;case 24:return null;default:return null}}var io=!1,tt=!1,Vv=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Dr(e,n){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(a){De(e,n,a)}else s.current=null}function Ml(e,n,s){try{s()}catch(a){De(e,n,a)}}var xp=!1;function Iv(e,n){if(Ka=Cs,e=Qd(),Va(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var d=a.anchorOffset,f=a.focusNode;a=a.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var x=0,S=-1,k=-1,D=0,I=0,B=e,_=null;t:for(;;){for(var G;B!==s||d!==0&&B.nodeType!==3||(S=x+d),B!==f||a!==0&&B.nodeType!==3||(k=x+a),B.nodeType===3&&(x+=B.nodeValue.length),(G=B.firstChild)!==null;)_=B,B=G;for(;;){if(B===e)break t;if(_===s&&++D===d&&(S=x),_===f&&++I===a&&(k=x),(G=B.nextSibling)!==null)break;B=_,_=B.parentNode}B=G}s=S===-1||k===-1?null:{start:S,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ga={focusedElem:e,selectionRange:s},Cs=!1,Y=n;Y!==null;)if(n=Y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Y=e;else for(;Y!==null;){n=Y;try{var J=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(J!==null){var Z=J.memoizedProps,ze=J.memoizedState,R=n.stateNode,P=R.getSnapshotBeforeUpdate(n.elementType===n.type?Z:Vt(n.type,Z),ze);R.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var A=n.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(U){De(n,n.return,U)}if(e=n.sibling,e!==null){e.return=n.return,Y=e;break}Y=n.return}return J=xp,xp=!1,J}function Li(e,n,s){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&e)===e){var f=d.destroy;d.destroy=void 0,f!==void 0&&Ml(n,s,f)}d=d.next}while(d!==a)}}function so(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var a=s.create;s.destroy=a()}s=s.next}while(s!==n)}}function zl(e){var n=e.ref;if(n!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof n=="function"?n(e):n.current=e}}function wp(e){var n=e.alternate;n!==null&&(e.alternate=null,wp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Wt],delete n[Si],delete n[Ja],delete n[Ev],delete n[bv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sp(e){return e.tag===5||e.tag===3||e.tag===4}function Ep(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fl(e,n,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=zs));else if(a!==4&&(e=e.child,e!==null))for(Fl(e,n,s),e=e.sibling;e!==null;)Fl(e,n,s),e=e.sibling}function _l(e,n,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(_l(e,n,s),e=e.sibling;e!==null;)_l(e,n,s),e=e.sibling}var Ye=null,It=!1;function Tn(e,n,s){for(s=s.child;s!==null;)bp(e,n,s),s=s.sibling}function bp(e,n,s){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(vs,s)}catch{}switch(s.tag){case 5:tt||Dr(s,n);case 6:var a=Ye,d=It;Ye=null,Tn(e,n,s),Ye=a,It=d,Ye!==null&&(It?(e=Ye,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):Ye.removeChild(s.stateNode));break;case 18:Ye!==null&&(It?(e=Ye,s=s.stateNode,e.nodeType===8?Xa(e.parentNode,s):e.nodeType===1&&Xa(e,s),ci(e)):Xa(Ye,s.stateNode));break;case 4:a=Ye,d=It,Ye=s.stateNode.containerInfo,It=!0,Tn(e,n,s),Ye=a,It=d;break;case 0:case 11:case 14:case 15:if(!tt&&(a=s.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var f=d,x=f.destroy;f=f.tag,x!==void 0&&((f&2)!==0||(f&4)!==0)&&Ml(s,n,x),d=d.next}while(d!==a)}Tn(e,n,s);break;case 1:if(!tt&&(Dr(s,n),a=s.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=s.memoizedProps,a.state=s.memoizedState,a.componentWillUnmount()}catch(S){De(s,n,S)}Tn(e,n,s);break;case 21:Tn(e,n,s);break;case 22:s.mode&1?(tt=(a=tt)||s.memoizedState!==null,Tn(e,n,s),tt=a):Tn(e,n,s);break;default:Tn(e,n,s)}}function Cp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Vv),n.forEach(function(a){var d=Yv.bind(null,e,a);s.has(a)||(s.add(a),a.then(d,d))})}}function Bt(e,n){var s=n.deletions;if(s!==null)for(var a=0;a<s.length;a++){var d=s[a];try{var f=e,x=n,S=x;e:for(;S!==null;){switch(S.tag){case 5:Ye=S.stateNode,It=!1;break e;case 3:Ye=S.stateNode.containerInfo,It=!0;break e;case 4:Ye=S.stateNode.containerInfo,It=!0;break e}S=S.return}if(Ye===null)throw Error(i(160));bp(f,x,d),Ye=null,It=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(D){De(d,n,D)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)kp(n,e),n=n.sibling}function kp(e,n){var s=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Bt(n,e),Yt(e),a&4){try{Li(3,e,e.return),so(3,e)}catch(Z){De(e,e.return,Z)}try{Li(5,e,e.return)}catch(Z){De(e,e.return,Z)}}break;case 1:Bt(n,e),Yt(e),a&512&&s!==null&&Dr(s,s.return);break;case 5:if(Bt(n,e),Yt(e),a&512&&s!==null&&Dr(s,s.return),e.flags&32){var d=e.stateNode;try{Zr(d,"")}catch(Z){De(e,e.return,Z)}}if(a&4&&(d=e.stateNode,d!=null)){var f=e.memoizedProps,x=s!==null?s.memoizedProps:f,S=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&Jc(d,f),ma(S,x);var D=ma(S,f);for(x=0;x<k.length;x+=2){var I=k[x],B=k[x+1];I==="style"?od(d,B):I==="dangerouslySetInnerHTML"?id(d,B):I==="children"?Zr(d,B):M(d,I,B,D)}switch(S){case"input":ca(d,f);break;case"textarea":td(d,f);break;case"select":var _=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var G=f.value;G!=null?fr(d,!!f.multiple,G,!1):_!==!!f.multiple&&(f.defaultValue!=null?fr(d,!!f.multiple,f.defaultValue,!0):fr(d,!!f.multiple,f.multiple?[]:"",!1))}d[Si]=f}catch(Z){De(e,e.return,Z)}}break;case 6:if(Bt(n,e),Yt(e),a&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,f=e.memoizedProps;try{d.nodeValue=f}catch(Z){De(e,e.return,Z)}}break;case 3:if(Bt(n,e),Yt(e),a&4&&s!==null&&s.memoizedState.isDehydrated)try{ci(n.containerInfo)}catch(Z){De(e,e.return,Z)}break;case 4:Bt(n,e),Yt(e);break;case 13:Bt(n,e),Yt(e),d=e.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Bl=Me())),a&4&&Cp(e);break;case 22:if(I=s!==null&&s.memoizedState!==null,e.mode&1?(tt=(D=tt)||I,Bt(n,e),tt=D):Bt(n,e),Yt(e),a&8192){if(D=e.memoizedState!==null,(e.stateNode.isHidden=D)&&!I&&(e.mode&1)!==0)for(Y=e,I=e.child;I!==null;){for(B=Y=I;Y!==null;){switch(_=Y,G=_.child,_.tag){case 0:case 11:case 14:case 15:Li(4,_,_.return);break;case 1:Dr(_,_.return);var J=_.stateNode;if(typeof J.componentWillUnmount=="function"){a=_,s=_.return;try{n=a,J.props=n.memoizedProps,J.state=n.memoizedState,J.componentWillUnmount()}catch(Z){De(a,s,Z)}}break;case 5:Dr(_,_.return);break;case 22:if(_.memoizedState!==null){jp(B);continue}}G!==null?(G.return=_,Y=G):jp(B)}I=I.sibling}e:for(I=null,B=e;;){if(B.tag===5){if(I===null){I=B;try{d=B.stateNode,D?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=B.stateNode,k=B.memoizedProps.style,x=k!=null&&k.hasOwnProperty("display")?k.display:null,S.style.display=sd("display",x))}catch(Z){De(e,e.return,Z)}}}else if(B.tag===6){if(I===null)try{B.stateNode.nodeValue=D?"":B.memoizedProps}catch(Z){De(e,e.return,Z)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;I===B&&(I=null),B=B.return}I===B&&(I=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:Bt(n,e),Yt(e),a&4&&Cp(e);break;case 21:break;default:Bt(n,e),Yt(e)}}function Yt(e){var n=e.flags;if(n&2){try{e:{for(var s=e.return;s!==null;){if(Sp(s)){var a=s;break e}s=s.return}throw Error(i(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(Zr(d,""),a.flags&=-33);var f=Ep(e);_l(e,f,d);break;case 3:case 4:var x=a.stateNode.containerInfo,S=Ep(e);Fl(e,S,x);break;default:throw Error(i(161))}}catch(k){De(e,e.return,k)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bv(e,n,s){Y=e,Tp(e)}function Tp(e,n,s){for(var a=(e.mode&1)!==0;Y!==null;){var d=Y,f=d.child;if(d.tag===22&&a){var x=d.memoizedState!==null||io;if(!x){var S=d.alternate,k=S!==null&&S.memoizedState!==null||tt;S=io;var D=tt;if(io=x,(tt=k)&&!D)for(Y=d;Y!==null;)x=Y,k=x.child,x.tag===22&&x.memoizedState!==null?Np(d):k!==null?(k.return=x,Y=k):Np(d);for(;f!==null;)Y=f,Tp(f),f=f.sibling;Y=d,io=S,tt=D}Pp(e)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,Y=f):Pp(e)}}function Pp(e){for(;Y!==null;){var n=Y;if((n.flags&8772)!==0){var s=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:tt||so(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!tt)if(s===null)a.componentDidMount();else{var d=n.elementType===n.type?s.memoizedProps:Vt(n.type,s.memoizedProps);a.componentDidUpdate(d,s.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var f=n.updateQueue;f!==null&&jf(n,f,a);break;case 3:var x=n.updateQueue;if(x!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}jf(n,x,s)}break;case 5:var S=n.stateNode;if(s===null&&n.flags&4){s=S;var k=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&s.focus();break;case"img":k.src&&(s.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var D=n.alternate;if(D!==null){var I=D.memoizedState;if(I!==null){var B=I.dehydrated;B!==null&&ci(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}tt||n.flags&512&&zl(n)}catch(_){De(n,n.return,_)}}if(n===e){Y=null;break}if(s=n.sibling,s!==null){s.return=n.return,Y=s;break}Y=n.return}}function jp(e){for(;Y!==null;){var n=Y;if(n===e){Y=null;break}var s=n.sibling;if(s!==null){s.return=n.return,Y=s;break}Y=n.return}}function Np(e){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{so(4,n)}catch(k){De(n,s,k)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var d=n.return;try{a.componentDidMount()}catch(k){De(n,d,k)}}var f=n.return;try{zl(n)}catch(k){De(n,f,k)}break;case 5:var x=n.return;try{zl(n)}catch(k){De(n,x,k)}}}catch(k){De(n,n.return,k)}if(n===e){Y=null;break}var S=n.sibling;if(S!==null){S.return=n.return,Y=S;break}Y=n.return}}var Uv=Math.ceil,oo=$.ReactCurrentDispatcher,Vl=$.ReactCurrentOwner,Nt=$.ReactCurrentBatchConfig,me=0,We=null,Ie=null,Qe=0,Ct=0,Or=Sn(0),$e=0,Di=null,Xn=0,ao=0,Il=0,Oi=null,pt=null,Bl=0,Mr=1/0,ln=null,lo=!1,Ul=null,Pn=null,uo=!1,jn=null,co=0,Mi=0,$l=null,fo=-1,po=0;function ot(){return(me&6)!==0?Me():fo!==-1?fo:fo=Me()}function Nn(e){return(e.mode&1)===0?1:(me&2)!==0&&Qe!==0?Qe&-Qe:kv.transition!==null?(po===0&&(po=Sd()),po):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Rd(e.type)),e)}function Ut(e,n,s,a){if(50<Mi)throw Mi=0,$l=null,Error(i(185));si(e,s,a),((me&2)===0||e!==We)&&(e===We&&((me&2)===0&&(ao|=s),$e===4&&Rn(e,Qe)),ht(e,a),s===1&&me===0&&(n.mode&1)===0&&(Mr=Me()+500,Is&&bn()))}function ht(e,n){var s=e.callbackNode;ky(e,n);var a=Ss(e,e===We?Qe:0);if(a===0)s!==null&&vd(s),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(s!=null&&vd(s),n===1)e.tag===0?Cv(Ap.bind(null,e)):gf(Ap.bind(null,e)),wv(function(){(me&6)===0&&bn()}),s=null;else{switch(Ed(a)){case 1:s=Ea;break;case 4:s=xd;break;case 16:s=ys;break;case 536870912:s=wd;break;default:s=ys}s=Vp(s,Rp.bind(null,e))}e.callbackPriority=n,e.callbackNode=s}}function Rp(e,n){if(fo=-1,po=0,(me&6)!==0)throw Error(i(327));var s=e.callbackNode;if(zr()&&e.callbackNode!==s)return null;var a=Ss(e,e===We?Qe:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=ho(e,a);else{n=a;var d=me;me|=2;var f=Dp();(We!==e||Qe!==n)&&(ln=null,Mr=Me()+500,Zn(e,n));do try{Hv();break}catch(S){Lp(e,S)}while(!0);al(),oo.current=f,me=d,Ie!==null?n=0:(We=null,Qe=0,n=$e)}if(n!==0){if(n===2&&(d=ba(e),d!==0&&(a=d,n=ql(e,d))),n===1)throw s=Di,Zn(e,0),Rn(e,a),ht(e,Me()),s;if(n===6)Rn(e,a);else{if(d=e.current.alternate,(a&30)===0&&!$v(d)&&(n=ho(e,a),n===2&&(f=ba(e),f!==0&&(a=f,n=ql(e,f))),n===1))throw s=Di,Zn(e,0),Rn(e,a),ht(e,Me()),s;switch(e.finishedWork=d,e.finishedLanes=a,n){case 0:case 1:throw Error(i(345));case 2:er(e,pt,ln);break;case 3:if(Rn(e,a),(a&130023424)===a&&(n=Bl+500-Me(),10<n)){if(Ss(e,0)!==0)break;if(d=e.suspendedLanes,(d&a)!==a){ot(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=Qa(er.bind(null,e,pt,ln),n);break}er(e,pt,ln);break;case 4:if(Rn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,d=-1;0<a;){var x=31-zt(a);f=1<<x,x=n[x],x>d&&(d=x),a&=~f}if(a=d,a=Me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Uv(a/1960))-a,10<a){e.timeoutHandle=Qa(er.bind(null,e,pt,ln),a);break}er(e,pt,ln);break;case 5:er(e,pt,ln);break;default:throw Error(i(329))}}}return ht(e,Me()),e.callbackNode===s?Rp.bind(null,e):null}function ql(e,n){var s=Oi;return e.current.memoizedState.isDehydrated&&(Zn(e,n).flags|=256),e=ho(e,n),e!==2&&(n=pt,pt=s,n!==null&&Hl(n)),e}function Hl(e){pt===null?pt=e:pt.push.apply(pt,e)}function $v(e){for(var n=e;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var a=0;a<s.length;a++){var d=s[a],f=d.getSnapshot;d=d.value;try{if(!Ft(f(),d))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rn(e,n){for(n&=~Il,n&=~ao,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var s=31-zt(n),a=1<<s;e[s]=-1,n&=~a}}function Ap(e){if((me&6)!==0)throw Error(i(327));zr();var n=Ss(e,0);if((n&1)===0)return ht(e,Me()),null;var s=ho(e,n);if(e.tag!==0&&s===2){var a=ba(e);a!==0&&(n=a,s=ql(e,a))}if(s===1)throw s=Di,Zn(e,0),Rn(e,n),ht(e,Me()),s;if(s===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,er(e,pt,ln),ht(e,Me()),null}function Wl(e,n){var s=me;me|=1;try{return e(n)}finally{me=s,me===0&&(Mr=Me()+500,Is&&bn())}}function Jn(e){jn!==null&&jn.tag===0&&(me&6)===0&&zr();var n=me;me|=1;var s=Nt.transition,a=Se;try{if(Nt.transition=null,Se=1,e)return e()}finally{Se=a,Nt.transition=s,me=n,(me&6)===0&&bn()}}function Kl(){Ct=Or.current,ke(Or)}function Zn(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,xv(s)),Ie!==null)for(s=Ie.return;s!==null;){var a=s;switch(nl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&_s();break;case 3:Ar(),ke(ct),ke(Je),ml();break;case 5:pl(a);break;case 4:Ar();break;case 13:ke(Re);break;case 19:ke(Re);break;case 10:ll(a.type._context);break;case 22:case 23:Kl()}s=s.return}if(We=e,Ie=e=An(e.current,null),Qe=Ct=n,$e=0,Di=null,Il=ao=Xn=0,pt=Oi=null,Gn!==null){for(n=0;n<Gn.length;n++)if(s=Gn[n],a=s.interleaved,a!==null){s.interleaved=null;var d=a.next,f=s.pending;if(f!==null){var x=f.next;f.next=d,a.next=x}s.pending=a}Gn=null}return e}function Lp(e,n){do{var s=Ie;try{if(al(),Qs.current=eo,Xs){for(var a=Ae.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}Xs=!1}if(Qn=0,He=Ue=Ae=null,Pi=!1,ji=0,Vl.current=null,s===null||s.return===null){$e=1,Di=n,Ie=null;break}e:{var f=e,x=s.return,S=s,k=n;if(n=Qe,S.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var D=k,I=S,B=I.tag;if((I.mode&1)===0&&(B===0||B===11||B===15)){var _=I.alternate;_?(I.updateQueue=_.updateQueue,I.memoizedState=_.memoizedState,I.lanes=_.lanes):(I.updateQueue=null,I.memoizedState=null)}var G=rp(x);if(G!==null){G.flags&=-257,ip(G,x,S,f,n),G.mode&1&&np(f,D,n),n=G,k=D;var J=n.updateQueue;if(J===null){var Z=new Set;Z.add(k),n.updateQueue=Z}else J.add(k);break e}else{if((n&1)===0){np(f,D,n),Gl();break e}k=Error(i(426))}}else if(Pe&&S.mode&1){var ze=rp(x);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),ip(ze,x,S,f,n),sl(Lr(k,S));break e}}f=k=Lr(k,S),$e!==4&&($e=2),Oi===null?Oi=[f]:Oi.push(f),f=x;do{switch(f.tag){case 3:f.flags|=65536,n&=-n,f.lanes|=n;var R=ep(f,k,n);Pf(f,R);break e;case 1:S=k;var P=f.type,A=f.stateNode;if((f.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Pn===null||!Pn.has(A)))){f.flags|=65536,n&=-n,f.lanes|=n;var U=tp(f,S,n);Pf(f,U);break e}}f=f.return}while(f!==null)}Mp(s)}catch(ee){n=ee,Ie===s&&s!==null&&(Ie=s=s.return);continue}break}while(!0)}function Dp(){var e=oo.current;return oo.current=eo,e===null?eo:e}function Gl(){($e===0||$e===3||$e===2)&&($e=4),We===null||(Xn&268435455)===0&&(ao&268435455)===0||Rn(We,Qe)}function ho(e,n){var s=me;me|=2;var a=Dp();(We!==e||Qe!==n)&&(ln=null,Zn(e,n));do try{qv();break}catch(d){Lp(e,d)}while(!0);if(al(),me=s,oo.current=a,Ie!==null)throw Error(i(261));return We=null,Qe=0,$e}function qv(){for(;Ie!==null;)Op(Ie)}function Hv(){for(;Ie!==null&&!gy();)Op(Ie)}function Op(e){var n=_p(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,n===null?Mp(e):Ie=n,Vl.current=null}function Mp(e){var n=e;do{var s=n.alternate;if(e=n.return,(n.flags&32768)===0){if(s=Fv(s,n,Ct),s!==null){Ie=s;return}}else{if(s=_v(s,n),s!==null){s.flags&=32767,Ie=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Ie=null;return}}if(n=n.sibling,n!==null){Ie=n;return}Ie=n=e}while(n!==null);$e===0&&($e=5)}function er(e,n,s){var a=Se,d=Nt.transition;try{Nt.transition=null,Se=1,Wv(e,n,s,a)}finally{Nt.transition=d,Se=a}return null}function Wv(e,n,s,a){do zr();while(jn!==null);if((me&6)!==0)throw Error(i(327));s=e.finishedWork;var d=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var f=s.lanes|s.childLanes;if(Ty(e,f),e===We&&(Ie=We=null,Qe=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||uo||(uo=!0,Vp(ys,function(){return zr(),null})),f=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||f){f=Nt.transition,Nt.transition=null;var x=Se;Se=1;var S=me;me|=4,Vl.current=null,Iv(e,s),kp(s,e),fv(Ga),Cs=!!Ka,Ga=Ka=null,e.current=s,Bv(s),yy(),me=S,Se=x,Nt.transition=f}else e.current=s;if(uo&&(uo=!1,jn=e,co=d),f=e.pendingLanes,f===0&&(Pn=null),wy(s.stateNode),ht(e,Me()),n!==null)for(a=e.onRecoverableError,s=0;s<n.length;s++)d=n[s],a(d.value,{componentStack:d.stack,digest:d.digest});if(lo)throw lo=!1,e=Ul,Ul=null,e;return(co&1)!==0&&e.tag!==0&&zr(),f=e.pendingLanes,(f&1)!==0?e===$l?Mi++:(Mi=0,$l=e):Mi=0,bn(),null}function zr(){if(jn!==null){var e=Ed(co),n=Nt.transition,s=Se;try{if(Nt.transition=null,Se=16>e?16:e,jn===null)var a=!1;else{if(e=jn,jn=null,co=0,(me&6)!==0)throw Error(i(331));var d=me;for(me|=4,Y=e.current;Y!==null;){var f=Y,x=f.child;if((Y.flags&16)!==0){var S=f.deletions;if(S!==null){for(var k=0;k<S.length;k++){var D=S[k];for(Y=D;Y!==null;){var I=Y;switch(I.tag){case 0:case 11:case 15:Li(8,I,f)}var B=I.child;if(B!==null)B.return=I,Y=B;else for(;Y!==null;){I=Y;var _=I.sibling,G=I.return;if(wp(I),I===D){Y=null;break}if(_!==null){_.return=G,Y=_;break}Y=G}}}var J=f.alternate;if(J!==null){var Z=J.child;if(Z!==null){J.child=null;do{var ze=Z.sibling;Z.sibling=null,Z=ze}while(Z!==null)}}Y=f}}if((f.subtreeFlags&2064)!==0&&x!==null)x.return=f,Y=x;else e:for(;Y!==null;){if(f=Y,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Li(9,f,f.return)}var R=f.sibling;if(R!==null){R.return=f.return,Y=R;break e}Y=f.return}}var P=e.current;for(Y=P;Y!==null;){x=Y;var A=x.child;if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,Y=A;else e:for(x=P;Y!==null;){if(S=Y,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:so(9,S)}}catch(ee){De(S,S.return,ee)}if(S===x){Y=null;break e}var U=S.sibling;if(U!==null){U.return=S.return,Y=U;break e}Y=S.return}}if(me=d,bn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(vs,e)}catch{}a=!0}return a}finally{Se=s,Nt.transition=n}}return!1}function zp(e,n,s){n=Lr(s,n),n=ep(e,n,1),e=kn(e,n,1),n=ot(),e!==null&&(si(e,1,n),ht(e,n))}function De(e,n,s){if(e.tag===3)zp(e,e,s);else for(;n!==null;){if(n.tag===3){zp(n,e,s);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Pn===null||!Pn.has(a))){e=Lr(s,e),e=tp(n,e,1),n=kn(n,e,1),e=ot(),n!==null&&(si(n,1,e),ht(n,e));break}}n=n.return}}function Kv(e,n,s){var a=e.pingCache;a!==null&&a.delete(n),n=ot(),e.pingedLanes|=e.suspendedLanes&s,We===e&&(Qe&s)===s&&($e===4||$e===3&&(Qe&130023424)===Qe&&500>Me()-Bl?Zn(e,0):Il|=s),ht(e,n)}function Fp(e,n){n===0&&((e.mode&1)===0?n=1:(n=ws,ws<<=1,(ws&130023424)===0&&(ws=4194304)));var s=ot();e=sn(e,n),e!==null&&(si(e,n,s),ht(e,s))}function Gv(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Fp(e,s)}function Yv(e,n){var s=0;switch(e.tag){case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(n),Fp(e,s)}var _p;_p=function(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps||ct.current)ft=!0;else{if((e.lanes&s)===0&&(n.flags&128)===0)return ft=!1,zv(e,n,s);ft=(e.flags&131072)!==0}else ft=!1,Pe&&(n.flags&1048576)!==0&&yf(n,Us,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;ro(e,n),e=n.pendingProps;var d=Cr(n,Je.current);Rr(n,s),d=vl(null,n,a,e,d,s);var f=xl();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,dt(a)?(f=!0,Vs(n)):f=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,dl(n),d.updater=to,n.stateNode=d,d._reactInternals=n,kl(n,a,e,s),n=Nl(null,n,a,!0,f,s)):(n.tag=0,Pe&&f&&tl(n),st(null,n,d,s),n=n.child),n;case 16:a=n.elementType;e:{switch(ro(e,n),e=n.pendingProps,d=a._init,a=d(a._payload),n.type=a,d=n.tag=Xv(a),e=Vt(a,e),d){case 0:n=jl(null,n,a,e,s);break e;case 1:n=cp(null,n,a,e,s);break e;case 11:n=sp(null,n,a,e,s);break e;case 14:n=op(null,n,a,Vt(a.type,e),s);break e}throw Error(i(306,a,""))}return n;case 0:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Vt(a,d),jl(e,n,a,d,s);case 1:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Vt(a,d),cp(e,n,a,d,s);case 3:e:{if(dp(n),e===null)throw Error(i(387));a=n.pendingProps,f=n.memoizedState,d=f.element,Tf(e,n),Gs(n,a,null,s);var x=n.memoizedState;if(a=x.element,f.isDehydrated)if(f={element:a,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){d=Lr(Error(i(423)),n),n=fp(e,n,a,s,d);break e}else if(a!==d){d=Lr(Error(i(424)),n),n=fp(e,n,a,s,d);break e}else for(bt=wn(n.stateNode.containerInfo.firstChild),Et=n,Pe=!0,_t=null,s=Cf(n,null,a,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Pr(),a===d){n=an(e,n,s);break e}st(e,n,a,s)}n=n.child}return n;case 5:return Nf(n),e===null&&il(n),a=n.type,d=n.pendingProps,f=e!==null?e.memoizedProps:null,x=d.children,Ya(a,d)?x=null:f!==null&&Ya(a,f)&&(n.flags|=32),up(e,n),st(e,n,x,s),n.child;case 6:return e===null&&il(n),null;case 13:return pp(e,n,s);case 4:return fl(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=jr(n,null,a,s):st(e,n,a,s),n.child;case 11:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Vt(a,d),sp(e,n,a,d,s);case 7:return st(e,n,n.pendingProps,s),n.child;case 8:return st(e,n,n.pendingProps.children,s),n.child;case 12:return st(e,n,n.pendingProps.children,s),n.child;case 10:e:{if(a=n.type._context,d=n.pendingProps,f=n.memoizedProps,x=d.value,be(Hs,a._currentValue),a._currentValue=x,f!==null)if(Ft(f.value,x)){if(f.children===d.children&&!ct.current){n=an(e,n,s);break e}}else for(f=n.child,f!==null&&(f.return=n);f!==null;){var S=f.dependencies;if(S!==null){x=f.child;for(var k=S.firstContext;k!==null;){if(k.context===a){if(f.tag===1){k=on(-1,s&-s),k.tag=2;var D=f.updateQueue;if(D!==null){D=D.shared;var I=D.pending;I===null?k.next=k:(k.next=I.next,I.next=k),D.pending=k}}f.lanes|=s,k=f.alternate,k!==null&&(k.lanes|=s),ul(f.return,s,n),S.lanes|=s;break}k=k.next}}else if(f.tag===10)x=f.type===n.type?null:f.child;else if(f.tag===18){if(x=f.return,x===null)throw Error(i(341));x.lanes|=s,S=x.alternate,S!==null&&(S.lanes|=s),ul(x,s,n),x=f.sibling}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===n){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}st(e,n,d.children,s),n=n.child}return n;case 9:return d=n.type,a=n.pendingProps.children,Rr(n,s),d=Pt(d),a=a(d),n.flags|=1,st(e,n,a,s),n.child;case 14:return a=n.type,d=Vt(a,n.pendingProps),d=Vt(a.type,d),op(e,n,a,d,s);case 15:return ap(e,n,n.type,n.pendingProps,s);case 17:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Vt(a,d),ro(e,n),n.tag=1,dt(a)?(e=!0,Vs(n)):e=!1,Rr(n,s),Jf(n,a,d),kl(n,a,d,s),Nl(null,n,a,!0,e,s);case 19:return mp(e,n,s);case 22:return lp(e,n,s)}throw Error(i(156,n.tag))};function Vp(e,n){return yd(e,n)}function Qv(e,n,s,a){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,n,s,a){return new Qv(e,n,s,a)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xv(e){if(typeof e=="function")return Yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ne)return 11;if(e===xt)return 14}return 2}function An(e,n){var s=e.alternate;return s===null?(s=Rt(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function mo(e,n,s,a,d,f){var x=2;if(a=e,typeof e=="function")Yl(e)&&(x=1);else if(typeof e=="string")x=5;else e:switch(e){case te:return tr(s.children,d,f,n);case z:x=8,d|=8;break;case Q:return e=Rt(12,s,n,d|2),e.elementType=Q,e.lanes=f,e;case Ge:return e=Rt(13,s,n,d),e.elementType=Ge,e.lanes=f,e;case ut:return e=Rt(19,s,n,d),e.elementType=ut,e.lanes=f,e;case ce:return go(s,d,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:x=10;break e;case fe:x=9;break e;case Ne:x=11;break e;case xt:x=14;break e;case it:x=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=Rt(x,s,n,d),n.elementType=e,n.type=a,n.lanes=f,n}function tr(e,n,s,a){return e=Rt(7,e,a,n),e.lanes=s,e}function go(e,n,s,a){return e=Rt(22,e,a,n),e.elementType=ce,e.lanes=s,e.stateNode={isHidden:!1},e}function Ql(e,n,s){return e=Rt(6,e,null,n),e.lanes=s,e}function Xl(e,n,s){return n=Rt(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Jv(e,n,s,a,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ca(0),this.expirationTimes=Ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ca(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Jl(e,n,s,a,d,f,x,S,k){return e=new Jv(e,n,s,S,k),n===1?(n=1,f===!0&&(n|=8)):n=0,f=Rt(3,null,null,n),e.current=f,f.stateNode=e,f.memoizedState={element:a,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},dl(f),e}function Zv(e,n,s){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:a==null?null:""+a,children:e,containerInfo:n,implementation:s}}function Ip(e){if(!e)return En;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(dt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var s=e.type;if(dt(s))return hf(e,s,n)}return n}function Bp(e,n,s,a,d,f,x,S,k){return e=Jl(s,a,!0,e,d,f,x,S,k),e.context=Ip(null),s=e.current,a=ot(),d=Nn(s),f=on(a,d),f.callback=n??null,kn(s,f,d),e.current.lanes=d,si(e,d,a),ht(e,a),e}function yo(e,n,s,a){var d=n.current,f=ot(),x=Nn(d);return s=Ip(s),n.context===null?n.context=s:n.pendingContext=s,n=on(f,x),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=kn(d,n,x),e!==null&&(Ut(e,d,x,f),Ks(e,d,x)),x}function vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Up(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Zl(e,n){Up(e,n),(e=e.alternate)&&Up(e,n)}function ex(){return null}var $p=typeof reportError=="function"?reportError:function(e){console.error(e)};function eu(e){this._internalRoot=e}xo.prototype.render=eu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));yo(e,n,null,null)},xo.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jn(function(){yo(null,e,null,null)}),n[en]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var n=kd();e={blockedOn:null,target:e,priority:n};for(var s=0;s<yn.length&&n!==0&&n<yn[s].priority;s++);yn.splice(s,0,e),s===0&&jd(e)}};function tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qp(){}function tx(e,n,s,a,d){if(d){if(typeof a=="function"){var f=a;a=function(){var D=vo(x);f.call(D)}}var x=Bp(n,a,e,0,null,!1,!1,"",qp);return e._reactRootContainer=x,e[en]=x.current,xi(e.nodeType===8?e.parentNode:e),Jn(),x}for(;d=e.lastChild;)e.removeChild(d);if(typeof a=="function"){var S=a;a=function(){var D=vo(k);S.call(D)}}var k=Jl(e,0,!1,null,null,!1,!1,"",qp);return e._reactRootContainer=k,e[en]=k.current,xi(e.nodeType===8?e.parentNode:e),Jn(function(){yo(n,k,s,a)}),k}function So(e,n,s,a,d){var f=s._reactRootContainer;if(f){var x=f;if(typeof d=="function"){var S=d;d=function(){var k=vo(x);S.call(k)}}yo(n,x,e,d)}else x=tx(s,n,e,d,a);return vo(x)}bd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var s=ii(n.pendingLanes);s!==0&&(ka(n,s|1),ht(n,Me()),(me&6)===0&&(Mr=Me()+500,bn()))}break;case 13:Jn(function(){var a=sn(e,1);if(a!==null){var d=ot();Ut(a,e,1,d)}}),Zl(e,1)}},Ta=function(e){if(e.tag===13){var n=sn(e,134217728);if(n!==null){var s=ot();Ut(n,e,134217728,s)}Zl(e,134217728)}},Cd=function(e){if(e.tag===13){var n=Nn(e),s=sn(e,n);if(s!==null){var a=ot();Ut(s,e,n,a)}Zl(e,n)}},kd=function(){return Se},Td=function(e,n){var s=Se;try{return Se=e,n()}finally{Se=s}},va=function(e,n,s){switch(n){case"input":if(ca(e,s),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var a=s[n];if(a!==e&&a.form===e.form){var d=Fs(a);if(!d)throw Error(i(90));Qc(a),ca(a,d)}}}break;case"textarea":td(e,s);break;case"select":n=s.value,n!=null&&fr(e,!!s.multiple,n,!1)}},cd=Wl,dd=Jn;var nx={usingClientEntryPoint:!1,Events:[Ei,Er,Fs,ld,ud,Wl]},zi={findFiberByHostInstance:qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rx={bundleType:zi.bundleType,version:zi.version,rendererPackageName:zi.rendererPackageName,rendererConfig:zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=md(e),e===null?null:e.stateNode},findFiberByHostInstance:zi.findFiberByHostInstance||ex,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{vs=Eo.inject(rx),Ht=Eo}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nx,mt.createPortal=function(e,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(n))throw Error(i(200));return Zv(e,n,null,s)},mt.createRoot=function(e,n){if(!tu(e))throw Error(i(299));var s=!1,a="",d=$p;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Jl(e,1,!1,null,null,s,!1,a,d),e[en]=n.current,xi(e.nodeType===8?e.parentNode:e),new eu(n)},mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=md(n),e=e===null?null:e.stateNode,e},mt.flushSync=function(e){return Jn(e)},mt.hydrate=function(e,n,s){if(!wo(n))throw Error(i(200));return So(null,e,n,!0,s)},mt.hydrateRoot=function(e,n,s){if(!tu(e))throw Error(i(405));var a=s!=null&&s.hydratedSources||null,d=!1,f="",x=$p;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(x=s.onRecoverableError)),n=Bp(n,null,e,1,s??null,d,!1,f,x),e[en]=n.current,xi(e),a)for(e=0;e<a.length;e++)s=a[e],d=s._getVersion,d=d(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,d]:n.mutableSourceEagerHydrationData.push(s,d);return new xo(n)},mt.render=function(e,n,s){if(!wo(n))throw Error(i(200));return So(null,e,n,!1,s)},mt.unmountComponentAtNode=function(e){if(!wo(e))throw Error(i(40));return e._reactRootContainer?(Jn(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1},mt.unstable_batchedUpdates=Wl,mt.unstable_renderSubtreeIntoContainer=function(e,n,s,a){if(!wo(s))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return So(e,n,s,!1,a)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var Jp;function Vm(){if(Jp)return iu.exports;Jp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),iu.exports=fx(),iu.exports}var Zp;function px(){if(Zp)return bo;Zp=1;var t=Vm();return bo.createRoot=t.createRoot,bo.hydrateRoot=t.hydrateRoot,bo}var hx=px();const mx=Fm(hx);Vm();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ki(){return Ki=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},Ki.apply(this,arguments)}var Mn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mn||(Mn={}));const eh="popstate";function gx(t){t===void 0&&(t={});function r(o,l){let{pathname:c,search:u,hash:p}=o.location;return Nu("",{pathname:c,search:u,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(o,l){return typeof l=="string"?l:_o(l)}return vx(r,i,null,t)}function _e(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Im(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function yx(){return Math.random().toString(36).substr(2,8)}function th(t,r){return{usr:t.state,key:t.key,idx:r}}function Nu(t,r,i,o){return i===void 0&&(i=null),Ki({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof r=="string"?Hr(r):r,{state:i,key:r&&r.key||o||yx()})}function _o(t){let{pathname:r="/",search:i="",hash:o=""}=t;return i&&i!=="?"&&(r+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(r+=o.charAt(0)==="#"?o:"#"+o),r}function Hr(t){let r={};if(t){let i=t.indexOf("#");i>=0&&(r.hash=t.substr(i),t=t.substr(0,i));let o=t.indexOf("?");o>=0&&(r.search=t.substr(o),t=t.substr(0,o)),t&&(r.pathname=t)}return r}function vx(t,r,i,o){o===void 0&&(o={});let{window:l=document.defaultView,v5Compat:c=!1}=o,u=l.history,p=Mn.Pop,h=null,g=y();g==null&&(g=0,u.replaceState(Ki({},u.state,{idx:g}),""));function y(){return(u.state||{idx:null}).idx}function v(){p=Mn.Pop;let E=y(),L=E==null?null:E-g;g=E,h&&h({action:p,location:j.location,delta:L})}function w(E,L){p=Mn.Push;let F=Nu(j.location,E,L);g=y()+1;let M=th(F,g),$=j.createHref(F);try{u.pushState(M,"",$)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign($)}c&&h&&h({action:p,location:j.location,delta:1})}function C(E,L){p=Mn.Replace;let F=Nu(j.location,E,L);g=y();let M=th(F,g),$=j.createHref(F);u.replaceState(M,"",$),c&&h&&h({action:p,location:j.location,delta:0})}function T(E){let L=l.location.origin!=="null"?l.location.origin:l.location.href,F=typeof E=="string"?E:_o(E);return F=F.replace(/ $/,"%20"),_e(L,"No window.location.(origin|href) available to create URL for href: "+F),new URL(F,L)}let j={get action(){return p},get location(){return t(l,u)},listen(E){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(eh,v),h=E,()=>{l.removeEventListener(eh,v),h=null}},createHref(E){return r(l,E)},createURL:T,encodeLocation(E){let L=T(E);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:w,replace:C,go(E){return u.go(E)}};return j}var nh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nh||(nh={}));function xx(t,r,i){return i===void 0&&(i="/"),wx(t,r,i)}function wx(t,r,i,o){let l=typeof r=="string"?Hr(r):r,c=lc(l.pathname||"/",i);if(c==null)return null;let u=Bm(t);Sx(u);let p=null;for(let h=0;p==null&&h<u.length;++h){let g=Dx(c);p=Rx(u[h],g)}return p}function Bm(t,r,i,o){r===void 0&&(r=[]),i===void 0&&(i=[]),o===void 0&&(o="");let l=(c,u,p)=>{let h={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:u,route:c};h.relativePath.startsWith("/")&&(_e(h.relativePath.startsWith(o),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(o.length));let g=zn([o,h.relativePath]),y=i.concat(h);c.children&&c.children.length>0&&(_e(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Bm(c.children,r,y,g)),!(c.path==null&&!c.index)&&r.push({path:g,score:jx(g,c.index),routesMeta:y})};return t.forEach((c,u)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,u);else for(let h of Um(c.path))l(c,u,h)}),r}function Um(t){let r=t.split("/");if(r.length===0)return[];let[i,...o]=r,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(o.length===0)return l?[c,""]:[c];let u=Um(o.join("/")),p=[];return p.push(...u.map(h=>h===""?c:[c,h].join("/"))),l&&p.push(...u),p.map(h=>t.startsWith("/")&&h===""?"/":h)}function Sx(t){t.sort((r,i)=>r.score!==i.score?i.score-r.score:Nx(r.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}const Ex=/^:[\w-]+$/,bx=3,Cx=2,kx=1,Tx=10,Px=-2,rh=t=>t==="*";function jx(t,r){let i=t.split("/"),o=i.length;return i.some(rh)&&(o+=Px),r&&(o+=Cx),i.filter(l=>!rh(l)).reduce((l,c)=>l+(Ex.test(c)?bx:c===""?kx:Tx),o)}function Nx(t,r){return t.length===r.length&&t.slice(0,-1).every((o,l)=>o===r[l])?t[t.length-1]-r[r.length-1]:0}function Rx(t,r,i){let{routesMeta:o}=t,l={},c="/",u=[];for(let p=0;p<o.length;++p){let h=o[p],g=p===o.length-1,y=c==="/"?r:r.slice(c.length)||"/",v=Ax({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},y),w=h.route;if(!v)return null;Object.assign(l,v.params),u.push({params:l,pathname:zn([c,v.pathname]),pathnameBase:Fx(zn([c,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(c=zn([c,v.pathnameBase]))}return u}function Ax(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,o]=Lx(t.path,t.caseSensitive,t.end),l=r.match(i);if(!l)return null;let c=l[0],u=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:o.reduce((g,y,v)=>{let{paramName:w,isOptional:C}=y;if(w==="*"){let j=p[v]||"";u=c.slice(0,c.length-j.length).replace(/(.)\/+$/,"$1")}const T=p[v];return C&&!T?g[w]=void 0:g[w]=(T||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:u,pattern:t}}function Lx(t,r,i){r===void 0&&(r=!1),i===void 0&&(i=!0),Im(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let o=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,p,h)=>(o.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(o.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,r?void 0:"i"),o]}function Dx(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Im(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),t}}function lc(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,o=t.charAt(i);return o&&o!=="/"?null:t.slice(i)||"/"}function Ox(t,r){r===void 0&&(r="/");let{pathname:i,search:o="",hash:l=""}=typeof t=="string"?Hr(t):t;return{pathname:i?i.startsWith("/")?i:Mx(i,r):r,search:_x(o),hash:Vx(l)}}function Mx(t,r){let i=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function au(t,r,i,o){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zx(t){return t.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function uc(t,r){let i=zx(t);return r?i.map((o,l)=>l===i.length-1?o.pathname:o.pathnameBase):i.map(o=>o.pathnameBase)}function cc(t,r,i,o){o===void 0&&(o=!1);let l;typeof t=="string"?l=Hr(t):(l=Ki({},t),_e(!l.pathname||!l.pathname.includes("?"),au("?","pathname","search",l)),_e(!l.pathname||!l.pathname.includes("#"),au("#","pathname","hash",l)),_e(!l.search||!l.search.includes("#"),au("#","search","hash",l)));let c=t===""||l.pathname==="",u=c?"/":l.pathname,p;if(u==null)p=i;else{let v=r.length-1;if(!o&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;l.pathname=w.join("/")}p=v>=0?r[v]:"/"}let h=Ox(l,p),g=u&&u!=="/"&&u.endsWith("/"),y=(c||u===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(g||y)&&(h.pathname+="/"),h}const zn=t=>t.join("/").replace(/\/\/+/g,"/"),Fx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_x=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Vx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ix(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $m=["post","put","patch","delete"];new Set($m);const Bx=["get",...$m];new Set(Bx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gi(){return Gi=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},Gi.apply(this,arguments)}const dc=b.createContext(null),Ux=b.createContext(null),Vn=b.createContext(null),Go=b.createContext(null),In=b.createContext({outlet:null,matches:[],isDataRoute:!1}),qm=b.createContext(null);function $x(t,r){let{relative:i}=r===void 0?{}:r;Wr()||_e(!1);let{basename:o,navigator:l}=b.useContext(Vn),{hash:c,pathname:u,search:p}=Wm(t,{relative:i}),h=u;return o!=="/"&&(h=u==="/"?o:zn([o,u])),l.createHref({pathname:h,search:p,hash:c})}function Wr(){return b.useContext(Go)!=null}function dr(){return Wr()||_e(!1),b.useContext(Go).location}function Hm(t){b.useContext(Vn).static||b.useLayoutEffect(t)}function ns(){let{isDataRoute:t}=b.useContext(In);return t?n1():qx()}function qx(){Wr()||_e(!1);let t=b.useContext(dc),{basename:r,future:i,navigator:o}=b.useContext(Vn),{matches:l}=b.useContext(In),{pathname:c}=dr(),u=JSON.stringify(uc(l,i.v7_relativeSplatPath)),p=b.useRef(!1);return Hm(()=>{p.current=!0}),b.useCallback(function(g,y){if(y===void 0&&(y={}),!p.current)return;if(typeof g=="number"){o.go(g);return}let v=cc(g,JSON.parse(u),c,y.relative==="path");t==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:zn([r,v.pathname])),(y.replace?o.replace:o.push)(v,y.state,y)},[r,o,u,c,t])}function Wm(t,r){let{relative:i}=r===void 0?{}:r,{future:o}=b.useContext(Vn),{matches:l}=b.useContext(In),{pathname:c}=dr(),u=JSON.stringify(uc(l,o.v7_relativeSplatPath));return b.useMemo(()=>cc(t,JSON.parse(u),c,i==="path"),[t,u,c,i])}function Hx(t,r){return Wx(t,r)}function Wx(t,r,i,o){Wr()||_e(!1);let{navigator:l}=b.useContext(Vn),{matches:c}=b.useContext(In),u=c[c.length-1],p=u?u.params:{};u&&u.pathname;let h=u?u.pathnameBase:"/";u&&u.route;let g=dr(),y;if(r){var v;let E=typeof r=="string"?Hr(r):r;h==="/"||(v=E.pathname)!=null&&v.startsWith(h)||_e(!1),y=E}else y=g;let w=y.pathname||"/",C=w;if(h!=="/"){let E=h.replace(/^\//,"").split("/");C="/"+w.replace(/^\//,"").split("/").slice(E.length).join("/")}let T=xx(t,{pathname:C}),j=Xx(T&&T.map(E=>Object.assign({},E,{params:Object.assign({},p,E.params),pathname:zn([h,l.encodeLocation?l.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?h:zn([h,l.encodeLocation?l.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),c,i,o);return r&&j?b.createElement(Go.Provider,{value:{location:Gi({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Mn.Pop}},j):j}function Kx(){let t=t1(),r=Ix(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},r),i?b.createElement("pre",{style:l},i):null,null)}const Gx=b.createElement(Kx,null);class Yx extends b.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,i){return i.location!==r.location||i.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:i.error,location:i.location,revalidation:r.revalidation||i.revalidation}}componentDidCatch(r,i){console.error("React Router caught the following error during render",r,i)}render(){return this.state.error!==void 0?b.createElement(In.Provider,{value:this.props.routeContext},b.createElement(qm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qx(t){let{routeContext:r,match:i,children:o}=t,l=b.useContext(dc);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),b.createElement(In.Provider,{value:r},o)}function Xx(t,r,i,o){var l;if(r===void 0&&(r=[]),i===void 0&&(i=null),o===void 0&&(o=null),t==null){var c;if(!i)return null;if(i.errors)t=i.matches;else if((c=o)!=null&&c.v7_partialHydration&&r.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let u=t,p=(l=i)==null?void 0:l.errors;if(p!=null){let y=u.findIndex(v=>v.route.id&&p?.[v.route.id]!==void 0);y>=0||_e(!1),u=u.slice(0,Math.min(u.length,y+1))}let h=!1,g=-1;if(i&&o&&o.v7_partialHydration)for(let y=0;y<u.length;y++){let v=u[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(g=y),v.route.id){let{loaderData:w,errors:C}=i,T=v.route.loader&&w[v.route.id]===void 0&&(!C||C[v.route.id]===void 0);if(v.route.lazy||T){h=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}return u.reduceRight((y,v,w)=>{let C,T=!1,j=null,E=null;i&&(C=p&&v.route.id?p[v.route.id]:void 0,j=v.route.errorElement||Gx,h&&(g<0&&w===0?(r1("route-fallback"),T=!0,E=null):g===w&&(T=!0,E=v.route.hydrateFallbackElement||null)));let L=r.concat(u.slice(0,w+1)),F=()=>{let M;return C?M=j:T?M=E:v.route.Component?M=b.createElement(v.route.Component,null):v.route.element?M=v.route.element:M=y,b.createElement(Qx,{match:v,routeContext:{outlet:y,matches:L,isDataRoute:i!=null},children:M})};return i&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?b.createElement(Yx,{location:i.location,revalidation:i.revalidation,component:j,error:C,children:F(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):F()},null)}var Km=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Km||{}),Gm=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Gm||{});function Jx(t){let r=b.useContext(dc);return r||_e(!1),r}function Zx(t){let r=b.useContext(Ux);return r||_e(!1),r}function e1(t){let r=b.useContext(In);return r||_e(!1),r}function Ym(t){let r=e1(),i=r.matches[r.matches.length-1];return i.route.id||_e(!1),i.route.id}function t1(){var t;let r=b.useContext(qm),i=Zx(),o=Ym();return r!==void 0?r:(t=i.errors)==null?void 0:t[o]}function n1(){let{router:t}=Jx(Km.UseNavigateStable),r=Ym(Gm.UseNavigateStable),i=b.useRef(!1);return Hm(()=>{i.current=!0}),b.useCallback(function(l,c){c===void 0&&(c={}),i.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,Gi({fromRouteId:r},c)))},[t,r])}const ih={};function r1(t,r,i){ih[t]||(ih[t]=!0)}function i1(t,r){t?.v7_startTransition,t?.v7_relativeSplatPath}function s1(t){let{to:r,replace:i,state:o,relative:l}=t;Wr()||_e(!1);let{future:c,static:u}=b.useContext(Vn),{matches:p}=b.useContext(In),{pathname:h}=dr(),g=ns(),y=cc(r,uc(p,c.v7_relativeSplatPath),h,l==="path"),v=JSON.stringify(y);return b.useEffect(()=>g(JSON.parse(v),{replace:i,state:o,relative:l}),[g,v,l,i,o]),null}function cn(t){_e(!1)}function o1(t){let{basename:r="/",children:i=null,location:o,navigationType:l=Mn.Pop,navigator:c,static:u=!1,future:p}=t;Wr()&&_e(!1);let h=r.replace(/^\/*/,"/"),g=b.useMemo(()=>({basename:h,navigator:c,static:u,future:Gi({v7_relativeSplatPath:!1},p)}),[h,p,c,u]);typeof o=="string"&&(o=Hr(o));let{pathname:y="/",search:v="",hash:w="",state:C=null,key:T="default"}=o,j=b.useMemo(()=>{let E=lc(y,h);return E==null?null:{location:{pathname:E,search:v,hash:w,state:C,key:T},navigationType:l}},[h,y,v,w,C,T,l]);return j==null?null:b.createElement(Vn.Provider,{value:g},b.createElement(Go.Provider,{children:i,value:j}))}function a1(t){let{children:r,location:i}=t;return Hx(Ru(r),i)}new Promise(()=>{});function Ru(t,r){r===void 0&&(r=[]);let i=[];return b.Children.forEach(t,(o,l)=>{if(!b.isValidElement(o))return;let c=[...r,l];if(o.type===b.Fragment){i.push.apply(i,Ru(o.props.children,c));return}o.type!==cn&&_e(!1),!o.props.index||!o.props.children||_e(!1);let u={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(u.children=Ru(o.props.children,c)),i.push(u)}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Au(){return Au=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},Au.apply(this,arguments)}function l1(t,r){if(t==null)return{};var i={},o=Object.keys(t),l,c;for(c=0;c<o.length;c++)l=o[c],!(r.indexOf(l)>=0)&&(i[l]=t[l]);return i}function u1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function c1(t,r){return t.button===0&&(!r||r==="_self")&&!u1(t)}const d1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],f1="6";try{window.__reactRouterVersion=f1}catch{}const p1="startTransition",sh=ux[p1];function h1(t){let{basename:r,children:i,future:o,window:l}=t,c=b.useRef();c.current==null&&(c.current=gx({window:l,v5Compat:!0}));let u=c.current,[p,h]=b.useState({action:u.action,location:u.location}),{v7_startTransition:g}=o||{},y=b.useCallback(v=>{g&&sh?sh(()=>h(v)):h(v)},[h,g]);return b.useLayoutEffect(()=>u.listen(y),[u,y]),b.useEffect(()=>i1(o),[o]),b.createElement(o1,{basename:r,children:i,location:p.location,navigationType:p.action,navigator:u,future:o})}const m1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dt=b.forwardRef(function(r,i){let{onClick:o,relative:l,reloadDocument:c,replace:u,state:p,target:h,to:g,preventScrollReset:y,viewTransition:v}=r,w=l1(r,d1),{basename:C}=b.useContext(Vn),T,j=!1;if(typeof g=="string"&&g1.test(g)&&(T=g,m1))try{let M=new URL(window.location.href),$=g.startsWith("//")?new URL(M.protocol+g):new URL(g),H=lc($.pathname,C);$.origin===M.origin&&H!=null?g=H+$.search+$.hash:j=!0}catch{}let E=$x(g,{relative:l}),L=y1(g,{replace:u,state:p,target:h,preventScrollReset:y,relative:l,viewTransition:v});function F(M){o&&o(M),M.defaultPrevented||L(M)}return b.createElement("a",Au({},w,{href:T||E,onClick:j||c?o:F,ref:i,target:h}))});var oh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(oh||(oh={}));var ah;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ah||(ah={}));function y1(t,r){let{target:i,replace:o,state:l,preventScrollReset:c,relative:u,viewTransition:p}=r===void 0?{}:r,h=ns(),g=dr(),y=Wm(t,{relative:u});return b.useCallback(v=>{if(c1(v,i)){v.preventDefault();let w=o!==void 0?o:_o(g)===_o(y);h(t,{replace:w,state:l,preventScrollReset:c,relative:u,viewTransition:p})}},[g,h,y,o,l,i,t,c,u,p])}let v1={data:""},x1=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||v1,w1=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,S1=/\/\*[^]*?\*\/|  +/g,lh=/\n+/g,On=(t,r)=>{let i="",o="",l="";for(let c in t){let u=t[c];c[0]=="@"?c[1]=="i"?i=c+" "+u+";":o+=c[1]=="f"?On(u,c):c+"{"+On(u,c[1]=="k"?"":r)+"}":typeof u=="object"?o+=On(u,r?r.replace(/([^,])+/g,p=>c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,h=>/&/.test(h)?h.replace(/&/g,p):p?p+" "+h:h)):c):u!=null&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=On.p?On.p(c,u):c+":"+u+";")}return i+(r&&l?r+"{"+l+"}":l)+o},un={},Qm=t=>{if(typeof t=="object"){let r="";for(let i in t)r+=i+Qm(t[i]);return r}return t},E1=(t,r,i,o,l)=>{let c=Qm(t),u=un[c]||(un[c]=(h=>{let g=0,y=11;for(;g<h.length;)y=101*y+h.charCodeAt(g++)>>>0;return"go"+y})(c));if(!un[u]){let h=c!==t?t:(g=>{let y,v,w=[{}];for(;y=w1.exec(g.replace(S1,""));)y[4]?w.shift():y[3]?(v=y[3].replace(lh," ").trim(),w.unshift(w[0][v]=w[0][v]||{})):w[0][y[1]]=y[2].replace(lh," ").trim();return w[0]})(t);un[u]=On(l?{["@keyframes "+u]:h}:h,i?"":"."+u)}let p=i&&un.g?un.g:null;return i&&(un.g=un[u]),((h,g,y,v)=>{v?g.data=g.data.replace(v,h):g.data.indexOf(h)===-1&&(g.data=y?h+g.data:g.data+h)})(un[u],r,o,p),u},b1=(t,r,i)=>t.reduce((o,l,c)=>{let u=r[c];if(u&&u.call){let p=u(i),h=p&&p.props&&p.props.className||/^go/.test(p)&&p;u=h?"."+h:p&&typeof p=="object"?p.props?"":On(p,""):p===!1?"":p}return o+l+(u??"")},"");function Yo(t){let r=this||{},i=t.call?t(r.p):t;return E1(i.unshift?i.raw?b1(i,[].slice.call(arguments,1),r.p):i.reduce((o,l)=>Object.assign(o,l&&l.call?l(r.p):l),{}):i,x1(r.target),r.g,r.o,r.k)}let Xm,Lu,Du;Yo.bind({g:1});let dn=Yo.bind({k:1});function C1(t,r,i,o){On.p=r,Xm=t,Lu=i,Du=o}function Bn(t,r){let i=this||{};return function(){let o=arguments;function l(c,u){let p=Object.assign({},c),h=p.className||l.className;i.p=Object.assign({theme:Lu&&Lu()},p),i.o=/ *go\d+/.test(h),p.className=Yo.apply(i,o)+(h?" "+h:"");let g=t;return t[0]&&(g=p.as||t,delete p.as),Du&&g[0]&&Du(p),Xm(g,p)}return l}}var k1=t=>typeof t=="function",Vo=(t,r)=>k1(t)?t(r):t,T1=(()=>{let t=0;return()=>(++t).toString()})(),Jm=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let r=matchMedia("(prefers-reduced-motion: reduce)");t=!r||r.matches}return t}})(),P1=20,fc="default",Zm=(t,r)=>{let{toastLimit:i}=t.settings;switch(r.type){case 0:return{...t,toasts:[r.toast,...t.toasts].slice(0,i)};case 1:return{...t,toasts:t.toasts.map(u=>u.id===r.toast.id?{...u,...r.toast}:u)};case 2:let{toast:o}=r;return Zm(t,{type:t.toasts.find(u=>u.id===o.id)?1:0,toast:o});case 3:let{toastId:l}=r;return{...t,toasts:t.toasts.map(u=>u.id===l||l===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return r.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(u=>u.id!==r.toastId)};case 5:return{...t,pausedAt:r.time};case 6:let c=r.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+c}))}}},Ro=[],eg={toasts:[],pausedAt:void 0,settings:{toastLimit:P1}},Xt={},tg=(t,r=fc)=>{Xt[r]=Zm(Xt[r]||eg,t),Ro.forEach(([i,o])=>{i===r&&o(Xt[r])})},ng=t=>Object.keys(Xt).forEach(r=>tg(t,r)),j1=t=>Object.keys(Xt).find(r=>Xt[r].toasts.some(i=>i.id===t)),Qo=(t=fc)=>r=>{tg(r,t)},N1={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R1=(t={},r=fc)=>{let[i,o]=b.useState(Xt[r]||eg),l=b.useRef(Xt[r]);b.useEffect(()=>(l.current!==Xt[r]&&o(Xt[r]),Ro.push([r,o]),()=>{let u=Ro.findIndex(([p])=>p===r);u>-1&&Ro.splice(u,1)}),[r]);let c=i.toasts.map(u=>{var p,h,g;return{...t,...t[u.type],...u,removeDelay:u.removeDelay||((p=t[u.type])==null?void 0:p.removeDelay)||t?.removeDelay,duration:u.duration||((h=t[u.type])==null?void 0:h.duration)||t?.duration||N1[u.type],style:{...t.style,...(g=t[u.type])==null?void 0:g.style,...u.style}}});return{...i,toasts:c}},A1=(t,r="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...i,id:i?.id||T1()}),rs=t=>(r,i)=>{let o=A1(r,t,i);return Qo(o.toasterId||j1(o.id))({type:2,toast:o}),o.id},qe=(t,r)=>rs("blank")(t,r);qe.error=rs("error");qe.success=rs("success");qe.loading=rs("loading");qe.custom=rs("custom");qe.dismiss=(t,r)=>{let i={type:3,toastId:t};r?Qo(r)(i):ng(i)};qe.dismissAll=t=>qe.dismiss(void 0,t);qe.remove=(t,r)=>{let i={type:4,toastId:t};r?Qo(r)(i):ng(i)};qe.removeAll=t=>qe.remove(void 0,t);qe.promise=(t,r,i)=>{let o=qe.loading(r.loading,{...i,...i?.loading});return typeof t=="function"&&(t=t()),t.then(l=>{let c=r.success?Vo(r.success,l):void 0;return c?qe.success(c,{id:o,...i,...i?.success}):qe.dismiss(o),l}).catch(l=>{let c=r.error?Vo(r.error,l):void 0;c?qe.error(c,{id:o,...i,...i?.error}):qe.dismiss(o)}),t};var L1=1e3,D1=(t,r="default")=>{let{toasts:i,pausedAt:o}=R1(t,r),l=b.useRef(new Map).current,c=b.useCallback((v,w=L1)=>{if(l.has(v))return;let C=setTimeout(()=>{l.delete(v),u({type:4,toastId:v})},w);l.set(v,C)},[]);b.useEffect(()=>{if(o)return;let v=Date.now(),w=i.map(C=>{if(C.duration===1/0)return;let T=(C.duration||0)+C.pauseDuration-(v-C.createdAt);if(T<0){C.visible&&qe.dismiss(C.id);return}return setTimeout(()=>qe.dismiss(C.id,r),T)});return()=>{w.forEach(C=>C&&clearTimeout(C))}},[i,o,r]);let u=b.useCallback(Qo(r),[r]),p=b.useCallback(()=>{u({type:5,time:Date.now()})},[u]),h=b.useCallback((v,w)=>{u({type:1,toast:{id:v,height:w}})},[u]),g=b.useCallback(()=>{o&&u({type:6,time:Date.now()})},[o,u]),y=b.useCallback((v,w)=>{let{reverseOrder:C=!1,gutter:T=8,defaultPosition:j}=w||{},E=i.filter(M=>(M.position||j)===(v.position||j)&&M.height),L=E.findIndex(M=>M.id===v.id),F=E.filter((M,$)=>$<L&&M.visible).length;return E.filter(M=>M.visible).slice(...C?[F+1]:[0,F]).reduce((M,$)=>M+($.height||0)+T,0)},[i]);return b.useEffect(()=>{i.forEach(v=>{if(v.dismissed)c(v.id,v.removeDelay);else{let w=l.get(v.id);w&&(clearTimeout(w),l.delete(v.id))}})},[i,c]),{toasts:i,handlers:{updateHeight:h,startPause:p,endPause:g,calculateOffset:y}}},O1=dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M1=dn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z1=dn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F1=Bn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M1} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${z1} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,_1=dn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V1=Bn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${_1} 1s linear infinite;
`,I1=dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B1=dn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,U1=Bn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B1} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,$1=Bn("div")`
  position: absolute;
`,q1=Bn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,H1=dn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W1=Bn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H1} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K1=({toast:t})=>{let{icon:r,type:i,iconTheme:o}=t;return r!==void 0?typeof r=="string"?b.createElement(W1,null,r):r:i==="blank"?null:b.createElement(q1,null,b.createElement(V1,{...o}),i!=="loading"&&b.createElement($1,null,i==="error"?b.createElement(F1,{...o}):b.createElement(U1,{...o})))},G1=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Y1=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Q1="0%{opacity:0;} 100%{opacity:1;}",X1="0%{opacity:1;} 100%{opacity:0;}",J1=Bn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z1=Bn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ew=(t,r)=>{let i=t.includes("top")?1:-1,[o,l]=Jm()?[Q1,X1]:[G1(i),Y1(i)];return{animation:r?`${dn(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${dn(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},tw=b.memo(({toast:t,position:r,style:i,children:o})=>{let l=t.height?ew(t.position||r||"top-center",t.visible):{opacity:0},c=b.createElement(K1,{toast:t}),u=b.createElement(Z1,{...t.ariaProps},Vo(t.message,t));return b.createElement(J1,{className:t.className,style:{...l,...i,...t.style}},typeof o=="function"?o({icon:c,message:u}):b.createElement(b.Fragment,null,c,u))});C1(b.createElement);var nw=({id:t,className:r,style:i,onHeightUpdate:o,children:l})=>{let c=b.useCallback(u=>{if(u){let p=()=>{let h=u.getBoundingClientRect().height;o(t,h)};p(),new MutationObserver(p).observe(u,{subtree:!0,childList:!0,characterData:!0})}},[t,o]);return b.createElement("div",{ref:c,className:r,style:i},l)},rw=(t,r)=>{let i=t.includes("top"),o=i?{top:0}:{bottom:0},l=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Jm()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(i?1:-1)}px)`,...o,...l}},iw=Yo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Co=16,sw=({reverseOrder:t,position:r="top-center",toastOptions:i,gutter:o,children:l,toasterId:c,containerStyle:u,containerClassName:p})=>{let{toasts:h,handlers:g}=D1(i,c);return b.createElement("div",{"data-rht-toaster":c||"",style:{position:"fixed",zIndex:9999,top:Co,left:Co,right:Co,bottom:Co,pointerEvents:"none",...u},className:p,onMouseEnter:g.startPause,onMouseLeave:g.endPause},h.map(y=>{let v=y.position||r,w=g.calculateOffset(y,{reverseOrder:t,gutter:o,defaultPosition:r}),C=rw(v,w);return b.createElement(nw,{id:y.id,key:y.id,onHeightUpdate:g.updateHeight,className:y.visible?iw:"",style:C},y.type==="custom"?Vo(y.message,y):l?l(y):b.createElement(tw,{toast:y,position:v}))}))},W=qe;function rg(t,r){return function(){return t.apply(r,arguments)}}const{toString:ow}=Object.prototype,{getPrototypeOf:pc}=Object,{iterator:Xo,toStringTag:ig}=Symbol,Jo=(t=>r=>{const i=ow.call(r);return t[i]||(t[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),qt=t=>(t=t.toLowerCase(),r=>Jo(r)===t),Zo=t=>r=>typeof r===t,{isArray:Kr}=Array,Yi=Zo("undefined");function is(t){return t!==null&&!Yi(t)&&t.constructor!==null&&!Yi(t.constructor)&&yt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const sg=qt("ArrayBuffer");function aw(t){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(t):r=t&&t.buffer&&sg(t.buffer),r}const lw=Zo("string"),yt=Zo("function"),og=Zo("number"),ss=t=>t!==null&&typeof t=="object",uw=t=>t===!0||t===!1,Ao=t=>{if(Jo(t)!=="object")return!1;const r=pc(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(ig in t)&&!(Xo in t)},cw=t=>{if(!ss(t)||is(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},dw=qt("Date"),fw=qt("File"),pw=qt("Blob"),hw=qt("FileList"),mw=t=>ss(t)&&yt(t.pipe),gw=t=>{let r;return t&&(typeof FormData=="function"&&t instanceof FormData||yt(t.append)&&((r=Jo(t))==="formdata"||r==="object"&&yt(t.toString)&&t.toString()==="[object FormData]"))},yw=qt("URLSearchParams"),[vw,xw,ww,Sw]=["ReadableStream","Request","Response","Headers"].map(qt),Ew=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function os(t,r,{allOwnKeys:i=!1}={}){if(t===null||typeof t>"u")return;let o,l;if(typeof t!="object"&&(t=[t]),Kr(t))for(o=0,l=t.length;o<l;o++)r.call(null,t[o],o,t);else{if(is(t))return;const c=i?Object.getOwnPropertyNames(t):Object.keys(t),u=c.length;let p;for(o=0;o<u;o++)p=c[o],r.call(null,t[p],p,t)}}function ag(t,r){if(is(t))return null;r=r.toLowerCase();const i=Object.keys(t);let o=i.length,l;for(;o-- >0;)if(l=i[o],r===l.toLowerCase())return l;return null}const ir=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lg=t=>!Yi(t)&&t!==ir;function Ou(){const{caseless:t}=lg(this)&&this||{},r={},i=(o,l)=>{const c=t&&ag(r,l)||l;Ao(r[c])&&Ao(o)?r[c]=Ou(r[c],o):Ao(o)?r[c]=Ou({},o):Kr(o)?r[c]=o.slice():r[c]=o};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&os(arguments[o],i);return r}const bw=(t,r,i,{allOwnKeys:o}={})=>(os(r,(l,c)=>{i&&yt(l)?t[c]=rg(l,i):t[c]=l},{allOwnKeys:o}),t),Cw=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),kw=(t,r,i,o)=>{t.prototype=Object.create(r.prototype,o),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:r.prototype}),i&&Object.assign(t.prototype,i)},Tw=(t,r,i,o)=>{let l,c,u;const p={};if(r=r||{},t==null)return r;do{for(l=Object.getOwnPropertyNames(t),c=l.length;c-- >0;)u=l[c],(!o||o(u,t,r))&&!p[u]&&(r[u]=t[u],p[u]=!0);t=i!==!1&&pc(t)}while(t&&(!i||i(t,r))&&t!==Object.prototype);return r},Pw=(t,r,i)=>{t=String(t),(i===void 0||i>t.length)&&(i=t.length),i-=r.length;const o=t.indexOf(r,i);return o!==-1&&o===i},jw=t=>{if(!t)return null;if(Kr(t))return t;let r=t.length;if(!og(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=t[r];return i},Nw=(t=>r=>t&&r instanceof t)(typeof Uint8Array<"u"&&pc(Uint8Array)),Rw=(t,r)=>{const o=(t&&t[Xo]).call(t);let l;for(;(l=o.next())&&!l.done;){const c=l.value;r.call(t,c[0],c[1])}},Aw=(t,r)=>{let i;const o=[];for(;(i=t.exec(r))!==null;)o.push(i);return o},Lw=qt("HTMLFormElement"),Dw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,o,l){return o.toUpperCase()+l}),uh=(({hasOwnProperty:t})=>(r,i)=>t.call(r,i))(Object.prototype),Ow=qt("RegExp"),ug=(t,r)=>{const i=Object.getOwnPropertyDescriptors(t),o={};os(i,(l,c)=>{let u;(u=r(l,c,t))!==!1&&(o[c]=u||l)}),Object.defineProperties(t,o)},Mw=t=>{ug(t,(r,i)=>{if(yt(t)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const o=t[i];if(yt(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},zw=(t,r)=>{const i={},o=l=>{l.forEach(c=>{i[c]=!0})};return Kr(t)?o(t):o(String(t).split(r)),i},Fw=()=>{},_w=(t,r)=>t!=null&&Number.isFinite(t=+t)?t:r;function Vw(t){return!!(t&&yt(t.append)&&t[ig]==="FormData"&&t[Xo])}const Iw=t=>{const r=new Array(10),i=(o,l)=>{if(ss(o)){if(r.indexOf(o)>=0)return;if(is(o))return o;if(!("toJSON"in o)){r[l]=o;const c=Kr(o)?[]:{};return os(o,(u,p)=>{const h=i(u,l+1);!Yi(h)&&(c[p]=h)}),r[l]=void 0,c}}return o};return i(t,0)},Bw=qt("AsyncFunction"),Uw=t=>t&&(ss(t)||yt(t))&&yt(t.then)&&yt(t.catch),cg=((t,r)=>t?setImmediate:r?((i,o)=>(ir.addEventListener("message",({source:l,data:c})=>{l===ir&&c===i&&o.length&&o.shift()()},!1),l=>{o.push(l),ir.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",yt(ir.postMessage)),$w=typeof queueMicrotask<"u"?queueMicrotask.bind(ir):typeof process<"u"&&process.nextTick||cg,qw=t=>t!=null&&yt(t[Xo]),O={isArray:Kr,isArrayBuffer:sg,isBuffer:is,isFormData:gw,isArrayBufferView:aw,isString:lw,isNumber:og,isBoolean:uw,isObject:ss,isPlainObject:Ao,isEmptyObject:cw,isReadableStream:vw,isRequest:xw,isResponse:ww,isHeaders:Sw,isUndefined:Yi,isDate:dw,isFile:fw,isBlob:pw,isRegExp:Ow,isFunction:yt,isStream:mw,isURLSearchParams:yw,isTypedArray:Nw,isFileList:hw,forEach:os,merge:Ou,extend:bw,trim:Ew,stripBOM:Cw,inherits:kw,toFlatObject:Tw,kindOf:Jo,kindOfTest:qt,endsWith:Pw,toArray:jw,forEachEntry:Rw,matchAll:Aw,isHTMLForm:Lw,hasOwnProperty:uh,hasOwnProp:uh,reduceDescriptors:ug,freezeMethods:Mw,toObjectSet:zw,toCamelCase:Dw,noop:Fw,toFiniteNumber:_w,findKey:ag,global:ir,isContextDefined:lg,isSpecCompliantForm:Vw,toJSONObject:Iw,isAsyncFn:Bw,isThenable:Uw,setImmediate:cg,asap:$w,isIterable:qw};function ue(t,r,i,o,l){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",r&&(this.code=r),i&&(this.config=i),o&&(this.request=o),l&&(this.response=l,this.status=l.status?l.status:null)}O.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.status}}});const dg=ue.prototype,fg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{fg[t]={value:t}});Object.defineProperties(ue,fg);Object.defineProperty(dg,"isAxiosError",{value:!0});ue.from=(t,r,i,o,l,c)=>{const u=Object.create(dg);return O.toFlatObject(t,u,function(h){return h!==Error.prototype},p=>p!=="isAxiosError"),ue.call(u,t.message,r,i,o,l),u.cause=t,u.name=t.name,c&&Object.assign(u,c),u};const Hw=null;function Mu(t){return O.isPlainObject(t)||O.isArray(t)}function pg(t){return O.endsWith(t,"[]")?t.slice(0,-2):t}function ch(t,r,i){return t?t.concat(r).map(function(l,c){return l=pg(l),!i&&c?"["+l+"]":l}).join(i?".":""):r}function Ww(t){return O.isArray(t)&&!t.some(Mu)}const Kw=O.toFlatObject(O,{},null,function(r){return/^is[A-Z]/.test(r)});function ea(t,r,i){if(!O.isObject(t))throw new TypeError("target must be an object");r=r||new FormData,i=O.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(j,E){return!O.isUndefined(E[j])});const o=i.metaTokens,l=i.visitor||y,c=i.dots,u=i.indexes,h=(i.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(r);if(!O.isFunction(l))throw new TypeError("visitor must be a function");function g(T){if(T===null)return"";if(O.isDate(T))return T.toISOString();if(O.isBoolean(T))return T.toString();if(!h&&O.isBlob(T))throw new ue("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(T)||O.isTypedArray(T)?h&&typeof Blob=="function"?new Blob([T]):Buffer.from(T):T}function y(T,j,E){let L=T;if(T&&!E&&typeof T=="object"){if(O.endsWith(j,"{}"))j=o?j:j.slice(0,-2),T=JSON.stringify(T);else if(O.isArray(T)&&Ww(T)||(O.isFileList(T)||O.endsWith(j,"[]"))&&(L=O.toArray(T)))return j=pg(j),L.forEach(function(M,$){!(O.isUndefined(M)||M===null)&&r.append(u===!0?ch([j],$,c):u===null?j:j+"[]",g(M))}),!1}return Mu(T)?!0:(r.append(ch(E,j,c),g(T)),!1)}const v=[],w=Object.assign(Kw,{defaultVisitor:y,convertValue:g,isVisitable:Mu});function C(T,j){if(!O.isUndefined(T)){if(v.indexOf(T)!==-1)throw Error("Circular reference detected in "+j.join("."));v.push(T),O.forEach(T,function(L,F){(!(O.isUndefined(L)||L===null)&&l.call(r,L,O.isString(F)?F.trim():F,j,w))===!0&&C(L,j?j.concat(F):[F])}),v.pop()}}if(!O.isObject(t))throw new TypeError("data must be an object");return C(t),r}function dh(t){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function hc(t,r){this._pairs=[],t&&ea(t,this,r)}const hg=hc.prototype;hg.append=function(r,i){this._pairs.push([r,i])};hg.toString=function(r){const i=r?function(o){return r.call(this,o,dh)}:dh;return this._pairs.map(function(l){return i(l[0])+"="+i(l[1])},"").join("&")};function Gw(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function mg(t,r,i){if(!r)return t;const o=i&&i.encode||Gw;O.isFunction(i)&&(i={serialize:i});const l=i&&i.serialize;let c;if(l?c=l(r,i):c=O.isURLSearchParams(r)?r.toString():new hc(r,i).toString(o),c){const u=t.indexOf("#");u!==-1&&(t=t.slice(0,u)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}class fh{constructor(){this.handlers=[]}use(r,i,o){return this.handlers.push({fulfilled:r,rejected:i,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){O.forEach(this.handlers,function(o){o!==null&&r(o)})}}const gg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Yw=typeof URLSearchParams<"u"?URLSearchParams:hc,Qw=typeof FormData<"u"?FormData:null,Xw=typeof Blob<"u"?Blob:null,Jw={isBrowser:!0,classes:{URLSearchParams:Yw,FormData:Qw,Blob:Xw},protocols:["http","https","file","blob","url","data"]},mc=typeof window<"u"&&typeof document<"u",zu=typeof navigator=="object"&&navigator||void 0,Zw=mc&&(!zu||["ReactNative","NativeScript","NS"].indexOf(zu.product)<0),eS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",tS=mc&&window.location.href||"http://localhost",nS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:mc,hasStandardBrowserEnv:Zw,hasStandardBrowserWebWorkerEnv:eS,navigator:zu,origin:tS},Symbol.toStringTag,{value:"Module"})),nt={...nS,...Jw};function rS(t,r){return ea(t,new nt.classes.URLSearchParams,{visitor:function(i,o,l,c){return nt.isNode&&O.isBuffer(i)?(this.append(o,i.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)},...r})}function iS(t){return O.matchAll(/\w+|\[(\w*)]/g,t).map(r=>r[0]==="[]"?"":r[1]||r[0])}function sS(t){const r={},i=Object.keys(t);let o;const l=i.length;let c;for(o=0;o<l;o++)c=i[o],r[c]=t[c];return r}function yg(t){function r(i,o,l,c){let u=i[c++];if(u==="__proto__")return!0;const p=Number.isFinite(+u),h=c>=i.length;return u=!u&&O.isArray(l)?l.length:u,h?(O.hasOwnProp(l,u)?l[u]=[l[u],o]:l[u]=o,!p):((!l[u]||!O.isObject(l[u]))&&(l[u]=[]),r(i,o,l[u],c)&&O.isArray(l[u])&&(l[u]=sS(l[u])),!p)}if(O.isFormData(t)&&O.isFunction(t.entries)){const i={};return O.forEachEntry(t,(o,l)=>{r(iS(o),l,i,0)}),i}return null}function oS(t,r,i){if(O.isString(t))try{return(r||JSON.parse)(t),O.trim(t)}catch(o){if(o.name!=="SyntaxError")throw o}return(i||JSON.stringify)(t)}const as={transitional:gg,adapter:["xhr","http","fetch"],transformRequest:[function(r,i){const o=i.getContentType()||"",l=o.indexOf("application/json")>-1,c=O.isObject(r);if(c&&O.isHTMLForm(r)&&(r=new FormData(r)),O.isFormData(r))return l?JSON.stringify(yg(r)):r;if(O.isArrayBuffer(r)||O.isBuffer(r)||O.isStream(r)||O.isFile(r)||O.isBlob(r)||O.isReadableStream(r))return r;if(O.isArrayBufferView(r))return r.buffer;if(O.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let p;if(c){if(o.indexOf("application/x-www-form-urlencoded")>-1)return rS(r,this.formSerializer).toString();if((p=O.isFileList(r))||o.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return ea(p?{"files[]":r}:r,h&&new h,this.formSerializer)}}return c||l?(i.setContentType("application/json",!1),oS(r)):r}],transformResponse:[function(r){const i=this.transitional||as.transitional,o=i&&i.forcedJSONParsing,l=this.responseType==="json";if(O.isResponse(r)||O.isReadableStream(r))return r;if(r&&O.isString(r)&&(o&&!this.responseType||l)){const u=!(i&&i.silentJSONParsing)&&l;try{return JSON.parse(r)}catch(p){if(u)throw p.name==="SyntaxError"?ue.from(p,ue.ERR_BAD_RESPONSE,this,null,this.response):p}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch"],t=>{as.headers[t]={}});const aS=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lS=t=>{const r={};let i,o,l;return t&&t.split(`
`).forEach(function(u){l=u.indexOf(":"),i=u.substring(0,l).trim().toLowerCase(),o=u.substring(l+1).trim(),!(!i||r[i]&&aS[i])&&(i==="set-cookie"?r[i]?r[i].push(o):r[i]=[o]:r[i]=r[i]?r[i]+", "+o:o)}),r},ph=Symbol("internals");function _i(t){return t&&String(t).trim().toLowerCase()}function Lo(t){return t===!1||t==null?t:O.isArray(t)?t.map(Lo):String(t)}function uS(t){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=i.exec(t);)r[o[1]]=o[2];return r}const cS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function lu(t,r,i,o,l){if(O.isFunction(o))return o.call(this,r,i);if(l&&(r=i),!!O.isString(r)){if(O.isString(o))return r.indexOf(o)!==-1;if(O.isRegExp(o))return o.test(r)}}function dS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,o)=>i.toUpperCase()+o)}function fS(t,r){const i=O.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(t,o+i,{value:function(l,c,u){return this[o].call(this,r,l,c,u)},configurable:!0})})}let vt=class{constructor(r){r&&this.set(r)}set(r,i,o){const l=this;function c(p,h,g){const y=_i(h);if(!y)throw new Error("header name must be a non-empty string");const v=O.findKey(l,y);(!v||l[v]===void 0||g===!0||g===void 0&&l[v]!==!1)&&(l[v||h]=Lo(p))}const u=(p,h)=>O.forEach(p,(g,y)=>c(g,y,h));if(O.isPlainObject(r)||r instanceof this.constructor)u(r,i);else if(O.isString(r)&&(r=r.trim())&&!cS(r))u(lS(r),i);else if(O.isObject(r)&&O.isIterable(r)){let p={},h,g;for(const y of r){if(!O.isArray(y))throw TypeError("Object iterator must return a key-value pair");p[g=y[0]]=(h=p[g])?O.isArray(h)?[...h,y[1]]:[h,y[1]]:y[1]}u(p,i)}else r!=null&&c(i,r,o);return this}get(r,i){if(r=_i(r),r){const o=O.findKey(this,r);if(o){const l=this[o];if(!i)return l;if(i===!0)return uS(l);if(O.isFunction(i))return i.call(this,l,o);if(O.isRegExp(i))return i.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=_i(r),r){const o=O.findKey(this,r);return!!(o&&this[o]!==void 0&&(!i||lu(this,this[o],o,i)))}return!1}delete(r,i){const o=this;let l=!1;function c(u){if(u=_i(u),u){const p=O.findKey(o,u);p&&(!i||lu(o,o[p],p,i))&&(delete o[p],l=!0)}}return O.isArray(r)?r.forEach(c):c(r),l}clear(r){const i=Object.keys(this);let o=i.length,l=!1;for(;o--;){const c=i[o];(!r||lu(this,this[c],c,r,!0))&&(delete this[c],l=!0)}return l}normalize(r){const i=this,o={};return O.forEach(this,(l,c)=>{const u=O.findKey(o,c);if(u){i[u]=Lo(l),delete i[c];return}const p=r?dS(c):String(c).trim();p!==c&&delete i[c],i[p]=Lo(l),o[p]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return O.forEach(this,(o,l)=>{o!=null&&o!==!1&&(i[l]=r&&O.isArray(o)?o.join(", "):o)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...i){const o=new this(r);return i.forEach(l=>o.set(l)),o}static accessor(r){const o=(this[ph]=this[ph]={accessors:{}}).accessors,l=this.prototype;function c(u){const p=_i(u);o[p]||(fS(l,u),o[p]=!0)}return O.isArray(r)?r.forEach(c):c(r),this}};vt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(vt.prototype,({value:t},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>t,set(o){this[i]=o}}});O.freezeMethods(vt);function uu(t,r){const i=this||as,o=r||i,l=vt.from(o.headers);let c=o.data;return O.forEach(t,function(p){c=p.call(i,c,l.normalize(),r?r.status:void 0)}),l.normalize(),c}function vg(t){return!!(t&&t.__CANCEL__)}function Gr(t,r,i){ue.call(this,t??"canceled",ue.ERR_CANCELED,r,i),this.name="CanceledError"}O.inherits(Gr,ue,{__CANCEL__:!0});function xg(t,r,i){const o=i.config.validateStatus;!i.status||!o||o(i.status)?t(i):r(new ue("Request failed with status code "+i.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function pS(t){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}function hS(t,r){t=t||10;const i=new Array(t),o=new Array(t);let l=0,c=0,u;return r=r!==void 0?r:1e3,function(h){const g=Date.now(),y=o[c];u||(u=g),i[l]=h,o[l]=g;let v=c,w=0;for(;v!==l;)w+=i[v++],v=v%t;if(l=(l+1)%t,l===c&&(c=(c+1)%t),g-u<r)return;const C=y&&g-y;return C?Math.round(w*1e3/C):void 0}}function mS(t,r){let i=0,o=1e3/r,l,c;const u=(g,y=Date.now())=>{i=y,l=null,c&&(clearTimeout(c),c=null),t(...g)};return[(...g)=>{const y=Date.now(),v=y-i;v>=o?u(g,y):(l=g,c||(c=setTimeout(()=>{c=null,u(l)},o-v)))},()=>l&&u(l)]}const Io=(t,r,i=3)=>{let o=0;const l=hS(50,250);return mS(c=>{const u=c.loaded,p=c.lengthComputable?c.total:void 0,h=u-o,g=l(h),y=u<=p;o=u;const v={loaded:u,total:p,progress:p?u/p:void 0,bytes:h,rate:g||void 0,estimated:g&&p&&y?(p-u)/g:void 0,event:c,lengthComputable:p!=null,[r?"download":"upload"]:!0};t(v)},i)},hh=(t,r)=>{const i=t!=null;return[o=>r[0]({lengthComputable:i,total:t,loaded:o}),r[1]]},mh=t=>(...r)=>O.asap(()=>t(...r)),gS=nt.hasStandardBrowserEnv?((t,r)=>i=>(i=new URL(i,nt.origin),t.protocol===i.protocol&&t.host===i.host&&(r||t.port===i.port)))(new URL(nt.origin),nt.navigator&&/(msie|trident)/i.test(nt.navigator.userAgent)):()=>!0,yS=nt.hasStandardBrowserEnv?{write(t,r,i,o,l,c){const u=[t+"="+encodeURIComponent(r)];O.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),O.isString(o)&&u.push("path="+o),O.isString(l)&&u.push("domain="+l),c===!0&&u.push("secure"),document.cookie=u.join("; ")},read(t){const r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function vS(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function xS(t,r){return r?t.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):t}function wg(t,r,i){let o=!vS(r);return t&&(o||i==!1)?xS(t,r):r}const gh=t=>t instanceof vt?{...t}:t;function cr(t,r){r=r||{};const i={};function o(g,y,v,w){return O.isPlainObject(g)&&O.isPlainObject(y)?O.merge.call({caseless:w},g,y):O.isPlainObject(y)?O.merge({},y):O.isArray(y)?y.slice():y}function l(g,y,v,w){if(O.isUndefined(y)){if(!O.isUndefined(g))return o(void 0,g,v,w)}else return o(g,y,v,w)}function c(g,y){if(!O.isUndefined(y))return o(void 0,y)}function u(g,y){if(O.isUndefined(y)){if(!O.isUndefined(g))return o(void 0,g)}else return o(void 0,y)}function p(g,y,v){if(v in r)return o(g,y);if(v in t)return o(void 0,g)}const h={url:c,method:c,data:c,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:p,headers:(g,y,v)=>l(gh(g),gh(y),v,!0)};return O.forEach(Object.keys({...t,...r}),function(y){const v=h[y]||l,w=v(t[y],r[y],y);O.isUndefined(w)&&v!==p||(i[y]=w)}),i}const Sg=t=>{const r=cr({},t);let{data:i,withXSRFToken:o,xsrfHeaderName:l,xsrfCookieName:c,headers:u,auth:p}=r;r.headers=u=vt.from(u),r.url=mg(wg(r.baseURL,r.url,r.allowAbsoluteUrls),t.params,t.paramsSerializer),p&&u.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let h;if(O.isFormData(i)){if(nt.hasStandardBrowserEnv||nt.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if((h=u.getContentType())!==!1){const[g,...y]=h?h.split(";").map(v=>v.trim()).filter(Boolean):[];u.setContentType([g||"multipart/form-data",...y].join("; "))}}if(nt.hasStandardBrowserEnv&&(o&&O.isFunction(o)&&(o=o(r)),o||o!==!1&&gS(r.url))){const g=l&&c&&yS.read(c);g&&u.set(l,g)}return r},wS=typeof XMLHttpRequest<"u",SS=wS&&function(t){return new Promise(function(i,o){const l=Sg(t);let c=l.data;const u=vt.from(l.headers).normalize();let{responseType:p,onUploadProgress:h,onDownloadProgress:g}=l,y,v,w,C,T;function j(){C&&C(),T&&T(),l.cancelToken&&l.cancelToken.unsubscribe(y),l.signal&&l.signal.removeEventListener("abort",y)}let E=new XMLHttpRequest;E.open(l.method.toUpperCase(),l.url,!0),E.timeout=l.timeout;function L(){if(!E)return;const M=vt.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),H={data:!p||p==="text"||p==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:M,config:t,request:E};xg(function(te){i(te),j()},function(te){o(te),j()},H),E=null}"onloadend"in E?E.onloadend=L:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(L)},E.onabort=function(){E&&(o(new ue("Request aborted",ue.ECONNABORTED,t,E)),E=null)},E.onerror=function(){o(new ue("Network Error",ue.ERR_NETWORK,t,E)),E=null},E.ontimeout=function(){let $=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const H=l.transitional||gg;l.timeoutErrorMessage&&($=l.timeoutErrorMessage),o(new ue($,H.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,t,E)),E=null},c===void 0&&u.setContentType(null),"setRequestHeader"in E&&O.forEach(u.toJSON(),function($,H){E.setRequestHeader(H,$)}),O.isUndefined(l.withCredentials)||(E.withCredentials=!!l.withCredentials),p&&p!=="json"&&(E.responseType=l.responseType),g&&([w,T]=Io(g,!0),E.addEventListener("progress",w)),h&&E.upload&&([v,C]=Io(h),E.upload.addEventListener("progress",v),E.upload.addEventListener("loadend",C)),(l.cancelToken||l.signal)&&(y=M=>{E&&(o(!M||M.type?new Gr(null,t,E):M),E.abort(),E=null)},l.cancelToken&&l.cancelToken.subscribe(y),l.signal&&(l.signal.aborted?y():l.signal.addEventListener("abort",y)));const F=pS(l.url);if(F&&nt.protocols.indexOf(F)===-1){o(new ue("Unsupported protocol "+F+":",ue.ERR_BAD_REQUEST,t));return}E.send(c||null)})},ES=(t,r)=>{const{length:i}=t=t?t.filter(Boolean):[];if(r||i){let o=new AbortController,l;const c=function(g){if(!l){l=!0,p();const y=g instanceof Error?g:this.reason;o.abort(y instanceof ue?y:new Gr(y instanceof Error?y.message:y))}};let u=r&&setTimeout(()=>{u=null,c(new ue(`timeout ${r} of ms exceeded`,ue.ETIMEDOUT))},r);const p=()=>{t&&(u&&clearTimeout(u),u=null,t.forEach(g=>{g.unsubscribe?g.unsubscribe(c):g.removeEventListener("abort",c)}),t=null)};t.forEach(g=>g.addEventListener("abort",c));const{signal:h}=o;return h.unsubscribe=()=>O.asap(p),h}},bS=function*(t,r){let i=t.byteLength;if(i<r){yield t;return}let o=0,l;for(;o<i;)l=o+r,yield t.slice(o,l),o=l},CS=async function*(t,r){for await(const i of kS(t))yield*bS(i,r)},kS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const r=t.getReader();try{for(;;){const{done:i,value:o}=await r.read();if(i)break;yield o}}finally{await r.cancel()}},yh=(t,r,i,o)=>{const l=CS(t,r);let c=0,u,p=h=>{u||(u=!0,o&&o(h))};return new ReadableStream({async pull(h){try{const{done:g,value:y}=await l.next();if(g){p(),h.close();return}let v=y.byteLength;if(i){let w=c+=v;i(w)}h.enqueue(new Uint8Array(y))}catch(g){throw p(g),g}},cancel(h){return p(h),l.return()}},{highWaterMark:2})},ta=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Eg=ta&&typeof ReadableStream=="function",TS=ta&&(typeof TextEncoder=="function"?(t=>r=>t.encode(r))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),bg=(t,...r)=>{try{return!!t(...r)}catch{return!1}},PS=Eg&&bg(()=>{let t=!1;const r=new Request(nt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!r}),vh=64*1024,Fu=Eg&&bg(()=>O.isReadableStream(new Response("").body)),Bo={stream:Fu&&(t=>t.body)};ta&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Bo[r]&&(Bo[r]=O.isFunction(t[r])?i=>i[r]():(i,o)=>{throw new ue(`Response type '${r}' is not supported`,ue.ERR_NOT_SUPPORT,o)})})})(new Response);const jS=async t=>{if(t==null)return 0;if(O.isBlob(t))return t.size;if(O.isSpecCompliantForm(t))return(await new Request(nt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(O.isArrayBufferView(t)||O.isArrayBuffer(t))return t.byteLength;if(O.isURLSearchParams(t)&&(t=t+""),O.isString(t))return(await TS(t)).byteLength},NS=async(t,r)=>{const i=O.toFiniteNumber(t.getContentLength());return i??jS(r)},RS=ta&&(async t=>{let{url:r,method:i,data:o,signal:l,cancelToken:c,timeout:u,onDownloadProgress:p,onUploadProgress:h,responseType:g,headers:y,withCredentials:v="same-origin",fetchOptions:w}=Sg(t);g=g?(g+"").toLowerCase():"text";let C=ES([l,c&&c.toAbortSignal()],u),T;const j=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let E;try{if(h&&PS&&i!=="get"&&i!=="head"&&(E=await NS(y,o))!==0){let H=new Request(r,{method:"POST",body:o,duplex:"half"}),X;if(O.isFormData(o)&&(X=H.headers.get("content-type"))&&y.setContentType(X),H.body){const[te,z]=hh(E,Io(mh(h)));o=yh(H.body,vh,te,z)}}O.isString(v)||(v=v?"include":"omit");const L="credentials"in Request.prototype;T=new Request(r,{...w,signal:C,method:i.toUpperCase(),headers:y.normalize().toJSON(),body:o,duplex:"half",credentials:L?v:void 0});let F=await fetch(T,w);const M=Fu&&(g==="stream"||g==="response");if(Fu&&(p||M&&j)){const H={};["status","statusText","headers"].forEach(Q=>{H[Q]=F[Q]});const X=O.toFiniteNumber(F.headers.get("content-length")),[te,z]=p&&hh(X,Io(mh(p),!0))||[];F=new Response(yh(F.body,vh,te,()=>{z&&z(),j&&j()}),H)}g=g||"text";let $=await Bo[O.findKey(Bo,g)||"text"](F,t);return!M&&j&&j(),await new Promise((H,X)=>{xg(H,X,{data:$,headers:vt.from(F.headers),status:F.status,statusText:F.statusText,config:t,request:T})})}catch(L){throw j&&j(),L&&L.name==="TypeError"&&/Load failed|fetch/i.test(L.message)?Object.assign(new ue("Network Error",ue.ERR_NETWORK,t,T),{cause:L.cause||L}):ue.from(L,L&&L.code,t,T)}}),_u={http:Hw,xhr:SS,fetch:RS};O.forEach(_u,(t,r)=>{if(t){try{Object.defineProperty(t,"name",{value:r})}catch{}Object.defineProperty(t,"adapterName",{value:r})}});const xh=t=>`- ${t}`,AS=t=>O.isFunction(t)||t===null||t===!1,Cg={getAdapter:t=>{t=O.isArray(t)?t:[t];const{length:r}=t;let i,o;const l={};for(let c=0;c<r;c++){i=t[c];let u;if(o=i,!AS(i)&&(o=_u[(u=String(i)).toLowerCase()],o===void 0))throw new ue(`Unknown adapter '${u}'`);if(o)break;l[u||"#"+c]=o}if(!o){const c=Object.entries(l).map(([p,h])=>`adapter ${p} `+(h===!1?"is not supported by the environment":"is not available in the build"));let u=r?c.length>1?`since :
`+c.map(xh).join(`
`):" "+xh(c[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return o},adapters:_u};function cu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Gr(null,t)}function wh(t){return cu(t),t.headers=vt.from(t.headers),t.data=uu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Cg.getAdapter(t.adapter||as.adapter)(t).then(function(o){return cu(t),o.data=uu.call(t,t.transformResponse,o),o.headers=vt.from(o.headers),o},function(o){return vg(o)||(cu(t),o&&o.response&&(o.response.data=uu.call(t,t.transformResponse,o.response),o.response.headers=vt.from(o.response.headers))),Promise.reject(o)})}const kg="1.11.0",na={};["object","boolean","number","function","string","symbol"].forEach((t,r)=>{na[t]=function(o){return typeof o===t||"a"+(r<1?"n ":" ")+t}});const Sh={};na.transitional=function(r,i,o){function l(c,u){return"[Axios v"+kg+"] Transitional option '"+c+"'"+u+(o?". "+o:"")}return(c,u,p)=>{if(r===!1)throw new ue(l(u," has been removed"+(i?" in "+i:"")),ue.ERR_DEPRECATED);return i&&!Sh[u]&&(Sh[u]=!0,console.warn(l(u," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(c,u,p):!0}};na.spelling=function(r){return(i,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function LS(t,r,i){if(typeof t!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const o=Object.keys(t);let l=o.length;for(;l-- >0;){const c=o[l],u=r[c];if(u){const p=t[c],h=p===void 0||u(p,c,t);if(h!==!0)throw new ue("option "+c+" must be "+h,ue.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new ue("Unknown option "+c,ue.ERR_BAD_OPTION)}}const Do={assertOptions:LS,validators:na},Qt=Do.validators;let ar=class{constructor(r){this.defaults=r||{},this.interceptors={request:new fh,response:new fh}}async request(r,i){try{return await this._request(r,i)}catch(o){if(o instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const c=l.stack?l.stack.replace(/^.+\n/,""):"";try{o.stack?c&&!String(o.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+c):o.stack=c}catch{}}throw o}}_request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=cr(this.defaults,i);const{transitional:o,paramsSerializer:l,headers:c}=i;o!==void 0&&Do.assertOptions(o,{silentJSONParsing:Qt.transitional(Qt.boolean),forcedJSONParsing:Qt.transitional(Qt.boolean),clarifyTimeoutError:Qt.transitional(Qt.boolean)},!1),l!=null&&(O.isFunction(l)?i.paramsSerializer={serialize:l}:Do.assertOptions(l,{encode:Qt.function,serialize:Qt.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),Do.assertOptions(i,{baseUrl:Qt.spelling("baseURL"),withXsrfToken:Qt.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let u=c&&O.merge(c.common,c[i.method]);c&&O.forEach(["delete","get","head","post","put","patch","common"],T=>{delete c[T]}),i.headers=vt.concat(u,c);const p=[];let h=!0;this.interceptors.request.forEach(function(j){typeof j.runWhen=="function"&&j.runWhen(i)===!1||(h=h&&j.synchronous,p.unshift(j.fulfilled,j.rejected))});const g=[];this.interceptors.response.forEach(function(j){g.push(j.fulfilled,j.rejected)});let y,v=0,w;if(!h){const T=[wh.bind(this),void 0];for(T.unshift(...p),T.push(...g),w=T.length,y=Promise.resolve(i);v<w;)y=y.then(T[v++],T[v++]);return y}w=p.length;let C=i;for(v=0;v<w;){const T=p[v++],j=p[v++];try{C=T(C)}catch(E){j.call(this,E);break}}try{y=wh.call(this,C)}catch(T){return Promise.reject(T)}for(v=0,w=g.length;v<w;)y=y.then(g[v++],g[v++]);return y}getUri(r){r=cr(this.defaults,r);const i=wg(r.baseURL,r.url,r.allowAbsoluteUrls);return mg(i,r.params,r.paramsSerializer)}};O.forEach(["delete","get","head","options"],function(r){ar.prototype[r]=function(i,o){return this.request(cr(o||{},{method:r,url:i,data:(o||{}).data}))}});O.forEach(["post","put","patch"],function(r){function i(o){return function(c,u,p){return this.request(cr(p||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:c,data:u}))}}ar.prototype[r]=i(),ar.prototype[r+"Form"]=i(!0)});let DS=class Tg{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(c){i=c});const o=this;this.promise.then(l=>{if(!o._listeners)return;let c=o._listeners.length;for(;c-- >0;)o._listeners[c](l);o._listeners=null}),this.promise.then=l=>{let c;const u=new Promise(p=>{o.subscribe(p),c=p}).then(l);return u.cancel=function(){o.unsubscribe(c)},u},r(function(c,u,p){o.reason||(o.reason=new Gr(c,u,p),i(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const r=new AbortController,i=o=>{r.abort(o)};return this.subscribe(i),r.signal.unsubscribe=()=>this.unsubscribe(i),r.signal}static source(){let r;return{token:new Tg(function(l){r=l}),cancel:r}}};function OS(t){return function(i){return t.apply(null,i)}}function MS(t){return O.isObject(t)&&t.isAxiosError===!0}const Vu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vu).forEach(([t,r])=>{Vu[r]=t});function Pg(t){const r=new ar(t),i=rg(ar.prototype.request,r);return O.extend(i,ar.prototype,r,{allOwnKeys:!0}),O.extend(i,r,null,{allOwnKeys:!0}),i.create=function(l){return Pg(cr(t,l))},i}const Ve=Pg(as);Ve.Axios=ar;Ve.CanceledError=Gr;Ve.CancelToken=DS;Ve.isCancel=vg;Ve.VERSION=kg;Ve.toFormData=ea;Ve.AxiosError=ue;Ve.Cancel=Ve.CanceledError;Ve.all=function(r){return Promise.all(r)};Ve.spread=OS;Ve.isAxiosError=MS;Ve.mergeConfig=cr;Ve.AxiosHeaders=vt;Ve.formToJSON=t=>yg(O.isHTMLForm(t)?new FormData(t):t);Ve.getAdapter=Cg.getAdapter;Ve.HttpStatusCode=Vu;Ve.default=Ve;const{Axios:tk,AxiosError:nk,CanceledError:rk,isCancel:ik,CancelToken:sk,VERSION:ok,all:ak,Cancel:lk,isAxiosError:uk,spread:ck,toFormData:dk,AxiosHeaders:fk,HttpStatusCode:pk,formToJSON:hk,getAdapter:mk,mergeConfig:gk}=Ve,zS="https://cm14-production.up.railway.app",xe=Ve.create({baseURL:zS,timeout:1e4,headers:{"Content-Type":"application/json"}});xe.interceptors.request.use(t=>{const r=localStorage.getItem("token");return r&&(t.headers.Authorization=`Bearer ${r}`),console.log(`🚀 API Request: ${t.method?.toUpperCase()} ${t.url}`),t},t=>(console.error("❌ Request Error:",t),Promise.reject(t)));xe.interceptors.response.use(t=>(console.log(`✅ API Response: ${t.config.url}`,t.data),t),t=>(console.error("❌ Response Error:",t),t.response?.status===401?(localStorage.removeItem("token"),window.location.pathname!=="/login"&&(W.error("⚠️ Sesión expirada. Por favor inicia sesión nuevamente"),window.location.href="/login")):t.response?.status===403?W.error("🚫 No tienes permisos para realizar esta acción"):t.code==="ECONNABORTED"?W.error("⏱️ Timeout: La API tardó mucho en responder"):t.response?.status===404?W.error("🔍 No encontrado: Endpoint no existe"):t.response?.status>=500?W.error("🔥 Error del servidor"):t.response||W.error("🔌 No se puede conectar con la API"),Promise.reject(t)));const at={async login(t){try{W.loading("Iniciando sesión...",{id:"login"});const r=await xe.post("/api/auth/login",t);return W.success("✅ Sesión iniciada correctamente",{id:"login"}),r.data}catch(r){throw W.error("❌ Error al iniciar sesión",{id:"login"}),r}},async register(t){try{W.loading("Creando cuenta...",{id:"register"});const r=await xe.post("/api/auth/register",t);return W.success("✅ Cuenta creada exitosamente",{id:"register"}),r.data}catch(r){throw W.error("❌ Error al crear cuenta",{id:"register"}),r}},async logout(){try{await xe.post("/api/auth/logout"),W.success("👋 Sesión cerrada")}catch(t){console.error("Error en logout:",t)}},async verifyToken(){try{return(await xe.get("/api/auth/me")).data}catch(t){throw t}},async getTorneoInfo(){try{return(await xe.get("/")).data}catch{throw new Error("Error al obtener información del torneo")}},async getEquipos(){try{W.loading("Cargando equipos...",{id:"equipos"});const t=await xe.get("/api/equipos");return W.success(`✅ ${t.data.total} equipos cargados`,{id:"equipos"}),t.data}catch(t){throw W.error("❌ Error al cargar equipos",{id:"equipos"}),t}},async getEquiposPorGrupo(t){try{W.loading(`Cargando equipos del grupo ${t}...`,{id:`grupo-${t}`});const r=await xe.get(`/api/equipos/grupo/${t}`);return W.success(`✅ Grupo ${t}: ${r.data.total} equipos`,{id:`grupo-${t}`}),r.data}catch(r){throw W.error(`❌ Error al cargar grupo ${t}`,{id:`grupo-${t}`}),r}},async getPartidos(){try{W.loading("Cargando partidos...",{id:"partidos"});const t=await xe.get("/api/partidos");return W.success(`✅ ${t.data.total} partidos cargados`,{id:"partidos"}),t.data}catch(t){throw W.error("❌ Error al cargar partidos",{id:"partidos"}),t}},async getPartidosPorFecha(t){try{W.loading(`Cargando fecha ${t}...`,{id:`fecha-${t}`});const r=await xe.get(`/api/partidos/fecha/${t}`);return W.success(`✅ ${r.data.data.partidos.length} partidos de la fecha ${t}`,{id:`fecha-${t}`}),r.data}catch(r){throw W.error(`❌ Error al cargar fecha ${t}`,{id:`fecha-${t}`}),r}},async actualizarPartido(t,r){try{W.loading("Actualizando resultado...",{id:`partido-${t}`});const i=await xe.put(`/api/partidos/${t}`,r);return W.success("🎯 Resultado actualizado exitosamente",{id:`partido-${t}`}),i.data}catch(i){throw W.error("❌ Error al actualizar resultado",{id:`partido-${t}`}),i}},async getPartidosFaseFinal(){try{W.loading("Cargando partidos de fase final...",{id:"fase-final"});const t=await xe.get("/api/partidos/fase-final");return W.success(`✅ ${t.data.total||t.data.data?.length||0} partidos de fase final cargados`,{id:"fase-final"}),t.data}catch(t){throw W.error("❌ Error al cargar partidos de fase final",{id:"fase-final"}),t}},async getPartidosRepechaje(){try{return(await xe.get("/api/partidos/fase-final/repechaje")).data}catch(t){throw t}},async getPartidosOctavos(){try{return(await xe.get("/api/partidos/fase-final/octavos")).data}catch(t){throw t}},async getPartidosCuartos(){try{return(await xe.get("/api/partidos/fase-final/cuartos")).data}catch(t){throw t}},async getPartidosSemifinales(){try{return(await xe.get("/api/partidos/fase-final/semifinales")).data}catch(t){throw t}},async getPartidoFinal(){try{return(await xe.get("/api/partidos/fase-final/final")).data}catch(t){throw t}},async calcularFaseFinal(){try{W.loading("Calculando fase final...",{id:"calcular-ff"});const t=await xe.post("/api/fase-final/calcular");return W.success("✅ Fase final calculada correctamente",{id:"calcular-ff"}),t.data}catch(t){throw W.error("❌ Error al calcular fase final",{id:"calcular-ff"}),t}},async actualizarOctavosConRepechaje(){try{W.loading("Actualizando octavos...",{id:"actualizar-octavos"});const t=await xe.post("/api/fase-final/actualizar-octavos");return W.success("✅ Octavos actualizados",{id:"actualizar-octavos"}),t.data}catch(t){throw W.error("❌ Error al actualizar octavos",{id:"actualizar-octavos"}),t}},async getResumenFaseFinal(){try{return(await xe.get("/api/fase-final/resumen")).data}catch(t){throw t}},async getPosiciones(){try{W.loading("Cargando tabla de posiciones...",{id:"posiciones"});const t=await xe.get("/api/posiciones");return W.success("🏆 Tabla de posiciones actualizada",{id:"posiciones"}),t.data}catch(t){throw W.error("❌ Error al cargar posiciones",{id:"posiciones"}),t}},async getPosicionesPorGrupo(t){try{W.loading(`Cargando posiciones del grupo ${t}...`,{id:`pos-${t}`});const r=await xe.get(`/api/posiciones/grupo/${t}`);return W.success(`🏆 Posiciones grupo ${t} actualizadas`,{id:`pos-${t}`}),r.data}catch(r){throw W.error(`❌ Error en posiciones grupo ${t}`,{id:`pos-${t}`}),r}},async getFechas(){try{return(await xe.get("/api/fechas")).data}catch(t){throw W.error("❌ Error al cargar fechas"),t}},async getAdminStats(){try{W.loading("Cargando estadísticas...",{id:"admin-stats"});const t=await xe.get("/api/admin/stats");return W.success("📊 Estadísticas cargadas",{id:"admin-stats"}),t.data}catch(t){throw W.error("❌ Error al cargar estadísticas",{id:"admin-stats"}),t}},async getAdminUsers(){try{W.loading("Cargando usuarios...",{id:"admin-users"});const t=await xe.get("/api/admin/users");return W.success("👥 Usuarios cargados",{id:"admin-users"}),t.data}catch(t){throw W.error("❌ Error al cargar usuarios",{id:"admin-users"}),t}},async updateUserRole(t,r){try{W.loading("Actualizando rol...",{id:`user-role-${t}`});const i=await xe.put(`/api/admin/users/${t}/role`,{role:r});return W.success("✅ Rol actualizado",{id:`user-role-${t}`}),i.data}catch(i){throw W.error("❌ Error al actualizar rol",{id:`user-role-${t}`}),i}},async deleteUser(t){try{W.loading("Eliminando usuario...",{id:`user-delete-${t}`});const r=await xe.delete(`/api/admin/users/${t}`);return W.success("🗑️ Usuario eliminado",{id:`user-delete-${t}`}),r.data}catch(r){throw W.error("❌ Error al eliminar usuario",{id:`user-delete-${t}`}),r}},async getEstadisticas(){try{W.loading("Calculando estadísticas...",{id:"stats"});const t=await xe.get("/api/stats");return W.success("📊 Estadísticas actualizadas",{id:"stats"}),t.data}catch(t){throw W.error("❌ Error en estadísticas",{id:"stats"}),t}},async checkApiStatus(){try{const t=await xe.get("/");return{online:!0,message:t.data.message,version:t.data.version}}catch(t){return{online:!1,message:"API no disponible",error:t.message}}},isAuthenticated(){return!!localStorage.getItem("token")},getTokenInfo(){const t=localStorage.getItem("token");if(!t)return null;try{return{token:t,valid:!0}}catch{return null}}},jg=b.createContext(),ra=()=>{const t=b.useContext(jg);if(!t)throw new Error("useAuth debe ser usado dentro de AuthProvider");return t},FS=({children:t})=>{const[r,i]=b.useState(null),[o,l]=b.useState(!0),[c,u]=b.useState(localStorage.getItem("token"));b.useEffect(()=>{(async()=>{const T=localStorage.getItem("token");if(T)try{const j=await at.verifyToken();i(j.data.user),u(T)}catch(j){console.error("Token inválido:",j),localStorage.removeItem("token"),u(null)}l(!1)})()},[]);const w={user:r,token:c,loading:o,login:async C=>{try{const T=await at.login(C),{token:j,user:E}=T.data;return i(E),u(j),localStorage.setItem("token",j),{success:!0,user:E}}catch(T){return console.error("Error en login:",T),{success:!1,message:T.response?.data?.message||"Error de conexión"}}},register:async C=>{try{return{success:!0,message:(await at.register(C)).data.message}}catch(T){return console.error("Error en registro:",T),{success:!1,message:T.response?.data?.message||"Error de conexión"}}},logout:async()=>{try{await at.logout()}catch(C){console.error("Error en logout:",C)}finally{i(null),u(null),localStorage.removeItem("token")}},isAdmin:()=>r?.role==="admin",isAuthenticated:()=>!!r&&!!c};return m.jsx(jg.Provider,{value:w,children:t})},_S=({children:t,requireAdmin:r=!1})=>{const{isAuthenticated:i,isAdmin:o,loading:l}=ra(),c=dr();return l?m.jsxs("div",{className:"loading",children:[m.jsx("div",{className:"loading-spinner"}),m.jsx("h2",{children:"Verificando autenticación..."})]}):i()?r&&!o()?m.jsxs("div",{className:"access-denied",children:[m.jsxs("div",{className:"access-denied-card",children:[m.jsx("div",{className:"access-denied-icon",children:"🚫"}),m.jsx("h2",{children:"Acceso Denegado"}),m.jsx("p",{children:"No tienes permisos suficientes para acceder a esta página."}),m.jsx("p",{children:"Se requieren permisos de administrador."}),m.jsx("button",{className:"btn btn-secondary",onClick:()=>window.history.back(),children:"Volver Atrás"})]}),m.jsx("style",{jsx:!0,children:`
          .access-denied {
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }

          .access-denied-card {
            background: rgba(220, 53, 69, 0.1);
            border: 2px solid #dc3545;
            border-radius: 15px;
            padding: 3rem 2rem;
            text-align: center;
            max-width: 500px;
            backdrop-filter: blur(10px);
          }

          .access-denied-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
          }

          .access-denied-card h2 {
            color: #dc3545;
            margin-bottom: 1rem;
            font-size: 1.8rem;
          }

          .access-denied-card p {
            color: var(--text-color);
            margin-bottom: 1rem;
            opacity: 0.9;
          }

          .access-denied-card button {
            margin-top: 1rem;
          }
        `})]}):t:m.jsx(s1,{to:"/login",state:{from:c},replace:!0})},gc=b.createContext({});function yc(t){const r=b.useRef(null);return r.current===null&&(r.current=t()),r.current}const vc=typeof window<"u",Ng=vc?b.useLayoutEffect:b.useEffect,ia=b.createContext(null);function xc(t,r){t.indexOf(r)===-1&&t.push(r)}function wc(t,r){const i=t.indexOf(r);i>-1&&t.splice(i,1)}const fn=(t,r,i)=>i>r?r:i<t?t:i;let Sc=()=>{};const pn={},Rg=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Ag(t){return typeof t=="object"&&t!==null}const Lg=t=>/^0[^.\s]+$/u.test(t);function Ec(t){let r;return()=>(r===void 0&&(r=t()),r)}const Mt=t=>t,VS=(t,r)=>i=>r(t(i)),ls=(...t)=>t.reduce(VS),Qi=(t,r,i)=>{const o=r-t;return o===0?1:(i-t)/o};class bc{constructor(){this.subscriptions=[]}add(r){return xc(this.subscriptions,r),()=>wc(this.subscriptions,r)}notify(r,i,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](r,i,o);else for(let c=0;c<l;c++){const u=this.subscriptions[c];u&&u(r,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Jt=t=>t*1e3,Ot=t=>t/1e3;function Dg(t,r){return r?t*(1e3/r):0}const Og=(t,r,i)=>(((1-3*i+3*r)*t+(3*i-6*r))*t+3*r)*t,IS=1e-7,BS=12;function US(t,r,i,o,l){let c,u,p=0;do u=r+(i-r)/2,c=Og(u,o,l)-t,c>0?i=u:r=u;while(Math.abs(c)>IS&&++p<BS);return u}function us(t,r,i,o){if(t===r&&i===o)return Mt;const l=c=>US(c,0,1,t,i);return c=>c===0||c===1?c:Og(l(c),r,o)}const Mg=t=>r=>r<=.5?t(2*r)/2:(2-t(2*(1-r)))/2,zg=t=>r=>1-t(1-r),Fg=us(.33,1.53,.69,.99),Cc=zg(Fg),_g=Mg(Cc),Vg=t=>(t*=2)<1?.5*Cc(t):.5*(2-Math.pow(2,-10*(t-1))),kc=t=>1-Math.sin(Math.acos(t)),Ig=zg(kc),Bg=Mg(kc),$S=us(.42,0,1,1),qS=us(0,0,.58,1),Ug=us(.42,0,.58,1),HS=t=>Array.isArray(t)&&typeof t[0]!="number",$g=t=>Array.isArray(t)&&typeof t[0]=="number",WS={linear:Mt,easeIn:$S,easeInOut:Ug,easeOut:qS,circIn:kc,circInOut:Bg,circOut:Ig,backIn:Cc,backInOut:_g,backOut:Fg,anticipate:Vg},KS=t=>typeof t=="string",Eh=t=>{if($g(t)){Sc(t.length===4);const[r,i,o,l]=t;return us(r,i,o,l)}else if(KS(t))return WS[t];return t},ko=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function GS(t,r){let i=new Set,o=new Set,l=!1,c=!1;const u=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(y){u.has(y)&&(g.schedule(y),t()),y(p)}const g={schedule:(y,v=!1,w=!1)=>{const T=w&&l?i:o;return v&&u.add(y),T.has(y)||T.add(y),y},cancel:y=>{o.delete(y),u.delete(y)},process:y=>{if(p=y,l){c=!0;return}l=!0,[i,o]=[o,i],i.forEach(h),i.clear(),l=!1,c&&(c=!1,g.process(y))}};return g}const YS=40;function qg(t,r){let i=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,u=ko.reduce((M,$)=>(M[$]=GS(c),M),{}),{setup:p,read:h,resolveKeyframes:g,preUpdate:y,update:v,preRender:w,render:C,postRender:T}=u,j=()=>{const M=pn.useManualTiming?l.timestamp:performance.now();i=!1,pn.useManualTiming||(l.delta=o?1e3/60:Math.max(Math.min(M-l.timestamp,YS),1)),l.timestamp=M,l.isProcessing=!0,p.process(l),h.process(l),g.process(l),y.process(l),v.process(l),w.process(l),C.process(l),T.process(l),l.isProcessing=!1,i&&r&&(o=!1,t(j))},E=()=>{i=!0,o=!0,l.isProcessing||t(j)};return{schedule:ko.reduce((M,$)=>{const H=u[$];return M[$]=(X,te=!1,z=!1)=>(i||E(),H.schedule(X,te,z)),M},{}),cancel:M=>{for(let $=0;$<ko.length;$++)u[ko[$]].cancel(M)},state:l,steps:u}}const{schedule:je,cancel:Fn,state:Xe,steps:du}=qg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Mt,!0);let Oo;function QS(){Oo=void 0}const gt={now:()=>(Oo===void 0&&gt.set(Xe.isProcessing||pn.useManualTiming?Xe.timestamp:performance.now()),Oo),set:t=>{Oo=t,queueMicrotask(QS)}},Hg=t=>r=>typeof r=="string"&&r.startsWith(t),Tc=Hg("--"),XS=Hg("var(--"),Pc=t=>XS(t)?JS.test(t.split("/*")[0].trim()):!1,JS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Yr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Xi={...Yr,transform:t=>fn(0,1,t)},To={...Yr,default:1},Bi=t=>Math.round(t*1e5)/1e5,jc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ZS(t){return t==null}const e2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Nc=(t,r)=>i=>!!(typeof i=="string"&&e2.test(i)&&i.startsWith(t)||r&&!ZS(i)&&Object.prototype.hasOwnProperty.call(i,r)),Wg=(t,r,i)=>o=>{if(typeof o!="string")return o;const[l,c,u,p]=o.match(jc);return{[t]:parseFloat(l),[r]:parseFloat(c),[i]:parseFloat(u),alpha:p!==void 0?parseFloat(p):1}},t2=t=>fn(0,255,t),fu={...Yr,transform:t=>Math.round(t2(t))},sr={test:Nc("rgb","red"),parse:Wg("red","green","blue"),transform:({red:t,green:r,blue:i,alpha:o=1})=>"rgba("+fu.transform(t)+", "+fu.transform(r)+", "+fu.transform(i)+", "+Bi(Xi.transform(o))+")"};function n2(t){let r="",i="",o="",l="";return t.length>5?(r=t.substring(1,3),i=t.substring(3,5),o=t.substring(5,7),l=t.substring(7,9)):(r=t.substring(1,2),i=t.substring(2,3),o=t.substring(3,4),l=t.substring(4,5),r+=r,i+=i,o+=o,l+=l),{red:parseInt(r,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Iu={test:Nc("#"),parse:n2,transform:sr.transform},cs=t=>({test:r=>typeof r=="string"&&r.endsWith(t)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${t}`}),Dn=cs("deg"),Zt=cs("%"),ae=cs("px"),r2=cs("vh"),i2=cs("vw"),bh={...Zt,parse:t=>Zt.parse(t)/100,transform:t=>Zt.transform(t*100)},Fr={test:Nc("hsl","hue"),parse:Wg("hue","saturation","lightness"),transform:({hue:t,saturation:r,lightness:i,alpha:o=1})=>"hsla("+Math.round(t)+", "+Zt.transform(Bi(r))+", "+Zt.transform(Bi(i))+", "+Bi(Xi.transform(o))+")"},Be={test:t=>sr.test(t)||Iu.test(t)||Fr.test(t),parse:t=>sr.test(t)?sr.parse(t):Fr.test(t)?Fr.parse(t):Iu.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?sr.transform(t):Fr.transform(t),getAnimatableNone:t=>{const r=Be.parse(t);return r.alpha=0,Be.transform(r)}},s2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function o2(t){return isNaN(t)&&typeof t=="string"&&(t.match(jc)?.length||0)+(t.match(s2)?.length||0)>0}const Kg="number",Gg="color",a2="var",l2="var(",Ch="${}",u2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ji(t){const r=t.toString(),i=[],o={color:[],number:[],var:[]},l=[];let c=0;const p=r.replace(u2,h=>(Be.test(h)?(o.color.push(c),l.push(Gg),i.push(Be.parse(h))):h.startsWith(l2)?(o.var.push(c),l.push(a2),i.push(h)):(o.number.push(c),l.push(Kg),i.push(parseFloat(h))),++c,Ch)).split(Ch);return{values:i,split:p,indexes:o,types:l}}function Yg(t){return Ji(t).values}function Qg(t){const{split:r,types:i}=Ji(t),o=r.length;return l=>{let c="";for(let u=0;u<o;u++)if(c+=r[u],l[u]!==void 0){const p=i[u];p===Kg?c+=Bi(l[u]):p===Gg?c+=Be.transform(l[u]):c+=l[u]}return c}}const c2=t=>typeof t=="number"?0:Be.test(t)?Be.getAnimatableNone(t):t;function d2(t){const r=Yg(t);return Qg(t)(r.map(c2))}const _n={test:o2,parse:Yg,createTransformer:Qg,getAnimatableNone:d2};function pu(t,r,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(r-t)*6*i:i<1/2?r:i<2/3?t+(r-t)*(2/3-i)*6:t}function f2({hue:t,saturation:r,lightness:i,alpha:o}){t/=360,r/=100,i/=100;let l=0,c=0,u=0;if(!r)l=c=u=i;else{const p=i<.5?i*(1+r):i+r-i*r,h=2*i-p;l=pu(h,p,t+1/3),c=pu(h,p,t),u=pu(h,p,t-1/3)}return{red:Math.round(l*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:o}}function Uo(t,r){return i=>i>0?r:t}const Le=(t,r,i)=>t+(r-t)*i,hu=(t,r,i)=>{const o=t*t,l=i*(r*r-o)+o;return l<0?0:Math.sqrt(l)},p2=[Iu,sr,Fr],h2=t=>p2.find(r=>r.test(t));function kh(t){const r=h2(t);if(!r)return!1;let i=r.parse(t);return r===Fr&&(i=f2(i)),i}const Th=(t,r)=>{const i=kh(t),o=kh(r);if(!i||!o)return Uo(t,r);const l={...i};return c=>(l.red=hu(i.red,o.red,c),l.green=hu(i.green,o.green,c),l.blue=hu(i.blue,o.blue,c),l.alpha=Le(i.alpha,o.alpha,c),sr.transform(l))},Bu=new Set(["none","hidden"]);function m2(t,r){return Bu.has(t)?i=>i<=0?t:r:i=>i>=1?r:t}function g2(t,r){return i=>Le(t,r,i)}function Rc(t){return typeof t=="number"?g2:typeof t=="string"?Pc(t)?Uo:Be.test(t)?Th:x2:Array.isArray(t)?Xg:typeof t=="object"?Be.test(t)?Th:y2:Uo}function Xg(t,r){const i=[...t],o=i.length,l=t.map((c,u)=>Rc(c)(c,r[u]));return c=>{for(let u=0;u<o;u++)i[u]=l[u](c);return i}}function y2(t,r){const i={...t,...r},o={};for(const l in i)t[l]!==void 0&&r[l]!==void 0&&(o[l]=Rc(t[l])(t[l],r[l]));return l=>{for(const c in o)i[c]=o[c](l);return i}}function v2(t,r){const i=[],o={color:0,var:0,number:0};for(let l=0;l<r.values.length;l++){const c=r.types[l],u=t.indexes[c][o[c]],p=t.values[u]??0;i[l]=p,o[c]++}return i}const x2=(t,r)=>{const i=_n.createTransformer(r),o=Ji(t),l=Ji(r);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?Bu.has(t)&&!l.values.length||Bu.has(r)&&!o.values.length?m2(t,r):ls(Xg(v2(o,l),l.values),i):Uo(t,r)};function Jg(t,r,i){return typeof t=="number"&&typeof r=="number"&&typeof i=="number"?Le(t,r,i):Rc(t)(t,r)}const w2=t=>{const r=({timestamp:i})=>t(i);return{start:(i=!0)=>je.update(r,i),stop:()=>Fn(r),now:()=>Xe.isProcessing?Xe.timestamp:gt.now()}},Zg=(t,r,i=10)=>{let o="";const l=Math.max(Math.round(r/i),2);for(let c=0;c<l;c++)o+=Math.round(t(c/(l-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},$o=2e4;function Ac(t){let r=0;const i=50;let o=t.next(r);for(;!o.done&&r<$o;)r+=i,o=t.next(r);return r>=$o?1/0:r}function S2(t,r=100,i){const o=i({...t,keyframes:[0,r]}),l=Math.min(Ac(o),$o);return{type:"keyframes",ease:c=>o.next(l*c).value/r,duration:Ot(l)}}const E2=5;function e0(t,r,i){const o=Math.max(r-E2,0);return Dg(i-t(o),r-o)}const Oe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},mu=.001;function b2({duration:t=Oe.duration,bounce:r=Oe.bounce,velocity:i=Oe.velocity,mass:o=Oe.mass}){let l,c,u=1-r;u=fn(Oe.minDamping,Oe.maxDamping,u),t=fn(Oe.minDuration,Oe.maxDuration,Ot(t)),u<1?(l=g=>{const y=g*u,v=y*t,w=y-i,C=Uu(g,u),T=Math.exp(-v);return mu-w/C*T},c=g=>{const v=g*u*t,w=v*i+i,C=Math.pow(u,2)*Math.pow(g,2)*t,T=Math.exp(-v),j=Uu(Math.pow(g,2),u);return(-l(g)+mu>0?-1:1)*((w-C)*T)/j}):(l=g=>{const y=Math.exp(-g*t),v=(g-i)*t+1;return-mu+y*v},c=g=>{const y=Math.exp(-g*t),v=(i-g)*(t*t);return y*v});const p=5/t,h=k2(l,c,p);if(t=Jt(t),isNaN(h))return{stiffness:Oe.stiffness,damping:Oe.damping,duration:t};{const g=Math.pow(h,2)*o;return{stiffness:g,damping:u*2*Math.sqrt(o*g),duration:t}}}const C2=12;function k2(t,r,i){let o=i;for(let l=1;l<C2;l++)o=o-t(o)/r(o);return o}function Uu(t,r){return t*Math.sqrt(1-r*r)}const T2=["duration","bounce"],P2=["stiffness","damping","mass"];function Ph(t,r){return r.some(i=>t[i]!==void 0)}function j2(t){let r={velocity:Oe.velocity,stiffness:Oe.stiffness,damping:Oe.damping,mass:Oe.mass,isResolvedFromDuration:!1,...t};if(!Ph(t,P2)&&Ph(t,T2))if(t.visualDuration){const i=t.visualDuration,o=2*Math.PI/(i*1.2),l=o*o,c=2*fn(.05,1,1-(t.bounce||0))*Math.sqrt(l);r={...r,mass:Oe.mass,stiffness:l,damping:c}}else{const i=b2(t);r={...r,...i,mass:Oe.mass},r.isResolvedFromDuration=!0}return r}function qo(t=Oe.visualDuration,r=Oe.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:r}:t;let{restSpeed:o,restDelta:l}=i;const c=i.keyframes[0],u=i.keyframes[i.keyframes.length-1],p={done:!1,value:c},{stiffness:h,damping:g,mass:y,duration:v,velocity:w,isResolvedFromDuration:C}=j2({...i,velocity:-Ot(i.velocity||0)}),T=w||0,j=g/(2*Math.sqrt(h*y)),E=u-c,L=Ot(Math.sqrt(h/y)),F=Math.abs(E)<5;o||(o=F?Oe.restSpeed.granular:Oe.restSpeed.default),l||(l=F?Oe.restDelta.granular:Oe.restDelta.default);let M;if(j<1){const H=Uu(L,j);M=X=>{const te=Math.exp(-j*L*X);return u-te*((T+j*L*E)/H*Math.sin(H*X)+E*Math.cos(H*X))}}else if(j===1)M=H=>u-Math.exp(-L*H)*(E+(T+L*E)*H);else{const H=L*Math.sqrt(j*j-1);M=X=>{const te=Math.exp(-j*L*X),z=Math.min(H*X,300);return u-te*((T+j*L*E)*Math.sinh(z)+H*E*Math.cosh(z))/H}}const $={calculatedDuration:C&&v||null,next:H=>{const X=M(H);if(C)p.done=H>=v;else{let te=H===0?T:0;j<1&&(te=H===0?Jt(T):e0(M,H,X));const z=Math.abs(te)<=o,Q=Math.abs(u-X)<=l;p.done=z&&Q}return p.value=p.done?u:X,p},toString:()=>{const H=Math.min(Ac($),$o),X=Zg(te=>$.next(H*te).value,H,30);return H+"ms "+X},toTransition:()=>{}};return $}qo.applyToOptions=t=>{const r=S2(t,100,qo);return t.ease=r.ease,t.duration=Jt(r.duration),t.type="keyframes",t};function $u({keyframes:t,velocity:r=0,power:i=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:c=500,modifyTarget:u,min:p,max:h,restDelta:g=.5,restSpeed:y}){const v=t[0],w={done:!1,value:v},C=z=>p!==void 0&&z<p||h!==void 0&&z>h,T=z=>p===void 0?h:h===void 0||Math.abs(p-z)<Math.abs(h-z)?p:h;let j=i*r;const E=v+j,L=u===void 0?E:u(E);L!==E&&(j=L-v);const F=z=>-j*Math.exp(-z/o),M=z=>L+F(z),$=z=>{const Q=F(z),oe=M(z);w.done=Math.abs(Q)<=g,w.value=w.done?L:oe};let H,X;const te=z=>{C(w.value)&&(H=z,X=qo({keyframes:[w.value,T(w.value)],velocity:e0(M,z,w.value),damping:l,stiffness:c,restDelta:g,restSpeed:y}))};return te(0),{calculatedDuration:null,next:z=>{let Q=!1;return!X&&H===void 0&&(Q=!0,$(z),te(z)),H!==void 0&&z>=H?X.next(z-H):(!Q&&$(z),w)}}}function N2(t,r,i){const o=[],l=i||pn.mix||Jg,c=t.length-1;for(let u=0;u<c;u++){let p=l(t[u],t[u+1]);if(r){const h=Array.isArray(r)?r[u]||Mt:r;p=ls(h,p)}o.push(p)}return o}function R2(t,r,{clamp:i=!0,ease:o,mixer:l}={}){const c=t.length;if(Sc(c===r.length),c===1)return()=>r[0];if(c===2&&r[0]===r[1])return()=>r[1];const u=t[0]===t[1];t[0]>t[c-1]&&(t=[...t].reverse(),r=[...r].reverse());const p=N2(r,o,l),h=p.length,g=y=>{if(u&&y<t[0])return r[0];let v=0;if(h>1)for(;v<t.length-2&&!(y<t[v+1]);v++);const w=Qi(t[v],t[v+1],y);return p[v](w)};return i?y=>g(fn(t[0],t[c-1],y)):g}function A2(t,r){const i=t[t.length-1];for(let o=1;o<=r;o++){const l=Qi(0,r,o);t.push(Le(i,1,l))}}function L2(t){const r=[0];return A2(r,t.length-1),r}function D2(t,r){return t.map(i=>i*r)}function O2(t,r){return t.map(()=>r||Ug).splice(0,t.length-1)}function Ui({duration:t=300,keyframes:r,times:i,ease:o="easeInOut"}){const l=HS(o)?o.map(Eh):Eh(o),c={done:!1,value:r[0]},u=D2(i&&i.length===r.length?i:L2(r),t),p=R2(u,r,{ease:Array.isArray(l)?l:O2(r,l)});return{calculatedDuration:t,next:h=>(c.value=p(h),c.done=h>=t,c)}}const M2=t=>t!==null;function Lc(t,{repeat:r,repeatType:i="loop"},o,l=1){const c=t.filter(M2),p=l<0||r&&i!=="loop"&&r%2===1?0:c.length-1;return!p||o===void 0?c[p]:o}const z2={decay:$u,inertia:$u,tween:Ui,keyframes:Ui,spring:qo};function t0(t){typeof t.type=="string"&&(t.type=z2[t.type])}class Dc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,i){return this.finished.then(r,i)}}const F2=t=>t/100;class Oc extends Dc{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:i}=this.options;i&&i.updatedAt!==gt.now()&&this.tick(gt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;t0(r);const{type:i=Ui,repeat:o=0,repeatDelay:l=0,repeatType:c,velocity:u=0}=r;let{keyframes:p}=r;const h=i||Ui;h!==Ui&&typeof p[0]!="number"&&(this.mixKeyframes=ls(F2,Jg(p[0],p[1])),p=[0,100]);const g=h({...r,keyframes:p});c==="mirror"&&(this.mirroredGenerator=h({...r,keyframes:[...p].reverse(),velocity:-u})),g.calculatedDuration===null&&(g.calculatedDuration=Ac(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+l,this.totalDuration=this.resolvedDuration*(o+1)-l,this.generator=g}updateTime(r){const i=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(r,i=!1){const{generator:o,totalDuration:l,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return o.next(0);const{delay:g=0,keyframes:y,repeat:v,repeatType:w,repeatDelay:C,type:T,onUpdate:j,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-l/this.speed,this.startTime)),i?this.currentTime=r:this.updateTime(r);const L=this.currentTime-g*(this.playbackSpeed>=0?1:-1),F=this.playbackSpeed>=0?L<0:L>l;this.currentTime=Math.max(L,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let M=this.currentTime,$=o;if(v){const z=Math.min(this.currentTime,l)/p;let Q=Math.floor(z),oe=z%1;!oe&&z>=1&&(oe=1),oe===1&&Q--,Q=Math.min(Q,v+1),!!(Q%2)&&(w==="reverse"?(oe=1-oe,C&&(oe-=C/p)):w==="mirror"&&($=u)),M=fn(0,1,oe)*p}const H=F?{done:!1,value:y[0]}:$.next(M);c&&(H.value=c(H.value));let{done:X}=H;!F&&h!==null&&(X=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const te=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&X);return te&&T!==$u&&(H.value=Lc(y,this.options,E,this.speed)),j&&j(H.value),te&&this.finish(),H}then(r,i){return this.finished.then(r,i)}get duration(){return Ot(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Ot(r)}get time(){return Ot(this.currentTime)}set time(r){r=Jt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(r){this.updateTime(gt.now());const i=this.playbackSpeed!==r;this.playbackSpeed=r,i&&(this.time=Ot(this.currentTime))}play(){if(this.isStopped)return;const{driver:r=w2,startTime:i}=this.options;this.driver||(this.driver=r(l=>this.tick(l))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=i??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(gt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),r.observe(this)}}function _2(t){for(let r=1;r<t.length;r++)t[r]??(t[r]=t[r-1])}const or=t=>t*180/Math.PI,qu=t=>{const r=or(Math.atan2(t[1],t[0]));return Hu(r)},V2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:qu,rotateZ:qu,skewX:t=>or(Math.atan(t[1])),skewY:t=>or(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Hu=t=>(t=t%360,t<0&&(t+=360),t),jh=qu,Nh=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Rh=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),I2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Nh,scaleY:Rh,scale:t=>(Nh(t)+Rh(t))/2,rotateX:t=>Hu(or(Math.atan2(t[6],t[5]))),rotateY:t=>Hu(or(Math.atan2(-t[2],t[0]))),rotateZ:jh,rotate:jh,skewX:t=>or(Math.atan(t[4])),skewY:t=>or(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Wu(t){return t.includes("scale")?1:0}function Ku(t,r){if(!t||t==="none")return Wu(r);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,l;if(i)o=I2,l=i;else{const p=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=V2,l=p}if(!l)return Wu(r);const c=o[r],u=l[1].split(",").map(U2);return typeof c=="function"?c(u):u[c]}const B2=(t,r)=>{const{transform:i="none"}=getComputedStyle(t);return Ku(i,r)};function U2(t){return parseFloat(t.trim())}const Qr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xr=new Set(Qr),Ah=t=>t===Yr||t===ae,$2=new Set(["x","y","z"]),q2=Qr.filter(t=>!$2.has(t));function H2(t){const r=[];return q2.forEach(i=>{const o=t.getValue(i);o!==void 0&&(r.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),r}const lr={width:({x:t},{paddingLeft:r="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(r)-parseFloat(i),height:({y:t},{paddingTop:r="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(r)-parseFloat(i),top:(t,{top:r})=>parseFloat(r),left:(t,{left:r})=>parseFloat(r),bottom:({y:t},{top:r})=>parseFloat(r)+(t.max-t.min),right:({x:t},{left:r})=>parseFloat(r)+(t.max-t.min),x:(t,{transform:r})=>Ku(r,"x"),y:(t,{transform:r})=>Ku(r,"y")};lr.translateX=lr.x;lr.translateY=lr.y;const ur=new Set;let Gu=!1,Yu=!1,Qu=!1;function n0(){if(Yu){const t=Array.from(ur).filter(o=>o.needsMeasurement),r=new Set(t.map(o=>o.element)),i=new Map;r.forEach(o=>{const l=H2(o);l.length&&(i.set(o,l),o.render())}),t.forEach(o=>o.measureInitialState()),r.forEach(o=>{o.render();const l=i.get(o);l&&l.forEach(([c,u])=>{o.getValue(c)?.set(u)})}),t.forEach(o=>o.measureEndState()),t.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Yu=!1,Gu=!1,ur.forEach(t=>t.complete(Qu)),ur.clear()}function r0(){ur.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Yu=!0)})}function W2(){Qu=!0,r0(),n0(),Qu=!1}class Mc{constructor(r,i,o,l,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=i,this.name=o,this.motionValue=l,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(ur.add(this),Gu||(Gu=!0,je.read(r0),je.resolveKeyframes(n0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:i,element:o,motionValue:l}=this;if(r[0]===null){const c=l?.get(),u=r[r.length-1];if(c!==void 0)r[0]=c;else if(o&&i){const p=o.readValue(i,u);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=u),l&&c===void 0&&l.set(r[0])}_2(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),ur.delete(this)}cancel(){this.state==="scheduled"&&(ur.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const K2=t=>t.startsWith("--");function G2(t,r,i){K2(r)?t.style.setProperty(r,i):t.style[r]=i}const Y2=Ec(()=>window.ScrollTimeline!==void 0),Q2={};function X2(t,r){const i=Ec(t);return()=>Q2[r]??i()}const i0=X2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ii=([t,r,i,o])=>`cubic-bezier(${t}, ${r}, ${i}, ${o})`,Lh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ii([0,.65,.55,1]),circOut:Ii([.55,0,1,.45]),backIn:Ii([.31,.01,.66,-.59]),backOut:Ii([.33,1.53,.69,.99])};function s0(t,r){if(t)return typeof t=="function"?i0()?Zg(t,r):"ease-out":$g(t)?Ii(t):Array.isArray(t)?t.map(i=>s0(i,r)||Lh.easeOut):Lh[t]}function J2(t,r,i,{delay:o=0,duration:l=300,repeat:c=0,repeatType:u="loop",ease:p="easeOut",times:h}={},g=void 0){const y={[r]:i};h&&(y.offset=h);const v=s0(p,l);Array.isArray(v)&&(y.easing=v);const w={delay:o,duration:l,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return g&&(w.pseudoElement=g),t.animate(y,w)}function o0(t){return typeof t=="function"&&"applyToOptions"in t}function Z2({type:t,...r}){return o0(t)&&i0()?t.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class eE extends Dc{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,!r)return;const{element:i,name:o,keyframes:l,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:p,onComplete:h}=r;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=r,Sc(typeof r.type!="string");const g=Z2(r);this.animation=J2(i,o,l,g,c),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=Lc(l,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):G2(i,o,y),this.animation.cancel()}h?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const r=this.animation.effect?.getComputedTiming?.().duration||0;return Ot(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Ot(r)}get time(){return Ot(Number(this.animation.currentTime)||0)}set time(r){this.finishedTime=null,this.animation.currentTime=Jt(r)}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(r){this.animation.startTime=r}attachTimeline({timeline:r,observe:i}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,r&&Y2()?(this.animation.timeline=r,Mt):i(this)}}const a0={anticipate:Vg,backInOut:_g,circInOut:Bg};function tE(t){return t in a0}function nE(t){typeof t.ease=="string"&&tE(t.ease)&&(t.ease=a0[t.ease])}const Dh=10;class rE extends eE{constructor(r){nE(r),t0(r),super(r),r.startTime&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:i,onUpdate:o,onComplete:l,element:c,...u}=this.options;if(!i)return;if(r!==void 0){i.set(r);return}const p=new Oc({...u,autoplay:!1}),h=Jt(this.finishedTime??this.time);i.setWithVelocity(p.sample(h-Dh).value,p.sample(h).value,Dh),p.stop()}}const Oh=(t,r)=>r==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(_n.test(t)||t==="0")&&!t.startsWith("url("));function iE(t){const r=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==r)return!0}function sE(t,r,i,o){const l=t[0];if(l===null)return!1;if(r==="display"||r==="visibility")return!0;const c=t[t.length-1],u=Oh(l,r),p=Oh(c,r);return!u||!p?!1:iE(t)||(i==="spring"||o0(i))&&o}function Xu(t){t.duration=0,t.type="keyframes"}const oE=new Set(["opacity","clipPath","filter","transform"]),aE=Ec(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function lE(t){const{motionValue:r,name:i,repeatDelay:o,repeatType:l,damping:c,type:u}=t;if(!(r?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:g}=r.owner.getProps();return aE()&&i&&oE.has(i)&&(i!=="transform"||!g)&&!h&&!o&&l!=="mirror"&&c!==0&&u!=="inertia"}const uE=40;class cE extends Dc{constructor({autoplay:r=!0,delay:i=0,type:o="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:u="loop",keyframes:p,name:h,motionValue:g,element:y,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=gt.now();const w={autoplay:r,delay:i,type:o,repeat:l,repeatDelay:c,repeatType:u,name:h,motionValue:g,element:y,...v},C=y?.KeyframeResolver||Mc;this.keyframeResolver=new C(p,(T,j,E)=>this.onKeyframesResolved(T,j,w,!E),h,g,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(r,i,o,l){this.keyframeResolver=void 0;const{name:c,type:u,velocity:p,delay:h,isHandoff:g,onUpdate:y}=o;this.resolvedAt=gt.now(),sE(r,c,u,p)||((pn.instantAnimations||!h)&&y?.(Lc(r,o,i)),r[0]=r[r.length-1],Xu(o),o.repeat=0);const w={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>uE?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...o,keyframes:r},C=!g&&lE(w)?new rE({...w,element:w.motionValue.owner.current}):new Oc(w);C.finished.then(()=>this.notifyFinished()).catch(Mt),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(r,i){return this.finished.finally(r).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),W2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const dE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fE(t){const r=dE.exec(t);if(!r)return[,];const[,i,o,l]=r;return[`--${i??o}`,l]}function l0(t,r,i=1){const[o,l]=fE(t);if(!o)return;const c=window.getComputedStyle(r).getPropertyValue(o);if(c){const u=c.trim();return Rg(u)?parseFloat(u):u}return Pc(l)?l0(l,r,i+1):l}function zc(t,r){return t?.[r]??t?.default??t}const u0=new Set(["width","height","top","left","right","bottom",...Qr]),pE={test:t=>t==="auto",parse:t=>t},c0=t=>r=>r.test(t),d0=[Yr,ae,Zt,Dn,i2,r2,pE],Mh=t=>d0.find(c0(t));function hE(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Lg(t):!0}const mE=new Set(["brightness","contrast","saturate","opacity"]);function gE(t){const[r,i]=t.slice(0,-1).split("(");if(r==="drop-shadow")return t;const[o]=i.match(jc)||[];if(!o)return t;const l=i.replace(o,"");let c=mE.has(r)?1:0;return o!==i&&(c*=100),r+"("+c+l+")"}const yE=/\b([a-z-]*)\(.*?\)/gu,Ju={..._n,getAnimatableNone:t=>{const r=t.match(yE);return r?r.map(gE).join(" "):t}},zh={...Yr,transform:Math.round},vE={rotate:Dn,rotateX:Dn,rotateY:Dn,rotateZ:Dn,scale:To,scaleX:To,scaleY:To,scaleZ:To,skew:Dn,skewX:Dn,skewY:Dn,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:Xi,originX:bh,originY:bh,originZ:ae},Fc={borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,backgroundPositionX:ae,backgroundPositionY:ae,...vE,zIndex:zh,fillOpacity:Xi,strokeOpacity:Xi,numOctaves:zh},xE={...Fc,color:Be,backgroundColor:Be,outlineColor:Be,fill:Be,stroke:Be,borderColor:Be,borderTopColor:Be,borderRightColor:Be,borderBottomColor:Be,borderLeftColor:Be,filter:Ju,WebkitFilter:Ju},f0=t=>xE[t];function p0(t,r){let i=f0(t);return i!==Ju&&(i=_n),i.getAnimatableNone?i.getAnimatableNone(r):void 0}const wE=new Set(["auto","none","0"]);function SE(t,r,i){let o=0,l;for(;o<t.length&&!l;){const c=t[o];typeof c=="string"&&!wE.has(c)&&Ji(c).values.length&&(l=t[o]),o++}if(l&&i)for(const c of r)t[c]=p0(i,l)}class EE extends Mc{constructor(r,i,o,l,c){super(r,i,o,l,c,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let h=0;h<r.length;h++){let g=r[h];if(typeof g=="string"&&(g=g.trim(),Pc(g))){const y=l0(g,i.current);y!==void 0&&(r[h]=y),h===r.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!u0.has(o)||r.length!==2)return;const[l,c]=r,u=Mh(l),p=Mh(c);if(u!==p)if(Ah(u)&&Ah(p))for(let h=0;h<r.length;h++){const g=r[h];typeof g=="string"&&(r[h]=parseFloat(g))}else lr[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:i}=this,o=[];for(let l=0;l<r.length;l++)(r[l]===null||hE(r[l]))&&o.push(l);o.length&&SE(r,o,i)}measureInitialState(){const{element:r,unresolvedKeyframes:i,name:o}=this;if(!r||!r.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=lr[o](r.measureViewportBox(),window.getComputedStyle(r.current)),i[0]=this.measuredOrigin;const l=i[i.length-1];l!==void 0&&r.getValue(o,l).jump(l,!1)}measureEndState(){const{element:r,name:i,unresolvedKeyframes:o}=this;if(!r||!r.current)return;const l=r.getValue(i);l&&l.jump(this.measuredOrigin,!1);const c=o.length-1,u=o[c];o[c]=lr[i](r.measureViewportBox(),window.getComputedStyle(r.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,h])=>{r.getValue(p).set(h)}),this.resolveNoneKeyframes()}}function bE(t,r,i){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let o=document;const l=i?.[t]??o.querySelectorAll(t);return l?Array.from(l):[]}return Array.from(t)}const h0=(t,r)=>r&&typeof t=="number"?r.transform(t):t;function m0(t){return Ag(t)&&"offsetHeight"in t}const Fh=30,CE=t=>!isNaN(parseFloat(t));class kE{constructor(r,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const l=gt.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=i.owner}setCurrent(r){this.current=r,this.updatedAt=gt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=CE(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,i){this.events[r]||(this.events[r]=new bc);const o=this.events[r].add(i);return r==="change"?()=>{o(),je.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,i){this.passiveEffect=r,this.stopPassiveEffect=i}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-o}jump(r,i=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=gt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>Fh)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Fh);return Dg(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(r){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=r(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function $r(t,r){return new kE(t,r)}const{schedule:_c}=qg(queueMicrotask,!1),$t={x:!1,y:!1};function g0(){return $t.x||$t.y}function TE(t){return t==="x"||t==="y"?$t[t]?null:($t[t]=!0,()=>{$t[t]=!1}):$t.x||$t.y?null:($t.x=$t.y=!0,()=>{$t.x=$t.y=!1})}function y0(t,r){const i=bE(t),o=new AbortController,l={passive:!0,...r,signal:o.signal};return[i,l,()=>o.abort()]}function _h(t){return!(t.pointerType==="touch"||g0())}function PE(t,r,i={}){const[o,l,c]=y0(t,i),u=p=>{if(!_h(p))return;const{target:h}=p,g=r(h,p);if(typeof g!="function"||!h)return;const y=v=>{_h(v)&&(g(v),h.removeEventListener("pointerleave",y))};h.addEventListener("pointerleave",y,l)};return o.forEach(p=>{p.addEventListener("pointerenter",u,l)}),c}const v0=(t,r)=>r?t===r?!0:v0(t,r.parentElement):!1,Vc=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,jE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function NE(t){return jE.has(t.tagName)||t.tabIndex!==-1}const Mo=new WeakSet;function Vh(t){return r=>{r.key==="Enter"&&t(r)}}function gu(t,r){t.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const RE=(t,r)=>{const i=t.currentTarget;if(!i)return;const o=Vh(()=>{if(Mo.has(i))return;gu(i,"down");const l=Vh(()=>{gu(i,"up")}),c=()=>gu(i,"cancel");i.addEventListener("keyup",l,r),i.addEventListener("blur",c,r)});i.addEventListener("keydown",o,r),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),r)};function Ih(t){return Vc(t)&&!g0()}function AE(t,r,i={}){const[o,l,c]=y0(t,i),u=p=>{const h=p.currentTarget;if(!Ih(p))return;Mo.add(h);const g=r(h,p),y=(C,T)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",w),Mo.has(h)&&Mo.delete(h),Ih(C)&&typeof g=="function"&&g(C,{success:T})},v=C=>{y(C,h===window||h===document||i.useGlobalTarget||v0(h,C.target))},w=C=>{y(C,!1)};window.addEventListener("pointerup",v,l),window.addEventListener("pointercancel",w,l)};return o.forEach(p=>{(i.useGlobalTarget?window:p).addEventListener("pointerdown",u,l),m0(p)&&(p.addEventListener("focus",g=>RE(g,l)),!NE(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),c}function x0(t){return Ag(t)&&"ownerSVGElement"in t}function LE(t){return x0(t)&&t.tagName==="svg"}const rt=t=>!!(t&&t.getVelocity),DE=[...d0,Be,_n],OE=t=>DE.find(c0(t)),Ic=b.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Bh(t,r){if(typeof t=="function")return t(r);t!=null&&(t.current=r)}function ME(...t){return r=>{let i=!1;const o=t.map(l=>{const c=Bh(l,r);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let l=0;l<o.length;l++){const c=o[l];typeof c=="function"?c():Bh(t[l],null)}}}}function zE(...t){return b.useCallback(ME(...t),t)}class FE extends b.Component{getSnapshotBeforeUpdate(r){const i=this.props.childRef.current;if(i&&r.isPresent&&!this.props.isPresent){const o=i.offsetParent,l=m0(o)&&o.offsetWidth||0,c=this.props.sizeRef.current;c.height=i.offsetHeight||0,c.width=i.offsetWidth||0,c.top=i.offsetTop,c.left=i.offsetLeft,c.right=l-c.width-c.left}return null}componentDidUpdate(){}render(){return this.props.children}}function _E({children:t,isPresent:r,anchorX:i,root:o}){const l=b.useId(),c=b.useRef(null),u=b.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=b.useContext(Ic),h=zE(c,t?.ref);return b.useInsertionEffect(()=>{const{width:g,height:y,top:v,left:w,right:C}=u.current;if(r||!c.current||!g||!y)return;const T=i==="left"?`left: ${w}`:`right: ${C}`;c.current.dataset.motionPopId=l;const j=document.createElement("style");p&&(j.nonce=p);const E=o??document.head;return E.appendChild(j),j.sheet&&j.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${y}px !important;
            ${T}px !important;
            top: ${v}px !important;
          }
        `),()=>{E.contains(j)&&E.removeChild(j)}},[r]),m.jsx(FE,{isPresent:r,childRef:c,sizeRef:u,children:b.cloneElement(t,{ref:h})})}const VE=({children:t,initial:r,isPresent:i,onExitComplete:o,custom:l,presenceAffectsLayout:c,mode:u,anchorX:p,root:h})=>{const g=yc(IE),y=b.useId();let v=!0,w=b.useMemo(()=>(v=!1,{id:y,initial:r,isPresent:i,custom:l,onExitComplete:C=>{g.set(C,!0);for(const T of g.values())if(!T)return;o&&o()},register:C=>(g.set(C,!1),()=>g.delete(C))}),[i,g,o]);return c&&v&&(w={...w}),b.useMemo(()=>{g.forEach((C,T)=>g.set(T,!1))},[i]),b.useEffect(()=>{!i&&!g.size&&o&&o()},[i]),u==="popLayout"&&(t=m.jsx(_E,{isPresent:i,anchorX:p,root:h,children:t})),m.jsx(ia.Provider,{value:w,children:t})};function IE(){return new Map}function w0(t=!0){const r=b.useContext(ia);if(r===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:l}=r,c=b.useId();b.useEffect(()=>{if(t)return l(c)},[t]);const u=b.useCallback(()=>t&&o&&o(c),[c,o,t]);return!i&&o?[!1,u]:[!0]}const Po=t=>t.key||"";function Uh(t){const r=[];return b.Children.forEach(t,i=>{b.isValidElement(i)&&r.push(i)}),r}const BE=({children:t,custom:r,initial:i=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:c="sync",propagate:u=!1,anchorX:p="left",root:h})=>{const[g,y]=w0(u),v=b.useMemo(()=>Uh(t),[t]),w=u&&!g?[]:v.map(Po),C=b.useRef(!0),T=b.useRef(v),j=yc(()=>new Map),[E,L]=b.useState(v),[F,M]=b.useState(v);Ng(()=>{C.current=!1,T.current=v;for(let X=0;X<F.length;X++){const te=Po(F[X]);w.includes(te)?j.delete(te):j.get(te)!==!0&&j.set(te,!1)}},[F,w.length,w.join("-")]);const $=[];if(v!==E){let X=[...v];for(let te=0;te<F.length;te++){const z=F[te],Q=Po(z);w.includes(Q)||(X.splice(te,0,z),$.push(z))}return c==="wait"&&$.length&&(X=$),M(Uh(X)),L(v),null}const{forceRender:H}=b.useContext(gc);return m.jsx(m.Fragment,{children:F.map(X=>{const te=Po(X),z=u&&!g?!1:v===F||w.includes(te),Q=()=>{if(j.has(te))j.set(te,!0);else return;let oe=!0;j.forEach(fe=>{fe||(oe=!1)}),oe&&(H?.(),M(T.current),u&&y?.(),o&&o())};return m.jsx(VE,{isPresent:z,initial:!C.current||i?void 0:!1,custom:r,presenceAffectsLayout:l,mode:c,root:h,onExitComplete:z?void 0:Q,anchorX:p,children:X},te)})})},S0=b.createContext({strict:!1}),$h={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},qr={};for(const t in $h)qr[t]={isEnabled:r=>$h[t].some(i=>!!r[i])};function UE(t){for(const r in t)qr[r]={...qr[r],...t[r]}}const $E=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ho(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||$E.has(t)}let E0=t=>!Ho(t);function qE(t){typeof t=="function"&&(E0=r=>r.startsWith("on")?!Ho(r):t(r))}try{qE(require("@emotion/is-prop-valid").default)}catch{}function HE(t,r,i){const o={};for(const l in t)l==="values"&&typeof t.values=="object"||(E0(l)||i===!0&&Ho(l)||!r&&!Ho(l)||t.draggable&&l.startsWith("onDrag"))&&(o[l]=t[l]);return o}const sa=b.createContext({});function oa(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Zi(t){return typeof t=="string"||Array.isArray(t)}const Bc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Uc=["initial",...Bc];function aa(t){return oa(t.animate)||Uc.some(r=>Zi(t[r]))}function b0(t){return!!(aa(t)||t.variants)}function WE(t,r){if(aa(t)){const{initial:i,animate:o}=t;return{initial:i===!1||Zi(i)?i:void 0,animate:Zi(o)?o:void 0}}return t.inherit!==!1?r:{}}function KE(t){const{initial:r,animate:i}=WE(t,b.useContext(sa));return b.useMemo(()=>({initial:r,animate:i}),[qh(r),qh(i)])}function qh(t){return Array.isArray(t)?t.join(" "):t}const es={};function GE(t){for(const r in t)es[r]=t[r],Tc(r)&&(es[r].isCSSVariable=!0)}function C0(t,{layout:r,layoutId:i}){return Xr.has(t)||t.startsWith("origin")||(r||i!==void 0)&&(!!es[t]||t==="opacity")}const YE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},QE=Qr.length;function XE(t,r,i){let o="",l=!0;for(let c=0;c<QE;c++){const u=Qr[c],p=t[u];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(u.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||i){const g=h0(p,Fc[u]);if(!h){l=!1;const y=YE[u]||u;o+=`${y}(${g}) `}i&&(r[u]=g)}}return o=o.trim(),i?o=i(r,l?"":o):l&&(o="none"),o}function $c(t,r,i){const{style:o,vars:l,transformOrigin:c}=t;let u=!1,p=!1;for(const h in r){const g=r[h];if(Xr.has(h)){u=!0;continue}else if(Tc(h)){l[h]=g;continue}else{const y=h0(g,Fc[h]);h.startsWith("origin")?(p=!0,c[h]=y):o[h]=y}}if(r.transform||(u||i?o.transform=XE(r,t.transform,i):o.transform&&(o.transform="none")),p){const{originX:h="50%",originY:g="50%",originZ:y=0}=c;o.transformOrigin=`${h} ${g} ${y}`}}const qc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function k0(t,r,i){for(const o in r)!rt(r[o])&&!C0(o,i)&&(t[o]=r[o])}function JE({transformTemplate:t},r){return b.useMemo(()=>{const i=qc();return $c(i,r,t),Object.assign({},i.vars,i.style)},[r])}function ZE(t,r){const i=t.style||{},o={};return k0(o,i,t),Object.assign(o,JE(t,r)),o}function e5(t,r){const i={},o=ZE(t,r);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=o,i}const t5={offset:"stroke-dashoffset",array:"stroke-dasharray"},n5={offset:"strokeDashoffset",array:"strokeDasharray"};function r5(t,r,i=1,o=0,l=!0){t.pathLength=1;const c=l?t5:n5;t[c.offset]=ae.transform(-o);const u=ae.transform(r),p=ae.transform(i);t[c.array]=`${u} ${p}`}function T0(t,{attrX:r,attrY:i,attrScale:o,pathLength:l,pathSpacing:c=1,pathOffset:u=0,...p},h,g,y){if($c(t,p,g),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:v,style:w}=t;v.transform&&(w.transform=v.transform,delete v.transform),(w.transform||v.transformOrigin)&&(w.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),w.transform&&(w.transformBox=y?.transformBox??"fill-box",delete v.transformBox),r!==void 0&&(v.x=r),i!==void 0&&(v.y=i),o!==void 0&&(v.scale=o),l!==void 0&&r5(v,l,c,u,!1)}const P0=()=>({...qc(),attrs:{}}),j0=t=>typeof t=="string"&&t.toLowerCase()==="svg";function i5(t,r,i,o){const l=b.useMemo(()=>{const c=P0();return T0(c,r,j0(o),t.transformTemplate,t.style),{...c.attrs,style:{...c.style}}},[r]);if(t.style){const c={};k0(c,t.style,t),l.style={...c,...l.style}}return l}const s5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Hc(t){return typeof t!="string"||t.includes("-")?!1:!!(s5.indexOf(t)>-1||/[A-Z]/u.test(t))}function o5(t,r,i,{latestValues:o},l,c=!1){const p=(Hc(t)?i5:e5)(r,o,l,t),h=HE(r,typeof t=="string",c),g=t!==b.Fragment?{...h,...p,ref:i}:{},{children:y}=r,v=b.useMemo(()=>rt(y)?y.get():y,[y]);return b.createElement(t,{...g,children:v})}function Hh(t){const r=[{},{}];return t?.values.forEach((i,o)=>{r[0][o]=i.get(),r[1][o]=i.getVelocity()}),r}function Wc(t,r,i,o){if(typeof r=="function"){const[l,c]=Hh(o);r=r(i!==void 0?i:t.custom,l,c)}if(typeof r=="string"&&(r=t.variants&&t.variants[r]),typeof r=="function"){const[l,c]=Hh(o);r=r(i!==void 0?i:t.custom,l,c)}return r}function zo(t){return rt(t)?t.get():t}function a5({scrapeMotionValuesFromProps:t,createRenderState:r},i,o,l){return{latestValues:l5(i,o,l,t),renderState:r()}}function l5(t,r,i,o){const l={},c=o(t,{});for(const w in c)l[w]=zo(c[w]);let{initial:u,animate:p}=t;const h=aa(t),g=b0(t);r&&g&&!h&&t.inherit!==!1&&(u===void 0&&(u=r.initial),p===void 0&&(p=r.animate));let y=i?i.initial===!1:!1;y=y||u===!1;const v=y?p:u;if(v&&typeof v!="boolean"&&!oa(v)){const w=Array.isArray(v)?v:[v];for(let C=0;C<w.length;C++){const T=Wc(t,w[C]);if(T){const{transitionEnd:j,transition:E,...L}=T;for(const F in L){let M=L[F];if(Array.isArray(M)){const $=y?M.length-1:0;M=M[$]}M!==null&&(l[F]=M)}for(const F in j)l[F]=j[F]}}}return l}const N0=t=>(r,i)=>{const o=b.useContext(sa),l=b.useContext(ia),c=()=>a5(t,r,o,l);return i?c():yc(c)};function Kc(t,r,i){const{style:o}=t,l={};for(const c in o)(rt(o[c])||r.style&&rt(r.style[c])||C0(c,t)||i?.getValue(c)?.liveStyle!==void 0)&&(l[c]=o[c]);return l}const u5=N0({scrapeMotionValuesFromProps:Kc,createRenderState:qc});function R0(t,r,i){const o=Kc(t,r,i);for(const l in t)if(rt(t[l])||rt(r[l])){const c=Qr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[c]=t[l]}return o}const c5=N0({scrapeMotionValuesFromProps:R0,createRenderState:P0}),d5=Symbol.for("motionComponentSymbol");function _r(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function f5(t,r,i){return b.useCallback(o=>{o&&t.onMount&&t.onMount(o),r&&(o?r.mount(o):r.unmount()),i&&(typeof i=="function"?i(o):_r(i)&&(i.current=o))},[r])}const Gc=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),p5="framerAppearId",A0="data-"+Gc(p5),L0=b.createContext({});function h5(t,r,i,o,l){const{visualElement:c}=b.useContext(sa),u=b.useContext(S0),p=b.useContext(ia),h=b.useContext(Ic).reducedMotion,g=b.useRef(null);o=o||u.renderer,!g.current&&o&&(g.current=o(t,{visualState:r,parent:c,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:h}));const y=g.current,v=b.useContext(L0);y&&!y.projection&&l&&(y.type==="html"||y.type==="svg")&&m5(g.current,i,l,v);const w=b.useRef(!1);b.useInsertionEffect(()=>{y&&w.current&&y.update(i,p)});const C=i[A0],T=b.useRef(!!C&&!window.MotionHandoffIsComplete?.(C)&&window.MotionHasOptimisedAnimation?.(C));return Ng(()=>{y&&(w.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),T.current&&y.animationState&&y.animationState.animateChanges())}),b.useEffect(()=>{y&&(!T.current&&y.animationState&&y.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(C)}),T.current=!1),y.enteringChildren=void 0)}),y}function m5(t,r,i,o){const{layoutId:l,layout:c,drag:u,dragConstraints:p,layoutScroll:h,layoutRoot:g,layoutCrossfade:y}=r;t.projection=new i(t.latestValues,r["data-framer-portal-id"]?void 0:D0(t.parent)),t.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||p&&_r(p),visualElement:t,animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,crossfade:y,layoutScroll:h,layoutRoot:g})}function D0(t){if(t)return t.options.allowProjection!==!1?t.projection:D0(t.parent)}function yu(t,{forwardMotionProps:r=!1}={},i,o){i&&UE(i);const l=Hc(t)?c5:u5;function c(p,h){let g;const y={...b.useContext(Ic),...p,layoutId:g5(p)},{isStatic:v}=y,w=KE(p),C=l(p,v);if(!v&&vc){y5();const T=v5(y);g=T.MeasureLayout,w.visualElement=h5(t,C,y,o,T.ProjectionNode)}return m.jsxs(sa.Provider,{value:w,children:[g&&w.visualElement?m.jsx(g,{visualElement:w.visualElement,...y}):null,o5(t,p,f5(C,w.visualElement,h),C,v,r)]})}c.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const u=b.forwardRef(c);return u[d5]=t,u}function g5({layoutId:t}){const r=b.useContext(gc).id;return r&&t!==void 0?r+"-"+t:t}function y5(t,r){b.useContext(S0).strict}function v5(t){const{drag:r,layout:i}=qr;if(!r&&!i)return{};const o={...r,...i};return{MeasureLayout:r?.isEnabled(t)||i?.isEnabled(t)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function x5(t,r){if(typeof Proxy>"u")return yu;const i=new Map,o=(c,u)=>yu(c,u,t,r),l=(c,u)=>o(c,u);return new Proxy(l,{get:(c,u)=>u==="create"?o:(i.has(u)||i.set(u,yu(u,void 0,t,r)),i.get(u))})}function O0({top:t,left:r,right:i,bottom:o}){return{x:{min:r,max:i},y:{min:t,max:o}}}function w5({x:t,y:r}){return{top:r.min,right:t.max,bottom:r.max,left:t.min}}function S5(t,r){if(!r)return t;const i=r({x:t.left,y:t.top}),o=r({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function vu(t){return t===void 0||t===1}function Zu({scale:t,scaleX:r,scaleY:i}){return!vu(t)||!vu(r)||!vu(i)}function rr(t){return Zu(t)||M0(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function M0(t){return Wh(t.x)||Wh(t.y)}function Wh(t){return t&&t!=="0%"}function Wo(t,r,i){const o=t-i,l=r*o;return i+l}function Kh(t,r,i,o,l){return l!==void 0&&(t=Wo(t,l,o)),Wo(t,i,o)+r}function ec(t,r=0,i=1,o,l){t.min=Kh(t.min,r,i,o,l),t.max=Kh(t.max,r,i,o,l)}function z0(t,{x:r,y:i}){ec(t.x,r.translate,r.scale,r.originPoint),ec(t.y,i.translate,i.scale,i.originPoint)}const Gh=.999999999999,Yh=1.0000000000001;function E5(t,r,i,o=!1){const l=i.length;if(!l)return;r.x=r.y=1;let c,u;for(let p=0;p<l;p++){c=i[p],u=c.projectionDelta;const{visualElement:h}=c.options;h&&h.props.style&&h.props.style.display==="contents"||(o&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ir(t,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(r.x*=u.x.scale,r.y*=u.y.scale,z0(t,u)),o&&rr(c.latestValues)&&Ir(t,c.latestValues))}r.x<Yh&&r.x>Gh&&(r.x=1),r.y<Yh&&r.y>Gh&&(r.y=1)}function Vr(t,r){t.min=t.min+r,t.max=t.max+r}function Qh(t,r,i,o,l=.5){const c=Le(t.min,t.max,l);ec(t,r,i,c,o)}function Ir(t,r){Qh(t.x,r.x,r.scaleX,r.scale,r.originX),Qh(t.y,r.y,r.scaleY,r.scale,r.originY)}function F0(t,r){return O0(S5(t.getBoundingClientRect(),r))}function b5(t,r,i){const o=F0(t,i),{scroll:l}=r;return l&&(Vr(o.x,l.offset.x),Vr(o.y,l.offset.y)),o}const Xh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Br=()=>({x:Xh(),y:Xh()}),Jh=()=>({min:0,max:0}),Fe=()=>({x:Jh(),y:Jh()}),tc={current:null},_0={current:!1};function C5(){if(_0.current=!0,!!vc)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),r=()=>tc.current=t.matches;t.addEventListener("change",r),r()}else tc.current=!1}const k5=new WeakMap;function T5(t,r,i){for(const o in r){const l=r[o],c=i[o];if(rt(l))t.addValue(o,l);else if(rt(c))t.addValue(o,$r(l,{owner:t}));else if(c!==l)if(t.hasValue(o)){const u=t.getValue(o);u.liveStyle===!0?u.jump(l):u.hasAnimated||u.set(l)}else{const u=t.getStaticValue(o);t.addValue(o,$r(u!==void 0?u:l,{owner:t}))}}for(const o in i)r[o]===void 0&&t.removeValue(o);return r}const Zh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class P5{scrapeMotionValuesFromProps(r,i,o){return{}}constructor({parent:r,props:i,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:c,visualState:u},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=gt.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,je.render(this.render,!1,!0))};const{latestValues:h,renderState:g}=u;this.latestValues=h,this.baseTarget={...h},this.initialValues=i.initial?{...h}:{},this.renderState=g,this.parent=r,this.props=i,this.presenceContext=o,this.depth=r?r.depth+1:0,this.reducedMotionConfig=l,this.options=p,this.blockInitialAnimation=!!c,this.isControllingVariants=aa(i),this.isVariantNode=b0(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in v){const C=v[w];h[w]!==void 0&&rt(C)&&C.set(h[w])}}mount(r){this.current=r,k5.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),_0.current||C5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:tc.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Fn(this.notifyUpdate),Fn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const i=this.features[r];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,i){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const o=Xr.has(r);o&&this.onBindTransform&&this.onBindTransform();const l=i.on("change",u=>{this.latestValues[r]=u,this.props.onUpdate&&je.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,r,i)),this.valueSubscriptions.set(r,()=>{l(),c&&c(),i.owner&&i.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in qr){const i=qr[r];if(!i)continue;const{isEnabled:o,Feature:l}=i;if(!this.features[r]&&l&&o(this.props)&&(this.features[r]=new l(this)),this.features[r]){const c=this.features[r];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Fe()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,i){this.latestValues[r]=i}update(r,i){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<Zh.length;o++){const l=Zh[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const c="on"+l,u=r[c];u&&(this.propEventSubscriptions[l]=this.on(l,u))}this.prevMotionValues=T5(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(r),()=>i.variantChildren.delete(r)}addValue(r,i){const o=this.values.get(r);i!==o&&(o&&this.removeValue(r),this.bindToMotionValue(r,i),this.values.set(r,i),this.latestValues[r]=i.get())}removeValue(r){this.values.delete(r);const i=this.valueSubscriptions.get(r);i&&(i(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,i){if(this.props.values&&this.props.values[r])return this.props.values[r];let o=this.values.get(r);return o===void 0&&i!==void 0&&(o=$r(i===null?void 0:i,{owner:this}),this.addValue(r,o)),o}readValue(r,i){let o=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return o!=null&&(typeof o=="string"&&(Rg(o)||Lg(o))?o=parseFloat(o):!OE(o)&&_n.test(i)&&(o=p0(r,i)),this.setBaseTarget(r,rt(o)?o.get():o)),rt(o)?o.get():o}setBaseTarget(r,i){this.baseTarget[r]=i}getBaseTarget(r){const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const c=Wc(this.props,i,this.presenceContext?.custom);c&&(o=c[r])}if(i&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,r);return l!==void 0&&!rt(l)?l:this.initialValues[r]!==void 0&&o===void 0?void 0:this.baseTarget[r]}on(r,i){return this.events[r]||(this.events[r]=new bc),this.events[r].add(i)}notify(r,...i){this.events[r]&&this.events[r].notify(...i)}scheduleRenderMicrotask(){_c.render(this.render)}}class V0 extends P5{constructor(){super(...arguments),this.KeyframeResolver=EE}sortInstanceNodePosition(r,i){return r.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(r,i){return r.style?r.style[i]:void 0}removeValueFromRenderState(r,{vars:i,style:o}){delete i[r],delete o[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;rt(r)&&(this.childSubscription=r.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function I0(t,{style:r,vars:i},o,l){const c=t.style;let u;for(u in r)c[u]=r[u];l?.applyProjectionStyles(c,o);for(u in i)c.setProperty(u,i[u])}function j5(t){return window.getComputedStyle(t)}class N5 extends V0{constructor(){super(...arguments),this.type="html",this.renderInstance=I0}readValueFromInstance(r,i){if(Xr.has(i))return this.projection?.isProjecting?Wu(i):B2(r,i);{const o=j5(r),l=(Tc(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(r,{transformPagePoint:i}){return F0(r,i)}build(r,i,o){$c(r,i,o.transformTemplate)}scrapeMotionValuesFromProps(r,i,o){return Kc(r,i,o)}}const B0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function R5(t,r,i,o){I0(t,r,void 0,o);for(const l in r.attrs)t.setAttribute(B0.has(l)?l:Gc(l),r.attrs[l])}class A5 extends V0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Fe}getBaseTargetFromProps(r,i){return r[i]}readValueFromInstance(r,i){if(Xr.has(i)){const o=f0(i);return o&&o.default||0}return i=B0.has(i)?i:Gc(i),r.getAttribute(i)}scrapeMotionValuesFromProps(r,i,o){return R0(r,i,o)}build(r,i,o){T0(r,i,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(r,i,o,l){R5(r,i,o,l)}mount(r){this.isSVGTag=j0(r.tagName),super.mount(r)}}const L5=(t,r)=>Hc(t)?new A5(r):new N5(r,{allowProjection:t!==b.Fragment});function Ur(t,r,i){const o=t.getProps();return Wc(o,r,i!==void 0?i:o.custom,t)}const nc=t=>Array.isArray(t);function D5(t,r,i){t.hasValue(r)?t.getValue(r).set(i):t.addValue(r,$r(i))}function O5(t){return nc(t)?t[t.length-1]||0:t}function M5(t,r){const i=Ur(t,r);let{transitionEnd:o={},transition:l={},...c}=i||{};c={...c,...o};for(const u in c){const p=O5(c[u]);D5(t,u,p)}}function z5(t){return!!(rt(t)&&t.add)}function rc(t,r){const i=t.getValue("willChange");if(z5(i))return i.add(r);if(!i&&pn.WillChange){const o=new pn.WillChange("auto");t.addValue("willChange",o),o.add(r)}}function U0(t){return t.props[A0]}const F5=t=>t!==null;function _5(t,{repeat:r,repeatType:i="loop"},o){const l=t.filter(F5),c=r&&i!=="loop"&&r%2===1?0:l.length-1;return l[c]}const V5={type:"spring",stiffness:500,damping:25,restSpeed:10},I5=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),B5={type:"keyframes",duration:.8},U5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},$5=(t,{keyframes:r})=>r.length>2?B5:Xr.has(t)?t.startsWith("scale")?I5(r[1]):V5:U5;function q5({when:t,delay:r,delayChildren:i,staggerChildren:o,staggerDirection:l,repeat:c,repeatType:u,repeatDelay:p,from:h,elapsed:g,...y}){return!!Object.keys(y).length}const Yc=(t,r,i,o={},l,c)=>u=>{const p=zc(o,t)||{},h=p.delay||o.delay||0;let{elapsed:g=0}=o;g=g-Jt(h);const y={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-g,onUpdate:w=>{r.set(w),p.onUpdate&&p.onUpdate(w)},onComplete:()=>{u(),p.onComplete&&p.onComplete()},name:t,motionValue:r,element:c?void 0:l};q5(p)||Object.assign(y,$5(t,y)),y.duration&&(y.duration=Jt(y.duration)),y.repeatDelay&&(y.repeatDelay=Jt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Xu(y),y.delay===0&&(v=!0)),(pn.instantAnimations||pn.skipAnimations)&&(v=!0,Xu(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,v&&!c&&r.get()!==void 0){const w=_5(y.keyframes,p);if(w!==void 0){je.update(()=>{y.onUpdate(w),y.onComplete()});return}}return p.isSync?new Oc(y):new cE(y)};function H5({protectedKeys:t,needsAnimating:r},i){const o=t.hasOwnProperty(i)&&r[i]!==!0;return r[i]=!1,o}function $0(t,r,{delay:i=0,transitionOverride:o,type:l}={}){let{transition:c=t.getDefaultTransition(),transitionEnd:u,...p}=r;o&&(c=o);const h=[],g=l&&t.animationState&&t.animationState.getState()[l];for(const y in p){const v=t.getValue(y,t.latestValues[y]??null),w=p[y];if(w===void 0||g&&H5(g,y))continue;const C={delay:i,...zc(c||{},y)},T=v.get();if(T!==void 0&&!v.isAnimating&&!Array.isArray(w)&&w===T&&!C.velocity)continue;let j=!1;if(window.MotionHandoffAnimation){const L=U0(t);if(L){const F=window.MotionHandoffAnimation(L,y,je);F!==null&&(C.startTime=F,j=!0)}}rc(t,y),v.start(Yc(y,v,w,t.shouldReduceMotion&&u0.has(y)?{type:!1}:C,t,j));const E=v.animation;E&&h.push(E)}return u&&Promise.all(h).then(()=>{je.update(()=>{u&&M5(t,u)})}),h}function q0(t,r,i,o=0,l=1){const c=Array.from(t).sort((g,y)=>g.sortNodePosition(y)).indexOf(r),u=t.size,p=(u-1)*o;return typeof i=="function"?i(c,u):l===1?c*o:p-c*o}function ic(t,r,i={}){const o=Ur(t,r,i.type==="exit"?t.presenceContext?.custom:void 0);let{transition:l=t.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(l=i.transitionOverride);const c=o?()=>Promise.all($0(t,o,i)):()=>Promise.resolve(),u=t.variantChildren&&t.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:v}=l;return W5(t,r,h,g,y,v,i)}:()=>Promise.resolve(),{when:p}=l;if(p){const[h,g]=p==="beforeChildren"?[c,u]:[u,c];return h().then(()=>g())}else return Promise.all([c(),u(i.delay)])}function W5(t,r,i=0,o=0,l=0,c=1,u){const p=[];for(const h of t.variantChildren)h.notify("AnimationStart",r),p.push(ic(h,r,{...u,delay:i+(typeof o=="function"?0:o)+q0(t.variantChildren,h,o,l,c)}).then(()=>h.notify("AnimationComplete",r)));return Promise.all(p)}function K5(t,r,i={}){t.notify("AnimationStart",r);let o;if(Array.isArray(r)){const l=r.map(c=>ic(t,c,i));o=Promise.all(l)}else if(typeof r=="string")o=ic(t,r,i);else{const l=typeof r=="function"?Ur(t,r,i.custom):r;o=Promise.all($0(t,l,i))}return o.then(()=>{t.notify("AnimationComplete",r)})}function H0(t,r){if(!Array.isArray(r))return!1;const i=r.length;if(i!==t.length)return!1;for(let o=0;o<i;o++)if(r[o]!==t[o])return!1;return!0}const G5=Uc.length;function W0(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?W0(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const r={};for(let i=0;i<G5;i++){const o=Uc[i],l=t.props[o];(Zi(l)||l===!1)&&(r[o]=l)}return r}const Y5=[...Bc].reverse(),Q5=Bc.length;function X5(t){return r=>Promise.all(r.map(({animation:i,options:o})=>K5(t,i,o)))}function J5(t){let r=X5(t),i=em(),o=!0;const l=h=>(g,y)=>{const v=Ur(t,y,h==="exit"?t.presenceContext?.custom:void 0);if(v){const{transition:w,transitionEnd:C,...T}=v;g={...g,...T,...C}}return g};function c(h){r=h(t)}function u(h){const{props:g}=t,y=W0(t.parent)||{},v=[],w=new Set;let C={},T=1/0;for(let E=0;E<Q5;E++){const L=Y5[E],F=i[L],M=g[L]!==void 0?g[L]:y[L],$=Zi(M),H=L===h?F.isActive:null;H===!1&&(T=E);let X=M===y[L]&&M!==g[L]&&$;if(X&&o&&t.manuallyAnimateOnMount&&(X=!1),F.protectedKeys={...C},!F.isActive&&H===null||!M&&!F.prevProp||oa(M)||typeof M=="boolean")continue;const te=Z5(F.prevProp,M);let z=te||L===h&&F.isActive&&!X&&$||E>T&&$,Q=!1;const oe=Array.isArray(M)?M:[M];let fe=oe.reduce(l(L),{});H===!1&&(fe={});const{prevResolvedValues:Ne={}}=F,Ge={...Ne,...fe},ut=ce=>{z=!0,w.has(ce)&&(Q=!0,w.delete(ce)),F.needsAnimating[ce]=!0;const q=t.getValue(ce);q&&(q.liveStyle=!1)};for(const ce in Ge){const q=fe[ce],ne=Ne[ce];if(C.hasOwnProperty(ce))continue;let K=!1;nc(q)&&nc(ne)?K=!H0(q,ne):K=q!==ne,K?q!=null?ut(ce):w.add(ce):q!==void 0&&w.has(ce)?ut(ce):F.protectedKeys[ce]=!0}F.prevProp=M,F.prevResolvedValues=fe,F.isActive&&(C={...C,...fe}),o&&t.blockInitialAnimation&&(z=!1);const xt=X&&te;z&&(!xt||Q)&&v.push(...oe.map(ce=>{const q={type:L};if(typeof ce=="string"&&o&&!xt&&t.manuallyAnimateOnMount&&t.parent){const{parent:ne}=t,K=Ur(ne,ce);if(ne.enteringChildren&&K){const{delayChildren:N}=K.transition||{};q.delay=q0(ne.enteringChildren,t,N)}}return{animation:ce,options:q}}))}if(w.size){const E={};if(typeof g.initial!="boolean"){const L=Ur(t,Array.isArray(g.initial)?g.initial[0]:g.initial);L&&L.transition&&(E.transition=L.transition)}w.forEach(L=>{const F=t.getBaseTarget(L),M=t.getValue(L);M&&(M.liveStyle=!0),E[L]=F??null}),v.push({animation:E})}let j=!!v.length;return o&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(j=!1),o=!1,j?r(v):Promise.resolve()}function p(h,g){if(i[h].isActive===g)return Promise.resolve();t.variantChildren?.forEach(v=>v.animationState?.setActive(h,g)),i[h].isActive=g;const y=u(h);for(const v in i)i[v].protectedKeys={};return y}return{animateChanges:u,setActive:p,setAnimateFunction:c,getState:()=>i,reset:()=>{i=em()}}}function Z5(t,r){return typeof r=="string"?r!==t:Array.isArray(r)?!H0(r,t):!1}function nr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function em(){return{animate:nr(!0),whileInView:nr(),whileHover:nr(),whileTap:nr(),whileDrag:nr(),whileFocus:nr(),exit:nr()}}class Un{constructor(r){this.isMounted=!1,this.node=r}update(){}}class eb extends Un{constructor(r){super(r),r.animationState||(r.animationState=J5(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();oa(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:i}=this.node.prevProps||{};r!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let tb=0;class nb extends Un{constructor(){super(...arguments),this.id=tb++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===o)return;const l=this.node.animationState.setActive("exit",!r);i&&!r&&l.then(()=>{i(this.id)})}mount(){const{register:r,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const rb={animation:{Feature:eb},exit:{Feature:nb}};function ts(t,r,i,o={passive:!0}){return t.addEventListener(r,i,o),()=>t.removeEventListener(r,i)}function ds(t){return{point:{x:t.pageX,y:t.pageY}}}const ib=t=>r=>Vc(r)&&t(r,ds(r));function $i(t,r,i,o){return ts(t,r,ib(i),o)}const K0=1e-4,sb=1-K0,ob=1+K0,G0=.01,ab=0-G0,lb=0+G0;function lt(t){return t.max-t.min}function ub(t,r,i){return Math.abs(t-r)<=i}function tm(t,r,i,o=.5){t.origin=o,t.originPoint=Le(r.min,r.max,t.origin),t.scale=lt(i)/lt(r),t.translate=Le(i.min,i.max,t.origin)-t.originPoint,(t.scale>=sb&&t.scale<=ob||isNaN(t.scale))&&(t.scale=1),(t.translate>=ab&&t.translate<=lb||isNaN(t.translate))&&(t.translate=0)}function qi(t,r,i,o){tm(t.x,r.x,i.x,o?o.originX:void 0),tm(t.y,r.y,i.y,o?o.originY:void 0)}function nm(t,r,i){t.min=i.min+r.min,t.max=t.min+lt(r)}function cb(t,r,i){nm(t.x,r.x,i.x),nm(t.y,r.y,i.y)}function rm(t,r,i){t.min=r.min-i.min,t.max=t.min+lt(r)}function Hi(t,r,i){rm(t.x,r.x,i.x),rm(t.y,r.y,i.y)}function Lt(t){return[t("x"),t("y")]}const Y0=({current:t})=>t?t.ownerDocument.defaultView:null,im=(t,r)=>Math.abs(t-r);function db(t,r){const i=im(t.x,r.x),o=im(t.y,r.y);return Math.sqrt(i**2+o**2)}class Q0{constructor(r,i,{transformPagePoint:o,contextWindow:l=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=wu(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,T=db(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!T)return;const{point:j}=w,{timestamp:E}=Xe;this.history.push({...j,timestamp:E});const{onStart:L,onMove:F}=this.handlers;C||(L&&L(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),F&&F(this.lastMoveEvent,w)},this.handlePointerMove=(w,C)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=xu(C,this.transformPagePoint),je.update(this.updatePoint,!0)},this.handlePointerUp=(w,C)=>{this.end();const{onEnd:T,onSessionEnd:j,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=wu(w.type==="pointercancel"?this.lastMoveEventInfo:xu(C,this.transformPagePoint),this.history);this.startEvent&&T&&T(w,L),j&&j(w,L)},!Vc(r))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=o,this.distanceThreshold=u,this.contextWindow=l||window;const p=ds(r),h=xu(p,this.transformPagePoint),{point:g}=h,{timestamp:y}=Xe;this.history=[{...g,timestamp:y}];const{onSessionStart:v}=i;v&&v(r,wu(h,this.history)),this.removeListeners=ls($i(this.contextWindow,"pointermove",this.handlePointerMove),$i(this.contextWindow,"pointerup",this.handlePointerUp),$i(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),Fn(this.updatePoint)}}function xu(t,r){return r?{point:r(t.point)}:t}function sm(t,r){return{x:t.x-r.x,y:t.y-r.y}}function wu({point:t},r){return{point:t,delta:sm(t,X0(r)),offset:sm(t,fb(r)),velocity:pb(r,.1)}}function fb(t){return t[0]}function X0(t){return t[t.length-1]}function pb(t,r){if(t.length<2)return{x:0,y:0};let i=t.length-1,o=null;const l=X0(t);for(;i>=0&&(o=t[i],!(l.timestamp-o.timestamp>Jt(r)));)i--;if(!o)return{x:0,y:0};const c=Ot(l.timestamp-o.timestamp);if(c===0)return{x:0,y:0};const u={x:(l.x-o.x)/c,y:(l.y-o.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function hb(t,{min:r,max:i},o){return r!==void 0&&t<r?t=o?Le(r,t,o.min):Math.max(t,r):i!==void 0&&t>i&&(t=o?Le(i,t,o.max):Math.min(t,i)),t}function om(t,r,i){return{min:r!==void 0?t.min+r:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function mb(t,{top:r,left:i,bottom:o,right:l}){return{x:om(t.x,i,l),y:om(t.y,r,o)}}function am(t,r){let i=r.min-t.min,o=r.max-t.max;return r.max-r.min<t.max-t.min&&([i,o]=[o,i]),{min:i,max:o}}function gb(t,r){return{x:am(t.x,r.x),y:am(t.y,r.y)}}function yb(t,r){let i=.5;const o=lt(t),l=lt(r);return l>o?i=Qi(r.min,r.max-o,t.min):o>l&&(i=Qi(t.min,t.max-l,r.min)),fn(0,1,i)}function vb(t,r){const i={};return r.min!==void 0&&(i.min=r.min-t.min),r.max!==void 0&&(i.max=r.max-t.min),i}const sc=.35;function xb(t=sc){return t===!1?t=0:t===!0&&(t=sc),{x:lm(t,"left","right"),y:lm(t,"top","bottom")}}function lm(t,r,i){return{min:um(t,r),max:um(t,i)}}function um(t,r){return typeof t=="number"?t:t[r]||0}const wb=new WeakMap;class Sb{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Fe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:i=!1,distanceThreshold:o}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const c=v=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(ds(v).point)},u=(v,w)=>{const{drag:C,dragPropagation:T,onDragStart:j}=this.getProps();if(C&&!T&&(this.openDragLock&&this.openDragLock(),this.openDragLock=TE(C),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Lt(L=>{let F=this.getAxisMotionValue(L).get()||0;if(Zt.test(F)){const{projection:M}=this.visualElement;if(M&&M.layout){const $=M.layout.layoutBox[L];$&&(F=lt($)*(parseFloat(F)/100))}}this.originPoint[L]=F}),j&&je.postRender(()=>j(v,w)),rc(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},p=(v,w)=>{this.latestPointerEvent=v,this.latestPanInfo=w;const{dragPropagation:C,dragDirectionLock:T,onDirectionLock:j,onDrag:E}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:L}=w;if(T&&this.currentDirection===null){this.currentDirection=Eb(L),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",w.point,L),this.updateAxis("y",w.point,L),this.visualElement.render(),E&&E(v,w)},h=(v,w)=>{this.latestPointerEvent=v,this.latestPanInfo=w,this.stop(v,w),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>Lt(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Q0(r,{onSessionStart:c,onStart:u,onMove:p,onSessionEnd:h,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:o,contextWindow:Y0(this.visualElement)})}stop(r,i){const o=r||this.latestPointerEvent,l=i||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!l||!o)return;const{velocity:u}=l;this.startAnimation(u);const{onDragEnd:p}=this.getProps();p&&je.postRender(()=>p(o,l))}cancel(){this.isDragging=!1;const{projection:r,animationState:i}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(r,i,o){const{drag:l}=this.getProps();if(!o||!jo(r,l,this.currentDirection))return;const c=this.getAxisMotionValue(r);let u=this.originPoint[r]+o[r];this.constraints&&this.constraints[r]&&(u=hb(u,this.constraints[r],this.elastic[r])),c.set(u)}resolveConstraints(){const{dragConstraints:r,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,l=this.constraints;r&&_r(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&o?this.constraints=mb(o.layoutBox,r):this.constraints=!1,this.elastic=xb(i),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Lt(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=vb(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:i}=this.getProps();if(!r||!_r(r))return!1;const o=r.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const c=b5(o,l.root,this.visualElement.getTransformPagePoint());let u=gb(l.layout.layoutBox,c);if(i){const p=i(w5(u));this.hasMutatedConstraints=!!p,p&&(u=O0(p))}return u}startAnimation(r){const{drag:i,dragMomentum:o,dragElastic:l,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},g=Lt(y=>{if(!jo(y,i,this.currentDirection))return;let v=h&&h[y]||{};u&&(v={min:0,max:0});const w=l?200:1e6,C=l?40:1e7,T={type:"inertia",velocity:o?r[y]:0,bounceStiffness:w,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(y,T)});return Promise.all(g).then(p)}startAxisValueAnimation(r,i){const o=this.getAxisMotionValue(r);return rc(this.visualElement,r),o.start(Yc(r,o,0,i,this.visualElement,!1))}stopAnimation(){Lt(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){Lt(r=>this.getAxisMotionValue(r).animation?.pause())}getAnimationState(r){return this.getAxisMotionValue(r).animation?.state}getAxisMotionValue(r){const i=`_drag${r.toUpperCase()}`,o=this.visualElement.getProps(),l=o[i];return l||this.visualElement.getValue(r,(o.initial?o.initial[r]:void 0)||0)}snapToCursor(r){Lt(i=>{const{drag:o}=this.getProps();if(!jo(i,o,this.currentDirection))return;const{projection:l}=this.visualElement,c=this.getAxisMotionValue(i);if(l&&l.layout){const{min:u,max:p}=l.layout.layoutBox[i];c.set(r[i]-Le(u,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!_r(i)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Lt(u=>{const p=this.getAxisMotionValue(u);if(p&&this.constraints!==!1){const h=p.get();l[u]=yb({min:h,max:h},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Lt(u=>{if(!jo(u,r,null))return;const p=this.getAxisMotionValue(u),{min:h,max:g}=this.constraints[u];p.set(Le(h,g,l[u]))})}addListeners(){if(!this.visualElement.current)return;wb.set(this.visualElement,this);const r=this.visualElement.current,i=$i(r,"pointerdown",h=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(h)}),o=()=>{const{dragConstraints:h}=this.getProps();_r(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,c=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),je.read(o);const u=ts(window,"resize",()=>this.scalePositionWithinConstraints()),p=l.addEventListener("didUpdate",({delta:h,hasLayoutChanged:g})=>{this.isDragging&&g&&(Lt(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=h[y].translate,v.set(v.get()+h[y].translate))}),this.visualElement.render())});return()=>{u(),i(),c(),p&&p()}}getProps(){const r=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:c=!1,dragElastic:u=sc,dragMomentum:p=!0}=r;return{...r,drag:i,dragDirectionLock:o,dragPropagation:l,dragConstraints:c,dragElastic:u,dragMomentum:p}}}function jo(t,r,i){return(r===!0||r===t)&&(i===null||i===t)}function Eb(t,r=10){let i=null;return Math.abs(t.y)>r?i="y":Math.abs(t.x)>r&&(i="x"),i}class bb extends Un{constructor(r){super(r),this.removeGroupControls=Mt,this.removeListeners=Mt,this.controls=new Sb(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Mt}unmount(){this.removeGroupControls(),this.removeListeners()}}const cm=t=>(r,i)=>{t&&je.postRender(()=>t(r,i))};class Cb extends Un{constructor(){super(...arguments),this.removePointerDownListener=Mt}onPointerDown(r){this.session=new Q0(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Y0(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:i,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:cm(r),onStart:cm(i),onMove:o,onEnd:(c,u)=>{delete this.session,l&&je.postRender(()=>l(c,u))}}}mount(){this.removePointerDownListener=$i(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Fo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function dm(t,r){return r.max===r.min?0:t/(r.max-r.min)*100}const Vi={correct:(t,r)=>{if(!r.target)return t;if(typeof t=="string")if(ae.test(t))t=parseFloat(t);else return t;const i=dm(t,r.target.x),o=dm(t,r.target.y);return`${i}% ${o}%`}},kb={correct:(t,{treeScale:r,projectionDelta:i})=>{const o=t,l=_n.parse(t);if(l.length>5)return o;const c=_n.createTransformer(t),u=typeof l[0]!="number"?1:0,p=i.x.scale*r.x,h=i.y.scale*r.y;l[0+u]/=p,l[1+u]/=h;const g=Le(p,h,.5);return typeof l[2+u]=="number"&&(l[2+u]/=g),typeof l[3+u]=="number"&&(l[3+u]/=g),c(l)}};let Su=!1;class Tb extends b.Component{componentDidMount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:o,layoutId:l}=this.props,{projection:c}=r;GE(Pb),c&&(i.group&&i.group.add(c),o&&o.register&&l&&o.register(c),Su&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),Fo.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:i,visualElement:o,drag:l,isPresent:c}=this.props,{projection:u}=o;return u&&(u.isPresent=c,Su=!0,l||r.layoutDependency!==i||i===void 0||r.isPresent!==c?u.willUpdate():this.safeToRemove(),r.isPresent!==c&&(c?u.promote():u.relegate()||je.postRender(()=>{const p=u.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),_c.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:l}=r;Su=!0,l&&(l.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function J0(t){const[r,i]=w0(),o=b.useContext(gc);return m.jsx(Tb,{...t,layoutGroup:o,switchLayoutGroup:b.useContext(L0),isPresent:r,safeToRemove:i})}const Pb={borderRadius:{...Vi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Vi,borderTopRightRadius:Vi,borderBottomLeftRadius:Vi,borderBottomRightRadius:Vi,boxShadow:kb};function jb(t,r,i){const o=rt(t)?t:$r(t);return o.start(Yc("",o,r,i)),o.animation}const Nb=(t,r)=>t.depth-r.depth;class Rb{constructor(){this.children=[],this.isDirty=!1}add(r){xc(this.children,r),this.isDirty=!0}remove(r){wc(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(Nb),this.isDirty=!1,this.children.forEach(r)}}function Ab(t,r){const i=gt.now(),o=({timestamp:l})=>{const c=l-i;c>=r&&(Fn(o),t(c-r))};return je.setup(o,!0),()=>Fn(o)}const Z0=["TopLeft","TopRight","BottomLeft","BottomRight"],Lb=Z0.length,fm=t=>typeof t=="string"?parseFloat(t):t,pm=t=>typeof t=="number"||ae.test(t);function Db(t,r,i,o,l,c){l?(t.opacity=Le(0,i.opacity??1,Ob(o)),t.opacityExit=Le(r.opacity??1,0,Mb(o))):c&&(t.opacity=Le(r.opacity??1,i.opacity??1,o));for(let u=0;u<Lb;u++){const p=`border${Z0[u]}Radius`;let h=hm(r,p),g=hm(i,p);if(h===void 0&&g===void 0)continue;h||(h=0),g||(g=0),h===0||g===0||pm(h)===pm(g)?(t[p]=Math.max(Le(fm(h),fm(g),o),0),(Zt.test(g)||Zt.test(h))&&(t[p]+="%")):t[p]=g}(r.rotate||i.rotate)&&(t.rotate=Le(r.rotate||0,i.rotate||0,o))}function hm(t,r){return t[r]!==void 0?t[r]:t.borderRadius}const Ob=ey(0,.5,Ig),Mb=ey(.5,.95,Mt);function ey(t,r,i){return o=>o<t?0:o>r?1:i(Qi(t,r,o))}function mm(t,r){t.min=r.min,t.max=r.max}function At(t,r){mm(t.x,r.x),mm(t.y,r.y)}function gm(t,r){t.translate=r.translate,t.scale=r.scale,t.originPoint=r.originPoint,t.origin=r.origin}function ym(t,r,i,o,l){return t-=r,t=Wo(t,1/i,o),l!==void 0&&(t=Wo(t,1/l,o)),t}function zb(t,r=0,i=1,o=.5,l,c=t,u=t){if(Zt.test(r)&&(r=parseFloat(r),r=Le(u.min,u.max,r/100)-u.min),typeof r!="number")return;let p=Le(c.min,c.max,o);t===c&&(p-=r),t.min=ym(t.min,r,i,p,l),t.max=ym(t.max,r,i,p,l)}function vm(t,r,[i,o,l],c,u){zb(t,r[i],r[o],r[l],r.scale,c,u)}const Fb=["x","scaleX","originX"],_b=["y","scaleY","originY"];function xm(t,r,i,o){vm(t.x,r,Fb,i?i.x:void 0,o?o.x:void 0),vm(t.y,r,_b,i?i.y:void 0,o?o.y:void 0)}function wm(t){return t.translate===0&&t.scale===1}function ty(t){return wm(t.x)&&wm(t.y)}function Sm(t,r){return t.min===r.min&&t.max===r.max}function Vb(t,r){return Sm(t.x,r.x)&&Sm(t.y,r.y)}function Em(t,r){return Math.round(t.min)===Math.round(r.min)&&Math.round(t.max)===Math.round(r.max)}function ny(t,r){return Em(t.x,r.x)&&Em(t.y,r.y)}function bm(t){return lt(t.x)/lt(t.y)}function Cm(t,r){return t.translate===r.translate&&t.scale===r.scale&&t.originPoint===r.originPoint}class Ib{constructor(){this.members=[]}add(r){xc(this.members,r),r.scheduleRender()}remove(r){if(wc(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(r){const i=this.members.findIndex(l=>r===l);if(i===0)return!1;let o;for(let l=i;l>=0;l--){const c=this.members[l];if(c.isPresent!==!1){o=c;break}}return o?(this.promote(o),!0):!1}promote(r,i){const o=this.lead;if(r!==o&&(this.prevLead=o,this.lead=r,r.show(),o)){o.instance&&o.scheduleRender(),r.scheduleRender(),r.resumeFrom=o,i&&(r.resumeFrom.preserveOpacity=!0),o.snapshot&&(r.snapshot=o.snapshot,r.snapshot.latestValues=o.animationValues||o.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:l}=r.options;l===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:i,resumingFrom:o}=r;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Bb(t,r,i){let o="";const l=t.x.translate/r.x,c=t.y.translate/r.y,u=i?.z||0;if((l||c||u)&&(o=`translate3d(${l}px, ${c}px, ${u}px) `),(r.x!==1||r.y!==1)&&(o+=`scale(${1/r.x}, ${1/r.y}) `),i){const{transformPerspective:g,rotate:y,rotateX:v,rotateY:w,skewX:C,skewY:T}=i;g&&(o=`perspective(${g}px) ${o}`),y&&(o+=`rotate(${y}deg) `),v&&(o+=`rotateX(${v}deg) `),w&&(o+=`rotateY(${w}deg) `),C&&(o+=`skewX(${C}deg) `),T&&(o+=`skewY(${T}deg) `)}const p=t.x.scale*r.x,h=t.y.scale*r.y;return(p!==1||h!==1)&&(o+=`scale(${p}, ${h})`),o||"none"}const Eu=["","X","Y","Z"],Ub=1e3;let $b=0;function bu(t,r,i,o){const{latestValues:l}=r;l[t]&&(i[t]=l[t],r.setStaticValue(t,0),o&&(o[t]=0))}function ry(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:r}=t.options;if(!r)return;const i=U0(r);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:l,layoutId:c}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",je,!(l||c))}const{parent:o}=t;o&&!o.hasCheckedOptimisedAppear&&ry(o)}function iy({attachResizeListener:t,defaultParent:r,measureScroll:i,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(u={},p=r?.()){this.id=$b++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Wb),this.nodes.forEach(Qb),this.nodes.forEach(Xb),this.nodes.forEach(Kb)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new Rb)}addEventListener(u,p){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new bc),this.eventHandlers.get(u).add(p)}notifyListeners(u,...p){const h=this.eventHandlers.get(u);h&&h.notify(...p)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=x0(u)&&!LE(u),this.instance=u;const{layoutId:p,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),t){let y,v=0;const w=()=>this.root.updateBlockedByResize=!1;je.read(()=>{v=window.innerWidth}),t(u,()=>{const C=window.innerWidth;C!==v&&(v=C,this.root.updateBlockedByResize=!0,y&&y(),y=Ab(w,250),Fo.hasAnimatedSinceResize&&(Fo.hasAnimatedSinceResize=!1,this.nodes.forEach(Pm)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||h)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:w,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||g.getDefaultTransition()||nC,{onLayoutAnimationStart:j,onLayoutAnimationComplete:E}=g.getProps(),L=!this.targetLayout||!ny(this.targetLayout,C),F=!v&&w;if(this.options.layoutRoot||this.resumeFrom||F||v&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const M={...zc(T,"layout"),onPlay:j,onComplete:E};(g.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M),this.setAnimationOrigin(y,F)}else v||Pm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Fn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Jb),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ry(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(km);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Tm);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Yb),this.nodes.forEach(qb),this.nodes.forEach(Hb)):this.nodes.forEach(Tm),this.clearAllSnapshots();const p=gt.now();Xe.delta=fn(0,1e3/60,p-Xe.timestamp),Xe.timestamp=p,Xe.isProcessing=!0,du.update.process(Xe),du.preRender.process(Xe),du.render.process(Xe),Xe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_c.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Gb),this.sharedNodes.forEach(Zb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!lt(this.snapshot.measuredBox.x)&&!lt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Fe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(p=!1),p&&this.instance){const h=o(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:h,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!l)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!ty(this.projectionDelta),h=this.getTransformTemplate(),g=h?h(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;u&&this.instance&&(p||rr(this.latestValues)||y)&&(l(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return u&&(h=this.removeTransform(h)),rC(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return Fe();const p=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(iC))){const{scroll:g}=this.root;g&&(Vr(p.x,g.offset.x),Vr(p.y,g.offset.y))}return p}removeElementScroll(u){const p=Fe();if(At(p,u),this.scroll?.wasRoot)return p;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:y,options:v}=g;g!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&At(p,u),Vr(p.x,y.offset.x),Vr(p.y,y.offset.y))}return p}applyTransform(u,p=!1){const h=Fe();At(h,u);for(let g=0;g<this.path.length;g++){const y=this.path[g];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ir(h,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),rr(y.latestValues)&&Ir(h,y.latestValues)}return rr(this.latestValues)&&Ir(h,this.latestValues),h}removeTransform(u){const p=Fe();At(p,u);for(let h=0;h<this.path.length;h++){const g=this.path[h];if(!g.instance||!rr(g.latestValues))continue;Zu(g.latestValues)&&g.updateSnapshot();const y=Fe(),v=g.measurePageBox();At(y,v),xm(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return rr(this.latestValues)&&xm(p,this.latestValues),p}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Xe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=Xe.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Fe(),this.relativeTargetOrigin=Fe(),Hi(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Fe(),this.targetWithTransforms=Fe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),cb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):At(this.target,this.layout.layoutBox),z0(this.target,this.targetDelta)):At(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Fe(),this.relativeTargetOrigin=Fe(),Hi(this.relativeTargetOrigin,this.target,w.target),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Zu(this.parent.latestValues)||M0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const u=this.getLead(),p=!!this.resumingFrom||this!==u;let h=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Xe.timestamp&&(h=!1),h)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;At(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,w=this.treeScale.y;E5(this.layoutCorrected,this.treeScale,this.path,p),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Fe());const{target:C}=u;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(gm(this.prevProjectionDelta.x,this.projectionDelta.x),gm(this.prevProjectionDelta.y,this.projectionDelta.y)),qi(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==w||!Cm(this.projectionDelta.x,this.prevProjectionDelta.x)||!Cm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Br(),this.projectionDelta=Br(),this.projectionDeltaWithTransform=Br()}setAnimationOrigin(u,p=!1){const h=this.snapshot,g=h?h.latestValues:{},y={...this.latestValues},v=Br();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const w=Fe(),C=h?h.source:void 0,T=this.layout?this.layout.source:void 0,j=C!==T,E=this.getStack(),L=!E||E.members.length<=1,F=!!(j&&!L&&this.options.crossfade===!0&&!this.path.some(tC));this.animationProgress=0;let M;this.mixTargetDelta=$=>{const H=$/1e3;jm(v.x,u.x,H),jm(v.y,u.y,H),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Hi(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),eC(this.relativeTarget,this.relativeTargetOrigin,w,H),M&&Vb(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=Fe()),At(M,this.relativeTarget)),j&&(this.animationValues=y,Db(y,g,this.latestValues,H,F,L)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=H},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Fn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=je.update(()=>{Fo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=$r(0)),this.currentAnimation=jb(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),u.onUpdate&&u.onUpdate(p)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ub),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:p,target:h,layout:g,latestValues:y}=u;if(!(!p||!h||!g)){if(this!==u&&this.layout&&g&&sy(this.options.animationType,this.layout.layoutBox,g.layoutBox)){h=this.target||Fe();const v=lt(this.layout.layoutBox.x);h.x.min=u.target.x.min,h.x.max=h.x.min+v;const w=lt(this.layout.layoutBox.y);h.y.min=u.target.y.min,h.y.max=h.y.min+w}At(p,h),Ir(p,y),qi(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(u,p){this.sharedNodes.has(u)||this.sharedNodes.set(u,new Ib),this.sharedNodes.get(u).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:p,preserveFollowOpacity:h}={}){const g=this.getStack();g&&g.promote(this,h),u&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let p=!1;const{latestValues:h}=u;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const g={};h.z&&bu("z",u,g,this.animationValues);for(let y=0;y<Eu.length;y++)bu(`rotate${Eu[y]}`,u,g,this.animationValues),bu(`skew${Eu[y]}`,u,g,this.animationValues);u.render();for(const y in g)u.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);u.scheduleRender()}applyProjectionStyles(u,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=zo(p?.pointerEvents)||"",u.transform=h?h(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=zo(p?.pointerEvents)||""),this.hasProjected&&!rr(this.latestValues)&&(u.transform=h?h({},""):"none",this.hasProjected=!1);return}u.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let v=Bb(this.projectionDeltaWithTransform,this.treeScale,y);h&&(v=h(y,v)),u.transform=v;const{x:w,y:C}=this.projectionDelta;u.transformOrigin=`${w.origin*100}% ${C.origin*100}% 0`,g.animationValues?u.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:u.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const T in es){if(y[T]===void 0)continue;const{correct:j,applyTo:E,isCSSVariable:L}=es[T],F=v==="none"?y[T]:j(y[T],g);if(E){const M=E.length;for(let $=0;$<M;$++)u[E[$]]=F}else L?this.options.visualElement.renderState.vars[T]=F:u[T]=F}this.options.layoutId&&(u.pointerEvents=g===this?zo(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(km),this.root.sharedNodes.clear()}}}function qb(t){t.updateLayout()}function Hb(t){const r=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&r&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=t.layout,{animationType:l}=t.options,c=r.source!==t.layout.source;l==="size"?Lt(y=>{const v=c?r.measuredBox[y]:r.layoutBox[y],w=lt(v);v.min=i[y].min,v.max=v.min+w}):sy(l,r.layoutBox,i)&&Lt(y=>{const v=c?r.measuredBox[y]:r.layoutBox[y],w=lt(i[y]);v.max=v.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+w)});const u=Br();qi(u,i,r.layoutBox);const p=Br();c?qi(p,t.applyTransform(o,!0),r.measuredBox):qi(p,i,r.layoutBox);const h=!ty(u);let g=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:w}=y;if(v&&w){const C=Fe();Hi(C,r.layoutBox,v.layoutBox);const T=Fe();Hi(T,i,w.layoutBox),ny(C,T)||(g=!0),y.options.layoutRoot&&(t.relativeTarget=T,t.relativeTargetOrigin=C,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:r,delta:p,layoutDelta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function Wb(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Kb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Gb(t){t.clearSnapshot()}function km(t){t.clearMeasurements()}function Tm(t){t.isLayoutDirty=!1}function Yb(t){const{visualElement:r}=t.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),t.resetTransform()}function Pm(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Qb(t){t.resolveTargetDelta()}function Xb(t){t.calcProjection()}function Jb(t){t.resetSkewAndRotation()}function Zb(t){t.removeLeadSnapshot()}function jm(t,r,i){t.translate=Le(r.translate,0,i),t.scale=Le(r.scale,1,i),t.origin=r.origin,t.originPoint=r.originPoint}function Nm(t,r,i,o){t.min=Le(r.min,i.min,o),t.max=Le(r.max,i.max,o)}function eC(t,r,i,o){Nm(t.x,r.x,i.x,o),Nm(t.y,r.y,i.y,o)}function tC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const nC={duration:.45,ease:[.4,0,.1,1]},Rm=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Am=Rm("applewebkit/")&&!Rm("chrome/")?Math.round:Mt;function Lm(t){t.min=Am(t.min),t.max=Am(t.max)}function rC(t){Lm(t.x),Lm(t.y)}function sy(t,r,i){return t==="position"||t==="preserve-aspect"&&!ub(bm(r),bm(i),.2)}function iC(t){return t!==t.root&&t.scroll?.wasRoot}const sC=iy({attachResizeListener:(t,r)=>ts(t,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Cu={current:void 0},oy=iy({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Cu.current){const t=new sC({});t.mount(window),t.setOptions({layoutScroll:!0}),Cu.current=t}return Cu.current},resetTransform:(t,r)=>{t.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),oC={pan:{Feature:Cb},drag:{Feature:bb,ProjectionNode:oy,MeasureLayout:J0}};function Dm(t,r,i){const{props:o}=t;t.animationState&&o.whileHover&&t.animationState.setActive("whileHover",i==="Start");const l="onHover"+i,c=o[l];c&&je.postRender(()=>c(r,ds(r)))}class aC extends Un{mount(){const{current:r}=this.node;r&&(this.unmount=PE(r,(i,o)=>(Dm(this.node,o,"Start"),l=>Dm(this.node,l,"End"))))}unmount(){}}class lC extends Un{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ls(ts(this.node.current,"focus",()=>this.onFocus()),ts(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Om(t,r,i){const{props:o}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&o.whileTap&&t.animationState.setActive("whileTap",i==="Start");const l="onTap"+(i==="End"?"":i),c=o[l];c&&je.postRender(()=>c(r,ds(r)))}class uC extends Un{mount(){const{current:r}=this.node;r&&(this.unmount=AE(r,(i,o)=>(Om(this.node,o,"Start"),(l,{success:c})=>Om(this.node,l,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const oc=new WeakMap,ku=new WeakMap,cC=t=>{const r=oc.get(t.target);r&&r(t)},dC=t=>{t.forEach(cC)};function fC({root:t,...r}){const i=t||document;ku.has(i)||ku.set(i,{});const o=ku.get(i),l=JSON.stringify(r);return o[l]||(o[l]=new IntersectionObserver(dC,{root:t,...r})),o[l]}function pC(t,r,i){const o=fC(r);return oc.set(t,i),o.observe(t),()=>{oc.delete(t),o.unobserve(t)}}const hC={some:0,all:1};class mC extends Un{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:i,margin:o,amount:l="some",once:c}=r,u={root:i?i.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:hC[l]},p=h=>{const{isIntersecting:g}=h;if(this.isInView===g||(this.isInView=g,c&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),w=g?y:v;w&&w(h)};return pC(this.node.current,u,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:i}=this.node;["amount","margin","root"].some(gC(r,i))&&this.startObserver()}unmount(){}}function gC({viewport:t={}},{viewport:r={}}={}){return i=>t[i]!==r[i]}const yC={inView:{Feature:mC},tap:{Feature:uC},focus:{Feature:lC},hover:{Feature:aC}},vC={layout:{ProjectionNode:oy,MeasureLayout:J0}},xC={...rb,...yC,...oC,...vC},re=x5(xC,L5),wC=()=>{const t=dr(),r=ns(),{user:i,isAuthenticated:o,isAdmin:l,logout:c}=ra(),[u,p]=b.useState(!1),[h,g]=b.useState(!1);b.useEffect(()=>{const C=()=>{g(window.innerHeight<500&&window.innerWidth>window.innerHeight)};return C(),window.addEventListener("resize",C),window.addEventListener("orientationchange",C),()=>{window.removeEventListener("resize",C),window.removeEventListener("orientationchange",C)}},[]);const y=[{path:"/",label:"Inicio",icon:"🏠",public:!0},{path:"/equipos",label:"Equipos",icon:"⚽",public:!0},{path:"/partidos",label:"Partidos",icon:"🟢",public:!0},{path:"/posiciones",label:"Posiciones",icon:"🏆",public:!0},{path:"/fase-final",label:"Fase Final",icon:"🥇",public:!0},{path:"/admin",label:"Admin",icon:"⚙️",adminOnly:!0}],v=async()=>{try{await c(),p(!1),W.success("👋 Sesión cerrada exitosamente"),r("/")}catch{W.error("Error al cerrar sesión")}},w=y.filter(C=>C.adminOnly?o()&&l():!0);return m.jsxs(re.header,{className:`header ${h?"header-landscape":""}`,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[m.jsx("div",{className:"container",children:m.jsxs("nav",{className:"nav",children:[m.jsx(re.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:m.jsxs(Dt,{to:"/",className:"logo",children:[m.jsx(re.span,{animate:{textShadow:["0 0 10px #00dd4c","0 0 20px #00dd4c","0 0 10px #00dd4c"]},transition:{duration:2,repeat:1/0,repeatType:"reverse"},children:"⚽"}),m.jsx("span",{className:"logo-text",children:h?"CM14ED":"COPA MARACANÁ 14ED"})]})}),!h&&m.jsx("ul",{className:"nav-links",children:w.map((C,T)=>m.jsx(re.li,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*T,ease:"easeOut"},children:m.jsx(Dt,{to:C.path,className:`nav-link ${t.pathname===C.path?"active":""}`,children:m.jsxs(re.div,{className:"nav-item",whileHover:{scale:1.1,textShadow:"0 0 8px #00dd4c"},whileTap:{scale:.95},children:[m.jsx("span",{className:"nav-icon",children:C.icon}),m.jsx("span",{className:"nav-text",children:C.label})]})})},C.path))}),m.jsx("div",{className:"user-section",children:o()?m.jsxs(re.div,{className:"user-menu-container",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.3},children:[m.jsxs(re.button,{className:`user-button ${h?"user-button-compact":""}`,onClick:()=>p(!u),whileHover:{scale:1.05},whileTap:{scale:.95},children:[m.jsx("div",{className:"user-avatar",children:i?.role==="admin"?"👑":"👤"}),!h&&m.jsxs("div",{className:"user-info",children:[m.jsx("span",{className:"user-name",children:i?.nombre}),m.jsx("span",{className:"user-role",children:i?.role})]}),m.jsx("span",{className:"dropdown-arrow",children:u?"▲":"▼"})]}),m.jsx(BE,{children:u&&m.jsxs(re.div,{className:"user-dropdown",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:[m.jsxs("div",{className:"dropdown-header",children:[m.jsx("strong",{children:i?.username}),m.jsx("span",{children:i?.email})]}),m.jsx("div",{className:"dropdown-divider"}),m.jsx("button",{className:"dropdown-item",onClick:v,children:"🚪 Cerrar Sesión"})]})})]}):m.jsxs(re.div,{className:`auth-buttons ${h?"auth-buttons-compact":""}`,initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3},children:[m.jsx(re.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:m.jsx(Dt,{to:"/login",className:"btn btn-secondary btn-small",children:h?"Login":"Iniciar Sesión"})}),!h&&m.jsx(re.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:m.jsx(Dt,{to:"/register",className:"btn btn-small",children:"Registrarse"})})]})})]})}),u&&m.jsx("div",{className:"menu-overlay",onClick:()=>p(!1)}),m.jsx("style",{jsx:!0,children:`
        .user-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-menu-container {
          position: relative;
        }

        .user-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 0.5rem 1rem;
          color: var(--text-color);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .user-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary-color);
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .user-name {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-color);
        }

        .user-role {
          font-size: 0.75rem;
          color: var(--primary-color);
          text-transform: uppercase;
          font-weight: 500;
        }

        .dropdown-arrow {
          font-size: 0.7rem;
          color: var(--primary-color);
          transition: transform 0.3s ease;
        }

        .user-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          min-width: 200px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 1000;
        }

        .dropdown-header {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .dropdown-header strong {
          color: var(--primary-color);
          font-size: 0.9rem;
        }

        .dropdown-header span {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.8rem;
        }

        .dropdown-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0.75rem 0;
        }

        .dropdown-item {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          color: var(--text-color);
          padding: 0.5rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .dropdown-item:hover {
          background: rgba(220, 53, 69, 0.2);
          color: #dc3545;
        }

        .auth-buttons {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999;
          background: transparent;
        }

        .logo-text {
          margin-left: 0.5rem;
        }

        /* ====================================
           ESTILOS PARA VISTA HORIZONTAL
           ================================== */
        
        /* Header compacto en landscape */
        .header-landscape {
          padding: 5px 0 !important; /* Reducido drásticamente */
        }

        .header-landscape .nav {
          padding: 0.25rem 0; /* Padding mínimo */
        }

        .header-landscape .logo {
          font-size: 1rem; /* Logo más pequeño */
          line-height: 1;
        }

        .header-landscape .logo-text {
          font-size: 0.85rem;
          margin-left: 0.25rem;
        }

        /* Usuario compacto en landscape */
        .user-button-compact {
          padding: 0.25rem 0.5rem !important;
          border-radius: 20px;
          gap: 0.5rem;
        }

        .user-button-compact .user-avatar {
          width: 24px;
          height: 24px;
          font-size: 1rem;
        }

        .user-button-compact .dropdown-arrow {
          font-size: 0.6rem;
        }

        /* Auth buttons compactos */
        .auth-buttons-compact {
          gap: 0.5rem;
        }

        .auth-buttons-compact .btn {
          padding: 0.25rem 0.75rem;
          font-size: 0.8rem;
        }

        /* Responsive normal */
        @media (max-width: 768px) {
          .user-info {
            display: none;
          }
          
          .auth-buttons {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .user-dropdown {
            right: -1rem;
            min-width: 180px;
          }

          .nav-links {
            display: none;
          }
        }

        /* Optimización adicional para landscape móvil */
        @media (max-height: 500px) and (orientation: landscape) {
          .header {
            padding: 3px 0 !important;
          }
          
          .nav {
            padding: 0.2rem 0;
          }
          
          .logo {
            font-size: 0.9rem;
          }
          
          .logo-text {
            font-size: 0.8rem;
          }
          
          .user-button {
            padding: 0.2rem 0.4rem;
          }
          
          .user-avatar {
            width: 22px;
            height: 22px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .auth-buttons {
            gap: 0.25rem;
          }
          
          .btn-small {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
        }
      `})]})},SC=()=>{const[t,r]=b.useState(null),[i,o]=b.useState(!0);return b.useEffect(()=>{(async()=>{try{const c=await at.getTorneoInfo();r(c)}catch(c){console.error("Error cargando datos:",c)}finally{o(!1)}})()},[]),i?m.jsxs("div",{className:"loading",children:[m.jsx("div",{className:"loading-spinner"}),m.jsx("h2",{children:"Cargando Copa Maracaná 14ED..."})]}):m.jsxs("div",{className:"home-page",children:[m.jsx(re.section,{className:"hero-section",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:m.jsxs("div",{className:"hero-content glass-card",children:[m.jsx(re.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.3,type:"spring",stiffness:200},className:"hero-logo",children:m.jsx("div",{className:"logo-container",children:m.jsx(re.span,{className:"logo-emoji",animate:{rotate:[0,10,-10,0],scale:[1,1.1,.9,1]},transition:{duration:3,repeat:1/0,repeatType:"reverse"},children:"⚽"})})}),m.jsx(re.h1,{className:"hero-title",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:t?.torneo?.nombre||"Copa Maracaná 14ED"}),m.jsx(re.p,{className:"hero-subtitle",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},children:t?.torneo?.tipo==="futbol-7"?"El torneo más emocionante de fútbol 7":"Torneo deportivo"}),m.jsxs(re.div,{className:"hero-info",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.9},children:[m.jsxs("span",{className:"info-item",children:["🏢 ",t?.torneo?.organizador]}),m.jsxs("span",{className:"info-item",children:["🏟️ ",t?.torneo?.complejo,", ",t?.torneo?.ciudad]}),m.jsxs("span",{className:"info-item",children:["📅 ",t?.torneo?.año," - ",t?.torneo?.temporada]})]}),m.jsxs(re.div,{className:"hero-buttons",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.1},children:[m.jsx(Dt,{to:"/partidos",className:"btn btn-large",children:"🏟️ Ver Partidos"}),m.jsx(Dt,{to:"/posiciones",className:"btn btn-secondary btn-large",children:"🏆 Posiciones"})]})]})}),t?.estadisticas&&m.jsxs(re.section,{className:"stats-section",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.3},children:[m.jsx("h2",{className:"section-title",children:"Estadísticas del Torneo"}),m.jsxs("div",{className:"grid-container grid-4",children:[m.jsxs(re.div,{className:"info-card",whileHover:{scale:1.05,rotateY:5},transition:{type:"spring",stiffness:300},children:[m.jsx("div",{className:"icon",children:"⚽"}),m.jsx("h3",{children:t.estadisticas.totalEquipos}),m.jsx("p",{children:"Equipos Participantes"})]}),m.jsxs(re.div,{className:"info-card",whileHover:{scale:1.05,rotateY:5},transition:{type:"spring",stiffness:300},children:[m.jsx("div",{className:"icon",children:"🏟️"}),m.jsx("h3",{children:t.estadisticas.totalPartidos}),m.jsx("p",{children:"Partidos Programados"})]}),m.jsxs(re.div,{className:"info-card",whileHover:{scale:1.05,rotateY:5},transition:{type:"spring",stiffness:300},children:[m.jsx("div",{className:"icon",children:"📅"}),m.jsx("h3",{children:t.estadisticas.totalFechas}),m.jsx("p",{children:"Fechas del Torneo"})]}),m.jsxs(re.div,{className:"info-card",whileHover:{scale:1.05,rotateY:5},transition:{type:"spring",stiffness:300},children:[m.jsx("div",{className:"icon",children:"🏆"}),m.jsx("h3",{children:t.torneo?.grupos?.length||3}),m.jsx("p",{children:"Grupos"})]})]})]}),m.jsxs(re.section,{className:"quick-links",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:1.5},children:[m.jsx("h2",{className:"section-title",children:"Navegación Rápida"}),m.jsxs("div",{className:"grid-container grid-2",children:[m.jsxs(re.div,{className:"glass-card quick-link-card",whileHover:{scale:1.03,boxShadow:"0 10px 30px rgba(0, 221, 76, 0.3)"},children:[m.jsx("h3",{children:"⚽ Equipos por Grupo"}),m.jsx("p",{children:"Explora todos los equipos organizados por grupos A, B y C"}),m.jsx(Dt,{to:"/equipos",className:"btn",children:"Ver Equipos"})]}),m.jsxs(re.div,{className:"glass-card quick-link-card",whileHover:{scale:1.03,boxShadow:"0 10px 30px rgba(0, 102, 204, 0.3)"},children:[m.jsx("h3",{children:"🏟️ Calendario de Partidos"}),m.jsx("p",{children:"Consulta horarios, canchas y resultados de todos los partidos"}),m.jsx(Dt,{to:"/partidos",className:"btn btn-secondary",children:"Ver Calendario"})]}),m.jsxs(re.div,{className:"glass-card quick-link-card",whileHover:{scale:1.03,boxShadow:"0 10px 30px rgba(255, 193, 7, 0.3)"},children:[m.jsx("h3",{children:"🏆 Tabla de Posiciones"}),m.jsx("p",{children:"Rankings actualizados de todos los grupos del torneo"}),m.jsx(Dt,{to:"/posiciones",className:"btn",style:{backgroundColor:"#ffc107"},children:"Ver Posiciones"})]}),m.jsxs(re.div,{className:"glass-card quick-link-card",whileHover:{scale:1.03,boxShadow:"0 10px 30px rgba(220, 53, 69, 0.3)"},children:[m.jsx("h3",{children:"⚙️ Panel de Admin"}),m.jsx("p",{children:"Gestiona resultados, equipos y configuración del torneo"}),m.jsx(Dt,{to:"/admin",className:"btn",style:{backgroundColor:"#dc3545",color:"white"},children:"Administrar"})]})]})]})]})},EC="https://cm14-production.up.railway.app";function bC(t=""){return t.split(/\s+/).filter(Boolean).slice(0,2).map(r=>r[0]).join("").toUpperCase()}const Tu=({titulo:t,filas:r})=>m.jsxs(re.div,{className:"grupo-posiciones-card",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},children:[m.jsx("h3",{children:t}),m.jsx("div",{className:"posiciones-table-container",children:m.jsxs("table",{className:"posiciones-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{className:"pos-col",children:"#"}),m.jsx("th",{className:"equipo-col",children:"EQUIPO"}),m.jsx("th",{className:"pts-col",children:"PTS"}),m.jsx("th",{className:"num-col",children:"PJ"}),m.jsx("th",{className:"num-col",children:"G"}),m.jsx("th",{className:"num-col",children:"E"}),m.jsx("th",{className:"num-col",children:"P"}),m.jsx("th",{className:"num-col",children:"GF"}),m.jsx("th",{className:"num-col",children:"GC"}),m.jsx("th",{className:"num-col",children:"DG"})]})}),m.jsx("tbody",{children:r.map((i,o)=>m.jsxs(re.tr,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:o*.1},children:[m.jsx("td",{className:"pos-col posicion",children:i.posicion}),m.jsx("td",{className:"equipo-col",children:m.jsxs("div",{className:"equipo-row",children:[m.jsx("div",{className:"logo-container",children:i.equipo.logo?m.jsx("img",{src:`${EC}${i.equipo.logo}`,alt:i.equipo.nombre,className:"equipo-logo"}):m.jsx("div",{className:"logo-placeholder",children:bC(i.equipo.nombre)})}),m.jsx("span",{className:"equipo-nombre",children:i.equipo.nombre})]})}),m.jsx("td",{className:"pts-col puntos",children:i.puntos}),m.jsx("td",{className:"num-col",children:i.partidosJugados}),m.jsx("td",{className:"num-col",children:i.ganados}),m.jsx("td",{className:"num-col",children:i.empatados}),m.jsx("td",{className:"num-col",children:i.perdidos}),m.jsx("td",{className:"num-col",children:i.golesFavor}),m.jsx("td",{className:"num-col",children:i.golesContra}),m.jsxs("td",{className:"num-col diferencia",children:[i.diferenciaGoles>0?"+":"",i.diferenciaGoles]})]},`${i.equipo.id}-${o}`))})]})})]}),CC=()=>{const[t,r]=b.useState(null),[i,o]=b.useState(!0),[l,c]=b.useState(null),[u,p]=b.useState(new Date),h=async()=>{try{o(!0);const y=await at.getPosiciones();r(y.data),p(new Date),c(null)}catch(y){console.error(y),c("No se pudo cargar la tabla de posiciones")}finally{o(!1)}};b.useEffect(()=>{h()},[]);const g=()=>{h()};return i&&!t?m.jsxs("div",{className:"loading",children:[m.jsx("div",{className:"loading-spinner"}),m.jsx("h2",{children:"Cargando posiciones..."})]}):l?m.jsx("div",{className:"error",children:l}):m.jsxs("div",{className:"page",children:[m.jsxs(re.div,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:[m.jsx("h1",{className:"page-title",style:{margin:0},children:"🏆 Posiciones"}),m.jsx("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:m.jsxs("button",{onClick:g,disabled:i,className:"btn btn-small",style:{display:"flex",alignItems:"center",gap:"0.5rem",opacity:i?.6:1,cursor:i?"not-allowed":"pointer"},children:[m.jsx("span",{style:{display:"inline-block",animation:i?"spin 1s linear infinite":"none"},children:"🔄"}),i?"Actualizando...":"Actualizar"]})})]}),m.jsx(re.div,{className:"glass-card",style:{padding:"1rem",marginBottom:"2rem",textAlign:"center",background:"rgba(0, 221, 76, 0.1)",border:"1px solid rgba(0, 221, 76, 0.3)"},initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.2},children:m.jsxs("span",{style:{color:"var(--primary-color)",fontWeight:"600"},children:["📊 Última actualización: ",u.toLocaleTimeString()]})}),m.jsxs("div",{className:"grupos-container",children:[m.jsx(Tu,{titulo:"🏆 Grupo A",filas:t?.grupoA||[]}),m.jsx(Tu,{titulo:"🏆 Grupo B",filas:t?.grupoB||[]}),m.jsx(Tu,{titulo:"🏆 Grupo C",filas:t?.grupoC||[]})]}),m.jsx("style",{jsx:!0,children:`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ==============================================
           ESTILO EL UNIVERSO - TABLA COMPACTA
           ============================================== */

        .grupos-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .grupo-posiciones-card {
          background: var(--card-bg-color);
          border-radius: 15px;
          border: 1px solid var(--border-color);
          padding: 1.5rem;
          box-shadow: 0 4px 20px 0 var(--shadow-color);
        }

        .grupo-posiciones-card h3 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: var(--primary-color);
          font-size: 1.6rem;
          font-weight: 700;
        }

        .posiciones-table-container {
          overflow-x: auto;
          border-radius: 10px;
          background: rgba(52, 58, 64, 0.3);
        }

        .posiciones-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          background: transparent;
        }

        /* ================================
           COLUMNAS ESTILO EL UNIVERSO
           ================================ */
        
        .pos-col {
          width: 40px;
          text-align: center;
        }
        
        .equipo-col {
          width: 200px;
          text-align: left;
        }
        
        .pts-col {
          width: 60px;
          text-align: center;
          font-weight: bold;
        }
        
        .num-col {
          width: 45px;
          text-align: center;
        }

        /* ===============================
           HEADER ESTILO EL UNIVERSO
           =============================== */

        .posiciones-table th {
          background: rgba(52, 58, 64, 0.9);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 1rem 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .posiciones-table td {
          padding: 0.8rem 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          vertical-align: middle;
        }

        /* ===============================
           EQUIPO CON LOGO
           =============================== */

        .equipo-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .logo-container {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .equipo-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .logo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary-color);
          background: linear-gradient(135deg, rgba(0,221,76,.2), rgba(0,102,204,.2));
        }

        .equipo-nombre {
          font-weight: 600;
          color: #ffffff;
          font-size: 0.85rem;
          line-height: 1.2;
        }

        /* ===============================
           ESTILOS DE DATOS
           =============================== */

        .posicion {
          font-weight: bold;
          color: var(--primary-color);
          font-size: 0.9rem;
        }

        .puntos {
          font-weight: 900;
          color: var(--primary-color);
          font-size: 1.1rem;
          background: rgba(0, 221, 76, 0.1);
          border-radius: 6px;
          padding: 0.3rem 0.5rem;
        }

        .diferencia {
          font-weight: 600;
          color: #ffffff;
        }

        /* ===============================
           FILAS
           =============================== */

        .posiciones-table tbody tr {
          transition: background-color 0.2s ease;
          background: rgba(255, 255, 255, 0.02);
        }

        .posiciones-table tbody tr:hover {
          background: rgba(0, 221, 76, 0.05);
        }

        .posiciones-table tbody tr:nth-child(even) {
          background: rgba(255, 255, 255, 0.04);
        }

        .posiciones-table tbody tr:nth-child(even):hover {
          background: rgba(0, 221, 76, 0.05);
        }

        .posiciones-table tbody tr:last-child td {
          border-bottom: none;
        }

        /* =======================
           RESPONSIVE
           ======================= */

        @media (max-width: 768px) {
          .grupos-container {
            max-width: 100%;
          }
          
          .grupo-posiciones-card {
            padding: 1rem;
          }
          
          .grupo-posiciones-card h3 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
          }
          
          .posiciones-table {
            font-size: 0.75rem;
          }
          
          .posiciones-table th,
          .posiciones-table td {
            padding: 0.6rem 0.3rem;
          }
          
          .logo-container {
            width: 24px;
            height: 24px;
          }
          
          .equipo-row {
            gap: 0.4rem;
          }
          
          .equipo-nombre {
            font-size: 0.75rem;
          }
          
          .logo-placeholder {
            font-size: 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .posiciones-table {
            font-size: 0.7rem;
          }
          
          .posiciones-table th,
          .posiciones-table td {
            padding: 0.5rem 0.2rem;
          }
          
          .logo-container {
            width: 20px;
            height: 20px;
          }
          
          .equipo-nombre {
            font-size: 0.7rem;
          }
          
          .logo-placeholder {
            font-size: 0.55rem;
          }
          
          .puntos {
            font-size: 1rem;
            padding: 0.2rem 0.4rem;
          }
        }
      `})]})},kC="https://cm14-production.up.railway.app";function TC(t=""){return t.split(/\s+/).filter(Boolean).slice(0,3).map(r=>r[0]).join("").toUpperCase()}const PC=({estado:t})=>{const r=t==="finalizado"?"estado-badge estado-finalizado":t==="en-curso"?"estado-badge estado-en-curso":"estado-badge estado-programado",i=t==="finalizado"?"Finalizado":t==="en-curso"?"En curso":"Programado";return m.jsx("span",{className:r,children:i})},Ko=({equipo:t,size:r=56})=>{const i=!!t?.logo,o=i?`${kC}${t.logo}`:null;return m.jsx("div",{className:"logo-shell",style:{width:r,height:r},children:i?m.jsx("img",{src:o,alt:t?.nombre||"Equipo",style:{width:"100%",height:"100%",objectFit:"contain"},loading:"lazy"}):m.jsx("span",{className:"logo-initials",children:TC(t?.nombre||"")})})},Wi=({partido:t,index:r,esFaseFinal:i})=>{const{equipoLocal:o,equipoVisitante:l,hora:c,cancha:u,estado:p,golesLocal:h,golesVisitante:g,grupo:y,descripcion:v}=t,w=p==="finalizado"||p==="en-curso",C=h!==null&&g!==null;return m.jsxs(re.div,{className:"partido-card partido-card-horizontal",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.02*r},children:[m.jsxs("div",{className:"partido-header",children:[m.jsxs("div",{className:"partido-info-top",children:[m.jsx("span",{className:"partido-hora",children:c||"Por programar"}),!i&&m.jsxs("span",{className:"partido-grupo",children:["Grupo ",y]}),i&&m.jsx("span",{className:"partido-grupo",children:y}),m.jsxs("span",{className:"partido-cancha",children:["Cancha ",u||"TBD"]})]}),m.jsx(PC,{estado:p})]}),i&&v&&m.jsx("div",{className:"partido-descripcion",children:m.jsx("span",{children:v})}),m.jsxs("div",{className:"partido-enfrentamiento-horizontal",children:[m.jsxs("div",{className:"equipos-logos-row",children:[m.jsx(Ko,{equipo:o,size:40}),m.jsx("div",{className:"resultado-center",children:w&&C?m.jsxs("div",{className:"resultado",children:[m.jsx("span",{className:"goles",children:h}),m.jsx("span",{className:"sep",children:"-"}),m.jsx("span",{className:"goles",children:g})]}):m.jsx("span",{className:"vs-pill",children:"VS"})}),m.jsx(Ko,{equipo:l,size:40})]}),m.jsxs("div",{className:"equipos-nombres-row",children:[m.jsx("span",{className:"equipo-nombre equipo-local",children:o?.nombre||"TBD"}),m.jsx("span",{className:"equipo-nombre equipo-visitante",children:l?.nombre||"TBD"})]})]})]})},No=({grupo:t,partidos:r,equiposDescansan:i})=>{const o=r.filter(c=>c.grupo===t),l=i.filter(c=>c.grupo===t);return m.jsxs("div",{className:"grupo-column",children:[m.jsxs("div",{className:"grupo-header",children:[m.jsxs("h3",{children:["Grupo ",t]}),m.jsxs("span",{className:"partidos-count",children:[o.length," partidos"]})]}),m.jsx("div",{className:"partidos-grupo",children:o.map((c,u)=>m.jsx(Wi,{partido:c,index:u,esFaseFinal:!1},c.id))}),l.length>0&&m.jsxs("div",{className:"equipos-descansan-grupo",children:[m.jsx("h4",{children:"⏸ Descansan"}),m.jsx("div",{className:"equipos-descansan-list",children:l.map(c=>m.jsxs("div",{className:"equipo-descansa-card",children:[m.jsx(Ko,{equipo:c,size:24}),m.jsx("span",{className:"equipo-descansa-nombre",children:c.nombre})]},c.id))})]})]})},jC=({partidosPorCancha:t,esFaseFinal:r})=>{const i=["16:00","17:00","18:00","19:00","20:00","21:00","22:00"],o=i.map(c=>{const u=t.NORTE.find(h=>h.hora===c)||null,p=t.SUR.find(h=>h.hora===c)||null;return{horario:c,norte:u,sur:p}}),l=[...t.NORTE.filter(c=>!c.hora||!i.includes(c.hora)),...t.SUR.filter(c=>!c.hora||!i.includes(c.hora))];return m.jsxs("div",{className:"vista-por-cancha",children:[m.jsxs("div",{className:"canchas-headers",children:[m.jsxs("div",{className:"cancha-header-col",children:[m.jsx("h3",{children:"Cancha NORTE"}),m.jsxs("span",{className:"partidos-count",children:[t.NORTE.length," partidos"]})]}),m.jsxs("div",{className:"cancha-header-col",children:[m.jsx("h3",{children:"Cancha SUR"}),m.jsxs("span",{className:"partidos-count",children:[t.SUR.length," partidos"]})]})]}),m.jsx("div",{className:"partidos-sincronizados",children:o.map(({horario:c,norte:u,sur:p})=>m.jsxs("div",{className:"fila-horario",children:[m.jsx("div",{className:"horario-label",children:m.jsx("span",{children:c})}),m.jsxs("div",{className:"partidos-fila",children:[m.jsx("div",{className:"partido-slot",children:u?m.jsx(Wi,{partido:u,index:0,esFaseFinal:r}):m.jsx("div",{className:"slot-vacio",children:m.jsx("span",{children:"Sin partido"})})}),m.jsx("div",{className:"partido-slot",children:p?m.jsx(Wi,{partido:p,index:0,esFaseFinal:r}):m.jsx("div",{className:"slot-vacio",children:m.jsx("span",{children:"Sin partido"})})})]})]},c))}),l.length>0&&m.jsxs("div",{className:"partidos-sin-horario",children:[m.jsx("h4",{children:"📅 Por programar"}),m.jsx("div",{className:"partidos-sin-horario-grid",children:l.map((c,u)=>m.jsx(Wi,{partido:c,index:u,esFaseFinal:r},c.id))})]})]})},NC=()=>{const[t,r]=b.useState([]),[i,o]=b.useState(null),[l,c]=b.useState(null),[u,p]=b.useState(!0),[h,g]=b.useState(null),[y,v]=b.useState("ALL");b.useEffect(()=>{(async()=>{try{const L=(await at.getFechas()).data||[];r(L),L.length&&o(L[0].id)}catch{g("No se pudieron cargar las fechas")}})()},[]),b.useEffect(()=>{i&&(async()=>{try{p(!0);const E=await at.getPartidosPorFecha(i);c(E.data),g(null)}catch{g("No se pudieron cargar los partidos de la fecha")}finally{p(!1)}})()},[i]);const w=i>=10&&i<=14,C=b.useMemo(()=>{if(!l)return{A:[],B:[],C:[]};const E=l.partidos||[];return{A:E.filter(L=>L.grupo==="A"),B:E.filter(L=>L.grupo==="B"),C:E.filter(L=>L.grupo==="C")}},[l]),T=b.useMemo(()=>{if(!l)return{NORTE:[],SUR:[]};const L=[...l.partidos||[]].sort((F,M)=>!F.hora&&!M.hora?0:!F.hora||!M.hora?1:F.hora.localeCompare(M.hora));return{NORTE:L.filter(F=>F.cancha==="NORTE"),SUR:L.filter(F=>F.cancha==="SUR")}},[l]),j=b.useMemo(()=>{if(!l?.equiposDescansan)return{A:[],B:[],C:[]};const E=l.equiposDescansan;return{A:E.filter(L=>L.grupo==="A"),B:E.filter(L=>L.grupo==="B"),C:E.filter(L=>L.grupo==="C")}},[l]);return m.jsxs("div",{className:"page",children:[m.jsx("h1",{className:"page-title",children:"🟢 Partidos"}),m.jsx("div",{className:"glass-card tabs-fechas",children:t.map(E=>{const L=i===E.id;return m.jsxs("button",{className:`btn btn-small ${L?"":"btn-secondary"}`,onClick:()=>o(E.id),"aria-pressed":L,title:`Fecha ${E.numero}${E.fecha?` (${E.fecha})`:""}`,children:[E.numero<=9?`Fecha ${E.numero}`:E.descripcion,L&&E.fecha&&m.jsxs("span",{className:"fecha-real",children:["(",E.fecha,")"]})]},E.id)})}),!w&&m.jsx("div",{className:"glass-card tabs-vista",children:[{key:"ALL",label:"Todos los grupos"},{key:"A",label:"Grupo A"},{key:"B",label:"Grupo B"},{key:"C",label:"Grupo C"},{key:"CANCHA",label:"Por Cancha"}].map(({key:E,label:L})=>m.jsx("button",{className:`btn btn-small ${y===E?"":"btn-secondary"}`,onClick:()=>v(E),children:L},E))}),u&&m.jsxs("div",{className:"loading",children:[m.jsx("div",{className:"loading-spinner"}),m.jsx("h2",{children:"Cargando partidos..."})]}),h&&m.jsx("div",{className:"error",children:h}),!u&&!h&&m.jsx("div",{className:`vista-container ${y==="CANCHA"||w?"vista-cancha":"vista-grupos"}`,children:w?m.jsx("div",{className:"fase-final-container",children:l?.partidos?.sort((E,L)=>!E.hora&&!L.hora?0:E.hora?L.hora?E.hora.localeCompare(L.hora):-1:1).map((E,L)=>m.jsx(Wi,{partido:E,index:L,esFaseFinal:!0},E.id))}):y==="CANCHA"?m.jsx(jC,{partidosPorCancha:T,esFaseFinal:!1}):y==="ALL"?m.jsxs(m.Fragment,{children:[m.jsx(No,{grupo:"A",partidos:C.A,equiposDescansan:j.A}),m.jsx(No,{grupo:"B",partidos:C.B,equiposDescansan:j.B}),m.jsx(No,{grupo:"C",partidos:C.C,equiposDescansan:j.C})]}):m.jsx("div",{className:"single-grupo-view",children:m.jsx(No,{grupo:y,partidos:C[y],equiposDescansan:j[y]})})}),!u&&!h&&!w&&y==="CANCHA"&&l?.equiposDescansan?.length>0&&m.jsxs("div",{className:"equipos-descansan-global",children:[m.jsx("h3",{children:"⏸ Equipos que descansan en esta fecha"}),m.jsx("div",{className:"equipos-descansan-list-global",children:l.equiposDescansan.map(E=>m.jsxs("div",{className:"equipo-descansa-card-global",children:[m.jsx(Ko,{equipo:E,size:32}),m.jsxs("div",{className:"equipo-descansa-info",children:[m.jsx("span",{className:"equipo-descansa-nombre",children:E.nombre}),m.jsxs("span",{className:"equipo-descansa-grupo",children:["Grupo ",E.grupo]})]})]},E.id))})]}),m.jsx("style",{jsx:!0,children:`
        .tabs-fechas, .tabs-vista {
          display: flex; flex-wrap: wrap; gap: .5rem;
          justify-content: center; margin-bottom: .5rem;
        }
        .fecha-real { opacity: .7; margin-left: 6px; }

        .vista-container {
          margin: 1.25rem 0 2rem;
          align-items: start;
        }

        .vista-grupos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* Fase Final Container */
        .fase-final-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        /* Descripción del partido */
        .partido-descripcion {
          text-align: center;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          margin-bottom: 0.5rem;
        }

        .vista-por-cancha {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .canchas-headers {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .cancha-header-col {
          background: var(--card-bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cancha-header-col h3 {
          color: var(--secondary-color);
          margin: 0;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .partidos-sincronizados {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .fila-horario {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 1rem;
          align-items: start;
        }

        .horario-label {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,221,76,0.15);
          border: 1px solid rgba(0,221,76,0.35);
          border-radius: 8px;
          padding: 0.75rem 0.5rem;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--primary-color);
          min-height: 60px;
          position: sticky;
          top: 1rem;
        }

        .partidos-fila {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .partido-slot {
          min-height: 120px;
          display: flex;
          align-items: stretch;
        }

        .partido-slot .partido-card {
          width: 100%;
          margin: 0;
        }

        .slot-vacio {
          background: rgba(255,255,255,0.03);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          font-style: italic;
          font-size: 0.9rem;
          width: 100%;
          min-height: 120px;
        }

        .partidos-sin-horario {
          margin-top: 2rem;
          text-align: center;
        }

        .partidos-sin-horario h4 {
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .partidos-sin-horario-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }

        .single-grupo-view {
          max-width: 800px;
          margin: 0 auto;
        }

        .grupo-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cancha-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .grupo-header, .cancha-header {
          background: var(--card-bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .grupo-header h3, .cancha-header h3 {
          color: var(--primary-color);
          margin: 0;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .cancha-header h3 {
          color: var(--secondary-color);
        }

        .partidos-count {
          background: rgba(0,221,76,0.15);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .partidos-grupo, .partidos-cancha {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .no-partidos {
          background: rgba(255,255,255,0.05);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          color: rgba(255,255,255,0.6);
          font-style: italic;
        }

        .partido-card {
          background: var(--card-bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 0.875rem;
          display: flex;
          flex-direction: column;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        
        .partido-card-horizontal {
          min-height: 120px;
        }

        .partido-card:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 6px 20px rgba(0,0,0,.25); 
        }

        .partido-header {
          display: flex; 
          justify-content: space-between; 
          align-items: center;
          margin-bottom: .75rem; 
          padding-bottom: .6rem;
          border-bottom: 1px solid var(--border-color);
        }
        .partido-info-top { 
          display: flex; 
          gap: 1rem; 
          align-items: center; 
          flex-wrap: wrap; 
        }
        .partido-hora { 
          font-weight: 800; 
          color: var(--primary-color); 
          font-size: 0.9rem;
        }
        .partido-grupo { 
          font-size: .9rem; 
          color: var(--secondary-color); 
          font-weight: 600; 
        }
        .partido-cancha { 
          font-size: .8rem; 
          color: rgba(255,255,255,.8); 
          background: rgba(255,255,255,.08); 
          padding: .2rem .6rem; 
          border-radius: 8px; 
        }

        .partido-enfrentamiento-horizontal {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }

        .equipos-logos-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 280px;
        }

        .resultado-center {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 60px;
        }

        .equipos-nombres-row {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 280px;
          gap: 0.5rem;
        }

        .equipo-nombre {
          font-weight: 600; 
          color: var(--text-color);
          font-size: 0.8rem; 
          line-height: 1.2;
          text-align: center;
          flex: 1;
          white-space: nowrap; 
          overflow: hidden; 
          text-overflow: ellipsis;
        }

        .equipo-local {
          text-align: left;
        }

        .equipo-visitante {
          text-align: right;
        }

        .partido-card-horizontal .logo-shell {
          width: 40px; 
          height: 40px;
        }

        .partido-card-horizontal .logo-initials { 
          font-size: 10px; 
        }

        .logo-shell {
          display: grid; 
          place-items: center;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(0,221,76,.12), rgba(0,102,204,.12));
          border: 1px solid rgba(255,255,255,.1);
          overflow: hidden;
        }
        .logo-initials { 
          font-weight: 800; 
          letter-spacing: .5px; 
          color: var(--text-color); 
        }

        .vs-pill {
          font-size: 0.9rem; 
          font-weight: 800; 
          line-height: 1;
          color: rgba(255,255,255,.75);
          background: rgba(255,255,255,.12);
          padding: .4rem .7rem; 
          border-radius: 8px;
        }
        .resultado {
          display: flex; 
          align-items: center; 
          gap: .5rem;
          background: rgba(0,221,76,.12);
          padding: .4rem .7rem; 
          border-radius: 8px;
          border: 1px solid rgba(0,221,76,.35);
        }
        .goles { 
          font-size: 1rem; 
          font-weight: 800; 
          color: var(--primary-color); 
          min-width: 1rem; 
          text-align: center; 
        }
        .sep { 
          color: rgba(255,255,255,.7); 
          font-weight: 700; 
        }

        .equipos-descansan-grupo {
          background: rgba(255,165,0,.08);
          border: 1px solid rgba(255,165,0,.25);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
        }

        .equipos-descansan-grupo h4 {
          color: #ffa500;
          margin: 0 0 0.75rem 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .equipos-descansan-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .equipo-descansa-card {
          display: flex; 
          align-items: center; 
          gap: .5rem;
          background: rgba(255,165,0,.15); 
          color: #ffa500;
          padding: .5rem .75rem; 
          border-radius: 8px; 
          border: 1px solid rgba(255,165,0,.35);
          justify-content: center;
        }
        .equipo-descansa-nombre { 
          font-weight: 600; 
          font-size: .85rem; 
        }

        .equipos-descansan-global {
          margin: 2rem 0;
          text-align: center;
        }

        .equipos-descansan-global h3 {
          color: #ffa500;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .equipos-descansan-list-global {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .equipo-descansa-card-global {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255,165,0,.15);
          border: 1px solid rgba(255,165,0,.35);
          padding: 0.75rem 1rem;
          border-radius: 12px;
          min-width: 180px;
        }

        .equipo-descansa-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .equipo-descansa-info .equipo-descansa-nombre {
          color: #ffa500;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .equipo-descansa-grupo {
          color: rgba(255,165,0,0.8);
          font-size: 0.8rem;
          font-weight: 500;
        }

        @media (max-width: 1200px) {
          .vista-grupos {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .grupo-column, .cancha-column {
            max-width: 600px;
            margin: 0 auto;
          }

          .canchas-headers {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .fila-horario {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .horario-label {
            position: static;
            margin-bottom: 0.5rem;
          }

          .partidos-fila {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .fase-final-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .partido-header { 
            flex-direction: column; 
            align-items: flex-start; 
            gap: .5rem; 
          }
          
          .equipos-logos-row {
            max-width: 250px;
          }
          
          .equipos-nombres-row {
            max-width: 250px;
          }
          
          .equipo-nombre {
            font-size: 0.75rem;
          }
          
          .vista-container {
            gap: 1.5rem;
          }
          
          .equipos-descansan-list-global {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .equipos-logos-row {
            max-width: 220px;
          }
          
          .equipos-nombres-row {
            max-width: 220px;
          }
          
          .partido-card-horizontal .logo-shell {
            width: 35px; 
            height: 35px;
          }
          
          .equipo-nombre {
            font-size: 0.7rem;
          }
          
          .partido-slot {
            min-height: 100px;
          }
          
          .slot-vacio {
            min-height: 100px;
          }
        }
      `})]})},RC="https://cm14-production.up.railway.app";function AC(t=""){return t.split(/\s+/).filter(Boolean).slice(0,2).map(r=>r[0]).join("").toUpperCase()}const Pu=({titulo:t,filas:r})=>m.jsxs(re.div,{className:"grupo-posiciones-card",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},children:[m.jsx("h3",{children:t}),m.jsx("div",{className:"posiciones-table-container",children:m.jsxs("table",{className:"posiciones-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{className:"pos-col",children:"#"}),m.jsx("th",{className:"equipo-col",children:"EQUIPO"}),m.jsx("th",{className:"pts-col",children:"PTS"}),m.jsx("th",{className:"dg-col",children:"DG"}),m.jsx("th",{className:"num-col",children:"PJ"}),m.jsx("th",{className:"num-col",children:"G"}),m.jsx("th",{className:"num-col",children:"E"}),m.jsx("th",{className:"num-col",children:"P"}),m.jsx("th",{className:"num-col",children:"GF"}),m.jsx("th",{className:"num-col",children:"GC"})]})}),m.jsx("tbody",{children:r.map((i,o)=>m.jsxs(re.tr,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:o*.1},children:[m.jsx("td",{className:"pos-col posicion",children:i.posicion}),m.jsx("td",{className:"equipo-col",children:m.jsxs("div",{className:"equipo-row",children:[m.jsx("div",{className:"logo-container",children:i.equipo.logo?m.jsx("img",{src:`${RC}${i.equipo.logo}`,alt:i.equipo.nombre,className:"equipo-logo"}):m.jsx("div",{className:"logo-placeholder",children:AC(i.equipo.nombre)})}),m.jsx("span",{className:"equipo-nombre",children:i.equipo.nombre})]})}),m.jsx("td",{className:"pts-col puntos",children:i.puntos}),m.jsxs("td",{className:"dg-col diferencia",children:[i.diferenciaGoles>0?"+":"",i.diferenciaGoles]}),m.jsx("td",{className:"num-col",children:i.partidosJugados}),m.jsx("td",{className:"num-col",children:i.ganados}),m.jsx("td",{className:"num-col",children:i.empatados}),m.jsx("td",{className:"num-col",children:i.perdidos}),m.jsx("td",{className:"num-col",children:i.golesFavor}),m.jsx("td",{className:"num-col",children:i.golesContra})]},`${i.equipo.id}-${o}`))})]})})]}),LC=()=>{const[t,r]=b.useState(null),[i,o]=b.useState(!0),[l,c]=b.useState(null),[u,p]=b.useState(new Date),h=async()=>{try{o(!0);const y=await at.getPosiciones();r(y.data),p(new Date),c(null)}catch(y){console.error(y),c("No se pudo cargar la tabla de posiciones")}finally{o(!1)}};b.useEffect(()=>{h()},[]);const g=()=>{h()};return i&&!t?m.jsxs("div",{className:"loading",children:[m.jsx("div",{className:"loading-spinner"}),m.jsx("h2",{children:"Cargando posiciones..."})]}):l?m.jsx("div",{className:"error",children:l}):m.jsxs("div",{className:"page",children:[m.jsxs(re.div,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:[m.jsx("h1",{className:"page-title",style:{margin:0},children:"🏆 Posiciones"}),m.jsx("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:m.jsxs("button",{onClick:g,disabled:i,className:"btn btn-small",style:{display:"flex",alignItems:"center",gap:"0.5rem",opacity:i?.6:1,cursor:i?"not-allowed":"pointer"},children:[m.jsx("span",{style:{display:"inline-block",animation:i?"spin 1s linear infinite":"none"},children:"🔄"}),i?"Actualizando...":"Actualizar"]})})]}),m.jsx(re.div,{className:"glass-card",style:{padding:"1rem",marginBottom:"2rem",textAlign:"center",background:"rgba(0, 221, 76, 0.1)",border:"1px solid rgba(0, 221, 76, 0.3)"},initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.2},children:m.jsxs("span",{style:{color:"var(--primary-color)",fontWeight:"600"},children:["📊 Última actualización: ",u.toLocaleTimeString()]})}),m.jsxs("div",{className:"grupos-container",children:[m.jsx(Pu,{titulo:"🏆 Grupo A",filas:t?.grupoA||[]}),m.jsx(Pu,{titulo:"🏆 Grupo B",filas:t?.grupoB||[]}),m.jsx(Pu,{titulo:"🏆 Grupo C",filas:t?.grupoC||[]})]}),m.jsx("style",{jsx:!0,children:`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ==============================================
           ESTILO EL UNIVERSO - TABLA COMPACTA
           ============================================== */

        .grupos-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 650px;
          margin: 0 auto;
        }

        .grupo-posiciones-card {
          background: var(--card-bg-color);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          padding: 1rem;
          box-shadow: 0 4px 20px 0 var(--shadow-color);
        }

        .grupo-posiciones-card h3 {
          text-align: center;
          margin-bottom: 1rem;
          color: var(--primary-color);
          font-size: 1.3rem;
          font-weight: 700;
        }

        .posiciones-table-container {
          overflow-x: auto;
          border-radius: 10px;
          background: rgba(52, 58, 64, 0.3);
          position: relative;
        }

        .posiciones-table {
          width: 100%;
          min-width: 550px;
          border-collapse: collapse;
          font-size: 0.8rem;
          background: transparent;
          position: relative;
        }

        /* ================================
           COLUMNAS CON STICKY - PTS Y DG DESPUÉS DE EQUIPO
           ================================ */
        
        .pos-col {
          width: 30px;
          text-align: center;
          position: sticky;
          left: 0;
          background: rgba(52, 58, 64, 0.95);
          z-index: 5;
        }
        
        .equipo-col {
          width: 140px;
          text-align: left;
          position: sticky;
          left: 30px;
          background: rgba(52, 58, 64, 0.95);
          z-index: 5;
        }
        
        .pts-col {
          width: 50px;
          text-align: center;
          font-weight: bold;
          position: sticky;
          left: 170px;
          background: rgba(52, 58, 64, 0.95);
          z-index: 5;
          border-right: 1px solid rgba(0, 221, 76, 0.3);
        }
        
        .dg-col {
          width: 40px;
          text-align: center;
          position: sticky;
          left: 220px;
          background: rgba(52, 58, 64, 0.95);
          z-index: 5;
          border-right: 1px solid rgba(0, 221, 76, 0.3);
        }
        
        .num-col {
          width: 35px;
          text-align: center;
        }

        /* ===============================
           HEADER ESTILO EL UNIVERSO
           =============================== */

        .posiciones-table th {
          background: rgba(52, 58, 64, 0.9);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          padding: 0.8rem 0.3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        
        /* Headers sticky también */
        .posiciones-table th.pos-col {
          left: 0;
          z-index: 11;
        }
        
        .posiciones-table th.equipo-col {
          left: 30px;
          z-index: 11;
        }
        
        .posiciones-table th.pts-col {
          left: 170px;
          z-index: 11;
          border-right: 1px solid rgba(0, 221, 76, 0.3);
        }
        
        .posiciones-table th.dg-col {
          left: 220px;
          z-index: 11;
          border-right: 1px solid rgba(0, 221, 76, 0.3);
        }

        .posiciones-table td {
          padding: 0.7rem 0.3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          vertical-align: middle;
          height: 44px;
        }
        
        /* Celdas sticky con fondo */
        .posiciones-table td.pos-col,
        .posiciones-table td.equipo-col,
        .posiciones-table td.dg-col,
        .posiciones-table td.pts-col {
          background: inherit;
        }

        /* ===============================
           EQUIPO CON LOGO
           =============================== */

        .equipo-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          height: 100%;
          min-height: 32px;
          padding: 0;
        }

        .logo-container {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        }

        .equipo-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .logo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.5rem;
          font-weight: 700;
          color: var(--primary-color);
          background: linear-gradient(135deg, rgba(0,221,76,.2), rgba(0,102,204,.2));
        }

        .equipo-nombre {
          font-weight: 600;
          color: #ffffff;
          font-size: 0.75rem;
          line-height: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0;
          padding: 0;
          align-self: center;
        }

        /* ===============================
           ESTILOS DE DATOS
           =============================== */

        .posicion {
          font-weight: bold;
          color: var(--primary-color);
          font-size: 0.8rem;
        }

        .puntos {
          font-weight: 900;
          color: var(--primary-color);
          font-size: 0.9rem;
          background: rgba(0, 221, 76, 0.1);
          border-radius: 4px;
          padding: 0.2rem 0.3rem;
        }

        .diferencia {
          font-weight: 600;
          color: #ffffff;
          font-size: 0.75rem;
        }

        /* Estados de fila - con sticky mejorado */
        .posiciones-table tbody tr {
          transition: background-color 0.2s ease;
          background: rgba(255, 255, 255, 0.02);
        }

        .posiciones-table tbody tr:hover {
          background: rgba(0, 221, 76, 0.05);
        }

        .posiciones-table tbody tr:nth-child(even) {
          background: rgba(255, 255, 255, 0.04);
        }

        .posiciones-table tbody tr:nth-child(even):hover {
          background: rgba(0, 221, 76, 0.05);
        }

        /* Mantener fondo en celdas sticky al hacer hover */
        .posiciones-table tbody tr:hover .pos-col,
        .posiciones-table tbody tr:hover .equipo-col,
        .posiciones-table tbody tr:hover .dg-col,
        .posiciones-table tbody tr:hover .pts-col {
          background: rgba(0, 221, 76, 0.05);
        }

        .posiciones-table tbody tr:nth-child(even):hover .pos-col,
        .posiciones-table tbody tr:nth-child(even):hover .equipo-col,
        .posiciones-table tbody tr:nth-child(even):hover .dg-col,
        .posiciones-table tbody tr:nth-child(even):hover .pts-col {
          background: rgba(0, 221, 76, 0.05);
        }

        .posiciones-table tbody tr:last-child td {
          border-bottom: none;
        }

        /* =======================
           RESPONSIVE
           ======================= */

        @media (max-width: 768px) {
          .grupos-container {
            max-width: 100%;
          }
          
          .grupo-posiciones-card {
            padding: 0.8rem;
          }
          
          .grupo-posiciones-card h3 {
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
          }
          
          .posiciones-table {
            font-size: 0.7rem;
            min-width: 480px;
          }
          
          .posiciones-table th,
          .posiciones-table td {
            padding: 0.5rem 0.2rem;
          }
          
          .pos-col {
            width: 25px;
          }
          
          .equipo-col {
            width: 120px;
            left: 25px;
          }
          
          .pts-col {
            width: 45px;
            left: 145px;
          }
          
          .dg-col {
            width: 35px;
            left: 190px;
          }
          
          .num-col {
            width: 30px;
          }
          
          .logo-container {
            width: 18px;
            height: 18px;
          }
          
          .equipo-row {
            gap: 0.3rem;
          }
          
          .equipo-nombre {
            font-size: 0.7rem;
          }
          
          .logo-placeholder {
            font-size: 0.45rem;
          }
        }

        @media (max-width: 480px) {
          .posiciones-table {
            font-size: 0.65rem;
          }
          
          .posiciones-table th,
          .posiciones-table td {
            padding: 0.4rem 0.15rem;
          }
          
          .logo-container {
            width: 16px;
            height: 16px;
          }
          
          .equipo-nombre {
            font-size: 0.65rem;
          }
          
          .logo-placeholder {
            font-size: 0.4rem;
          }
          
          .puntos {
            font-size: 0.8rem;
            padding: 0.15rem 0.25rem;
          }
          
          .pos-col {
            width: 25px;
          }
          
          .equipo-col {
            width: 120px;
          }
          
          .pts-col {
            width: 40px;
          }
          
          .num-col {
            width: 30px;
          }
        }
      `})]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),OC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,i,o)=>o?o.toUpperCase():i.toLowerCase()),Mm=t=>{const r=OC(t);return r.charAt(0).toUpperCase()+r.slice(1)},ay=(...t)=>t.filter((r,i,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===i).join(" ").trim(),MC=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=b.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:c,iconNode:u,...p},h)=>b.createElement("svg",{ref:h,...zC,width:r,height:r,stroke:t,strokeWidth:o?Number(i)*24/Number(r):i,className:ay("lucide",l),...!c&&!MC(p)&&{"aria-hidden":"true"},...p},[...u.map(([g,y])=>b.createElement(g,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=(t,r)=>{const i=b.forwardRef(({className:o,...l},c)=>b.createElement(FC,{ref:c,iconNode:r,className:ay(`lucide-${DC(Mm(t))}`,`lucide-${t}`,o),...l}));return i.displayName=Mm(t),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],VC=la("save",_C);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],BC=la("target",IC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],ly=la("trophy",UC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ju=la("zap",$C),qC="https://cm14-production.up.railway.app";function HC(t=""){return t.split(/\s+/).filter(Boolean).slice(0,3).map(r=>r[0]).join("").toUpperCase()}const WC=({estado:t})=>{const r=t==="finalizado"?"estado-badge estado-finalizado":t==="en-curso"?"estado-badge estado-en-curso":"estado-badge estado-programado",i=t==="finalizado"?"Finalizado":t==="en-curso"?"En curso":"Programado";return m.jsx("span",{className:r,children:i})},zm=({equipo:t,size:r=56})=>{const i=!!t?.logo,o=i?`${qC}${t.logo}`:null;return m.jsx("div",{className:"logo-shell",style:{width:r,height:r},children:i?m.jsx("img",{src:o,alt:t?.nombre||"Equipo",style:{width:"100%",height:"100%",objectFit:"contain"},loading:"lazy"}):m.jsx("span",{className:"logo-initials",children:HC(t?.nombre||"")})})},KC=({partido:t,index:r})=>{const{equipoLocal:i,equipoVisitante:o,hora:l,cancha:c,estado:u,golesLocal:p,golesVisitante:h,descripcion:g}=t,y=u==="finalizado"||u==="en-curso",v=p!==null&&h!==null,w=i?.nombre||g?.split(" vs ")[0]||"TBD",C=o?.nombre||g?.split(" vs ")[1]||"TBD";return m.jsxs(re.div,{className:"partido-card-ff",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.02*r},children:[m.jsxs("div",{className:"partido-header-ff",children:[m.jsxs("div",{className:"partido-info-top-ff",children:[l&&m.jsx("span",{className:"partido-hora-ff",children:l}),c&&m.jsxs("span",{className:"partido-cancha-ff",children:["Cancha ",c]})]}),m.jsx(WC,{estado:u})]}),g&&m.jsx("div",{className:"partido-descripcion",children:m.jsx("span",{children:g})}),m.jsxs("div",{className:"partido-enfrentamiento-ff",children:[m.jsxs("div",{className:"equipo-ff",children:[i?m.jsx(zm,{equipo:i,size:48}):m.jsx("div",{className:"logo-placeholder",children:"?"}),m.jsx("span",{className:"equipo-nombre-ff",children:w})]}),m.jsx("div",{className:"resultado-center-ff",children:y&&v?m.jsxs("div",{className:"resultado-ff",children:[m.jsx("span",{className:"goles-ff",children:p}),m.jsx("span",{className:"sep-ff",children:"-"}),m.jsx("span",{className:"goles-ff",children:h})]}):m.jsx("span",{className:"vs-pill-ff",children:"VS"})}),m.jsxs("div",{className:"equipo-ff",children:[o?m.jsx(zm,{equipo:o,size:48}):m.jsx("div",{className:"logo-placeholder",children:"?"}),m.jsx("span",{className:"equipo-nombre-ff",children:C})]})]})]})},GC=()=>{const[t,r]=b.useState([]),[i,o]=b.useState(null),[l,c]=b.useState([]),[u,p]=b.useState(!0),[h,g]=b.useState(null);b.useEffect(()=>{(async()=>{try{const C=((await at.getFechas()).data||[]).filter(T=>T.id>=10&&T.id<=14);r(C),C.length&&o(C[0].id)}catch{g("No se pudieron cargar las fechas")}})()},[]),b.useEffect(()=>{i&&(async()=>{try{p(!0);const w=(await at.getPartidosPorFecha(i)).data;c(w?.partidos||[]),g(null)}catch{g("No se pudieron cargar los partidos")}finally{p(!1)}})()},[i]);const y=b.useMemo(()=>t.find(w=>w.id===i)?.descripcion||"",[t,i]);return b.useMemo(()=>l.length===0?"":l[0]?.grupo||"",[l]),m.jsxs("div",{className:"page",children:[m.jsxs("div",{className:"fase-final-header",children:[m.jsx(ly,{size:40,className:"trophy-icon"}),m.jsxs("div",{children:[m.jsx("h1",{className:"page-title",children:"🏆 Fase Final"}),m.jsx("p",{className:"subtitle",children:"Copa Maracaná 14ED • Eliminación Directa"})]})]}),m.jsx("div",{className:"glass-card tabs-fechas-ff",children:t.map(v=>{const w=i===v.id;return m.jsxs("button",{className:`btn-fecha-ff ${w?"active":""}`,onClick:()=>o(v.id),"aria-pressed":w,children:[m.jsx("span",{className:"fecha-numero",children:v.descripcion}),v.fecha&&m.jsx("span",{className:"fecha-date",children:v.fecha})]},v.id)})}),y&&m.jsxs("div",{className:"fase-titulo",children:[m.jsx("h2",{children:y}),m.jsxs("span",{className:"partidos-count-ff",children:[l.length," partidos"]})]}),u&&m.jsxs("div",{className:"loading",children:[m.jsx("div",{className:"loading-spinner"}),m.jsx("h2",{children:"Cargando partidos..."})]}),h&&m.jsx("div",{className:"error",children:h}),!u&&!h&&l.length>0&&m.jsx("div",{className:"partidos-fase-final",children:l.map((v,w)=>m.jsx(KC,{partido:v,index:w},v.id))}),!u&&!h&&l.length===0&&m.jsx("div",{className:"no-partidos-ff",children:m.jsx("p",{children:"No hay partidos programados para esta fecha"})}),m.jsx("style",{jsx:!0,children:`
        .fase-final-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .trophy-icon {
          color: var(--primary-color);
        }

        .page-title {
          margin: 0;
          font-size: 2.5rem;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          margin: 0.5rem 0 0;
          opacity: 0.7;
          font-size: 1rem;
        }

        /* Tabs de fechas */
        .tabs-fechas-ff {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
          padding: 1.5rem;
        }

        .btn-fecha-ff {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          color: var(--text-color);
        }

        .btn-fecha-ff:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        .btn-fecha-ff.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: #000;
        }

        .fecha-numero {
          font-weight: 700;
          font-size: 1rem;
        }

        .fecha-date {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        /* Título de la fase */
        .fase-titulo {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--card-bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .fase-titulo h2 {
          margin: 0;
          font-size: 1.75rem;
          color: var(--primary-color);
          font-weight: 700;
        }

        .partidos-count-ff {
          background: rgba(0, 221, 76, 0.15);
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* Grid de partidos */
        .partidos-fase-final {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        /* Card de partido */
        .partido-card-ff {
          background: var(--card-bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .partido-card-ff:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        /* Header del partido */
        .partido-header-ff {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }

        .partido-info-top-ff {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .partido-hora-ff {
          font-weight: 800;
          color: var(--primary-color);
          font-size: 1rem;
        }

        .partido-cancha-ff {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.08);
          padding: 0.25rem 0.75rem;
          border-radius: 8px;
        }

        /* Descripción */
        .partido-descripcion {
          text-align: center;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
        }

        /* Enfrentamiento */
        .partido-enfrentamiento-ff {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
        }

        .equipo-ff {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
        }

        .equipo-nombre-ff {
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
          line-height: 1.2;
          color: var(--text-color);
        }

        /* Logo placeholder */
        .logo-placeholder {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(0, 221, 76, 0.12), rgba(0, 102, 204, 0.12));
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: grid;
          place-items: center;
          font-size: 1.5rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.5);
        }

        .logo-shell {
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(0, 221, 76, 0.12), rgba(0, 102, 204, 0.12));
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .logo-initials {
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.5px;
          color: var(--text-color);
        }

        /* Resultado central */
        .resultado-center-ff {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
        }

        .vs-pill-ff {
          font-size: 1.1rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.75);
          background: rgba(255, 255, 255, 0.12);
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }

        .resultado-ff {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(0, 221, 76, 0.12);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(0, 221, 76, 0.35);
        }

        .goles-ff {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-color);
          min-width: 1.5rem;
          text-align: center;
        }

        .sep-ff {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 700;
        }

        /* Estado badge */
        .estado-badge {
          padding: 0.375rem 0.75rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .estado-finalizado {
          background: rgba(0, 221, 76, 0.15);
          color: var(--primary-color);
          border: 1px solid rgba(0, 221, 76, 0.35);
        }

        .estado-en-curso {
          background: rgba(255, 165, 0, 0.15);
          color: #ffa500;
          border: 1px solid rgba(255, 165, 0, 0.35);
        }

        .estado-programado {
          background: rgba(0, 102, 204, 0.15);
          color: var(--secondary-color);
          border: 1px solid rgba(0, 102, 204, 0.35);
        }

        /* No partidos */
        .no-partidos-ff {
          background: rgba(255, 255, 255, 0.05);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          padding: 3rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
          font-style: italic;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .fase-final-header {
            flex-direction: column;
            text-align: center;
          }

          .page-title {
            font-size: 2rem;
          }

          .partidos-fase-final {
            grid-template-columns: 1fr;
          }

          .fase-titulo {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .tabs-fechas-ff {
            flex-direction: column;
          }

          .btn-fecha-ff {
            width: 100%;
          }
        }
      `})]})},YC=()=>{const[t,r]=b.useState([]),[i,o]=b.useState(null),[l,c]=b.useState(null),[u,p]=b.useState([]),[h,g]=b.useState([]),[y,v]=b.useState(!0),[w,C]=b.useState(!1),[T,j]=b.useState(null);b.useEffect(()=>{(async()=>{try{const oe=(await at.getFechas()).data||[];r(oe),oe.length&&o(oe[0].id)}catch(Q){console.error(Q),j("No se pudieron cargar las fechas")}})()},[]),b.useEffect(()=>{l?L():i&&E()},[i,l]);const E=async()=>{if(i)try{v(!0);const Q=(await at.getPartidosPorFecha(i)).data?.partidos||[];Q.sort((oe,fe)=>{const Ne=oe.hora?oe.hora:"99:99",Ge=fe.hora?fe.hora:"99:99";return Ne.localeCompare(Ge)}),p(Q),g([]),j(null)}catch(z){console.error(z),j("No se pudieron cargar los partidos")}finally{v(!1)}},L=async()=>{try{v(!0);const z=await at.getPartidosFaseFinal(),Q=z.data?.data||z.data||[];let oe=[];switch(l){case"repechaje":oe=Q.filter(fe=>fe.id>=118&&fe.id<=121);break;case"octavos":oe=Q.filter(fe=>fe.id>=122&&fe.id<=129);break;case"cuartos":oe=Q.filter(fe=>fe.id>=130&&fe.id<=133);break;case"semifinales":oe=Q.filter(fe=>fe.id>=134&&fe.id<=135);break;case"final":oe=Q.filter(fe=>fe.id>=136&&fe.id<=137);break;default:oe=[]}g(oe),p([]),j(null)}catch(z){console.error(z),j("No se pudieron cargar los partidos de fase final")}finally{v(!1)}},F=z=>{o(z),c(null)},M=z=>{c(z),o(null)},$=(z,Q,oe)=>{l?g(fe=>fe.map(Ne=>Ne.id===z?{...Ne,[Q]:oe}:Ne)):p(fe=>fe.map(Ne=>Ne.id===z?{...Ne,[Q]:oe}:Ne))},H=async z=>{try{C(!0);const Q={fecha:z.fecha||null,hora:z.hora||null,cancha:z.cancha||null,estado:z.estado||"programado",golesLocal:z.golesLocal??null,golesVisitante:z.golesVisitante??null};await at.actualizarPartido(z.id,Q)}catch(Q){console.error(Q)}finally{C(!1)}},X=[{id:"repechaje",nombre:"Repechaje",icon:BC,color:"#667eea",partidos:"118-121"},{id:"octavos",nombre:"Octavos",icon:ju,color:"#f093fb",partidos:"122-129"},{id:"cuartos",nombre:"Cuartos",icon:ju,color:"#4facfe",partidos:"130-133"},{id:"semifinales",nombre:"Semifinales",icon:ju,color:"#43e97b",partidos:"134-135"},{id:"final",nombre:"Final",icon:ly,color:"#ffd700",partidos:"136-137"}],te=l?h:u;return m.jsxs("div",{className:"page",children:[m.jsx("h1",{className:"page-title",children:"⚙️ Panel de Administración"}),m.jsxs("div",{className:"glass-card",style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1.5rem"},children:[m.jsxs("div",{children:[m.jsx("h3",{style:{margin:"0 0 0.75rem 0",fontSize:"0.9rem",opacity:.7,textTransform:"uppercase",letterSpacing:"1px"},children:"Fase Regular"}),m.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:t.map(z=>m.jsxs("button",{className:`btn btn-small ${i===z.id&&!l?"":"btn-secondary"}`,onClick:()=>F(z.id),style:{background:i===z.id&&!l?"var(--primary-color)":void 0},children:["Fecha ",z.numero,z.fecha&&m.jsxs("span",{style:{opacity:.7,marginLeft:"4px"},children:["(",z.fecha,")"]})]},z.id))})]}),m.jsxs("div",{children:[m.jsx("h3",{style:{margin:"0 0 0.75rem 0",fontSize:"0.9rem",opacity:.7,textTransform:"uppercase",letterSpacing:"1px"},children:"🏆 Fase Final"}),m.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:X.map(z=>{const Q=z.icon,oe=l===z.id;return m.jsxs(re.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>M(z.id),style:{padding:"0.6rem 1rem",borderRadius:"8px",border:oe?`2px solid ${z.color}`:"2px solid rgba(255,255,255,0.1)",background:oe?`${z.color}`:"rgba(255,255,255,0.05)",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",fontWeight:oe?700:500,transition:"all 0.2s ease",color:oe?"#000":"inherit"},children:[m.jsx(Q,{size:16,color:oe?"#000":z.color}),m.jsx("span",{children:z.nombre}),m.jsxs("span",{style:{opacity:.6,fontSize:"0.75rem",marginLeft:"4px"},children:["(",z.partidos,")"]})]},z.id)})})]})]}),y&&m.jsxs("div",{className:"loading",children:[m.jsx("div",{className:"loading-spinner"}),m.jsx("h2",{children:"Cargando partidos..."})]}),T&&m.jsx("div",{className:"error",children:T}),!y&&!T&&m.jsx("div",{className:"table-container",children:m.jsxs("table",{className:"table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"ID"}),!l&&m.jsx("th",{children:"Grupo"}),m.jsx("th",{children:"Local"}),m.jsx("th",{children:"Visitante"}),l&&m.jsx("th",{children:"Fecha"}),m.jsx("th",{children:"Hora"}),m.jsx("th",{children:"Cancha"}),m.jsx("th",{children:"Estado"}),m.jsx("th",{children:"GL"}),m.jsx("th",{children:"GV"}),m.jsx("th",{children:"Acciones"})]})}),m.jsx("tbody",{children:te.map(z=>m.jsxs(re.tr,{initial:{opacity:0},animate:{opacity:1},style:{background:z.estado==="finalizado"?"rgba(0,221,76,0.05)":z.estado==="en-curso"?"rgba(255,107,53,0.05)":"transparent"},children:[m.jsx("td",{style:{fontWeight:700,color:"var(--primary-color)"},children:z.id}),!l&&m.jsx("td",{children:z.grupo}),m.jsx("td",{children:z.equipoLocal?.nombre||"Por definir"}),m.jsx("td",{children:z.equipoVisitante?.nombre||"Por definir"}),l&&m.jsx("td",{children:m.jsx("input",{type:"date",value:z.fecha||"",onChange:Q=>$(z.id,"fecha",Q.target.value),style:{background:"transparent",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:6,padding:"6px 8px",width:"140px"}})}),m.jsx("td",{children:m.jsx("input",{type:"time",value:z.hora||"",onChange:Q=>$(z.id,"hora",Q.target.value),style:{background:"transparent",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:6,padding:"6px 8px",width:"100px"}})}),m.jsx("td",{children:m.jsxs("select",{value:z.cancha||"",onChange:Q=>$(z.id,"cancha",Q.target.value),style:{background:"transparent",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:6,padding:"6px 8px"},children:[m.jsx("option",{value:"",children:"—"}),m.jsx("option",{value:"NORTE",children:"NORTE"}),m.jsx("option",{value:"SUR",children:"SUR"})]})}),m.jsx("td",{children:m.jsxs("select",{value:z.estado||"programado",onChange:Q=>$(z.id,"estado",Q.target.value),style:{background:"transparent",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:6,padding:"6px 8px"},children:[m.jsx("option",{value:"programado",children:"programado"}),m.jsx("option",{value:"en-curso",children:"en-curso"}),m.jsx("option",{value:"finalizado",children:"finalizado"})]})}),m.jsx("td",{children:m.jsx("input",{type:"number",min:"0",value:z.golesLocal??"",onChange:Q=>$(z.id,"golesLocal",Q.target.value===""?null:parseInt(Q.target.value)),style:{width:70,background:"transparent",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:6,padding:"6px 8px",textAlign:"center",fontWeight:700}})}),m.jsx("td",{children:m.jsx("input",{type:"number",min:"0",value:z.golesVisitante??"",onChange:Q=>$(z.id,"golesVisitante",Q.target.value===""?null:parseInt(Q.target.value)),style:{width:70,background:"transparent",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:6,padding:"6px 8px",textAlign:"center",fontWeight:700}})}),m.jsx("td",{children:m.jsxs("button",{className:"btn btn-small",onClick:()=>H(z),disabled:w,style:{display:"flex",alignItems:"center",gap:"0.5rem",justifyContent:"center"},children:[m.jsx(VC,{size:14}),"Guardar"]})})]},z.id))})]})})]})},QC=()=>{const[t,r]=b.useState({username:"",password:""}),[i,o]=b.useState(!1),{login:l}=ra(),c=ns(),u=h=>{r({...t,[h.target.name]:h.target.value})},p=async h=>{if(h.preventDefault(),!t.username||!t.password){W.error("Por favor completa todos los campos");return}o(!0);try{const g=await l(t);g.success?(W.success(`¡Bienvenido ${g.user.nombre}!`),c("/")):W.error(g.message)}catch{W.error("Error de conexión")}finally{o(!1)}};return m.jsxs("div",{className:"auth-page",children:[m.jsx("div",{className:"auth-container",children:m.jsxs(re.div,{className:"auth-card",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6},children:[m.jsxs("div",{className:"auth-header",children:[m.jsx(re.div,{className:"auth-logo",initial:{scale:0},animate:{scale:1},transition:{delay:.3,type:"spring",stiffness:200},children:"⚽"}),m.jsx("h1",{children:"Copa Maracaná 14ED"}),m.jsx("p",{children:"Inicia sesión para continuar"})]}),m.jsxs("form",{className:"auth-form",onSubmit:p,children:[m.jsxs(re.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.4},children:[m.jsx("label",{htmlFor:"username",children:"Usuario o Email"}),m.jsx("input",{type:"text",id:"username",name:"username",value:t.username,onChange:u,placeholder:"Ingresa tu usuario o email",required:!0})]}),m.jsxs(re.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5},children:[m.jsx("label",{htmlFor:"password",children:"Contraseña"}),m.jsx("input",{type:"password",id:"password",name:"password",value:t.password,onChange:u,placeholder:"Ingresa tu contraseña",required:!0})]}),m.jsx(re.button,{type:"submit",className:"auth-button",disabled:i,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},whileHover:{scale:1.02},whileTap:{scale:.98},children:i?m.jsxs("span",{className:"loading-text",children:[m.jsx("span",{className:"spinner"}),"Iniciando sesión..."]}):"Iniciar Sesión"})]}),m.jsx(re.div,{className:"auth-footer",initial:{opacity:0},animate:{opacity:1},transition:{delay:.7},children:m.jsxs("p",{children:["¿No tienes cuenta?"," ",m.jsx(Dt,{to:"/register",className:"auth-link",children:"Regístrate aquí"})]})})]})}),m.jsx("style",{jsx:!0,children:`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, #1e0a3c, #12121c, #0a2c3c);
        }

        .auth-container {
          width: 100%;
          max-width: 450px;
        }

        .auth-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem 2.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .auth-logo {
          font-size: 4rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 20px rgba(0, 221, 76, 0.5));
        }

        .auth-header h1 {
          color: var(--primary-color);
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .auth-header p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
        }

        .auth-form {
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-group input {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: var(--text-color);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(0, 221, 76, 0.1);
        }

        .form-group input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .auth-button {
          width: 100%;
          padding: 1rem;
          background: var(--primary-color);
          color: #000;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .auth-button:hover:not(:disabled) {
          background: rgba(0, 221, 76, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 221, 76, 0.3);
        }

        .auth-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid #000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .auth-footer {
          text-align: center;
        }

        .auth-footer p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .auth-link {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .auth-link:hover {
          color: rgba(0, 221, 76, 0.8);
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .auth-card {
            padding: 2rem 1.5rem;
          }
          
          .auth-logo {
            font-size: 3rem;
          }
          
          .auth-header h1 {
            font-size: 1.5rem;
          }
        }
      `})]})},XC=()=>{const[t,r]=b.useState({username:"",email:"",password:"",confirmPassword:"",nombre:""}),[i,o]=b.useState(!1),{register:l}=ra(),c=ns(),u=g=>{r({...t,[g.target.name]:g.target.value})},p=()=>{const{username:g,email:y,password:v,confirmPassword:w,nombre:C}=t;return!g||!y||!v||!w||!C?(W.error("Por favor completa todos los campos"),!1):g.length<3?(W.error("El usuario debe tener al menos 3 caracteres"),!1):y.includes("@")?v.length<6?(W.error("La contraseña debe tener al menos 6 caracteres"),!1):v!==w?(W.error("Las contraseñas no coinciden"),!1):!0:(W.error("Por favor ingresa un email válido"),!1)},h=async g=>{if(g.preventDefault(),!!p()){o(!0);try{const{confirmPassword:y,...v}=t,w=await l(v);w.success?(W.success("¡Cuenta creada exitosamente! Ahora puedes iniciar sesión"),c("/login")):W.error(w.message)}catch{W.error("Error de conexión")}finally{o(!1)}}};return m.jsxs("div",{className:"auth-page",children:[m.jsx("div",{className:"auth-container",children:m.jsxs(re.div,{className:"auth-card",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6},children:[m.jsxs("div",{className:"auth-header",children:[m.jsx(re.div,{className:"auth-logo",initial:{scale:0},animate:{scale:1},transition:{delay:.3,type:"spring",stiffness:200},children:"⚽"}),m.jsx("h1",{children:"Crear Cuenta"}),m.jsx("p",{children:"Únete a Copa Maracaná 14ED"})]}),m.jsxs("form",{className:"auth-form",onSubmit:h,children:[m.jsxs(re.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.4},children:[m.jsx("label",{htmlFor:"nombre",children:"Nombre Completo"}),m.jsx("input",{type:"text",id:"nombre",name:"nombre",value:t.nombre,onChange:u,placeholder:"Tu nombre completo",required:!0})]}),m.jsxs(re.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5},children:[m.jsx("label",{htmlFor:"username",children:"Usuario"}),m.jsx("input",{type:"text",id:"username",name:"username",value:t.username,onChange:u,placeholder:"Elige un nombre de usuario",required:!0,minLength:3})]}),m.jsxs(re.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.6},children:[m.jsx("label",{htmlFor:"email",children:"Email"}),m.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:u,placeholder:"tu@email.com",required:!0})]}),m.jsxs(re.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.7},children:[m.jsx("label",{htmlFor:"password",children:"Contraseña"}),m.jsx("input",{type:"password",id:"password",name:"password",value:t.password,onChange:u,placeholder:"Mínimo 6 caracteres",required:!0,minLength:6})]}),m.jsxs(re.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.8},children:[m.jsx("label",{htmlFor:"confirmPassword",children:"Confirmar Contraseña"}),m.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:t.confirmPassword,onChange:u,placeholder:"Repite tu contraseña",required:!0})]}),m.jsx(re.button,{type:"submit",className:"auth-button",disabled:i,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.9},whileHover:{scale:1.02},whileTap:{scale:.98},children:i?m.jsxs("span",{className:"loading-text",children:[m.jsx("span",{className:"spinner"}),"Creando cuenta..."]}):"Crear Cuenta"})]}),m.jsx(re.div,{className:"auth-footer",initial:{opacity:0},animate:{opacity:1},transition:{delay:1},children:m.jsxs("p",{children:["¿Ya tienes cuenta?"," ",m.jsx(Dt,{to:"/login",className:"auth-link",children:"Inicia sesión aquí"})]})}),m.jsxs(re.div,{className:"role-info",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.1},children:[m.jsx("h4",{children:"ℹ️ Información de cuenta"}),m.jsxs("div",{className:"info-list",children:[m.jsxs("div",{className:"info-item",children:["📖 ",m.jsx("strong",{children:"Rol inicial:"})," Viewer (solo lectura)"]}),m.jsxs("div",{className:"info-item",children:["👑 ",m.jsx("strong",{children:"Para ser Admin:"})," Contacta al organizador"]}),m.jsxs("div",{className:"info-item",children:["🔒 ",m.jsx("strong",{children:"Datos seguros:"})," Tu información está protegida"]})]})]})]})}),m.jsx("style",{jsx:!0,children:`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, #1e0a3c, #12121c, #0a2c3c);
        }

        .auth-container {
          width: 100%;
          max-width: 500px;
        }

        .auth-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem 2.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .auth-logo {
          font-size: 4rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 20px rgba(0, 221, 76, 0.5));
        }

        .auth-header h1 {
          color: var(--primary-color);
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .auth-header p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
        }

        .auth-form {
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-group input {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: var(--text-color);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(0, 221, 76, 0.1);
        }

        .form-group input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .form-group input:invalid {
          border-color: rgba(220, 53, 69, 0.5);
        }

        .form-group input:valid {
          border-color: rgba(0, 221, 76, 0.3);
        }

        .auth-button {
          width: 100%;
          padding: 1rem;
          background: var(--primary-color);
          color: #000;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .auth-button:hover:not(:disabled) {
          background: rgba(0, 221, 76, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 221, 76, 0.3);
        }

        .auth-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid #000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .auth-footer {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-footer p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .auth-link {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .auth-link:hover {
          color: rgba(0, 221, 76, 0.8);
          text-decoration: underline;
        }

        .role-info {
          background: rgba(0, 102, 204, 0.1);
          border: 1px solid rgba(0, 102, 204, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
        }

        .role-info h4 {
          color: var(--secondary-color);
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .info-item {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.85rem;
          padding: 0.5rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          text-align: left;
        }

        .info-item strong {
          color: var(--secondary-color);
        }

        @media (max-width: 480px) {
          .auth-card {
            padding: 2rem 1.5rem;
          }
          
          .auth-logo {
            font-size: 3rem;
          }
          
          .auth-header h1 {
            font-size: 1.5rem;
          }

          .form-group {
            margin-bottom: 1.25rem;
          }
        }
      `})]})};function JC(){return m.jsx(FS,{children:m.jsx(h1,{children:m.jsxs("div",{className:"App",children:[m.jsx(wC,{}),m.jsx("main",{className:"main-content",children:m.jsx("div",{className:"container",children:m.jsxs(a1,{children:[m.jsx(cn,{path:"/",element:m.jsx(SC,{})}),m.jsx(cn,{path:"/equipos",element:m.jsx(CC,{})}),m.jsx(cn,{path:"/partidos",element:m.jsx(NC,{})}),m.jsx(cn,{path:"/posiciones",element:m.jsx(LC,{})}),m.jsx(cn,{path:"/fase-final",element:m.jsx(GC,{})}),m.jsx(cn,{path:"/login",element:m.jsx(QC,{})}),m.jsx(cn,{path:"/register",element:m.jsx(XC,{})}),m.jsx(cn,{path:"/admin",element:m.jsx(_S,{requireAdmin:!0,children:m.jsx(YC,{})})})]})})}),m.jsx(sw,{position:"top-right",toastOptions:{duration:4e3,style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",color:"#f0f0f0",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"12px",fontSize:"0.9rem",fontWeight:"500"},success:{iconTheme:{primary:"#00dd4c",secondary:"#fff"},style:{border:"1px solid rgba(0, 221, 76, 0.3)",background:"rgba(0, 221, 76, 0.1)"}},error:{iconTheme:{primary:"#dc3545",secondary:"#fff"},style:{border:"1px solid rgba(220, 53, 69, 0.3)",background:"rgba(220, 53, 69, 0.1)"}},loading:{iconTheme:{primary:"#0066cc",secondary:"#fff"},style:{border:"1px solid rgba(0, 102, 204, 0.3)",background:"rgba(0, 102, 204, 0.1)"}}}})]})})})}mx.createRoot(document.getElementById("root")).render(m.jsx(_m.StrictMode,{children:m.jsx(JC,{})}));
