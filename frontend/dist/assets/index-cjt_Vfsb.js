function Yv(t,r){for(var i=0;i<r.length;i++){const o=r[i];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in t)){const u=Object.getOwnPropertyDescriptor(o,l);u&&Object.defineProperty(t,l,u.get?u:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Lm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nu={exports:{}},zi={},ru={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Xv(){if($p)return ce;$p=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function C(N,z,ue){this.props=N,this.context=z,this.refs=T,this.updater=ue||b}C.prototype.isReactComponent={},C.prototype.setState=function(N,z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,z,"setState")},C.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=C.prototype;function M(N,z,ue){this.props=N,this.context=z,this.refs=T,this.updater=ue||b}var V=M.prototype=new O;V.constructor=M,E(V,C.prototype),V.isPureReactComponent=!0;var q=Array.isArray,$=Object.prototype.hasOwnProperty,X={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function J(N,z,ue){var de,pe={},he=null,xe=null;if(z!=null)for(de in z.ref!==void 0&&(xe=z.ref),z.key!==void 0&&(he=""+z.key),z)$.call(z,de)&&!ee.hasOwnProperty(de)&&(pe[de]=z[de]);var ye=arguments.length-2;if(ye===1)pe.children=ue;else if(1<ye){for(var Te=Array(ye),xt=0;xt<ye;xt++)Te[xt]=arguments[xt+2];pe.children=Te}if(N&&N.defaultProps)for(de in ye=N.defaultProps,ye)pe[de]===void 0&&(pe[de]=ye[de]);return{$$typeof:t,type:N,key:he,ref:xe,props:pe,_owner:X.current}}function ge(N,z){return{$$typeof:t,type:N.type,key:z,ref:N.ref,props:N.props,_owner:N._owner}}function Se(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function Ge(N){var z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ue){return z[ue]})}var yt=/\/+/g;function tt(N,z){return typeof N=="object"&&N!==null&&N.key!=null?Ge(""+N.key):z.toString(36)}function at(N,z,ue,de,pe){var he=typeof N;(he==="undefined"||he==="boolean")&&(N=null);var xe=!1;if(N===null)xe=!0;else switch(he){case"string":case"number":xe=!0;break;case"object":switch(N.$$typeof){case t:case r:xe=!0}}if(xe)return xe=N,pe=pe(xe),N=de===""?"."+tt(xe,0):de,q(pe)?(ue="",N!=null&&(ue=N.replace(yt,"$&/")+"/"),at(pe,z,ue,"",function(xt){return xt})):pe!=null&&(Se(pe)&&(pe=ge(pe,ue+(!pe.key||xe&&xe.key===pe.key?"":(""+pe.key).replace(yt,"$&/")+"/")+N)),z.push(pe)),1;if(xe=0,de=de===""?".":de+":",q(N))for(var ye=0;ye<N.length;ye++){he=N[ye];var Te=de+tt(he,ye);xe+=at(he,z,ue,Te,pe)}else if(Te=w(N),typeof Te=="function")for(N=Te.call(N),ye=0;!(he=N.next()).done;)he=he.value,Te=de+tt(he,ye++),xe+=at(he,z,ue,Te,pe);else if(he==="object")throw z=String(N),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return xe}function vt(N,z,ue){if(N==null)return N;var de=[],pe=0;return at(N,de,"","",function(he){return z.call(ue,he,pe++)}),de}function nt(N){if(N._status===-1){var z=N._result;z=z(),z.then(function(ue){(N._status===0||N._status===-1)&&(N._status=1,N._result=ue)},function(ue){(N._status===0||N._status===-1)&&(N._status=2,N._result=ue)}),N._status===-1&&(N._status=0,N._result=z)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},U={transition:null},te={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:U,ReactCurrentOwner:X};function H(){throw Error("act(...) is not supported in production builds of React.")}return ce.Children={map:vt,forEach:function(N,z,ue){vt(N,function(){z.apply(this,arguments)},ue)},count:function(N){var z=0;return vt(N,function(){z++}),z},toArray:function(N){return vt(N,function(z){return z})||[]},only:function(N){if(!Se(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ce.Component=C,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=M,ce.StrictMode=o,ce.Suspense=h,ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ce.act=H,ce.cloneElement=function(N,z,ue){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var de=E({},N.props),pe=N.key,he=N.ref,xe=N._owner;if(z!=null){if(z.ref!==void 0&&(he=z.ref,xe=X.current),z.key!==void 0&&(pe=""+z.key),N.type&&N.type.defaultProps)var ye=N.type.defaultProps;for(Te in z)$.call(z,Te)&&!ee.hasOwnProperty(Te)&&(de[Te]=z[Te]===void 0&&ye!==void 0?ye[Te]:z[Te])}var Te=arguments.length-2;if(Te===1)de.children=ue;else if(1<Te){ye=Array(Te);for(var xt=0;xt<Te;xt++)ye[xt]=arguments[xt+2];de.children=ye}return{$$typeof:t,type:N.type,key:pe,ref:he,props:de,_owner:xe}},ce.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},ce.createElement=J,ce.createFactory=function(N){var z=J.bind(null,N);return z.type=N,z},ce.createRef=function(){return{current:null}},ce.forwardRef=function(N){return{$$typeof:p,render:N}},ce.isValidElement=Se,ce.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:nt}},ce.memo=function(N,z){return{$$typeof:m,type:N,compare:z===void 0?null:z}},ce.startTransition=function(N){var z=U.transition;U.transition={};try{N()}finally{U.transition=z}},ce.unstable_act=H,ce.useCallback=function(N,z){return le.current.useCallback(N,z)},ce.useContext=function(N){return le.current.useContext(N)},ce.useDebugValue=function(){},ce.useDeferredValue=function(N){return le.current.useDeferredValue(N)},ce.useEffect=function(N,z){return le.current.useEffect(N,z)},ce.useId=function(){return le.current.useId()},ce.useImperativeHandle=function(N,z,ue){return le.current.useImperativeHandle(N,z,ue)},ce.useInsertionEffect=function(N,z){return le.current.useInsertionEffect(N,z)},ce.useLayoutEffect=function(N,z){return le.current.useLayoutEffect(N,z)},ce.useMemo=function(N,z){return le.current.useMemo(N,z)},ce.useReducer=function(N,z,ue){return le.current.useReducer(N,z,ue)},ce.useRef=function(N){return le.current.useRef(N)},ce.useState=function(N){return le.current.useState(N)},ce.useSyncExternalStore=function(N,z,ue){return le.current.useSyncExternalStore(N,z,ue)},ce.useTransition=function(){return le.current.useTransition()},ce.version="18.3.1",ce}var qp;function oc(){return qp||(qp=1,ru.exports=Xv()),ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Qv(){if(Hp)return zi;Hp=1;var t=oc(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(p,h,m){var g,x={},w=null,b=null;m!==void 0&&(w=""+m),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(b=h.ref);for(g in h)o.call(h,g)&&!u.hasOwnProperty(g)&&(x[g]=h[g]);if(p&&p.defaultProps)for(g in h=p.defaultProps,h)x[g]===void 0&&(x[g]=h[g]);return{$$typeof:r,type:p,key:w,ref:b,props:x,_owner:l.current}}return zi.Fragment=i,zi.jsx=c,zi.jsxs=c,zi}var Wp;function Jv(){return Wp||(Wp=1,nu.exports=Qv()),nu.exports}var y=Jv(),k=oc();const Dm=Lm(k),Zv=Yv({__proto__:null,default:Dm},[k]);var To={},iu={exports:{}},pt={},su={exports:{}},ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function ex(){return Kp||(Kp=1,function(t){function r(U,te){var H=U.length;U.push(te);e:for(;0<H;){var N=H-1>>>1,z=U[N];if(0<l(z,te))U[N]=te,U[H]=z,H=N;else break e}}function i(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var te=U[0],H=U.pop();if(H!==te){U[0]=H;e:for(var N=0,z=U.length,ue=z>>>1;N<ue;){var de=2*(N+1)-1,pe=U[de],he=de+1,xe=U[he];if(0>l(pe,H))he<z&&0>l(xe,pe)?(U[N]=xe,U[he]=H,N=he):(U[N]=pe,U[de]=H,N=de);else if(he<z&&0>l(xe,H))U[N]=xe,U[he]=H,N=he;else break e}}return te}function l(U,te){var H=U.sortIndex-te.sortIndex;return H!==0?H:U.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var c=Date,p=c.now();t.unstable_now=function(){return c.now()-p}}var h=[],m=[],g=1,x=null,w=3,b=!1,E=!1,T=!1,C=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(U){for(var te=i(m);te!==null;){if(te.callback===null)o(m);else if(te.startTime<=U)o(m),te.sortIndex=te.expirationTime,r(h,te);else break;te=i(m)}}function q(U){if(T=!1,V(U),!E)if(i(h)!==null)E=!0,nt($);else{var te=i(m);te!==null&&le(q,te.startTime-U)}}function $(U,te){E=!1,T&&(T=!1,O(J),J=-1),b=!0;var H=w;try{for(V(te),x=i(h);x!==null&&(!(x.expirationTime>te)||U&&!Ge());){var N=x.callback;if(typeof N=="function"){x.callback=null,w=x.priorityLevel;var z=N(x.expirationTime<=te);te=t.unstable_now(),typeof z=="function"?x.callback=z:x===i(h)&&o(h),V(te)}else o(h);x=i(h)}if(x!==null)var ue=!0;else{var de=i(m);de!==null&&le(q,de.startTime-te),ue=!1}return ue}finally{x=null,w=H,b=!1}}var X=!1,ee=null,J=-1,ge=5,Se=-1;function Ge(){return!(t.unstable_now()-Se<ge)}function yt(){if(ee!==null){var U=t.unstable_now();Se=U;var te=!0;try{te=ee(!0,U)}finally{te?tt():(X=!1,ee=null)}}else X=!1}var tt;if(typeof M=="function")tt=function(){M(yt)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,vt=at.port2;at.port1.onmessage=yt,tt=function(){vt.postMessage(null)}}else tt=function(){C(yt,0)};function nt(U){ee=U,X||(X=!0,tt())}function le(U,te){J=C(function(){U(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){E||b||(E=!0,nt($))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return i(h)},t.unstable_next=function(U){switch(w){case 1:case 2:case 3:var te=3;break;default:te=w}var H=w;w=te;try{return U()}finally{w=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,te){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var H=w;w=U;try{return te()}finally{w=H}},t.unstable_scheduleCallback=function(U,te,H){var N=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?N+H:N):H=N,U){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=H+z,U={id:g++,callback:te,priorityLevel:U,startTime:H,expirationTime:z,sortIndex:-1},H>N?(U.sortIndex=H,r(m,U),i(h)===null&&U===i(m)&&(T?(O(J),J=-1):T=!0,le(q,H-N))):(U.sortIndex=z,r(h,U),E||b||(E=!0,nt($))),U},t.unstable_shouldYield=Ge,t.unstable_wrapCallback=function(U){var te=w;return function(){var H=w;w=te;try{return U.apply(this,arguments)}finally{w=H}}}}(ou)),ou}var Gp;function tx(){return Gp||(Gp=1,su.exports=ex()),su.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function nx(){if(Yp)return pt;Yp=1;var t=oc(),r=tx();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function u(e,n){c(e,n),c(e+"Capture",n)}function c(e,n){for(l[e]=n,e=0;e<n.length;e++)o.add(n[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function w(e){return h.call(x,e)?!0:h.call(g,e)?!1:m.test(e)?x[e]=!0:(g[e]=!0,!1)}function b(e,n,s,a){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,n,s,a){if(n===null||typeof n>"u"||b(e,n,s,a))return!0;if(a)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function T(e,n,s,a,d,f,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=e,this.type=n,this.sanitizeURL=f,this.removeEmptyString=v}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];C[n]=new T(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){C[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){C[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){C[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){C[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){C[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(O,M);C[n]=new T(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(O,M);C[n]=new T(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(O,M);C[n]=new T(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){C[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),C.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){C[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function V(e,n,s,a){var d=C.hasOwnProperty(n)?C[n]:null;(d!==null?d.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(E(n,s,d,a)&&(s=null),a||d===null?w(n)&&(s===null?e.removeAttribute(n):e.setAttribute(n,""+s)):d.mustUseProperty?e[d.propertyName]=s===null?d.type===3?!1:"":s:(n=d.attributeName,a=d.attributeNamespace,s===null?e.removeAttribute(n):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,a?e.setAttributeNS(a,n,s):e.setAttribute(n,s))))}var q=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),X=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),Ge=Symbol.for("react.context"),yt=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),U=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,N;function z(e){if(N===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||""}return`
`+N+e}var ue=!1;function de(e,n){if(!e||ue)return"";ue=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(L){var a=L}Reflect.construct(e,[],n)}else{try{n.call()}catch(L){a=L}e.call(n.prototype)}else{try{throw Error()}catch(L){a=L}e()}}catch(L){if(L&&a&&typeof L.stack=="string"){for(var d=L.stack.split(`
`),f=a.stack.split(`
`),v=d.length-1,S=f.length-1;1<=v&&0<=S&&d[v]!==f[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==f[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==f[S]){var P=`
`+d[v].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=v&&0<=S);break}}}finally{ue=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?z(e):""}function pe(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function he(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case X:return"Portal";case ge:return"Profiler";case J:return"StrictMode";case tt:return"Suspense";case at:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ge:return(e.displayName||"Context")+".Consumer";case Se:return(e._context.displayName||"Context")+".Provider";case yt:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vt:return n=e.displayName||null,n!==null?n:he(e.type)||"Memo";case nt:n=e._payload,e=e._init;try{return he(e(n))}catch{}}return null}function xe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(n);case 8:return n===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xt(e){var n=Te(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ps(e){e._valueTracker||(e._valueTracker=xt(e))}function Gc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),a="";return e&&(a=Te(e)?e.checked?"true":"false":e.value),e=a,e!==s?(n.setValue(e),!0):!1}function hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ua(e,n){var s=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Yc(e,n){var s=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;s=ye(n.value!=null?n.value:s),e._wrapperState={initialChecked:a,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Xc(e,n){n=n.checked,n!=null&&V(e,"checked",n,!1)}function ca(e,n){Xc(e,n);var s=ye(n.value),a=n.type;if(s!=null)a==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?da(e,n.type,s):n.hasOwnProperty("defaultValue")&&da(e,n.type,ye(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Qc(e,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,s||n===e.value||(e.value=n),e.defaultValue=n}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function da(e,n,s){(n!=="number"||hs(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Zr=Array.isArray;function pr(e,n,s,a){if(e=e.options,n){n={};for(var d=0;d<s.length;d++)n["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=n.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&a&&(e[s].defaultSelected=!0)}else{for(s=""+ye(s),n=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function fa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jc(e,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(i(92));if(Zr(s)){if(1<s.length)throw Error(i(93));s=s[0]}n=s}n==null&&(n=""),s=n}e._wrapperState={initialValue:ye(s)}}function Zc(e,n){var s=ye(n.value),a=ye(n.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),n.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),a!=null&&(e.defaultValue=""+a)}function ed(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function td(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?td(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ms,nd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,a,d){MSApp.execUnsafeLocalFunction(function(){return e(n,s,a,d)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ms=ms||document.createElement("div"),ms.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ei(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zy=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){Zy.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ti[n]=ti[e]})});function rd(e,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||ti.hasOwnProperty(e)&&ti[e]?(""+n).trim():n+"px"}function id(e,n){e=e.style;for(var s in n)if(n.hasOwnProperty(s)){var a=s.indexOf("--")===0,d=rd(s,n[s],a);s==="float"&&(s="cssFloat"),a?e.setProperty(s,d):e[s]=d}}var e0=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ha(e,n){if(n){if(e0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function ma(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ga=null;function ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,hr=null,mr=null;function sd(e){if(e=Ci(e)){if(typeof va!="function")throw Error(i(280));var n=e.stateNode;n&&(n=zs(n),va(e.stateNode,e.type,n))}}function od(e){hr?mr?mr.push(e):mr=[e]:hr=e}function ad(){if(hr){var e=hr,n=mr;if(mr=hr=null,sd(e),n)for(e=0;e<n.length;e++)sd(n[e])}}function ld(e,n){return e(n)}function ud(){}var xa=!1;function cd(e,n,s){if(xa)return e(n,s);xa=!0;try{return ld(e,n,s)}finally{xa=!1,(hr!==null||mr!==null)&&(ud(),ad())}}function ni(e,n){var s=e.stateNode;if(s===null)return null;var a=zs(s);if(a===null)return null;s=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(i(231,n,typeof s));return s}var wa=!1;if(p)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){wa=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{wa=!1}function t0(e,n,s,a,d,f,v,S,P){var L=Array.prototype.slice.call(arguments,3);try{n.apply(s,L)}catch(F){this.onError(F)}}var ii=!1,gs=null,ys=!1,Sa=null,n0={onError:function(e){ii=!0,gs=e}};function r0(e,n,s,a,d,f,v,S,P){ii=!1,gs=null,t0.apply(n0,arguments)}function i0(e,n,s,a,d,f,v,S,P){if(r0.apply(this,arguments),ii){if(ii){var L=gs;ii=!1,gs=null}else throw Error(i(198));ys||(ys=!0,Sa=L)}}function Un(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function dd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function fd(e){if(Un(e)!==e)throw Error(i(188))}function s0(e){var n=e.alternate;if(!n){if(n=Un(e),n===null)throw Error(i(188));return n!==e?null:e}for(var s=e,a=n;;){var d=s.return;if(d===null)break;var f=d.alternate;if(f===null){if(a=d.return,a!==null){s=a;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===s)return fd(d),e;if(f===a)return fd(d),n;f=f.sibling}throw Error(i(188))}if(s.return!==a.return)s=d,a=f;else{for(var v=!1,S=d.child;S;){if(S===s){v=!0,s=d,a=f;break}if(S===a){v=!0,a=d,s=f;break}S=S.sibling}if(!v){for(S=f.child;S;){if(S===s){v=!0,s=f,a=d;break}if(S===a){v=!0,a=f,s=d;break}S=S.sibling}if(!v)throw Error(i(189))}}if(s.alternate!==a)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?e:n}function pd(e){return e=s0(e),e!==null?hd(e):null}function hd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=hd(e);if(n!==null)return n;e=e.sibling}return null}var md=r.unstable_scheduleCallback,gd=r.unstable_cancelCallback,o0=r.unstable_shouldYield,a0=r.unstable_requestPaint,Le=r.unstable_now,l0=r.unstable_getCurrentPriorityLevel,Ea=r.unstable_ImmediatePriority,yd=r.unstable_UserBlockingPriority,vs=r.unstable_NormalPriority,u0=r.unstable_LowPriority,vd=r.unstable_IdlePriority,xs=null,qt=null;function c0(e){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(xs,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:p0,d0=Math.log,f0=Math.LN2;function p0(e){return e>>>=0,e===0?32:31-(d0(e)/f0|0)|0}var ws=64,Ss=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Es(e,n){var s=e.pendingLanes;if(s===0)return 0;var a=0,d=e.suspendedLanes,f=e.pingedLanes,v=s&268435455;if(v!==0){var S=v&~d;S!==0?a=si(S):(f&=v,f!==0&&(a=si(f)))}else v=s&~d,v!==0?a=si(v):f!==0&&(a=si(f));if(a===0)return 0;if(n!==0&&n!==a&&(n&d)===0&&(d=a&-a,f=n&-n,d>=f||d===16&&(f&4194240)!==0))return n;if((a&4)!==0&&(a|=s&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)s=31-Mt(n),d=1<<s,a|=e[s],n&=~d;return a}function h0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m0(e,n){for(var s=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,f=e.pendingLanes;0<f;){var v=31-Mt(f),S=1<<v,P=d[v];P===-1?((S&s)===0||(S&a)!==0)&&(d[v]=h0(S,n)):P<=n&&(e.expiredLanes|=S),f&=~S}}function Ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xd(){var e=ws;return ws<<=1,(ws&4194240)===0&&(ws=64),e}function Ta(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function oi(e,n,s){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Mt(n),e[n]=s}function g0(e,n){var s=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<s;){var d=31-Mt(s),f=1<<d;n[d]=0,a[d]=-1,e[d]=-1,s&=~f}}function Pa(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var a=31-Mt(s),d=1<<a;d&n|e[a]&n&&(e[a]|=n),s&=~d}}var ve=0;function wd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Sd,ka,Ed,Cd,Td,ba=!1,Cs=[],fn=null,pn=null,hn=null,ai=new Map,li=new Map,mn=[],y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(e,n){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":ai.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(n.pointerId)}}function ui(e,n,s,a,d,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:s,eventSystemFlags:a,nativeEvent:f,targetContainers:[d]},n!==null&&(n=Ci(n),n!==null&&ka(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function v0(e,n,s,a,d){switch(n){case"focusin":return fn=ui(fn,e,n,s,a,d),!0;case"dragenter":return pn=ui(pn,e,n,s,a,d),!0;case"mouseover":return hn=ui(hn,e,n,s,a,d),!0;case"pointerover":var f=d.pointerId;return ai.set(f,ui(ai.get(f)||null,e,n,s,a,d)),!0;case"gotpointercapture":return f=d.pointerId,li.set(f,ui(li.get(f)||null,e,n,s,a,d)),!0}return!1}function kd(e){var n=$n(e.target);if(n!==null){var s=Un(n);if(s!==null){if(n=s.tag,n===13){if(n=dd(s),n!==null){e.blockedOn=n,Td(e.priority,function(){Ed(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Na(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var a=new s.constructor(s.type,s);ga=a,s.target.dispatchEvent(a),ga=null}else return n=Ci(s),n!==null&&ka(n),e.blockedOn=s,!1;n.shift()}return!0}function bd(e,n,s){Ts(e)&&s.delete(n)}function x0(){ba=!1,fn!==null&&Ts(fn)&&(fn=null),pn!==null&&Ts(pn)&&(pn=null),hn!==null&&Ts(hn)&&(hn=null),ai.forEach(bd),li.forEach(bd)}function ci(e,n){e.blockedOn===n&&(e.blockedOn=null,ba||(ba=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,x0)))}function di(e){function n(d){return ci(d,e)}if(0<Cs.length){ci(Cs[0],e);for(var s=1;s<Cs.length;s++){var a=Cs[s];a.blockedOn===e&&(a.blockedOn=null)}}for(fn!==null&&ci(fn,e),pn!==null&&ci(pn,e),hn!==null&&ci(hn,e),ai.forEach(n),li.forEach(n),s=0;s<mn.length;s++)a=mn[s],a.blockedOn===e&&(a.blockedOn=null);for(;0<mn.length&&(s=mn[0],s.blockedOn===null);)kd(s),s.blockedOn===null&&mn.shift()}var gr=q.ReactCurrentBatchConfig,Ps=!0;function w0(e,n,s,a){var d=ve,f=gr.transition;gr.transition=null;try{ve=1,ja(e,n,s,a)}finally{ve=d,gr.transition=f}}function S0(e,n,s,a){var d=ve,f=gr.transition;gr.transition=null;try{ve=4,ja(e,n,s,a)}finally{ve=d,gr.transition=f}}function ja(e,n,s,a){if(Ps){var d=Na(e,n,s,a);if(d===null)Wa(e,n,a,ks,s),Pd(e,a);else if(v0(d,e,n,s,a))a.stopPropagation();else if(Pd(e,a),n&4&&-1<y0.indexOf(e)){for(;d!==null;){var f=Ci(d);if(f!==null&&Sd(f),f=Na(e,n,s,a),f===null&&Wa(e,n,a,ks,s),f===d)break;d=f}d!==null&&a.stopPropagation()}else Wa(e,n,a,null,s)}}var ks=null;function Na(e,n,s,a){if(ks=null,e=ya(a),e=$n(e),e!==null)if(n=Un(e),n===null)e=null;else if(s=n.tag,s===13){if(e=dd(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ks=e,null}function jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l0()){case Ea:return 1;case yd:return 4;case vs:case u0:return 16;case vd:return 536870912;default:return 16}default:return 16}}var gn=null,Ra=null,bs=null;function Nd(){if(bs)return bs;var e,n=Ra,s=n.length,a,d="value"in gn?gn.value:gn.textContent,f=d.length;for(e=0;e<s&&n[e]===d[e];e++);var v=s-e;for(a=1;a<=v&&n[s-a]===d[f-a];a++);return bs=d.slice(e,1<a?1-a:void 0)}function js(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ns(){return!0}function Rd(){return!1}function wt(e){function n(s,a,d,f,v){this._reactName=s,this._targetInst=d,this.type=a,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(s=e[S],this[S]=s?s(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ns:Rd,this.isPropagationStopped=Rd,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),n}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Aa=wt(yr),fi=H({},yr,{view:0,detail:0}),E0=wt(fi),La,Da,pi,Rs=H({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pi&&(pi&&e.type==="mousemove"?(La=e.screenX-pi.screenX,Da=e.screenY-pi.screenY):Da=La=0,pi=e),La)},movementY:function(e){return"movementY"in e?e.movementY:Da}}),Ad=wt(Rs),C0=H({},Rs,{dataTransfer:0}),T0=wt(C0),P0=H({},fi,{relatedTarget:0}),Oa=wt(P0),k0=H({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=wt(k0),j0=H({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),N0=wt(j0),R0=H({},yr,{data:0}),Ld=wt(R0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=D0[e])?!!n[e]:!1}function Ma(){return O0}var M0=H({},fi,{key:function(e){if(e.key){var n=A0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(e){return e.type==="keypress"?js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V0=wt(M0),_0=H({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=wt(_0),z0=H({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),F0=wt(z0),I0=H({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=wt(I0),U0=H({},Rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=wt(U0),q0=[9,13,27,32],Va=p&&"CompositionEvent"in window,hi=null;p&&"documentMode"in document&&(hi=document.documentMode);var H0=p&&"TextEvent"in window&&!hi,Od=p&&(!Va||hi&&8<hi&&11>=hi),Md=" ",Vd=!1;function _d(e,n){switch(e){case"keyup":return q0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function W0(e,n){switch(e){case"compositionend":return zd(n);case"keypress":return n.which!==32?null:(Vd=!0,Md);case"textInput":return e=n.data,e===Md&&Vd?null:e;default:return null}}function K0(e,n){if(vr)return e==="compositionend"||!Va&&_d(e,n)?(e=Nd(),bs=Ra=gn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Od&&n.locale!=="ko"?null:n.data;default:return null}}var G0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!G0[e.type]:n==="textarea"}function Id(e,n,s,a){od(a),n=Ms(n,"onChange"),0<n.length&&(s=new Aa("onChange","change",null,s,a),e.push({event:s,listeners:n}))}var mi=null,gi=null;function Y0(e){sf(e,0)}function As(e){var n=Cr(e);if(Gc(n))return e}function X0(e,n){if(e==="change")return n}var Bd=!1;if(p){var _a;if(p){var za="oninput"in document;if(!za){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),za=typeof Ud.oninput=="function"}_a=za}else _a=!1;Bd=_a&&(!document.documentMode||9<document.documentMode)}function $d(){mi&&(mi.detachEvent("onpropertychange",qd),gi=mi=null)}function qd(e){if(e.propertyName==="value"&&As(gi)){var n=[];Id(n,gi,e,ya(e)),cd(Y0,n)}}function Q0(e,n,s){e==="focusin"?($d(),mi=n,gi=s,mi.attachEvent("onpropertychange",qd)):e==="focusout"&&$d()}function J0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return As(gi)}function Z0(e,n){if(e==="click")return As(n)}function ev(e,n){if(e==="input"||e==="change")return As(n)}function tv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vt=typeof Object.is=="function"?Object.is:tv;function yi(e,n){if(Vt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),a=Object.keys(n);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var d=s[a];if(!h.call(n,d)||!Vt(e[d],n[d]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wd(e,n){var s=Hd(e);e=0;for(var a;s;){if(s.nodeType===3){if(a=e+s.textContent.length,e<=n&&a>=n)return{node:s,offset:n-e};e=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Hd(s)}}function Kd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Kd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gd(){for(var e=window,n=hs();n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=hs(e.document)}return n}function Fa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function nv(e){var n=Gd(),s=e.focusedElem,a=e.selectionRange;if(n!==s&&s&&s.ownerDocument&&Kd(s.ownerDocument.documentElement,s)){if(a!==null&&Fa(s)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(e,s.value.length);else if(e=(n=s.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=s.textContent.length,f=Math.min(a.start,d);a=a.end===void 0?f:Math.min(a.end,d),!e.extend&&f>a&&(d=a,a=f,f=d),d=Wd(s,f);var v=Wd(s,a);d&&v&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==v.node||e.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),f>a?(e.addRange(n),e.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),e.addRange(n)))}}for(n=[],e=s;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)e=n[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rv=p&&"documentMode"in document&&11>=document.documentMode,xr=null,Ia=null,vi=null,Ba=!1;function Yd(e,n,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ba||xr==null||xr!==hs(a)||(a=xr,"selectionStart"in a&&Fa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),vi&&yi(vi,a)||(vi=a,a=Ms(Ia,"onSelect"),0<a.length&&(n=new Aa("onSelect","select",null,n,s),e.push({event:n,listeners:a}),n.target=xr)))}function Ls(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var wr={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionend:Ls("Transition","TransitionEnd")},Ua={},Xd={};p&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Ds(e){if(Ua[e])return Ua[e];if(!wr[e])return e;var n=wr[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Xd)return Ua[e]=n[s];return e}var Qd=Ds("animationend"),Jd=Ds("animationiteration"),Zd=Ds("animationstart"),ef=Ds("transitionend"),tf=new Map,nf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){tf.set(e,n),u(n,[e])}for(var $a=0;$a<nf.length;$a++){var qa=nf[$a],iv=qa.toLowerCase(),sv=qa[0].toUpperCase()+qa.slice(1);yn(iv,"on"+sv)}yn(Qd,"onAnimationEnd"),yn(Jd,"onAnimationIteration"),yn(Zd,"onAnimationStart"),yn("dblclick","onDoubleClick"),yn("focusin","onFocus"),yn("focusout","onBlur"),yn(ef,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ov=new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));function rf(e,n,s){var a=e.type||"unknown-event";e.currentTarget=s,i0(a,n,void 0,e),e.currentTarget=null}function sf(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var a=e[s],d=a.event;a=a.listeners;e:{var f=void 0;if(n)for(var v=a.length-1;0<=v;v--){var S=a[v],P=S.instance,L=S.currentTarget;if(S=S.listener,P!==f&&d.isPropagationStopped())break e;rf(d,S,L),f=P}else for(v=0;v<a.length;v++){if(S=a[v],P=S.instance,L=S.currentTarget,S=S.listener,P!==f&&d.isPropagationStopped())break e;rf(d,S,L),f=P}}}if(ys)throw e=Sa,ys=!1,Sa=null,e}function Ee(e,n){var s=n[Ja];s===void 0&&(s=n[Ja]=new Set);var a=e+"__bubble";s.has(a)||(of(n,e,2,!1),s.add(a))}function Ha(e,n,s){var a=0;n&&(a|=4),of(s,e,a,n)}var Os="_reactListening"+Math.random().toString(36).slice(2);function wi(e){if(!e[Os]){e[Os]=!0,o.forEach(function(s){s!=="selectionchange"&&(ov.has(s)||Ha(s,!1,e),Ha(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Os]||(n[Os]=!0,Ha("selectionchange",!1,n))}}function of(e,n,s,a){switch(jd(n)){case 1:var d=w0;break;case 4:d=S0;break;default:d=ja}s=d.bind(null,n,s,e),d=void 0,!wa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(n,s,{capture:!0,passive:d}):e.addEventListener(n,s,!0):d!==void 0?e.addEventListener(n,s,{passive:d}):e.addEventListener(n,s,!1)}function Wa(e,n,s,a,d){var f=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var v=a.tag;if(v===3||v===4){var S=a.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=a.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=$n(S),v===null)return;if(P=v.tag,P===5||P===6){a=f=v;continue e}S=S.parentNode}}a=a.return}cd(function(){var L=f,F=ya(s),I=[];e:{var _=tf.get(e);if(_!==void 0){var W=Aa,G=e;switch(e){case"keypress":if(js(s)===0)break e;case"keydown":case"keyup":W=V0;break;case"focusin":G="focus",W=Oa;break;case"focusout":G="blur",W=Oa;break;case"beforeblur":case"afterblur":W=Oa;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=T0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=F0;break;case Qd:case Jd:case Zd:W=b0;break;case ef:W=B0;break;case"scroll":W=E0;break;case"wheel":W=$0;break;case"copy":case"cut":case"paste":W=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Dd}var Q=(n&4)!==0,De=!Q&&e==="scroll",R=Q?_!==null?_+"Capture":null:_;Q=[];for(var j=L,A;j!==null;){A=j;var B=A.stateNode;if(A.tag===5&&B!==null&&(A=B,R!==null&&(B=ni(j,R),B!=null&&Q.push(Si(j,B,A)))),De)break;j=j.return}0<Q.length&&(_=new W(_,G,null,s,F),I.push({event:_,listeners:Q}))}}if((n&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",_&&s!==ga&&(G=s.relatedTarget||s.fromElement)&&($n(G)||G[Zt]))break e;if((W||_)&&(_=F.window===F?F:(_=F.ownerDocument)?_.defaultView||_.parentWindow:window,W?(G=s.relatedTarget||s.toElement,W=L,G=G?$n(G):null,G!==null&&(De=Un(G),G!==De||G.tag!==5&&G.tag!==6)&&(G=null)):(W=null,G=L),W!==G)){if(Q=Ad,B="onMouseLeave",R="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Dd,B="onPointerLeave",R="onPointerEnter",j="pointer"),De=W==null?_:Cr(W),A=G==null?_:Cr(G),_=new Q(B,j+"leave",W,s,F),_.target=De,_.relatedTarget=A,B=null,$n(F)===L&&(Q=new Q(R,j+"enter",G,s,F),Q.target=A,Q.relatedTarget=De,B=Q),De=B,W&&G)t:{for(Q=W,R=G,j=0,A=Q;A;A=Sr(A))j++;for(A=0,B=R;B;B=Sr(B))A++;for(;0<j-A;)Q=Sr(Q),j--;for(;0<A-j;)R=Sr(R),A--;for(;j--;){if(Q===R||R!==null&&Q===R.alternate)break t;Q=Sr(Q),R=Sr(R)}Q=null}else Q=null;W!==null&&af(I,_,W,Q,!1),G!==null&&De!==null&&af(I,De,G,Q,!0)}}e:{if(_=L?Cr(L):window,W=_.nodeName&&_.nodeName.toLowerCase(),W==="select"||W==="input"&&_.type==="file")var Z=X0;else if(Fd(_))if(Bd)Z=ev;else{Z=J0;var re=Q0}else(W=_.nodeName)&&W.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(Z=Z0);if(Z&&(Z=Z(e,L))){Id(I,Z,s,F);break e}re&&re(e,_,L),e==="focusout"&&(re=_._wrapperState)&&re.controlled&&_.type==="number"&&da(_,"number",_.value)}switch(re=L?Cr(L):window,e){case"focusin":(Fd(re)||re.contentEditable==="true")&&(xr=re,Ia=L,vi=null);break;case"focusout":vi=Ia=xr=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,Yd(I,s,F);break;case"selectionchange":if(rv)break;case"keydown":case"keyup":Yd(I,s,F)}var ie;if(Va)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else vr?_d(e,s)&&(oe="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(oe="onCompositionStart");oe&&(Od&&s.locale!=="ko"&&(vr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&vr&&(ie=Nd()):(gn=F,Ra="value"in gn?gn.value:gn.textContent,vr=!0)),re=Ms(L,oe),0<re.length&&(oe=new Ld(oe,e,null,s,F),I.push({event:oe,listeners:re}),ie?oe.data=ie:(ie=zd(s),ie!==null&&(oe.data=ie)))),(ie=H0?W0(e,s):K0(e,s))&&(L=Ms(L,"onBeforeInput"),0<L.length&&(F=new Ld("onBeforeInput","beforeinput",null,s,F),I.push({event:F,listeners:L}),F.data=ie))}sf(I,n)})}function Si(e,n,s){return{instance:e,listener:n,currentTarget:s}}function Ms(e,n){for(var s=n+"Capture",a=[];e!==null;){var d=e,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=ni(e,s),f!=null&&a.unshift(Si(e,f,d)),f=ni(e,n),f!=null&&a.push(Si(e,f,d))),e=e.return}return a}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function af(e,n,s,a,d){for(var f=n._reactName,v=[];s!==null&&s!==a;){var S=s,P=S.alternate,L=S.stateNode;if(P!==null&&P===a)break;S.tag===5&&L!==null&&(S=L,d?(P=ni(s,f),P!=null&&v.unshift(Si(s,P,S))):d||(P=ni(s,f),P!=null&&v.push(Si(s,P,S)))),s=s.return}v.length!==0&&e.push({event:n,listeners:v})}var av=/\r\n?/g,lv=/\u0000|\uFFFD/g;function lf(e){return(typeof e=="string"?e:""+e).replace(av,`
`).replace(lv,"")}function Vs(e,n,s){if(n=lf(n),lf(e)!==n&&s)throw Error(i(425))}function _s(){}var Ka=null,Ga=null;function Ya(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xa=typeof setTimeout=="function"?setTimeout:void 0,uv=typeof clearTimeout=="function"?clearTimeout:void 0,uf=typeof Promise=="function"?Promise:void 0,cv=typeof queueMicrotask=="function"?queueMicrotask:typeof uf<"u"?function(e){return uf.resolve(null).then(e).catch(dv)}:Xa;function dv(e){setTimeout(function(){throw e})}function Qa(e,n){var s=n,a=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(a===0){e.removeChild(d),di(n);return}a--}else s!=="$"&&s!=="$?"&&s!=="$!"||a++;s=d}while(s);di(n)}function vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function cf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Er,Ei="__reactProps$"+Er,Zt="__reactContainer$"+Er,Ja="__reactEvents$"+Er,fv="__reactListeners$"+Er,pv="__reactHandles$"+Er;function $n(e){var n=e[Ht];if(n)return n;for(var s=e.parentNode;s;){if(n=s[Zt]||s[Ht]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=cf(e);e!==null;){if(s=e[Ht])return s;e=cf(e)}return n}e=s,s=e.parentNode}return null}function Ci(e){return e=e[Ht]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function zs(e){return e[Ei]||null}var Za=[],Tr=-1;function xn(e){return{current:e}}function Ce(e){0>Tr||(e.current=Za[Tr],Za[Tr]=null,Tr--)}function we(e,n){Tr++,Za[Tr]=e.current,e.current=n}var wn={},Ye=xn(wn),lt=xn(!1),qn=wn;function Pr(e,n){var s=e.type.contextTypes;if(!s)return wn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in s)d[f]=n[f];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function ut(e){return e=e.childContextTypes,e!=null}function Fs(){Ce(lt),Ce(Ye)}function df(e,n,s){if(Ye.current!==wn)throw Error(i(168));we(Ye,n),we(lt,s)}function ff(e,n,s){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return s;a=a.getChildContext();for(var d in a)if(!(d in n))throw Error(i(108,xe(e)||"Unknown",d));return H({},s,a)}function Is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,qn=Ye.current,we(Ye,e),we(lt,lt.current),!0}function pf(e,n,s){var a=e.stateNode;if(!a)throw Error(i(169));s?(e=ff(e,n,qn),a.__reactInternalMemoizedMergedChildContext=e,Ce(lt),Ce(Ye),we(Ye,e)):Ce(lt),we(lt,s)}var en=null,Bs=!1,el=!1;function hf(e){en===null?en=[e]:en.push(e)}function hv(e){Bs=!0,hf(e)}function Sn(){if(!el&&en!==null){el=!0;var e=0,n=ve;try{var s=en;for(ve=1;e<s.length;e++){var a=s[e];do a=a(!0);while(a!==null)}en=null,Bs=!1}catch(d){throw en!==null&&(en=en.slice(e+1)),md(Ea,Sn),d}finally{ve=n,el=!1}}return null}var kr=[],br=0,Us=null,$s=0,Tt=[],Pt=0,Hn=null,tn=1,nn="";function Wn(e,n){kr[br++]=$s,kr[br++]=Us,Us=e,$s=n}function mf(e,n,s){Tt[Pt++]=tn,Tt[Pt++]=nn,Tt[Pt++]=Hn,Hn=e;var a=tn;e=nn;var d=32-Mt(a)-1;a&=~(1<<d),s+=1;var f=32-Mt(n)+d;if(30<f){var v=d-d%5;f=(a&(1<<v)-1).toString(32),a>>=v,d-=v,tn=1<<32-Mt(n)+d|s<<d|a,nn=f+e}else tn=1<<f|s<<d|a,nn=e}function tl(e){e.return!==null&&(Wn(e,1),mf(e,1,0))}function nl(e){for(;e===Us;)Us=kr[--br],kr[br]=null,$s=kr[--br],kr[br]=null;for(;e===Hn;)Hn=Tt[--Pt],Tt[Pt]=null,nn=Tt[--Pt],Tt[Pt]=null,tn=Tt[--Pt],Tt[Pt]=null}var St=null,Et=null,Pe=!1,_t=null;function gf(e,n){var s=Nt(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=e,n=e.deletions,n===null?(e.deletions=[s],e.flags|=16):n.push(s)}function yf(e,n){switch(e.tag){case 5:var s=e.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,St=e,Et=vn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,St=e,Et=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=Hn!==null?{id:tn,overflow:nn}:null,e.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=Nt(18,null,null,0),s.stateNode=n,s.return=e,e.child=s,St=e,Et=null,!0):!1;default:return!1}}function rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function il(e){if(Pe){var n=Et;if(n){var s=n;if(!yf(e,n)){if(rl(e))throw Error(i(418));n=vn(s.nextSibling);var a=St;n&&yf(e,n)?gf(a,s):(e.flags=e.flags&-4097|2,Pe=!1,St=e)}}else{if(rl(e))throw Error(i(418));e.flags=e.flags&-4097|2,Pe=!1,St=e}}}function vf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function qs(e){if(e!==St)return!1;if(!Pe)return vf(e),Pe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ya(e.type,e.memoizedProps)),n&&(n=Et)){if(rl(e))throw xf(),Error(i(418));for(;n;)gf(e,n),n=vn(n.nextSibling)}if(vf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(n===0){Et=vn(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}e=e.nextSibling}Et=null}}else Et=St?vn(e.stateNode.nextSibling):null;return!0}function xf(){for(var e=Et;e;)e=vn(e.nextSibling)}function jr(){Et=St=null,Pe=!1}function sl(e){_t===null?_t=[e]:_t.push(e)}var mv=q.ReactCurrentBatchConfig;function Ti(e,n,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(i(309));var a=s.stateNode}if(!a)throw Error(i(147,e));var d=a,f=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===f?n.ref:(n=function(v){var S=d.refs;v===null?delete S[f]:S[f]=v},n._stringRef=f,n)}if(typeof e!="string")throw Error(i(284));if(!s._owner)throw Error(i(290,e))}return e}function Hs(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function wf(e){var n=e._init;return n(e._payload)}function Sf(e){function n(R,j){if(e){var A=R.deletions;A===null?(R.deletions=[j],R.flags|=16):A.push(j)}}function s(R,j){if(!e)return null;for(;j!==null;)n(R,j),j=j.sibling;return null}function a(R,j){for(R=new Map;j!==null;)j.key!==null?R.set(j.key,j):R.set(j.index,j),j=j.sibling;return R}function d(R,j){return R=Nn(R,j),R.index=0,R.sibling=null,R}function f(R,j,A){return R.index=A,e?(A=R.alternate,A!==null?(A=A.index,A<j?(R.flags|=2,j):A):(R.flags|=2,j)):(R.flags|=1048576,j)}function v(R){return e&&R.alternate===null&&(R.flags|=2),R}function S(R,j,A,B){return j===null||j.tag!==6?(j=Xl(A,R.mode,B),j.return=R,j):(j=d(j,A),j.return=R,j)}function P(R,j,A,B){var Z=A.type;return Z===ee?F(R,j,A.props.children,B,A.key):j!==null&&(j.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===nt&&wf(Z)===j.type)?(B=d(j,A.props),B.ref=Ti(R,j,A),B.return=R,B):(B=go(A.type,A.key,A.props,null,R.mode,B),B.ref=Ti(R,j,A),B.return=R,B)}function L(R,j,A,B){return j===null||j.tag!==4||j.stateNode.containerInfo!==A.containerInfo||j.stateNode.implementation!==A.implementation?(j=Ql(A,R.mode,B),j.return=R,j):(j=d(j,A.children||[]),j.return=R,j)}function F(R,j,A,B,Z){return j===null||j.tag!==7?(j=er(A,R.mode,B,Z),j.return=R,j):(j=d(j,A),j.return=R,j)}function I(R,j,A){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Xl(""+j,R.mode,A),j.return=R,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case $:return A=go(j.type,j.key,j.props,null,R.mode,A),A.ref=Ti(R,null,j),A.return=R,A;case X:return j=Ql(j,R.mode,A),j.return=R,j;case nt:var B=j._init;return I(R,B(j._payload),A)}if(Zr(j)||te(j))return j=er(j,R.mode,A,null),j.return=R,j;Hs(R,j)}return null}function _(R,j,A,B){var Z=j!==null?j.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return Z!==null?null:S(R,j,""+A,B);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case $:return A.key===Z?P(R,j,A,B):null;case X:return A.key===Z?L(R,j,A,B):null;case nt:return Z=A._init,_(R,j,Z(A._payload),B)}if(Zr(A)||te(A))return Z!==null?null:F(R,j,A,B,null);Hs(R,A)}return null}function W(R,j,A,B,Z){if(typeof B=="string"&&B!==""||typeof B=="number")return R=R.get(A)||null,S(j,R,""+B,Z);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case $:return R=R.get(B.key===null?A:B.key)||null,P(j,R,B,Z);case X:return R=R.get(B.key===null?A:B.key)||null,L(j,R,B,Z);case nt:var re=B._init;return W(R,j,A,re(B._payload),Z)}if(Zr(B)||te(B))return R=R.get(A)||null,F(j,R,B,Z,null);Hs(j,B)}return null}function G(R,j,A,B){for(var Z=null,re=null,ie=j,oe=j=0,qe=null;ie!==null&&oe<A.length;oe++){ie.index>oe?(qe=ie,ie=null):qe=ie.sibling;var me=_(R,ie,A[oe],B);if(me===null){ie===null&&(ie=qe);break}e&&ie&&me.alternate===null&&n(R,ie),j=f(me,j,oe),re===null?Z=me:re.sibling=me,re=me,ie=qe}if(oe===A.length)return s(R,ie),Pe&&Wn(R,oe),Z;if(ie===null){for(;oe<A.length;oe++)ie=I(R,A[oe],B),ie!==null&&(j=f(ie,j,oe),re===null?Z=ie:re.sibling=ie,re=ie);return Pe&&Wn(R,oe),Z}for(ie=a(R,ie);oe<A.length;oe++)qe=W(ie,R,oe,A[oe],B),qe!==null&&(e&&qe.alternate!==null&&ie.delete(qe.key===null?oe:qe.key),j=f(qe,j,oe),re===null?Z=qe:re.sibling=qe,re=qe);return e&&ie.forEach(function(Rn){return n(R,Rn)}),Pe&&Wn(R,oe),Z}function Q(R,j,A,B){var Z=te(A);if(typeof Z!="function")throw Error(i(150));if(A=Z.call(A),A==null)throw Error(i(151));for(var re=Z=null,ie=j,oe=j=0,qe=null,me=A.next();ie!==null&&!me.done;oe++,me=A.next()){ie.index>oe?(qe=ie,ie=null):qe=ie.sibling;var Rn=_(R,ie,me.value,B);if(Rn===null){ie===null&&(ie=qe);break}e&&ie&&Rn.alternate===null&&n(R,ie),j=f(Rn,j,oe),re===null?Z=Rn:re.sibling=Rn,re=Rn,ie=qe}if(me.done)return s(R,ie),Pe&&Wn(R,oe),Z;if(ie===null){for(;!me.done;oe++,me=A.next())me=I(R,me.value,B),me!==null&&(j=f(me,j,oe),re===null?Z=me:re.sibling=me,re=me);return Pe&&Wn(R,oe),Z}for(ie=a(R,ie);!me.done;oe++,me=A.next())me=W(ie,R,oe,me.value,B),me!==null&&(e&&me.alternate!==null&&ie.delete(me.key===null?oe:me.key),j=f(me,j,oe),re===null?Z=me:re.sibling=me,re=me);return e&&ie.forEach(function(Gv){return n(R,Gv)}),Pe&&Wn(R,oe),Z}function De(R,j,A,B){if(typeof A=="object"&&A!==null&&A.type===ee&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case $:e:{for(var Z=A.key,re=j;re!==null;){if(re.key===Z){if(Z=A.type,Z===ee){if(re.tag===7){s(R,re.sibling),j=d(re,A.props.children),j.return=R,R=j;break e}}else if(re.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===nt&&wf(Z)===re.type){s(R,re.sibling),j=d(re,A.props),j.ref=Ti(R,re,A),j.return=R,R=j;break e}s(R,re);break}else n(R,re);re=re.sibling}A.type===ee?(j=er(A.props.children,R.mode,B,A.key),j.return=R,R=j):(B=go(A.type,A.key,A.props,null,R.mode,B),B.ref=Ti(R,j,A),B.return=R,R=B)}return v(R);case X:e:{for(re=A.key;j!==null;){if(j.key===re)if(j.tag===4&&j.stateNode.containerInfo===A.containerInfo&&j.stateNode.implementation===A.implementation){s(R,j.sibling),j=d(j,A.children||[]),j.return=R,R=j;break e}else{s(R,j);break}else n(R,j);j=j.sibling}j=Ql(A,R.mode,B),j.return=R,R=j}return v(R);case nt:return re=A._init,De(R,j,re(A._payload),B)}if(Zr(A))return G(R,j,A,B);if(te(A))return Q(R,j,A,B);Hs(R,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,j!==null&&j.tag===6?(s(R,j.sibling),j=d(j,A),j.return=R,R=j):(s(R,j),j=Xl(A,R.mode,B),j.return=R,R=j),v(R)):s(R,j)}return De}var Nr=Sf(!0),Ef=Sf(!1),Ws=xn(null),Ks=null,Rr=null,ol=null;function al(){ol=Rr=Ks=null}function ll(e){var n=Ws.current;Ce(Ws),e._currentValue=n}function ul(e,n,s){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===s)break;e=e.return}}function Ar(e,n){Ks=e,ol=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ct=!0),e.firstContext=null)}function kt(e){var n=e._currentValue;if(ol!==e)if(e={context:e,memoizedValue:n,next:null},Rr===null){if(Ks===null)throw Error(i(308));Rr=e,Ks.dependencies={lanes:0,firstContext:e}}else Rr=Rr.next=e;return n}var Kn=null;function cl(e){Kn===null?Kn=[e]:Kn.push(e)}function Cf(e,n,s,a){var d=n.interleaved;return d===null?(s.next=s,cl(n)):(s.next=d.next,d.next=s),n.interleaved=s,rn(e,a)}function rn(e,n){e.lanes|=n;var s=e.alternate;for(s!==null&&(s.lanes|=n),s=e,e=e.return;e!==null;)e.childLanes|=n,s=e.alternate,s!==null&&(s.childLanes|=n),s=e,e=e.return;return s.tag===3?s.stateNode:null}var En=!1;function dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Cn(e,n,s){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(fe&2)!==0){var d=a.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),a.pending=n,rn(e,s)}return d=a.interleaved,d===null?(n.next=n,cl(a)):(n.next=d.next,d.next=n),a.interleaved=n,rn(e,s)}function Gs(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,s|=a,n.lanes=s,Pa(e,s)}}function Pf(e,n){var s=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var d=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var v={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};f===null?d=f=v:f=f.next=v,s=s.next}while(s!==null);f===null?d=f=n:f=f.next=n}else d=f=n;s={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:a.shared,effects:a.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}function Ys(e,n,s,a){var d=e.updateQueue;En=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,L=P.next;P.next=null,v===null?f=L:v.next=L,v=P;var F=e.alternate;F!==null&&(F=F.updateQueue,S=F.lastBaseUpdate,S!==v&&(S===null?F.firstBaseUpdate=L:S.next=L,F.lastBaseUpdate=P))}if(f!==null){var I=d.baseState;v=0,F=L=P=null,S=f;do{var _=S.lane,W=S.eventTime;if((a&_)===_){F!==null&&(F=F.next={eventTime:W,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var G=e,Q=S;switch(_=n,W=s,Q.tag){case 1:if(G=Q.payload,typeof G=="function"){I=G.call(W,I,_);break e}I=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=Q.payload,_=typeof G=="function"?G.call(W,I,_):G,_==null)break e;I=H({},I,_);break e;case 2:En=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,_=d.effects,_===null?d.effects=[S]:_.push(S))}else W={eventTime:W,lane:_,tag:S.tag,payload:S.payload,callback:S.callback,next:null},F===null?(L=F=W,P=I):F=F.next=W,v|=_;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;_=S,S=_.next,_.next=null,d.lastBaseUpdate=_,d.shared.pending=null}}while(!0);if(F===null&&(P=I),d.baseState=P,d.firstBaseUpdate=L,d.lastBaseUpdate=F,n=d.shared.interleaved,n!==null){d=n;do v|=d.lane,d=d.next;while(d!==n)}else f===null&&(d.shared.lanes=0);Xn|=v,e.lanes=v,e.memoizedState=I}}function kf(e,n,s){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],d=a.callback;if(d!==null){if(a.callback=null,a=s,typeof d!="function")throw Error(i(191,d));d.call(a)}}}var Pi={},Wt=xn(Pi),ki=xn(Pi),bi=xn(Pi);function Gn(e){if(e===Pi)throw Error(i(174));return e}function fl(e,n){switch(we(bi,n),we(ki,e),we(Wt,Pi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:pa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=pa(n,e)}Ce(Wt),we(Wt,n)}function Lr(){Ce(Wt),Ce(ki),Ce(bi)}function bf(e){Gn(bi.current);var n=Gn(Wt.current),s=pa(n,e.type);n!==s&&(we(ki,e),we(Wt,s))}function pl(e){ki.current===e&&(Ce(Wt),Ce(ki))}var be=xn(0);function Xs(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var hl=[];function ml(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var Qs=q.ReactCurrentDispatcher,gl=q.ReactCurrentBatchConfig,Yn=0,je=null,Ie=null,Ue=null,Js=!1,ji=!1,Ni=0,gv=0;function Xe(){throw Error(i(321))}function yl(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Vt(e[s],n[s]))return!1;return!0}function vl(e,n,s,a,d,f){if(Yn=f,je=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Qs.current=e===null||e.memoizedState===null?wv:Sv,e=s(a,d),ji){f=0;do{if(ji=!1,Ni=0,25<=f)throw Error(i(301));f+=1,Ue=Ie=null,n.updateQueue=null,Qs.current=Ev,e=s(a,d)}while(ji)}if(Qs.current=to,n=Ie!==null&&Ie.next!==null,Yn=0,Ue=Ie=je=null,Js=!1,n)throw Error(i(300));return e}function xl(){var e=Ni!==0;return Ni=0,e}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?je.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function bt(){if(Ie===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=Ue===null?je.memoizedState:Ue.next;if(n!==null)Ue=n,Ie=e;else{if(e===null)throw Error(i(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Ue===null?je.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ri(e,n){return typeof n=="function"?n(e):n}function wl(e){var n=bt(),s=n.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var a=Ie,d=a.baseQueue,f=s.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}a.baseQueue=d=f,s.pending=null}if(d!==null){f=d.next,a=a.baseState;var S=v=null,P=null,L=f;do{var F=L.lane;if((Yn&F)===F)P!==null&&(P=P.next={lane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),a=L.hasEagerState?L.eagerState:e(a,L.action);else{var I={lane:F,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null};P===null?(S=P=I,v=a):P=P.next=I,je.lanes|=F,Xn|=F}L=L.next}while(L!==null&&L!==f);P===null?v=a:P.next=S,Vt(a,n.memoizedState)||(ct=!0),n.memoizedState=a,n.baseState=v,n.baseQueue=P,s.lastRenderedState=a}if(e=s.interleaved,e!==null){d=e;do f=d.lane,je.lanes|=f,Xn|=f,d=d.next;while(d!==e)}else d===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function Sl(e){var n=bt(),s=n.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var a=s.dispatch,d=s.pending,f=n.memoizedState;if(d!==null){s.pending=null;var v=d=d.next;do f=e(f,v.action),v=v.next;while(v!==d);Vt(f,n.memoizedState)||(ct=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,a]}function jf(){}function Nf(e,n){var s=je,a=bt(),d=n(),f=!Vt(a.memoizedState,d);if(f&&(a.memoizedState=d,ct=!0),a=a.queue,El(Lf.bind(null,s,a,e),[e]),a.getSnapshot!==n||f||Ue!==null&&Ue.memoizedState.tag&1){if(s.flags|=2048,Ai(9,Af.bind(null,s,a,d,n),void 0,null),$e===null)throw Error(i(349));(Yn&30)!==0||Rf(s,n,d)}return d}function Rf(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=je.updateQueue,n===null?(n={lastEffect:null,stores:null},je.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function Af(e,n,s,a){n.value=s,n.getSnapshot=a,Df(n)&&Of(e)}function Lf(e,n,s){return s(function(){Df(n)&&Of(e)})}function Df(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Vt(e,s)}catch{return!0}}function Of(e){var n=rn(e,1);n!==null&&Bt(n,e,1,-1)}function Mf(e){var n=Kt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},n.queue=e,e=e.dispatch=xv.bind(null,je,e),[n.memoizedState,e]}function Ai(e,n,s,a){return e={tag:e,create:n,destroy:s,deps:a,next:null},n=je.updateQueue,n===null?(n={lastEffect:null,stores:null},je.updateQueue=n,n.lastEffect=e.next=e):(s=n.lastEffect,s===null?n.lastEffect=e.next=e:(a=s.next,s.next=e,e.next=a,n.lastEffect=e)),e}function Vf(){return bt().memoizedState}function Zs(e,n,s,a){var d=Kt();je.flags|=e,d.memoizedState=Ai(1|n,s,void 0,a===void 0?null:a)}function eo(e,n,s,a){var d=bt();a=a===void 0?null:a;var f=void 0;if(Ie!==null){var v=Ie.memoizedState;if(f=v.destroy,a!==null&&yl(a,v.deps)){d.memoizedState=Ai(n,s,f,a);return}}je.flags|=e,d.memoizedState=Ai(1|n,s,f,a)}function _f(e,n){return Zs(8390656,8,e,n)}function El(e,n){return eo(2048,8,e,n)}function zf(e,n){return eo(4,2,e,n)}function Ff(e,n){return eo(4,4,e,n)}function If(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bf(e,n,s){return s=s!=null?s.concat([e]):null,eo(4,4,If.bind(null,n,e),s)}function Cl(){}function Uf(e,n){var s=bt();n=n===void 0?null:n;var a=s.memoizedState;return a!==null&&n!==null&&yl(n,a[1])?a[0]:(s.memoizedState=[e,n],e)}function $f(e,n){var s=bt();n=n===void 0?null:n;var a=s.memoizedState;return a!==null&&n!==null&&yl(n,a[1])?a[0]:(e=e(),s.memoizedState=[e,n],e)}function qf(e,n,s){return(Yn&21)===0?(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=s):(Vt(s,n)||(s=xd(),je.lanes|=s,Xn|=s,e.baseState=!0),n)}function yv(e,n){var s=ve;ve=s!==0&&4>s?s:4,e(!0);var a=gl.transition;gl.transition={};try{e(!1),n()}finally{ve=s,gl.transition=a}}function Hf(){return bt().memoizedState}function vv(e,n,s){var a=bn(e);if(s={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null},Wf(e))Kf(n,s);else if(s=Cf(e,n,s,a),s!==null){var d=it();Bt(s,e,a,d),Gf(s,n,a)}}function xv(e,n,s){var a=bn(e),d={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null};if(Wf(e))Kf(n,d);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,S=f(v,s);if(d.hasEagerState=!0,d.eagerState=S,Vt(S,v)){var P=n.interleaved;P===null?(d.next=d,cl(n)):(d.next=P.next,P.next=d),n.interleaved=d;return}}catch{}finally{}s=Cf(e,n,d,a),s!==null&&(d=it(),Bt(s,e,a,d),Gf(s,n,a))}}function Wf(e){var n=e.alternate;return e===je||n!==null&&n===je}function Kf(e,n){ji=Js=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function Gf(e,n,s){if((s&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,s|=a,n.lanes=s,Pa(e,s)}}var to={readContext:kt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},wv={readContext:kt,useCallback:function(e,n){return Kt().memoizedState=[e,n===void 0?null:n],e},useContext:kt,useEffect:_f,useImperativeHandle:function(e,n,s){return s=s!=null?s.concat([e]):null,Zs(4194308,4,If.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Zs(4194308,4,e,n)},useInsertionEffect:function(e,n){return Zs(4,2,e,n)},useMemo:function(e,n){var s=Kt();return n=n===void 0?null:n,e=e(),s.memoizedState=[e,n],e},useReducer:function(e,n,s){var a=Kt();return n=s!==void 0?s(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=vv.bind(null,je,e),[a.memoizedState,e]},useRef:function(e){var n=Kt();return e={current:e},n.memoizedState=e},useState:Mf,useDebugValue:Cl,useDeferredValue:function(e){return Kt().memoizedState=e},useTransition:function(){var e=Mf(!1),n=e[0];return e=yv.bind(null,e[1]),Kt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,s){var a=je,d=Kt();if(Pe){if(s===void 0)throw Error(i(407));s=s()}else{if(s=n(),$e===null)throw Error(i(349));(Yn&30)!==0||Rf(a,n,s)}d.memoizedState=s;var f={value:s,getSnapshot:n};return d.queue=f,_f(Lf.bind(null,a,f,e),[e]),a.flags|=2048,Ai(9,Af.bind(null,a,f,s,n),void 0,null),s},useId:function(){var e=Kt(),n=$e.identifierPrefix;if(Pe){var s=nn,a=tn;s=(a&~(1<<32-Mt(a)-1)).toString(32)+s,n=":"+n+"R"+s,s=Ni++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=gv++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Sv={readContext:kt,useCallback:Uf,useContext:kt,useEffect:El,useImperativeHandle:Bf,useInsertionEffect:zf,useLayoutEffect:Ff,useMemo:$f,useReducer:wl,useRef:Vf,useState:function(){return wl(Ri)},useDebugValue:Cl,useDeferredValue:function(e){var n=bt();return qf(n,Ie.memoizedState,e)},useTransition:function(){var e=wl(Ri)[0],n=bt().memoizedState;return[e,n]},useMutableSource:jf,useSyncExternalStore:Nf,useId:Hf,unstable_isNewReconciler:!1},Ev={readContext:kt,useCallback:Uf,useContext:kt,useEffect:El,useImperativeHandle:Bf,useInsertionEffect:zf,useLayoutEffect:Ff,useMemo:$f,useReducer:Sl,useRef:Vf,useState:function(){return Sl(Ri)},useDebugValue:Cl,useDeferredValue:function(e){var n=bt();return Ie===null?n.memoizedState=e:qf(n,Ie.memoizedState,e)},useTransition:function(){var e=Sl(Ri)[0],n=bt().memoizedState;return[e,n]},useMutableSource:jf,useSyncExternalStore:Nf,useId:Hf,unstable_isNewReconciler:!1};function zt(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var s in e)n[s]===void 0&&(n[s]=e[s]);return n}return n}function Tl(e,n,s,a){n=e.memoizedState,s=s(a,n),s=s==null?n:H({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var no={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var a=it(),d=bn(e),f=sn(a,d);f.payload=n,s!=null&&(f.callback=s),n=Cn(e,f,d),n!==null&&(Bt(n,e,d,a),Gs(n,e,d))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var a=it(),d=bn(e),f=sn(a,d);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=Cn(e,f,d),n!==null&&(Bt(n,e,d,a),Gs(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=it(),a=bn(e),d=sn(s,a);d.tag=2,n!=null&&(d.callback=n),n=Cn(e,d,a),n!==null&&(Bt(n,e,a,s),Gs(n,e,a))}};function Yf(e,n,s,a,d,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,f,v):n.prototype&&n.prototype.isPureReactComponent?!yi(s,a)||!yi(d,f):!0}function Xf(e,n,s){var a=!1,d=wn,f=n.contextType;return typeof f=="object"&&f!==null?f=kt(f):(d=ut(n)?qn:Ye.current,a=n.contextTypes,f=(a=a!=null)?Pr(e,d):wn),n=new n(s,f),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=no,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=f),n}function Qf(e,n,s,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,a),n.state!==e&&no.enqueueReplaceState(n,n.state,null)}function Pl(e,n,s,a){var d=e.stateNode;d.props=s,d.state=e.memoizedState,d.refs={},dl(e);var f=n.contextType;typeof f=="object"&&f!==null?d.context=kt(f):(f=ut(n)?qn:Ye.current,d.context=Pr(e,f)),d.state=e.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Tl(e,n,f,s),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&no.enqueueReplaceState(d,d.state,null),Ys(e,s,d,a),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,n){try{var s="",a=n;do s+=pe(a),a=a.return;while(a);var d=s}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:n,stack:d,digest:null}}function kl(e,n,s){return{value:e,source:null,stack:s??null,digest:n??null}}function bl(e,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var Cv=typeof WeakMap=="function"?WeakMap:Map;function Jf(e,n,s){s=sn(-1,s),s.tag=3,s.payload={element:null};var a=n.value;return s.callback=function(){uo||(uo=!0,Ul=a),bl(e,n)},s}function Zf(e,n,s){s=sn(-1,s),s.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var d=n.value;s.payload=function(){return a(d)},s.callback=function(){bl(e,n)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(s.callback=function(){bl(e,n),typeof a!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),s}function ep(e,n,s){var a=e.pingCache;if(a===null){a=e.pingCache=new Cv;var d=new Set;a.set(n,d)}else d=a.get(n),d===void 0&&(d=new Set,a.set(n,d));d.has(s)||(d.add(s),e=_v.bind(null,e,n,s),n.then(e,e))}function tp(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function np(e,n,s,a,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=sn(-1,1),n.tag=2,Cn(s,n,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var Tv=q.ReactCurrentOwner,ct=!1;function rt(e,n,s,a){n.child=e===null?Ef(n,null,s,a):Nr(n,e.child,s,a)}function rp(e,n,s,a,d){s=s.render;var f=n.ref;return Ar(n,d),a=vl(e,n,s,a,f,d),s=xl(),e!==null&&!ct?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,on(e,n,d)):(Pe&&s&&tl(n),n.flags|=1,rt(e,n,a,d),n.child)}function ip(e,n,s,a,d){if(e===null){var f=s.type;return typeof f=="function"&&!Yl(f)&&f.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=f,sp(e,n,f,a,d)):(e=go(s.type,null,a,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,(e.lanes&d)===0){var v=f.memoizedProps;if(s=s.compare,s=s!==null?s:yi,s(v,a)&&e.ref===n.ref)return on(e,n,d)}return n.flags|=1,e=Nn(f,a),e.ref=n.ref,e.return=n,n.child=e}function sp(e,n,s,a,d){if(e!==null){var f=e.memoizedProps;if(yi(f,a)&&e.ref===n.ref)if(ct=!1,n.pendingProps=a=f,(e.lanes&d)!==0)(e.flags&131072)!==0&&(ct=!0);else return n.lanes=e.lanes,on(e,n,d)}return jl(e,n,s,a,d)}function op(e,n,s){var a=n.pendingProps,d=a.children,f=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Mr,Ct),Ct|=s;else{if((s&1073741824)===0)return e=f!==null?f.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,we(Mr,Ct),Ct|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=f!==null?f.baseLanes:s,we(Mr,Ct),Ct|=a}else f!==null?(a=f.baseLanes|s,n.memoizedState=null):a=s,we(Mr,Ct),Ct|=a;return rt(e,n,d,s),n.child}function ap(e,n){var s=n.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function jl(e,n,s,a,d){var f=ut(s)?qn:Ye.current;return f=Pr(n,f),Ar(n,d),s=vl(e,n,s,a,f,d),a=xl(),e!==null&&!ct?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,on(e,n,d)):(Pe&&a&&tl(n),n.flags|=1,rt(e,n,s,d),n.child)}function lp(e,n,s,a,d){if(ut(s)){var f=!0;Is(n)}else f=!1;if(Ar(n,d),n.stateNode===null)io(e,n),Xf(n,s,a),Pl(n,s,a,d),a=!0;else if(e===null){var v=n.stateNode,S=n.memoizedProps;v.props=S;var P=v.context,L=s.contextType;typeof L=="object"&&L!==null?L=kt(L):(L=ut(s)?qn:Ye.current,L=Pr(n,L));var F=s.getDerivedStateFromProps,I=typeof F=="function"||typeof v.getSnapshotBeforeUpdate=="function";I||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==a||P!==L)&&Qf(n,v,a,L),En=!1;var _=n.memoizedState;v.state=_,Ys(n,a,v,d),P=n.memoizedState,S!==a||_!==P||lt.current||En?(typeof F=="function"&&(Tl(n,s,F,a),P=n.memoizedState),(S=En||Yf(n,s,S,a,_,P,L))?(I||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=P),v.props=a,v.state=P,v.context=L,a=S):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{v=n.stateNode,Tf(e,n),S=n.memoizedProps,L=n.type===n.elementType?S:zt(n.type,S),v.props=L,I=n.pendingProps,_=v.context,P=s.contextType,typeof P=="object"&&P!==null?P=kt(P):(P=ut(s)?qn:Ye.current,P=Pr(n,P));var W=s.getDerivedStateFromProps;(F=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==I||_!==P)&&Qf(n,v,a,P),En=!1,_=n.memoizedState,v.state=_,Ys(n,a,v,d);var G=n.memoizedState;S!==I||_!==G||lt.current||En?(typeof W=="function"&&(Tl(n,s,W,a),G=n.memoizedState),(L=En||Yf(n,s,L,a,_,G,P)||!1)?(F||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(a,G,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(a,G,P)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=G),v.props=a,v.state=G,v.context=P,a=L):(typeof v.componentDidUpdate!="function"||S===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),a=!1)}return Nl(e,n,s,a,f,d)}function Nl(e,n,s,a,d,f){ap(e,n);var v=(n.flags&128)!==0;if(!a&&!v)return d&&pf(n,s,!1),on(e,n,f);a=n.stateNode,Tv.current=n;var S=v&&typeof s.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&v?(n.child=Nr(n,e.child,null,f),n.child=Nr(n,null,S,f)):rt(e,n,S,f),n.memoizedState=a.state,d&&pf(n,s,!0),n.child}function up(e){var n=e.stateNode;n.pendingContext?df(e,n.pendingContext,n.pendingContext!==n.context):n.context&&df(e,n.context,!1),fl(e,n.containerInfo)}function cp(e,n,s,a,d){return jr(),sl(d),n.flags|=256,rt(e,n,s,a),n.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function dp(e,n,s){var a=n.pendingProps,d=be.current,f=!1,v=(n.flags&128)!==0,S;if((S=v)||(S=e!==null&&e.memoizedState===null?!1:(d&2)!==0),S?(f=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),we(be,d&1),e===null)return il(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(v=a.children,e=a.fallback,f?(a=n.mode,f=n.child,v={mode:"hidden",children:v},(a&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=yo(v,a,0,null),e=er(e,a,s,null),f.return=n,e.return=n,f.sibling=e,n.child=f,n.child.memoizedState=Al(s),n.memoizedState=Rl,e):Ll(n,v));if(d=e.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return Pv(e,n,v,a,S,d,s);if(f){f=a.fallback,v=n.mode,d=e.child,S=d.sibling;var P={mode:"hidden",children:a.children};return(v&1)===0&&n.child!==d?(a=n.child,a.childLanes=0,a.pendingProps=P,n.deletions=null):(a=Nn(d,P),a.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=Nn(S,f):(f=er(f,v,s,null),f.flags|=2),f.return=n,a.return=n,a.sibling=f,n.child=a,a=f,f=n.child,v=e.child.memoizedState,v=v===null?Al(s):{baseLanes:v.baseLanes|s,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=e.childLanes&~s,n.memoizedState=Rl,a}return f=e.child,e=f.sibling,a=Nn(f,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=s),a.return=n,a.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=a,n.memoizedState=null,a}function Ll(e,n){return n=yo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ro(e,n,s,a){return a!==null&&sl(a),Nr(n,e.child,null,s),e=Ll(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pv(e,n,s,a,d,f,v){if(s)return n.flags&256?(n.flags&=-257,a=kl(Error(i(422))),ro(e,n,v,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(f=a.fallback,d=n.mode,a=yo({mode:"visible",children:a.children},d,0,null),f=er(f,d,v,null),f.flags|=2,a.return=n,f.return=n,a.sibling=f,n.child=a,(n.mode&1)!==0&&Nr(n,e.child,null,v),n.child.memoizedState=Al(v),n.memoizedState=Rl,f);if((n.mode&1)===0)return ro(e,n,v,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var S=a.dgst;return a=S,f=Error(i(419)),a=kl(f,a,void 0),ro(e,n,v,a)}if(S=(v&e.childLanes)!==0,ct||S){if(a=$e,a!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,rn(e,d),Bt(a,e,d,-1))}return Gl(),a=kl(Error(i(421))),ro(e,n,v,a)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=zv.bind(null,e),d._reactRetry=n,null):(e=f.treeContext,Et=vn(d.nextSibling),St=n,Pe=!0,_t=null,e!==null&&(Tt[Pt++]=tn,Tt[Pt++]=nn,Tt[Pt++]=Hn,tn=e.id,nn=e.overflow,Hn=n),n=Ll(n,a.children),n.flags|=4096,n)}function fp(e,n,s){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),ul(e.return,n,s)}function Dl(e,n,s,a,d){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:d}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=s,f.tailMode=d)}function pp(e,n,s){var a=n.pendingProps,d=a.revealOrder,f=a.tail;if(rt(e,n,a.children,s),a=be.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fp(e,s,n);else if(e.tag===19)fp(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(we(be,a),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(s=n.child,d=null;s!==null;)e=s.alternate,e!==null&&Xs(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=n.child,n.child=null):(d=s.sibling,s.sibling=null),Dl(n,!1,d,s,f);break;case"backwards":for(s=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&Xs(e)===null){n.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}Dl(n,!0,s,null,f);break;case"together":Dl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function io(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function on(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Xn|=n.lanes,(s&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,s=Nn(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=Nn(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function kv(e,n,s){switch(n.tag){case 3:up(n),jr();break;case 5:bf(n);break;case 1:ut(n.type)&&Is(n);break;case 4:fl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,d=n.memoizedProps.value;we(Ws,a._currentValue),a._currentValue=d;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(we(be,be.current&1),n.flags|=128,null):(s&n.child.childLanes)!==0?dp(e,n,s):(we(be,be.current&1),e=on(e,n,s),e!==null?e.sibling:null);we(be,be.current&1);break;case 19:if(a=(s&n.childLanes)!==0,(e.flags&128)!==0){if(a)return pp(e,n,s);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),we(be,be.current),a)break;return null;case 22:case 23:return n.lanes=0,op(e,n,s)}return on(e,n,s)}var hp,Ol,mp,gp;hp=function(e,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ol=function(){},mp=function(e,n,s,a){var d=e.memoizedProps;if(d!==a){e=n.stateNode,Gn(Wt.current);var f=null;switch(s){case"input":d=ua(e,d),a=ua(e,a),f=[];break;case"select":d=H({},d,{value:void 0}),a=H({},a,{value:void 0}),f=[];break;case"textarea":d=fa(e,d),a=fa(e,a),f=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=_s)}ha(s,a);var v;s=null;for(L in d)if(!a.hasOwnProperty(L)&&d.hasOwnProperty(L)&&d[L]!=null)if(L==="style"){var S=d[L];for(v in S)S.hasOwnProperty(v)&&(s||(s={}),s[v]="")}else L!=="dangerouslySetInnerHTML"&&L!=="children"&&L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&L!=="autoFocus"&&(l.hasOwnProperty(L)?f||(f=[]):(f=f||[]).push(L,null));for(L in a){var P=a[L];if(S=d?.[L],a.hasOwnProperty(L)&&P!==S&&(P!=null||S!=null))if(L==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(s||(s={}),s[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(s||(s={}),s[v]=P[v])}else s||(f||(f=[]),f.push(L,s)),s=P;else L==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(f=f||[]).push(L,P)):L==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(L,""+P):L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&(l.hasOwnProperty(L)?(P!=null&&L==="onScroll"&&Ee("scroll",e),f||S===P||(f=[])):(f=f||[]).push(L,P))}s&&(f=f||[]).push("style",s);var L=f;(n.updateQueue=L)&&(n.flags|=4)}},gp=function(e,n,s,a){s!==a&&(n.flags|=4)};function Li(e,n){if(!Pe)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,a=0;if(n)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=s,n}function bv(e,n,s){var a=n.pendingProps;switch(nl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return ut(n.type)&&Fs(),Qe(n),null;case 3:return a=n.stateNode,Lr(),Ce(lt),Ce(Ye),ml(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_t!==null&&(Hl(_t),_t=null))),Ol(e,n),Qe(n),null;case 5:pl(n);var d=Gn(bi.current);if(s=n.type,e!==null&&n.stateNode!=null)mp(e,n,s,a,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(i(166));return Qe(n),null}if(e=Gn(Wt.current),qs(n)){a=n.stateNode,s=n.type;var f=n.memoizedProps;switch(a[Ht]=n,a[Ei]=f,e=(n.mode&1)!==0,s){case"dialog":Ee("cancel",a),Ee("close",a);break;case"iframe":case"object":case"embed":Ee("load",a);break;case"video":case"audio":for(d=0;d<xi.length;d++)Ee(xi[d],a);break;case"source":Ee("error",a);break;case"img":case"image":case"link":Ee("error",a),Ee("load",a);break;case"details":Ee("toggle",a);break;case"input":Yc(a,f),Ee("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!f.multiple},Ee("invalid",a);break;case"textarea":Jc(a,f),Ee("invalid",a)}ha(s,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var S=f[v];v==="children"?typeof S=="string"?a.textContent!==S&&(f.suppressHydrationWarning!==!0&&Vs(a.textContent,S,e),d=["children",S]):typeof S=="number"&&a.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&Vs(a.textContent,S,e),d=["children",""+S]):l.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ee("scroll",a)}switch(s){case"input":ps(a),Qc(a,f,!0);break;case"textarea":ps(a),ed(a);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(a.onclick=_s)}a=d,n.updateQueue=a,a!==null&&(n.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=td(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=v.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=v.createElement(s,{is:a.is}):(e=v.createElement(s),s==="select"&&(v=e,a.multiple?v.multiple=!0:a.size&&(v.size=a.size))):e=v.createElementNS(e,s),e[Ht]=n,e[Ei]=a,hp(e,n,!1,!1),n.stateNode=e;e:{switch(v=ma(s,a),s){case"dialog":Ee("cancel",e),Ee("close",e),d=a;break;case"iframe":case"object":case"embed":Ee("load",e),d=a;break;case"video":case"audio":for(d=0;d<xi.length;d++)Ee(xi[d],e);d=a;break;case"source":Ee("error",e),d=a;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),d=a;break;case"details":Ee("toggle",e),d=a;break;case"input":Yc(e,a),d=ua(e,a),Ee("invalid",e);break;case"option":d=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},d=H({},a,{value:void 0}),Ee("invalid",e);break;case"textarea":Jc(e,a),d=fa(e,a),Ee("invalid",e);break;default:d=a}ha(s,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var P=S[f];f==="style"?id(e,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&nd(e,P)):f==="children"?typeof P=="string"?(s!=="textarea"||P!=="")&&ei(e,P):typeof P=="number"&&ei(e,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Ee("scroll",e):P!=null&&V(e,f,P,v))}switch(s){case"input":ps(e),Qc(e,a,!1);break;case"textarea":ps(e),ed(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ye(a.value));break;case"select":e.multiple=!!a.multiple,f=a.value,f!=null?pr(e,!!a.multiple,f,!1):a.defaultValue!=null&&pr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=_s)}switch(s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Qe(n),null;case 6:if(e&&n.stateNode!=null)gp(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(i(166));if(s=Gn(bi.current),Gn(Wt.current),qs(n)){if(a=n.stateNode,s=n.memoizedProps,a[Ht]=n,(f=a.nodeValue!==s)&&(e=St,e!==null))switch(e.tag){case 3:Vs(a.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vs(a.nodeValue,s,(e.mode&1)!==0)}f&&(n.flags|=4)}else a=(s.nodeType===9?s:s.ownerDocument).createTextNode(a),a[Ht]=n,n.stateNode=a}return Qe(n),null;case 13:if(Ce(be),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&Et!==null&&(n.mode&1)!==0&&(n.flags&128)===0)xf(),jr(),n.flags|=98560,f=!1;else if(f=qs(n),a!==null&&a.dehydrated!==null){if(e===null){if(!f)throw Error(i(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Ht]=n}else jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),f=!1}else _t!==null&&(Hl(_t),_t=null),f=!0;if(!f)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=s,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(be.current&1)!==0?Be===0&&(Be=3):Gl())),n.updateQueue!==null&&(n.flags|=4),Qe(n),null);case 4:return Lr(),Ol(e,n),e===null&&wi(n.stateNode.containerInfo),Qe(n),null;case 10:return ll(n.type._context),Qe(n),null;case 17:return ut(n.type)&&Fs(),Qe(n),null;case 19:if(Ce(be),f=n.memoizedState,f===null)return Qe(n),null;if(a=(n.flags&128)!==0,v=f.rendering,v===null)if(a)Li(f,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(v=Xs(e),v!==null){for(n.flags|=128,Li(f,!1),a=v.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=s,s=n.child;s!==null;)f=s,e=a,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,e=v.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return we(be,be.current&1|2),n.child}e=e.sibling}f.tail!==null&&Le()>Vr&&(n.flags|=128,a=!0,Li(f,!1),n.lanes=4194304)}else{if(!a)if(e=Xs(v),e!==null){if(n.flags|=128,a=!0,s=e.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),Li(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Pe)return Qe(n),null}else 2*Le()-f.renderingStartTime>Vr&&s!==1073741824&&(n.flags|=128,a=!0,Li(f,!1),n.lanes=4194304);f.isBackwards?(v.sibling=n.child,n.child=v):(s=f.last,s!==null?s.sibling=v:n.child=v,f.last=v)}return f.tail!==null?(n=f.tail,f.rendering=n,f.tail=n.sibling,f.renderingStartTime=Le(),n.sibling=null,s=be.current,we(be,a?s&1|2:s&1),n):(Qe(n),null);case 22:case 23:return Kl(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(Ct&1073741824)!==0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function jv(e,n){switch(nl(n),n.tag){case 1:return ut(n.type)&&Fs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Lr(),Ce(lt),Ce(Ye),ml(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return pl(n),null;case 13:if(Ce(be),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));jr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ce(be),null;case 4:return Lr(),null;case 10:return ll(n.type._context),null;case 22:case 23:return Kl(),null;case 24:return null;default:return null}}var so=!1,Je=!1,Nv=typeof WeakSet=="function"?WeakSet:Set,K=null;function Or(e,n){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(a){Re(e,n,a)}else s.current=null}function Ml(e,n,s){try{s()}catch(a){Re(e,n,a)}}var yp=!1;function Rv(e,n){if(Ka=Ps,e=Gd(),Fa(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var d=a.anchorOffset,f=a.focusNode;a=a.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var v=0,S=-1,P=-1,L=0,F=0,I=e,_=null;t:for(;;){for(var W;I!==s||d!==0&&I.nodeType!==3||(S=v+d),I!==f||a!==0&&I.nodeType!==3||(P=v+a),I.nodeType===3&&(v+=I.nodeValue.length),(W=I.firstChild)!==null;)_=I,I=W;for(;;){if(I===e)break t;if(_===s&&++L===d&&(S=v),_===f&&++F===a&&(P=v),(W=I.nextSibling)!==null)break;I=_,_=I.parentNode}I=W}s=S===-1||P===-1?null:{start:S,end:P}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ga={focusedElem:e,selectionRange:s},Ps=!1,K=n;K!==null;)if(n=K,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,K=e;else for(;K!==null;){n=K;try{var G=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var Q=G.memoizedProps,De=G.memoizedState,R=n.stateNode,j=R.getSnapshotBeforeUpdate(n.elementType===n.type?Q:zt(n.type,Q),De);R.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var A=n.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(B){Re(n,n.return,B)}if(e=n.sibling,e!==null){e.return=n.return,K=e;break}K=n.return}return G=yp,yp=!1,G}function Di(e,n,s){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&e)===e){var f=d.destroy;d.destroy=void 0,f!==void 0&&Ml(n,s,f)}d=d.next}while(d!==a)}}function oo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var a=s.create;s.destroy=a()}s=s.next}while(s!==n)}}function Vl(e){var n=e.ref;if(n!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof n=="function"?n(e):n.current=e}}function vp(e){var n=e.alternate;n!==null&&(e.alternate=null,vp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ht],delete n[Ei],delete n[Ja],delete n[fv],delete n[pv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xp(e){return e.tag===5||e.tag===3||e.tag===4}function wp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _l(e,n,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=_s));else if(a!==4&&(e=e.child,e!==null))for(_l(e,n,s),e=e.sibling;e!==null;)_l(e,n,s),e=e.sibling}function zl(e,n,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(zl(e,n,s),e=e.sibling;e!==null;)zl(e,n,s),e=e.sibling}var He=null,Ft=!1;function Tn(e,n,s){for(s=s.child;s!==null;)Sp(e,n,s),s=s.sibling}function Sp(e,n,s){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(xs,s)}catch{}switch(s.tag){case 5:Je||Or(s,n);case 6:var a=He,d=Ft;He=null,Tn(e,n,s),He=a,Ft=d,He!==null&&(Ft?(e=He,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):He.removeChild(s.stateNode));break;case 18:He!==null&&(Ft?(e=He,s=s.stateNode,e.nodeType===8?Qa(e.parentNode,s):e.nodeType===1&&Qa(e,s),di(e)):Qa(He,s.stateNode));break;case 4:a=He,d=Ft,He=s.stateNode.containerInfo,Ft=!0,Tn(e,n,s),He=a,Ft=d;break;case 0:case 11:case 14:case 15:if(!Je&&(a=s.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Ml(s,n,v),d=d.next}while(d!==a)}Tn(e,n,s);break;case 1:if(!Je&&(Or(s,n),a=s.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=s.memoizedProps,a.state=s.memoizedState,a.componentWillUnmount()}catch(S){Re(s,n,S)}Tn(e,n,s);break;case 21:Tn(e,n,s);break;case 22:s.mode&1?(Je=(a=Je)||s.memoizedState!==null,Tn(e,n,s),Je=a):Tn(e,n,s);break;default:Tn(e,n,s)}}function Ep(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Nv),n.forEach(function(a){var d=Fv.bind(null,e,a);s.has(a)||(s.add(a),a.then(d,d))})}}function It(e,n){var s=n.deletions;if(s!==null)for(var a=0;a<s.length;a++){var d=s[a];try{var f=e,v=n,S=v;e:for(;S!==null;){switch(S.tag){case 5:He=S.stateNode,Ft=!1;break e;case 3:He=S.stateNode.containerInfo,Ft=!0;break e;case 4:He=S.stateNode.containerInfo,Ft=!0;break e}S=S.return}if(He===null)throw Error(i(160));Sp(f,v,d),He=null,Ft=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(L){Re(d,n,L)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Cp(n,e),n=n.sibling}function Cp(e,n){var s=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(n,e),Gt(e),a&4){try{Di(3,e,e.return),oo(3,e)}catch(Q){Re(e,e.return,Q)}try{Di(5,e,e.return)}catch(Q){Re(e,e.return,Q)}}break;case 1:It(n,e),Gt(e),a&512&&s!==null&&Or(s,s.return);break;case 5:if(It(n,e),Gt(e),a&512&&s!==null&&Or(s,s.return),e.flags&32){var d=e.stateNode;try{ei(d,"")}catch(Q){Re(e,e.return,Q)}}if(a&4&&(d=e.stateNode,d!=null)){var f=e.memoizedProps,v=s!==null?s.memoizedProps:f,S=e.type,P=e.updateQueue;if(e.updateQueue=null,P!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&Xc(d,f),ma(S,v);var L=ma(S,f);for(v=0;v<P.length;v+=2){var F=P[v],I=P[v+1];F==="style"?id(d,I):F==="dangerouslySetInnerHTML"?nd(d,I):F==="children"?ei(d,I):V(d,F,I,L)}switch(S){case"input":ca(d,f);break;case"textarea":Zc(d,f);break;case"select":var _=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var W=f.value;W!=null?pr(d,!!f.multiple,W,!1):_!==!!f.multiple&&(f.defaultValue!=null?pr(d,!!f.multiple,f.defaultValue,!0):pr(d,!!f.multiple,f.multiple?[]:"",!1))}d[Ei]=f}catch(Q){Re(e,e.return,Q)}}break;case 6:if(It(n,e),Gt(e),a&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,f=e.memoizedProps;try{d.nodeValue=f}catch(Q){Re(e,e.return,Q)}}break;case 3:if(It(n,e),Gt(e),a&4&&s!==null&&s.memoizedState.isDehydrated)try{di(n.containerInfo)}catch(Q){Re(e,e.return,Q)}break;case 4:It(n,e),Gt(e);break;case 13:It(n,e),Gt(e),d=e.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Bl=Le())),a&4&&Ep(e);break;case 22:if(F=s!==null&&s.memoizedState!==null,e.mode&1?(Je=(L=Je)||F,It(n,e),Je=L):It(n,e),Gt(e),a&8192){if(L=e.memoizedState!==null,(e.stateNode.isHidden=L)&&!F&&(e.mode&1)!==0)for(K=e,F=e.child;F!==null;){for(I=K=F;K!==null;){switch(_=K,W=_.child,_.tag){case 0:case 11:case 14:case 15:Di(4,_,_.return);break;case 1:Or(_,_.return);var G=_.stateNode;if(typeof G.componentWillUnmount=="function"){a=_,s=_.return;try{n=a,G.props=n.memoizedProps,G.state=n.memoizedState,G.componentWillUnmount()}catch(Q){Re(a,s,Q)}}break;case 5:Or(_,_.return);break;case 22:if(_.memoizedState!==null){kp(I);continue}}W!==null?(W.return=_,K=W):kp(I)}F=F.sibling}e:for(F=null,I=e;;){if(I.tag===5){if(F===null){F=I;try{d=I.stateNode,L?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=I.stateNode,P=I.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=rd("display",v))}catch(Q){Re(e,e.return,Q)}}}else if(I.tag===6){if(F===null)try{I.stateNode.nodeValue=L?"":I.memoizedProps}catch(Q){Re(e,e.return,Q)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;F===I&&(F=null),I=I.return}F===I&&(F=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:It(n,e),Gt(e),a&4&&Ep(e);break;case 21:break;default:It(n,e),Gt(e)}}function Gt(e){var n=e.flags;if(n&2){try{e:{for(var s=e.return;s!==null;){if(xp(s)){var a=s;break e}s=s.return}throw Error(i(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(ei(d,""),a.flags&=-33);var f=wp(e);zl(e,f,d);break;case 3:case 4:var v=a.stateNode.containerInfo,S=wp(e);_l(e,S,v);break;default:throw Error(i(161))}}catch(P){Re(e,e.return,P)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Av(e,n,s){K=e,Tp(e)}function Tp(e,n,s){for(var a=(e.mode&1)!==0;K!==null;){var d=K,f=d.child;if(d.tag===22&&a){var v=d.memoizedState!==null||so;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Je;S=so;var L=Je;if(so=v,(Je=P)&&!L)for(K=d;K!==null;)v=K,P=v.child,v.tag===22&&v.memoizedState!==null?bp(d):P!==null?(P.return=v,K=P):bp(d);for(;f!==null;)K=f,Tp(f),f=f.sibling;K=d,so=S,Je=L}Pp(e)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,K=f):Pp(e)}}function Pp(e){for(;K!==null;){var n=K;if((n.flags&8772)!==0){var s=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Je||oo(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Je)if(s===null)a.componentDidMount();else{var d=n.elementType===n.type?s.memoizedProps:zt(n.type,s.memoizedProps);a.componentDidUpdate(d,s.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var f=n.updateQueue;f!==null&&kf(n,f,a);break;case 3:var v=n.updateQueue;if(v!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}kf(n,v,s)}break;case 5:var S=n.stateNode;if(s===null&&n.flags&4){s=S;var P=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&s.focus();break;case"img":P.src&&(s.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var L=n.alternate;if(L!==null){var F=L.memoizedState;if(F!==null){var I=F.dehydrated;I!==null&&di(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Je||n.flags&512&&Vl(n)}catch(_){Re(n,n.return,_)}}if(n===e){K=null;break}if(s=n.sibling,s!==null){s.return=n.return,K=s;break}K=n.return}}function kp(e){for(;K!==null;){var n=K;if(n===e){K=null;break}var s=n.sibling;if(s!==null){s.return=n.return,K=s;break}K=n.return}}function bp(e){for(;K!==null;){var n=K;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{oo(4,n)}catch(P){Re(n,s,P)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var d=n.return;try{a.componentDidMount()}catch(P){Re(n,d,P)}}var f=n.return;try{Vl(n)}catch(P){Re(n,f,P)}break;case 5:var v=n.return;try{Vl(n)}catch(P){Re(n,v,P)}}}catch(P){Re(n,n.return,P)}if(n===e){K=null;break}var S=n.sibling;if(S!==null){S.return=n.return,K=S;break}K=n.return}}var Lv=Math.ceil,ao=q.ReactCurrentDispatcher,Fl=q.ReactCurrentOwner,jt=q.ReactCurrentBatchConfig,fe=0,$e=null,ze=null,We=0,Ct=0,Mr=xn(0),Be=0,Oi=null,Xn=0,lo=0,Il=0,Mi=null,dt=null,Bl=0,Vr=1/0,an=null,uo=!1,Ul=null,Pn=null,co=!1,kn=null,fo=0,Vi=0,$l=null,po=-1,ho=0;function it(){return(fe&6)!==0?Le():po!==-1?po:po=Le()}function bn(e){return(e.mode&1)===0?1:(fe&2)!==0&&We!==0?We&-We:mv.transition!==null?(ho===0&&(ho=xd()),ho):(e=ve,e!==0||(e=window.event,e=e===void 0?16:jd(e.type)),e)}function Bt(e,n,s,a){if(50<Vi)throw Vi=0,$l=null,Error(i(185));oi(e,s,a),((fe&2)===0||e!==$e)&&(e===$e&&((fe&2)===0&&(lo|=s),Be===4&&jn(e,We)),ft(e,a),s===1&&fe===0&&(n.mode&1)===0&&(Vr=Le()+500,Bs&&Sn()))}function ft(e,n){var s=e.callbackNode;m0(e,n);var a=Es(e,e===$e?We:0);if(a===0)s!==null&&gd(s),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(s!=null&&gd(s),n===1)e.tag===0?hv(Np.bind(null,e)):hf(Np.bind(null,e)),cv(function(){(fe&6)===0&&Sn()}),s=null;else{switch(wd(a)){case 1:s=Ea;break;case 4:s=yd;break;case 16:s=vs;break;case 536870912:s=vd;break;default:s=vs}s=_p(s,jp.bind(null,e))}e.callbackPriority=n,e.callbackNode=s}}function jp(e,n){if(po=-1,ho=0,(fe&6)!==0)throw Error(i(327));var s=e.callbackNode;if(_r()&&e.callbackNode!==s)return null;var a=Es(e,e===$e?We:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=mo(e,a);else{n=a;var d=fe;fe|=2;var f=Ap();($e!==e||We!==n)&&(an=null,Vr=Le()+500,Jn(e,n));do try{Mv();break}catch(S){Rp(e,S)}while(!0);al(),ao.current=f,fe=d,ze!==null?n=0:($e=null,We=0,n=Be)}if(n!==0){if(n===2&&(d=Ca(e),d!==0&&(a=d,n=ql(e,d))),n===1)throw s=Oi,Jn(e,0),jn(e,a),ft(e,Le()),s;if(n===6)jn(e,a);else{if(d=e.current.alternate,(a&30)===0&&!Dv(d)&&(n=mo(e,a),n===2&&(f=Ca(e),f!==0&&(a=f,n=ql(e,f))),n===1))throw s=Oi,Jn(e,0),jn(e,a),ft(e,Le()),s;switch(e.finishedWork=d,e.finishedLanes=a,n){case 0:case 1:throw Error(i(345));case 2:Zn(e,dt,an);break;case 3:if(jn(e,a),(a&130023424)===a&&(n=Bl+500-Le(),10<n)){if(Es(e,0)!==0)break;if(d=e.suspendedLanes,(d&a)!==a){it(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=Xa(Zn.bind(null,e,dt,an),n);break}Zn(e,dt,an);break;case 4:if(jn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,d=-1;0<a;){var v=31-Mt(a);f=1<<v,v=n[v],v>d&&(d=v),a&=~f}if(a=d,a=Le()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Lv(a/1960))-a,10<a){e.timeoutHandle=Xa(Zn.bind(null,e,dt,an),a);break}Zn(e,dt,an);break;case 5:Zn(e,dt,an);break;default:throw Error(i(329))}}}return ft(e,Le()),e.callbackNode===s?jp.bind(null,e):null}function ql(e,n){var s=Mi;return e.current.memoizedState.isDehydrated&&(Jn(e,n).flags|=256),e=mo(e,n),e!==2&&(n=dt,dt=s,n!==null&&Hl(n)),e}function Hl(e){dt===null?dt=e:dt.push.apply(dt,e)}function Dv(e){for(var n=e;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var a=0;a<s.length;a++){var d=s[a],f=d.getSnapshot;d=d.value;try{if(!Vt(f(),d))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function jn(e,n){for(n&=~Il,n&=~lo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var s=31-Mt(n),a=1<<s;e[s]=-1,n&=~a}}function Np(e){if((fe&6)!==0)throw Error(i(327));_r();var n=Es(e,0);if((n&1)===0)return ft(e,Le()),null;var s=mo(e,n);if(e.tag!==0&&s===2){var a=Ca(e);a!==0&&(n=a,s=ql(e,a))}if(s===1)throw s=Oi,Jn(e,0),jn(e,n),ft(e,Le()),s;if(s===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Zn(e,dt,an),ft(e,Le()),null}function Wl(e,n){var s=fe;fe|=1;try{return e(n)}finally{fe=s,fe===0&&(Vr=Le()+500,Bs&&Sn())}}function Qn(e){kn!==null&&kn.tag===0&&(fe&6)===0&&_r();var n=fe;fe|=1;var s=jt.transition,a=ve;try{if(jt.transition=null,ve=1,e)return e()}finally{ve=a,jt.transition=s,fe=n,(fe&6)===0&&Sn()}}function Kl(){Ct=Mr.current,Ce(Mr)}function Jn(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,uv(s)),ze!==null)for(s=ze.return;s!==null;){var a=s;switch(nl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Fs();break;case 3:Lr(),Ce(lt),Ce(Ye),ml();break;case 5:pl(a);break;case 4:Lr();break;case 13:Ce(be);break;case 19:Ce(be);break;case 10:ll(a.type._context);break;case 22:case 23:Kl()}s=s.return}if($e=e,ze=e=Nn(e.current,null),We=Ct=n,Be=0,Oi=null,Il=lo=Xn=0,dt=Mi=null,Kn!==null){for(n=0;n<Kn.length;n++)if(s=Kn[n],a=s.interleaved,a!==null){s.interleaved=null;var d=a.next,f=s.pending;if(f!==null){var v=f.next;f.next=d,a.next=v}s.pending=a}Kn=null}return e}function Rp(e,n){do{var s=ze;try{if(al(),Qs.current=to,Js){for(var a=je.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}Js=!1}if(Yn=0,Ue=Ie=je=null,ji=!1,Ni=0,Fl.current=null,s===null||s.return===null){Be=1,Oi=n,ze=null;break}e:{var f=e,v=s.return,S=s,P=n;if(n=We,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var L=P,F=S,I=F.tag;if((F.mode&1)===0&&(I===0||I===11||I===15)){var _=F.alternate;_?(F.updateQueue=_.updateQueue,F.memoizedState=_.memoizedState,F.lanes=_.lanes):(F.updateQueue=null,F.memoizedState=null)}var W=tp(v);if(W!==null){W.flags&=-257,np(W,v,S,f,n),W.mode&1&&ep(f,L,n),n=W,P=L;var G=n.updateQueue;if(G===null){var Q=new Set;Q.add(P),n.updateQueue=Q}else G.add(P);break e}else{if((n&1)===0){ep(f,L,n),Gl();break e}P=Error(i(426))}}else if(Pe&&S.mode&1){var De=tp(v);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),np(De,v,S,f,n),sl(Dr(P,S));break e}}f=P=Dr(P,S),Be!==4&&(Be=2),Mi===null?Mi=[f]:Mi.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,n&=-n,f.lanes|=n;var R=Jf(f,P,n);Pf(f,R);break e;case 1:S=P;var j=f.type,A=f.stateNode;if((f.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Pn===null||!Pn.has(A)))){f.flags|=65536,n&=-n,f.lanes|=n;var B=Zf(f,S,n);Pf(f,B);break e}}f=f.return}while(f!==null)}Dp(s)}catch(Z){n=Z,ze===s&&s!==null&&(ze=s=s.return);continue}break}while(!0)}function Ap(){var e=ao.current;return ao.current=to,e===null?to:e}function Gl(){(Be===0||Be===3||Be===2)&&(Be=4),$e===null||(Xn&268435455)===0&&(lo&268435455)===0||jn($e,We)}function mo(e,n){var s=fe;fe|=2;var a=Ap();($e!==e||We!==n)&&(an=null,Jn(e,n));do try{Ov();break}catch(d){Rp(e,d)}while(!0);if(al(),fe=s,ao.current=a,ze!==null)throw Error(i(261));return $e=null,We=0,Be}function Ov(){for(;ze!==null;)Lp(ze)}function Mv(){for(;ze!==null&&!o0();)Lp(ze)}function Lp(e){var n=Vp(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,n===null?Dp(e):ze=n,Fl.current=null}function Dp(e){var n=e;do{var s=n.alternate;if(e=n.return,(n.flags&32768)===0){if(s=bv(s,n,Ct),s!==null){ze=s;return}}else{if(s=jv(s,n),s!==null){s.flags&=32767,ze=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,ze=null;return}}if(n=n.sibling,n!==null){ze=n;return}ze=n=e}while(n!==null);Be===0&&(Be=5)}function Zn(e,n,s){var a=ve,d=jt.transition;try{jt.transition=null,ve=1,Vv(e,n,s,a)}finally{jt.transition=d,ve=a}return null}function Vv(e,n,s,a){do _r();while(kn!==null);if((fe&6)!==0)throw Error(i(327));s=e.finishedWork;var d=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var f=s.lanes|s.childLanes;if(g0(e,f),e===$e&&(ze=$e=null,We=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||co||(co=!0,_p(vs,function(){return _r(),null})),f=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||f){f=jt.transition,jt.transition=null;var v=ve;ve=1;var S=fe;fe|=4,Fl.current=null,Rv(e,s),Cp(s,e),nv(Ga),Ps=!!Ka,Ga=Ka=null,e.current=s,Av(s),a0(),fe=S,ve=v,jt.transition=f}else e.current=s;if(co&&(co=!1,kn=e,fo=d),f=e.pendingLanes,f===0&&(Pn=null),c0(s.stateNode),ft(e,Le()),n!==null)for(a=e.onRecoverableError,s=0;s<n.length;s++)d=n[s],a(d.value,{componentStack:d.stack,digest:d.digest});if(uo)throw uo=!1,e=Ul,Ul=null,e;return(fo&1)!==0&&e.tag!==0&&_r(),f=e.pendingLanes,(f&1)!==0?e===$l?Vi++:(Vi=0,$l=e):Vi=0,Sn(),null}function _r(){if(kn!==null){var e=wd(fo),n=jt.transition,s=ve;try{if(jt.transition=null,ve=16>e?16:e,kn===null)var a=!1;else{if(e=kn,kn=null,fo=0,(fe&6)!==0)throw Error(i(331));var d=fe;for(fe|=4,K=e.current;K!==null;){var f=K,v=f.child;if((K.flags&16)!==0){var S=f.deletions;if(S!==null){for(var P=0;P<S.length;P++){var L=S[P];for(K=L;K!==null;){var F=K;switch(F.tag){case 0:case 11:case 15:Di(8,F,f)}var I=F.child;if(I!==null)I.return=F,K=I;else for(;K!==null;){F=K;var _=F.sibling,W=F.return;if(vp(F),F===L){K=null;break}if(_!==null){_.return=W,K=_;break}K=W}}}var G=f.alternate;if(G!==null){var Q=G.child;if(Q!==null){G.child=null;do{var De=Q.sibling;Q.sibling=null,Q=De}while(Q!==null)}}K=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,K=v;else e:for(;K!==null;){if(f=K,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Di(9,f,f.return)}var R=f.sibling;if(R!==null){R.return=f.return,K=R;break e}K=f.return}}var j=e.current;for(K=j;K!==null;){v=K;var A=v.child;if((v.subtreeFlags&2064)!==0&&A!==null)A.return=v,K=A;else e:for(v=j;K!==null;){if(S=K,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:oo(9,S)}}catch(Z){Re(S,S.return,Z)}if(S===v){K=null;break e}var B=S.sibling;if(B!==null){B.return=S.return,K=B;break e}K=S.return}}if(fe=d,Sn(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(xs,e)}catch{}a=!0}return a}finally{ve=s,jt.transition=n}}return!1}function Op(e,n,s){n=Dr(s,n),n=Jf(e,n,1),e=Cn(e,n,1),n=it(),e!==null&&(oi(e,1,n),ft(e,n))}function Re(e,n,s){if(e.tag===3)Op(e,e,s);else for(;n!==null;){if(n.tag===3){Op(n,e,s);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Pn===null||!Pn.has(a))){e=Dr(s,e),e=Zf(n,e,1),n=Cn(n,e,1),e=it(),n!==null&&(oi(n,1,e),ft(n,e));break}}n=n.return}}function _v(e,n,s){var a=e.pingCache;a!==null&&a.delete(n),n=it(),e.pingedLanes|=e.suspendedLanes&s,$e===e&&(We&s)===s&&(Be===4||Be===3&&(We&130023424)===We&&500>Le()-Bl?Jn(e,0):Il|=s),ft(e,n)}function Mp(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ss,Ss<<=1,(Ss&130023424)===0&&(Ss=4194304)));var s=it();e=rn(e,n),e!==null&&(oi(e,n,s),ft(e,s))}function zv(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Mp(e,s)}function Fv(e,n){var s=0;switch(e.tag){case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(n),Mp(e,s)}var Vp;Vp=function(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps||lt.current)ct=!0;else{if((e.lanes&s)===0&&(n.flags&128)===0)return ct=!1,kv(e,n,s);ct=(e.flags&131072)!==0}else ct=!1,Pe&&(n.flags&1048576)!==0&&mf(n,$s,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;io(e,n),e=n.pendingProps;var d=Pr(n,Ye.current);Ar(n,s),d=vl(null,n,a,e,d,s);var f=xl();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ut(a)?(f=!0,Is(n)):f=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,dl(n),d.updater=no,n.stateNode=d,d._reactInternals=n,Pl(n,a,e,s),n=Nl(null,n,a,!0,f,s)):(n.tag=0,Pe&&f&&tl(n),rt(null,n,d,s),n=n.child),n;case 16:a=n.elementType;e:{switch(io(e,n),e=n.pendingProps,d=a._init,a=d(a._payload),n.type=a,d=n.tag=Bv(a),e=zt(a,e),d){case 0:n=jl(null,n,a,e,s);break e;case 1:n=lp(null,n,a,e,s);break e;case 11:n=rp(null,n,a,e,s);break e;case 14:n=ip(null,n,a,zt(a.type,e),s);break e}throw Error(i(306,a,""))}return n;case 0:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:zt(a,d),jl(e,n,a,d,s);case 1:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:zt(a,d),lp(e,n,a,d,s);case 3:e:{if(up(n),e===null)throw Error(i(387));a=n.pendingProps,f=n.memoizedState,d=f.element,Tf(e,n),Ys(n,a,null,s);var v=n.memoizedState;if(a=v.element,f.isDehydrated)if(f={element:a,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){d=Dr(Error(i(423)),n),n=cp(e,n,a,s,d);break e}else if(a!==d){d=Dr(Error(i(424)),n),n=cp(e,n,a,s,d);break e}else for(Et=vn(n.stateNode.containerInfo.firstChild),St=n,Pe=!0,_t=null,s=Ef(n,null,a,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(jr(),a===d){n=on(e,n,s);break e}rt(e,n,a,s)}n=n.child}return n;case 5:return bf(n),e===null&&il(n),a=n.type,d=n.pendingProps,f=e!==null?e.memoizedProps:null,v=d.children,Ya(a,d)?v=null:f!==null&&Ya(a,f)&&(n.flags|=32),ap(e,n),rt(e,n,v,s),n.child;case 6:return e===null&&il(n),null;case 13:return dp(e,n,s);case 4:return fl(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Nr(n,null,a,s):rt(e,n,a,s),n.child;case 11:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:zt(a,d),rp(e,n,a,d,s);case 7:return rt(e,n,n.pendingProps,s),n.child;case 8:return rt(e,n,n.pendingProps.children,s),n.child;case 12:return rt(e,n,n.pendingProps.children,s),n.child;case 10:e:{if(a=n.type._context,d=n.pendingProps,f=n.memoizedProps,v=d.value,we(Ws,a._currentValue),a._currentValue=v,f!==null)if(Vt(f.value,v)){if(f.children===d.children&&!lt.current){n=on(e,n,s);break e}}else for(f=n.child,f!==null&&(f.return=n);f!==null;){var S=f.dependencies;if(S!==null){v=f.child;for(var P=S.firstContext;P!==null;){if(P.context===a){if(f.tag===1){P=sn(-1,s&-s),P.tag=2;var L=f.updateQueue;if(L!==null){L=L.shared;var F=L.pending;F===null?P.next=P:(P.next=F.next,F.next=P),L.pending=P}}f.lanes|=s,P=f.alternate,P!==null&&(P.lanes|=s),ul(f.return,s,n),S.lanes|=s;break}P=P.next}}else if(f.tag===10)v=f.type===n.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(i(341));v.lanes|=s,S=v.alternate,S!==null&&(S.lanes|=s),ul(v,s,n),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}rt(e,n,d.children,s),n=n.child}return n;case 9:return d=n.type,a=n.pendingProps.children,Ar(n,s),d=kt(d),a=a(d),n.flags|=1,rt(e,n,a,s),n.child;case 14:return a=n.type,d=zt(a,n.pendingProps),d=zt(a.type,d),ip(e,n,a,d,s);case 15:return sp(e,n,n.type,n.pendingProps,s);case 17:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:zt(a,d),io(e,n),n.tag=1,ut(a)?(e=!0,Is(n)):e=!1,Ar(n,s),Xf(n,a,d),Pl(n,a,d,s),Nl(null,n,a,!0,e,s);case 19:return pp(e,n,s);case 22:return op(e,n,s)}throw Error(i(156,n.tag))};function _p(e,n){return md(e,n)}function Iv(e,n,s,a){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,n,s,a){return new Iv(e,n,s,a)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bv(e){if(typeof e=="function")return Yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yt)return 11;if(e===vt)return 14}return 2}function Nn(e,n){var s=e.alternate;return s===null?(s=Nt(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function go(e,n,s,a,d,f){var v=2;if(a=e,typeof e=="function")Yl(e)&&(v=1);else if(typeof e=="string")v=5;else e:switch(e){case ee:return er(s.children,d,f,n);case J:v=8,d|=8;break;case ge:return e=Nt(12,s,n,d|2),e.elementType=ge,e.lanes=f,e;case tt:return e=Nt(13,s,n,d),e.elementType=tt,e.lanes=f,e;case at:return e=Nt(19,s,n,d),e.elementType=at,e.lanes=f,e;case le:return yo(s,d,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Se:v=10;break e;case Ge:v=9;break e;case yt:v=11;break e;case vt:v=14;break e;case nt:v=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=Nt(v,s,n,d),n.elementType=e,n.type=a,n.lanes=f,n}function er(e,n,s,a){return e=Nt(7,e,a,n),e.lanes=s,e}function yo(e,n,s,a){return e=Nt(22,e,a,n),e.elementType=le,e.lanes=s,e.stateNode={isHidden:!1},e}function Xl(e,n,s){return e=Nt(6,e,null,n),e.lanes=s,e}function Ql(e,n,s){return n=Nt(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Uv(e,n,s,a,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ta(0),this.expirationTimes=Ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ta(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Jl(e,n,s,a,d,f,v,S,P){return e=new Uv(e,n,s,S,P),n===1?(n=1,f===!0&&(n|=8)):n=0,f=Nt(3,null,null,n),e.current=f,f.stateNode=e,f.memoizedState={element:a,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},dl(f),e}function $v(e,n,s){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:a==null?null:""+a,children:e,containerInfo:n,implementation:s}}function zp(e){if(!e)return wn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ut(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var s=e.type;if(ut(s))return ff(e,s,n)}return n}function Fp(e,n,s,a,d,f,v,S,P){return e=Jl(s,a,!0,e,d,f,v,S,P),e.context=zp(null),s=e.current,a=it(),d=bn(s),f=sn(a,d),f.callback=n??null,Cn(s,f,d),e.current.lanes=d,oi(e,d,a),ft(e,a),e}function vo(e,n,s,a){var d=n.current,f=it(),v=bn(d);return s=zp(s),n.context===null?n.context=s:n.pendingContext=s,n=sn(f,v),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=Cn(d,n,v),e!==null&&(Bt(e,d,v,f),Gs(e,d,v)),v}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ip(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Zl(e,n){Ip(e,n),(e=e.alternate)&&Ip(e,n)}function qv(){return null}var Bp=typeof reportError=="function"?reportError:function(e){console.error(e)};function eu(e){this._internalRoot=e}wo.prototype.render=eu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));vo(e,n,null,null)},wo.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Qn(function(){vo(null,e,null,null)}),n[Zt]=null}};function wo(e){this._internalRoot=e}wo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Cd();e={blockedOn:null,target:e,priority:n};for(var s=0;s<mn.length&&n!==0&&n<mn[s].priority;s++);mn.splice(s,0,e),s===0&&kd(e)}};function tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Up(){}function Hv(e,n,s,a,d){if(d){if(typeof a=="function"){var f=a;a=function(){var L=xo(v);f.call(L)}}var v=Fp(n,a,e,0,null,!1,!1,"",Up);return e._reactRootContainer=v,e[Zt]=v.current,wi(e.nodeType===8?e.parentNode:e),Qn(),v}for(;d=e.lastChild;)e.removeChild(d);if(typeof a=="function"){var S=a;a=function(){var L=xo(P);S.call(L)}}var P=Jl(e,0,!1,null,null,!1,!1,"",Up);return e._reactRootContainer=P,e[Zt]=P.current,wi(e.nodeType===8?e.parentNode:e),Qn(function(){vo(n,P,s,a)}),P}function Eo(e,n,s,a,d){var f=s._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var S=d;d=function(){var P=xo(v);S.call(P)}}vo(n,v,e,d)}else v=Hv(s,n,e,d,a);return xo(v)}Sd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var s=si(n.pendingLanes);s!==0&&(Pa(n,s|1),ft(n,Le()),(fe&6)===0&&(Vr=Le()+500,Sn()))}break;case 13:Qn(function(){var a=rn(e,1);if(a!==null){var d=it();Bt(a,e,1,d)}}),Zl(e,1)}},ka=function(e){if(e.tag===13){var n=rn(e,134217728);if(n!==null){var s=it();Bt(n,e,134217728,s)}Zl(e,134217728)}},Ed=function(e){if(e.tag===13){var n=bn(e),s=rn(e,n);if(s!==null){var a=it();Bt(s,e,n,a)}Zl(e,n)}},Cd=function(){return ve},Td=function(e,n){var s=ve;try{return ve=e,n()}finally{ve=s}},va=function(e,n,s){switch(n){case"input":if(ca(e,s),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var a=s[n];if(a!==e&&a.form===e.form){var d=zs(a);if(!d)throw Error(i(90));Gc(a),ca(a,d)}}}break;case"textarea":Zc(e,s);break;case"select":n=s.value,n!=null&&pr(e,!!s.multiple,n,!1)}},ld=Wl,ud=Qn;var Wv={usingClientEntryPoint:!1,Events:[Ci,Cr,zs,od,ad,Wl]},_i={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kv={bundleType:_i.bundleType,version:_i.version,rendererPackageName:_i.rendererPackageName,rendererConfig:_i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pd(e),e===null?null:e.stateNode},findFiberByHostInstance:_i.findFiberByHostInstance||qv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{xs=Co.inject(Kv),qt=Co}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv,pt.createPortal=function(e,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(n))throw Error(i(200));return $v(e,n,null,s)},pt.createRoot=function(e,n){if(!tu(e))throw Error(i(299));var s=!1,a="",d=Bp;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Jl(e,1,!1,null,null,s,!1,a,d),e[Zt]=n.current,wi(e.nodeType===8?e.parentNode:e),new eu(n)},pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=pd(n),e=e===null?null:e.stateNode,e},pt.flushSync=function(e){return Qn(e)},pt.hydrate=function(e,n,s){if(!So(n))throw Error(i(200));return Eo(null,e,n,!0,s)},pt.hydrateRoot=function(e,n,s){if(!tu(e))throw Error(i(405));var a=s!=null&&s.hydratedSources||null,d=!1,f="",v=Bp;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),n=Fp(n,null,e,1,s??null,d,!1,f,v),e[Zt]=n.current,wi(e),a)for(e=0;e<a.length;e++)s=a[e],d=s._getVersion,d=d(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,d]:n.mutableSourceEagerHydrationData.push(s,d);return new wo(n)},pt.render=function(e,n,s){if(!So(n))throw Error(i(200));return Eo(null,e,n,!1,s)},pt.unmountComponentAtNode=function(e){if(!So(e))throw Error(i(40));return e._reactRootContainer?(Qn(function(){Eo(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1},pt.unstable_batchedUpdates=Wl,pt.unstable_renderSubtreeIntoContainer=function(e,n,s,a){if(!So(s))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Eo(e,n,s,!1,a)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var Xp;function Om(){if(Xp)return iu.exports;Xp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),iu.exports=nx(),iu.exports}var Qp;function rx(){if(Qp)return To;Qp=1;var t=Om();return To.createRoot=t.createRoot,To.hydrateRoot=t.hydrateRoot,To}var ix=rx();const sx=Lm(ix);Om();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gi(){return Gi=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},Gi.apply(this,arguments)}var On;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(On||(On={}));const Jp="popstate";function ox(t){t===void 0&&(t={});function r(o,l){let{pathname:u,search:c,hash:p}=o.location;return ju("",{pathname:u,search:c,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(o,l){return typeof l=="string"?l:Io(l)}return lx(r,i,null,t)}function Ve(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Mm(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function ax(){return Math.random().toString(36).substr(2,8)}function Zp(t,r){return{usr:t.state,key:t.key,idx:r}}function ju(t,r,i,o){return i===void 0&&(i=null),Gi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof r=="string"?Wr(r):r,{state:i,key:r&&r.key||o||ax()})}function Io(t){let{pathname:r="/",search:i="",hash:o=""}=t;return i&&i!=="?"&&(r+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(r+=o.charAt(0)==="#"?o:"#"+o),r}function Wr(t){let r={};if(t){let i=t.indexOf("#");i>=0&&(r.hash=t.substr(i),t=t.substr(0,i));let o=t.indexOf("?");o>=0&&(r.search=t.substr(o),t=t.substr(0,o)),t&&(r.pathname=t)}return r}function lx(t,r,i,o){o===void 0&&(o={});let{window:l=document.defaultView,v5Compat:u=!1}=o,c=l.history,p=On.Pop,h=null,m=g();m==null&&(m=0,c.replaceState(Gi({},c.state,{idx:m}),""));function g(){return(c.state||{idx:null}).idx}function x(){p=On.Pop;let C=g(),O=C==null?null:C-m;m=C,h&&h({action:p,location:T.location,delta:O})}function w(C,O){p=On.Push;let M=ju(T.location,C,O);m=g()+1;let V=Zp(M,m),q=T.createHref(M);try{c.pushState(V,"",q)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;l.location.assign(q)}u&&h&&h({action:p,location:T.location,delta:1})}function b(C,O){p=On.Replace;let M=ju(T.location,C,O);m=g();let V=Zp(M,m),q=T.createHref(M);c.replaceState(V,"",q),u&&h&&h({action:p,location:T.location,delta:0})}function E(C){let O=l.location.origin!=="null"?l.location.origin:l.location.href,M=typeof C=="string"?C:Io(C);return M=M.replace(/ $/,"%20"),Ve(O,"No window.location.(origin|href) available to create URL for href: "+M),new URL(M,O)}let T={get action(){return p},get location(){return t(l,c)},listen(C){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(Jp,x),h=C,()=>{l.removeEventListener(Jp,x),h=null}},createHref(C){return r(l,C)},createURL:E,encodeLocation(C){let O=E(C);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:w,replace:b,go(C){return c.go(C)}};return T}var eh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(eh||(eh={}));function ux(t,r,i){return i===void 0&&(i="/"),cx(t,r,i)}function cx(t,r,i,o){let l=typeof r=="string"?Wr(r):r,u=ac(l.pathname||"/",i);if(u==null)return null;let c=Vm(t);dx(c);let p=null;for(let h=0;p==null&&h<c.length;++h){let m=Cx(u);p=wx(c[h],m)}return p}function Vm(t,r,i,o){r===void 0&&(r=[]),i===void 0&&(i=[]),o===void 0&&(o="");let l=(u,c,p)=>{let h={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};h.relativePath.startsWith("/")&&(Ve(h.relativePath.startsWith(o),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(o.length));let m=Mn([o,h.relativePath]),g=i.concat(h);u.children&&u.children.length>0&&(Ve(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Vm(u.children,r,g,m)),!(u.path==null&&!u.index)&&r.push({path:m,score:vx(m,u.index),routesMeta:g})};return t.forEach((u,c)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))l(u,c);else for(let h of _m(u.path))l(u,c,h)}),r}function _m(t){let r=t.split("/");if(r.length===0)return[];let[i,...o]=r,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(o.length===0)return l?[u,""]:[u];let c=_m(o.join("/")),p=[];return p.push(...c.map(h=>h===""?u:[u,h].join("/"))),l&&p.push(...c),p.map(h=>t.startsWith("/")&&h===""?"/":h)}function dx(t){t.sort((r,i)=>r.score!==i.score?i.score-r.score:xx(r.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}const fx=/^:[\w-]+$/,px=3,hx=2,mx=1,gx=10,yx=-2,th=t=>t==="*";function vx(t,r){let i=t.split("/"),o=i.length;return i.some(th)&&(o+=yx),r&&(o+=hx),i.filter(l=>!th(l)).reduce((l,u)=>l+(fx.test(u)?px:u===""?mx:gx),o)}function xx(t,r){return t.length===r.length&&t.slice(0,-1).every((o,l)=>o===r[l])?t[t.length-1]-r[r.length-1]:0}function wx(t,r,i){let{routesMeta:o}=t,l={},u="/",c=[];for(let p=0;p<o.length;++p){let h=o[p],m=p===o.length-1,g=u==="/"?r:r.slice(u.length)||"/",x=Sx({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},g),w=h.route;if(!x)return null;Object.assign(l,x.params),c.push({params:l,pathname:Mn([u,x.pathname]),pathnameBase:bx(Mn([u,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(u=Mn([u,x.pathnameBase]))}return c}function Sx(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,o]=Ex(t.path,t.caseSensitive,t.end),l=r.match(i);if(!l)return null;let u=l[0],c=u.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:o.reduce((m,g,x)=>{let{paramName:w,isOptional:b}=g;if(w==="*"){let T=p[x]||"";c=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const E=p[x];return b&&!E?m[w]=void 0:m[w]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:c,pattern:t}}function Ex(t,r,i){r===void 0&&(r=!1),i===void 0&&(i=!0),Mm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let o=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,p,h)=>(o.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(o.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,r?void 0:"i"),o]}function Cx(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Mm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),t}}function ac(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,o=t.charAt(i);return o&&o!=="/"?null:t.slice(i)||"/"}function Tx(t,r){r===void 0&&(r="/");let{pathname:i,search:o="",hash:l=""}=typeof t=="string"?Wr(t):t;return{pathname:i?i.startsWith("/")?i:Px(i,r):r,search:jx(o),hash:Nx(l)}}function Px(t,r){let i=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function au(t,r,i,o){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kx(t){return t.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function lc(t,r){let i=kx(t);return r?i.map((o,l)=>l===i.length-1?o.pathname:o.pathnameBase):i.map(o=>o.pathnameBase)}function uc(t,r,i,o){o===void 0&&(o=!1);let l;typeof t=="string"?l=Wr(t):(l=Gi({},t),Ve(!l.pathname||!l.pathname.includes("?"),au("?","pathname","search",l)),Ve(!l.pathname||!l.pathname.includes("#"),au("#","pathname","hash",l)),Ve(!l.search||!l.search.includes("#"),au("#","search","hash",l)));let u=t===""||l.pathname==="",c=u?"/":l.pathname,p;if(c==null)p=i;else{let x=r.length-1;if(!o&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),x-=1;l.pathname=w.join("/")}p=x>=0?r[x]:"/"}let h=Tx(l,p),m=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(m||g)&&(h.pathname+="/"),h}const Mn=t=>t.join("/").replace(/\/\/+/g,"/"),bx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Nx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Rx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const zm=["post","put","patch","delete"];new Set(zm);const Ax=["get",...zm];new Set(Ax);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yi(){return Yi=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},Yi.apply(this,arguments)}const cc=k.createContext(null),Lx=k.createContext(null),zn=k.createContext(null),Xo=k.createContext(null),Fn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Fm=k.createContext(null);function Dx(t,r){let{relative:i}=r===void 0?{}:r;Kr()||Ve(!1);let{basename:o,navigator:l}=k.useContext(zn),{hash:u,pathname:c,search:p}=Bm(t,{relative:i}),h=c;return o!=="/"&&(h=c==="/"?o:Mn([o,c])),l.createHref({pathname:h,search:p,hash:u})}function Kr(){return k.useContext(Xo)!=null}function dr(){return Kr()||Ve(!1),k.useContext(Xo).location}function Im(t){k.useContext(zn).static||k.useLayoutEffect(t)}function rs(){let{isDataRoute:t}=k.useContext(Fn);return t?Wx():Ox()}function Ox(){Kr()||Ve(!1);let t=k.useContext(cc),{basename:r,future:i,navigator:o}=k.useContext(zn),{matches:l}=k.useContext(Fn),{pathname:u}=dr(),c=JSON.stringify(lc(l,i.v7_relativeSplatPath)),p=k.useRef(!1);return Im(()=>{p.current=!0}),k.useCallback(function(m,g){if(g===void 0&&(g={}),!p.current)return;if(typeof m=="number"){o.go(m);return}let x=uc(m,JSON.parse(c),u,g.relative==="path");t==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:Mn([r,x.pathname])),(g.replace?o.replace:o.push)(x,g.state,g)},[r,o,c,u,t])}function Bm(t,r){let{relative:i}=r===void 0?{}:r,{future:o}=k.useContext(zn),{matches:l}=k.useContext(Fn),{pathname:u}=dr(),c=JSON.stringify(lc(l,o.v7_relativeSplatPath));return k.useMemo(()=>uc(t,JSON.parse(c),u,i==="path"),[t,c,u,i])}function Mx(t,r){return Vx(t,r)}function Vx(t,r,i,o){Kr()||Ve(!1);let{navigator:l}=k.useContext(zn),{matches:u}=k.useContext(Fn),c=u[u.length-1],p=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let m=dr(),g;if(r){var x;let C=typeof r=="string"?Wr(r):r;h==="/"||(x=C.pathname)!=null&&x.startsWith(h)||Ve(!1),g=C}else g=m;let w=g.pathname||"/",b=w;if(h!=="/"){let C=h.replace(/^\//,"").split("/");b="/"+w.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=ux(t,{pathname:b}),T=Bx(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},p,C.params),pathname:Mn([h,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?h:Mn([h,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),u,i,o);return r&&T?k.createElement(Xo.Provider,{value:{location:Yi({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:On.Pop}},T):T}function _x(){let t=Hx(),r=Rx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},r),i?k.createElement("pre",{style:l},i):null,null)}const zx=k.createElement(_x,null);class Fx extends k.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,i){return i.location!==r.location||i.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:i.error,location:i.location,revalidation:r.revalidation||i.revalidation}}componentDidCatch(r,i){console.error("React Router caught the following error during render",r,i)}render(){return this.state.error!==void 0?k.createElement(Fn.Provider,{value:this.props.routeContext},k.createElement(Fm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ix(t){let{routeContext:r,match:i,children:o}=t,l=k.useContext(cc);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),k.createElement(Fn.Provider,{value:r},o)}function Bx(t,r,i,o){var l;if(r===void 0&&(r=[]),i===void 0&&(i=null),o===void 0&&(o=null),t==null){var u;if(!i)return null;if(i.errors)t=i.matches;else if((u=o)!=null&&u.v7_partialHydration&&r.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let c=t,p=(l=i)==null?void 0:l.errors;if(p!=null){let g=c.findIndex(x=>x.route.id&&p?.[x.route.id]!==void 0);g>=0||Ve(!1),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,m=-1;if(i&&o&&o.v7_partialHydration)for(let g=0;g<c.length;g++){let x=c[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=g),x.route.id){let{loaderData:w,errors:b}=i,E=x.route.loader&&w[x.route.id]===void 0&&(!b||b[x.route.id]===void 0);if(x.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((g,x,w)=>{let b,E=!1,T=null,C=null;i&&(b=p&&x.route.id?p[x.route.id]:void 0,T=x.route.errorElement||zx,h&&(m<0&&w===0?(Kx("route-fallback"),E=!0,C=null):m===w&&(E=!0,C=x.route.hydrateFallbackElement||null)));let O=r.concat(c.slice(0,w+1)),M=()=>{let V;return b?V=T:E?V=C:x.route.Component?V=k.createElement(x.route.Component,null):x.route.element?V=x.route.element:V=g,k.createElement(Ix,{match:x,routeContext:{outlet:g,matches:O,isDataRoute:i!=null},children:V})};return i&&(x.route.ErrorBoundary||x.route.errorElement||w===0)?k.createElement(Fx,{location:i.location,revalidation:i.revalidation,component:T,error:b,children:M(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):M()},null)}var Um=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Um||{}),$m=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($m||{});function Ux(t){let r=k.useContext(cc);return r||Ve(!1),r}function $x(t){let r=k.useContext(Lx);return r||Ve(!1),r}function qx(t){let r=k.useContext(Fn);return r||Ve(!1),r}function qm(t){let r=qx(),i=r.matches[r.matches.length-1];return i.route.id||Ve(!1),i.route.id}function Hx(){var t;let r=k.useContext(Fm),i=$x(),o=qm();return r!==void 0?r:(t=i.errors)==null?void 0:t[o]}function Wx(){let{router:t}=Ux(Um.UseNavigateStable),r=qm($m.UseNavigateStable),i=k.useRef(!1);return Im(()=>{i.current=!0}),k.useCallback(function(l,u){u===void 0&&(u={}),i.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,Yi({fromRouteId:r},u)))},[t,r])}const nh={};function Kx(t,r,i){nh[t]||(nh[t]=!0)}function Gx(t,r){t?.v7_startTransition,t?.v7_relativeSplatPath}function Yx(t){let{to:r,replace:i,state:o,relative:l}=t;Kr()||Ve(!1);let{future:u,static:c}=k.useContext(zn),{matches:p}=k.useContext(Fn),{pathname:h}=dr(),m=rs(),g=uc(r,lc(p,u.v7_relativeSplatPath),h,l==="path"),x=JSON.stringify(g);return k.useEffect(()=>m(JSON.parse(x),{replace:i,state:o,relative:l}),[m,x,l,i,o]),null}function An(t){Ve(!1)}function Xx(t){let{basename:r="/",children:i=null,location:o,navigationType:l=On.Pop,navigator:u,static:c=!1,future:p}=t;Kr()&&Ve(!1);let h=r.replace(/^\/*/,"/"),m=k.useMemo(()=>({basename:h,navigator:u,static:c,future:Yi({v7_relativeSplatPath:!1},p)}),[h,p,u,c]);typeof o=="string"&&(o=Wr(o));let{pathname:g="/",search:x="",hash:w="",state:b=null,key:E="default"}=o,T=k.useMemo(()=>{let C=ac(g,h);return C==null?null:{location:{pathname:C,search:x,hash:w,state:b,key:E},navigationType:l}},[h,g,x,w,b,E,l]);return T==null?null:k.createElement(zn.Provider,{value:m},k.createElement(Xo.Provider,{children:i,value:T}))}function Qx(t){let{children:r,location:i}=t;return Mx(Nu(r),i)}new Promise(()=>{});function Nu(t,r){r===void 0&&(r=[]);let i=[];return k.Children.forEach(t,(o,l)=>{if(!k.isValidElement(o))return;let u=[...r,l];if(o.type===k.Fragment){i.push.apply(i,Nu(o.props.children,u));return}o.type!==An&&Ve(!1),!o.props.index||!o.props.children||Ve(!1);let c={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(c.children=Nu(o.props.children,u)),i.push(c)}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ru(){return Ru=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},Ru.apply(this,arguments)}function Jx(t,r){if(t==null)return{};var i={},o=Object.keys(t),l,u;for(u=0;u<o.length;u++)l=o[u],!(r.indexOf(l)>=0)&&(i[l]=t[l]);return i}function Zx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function e1(t,r){return t.button===0&&(!r||r==="_self")&&!Zx(t)}const t1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],n1="6";try{window.__reactRouterVersion=n1}catch{}const r1="startTransition",rh=Zv[r1];function i1(t){let{basename:r,children:i,future:o,window:l}=t,u=k.useRef();u.current==null&&(u.current=ox({window:l,v5Compat:!0}));let c=u.current,[p,h]=k.useState({action:c.action,location:c.location}),{v7_startTransition:m}=o||{},g=k.useCallback(x=>{m&&rh?rh(()=>h(x)):h(x)},[h,m]);return k.useLayoutEffect(()=>c.listen(g),[c,g]),k.useEffect(()=>Gx(o),[o]),k.createElement(Xx,{basename:r,children:i,location:p.location,navigationType:p.action,navigator:c,future:o})}const s1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",o1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lt=k.forwardRef(function(r,i){let{onClick:o,relative:l,reloadDocument:u,replace:c,state:p,target:h,to:m,preventScrollReset:g,viewTransition:x}=r,w=Jx(r,t1),{basename:b}=k.useContext(zn),E,T=!1;if(typeof m=="string"&&o1.test(m)&&(E=m,s1))try{let V=new URL(window.location.href),q=m.startsWith("//")?new URL(V.protocol+m):new URL(m),$=ac(q.pathname,b);q.origin===V.origin&&$!=null?m=$+q.search+q.hash:T=!0}catch{}let C=Dx(m,{relative:l}),O=a1(m,{replace:c,state:p,target:h,preventScrollReset:g,relative:l,viewTransition:x});function M(V){o&&o(V),V.defaultPrevented||O(V)}return k.createElement("a",Ru({},w,{href:E||C,onClick:T||u?o:M,ref:i,target:h}))});var ih;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ih||(ih={}));var sh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sh||(sh={}));function a1(t,r){let{target:i,replace:o,state:l,preventScrollReset:u,relative:c,viewTransition:p}=r===void 0?{}:r,h=rs(),m=dr(),g=Bm(t,{relative:c});return k.useCallback(x=>{if(e1(x,i)){x.preventDefault();let w=o!==void 0?o:Io(m)===Io(g);h(t,{replace:w,state:l,preventScrollReset:u,relative:c,viewTransition:p})}},[m,h,g,o,l,i,t,u,c,p])}let l1={data:""},u1=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||l1,c1=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d1=/\/\*[^]*?\*\/|  +/g,oh=/\n+/g,Dn=(t,r)=>{let i="",o="",l="";for(let u in t){let c=t[u];u[0]=="@"?u[1]=="i"?i=u+" "+c+";":o+=u[1]=="f"?Dn(c,u):u+"{"+Dn(c,u[1]=="k"?"":r)+"}":typeof c=="object"?o+=Dn(c,r?r.replace(/([^,])+/g,p=>u.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,h=>/&/.test(h)?h.replace(/&/g,p):p?p+" "+h:h)):u):c!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=Dn.p?Dn.p(u,c):u+":"+c+";")}return i+(r&&l?r+"{"+l+"}":l)+o},ln={},Hm=t=>{if(typeof t=="object"){let r="";for(let i in t)r+=i+Hm(t[i]);return r}return t},f1=(t,r,i,o,l)=>{let u=Hm(t),c=ln[u]||(ln[u]=(h=>{let m=0,g=11;for(;m<h.length;)g=101*g+h.charCodeAt(m++)>>>0;return"go"+g})(u));if(!ln[c]){let h=u!==t?t:(m=>{let g,x,w=[{}];for(;g=c1.exec(m.replace(d1,""));)g[4]?w.shift():g[3]?(x=g[3].replace(oh," ").trim(),w.unshift(w[0][x]=w[0][x]||{})):w[0][g[1]]=g[2].replace(oh," ").trim();return w[0]})(t);ln[c]=Dn(l?{["@keyframes "+c]:h}:h,i?"":"."+c)}let p=i&&ln.g?ln.g:null;return i&&(ln.g=ln[c]),((h,m,g,x)=>{x?m.data=m.data.replace(x,h):m.data.indexOf(h)===-1&&(m.data=g?h+m.data:m.data+h)})(ln[c],r,o,p),c},p1=(t,r,i)=>t.reduce((o,l,u)=>{let c=r[u];if(c&&c.call){let p=c(i),h=p&&p.props&&p.props.className||/^go/.test(p)&&p;c=h?"."+h:p&&typeof p=="object"?p.props?"":Dn(p,""):p===!1?"":p}return o+l+(c??"")},"");function Qo(t){let r=this||{},i=t.call?t(r.p):t;return f1(i.unshift?i.raw?p1(i,[].slice.call(arguments,1),r.p):i.reduce((o,l)=>Object.assign(o,l&&l.call?l(r.p):l),{}):i,u1(r.target),r.g,r.o,r.k)}let Wm,Au,Lu;Qo.bind({g:1});let un=Qo.bind({k:1});function h1(t,r,i,o){Dn.p=r,Wm=t,Au=i,Lu=o}function In(t,r){let i=this||{};return function(){let o=arguments;function l(u,c){let p=Object.assign({},u),h=p.className||l.className;i.p=Object.assign({theme:Au&&Au()},p),i.o=/ *go\d+/.test(h),p.className=Qo.apply(i,o)+(h?" "+h:"");let m=t;return t[0]&&(m=p.as||t,delete p.as),Lu&&m[0]&&Lu(p),Wm(m,p)}return l}}var m1=t=>typeof t=="function",Bo=(t,r)=>m1(t)?t(r):t,g1=(()=>{let t=0;return()=>(++t).toString()})(),Km=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let r=matchMedia("(prefers-reduced-motion: reduce)");t=!r||r.matches}return t}})(),y1=20,Gm=(t,r)=>{switch(r.type){case 0:return{...t,toasts:[r.toast,...t.toasts].slice(0,y1)};case 1:return{...t,toasts:t.toasts.map(u=>u.id===r.toast.id?{...u,...r.toast}:u)};case 2:let{toast:i}=r;return Gm(t,{type:t.toasts.find(u=>u.id===i.id)?1:0,toast:i});case 3:let{toastId:o}=r;return{...t,toasts:t.toasts.map(u=>u.id===o||o===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return r.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(u=>u.id!==r.toastId)};case 5:return{...t,pausedAt:r.time};case 6:let l=r.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+l}))}}},Ao=[],rr={toasts:[],pausedAt:void 0},fr=t=>{rr=Gm(rr,t),Ao.forEach(r=>{r(rr)})},v1={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},x1=(t={})=>{let[r,i]=k.useState(rr),o=k.useRef(rr);k.useEffect(()=>(o.current!==rr&&i(rr),Ao.push(i),()=>{let u=Ao.indexOf(i);u>-1&&Ao.splice(u,1)}),[]);let l=r.toasts.map(u=>{var c,p,h;return{...t,...t[u.type],...u,removeDelay:u.removeDelay||((c=t[u.type])==null?void 0:c.removeDelay)||t?.removeDelay,duration:u.duration||((p=t[u.type])==null?void 0:p.duration)||t?.duration||v1[u.type],style:{...t.style,...(h=t[u.type])==null?void 0:h.style,...u.style}}});return{...r,toasts:l}},w1=(t,r="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...i,id:i?.id||g1()}),is=t=>(r,i)=>{let o=w1(r,t,i);return fr({type:2,toast:o}),o.id},st=(t,r)=>is("blank")(t,r);st.error=is("error");st.success=is("success");st.loading=is("loading");st.custom=is("custom");st.dismiss=t=>{fr({type:3,toastId:t})};st.remove=t=>fr({type:4,toastId:t});st.promise=(t,r,i)=>{let o=st.loading(r.loading,{...i,...i?.loading});return typeof t=="function"&&(t=t()),t.then(l=>{let u=r.success?Bo(r.success,l):void 0;return u?st.success(u,{id:o,...i,...i?.success}):st.dismiss(o),l}).catch(l=>{let u=r.error?Bo(r.error,l):void 0;u?st.error(u,{id:o,...i,...i?.error}):st.dismiss(o)}),t};var S1=(t,r)=>{fr({type:1,toast:{id:t,height:r}})},E1=()=>{fr({type:5,time:Date.now()})},Ui=new Map,C1=1e3,T1=(t,r=C1)=>{if(Ui.has(t))return;let i=setTimeout(()=>{Ui.delete(t),fr({type:4,toastId:t})},r);Ui.set(t,i)},P1=t=>{let{toasts:r,pausedAt:i}=x1(t);k.useEffect(()=>{if(i)return;let u=Date.now(),c=r.map(p=>{if(p.duration===1/0)return;let h=(p.duration||0)+p.pauseDuration-(u-p.createdAt);if(h<0){p.visible&&st.dismiss(p.id);return}return setTimeout(()=>st.dismiss(p.id),h)});return()=>{c.forEach(p=>p&&clearTimeout(p))}},[r,i]);let o=k.useCallback(()=>{i&&fr({type:6,time:Date.now()})},[i]),l=k.useCallback((u,c)=>{let{reverseOrder:p=!1,gutter:h=8,defaultPosition:m}=c||{},g=r.filter(b=>(b.position||m)===(u.position||m)&&b.height),x=g.findIndex(b=>b.id===u.id),w=g.filter((b,E)=>E<x&&b.visible).length;return g.filter(b=>b.visible).slice(...p?[w+1]:[0,w]).reduce((b,E)=>b+(E.height||0)+h,0)},[r]);return k.useEffect(()=>{r.forEach(u=>{if(u.dismissed)T1(u.id,u.removeDelay);else{let c=Ui.get(u.id);c&&(clearTimeout(c),Ui.delete(u.id))}})},[r]),{toasts:r,handlers:{updateHeight:S1,startPause:E1,endPause:o,calculateOffset:l}}},k1=un`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,b1=un`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,j1=un`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,N1=In("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${k1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${b1} 0.15s ease-out forwards;
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
    animation: ${j1} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R1=un`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,A1=In("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${R1} 1s linear infinite;
`,L1=un`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,D1=un`
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
}`,O1=In("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${D1} 0.2s ease-out forwards;
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
`,M1=In("div")`
  position: absolute;
`,V1=In("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,_1=un`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z1=In("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_1} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,F1=({toast:t})=>{let{icon:r,type:i,iconTheme:o}=t;return r!==void 0?typeof r=="string"?k.createElement(z1,null,r):r:i==="blank"?null:k.createElement(V1,null,k.createElement(A1,{...o}),i!=="loading"&&k.createElement(M1,null,i==="error"?k.createElement(N1,{...o}):k.createElement(O1,{...o})))},I1=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,B1=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,U1="0%{opacity:0;} 100%{opacity:1;}",$1="0%{opacity:1;} 100%{opacity:0;}",q1=In("div")`
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
`,H1=In("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,W1=(t,r)=>{let i=t.includes("top")?1:-1,[o,l]=Km()?[U1,$1]:[I1(i),B1(i)];return{animation:r?`${un(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${un(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},K1=k.memo(({toast:t,position:r,style:i,children:o})=>{let l=t.height?W1(t.position||r||"top-center",t.visible):{opacity:0},u=k.createElement(F1,{toast:t}),c=k.createElement(H1,{...t.ariaProps},Bo(t.message,t));return k.createElement(q1,{className:t.className,style:{...l,...i,...t.style}},typeof o=="function"?o({icon:u,message:c}):k.createElement(k.Fragment,null,u,c))});h1(k.createElement);var G1=({id:t,className:r,style:i,onHeightUpdate:o,children:l})=>{let u=k.useCallback(c=>{if(c){let p=()=>{let h=c.getBoundingClientRect().height;o(t,h)};p(),new MutationObserver(p).observe(c,{subtree:!0,childList:!0,characterData:!0})}},[t,o]);return k.createElement("div",{ref:u,className:r,style:i},l)},Y1=(t,r)=>{let i=t.includes("top"),o=i?{top:0}:{bottom:0},l=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Km()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(i?1:-1)}px)`,...o,...l}},X1=Qo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Po=16,Q1=({reverseOrder:t,position:r="top-center",toastOptions:i,gutter:o,children:l,containerStyle:u,containerClassName:c})=>{let{toasts:p,handlers:h}=P1(i);return k.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:Po,left:Po,right:Po,bottom:Po,pointerEvents:"none",...u},className:c,onMouseEnter:h.startPause,onMouseLeave:h.endPause},p.map(m=>{let g=m.position||r,x=h.calculateOffset(m,{reverseOrder:t,gutter:o,defaultPosition:r}),w=Y1(g,x);return k.createElement(G1,{id:m.id,key:m.id,onHeightUpdate:h.updateHeight,className:m.visible?X1:"",style:w},m.type==="custom"?Bo(m.message,m):l?l(m):k.createElement(K1,{toast:m,position:g}))}))},Y=st;function Ym(t,r){return function(){return t.apply(r,arguments)}}const{toString:J1}=Object.prototype,{getPrototypeOf:dc}=Object,{iterator:Jo,toStringTag:Xm}=Symbol,Zo=(t=>r=>{const i=J1.call(r);return t[i]||(t[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),$t=t=>(t=t.toLowerCase(),r=>Zo(r)===t),ea=t=>r=>typeof r===t,{isArray:Gr}=Array,Xi=ea("undefined");function ss(t){return t!==null&&!Xi(t)&&t.constructor!==null&&!Xi(t.constructor)&&mt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Qm=$t("ArrayBuffer");function Z1(t){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(t):r=t&&t.buffer&&Qm(t.buffer),r}const ew=ea("string"),mt=ea("function"),Jm=ea("number"),os=t=>t!==null&&typeof t=="object",tw=t=>t===!0||t===!1,Lo=t=>{if(Zo(t)!=="object")return!1;const r=dc(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Xm in t)&&!(Jo in t)},nw=t=>{if(!os(t)||ss(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},rw=$t("Date"),iw=$t("File"),sw=$t("Blob"),ow=$t("FileList"),aw=t=>os(t)&&mt(t.pipe),lw=t=>{let r;return t&&(typeof FormData=="function"&&t instanceof FormData||mt(t.append)&&((r=Zo(t))==="formdata"||r==="object"&&mt(t.toString)&&t.toString()==="[object FormData]"))},uw=$t("URLSearchParams"),[cw,dw,fw,pw]=["ReadableStream","Request","Response","Headers"].map($t),hw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function as(t,r,{allOwnKeys:i=!1}={}){if(t===null||typeof t>"u")return;let o,l;if(typeof t!="object"&&(t=[t]),Gr(t))for(o=0,l=t.length;o<l;o++)r.call(null,t[o],o,t);else{if(ss(t))return;const u=i?Object.getOwnPropertyNames(t):Object.keys(t),c=u.length;let p;for(o=0;o<c;o++)p=u[o],r.call(null,t[p],p,t)}}function Zm(t,r){if(ss(t))return null;r=r.toLowerCase();const i=Object.keys(t);let o=i.length,l;for(;o-- >0;)if(l=i[o],r===l.toLowerCase())return l;return null}const ir=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,eg=t=>!Xi(t)&&t!==ir;function Du(){const{caseless:t}=eg(this)&&this||{},r={},i=(o,l)=>{const u=t&&Zm(r,l)||l;Lo(r[u])&&Lo(o)?r[u]=Du(r[u],o):Lo(o)?r[u]=Du({},o):Gr(o)?r[u]=o.slice():r[u]=o};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&as(arguments[o],i);return r}const mw=(t,r,i,{allOwnKeys:o}={})=>(as(r,(l,u)=>{i&&mt(l)?t[u]=Ym(l,i):t[u]=l},{allOwnKeys:o}),t),gw=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),yw=(t,r,i,o)=>{t.prototype=Object.create(r.prototype,o),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:r.prototype}),i&&Object.assign(t.prototype,i)},vw=(t,r,i,o)=>{let l,u,c;const p={};if(r=r||{},t==null)return r;do{for(l=Object.getOwnPropertyNames(t),u=l.length;u-- >0;)c=l[u],(!o||o(c,t,r))&&!p[c]&&(r[c]=t[c],p[c]=!0);t=i!==!1&&dc(t)}while(t&&(!i||i(t,r))&&t!==Object.prototype);return r},xw=(t,r,i)=>{t=String(t),(i===void 0||i>t.length)&&(i=t.length),i-=r.length;const o=t.indexOf(r,i);return o!==-1&&o===i},ww=t=>{if(!t)return null;if(Gr(t))return t;let r=t.length;if(!Jm(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=t[r];return i},Sw=(t=>r=>t&&r instanceof t)(typeof Uint8Array<"u"&&dc(Uint8Array)),Ew=(t,r)=>{const o=(t&&t[Jo]).call(t);let l;for(;(l=o.next())&&!l.done;){const u=l.value;r.call(t,u[0],u[1])}},Cw=(t,r)=>{let i;const o=[];for(;(i=t.exec(r))!==null;)o.push(i);return o},Tw=$t("HTMLFormElement"),Pw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,o,l){return o.toUpperCase()+l}),ah=(({hasOwnProperty:t})=>(r,i)=>t.call(r,i))(Object.prototype),kw=$t("RegExp"),tg=(t,r)=>{const i=Object.getOwnPropertyDescriptors(t),o={};as(i,(l,u)=>{let c;(c=r(l,u,t))!==!1&&(o[u]=c||l)}),Object.defineProperties(t,o)},bw=t=>{tg(t,(r,i)=>{if(mt(t)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const o=t[i];if(mt(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},jw=(t,r)=>{const i={},o=l=>{l.forEach(u=>{i[u]=!0})};return Gr(t)?o(t):o(String(t).split(r)),i},Nw=()=>{},Rw=(t,r)=>t!=null&&Number.isFinite(t=+t)?t:r;function Aw(t){return!!(t&&mt(t.append)&&t[Xm]==="FormData"&&t[Jo])}const Lw=t=>{const r=new Array(10),i=(o,l)=>{if(os(o)){if(r.indexOf(o)>=0)return;if(ss(o))return o;if(!("toJSON"in o)){r[l]=o;const u=Gr(o)?[]:{};return as(o,(c,p)=>{const h=i(c,l+1);!Xi(h)&&(u[p]=h)}),r[l]=void 0,u}}return o};return i(t,0)},Dw=$t("AsyncFunction"),Ow=t=>t&&(os(t)||mt(t))&&mt(t.then)&&mt(t.catch),ng=((t,r)=>t?setImmediate:r?((i,o)=>(ir.addEventListener("message",({source:l,data:u})=>{l===ir&&u===i&&o.length&&o.shift()()},!1),l=>{o.push(l),ir.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",mt(ir.postMessage)),Mw=typeof queueMicrotask<"u"?queueMicrotask.bind(ir):typeof process<"u"&&process.nextTick||ng,Vw=t=>t!=null&&mt(t[Jo]),D={isArray:Gr,isArrayBuffer:Qm,isBuffer:ss,isFormData:lw,isArrayBufferView:Z1,isString:ew,isNumber:Jm,isBoolean:tw,isObject:os,isPlainObject:Lo,isEmptyObject:nw,isReadableStream:cw,isRequest:dw,isResponse:fw,isHeaders:pw,isUndefined:Xi,isDate:rw,isFile:iw,isBlob:sw,isRegExp:kw,isFunction:mt,isStream:aw,isURLSearchParams:uw,isTypedArray:Sw,isFileList:ow,forEach:as,merge:Du,extend:mw,trim:hw,stripBOM:gw,inherits:yw,toFlatObject:vw,kindOf:Zo,kindOfTest:$t,endsWith:xw,toArray:ww,forEachEntry:Ew,matchAll:Cw,isHTMLForm:Tw,hasOwnProperty:ah,hasOwnProp:ah,reduceDescriptors:tg,freezeMethods:bw,toObjectSet:jw,toCamelCase:Pw,noop:Nw,toFiniteNumber:Rw,findKey:Zm,global:ir,isContextDefined:eg,isSpecCompliantForm:Aw,toJSONObject:Lw,isAsyncFn:Dw,isThenable:Ow,setImmediate:ng,asap:Mw,isIterable:Vw};function ae(t,r,i,o,l){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",r&&(this.code=r),i&&(this.config=i),o&&(this.request=o),l&&(this.response=l,this.status=l.status?l.status:null)}D.inherits(ae,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.status}}});const rg=ae.prototype,ig={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{ig[t]={value:t}});Object.defineProperties(ae,ig);Object.defineProperty(rg,"isAxiosError",{value:!0});ae.from=(t,r,i,o,l,u)=>{const c=Object.create(rg);return D.toFlatObject(t,c,function(h){return h!==Error.prototype},p=>p!=="isAxiosError"),ae.call(c,t.message,r,i,o,l),c.cause=t,c.name=t.name,u&&Object.assign(c,u),c};const _w=null;function Ou(t){return D.isPlainObject(t)||D.isArray(t)}function sg(t){return D.endsWith(t,"[]")?t.slice(0,-2):t}function lh(t,r,i){return t?t.concat(r).map(function(l,u){return l=sg(l),!i&&u?"["+l+"]":l}).join(i?".":""):r}function zw(t){return D.isArray(t)&&!t.some(Ou)}const Fw=D.toFlatObject(D,{},null,function(r){return/^is[A-Z]/.test(r)});function ta(t,r,i){if(!D.isObject(t))throw new TypeError("target must be an object");r=r||new FormData,i=D.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,C){return!D.isUndefined(C[T])});const o=i.metaTokens,l=i.visitor||g,u=i.dots,c=i.indexes,h=(i.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(r);if(!D.isFunction(l))throw new TypeError("visitor must be a function");function m(E){if(E===null)return"";if(D.isDate(E))return E.toISOString();if(D.isBoolean(E))return E.toString();if(!h&&D.isBlob(E))throw new ae("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(E)||D.isTypedArray(E)?h&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function g(E,T,C){let O=E;if(E&&!C&&typeof E=="object"){if(D.endsWith(T,"{}"))T=o?T:T.slice(0,-2),E=JSON.stringify(E);else if(D.isArray(E)&&zw(E)||(D.isFileList(E)||D.endsWith(T,"[]"))&&(O=D.toArray(E)))return T=sg(T),O.forEach(function(V,q){!(D.isUndefined(V)||V===null)&&r.append(c===!0?lh([T],q,u):c===null?T:T+"[]",m(V))}),!1}return Ou(E)?!0:(r.append(lh(C,T,u),m(E)),!1)}const x=[],w=Object.assign(Fw,{defaultVisitor:g,convertValue:m,isVisitable:Ou});function b(E,T){if(!D.isUndefined(E)){if(x.indexOf(E)!==-1)throw Error("Circular reference detected in "+T.join("."));x.push(E),D.forEach(E,function(O,M){(!(D.isUndefined(O)||O===null)&&l.call(r,O,D.isString(M)?M.trim():M,T,w))===!0&&b(O,T?T.concat(M):[M])}),x.pop()}}if(!D.isObject(t))throw new TypeError("data must be an object");return b(t),r}function uh(t){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function fc(t,r){this._pairs=[],t&&ta(t,this,r)}const og=fc.prototype;og.append=function(r,i){this._pairs.push([r,i])};og.toString=function(r){const i=r?function(o){return r.call(this,o,uh)}:uh;return this._pairs.map(function(l){return i(l[0])+"="+i(l[1])},"").join("&")};function Iw(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ag(t,r,i){if(!r)return t;const o=i&&i.encode||Iw;D.isFunction(i)&&(i={serialize:i});const l=i&&i.serialize;let u;if(l?u=l(r,i):u=D.isURLSearchParams(r)?r.toString():new fc(r,i).toString(o),u){const c=t.indexOf("#");c!==-1&&(t=t.slice(0,c)),t+=(t.indexOf("?")===-1?"?":"&")+u}return t}class ch{constructor(){this.handlers=[]}use(r,i,o){return this.handlers.push({fulfilled:r,rejected:i,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){D.forEach(this.handlers,function(o){o!==null&&r(o)})}}const lg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Bw=typeof URLSearchParams<"u"?URLSearchParams:fc,Uw=typeof FormData<"u"?FormData:null,$w=typeof Blob<"u"?Blob:null,qw={isBrowser:!0,classes:{URLSearchParams:Bw,FormData:Uw,Blob:$w},protocols:["http","https","file","blob","url","data"]},pc=typeof window<"u"&&typeof document<"u",Mu=typeof navigator=="object"&&navigator||void 0,Hw=pc&&(!Mu||["ReactNative","NativeScript","NS"].indexOf(Mu.product)<0),Ww=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Kw=pc&&window.location.href||"http://localhost",Gw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pc,hasStandardBrowserEnv:Hw,hasStandardBrowserWebWorkerEnv:Ww,navigator:Mu,origin:Kw},Symbol.toStringTag,{value:"Module"})),Ze={...Gw,...qw};function Yw(t,r){return ta(t,new Ze.classes.URLSearchParams,{visitor:function(i,o,l,u){return Ze.isNode&&D.isBuffer(i)?(this.append(o,i.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)},...r})}function Xw(t){return D.matchAll(/\w+|\[(\w*)]/g,t).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Qw(t){const r={},i=Object.keys(t);let o;const l=i.length;let u;for(o=0;o<l;o++)u=i[o],r[u]=t[u];return r}function ug(t){function r(i,o,l,u){let c=i[u++];if(c==="__proto__")return!0;const p=Number.isFinite(+c),h=u>=i.length;return c=!c&&D.isArray(l)?l.length:c,h?(D.hasOwnProp(l,c)?l[c]=[l[c],o]:l[c]=o,!p):((!l[c]||!D.isObject(l[c]))&&(l[c]=[]),r(i,o,l[c],u)&&D.isArray(l[c])&&(l[c]=Qw(l[c])),!p)}if(D.isFormData(t)&&D.isFunction(t.entries)){const i={};return D.forEachEntry(t,(o,l)=>{r(Xw(o),l,i,0)}),i}return null}function Jw(t,r,i){if(D.isString(t))try{return(r||JSON.parse)(t),D.trim(t)}catch(o){if(o.name!=="SyntaxError")throw o}return(i||JSON.stringify)(t)}const ls={transitional:lg,adapter:["xhr","http","fetch"],transformRequest:[function(r,i){const o=i.getContentType()||"",l=o.indexOf("application/json")>-1,u=D.isObject(r);if(u&&D.isHTMLForm(r)&&(r=new FormData(r)),D.isFormData(r))return l?JSON.stringify(ug(r)):r;if(D.isArrayBuffer(r)||D.isBuffer(r)||D.isStream(r)||D.isFile(r)||D.isBlob(r)||D.isReadableStream(r))return r;if(D.isArrayBufferView(r))return r.buffer;if(D.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let p;if(u){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Yw(r,this.formSerializer).toString();if((p=D.isFileList(r))||o.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return ta(p?{"files[]":r}:r,h&&new h,this.formSerializer)}}return u||l?(i.setContentType("application/json",!1),Jw(r)):r}],transformResponse:[function(r){const i=this.transitional||ls.transitional,o=i&&i.forcedJSONParsing,l=this.responseType==="json";if(D.isResponse(r)||D.isReadableStream(r))return r;if(r&&D.isString(r)&&(o&&!this.responseType||l)){const c=!(i&&i.silentJSONParsing)&&l;try{return JSON.parse(r)}catch(p){if(c)throw p.name==="SyntaxError"?ae.from(p,ae.ERR_BAD_RESPONSE,this,null,this.response):p}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ze.classes.FormData,Blob:Ze.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],t=>{ls.headers[t]={}});const Zw=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),eS=t=>{const r={};let i,o,l;return t&&t.split(`
`).forEach(function(c){l=c.indexOf(":"),i=c.substring(0,l).trim().toLowerCase(),o=c.substring(l+1).trim(),!(!i||r[i]&&Zw[i])&&(i==="set-cookie"?r[i]?r[i].push(o):r[i]=[o]:r[i]=r[i]?r[i]+", "+o:o)}),r},dh=Symbol("internals");function Fi(t){return t&&String(t).trim().toLowerCase()}function Do(t){return t===!1||t==null?t:D.isArray(t)?t.map(Do):String(t)}function tS(t){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=i.exec(t);)r[o[1]]=o[2];return r}const nS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function lu(t,r,i,o,l){if(D.isFunction(o))return o.call(this,r,i);if(l&&(r=i),!!D.isString(r)){if(D.isString(o))return r.indexOf(o)!==-1;if(D.isRegExp(o))return o.test(r)}}function rS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,o)=>i.toUpperCase()+o)}function iS(t,r){const i=D.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(t,o+i,{value:function(l,u,c){return this[o].call(this,r,l,u,c)},configurable:!0})})}let gt=class{constructor(r){r&&this.set(r)}set(r,i,o){const l=this;function u(p,h,m){const g=Fi(h);if(!g)throw new Error("header name must be a non-empty string");const x=D.findKey(l,g);(!x||l[x]===void 0||m===!0||m===void 0&&l[x]!==!1)&&(l[x||h]=Do(p))}const c=(p,h)=>D.forEach(p,(m,g)=>u(m,g,h));if(D.isPlainObject(r)||r instanceof this.constructor)c(r,i);else if(D.isString(r)&&(r=r.trim())&&!nS(r))c(eS(r),i);else if(D.isObject(r)&&D.isIterable(r)){let p={},h,m;for(const g of r){if(!D.isArray(g))throw TypeError("Object iterator must return a key-value pair");p[m=g[0]]=(h=p[m])?D.isArray(h)?[...h,g[1]]:[h,g[1]]:g[1]}c(p,i)}else r!=null&&u(i,r,o);return this}get(r,i){if(r=Fi(r),r){const o=D.findKey(this,r);if(o){const l=this[o];if(!i)return l;if(i===!0)return tS(l);if(D.isFunction(i))return i.call(this,l,o);if(D.isRegExp(i))return i.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=Fi(r),r){const o=D.findKey(this,r);return!!(o&&this[o]!==void 0&&(!i||lu(this,this[o],o,i)))}return!1}delete(r,i){const o=this;let l=!1;function u(c){if(c=Fi(c),c){const p=D.findKey(o,c);p&&(!i||lu(o,o[p],p,i))&&(delete o[p],l=!0)}}return D.isArray(r)?r.forEach(u):u(r),l}clear(r){const i=Object.keys(this);let o=i.length,l=!1;for(;o--;){const u=i[o];(!r||lu(this,this[u],u,r,!0))&&(delete this[u],l=!0)}return l}normalize(r){const i=this,o={};return D.forEach(this,(l,u)=>{const c=D.findKey(o,u);if(c){i[c]=Do(l),delete i[u];return}const p=r?rS(u):String(u).trim();p!==u&&delete i[u],i[p]=Do(l),o[p]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return D.forEach(this,(o,l)=>{o!=null&&o!==!1&&(i[l]=r&&D.isArray(o)?o.join(", "):o)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...i){const o=new this(r);return i.forEach(l=>o.set(l)),o}static accessor(r){const o=(this[dh]=this[dh]={accessors:{}}).accessors,l=this.prototype;function u(c){const p=Fi(c);o[p]||(iS(l,c),o[p]=!0)}return D.isArray(r)?r.forEach(u):u(r),this}};gt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(gt.prototype,({value:t},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>t,set(o){this[i]=o}}});D.freezeMethods(gt);function uu(t,r){const i=this||ls,o=r||i,l=gt.from(o.headers);let u=o.data;return D.forEach(t,function(p){u=p.call(i,u,l.normalize(),r?r.status:void 0)}),l.normalize(),u}function cg(t){return!!(t&&t.__CANCEL__)}function Yr(t,r,i){ae.call(this,t??"canceled",ae.ERR_CANCELED,r,i),this.name="CanceledError"}D.inherits(Yr,ae,{__CANCEL__:!0});function dg(t,r,i){const o=i.config.validateStatus;!i.status||!o||o(i.status)?t(i):r(new ae("Request failed with status code "+i.status,[ae.ERR_BAD_REQUEST,ae.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function sS(t){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}function oS(t,r){t=t||10;const i=new Array(t),o=new Array(t);let l=0,u=0,c;return r=r!==void 0?r:1e3,function(h){const m=Date.now(),g=o[u];c||(c=m),i[l]=h,o[l]=m;let x=u,w=0;for(;x!==l;)w+=i[x++],x=x%t;if(l=(l+1)%t,l===u&&(u=(u+1)%t),m-c<r)return;const b=g&&m-g;return b?Math.round(w*1e3/b):void 0}}function aS(t,r){let i=0,o=1e3/r,l,u;const c=(m,g=Date.now())=>{i=g,l=null,u&&(clearTimeout(u),u=null),t(...m)};return[(...m)=>{const g=Date.now(),x=g-i;x>=o?c(m,g):(l=m,u||(u=setTimeout(()=>{u=null,c(l)},o-x)))},()=>l&&c(l)]}const Uo=(t,r,i=3)=>{let o=0;const l=oS(50,250);return aS(u=>{const c=u.loaded,p=u.lengthComputable?u.total:void 0,h=c-o,m=l(h),g=c<=p;o=c;const x={loaded:c,total:p,progress:p?c/p:void 0,bytes:h,rate:m||void 0,estimated:m&&p&&g?(p-c)/m:void 0,event:u,lengthComputable:p!=null,[r?"download":"upload"]:!0};t(x)},i)},fh=(t,r)=>{const i=t!=null;return[o=>r[0]({lengthComputable:i,total:t,loaded:o}),r[1]]},ph=t=>(...r)=>D.asap(()=>t(...r)),lS=Ze.hasStandardBrowserEnv?((t,r)=>i=>(i=new URL(i,Ze.origin),t.protocol===i.protocol&&t.host===i.host&&(r||t.port===i.port)))(new URL(Ze.origin),Ze.navigator&&/(msie|trident)/i.test(Ze.navigator.userAgent)):()=>!0,uS=Ze.hasStandardBrowserEnv?{write(t,r,i,o,l,u){const c=[t+"="+encodeURIComponent(r)];D.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),D.isString(o)&&c.push("path="+o),D.isString(l)&&c.push("domain="+l),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read(t){const r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function cS(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function dS(t,r){return r?t.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):t}function fg(t,r,i){let o=!cS(r);return t&&(o||i==!1)?dS(t,r):r}const hh=t=>t instanceof gt?{...t}:t;function cr(t,r){r=r||{};const i={};function o(m,g,x,w){return D.isPlainObject(m)&&D.isPlainObject(g)?D.merge.call({caseless:w},m,g):D.isPlainObject(g)?D.merge({},g):D.isArray(g)?g.slice():g}function l(m,g,x,w){if(D.isUndefined(g)){if(!D.isUndefined(m))return o(void 0,m,x,w)}else return o(m,g,x,w)}function u(m,g){if(!D.isUndefined(g))return o(void 0,g)}function c(m,g){if(D.isUndefined(g)){if(!D.isUndefined(m))return o(void 0,m)}else return o(void 0,g)}function p(m,g,x){if(x in r)return o(m,g);if(x in t)return o(void 0,m)}const h={url:u,method:u,data:u,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:p,headers:(m,g,x)=>l(hh(m),hh(g),x,!0)};return D.forEach(Object.keys({...t,...r}),function(g){const x=h[g]||l,w=x(t[g],r[g],g);D.isUndefined(w)&&x!==p||(i[g]=w)}),i}const pg=t=>{const r=cr({},t);let{data:i,withXSRFToken:o,xsrfHeaderName:l,xsrfCookieName:u,headers:c,auth:p}=r;r.headers=c=gt.from(c),r.url=ag(fg(r.baseURL,r.url,r.allowAbsoluteUrls),t.params,t.paramsSerializer),p&&c.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let h;if(D.isFormData(i)){if(Ze.hasStandardBrowserEnv||Ze.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((h=c.getContentType())!==!1){const[m,...g]=h?h.split(";").map(x=>x.trim()).filter(Boolean):[];c.setContentType([m||"multipart/form-data",...g].join("; "))}}if(Ze.hasStandardBrowserEnv&&(o&&D.isFunction(o)&&(o=o(r)),o||o!==!1&&lS(r.url))){const m=l&&u&&uS.read(u);m&&c.set(l,m)}return r},fS=typeof XMLHttpRequest<"u",pS=fS&&function(t){return new Promise(function(i,o){const l=pg(t);let u=l.data;const c=gt.from(l.headers).normalize();let{responseType:p,onUploadProgress:h,onDownloadProgress:m}=l,g,x,w,b,E;function T(){b&&b(),E&&E(),l.cancelToken&&l.cancelToken.unsubscribe(g),l.signal&&l.signal.removeEventListener("abort",g)}let C=new XMLHttpRequest;C.open(l.method.toUpperCase(),l.url,!0),C.timeout=l.timeout;function O(){if(!C)return;const V=gt.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),$={data:!p||p==="text"||p==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:V,config:t,request:C};dg(function(ee){i(ee),T()},function(ee){o(ee),T()},$),C=null}"onloadend"in C?C.onloadend=O:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(O)},C.onabort=function(){C&&(o(new ae("Request aborted",ae.ECONNABORTED,t,C)),C=null)},C.onerror=function(){o(new ae("Network Error",ae.ERR_NETWORK,t,C)),C=null},C.ontimeout=function(){let q=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const $=l.transitional||lg;l.timeoutErrorMessage&&(q=l.timeoutErrorMessage),o(new ae(q,$.clarifyTimeoutError?ae.ETIMEDOUT:ae.ECONNABORTED,t,C)),C=null},u===void 0&&c.setContentType(null),"setRequestHeader"in C&&D.forEach(c.toJSON(),function(q,$){C.setRequestHeader($,q)}),D.isUndefined(l.withCredentials)||(C.withCredentials=!!l.withCredentials),p&&p!=="json"&&(C.responseType=l.responseType),m&&([w,E]=Uo(m,!0),C.addEventListener("progress",w)),h&&C.upload&&([x,b]=Uo(h),C.upload.addEventListener("progress",x),C.upload.addEventListener("loadend",b)),(l.cancelToken||l.signal)&&(g=V=>{C&&(o(!V||V.type?new Yr(null,t,C):V),C.abort(),C=null)},l.cancelToken&&l.cancelToken.subscribe(g),l.signal&&(l.signal.aborted?g():l.signal.addEventListener("abort",g)));const M=sS(l.url);if(M&&Ze.protocols.indexOf(M)===-1){o(new ae("Unsupported protocol "+M+":",ae.ERR_BAD_REQUEST,t));return}C.send(u||null)})},hS=(t,r)=>{const{length:i}=t=t?t.filter(Boolean):[];if(r||i){let o=new AbortController,l;const u=function(m){if(!l){l=!0,p();const g=m instanceof Error?m:this.reason;o.abort(g instanceof ae?g:new Yr(g instanceof Error?g.message:g))}};let c=r&&setTimeout(()=>{c=null,u(new ae(`timeout ${r} of ms exceeded`,ae.ETIMEDOUT))},r);const p=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(m=>{m.unsubscribe?m.unsubscribe(u):m.removeEventListener("abort",u)}),t=null)};t.forEach(m=>m.addEventListener("abort",u));const{signal:h}=o;return h.unsubscribe=()=>D.asap(p),h}},mS=function*(t,r){let i=t.byteLength;if(i<r){yield t;return}let o=0,l;for(;o<i;)l=o+r,yield t.slice(o,l),o=l},gS=async function*(t,r){for await(const i of yS(t))yield*mS(i,r)},yS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const r=t.getReader();try{for(;;){const{done:i,value:o}=await r.read();if(i)break;yield o}}finally{await r.cancel()}},mh=(t,r,i,o)=>{const l=gS(t,r);let u=0,c,p=h=>{c||(c=!0,o&&o(h))};return new ReadableStream({async pull(h){try{const{done:m,value:g}=await l.next();if(m){p(),h.close();return}let x=g.byteLength;if(i){let w=u+=x;i(w)}h.enqueue(new Uint8Array(g))}catch(m){throw p(m),m}},cancel(h){return p(h),l.return()}},{highWaterMark:2})},na=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",hg=na&&typeof ReadableStream=="function",vS=na&&(typeof TextEncoder=="function"?(t=>r=>t.encode(r))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),mg=(t,...r)=>{try{return!!t(...r)}catch{return!1}},xS=hg&&mg(()=>{let t=!1;const r=new Request(Ze.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!r}),gh=64*1024,Vu=hg&&mg(()=>D.isReadableStream(new Response("").body)),$o={stream:Vu&&(t=>t.body)};na&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!$o[r]&&($o[r]=D.isFunction(t[r])?i=>i[r]():(i,o)=>{throw new ae(`Response type '${r}' is not supported`,ae.ERR_NOT_SUPPORT,o)})})})(new Response);const wS=async t=>{if(t==null)return 0;if(D.isBlob(t))return t.size;if(D.isSpecCompliantForm(t))return(await new Request(Ze.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(D.isArrayBufferView(t)||D.isArrayBuffer(t))return t.byteLength;if(D.isURLSearchParams(t)&&(t=t+""),D.isString(t))return(await vS(t)).byteLength},SS=async(t,r)=>{const i=D.toFiniteNumber(t.getContentLength());return i??wS(r)},ES=na&&(async t=>{let{url:r,method:i,data:o,signal:l,cancelToken:u,timeout:c,onDownloadProgress:p,onUploadProgress:h,responseType:m,headers:g,withCredentials:x="same-origin",fetchOptions:w}=pg(t);m=m?(m+"").toLowerCase():"text";let b=hS([l,u&&u.toAbortSignal()],c),E;const T=b&&b.unsubscribe&&(()=>{b.unsubscribe()});let C;try{if(h&&xS&&i!=="get"&&i!=="head"&&(C=await SS(g,o))!==0){let $=new Request(r,{method:"POST",body:o,duplex:"half"}),X;if(D.isFormData(o)&&(X=$.headers.get("content-type"))&&g.setContentType(X),$.body){const[ee,J]=fh(C,Uo(ph(h)));o=mh($.body,gh,ee,J)}}D.isString(x)||(x=x?"include":"omit");const O="credentials"in Request.prototype;E=new Request(r,{...w,signal:b,method:i.toUpperCase(),headers:g.normalize().toJSON(),body:o,duplex:"half",credentials:O?x:void 0});let M=await fetch(E,w);const V=Vu&&(m==="stream"||m==="response");if(Vu&&(p||V&&T)){const $={};["status","statusText","headers"].forEach(ge=>{$[ge]=M[ge]});const X=D.toFiniteNumber(M.headers.get("content-length")),[ee,J]=p&&fh(X,Uo(ph(p),!0))||[];M=new Response(mh(M.body,gh,ee,()=>{J&&J(),T&&T()}),$)}m=m||"text";let q=await $o[D.findKey($o,m)||"text"](M,t);return!V&&T&&T(),await new Promise(($,X)=>{dg($,X,{data:q,headers:gt.from(M.headers),status:M.status,statusText:M.statusText,config:t,request:E})})}catch(O){throw T&&T(),O&&O.name==="TypeError"&&/Load failed|fetch/i.test(O.message)?Object.assign(new ae("Network Error",ae.ERR_NETWORK,t,E),{cause:O.cause||O}):ae.from(O,O&&O.code,t,E)}}),_u={http:_w,xhr:pS,fetch:ES};D.forEach(_u,(t,r)=>{if(t){try{Object.defineProperty(t,"name",{value:r})}catch{}Object.defineProperty(t,"adapterName",{value:r})}});const yh=t=>`- ${t}`,CS=t=>D.isFunction(t)||t===null||t===!1,gg={getAdapter:t=>{t=D.isArray(t)?t:[t];const{length:r}=t;let i,o;const l={};for(let u=0;u<r;u++){i=t[u];let c;if(o=i,!CS(i)&&(o=_u[(c=String(i)).toLowerCase()],o===void 0))throw new ae(`Unknown adapter '${c}'`);if(o)break;l[c||"#"+u]=o}if(!o){const u=Object.entries(l).map(([p,h])=>`adapter ${p} `+(h===!1?"is not supported by the environment":"is not available in the build"));let c=r?u.length>1?`since :
`+u.map(yh).join(`
`):" "+yh(u[0]):"as no adapter specified";throw new ae("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return o},adapters:_u};function cu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Yr(null,t)}function vh(t){return cu(t),t.headers=gt.from(t.headers),t.data=uu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),gg.getAdapter(t.adapter||ls.adapter)(t).then(function(o){return cu(t),o.data=uu.call(t,t.transformResponse,o),o.headers=gt.from(o.headers),o},function(o){return cg(o)||(cu(t),o&&o.response&&(o.response.data=uu.call(t,t.transformResponse,o.response),o.response.headers=gt.from(o.response.headers))),Promise.reject(o)})}const yg="1.11.0",ra={};["object","boolean","number","function","string","symbol"].forEach((t,r)=>{ra[t]=function(o){return typeof o===t||"a"+(r<1?"n ":" ")+t}});const xh={};ra.transitional=function(r,i,o){function l(u,c){return"[Axios v"+yg+"] Transitional option '"+u+"'"+c+(o?". "+o:"")}return(u,c,p)=>{if(r===!1)throw new ae(l(c," has been removed"+(i?" in "+i:"")),ae.ERR_DEPRECATED);return i&&!xh[c]&&(xh[c]=!0,console.warn(l(c," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(u,c,p):!0}};ra.spelling=function(r){return(i,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function TS(t,r,i){if(typeof t!="object")throw new ae("options must be an object",ae.ERR_BAD_OPTION_VALUE);const o=Object.keys(t);let l=o.length;for(;l-- >0;){const u=o[l],c=r[u];if(c){const p=t[u],h=p===void 0||c(p,u,t);if(h!==!0)throw new ae("option "+u+" must be "+h,ae.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new ae("Unknown option "+u,ae.ERR_BAD_OPTION)}}const Oo={assertOptions:TS,validators:ra},Yt=Oo.validators;let ar=class{constructor(r){this.defaults=r||{},this.interceptors={request:new ch,response:new ch}}async request(r,i){try{return await this._request(r,i)}catch(o){if(o instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const u=l.stack?l.stack.replace(/^.+\n/,""):"";try{o.stack?u&&!String(o.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+u):o.stack=u}catch{}}throw o}}_request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=cr(this.defaults,i);const{transitional:o,paramsSerializer:l,headers:u}=i;o!==void 0&&Oo.assertOptions(o,{silentJSONParsing:Yt.transitional(Yt.boolean),forcedJSONParsing:Yt.transitional(Yt.boolean),clarifyTimeoutError:Yt.transitional(Yt.boolean)},!1),l!=null&&(D.isFunction(l)?i.paramsSerializer={serialize:l}:Oo.assertOptions(l,{encode:Yt.function,serialize:Yt.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),Oo.assertOptions(i,{baseUrl:Yt.spelling("baseURL"),withXsrfToken:Yt.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let c=u&&D.merge(u.common,u[i.method]);u&&D.forEach(["delete","get","head","post","put","patch","common"],E=>{delete u[E]}),i.headers=gt.concat(c,u);const p=[];let h=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(i)===!1||(h=h&&T.synchronous,p.unshift(T.fulfilled,T.rejected))});const m=[];this.interceptors.response.forEach(function(T){m.push(T.fulfilled,T.rejected)});let g,x=0,w;if(!h){const E=[vh.bind(this),void 0];for(E.unshift(...p),E.push(...m),w=E.length,g=Promise.resolve(i);x<w;)g=g.then(E[x++],E[x++]);return g}w=p.length;let b=i;for(x=0;x<w;){const E=p[x++],T=p[x++];try{b=E(b)}catch(C){T.call(this,C);break}}try{g=vh.call(this,b)}catch(E){return Promise.reject(E)}for(x=0,w=m.length;x<w;)g=g.then(m[x++],m[x++]);return g}getUri(r){r=cr(this.defaults,r);const i=fg(r.baseURL,r.url,r.allowAbsoluteUrls);return ag(i,r.params,r.paramsSerializer)}};D.forEach(["delete","get","head","options"],function(r){ar.prototype[r]=function(i,o){return this.request(cr(o||{},{method:r,url:i,data:(o||{}).data}))}});D.forEach(["post","put","patch"],function(r){function i(o){return function(u,c,p){return this.request(cr(p||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:u,data:c}))}}ar.prototype[r]=i(),ar.prototype[r+"Form"]=i(!0)});let PS=class vg{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(u){i=u});const o=this;this.promise.then(l=>{if(!o._listeners)return;let u=o._listeners.length;for(;u-- >0;)o._listeners[u](l);o._listeners=null}),this.promise.then=l=>{let u;const c=new Promise(p=>{o.subscribe(p),u=p}).then(l);return c.cancel=function(){o.unsubscribe(u)},c},r(function(u,c,p){o.reason||(o.reason=new Yr(u,c,p),i(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const r=new AbortController,i=o=>{r.abort(o)};return this.subscribe(i),r.signal.unsubscribe=()=>this.unsubscribe(i),r.signal}static source(){let r;return{token:new vg(function(l){r=l}),cancel:r}}};function kS(t){return function(i){return t.apply(null,i)}}function bS(t){return D.isObject(t)&&t.isAxiosError===!0}const zu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(zu).forEach(([t,r])=>{zu[r]=t});function xg(t){const r=new ar(t),i=Ym(ar.prototype.request,r);return D.extend(i,ar.prototype,r,{allOwnKeys:!0}),D.extend(i,r,null,{allOwnKeys:!0}),i.create=function(l){return xg(cr(t,l))},i}const _e=xg(ls);_e.Axios=ar;_e.CanceledError=Yr;_e.CancelToken=PS;_e.isCancel=cg;_e.VERSION=yg;_e.toFormData=ta;_e.AxiosError=ae;_e.Cancel=_e.CanceledError;_e.all=function(r){return Promise.all(r)};_e.spread=kS;_e.isAxiosError=bS;_e.mergeConfig=cr;_e.AxiosHeaders=gt;_e.formToJSON=t=>ug(D.isHTMLForm(t)?new FormData(t):t);_e.getAdapter=gg.getAdapter;_e.HttpStatusCode=zu;_e.default=_e;const{Axios:NP,AxiosError:RP,CanceledError:AP,isCancel:LP,CancelToken:DP,VERSION:OP,all:MP,Cancel:VP,isAxiosError:_P,spread:zP,toFormData:FP,AxiosHeaders:IP,HttpStatusCode:BP,formToJSON:UP,getAdapter:$P,mergeConfig:qP}=_e,jS="https://cm14-production.up.railway.app",Oe=_e.create({baseURL:jS,timeout:1e4,headers:{"Content-Type":"application/json"}});Oe.interceptors.request.use(t=>{const r=localStorage.getItem("token");return r&&(t.headers.Authorization=`Bearer ${r}`),console.log(`🚀 API Request: ${t.method?.toUpperCase()} ${t.url}`),t},t=>(console.error("❌ Request Error:",t),Promise.reject(t)));Oe.interceptors.response.use(t=>(console.log(`✅ API Response: ${t.config.url}`,t.data),t),t=>(console.error("❌ Response Error:",t),t.response?.status===401?(localStorage.removeItem("token"),window.location.pathname!=="/login"&&(Y.error("⚠️ Sesión expirada. Por favor inicia sesión nuevamente"),window.location.href="/login")):t.response?.status===403?Y.error("🚫 No tienes permisos para realizar esta acción"):t.code==="ECONNABORTED"?Y.error("⏱️ Timeout: La API tardó mucho en responder"):t.response?.status===404?Y.error("🔍 No encontrado: Endpoint no existe"):t.response?.status>=500?Y.error("🔥 Error del servidor"):t.response||Y.error("🔌 No se puede conectar con la API"),Promise.reject(t)));const Dt={async login(t){try{Y.loading("Iniciando sesión...",{id:"login"});const r=await Oe.post("/api/auth/login",t);return Y.success("✅ Sesión iniciada correctamente",{id:"login"}),r.data}catch(r){throw Y.error("❌ Error al iniciar sesión",{id:"login"}),r}},async register(t){try{Y.loading("Creando cuenta...",{id:"register"});const r=await Oe.post("/api/auth/register",t);return Y.success("✅ Cuenta creada exitosamente",{id:"register"}),r.data}catch(r){throw Y.error("❌ Error al crear cuenta",{id:"register"}),r}},async logout(){try{await Oe.post("/api/auth/logout"),Y.success("👋 Sesión cerrada")}catch(t){console.error("Error en logout:",t)}},async verifyToken(){try{return(await Oe.get("/api/auth/me")).data}catch(t){throw t}},async getTorneoInfo(){try{return(await Oe.get("/")).data}catch{throw new Error("Error al obtener información del torneo")}},async getEquipos(){try{Y.loading("Cargando equipos...",{id:"equipos"});const t=await Oe.get("/api/equipos");return Y.success(`✅ ${t.data.total} equipos cargados`,{id:"equipos"}),t.data}catch(t){throw Y.error("❌ Error al cargar equipos",{id:"equipos"}),t}},async getEquiposPorGrupo(t){try{Y.loading(`Cargando equipos del grupo ${t}...`,{id:`grupo-${t}`});const r=await Oe.get(`/api/equipos/grupo/${t}`);return Y.success(`✅ Grupo ${t}: ${r.data.total} equipos`,{id:`grupo-${t}`}),r.data}catch(r){throw Y.error(`❌ Error al cargar grupo ${t}`,{id:`grupo-${t}`}),r}},async getPartidos(){try{Y.loading("Cargando partidos...",{id:"partidos"});const t=await Oe.get("/api/partidos");return Y.success(`✅ ${t.data.total} partidos cargados`,{id:"partidos"}),t.data}catch(t){throw Y.error("❌ Error al cargar partidos",{id:"partidos"}),t}},async getPartidosPorFecha(t){try{Y.loading(`Cargando fecha ${t}...`,{id:`fecha-${t}`});const r=await Oe.get(`/api/partidos/fecha/${t}`);return Y.success(`✅ ${r.data.data.partidos.length} partidos de la fecha ${t}`,{id:`fecha-${t}`}),r.data}catch(r){throw Y.error(`❌ Error al cargar fecha ${t}`,{id:`fecha-${t}`}),r}},async actualizarPartido(t,r){try{Y.loading("Actualizando resultado...",{id:`partido-${t}`});const i=await Oe.put(`/api/partidos/${t}`,r);return Y.success("🎯 Resultado actualizado exitosamente",{id:`partido-${t}`}),i.data}catch(i){throw Y.error("❌ Error al actualizar resultado",{id:`partido-${t}`}),i}},async getPosiciones(){try{Y.loading("Cargando tabla de posiciones...",{id:"posiciones"});const t=await Oe.get("/api/posiciones");return Y.success("🏆 Tabla de posiciones actualizada",{id:"posiciones"}),t.data}catch(t){throw Y.error("❌ Error al cargar posiciones",{id:"posiciones"}),t}},async getPosicionesPorGrupo(t){try{Y.loading(`Cargando posiciones del grupo ${t}...`,{id:`pos-${t}`});const r=await Oe.get(`/api/posiciones/grupo/${t}`);return Y.success(`🏆 Posiciones grupo ${t} actualizadas`,{id:`pos-${t}`}),r.data}catch(r){throw Y.error(`❌ Error en posiciones grupo ${t}`,{id:`pos-${t}`}),r}},async getFechas(){try{return(await Oe.get("/api/fechas")).data}catch(t){throw Y.error("❌ Error al cargar fechas"),t}},async getAdminStats(){try{Y.loading("Cargando estadísticas...",{id:"admin-stats"});const t=await Oe.get("/api/admin/stats");return Y.success("📊 Estadísticas cargadas",{id:"admin-stats"}),t.data}catch(t){throw Y.error("❌ Error al cargar estadísticas",{id:"admin-stats"}),t}},async getAdminUsers(){try{Y.loading("Cargando usuarios...",{id:"admin-users"});const t=await Oe.get("/api/admin/users");return Y.success("👥 Usuarios cargados",{id:"admin-users"}),t.data}catch(t){throw Y.error("❌ Error al cargar usuarios",{id:"admin-users"}),t}},async updateUserRole(t,r){try{Y.loading("Actualizando rol...",{id:`user-role-${t}`});const i=await Oe.put(`/api/admin/users/${t}/role`,{role:r});return Y.success("✅ Rol actualizado",{id:`user-role-${t}`}),i.data}catch(i){throw Y.error("❌ Error al actualizar rol",{id:`user-role-${t}`}),i}},async deleteUser(t){try{Y.loading("Eliminando usuario...",{id:`user-delete-${t}`});const r=await Oe.delete(`/api/admin/users/${t}`);return Y.success("🗑️ Usuario eliminado",{id:`user-delete-${t}`}),r.data}catch(r){throw Y.error("❌ Error al eliminar usuario",{id:`user-delete-${t}`}),r}},async getEstadisticas(){try{Y.loading("Calculando estadísticas...",{id:"stats"});const t=await Oe.get("/api/stats");return Y.success("📊 Estadísticas actualizadas",{id:"stats"}),t.data}catch(t){throw Y.error("❌ Error en estadísticas",{id:"stats"}),t}},async checkApiStatus(){try{const t=await Oe.get("/");return{online:!0,message:t.data.message,version:t.data.version}}catch(t){return{online:!1,message:"API no disponible",error:t.message}}},isAuthenticated(){return!!localStorage.getItem("token")},getTokenInfo(){const t=localStorage.getItem("token");if(!t)return null;try{return{token:t,valid:!0}}catch{return null}}},wg=k.createContext(),ia=()=>{const t=k.useContext(wg);if(!t)throw new Error("useAuth debe ser usado dentro de AuthProvider");return t},NS=({children:t})=>{const[r,i]=k.useState(null),[o,l]=k.useState(!0),[u,c]=k.useState(localStorage.getItem("token"));k.useEffect(()=>{(async()=>{const E=localStorage.getItem("token");if(E)try{const T=await Dt.verifyToken();i(T.data.user),c(E)}catch(T){console.error("Token inválido:",T),localStorage.removeItem("token"),c(null)}l(!1)})()},[]);const w={user:r,token:u,loading:o,login:async b=>{try{const E=await Dt.login(b),{token:T,user:C}=E.data;return i(C),c(T),localStorage.setItem("token",T),{success:!0,user:C}}catch(E){return console.error("Error en login:",E),{success:!1,message:E.response?.data?.message||"Error de conexión"}}},register:async b=>{try{return{success:!0,message:(await Dt.register(b)).data.message}}catch(E){return console.error("Error en registro:",E),{success:!1,message:E.response?.data?.message||"Error de conexión"}}},logout:async()=>{try{await Dt.logout()}catch(b){console.error("Error en logout:",b)}finally{i(null),c(null),localStorage.removeItem("token")}},isAdmin:()=>r?.role==="admin",isAuthenticated:()=>!!r&&!!u};return y.jsx(wg.Provider,{value:w,children:t})},RS=({children:t,requireAdmin:r=!1})=>{const{isAuthenticated:i,isAdmin:o,loading:l}=ia(),u=dr();return l?y.jsxs("div",{className:"loading",children:[y.jsx("div",{className:"loading-spinner"}),y.jsx("h2",{children:"Verificando autenticación..."})]}):i()?r&&!o()?y.jsxs("div",{className:"access-denied",children:[y.jsxs("div",{className:"access-denied-card",children:[y.jsx("div",{className:"access-denied-icon",children:"🚫"}),y.jsx("h2",{children:"Acceso Denegado"}),y.jsx("p",{children:"No tienes permisos suficientes para acceder a esta página."}),y.jsx("p",{children:"Se requieren permisos de administrador."}),y.jsx("button",{className:"btn btn-secondary",onClick:()=>window.history.back(),children:"Volver Atrás"})]}),y.jsx("style",{jsx:!0,children:`
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
        `})]}):t:y.jsx(Yx,{to:"/login",state:{from:u},replace:!0})},hc=k.createContext({});function mc(t){const r=k.useRef(null);return r.current===null&&(r.current=t()),r.current}const gc=typeof window<"u",Sg=gc?k.useLayoutEffect:k.useEffect,sa=k.createContext(null);function yc(t,r){t.indexOf(r)===-1&&t.push(r)}function vc(t,r){const i=t.indexOf(r);i>-1&&t.splice(i,1)}const cn=(t,r,i)=>i>r?r:i<t?t:i;let xc=()=>{};const dn={},Eg=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Cg(t){return typeof t=="object"&&t!==null}const Tg=t=>/^0[^.\s]+$/u.test(t);function wc(t){let r;return()=>(r===void 0&&(r=t()),r)}const Ot=t=>t,AS=(t,r)=>i=>r(t(i)),us=(...t)=>t.reduce(AS),Qi=(t,r,i)=>{const o=r-t;return o===0?1:(i-t)/o};class Sc{constructor(){this.subscriptions=[]}add(r){return yc(this.subscriptions,r),()=>vc(this.subscriptions,r)}notify(r,i,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](r,i,o);else for(let u=0;u<l;u++){const c=this.subscriptions[u];c&&c(r,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xt=t=>t*1e3,Qt=t=>t/1e3;function Pg(t,r){return r?t*(1e3/r):0}const kg=(t,r,i)=>(((1-3*i+3*r)*t+(3*i-6*r))*t+3*r)*t,LS=1e-7,DS=12;function OS(t,r,i,o,l){let u,c,p=0;do c=r+(i-r)/2,u=kg(c,o,l)-t,u>0?i=c:r=c;while(Math.abs(u)>LS&&++p<DS);return c}function cs(t,r,i,o){if(t===r&&i===o)return Ot;const l=u=>OS(u,0,1,t,i);return u=>u===0||u===1?u:kg(l(u),r,o)}const bg=t=>r=>r<=.5?t(2*r)/2:(2-t(2*(1-r)))/2,jg=t=>r=>1-t(1-r),Ng=cs(.33,1.53,.69,.99),Ec=jg(Ng),Rg=bg(Ec),Ag=t=>(t*=2)<1?.5*Ec(t):.5*(2-Math.pow(2,-10*(t-1))),Cc=t=>1-Math.sin(Math.acos(t)),Lg=jg(Cc),Dg=bg(Cc),MS=cs(.42,0,1,1),VS=cs(0,0,.58,1),Og=cs(.42,0,.58,1),_S=t=>Array.isArray(t)&&typeof t[0]!="number",Mg=t=>Array.isArray(t)&&typeof t[0]=="number",zS={linear:Ot,easeIn:MS,easeInOut:Og,easeOut:VS,circIn:Cc,circInOut:Dg,circOut:Lg,backIn:Ec,backInOut:Rg,backOut:Ng,anticipate:Ag},FS=t=>typeof t=="string",wh=t=>{if(Mg(t)){xc(t.length===4);const[r,i,o,l]=t;return cs(r,i,o,l)}else if(FS(t))return zS[t];return t},ko=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function IS(t,r){let i=new Set,o=new Set,l=!1,u=!1;const c=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(g){c.has(g)&&(m.schedule(g),t()),g(p)}const m={schedule:(g,x=!1,w=!1)=>{const E=w&&l?i:o;return x&&c.add(g),E.has(g)||E.add(g),g},cancel:g=>{o.delete(g),c.delete(g)},process:g=>{if(p=g,l){u=!0;return}l=!0,[i,o]=[o,i],i.forEach(h),i.clear(),l=!1,u&&(u=!1,m.process(g))}};return m}const BS=40;function Vg(t,r){let i=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,c=ko.reduce((V,q)=>(V[q]=IS(u),V),{}),{setup:p,read:h,resolveKeyframes:m,preUpdate:g,update:x,preRender:w,render:b,postRender:E}=c,T=()=>{const V=dn.useManualTiming?l.timestamp:performance.now();i=!1,dn.useManualTiming||(l.delta=o?1e3/60:Math.max(Math.min(V-l.timestamp,BS),1)),l.timestamp=V,l.isProcessing=!0,p.process(l),h.process(l),m.process(l),g.process(l),x.process(l),w.process(l),b.process(l),E.process(l),l.isProcessing=!1,i&&r&&(o=!1,t(T))},C=()=>{i=!0,o=!0,l.isProcessing||t(T)};return{schedule:ko.reduce((V,q)=>{const $=c[q];return V[q]=(X,ee=!1,J=!1)=>(i||C(),$.schedule(X,ee,J)),V},{}),cancel:V=>{for(let q=0;q<ko.length;q++)c[ko[q]].cancel(V)},state:l,steps:c}}const{schedule:ke,cancel:Vn,state:Ke,steps:du}=Vg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ot,!0);let Mo;function US(){Mo=void 0}const ht={now:()=>(Mo===void 0&&ht.set(Ke.isProcessing||dn.useManualTiming?Ke.timestamp:performance.now()),Mo),set:t=>{Mo=t,queueMicrotask(US)}},_g=t=>r=>typeof r=="string"&&r.startsWith(t),Tc=_g("--"),$S=_g("var(--"),Pc=t=>$S(t)?qS.test(t.split("/*")[0].trim()):!1,qS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Xr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ji={...Xr,transform:t=>cn(0,1,t)},bo={...Xr,default:1},$i=t=>Math.round(t*1e5)/1e5,kc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function HS(t){return t==null}const WS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,bc=(t,r)=>i=>!!(typeof i=="string"&&WS.test(i)&&i.startsWith(t)||r&&!HS(i)&&Object.prototype.hasOwnProperty.call(i,r)),zg=(t,r,i)=>o=>{if(typeof o!="string")return o;const[l,u,c,p]=o.match(kc);return{[t]:parseFloat(l),[r]:parseFloat(u),[i]:parseFloat(c),alpha:p!==void 0?parseFloat(p):1}},KS=t=>cn(0,255,t),fu={...Xr,transform:t=>Math.round(KS(t))},sr={test:bc("rgb","red"),parse:zg("red","green","blue"),transform:({red:t,green:r,blue:i,alpha:o=1})=>"rgba("+fu.transform(t)+", "+fu.transform(r)+", "+fu.transform(i)+", "+$i(Ji.transform(o))+")"};function GS(t){let r="",i="",o="",l="";return t.length>5?(r=t.substring(1,3),i=t.substring(3,5),o=t.substring(5,7),l=t.substring(7,9)):(r=t.substring(1,2),i=t.substring(2,3),o=t.substring(3,4),l=t.substring(4,5),r+=r,i+=i,o+=o,l+=l),{red:parseInt(r,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Fu={test:bc("#"),parse:GS,transform:sr.transform},ds=t=>({test:r=>typeof r=="string"&&r.endsWith(t)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${t}`}),Ln=ds("deg"),Jt=ds("%"),se=ds("px"),YS=ds("vh"),XS=ds("vw"),Sh={...Jt,parse:t=>Jt.parse(t)/100,transform:t=>Jt.transform(t*100)},zr={test:bc("hsl","hue"),parse:zg("hue","saturation","lightness"),transform:({hue:t,saturation:r,lightness:i,alpha:o=1})=>"hsla("+Math.round(t)+", "+Jt.transform($i(r))+", "+Jt.transform($i(i))+", "+$i(Ji.transform(o))+")"},Fe={test:t=>sr.test(t)||Fu.test(t)||zr.test(t),parse:t=>sr.test(t)?sr.parse(t):zr.test(t)?zr.parse(t):Fu.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?sr.transform(t):zr.transform(t),getAnimatableNone:t=>{const r=Fe.parse(t);return r.alpha=0,Fe.transform(r)}},QS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function JS(t){return isNaN(t)&&typeof t=="string"&&(t.match(kc)?.length||0)+(t.match(QS)?.length||0)>0}const Fg="number",Ig="color",ZS="var",eE="var(",Eh="${}",tE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Zi(t){const r=t.toString(),i=[],o={color:[],number:[],var:[]},l=[];let u=0;const p=r.replace(tE,h=>(Fe.test(h)?(o.color.push(u),l.push(Ig),i.push(Fe.parse(h))):h.startsWith(eE)?(o.var.push(u),l.push(ZS),i.push(h)):(o.number.push(u),l.push(Fg),i.push(parseFloat(h))),++u,Eh)).split(Eh);return{values:i,split:p,indexes:o,types:l}}function Bg(t){return Zi(t).values}function Ug(t){const{split:r,types:i}=Zi(t),o=r.length;return l=>{let u="";for(let c=0;c<o;c++)if(u+=r[c],l[c]!==void 0){const p=i[c];p===Fg?u+=$i(l[c]):p===Ig?u+=Fe.transform(l[c]):u+=l[c]}return u}}const nE=t=>typeof t=="number"?0:Fe.test(t)?Fe.getAnimatableNone(t):t;function rE(t){const r=Bg(t);return Ug(t)(r.map(nE))}const _n={test:JS,parse:Bg,createTransformer:Ug,getAnimatableNone:rE};function pu(t,r,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(r-t)*6*i:i<1/2?r:i<2/3?t+(r-t)*(2/3-i)*6:t}function iE({hue:t,saturation:r,lightness:i,alpha:o}){t/=360,r/=100,i/=100;let l=0,u=0,c=0;if(!r)l=u=c=i;else{const p=i<.5?i*(1+r):i+r-i*r,h=2*i-p;l=pu(h,p,t+1/3),u=pu(h,p,t),c=pu(h,p,t-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:o}}function qo(t,r){return i=>i>0?r:t}const Ne=(t,r,i)=>t+(r-t)*i,hu=(t,r,i)=>{const o=t*t,l=i*(r*r-o)+o;return l<0?0:Math.sqrt(l)},sE=[Fu,sr,zr],oE=t=>sE.find(r=>r.test(t));function Ch(t){const r=oE(t);if(!r)return!1;let i=r.parse(t);return r===zr&&(i=iE(i)),i}const Th=(t,r)=>{const i=Ch(t),o=Ch(r);if(!i||!o)return qo(t,r);const l={...i};return u=>(l.red=hu(i.red,o.red,u),l.green=hu(i.green,o.green,u),l.blue=hu(i.blue,o.blue,u),l.alpha=Ne(i.alpha,o.alpha,u),sr.transform(l))},Iu=new Set(["none","hidden"]);function aE(t,r){return Iu.has(t)?i=>i<=0?t:r:i=>i>=1?r:t}function lE(t,r){return i=>Ne(t,r,i)}function jc(t){return typeof t=="number"?lE:typeof t=="string"?Pc(t)?qo:Fe.test(t)?Th:dE:Array.isArray(t)?$g:typeof t=="object"?Fe.test(t)?Th:uE:qo}function $g(t,r){const i=[...t],o=i.length,l=t.map((u,c)=>jc(u)(u,r[c]));return u=>{for(let c=0;c<o;c++)i[c]=l[c](u);return i}}function uE(t,r){const i={...t,...r},o={};for(const l in i)t[l]!==void 0&&r[l]!==void 0&&(o[l]=jc(t[l])(t[l],r[l]));return l=>{for(const u in o)i[u]=o[u](l);return i}}function cE(t,r){const i=[],o={color:0,var:0,number:0};for(let l=0;l<r.values.length;l++){const u=r.types[l],c=t.indexes[u][o[u]],p=t.values[c]??0;i[l]=p,o[u]++}return i}const dE=(t,r)=>{const i=_n.createTransformer(r),o=Zi(t),l=Zi(r);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?Iu.has(t)&&!l.values.length||Iu.has(r)&&!o.values.length?aE(t,r):us($g(cE(o,l),l.values),i):qo(t,r)};function qg(t,r,i){return typeof t=="number"&&typeof r=="number"&&typeof i=="number"?Ne(t,r,i):jc(t)(t,r)}const fE=t=>{const r=({timestamp:i})=>t(i);return{start:(i=!0)=>ke.update(r,i),stop:()=>Vn(r),now:()=>Ke.isProcessing?Ke.timestamp:ht.now()}},Hg=(t,r,i=10)=>{let o="";const l=Math.max(Math.round(r/i),2);for(let u=0;u<l;u++)o+=Math.round(t(u/(l-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},Ho=2e4;function Nc(t){let r=0;const i=50;let o=t.next(r);for(;!o.done&&r<Ho;)r+=i,o=t.next(r);return r>=Ho?1/0:r}function pE(t,r=100,i){const o=i({...t,keyframes:[0,r]}),l=Math.min(Nc(o),Ho);return{type:"keyframes",ease:u=>o.next(l*u).value/r,duration:Qt(l)}}const hE=5;function Wg(t,r,i){const o=Math.max(r-hE,0);return Pg(i-t(o),r-o)}const Ae={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},mu=.001;function mE({duration:t=Ae.duration,bounce:r=Ae.bounce,velocity:i=Ae.velocity,mass:o=Ae.mass}){let l,u,c=1-r;c=cn(Ae.minDamping,Ae.maxDamping,c),t=cn(Ae.minDuration,Ae.maxDuration,Qt(t)),c<1?(l=m=>{const g=m*c,x=g*t,w=g-i,b=Bu(m,c),E=Math.exp(-x);return mu-w/b*E},u=m=>{const x=m*c*t,w=x*i+i,b=Math.pow(c,2)*Math.pow(m,2)*t,E=Math.exp(-x),T=Bu(Math.pow(m,2),c);return(-l(m)+mu>0?-1:1)*((w-b)*E)/T}):(l=m=>{const g=Math.exp(-m*t),x=(m-i)*t+1;return-mu+g*x},u=m=>{const g=Math.exp(-m*t),x=(i-m)*(t*t);return g*x});const p=5/t,h=yE(l,u,p);if(t=Xt(t),isNaN(h))return{stiffness:Ae.stiffness,damping:Ae.damping,duration:t};{const m=Math.pow(h,2)*o;return{stiffness:m,damping:c*2*Math.sqrt(o*m),duration:t}}}const gE=12;function yE(t,r,i){let o=i;for(let l=1;l<gE;l++)o=o-t(o)/r(o);return o}function Bu(t,r){return t*Math.sqrt(1-r*r)}const vE=["duration","bounce"],xE=["stiffness","damping","mass"];function Ph(t,r){return r.some(i=>t[i]!==void 0)}function wE(t){let r={velocity:Ae.velocity,stiffness:Ae.stiffness,damping:Ae.damping,mass:Ae.mass,isResolvedFromDuration:!1,...t};if(!Ph(t,xE)&&Ph(t,vE))if(t.visualDuration){const i=t.visualDuration,o=2*Math.PI/(i*1.2),l=o*o,u=2*cn(.05,1,1-(t.bounce||0))*Math.sqrt(l);r={...r,mass:Ae.mass,stiffness:l,damping:u}}else{const i=mE(t);r={...r,...i,mass:Ae.mass},r.isResolvedFromDuration=!0}return r}function Wo(t=Ae.visualDuration,r=Ae.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:r}:t;let{restSpeed:o,restDelta:l}=i;const u=i.keyframes[0],c=i.keyframes[i.keyframes.length-1],p={done:!1,value:u},{stiffness:h,damping:m,mass:g,duration:x,velocity:w,isResolvedFromDuration:b}=wE({...i,velocity:-Qt(i.velocity||0)}),E=w||0,T=m/(2*Math.sqrt(h*g)),C=c-u,O=Qt(Math.sqrt(h/g)),M=Math.abs(C)<5;o||(o=M?Ae.restSpeed.granular:Ae.restSpeed.default),l||(l=M?Ae.restDelta.granular:Ae.restDelta.default);let V;if(T<1){const $=Bu(O,T);V=X=>{const ee=Math.exp(-T*O*X);return c-ee*((E+T*O*C)/$*Math.sin($*X)+C*Math.cos($*X))}}else if(T===1)V=$=>c-Math.exp(-O*$)*(C+(E+O*C)*$);else{const $=O*Math.sqrt(T*T-1);V=X=>{const ee=Math.exp(-T*O*X),J=Math.min($*X,300);return c-ee*((E+T*O*C)*Math.sinh(J)+$*C*Math.cosh(J))/$}}const q={calculatedDuration:b&&x||null,next:$=>{const X=V($);if(b)p.done=$>=x;else{let ee=$===0?E:0;T<1&&(ee=$===0?Xt(E):Wg(V,$,X));const J=Math.abs(ee)<=o,ge=Math.abs(c-X)<=l;p.done=J&&ge}return p.value=p.done?c:X,p},toString:()=>{const $=Math.min(Nc(q),Ho),X=Hg(ee=>q.next($*ee).value,$,30);return $+"ms "+X},toTransition:()=>{}};return q}Wo.applyToOptions=t=>{const r=pE(t,100,Wo);return t.ease=r.ease,t.duration=Xt(r.duration),t.type="keyframes",t};function Uu({keyframes:t,velocity:r=0,power:i=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:c,min:p,max:h,restDelta:m=.5,restSpeed:g}){const x=t[0],w={done:!1,value:x},b=J=>p!==void 0&&J<p||h!==void 0&&J>h,E=J=>p===void 0?h:h===void 0||Math.abs(p-J)<Math.abs(h-J)?p:h;let T=i*r;const C=x+T,O=c===void 0?C:c(C);O!==C&&(T=O-x);const M=J=>-T*Math.exp(-J/o),V=J=>O+M(J),q=J=>{const ge=M(J),Se=V(J);w.done=Math.abs(ge)<=m,w.value=w.done?O:Se};let $,X;const ee=J=>{b(w.value)&&($=J,X=Wo({keyframes:[w.value,E(w.value)],velocity:Wg(V,J,w.value),damping:l,stiffness:u,restDelta:m,restSpeed:g}))};return ee(0),{calculatedDuration:null,next:J=>{let ge=!1;return!X&&$===void 0&&(ge=!0,q(J),ee(J)),$!==void 0&&J>=$?X.next(J-$):(!ge&&q(J),w)}}}function SE(t,r,i){const o=[],l=i||dn.mix||qg,u=t.length-1;for(let c=0;c<u;c++){let p=l(t[c],t[c+1]);if(r){const h=Array.isArray(r)?r[c]||Ot:r;p=us(h,p)}o.push(p)}return o}function EE(t,r,{clamp:i=!0,ease:o,mixer:l}={}){const u=t.length;if(xc(u===r.length),u===1)return()=>r[0];if(u===2&&r[0]===r[1])return()=>r[1];const c=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),r=[...r].reverse());const p=SE(r,o,l),h=p.length,m=g=>{if(c&&g<t[0])return r[0];let x=0;if(h>1)for(;x<t.length-2&&!(g<t[x+1]);x++);const w=Qi(t[x],t[x+1],g);return p[x](w)};return i?g=>m(cn(t[0],t[u-1],g)):m}function CE(t,r){const i=t[t.length-1];for(let o=1;o<=r;o++){const l=Qi(0,r,o);t.push(Ne(i,1,l))}}function TE(t){const r=[0];return CE(r,t.length-1),r}function PE(t,r){return t.map(i=>i*r)}function kE(t,r){return t.map(()=>r||Og).splice(0,t.length-1)}function qi({duration:t=300,keyframes:r,times:i,ease:o="easeInOut"}){const l=_S(o)?o.map(wh):wh(o),u={done:!1,value:r[0]},c=PE(i&&i.length===r.length?i:TE(r),t),p=EE(c,r,{ease:Array.isArray(l)?l:kE(r,l)});return{calculatedDuration:t,next:h=>(u.value=p(h),u.done=h>=t,u)}}const bE=t=>t!==null;function Rc(t,{repeat:r,repeatType:i="loop"},o,l=1){const u=t.filter(bE),p=l<0||r&&i!=="loop"&&r%2===1?0:u.length-1;return!p||o===void 0?u[p]:o}const jE={decay:Uu,inertia:Uu,tween:qi,keyframes:qi,spring:Wo};function Kg(t){typeof t.type=="string"&&(t.type=jE[t.type])}class Ac{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,i){return this.finished.then(r,i)}}const NE=t=>t/100;class Lc extends Ac{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:i}=this.options;i&&i.updatedAt!==ht.now()&&this.tick(ht.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;Kg(r);const{type:i=qi,repeat:o=0,repeatDelay:l=0,repeatType:u,velocity:c=0}=r;let{keyframes:p}=r;const h=i||qi;h!==qi&&typeof p[0]!="number"&&(this.mixKeyframes=us(NE,qg(p[0],p[1])),p=[0,100]);const m=h({...r,keyframes:p});u==="mirror"&&(this.mirroredGenerator=h({...r,keyframes:[...p].reverse(),velocity:-c})),m.calculatedDuration===null&&(m.calculatedDuration=Nc(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+l,this.totalDuration=this.resolvedDuration*(o+1)-l,this.generator=m}updateTime(r){const i=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(r,i=!1){const{generator:o,totalDuration:l,mixKeyframes:u,mirroredGenerator:c,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return o.next(0);const{delay:m=0,keyframes:g,repeat:x,repeatType:w,repeatDelay:b,type:E,onUpdate:T,finalKeyframe:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-l/this.speed,this.startTime)),i?this.currentTime=r:this.updateTime(r);const O=this.currentTime-m*(this.playbackSpeed>=0?1:-1),M=this.playbackSpeed>=0?O<0:O>l;this.currentTime=Math.max(O,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let V=this.currentTime,q=o;if(x){const J=Math.min(this.currentTime,l)/p;let ge=Math.floor(J),Se=J%1;!Se&&J>=1&&(Se=1),Se===1&&ge--,ge=Math.min(ge,x+1),!!(ge%2)&&(w==="reverse"?(Se=1-Se,b&&(Se-=b/p)):w==="mirror"&&(q=c)),V=cn(0,1,Se)*p}const $=M?{done:!1,value:g[0]}:q.next(V);u&&($.value=u($.value));let{done:X}=$;!M&&h!==null&&(X=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const ee=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&X);return ee&&E!==Uu&&($.value=Rc(g,this.options,C,this.speed)),T&&T($.value),ee&&this.finish(),$}then(r,i){return this.finished.then(r,i)}get duration(){return Qt(this.calculatedDuration)}get time(){return Qt(this.currentTime)}set time(r){r=Xt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(r){this.updateTime(ht.now());const i=this.playbackSpeed!==r;this.playbackSpeed=r,i&&(this.time=Qt(this.currentTime))}play(){if(this.isStopped)return;const{driver:r=fE,startTime:i}=this.options;this.driver||(this.driver=r(l=>this.tick(l))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=i??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ht.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),r.observe(this)}}function RE(t){for(let r=1;r<t.length;r++)t[r]??(t[r]=t[r-1])}const or=t=>t*180/Math.PI,$u=t=>{const r=or(Math.atan2(t[1],t[0]));return qu(r)},AE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:$u,rotateZ:$u,skewX:t=>or(Math.atan(t[1])),skewY:t=>or(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},qu=t=>(t=t%360,t<0&&(t+=360),t),kh=$u,bh=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),jh=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),LE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:bh,scaleY:jh,scale:t=>(bh(t)+jh(t))/2,rotateX:t=>qu(or(Math.atan2(t[6],t[5]))),rotateY:t=>qu(or(Math.atan2(-t[2],t[0]))),rotateZ:kh,rotate:kh,skewX:t=>or(Math.atan(t[4])),skewY:t=>or(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Hu(t){return t.includes("scale")?1:0}function Wu(t,r){if(!t||t==="none")return Hu(r);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,l;if(i)o=LE,l=i;else{const p=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=AE,l=p}if(!l)return Hu(r);const u=o[r],c=l[1].split(",").map(OE);return typeof u=="function"?u(c):c[u]}const DE=(t,r)=>{const{transform:i="none"}=getComputedStyle(t);return Wu(i,r)};function OE(t){return parseFloat(t.trim())}const Qr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Jr=new Set(Qr),Nh=t=>t===Xr||t===se,ME=new Set(["x","y","z"]),VE=Qr.filter(t=>!ME.has(t));function _E(t){const r=[];return VE.forEach(i=>{const o=t.getValue(i);o!==void 0&&(r.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),r}const lr={width:({x:t},{paddingLeft:r="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(r)-parseFloat(i),height:({y:t},{paddingTop:r="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(r)-parseFloat(i),top:(t,{top:r})=>parseFloat(r),left:(t,{left:r})=>parseFloat(r),bottom:({y:t},{top:r})=>parseFloat(r)+(t.max-t.min),right:({x:t},{left:r})=>parseFloat(r)+(t.max-t.min),x:(t,{transform:r})=>Wu(r,"x"),y:(t,{transform:r})=>Wu(r,"y")};lr.translateX=lr.x;lr.translateY=lr.y;const ur=new Set;let Ku=!1,Gu=!1,Yu=!1;function Gg(){if(Gu){const t=Array.from(ur).filter(o=>o.needsMeasurement),r=new Set(t.map(o=>o.element)),i=new Map;r.forEach(o=>{const l=_E(o);l.length&&(i.set(o,l),o.render())}),t.forEach(o=>o.measureInitialState()),r.forEach(o=>{o.render();const l=i.get(o);l&&l.forEach(([u,c])=>{o.getValue(u)?.set(c)})}),t.forEach(o=>o.measureEndState()),t.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Gu=!1,Ku=!1,ur.forEach(t=>t.complete(Yu)),ur.clear()}function Yg(){ur.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Gu=!0)})}function zE(){Yu=!0,Yg(),Gg(),Yu=!1}class Dc{constructor(r,i,o,l,u,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=i,this.name=o,this.motionValue=l,this.element=u,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(ur.add(this),Ku||(Ku=!0,ke.read(Yg),ke.resolveKeyframes(Gg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:i,element:o,motionValue:l}=this;if(r[0]===null){const u=l?.get(),c=r[r.length-1];if(u!==void 0)r[0]=u;else if(o&&i){const p=o.readValue(i,c);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=c),l&&u===void 0&&l.set(r[0])}RE(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),ur.delete(this)}cancel(){this.state==="scheduled"&&(ur.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const FE=t=>t.startsWith("--");function IE(t,r,i){FE(r)?t.style.setProperty(r,i):t.style[r]=i}const BE=wc(()=>window.ScrollTimeline!==void 0),UE={};function $E(t,r){const i=wc(t);return()=>UE[r]??i()}const Xg=$E(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Bi=([t,r,i,o])=>`cubic-bezier(${t}, ${r}, ${i}, ${o})`,Rh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bi([0,.65,.55,1]),circOut:Bi([.55,0,1,.45]),backIn:Bi([.31,.01,.66,-.59]),backOut:Bi([.33,1.53,.69,.99])};function Qg(t,r){if(t)return typeof t=="function"?Xg()?Hg(t,r):"ease-out":Mg(t)?Bi(t):Array.isArray(t)?t.map(i=>Qg(i,r)||Rh.easeOut):Rh[t]}function qE(t,r,i,{delay:o=0,duration:l=300,repeat:u=0,repeatType:c="loop",ease:p="easeOut",times:h}={},m=void 0){const g={[r]:i};h&&(g.offset=h);const x=Qg(p,l);Array.isArray(x)&&(g.easing=x);const w={delay:o,duration:l,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal"};return m&&(w.pseudoElement=m),t.animate(g,w)}function Jg(t){return typeof t=="function"&&"applyToOptions"in t}function HE({type:t,...r}){return Jg(t)&&Xg()?t.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class WE extends Ac{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,!r)return;const{element:i,name:o,keyframes:l,pseudoElement:u,allowFlatten:c=!1,finalKeyframe:p,onComplete:h}=r;this.isPseudoElement=!!u,this.allowFlatten=c,this.options=r,xc(typeof r.type!="string");const m=HE(r);this.animation=qE(i,o,l,m,u),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Rc(l,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(g):IE(i,o,g),this.animation.cancel()}h?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const r=this.animation.effect?.getComputedTiming?.().duration||0;return Qt(Number(r))}get time(){return Qt(Number(this.animation.currentTime)||0)}set time(r){this.finishedTime=null,this.animation.currentTime=Xt(r)}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(r){this.animation.startTime=r}attachTimeline({timeline:r,observe:i}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,r&&BE()?(this.animation.timeline=r,Ot):i(this)}}const Zg={anticipate:Ag,backInOut:Rg,circInOut:Dg};function KE(t){return t in Zg}function GE(t){typeof t.ease=="string"&&KE(t.ease)&&(t.ease=Zg[t.ease])}const Ah=10;class YE extends WE{constructor(r){GE(r),Kg(r),super(r),r.startTime&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:i,onUpdate:o,onComplete:l,element:u,...c}=this.options;if(!i)return;if(r!==void 0){i.set(r);return}const p=new Lc({...c,autoplay:!1}),h=Xt(this.finishedTime??this.time);i.setWithVelocity(p.sample(h-Ah).value,p.sample(h).value,Ah),p.stop()}}const Lh=(t,r)=>r==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(_n.test(t)||t==="0")&&!t.startsWith("url("));function XE(t){const r=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==r)return!0}function QE(t,r,i,o){const l=t[0];if(l===null)return!1;if(r==="display"||r==="visibility")return!0;const u=t[t.length-1],c=Lh(l,r),p=Lh(u,r);return!c||!p?!1:XE(t)||(i==="spring"||Jg(i))&&o}function Xu(t){t.duration=0,t.type}const JE=new Set(["opacity","clipPath","filter","transform"]),ZE=wc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function e2(t){const{motionValue:r,name:i,repeatDelay:o,repeatType:l,damping:u,type:c}=t;if(!(r?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=r.owner.getProps();return ZE()&&i&&JE.has(i)&&(i!=="transform"||!m)&&!h&&!o&&l!=="mirror"&&u!==0&&c!=="inertia"}const t2=40;class n2 extends Ac{constructor({autoplay:r=!0,delay:i=0,type:o="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:c="loop",keyframes:p,name:h,motionValue:m,element:g,...x}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ht.now();const w={autoplay:r,delay:i,type:o,repeat:l,repeatDelay:u,repeatType:c,name:h,motionValue:m,element:g,...x},b=g?.KeyframeResolver||Dc;this.keyframeResolver=new b(p,(E,T,C)=>this.onKeyframesResolved(E,T,w,!C),h,m,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(r,i,o,l){this.keyframeResolver=void 0;const{name:u,type:c,velocity:p,delay:h,isHandoff:m,onUpdate:g}=o;this.resolvedAt=ht.now(),QE(r,u,c,p)||((dn.instantAnimations||!h)&&g?.(Rc(r,o,i)),r[0]=r[r.length-1],Xu(o),o.repeat=0);const w={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>t2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...o,keyframes:r},b=!m&&e2(w)?new YE({...w,element:w.motionValue.owner.current}):new Lc(w);b.finished.then(()=>this.notifyFinished()).catch(Ot),this.pendingTimeline&&(this.stopTimeline=b.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=b}get finished(){return this._animation?this.animation.finished:this._finished}then(r,i){return this.finished.finally(r).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),zE()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const r2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function i2(t){const r=r2.exec(t);if(!r)return[,];const[,i,o,l]=r;return[`--${i??o}`,l]}function ey(t,r,i=1){const[o,l]=i2(t);if(!o)return;const u=window.getComputedStyle(r).getPropertyValue(o);if(u){const c=u.trim();return Eg(c)?parseFloat(c):c}return Pc(l)?ey(l,r,i+1):l}function Oc(t,r){return t?.[r]??t?.default??t}const ty=new Set(["width","height","top","left","right","bottom",...Qr]),s2={test:t=>t==="auto",parse:t=>t},ny=t=>r=>r.test(t),ry=[Xr,se,Jt,Ln,XS,YS,s2],Dh=t=>ry.find(ny(t));function o2(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Tg(t):!0}const a2=new Set(["brightness","contrast","saturate","opacity"]);function l2(t){const[r,i]=t.slice(0,-1).split("(");if(r==="drop-shadow")return t;const[o]=i.match(kc)||[];if(!o)return t;const l=i.replace(o,"");let u=a2.has(r)?1:0;return o!==i&&(u*=100),r+"("+u+l+")"}const u2=/\b([a-z-]*)\(.*?\)/gu,Qu={..._n,getAnimatableNone:t=>{const r=t.match(u2);return r?r.map(l2).join(" "):t}},Oh={...Xr,transform:Math.round},c2={rotate:Ln,rotateX:Ln,rotateY:Ln,rotateZ:Ln,scale:bo,scaleX:bo,scaleY:bo,scaleZ:bo,skew:Ln,skewX:Ln,skewY:Ln,distance:se,translateX:se,translateY:se,translateZ:se,x:se,y:se,z:se,perspective:se,transformPerspective:se,opacity:Ji,originX:Sh,originY:Sh,originZ:se},Mc={borderWidth:se,borderTopWidth:se,borderRightWidth:se,borderBottomWidth:se,borderLeftWidth:se,borderRadius:se,radius:se,borderTopLeftRadius:se,borderTopRightRadius:se,borderBottomRightRadius:se,borderBottomLeftRadius:se,width:se,maxWidth:se,height:se,maxHeight:se,top:se,right:se,bottom:se,left:se,padding:se,paddingTop:se,paddingRight:se,paddingBottom:se,paddingLeft:se,margin:se,marginTop:se,marginRight:se,marginBottom:se,marginLeft:se,backgroundPositionX:se,backgroundPositionY:se,...c2,zIndex:Oh,fillOpacity:Ji,strokeOpacity:Ji,numOctaves:Oh},d2={...Mc,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:Qu,WebkitFilter:Qu},iy=t=>d2[t];function sy(t,r){let i=iy(t);return i!==Qu&&(i=_n),i.getAnimatableNone?i.getAnimatableNone(r):void 0}const f2=new Set(["auto","none","0"]);function p2(t,r,i){let o=0,l;for(;o<t.length&&!l;){const u=t[o];typeof u=="string"&&!f2.has(u)&&Zi(u).values.length&&(l=t[o]),o++}if(l&&i)for(const u of r)t[u]=sy(i,l)}class h2 extends Dc{constructor(r,i,o,l,u){super(r,i,o,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let h=0;h<r.length;h++){let m=r[h];if(typeof m=="string"&&(m=m.trim(),Pc(m))){const g=ey(m,i.current);g!==void 0&&(r[h]=g),h===r.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!ty.has(o)||r.length!==2)return;const[l,u]=r,c=Dh(l),p=Dh(u);if(c!==p)if(Nh(c)&&Nh(p))for(let h=0;h<r.length;h++){const m=r[h];typeof m=="string"&&(r[h]=parseFloat(m))}else lr[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:i}=this,o=[];for(let l=0;l<r.length;l++)(r[l]===null||o2(r[l]))&&o.push(l);o.length&&p2(r,o,i)}measureInitialState(){const{element:r,unresolvedKeyframes:i,name:o}=this;if(!r||!r.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=lr[o](r.measureViewportBox(),window.getComputedStyle(r.current)),i[0]=this.measuredOrigin;const l=i[i.length-1];l!==void 0&&r.getValue(o,l).jump(l,!1)}measureEndState(){const{element:r,name:i,unresolvedKeyframes:o}=this;if(!r||!r.current)return;const l=r.getValue(i);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=lr[i](r.measureViewportBox(),window.getComputedStyle(r.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,h])=>{r.getValue(p).set(h)}),this.resolveNoneKeyframes()}}function m2(t,r,i){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let o=document;const l=i?.[t]??o.querySelectorAll(t);return l?Array.from(l):[]}return Array.from(t)}const oy=(t,r)=>r&&typeof t=="number"?r.transform(t):t;function ay(t){return Cg(t)&&"offsetHeight"in t}const Mh=30,g2=t=>!isNaN(parseFloat(t));class y2{constructor(r,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const l=ht.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=i.owner}setCurrent(r){this.current=r,this.updatedAt=ht.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=g2(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,i){this.events[r]||(this.events[r]=new Sc);const o=this.events[r].add(i);return r==="change"?()=>{o(),ke.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,i){this.passiveEffect=r,this.stopPassiveEffect=i}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-o}jump(r,i=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=ht.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>Mh)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Mh);return Pg(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(r){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=r(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function qr(t,r){return new y2(t,r)}const{schedule:Vc}=Vg(queueMicrotask,!1),Ut={x:!1,y:!1};function ly(){return Ut.x||Ut.y}function v2(t){return t==="x"||t==="y"?Ut[t]?null:(Ut[t]=!0,()=>{Ut[t]=!1}):Ut.x||Ut.y?null:(Ut.x=Ut.y=!0,()=>{Ut.x=Ut.y=!1})}function uy(t,r){const i=m2(t),o=new AbortController,l={passive:!0,...r,signal:o.signal};return[i,l,()=>o.abort()]}function Vh(t){return!(t.pointerType==="touch"||ly())}function x2(t,r,i={}){const[o,l,u]=uy(t,i),c=p=>{if(!Vh(p))return;const{target:h}=p,m=r(h,p);if(typeof m!="function"||!h)return;const g=x=>{Vh(x)&&(m(x),h.removeEventListener("pointerleave",g))};h.addEventListener("pointerleave",g,l)};return o.forEach(p=>{p.addEventListener("pointerenter",c,l)}),u}const cy=(t,r)=>r?t===r?!0:cy(t,r.parentElement):!1,_c=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,w2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function S2(t){return w2.has(t.tagName)||t.tabIndex!==-1}const Vo=new WeakSet;function _h(t){return r=>{r.key==="Enter"&&t(r)}}function gu(t,r){t.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const E2=(t,r)=>{const i=t.currentTarget;if(!i)return;const o=_h(()=>{if(Vo.has(i))return;gu(i,"down");const l=_h(()=>{gu(i,"up")}),u=()=>gu(i,"cancel");i.addEventListener("keyup",l,r),i.addEventListener("blur",u,r)});i.addEventListener("keydown",o,r),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),r)};function zh(t){return _c(t)&&!ly()}function C2(t,r,i={}){const[o,l,u]=uy(t,i),c=p=>{const h=p.currentTarget;if(!zh(p))return;Vo.add(h);const m=r(h,p),g=(b,E)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",w),Vo.has(h)&&Vo.delete(h),zh(b)&&typeof m=="function"&&m(b,{success:E})},x=b=>{g(b,h===window||h===document||i.useGlobalTarget||cy(h,b.target))},w=b=>{g(b,!1)};window.addEventListener("pointerup",x,l),window.addEventListener("pointercancel",w,l)};return o.forEach(p=>{(i.useGlobalTarget?window:p).addEventListener("pointerdown",c,l),ay(p)&&(p.addEventListener("focus",m=>E2(m,l)),!S2(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),u}function dy(t){return Cg(t)&&"ownerSVGElement"in t}function T2(t){return dy(t)&&t.tagName==="svg"}const et=t=>!!(t&&t.getVelocity),P2=[...ry,Fe,_n],k2=t=>P2.find(ny(t)),zc=k.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class b2 extends k.Component{getSnapshotBeforeUpdate(r){const i=this.props.childRef.current;if(i&&r.isPresent&&!this.props.isPresent){const o=i.offsetParent,l=ay(o)&&o.offsetWidth||0,u=this.props.sizeRef.current;u.height=i.offsetHeight||0,u.width=i.offsetWidth||0,u.top=i.offsetTop,u.left=i.offsetLeft,u.right=l-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function j2({children:t,isPresent:r,anchorX:i,root:o}){const l=k.useId(),u=k.useRef(null),c=k.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=k.useContext(zc);return k.useInsertionEffect(()=>{const{width:h,height:m,top:g,left:x,right:w}=c.current;if(r||!u.current||!h||!m)return;const b=i==="left"?`left: ${x}`:`right: ${w}`;u.current.dataset.motionPopId=l;const E=document.createElement("style");p&&(E.nonce=p);const T=o??document.head;return T.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${m}px !important;
            ${b}px !important;
            top: ${g}px !important;
          }
        `),()=>{T.contains(E)&&T.removeChild(E)}},[r]),y.jsx(b2,{isPresent:r,childRef:u,sizeRef:c,children:k.cloneElement(t,{ref:u})})}const N2=({children:t,initial:r,isPresent:i,onExitComplete:o,custom:l,presenceAffectsLayout:u,mode:c,anchorX:p,root:h})=>{const m=mc(R2),g=k.useId();let x=!0,w=k.useMemo(()=>(x=!1,{id:g,initial:r,isPresent:i,custom:l,onExitComplete:b=>{m.set(b,!0);for(const E of m.values())if(!E)return;o&&o()},register:b=>(m.set(b,!1),()=>m.delete(b))}),[i,m,o]);return u&&x&&(w={...w}),k.useMemo(()=>{m.forEach((b,E)=>m.set(E,!1))},[i]),k.useEffect(()=>{!i&&!m.size&&o&&o()},[i]),c==="popLayout"&&(t=y.jsx(j2,{isPresent:i,anchorX:p,root:h,children:t})),y.jsx(sa.Provider,{value:w,children:t})};function R2(){return new Map}function fy(t=!0){const r=k.useContext(sa);if(r===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:l}=r,u=k.useId();k.useEffect(()=>{if(t)return l(u)},[t]);const c=k.useCallback(()=>t&&o&&o(u),[u,o,t]);return!i&&o?[!1,c]:[!0]}const jo=t=>t.key||"";function Fh(t){const r=[];return k.Children.forEach(t,i=>{k.isValidElement(i)&&r.push(i)}),r}const A2=({children:t,custom:r,initial:i=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:u="sync",propagate:c=!1,anchorX:p="left",root:h})=>{const[m,g]=fy(c),x=k.useMemo(()=>Fh(t),[t]),w=c&&!m?[]:x.map(jo),b=k.useRef(!0),E=k.useRef(x),T=mc(()=>new Map),[C,O]=k.useState(x),[M,V]=k.useState(x);Sg(()=>{b.current=!1,E.current=x;for(let X=0;X<M.length;X++){const ee=jo(M[X]);w.includes(ee)?T.delete(ee):T.get(ee)!==!0&&T.set(ee,!1)}},[M,w.length,w.join("-")]);const q=[];if(x!==C){let X=[...x];for(let ee=0;ee<M.length;ee++){const J=M[ee],ge=jo(J);w.includes(ge)||(X.splice(ee,0,J),q.push(J))}return u==="wait"&&q.length&&(X=q),V(Fh(X)),O(x),null}const{forceRender:$}=k.useContext(hc);return y.jsx(y.Fragment,{children:M.map(X=>{const ee=jo(X),J=c&&!m?!1:x===M||w.includes(ee),ge=()=>{if(T.has(ee))T.set(ee,!0);else return;let Se=!0;T.forEach(Ge=>{Ge||(Se=!1)}),Se&&($?.(),V(E.current),c&&g?.(),o&&o())};return y.jsx(N2,{isPresent:J,initial:!b.current||i?void 0:!1,custom:r,presenceAffectsLayout:l,mode:u,root:h,onExitComplete:J?void 0:ge,anchorX:p,children:X},ee)})})},py=k.createContext({strict:!1}),Ih={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Hr={};for(const t in Ih)Hr[t]={isEnabled:r=>Ih[t].some(i=>!!r[i])};function L2(t){for(const r in t)Hr[r]={...Hr[r],...t[r]}}const D2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ko(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||D2.has(t)}let hy=t=>!Ko(t);function O2(t){typeof t=="function"&&(hy=r=>r.startsWith("on")?!Ko(r):t(r))}try{O2(require("@emotion/is-prop-valid").default)}catch{}function M2(t,r,i){const o={};for(const l in t)l==="values"&&typeof t.values=="object"||(hy(l)||i===!0&&Ko(l)||!r&&!Ko(l)||t.draggable&&l.startsWith("onDrag"))&&(o[l]=t[l]);return o}const oa=k.createContext({});function aa(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function es(t){return typeof t=="string"||Array.isArray(t)}const Fc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ic=["initial",...Fc];function la(t){return aa(t.animate)||Ic.some(r=>es(t[r]))}function my(t){return!!(la(t)||t.variants)}function V2(t,r){if(la(t)){const{initial:i,animate:o}=t;return{initial:i===!1||es(i)?i:void 0,animate:es(o)?o:void 0}}return t.inherit!==!1?r:{}}function _2(t){const{initial:r,animate:i}=V2(t,k.useContext(oa));return k.useMemo(()=>({initial:r,animate:i}),[Bh(r),Bh(i)])}function Bh(t){return Array.isArray(t)?t.join(" "):t}const ts={};function z2(t){for(const r in t)ts[r]=t[r],Tc(r)&&(ts[r].isCSSVariable=!0)}function gy(t,{layout:r,layoutId:i}){return Jr.has(t)||t.startsWith("origin")||(r||i!==void 0)&&(!!ts[t]||t==="opacity")}const F2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},I2=Qr.length;function B2(t,r,i){let o="",l=!0;for(let u=0;u<I2;u++){const c=Qr[u],p=t[c];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(c.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||i){const m=oy(p,Mc[c]);if(!h){l=!1;const g=F2[c]||c;o+=`${g}(${m}) `}i&&(r[c]=m)}}return o=o.trim(),i?o=i(r,l?"":o):l&&(o="none"),o}function Bc(t,r,i){const{style:o,vars:l,transformOrigin:u}=t;let c=!1,p=!1;for(const h in r){const m=r[h];if(Jr.has(h)){c=!0;continue}else if(Tc(h)){l[h]=m;continue}else{const g=oy(m,Mc[h]);h.startsWith("origin")?(p=!0,u[h]=g):o[h]=g}}if(r.transform||(c||i?o.transform=B2(r,t.transform,i):o.transform&&(o.transform="none")),p){const{originX:h="50%",originY:m="50%",originZ:g=0}=u;o.transformOrigin=`${h} ${m} ${g}`}}const Uc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function yy(t,r,i){for(const o in r)!et(r[o])&&!gy(o,i)&&(t[o]=r[o])}function U2({transformTemplate:t},r){return k.useMemo(()=>{const i=Uc();return Bc(i,r,t),Object.assign({},i.vars,i.style)},[r])}function $2(t,r){const i=t.style||{},o={};return yy(o,i,t),Object.assign(o,U2(t,r)),o}function q2(t,r){const i={},o=$2(t,r);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=o,i}const H2={offset:"stroke-dashoffset",array:"stroke-dasharray"},W2={offset:"strokeDashoffset",array:"strokeDasharray"};function K2(t,r,i=1,o=0,l=!0){t.pathLength=1;const u=l?H2:W2;t[u.offset]=se.transform(-o);const c=se.transform(r),p=se.transform(i);t[u.array]=`${c} ${p}`}function vy(t,{attrX:r,attrY:i,attrScale:o,pathLength:l,pathSpacing:u=1,pathOffset:c=0,...p},h,m,g){if(Bc(t,p,m),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:w}=t;x.transform&&(w.transform=x.transform,delete x.transform),(w.transform||x.transformOrigin)&&(w.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),w.transform&&(w.transformBox=g?.transformBox??"fill-box",delete x.transformBox),r!==void 0&&(x.x=r),i!==void 0&&(x.y=i),o!==void 0&&(x.scale=o),l!==void 0&&K2(x,l,u,c,!1)}const xy=()=>({...Uc(),attrs:{}}),wy=t=>typeof t=="string"&&t.toLowerCase()==="svg";function G2(t,r,i,o){const l=k.useMemo(()=>{const u=xy();return vy(u,r,wy(o),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[r]);if(t.style){const u={};yy(u,t.style,t),l.style={...u,...l.style}}return l}const Y2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function $c(t){return typeof t!="string"||t.includes("-")?!1:!!(Y2.indexOf(t)>-1||/[A-Z]/u.test(t))}function X2(t,r,i,{latestValues:o},l,u=!1){const p=($c(t)?G2:q2)(r,o,l,t),h=M2(r,typeof t=="string",u),m=t!==k.Fragment?{...h,...p,ref:i}:{},{children:g}=r,x=k.useMemo(()=>et(g)?g.get():g,[g]);return k.createElement(t,{...m,children:x})}function Uh(t){const r=[{},{}];return t?.values.forEach((i,o)=>{r[0][o]=i.get(),r[1][o]=i.getVelocity()}),r}function qc(t,r,i,o){if(typeof r=="function"){const[l,u]=Uh(o);r=r(i!==void 0?i:t.custom,l,u)}if(typeof r=="string"&&(r=t.variants&&t.variants[r]),typeof r=="function"){const[l,u]=Uh(o);r=r(i!==void 0?i:t.custom,l,u)}return r}function _o(t){return et(t)?t.get():t}function Q2({scrapeMotionValuesFromProps:t,createRenderState:r},i,o,l){return{latestValues:J2(i,o,l,t),renderState:r()}}function J2(t,r,i,o){const l={},u=o(t,{});for(const w in u)l[w]=_o(u[w]);let{initial:c,animate:p}=t;const h=la(t),m=my(t);r&&m&&!h&&t.inherit!==!1&&(c===void 0&&(c=r.initial),p===void 0&&(p=r.animate));let g=i?i.initial===!1:!1;g=g||c===!1;const x=g?p:c;if(x&&typeof x!="boolean"&&!aa(x)){const w=Array.isArray(x)?x:[x];for(let b=0;b<w.length;b++){const E=qc(t,w[b]);if(E){const{transitionEnd:T,transition:C,...O}=E;for(const M in O){let V=O[M];if(Array.isArray(V)){const q=g?V.length-1:0;V=V[q]}V!==null&&(l[M]=V)}for(const M in T)l[M]=T[M]}}}return l}const Sy=t=>(r,i)=>{const o=k.useContext(oa),l=k.useContext(sa),u=()=>Q2(t,r,o,l);return i?u():mc(u)};function Hc(t,r,i){const{style:o}=t,l={};for(const u in o)(et(o[u])||r.style&&et(r.style[u])||gy(u,t)||i?.getValue(u)?.liveStyle!==void 0)&&(l[u]=o[u]);return l}const Z2=Sy({scrapeMotionValuesFromProps:Hc,createRenderState:Uc});function Ey(t,r,i){const o=Hc(t,r,i);for(const l in t)if(et(t[l])||et(r[l])){const u=Qr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[u]=t[l]}return o}const eC=Sy({scrapeMotionValuesFromProps:Ey,createRenderState:xy}),tC=Symbol.for("motionComponentSymbol");function Fr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function nC(t,r,i){return k.useCallback(o=>{o&&t.onMount&&t.onMount(o),r&&(o?r.mount(o):r.unmount()),i&&(typeof i=="function"?i(o):Fr(i)&&(i.current=o))},[r])}const Wc=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),rC="framerAppearId",Cy="data-"+Wc(rC),Ty=k.createContext({});function iC(t,r,i,o,l){const{visualElement:u}=k.useContext(oa),c=k.useContext(py),p=k.useContext(sa),h=k.useContext(zc).reducedMotion,m=k.useRef(null);o=o||c.renderer,!m.current&&o&&(m.current=o(t,{visualState:r,parent:u,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:h}));const g=m.current,x=k.useContext(Ty);g&&!g.projection&&l&&(g.type==="html"||g.type==="svg")&&sC(m.current,i,l,x);const w=k.useRef(!1);k.useInsertionEffect(()=>{g&&w.current&&g.update(i,p)});const b=i[Cy],E=k.useRef(!!b&&!window.MotionHandoffIsComplete?.(b)&&window.MotionHasOptimisedAnimation?.(b));return Sg(()=>{g&&(w.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),E.current&&g.animationState&&g.animationState.animateChanges())}),k.useEffect(()=>{g&&(!E.current&&g.animationState&&g.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(b)}),E.current=!1),g.enteringChildren=void 0)}),g}function sC(t,r,i,o){const{layoutId:l,layout:u,drag:c,dragConstraints:p,layoutScroll:h,layoutRoot:m,layoutCrossfade:g}=r;t.projection=new i(t.latestValues,r["data-framer-portal-id"]?void 0:Py(t.parent)),t.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||p&&Fr(p),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,crossfade:g,layoutScroll:h,layoutRoot:m})}function Py(t){if(t)return t.options.allowProjection!==!1?t.projection:Py(t.parent)}function yu(t,{forwardMotionProps:r=!1}={},i,o){i&&L2(i);const l=$c(t)?eC:Z2;function u(p,h){let m;const g={...k.useContext(zc),...p,layoutId:oC(p)},{isStatic:x}=g,w=_2(p),b=l(p,x);if(!x&&gc){aC();const E=lC(g);m=E.MeasureLayout,w.visualElement=iC(t,b,g,o,E.ProjectionNode)}return y.jsxs(oa.Provider,{value:w,children:[m&&w.visualElement?y.jsx(m,{visualElement:w.visualElement,...g}):null,X2(t,p,nC(b,w.visualElement,h),b,x,r)]})}u.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const c=k.forwardRef(u);return c[tC]=t,c}function oC({layoutId:t}){const r=k.useContext(hc).id;return r&&t!==void 0?r+"-"+t:t}function aC(t,r){k.useContext(py).strict}function lC(t){const{drag:r,layout:i}=Hr;if(!r&&!i)return{};const o={...r,...i};return{MeasureLayout:r?.isEnabled(t)||i?.isEnabled(t)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function uC(t,r){if(typeof Proxy>"u")return yu;const i=new Map,o=(u,c)=>yu(u,c,t,r),l=(u,c)=>o(u,c);return new Proxy(l,{get:(u,c)=>c==="create"?o:(i.has(c)||i.set(c,yu(c,void 0,t,r)),i.get(c))})}function ky({top:t,left:r,right:i,bottom:o}){return{x:{min:r,max:i},y:{min:t,max:o}}}function cC({x:t,y:r}){return{top:r.min,right:t.max,bottom:r.max,left:t.min}}function dC(t,r){if(!r)return t;const i=r({x:t.left,y:t.top}),o=r({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function vu(t){return t===void 0||t===1}function Ju({scale:t,scaleX:r,scaleY:i}){return!vu(t)||!vu(r)||!vu(i)}function nr(t){return Ju(t)||by(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function by(t){return $h(t.x)||$h(t.y)}function $h(t){return t&&t!=="0%"}function Go(t,r,i){const o=t-i,l=r*o;return i+l}function qh(t,r,i,o,l){return l!==void 0&&(t=Go(t,l,o)),Go(t,i,o)+r}function Zu(t,r=0,i=1,o,l){t.min=qh(t.min,r,i,o,l),t.max=qh(t.max,r,i,o,l)}function jy(t,{x:r,y:i}){Zu(t.x,r.translate,r.scale,r.originPoint),Zu(t.y,i.translate,i.scale,i.originPoint)}const Hh=.999999999999,Wh=1.0000000000001;function fC(t,r,i,o=!1){const l=i.length;if(!l)return;r.x=r.y=1;let u,c;for(let p=0;p<l;p++){u=i[p],c=u.projectionDelta;const{visualElement:h}=u.options;h&&h.props.style&&h.props.style.display==="contents"||(o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Br(t,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(r.x*=c.x.scale,r.y*=c.y.scale,jy(t,c)),o&&nr(u.latestValues)&&Br(t,u.latestValues))}r.x<Wh&&r.x>Hh&&(r.x=1),r.y<Wh&&r.y>Hh&&(r.y=1)}function Ir(t,r){t.min=t.min+r,t.max=t.max+r}function Kh(t,r,i,o,l=.5){const u=Ne(t.min,t.max,l);Zu(t,r,i,u,o)}function Br(t,r){Kh(t.x,r.x,r.scaleX,r.scale,r.originX),Kh(t.y,r.y,r.scaleY,r.scale,r.originY)}function Ny(t,r){return ky(dC(t.getBoundingClientRect(),r))}function pC(t,r,i){const o=Ny(t,i),{scroll:l}=r;return l&&(Ir(o.x,l.offset.x),Ir(o.y,l.offset.y)),o}const Gh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ur=()=>({x:Gh(),y:Gh()}),Yh=()=>({min:0,max:0}),Me=()=>({x:Yh(),y:Yh()}),ec={current:null},Ry={current:!1};function hC(){if(Ry.current=!0,!!gc)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),r=()=>ec.current=t.matches;t.addEventListener("change",r),r()}else ec.current=!1}const mC=new WeakMap;function gC(t,r,i){for(const o in r){const l=r[o],u=i[o];if(et(l))t.addValue(o,l);else if(et(u))t.addValue(o,qr(l,{owner:t}));else if(u!==l)if(t.hasValue(o)){const c=t.getValue(o);c.liveStyle===!0?c.jump(l):c.hasAnimated||c.set(l)}else{const c=t.getStaticValue(o);t.addValue(o,qr(c!==void 0?c:l,{owner:t}))}}for(const o in i)r[o]===void 0&&t.removeValue(o);return r}const Xh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class yC{scrapeMotionValuesFromProps(r,i,o){return{}}constructor({parent:r,props:i,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:u,visualState:c},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Dc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=ht.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,ke.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=c;this.latestValues=h,this.baseTarget={...h},this.initialValues=i.initial?{...h}:{},this.renderState=m,this.parent=r,this.props=i,this.presenceContext=o,this.depth=r?r.depth+1:0,this.reducedMotionConfig=l,this.options=p,this.blockInitialAnimation=!!u,this.isControllingVariants=la(i),this.isVariantNode=my(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:g,...x}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in x){const b=x[w];h[w]!==void 0&&et(b)&&b.set(h[w])}}mount(r){this.current=r,mC.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),Ry.current||hC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ec.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Vn(this.notifyUpdate),Vn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const i=this.features[r];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,i){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const o=Jr.has(r);o&&this.onBindTransform&&this.onBindTransform();const l=i.on("change",c=>{this.latestValues[r]=c,this.props.onUpdate&&ke.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,r,i)),this.valueSubscriptions.set(r,()=>{l(),u&&u(),i.owner&&i.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in Hr){const i=Hr[r];if(!i)continue;const{isEnabled:o,Feature:l}=i;if(!this.features[r]&&l&&o(this.props)&&(this.features[r]=new l(this)),this.features[r]){const u=this.features[r];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Me()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,i){this.latestValues[r]=i}update(r,i){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<Xh.length;o++){const l=Xh[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,c=r[u];c&&(this.propEventSubscriptions[l]=this.on(l,c))}this.prevMotionValues=gC(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(r),()=>i.variantChildren.delete(r)}addValue(r,i){const o=this.values.get(r);i!==o&&(o&&this.removeValue(r),this.bindToMotionValue(r,i),this.values.set(r,i),this.latestValues[r]=i.get())}removeValue(r){this.values.delete(r);const i=this.valueSubscriptions.get(r);i&&(i(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,i){if(this.props.values&&this.props.values[r])return this.props.values[r];let o=this.values.get(r);return o===void 0&&i!==void 0&&(o=qr(i===null?void 0:i,{owner:this}),this.addValue(r,o)),o}readValue(r,i){let o=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return o!=null&&(typeof o=="string"&&(Eg(o)||Tg(o))?o=parseFloat(o):!k2(o)&&_n.test(i)&&(o=sy(r,i)),this.setBaseTarget(r,et(o)?o.get():o)),et(o)?o.get():o}setBaseTarget(r,i){this.baseTarget[r]=i}getBaseTarget(r){const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const u=qc(this.props,i,this.presenceContext?.custom);u&&(o=u[r])}if(i&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,r);return l!==void 0&&!et(l)?l:this.initialValues[r]!==void 0&&o===void 0?void 0:this.baseTarget[r]}on(r,i){return this.events[r]||(this.events[r]=new Sc),this.events[r].add(i)}notify(r,...i){this.events[r]&&this.events[r].notify(...i)}scheduleRenderMicrotask(){Vc.render(this.render)}}class Ay extends yC{constructor(){super(...arguments),this.KeyframeResolver=h2}sortInstanceNodePosition(r,i){return r.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(r,i){return r.style?r.style[i]:void 0}removeValueFromRenderState(r,{vars:i,style:o}){delete i[r],delete o[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;et(r)&&(this.childSubscription=r.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function Ly(t,{style:r,vars:i},o,l){const u=t.style;let c;for(c in r)u[c]=r[c];l?.applyProjectionStyles(u,o);for(c in i)u.setProperty(c,i[c])}function vC(t){return window.getComputedStyle(t)}class xC extends Ay{constructor(){super(...arguments),this.type="html",this.renderInstance=Ly}readValueFromInstance(r,i){if(Jr.has(i))return this.projection?.isProjecting?Hu(i):DE(r,i);{const o=vC(r),l=(Tc(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(r,{transformPagePoint:i}){return Ny(r,i)}build(r,i,o){Bc(r,i,o.transformTemplate)}scrapeMotionValuesFromProps(r,i,o){return Hc(r,i,o)}}const Dy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function wC(t,r,i,o){Ly(t,r,void 0,o);for(const l in r.attrs)t.setAttribute(Dy.has(l)?l:Wc(l),r.attrs[l])}class SC extends Ay{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Me}getBaseTargetFromProps(r,i){return r[i]}readValueFromInstance(r,i){if(Jr.has(i)){const o=iy(i);return o&&o.default||0}return i=Dy.has(i)?i:Wc(i),r.getAttribute(i)}scrapeMotionValuesFromProps(r,i,o){return Ey(r,i,o)}build(r,i,o){vy(r,i,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(r,i,o,l){wC(r,i,o,l)}mount(r){this.isSVGTag=wy(r.tagName),super.mount(r)}}const EC=(t,r)=>$c(t)?new SC(r):new xC(r,{allowProjection:t!==k.Fragment});function $r(t,r,i){const o=t.getProps();return qc(o,r,i!==void 0?i:o.custom,t)}const tc=t=>Array.isArray(t);function CC(t,r,i){t.hasValue(r)?t.getValue(r).set(i):t.addValue(r,qr(i))}function TC(t){return tc(t)?t[t.length-1]||0:t}function PC(t,r){const i=$r(t,r);let{transitionEnd:o={},transition:l={},...u}=i||{};u={...u,...o};for(const c in u){const p=TC(u[c]);CC(t,c,p)}}function kC(t){return!!(et(t)&&t.add)}function nc(t,r){const i=t.getValue("willChange");if(kC(i))return i.add(r);if(!i&&dn.WillChange){const o=new dn.WillChange("auto");t.addValue("willChange",o),o.add(r)}}function Oy(t){return t.props[Cy]}const bC=t=>t!==null;function jC(t,{repeat:r,repeatType:i="loop"},o){const l=t.filter(bC),u=r&&i!=="loop"&&r%2===1?0:l.length-1;return l[u]}const NC={type:"spring",stiffness:500,damping:25,restSpeed:10},RC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),AC={type:"keyframes",duration:.8},LC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},DC=(t,{keyframes:r})=>r.length>2?AC:Jr.has(t)?t.startsWith("scale")?RC(r[1]):NC:LC;function OC({when:t,delay:r,delayChildren:i,staggerChildren:o,staggerDirection:l,repeat:u,repeatType:c,repeatDelay:p,from:h,elapsed:m,...g}){return!!Object.keys(g).length}const Kc=(t,r,i,o={},l,u)=>c=>{const p=Oc(o,t)||{},h=p.delay||o.delay||0;let{elapsed:m=0}=o;m=m-Xt(h);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-m,onUpdate:w=>{r.set(w),p.onUpdate&&p.onUpdate(w)},onComplete:()=>{c(),p.onComplete&&p.onComplete()},name:t,motionValue:r,element:u?void 0:l};OC(p)||Object.assign(g,DC(t,g)),g.duration&&(g.duration=Xt(g.duration)),g.repeatDelay&&(g.repeatDelay=Xt(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Xu(g),g.delay===0&&(x=!0)),(dn.instantAnimations||dn.skipAnimations)&&(x=!0,Xu(g),g.delay=0),g.allowFlatten=!p.type&&!p.ease,x&&!u&&r.get()!==void 0){const w=jC(g.keyframes,p);if(w!==void 0){ke.update(()=>{g.onUpdate(w),g.onComplete()});return}}return p.isSync?new Lc(g):new n2(g)};function MC({protectedKeys:t,needsAnimating:r},i){const o=t.hasOwnProperty(i)&&r[i]!==!0;return r[i]=!1,o}function My(t,r,{delay:i=0,transitionOverride:o,type:l}={}){let{transition:u=t.getDefaultTransition(),transitionEnd:c,...p}=r;o&&(u=o);const h=[],m=l&&t.animationState&&t.animationState.getState()[l];for(const g in p){const x=t.getValue(g,t.latestValues[g]??null),w=p[g];if(w===void 0||m&&MC(m,g))continue;const b={delay:i,...Oc(u||{},g)},E=x.get();if(E!==void 0&&!x.isAnimating&&!Array.isArray(w)&&w===E&&!b.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const O=Oy(t);if(O){const M=window.MotionHandoffAnimation(O,g,ke);M!==null&&(b.startTime=M,T=!0)}}nc(t,g),x.start(Kc(g,x,w,t.shouldReduceMotion&&ty.has(g)?{type:!1}:b,t,T));const C=x.animation;C&&h.push(C)}return c&&Promise.all(h).then(()=>{ke.update(()=>{c&&PC(t,c)})}),h}function Vy(t,r,i,o=0,l=1){const u=Array.from(t).sort((m,g)=>m.sortNodePosition(g)).indexOf(r),c=t.size,p=(c-1)*o;return typeof i=="function"?i(u,c):l===1?u*o:p-u*o}function rc(t,r,i={}){const o=$r(t,r,i.type==="exit"?t.presenceContext?.custom:void 0);let{transition:l=t.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(l=i.transitionOverride);const u=o?()=>Promise.all(My(t,o,i)):()=>Promise.resolve(),c=t.variantChildren&&t.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:x}=l;return VC(t,r,h,m,g,x,i)}:()=>Promise.resolve(),{when:p}=l;if(p){const[h,m]=p==="beforeChildren"?[u,c]:[c,u];return h().then(()=>m())}else return Promise.all([u(),c(i.delay)])}function VC(t,r,i=0,o=0,l=0,u=1,c){const p=[];for(const h of t.variantChildren)h.notify("AnimationStart",r),p.push(rc(h,r,{...c,delay:i+(typeof o=="function"?0:o)+Vy(t.variantChildren,h,o,l,u)}).then(()=>h.notify("AnimationComplete",r)));return Promise.all(p)}function _C(t,r,i={}){t.notify("AnimationStart",r);let o;if(Array.isArray(r)){const l=r.map(u=>rc(t,u,i));o=Promise.all(l)}else if(typeof r=="string")o=rc(t,r,i);else{const l=typeof r=="function"?$r(t,r,i.custom):r;o=Promise.all(My(t,l,i))}return o.then(()=>{t.notify("AnimationComplete",r)})}function _y(t,r){if(!Array.isArray(r))return!1;const i=r.length;if(i!==t.length)return!1;for(let o=0;o<i;o++)if(r[o]!==t[o])return!1;return!0}const zC=Ic.length;function zy(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?zy(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const r={};for(let i=0;i<zC;i++){const o=Ic[i],l=t.props[o];(es(l)||l===!1)&&(r[o]=l)}return r}const FC=[...Fc].reverse(),IC=Fc.length;function BC(t){return r=>Promise.all(r.map(({animation:i,options:o})=>_C(t,i,o)))}function UC(t){let r=BC(t),i=Qh(),o=!0;const l=h=>(m,g)=>{const x=$r(t,g,h==="exit"?t.presenceContext?.custom:void 0);if(x){const{transition:w,transitionEnd:b,...E}=x;m={...m,...E,...b}}return m};function u(h){r=h(t)}function c(h){const{props:m}=t,g=zy(t.parent)||{},x=[],w=new Set;let b={},E=1/0;for(let C=0;C<IC;C++){const O=FC[C],M=i[O],V=m[O]!==void 0?m[O]:g[O],q=es(V),$=O===h?M.isActive:null;$===!1&&(E=C);let X=V===g[O]&&V!==m[O]&&q;if(X&&o&&t.manuallyAnimateOnMount&&(X=!1),M.protectedKeys={...b},!M.isActive&&$===null||!V&&!M.prevProp||aa(V)||typeof V=="boolean")continue;const ee=$C(M.prevProp,V);let J=ee||O===h&&M.isActive&&!X&&q||C>E&&q,ge=!1;const Se=Array.isArray(V)?V:[V];let Ge=Se.reduce(l(O),{});$===!1&&(Ge={});const{prevResolvedValues:yt={}}=M,tt={...yt,...Ge},at=le=>{J=!0,w.has(le)&&(ge=!0,w.delete(le)),M.needsAnimating[le]=!0;const U=t.getValue(le);U&&(U.liveStyle=!1)};for(const le in tt){const U=Ge[le],te=yt[le];if(b.hasOwnProperty(le))continue;let H=!1;tc(U)&&tc(te)?H=!_y(U,te):H=U!==te,H?U!=null?at(le):w.add(le):U!==void 0&&w.has(le)?at(le):M.protectedKeys[le]=!0}M.prevProp=V,M.prevResolvedValues=Ge,M.isActive&&(b={...b,...Ge}),o&&t.blockInitialAnimation&&(J=!1);const vt=X&&ee;J&&(!vt||ge)&&x.push(...Se.map(le=>{const U={type:O};if(typeof le=="string"&&o&&!vt&&t.manuallyAnimateOnMount&&t.parent){const{parent:te}=t,H=$r(te,le);if(te.enteringChildren&&H){const{delayChildren:N}=H.transition||{};U.delay=Vy(te.enteringChildren,t,N)}}return{animation:le,options:U}}))}if(w.size){const C={};if(typeof m.initial!="boolean"){const O=$r(t,Array.isArray(m.initial)?m.initial[0]:m.initial);O&&O.transition&&(C.transition=O.transition)}w.forEach(O=>{const M=t.getBaseTarget(O),V=t.getValue(O);V&&(V.liveStyle=!0),C[O]=M??null}),x.push({animation:C})}let T=!!x.length;return o&&(m.initial===!1||m.initial===m.animate)&&!t.manuallyAnimateOnMount&&(T=!1),o=!1,T?r(x):Promise.resolve()}function p(h,m){if(i[h].isActive===m)return Promise.resolve();t.variantChildren?.forEach(x=>x.animationState?.setActive(h,m)),i[h].isActive=m;const g=c(h);for(const x in i)i[x].protectedKeys={};return g}return{animateChanges:c,setActive:p,setAnimateFunction:u,getState:()=>i,reset:()=>{i=Qh(),o=!0}}}function $C(t,r){return typeof r=="string"?r!==t:Array.isArray(r)?!_y(r,t):!1}function tr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Qh(){return{animate:tr(!0),whileInView:tr(),whileHover:tr(),whileTap:tr(),whileDrag:tr(),whileFocus:tr(),exit:tr()}}class Bn{constructor(r){this.isMounted=!1,this.node=r}update(){}}class qC extends Bn{constructor(r){super(r),r.animationState||(r.animationState=UC(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();aa(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:i}=this.node.prevProps||{};r!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let HC=0;class WC extends Bn{constructor(){super(...arguments),this.id=HC++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===o)return;const l=this.node.animationState.setActive("exit",!r);i&&!r&&l.then(()=>{i(this.id)})}mount(){const{register:r,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const KC={animation:{Feature:qC},exit:{Feature:WC}};function ns(t,r,i,o={passive:!0}){return t.addEventListener(r,i,o),()=>t.removeEventListener(r,i)}function fs(t){return{point:{x:t.pageX,y:t.pageY}}}const GC=t=>r=>_c(r)&&t(r,fs(r));function Hi(t,r,i,o){return ns(t,r,GC(i),o)}const Fy=1e-4,YC=1-Fy,XC=1+Fy,Iy=.01,QC=0-Iy,JC=0+Iy;function ot(t){return t.max-t.min}function ZC(t,r,i){return Math.abs(t-r)<=i}function Jh(t,r,i,o=.5){t.origin=o,t.originPoint=Ne(r.min,r.max,t.origin),t.scale=ot(i)/ot(r),t.translate=Ne(i.min,i.max,t.origin)-t.originPoint,(t.scale>=YC&&t.scale<=XC||isNaN(t.scale))&&(t.scale=1),(t.translate>=QC&&t.translate<=JC||isNaN(t.translate))&&(t.translate=0)}function Wi(t,r,i,o){Jh(t.x,r.x,i.x,o?o.originX:void 0),Jh(t.y,r.y,i.y,o?o.originY:void 0)}function Zh(t,r,i){t.min=i.min+r.min,t.max=t.min+ot(r)}function eT(t,r,i){Zh(t.x,r.x,i.x),Zh(t.y,r.y,i.y)}function em(t,r,i){t.min=r.min-i.min,t.max=t.min+ot(r)}function Ki(t,r,i){em(t.x,r.x,i.x),em(t.y,r.y,i.y)}function At(t){return[t("x"),t("y")]}const By=({current:t})=>t?t.ownerDocument.defaultView:null,tm=(t,r)=>Math.abs(t-r);function tT(t,r){const i=tm(t.x,r.x),o=tm(t.y,r.y);return Math.sqrt(i**2+o**2)}class Uy{constructor(r,i,{transformPagePoint:o,contextWindow:l=window,dragSnapToOrigin:u=!1,distanceThreshold:c=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=wu(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,E=tT(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!E)return;const{point:T}=w,{timestamp:C}=Ke;this.history.push({...T,timestamp:C});const{onStart:O,onMove:M}=this.handlers;b||(O&&O(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),M&&M(this.lastMoveEvent,w)},this.handlePointerMove=(w,b)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=xu(b,this.transformPagePoint),ke.update(this.updatePoint,!0)},this.handlePointerUp=(w,b)=>{this.end();const{onEnd:E,onSessionEnd:T,resumeAnimation:C}=this.handlers;if(this.dragSnapToOrigin&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=wu(w.type==="pointercancel"?this.lastMoveEventInfo:xu(b,this.transformPagePoint),this.history);this.startEvent&&E&&E(w,O),T&&T(w,O)},!_c(r))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=o,this.distanceThreshold=c,this.contextWindow=l||window;const p=fs(r),h=xu(p,this.transformPagePoint),{point:m}=h,{timestamp:g}=Ke;this.history=[{...m,timestamp:g}];const{onSessionStart:x}=i;x&&x(r,wu(h,this.history)),this.removeListeners=us(Hi(this.contextWindow,"pointermove",this.handlePointerMove),Hi(this.contextWindow,"pointerup",this.handlePointerUp),Hi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),Vn(this.updatePoint)}}function xu(t,r){return r?{point:r(t.point)}:t}function nm(t,r){return{x:t.x-r.x,y:t.y-r.y}}function wu({point:t},r){return{point:t,delta:nm(t,$y(r)),offset:nm(t,nT(r)),velocity:rT(r,.1)}}function nT(t){return t[0]}function $y(t){return t[t.length-1]}function rT(t,r){if(t.length<2)return{x:0,y:0};let i=t.length-1,o=null;const l=$y(t);for(;i>=0&&(o=t[i],!(l.timestamp-o.timestamp>Xt(r)));)i--;if(!o)return{x:0,y:0};const u=Qt(l.timestamp-o.timestamp);if(u===0)return{x:0,y:0};const c={x:(l.x-o.x)/u,y:(l.y-o.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function iT(t,{min:r,max:i},o){return r!==void 0&&t<r?t=o?Ne(r,t,o.min):Math.max(t,r):i!==void 0&&t>i&&(t=o?Ne(i,t,o.max):Math.min(t,i)),t}function rm(t,r,i){return{min:r!==void 0?t.min+r:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function sT(t,{top:r,left:i,bottom:o,right:l}){return{x:rm(t.x,i,l),y:rm(t.y,r,o)}}function im(t,r){let i=r.min-t.min,o=r.max-t.max;return r.max-r.min<t.max-t.min&&([i,o]=[o,i]),{min:i,max:o}}function oT(t,r){return{x:im(t.x,r.x),y:im(t.y,r.y)}}function aT(t,r){let i=.5;const o=ot(t),l=ot(r);return l>o?i=Qi(r.min,r.max-o,t.min):o>l&&(i=Qi(t.min,t.max-l,r.min)),cn(0,1,i)}function lT(t,r){const i={};return r.min!==void 0&&(i.min=r.min-t.min),r.max!==void 0&&(i.max=r.max-t.min),i}const ic=.35;function uT(t=ic){return t===!1?t=0:t===!0&&(t=ic),{x:sm(t,"left","right"),y:sm(t,"top","bottom")}}function sm(t,r,i){return{min:om(t,r),max:om(t,i)}}function om(t,r){return typeof t=="number"?t:t[r]||0}const cT=new WeakMap;class dT{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Me(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:i=!1,distanceThreshold:o}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const u=x=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(fs(x).point)},c=(x,w)=>{const{drag:b,dragPropagation:E,onDragStart:T}=this.getProps();if(b&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=v2(b),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),At(O=>{let M=this.getAxisMotionValue(O).get()||0;if(Jt.test(M)){const{projection:V}=this.visualElement;if(V&&V.layout){const q=V.layout.layoutBox[O];q&&(M=ot(q)*(parseFloat(M)/100))}}this.originPoint[O]=M}),T&&ke.postRender(()=>T(x,w)),nc(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},p=(x,w)=>{this.latestPointerEvent=x,this.latestPanInfo=w;const{dragPropagation:b,dragDirectionLock:E,onDirectionLock:T,onDrag:C}=this.getProps();if(!b&&!this.openDragLock)return;const{offset:O}=w;if(E&&this.currentDirection===null){this.currentDirection=fT(O),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",w.point,O),this.updateAxis("y",w.point,O),this.visualElement.render(),C&&C(x,w)},h=(x,w)=>{this.latestPointerEvent=x,this.latestPanInfo=w,this.stop(x,w),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>At(x=>this.getAnimationState(x)==="paused"&&this.getAxisMotionValue(x).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new Uy(r,{onSessionStart:u,onStart:c,onMove:p,onSessionEnd:h,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:o,contextWindow:By(this.visualElement)})}stop(r,i){const o=r||this.latestPointerEvent,l=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!l||!o)return;const{velocity:c}=l;this.startAnimation(c);const{onDragEnd:p}=this.getProps();p&&ke.postRender(()=>p(o,l))}cancel(){this.isDragging=!1;const{projection:r,animationState:i}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(r,i,o){const{drag:l}=this.getProps();if(!o||!No(r,l,this.currentDirection))return;const u=this.getAxisMotionValue(r);let c=this.originPoint[r]+o[r];this.constraints&&this.constraints[r]&&(c=iT(c,this.constraints[r],this.elastic[r])),u.set(c)}resolveConstraints(){const{dragConstraints:r,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,l=this.constraints;r&&Fr(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&o?this.constraints=sT(o.layoutBox,r):this.constraints=!1,this.elastic=uT(i),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&At(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=lT(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:i}=this.getProps();if(!r||!Fr(r))return!1;const o=r.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=pC(o,l.root,this.visualElement.getTransformPagePoint());let c=oT(l.layout.layoutBox,u);if(i){const p=i(cC(c));this.hasMutatedConstraints=!!p,p&&(c=ky(p))}return c}startAnimation(r){const{drag:i,dragMomentum:o,dragElastic:l,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},m=At(g=>{if(!No(g,i,this.currentDirection))return;let x=h&&h[g]||{};c&&(x={min:0,max:0});const w=l?200:1e6,b=l?40:1e7,E={type:"inertia",velocity:o?r[g]:0,bounceStiffness:w,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,E)});return Promise.all(m).then(p)}startAxisValueAnimation(r,i){const o=this.getAxisMotionValue(r);return nc(this.visualElement,r),o.start(Kc(r,o,0,i,this.visualElement,!1))}stopAnimation(){At(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){At(r=>this.getAxisMotionValue(r).animation?.pause())}getAnimationState(r){return this.getAxisMotionValue(r).animation?.state}getAxisMotionValue(r){const i=`_drag${r.toUpperCase()}`,o=this.visualElement.getProps(),l=o[i];return l||this.visualElement.getValue(r,(o.initial?o.initial[r]:void 0)||0)}snapToCursor(r){At(i=>{const{drag:o}=this.getProps();if(!No(i,o,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(i);if(l&&l.layout){const{min:c,max:p}=l.layout.layoutBox[i];u.set(r[i]-Ne(c,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Fr(i)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};At(c=>{const p=this.getAxisMotionValue(c);if(p&&this.constraints!==!1){const h=p.get();l[c]=aT({min:h,max:h},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),At(c=>{if(!No(c,r,null))return;const p=this.getAxisMotionValue(c),{min:h,max:m}=this.constraints[c];p.set(Ne(h,m,l[c]))})}addListeners(){if(!this.visualElement.current)return;cT.set(this.visualElement,this);const r=this.visualElement.current,i=Hi(r,"pointerdown",h=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(h)}),o=()=>{const{dragConstraints:h}=this.getProps();Fr(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),ke.read(o);const c=ns(window,"resize",()=>this.scalePositionWithinConstraints()),p=l.addEventListener("didUpdate",({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(At(g=>{const x=this.getAxisMotionValue(g);x&&(this.originPoint[g]+=h[g].translate,x.set(x.get()+h[g].translate))}),this.visualElement.render())});return()=>{c(),i(),u(),p&&p()}}getProps(){const r=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:c=ic,dragMomentum:p=!0}=r;return{...r,drag:i,dragDirectionLock:o,dragPropagation:l,dragConstraints:u,dragElastic:c,dragMomentum:p}}}function No(t,r,i){return(r===!0||r===t)&&(i===null||i===t)}function fT(t,r=10){let i=null;return Math.abs(t.y)>r?i="y":Math.abs(t.x)>r&&(i="x"),i}class pT extends Bn{constructor(r){super(r),this.removeGroupControls=Ot,this.removeListeners=Ot,this.controls=new dT(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ot}unmount(){this.removeGroupControls(),this.removeListeners()}}const am=t=>(r,i)=>{t&&ke.postRender(()=>t(r,i))};class hT extends Bn{constructor(){super(...arguments),this.removePointerDownListener=Ot}onPointerDown(r){this.session=new Uy(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:By(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:i,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:am(r),onStart:am(i),onMove:o,onEnd:(u,c)=>{delete this.session,l&&ke.postRender(()=>l(u,c))}}}mount(){this.removePointerDownListener=Hi(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const zo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function lm(t,r){return r.max===r.min?0:t/(r.max-r.min)*100}const Ii={correct:(t,r)=>{if(!r.target)return t;if(typeof t=="string")if(se.test(t))t=parseFloat(t);else return t;const i=lm(t,r.target.x),o=lm(t,r.target.y);return`${i}% ${o}%`}},mT={correct:(t,{treeScale:r,projectionDelta:i})=>{const o=t,l=_n.parse(t);if(l.length>5)return o;const u=_n.createTransformer(t),c=typeof l[0]!="number"?1:0,p=i.x.scale*r.x,h=i.y.scale*r.y;l[0+c]/=p,l[1+c]/=h;const m=Ne(p,h,.5);return typeof l[2+c]=="number"&&(l[2+c]/=m),typeof l[3+c]=="number"&&(l[3+c]/=m),u(l)}};let Su=!1;class gT extends k.Component{componentDidMount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:o,layoutId:l}=this.props,{projection:u}=r;z2(yT),u&&(i.group&&i.group.add(u),o&&o.register&&l&&o.register(u),Su&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),zo.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:i,visualElement:o,drag:l,isPresent:u}=this.props,{projection:c}=o;return c&&(c.isPresent=u,Su=!0,l||r.layoutDependency!==i||i===void 0||r.isPresent!==u?c.willUpdate():this.safeToRemove(),r.isPresent!==u&&(u?c.promote():c.relegate()||ke.postRender(()=>{const p=c.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),Vc.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:l}=r;Su=!0,l&&(l.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function qy(t){const[r,i]=fy(),o=k.useContext(hc);return y.jsx(gT,{...t,layoutGroup:o,switchLayoutGroup:k.useContext(Ty),isPresent:r,safeToRemove:i})}const yT={borderRadius:{...Ii,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ii,borderTopRightRadius:Ii,borderBottomLeftRadius:Ii,borderBottomRightRadius:Ii,boxShadow:mT};function vT(t,r,i){const o=et(t)?t:qr(t);return o.start(Kc("",o,r,i)),o.animation}const xT=(t,r)=>t.depth-r.depth;class wT{constructor(){this.children=[],this.isDirty=!1}add(r){yc(this.children,r),this.isDirty=!0}remove(r){vc(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(xT),this.isDirty=!1,this.children.forEach(r)}}function ST(t,r){const i=ht.now(),o=({timestamp:l})=>{const u=l-i;u>=r&&(Vn(o),t(u-r))};return ke.setup(o,!0),()=>Vn(o)}const Hy=["TopLeft","TopRight","BottomLeft","BottomRight"],ET=Hy.length,um=t=>typeof t=="string"?parseFloat(t):t,cm=t=>typeof t=="number"||se.test(t);function CT(t,r,i,o,l,u){l?(t.opacity=Ne(0,i.opacity??1,TT(o)),t.opacityExit=Ne(r.opacity??1,0,PT(o))):u&&(t.opacity=Ne(r.opacity??1,i.opacity??1,o));for(let c=0;c<ET;c++){const p=`border${Hy[c]}Radius`;let h=dm(r,p),m=dm(i,p);if(h===void 0&&m===void 0)continue;h||(h=0),m||(m=0),h===0||m===0||cm(h)===cm(m)?(t[p]=Math.max(Ne(um(h),um(m),o),0),(Jt.test(m)||Jt.test(h))&&(t[p]+="%")):t[p]=m}(r.rotate||i.rotate)&&(t.rotate=Ne(r.rotate||0,i.rotate||0,o))}function dm(t,r){return t[r]!==void 0?t[r]:t.borderRadius}const TT=Wy(0,.5,Lg),PT=Wy(.5,.95,Ot);function Wy(t,r,i){return o=>o<t?0:o>r?1:i(Qi(t,r,o))}function fm(t,r){t.min=r.min,t.max=r.max}function Rt(t,r){fm(t.x,r.x),fm(t.y,r.y)}function pm(t,r){t.translate=r.translate,t.scale=r.scale,t.originPoint=r.originPoint,t.origin=r.origin}function hm(t,r,i,o,l){return t-=r,t=Go(t,1/i,o),l!==void 0&&(t=Go(t,1/l,o)),t}function kT(t,r=0,i=1,o=.5,l,u=t,c=t){if(Jt.test(r)&&(r=parseFloat(r),r=Ne(c.min,c.max,r/100)-c.min),typeof r!="number")return;let p=Ne(u.min,u.max,o);t===u&&(p-=r),t.min=hm(t.min,r,i,p,l),t.max=hm(t.max,r,i,p,l)}function mm(t,r,[i,o,l],u,c){kT(t,r[i],r[o],r[l],r.scale,u,c)}const bT=["x","scaleX","originX"],jT=["y","scaleY","originY"];function gm(t,r,i,o){mm(t.x,r,bT,i?i.x:void 0,o?o.x:void 0),mm(t.y,r,jT,i?i.y:void 0,o?o.y:void 0)}function ym(t){return t.translate===0&&t.scale===1}function Ky(t){return ym(t.x)&&ym(t.y)}function vm(t,r){return t.min===r.min&&t.max===r.max}function NT(t,r){return vm(t.x,r.x)&&vm(t.y,r.y)}function xm(t,r){return Math.round(t.min)===Math.round(r.min)&&Math.round(t.max)===Math.round(r.max)}function Gy(t,r){return xm(t.x,r.x)&&xm(t.y,r.y)}function wm(t){return ot(t.x)/ot(t.y)}function Sm(t,r){return t.translate===r.translate&&t.scale===r.scale&&t.originPoint===r.originPoint}class RT{constructor(){this.members=[]}add(r){yc(this.members,r),r.scheduleRender()}remove(r){if(vc(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(r){const i=this.members.findIndex(l=>r===l);if(i===0)return!1;let o;for(let l=i;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){o=u;break}}return o?(this.promote(o),!0):!1}promote(r,i){const o=this.lead;if(r!==o&&(this.prevLead=o,this.lead=r,r.show(),o)){o.instance&&o.scheduleRender(),r.scheduleRender(),r.resumeFrom=o,i&&(r.resumeFrom.preserveOpacity=!0),o.snapshot&&(r.snapshot=o.snapshot,r.snapshot.latestValues=o.animationValues||o.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:l}=r.options;l===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:i,resumingFrom:o}=r;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function AT(t,r,i){let o="";const l=t.x.translate/r.x,u=t.y.translate/r.y,c=i?.z||0;if((l||u||c)&&(o=`translate3d(${l}px, ${u}px, ${c}px) `),(r.x!==1||r.y!==1)&&(o+=`scale(${1/r.x}, ${1/r.y}) `),i){const{transformPerspective:m,rotate:g,rotateX:x,rotateY:w,skewX:b,skewY:E}=i;m&&(o=`perspective(${m}px) ${o}`),g&&(o+=`rotate(${g}deg) `),x&&(o+=`rotateX(${x}deg) `),w&&(o+=`rotateY(${w}deg) `),b&&(o+=`skewX(${b}deg) `),E&&(o+=`skewY(${E}deg) `)}const p=t.x.scale*r.x,h=t.y.scale*r.y;return(p!==1||h!==1)&&(o+=`scale(${p}, ${h})`),o||"none"}const Eu=["","X","Y","Z"],LT=1e3;let DT=0;function Cu(t,r,i,o){const{latestValues:l}=r;l[t]&&(i[t]=l[t],r.setStaticValue(t,0),o&&(o[t]=0))}function Yy(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:r}=t.options;if(!r)return;const i=Oy(r);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:l,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",ke,!(l||u))}const{parent:o}=t;o&&!o.hasCheckedOptimisedAppear&&Yy(o)}function Xy({attachResizeListener:t,defaultParent:r,measureScroll:i,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(c={},p=r?.()){this.id=DT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(VT),this.nodes.forEach(IT),this.nodes.forEach(BT),this.nodes.forEach(_T)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new wT)}addEventListener(c,p){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Sc),this.eventHandlers.get(c).add(p)}notifyListeners(c,...p){const h=this.eventHandlers.get(c);h&&h.notify(...p)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=dy(c)&&!T2(c),this.instance=c;const{layoutId:p,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),t){let g,x=0;const w=()=>this.root.updateBlockedByResize=!1;ke.read(()=>{x=window.innerWidth}),t(c,()=>{const b=window.innerWidth;b!==x&&(x=b,this.root.updateBlockedByResize=!0,g&&g(),g=ST(w,250),zo.hasAnimatedSinceResize&&(zo.hasAnimatedSinceResize=!1,this.nodes.forEach(Tm)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:w,layout:b})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||m.getDefaultTransition()||WT,{onLayoutAnimationStart:T,onLayoutAnimationComplete:C}=m.getProps(),O=!this.targetLayout||!Gy(this.targetLayout,b),M=!x&&w;if(this.options.layoutRoot||this.resumeFrom||M||x&&(O||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const V={...Oc(E,"layout"),onPlay:T,onComplete:C};(m.shouldReduceMotion||this.options.layoutRoot)&&(V.delay=0,V.type=!1),this.startAnimation(V),this.setAnimationOrigin(g,M)}else x||Tm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=b})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Vn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(UT),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Yy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Em);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Cm);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(FT),this.nodes.forEach(OT),this.nodes.forEach(MT)):this.nodes.forEach(Cm),this.clearAllSnapshots();const p=ht.now();Ke.delta=cn(0,1e3/60,p-Ke.timestamp),Ke.timestamp=p,Ke.isProcessing=!0,du.update.process(Ke),du.preRender.process(Ke),du.render.process(Ke),Ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Vc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(zT),this.sharedNodes.forEach($T)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ke.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ke.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ot(this.snapshot.measuredBox.x)&&!ot(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(p=!1),p&&this.instance){const h=o(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!l)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Ky(this.projectionDelta),h=this.getTransformTemplate(),m=h?h(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;c&&this.instance&&(p||nr(this.latestValues)||g)&&(l(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return c&&(h=this.removeTransform(h)),KT(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:c}=this.options;if(!c)return Me();const p=c.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(GT))){const{scroll:m}=this.root;m&&(Ir(p.x,m.offset.x),Ir(p.y,m.offset.y))}return p}removeElementScroll(c){const p=Me();if(Rt(p,c),this.scroll?.wasRoot)return p;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:g,options:x}=m;m!==this.root&&g&&x.layoutScroll&&(g.wasRoot&&Rt(p,c),Ir(p.x,g.offset.x),Ir(p.y,g.offset.y))}return p}applyTransform(c,p=!1){const h=Me();Rt(h,c);for(let m=0;m<this.path.length;m++){const g=this.path[m];!p&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Br(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),nr(g.latestValues)&&Br(h,g.latestValues)}return nr(this.latestValues)&&Br(h,this.latestValues),h}removeTransform(c){const p=Me();Rt(p,c);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!m.instance||!nr(m.latestValues))continue;Ju(m.latestValues)&&m.updateSnapshot();const g=Me(),x=m.measurePageBox();Rt(g,x),gm(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return nr(this.latestValues)&&gm(p,this.latestValues),p}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!(!this.layout||!(g||x))){if(this.resolvedRelativeTargetAt=Ke.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),Ki(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),Rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Me(),this.targetWithTransforms=Me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),eT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Rt(this.target,this.layout.layoutBox),jy(this.target,this.targetDelta)):Rt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),Ki(this.relativeTargetOrigin,this.target,w.target),Rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Ju(this.parent.latestValues)||by(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const c=this.getLead(),p=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Ke.timestamp&&(h=!1),h)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;Rt(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,w=this.treeScale.y;fC(this.layoutCorrected,this.treeScale,this.path,p),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Me());const{target:b}=c;if(!b){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pm(this.prevProjectionDelta.x,this.projectionDelta.x),pm(this.prevProjectionDelta.y,this.projectionDelta.y)),Wi(this.projectionDelta,this.layoutCorrected,b,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==w||!Sm(this.projectionDelta.x,this.prevProjectionDelta.x)||!Sm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){if(this.options.visualElement?.scheduleRender(),c){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ur(),this.projectionDelta=Ur(),this.projectionDeltaWithTransform=Ur()}setAnimationOrigin(c,p=!1){const h=this.snapshot,m=h?h.latestValues:{},g={...this.latestValues},x=Ur();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const w=Me(),b=h?h.source:void 0,E=this.layout?this.layout.source:void 0,T=b!==E,C=this.getStack(),O=!C||C.members.length<=1,M=!!(T&&!O&&this.options.crossfade===!0&&!this.path.some(HT));this.animationProgress=0;let V;this.mixTargetDelta=q=>{const $=q/1e3;Pm(x.x,c.x,$),Pm(x.y,c.y,$),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ki(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),qT(this.relativeTarget,this.relativeTargetOrigin,w,$),V&&NT(this.relativeTarget,V)&&(this.isProjectionDirty=!1),V||(V=Me()),Rt(V,this.relativeTarget)),T&&(this.animationValues=g,CT(g,m,this.latestValues,$,M,O)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Vn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ke.update(()=>{zo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=qr(0)),this.currentAnimation=vT(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),c.onUpdate&&c.onUpdate(p)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(LT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:p,target:h,layout:m,latestValues:g}=c;if(!(!p||!h||!m)){if(this!==c&&this.layout&&m&&Qy(this.options.animationType,this.layout.layoutBox,m.layoutBox)){h=this.target||Me();const x=ot(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+x;const w=ot(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+w}Rt(p,h),Br(p,g),Wi(this.projectionDeltaWithTransform,this.layoutCorrected,p,g)}}registerSharedNode(c,p){this.sharedNodes.has(c)||this.sharedNodes.set(c,new RT),this.sharedNodes.get(c).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){const{layoutId:c}=this.options;return c?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:c}=this.options;return c?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:p,preserveFollowOpacity:h}={}){const m=this.getStack();m&&m.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let p=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const m={};h.z&&Cu("z",c,m,this.animationValues);for(let g=0;g<Eu.length;g++)Cu(`rotate${Eu[g]}`,c,m,this.animationValues),Cu(`skew${Eu[g]}`,c,m,this.animationValues);c.render();for(const g in m)c.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);c.scheduleRender()}applyProjectionStyles(c,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=_o(p?.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=_o(p?.pointerEvents)||""),this.hasProjected&&!nr(this.latestValues)&&(c.transform=h?h({},""):"none",this.hasProjected=!1);return}c.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let x=AT(this.projectionDeltaWithTransform,this.treeScale,g);h&&(x=h(g,x)),c.transform=x;const{x:w,y:b}=this.projectionDelta;c.transformOrigin=`${w.origin*100}% ${b.origin*100}% 0`,m.animationValues?c.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:c.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in ts){if(g[E]===void 0)continue;const{correct:T,applyTo:C,isCSSVariable:O}=ts[E],M=x==="none"?g[E]:T(g[E],m);if(C){const V=C.length;for(let q=0;q<V;q++)c[C[q]]=M}else O?this.options.visualElement.renderState.vars[E]=M:c[E]=M}this.options.layoutId&&(c.pointerEvents=m===this?_o(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>c.currentAnimation?.stop()),this.root.nodes.forEach(Em),this.root.sharedNodes.clear()}}}function OT(t){t.updateLayout()}function MT(t){const r=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&r&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=t.layout,{animationType:l}=t.options,u=r.source!==t.layout.source;l==="size"?At(g=>{const x=u?r.measuredBox[g]:r.layoutBox[g],w=ot(x);x.min=i[g].min,x.max=x.min+w}):Qy(l,r.layoutBox,i)&&At(g=>{const x=u?r.measuredBox[g]:r.layoutBox[g],w=ot(i[g]);x.max=x.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[g].max=t.relativeTarget[g].min+w)});const c=Ur();Wi(c,i,r.layoutBox);const p=Ur();u?Wi(p,t.applyTransform(o,!0),r.measuredBox):Wi(p,i,r.layoutBox);const h=!Ky(c);let m=!1;if(!t.resumeFrom){const g=t.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:x,layout:w}=g;if(x&&w){const b=Me();Ki(b,r.layoutBox,x.layoutBox);const E=Me();Ki(E,i,w.layoutBox),Gy(b,E)||(m=!0),g.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=b,t.relativeParent=g)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:r,delta:p,layoutDelta:c,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function VT(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function _T(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function zT(t){t.clearSnapshot()}function Em(t){t.clearMeasurements()}function Cm(t){t.isLayoutDirty=!1}function FT(t){const{visualElement:r}=t.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),t.resetTransform()}function Tm(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function IT(t){t.resolveTargetDelta()}function BT(t){t.calcProjection()}function UT(t){t.resetSkewAndRotation()}function $T(t){t.removeLeadSnapshot()}function Pm(t,r,i){t.translate=Ne(r.translate,0,i),t.scale=Ne(r.scale,1,i),t.origin=r.origin,t.originPoint=r.originPoint}function km(t,r,i,o){t.min=Ne(r.min,i.min,o),t.max=Ne(r.max,i.max,o)}function qT(t,r,i,o){km(t.x,r.x,i.x,o),km(t.y,r.y,i.y,o)}function HT(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const WT={duration:.45,ease:[.4,0,.1,1]},bm=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),jm=bm("applewebkit/")&&!bm("chrome/")?Math.round:Ot;function Nm(t){t.min=jm(t.min),t.max=jm(t.max)}function KT(t){Nm(t.x),Nm(t.y)}function Qy(t,r,i){return t==="position"||t==="preserve-aspect"&&!ZC(wm(r),wm(i),.2)}function GT(t){return t!==t.root&&t.scroll?.wasRoot}const YT=Xy({attachResizeListener:(t,r)=>ns(t,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Tu={current:void 0},Jy=Xy({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Tu.current){const t=new YT({});t.mount(window),t.setOptions({layoutScroll:!0}),Tu.current=t}return Tu.current},resetTransform:(t,r)=>{t.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),XT={pan:{Feature:hT},drag:{Feature:pT,ProjectionNode:Jy,MeasureLayout:qy}};function Rm(t,r,i){const{props:o}=t;t.animationState&&o.whileHover&&t.animationState.setActive("whileHover",i==="Start");const l="onHover"+i,u=o[l];u&&ke.postRender(()=>u(r,fs(r)))}class QT extends Bn{mount(){const{current:r}=this.node;r&&(this.unmount=x2(r,(i,o)=>(Rm(this.node,o,"Start"),l=>Rm(this.node,l,"End"))))}unmount(){}}class JT extends Bn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=us(ns(this.node.current,"focus",()=>this.onFocus()),ns(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Am(t,r,i){const{props:o}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&o.whileTap&&t.animationState.setActive("whileTap",i==="Start");const l="onTap"+(i==="End"?"":i),u=o[l];u&&ke.postRender(()=>u(r,fs(r)))}class ZT extends Bn{mount(){const{current:r}=this.node;r&&(this.unmount=C2(r,(i,o)=>(Am(this.node,o,"Start"),(l,{success:u})=>Am(this.node,l,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const sc=new WeakMap,Pu=new WeakMap,eP=t=>{const r=sc.get(t.target);r&&r(t)},tP=t=>{t.forEach(eP)};function nP({root:t,...r}){const i=t||document;Pu.has(i)||Pu.set(i,{});const o=Pu.get(i),l=JSON.stringify(r);return o[l]||(o[l]=new IntersectionObserver(tP,{root:t,...r})),o[l]}function rP(t,r,i){const o=nP(r);return sc.set(t,i),o.observe(t),()=>{sc.delete(t),o.unobserve(t)}}const iP={some:0,all:1};class sP extends Bn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:i,margin:o,amount:l="some",once:u}=r,c={root:i?i.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:iP[l]},p=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,u&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:x}=this.node.getProps(),w=m?g:x;w&&w(h)};return rP(this.node.current,c,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:i}=this.node;["amount","margin","root"].some(oP(r,i))&&this.startObserver()}unmount(){}}function oP({viewport:t={}},{viewport:r={}}={}){return i=>t[i]!==r[i]}const aP={inView:{Feature:sP},tap:{Feature:ZT},focus:{Feature:JT},hover:{Feature:QT}},lP={layout:{ProjectionNode:Jy,MeasureLayout:qy}},uP={...KC,...aP,...XT,...lP},ne=uC(uP,EC),cP=()=>{const t=dr(),r=rs(),{user:i,isAuthenticated:o,isAdmin:l,logout:u}=ia(),[c,p]=k.useState(!1),[h,m]=k.useState(!1);k.useEffect(()=>{const b=()=>{m(window.innerHeight<500&&window.innerWidth>window.innerHeight)};return b(),window.addEventListener("resize",b),window.addEventListener("orientationchange",b),()=>{window.removeEventListener("resize",b),window.removeEventListener("orientationchange",b)}},[]);const g=[{path:"/",label:"Inicio",icon:"🏠",public:!0},{path:"/equipos",label:"Equipos",icon:"⚽",public:!0},{path:"/partidos",label:"Partidos",icon:"🟢",public:!0},{path:"/posiciones",label:"Posiciones",icon:"🏆",public:!0},{path:"/admin",label:"Admin",icon:"⚙️",adminOnly:!0}],x=async()=>{try{await u(),p(!1),Y.success("👋 Sesión cerrada exitosamente"),r("/")}catch{Y.error("Error al cerrar sesión")}},w=g.filter(b=>b.adminOnly?o()&&l():!0);return y.jsxs(ne.header,{className:`header ${h?"header-landscape":""}`,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[y.jsx("div",{className:"container",children:y.jsxs("nav",{className:"nav",children:[y.jsx(ne.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:y.jsxs(Lt,{to:"/",className:"logo",children:[y.jsx(ne.span,{animate:{textShadow:["0 0 10px #00dd4c","0 0 20px #00dd4c","0 0 10px #00dd4c"]},transition:{duration:2,repeat:1/0,repeatType:"reverse"},children:"⚽"}),y.jsx("span",{className:"logo-text",children:h?"CM14ED":"COPA MARACANÁ 14ED"})]})}),!h&&y.jsx("ul",{className:"nav-links",children:w.map((b,E)=>y.jsx(ne.li,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*E,ease:"easeOut"},children:y.jsx(Lt,{to:b.path,className:`nav-link ${t.pathname===b.path?"active":""}`,children:y.jsxs(ne.div,{className:"nav-item",whileHover:{scale:1.1,textShadow:"0 0 8px #00dd4c"},whileTap:{scale:.95},children:[y.jsx("span",{className:"nav-icon",children:b.icon}),y.jsx("span",{className:"nav-text",children:b.label})]})})},b.path))}),y.jsx("div",{className:"user-section",children:o()?y.jsxs(ne.div,{className:"user-menu-container",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.3},children:[y.jsxs(ne.button,{className:`user-button ${h?"user-button-compact":""}`,onClick:()=>p(!c),whileHover:{scale:1.05},whileTap:{scale:.95},children:[y.jsx("div",{className:"user-avatar",children:i?.role==="admin"?"👑":"👤"}),!h&&y.jsxs("div",{className:"user-info",children:[y.jsx("span",{className:"user-name",children:i?.nombre}),y.jsx("span",{className:"user-role",children:i?.role})]}),y.jsx("span",{className:"dropdown-arrow",children:c?"▲":"▼"})]}),y.jsx(A2,{children:c&&y.jsxs(ne.div,{className:"user-dropdown",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:[y.jsxs("div",{className:"dropdown-header",children:[y.jsx("strong",{children:i?.username}),y.jsx("span",{children:i?.email})]}),y.jsx("div",{className:"dropdown-divider"}),y.jsx("button",{className:"dropdown-item",onClick:x,children:"🚪 Cerrar Sesión"})]})})]}):y.jsxs(ne.div,{className:`auth-buttons ${h?"auth-buttons-compact":""}`,initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3},children:[y.jsx(ne.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:y.jsx(Lt,{to:"/login",className:"btn btn-secondary btn-small",children:h?"Login":"Iniciar Sesión"})}),!h&&y.jsx(ne.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:y.jsx(Lt,{to:"/register",className:"btn btn-small",children:"Registrarse"})})]})})]})}),c&&y.jsx("div",{className:"menu-overlay",onClick:()=>p(!1)}),y.jsx("style",{jsx:!0,children:`
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
      `})]})},dP=()=>{const[t,r]=k.useState(null),[i,o]=k.useState(!0);return k.useEffect(()=>{(async()=>{try{const u=await Dt.getTorneoInfo();r(u)}catch(u){console.error("Error cargando datos:",u)}finally{o(!1)}})()},[]),i?y.jsxs("div",{className:"loading",children:[y.jsx("div",{className:"loading-spinner"}),y.jsx("h2",{children:"Cargando Copa Maracaná 14ED..."})]}):y.jsxs("div",{className:"home-page",children:[y.jsx(ne.section,{className:"hero-section",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:y.jsxs("div",{className:"hero-content glass-card",children:[y.jsx(ne.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.3,type:"spring",stiffness:200},className:"hero-logo",children:y.jsx("div",{className:"logo-container",children:y.jsx(ne.span,{className:"logo-emoji",animate:{rotate:[0,10,-10,0],scale:[1,1.1,.9,1]},transition:{duration:3,repeat:1/0,repeatType:"reverse"},children:"⚽"})})}),y.jsx(ne.h1,{className:"hero-title",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:t?.torneo?.nombre||"Copa Maracaná 14ED"}),y.jsx(ne.p,{className:"hero-subtitle",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},children:t?.torneo?.tipo==="futbol-7"?"El torneo más emocionante de fútbol 7":"Torneo deportivo"}),y.jsxs(ne.div,{className:"hero-info",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.9},children:[y.jsxs("span",{className:"info-item",children:["🏢 ",t?.torneo?.organizador]}),y.jsxs("span",{className:"info-item",children:["🏟️ ",t?.torneo?.complejo,", ",t?.torneo?.ciudad]}),y.jsxs("span",{className:"info-item",children:["📅 ",t?.torneo?.año," - ",t?.torneo?.temporada]})]}),y.jsxs(ne.div,{className:"hero-buttons",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.1},children:[y.jsx(Lt,{to:"/partidos",className:"btn btn-large",children:"🏟️ Ver Partidos"}),y.jsx(Lt,{to:"/posiciones",className:"btn btn-secondary btn-large",children:"🏆 Posiciones"})]})]})}),t?.estadisticas&&y.jsxs(ne.section,{className:"stats-section",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.3},children:[y.jsx("h2",{className:"section-title",children:"Estadísticas del Torneo"}),y.jsxs("div",{className:"grid-container grid-4",children:[y.jsxs(ne.div,{className:"info-card",whileHover:{scale:1.05,rotateY:5},transition:{type:"spring",stiffness:300},children:[y.jsx("div",{className:"icon",children:"⚽"}),y.jsx("h3",{children:t.estadisticas.totalEquipos}),y.jsx("p",{children:"Equipos Participantes"})]}),y.jsxs(ne.div,{className:"info-card",whileHover:{scale:1.05,rotateY:5},transition:{type:"spring",stiffness:300},children:[y.jsx("div",{className:"icon",children:"🏟️"}),y.jsx("h3",{children:t.estadisticas.totalPartidos}),y.jsx("p",{children:"Partidos Programados"})]}),y.jsxs(ne.div,{className:"info-card",whileHover:{scale:1.05,rotateY:5},transition:{type:"spring",stiffness:300},children:[y.jsx("div",{className:"icon",children:"📅"}),y.jsx("h3",{children:t.estadisticas.totalFechas}),y.jsx("p",{children:"Fechas del Torneo"})]}),y.jsxs(ne.div,{className:"info-card",whileHover:{scale:1.05,rotateY:5},transition:{type:"spring",stiffness:300},children:[y.jsx("div",{className:"icon",children:"🏆"}),y.jsx("h3",{children:t.torneo?.grupos?.length||3}),y.jsx("p",{children:"Grupos"})]})]})]}),y.jsxs(ne.section,{className:"quick-links",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:1.5},children:[y.jsx("h2",{className:"section-title",children:"Navegación Rápida"}),y.jsxs("div",{className:"grid-container grid-2",children:[y.jsxs(ne.div,{className:"glass-card quick-link-card",whileHover:{scale:1.03,boxShadow:"0 10px 30px rgba(0, 221, 76, 0.3)"},children:[y.jsx("h3",{children:"⚽ Equipos por Grupo"}),y.jsx("p",{children:"Explora todos los equipos organizados por grupos A, B y C"}),y.jsx(Lt,{to:"/equipos",className:"btn",children:"Ver Equipos"})]}),y.jsxs(ne.div,{className:"glass-card quick-link-card",whileHover:{scale:1.03,boxShadow:"0 10px 30px rgba(0, 102, 204, 0.3)"},children:[y.jsx("h3",{children:"🏟️ Calendario de Partidos"}),y.jsx("p",{children:"Consulta horarios, canchas y resultados de todos los partidos"}),y.jsx(Lt,{to:"/partidos",className:"btn btn-secondary",children:"Ver Calendario"})]}),y.jsxs(ne.div,{className:"glass-card quick-link-card",whileHover:{scale:1.03,boxShadow:"0 10px 30px rgba(255, 193, 7, 0.3)"},children:[y.jsx("h3",{children:"🏆 Tabla de Posiciones"}),y.jsx("p",{children:"Rankings actualizados de todos los grupos del torneo"}),y.jsx(Lt,{to:"/posiciones",className:"btn",style:{backgroundColor:"#ffc107"},children:"Ver Posiciones"})]}),y.jsxs(ne.div,{className:"glass-card quick-link-card",whileHover:{scale:1.03,boxShadow:"0 10px 30px rgba(220, 53, 69, 0.3)"},children:[y.jsx("h3",{children:"⚙️ Panel de Admin"}),y.jsx("p",{children:"Gestiona resultados, equipos y configuración del torneo"}),y.jsx(Lt,{to:"/admin",className:"btn",style:{backgroundColor:"#dc3545",color:"white"},children:"Administrar"})]})]})]})]})},fP="https://cm14-production.up.railway.app";function pP(t=""){return t.split(/\s+/).filter(Boolean).slice(0,2).map(r=>r[0]).join("").toUpperCase()}const ku=({titulo:t,filas:r})=>y.jsxs(ne.div,{className:"grupo-posiciones-card",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},children:[y.jsx("h3",{children:t}),y.jsx("div",{className:"posiciones-table-container",children:y.jsxs("table",{className:"posiciones-table",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{className:"pos-col",children:"#"}),y.jsx("th",{className:"equipo-col",children:"EQUIPO"}),y.jsx("th",{className:"pts-col",children:"PTS"}),y.jsx("th",{className:"num-col",children:"PJ"}),y.jsx("th",{className:"num-col",children:"G"}),y.jsx("th",{className:"num-col",children:"E"}),y.jsx("th",{className:"num-col",children:"P"}),y.jsx("th",{className:"num-col",children:"GF"}),y.jsx("th",{className:"num-col",children:"GC"}),y.jsx("th",{className:"num-col",children:"DG"})]})}),y.jsx("tbody",{children:r.map((i,o)=>y.jsxs(ne.tr,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:o*.1},children:[y.jsx("td",{className:"pos-col posicion",children:i.posicion}),y.jsx("td",{className:"equipo-col",children:y.jsxs("div",{className:"equipo-row",children:[y.jsx("div",{className:"logo-container",children:i.equipo.logo?y.jsx("img",{src:`${fP}${i.equipo.logo}`,alt:i.equipo.nombre,className:"equipo-logo"}):y.jsx("div",{className:"logo-placeholder",children:pP(i.equipo.nombre)})}),y.jsx("span",{className:"equipo-nombre",children:i.equipo.nombre})]})}),y.jsx("td",{className:"pts-col puntos",children:i.puntos}),y.jsx("td",{className:"num-col",children:i.partidosJugados}),y.jsx("td",{className:"num-col",children:i.ganados}),y.jsx("td",{className:"num-col",children:i.empatados}),y.jsx("td",{className:"num-col",children:i.perdidos}),y.jsx("td",{className:"num-col",children:i.golesFavor}),y.jsx("td",{className:"num-col",children:i.golesContra}),y.jsxs("td",{className:"num-col diferencia",children:[i.diferenciaGoles>0?"+":"",i.diferenciaGoles]})]},`${i.equipo.id}-${o}`))})]})})]}),hP=()=>{const[t,r]=k.useState(null),[i,o]=k.useState(!0),[l,u]=k.useState(null),[c,p]=k.useState(new Date),h=async()=>{try{o(!0);const g=await Dt.getPosiciones();r(g.data),p(new Date),u(null)}catch(g){console.error(g),u("No se pudo cargar la tabla de posiciones")}finally{o(!1)}};k.useEffect(()=>{h()},[]);const m=()=>{h()};return i&&!t?y.jsxs("div",{className:"loading",children:[y.jsx("div",{className:"loading-spinner"}),y.jsx("h2",{children:"Cargando posiciones..."})]}):l?y.jsx("div",{className:"error",children:l}):y.jsxs("div",{className:"page",children:[y.jsxs(ne.div,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:[y.jsx("h1",{className:"page-title",style:{margin:0},children:"🏆 Posiciones"}),y.jsx("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:y.jsxs("button",{onClick:m,disabled:i,className:"btn btn-small",style:{display:"flex",alignItems:"center",gap:"0.5rem",opacity:i?.6:1,cursor:i?"not-allowed":"pointer"},children:[y.jsx("span",{style:{display:"inline-block",animation:i?"spin 1s linear infinite":"none"},children:"🔄"}),i?"Actualizando...":"Actualizar"]})})]}),y.jsx(ne.div,{className:"glass-card",style:{padding:"1rem",marginBottom:"2rem",textAlign:"center",background:"rgba(0, 221, 76, 0.1)",border:"1px solid rgba(0, 221, 76, 0.3)"},initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.2},children:y.jsxs("span",{style:{color:"var(--primary-color)",fontWeight:"600"},children:["📊 Última actualización: ",c.toLocaleTimeString()]})}),y.jsxs("div",{className:"grupos-container",children:[y.jsx(ku,{titulo:"🏆 Grupo A",filas:t?.grupoA||[]}),y.jsx(ku,{titulo:"🏆 Grupo B",filas:t?.grupoB||[]}),y.jsx(ku,{titulo:"🏆 Grupo C",filas:t?.grupoC||[]})]}),y.jsx("style",{jsx:!0,children:`
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
      `})]})},mP="https://cm14-production.up.railway.app";function gP(t=""){return t.split(/\s+/).filter(Boolean).slice(0,3).map(r=>r[0]).join("").toUpperCase()}const yP=({estado:t})=>{const r=t==="finalizado"?"estado-badge estado-finalizado":t==="en-curso"?"estado-badge estado-en-curso":"estado-badge estado-programado",i=t==="finalizado"?"Finalizado":t==="en-curso"?"En curso":"Programado";return y.jsx("span",{className:r,children:i})},Yo=({equipo:t,size:r=56})=>{const i=!!t?.logo,o=i?`${mP}${t.logo}`:null;return y.jsx("div",{className:"logo-shell",style:{width:r,height:r},children:i?y.jsx("img",{src:o,alt:t?.nombre||"Equipo",style:{width:"100%",height:"100%",objectFit:"contain"},loading:"lazy"}):y.jsx("span",{className:"logo-initials",children:gP(t?.nombre||"")})})},Fo=({partido:t,index:r})=>{const{equipoLocal:i,equipoVisitante:o,hora:l,cancha:u,estado:c,golesLocal:p,golesVisitante:h,grupo:m}=t,g=c==="finalizado"||c==="en-curso",x=p!==null&&h!==null;return y.jsxs(ne.div,{className:"partido-card partido-card-horizontal",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.02*r},children:[y.jsxs("div",{className:"partido-header",children:[y.jsxs("div",{className:"partido-info-top",children:[y.jsx("span",{className:"partido-hora",children:l||"Por programar"}),y.jsxs("span",{className:"partido-grupo",children:["Grupo ",m]}),y.jsxs("span",{className:"partido-cancha",children:["Cancha ",u||"TBD"]})]}),y.jsx(yP,{estado:c})]}),y.jsxs("div",{className:"partido-enfrentamiento-horizontal",children:[y.jsxs("div",{className:"equipos-logos-row",children:[y.jsx(Yo,{equipo:i,size:40}),y.jsx("div",{className:"resultado-center",children:g&&x?y.jsxs("div",{className:"resultado",children:[y.jsx("span",{className:"goles",children:p}),y.jsx("span",{className:"sep",children:"-"}),y.jsx("span",{className:"goles",children:h})]}):y.jsx("span",{className:"vs-pill",children:"VS"})}),y.jsx(Yo,{equipo:o,size:40})]}),y.jsxs("div",{className:"equipos-nombres-row",children:[y.jsx("span",{className:"equipo-nombre equipo-local",children:i?.nombre}),y.jsx("span",{className:"equipo-nombre equipo-visitante",children:o?.nombre})]})]})]})},Ro=({grupo:t,partidos:r,equiposDescansan:i})=>{const o=r.filter(u=>u.grupo===t),l=i.filter(u=>u.grupo===t);return y.jsxs("div",{className:"grupo-column",children:[y.jsxs("div",{className:"grupo-header",children:[y.jsxs("h3",{children:["Grupo ",t]}),y.jsxs("span",{className:"partidos-count",children:[o.length," partidos"]})]}),y.jsx("div",{className:"partidos-grupo",children:o.map((u,c)=>y.jsx(Fo,{partido:u,index:c},u.id))}),l.length>0&&y.jsxs("div",{className:"equipos-descansan-grupo",children:[y.jsx("h4",{children:"⸻ Descansan"}),y.jsx("div",{className:"equipos-descansan-list",children:l.map(u=>y.jsxs("div",{className:"equipo-descansa-card",children:[y.jsx(Yo,{equipo:u,size:24}),y.jsx("span",{className:"equipo-descansa-nombre",children:u.nombre})]},u.id))})]})]})},vP=({partidosPorCancha:t})=>{const r=["16:00","17:00","18:00","19:00","20:00","21:00","22:00"],i=r.map(l=>{const u=t.NORTE.find(p=>p.hora===l)||null,c=t.SUR.find(p=>p.hora===l)||null;return{horario:l,norte:u,sur:c}}),o=[...t.NORTE.filter(l=>!l.hora||!r.includes(l.hora)),...t.SUR.filter(l=>!l.hora||!r.includes(l.hora))];return y.jsxs("div",{className:"vista-por-cancha",children:[y.jsxs("div",{className:"canchas-headers",children:[y.jsxs("div",{className:"cancha-header-col",children:[y.jsx("h3",{children:"Cancha NORTE"}),y.jsxs("span",{className:"partidos-count",children:[t.NORTE.length," partidos"]})]}),y.jsxs("div",{className:"cancha-header-col",children:[y.jsx("h3",{children:"Cancha SUR"}),y.jsxs("span",{className:"partidos-count",children:[t.SUR.length," partidos"]})]})]}),y.jsx("div",{className:"partidos-sincronizados",children:i.map(({horario:l,norte:u,sur:c})=>y.jsxs("div",{className:"fila-horario",children:[y.jsx("div",{className:"horario-label",children:y.jsx("span",{children:l})}),y.jsxs("div",{className:"partidos-fila",children:[y.jsx("div",{className:"partido-slot",children:u?y.jsx(Fo,{partido:u,index:0}):y.jsx("div",{className:"slot-vacio",children:y.jsx("span",{children:"Sin partido"})})}),y.jsx("div",{className:"partido-slot",children:c?y.jsx(Fo,{partido:c,index:0}):y.jsx("div",{className:"slot-vacio",children:y.jsx("span",{children:"Sin partido"})})})]})]},l))}),o.length>0&&y.jsxs("div",{className:"partidos-sin-horario",children:[y.jsx("h4",{children:"📅 Por programar"}),y.jsx("div",{className:"partidos-sin-horario-grid",children:o.map((l,u)=>y.jsx(Fo,{partido:l,index:u},l.id))})]})]})},xP=()=>{const[t,r]=k.useState([]),[i,o]=k.useState(null),[l,u]=k.useState(null),[c,p]=k.useState(!0),[h,m]=k.useState(null),[g,x]=k.useState("ALL");k.useEffect(()=>{(async()=>{try{const C=(await Dt.getFechas()).data||[];r(C),C.length&&o(C[0].id)}catch{m("No se pudieron cargar las fechas")}})()},[]),k.useEffect(()=>{i&&(async()=>{try{p(!0);const T=await Dt.getPartidosPorFecha(i);u(T.data),m(null)}catch{m("No se pudieron cargar los partidos de la fecha")}finally{p(!1)}})()},[i]);const w=k.useMemo(()=>{if(!l)return{A:[],B:[],C:[]};const T=l.partidos||[];return{A:T.filter(C=>C.grupo==="A"),B:T.filter(C=>C.grupo==="B"),C:T.filter(C=>C.grupo==="C")}},[l]),b=k.useMemo(()=>{if(!l)return{NORTE:[],SUR:[]};const C=[...l.partidos||[]].sort((O,M)=>!O.hora&&!M.hora?0:!O.hora||!M.hora?1:O.hora.localeCompare(M.hora));return{NORTE:C.filter(O=>O.cancha==="NORTE"),SUR:C.filter(O=>O.cancha==="SUR")}},[l]),E=k.useMemo(()=>{if(!l?.equiposDescansan)return{A:[],B:[],C:[]};const T=l.equiposDescansan;return{A:T.filter(C=>C.grupo==="A"),B:T.filter(C=>C.grupo==="B"),C:T.filter(C=>C.grupo==="C")}},[l]);return y.jsxs("div",{className:"page",children:[y.jsx("h1",{className:"page-title",children:"🟢 Partidos"}),y.jsx("div",{className:"glass-card tabs-fechas",children:t.map(T=>{const C=i===T.id;return y.jsxs("button",{className:`btn btn-small ${C?"":"btn-secondary"}`,onClick:()=>o(T.id),"aria-pressed":C,title:`Fecha ${T.numero}${T.fecha?` (${T.fecha})`:""}`,children:[`Fecha ${T.numero}`,C&&T.fecha&&y.jsxs("span",{className:"fecha-real",children:["(",T.fecha,")"]})]},T.id)})}),y.jsx("div",{className:"glass-card tabs-vista",children:[{key:"ALL",label:"Todos los grupos"},{key:"A",label:"Grupo A"},{key:"B",label:"Grupo B"},{key:"C",label:"Grupo C"},{key:"CANCHA",label:"Por Cancha"}].map(({key:T,label:C})=>y.jsx("button",{className:`btn btn-small ${g===T?"":"btn-secondary"}`,onClick:()=>x(T),children:C},T))}),c&&y.jsxs("div",{className:"loading",children:[y.jsx("div",{className:"loading-spinner"}),y.jsx("h2",{children:"Cargando partidos..."})]}),h&&y.jsx("div",{className:"error",children:h}),!c&&!h&&y.jsx("div",{className:`vista-container ${g==="CANCHA"?"vista-cancha":"vista-grupos"}`,children:g==="CANCHA"?y.jsx(vP,{partidosPorCancha:b}):g==="ALL"?y.jsxs(y.Fragment,{children:[y.jsx(Ro,{grupo:"A",partidos:w.A,equiposDescansan:E.A}),y.jsx(Ro,{grupo:"B",partidos:w.B,equiposDescansan:E.B}),y.jsx(Ro,{grupo:"C",partidos:w.C,equiposDescansan:E.C})]}):y.jsx("div",{className:"single-grupo-view",children:y.jsx(Ro,{grupo:g,partidos:w[g],equiposDescansan:E[g]})})}),!c&&!h&&g==="CANCHA"&&l?.equiposDescansan?.length>0&&y.jsxs("div",{className:"equipos-descansan-global",children:[y.jsx("h3",{children:"⸻ Equipos que descansan en esta fecha"}),y.jsx("div",{className:"equipos-descansan-list-global",children:l.equiposDescansan.map(T=>y.jsxs("div",{className:"equipo-descansa-card-global",children:[y.jsx(Yo,{equipo:T,size:32}),y.jsxs("div",{className:"equipo-descansa-info",children:[y.jsx("span",{className:"equipo-descansa-nombre",children:T.nombre}),y.jsxs("span",{className:"equipo-descansa-grupo",children:["Grupo ",T.grupo]})]})]},T.id))})]}),y.jsx("style",{jsx:!0,children:`
        /* Tabs */
        .tabs-fechas, .tabs-vista {
          display: flex; flex-wrap: wrap; gap: .5rem;
          justify-content: center; margin-bottom: .5rem;
        }
        .fecha-real { opacity: .7; margin-left: 6px; }

        /* Container principal */
        .vista-container {
          margin: 1.25rem 0 2rem;
          align-items: start;
        }

        /* Vista por grupos */
        .vista-grupos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* Vista por cancha sincronizada */
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

        /* Partidos sincronizados por horario */
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
          min-height: 120px; /* Reducido para layout horizontal */
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
          min-height: 120px; /* Reducido para layout horizontal */
        }

        /* Partidos sin horario */
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

        /* Vista de un solo grupo */
        .single-grupo-view {
          max-width: 800px;
          margin: 0 auto;
        }

        /* Columna de grupo */
        .grupo-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Columna de cancha */
        .cancha-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Header del grupo/cancha */
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

        /* Contenedor de partidos */
        .partidos-grupo, .partidos-cancha {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* No partidos */
        .no-partidos {
          background: rgba(255,255,255,0.05);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          color: rgba(255,255,255,0.6);
          font-style: italic;
        }

        /* Card de partido - LAYOUT HORIZONTAL */
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
          min-height: 120px; /* Reducido de 180px */
        }

        .partido-card:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 6px 20px rgba(0,0,0,.25); 
        }

        /* Header del partido */
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

        /* NUEVO LAYOUT HORIZONTAL */
        .partido-enfrentamiento-horizontal {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }

        /* Fila de logos horizontal */
        .equipos-logos-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 280px;
        }

        /* Resultado centrado */
        .resultado-center {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 60px;
        }

        /* Fila de nombres */
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

        /* Logos optimizados para layout horizontal */
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

        /* Equipos que descansan por grupo */
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

        /* Equipos que descansan globalmente (vista por cancha) */
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

        /* Responsive mejorado para layout horizontal */
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
      `})]})},wP="https://cm14-production.up.railway.app";function SP(t=""){return t.split(/\s+/).filter(Boolean).slice(0,2).map(r=>r[0]).join("").toUpperCase()}const bu=({titulo:t,filas:r})=>y.jsxs(ne.div,{className:"grupo-posiciones-card",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},children:[y.jsx("h3",{children:t}),y.jsx("div",{className:"posiciones-table-container",children:y.jsxs("table",{className:"posiciones-table",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{className:"pos-col",children:"#"}),y.jsx("th",{className:"equipo-col",children:"EQUIPO"}),y.jsx("th",{className:"pts-col",children:"PTS"}),y.jsx("th",{className:"dg-col",children:"DG"}),y.jsx("th",{className:"num-col",children:"PJ"}),y.jsx("th",{className:"num-col",children:"G"}),y.jsx("th",{className:"num-col",children:"E"}),y.jsx("th",{className:"num-col",children:"P"}),y.jsx("th",{className:"num-col",children:"GF"}),y.jsx("th",{className:"num-col",children:"GC"})]})}),y.jsx("tbody",{children:r.map((i,o)=>y.jsxs(ne.tr,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:o*.1},children:[y.jsx("td",{className:"pos-col posicion",children:i.posicion}),y.jsx("td",{className:"equipo-col",children:y.jsxs("div",{className:"equipo-row",children:[y.jsx("div",{className:"logo-container",children:i.equipo.logo?y.jsx("img",{src:`${wP}${i.equipo.logo}`,alt:i.equipo.nombre,className:"equipo-logo"}):y.jsx("div",{className:"logo-placeholder",children:SP(i.equipo.nombre)})}),y.jsx("span",{className:"equipo-nombre",children:i.equipo.nombre})]})}),y.jsx("td",{className:"pts-col puntos",children:i.puntos}),y.jsxs("td",{className:"dg-col diferencia",children:[i.diferenciaGoles>0?"+":"",i.diferenciaGoles]}),y.jsx("td",{className:"num-col",children:i.partidosJugados}),y.jsx("td",{className:"num-col",children:i.ganados}),y.jsx("td",{className:"num-col",children:i.empatados}),y.jsx("td",{className:"num-col",children:i.perdidos}),y.jsx("td",{className:"num-col",children:i.golesFavor}),y.jsx("td",{className:"num-col",children:i.golesContra})]},`${i.equipo.id}-${o}`))})]})})]}),EP=()=>{const[t,r]=k.useState(null),[i,o]=k.useState(!0),[l,u]=k.useState(null),[c,p]=k.useState(new Date),h=async()=>{try{o(!0);const g=await Dt.getPosiciones();r(g.data),p(new Date),u(null)}catch(g){console.error(g),u("No se pudo cargar la tabla de posiciones")}finally{o(!1)}};k.useEffect(()=>{h()},[]);const m=()=>{h()};return i&&!t?y.jsxs("div",{className:"loading",children:[y.jsx("div",{className:"loading-spinner"}),y.jsx("h2",{children:"Cargando posiciones..."})]}):l?y.jsx("div",{className:"error",children:l}):y.jsxs("div",{className:"page",children:[y.jsxs(ne.div,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:[y.jsx("h1",{className:"page-title",style:{margin:0},children:"🏆 Posiciones"}),y.jsx("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:y.jsxs("button",{onClick:m,disabled:i,className:"btn btn-small",style:{display:"flex",alignItems:"center",gap:"0.5rem",opacity:i?.6:1,cursor:i?"not-allowed":"pointer"},children:[y.jsx("span",{style:{display:"inline-block",animation:i?"spin 1s linear infinite":"none"},children:"🔄"}),i?"Actualizando...":"Actualizar"]})})]}),y.jsx(ne.div,{className:"glass-card",style:{padding:"1rem",marginBottom:"2rem",textAlign:"center",background:"rgba(0, 221, 76, 0.1)",border:"1px solid rgba(0, 221, 76, 0.3)"},initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.2},children:y.jsxs("span",{style:{color:"var(--primary-color)",fontWeight:"600"},children:["📊 Última actualización: ",c.toLocaleTimeString()]})}),y.jsxs("div",{className:"grupos-container",children:[y.jsx(bu,{titulo:"🏆 Grupo A",filas:t?.grupoA||[]}),y.jsx(bu,{titulo:"🏆 Grupo B",filas:t?.grupoB||[]}),y.jsx(bu,{titulo:"🏆 Grupo C",filas:t?.grupoC||[]})]}),y.jsx("style",{jsx:!0,children:`
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
      `})]})},CP=()=>{const[t,r]=k.useState([]),[i,o]=k.useState(null),[l,u]=k.useState([]),[c,p]=k.useState(!0),[h,m]=k.useState(!1),[g,x]=k.useState(null);k.useEffect(()=>{(async()=>{try{const C=(await Dt.getFechas()).data||[];r(C),C.length&&o(C[0].id)}catch(T){console.error(T),x("No se pudieron cargar las fechas")}})()},[]),k.useEffect(()=>{(async()=>{if(i)try{p(!0);const C=(await Dt.getPartidosPorFecha(i)).data?.partidos||[];C.sort((O,M)=>{const V=O.hora?O.hora:"99:99",q=M.hora?M.hora:"99:99";return V.localeCompare(q)}),u(C),x(null)}catch(T){console.error(T),x("No se pudieron cargar los partidos")}finally{p(!1)}})()},[i]);const w=(E,T,C)=>{u(O=>O.map(M=>M.id===E?{...M,[T]:C}:M))},b=async E=>{try{m(!0);const T={hora:E.hora||null,cancha:E.cancha||null,estado:E.estado||"programado",golesLocal:E.golesLocal??null,golesVisitante:E.golesVisitante??null};await Dt.actualizarPartido(E.id,T)}catch(T){console.error(T)}finally{m(!1)}};return y.jsxs("div",{className:"page",children:[y.jsx("h1",{className:"page-title",children:"⚙️ Panel de Administración"}),y.jsx("div",{className:"glass-card",style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",justifyContent:"center"},children:t.map(E=>y.jsxs("button",{className:`btn btn-small ${i===E.id?"":"btn-secondary"}`,onClick:()=>o(E.id),children:[`Fecha ${E.numero}`," ",E.fecha&&y.jsxs("span",{style:{opacity:.7},children:["(",E.fecha,")"]})]},E.id))}),c&&y.jsxs("div",{className:"loading",children:[y.jsx("div",{className:"loading-spinner"}),y.jsx("h2",{children:"Cargando partidos..."})]}),g&&y.jsx("div",{className:"error",children:g}),!c&&!g&&y.jsx("div",{className:"table-container",children:y.jsxs("table",{className:"table",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"ID"}),y.jsx("th",{children:"Grupo"}),y.jsx("th",{children:"Local"}),y.jsx("th",{children:"Visitante"}),y.jsx("th",{children:"Hora"}),y.jsx("th",{children:"Cancha"}),y.jsx("th",{children:"Estado"}),y.jsx("th",{children:"GL"}),y.jsx("th",{children:"GV"}),y.jsx("th",{children:"Acciones"})]})}),y.jsx("tbody",{children:l.map(E=>y.jsxs("tr",{children:[y.jsx("td",{children:E.id}),y.jsx("td",{children:E.grupo}),y.jsx("td",{children:E.equipoLocal?.nombre}),y.jsx("td",{children:E.equipoVisitante?.nombre}),y.jsx("td",{children:y.jsx("input",{type:"time",value:E.hora||"",onChange:T=>w(E.id,"hora",T.target.value),style:{background:"transparent",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:6,padding:"6px 8px"}})}),y.jsx("td",{children:y.jsxs("select",{value:E.cancha||"",onChange:T=>w(E.id,"cancha",T.target.value),style:{background:"transparent",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:6,padding:"6px 8px"},children:[y.jsx("option",{value:"",children:"—"}),y.jsx("option",{value:"NORTE",children:"NORTE"}),y.jsx("option",{value:"SUR",children:"SUR"})]})}),y.jsx("td",{children:y.jsxs("select",{value:E.estado||"programado",onChange:T=>w(E.id,"estado",T.target.value),style:{background:"transparent",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:6,padding:"6px 8px"},children:[y.jsx("option",{value:"programado",children:"programado"}),y.jsx("option",{value:"en-curso",children:"en-curso"}),y.jsx("option",{value:"finalizado",children:"finalizado"})]})}),y.jsx("td",{children:y.jsx("input",{type:"number",min:"0",value:E.golesLocal??"",onChange:T=>w(E.id,"golesLocal",T.target.value===""?null:parseInt(T.target.value)),style:{width:70,background:"transparent",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:6,padding:"6px 8px"}})}),y.jsx("td",{children:y.jsx("input",{type:"number",min:"0",value:E.golesVisitante??"",onChange:T=>w(E.id,"golesVisitante",T.target.value===""?null:parseInt(T.target.value)),style:{width:70,background:"transparent",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:6,padding:"6px 8px"}})}),y.jsx("td",{children:y.jsx("button",{className:"btn btn-small",onClick:()=>b(E),children:"Guardar"})})]},E.id))})]})})]})},TP=()=>{const[t,r]=k.useState({username:"",password:""}),[i,o]=k.useState(!1),{login:l}=ia(),u=rs(),c=h=>{r({...t,[h.target.name]:h.target.value})},p=async h=>{if(h.preventDefault(),!t.username||!t.password){Y.error("Por favor completa todos los campos");return}o(!0);try{const m=await l(t);m.success?(Y.success(`¡Bienvenido ${m.user.nombre}!`),u("/")):Y.error(m.message)}catch{Y.error("Error de conexión")}finally{o(!1)}};return y.jsxs("div",{className:"auth-page",children:[y.jsx("div",{className:"auth-container",children:y.jsxs(ne.div,{className:"auth-card",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6},children:[y.jsxs("div",{className:"auth-header",children:[y.jsx(ne.div,{className:"auth-logo",initial:{scale:0},animate:{scale:1},transition:{delay:.3,type:"spring",stiffness:200},children:"⚽"}),y.jsx("h1",{children:"Copa Maracaná 14ED"}),y.jsx("p",{children:"Inicia sesión para continuar"})]}),y.jsxs("form",{className:"auth-form",onSubmit:p,children:[y.jsxs(ne.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.4},children:[y.jsx("label",{htmlFor:"username",children:"Usuario o Email"}),y.jsx("input",{type:"text",id:"username",name:"username",value:t.username,onChange:c,placeholder:"Ingresa tu usuario o email",required:!0})]}),y.jsxs(ne.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5},children:[y.jsx("label",{htmlFor:"password",children:"Contraseña"}),y.jsx("input",{type:"password",id:"password",name:"password",value:t.password,onChange:c,placeholder:"Ingresa tu contraseña",required:!0})]}),y.jsx(ne.button,{type:"submit",className:"auth-button",disabled:i,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},whileHover:{scale:1.02},whileTap:{scale:.98},children:i?y.jsxs("span",{className:"loading-text",children:[y.jsx("span",{className:"spinner"}),"Iniciando sesión..."]}):"Iniciar Sesión"})]}),y.jsx(ne.div,{className:"auth-footer",initial:{opacity:0},animate:{opacity:1},transition:{delay:.7},children:y.jsxs("p",{children:["¿No tienes cuenta?"," ",y.jsx(Lt,{to:"/register",className:"auth-link",children:"Regístrate aquí"})]})})]})}),y.jsx("style",{jsx:!0,children:`
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
      `})]})},PP=()=>{const[t,r]=k.useState({username:"",email:"",password:"",confirmPassword:"",nombre:""}),[i,o]=k.useState(!1),{register:l}=ia(),u=rs(),c=m=>{r({...t,[m.target.name]:m.target.value})},p=()=>{const{username:m,email:g,password:x,confirmPassword:w,nombre:b}=t;return!m||!g||!x||!w||!b?(Y.error("Por favor completa todos los campos"),!1):m.length<3?(Y.error("El usuario debe tener al menos 3 caracteres"),!1):g.includes("@")?x.length<6?(Y.error("La contraseña debe tener al menos 6 caracteres"),!1):x!==w?(Y.error("Las contraseñas no coinciden"),!1):!0:(Y.error("Por favor ingresa un email válido"),!1)},h=async m=>{if(m.preventDefault(),!!p()){o(!0);try{const{confirmPassword:g,...x}=t,w=await l(x);w.success?(Y.success("¡Cuenta creada exitosamente! Ahora puedes iniciar sesión"),u("/login")):Y.error(w.message)}catch{Y.error("Error de conexión")}finally{o(!1)}}};return y.jsxs("div",{className:"auth-page",children:[y.jsx("div",{className:"auth-container",children:y.jsxs(ne.div,{className:"auth-card",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6},children:[y.jsxs("div",{className:"auth-header",children:[y.jsx(ne.div,{className:"auth-logo",initial:{scale:0},animate:{scale:1},transition:{delay:.3,type:"spring",stiffness:200},children:"⚽"}),y.jsx("h1",{children:"Crear Cuenta"}),y.jsx("p",{children:"Únete a Copa Maracaná 14ED"})]}),y.jsxs("form",{className:"auth-form",onSubmit:h,children:[y.jsxs(ne.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.4},children:[y.jsx("label",{htmlFor:"nombre",children:"Nombre Completo"}),y.jsx("input",{type:"text",id:"nombre",name:"nombre",value:t.nombre,onChange:c,placeholder:"Tu nombre completo",required:!0})]}),y.jsxs(ne.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5},children:[y.jsx("label",{htmlFor:"username",children:"Usuario"}),y.jsx("input",{type:"text",id:"username",name:"username",value:t.username,onChange:c,placeholder:"Elige un nombre de usuario",required:!0,minLength:3})]}),y.jsxs(ne.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.6},children:[y.jsx("label",{htmlFor:"email",children:"Email"}),y.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:c,placeholder:"tu@email.com",required:!0})]}),y.jsxs(ne.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.7},children:[y.jsx("label",{htmlFor:"password",children:"Contraseña"}),y.jsx("input",{type:"password",id:"password",name:"password",value:t.password,onChange:c,placeholder:"Mínimo 6 caracteres",required:!0,minLength:6})]}),y.jsxs(ne.div,{className:"form-group",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.8},children:[y.jsx("label",{htmlFor:"confirmPassword",children:"Confirmar Contraseña"}),y.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:t.confirmPassword,onChange:c,placeholder:"Repite tu contraseña",required:!0})]}),y.jsx(ne.button,{type:"submit",className:"auth-button",disabled:i,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.9},whileHover:{scale:1.02},whileTap:{scale:.98},children:i?y.jsxs("span",{className:"loading-text",children:[y.jsx("span",{className:"spinner"}),"Creando cuenta..."]}):"Crear Cuenta"})]}),y.jsx(ne.div,{className:"auth-footer",initial:{opacity:0},animate:{opacity:1},transition:{delay:1},children:y.jsxs("p",{children:["¿Ya tienes cuenta?"," ",y.jsx(Lt,{to:"/login",className:"auth-link",children:"Inicia sesión aquí"})]})}),y.jsxs(ne.div,{className:"role-info",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.1},children:[y.jsx("h4",{children:"ℹ️ Información de cuenta"}),y.jsxs("div",{className:"info-list",children:[y.jsxs("div",{className:"info-item",children:["📖 ",y.jsx("strong",{children:"Rol inicial:"})," Viewer (solo lectura)"]}),y.jsxs("div",{className:"info-item",children:["👑 ",y.jsx("strong",{children:"Para ser Admin:"})," Contacta al organizador"]}),y.jsxs("div",{className:"info-item",children:["🔒 ",y.jsx("strong",{children:"Datos seguros:"})," Tu información está protegida"]})]})]})]})}),y.jsx("style",{jsx:!0,children:`
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
      `})]})};function kP(){return y.jsx(NS,{children:y.jsx(i1,{children:y.jsxs("div",{className:"App",children:[y.jsx(cP,{}),y.jsx("main",{className:"main-content",children:y.jsx("div",{className:"container",children:y.jsxs(Qx,{children:[y.jsx(An,{path:"/",element:y.jsx(dP,{})}),y.jsx(An,{path:"/equipos",element:y.jsx(hP,{})}),y.jsx(An,{path:"/partidos",element:y.jsx(xP,{})}),y.jsx(An,{path:"/posiciones",element:y.jsx(EP,{})}),y.jsx(An,{path:"/login",element:y.jsx(TP,{})}),y.jsx(An,{path:"/register",element:y.jsx(PP,{})}),y.jsx(An,{path:"/admin",element:y.jsx(RS,{requireAdmin:!0,children:y.jsx(CP,{})})})]})})}),y.jsx(Q1,{position:"top-right",toastOptions:{duration:4e3,style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",color:"#f0f0f0",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"12px",fontSize:"0.9rem",fontWeight:"500"},success:{iconTheme:{primary:"#00dd4c",secondary:"#fff"},style:{border:"1px solid rgba(0, 221, 76, 0.3)",background:"rgba(0, 221, 76, 0.1)"}},error:{iconTheme:{primary:"#dc3545",secondary:"#fff"},style:{border:"1px solid rgba(220, 53, 69, 0.3)",background:"rgba(220, 53, 69, 0.1)"}},loading:{iconTheme:{primary:"#0066cc",secondary:"#fff"},style:{border:"1px solid rgba(0, 102, 204, 0.3)",background:"rgba(0, 102, 204, 0.1)"}}}})]})})})}sx.createRoot(document.getElementById("root")).render(y.jsx(Dm.StrictMode,{children:y.jsx(kP,{})}));
