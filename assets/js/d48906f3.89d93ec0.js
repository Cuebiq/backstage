/*! For license information please see d48906f3.89d93ec0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[984653],{299603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var o=r(824246),n=r(511151);const c={id:"plugin-catalog-node.catalogprocessorresult",title:"CatalogProcessorResult",description:"API reference for CatalogProcessorResult"},s=void 0,a={id:"reference/plugin-catalog-node.catalogprocessorresult",title:"CatalogProcessorResult",description:"API reference for CatalogProcessorResult",source:"@site/../docs/reference/plugin-catalog-node.catalogprocessorresult.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-node.catalogprocessorresult",permalink:"/docs/reference/plugin-catalog-node.catalogprocessorresult",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-node.catalogprocessorresult.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-node.catalogprocessorresult",title:"CatalogProcessorResult",description:"API reference for CatalogProcessorResult"}},u={},l=[];function i(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node",children:(0,o.jsx)(t.code,{children:"@backstage/plugin-catalog-node"})})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorresult",children:(0,o.jsx)(t.code,{children:"CatalogProcessorResult"})})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"export type CatalogProcessorResult = CatalogProcessorLocationResult | CatalogProcessorEntityResult | CatalogProcessorRelationResult | CatalogProcessorErrorResult | CatalogProcessorRefreshKeysResult;\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"References:"})," ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorlocationresult",children:"CatalogProcessorLocationResult"}),", ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorentityresult",children:"CatalogProcessorEntityResult"}),", ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorrelationresult",children:"CatalogProcessorRelationResult"}),", ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorerrorresult",children:"CatalogProcessorErrorResult"}),", ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorrefreshkeysresult",children:"CatalogProcessorRefreshKeysResult"})]})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},371426:(e,t,r)=>{var o=r(827378),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var o,c={},l=null,i=null;for(o in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(i=t.ref),t)s.call(t,o)&&!u.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:n,type:e,key:l,ref:i,props:c,_owner:a.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function _(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var b=v.prototype=new _;b.constructor=v,g(b,m.prototype),b.isPureReactComponent=!0;var R=Array.isArray,C=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,o){var n,c={},s=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)C.call(t,n)&&!x.hasOwnProperty(n)&&(c[n]=t[n]);var u=arguments.length-2;if(1===u)c.children=o;else if(1<u){for(var l=Array(u),i=0;i<u;i++)l[i]=arguments[i+2];c.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===c[n]&&(c[n]=u[n]);return{$$typeof:r,type:e,key:s,ref:a,props:c,_owner:j.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var k=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function w(e,t,n,c,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case o:u=!0}}if(u)return s=s(u=e),e=""===c?"."+E(u,0):c,R(s)?(n="",null!=e&&(n=e.replace(k,"$&/")+"/"),w(s,t,n,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(k,"$&/")+"/")+e)),t.push(s)),1;if(u=0,c=""===c?".":c+":",R(e))for(var l=0;l<e.length;l++){var i=c+E(a=e[l],l);u+=w(a,t,n,i,s)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),l=0;!(a=e.next()).done;)u+=w(a=a.value,t,n,i=c+E(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,t,r){if(null==e)return e;var o=[],n=0;return w(e,o,"","",(function(e){return t.call(r,e,n++)})),o}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:j};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=n,t.Profiler=s,t.PureComponent=v,t.StrictMode=c,t.Suspense=i,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=g({},e.props),c=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=j.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)C.call(t,l)&&!x.hasOwnProperty(l)&&(n[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)n.children=o;else if(1<l){u=Array(l);for(var i=0;i<l;i++)u[i]=arguments[i+2];n.children=u}return{$$typeof:r,type:e.type,key:c,ref:s,props:n,_owner:a}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var o=r(667294);const n={},c=o.createContext(n);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);