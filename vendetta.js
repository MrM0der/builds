(function(){"use strict";const H=function(e){return Object.values(window.modules).find(function(t){return t?.publicModule.exports?.[e]})?.publicModule?.exports};window.React=H("createElement");const u=H("AppRegistry"),W=H("AbortCodes"),K=H("isMoment");function Ie(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(const e in window.modules){const t=Number(e),n=window.modules[t]?.publicModule?.exports;if(!n||n===window||n.proxygone===null){Ie(t);continue}}const De=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return function(n){const r=[],o=K?.locale();for(const a in e){const i=Number(a),c=e[i]?.publicModule?.exports;if(!e[i].isInitialized)try{__r(i),o&&o!==K.locale()&&K.locale(o)}catch{}if(!c){Ie(i);continue}try{if(c.default&&c.__esModule&&n(c.default)){if(t)return c.default;r.push(c.default)}if(n(c)){if(t)return c;r.push(c)}}catch(l){console.error(`Failed to filter modules... ${l.stack||l.toString()}`)}}if(!t)return r}},le=window.modules,M=De(le,!0),se=De(le),Ce=function(e){return function(t){return e.every(function(n){return t[n]!==void 0})}},Oe=function(e,t){return t?function(n){return n?.name===e}:function(n){return n?.default?.name===e}},wt=function(e){return function(t){return t.getName&&t.getName.length===0&&t.getName()===e}},d=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return M(Ce(t))},St=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return se(Ce(t))},J=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return M(Oe(e,t))},Tt=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return se(Oe(e,t))},ue=function(e){return M(wt(e))};var At=Object.freeze({__proto__:null,find:M,findAll:se,findByDisplayName:J,findByDisplayNameAll:Tt,findByProps:d,findByPropsAll:St,findByStoreName:ue,modules:le});const $t=d("getVoiceChannelId"),de=d("Messages"),fe=d("openDeeplink"),Pe=M(function(e){return e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop}),B=d("createThemedStyleSheet"),me=d("setString","getString","hasString"),Y=d("registerAsset"),It=d("acceptInviteAndTransitionToInviteChannel"),ge=d("getBuiltInCommands"),Dt=d("pushLazy"),Ct=d("createStackNavigator"),F=d("NavigationContainer"),Ot=d("connectStores"),pe=d("_currentDispatchActionType"),L=window.React;var Pt=Object.freeze({__proto__:null,Flux:Ot,FluxDispatcher:pe,NavigationNative:F,React:L,ReactNative:u,assets:Y,channels:$t,clipboard:me,commands:ge,constants:W,i18n:de,invites:It,moment:K,navigation:Dt,navigationStack:Ct,stylesheet:B,toasts:Pe,url:fe});const Ne=["a","b","i"],C=new Map;function Nt(e,t,n,r,o){const a=C.get(t)?.[e];if(!a)return o?Reflect.construct(t[e],n,r):t[e].apply(r,n);for(const l of a.b.values()){const m=l.call(r,n);Array.isArray(m)&&(n=m)}let i=(...l)=>o?Reflect.construct(a.o,l,r):a.o.apply(r,l);for(const l of a.i.values()){const m=i;i=(...y)=>l.call(r,y,m)}let c=i(...n);for(const l of a.a.values())c=l.call(r,n,c)??c;return c}function Be(e,t,n,r){const o=C.get(e),a=o?.[t];return a?.[r].has(n)?(a[r].delete(n),Ne.every(i=>a[i].size===0)&&(Reflect.defineProperty(e,t,{value:a.o,writable:!0,configurable:!0})||(e[t]=a.o),delete o[t]),Object.keys(o).length==0&&C.delete(e),!0):!1}function Bt(){for(const[e,t]of C.entries())for(const n in t)for(const r of Ne)for(const o of t[n]?.[r].keys()??[])Be(e,n,o,r)}var he=e=>(t,n,r,o=!1)=>{if(typeof n[t]!="function")throw new Error(`${t} is not a function in ${n.constructor.name}`);C.has(n)||C.set(n,{});const a=C.get(n);if(!a[t]){const l=n[t];a[t]={o:l,b:new Map,i:new Map,a:new Map};const m=(h,v,z)=>{const Vn=Nt(t,n,v,h,z);return o&&c(),Vn},y=new Proxy(l,{apply:(h,v,z)=>m(v,z,!1),construct:(h,v)=>m(l,v,!0),get:(h,v,z)=>v=="toString"?l.toString.bind(l):Reflect.get(h,v,z)});Reflect.defineProperty(n,t,{value:y,configurable:!0,writable:!0})||(n[t]=y)}const i=Symbol(),c=()=>Be(n,t,i,e);return a[t][e].set(i,r),c};const Lt=he("b"),xt=he("i"),$=he("a");var kt=Object.freeze({__proto__:null,after:$,before:Lt,instead:xt,unpatchAll:Bt}),Mt={...kt};const I={};function Le(){const e=$("registerAsset",Y,function(t,n){const r=t[0];I[r.name]={...r,id:n}});for(let t=1;;t++){const n=Y.getAssetByID(t);if(!n)break;I[n.name]||(I[n.name]={...n,id:t})}return e}const Ft=function(e){return Object.values(I).find(e)},Vt=function(e){return I[e]},Ut=function(e){return Y.getAssetByID(e)},s=function(e){return I[e]?.id};var jt=Object.freeze({__proto__:null,all:I,find:Ft,getAssetByID:Ut,getAssetByName:Vt,getAssetIDByName:s,patchAssets:Le});const E=function(e,t){return Pe.open({content:e,source:t})};var Gt=Object.freeze({__proto__:null,showToast:E});const xe=d("setLogFn").default,O=new xe("Vendetta");let R;function ke(e){if(R!==void 0&&R.readyState!==WebSocket.CLOSED&&R.close(),!e){E("Invalid debugger URL!",s("Small"));return}R=new WebSocket(`ws://${e}`),R.addEventListener("open",function(){return E("Connected to debugger.",s("Check"))}),R.addEventListener("message",function(t){try{(0,eval)(t.data)}catch(n){console.error(n)}}),R.addEventListener("error",function(t){console.log(`Debugger error: ${t.message}`),E("An error occurred with the debugger connection!",s("Small"))})}function Me(){const e=$("nativeLoggingHook",globalThis,function(t){R?.readyState===WebSocket.OPEN&&R.send(JSON.stringify({message:t[0],level:t[1]})),O.log(t[0])});return function(){R&&R.close(),e()}}const Re="dc5ad0c";function Fe(){const e=u.NativeModules.InfoDictionaryManager,t=u.NativeModules.DCDDeviceManager,n=window.HermesInternal.getRuntimeProperties(),r=n["OSS Release Version"],o="for RN ",a=u.Platform.constants,i=a.reactNativeVersion;return{vendetta:{version:Re,loader:window.__vendetta_loader?.name??"Unknown"},discord:{version:e.Version,build:e.Build},react:{version:React.version,nativeVersion:r.startsWith(o)?r.substring(o.length):`${i.major}.${i.minor}.${i.patch}`},hermes:{version:r,buildType:n.Build,bytecodeVersion:n["Bytecode Version"]},...u.Platform.select({android:{os:{name:"Android",version:a.Release,sdk:a.Version}},ios:{os:{name:a.systemName,version:a.osVersion}}}),...u.Platform.select({android:{device:{manufacturer:a.Manufacturer,brand:a.Brand,model:a.Model,codename:t.device}},ios:{device:{manufacturer:t.deviceManufacturer,brand:t.deviceBrand,model:t.deviceModel,codename:t.device}}})}}var zt=Object.freeze({__proto__:null,connectToDebugger:ke,getDebugInfo:Fe,patchLogHook:Me,get socket(){return R},versionHash:Re});let V=[];function Ve(){const e=$("getBuiltInCommands",ge,function(t,n){return n.concat(V)});return function(){V=[],e()}}function Ht(e){const t=ge.getBuiltInCommands(1,!0,!1);t.sort(function(r,o){return parseInt(o.id)-parseInt(r.id)});const n=t[t.length-1];return e.id=(parseInt(n.id,10)-1).toString(),V.push(e),function(){return V=V.filter(function(r){let{id:o}=r;return o!==e.id})}}var Wt=Object.freeze({__proto__:null,patchCommands:Ve,registerCommand:Ht}),ye;(function(e){e.GET="GET",e.SET="SET",e.DEL="DEL"})(ye||(ye={}));function Kt(){return{listeners:Object.values(ye).reduce(function(e,t){return e[t]=new Set,e},{}),on(e,t){this.listeners[e].has(t)||this.listeners[e].add(t)},off(e,t){this.listeners[e].delete(t)},once(e,t){var n=this;const r=function(o,a){n.off(o,r),t(o,a)};this.on(e,r)},emit(e,t){for(const n of this.listeners[e])n(e,t)}}}const Ue=u.NativeModules.MMKVManager,U=u.NativeModules.DCDFileManager,je=u.Platform.select({default:function(e){return e},ios:function(e){return`Documents/${e}`}}),X=function(e){return{get:async function(){return JSON.parse(await Ue.getItem(e)??"{}")},set:function(t){return Ue.setItem(e,JSON.stringify(t))}}},Ge=function(e){let t;return{get:async function(){const n=`${U.getConstants().DocumentsDirPath}/${e}`;return!t&&!await U.fileExists(n)?(t=!0,U.writeFile("documents",je(e),"{}","utf8")):JSON.parse(await U.readFile(n,"utf8"))},set:function(n){return void U.writeFile("documents",je(e),JSON.stringify(n),"utf8")}}};u.NativeModules.MMKVManager;const ze=Symbol("emitter accessor"),He=Symbol("wrapSync promise accessor");function We(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=Kt();function n(r,o){return new Proxy(r,{get(a,i){if(i===ze)return t;const c=[...o,i],l=a[i];return l!=null?(t.emit("GET",{path:c,value:l}),typeof l=="object"?n(l,c):l):l},set(a,i,c){return a[i]=c,t.emit("SET",{path:[...o,i],value:c}),!0},deleteProperty(a,i){const c=delete a[i];return c&&t.emit("DEL",{path:[...o,i]}),c}})}return{proxy:n(e,[]),emitter:t}}function x(e){const t=e[ze],[,n]=React.useReducer(function(r){return~r},0);return React.useEffect(function(){const r=function(){return n()};return t.on("SET",r),t.on("DEL",r),function(){t.off("SET",r),t.off("DEL",r)}},[]),e}async function j(e){const t=await e.get(),{proxy:n,emitter:r}=We(t),o=function(){return e.set(n)};return r.on("SET",o),r.on("DEL",o),n}function Z(e){let t;const n=[],r=function(o){return t?o():n.push(o)};return e.then(function(o){t=o,n.forEach(function(a){return a()})}),new Proxy({},{...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(function(o){return[o,function(a){for(var i=arguments.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=arguments[l];return Reflect[o](t??a,...c)}]})),get(o,a,i){return a===He?r:Reflect.get(t??o,a,i)}})}const Ke=function(e){return new Promise(function(t){return e[He](t)})};var Jt=Object.freeze({__proto__:null,awaitSyncWrapper:Ke,createFileBackend:Ge,createMMKVBackend:X,createProxy:We,createStorage:j,useProxy:x,wrapSync:Z});async function ve(e,t){const n=await fetch(e,t);if(!n.ok)throw new Error("Request returned non-ok");return n}const f=Z(j(X("VENDETTA_PLUGINS"))),P={};async function Q(e){e.endsWith("/")||(e+="/");const t=f[e];let n;try{n=await(await ve(e+"manifest.json",{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let r;if(t?.manifest.hash!==n.hash)try{r=await(await ve(e+(n.main||"index.js"),{cache:"no-store"})).text()}catch{}if(!r&&!t)throw new Error(`Failed to fetch JS for ${e}`);f[e]={id:e,manifest:n,enabled:t?.enabled??!1,update:t?.update??!0,js:r??t.js}}async function Je(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in f)throw new Error("Plugin already installed");await Q(e),t&&await q(e)}async function Ye(e){const t={...window.vendetta,plugin:{id:e.id,manifest:e.manifest,storage:await j(X(e.id))},logger:new xe(`Vendetta \xBB ${e.manifest.name}`)},n=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,r=(0,eval)(n)(t),o=typeof r=="function"?r():r;return o.default||o}async function q(e){e.endsWith("/")||(e+="/");const t=f[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{const n=await Ye(t);P[e]=n,n.onLoad?.(),t.enabled=!0}catch(n){O.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,n);try{P[t.id]?.onUnload?.()}catch(r){O.error(`Plugin ${t.id} errored whilst unloading`,r)}delete P[e],t.enabled=!1}}function ee(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;e.endsWith("/")||(e+="/");const n=f[e],r=P[e];if(!n)throw new Error("Attempted to stop non-existent plugin");if(!r)throw new Error("Attempted to stop a non-started plugin");try{r.onUnload?.()}catch(o){O.error(`Plugin ${n.id} errored whilst unloading`,o)}delete P[e],t&&(n.enabled=!1)}function Xe(e){e.endsWith("/")||(e+="/"),f[e].enabled&&ee(e),delete f[e]}async function Ze(){await Ke(f);const e=Object.keys(f);return await Promise.allSettled(e.filter(function(t){return f[t].enabled&&f[t].update}).map(function(t){return Q(t)})),await Promise.allSettled(e.filter(function(t){return f[t].enabled}).map(function(t){return q(t)})),e.filter(function(t){return!f[t].enabled&&f[t].update}).forEach(function(t){return Q(t)}),Yt}const Yt=function(){return Object.keys(P).forEach(function(e){return ee(e,!1)})},Qe=function(e){return P[e]?.settings};var Xt=Object.freeze({__proto__:null,evalPlugin:Ye,fetchPlugin:Q,getSettings:Qe,initPlugins:Ze,installPlugin:Je,plugins:f,removePlugin:Xe,startPlugin:q,stopPlugin:ee});function qe(e,t){let{walkable:n=[],ignore:r=[],maxDepth:o=100}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0;function i(c,l){let{walkable:m=[],ignore:y=[]}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(a+=1,!(a>o)){if(typeof l=="string"){if(c.hasOwnProperty(l))return c[l]}else if(l(c))return c;if(c){if(Array.isArray(c))for(const A of c){const h=i(A,l,{walkable:m,ignore:y});if(h)return h}else if(typeof c=="object"){for(const A of Object.keys(c))if(!(m!=null&&m.includes(A))&&!y.includes(A))try{const h=i(c[A],l,{walkable:m,ignore:y});if(h)return h}catch{}}}}}return i(e,t,{walkable:n,ignore:r})}function et(e,t){return qe(e,t,{walkable:["props","children","child","sibling"]})}function be(e){let{label:t,icon:n,noPadding:r=!1,noAnimation:o=!1,children:a}=e;const[i,c]=React.useState(!0);return React.createElement(React.Fragment,null,React.createElement(g.FormRow,{label:t,leading:n&&React.createElement(g.FormRow.Icon,{source:s(n)}),trailing:React.createElement(g.FormRow.Arrow,{style:{transform:[{rotate:`${i?180:90}deg`}]}}),onPress:function(){c(!i),o||u.LayoutAnimation.configureNext(u.LayoutAnimation.Presets.easeInEaseOut)}}),!i&&React.createElement(React.Fragment,null,React.createElement(g.FormDivider,null),React.createElement(u.View,{style:!r&&{paddingHorizontal:15}},a)))}const g=d("Form","FormSection"),Ee=d("Button","Text","View"),tt=J("StaticSearchBarContainer"),nt=d("alertDarkStyles","alertLightStyles").default;var Zt=Object.freeze({__proto__:null,Alert:nt,ErrorBoundary:D,Forms:g,General:Ee,Search:tt,Summary:be});const rt=d("colors","meta"),k=W.ThemeColorMap??rt?.colors,Qt=W.Colors??rt?.unsafe_rawColors;var qt=Object.freeze({__proto__:null,rawColors:Qt,semanticColors:k});function en(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function te(e){return te=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},te(e)}function nn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_e(e,t)}function rn(e,t){return t&&(on(t)==="object"||typeof t=="function")?t:en(e)}function _e(e,t){return _e=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},_e(e,t)}var on=function(e){return e&&typeof Symbol<"u"&&e.constructor===Symbol?"symbol":typeof e};function an(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cn(e){var t=an();return function(){var n=te(e),r;if(t){var o=te(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return rn(this,r)}}const ne=d("Looks","Colors","Sizes"),we=B.createThemedStyleSheet({view:{flex:1,flexDirection:"column",margin:10},title:{fontSize:20,textAlign:"center",marginBottom:5},codeblock:{fontFamily:W.Fonts.CODE_SEMIBOLD,includeFontPadding:!1,fontSize:12,backgroundColor:k.BACKGROUND_SECONDARY,padding:5,borderRadius:5,marginBottom:5}});let D=function(e){nn(n,e);var t=cn(n);function n(o){tn(this,n);var a;return a=t.call(this,o),a.state={hasErr:!1},a}var r=n.prototype;return r.render=function(){var o=this;return this.state.hasErr?L.createElement(u.ScrollView,{style:we.view},L.createElement(g.FormText,{style:we.title},"Uh oh."),L.createElement(g.FormText,{style:we.codeblock},this.state.errText),L.createElement(ne,{color:ne.Colors.RED,size:ne.Sizes.MEDIUM,look:ne.Looks.FILLED,onPress:function(){return o.setState({hasErr:!1,errText:void 0})},text:"Retry"})):this.props.children},n}(L.Component);D.getDerivedStateFromError=function(e){return{hasErr:!0,errText:e.message}};var b=Z(j(X("VENDETTA_SETTINGS")));const _=Z(j(Ge("vendetta_loader.json"))),{FormRow:w,FormSection:ln,FormDivider:ot}=g;function sn(){const e=F.useNavigation();return x(b),React.createElement(D,null,React.createElement(ln,{key:"Vendetta",title:"Vendetta"},React.createElement(w,{label:"General",leading:React.createElement(w.Icon,{source:s("settings")}),trailing:w.Arrow,onPress:function(){return e.push("VendettaSettings")}}),React.createElement(ot,null),React.createElement(w,{label:"Plugins",leading:React.createElement(w.Icon,{source:s("debug")}),trailing:w.Arrow,onPress:function(){return e.push("VendettaPlugins")}}),b.developerSettings&&React.createElement(React.Fragment,null,React.createElement(ot,null),React.createElement(w,{label:"Developer",leading:React.createElement(w.Icon,{source:s("ic_progress_wrench_24px")}),trailing:w.Arrow,onPress:function(){return e.push("VendettaDeveloper")}}))))}const at="https://discord.gg/n9QQ4XhhJP",ct="https://github.com/vendetta-mod",it=/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;var un=Object.freeze({__proto__:null,DISCORD_SERVER:at,GITHUB:ct,HTTP_REGEX:it});const{FormInput:dn}=g,lt=d("openLazy","close");function fn(e){let{title:t,confirmText:n,confirmColor:r,onConfirm:o,cancelText:a,placeholder:i,initialValue:c=""}=e;const[l,m]=React.useState(c),[y,A]=React.useState("");function h(){Promise.resolve(o(l)).then(function(){lt.close()}).catch(function(v){A(v.message)})}return React.createElement(nt,{title:t,confirmText:n,confirmColor:r,isConfirmButtonDisabled:y.length!==0,onConfirm:h,cancelText:a,onCancel:function(){return lt.close()}},React.createElement(dn,{placeholder:i,value:l,onChangeText:function(v){m(v),y&&A("")},returnKeyType:"done",onSubmitEditing:h,error:y,autoFocus:!0,showBorder:!0,style:{paddingVertical:5,alignSelf:"stretch",paddingHorizontal:0}}))}const st=d("openLazy","close");function ut(e){const t=e;return typeof e.content=="string"?t.body=e.content:t.children=e.content,delete t.content,st.show(t)}const dt=function(e,t){return st.openLazy({importer:async function(){return function(){return React.createElement(e,t)}}})},ft=function(e){return dt(fn,e)};var mn=Object.freeze({__proto__:null,showConfirmationAlert:ut,showCustomAlert:dt,showInputAlert:ft});const{TouchableOpacity:gn,Image:pn}=Ee,hn=B.createThemedStyleSheet({icon:{marginRight:10,tintColor:k.HEADER_PRIMARY}});function Rn(){return React.createElement(gn,{onPress:function(){return me.getString().then(function(e){return ft({title:"Install Plugin",initialValue:it.test(e)?e:"",placeholder:"https://example.com/",onConfirm:Je,confirmText:"Install",confirmColor:void 0,cancelText:"Cancel"})})}},React.createElement(pn,{style:hn.icon,source:s("ic_add_24px")}))}function re(e){try{me.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}const{FormRow:mt,FormText:yn}=g;function gt(e){let{label:t,version:n,icon:r}=e;return React.createElement(mt,{label:t,leading:React.createElement(mt.Icon,{source:s(r)}),trailing:React.createElement(yn,null,n),onPress:function(){re(`${t} - ${n}`),E("Copied version to clipboard.",s("toast_copy_link"))}})}const{FormRow:S,FormSwitchRow:vn,FormSection:Se,FormDivider:G}=g,p=Fe();function bn(){x(b);const e=[{label:"Vendetta",version:p.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${p.discord.version} (${p.discord.build})`,icon:"Discord"},{label:"React",version:p.react.version,icon:"ic_category_16px"},{label:"React Native",version:p.react.nativeVersion,icon:"mobile"},{label:"Bytecode",version:p.hermes.bytecodeVersion,icon:"ic_server_security_24px"}],t=[{label:"Loader",version:p.vendetta.loader,icon:"ic_download_24px"},{label:"Operating System",version:`${p.os.name} ${p.os.version}`,icon:"ic_cog_24px"},...p.os.sdk?[{label:"SDK",version:p.os.sdk,icon:"ic_profile_badge_verified_developer_color"}]:[],{label:"Manufacturer",version:p.device.manufacturer,icon:"ic_badge_staff"},{label:"Brand",version:p.device.brand,icon:"ic_settings_boost_24px"},{label:"Model",version:p.device.model,icon:"ic_phonelink_24px"},{label:u.Platform.select({android:"Codename",ios:"Machine ID"}),version:p.device.codename,icon:"ic_compose_24px"}];return React.createElement(D,null,React.createElement(u.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(Se,{title:"Links",titleStyleType:"no_border"},React.createElement(S,{label:"Discord Server",leading:React.createElement(S.Icon,{source:s("Discord")}),trailing:S.Arrow,onPress:function(){return fe.openDeeplink(at)}}),React.createElement(G,null),React.createElement(S,{label:"GitHub",leading:React.createElement(S.Icon,{source:s("img_account_sync_github_white")}),trailing:S.Arrow,onPress:function(){return fe.openURL(ct)}})),React.createElement(Se,{title:"Actions"},React.createElement(S,{label:"Reload Discord",leading:React.createElement(S.Icon,{source:s("ic_message_retry")}),onPress:function(){return u.NativeModules.BundleUpdaterManager.reload()}}),React.createElement(G,null),React.createElement(vn,{label:"Developer Settings",leading:React.createElement(S.Icon,{source:s("ic_progress_wrench_24px")}),value:b.developerSettings,onValueChange:function(n){b.developerSettings=n}})),React.createElement(Se,{title:"Info"},React.createElement(be,{label:"Versions",icon:"ic_information_filled_24px"},e.map(function(n,r){return React.createElement(React.Fragment,null,React.createElement(gt,{label:n.label,version:n.version,icon:n.icon}),r!==e.length-1&&React.createElement(G,null))})),React.createElement(G,null),React.createElement(be,{label:"Platform",icon:"ic_mobile_device"},t.map(function(n,r){return React.createElement(React.Fragment,null,React.createElement(gt,{label:n.label,version:n.version,icon:n.icon}),r!==t.length-1&&React.createElement(G,null))})))))}var Te;(function(e){e.BRAND="brand",e.RED="red",e.GREEN="green",e.PRIMARY="primary",e.TRANSPARENT="transparent",e.GREY="grey",e.LIGHTGREY="lightgrey",e.WHITE="white",e.LINK="link"})(Te||(Te={}));var pt;(function(e){e[e.BUILT_IN=0]="BUILT_IN",e[e.BUILT_IN_TEXT=1]="BUILT_IN_TEXT",e[e.BUILT_IN_INTEGRATION=2]="BUILT_IN_INTEGRATION",e[e.BOT=3]="BOT",e[e.PLACEHOLDER=4]="PLACEHOLDER"})(pt||(pt={}));var ht;(function(e){e[e.SUB_COMMAND=1]="SUB_COMMAND",e[e.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",e[e.STRING=3]="STRING",e[e.INTEGER=4]="INTEGER",e[e.BOOLEAN=5]="BOOLEAN",e[e.USER=6]="USER",e[e.CHANNEL=7]="CHANNEL",e[e.ROLE=8]="ROLE",e[e.MENTIONABLE=9]="MENTIONABLE",e[e.NUMBER=10]="NUMBER",e[e.ATTACHMENT=11]="ATTACHMENT"})(ht||(ht={}));var Rt;(function(e){e[e.CHAT=1]="CHAT",e[e.USER=2]="USER",e[e.MESSAGE=3]="MESSAGE"})(Rt||(Rt={}));const{FormRow:Ae,FormSwitch:En}=g,{TouchableOpacity:oe,Image:ae}=Ee,N=B.createThemedStyleSheet({card:{backgroundColor:k?.BACKGROUND_SECONDARY,borderRadius:5,marginHorizontal:10,marginBottom:10},header:{padding:0,backgroundColor:k?.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:k?.INTERACTIVE_NORMAL}});function _n(e){let{plugin:t,index:n}=e;const r=Qe(t.id),o=F.useNavigation(),[a,i]=React.useState(!1);return a?null:React.createElement(u.View,{style:[N.card,{marginTop:n===0?10:0}]},React.createElement(Ae,{style:N.header,label:`${t.manifest.name} by ${t.manifest.authors.map(function(c){return c.name}).join(", ")}`,leading:React.createElement(Ae.Icon,{source:s(t.manifest.vendetta?.icon||"ic_application_command_24px")}),trailing:React.createElement(En,{style:u.Platform.OS==="android"&&{marginVertical:-15},value:t.enabled,onValueChange:function(c){try{c?q(t.id):ee(t.id)}catch(l){E(l.message,s("Small"))}}})}),React.createElement(Ae,{label:t.manifest.description,trailing:React.createElement(u.View,{style:N.actions},React.createElement(oe,{onPress:function(){return ut({title:"Wait!",content:`Are you sure you wish to delete ${t.manifest.name}?`,confirmText:"Delete",cancelText:"Cancel",confirmColor:Te.RED,onConfirm:function(){try{Xe(t.id),i(!0)}catch(c){E(c.message,s("Small"))}}})}},React.createElement(ae,{style:N.icon,source:s("ic_message_delete")})),React.createElement(oe,{onPress:function(){re(t.id),E("Copied plugin URL to clipboard.",s("toast_copy_link"))}},React.createElement(ae,{style:N.icon,source:s("copy")})),React.createElement(oe,{onPress:function(){t.update=!t.update,E(`${t.update?"Enabled":"Disabled"} updates for ${t.manifest.name}.`,s("toast_image_saved"))}},React.createElement(ae,{style:N.icon,source:s(t.update?"Check":"Small")})),r&&React.createElement(oe,{onPress:function(){return o.push("VendettaCustomPage",{title:t.manifest.name,render:r})}},React.createElement(ae,{style:N.icon,source:s("settings")})))}))}function wn(){return x(f),React.createElement(D,null,React.createElement(u.View,{style:{flex:1}},React.createElement(u.FlatList,{data:Object.values(f),renderItem:function(e){let{item:t,index:n}=e;return React.createElement(_n,{plugin:t,index:n})},keyExtractor:function(e){return e.id}})))}const{FormSection:$e,FormRow:T,FormSwitchRow:yt,FormInput:vt,FormDivider:ce}=g;function Sn(){const e=F.useNavigation();return x(b),x(_),React.createElement(D,null,React.createElement(u.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement($e,{title:"Debug",titleStyleType:"no_border"},React.createElement(vt,{value:b.debuggerUrl,onChange:function(t){return b.debuggerUrl=t},placeholder:"127.0.0.1:9090",title:"DEBUGGER URL"}),React.createElement(ce,null),React.createElement(T,{label:"Connect to debug websocket",leading:React.createElement(T.Icon,{source:s("copy")}),onPress:function(){return ke(b.debuggerUrl)}}),window.__vendetta_rdc&&React.createElement(React.Fragment,null,React.createElement(ce,null),React.createElement(T,{label:"Connect to React DevTools",leading:React.createElement(T.Icon,{source:s("ic_badge_staff")}),onPress:function(){return window.__vendetta_rdc?.connectToDevTools({host:b.debuggerUrl.split(":")?.[0],resolveRNStyle:u.StyleSheet.flatten})}}))),window.__vendetta_loader?.features.loaderConfig&&React.createElement($e,{title:"Loader config"},React.createElement(yt,{label:"Load from custom url",subLabel:"Load Vendetta from a custom endpoint.",leading:React.createElement(T.Icon,{source:s("copy")}),value:_.customLoadUrl.enabled,onValueChange:function(t){_.customLoadUrl.enabled=t}}),React.createElement(ce,null),_.customLoadUrl.enabled&&React.createElement(React.Fragment,null,React.createElement(vt,{value:_.customLoadUrl.url,onChange:function(t){return _.customLoadUrl.url=t},placeholder:"http://localhost:4040/vendetta.js",title:"VENDETTA URL"}),React.createElement(ce,null)),window.__vendetta_loader.features.devtools&&React.createElement(yt,{label:"Load React DevTools",subLabel:`Version: ${window.__vendetta_loader.features.devtools.version}`,leading:React.createElement(T.Icon,{source:s("ic_badge_staff")}),value:_.loadReactDevTools,onValueChange:function(t){_.loadReactDevTools=t}})),React.createElement($e,{title:"Other"},React.createElement(T,{label:"Asset Browser",leading:React.createElement(T.Icon,{source:s("ic_media_upload")}),trailing:T.Arrow,onPress:function(){return e.push("VendettaAssetBrowser")}}))))}const{FormRow:Tn}=g,An=B.createThemedStyleSheet({asset:{width:32,height:32}});function $n(e){let{asset:t}=e;return React.createElement(Tn,{label:`${t.name} - ${t.id}`,trailing:React.createElement(u.Image,{source:t.id,style:An.asset}),onPress:function(){re(t.name),E("Copied asset name to clipboard.",s("toast_copy_link"))}})}const{FormDivider:In}=g,Dn=B.createThemedStyleSheet({search:{margin:0,padding:15,borderBottomWidth:0,background:"none",backgroundColor:"none"}});function Cn(){const[e,t]=React.useState("");return React.createElement(D,null,React.createElement(u.View,{style:{flex:1}},React.createElement(tt,{style:Dn.search,onChangeText:function(n){return t(n)},placeholder:"Search"}),React.createElement(u.FlatList,{data:Object.values(I).filter(function(n){return n.name.includes(e)||n.id.toString()===e}),renderItem:function(n){let{item:r}=n;return React.createElement(React.Fragment,null,React.createElement($n,{asset:r}),React.createElement(In,null))},keyExtractor:function(n){return n.name}})))}const On=J("getScreens",!1),Pn=J("UserSettingsOverviewWrapper",!1);function Nn(){const e=new Array;return e.push($("default",On,function(t,n){return{...n,VendettaSettings:{title:"Vendetta",render:bn},VendettaPlugins:{title:"Plugins",render:wn,headerRight:Rn},VendettaDeveloper:{title:"Developer",render:Sn},VendettaAssetBrowser:{title:"Asset Browser",render:Cn},VendettaCustomPage:{title:"Vendetta Page",render:function(r){let{render:o,...a}=r;const i=F.useNavigation();return React.useEffect(function(){return a&&i.setOptions(a)}),React.createElement(D,null,React.createElement(o,null))}}}})),$("default",Pn,function(t,n){const r=et(n.props.children,function(o){return o.type&&o.type.name==="UserSettingsOverview"});e.push($("renderSupportAndAcknowledgements",r.type.prototype,function(o,a){let{props:{children:i}}=a;const c=i.findIndex(function(l){return l?.type?.name==="UploadLogsButton"});c!==-1&&i.splice(c,1)})),e.push($("render",r.type.prototype,function(o,a){let{props:{children:i}}=a;const c=[de.Messages.BILLING_SETTINGS,de.Messages.PREMIUM_SETTINGS],l=i.findIndex(function(m){return c.includes(m.props.title)});i.splice(l===-1?4:l,0,React.createElement(sn,null))}))},!0),function(){return e.forEach(function(t){return t()})}}const Bn=d("updateTheme","overrideTheme"),bt=d("setAMOLEDThemeEnabled"),Et=ue("ThemeStore"),Ln=ue("UnsyncedUserSettingsStore");function _t(){const e=Et.theme||"dark";Bn.overrideTheme(e),bt&&Ln.useAMOLEDTheme===2&&bt.setAMOLEDThemeEnabled(!0),pe.unsubscribe("I18N_LOAD_START",_t)}function xn(){try{Et&&pe.subscribe("I18N_LOAD_START",_t)}catch(e){O.error("Failed to fix theme...",e)}}function kn(e){return Object.isFrozen(e)?Object.assign({},e):e}var Mn=Object.freeze({__proto__:null,copyText:re,findInReactTree:et,findInTree:qe,safeFetch:ve,unfreeze:kn});function ie(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const o={...e};return n.forEach(function(a){return delete o[a]}),o}async function Fn(e){return{patcher:ie(Mt,"unpatchAll"),metro:{...At,common:{...Pt}},constants:un,utils:Mn,debug:ie(zt,"versionHash","patchLogHook"),ui:{components:Zt,toasts:Gt,alerts:mn,assets:jt,...qt},plugins:ie(Xt,"initPlugins"),commands:ie(Wt,"patchCommands"),storage:Jt,settings:b,loader:{identity:window.__vendetta_loader,config:_},logger:O,version:Re,unload:function(){e.filter(function(t){return typeof t=="function"}).forEach(function(t){return t()}),delete window.vendetta}}}console.log("Hello from Vendetta!"),async function(){try{const e=await Promise.all([Me(),Le(),Ve(),xn(),Nn()]);window.vendetta=await Fn(e),e.push(await Ze()),O.log("Vendetta is ready!")}catch(e){alert(`Vendetta failed to initialize... ${e.stack||e.toString()}`)}}()})();
//# sourceURL=Vendetta