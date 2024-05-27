/*! For license information please see 8bef3543.1842458f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[350013],{720716:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>u,metadata:()=>a,toc:()=>i});var n=t(824246),o=t(511151);const u={id:"plugin-search-common.searchquery.term",title:"SearchQuery.term",description:"API reference for SearchQuery.term"},c=void 0,a={id:"reference/plugin-search-common.searchquery.term",title:"SearchQuery.term",description:"API reference for SearchQuery.term",source:"@site/../docs/reference/plugin-search-common.searchquery.term.md",sourceDirName:"reference",slug:"/reference/plugin-search-common.searchquery.term",permalink:"/docs/reference/plugin-search-common.searchquery.term",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-common.searchquery.term.md",tags:[],version:"current",frontMatter:{id:"plugin-search-common.searchquery.term",title:"SearchQuery.term",description:"API reference for SearchQuery.term"}},s={},i=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-common",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-search-common"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-common.searchquery",children:(0,n.jsx)(r.code,{children:"SearchQuery"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-common.searchquery.term",children:(0,n.jsx)(r.code,{children:"term"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"term: string;\n"})})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,u={},i=null,f=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:f,props:u,_owner:a.current}}r.Fragment=u,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function _(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function v(){}function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=_.prototype;var S=b.prototype=new v;S.constructor=b,m(S,_.prototype),S.isPureReactComponent=!0;var g=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var o,u={},c=null,a=null;if(null!=r)for(o in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(c=""+r.key),r)k.call(r,o)&&!x.hasOwnProperty(o)&&(u[o]=r[o]);var s=arguments.length-2;if(1===s)u.children=n;else if(1<s){for(var i=Array(s),f=0;f<s;f++)i[f]=arguments[f+2];u.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===u[o]&&(u[o]=s[o]);return{$$typeof:t,type:e,key:c,ref:a,props:u,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,o,u,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case n:s=!0}}if(s)return c=c(s=e),e=""===u?"."+C(s,0):u,g(c)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(c,r,o,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),r.push(c)),1;if(s=0,u=""===u?".":u+":",g(e))for(var i=0;i<e.length;i++){var f=u+C(a=e[i],i);s+=$(a,r,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(a=e.next()).done;)s+=$(a=a.value,r,o,f=u+C(a,i++),c);else if("object"===a)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function O(e,r,t){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},q={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:q,ReactCurrentOwner:j};r.Children={map:O,forEach:function(e,r,t){O(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return O(e,(function(){r++})),r},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=c,r.PureComponent=b,r.StrictMode=u,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),u=e.key,c=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,a=j.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in r)k.call(r,i)&&!x.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==s?s[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){s=Array(i);for(var f=0;f<i;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:t,type:e.type,key:u,ref:c,props:o,_owner:a}},r.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=q.transition;q.transition={};try{e()}finally{q.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,t){return I.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,t){return I.current.useReducer(e,r,t)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return I.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return I.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>c});var n=t(667294);const o={},u=n.createContext(o);function c(e){const r=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(u.Provider,{value:r},e.children)}}}]);