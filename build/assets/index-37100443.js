import{aL as Ci,r as A,f as j,h as w,i as fe,j as s,l as Ie,F as y,T as J,O as Ht,k as pe,aM as pr,aN as Si,x as hr,o as vi,aO as Ei,P as Ti,a4 as xe,aP as xn,a2 as Ii,aQ as mn,ad as _i,B as At,aR as Ai,J as Pi}from"./index-b17e6e7f.js";import{l as zi,m as mt,A as ke,B as we,d as Li,I as dr,f as at,g as Pt,n as ut,P as Vt,C as Ut,o as Bi,i as fr,b as Mi,S as Oi}from"./react-toastify.esm-ac6bd257.js";import{C as xr}from"./CheckIcon-7c4c0597.js";import{C as mr}from"./ChevronDownIcon-3b7a3112.js";import{C as Ri}from"./ChevronUpIcon-40f696de.js";import{F as gr,a as Di,T as Fi}from"./Popover-bcd53c70.js";import{G as yr,L as Gt,B as Yt,H as Ni,M as $i,R as Hi,a as Vi,S as Ui,b as Gi,N as wr,C as Yi,D as qt,c as kr,d as qi,f as Wi,g as br,e as Qi,P as Zi,h as jr,s as gn,V as Xi,F as Ki,E as Ji,i as eo,j as to,k as Cr,l as no}from"./ChevronRightIcon-89bde83e.js";import{S as ro}from"./index-62fced0f.js";import{f as rt,o as Sr,P as vr,n as io,X as oo,Y as lo,T as so,D as ao,S as Wt,q as Er}from"./generateCategoricalChart-435279e6.js";import{T as Ne,I as uo,S as co,O as po}from"./index-b0a49808.js";import{S as ho}from"./Skeleton-f751c368.js";import{f as fo,c as xo,g as mo,h as go}from"./index.esm-de2ad175.js";import{I as yo}from"./InfoIcon-eed706a9.js";import{P as wo}from"./PlusIcon-179f716a.js";import{B as ko}from"./index-a41ce7c3.js";import"./useSlotProps-ddc77366.js";const bo=(e,t="down")=>{const n=Ci(),[r,i]=A.useState(!1),o=n.breakpoints[t](e).split("@media")[1].trim();return A.useEffect(()=>{const l=()=>{const{matches:a}=window.matchMedia(o);i(a)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[o]),r},jo=e=>e.filter(t=>t.tldr).length>=2&&e.some(t=>t.audio_EN);function Co(e){return e.tldr_topic??e.name}var it=globalThis&&globalThis.__assign||function(){return it=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},it.apply(this,arguments)},So=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},vo=zi("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function Eo(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?"#000000":r,o=e.speedMultiplier,l=o===void 0?1:o,a=e.cssOverride,u=a===void 0?{}:a,c=e.size,p=c===void 0?15:c,h=e.margin,f=h===void 0?2:h,d=So(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),g=it({display:"inherit"},u),k=function(T){return{display:"inline-block",backgroundColor:i,width:mt(p),height:mt(p),margin:mt(f),borderRadius:"100%",animation:"".concat(vo," ").concat(.7/l,"s ").concat(T%2?"0s":"".concat(.35/l,"s")," infinite linear"),animationFillMode:"both"}};return n?A.createElement("span",it({style:g},d),A.createElement("span",{style:k(1)}),A.createElement("span",{style:k(2)}),A.createElement("span",{style:k(3)})):null}const To=()=>{var h;const[e,t]=A.useState(null),{sidebarFilter:n,setSidebarFilter:r,sidebarFilterCounts:i}=fe(f=>f),o=n==="undefined"?"":n.toLowerCase(),l=((h=i.find(f=>f.name===o))==null?void 0:h.count)||0,a=f=>f?f.charAt(0).toUpperCase()+f.slice(1):"",u=f=>{t(f.currentTarget)},c=()=>{t(null)},p=f=>{r(f),c()};return s.jsxs("div",{children:[s.jsxs(Io,{onClick:u,children:[s.jsx("div",{className:"text",children:"Show"}),s.jsx("div",{className:"value","data-testid":"value",children:`${a(o)} (${l})`}),s.jsx("div",{className:"icon",children:e?s.jsx(Ri,{}):s.jsx(mr,{})})]}),s.jsx(Ao,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:c,open:!!e,transformOrigin:{vertical:"top",horizontal:"left"},children:s.jsx(gr,{children:i.filter(({name:f})=>f).map(({name:f,count:d})=>s.jsxs(_o,{className:Ie({active:f===n}),onClick:g=>{g.preventDefault(),p(f)},children:[s.jsx("span",{className:"icon",children:f===n?s.jsx(xr,{}):null}),s.jsx("span",{children:`${a(f)} (${d})`})]},f))})})]})},Io=j(y).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${w.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${w.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,_o=j(y).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${w.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${w.white};
  }
  &:hover {
    color: ${w.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Ao=j(Di)`
  .MuiPaper-root {
    background: ${w.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${w.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,gt=[["Searching","Podcast Index"],["Finding","Transcripts"],["Loading","Audio Clips"],["Loading","Video Clips"],["Preparing","Results"]],Po=()=>{const[e,t]=A.useState(0);return A.useEffect(()=>{if(e===gt.length-1)return;const n=setTimeout(()=>t(r=>(r+1)%gt.length),2e3);return()=>clearTimeout(n)},[e]),s.jsx(zo,{direction:"column",children:gt.map((n,r)=>s.jsxs(y,{className:Ie("raw-wrapper",{show:e===r}),direction:"row",children:[s.jsx("div",{className:Ie("action"),children:n[0]}),s.jsx("div",{className:Ie("entity"),children:n[1]}),s.jsx("div",{children:s.jsx(Eo,{color:w.SECONDARY_BLUE,size:2})})]},n[1]))})},zo=j(y)`
  overflow: hidden;
  height: 20px;
  position: relative;
  .action {
    color: ${w.white};
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
    color: ${w.SECONDARY_BLUE};
  }
`,Lo=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"browse_gallery",children:[s.jsx("mask",{id:"mask0_1360_27257",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1360_27257)",children:s.jsx("path",{id:"browse_gallery_2",d:"M11.8 15.8442L12.8442 14.8L9.74998 11.7026V7.25003H8.25003V12.2942L11.8 15.8442ZM18 19.9615V18.3C19.2333 17.7167 20.2083 16.8583 20.925 15.725C21.6417 14.5917 22 13.35 22 12C22 10.65 21.6417 9.40834 20.925 8.27501C20.2083 7.14167 19.2333 6.28334 18 5.70001V4.03851C19.6628 4.67184 20.9952 5.71318 21.9971 7.16253C22.999 8.61188 23.5 10.2244 23.5 12C23.5 13.7756 22.999 15.3881 21.9971 16.8375C20.9952 18.2868 19.6628 19.3282 18 19.9615ZM9.00055 20.5C7.8207 20.5 6.71539 20.2769 5.68463 19.8307C4.65386 19.3846 3.75514 18.7782 2.98848 18.0115C2.22181 17.2449 1.61541 16.3463 1.16927 15.3159C0.723092 14.2855 0.5 13.1804 0.5 12.0006C0.5 10.8207 0.723083 9.7154 1.16925 8.68463C1.6154 7.65386 2.2218 6.75515 2.98845 5.98848C3.75512 5.22183 4.65365 4.61543 5.68405 4.16928C6.71445 3.72311 7.81957 3.50003 8.99942 3.50003C10.1793 3.50003 11.2846 3.72311 12.3154 4.16928C13.3461 4.61543 14.2448 5.22183 15.0115 5.98848C15.7782 6.75515 16.3846 7.65368 16.8307 8.68408C17.2769 9.71448 17.5 10.8196 17.5 11.9995C17.5 13.1793 17.2769 14.2846 16.8307 15.3154C16.3846 16.3461 15.7782 17.2449 15.0115 18.0115C14.2448 18.7782 13.3463 19.3846 12.3159 19.8307C11.2855 20.2769 10.1804 20.5 9.00055 20.5ZM9 19C10.95 19 12.6042 18.3208 13.9625 16.9625C15.3208 15.6042 16 13.95 16 12C16 10.05 15.3208 8.39584 13.9625 7.03751C12.6042 5.67917 10.95 5.00001 9 5.00001C7.05 5.00001 5.39583 5.67917 4.0375 7.03751C2.67917 8.39584 2 10.05 2 12C2 13.95 2.67917 15.6042 4.0375 16.9625C5.39583 18.3208 7.05 19 9 19Z",fill:"currentColor"})})]})}),Bo=e=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("mask",{id:"mask0_2638_2680",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_2638_2680)",children:s.jsx("path",{d:"M9.99732 16C9.90858 16 9.82421 15.985 9.74419 15.9551C9.66418 15.9252 9.5909 15.8765 9.52435 15.8091L6.18835 12.4277C6.06278 12.3004 6 12.1406 6 11.9483C6 11.7559 6.06278 11.5961 6.18835 11.4689C6.32145 11.3315 6.48099 11.2648 6.66697 11.2686C6.85295 11.2724 7.00873 11.3392 7.13429 11.4689L9.32114 13.674V4.68539C9.32114 4.49306 9.3864 4.33074 9.51692 4.19845C9.64744 4.06615 9.80758 4 9.99732 4C10.1871 4 10.3472 4.06615 10.4777 4.19845C10.6082 4.33074 10.6735 4.49306 10.6735 4.68539V13.674L12.849 11.4689C12.9845 11.3315 13.1447 11.2629 13.3294 11.2629C13.5143 11.2629 13.6744 11.3315 13.8099 11.4689C13.9378 11.6062 14.0012 11.7685 14 11.9558C13.9988 12.1431 13.9354 12.3004 13.8099 12.4277L10.4738 15.8091C10.4073 15.8765 10.3334 15.9252 10.2522 15.9551C10.171 15.985 10.0861 16 9.99732 16Z",fill:"currentColor"})})]}),Mo=j(y)`
  overflow-y: auto;
  overflow-x: hidden;
  background: ${w.body};
`,Oo=({imageUrl:e,name:t})=>s.jsxs(y,{align:"center",direction:"row",children:[e&&s.jsx(Ro,{children:s.jsx(ke,{rounded:!0,size:64,src:e||"",type:"image"})}),t&&s.jsx(Do,{children:t})]}),Ro=j(y)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Do=j(y)`
  color: ${w.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Fo=({text:e,type:t,sourceLink:n})=>s.jsxs(y,{direction:"column",children:[s.jsx(y,{align:"center",direction:"row",children:s.jsx(Ne,{type:t})}),s.jsx(zt,{"data-testid":"episode-description",children:e}),s.jsx(y,{align:"center",direction:"row",justify:"flex-start",children:n&&s.jsxs(No,{href:n,onClick:r=>r.stopPropagation(),target:"_blank",children:[s.jsx(yr,{}),s.jsx($o,{children:n})]})})]}),No=j.a`
  color: ${w.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,$o=j(J)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${w.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Ho=({title:e,imageUrl:t,name:n})=>s.jsxs(y,{align:"center",direction:"row",children:[s.jsx(Vo,{children:s.jsx(ke,{rounded:!0,size:64,src:t||"",type:"person"})}),(e||n)&&s.jsx(Uo,{children:e||n})]}),Vo=j(y)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Uo=j(y)`
  color: ${w.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Go=({text:e,imageUrl:t,date:n,twitterHandle:r,name:i,verified:o})=>s.jsxs(y,{direction:"column",children:[s.jsxs(y,{align:"center",direction:"row",pr:16,children:[s.jsx(Yo,{children:s.jsx(ke,{rounded:!0,size:27,src:t||"",type:"person"})}),s.jsxs(y,{children:[s.jsxs(qo,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),r&&s.jsxs(Wo,{children:["@",r]})]})]}),s.jsxs(y,{grow:1,shrink:1,children:[s.jsx(Qo,{"data-testid":"episode-description",children:e}),s.jsx(y,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!n&&s.jsx(ct,{children:Ht.unix(n).fromNow()})})]})]}),Yo=j(y)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,qo=j(y)`
  color: ${w.white};
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
  .verification {
    margin-left: 4px;
  }
`,Wo=j(y)`
  color: ${w.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,Qo=j(y)`
  color: ${w.white};
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
`,Zo=j(y).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${w.BG1};

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
`,Tr=({boostCount:e,date:t,episodeTitle:n,isSelectedView:r=!1,imageUrl:i,showTitle:o,type:l,text:a,name:u,sourceLink:c,verified:p=!1,twitterHandle:h,className:f="episode-wrapper",onClick:d})=>{const g=l==="show"?o:n,k=l==="show"?"":o,T=["tweet","person","guest","topic","document"],S=l==="video"?"video":"audio";return l?s.jsx(Zo,{className:f,onClick:d,children:T.includes(l)?s.jsxs(s.Fragment,{children:[l==="topic"&&s.jsxs(Xo,{children:[s.jsx(Ni,{}),s.jsx("p",{children:k})]}),["person","guest"].includes(l)&&s.jsx(Ho,{imageUrl:i,name:u||"",title:o||""}),["image"].includes(l)&&s.jsx(Oo,{imageUrl:c,name:u||""}),l==="tweet"&&s.jsx(Go,{date:t,imageUrl:i,name:u||"",text:a||"",twitterHandle:h,verified:p}),l==="document"&&s.jsx(Fo,{sourceLink:c||"",text:a||"",type:l})]}):s.jsxs(y,{align:"center",direction:"row",justify:"center",children:[!r&&s.jsx(y,{align:"center",pr:16,children:s.jsx(ke,{size:80,src:i||`${S}_default.svg`,type:l||""})}),s.jsxs(y,{grow:1,shrink:1,children:[s.jsxs(y,{align:"center",direction:"row",justify:"space-between",children:[s.jsx(y,{align:"center",direction:"row",children:l&&s.jsx(Ne,{type:l})}),l==="video"&&c?s.jsx(Jo,{href:`${c}${c.includes("?")?"&":"?"}open=system`,onClick:b=>b.stopPropagation(),target:"_blank",children:s.jsx(Gt,{})}):null]}),u&&s.jsx(zt,{"data-testid":"episode-name",children:u}),s.jsx(zt,{"data-testid":"episode-description",children:g}),s.jsxs(y,{align:"center",direction:"row",justify:"flex-start",children:[!!t&&s.jsx(ct,{children:Ht.unix(t).fromNow()}),!!k&&s.jsx(Ko,{children:k}),!r&&e>0&&s.jsx(y,{style:{marginLeft:"auto"},children:s.jsx(Yt,{amt:e})})]})]})]})}):null},zt=j(y)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: ${w.white};
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
`,ct=j(J)`
  overflow: hidden;
  color: ${w.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
  letter-spacing: 0.2pt;
`,Xo=j.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    color: ${w.mainBottomIcons};
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
`,Ko=j(ct)`
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
    background: ${w.GRAY6};
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
`,Jo=j.a`
  color: ${w.GRAY6};
  font-size: 16px;
  height: 16px;
`,el=({isSearchResult:e})=>{const t=A.useRef(null),n=e?80:10,{setSelectedNode:r,setSelectedTimestamp:i}=fe(L=>L),{currentSearch:o,setSidebarOpen:l,setRelevanceSelected:a}=pe(L=>L),[u,c]=A.useState(0),[p,h]=A.useState(0),f=pr(),g=u*n+n,k=f&&f.length>0?f.length-1>g:!1,T=bo("sm","down"),S=A.useCallback(L=>{Si(L),i(L),a(!0),r(L),T&&l(!1)},[r,a,l,i,T]),b=()=>{k&&(c(u+1),h(L=>L+1))},E=A.useMemo(()=>{if(f){const L=[...f].sort((B,v)=>(v.date||0)-(B.date||0));return o&&L.sort((B,v)=>{const D=B.node_type==="topic"&&B.name.toLowerCase()===o.toLowerCase()?1:0;return(v.node_type==="topic"&&v.name.toLowerCase()===o.toLowerCase()?1:0)-D}),L.slice(0,g)}return[]},[f,o,g]);return s.jsx(s.Fragment,{children:s.jsxs(Mo,{ref:t,id:"search-result-list",shrink:1,children:[(E??[]).map((L,B)=>{const{image_url:v,date:D,boost:G,type:$,episode_title:V,show_title:_,node_type:z,text:H,source_link:q,link:F,name:te,verified:ee=!1,twitter_handle:ie}=L||{};return s.jsx(Tr,{boostCount:G||0,date:D||0,episodeTitle:rt(V),imageUrl:v||"",link:F,name:te||"",onClick:()=>{S(L)},showTitle:rt(_),sourceLink:q,text:H||"",twitterHandle:ie,type:z||$,verified:ee},B.toString())}),s.jsx(nl,{align:"center",background:"BG1",direction:"row",justify:"center",children:k&&s.jsx(we,{onClick:b,size:"medium",children:"Load More"},p)})]})})},tl=A.memo(el),nl=j(y)`
  flex: 0 0 86px;
`,rl=({isSearchResult:e})=>{const{nodeCount:t,setNodeCount:n,setBudget:r}=hr(a=>a),{fetchData:i,setAbortRequests:o}=fe(a=>a),l=async()=>{t<1||(await i(r,o,{skip_cache:"true"}),n("CLEAR"))};return s.jsxs(ll,{children:[!e&&s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Latest"}),s.jsx("span",{className:"heading__icon",children:s.jsx(Lo,{})})]}),t?s.jsx("div",{className:"button_container",children:s.jsx(il,{className:"button","data-testid":"see_latest_button",onClick:l,startIcon:s.jsx(Bo,{}),children:`See Latest (${t})`})}):null]}),s.jsx(tl,{isSearchResult:e})]})},il=j(we)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${w.GRAY6};
    }
  }
`,ol=A.memo(rl),ll=j(y)`
  .heading-container {
    display: flex;
    flex-direction: column;
    padding: 16px 24px 16px 24px;
  }

  .heading {
    color: ${w.GRAY6};
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
      color: ${w.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${w.SECONDARY_BLUE};
      }

      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${w.PRIMARY_BLUE};
      }
    }
  }
`,sl=j(y).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${w.BG1};

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
`,Xe=j(ho)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,al=()=>s.jsx(s.Fragment,{children:Array(7).fill(null).map((e,t)=>s.jsx(sl,{children:s.jsxs(y,{direction:"row",children:[s.jsx(y,{align:"center",pr:16,children:s.jsx(Xe,{animation:"wave",height:64,variant:"rectangular",width:64})}),s.jsxs(y,{grow:1,shrink:1,children:[s.jsx(Xe,{height:10,variant:"rectangular",width:56}),s.jsx(Xe,{className:"title",height:10,variant:"rectangular",width:262}),s.jsx(Xe,{height:10,variant:"rectangular",width:149})]})]})},t))});j(y)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${w.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`;const ul=j(J)`
  overflow: hidden;
  color: ${w.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`;j(ul)`
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
    background: ${w.GRAY6};
  }
`;const cl=48,pl=8,hl={PaperProps:{style:{maxHeight:cl*4.5+pl,width:250}}},dl=["Beginner","Intermediate","Advanced","Expert"],fl=()=>{const e=fe(b=>b.data),[t,n]=A.useState(""),[r,i]=A.useState("Beginner"),o=pe(b=>b.currentSearch),l=Li(),[a]=hr(b=>[b.setBudget]),[u,c,p,h,f]=Sr(b=>[b.askedQuestions,b.askedQuestionsAnswers,b.setAskedQuestion,b.setAskedQuestionAnswer,b.hasQuestionInProgress]),d=A.useCallback(b=>{h(b.answer)},[h]);A.useEffect(()=>{l&&d&&l.on("askquestionhook",d)},[d,l]);const g=async()=>{t&&(p(t),n(""));try{const b=e==null?void 0:e.nodes.filter(B=>B.text),E=b==null?void 0:b.slice(0,5),L=(E!=null&&E.length?E.map(B=>B.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,B=>`\\${B}`);o&&(await vi.enable(),await Ei({expertise_level:r,question_text:t,search_term:o,transcripts:L},a),await Ti(a))}catch(b){console.error(b)}},k=r&&t.trim()&&!f,T=b=>{i(b.target.value)},S=async b=>{if(f){b.preventDefault();return}b.keyCode===13&&b.shiftKey===!1&&k&&(b.preventDefault(),g())};return s.jsxs(xl,{children:[s.jsx(y,{children:s.jsx(y,{children:s.jsxs(gr,{component:"div",children:[s.jsx(gl,{id:"select-label",size:"small",children:"Expertise level"}),s.jsx(yl,{id:"demo-multiple-name",input:s.jsx(po,{label:"Expertise level"}),labelId:"select-label",MenuProps:hl,onChange:T,size:"small",value:r,children:dl.map(b=>s.jsx($i,{component:"li",value:b,children:b},b))})]})})}),s.jsx(bl,{children:u==null?void 0:u.map((b,E)=>s.jsxs(y,{className:"response",py:12,children:[s.jsx(J,{kind:"medium",children:b}),s.jsx(y,{py:12,children:(c==null?void 0:c[E])!==void 0?s.jsx(J,{color:"unreadMsgText",children:c[E]}):s.jsxs(y,{align:"center",py:12,children:[s.jsx(y,{align:"center",py:12,children:s.jsx(vr,{color:w.white})}),s.jsx(y,{align:"center",py:12,children:s.jsx(J,{children:"Generating response"})})]})})]},b))}),s.jsxs(wl,{onKeyDown:S,py:12,tabIndex:-1,children:[s.jsx(ml,{disabled:f,onChange:b=>n(b.target.value),placeholder:"Enter your question",value:t}),s.jsx(kl,{children:s.jsx(fo,{color:k?w.white:w.gray300,size:"18"})})]})]})},xl=j.div`
  margin-top: 20px;
`,ml=j(Fi)`
  background: ${w.inputBg1};
  max-width: 100%;
  color: ${w.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,gl=j(uo)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${w.secondaryText4};
  }
`,yl=j(co)`
  .MuiInputBase-root {
    color: blue;
  }
  background: ${w.inputBg1};

  .MuiSvgIcon-root {
    color: ${w.white};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
    color: ${w.white};
  }
`,wl=j(y)`
  position: relative;
`,kl=j(y)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,bl=j(y)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${w.divider2};
  }
`,yn=({text:e})=>s.jsxs(y,{align:"center",justify:"center",py:12,children:[s.jsx(y,{align:"center",py:12,children:s.jsx(vr,{color:w.white})}),s.jsx(y,{align:"center",py:12,children:s.jsx(J,{children:e})})]}),jl=()=>{const[e,t,n,r]=Sr(o=>[o.teachMeAnswer,o.hasTeachingInProgress,o.instgraphAnswser,o.hasInstagraphInProgress]),i=!r&&!!(n!=null&&n.edges)&&!!(n!=null&&n.nodes);return s.jsxs(s.Fragment,{children:[i?s.jsx(Hi,{edges:n==null?void 0:n.edges,nodes:n==null?void 0:n.nodes}):s.jsx(yn,{text:"Generating instagraph"}),t?s.jsx(yn,{text:"Generating tutorial"}):s.jsxs(s.Fragment,{children:[s.jsx(Cl,{children:s.jsx(J,{children:e})}),s.jsx(fl,{})]})]})};j(we)``;const Cl=j(y)`
  padding-left: 10px;
  padding-right: 10px;
`,Sl=({cx:e,cy:t})=>s.jsx(ao,{cx:e,cy:t,fill:w.blueTextAccent,r:2}),vl=()=>{const e=xe(),t=[...(e==null?void 0:e.data)||[]].sort((i,o)=>(i.year||0)-(o.year||0)),n=t.map(i=>i.year).filter(i=>i),r=t.map(i=>i.rate).filter(i=>i);return s.jsx(El,{direction:"column",px:24,py:16,children:s.jsx(Vi,{height:"100%",width:"100%",children:s.jsxs(Ui,{margin:{bottom:20,left:20,right:20,top:20},children:[s.jsx(io,{stroke:"#f5f5f5"}),s.jsx(oo,{dataKey:"year",domain:[Math.min(...n),Math.max(...n)],label:{fill:w.white,fontSize:"12px",offset:-10,position:"insideBottom",value:e.x_axis_name},name:"X",tick:{fill:w.white,fontSize:"8px"},type:"number"}),s.jsx(lo,{color:"#000",dataKey:"rate",domain:[Math.min(...r),Math.max(...r)],label:{angle:-90,fill:w.white,fontSize:"12px",offset:0,position:"insideLeft",value:e.y_axis_name},name:"Y",tick:{fill:w.white,fontSize:"8px"},type:"number"}),s.jsx(so,{cursor:{strokeDasharray:"3 3"}}),s.jsx(Gi,{data:t,fill:w.blueTextAccent,line:!0,name:"A scatter",shape:s.jsx(Sl,{})})]})})})},El=j(y)`
  width: 100%;
  height: 100%;
`;function pt(e,t){if(!(t!=null&&t.trim()))return e;const n=new RegExp(`(${t})`,"gi"),r=e.split(n);return s.jsx(s.Fragment,{children:r.map((i,o)=>n.test(i)?s.jsx(Tl,{children:i},o):i)})}const Tl=j.span`
  background-color: rgba(0, 123, 255, 0.4);
  padding: 2;
  margin: 0;
  border-radius: 3px;
  color: inherit;
`,Il=({stateless:e,node:t,searchTerm:n})=>s.jsxs(y,{grow:1,shrink:1,children:[s.jsx(Al,{children:e&&s.jsxs(_l,{children:[s.jsx("div",{className:"icon",children:s.jsx(wr,{})}),s.jsx("div",{className:"title",children:"Description"})]})}),s.jsx(J,{children:t!=null&&t.description?pt(t.description,n):"..."})]}),_l=j(y).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${w.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${w.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,Al=j(y).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Pl=j.span`
  color: ${w.white};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  text-align: right;

  &:hover {
    color: ${w.GRAY3};
  }
`,zl=({stateless:e,node:t})=>{var g;const[n,r]=pe(k=>[k.transcriptIsOpen,k.setTranscriptOpen]),[i,o]=A.useState(!1),[l,a]=A.useState(""),[u,c]=A.useState(!1);if(!e&&!n)return null;const p=async()=>{try{const k=await xn(t==null?void 0:t.ref_id);a(k.data.text)}catch(k){console.error("Error fetching full transcript",k)}},h=async()=>{if(l===""){const k=await xn(t==null?void 0:t.ref_id);d(k.data.text)}else d(l);setTimeout(()=>{o(!1)},2e3)},f=async()=>{u?c(!1):(await p(),c(!0))},d=k=>{k!==void 0&&(navigator.clipboard.writeText(k),o(!0))};return s.jsxs(y,{grow:1,shrink:1,children:[s.jsxs(Bl,{children:[e&&s.jsxs(Ll,{children:[s.jsx("div",{className:"icon",children:s.jsx(wr,{})}),s.jsx("div",{className:"title",children:"Transcript"})]}),t!=null&&t.text?s.jsx(s.Fragment,{children:i?s.jsxs(Rl,{align:"center",direction:"row",justify:"flex-start",children:[s.jsx("div",{className:"icon",children:s.jsx(xr,{})}),s.jsx("div",{className:"text",children:"Copied"})]}):s.jsx(we,{endIcon:s.jsx(Yi,{}),onPointerDown:()=>h(),size:"small",variant:"outlined",children:"Copy"})}):s.jsx("div",{}),!e&&s.jsx(Ml,{onClick:()=>{r(!1)},children:s.jsx(xo,{fontSize:35})})]}),s.jsxs(Ol,{children:[u?l:`${(g=t==null?void 0:t.text)==null?void 0:g.substring(0,100)}`,s.jsxs(Pl,{onClick:f,children:["... ",u?"show less":"more"]})]})]})},Ll=j(y).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${w.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${w.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,Bl=j(y).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Ml=j(y).attrs({})`
  color: ${w.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${w.lightBlue500};
  }
`,Ol=j(y)`
  color: ${w.white};
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Rl=j(y)`
  color: ${w.SECONDARY_BLUE};
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
`,Ir=({node:e})=>{const t=fe(k=>k.selectedNode),n=pe(k=>k.currentSearch),{link:r,image_url:i,date:o,boost:l,node_type:a,type:u,id:c,show_title:p,episode_title:h,ref_id:f}=e||t||{},[d,g]=A.useState(l||0);return A.useEffect(()=>{g(l??0)},[l]),!e&&!t?null:s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(Dl,{children:[s.jsx(Nl,{boostCount:d||0,date:o||0,episodeTitle:rt(h),imageUrl:i,isSelectedView:!0,link:r,onClick:()=>null,showTitle:p,type:a||u}),s.jsx(yt,{}),s.jsxs(Fl,{children:[s.jsx(Yt,{amt:d}),s.jsx(kr,{content:e||t,count:d,refId:f,updateCount:g})]}),s.jsx(yt,{}),s.jsx(wn,{children:s.jsx(Il,{node:e||t,searchTerm:n,stateless:!0})}),((t==null?void 0:t.text)||(e==null?void 0:e.text))&&s.jsxs(s.Fragment,{children:[s.jsx(yt,{}),s.jsx(wn,{children:s.jsx(zl,{node:e||t,stateless:!0},c)})]})]})})},Dl=j(y)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,Fl=j(y)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,wn=j(y)`
  padding: 18px 18px 18px;
`,Nl=j(Tr)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,yt=j(qt)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,$l=j(y)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);

  .episode-title {
    font-size: 20px;
    font-weight: 600;
    color: ${w.white};
  }

  .show {
    cursor: pointer;
    &__title {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${w.white};
      margin-left: 8px;
    }
  }
`,Hl=({selectedNodeShow:e})=>{const[t,n]=fe(o=>[o.selectedNode,o.setSelectedNode]),{type:r}=t||{},i=pe(o=>o.currentSearch);return s.jsxs($l,{p:20,children:[s.jsx(y,{align:"flex-start",children:r&&s.jsx(Ne,{type:r})}),s.jsx(y,{direction:"row",mb:22,mt:22,children:s.jsx(y,{grow:1,shrink:1,children:s.jsx(J,{className:"episode-title",kind:"heading",children:pt((t==null?void 0:t.episode_title)||"Unknown",i)})})}),e?s.jsxs(y,{className:"show",direction:"row",onClick:()=>n(e),children:[s.jsx(ke,{size:16,src:(e==null?void 0:e.image_url)||"",type:"show"}),s.jsx(J,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:e==null?void 0:e.show_title})]}):null]})},Vl="Flow 1",Ul=0,Gl=12,Yl=15,ql={g:"LottieFiles Figma v45"},Wl=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],Ql="5.7.0",Zl=60,Xl=57.6,Kl=0,Jl=[],es={nm:Vl,ddd:Ul,h:Gl,w:Yl,meta:ql,layers:Wl,v:Ql,fr:Zl,op:Xl,ip:Kl,assets:Jl},ts=()=>{const e=A.useRef(null);return A.useEffect(()=>{const t=document.getElementById("lottie-timestamp-equalizer");return t&&(e.current=Ii.loadAnimation({container:t,animationData:es,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),s.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},ns=j(y).attrs(()=>({direction:"row"}))`
  cursor: pointer;
  color: ${w.primaryText1};
  border-top: 1px solid ${w.black};
  background: ${e=>e.isSelected?"rgba(97, 138, 255, 0.1)":`${w.BG1}`};

  .play-pause {
    font-size: 24px;
    border-radius: 4px;
    color: ${w.GRAY7};
    cursor: pointer;
  }

  .info {
    margin-left: auto;
    color: ${w.GRAY7};
    font-size: 24px;
  }

  &:hover {
    .play-pause {
      color: ${w.white};
    }
  }
`,rs=({onClick:e,timestamp:t,isSelected:n,setOpenClip:r})=>{const i=n?"blueTextAccent":"placeholderText";return n?(mo,w[i]):(go,w[i]),s.jsxs(ns,{align:"center","data-testid":"wrapper",direction:"row",isSelected:n,justify:"flex-start",onClick:e,px:20,py:20,children:[s.jsxs("div",{children:[s.jsx(dr,{className:"play-pause",children:n?s.jsx(ts,{}):s.jsx(qi,{})}),!1]}),s.jsxs(is,{align:"flex-start",direction:"column",justify:"center",children:[t.timestamp&&s.jsx("span",{className:"timestamp",children:Wi(t.timestamp)}),s.jsx("span",{className:"title",children:rt(t.show_title)})]}),s.jsx("div",{className:"info",children:s.jsx(y,{"data-testid":"info-icon-wrapper",onClick:()=>r(t),pt:4,children:s.jsx(yo,{})})})]})},is=j(y)`
  font-size: 13px;
  color: ${w.white};
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
    color: ${w.GRAY6};
  }
`,os=j(y)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,ls=()=>{const e=xe(),t=Er(),[n,r]=A.useState(null),[i,o]=A.useState(null),[l,a,u,c,p]=at(g=>[g.playingNode,g.setPlayingNodeLink,g.setPlayingTime,g.setIsSeeking,g.playingTime]),h=A.useMemo(()=>br((t==null?void 0:t.nodes)||[],e),[t==null?void 0:t.nodes,e]),f=A.useMemo(()=>t==null?void 0:t.nodes.find(g=>g.node_type==="show"&&g.show_title===(e==null?void 0:e.show_title)),[t==null?void 0:t.nodes,e]),d=A.useCallback(g=>{var T;const k=Pt(((T=g==null?void 0:g.timestamp)==null?void 0:T.split("-")[0])||"00:00:01");(l&&g.link&&(l==null?void 0:l.link)!==g.link||(!l||(l==null?void 0:l.link)!==g.link)&&g.link!==void 0)&&(a(g.link),u(0),c(!0)),u(k),c(!0),o(g)},[l,a,c,o,u]);return A.useEffect(()=>{h!=null&&h.length&&!h.some(g=>g.ref_id===(i==null?void 0:i.ref_id))&&d(h[0])},[h,i,d]),A.useEffect(()=>{if(h!=null&&h.length){const g=h.find(k=>{if(!k.timestamp)return!1;const T=Pt(k.timestamp.split("-")[0]);return Math.abs(T-p)<1});g&&g.ref_id!==(i==null?void 0:i.ref_id)&&o(g)}},[p,h,i]),e?s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(as,{children:[n&&s.jsx(us,{className:"slide-me",direction:"up",in:!!n,children:s.jsxs(ss,{children:[s.jsx(y,{className:"close-info",onClick:()=>r(null),children:s.jsx(mr,{})}),n&&s.jsx(Ir,{node:n})]})}),s.jsx(Hl,{selectedNodeShow:f}),!!(h!=null&&h.length)&&s.jsx(os,{children:s.jsx(y,{pb:20,children:h==null?void 0:h.map((g,k)=>s.jsx(rs,{isSelected:(i==null?void 0:i.ref_id)===g.ref_id,onClick:()=>d(g),setOpenClip:r,timestamp:g},`${g.episode_title}_${k}`))})})]})}):null},ss=j(y)`
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  .close-info {
    position: absolute;
    color: ${w.white};
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`,as=j(y)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,us=j(Wt)`
  && {
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 16px;
    overflow: hidden;
    background: ${w.BG1};
    z-index: 1;
  }
`,cs=()=>{const e=xe(),t=e==null?void 0:e.name;return s.jsxs(y,{direction:"column",px:24,py:16,children:[s.jsx(ke,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.source_link)||"",type:"image"}),s.jsx(y,{py:20,children:s.jsx(J,{color:"primaryText1",kind:"bigHeading",children:t})})]})},ps=()=>{const{sender_pic:e,sender_alias:t,date:n,message_content:r}=xe()||{};return s.jsxs(y,{direction:"row",children:[s.jsx(fs,{src:e}),s.jsxs(hs,{children:[s.jsxs(y,{align:"flex-end",className:"info",direction:"row",children:[t&&s.jsx("span",{className:"info__name",children:t}),n&&s.jsx("span",{className:"info__date",children:n})]}),r&&s.jsx(ds,{dangerouslySetInnerHTML:{__html:Qi(r)}})]})]})},hs=j(y)`
  color: ${w.black};
  border-radius: 8px;
  font-size: 20px;
  margin-left: 8px;
  flex: 1;

  .info__date {
    color: ${w.textMessages};
    font-size: 14px;
    margin-left: 8px;
  }

  .info__name {
    color: ${w.green400};
    font-size: 16px;
  }
`,ds=j.div`
  background: ${w.white};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${w.white};
    position: absolute;
    left: -6px;
    top: 0;
  }

  .username {
    color: ${w.blueTextAccent};
  }

  a {
    color: ${w.blueTextAccent};
    text-decoration: none;
  }

  a:hover,
  a:visited {
    color: ${w.blueTextAccent};
    text-decoration: none;
  }
`,fs=j.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,xs=()=>{const e=xe(),t=(e==null?void 0:e.name)||(e==null?void 0:e.label);return s.jsxs(y,{direction:"row",px:24,py:16,children:[s.jsx(ke,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.image_url)||"person_placeholder_img.png",type:"person"}),s.jsx(y,{p:20,children:s.jsx(J,{color:"primaryText1",kind:"bigHeading",children:t})})]})},ms=({node:e,onClick:t})=>{var i,o;const n=Pt(e.timestamp||""),r=Math.ceil(n/60);return s.jsx(gs,{onClick:t,p:20,children:s.jsxs("div",{children:[s.jsxs(y,{align:"flex-start",direction:"row",justify:"flex-start",children:[s.jsx(y,{align:"center",children:s.jsx(ke,{size:64,src:(e==null?void 0:e.image_url)||"",type:(e==null?void 0:e.node_type)||"episode"})}),s.jsxs("div",{className:"content",children:[s.jsxs(y,{align:"center",direction:"row",children:[s.jsx(Ne,{type:"episode"}),r>0&&s.jsxs("div",{className:"subtitle",children:[r," ",r===1?"min":"mins"]})]}),s.jsx(J,{className:"title",color:"primaryText1",kind:"regular",children:e.episode_title})]})]}),s.jsxs(y,{align:"center",direction:"row",justify:"flex-end",children:[s.jsxs(J,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((i=e==null?void 0:e.children)==null?void 0:i.length)||0," ",((o=e==null?void 0:e.children)==null?void 0:o.length)===1?"Clip":"Clips"]}),s.jsx(Zi,{style:{color:w.white}})]})]})})},gs=j(y).attrs({})`
  direction: row;
  cursor: pointer;
  color: ${w.primaryText1};
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
`,ys=j(y)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;

  .subtitle {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${w.GRAY6};
    margin-left: 8px;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,ws=j(y)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,ks=j(J)`
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
`,bs=j.div`
  max-height: calc(100vh - 340px);
  overflow-y: auto;
`,js=()=>{const[e,t]=fe(l=>[l.selectedNode,l.setSelectedNode]),n=Er(),[r,i]=A.useState([]),o=A.useMemo(()=>{var u;const l=new Set,a={};if((u=e==null?void 0:e.children)!=null&&u.length){e.children.forEach((p,h)=>{var g,k,T,S;const f=br((n==null?void 0:n.nodes)||[],e)||[],d=n==null?void 0:n.nodes.find(b=>b.ref_id===p);if(d){d.timestamp=(g=f[0])==null?void 0:g.timestamp;const b=(S=(T=(k=f[h])==null?void 0:k.hosts)==null?void 0:T[0])==null?void 0:S.name;b&&l.add(b),a[p]=d,a[p]=d}});const c=Array.from(l);i(c)}return Object.values(a).filter(c=>c.node_type==="episode").sort((c,p)=>(p.weight||0)-(c.weight||0))},[n==null?void 0:n.nodes,e]);return s.jsxs(ys,{children:[s.jsx(ws,{children:s.jsxs(y,{direction:"row",children:[s.jsx(y,{pr:24,children:s.jsx(ke,{size:80,src:(e==null?void 0:e.image_url)||"audio_default.svg",type:"show"})}),s.jsx(y,{direction:"column",children:s.jsxs(y,{direction:"column",grow:1,justify:"space-between",children:[s.jsxs(y,{align:"center",direction:"row",justify:"flex-start",children:[s.jsx(Ne,{type:"show"})," ",s.jsxs("div",{className:"subtitle",children:["by ",r.join(", ")||(e==null?void 0:e.show_title)]})]}),s.jsx(ks,{kind:"bigHeading",title:(e==null?void 0:e.show_title)||"Unknown",children:(e==null?void 0:e.show_title)||"Unknown"})]})})]})}),s.jsxs(y,{direction:"column",children:[s.jsx(y,{p:24,children:s.jsx(J,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),s.jsx(bs,{children:o.map(l=>s.jsx(ms,{node:l,onClick:()=>t(l)},l.ref_id))})]})]})},Cs=()=>{const e=xe();return s.jsx(y,{align:"center",justify:"center",children:s.jsx(J,{color:"primaryText1",kind:"hugeHeading",children:e==null?void 0:e.label})})},Ss=()=>{const e=xe(),{date:t,boost:n,text:r,name:i,verified:o,image_url:l,twitter_handle:a,ref_id:u}=e||{},c=(e==null?void 0:e.tweet_id)||"",[p,h]=A.useState(n||0),f=pe(d=>d.currentSearch);return e&&s.jsxs(s.Fragment,{children:[s.jsxs(y,{direction:"column",p:24,children:[s.jsxs(y,{align:"center",direction:"row",pr:16,children:[s.jsx(vs,{children:s.jsx(ke,{rounded:!0,size:58,src:l||"",type:"person"})}),s.jsxs(y,{children:[s.jsxs(Es,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&s.jsxs(Ts,{children:["@",a]})]})]}),s.jsxs(y,{grow:1,shrink:1,children:[s.jsx(Is,{"data-testid":"episode-description",children:pt(r||"",f)}),s.jsx(y,{direction:"row",justify:"flex-start",children:!!t&&s.jsx(ct,{children:Ht.unix(t).format("ll")})})]}),s.jsx(y,{align:"stretch",mt:22,children:s.jsx("a",{href:`https://twitter.com/${a}/status/${c}?open=system`,rel:"noopener noreferrer",target:"_blank",children:s.jsx(As,{endIcon:s.jsx(Gt,{}),children:"View Tweet"})})})]}),s.jsx(_s,{}),s.jsxs(y,{direction:"row",justify:"space-between",pt:14,px:24,children:[s.jsx(Yt,{amt:p}),s.jsx(kr,{content:e,count:p,refId:u,updateCount:h})]})]})},vs=j(y)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Es=j(y)`
  color: ${w.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`,Ts=j(y)`
  color: ${w.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Is=j(y)`
  color: ${w.white};
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
`,_s=j(qt)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,As=j(we)`
  width: 100%;
`,Ps=()=>{const e=xe();if(!e)return null;const t=!!e.image_url,n=e.properties||{};return s.jsxs(Ds,{children:[t?s.jsx(Ms,{children:s.jsx("img",{alt:"img_a11y",src:e.image_url})}):null,s.jsxs(Ls,{grow:1,justify:"flex-start",pt:t?0:8,shrink:1,children:[s.jsx(y,{ml:24,mt:20,style:{width:"fit-content"},children:s.jsx(Ne,{type:e.type||""})}),s.jsx(Bs,{children:Object.entries(n).map(([r,i])=>s.jsx(zs,{label:r,value:i},r))})]})]})},zs=({label:e,value:t})=>{const n=t.length>140;return s.jsxs(s.Fragment,{children:[s.jsxs(Os,{className:Ie("node-detail",{"node-detail__long":n}),children:[s.jsx(J,{className:"node-detail__label",children:e}),s.jsx(J,{className:"node-detail__value",children:t})]}),s.jsx(Rs,{})]})},Ls=j(y)`
  overflow: auto;
  width: 100%;
  flex-grow: 1;
  padding-top: 16px;
`,Bs=j(y)`
  padding: 4px 24px;
`,Ms=j(y)`
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
`,Os=j(y)`
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
`,Rs=j(qt)`
  margin: auto 0px 2px 0px;
  opacity: 0.75;
`,Ds=j(y)`
  flex-direction: column;
  height: 100%;
`,Fs=()=>{var a,u;const[e,t]=A.useState(!1),n=xe(),r=!!(n!=null&&n.source_link),i=A.useRef(null),o=pe(c=>c.currentSearch),l=c=>{c.stopPropagation(),c.currentTarget.blur(),t(!e)};return A.useEffect(()=>{var c,p;e?(c=i.current)==null||c.play():(p=i.current)==null||p.pause()},[e]),s.jsxs(y,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:r?62:0,shrink:1,children:[r&&s.jsxs(Ns,{children:[s.jsx(yr,{color:w.GRAY6}),s.jsx(Vs,{children:n==null?void 0:n.source_link}),s.jsx($s,{href:`${n==null?void 0:n.source_link}?open=system`,onClick:c=>c.stopPropagation(),target:"_blank",children:s.jsx(Gt,{})})]}),(a=n==null?void 0:n.audio)!=null&&a.length?s.jsxs(y,{justify:"flex-start",p:12,children:[s.jsx(we,{onClick:c=>l(c),startIcon:e?s.jsx(ut,{}):s.jsx(Vt,{}),children:e?"Pause":"Play"}),s.jsx(Us,{ref:i,src:((u=n.audio[0])==null?void 0:u.link)||"",children:s.jsx("track",{kind:"captions"})})]}):null,s.jsx(Hs,{grow:1,justify:"flex-start",p:12,shrink:1,children:s.jsx(J,{color:"primaryText1",kind:"regular",children:pt((n==null?void 0:n.text)||"",o)})})]})},Ns=j(y)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${w.BG2};
  gap: 5px;
  color: ${w.GRAY6};

  span {
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color: ${w.GRAY6};
  }
`,$s=j.a`
  color: ${w.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Hs=j(y)`
  overflow: auto;
`,Vs=j(J)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Us=j.audio`
  height: 0;
  width: 0;
`,Gs=["clip","twitter_space","video","episode","podcast"],Ys=()=>{const e=xe(),{showTeachMe:t}=fe(r=>r),{setPlayingNode:n}=at(r=>r);if(A.useEffect(()=>{Gs.includes((e==null?void 0:e.node_type)||"")&&n(e)},[n,e]),t)return s.jsx(jl,{});switch(e==null?void 0:e.node_type){case"guest":case"person":return s.jsx(xs,{});case"data_series":return s.jsx(vl,{});case"tribe_message":return s.jsx(ps,{});case"tweet":return s.jsx(Ss,{});case"topic":return s.jsx(Cs,{});case"show":return s.jsx(js,{});case"video":case"podcast":case"clip":case"twitter_space":return s.jsx(Ir,{});case"document":return s.jsx(Fs,{});case"episode":return s.jsx(ls,{},e.ref_id);case"image":return s.jsx(cs,{});default:return s.jsx(Ps,{})}},qs=A.memo(Ys),Ws=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"volume_mute",children:[s.jsx("mask",{id:"mask0_1483_75386",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsxs("g",{mask:"url(#mask0_1483_75386)",children:[s.jsx("path",{id:"volume_up_2",d:"M14.0384 20.1095V18.5595C15.4807 18.1005 16.6425 17.2672 17.5239 16.0595C18.4053 14.8518 18.8461 13.4903 18.8461 11.9749C18.8461 10.4595 18.4053 9.09799 17.5239 7.89031C16.6425 6.68261 15.4807 5.84927 14.0384 5.39031V3.84033C15.8999 4.33905 17.4165 5.33841 18.5883 6.83841C19.7601 8.33839 20.346 10.0506 20.346 11.9749C20.346 13.8993 19.7601 15.6114 18.5883 17.1114C17.4165 18.6114 15.8999 19.6108 14.0384 20.1095ZM3.65381 14.4999V9.49993H7.36531L11.6537 5.21153V18.7883L7.36531 14.4999H3.65381ZM14.0384 15.6537V8.29608C14.7127 8.66275 15.2339 9.17909 15.6018 9.84511C15.9698 10.5111 16.1537 11.2294 16.1537 11.9999C16.1537 12.7602 15.9682 13.4675 15.597 14.122C15.2259 14.7765 14.7063 15.2871 14.0384 15.6537Z",fill:"currentColor"}),s.jsx("path",{id:"mute_line",d:"M6 21L21 4",stroke:"#808080","stroke-width":"2","stroke-linecap":"round"})]})]})}),Qs=({isPlaying:e,isFullScreen:t,setIsPlaying:n,playingTime:r,duration:i,handleProgressChange:o,handleVolumeChange:l,onFullScreenClick:a,showToolbar:u})=>{const[c,p]=A.useState(.5),[h,f]=A.useState(!1),[d,g]=A.useState(.5),k=(S,b)=>{const E=Array.isArray(b)?b[0]:b;p(E),l(S,E),h&&f(!1)},T=()=>{h?(p(d),l(new Event("input"),d)):(g(c),p(0),l(new Event("input"),0)),f(!h)};return s.jsxs(y,{children:[(!u||t)&&s.jsx(na,{"aria-label":"Small","data-testid":"progress-bar",isFullScreen:t,max:i,onChange:o,size:"small",value:r}),s.jsxs(Zs,{align:"center",direction:"row",showToolbar:u||t,children:[s.jsx(Js,{onClick:n,size:"small",children:e?s.jsx(ut,{}):s.jsx(Vt,{})}),s.jsxs(ra,{direction:"row",children:[s.jsx("span",{children:gn(r)}),s.jsx("span",{className:"separator",children:"/"}),s.jsx("span",{className:"duration",children:gn(i)})]}),s.jsxs(ea,{direction:"row",px:9,children:[s.jsx(jr,{className:"volume-slider",max:1,min:0,onChange:k,size:"small",step:.1,value:c}),s.jsx(Xs,{onClick:T,children:h?s.jsx(Ks,{children:s.jsx(Ws,{})}):s.jsx(Xi,{})})]}),s.jsx(ta,{"data-testid":"fullscreen-button",onClick:a,children:t?s.jsx(Ji,{}):s.jsx(Ki,{})})]})]})},Zs=j(y)`
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
    color: ${w.primaryRed};
  }
`,Xs=j.span``,Ks=j.span`
  color: gray;
`,Js=j(dr)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,ea=j(y)`
  height: 28px;
  font-size: 26px;
  border-radius: 200px;
  color: ${w.white};
  margin-left: auto;

  .volume-slider {
    display: none;
    color: ${w.white};
    height: 3px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 2px;
      height: 10px;
      background-color: ${w.white};
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
`,ta=j(y)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,na=j(jr)`
  && {
    z-index: 20;
    color: ${w.white};
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
      background-color: ${w.white};
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
`,ra=j(y)`
  color: ${w.white};
  font-size: 13px;
  margin-left: 16px;
  font-weight: 500;

  .separator {
    color: ${w.GRAY6};
    margin: 0 4px;
  }

  .duration {
    color: ${w.GRAY6};
  }
`,ia=({hidden:e})=>{var he,m;const t=A.useRef(null),n=A.useRef(null),[r,i]=A.useState(!1),[o,l]=A.useState(!1),[a,u]=A.useState(!1),[c,p]=A.useState("ready"),[h,f]=A.useState(!1),{isPlaying:d,playingTime:g,duration:k,setIsPlaying:T,setPlayingTime:S,setDuration:b,playingNode:E,volume:L,setVolume:B,setHasError:v,resetPlayer:D,isSeeking:G,setIsSeeking:$}=at(Z=>Z),V=((he=E==null?void 0:E.link)==null?void 0:he.includes("youtube"))||((m=E==null?void 0:E.link)==null?void 0:m.includes("youtu.be"));A.useEffect(()=>()=>D(),[D]),A.useEffect(()=>{E&&!h&&(S(0),b(0),f(!1))},[E,S,b,f,h]),A.useEffect(()=>{G&&t.current&&(t.current.seekTo(g,"seconds"),$(!1))},[g,G,$]);const _=()=>{T(!d)},z=()=>{T(!0)},H=()=>{T(!1)},q=(Z,X)=>{const K=Array.isArray(X)?X[0]:X;t.current&&(t.current.seekTo(K),S(K))},F=(Z,X)=>{const K=Array.isArray(X)?X[0]:X;B(K)},te=()=>{v(!0),p("error")},ee=Z=>{if(!G){const X=Z.playedSeconds;S(X)}},ie=()=>{if(t.current){p("ready");const Z=t.current.getDuration();b(Z)}},ge=()=>{n.current&&(document.fullscreenElement?(document.exitFullscreen(),setTimeout(()=>l(!1),300)):n.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",x)}))},x=()=>{l(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",x)};A.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",x)}),A.useEffect(()=>{const Z=X=>{if(o){const K=window.screen.height,Ae=X.clientY,be=K-Ae;u(be<=50)}};return document.addEventListener("mousemove",Z),()=>{document.removeEventListener("mousemove",Z)}},[o,a]),A.useEffect(()=>{const Z=X=>{o&&X.key==="Escape"?(X.preventDefault(),X.stopPropagation()):r&&X.key===" "&&(X.preventDefault(),_())};return document.addEventListener("fullscreenchange",x),document.addEventListener("keydown",Z),()=>{document.removeEventListener("fullscreenchange",x),document.removeEventListener("keydown",Z)}});const se=()=>{_()};return E!=null&&E.link?s.jsxs(oa,{ref:n,hidden:e,onBlur:()=>i(!1),onFocus:()=>i(!0),tabIndex:0,children:[s.jsx(la,{isFullScreen:o,children:s.jsx(ke,{size:120,src:(E==null?void 0:E.image_url)||"",type:"clip"})}),s.jsx(ua,{onClick:se,children:s.jsx(eo,{ref:t,controls:!1,height:o?window.screen.height:"200px",onBuffer:()=>p("buffering"),onBufferEnd:()=>p("ready"),onError:te,onPause:H,onPlay:z,onProgress:ee,onReady:ie,playing:d,url:(E==null?void 0:E.link)||"",volume:L,width:"100%"})}),c==="error"?s.jsx(aa,{className:"error-wrapper",children:"Error happened, please try later"}):null,c==="ready"?s.jsx(Qs,{duration:k,handleProgressChange:q,handleVolumeChange:F,isFullScreen:o,isPlaying:d,onFullScreenClick:ge,playingTime:g,setIsPlaying:_,showToolbar:a&&o}):null,c==="buffering"&&!V?s.jsx(sa,{isFullScreen:o,children:s.jsx(Ut,{color:w.lightGray})}):null]}):null},oa=j(y)`
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
`,la=j(y)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,sa=j(y)`
  position: absolute;
  top: ${e=>e.isFullScreen?"43%":"39%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,aa=j(y)`
  height: 60px;
  padding: 12px 16px;
  color: ${w.primaryRed};
`,ua=j.div`
  width: 100%;
  cursor: pointer;
`,ca=A.memo(ia),pa=({open:e})=>{const{setSelectedNode:t,setTeachMe:n,showTeachMe:r}=fe(a=>a),i=xe(),{setSidebarOpen:o}=pe(a=>a),{playingNode:l}=at(a=>a);return s.jsx(Wt,{"data-testid":"sidebar-sub-view",direction:"right",in:e,style:{width:r?"700px":"",position:e?"relative":"absolute"},children:s.jsxs(ha,{children:[s.jsx(ca,{hidden:(i==null?void 0:i.ref_id)!==(l==null?void 0:l.ref_id)},l==null?void 0:l.ref_id),s.jsx(fa,{children:s.jsx(qs,{})}),s.jsx(da,{"data-testid":"close-sidebar-sub-view",onClick:()=>{t(null),n(!1)},children:s.jsx(to,{})}),s.jsx(xa,{onClick:()=>{o(!1)},children:s.jsx(Cr,{})})]})})},ha=j(y)(({theme:e})=>({position:"relative",background:w.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),da=j(y)`
  font-size: 32px;
  color: ${w.white};
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 3px;

  &:hover {
    color: ${w.GRAY6};
  }

  &:active {
  }
`,fa=j(y)`
  flex: 1 1 100%;
  border-radius: 16px;
  overflow: hidden;
`,xa=j(y).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:w.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:w.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:w.BG1_HOVER},"&:active":{backgroundColor:w.BG1_PRESS,color:w.GRAY6}})),ma=()=>{const e=pe(t=>t.setSidebarOpen);return s.jsx(ga,{onClick:()=>{e(!0)},children:s.jsx(no,{})})},ga=j(y).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:w.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:w.white,[e.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:w.BG1_HOVER},"&:active":{backgroundColor:w.BG1_PRESS,color:w.GRAY6}})),ya=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 14 14",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M4.24488 9.94873L3.51732 12.8382C3.48633 12.976 3.4201 13.0844 3.31861 13.1635C3.21711 13.2425 3.09318 13.2821 2.94682 13.2821C2.75237 13.2821 2.59319 13.2046 2.46928 13.0497C2.34535 12.8948 2.31009 12.7244 2.36351 12.5385L3.01094 9.94873H0.635943C0.427609 9.94873 0.260144 9.86913 0.133547 9.70995C0.00694957 9.55077 -0.0296407 9.37129 0.023776 9.1715C0.0600955 9.02514 0.134609 8.90975 0.247318 8.82535C0.360026 8.74096 0.489568 8.69877 0.635943 8.69877H3.32344L4.1728 5.30131H1.7978C1.58946 5.30131 1.422 5.22172 1.2954 5.06254C1.1688 4.90336 1.13221 4.72388 1.18563 4.5241C1.22195 4.37773 1.29646 4.26234 1.40917 4.17795C1.52188 4.09355 1.65142 4.05135 1.7978 4.05135H4.4853L5.21286 1.16191C5.24383 1.02409 5.31007 0.915657 5.41157 0.836601C5.51305 0.757546 5.63698 0.718018 5.78336 0.718018C5.97779 0.718018 6.13697 0.795469 6.2609 0.950372C6.38483 1.10529 6.42009 1.27569 6.36667 1.46158L5.71923 4.05135H9.16476L9.89232 1.16191C9.9233 1.02409 9.98954 0.915657 10.091 0.836601C10.1925 0.757546 10.3165 0.718018 10.4628 0.718018C10.6573 0.718018 10.8164 0.795469 10.9404 0.950372C11.0643 1.10529 11.0995 1.27569 11.0461 1.46158L10.3987 4.05135H12.7737C12.982 4.05135 13.1495 4.13094 13.2761 4.29012C13.4027 4.4493 13.4393 4.62879 13.3859 4.82858C13.3495 4.97494 13.275 5.09032 13.1623 5.17473C13.0496 5.25911 12.9201 5.30131 12.7737 5.30131H10.0862L9.23684 8.69877H11.6118C11.8202 8.69877 11.9876 8.77836 12.1142 8.93754C12.2408 9.09672 12.2774 9.2762 12.224 9.47598C12.1877 9.62235 12.1132 9.73773 12.0005 9.82212C11.8878 9.90652 11.7582 9.94873 11.6118 9.94873H8.92434L8.19678 12.8382C8.1658 12.976 8.09957 13.0844 7.99807 13.1635C7.89658 13.2425 7.77265 13.2821 7.62628 13.2821C7.43185 13.2821 7.27267 13.2046 7.14874 13.0497C7.0248 12.8948 6.98955 12.7244 7.04296 12.5385L7.6904 9.94873H4.24488ZM4.55738 8.69877H8.0029L8.85226 5.30131H5.40673L4.55738 8.69877Z",fill:"currentColor"})}),wa=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_5099_7163",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"16",height:"16",children:s.jsx("rect",{x:"2",y:"2",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_5099_7163)",children:s.jsx("path",{d:"M10 16.6667C9.16667 16.6667 8.38611 16.5083 7.65833 16.1917C6.93056 15.875 6.29722 15.4472 5.75833 14.9083C5.21944 14.3695 4.79167 13.7361 4.475 13.0083C4.15833 12.2806 4 11.5 4 10.6667C4 10.4778 4.06389 10.3195 4.19167 10.1917C4.31944 10.0639 4.47778 10 4.66667 10C4.85556 10 5.01389 10.0639 5.14167 10.1917C5.26944 10.3195 5.33333 10.4778 5.33333 10.6667C5.33333 11.9667 5.78611 13.0695 6.69167 13.975C7.59722 14.8806 8.7 15.3333 10 15.3333C11.3 15.3333 12.4028 14.8806 13.3083 13.975C14.2139 13.0695 14.6667 11.9667 14.6667 10.6667C14.6667 9.36667 14.2139 8.2639 13.3083 7.35834C12.4028 6.45279 11.3 6.00001 10 6.00001H9.9L10.4667 6.56667C10.6 6.70001 10.6639 6.85556 10.6583 7.03334C10.6528 7.21112 10.5889 7.36667 10.4667 7.50001C10.3333 7.63334 10.175 7.70279 9.99167 7.70834C9.80833 7.7139 9.65 7.65001 9.51667 7.51667L7.8 5.80001C7.66667 5.66667 7.6 5.51112 7.6 5.33334C7.6 5.15556 7.66667 5.00001 7.8 4.86667L9.51667 3.15001C9.65 3.01667 9.80833 2.95279 9.99167 2.95834C10.175 2.9639 10.3333 3.03334 10.4667 3.16667C10.5889 3.30001 10.6528 3.45556 10.6583 3.63334C10.6639 3.81112 10.6 3.96667 10.4667 4.10001L9.9 4.66667H10C10.8333 4.66667 11.6139 4.82501 12.3417 5.14167C13.0694 5.45834 13.7028 5.88612 14.2417 6.42501C14.7806 6.9639 15.2083 7.59723 15.525 8.32501C15.8417 9.05279 16 9.83334 16 10.6667C16 11.5 15.8417 12.2806 15.525 13.0083C15.2083 13.7361 14.7806 14.3695 14.2417 14.9083C13.7028 15.4472 13.0694 15.875 12.3417 16.1917C11.6139 16.5083 10.8333 16.6667 10 16.6667Z",fill:"currentColor"})})]}),ka=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_1259_28",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1259_28)",children:s.jsx("path",{d:"M3 20.75L2.91345 19.4327L4.74998 17.6058V20.75H3ZM7.25003 20.75V15.1058L8.74998 13.6058V20.75H7.25003ZM11.25 20.75V13.6058L12.75 15.1308V20.75H11.25ZM15.25 20.75V15.1308L16.75 13.6308V20.75H15.25ZM19.25 20.75V11.1058L20.75 9.60583V20.75H19.25ZM3.25003 15.2192V13.1058L10 6.35581L14 10.3558L20.75 3.60583V5.71924L14 12.4692L10 8.46921L3.25003 15.2192Z",fill:"currentColor"})})]});function ba(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const ja=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ca=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Sa={};function kn(e,t){return((t||Sa).jsx?Ca:ja).test(e)}const va=/[ \t\n\f\r]/g;function Ea(e){return typeof e=="object"?e.type==="text"?bn(e.value):!1:bn(e)}function bn(e){return e.replace(va,"")===""}class Qe{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}Qe.prototype.property={};Qe.prototype.normal={};Qe.prototype.space=null;function _r(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new Qe(n,r,t)}function Lt(e){return e.toLowerCase()}class me{constructor(t,n){this.property=t,this.attribute=n}}me.prototype.space=null;me.prototype.boolean=!1;me.prototype.booleanish=!1;me.prototype.overloadedBoolean=!1;me.prototype.number=!1;me.prototype.commaSeparated=!1;me.prototype.spaceSeparated=!1;me.prototype.commaOrSpaceSeparated=!1;me.prototype.mustUseProperty=!1;me.prototype.defined=!1;let Ta=0;const R=Me(),ne=Me(),Ar=Me(),I=Me(),W=Me(),De=Me(),ue=Me();function Me(){return 2**++Ta}const Bt=Object.freeze(Object.defineProperty({__proto__:null,boolean:R,booleanish:ne,commaOrSpaceSeparated:ue,commaSeparated:De,number:I,overloadedBoolean:Ar,spaceSeparated:W},Symbol.toStringTag,{value:"Module"})),wt=Object.keys(Bt);class Qt extends me{constructor(t,n,r,i){let o=-1;if(super(t,n),jn(this,"space",i),typeof r=="number")for(;++o<wt.length;){const l=wt[o];jn(this,wt[o],(r&Bt[l])===Bt[l])}}}Qt.prototype.defined=!0;function jn(e,t,n){n&&(e[t]=n)}const Ia={}.hasOwnProperty;function $e(e){const t={},n={};let r;for(r in e.properties)if(Ia.call(e.properties,r)){const i=e.properties[r],o=new Qt(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Lt(r)]=r,n[Lt(o.attribute)]=r}return new Qe(t,n,e.space)}const Pr=$e({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),zr=$e({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Lr(e,t){return t in e?e[t]:t}function Br(e,t){return Lr(e,t.toLowerCase())}const Mr=$e({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Br,properties:{xmlns:null,xmlnsXLink:null}}),Or=$e({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:ne,ariaAutoComplete:null,ariaBusy:ne,ariaChecked:ne,ariaColCount:I,ariaColIndex:I,ariaColSpan:I,ariaControls:W,ariaCurrent:null,ariaDescribedBy:W,ariaDetails:null,ariaDisabled:ne,ariaDropEffect:W,ariaErrorMessage:null,ariaExpanded:ne,ariaFlowTo:W,ariaGrabbed:ne,ariaHasPopup:null,ariaHidden:ne,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:W,ariaLevel:I,ariaLive:null,ariaModal:ne,ariaMultiLine:ne,ariaMultiSelectable:ne,ariaOrientation:null,ariaOwns:W,ariaPlaceholder:null,ariaPosInSet:I,ariaPressed:ne,ariaReadOnly:ne,ariaRelevant:null,ariaRequired:ne,ariaRoleDescription:W,ariaRowCount:I,ariaRowIndex:I,ariaRowSpan:I,ariaSelected:ne,ariaSetSize:I,ariaSort:null,ariaValueMax:I,ariaValueMin:I,ariaValueNow:I,ariaValueText:null,role:null}}),_a=$e({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Br,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:De,acceptCharset:W,accessKey:W,action:null,allow:null,allowFullScreen:R,allowPaymentRequest:R,allowUserMedia:R,alt:null,as:null,async:R,autoCapitalize:null,autoComplete:W,autoFocus:R,autoPlay:R,blocking:W,capture:R,charSet:null,checked:R,cite:null,className:W,cols:I,colSpan:null,content:null,contentEditable:ne,controls:R,controlsList:W,coords:I|De,crossOrigin:null,data:null,dateTime:null,decoding:null,default:R,defer:R,dir:null,dirName:null,disabled:R,download:Ar,draggable:ne,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:R,formTarget:null,headers:W,height:I,hidden:R,high:I,href:null,hrefLang:null,htmlFor:W,httpEquiv:W,id:null,imageSizes:null,imageSrcSet:null,inert:R,inputMode:null,integrity:null,is:null,isMap:R,itemId:null,itemProp:W,itemRef:W,itemScope:R,itemType:W,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:R,low:I,manifest:null,max:null,maxLength:I,media:null,method:null,min:null,minLength:I,multiple:R,muted:R,name:null,nonce:null,noModule:R,noValidate:R,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:R,optimum:I,pattern:null,ping:W,placeholder:null,playsInline:R,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:R,referrerPolicy:null,rel:W,required:R,reversed:R,rows:I,rowSpan:I,sandbox:W,scope:null,scoped:R,seamless:R,selected:R,shadowRootDelegatesFocus:R,shadowRootMode:null,shape:null,size:I,sizes:null,slot:null,span:I,spellCheck:ne,src:null,srcDoc:null,srcLang:null,srcSet:null,start:I,step:null,style:null,tabIndex:I,target:null,title:null,translate:null,type:null,typeMustMatch:R,useMap:null,value:ne,width:I,wrap:null,align:null,aLink:null,archive:W,axis:null,background:null,bgColor:null,border:I,borderColor:null,bottomMargin:I,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:R,declare:R,event:null,face:null,frame:null,frameBorder:null,hSpace:I,leftMargin:I,link:null,longDesc:null,lowSrc:null,marginHeight:I,marginWidth:I,noResize:R,noHref:R,noShade:R,noWrap:R,object:null,profile:null,prompt:null,rev:null,rightMargin:I,rules:null,scheme:null,scrolling:ne,standby:null,summary:null,text:null,topMargin:I,valueType:null,version:null,vAlign:null,vLink:null,vSpace:I,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:R,disableRemotePlayback:R,prefix:null,property:null,results:I,security:null,unselectable:null}}),Aa=$e({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Lr,properties:{about:ue,accentHeight:I,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:I,amplitude:I,arabicForm:null,ascent:I,attributeName:null,attributeType:null,azimuth:I,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:I,by:null,calcMode:null,capHeight:I,className:W,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:I,diffuseConstant:I,direction:null,display:null,dur:null,divisor:I,dominantBaseline:null,download:R,dx:null,dy:null,edgeMode:null,editable:null,elevation:I,enableBackground:null,end:null,event:null,exponent:I,externalResourcesRequired:null,fill:null,fillOpacity:I,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:De,g2:De,glyphName:De,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:I,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:I,horizOriginX:I,horizOriginY:I,id:null,ideographic:I,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:I,k:I,k1:I,k2:I,k3:I,k4:I,kernelMatrix:ue,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:I,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:I,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:I,overlineThickness:I,paintOrder:null,panose1:null,path:null,pathLength:I,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:W,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:I,pointsAtY:I,pointsAtZ:I,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ue,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ue,rev:ue,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ue,requiredFeatures:ue,requiredFonts:ue,requiredFormats:ue,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:I,specularExponent:I,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:I,strikethroughThickness:I,string:null,stroke:null,strokeDashArray:ue,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:I,strokeOpacity:I,strokeWidth:null,style:null,surfaceScale:I,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ue,tabIndex:I,tableValues:null,target:null,targetX:I,targetY:I,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ue,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:I,underlineThickness:I,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:I,values:null,vAlphabetic:I,vMathematical:I,vectorEffect:null,vHanging:I,vIdeographic:I,version:null,vertAdvY:I,vertOriginX:I,vertOriginY:I,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:I,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Pa=/^data[-\w.:]+$/i,Cn=/-[a-z]/g,za=/[A-Z]/g;function La(e,t){const n=Lt(t);let r=t,i=me;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Pa.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Cn,Ma);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Cn.test(o)){let l=o.replace(za,Ba);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=Qt}return new i(r,t)}function Ba(e){return"-"+e.toLowerCase()}function Ma(e){return e.charAt(1).toUpperCase()}const Oa={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ra=_r([zr,Pr,Mr,Or,_a],"html"),Zt=_r([zr,Pr,Mr,Or,Aa],"svg");function Da(e){return e.join(" ").trim()}var Rr={},Sn=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Fa=/\n/g,Na=/^\s*/,$a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Ha=/^:\s*/,Va=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Ua=/^[;\s]*/,Ga=/^\s+|\s+$/g,Ya=`
`,vn="/",En="*",Be="",qa="comment",Wa="declaration",Qa=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var k=g.match(Fa);k&&(n+=k.length);var T=g.lastIndexOf(Ya);r=~T?g.length-T:r+g.length}function o(){var g={line:n,column:r};return function(k){return k.position=new l(g),c(),k}}function l(g){this.start=g,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(g){var k=new Error(t.source+":"+n+":"+r+": "+g);if(k.reason=g,k.filename=t.source,k.line=n,k.column=r,k.source=e,!t.silent)throw k}function u(g){var k=g.exec(e);if(k){var T=k[0];return i(T),e=e.slice(T.length),k}}function c(){u(Na)}function p(g){var k;for(g=g||[];k=h();)k!==!1&&g.push(k);return g}function h(){var g=o();if(!(vn!=e.charAt(0)||En!=e.charAt(1))){for(var k=2;Be!=e.charAt(k)&&(En!=e.charAt(k)||vn!=e.charAt(k+1));)++k;if(k+=2,Be===e.charAt(k-1))return a("End of comment missing");var T=e.slice(2,k-2);return r+=2,i(T),e=e.slice(k),r+=2,g({type:qa,comment:T})}}function f(){var g=o(),k=u($a);if(k){if(h(),!u(Ha))return a("property missing ':'");var T=u(Va),S=g({type:Wa,property:Tn(k[0].replace(Sn,Be)),value:T?Tn(T[0].replace(Sn,Be)):Be});return u(Ua),S}}function d(){var g=[];p(g);for(var k;k=f();)k!==!1&&(g.push(k),p(g));return g}return c(),d()};function Tn(e){return e?e.replace(Ga,Be):Be}var Za=mn&&mn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Rr,"__esModule",{value:!0});var Xa=Za(Qa);function Ka(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,Xa.default)(e),i=typeof t=="function";return r.forEach(function(o){if(o.type==="declaration"){var l=o.property,a=o.value;i?t(l,a,o):a&&(n=n||{},n[l]=a)}}),n}var In=Rr.default=Ka;const Ja=In.default||In,Dr=Fr("end"),Xt=Fr("start");function Fr(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function eu(e){const t=Xt(e),n=Dr(e);if(t&&n)return{start:t,end:n}}function Ye(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?_n(e.position):"start"in e||"end"in e?_n(e):"line"in e||"column"in e?Mt(e):""}function Mt(e){return An(e&&e.line)+":"+An(e&&e.column)}function _n(e){return Mt(e&&e.start)+"-"+Mt(e&&e.end)}function An(e){return e&&typeof e=="number"?e:1}class re extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1))}if(!o.place&&o.ancestors&&o.ancestors){const u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=a?a.line:void 0,this.name=Ye(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}re.prototype.file="";re.prototype.name="";re.prototype.reason="";re.prototype.message="";re.prototype.stack="";re.prototype.column=void 0;re.prototype.line=void 0;re.prototype.ancestors=void 0;re.prototype.cause=void 0;re.prototype.fatal=void 0;re.prototype.place=void 0;re.prototype.ruleId=void 0;re.prototype.source=void 0;const Kt={}.hasOwnProperty,tu=new Map,nu=/[A-Z]/g,ru=/-([a-z])/g,iu=new Set(["table","tbody","thead","tfoot","tr"]),ou=new Set(["td","th"]),Nr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function lu(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=fu(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=du(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Zt:Ra,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=$r(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function $r(e,t,n){if(t.type==="element")return su(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return au(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return cu(e,t,n);if(t.type==="mdxjsEsm")return uu(e,t);if(t.type==="root")return pu(e,t,n);if(t.type==="text")return hu(e,t)}function su(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Zt,e.schema=i),e.ancestors.push(t);const o=Vr(e,t.tagName,!1),l=xu(e,t);let a=en(e,t);return iu.has(t.tagName)&&(a=a.filter(function(u){return typeof u=="string"?!Ea(u):!0})),Hr(e,l,o,t),Jt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function au(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}We(e,t.position)}function uu(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);We(e,t.position)}function cu(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Zt,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Vr(e,t.name,!0),l=mu(e,t),a=en(e,t);return Hr(e,l,o,t),Jt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function pu(e,t,n){const r={};return Jt(r,en(e,t)),e.create(t,e.Fragment,r,n)}function hu(e,t){return t.value}function Hr(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Jt(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function du(e,t,n){return r;function r(i,o,l,a){const c=Array.isArray(l.children)?n:t;return a?c(o,l,a):c(o,l)}}function fu(e,t){return n;function n(r,i,o,l){const a=Array.isArray(o.children),u=Xt(r);return t(i,o,l,a,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function xu(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Kt.call(t.properties,i)){const o=gu(e,i,t.properties[i]);if(o){const[l,a]=o;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&ou.has(t.tagName)?r=a:n[l]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function mu(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else We(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else We(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function en(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:tu;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const u=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(u){const c=i.get(u)||0;l=u+"-"+c,i.set(u,c+1)}}const a=$r(e,o,l);a!==void 0&&n.push(a)}return n}function gu(e,t,n){const r=La(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?ba(n):Da(n)),r.property==="style"){let i=typeof n=="object"?n:yu(e,String(n));return e.stylePropertyNameCase==="css"&&(i=wu(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Oa[r.property]||r.property:r.attribute,n]}}function yu(e,t){const n={};try{Ja(t,r)}catch(i){if(!e.ignoreInvalidStyle){const o=i,l=new re("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=Nr+"#cannot-parse-style-attribute",l}}return n;function r(i,o){let l=i;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(ru,bu)),n[l]=o}}function Vr(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const a=kn(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=kn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Kt.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);We(e)}function We(e,t){const n=new re("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Nr+"#cannot-handle-mdx-estrees-without-createevaluater",n}function wu(e){const t={};let n;for(n in e)Kt.call(e,n)&&(t[ku(n)]=e[n]);return t}function ku(e){let t=e.replace(nu,ju);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function bu(e,t){return t.toUpperCase()}function ju(e){return"-"+e.toLowerCase()}const kt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Cu={};function Su(e,t){const n=t||Cu,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Ur(e,r,i)}function Ur(e,t,n){if(vu(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Pn(e.children,t,n)}return Array.isArray(e)?Pn(e,t,n):""}function Pn(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Ur(e[i],t,n);return r.join("")}function vu(e){return!!(e&&typeof e=="object")}const zn=document.createElement("i");function tn(e){const t="&"+e+";";zn.innerHTML=t;const n=zn.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Se(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function de(e,t){return e.length>0?(Se(e,e.length,0,t),e):t}const Ln={}.hasOwnProperty;function Eu(e){const t={};let n=-1;for(;++n<e.length;)Tu(t,e[n]);return t}function Tu(e,t){let n;for(n in t){const i=(Ln.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){Ln.call(i,l)||(i[l]=[]);const a=o[l];Iu(i[l],Array.isArray(a)?a:a?[a]:[])}}}function Iu(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Se(e,0,0,r)}function Gr(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Fe(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const _u=_e(/\p{P}/u),Ce=_e(/[A-Za-z]/),ce=_e(/[\dA-Za-z]/),Au=_e(/[#-'*+\--9=?A-Z^-~]/);function Ot(e){return e!==null&&(e<32||e===127)}const Rt=_e(/\d/),Pu=_e(/[\dA-Fa-f]/),Yr=_e(/[!-/:-@[-`{-~]/);function M(e){return e!==null&&e<-2}function le(e){return e!==null&&(e<0||e===32)}function U(e){return e===-2||e===-1||e===32}function zu(e){return Yr(e)||_u(e)}const Lu=_e(/\s/);function _e(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function He(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&ce(e.charCodeAt(n+1))&&ce(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Q(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(u){return U(u)?(e.enter(n),a(u)):t(u)}function a(u){return U(u)&&o++<i?(e.consume(u),a):(e.exit(n),t(u))}}const Bu={tokenize:Mu};function Mu(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Q(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return M(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const Ou={tokenize:Ru},Bn={tokenize:Du};function Ru(e){const t=this,n=[];let r=0,i,o,l;return a;function a(E){if(r<n.length){const L=n[r];return t.containerState=L[1],e.attempt(L[0].continuation,u,c)(E)}return c(E)}function u(E){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&b();const L=t.events.length;let B=L,v;for(;B--;)if(t.events[B][0]==="exit"&&t.events[B][1].type==="chunkFlow"){v=t.events[B][1].end;break}S(r);let D=L;for(;D<t.events.length;)t.events[D][1].end=Object.assign({},v),D++;return Se(t.events,B+1,0,t.events.slice(L)),t.events.length=D,c(E)}return a(E)}function c(E){if(r===n.length){if(!i)return f(E);if(i.currentConstruct&&i.currentConstruct.concrete)return g(E);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Bn,p,h)(E)}function p(E){return i&&b(),S(r),f(E)}function h(E){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,g(E)}function f(E){return t.containerState={},e.attempt(Bn,d,g)(E)}function d(E){return r++,n.push([t.currentConstruct,t.containerState]),f(E)}function g(E){if(E===null){i&&b(),S(0),e.consume(E);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:i}),k(E)}function k(E){if(E===null){T(e.exit("chunkFlow"),!0),S(0),e.consume(E);return}return M(E)?(e.consume(E),T(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(E),k)}function T(E,L){const B=t.sliceStream(E);if(L&&B.push(null),E.previous=o,o&&(o.next=E),o=E,i.defineSkip(E.start),i.write(B),t.parser.lazy[E.start.line]){let v=i.events.length;for(;v--;)if(i.events[v][1].start.offset<l&&(!i.events[v][1].end||i.events[v][1].end.offset>l))return;const D=t.events.length;let G=D,$,V;for(;G--;)if(t.events[G][0]==="exit"&&t.events[G][1].type==="chunkFlow"){if($){V=t.events[G][1].end;break}$=!0}for(S(r),v=D;v<t.events.length;)t.events[v][1].end=Object.assign({},V),v++;Se(t.events,G+1,0,t.events.slice(D)),t.events.length=v}}function S(E){let L=n.length;for(;L-- >E;){const B=n[L];t.containerState=B[1],B[0].exit.call(t,e)}n.length=E}function b(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Du(e,t,n){return Q(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Mn(e){if(e===null||le(e)||Lu(e))return 1;if(zu(e))return 2}function nn(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Dt={name:"attention",tokenize:Nu,resolveAll:Fu};function Fu(e,t){let n=-1,r,i,o,l,a,u,c,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const h=Object.assign({},e[r][1].end),f=Object.assign({},e[n][1].start);On(h,-u),On(f,u),l={type:u>1?"strongSequence":"emphasisSequence",start:h,end:Object.assign({},e[r][1].end)},a={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:f},o={type:u>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},i={type:u>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},a.end)},e[r][1].end=Object.assign({},l.start),e[n][1].start=Object.assign({},a.end),c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=de(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=de(c,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),c=de(c,nn(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=de(c,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,c=de(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,Se(e,r-1,n-r+3,c),n=r+c.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Nu(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Mn(r);let o;return l;function l(u){return o=u,e.enter("attentionSequence"),a(u)}function a(u){if(u===o)return e.consume(u),a;const c=e.exit("attentionSequence"),p=Mn(u),h=!p||p===2&&i||n.includes(u),f=!i||i===2&&p||n.includes(r);return c._open=!!(o===42?h:h&&(i||!f)),c._close=!!(o===42?f:f&&(p||!h)),t(u)}}function On(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const $u={name:"autolink",tokenize:Hu};function Hu(e,t,n){let r=0;return i;function i(d){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(d){return Ce(d)?(e.consume(d),l):c(d)}function l(d){return d===43||d===45||d===46||ce(d)?(r=1,a(d)):c(d)}function a(d){return d===58?(e.consume(d),r=0,u):(d===43||d===45||d===46||ce(d))&&r++<32?(e.consume(d),a):(r=0,c(d))}function u(d){return d===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),t):d===null||d===32||d===60||Ot(d)?n(d):(e.consume(d),u)}function c(d){return d===64?(e.consume(d),p):Au(d)?(e.consume(d),c):n(d)}function p(d){return ce(d)?h(d):n(d)}function h(d){return d===46?(e.consume(d),r=0,p):d===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),t):f(d)}function f(d){if((d===45||ce(d))&&r++<63){const g=d===45?f:h;return e.consume(d),g}return n(d)}}const ht={tokenize:Vu,partial:!0};function Vu(e,t,n){return r;function r(o){return U(o)?Q(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||M(o)?t(o):n(o)}}const qr={name:"blockQuote",tokenize:Uu,continuation:{tokenize:Gu},exit:Yu};function Uu(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return U(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function Gu(e,t,n){const r=this;return i;function i(l){return U(l)?Q(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(qr,t,n)(l)}}function Yu(e){e.exit("blockQuote")}const Wr={name:"characterEscape",tokenize:qu};function qu(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Yr(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Qr={name:"characterReference",tokenize:Wu};function Wu(e,t,n){const r=this;let i=0,o,l;return a;function a(h){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),u}function u(h){return h===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(h),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,l=ce,p(h))}function c(h){return h===88||h===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(h),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=Pu,p):(e.enter("characterReferenceValue"),o=7,l=Rt,p(h))}function p(h){if(h===59&&i){const f=e.exit("characterReferenceValue");return l===ce&&!tn(r.sliceSerialize(f))?n(h):(e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(h)&&i++<o?(e.consume(h),p):n(h)}}const Rn={tokenize:Zu,partial:!0},Dn={name:"codeFenced",tokenize:Qu,concrete:!0};function Qu(e,t,n){const r=this,i={tokenize:B,partial:!0};let o=0,l=0,a;return u;function u(v){return c(v)}function c(v){const D=r.events[r.events.length-1];return o=D&&D[1].type==="linePrefix"?D[2].sliceSerialize(D[1],!0).length:0,a=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(v)}function p(v){return v===a?(l++,e.consume(v),p):l<3?n(v):(e.exit("codeFencedFenceSequence"),U(v)?Q(e,h,"whitespace")(v):h(v))}function h(v){return v===null||M(v)?(e.exit("codeFencedFence"),r.interrupt?t(v):e.check(Rn,k,L)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(v))}function f(v){return v===null||M(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),h(v)):U(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Q(e,d,"whitespace")(v)):v===96&&v===a?n(v):(e.consume(v),f)}function d(v){return v===null||M(v)?h(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(v))}function g(v){return v===null||M(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),h(v)):v===96&&v===a?n(v):(e.consume(v),g)}function k(v){return e.attempt(i,L,T)(v)}function T(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),S}function S(v){return o>0&&U(v)?Q(e,b,"linePrefix",o+1)(v):b(v)}function b(v){return v===null||M(v)?e.check(Rn,k,L)(v):(e.enter("codeFlowValue"),E(v))}function E(v){return v===null||M(v)?(e.exit("codeFlowValue"),b(v)):(e.consume(v),E)}function L(v){return e.exit("codeFenced"),t(v)}function B(v,D,G){let $=0;return V;function V(F){return v.enter("lineEnding"),v.consume(F),v.exit("lineEnding"),_}function _(F){return v.enter("codeFencedFence"),U(F)?Q(v,z,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):z(F)}function z(F){return F===a?(v.enter("codeFencedFenceSequence"),H(F)):G(F)}function H(F){return F===a?($++,v.consume(F),H):$>=l?(v.exit("codeFencedFenceSequence"),U(F)?Q(v,q,"whitespace")(F):q(F)):G(F)}function q(F){return F===null||M(F)?(v.exit("codeFencedFence"),D(F)):G(F)}}}function Zu(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const bt={name:"codeIndented",tokenize:Ku},Xu={tokenize:Ju,partial:!0};function Ku(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),Q(e,o,"linePrefix",4+1)(c)}function o(c){const p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?l(c):n(c)}function l(c){return c===null?u(c):M(c)?e.attempt(Xu,l,u)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||M(c)?(e.exit("codeFlowValue"),l(c)):(e.consume(c),a)}function u(c){return e.exit("codeIndented"),t(c)}}function Ju(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):M(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):Q(e,o,"linePrefix",4+1)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):M(l)?i(l):n(l)}}const ec={name:"codeText",tokenize:rc,resolve:tc,previous:nc};function tc(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function nc(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function rc(e,t,n){let r=0,i,o;return l;function l(h){return e.enter("codeText"),e.enter("codeTextSequence"),a(h)}function a(h){return h===96?(e.consume(h),r++,a):(e.exit("codeTextSequence"),u(h))}function u(h){return h===null?n(h):h===32?(e.enter("space"),e.consume(h),e.exit("space"),u):h===96?(o=e.enter("codeTextSequence"),i=0,p(h)):M(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(h))}function c(h){return h===null||h===32||h===96||M(h)?(e.exit("codeTextData"),u(h)):(e.consume(h),c)}function p(h){return h===96?(e.consume(h),i++,p):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(h)):(o.type="codeTextData",c(h))}}function Zr(e){const t={};let n=-1,r,i,o,l,a,u,c;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,ic(e,n)),n=t[n],c=!0);else if(r[1]._container){for(o=n,i=void 0;o--&&(l=e[o],l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(i&&(e[i][1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);i&&(r[1].end=Object.assign({},e[i][1].start),a=e.slice(i,n),a.unshift(r),Se(e,i,n-i+1,a))}}return!c}function ic(e,t){const n=e[t][1],r=e[t][2];let i=t-1;const o=[],l=n._tokenizer||r.parser[n.contentType](n.start),a=l.events,u=[],c={};let p,h,f=-1,d=n,g=0,k=0;const T=[k];for(;d;){for(;e[++i][1]!==d;);o.push(i),d._tokenizer||(p=r.sliceStream(d),d.next||p.push(null),h&&l.defineSkip(d.start),d._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(p),d._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),h=d,d=d.next}for(d=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(k=f+1,T.push(k),d._tokenizer=void 0,d.previous=void 0,d=d.next);for(l.events=[],d?(d._tokenizer=void 0,d.previous=void 0):T.pop(),f=T.length;f--;){const S=a.slice(T[f],T[f+1]),b=o.pop();u.unshift([b,b+S.length-1]),Se(e,b,2,S)}for(f=-1;++f<u.length;)c[g+u[f][0]]=g+u[f][1],g+=u[f][1]-u[f][0]-1;return c}const oc={tokenize:ac,resolve:sc},lc={tokenize:uc,partial:!0};function sc(e){return Zr(e),e}function ac(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):M(a)?e.check(lc,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function uc(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Q(e,o,"linePrefix")}function o(l){if(l===null||M(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Xr(e,t,n,r,i,o,l,a,u){const c=u||Number.POSITIVE_INFINITY;let p=0;return h;function h(S){return S===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(S),e.exit(o),f):S===null||S===32||S===41||Ot(S)?n(S):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),k(S))}function f(S){return S===62?(e.enter(o),e.consume(S),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),d(S))}function d(S){return S===62?(e.exit("chunkString"),e.exit(a),f(S)):S===null||S===60||M(S)?n(S):(e.consume(S),S===92?g:d)}function g(S){return S===60||S===62||S===92?(e.consume(S),d):d(S)}function k(S){return!p&&(S===null||S===41||le(S))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(S)):p<c&&S===40?(e.consume(S),p++,k):S===41?(e.consume(S),p--,k):S===null||S===32||S===40||Ot(S)?n(S):(e.consume(S),S===92?T:k)}function T(S){return S===40||S===41||S===92?(e.consume(S),k):k(S)}}function Kr(e,t,n,r,i,o){const l=this;let a=0,u;return c;function c(d){return e.enter(r),e.enter(i),e.consume(d),e.exit(i),e.enter(o),p}function p(d){return a>999||d===null||d===91||d===93&&!u||d===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(d):d===93?(e.exit(o),e.enter(i),e.consume(d),e.exit(i),e.exit(r),t):M(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),h(d))}function h(d){return d===null||d===91||d===93||M(d)||a++>999?(e.exit("chunkString"),p(d)):(e.consume(d),u||(u=!U(d)),d===92?f:h)}function f(d){return d===91||d===92||d===93?(e.consume(d),a++,h):h(d)}}function Jr(e,t,n,r,i,o){let l;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),l=f===40?41:f,u):n(f)}function u(f){return f===l?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),c(f))}function c(f){return f===l?(e.exit(o),u(l)):f===null?n(f):M(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Q(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(f))}function p(f){return f===l||f===null||M(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?h:p)}function h(f){return f===l||f===92?(e.consume(f),p):p(f)}}function qe(e,t){let n;return r;function r(i){return M(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):U(i)?Q(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const cc={name:"definition",tokenize:hc},pc={tokenize:dc,partial:!0};function hc(e,t,n){const r=this;let i;return o;function o(d){return e.enter("definition"),l(d)}function l(d){return Kr.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(d)}function a(d){return i=Fe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),d===58?(e.enter("definitionMarker"),e.consume(d),e.exit("definitionMarker"),u):n(d)}function u(d){return le(d)?qe(e,c)(d):c(d)}function c(d){return Xr(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(d)}function p(d){return e.attempt(pc,h,h)(d)}function h(d){return U(d)?Q(e,f,"whitespace")(d):f(d)}function f(d){return d===null||M(d)?(e.exit("definition"),r.parser.defined.push(i),t(d)):n(d)}}function dc(e,t,n){return r;function r(a){return le(a)?qe(e,i)(a):n(a)}function i(a){return Jr(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return U(a)?Q(e,l,"whitespace")(a):l(a)}function l(a){return a===null||M(a)?t(a):n(a)}}const fc={name:"hardBreakEscape",tokenize:xc};function xc(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return M(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const mc={name:"headingAtx",tokenize:yc,resolve:gc};function gc(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Se(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function yc(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),o(p)}function o(p){return e.enter("atxHeadingSequence"),l(p)}function l(p){return p===35&&r++<6?(e.consume(p),l):p===null||le(p)?(e.exit("atxHeadingSequence"),a(p)):n(p)}function a(p){return p===35?(e.enter("atxHeadingSequence"),u(p)):p===null||M(p)?(e.exit("atxHeading"),t(p)):U(p)?Q(e,a,"whitespace")(p):(e.enter("atxHeadingText"),c(p))}function u(p){return p===35?(e.consume(p),u):(e.exit("atxHeadingSequence"),a(p))}function c(p){return p===null||p===35||le(p)?(e.exit("atxHeadingText"),a(p)):(e.consume(p),c)}}const wc=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Fn=["pre","script","style","textarea"],kc={name:"htmlFlow",tokenize:Sc,resolveTo:Cc,concrete:!0},bc={tokenize:Ec,partial:!0},jc={tokenize:vc,partial:!0};function Cc(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Sc(e,t,n){const r=this;let i,o,l,a,u;return c;function c(m){return p(m)}function p(m){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(m),h}function h(m){return m===33?(e.consume(m),f):m===47?(e.consume(m),o=!0,k):m===63?(e.consume(m),i=3,r.interrupt?t:x):Ce(m)?(e.consume(m),l=String.fromCharCode(m),T):n(m)}function f(m){return m===45?(e.consume(m),i=2,d):m===91?(e.consume(m),i=5,a=0,g):Ce(m)?(e.consume(m),i=4,r.interrupt?t:x):n(m)}function d(m){return m===45?(e.consume(m),r.interrupt?t:x):n(m)}function g(m){const Z="CDATA[";return m===Z.charCodeAt(a++)?(e.consume(m),a===Z.length?r.interrupt?t:z:g):n(m)}function k(m){return Ce(m)?(e.consume(m),l=String.fromCharCode(m),T):n(m)}function T(m){if(m===null||m===47||m===62||le(m)){const Z=m===47,X=l.toLowerCase();return!Z&&!o&&Fn.includes(X)?(i=1,r.interrupt?t(m):z(m)):wc.includes(l.toLowerCase())?(i=6,Z?(e.consume(m),S):r.interrupt?t(m):z(m)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(m):o?b(m):E(m))}return m===45||ce(m)?(e.consume(m),l+=String.fromCharCode(m),T):n(m)}function S(m){return m===62?(e.consume(m),r.interrupt?t:z):n(m)}function b(m){return U(m)?(e.consume(m),b):V(m)}function E(m){return m===47?(e.consume(m),V):m===58||m===95||Ce(m)?(e.consume(m),L):U(m)?(e.consume(m),E):V(m)}function L(m){return m===45||m===46||m===58||m===95||ce(m)?(e.consume(m),L):B(m)}function B(m){return m===61?(e.consume(m),v):U(m)?(e.consume(m),B):E(m)}function v(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),u=m,D):U(m)?(e.consume(m),v):G(m)}function D(m){return m===u?(e.consume(m),u=null,$):m===null||M(m)?n(m):(e.consume(m),D)}function G(m){return m===null||m===34||m===39||m===47||m===60||m===61||m===62||m===96||le(m)?B(m):(e.consume(m),G)}function $(m){return m===47||m===62||U(m)?E(m):n(m)}function V(m){return m===62?(e.consume(m),_):n(m)}function _(m){return m===null||M(m)?z(m):U(m)?(e.consume(m),_):n(m)}function z(m){return m===45&&i===2?(e.consume(m),te):m===60&&i===1?(e.consume(m),ee):m===62&&i===4?(e.consume(m),se):m===63&&i===3?(e.consume(m),x):m===93&&i===5?(e.consume(m),ge):M(m)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(bc,he,H)(m)):m===null||M(m)?(e.exit("htmlFlowData"),H(m)):(e.consume(m),z)}function H(m){return e.check(jc,q,he)(m)}function q(m){return e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),F}function F(m){return m===null||M(m)?H(m):(e.enter("htmlFlowData"),z(m))}function te(m){return m===45?(e.consume(m),x):z(m)}function ee(m){return m===47?(e.consume(m),l="",ie):z(m)}function ie(m){if(m===62){const Z=l.toLowerCase();return Fn.includes(Z)?(e.consume(m),se):z(m)}return Ce(m)&&l.length<8?(e.consume(m),l+=String.fromCharCode(m),ie):z(m)}function ge(m){return m===93?(e.consume(m),x):z(m)}function x(m){return m===62?(e.consume(m),se):m===45&&i===2?(e.consume(m),x):z(m)}function se(m){return m===null||M(m)?(e.exit("htmlFlowData"),he(m)):(e.consume(m),se)}function he(m){return e.exit("htmlFlow"),t(m)}}function vc(e,t,n){const r=this;return i;function i(l){return M(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function Ec(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ht,t,n)}}const Tc={name:"htmlText",tokenize:Ic};function Ic(e,t,n){const r=this;let i,o,l;return a;function a(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),u}function u(x){return x===33?(e.consume(x),c):x===47?(e.consume(x),B):x===63?(e.consume(x),E):Ce(x)?(e.consume(x),G):n(x)}function c(x){return x===45?(e.consume(x),p):x===91?(e.consume(x),o=0,g):Ce(x)?(e.consume(x),b):n(x)}function p(x){return x===45?(e.consume(x),d):n(x)}function h(x){return x===null?n(x):x===45?(e.consume(x),f):M(x)?(l=h,ee(x)):(e.consume(x),h)}function f(x){return x===45?(e.consume(x),d):h(x)}function d(x){return x===62?te(x):x===45?f(x):h(x)}function g(x){const se="CDATA[";return x===se.charCodeAt(o++)?(e.consume(x),o===se.length?k:g):n(x)}function k(x){return x===null?n(x):x===93?(e.consume(x),T):M(x)?(l=k,ee(x)):(e.consume(x),k)}function T(x){return x===93?(e.consume(x),S):k(x)}function S(x){return x===62?te(x):x===93?(e.consume(x),S):k(x)}function b(x){return x===null||x===62?te(x):M(x)?(l=b,ee(x)):(e.consume(x),b)}function E(x){return x===null?n(x):x===63?(e.consume(x),L):M(x)?(l=E,ee(x)):(e.consume(x),E)}function L(x){return x===62?te(x):E(x)}function B(x){return Ce(x)?(e.consume(x),v):n(x)}function v(x){return x===45||ce(x)?(e.consume(x),v):D(x)}function D(x){return M(x)?(l=D,ee(x)):U(x)?(e.consume(x),D):te(x)}function G(x){return x===45||ce(x)?(e.consume(x),G):x===47||x===62||le(x)?$(x):n(x)}function $(x){return x===47?(e.consume(x),te):x===58||x===95||Ce(x)?(e.consume(x),V):M(x)?(l=$,ee(x)):U(x)?(e.consume(x),$):te(x)}function V(x){return x===45||x===46||x===58||x===95||ce(x)?(e.consume(x),V):_(x)}function _(x){return x===61?(e.consume(x),z):M(x)?(l=_,ee(x)):U(x)?(e.consume(x),_):$(x)}function z(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),i=x,H):M(x)?(l=z,ee(x)):U(x)?(e.consume(x),z):(e.consume(x),q)}function H(x){return x===i?(e.consume(x),i=void 0,F):x===null?n(x):M(x)?(l=H,ee(x)):(e.consume(x),H)}function q(x){return x===null||x===34||x===39||x===60||x===61||x===96?n(x):x===47||x===62||le(x)?$(x):(e.consume(x),q)}function F(x){return x===47||x===62||le(x)?$(x):n(x)}function te(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),t):n(x)}function ee(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),ie}function ie(x){return U(x)?Q(e,ge,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):ge(x)}function ge(x){return e.enter("htmlTextData"),l(x)}}const rn={name:"labelEnd",tokenize:Bc,resolveTo:Lc,resolveAll:zc},_c={tokenize:Mc},Ac={tokenize:Oc},Pc={tokenize:Rc};function zc(e){let t=-1;for(;++t<e.length;){const n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function Lc(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const u={type:e[o][1].type==="labelLink"?"link":"image",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[o][1].start),end:Object.assign({},e[l][1].end)},p={type:"labelText",start:Object.assign({},e[o+r+2][1].end),end:Object.assign({},e[l-2][1].start)};return a=[["enter",u,t],["enter",c,t]],a=de(a,e.slice(o+1,o+r+3)),a=de(a,[["enter",p,t]]),a=de(a,nn(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=de(a,[["exit",p,t],e[l-2],e[l-1],["exit",c,t]]),a=de(a,e.slice(l+1)),a=de(a,[["exit",u,t]]),Se(e,o,e.length,a),e}function Bc(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(f){return o?o._inactive?h(f):(l=r.parser.defined.includes(Fe(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),u):n(f)}function u(f){return f===40?e.attempt(_c,p,l?p:h)(f):f===91?e.attempt(Ac,p,l?c:h)(f):l?p(f):h(f)}function c(f){return e.attempt(Pc,p,h)(f)}function p(f){return t(f)}function h(f){return o._balanced=!0,n(f)}}function Mc(e,t,n){return r;function r(h){return e.enter("resource"),e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),i}function i(h){return le(h)?qe(e,o)(h):o(h)}function o(h){return h===41?p(h):Xr(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(h)}function l(h){return le(h)?qe(e,u)(h):p(h)}function a(h){return n(h)}function u(h){return h===34||h===39||h===40?Jr(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(h):p(h)}function c(h){return le(h)?qe(e,p)(h):p(h)}function p(h){return h===41?(e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),e.exit("resource"),t):n(h)}}function Oc(e,t,n){const r=this;return i;function i(a){return Kr.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Fe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function Rc(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Dc={name:"labelStartImage",tokenize:Fc,resolveAll:rn.resolveAll};function Fc(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Nc={name:"labelStartLink",tokenize:$c,resolveAll:rn.resolveAll};function $c(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const jt={name:"lineEnding",tokenize:Hc};function Hc(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Q(e,t,"linePrefix")}}const tt={name:"thematicBreak",tokenize:Vc};function Vc(e,t,n){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),l(c)}function l(c){return i=c,a(c)}function a(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||M(c))?(e.exit("thematicBreak"),t(c)):n(c)}function u(c){return c===i?(e.consume(c),r++,u):(e.exit("thematicBreakSequence"),U(c)?Q(e,a,"whitespace")(c):a(c))}}const oe={name:"list",tokenize:Yc,continuation:{tokenize:qc},exit:Qc},Uc={tokenize:Zc,partial:!0},Gc={tokenize:Wc,partial:!0};function Yc(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(d){const g=r.containerState.type||(d===42||d===43||d===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||d===r.containerState.marker:Rt(d)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),d===42||d===45?e.check(tt,n,c)(d):c(d);if(!r.interrupt||d===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(d)}return n(d)}function u(d){return Rt(d)&&++l<10?(e.consume(d),u):(!r.interrupt||l<2)&&(r.containerState.marker?d===r.containerState.marker:d===41||d===46)?(e.exit("listItemValue"),c(d)):n(d)}function c(d){return e.enter("listItemMarker"),e.consume(d),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||d,e.check(ht,r.interrupt?n:p,e.attempt(Uc,f,h))}function p(d){return r.containerState.initialBlankLine=!0,o++,f(d)}function h(d){return U(d)?(e.enter("listItemPrefixWhitespace"),e.consume(d),e.exit("listItemPrefixWhitespace"),f):n(d)}function f(d){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(d)}}function qc(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ht,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Q(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!U(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Gc,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Q(e,e.attempt(oe,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Wc(e,t,n){const r=this;return Q(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function Qc(e){e.exit(this.containerState.type)}function Zc(e,t,n){const r=this;return Q(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(o){const l=r.events[r.events.length-1];return!U(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Nn={name:"setextUnderline",tokenize:Kc,resolveTo:Xc};function Xc(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[o][1].end)):e[r][1]=l,e.push(["exit",l,t]),e}function Kc(e,t,n){const r=this;let i;return o;function o(c){let p=r.events.length,h;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){h=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||h)?(e.enter("setextHeadingLine"),i=c,l(c)):n(c)}function l(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),U(c)?Q(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||M(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const Jc={tokenize:ep};function ep(e){const t=this,n=e.attempt(ht,r,e.attempt(this.parser.constructs.flowInitial,i,Q(e,e.attempt(this.parser.constructs.flow,i,e.attempt(oc,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const tp={resolveAll:ti()},np=ei("string"),rp=ei("text");function ei(e){return{tokenize:t,resolveAll:ti(e==="text"?ip:void 0)};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(p){return c(p)?o(p):a(p)}function a(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),u}function u(p){return c(p)?(n.exit("data"),o(p)):(n.consume(p),u)}function c(p){if(p===null)return!0;const h=i[p];let f=-1;if(h)for(;++f<h.length;){const d=h[f];if(!d.previous||d.previous.call(r,r.previous))return!0}return!1}}}function ti(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function ip(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,u;for(;o--;){const c=i[o];if(typeof c=="string"){for(l=c.length;c.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(c===-2)u=!0,a++;else if(c!==-1){o++;break}}if(a){const c={type:n===e.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-a,offset:r.end.offset-a,_index:r.start._index+o,_bufferIndex:o?l:r.start._bufferIndex+l},end:Object.assign({},r.end)};r.end=Object.assign({},c.start),r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}function op(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},o=[];let l=[],a=[];const u={consume:b,enter:E,exit:L,attempt:D(B),check:D(v),interrupt:D(v,{interrupt:!0})},c={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:d,sliceSerialize:f,now:g,defineSkip:k,write:h};let p=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function h(_){return l=de(l,_),T(),l[l.length-1]!==null?[]:(G(t,0),c.events=nn(o,c.events,c),c.events)}function f(_,z){return sp(d(_),z)}function d(_){return lp(l,_)}function g(){const{line:_,column:z,offset:H,_index:q,_bufferIndex:F}=r;return{line:_,column:z,offset:H,_index:q,_bufferIndex:F}}function k(_){i[_.line]=_.column,V()}function T(){let _;for(;r._index<l.length;){const z=l[r._index];if(typeof z=="string")for(_=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===_&&r._bufferIndex<z.length;)S(z.charCodeAt(r._bufferIndex));else S(z)}}function S(_){p=p(_)}function b(_){M(_)?(r.line++,r.column=1,r.offset+=_===-3?2:1,V()):_!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=_}function E(_,z){const H=z||{};return H.type=_,H.start=g(),c.events.push(["enter",H,c]),a.push(H),H}function L(_){const z=a.pop();return z.end=g(),c.events.push(["exit",z,c]),z}function B(_,z){G(_,z.from)}function v(_,z){z.restore()}function D(_,z){return H;function H(q,F,te){let ee,ie,ge,x;return Array.isArray(q)?he(q):"tokenize"in q?he([q]):se(q);function se(K){return Ae;function Ae(be){const Pe=be!==null&&K[be],ze=be!==null&&K.null,xt=[...Array.isArray(Pe)?Pe:Pe?[Pe]:[],...Array.isArray(ze)?ze:ze?[ze]:[]];return he(xt)(be)}}function he(K){return ee=K,ie=0,K.length===0?te:m(K[ie])}function m(K){return Ae;function Ae(be){return x=$(),ge=K,K.partial||(c.currentConstruct=K),K.name&&c.parser.constructs.disable.null.includes(K.name)?X():K.tokenize.call(z?Object.assign(Object.create(c),z):c,u,Z,X)(be)}}function Z(K){return _(ge,x),F}function X(K){return x.restore(),++ie<ee.length?m(ee[ie]):te}}}function G(_,z){_.resolveAll&&!o.includes(_)&&o.push(_),_.resolve&&Se(c.events,z,c.events.length-z,_.resolve(c.events.slice(z),c)),_.resolveTo&&(c.events=_.resolveTo(c.events,c))}function $(){const _=g(),z=c.previous,H=c.currentConstruct,q=c.events.length,F=Array.from(a);return{restore:te,from:q};function te(){r=_,c.previous=z,c.currentConstruct=H,c.events.length=q,a=F,V()}}function V(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function lp(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function sp(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}const ap={42:oe,43:oe,45:oe,48:oe,49:oe,50:oe,51:oe,52:oe,53:oe,54:oe,55:oe,56:oe,57:oe,62:qr},up={91:cc},cp={[-2]:bt,[-1]:bt,32:bt},pp={35:mc,42:tt,45:[Nn,tt],60:kc,61:Nn,95:tt,96:Dn,126:Dn},hp={38:Qr,92:Wr},dp={[-5]:jt,[-4]:jt,[-3]:jt,33:Dc,38:Qr,42:Dt,60:[$u,Tc],91:Nc,92:[fc,Wr],93:rn,95:Dt,96:ec},fp={null:[Dt,tp]},xp={null:[42,95]},mp={null:[]},gp=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:xp,contentInitial:up,disable:mp,document:ap,flow:pp,flowInitial:cp,insideSpan:fp,string:hp,text:dp},Symbol.toStringTag,{value:"Module"}));function yp(e){const n=Eu([gp,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:n,content:i(Bu),document:i(Ou),flow:i(Jc),string:i(np),text:i(rp)};return r;function i(o){return l;function l(a){return op(r,o,a)}}}function wp(e){for(;!Zr(e););return e}const $n=/[\0\t\n\r]/g;function kp(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const u=[];let c,p,h,f,d;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),h=0,t="",n&&(o.charCodeAt(0)===65279&&h++,n=void 0);h<o.length;){if($n.lastIndex=h,c=$n.exec(o),f=c&&c.index!==void 0?c.index:o.length,d=o.charCodeAt(f),!c){t=o.slice(h);break}if(d===10&&h===f&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),h<f&&(u.push(o.slice(h,f)),e+=f-h),d){case 0:{u.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,u.push(-2);e++<p;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}h=f+1}return a&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const bp=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function jp(e){return e.replace(bp,Cp)}function Cp(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Gr(n.slice(o?2:1),o?16:10)}return tn(n)||e}const ni={}.hasOwnProperty;function Sp(e,t,n){return typeof t!="string"&&(n=t,t=void 0),vp(n)(wp(yp(n).document().write(kp()(e,t,!0))))}function vp(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(dn),autolinkProtocol:$,autolinkEmail:$,atxHeading:o(cn),blockQuote:o(Pe),characterEscape:$,characterReference:$,codeFenced:o(ze),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(ze,l),codeText:o(xt,l),codeTextData:$,data:$,codeFlowValue:$,definition:o(xi),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(mi),hardBreakEscape:o(pn),hardBreakTrailing:o(pn),htmlFlow:o(hn,l),htmlFlowData:$,htmlText:o(hn,l),htmlTextData:$,image:o(gi),label:l,link:o(dn),listItem:o(yi),listItemValue:f,listOrdered:o(fn,h),listUnordered:o(fn),paragraph:o(wi),reference:m,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(cn),strong:o(ki),thematicBreak:o(ji)},exit:{atxHeading:u(),atxHeadingSequence:B,autolink:u(),autolinkEmail:be,autolinkProtocol:Ae,blockQuote:u(),characterEscapeValue:V,characterReferenceMarkerHexadecimal:X,characterReferenceMarkerNumeric:X,characterReferenceValue:K,codeFenced:u(T),codeFencedFence:k,codeFencedFenceInfo:d,codeFencedFenceMeta:g,codeFlowValue:V,codeIndented:u(S),codeText:u(F),codeTextData:V,data:V,definition:u(),definitionDestinationString:L,definitionLabelString:b,definitionTitleString:E,emphasis:u(),hardBreakEscape:u(z),hardBreakTrailing:u(z),htmlFlow:u(H),htmlFlowData:V,htmlText:u(q),htmlTextData:V,image:u(ee),label:ge,labelText:ie,lineEnding:_,link:u(te),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:Z,resourceDestinationString:x,resourceTitleString:se,resource:he,setextHeading:u(G),setextHeadingLineSequence:D,setextHeadingText:v,strong:u(),thematicBreak:u()}};ri(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(C){let P={type:"root",children:[]};const O={stack:[P],tokenStack:[],config:t,enter:a,exit:c,buffer:l,resume:p,data:n},N=[];let Y=-1;for(;++Y<C.length;)if(C[Y][1].type==="listOrdered"||C[Y][1].type==="listUnordered")if(C[Y][0]==="enter")N.push(Y);else{const ye=N.pop();Y=i(C,ye,Y)}for(Y=-1;++Y<C.length;){const ye=t[C[Y][0]];ni.call(ye,C[Y][1].type)&&ye[C[Y][1].type].call(Object.assign({sliceSerialize:C[Y][2].sliceSerialize},O),C[Y][1])}if(O.tokenStack.length>0){const ye=O.tokenStack[O.tokenStack.length-1];(ye[1]||Hn).call(O,void 0,ye[0])}for(P.position={start:Te(C.length>0?C[0][1].start:{line:1,column:1,offset:0}),end:Te(C.length>0?C[C.length-2][1].end:{line:1,column:1,offset:0})},Y=-1;++Y<t.transforms.length;)P=t.transforms[Y](P)||P;return P}function i(C,P,O){let N=P-1,Y=-1,ye=!1,Le,ve,Ve,Ue;for(;++N<=O;){const ae=C[N];switch(ae[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ae[0]==="enter"?Y++:Y--,Ue=void 0;break}case"lineEndingBlank":{ae[0]==="enter"&&(Le&&!Ue&&!Y&&!Ve&&(Ve=N),Ue=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ue=void 0}if(!Y&&ae[0]==="enter"&&ae[1].type==="listItemPrefix"||Y===-1&&ae[0]==="exit"&&(ae[1].type==="listUnordered"||ae[1].type==="listOrdered")){if(Le){let Oe=N;for(ve=void 0;Oe--;){const Ee=C[Oe];if(Ee[1].type==="lineEnding"||Ee[1].type==="lineEndingBlank"){if(Ee[0]==="exit")continue;ve&&(C[ve][1].type="lineEndingBlank",ye=!0),Ee[1].type="lineEnding",ve=Oe}else if(!(Ee[1].type==="linePrefix"||Ee[1].type==="blockQuotePrefix"||Ee[1].type==="blockQuotePrefixWhitespace"||Ee[1].type==="blockQuoteMarker"||Ee[1].type==="listItemIndent"))break}Ve&&(!ve||Ve<ve)&&(Le._spread=!0),Le.end=Object.assign({},ve?C[ve][1].start:ae[1].end),C.splice(ve||N,0,["exit",Le,ae[2]]),N++,O++}if(ae[1].type==="listItemPrefix"){const Oe={type:"listItem",_spread:!1,start:Object.assign({},ae[1].start),end:void 0};Le=Oe,C.splice(N,0,["enter",Oe,ae[2]]),N++,O++,Ve=void 0,Ue=!0}}}return C[P][1]._spread=ye,O}function o(C,P){return O;function O(N){a.call(this,C(N),N),P&&P.call(this,N)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(C,P,O){this.stack[this.stack.length-1].children.push(C),this.stack.push(C),this.tokenStack.push([P,O]),C.position={start:Te(P.start),end:void 0}}function u(C){return P;function P(O){C&&C.call(this,O),c.call(this,O)}}function c(C,P){const O=this.stack.pop(),N=this.tokenStack.pop();if(N)N[0].type!==C.type&&(P?P.call(this,C,N[0]):(N[1]||Hn).call(this,C,N[0]));else throw new Error("Cannot close `"+C.type+"` ("+Ye({start:C.start,end:C.end})+"): it’s not open");O.position.end=Te(C.end)}function p(){return Su(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function f(C){if(this.data.expectingFirstListItemValue){const P=this.stack[this.stack.length-2];P.start=Number.parseInt(this.sliceSerialize(C),10),this.data.expectingFirstListItemValue=void 0}}function d(){const C=this.resume(),P=this.stack[this.stack.length-1];P.lang=C}function g(){const C=this.resume(),P=this.stack[this.stack.length-1];P.meta=C}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const C=this.resume(),P=this.stack[this.stack.length-1];P.value=C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function S(){const C=this.resume(),P=this.stack[this.stack.length-1];P.value=C.replace(/(\r?\n|\r)$/g,"")}function b(C){const P=this.resume(),O=this.stack[this.stack.length-1];O.label=P,O.identifier=Fe(this.sliceSerialize(C)).toLowerCase()}function E(){const C=this.resume(),P=this.stack[this.stack.length-1];P.title=C}function L(){const C=this.resume(),P=this.stack[this.stack.length-1];P.url=C}function B(C){const P=this.stack[this.stack.length-1];if(!P.depth){const O=this.sliceSerialize(C).length;P.depth=O}}function v(){this.data.setextHeadingSlurpLineEnding=!0}function D(C){const P=this.stack[this.stack.length-1];P.depth=this.sliceSerialize(C).codePointAt(0)===61?1:2}function G(){this.data.setextHeadingSlurpLineEnding=void 0}function $(C){const O=this.stack[this.stack.length-1].children;let N=O[O.length-1];(!N||N.type!=="text")&&(N=bi(),N.position={start:Te(C.start),end:void 0},O.push(N)),this.stack.push(N)}function V(C){const P=this.stack.pop();P.value+=this.sliceSerialize(C),P.position.end=Te(C.end)}function _(C){const P=this.stack[this.stack.length-1];if(this.data.atHardBreak){const O=P.children[P.children.length-1];O.position.end=Te(C.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(P.type)&&($.call(this,C),V.call(this,C))}function z(){this.data.atHardBreak=!0}function H(){const C=this.resume(),P=this.stack[this.stack.length-1];P.value=C}function q(){const C=this.resume(),P=this.stack[this.stack.length-1];P.value=C}function F(){const C=this.resume(),P=this.stack[this.stack.length-1];P.value=C}function te(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=P,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function ee(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=P,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function ie(C){const P=this.sliceSerialize(C),O=this.stack[this.stack.length-2];O.label=jp(P),O.identifier=Fe(P).toLowerCase()}function ge(){const C=this.stack[this.stack.length-1],P=this.resume(),O=this.stack[this.stack.length-1];if(this.data.inReference=!0,O.type==="link"){const N=C.children;O.children=N}else O.alt=P}function x(){const C=this.resume(),P=this.stack[this.stack.length-1];P.url=C}function se(){const C=this.resume(),P=this.stack[this.stack.length-1];P.title=C}function he(){this.data.inReference=void 0}function m(){this.data.referenceType="collapsed"}function Z(C){const P=this.resume(),O=this.stack[this.stack.length-1];O.label=P,O.identifier=Fe(this.sliceSerialize(C)).toLowerCase(),this.data.referenceType="full"}function X(C){this.data.characterReferenceType=C.type}function K(C){const P=this.sliceSerialize(C),O=this.data.characterReferenceType;let N;O?(N=Gr(P,O==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):N=tn(P);const Y=this.stack.pop();Y.value+=N,Y.position.end=Te(C.end)}function Ae(C){V.call(this,C);const P=this.stack[this.stack.length-1];P.url=this.sliceSerialize(C)}function be(C){V.call(this,C);const P=this.stack[this.stack.length-1];P.url="mailto:"+this.sliceSerialize(C)}function Pe(){return{type:"blockquote",children:[]}}function ze(){return{type:"code",lang:null,meta:null,value:""}}function xt(){return{type:"inlineCode",value:""}}function xi(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function mi(){return{type:"emphasis",children:[]}}function cn(){return{type:"heading",depth:0,children:[]}}function pn(){return{type:"break"}}function hn(){return{type:"html",value:""}}function gi(){return{type:"image",title:null,url:"",alt:null}}function dn(){return{type:"link",title:null,url:"",children:[]}}function fn(C){return{type:"list",ordered:C.type==="listOrdered",start:null,spread:C._spread,children:[]}}function yi(C){return{type:"listItem",spread:C._spread,checked:null,children:[]}}function wi(){return{type:"paragraph",children:[]}}function ki(){return{type:"strong",children:[]}}function bi(){return{type:"text",value:""}}function ji(){return{type:"thematicBreak"}}}function Te(e){return{line:e.line,column:e.column,offset:e.offset}}function ri(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?ri(e,r):Ep(e,r)}}function Ep(e,t){let n;for(n in t)if(ni.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Hn(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ye({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ye({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ye({start:t.start,end:t.end})+") is still open")}function Tp(e){const t=this;t.parser=n;function n(r){return Sp(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Ip(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function _p(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Ap(e,t){const n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i}function Pp(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zp(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Lp(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=He(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,a+=1,e.footnoteCounts.set(r,a);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,c),e.applyData(t,c)}function Bp(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Mp(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function ii(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function Op(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ii(e,t);const i={src:He(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Rp(e,t){const n={src:He(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Dp(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Fp(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ii(e,t);const i={href:He(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Np(e,t){const n={href:He(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function $p(e,t,n){const r=e.all(t),i=n?Hp(n):oi(t),o={},l=[];if(typeof t.checked=="boolean"){const p=r[0];let h;p&&p.type==="element"&&p.tagName==="p"?h=p:(h={type:"element",tagName:"p",properties:{},children:[]},r.unshift(h)),h.children.length>0&&h.children.unshift({type:"text",value:" "}),h.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const p=r[a];(i||a!==0||p.type!=="element"||p.tagName!=="p")&&l.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?l.push(...p.children):l.push(p)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,c),e.applyData(t,c)}function Hp(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=oi(n[r])}return t}function oi(e){const t=e.spread;return t??e.children.length>1}function Vp(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function Up(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Gp(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Yp(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qp(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Xt(t.children[1]),u=Dr(t.children[t.children.length-1]);a&&u&&(l.position={start:a,end:u}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function Wp(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let u=-1;const c=[];for(;++u<a;){const h=t.children[u],f={},d=l?l[u]:void 0;d&&(f.align=d);let g={type:"element",tagName:o,properties:f,children:[]};h&&(g.children=e.all(h),e.patch(h,g),g=e.applyData(h,g)),c.push(g)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,p),e.applyData(t,p)}function Qp(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Vn=9,Un=32;function Zp(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Gn(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Gn(t.slice(i),i>0,!1)),o.join("")}function Gn(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Vn||o===Un;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Vn||o===Un;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Xp(e,t){const n={type:"text",value:Zp(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Kp(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Jp={blockquote:Ip,break:_p,code:Ap,delete:Pp,emphasis:zp,footnoteReference:Lp,heading:Bp,html:Mp,imageReference:Op,image:Rp,inlineCode:Dp,linkReference:Fp,link:Np,listItem:$p,list:Vp,paragraph:Up,root:Gp,strong:Yp,table:qp,tableCell:Qp,tableRow:Wp,text:Xp,thematicBreak:Kp,toml:Ke,yaml:Ke,definition:Ke,footnoteDefinition:Ke};function Ke(){}const li=-1,dt=0,ot=1,lt=2,on=3,ln=4,sn=5,an=6,si=7,ai=8,Yn=typeof self=="object"?self:globalThis,e0=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case dt:case li:return n(l,i);case ot:{const a=n([],i);for(const u of l)a.push(r(u));return a}case lt:{const a=n({},i);for(const[u,c]of l)a[r(u)]=r(c);return a}case on:return n(new Date(l),i);case ln:{const{source:a,flags:u}=l;return n(new RegExp(a,u),i)}case sn:{const a=n(new Map,i);for(const[u,c]of l)a.set(r(u),r(c));return a}case an:{const a=n(new Set,i);for(const u of l)a.add(r(u));return a}case si:{const{name:a,message:u}=l;return n(new Yn[a](u),i)}case ai:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i)}return n(new Yn[o](l),i)};return r},qn=e=>e0(new Map,e)(0),Re="",{toString:t0}={},{keys:n0}=Object,Ge=e=>{const t=typeof e;if(t!=="object"||!e)return[dt,t];const n=t0.call(e).slice(8,-1);switch(n){case"Array":return[ot,Re];case"Object":return[lt,Re];case"Date":return[on,Re];case"RegExp":return[ln,Re];case"Map":return[sn,Re];case"Set":return[an,Re]}return n.includes("Array")?[ot,n]:n.includes("Error")?[si,n]:[lt,n]},Je=([e,t])=>e===dt&&(t==="function"||t==="symbol"),r0=(e,t,n,r)=>{const i=(l,a)=>{const u=r.push(l)-1;return n.set(a,u),u},o=l=>{if(n.has(l))return n.get(l);let[a,u]=Ge(l);switch(a){case dt:{let p=l;switch(u){case"bigint":a=ai,p=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);p=null;break;case"undefined":return i([li],l)}return i([a,p],l)}case ot:{if(u)return i([u,[...l]],l);const p=[],h=i([a,p],l);for(const f of l)p.push(o(f));return h}case lt:{if(u)switch(u){case"BigInt":return i([u,l.toString()],l);case"Boolean":case"Number":case"String":return i([u,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const p=[],h=i([a,p],l);for(const f of n0(l))(e||!Je(Ge(l[f])))&&p.push([o(f),o(l[f])]);return h}case on:return i([a,l.toISOString()],l);case ln:{const{source:p,flags:h}=l;return i([a,{source:p,flags:h}],l)}case sn:{const p=[],h=i([a,p],l);for(const[f,d]of l)(e||!(Je(Ge(f))||Je(Ge(d))))&&p.push([o(f),o(d)]);return h}case an:{const p=[],h=i([a,p],l);for(const f of l)(e||!Je(Ge(f)))&&p.push(o(f));return h}}const{message:c}=l;return i([a,{name:u,message:c}],l)};return o},Wn=(e,{json:t,lossy:n}={})=>{const r=[];return r0(!(t||n),!!t,new Map,r)(e),r},st=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?qn(Wn(e,t)):structuredClone(e):(e,t)=>qn(Wn(e,t));function i0(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function o0(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function l0(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||i0,r=e.options.footnoteBackLabel||o0,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const p=e.all(c),h=String(c.identifier).toUpperCase(),f=He(h.toLowerCase());let d=0;const g=[],k=e.footnoteCounts.get(h);for(;k!==void 0&&++d<=k;){g.length>0&&g.push({type:"text",value:" "});let b=typeof n=="string"?n:n(u,d);typeof b=="string"&&(b={type:"text",value:b}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(d>1?"-"+d:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,d),className:["data-footnote-backref"]},children:Array.isArray(b)?b:[b]})}const T=p[p.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const b=T.children[T.children.length-1];b&&b.type==="text"?b.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...g)}else p.push(...g);const S={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(p,!0)};e.patch(c,S),a.push(S)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...st(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const ui=function(e){if(e==null)return c0;if(typeof e=="function")return ft(e);if(typeof e=="object")return Array.isArray(e)?s0(e):a0(e);if(typeof e=="string")return u0(e);throw new Error("Expected function, string, or object as test")};function s0(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=ui(e[n]);return ft(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function a0(e){const t=e;return ft(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function u0(e){return ft(t);function t(n){return n&&n.type===e}}function ft(e){return t;function t(n,r,i){return!!(p0(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function c0(){return!0}function p0(e){return e!==null&&typeof e=="object"&&"type"in e}const ci=[],h0=!0,Qn=!1,d0="skip";function f0(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=ui(i),l=r?-1:1;a(e,void 0,[])();function a(u,c,p){const h=u&&typeof u=="object"?u:{};if(typeof h.type=="string"){const d=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(u.type+(d?"<"+d+">":""))+")"})}return f;function f(){let d=ci,g,k,T;if((!t||o(u,c,p[p.length-1]||void 0))&&(d=x0(n(u,p)),d[0]===Qn))return d;if("children"in u&&u.children){const S=u;if(S.children&&d[0]!==d0)for(k=(r?S.children.length:-1)+l,T=p.concat(S);k>-1&&k<S.children.length;){const b=S.children[k];if(g=a(b,k,T)(),g[0]===Qn)return g;k=typeof g[1]=="number"?g[1]:k+l}}return d}}}function x0(e){return Array.isArray(e)?e:typeof e=="number"?[h0,e]:e==null?ci:[e]}function pi(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),f0(e,o,a,i);function a(u,c){const p=c[c.length-1],h=p?p.children.indexOf(u):void 0;return l(u,h,p)}}const Ft={}.hasOwnProperty,m0={};function g0(e,t){const n=t||m0,r=new Map,i=new Map,o=new Map,l={...Jp,...n.handlers},a={all:c,applyData:w0,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:u,options:n,patch:y0,wrap:b0};return pi(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const h=p.type==="definition"?r:i,f=String(p.identifier).toUpperCase();h.has(f)||h.set(f,p)}}),a;function u(p,h){const f=p.type,d=a.handlers[f];if(Ft.call(a.handlers,f)&&d)return d(a,p,h);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in p){const{children:k,...T}=p,S=st(T);return S.children=a.all(p),S}return st(p)}return(a.options.unknownHandler||k0)(a,p,h)}function c(p){const h=[];if("children"in p){const f=p.children;let d=-1;for(;++d<f.length;){const g=a.one(f[d],p);if(g){if(d&&f[d-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Zn(g.value)),!Array.isArray(g)&&g.type==="element")){const k=g.children[0];k&&k.type==="text"&&(k.value=Zn(k.value))}Array.isArray(g)?h.push(...g):h.push(g)}}}return h}}function y0(e,t){e.position&&(t.position=eu(e))}function w0(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,st(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function k0(e,t){const n=t.data||{},r="value"in t&&!(Ft.call(n,"hProperties")||Ft.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function b0(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Zn(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Xn(e,t){const n=g0(e,t),r=n.one(e,void 0),i=l0(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function j0(e,t){return e&&"run"in e?async function(n,r){const i=Xn(n,t);await e.run(i,r)}:function(n){return Xn(n,t||e)}}function Kn(e){if(e)throw e}var nt=Object.prototype.hasOwnProperty,hi=Object.prototype.toString,Jn=Object.defineProperty,er=Object.getOwnPropertyDescriptor,tr=function(t){return typeof Array.isArray=="function"?Array.isArray(t):hi.call(t)==="[object Array]"},nr=function(t){if(!t||hi.call(t)!=="[object Object]")return!1;var n=nt.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&nt.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||nt.call(t,i)},rr=function(t,n){Jn&&n.name==="__proto__"?Jn(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},ir=function(t,n){if(n==="__proto__")if(nt.call(t,n)){if(er)return er(t,n).value}else return;return t[n]},C0=function e(){var t,n,r,i,o,l,a=arguments[0],u=1,c=arguments.length,p=!1;for(typeof a=="boolean"&&(p=a,a=arguments[1]||{},u=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});u<c;++u)if(t=arguments[u],t!=null)for(n in t)r=ir(a,n),i=ir(t,n),a!==i&&(p&&i&&(nr(i)||(o=tr(i)))?(o?(o=!1,l=r&&tr(r)?r:[]):l=r&&nr(r)?r:{},rr(a,{name:n,newValue:e(p,l,i)})):typeof i<"u"&&rr(a,{name:n,newValue:i}));return a};const Ct=_i(C0);function Nt(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function S0(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(u,...c){const p=e[++o];let h=-1;if(u){l(u);return}for(;++h<i.length;)(c[h]===null||c[h]===void 0)&&(c[h]=i[h]);i=c,p?v0(p,a)(...c):l(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function v0(e,t){let n;return r;function r(...l){const a=e.length>l.length;let u;a&&l.push(i);try{u=e.apply(this,l)}catch(c){const p=c;if(a&&n)throw p;return i(p)}a||(u instanceof Promise?u.then(o,i):u instanceof Error?i(u):o(u))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const je={basename:E0,dirname:T0,extname:I0,join:_0,sep:"/"};function E0(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ze(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function T0(e){if(Ze(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function I0(e){Ze(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function _0(...e){let t=-1,n;for(;++t<e.length;)Ze(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":A0(n)}function A0(e){Ze(e);const t=e.codePointAt(0)===47;let n=P0(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function P0(e,t){let n="",r=0,i=-1,o=0,l=-1,a,u;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function Ze(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const z0={cwd:L0};function L0(){return"/"}function $t(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function B0(e){if(typeof e=="string")e=new URL(e);else if(!$t(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return M0(e)}function M0(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const St=["history","path","basename","stem","extname","dirname"];class di{constructor(t){let n;t?$t(t)?n={path:t}:typeof t=="string"||O0(t)?n={value:t}:n=t:n={},this.cwd=z0.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<St.length;){const o=St[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)St.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?je.basename(this.path):void 0}set basename(t){Et(t,"basename"),vt(t,"basename"),this.path=je.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?je.dirname(this.path):void 0}set dirname(t){or(this.basename,"dirname"),this.path=je.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?je.extname(this.path):void 0}set extname(t){if(vt(t,"extname"),or(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=je.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){$t(t)&&(t=B0(t)),Et(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?je.basename(this.path,this.extname):void 0}set stem(t){Et(t,"stem"),vt(t,"stem"),this.path=je.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new re(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function vt(e,t){if(e&&e.includes(je.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+je.sep+"`")}function Et(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function or(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function O0(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const R0=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};Object.setPrototypeOf(o,r);const l=Object.getOwnPropertyNames(i);for(const a of l){const u=Object.getOwnPropertyDescriptor(i,a);u&&Object.defineProperty(o,a,u)}return o},D0={}.hasOwnProperty;class un extends R0{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=S0()}copy(){const t=new un;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ct(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(_t("data",this.frozen),this.namespace[t]=n,this):D0.call(this.namespace,t)&&this.namespace[t]||void 0:t?(_t("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=et(t),r=this.parser||this.Parser;return Tt("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Tt("process",this.parser||this.Parser),It("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const a=et(t),u=r.parse(a);r.run(u,a,function(p,h,f){if(p||!h||!f)return c(p);const d=h,g=r.stringify(d,f);$0(g)?f.value=g:f.result=g,c(p,f)});function c(p,h){p||!h?l(p):o?o(h):n(void 0,h)}}}processSync(t){let n=!1,r;return this.freeze(),Tt("processSync",this.parser||this.Parser),It("processSync",this.compiler||this.Compiler),this.process(t,i),sr("processSync","process",n),r;function i(o,l){n=!0,Kn(o),r=l}}run(t,n,r){lr(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const u=et(n);i.run(t,u,c);function c(p,h,f){const d=h||t;p?a(p):l?l(d):r(void 0,d,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),sr("runSync","run",r),i;function o(l,a){Kn(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=et(n),i=this.compiler||this.Compiler;return It("stringify",i),lr(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(_t("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[p,...h]=c;u(p,h)}else l(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function l(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=Ct(!0,i.settings,c.settings))}function a(c){let p=-1;if(c!=null)if(Array.isArray(c))for(;++p<c.length;){const h=c[p];o(h)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,p){let h=-1,f=-1;for(;++h<r.length;)if(r[h][0]===c){f=h;break}if(f===-1)r.push([c,...p]);else if(p.length>0){let[d,...g]=p;const k=r[f][1];Nt(k)&&Nt(d)&&(d=Ct(!0,k,d)),r[f]=[c,d,...g]}}}}const F0=new un().freeze();function Tt(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function It(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function _t(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function lr(e){if(!Nt(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function sr(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function et(e){return N0(e)?e:new di(e)}function N0(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function $0(e){return typeof e=="string"||H0(e)}function H0(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const V0="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",ar=[],ur={allowDangerousHtml:!0},U0=/^(https?|ircs?|mailto|xmpp)$/i,G0=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Y0(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",i=e.className,o=e.components,l=e.disallowedElements,a=e.rehypePlugins||ar,u=e.remarkPlugins||ar,c=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ur}:ur,p=e.skipHtml,h=e.unwrapDisallowed,f=e.urlTransform||q0,d=F0().use(Tp).use(u).use(j0,c).use(a),g=new di;typeof r=="string"&&(g.value=r);for(const b of G0)Object.hasOwn(e,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+V0+b.id,void 0);const k=d.parse(g);let T=d.runSync(k,g);return i&&(T={type:"element",tagName:"div",properties:{className:i},children:T.type==="root"?T.children:[T]}),pi(T,S),lu(T,{Fragment:s.Fragment,components:o,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function S(b,E,L){if(b.type==="raw"&&L&&typeof E=="number")return p?L.children.splice(E,1):L.children[E]={type:"text",value:b.value},E;if(b.type==="element"){let B;for(B in kt)if(Object.hasOwn(kt,B)&&Object.hasOwn(b.properties,B)){const v=b.properties[B],D=kt[B];(D===null||D.includes(b.tagName))&&(b.properties[B]=f(String(v||""),B,b))}}if(b.type==="element"){let B=t?!t.includes(b.tagName):l?l.includes(b.tagName):!1;if(!B&&n&&typeof E=="number"&&(B=!n(b,E,L)),B&&L&&typeof E=="number")return h&&b.children?L.children.splice(E,1,...b.children):L.children.splice(E,1),E}}}function q0(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t<0||i>-1&&t>i||n>-1&&t>n||r>-1&&t>r||U0.test(e.slice(0,t))?e:""}const W0=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"brand_awareness",children:[s.jsx("mask",{id:"mask0_3696_4540",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_3696_4540)",children:s.jsx("path",{id:"brand_awareness_2",d:"M15.577 10.625H13.8142C13.6368 10.625 13.4883 10.5652 13.3687 10.4455C13.249 10.3259 13.1892 10.1774 13.1892 10C13.1892 9.82269 13.249 9.67419 13.3687 9.55454C13.4883 9.43489 13.6368 9.37506 13.8142 9.37506H15.577C15.7543 9.37506 15.9028 9.43489 16.0225 9.55454C16.1421 9.67419 16.202 9.82269 16.202 10C16.202 10.1774 16.1421 10.3259 16.0225 10.4455C15.9028 10.5652 15.7543 10.625 15.577 10.625ZM12.1106 13.9279C12.2175 13.7816 12.354 13.6972 12.5201 13.6747C12.6862 13.6523 12.8425 13.6945 12.9888 13.8013L14.3943 14.8574C14.5406 14.9642 14.625 15.1007 14.6475 15.2669C14.6699 15.433 14.6277 15.5892 14.5209 15.7356C14.4141 15.882 14.2776 15.9664 14.1114 15.9888C13.9453 16.0112 13.7891 15.969 13.6427 15.8622L12.2372 14.8061C12.0909 14.6993 12.0065 14.5628 11.9841 14.3967C11.9616 14.2305 12.0038 14.0743 12.1106 13.9279ZM14.3622 5.1106L12.9568 6.16671C12.8104 6.27354 12.6542 6.31574 12.488 6.29331C12.3219 6.27087 12.1854 6.18646 12.0786 6.0401C11.9718 5.89374 11.9296 5.7375 11.952 5.57137C11.9744 5.40525 12.0588 5.26876 12.2052 5.16192L13.6106 4.10583C13.757 3.999 13.9133 3.9568 14.0794 3.97923C14.2455 4.00166 14.382 4.08606 14.4888 4.23244C14.5957 4.3788 14.6379 4.53504 14.6154 4.70116C14.593 4.86729 14.5086 5.00377 14.3622 5.1106ZM6.05778 12.0834H3.71805C3.5033 12.0834 3.32408 12.0115 3.18039 11.8678C3.03669 11.7241 2.96484 11.5449 2.96484 11.3301V8.66994C2.96484 8.4552 3.03669 8.27599 3.18039 8.13229C3.32408 7.98858 3.5033 7.91673 3.71805 7.91673H6.05778L8.55134 5.42317C8.75114 5.22339 8.9811 5.17771 9.24124 5.28614C9.50138 5.39459 9.63145 5.5909 9.63145 5.87508V14.125C9.63145 14.4092 9.50138 14.6055 9.24124 14.7139C8.9811 14.8224 8.75114 14.7767 8.55134 14.5769L6.05778 12.0834Z",fill:"currentColor"})})]})}),Q0=({trend:e,onClose:t,selectTrending:n})=>{var g,k;const[r,i]=A.useState(!1),{close:o}=At("briefDescription"),{currentPlayingAudio:l,setCurrentPlayingAudio:a}=pe(T=>T),u=A.useRef(null),c=()=>n(e.name),p=A.useCallback(()=>{t(),o()},[t,o]),h=()=>{u.current&&(r?u.current.pause():u.current.play(),i(!r))},f=()=>{var S,b,E;const T=!((S=l==null?void 0:l.current)!=null&&S.paused);T&&((b=l==null?void 0:l.current)==null||b.pause(),a(null)),(((E=l==null?void 0:l.current)==null?void 0:E.src)!==e.audio_EN||!T)&&h()};A.useEffect(()=>{const T=u.current,S=()=>i(!1);return T&&T.addEventListener("ended",S),window.addEventListener("keydown",p),()=>{T&&T.removeEventListener("ended",S),window.removeEventListener("keydown",p)}},[p]);const d=((g=l==null?void 0:l.current)==null?void 0:g.src)===e.audio_EN&&!((k=l==null?void 0:l.current)!=null&&k.paused)||r;return s.jsxs(ko,{id:"briefDescription",kind:"regular",noWrap:!0,onClose:p,preventOutsideClose:!0,children:[e.audio_EN?s.jsxs(s.Fragment,{children:[s.jsxs(eh,{children:[s.jsx(cr,{className:Ie("default",{play:d}),onClick:f,size:"small",startIcon:d?s.jsx(ut,{}):s.jsx(W0,{}),children:d?"Pause":"Listen"}),s.jsx(cr,{className:"default",onClick:c,size:"small",startIcon:s.jsx(Bi,{}),children:"Learn More"})]}),s.jsx(J0,{ref:u,src:e.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null,s.jsxs(y,{mt:75,children:[s.jsx(K0,{children:e.tldr_topic??e.name}),s.jsx(Z0,{children:s.jsx(y,{children:s.jsx(X0,{children:e.tldr&&s.jsx(Y0,{children:e.tldr})})})})]})]})},Z0=j.div`
  max-height: 310px;
  overflow-y: auto;
  margin: 8px 0;
  padding: 0 20px;
`,X0=j(J)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,K0=j(J)`
  font-weight: 600;
  font-size: 20px;
  padding: 0 20px;
`,J0=j.audio`
  display: none;
`,cr=j(we)`
  && {
    &.default {
      font-size: 13px;
      font-weight: 500;
      font-family: Barlow;
      padding: 12px, 16px, 12px, 10px;

      &.play {
        color: ${w.BG3};
        background-color: ${w.white};
      }
    }
  }
`,eh=j(y)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${w.BG3};
  gap: 10px;
`,th=["Drivechain","Ordinals","L402","Nostr","AI"],nh=({onSubmit:e})=>{var V;const{open:t}=At("addContent"),[n,r]=A.useState(!1),[i,o]=A.useState(!1),[l,a]=A.useState(null),u=A.useRef(null),[c,p]=A.useState(0),[h,f]=A.useState(!1),{currentPlayingAudio:d,setCurrentPlayingAudio:g}=pe(_=>_),{open:k}=At("briefDescription"),{trendingTopics:T,setTrendingTopics:S}=fe(_=>_),{setValue:b}=fr(),E=A.useCallback(async()=>{r(!0),o(!1),p(0),f(!1),g(null);try{const _=await Ai();_.length&&Array.isArray(_)&&S(_)}catch{S(th.map(z=>({name:z,count:0})))}finally{r(!1)}},[g,S]);A.useEffect(()=>{T.length||E()},[E,T.length]),A.useEffect(()=>{const _=setTimeout(()=>{o(!0)},5e3);return()=>clearTimeout(_)},[o,n]);const L=_=>{b("search",_),e==null||e()},B=(_,z)=>{_.stopPropagation(),_.currentTarget.blur(),z!=null&&z.tldr&&(a(z),k())},v=()=>{a(null)},D=_=>{_.stopPropagation(),_.currentTarget.blur(),f(!h),g(u)};A.useEffect(()=>{var _,z;h?(_=u.current)==null||_.play():(z=u.current)==null||z.pause()},[c,h]),A.useEffect(()=>{d||f(!1)},[d]);const G=()=>{p(_=>{var H,q;let z=(_+1)%T.length;for(;z!==_&&!((H=T[z])!=null&&H.audio_EN);)z=(z+1)%T.length;return z===_?(f(!1),z):((q=u.current)==null||q.load(),z===0&&(f(!1),p(0)),z)}),g(u)},$=n?"Loading":"No new trending topics in the last 24 hours";return s.jsxs(ih,{"data-testid":"trending-component",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Trending Topics"}),s.jsx("span",{className:"heading__icon",children:n?s.jsx(Ut,{color:w.white,size:16}):s.jsx(s.Fragment,{children:i?s.jsx(lh,{onClick:E,size:"small",startIcon:s.jsx(wa,{})}):s.jsx(ka,{})})})]}),jo(T)?s.jsxs("div",{children:[s.jsx(we,{onClick:_=>D(_),startIcon:h?s.jsx(ut,{}):s.jsx(Vt,{}),children:h?"Pause":"Play All"}),s.jsx(uh,{ref:u,onEnded:G,src:(V=T[c])==null?void 0:V.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null]}),T.length===0?s.jsxs("div",{className:"trending-empty",children:[s.jsx(oh,{children:$}),s.jsx(we,{color:"secondary",disabled:n,onClick:t,size:"medium",startIcon:s.jsx(wo,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):s.jsx("ul",{className:"list",children:T.map((_,z)=>s.jsxs(y,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>L(_.name),children:[s.jsxs(rh,{children:[s.jsx(ah,{children:s.jsx(ya,{})}),s.jsx("span",{className:"tldr",children:Co(_)})]}),_.tldr&&s.jsx(sh,{className:Ie({isPlaying:c===z&&h}),onClick:H=>B(H,_),children:"TLDR"})]},_.name))})]}),l&&s.jsx(Q0,{onClose:v,selectTrending:L,trend:l})]})},rh=j.div`
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
`,ih=j(y)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
    display: flex;
    align-items: center;
    color: ${w.GRAY6};
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
    color: ${w.GRAY6};
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${w.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${w.SECONDARY_BLUE};
      }
      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${w.PRIMARY_BLUE};
      }
    }
  }
`,oh=j.p`
  color: ${w.GRAY6};
  margin-bottom: 20px;
`,lh=j(we)`
  && {
    min-width: 28px;
    width: 28px;
    padding: 0;
    height: 28px;
    .MuiButton-startIcon {
      color: ${w.white};
      margin: auto;
      display: flex;
      align-items: center;
    }
  }
`,sh=j(we)`
  && {
    &.isPlaying {
      font-weight: 700;
      color: ${w.BG1};
      background-color: ${w.white};
    }
  }
`,ah=j.span`
  justify-content: center;
  align-items: center;
  color: ${w.GRAY6};
  margin-right: 4px;
`,uh=j.audio`
  height: 0;
  width: 0;
`,ch=390,ph=A.forwardRef(({onSubmit:e,subViewOpen:t},n)=>{const{isFetching:r,setTeachMe:i,setSidebarFilter:o}=fe(b=>b),l=pr(),{setSidebarOpen:a,currentSearch:u,clearSearch:c,searchFormValue:p}=pe(b=>b),[h]=Pi(b=>[b.trendingTopicsFeatureFlag]),{setValue:f,watch:d}=fr(),g=A.useRef(null),[k,T]=A.useState(!1);A.useEffect(()=>{f("search",p)},[f,p]),A.useEffect(()=>{const b=g.current;if(!b)return;const E=()=>{T((b==null?void 0:b.scrollTop)>0)};b.addEventListener("scroll",E)},[]);const S=d("search");return s.jsxs(fh,{ref:n,id:"sidebar-wrapper",children:[s.jsx(kh,{}),s.jsxs(fi,{className:Ie({"has-shadow":k}),children:[s.jsxs(xh,{children:[s.jsx(ro,{onSubmit:e}),s.jsx(gh,{"data-testid":"search_action_icon",onClick:()=>{if(u){f("search",""),c(),o("all");return}S.trim()!==""&&(e==null||e())},children:r?s.jsx(Ut,{color:w.SECONDARY_BLUE,"data-testid":"loader",size:"20"}):s.jsx(s.Fragment,{children:u!=null&&u.trim()?s.jsx(Mi,{}):s.jsx(Oi,{})})})]}),u&&s.jsx(mh,{children:r?s.jsx(Po,{}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"left",children:[s.jsx("span",{className:"count",children:l.length}),s.jsx("span",{className:"label",children:" results"})]}),s.jsx("div",{className:"right",style:{alignItems:"center"},children:s.jsx(To,{})})]})})]}),!t&&s.jsx(yh,{onClick:()=>{a(!1),i(!1)},children:s.jsx(Cr,{})}),s.jsxs(wh,{ref:g,children:[!u&&h&&s.jsx(bh,{children:s.jsx(nh,{onSubmit:e})}),s.jsx(y,{children:r?s.jsx(al,{}):s.jsx(ol,{isSearchResult:!!u})})]})]})}),hh=["topic","person","guest","event","organization","place","project","software"],dh=({onSubmit:e})=>{const{sidebarIsOpen:t}=pe(o=>o),n=xe(),r=!!n&&t&&!hh.includes(n.node_type),{showTeachMe:i}=fe(o=>o);return s.jsxs(s.Fragment,{children:[s.jsx(Wt,{direction:"right",in:t,mountOnEnter:!0,unmountOnExit:!0,children:s.jsx(ph,{onSubmit:e,subViewOpen:r})}),s.jsx(pa,{open:r||!!i}),!t&&s.jsx(ma,{})]})},fh=j(y)(({theme:e})=>({position:"relative",background:w.BG1,height:"100vh",width:"100%",zIndex:30,[e.breakpoints.up("sm")]:{width:ch}})),fi=j(y).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:e})=>({padding:e.spacing(3.75,2),[e.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:w.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),xh=j(y).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,mh=j(y).attrs({direction:"row",justify:"space-between",align:"center"})`
  flex-grow: 1;
  color: ${w.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
  padding: 0 8px;
  .count {
    color: ${w.white};
  }

  .right {
    display: flex;
  }
`,gh=j(y).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${w.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${w.gray200}; */
  }

  ${fi} input:focus + & {
    color: ${w.primaryBlue};
  }
`,yh=j(y).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:w.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:w.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:w.BG1_HOVER},"&:active":{backgroundColor:w.BG1_PRESS,color:w.GRAY6}})),wh=j(y)(()=>({overflow:"auto",flex:1,width:"100%"})),kh=j(y)`
  height: 64px;
  background: ${w.BG2};
`,bh=j(y)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`;dh.displayName="Sidebar";export{ch as MENU_WIDTH,dh as SideBar};
