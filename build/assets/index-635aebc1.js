import{aM as _i,r as P,f as b,h as y,i as fe,j as s,l as Ie,F as w,N as hr,T as K,U as Ht,k as he,aN as dr,aO as Pi,y as fr,o as Ai,V as zi,a5 as xe,aP as xn,a3 as Li,aQ as mn,ae as Bi,B as At,J as gn,aR as Mi}from"./index-d939ea8c.js";import{l as Oi,m as gt,b as xr,B as pe,A as be,d as Ri,I as mr,f as ut,g as qe,P as Vt,n as ct,C as Ut,o as Fi,i as gr,S as Di}from"./react-toastify.esm-cf8782e0.js";import{C as yr}from"./CheckIcon-299d14a4.js";import{C as wr}from"./ChevronDownIcon-711ae1f1.js";import{C as $i}from"./ChevronUpIcon-a78de6a1.js";import{F as br,a as kr,T as Ni}from"./Popover-144bfca7.js";import{P as Cr}from"./PlusIcon-46d7f62d.js";import{G as jr,L as Gt,B as Yt,H as Hi,M as Vi,p as Ui,R as Gi,a as Yi,S as Wi,b as qi,N as Sr,C as Qi,D as Wt,c as vr,d as Zi,f as Xi,g as Er,e as Ki,P as Ji,h as Tr,s as yn,V as eo,F as to,E as no,i as ro,j as io,k as Ir,l as oo}from"./ChevronRightIcon-c782357b.js";import{S as lo}from"./index-3cbc9bcb.js";import{f as it,o as _r,P as Pr,n as so,X as ao,Y as uo,T as co,D as po,S as qt,q as Ar}from"./generateCategoricalChart-3c01134b.js";import{T as $e,I as ho,S as fo,O as xo}from"./index-e0c3cdc4.js";import{S as mo}from"./Skeleton-f6b1c089.js";import{f as go,c as yo,g as wo,h as bo}from"./index.esm-289835b5.js";import{I as ko}from"./InfoIcon-d7130bbb.js";import{B as Co}from"./index-7bef8ad5.js";import"./useSlotProps-e80d3e5c.js";const jo=(e,t="down")=>{const n=_i(),[r,i]=P.useState(!1),o=n.breakpoints[t](e).split("@media")[1].trim();return P.useEffect(()=>{const l=()=>{const{matches:a}=window.matchMedia(o);i(a)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[o]),r},So=e=>e.filter(t=>t.tldr).length>=2&&e.some(t=>t.audio_EN);function vo(e){return e.tldr_topic??e.name}var ot=globalThis&&globalThis.__assign||function(){return ot=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ot.apply(this,arguments)},Eo=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},To=Oi("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function Io(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?"#000000":r,o=e.speedMultiplier,l=o===void 0?1:o,a=e.cssOverride,c=a===void 0?{}:a,u=e.size,h=u===void 0?15:u,d=e.margin,f=d===void 0?2:d,p=Eo(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),g=ot({display:"inherit"},c),k=function(T){return{display:"inline-block",backgroundColor:i,width:gt(h),height:gt(h),margin:gt(f),borderRadius:"100%",animation:"".concat(To," ").concat(.7/l,"s ").concat(T%2?"0s":"".concat(.35/l,"s")," infinite linear"),animationFillMode:"both"}};return n?P.createElement("span",ot({style:g},p),P.createElement("span",{style:k(1)}),P.createElement("span",{style:k(2)}),P.createElement("span",{style:k(3)})):null}const _o=()=>{var d;const[e,t]=P.useState(null),{sidebarFilter:n,setSidebarFilter:r,sidebarFilterCounts:i}=fe(f=>f),o=n==="undefined"?"":n.toLowerCase(),l=((d=i.find(f=>f.name===o))==null?void 0:d.count)||0,a=f=>f?f.charAt(0).toUpperCase()+f.slice(1):"",c=f=>{t(f.currentTarget)},u=()=>{t(null)},h=f=>{r(f),u()};return s.jsxs("div",{children:[s.jsxs(Po,{onClick:c,children:[s.jsx("div",{className:"text",children:"Show"}),s.jsx("div",{className:"value","data-testid":"value",children:`${a(o)} (${l})`}),s.jsx("div",{className:"icon",children:e?s.jsx($i,{}):s.jsx(wr,{})})]}),s.jsx(zo,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:u,open:!!e,transformOrigin:{vertical:"top",horizontal:"left"},children:s.jsx(br,{children:i.filter(({name:f})=>f).map(({name:f,count:p})=>s.jsxs(Ao,{className:Ie({active:f===n}),onClick:g=>{g.preventDefault(),h(f)},children:[s.jsx("span",{className:"icon",children:f===n?s.jsx(yr,{}):null}),s.jsx("span",{children:`${a(f)} (${p})`})]},f))})})]})},Po=b(w).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${y.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${y.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,Ao=b(w).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${y.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${y.white};
  }
  &:hover {
    color: ${y.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,zo=b(kr)`
  .MuiPaper-root {
    background: ${y.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${y.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Lo=({showAllSchemas:e,setShowAllSchemas:t,setSelectedTypes:n,setIsFilterOpen:r,setAnchorEl:i,selectedTypes:o,schemaAll:l,anchorEl:a})=>{const c=f=>{n(p=>p.includes(f)?p.filter(g=>g!==f):[...p,f])},u=async()=>{n([])},h=async()=>{const f="graph/search",p=new URLSearchParams({node_type:o.join(",")});try{await hr.get(`/${f}?${p.toString()}`)}catch(g){console.warn(g)}},d=()=>{t(!0)};return s.jsxs(Bo,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:200,left:0},onClose:()=>{i(null),r(!1)},open:!!a,PaperProps:{style:{marginTop:"13px",marginLeft:"30px"}},transformOrigin:{vertical:"top",horizontal:"right"},children:[s.jsxs(Mo,{children:[s.jsx("div",{children:"Type"}),s.jsxs(Oo,{children:[s.jsx(Ro,{children:o.length}),s.jsx(Fo,{children:"Selected"})]})]}),s.jsxs(Do,{children:[s.jsx(Vo,{children:(e?l:l.slice(0,15)).map(f=>s.jsx(Uo,{isSelected:o.includes(f.type),onClick:()=>c(f==null?void 0:f.type),children:f.type},f.type))}),!e&&l.length>15&&s.jsx(Go,{onClick:d,children:s.jsxs(Ho,{children:[s.jsx(Cr,{})," View More"]})})]}),s.jsx(No,{}),s.jsx($o,{children:s.jsxs(w,{direction:"row",mb:6,children:[s.jsxs(Yo,{color:"secondary",onClick:u,size:"large",style:{marginRight:20},variant:"contained",children:[s.jsx(Wo,{children:s.jsx(xr,{})}),"Clear"]}),s.jsx(qo,{color:"secondary",onClick:h,size:"large",variant:"contained",children:"Show Results"})]})})]})},Bo=b(kr)`
  .MuiPaper-root {
    background: ${y.BG2};
    padding: 16px;
    min-width: 360px;
    color: ${y.white};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 9px;
    max-width: 361px;
    border: 1px solid ${y.black};
  }
`,Mo=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  font-family: Barlow;
  font-size: 18px;
  font-weight: 500;
`,Oo=b.div`
  font-size: 13px;
  display: flex;
  align-items: center;
`,Ro=b.span`
  color: ${y.white};
`,Fo=b.span`
  color: ${y.GRAY3};
  margin-left: 4px;
`,Do=b.div`
  padding: 13px 0;
  position: relative;
`,$o=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`,No=b.div`
  border: 1px solid ${y.black};
  width: calc(100% + 32px);
  margin: 13px -16px;
`,Ho=b.span`
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
`,Vo=b(w).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  flex-wrap: wrap;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
  margin-right: calc(0px - 16px);
`,Uo=b(w).attrs({align:"center",direction:"row",justify:"flex-start"})`
  color: ${({isSelected:e})=>e?y.black:y.white};
  background: ${({isSelected:e})=>e?y.white:y.BUTTON1_PRESS};
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
    background: ${({isSelected:e})=>e?y.white:y.BUTTON1_PRESS};
  }

  &:active {
    background: ${y.white};
    color: ${y.black};
  }
`,Go=b.button`
  background: transparent;
  color: ${y.white};
  border: none;
  padding: 6px 12px 6px 3px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 4px;
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background: ${y.BUTTON1_HOVER};
  }

  &:active {
    background: ${y.BUTTON1_PRESS};
  }
`,Yo=b(pe)`
  && {
    color: ${y.white};
    background-color: ${y.BUTTON1};
    padding-left: 4px;
    &:hover,
    &:active,
    &:focus {
      color: rgba(255, 255, 255, 0.85);
      background-color: ${y.BUTTON1};
    }
  }
`,Wo=b.span`
  svg {
    width: 32px;
    height: 32px;
    color: ${y.GRAY7};
    fill: none;
    margin-top: 2px;
  }
`,qo=b(pe)`
  && {
    flex: 1;
    padding: 2px 55px;
  }
`,Qo=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M5.99995 7.22422L1.71245 11.5117C1.55203 11.6721 1.34787 11.7523 1.09995 11.7523C0.852035 11.7523 0.647868 11.6721 0.487451 11.5117C0.327035 11.3513 0.246826 11.1471 0.246826 10.8992C0.246826 10.6513 0.327035 10.4471 0.487451 10.2867L4.77495 5.99922L0.487451 1.71172C0.327035 1.5513 0.246826 1.34714 0.246826 1.09922C0.246826 0.851302 0.327035 0.647135 0.487451 0.486719C0.647868 0.326302 0.852035 0.246094 1.09995 0.246094C1.34787 0.246094 1.55203 0.326302 1.71245 0.486719L5.99995 4.77422L10.2875 0.486719C10.4479 0.326302 10.652 0.246094 10.9 0.246094C11.1479 0.246094 11.352 0.326302 11.5125 0.486719C11.6729 0.647135 11.7531 0.851302 11.7531 1.09922C11.7531 1.34714 11.6729 1.5513 11.5125 1.71172L7.22495 5.99922L11.5125 10.2867C11.6729 10.4471 11.7531 10.6513 11.7531 10.8992C11.7531 11.1471 11.6729 11.3513 11.5125 11.5117C11.352 11.6721 11.1479 11.7523 10.9 11.7523C10.652 11.7523 10.4479 11.6721 10.2875 11.5117L5.99995 7.22422Z",fill:"currentColor"})}),Zo=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M7.38474 15.5C7.13341 15.5 6.92316 15.4153 6.75399 15.246C6.58466 15.0768 6.49999 14.8666 6.49999 14.6152V8.827L0.901988 1.7155C0.709655 1.459 0.681738 1.19233 0.818238 0.9155C0.954905 0.6385 1.18541 0.5 1.50974 0.5H14.4902C14.8146 0.5 15.0451 0.6385 15.1817 0.9155C15.3182 1.19233 15.2903 1.459 15.098 1.7155L9.49999 8.827V14.6152C9.49999 14.8666 9.41532 15.0768 9.24599 15.246C9.07682 15.4153 8.86657 15.5 8.61524 15.5H7.38474Z",fill:"currentColor"})}),yt=[["Searching","Podcast Index"],["Finding","Transcripts"],["Loading","Audio Clips"],["Loading","Video Clips"],["Preparing","Results"]],Xo=()=>{const[e,t]=P.useState(0);return P.useEffect(()=>{if(e===yt.length-1)return;const n=setTimeout(()=>t(r=>(r+1)%yt.length),2e3);return()=>clearTimeout(n)},[e]),s.jsx(Ko,{direction:"column",children:yt.map((n,r)=>s.jsxs(w,{className:Ie("raw-wrapper",{show:e===r}),direction:"row",children:[s.jsx("div",{className:Ie("action"),children:n[0]}),s.jsx("div",{className:Ie("entity"),children:n[1]}),s.jsx("div",{children:s.jsx(Io,{color:y.SECONDARY_BLUE,size:2})})]},n[1]))})},Ko=b(w)`
  overflow: hidden;
  height: 20px;
  position: relative;
  .action {
    color: ${y.white};
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
    color: ${y.SECONDARY_BLUE};
  }
`,Jo=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"browse_gallery",children:[s.jsx("mask",{id:"mask0_1360_27257",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1360_27257)",children:s.jsx("path",{id:"browse_gallery_2",d:"M11.8 15.8442L12.8442 14.8L9.74998 11.7026V7.25003H8.25003V12.2942L11.8 15.8442ZM18 19.9615V18.3C19.2333 17.7167 20.2083 16.8583 20.925 15.725C21.6417 14.5917 22 13.35 22 12C22 10.65 21.6417 9.40834 20.925 8.27501C20.2083 7.14167 19.2333 6.28334 18 5.70001V4.03851C19.6628 4.67184 20.9952 5.71318 21.9971 7.16253C22.999 8.61188 23.5 10.2244 23.5 12C23.5 13.7756 22.999 15.3881 21.9971 16.8375C20.9952 18.2868 19.6628 19.3282 18 19.9615ZM9.00055 20.5C7.8207 20.5 6.71539 20.2769 5.68463 19.8307C4.65386 19.3846 3.75514 18.7782 2.98848 18.0115C2.22181 17.2449 1.61541 16.3463 1.16927 15.3159C0.723092 14.2855 0.5 13.1804 0.5 12.0006C0.5 10.8207 0.723083 9.7154 1.16925 8.68463C1.6154 7.65386 2.2218 6.75515 2.98845 5.98848C3.75512 5.22183 4.65365 4.61543 5.68405 4.16928C6.71445 3.72311 7.81957 3.50003 8.99942 3.50003C10.1793 3.50003 11.2846 3.72311 12.3154 4.16928C13.3461 4.61543 14.2448 5.22183 15.0115 5.98848C15.7782 6.75515 16.3846 7.65368 16.8307 8.68408C17.2769 9.71448 17.5 10.8196 17.5 11.9995C17.5 13.1793 17.2769 14.2846 16.8307 15.3154C16.3846 16.3461 15.7782 17.2449 15.0115 18.0115C14.2448 18.7782 13.3463 19.3846 12.3159 19.8307C11.2855 20.2769 10.1804 20.5 9.00055 20.5ZM9 19C10.95 19 12.6042 18.3208 13.9625 16.9625C15.3208 15.6042 16 13.95 16 12C16 10.05 15.3208 8.39584 13.9625 7.03751C12.6042 5.67917 10.95 5.00001 9 5.00001C7.05 5.00001 5.39583 5.67917 4.0375 7.03751C2.67917 8.39584 2 10.05 2 12C2 13.95 2.67917 15.6042 4.0375 16.9625C5.39583 18.3208 7.05 19 9 19Z",fill:"currentColor"})})]})}),el=e=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("mask",{id:"mask0_2638_2680",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_2638_2680)",children:s.jsx("path",{d:"M9.99732 16C9.90858 16 9.82421 15.985 9.74419 15.9551C9.66418 15.9252 9.5909 15.8765 9.52435 15.8091L6.18835 12.4277C6.06278 12.3004 6 12.1406 6 11.9483C6 11.7559 6.06278 11.5961 6.18835 11.4689C6.32145 11.3315 6.48099 11.2648 6.66697 11.2686C6.85295 11.2724 7.00873 11.3392 7.13429 11.4689L9.32114 13.674V4.68539C9.32114 4.49306 9.3864 4.33074 9.51692 4.19845C9.64744 4.06615 9.80758 4 9.99732 4C10.1871 4 10.3472 4.06615 10.4777 4.19845C10.6082 4.33074 10.6735 4.49306 10.6735 4.68539V13.674L12.849 11.4689C12.9845 11.3315 13.1447 11.2629 13.3294 11.2629C13.5143 11.2629 13.6744 11.3315 13.8099 11.4689C13.9378 11.6062 14.0012 11.7685 14 11.9558C13.9988 12.1431 13.9354 12.3004 13.8099 12.4277L10.4738 15.8091C10.4073 15.8765 10.3334 15.9252 10.2522 15.9551C10.171 15.985 10.0861 16 9.99732 16Z",fill:"currentColor"})})]}),tl=b(w)`
  overflow-y: auto;
  overflow-x: hidden;
  background: ${y.body};
`,nl=({imageUrl:e,name:t})=>s.jsxs(w,{align:"center",direction:"row",children:[e&&s.jsx(rl,{children:s.jsx(be,{rounded:!0,size:64,src:e||"",type:"image"})}),t&&s.jsx(il,{children:t})]}),rl=b(w)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,il=b(w)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,ol=({text:e,type:t,sourceLink:n})=>s.jsxs(w,{direction:"column",children:[s.jsx(w,{align:"center",direction:"row",children:s.jsx($e,{type:t})}),s.jsx(zt,{"data-testid":"episode-description",children:e}),s.jsx(w,{align:"center",direction:"row",justify:"flex-start",children:n&&s.jsxs(ll,{href:n,onClick:r=>r.stopPropagation(),target:"_blank",children:[s.jsx(jr,{}),s.jsx(sl,{children:n})]})})]}),ll=b.a`
  color: ${y.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,sl=b(K)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${y.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,al=({title:e,imageUrl:t,name:n})=>s.jsxs(w,{align:"center",direction:"row",children:[s.jsx(ul,{children:s.jsx(be,{rounded:!0,size:64,src:t||"",type:"person"})}),(e||n)&&s.jsx(cl,{children:e||n})]}),ul=b(w)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,cl=b(w)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,pl=({text:e,imageUrl:t,date:n,twitterHandle:r,name:i,verified:o})=>s.jsxs(w,{direction:"column",children:[s.jsxs(w,{align:"center",direction:"row",pr:16,children:[s.jsx(hl,{children:s.jsx(be,{rounded:!0,size:27,src:t||"",type:"person"})}),s.jsxs(w,{children:[s.jsxs(dl,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),r&&s.jsxs(fl,{children:["@",r]})]})]}),s.jsxs(w,{grow:1,shrink:1,children:[s.jsx(xl,{"data-testid":"episode-description",children:e}),s.jsx(w,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!n&&s.jsx(pt,{children:Ht.unix(n).fromNow()})})]})]}),hl=b(w)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,dl=b(w)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
  .verification {
    margin-left: 4px;
  }
`,fl=b(w)`
  color: ${y.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,xl=b(w)`
  color: ${y.white};
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
`,ml=b(w).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${y.BG1};

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
`,zr=({boostCount:e,date:t,episodeTitle:n,isSelectedView:r=!1,imageUrl:i,showTitle:o,type:l,text:a,name:c,sourceLink:u,verified:h=!1,twitterHandle:d,className:f="episode-wrapper",onClick:p})=>{const g=l==="show"?o:n,k=l==="show"?"":o,T=["tweet","person","guest","topic","document"],S=l==="video"?"video":"audio";return l?s.jsx(ml,{className:f,onClick:p,children:T.includes(l)?s.jsxs(s.Fragment,{children:[l==="topic"&&s.jsxs(gl,{children:[s.jsx(Hi,{}),s.jsx("p",{children:k})]}),["person","guest"].includes(l)&&s.jsx(al,{imageUrl:i,name:c||"",title:o||""}),["image"].includes(l)&&s.jsx(nl,{imageUrl:u,name:c||""}),l==="tweet"&&s.jsx(pl,{date:t,imageUrl:i,name:c||"",text:a||"",twitterHandle:d,verified:h}),l==="document"&&s.jsx(ol,{sourceLink:u||"",text:a||"",type:l})]}):s.jsxs(w,{align:"center",direction:"row",justify:"center",children:[!r&&s.jsx(w,{align:"center",pr:16,children:s.jsx(be,{size:80,src:i||`${S}_default.svg`,type:l||""})}),s.jsxs(w,{grow:1,shrink:1,children:[s.jsxs(w,{align:"center",direction:"row",justify:"space-between",children:[s.jsx(w,{align:"center",direction:"row",children:l&&s.jsx($e,{type:l})}),l==="video"&&u?s.jsx(wl,{href:`${u}${u.includes("?")?"&":"?"}open=system`,onClick:C=>C.stopPropagation(),target:"_blank",children:s.jsx(Gt,{})}):null]}),c&&s.jsx(zt,{"data-testid":"episode-name",children:c}),s.jsx(zt,{"data-testid":"episode-description",children:g}),s.jsxs(w,{align:"center",direction:"row",justify:"flex-start",children:[!!t&&s.jsx(pt,{children:Ht.unix(t).fromNow()}),!!k&&s.jsx(yl,{children:k}),!r&&e>0&&s.jsx(w,{style:{marginLeft:"auto"},children:s.jsx(Yt,{amt:e})})]})]})]})}):null},zt=b(w)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: ${y.white};
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
`,pt=b(K)`
  overflow: hidden;
  color: ${y.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
  letter-spacing: 0.2pt;
`,gl=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    color: ${y.mainBottomIcons};
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
`,yl=b(pt)`
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
    background: ${y.GRAY6};
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
`,wl=b.a`
  color: ${y.GRAY6};
  font-size: 16px;
  height: 16px;
`,bl=({isSearchResult:e})=>{const t=P.useRef(null),n=e?80:10,{setSelectedNode:r,setSelectedTimestamp:i}=fe(L=>L),{currentSearch:o,setSidebarOpen:l,setRelevanceSelected:a}=he(L=>L),[c,u]=P.useState(0),[h,d]=P.useState(0),f=dr(),g=c*n+n,k=f&&f.length>0?f.length-1>g:!1,T=jo("sm","down"),S=P.useCallback(L=>{Pi(L),i(L),a(!0),r(L),T&&l(!1)},[r,a,l,i,T]),C=()=>{k&&(u(c+1),d(L=>L+1))},E=P.useMemo(()=>{if(f){const L=[...f].sort((B,v)=>(v.date||0)-(B.date||0));return o&&L.sort((B,v)=>{const F=B.node_type==="topic"&&B.name.toLowerCase()===o.toLowerCase()?1:0;return(v.node_type==="topic"&&v.name.toLowerCase()===o.toLowerCase()?1:0)-F}),L.slice(0,g)}return[]},[f,o,g]);return s.jsx(s.Fragment,{children:s.jsxs(tl,{ref:t,id:"search-result-list",shrink:1,children:[(E??[]).map((L,B)=>{const{image_url:v,date:F,boost:U,type:H,episode_title:D,show_title:_,node_type:A,text:N,source_link:G,link:M,name:q,verified:J=!1,twitter_handle:oe}=L||{};return s.jsx(zr,{boostCount:U||0,date:F||0,episodeTitle:it(D),imageUrl:v||"",link:M,name:q||"",onClick:()=>{S(L)},showTitle:it(_),sourceLink:G,text:N||"",twitterHandle:oe,type:A||H,verified:J},B.toString())}),s.jsx(Cl,{align:"center",background:"BG1",direction:"row",justify:"center",children:k&&s.jsx(pe,{onClick:C,size:"medium",children:"Load More"},h)})]})})},kl=P.memo(bl),Cl=b(w)`
  flex: 0 0 86px;
`,jl=({isSearchResult:e})=>{const{nodeCount:t,setNodeCount:n,setBudget:r}=fr(a=>a),{fetchData:i,setAbortRequests:o}=fe(a=>a),l=async()=>{t<1||(await i(r,o,{skip_cache:"true"}),n("CLEAR"))};return s.jsxs(El,{children:[!e&&s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Latest"}),s.jsx("span",{className:"heading__icon",children:s.jsx(Jo,{})})]}),t?s.jsx("div",{className:"button_container",children:s.jsx(Sl,{className:"button","data-testid":"see_latest_button",onClick:l,startIcon:s.jsx(el,{}),children:`See Latest (${t})`})}):null]}),s.jsx(kl,{isSearchResult:e})]})},Sl=b(pe)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${y.GRAY6};
    }
  }
`,vl=P.memo(jl),El=b(w)`
  .heading-container {
    display: flex;
    flex-direction: column;
    padding: 16px 24px 16px 24px;
  }

  .heading {
    color: ${y.GRAY6};
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
      color: ${y.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${y.SECONDARY_BLUE};
      }

      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${y.PRIMARY_BLUE};
      }
    }
  }
`,Tl=b(w).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${y.BG1};

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
`,Ke=b(mo)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,Il=()=>s.jsx(s.Fragment,{children:Array(7).fill(null).map((e,t)=>s.jsx(Tl,{children:s.jsxs(w,{direction:"row",children:[s.jsx(w,{align:"center",pr:16,children:s.jsx(Ke,{animation:"wave",height:64,variant:"rectangular",width:64})}),s.jsxs(w,{grow:1,shrink:1,children:[s.jsx(Ke,{height:10,variant:"rectangular",width:56}),s.jsx(Ke,{className:"title",height:10,variant:"rectangular",width:262}),s.jsx(Ke,{height:10,variant:"rectangular",width:149})]})]})},t))});b(w)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${y.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`;const _l=b(K)`
  overflow: hidden;
  color: ${y.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`;b(_l)`
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
    background: ${y.GRAY6};
  }
`;const Pl=48,Al=8,zl={PaperProps:{style:{maxHeight:Pl*4.5+Al,width:250}}},Ll=["Beginner","Intermediate","Advanced","Expert"],Bl=()=>{const e=fe(C=>C.data),[t,n]=P.useState(""),[r,i]=P.useState("Beginner"),o=he(C=>C.currentSearch),l=Ri(),[a]=fr(C=>[C.setBudget]),[c,u,h,d,f]=_r(C=>[C.askedQuestions,C.askedQuestionsAnswers,C.setAskedQuestion,C.setAskedQuestionAnswer,C.hasQuestionInProgress]),p=P.useCallback(C=>{d(C.answer)},[d]);P.useEffect(()=>{l&&p&&l.on("askquestionhook",p)},[p,l]);const g=async()=>{t&&(h(t),n(""));try{const C=e==null?void 0:e.nodes.filter(B=>B.text),E=C==null?void 0:C.slice(0,5),L=(E!=null&&E.length?E.map(B=>B.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,B=>`\\${B}`);o&&(await Ai.enable(),await Ui({expertise_level:r,question_text:t,search_term:o,transcripts:L},a),await zi(a))}catch(C){console.error(C)}},k=r&&t.trim()&&!f,T=C=>{i(C.target.value)},S=async C=>{if(f){C.preventDefault();return}C.keyCode===13&&C.shiftKey===!1&&k&&(C.preventDefault(),g())};return s.jsxs(Ml,{children:[s.jsx(w,{children:s.jsx(w,{children:s.jsxs(br,{component:"div",children:[s.jsx(Rl,{id:"select-label",size:"small",children:"Expertise level"}),s.jsx(Fl,{id:"demo-multiple-name",input:s.jsx(xo,{label:"Expertise level"}),labelId:"select-label",MenuProps:zl,onChange:T,size:"small",value:r,children:Ll.map(C=>s.jsx(Vi,{component:"li",value:C,children:C},C))})]})})}),s.jsx(Nl,{children:c==null?void 0:c.map((C,E)=>s.jsxs(w,{className:"response",py:12,children:[s.jsx(K,{kind:"medium",children:C}),s.jsx(w,{py:12,children:(u==null?void 0:u[E])!==void 0?s.jsx(K,{color:"unreadMsgText",children:u[E]}):s.jsxs(w,{align:"center",py:12,children:[s.jsx(w,{align:"center",py:12,children:s.jsx(Pr,{color:y.white})}),s.jsx(w,{align:"center",py:12,children:s.jsx(K,{children:"Generating response"})})]})})]},C))}),s.jsxs(Dl,{onKeyDown:S,py:12,tabIndex:-1,children:[s.jsx(Ol,{disabled:f,onChange:C=>n(C.target.value),placeholder:"Enter your question",value:t}),s.jsx($l,{children:s.jsx(go,{color:k?y.white:y.gray300,size:"18"})})]})]})},Ml=b.div`
  margin-top: 20px;
`,Ol=b(Ni)`
  background: ${y.inputBg1};
  max-width: 100%;
  color: ${y.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,Rl=b(ho)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${y.secondaryText4};
  }
`,Fl=b(fo)`
  .MuiInputBase-root {
    color: blue;
  }
  background: ${y.inputBg1};

  .MuiSvgIcon-root {
    color: ${y.white};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
    color: ${y.white};
  }
`,Dl=b(w)`
  position: relative;
`,$l=b(w)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,Nl=b(w)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${y.divider2};
  }
`,wn=({text:e})=>s.jsxs(w,{align:"center",justify:"center",py:12,children:[s.jsx(w,{align:"center",py:12,children:s.jsx(Pr,{color:y.white})}),s.jsx(w,{align:"center",py:12,children:s.jsx(K,{children:e})})]}),Hl=()=>{const[e,t,n,r]=_r(o=>[o.teachMeAnswer,o.hasTeachingInProgress,o.instgraphAnswser,o.hasInstagraphInProgress]),i=!r&&!!(n!=null&&n.edges)&&!!(n!=null&&n.nodes);return s.jsxs(s.Fragment,{children:[i?s.jsx(Gi,{edges:n==null?void 0:n.edges,nodes:n==null?void 0:n.nodes}):s.jsx(wn,{text:"Generating instagraph"}),t?s.jsx(wn,{text:"Generating tutorial"}):s.jsxs(s.Fragment,{children:[s.jsx(Vl,{children:s.jsx(K,{children:e})}),s.jsx(Bl,{})]})]})};b(pe)``;const Vl=b(w)`
  padding-left: 10px;
  padding-right: 10px;
`,Ul=({cx:e,cy:t})=>s.jsx(po,{cx:e,cy:t,fill:y.blueTextAccent,r:2}),Gl=()=>{const e=xe(),t=[...(e==null?void 0:e.data)||[]].sort((i,o)=>(i.year||0)-(o.year||0)),n=t.map(i=>i.year).filter(i=>i),r=t.map(i=>i.rate).filter(i=>i);return s.jsx(Yl,{direction:"column",px:24,py:16,children:s.jsx(Yi,{height:"100%",width:"100%",children:s.jsxs(Wi,{margin:{bottom:20,left:20,right:20,top:20},children:[s.jsx(so,{stroke:"#f5f5f5"}),s.jsx(ao,{dataKey:"year",domain:[Math.min(...n),Math.max(...n)],label:{fill:y.white,fontSize:"12px",offset:-10,position:"insideBottom",value:e.x_axis_name},name:"X",tick:{fill:y.white,fontSize:"8px"},type:"number"}),s.jsx(uo,{color:"#000",dataKey:"rate",domain:[Math.min(...r),Math.max(...r)],label:{angle:-90,fill:y.white,fontSize:"12px",offset:0,position:"insideLeft",value:e.y_axis_name},name:"Y",tick:{fill:y.white,fontSize:"8px"},type:"number"}),s.jsx(co,{cursor:{strokeDasharray:"3 3"}}),s.jsx(qi,{data:t,fill:y.blueTextAccent,line:!0,name:"A scatter",shape:s.jsx(Ul,{})})]})})})},Yl=b(w)`
  width: 100%;
  height: 100%;
`;function ht(e,t){if(!(t!=null&&t.trim()))return e;const n=new RegExp(`(${t})`,"gi"),r=e.split(n);return s.jsx(s.Fragment,{children:r.map((i,o)=>n.test(i)?s.jsx(Wl,{children:i},o):i)})}const Wl=b.span`
  background-color: rgba(0, 123, 255, 0.4);
  padding: 2;
  margin: 0;
  border-radius: 3px;
  color: inherit;
`,ql=({stateless:e,node:t,searchTerm:n})=>s.jsxs(w,{grow:1,shrink:1,children:[s.jsx(Zl,{children:e&&s.jsxs(Ql,{children:[s.jsx("div",{className:"icon",children:s.jsx(Sr,{})}),s.jsx("div",{className:"title",children:"Description"})]})}),s.jsx(K,{children:t!=null&&t.description?ht(t.description,n):"..."})]}),Ql=b(w).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${y.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${y.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,Zl=b(w).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Xl=b.span`
  color: ${y.white};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  text-align: right;

  &:hover {
    color: ${y.GRAY3};
  }
`,Kl=({stateless:e,node:t})=>{var g;const[n,r]=he(k=>[k.transcriptIsOpen,k.setTranscriptOpen]),[i,o]=P.useState(!1),[l,a]=P.useState(""),[c,u]=P.useState(!1);if(!e&&!n)return null;const h=async()=>{try{const k=await xn(t==null?void 0:t.ref_id);a(k.data.text)}catch(k){console.error("Error fetching full transcript",k)}},d=async()=>{if(l===""){const k=await xn(t==null?void 0:t.ref_id);p(k.data.text)}else p(l);setTimeout(()=>{o(!1)},2e3)},f=async()=>{c?u(!1):(await h(),u(!0))},p=k=>{k!==void 0&&(navigator.clipboard.writeText(k),o(!0))};return s.jsxs(w,{grow:1,shrink:1,children:[s.jsxs(es,{children:[e&&s.jsxs(Jl,{children:[s.jsx("div",{className:"icon",children:s.jsx(Sr,{})}),s.jsx("div",{className:"title",children:"Transcript"})]}),t!=null&&t.text?s.jsx(s.Fragment,{children:i?s.jsxs(rs,{align:"center",direction:"row",justify:"flex-start",children:[s.jsx("div",{className:"icon",children:s.jsx(yr,{})}),s.jsx("div",{className:"text",children:"Copied"})]}):s.jsx(pe,{endIcon:s.jsx(Qi,{}),onPointerDown:()=>d(),size:"small",variant:"outlined",children:"Copy"})}):s.jsx("div",{}),!e&&s.jsx(ts,{onClick:()=>{r(!1)},children:s.jsx(yo,{fontSize:35})})]}),s.jsxs(ns,{children:[c?l:`${(g=t==null?void 0:t.text)==null?void 0:g.substring(0,100)}`,s.jsxs(Xl,{onClick:f,children:["... ",c?"show less":"more"]})]})]})},Jl=b(w).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${y.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${y.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,es=b(w).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,ts=b(w).attrs({})`
  color: ${y.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${y.lightBlue500};
  }
`,ns=b(w)`
  color: ${y.white};
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,rs=b(w)`
  color: ${y.SECONDARY_BLUE};
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
`,Lr=({node:e})=>{const t=fe(k=>k.selectedNode),n=he(k=>k.currentSearch),{link:r,image_url:i,date:o,boost:l,node_type:a,type:c,id:u,show_title:h,episode_title:d,ref_id:f}=e||t||{},[p,g]=P.useState(l||0);return P.useEffect(()=>{g(l??0)},[l]),!e&&!t?null:s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(is,{children:[s.jsx(ls,{boostCount:p||0,date:o||0,episodeTitle:it(d),imageUrl:i,isSelectedView:!0,link:r,onClick:()=>null,showTitle:h,type:a||c}),s.jsx(wt,{}),s.jsxs(os,{children:[s.jsx(Yt,{amt:p}),s.jsx(vr,{content:e||t,count:p,refId:f,updateCount:g})]}),s.jsx(wt,{}),s.jsx(bn,{children:s.jsx(ql,{node:e||t,searchTerm:n,stateless:!0})}),((t==null?void 0:t.text)||(e==null?void 0:e.text))&&s.jsxs(s.Fragment,{children:[s.jsx(wt,{}),s.jsx(bn,{children:s.jsx(Kl,{node:e||t,stateless:!0},u)})]})]})})},is=b(w)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,os=b(w)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,bn=b(w)`
  padding: 18px 18px 18px;
`,ls=b(zr)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,wt=b(Wt)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,ss=b(w)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);

  .episode-title {
    font-size: 20px;
    font-weight: 600;
    color: ${y.white};
  }

  .show {
    cursor: pointer;
    &__title {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${y.white};
      margin-left: 8px;
    }
  }
`,as=({selectedNodeShow:e})=>{const[t,n]=fe(o=>[o.selectedNode,o.setSelectedNode]),{type:r}=t||{},i=he(o=>o.currentSearch);return s.jsxs(ss,{p:20,children:[s.jsx(w,{align:"flex-start",children:r&&s.jsx($e,{type:r})}),s.jsx(w,{direction:"row",mb:22,mt:22,children:s.jsx(w,{grow:1,shrink:1,children:s.jsx(K,{className:"episode-title",kind:"heading",children:ht((t==null?void 0:t.episode_title)||"Unknown",i)})})}),e?s.jsxs(w,{className:"show",direction:"row",onClick:()=>n(e),children:[s.jsx(be,{size:16,src:(e==null?void 0:e.image_url)||"",type:"show"}),s.jsx(K,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:e==null?void 0:e.show_title})]}):null]})},us="Flow 1",cs=0,ps=12,hs=15,ds={g:"LottieFiles Figma v45"},fs=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],xs="5.7.0",ms=60,gs=57.6,ys=0,ws=[],bs={nm:us,ddd:cs,h:ps,w:hs,meta:ds,layers:fs,v:xs,fr:ms,op:gs,ip:ys,assets:ws},ks=()=>{const e=P.useRef(null);return P.useEffect(()=>{const t=document.getElementById("lottie-timestamp-equalizer");return t&&(e.current=Li.loadAnimation({container:t,animationData:bs,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),s.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},Cs=b(w).attrs(()=>({direction:"row"}))`
  cursor: pointer;
  color: ${y.primaryText1};
  border-top: 1px solid ${y.black};
  background: ${e=>e.isSelected?"rgba(97, 138, 255, 0.1)":`${y.BG1}`};

  .play-pause {
    font-size: 24px;
    border-radius: 4px;
    color: ${y.GRAY7};
    cursor: pointer;
  }

  .info {
    margin-left: auto;
    color: ${y.GRAY7};
    font-size: 24px;
  }

  &:hover {
    .play-pause {
      color: ${y.white};
    }
  }
`,js=({onClick:e,timestamp:t,isSelected:n,setOpenClip:r})=>{const i=n?"blueTextAccent":"placeholderText";return n?(wo,y[i]):(bo,y[i]),s.jsxs(Cs,{align:"center","data-testid":"wrapper",direction:"row",isSelected:n,justify:"flex-start",onClick:e,px:20,py:20,children:[s.jsxs("div",{children:[s.jsx(mr,{className:"play-pause",children:n?s.jsx(ks,{}):s.jsx(Zi,{})}),!1]}),s.jsxs(Ss,{align:"flex-start",direction:"column",justify:"center",children:[t.timestamp&&s.jsx("span",{className:"timestamp",children:Xi(t.timestamp)}),s.jsx("span",{className:"title",children:it(t.show_title)})]}),s.jsx("div",{className:"info",children:s.jsx(w,{"data-testid":"info-icon-wrapper",onClick:()=>r(t),pt:4,children:s.jsx(ko,{})})})]})},Ss=b(w)`
  font-size: 13px;
  color: ${y.white};
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
    color: ${y.GRAY6};
  }
`,vs=b(w)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,Es=()=>{const e=xe(),t=Ar(),[n,r]=P.useState(null),[i,o]=P.useState(null),[l,a,c,u,h]=ut(g=>[g.playingNode,g.setPlayingNodeLink,g.setPlayingTime,g.setIsSeeking,g.playingTime]),d=P.useMemo(()=>Er((t==null?void 0:t.nodes)||[],e),[t==null?void 0:t.nodes,e]),f=P.useMemo(()=>t==null?void 0:t.nodes.find(g=>g.node_type==="show"&&g.show_title===(e==null?void 0:e.show_title)),[t==null?void 0:t.nodes,e]),p=P.useCallback(g=>{var T;const k=qe(((T=g==null?void 0:g.timestamp)==null?void 0:T.split("-")[0])||"00:00:01");(l&&g.link&&(l==null?void 0:l.link)!==g.link||(!l||(l==null?void 0:l.link)!==g.link)&&g.link!==void 0)&&(a(g.link),c(0),u(!0)),c(k),u(!0),o(g)},[l,a,u,o,c]);return P.useEffect(()=>{d!=null&&d.length&&!d.some(g=>g.ref_id===(i==null?void 0:i.ref_id))&&p(d[0])},[d,i,p]),P.useEffect(()=>{if(d!=null&&d.length){const g=d.find(k=>{if(!k.timestamp)return!1;const T=qe(k.timestamp.split("-")[0]);return Math.abs(T-h)<1});g&&g.ref_id!==(i==null?void 0:i.ref_id)&&o(g)}},[h,d,i]),e?s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(Is,{children:[n&&s.jsx(_s,{className:"slide-me",direction:"up",in:!!n,children:s.jsxs(Ts,{children:[s.jsx(w,{className:"close-info",onClick:()=>r(null),children:s.jsx(wr,{})}),n&&s.jsx(Lr,{node:n})]})}),s.jsx(as,{selectedNodeShow:f}),!!(d!=null&&d.length)&&s.jsx(vs,{children:s.jsx(w,{pb:20,children:d==null?void 0:d.map((g,k)=>s.jsx(js,{isSelected:(i==null?void 0:i.ref_id)===g.ref_id,onClick:()=>p(g),setOpenClip:r,timestamp:g},`${g.episode_title}_${k}`))})})]})}):null},Ts=b(w)`
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  .close-info {
    position: absolute;
    color: ${y.white};
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`,Is=b(w)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,_s=b(qt)`
  && {
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 16px;
    overflow: hidden;
    background: ${y.BG1};
    z-index: 1;
  }
`,Ps=()=>{const e=xe(),t=e==null?void 0:e.name;return s.jsxs(w,{direction:"column",px:24,py:16,children:[s.jsx(be,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.source_link)||"",type:"image"}),s.jsx(w,{py:20,children:s.jsx(K,{color:"primaryText1",kind:"bigHeading",children:t})})]})},As=()=>{const{sender_pic:e,sender_alias:t,date:n,message_content:r}=xe()||{};return s.jsxs(w,{direction:"row",children:[s.jsx(Bs,{src:e}),s.jsxs(zs,{children:[s.jsxs(w,{align:"flex-end",className:"info",direction:"row",children:[t&&s.jsx("span",{className:"info__name",children:t}),n&&s.jsx("span",{className:"info__date",children:n})]}),r&&s.jsx(Ls,{dangerouslySetInnerHTML:{__html:Ki(r)}})]})]})},zs=b(w)`
  color: ${y.black};
  border-radius: 8px;
  font-size: 20px;
  margin-left: 8px;
  flex: 1;

  .info__date {
    color: ${y.textMessages};
    font-size: 14px;
    margin-left: 8px;
  }

  .info__name {
    color: ${y.green400};
    font-size: 16px;
  }
`,Ls=b.div`
  background: ${y.white};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${y.white};
    position: absolute;
    left: -6px;
    top: 0;
  }

  .username {
    color: ${y.blueTextAccent};
  }

  a {
    color: ${y.blueTextAccent};
    text-decoration: none;
  }

  a:hover,
  a:visited {
    color: ${y.blueTextAccent};
    text-decoration: none;
  }
`,Bs=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,Ms=()=>{const e=xe(),t=(e==null?void 0:e.name)||(e==null?void 0:e.label);return s.jsxs(w,{direction:"row",px:24,py:16,children:[s.jsx(be,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.image_url)||"person_placeholder_img.png",type:"person"}),s.jsx(w,{p:20,children:s.jsx(K,{color:"primaryText1",kind:"bigHeading",children:t})})]})},Os=({node:e,onClick:t})=>{var i,o;const n=qe(e.timestamp||""),r=Math.ceil(n/60);return s.jsx(Rs,{onClick:t,p:20,children:s.jsxs("div",{children:[s.jsxs(w,{align:"flex-start",direction:"row",justify:"flex-start",children:[s.jsx(w,{align:"center",children:s.jsx(be,{size:64,src:(e==null?void 0:e.image_url)||"",type:(e==null?void 0:e.node_type)||"episode"})}),s.jsxs("div",{className:"content",children:[s.jsxs(w,{align:"center",direction:"row",children:[s.jsx($e,{type:"episode"}),r>0&&s.jsxs("div",{className:"subtitle",children:[r," ",r===1?"min":"mins"]})]}),s.jsx(K,{className:"title",color:"primaryText1",kind:"regular",children:e.episode_title})]})]}),s.jsxs(w,{align:"center",direction:"row",justify:"flex-end",children:[s.jsxs(K,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((i=e==null?void 0:e.children)==null?void 0:i.length)||0," ",((o=e==null?void 0:e.children)==null?void 0:o.length)===1?"Clip":"Clips"]}),s.jsx(Ji,{style:{color:y.white}})]})]})})},Rs=b(w).attrs({})`
  direction: row;
  cursor: pointer;
  color: ${y.primaryText1};
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
`,Fs=b(w)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;

  .subtitle {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${y.GRAY6};
    margin-left: 8px;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,Ds=b(w)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,$s=b(K)`
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
`,Ns=b.div`
  max-height: calc(100vh - 340px);
  overflow-y: auto;
`,Hs=()=>{const[e,t]=fe(l=>[l.selectedNode,l.setSelectedNode]),n=Ar(),[r,i]=P.useState([]),o=P.useMemo(()=>{var c;const l=new Set,a={};if((c=e==null?void 0:e.children)!=null&&c.length){e.children.forEach((h,d)=>{var g,k,T,S;const f=Er((n==null?void 0:n.nodes)||[],e)||[],p=n==null?void 0:n.nodes.find(C=>C.ref_id===h);if(p){p.timestamp=(g=f[0])==null?void 0:g.timestamp;const C=(S=(T=(k=f[d])==null?void 0:k.hosts)==null?void 0:T[0])==null?void 0:S.name;C&&l.add(C),a[h]=p,a[h]=p}});const u=Array.from(l);i(u)}return Object.values(a).filter(u=>u.node_type==="episode").sort((u,h)=>(h.weight||0)-(u.weight||0))},[n==null?void 0:n.nodes,e]);return s.jsxs(Fs,{children:[s.jsx(Ds,{children:s.jsxs(w,{direction:"row",children:[s.jsx(w,{pr:24,children:s.jsx(be,{size:80,src:(e==null?void 0:e.image_url)||"audio_default.svg",type:"show"})}),s.jsx(w,{direction:"column",children:s.jsxs(w,{direction:"column",grow:1,justify:"space-between",children:[s.jsxs(w,{align:"center",direction:"row",justify:"flex-start",children:[s.jsx($e,{type:"show"})," ",s.jsxs("div",{className:"subtitle",children:["by ",r.join(", ")||(e==null?void 0:e.show_title)]})]}),s.jsx($s,{kind:"bigHeading",children:(e==null?void 0:e.show_title)||"Unknown"})]})})]})}),s.jsxs(w,{direction:"column",children:[s.jsx(w,{p:24,children:s.jsx(K,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),s.jsx(Ns,{children:o.map(l=>s.jsx(Os,{node:l,onClick:()=>t(l)},l.ref_id))})]})]})},Vs=()=>{const e=xe();return s.jsx(w,{align:"center",justify:"center",children:s.jsx(K,{color:"primaryText1",kind:"hugeHeading",children:e==null?void 0:e.label})})},Us=()=>{const e=xe(),{date:t,boost:n,text:r,name:i,verified:o,image_url:l,twitter_handle:a,ref_id:c}=e||{},u=(e==null?void 0:e.tweet_id)||"",[h,d]=P.useState(n||0),f=he(p=>p.currentSearch);return e&&s.jsxs(s.Fragment,{children:[s.jsxs(w,{direction:"column",p:24,children:[s.jsxs(w,{align:"center",direction:"row",pr:16,children:[s.jsx(Gs,{children:s.jsx(be,{rounded:!0,size:58,src:l||"",type:"person"})}),s.jsxs(w,{children:[s.jsxs(Ys,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&s.jsxs(Ws,{children:["@",a]})]})]}),s.jsxs(w,{grow:1,shrink:1,children:[s.jsx(qs,{"data-testid":"episode-description",children:ht(r||"",f)}),s.jsx(w,{direction:"row",justify:"flex-start",children:!!t&&s.jsx(pt,{children:Ht.unix(t).format("ll")})})]}),s.jsx(w,{align:"stretch",mt:22,children:s.jsx("a",{href:`https://twitter.com/${a}/status/${u}?open=system`,rel:"noopener noreferrer",target:"_blank",children:s.jsx(Zs,{endIcon:s.jsx(Gt,{}),children:"View Tweet"})})})]}),s.jsx(Qs,{}),s.jsxs(w,{direction:"row",justify:"space-between",pt:14,px:24,children:[s.jsx(Yt,{amt:h}),s.jsx(vr,{content:e,count:h,refId:c,updateCount:d})]})]})},Gs=b(w)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Ys=b(w)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`,Ws=b(w)`
  color: ${y.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,qs=b(w)`
  color: ${y.white};
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
`,Qs=b(Wt)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,Zs=b(pe)`
  width: 100%;
`,Xs=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"volume_mute",children:[s.jsx("mask",{id:"mask0_1483_75386",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsxs("g",{mask:"url(#mask0_1483_75386)",children:[s.jsx("path",{id:"volume_up_2",d:"M14.0384 20.1095V18.5595C15.4807 18.1005 16.6425 17.2672 17.5239 16.0595C18.4053 14.8518 18.8461 13.4903 18.8461 11.9749C18.8461 10.4595 18.4053 9.09799 17.5239 7.89031C16.6425 6.68261 15.4807 5.84927 14.0384 5.39031V3.84033C15.8999 4.33905 17.4165 5.33841 18.5883 6.83841C19.7601 8.33839 20.346 10.0506 20.346 11.9749C20.346 13.8993 19.7601 15.6114 18.5883 17.1114C17.4165 18.6114 15.8999 19.6108 14.0384 20.1095ZM3.65381 14.4999V9.49993H7.36531L11.6537 5.21153V18.7883L7.36531 14.4999H3.65381ZM14.0384 15.6537V8.29608C14.7127 8.66275 15.2339 9.17909 15.6018 9.84511C15.9698 10.5111 16.1537 11.2294 16.1537 11.9999C16.1537 12.7602 15.9682 13.4675 15.597 14.122C15.2259 14.7765 14.7063 15.2871 14.0384 15.6537Z",fill:"currentColor"}),s.jsx("path",{id:"mute_line",d:"M6 21L21 4",stroke:"#808080","stroke-width":"2","stroke-linecap":"round"})]})]})}),Ks=({isPlaying:e,isFullScreen:t,setIsPlaying:n,playingTime:r,duration:i,handleProgressChange:o,handleVolumeChange:l,onFullScreenClick:a,showToolbar:c})=>{const[u,h]=P.useState(.5),[d,f]=P.useState(!1),[p,g]=P.useState(.5),k=(S,C)=>{const E=Array.isArray(C)?C[0]:C;h(E),l(S,E),d&&f(!1)},T=()=>{d?(h(p),l(new Event("input"),p)):(g(u),h(0),l(new Event("input"),0)),f(!d)};return s.jsxs(w,{children:[(!c||t)&&s.jsx(oa,{"aria-label":"Small","data-testid":"progress-bar",isFullScreen:t,max:i,onChange:o,size:"small",value:r}),s.jsxs(Js,{align:"center",direction:"row",showToolbar:c||t,children:[s.jsx(na,{onClick:n,size:"small",children:e?s.jsx(ct,{}):s.jsx(Vt,{})}),s.jsxs(la,{direction:"row",children:[s.jsx("span",{children:yn(r)}),s.jsx("span",{className:"separator",children:"/"}),s.jsx("span",{className:"duration",children:yn(i)})]}),s.jsxs(ra,{direction:"row",px:9,children:[s.jsx(Tr,{className:"volume-slider",max:1,min:0,onChange:k,size:"small",step:.1,value:u}),s.jsx(ea,{onClick:T,children:d?s.jsx(ta,{children:s.jsx(Xs,{})}):s.jsx(eo,{})})]}),s.jsx(ia,{"data-testid":"fullscreen-button",onClick:a,children:t?s.jsx(no,{}):s.jsx(to,{})})]})]})},Js=b(w)`
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
    color: ${y.primaryRed};
  }
`,ea=b.span``,ta=b.span`
  color: gray;
`,na=b(mr)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,ra=b(w)`
  height: 28px;
  font-size: 26px;
  border-radius: 200px;
  color: ${y.white};
  margin-left: auto;

  .volume-slider {
    display: none;
    color: ${y.white};
    height: 3px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 2px;
      height: 10px;
      background-color: ${y.white};
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
`,ia=b(w)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,oa=b(Tr)`
  && {
    z-index: 20;
    color: ${y.white};
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
      background-color: ${y.white};
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
`,la=b(w)`
  color: ${y.white};
  font-size: 13px;
  margin-left: 16px;
  font-weight: 500;

  .separator {
    color: ${y.GRAY6};
    margin: 0 4px;
  }

  .duration {
    color: ${y.GRAY6};
  }
`,sa=({hidden:e})=>{const t=P.useRef(null),n=P.useRef(null),[r,i]=P.useState(!1),[o,l]=P.useState(!1),[a,c]=P.useState(!1),[u,h]=P.useState("ready"),[d,f]=P.useState(!1),{isPlaying:p,playingTime:g,duration:k,setIsPlaying:T,setPlayingTime:S,setDuration:C,playingNode:E,volume:L,setVolume:B,setHasError:v,resetPlayer:F,isSeeking:U,setIsSeeking:H}=ut(x=>x),D=(E==null?void 0:E.media_url)||(E==null?void 0:E.link),_=(D==null?void 0:D.includes("youtube"))||(D==null?void 0:D.includes("youtu.be"));P.useEffect(()=>()=>F(),[F]),P.useEffect(()=>{E&&!d&&(S(0),C(0),f(!1))},[E,S,C,f,d]),P.useEffect(()=>{U&&t.current&&(t.current.seekTo(g,"seconds"),H(!1))},[g,U,H]);const A=()=>{T(!p)},N=()=>{T(!0)},G=()=>{T(!1)},M=(x,Y)=>{const re=Array.isArray(Y)?Y[0]:Y;S(re),t.current&&!U&&t.current.seekTo(re,"seconds")},q=(x,Y)=>{const re=Array.isArray(Y)?Y[0]:Y;B(re)},J=()=>{v(!0),h("error")},oe=x=>{if(!U){const Y=x.playedSeconds;S(Y)}},ge=()=>{if(t.current){h("ready");const x=t.current.getDuration();if(C(x),!U&&(g===0||Math.abs(g-qe("00:00:00"))<1)&&(E==null?void 0:E.type)==="youtube"&&E!=null&&E.timestamp){const[Y]=E.timestamp.split("-"),re=qe(Y);t.current.seekTo(re,"seconds"),S(re)}}},m=()=>{n.current&&(document.fullscreenElement?(document.exitFullscreen(),setTimeout(()=>l(!1),300)):n.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",ne)}))},ne=()=>{l(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",ne)};P.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",ne)}),P.useEffect(()=>{const x=Y=>{if(o){const re=window.screen.height,te=Y.clientY,Pe=re-te;c(Pe<=50)}};return document.addEventListener("mousemove",x),()=>{document.removeEventListener("mousemove",x)}},[o,a]),P.useEffect(()=>{const x=Y=>{o&&Y.key==="Escape"?(Y.preventDefault(),Y.stopPropagation()):r&&Y.key===" "&&(Y.preventDefault(),A())};return document.addEventListener("fullscreenchange",ne),document.addEventListener("keydown",x),()=>{document.removeEventListener("fullscreenchange",ne),document.removeEventListener("keydown",x)}});const ye=()=>{A()};return D?s.jsxs(aa,{ref:n,hidden:e,onBlur:()=>i(!1),onFocus:()=>i(!0),tabIndex:0,children:[s.jsx(ua,{isFullScreen:o,children:s.jsx(be,{size:120,src:(E==null?void 0:E.image_url)||"",type:"clip"})}),s.jsx(ha,{onClick:ye,children:s.jsx(ro,{ref:t,controls:!1,height:o?window.screen.height:"200px",onBuffer:()=>h("buffering"),onBufferEnd:()=>h("ready"),onError:J,onPause:G,onPlay:N,onProgress:oe,onReady:ge,playing:p,url:D||"",volume:L,width:"100%"})}),u==="error"?s.jsx(pa,{className:"error-wrapper",children:"Error happened, please try later"}):null,u==="ready"?s.jsx(Ks,{duration:k,handleProgressChange:M,handleVolumeChange:q,isFullScreen:o,isPlaying:p,onFullScreenClick:m,playingTime:g,setIsPlaying:A,showToolbar:a&&o}):null,u==="buffering"&&!_?s.jsx(ca,{isFullScreen:o,children:s.jsx(Ut,{color:y.lightGray})}):null]}):null},aa=b(w)`
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
`,ua=b(w)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,ca=b(w)`
  position: absolute;
  top: ${e=>e.isFullScreen?"43%":"39%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,pa=b(w)`
  height: 60px;
  padding: 12px 16px;
  color: ${y.primaryRed};
`,ha=b.div`
  width: 100%;
  cursor: pointer;
`,Br=P.memo(sa),da=()=>{const e=xe();if(!e)return null;const t=!!e.image_url,n=!!e.media_url,r=e.properties||{};return s.jsxs(ba,{children:[t?s.jsx(ga,{children:s.jsx("img",{alt:"img_a11y",onError:i=>{i.currentTarget.src="generic_placeholder_img.png",i.currentTarget.className="default-img"},src:e.image_url})}):null,n?s.jsx(Br,{hidden:!1}):null,s.jsxs(xa,{grow:1,justify:"flex-start",pt:t?0:8,shrink:1,children:[s.jsx(w,{ml:24,mt:20,style:{width:"fit-content"},children:s.jsx($e,{type:e.type||""})}),s.jsx(ma,{children:Object.entries(r).filter(([i])=>i!=="media_url").map(([i,o])=>s.jsx(fa,{label:i,value:o},i))})]})]})},fa=({label:e,value:t})=>{const n=t.length>140;return s.jsxs(s.Fragment,{children:[s.jsxs(ya,{className:Ie("node-detail",{"node-detail__long":n}),children:[s.jsx(K,{className:"node-detail__label",children:e}),s.jsx(K,{className:"node-detail__value",children:t})]}),s.jsx(wa,{})]})},xa=b(w)`
  overflow: auto;
  width: 100%;
  flex-grow: 1;
  padding-top: 16px;
`,ma=b(w)`
  padding: 4px 24px;
`,ga=b(w)`
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
`,ya=b(w)`
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
`,wa=b(Wt)`
  margin: auto 0px 2px 0px;
  opacity: 0.75;
`,ba=b(w)`
  flex-direction: column;
  height: 100%;
`,ka=()=>{var a,c;const[e,t]=P.useState(!1),n=xe(),r=!!(n!=null&&n.source_link),i=P.useRef(null),o=he(u=>u.currentSearch),l=u=>{u.stopPropagation(),u.currentTarget.blur(),t(!e)};return P.useEffect(()=>{var u,h;e?(u=i.current)==null||u.play():(h=i.current)==null||h.pause()},[e]),s.jsxs(w,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:r?62:0,shrink:1,children:[r&&s.jsxs(Ca,{children:[s.jsx(jr,{color:y.GRAY6}),s.jsx(va,{children:n==null?void 0:n.source_link}),s.jsx(ja,{href:`${n==null?void 0:n.source_link}?open=system`,onClick:u=>u.stopPropagation(),target:"_blank",children:s.jsx(Gt,{})})]}),(a=n==null?void 0:n.audio)!=null&&a.length?s.jsxs(w,{justify:"flex-start",p:12,children:[s.jsx(pe,{onClick:u=>l(u),startIcon:e?s.jsx(ct,{}):s.jsx(Vt,{}),children:e?"Pause":"Play"}),s.jsx(Ea,{ref:i,src:((c=n.audio[0])==null?void 0:c.link)||"",children:s.jsx("track",{kind:"captions"})})]}):null,s.jsx(Sa,{grow:1,justify:"flex-start",p:12,shrink:1,children:s.jsx(K,{color:"primaryText1",kind:"regular",children:ht((n==null?void 0:n.text)||"",o)})})]})},Ca=b(w)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${y.BG2};
  gap: 5px;
  color: ${y.GRAY6};

  span {
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color: ${y.GRAY6};
  }
`,ja=b.a`
  color: ${y.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Sa=b(w)`
  overflow: auto;
`,va=b(K)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ea=b.audio`
  height: 0;
  width: 0;
`,Ta=["clip","twitter_space","video","episode","podcast"],Ia=()=>{const e=xe(),{showTeachMe:t}=fe(r=>r),{setPlayingNode:n}=ut(r=>r);if(P.useEffect(()=>{Ta.includes((e==null?void 0:e.node_type)||"")&&n(e)},[n,e]),t)return s.jsx(Hl,{});switch(e==null?void 0:e.node_type){case"guest":case"person":return s.jsx(Ms,{});case"data_series":return s.jsx(Gl,{});case"tribe_message":return s.jsx(As,{});case"tweet":return s.jsx(Us,{});case"topic":return s.jsx(Vs,{});case"show":return s.jsx(Hs,{});case"video":case"podcast":case"clip":case"twitter_space":return s.jsx(Lr,{});case"document":return s.jsx(ka,{});case"episode":return s.jsx(Es,{},e.ref_id);case"image":return s.jsx(Ps,{});default:return s.jsx(da,{})}},_a=P.memo(Ia),Pa=({open:e})=>{const{setSelectedNode:t,setTeachMe:n,showTeachMe:r}=fe(a=>a),i=xe(),{setSidebarOpen:o}=he(a=>a),{playingNode:l}=ut(a=>a);return s.jsx(qt,{"data-testid":"sidebar-sub-view",direction:"right",in:e,style:{width:r?"700px":"",position:e?"relative":"absolute"},children:s.jsxs(Aa,{children:[s.jsx(Br,{hidden:(i==null?void 0:i.ref_id)!==(l==null?void 0:l.ref_id)},l==null?void 0:l.ref_id),s.jsx(La,{children:s.jsx(_a,{})}),s.jsx(za,{"data-testid":"close-sidebar-sub-view",onClick:()=>{t(null),n(!1)},children:s.jsx(io,{})}),s.jsx(Ba,{onClick:()=>{o(!1)},children:s.jsx(Ir,{})})]})})},Aa=b(w)(({theme:e})=>({position:"relative",background:y.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),za=b(w)`
  font-size: 32px;
  color: ${y.white};
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 3px;

  &:hover {
    color: ${y.GRAY6};
  }

  &:active {
  }
`,La=b(w)`
  flex: 1 1 100%;
  border-radius: 16px;
  overflow: hidden;
`,Ba=b(w).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),Ma=()=>{const e=he(t=>t.setSidebarOpen);return s.jsx(Oa,{onClick:()=>{e(!0)},children:s.jsx(oo,{})})},Oa=b(w).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),Ra=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 14 14",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M4.24488 9.94873L3.51732 12.8382C3.48633 12.976 3.4201 13.0844 3.31861 13.1635C3.21711 13.2425 3.09318 13.2821 2.94682 13.2821C2.75237 13.2821 2.59319 13.2046 2.46928 13.0497C2.34535 12.8948 2.31009 12.7244 2.36351 12.5385L3.01094 9.94873H0.635943C0.427609 9.94873 0.260144 9.86913 0.133547 9.70995C0.00694957 9.55077 -0.0296407 9.37129 0.023776 9.1715C0.0600955 9.02514 0.134609 8.90975 0.247318 8.82535C0.360026 8.74096 0.489568 8.69877 0.635943 8.69877H3.32344L4.1728 5.30131H1.7978C1.58946 5.30131 1.422 5.22172 1.2954 5.06254C1.1688 4.90336 1.13221 4.72388 1.18563 4.5241C1.22195 4.37773 1.29646 4.26234 1.40917 4.17795C1.52188 4.09355 1.65142 4.05135 1.7978 4.05135H4.4853L5.21286 1.16191C5.24383 1.02409 5.31007 0.915657 5.41157 0.836601C5.51305 0.757546 5.63698 0.718018 5.78336 0.718018C5.97779 0.718018 6.13697 0.795469 6.2609 0.950372C6.38483 1.10529 6.42009 1.27569 6.36667 1.46158L5.71923 4.05135H9.16476L9.89232 1.16191C9.9233 1.02409 9.98954 0.915657 10.091 0.836601C10.1925 0.757546 10.3165 0.718018 10.4628 0.718018C10.6573 0.718018 10.8164 0.795469 10.9404 0.950372C11.0643 1.10529 11.0995 1.27569 11.0461 1.46158L10.3987 4.05135H12.7737C12.982 4.05135 13.1495 4.13094 13.2761 4.29012C13.4027 4.4493 13.4393 4.62879 13.3859 4.82858C13.3495 4.97494 13.275 5.09032 13.1623 5.17473C13.0496 5.25911 12.9201 5.30131 12.7737 5.30131H10.0862L9.23684 8.69877H11.6118C11.8202 8.69877 11.9876 8.77836 12.1142 8.93754C12.2408 9.09672 12.2774 9.2762 12.224 9.47598C12.1877 9.62235 12.1132 9.73773 12.0005 9.82212C11.8878 9.90652 11.7582 9.94873 11.6118 9.94873H8.92434L8.19678 12.8382C8.1658 12.976 8.09957 13.0844 7.99807 13.1635C7.89658 13.2425 7.77265 13.2821 7.62628 13.2821C7.43185 13.2821 7.27267 13.2046 7.14874 13.0497C7.0248 12.8948 6.98955 12.7244 7.04296 12.5385L7.6904 9.94873H4.24488ZM4.55738 8.69877H8.0029L8.85226 5.30131H5.40673L4.55738 8.69877Z",fill:"currentColor"})}),Fa=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_5099_7163",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"16",height:"16",children:s.jsx("rect",{x:"2",y:"2",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_5099_7163)",children:s.jsx("path",{d:"M10 16.6667C9.16667 16.6667 8.38611 16.5083 7.65833 16.1917C6.93056 15.875 6.29722 15.4472 5.75833 14.9083C5.21944 14.3695 4.79167 13.7361 4.475 13.0083C4.15833 12.2806 4 11.5 4 10.6667C4 10.4778 4.06389 10.3195 4.19167 10.1917C4.31944 10.0639 4.47778 10 4.66667 10C4.85556 10 5.01389 10.0639 5.14167 10.1917C5.26944 10.3195 5.33333 10.4778 5.33333 10.6667C5.33333 11.9667 5.78611 13.0695 6.69167 13.975C7.59722 14.8806 8.7 15.3333 10 15.3333C11.3 15.3333 12.4028 14.8806 13.3083 13.975C14.2139 13.0695 14.6667 11.9667 14.6667 10.6667C14.6667 9.36667 14.2139 8.2639 13.3083 7.35834C12.4028 6.45279 11.3 6.00001 10 6.00001H9.9L10.4667 6.56667C10.6 6.70001 10.6639 6.85556 10.6583 7.03334C10.6528 7.21112 10.5889 7.36667 10.4667 7.50001C10.3333 7.63334 10.175 7.70279 9.99167 7.70834C9.80833 7.7139 9.65 7.65001 9.51667 7.51667L7.8 5.80001C7.66667 5.66667 7.6 5.51112 7.6 5.33334C7.6 5.15556 7.66667 5.00001 7.8 4.86667L9.51667 3.15001C9.65 3.01667 9.80833 2.95279 9.99167 2.95834C10.175 2.9639 10.3333 3.03334 10.4667 3.16667C10.5889 3.30001 10.6528 3.45556 10.6583 3.63334C10.6639 3.81112 10.6 3.96667 10.4667 4.10001L9.9 4.66667H10C10.8333 4.66667 11.6139 4.82501 12.3417 5.14167C13.0694 5.45834 13.7028 5.88612 14.2417 6.42501C14.7806 6.9639 15.2083 7.59723 15.525 8.32501C15.8417 9.05279 16 9.83334 16 10.6667C16 11.5 15.8417 12.2806 15.525 13.0083C15.2083 13.7361 14.7806 14.3695 14.2417 14.9083C13.7028 15.4472 13.0694 15.875 12.3417 16.1917C11.6139 16.5083 10.8333 16.6667 10 16.6667Z",fill:"currentColor"})})]}),Da=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_1259_28",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1259_28)",children:s.jsx("path",{d:"M3 20.75L2.91345 19.4327L4.74998 17.6058V20.75H3ZM7.25003 20.75V15.1058L8.74998 13.6058V20.75H7.25003ZM11.25 20.75V13.6058L12.75 15.1308V20.75H11.25ZM15.25 20.75V15.1308L16.75 13.6308V20.75H15.25ZM19.25 20.75V11.1058L20.75 9.60583V20.75H19.25ZM3.25003 15.2192V13.1058L10 6.35581L14 10.3558L20.75 3.60583V5.71924L14 12.4692L10 8.46921L3.25003 15.2192Z",fill:"currentColor"})})]}),$a=async()=>{const e="/get_trends";return await hr.get(e)};function Na(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Ha=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Va=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ua={};function kn(e,t){return((t||Ua).jsx?Va:Ha).test(e)}const Ga=/[ \t\n\f\r]/g;function Ya(e){return typeof e=="object"?e.type==="text"?Cn(e.value):!1:Cn(e)}function Cn(e){return e.replace(Ga,"")===""}class Ze{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}Ze.prototype.property={};Ze.prototype.normal={};Ze.prototype.space=null;function Mr(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new Ze(n,r,t)}function Lt(e){return e.toLowerCase()}class me{constructor(t,n){this.property=t,this.attribute=n}}me.prototype.space=null;me.prototype.boolean=!1;me.prototype.booleanish=!1;me.prototype.overloadedBoolean=!1;me.prototype.number=!1;me.prototype.commaSeparated=!1;me.prototype.spaceSeparated=!1;me.prototype.commaOrSpaceSeparated=!1;me.prototype.mustUseProperty=!1;me.prototype.defined=!1;let Wa=0;const $=Be(),ee=Be(),Or=Be(),I=Be(),Z=Be(),Fe=Be(),ue=Be();function Be(){return 2**++Wa}const Bt=Object.freeze(Object.defineProperty({__proto__:null,boolean:$,booleanish:ee,commaOrSpaceSeparated:ue,commaSeparated:Fe,number:I,overloadedBoolean:Or,spaceSeparated:Z},Symbol.toStringTag,{value:"Module"})),bt=Object.keys(Bt);class Qt extends me{constructor(t,n,r,i){let o=-1;if(super(t,n),jn(this,"space",i),typeof r=="number")for(;++o<bt.length;){const l=bt[o];jn(this,bt[o],(r&Bt[l])===Bt[l])}}}Qt.prototype.defined=!0;function jn(e,t,n){n&&(e[t]=n)}const qa={}.hasOwnProperty;function Ne(e){const t={},n={};let r;for(r in e.properties)if(qa.call(e.properties,r)){const i=e.properties[r],o=new Qt(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Lt(r)]=r,n[Lt(o.attribute)]=r}return new Ze(t,n,e.space)}const Rr=Ne({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Fr=Ne({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Dr(e,t){return t in e?e[t]:t}function $r(e,t){return Dr(e,t.toLowerCase())}const Nr=Ne({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:$r,properties:{xmlns:null,xmlnsXLink:null}}),Hr=Ne({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:ee,ariaAutoComplete:null,ariaBusy:ee,ariaChecked:ee,ariaColCount:I,ariaColIndex:I,ariaColSpan:I,ariaControls:Z,ariaCurrent:null,ariaDescribedBy:Z,ariaDetails:null,ariaDisabled:ee,ariaDropEffect:Z,ariaErrorMessage:null,ariaExpanded:ee,ariaFlowTo:Z,ariaGrabbed:ee,ariaHasPopup:null,ariaHidden:ee,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Z,ariaLevel:I,ariaLive:null,ariaModal:ee,ariaMultiLine:ee,ariaMultiSelectable:ee,ariaOrientation:null,ariaOwns:Z,ariaPlaceholder:null,ariaPosInSet:I,ariaPressed:ee,ariaReadOnly:ee,ariaRelevant:null,ariaRequired:ee,ariaRoleDescription:Z,ariaRowCount:I,ariaRowIndex:I,ariaRowSpan:I,ariaSelected:ee,ariaSetSize:I,ariaSort:null,ariaValueMax:I,ariaValueMin:I,ariaValueNow:I,ariaValueText:null,role:null}}),Qa=Ne({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:$r,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Fe,acceptCharset:Z,accessKey:Z,action:null,allow:null,allowFullScreen:$,allowPaymentRequest:$,allowUserMedia:$,alt:null,as:null,async:$,autoCapitalize:null,autoComplete:Z,autoFocus:$,autoPlay:$,blocking:Z,capture:$,charSet:null,checked:$,cite:null,className:Z,cols:I,colSpan:null,content:null,contentEditable:ee,controls:$,controlsList:Z,coords:I|Fe,crossOrigin:null,data:null,dateTime:null,decoding:null,default:$,defer:$,dir:null,dirName:null,disabled:$,download:Or,draggable:ee,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:$,formTarget:null,headers:Z,height:I,hidden:$,high:I,href:null,hrefLang:null,htmlFor:Z,httpEquiv:Z,id:null,imageSizes:null,imageSrcSet:null,inert:$,inputMode:null,integrity:null,is:null,isMap:$,itemId:null,itemProp:Z,itemRef:Z,itemScope:$,itemType:Z,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:$,low:I,manifest:null,max:null,maxLength:I,media:null,method:null,min:null,minLength:I,multiple:$,muted:$,name:null,nonce:null,noModule:$,noValidate:$,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:$,optimum:I,pattern:null,ping:Z,placeholder:null,playsInline:$,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:$,referrerPolicy:null,rel:Z,required:$,reversed:$,rows:I,rowSpan:I,sandbox:Z,scope:null,scoped:$,seamless:$,selected:$,shadowRootDelegatesFocus:$,shadowRootMode:null,shape:null,size:I,sizes:null,slot:null,span:I,spellCheck:ee,src:null,srcDoc:null,srcLang:null,srcSet:null,start:I,step:null,style:null,tabIndex:I,target:null,title:null,translate:null,type:null,typeMustMatch:$,useMap:null,value:ee,width:I,wrap:null,align:null,aLink:null,archive:Z,axis:null,background:null,bgColor:null,border:I,borderColor:null,bottomMargin:I,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:$,declare:$,event:null,face:null,frame:null,frameBorder:null,hSpace:I,leftMargin:I,link:null,longDesc:null,lowSrc:null,marginHeight:I,marginWidth:I,noResize:$,noHref:$,noShade:$,noWrap:$,object:null,profile:null,prompt:null,rev:null,rightMargin:I,rules:null,scheme:null,scrolling:ee,standby:null,summary:null,text:null,topMargin:I,valueType:null,version:null,vAlign:null,vLink:null,vSpace:I,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:$,disableRemotePlayback:$,prefix:null,property:null,results:I,security:null,unselectable:null}}),Za=Ne({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Dr,properties:{about:ue,accentHeight:I,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:I,amplitude:I,arabicForm:null,ascent:I,attributeName:null,attributeType:null,azimuth:I,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:I,by:null,calcMode:null,capHeight:I,className:Z,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:I,diffuseConstant:I,direction:null,display:null,dur:null,divisor:I,dominantBaseline:null,download:$,dx:null,dy:null,edgeMode:null,editable:null,elevation:I,enableBackground:null,end:null,event:null,exponent:I,externalResourcesRequired:null,fill:null,fillOpacity:I,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Fe,g2:Fe,glyphName:Fe,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:I,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:I,horizOriginX:I,horizOriginY:I,id:null,ideographic:I,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:I,k:I,k1:I,k2:I,k3:I,k4:I,kernelMatrix:ue,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:I,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:I,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:I,overlineThickness:I,paintOrder:null,panose1:null,path:null,pathLength:I,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Z,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:I,pointsAtY:I,pointsAtZ:I,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ue,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ue,rev:ue,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ue,requiredFeatures:ue,requiredFonts:ue,requiredFormats:ue,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:I,specularExponent:I,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:I,strikethroughThickness:I,string:null,stroke:null,strokeDashArray:ue,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:I,strokeOpacity:I,strokeWidth:null,style:null,surfaceScale:I,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ue,tabIndex:I,tableValues:null,target:null,targetX:I,targetY:I,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ue,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:I,underlineThickness:I,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:I,values:null,vAlphabetic:I,vMathematical:I,vectorEffect:null,vHanging:I,vIdeographic:I,version:null,vertAdvY:I,vertOriginX:I,vertOriginY:I,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:I,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Xa=/^data[-\w.:]+$/i,Sn=/-[a-z]/g,Ka=/[A-Z]/g;function Ja(e,t){const n=Lt(t);let r=t,i=me;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Xa.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Sn,tu);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Sn.test(o)){let l=o.replace(Ka,eu);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=Qt}return new i(r,t)}function eu(e){return"-"+e.toLowerCase()}function tu(e){return e.charAt(1).toUpperCase()}const nu={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},ru=Mr([Fr,Rr,Nr,Hr,Qa],"html"),Zt=Mr([Fr,Rr,Nr,Hr,Za],"svg");function iu(e){return e.join(" ").trim()}var Vr={},vn=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ou=/\n/g,lu=/^\s*/,su=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,au=/^:\s*/,uu=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,cu=/^[;\s]*/,pu=/^\s+|\s+$/g,hu=`
`,En="/",Tn="*",Le="",du="comment",fu="declaration",xu=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var k=g.match(ou);k&&(n+=k.length);var T=g.lastIndexOf(hu);r=~T?g.length-T:r+g.length}function o(){var g={line:n,column:r};return function(k){return k.position=new l(g),u(),k}}function l(g){this.start=g,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(g){var k=new Error(t.source+":"+n+":"+r+": "+g);if(k.reason=g,k.filename=t.source,k.line=n,k.column=r,k.source=e,!t.silent)throw k}function c(g){var k=g.exec(e);if(k){var T=k[0];return i(T),e=e.slice(T.length),k}}function u(){c(lu)}function h(g){var k;for(g=g||[];k=d();)k!==!1&&g.push(k);return g}function d(){var g=o();if(!(En!=e.charAt(0)||Tn!=e.charAt(1))){for(var k=2;Le!=e.charAt(k)&&(Tn!=e.charAt(k)||En!=e.charAt(k+1));)++k;if(k+=2,Le===e.charAt(k-1))return a("End of comment missing");var T=e.slice(2,k-2);return r+=2,i(T),e=e.slice(k),r+=2,g({type:du,comment:T})}}function f(){var g=o(),k=c(su);if(k){if(d(),!c(au))return a("property missing ':'");var T=c(uu),S=g({type:fu,property:In(k[0].replace(vn,Le)),value:T?In(T[0].replace(vn,Le)):Le});return c(cu),S}}function p(){var g=[];h(g);for(var k;k=f();)k!==!1&&(g.push(k),h(g));return g}return u(),p()};function In(e){return e?e.replace(pu,Le):Le}var mu=mn&&mn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Vr,"__esModule",{value:!0});var gu=mu(xu);function yu(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,gu.default)(e),i=typeof t=="function";return r.forEach(function(o){if(o.type==="declaration"){var l=o.property,a=o.value;i?t(l,a,o):a&&(n=n||{},n[l]=a)}}),n}var _n=Vr.default=yu;const wu=_n.default||_n,Ur=Gr("end"),Xt=Gr("start");function Gr(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function bu(e){const t=Xt(e),n=Ur(e);if(t&&n)return{start:t,end:n}}function Ye(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Pn(e.position):"start"in e||"end"in e?Pn(e):"line"in e||"column"in e?Mt(e):""}function Mt(e){return An(e&&e.line)+":"+An(e&&e.column)}function Pn(e){return Mt(e&&e.start)+"-"+Mt(e&&e.end)}function An(e){return e&&typeof e=="number"?e:1}class ie extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=a?a.line:void 0,this.name=Ye(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}ie.prototype.file="";ie.prototype.name="";ie.prototype.reason="";ie.prototype.message="";ie.prototype.stack="";ie.prototype.column=void 0;ie.prototype.line=void 0;ie.prototype.ancestors=void 0;ie.prototype.cause=void 0;ie.prototype.fatal=void 0;ie.prototype.place=void 0;ie.prototype.ruleId=void 0;ie.prototype.source=void 0;const Kt={}.hasOwnProperty,ku=new Map,Cu=/[A-Z]/g,ju=/-([a-z])/g,Su=new Set(["table","tbody","thead","tfoot","tr"]),vu=new Set(["td","th"]),Yr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Eu(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Bu(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Lu(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Zt:ru,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Wr(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Wr(e,t,n){if(t.type==="element")return Tu(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Iu(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Pu(e,t,n);if(t.type==="mdxjsEsm")return _u(e,t);if(t.type==="root")return Au(e,t,n);if(t.type==="text")return zu(e,t)}function Tu(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Zt,e.schema=i),e.ancestors.push(t);const o=Qr(e,t.tagName,!1),l=Mu(e,t);let a=en(e,t);return Su.has(t.tagName)&&(a=a.filter(function(c){return typeof c=="string"?!Ya(c):!0})),qr(e,l,o,t),Jt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Iu(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Qe(e,t.position)}function _u(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Qe(e,t.position)}function Pu(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Zt,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Qr(e,t.name,!0),l=Ou(e,t),a=en(e,t);return qr(e,l,o,t),Jt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Au(e,t,n){const r={};return Jt(r,en(e,t)),e.create(t,e.Fragment,r,n)}function zu(e,t){return t.value}function qr(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Jt(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Lu(e,t,n){return r;function r(i,o,l,a){const u=Array.isArray(l.children)?n:t;return a?u(o,l,a):u(o,l)}}function Bu(e,t){return n;function n(r,i,o,l){const a=Array.isArray(o.children),c=Xt(r);return t(i,o,l,a,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Mu(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Kt.call(t.properties,i)){const o=Ru(e,i,t.properties[i]);if(o){const[l,a]=o;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&vu.has(t.tagName)?r=a:n[l]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Ou(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Qe(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else Qe(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function en(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:ku;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;l=c+"-"+u,i.set(c,u+1)}}const a=Wr(e,o,l);a!==void 0&&n.push(a)}return n}function Ru(e,t,n){const r=Ja(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Na(n):iu(n)),r.property==="style"){let i=typeof n=="object"?n:Fu(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Du(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?nu[r.property]||r.property:r.attribute,n]}}function Fu(e,t){const n={};try{wu(t,r)}catch(i){if(!e.ignoreInvalidStyle){const o=i,l=new ie("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=Yr+"#cannot-parse-style-attribute",l}}return n;function r(i,o){let l=i;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(ju,Nu)),n[l]=o}}function Qr(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const a=kn(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=kn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Kt.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Qe(e)}function Qe(e,t){const n=new ie("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Yr+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Du(e){const t={};let n;for(n in e)Kt.call(e,n)&&(t[$u(n)]=e[n]);return t}function $u(e){let t=e.replace(Cu,Hu);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Nu(e,t){return t.toUpperCase()}function Hu(e){return"-"+e.toLowerCase()}const kt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Vu={};function Uu(e,t){const n=t||Vu,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Zr(e,r,i)}function Zr(e,t,n){if(Gu(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return zn(e.children,t,n)}return Array.isArray(e)?zn(e,t,n):""}function zn(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Zr(e[i],t,n);return r.join("")}function Gu(e){return!!(e&&typeof e=="object")}const Ln=document.createElement("i");function tn(e){const t="&"+e+";";Ln.innerHTML=t;const n=Ln.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function je(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function de(e,t){return e.length>0?(je(e,e.length,0,t),e):t}const Bn={}.hasOwnProperty;function Yu(e){const t={};let n=-1;for(;++n<e.length;)Wu(t,e[n]);return t}function Wu(e,t){let n;for(n in t){const i=(Bn.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){Bn.call(i,l)||(i[l]=[]);const a=o[l];qu(i[l],Array.isArray(a)?a:a?[a]:[])}}}function qu(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);je(e,0,0,r)}function Xr(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function De(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Qu=_e(/\p{P}/u),Ce=_e(/[A-Za-z]/),ce=_e(/[\dA-Za-z]/),Zu=_e(/[#-'*+\--9=?A-Z^-~]/);function Ot(e){return e!==null&&(e<32||e===127)}const Rt=_e(/\d/),Xu=_e(/[\dA-Fa-f]/),Kr=_e(/[!-/:-@[-`{-~]/);function O(e){return e!==null&&e<-2}function se(e){return e!==null&&(e<0||e===32)}function W(e){return e===-2||e===-1||e===32}function Ku(e){return Kr(e)||Qu(e)}const Ju=_e(/\s/);function _e(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function He(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&ce(e.charCodeAt(n+1))&&ce(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function X(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(c){return W(c)?(e.enter(n),a(c)):t(c)}function a(c){return W(c)&&o++<i?(e.consume(c),a):(e.exit(n),t(c))}}const ec={tokenize:tc};function tc(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),X(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return O(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const nc={tokenize:rc},Mn={tokenize:ic};function rc(e){const t=this,n=[];let r=0,i,o,l;return a;function a(E){if(r<n.length){const L=n[r];return t.containerState=L[1],e.attempt(L[0].continuation,c,u)(E)}return u(E)}function c(E){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&C();const L=t.events.length;let B=L,v;for(;B--;)if(t.events[B][0]==="exit"&&t.events[B][1].type==="chunkFlow"){v=t.events[B][1].end;break}S(r);let F=L;for(;F<t.events.length;)t.events[F][1].end=Object.assign({},v),F++;return je(t.events,B+1,0,t.events.slice(L)),t.events.length=F,u(E)}return a(E)}function u(E){if(r===n.length){if(!i)return f(E);if(i.currentConstruct&&i.currentConstruct.concrete)return g(E);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Mn,h,d)(E)}function h(E){return i&&C(),S(r),f(E)}function d(E){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,g(E)}function f(E){return t.containerState={},e.attempt(Mn,p,g)(E)}function p(E){return r++,n.push([t.currentConstruct,t.containerState]),f(E)}function g(E){if(E===null){i&&C(),S(0),e.consume(E);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:i}),k(E)}function k(E){if(E===null){T(e.exit("chunkFlow"),!0),S(0),e.consume(E);return}return O(E)?(e.consume(E),T(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(E),k)}function T(E,L){const B=t.sliceStream(E);if(L&&B.push(null),E.previous=o,o&&(o.next=E),o=E,i.defineSkip(E.start),i.write(B),t.parser.lazy[E.start.line]){let v=i.events.length;for(;v--;)if(i.events[v][1].start.offset<l&&(!i.events[v][1].end||i.events[v][1].end.offset>l))return;const F=t.events.length;let U=F,H,D;for(;U--;)if(t.events[U][0]==="exit"&&t.events[U][1].type==="chunkFlow"){if(H){D=t.events[U][1].end;break}H=!0}for(S(r),v=F;v<t.events.length;)t.events[v][1].end=Object.assign({},D),v++;je(t.events,U+1,0,t.events.slice(F)),t.events.length=v}}function S(E){let L=n.length;for(;L-- >E;){const B=n[L];t.containerState=B[1],B[0].exit.call(t,e)}n.length=E}function C(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function ic(e,t,n){return X(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function On(e){if(e===null||se(e)||Ju(e))return 1;if(Ku(e))return 2}function nn(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Ft={name:"attention",tokenize:lc,resolveAll:oc};function oc(e,t){let n=-1,r,i,o,l,a,c,u,h;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d=Object.assign({},e[r][1].end),f=Object.assign({},e[n][1].start);Rn(d,-c),Rn(f,c),l={type:c>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[r][1].end)},a={type:c>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:f},o={type:c>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},i={type:c>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},a.end)},e[r][1].end=Object.assign({},l.start),e[n][1].start=Object.assign({},a.end),u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=de(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=de(u,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),u=de(u,nn(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=de(u,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(h=2,u=de(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):h=0,je(e,r-1,n-r+3,u),n=r+u.length-h-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function lc(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=On(r);let o;return l;function l(c){return o=c,e.enter("attentionSequence"),a(c)}function a(c){if(c===o)return e.consume(c),a;const u=e.exit("attentionSequence"),h=On(c),d=!h||h===2&&i||n.includes(c),f=!i||i===2&&h||n.includes(r);return u._open=!!(o===42?d:d&&(i||!f)),u._close=!!(o===42?f:f&&(h||!d)),t(c)}}function Rn(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const sc={name:"autolink",tokenize:ac};function ac(e,t,n){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return Ce(p)?(e.consume(p),l):u(p)}function l(p){return p===43||p===45||p===46||ce(p)?(r=1,a(p)):u(p)}function a(p){return p===58?(e.consume(p),r=0,c):(p===43||p===45||p===46||ce(p))&&r++<32?(e.consume(p),a):(r=0,u(p))}function c(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||Ot(p)?n(p):(e.consume(p),c)}function u(p){return p===64?(e.consume(p),h):Zu(p)?(e.consume(p),u):n(p)}function h(p){return ce(p)?d(p):n(p)}function d(p){return p===46?(e.consume(p),r=0,h):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):f(p)}function f(p){if((p===45||ce(p))&&r++<63){const g=p===45?f:d;return e.consume(p),g}return n(p)}}const dt={tokenize:uc,partial:!0};function uc(e,t,n){return r;function r(o){return W(o)?X(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||O(o)?t(o):n(o)}}const Jr={name:"blockQuote",tokenize:cc,continuation:{tokenize:pc},exit:hc};function cc(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return W(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function pc(e,t,n){const r=this;return i;function i(l){return W(l)?X(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(Jr,t,n)(l)}}function hc(e){e.exit("blockQuote")}const ei={name:"characterEscape",tokenize:dc};function dc(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Kr(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const ti={name:"characterReference",tokenize:fc};function fc(e,t,n){const r=this;let i=0,o,l;return a;function a(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),c}function c(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,l=ce,h(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=Xu,h):(e.enter("characterReferenceValue"),o=7,l=Rt,h(d))}function h(d){if(d===59&&i){const f=e.exit("characterReferenceValue");return l===ce&&!tn(r.sliceSerialize(f))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(d)&&i++<o?(e.consume(d),h):n(d)}}const Fn={tokenize:mc,partial:!0},Dn={name:"codeFenced",tokenize:xc,concrete:!0};function xc(e,t,n){const r=this,i={tokenize:B,partial:!0};let o=0,l=0,a;return c;function c(v){return u(v)}function u(v){const F=r.events[r.events.length-1];return o=F&&F[1].type==="linePrefix"?F[2].sliceSerialize(F[1],!0).length:0,a=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),h(v)}function h(v){return v===a?(l++,e.consume(v),h):l<3?n(v):(e.exit("codeFencedFenceSequence"),W(v)?X(e,d,"whitespace")(v):d(v))}function d(v){return v===null||O(v)?(e.exit("codeFencedFence"),r.interrupt?t(v):e.check(Fn,k,L)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(v))}function f(v){return v===null||O(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(v)):W(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),X(e,p,"whitespace")(v)):v===96&&v===a?n(v):(e.consume(v),f)}function p(v){return v===null||O(v)?d(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(v))}function g(v){return v===null||O(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(v)):v===96&&v===a?n(v):(e.consume(v),g)}function k(v){return e.attempt(i,L,T)(v)}function T(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),S}function S(v){return o>0&&W(v)?X(e,C,"linePrefix",o+1)(v):C(v)}function C(v){return v===null||O(v)?e.check(Fn,k,L)(v):(e.enter("codeFlowValue"),E(v))}function E(v){return v===null||O(v)?(e.exit("codeFlowValue"),C(v)):(e.consume(v),E)}function L(v){return e.exit("codeFenced"),t(v)}function B(v,F,U){let H=0;return D;function D(M){return v.enter("lineEnding"),v.consume(M),v.exit("lineEnding"),_}function _(M){return v.enter("codeFencedFence"),W(M)?X(v,A,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(M):A(M)}function A(M){return M===a?(v.enter("codeFencedFenceSequence"),N(M)):U(M)}function N(M){return M===a?(H++,v.consume(M),N):H>=l?(v.exit("codeFencedFenceSequence"),W(M)?X(v,G,"whitespace")(M):G(M)):U(M)}function G(M){return M===null||O(M)?(v.exit("codeFencedFence"),F(M)):U(M)}}}function mc(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const Ct={name:"codeIndented",tokenize:yc},gc={tokenize:wc,partial:!0};function yc(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),X(e,o,"linePrefix",4+1)(u)}function o(u){const h=r.events[r.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?c(u):O(u)?e.attempt(gc,l,c)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||O(u)?(e.exit("codeFlowValue"),l(u)):(e.consume(u),a)}function c(u){return e.exit("codeIndented"),t(u)}}function wc(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):O(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):X(e,o,"linePrefix",4+1)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):O(l)?i(l):n(l)}}const bc={name:"codeText",tokenize:jc,resolve:kc,previous:Cc};function kc(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Cc(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function jc(e,t,n){let r=0,i,o;return l;function l(d){return e.enter("codeText"),e.enter("codeTextSequence"),a(d)}function a(d){return d===96?(e.consume(d),r++,a):(e.exit("codeTextSequence"),c(d))}function c(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),c):d===96?(o=e.enter("codeTextSequence"),i=0,h(d)):O(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||O(d)?(e.exit("codeTextData"),c(d)):(e.consume(d),u)}function h(d){return d===96?(e.consume(d),i++,h):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(o.type="codeTextData",u(d))}}function ni(e){const t={};let n=-1,r,i,o,l,a,c,u;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Sc(e,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--&&(l=e[o],l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(i&&(e[i][1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);i&&(r[1].end=Object.assign({},e[i][1].start),a=e.slice(i,n),a.unshift(r),je(e,i,n-i+1,a))}}return!u}function Sc(e,t){const n=e[t][1],r=e[t][2];let i=t-1;const o=[],l=n._tokenizer||r.parser[n.contentType](n.start),a=l.events,c=[],u={};let h,d,f=-1,p=n,g=0,k=0;const T=[k];for(;p;){for(;e[++i][1]!==p;);o.push(i),p._tokenizer||(h=r.sliceStream(p),p.next||h.push(null),d&&l.defineSkip(p.start),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(h),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(k=f+1,T.push(k),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(l.events=[],p?(p._tokenizer=void 0,p.previous=void 0):T.pop(),f=T.length;f--;){const S=a.slice(T[f],T[f+1]),C=o.pop();c.unshift([C,C+S.length-1]),je(e,C,2,S)}for(f=-1;++f<c.length;)u[g+c[f][0]]=g+c[f][1],g+=c[f][1]-c[f][0]-1;return u}const vc={tokenize:Ic,resolve:Tc},Ec={tokenize:_c,partial:!0};function Tc(e){return ni(e),e}function Ic(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):O(a)?e.check(Ec,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function _c(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),X(e,o,"linePrefix")}function o(l){if(l===null||O(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function ri(e,t,n,r,i,o,l,a,c){const u=c||Number.POSITIVE_INFINITY;let h=0;return d;function d(S){return S===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(S),e.exit(o),f):S===null||S===32||S===41||Ot(S)?n(S):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),k(S))}function f(S){return S===62?(e.enter(o),e.consume(S),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(S))}function p(S){return S===62?(e.exit("chunkString"),e.exit(a),f(S)):S===null||S===60||O(S)?n(S):(e.consume(S),S===92?g:p)}function g(S){return S===60||S===62||S===92?(e.consume(S),p):p(S)}function k(S){return!h&&(S===null||S===41||se(S))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(S)):h<u&&S===40?(e.consume(S),h++,k):S===41?(e.consume(S),h--,k):S===null||S===32||S===40||Ot(S)?n(S):(e.consume(S),S===92?T:k)}function T(S){return S===40||S===41||S===92?(e.consume(S),k):k(S)}}function ii(e,t,n,r,i,o){const l=this;let a=0,c;return u;function u(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(o),h}function h(p){return a>999||p===null||p===91||p===93&&!c||p===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(p):p===93?(e.exit(o),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):O(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),h):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||O(p)||a++>999?(e.exit("chunkString"),h(p)):(e.consume(p),c||(c=!W(p)),p===92?f:d)}function f(p){return p===91||p===92||p===93?(e.consume(p),a++,d):d(p)}}function oi(e,t,n,r,i,o){let l;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),l=f===40?41:f,c):n(f)}function c(f){return f===l?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===l?(e.exit(o),c(l)):f===null?n(f):O(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),X(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),h(f))}function h(f){return f===l||f===null||O(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?d:h)}function d(f){return f===l||f===92?(e.consume(f),h):h(f)}}function We(e,t){let n;return r;function r(i){return O(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):W(i)?X(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Pc={name:"definition",tokenize:zc},Ac={tokenize:Lc,partial:!0};function zc(e,t,n){const r=this;let i;return o;function o(p){return e.enter("definition"),l(p)}function l(p){return ii.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return i=De(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),c):n(p)}function c(p){return se(p)?We(e,u)(p):u(p)}function u(p){return ri(e,h,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function h(p){return e.attempt(Ac,d,d)(p)}function d(p){return W(p)?X(e,f,"whitespace")(p):f(p)}function f(p){return p===null||O(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):n(p)}}function Lc(e,t,n){return r;function r(a){return se(a)?We(e,i)(a):n(a)}function i(a){return oi(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return W(a)?X(e,l,"whitespace")(a):l(a)}function l(a){return a===null||O(a)?t(a):n(a)}}const Bc={name:"hardBreakEscape",tokenize:Mc};function Mc(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return O(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Oc={name:"headingAtx",tokenize:Fc,resolve:Rc};function Rc(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},je(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Fc(e,t,n){let r=0;return i;function i(h){return e.enter("atxHeading"),o(h)}function o(h){return e.enter("atxHeadingSequence"),l(h)}function l(h){return h===35&&r++<6?(e.consume(h),l):h===null||se(h)?(e.exit("atxHeadingSequence"),a(h)):n(h)}function a(h){return h===35?(e.enter("atxHeadingSequence"),c(h)):h===null||O(h)?(e.exit("atxHeading"),t(h)):W(h)?X(e,a,"whitespace")(h):(e.enter("atxHeadingText"),u(h))}function c(h){return h===35?(e.consume(h),c):(e.exit("atxHeadingSequence"),a(h))}function u(h){return h===null||h===35||se(h)?(e.exit("atxHeadingText"),a(h)):(e.consume(h),u)}}const Dc=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],$n=["pre","script","style","textarea"],$c={name:"htmlFlow",tokenize:Uc,resolveTo:Vc,concrete:!0},Nc={tokenize:Yc,partial:!0},Hc={tokenize:Gc,partial:!0};function Vc(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Uc(e,t,n){const r=this;let i,o,l,a,c;return u;function u(x){return h(x)}function h(x){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(x),d}function d(x){return x===33?(e.consume(x),f):x===47?(e.consume(x),o=!0,k):x===63?(e.consume(x),i=3,r.interrupt?t:m):Ce(x)?(e.consume(x),l=String.fromCharCode(x),T):n(x)}function f(x){return x===45?(e.consume(x),i=2,p):x===91?(e.consume(x),i=5,a=0,g):Ce(x)?(e.consume(x),i=4,r.interrupt?t:m):n(x)}function p(x){return x===45?(e.consume(x),r.interrupt?t:m):n(x)}function g(x){const Y="CDATA[";return x===Y.charCodeAt(a++)?(e.consume(x),a===Y.length?r.interrupt?t:A:g):n(x)}function k(x){return Ce(x)?(e.consume(x),l=String.fromCharCode(x),T):n(x)}function T(x){if(x===null||x===47||x===62||se(x)){const Y=x===47,re=l.toLowerCase();return!Y&&!o&&$n.includes(re)?(i=1,r.interrupt?t(x):A(x)):Dc.includes(l.toLowerCase())?(i=6,Y?(e.consume(x),S):r.interrupt?t(x):A(x)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(x):o?C(x):E(x))}return x===45||ce(x)?(e.consume(x),l+=String.fromCharCode(x),T):n(x)}function S(x){return x===62?(e.consume(x),r.interrupt?t:A):n(x)}function C(x){return W(x)?(e.consume(x),C):D(x)}function E(x){return x===47?(e.consume(x),D):x===58||x===95||Ce(x)?(e.consume(x),L):W(x)?(e.consume(x),E):D(x)}function L(x){return x===45||x===46||x===58||x===95||ce(x)?(e.consume(x),L):B(x)}function B(x){return x===61?(e.consume(x),v):W(x)?(e.consume(x),B):E(x)}function v(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),c=x,F):W(x)?(e.consume(x),v):U(x)}function F(x){return x===c?(e.consume(x),c=null,H):x===null||O(x)?n(x):(e.consume(x),F)}function U(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||se(x)?B(x):(e.consume(x),U)}function H(x){return x===47||x===62||W(x)?E(x):n(x)}function D(x){return x===62?(e.consume(x),_):n(x)}function _(x){return x===null||O(x)?A(x):W(x)?(e.consume(x),_):n(x)}function A(x){return x===45&&i===2?(e.consume(x),q):x===60&&i===1?(e.consume(x),J):x===62&&i===4?(e.consume(x),ne):x===63&&i===3?(e.consume(x),m):x===93&&i===5?(e.consume(x),ge):O(x)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Nc,ye,N)(x)):x===null||O(x)?(e.exit("htmlFlowData"),N(x)):(e.consume(x),A)}function N(x){return e.check(Hc,G,ye)(x)}function G(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),M}function M(x){return x===null||O(x)?N(x):(e.enter("htmlFlowData"),A(x))}function q(x){return x===45?(e.consume(x),m):A(x)}function J(x){return x===47?(e.consume(x),l="",oe):A(x)}function oe(x){if(x===62){const Y=l.toLowerCase();return $n.includes(Y)?(e.consume(x),ne):A(x)}return Ce(x)&&l.length<8?(e.consume(x),l+=String.fromCharCode(x),oe):A(x)}function ge(x){return x===93?(e.consume(x),m):A(x)}function m(x){return x===62?(e.consume(x),ne):x===45&&i===2?(e.consume(x),m):A(x)}function ne(x){return x===null||O(x)?(e.exit("htmlFlowData"),ye(x)):(e.consume(x),ne)}function ye(x){return e.exit("htmlFlow"),t(x)}}function Gc(e,t,n){const r=this;return i;function i(l){return O(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function Yc(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(dt,t,n)}}const Wc={name:"htmlText",tokenize:qc};function qc(e,t,n){const r=this;let i,o,l;return a;function a(m){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(m),c}function c(m){return m===33?(e.consume(m),u):m===47?(e.consume(m),B):m===63?(e.consume(m),E):Ce(m)?(e.consume(m),U):n(m)}function u(m){return m===45?(e.consume(m),h):m===91?(e.consume(m),o=0,g):Ce(m)?(e.consume(m),C):n(m)}function h(m){return m===45?(e.consume(m),p):n(m)}function d(m){return m===null?n(m):m===45?(e.consume(m),f):O(m)?(l=d,J(m)):(e.consume(m),d)}function f(m){return m===45?(e.consume(m),p):d(m)}function p(m){return m===62?q(m):m===45?f(m):d(m)}function g(m){const ne="CDATA[";return m===ne.charCodeAt(o++)?(e.consume(m),o===ne.length?k:g):n(m)}function k(m){return m===null?n(m):m===93?(e.consume(m),T):O(m)?(l=k,J(m)):(e.consume(m),k)}function T(m){return m===93?(e.consume(m),S):k(m)}function S(m){return m===62?q(m):m===93?(e.consume(m),S):k(m)}function C(m){return m===null||m===62?q(m):O(m)?(l=C,J(m)):(e.consume(m),C)}function E(m){return m===null?n(m):m===63?(e.consume(m),L):O(m)?(l=E,J(m)):(e.consume(m),E)}function L(m){return m===62?q(m):E(m)}function B(m){return Ce(m)?(e.consume(m),v):n(m)}function v(m){return m===45||ce(m)?(e.consume(m),v):F(m)}function F(m){return O(m)?(l=F,J(m)):W(m)?(e.consume(m),F):q(m)}function U(m){return m===45||ce(m)?(e.consume(m),U):m===47||m===62||se(m)?H(m):n(m)}function H(m){return m===47?(e.consume(m),q):m===58||m===95||Ce(m)?(e.consume(m),D):O(m)?(l=H,J(m)):W(m)?(e.consume(m),H):q(m)}function D(m){return m===45||m===46||m===58||m===95||ce(m)?(e.consume(m),D):_(m)}function _(m){return m===61?(e.consume(m),A):O(m)?(l=_,J(m)):W(m)?(e.consume(m),_):H(m)}function A(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),i=m,N):O(m)?(l=A,J(m)):W(m)?(e.consume(m),A):(e.consume(m),G)}function N(m){return m===i?(e.consume(m),i=void 0,M):m===null?n(m):O(m)?(l=N,J(m)):(e.consume(m),N)}function G(m){return m===null||m===34||m===39||m===60||m===61||m===96?n(m):m===47||m===62||se(m)?H(m):(e.consume(m),G)}function M(m){return m===47||m===62||se(m)?H(m):n(m)}function q(m){return m===62?(e.consume(m),e.exit("htmlTextData"),e.exit("htmlText"),t):n(m)}function J(m){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),oe}function oe(m){return W(m)?X(e,ge,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):ge(m)}function ge(m){return e.enter("htmlTextData"),l(m)}}const rn={name:"labelEnd",tokenize:ep,resolveTo:Jc,resolveAll:Kc},Qc={tokenize:tp},Zc={tokenize:np},Xc={tokenize:rp};function Kc(e){let t=-1;for(;++t<e.length;){const n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function Jc(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)},u={type:"label",start:Object.assign({},e[o][1].start),end:Object.assign({},e[l][1].end)},h={type:"labelText",start:Object.assign({},e[o+r+2][1].end),end:Object.assign({},e[l-2][1].start)};return a=[["enter",c,t],["enter",u,t]],a=de(a,e.slice(o+1,o+r+3)),a=de(a,[["enter",h,t]]),a=de(a,nn(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=de(a,[["exit",h,t],e[l-2],e[l-1],["exit",u,t]]),a=de(a,e.slice(l+1)),a=de(a,[["exit",c,t]]),je(e,o,e.length,a),e}function ep(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(f){return o?o._inactive?d(f):(l=r.parser.defined.includes(De(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(Qc,h,l?h:d)(f):f===91?e.attempt(Zc,h,l?u:d)(f):l?h(f):d(f)}function u(f){return e.attempt(Xc,h,d)(f)}function h(f){return t(f)}function d(f){return o._balanced=!0,n(f)}}function tp(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return se(d)?We(e,o)(d):o(d)}function o(d){return d===41?h(d):ri(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function l(d){return se(d)?We(e,c)(d):h(d)}function a(d){return n(d)}function c(d){return d===34||d===39||d===40?oi(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):h(d)}function u(d){return se(d)?We(e,h)(d):h(d)}function h(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function np(e,t,n){const r=this;return i;function i(a){return ii.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(De(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function rp(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const ip={name:"labelStartImage",tokenize:op,resolveAll:rn.resolveAll};function op(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const lp={name:"labelStartLink",tokenize:sp,resolveAll:rn.resolveAll};function sp(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const jt={name:"lineEnding",tokenize:ap};function ap(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),X(e,t,"linePrefix")}}const nt={name:"thematicBreak",tokenize:up};function up(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),l(u)}function l(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||O(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),W(u)?X(e,a,"whitespace")(u):a(u))}}const le={name:"list",tokenize:hp,continuation:{tokenize:dp},exit:xp},cp={tokenize:mp,partial:!0},pp={tokenize:fp,partial:!0};function hp(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(p){const g=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Rt(p)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(nt,n,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(p)}return n(p)}function c(p){return Rt(p)&&++l<10?(e.consume(p),c):(!r.interrupt||l<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):n(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(dt,r.interrupt?n:h,e.attempt(cp,f,d))}function h(p){return r.containerState.initialBlankLine=!0,o++,f(p)}function d(p){return W(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):n(p)}function f(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function dp(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(dt,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,X(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!W(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(pp,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,X(e,e.attempt(le,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function fp(e,t,n){const r=this;return X(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function xp(e){e.exit(this.containerState.type)}function mp(e,t,n){const r=this;return X(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(o){const l=r.events[r.events.length-1];return!W(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Nn={name:"setextUnderline",tokenize:yp,resolveTo:gp};function gp(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[o][1].end)):e[r][1]=l,e.push(["exit",l,t]),e}function yp(e,t,n){const r=this;let i;return o;function o(u){let h=r.events.length,d;for(;h--;)if(r.events[h][1].type!=="lineEnding"&&r.events[h][1].type!=="linePrefix"&&r.events[h][1].type!=="content"){d=r.events[h][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=u,l(u)):n(u)}function l(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),W(u)?X(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||O(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const wp={tokenize:bp};function bp(e){const t=this,n=e.attempt(dt,r,e.attempt(this.parser.constructs.flowInitial,i,X(e,e.attempt(this.parser.constructs.flow,i,e.attempt(vc,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const kp={resolveAll:si()},Cp=li("string"),jp=li("text");function li(e){return{tokenize:t,resolveAll:si(e==="text"?Sp:void 0)};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(h){return u(h)?o(h):a(h)}function a(h){if(h===null){n.consume(h);return}return n.enter("data"),n.consume(h),c}function c(h){return u(h)?(n.exit("data"),o(h)):(n.consume(h),c)}function u(h){if(h===null)return!0;const d=i[h];let f=-1;if(d)for(;++f<d.length;){const p=d[f];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function si(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Sp(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(u===-2)c=!0,a++;else if(u!==-1){o++;break}}if(a){const u={type:n===e.length||c||a<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-a,offset:r.end.offset-a,_index:r.start._index+o,_bufferIndex:o?l:r.start._bufferIndex+l},end:Object.assign({},r.end)};r.end=Object.assign({},u.start),r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}function vp(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},o=[];let l=[],a=[];const c={consume:C,enter:E,exit:L,attempt:F(B),check:F(v),interrupt:F(v,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:p,sliceSerialize:f,now:g,defineSkip:k,write:d};let h=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function d(_){return l=de(l,_),T(),l[l.length-1]!==null?[]:(U(t,0),u.events=nn(o,u.events,u),u.events)}function f(_,A){return Tp(p(_),A)}function p(_){return Ep(l,_)}function g(){const{line:_,column:A,offset:N,_index:G,_bufferIndex:M}=r;return{line:_,column:A,offset:N,_index:G,_bufferIndex:M}}function k(_){i[_.line]=_.column,D()}function T(){let _;for(;r._index<l.length;){const A=l[r._index];if(typeof A=="string")for(_=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===_&&r._bufferIndex<A.length;)S(A.charCodeAt(r._bufferIndex));else S(A)}}function S(_){h=h(_)}function C(_){O(_)?(r.line++,r.column=1,r.offset+=_===-3?2:1,D()):_!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=_}function E(_,A){const N=A||{};return N.type=_,N.start=g(),u.events.push(["enter",N,u]),a.push(N),N}function L(_){const A=a.pop();return A.end=g(),u.events.push(["exit",A,u]),A}function B(_,A){U(_,A.from)}function v(_,A){A.restore()}function F(_,A){return N;function N(G,M,q){let J,oe,ge,m;return Array.isArray(G)?ye(G):"tokenize"in G?ye([G]):ne(G);function ne(te){return Pe;function Pe(Se){const Me=Se!==null&&te[Se],Ae=Se!==null&&te.null,mt=[...Array.isArray(Me)?Me:Me?[Me]:[],...Array.isArray(Ae)?Ae:Ae?[Ae]:[]];return ye(mt)(Se)}}function ye(te){return J=te,oe=0,te.length===0?q:x(te[oe])}function x(te){return Pe;function Pe(Se){return m=H(),ge=te,te.partial||(u.currentConstruct=te),te.name&&u.parser.constructs.disable.null.includes(te.name)?re():te.tokenize.call(A?Object.assign(Object.create(u),A):u,c,Y,re)(Se)}}function Y(te){return _(ge,m),M}function re(te){return m.restore(),++oe<J.length?x(J[oe]):q}}}function U(_,A){_.resolveAll&&!o.includes(_)&&o.push(_),_.resolve&&je(u.events,A,u.events.length-A,_.resolve(u.events.slice(A),u)),_.resolveTo&&(u.events=_.resolveTo(u.events,u))}function H(){const _=g(),A=u.previous,N=u.currentConstruct,G=u.events.length,M=Array.from(a);return{restore:q,from:G};function q(){r=_,u.previous=A,u.currentConstruct=N,u.events.length=G,a=M,D()}}function D(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Ep(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function Tp(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}const Ip={42:le,43:le,45:le,48:le,49:le,50:le,51:le,52:le,53:le,54:le,55:le,56:le,57:le,62:Jr},_p={91:Pc},Pp={[-2]:Ct,[-1]:Ct,32:Ct},Ap={35:Oc,42:nt,45:[Nn,nt],60:$c,61:Nn,95:nt,96:Dn,126:Dn},zp={38:ti,92:ei},Lp={[-5]:jt,[-4]:jt,[-3]:jt,33:ip,38:ti,42:Ft,60:[sc,Wc],91:lp,92:[Bc,ei],93:rn,95:Ft,96:bc},Bp={null:[Ft,kp]},Mp={null:[42,95]},Op={null:[]},Rp=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Mp,contentInitial:_p,disable:Op,document:Ip,flow:Ap,flowInitial:Pp,insideSpan:Bp,string:zp,text:Lp},Symbol.toStringTag,{value:"Module"}));function Fp(e){const n=Yu([Rp,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:n,content:i(ec),document:i(nc),flow:i(wp),string:i(Cp),text:i(jp)};return r;function i(o){return l;function l(a){return vp(r,o,a)}}}function Dp(e){for(;!ni(e););return e}const Hn=/[\0\t\n\r]/g;function $p(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const c=[];let u,h,d,f,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),d=0,t="",n&&(o.charCodeAt(0)===65279&&d++,n=void 0);d<o.length;){if(Hn.lastIndex=d,u=Hn.exec(o),f=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(f),!u){t=o.slice(d);break}if(p===10&&d===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),d<f&&(c.push(o.slice(d,f)),e+=f-d),p){case 0:{c.push(65533),e++;break}case 9:{for(h=Math.ceil(e/4)*4,c.push(-2);e++<h;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}d=f+1}return a&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const Np=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Hp(e){return e.replace(Np,Vp)}function Vp(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Xr(n.slice(o?2:1),o?16:10)}return tn(n)||e}const ai={}.hasOwnProperty;function Up(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Gp(n)(Dp(Fp(n).document().write($p()(e,t,!0))))}function Gp(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(dn),autolinkProtocol:H,autolinkEmail:H,atxHeading:o(cn),blockQuote:o(Me),characterEscape:H,characterReference:H,codeFenced:o(Ae),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(Ae,l),codeText:o(mt,l),codeTextData:H,data:H,codeFlowValue:H,definition:o(ki),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(Ci),hardBreakEscape:o(pn),hardBreakTrailing:o(pn),htmlFlow:o(hn,l),htmlFlowData:H,htmlText:o(hn,l),htmlTextData:H,image:o(ji),label:l,link:o(dn),listItem:o(Si),listItemValue:f,listOrdered:o(fn,d),listUnordered:o(fn),paragraph:o(vi),reference:x,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(cn),strong:o(Ei),thematicBreak:o(Ii)},exit:{atxHeading:c(),atxHeadingSequence:B,autolink:c(),autolinkEmail:Se,autolinkProtocol:Pe,blockQuote:c(),characterEscapeValue:D,characterReferenceMarkerHexadecimal:re,characterReferenceMarkerNumeric:re,characterReferenceValue:te,codeFenced:c(T),codeFencedFence:k,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:D,codeIndented:c(S),codeText:c(M),codeTextData:D,data:D,definition:c(),definitionDestinationString:L,definitionLabelString:C,definitionTitleString:E,emphasis:c(),hardBreakEscape:c(A),hardBreakTrailing:c(A),htmlFlow:c(N),htmlFlowData:D,htmlText:c(G),htmlTextData:D,image:c(J),label:ge,labelText:oe,lineEnding:_,link:c(q),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:Y,resourceDestinationString:m,resourceTitleString:ne,resource:ye,setextHeading:c(U),setextHeadingLineSequence:F,setextHeadingText:v,strong:c(),thematicBreak:c()}};ui(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(j){let z={type:"root",children:[]};const R={stack:[z],tokenStack:[],config:t,enter:a,exit:u,buffer:l,resume:h,data:n},V=[];let Q=-1;for(;++Q<j.length;)if(j[Q][1].type==="listOrdered"||j[Q][1].type==="listUnordered")if(j[Q][0]==="enter")V.push(Q);else{const we=V.pop();Q=i(j,we,Q)}for(Q=-1;++Q<j.length;){const we=t[j[Q][0]];ai.call(we,j[Q][1].type)&&we[j[Q][1].type].call(Object.assign({sliceSerialize:j[Q][2].sliceSerialize},R),j[Q][1])}if(R.tokenStack.length>0){const we=R.tokenStack[R.tokenStack.length-1];(we[1]||Vn).call(R,void 0,we[0])}for(z.position={start:Te(j.length>0?j[0][1].start:{line:1,column:1,offset:0}),end:Te(j.length>0?j[j.length-2][1].end:{line:1,column:1,offset:0})},Q=-1;++Q<t.transforms.length;)z=t.transforms[Q](z)||z;return z}function i(j,z,R){let V=z-1,Q=-1,we=!1,ze,ve,Ve,Ue;for(;++V<=R;){const ae=j[V];switch(ae[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ae[0]==="enter"?Q++:Q--,Ue=void 0;break}case"lineEndingBlank":{ae[0]==="enter"&&(ze&&!Ue&&!Q&&!Ve&&(Ve=V),Ue=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ue=void 0}if(!Q&&ae[0]==="enter"&&ae[1].type==="listItemPrefix"||Q===-1&&ae[0]==="exit"&&(ae[1].type==="listUnordered"||ae[1].type==="listOrdered")){if(ze){let Oe=V;for(ve=void 0;Oe--;){const Ee=j[Oe];if(Ee[1].type==="lineEnding"||Ee[1].type==="lineEndingBlank"){if(Ee[0]==="exit")continue;ve&&(j[ve][1].type="lineEndingBlank",we=!0),Ee[1].type="lineEnding",ve=Oe}else if(!(Ee[1].type==="linePrefix"||Ee[1].type==="blockQuotePrefix"||Ee[1].type==="blockQuotePrefixWhitespace"||Ee[1].type==="blockQuoteMarker"||Ee[1].type==="listItemIndent"))break}Ve&&(!ve||Ve<ve)&&(ze._spread=!0),ze.end=Object.assign({},ve?j[ve][1].start:ae[1].end),j.splice(ve||V,0,["exit",ze,ae[2]]),V++,R++}if(ae[1].type==="listItemPrefix"){const Oe={type:"listItem",_spread:!1,start:Object.assign({},ae[1].start),end:void 0};ze=Oe,j.splice(V,0,["enter",Oe,ae[2]]),V++,R++,Ve=void 0,Ue=!0}}}return j[z][1]._spread=we,R}function o(j,z){return R;function R(V){a.call(this,j(V),V),z&&z.call(this,V)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(j,z,R){this.stack[this.stack.length-1].children.push(j),this.stack.push(j),this.tokenStack.push([z,R]),j.position={start:Te(z.start),end:void 0}}function c(j){return z;function z(R){j&&j.call(this,R),u.call(this,R)}}function u(j,z){const R=this.stack.pop(),V=this.tokenStack.pop();if(V)V[0].type!==j.type&&(z?z.call(this,j,V[0]):(V[1]||Vn).call(this,j,V[0]));else throw new Error("Cannot close `"+j.type+"` ("+Ye({start:j.start,end:j.end})+"): it’s not open");R.position.end=Te(j.end)}function h(){return Uu(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(j){if(this.data.expectingFirstListItemValue){const z=this.stack[this.stack.length-2];z.start=Number.parseInt(this.sliceSerialize(j),10),this.data.expectingFirstListItemValue=void 0}}function p(){const j=this.resume(),z=this.stack[this.stack.length-1];z.lang=j}function g(){const j=this.resume(),z=this.stack[this.stack.length-1];z.meta=j}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const j=this.resume(),z=this.stack[this.stack.length-1];z.value=j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function S(){const j=this.resume(),z=this.stack[this.stack.length-1];z.value=j.replace(/(\r?\n|\r)$/g,"")}function C(j){const z=this.resume(),R=this.stack[this.stack.length-1];R.label=z,R.identifier=De(this.sliceSerialize(j)).toLowerCase()}function E(){const j=this.resume(),z=this.stack[this.stack.length-1];z.title=j}function L(){const j=this.resume(),z=this.stack[this.stack.length-1];z.url=j}function B(j){const z=this.stack[this.stack.length-1];if(!z.depth){const R=this.sliceSerialize(j).length;z.depth=R}}function v(){this.data.setextHeadingSlurpLineEnding=!0}function F(j){const z=this.stack[this.stack.length-1];z.depth=this.sliceSerialize(j).codePointAt(0)===61?1:2}function U(){this.data.setextHeadingSlurpLineEnding=void 0}function H(j){const R=this.stack[this.stack.length-1].children;let V=R[R.length-1];(!V||V.type!=="text")&&(V=Ti(),V.position={start:Te(j.start),end:void 0},R.push(V)),this.stack.push(V)}function D(j){const z=this.stack.pop();z.value+=this.sliceSerialize(j),z.position.end=Te(j.end)}function _(j){const z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const R=z.children[z.children.length-1];R.position.end=Te(j.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(z.type)&&(H.call(this,j),D.call(this,j))}function A(){this.data.atHardBreak=!0}function N(){const j=this.resume(),z=this.stack[this.stack.length-1];z.value=j}function G(){const j=this.resume(),z=this.stack[this.stack.length-1];z.value=j}function M(){const j=this.resume(),z=this.stack[this.stack.length-1];z.value=j}function q(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const z=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=z,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function J(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const z=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=z,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function oe(j){const z=this.sliceSerialize(j),R=this.stack[this.stack.length-2];R.label=Hp(z),R.identifier=De(z).toLowerCase()}function ge(){const j=this.stack[this.stack.length-1],z=this.resume(),R=this.stack[this.stack.length-1];if(this.data.inReference=!0,R.type==="link"){const V=j.children;R.children=V}else R.alt=z}function m(){const j=this.resume(),z=this.stack[this.stack.length-1];z.url=j}function ne(){const j=this.resume(),z=this.stack[this.stack.length-1];z.title=j}function ye(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function Y(j){const z=this.resume(),R=this.stack[this.stack.length-1];R.label=z,R.identifier=De(this.sliceSerialize(j)).toLowerCase(),this.data.referenceType="full"}function re(j){this.data.characterReferenceType=j.type}function te(j){const z=this.sliceSerialize(j),R=this.data.characterReferenceType;let V;R?(V=Xr(z,R==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):V=tn(z);const Q=this.stack.pop();Q.value+=V,Q.position.end=Te(j.end)}function Pe(j){D.call(this,j);const z=this.stack[this.stack.length-1];z.url=this.sliceSerialize(j)}function Se(j){D.call(this,j);const z=this.stack[this.stack.length-1];z.url="mailto:"+this.sliceSerialize(j)}function Me(){return{type:"blockquote",children:[]}}function Ae(){return{type:"code",lang:null,meta:null,value:""}}function mt(){return{type:"inlineCode",value:""}}function ki(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ci(){return{type:"emphasis",children:[]}}function cn(){return{type:"heading",depth:0,children:[]}}function pn(){return{type:"break"}}function hn(){return{type:"html",value:""}}function ji(){return{type:"image",title:null,url:"",alt:null}}function dn(){return{type:"link",title:null,url:"",children:[]}}function fn(j){return{type:"list",ordered:j.type==="listOrdered",start:null,spread:j._spread,children:[]}}function Si(j){return{type:"listItem",spread:j._spread,checked:null,children:[]}}function vi(){return{type:"paragraph",children:[]}}function Ei(){return{type:"strong",children:[]}}function Ti(){return{type:"text",value:""}}function Ii(){return{type:"thematicBreak"}}}function Te(e){return{line:e.line,column:e.column,offset:e.offset}}function ui(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?ui(e,r):Yp(e,r)}}function Yp(e,t){let n;for(n in t)if(ai.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Vn(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ye({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ye({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ye({start:t.start,end:t.end})+") is still open")}function Wp(e){const t=this;t.parser=n;function n(r){return Up(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function qp(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Qp(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Zp(e,t){const n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i}function Xp(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Kp(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Jp(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=He(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,a+=1,e.footnoteCounts.set(r,a);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function e0(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function t0(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function ci(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function n0(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ci(e,t);const i={src:He(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function r0(e,t){const n={src:He(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function i0(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function o0(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ci(e,t);const i={href:He(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function l0(e,t){const n={href:He(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function s0(e,t,n){const r=e.all(t),i=n?a0(n):pi(t),o={},l=[];if(typeof t.checked=="boolean"){const h=r[0];let d;h&&h.type==="element"&&h.tagName==="p"?d=h:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const h=r[a];(i||a!==0||h.type!=="element"||h.tagName!=="p")&&l.push({type:"text",value:`
`}),h.type==="element"&&h.tagName==="p"&&!i?l.push(...h.children):l.push(h)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&l.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,u),e.applyData(t,u)}function a0(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=pi(n[r])}return t}function pi(e){const t=e.spread;return t??e.children.length>1}function u0(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function c0(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function p0(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function h0(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function d0(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Xt(t.children[1]),c=Ur(t.children[t.children.length-1]);a&&c&&(l.position={start:a,end:c}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function f0(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let c=-1;const u=[];for(;++c<a;){const d=t.children[c],f={},p=l?l[c]:void 0;p&&(f.align=p);let g={type:"element",tagName:o,properties:f,children:[]};d&&(g.children=e.all(d),e.patch(d,g),g=e.applyData(d,g)),u.push(g)}const h={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,h),e.applyData(t,h)}function x0(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Un=9,Gn=32;function m0(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Yn(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Yn(t.slice(i),i>0,!1)),o.join("")}function Yn(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Un||o===Gn;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Un||o===Gn;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function g0(e,t){const n={type:"text",value:m0(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function y0(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const w0={blockquote:qp,break:Qp,code:Zp,delete:Xp,emphasis:Kp,footnoteReference:Jp,heading:e0,html:t0,imageReference:n0,image:r0,inlineCode:i0,linkReference:o0,link:l0,listItem:s0,list:u0,paragraph:c0,root:p0,strong:h0,table:d0,tableCell:x0,tableRow:f0,text:g0,thematicBreak:y0,toml:Je,yaml:Je,definition:Je,footnoteDefinition:Je};function Je(){}const hi=-1,ft=0,lt=1,st=2,on=3,ln=4,sn=5,an=6,di=7,fi=8,Wn=typeof self=="object"?self:globalThis,b0=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case ft:case hi:return n(l,i);case lt:{const a=n([],i);for(const c of l)a.push(r(c));return a}case st:{const a=n({},i);for(const[c,u]of l)a[r(c)]=r(u);return a}case on:return n(new Date(l),i);case ln:{const{source:a,flags:c}=l;return n(new RegExp(a,c),i)}case sn:{const a=n(new Map,i);for(const[c,u]of l)a.set(r(c),r(u));return a}case an:{const a=n(new Set,i);for(const c of l)a.add(r(c));return a}case di:{const{name:a,message:c}=l;return n(new Wn[a](c),i)}case fi:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i)}return n(new Wn[o](l),i)};return r},qn=e=>b0(new Map,e)(0),Re="",{toString:k0}={},{keys:C0}=Object,Ge=e=>{const t=typeof e;if(t!=="object"||!e)return[ft,t];const n=k0.call(e).slice(8,-1);switch(n){case"Array":return[lt,Re];case"Object":return[st,Re];case"Date":return[on,Re];case"RegExp":return[ln,Re];case"Map":return[sn,Re];case"Set":return[an,Re]}return n.includes("Array")?[lt,n]:n.includes("Error")?[di,n]:[st,n]},et=([e,t])=>e===ft&&(t==="function"||t==="symbol"),j0=(e,t,n,r)=>{const i=(l,a)=>{const c=r.push(l)-1;return n.set(a,c),c},o=l=>{if(n.has(l))return n.get(l);let[a,c]=Ge(l);switch(a){case ft:{let h=l;switch(c){case"bigint":a=fi,h=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);h=null;break;case"undefined":return i([hi],l)}return i([a,h],l)}case lt:{if(c)return i([c,[...l]],l);const h=[],d=i([a,h],l);for(const f of l)h.push(o(f));return d}case st:{if(c)switch(c){case"BigInt":return i([c,l.toString()],l);case"Boolean":case"Number":case"String":return i([c,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const h=[],d=i([a,h],l);for(const f of C0(l))(e||!et(Ge(l[f])))&&h.push([o(f),o(l[f])]);return d}case on:return i([a,l.toISOString()],l);case ln:{const{source:h,flags:d}=l;return i([a,{source:h,flags:d}],l)}case sn:{const h=[],d=i([a,h],l);for(const[f,p]of l)(e||!(et(Ge(f))||et(Ge(p))))&&h.push([o(f),o(p)]);return d}case an:{const h=[],d=i([a,h],l);for(const f of l)(e||!et(Ge(f)))&&h.push(o(f));return d}}const{message:u}=l;return i([a,{name:c,message:u}],l)};return o},Qn=(e,{json:t,lossy:n}={})=>{const r=[];return j0(!(t||n),!!t,new Map,r)(e),r},at=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?qn(Qn(e,t)):structuredClone(e):(e,t)=>qn(Qn(e,t));function S0(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function v0(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function E0(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||S0,r=e.options.footnoteBackLabel||v0,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const h=e.all(u),d=String(u.identifier).toUpperCase(),f=He(d.toLowerCase());let p=0;const g=[],k=e.footnoteCounts.get(d);for(;k!==void 0&&++p<=k;){g.length>0&&g.push({type:"text",value:" "});let C=typeof n=="string"?n:n(c,p);typeof C=="string"&&(C={type:"text",value:C}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,p),className:["data-footnote-backref"]},children:Array.isArray(C)?C:[C]})}const T=h[h.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const C=T.children[T.children.length-1];C&&C.type==="text"?C.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...g)}else h.push(...g);const S={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(h,!0)};e.patch(u,S),a.push(S)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...at(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const xi=function(e){if(e==null)return P0;if(typeof e=="function")return xt(e);if(typeof e=="object")return Array.isArray(e)?T0(e):I0(e);if(typeof e=="string")return _0(e);throw new Error("Expected function, string, or object as test")};function T0(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=xi(e[n]);return xt(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function I0(e){const t=e;return xt(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function _0(e){return xt(t);function t(n){return n&&n.type===e}}function xt(e){return t;function t(n,r,i){return!!(A0(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function P0(){return!0}function A0(e){return e!==null&&typeof e=="object"&&"type"in e}const mi=[],z0=!0,Zn=!1,L0="skip";function B0(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=xi(i),l=r?-1:1;a(e,void 0,[])();function a(c,u,h){const d=c&&typeof c=="object"?c:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=mi,g,k,T;if((!t||o(c,u,h[h.length-1]||void 0))&&(p=M0(n(c,h)),p[0]===Zn))return p;if("children"in c&&c.children){const S=c;if(S.children&&p[0]!==L0)for(k=(r?S.children.length:-1)+l,T=h.concat(S);k>-1&&k<S.children.length;){const C=S.children[k];if(g=a(C,k,T)(),g[0]===Zn)return g;k=typeof g[1]=="number"?g[1]:k+l}}return p}}}function M0(e){return Array.isArray(e)?e:typeof e=="number"?[z0,e]:e==null?mi:[e]}function gi(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),B0(e,o,a,i);function a(c,u){const h=u[u.length-1],d=h?h.children.indexOf(c):void 0;return l(c,d,h)}}const Dt={}.hasOwnProperty,O0={};function R0(e,t){const n=t||O0,r=new Map,i=new Map,o=new Map,l={...w0,...n.handlers},a={all:u,applyData:D0,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:c,options:n,patch:F0,wrap:N0};return gi(e,function(h){if(h.type==="definition"||h.type==="footnoteDefinition"){const d=h.type==="definition"?r:i,f=String(h.identifier).toUpperCase();d.has(f)||d.set(f,h)}}),a;function c(h,d){const f=h.type,p=a.handlers[f];if(Dt.call(a.handlers,f)&&p)return p(a,h,d);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in h){const{children:k,...T}=h,S=at(T);return S.children=a.all(h),S}return at(h)}return(a.options.unknownHandler||$0)(a,h,d)}function u(h){const d=[];if("children"in h){const f=h.children;let p=-1;for(;++p<f.length;){const g=a.one(f[p],h);if(g){if(p&&f[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Xn(g.value)),!Array.isArray(g)&&g.type==="element")){const k=g.children[0];k&&k.type==="text"&&(k.value=Xn(k.value))}Array.isArray(g)?d.push(...g):d.push(g)}}}return d}}function F0(e,t){e.position&&(t.position=bu(e))}function D0(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,at(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function $0(e,t){const n=t.data||{},r="value"in t&&!(Dt.call(n,"hProperties")||Dt.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function N0(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Xn(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Kn(e,t){const n=R0(e,t),r=n.one(e,void 0),i=E0(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function H0(e,t){return e&&"run"in e?async function(n,r){const i=Kn(n,t);await e.run(i,r)}:function(n){return Kn(n,t||e)}}function Jn(e){if(e)throw e}var rt=Object.prototype.hasOwnProperty,yi=Object.prototype.toString,er=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,nr=function(t){return typeof Array.isArray=="function"?Array.isArray(t):yi.call(t)==="[object Array]"},rr=function(t){if(!t||yi.call(t)!=="[object Object]")return!1;var n=rt.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&rt.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||rt.call(t,i)},ir=function(t,n){er&&n.name==="__proto__"?er(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},or=function(t,n){if(n==="__proto__")if(rt.call(t,n)){if(tr)return tr(t,n).value}else return;return t[n]},V0=function e(){var t,n,r,i,o,l,a=arguments[0],c=1,u=arguments.length,h=!1;for(typeof a=="boolean"&&(h=a,a=arguments[1]||{},c=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=or(a,n),i=or(t,n),a!==i&&(h&&i&&(rr(i)||(o=nr(i)))?(o?(o=!1,l=r&&nr(r)?r:[]):l=r&&rr(r)?r:{},ir(a,{name:n,newValue:e(h,l,i)})):typeof i<"u"&&ir(a,{name:n,newValue:i}));return a};const St=Bi(V0);function $t(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function U0(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(c,...u){const h=e[++o];let d=-1;if(c){l(c);return}for(;++d<i.length;)(u[d]===null||u[d]===void 0)&&(u[d]=i[d]);i=u,h?G0(h,a)(...u):l(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function G0(e,t){let n;return r;function r(...l){const a=e.length>l.length;let c;a&&l.push(i);try{c=e.apply(this,l)}catch(u){const h=u;if(a&&n)throw h;return i(h)}a||(c instanceof Promise?c.then(o,i):c instanceof Error?i(c):o(c))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const ke={basename:Y0,dirname:W0,extname:q0,join:Q0,sep:"/"};function Y0(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Xe(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function W0(e){if(Xe(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function q0(e){Xe(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Q0(...e){let t=-1,n;for(;++t<e.length;)Xe(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Z0(n)}function Z0(e){Xe(e);const t=e.codePointAt(0)===47;let n=X0(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function X0(e,t){let n="",r=0,i=-1,o=0,l=-1,a,c;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function Xe(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const K0={cwd:J0};function J0(){return"/"}function Nt(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function e1(e){if(typeof e=="string")e=new URL(e);else if(!Nt(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return t1(e)}function t1(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const vt=["history","path","basename","stem","extname","dirname"];class wi{constructor(t){let n;t?Nt(t)?n={path:t}:typeof t=="string"||n1(t)?n={value:t}:n=t:n={},this.cwd=K0.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<vt.length;){const o=vt[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)vt.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?ke.basename(this.path):void 0}set basename(t){Tt(t,"basename"),Et(t,"basename"),this.path=ke.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?ke.dirname(this.path):void 0}set dirname(t){lr(this.basename,"dirname"),this.path=ke.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?ke.extname(this.path):void 0}set extname(t){if(Et(t,"extname"),lr(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ke.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Nt(t)&&(t=e1(t)),Tt(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?ke.basename(this.path,this.extname):void 0}set stem(t){Tt(t,"stem"),Et(t,"stem"),this.path=ke.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ie(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Et(e,t){if(e&&e.includes(ke.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+ke.sep+"`")}function Tt(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function lr(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function n1(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const r1=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};Object.setPrototypeOf(o,r);const l=Object.getOwnPropertyNames(i);for(const a of l){const c=Object.getOwnPropertyDescriptor(i,a);c&&Object.defineProperty(o,a,c)}return o},i1={}.hasOwnProperty;class un extends r1{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=U0()}copy(){const t=new un;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(St(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Pt("data",this.frozen),this.namespace[t]=n,this):i1.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Pt("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=tt(t),r=this.parser||this.Parser;return It("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),It("process",this.parser||this.Parser),_t("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const a=tt(t),c=r.parse(a);r.run(c,a,function(h,d,f){if(h||!d||!f)return u(h);const p=d,g=r.stringify(p,f);s1(g)?f.value=g:f.result=g,u(h,f)});function u(h,d){h||!d?l(h):o?o(d):n(void 0,d)}}}processSync(t){let n=!1,r;return this.freeze(),It("processSync",this.parser||this.Parser),_t("processSync",this.compiler||this.Compiler),this.process(t,i),ar("processSync","process",n),r;function i(o,l){n=!0,Jn(o),r=l}}run(t,n,r){sr(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const c=tt(n);i.run(t,c,u);function u(h,d,f){const p=d||t;h?a(h):l?l(p):r(void 0,p,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),ar("runSync","run",r),i;function o(l,a){Jn(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=tt(n),i=this.compiler||this.Compiler;return _t("stringify",i),sr(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Pt("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[h,...d]=u;c(h,d)}else l(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function l(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=St(!0,i.settings,u.settings))}function a(u){let h=-1;if(u!=null)if(Array.isArray(u))for(;++h<u.length;){const d=u[h];o(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,h){let d=-1,f=-1;for(;++d<r.length;)if(r[d][0]===u){f=d;break}if(f===-1)r.push([u,...h]);else if(h.length>0){let[p,...g]=h;const k=r[f][1];$t(k)&&$t(p)&&(p=St(!0,k,p)),r[f]=[u,p,...g]}}}}const o1=new un().freeze();function It(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function _t(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Pt(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function sr(e){if(!$t(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ar(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function tt(e){return l1(e)?e:new wi(e)}function l1(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function s1(e){return typeof e=="string"||a1(e)}function a1(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const u1="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",ur=[],cr={allowDangerousHtml:!0},c1=/^(https?|ircs?|mailto|xmpp)$/i,p1=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function h1(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",i=e.className,o=e.components,l=e.disallowedElements,a=e.rehypePlugins||ur,c=e.remarkPlugins||ur,u=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...cr}:cr,h=e.skipHtml,d=e.unwrapDisallowed,f=e.urlTransform||d1,p=o1().use(Wp).use(c).use(H0,u).use(a),g=new wi;typeof r=="string"&&(g.value=r);for(const C of p1)Object.hasOwn(e,C.from)&&(""+C.from+(C.to?"use `"+C.to+"` instead":"remove it")+u1+C.id,void 0);const k=p.parse(g);let T=p.runSync(k,g);return i&&(T={type:"element",tagName:"div",properties:{className:i},children:T.type==="root"?T.children:[T]}),gi(T,S),Eu(T,{Fragment:s.Fragment,components:o,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function S(C,E,L){if(C.type==="raw"&&L&&typeof E=="number")return h?L.children.splice(E,1):L.children[E]={type:"text",value:C.value},E;if(C.type==="element"){let B;for(B in kt)if(Object.hasOwn(kt,B)&&Object.hasOwn(C.properties,B)){const v=C.properties[B],F=kt[B];(F===null||F.includes(C.tagName))&&(C.properties[B]=f(String(v||""),B,C))}}if(C.type==="element"){let B=t?!t.includes(C.tagName):l?l.includes(C.tagName):!1;if(!B&&n&&typeof E=="number"&&(B=!n(C,E,L)),B&&L&&typeof E=="number")return d&&C.children?L.children.splice(E,1,...C.children):L.children.splice(E,1),E}}}function d1(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t<0||i>-1&&t>i||n>-1&&t>n||r>-1&&t>r||c1.test(e.slice(0,t))?e:""}const f1=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"brand_awareness",children:[s.jsx("mask",{id:"mask0_3696_4540",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_3696_4540)",children:s.jsx("path",{id:"brand_awareness_2",d:"M15.577 10.625H13.8142C13.6368 10.625 13.4883 10.5652 13.3687 10.4455C13.249 10.3259 13.1892 10.1774 13.1892 10C13.1892 9.82269 13.249 9.67419 13.3687 9.55454C13.4883 9.43489 13.6368 9.37506 13.8142 9.37506H15.577C15.7543 9.37506 15.9028 9.43489 16.0225 9.55454C16.1421 9.67419 16.202 9.82269 16.202 10C16.202 10.1774 16.1421 10.3259 16.0225 10.4455C15.9028 10.5652 15.7543 10.625 15.577 10.625ZM12.1106 13.9279C12.2175 13.7816 12.354 13.6972 12.5201 13.6747C12.6862 13.6523 12.8425 13.6945 12.9888 13.8013L14.3943 14.8574C14.5406 14.9642 14.625 15.1007 14.6475 15.2669C14.6699 15.433 14.6277 15.5892 14.5209 15.7356C14.4141 15.882 14.2776 15.9664 14.1114 15.9888C13.9453 16.0112 13.7891 15.969 13.6427 15.8622L12.2372 14.8061C12.0909 14.6993 12.0065 14.5628 11.9841 14.3967C11.9616 14.2305 12.0038 14.0743 12.1106 13.9279ZM14.3622 5.1106L12.9568 6.16671C12.8104 6.27354 12.6542 6.31574 12.488 6.29331C12.3219 6.27087 12.1854 6.18646 12.0786 6.0401C11.9718 5.89374 11.9296 5.7375 11.952 5.57137C11.9744 5.40525 12.0588 5.26876 12.2052 5.16192L13.6106 4.10583C13.757 3.999 13.9133 3.9568 14.0794 3.97923C14.2455 4.00166 14.382 4.08606 14.4888 4.23244C14.5957 4.3788 14.6379 4.53504 14.6154 4.70116C14.593 4.86729 14.5086 5.00377 14.3622 5.1106ZM6.05778 12.0834H3.71805C3.5033 12.0834 3.32408 12.0115 3.18039 11.8678C3.03669 11.7241 2.96484 11.5449 2.96484 11.3301V8.66994C2.96484 8.4552 3.03669 8.27599 3.18039 8.13229C3.32408 7.98858 3.5033 7.91673 3.71805 7.91673H6.05778L8.55134 5.42317C8.75114 5.22339 8.9811 5.17771 9.24124 5.28614C9.50138 5.39459 9.63145 5.5909 9.63145 5.87508V14.125C9.63145 14.4092 9.50138 14.6055 9.24124 14.7139C8.9811 14.8224 8.75114 14.7767 8.55134 14.5769L6.05778 12.0834Z",fill:"currentColor"})})]})}),x1=({trend:e,onClose:t,selectTrending:n})=>{var g,k;const[r,i]=P.useState(!1),{close:o}=At("briefDescription"),{currentPlayingAudio:l,setCurrentPlayingAudio:a}=he(T=>T),c=P.useRef(null),u=()=>n(e.name),h=P.useCallback(()=>{t(),o()},[t,o]),d=()=>{c.current&&(r?c.current.pause():c.current.play(),i(!r))},f=()=>{var S,C,E;const T=!((S=l==null?void 0:l.current)!=null&&S.paused);T&&((C=l==null?void 0:l.current)==null||C.pause(),a(null)),(((E=l==null?void 0:l.current)==null?void 0:E.src)!==e.audio_EN||!T)&&d()};P.useEffect(()=>{const T=c.current,S=()=>{i(!1),a(null)};return T&&T.addEventListener("ended",S),()=>{T&&T.removeEventListener("ended",S)}},[a]);const p=((g=l==null?void 0:l.current)==null?void 0:g.src)===e.audio_EN&&!((k=l==null?void 0:l.current)!=null&&k.paused)||r;return s.jsxs(Co,{"data-testid":"brief-description-modal",id:"briefDescription",kind:"regular",noWrap:!0,onClose:h,preventOutsideClose:!0,children:[e.audio_EN?s.jsxs(s.Fragment,{children:[s.jsxs(b1,{children:[s.jsx(pr,{className:Ie("default",{play:p}),onClick:f,size:"small",startIcon:p?s.jsx(ct,{}):s.jsx(f1,{}),children:p?"Pause":"Listen"}),s.jsx(pr,{className:"default",onClick:u,size:"small",startIcon:s.jsx(Fi,{}),children:"Learn More"})]}),s.jsx(w1,{ref:c,src:e.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null,s.jsxs(w,{mt:75,children:[s.jsx(y1,{children:e.tldr_topic??e.name}),s.jsx(m1,{children:s.jsx(w,{children:s.jsx(g1,{children:e.tldr&&s.jsx(h1,{children:e.tldr})})})})]})]})},m1=b.div`
  max-height: 310px;
  overflow-y: auto;
  margin: 8px 0;
  padding: 0 20px;
`,g1=b(K)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,y1=b(K)`
  font-weight: 600;
  font-size: 20px;
  padding: 0 20px;
`,w1=b.audio`
  display: none;
`,pr=b(pe)`
  && {
    &.default {
      font-size: 13px;
      font-weight: 500;
      font-family: Barlow;
      padding: 12px, 16px, 12px, 10px;
      color: ${y.white};

      &:hover {
        color: ${y.GRAY3};
      }

      &.play {
        color: ${y.BG3};
        background-color: ${y.white};
      }
    }
  }
`,b1=b(w)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${y.BG3};
  gap: 10px;
`,k1=["Drivechain","Ordinals","L402","Nostr","AI"],C1=({onSubmit:e})=>{var D;const{open:t}=At("addContent"),[n,r]=P.useState(!1),[i,o]=P.useState(!1),[l,a]=P.useState(null),c=P.useRef(null),[u,h]=P.useState(0),[d,f]=P.useState(!1),{currentPlayingAudio:p,setCurrentPlayingAudio:g}=he(_=>_),{open:k}=At("briefDescription"),{trendingTopics:T,setTrendingTopics:S}=fe(_=>_),{setValue:C}=gr(),E=P.useCallback(async()=>{r(!0),o(!1),h(0),f(!1),g(null);try{const _=await $a();if(_.length&&Array.isArray(_)){const A=new Map(_.map(G=>[G.name,G])),N=Array.from(A.values());S(N)}}catch{S(k1.map(A=>({name:A,count:0})))}finally{r(!1)}},[g,S]);P.useEffect(()=>{T.length||E()},[E,T.length]),P.useEffect(()=>{const _=setTimeout(()=>{o(!0)},5e3);return()=>clearTimeout(_)},[o,n]);const L=_=>{C("search",_),e==null||e()},B=(_,A)=>{_.stopPropagation(),_.currentTarget.blur(),A!=null&&A.tldr&&(a(A),k())},v=()=>{a(null)},F=_=>{_.stopPropagation(),_.currentTarget.blur(),f(!d),g(c)};P.useEffect(()=>{var _,A;d?(_=c.current)==null||_.play():(A=c.current)==null||A.pause()},[u,d]),P.useEffect(()=>{p||f(!1)},[p]);const U=()=>{h(_=>{var N,G;let A=(_+1)%T.length;for(;A!==_&&!((N=T[A])!=null&&N.audio_EN);)A=(A+1)%T.length;return A===_?(f(!1),A):((G=c.current)==null||G.load(),A===0&&(f(!1),h(0)),A)}),g(c)},H=n?"Loading":"No new trending topics in the last 24 hours";return s.jsxs(S1,{"data-testid":"trending-component",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Trending Topics"}),s.jsx("span",{className:"heading__icon",children:n?s.jsx(Ut,{color:y.white,size:16}):s.jsx(s.Fragment,{children:i?s.jsx(E1,{onClick:E,size:"small",startIcon:s.jsx(Fa,{})}):s.jsx(Da,{})})})]}),So(T)?s.jsxs("div",{children:[s.jsx(pe,{onClick:_=>F(_),startIcon:d?s.jsx(ct,{}):s.jsx(Vt,{}),children:d?"Pause":"Play All"}),s.jsx(_1,{ref:c,onEnded:U,src:(D=T[u])==null?void 0:D.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null]}),T.length===0?s.jsxs("div",{className:"trending-empty",children:[s.jsx(v1,{children:H}),s.jsx(pe,{color:"secondary",disabled:n,onClick:t,size:"medium",startIcon:s.jsx(Cr,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):s.jsx("ul",{className:"list",children:T.map((_,A)=>s.jsxs(w,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>L(_.name),children:[s.jsxs(j1,{children:[s.jsx(I1,{children:s.jsx(Ra,{})}),s.jsx("span",{className:"tldr",children:vo(_)})]}),_.tldr&&s.jsx(T1,{className:Ie({isPlaying:u===A&&d}),onClick:N=>B(N,_),children:"TLDR"})]},_.name))})]}),l&&s.jsx(x1,{onClose:v,selectTrending:L,trend:l})]})},j1=b.div`
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
`,S1=b(w)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
    display: flex;
    align-items: center;
    color: ${y.GRAY6};
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
    color: ${y.GRAY6};
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${y.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${y.SECONDARY_BLUE};
      }
      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${y.PRIMARY_BLUE};
      }
    }
  }
`,v1=b.p`
  color: ${y.GRAY6};
  margin-bottom: 20px;
`,E1=b(pe)`
  && {
    min-width: 28px;
    width: 28px;
    padding: 0;
    height: 28px;
    .MuiButton-startIcon {
      color: ${y.white};
      margin: auto;
      display: flex;
      align-items: center;
    }
  }
`,T1=b(pe)`
  && {
    &.isPlaying {
      font-weight: 700;
      color: ${y.BG1};
      background-color: ${y.white};
    }
  }
`,I1=b.span`
  justify-content: center;
  align-items: center;
  color: ${y.GRAY6};
  margin-right: 4px;
`,_1=b.audio`
  height: 0;
  width: 0;
`,P1=390,A1=P.forwardRef(({onSubmit:e,subViewOpen:t},n)=>{const{isFetching:r,setTeachMe:i,setSidebarFilter:o,setSelectedNode:l}=fe(M=>M),a=dr(),{setSidebarOpen:c,currentSearch:u,clearSearch:h,searchFormValue:d}=he(M=>M),[f]=gn(M=>[M.trendingTopicsFeatureFlag]),[p]=gn(M=>[M.searchFilteringFeatureFlag]),{setValue:g,watch:k}=gr(),T=P.useRef(null),[S,C]=P.useState(!1),[E,L]=P.useState(!1),[B,v]=P.useState(null),[F,U]=P.useState([]),[H,D]=P.useState([]),[_,A]=P.useState(!1);P.useEffect(()=>{g("search",d)},[g,d]),P.useEffect(()=>{const M=T.current;if(!M)return;const q=()=>{C((M==null?void 0:M.scrollTop)>0)};M.addEventListener("scroll",q)},[]);const N=k("search");P.useEffect(()=>{(async()=>{try{const q=await Mi();U(q.schemas)}catch(q){console.error("Error fetching schema:",q)}})()},[]);const G=M=>{v(E?null:M.currentTarget),L(q=>!q),D([]),A(!1)};return s.jsxs(B1,{ref:n,id:"sidebar-wrapper",children:[s.jsx($1,{}),s.jsxs(bi,{className:Ie({"has-shadow":S}),children:[s.jsxs(H1,{children:[s.jsxs(M1,{children:[s.jsx(lo,{onSubmit:e}),s.jsx(R1,{"data-testid":"search_action_icon",onClick:()=>{if(u){g("search",""),h(),o("all"),l(null);return}N.trim()!==""&&(e==null||e())},children:r?s.jsx(Ut,{color:y.SECONDARY_BLUE,"data-testid":"loader",size:"20"}):s.jsx(s.Fragment,{children:u!=null&&u.trim()?s.jsx(xr,{}):s.jsx(Di,{})})})]}),p&&s.jsx(V1,{"data-testid":"search_filter_icon",isFilterOpen:E,onClick:G,children:E?s.jsx(Qo,{}):s.jsx(Zo,{})}),p&&s.jsx(Lo,{anchorEl:B,schemaAll:F,selectedTypes:H,setAnchorEl:v,setIsFilterOpen:L,setSelectedTypes:D,setShowAllSchemas:A,showAllSchemas:_})]}),u&&s.jsx(O1,{children:r?s.jsx(Xo,{}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"left",children:[s.jsx("span",{className:"count",children:a.length}),s.jsx("span",{className:"label",children:" results"})]}),s.jsx("div",{className:"right",style:{alignItems:"center"},children:s.jsx(_o,{})})]})})]}),!t&&s.jsx(F1,{onClick:()=>{c(!1),i(!1)},children:s.jsx(Ir,{})}),s.jsxs(D1,{ref:T,children:[!u&&f&&s.jsx(N1,{children:s.jsx(C1,{onSubmit:e})}),s.jsx(w,{children:r?s.jsx(Il,{}):s.jsx(vl,{isSearchResult:!!u})})]})]})}),z1=["topic","person","guest","event","organization","place","project","software"],L1=({onSubmit:e})=>{const{sidebarIsOpen:t}=he(o=>o),n=xe(),r=!!n&&t&&!z1.includes(n.node_type),{showTeachMe:i}=fe(o=>o);return s.jsxs(s.Fragment,{children:[s.jsx(qt,{direction:"right",in:t,mountOnEnter:!0,unmountOnExit:!0,children:s.jsx(A1,{onSubmit:e,subViewOpen:r})}),s.jsx(Pa,{open:r||!!i}),!t&&s.jsx(Ma,{})]})},B1=b(w)(({theme:e})=>({position:"relative",background:y.BG1,height:"100vh",width:"100%",zIndex:30,[e.breakpoints.up("sm")]:{width:P1}})),bi=b(w).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:e})=>({padding:e.spacing(3.75,2),[e.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:y.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),M1=b(w).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,O1=b(w).attrs({direction:"row",justify:"space-between",align:"center"})`
  flex-grow: 1;
  color: ${y.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
  padding: 0 8px;
  .count {
    color: ${y.white};
  }

  .right {
    display: flex;
  }
`,R1=b(w).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${y.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${y.gray200}; */
  }

  ${bi} input:focus + & {
    color: ${y.primaryBlue};
  }
`,F1=b(w).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),D1=b(w)(()=>({overflow:"auto",flex:1,width:"100%"})),$1=b(w)`
  height: 64px;
  background: ${y.BG2};
`,N1=b(w)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`,H1=b(w)`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
`,V1=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  margin: 1px 2px 0 0;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  background-color: ${({isFilterOpen:e})=>e?y.white:"transparent"};

  &:hover {
    background-color: ${({isFilterOpen:e})=>e?"rgba(255, 255, 255, 0.85)":"rgba(255, 255, 255, 0.2)"};
  }

  svg {
    width: 15px;
    height: ${({isFilterOpen:e})=>e?"11px":"24px"};
    color: ${({isFilterOpen:e})=>e?y.black:y.GRAY7};
    fill: none;
  }
`;L1.displayName="Sidebar";export{P1 as MENU_WIDTH,L1 as SideBar};
