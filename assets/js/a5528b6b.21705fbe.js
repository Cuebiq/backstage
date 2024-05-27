/*! For license information please see a5528b6b.21705fbe.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[438633],{94411:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>u,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var n=t(824246),o=t(511151);const c={id:"plugin-scaffolder-react.scaffolderrjsffieldprops.onfocus",title:"ScaffolderRJSFFieldProps.onFocus",description:"API reference for ScaffolderRJSFFieldProps.onFocus"},u=void 0,s={id:"reference/plugin-scaffolder-react.scaffolderrjsffieldprops.onfocus",title:"ScaffolderRJSFFieldProps.onFocus",description:"API reference for ScaffolderRJSFFieldProps.onFocus",source:"@site/../docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.onfocus.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.onfocus",permalink:"/docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.onfocus",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.onfocus.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-react.scaffolderrjsffieldprops.onfocus",title:"ScaffolderRJSFFieldProps.onFocus",description:"API reference for ScaffolderRJSFFieldProps.onFocus"}},f={},a=[];function i(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops",children:(0,n.jsx)(r.code,{children:"ScaffolderRJSFFieldProps"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.onfocus",children:(0,n.jsx)(r.code,{children:"onFocus"})})]}),"\n",(0,n.jsx)(r.p,{children:"The input focus event handler; call it with the field id and value"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"onFocus: (id: string, value: any) => void;\n"})})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,c={},a=null,i=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(i=r.ref),r)u.call(r,n)&&!f.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:s.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),f=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function v(){}function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=_.prototype;var S=b.prototype=new v;S.constructor=b,h(S,_.prototype),S.isPureReactComponent=!0;var g=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var o,c={},u=null,s=null;if(null!=r)for(o in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(u=""+r.key),r)j.call(r,o)&&!x.hasOwnProperty(o)&&(c[o]=r[o]);var f=arguments.length-2;if(1===f)c.children=n;else if(1<f){for(var a=Array(f),i=0;i<f;i++)a[i]=arguments[i+2];c.children=a}if(e&&e.defaultProps)for(o in f=e.defaultProps)void 0===c[o]&&(c[o]=f[o]);return{$$typeof:t,type:e,key:u,ref:s,props:c,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function F(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,o,c,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var f=!1;if(null===e)f=!0;else switch(s){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case t:case n:f=!0}}if(f)return u=u(f=e),e=""===c?"."+F(f,0):c,g(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),P(u,r,o,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||f&&f.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),r.push(u)),1;if(f=0,c=""===c?".":c+":",g(e))for(var a=0;a<e.length;a++){var i=c+F(s=e[a],a);f+=P(s,r,o,i,u)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),a=0;!(s=e.next()).done;)f+=P(s=s.value,r,o,i=c+F(s,a++),u);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return f}function C(e,r,t){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=u,r.PureComponent=b,r.StrictMode=c,r.Suspense=i,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,u=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,s=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(a in r)j.call(r,a)&&!x.hasOwnProperty(a)&&(o[a]=void 0===r[a]&&void 0!==f?f[a]:r[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){f=Array(a);for(var i=0;i<a;i++)f[i]=arguments[i+2];o.children=f}return{$$typeof:t,type:e.type,key:c,ref:u,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return O.current.useCallback(e,r)},r.useContext=function(e){return O.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return O.current.useDeferredValue(e)},r.useEffect=function(e,r){return O.current.useEffect(e,r)},r.useId=function(){return O.current.useId()},r.useImperativeHandle=function(e,r,t){return O.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return O.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return O.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return O.current.useMemo(e,r)},r.useReducer=function(e,r,t){return O.current.useReducer(e,r,t)},r.useRef=function(e){return O.current.useRef(e)},r.useState=function(e){return O.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return O.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return O.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>u});var n=t(667294);const o={},c=n.createContext(o);function u(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);