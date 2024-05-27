/*! For license information please see 9723c83c.4ccf9921.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[605194],{831028:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var c=r(824246),t=r(511151);const s={id:"backend-common",title:"@backstage/backend-common",description:"API Reference for @backstage/backend-common"},o=void 0,a={id:"reference/backend-common",title:"@backstage/backend-common",description:"API Reference for @backstage/backend-common",source:"@site/../docs/reference/backend-common.md",sourceDirName:"reference",slug:"/reference/backend-common",permalink:"/docs/reference/backend-common",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.md",tags:[],version:"current",frontMatter:{id:"backend-common",title:"@backstage/backend-common",description:"API Reference for @backstage/backend-common"}},d={},i=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common",children:(0,c.jsx)(n.code,{children:"@backstage/backend-common"})})]}),"\n",(0,c.jsx)(n.p,{children:"Common functionality library for Backstage backends"}),"\n",(0,c.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Class"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.awss3urlreader",children:"AwsS3UrlReader"})}),(0,c.jsxs)(n.td,{children:["Implements a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," for AWS S3 buckets."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.azureurlreader",children:"AzureUrlReader"})}),(0,c.jsxs)(n.td,{children:["Implements a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," for Azure repos."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.bitbucketcloudurlreader",children:"BitbucketCloudUrlReader"})}),(0,c.jsxs)(n.td,{children:["Implements a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," for files from Bitbucket Cloud."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.bitbucketserverurlreader",children:"BitbucketServerUrlReader"})}),(0,c.jsxs)(n.td,{children:["Implements a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," for files from Bitbucket Server APIs."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.bitbucketurlreader",children:"BitbucketUrlReader"})}),(0,c.jsxs)(n.td,{children:["Implements a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," for files from Bitbucket v1 and v2 APIs, such as the one exposed by Bitbucket Cloud itself."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.cachemanager",children:"CacheManager"})}),(0,c.jsx)(n.td,{children:"Implements a Cache Manager which will automatically create new cache clients for plugins when requested. All requested cache clients are created with the connection details provided."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.databasemanager",children:"DatabaseManager"})}),(0,c.jsx)(n.td,{children:"Manages database connections for Backstage backend plugins."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.dockercontainerrunner",children:"DockerContainerRunner"})}),(0,c.jsxs)(n.td,{children:["A ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.containerrunner",children:"ContainerRunner"})," for Docker containers."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.fetchurlreader",children:"FetchUrlReader"})}),(0,c.jsxs)(n.td,{children:["A ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," that does a plain fetch of the URL."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.gerriturlreader",children:"GerritUrlReader"})}),(0,c.jsxs)(n.td,{children:["Implements a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," for files in Gerrit."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.git",children:"Git"})}),(0,c.jsxs)(n.td,{children:["A convenience wrapper around the ",(0,c.jsx)(n.code,{children:"isomorphic-git"})," library."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.giteaurlreader",children:"GiteaUrlReader"})}),(0,c.jsxs)(n.td,{children:["Implements a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," for the Gitea v1 api."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.githuburlreader",children:"GithubUrlReader"})}),(0,c.jsxs)(n.td,{children:["Implements a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," for files through the GitHub v3 APIs, such as the one exposed by GitHub itself."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.gitlaburlreader",children:"GitlabUrlReader"})}),(0,c.jsxs)(n.td,{children:["Implements a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," for files on GitLab."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.harnessurlreader",children:"HarnessUrlReader"})}),(0,c.jsxs)(n.td,{children:["Implements a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," for the Harness code v1 api."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.kubernetescontainerrunner",children:"KubernetesContainerRunner"})}),(0,c.jsxs)(n.td,{children:[(0,c.jsxs)(n.p,{children:["A ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.containerrunner",children:"ContainerRunner"})," for Kubernetes."]}),(0,c.jsx)(n.p,{children:"Runs containers leveraging Jobs on a Kubernetes cluster"})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.readurlresponsefactory",children:"ReadUrlResponseFactory"})}),(0,c.jsx)(n.td,{children:"Utility class for UrlReader implementations to create valid ReadUrlResponse instances from common response primitives."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.servertokenmanager",children:"ServerTokenManager"})}),(0,c.jsx)(n.td,{children:"Creates and validates tokens for use during service-to-service authentication."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.urlreaders",children:"UrlReaders"})}),(0,c.jsxs)(n.td,{children:["Helps construct ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"}),"s."]})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Function"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.cachetoplugincachemanager",children:"cacheToPluginCacheManager(cache)"})}),(0,c.jsx)(n.td,{children:"Compatibility wrapper for going from a new-backend cache service to the old-backend plugin cache manager."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.createlegacyauthadapters",children:"createLegacyAuthAdapters(options)"})}),(0,c.jsx)(n.td,{children:"An adapter that ensures presence of the auth and/or httpAuth services."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.createrootlogger",children:"createRootLogger(options, env)"})}),(0,c.jsxs)(n.td,{children:['Creates a default "root" logger. This also calls ',(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.setrootlogger",children:"setRootLogger()"})," under the hood."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.createservicebuilder",children:"createServiceBuilder(_module)"})}),(0,c.jsx)(n.td,{children:"Creates a new service builder."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.createstatuscheckrouter",children:"createStatusCheckRouter(options)"})}),(0,c.jsx)(n.td,{children:"Creates a default status checking router, that you can add to your express app."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.dropdatabase",children:"dropDatabase(dbConfig, databaseNames)"})}),(0,c.jsx)(n.td,{children:"Helper for deleting databases, only exists for backend-test-utils for now."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.errorhandler",children:"errorHandler(options)"})}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.p,{children:"Express middleware to handle errors during request processing."}),(0,c.jsx)(n.p,{children:"This is commonly the very last middleware in the chain."}),(0,c.jsx)(n.p,{children:'Its primary purpose is not to do translation of business logic exceptions, but rather to be a global catch-all for uncaught "fatal" errors that are expected to result in a 500 error. However, it also does handle some common error types (such as http-error exceptions) and returns the enclosed status code accordingly.'})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.getrootlogger",children:"getRootLogger()"})}),(0,c.jsx)(n.td,{children:"Gets the current root logger."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.getvoidlogger",children:"getVoidLogger()"})}),(0,c.jsx)(n.td,{children:"A logger that just throws away all messages."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.loadbackendconfig",children:"loadBackendConfig(options)"})}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.p,{children:"Load configuration for a Backend."}),(0,c.jsx)(n.p,{children:"This function should only be called once, during the initialization of the backend."})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.loggertowinstonlogger",children:"loggerToWinstonLogger(logger, opts)"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.makelegacyplugin",children:"makeLegacyPlugin(envMapping, envTransforms)"})}),(0,c.jsx)(n.td,{children:"Creates a new custom plugin compatibility wrapper."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.notfoundhandler",children:"notFoundHandler()"})}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.p,{children:"Express middleware to handle requests for missing routes."}),(0,c.jsx)(n.p,{children:"Should be used as the very last handler in the chain, as it unconditionally returns a 404 status."})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.redactwinstonlogline",children:"redactWinstonLogLine(info)"})}),(0,c.jsx)(n.td,{children:"A winston formatting function that finds occurrences of filteredKeys and replaces them with the corresponding identifier."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.requestlogginghandler",children:"requestLoggingHandler(logger)"})}),(0,c.jsx)(n.td,{children:"Logs incoming requests."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.setrootlogger",children:"setRootLogger(newLogger)"})}),(0,c.jsx)(n.td,{children:'Sets a completely custom default "root" logger.'})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.statuscheckhandler",children:"statusCheckHandler(options)"})}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.p,{children:"Express middleware for status checks."}),(0,c.jsx)(n.p,{children:"This is commonly used to implement healthcheck and readiness routes."})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.usehotcleanup",children:"useHotCleanup(_module, cancelEffect)"})}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.p,{children:"useHotCleanup allows cleanup of ongoing effects when a module is hot-reloaded during development. The cleanup function will be called whenever the module itself or any of its parent modules is hot-reloaded."}),(0,c.jsx)(n.p,{children:"Useful for cleaning intervals, timers, requests etc"})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.usehotmemoize",children:"useHotMemoize(_module, valueFactory)"})}),(0,c.jsx)(n.td,{children:"Memoizes a generated value across hot-module reloads. This is useful for stateful parts of the backend, e.g. to retain a database."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Interface"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.containerrunner",children:"ContainerRunner"})}),(0,c.jsx)(n.td,{children:"Handles the running of containers, on behalf of others."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.plugincachemanager",children:"PluginCacheManager"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.pulloptions",children:"PullOptions"})}),(0,c.jsxs)(n.td,{children:["Allows defining access credentials for a registry Follows dockerode auth configuration: ",(0,c.jsx)(n.a,{href:"https://github.com/apocas/dockerode?tab=readme-ov-file#pull-from-private-repos",children:"https://github.com/apocas/dockerode?tab=readme-ov-file#pull-from-private-repos"})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.readtreeresponsefactory",children:"ReadTreeResponseFactory"})}),(0,c.jsx)(n.td,{children:"A factory for response factories that handle the unpacking and inspection of complex responses such as archive data."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.servertokenmanageroptions",children:"ServerTokenManagerOptions"})}),(0,c.jsxs)(n.td,{children:["Options for ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.servertokenmanager",children:"ServerTokenManager"}),"."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.statuscheckhandleroptions",children:"StatusCheckHandlerOptions"})}),(0,c.jsxs)(n.td,{children:["Options passed to ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.statuscheckhandler",children:"statusCheckHandler()"}),"."]})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Variable"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.coloredformat",children:"coloredFormat"})}),(0,c.jsx)(n.td,{children:"Creates a pretty printed winston log formatter."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.hostdiscovery",children:"HostDiscovery"})}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.p,{children:"HostDiscovery is a basic PluginEndpointDiscovery implementation that can handle plugins that are hosted in a single or multiple deployments."}),(0,c.jsx)(n.p,{children:"The deployment may be scaled horizontally, as long as the external URL is the same for all instances. However, internal URLs will always be resolved to the same host, so there won't be any balancing of internal traffic."})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.ischildpath",children:"isChildPath"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.isdatabaseconflicterror",children:"isDatabaseConflictError"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.legacyplugin",children:"legacyPlugin"})}),(0,c.jsx)(n.td,{children:"Helper function to create a plugin from a legacy createRouter function and register it with the http router based on the plugin id."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.resolvepackagepath",children:"resolvePackagePath"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.resolvesafechildpath",children:"resolveSafeChildPath"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.singlehostdiscovery",children:"SingleHostDiscovery"})}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.p,{children:"SingleHostDiscovery is a basic PluginEndpointDiscovery implementation that assumes that all plugins are hosted in a single deployment."}),(0,c.jsx)(n.p,{children:"The deployment may be scaled horizontally, as long as the external URL is the same for all instances. However, internal URLs will always be resolved to the same host, so there won't be any balancing of internal traffic."})]})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Type Alias"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.authcallbackoptions",children:"AuthCallbackOptions"})}),(0,c.jsx)(n.td,{children:"Configure an authentication callback that can provide credentials on demand"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.cacheclient",children:"CacheClient"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.cacheclientoptions",children:"CacheClientOptions"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.cacheclientsetoptions",children:"CacheClientSetOptions"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.cachemanageroptions",children:"CacheManagerOptions"})}),(0,c.jsxs)(n.td,{children:["Options given when constructing a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.cachemanager",children:"CacheManager"}),"."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.databasemanageroptions",children:"DatabaseManagerOptions"})}),(0,c.jsxs)(n.td,{children:["Creation options for ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.databasemanager",children:"DatabaseManager"}),"."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.errorhandleroptions",children:"ErrorHandlerOptions"})}),(0,c.jsxs)(n.td,{children:["Options passed to the ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.errorhandler",children:"errorHandler()"})," middleware."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.fromreadablearrayoptions",children:"FromReadableArrayOptions"})}),(0,c.jsxs)(n.td,{children:["Options that control ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.readtreeresponsefactory.fromreadablearray",children:"ReadTreeResponseFactory.fromReadableArray()"})," execution."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.kubernetescontainerrunnermountbase",children:"KubernetesContainerRunnerMountBase"})}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.p,{children:"An existing Kubernetes volume that will be used as base for mounts."}),(0,c.jsx)(n.p,{children:"Every mount must start with the 'basePath'."})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.kubernetescontainerrunneroptions",children:"KubernetesContainerRunnerOptions"})}),(0,c.jsxs)(n.td,{children:[(0,c.jsxs)(n.p,{children:["Options to create a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.kubernetescontainerrunner",children:"KubernetesContainerRunner"})]}),(0,c.jsx)(n.p,{children:"Kubernetes Jobs will be created on the provided 'namespace' and their names will be prefixed with the provided 'name'."}),(0,c.jsxs)(n.p,{children:["'podTemplate' defines a Pod template for the Jobs. It has to include a volume definition named as the ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.kubernetescontainerrunnermountbase",children:"KubernetesContainerRunnerMountBase"})," 'volumeName'."]})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.legacycreaterouter",children:"LegacyCreateRouter"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.legacyrootdatabaseservice",children:"LegacyRootDatabaseService"})}),(0,c.jsx)(n.td,{children:"An interface that represents the legacy global DatabaseManager implementation."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.pluginendpointdiscovery",children:"PluginEndpointDiscovery"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.readerfactory",children:"ReaderFactory"})}),(0,c.jsxs)(n.td,{children:["A factory function that can read config to construct zero or more ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"}),"s along with a predicate for when it should be used."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.readtreeresponsefactoryoptions",children:"ReadTreeResponseFactoryOptions"})}),(0,c.jsxs)(n.td,{children:["Options that control execution of ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.readtreeresponsefactory",children:"ReadTreeResponseFactory"})," methods."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.readurlresponsefactoryfromstreamoptions",children:"ReadUrlResponseFactoryFromStreamOptions"})}),(0,c.jsxs)(n.td,{children:["An options object for ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.readurlresponsefactory",children:"ReadUrlResponseFactory"})," factory methods."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.requestlogginghandlerfactory",children:"RequestLoggingHandlerFactory"})}),(0,c.jsx)(n.td,{children:"A factory for request loggers."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.runcontaineroptions",children:"RunContainerOptions"})}),(0,c.jsxs)(n.td,{children:["Options passed to the ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.containerrunner.runcontainer",children:"ContainerRunner.runContainer()"})," method."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.servicebuilder",children:"ServiceBuilder"})}),(0,c.jsx)(n.td,{children:"A helper for building backend service instances."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.staticauthoptions",children:"StaticAuthOptions"})}),(0,c.jsx)(n.td,{children:"Configure static credential for authentication"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.statuscheck",children:"StatusCheck"})}),(0,c.jsxs)(n.td,{children:["A custom status checking function, passed to ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.statuscheckhandler",children:"statusCheckHandler()"})," and ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.createstatuscheckrouter",children:"createStatusCheckRouter()"}),"."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.urlreaderpredicatetuple",children:"UrlReaderPredicateTuple"})}),(0,c.jsxs)(n.td,{children:["A predicate that decides whether a specific ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," can handle a given URL."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-common.urlreadersoptions",children:"UrlReadersOptions"})}),(0,c.jsxs)(n.td,{children:["Creation options for ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"}),"."]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},371426:(e,n,r)=>{var c=r(827378),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var c,s={},i=null,l=null;for(c in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,c)&&!d.hasOwnProperty(c)&&(s[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===s[c]&&(s[c]=n[c]);return{$$typeof:t,type:e,key:i,ref:l,props:s,_owner:a.current}}n.Fragment=s,n.jsx=i,n.jsxs=i},541535:(e,n)=>{var r=Symbol.for("react.element"),c=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),d=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),f=Symbol.iterator;var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,j={};function p(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||x}function b(){}function g(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||x}p.prototype.isReactComponent={},p.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=p.prototype;var k=g.prototype=new b;k.constructor=g,m(k,p.prototype),k.isPureReactComponent=!0;var y=Array.isArray,v=Object.prototype.hasOwnProperty,R={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,c){var t,s={},o=null,a=null;if(null!=n)for(t in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(o=""+n.key),n)v.call(n,t)&&!C.hasOwnProperty(t)&&(s[t]=n[t]);var d=arguments.length-2;if(1===d)s.children=c;else if(1<d){for(var i=Array(d),l=0;l<d;l++)i[l]=arguments[l+2];s.children=i}if(e&&e.defaultProps)for(t in d=e.defaultProps)void 0===s[t]&&(s[t]=d[t]);return{$$typeof:r,type:e,key:o,ref:a,props:s,_owner:R.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var _=/\/+/g;function U(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function A(e,n,t,s,o){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var d=!1;if(null===e)d=!0;else switch(a){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case r:case c:d=!0}}if(d)return o=o(d=e),e=""===s?"."+U(d,0):s,y(o)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),A(o,n,t,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(o,t+(!o.key||d&&d.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+e)),n.push(o)),1;if(d=0,s=""===s?".":s+":",y(e))for(var i=0;i<e.length;i++){var l=s+U(a=e[i],i);d+=A(a,n,t,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(a=e.next()).done;)d+=A(a=a.value,n,t,l=s+U(a,i++),o);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return d}function O(e,n,r){if(null==e)return e;var c=[],t=0;return A(e,c,"","",(function(e){return n.call(r,e,t++)})),c}function E(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},I={transition:null},T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:I,ReactCurrentOwner:R};n.Children={map:O,forEach:function(e,n,r){O(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=p,n.Fragment=t,n.Profiler=o,n.PureComponent=g,n.StrictMode=s,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.cloneElement=function(e,n,c){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=m({},e.props),s=e.key,o=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,a=R.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(i in n)v.call(n,i)&&!C.hasOwnProperty(i)&&(t[i]=void 0===n[i]&&void 0!==d?d[i]:n[i])}var i=arguments.length-2;if(1===i)t.children=c;else if(1<i){d=Array(i);for(var l=0;l<i;l++)d[l]=arguments[l+2];t.children=d}return{$$typeof:r,type:e.type,key:s,ref:o,props:t,_owner:a}},n.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=w,n.createFactory=function(e){var n=w.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:i,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return P.current.useCallback(e,n)},n.useContext=function(e){return P.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return P.current.useDeferredValue(e)},n.useEffect=function(e,n){return P.current.useEffect(e,n)},n.useId=function(){return P.current.useId()},n.useImperativeHandle=function(e,n,r){return P.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return P.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return P.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return P.current.useMemo(e,n)},n.useReducer=function(e,n,r){return P.current.useReducer(e,n,r)},n.useRef=function(e){return P.current.useRef(e)},n.useState=function(e){return P.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return P.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return P.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var c=r(667294);const t={},s=c.createContext(t);function o(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);