"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{65184:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(87462),a=n(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0034.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm96 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm408-491a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"branches",theme:"outlined"},c=n(42135),l=a.forwardRef(function(e,t){return a.createElement(c.Z,(0,o.Z)({},e,{ref:t,icon:r}))})},18073:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(87462),a=n(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},c=n(42135),l=a.forwardRef(function(e,t){return a.createElement(c.Z,(0,o.Z)({},e,{ref:t,icon:r}))})},99141:function(e,t,n){n.d(t,{o2:function(){return l},yT:function(){return i}});var o=n(74902),a=n(23310);let r=a.i.map(e=>"".concat(e,"-inverse")),c=["success","processing","error","default","warning"];function l(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return t?[].concat((0,o.Z)(r),(0,o.Z)(a.i)).includes(e):a.i.includes(e)}function i(e){return c.includes(e)}},13339:function(e,t,n){let o;n.d(t,{Z:function(){return i}});var a=n(67294),r=n(98924);let c=()=>(0,r.Z)()&&window.document.documentElement,l=()=>{if(!c())return!1;if(void 0!==o)return o;let e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),o=1===e.scrollHeight,document.body.removeChild(e),o};var i=()=>{let[e,t]=a.useState(!1);return a.useEffect(()=>{t(l())},[]),e}},38444:function(e,t,n){n.d(t,{Z:function(){return y}});var o=n(94184),a=n.n(o),r=n(42550),c=n(5110),l=n(67294),i=n(15479),s=n(6030),d=n(22954);let u=e=>{let{componentCls:t,colorPrimary:n}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:"var(--wave-color, ".concat(n,")"),boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:["box-shadow 0.4s ".concat(e.motionEaseOutCirc),"opacity 2s ".concat(e.motionEaseOutCirc)].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0}}}}};var p=(0,d.Z)("Wave",e=>[u(e)]),f=n(82225),m=n(38135),v=n(75164);function b(e){return e&&"#fff"!==e&&"#ffffff"!==e&&"rgb(255, 255, 255)"!==e&&"rgba(255, 255, 255, 1)"!==e&&function(e){let t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!t||!t[1]||!t[2]||!t[3]||!(t[1]===t[2]&&t[2]===t[3])}(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&"transparent"!==e}function g(e){return Number.isNaN(e)?0:e}let h=e=>{let{className:t,target:n}=e,o=l.useRef(null),[r,c]=l.useState(null),[i,s]=l.useState([]),[d,u]=l.useState(0),[p,h]=l.useState(0),[y,x]=l.useState(0),[C,E]=l.useState(0),[k,O]=l.useState(!1),Z={left:d,top:p,width:y,height:C,borderRadius:i.map(e=>"".concat(e,"px")).join(" ")};function w(){let e=getComputedStyle(n);c(function(e){let{borderTopColor:t,borderColor:n,backgroundColor:o}=getComputedStyle(e);return b(t)?t:b(n)?n:b(o)?o:null}(n));let t="static"===e.position,{borderLeftWidth:o,borderTopWidth:a}=e;u(t?n.offsetLeft:g(-parseFloat(o))),h(t?n.offsetTop:g(-parseFloat(a))),x(n.offsetWidth),E(n.offsetHeight);let{borderTopLeftRadius:r,borderTopRightRadius:l,borderBottomLeftRadius:i,borderBottomRightRadius:d}=e;s([r,l,d,i].map(e=>g(parseFloat(e))))}return(r&&(Z["--wave-color"]=r),l.useEffect(()=>{if(n){let e;let t=(0,v.Z)(()=>{w(),O(!0)});return"undefined"!=typeof ResizeObserver&&(e=new ResizeObserver(w)).observe(n),()=>{v.Z.cancel(t),null==e||e.disconnect()}}},[]),k)?l.createElement(f.ZP,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(e,t)=>{var n;if(t.deadline||"opacity"===t.propertyName){let e=null===(n=o.current)||void 0===n?void 0:n.parentElement;(0,m.v)(e).then(()=>{null==e||e.remove()})}return!1}},e=>{let{className:n}=e;return l.createElement("div",{ref:o,className:a()(t,n),style:Z})}):null};var y=e=>{var t;let{children:n,disabled:o}=e,{getPrefixCls:d}=(0,l.useContext)(i.E_),u=(0,l.useRef)(null),f=d("wave"),[,v]=p(f),b=(t=a()(f,v),function(){let e=u.current;!function(e,t){let n=document.createElement("div");n.style.position="absolute",n.style.left="0px",n.style.top="0px",null==e||e.insertBefore(n,null==e?void 0:e.firstChild),(0,m.s)(l.createElement(h,{target:e,className:t}),n)}(e,t)});if(l.useEffect(()=>{let e=u.current;if(!e||1!==e.nodeType||o)return;let t=t=>{"INPUT"===t.target.tagName||!(0,c.Z)(t.target)||!e.getAttribute||e.getAttribute("disabled")||e.disabled||e.className.includes("disabled")||e.className.includes("-leave")||b()};return e.addEventListener("click",t,!0),()=>{e.removeEventListener("click",t,!0)}},[o]),!l.isValidElement(n))return null!=n?n:null;let g=(0,r.Yr)(n)?(0,r.sQ)(n.ref,u):u;return(0,s.Tm)(n,{ref:g})}},74293:function(e,t,n){n.d(t,{Z:function(){return F}});var o=n(18073),a=n(94184),r=n.n(a),c=n(97685),l=n(74902),i=n(71002),s=n(21770),d=n(80334),u=n(67294),p=n(87462),f=n(45987),m=n(50344),v=n(4942),b=n(82225),g=n(15105),h=u.forwardRef(function(e,t){var n,o=e.prefixCls,a=e.forceRender,l=e.className,i=e.style,s=e.children,d=e.isActive,p=e.role,f=u.useState(d||a),m=(0,c.Z)(f,2),b=m[0],g=m[1];return(u.useEffect(function(){(a||d)&&g(!0)},[a,d]),b)?u.createElement("div",{ref:t,className:r()("".concat(o,"-content"),(n={},(0,v.Z)(n,"".concat(o,"-content-active"),d),(0,v.Z)(n,"".concat(o,"-content-inactive"),!d),n),l),style:i,role:p},u.createElement("div",{className:"".concat(o,"-content-box")},s)):null});h.displayName="PanelContent";var y=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],x=u.forwardRef(function(e,t){var n,o,a=e.showArrow,c=void 0===a||a,l=e.headerClass,i=e.isActive,s=e.onItemClick,d=e.forceRender,m=e.className,x=e.prefixCls,C=e.collapsible,E=e.accordion,k=e.panelKey,O=e.extra,Z=e.header,w=e.expandIcon,S=e.openMotion,I=e.destroyInactivePanel,N=e.children,P=(0,f.Z)(e,y),j="disabled"===C,R="header"===C,A="icon"===C,M=null!=O&&"boolean"!=typeof O,T=function(){null==s||s(k)},_="function"==typeof w?w(e):u.createElement("i",{className:"arrow"});_&&(_=u.createElement("div",{className:"".concat(x,"-expand-icon"),onClick:["header","icon"].includes(C)?T:void 0},_));var z=r()((n={},(0,v.Z)(n,"".concat(x,"-item"),!0),(0,v.Z)(n,"".concat(x,"-item-active"),i),(0,v.Z)(n,"".concat(x,"-item-disabled"),j),n),m),B={className:r()((o={},(0,v.Z)(o,"".concat(x,"-header"),!0),(0,v.Z)(o,"headerClass",l),(0,v.Z)(o,"".concat(x,"-header-collapsible-only"),R),(0,v.Z)(o,"".concat(x,"-icon-collapsible-only"),A),o)),"aria-expanded":i,"aria-disabled":j,onKeyDown:function(e){("Enter"===e.key||e.keyCode===g.Z.ENTER||e.which===g.Z.ENTER)&&T()}};return R||A||(B.onClick=T,B.role=E?"tab":"button",B.tabIndex=j?-1:0),u.createElement("div",(0,p.Z)({},P,{ref:t,className:z}),u.createElement("div",B,c&&_,u.createElement("span",{className:"".concat(x,"-header-text"),onClick:"header"===C?T:void 0},Z),M&&u.createElement("div",{className:"".concat(x,"-extra")},O)),u.createElement(b.ZP,(0,p.Z)({visible:i,leavedClassName:"".concat(x,"-content-hidden")},S,{forceRender:d,removeOnLeave:I}),function(e,t){var n=e.className,o=e.style;return u.createElement(h,{ref:t,prefixCls:x,className:n,style:o,isActive:i,forceRender:d,role:E?"tabpanel":void 0},N)}))}),C=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],E=function(e,t){var n=t.prefixCls,o=t.accordion,a=t.collapsible,r=t.destroyInactivePanel,c=t.onItemClick,l=t.activeKey,i=t.openMotion,s=t.expandIcon;return e.map(function(e,t){var d=e.children,m=e.label,v=e.key,b=e.collapsible,g=e.onItemClick,h=e.destroyInactivePanel,y=(0,f.Z)(e,C),E=String(null!=v?v:t),k=null!=b?b:a,O=!1;return O=o?l[0]===E:l.indexOf(E)>-1,u.createElement(x,(0,p.Z)({},y,{prefixCls:n,key:E,panelKey:E,isActive:O,accordion:o,openMotion:i,expandIcon:s,header:m,collapsible:k,onItemClick:function(e){"disabled"!==k&&(c(e),null==g||g(e))},destroyInactivePanel:null!=h?h:r}),d)})},k=function(e,t,n){if(!e)return null;var o=n.prefixCls,a=n.accordion,r=n.collapsible,c=n.destroyInactivePanel,l=n.onItemClick,i=n.activeKey,s=n.openMotion,d=n.expandIcon,p=e.key||String(t),f=e.props,m=f.header,v=f.headerClass,b=f.destroyInactivePanel,g=f.collapsible,h=f.onItemClick,y=!1;y=a?i[0]===p:i.indexOf(p)>-1;var x=null!=g?g:r,C={key:p,panelKey:p,header:m,headerClass:v,isActive:y,prefixCls:o,destroyInactivePanel:null!=b?b:c,openMotion:s,accordion:a,children:e.props.children,onItemClick:function(e){"disabled"!==x&&(l(e),null==h||h(e))},expandIcon:d,collapsible:x};return"string"==typeof e.type?e:(Object.keys(C).forEach(function(e){void 0===C[e]&&delete C[e]}),u.cloneElement(e,C))};function O(e){var t=e;if(!Array.isArray(t)){var n=(0,i.Z)(t);t="number"===n||"string"===n?[t]:[]}return t.map(function(e){return String(e)})}var Z=Object.assign(u.forwardRef(function(e,t){var n,o=e.prefixCls,a=void 0===o?"rc-collapse":o,i=e.destroyInactivePanel,p=e.style,f=e.accordion,v=e.className,b=e.children,g=e.collapsible,h=e.openMotion,y=e.expandIcon,x=e.activeKey,C=e.defaultActiveKey,Z=e.onChange,w=e.items,S=r()(a,v),I=(0,s.Z)([],{value:x,onChange:function(e){return null==Z?void 0:Z(e)},defaultValue:C,postState:O}),N=(0,c.Z)(I,2),P=N[0],j=N[1];(0,d.ZP)(!b,"`children` will be removed in next major version. Please use `items` instead.");var R=(n={prefixCls:a,accordion:f,openMotion:h,expandIcon:y,collapsible:g,destroyInactivePanel:void 0!==i&&i,onItemClick:function(e){return j(function(){return f?P[0]===e?[]:[e]:P.indexOf(e)>-1?P.filter(function(t){return t!==e}):[].concat((0,l.Z)(P),[e])})},activeKey:P},Array.isArray(w)?E(w,n):(0,m.Z)(b).map(function(e,t){return k(e,t,n)}));return u.createElement("div",{ref:t,className:S,style:p,role:f?"tablist":void 0},R)}),{Panel:x});Z.Panel;var w=n(98423),S=n(94957),I=n(6030),N=n(15479),P=n(22458);let j=u.forwardRef((e,t)=>{let{getPrefixCls:n}=u.useContext(N.E_),{prefixCls:o,className:a="",showArrow:c=!0}=e,l=n("collapse",o),i=r()({["".concat(l,"-no-arrow")]:!c},a);return u.createElement(Z.Panel,Object.assign({ref:t},e,{prefixCls:l,className:i}))});var R=n(91451),A=n(30077),M=n(22954),T=n(75769);let _=e=>{let{componentCls:t,collapseContentBg:n,padding:o,collapseContentPaddingHorizontal:a,collapseHeaderBg:r,collapseHeaderPadding:c,collapseHeaderPaddingSM:l,collapseHeaderPaddingLG:i,collapsePanelBorderRadius:s,lineWidth:d,lineType:u,colorBorder:p,colorText:f,colorTextHeading:m,colorTextDisabled:v,fontSize:b,fontSizeLG:g,lineHeight:h,marginSM:y,paddingSM:x,paddingLG:C,paddingXS:E,motionDurationSlow:k,fontSizeIcon:O}=e,Z="".concat(d,"px ").concat(u," ").concat(p);return{[t]:Object.assign(Object.assign({},(0,R.Wf)(e)),{backgroundColor:r,border:Z,borderBottom:0,borderRadius:"".concat(s,"px"),"&-rtl":{direction:"rtl"},["& > ".concat(t,"-item")]:{borderBottom:Z,"&:last-child":{["\n            &,\n            & > ".concat(t,"-header")]:{borderRadius:"0 0 ".concat(s,"px ").concat(s,"px")}},["> ".concat(t,"-header")]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:c,paddingInlineStart:x,color:m,lineHeight:h,cursor:"pointer",transition:"all ".concat(k,", visibility 0s"),["> ".concat(t,"-header-text")]:{flex:"auto"},"&:focus":{outline:"none"},["".concat(t,"-expand-icon")]:{height:b*h,display:"flex",alignItems:"center",paddingInlineEnd:y,marginInlineStart:o-x},["".concat(t,"-arrow")]:Object.assign(Object.assign({},(0,R.Ro)()),{fontSize:O,svg:{transition:"transform ".concat(k)}}),["".concat(t,"-header-text")]:{marginInlineEnd:"auto"}},["".concat(t,"-header-collapsible-only")]:{cursor:"default",["".concat(t,"-header-text")]:{flex:"none",cursor:"pointer"}},["".concat(t,"-icon-collapsible-only")]:{cursor:"default",["".concat(t,"-expand-icon")]:{cursor:"pointer"}}},["".concat(t,"-content")]:{color:f,backgroundColor:n,borderTop:Z,["& > ".concat(t,"-content-box")]:{padding:"".concat(o,"px ").concat(a,"px")},"&-hidden":{display:"none"}},"&-small":{["> ".concat(t,"-item")]:{["> ".concat(t,"-header")]:{padding:l,paddingInlineStart:E,["> ".concat(t,"-expand-icon")]:{marginInlineStart:x-E}},["> ".concat(t,"-content > ").concat(t,"-content-box")]:{padding:x}}},"&-large":{["> ".concat(t,"-item")]:{fontSize:g,["> ".concat(t,"-header")]:{padding:i,paddingInlineStart:o,["> ".concat(t,"-expand-icon")]:{height:g*h,marginInlineStart:C-o}},["> ".concat(t,"-content > ").concat(t,"-content-box")]:{padding:C}}},["".concat(t,"-item:last-child")]:{["> ".concat(t,"-content")]:{borderRadius:"0 0 ".concat(s,"px ").concat(s,"px")}},["& ".concat(t,"-item-disabled > ").concat(t,"-header")]:{"\n          &,\n          & > .arrow\n        ":{color:v,cursor:"not-allowed"}},["&".concat(t,"-icon-position-end")]:{["& > ".concat(t,"-item")]:{["> ".concat(t,"-header")]:{["".concat(t,"-expand-icon")]:{order:1,paddingInlineEnd:0,paddingInlineStart:y}}}}})}},z=e=>{let{componentCls:t}=e,n="> ".concat(t,"-item > ").concat(t,"-header ").concat(t,"-arrow svg");return{["".concat(t,"-rtl")]:{[n]:{transform:"rotate(180deg)"}}}},B=e=>{let{componentCls:t,collapseHeaderBg:n,paddingXXS:o,colorBorder:a}=e;return{["".concat(t,"-borderless")]:{backgroundColor:n,border:0,["> ".concat(t,"-item")]:{borderBottom:"1px solid ".concat(a)},["\n        > ".concat(t,"-item:last-child,\n        > ").concat(t,"-item:last-child ").concat(t,"-header\n      ")]:{borderRadius:0},["> ".concat(t,"-item:last-child")]:{borderBottom:0},["> ".concat(t,"-item > ").concat(t,"-content")]:{backgroundColor:"transparent",borderTop:0},["> ".concat(t,"-item > ").concat(t,"-content > ").concat(t,"-content-box")]:{paddingTop:o}}}},L=e=>{let{componentCls:t,paddingSM:n}=e;return{["".concat(t,"-ghost")]:{backgroundColor:"transparent",border:0,["> ".concat(t,"-item")]:{borderBottom:0,["> ".concat(t,"-content")]:{backgroundColor:"transparent",border:0,["> ".concat(t,"-content-box")]:{paddingBlock:n}}}}}};var D=(0,M.Z)("Collapse",e=>{let t=(0,T.TS)(e,{collapseContentBg:e.colorBgContainer,collapseHeaderBg:e.colorFillAlter,collapseHeaderPadding:"".concat(e.paddingSM,"px ").concat(e.padding,"px"),collapseHeaderPaddingSM:"".concat(e.paddingXS,"px ").concat(e.paddingSM,"px"),collapseHeaderPaddingLG:"".concat(e.padding,"px ").concat(e.paddingLG,"px"),collapsePanelBorderRadius:e.borderRadiusLG,collapseContentPaddingHorizontal:16});return[_(t),B(t),L(t),z(t),(0,A.Z)(t)]});let H=u.forwardRef((e,t)=>{let{getPrefixCls:n,direction:a}=u.useContext(N.E_),{prefixCls:c,className:l,rootClassName:i,bordered:s=!0,ghost:d,size:p,expandIconPosition:f="start",children:v,expandIcon:b}=e,g=(0,P.Z)(e=>{var t;return null!==(t=null!=p?p:e)&&void 0!==t?t:"middle"}),h=n("collapse",c),y=n(),[x,C]=D(h),E=u.useMemo(()=>"left"===f?"start":"right"===f?"end":f,[f]),k=r()("".concat(h,"-icon-position-").concat(E),{["".concat(h,"-borderless")]:!s,["".concat(h,"-rtl")]:"rtl"===a,["".concat(h,"-ghost")]:!!d,["".concat(h,"-").concat(g)]:"middle"!==g},l,i,C),O=Object.assign(Object.assign({},(0,S.ZP)(y)),{motionAppear:!1,leavedClassName:"".concat(h,"-content-hidden")}),j=u.useMemo(()=>v?(0,m.Z)(v).map((e,t)=>{var n,o;if(null===(n=e.props)||void 0===n?void 0:n.disabled){let n=null!==(o=e.key)&&void 0!==o?o:String(t),{disabled:a,collapsible:r}=e.props,c=Object.assign(Object.assign({},(0,w.Z)(e.props,["disabled"])),{key:n,collapsible:null!=r?r:a?"disabled":void 0});return(0,I.Tm)(e,c)}return e}):null,[v]);return x(u.createElement(Z,Object.assign({ref:t,openMotion:O},(0,w.Z)(e,["rootClassName"]),{expandIcon:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=b?b(e):u.createElement(o.Z,{rotate:e.isActive?90:void 0});return(0,I.Tm)(t,()=>({className:r()(t.props.className,"".concat(h,"-arrow"))}))},prefixCls:h,className:k}),j))});var F=Object.assign(H,{Panel:j})},233:function(e,t,n){n.d(t,{Z:function(){return g}});var o=n(94184),a=n.n(o),r=n(50344),c=n(67294),l=n(13339),i=n(15479),s=n(29435);let d=c.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),u=d.Provider;function p(e){let{className:t,direction:n,index:o,marginDirection:a,children:r,split:l,wrap:i,style:s}=e,{horizontalSize:u,verticalSize:p,latestIndex:f,supportFlexGap:m}=c.useContext(d),v={};return(!m&&("vertical"===n?o<f&&(v={marginBottom:u/(l?2:1)}):v=Object.assign(Object.assign({},o<f&&{[a]:u/(l?2:1)}),i&&{paddingBottom:p})),null==r)?null:c.createElement(c.Fragment,null,c.createElement("div",{className:t,style:Object.assign(Object.assign({},v),s)},r),o<f&&l&&c.createElement("span",{className:"".concat(t,"-split"),style:v},l))}var f=n(91726),m=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>t.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};let v={small:8,middle:16,large:24},b=c.forwardRef((e,t)=>{var n,o;let{getPrefixCls:s,space:d,direction:b}=c.useContext(i.E_),{size:g=(null==d?void 0:d.size)||"small",align:h,className:y,rootClassName:x,children:C,direction:E="horizontal",prefixCls:k,split:O,style:Z,wrap:w=!1,classNames:S,styles:I}=e,N=m(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),P=(0,l.Z)(),[j,R]=c.useMemo(()=>(Array.isArray(g)?g:[g,g]).map(e=>"string"==typeof e?v[e]:e||0),[g]),A=(0,r.Z)(C,{keepEmpty:!0}),M=void 0===h&&"horizontal"===E?"center":h,T=s("space",k),[_,z]=(0,f.Z)(T),B=a()(T,z,"".concat(T,"-").concat(E),{["".concat(T,"-rtl")]:"rtl"===b,["".concat(T,"-align-").concat(M)]:M},null!=y?y:null==d?void 0:d.className,x),L=a()("".concat(T,"-item"),null!==(n=null==S?void 0:S.item)&&void 0!==n?n:null===(o=null==d?void 0:d.classNames)||void 0===o?void 0:o.item),D="rtl"===b?"marginLeft":"marginRight",H=0,F=A.map((e,t)=>{var n,o;null!=e&&(H=t);let a=e&&e.key||"".concat(L,"-").concat(t);return c.createElement(p,{className:L,key:a,direction:E,index:t,marginDirection:D,split:O,wrap:w,style:null!==(n=null==I?void 0:I.item)&&void 0!==n?n:null===(o=null==d?void 0:d.styles)||void 0===o?void 0:o.item},e)}),K=c.useMemo(()=>({horizontalSize:j,verticalSize:R,latestIndex:H,supportFlexGap:P}),[j,R,H,P]);if(0===A.length)return null;let W={};return w&&(W.flexWrap="wrap",P||(W.marginBottom=-R)),P&&(W.columnGap=j,W.rowGap=R),_(c.createElement("div",Object.assign({ref:t,className:B,style:Object.assign(Object.assign(Object.assign({},W),null==d?void 0:d.style),Z)},N),c.createElement(u,{value:K},F)))});b.Compact=s.ZP;var g=b},30077:function(e,t){t.Z=e=>({[e.componentCls]:{["".concat(e.antCls,"-motion-collapse-legacy")]:{overflow:"hidden","&-active":{transition:"height ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut,",\n        opacity ").concat(e.motionDurationMid," ").concat(e.motionEaseInOut," !important")}},["".concat(e.antCls,"-motion-collapse")]:{overflow:"hidden",transition:"height ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut,",\n        opacity ").concat(e.motionDurationMid," ").concat(e.motionEaseInOut," !important")}}})},79912:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(97937),a=n(94184),r=n.n(a),c=n(67294),l=n(99141),i=n(38444),s=n(15479),d=n(91451),u=n(34430),p=n(22954),f=n(75769);let m=(e,t,n)=>{let o=function(e){if("string"!=typeof e)return e;let t=e.charAt(0).toUpperCase()+e.slice(1);return t}(n);return{["".concat(e.componentCls,"-").concat(t)]:{color:e["color".concat(n)],background:e["color".concat(o,"Bg")],borderColor:e["color".concat(o,"Border")],["&".concat(e.componentCls,"-borderless")]:{borderColor:"transparent"}}}},v=e=>(0,u.Z)(e,(t,n)=>{let{textColor:o,lightBorderColor:a,lightColor:r,darkColor:c}=n;return{["".concat(e.componentCls,"-").concat(t)]:{color:o,background:r,borderColor:a,"&-inverse":{color:e.colorTextLightSolid,background:c,borderColor:c},["&".concat(e.componentCls,"-borderless")]:{borderColor:"transparent"}}}}),b=e=>{let{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:o,componentCls:a}=e,r=o-n;return{[a]:Object.assign(Object.assign({},(0,d.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:r,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,opacity:1,transition:"all ".concat(e.motionDurationMid),textAlign:"start",["&".concat(a,"-rtl")]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},["".concat(a,"-close-icon")]:{marginInlineStart:t-n,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),"&:hover":{color:e.colorTextHeading}},["&".concat(a,"-has-color")]:{borderColor:"transparent",["&, a, a:hover, ".concat(e.iconCls,"-close, ").concat(e.iconCls,"-close:hover")]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",["&:not(".concat(a,"-checkable-checked):hover")]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},["> ".concat(e.iconCls," + span, > span + ").concat(e.iconCls)]:{marginInlineStart:r}}),["".concat(a,"-borderless")]:{borderColor:"transparent",background:e.tagBorderlessBg}}};var g=(0,p.Z)("Tag",e=>{let{lineWidth:t,fontSizeIcon:n}=e,o=e.fontSizeSM,a="".concat(e.lineHeightSM*o,"px"),r=(0,f.TS)(e,{tagFontSize:o,tagLineHeight:a,tagIconSize:n-2*t,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[b(r),v(r),m(r,"success","Success"),m(r,"processing","Info"),m(r,"error","Error"),m(r,"warning","Warning")]},e=>({defaultBg:e.colorFillQuaternary,defaultColor:e.colorText})),h=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>t.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n},y=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>t.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};let x=c.forwardRef((e,t)=>{let{prefixCls:n,className:a,rootClassName:d,style:u,children:p,icon:f,color:m,onClose:v,closeIcon:b,closable:h=!1,bordered:x=!0}=e,C=y(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:E,direction:k}=c.useContext(s.E_),[O,Z]=c.useState(!0);c.useEffect(()=>{"visible"in C&&Z(C.visible)},[C.visible]);let w=(0,l.o2)(m)||(0,l.yT)(m),S=Object.assign({backgroundColor:m&&!w?m:void 0},u),I=E("tag",n),[N,P]=g(I),j=r()(I,{["".concat(I,"-").concat(m)]:w,["".concat(I,"-has-color")]:m&&!w,["".concat(I,"-hidden")]:!O,["".concat(I,"-rtl")]:"rtl"===k,["".concat(I,"-borderless")]:!x},a,d,P),R=e=>{e.stopPropagation(),null==v||v(e),e.defaultPrevented||Z(!1)},A=c.useMemo(()=>h?b?c.createElement("span",{className:"".concat(I,"-close-icon"),onClick:R},b):c.createElement(o.Z,{className:"".concat(I,"-close-icon"),onClick:R}):null,[h,b,I,R]),M="function"==typeof C.onClick||p&&"a"===p.type,T=f||null,_=T?c.createElement(c.Fragment,null,T,c.createElement("span",null,p)):p,z=c.createElement("span",Object.assign({},C,{ref:t,className:j,style:S}),_,A);return N(M?c.createElement(i.Z,null,z):z)});x.CheckableTag=e=>{let{prefixCls:t,className:n,checked:o,onChange:a,onClick:l}=e,i=h(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:d}=c.useContext(s.E_),u=d("tag",t),[p,f]=g(u),m=r()(u,{["".concat(u,"-checkable")]:!0,["".concat(u,"-checkable-checked")]:o},n,f);return p(c.createElement("span",Object.assign({},i,{className:m,onClick:e=>{null==a||a(!o),null==l||l(e)}})))};var C=x},23310:function(e,t,n){n.d(t,{i:function(){return o}});let o=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"]},34430:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(23310);function a(e,t){return o.i.reduce((n,o)=>{let a=e["".concat(o,"1")],r=e["".concat(o,"3")],c=e["".concat(o,"6")],l=e["".concat(o,"7")];return Object.assign(Object.assign({},n),t(o,{lightColor:a,lightBorderColor:r,darkColor:c,textColor:l}))},{})}},38135:function(e,t,n){n.d(t,{s:function(){return b},v:function(){return h}});var o,a,r=n(74165),c=n(15861),l=n(71002),i=n(1413),s=n(73935),d=(0,i.Z)({},o||(o=n.t(s,2))),u=d.version,p=d.render,f=d.unmountComponentAtNode;try{Number((u||"").split(".")[0])>=18&&(a=d.createRoot)}catch(e){}function m(e){var t=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&"object"===(0,l.Z)(t)&&(t.usingClientEntryPoint=e)}var v="__rc_react_root__";function b(e,t){if(a){var n;m(!0),n=t[v]||a(t),m(!1),n.render(e),t[v]=n;return}p(e,t)}function g(){return(g=(0,c.Z)((0,r.Z)().mark(function e(t){return(0,r.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve().then(function(){var e;null===(e=t[v])||void 0===e||e.unmount(),delete t[v]}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){return y.apply(this,arguments)}function y(){return(y=(0,c.Z)((0,r.Z)().mark(function e(t){return(0,r.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(void 0!==a)){e.next=2;break}return e.abrupt("return",function(e){return g.apply(this,arguments)}(t));case 2:f(t);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}}}]);