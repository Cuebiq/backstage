/*! For license information please see 7c59564d.f4fb83ff.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[824611],{209746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(824246),a=t(511151);const s={id:"backend-plugin",title:"Backend plugins",description:"Creating and Developing Backend plugins"},i=void 0,o={id:"plugins/backend-plugin",title:"Backend plugins",description:"Creating and Developing Backend plugins",source:"@site/../docs/plugins/backend-plugin.md",sourceDirName:"plugins",slug:"/plugins/backend-plugin",permalink:"/docs/plugins/backend-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/backend-plugin.md",tags:[],version:"current",frontMatter:{id:"backend-plugin",title:"Backend plugins",description:"Creating and Developing Backend plugins"},sidebar:"docs",previous:{title:"Proxying",permalink:"/docs/plugins/proxying"},next:{title:"Call Existing API",permalink:"/docs/plugins/call-existing-api"}},c={},l=[{value:"Creating a Backend Plugin",id:"creating-a-backend-plugin",level:2},{value:"Developing your Backend Plugin",id:"developing-your-backend-plugin",level:2},{value:"Secure by Default",id:"secure-by-default",level:2},{value:"Using Dependencies",id:"using-dependencies",level:2},{value:"Making Use of a Database",id:"making-use-of-a-database",level:2},{value:"Making Use of the User&#39;s Identity",id:"making-use-of-the-users-identity",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This page describes the process of creating and managing backend plugins in your\nBackstage repository."}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-backend-plugin",children:"Creating a Backend Plugin"}),"\n",(0,r.jsx)(n.p,{children:"A new, bare-bones backend plugin package can be created by issuing the following\ncommand in your Backstage repository root:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn new --select backend-plugin\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Please also see the ",(0,r.jsx)(n.code,{children:"--help"})," flag for the ",(0,r.jsx)(n.code,{children:"new"})," command for some\nfurther options that are available, notably the ",(0,r.jsx)(n.code,{children:"--scope"})," and ",(0,r.jsx)(n.code,{children:"--no-private"}),"\nflags that control naming and publishing of the newly created package. Your repo\nroot ",(0,r.jsx)(n.code,{children:"package.json"})," will probably also have some default values already set up\nfor these."]}),"\n",(0,r.jsxs)(n.p,{children:["You will be asked to supply a name for the plugin. This is an identifier that\nwill be part of the NPM package name, so make it short and containing only\nlowercase characters separated by dashes, for example ",(0,r.jsx)(n.code,{children:"carmen"}),", if it's a\npackage that adds an integration with a system named Carmen, for example. The\nfull NPM package name would then be something like\n",(0,r.jsx)(n.code,{children:"@internal/plugin-carmen-backend"}),", depending on the other flags passed to the\n",(0,r.jsx)(n.code,{children:"new"})," command, and your settings for the ",(0,r.jsx)(n.code,{children:"new"})," command in\nyour root ",(0,r.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Creating the plugin will take a little while, so be patient. It will helpfully\nrun the initial installation and build commands, so that your package is ready\nto be hacked on! It will be located in a new folder in your ",(0,r.jsx)(n.code,{children:"plugins"})," directory,\nin this example ",(0,r.jsx)(n.code,{children:"plugins/carmen-backend"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For simple development purposes, a backend plugin can actually be started in a\nstandalone mode. You can do a first-light test of your service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cd plugins/carmen-backend\nyarn start\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: this documentation assumes you are using the latest version of Backstage and the new backend system. If you are not, please upgrade and migrate your backend using the ",(0,r.jsx)(n.a,{href:"/docs/backend-system/building-backends/migrating",children:"Migration Guide"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This will think for a bit, and then say ",(0,r.jsx)(n.code,{children:"Listening on :7007"}),". In a different\nterminal window, now run"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"curl localhost:7007/api/carmen/health\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This should return ",(0,r.jsx)(n.code,{children:'{"status":"ok"}'}),". Success! Press ",(0,r.jsx)(n.code,{children:"Ctrl + c"})," to stop it\nagain."]}),"\n",(0,r.jsx)(n.h2,{id:"developing-your-backend-plugin",children:"Developing your Backend Plugin"}),"\n",(0,r.jsxs)(n.p,{children:["A freshly created backend plugin does basically nothing, in terms of the overall\napp. It has a small set of basic dependencies and exposes an Express router in\n",(0,r.jsx)(n.code,{children:"src/service/router.ts"}),". This is where you will start adding routes and\nconnecting those to actual underlying functionality. But nothing in your\nBackstage application / backend exposes it."]}),"\n",(0,r.jsx)(n.p,{children:"To actually attach and run the plugin router, you will make some modifications\nto your backend."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @internal/plugin-carmen-backend@^0.1.0 # Change this to match the plugin's package.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Update ",(0,r.jsx)(n.code,{children:"packages/backend/src/index"})," with the following,"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const backend = createBackend();\n\n// ...\n\n// highlight-add-next-line\nbackend.add(import('@internal/plugin-carmen-backend'));\n\n// ...\n\nbackend.start();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After you start the backend (e.g. using ",(0,r.jsx)(n.code,{children:"yarn start-backend"})," from the repo\nroot), you should be able to fetch data from it."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# Note the extra /api here\ncurl localhost:7007/api/carmen/health\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This should return ",(0,r.jsx)(n.code,{children:'{"status":"ok"}'})," like before. Success!"]}),"\n",(0,r.jsx)(n.h2,{id:"secure-by-default",children:"Secure by Default"}),"\n",(0,r.jsx)(n.p,{children:"In 1.25, Backstage started moving to a secure by default model for plugins. This means that network requests to plugins will by default not allow unauthenticated users. Let's take a deeper look at the above curl request which should allow unauthenticated access."}),"\n",(0,r.jsx)(n.p,{children:"The actual endpoint that is being called is defined in"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/carmen-backend/src/service/router.ts"',children:"export async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n  // ...\n\n  // highlight-start\n  router.get('/health', (_, response) => {\n    logger.info('PONG!');\n    response.json({ status: 'ok' });\n  });\n  // highlight-end\n\n  // ...\n  return router;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"You'll notice that there is no authentication mechanism defined here, just the route name and response data. That's because the authentication is handled in your plugin definition,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/carmen-backend/src/plugin.ts"',children:"httpRouter.use(\n  await createRouter({\n    logger,\n  }),\n);\n// highlight-start\nhttpRouter.addAuthPolicy({\n  path: '/health',\n  allow: 'unauthenticated',\n});\n// highlight-end\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This allows requests to this plugin's ",(0,r.jsx)(n.code,{children:"/health"})," endpoint to go through unauthenticated!"]}),"\n",(0,r.jsx)(n.h2,{id:"using-dependencies",children:"Using Dependencies"}),"\n",(0,r.jsx)(n.p,{children:'In the new backend, dependencies are defined statically during registration and then "injected" during initialization. Here\'s an example of what this looks like,'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/carmen-backend/src/plugin.ts"',children:"\n// highlight-start\ndeps: {\n  httpRouter: coreServices.httpRouter,\n  logger: coreServices.logger,\n},\n// highlight-end\n// And then you can use them through the options property!\n// highlight-next-line\nasync init({ httpRouter, logger }) {\n    // ...\n},\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can add your own dependencies by adding a named item to the ",(0,r.jsx)(n.code,{children:"deps"})," parameter:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"deps: {\n  // highlight-next-line\n  myDependency: coreServices.rootConfig,\n},\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And then you can access it by referencing it in the ",(0,r.jsx)(n.code,{children:"init"})," block of your plugin definition,"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"async init({ myDependency }) {\n   // ..\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"And then you're free to call it and pass it into your router as needed."}),"\n",(0,r.jsxs)(n.p,{children:["Backstage provides a bunch of ",(0,r.jsx)(n.code,{children:"coreServices"})," out of box, see the more in depth docs ",(0,r.jsx)(n.a,{href:"/docs/backend-system/core-services/index",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"making-use-of-a-database",children:"Making Use of a Database"}),"\n",(0,r.jsx)(n.p,{children:"The Backstage backend comes with a builtin facility for SQL database access.\nMost plugins that have persistence needs will choose to make use of this\nfacility, so that Backstage operators can manage database needs uniformly."}),"\n",(0,r.jsxs)(n.p,{children:["You can access this by adding a dependency on the ",(0,r.jsx)(n.code,{children:"coreServices.database"})," service.\nThat will give you a ",(0,r.jsx)(n.a,{href:"http://knexjs.org/",children:"Knex"})," connection object."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/carmen-backend/src/plugin.ts"',children:"deps: {\n  // ...\n  // highlight-next-line\n  database: coreServices.database,\n},\nasync init({\n  // highlight-next-line\n  database,\n}) {\n  // You will then pass this client into your actual plugin implementation\n  // code, maybe similar to the following:\n  const model = new CarmenDatabaseModel(database);\n  httpRouter.use(\n    await createRouter({\n      // highlight-next-line\n      model,\n      logger,\n    }),\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["All plugin database needs are configured under the ",(0,r.jsx)(n.code,{children:"backend.database"})," config key\nof your ",(0,r.jsx)(n.code,{children:"app-config.yaml"}),". The framework may even make sure behind the scenes that\nthe logical database is created automatically if it doesn't exist, based on\nrules that the Backstage operator decides on."]}),"\n",(0,r.jsx)(n.p,{children:"The framework does not handle database schema migrations for you, however. The\nbuiltin plugins in the main repo have chosen to use the Knex library to manage\nschema migrations as well, but you can do so in any manner that you see fit."}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"http://knexjs.org/",children:"Knex library documentation"})," for examples and\ndetails on how to write schema migrations and perform SQL queries against your\ndatabase.."]}),"\n",(0,r.jsx)(n.h2,{id:"making-use-of-the-users-identity",children:"Making Use of the User's Identity"}),"\n",(0,r.jsxs)(n.p,{children:["The Backstage backend also offers a core service to access the user's identity. You can access it through the ",(0,r.jsx)(n.code,{children:"coreServices.httpAuth"})," and ",(0,r.jsx)(n.code,{children:"coreServices.userInfo"})," dependencies."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/carmen-backend/src/plugin.ts"',children:"deps: {\n  // highlight-start\n  httpAuth: coreServices.httpAuth,\n  userInfo: coreServices.userInfo,\n  // highlight-end\n},\nasync init({\n  // highlight-start\n  httpAuth,\n  userInfo,\n  // highlight-end\n}) {\n  httpRouter.use(\n    await createRouter({\n      // highlight-start\n      httpAuth,\n      userInfo,\n      // highlight-end\n      logger,\n    }),\n  );\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The plugin can then extract the identity from the request."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface RouterOptions {\n  logger: LoggerService;\n  // highlight-start\n  userInfo: UserInfoService;\n  httpAuth: HttpAuthService;\n  // highlight-end\n}\n\nexport async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n  const { userInfo, httpAuth } = options;\n\n  router.post('/me', async (req, res) => {\n    const credentials = await httpAuth.credentials(req, {\n      // This rejects request from non-users. Only use this if your plugin needs to access the\n      // user identity, most of the time it's enough to just call `httpAuth.credentials(req)`\n      allow: ['user'],\n    });\n\n    const userInfo = await userInfo.getUserInfo(credentials);\n\n    res.json({\n      // The catalog entity ref of the user.\n      userEntityRef: userInfo.userEntityRef,\n\n      // The list of entities that this user or any teams this user is a part of owns.\n      ownershipEntityRefs: userInfo.ownershipEntityRefs,\n    });\n  });\n\n  // ...\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,n,t)=>{var r=t(827378),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,u=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:a,type:e,key:l,ref:u,props:s,_owner:o.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function m(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||f}function b(){}function x(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var k=x.prototype=new b;k.constructor=x,g(k,m.prototype),k.isPureReactComponent=!0;var j=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,r){var a,s={},i=null,o=null;if(null!=n)for(a in void 0!==n.ref&&(o=n.ref),void 0!==n.key&&(i=""+n.key),n)v.call(n,a)&&!_.hasOwnProperty(a)&&(s[a]=n[a]);var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===s[a]&&(s[a]=c[a]);return{$$typeof:t,type:e,key:i,ref:o,props:s,_owner:w.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var C=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function I(e,n,a,s,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return i=i(c=e),e=""===s?"."+E(c,0):s,j(i)?(a="",null!=e&&(a=e.replace(C,"$&/")+"/"),I(i,n,a,"",(function(e){return e}))):null!=i&&(R(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),n.push(i)),1;if(c=0,s=""===s?".":s+":",j(e))for(var l=0;l<e.length;l++){var u=s+E(o=e[l],l);c+=I(o,n,a,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)c+=I(o=o.value,n,a,u=s+E(o,l++),i);else if("object"===o)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,n,t){if(null==e)return e;var r=[],a=0;return I(e,r,"","",(function(e){return n.call(t,e,a++)})),r}function P(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},A={transition:null},B={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:A,ReactCurrentOwner:w};n.Children={map:T,forEach:function(e,n,t){T(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return T(e,(function(){n++})),n},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=a,n.Profiler=i,n.PureComponent=x,n.StrictMode=s,n.Suspense=u,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),s=e.key,i=e.ref,o=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,o=w.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)v.call(n,l)&&!_.hasOwnProperty(l)&&(a[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}return{$$typeof:t,type:e.type,key:s,ref:i,props:a,_owner:o}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=R,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=A.transition;A.transition={};try{e()}finally{A.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return N.current.useCallback(e,n)},n.useContext=function(e){return N.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return N.current.useDeferredValue(e)},n.useEffect=function(e,n){return N.current.useEffect(e,n)},n.useId=function(){return N.current.useId()},n.useImperativeHandle=function(e,n,t){return N.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return N.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return N.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return N.current.useMemo(e,n)},n.useReducer=function(e,n,t){return N.current.useReducer(e,n,t)},n.useRef=function(e){return N.current.useRef(e)},n.useState=function(e){return N.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return N.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return N.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(667294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);