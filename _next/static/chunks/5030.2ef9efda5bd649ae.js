(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5030],{74080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(10260),i=r(77697),o=r(85893),l=i._(r(67294)),u=n._(r(73935)),a=n._(r(23867)),s=r(35283),c=r(96594),d=r(23945);r(83179);let f=r(81928),p=n._(r(13872)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/frontend/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function v(e,t,r,n,i,o,l){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){let[t,r]=l.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:u,width:a,decoding:s,className:c,style:d,fetchPriority:f,placeholder:p,loading:m,unoptimized:h,fill:b,onLoadRef:y,onLoadingCompleteRef:I,setBlurComplete:S,setShowAltText:x,sizesInput:R,onLoad:P,onError:E,...w}=e;return(0,o.jsx)("img",{...w,...g(f),loading:m,width:a,height:u,decoding:s,"data-nimg":b?"fill":"1",className:c,style:d,sizes:i,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&v(e,p,y,I,S,h,R))},[r,p,y,I,S,E,h,R,t]),onLoad:e=>{v(e.currentTarget,p,y,I,S,h,R)},onError:e=>{x(!0),"empty"!==p&&S(!0),E&&E(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(d.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=m||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:u,onLoadingComplete:a}=e,v=(0,l.useRef)(u);(0,l.useEffect)(()=>{v.current=u},[u]);let g=(0,l.useRef)(a);(0,l.useEffect)(()=>{g.current=a},[a]);let[y,I]=(0,l.useState)(!1),[S,x]=(0,l.useState)(!1),{props:R,meta:P}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:S});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{...R,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:v,onLoadingCompleteRef:g,setBlurComplete:I,setShowAltText:x,sizesInput:e.sizes,ref:t}),P.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:R}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},35283:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(83179);let n=r(96630),i=r(96594);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,a,s,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:v,quality:g,width:h,height:b,fill:y=!1,style:I,overrideSrc:S,onLoad:x,onLoadingComplete:R,placeholder:P="empty",blurDataURL:E,fetchPriority:w,layout:C,objectFit:M,objectPosition:k,lazyBoundary:D,lazyRoot:T,...F}=e,{imgConf:_,showAltText:z,blurComplete:O,defaultLoader:j}=t,N=_||i.imageConfigDefault;if("allSizes"in N)u=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);u={...N,allSizes:e,deviceSizes:t}}if(void 0===j)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let A=F.loader||j;delete F.loader,delete F.srcSet;let L="__next_img_default"in A;if(L){if("custom"===u.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(I={...I,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!d&&(d=t)}let V="",B=l(h),Y=l(b);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,E=E||e.blurDataURL,V=e.src,!y){if(B||Y){if(B&&!Y){let t=B/e.width;Y=Math.round(e.height*t)}else if(!B&&Y){let t=Y/e.height;B=Math.round(e.width*t)}}else B=e.width,Y=e.height}}let G=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:V)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,G=!1),u.unoptimized&&(f=!0),L&&c.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(f=!0),p&&(w="high");let U=l(g),H=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:k}:{},z?{}:{color:"transparent"},I),Z=O||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:Y,blurWidth:a,blurHeight:s,blurDataURL:E||"",objectFit:H.objectFit})+'")':'url("'+P+'")',K=Z?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Z}:{},Q=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),c=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,n)=>u({config:t,src:r,quality:o,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:o,width:a[c]})}}({config:u,src:c,unoptimized:f,width:B,quality:U,sizes:d,loader:A});return{props:{...F,loading:G?"lazy":m,fetchPriority:w,width:B,height:Y,decoding:"async",className:v,style:{...H,...K},sizes:Q.sizes,srcSet:Q.srcSet,src:S||Q.src},meta:{unoptimized:f,priority:p,placeholder:P,fill:y}}}},96630:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,u=n?40*n:t,a=i?40*i:r,s=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},76210:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return u}});let n=r(10260),i=r(35283),o=r(74080),l=n._(r(13872));function u(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/frontend/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=o.Image},13872:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},25675:function(e,t,r){e.exports=r(76210)},48016:function(e,t,r){"use strict";let n,i;r.d(t,{pJ:function(){return z},lG:function(){return F},V2:function(){return _}});var o,l=r(7775),u=r(18419),a=r(67294),s=r(65448),c=r(68354),d=r(91034),f=r(40947),p=r(38213),m=r(1365),v=r(67257),g=r(16116),h=r(23233),b=r(83619);let y=null!=(o=a.startTransition)?o:function(e){e()};var I=r(71237),S=((n=S||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),x=((i=x||{})[i.ToggleDisclosure=0]="ToggleDisclosure",i[i.CloseDisclosure=1]="CloseDisclosure",i[i.SetButtonId=2]="SetButtonId",i[i.SetPanelId=3]="SetPanelId",i[i.LinkPanel=4]="LinkPanel",i[i.UnlinkPanel=5]="UnlinkPanel",i);let R={0:e=>({...e,disclosureState:(0,g.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},P=(0,a.createContext)(null);function E(e){let t=(0,a.useContext)(P);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,E),t}return t}P.displayName="DisclosureContext";let w=(0,a.createContext)(null);w.displayName="DisclosureAPIContext";let C=(0,a.createContext)(null);function M(e,t){return(0,g.E)(t.type,R,e,t)}C.displayName="DisclosurePanelContext";let k=a.Fragment,D=b.VN.RenderStrategy|b.VN.Static,T=(0,b.yV)(function(e,t){let{defaultOpen:r=!1,...n}=e,i=(0,a.useRef)(null),o=(0,f.T)(t,(0,f.h)(e=>{i.current=e},void 0===e.as||e.as===a.Fragment)),l=(0,a.useRef)(null),u=(0,a.useRef)(null),s=(0,a.useReducer)(M,{disclosureState:r?0:1,linkedPanel:!1,buttonRef:u,panelRef:l,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:v},y]=s,I=(0,c.z)(e=>{y({type:1});let t=(0,h.r)(i);if(!t||!v)return;let r=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(v):t.getElementById(v);null==r||r.focus()}),S=(0,a.useMemo)(()=>({close:I}),[I]),x=(0,a.useMemo)(()=>({open:0===d,close:I}),[d,I]);return a.createElement(P.Provider,{value:s},a.createElement(w.Provider,{value:S},a.createElement(p.Z,{value:I},a.createElement(m.up,{value:(0,g.E)(d,{0:m.ZM.Open,1:m.ZM.Closed})},(0,b.sY)({ourProps:{ref:o},theirProps:n,slot:x,defaultTag:k,name:"Disclosure"})))))}),F=(0,b.yV)(function(e,t){let r=(0,a.useId)(),{id:n="headlessui-disclosure-button-".concat(r),disabled:i=!1,autoFocus:o=!1,...p}=e,[m,g]=E("Disclosure.Button"),h=(0,a.useContext)(C),y=null!==h&&h===m.panelId,S=(0,a.useRef)(null),x=(0,f.T)(S,t,y?null:m.buttonRef),R=(0,b.Y2)();(0,a.useEffect)(()=>{if(!y)return g({type:2,buttonId:n}),()=>{g({type:2,buttonId:null})}},[n,g,y]);let P=(0,c.z)(e=>{var t;if(y){if(1===m.disclosureState)return;switch(e.key){case I.R.Space:case I.R.Enter:e.preventDefault(),e.stopPropagation(),g({type:0}),null==(t=m.buttonRef.current)||t.focus()}}else switch(e.key){case I.R.Space:case I.R.Enter:e.preventDefault(),e.stopPropagation(),g({type:0})}}),w=(0,c.z)(e=>{e.key===I.R.Space&&e.preventDefault()}),M=(0,c.z)(e=>{var t;(0,v.P)(e.currentTarget)||i||(y?(g({type:0}),null==(t=m.buttonRef.current)||t.focus()):g({type:0}))}),{isFocusVisible:k,focusProps:D}=(0,l.F)({autoFocus:o}),{isHovered:T,hoverProps:F}=(0,u.X)({isDisabled:i}),{pressed:_,pressProps:z}=(0,s.x)({disabled:i}),O=(0,a.useMemo)(()=>({open:0===m.disclosureState,hover:T,active:_,disabled:i,focus:k,autofocus:o}),[m,T,_,k,i,o]),j=(0,d.f)(e,S),N=y?(0,b.dG)({ref:x,type:j,disabled:i||void 0,autoFocus:o,onKeyDown:P,onClick:M},D,F,z):(0,b.dG)({ref:x,id:n,type:j,"aria-expanded":0===m.disclosureState,"aria-controls":m.linkedPanel?m.panelId:void 0,disabled:i||void 0,autoFocus:o,onKeyDown:P,onKeyUp:w,onClick:M},D,F,z);return(0,b.sY)({mergeRefs:R,ourProps:N,theirProps:p,slot:O,defaultTag:"button",name:"Disclosure.Button"})}),_=(0,b.yV)(function(e,t){let r=(0,a.useId)(),{id:n="headlessui-disclosure-panel-".concat(r),...i}=e,[o,l]=E("Disclosure.Panel"),{close:u}=function e(t){let r=(0,a.useContext)(w);if(null===r){let r=Error("<".concat(t," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("Disclosure.Panel"),s=(0,b.Y2)(),c=(0,f.T)(t,o.panelRef,e=>{y(()=>l({type:e?4:5}))});(0,a.useEffect)(()=>(l({type:3,panelId:n}),()=>{l({type:3,panelId:null})}),[n,l]);let d=(0,m.oJ)(),p=null!==d?(d&m.ZM.Open)===m.ZM.Open:0===o.disclosureState,v=(0,a.useMemo)(()=>({open:0===o.disclosureState,close:u}),[o,u]);return a.createElement(C.Provider,{value:o.panelId},(0,b.sY)({mergeRefs:s,ourProps:{ref:c,id:n},theirProps:i,slot:v,defaultTag:"div",features:D,visible:p,name:"Disclosure.Panel"}))}),z=Object.assign(T,{Button:F,Panel:_})},10034:function(e,t,r){"use strict";let n,i,o,l;r.d(t,{v2:function(){return eu},j2:function(){return ei},sN:function(){return el},sd:function(){return eo}});var u=r(7775),a=r(18419),s=r(67294),c=r(65448),d=r(57110),f=r(5655),p=r(29408),m=r(68354),v=r(47122),g=r(23233);let h=new Map,b=new Map;function y(e){var t;let r=null!=(t=b.get(e))?t:0;return b.set(e,r+1),0!==r||(h.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),()=>(function(e){var t;let r=null!=(t=b.get(e))?t:1;if(1===r?b.delete(e):b.set(e,r-1),1!==r)return;let n=h.get(e);n&&(null===n["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,h.delete(e))})(e)}var I=r(54555),S=r(382),x=r(99523),R=r(91034),P=r(44599),E=r(40947);let w=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function C(e){var t,r;let n=null!=(t=e.innerText)?t:"",i=e.cloneNode(!0);if(!(i instanceof HTMLElement))return n;let o=!1;for(let e of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),o=!0;let l=o?null!=(r=i.innerText)?r:"":n;return w.test(l)&&(l=l.replace(w,"")),l}function M(e){return[e.screenX,e.screenY]}var k=r(32777),D=r(1365),T=r(67257),F=((n=F||{})[n.First=0]="First",n[n.Previous=1]="Previous",n[n.Next=2]="Next",n[n.Last=3]="Last",n[n.Specific=4]="Specific",n[n.Nothing=5]="Nothing",n);function _(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),i=null!=n?n:-1;switch(e.focus){case 0:for(let e=0;e<r.length;++e)if(!t.resolveDisabled(r[e],e,r))return e;return n;case 1:-1===i&&(i=r.length);for(let e=i-1;e>=0;--e)if(!t.resolveDisabled(r[e],e,r))return e;return n;case 2:for(let e=i+1;e<r.length;++e)if(!t.resolveDisabled(r[e],e,r))return e;return n;case 3:for(let e=r.length-1;e>=0;--e)if(!t.resolveDisabled(r[e],e,r))return e;return n;case 4:for(let n=0;n<r.length;++n)if(t.resolveId(r[n],n,r)===e.id)return n;return n;case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}}var z=r(58766),O=r(16116),j=r(83619);let N=(0,s.createContext)(void 0);function A(){return(0,s.useContext)(N)}let L=(0,s.createContext)(null);L.displayName="DescriptionContext",Object.assign((0,j.yV)(function(e,t){let r=(0,s.useId)(),n=A(),{id:i="headlessui-description-".concat(r),...o}=e,l=function e(){let t=(0,s.useContext)(L);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),u=(0,E.T)(t);(0,d.e)(()=>l.register(i),[i,l.register]);let a=n||!1,c=(0,s.useMemo)(()=>({...l.slot,disabled:a}),[l.slot,a]),f={ref:u,...l.props,id:i};return(0,j.sY)({ourProps:f,theirProps:o,slot:c,defaultTag:"p",name:l.name||"Description"})}),{});var V=r(71237);let B=(0,s.createContext)(void 0),Y=(0,s.createContext)(null);function G(){let e=(0,s.useContext)(Y);if(null===e){let e=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,G),e}return e}function U(){var e,t;let r,{inherit:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=r=null!=(t=null==(e=(0,s.useContext)(Y))?void 0:e.value)?t:void 0,[o,l]=(0,s.useState)([]),u=n?[i,...o].filter(Boolean):o;return[u.length>0?u.join(" "):void 0,(0,s.useMemo)(()=>function(e){let t=(0,m.z)(e=>(l(t=>[...t,e]),()=>l(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),r=(0,s.useMemo)(()=>({register:t,slot:e.slot,name:e.name,props:e.props,value:e.value}),[t,e.slot,e.name,e.props,e.value]);return s.createElement(Y.Provider,{value:r},e.children)},[l])]}Y.displayName="LabelContext",Object.assign((0,j.yV)(function(e,t){var r;let n=(0,s.useId)(),i=G(),o=(0,s.useContext)(B),l=A(),{id:u="headlessui-label-".concat(n),htmlFor:a=null!=o?o:null==(r=i.props)?void 0:r.htmlFor,passive:c=!1,...f}=e,p=(0,E.T)(t);(0,d.e)(()=>i.register(u),[u,i.register]);let v=(0,m.z)(e=>{let t=e.currentTarget;if(t instanceof HTMLLabelElement&&e.preventDefault(),i.props&&"onClick"in i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),t instanceof HTMLLabelElement){let e=document.getElementById(t.htmlFor);if(e){let t=e.getAttribute("disabled");if("true"===t||""===t)return;let r=e.getAttribute("aria-disabled");if("true"===r||""===r)return;(e instanceof HTMLInputElement&&("radio"===e.type||"checkbox"===e.type)||"radio"===e.role||"checkbox"===e.role||"switch"===e.role)&&e.click(),e.focus({preventScroll:!0})}}}),g=l||!1,h=(0,s.useMemo)(()=>({...i.slot,disabled:g}),[i.slot,g]),b={ref:p,...i.props,id:u,htmlFor:a,onClick:v};return c&&("onClick"in b&&(delete b.htmlFor,delete b.onClick),"onClick"in f&&delete f.onClick),(0,j.sY)({ourProps:b,theirProps:f,slot:h,defaultTag:a?"label":"div",name:i.name||"Label"})}),{});var H=r(96258),Z=((i=Z||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i),K=((o=K||{})[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o),Q=((l=Q||{})[l.OpenMenu=0]="OpenMenu",l[l.CloseMenu=1]="CloseMenu",l[l.GoToItem=2]="GoToItem",l[l.Search=3]="Search",l[l.ClearSearch=4]="ClearSearch",l[l.RegisterItem=5]="RegisterItem",l[l.UnregisterItem=6]="UnregisterItem",l);function W(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e,r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,z.z2)(t(e.items.slice()),e=>e.dataRef.current.domRef.current),i=r?n.indexOf(r):null;return -1===i&&(i=null),{items:n,activeItemIndex:i}}let J={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,t)=>{var r,n,i,o,l;if(1===e.menuState)return e;let u={...e,searchQuery:"",activationTrigger:null!=(r=t.trigger)?r:1,__demoMode:!1};if(t.focus===F.Nothing)return{...u,activeItemIndex:null};if(t.focus===F.Specific)return{...u,activeItemIndex:e.items.findIndex(e=>e.id===t.id)};if(t.focus===F.Previous){let r=e.activeItemIndex;if(null!==r){let o=e.items[r].dataRef.current.domRef,l=_(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(null!==l){let t=e.items[l].dataRef.current.domRef;if((null==(n=o.current)?void 0:n.previousElementSibling)===t.current||(null==(i=t.current)?void 0:i.previousElementSibling)===null)return{...u,activeItemIndex:l}}}}else if(t.focus===F.Next){let r=e.activeItemIndex;if(null!==r){let n=e.items[r].dataRef.current.domRef,i=_(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(null!==i){let t=e.items[i].dataRef.current.domRef;if((null==(o=n.current)?void 0:o.nextElementSibling)===t.current||(null==(l=t.current)?void 0:l.nextElementSibling)===null)return{...u,activeItemIndex:i}}}}let a=W(e),s=_(t,{resolveItems:()=>a.items,resolveActiveIndex:()=>a.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...u,...a,activeItemIndex:s}},3:(e,t)=>{let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),i=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled}),o=i?e.items.indexOf(i):-1;return -1===o||o===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:o,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let r=W(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...r}},6:(e,t)=>{let r=W(e,e=>{let r=e.findIndex(e=>e.id===t.id);return -1!==r&&e.splice(r,1),e});return{...e,...r,activationTrigger:1}}},q=(0,s.createContext)(null);function X(e){let t=(0,s.useContext)(q);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Menu /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,X),t}return t}function $(e,t){return(0,O.E)(t.type,J,e,t)}q.displayName="MenuContext";let ee=s.Fragment,et=j.VN.RenderStrategy|j.VN.Static,er=s.Fragment,en=(0,j.yV)(function(e,t){let{__demoMode:r=!1,...n}=e,i=(0,s.useReducer)($,{__demoMode:r,menuState:r?0:1,buttonRef:(0,s.createRef)(),itemsRef:(0,s.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:o,itemsRef:l,buttonRef:u},a]=i,c=(0,E.T)(t);(0,S.O)([u,l],(e,t)=>{var r;a({type:1}),(0,z.sP)(t,z.tJ.Loose)||(e.preventDefault(),null==(r=u.current)||r.focus())},0===o);let d=(0,m.z)(()=>{a({type:1})}),f=(0,s.useMemo)(()=>({open:0===o,close:d}),[o,d]);return s.createElement(k.HO,null,s.createElement(q.Provider,{value:i},s.createElement(D.up,{value:(0,O.E)(o,{0:D.ZM.Open,1:D.ZM.Closed})},(0,j.sY)({ourProps:{ref:c},theirProps:n,slot:f,defaultTag:ee,name:"Menu"}))))}),ei=(0,j.yV)(function(e,t){var r;let n=(0,s.useId)(),{id:i="headlessui-menu-button-".concat(n),disabled:o=!1,autoFocus:l=!1,...d}=e,[p,v]=X("Menu.Button"),g=(0,k.L)(),h=(0,E.T)(p.buttonRef,t,(0,k.AZ)()),b=(0,f.G)(),y=(0,m.z)(e=>{switch(e.key){case V.R.Space:case V.R.Enter:case V.R.ArrowDown:e.preventDefault(),e.stopPropagation(),v({type:0}),b.nextFrame(()=>v({type:2,focus:F.First}));break;case V.R.ArrowUp:e.preventDefault(),e.stopPropagation(),v({type:0}),b.nextFrame(()=>v({type:2,focus:F.Last}))}}),I=(0,m.z)(e=>{e.key===V.R.Space&&e.preventDefault()}),S=(0,m.z)(e=>{if((0,T.P)(e.currentTarget))return e.preventDefault();o||(0===p.menuState?(v({type:1}),b.nextFrame(()=>{var e;return null==(e=p.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(e.preventDefault(),v({type:0})))}),{isFocusVisible:x,focusProps:P}=(0,u.F)({autoFocus:l}),{isHovered:w,hoverProps:C}=(0,a.X)({isDisabled:o}),{pressed:M,pressProps:D}=(0,c.x)({disabled:o}),_=(0,s.useMemo)(()=>({open:0===p.menuState,active:M||0===p.menuState,disabled:o,hover:w,focus:x,autofocus:l}),[p,w,x,M,o,l]),z=(0,j.dG)(g(),{ref:h,id:i,type:(0,R.f)(e,p.buttonRef),"aria-haspopup":"menu","aria-controls":null==(r=p.itemsRef.current)?void 0:r.id,"aria-expanded":0===p.menuState,disabled:o||void 0,autoFocus:l,onKeyDown:y,onKeyUp:I,onClick:S},P,C,D);return(0,j.sY)({ourProps:z,theirProps:d,slot:_,defaultTag:"button",name:"Menu.Button"})}),eo=(0,j.yV)(function(e,t){var r,n;let i=(0,s.useId)(),{id:o="headlessui-menu-items-".concat(i),anchor:l,portal:u=!1,modal:a=!0,...c}=e,h=(0,k.Vy)(l),[b,S]=X("Menu.Items"),[R,w]=(0,k.ES)(h),C=(0,k.U8)(),M=(0,E.T)(b.itemsRef,t,h?R:null),T=(0,x.i)(b.itemsRef);h&&(u=!0);let _=(0,f.G)(),O=(0,D.oJ)(),N=null!==O?(O&D.ZM.Open)===D.ZM.Open:0===b.menuState;(0,I.m)(b.buttonRef,()=>S({type:1}),N),(0,P.P)(T,!b.__demoMode&&a&&0===b.menuState),function(){let{allowed:e,disallowed:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=!(arguments.length>1)||void 0===arguments[1]||arguments[1];(0,d.e)(()=>{var n,i;if(!r)return;let o=(0,v.k)();for(let e of null!=(n=null==t?void 0:t())?n:[])e&&o.add(y(e));let l=null!=(i=null==e?void 0:e())?i:[];for(let e of l){if(!e)continue;let t=(0,g.r)(e);if(!t)continue;let r=e.parentElement;for(;r&&r!==t.body;){for(let e of r.children)l.some(t=>e.contains(t))||o.add(y(e));r=r.parentElement}}return o.dispose},[r,e,t])}({allowed:(0,m.z)(()=>[b.buttonRef.current,b.itemsRef.current])},!b.__demoMode&&a&&0===b.menuState);let A=!function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=(0,s.useRef)({left:0,top:0});if((0,d.e)(()=>{let t=e.current;if(!t)return;let n=t.getBoundingClientRect();n&&(r.current=n)},[t]),null==e.current||!t||e.current===document.activeElement)return!1;let n=e.current.getBoundingClientRect();return n.top!==r.current.top||n.left!==r.current.left}(b.buttonRef,0!==b.menuState)&&N;(0,s.useEffect)(()=>{let e=b.itemsRef.current;e&&0===b.menuState&&e!==(null==T?void 0:T.activeElement)&&e.focus({preventScroll:!0})},[b.menuState,b.itemsRef,T,b.itemsRef.current]),function(e){let{container:t,accept:r,walk:n,enabled:i=!0}=e,o=(0,s.useRef)(r),l=(0,s.useRef)(n);(0,s.useEffect)(()=>{o.current=r,l.current=n},[r,n]),(0,d.e)(()=>{if(!t||!i)return;let e=(0,g.r)(t);if(!e)return;let r=o.current,n=l.current,u=Object.assign(e=>r(e),{acceptNode:r}),a=e.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,u,!1);for(;a.nextNode();)n(a.currentNode)},[t,i,o,l])}({container:b.itemsRef.current,enabled:0===b.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let L=(0,m.z)(e=>{var t,r;switch(_.dispose(),e.key){case V.R.Space:if(""!==b.searchQuery)return e.preventDefault(),e.stopPropagation(),S({type:3,value:e.key});case V.R.Enter:if(e.preventDefault(),e.stopPropagation(),S({type:1}),null!==b.activeItemIndex){let{dataRef:e}=b.items[b.activeItemIndex];null==(r=null==(t=e.current)?void 0:t.domRef.current)||r.click()}(0,z.wI)(b.buttonRef.current);break;case V.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),S({type:2,focus:F.Next});case V.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),S({type:2,focus:F.Previous});case V.R.Home:case V.R.PageUp:return e.preventDefault(),e.stopPropagation(),S({type:2,focus:F.First});case V.R.End:case V.R.PageDown:return e.preventDefault(),e.stopPropagation(),S({type:2,focus:F.Last});case V.R.Escape:e.preventDefault(),e.stopPropagation(),S({type:1}),(0,v.k)().nextFrame(()=>{var e;return null==(e=b.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case V.R.Tab:e.preventDefault(),e.stopPropagation(),S({type:1}),(0,v.k)().microTask(()=>{(0,z.EO)(b.buttonRef.current,e.shiftKey?z.TO.Previous:z.TO.Next)});break;default:1===e.key.length&&(S({type:3,value:e.key}),_.setTimeout(()=>S({type:4}),350))}}),B=(0,m.z)(e=>{e.key===V.R.Space&&e.preventDefault()}),Y=(0,s.useMemo)(()=>({open:0===b.menuState}),[b]),G=(0,j.dG)(h?C():{},{"aria-activedescendant":null===b.activeItemIndex||null==(r=b.items[b.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(n=b.buttonRef.current)?void 0:n.id,id:o,onKeyDown:L,onKeyUp:B,role:"menu",tabIndex:0,ref:M,style:{...w,"--button-width":(0,p.h)(b.buttonRef,!0).width}});return s.createElement(H.h_,{enabled:!!u&&(e.static||N)},(0,j.sY)({ourProps:G,theirProps:c,slot:Y,defaultTag:"div",features:et,visible:A,name:"Menu.Items"}))}),el=(0,j.yV)(function(e,t){let r,n,i,o=(0,s.useId)(),{id:l="headlessui-menu-item-".concat(o),disabled:u=!1,...a}=e,[c,f]=X("Menu.Item"),p=null!==c.activeItemIndex&&c.items[c.activeItemIndex].id===l,g=(0,s.useRef)(null),h=(0,E.T)(t,g);(0,d.e)(()=>{if(c.__demoMode||0!==c.menuState||!p||0===c.activationTrigger)return;let e=(0,v.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=g.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[c.__demoMode,g,p,c.menuState,c.activationTrigger,c.activeItemIndex]);let b=(r=(0,s.useRef)(""),n=(0,s.useRef)(""),(0,m.z)(()=>{let e=g.current;if(!e)return"";let t=e.innerText;if(r.current===t)return n.current;let i=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let e=r.split(" ").map(e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():C(t).trim()}return null}).filter(Boolean);if(e.length>0)return e.join(", ")}return C(e).trim()})(e).trim().toLowerCase();return r.current=t,n.current=i,i})),y=(0,s.useRef)({disabled:u,domRef:g,get textValue(){return b()}});(0,d.e)(()=>{y.current.disabled=u},[y,u]),(0,d.e)(()=>(f({type:5,id:l,dataRef:y}),()=>f({type:6,id:l})),[y,l]);let I=(0,m.z)(()=>{f({type:1})}),S=(0,m.z)(e=>{if(u)return e.preventDefault();f({type:1}),(0,z.wI)(c.buttonRef.current)}),x=(0,m.z)(()=>{if(u)return f({type:2,focus:F.Nothing});f({type:2,focus:F.Specific,id:l})}),R=(i=(0,s.useRef)([-1,-1]),{wasMoved(e){let t=M(e);return(i.current[0]!==t[0]||i.current[1]!==t[1])&&(i.current=t,!0)},update(e){i.current=M(e)}}),P=(0,m.z)(e=>{R.update(e),!u&&(p||f({type:2,focus:F.Specific,id:l,trigger:0}))}),w=(0,m.z)(e=>{R.wasMoved(e)&&(u||p||f({type:2,focus:F.Specific,id:l,trigger:0}))}),k=(0,m.z)(e=>{R.wasMoved(e)&&(u||p&&f({type:2,focus:F.Nothing}))}),[D,T]=U(),[_,O]=function(){let[e,t]=(0,s.useState)([]);return[e.length>0?e.join(" "):void 0,(0,s.useMemo)(()=>function(e){let r=(0,m.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),n=(0,s.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props,value:e.value}),[r,e.slot,e.name,e.props,e.value]);return s.createElement(L.Provider,{value:n},e.children)},[t])]}(),N=(0,s.useMemo)(()=>({active:p,focus:p,disabled:u,close:I}),[p,u,I]);return s.createElement(T,null,s.createElement(O,null,(0,j.sY)({ourProps:{id:l,ref:h,role:"menuitem",tabIndex:!0===u?void 0:-1,"aria-disabled":!0===u||void 0,"aria-labelledby":D,"aria-describedby":_,disabled:void 0,onClick:S,onFocus:x,onPointerEnter:P,onMouseEnter:P,onPointerMove:w,onMouseMove:w,onPointerLeave:k,onMouseLeave:k},theirProps:a,slot:N,defaultTag:er,name:"Menu.Item"})))}),eu=Object.assign(en,{Button:ei,Items:eo,Item:el,Section:(0,j.yV)(function(e,t){let[r,n]=U();return s.createElement(n,null,(0,j.sY)({ourProps:{ref:t,"aria-labelledby":r,role:"group"},theirProps:e,slot:{},defaultTag:"div",name:"Menu.Section"}))}),Heading:(0,j.yV)(function(e,t){let r=(0,s.useId)(),{id:n="headlessui-menu-heading-".concat(r),...i}=e,o=G();(0,d.e)(()=>o.register(n),[n,o.register]);let l={id:n,ref:t,role:"presentation",...o.props};return(0,j.sY)({ourProps:l,theirProps:i,slot:{},defaultTag:"header",name:"Menu.Heading"})}),Separator:(0,j.yV)(function(e,t){return(0,j.sY)({ourProps:{ref:t,role:"separator"},theirProps:e,slot:{},defaultTag:"div",name:"Menu.Separator"})})})},3541:function(e,t,r){"use strict";var n=r(67294);let i=n.forwardRef(function(e,t){let{title:r,titleId:i,...o}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),r?n.createElement("title",{id:i},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"}))});t.Z=i}}]);