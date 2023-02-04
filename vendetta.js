"use strict";(()=>{var Rt=Object.defineProperty;var v=(e,t)=>{for(var o in t)Rt(e,o,{get:t[o],enumerable:!0})};var Ie={};v(Ie,{connectToDebugger:()=>Re,getDebugInfo:()=>Pe,patchLogHook:()=>Ee,socket:()=>x,versionHash:()=>te});var he={};v(he,{Flux:()=>At,FluxDispatcher:()=>Z,NavigationNative:()=>E,React:()=>Ft,ReactNative:()=>m,assets:()=>$,channels:()=>It,clipboard:()=>ge,commands:()=>Y,constants:()=>ot,i18n:()=>X,invites:()=>ye,navigation:()=>Dt,navigationStack:()=>_t,stylesheet:()=>T,toasts:()=>ue,url:()=>fe});var pe={};v(pe,{find:()=>L,findAll:()=>de,findByDisplayName:()=>k,findByDisplayNameAll:()=>Pt,findByProps:()=>d,findByPropsAll:()=>Et,findByStoreName:()=>Q,modules:()=>me});var K=e=>Object.values(window.modules).find(t=>t.publicModule.exports?.[e]).publicModule.exports;window.React=K("createElement");var m=K("Text"),ot=K("ThemeColorMap"),q=K("isMoment");function rt(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let t=Number(e),o=window.modules[t].publicModule.exports;if(!o||o===window||o.proxygone===null){rt(t);continue}}var nt=(e,t=!1)=>o=>{let r=[],n=q?.locale();for(let i in e){let a=Number(i),s=e[a].publicModule.exports;if(!e[a].isInitialized)try{__r(a),n&&n!==q.locale()&&q.locale(n)}catch{}if(!s){rt(a);continue}try{if(s.default&&s.__esModule&&o(s.default)){if(t)return s.default;r.push(s.default)}if(o(s)){if(t)return s;r.push(s)}}catch(l){console.error(`Failed to getModule... ${l.stack||l.toString()}`)}}if(!t)return r},me=window.modules,L=nt(me,!0),de=nt(me),it=e=>t=>e.every(o=>t[o]!==void 0),st=(e,t)=>t?o=>o.name===e:o=>o?.default?.name===e,d=(...e)=>L(it(e)),Et=(...e)=>de(it(e)),k=(e,t=!0)=>L(st(e,t)),Pt=(e,t=!0)=>de(st(e,t)),Q=e=>L(t=>t.getName?.()===e);var It=d("getVoiceChannelId"),X=d("Messages"),fe=d("openURL"),ue=L(e=>e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop),T=d("createThemedStyleSheet"),ge=d("setString","getString","hasString"),$=d("registerAsset"),ye=d("acceptInviteAndTransitionToInviteChannel"),Y=d("getBuiltInCommands"),Dt=d("pushLazy"),_t=d("createStackNavigator"),E=d("NavigationContainer"),At=d("connectStores"),Z=d("_currentDispatchActionType"),Ft=window.React;var we={};v(we,{after:()=>w,before:()=>Nt,instead:()=>Mt,unpatchAll:()=>ct});var be=["a","b","i"],R=new Map;function at(e,t,o,r,n){let i=R.get(t)?.[e];if(!i)return n?Reflect.construct(t[e],o,r):t[e].apply(r,o);for(let l of i.b.values()){let b=l.call(r,o);Array.isArray(b)&&(o=b)}let a=(...l)=>n?Reflect.construct(i.o,l,r):i.o.apply(r,l);for(let l of i.i.values()){let b=a;a=(...F)=>l.call(r,F,b)}let s=a(...o);for(let l of i.a.values())s=l.call(r,o,s)??s;return s}function ve(e,t,o,r){let n=R.get(e),i=n?.[t];return i?.[r].has(o)?(i[r].delete(o),be.every(a=>i[a].size===0)&&(Reflect.defineProperty(e,t,{value:i.o,writable:!0,configurable:!0})||(e[t]=i.o),delete n[t]),Object.keys(n).length==0&&R.delete(e),!0):!1}function ct(){for(let[e,t]of R.entries())for(let o in t)for(let r of be)for(let n of t[o]?.[r].keys()??[])ve(e,o,n,r)}var ee=e=>(t,o,r,n=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);R.has(o)||R.set(o,{});let i=R.get(o);if(!i[t]){let l=o[t];i[t]={o:l,b:new Map,i:new Map,a:new Map};let b=(S,N,U)=>{let Tt=at(t,o,N,S,U);return n&&s(),Tt},F=new Proxy(l,{apply:(S,N,U)=>b(N,U,!1),construct:(S,N)=>b(l,N,!0),get:(S,N,U)=>N=="toString"?l.toString.bind(l):Reflect.get(S,N,U)});Reflect.defineProperty(o,t,{value:F,configurable:!0,writable:!0})||(o[t]=F)}let a=Symbol(),s=()=>ve(o,t,a,e);return i[t][e].set(a,r),s};var Nt=ee("b"),Mt=ee("i"),w=ee("a");var lt={...we};var Se={};v(Se,{all:()=>P,find:()=>Vt,getAssetByID:()=>Ot,getAssetByName:()=>Ct,getAssetIDByName:()=>c,patchAssets:()=>xe});var P={};function xe(){let e=w("registerAsset",$,(t,o)=>{let r=t[0];P[r.name]={...r,id:o}});for(let t=1;;t++){let o=$.getAssetByID(t);if(!o)break;P[o.name]||(P[o.name]={...o,id:t})}return e}var Vt=e=>Object.values(P).find(e),Ct=e=>P[e],Ot=e=>$.getAssetByID(e),c=e=>P[e]?.id;var Te={};v(Te,{showToast:()=>f});function f(e,t){return ue.open({content:e,source:t})}var Lt=d("setLogFn").default,kt=new Lt("Vendetta"),g=kt;var x;function Re(e){if(x!==void 0&&x.readyState!==WebSocket.CLOSED&&x.close(),e===""){f("Invalid debugger URL!",c("Small"));return}x=new WebSocket(`ws://${e}`),x.addEventListener("open",()=>f("Connected to debugger.",c("Check"))),x.addEventListener("message",t=>{try{(0,eval)(t.data)}catch(o){console.error(o)}}),x.addEventListener("error",t=>{console.log(`Debugger error: ${t.message}`),f("An error occurred with the debugger connection!",c("Small"))})}function Ee(){let e=w("nativeLoggingHook",globalThis,t=>{x?.readyState===WebSocket.OPEN&&x.send(JSON.stringify({message:t[0],level:t[1]})),g.log(t[0])});return()=>{x&&x.close(),e()}}var te="a972936";function Pe(){let e=m.NativeModules.InfoDictionaryManager,t=m.NativeModules.DCDDeviceManager,o=window.HermesInternal.getRuntimeProperties(),r=o["OSS Release Version"],n="for RN ",i=m.Platform.constants,a=i.reactNativeVersion;return{vendetta:{version:te},discord:{version:e.Version,build:e.Build},react:{version:React.version,nativeVersion:r.startsWith(n)?r.substring(n.length):`${a.major}.${a.minor}.${a.patch}`},hermes:{version:r,buildType:o.Build,bytecodeVersion:o["Bytecode Version"]},...m.Platform.select({android:{os:{name:"Android",version:i.Release,sdk:i.Version}},ios:{os:{name:i.systemName,version:i.osVersion}}}),...m.Platform.select({android:{device:{manufacturer:i.Manufacturer,brand:i.Brand,model:i.Model,codename:t.device}},ios:{device:{manufacturer:t.deviceManufacturer,brand:t.deviceBrand,model:t.deviceModel,codename:t.device}}})}}var _e={};v(_e,{patchCommands:()=>De,registerCommand:()=>Bt});var G=[];function De(){let e=w("getBuiltInCommands",Y,(t,o)=>o.concat(G));return()=>{G=[],e()}}function Bt(e){let t=Y.getBuiltInCommands(1,!0,!1);t.sort(function(r,n){return parseInt(n.id)-parseInt(r.id)});let o=t[t.length-1];return e.id=(parseInt(o.id,10)-1).toString(),G.push(e),()=>G=G.filter(({id:r})=>r!==e.id)}var Oe={};v(Oe,{evalPlugin:()=>ut,fetchPlugin:()=>oe,getSettings:()=>Ce,initPlugins:()=>Ve,plugins:()=>y,removePlugin:()=>Me,startPlugin:()=>W,stopPlugin:()=>z});var Ne={};v(Ne,{awaitSyncWrapper:()=>Fe,createProxy:()=>ft,createStorage:()=>B,useProxy:()=>I,wrapSync:()=>H});var jt=Object.freeze({GET:"GET",SET:"SET",DEL:"DEL"});function Ae(){return{listeners:Object.values(jt).reduce((e,t)=>(e[t]=new Set,e),{}),on(e,t){this.listeners[e].has(t)||this.listeners[e].add(t)},off(e,t){this.listeners[e].delete(t)},once(e,t){let o=(r,n)=>{this.off(r,o),t(r,n)};this.on(e,o)},emit(e,t){for(let o of this.listeners[e])o(e,t)}}}var mt=m.NativeModules.MMKVManager,dt=Symbol("emitter accessor"),pt=Symbol("wrapSync promise accessor");function ft(e={}){let t=Ae();function o(r,n){return new Proxy(r,{get(i,a){if(a===dt)return t;let s=[...n,a],l=i[a];return l!=null?(t.emit("GET",{path:s,value:l}),typeof l=="object"?o(l,s):l):l},set(i,a,s){return i[a]=s,t.emit("SET",{path:[...n,a],value:s}),!0},deleteProperty(i,a){let s=delete i[a];return s&&t.emit("DEL",{path:[...n,a]}),s}})}return{proxy:o(e,[]),emitter:t}}function I(e){let t=e[dt],[,o]=React.useReducer(r=>~r,0);return React.useEffect(()=>{let r=()=>o();return t.on("SET",r),t.on("DEL",r),()=>{t.off("SET",r),t.off("DEL",r)}},[]),e}async function B(e){let t=JSON.parse(await mt.getItem(e)??"{}"),{proxy:o,emitter:r}=ft(t),n=()=>mt.setItem(e,JSON.stringify(o));return r.on("SET",n),r.on("DEL",n),o}function H(e){let t,o=[],r=n=>t?n():o.push(n);return e.then(n=>{t=n,o.forEach(i=>i())}),new Proxy({},{...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(n=>[n,(i,...a)=>Reflect[n](t??i,...a)])),get(n,i,a){return i===pt?r:Reflect.get(t??n,i,a)}})}var Fe=e=>new Promise(t=>e[pt](t));async function j(e,t){let o=await fetch(e,t);if(!o.ok)throw new Error("Request returned non-ok");return o}var y=H(B("VENDETTA_PLUGINS")),M={};async function oe(e,t=!0){if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in y)throw new Error("Plugin ID invalid or taken");let o;try{o=await(await j(e+"manifest.json",{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let r;try{r=await(await j(e+(o.main||"index.js"),{cache:"no-store"})).text()}catch{throw new Error(`Failed to fetch JS for ${e}`)}if(r.length===0)throw new Error(`Failed to fetch JS for ${e}`);y[e]={id:e,manifest:o,enabled:!1,update:!0,js:r},t&&await W(e)}async function ut(e){let t={...window.vendetta,plugin:{manifest:e.manifest,storage:await B(e.id)}},o=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,r=(0,eval)(o)(t),n=typeof r=="function"?r():r;return n.default||n}async function W(e){let t=y[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let o=await ut(t);M[e]=o,o.onLoad?.(),t.enabled=!0}catch(o){g.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,o);try{M[t.id]?.onUnload?.()}catch(r){g.error(`Plugin ${t.id} errored whilst unloading`,r)}delete M[e],t.enabled=!1}}function z(e,t=!0){let o=y[e],r=M[e];if(!o)throw new Error("Attempted to stop non-existent plugin");if(!r)throw new Error("Attempted to stop a non-started plugin");try{M[o.id]?.onUnload?.()}catch(n){g.error(`Plugin ${o.id} errored whilst unloading`,n)}delete M[e],t&&(o.enabled=!1)}function Me(e){y[e].enabled&&z(e),delete y[e]}async function Ve(){await Fe(y);let e=Object.keys(y);await Promise.allSettled(e.map(t=>oe(t,!1)));for(let t of e.filter(o=>y[o].enabled))W(t);return Ut}var Ut=()=>Object.keys(y).forEach(e=>z(e,!1)),Ce=e=>M[e]?.settings;function J(e,t,{walkable:o=[],ignore:r=[],maxDepth:n=100}={}){let i=0;function a(s,l,{walkable:b=[],ignore:F=[]}={}){if(i+=1,!(i>n)){if(typeof l=="string"){if(s.hasOwnProperty(l))return s[l]}else if(l(s))return s;if(s){if(Array.isArray(s))for(let O of s){let S=a(O,l,{walkable:b,ignore:F});if(S)return S}else if(typeof s=="object"){for(let O of Object.keys(s))if(!(b!=null&&b.includes(O))&&!F.includes(O))try{let S=a(s[O],l,{walkable:b,ignore:F});if(S)return S}catch{}}}}}return a(e,t,{walkable:o,ignore:r})}var re=(e,t)=>J(e,t,{walkable:["props","children","child","sibling"]});var Be={};v(Be,{Forms:()=>p,General:()=>Le,Search:()=>ke});var p=d("Form","FormSection"),Le=d("Button","Text","View"),ke=k("StaticSearchBarContainer");var u=H(B("VENDETTA_SETTINGS"));var{FormRow:D,FormSection:$t,FormDivider:gt}=p;function je(){let e=E.useNavigation();return I(u),React.createElement($t,{key:"Vendetta",title:"Vendetta"},React.createElement(D,{label:"General",leading:React.createElement(D.Icon,{source:c("settings")}),trailing:D.Arrow,onPress:()=>e.push("VendettaSettings")}),React.createElement(gt,null),React.createElement(D,{label:"Plugins",leading:React.createElement(D.Icon,{source:c("debug")}),trailing:D.Arrow,onPress:()=>e.push("VendettaPlugins")}),u.developerSettings&&React.createElement(React.Fragment,null,React.createElement(gt,null),React.createElement(D,{label:"Developer",leading:React.createElement(D.Icon,{source:c("ic_progress_wrench_24px")}),trailing:D.Arrow,onPress:()=>e.push("VendettaDeveloper")})))}var Ge={};v(Ge,{DISCORD_SERVER:()=>Ue,GITHUB:()=>$e});var Ue="n9QQ4XhhJP",$e="https://github.com/vendetta-mod";function _(e){try{ge.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}var{FormRow:yt,FormText:Gt}=p;function ne({label:e,version:t,icon:o}){return React.createElement(yt,{label:e,leading:React.createElement(yt.Icon,{source:c(o)}),trailing:React.createElement(Gt,null,t),onPress:()=>{_(`${e} - ${t}`),f("Copied version to clipboard.",c("toast_copy_link"))}})}var{FormRow:A,FormSwitchRow:Ht,FormSection:ie,FormDivider:se}=p,h=Pe();function He(){I(u);let e=[{label:"Vendetta",version:h.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${h.discord.version} (${h.discord.build})`,icon:"Discord"},{label:"React",version:h.react.version,icon:"ic_category_16px"},{label:"React Native",version:h.react.nativeVersion,icon:"mobile"},{label:"Bytecode",version:h.hermes.bytecodeVersion,icon:"ic_server_security_24px"}],t=[{label:"Operating System",version:`${h.os.name} ${h.os.version}`,icon:"ic_cog_24px"},...h.os.sdk?[{label:"SDK",version:h.os.sdk,icon:"ic_profile_badge_verified_developer_color"}]:[],{label:"Manufacturer",version:h.device.manufacturer,icon:"ic_badge_staff"},{label:"Brand",version:h.device.brand,icon:"ic_settings_boost_24px"},{label:"Model",version:h.device.model,icon:"ic_phonelink_24px"},{label:m.Platform.select({android:"Codename",ios:"Machine ID"}),version:h.device.codename,icon:"ic_compose_24px"}];return React.createElement(m.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(ie,{title:"Links",titleStyleType:"no_border"},React.createElement(A,{label:"Discord Server",leading:React.createElement(A.Icon,{source:c("Discord")}),trailing:A.Arrow,onPress:()=>ye.acceptInviteAndTransitionToInviteChannel({inviteKey:Ue})}),React.createElement(se,null),React.createElement(A,{label:"GitHub",leading:React.createElement(A.Icon,{source:c("img_account_sync_github_white")}),trailing:A.Arrow,onPress:()=>fe.openURL($e)})),React.createElement(ie,{title:"Versions"},e.map(o=>React.createElement(React.Fragment,null,React.createElement(ne,{label:o.label,version:o.version,icon:o.icon}),React.createElement(se,null)))),React.createElement(ie,{title:"Platform Info"},t.map(o=>React.createElement(React.Fragment,null,React.createElement(ne,{label:o.label,version:o.version,icon:o.icon}),React.createElement(se,null)))),React.createElement(ie,{title:"Actions"},React.createElement(A,{label:"Reload Discord",leading:React.createElement(A.Icon,{source:c("ic_message_retry")}),onPress:()=>m.NativeModules.BundleUpdaterManager.reload()}),React.createElement(se,null),React.createElement(Ht,{label:"Developer Settings",leading:React.createElement(A.Icon,{source:c("ic_progress_wrench_24px")}),value:u.developerSettings,onValueChange:o=>{u.developerSettings=o}})))}var{FormRow:We,FormSwitch:Wt}=p,{TouchableOpacity:ae,Image:ce}=Le,V=T.createThemedStyleSheet({card:{backgroundColor:T.ThemeColorMap.BACKGROUND_SECONDARY,borderRadius:5,margin:10,marginTop:0},header:{backgroundColor:T.ThemeColorMap.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{justifyContent:"flex-end",flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:T.ThemeColorMap.INTERACTIVE_NORMAL}});function ze({plugin:e}){let t=Ce(e.id),o=E.useNavigation(),[r,n]=React.useState(!1);return r?null:React.createElement(m.View,{style:V.card},React.createElement(We,{style:V.header,label:`${e.manifest.name} by ${e.manifest.authors.map(i=>i.name).join(", ")}`,leading:React.createElement(We.Icon,{source:c(e.manifest.vendetta?.icon||"ic_application_command_24px")}),trailing:React.createElement(Wt,{value:e.enabled,onValueChange:i=>{i?W(e.id):z(e.id)}})}),React.createElement(We,{label:e.manifest.description,trailing:React.createElement(m.View,{style:V.actions},React.createElement(ae,{onPress:()=>{Me(e.id),n(!0)}},React.createElement(ce,{style:V.icon,source:c("ic_message_delete")})),React.createElement(ae,{onPress:()=>{_(e.id),f("Copied plugin URL to clipboard.",c("toast_copy_link"))}},React.createElement(ce,{style:V.icon,source:c("copy")})),React.createElement(ae,{onPress:()=>{e.update=!e.update,f(`${e.update?"Enabled":"Disabled"} updates for ${e.manifest.name}.`,c("toast_image_saved"))}},React.createElement(ce,{style:V.icon,source:c(e.update?"Check":"Small")})),t&&React.createElement(ae,{onPress:()=>o.push("VendettaCustomPage",{title:e.manifest.name,render:t})},React.createElement(ce,{style:V.icon,source:c("settings")})))}))}var{FormInput:zt,FormRow:ht}=p;function Je(){I(y);let[e,t]=React.useState("");return React.createElement(m.View,{style:{flex:1}},React.createElement(zt,{value:e,onChange:o=>t(o),placeholder:"https://example.com/",title:"PLUGIN URL"}),React.createElement(ht,{label:"Install plugin",leading:React.createElement(ht.Icon,{source:c("ic_add_18px")}),onPress:()=>{oe(e).then(()=>{t("")}).catch(o=>{f(o.message,c("Small"))})}}),React.createElement(m.FlatList,{style:{marginTop:10},data:Object.values(y),renderItem:({item:o})=>React.createElement(ze,{plugin:o}),keyExtractor:o=>o.id}))}var{FormSection:bt,FormRow:C,FormInput:Jt,FormDivider:vt}=p;function Ke(){let e=E.useNavigation();return I(u),React.createElement(m.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(bt,{title:"Debug",titleStyleType:"no_border"},React.createElement(Jt,{value:u.debuggerUrl,onChange:t=>u.debuggerUrl=t,placeholder:"127.0.0.1:9090",title:"DEBUGGER URL"}),React.createElement(vt,null),React.createElement(C,{label:"Connect to debug websocket",leading:React.createElement(C.Icon,{source:c("copy")}),onPress:()=>Re(u.debuggerUrl)}),React.createElement(vt,null),window.__vendetta_rdc&&React.createElement(C,{label:"Connect to React DevTools",leading:React.createElement(C.Icon,{source:c("ic_badge_staff")}),onPress:()=>{try{window.__vendetta_rdc?.connectToDevTools({host:u.debuggerUrl.split(":")?.[0],resolveRNStyle:m.StyleSheet.flatten})}catch(t){g.error("Failed to connect to React DevTools!",t),f("Failed to connect to React DevTools!",c("Small"))}}})),React.createElement(bt,{title:"Other"},React.createElement(C,{label:"Asset Browser",leading:React.createElement(C.Icon,{source:c("ic_media_upload")}),trailing:C.Arrow,onPress:()=>e.push("VendettaAssetBrowser")})))}var{FormRow:Kt}=p,qt=T.createThemedStyleSheet({asset:{width:32,height:32}});function qe({asset:e}){return React.createElement(Kt,{label:`${e.name} - ${e.id}`,trailing:React.createElement(m.Image,{source:e.id,style:qt.asset}),onPress:()=>{_(e.name),f("Copied asset name to clipboard.",c("toast_copy_link"))}})}var{FormDivider:Qt}=p,Xt=T.createThemedStyleSheet({search:{margin:0,padding:15,borderBottomWidth:0,background:"none",backgroundColor:"none"}});function Qe(){let[e,t]=React.useState("");return React.createElement(m.View,{style:{flex:1}},React.createElement(ke,{style:Xt.search,onChangeText:o=>t(o),placeholder:"Search"}),React.createElement(m.FlatList,{data:Object.values(P).filter(o=>o.name.includes(e)||o.id.toString()===e),renderItem:({item:o})=>React.createElement(React.Fragment,null,React.createElement(qe,{asset:o}),React.createElement(Qt,null)),keyExtractor:o=>o.name}))}var Yt=k("getScreens",!1),Zt=k("UserSettingsOverviewWrapper",!1);function Xe(){let e=new Array;return e.push(w("default",Yt,(t,o)=>({...o,VendettaSettings:{title:"Vendetta",render:He},VendettaPlugins:{title:"Plugins",render:Je},VendettaDeveloper:{title:"Developer",render:Ke},VendettaAssetBrowser:{title:"Asset Browser",render:Qe},VendettaCustomPage:{title:"Vendetta Page",render:({render:r,...n})=>{let i=E.useNavigation();return React.useEffect(()=>n&&i.setOptions(n)),React.createElement(r,null)}}}))),w("default",Zt,(t,o)=>{let r=re(o.props.children,n=>n.type&&n.type.name==="UserSettingsOverview");e.push(w("renderSupportAndAcknowledgements",r.type.prototype,(n,{props:{children:i}})=>{let a=i.findIndex(s=>s?.type?.name==="UploadLogsButton");a!==-1&&i.splice(a,1)})),e.push(w("render",r.type.prototype,(n,{props:{children:i}})=>{let a=[X.Messages.BILLING_SETTINGS,X.Messages.PREMIUM_SETTINGS],s=i.findIndex(l=>a.includes(l.props.title));i.splice(s===-1?4:s,0,React.createElement(je,null))}))},!0),()=>e.forEach(t=>t())}var eo=d("updateTheme","overrideTheme"),wt=d("setAMOLEDThemeEnabled"),xt=Q("ThemeStore"),to=Q("UnsyncedUserSettingsStore");function St(){let e=xt.theme||"dark";eo.overrideTheme(e),wt&&to.useAMOLEDTheme===2&&wt.setAMOLEDThemeEnabled(!0),Z.unsubscribe("I18N_LOAD_START",St)}function Ye(){try{xt&&Z.subscribe("I18N_LOAD_START",St)}catch(e){g.error("Failed to fix theme...",e)}}var et={};v(et,{copyText:()=>_,findInReactTree:()=>re,findInTree:()=>J,safeFetch:()=>j,unfreeze:()=>Ze});function Ze(e){return Object.isFrozen(e)?Object.assign({},e):e}function le(e,...t){let o={...e};return t.forEach(r=>delete o[r]),o}async function tt(e){return{patcher:le(lt,"unpatchAll"),metro:{...pe,common:{...he}},constants:Ge,utils:et,debug:le(Ie,"versionHash","patchLogHook"),ui:{components:Be,toasts:Te,assets:Se},plugins:le(Oe,"initPlugins"),commands:le(_e,"patchCommands"),storage:Ne,settings:u,logger:g,version:te,unload:()=>{e.filter(t=>typeof t=="function").forEach(t=>t()),delete window.vendetta}}}console.log("Hello from Vendetta!");async function oo(){try{let e=await Promise.all([Ee(),xe(),De(),Ye(),Xe()]);window.vendetta=await tt(e),e.push(await Ve()),g.log("Vendetta is ready!")}catch(e){alert(`Vendetta failed to initialize... ${e.stack||e.toString()}`)}}oo();})();
//# sourceURL=Vendetta