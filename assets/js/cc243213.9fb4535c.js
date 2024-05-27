/*! For license information please see cc243213.9fb4535c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[96754],{429789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var r=n(824246),o=n(511151);const u={id:"plugin-auth-node.authownershipresolutionextensionpoint",title:"authOwnershipResolutionExtensionPoint",description:"API reference for authOwnershipResolutionExtensionPoint"},i=void 0,s={id:"reference/plugin-auth-node.authownershipresolutionextensionpoint",title:"authOwnershipResolutionExtensionPoint",description:"API reference for authOwnershipResolutionExtensionPoint",source:"@site/../docs/reference/plugin-auth-node.authownershipresolutionextensionpoint.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.authownershipresolutionextensionpoint",permalink:"/docs/reference/plugin-auth-node.authownershipresolutionextensionpoint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-node.authownershipresolutionextensionpoint.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.authownershipresolutionextensionpoint",title:"authOwnershipResolutionExtensionPoint",description:"API reference for authOwnershipResolutionExtensionPoint"}},a={},c=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-auth-node",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-auth-node.authownershipresolutionextensionpoint",children:(0,r.jsx)(t.code,{children:"authOwnershipResolutionExtensionPoint"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'authOwnershipResolutionExtensionPoint: import("@backstage/backend-plugin-api").ExtensionPoint<AuthOwnershipResolutionExtensionPoint>\n'})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,u={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:u,_owner:s.current}}t.Fragment=u,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function _(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var x=v.prototype=new b;x.constructor=v,y(x,_.prototype),x.isPureReactComponent=!0;var w=Array.isArray,g=Object.prototype.hasOwnProperty,E={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var o,u={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)g.call(t,o)&&!S.hasOwnProperty(o)&&(u[o]=t[o]);var a=arguments.length-2;if(1===a)u.children=r;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];u.children=c}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:n,type:e,key:i,ref:s,props:u,_owner:E.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,u,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case n:case r:a=!0}}if(a)return i=i(a=e),e=""===u?"."+P(a,0):u,w(i)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),O(i,t,o,"",(function(e){return e}))):null!=i&&(R(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(a=0,u=""===u?".":u+":",w(e))for(var c=0;c<e.length;c++){var l=u+P(s=e[c],c);a+=O(s,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(s=e.next()).done;)a+=O(s=s.value,t,o,l=u+P(s,c++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function C(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},A={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:A,ReactCurrentOwner:E};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=o,t.Profiler=i,t.PureComponent=v,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),u=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=E.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)g.call(t,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==a?a[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:n,type:e.type,key:u,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(667294);const o={},u=r.createContext(o);function i(e){const t=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(u.Provider,{value:t},e.children)}}}]);