"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3114],{3114:(ge,z,F)=>{F.d(z,{i7:()=>ie,LK:()=>D,ru:()=>A});var u=F(467);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var k=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(k||{});class E extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const Y=o=>{var e,t,i,n,r;const s=o.CapacitorCustomPlatform||null,a=o.Capacitor||{},l=a.Plugins=a.Plugins||{},c=o.CapacitorPlatforms,C=(null===(e=c?.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==s?s.name:(o=>{var e,t;return o?.androidBridge?"android":null!==(t=null===(e=o?.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(o)),oe=(null===(t=c?.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==C()),se=(null===(i=c?.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(d=>{const f=S.get(d);return!(!f?.platforms.has(C())&&!G(d))}),G=(null===(n=c?.currentPlatform)||void 0===n?void 0:n.getPluginHeader)||(d=>{var f;return null===(f=a.PluginHeaders)||void 0===f?void 0:f.find(_=>_.name===d)}),S=new Map,fe=(null===(r=c?.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((d,f={})=>{const _=S.get(d);if(_)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),_.proxy;const y=C(),U=G(d);let v;const me=function(){var m=(0,u.A)(function*(){return!v&&y in f?v=v="function"==typeof f[y]?yield f[y]():f[y]:null!==s&&!v&&"web"in f&&(v=v="function"==typeof f.web?yield f.web():f.web),v});return function(){return m.apply(this,arguments)}}(),I=m=>{let p;const g=(...b)=>{const P=me().then(h=>{const L=((m,p)=>{var g,b;if(!U){if(m)return null===(b=m[p])||void 0===b?void 0:b.bind(m);throw new E(`"${d}" plugin is not implemented on ${y}`,k.Unimplemented)}{const P=U?.methods.find(h=>p===h.name);if(P)return"promise"===P.rtype?h=>a.nativePromise(d,p.toString(),h):(h,L)=>a.nativeCallback(d,p.toString(),h,L);if(m)return null===(g=m[p])||void 0===g?void 0:g.bind(m)}})(h,m);if(L){const $=L(...b);return p=$?.remove,$}throw new E(`"${d}.${m}()" is not implemented on ${y}`,k.Unimplemented)});return"addListener"===m&&(P.remove=(0,u.A)(function*(){return p()})),P};return g.toString=()=>`${m.toString()}() { [capacitor code] }`,Object.defineProperty(g,"name",{value:m,writable:!1,configurable:!1}),g},K=I("addListener"),V=I("removeListener"),he=(m,p)=>{const g=K({eventName:m},p),b=function(){var h=(0,u.A)(function*(){const L=yield g;V({eventName:m,callbackId:L},p)});return function(){return h.apply(this,arguments)}}(),P=new Promise(h=>g.then(()=>h({remove:b})));return P.remove=(0,u.A)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield b()}),P},W=new Proxy({},{get(m,p){switch(p){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return U?he:K;case"removeListener":return V;default:return I(p)}}});return l[d]=W,S.set(d,{name:d,proxy:W,platforms:new Set([...Object.keys(f),...U?[y]:[]])}),W});return a.convertFileSrc||(a.convertFileSrc=d=>d),a.getPlatform=C,a.handleError=d=>o.console.error(d),a.isNativePlatform=oe,a.isPluginAvailable=se,a.pluginMethodNoop=(d,f,_)=>Promise.reject(`${_} does not have an implementation of "${f}".`),a.registerPlugin=fe,a.Exception=E,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},x=(o=>o.Capacitor=Y(o))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),R=x.registerPlugin;class j{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var i=this;let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),n&&this.sendRetainedArgumentsForEvent(e);const a=function(){var c=(0,u.A)(function*(){return i.removeListener(e,t)});return function(){return c.apply(this,arguments)}}();return Promise.resolve({remove:a})}removeAllListeners(){var e=this;return(0,u.A)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t,i){const n=this.listeners[e];if(n)n.forEach(r=>r(t));else if(i){let r=this.retainedEventArguments[e];r||(r=[]),r.push(t),this.retainedEventArguments[e]=r}}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new x.Exception(e,k.Unimplemented)}unavailable(e="not available"){return new x.Exception(e,k.Unavailable)}removeListener(e,t){var i=this;return(0,u.A)(function*(){const n=i.listeners[e];if(!n)return;const r=n.indexOf(t);i.listeners[e].splice(r,1),i.listeners[e].length||i.removeWindowListener(i.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(i=>{this.notifyListeners(e,i)}))}}const M=o=>encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),q=o=>o.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Z extends j{getCookies(){return(0,u.A)(function*(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[n,r]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=q(n).trim(),r=q(r).trim(),t[n]=r}),t})()}setCookie(e){return(0,u.A)(function*(){try{const t=M(e.key),i=M(e.value),n=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),s=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${n}; path=${r}; ${s};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,u.A)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,u.A)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,u.A)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}R("CapacitorCookies",{web:()=>new Z});const N=function(){var o=(0,u.A)(function*(e){return new Promise((t,i)=>{const n=new FileReader;n.onload=()=>{const r=n.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},n.onerror=r=>i(r),n.readAsDataURL(e)})});return function(t){return o.apply(this,arguments)}}();class ne extends j{request(e){return(0,u.A)(function*(){const t=((o,e={})=>{const t=Object.assign({method:o.method||"GET",headers:o.headers},e),n=((o={})=>{const e=Object.keys(o);return Object.keys(o).map(n=>n.toLocaleLowerCase()).reduce((n,r,s)=>(n[r]=o[e[s]],n),{})})(o.headers)["content-type"]||"";if("string"==typeof o.data)t.body=o.data;else if(n.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[s,a]of Object.entries(o.data||{}))r.set(s,a);t.body=r.toString()}else if(n.includes("multipart/form-data")||o.data instanceof FormData){const r=new FormData;if(o.data instanceof FormData)o.data.forEach((a,l)=>{r.append(l,a)});else for(const a of Object.keys(o.data))r.append(a,o.data[a]);t.body=r;const s=new Headers(t.headers);s.delete("content-type"),t.headers=s}else(n.includes("application/json")||"object"==typeof o.data)&&(t.body=JSON.stringify(o.data));return t})(e,e.webFetchExtra),i=((o,e=!0)=>o?Object.entries(o).reduce((i,n)=>{const[r,s]=n;let a,l;return Array.isArray(s)?(l="",s.forEach(c=>{a=e?encodeURIComponent(c):c,l+=`${r}=${a}&`}),l.slice(0,-1)):(a=e?encodeURIComponent(s):s,l=`${r}=${a}`),`${i}&${l}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),n=i?`${e.url}?${i}`:e.url,r=yield fetch(n,t),s=r.headers.get("content-type")||"";let l,c,{responseType:a="text"}=r.ok?e:{};switch(s.includes("application/json")&&(a="json"),a){case"arraybuffer":case"blob":c=yield r.blob(),l=yield N(c);break;case"json":l=yield r.json();break;default:l=yield r.text()}const w={};return r.headers.forEach((C,T)=>{w[T]=C}),{data:l,headers:w,status:r.status,url:r.url}})()}get(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}R("CapacitorHttp",{web:()=>new ne});var A=function(o){return o.Prompt="PROMPT",o.Camera="CAMERA",o.Photos="PHOTOS",o}(A||{}),O=function(o){return o.Rear="REAR",o.Front="FRONT",o}(O||{}),D=function(o){return o.Uri="uri",o.Base64="base64",o.DataUrl="dataUrl",o}(D||{});class B extends j{getPhoto(e){var t=this;return(0,u.A)(function*(){return new Promise(function(){var i=(0,u.A)(function*(n,r){if(e.webUseInput||e.source===A.Photos)t.fileInputExperience(e,n,r);else if(e.source===A.Prompt){let s=document.querySelector("pwa-action-sheet");s||(s=document.createElement("pwa-action-sheet"),document.body.appendChild(s)),s.header=e.promptLabelHeader||"Photo",s.cancelable=!1,s.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],s.addEventListener("onSelection",function(){var a=(0,u.A)(function*(l){0===l.detail?t.fileInputExperience(e,n,r):t.cameraExperience(e,n,r)});return function(l){return a.apply(this,arguments)}}())}else t.cameraExperience(e,n,r)});return function(n,r){return i.apply(this,arguments)}}())})()}pickImages(e){var t=this;return(0,u.A)(function*(){return new Promise(function(){var i=(0,u.A)(function*(n,r){t.multipleFileInputExperience(n,r)});return function(n,r){return i.apply(this,arguments)}}())})()}cameraExperience(e,t,i){var n=this;return(0,u.A)(function*(){if(customElements.get("pwa-camera-modal")){const r=document.createElement("pwa-camera-modal");r.facingMode=e.direction===O.Front?"user":"environment",document.body.appendChild(r);try{yield r.componentOnReady(),r.addEventListener("onPhoto",function(){var s=(0,u.A)(function*(a){const l=a.detail;null===l?i(new E("User cancelled photos app")):l instanceof Error?i(l):t(yield n._getCameraPhoto(l,e)),r.dismiss(),document.body.removeChild(r)});return function(a){return s.apply(this,arguments)}}()),r.present()}catch{n.fileInputExperience(e,t,i)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),n.fileInputExperience(e,t,i)})()}fileInputExperience(e,t,i){let n=document.querySelector("#_capacitor-camera-input");const r=()=>{var s;null===(s=n.parentNode)||void 0===s||s.removeChild(n)};n||(n=document.createElement("input"),n.id="_capacitor-camera-input",n.type="file",n.hidden=!0,document.body.appendChild(n),n.addEventListener("change",s=>{const a=n.files[0];let l="jpeg";if("image/png"===a.type?l="png":"image/gif"===a.type&&(l="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const c=new FileReader;c.addEventListener("load",()=>{if("dataUrl"===e.resultType)t({dataUrl:c.result,format:l});else if("base64"===e.resultType){const w=c.result.split(",")[1];t({base64String:w,format:l})}r()}),c.readAsDataURL(a)}else t({webPath:URL.createObjectURL(a),format:l}),r()}),n.addEventListener("cancel",s=>{i(new E("User cancelled photos app")),r()})),n.accept="image/*",n.capture=!0,e.source===A.Photos||e.source===A.Prompt?n.removeAttribute("capture"):e.direction===O.Front?n.capture="user":e.direction===O.Rear&&(n.capture="environment"),n.click()}multipleFileInputExperience(e,t){let i=document.querySelector("#_capacitor-camera-input-multiple");const n=()=>{var r;null===(r=i.parentNode)||void 0===r||r.removeChild(i)};i||(i=document.createElement("input"),i.id="_capacitor-camera-input-multiple",i.type="file",i.hidden=!0,i.multiple=!0,document.body.appendChild(i),i.addEventListener("change",r=>{const s=[];for(let a=0;a<i.files.length;a++){const l=i.files[a];let c="jpeg";"image/png"===l.type?c="png":"image/gif"===l.type&&(c="gif"),s.push({webPath:URL.createObjectURL(l),format:c})}e({photos:s}),n()}),i.addEventListener("cancel",r=>{t(new E("User cancelled photos app")),n()})),i.accept="image/*",i.click()}_getCameraPhoto(e,t){return new Promise((i,n)=>{const r=new FileReader,s=e.type.split("/")[1];"uri"===t.resultType?i({webPath:URL.createObjectURL(e),format:s,saved:!1}):(r.readAsDataURL(e),r.onloadend=()=>{const a=r.result;i("dataUrl"===t.resultType?{dataUrl:a,format:s,saved:!1}:{base64String:a.split(",")[1],format:s,saved:!1})},r.onerror=a=>{n(a)})})}checkPermissions(){var e=this;return(0,u.A)(function*(){if(typeof navigator>"u"||!navigator.permissions)throw e.unavailable("Permissions API not available in this browser");try{return{camera:(yield window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw e.unavailable("Camera permissions are not available in this browser")}})()}requestPermissions(){var e=this;return(0,u.A)(function*(){throw e.unimplemented("Not implemented on web.")})()}pickLimitedLibraryPhotos(){var e=this;return(0,u.A)(function*(){throw e.unavailable("Not implemented on web.")})()}getLimitedLibraryPhotos(){var e=this;return(0,u.A)(function*(){throw e.unavailable("Not implemented on web.")})()}}new B;const ie=R("Camera",{web:()=>new B})}}]);