/*! For license information please see 830600dd.73ccb7f5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[951167],{559151:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var n=t(824246),o=t(511151);const u={id:"core-app-api.apiprovider",title:"ApiProvider",description:"API reference for ApiProvider"},i=void 0,c={id:"reference/core-app-api.apiprovider",title:"ApiProvider",description:"API reference for ApiProvider",source:"@site/../docs/reference/core-app-api.apiprovider.md",sourceDirName:"reference",slug:"/reference/core-app-api.apiprovider",permalink:"/docs/reference/core-app-api.apiprovider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.apiprovider.md",tags:[],version:"current",frontMatter:{id:"core-app-api.apiprovider",title:"ApiProvider",description:"API reference for ApiProvider"}},a={},s=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.apiprovider",children:(0,n.jsx)(r.code,{children:"ApiProvider"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Provides an ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.apiholder",children:"ApiHolder"})," for consumption in the React tree."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"ApiProvider: {\n    (props: PropsWithChildren<ApiProviderProps>): React.JSX.Element;\n    propTypes: {\n        apis: PropTypes.Validator<NonNullable<PropTypes.InferProps<{\n            get: PropTypes.Validator<(...args: any[]) => any>;\n        }>>>;\n        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;\n    };\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,u={},s=null,f=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:f,props:u,_owner:c.current}}r.Fragment=u,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),l=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function m(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}function _(){}function b(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var S=b.prototype=new _;S.constructor=b,h(S,m.prototype),S.isPureReactComponent=!0;var P=Array.isArray,g=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,n){var o,u={},i=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)g.call(r,o)&&!j.hasOwnProperty(o)&&(u[o]=r[o]);var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];u.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:t,type:e,key:i,ref:c,props:u,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,u,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return i=i(a=e),e=""===u?"."+w(a,0):u,P(i)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),C(i,r,o,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),r.push(i)),1;if(a=0,u=""===u?".":u+":",P(e))for(var s=0;s<e.length;s++){var f=u+w(c=e[s],s);a+=C(c,r,o,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(c=e.next()).done;)a+=C(c=c.value,r,o,f=u+w(c,s++),i);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},I={transition:null},T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=m,r.Fragment=o,r.Profiler=i,r.PureComponent=b,r.StrictMode=u,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,c=k.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in r)g.call(r,s)&&!j.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==a?a[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:t,type:e.type,key:u,ref:i,props:o,_owner:c}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:p,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return A.current.useCallback(e,r)},r.useContext=function(e){return A.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return A.current.useDeferredValue(e)},r.useEffect=function(e,r){return A.current.useEffect(e,r)},r.useId=function(){return A.current.useId()},r.useImperativeHandle=function(e,r,t){return A.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return A.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return A.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return A.current.useMemo(e,r)},r.useReducer=function(e,r,t){return A.current.useReducer(e,r,t)},r.useRef=function(e){return A.current.useRef(e)},r.useState=function(e){return A.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return A.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return A.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>i});var n=t(667294);const o={},u=n.createContext(o);function i(e){const r=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(u.Provider,{value:r},e.children)}}}]);