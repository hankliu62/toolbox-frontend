(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2971],{99204:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions",function(){return n(24772)}])},13274:function(e,t,n){"use strict";var s=n(85893),a=n(98165),l=n(94184),o=n.n(l);n(67294);var r=n(56537);function i(){return(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(a.Z,{spin:!0,className:"text-lg text-[#1677ff]",rev:void 0})})}t.Z=function(e){let{className:t,style:n,visible:a=!0,disabled:l=!1,indicator:c=(0,s.jsx)(i,{}),onEnter:u,...d}=e;return a?(0,s.jsxs)("div",{className:o()("py-3 text-center",t),style:n,children:[l?null:(0,s.jsx)(r.h,{...d,onEnter:e=>{!l&&u&&u(e)}}),c]}):null}},37172:function(e,t,n){"use strict";n.d(t,{CH:function(){return c},CI:function(){return o},JY:function(){return a},h2:function(){return r},ou:function(){return u},oz:function(){return l},x_:function(){return i}});var s=n(34155);let a=["g","h","p","_","Y","x","6","S","E","W","5","y","c","9","f","A","N","a","A","G","7","t","o","d","Q","L","Y","5","W","S","V","X","p","I","4","J","0","v","k","5"];[...s.env.NEXT_GITHUB_BACKEND_TOKEN||""];let l="https://api.github.com",o="https://github.com",r="hankliu62",i="hankliu62.github.com",c="interview",u="2022-11-28"},21694:function(e,t,n){"use strict";var s=n(67294);t.Z=function(e,t){(0,s.useEffect)(()=>{e()},t)}},9074:function(e,t,n){"use strict";n.d(t,{cp:function(){return d}});var s=n(94301),a=n.n(s),l=n(37172);let o=l.JY.join(""),r=new Map,i=new Map,c=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s="".concat(l.oz,"/repos/").concat(l.h2,"/").concat(e,"/issues"),r=n.perPage||10;for(let e in delete n.perPage,s+="?creator=".concat(l.h2,"&per_page=").concat(r,"&page=").concat(t||1),n)Object.prototype.hasOwnProperty.call(n,e)&&(s+="&".concat(e,"=").concat(n[e]));return a()(s,{headers:{"X-GitHub-Api-Version":l.ou,Authorization:"Bearer ".concat(o)}}).then(e=>e.json())},u=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(n=>{let s=[],a=1;async function l(){let o=await c(e,a,{...t,perPage:100});if(o.length>0){for(let e of o)s.push(e);a++,setTimeout(l,100)}else n(s)}l()})},d=async function(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return n?new Promise(async a=>{let l=Date.now(),o=l-(i.get(e)||0)<36e5,c=[];if(o)c=r.get(e);else{let t=await u(e,s);r.set(e,t),i.set(e,l),c=t}a(c.filter(e=>{var t;return e.title&&e.title.toLowerCase().includes(n.toLowerCase())||e.body&&e.body.toLowerCase().includes(n.toLowerCase())||(null===(t=e.labels)||void 0===t?void 0:t.some(e=>e.name.toLowerCase().includes(n.toLowerCase())))}).slice((t-1)*10,10*t))}):c(e,t,s)}},24772:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return S},default:function(){return E}});var s=n(85893),a=n(67337),l=n(65184),o=n(87547),r=n(24019),i=n(70801),c=n(233),u=n(67966),d=n(41782),f=n(74293),p=n(22377),h=n(77278),m=n(51289),v=n(23686),x=n(79912),j=n(94184),b=n.n(j),g=n(27484),N=n.n(g),w=n(11163),y=n(67294),C=n(13274),Z=n(37172),_=n(21694),k=n(9074);let P=e=>{let{icon:t,text:n,onClick:a}=e;return(0,s.jsxs)(c.Z,{onClick:a||(()=>{}),children:[y.createElement(t),n]})};var S=!0;function E(e){let{labels:t}=e,n=(0,w.useRouter)(),[j,g]=(0,y.useState)(n.query.label),[S,E]=(0,y.useState)(!0),[D,I]=(0,y.useState)(!1),[L,Y]=(0,y.useState)(!0),[q,H]=(0,y.useState)([]),[T,z]=(0,y.useState)(1),[A,M]=(0,y.useState)();(0,_.Z)(async()=>{O(1,A,n.query.label)},[]);let O=async(e,t,n)=>{I(!0),1===e&&Y(!1),console.log("fetch issues",e,n);let s=await (0,k.cp)(Z.CH,e,t,{labels:[n].filter(Boolean).join(",")});I(!1),z(e),1===e?H(s):H(e=>[...e,...s||[]]),(null==s?void 0:s.length)===0&&Y(!0)},X=(0,y.useCallback)(e=>{g(null==e?void 0:e.name),O(1,A,null==e?void 0:e.name);let t=e?{...n.query,label:e.name}:{...n.query};e||delete t.label,n.replace({pathname:n.pathname,query:t})},[n,A]),B=(0,y.useCallback)(()=>{O(T+1,A,j)},[T,A,j]),G=(0,y.useCallback)(e=>{M(e),O(1,e,j)},[j]);return(0,s.jsxs)("div",{className:"flex space-x-6 bg-white p-6",children:[(0,s.jsx)("div",{className:"w-64",children:(0,s.jsxs)(u.Z,{offsetTop:24,children:[(0,s.jsx)(d.Z.Search,{placeholder:"输入关键词，按回车搜索",className:"mb-4 w-full",onSearch:G,size:"large",allowClear:!0}),(0,s.jsx)(f.Z,{className:"questions-collapse",defaultActiveKey:["labels"],onChange:e=>{E(e.includes("labels"))},expandIconPosition:"end",items:[{key:"labels",label:(0,s.jsx)("span",{className:"cursor-pointer text-base font-bold underline-offset-2 hover:text-[#1171ee] hover:underline",onClick:e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),X()},"aria-hidden":"true",children:"标签"}),children:(0,s.jsx)("div",{className:"max-h-[620px] overflow-y-auto p-[16px]",children:(t||[]).map(e=>(0,s.jsxs)("div",{className:b()("group flex space-x-4 rounded-md p-2 hover:cursor-pointer hover:bg-[#f7f8fa]",{"bg-[#eaf2ff] hover:bg-[#eaf2ff]":e.name===j}),onClick:()=>X(e),"aria-hidden":"true",children:[(0,s.jsx)("div",{className:"flex flex-col justify-center",children:(0,s.jsx)(a.Z,{rev:void 0,style:{color:"#".concat(e.color)},className:"text-lg font-medium"})}),(0,s.jsx)("div",{className:b()("text-base font-normal text-[#515767] group-hover:text-[#1171ee]",{"text-[#1e80ff] group-hover:text-[#1e80ff]":e.name===j}),children:e.title})]},e.id))}),extra:(0,s.jsx)("div",{className:"-mr-2",children:S?"收起":"展开"})}]})]})}),(0,s.jsx)("div",{className:"flex-1 overflow-hidden",children:(0,s.jsxs)(p.Z,{size:"small",className:"issues-card min-h-full !border-[#d9d9d9]",children:[(0,s.jsx)(h.Z,{className:"issues-list",itemLayout:"vertical",size:"large",pagination:!1,dataSource:q,loading:D,renderItem:e=>{var t,a,u;return(0,s.jsxs)(h.Z.Item,{className:"cursor-pointer rounded-md hover:bg-[#f6f8fa]",actions:[(0,s.jsxs)(c.Z,{onClick:t=>{(null==t?void 0:t.stopPropagation)&&t.stopPropagation(),(null==t?void 0:t.preventDefault)&&t.preventDefault(),window.open("".concat(Z.CI,"/").concat(Z.h2,"/").concat(Z.CH,"/issues/").concat(e.number),"_blank")},className:"group cursor-pointer",children:[(0,s.jsx)(l.Z,{className:"group-hover:text-[#1171ee]",rev:void 0}),(0,s.jsx)("span",{className:"group-hover:text-[#1171ee]",children:"#".concat(e.number)})]},"list-vertical-id"),(0,s.jsxs)(c.Z,{onClick:t=>{(null==t?void 0:t.stopPropagation)&&t.stopPropagation(),(null==t?void 0:t.preventDefault)&&t.preventDefault(),window.open("".concat(Z.CI,"/").concat(e.user.login),"_blank")},className:"group cursor-pointer",children:[(0,s.jsx)(o.Z,{className:"group-hover:text-[#1171ee]",rev:void 0}),(0,s.jsx)("span",{className:"group-hover:text-[#1171ee]",children:e.user.login})]},"list-vertical-user"),(0,s.jsx)(P,{icon:r.Z,text:N()(e.created_at).format("YYYY-MM-DD HH:mm:ss")},"list-vertical-time"),(0,s.jsx)(P,{icon:i.Z,text:e.state},"list-vertical-status"),(0,s.jsx)(c.Z,{children:(0,s.jsx)(m.Z,{title:"难度: ".concat((null===(t=e.milestone)||void 0===t?void 0:t.number)?(null===(a=e.milestone)||void 0===a?void 0:a.number)+"颗\uD83C\uDF1F":"未设置"),children:(0,s.jsx)(v.Z,{defaultValue:(null===(u=e.milestone)||void 0===u?void 0:u.number)||0,disabled:!0})})},"list-difficulty")],onClick:()=>{n.push({pathname:"".concat(n.pathname,"/").concat(e.number)})},children:[(0,s.jsx)(h.Z.Item.Meta,{className:"!mb-0",title:(0,s.jsxs)("div",{className:"flex items-center justify-start space-x-2",children:[(0,s.jsx)("div",{className:"issue-title underline-offset-2",children:e.title}),(0,s.jsx)("div",{className:"flex items-center justify-start",children:e.labels.map(e=>(0,s.jsx)(x.Z,{color:"#".concat(e.color),children:e.name},e.id))})]})}),(0,s.jsx)("div",{className:"truncate empty:hidden",children:e.body||""})]},e.id)}}),(0,s.jsx)(C.Z,{className:b()({invisible:1===T}),disabled:D,visible:!L,onEnter:B})]})})]})}}},function(e){e.O(0,[8971,6396,1782,7847,8490,2555,5061,3845,9774,2888,179],function(){return e(e.s=99204)}),_N_E=e.O()}]);