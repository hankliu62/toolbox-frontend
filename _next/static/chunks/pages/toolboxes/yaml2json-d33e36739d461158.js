(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9364],{57132:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var s=a(87462),n=a(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},o=a(42135),r=n.forwardRef(function(e,t){return n.createElement(o.Z,(0,s.Z)({},e,{ref:t,icon:c}))})},20640:function(e,t,a){"use strict";var s=a(11742),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,c,o,r,l,i,u,d,E=!1;t||(t={}),o=t.debug||!1;try{if(l=s(),i=document.createRange(),u=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(a){if(a.stopPropagation(),t.format){if(a.preventDefault(),void 0===a.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=n[t.format]||n.default;window.clipboardData.setData(s,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e)}t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))}),document.body.appendChild(d),i.selectNodeContents(d),u.addRange(i),!document.execCommand("copy"))throw Error("copy command was unsuccessful");E=!0}catch(s){o&&console.error("unable to copy using execCommand: ",s),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),E=!0}catch(s){o&&console.error("unable to copy using clipboardData: ",s),o&&console.error("falling back to prompt"),a="message"in t?t.message:"Copy to clipboard: #{key}, Enter",c=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",r=a.replace(/#{\s*key\s*}/g,c),window.prompt(r,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(i):u.removeAllRanges()),d&&document.body.removeChild(d),l()}return E}},98282:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toolboxes/yaml2json",function(){return a(89264)}])},61647:function(e,t,a){"use strict";var s=a(34037),n=a(20640),c=a.n(n),o=a(67294);class r extends o.Component{render(){let{children:e,tag:t}=this.props;return o.createElement(t,{onClick:this.onClick},e)}constructor(...e){super(...e),this.onClick=e=>{let{children:t,text:a,onSuccess:s,options:n}=this.props,r=o.Children.only(t),l="function"==typeof a?a():a,i=c()(l,n);s&&s(l,i),(null==r?void 0:r.props)&&"function"==typeof r.props.onClick&&r.props.onClick(e)}}}r.defaultProps={tag:"span",text:"",onSuccess(){s.ZP.success("已将内容复制到剪贴板")},options:{}},t.Z=Object.assign(r,{copy:c()})},89264:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var s=a(85893),n=a(15360),c=a(57132),o=a(34037),r=a(78971),l=a(1272),i=a(67294),u=a(78396),d=a.n(u),E=a(61647),f=a(6305),N=a(9274);function m(){let[e,t]=(0,i.useState)("yaml"),[a,u]=(0,i.useState)(),[m,p]=(0,i.useState)();(0,i.useEffect)(()=>{if("yaml"===e){let e=function(e){if(!e)return"";try{let t=l.ZP.load(e);if(t)return JSON.stringify(t,null,"  ");o.ZP.error("转换失败")}catch(e){console.error(e),o.ZP.error(e.message)}}(a);e&&p(e)}},[a,e]),(0,i.useEffect)(()=>{if("json"===e){let e=function(e){let t;if(!e)return"";try{t=JSON.parse(e)}catch(e){}try{if(t){let e=l.ZP.dump(t);if(e)return e;o.ZP.error("转换失败")}}catch(e){console.error(e),o.ZP.error(e.message)}}(m);e&&u(e)}},[m,e]);let C=(0,i.useCallback)(()=>{p(void 0),u(void 0),"yaml"===e?t("json"):t("yaml")},[e]),y=(0,i.useCallback)(()=>{"yaml"===e?u(N.d.yaml):p(N.d.json)},[e]),x=(0,i.useCallback)(t=>{"yaml"===e?u(t):p(t)},[e]),S=(0,i.useCallback)(t=>{console.log("target ".concat({json:"yaml",yaml:"json"}[e]," changed."),t)},[e]),_=()=>(0,s.jsx)(f.p,{value:a,language:"yaml",onChange:"yaml"===e?x:S,options:{theme:"vs-dark",readOnly:"yaml"!==e}}),h=()=>(0,s.jsx)(f.p,{value:m,language:"json",onChange:"yaml"===e?S:x,options:{theme:"vs-dark",readOnly:"yaml"===e}});return(0,s.jsx)("div",{className:"relative flex h-full flex-1 flex-col bg-white",children:(0,s.jsxs)(d(),{className:"flex-1",split:"vertical",minSize:50,maxSize:75,children:[(0,s.jsxs)("div",{className:"overflow-y-auto",children:[(0,s.jsxs)("div",{className:"flex justify-between border-b border-black/20 px-6 py-4",children:[(0,s.jsx)("h2",{className:"text-lg font-medium leading-[32px]",children:e.toUpperCase()}),(0,s.jsxs)("div",{className:"flex items-center space-x-5",children:[(0,s.jsx)(r.ZP,{className:"!inline-flex items-center",icon:(0,s.jsx)(n.Z,{rev:void 0}),onClick:y,children:"案例"}),(0,s.jsx)(E.Z,{text:"yaml"===e?a:m,onSuccess:()=>{o.ZP.success("复制成功")},children:(0,s.jsx)(r.ZP,{className:"!inline-flex items-center",icon:(0,s.jsx)(c.Z,{rev:void 0}),children:"拷贝"})})]})]}),"yaml"===e?_():h()]}),(0,s.jsxs)("div",{className:"overflow-y-auto",children:[(0,s.jsxs)("div",{className:"flex justify-between border-b border-black/20 px-6 py-4",children:[(0,s.jsx)("h2",{className:"text-lg font-medium leading-[32px]",children:({json:"yaml",yaml:"json"})[e].toUpperCase()}),(0,s.jsxs)("div",{className:"flex items-center space-x-5",children:[(0,s.jsx)(r.ZP,{className:"!inline-flex items-center",icon:(0,s.jsx)("span",{className:"anticon anticon-file-text",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-[14px] w-[14px]",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"})})}),onClick:C,children:"交换"}),(0,s.jsx)(E.Z,{text:"yaml"===e?m:a,onSuccess:()=>{o.ZP.success("复制成功")},children:(0,s.jsx)(r.ZP,{className:"!inline-flex items-center",icon:(0,s.jsx)(c.Z,{rev:void 0}),children:"拷贝"})})]})]}),"yaml"===e?h():_()]})]})})}},15105:function(e,t){"use strict";var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=a.F1&&t<=a.F12)return!1;switch(t){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=a.ZERO&&e<=a.NINE||e>=a.NUM_ZERO&&e<=a.NUM_MULTIPLY||e>=a.A&&e<=a.Z||-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};t.Z=a},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],s=0;s<e.rangeCount;s++)a.push(e.getRangeAt(s));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},function(e){e.O(0,[8971,4037,8396,1272,5427,9774,2888,179],function(){return e(e.s=98282)}),_N_E=e.O()}]);