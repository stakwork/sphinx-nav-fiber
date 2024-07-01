import{aM as zc,r as F,f as T,h as v,i as Ge,j as c,l as yt,F as C,N as Ws,U as nn,aN as Pr,aO as Nc,ae as Us,T as ye,k as $e,aP as Vs,aQ as Fc,y as Gs,o as Yc,V as Bc,a5 as qe,aR as qi,a3 as $c,B as Ir,J as Zi,aS as Hc}from"./index-764dd9e8.js";import{l as Wc,m as yr,b as qs,B as Be,A as Je,d as Uc,I as Zs,f as Hn,g as rn,P as Wr,n as Wn,C as Ur,o as Vc,i as Qs,S as Gc}from"./react-toastify.esm-f273c043.js";import{C as Xs}from"./CheckIcon-28f4029d.js";import{C as Js}from"./ChevronDownIcon-35b80199.js";import{C as qc}from"./ChevronUpIcon-7d4652ee.js";import{F as Ks,a as eo,T as Zc}from"./Popover-04da5681.js";import{P as to}from"./PlusIcon-785d1109.js";import{L as wt,G as no,B as Vr,H as Qc,M as Xc,p as Jc,R as Kc,a as eh,S as th,b as nh,N as ro,C as rh,D as Gr,c as io,d as ih,f as sh,g as so,e as oh,P as ah,h as oo,s as Qi,V as lh,F as uh,E as ch,i as hh,j as dh,k as ao,l as fh}from"./ChevronRightIcon-3da235e8.js";import{S as ph}from"./index-8d6ea39b.js";import{f as Nn,o as lo,P as uo,n as mh,X as xh,Y as gh,T as yh,D as wh,S as qr,q as co}from"./generateCategoricalChart-acd9200a.js";import{T as Yt,I as kh,S as bh,O as _h}from"./index-f535dfe9.js";import{S as Sh}from"./Skeleton-55d164a9.js";import{f as vh,c as Ch,g as jh,h as Th}from"./index.esm-493909c5.js";import{I as Mh}from"./InfoIcon-607a1426.js";import{B as Dh}from"./index-871e0036.js";import"./useSlotProps-4dea8ecb.js";const Eh=(e,n="down")=>{const r=zc(),[i,o]=F.useState(!1),a=r.breakpoints[n](e).split("@media")[1].trim();return F.useEffect(()=>{const l=()=>{const{matches:d}=window.matchMedia(a);o(d)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[a]),i},Oh=e=>e.filter(n=>n.tldr).length>=2&&e.some(n=>n.audio_EN);function Ph(e){return e.tldr_topic??e.name}var Fn=globalThis&&globalThis.__assign||function(){return Fn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Fn.apply(this,arguments)},Ih=globalThis&&globalThis.__rest||function(e,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r},Ah=Wc("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function Rh(e){var n=e.loading,r=n===void 0?!0:n,i=e.color,o=i===void 0?"#000000":i,a=e.speedMultiplier,l=a===void 0?1:a,d=e.cssOverride,m=d===void 0?{}:d,p=e.size,g=p===void 0?15:p,y=e.margin,w=y===void 0?2:y,x=Ih(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),S=Fn({display:"inherit"},m),M=function(j){return{display:"inline-block",backgroundColor:o,width:yr(g),height:yr(g),margin:yr(w),borderRadius:"100%",animation:"".concat(Ah," ").concat(.7/l,"s ").concat(j%2?"0s":"".concat(.35/l,"s")," infinite linear"),animationFillMode:"both"}};return r?F.createElement("span",Fn({style:S},x),F.createElement("span",{style:M(1)}),F.createElement("span",{style:M(2)}),F.createElement("span",{style:M(3)})):null}const Lh=()=>{var y;const[e,n]=F.useState(null),{sidebarFilter:r,setSidebarFilter:i,sidebarFilterCounts:o}=Ge(w=>w),a=r==="undefined"?"":r.toLowerCase(),l=((y=o.find(w=>w.name===a))==null?void 0:y.count)||0,d=w=>w?w.charAt(0).toUpperCase()+w.slice(1):"",m=w=>{n(w.currentTarget)},p=()=>{n(null)},g=w=>{i(w),p()};return c.jsxs("div",{children:[c.jsxs(zh,{onClick:m,children:[c.jsx("div",{className:"text",children:"Show"}),c.jsx("div",{className:"value","data-testid":"value",children:`${d(a)} (${l})`}),c.jsx("div",{className:"icon",children:e?c.jsx(qc,{}):c.jsx(Js,{})})]}),c.jsx(Fh,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:p,open:!!e,transformOrigin:{vertical:"top",horizontal:"left"},children:c.jsx(Ks,{children:o.filter(({name:w})=>w).map(({name:w,count:x})=>c.jsxs(Nh,{className:yt({active:w===r}),onClick:S=>{S.preventDefault(),g(w)},children:[c.jsx("span",{className:"icon",children:w===r?c.jsx(Xs,{}):null}),c.jsx("span",{children:`${d(w)} (${x})`})]},w))})})]})},zh=T(C).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${v.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${v.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,Nh=T(C).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${v.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${v.white};
  }
  &:hover {
    color: ${v.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Fh=T(eo)`
  .MuiPaper-root {
    background: ${v.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${v.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Yh=({showAllSchemas:e,setShowAllSchemas:n,setSelectedTypes:r,setIsFilterOpen:i,setAnchorEl:o,selectedTypes:a,schemaAll:l,anchorEl:d})=>{const m=w=>{r(x=>x.includes(w)?x.filter(S=>S!==w):[...x,w])},p=async()=>{r([])},g=async()=>{const w="graph/search",x=new URLSearchParams({node_type:a.join(",")});try{await Ws.get(`/${w}?${x.toString()}`)}catch(S){console.warn(S)}},y=()=>{n(!0)};return c.jsxs(Bh,{anchorEl:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:200,left:0},onClose:()=>{o(null),i(!1)},open:!!d,PaperProps:{style:{marginTop:"13px",marginLeft:"30px"}},transformOrigin:{vertical:"top",horizontal:"right"},children:[c.jsxs($h,{children:[c.jsx("div",{children:"Type"}),c.jsxs(Hh,{children:[c.jsx(Wh,{children:a.length}),c.jsx(Uh,{children:"Selected"})]})]}),c.jsxs(Vh,{children:[c.jsx(Qh,{children:(e?l:l.slice(0,15)).map(w=>c.jsx(Xh,{isSelected:a.includes(w.type),onClick:()=>m(w==null?void 0:w.type),children:w.type},w.type))}),!e&&l.length>15&&c.jsx(Jh,{onClick:y,children:c.jsxs(Zh,{children:[c.jsx(to,{})," View More"]})})]}),c.jsx(qh,{}),c.jsx(Gh,{children:c.jsxs(C,{direction:"row",mb:6,children:[c.jsxs(Kh,{color:"secondary",onClick:p,size:"large",style:{marginRight:20},variant:"contained",children:[c.jsx(ed,{children:c.jsx(qs,{})}),"Clear"]}),c.jsx(td,{color:"secondary",onClick:g,size:"large",variant:"contained",children:"Show Results"})]})})]})},Bh=T(eo)`
  .MuiPaper-root {
    background: ${v.BG2};
    padding: 16px;
    min-width: 360px;
    color: ${v.white};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 9px;
    max-width: 361px;
    border: 1px solid ${v.black};
  }
`,$h=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  font-family: Barlow;
  font-size: 18px;
  font-weight: 500;
`,Hh=T.div`
  font-size: 13px;
  display: flex;
  align-items: center;
`,Wh=T.span`
  color: ${v.white};
`,Uh=T.span`
  color: ${v.GRAY3};
  margin-left: 4px;
`,Vh=T.div`
  padding: 13px 0;
  position: relative;
`,Gh=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`,qh=T.div`
  border: 1px solid ${v.black};
  width: calc(100% + 32px);
  margin: 13px -16px;
`,Zh=T.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  svg {
    width: 23px;
    height: 23px;
    fill: none;
    margin-top: 2px;
  }
`,Qh=T(C).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  flex-wrap: wrap;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
  margin-right: calc(0px - 16px);
`,Xh=T(C).attrs({align:"center",direction:"row",justify:"flex-start"})`
  color: ${({isSelected:e})=>e?v.black:v.white};
  background: ${({isSelected:e})=>e?v.white:v.BUTTON1_PRESS};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 3px;
  border-radius: 200px;
  cursor: pointer;

  &:hover {
    background: ${({isSelected:e})=>e?v.white:v.BUTTON1_PRESS};
  }

  &:active {
    background: ${v.white};
    color: ${v.black};
  }
`,Jh=T.button`
  background: transparent;
  color: ${v.white};
  border: none;
  padding: 6px 12px 6px 3px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 4px;
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background: ${v.BUTTON1_HOVER};
  }

  &:active {
    background: ${v.BUTTON1_PRESS};
  }
`,Kh=T(Be)`
  && {
    color: ${v.white};
    background-color: ${v.BUTTON1};
    padding-left: 4px;
    &:hover,
    &:active,
    &:focus {
      color: rgba(255, 255, 255, 0.85);
      background-color: ${v.BUTTON1};
    }
  }
`,ed=T.span`
  svg {
    width: 32px;
    height: 32px;
    color: ${v.GRAY7};
    fill: none;
    margin-top: 2px;
  }
`,td=T(Be)`
  && {
    flex: 1;
    padding: 2px 55px;
  }
`,nd=e=>c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M5.99995 7.22422L1.71245 11.5117C1.55203 11.6721 1.34787 11.7523 1.09995 11.7523C0.852035 11.7523 0.647868 11.6721 0.487451 11.5117C0.327035 11.3513 0.246826 11.1471 0.246826 10.8992C0.246826 10.6513 0.327035 10.4471 0.487451 10.2867L4.77495 5.99922L0.487451 1.71172C0.327035 1.5513 0.246826 1.34714 0.246826 1.09922C0.246826 0.851302 0.327035 0.647135 0.487451 0.486719C0.647868 0.326302 0.852035 0.246094 1.09995 0.246094C1.34787 0.246094 1.55203 0.326302 1.71245 0.486719L5.99995 4.77422L10.2875 0.486719C10.4479 0.326302 10.652 0.246094 10.9 0.246094C11.1479 0.246094 11.352 0.326302 11.5125 0.486719C11.6729 0.647135 11.7531 0.851302 11.7531 1.09922C11.7531 1.34714 11.6729 1.5513 11.5125 1.71172L7.22495 5.99922L11.5125 10.2867C11.6729 10.4471 11.7531 10.6513 11.7531 10.8992C11.7531 11.1471 11.6729 11.3513 11.5125 11.5117C11.352 11.6721 11.1479 11.7523 10.9 11.7523C10.652 11.7523 10.4479 11.6721 10.2875 11.5117L5.99995 7.22422Z",fill:"currentColor"})}),rd=e=>c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M7.38474 15.5C7.13341 15.5 6.92316 15.4153 6.75399 15.246C6.58466 15.0768 6.49999 14.8666 6.49999 14.6152V8.827L0.901988 1.7155C0.709655 1.459 0.681738 1.19233 0.818238 0.9155C0.954905 0.6385 1.18541 0.5 1.50974 0.5H14.4902C14.8146 0.5 15.0451 0.6385 15.1817 0.9155C15.3182 1.19233 15.2903 1.459 15.098 1.7155L9.49999 8.827V14.6152C9.49999 14.8666 9.41532 15.0768 9.24599 15.246C9.07682 15.4153 8.86657 15.5 8.61524 15.5H7.38474Z",fill:"currentColor"})}),wr=[["Searching","Podcast Index"],["Finding","Transcripts"],["Loading","Audio Clips"],["Loading","Video Clips"],["Preparing","Results"]],id=()=>{const[e,n]=F.useState(0);return F.useEffect(()=>{if(e===wr.length-1)return;const r=setTimeout(()=>n(i=>(i+1)%wr.length),2e3);return()=>clearTimeout(r)},[e]),c.jsx(sd,{direction:"column",children:wr.map((r,i)=>c.jsxs(C,{className:yt("raw-wrapper",{show:e===i}),direction:"row",children:[c.jsx("div",{className:yt("action"),children:r[0]}),c.jsx("div",{className:yt("entity"),children:r[1]}),c.jsx("div",{children:c.jsx(Rh,{color:v.SECONDARY_BLUE,size:2})})]},r[1]))})},sd=T(C)`
  overflow: hidden;
  height: 20px;
  position: relative;
  .action {
    color: ${v.white};
    margin-right: 8px;
  }

  .raw-wrapper {
    height: 0;
    overflow: hidden;
    transition: height 0.7s ease-in-out;
    align-items: flex-end;
    &.show {
      height: 20px;
    }
  }

  .entity {
    color: ${v.SECONDARY_BLUE};
  }
`,od=e=>c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:c.jsxs("g",{id:"browse_gallery",children:[c.jsx("mask",{id:"mask0_1360_27257",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:c.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),c.jsx("g",{mask:"url(#mask0_1360_27257)",children:c.jsx("path",{id:"browse_gallery_2",d:"M11.8 15.8442L12.8442 14.8L9.74998 11.7026V7.25003H8.25003V12.2942L11.8 15.8442ZM18 19.9615V18.3C19.2333 17.7167 20.2083 16.8583 20.925 15.725C21.6417 14.5917 22 13.35 22 12C22 10.65 21.6417 9.40834 20.925 8.27501C20.2083 7.14167 19.2333 6.28334 18 5.70001V4.03851C19.6628 4.67184 20.9952 5.71318 21.9971 7.16253C22.999 8.61188 23.5 10.2244 23.5 12C23.5 13.7756 22.999 15.3881 21.9971 16.8375C20.9952 18.2868 19.6628 19.3282 18 19.9615ZM9.00055 20.5C7.8207 20.5 6.71539 20.2769 5.68463 19.8307C4.65386 19.3846 3.75514 18.7782 2.98848 18.0115C2.22181 17.2449 1.61541 16.3463 1.16927 15.3159C0.723092 14.2855 0.5 13.1804 0.5 12.0006C0.5 10.8207 0.723083 9.7154 1.16925 8.68463C1.6154 7.65386 2.2218 6.75515 2.98845 5.98848C3.75512 5.22183 4.65365 4.61543 5.68405 4.16928C6.71445 3.72311 7.81957 3.50003 8.99942 3.50003C10.1793 3.50003 11.2846 3.72311 12.3154 4.16928C13.3461 4.61543 14.2448 5.22183 15.0115 5.98848C15.7782 6.75515 16.3846 7.65368 16.8307 8.68408C17.2769 9.71448 17.5 10.8196 17.5 11.9995C17.5 13.1793 17.2769 14.2846 16.8307 15.3154C16.3846 16.3461 15.7782 17.2449 15.0115 18.0115C14.2448 18.7782 13.3463 19.3846 12.3159 19.8307C11.2855 20.2769 10.1804 20.5 9.00055 20.5ZM9 19C10.95 19 12.6042 18.3208 13.9625 16.9625C15.3208 15.6042 16 13.95 16 12C16 10.05 15.3208 8.39584 13.9625 7.03751C12.6042 5.67917 10.95 5.00001 9 5.00001C7.05 5.00001 5.39583 5.67917 4.0375 7.03751C2.67917 8.39584 2 10.05 2 12C2 13.95 2.67917 15.6042 4.0375 16.9625C5.39583 18.3208 7.05 19 9 19Z",fill:"currentColor"})})]})}),ad=e=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",children:[c.jsx("mask",{id:"mask0_2638_2680",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:c.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),c.jsx("g",{mask:"url(#mask0_2638_2680)",children:c.jsx("path",{d:"M9.99732 16C9.90858 16 9.82421 15.985 9.74419 15.9551C9.66418 15.9252 9.5909 15.8765 9.52435 15.8091L6.18835 12.4277C6.06278 12.3004 6 12.1406 6 11.9483C6 11.7559 6.06278 11.5961 6.18835 11.4689C6.32145 11.3315 6.48099 11.2648 6.66697 11.2686C6.85295 11.2724 7.00873 11.3392 7.13429 11.4689L9.32114 13.674V4.68539C9.32114 4.49306 9.3864 4.33074 9.51692 4.19845C9.64744 4.06615 9.80758 4 9.99732 4C10.1871 4 10.3472 4.06615 10.4777 4.19845C10.6082 4.33074 10.6735 4.49306 10.6735 4.68539V13.674L12.849 11.4689C12.9845 11.3315 13.1447 11.2629 13.3294 11.2629C13.5143 11.2629 13.6744 11.3315 13.8099 11.4689C13.9378 11.6062 14.0012 11.7685 14 11.9558C13.9988 12.1431 13.9354 12.3004 13.8099 12.4277L10.4738 15.8091C10.4073 15.8765 10.3334 15.9252 10.2522 15.9551C10.171 15.985 10.0861 16 9.99732 16Z",fill:"currentColor"})})]}),ld=T(C)`
  overflow-y: auto;
  overflow-x: hidden;
  background: ${v.body};
`,ud=({imageUrl:e,name:n,sourceLink:r,date:i})=>c.jsxs(C,{grow:1,shrink:1,children:[c.jsxs(C,{align:"center",direction:"row",justify:"space-between",children:[c.jsxs(C,{align:"center",direction:"row",children:[e&&c.jsx(cd,{children:c.jsx(Je,{rounded:!0,size:64,src:e||"",type:"image"})}),n&&c.jsx(hd,{children:n})]}),r&&c.jsx(Dt,{href:`${r}${r!=null&&r.includes("?")?"&":"?"}open=system`,onClick:o=>o.stopPropagation(),target:"_blank",children:c.jsx(wt,{})})]}),c.jsx(C,{align:"center",direction:"row",justify:"flex-start",ml:6,mt:9,children:!!i&&c.jsx(kt,{children:nn.unix(i).fromNow()})})]}),cd=T(C)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,hd=T(C)`
  color: ${v.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`;var ho={exports:{}};(function(e,n){(function(r,i){e.exports=i()})(Pr,function(){var r;function i(){return r.apply(null,arguments)}function o(t){r=t}function a(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function l(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function d(t,s){return Object.prototype.hasOwnProperty.call(t,s)}function m(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var s;for(s in t)if(d(t,s))return!1;return!0}function p(t){return t===void 0}function g(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function y(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function w(t,s){var u=[],h,f=t.length;for(h=0;h<f;++h)u.push(s(t[h],h));return u}function x(t,s){for(var u in s)d(s,u)&&(t[u]=s[u]);return d(s,"toString")&&(t.toString=s.toString),d(s,"valueOf")&&(t.valueOf=s.valueOf),t}function S(t,s,u,h){return ji(t,s,u,h,!0).utc()}function M(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function j(t){return t._pf==null&&(t._pf=M()),t._pf}var O;Array.prototype.some?O=Array.prototype.some:O=function(t){var s=Object(this),u=s.length>>>0,h;for(h=0;h<u;h++)if(h in s&&t.call(this,s[h],h,s))return!0;return!1};function P(t){if(t._isValid==null){var s=j(t),u=O.call(s.parsedDateParts,function(f){return f!=null}),h=!isNaN(t._d.getTime())&&s.overflow<0&&!s.empty&&!s.invalidEra&&!s.invalidMonth&&!s.invalidWeekday&&!s.weekdayMismatch&&!s.nullInput&&!s.invalidFormat&&!s.userInvalidated&&(!s.meridiem||s.meridiem&&u);if(t._strict&&(h=h&&s.charsLeftOver===0&&s.unusedTokens.length===0&&s.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=h;else return h}return t._isValid}function A(t){var s=S(NaN);return t!=null?x(j(s),t):j(s).userInvalidated=!0,s}var W=i.momentProperties=[],U=!1;function I(t,s){var u,h,f,_=W.length;if(p(s._isAMomentObject)||(t._isAMomentObject=s._isAMomentObject),p(s._i)||(t._i=s._i),p(s._f)||(t._f=s._f),p(s._l)||(t._l=s._l),p(s._strict)||(t._strict=s._strict),p(s._tzm)||(t._tzm=s._tzm),p(s._isUTC)||(t._isUTC=s._isUTC),p(s._offset)||(t._offset=s._offset),p(s._pf)||(t._pf=j(s)),p(s._locale)||(t._locale=s._locale),_>0)for(u=0;u<_;u++)h=W[u],f=s[h],p(f)||(t[h]=f);return t}function Z(t){I(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),U===!1&&(U=!0,i.updateOffset(this),U=!1)}function ee(t){return t instanceof Z||t!=null&&t._isAMomentObject!=null}function re(t){i.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+t)}function G(t,s){var u=!0;return x(function(){if(i.deprecationHandler!=null&&i.deprecationHandler(null,t),u){var h=[],f,_,E,q=arguments.length;for(_=0;_<q;_++){if(f="",typeof arguments[_]=="object"){f+=`
[`+_+"] ";for(E in arguments[0])d(arguments[0],E)&&(f+=E+": "+arguments[0][E]+", ");f=f.slice(0,-2)}else f=arguments[_];h.push(f)}re(t+`
Arguments: `+Array.prototype.slice.call(h).join("")+`
`+new Error().stack),u=!1}return s.apply(this,arguments)},s)}var R={};function N(t,s){i.deprecationHandler!=null&&i.deprecationHandler(t,s),R[t]||(re(s),R[t]=!0)}i.suppressDeprecationWarnings=!1,i.deprecationHandler=null;function Q(t){return typeof Function<"u"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function se(t){var s,u;for(u in t)d(t,u)&&(s=t[u],Q(s)?this[u]=s:this["_"+u]=s);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function V(t,s){var u=x({},t),h;for(h in s)d(s,h)&&(l(t[h])&&l(s[h])?(u[h]={},x(u[h],t[h]),x(u[h],s[h])):s[h]!=null?u[h]=s[h]:delete u[h]);for(h in t)d(t,h)&&!d(s,h)&&l(t[h])&&(u[h]=x({},u[h]));return u}function ae(t){t!=null&&this.set(t)}var pe;Object.keys?pe=Object.keys:pe=function(t){var s,u=[];for(s in t)d(t,s)&&u.push(s);return u};var Te={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function ze(t,s,u){var h=this._calendar[t]||this._calendar.sameElse;return Q(h)?h.call(s,u):h}function b(t,s,u){var h=""+Math.abs(t),f=s-h.length,_=t>=0;return(_?u?"+":"":"-")+Math.pow(10,Math.max(0,f)).toString().substr(1)+h}var we=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Me=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,k={},ie={};function B(t,s,u,h){var f=h;typeof h=="string"&&(f=function(){return this[h]()}),t&&(ie[t]=f),s&&(ie[s[0]]=function(){return b(f.apply(this,arguments),s[1],s[2])}),u&&(ie[u]=function(){return this.localeData().ordinal(f.apply(this,arguments),t)})}function ke(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function rt(t){var s=t.match(we),u,h;for(u=0,h=s.length;u<h;u++)ie[s[u]]?s[u]=ie[s[u]]:s[u]=ke(s[u]);return function(f){var _="",E;for(E=0;E<h;E++)_+=Q(s[E])?s[E].call(f,t):s[E];return _}}function Ie(t,s){return t.isValid()?(s=it(s,t.localeData()),k[s]=k[s]||rt(s),k[s](t)):t.localeData().invalidDate()}function it(t,s){var u=5;function h(f){return s.longDateFormat(f)||f}for(Me.lastIndex=0;u>=0&&Me.test(t);)t=t.replace(Me,h),Me.lastIndex=0,u-=1;return t}var st={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ht(t){var s=this._longDateFormat[t],u=this._longDateFormat[t.toUpperCase()];return s||!u?s:(this._longDateFormat[t]=u.match(we).map(function(h){return h==="MMMM"||h==="MM"||h==="DD"||h==="dddd"?h.slice(1):h}).join(""),this._longDateFormat[t])}var Zn="Invalid date";function Qn(){return this._invalidDate}var ln="%d",un=/\d{1,2}/;function cn(t){return this._ordinal.replace("%d",t)}var Xn={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function hn(t,s,u,h){var f=this._relativeTime[u];return Q(f)?f(t,s,u,h):f.replace(/%d/i,t)}function dn(t,s){var u=this._relativeTime[t>0?"future":"past"];return Q(u)?u(s):u.replace(/%s/i,s)}var _t={};function Ce(t,s){var u=t.toLowerCase();_t[u]=_t[u+"s"]=_t[s]=t}function Ae(t){return typeof t=="string"?_t[t]||_t[t.toLowerCase()]:void 0}function Wt(t){var s={},u,h;for(h in t)d(t,h)&&(u=Ae(h),u&&(s[u]=t[h]));return s}var fn={};function D(t,s){fn[t]=s}function Y(t){var s=[],u;for(u in t)d(t,u)&&s.push({unit:u,priority:fn[u]});return s.sort(function(h,f){return h.priority-f.priority}),s}function X(t){return t%4===0&&t%100!==0||t%400===0}function J(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function $(t){var s=+t,u=0;return s!==0&&isFinite(s)&&(u=J(s)),u}function je(t,s){return function(u){return u!=null?(We(this,t,u),i.updateOffset(this,s),this):He(this,t)}}function He(t,s){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+s]():NaN}function We(t,s,u){t.isValid()&&!isNaN(u)&&(s==="FullYear"&&X(t.year())&&t.month()===1&&t.date()===29?(u=$(u),t._d["set"+(t._isUTC?"UTC":"")+s](u,t.month(),kn(u,t.month()))):t._d["set"+(t._isUTC?"UTC":"")+s](u))}function St(t){return t=Ae(t),Q(this[t])?this[t]():this}function vt(t,s){if(typeof t=="object"){t=Wt(t);var u=Y(t),h,f=u.length;for(h=0;h<f;h++)this[u[h].unit](t[u[h].unit])}else if(t=Ae(t),Q(this[t]))return this[t](s);return this}var De=/\d/,_e=/\d\d/,Ue=/\d{3}/,Jn=/\d{4}/,pn=/[+-]?\d{6}/,me=/\d\d?/,ui=/\d\d\d\d?/,ci=/\d\d\d\d\d\d?/,mn=/\d{1,3}/,Kn=/\d{1,4}/,xn=/[+-]?\d{1,6}/,Ot=/\d+/,gn=/[+-]?\d+/,ra=/Z|[+-]\d\d:?\d\d/gi,yn=/Z|[+-]\d\d(?::?\d\d)?/gi,ia=/[+-]?\d+(\.\d{1,3})?/,Ut=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,wn;wn={};function H(t,s,u){wn[t]=Q(s)?s:function(h,f){return h&&u?u:s}}function sa(t,s){return d(wn,t)?wn[t](s._strict,s._locale):new RegExp(oa(t))}function oa(t){return Ne(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(s,u,h,f,_){return u||h||f||_}))}function Ne(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var er={};function ce(t,s){var u,h=s,f;for(typeof t=="string"&&(t=[t]),g(s)&&(h=function(_,E){E[s]=$(_)}),f=t.length,u=0;u<f;u++)er[t[u]]=h}function Vt(t,s){ce(t,function(u,h,f,_){f._w=f._w||{},s(u,f._w,f,_)})}function aa(t,s,u){s!=null&&d(er,t)&&er[t](s,u._a,u,t)}var Ee=0,ot=1,Ke=2,ve=3,Qe=4,at=5,Ct=6,la=7,ua=8;function ca(t,s){return(t%s+s)%s}var be;Array.prototype.indexOf?be=Array.prototype.indexOf:be=function(t){var s;for(s=0;s<this.length;++s)if(this[s]===t)return s;return-1};function kn(t,s){if(isNaN(t)||isNaN(s))return NaN;var u=ca(s,12);return t+=(s-u)/12,u===1?X(t)?29:28:31-u%7%2}B("M",["MM",2],"Mo",function(){return this.month()+1}),B("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),B("MMMM",0,0,function(t){return this.localeData().months(this,t)}),Ce("month","M"),D("month",8),H("M",me),H("MM",me,_e),H("MMM",function(t,s){return s.monthsShortRegex(t)}),H("MMMM",function(t,s){return s.monthsRegex(t)}),ce(["M","MM"],function(t,s){s[ot]=$(t)-1}),ce(["MMM","MMMM"],function(t,s,u,h){var f=u._locale.monthsParse(t,h,u._strict);f!=null?s[ot]=f:j(u).invalidMonth=t});var ha="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),hi="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),di=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,da=Ut,fa=Ut;function pa(t,s){return t?a(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||di).test(s)?"format":"standalone"][t.month()]:a(this._months)?this._months:this._months.standalone}function ma(t,s){return t?a(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[di.test(s)?"format":"standalone"][t.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function xa(t,s,u){var h,f,_,E=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],h=0;h<12;++h)_=S([2e3,h]),this._shortMonthsParse[h]=this.monthsShort(_,"").toLocaleLowerCase(),this._longMonthsParse[h]=this.months(_,"").toLocaleLowerCase();return u?s==="MMM"?(f=be.call(this._shortMonthsParse,E),f!==-1?f:null):(f=be.call(this._longMonthsParse,E),f!==-1?f:null):s==="MMM"?(f=be.call(this._shortMonthsParse,E),f!==-1?f:(f=be.call(this._longMonthsParse,E),f!==-1?f:null)):(f=be.call(this._longMonthsParse,E),f!==-1?f:(f=be.call(this._shortMonthsParse,E),f!==-1?f:null))}function ga(t,s,u){var h,f,_;if(this._monthsParseExact)return xa.call(this,t,s,u);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),h=0;h<12;h++){if(f=S([2e3,h]),u&&!this._longMonthsParse[h]&&(this._longMonthsParse[h]=new RegExp("^"+this.months(f,"").replace(".","")+"$","i"),this._shortMonthsParse[h]=new RegExp("^"+this.monthsShort(f,"").replace(".","")+"$","i")),!u&&!this._monthsParse[h]&&(_="^"+this.months(f,"")+"|^"+this.monthsShort(f,""),this._monthsParse[h]=new RegExp(_.replace(".",""),"i")),u&&s==="MMMM"&&this._longMonthsParse[h].test(t))return h;if(u&&s==="MMM"&&this._shortMonthsParse[h].test(t))return h;if(!u&&this._monthsParse[h].test(t))return h}}function fi(t,s){var u;if(!t.isValid())return t;if(typeof s=="string"){if(/^\d+$/.test(s))s=$(s);else if(s=t.localeData().monthsParse(s),!g(s))return t}return u=Math.min(t.date(),kn(t.year(),s)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](s,u),t}function pi(t){return t!=null?(fi(this,t),i.updateOffset(this,!0),this):He(this,"Month")}function ya(){return kn(this.year(),this.month())}function wa(t){return this._monthsParseExact?(d(this,"_monthsRegex")||mi.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=da),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function ka(t){return this._monthsParseExact?(d(this,"_monthsRegex")||mi.call(this),t?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=fa),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function mi(){function t(E,q){return q.length-E.length}var s=[],u=[],h=[],f,_;for(f=0;f<12;f++)_=S([2e3,f]),s.push(this.monthsShort(_,"")),u.push(this.months(_,"")),h.push(this.months(_,"")),h.push(this.monthsShort(_,""));for(s.sort(t),u.sort(t),h.sort(t),f=0;f<12;f++)s[f]=Ne(s[f]),u[f]=Ne(u[f]);for(f=0;f<24;f++)h[f]=Ne(h[f]);this._monthsRegex=new RegExp("^("+h.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}B("Y",0,0,function(){var t=this.year();return t<=9999?b(t,4):"+"+t}),B(0,["YY",2],0,function(){return this.year()%100}),B(0,["YYYY",4],0,"year"),B(0,["YYYYY",5],0,"year"),B(0,["YYYYYY",6,!0],0,"year"),Ce("year","y"),D("year",1),H("Y",gn),H("YY",me,_e),H("YYYY",Kn,Jn),H("YYYYY",xn,pn),H("YYYYYY",xn,pn),ce(["YYYYY","YYYYYY"],Ee),ce("YYYY",function(t,s){s[Ee]=t.length===2?i.parseTwoDigitYear(t):$(t)}),ce("YY",function(t,s){s[Ee]=i.parseTwoDigitYear(t)}),ce("Y",function(t,s){s[Ee]=parseInt(t,10)});function Gt(t){return X(t)?366:365}i.parseTwoDigitYear=function(t){return $(t)+($(t)>68?1900:2e3)};var xi=je("FullYear",!0);function ba(){return X(this.year())}function _a(t,s,u,h,f,_,E){var q;return t<100&&t>=0?(q=new Date(t+400,s,u,h,f,_,E),isFinite(q.getFullYear())&&q.setFullYear(t)):q=new Date(t,s,u,h,f,_,E),q}function qt(t){var s,u;return t<100&&t>=0?(u=Array.prototype.slice.call(arguments),u[0]=t+400,s=new Date(Date.UTC.apply(null,u)),isFinite(s.getUTCFullYear())&&s.setUTCFullYear(t)):s=new Date(Date.UTC.apply(null,arguments)),s}function bn(t,s,u){var h=7+s-u,f=(7+qt(t,0,h).getUTCDay()-s)%7;return-f+h-1}function gi(t,s,u,h,f){var _=(7+u-h)%7,E=bn(t,h,f),q=1+7*(s-1)+_+E,ne,he;return q<=0?(ne=t-1,he=Gt(ne)+q):q>Gt(t)?(ne=t+1,he=q-Gt(t)):(ne=t,he=q),{year:ne,dayOfYear:he}}function Zt(t,s,u){var h=bn(t.year(),s,u),f=Math.floor((t.dayOfYear()-h-1)/7)+1,_,E;return f<1?(E=t.year()-1,_=f+lt(E,s,u)):f>lt(t.year(),s,u)?(_=f-lt(t.year(),s,u),E=t.year()+1):(E=t.year(),_=f),{week:_,year:E}}function lt(t,s,u){var h=bn(t,s,u),f=bn(t+1,s,u);return(Gt(t)-h+f)/7}B("w",["ww",2],"wo","week"),B("W",["WW",2],"Wo","isoWeek"),Ce("week","w"),Ce("isoWeek","W"),D("week",5),D("isoWeek",5),H("w",me),H("ww",me,_e),H("W",me),H("WW",me,_e),Vt(["w","ww","W","WW"],function(t,s,u,h){s[h.substr(0,1)]=$(t)});function Sa(t){return Zt(t,this._week.dow,this._week.doy).week}var va={dow:0,doy:6};function Ca(){return this._week.dow}function ja(){return this._week.doy}function Ta(t){var s=this.localeData().week(this);return t==null?s:this.add((t-s)*7,"d")}function Ma(t){var s=Zt(this,1,4).week;return t==null?s:this.add((t-s)*7,"d")}B("d",0,"do","day"),B("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),B("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),B("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),B("e",0,0,"weekday"),B("E",0,0,"isoWeekday"),Ce("day","d"),Ce("weekday","e"),Ce("isoWeekday","E"),D("day",11),D("weekday",11),D("isoWeekday",11),H("d",me),H("e",me),H("E",me),H("dd",function(t,s){return s.weekdaysMinRegex(t)}),H("ddd",function(t,s){return s.weekdaysShortRegex(t)}),H("dddd",function(t,s){return s.weekdaysRegex(t)}),Vt(["dd","ddd","dddd"],function(t,s,u,h){var f=u._locale.weekdaysParse(t,h,u._strict);f!=null?s.d=f:j(u).invalidWeekday=t}),Vt(["d","e","E"],function(t,s,u,h){s[h]=$(t)});function Da(t,s){return typeof t!="string"?t:isNaN(t)?(t=s.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function Ea(t,s){return typeof t=="string"?s.weekdaysParse(t)%7||7:isNaN(t)?null:t}function tr(t,s){return t.slice(s,7).concat(t.slice(0,s))}var Oa="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),yi="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Pa="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ia=Ut,Aa=Ut,Ra=Ut;function La(t,s){var u=a(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(s)?"format":"standalone"];return t===!0?tr(u,this._week.dow):t?u[t.day()]:u}function za(t){return t===!0?tr(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function Na(t){return t===!0?tr(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function Fa(t,s,u){var h,f,_,E=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],h=0;h<7;++h)_=S([2e3,1]).day(h),this._minWeekdaysParse[h]=this.weekdaysMin(_,"").toLocaleLowerCase(),this._shortWeekdaysParse[h]=this.weekdaysShort(_,"").toLocaleLowerCase(),this._weekdaysParse[h]=this.weekdays(_,"").toLocaleLowerCase();return u?s==="dddd"?(f=be.call(this._weekdaysParse,E),f!==-1?f:null):s==="ddd"?(f=be.call(this._shortWeekdaysParse,E),f!==-1?f:null):(f=be.call(this._minWeekdaysParse,E),f!==-1?f:null):s==="dddd"?(f=be.call(this._weekdaysParse,E),f!==-1||(f=be.call(this._shortWeekdaysParse,E),f!==-1)?f:(f=be.call(this._minWeekdaysParse,E),f!==-1?f:null)):s==="ddd"?(f=be.call(this._shortWeekdaysParse,E),f!==-1||(f=be.call(this._weekdaysParse,E),f!==-1)?f:(f=be.call(this._minWeekdaysParse,E),f!==-1?f:null)):(f=be.call(this._minWeekdaysParse,E),f!==-1||(f=be.call(this._weekdaysParse,E),f!==-1)?f:(f=be.call(this._shortWeekdaysParse,E),f!==-1?f:null))}function Ya(t,s,u){var h,f,_;if(this._weekdaysParseExact)return Fa.call(this,t,s,u);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),h=0;h<7;h++){if(f=S([2e3,1]).day(h),u&&!this._fullWeekdaysParse[h]&&(this._fullWeekdaysParse[h]=new RegExp("^"+this.weekdays(f,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[h]=new RegExp("^"+this.weekdaysShort(f,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[h]=new RegExp("^"+this.weekdaysMin(f,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[h]||(_="^"+this.weekdays(f,"")+"|^"+this.weekdaysShort(f,"")+"|^"+this.weekdaysMin(f,""),this._weekdaysParse[h]=new RegExp(_.replace(".",""),"i")),u&&s==="dddd"&&this._fullWeekdaysParse[h].test(t))return h;if(u&&s==="ddd"&&this._shortWeekdaysParse[h].test(t))return h;if(u&&s==="dd"&&this._minWeekdaysParse[h].test(t))return h;if(!u&&this._weekdaysParse[h].test(t))return h}}function Ba(t){if(!this.isValid())return t!=null?this:NaN;var s=this._isUTC?this._d.getUTCDay():this._d.getDay();return t!=null?(t=Da(t,this.localeData()),this.add(t-s,"d")):s}function $a(t){if(!this.isValid())return t!=null?this:NaN;var s=(this.day()+7-this.localeData()._week.dow)%7;return t==null?s:this.add(t-s,"d")}function Ha(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var s=Ea(t,this.localeData());return this.day(this.day()%7?s:s-7)}else return this.day()||7}function Wa(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||nr.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=Ia),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ua(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||nr.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Aa),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Va(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||nr.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ra),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function nr(){function t(Pe,ft){return ft.length-Pe.length}var s=[],u=[],h=[],f=[],_,E,q,ne,he;for(_=0;_<7;_++)E=S([2e3,1]).day(_),q=Ne(this.weekdaysMin(E,"")),ne=Ne(this.weekdaysShort(E,"")),he=Ne(this.weekdays(E,"")),s.push(q),u.push(ne),h.push(he),f.push(q),f.push(ne),f.push(he);s.sort(t),u.sort(t),h.sort(t),f.sort(t),this._weekdaysRegex=new RegExp("^("+f.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+s.join("|")+")","i")}function rr(){return this.hours()%12||12}function Ga(){return this.hours()||24}B("H",["HH",2],0,"hour"),B("h",["hh",2],0,rr),B("k",["kk",2],0,Ga),B("hmm",0,0,function(){return""+rr.apply(this)+b(this.minutes(),2)}),B("hmmss",0,0,function(){return""+rr.apply(this)+b(this.minutes(),2)+b(this.seconds(),2)}),B("Hmm",0,0,function(){return""+this.hours()+b(this.minutes(),2)}),B("Hmmss",0,0,function(){return""+this.hours()+b(this.minutes(),2)+b(this.seconds(),2)});function wi(t,s){B(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),s)})}wi("a",!0),wi("A",!1),Ce("hour","h"),D("hour",13);function ki(t,s){return s._meridiemParse}H("a",ki),H("A",ki),H("H",me),H("h",me),H("k",me),H("HH",me,_e),H("hh",me,_e),H("kk",me,_e),H("hmm",ui),H("hmmss",ci),H("Hmm",ui),H("Hmmss",ci),ce(["H","HH"],ve),ce(["k","kk"],function(t,s,u){var h=$(t);s[ve]=h===24?0:h}),ce(["a","A"],function(t,s,u){u._isPm=u._locale.isPM(t),u._meridiem=t}),ce(["h","hh"],function(t,s,u){s[ve]=$(t),j(u).bigHour=!0}),ce("hmm",function(t,s,u){var h=t.length-2;s[ve]=$(t.substr(0,h)),s[Qe]=$(t.substr(h)),j(u).bigHour=!0}),ce("hmmss",function(t,s,u){var h=t.length-4,f=t.length-2;s[ve]=$(t.substr(0,h)),s[Qe]=$(t.substr(h,2)),s[at]=$(t.substr(f)),j(u).bigHour=!0}),ce("Hmm",function(t,s,u){var h=t.length-2;s[ve]=$(t.substr(0,h)),s[Qe]=$(t.substr(h))}),ce("Hmmss",function(t,s,u){var h=t.length-4,f=t.length-2;s[ve]=$(t.substr(0,h)),s[Qe]=$(t.substr(h,2)),s[at]=$(t.substr(f))});function qa(t){return(t+"").toLowerCase().charAt(0)==="p"}var Za=/[ap]\.?m?\.?/i,Qa=je("Hours",!0);function Xa(t,s,u){return t>11?u?"pm":"PM":u?"am":"AM"}var bi={calendar:Te,longDateFormat:st,invalidDate:Zn,ordinal:ln,dayOfMonthOrdinalParse:un,relativeTime:Xn,months:ha,monthsShort:hi,week:va,weekdays:Oa,weekdaysMin:Pa,weekdaysShort:yi,meridiemParse:Za},ge={},Qt={},Xt;function Ja(t,s){var u,h=Math.min(t.length,s.length);for(u=0;u<h;u+=1)if(t[u]!==s[u])return u;return h}function _i(t){return t&&t.toLowerCase().replace("_","-")}function Ka(t){for(var s=0,u,h,f,_;s<t.length;){for(_=_i(t[s]).split("-"),u=_.length,h=_i(t[s+1]),h=h?h.split("-"):null;u>0;){if(f=_n(_.slice(0,u).join("-")),f)return f;if(h&&h.length>=u&&Ja(_,h)>=u-1)break;u--}s++}return Xt}function el(t){return t.match("^[^/\\\\]*$")!=null}function _n(t){var s=null,u;if(ge[t]===void 0&&e&&e.exports&&el(t))try{s=Xt._abbr,u=Nc,u("./locale/"+t),pt(s)}catch{ge[t]=null}return ge[t]}function pt(t,s){var u;return t&&(p(s)?u=ut(t):u=ir(t,s),u?Xt=u:typeof console<"u"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),Xt._abbr}function ir(t,s){if(s!==null){var u,h=bi;if(s.abbr=t,ge[t]!=null)N("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),h=ge[t]._config;else if(s.parentLocale!=null)if(ge[s.parentLocale]!=null)h=ge[s.parentLocale]._config;else if(u=_n(s.parentLocale),u!=null)h=u._config;else return Qt[s.parentLocale]||(Qt[s.parentLocale]=[]),Qt[s.parentLocale].push({name:t,config:s}),null;return ge[t]=new ae(V(h,s)),Qt[t]&&Qt[t].forEach(function(f){ir(f.name,f.config)}),pt(t),ge[t]}else return delete ge[t],null}function tl(t,s){if(s!=null){var u,h,f=bi;ge[t]!=null&&ge[t].parentLocale!=null?ge[t].set(V(ge[t]._config,s)):(h=_n(t),h!=null&&(f=h._config),s=V(f,s),h==null&&(s.abbr=t),u=new ae(s),u.parentLocale=ge[t],ge[t]=u),pt(t)}else ge[t]!=null&&(ge[t].parentLocale!=null?(ge[t]=ge[t].parentLocale,t===pt()&&pt(t)):ge[t]!=null&&delete ge[t]);return ge[t]}function ut(t){var s;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Xt;if(!a(t)){if(s=_n(t),s)return s;t=[t]}return Ka(t)}function nl(){return pe(ge)}function sr(t){var s,u=t._a;return u&&j(t).overflow===-2&&(s=u[ot]<0||u[ot]>11?ot:u[Ke]<1||u[Ke]>kn(u[Ee],u[ot])?Ke:u[ve]<0||u[ve]>24||u[ve]===24&&(u[Qe]!==0||u[at]!==0||u[Ct]!==0)?ve:u[Qe]<0||u[Qe]>59?Qe:u[at]<0||u[at]>59?at:u[Ct]<0||u[Ct]>999?Ct:-1,j(t)._overflowDayOfYear&&(s<Ee||s>Ke)&&(s=Ke),j(t)._overflowWeeks&&s===-1&&(s=la),j(t)._overflowWeekday&&s===-1&&(s=ua),j(t).overflow=s),t}var rl=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,il=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,sl=/Z|[+-]\d\d(?::?\d\d)?/,Sn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],or=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],ol=/^\/?Date\((-?\d+)/i,al=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,ll={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Si(t){var s,u,h=t._i,f=rl.exec(h)||il.exec(h),_,E,q,ne,he=Sn.length,Pe=or.length;if(f){for(j(t).iso=!0,s=0,u=he;s<u;s++)if(Sn[s][1].exec(f[1])){E=Sn[s][0],_=Sn[s][2]!==!1;break}if(E==null){t._isValid=!1;return}if(f[3]){for(s=0,u=Pe;s<u;s++)if(or[s][1].exec(f[3])){q=(f[2]||" ")+or[s][0];break}if(q==null){t._isValid=!1;return}}if(!_&&q!=null){t._isValid=!1;return}if(f[4])if(sl.exec(f[4]))ne="Z";else{t._isValid=!1;return}t._f=E+(q||"")+(ne||""),lr(t)}else t._isValid=!1}function ul(t,s,u,h,f,_){var E=[cl(t),hi.indexOf(s),parseInt(u,10),parseInt(h,10),parseInt(f,10)];return _&&E.push(parseInt(_,10)),E}function cl(t){var s=parseInt(t,10);return s<=49?2e3+s:s<=999?1900+s:s}function hl(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function dl(t,s,u){if(t){var h=yi.indexOf(t),f=new Date(s[0],s[1],s[2]).getDay();if(h!==f)return j(u).weekdayMismatch=!0,u._isValid=!1,!1}return!0}function fl(t,s,u){if(t)return ll[t];if(s)return 0;var h=parseInt(u,10),f=h%100,_=(h-f)/100;return _*60+f}function vi(t){var s=al.exec(hl(t._i)),u;if(s){if(u=ul(s[4],s[3],s[2],s[5],s[6],s[7]),!dl(s[1],u,t))return;t._a=u,t._tzm=fl(s[8],s[9],s[10]),t._d=qt.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),j(t).rfc2822=!0}else t._isValid=!1}function pl(t){var s=ol.exec(t._i);if(s!==null){t._d=new Date(+s[1]);return}if(Si(t),t._isValid===!1)delete t._isValid;else return;if(vi(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:i.createFromInputFallback(t)}i.createFromInputFallback=G("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function Pt(t,s,u){return t??s??u}function ml(t){var s=new Date(i.now());return t._useUTC?[s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()]:[s.getFullYear(),s.getMonth(),s.getDate()]}function ar(t){var s,u,h=[],f,_,E;if(!t._d){for(f=ml(t),t._w&&t._a[Ke]==null&&t._a[ot]==null&&xl(t),t._dayOfYear!=null&&(E=Pt(t._a[Ee],f[Ee]),(t._dayOfYear>Gt(E)||t._dayOfYear===0)&&(j(t)._overflowDayOfYear=!0),u=qt(E,0,t._dayOfYear),t._a[ot]=u.getUTCMonth(),t._a[Ke]=u.getUTCDate()),s=0;s<3&&t._a[s]==null;++s)t._a[s]=h[s]=f[s];for(;s<7;s++)t._a[s]=h[s]=t._a[s]==null?s===2?1:0:t._a[s];t._a[ve]===24&&t._a[Qe]===0&&t._a[at]===0&&t._a[Ct]===0&&(t._nextDay=!0,t._a[ve]=0),t._d=(t._useUTC?qt:_a).apply(null,h),_=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[ve]=24),t._w&&typeof t._w.d<"u"&&t._w.d!==_&&(j(t).weekdayMismatch=!0)}}function xl(t){var s,u,h,f,_,E,q,ne,he;s=t._w,s.GG!=null||s.W!=null||s.E!=null?(_=1,E=4,u=Pt(s.GG,t._a[Ee],Zt(xe(),1,4).year),h=Pt(s.W,1),f=Pt(s.E,1),(f<1||f>7)&&(ne=!0)):(_=t._locale._week.dow,E=t._locale._week.doy,he=Zt(xe(),_,E),u=Pt(s.gg,t._a[Ee],he.year),h=Pt(s.w,he.week),s.d!=null?(f=s.d,(f<0||f>6)&&(ne=!0)):s.e!=null?(f=s.e+_,(s.e<0||s.e>6)&&(ne=!0)):f=_),h<1||h>lt(u,_,E)?j(t)._overflowWeeks=!0:ne!=null?j(t)._overflowWeekday=!0:(q=gi(u,h,f,_,E),t._a[Ee]=q.year,t._dayOfYear=q.dayOfYear)}i.ISO_8601=function(){},i.RFC_2822=function(){};function lr(t){if(t._f===i.ISO_8601){Si(t);return}if(t._f===i.RFC_2822){vi(t);return}t._a=[],j(t).empty=!0;var s=""+t._i,u,h,f,_,E,q=s.length,ne=0,he,Pe;for(f=it(t._f,t._locale).match(we)||[],Pe=f.length,u=0;u<Pe;u++)_=f[u],h=(s.match(sa(_,t))||[])[0],h&&(E=s.substr(0,s.indexOf(h)),E.length>0&&j(t).unusedInput.push(E),s=s.slice(s.indexOf(h)+h.length),ne+=h.length),ie[_]?(h?j(t).empty=!1:j(t).unusedTokens.push(_),aa(_,h,t)):t._strict&&!h&&j(t).unusedTokens.push(_);j(t).charsLeftOver=q-ne,s.length>0&&j(t).unusedInput.push(s),t._a[ve]<=12&&j(t).bigHour===!0&&t._a[ve]>0&&(j(t).bigHour=void 0),j(t).parsedDateParts=t._a.slice(0),j(t).meridiem=t._meridiem,t._a[ve]=gl(t._locale,t._a[ve],t._meridiem),he=j(t).era,he!==null&&(t._a[Ee]=t._locale.erasConvertYear(he,t._a[Ee])),ar(t),sr(t)}function gl(t,s,u){var h;return u==null?s:t.meridiemHour!=null?t.meridiemHour(s,u):(t.isPM!=null&&(h=t.isPM(u),h&&s<12&&(s+=12),!h&&s===12&&(s=0)),s)}function yl(t){var s,u,h,f,_,E,q=!1,ne=t._f.length;if(ne===0){j(t).invalidFormat=!0,t._d=new Date(NaN);return}for(f=0;f<ne;f++)_=0,E=!1,s=I({},t),t._useUTC!=null&&(s._useUTC=t._useUTC),s._f=t._f[f],lr(s),P(s)&&(E=!0),_+=j(s).charsLeftOver,_+=j(s).unusedTokens.length*10,j(s).score=_,q?_<h&&(h=_,u=s):(h==null||_<h||E)&&(h=_,u=s,E&&(q=!0));x(t,u||s)}function wl(t){if(!t._d){var s=Wt(t._i),u=s.day===void 0?s.date:s.day;t._a=w([s.year,s.month,u,s.hour,s.minute,s.second,s.millisecond],function(h){return h&&parseInt(h,10)}),ar(t)}}function kl(t){var s=new Z(sr(Ci(t)));return s._nextDay&&(s.add(1,"d"),s._nextDay=void 0),s}function Ci(t){var s=t._i,u=t._f;return t._locale=t._locale||ut(t._l),s===null||u===void 0&&s===""?A({nullInput:!0}):(typeof s=="string"&&(t._i=s=t._locale.preparse(s)),ee(s)?new Z(sr(s)):(y(s)?t._d=s:a(u)?yl(t):u?lr(t):bl(t),P(t)||(t._d=null),t))}function bl(t){var s=t._i;p(s)?t._d=new Date(i.now()):y(s)?t._d=new Date(s.valueOf()):typeof s=="string"?pl(t):a(s)?(t._a=w(s.slice(0),function(u){return parseInt(u,10)}),ar(t)):l(s)?wl(t):g(s)?t._d=new Date(s):i.createFromInputFallback(t)}function ji(t,s,u,h,f){var _={};return(s===!0||s===!1)&&(h=s,s=void 0),(u===!0||u===!1)&&(h=u,u=void 0),(l(t)&&m(t)||a(t)&&t.length===0)&&(t=void 0),_._isAMomentObject=!0,_._useUTC=_._isUTC=f,_._l=u,_._i=t,_._f=s,_._strict=h,kl(_)}function xe(t,s,u,h){return ji(t,s,u,h,!1)}var _l=G("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=xe.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:A()}),Sl=G("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=xe.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:A()});function Ti(t,s){var u,h;if(s.length===1&&a(s[0])&&(s=s[0]),!s.length)return xe();for(u=s[0],h=1;h<s.length;++h)(!s[h].isValid()||s[h][t](u))&&(u=s[h]);return u}function vl(){var t=[].slice.call(arguments,0);return Ti("isBefore",t)}function Cl(){var t=[].slice.call(arguments,0);return Ti("isAfter",t)}var jl=function(){return Date.now?Date.now():+new Date},Jt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Tl(t){var s,u=!1,h,f=Jt.length;for(s in t)if(d(t,s)&&!(be.call(Jt,s)!==-1&&(t[s]==null||!isNaN(t[s]))))return!1;for(h=0;h<f;++h)if(t[Jt[h]]){if(u)return!1;parseFloat(t[Jt[h]])!==$(t[Jt[h]])&&(u=!0)}return!0}function Ml(){return this._isValid}function Dl(){return Xe(NaN)}function vn(t){var s=Wt(t),u=s.year||0,h=s.quarter||0,f=s.month||0,_=s.week||s.isoWeek||0,E=s.day||0,q=s.hour||0,ne=s.minute||0,he=s.second||0,Pe=s.millisecond||0;this._isValid=Tl(s),this._milliseconds=+Pe+he*1e3+ne*6e4+q*1e3*60*60,this._days=+E+_*7,this._months=+f+h*3+u*12,this._data={},this._locale=ut(),this._bubble()}function Cn(t){return t instanceof vn}function ur(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function El(t,s,u){var h=Math.min(t.length,s.length),f=Math.abs(t.length-s.length),_=0,E;for(E=0;E<h;E++)(u&&t[E]!==s[E]||!u&&$(t[E])!==$(s[E]))&&_++;return _+f}function Mi(t,s){B(t,0,0,function(){var u=this.utcOffset(),h="+";return u<0&&(u=-u,h="-"),h+b(~~(u/60),2)+s+b(~~u%60,2)})}Mi("Z",":"),Mi("ZZ",""),H("Z",yn),H("ZZ",yn),ce(["Z","ZZ"],function(t,s,u){u._useUTC=!0,u._tzm=cr(yn,t)});var Ol=/([\+\-]|\d\d)/gi;function cr(t,s){var u=(s||"").match(t),h,f,_;return u===null?null:(h=u[u.length-1]||[],f=(h+"").match(Ol)||["-",0,0],_=+(f[1]*60)+$(f[2]),_===0?0:f[0]==="+"?_:-_)}function hr(t,s){var u,h;return s._isUTC?(u=s.clone(),h=(ee(t)||y(t)?t.valueOf():xe(t).valueOf())-u.valueOf(),u._d.setTime(u._d.valueOf()+h),i.updateOffset(u,!1),u):xe(t).local()}function dr(t){return-Math.round(t._d.getTimezoneOffset())}i.updateOffset=function(){};function Pl(t,s,u){var h=this._offset||0,f;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=cr(yn,t),t===null)return this}else Math.abs(t)<16&&!u&&(t=t*60);return!this._isUTC&&s&&(f=dr(this)),this._offset=t,this._isUTC=!0,f!=null&&this.add(f,"m"),h!==t&&(!s||this._changeInProgress?Pi(this,Xe(t-h,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,i.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?h:dr(this)}function Il(t,s){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,s),this):-this.utcOffset()}function Al(t){return this.utcOffset(0,t)}function Rl(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(dr(this),"m")),this}function Ll(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=cr(ra,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function zl(t){return this.isValid()?(t=t?xe(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function Nl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Fl(){if(!p(this._isDSTShifted))return this._isDSTShifted;var t={},s;return I(t,this),t=Ci(t),t._a?(s=t._isUTC?S(t._a):xe(t._a),this._isDSTShifted=this.isValid()&&El(t._a,s.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Yl(){return this.isValid()?!this._isUTC:!1}function Bl(){return this.isValid()?this._isUTC:!1}function Di(){return this.isValid()?this._isUTC&&this._offset===0:!1}var $l=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Hl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Xe(t,s){var u=t,h=null,f,_,E;return Cn(t)?u={ms:t._milliseconds,d:t._days,M:t._months}:g(t)||!isNaN(+t)?(u={},s?u[s]=+t:u.milliseconds=+t):(h=$l.exec(t))?(f=h[1]==="-"?-1:1,u={y:0,d:$(h[Ke])*f,h:$(h[ve])*f,m:$(h[Qe])*f,s:$(h[at])*f,ms:$(ur(h[Ct]*1e3))*f}):(h=Hl.exec(t))?(f=h[1]==="-"?-1:1,u={y:jt(h[2],f),M:jt(h[3],f),w:jt(h[4],f),d:jt(h[5],f),h:jt(h[6],f),m:jt(h[7],f),s:jt(h[8],f)}):u==null?u={}:typeof u=="object"&&("from"in u||"to"in u)&&(E=Wl(xe(u.from),xe(u.to)),u={},u.ms=E.milliseconds,u.M=E.months),_=new vn(u),Cn(t)&&d(t,"_locale")&&(_._locale=t._locale),Cn(t)&&d(t,"_isValid")&&(_._isValid=t._isValid),_}Xe.fn=vn.prototype,Xe.invalid=Dl;function jt(t,s){var u=t&&parseFloat(t.replace(",","."));return(isNaN(u)?0:u)*s}function Ei(t,s){var u={};return u.months=s.month()-t.month()+(s.year()-t.year())*12,t.clone().add(u.months,"M").isAfter(s)&&--u.months,u.milliseconds=+s-+t.clone().add(u.months,"M"),u}function Wl(t,s){var u;return t.isValid()&&s.isValid()?(s=hr(s,t),t.isBefore(s)?u=Ei(t,s):(u=Ei(s,t),u.milliseconds=-u.milliseconds,u.months=-u.months),u):{milliseconds:0,months:0}}function Oi(t,s){return function(u,h){var f,_;return h!==null&&!isNaN(+h)&&(N(s,"moment()."+s+"(period, number) is deprecated. Please use moment()."+s+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),_=u,u=h,h=_),f=Xe(u,h),Pi(this,f,t),this}}function Pi(t,s,u,h){var f=s._milliseconds,_=ur(s._days),E=ur(s._months);t.isValid()&&(h=h??!0,E&&fi(t,He(t,"Month")+E*u),_&&We(t,"Date",He(t,"Date")+_*u),f&&t._d.setTime(t._d.valueOf()+f*u),h&&i.updateOffset(t,_||E))}var Ul=Oi(1,"add"),Vl=Oi(-1,"subtract");function Ii(t){return typeof t=="string"||t instanceof String}function Gl(t){return ee(t)||y(t)||Ii(t)||g(t)||Zl(t)||ql(t)||t===null||t===void 0}function ql(t){var s=l(t)&&!m(t),u=!1,h=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],f,_,E=h.length;for(f=0;f<E;f+=1)_=h[f],u=u||d(t,_);return s&&u}function Zl(t){var s=a(t),u=!1;return s&&(u=t.filter(function(h){return!g(h)&&Ii(t)}).length===0),s&&u}function Ql(t){var s=l(t)&&!m(t),u=!1,h=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],f,_;for(f=0;f<h.length;f+=1)_=h[f],u=u||d(t,_);return s&&u}function Xl(t,s){var u=t.diff(s,"days",!0);return u<-6?"sameElse":u<-1?"lastWeek":u<0?"lastDay":u<1?"sameDay":u<2?"nextDay":u<7?"nextWeek":"sameElse"}function Jl(t,s){arguments.length===1&&(arguments[0]?Gl(arguments[0])?(t=arguments[0],s=void 0):Ql(arguments[0])&&(s=arguments[0],t=void 0):(t=void 0,s=void 0));var u=t||xe(),h=hr(u,this).startOf("day"),f=i.calendarFormat(this,h)||"sameElse",_=s&&(Q(s[f])?s[f].call(this,u):s[f]);return this.format(_||this.localeData().calendar(f,this,xe(u)))}function Kl(){return new Z(this)}function eu(t,s){var u=ee(t)?t:xe(t);return this.isValid()&&u.isValid()?(s=Ae(s)||"millisecond",s==="millisecond"?this.valueOf()>u.valueOf():u.valueOf()<this.clone().startOf(s).valueOf()):!1}function tu(t,s){var u=ee(t)?t:xe(t);return this.isValid()&&u.isValid()?(s=Ae(s)||"millisecond",s==="millisecond"?this.valueOf()<u.valueOf():this.clone().endOf(s).valueOf()<u.valueOf()):!1}function nu(t,s,u,h){var f=ee(t)?t:xe(t),_=ee(s)?s:xe(s);return this.isValid()&&f.isValid()&&_.isValid()?(h=h||"()",(h[0]==="("?this.isAfter(f,u):!this.isBefore(f,u))&&(h[1]===")"?this.isBefore(_,u):!this.isAfter(_,u))):!1}function ru(t,s){var u=ee(t)?t:xe(t),h;return this.isValid()&&u.isValid()?(s=Ae(s)||"millisecond",s==="millisecond"?this.valueOf()===u.valueOf():(h=u.valueOf(),this.clone().startOf(s).valueOf()<=h&&h<=this.clone().endOf(s).valueOf())):!1}function iu(t,s){return this.isSame(t,s)||this.isAfter(t,s)}function su(t,s){return this.isSame(t,s)||this.isBefore(t,s)}function ou(t,s,u){var h,f,_;if(!this.isValid())return NaN;if(h=hr(t,this),!h.isValid())return NaN;switch(f=(h.utcOffset()-this.utcOffset())*6e4,s=Ae(s),s){case"year":_=jn(this,h)/12;break;case"month":_=jn(this,h);break;case"quarter":_=jn(this,h)/3;break;case"second":_=(this-h)/1e3;break;case"minute":_=(this-h)/6e4;break;case"hour":_=(this-h)/36e5;break;case"day":_=(this-h-f)/864e5;break;case"week":_=(this-h-f)/6048e5;break;default:_=this-h}return u?_:J(_)}function jn(t,s){if(t.date()<s.date())return-jn(s,t);var u=(s.year()-t.year())*12+(s.month()-t.month()),h=t.clone().add(u,"months"),f,_;return s-h<0?(f=t.clone().add(u-1,"months"),_=(s-h)/(h-f)):(f=t.clone().add(u+1,"months"),_=(s-h)/(f-h)),-(u+_)||0}i.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",i.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function au(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function lu(t){if(!this.isValid())return null;var s=t!==!0,u=s?this.clone().utc():this;return u.year()<0||u.year()>9999?Ie(u,s?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Q(Date.prototype.toISOString)?s?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ie(u,"Z")):Ie(u,s?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function uu(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",s="",u,h,f,_;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",s="Z"),u="["+t+'("]',h=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",f="-MM-DD[T]HH:mm:ss.SSS",_=s+'[")]',this.format(u+h+f+_)}function cu(t){t||(t=this.isUtc()?i.defaultFormatUtc:i.defaultFormat);var s=Ie(this,t);return this.localeData().postformat(s)}function hu(t,s){return this.isValid()&&(ee(t)&&t.isValid()||xe(t).isValid())?Xe({to:this,from:t}).locale(this.locale()).humanize(!s):this.localeData().invalidDate()}function du(t){return this.from(xe(),t)}function fu(t,s){return this.isValid()&&(ee(t)&&t.isValid()||xe(t).isValid())?Xe({from:this,to:t}).locale(this.locale()).humanize(!s):this.localeData().invalidDate()}function pu(t){return this.to(xe(),t)}function Ai(t){var s;return t===void 0?this._locale._abbr:(s=ut(t),s!=null&&(this._locale=s),this)}var Ri=G("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function Li(){return this._locale}var Tn=1e3,It=60*Tn,Mn=60*It,zi=(365*400+97)*24*Mn;function At(t,s){return(t%s+s)%s}function Ni(t,s,u){return t<100&&t>=0?new Date(t+400,s,u)-zi:new Date(t,s,u).valueOf()}function Fi(t,s,u){return t<100&&t>=0?Date.UTC(t+400,s,u)-zi:Date.UTC(t,s,u)}function mu(t){var s,u;if(t=Ae(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(u=this._isUTC?Fi:Ni,t){case"year":s=u(this.year(),0,1);break;case"quarter":s=u(this.year(),this.month()-this.month()%3,1);break;case"month":s=u(this.year(),this.month(),1);break;case"week":s=u(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":s=u(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":s=u(this.year(),this.month(),this.date());break;case"hour":s=this._d.valueOf(),s-=At(s+(this._isUTC?0:this.utcOffset()*It),Mn);break;case"minute":s=this._d.valueOf(),s-=At(s,It);break;case"second":s=this._d.valueOf(),s-=At(s,Tn);break}return this._d.setTime(s),i.updateOffset(this,!0),this}function xu(t){var s,u;if(t=Ae(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(u=this._isUTC?Fi:Ni,t){case"year":s=u(this.year()+1,0,1)-1;break;case"quarter":s=u(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":s=u(this.year(),this.month()+1,1)-1;break;case"week":s=u(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":s=u(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":s=u(this.year(),this.month(),this.date()+1)-1;break;case"hour":s=this._d.valueOf(),s+=Mn-At(s+(this._isUTC?0:this.utcOffset()*It),Mn)-1;break;case"minute":s=this._d.valueOf(),s+=It-At(s,It)-1;break;case"second":s=this._d.valueOf(),s+=Tn-At(s,Tn)-1;break}return this._d.setTime(s),i.updateOffset(this,!0),this}function gu(){return this._d.valueOf()-(this._offset||0)*6e4}function yu(){return Math.floor(this.valueOf()/1e3)}function wu(){return new Date(this.valueOf())}function ku(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function bu(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function _u(){return this.isValid()?this.toISOString():null}function Su(){return P(this)}function vu(){return x({},j(this))}function Cu(){return j(this).overflow}function ju(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}B("N",0,0,"eraAbbr"),B("NN",0,0,"eraAbbr"),B("NNN",0,0,"eraAbbr"),B("NNNN",0,0,"eraName"),B("NNNNN",0,0,"eraNarrow"),B("y",["y",1],"yo","eraYear"),B("y",["yy",2],0,"eraYear"),B("y",["yyy",3],0,"eraYear"),B("y",["yyyy",4],0,"eraYear"),H("N",fr),H("NN",fr),H("NNN",fr),H("NNNN",zu),H("NNNNN",Nu),ce(["N","NN","NNN","NNNN","NNNNN"],function(t,s,u,h){var f=u._locale.erasParse(t,h,u._strict);f?j(u).era=f:j(u).invalidEra=t}),H("y",Ot),H("yy",Ot),H("yyy",Ot),H("yyyy",Ot),H("yo",Fu),ce(["y","yy","yyy","yyyy"],Ee),ce(["yo"],function(t,s,u,h){var f;u._locale._eraYearOrdinalRegex&&(f=t.match(u._locale._eraYearOrdinalRegex)),u._locale.eraYearOrdinalParse?s[Ee]=u._locale.eraYearOrdinalParse(t,f):s[Ee]=parseInt(t,10)});function Tu(t,s){var u,h,f,_=this._eras||ut("en")._eras;for(u=0,h=_.length;u<h;++u){switch(typeof _[u].since){case"string":f=i(_[u].since).startOf("day"),_[u].since=f.valueOf();break}switch(typeof _[u].until){case"undefined":_[u].until=1/0;break;case"string":f=i(_[u].until).startOf("day").valueOf(),_[u].until=f.valueOf();break}}return _}function Mu(t,s,u){var h,f,_=this.eras(),E,q,ne;for(t=t.toUpperCase(),h=0,f=_.length;h<f;++h)if(E=_[h].name.toUpperCase(),q=_[h].abbr.toUpperCase(),ne=_[h].narrow.toUpperCase(),u)switch(s){case"N":case"NN":case"NNN":if(q===t)return _[h];break;case"NNNN":if(E===t)return _[h];break;case"NNNNN":if(ne===t)return _[h];break}else if([E,q,ne].indexOf(t)>=0)return _[h]}function Du(t,s){var u=t.since<=t.until?1:-1;return s===void 0?i(t.since).year():i(t.since).year()+(s-t.offset)*u}function Eu(){var t,s,u,h=this.localeData().eras();for(t=0,s=h.length;t<s;++t)if(u=this.clone().startOf("day").valueOf(),h[t].since<=u&&u<=h[t].until||h[t].until<=u&&u<=h[t].since)return h[t].name;return""}function Ou(){var t,s,u,h=this.localeData().eras();for(t=0,s=h.length;t<s;++t)if(u=this.clone().startOf("day").valueOf(),h[t].since<=u&&u<=h[t].until||h[t].until<=u&&u<=h[t].since)return h[t].narrow;return""}function Pu(){var t,s,u,h=this.localeData().eras();for(t=0,s=h.length;t<s;++t)if(u=this.clone().startOf("day").valueOf(),h[t].since<=u&&u<=h[t].until||h[t].until<=u&&u<=h[t].since)return h[t].abbr;return""}function Iu(){var t,s,u,h,f=this.localeData().eras();for(t=0,s=f.length;t<s;++t)if(u=f[t].since<=f[t].until?1:-1,h=this.clone().startOf("day").valueOf(),f[t].since<=h&&h<=f[t].until||f[t].until<=h&&h<=f[t].since)return(this.year()-i(f[t].since).year())*u+f[t].offset;return this.year()}function Au(t){return d(this,"_erasNameRegex")||pr.call(this),t?this._erasNameRegex:this._erasRegex}function Ru(t){return d(this,"_erasAbbrRegex")||pr.call(this),t?this._erasAbbrRegex:this._erasRegex}function Lu(t){return d(this,"_erasNarrowRegex")||pr.call(this),t?this._erasNarrowRegex:this._erasRegex}function fr(t,s){return s.erasAbbrRegex(t)}function zu(t,s){return s.erasNameRegex(t)}function Nu(t,s){return s.erasNarrowRegex(t)}function Fu(t,s){return s._eraYearOrdinalRegex||Ot}function pr(){var t=[],s=[],u=[],h=[],f,_,E=this.eras();for(f=0,_=E.length;f<_;++f)s.push(Ne(E[f].name)),t.push(Ne(E[f].abbr)),u.push(Ne(E[f].narrow)),h.push(Ne(E[f].name)),h.push(Ne(E[f].abbr)),h.push(Ne(E[f].narrow));this._erasRegex=new RegExp("^("+h.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+s.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+u.join("|")+")","i")}B(0,["gg",2],0,function(){return this.weekYear()%100}),B(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Dn(t,s){B(0,[t,t.length],0,s)}Dn("gggg","weekYear"),Dn("ggggg","weekYear"),Dn("GGGG","isoWeekYear"),Dn("GGGGG","isoWeekYear"),Ce("weekYear","gg"),Ce("isoWeekYear","GG"),D("weekYear",1),D("isoWeekYear",1),H("G",gn),H("g",gn),H("GG",me,_e),H("gg",me,_e),H("GGGG",Kn,Jn),H("gggg",Kn,Jn),H("GGGGG",xn,pn),H("ggggg",xn,pn),Vt(["gggg","ggggg","GGGG","GGGGG"],function(t,s,u,h){s[h.substr(0,2)]=$(t)}),Vt(["gg","GG"],function(t,s,u,h){s[h]=i.parseTwoDigitYear(t)});function Yu(t){return Yi.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Bu(t){return Yi.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function $u(){return lt(this.year(),1,4)}function Hu(){return lt(this.isoWeekYear(),1,4)}function Wu(){var t=this.localeData()._week;return lt(this.year(),t.dow,t.doy)}function Uu(){var t=this.localeData()._week;return lt(this.weekYear(),t.dow,t.doy)}function Yi(t,s,u,h,f){var _;return t==null?Zt(this,h,f).year:(_=lt(t,h,f),s>_&&(s=_),Vu.call(this,t,s,u,h,f))}function Vu(t,s,u,h,f){var _=gi(t,s,u,h,f),E=qt(_.year,0,_.dayOfYear);return this.year(E.getUTCFullYear()),this.month(E.getUTCMonth()),this.date(E.getUTCDate()),this}B("Q",0,"Qo","quarter"),Ce("quarter","Q"),D("quarter",7),H("Q",De),ce("Q",function(t,s){s[ot]=($(t)-1)*3});function Gu(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}B("D",["DD",2],"Do","date"),Ce("date","D"),D("date",9),H("D",me),H("DD",me,_e),H("Do",function(t,s){return t?s._dayOfMonthOrdinalParse||s._ordinalParse:s._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],Ke),ce("Do",function(t,s){s[Ke]=$(t.match(me)[0])});var Bi=je("Date",!0);B("DDD",["DDDD",3],"DDDo","dayOfYear"),Ce("dayOfYear","DDD"),D("dayOfYear",4),H("DDD",mn),H("DDDD",Ue),ce(["DDD","DDDD"],function(t,s,u){u._dayOfYear=$(t)});function qu(t){var s=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?s:this.add(t-s,"d")}B("m",["mm",2],0,"minute"),Ce("minute","m"),D("minute",14),H("m",me),H("mm",me,_e),ce(["m","mm"],Qe);var Zu=je("Minutes",!1);B("s",["ss",2],0,"second"),Ce("second","s"),D("second",15),H("s",me),H("ss",me,_e),ce(["s","ss"],at);var Qu=je("Seconds",!1);B("S",0,0,function(){return~~(this.millisecond()/100)}),B(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),B(0,["SSS",3],0,"millisecond"),B(0,["SSSS",4],0,function(){return this.millisecond()*10}),B(0,["SSSSS",5],0,function(){return this.millisecond()*100}),B(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),B(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),B(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),B(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),Ce("millisecond","ms"),D("millisecond",16),H("S",mn,De),H("SS",mn,_e),H("SSS",mn,Ue);var mt,$i;for(mt="SSSS";mt.length<=9;mt+="S")H(mt,Ot);function Xu(t,s){s[Ct]=$(("0."+t)*1e3)}for(mt="S";mt.length<=9;mt+="S")ce(mt,Xu);$i=je("Milliseconds",!1),B("z",0,0,"zoneAbbr"),B("zz",0,0,"zoneName");function Ju(){return this._isUTC?"UTC":""}function Ku(){return this._isUTC?"Coordinated Universal Time":""}var L=Z.prototype;L.add=Ul,L.calendar=Jl,L.clone=Kl,L.diff=ou,L.endOf=xu,L.format=cu,L.from=hu,L.fromNow=du,L.to=fu,L.toNow=pu,L.get=St,L.invalidAt=Cu,L.isAfter=eu,L.isBefore=tu,L.isBetween=nu,L.isSame=ru,L.isSameOrAfter=iu,L.isSameOrBefore=su,L.isValid=Su,L.lang=Ri,L.locale=Ai,L.localeData=Li,L.max=Sl,L.min=_l,L.parsingFlags=vu,L.set=vt,L.startOf=mu,L.subtract=Vl,L.toArray=ku,L.toObject=bu,L.toDate=wu,L.toISOString=lu,L.inspect=uu,typeof Symbol<"u"&&Symbol.for!=null&&(L[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),L.toJSON=_u,L.toString=au,L.unix=yu,L.valueOf=gu,L.creationData=ju,L.eraName=Eu,L.eraNarrow=Ou,L.eraAbbr=Pu,L.eraYear=Iu,L.year=xi,L.isLeapYear=ba,L.weekYear=Yu,L.isoWeekYear=Bu,L.quarter=L.quarters=Gu,L.month=pi,L.daysInMonth=ya,L.week=L.weeks=Ta,L.isoWeek=L.isoWeeks=Ma,L.weeksInYear=Wu,L.weeksInWeekYear=Uu,L.isoWeeksInYear=$u,L.isoWeeksInISOWeekYear=Hu,L.date=Bi,L.day=L.days=Ba,L.weekday=$a,L.isoWeekday=Ha,L.dayOfYear=qu,L.hour=L.hours=Qa,L.minute=L.minutes=Zu,L.second=L.seconds=Qu,L.millisecond=L.milliseconds=$i,L.utcOffset=Pl,L.utc=Al,L.local=Rl,L.parseZone=Ll,L.hasAlignedHourOffset=zl,L.isDST=Nl,L.isLocal=Yl,L.isUtcOffset=Bl,L.isUtc=Di,L.isUTC=Di,L.zoneAbbr=Ju,L.zoneName=Ku,L.dates=G("dates accessor is deprecated. Use date instead.",Bi),L.months=G("months accessor is deprecated. Use month instead",pi),L.years=G("years accessor is deprecated. Use year instead",xi),L.zone=G("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Il),L.isDSTShifted=G("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Fl);function ec(t){return xe(t*1e3)}function tc(){return xe.apply(null,arguments).parseZone()}function Hi(t){return t}var le=ae.prototype;le.calendar=ze,le.longDateFormat=Ht,le.invalidDate=Qn,le.ordinal=cn,le.preparse=Hi,le.postformat=Hi,le.relativeTime=hn,le.pastFuture=dn,le.set=se,le.eras=Tu,le.erasParse=Mu,le.erasConvertYear=Du,le.erasAbbrRegex=Ru,le.erasNameRegex=Au,le.erasNarrowRegex=Lu,le.months=pa,le.monthsShort=ma,le.monthsParse=ga,le.monthsRegex=ka,le.monthsShortRegex=wa,le.week=Sa,le.firstDayOfYear=ja,le.firstDayOfWeek=Ca,le.weekdays=La,le.weekdaysMin=Na,le.weekdaysShort=za,le.weekdaysParse=Ya,le.weekdaysRegex=Wa,le.weekdaysShortRegex=Ua,le.weekdaysMinRegex=Va,le.isPM=qa,le.meridiem=Xa;function En(t,s,u,h){var f=ut(),_=S().set(h,s);return f[u](_,t)}function Wi(t,s,u){if(g(t)&&(s=t,t=void 0),t=t||"",s!=null)return En(t,s,u,"month");var h,f=[];for(h=0;h<12;h++)f[h]=En(t,h,u,"month");return f}function mr(t,s,u,h){typeof t=="boolean"?(g(s)&&(u=s,s=void 0),s=s||""):(s=t,u=s,t=!1,g(s)&&(u=s,s=void 0),s=s||"");var f=ut(),_=t?f._week.dow:0,E,q=[];if(u!=null)return En(s,(u+_)%7,h,"day");for(E=0;E<7;E++)q[E]=En(s,(E+_)%7,h,"day");return q}function nc(t,s){return Wi(t,s,"months")}function rc(t,s){return Wi(t,s,"monthsShort")}function ic(t,s,u){return mr(t,s,u,"weekdays")}function sc(t,s,u){return mr(t,s,u,"weekdaysShort")}function oc(t,s,u){return mr(t,s,u,"weekdaysMin")}pt("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var s=t%10,u=$(t%100/10)===1?"th":s===1?"st":s===2?"nd":s===3?"rd":"th";return t+u}}),i.lang=G("moment.lang is deprecated. Use moment.locale instead.",pt),i.langData=G("moment.langData is deprecated. Use moment.localeData instead.",ut);var ct=Math.abs;function ac(){var t=this._data;return this._milliseconds=ct(this._milliseconds),this._days=ct(this._days),this._months=ct(this._months),t.milliseconds=ct(t.milliseconds),t.seconds=ct(t.seconds),t.minutes=ct(t.minutes),t.hours=ct(t.hours),t.months=ct(t.months),t.years=ct(t.years),this}function Ui(t,s,u,h){var f=Xe(s,u);return t._milliseconds+=h*f._milliseconds,t._days+=h*f._days,t._months+=h*f._months,t._bubble()}function lc(t,s){return Ui(this,t,s,1)}function uc(t,s){return Ui(this,t,s,-1)}function Vi(t){return t<0?Math.floor(t):Math.ceil(t)}function cc(){var t=this._milliseconds,s=this._days,u=this._months,h=this._data,f,_,E,q,ne;return t>=0&&s>=0&&u>=0||t<=0&&s<=0&&u<=0||(t+=Vi(xr(u)+s)*864e5,s=0,u=0),h.milliseconds=t%1e3,f=J(t/1e3),h.seconds=f%60,_=J(f/60),h.minutes=_%60,E=J(_/60),h.hours=E%24,s+=J(E/24),ne=J(Gi(s)),u+=ne,s-=Vi(xr(ne)),q=J(u/12),u%=12,h.days=s,h.months=u,h.years=q,this}function Gi(t){return t*4800/146097}function xr(t){return t*146097/4800}function hc(t){if(!this.isValid())return NaN;var s,u,h=this._milliseconds;if(t=Ae(t),t==="month"||t==="quarter"||t==="year")switch(s=this._days+h/864e5,u=this._months+Gi(s),t){case"month":return u;case"quarter":return u/3;case"year":return u/12}else switch(s=this._days+Math.round(xr(this._months)),t){case"week":return s/7+h/6048e5;case"day":return s+h/864e5;case"hour":return s*24+h/36e5;case"minute":return s*1440+h/6e4;case"second":return s*86400+h/1e3;case"millisecond":return Math.floor(s*864e5)+h;default:throw new Error("Unknown unit "+t)}}function dc(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+$(this._months/12)*31536e6:NaN}function ht(t){return function(){return this.as(t)}}var fc=ht("ms"),pc=ht("s"),mc=ht("m"),xc=ht("h"),gc=ht("d"),yc=ht("w"),wc=ht("M"),kc=ht("Q"),bc=ht("y");function _c(){return Xe(this)}function Sc(t){return t=Ae(t),this.isValid()?this[t+"s"]():NaN}function Tt(t){return function(){return this.isValid()?this._data[t]:NaN}}var vc=Tt("milliseconds"),Cc=Tt("seconds"),jc=Tt("minutes"),Tc=Tt("hours"),Mc=Tt("days"),Dc=Tt("months"),Ec=Tt("years");function Oc(){return J(this.days()/7)}var dt=Math.round,Rt={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Pc(t,s,u,h,f){return f.relativeTime(s||1,!!u,t,h)}function Ic(t,s,u,h){var f=Xe(t).abs(),_=dt(f.as("s")),E=dt(f.as("m")),q=dt(f.as("h")),ne=dt(f.as("d")),he=dt(f.as("M")),Pe=dt(f.as("w")),ft=dt(f.as("y")),xt=_<=u.ss&&["s",_]||_<u.s&&["ss",_]||E<=1&&["m"]||E<u.m&&["mm",E]||q<=1&&["h"]||q<u.h&&["hh",q]||ne<=1&&["d"]||ne<u.d&&["dd",ne];return u.w!=null&&(xt=xt||Pe<=1&&["w"]||Pe<u.w&&["ww",Pe]),xt=xt||he<=1&&["M"]||he<u.M&&["MM",he]||ft<=1&&["y"]||["yy",ft],xt[2]=s,xt[3]=+t>0,xt[4]=h,Pc.apply(null,xt)}function Ac(t){return t===void 0?dt:typeof t=="function"?(dt=t,!0):!1}function Rc(t,s){return Rt[t]===void 0?!1:s===void 0?Rt[t]:(Rt[t]=s,t==="s"&&(Rt.ss=s-1),!0)}function Lc(t,s){if(!this.isValid())return this.localeData().invalidDate();var u=!1,h=Rt,f,_;return typeof t=="object"&&(s=t,t=!1),typeof t=="boolean"&&(u=t),typeof s=="object"&&(h=Object.assign({},Rt,s),s.s!=null&&s.ss==null&&(h.ss=s.s-1)),f=this.localeData(),_=Ic(this,!u,h,f),u&&(_=f.pastFuture(+this,_)),f.postformat(_)}var gr=Math.abs;function Lt(t){return(t>0)-(t<0)||+t}function On(){if(!this.isValid())return this.localeData().invalidDate();var t=gr(this._milliseconds)/1e3,s=gr(this._days),u=gr(this._months),h,f,_,E,q=this.asSeconds(),ne,he,Pe,ft;return q?(h=J(t/60),f=J(h/60),t%=60,h%=60,_=J(u/12),u%=12,E=t?t.toFixed(3).replace(/\.?0+$/,""):"",ne=q<0?"-":"",he=Lt(this._months)!==Lt(q)?"-":"",Pe=Lt(this._days)!==Lt(q)?"-":"",ft=Lt(this._milliseconds)!==Lt(q)?"-":"",ne+"P"+(_?he+_+"Y":"")+(u?he+u+"M":"")+(s?Pe+s+"D":"")+(f||h||t?"T":"")+(f?ft+f+"H":"")+(h?ft+h+"M":"")+(t?ft+E+"S":"")):"P0D"}var oe=vn.prototype;oe.isValid=Ml,oe.abs=ac,oe.add=lc,oe.subtract=uc,oe.as=hc,oe.asMilliseconds=fc,oe.asSeconds=pc,oe.asMinutes=mc,oe.asHours=xc,oe.asDays=gc,oe.asWeeks=yc,oe.asMonths=wc,oe.asQuarters=kc,oe.asYears=bc,oe.valueOf=dc,oe._bubble=cc,oe.clone=_c,oe.get=Sc,oe.milliseconds=vc,oe.seconds=Cc,oe.minutes=jc,oe.hours=Tc,oe.days=Mc,oe.weeks=Oc,oe.months=Dc,oe.years=Ec,oe.humanize=Lc,oe.toISOString=On,oe.toString=On,oe.toJSON=On,oe.locale=Ai,oe.localeData=Li,oe.toIsoString=G("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",On),oe.lang=Ri,B("X",0,0,"unix"),B("x",0,0,"valueOf"),H("x",gn),H("X",ia),ce("X",function(t,s,u){u._d=new Date(parseFloat(t)*1e3)}),ce("x",function(t,s,u){u._d=new Date($(t))});//! moment.js
return i.version="2.29.4",o(xe),i.fn=L,i.min=vl,i.max=Cl,i.now=jl,i.utc=S,i.unix=ec,i.months=nc,i.isDate=y,i.locale=pt,i.invalid=A,i.duration=Xe,i.isMoment=ee,i.weekdays=ic,i.parseZone=tc,i.localeData=ut,i.isDuration=Cn,i.monthsShort=rc,i.weekdaysMin=oc,i.defineLocale=ir,i.updateLocale=tl,i.locales=nl,i.weekdaysShort=sc,i.normalizeUnits=Ae,i.relativeTimeRounding=Ac,i.relativeTimeThreshold=Rc,i.calendarFormat=Xl,i.prototype=L,i.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},i})})(ho);var dd=ho.exports;const fo=Us(dd),fd=({text:e,type:n,sourceLink:r,date:i})=>c.jsxs(C,{direction:"column",children:[c.jsxs(C,{align:"center",direction:"row",justify:"space-between",children:[c.jsx(C,{align:"center",direction:"row",children:c.jsx(Yt,{type:n})}),r&&c.jsx(Dt,{href:`${r}${r!=null&&r.includes("?")?"&":"?"}open=system`,onClick:o=>o.stopPropagation(),target:"_blank",children:c.jsx(wt,{})})]}),c.jsx(Ar,{"data-testid":"episode-description",children:e}),c.jsxs(C,{align:"center",direction:"row",justify:"flex-start",children:[c.jsx(C,{align:"center",direction:"row",justify:"flex-start",children:!!i&&c.jsx(kt,{children:fo.unix(i).fromNow()})}),r&&c.jsxs(Dt,{href:r,onClick:o=>o.stopPropagation(),target:"_blank",children:[c.jsx(no,{}),c.jsx(pd,{children:r})]})]})]}),pd=T(ye)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${v.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,md=({title:e,imageUrl:n,name:r,sourceLink:i,date:o})=>c.jsxs(C,{grow:1,shrink:1,children:[c.jsxs(C,{align:"center",direction:"row",justify:"space-between",children:[c.jsxs(C,{align:"center",direction:"row",children:[c.jsx(xd,{children:c.jsx(Je,{rounded:!0,size:64,src:n||"",type:"person"})}),(e||r)&&c.jsx(gd,{children:e||r})]}),!i&&c.jsx(Dt,{href:`${i}${i!=null&&i.includes("?")?"&":"?"}open=system`,onClick:a=>a.stopPropagation(),target:"_blank",children:c.jsx(wt,{})})]}),c.jsx(C,{align:"center",direction:"row",justify:"flex-start",ml:6,mt:9,children:!!o&&c.jsx(kt,{children:fo.unix(o).fromNow()})})]}),xd=T(C)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,gd=T(C)`
  color: ${v.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,yd=({text:e,imageUrl:n,date:r,twitterHandle:i,name:o,verified:a,sourceLink:l})=>c.jsxs(C,{direction:"column",children:[c.jsxs(C,{align:"center",direction:"row",justify:"space-between",children:[c.jsxs(C,{align:"center",direction:"row",pr:16,children:[c.jsx(wd,{children:c.jsx(Je,{rounded:!0,size:27,src:n||"",type:"person"})}),c.jsxs(C,{children:[c.jsxs(kd,{align:"center",direction:"row",children:[o,a&&c.jsx("div",{className:"verification",children:c.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),i&&c.jsxs(bd,{children:["@",i]})]})]}),l&&c.jsx(Dt,{href:`${l}${l!=null&&l.includes("?")?"&":"?"}open=system`,onClick:d=>d.stopPropagation(),target:"_blank",children:c.jsx(wt,{})})]}),c.jsxs(C,{grow:1,shrink:1,children:[c.jsx(_d,{"data-testid":"episode-description",children:e}),c.jsx(C,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!r&&c.jsx(kt,{children:nn.unix(r).fromNow()})})]})]}),wd=T(C)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,kd=T(C)`
  color: ${v.white};
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
  .verification {
    margin-left: 4px;
  }
`,bd=T(C)`
  color: ${v.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,_d=T(C)`
  color: ${v.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0.2px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`,Sd=T(C).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${v.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
  .player-controls {
    margin-left: 4px;
  }
`,po=({boostCount:e,date:n,episodeTitle:r,isSelectedView:i=!1,imageUrl:o,showTitle:a,type:l,text:d,name:m,sourceLink:p,verified:g=!1,twitterHandle:y,className:w="episode-wrapper",onClick:x})=>{const S=l==="show"?a:r,M=l==="show"?"":a,j=["tweet","person","guest","topic","document"];return l?c.jsx(Sd,{className:w,onClick:x,children:j.includes(l)?c.jsxs(c.Fragment,{children:[l==="topic"&&c.jsx(vd,{children:c.jsxs(C,{grow:1,shrink:1,children:[c.jsxs(C,{align:"center",direction:"row",justify:"space-between",children:[c.jsxs(C,{align:"center",direction:"row",pr:16,children:[c.jsx(Qc,{}),c.jsx("p",{children:M})]}),p&&c.jsx(Dt,{href:`${p}${p!=null&&p.includes("?")?"&":"?"}open=system`,onClick:O=>O.stopPropagation(),target:"_blank",children:c.jsx(wt,{})})]}),c.jsx(C,{align:"center",direction:"row",justify:"flex-start",mt:9,children:!!n&&c.jsx(kt,{children:nn.unix(n).fromNow()})})]})}),["person","guest"].includes(l)&&c.jsx(md,{date:n,imageUrl:o,name:m||"",sourceLink:p||"",title:a||""}),["image"].includes(l)&&c.jsx(ud,{date:n,imageUrl:p,name:m||"",sourceLink:p||""}),l==="tweet"&&c.jsx(yd,{date:n,imageUrl:o,name:m||"",sourceLink:p||"",text:d||"",twitterHandle:y,verified:g}),l==="document"&&c.jsx(fd,{date:n,sourceLink:p||"",text:d||"",type:l})]}):c.jsxs(C,{align:"center",direction:"row",justify:"center",children:[!i&&o&&c.jsx(C,{align:"center",pr:16,children:c.jsx(Je,{size:80,src:o,type:l||""})}),c.jsxs(C,{grow:1,shrink:1,children:[c.jsxs(C,{align:"center",direction:"row",justify:"space-between",children:[c.jsx(C,{align:"center",direction:"row",children:l&&c.jsx(Yt,{type:l})}),p&&c.jsx(Dt,{href:`${p}${p!=null&&p.includes("?")?"&":"?"}open=system`,onClick:O=>O.stopPropagation(),target:"_blank",children:c.jsx(wt,{})})]}),m&&c.jsx(Ar,{"data-testid":"episode-name",children:m}),c.jsx(Ar,{"data-testid":"episode-description",children:S}),c.jsxs(C,{align:"center",direction:"row",justify:"flex-start",children:[!!n&&c.jsx(kt,{children:nn.unix(n).fromNow()}),!!M&&c.jsx(Cd,{children:M}),!i&&e>0&&c.jsx(C,{style:{marginLeft:"auto"},children:c.jsx(Vr,{amt:e})})]})]})]})}):null},Ar=T(C)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: ${v.white};
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
`,kt=T(ye)`
  overflow: hidden;
  color: ${v.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
  letter-spacing: 0.2pt;
`,vd=T.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    color: ${v.mainBottomIcons};
    margin-right: 10px;
    align-self: center;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
    color: var(--Primary-Text, #fff);
    leading-trim: both;
    text-edge: cap;
    text-overflow: ellipsis;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin: 0;
  }
`,Cd=T(kt)`
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  padding-left: 10px;
  &:before {
    content: '';
    display: block;
    border-radius: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2px;
    width: 4px;
    flex-shrink: 0;
    height: 4px;
    background: ${v.GRAY6};
  }

  &.is-show {
    margin: 20px 0px;
    padding: 0px;
    color: var(--Primary-Text, #fff);
    leading-trim: both;
    text-edge: cap;
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 17px; /* 130.769% */
  }
`,Dt=T.a`
  color: ${v.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,jd=({isSearchResult:e})=>{const n=F.useRef(null),r=e?80:10,{setSelectedNode:i,setSelectedTimestamp:o}=Ge(W=>W),{currentSearch:a,setSidebarOpen:l,setRelevanceSelected:d}=$e(W=>W),[m,p]=F.useState(0),[g,y]=F.useState(0),w=Vs(),S=m*r+r,M=w&&w.length>0?w.length-1>S:!1,j=Eh("sm","down"),O=F.useCallback(W=>{Fc(W),o(W),d(!0),i(W),j&&l(!1)},[i,d,l,o,j]),P=()=>{M&&(p(m+1),y(W=>W+1))},A=F.useMemo(()=>{if(w){const W=[...w].sort((U,I)=>(I.date||0)-(U.date||0));return a&&W.sort((U,I)=>{const Z=U.node_type==="topic"&&U.name.toLowerCase()===a.toLowerCase()?1:0;return(I.node_type==="topic"&&I.name.toLowerCase()===a.toLowerCase()?1:0)-Z}),W.slice(0,S)}return[]},[w,a,S]);return c.jsx(c.Fragment,{children:c.jsxs(ld,{ref:n,id:"search-result-list",shrink:1,children:[(A??[]).map((W,U)=>{const{image_url:I,date:Z,boost:ee,type:re,episode_title:G,show_title:R,node_type:N,text:Q,source_link:se,link:V,name:ae,verified:pe=!1,twitter_handle:Te}=W||{};return c.jsx(po,{boostCount:ee||0,date:Z||0,episodeTitle:Nn(G),imageUrl:I||"",link:V,name:ae||"",onClick:()=>{O(W)},showTitle:Nn(R),sourceLink:se,text:Q||"",twitterHandle:Te,type:N||re,verified:pe},U.toString())}),c.jsx(Md,{align:"center",background:"BG1",direction:"row",justify:"center",children:M&&c.jsx(Be,{onClick:P,size:"medium",children:"Load More"},g)})]})})},Td=F.memo(jd),Md=T(C)`
  flex: 0 0 86px;
`,Dd=({isSearchResult:e})=>{const{nodeCount:n,setNodeCount:r,setBudget:i}=Gs(d=>d),{fetchData:o,setAbortRequests:a}=Ge(d=>d),l=async()=>{n<1||(await o(i,a,{skip_cache:"true"}),r("CLEAR"))};return c.jsxs(Pd,{children:[!e&&c.jsxs("div",{className:"heading-container",children:[c.jsxs("div",{className:"heading",children:[c.jsx("span",{className:"heading__title",children:"Latest"}),c.jsx("span",{className:"heading__icon",children:c.jsx(od,{})})]}),n?c.jsx("div",{className:"button_container",children:c.jsx(Ed,{className:"button","data-testid":"see_latest_button",onClick:l,startIcon:c.jsx(ad,{}),children:`See Latest (${n})`})}):null]}),c.jsx(Td,{isSearchResult:e})]})},Ed=T(Be)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${v.GRAY6};
    }
  }
`,Od=F.memo(Dd),Pd=T(C)`
  .heading-container {
    display: flex;
    flex-direction: column;
    padding: 16px 24px 16px 24px;
  }

  .heading {
    color: ${v.GRAY6};
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &__icon {
      margin-left: 14px;
      margin-bottom: -2px;
      font-size: 24px;
    }
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${v.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${v.SECONDARY_BLUE};
      }

      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${v.PRIMARY_BLUE};
      }
    }
  }
`,Id=T(C).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${v.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
  .player-controls {
    margin-left: 4px;
  }

  .title {
    margin: 20px 0 8px;
  }
`,Pn=T(Sh)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,Ad=()=>c.jsx(c.Fragment,{children:Array(7).fill(null).map((e,n)=>c.jsx(Id,{children:c.jsxs(C,{direction:"row",children:[c.jsx(C,{align:"center",pr:16,children:c.jsx(Pn,{animation:"wave",height:64,variant:"rectangular",width:64})}),c.jsxs(C,{grow:1,shrink:1,children:[c.jsx(Pn,{height:10,variant:"rectangular",width:56}),c.jsx(Pn,{className:"title",height:10,variant:"rectangular",width:262}),c.jsx(Pn,{height:10,variant:"rectangular",width:149})]})]})},n))});T(C)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${v.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`;const Rd=T(ye)`
  overflow: hidden;
  color: ${v.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`;T(Rd)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:before {
    content: '';
    display: block;
    border-radius: 2px;
    margin-right: 8px;
    width: 4px;
    flex-shrink: 0;
    height: 4px;
    background: ${v.GRAY6};
  }
`;const Ld=48,zd=8,Nd={PaperProps:{style:{maxHeight:Ld*4.5+zd,width:250}}},Fd=["Beginner","Intermediate","Advanced","Expert"],Yd=()=>{const e=Ge(P=>P.data),[n,r]=F.useState(""),[i,o]=F.useState("Beginner"),a=$e(P=>P.currentSearch),l=Uc(),[d]=Gs(P=>[P.setBudget]),[m,p,g,y,w]=lo(P=>[P.askedQuestions,P.askedQuestionsAnswers,P.setAskedQuestion,P.setAskedQuestionAnswer,P.hasQuestionInProgress]),x=F.useCallback(P=>{y(P.answer)},[y]);F.useEffect(()=>{l&&x&&l.on("askquestionhook",x)},[x,l]);const S=async()=>{n&&(g(n),r(""));try{const P=e==null?void 0:e.nodes.filter(U=>U.text),A=P==null?void 0:P.slice(0,5),W=(A!=null&&A.length?A.map(U=>U.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,U=>`\\${U}`);a&&(await Yc.enable(),await Jc({expertise_level:i,question_text:n,search_term:a,transcripts:W},d),await Bc(d))}catch(P){console.error(P)}},M=i&&n.trim()&&!w,j=P=>{o(P.target.value)},O=async P=>{if(w){P.preventDefault();return}P.keyCode===13&&P.shiftKey===!1&&M&&(P.preventDefault(),S())};return c.jsxs(Bd,{children:[c.jsx(C,{children:c.jsx(C,{children:c.jsxs(Ks,{component:"div",children:[c.jsx(Hd,{id:"select-label",size:"small",children:"Expertise level"}),c.jsx(Wd,{id:"demo-multiple-name",input:c.jsx(_h,{label:"Expertise level"}),labelId:"select-label",MenuProps:Nd,onChange:j,size:"small",value:i,children:Fd.map(P=>c.jsx(Xc,{component:"li",value:P,children:P},P))})]})})}),c.jsx(Gd,{children:m==null?void 0:m.map((P,A)=>c.jsxs(C,{className:"response",py:12,children:[c.jsx(ye,{kind:"medium",children:P}),c.jsx(C,{py:12,children:(p==null?void 0:p[A])!==void 0?c.jsx(ye,{color:"unreadMsgText",children:p[A]}):c.jsxs(C,{align:"center",py:12,children:[c.jsx(C,{align:"center",py:12,children:c.jsx(uo,{color:v.white})}),c.jsx(C,{align:"center",py:12,children:c.jsx(ye,{children:"Generating response"})})]})})]},P))}),c.jsxs(Ud,{onKeyDown:O,py:12,tabIndex:-1,children:[c.jsx($d,{disabled:w,onChange:P=>r(P.target.value),placeholder:"Enter your question",value:n}),c.jsx(Vd,{children:c.jsx(vh,{color:M?v.white:v.gray300,size:"18"})})]})]})},Bd=T.div`
  margin-top: 20px;
`,$d=T(Zc)`
  background: ${v.inputBg1};
  max-width: 100%;
  color: ${v.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,Hd=T(kh)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${v.secondaryText4};
  }
`,Wd=T(bh)`
  .MuiInputBase-root {
    color: blue;
  }
  background: ${v.inputBg1};

  .MuiSvgIcon-root {
    color: ${v.white};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
    color: ${v.white};
  }
`,Ud=T(C)`
  position: relative;
`,Vd=T(C)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,Gd=T(C)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${v.divider2};
  }
`,Xi=({text:e})=>c.jsxs(C,{align:"center",justify:"center",py:12,children:[c.jsx(C,{align:"center",py:12,children:c.jsx(uo,{color:v.white})}),c.jsx(C,{align:"center",py:12,children:c.jsx(ye,{children:e})})]}),qd=()=>{const[e,n,r,i]=lo(a=>[a.teachMeAnswer,a.hasTeachingInProgress,a.instgraphAnswser,a.hasInstagraphInProgress]),o=!i&&!!(r!=null&&r.edges)&&!!(r!=null&&r.nodes);return c.jsxs(c.Fragment,{children:[o?c.jsx(Kc,{edges:r==null?void 0:r.edges,nodes:r==null?void 0:r.nodes}):c.jsx(Xi,{text:"Generating instagraph"}),n?c.jsx(Xi,{text:"Generating tutorial"}):c.jsxs(c.Fragment,{children:[c.jsx(Zd,{children:c.jsx(ye,{children:e})}),c.jsx(Yd,{})]})]})};T(Be)``;const Zd=T(C)`
  padding-left: 10px;
  padding-right: 10px;
`,Qd=({cx:e,cy:n})=>c.jsx(wh,{cx:e,cy:n,fill:v.blueTextAccent,r:2}),Xd=()=>{const e=qe(),n=[...(e==null?void 0:e.data)||[]].sort((o,a)=>(o.year||0)-(a.year||0)),r=n.map(o=>o.year).filter(o=>o),i=n.map(o=>o.rate).filter(o=>o);return c.jsx(Jd,{direction:"column",px:24,py:16,children:c.jsx(eh,{height:"100%",width:"100%",children:c.jsxs(th,{margin:{bottom:20,left:20,right:20,top:20},children:[c.jsx(mh,{stroke:"#f5f5f5"}),c.jsx(xh,{dataKey:"year",domain:[Math.min(...r),Math.max(...r)],label:{fill:v.white,fontSize:"12px",offset:-10,position:"insideBottom",value:e.x_axis_name},name:"X",tick:{fill:v.white,fontSize:"8px"},type:"number"}),c.jsx(gh,{color:"#000",dataKey:"rate",domain:[Math.min(...i),Math.max(...i)],label:{angle:-90,fill:v.white,fontSize:"12px",offset:0,position:"insideLeft",value:e.y_axis_name},name:"Y",tick:{fill:v.white,fontSize:"8px"},type:"number"}),c.jsx(yh,{cursor:{strokeDasharray:"3 3"}}),c.jsx(nh,{data:n,fill:v.blueTextAccent,line:!0,name:"A scatter",shape:c.jsx(Qd,{})})]})})})},Jd=T(C)`
  width: 100%;
  height: 100%;
`;function Un(e,n){if(!(n!=null&&n.trim()))return e;const r=new RegExp(`(${n})`,"gi"),i=e.split(r);return c.jsx(c.Fragment,{children:i.map((o,a)=>r.test(o)?c.jsx(Kd,{children:o},a):o)})}const Kd=T.span`
  background-color: rgba(0, 123, 255, 0.4);
  padding: 2;
  margin: 0;
  border-radius: 3px;
  color: inherit;
`,ef=({stateless:e,node:n,searchTerm:r})=>c.jsxs(C,{grow:1,shrink:1,children:[c.jsx(nf,{children:e&&c.jsxs(tf,{children:[c.jsx("div",{className:"icon",children:c.jsx(ro,{})}),c.jsx("div",{className:"title",children:"Description"})]})}),c.jsx(ye,{children:n!=null&&n.description?Un(n.description,r):"..."})]}),tf=T(C).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${v.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${v.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,nf=T(C).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,rf=T.span`
  color: ${v.white};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  text-align: right;

  &:hover {
    color: ${v.GRAY3};
  }
`,sf=({stateless:e,node:n})=>{var S;const[r,i]=$e(M=>[M.transcriptIsOpen,M.setTranscriptOpen]),[o,a]=F.useState(!1),[l,d]=F.useState(""),[m,p]=F.useState(!1);if(!e&&!r)return null;const g=async()=>{try{const M=await qi(n==null?void 0:n.ref_id);d(M.data.text)}catch(M){console.error("Error fetching full transcript",M)}},y=async()=>{if(l===""){const M=await qi(n==null?void 0:n.ref_id);x(M.data.text)}else x(l);setTimeout(()=>{a(!1)},2e3)},w=async()=>{m?p(!1):(await g(),p(!0))},x=M=>{M!==void 0&&(navigator.clipboard.writeText(M),a(!0))};return c.jsxs(C,{grow:1,shrink:1,children:[c.jsxs(af,{children:[e&&c.jsxs(of,{children:[c.jsx("div",{className:"icon",children:c.jsx(ro,{})}),c.jsx("div",{className:"title",children:"Transcript"})]}),n!=null&&n.text?c.jsx(c.Fragment,{children:o?c.jsxs(cf,{align:"center",direction:"row",justify:"flex-start",children:[c.jsx("div",{className:"icon",children:c.jsx(Xs,{})}),c.jsx("div",{className:"text",children:"Copied"})]}):c.jsx(Be,{endIcon:c.jsx(rh,{}),onPointerDown:()=>y(),size:"small",variant:"outlined",children:"Copy"})}):c.jsx("div",{}),!e&&c.jsx(lf,{onClick:()=>{i(!1)},children:c.jsx(Ch,{fontSize:35})})]}),c.jsxs(uf,{children:[m?l:`${(S=n==null?void 0:n.text)==null?void 0:S.substring(0,100)}`,c.jsxs(rf,{onClick:w,children:["... ",m?"show less":"more"]})]})]})},of=T(C).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${v.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${v.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,af=T(C).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,lf=T(C).attrs({})`
  color: ${v.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${v.lightBlue500};
  }
`,uf=T(C)`
  color: ${v.white};
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,cf=T(C)`
  color: ${v.SECONDARY_BLUE};
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  height: 28px;
  padding: 0 20px;
  .text {
    margin-left: 5px;
  }

  .icon {
    font-size: 12px;
  }
`,mo=({node:e})=>{const n=Ge(M=>M.selectedNode),r=$e(M=>M.currentSearch),{link:i,image_url:o,date:a,boost:l,node_type:d,type:m,id:p,show_title:g,episode_title:y,ref_id:w}=e||n||{},[x,S]=F.useState(l||0);return F.useEffect(()=>{S(l??0)},[l]),!e&&!n?null:c.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:c.jsxs(hf,{children:[c.jsx(ff,{boostCount:x||0,date:a||0,episodeTitle:Nn(y),imageUrl:o,isSelectedView:!0,link:i,onClick:()=>null,showTitle:g,type:d||m}),c.jsx(kr,{}),c.jsxs(df,{children:[c.jsx(Vr,{amt:x}),c.jsx(io,{content:e||n,count:x,refId:w,updateCount:S})]}),c.jsx(kr,{}),c.jsx(Ji,{children:c.jsx(ef,{node:e||n,searchTerm:r,stateless:!0})}),((n==null?void 0:n.text)||(e==null?void 0:e.text))&&c.jsxs(c.Fragment,{children:[c.jsx(kr,{}),c.jsx(Ji,{children:c.jsx(sf,{node:e||n,stateless:!0},p)})]})]})})},hf=T(C)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,df=T(C)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,Ji=T(C)`
  padding: 18px 18px 18px;
`,ff=T(po)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,kr=T(Gr)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,pf=T(C)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);

  .episode-title {
    font-size: 20px;
    font-weight: 600;
    color: ${v.white};
  }

  .show {
    cursor: pointer;
    &__title {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${v.white};
      margin-left: 8px;
    }
  }
`,mf=({selectedNodeShow:e})=>{const[n,r]=Ge(a=>[a.selectedNode,a.setSelectedNode]),{type:i}=n||{},o=$e(a=>a.currentSearch);return c.jsxs(pf,{p:20,children:[c.jsx(C,{align:"flex-start",children:i&&c.jsx(Yt,{type:i})}),c.jsx(C,{direction:"row",mb:22,mt:22,children:c.jsx(C,{grow:1,shrink:1,children:c.jsx(ye,{className:"episode-title",kind:"heading",children:Un((n==null?void 0:n.episode_title)||"Unknown",o)})})}),e?c.jsxs(C,{className:"show",direction:"row",onClick:()=>r(e),children:[c.jsx(Je,{size:16,src:(e==null?void 0:e.image_url)||"",type:"show"}),c.jsx(ye,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:e==null?void 0:e.show_title})]}):null]})},xf="Flow 1",gf=0,yf=12,wf=15,kf={g:"LottieFiles Figma v45"},bf=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],_f="5.7.0",Sf=60,vf=57.6,Cf=0,jf=[],Tf={nm:xf,ddd:gf,h:yf,w:wf,meta:kf,layers:bf,v:_f,fr:Sf,op:vf,ip:Cf,assets:jf},Mf=()=>{const e=F.useRef(null);return F.useEffect(()=>{const n=document.getElementById("lottie-timestamp-equalizer");return n&&(e.current=$c.loadAnimation({container:n,animationData:Tf,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),c.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},Df=T(C).attrs(()=>({direction:"row"}))`
  cursor: pointer;
  color: ${v.primaryText1};
  border-top: 1px solid ${v.black};
  background: ${e=>e.isSelected?"rgba(97, 138, 255, 0.1)":`${v.BG1}`};

  .play-pause {
    font-size: 24px;
    border-radius: 4px;
    color: ${v.GRAY7};
    cursor: pointer;
  }

  .info {
    margin-left: auto;
    color: ${v.GRAY7};
    font-size: 24px;
  }

  &:hover {
    .play-pause {
      color: ${v.white};
    }
  }
`,Ef=({onClick:e,timestamp:n,isSelected:r,setOpenClip:i})=>{const o=r?"blueTextAccent":"placeholderText";return r?(jh,v[o]):(Th,v[o]),c.jsxs(Df,{align:"center","data-testid":"wrapper",direction:"row",isSelected:r,justify:"flex-start",onClick:e,px:20,py:20,children:[c.jsxs("div",{children:[c.jsx(Zs,{className:"play-pause",children:r?c.jsx(Mf,{}):c.jsx(ih,{})}),!1]}),c.jsxs(Of,{align:"flex-start",direction:"column",justify:"center",children:[n.timestamp&&c.jsx("span",{className:"timestamp",children:sh(n.timestamp)}),c.jsx("span",{className:"title",children:Nn(n.show_title)})]}),c.jsx("div",{className:"info",children:c.jsx(C,{"data-testid":"info-icon-wrapper",onClick:()=>i(n),pt:4,children:c.jsx(Mh,{})})})]})},Of=T(C)`
  font-size: 13px;
  color: ${v.white};
  font-family: 'Barlow';
  margin: 0 16px;
  flex-shrink: 1;
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .timestamp {
    color: ${v.GRAY6};
  }
`,Pf=T(C)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,If=()=>{const e=qe(),n=co(),[r,i]=F.useState(null),[o,a]=F.useState(null),[l,d,m,p,g]=Hn(S=>[S.playingNode,S.setPlayingNodeLink,S.setPlayingTime,S.setIsSeeking,S.playingTime]),y=F.useMemo(()=>so((n==null?void 0:n.nodes)||[],e),[n==null?void 0:n.nodes,e]),w=F.useMemo(()=>n==null?void 0:n.nodes.find(S=>S.node_type==="show"&&S.show_title===(e==null?void 0:e.show_title)),[n==null?void 0:n.nodes,e]),x=F.useCallback(S=>{var j;const M=rn(((j=S==null?void 0:S.timestamp)==null?void 0:j.split("-")[0])||"00:00:01");(l&&S.link&&(l==null?void 0:l.link)!==S.link||(!l||(l==null?void 0:l.link)!==S.link)&&S.link!==void 0)&&(d(S.link),m(0),p(!0)),m(M),p(!0),a(S)},[l,d,p,a,m]);return F.useEffect(()=>{y!=null&&y.length&&!y.some(S=>S.ref_id===(o==null?void 0:o.ref_id))&&x(y[0])},[y,o,x]),F.useEffect(()=>{if(y!=null&&y.length){const S=y.find(M=>{if(!M.timestamp)return!1;const j=rn(M.timestamp.split("-")[0]);return Math.abs(j-g)<1});S&&S.ref_id!==(o==null?void 0:o.ref_id)&&a(S)}},[g,y,o]),e?c.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:c.jsxs(Rf,{children:[r&&c.jsx(Lf,{className:"slide-me",direction:"up",in:!!r,children:c.jsxs(Af,{children:[c.jsx(C,{className:"close-info",onClick:()=>i(null),children:c.jsx(Js,{})}),r&&c.jsx(mo,{node:r})]})}),c.jsx(mf,{selectedNodeShow:w}),!!(y!=null&&y.length)&&c.jsx(Pf,{children:c.jsx(C,{pb:20,children:y==null?void 0:y.map((S,M)=>c.jsx(Ef,{isSelected:(o==null?void 0:o.ref_id)===S.ref_id,onClick:()=>x(S),setOpenClip:i,timestamp:S},`${S.episode_title}_${M}`))})})]})}):null},Af=T(C)`
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  .close-info {
    position: absolute;
    color: ${v.white};
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`,Rf=T(C)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,Lf=T(qr)`
  && {
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 16px;
    overflow: hidden;
    background: ${v.BG1};
    z-index: 1;
  }
`,zf=()=>{const e=qe(),n=e==null?void 0:e.name;return c.jsxs(C,{direction:"column",px:24,py:16,children:[c.jsx(Je,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.source_link)||"",type:"image"}),c.jsx(C,{py:20,children:c.jsx(ye,{color:"primaryText1",kind:"bigHeading",children:n})})]})},Nf=()=>{const{sender_pic:e,sender_alias:n,date:r,message_content:i}=qe()||{};return c.jsxs(C,{direction:"row",children:[c.jsx(Bf,{src:e}),c.jsxs(Ff,{children:[c.jsxs(C,{align:"flex-end",className:"info",direction:"row",children:[n&&c.jsx("span",{className:"info__name",children:n}),r&&c.jsx("span",{className:"info__date",children:r})]}),i&&c.jsx(Yf,{dangerouslySetInnerHTML:{__html:oh(i)}})]})]})},Ff=T(C)`
  color: ${v.black};
  border-radius: 8px;
  font-size: 20px;
  margin-left: 8px;
  flex: 1;

  .info__date {
    color: ${v.textMessages};
    font-size: 14px;
    margin-left: 8px;
  }

  .info__name {
    color: ${v.green400};
    font-size: 16px;
  }
`,Yf=T.div`
  background: ${v.white};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${v.white};
    position: absolute;
    left: -6px;
    top: 0;
  }

  .username {
    color: ${v.blueTextAccent};
  }

  a {
    color: ${v.blueTextAccent};
    text-decoration: none;
  }

  a:hover,
  a:visited {
    color: ${v.blueTextAccent};
    text-decoration: none;
  }
`,Bf=T.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,$f=()=>{const e=qe(),n=(e==null?void 0:e.name)||(e==null?void 0:e.label);return c.jsxs(C,{direction:"row",px:24,py:16,children:[c.jsx(Je,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.image_url)||"person_placeholder_img.png",type:"person"}),c.jsx(C,{p:20,children:c.jsx(ye,{color:"primaryText1",kind:"bigHeading",children:n})})]})},Hf=({node:e,onClick:n})=>{var o,a;const r=rn(e.timestamp||""),i=Math.ceil(r/60);return c.jsx(Wf,{onClick:n,p:20,children:c.jsxs("div",{children:[c.jsxs(C,{align:"flex-start",direction:"row",justify:"flex-start",children:[c.jsx(C,{align:"center",children:c.jsx(Je,{size:64,src:(e==null?void 0:e.image_url)||"",type:(e==null?void 0:e.node_type)||"episode"})}),c.jsxs("div",{className:"content",children:[c.jsxs(C,{align:"center",direction:"row",children:[c.jsx(Yt,{type:"episode"}),i>0&&c.jsxs("div",{className:"subtitle",children:[i," ",i===1?"min":"mins"]})]}),c.jsx(ye,{className:"title",color:"primaryText1",kind:"regular",children:e.episode_title})]})]}),c.jsxs(C,{align:"center",direction:"row",justify:"flex-end",children:[c.jsxs(ye,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((o=e==null?void 0:e.children)==null?void 0:o.length)||0," ",((a=e==null?void 0:e.children)==null?void 0:a.length)===1?"Clip":"Clips"]}),c.jsx(ah,{style:{color:v.white}})]})]})})},Wf=T(C).attrs({})`
  direction: row;
  cursor: pointer;
  color: ${v.primaryText1};
  border-bottom: 1px solid #101317;

  .content {
    margin-left: 16px;
    align-self: stretch;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 24px;
  }

  .title {
    margin-top: 12px;
    display: block;
  }

  .clipText {
    font-size: 12px;
    margin-right: 6px;
  }
`,Uf=T(C)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;

  .subtitle {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${v.GRAY6};
    margin-left: 8px;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,Vf=T(C)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,Gf=T(ye)`
  font-size: 20px;
  font-weight: 700;
  max-width: 250px;
  -webkit-box-orient: vertical;
  max-height: calc(2 * 1.5em);
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  margin-bottom: 26px;
`,qf=T.div`
  max-height: calc(100vh - 340px);
  overflow-y: auto;
`,Zf=()=>{const[e,n]=Ge(l=>[l.selectedNode,l.setSelectedNode]),r=co(),[i,o]=F.useState([]),a=F.useMemo(()=>{var m;const l=new Set,d={};if((m=e==null?void 0:e.children)!=null&&m.length){e.children.forEach((g,y)=>{var S,M,j,O;const w=so((r==null?void 0:r.nodes)||[],e)||[],x=r==null?void 0:r.nodes.find(P=>P.ref_id===g);if(x){x.timestamp=(S=w[0])==null?void 0:S.timestamp;const P=(O=(j=(M=w[y])==null?void 0:M.hosts)==null?void 0:j[0])==null?void 0:O.name;P&&l.add(P),d[g]=x,d[g]=x}});const p=Array.from(l);o(p)}return Object.values(d).filter(p=>p.node_type==="episode").sort((p,g)=>(g.weight||0)-(p.weight||0))},[r==null?void 0:r.nodes,e]);return c.jsxs(Uf,{children:[c.jsx(Vf,{children:c.jsxs(C,{direction:"row",children:[c.jsx(C,{pr:24,children:c.jsx(Je,{size:80,src:(e==null?void 0:e.image_url)||"audio_default.svg",type:"show"})}),c.jsx(C,{direction:"column",children:c.jsxs(C,{direction:"column",grow:1,justify:"space-between",children:[c.jsxs(C,{align:"center",direction:"row",justify:"flex-start",children:[c.jsx(Yt,{type:"show"})," ",c.jsxs("div",{className:"subtitle",children:["by ",i.join(", ")||(e==null?void 0:e.show_title)]})]}),c.jsx(Gf,{kind:"bigHeading",children:(e==null?void 0:e.show_title)||"Unknown"})]})})]})}),c.jsxs(C,{direction:"column",children:[c.jsx(C,{p:24,children:c.jsx(ye,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),c.jsx(qf,{children:a.map(l=>c.jsx(Hf,{node:l,onClick:()=>n(l)},l.ref_id))})]})]})},Qf=()=>{const e=qe();return c.jsx(C,{align:"center",justify:"center",children:c.jsx(ye,{color:"primaryText1",kind:"hugeHeading",children:e==null?void 0:e.label})})},Xf=()=>{const e=qe(),{date:n,boost:r,text:i,name:o,verified:a,image_url:l,twitter_handle:d,ref_id:m}=e||{},p=(e==null?void 0:e.tweet_id)||"",[g,y]=F.useState(r||0),w=$e(x=>x.currentSearch);return e&&c.jsxs(c.Fragment,{children:[c.jsxs(C,{direction:"column",p:24,children:[c.jsxs(C,{align:"center",direction:"row",pr:16,children:[c.jsx(Jf,{children:c.jsx(Je,{rounded:!0,size:58,src:l||"",type:"person"})}),c.jsxs(C,{children:[c.jsxs(Kf,{align:"center",direction:"row",children:[o,a&&c.jsx("div",{className:"verification",children:c.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),d&&c.jsxs(ep,{children:["@",d]})]})]}),c.jsxs(C,{grow:1,shrink:1,children:[c.jsx(tp,{"data-testid":"episode-description",children:Un(i||"",w)}),c.jsx(C,{direction:"row",justify:"flex-start",children:!!n&&c.jsx(kt,{children:nn.unix(n).format("ll")})})]}),c.jsx(C,{align:"stretch",mt:22,children:c.jsx("a",{href:`https://twitter.com/${d}/status/${p}?open=system`,rel:"noopener noreferrer",target:"_blank",children:c.jsx(rp,{endIcon:c.jsx(wt,{}),children:"View Tweet"})})})]}),c.jsx(np,{}),c.jsxs(C,{direction:"row",justify:"space-between",pt:14,px:24,children:[c.jsx(Vr,{amt:g}),c.jsx(io,{content:e,count:g,refId:m,updateCount:y})]})]})},Jf=T(C)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Kf=T(C)`
  color: ${v.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`,ep=T(C)`
  color: ${v.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,tp=T(C)`
  color: ${v.white};
  font-family: Barlow;
  font-size: 17px;
  font-weight: 400;
  font-style: normal;
  line-height: 130%;
  letter-spacing: -0.39px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`,np=T(Gr)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,rp=T(Be)`
  width: 100%;
`,ip=e=>c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:c.jsxs("g",{id:"volume_mute",children:[c.jsx("mask",{id:"mask0_1483_75386",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:c.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),c.jsxs("g",{mask:"url(#mask0_1483_75386)",children:[c.jsx("path",{id:"volume_up_2",d:"M14.0384 20.1095V18.5595C15.4807 18.1005 16.6425 17.2672 17.5239 16.0595C18.4053 14.8518 18.8461 13.4903 18.8461 11.9749C18.8461 10.4595 18.4053 9.09799 17.5239 7.89031C16.6425 6.68261 15.4807 5.84927 14.0384 5.39031V3.84033C15.8999 4.33905 17.4165 5.33841 18.5883 6.83841C19.7601 8.33839 20.346 10.0506 20.346 11.9749C20.346 13.8993 19.7601 15.6114 18.5883 17.1114C17.4165 18.6114 15.8999 19.6108 14.0384 20.1095ZM3.65381 14.4999V9.49993H7.36531L11.6537 5.21153V18.7883L7.36531 14.4999H3.65381ZM14.0384 15.6537V8.29608C14.7127 8.66275 15.2339 9.17909 15.6018 9.84511C15.9698 10.5111 16.1537 11.2294 16.1537 11.9999C16.1537 12.7602 15.9682 13.4675 15.597 14.122C15.2259 14.7765 14.7063 15.2871 14.0384 15.6537Z",fill:"currentColor"}),c.jsx("path",{id:"mute_line",d:"M6 21L21 4",stroke:"#808080","stroke-width":"2","stroke-linecap":"round"})]})]})}),sp=({isPlaying:e,isFullScreen:n,setIsPlaying:r,playingTime:i,duration:o,handleProgressChange:a,handleVolumeChange:l,onFullScreenClick:d,showToolbar:m})=>{const[p,g]=F.useState(.5),[y,w]=F.useState(!1),[x,S]=F.useState(.5),M=(O,P)=>{const A=Array.isArray(P)?P[0]:P;g(A),l(O,A),y&&w(!1)},j=()=>{y?(g(x),l(new Event("input"),x)):(S(p),g(0),l(new Event("input"),0)),w(!y)};return c.jsxs(C,{children:[(!m||n)&&c.jsx(dp,{"aria-label":"Small","data-testid":"progress-bar",isFullScreen:n,max:o,onChange:a,size:"small",value:i}),c.jsxs(op,{align:"center",direction:"row",showToolbar:m||n,children:[c.jsx(up,{onClick:r,size:"small",children:e?c.jsx(Wn,{}):c.jsx(Wr,{})}),c.jsxs(fp,{direction:"row",children:[c.jsx("span",{children:Qi(i)}),c.jsx("span",{className:"separator",children:"/"}),c.jsx("span",{className:"duration",children:Qi(o)})]}),c.jsxs(cp,{direction:"row",px:9,children:[c.jsx(oo,{className:"volume-slider",max:1,min:0,onChange:M,size:"small",step:.1,value:p}),c.jsx(ap,{onClick:j,children:y?c.jsx(lp,{children:c.jsx(ip,{})}):c.jsx(lh,{})})]}),c.jsx(hp,{"data-testid":"fullscreen-button",onClick:d,children:n?c.jsx(ch,{}):c.jsx(uh,{})})]})]})},op=T(C)`
  height: 60px;
  padding: 12px 16px;
  ${e=>e.showToolbar&&`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:1;
    background-color: rgba(0, 0, 0, 0.6);
  `}

  &.error-wrapper {
    color: ${v.primaryRed};
  }
`,ap=T.span``,lp=T.span`
  color: gray;
`,up=T(Zs)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,cp=T(C)`
  height: 28px;
  font-size: 26px;
  border-radius: 200px;
  color: ${v.white};
  margin-left: auto;

  .volume-slider {
    display: none;
    color: ${v.white};
    height: 3px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 2px;
      height: 10px;
      background-color: ${v.white};
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }

  &:hover {
    background: rgba(42, 44, 55, 1);
    .volume-slider {
      width: 62px;
      margin-right: 4px;
      display: block;
    }
  }
`,hp=T(C)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,dp=T(oo)`
  && {
    z-index: 20;
    color: ${v.white};
    height: 3px;
    width: calc(100% - 12px);
    margin: ${e=>e.isFullScreen?"-75px auto":"-12px auto"};
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 10px;
      height: 10px;
      background-color: ${v.white};
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }
`,fp=T(C)`
  color: ${v.white};
  font-size: 13px;
  margin-left: 16px;
  font-weight: 500;

  .separator {
    color: ${v.GRAY6};
    margin: 0 4px;
  }

  .duration {
    color: ${v.GRAY6};
  }
`,pp=({hidden:e})=>{const n=F.useRef(null),r=F.useRef(null),[i,o]=F.useState(!1),[a,l]=F.useState(!1),[d,m]=F.useState(!1),[p,g]=F.useState("ready"),[y,w]=F.useState(!1),{isPlaying:x,playingTime:S,duration:M,setIsPlaying:j,setPlayingTime:O,setDuration:P,playingNode:A,volume:W,setVolume:U,setHasError:I,resetPlayer:Z,isSeeking:ee,setIsSeeking:re}=Hn(k=>k),G=(A==null?void 0:A.media_url)||(A==null?void 0:A.link),R=(G==null?void 0:G.includes("youtube"))||(G==null?void 0:G.includes("youtu.be"));F.useEffect(()=>()=>Z(),[Z]),F.useEffect(()=>{A&&!y&&(O(0),P(0),w(!1))},[A,O,P,w,y]),F.useEffect(()=>{ee&&n.current&&(n.current.seekTo(S,"seconds"),re(!1))},[S,ee,re]);const N=()=>{j(!x)},Q=()=>{j(!0)},se=()=>{j(!1)},V=(k,ie)=>{const B=Array.isArray(ie)?ie[0]:ie;O(B),n.current&&!ee&&n.current.seekTo(B,"seconds")},ae=(k,ie)=>{const B=Array.isArray(ie)?ie[0]:ie;U(B)},pe=()=>{I(!0),g("error")},Te=k=>{if(!ee){const ie=k.playedSeconds;O(ie)}},ze=()=>{if(n.current){g("ready");const k=n.current.getDuration();if(P(k),!ee&&(S===0||Math.abs(S-rn("00:00:00"))<1)&&(A==null?void 0:A.type)==="youtube"&&A!=null&&A.timestamp){const[ie]=A.timestamp.split("-"),B=rn(ie);n.current.seekTo(B,"seconds"),O(B)}}},b=()=>{r.current&&(document.fullscreenElement?(document.exitFullscreen(),setTimeout(()=>l(!1),300)):r.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",we)}))},we=()=>{l(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",we)};F.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",we)}),F.useEffect(()=>{const k=ie=>{if(a){const B=window.screen.height,ke=ie.clientY,rt=B-ke;m(rt<=50)}};return document.addEventListener("mousemove",k),()=>{document.removeEventListener("mousemove",k)}},[a,d]),F.useEffect(()=>{const k=ie=>{a&&ie.key==="Escape"?(ie.preventDefault(),ie.stopPropagation()):i&&ie.key===" "&&(ie.preventDefault(),N())};return document.addEventListener("fullscreenchange",we),document.addEventListener("keydown",k),()=>{document.removeEventListener("fullscreenchange",we),document.removeEventListener("keydown",k)}});const Me=()=>{N()};return G?c.jsxs(mp,{ref:r,hidden:e,onBlur:()=>o(!1),onFocus:()=>o(!0),tabIndex:0,children:[c.jsx(xp,{isFullScreen:a,children:c.jsx(Je,{size:120,src:(A==null?void 0:A.image_url)||"",type:"clip"})}),c.jsx(wp,{onClick:Me,children:c.jsx(hh,{ref:n,controls:!1,height:a?window.screen.height:"200px",onBuffer:()=>g("buffering"),onBufferEnd:()=>g("ready"),onError:pe,onPause:se,onPlay:Q,onProgress:Te,onReady:ze,playing:x,url:G||"",volume:W,width:"100%"})}),p==="error"?c.jsx(yp,{className:"error-wrapper",children:"Error happened, please try later"}):null,p==="ready"?c.jsx(sp,{duration:M,handleProgressChange:V,handleVolumeChange:ae,isFullScreen:a,isPlaying:x,onFullScreenClick:b,playingTime:S,setIsPlaying:N,showToolbar:d&&a}):null,p==="buffering"&&!R?c.jsx(gp,{isFullScreen:a,children:c.jsx(Ur,{color:v.lightGray})}):null]}):null},mp=T(C)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${e=>e.hidden?"0px":"auto"};
  &:focus {
    outline: none;
  }
`,xp=T(C)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,gp=T(C)`
  position: absolute;
  top: ${e=>e.isFullScreen?"43%":"39%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,yp=T(C)`
  height: 60px;
  padding: 12px 16px;
  color: ${v.primaryRed};
`,wp=T.div`
  width: 100%;
  cursor: pointer;
`,xo=F.memo(pp),kp=()=>{const e=qe();if(!e)return null;const n=!!e.image_url,r=!!e.media_url||!!e.link,i=e.properties||{};return c.jsxs(Tp,{children:[n?c.jsx(vp,{children:c.jsx("img",{alt:"img_a11y",onError:o=>{o.currentTarget.src="generic_placeholder_img.png",o.currentTarget.className="default-img"},src:e.image_url})}):null,r?c.jsx(xo,{hidden:!1}):null,c.jsxs(_p,{grow:1,justify:"flex-start",pt:n?0:8,shrink:1,children:[c.jsx(C,{ml:24,mt:20,style:{width:"fit-content"},children:c.jsx(Yt,{type:e.type||""})}),c.jsx(Sp,{children:Object.entries(i).filter(([o])=>o!=="media_url"&&o!=="link").map(([o,a])=>c.jsx(bp,{label:o,value:a},o))})]})]})},bp=({label:e,value:n})=>{const r=n.length>140;return c.jsxs(c.Fragment,{children:[c.jsxs(Cp,{className:yt("node-detail",{"node-detail__long":r}),children:[c.jsx(ye,{className:"node-detail__label",children:e}),c.jsx(ye,{className:"node-detail__value",children:n})]}),c.jsx(jp,{})]})},_p=T(C)`
  overflow: auto;
  width: 100%;
  flex-grow: 1;
  padding-top: 16px;
`,Sp=T(C)`
  padding: 4px 24px;
`,vp=T(C)`
  width: 100%;
  height: 240px;
  padding-top: 20px;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .default-img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    border-radius: 2px;
  }
`,Cp=T(C)`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-family: Barlow;
  padding: 12px 0;
  font-size: 14px;
  line-height: 22px;

  &.node-detail {
    .node-detail__label {
      min-width: 116px;
      font-weight: 600;
    }

    .node-detail__value {
      font-weight: 400;
      word-wrap: normal;
      word-break: break-word;
    }

    &__long {
      flex-direction: column;
    }
  }
`,jp=T(Gr)`
  margin: auto 0px 2px 0px;
  opacity: 0.75;
`,Tp=T(C)`
  flex-direction: column;
  height: 100%;
`,Mp=()=>{var d,m;const[e,n]=F.useState(!1),r=qe(),i=!!(r!=null&&r.source_link),o=F.useRef(null),a=$e(p=>p.currentSearch),l=p=>{p.stopPropagation(),p.currentTarget.blur(),n(!e)};return F.useEffect(()=>{var p,g;e?(p=o.current)==null||p.play():(g=o.current)==null||g.pause()},[e]),c.jsxs(C,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:i?62:0,shrink:1,children:[i&&c.jsxs(Dp,{children:[c.jsx(no,{color:v.GRAY6}),c.jsx(Pp,{children:r==null?void 0:r.source_link}),c.jsx(Ep,{href:`${r==null?void 0:r.source_link}?open=system`,onClick:p=>p.stopPropagation(),target:"_blank",children:c.jsx(wt,{})})]}),(d=r==null?void 0:r.audio)!=null&&d.length?c.jsxs(C,{justify:"flex-start",p:12,children:[c.jsx(Be,{onClick:p=>l(p),startIcon:e?c.jsx(Wn,{}):c.jsx(Wr,{}),children:e?"Pause":"Play"}),c.jsx(Ip,{ref:o,src:((m=r.audio[0])==null?void 0:m.link)||"",children:c.jsx("track",{kind:"captions"})})]}):null,c.jsx(Op,{grow:1,justify:"flex-start",p:12,shrink:1,children:c.jsx(ye,{color:"primaryText1",kind:"regular",children:Un((r==null?void 0:r.text)||"",a)})})]})},Dp=T(C)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${v.BG2};
  gap: 5px;
  color: ${v.GRAY6};

  span {
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color: ${v.GRAY6};
  }
`,Ep=T.a`
  color: ${v.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Op=T(C)`
  overflow: auto;
`,Pp=T(ye)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ip=T.audio`
  height: 0;
  width: 0;
`,Ap=["clip","twitter_space","video","episode","podcast"],Rp=()=>{const e=qe(),{showTeachMe:n}=Ge(i=>i),{setPlayingNode:r}=Hn(i=>i);if(F.useEffect(()=>{Ap.includes((e==null?void 0:e.node_type)||"")&&r(e)},[r,e]),n)return c.jsx(qd,{});switch(e==null?void 0:e.node_type){case"guest":case"person":return c.jsx($f,{});case"data_series":return c.jsx(Xd,{});case"tribe_message":return c.jsx(Nf,{});case"tweet":return c.jsx(Xf,{});case"topic":return c.jsx(Qf,{});case"show":return c.jsx(Zf,{});case"video":case"podcast":case"clip":case"twitter_space":return c.jsx(mo,{});case"document":return c.jsx(Mp,{});case"episode":return c.jsx(If,{},e.ref_id);case"image":return c.jsx(zf,{});default:return c.jsx(kp,{})}},Lp=F.memo(Rp),zp=({open:e})=>{const{setSelectedNode:n,setTeachMe:r,showTeachMe:i}=Ge(d=>d),o=qe(),{setSidebarOpen:a}=$e(d=>d),{playingNode:l}=Hn(d=>d);return c.jsx(qr,{"data-testid":"sidebar-sub-view",direction:"right",in:e,style:{width:i?"700px":"",position:e?"relative":"absolute"},children:c.jsxs(Np,{children:[c.jsx(xo,{hidden:(o==null?void 0:o.ref_id)!==(l==null?void 0:l.ref_id)},l==null?void 0:l.ref_id),c.jsx(Yp,{children:c.jsx(Lp,{})}),c.jsx(Fp,{"data-testid":"close-sidebar-sub-view",onClick:()=>{n(null),r(!1)},children:c.jsx(dh,{})}),c.jsx(Bp,{onClick:()=>{a(!1)},children:c.jsx(ao,{})})]})})},Np=T(C)(({theme:e})=>({position:"relative",background:v.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),Fp=T(C)`
  font-size: 32px;
  color: ${v.white};
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 3px;

  &:hover {
    color: ${v.GRAY6};
  }

  &:active {
  }
`,Yp=T(C)`
  flex: 1 1 100%;
  border-radius: 16px;
  overflow: hidden;
`,Bp=T(C).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:v.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:v.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:v.BG1_HOVER},"&:active":{backgroundColor:v.BG1_PRESS,color:v.GRAY6}})),$p=()=>{const e=$e(n=>n.setSidebarOpen);return c.jsx(Hp,{onClick:()=>{e(!0)},children:c.jsx(fh,{})})},Hp=T(C).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:v.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:v.white,[e.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:v.BG1_HOVER},"&:active":{backgroundColor:v.BG1_PRESS,color:v.GRAY6}})),Wp=e=>c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 14 14",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M4.24488 9.94873L3.51732 12.8382C3.48633 12.976 3.4201 13.0844 3.31861 13.1635C3.21711 13.2425 3.09318 13.2821 2.94682 13.2821C2.75237 13.2821 2.59319 13.2046 2.46928 13.0497C2.34535 12.8948 2.31009 12.7244 2.36351 12.5385L3.01094 9.94873H0.635943C0.427609 9.94873 0.260144 9.86913 0.133547 9.70995C0.00694957 9.55077 -0.0296407 9.37129 0.023776 9.1715C0.0600955 9.02514 0.134609 8.90975 0.247318 8.82535C0.360026 8.74096 0.489568 8.69877 0.635943 8.69877H3.32344L4.1728 5.30131H1.7978C1.58946 5.30131 1.422 5.22172 1.2954 5.06254C1.1688 4.90336 1.13221 4.72388 1.18563 4.5241C1.22195 4.37773 1.29646 4.26234 1.40917 4.17795C1.52188 4.09355 1.65142 4.05135 1.7978 4.05135H4.4853L5.21286 1.16191C5.24383 1.02409 5.31007 0.915657 5.41157 0.836601C5.51305 0.757546 5.63698 0.718018 5.78336 0.718018C5.97779 0.718018 6.13697 0.795469 6.2609 0.950372C6.38483 1.10529 6.42009 1.27569 6.36667 1.46158L5.71923 4.05135H9.16476L9.89232 1.16191C9.9233 1.02409 9.98954 0.915657 10.091 0.836601C10.1925 0.757546 10.3165 0.718018 10.4628 0.718018C10.6573 0.718018 10.8164 0.795469 10.9404 0.950372C11.0643 1.10529 11.0995 1.27569 11.0461 1.46158L10.3987 4.05135H12.7737C12.982 4.05135 13.1495 4.13094 13.2761 4.29012C13.4027 4.4493 13.4393 4.62879 13.3859 4.82858C13.3495 4.97494 13.275 5.09032 13.1623 5.17473C13.0496 5.25911 12.9201 5.30131 12.7737 5.30131H10.0862L9.23684 8.69877H11.6118C11.8202 8.69877 11.9876 8.77836 12.1142 8.93754C12.2408 9.09672 12.2774 9.2762 12.224 9.47598C12.1877 9.62235 12.1132 9.73773 12.0005 9.82212C11.8878 9.90652 11.7582 9.94873 11.6118 9.94873H8.92434L8.19678 12.8382C8.1658 12.976 8.09957 13.0844 7.99807 13.1635C7.89658 13.2425 7.77265 13.2821 7.62628 13.2821C7.43185 13.2821 7.27267 13.2046 7.14874 13.0497C7.0248 12.8948 6.98955 12.7244 7.04296 12.5385L7.6904 9.94873H4.24488ZM4.55738 8.69877H8.0029L8.85226 5.30131H5.40673L4.55738 8.69877Z",fill:"currentColor"})}),Up=e=>c.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("mask",{id:"mask0_5099_7163",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"16",height:"16",children:c.jsx("rect",{x:"2",y:"2",width:"1em",height:"1em",fill:"currentColor"})}),c.jsx("g",{mask:"url(#mask0_5099_7163)",children:c.jsx("path",{d:"M10 16.6667C9.16667 16.6667 8.38611 16.5083 7.65833 16.1917C6.93056 15.875 6.29722 15.4472 5.75833 14.9083C5.21944 14.3695 4.79167 13.7361 4.475 13.0083C4.15833 12.2806 4 11.5 4 10.6667C4 10.4778 4.06389 10.3195 4.19167 10.1917C4.31944 10.0639 4.47778 10 4.66667 10C4.85556 10 5.01389 10.0639 5.14167 10.1917C5.26944 10.3195 5.33333 10.4778 5.33333 10.6667C5.33333 11.9667 5.78611 13.0695 6.69167 13.975C7.59722 14.8806 8.7 15.3333 10 15.3333C11.3 15.3333 12.4028 14.8806 13.3083 13.975C14.2139 13.0695 14.6667 11.9667 14.6667 10.6667C14.6667 9.36667 14.2139 8.2639 13.3083 7.35834C12.4028 6.45279 11.3 6.00001 10 6.00001H9.9L10.4667 6.56667C10.6 6.70001 10.6639 6.85556 10.6583 7.03334C10.6528 7.21112 10.5889 7.36667 10.4667 7.50001C10.3333 7.63334 10.175 7.70279 9.99167 7.70834C9.80833 7.7139 9.65 7.65001 9.51667 7.51667L7.8 5.80001C7.66667 5.66667 7.6 5.51112 7.6 5.33334C7.6 5.15556 7.66667 5.00001 7.8 4.86667L9.51667 3.15001C9.65 3.01667 9.80833 2.95279 9.99167 2.95834C10.175 2.9639 10.3333 3.03334 10.4667 3.16667C10.5889 3.30001 10.6528 3.45556 10.6583 3.63334C10.6639 3.81112 10.6 3.96667 10.4667 4.10001L9.9 4.66667H10C10.8333 4.66667 11.6139 4.82501 12.3417 5.14167C13.0694 5.45834 13.7028 5.88612 14.2417 6.42501C14.7806 6.9639 15.2083 7.59723 15.525 8.32501C15.8417 9.05279 16 9.83334 16 10.6667C16 11.5 15.8417 12.2806 15.525 13.0083C15.2083 13.7361 14.7806 14.3695 14.2417 14.9083C13.7028 15.4472 13.0694 15.875 12.3417 16.1917C11.6139 16.5083 10.8333 16.6667 10 16.6667Z",fill:"currentColor"})})]}),Vp=e=>c.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("mask",{id:"mask0_1259_28",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:c.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),c.jsx("g",{mask:"url(#mask0_1259_28)",children:c.jsx("path",{d:"M3 20.75L2.91345 19.4327L4.74998 17.6058V20.75H3ZM7.25003 20.75V15.1058L8.74998 13.6058V20.75H7.25003ZM11.25 20.75V13.6058L12.75 15.1308V20.75H11.25ZM15.25 20.75V15.1308L16.75 13.6308V20.75H15.25ZM19.25 20.75V11.1058L20.75 9.60583V20.75H19.25ZM3.25003 15.2192V13.1058L10 6.35581L14 10.3558L20.75 3.60583V5.71924L14 12.4692L10 8.46921L3.25003 15.2192Z",fill:"currentColor"})})]}),Gp=async()=>{const e="/get_trends";return await Ws.get(e)};function qp(e,n){const r=n||{};return(e[e.length-1]===""?[...e,""]:e).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const Zp=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Qp=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Xp={};function Ki(e,n){return((n||Xp).jsx?Qp:Zp).test(e)}const Jp=/[ \t\n\f\r]/g;function Kp(e){return typeof e=="object"?e.type==="text"?es(e.value):!1:es(e)}function es(e){return e.replace(Jp,"")===""}class on{constructor(n,r,i){this.property=n,this.normal=r,i&&(this.space=i)}}on.prototype.property={};on.prototype.normal={};on.prototype.space=null;function go(e,n){const r={},i={};let o=-1;for(;++o<e.length;)Object.assign(r,e[o].property),Object.assign(i,e[o].normal);return new on(r,i,n)}function Rr(e){return e.toLowerCase()}class Ze{constructor(n,r){this.property=n,this.attribute=r}}Ze.prototype.space=null;Ze.prototype.boolean=!1;Ze.prototype.booleanish=!1;Ze.prototype.overloadedBoolean=!1;Ze.prototype.number=!1;Ze.prototype.commaSeparated=!1;Ze.prototype.spaceSeparated=!1;Ze.prototype.commaOrSpaceSeparated=!1;Ze.prototype.mustUseProperty=!1;Ze.prototype.defined=!1;let e0=0;const te=Et(),Se=Et(),yo=Et(),z=Et(),de=Et(),Nt=Et(),Fe=Et();function Et(){return 2**++e0}const Lr=Object.freeze(Object.defineProperty({__proto__:null,boolean:te,booleanish:Se,commaOrSpaceSeparated:Fe,commaSeparated:Nt,number:z,overloadedBoolean:yo,spaceSeparated:de},Symbol.toStringTag,{value:"Module"})),br=Object.keys(Lr);class Zr extends Ze{constructor(n,r,i,o){let a=-1;if(super(n,r),ts(this,"space",o),typeof i=="number")for(;++a<br.length;){const l=br[a];ts(this,br[a],(i&Lr[l])===Lr[l])}}}Zr.prototype.defined=!0;function ts(e,n,r){r&&(e[n]=r)}const t0={}.hasOwnProperty;function Bt(e){const n={},r={};let i;for(i in e.properties)if(t0.call(e.properties,i)){const o=e.properties[i],a=new Zr(i,e.transform(e.attributes||{},i),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(a.mustUseProperty=!0),n[i]=a,r[Rr(i)]=i,r[Rr(a.attribute)]=i}return new on(n,r,e.space)}const wo=Bt({space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),ko=Bt({space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function bo(e,n){return n in e?e[n]:n}function _o(e,n){return bo(e,n.toLowerCase())}const So=Bt({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:_o,properties:{xmlns:null,xmlnsXLink:null}}),vo=Bt({transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Se,ariaAutoComplete:null,ariaBusy:Se,ariaChecked:Se,ariaColCount:z,ariaColIndex:z,ariaColSpan:z,ariaControls:de,ariaCurrent:null,ariaDescribedBy:de,ariaDetails:null,ariaDisabled:Se,ariaDropEffect:de,ariaErrorMessage:null,ariaExpanded:Se,ariaFlowTo:de,ariaGrabbed:Se,ariaHasPopup:null,ariaHidden:Se,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:de,ariaLevel:z,ariaLive:null,ariaModal:Se,ariaMultiLine:Se,ariaMultiSelectable:Se,ariaOrientation:null,ariaOwns:de,ariaPlaceholder:null,ariaPosInSet:z,ariaPressed:Se,ariaReadOnly:Se,ariaRelevant:null,ariaRequired:Se,ariaRoleDescription:de,ariaRowCount:z,ariaRowIndex:z,ariaRowSpan:z,ariaSelected:Se,ariaSetSize:z,ariaSort:null,ariaValueMax:z,ariaValueMin:z,ariaValueNow:z,ariaValueText:null,role:null}}),n0=Bt({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:_o,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Nt,acceptCharset:de,accessKey:de,action:null,allow:null,allowFullScreen:te,allowPaymentRequest:te,allowUserMedia:te,alt:null,as:null,async:te,autoCapitalize:null,autoComplete:de,autoFocus:te,autoPlay:te,blocking:de,capture:te,charSet:null,checked:te,cite:null,className:de,cols:z,colSpan:null,content:null,contentEditable:Se,controls:te,controlsList:de,coords:z|Nt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:te,defer:te,dir:null,dirName:null,disabled:te,download:yo,draggable:Se,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:te,formTarget:null,headers:de,height:z,hidden:te,high:z,href:null,hrefLang:null,htmlFor:de,httpEquiv:de,id:null,imageSizes:null,imageSrcSet:null,inert:te,inputMode:null,integrity:null,is:null,isMap:te,itemId:null,itemProp:de,itemRef:de,itemScope:te,itemType:de,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:te,low:z,manifest:null,max:null,maxLength:z,media:null,method:null,min:null,minLength:z,multiple:te,muted:te,name:null,nonce:null,noModule:te,noValidate:te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:te,optimum:z,pattern:null,ping:de,placeholder:null,playsInline:te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:te,referrerPolicy:null,rel:de,required:te,reversed:te,rows:z,rowSpan:z,sandbox:de,scope:null,scoped:te,seamless:te,selected:te,shadowRootDelegatesFocus:te,shadowRootMode:null,shape:null,size:z,sizes:null,slot:null,span:z,spellCheck:Se,src:null,srcDoc:null,srcLang:null,srcSet:null,start:z,step:null,style:null,tabIndex:z,target:null,title:null,translate:null,type:null,typeMustMatch:te,useMap:null,value:Se,width:z,wrap:null,align:null,aLink:null,archive:de,axis:null,background:null,bgColor:null,border:z,borderColor:null,bottomMargin:z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:te,declare:te,event:null,face:null,frame:null,frameBorder:null,hSpace:z,leftMargin:z,link:null,longDesc:null,lowSrc:null,marginHeight:z,marginWidth:z,noResize:te,noHref:te,noShade:te,noWrap:te,object:null,profile:null,prompt:null,rev:null,rightMargin:z,rules:null,scheme:null,scrolling:Se,standby:null,summary:null,text:null,topMargin:z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:te,disableRemotePlayback:te,prefix:null,property:null,results:z,security:null,unselectable:null}}),r0=Bt({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:bo,properties:{about:Fe,accentHeight:z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:z,amplitude:z,arabicForm:null,ascent:z,attributeName:null,attributeType:null,azimuth:z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:z,by:null,calcMode:null,capHeight:z,className:de,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:z,diffuseConstant:z,direction:null,display:null,dur:null,divisor:z,dominantBaseline:null,download:te,dx:null,dy:null,edgeMode:null,editable:null,elevation:z,enableBackground:null,end:null,event:null,exponent:z,externalResourcesRequired:null,fill:null,fillOpacity:z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Nt,g2:Nt,glyphName:Nt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:z,horizOriginX:z,horizOriginY:z,id:null,ideographic:z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:z,k:z,k1:z,k2:z,k3:z,k4:z,kernelMatrix:Fe,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:z,overlineThickness:z,paintOrder:null,panose1:null,path:null,pathLength:z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:de,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:z,pointsAtY:z,pointsAtZ:z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Fe,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Fe,rev:Fe,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Fe,requiredFeatures:Fe,requiredFonts:Fe,requiredFormats:Fe,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:z,specularExponent:z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:z,strikethroughThickness:z,string:null,stroke:null,strokeDashArray:Fe,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:z,strokeOpacity:z,strokeWidth:null,style:null,surfaceScale:z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Fe,tabIndex:z,tableValues:null,target:null,targetX:z,targetY:z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Fe,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:z,underlineThickness:z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:z,values:null,vAlphabetic:z,vMathematical:z,vectorEffect:null,vHanging:z,vIdeographic:z,version:null,vertAdvY:z,vertOriginX:z,vertOriginY:z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),i0=/^data[-\w.:]+$/i,ns=/-[a-z]/g,s0=/[A-Z]/g;function o0(e,n){const r=Rr(n);let i=n,o=Ze;if(r in e.normal)return e.property[e.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&i0.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace(ns,l0);i="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!ns.test(a)){let l=a.replace(s0,a0);l.charAt(0)!=="-"&&(l="-"+l),n="data"+l}}o=Zr}return new o(i,n)}function a0(e){return"-"+e.toLowerCase()}function l0(e){return e.charAt(1).toUpperCase()}const u0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},c0=go([ko,wo,So,vo,n0],"html"),Qr=go([ko,wo,So,vo,r0],"svg");function h0(e){return e.join(" ").trim()}var Co={},rs=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,d0=/\n/g,f0=/^\s*/,p0=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,m0=/^:\s*/,x0=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,g0=/^[;\s]*/,y0=/^\s+|\s+$/g,w0=`
`,is="/",ss="*",Mt="",k0="comment",b0="declaration",_0=function(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var r=1,i=1;function o(S){var M=S.match(d0);M&&(r+=M.length);var j=S.lastIndexOf(w0);i=~j?S.length-j:i+S.length}function a(){var S={line:r,column:i};return function(M){return M.position=new l(S),p(),M}}function l(S){this.start=S,this.end={line:r,column:i},this.source=n.source}l.prototype.content=e;function d(S){var M=new Error(n.source+":"+r+":"+i+": "+S);if(M.reason=S,M.filename=n.source,M.line=r,M.column=i,M.source=e,!n.silent)throw M}function m(S){var M=S.exec(e);if(M){var j=M[0];return o(j),e=e.slice(j.length),M}}function p(){m(f0)}function g(S){var M;for(S=S||[];M=y();)M!==!1&&S.push(M);return S}function y(){var S=a();if(!(is!=e.charAt(0)||ss!=e.charAt(1))){for(var M=2;Mt!=e.charAt(M)&&(ss!=e.charAt(M)||is!=e.charAt(M+1));)++M;if(M+=2,Mt===e.charAt(M-1))return d("End of comment missing");var j=e.slice(2,M-2);return i+=2,o(j),e=e.slice(M),i+=2,S({type:k0,comment:j})}}function w(){var S=a(),M=m(p0);if(M){if(y(),!m(m0))return d("property missing ':'");var j=m(x0),O=S({type:b0,property:os(M[0].replace(rs,Mt)),value:j?os(j[0].replace(rs,Mt)):Mt});return m(g0),O}}function x(){var S=[];g(S);for(var M;M=w();)M!==!1&&(S.push(M),g(S));return S}return p(),x()};function os(e){return e?e.replace(y0,Mt):Mt}var S0=Pr&&Pr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Co,"__esModule",{value:!0});var v0=S0(_0);function C0(e,n){var r=null;if(!e||typeof e!="string")return r;var i=(0,v0.default)(e),o=typeof n=="function";return i.forEach(function(a){if(a.type==="declaration"){var l=a.property,d=a.value;o?n(l,d,a):d&&(r=r||{},r[l]=d)}}),r}var as=Co.default=C0;const j0=as.default||as,jo=To("end"),Xr=To("start");function To(e){return n;function n(r){const i=r&&r.position&&r.position[e]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function T0(e){const n=Xr(e),r=jo(e);if(n&&r)return{start:n,end:r}}function en(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ls(e.position):"start"in e||"end"in e?ls(e):"line"in e||"column"in e?zr(e):""}function zr(e){return us(e&&e.line)+":"+us(e&&e.column)}function ls(e){return zr(e&&e.start)+"-"+zr(e&&e.end)}function us(e){return e&&typeof e=="number"?e:1}class Oe extends Error{constructor(n,r,i){super(),typeof r=="string"&&(i=r,r=void 0);let o="",a={},l=!1;if(r&&("line"in r&&"column"in r?a={place:r}:"start"in r&&"end"in r?a={place:r}:"type"in r?a={ancestors:[r],place:r.position}:a={...r}),typeof n=="string"?o=n:!a.cause&&n&&(l=!0,o=n.message,a.cause=n),!a.ruleId&&!a.source&&typeof i=="string"){const m=i.indexOf(":");m===-1?a.ruleId=i:(a.source=i.slice(0,m),a.ruleId=i.slice(m+1))}if(!a.place&&a.ancestors&&a.ancestors){const m=a.ancestors[a.ancestors.length-1];m&&(a.place=m.position)}const d=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=d?d.line:void 0,this.name=en(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=l&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual,this.expected,this.note,this.url}}Oe.prototype.file="";Oe.prototype.name="";Oe.prototype.reason="";Oe.prototype.message="";Oe.prototype.stack="";Oe.prototype.column=void 0;Oe.prototype.line=void 0;Oe.prototype.ancestors=void 0;Oe.prototype.cause=void 0;Oe.prototype.fatal=void 0;Oe.prototype.place=void 0;Oe.prototype.ruleId=void 0;Oe.prototype.source=void 0;const Jr={}.hasOwnProperty,M0=new Map,D0=/[A-Z]/g,E0=/-([a-z])/g,O0=new Set(["table","tbody","thead","tfoot","tr"]),P0=new Set(["td","th"]),Mo="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function I0(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=n.filePath||void 0;let i;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=B0(r,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=Y0(r,n.jsx,n.jsxs)}const o={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:i,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Qr:c0,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},a=Do(o,e,void 0);return a&&typeof a!="string"?a:o.create(e,o.Fragment,{children:a||void 0},void 0)}function Do(e,n,r){if(n.type==="element")return A0(e,n,r);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return R0(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return z0(e,n,r);if(n.type==="mdxjsEsm")return L0(e,n);if(n.type==="root")return N0(e,n,r);if(n.type==="text")return F0(e,n)}function A0(e,n,r){const i=e.schema;let o=i;n.tagName.toLowerCase()==="svg"&&i.space==="html"&&(o=Qr,e.schema=o),e.ancestors.push(n);const a=Oo(e,n.tagName,!1),l=$0(e,n);let d=ei(e,n);return O0.has(n.tagName)&&(d=d.filter(function(m){return typeof m=="string"?!Kp(m):!0})),Eo(e,l,a,n),Kr(l,d),e.ancestors.pop(),e.schema=i,e.create(n,a,l,r)}function R0(e,n){if(n.data&&n.data.estree&&e.evaluater){const i=n.data.estree.body[0];return i.type,e.evaluater.evaluateExpression(i.expression)}sn(e,n.position)}function L0(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);sn(e,n.position)}function z0(e,n,r){const i=e.schema;let o=i;n.name==="svg"&&i.space==="html"&&(o=Qr,e.schema=o),e.ancestors.push(n);const a=n.name===null?e.Fragment:Oo(e,n.name,!0),l=H0(e,n),d=ei(e,n);return Eo(e,l,a,n),Kr(l,d),e.ancestors.pop(),e.schema=i,e.create(n,a,l,r)}function N0(e,n,r){const i={};return Kr(i,ei(e,n)),e.create(n,e.Fragment,i,r)}function F0(e,n){return n.value}function Eo(e,n,r,i){typeof r!="string"&&r!==e.Fragment&&e.passNode&&(n.node=i)}function Kr(e,n){if(n.length>0){const r=n.length>1?n:n[0];r&&(e.children=r)}}function Y0(e,n,r){return i;function i(o,a,l,d){const p=Array.isArray(l.children)?r:n;return d?p(a,l,d):p(a,l)}}function B0(e,n){return r;function r(i,o,a,l){const d=Array.isArray(a.children),m=Xr(i);return n(o,a,l,d,{columnNumber:m?m.column-1:void 0,fileName:e,lineNumber:m?m.line:void 0},void 0)}}function $0(e,n){const r={};let i,o;for(o in n.properties)if(o!=="children"&&Jr.call(n.properties,o)){const a=W0(e,o,n.properties[o]);if(a){const[l,d]=a;e.tableCellAlignToStyle&&l==="align"&&typeof d=="string"&&P0.has(n.tagName)?i=d:r[l]=d}}if(i){const a=r.style||(r.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return r}function H0(e,n){const r={};for(const i of n.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&e.evaluater){const a=i.data.estree.body[0];a.type;const l=a.expression;l.type;const d=l.properties[0];d.type,Object.assign(r,e.evaluater.evaluateExpression(d.argument))}else sn(e,n.position);else{const o=i.name;let a;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&e.evaluater){const d=i.value.data.estree.body[0];d.type,a=e.evaluater.evaluateExpression(d.expression)}else sn(e,n.position);else a=i.value===null?!0:i.value;r[o]=a}return r}function ei(e,n){const r=[];let i=-1;const o=e.passKeys?new Map:M0;for(;++i<n.children.length;){const a=n.children[i];let l;if(e.passKeys){const m=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(m){const p=o.get(m)||0;l=m+"-"+p,o.set(m,p+1)}}const d=Do(e,a,l);d!==void 0&&r.push(d)}return r}function W0(e,n,r){const i=o0(e.schema,n);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=i.commaSeparated?qp(r):h0(r)),i.property==="style"){let o=typeof r=="object"?r:U0(e,String(r));return e.stylePropertyNameCase==="css"&&(o=V0(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&i.space?u0[i.property]||i.property:i.attribute,r]}}function U0(e,n){const r={};try{j0(n,i)}catch(o){if(!e.ignoreInvalidStyle){const a=o,l=new Oe("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=Mo+"#cannot-parse-style-attribute",l}}return r;function i(o,a){let l=o;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(E0,q0)),r[l]=a}}function Oo(e,n,r){let i;if(!r)i={type:"Literal",value:n};else if(n.includes(".")){const o=n.split(".");let a=-1,l;for(;++a<o.length;){const d=Ki(o[a])?{type:"Identifier",name:o[a]}:{type:"Literal",value:o[a]};l=l?{type:"MemberExpression",object:l,property:d,computed:!!(a&&d.type==="Literal"),optional:!1}:d}i=l}else i=Ki(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(i.type==="Literal"){const o=i.value;return Jr.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(i);sn(e)}function sn(e,n){const r=new Oe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=Mo+"#cannot-handle-mdx-estrees-without-createevaluater",r}function V0(e){const n={};let r;for(r in e)Jr.call(e,r)&&(n[G0(r)]=e[r]);return n}function G0(e){let n=e.replace(D0,Z0);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function q0(e,n){return n.toUpperCase()}function Z0(e){return"-"+e.toLowerCase()}const _r={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Q0={};function X0(e,n){const r=n||Q0,i=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,o=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return Po(e,i,o)}function Po(e,n,r){if(J0(e)){if("value"in e)return e.type==="html"&&!r?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return cs(e.children,n,r)}return Array.isArray(e)?cs(e,n,r):""}function cs(e,n,r){const i=[];let o=-1;for(;++o<e.length;)i[o]=Po(e[o],n,r);return i.join("")}function J0(e){return!!(e&&typeof e=="object")}const hs=document.createElement("i");function ti(e){const n="&"+e+";";hs.innerHTML=n;const r=hs.textContent;return r.charCodeAt(r.length-1)===59&&e!=="semi"||r===n?!1:r}function nt(e,n,r,i){const o=e.length;let a=0,l;if(n<0?n=-n>o?0:o+n:n=n>o?o:n,r=r>0?r:0,i.length<1e4)l=Array.from(i),l.unshift(n,r),e.splice(...l);else for(r&&e.splice(n,r);a<i.length;)l=i.slice(a,a+1e4),l.unshift(n,0),e.splice(...l),a+=1e4,n+=1e4}function Ve(e,n){return e.length>0?(nt(e,e.length,0,n),e):n}const ds={}.hasOwnProperty;function K0(e){const n={};let r=-1;for(;++r<e.length;)e1(n,e[r]);return n}function e1(e,n){let r;for(r in n){const o=(ds.call(e,r)?e[r]:void 0)||(e[r]={}),a=n[r];let l;if(a)for(l in a){ds.call(o,l)||(o[l]=[]);const d=a[l];t1(o[l],Array.isArray(d)?d:d?[d]:[])}}}function t1(e,n){let r=-1;const i=[];for(;++r<n.length;)(n[r].add==="after"?e:i).push(n[r]);nt(e,0,0,i)}function Io(e,n){const r=Number.parseInt(e,n);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function Ft(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const n1=bt(/\p{P}/u),tt=bt(/[A-Za-z]/),Ye=bt(/[\dA-Za-z]/),r1=bt(/[#-'*+\--9=?A-Z^-~]/);function Nr(e){return e!==null&&(e<32||e===127)}const Fr=bt(/\d/),i1=bt(/[\dA-Fa-f]/),Ao=bt(/[!-/:-@[-`{-~]/);function K(e){return e!==null&&e<-2}function Le(e){return e!==null&&(e<0||e===32)}function ue(e){return e===-2||e===-1||e===32}function s1(e){return Ao(e)||n1(e)}const o1=bt(/\s/);function bt(e){return n;function n(r){return r!==null&&r>-1&&e.test(String.fromCharCode(r))}}function $t(e){const n=[];let r=-1,i=0,o=0;for(;++r<e.length;){const a=e.charCodeAt(r);let l="";if(a===37&&Ye(e.charCodeAt(r+1))&&Ye(e.charCodeAt(r+2)))o=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(l=String.fromCharCode(a));else if(a>55295&&a<57344){const d=e.charCodeAt(r+1);a<56320&&d>56319&&d<57344?(l=String.fromCharCode(a,d),o=1):l="�"}else l=String.fromCharCode(a);l&&(n.push(e.slice(i,r),encodeURIComponent(l)),i=r+o+1,l=""),o&&(r+=o,o=0)}return n.join("")+e.slice(i)}function fe(e,n,r,i){const o=i?i-1:Number.POSITIVE_INFINITY;let a=0;return l;function l(m){return ue(m)?(e.enter(r),d(m)):n(m)}function d(m){return ue(m)&&a++<o?(e.consume(m),d):(e.exit(r),n(m))}}const a1={tokenize:l1};function l1(e){const n=e.attempt(this.parser.constructs.contentInitial,i,o);let r;return n;function i(d){if(d===null){e.consume(d);return}return e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),fe(e,n,"linePrefix")}function o(d){return e.enter("paragraph"),a(d)}function a(d){const m=e.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=m),r=m,l(d)}function l(d){if(d===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(d);return}return K(d)?(e.consume(d),e.exit("chunkText"),a):(e.consume(d),l)}}const u1={tokenize:c1},fs={tokenize:h1};function c1(e){const n=this,r=[];let i=0,o,a,l;return d;function d(A){if(i<r.length){const W=r[i];return n.containerState=W[1],e.attempt(W[0].continuation,m,p)(A)}return p(A)}function m(A){if(i++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,o&&P();const W=n.events.length;let U=W,I;for(;U--;)if(n.events[U][0]==="exit"&&n.events[U][1].type==="chunkFlow"){I=n.events[U][1].end;break}O(i);let Z=W;for(;Z<n.events.length;)n.events[Z][1].end=Object.assign({},I),Z++;return nt(n.events,U+1,0,n.events.slice(W)),n.events.length=Z,p(A)}return d(A)}function p(A){if(i===r.length){if(!o)return w(A);if(o.currentConstruct&&o.currentConstruct.concrete)return S(A);n.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(fs,g,y)(A)}function g(A){return o&&P(),O(i),w(A)}function y(A){return n.parser.lazy[n.now().line]=i!==r.length,l=n.now().offset,S(A)}function w(A){return n.containerState={},e.attempt(fs,x,S)(A)}function x(A){return i++,r.push([n.currentConstruct,n.containerState]),w(A)}function S(A){if(A===null){o&&P(),O(0),e.consume(A);return}return o=o||n.parser.flow(n.now()),e.enter("chunkFlow",{contentType:"flow",previous:a,_tokenizer:o}),M(A)}function M(A){if(A===null){j(e.exit("chunkFlow"),!0),O(0),e.consume(A);return}return K(A)?(e.consume(A),j(e.exit("chunkFlow")),i=0,n.interrupt=void 0,d):(e.consume(A),M)}function j(A,W){const U=n.sliceStream(A);if(W&&U.push(null),A.previous=a,a&&(a.next=A),a=A,o.defineSkip(A.start),o.write(U),n.parser.lazy[A.start.line]){let I=o.events.length;for(;I--;)if(o.events[I][1].start.offset<l&&(!o.events[I][1].end||o.events[I][1].end.offset>l))return;const Z=n.events.length;let ee=Z,re,G;for(;ee--;)if(n.events[ee][0]==="exit"&&n.events[ee][1].type==="chunkFlow"){if(re){G=n.events[ee][1].end;break}re=!0}for(O(i),I=Z;I<n.events.length;)n.events[I][1].end=Object.assign({},G),I++;nt(n.events,ee+1,0,n.events.slice(Z)),n.events.length=I}}function O(A){let W=r.length;for(;W-- >A;){const U=r[W];n.containerState=U[1],U[0].exit.call(n,e)}r.length=A}function P(){o.write([null]),a=void 0,o=void 0,n.containerState._closeFlow=void 0}}function h1(e,n,r){return fe(e,e.attempt(this.parser.constructs.document,n,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ps(e){if(e===null||Le(e)||o1(e))return 1;if(s1(e))return 2}function ni(e,n,r){const i=[];let o=-1;for(;++o<e.length;){const a=e[o].resolveAll;a&&!i.includes(a)&&(n=a(n,r),i.push(a))}return n}const Yr={name:"attention",tokenize:f1,resolveAll:d1};function d1(e,n){let r=-1,i,o,a,l,d,m,p,g;for(;++r<e.length;)if(e[r][0]==="enter"&&e[r][1].type==="attentionSequence"&&e[r][1]._close){for(i=r;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&n.sliceSerialize(e[i][1]).charCodeAt(0)===n.sliceSerialize(e[r][1]).charCodeAt(0)){if((e[i][1]._close||e[r][1]._open)&&(e[r][1].end.offset-e[r][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[r][1].end.offset-e[r][1].start.offset)%3))continue;m=e[i][1].end.offset-e[i][1].start.offset>1&&e[r][1].end.offset-e[r][1].start.offset>1?2:1;const y=Object.assign({},e[i][1].end),w=Object.assign({},e[r][1].start);ms(y,-m),ms(w,m),l={type:m>1?"strongSequence":"emphasisSequence",start:y,end:Object.assign({},e[i][1].end)},d={type:m>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[r][1].start),end:w},a={type:m>1?"strongText":"emphasisText",start:Object.assign({},e[i][1].end),end:Object.assign({},e[r][1].start)},o={type:m>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},d.end)},e[i][1].end=Object.assign({},l.start),e[r][1].start=Object.assign({},d.end),p=[],e[i][1].end.offset-e[i][1].start.offset&&(p=Ve(p,[["enter",e[i][1],n],["exit",e[i][1],n]])),p=Ve(p,[["enter",o,n],["enter",l,n],["exit",l,n],["enter",a,n]]),p=Ve(p,ni(n.parser.constructs.insideSpan.null,e.slice(i+1,r),n)),p=Ve(p,[["exit",a,n],["enter",d,n],["exit",d,n],["exit",o,n]]),e[r][1].end.offset-e[r][1].start.offset?(g=2,p=Ve(p,[["enter",e[r][1],n],["exit",e[r][1],n]])):g=0,nt(e,i-1,r-i+3,p),r=i+p.length-g-2;break}}for(r=-1;++r<e.length;)e[r][1].type==="attentionSequence"&&(e[r][1].type="data");return e}function f1(e,n){const r=this.parser.constructs.attentionMarkers.null,i=this.previous,o=ps(i);let a;return l;function l(m){return a=m,e.enter("attentionSequence"),d(m)}function d(m){if(m===a)return e.consume(m),d;const p=e.exit("attentionSequence"),g=ps(m),y=!g||g===2&&o||r.includes(m),w=!o||o===2&&g||r.includes(i);return p._open=!!(a===42?y:y&&(o||!w)),p._close=!!(a===42?w:w&&(g||!y)),n(m)}}function ms(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const p1={name:"autolink",tokenize:m1};function m1(e,n,r){let i=0;return o;function o(x){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(x),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(x){return tt(x)?(e.consume(x),l):p(x)}function l(x){return x===43||x===45||x===46||Ye(x)?(i=1,d(x)):p(x)}function d(x){return x===58?(e.consume(x),i=0,m):(x===43||x===45||x===46||Ye(x))&&i++<32?(e.consume(x),d):(i=0,p(x))}function m(x){return x===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(x),e.exit("autolinkMarker"),e.exit("autolink"),n):x===null||x===32||x===60||Nr(x)?r(x):(e.consume(x),m)}function p(x){return x===64?(e.consume(x),g):r1(x)?(e.consume(x),p):r(x)}function g(x){return Ye(x)?y(x):r(x)}function y(x){return x===46?(e.consume(x),i=0,g):x===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(x),e.exit("autolinkMarker"),e.exit("autolink"),n):w(x)}function w(x){if((x===45||Ye(x))&&i++<63){const S=x===45?w:y;return e.consume(x),S}return r(x)}}const Vn={tokenize:x1,partial:!0};function x1(e,n,r){return i;function i(a){return ue(a)?fe(e,o,"linePrefix")(a):o(a)}function o(a){return a===null||K(a)?n(a):r(a)}}const Ro={name:"blockQuote",tokenize:g1,continuation:{tokenize:y1},exit:w1};function g1(e,n,r){const i=this;return o;function o(l){if(l===62){const d=i.containerState;return d.open||(e.enter("blockQuote",{_container:!0}),d.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),a}return r(l)}function a(l){return ue(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(l))}}function y1(e,n,r){const i=this;return o;function o(l){return ue(l)?fe(e,a,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):a(l)}function a(l){return e.attempt(Ro,n,r)(l)}}function w1(e){e.exit("blockQuote")}const Lo={name:"characterEscape",tokenize:k1};function k1(e,n,r){return i;function i(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),o}function o(a){return Ao(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):r(a)}}const zo={name:"characterReference",tokenize:b1};function b1(e,n,r){const i=this;let o=0,a,l;return d;function d(y){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(y),e.exit("characterReferenceMarker"),m}function m(y){return y===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(y),e.exit("characterReferenceMarkerNumeric"),p):(e.enter("characterReferenceValue"),a=31,l=Ye,g(y))}function p(y){return y===88||y===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(y),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,l=i1,g):(e.enter("characterReferenceValue"),a=7,l=Fr,g(y))}function g(y){if(y===59&&o){const w=e.exit("characterReferenceValue");return l===Ye&&!ti(i.sliceSerialize(w))?r(y):(e.enter("characterReferenceMarker"),e.consume(y),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return l(y)&&o++<a?(e.consume(y),g):r(y)}}const xs={tokenize:S1,partial:!0},gs={name:"codeFenced",tokenize:_1,concrete:!0};function _1(e,n,r){const i=this,o={tokenize:U,partial:!0};let a=0,l=0,d;return m;function m(I){return p(I)}function p(I){const Z=i.events[i.events.length-1];return a=Z&&Z[1].type==="linePrefix"?Z[2].sliceSerialize(Z[1],!0).length:0,d=I,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),g(I)}function g(I){return I===d?(l++,e.consume(I),g):l<3?r(I):(e.exit("codeFencedFenceSequence"),ue(I)?fe(e,y,"whitespace")(I):y(I))}function y(I){return I===null||K(I)?(e.exit("codeFencedFence"),i.interrupt?n(I):e.check(xs,M,W)(I)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),w(I))}function w(I){return I===null||K(I)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),y(I)):ue(I)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),fe(e,x,"whitespace")(I)):I===96&&I===d?r(I):(e.consume(I),w)}function x(I){return I===null||K(I)?y(I):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),S(I))}function S(I){return I===null||K(I)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),y(I)):I===96&&I===d?r(I):(e.consume(I),S)}function M(I){return e.attempt(o,W,j)(I)}function j(I){return e.enter("lineEnding"),e.consume(I),e.exit("lineEnding"),O}function O(I){return a>0&&ue(I)?fe(e,P,"linePrefix",a+1)(I):P(I)}function P(I){return I===null||K(I)?e.check(xs,M,W)(I):(e.enter("codeFlowValue"),A(I))}function A(I){return I===null||K(I)?(e.exit("codeFlowValue"),P(I)):(e.consume(I),A)}function W(I){return e.exit("codeFenced"),n(I)}function U(I,Z,ee){let re=0;return G;function G(V){return I.enter("lineEnding"),I.consume(V),I.exit("lineEnding"),R}function R(V){return I.enter("codeFencedFence"),ue(V)?fe(I,N,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(V):N(V)}function N(V){return V===d?(I.enter("codeFencedFenceSequence"),Q(V)):ee(V)}function Q(V){return V===d?(re++,I.consume(V),Q):re>=l?(I.exit("codeFencedFenceSequence"),ue(V)?fe(I,se,"whitespace")(V):se(V)):ee(V)}function se(V){return V===null||K(V)?(I.exit("codeFencedFence"),Z(V)):ee(V)}}}function S1(e,n,r){const i=this;return o;function o(l){return l===null?r(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),a)}function a(l){return i.parser.lazy[i.now().line]?r(l):n(l)}}const Sr={name:"codeIndented",tokenize:C1},v1={tokenize:j1,partial:!0};function C1(e,n,r){const i=this;return o;function o(p){return e.enter("codeIndented"),fe(e,a,"linePrefix",4+1)(p)}function a(p){const g=i.events[i.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?l(p):r(p)}function l(p){return p===null?m(p):K(p)?e.attempt(v1,l,m)(p):(e.enter("codeFlowValue"),d(p))}function d(p){return p===null||K(p)?(e.exit("codeFlowValue"),l(p)):(e.consume(p),d)}function m(p){return e.exit("codeIndented"),n(p)}}function j1(e,n,r){const i=this;return o;function o(l){return i.parser.lazy[i.now().line]?r(l):K(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):fe(e,a,"linePrefix",4+1)(l)}function a(l){const d=i.events[i.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?n(l):K(l)?o(l):r(l)}}const T1={name:"codeText",tokenize:E1,resolve:M1,previous:D1};function M1(e){let n=e.length-4,r=3,i,o;if((e[r][1].type==="lineEnding"||e[r][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(i=r;++i<n;)if(e[i][1].type==="codeTextData"){e[r][1].type="codeTextPadding",e[n][1].type="codeTextPadding",r+=2,n-=2;break}}for(i=r-1,n++;++i<=n;)o===void 0?i!==n&&e[i][1].type!=="lineEnding"&&(o=i):(i===n||e[i][1].type==="lineEnding")&&(e[o][1].type="codeTextData",i!==o+2&&(e[o][1].end=e[i-1][1].end,e.splice(o+2,i-o-2),n-=i-o-2,i=o+2),o=void 0);return e}function D1(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function E1(e,n,r){let i=0,o,a;return l;function l(y){return e.enter("codeText"),e.enter("codeTextSequence"),d(y)}function d(y){return y===96?(e.consume(y),i++,d):(e.exit("codeTextSequence"),m(y))}function m(y){return y===null?r(y):y===32?(e.enter("space"),e.consume(y),e.exit("space"),m):y===96?(a=e.enter("codeTextSequence"),o=0,g(y)):K(y)?(e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),m):(e.enter("codeTextData"),p(y))}function p(y){return y===null||y===32||y===96||K(y)?(e.exit("codeTextData"),m(y)):(e.consume(y),p)}function g(y){return y===96?(e.consume(y),o++,g):o===i?(e.exit("codeTextSequence"),e.exit("codeText"),n(y)):(a.type="codeTextData",p(y))}}function No(e){const n={};let r=-1,i,o,a,l,d,m,p;for(;++r<e.length;){for(;r in n;)r=n[r];if(i=e[r],r&&i[1].type==="chunkFlow"&&e[r-1][1].type==="listItemPrefix"&&(m=i[1]._tokenizer.events,a=0,a<m.length&&m[a][1].type==="lineEndingBlank"&&(a+=2),a<m.length&&m[a][1].type==="content"))for(;++a<m.length&&m[a][1].type!=="content";)m[a][1].type==="chunkText"&&(m[a][1]._isInFirstContentOfListItem=!0,a++);if(i[0]==="enter")i[1].contentType&&(Object.assign(n,O1(e,r)),r=n[r],p=!0);else if(i[1]._container){for(a=r,o=void 0;a--&&(l=e[a],l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(o&&(e[o][1].type="lineEndingBlank"),l[1].type="lineEnding",o=a);o&&(i[1].end=Object.assign({},e[o][1].start),d=e.slice(o,r),d.unshift(i),nt(e,o,r-o+1,d))}}return!p}function O1(e,n){const r=e[n][1],i=e[n][2];let o=n-1;const a=[],l=r._tokenizer||i.parser[r.contentType](r.start),d=l.events,m=[],p={};let g,y,w=-1,x=r,S=0,M=0;const j=[M];for(;x;){for(;e[++o][1]!==x;);a.push(o),x._tokenizer||(g=i.sliceStream(x),x.next||g.push(null),y&&l.defineSkip(x.start),x._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(g),x._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),y=x,x=x.next}for(x=r;++w<d.length;)d[w][0]==="exit"&&d[w-1][0]==="enter"&&d[w][1].type===d[w-1][1].type&&d[w][1].start.line!==d[w][1].end.line&&(M=w+1,j.push(M),x._tokenizer=void 0,x.previous=void 0,x=x.next);for(l.events=[],x?(x._tokenizer=void 0,x.previous=void 0):j.pop(),w=j.length;w--;){const O=d.slice(j[w],j[w+1]),P=a.pop();m.unshift([P,P+O.length-1]),nt(e,P,2,O)}for(w=-1;++w<m.length;)p[S+m[w][0]]=S+m[w][1],S+=m[w][1]-m[w][0]-1;return p}const P1={tokenize:R1,resolve:A1},I1={tokenize:L1,partial:!0};function A1(e){return No(e),e}function R1(e,n){let r;return i;function i(d){return e.enter("content"),r=e.enter("chunkContent",{contentType:"content"}),o(d)}function o(d){return d===null?a(d):K(d)?e.check(I1,l,a)(d):(e.consume(d),o)}function a(d){return e.exit("chunkContent"),e.exit("content"),n(d)}function l(d){return e.consume(d),e.exit("chunkContent"),r.next=e.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,o}}function L1(e,n,r){const i=this;return o;function o(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),fe(e,a,"linePrefix")}function a(l){if(l===null||K(l))return r(l);const d=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?n(l):e.interrupt(i.parser.constructs.flow,r,n)(l)}}function Fo(e,n,r,i,o,a,l,d,m){const p=m||Number.POSITIVE_INFINITY;let g=0;return y;function y(O){return O===60?(e.enter(i),e.enter(o),e.enter(a),e.consume(O),e.exit(a),w):O===null||O===32||O===41||Nr(O)?r(O):(e.enter(i),e.enter(l),e.enter(d),e.enter("chunkString",{contentType:"string"}),M(O))}function w(O){return O===62?(e.enter(a),e.consume(O),e.exit(a),e.exit(o),e.exit(i),n):(e.enter(d),e.enter("chunkString",{contentType:"string"}),x(O))}function x(O){return O===62?(e.exit("chunkString"),e.exit(d),w(O)):O===null||O===60||K(O)?r(O):(e.consume(O),O===92?S:x)}function S(O){return O===60||O===62||O===92?(e.consume(O),x):x(O)}function M(O){return!g&&(O===null||O===41||Le(O))?(e.exit("chunkString"),e.exit(d),e.exit(l),e.exit(i),n(O)):g<p&&O===40?(e.consume(O),g++,M):O===41?(e.consume(O),g--,M):O===null||O===32||O===40||Nr(O)?r(O):(e.consume(O),O===92?j:M)}function j(O){return O===40||O===41||O===92?(e.consume(O),M):M(O)}}function Yo(e,n,r,i,o,a){const l=this;let d=0,m;return p;function p(x){return e.enter(i),e.enter(o),e.consume(x),e.exit(o),e.enter(a),g}function g(x){return d>999||x===null||x===91||x===93&&!m||x===94&&!d&&"_hiddenFootnoteSupport"in l.parser.constructs?r(x):x===93?(e.exit(a),e.enter(o),e.consume(x),e.exit(o),e.exit(i),n):K(x)?(e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),g):(e.enter("chunkString",{contentType:"string"}),y(x))}function y(x){return x===null||x===91||x===93||K(x)||d++>999?(e.exit("chunkString"),g(x)):(e.consume(x),m||(m=!ue(x)),x===92?w:y)}function w(x){return x===91||x===92||x===93?(e.consume(x),d++,y):y(x)}}function Bo(e,n,r,i,o,a){let l;return d;function d(w){return w===34||w===39||w===40?(e.enter(i),e.enter(o),e.consume(w),e.exit(o),l=w===40?41:w,m):r(w)}function m(w){return w===l?(e.enter(o),e.consume(w),e.exit(o),e.exit(i),n):(e.enter(a),p(w))}function p(w){return w===l?(e.exit(a),m(l)):w===null?r(w):K(w)?(e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),fe(e,p,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),g(w))}function g(w){return w===l||w===null||K(w)?(e.exit("chunkString"),p(w)):(e.consume(w),w===92?y:g)}function y(w){return w===l||w===92?(e.consume(w),g):g(w)}}function tn(e,n){let r;return i;function i(o){return K(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r=!0,i):ue(o)?fe(e,i,r?"linePrefix":"lineSuffix")(o):n(o)}}const z1={name:"definition",tokenize:F1},N1={tokenize:Y1,partial:!0};function F1(e,n,r){const i=this;let o;return a;function a(x){return e.enter("definition"),l(x)}function l(x){return Yo.call(i,e,d,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(x)}function d(x){return o=Ft(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),x===58?(e.enter("definitionMarker"),e.consume(x),e.exit("definitionMarker"),m):r(x)}function m(x){return Le(x)?tn(e,p)(x):p(x)}function p(x){return Fo(e,g,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(x)}function g(x){return e.attempt(N1,y,y)(x)}function y(x){return ue(x)?fe(e,w,"whitespace")(x):w(x)}function w(x){return x===null||K(x)?(e.exit("definition"),i.parser.defined.push(o),n(x)):r(x)}}function Y1(e,n,r){return i;function i(d){return Le(d)?tn(e,o)(d):r(d)}function o(d){return Bo(e,a,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function a(d){return ue(d)?fe(e,l,"whitespace")(d):l(d)}function l(d){return d===null||K(d)?n(d):r(d)}}const B1={name:"hardBreakEscape",tokenize:$1};function $1(e,n,r){return i;function i(a){return e.enter("hardBreakEscape"),e.consume(a),o}function o(a){return K(a)?(e.exit("hardBreakEscape"),n(a)):r(a)}}const H1={name:"headingAtx",tokenize:U1,resolve:W1};function W1(e,n){let r=e.length-2,i=3,o,a;return e[i][1].type==="whitespace"&&(i+=2),r-2>i&&e[r][1].type==="whitespace"&&(r-=2),e[r][1].type==="atxHeadingSequence"&&(i===r-1||r-4>i&&e[r-2][1].type==="whitespace")&&(r-=i+1===r?2:4),r>i&&(o={type:"atxHeadingText",start:e[i][1].start,end:e[r][1].end},a={type:"chunkText",start:e[i][1].start,end:e[r][1].end,contentType:"text"},nt(e,i,r-i+1,[["enter",o,n],["enter",a,n],["exit",a,n],["exit",o,n]])),e}function U1(e,n,r){let i=0;return o;function o(g){return e.enter("atxHeading"),a(g)}function a(g){return e.enter("atxHeadingSequence"),l(g)}function l(g){return g===35&&i++<6?(e.consume(g),l):g===null||Le(g)?(e.exit("atxHeadingSequence"),d(g)):r(g)}function d(g){return g===35?(e.enter("atxHeadingSequence"),m(g)):g===null||K(g)?(e.exit("atxHeading"),n(g)):ue(g)?fe(e,d,"whitespace")(g):(e.enter("atxHeadingText"),p(g))}function m(g){return g===35?(e.consume(g),m):(e.exit("atxHeadingSequence"),d(g))}function p(g){return g===null||g===35||Le(g)?(e.exit("atxHeadingText"),d(g)):(e.consume(g),p)}}const V1=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],ys=["pre","script","style","textarea"],G1={name:"htmlFlow",tokenize:X1,resolveTo:Q1,concrete:!0},q1={tokenize:K1,partial:!0},Z1={tokenize:J1,partial:!0};function Q1(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function X1(e,n,r){const i=this;let o,a,l,d,m;return p;function p(k){return g(k)}function g(k){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(k),y}function y(k){return k===33?(e.consume(k),w):k===47?(e.consume(k),a=!0,M):k===63?(e.consume(k),o=3,i.interrupt?n:b):tt(k)?(e.consume(k),l=String.fromCharCode(k),j):r(k)}function w(k){return k===45?(e.consume(k),o=2,x):k===91?(e.consume(k),o=5,d=0,S):tt(k)?(e.consume(k),o=4,i.interrupt?n:b):r(k)}function x(k){return k===45?(e.consume(k),i.interrupt?n:b):r(k)}function S(k){const ie="CDATA[";return k===ie.charCodeAt(d++)?(e.consume(k),d===ie.length?i.interrupt?n:N:S):r(k)}function M(k){return tt(k)?(e.consume(k),l=String.fromCharCode(k),j):r(k)}function j(k){if(k===null||k===47||k===62||Le(k)){const ie=k===47,B=l.toLowerCase();return!ie&&!a&&ys.includes(B)?(o=1,i.interrupt?n(k):N(k)):V1.includes(l.toLowerCase())?(o=6,ie?(e.consume(k),O):i.interrupt?n(k):N(k)):(o=7,i.interrupt&&!i.parser.lazy[i.now().line]?r(k):a?P(k):A(k))}return k===45||Ye(k)?(e.consume(k),l+=String.fromCharCode(k),j):r(k)}function O(k){return k===62?(e.consume(k),i.interrupt?n:N):r(k)}function P(k){return ue(k)?(e.consume(k),P):G(k)}function A(k){return k===47?(e.consume(k),G):k===58||k===95||tt(k)?(e.consume(k),W):ue(k)?(e.consume(k),A):G(k)}function W(k){return k===45||k===46||k===58||k===95||Ye(k)?(e.consume(k),W):U(k)}function U(k){return k===61?(e.consume(k),I):ue(k)?(e.consume(k),U):A(k)}function I(k){return k===null||k===60||k===61||k===62||k===96?r(k):k===34||k===39?(e.consume(k),m=k,Z):ue(k)?(e.consume(k),I):ee(k)}function Z(k){return k===m?(e.consume(k),m=null,re):k===null||K(k)?r(k):(e.consume(k),Z)}function ee(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||Le(k)?U(k):(e.consume(k),ee)}function re(k){return k===47||k===62||ue(k)?A(k):r(k)}function G(k){return k===62?(e.consume(k),R):r(k)}function R(k){return k===null||K(k)?N(k):ue(k)?(e.consume(k),R):r(k)}function N(k){return k===45&&o===2?(e.consume(k),ae):k===60&&o===1?(e.consume(k),pe):k===62&&o===4?(e.consume(k),we):k===63&&o===3?(e.consume(k),b):k===93&&o===5?(e.consume(k),ze):K(k)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(q1,Me,Q)(k)):k===null||K(k)?(e.exit("htmlFlowData"),Q(k)):(e.consume(k),N)}function Q(k){return e.check(Z1,se,Me)(k)}function se(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),V}function V(k){return k===null||K(k)?Q(k):(e.enter("htmlFlowData"),N(k))}function ae(k){return k===45?(e.consume(k),b):N(k)}function pe(k){return k===47?(e.consume(k),l="",Te):N(k)}function Te(k){if(k===62){const ie=l.toLowerCase();return ys.includes(ie)?(e.consume(k),we):N(k)}return tt(k)&&l.length<8?(e.consume(k),l+=String.fromCharCode(k),Te):N(k)}function ze(k){return k===93?(e.consume(k),b):N(k)}function b(k){return k===62?(e.consume(k),we):k===45&&o===2?(e.consume(k),b):N(k)}function we(k){return k===null||K(k)?(e.exit("htmlFlowData"),Me(k)):(e.consume(k),we)}function Me(k){return e.exit("htmlFlow"),n(k)}}function J1(e,n,r){const i=this;return o;function o(l){return K(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),a):r(l)}function a(l){return i.parser.lazy[i.now().line]?r(l):n(l)}}function K1(e,n,r){return i;function i(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(Vn,n,r)}}const em={name:"htmlText",tokenize:tm};function tm(e,n,r){const i=this;let o,a,l;return d;function d(b){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(b),m}function m(b){return b===33?(e.consume(b),p):b===47?(e.consume(b),U):b===63?(e.consume(b),A):tt(b)?(e.consume(b),ee):r(b)}function p(b){return b===45?(e.consume(b),g):b===91?(e.consume(b),a=0,S):tt(b)?(e.consume(b),P):r(b)}function g(b){return b===45?(e.consume(b),x):r(b)}function y(b){return b===null?r(b):b===45?(e.consume(b),w):K(b)?(l=y,pe(b)):(e.consume(b),y)}function w(b){return b===45?(e.consume(b),x):y(b)}function x(b){return b===62?ae(b):b===45?w(b):y(b)}function S(b){const we="CDATA[";return b===we.charCodeAt(a++)?(e.consume(b),a===we.length?M:S):r(b)}function M(b){return b===null?r(b):b===93?(e.consume(b),j):K(b)?(l=M,pe(b)):(e.consume(b),M)}function j(b){return b===93?(e.consume(b),O):M(b)}function O(b){return b===62?ae(b):b===93?(e.consume(b),O):M(b)}function P(b){return b===null||b===62?ae(b):K(b)?(l=P,pe(b)):(e.consume(b),P)}function A(b){return b===null?r(b):b===63?(e.consume(b),W):K(b)?(l=A,pe(b)):(e.consume(b),A)}function W(b){return b===62?ae(b):A(b)}function U(b){return tt(b)?(e.consume(b),I):r(b)}function I(b){return b===45||Ye(b)?(e.consume(b),I):Z(b)}function Z(b){return K(b)?(l=Z,pe(b)):ue(b)?(e.consume(b),Z):ae(b)}function ee(b){return b===45||Ye(b)?(e.consume(b),ee):b===47||b===62||Le(b)?re(b):r(b)}function re(b){return b===47?(e.consume(b),ae):b===58||b===95||tt(b)?(e.consume(b),G):K(b)?(l=re,pe(b)):ue(b)?(e.consume(b),re):ae(b)}function G(b){return b===45||b===46||b===58||b===95||Ye(b)?(e.consume(b),G):R(b)}function R(b){return b===61?(e.consume(b),N):K(b)?(l=R,pe(b)):ue(b)?(e.consume(b),R):re(b)}function N(b){return b===null||b===60||b===61||b===62||b===96?r(b):b===34||b===39?(e.consume(b),o=b,Q):K(b)?(l=N,pe(b)):ue(b)?(e.consume(b),N):(e.consume(b),se)}function Q(b){return b===o?(e.consume(b),o=void 0,V):b===null?r(b):K(b)?(l=Q,pe(b)):(e.consume(b),Q)}function se(b){return b===null||b===34||b===39||b===60||b===61||b===96?r(b):b===47||b===62||Le(b)?re(b):(e.consume(b),se)}function V(b){return b===47||b===62||Le(b)?re(b):r(b)}function ae(b){return b===62?(e.consume(b),e.exit("htmlTextData"),e.exit("htmlText"),n):r(b)}function pe(b){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),Te}function Te(b){return ue(b)?fe(e,ze,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):ze(b)}function ze(b){return e.enter("htmlTextData"),l(b)}}const ri={name:"labelEnd",tokenize:am,resolveTo:om,resolveAll:sm},nm={tokenize:lm},rm={tokenize:um},im={tokenize:cm};function sm(e){let n=-1;for(;++n<e.length;){const r=e[n][1];(r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd")&&(e.splice(n+1,r.type==="labelImage"?4:2),r.type="data",n++)}return e}function om(e,n){let r=e.length,i=0,o,a,l,d;for(;r--;)if(o=e[r][1],a){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[r][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(l){if(e[r][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(a=r,o.type!=="labelLink")){i=2;break}}else o.type==="labelEnd"&&(l=r);const m={type:e[a][1].type==="labelLink"?"link":"image",start:Object.assign({},e[a][1].start),end:Object.assign({},e[e.length-1][1].end)},p={type:"label",start:Object.assign({},e[a][1].start),end:Object.assign({},e[l][1].end)},g={type:"labelText",start:Object.assign({},e[a+i+2][1].end),end:Object.assign({},e[l-2][1].start)};return d=[["enter",m,n],["enter",p,n]],d=Ve(d,e.slice(a+1,a+i+3)),d=Ve(d,[["enter",g,n]]),d=Ve(d,ni(n.parser.constructs.insideSpan.null,e.slice(a+i+4,l-3),n)),d=Ve(d,[["exit",g,n],e[l-2],e[l-1],["exit",p,n]]),d=Ve(d,e.slice(l+1)),d=Ve(d,[["exit",m,n]]),nt(e,a,e.length,d),e}function am(e,n,r){const i=this;let o=i.events.length,a,l;for(;o--;)if((i.events[o][1].type==="labelImage"||i.events[o][1].type==="labelLink")&&!i.events[o][1]._balanced){a=i.events[o][1];break}return d;function d(w){return a?a._inactive?y(w):(l=i.parser.defined.includes(Ft(i.sliceSerialize({start:a.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(w),e.exit("labelMarker"),e.exit("labelEnd"),m):r(w)}function m(w){return w===40?e.attempt(nm,g,l?g:y)(w):w===91?e.attempt(rm,g,l?p:y)(w):l?g(w):y(w)}function p(w){return e.attempt(im,g,y)(w)}function g(w){return n(w)}function y(w){return a._balanced=!0,r(w)}}function lm(e,n,r){return i;function i(y){return e.enter("resource"),e.enter("resourceMarker"),e.consume(y),e.exit("resourceMarker"),o}function o(y){return Le(y)?tn(e,a)(y):a(y)}function a(y){return y===41?g(y):Fo(e,l,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(y)}function l(y){return Le(y)?tn(e,m)(y):g(y)}function d(y){return r(y)}function m(y){return y===34||y===39||y===40?Bo(e,p,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(y):g(y)}function p(y){return Le(y)?tn(e,g)(y):g(y)}function g(y){return y===41?(e.enter("resourceMarker"),e.consume(y),e.exit("resourceMarker"),e.exit("resource"),n):r(y)}}function um(e,n,r){const i=this;return o;function o(d){return Yo.call(i,e,a,l,"reference","referenceMarker","referenceString")(d)}function a(d){return i.parser.defined.includes(Ft(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?n(d):r(d)}function l(d){return r(d)}}function cm(e,n,r){return i;function i(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),o}function o(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),n):r(a)}}const hm={name:"labelStartImage",tokenize:dm,resolveAll:ri.resolveAll};function dm(e,n,r){const i=this;return o;function o(d){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(d),e.exit("labelImageMarker"),a}function a(d){return d===91?(e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelImage"),l):r(d)}function l(d){return d===94&&"_hiddenFootnoteSupport"in i.parser.constructs?r(d):n(d)}}const fm={name:"labelStartLink",tokenize:pm,resolveAll:ri.resolveAll};function pm(e,n,r){const i=this;return o;function o(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),a}function a(l){return l===94&&"_hiddenFootnoteSupport"in i.parser.constructs?r(l):n(l)}}const vr={name:"lineEnding",tokenize:mm};function mm(e,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),fe(e,n,"linePrefix")}}const Ln={name:"thematicBreak",tokenize:xm};function xm(e,n,r){let i=0,o;return a;function a(p){return e.enter("thematicBreak"),l(p)}function l(p){return o=p,d(p)}function d(p){return p===o?(e.enter("thematicBreakSequence"),m(p)):i>=3&&(p===null||K(p))?(e.exit("thematicBreak"),n(p)):r(p)}function m(p){return p===o?(e.consume(p),i++,m):(e.exit("thematicBreakSequence"),ue(p)?fe(e,d,"whitespace")(p):d(p))}}const Re={name:"list",tokenize:wm,continuation:{tokenize:km},exit:_m},gm={tokenize:Sm,partial:!0},ym={tokenize:bm,partial:!0};function wm(e,n,r){const i=this,o=i.events[i.events.length-1];let a=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,l=0;return d;function d(x){const S=i.containerState.type||(x===42||x===43||x===45?"listUnordered":"listOrdered");if(S==="listUnordered"?!i.containerState.marker||x===i.containerState.marker:Fr(x)){if(i.containerState.type||(i.containerState.type=S,e.enter(S,{_container:!0})),S==="listUnordered")return e.enter("listItemPrefix"),x===42||x===45?e.check(Ln,r,p)(x):p(x);if(!i.interrupt||x===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),m(x)}return r(x)}function m(x){return Fr(x)&&++l<10?(e.consume(x),m):(!i.interrupt||l<2)&&(i.containerState.marker?x===i.containerState.marker:x===41||x===46)?(e.exit("listItemValue"),p(x)):r(x)}function p(x){return e.enter("listItemMarker"),e.consume(x),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||x,e.check(Vn,i.interrupt?r:g,e.attempt(gm,w,y))}function g(x){return i.containerState.initialBlankLine=!0,a++,w(x)}function y(x){return ue(x)?(e.enter("listItemPrefixWhitespace"),e.consume(x),e.exit("listItemPrefixWhitespace"),w):r(x)}function w(x){return i.containerState.size=a+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(x)}}function km(e,n,r){const i=this;return i.containerState._closeFlow=void 0,e.check(Vn,o,a);function o(d){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,fe(e,n,"listItemIndent",i.containerState.size+1)(d)}function a(d){return i.containerState.furtherBlankLines||!ue(d)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,l(d)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(ym,n,l)(d))}function l(d){return i.containerState._closeFlow=!0,i.interrupt=void 0,fe(e,e.attempt(Re,n,r),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function bm(e,n,r){const i=this;return fe(e,o,"listItemIndent",i.containerState.size+1);function o(a){const l=i.events[i.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===i.containerState.size?n(a):r(a)}}function _m(e){e.exit(this.containerState.type)}function Sm(e,n,r){const i=this;return fe(e,o,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function o(a){const l=i.events[i.events.length-1];return!ue(a)&&l&&l[1].type==="listItemPrefixWhitespace"?n(a):r(a)}}const ws={name:"setextUnderline",tokenize:Cm,resolveTo:vm};function vm(e,n){let r=e.length,i,o,a;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){i=r;break}e[r][1].type==="paragraph"&&(o=r)}else e[r][1].type==="content"&&e.splice(r,1),!a&&e[r][1].type==="definition"&&(a=r);const l={type:"setextHeading",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[o][1].type="setextHeadingText",a?(e.splice(o,0,["enter",l,n]),e.splice(a+1,0,["exit",e[i][1],n]),e[i][1].end=Object.assign({},e[a][1].end)):e[i][1]=l,e.push(["exit",l,n]),e}function Cm(e,n,r){const i=this;let o;return a;function a(p){let g=i.events.length,y;for(;g--;)if(i.events[g][1].type!=="lineEnding"&&i.events[g][1].type!=="linePrefix"&&i.events[g][1].type!=="content"){y=i.events[g][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||y)?(e.enter("setextHeadingLine"),o=p,l(p)):r(p)}function l(p){return e.enter("setextHeadingLineSequence"),d(p)}function d(p){return p===o?(e.consume(p),d):(e.exit("setextHeadingLineSequence"),ue(p)?fe(e,m,"lineSuffix")(p):m(p))}function m(p){return p===null||K(p)?(e.exit("setextHeadingLine"),n(p)):r(p)}}const jm={tokenize:Tm};function Tm(e){const n=this,r=e.attempt(Vn,i,e.attempt(this.parser.constructs.flowInitial,o,fe(e,e.attempt(this.parser.constructs.flow,o,e.attempt(P1,o)),"linePrefix")));return r;function i(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),n.currentConstruct=void 0,r}function o(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n.currentConstruct=void 0,r}}const Mm={resolveAll:Ho()},Dm=$o("string"),Em=$o("text");function $o(e){return{tokenize:n,resolveAll:Ho(e==="text"?Om:void 0)};function n(r){const i=this,o=this.parser.constructs[e],a=r.attempt(o,l,d);return l;function l(g){return p(g)?a(g):d(g)}function d(g){if(g===null){r.consume(g);return}return r.enter("data"),r.consume(g),m}function m(g){return p(g)?(r.exit("data"),a(g)):(r.consume(g),m)}function p(g){if(g===null)return!0;const y=o[g];let w=-1;if(y)for(;++w<y.length;){const x=y[w];if(!x.previous||x.previous.call(i,i.previous))return!0}return!1}}}function Ho(e){return n;function n(r,i){let o=-1,a;for(;++o<=r.length;)a===void 0?r[o]&&r[o][1].type==="data"&&(a=o,o++):(!r[o]||r[o][1].type!=="data")&&(o!==a+2&&(r[a][1].end=r[o-1][1].end,r.splice(a+2,o-a-2),o=a+2),a=void 0);return e?e(r,i):r}}function Om(e,n){let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const i=e[r-1][1],o=n.sliceStream(i);let a=o.length,l=-1,d=0,m;for(;a--;){const p=o[a];if(typeof p=="string"){for(l=p.length;p.charCodeAt(l-1)===32;)d++,l--;if(l)break;l=-1}else if(p===-2)m=!0,d++;else if(p!==-1){a++;break}}if(d){const p={type:r===e.length||m||d<2?"lineSuffix":"hardBreakTrailing",start:{line:i.end.line,column:i.end.column-d,offset:i.end.offset-d,_index:i.start._index+a,_bufferIndex:a?l:i.start._bufferIndex+l},end:Object.assign({},i.end)};i.end=Object.assign({},p.start),i.start.offset===i.end.offset?Object.assign(i,p):(e.splice(r,0,["enter",p,n],["exit",p,n]),r+=2)}r++}return e}function Pm(e,n,r){let i=Object.assign(r?Object.assign({},r):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const o={},a=[];let l=[],d=[];const m={consume:P,enter:A,exit:W,attempt:Z(U),check:Z(I),interrupt:Z(I,{interrupt:!0})},p={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:x,sliceSerialize:w,now:S,defineSkip:M,write:y};let g=n.tokenize.call(p,m);return n.resolveAll&&a.push(n),p;function y(R){return l=Ve(l,R),j(),l[l.length-1]!==null?[]:(ee(n,0),p.events=ni(a,p.events,p),p.events)}function w(R,N){return Am(x(R),N)}function x(R){return Im(l,R)}function S(){const{line:R,column:N,offset:Q,_index:se,_bufferIndex:V}=i;return{line:R,column:N,offset:Q,_index:se,_bufferIndex:V}}function M(R){o[R.line]=R.column,G()}function j(){let R;for(;i._index<l.length;){const N=l[i._index];if(typeof N=="string")for(R=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===R&&i._bufferIndex<N.length;)O(N.charCodeAt(i._bufferIndex));else O(N)}}function O(R){g=g(R)}function P(R){K(R)?(i.line++,i.column=1,i.offset+=R===-3?2:1,G()):R!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===l[i._index].length&&(i._bufferIndex=-1,i._index++)),p.previous=R}function A(R,N){const Q=N||{};return Q.type=R,Q.start=S(),p.events.push(["enter",Q,p]),d.push(Q),Q}function W(R){const N=d.pop();return N.end=S(),p.events.push(["exit",N,p]),N}function U(R,N){ee(R,N.from)}function I(R,N){N.restore()}function Z(R,N){return Q;function Q(se,V,ae){let pe,Te,ze,b;return Array.isArray(se)?Me(se):"tokenize"in se?Me([se]):we(se);function we(ke){return rt;function rt(Ie){const it=Ie!==null&&ke[Ie],st=Ie!==null&&ke.null,Ht=[...Array.isArray(it)?it:it?[it]:[],...Array.isArray(st)?st:st?[st]:[]];return Me(Ht)(Ie)}}function Me(ke){return pe=ke,Te=0,ke.length===0?ae:k(ke[Te])}function k(ke){return rt;function rt(Ie){return b=re(),ze=ke,ke.partial||(p.currentConstruct=ke),ke.name&&p.parser.constructs.disable.null.includes(ke.name)?B():ke.tokenize.call(N?Object.assign(Object.create(p),N):p,m,ie,B)(Ie)}}function ie(ke){return R(ze,b),V}function B(ke){return b.restore(),++Te<pe.length?k(pe[Te]):ae}}}function ee(R,N){R.resolveAll&&!a.includes(R)&&a.push(R),R.resolve&&nt(p.events,N,p.events.length-N,R.resolve(p.events.slice(N),p)),R.resolveTo&&(p.events=R.resolveTo(p.events,p))}function re(){const R=S(),N=p.previous,Q=p.currentConstruct,se=p.events.length,V=Array.from(d);return{restore:ae,from:se};function ae(){i=R,p.previous=N,p.currentConstruct=Q,p.events.length=se,d=V,G()}}function G(){i.line in o&&i.column<2&&(i.column=o[i.line],i.offset+=o[i.line]-1)}}function Im(e,n){const r=n.start._index,i=n.start._bufferIndex,o=n.end._index,a=n.end._bufferIndex;let l;if(r===o)l=[e[r].slice(i,a)];else{if(l=e.slice(r,o),i>-1){const d=l[0];typeof d=="string"?l[0]=d.slice(i):l.shift()}a>0&&l.push(e[o].slice(0,a))}return l}function Am(e,n){let r=-1;const i=[];let o;for(;++r<e.length;){const a=e[r];let l;if(typeof a=="string")l=a;else switch(a){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=n?" ":"	";break}case-1:{if(!n&&o)continue;l=" ";break}default:l=String.fromCharCode(a)}o=a===-2,i.push(l)}return i.join("")}const Rm={42:Re,43:Re,45:Re,48:Re,49:Re,50:Re,51:Re,52:Re,53:Re,54:Re,55:Re,56:Re,57:Re,62:Ro},Lm={91:z1},zm={[-2]:Sr,[-1]:Sr,32:Sr},Nm={35:H1,42:Ln,45:[ws,Ln],60:G1,61:ws,95:Ln,96:gs,126:gs},Fm={38:zo,92:Lo},Ym={[-5]:vr,[-4]:vr,[-3]:vr,33:hm,38:zo,42:Yr,60:[p1,em],91:fm,92:[B1,Lo],93:ri,95:Yr,96:T1},Bm={null:[Yr,Mm]},$m={null:[42,95]},Hm={null:[]},Wm=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:$m,contentInitial:Lm,disable:Hm,document:Rm,flow:Nm,flowInitial:zm,insideSpan:Bm,string:Fm,text:Ym},Symbol.toStringTag,{value:"Module"}));function Um(e){const r=K0([Wm,...(e||{}).extensions||[]]),i={defined:[],lazy:{},constructs:r,content:o(a1),document:o(u1),flow:o(jm),string:o(Dm),text:o(Em)};return i;function o(a){return l;function l(d){return Pm(i,a,d)}}}function Vm(e){for(;!No(e););return e}const ks=/[\0\t\n\r]/g;function Gm(){let e=1,n="",r=!0,i;return o;function o(a,l,d){const m=[];let p,g,y,w,x;for(a=n+(typeof a=="string"?a.toString():new TextDecoder(l||void 0).decode(a)),y=0,n="",r&&(a.charCodeAt(0)===65279&&y++,r=void 0);y<a.length;){if(ks.lastIndex=y,p=ks.exec(a),w=p&&p.index!==void 0?p.index:a.length,x=a.charCodeAt(w),!p){n=a.slice(y);break}if(x===10&&y===w&&i)m.push(-3),i=void 0;else switch(i&&(m.push(-5),i=void 0),y<w&&(m.push(a.slice(y,w)),e+=w-y),x){case 0:{m.push(65533),e++;break}case 9:{for(g=Math.ceil(e/4)*4,m.push(-2);e++<g;)m.push(-1);break}case 10:{m.push(-4),e=1;break}default:i=!0,e=1}y=w+1}return d&&(i&&m.push(-5),n&&m.push(n),m.push(null)),m}}const qm=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Zm(e){return e.replace(qm,Qm)}function Qm(e,n,r){if(n)return n;if(r.charCodeAt(0)===35){const o=r.charCodeAt(1),a=o===120||o===88;return Io(r.slice(a?2:1),a?16:10)}return ti(r)||e}const Wo={}.hasOwnProperty;function Xm(e,n,r){return typeof n!="string"&&(r=n,n=void 0),Jm(r)(Vm(Um(r).document().write(Gm()(e,n,!0))))}function Jm(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(hn),autolinkProtocol:re,autolinkEmail:re,atxHeading:a(ln),blockQuote:a(it),characterEscape:re,characterReference:re,codeFenced:a(st),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:a(st,l),codeText:a(Ht,l),codeTextData:re,data:re,codeFlowValue:re,definition:a(Zn),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:a(Qn),hardBreakEscape:a(un),hardBreakTrailing:a(un),htmlFlow:a(cn,l),htmlFlowData:re,htmlText:a(cn,l),htmlTextData:re,image:a(Xn),label:l,link:a(hn),listItem:a(_t),listItemValue:w,listOrdered:a(dn,y),listUnordered:a(dn),paragraph:a(Ce),reference:k,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:a(ln),strong:a(Ae),thematicBreak:a(fn)},exit:{atxHeading:m(),atxHeadingSequence:U,autolink:m(),autolinkEmail:Ie,autolinkProtocol:rt,blockQuote:m(),characterEscapeValue:G,characterReferenceMarkerHexadecimal:B,characterReferenceMarkerNumeric:B,characterReferenceValue:ke,codeFenced:m(j),codeFencedFence:M,codeFencedFenceInfo:x,codeFencedFenceMeta:S,codeFlowValue:G,codeIndented:m(O),codeText:m(V),codeTextData:G,data:G,definition:m(),definitionDestinationString:W,definitionLabelString:P,definitionTitleString:A,emphasis:m(),hardBreakEscape:m(N),hardBreakTrailing:m(N),htmlFlow:m(Q),htmlFlowData:G,htmlText:m(se),htmlTextData:G,image:m(pe),label:ze,labelText:Te,lineEnding:R,link:m(ae),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:ie,resourceDestinationString:b,resourceTitleString:we,resource:Me,setextHeading:m(ee),setextHeadingLineSequence:Z,setextHeadingText:I,strong:m(),thematicBreak:m()}};Uo(n,(e||{}).mdastExtensions||[]);const r={};return i;function i(D){let Y={type:"root",children:[]};const X={stack:[Y],tokenStack:[],config:n,enter:d,exit:p,buffer:l,resume:g,data:r},J=[];let $=-1;for(;++$<D.length;)if(D[$][1].type==="listOrdered"||D[$][1].type==="listUnordered")if(D[$][0]==="enter")J.push($);else{const je=J.pop();$=o(D,je,$)}for($=-1;++$<D.length;){const je=n[D[$][0]];Wo.call(je,D[$][1].type)&&je[D[$][1].type].call(Object.assign({sliceSerialize:D[$][2].sliceSerialize},X),D[$][1])}if(X.tokenStack.length>0){const je=X.tokenStack[X.tokenStack.length-1];(je[1]||bs).call(X,void 0,je[0])}for(Y.position={start:gt(D.length>0?D[0][1].start:{line:1,column:1,offset:0}),end:gt(D.length>0?D[D.length-2][1].end:{line:1,column:1,offset:0})},$=-1;++$<n.transforms.length;)Y=n.transforms[$](Y)||Y;return Y}function o(D,Y,X){let J=Y-1,$=-1,je=!1,He,We,St,vt;for(;++J<=X;){const De=D[J];switch(De[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{De[0]==="enter"?$++:$--,vt=void 0;break}case"lineEndingBlank":{De[0]==="enter"&&(He&&!vt&&!$&&!St&&(St=J),vt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:vt=void 0}if(!$&&De[0]==="enter"&&De[1].type==="listItemPrefix"||$===-1&&De[0]==="exit"&&(De[1].type==="listUnordered"||De[1].type==="listOrdered")){if(He){let _e=J;for(We=void 0;_e--;){const Ue=D[_e];if(Ue[1].type==="lineEnding"||Ue[1].type==="lineEndingBlank"){if(Ue[0]==="exit")continue;We&&(D[We][1].type="lineEndingBlank",je=!0),Ue[1].type="lineEnding",We=_e}else if(!(Ue[1].type==="linePrefix"||Ue[1].type==="blockQuotePrefix"||Ue[1].type==="blockQuotePrefixWhitespace"||Ue[1].type==="blockQuoteMarker"||Ue[1].type==="listItemIndent"))break}St&&(!We||St<We)&&(He._spread=!0),He.end=Object.assign({},We?D[We][1].start:De[1].end),D.splice(We||J,0,["exit",He,De[2]]),J++,X++}if(De[1].type==="listItemPrefix"){const _e={type:"listItem",_spread:!1,start:Object.assign({},De[1].start),end:void 0};He=_e,D.splice(J,0,["enter",_e,De[2]]),J++,X++,St=void 0,vt=!0}}}return D[Y][1]._spread=je,X}function a(D,Y){return X;function X(J){d.call(this,D(J),J),Y&&Y.call(this,J)}}function l(){this.stack.push({type:"fragment",children:[]})}function d(D,Y,X){this.stack[this.stack.length-1].children.push(D),this.stack.push(D),this.tokenStack.push([Y,X]),D.position={start:gt(Y.start),end:void 0}}function m(D){return Y;function Y(X){D&&D.call(this,X),p.call(this,X)}}function p(D,Y){const X=this.stack.pop(),J=this.tokenStack.pop();if(J)J[0].type!==D.type&&(Y?Y.call(this,D,J[0]):(J[1]||bs).call(this,D,J[0]));else throw new Error("Cannot close `"+D.type+"` ("+en({start:D.start,end:D.end})+"): it’s not open");X.position.end=gt(D.end)}function g(){return X0(this.stack.pop())}function y(){this.data.expectingFirstListItemValue=!0}function w(D){if(this.data.expectingFirstListItemValue){const Y=this.stack[this.stack.length-2];Y.start=Number.parseInt(this.sliceSerialize(D),10),this.data.expectingFirstListItemValue=void 0}}function x(){const D=this.resume(),Y=this.stack[this.stack.length-1];Y.lang=D}function S(){const D=this.resume(),Y=this.stack[this.stack.length-1];Y.meta=D}function M(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function j(){const D=this.resume(),Y=this.stack[this.stack.length-1];Y.value=D.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function O(){const D=this.resume(),Y=this.stack[this.stack.length-1];Y.value=D.replace(/(\r?\n|\r)$/g,"")}function P(D){const Y=this.resume(),X=this.stack[this.stack.length-1];X.label=Y,X.identifier=Ft(this.sliceSerialize(D)).toLowerCase()}function A(){const D=this.resume(),Y=this.stack[this.stack.length-1];Y.title=D}function W(){const D=this.resume(),Y=this.stack[this.stack.length-1];Y.url=D}function U(D){const Y=this.stack[this.stack.length-1];if(!Y.depth){const X=this.sliceSerialize(D).length;Y.depth=X}}function I(){this.data.setextHeadingSlurpLineEnding=!0}function Z(D){const Y=this.stack[this.stack.length-1];Y.depth=this.sliceSerialize(D).codePointAt(0)===61?1:2}function ee(){this.data.setextHeadingSlurpLineEnding=void 0}function re(D){const X=this.stack[this.stack.length-1].children;let J=X[X.length-1];(!J||J.type!=="text")&&(J=Wt(),J.position={start:gt(D.start),end:void 0},X.push(J)),this.stack.push(J)}function G(D){const Y=this.stack.pop();Y.value+=this.sliceSerialize(D),Y.position.end=gt(D.end)}function R(D){const Y=this.stack[this.stack.length-1];if(this.data.atHardBreak){const X=Y.children[Y.children.length-1];X.position.end=gt(D.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(Y.type)&&(re.call(this,D),G.call(this,D))}function N(){this.data.atHardBreak=!0}function Q(){const D=this.resume(),Y=this.stack[this.stack.length-1];Y.value=D}function se(){const D=this.resume(),Y=this.stack[this.stack.length-1];Y.value=D}function V(){const D=this.resume(),Y=this.stack[this.stack.length-1];Y.value=D}function ae(){const D=this.stack[this.stack.length-1];if(this.data.inReference){const Y=this.data.referenceType||"shortcut";D.type+="Reference",D.referenceType=Y,delete D.url,delete D.title}else delete D.identifier,delete D.label;this.data.referenceType=void 0}function pe(){const D=this.stack[this.stack.length-1];if(this.data.inReference){const Y=this.data.referenceType||"shortcut";D.type+="Reference",D.referenceType=Y,delete D.url,delete D.title}else delete D.identifier,delete D.label;this.data.referenceType=void 0}function Te(D){const Y=this.sliceSerialize(D),X=this.stack[this.stack.length-2];X.label=Zm(Y),X.identifier=Ft(Y).toLowerCase()}function ze(){const D=this.stack[this.stack.length-1],Y=this.resume(),X=this.stack[this.stack.length-1];if(this.data.inReference=!0,X.type==="link"){const J=D.children;X.children=J}else X.alt=Y}function b(){const D=this.resume(),Y=this.stack[this.stack.length-1];Y.url=D}function we(){const D=this.resume(),Y=this.stack[this.stack.length-1];Y.title=D}function Me(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function ie(D){const Y=this.resume(),X=this.stack[this.stack.length-1];X.label=Y,X.identifier=Ft(this.sliceSerialize(D)).toLowerCase(),this.data.referenceType="full"}function B(D){this.data.characterReferenceType=D.type}function ke(D){const Y=this.sliceSerialize(D),X=this.data.characterReferenceType;let J;X?(J=Io(Y,X==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):J=ti(Y);const $=this.stack.pop();$.value+=J,$.position.end=gt(D.end)}function rt(D){G.call(this,D);const Y=this.stack[this.stack.length-1];Y.url=this.sliceSerialize(D)}function Ie(D){G.call(this,D);const Y=this.stack[this.stack.length-1];Y.url="mailto:"+this.sliceSerialize(D)}function it(){return{type:"blockquote",children:[]}}function st(){return{type:"code",lang:null,meta:null,value:""}}function Ht(){return{type:"inlineCode",value:""}}function Zn(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Qn(){return{type:"emphasis",children:[]}}function ln(){return{type:"heading",depth:0,children:[]}}function un(){return{type:"break"}}function cn(){return{type:"html",value:""}}function Xn(){return{type:"image",title:null,url:"",alt:null}}function hn(){return{type:"link",title:null,url:"",children:[]}}function dn(D){return{type:"list",ordered:D.type==="listOrdered",start:null,spread:D._spread,children:[]}}function _t(D){return{type:"listItem",spread:D._spread,checked:null,children:[]}}function Ce(){return{type:"paragraph",children:[]}}function Ae(){return{type:"strong",children:[]}}function Wt(){return{type:"text",value:""}}function fn(){return{type:"thematicBreak"}}}function gt(e){return{line:e.line,column:e.column,offset:e.offset}}function Uo(e,n){let r=-1;for(;++r<n.length;){const i=n[r];Array.isArray(i)?Uo(e,i):Km(e,i)}}function Km(e,n){let r;for(r in n)if(Wo.call(n,r))switch(r){case"canContainEols":{const i=n[r];i&&e[r].push(...i);break}case"transforms":{const i=n[r];i&&e[r].push(...i);break}case"enter":case"exit":{const i=n[r];i&&Object.assign(e[r],i);break}}}function bs(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+en({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+en({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+en({start:n.start,end:n.end})+") is still open")}function ex(e){const n=this;n.parser=r;function r(i){return Xm(i,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function tx(e,n){const r={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,r),e.applyData(n,r)}function nx(e,n){const r={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,r),[e.applyData(n,r),{type:"text",value:`
`}]}function rx(e,n){const r=n.value?n.value+`
`:"",i={};n.lang&&(i.className=["language-"+n.lang]);let o={type:"element",tagName:"code",properties:i,children:[{type:"text",value:r}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function ix(e,n){const r={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function sx(e,n){const r={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function ox(e,n){const r=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=String(n.identifier).toUpperCase(),o=$t(i.toLowerCase()),a=e.footnoteOrder.indexOf(i);let l,d=e.footnoteCounts.get(i);d===void 0?(d=0,e.footnoteOrder.push(i),l=e.footnoteOrder.length):l=a+1,d+=1,e.footnoteCounts.set(i,d);const m={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+o,id:r+"fnref-"+o+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(n,m);const p={type:"element",tagName:"sup",properties:{},children:[m]};return e.patch(n,p),e.applyData(n,p)}function ax(e,n){const r={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function lx(e,n){if(e.options.allowDangerousHtml){const r={type:"raw",value:n.value};return e.patch(n,r),e.applyData(n,r)}}function Vo(e,n){const r=n.referenceType;let i="]";if(r==="collapsed"?i+="[]":r==="full"&&(i+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+i}];const o=e.all(n),a=o[0];a&&a.type==="text"?a.value="["+a.value:o.unshift({type:"text",value:"["});const l=o[o.length-1];return l&&l.type==="text"?l.value+=i:o.push({type:"text",value:i}),o}function ux(e,n){const r=String(n.identifier).toUpperCase(),i=e.definitionById.get(r);if(!i)return Vo(e,n);const o={src:$t(i.url||""),alt:n.alt};i.title!==null&&i.title!==void 0&&(o.title=i.title);const a={type:"element",tagName:"img",properties:o,children:[]};return e.patch(n,a),e.applyData(n,a)}function cx(e,n){const r={src:$t(n.url)};n.alt!==null&&n.alt!==void 0&&(r.alt=n.alt),n.title!==null&&n.title!==void 0&&(r.title=n.title);const i={type:"element",tagName:"img",properties:r,children:[]};return e.patch(n,i),e.applyData(n,i)}function hx(e,n){const r={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,r);const i={type:"element",tagName:"code",properties:{},children:[r]};return e.patch(n,i),e.applyData(n,i)}function dx(e,n){const r=String(n.identifier).toUpperCase(),i=e.definitionById.get(r);if(!i)return Vo(e,n);const o={href:$t(i.url||"")};i.title!==null&&i.title!==void 0&&(o.title=i.title);const a={type:"element",tagName:"a",properties:o,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function fx(e,n){const r={href:$t(n.url)};n.title!==null&&n.title!==void 0&&(r.title=n.title);const i={type:"element",tagName:"a",properties:r,children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function px(e,n,r){const i=e.all(n),o=r?mx(r):Go(n),a={},l=[];if(typeof n.checked=="boolean"){const g=i[0];let y;g&&g.type==="element"&&g.tagName==="p"?y=g:(y={type:"element",tagName:"p",properties:{},children:[]},i.unshift(y)),y.children.length>0&&y.children.unshift({type:"text",value:" "}),y.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let d=-1;for(;++d<i.length;){const g=i[d];(o||d!==0||g.type!=="element"||g.tagName!=="p")&&l.push({type:"text",value:`
`}),g.type==="element"&&g.tagName==="p"&&!o?l.push(...g.children):l.push(g)}const m=i[i.length-1];m&&(o||m.type!=="element"||m.tagName!=="p")&&l.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:a,children:l};return e.patch(n,p),e.applyData(n,p)}function mx(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const r=e.children;let i=-1;for(;!n&&++i<r.length;)n=Go(r[i])}return n}function Go(e){const n=e.spread;return n??e.children.length>1}function xx(e,n){const r={},i=e.all(n);let o=-1;for(typeof n.start=="number"&&n.start!==1&&(r.start=n.start);++o<i.length;){const l=i[o];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const a={type:"element",tagName:n.ordered?"ol":"ul",properties:r,children:e.wrap(i,!0)};return e.patch(n,a),e.applyData(n,a)}function gx(e,n){const r={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function yx(e,n){const r={type:"root",children:e.wrap(e.all(n))};return e.patch(n,r),e.applyData(n,r)}function wx(e,n){const r={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function kx(e,n){const r=e.all(n),i=r.shift(),o=[];if(i){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(n.children[0],l),o.push(l)}if(r.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(r,!0)},d=Xr(n.children[1]),m=jo(n.children[n.children.length-1]);d&&m&&(l.position={start:d,end:m}),o.push(l)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(n,a),e.applyData(n,a)}function bx(e,n,r){const i=r?r.children:void 0,a=(i?i.indexOf(n):1)===0?"th":"td",l=r&&r.type==="table"?r.align:void 0,d=l?l.length:n.children.length;let m=-1;const p=[];for(;++m<d;){const y=n.children[m],w={},x=l?l[m]:void 0;x&&(w.align=x);let S={type:"element",tagName:a,properties:w,children:[]};y&&(S.children=e.all(y),e.patch(y,S),S=e.applyData(y,S)),p.push(S)}const g={type:"element",tagName:"tr",properties:{},children:e.wrap(p,!0)};return e.patch(n,g),e.applyData(n,g)}function _x(e,n){const r={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}const _s=9,Ss=32;function Sx(e){const n=String(e),r=/\r?\n|\r/g;let i=r.exec(n),o=0;const a=[];for(;i;)a.push(vs(n.slice(o,i.index),o>0,!0),i[0]),o=i.index+i[0].length,i=r.exec(n);return a.push(vs(n.slice(o),o>0,!1)),a.join("")}function vs(e,n,r){let i=0,o=e.length;if(n){let a=e.codePointAt(i);for(;a===_s||a===Ss;)i++,a=e.codePointAt(i)}if(r){let a=e.codePointAt(o-1);for(;a===_s||a===Ss;)o--,a=e.codePointAt(o-1)}return o>i?e.slice(i,o):""}function vx(e,n){const r={type:"text",value:Sx(String(n.value))};return e.patch(n,r),e.applyData(n,r)}function Cx(e,n){const r={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,r),e.applyData(n,r)}const jx={blockquote:tx,break:nx,code:rx,delete:ix,emphasis:sx,footnoteReference:ox,heading:ax,html:lx,imageReference:ux,image:cx,inlineCode:hx,linkReference:dx,link:fx,listItem:px,list:xx,paragraph:gx,root:yx,strong:wx,table:kx,tableCell:_x,tableRow:bx,text:vx,thematicBreak:Cx,toml:In,yaml:In,definition:In,footnoteDefinition:In};function In(){}const qo=-1,Gn=0,Yn=1,Bn=2,ii=3,si=4,oi=5,ai=6,Zo=7,Qo=8,Cs=typeof self=="object"?self:globalThis,Tx=(e,n)=>{const r=(o,a)=>(e.set(a,o),o),i=o=>{if(e.has(o))return e.get(o);const[a,l]=n[o];switch(a){case Gn:case qo:return r(l,o);case Yn:{const d=r([],o);for(const m of l)d.push(i(m));return d}case Bn:{const d=r({},o);for(const[m,p]of l)d[i(m)]=i(p);return d}case ii:return r(new Date(l),o);case si:{const{source:d,flags:m}=l;return r(new RegExp(d,m),o)}case oi:{const d=r(new Map,o);for(const[m,p]of l)d.set(i(m),i(p));return d}case ai:{const d=r(new Set,o);for(const m of l)d.add(i(m));return d}case Zo:{const{name:d,message:m}=l;return r(new Cs[d](m),o)}case Qo:return r(BigInt(l),o);case"BigInt":return r(Object(BigInt(l)),o)}return r(new Cs[a](l),o)};return i},js=e=>Tx(new Map,e)(0),zt="",{toString:Mx}={},{keys:Dx}=Object,Kt=e=>{const n=typeof e;if(n!=="object"||!e)return[Gn,n];const r=Mx.call(e).slice(8,-1);switch(r){case"Array":return[Yn,zt];case"Object":return[Bn,zt];case"Date":return[ii,zt];case"RegExp":return[si,zt];case"Map":return[oi,zt];case"Set":return[ai,zt]}return r.includes("Array")?[Yn,r]:r.includes("Error")?[Zo,r]:[Bn,r]},An=([e,n])=>e===Gn&&(n==="function"||n==="symbol"),Ex=(e,n,r,i)=>{const o=(l,d)=>{const m=i.push(l)-1;return r.set(d,m),m},a=l=>{if(r.has(l))return r.get(l);let[d,m]=Kt(l);switch(d){case Gn:{let g=l;switch(m){case"bigint":d=Qo,g=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+m);g=null;break;case"undefined":return o([qo],l)}return o([d,g],l)}case Yn:{if(m)return o([m,[...l]],l);const g=[],y=o([d,g],l);for(const w of l)g.push(a(w));return y}case Bn:{if(m)switch(m){case"BigInt":return o([m,l.toString()],l);case"Boolean":case"Number":case"String":return o([m,l.valueOf()],l)}if(n&&"toJSON"in l)return a(l.toJSON());const g=[],y=o([d,g],l);for(const w of Dx(l))(e||!An(Kt(l[w])))&&g.push([a(w),a(l[w])]);return y}case ii:return o([d,l.toISOString()],l);case si:{const{source:g,flags:y}=l;return o([d,{source:g,flags:y}],l)}case oi:{const g=[],y=o([d,g],l);for(const[w,x]of l)(e||!(An(Kt(w))||An(Kt(x))))&&g.push([a(w),a(x)]);return y}case ai:{const g=[],y=o([d,g],l);for(const w of l)(e||!An(Kt(w)))&&g.push(a(w));return y}}const{message:p}=l;return o([d,{name:m,message:p}],l)};return a},Ts=(e,{json:n,lossy:r}={})=>{const i=[];return Ex(!(n||r),!!n,new Map,i)(e),i},$n=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?js(Ts(e,n)):structuredClone(e):(e,n)=>js(Ts(e,n));function Ox(e,n){const r=[{type:"text",value:"↩"}];return n>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),r}function Px(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function Ix(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=e.options.footnoteBackContent||Ox,i=e.options.footnoteBackLabel||Px,o=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let m=-1;for(;++m<e.footnoteOrder.length;){const p=e.footnoteById.get(e.footnoteOrder[m]);if(!p)continue;const g=e.all(p),y=String(p.identifier).toUpperCase(),w=$t(y.toLowerCase());let x=0;const S=[],M=e.footnoteCounts.get(y);for(;M!==void 0&&++x<=M;){S.length>0&&S.push({type:"text",value:" "});let P=typeof r=="string"?r:r(m,x);typeof P=="string"&&(P={type:"text",value:P}),S.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+w+(x>1?"-"+x:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(m,x),className:["data-footnote-backref"]},children:Array.isArray(P)?P:[P]})}const j=g[g.length-1];if(j&&j.type==="element"&&j.tagName==="p"){const P=j.children[j.children.length-1];P&&P.type==="text"?P.value+=" ":j.children.push({type:"text",value:" "}),j.children.push(...S)}else g.push(...S);const O={type:"element",tagName:"li",properties:{id:n+"fn-"+w},children:e.wrap(g,!0)};e.patch(p,O),d.push(O)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...$n(l),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(d,!0)},{type:"text",value:`
`}]}}const Xo=function(e){if(e==null)return zx;if(typeof e=="function")return qn(e);if(typeof e=="object")return Array.isArray(e)?Ax(e):Rx(e);if(typeof e=="string")return Lx(e);throw new Error("Expected function, string, or object as test")};function Ax(e){const n=[];let r=-1;for(;++r<e.length;)n[r]=Xo(e[r]);return qn(i);function i(...o){let a=-1;for(;++a<n.length;)if(n[a].apply(this,o))return!0;return!1}}function Rx(e){const n=e;return qn(r);function r(i){const o=i;let a;for(a in e)if(o[a]!==n[a])return!1;return!0}}function Lx(e){return qn(n);function n(r){return r&&r.type===e}}function qn(e){return n;function n(r,i,o){return!!(Nx(r)&&e.call(this,r,typeof i=="number"?i:void 0,o||void 0))}}function zx(){return!0}function Nx(e){return e!==null&&typeof e=="object"&&"type"in e}const Jo=[],Fx=!0,Ms=!1,Yx="skip";function Bx(e,n,r,i){let o;typeof n=="function"&&typeof r!="function"?(i=r,r=n):o=n;const a=Xo(o),l=i?-1:1;d(e,void 0,[])();function d(m,p,g){const y=m&&typeof m=="object"?m:{};if(typeof y.type=="string"){const x=typeof y.tagName=="string"?y.tagName:typeof y.name=="string"?y.name:void 0;Object.defineProperty(w,"name",{value:"node ("+(m.type+(x?"<"+x+">":""))+")"})}return w;function w(){let x=Jo,S,M,j;if((!n||a(m,p,g[g.length-1]||void 0))&&(x=$x(r(m,g)),x[0]===Ms))return x;if("children"in m&&m.children){const O=m;if(O.children&&x[0]!==Yx)for(M=(i?O.children.length:-1)+l,j=g.concat(O);M>-1&&M<O.children.length;){const P=O.children[M];if(S=d(P,M,j)(),S[0]===Ms)return S;M=typeof S[1]=="number"?S[1]:M+l}}return x}}}function $x(e){return Array.isArray(e)?e:typeof e=="number"?[Fx,e]:e==null?Jo:[e]}function Ko(e,n,r,i){let o,a,l;typeof n=="function"&&typeof r!="function"?(a=void 0,l=n,o=r):(a=n,l=r,o=i),Bx(e,a,d,o);function d(m,p){const g=p[p.length-1],y=g?g.children.indexOf(m):void 0;return l(m,y,g)}}const Br={}.hasOwnProperty,Hx={};function Wx(e,n){const r=n||Hx,i=new Map,o=new Map,a=new Map,l={...jx,...r.handlers},d={all:p,applyData:Vx,definitionById:i,footnoteById:o,footnoteCounts:a,footnoteOrder:[],handlers:l,one:m,options:r,patch:Ux,wrap:qx};return Ko(e,function(g){if(g.type==="definition"||g.type==="footnoteDefinition"){const y=g.type==="definition"?i:o,w=String(g.identifier).toUpperCase();y.has(w)||y.set(w,g)}}),d;function m(g,y){const w=g.type,x=d.handlers[w];if(Br.call(d.handlers,w)&&x)return x(d,g,y);if(d.options.passThrough&&d.options.passThrough.includes(w)){if("children"in g){const{children:M,...j}=g,O=$n(j);return O.children=d.all(g),O}return $n(g)}return(d.options.unknownHandler||Gx)(d,g,y)}function p(g){const y=[];if("children"in g){const w=g.children;let x=-1;for(;++x<w.length;){const S=d.one(w[x],g);if(S){if(x&&w[x-1].type==="break"&&(!Array.isArray(S)&&S.type==="text"&&(S.value=Ds(S.value)),!Array.isArray(S)&&S.type==="element")){const M=S.children[0];M&&M.type==="text"&&(M.value=Ds(M.value))}Array.isArray(S)?y.push(...S):y.push(S)}}}return y}}function Ux(e,n){e.position&&(n.position=T0(e))}function Vx(e,n){let r=n;if(e&&e.data){const i=e.data.hName,o=e.data.hChildren,a=e.data.hProperties;if(typeof i=="string")if(r.type==="element")r.tagName=i;else{const l="children"in r?r.children:[r];r={type:"element",tagName:i,properties:{},children:l}}r.type==="element"&&a&&Object.assign(r.properties,$n(a)),"children"in r&&r.children&&o!==null&&o!==void 0&&(r.children=o)}return r}function Gx(e,n){const r=n.data||{},i="value"in n&&!(Br.call(r,"hProperties")||Br.call(r,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function qx(e,n){const r=[];let i=-1;for(n&&r.push({type:"text",value:`
`});++i<e.length;)i&&r.push({type:"text",value:`
`}),r.push(e[i]);return n&&e.length>0&&r.push({type:"text",value:`
`}),r}function Ds(e){let n=0,r=e.charCodeAt(n);for(;r===9||r===32;)n++,r=e.charCodeAt(n);return e.slice(n)}function Es(e,n){const r=Wx(e,n),i=r.one(e,void 0),o=Ix(r),a=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return o&&a.children.push({type:"text",value:`
`},o),a}function Zx(e,n){return e&&"run"in e?async function(r,i){const o=Es(r,n);await e.run(o,i)}:function(r){return Es(r,n||e)}}function Os(e){if(e)throw e}var zn=Object.prototype.hasOwnProperty,ea=Object.prototype.toString,Ps=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,As=function(n){return typeof Array.isArray=="function"?Array.isArray(n):ea.call(n)==="[object Array]"},Rs=function(n){if(!n||ea.call(n)!=="[object Object]")return!1;var r=zn.call(n,"constructor"),i=n.constructor&&n.constructor.prototype&&zn.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!r&&!i)return!1;var o;for(o in n);return typeof o>"u"||zn.call(n,o)},Ls=function(n,r){Ps&&r.name==="__proto__"?Ps(n,r.name,{enumerable:!0,configurable:!0,value:r.newValue,writable:!0}):n[r.name]=r.newValue},zs=function(n,r){if(r==="__proto__")if(zn.call(n,r)){if(Is)return Is(n,r).value}else return;return n[r]},Qx=function e(){var n,r,i,o,a,l,d=arguments[0],m=1,p=arguments.length,g=!1;for(typeof d=="boolean"&&(g=d,d=arguments[1]||{},m=2),(d==null||typeof d!="object"&&typeof d!="function")&&(d={});m<p;++m)if(n=arguments[m],n!=null)for(r in n)i=zs(d,r),o=zs(n,r),d!==o&&(g&&o&&(Rs(o)||(a=As(o)))?(a?(a=!1,l=i&&As(i)?i:[]):l=i&&Rs(i)?i:{},Ls(d,{name:r,newValue:e(g,l,o)})):typeof o<"u"&&Ls(d,{name:r,newValue:o}));return d};const Cr=Us(Qx);function $r(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Xx(){const e=[],n={run:r,use:i};return n;function r(...o){let a=-1;const l=o.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);d(null,...o);function d(m,...p){const g=e[++a];let y=-1;if(m){l(m);return}for(;++y<o.length;)(p[y]===null||p[y]===void 0)&&(p[y]=o[y]);o=p,g?Jx(g,d)(...p):l(null,...p)}}function i(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),n}}function Jx(e,n){let r;return i;function i(...l){const d=e.length>l.length;let m;d&&l.push(o);try{m=e.apply(this,l)}catch(p){const g=p;if(d&&r)throw g;return o(g)}d||(m instanceof Promise?m.then(a,o):m instanceof Error?o(m):a(m))}function o(l,...d){r||(r=!0,n(l,...d))}function a(l){o(null,l)}}const et={basename:Kx,dirname:eg,extname:tg,join:ng,sep:"/"};function Kx(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');an(e);let r=0,i=-1,o=e.length,a;if(n===void 0||n.length===0||n.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(a){r=o+1;break}}else i<0&&(a=!0,i=o+1);return i<0?"":e.slice(r,i)}if(n===e)return"";let l=-1,d=n.length-1;for(;o--;)if(e.codePointAt(o)===47){if(a){r=o+1;break}}else l<0&&(a=!0,l=o+1),d>-1&&(e.codePointAt(o)===n.codePointAt(d--)?d<0&&(i=o):(d=-1,i=l));return r===i?i=l:i<0&&(i=e.length),e.slice(r,i)}function eg(e){if(an(e),e.length===0)return".";let n=-1,r=e.length,i;for(;--r;)if(e.codePointAt(r)===47){if(i){n=r;break}}else i||(i=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function tg(e){an(e);let n=e.length,r=-1,i=0,o=-1,a=0,l;for(;n--;){const d=e.codePointAt(n);if(d===47){if(l){i=n+1;break}continue}r<0&&(l=!0,r=n+1),d===46?o<0?o=n:a!==1&&(a=1):o>-1&&(a=-1)}return o<0||r<0||a===0||a===1&&o===r-1&&o===i+1?"":e.slice(o,r)}function ng(...e){let n=-1,r;for(;++n<e.length;)an(e[n]),e[n]&&(r=r===void 0?e[n]:r+"/"+e[n]);return r===void 0?".":rg(r)}function rg(e){an(e);const n=e.codePointAt(0)===47;let r=ig(e,!n);return r.length===0&&!n&&(r="."),r.length>0&&e.codePointAt(e.length-1)===47&&(r+="/"),n?"/"+r:r}function ig(e,n){let r="",i=0,o=-1,a=0,l=-1,d,m;for(;++l<=e.length;){if(l<e.length)d=e.codePointAt(l);else{if(d===47)break;d=47}if(d===47){if(!(o===l-1||a===1))if(o!==l-1&&a===2){if(r.length<2||i!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(m=r.lastIndexOf("/"),m!==r.length-1){m<0?(r="",i=0):(r=r.slice(0,m),i=r.length-1-r.lastIndexOf("/")),o=l,a=0;continue}}else if(r.length>0){r="",i=0,o=l,a=0;continue}}n&&(r=r.length>0?r+"/..":"..",i=2)}else r.length>0?r+="/"+e.slice(o+1,l):r=e.slice(o+1,l),i=l-o-1;o=l,a=0}else d===46&&a>-1?a++:a=-1}return r}function an(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const sg={cwd:og};function og(){return"/"}function Hr(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function ag(e){if(typeof e=="string")e=new URL(e);else if(!Hr(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return lg(e)}function lg(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const n=e.pathname;let r=-1;for(;++r<n.length;)if(n.codePointAt(r)===37&&n.codePointAt(r+1)===50){const i=n.codePointAt(r+2);if(i===70||i===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(n)}const jr=["history","path","basename","stem","extname","dirname"];class ta{constructor(n){let r;n?Hr(n)?r={path:n}:typeof n=="string"||ug(n)?r={value:n}:r=n:r={},this.cwd=sg.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<jr.length;){const a=jr[i];a in r&&r[a]!==void 0&&r[a]!==null&&(this[a]=a==="history"?[...r[a]]:r[a])}let o;for(o in r)jr.includes(o)||(this[o]=r[o])}get basename(){return typeof this.path=="string"?et.basename(this.path):void 0}set basename(n){Mr(n,"basename"),Tr(n,"basename"),this.path=et.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?et.dirname(this.path):void 0}set dirname(n){Ns(this.basename,"dirname"),this.path=et.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?et.extname(this.path):void 0}set extname(n){if(Tr(n,"extname"),Ns(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=et.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Hr(n)&&(n=ag(n)),Mr(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?et.basename(this.path,this.extname):void 0}set stem(n){Mr(n,"stem"),Tr(n,"stem"),this.path=et.join(this.dirname||"",n+(this.extname||""))}fail(n,r,i){const o=this.message(n,r,i);throw o.fatal=!0,o}info(n,r,i){const o=this.message(n,r,i);return o.fatal=void 0,o}message(n,r,i){const o=new Oe(n,r,i);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Tr(e,n){if(e&&e.includes(et.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+et.sep+"`")}function Mr(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Ns(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function ug(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const cg=function(e){const i=this.constructor.prototype,o=i[e],a=function(){return o.apply(a,arguments)};Object.setPrototypeOf(a,i);const l=Object.getOwnPropertyNames(o);for(const d of l){const m=Object.getOwnPropertyDescriptor(o,d);m&&Object.defineProperty(a,d,m)}return a},hg={}.hasOwnProperty;class li extends cg{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Xx()}copy(){const n=new li;let r=-1;for(;++r<this.attachers.length;){const i=this.attachers[r];n.use(...i)}return n.data(Cr(!0,{},this.namespace)),n}data(n,r){return typeof n=="string"?arguments.length===2?(Or("data",this.frozen),this.namespace[n]=r,this):hg.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Or("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const o=r.call(n,...i);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const r=Rn(n),i=this.parser||this.Parser;return Dr("parse",i),i(String(r),r)}process(n,r){const i=this;return this.freeze(),Dr("process",this.parser||this.Parser),Er("process",this.compiler||this.Compiler),r?o(void 0,r):new Promise(o);function o(a,l){const d=Rn(n),m=i.parse(d);i.run(m,d,function(g,y,w){if(g||!y||!w)return p(g);const x=y,S=i.stringify(x,w);pg(S)?w.value=S:w.result=S,p(g,w)});function p(g,y){g||!y?l(g):a?a(y):r(void 0,y)}}}processSync(n){let r=!1,i;return this.freeze(),Dr("processSync",this.parser||this.Parser),Er("processSync",this.compiler||this.Compiler),this.process(n,o),Ys("processSync","process",r),i;function o(a,l){r=!0,Os(a),i=l}}run(n,r,i){Fs(n),this.freeze();const o=this.transformers;return!i&&typeof r=="function"&&(i=r,r=void 0),i?a(void 0,i):new Promise(a);function a(l,d){const m=Rn(r);o.run(n,m,p);function p(g,y,w){const x=y||n;g?d(g):l?l(x):i(void 0,x,w)}}}runSync(n,r){let i=!1,o;return this.run(n,r,a),Ys("runSync","run",i),o;function a(l,d){Os(l),o=d,i=!0}}stringify(n,r){this.freeze();const i=Rn(r),o=this.compiler||this.Compiler;return Er("stringify",o),Fs(n),o(n,i)}use(n,...r){const i=this.attachers,o=this.namespace;if(Or("use",this.frozen),n!=null)if(typeof n=="function")m(n,r);else if(typeof n=="object")Array.isArray(n)?d(n):l(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function a(p){if(typeof p=="function")m(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[g,...y]=p;m(g,y)}else l(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function l(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(p.plugins),p.settings&&(o.settings=Cr(!0,o.settings,p.settings))}function d(p){let g=-1;if(p!=null)if(Array.isArray(p))for(;++g<p.length;){const y=p[g];a(y)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function m(p,g){let y=-1,w=-1;for(;++y<i.length;)if(i[y][0]===p){w=y;break}if(w===-1)i.push([p,...g]);else if(g.length>0){let[x,...S]=g;const M=i[w][1];$r(M)&&$r(x)&&(x=Cr(!0,M,x)),i[w]=[p,x,...S]}}}}const dg=new li().freeze();function Dr(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Er(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Or(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Fs(e){if(!$r(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Ys(e,n,r){if(!r)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Rn(e){return fg(e)?e:new ta(e)}function fg(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function pg(e){return typeof e=="string"||mg(e)}function mg(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const xg="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Bs=[],$s={allowDangerousHtml:!0},gg=/^(https?|ircs?|mailto|xmpp)$/i,yg=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function wg(e){const n=e.allowedElements,r=e.allowElement,i=e.children||"",o=e.className,a=e.components,l=e.disallowedElements,d=e.rehypePlugins||Bs,m=e.remarkPlugins||Bs,p=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...$s}:$s,g=e.skipHtml,y=e.unwrapDisallowed,w=e.urlTransform||kg,x=dg().use(ex).use(m).use(Zx,p).use(d),S=new ta;typeof i=="string"&&(S.value=i);for(const P of yg)Object.hasOwn(e,P.from)&&(""+P.from+(P.to?"use `"+P.to+"` instead":"remove it")+xg+P.id,void 0);const M=x.parse(S);let j=x.runSync(M,S);return o&&(j={type:"element",tagName:"div",properties:{className:o},children:j.type==="root"?j.children:[j]}),Ko(j,O),I0(j,{Fragment:c.Fragment,components:a,ignoreInvalidStyle:!0,jsx:c.jsx,jsxs:c.jsxs,passKeys:!0,passNode:!0});function O(P,A,W){if(P.type==="raw"&&W&&typeof A=="number")return g?W.children.splice(A,1):W.children[A]={type:"text",value:P.value},A;if(P.type==="element"){let U;for(U in _r)if(Object.hasOwn(_r,U)&&Object.hasOwn(P.properties,U)){const I=P.properties[U],Z=_r[U];(Z===null||Z.includes(P.tagName))&&(P.properties[U]=w(String(I||""),U,P))}}if(P.type==="element"){let U=n?!n.includes(P.tagName):l?l.includes(P.tagName):!1;if(!U&&r&&typeof A=="number"&&(U=!r(P,A,W)),U&&W&&typeof A=="number")return y&&P.children?W.children.splice(A,1,...P.children):W.children.splice(A,1),A}}}function kg(e){const n=e.indexOf(":"),r=e.indexOf("?"),i=e.indexOf("#"),o=e.indexOf("/");return n<0||o>-1&&n>o||r>-1&&n>r||i>-1&&n>i||gg.test(e.slice(0,n))?e:""}const bg=e=>c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:c.jsxs("g",{id:"brand_awareness",children:[c.jsx("mask",{id:"mask0_3696_4540",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:c.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),c.jsx("g",{mask:"url(#mask0_3696_4540)",children:c.jsx("path",{id:"brand_awareness_2",d:"M15.577 10.625H13.8142C13.6368 10.625 13.4883 10.5652 13.3687 10.4455C13.249 10.3259 13.1892 10.1774 13.1892 10C13.1892 9.82269 13.249 9.67419 13.3687 9.55454C13.4883 9.43489 13.6368 9.37506 13.8142 9.37506H15.577C15.7543 9.37506 15.9028 9.43489 16.0225 9.55454C16.1421 9.67419 16.202 9.82269 16.202 10C16.202 10.1774 16.1421 10.3259 16.0225 10.4455C15.9028 10.5652 15.7543 10.625 15.577 10.625ZM12.1106 13.9279C12.2175 13.7816 12.354 13.6972 12.5201 13.6747C12.6862 13.6523 12.8425 13.6945 12.9888 13.8013L14.3943 14.8574C14.5406 14.9642 14.625 15.1007 14.6475 15.2669C14.6699 15.433 14.6277 15.5892 14.5209 15.7356C14.4141 15.882 14.2776 15.9664 14.1114 15.9888C13.9453 16.0112 13.7891 15.969 13.6427 15.8622L12.2372 14.8061C12.0909 14.6993 12.0065 14.5628 11.9841 14.3967C11.9616 14.2305 12.0038 14.0743 12.1106 13.9279ZM14.3622 5.1106L12.9568 6.16671C12.8104 6.27354 12.6542 6.31574 12.488 6.29331C12.3219 6.27087 12.1854 6.18646 12.0786 6.0401C11.9718 5.89374 11.9296 5.7375 11.952 5.57137C11.9744 5.40525 12.0588 5.26876 12.2052 5.16192L13.6106 4.10583C13.757 3.999 13.9133 3.9568 14.0794 3.97923C14.2455 4.00166 14.382 4.08606 14.4888 4.23244C14.5957 4.3788 14.6379 4.53504 14.6154 4.70116C14.593 4.86729 14.5086 5.00377 14.3622 5.1106ZM6.05778 12.0834H3.71805C3.5033 12.0834 3.32408 12.0115 3.18039 11.8678C3.03669 11.7241 2.96484 11.5449 2.96484 11.3301V8.66994C2.96484 8.4552 3.03669 8.27599 3.18039 8.13229C3.32408 7.98858 3.5033 7.91673 3.71805 7.91673H6.05778L8.55134 5.42317C8.75114 5.22339 8.9811 5.17771 9.24124 5.28614C9.50138 5.39459 9.63145 5.5909 9.63145 5.87508V14.125C9.63145 14.4092 9.50138 14.6055 9.24124 14.7139C8.9811 14.8224 8.75114 14.7767 8.55134 14.5769L6.05778 12.0834Z",fill:"currentColor"})})]})}),_g=({trend:e,onClose:n,selectTrending:r})=>{var S,M;const[i,o]=F.useState(!1),{close:a}=Ir("briefDescription"),{currentPlayingAudio:l,setCurrentPlayingAudio:d}=$e(j=>j),m=F.useRef(null),p=()=>r(e.name),g=F.useCallback(()=>{n(),a()},[n,a]),y=()=>{m.current&&(i?m.current.pause():m.current.play(),o(!i))},w=()=>{var O,P,A;const j=!((O=l==null?void 0:l.current)!=null&&O.paused);j&&((P=l==null?void 0:l.current)==null||P.pause(),d(null)),(((A=l==null?void 0:l.current)==null?void 0:A.src)!==e.audio_EN||!j)&&y()};F.useEffect(()=>{const j=m.current,O=()=>{o(!1),d(null)};return j&&j.addEventListener("ended",O),()=>{j&&j.removeEventListener("ended",O)}},[d]);const x=((S=l==null?void 0:l.current)==null?void 0:S.src)===e.audio_EN&&!((M=l==null?void 0:l.current)!=null&&M.paused)||i;return c.jsxs(Dh,{"data-testid":"brief-description-modal",id:"briefDescription",kind:"regular",noWrap:!0,onClose:g,preventOutsideClose:!0,children:[e.audio_EN?c.jsxs(c.Fragment,{children:[c.jsxs(Tg,{children:[c.jsx(Hs,{className:yt("default",{play:x}),onClick:w,size:"small",startIcon:x?c.jsx(Wn,{}):c.jsx(bg,{}),children:x?"Pause":"Listen"}),c.jsx(Hs,{className:"default",onClick:p,size:"small",startIcon:c.jsx(Vc,{}),children:"Learn More"})]}),c.jsx(jg,{ref:m,src:e.audio_EN,children:c.jsx("track",{kind:"captions"})})]}):null,c.jsxs(C,{mt:75,children:[c.jsx(Cg,{children:e.tldr_topic??e.name}),c.jsx(Sg,{children:c.jsx(C,{children:c.jsx(vg,{children:e.tldr&&c.jsx(wg,{children:e.tldr})})})})]})]})},Sg=T.div`
  max-height: 310px;
  overflow-y: auto;
  margin: 8px 0;
  padding: 0 20px;
`,vg=T(ye)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,Cg=T(ye)`
  font-weight: 600;
  font-size: 20px;
  padding: 0 20px;
`,jg=T.audio`
  display: none;
`,Hs=T(Be)`
  && {
    &.default {
      font-size: 13px;
      font-weight: 500;
      font-family: Barlow;
      padding: 12px, 16px, 12px, 10px;
      color: ${v.white};

      &:hover {
        color: ${v.GRAY3};
      }

      &.play {
        color: ${v.BG3};
        background-color: ${v.white};
      }
    }
  }
`,Tg=T(C)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${v.BG3};
  gap: 10px;
`,Mg=["Drivechain","Ordinals","L402","Nostr","AI"],Dg=({onSubmit:e})=>{var G;const{open:n}=Ir("addContent"),[r,i]=F.useState(!1),[o,a]=F.useState(!1),[l,d]=F.useState(null),m=F.useRef(null),[p,g]=F.useState(0),[y,w]=F.useState(!1),{currentPlayingAudio:x,setCurrentPlayingAudio:S}=$e(R=>R),{open:M}=Ir("briefDescription"),{trendingTopics:j,setTrendingTopics:O}=Ge(R=>R),{setValue:P}=Qs(),A=F.useCallback(async()=>{i(!0),a(!1),g(0),w(!1),S(null);try{const R=await Gp();if(R.length&&Array.isArray(R)){const N=new Map(R.map(se=>[se.name,se])),Q=Array.from(N.values());O(Q)}}catch{O(Mg.map(N=>({name:N,count:0})))}finally{i(!1)}},[S,O]);F.useEffect(()=>{j.length||A()},[A,j.length]),F.useEffect(()=>{const R=setTimeout(()=>{a(!0)},5e3);return()=>clearTimeout(R)},[a,r]);const W=R=>{P("search",R),e==null||e()},U=(R,N)=>{R.stopPropagation(),R.currentTarget.blur(),N!=null&&N.tldr&&(d(N),M())},I=()=>{d(null)},Z=R=>{R.stopPropagation(),R.currentTarget.blur(),w(!y),S(m)};F.useEffect(()=>{var R,N;y?(R=m.current)==null||R.play():(N=m.current)==null||N.pause()},[p,y]),F.useEffect(()=>{x||w(!1)},[x]);const ee=()=>{g(R=>{var Q,se;let N=(R+1)%j.length;for(;N!==R&&!((Q=j[N])!=null&&Q.audio_EN);)N=(N+1)%j.length;return N===R?(w(!1),N):((se=m.current)==null||se.load(),N===0&&(w(!1),g(0)),N)}),S(m)},re=r?"Loading":"No new trending topics in the last 24 hours";return c.jsxs(Og,{"data-testid":"trending-component",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"heading-container",children:[c.jsxs("div",{className:"heading",children:[c.jsx("span",{className:"heading__title",children:"Trending Topics"}),c.jsx("span",{className:"heading__icon",children:r?c.jsx(Ur,{color:v.white,size:16}):c.jsx(c.Fragment,{children:o?c.jsx(Ig,{onClick:A,size:"small",startIcon:c.jsx(Up,{})}):c.jsx(Vp,{})})})]}),Oh(j)?c.jsxs("div",{children:[c.jsx(Be,{onClick:R=>Z(R),startIcon:y?c.jsx(Wn,{}):c.jsx(Wr,{}),children:y?"Pause":"Play All"}),c.jsx(Lg,{ref:m,onEnded:ee,src:(G=j[p])==null?void 0:G.audio_EN,children:c.jsx("track",{kind:"captions"})})]}):null]}),j.length===0?c.jsxs("div",{className:"trending-empty",children:[c.jsx(Pg,{children:re}),c.jsx(Be,{color:"secondary",disabled:r,onClick:n,size:"medium",startIcon:c.jsx(to,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):c.jsx("ul",{className:"list",children:j.map((R,N)=>c.jsxs(C,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>W(R.name),children:[c.jsxs(Eg,{children:[c.jsx(Rg,{children:c.jsx(Wp,{})}),c.jsx("span",{className:"tldr",children:Ph(R)})]}),R.tldr&&c.jsx(Ag,{className:yt({isPlaying:p===N&&y}),onClick:Q=>U(Q,R),children:"TLDR"})]},R.name))})]}),l&&c.jsx(_g,{onClose:I,selectTrending:W,trend:l})]})},Eg=T.div`
  display: flex;
  align-items: center;
  width: 300px;

  span.tldr {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    letter-spacing: 0.3pt;
  }
`,Og=T(C)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
    display: flex;
    align-items: center;
    color: ${v.GRAY6};
    padding-right: 24px;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    &__icon {
      margin-left: 16px;
      font-size: 23px;
      height: 24px;
    }
  }
  .trending-empty {
    padding: 0 24px;
    color: ${v.GRAY6};
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${v.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${v.SECONDARY_BLUE};
      }
      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${v.PRIMARY_BLUE};
      }
    }
  }
`,Pg=T.p`
  color: ${v.GRAY6};
  margin-bottom: 20px;
`,Ig=T(Be)`
  && {
    min-width: 28px;
    width: 28px;
    padding: 0;
    height: 28px;
    .MuiButton-startIcon {
      color: ${v.white};
      margin: auto;
      display: flex;
      align-items: center;
    }
  }
`,Ag=T(Be)`
  && {
    &.isPlaying {
      font-weight: 700;
      color: ${v.BG1};
      background-color: ${v.white};
    }
  }
`,Rg=T.span`
  justify-content: center;
  align-items: center;
  color: ${v.GRAY6};
  margin-right: 4px;
`,Lg=T.audio`
  height: 0;
  width: 0;
`,zg=390,Ng=F.forwardRef(({onSubmit:e,subViewOpen:n},r)=>{const{isFetching:i,setTeachMe:o,setSidebarFilter:a,setSelectedNode:l}=Ge(V=>V),d=Vs(),{setSidebarOpen:m,currentSearch:p,clearSearch:g,searchFormValue:y}=$e(V=>V),[w]=Zi(V=>[V.trendingTopicsFeatureFlag]),[x]=Zi(V=>[V.searchFilteringFeatureFlag]),{setValue:S,watch:M}=Qs(),j=F.useRef(null),[O,P]=F.useState(!1),[A,W]=F.useState(!1),[U,I]=F.useState(null),[Z,ee]=F.useState([]),[re,G]=F.useState([]),[R,N]=F.useState(!1);F.useEffect(()=>{S("search",y)},[S,y]),F.useEffect(()=>{const V=j.current;if(!V)return;const ae=()=>{P((V==null?void 0:V.scrollTop)>0)};V.addEventListener("scroll",ae)},[]);const Q=M("search");F.useEffect(()=>{(async()=>{try{const ae=await Hc();ee(ae.schemas)}catch(ae){console.error("Error fetching schema:",ae)}})()},[]);const se=V=>{I(A?null:V.currentTarget),W(ae=>!ae),G([]),N(!1)};return c.jsxs(Bg,{ref:r,id:"sidebar-wrapper",children:[c.jsx(Gg,{}),c.jsxs(na,{className:yt({"has-shadow":O}),children:[c.jsxs(Zg,{children:[c.jsxs($g,{children:[c.jsx(ph,{onSubmit:e}),c.jsx(Wg,{"data-testid":"search_action_icon",onClick:()=>{if(p){S("search",""),g(),a("all"),l(null);return}Q.trim()!==""&&(e==null||e())},children:i?c.jsx(Ur,{color:v.SECONDARY_BLUE,"data-testid":"loader",size:"20"}):c.jsx(c.Fragment,{children:p!=null&&p.trim()?c.jsx(qs,{}):c.jsx(Gc,{})})})]}),x&&c.jsx(Qg,{"data-testid":"search_filter_icon",isFilterOpen:A,onClick:se,children:A?c.jsx(nd,{}):c.jsx(rd,{})}),x&&c.jsx(Yh,{anchorEl:U,schemaAll:Z,selectedTypes:re,setAnchorEl:I,setIsFilterOpen:W,setSelectedTypes:G,setShowAllSchemas:N,showAllSchemas:R})]}),p&&c.jsx(Hg,{children:i?c.jsx(id,{}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"left",children:[c.jsx("span",{className:"count",children:d.length}),c.jsx("span",{className:"label",children:" results"})]}),c.jsx("div",{className:"right",style:{alignItems:"center"},children:c.jsx(Lh,{})})]})})]}),!n&&c.jsx(Ug,{onClick:()=>{m(!1),o(!1)},children:c.jsx(ao,{})}),c.jsxs(Vg,{ref:j,children:[!p&&w&&c.jsx(qg,{children:c.jsx(Dg,{onSubmit:e})}),c.jsx(C,{children:i?c.jsx(Ad,{}):c.jsx(Od,{isSearchResult:!!p})})]})]})}),Fg=["topic","person","guest","event","organization","place","project","software"],Yg=({onSubmit:e})=>{const{sidebarIsOpen:n}=$e(a=>a),r=qe(),i=!!r&&n&&!Fg.includes(r.node_type),{showTeachMe:o}=Ge(a=>a);return c.jsxs(c.Fragment,{children:[c.jsx(qr,{direction:"right",in:n,mountOnEnter:!0,unmountOnExit:!0,children:c.jsx(Ng,{onSubmit:e,subViewOpen:i})}),c.jsx(zp,{open:i||!!o}),!n&&c.jsx($p,{})]})},Bg=T(C)(({theme:e})=>({position:"relative",background:v.BG1,height:"100vh",width:"100%",zIndex:30,[e.breakpoints.up("sm")]:{width:zg}})),na=T(C).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:e})=>({padding:e.spacing(3.75,2),[e.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:v.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),$g=T(C).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,Hg=T(C).attrs({direction:"row",justify:"space-between",align:"center"})`
  flex-grow: 1;
  color: ${v.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
  padding: 0 8px;
  .count {
    color: ${v.white};
  }

  .right {
    display: flex;
  }
`,Wg=T(C).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${v.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${v.gray200}; */
  }

  ${na} input:focus + & {
    color: ${v.primaryBlue};
  }
`,Ug=T(C).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:v.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:v.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:v.BG1_HOVER},"&:active":{backgroundColor:v.BG1_PRESS,color:v.GRAY6}})),Vg=T(C)(()=>({overflow:"auto",flex:1,width:"100%"})),Gg=T(C)`
  height: 64px;
  background: ${v.BG2};
`,qg=T(C)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`,Zg=T(C)`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
`,Qg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  margin: 1px 2px 0 0;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  background-color: ${({isFilterOpen:e})=>e?v.white:"transparent"};

  &:hover {
    background-color: ${({isFilterOpen:e})=>e?"rgba(255, 255, 255, 0.85)":"rgba(255, 255, 255, 0.2)"};
  }

  svg {
    width: 15px;
    height: ${({isFilterOpen:e})=>e?"11px":"24px"};
    color: ${({isFilterOpen:e})=>e?v.black:v.GRAY7};
    fill: none;
  }
`;Yg.displayName="Sidebar";export{zg as MENU_WIDTH,Yg as SideBar};
