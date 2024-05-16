import{aL as Ci,r as z,f as j,h as y,i as fe,j as s,l as Ie,F as g,T as J,O as $t,k as pe,aM as cr,aN as Si,x as pr,o as vi,aO as Ei,P as Ti,a4 as xe,aP as fn,a2 as Ii,aQ as xn,ad as _i,B as At,aR as Ai,J as Pi}from"./index-8f0fe879.js";import{l as zi,m as mt,A as be,B as we,d as Li,I as hr,f as at,g as dr,n as ut,P as Ht,C as Vt,o as Bi,i as fr,b as Oi,S as Mi}from"./react-toastify.esm-1cafe5b3.js";import{C as xr}from"./CheckIcon-4784bd23.js";import{C as mr}from"./ChevronDownIcon-a8e3f884.js";import{C as Ri}from"./ChevronUpIcon-bbe9f38e.js";import{F as gr,a as Di,T as Fi}from"./Popover-10650de7.js";import{G as yr,L as Ut,B as Gt,H as Ni,M as $i,R as Hi,a as Vi,S as Ui,b as Gi,N as wr,C as Yi,D as Yt,c as br,d as qi,f as Wi,g as kr,e as Qi,P as Xi,h as jr,s as mn,V as Zi,F as Ki,E as Ji,i as eo,j as to,k as Cr,l as no}from"./ChevronRightIcon-feeb1d22.js";import{S as ro}from"./index-e80bb98f.js";import{f as rt,o as Sr,P as vr,n as io,X as oo,Y as lo,T as so,D as ao,S as qt,q as Er}from"./generateCategoricalChart-ac707456.js";import{T as Ne,I as uo,S as co,O as po}from"./index-76eed258.js";import{S as ho}from"./Skeleton-cc84d107.js";import{f as fo,c as xo,g as mo,h as go}from"./index.esm-eaea2432.js";import{I as yo}from"./InfoIcon-c57ee9a7.js";import{P as wo}from"./PlusIcon-43a942d8.js";import{B as bo}from"./index-d20a2c64.js";import"./useSlotProps-24d3a778.js";const ko=(e,t="down")=>{const n=Ci(),[r,i]=z.useState(!1),o=n.breakpoints[t](e).split("@media")[1].trim();return z.useEffect(()=>{const l=()=>{const{matches:a}=window.matchMedia(o);i(a)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[o]),r},jo=e=>e.filter(t=>t.tldr).length>=2&&e.some(t=>t.audio_EN);function Co(e){return e.tldr_topic??e.name}var it=globalThis&&globalThis.__assign||function(){return it=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},it.apply(this,arguments)},So=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},vo=zi("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function Eo(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?"#000000":r,o=e.speedMultiplier,l=o===void 0?1:o,a=e.cssOverride,u=a===void 0?{}:a,c=e.size,h=c===void 0?15:c,d=e.margin,f=d===void 0?2:d,p=So(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),w=it({display:"inherit"},u),b=function(_){return{display:"inline-block",backgroundColor:i,width:mt(h),height:mt(h),margin:mt(f),borderRadius:"100%",animation:"".concat(vo," ").concat(.7/l,"s ").concat(_%2?"0s":"".concat(.35/l,"s")," infinite linear"),animationFillMode:"both"}};return n?z.createElement("span",it({style:w},p),z.createElement("span",{style:b(1)}),z.createElement("span",{style:b(2)}),z.createElement("span",{style:b(3)})):null}const To=()=>{var d;const[e,t]=z.useState(null),{sidebarFilter:n,setSidebarFilter:r,sidebarFilterCounts:i}=fe(f=>f),o=n==="undefined"?"":n.toLowerCase(),l=((d=i.find(f=>f.name===o))==null?void 0:d.count)||0,a=f=>f?f.charAt(0).toUpperCase()+f.slice(1):"",u=f=>{t(f.currentTarget)},c=()=>{t(null)},h=f=>{r(f),c()};return s.jsxs("div",{children:[s.jsxs(Io,{onClick:u,children:[s.jsx("div",{className:"text",children:"Show"}),s.jsx("div",{className:"value","data-testid":"value",children:`${a(o)} (${l})`}),s.jsx("div",{className:"icon",children:e?s.jsx(Ri,{}):s.jsx(mr,{})})]}),s.jsx(Ao,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:c,open:!!e,transformOrigin:{vertical:"top",horizontal:"left"},children:s.jsx(gr,{children:i.filter(({name:f})=>f).map(({name:f,count:p})=>s.jsxs(_o,{className:Ie({active:f===n}),onClick:w=>{w.preventDefault(),h(f)},children:[s.jsx("span",{className:"icon",children:f===n?s.jsx(xr,{}):null}),s.jsx("span",{children:`${a(f)} (${p})`})]},f))})})]})},Io=j(g).attrs({direction:"row",align:"center"})`
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
`,_o=j(g).attrs({direction:"row",align:"center"})`
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
`,Ao=j(Di)`
  .MuiPaper-root {
    background: ${y.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${y.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,gt=[["Searching","Podcast Index"],["Searching","YouTube"],["Searching","Twitter Spaces"],["Finding","Transcripts"],["Loading","Audio Clips"],["Loading","Video Clips"],["Preparing","Results"]],Po=()=>{const[e,t]=z.useState(0);return z.useEffect(()=>{if(e===gt.length-1)return;const n=setTimeout(()=>t(r=>(r+1)%gt.length),2e3);return()=>clearTimeout(n)},[e]),s.jsx(zo,{direction:"column",children:gt.map((n,r)=>s.jsxs(g,{className:Ie("raw-wrapper",{show:e===r}),direction:"row",children:[s.jsx("div",{className:Ie("action"),children:n[0]}),s.jsx("div",{className:Ie("entity"),children:n[1]}),s.jsx("div",{children:s.jsx(Eo,{color:y.SECONDARY_BLUE,size:2})})]},n[1]))})},zo=j(g)`
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
`,Lo=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"browse_gallery",children:[s.jsx("mask",{id:"mask0_1360_27257",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1360_27257)",children:s.jsx("path",{id:"browse_gallery_2",d:"M11.8 15.8442L12.8442 14.8L9.74998 11.7026V7.25003H8.25003V12.2942L11.8 15.8442ZM18 19.9615V18.3C19.2333 17.7167 20.2083 16.8583 20.925 15.725C21.6417 14.5917 22 13.35 22 12C22 10.65 21.6417 9.40834 20.925 8.27501C20.2083 7.14167 19.2333 6.28334 18 5.70001V4.03851C19.6628 4.67184 20.9952 5.71318 21.9971 7.16253C22.999 8.61188 23.5 10.2244 23.5 12C23.5 13.7756 22.999 15.3881 21.9971 16.8375C20.9952 18.2868 19.6628 19.3282 18 19.9615ZM9.00055 20.5C7.8207 20.5 6.71539 20.2769 5.68463 19.8307C4.65386 19.3846 3.75514 18.7782 2.98848 18.0115C2.22181 17.2449 1.61541 16.3463 1.16927 15.3159C0.723092 14.2855 0.5 13.1804 0.5 12.0006C0.5 10.8207 0.723083 9.7154 1.16925 8.68463C1.6154 7.65386 2.2218 6.75515 2.98845 5.98848C3.75512 5.22183 4.65365 4.61543 5.68405 4.16928C6.71445 3.72311 7.81957 3.50003 8.99942 3.50003C10.1793 3.50003 11.2846 3.72311 12.3154 4.16928C13.3461 4.61543 14.2448 5.22183 15.0115 5.98848C15.7782 6.75515 16.3846 7.65368 16.8307 8.68408C17.2769 9.71448 17.5 10.8196 17.5 11.9995C17.5 13.1793 17.2769 14.2846 16.8307 15.3154C16.3846 16.3461 15.7782 17.2449 15.0115 18.0115C14.2448 18.7782 13.3463 19.3846 12.3159 19.8307C11.2855 20.2769 10.1804 20.5 9.00055 20.5ZM9 19C10.95 19 12.6042 18.3208 13.9625 16.9625C15.3208 15.6042 16 13.95 16 12C16 10.05 15.3208 8.39584 13.9625 7.03751C12.6042 5.67917 10.95 5.00001 9 5.00001C7.05 5.00001 5.39583 5.67917 4.0375 7.03751C2.67917 8.39584 2 10.05 2 12C2 13.95 2.67917 15.6042 4.0375 16.9625C5.39583 18.3208 7.05 19 9 19Z",fill:"currentColor"})})]})}),Bo=e=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("mask",{id:"mask0_2638_2680",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_2638_2680)",children:s.jsx("path",{d:"M9.99732 16C9.90858 16 9.82421 15.985 9.74419 15.9551C9.66418 15.9252 9.5909 15.8765 9.52435 15.8091L6.18835 12.4277C6.06278 12.3004 6 12.1406 6 11.9483C6 11.7559 6.06278 11.5961 6.18835 11.4689C6.32145 11.3315 6.48099 11.2648 6.66697 11.2686C6.85295 11.2724 7.00873 11.3392 7.13429 11.4689L9.32114 13.674V4.68539C9.32114 4.49306 9.3864 4.33074 9.51692 4.19845C9.64744 4.06615 9.80758 4 9.99732 4C10.1871 4 10.3472 4.06615 10.4777 4.19845C10.6082 4.33074 10.6735 4.49306 10.6735 4.68539V13.674L12.849 11.4689C12.9845 11.3315 13.1447 11.2629 13.3294 11.2629C13.5143 11.2629 13.6744 11.3315 13.8099 11.4689C13.9378 11.6062 14.0012 11.7685 14 11.9558C13.9988 12.1431 13.9354 12.3004 13.8099 12.4277L10.4738 15.8091C10.4073 15.8765 10.3334 15.9252 10.2522 15.9551C10.171 15.985 10.0861 16 9.99732 16Z",fill:"currentColor"})})]}),Oo=j(g)`
  overflow-y: auto;
  overflow-x: hidden;
  background: ${y.body};
`,Mo=({imageUrl:e,name:t})=>s.jsxs(g,{align:"center",direction:"row",children:[e&&s.jsx(Ro,{children:s.jsx(be,{rounded:!0,size:64,src:e||"",type:"image"})}),t&&s.jsx(Do,{children:t})]}),Ro=j(g)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Do=j(g)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Fo=({text:e,type:t,sourceLink:n})=>s.jsxs(g,{direction:"column",children:[s.jsx(g,{align:"center",direction:"row",children:s.jsx(Ne,{type:t})}),s.jsx(Pt,{"data-testid":"episode-description",children:e}),s.jsx(g,{align:"center",direction:"row",justify:"flex-start",children:n&&s.jsxs(No,{href:n,onClick:r=>r.stopPropagation(),target:"_blank",children:[s.jsx(yr,{}),s.jsx($o,{children:n})]})})]}),No=j.a`
  color: ${y.GRAY6};
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
  color: ${y.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Ho=({title:e,imageUrl:t,name:n})=>s.jsxs(g,{align:"center",direction:"row",children:[s.jsx(Vo,{children:s.jsx(be,{rounded:!0,size:64,src:t||"",type:"person"})}),(e||n)&&s.jsx(Uo,{children:e||n})]}),Vo=j(g)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Uo=j(g)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Go=({text:e,imageUrl:t,date:n,twitterHandle:r,name:i,verified:o})=>s.jsxs(g,{direction:"column",children:[s.jsxs(g,{align:"center",direction:"row",pr:16,children:[s.jsx(Yo,{children:s.jsx(be,{rounded:!0,size:27,src:t||"",type:"person"})}),s.jsxs(g,{children:[s.jsxs(qo,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),r&&s.jsxs(Wo,{children:["@",r]})]})]}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Qo,{"data-testid":"episode-description",children:e}),s.jsx(g,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!n&&s.jsx(ct,{children:$t.unix(n).fromNow()})})]})]}),Yo=j(g)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,qo=j(g)`
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
`,Wo=j(g)`
  color: ${y.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,Qo=j(g)`
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
`,Xo=j(g).attrs({direction:"column"})`
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
`,Tr=({boostCount:e,date:t,episodeTitle:n,isSelectedView:r=!1,imageUrl:i,showTitle:o,type:l,text:a,name:u,sourceLink:c,verified:h=!1,twitterHandle:d,className:f="episode-wrapper",onClick:p})=>{const w=l==="show"?o:n,b=l==="show"?"":o,_=["tweet","person","guest","topic","document"],C=l==="youtube"?"video":"audio";return l?s.jsx(Xo,{className:f,onClick:p,children:_.includes(l)?s.jsxs(s.Fragment,{children:[l==="topic"&&s.jsxs(Zo,{children:[s.jsx(Ni,{}),s.jsx("p",{children:b})]}),["person","guest"].includes(l)&&s.jsx(Ho,{imageUrl:i,name:u||"",title:o||""}),["image"].includes(l)&&s.jsx(Mo,{imageUrl:c,name:u||""}),l==="tweet"&&s.jsx(Go,{date:t,imageUrl:i,name:u||"",text:a||"",twitterHandle:d,verified:h}),l==="document"&&s.jsx(Fo,{sourceLink:c||"",text:a||"",type:l})]}):s.jsxs(g,{align:"center",direction:"row",justify:"center",children:[!r&&s.jsx(g,{align:"center",pr:16,children:s.jsx(be,{size:80,src:i||`${C}_default.svg`,type:l||""})}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsxs(g,{align:"center",direction:"row",justify:"space-between",children:[s.jsx(g,{align:"center",direction:"row",children:l&&s.jsx(Ne,{type:l})}),l==="youtube"&&c?s.jsx(Jo,{href:`${c}${c.includes("?")?"&":"?"}open=system`,onClick:k=>k.stopPropagation(),target:"_blank",children:s.jsx(Ut,{})}):null]}),u&&s.jsx(Pt,{"data-testid":"episode-name",children:u}),s.jsx(Pt,{"data-testid":"episode-description",children:w}),s.jsxs(g,{align:"center",direction:"row",justify:"flex-start",children:[!!t&&s.jsx(ct,{children:$t.unix(t).fromNow()}),!!b&&s.jsx(Ko,{children:b}),!r&&e>0&&s.jsx(g,{style:{marginLeft:"auto"},children:s.jsx(Gt,{amt:e})})]})]})]})}):null},Pt=j(g)`
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
`,ct=j(J)`
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
`,Zo=j.div`
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
`,Jo=j.a`
  color: ${y.GRAY6};
  font-size: 16px;
  height: 16px;
`,el=({isSearchResult:e})=>{const t=z.useRef(null),n=e?80:10,{setSelectedNode:r,setSelectedTimestamp:i}=fe(C=>C),{currentSearch:o,setSidebarOpen:l,setRelevanceSelected:a}=pe(C=>C),[u,c]=z.useState(0),h=cr(),f=u*n+n,p=h&&h.length>0?h.length-1>f:!1,w=ko("sm","down"),b=z.useCallback(C=>{Si(C),i(C),a(!0),r(C),w&&l(!1)},[r,a,l,i,w]),_=z.useMemo(()=>{if(h){const C=[...h].sort((k,v)=>(v.date||0)-(k.date||0));return o&&C.sort((k,v)=>{const O=k.node_type==="topic"&&k.name.toLowerCase()===o.toLowerCase()?1:0;return(v.node_type==="topic"&&v.name.toLowerCase()===o.toLowerCase()?1:0)-O}),C.slice(0,f)}return[]},[h,o,f]);return s.jsx(s.Fragment,{children:s.jsxs(Oo,{ref:t,id:"search-result-list",shrink:1,children:[(_??[]).map((C,k)=>{const{image_url:v,date:O,boost:L,type:E,episode_title:D,show_title:G,node_type:$,text:V,source_link:I,link:P,name:H,verified:q=!1,twitter_handle:F}=C||{};return s.jsx(Tr,{boostCount:L||0,date:O||0,episodeTitle:rt(D),imageUrl:v||"",link:P,name:H||"",onClick:()=>{b(C)},showTitle:rt(G),sourceLink:I,text:V||"",twitterHandle:F,type:$||E,verified:q},k.toString())}),s.jsx(nl,{align:"center",background:"BG1",direction:"row",justify:"center",children:p&&s.jsx(we,{onClick:()=>{p&&c(u+1)},size:"medium",children:"Load More"})})]})})},tl=z.memo(el),nl=j(g)`
  flex: 0 0 86px;
`,rl=({isSearchResult:e})=>{const{nodeCount:t,setNodeCount:n,setBudget:r}=pr(l=>l),{fetchData:i}=fe(l=>l),o=async()=>{t<1||(await i(r,{skip_cache:"true"}),n("CLEAR"))};return s.jsxs(ll,{children:[!e&&s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Latest"}),s.jsx("span",{className:"heading__icon",children:s.jsx(Lo,{})})]}),t?s.jsx("div",{className:"button_container",children:s.jsx(il,{className:"button","data-testid":"see_latest_button",onClick:o,startIcon:s.jsx(Bo,{}),children:`See Latest (${t})`})}):null]}),s.jsx(tl,{isSearchResult:e})]})},il=j(we)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${y.GRAY6};
    }
  }
`,ol=z.memo(rl),ll=j(g)`
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
`,sl=j(g).attrs({direction:"column"})`
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
`,Ze=j(ho)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,al=()=>s.jsx(s.Fragment,{children:Array(7).fill(null).map((e,t)=>s.jsx(sl,{children:s.jsxs(g,{direction:"row",children:[s.jsx(g,{align:"center",pr:16,children:s.jsx(Ze,{animation:"wave",height:64,variant:"rectangular",width:64})}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Ze,{height:10,variant:"rectangular",width:56}),s.jsx(Ze,{className:"title",height:10,variant:"rectangular",width:262}),s.jsx(Ze,{height:10,variant:"rectangular",width:149})]})]})},t))});j(g)`
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
`;const ul=j(J)`
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
    background: ${y.GRAY6};
  }
`;const cl=48,pl=8,hl={PaperProps:{style:{maxHeight:cl*4.5+pl,width:250}}},dl=["Beginner","Intermediate","Advanced","Expert"],fl=()=>{const e=fe(k=>k.data),[t,n]=z.useState(""),[r,i]=z.useState("Beginner"),o=pe(k=>k.currentSearch),l=Li(),[a]=pr(k=>[k.setBudget]),[u,c,h,d,f]=Sr(k=>[k.askedQuestions,k.askedQuestionsAnswers,k.setAskedQuestion,k.setAskedQuestionAnswer,k.hasQuestionInProgress]),p=z.useCallback(k=>{d(k.answer)},[d]);z.useEffect(()=>{l&&p&&l.on("askquestionhook",p)},[p,l]);const w=async()=>{t&&(h(t),n(""));try{const k=e==null?void 0:e.nodes.filter(L=>L.text),v=k==null?void 0:k.slice(0,5),O=(v!=null&&v.length?v.map(L=>L.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,L=>`\\${L}`);o&&(await vi.enable(),await Ei({expertise_level:r,question_text:t,search_term:o,transcripts:O},a),await Ti(a))}catch(k){console.error(k)}},b=r&&t.trim()&&!f,_=k=>{i(k.target.value)},C=async k=>{if(f){k.preventDefault();return}k.keyCode===13&&k.shiftKey===!1&&b&&(k.preventDefault(),w())};return s.jsxs(xl,{children:[s.jsx(g,{children:s.jsx(g,{children:s.jsxs(gr,{component:"div",children:[s.jsx(gl,{id:"select-label",size:"small",children:"Expertise level"}),s.jsx(yl,{id:"demo-multiple-name",input:s.jsx(po,{label:"Expertise level"}),labelId:"select-label",MenuProps:hl,onChange:_,size:"small",value:r,children:dl.map(k=>s.jsx($i,{component:"li",value:k,children:k},k))})]})})}),s.jsx(kl,{children:u==null?void 0:u.map((k,v)=>s.jsxs(g,{className:"response",py:12,children:[s.jsx(J,{kind:"medium",children:k}),s.jsx(g,{py:12,children:(c==null?void 0:c[v])!==void 0?s.jsx(J,{color:"unreadMsgText",children:c[v]}):s.jsxs(g,{align:"center",py:12,children:[s.jsx(g,{align:"center",py:12,children:s.jsx(vr,{color:y.white})}),s.jsx(g,{align:"center",py:12,children:s.jsx(J,{children:"Generating response"})})]})})]},k))}),s.jsxs(wl,{onKeyDown:C,py:12,tabIndex:-1,children:[s.jsx(ml,{disabled:f,onChange:k=>n(k.target.value),placeholder:"Enter your question",value:t}),s.jsx(bl,{children:s.jsx(fo,{color:b?y.white:y.gray300,size:"18"})})]})]})},xl=j.div`
  margin-top: 20px;
`,ml=j(Fi)`
  background: ${y.inputBg1};
  max-width: 100%;
  color: ${y.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,gl=j(uo)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${y.secondaryText4};
  }
`,yl=j(co)`
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
`,wl=j(g)`
  position: relative;
`,bl=j(g)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,kl=j(g)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${y.divider2};
  }
`,gn=({text:e})=>s.jsxs(g,{align:"center",justify:"center",py:12,children:[s.jsx(g,{align:"center",py:12,children:s.jsx(vr,{color:y.white})}),s.jsx(g,{align:"center",py:12,children:s.jsx(J,{children:e})})]}),jl=()=>{const[e,t,n,r]=Sr(o=>[o.teachMeAnswer,o.hasTeachingInProgress,o.instgraphAnswser,o.hasInstagraphInProgress]),i=!r&&!!(n!=null&&n.edges)&&!!(n!=null&&n.nodes);return s.jsxs(s.Fragment,{children:[i?s.jsx(Hi,{edges:n==null?void 0:n.edges,nodes:n==null?void 0:n.nodes}):s.jsx(gn,{text:"Generating instagraph"}),t?s.jsx(gn,{text:"Generating tutorial"}):s.jsxs(s.Fragment,{children:[s.jsx(Cl,{children:s.jsx(J,{children:e})}),s.jsx(fl,{})]})]})};j(we)``;const Cl=j(g)`
  padding-left: 10px;
  padding-right: 10px;
`,Sl=({cx:e,cy:t})=>s.jsx(ao,{cx:e,cy:t,fill:y.blueTextAccent,r:2}),vl=()=>{const e=xe(),t=[...(e==null?void 0:e.data)||[]].sort((i,o)=>(i.year||0)-(o.year||0)),n=t.map(i=>i.year).filter(i=>i),r=t.map(i=>i.rate).filter(i=>i);return s.jsx(El,{direction:"column",px:24,py:16,children:s.jsx(Vi,{height:"100%",width:"100%",children:s.jsxs(Ui,{margin:{bottom:20,left:20,right:20,top:20},children:[s.jsx(io,{stroke:"#f5f5f5"}),s.jsx(oo,{dataKey:"year",domain:[Math.min(...n),Math.max(...n)],label:{fill:y.white,fontSize:"12px",offset:-10,position:"insideBottom",value:e.x_axis_name},name:"X",tick:{fill:y.white,fontSize:"8px"},type:"number"}),s.jsx(lo,{color:"#000",dataKey:"rate",domain:[Math.min(...r),Math.max(...r)],label:{angle:-90,fill:y.white,fontSize:"12px",offset:0,position:"insideLeft",value:e.y_axis_name},name:"Y",tick:{fill:y.white,fontSize:"8px"},type:"number"}),s.jsx(so,{cursor:{strokeDasharray:"3 3"}}),s.jsx(Gi,{data:t,fill:y.blueTextAccent,line:!0,name:"A scatter",shape:s.jsx(Sl,{})})]})})})},El=j(g)`
  width: 100%;
  height: 100%;
`;function pt(e,t){if(!(t!=null&&t.trim()))return e;const n=new RegExp(`(${t})`,"gi"),r=e.split(n);return s.jsx(s.Fragment,{children:r.map((i,o)=>n.test(i)?s.jsx(Tl,{children:i},o):i)})}const Tl=j.span`
  background-color: rgba(0, 123, 255, 0.4);
  padding: 2;
  margin: 0;
  border-radius: 3px;
  color: inherit;
`,Il=({stateless:e,node:t,searchTerm:n})=>s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Al,{children:e&&s.jsxs(_l,{children:[s.jsx("div",{className:"icon",children:s.jsx(wr,{})}),s.jsx("div",{className:"title",children:"Description"})]})}),s.jsx(J,{children:t!=null&&t.description?pt(t.description,n):"..."})]}),_l=j(g).attrs({direction:"row",align:"center"})`
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
`,Al=j(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Pl=j.span`
  color: ${y.white};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  text-align: right;

  &:hover {
    color: ${y.GRAY3};
  }
`,zl=({stateless:e,node:t})=>{var w;const[n,r]=pe(b=>[b.transcriptIsOpen,b.setTranscriptOpen]),[i,o]=z.useState(!1),[l,a]=z.useState(""),[u,c]=z.useState(!1);if(!e&&!n)return null;const h=async()=>{try{const b=await fn(t==null?void 0:t.ref_id);a(b.data.text)}catch(b){console.error("Error fetching full transcript",b)}},d=async()=>{if(l===""){const b=await fn(t==null?void 0:t.ref_id);p(b.data.text)}else p(l);setTimeout(()=>{o(!1)},2e3)},f=async()=>{u?c(!1):(await h(),c(!0))},p=b=>{b!==void 0&&(navigator.clipboard.writeText(b),o(!0))};return s.jsxs(g,{grow:1,shrink:1,children:[s.jsxs(Bl,{children:[e&&s.jsxs(Ll,{children:[s.jsx("div",{className:"icon",children:s.jsx(wr,{})}),s.jsx("div",{className:"title",children:"Transcript"})]}),t!=null&&t.text?s.jsx(s.Fragment,{children:i?s.jsxs(Rl,{align:"center",direction:"row",justify:"flex-start",children:[s.jsx("div",{className:"icon",children:s.jsx(xr,{})}),s.jsx("div",{className:"text",children:"Copied"})]}):s.jsx(we,{endIcon:s.jsx(Yi,{}),onPointerDown:()=>d(),size:"small",variant:"outlined",children:"Copy"})}):s.jsx("div",{}),!e&&s.jsx(Ol,{onClick:()=>{r(!1)},children:s.jsx(xo,{fontSize:35})})]}),s.jsxs(Ml,{children:[u?l:`${(w=t==null?void 0:t.text)==null?void 0:w.substring(0,100)}`,s.jsxs(Pl,{onClick:f,children:["... ",u?"show less":"more"]})]})]})},Ll=j(g).attrs({direction:"row",align:"center"})`
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
`,Bl=j(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Ol=j(g).attrs({})`
  color: ${y.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${y.lightBlue500};
  }
`,Ml=j(g)`
  color: ${y.white};
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Rl=j(g)`
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
`,Ir=({node:e})=>{const t=fe(b=>b.selectedNode),n=pe(b=>b.currentSearch),{link:r,image_url:i,date:o,boost:l,node_type:a,type:u,id:c,show_title:h,episode_title:d,ref_id:f}=e||t||{},[p,w]=z.useState(l||0);return z.useEffect(()=>{w(l??0)},[l]),!e&&!t?null:s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(Dl,{children:[s.jsx(Nl,{boostCount:p||0,date:o||0,episodeTitle:rt(d),imageUrl:i,isSelectedView:!0,link:r,onClick:()=>null,showTitle:h,type:a||u}),s.jsx(yt,{}),s.jsxs(Fl,{children:[s.jsx(Gt,{amt:p}),s.jsx(br,{content:e||t,count:p,refId:f,updateCount:w})]}),s.jsx(yt,{}),s.jsx(yn,{children:s.jsx(Il,{node:e||t,searchTerm:n,stateless:!0})}),((t==null?void 0:t.text)||(e==null?void 0:e.text))&&s.jsxs(s.Fragment,{children:[s.jsx(yt,{}),s.jsx(yn,{children:s.jsx(zl,{node:e||t,stateless:!0},c)})]})]})})},Dl=j(g)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,Fl=j(g)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,yn=j(g)`
  padding: 18px 18px 18px;
`,Nl=j(Tr)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,yt=j(Yt)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,$l=j(g)`
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
`,Hl=({selectedNodeShow:e})=>{const[t,n]=fe(o=>[o.selectedNode,o.setSelectedNode]),{type:r}=t||{},i=pe(o=>o.currentSearch);return s.jsxs($l,{p:20,children:[s.jsx(g,{align:"flex-start",children:r&&s.jsx(Ne,{type:r})}),s.jsx(g,{direction:"row",mb:22,mt:22,children:s.jsx(g,{grow:1,shrink:1,children:s.jsx(J,{className:"episode-title",kind:"heading",children:pt((t==null?void 0:t.episode_title)||"Unknown",i)})})}),e?s.jsxs(g,{className:"show",direction:"row",onClick:()=>n(e),children:[s.jsx(be,{size:16,src:(e==null?void 0:e.image_url)||"",type:"show"}),s.jsx(J,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:e==null?void 0:e.show_title})]}):null]})},Vl="Flow 1",Ul=0,Gl=12,Yl=15,ql={g:"LottieFiles Figma v45"},Wl=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],Ql="5.7.0",Xl=60,Zl=57.6,Kl=0,Jl=[],es={nm:Vl,ddd:Ul,h:Gl,w:Yl,meta:ql,layers:Wl,v:Ql,fr:Xl,op:Zl,ip:Kl,assets:Jl},ts=()=>{const e=z.useRef(null);return z.useEffect(()=>{const t=document.getElementById("lottie-timestamp-equalizer");return t&&(e.current=Ii.loadAnimation({container:t,animationData:es,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),s.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},ns=j(g).attrs(()=>({direction:"row"}))`
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
`,rs=({onClick:e,timestamp:t,isSelected:n,setOpenClip:r})=>{const i=n?"blueTextAccent":"placeholderText";return n?(mo,y[i]):(go,y[i]),s.jsxs(ns,{align:"center","data-testid":"wrapper",direction:"row",isSelected:n,justify:"flex-start",onClick:e,px:20,py:20,children:[s.jsxs("div",{children:[s.jsx(hr,{className:"play-pause",children:n?s.jsx(ts,{}):s.jsx(qi,{})}),!1]}),s.jsxs(is,{align:"flex-start",direction:"column",justify:"center",children:[t.timestamp&&s.jsx("span",{className:"timestamp",children:Wi(t.timestamp)}),s.jsx("span",{className:"title",children:rt(t.show_title)})]}),s.jsx("div",{className:"info",children:s.jsx(g,{"data-testid":"info-icon-wrapper",onClick:()=>r(t),pt:4,children:s.jsx(yo,{})})})]})},is=j(g)`
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
`,os=j(g)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,ls=()=>{const e=xe(),t=Er(),[n,r]=z.useState(null),[i,o]=z.useState(null),[l,a,u,c]=at(p=>[p.playingNode,p.setPlayingNodeLink,p.setPlayingTime,p.setIsSeeking]),h=z.useMemo(()=>kr((t==null?void 0:t.nodes)||[],e),[t==null?void 0:t.nodes,e]),d=z.useMemo(()=>t==null?void 0:t.nodes.find(p=>p.node_type==="show"&&p.show_title===(e==null?void 0:e.show_title)),[t==null?void 0:t.nodes,e]),f=z.useCallback(p=>{var b;const w=dr(((b=p==null?void 0:p.timestamp)==null?void 0:b.split("-")[0])||"00:00:01");(l&&p.link&&(l==null?void 0:l.link)!==p.link||(!l||(l==null?void 0:l.link)!==p.link)&&p.link!==void 0)&&(a(p.link),u(0),c(!0)),u(w),c(!0),o(p)},[l,a,c,o,u]);return z.useEffect(()=>{h!=null&&h.length&&!h.some(p=>p.ref_id===(i==null?void 0:i.ref_id))&&f(h[0])},[h,i,f]),e?s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(as,{children:[n&&s.jsx(us,{className:"slide-me",direction:"up",in:!!n,children:s.jsxs(ss,{children:[s.jsx(g,{className:"close-info",onClick:()=>r(null),children:s.jsx(mr,{})}),n&&s.jsx(Ir,{node:n})]})}),s.jsx(Hl,{selectedNodeShow:d}),!!(h!=null&&h.length)&&s.jsx(os,{children:s.jsx(g,{pb:20,children:h==null?void 0:h.map((p,w)=>s.jsx(rs,{isSelected:(i==null?void 0:i.ref_id)===p.ref_id,onClick:()=>f(p),setOpenClip:r,timestamp:p},`${p.episode_title}_${w}`))})})]})}):null},ss=j(g)`
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
`,as=j(g)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,us=j(qt)`
  && {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 16px;
    overflow: hidden;
    background: ${y.BG1};
    z-index: 1;
  }
`,cs=()=>{const e=xe(),t=e==null?void 0:e.name;return s.jsxs(g,{direction:"column",px:24,py:16,children:[s.jsx(be,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.source_link)||"",type:"image"}),s.jsx(g,{py:20,children:s.jsx(J,{color:"primaryText1",kind:"bigHeading",children:t})})]})},ps=()=>{const{sender_pic:e,sender_alias:t,date:n,message_content:r}=xe()||{};return s.jsxs(g,{direction:"row",children:[s.jsx(fs,{src:e}),s.jsxs(hs,{children:[s.jsxs(g,{align:"flex-end",className:"info",direction:"row",children:[t&&s.jsx("span",{className:"info__name",children:t}),n&&s.jsx("span",{className:"info__date",children:n})]}),r&&s.jsx(ds,{dangerouslySetInnerHTML:{__html:Qi(r)}})]})]})},hs=j(g)`
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
`,ds=j.div`
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
`,fs=j.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,xs=()=>{const e=xe(),t=(e==null?void 0:e.name)||(e==null?void 0:e.label);return s.jsxs(g,{direction:"row",px:24,py:16,children:[s.jsx(be,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.image_url)||"person_placeholder_img.png",type:"person"}),s.jsx(g,{p:20,children:s.jsx(J,{color:"primaryText1",kind:"bigHeading",children:t})})]})},ms=({node:e,onClick:t})=>{var i,o;const n=dr(e.timestamp||""),r=Math.ceil(n/60);return s.jsx(gs,{onClick:t,p:20,children:s.jsxs("div",{children:[s.jsxs(g,{align:"flex-start",direction:"row",justify:"flex-start",children:[s.jsx(g,{align:"center",children:s.jsx(be,{size:64,src:(e==null?void 0:e.image_url)||"",type:(e==null?void 0:e.node_type)||"episode"})}),s.jsxs("div",{className:"content",children:[s.jsxs(g,{align:"center",direction:"row",children:[s.jsx(Ne,{type:"episode"}),r>0&&s.jsxs("div",{className:"subtitle",children:[r," ",r===1?"min":"mins"]})]}),s.jsx(J,{className:"title",color:"primaryText1",kind:"regular",children:e.episode_title})]})]}),s.jsxs(g,{align:"center",direction:"row",justify:"flex-end",children:[s.jsxs(J,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((i=e==null?void 0:e.children)==null?void 0:i.length)||0," ",((o=e==null?void 0:e.children)==null?void 0:o.length)===1?"Clip":"Clips"]}),s.jsx(Xi,{style:{color:y.white}})]})]})})},gs=j(g).attrs({})`
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
`,ys=j(g)`
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
`,ws=j(g)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,bs=j(J)`
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
`,ks=j.div`
  max-height: calc(100vh - 340px);
  overflow-y: auto;
`,js=()=>{const[e,t]=fe(l=>[l.selectedNode,l.setSelectedNode]),n=Er(),[r,i]=z.useState([]),o=z.useMemo(()=>{var u;const l=new Set,a={};if((u=e==null?void 0:e.children)!=null&&u.length){e.children.forEach((h,d)=>{var w,b,_,C;const f=kr((n==null?void 0:n.nodes)||[],e)||[],p=n==null?void 0:n.nodes.find(k=>k.ref_id===h);if(p){p.timestamp=(w=f[0])==null?void 0:w.timestamp;const k=(C=(_=(b=f[d])==null?void 0:b.hosts)==null?void 0:_[0])==null?void 0:C.name;k&&l.add(k),a[h]=p,a[h]=p}});const c=Array.from(l);i(c)}return Object.values(a).filter(c=>c.node_type==="episode").sort((c,h)=>(h.weight||0)-(c.weight||0))},[n==null?void 0:n.nodes,e]);return s.jsxs(ys,{children:[s.jsx(ws,{children:s.jsxs(g,{direction:"row",children:[s.jsx(g,{pr:24,children:s.jsx(be,{size:80,src:(e==null?void 0:e.image_url)||"audio_default.svg",type:"show"})}),s.jsx(g,{direction:"column",children:s.jsxs(g,{direction:"column",grow:1,justify:"space-between",children:[s.jsxs(g,{align:"center",direction:"row",justify:"flex-start",children:[s.jsx(Ne,{type:"show"})," ",s.jsxs("div",{className:"subtitle",children:["by ",r.join(", ")||(e==null?void 0:e.show_title)]})]}),s.jsx(bs,{kind:"bigHeading",title:(e==null?void 0:e.show_title)||"Unknown",children:(e==null?void 0:e.show_title)||"Unknown"})]})})]})}),s.jsxs(g,{direction:"column",children:[s.jsx(g,{p:24,children:s.jsx(J,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),s.jsx(ks,{children:o.map(l=>s.jsx(ms,{node:l,onClick:()=>t(l)},l.ref_id))})]})]})},Cs=()=>{const e=xe();return s.jsx(g,{align:"center",justify:"center",children:s.jsx(J,{color:"primaryText1",kind:"hugeHeading",children:e==null?void 0:e.label})})},Ss=()=>{const e=xe(),{date:t,boost:n,text:r,name:i,verified:o,image_url:l,twitter_handle:a,ref_id:u}=e||{},c=(e==null?void 0:e.tweet_id)||"",[h,d]=z.useState(n||0),f=pe(p=>p.currentSearch);return e&&s.jsxs(s.Fragment,{children:[s.jsxs(g,{direction:"column",p:24,children:[s.jsxs(g,{align:"center",direction:"row",pr:16,children:[s.jsx(vs,{children:s.jsx(be,{rounded:!0,size:58,src:l||"",type:"person"})}),s.jsxs(g,{children:[s.jsxs(Es,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&s.jsxs(Ts,{children:["@",a]})]})]}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Is,{"data-testid":"episode-description",children:pt(r||"",f)}),s.jsx(g,{direction:"row",justify:"flex-start",children:!!t&&s.jsx(ct,{children:$t.unix(t).format("ll")})})]}),s.jsx(g,{align:"stretch",mt:22,children:s.jsx("a",{href:`https://twitter.com/${a}/status/${c}?open=system`,rel:"noopener noreferrer",target:"_blank",children:s.jsx(As,{endIcon:s.jsx(Ut,{}),children:"View Tweet"})})})]}),s.jsx(_s,{}),s.jsxs(g,{direction:"row",justify:"space-between",pt:14,px:24,children:[s.jsx(Gt,{amt:h}),s.jsx(br,{content:e,count:h,refId:u,updateCount:d})]})]})},vs=j(g)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Es=j(g)`
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
`,Ts=j(g)`
  color: ${y.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Is=j(g)`
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
`,_s=j(Yt)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,As=j(we)`
  width: 100%;
`,Ps=()=>{const e=xe();if(!e)return null;const t=!!e.image_url,n=e.properties||{};return s.jsxs(Ds,{children:[t?s.jsx(Os,{children:s.jsx("img",{alt:"img_a11y",src:e.image_url})}):null,s.jsxs(Ls,{grow:1,justify:"flex-start",pt:t?0:8,shrink:1,children:[s.jsx(g,{ml:24,mt:20,style:{width:"fit-content"},children:s.jsx(Ne,{type:e.type||""})}),s.jsx(Bs,{children:Object.entries(n).map(([r,i])=>s.jsx(zs,{label:r,value:i},r))})]})]})},zs=({label:e,value:t})=>{const n=t.length>140;return s.jsxs(s.Fragment,{children:[s.jsxs(Ms,{className:Ie("node-detail",{"node-detail__long":n}),children:[s.jsx(J,{className:"node-detail__label",children:e}),s.jsx(J,{className:"node-detail__value",children:t})]}),s.jsx(Rs,{})]})},Ls=j(g)`
  overflow: auto;
  width: 100%;
  flex-grow: 1;
  padding-top: 16px;
`,Bs=j(g)`
  padding: 4px 24px;
`,Os=j(g)`
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
`,Ms=j(g)`
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
`,Rs=j(Yt)`
  margin: auto 0px 2px 0px;
  opacity: 0.75;
`,Ds=j(g)`
  flex-direction: column;
  height: 100%;
`,Fs=()=>{var a,u;const[e,t]=z.useState(!1),n=xe(),r=!!(n!=null&&n.source_link),i=z.useRef(null),o=pe(c=>c.currentSearch),l=c=>{c.stopPropagation(),c.currentTarget.blur(),t(!e)};return z.useEffect(()=>{var c,h;e?(c=i.current)==null||c.play():(h=i.current)==null||h.pause()},[e]),s.jsxs(g,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:r?62:0,shrink:1,children:[r&&s.jsxs(Ns,{children:[s.jsx(yr,{color:y.GRAY6}),s.jsx(Vs,{children:n==null?void 0:n.source_link}),s.jsx($s,{href:`${n==null?void 0:n.source_link}?open=system`,onClick:c=>c.stopPropagation(),target:"_blank",children:s.jsx(Ut,{})})]}),(a=n==null?void 0:n.audio)!=null&&a.length?s.jsxs(g,{justify:"flex-start",p:12,children:[s.jsx(we,{onClick:c=>l(c),startIcon:e?s.jsx(ut,{}):s.jsx(Ht,{}),children:e?"Pause":"Play"}),s.jsx(Us,{ref:i,src:((u=n.audio[0])==null?void 0:u.link)||"",children:s.jsx("track",{kind:"captions"})})]}):null,s.jsx(Hs,{grow:1,justify:"flex-start",p:12,shrink:1,children:s.jsx(J,{color:"primaryText1",kind:"regular",children:pt((n==null?void 0:n.text)||"",o)})})]})},Ns=j(g)`
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
`,$s=j.a`
  color: ${y.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Hs=j(g)`
  overflow: auto;
`,Vs=j(J)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Us=j.audio`
  height: 0;
  width: 0;
`,Gs=["clip","twitter_space","youtube","episode","podcast"],Ys=()=>{const e=xe(),{showTeachMe:t}=fe(r=>r),{setPlayingNode:n}=at(r=>r);if(z.useEffect(()=>{Gs.includes((e==null?void 0:e.node_type)||"")&&n(e)},[n,e]),t)return s.jsx(jl,{});switch(e==null?void 0:e.node_type){case"guest":case"person":return s.jsx(xs,{});case"data_series":return s.jsx(vl,{});case"tribe_message":return s.jsx(ps,{});case"tweet":return s.jsx(Ss,{});case"topic":return s.jsx(Cs,{});case"show":return s.jsx(js,{});case"youtube":case"podcast":case"clip":case"twitter_space":return s.jsx(Ir,{});case"document":return s.jsx(Fs,{});case"episode":return s.jsx(ls,{},e.ref_id);case"image":return s.jsx(cs,{});default:return s.jsx(Ps,{})}},qs=z.memo(Ys),Ws=({isPlaying:e,isFullScreen:t,setIsPlaying:n,playingTime:r,duration:i,handleProgressChange:o,handleVolumeChange:l,onFullScreenClick:a,showToolbar:u})=>s.jsxs(g,{children:[(!u||t)&&s.jsx(Js,{"aria-label":"Small","data-testid":"progress-bar",isFullScreen:t,max:i,onChange:o,size:"small",value:r}),s.jsxs(Qs,{align:"center",direction:"row",showToolbar:u||t,children:[s.jsx(Xs,{onClick:n,size:"small",children:e?s.jsx(ut,{}):s.jsx(Ht,{})}),s.jsxs(ea,{direction:"row",children:[s.jsx("span",{children:mn(r)}),s.jsx("span",{className:"separator",children:"/"}),s.jsx("span",{className:"duration",children:mn(i)})]}),s.jsxs(Zs,{direction:"row",px:9,children:[s.jsx(jr,{className:"volume-slider",defaultValue:.5,max:1,min:0,onChange:l,size:"small",step:.1}),s.jsx(Zi,{})]}),s.jsx(Ks,{"data-testid":"fullscreen-button",onClick:()=>a(),children:t?s.jsx(Ji,{}):s.jsx(Ki,{})})]})]}),Qs=j(g)`
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
`,Xs=j(hr)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,Zs=j(g)`
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
`,Ks=j(g)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,Js=j(jr)`
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
`,ea=j(g)`
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
`,ta=({hidden:e})=>{var he,m;const t=z.useRef(null),n=z.useRef(null),[r,i]=z.useState(!1),[o,l]=z.useState(!1),[a,u]=z.useState(!1),[c,h]=z.useState("ready"),[d,f]=z.useState(!1),{isPlaying:p,playingTime:w,duration:b,setIsPlaying:_,setPlayingTime:C,setDuration:k,playingNode:v,volume:O,setVolume:L,setHasError:E,resetPlayer:D,isSeeking:G,setIsSeeking:$}=at(X=>X),V=((he=v==null?void 0:v.link)==null?void 0:he.includes("youtube"))||((m=v==null?void 0:v.link)==null?void 0:m.includes("youtu.be"));z.useEffect(()=>()=>D(),[D]),z.useEffect(()=>{v&&!d&&(C(0),k(0),f(!1))},[v,C,k,f,d]),z.useEffect(()=>{G&&t.current&&(t.current.seekTo(w,"seconds"),$(!1))},[w,G,$]);const I=()=>{_(!p)},P=()=>{_(!0)},H=()=>{_(!1)},q=(X,Z)=>{const K=Array.isArray(Z)?Z[0]:Z;t.current&&(t.current.seekTo(K),C(K))},F=(X,Z)=>{const K=Array.isArray(Z)?Z[0]:Z;L(K)},ne=()=>{E(!0),h("error")},te=X=>{if(!G){const Z=X.playedSeconds;C(Z)}},le=()=>{if(t.current){h("ready");const X=t.current.getDuration();k(X)}},ge=()=>{n.current&&(document.fullscreenElement?(document.exitFullscreen(),setTimeout(()=>l(!1),300)):n.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",x)}))},x=()=>{l(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",x)};z.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",x)}),z.useEffect(()=>{const X=Z=>{if(o){const K=window.screen.height,Ae=Z.clientY,ke=K-Ae;u(ke<=50)}};return document.addEventListener("mousemove",X),()=>{document.removeEventListener("mousemove",X)}},[o,a]),z.useEffect(()=>{const X=Z=>{o&&Z.key==="Escape"?(Z.preventDefault(),Z.stopPropagation()):r&&Z.key===" "&&(Z.preventDefault(),I())};return document.addEventListener("fullscreenchange",x),document.addEventListener("keydown",X),()=>{document.removeEventListener("fullscreenchange",x),document.removeEventListener("keydown",X)}});const se=()=>{I()};return v!=null&&v.link?s.jsxs(na,{ref:n,hidden:e,onBlur:()=>i(!1),onFocus:()=>i(!0),tabIndex:0,children:[s.jsx(ra,{isFullScreen:o,children:s.jsx(be,{size:120,src:(v==null?void 0:v.image_url)||"",type:"clip"})}),s.jsx(la,{onClick:se,children:s.jsx(eo,{ref:t,controls:!1,height:o?window.screen.height:"200px",onBuffer:()=>h("buffering"),onBufferEnd:()=>h("ready"),onError:ne,onPause:H,onPlay:P,onProgress:te,onReady:le,playing:p,url:(v==null?void 0:v.link)||"",volume:O,width:"100%"})}),c==="error"?s.jsx(oa,{className:"error-wrapper",children:"Error happened, please try later"}):null,c==="ready"?s.jsx(Ws,{duration:b,handleProgressChange:q,handleVolumeChange:F,isFullScreen:o,isPlaying:p,onFullScreenClick:ge,playingTime:w,setIsPlaying:I,showToolbar:a&&o}):null,c==="buffering"&&!V?s.jsx(ia,{isFullScreen:o,children:s.jsx(Vt,{color:y.lightGray})}):null]}):null},na=j(g)`
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
`,ra=j(g)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,ia=j(g)`
  position: absolute;
  top: ${e=>e.isFullScreen?"43%":"39%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,oa=j(g)`
  height: 60px;
  padding: 12px 16px;
  color: ${y.primaryRed};
`,la=j.div`
  width: 100%;
  cursor: pointer;
`,sa=z.memo(ta),aa=({open:e})=>{const{setSelectedNode:t,setTeachMe:n,showTeachMe:r}=fe(a=>a),i=xe(),{setSidebarOpen:o}=pe(a=>a),{playingNode:l}=at(a=>a);return s.jsx(qt,{"data-testid":"sidebar-sub-view",direction:"right",in:e,style:{width:r?"700px":"",position:e?"relative":"absolute"},children:s.jsxs(ua,{children:[s.jsx(sa,{hidden:(i==null?void 0:i.ref_id)!==(l==null?void 0:l.ref_id)},l==null?void 0:l.ref_id),s.jsx(pa,{children:s.jsx(qs,{})}),s.jsx(ca,{"data-testid":"close-sidebar-sub-view",onClick:()=>{t(null),n(!1)},children:s.jsx(to,{})}),s.jsx(ha,{onClick:()=>{o(!1)},children:s.jsx(Cr,{})})]})})},ua=j(g)(({theme:e})=>({position:"relative",background:y.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),ca=j(g)`
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
`,pa=j(g)`
  flex: 1 1 100%;
  border-radius: 16px;
  overflow: hidden;
`,ha=j(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),da=()=>{const e=pe(t=>t.setSidebarOpen);return s.jsx(fa,{onClick:()=>{e(!0)},children:s.jsx(no,{})})},fa=j(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),xa=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 14 14",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M4.24488 9.94873L3.51732 12.8382C3.48633 12.976 3.4201 13.0844 3.31861 13.1635C3.21711 13.2425 3.09318 13.2821 2.94682 13.2821C2.75237 13.2821 2.59319 13.2046 2.46928 13.0497C2.34535 12.8948 2.31009 12.7244 2.36351 12.5385L3.01094 9.94873H0.635943C0.427609 9.94873 0.260144 9.86913 0.133547 9.70995C0.00694957 9.55077 -0.0296407 9.37129 0.023776 9.1715C0.0600955 9.02514 0.134609 8.90975 0.247318 8.82535C0.360026 8.74096 0.489568 8.69877 0.635943 8.69877H3.32344L4.1728 5.30131H1.7978C1.58946 5.30131 1.422 5.22172 1.2954 5.06254C1.1688 4.90336 1.13221 4.72388 1.18563 4.5241C1.22195 4.37773 1.29646 4.26234 1.40917 4.17795C1.52188 4.09355 1.65142 4.05135 1.7978 4.05135H4.4853L5.21286 1.16191C5.24383 1.02409 5.31007 0.915657 5.41157 0.836601C5.51305 0.757546 5.63698 0.718018 5.78336 0.718018C5.97779 0.718018 6.13697 0.795469 6.2609 0.950372C6.38483 1.10529 6.42009 1.27569 6.36667 1.46158L5.71923 4.05135H9.16476L9.89232 1.16191C9.9233 1.02409 9.98954 0.915657 10.091 0.836601C10.1925 0.757546 10.3165 0.718018 10.4628 0.718018C10.6573 0.718018 10.8164 0.795469 10.9404 0.950372C11.0643 1.10529 11.0995 1.27569 11.0461 1.46158L10.3987 4.05135H12.7737C12.982 4.05135 13.1495 4.13094 13.2761 4.29012C13.4027 4.4493 13.4393 4.62879 13.3859 4.82858C13.3495 4.97494 13.275 5.09032 13.1623 5.17473C13.0496 5.25911 12.9201 5.30131 12.7737 5.30131H10.0862L9.23684 8.69877H11.6118C11.8202 8.69877 11.9876 8.77836 12.1142 8.93754C12.2408 9.09672 12.2774 9.2762 12.224 9.47598C12.1877 9.62235 12.1132 9.73773 12.0005 9.82212C11.8878 9.90652 11.7582 9.94873 11.6118 9.94873H8.92434L8.19678 12.8382C8.1658 12.976 8.09957 13.0844 7.99807 13.1635C7.89658 13.2425 7.77265 13.2821 7.62628 13.2821C7.43185 13.2821 7.27267 13.2046 7.14874 13.0497C7.0248 12.8948 6.98955 12.7244 7.04296 12.5385L7.6904 9.94873H4.24488ZM4.55738 8.69877H8.0029L8.85226 5.30131H5.40673L4.55738 8.69877Z",fill:"currentColor"})}),ma=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_5099_7163",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"16",height:"16",children:s.jsx("rect",{x:"2",y:"2",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_5099_7163)",children:s.jsx("path",{d:"M10 16.6667C9.16667 16.6667 8.38611 16.5083 7.65833 16.1917C6.93056 15.875 6.29722 15.4472 5.75833 14.9083C5.21944 14.3695 4.79167 13.7361 4.475 13.0083C4.15833 12.2806 4 11.5 4 10.6667C4 10.4778 4.06389 10.3195 4.19167 10.1917C4.31944 10.0639 4.47778 10 4.66667 10C4.85556 10 5.01389 10.0639 5.14167 10.1917C5.26944 10.3195 5.33333 10.4778 5.33333 10.6667C5.33333 11.9667 5.78611 13.0695 6.69167 13.975C7.59722 14.8806 8.7 15.3333 10 15.3333C11.3 15.3333 12.4028 14.8806 13.3083 13.975C14.2139 13.0695 14.6667 11.9667 14.6667 10.6667C14.6667 9.36667 14.2139 8.2639 13.3083 7.35834C12.4028 6.45279 11.3 6.00001 10 6.00001H9.9L10.4667 6.56667C10.6 6.70001 10.6639 6.85556 10.6583 7.03334C10.6528 7.21112 10.5889 7.36667 10.4667 7.50001C10.3333 7.63334 10.175 7.70279 9.99167 7.70834C9.80833 7.7139 9.65 7.65001 9.51667 7.51667L7.8 5.80001C7.66667 5.66667 7.6 5.51112 7.6 5.33334C7.6 5.15556 7.66667 5.00001 7.8 4.86667L9.51667 3.15001C9.65 3.01667 9.80833 2.95279 9.99167 2.95834C10.175 2.9639 10.3333 3.03334 10.4667 3.16667C10.5889 3.30001 10.6528 3.45556 10.6583 3.63334C10.6639 3.81112 10.6 3.96667 10.4667 4.10001L9.9 4.66667H10C10.8333 4.66667 11.6139 4.82501 12.3417 5.14167C13.0694 5.45834 13.7028 5.88612 14.2417 6.42501C14.7806 6.9639 15.2083 7.59723 15.525 8.32501C15.8417 9.05279 16 9.83334 16 10.6667C16 11.5 15.8417 12.2806 15.525 13.0083C15.2083 13.7361 14.7806 14.3695 14.2417 14.9083C13.7028 15.4472 13.0694 15.875 12.3417 16.1917C11.6139 16.5083 10.8333 16.6667 10 16.6667Z",fill:"currentColor"})})]}),ga=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_1259_28",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1259_28)",children:s.jsx("path",{d:"M3 20.75L2.91345 19.4327L4.74998 17.6058V20.75H3ZM7.25003 20.75V15.1058L8.74998 13.6058V20.75H7.25003ZM11.25 20.75V13.6058L12.75 15.1308V20.75H11.25ZM15.25 20.75V15.1308L16.75 13.6308V20.75H15.25ZM19.25 20.75V11.1058L20.75 9.60583V20.75H19.25ZM3.25003 15.2192V13.1058L10 6.35581L14 10.3558L20.75 3.60583V5.71924L14 12.4692L10 8.46921L3.25003 15.2192Z",fill:"currentColor"})})]});function ya(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const wa=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ba=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ka={};function wn(e,t){return((t||ka).jsx?ba:wa).test(e)}const ja=/[ \t\n\f\r]/g;function Ca(e){return typeof e=="object"?e.type==="text"?bn(e.value):!1:bn(e)}function bn(e){return e.replace(ja,"")===""}class Qe{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}Qe.prototype.property={};Qe.prototype.normal={};Qe.prototype.space=null;function _r(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new Qe(n,r,t)}function zt(e){return e.toLowerCase()}class me{constructor(t,n){this.property=t,this.attribute=n}}me.prototype.space=null;me.prototype.boolean=!1;me.prototype.booleanish=!1;me.prototype.overloadedBoolean=!1;me.prototype.number=!1;me.prototype.commaSeparated=!1;me.prototype.spaceSeparated=!1;me.prototype.commaOrSpaceSeparated=!1;me.prototype.mustUseProperty=!1;me.prototype.defined=!1;let Sa=0;const R=Oe(),ee=Oe(),Ar=Oe(),T=Oe(),W=Oe(),De=Oe(),ue=Oe();function Oe(){return 2**++Sa}const Lt=Object.freeze(Object.defineProperty({__proto__:null,boolean:R,booleanish:ee,commaOrSpaceSeparated:ue,commaSeparated:De,number:T,overloadedBoolean:Ar,spaceSeparated:W},Symbol.toStringTag,{value:"Module"})),wt=Object.keys(Lt);class Wt extends me{constructor(t,n,r,i){let o=-1;if(super(t,n),kn(this,"space",i),typeof r=="number")for(;++o<wt.length;){const l=wt[o];kn(this,wt[o],(r&Lt[l])===Lt[l])}}}Wt.prototype.defined=!0;function kn(e,t,n){n&&(e[t]=n)}const va={}.hasOwnProperty;function $e(e){const t={},n={};let r;for(r in e.properties)if(va.call(e.properties,r)){const i=e.properties[r],o=new Wt(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[zt(r)]=r,n[zt(o.attribute)]=r}return new Qe(t,n,e.space)}const Pr=$e({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),zr=$e({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Lr(e,t){return t in e?e[t]:t}function Br(e,t){return Lr(e,t.toLowerCase())}const Or=$e({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Br,properties:{xmlns:null,xmlnsXLink:null}}),Mr=$e({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:ee,ariaAutoComplete:null,ariaBusy:ee,ariaChecked:ee,ariaColCount:T,ariaColIndex:T,ariaColSpan:T,ariaControls:W,ariaCurrent:null,ariaDescribedBy:W,ariaDetails:null,ariaDisabled:ee,ariaDropEffect:W,ariaErrorMessage:null,ariaExpanded:ee,ariaFlowTo:W,ariaGrabbed:ee,ariaHasPopup:null,ariaHidden:ee,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:W,ariaLevel:T,ariaLive:null,ariaModal:ee,ariaMultiLine:ee,ariaMultiSelectable:ee,ariaOrientation:null,ariaOwns:W,ariaPlaceholder:null,ariaPosInSet:T,ariaPressed:ee,ariaReadOnly:ee,ariaRelevant:null,ariaRequired:ee,ariaRoleDescription:W,ariaRowCount:T,ariaRowIndex:T,ariaRowSpan:T,ariaSelected:ee,ariaSetSize:T,ariaSort:null,ariaValueMax:T,ariaValueMin:T,ariaValueNow:T,ariaValueText:null,role:null}}),Ea=$e({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Br,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:De,acceptCharset:W,accessKey:W,action:null,allow:null,allowFullScreen:R,allowPaymentRequest:R,allowUserMedia:R,alt:null,as:null,async:R,autoCapitalize:null,autoComplete:W,autoFocus:R,autoPlay:R,blocking:W,capture:R,charSet:null,checked:R,cite:null,className:W,cols:T,colSpan:null,content:null,contentEditable:ee,controls:R,controlsList:W,coords:T|De,crossOrigin:null,data:null,dateTime:null,decoding:null,default:R,defer:R,dir:null,dirName:null,disabled:R,download:Ar,draggable:ee,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:R,formTarget:null,headers:W,height:T,hidden:R,high:T,href:null,hrefLang:null,htmlFor:W,httpEquiv:W,id:null,imageSizes:null,imageSrcSet:null,inert:R,inputMode:null,integrity:null,is:null,isMap:R,itemId:null,itemProp:W,itemRef:W,itemScope:R,itemType:W,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:R,low:T,manifest:null,max:null,maxLength:T,media:null,method:null,min:null,minLength:T,multiple:R,muted:R,name:null,nonce:null,noModule:R,noValidate:R,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:R,optimum:T,pattern:null,ping:W,placeholder:null,playsInline:R,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:R,referrerPolicy:null,rel:W,required:R,reversed:R,rows:T,rowSpan:T,sandbox:W,scope:null,scoped:R,seamless:R,selected:R,shadowRootDelegatesFocus:R,shadowRootMode:null,shape:null,size:T,sizes:null,slot:null,span:T,spellCheck:ee,src:null,srcDoc:null,srcLang:null,srcSet:null,start:T,step:null,style:null,tabIndex:T,target:null,title:null,translate:null,type:null,typeMustMatch:R,useMap:null,value:ee,width:T,wrap:null,align:null,aLink:null,archive:W,axis:null,background:null,bgColor:null,border:T,borderColor:null,bottomMargin:T,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:R,declare:R,event:null,face:null,frame:null,frameBorder:null,hSpace:T,leftMargin:T,link:null,longDesc:null,lowSrc:null,marginHeight:T,marginWidth:T,noResize:R,noHref:R,noShade:R,noWrap:R,object:null,profile:null,prompt:null,rev:null,rightMargin:T,rules:null,scheme:null,scrolling:ee,standby:null,summary:null,text:null,topMargin:T,valueType:null,version:null,vAlign:null,vLink:null,vSpace:T,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:R,disableRemotePlayback:R,prefix:null,property:null,results:T,security:null,unselectable:null}}),Ta=$e({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Lr,properties:{about:ue,accentHeight:T,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:T,amplitude:T,arabicForm:null,ascent:T,attributeName:null,attributeType:null,azimuth:T,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:T,by:null,calcMode:null,capHeight:T,className:W,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:T,diffuseConstant:T,direction:null,display:null,dur:null,divisor:T,dominantBaseline:null,download:R,dx:null,dy:null,edgeMode:null,editable:null,elevation:T,enableBackground:null,end:null,event:null,exponent:T,externalResourcesRequired:null,fill:null,fillOpacity:T,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:De,g2:De,glyphName:De,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:T,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:T,horizOriginX:T,horizOriginY:T,id:null,ideographic:T,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:T,k:T,k1:T,k2:T,k3:T,k4:T,kernelMatrix:ue,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:T,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:T,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:T,overlineThickness:T,paintOrder:null,panose1:null,path:null,pathLength:T,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:W,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:T,pointsAtY:T,pointsAtZ:T,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ue,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ue,rev:ue,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ue,requiredFeatures:ue,requiredFonts:ue,requiredFormats:ue,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:T,specularExponent:T,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:T,strikethroughThickness:T,string:null,stroke:null,strokeDashArray:ue,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:T,strokeOpacity:T,strokeWidth:null,style:null,surfaceScale:T,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ue,tabIndex:T,tableValues:null,target:null,targetX:T,targetY:T,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ue,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:T,underlineThickness:T,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:T,values:null,vAlphabetic:T,vMathematical:T,vectorEffect:null,vHanging:T,vIdeographic:T,version:null,vertAdvY:T,vertOriginX:T,vertOriginY:T,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:T,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Ia=/^data[-\w.:]+$/i,jn=/-[a-z]/g,_a=/[A-Z]/g;function Aa(e,t){const n=zt(t);let r=t,i=me;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Ia.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(jn,za);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!jn.test(o)){let l=o.replace(_a,Pa);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=Wt}return new i(r,t)}function Pa(e){return"-"+e.toLowerCase()}function za(e){return e.charAt(1).toUpperCase()}const La={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ba=_r([zr,Pr,Or,Mr,Ea],"html"),Qt=_r([zr,Pr,Or,Mr,Ta],"svg");function Oa(e){return e.join(" ").trim()}var Rr={},Cn=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Ma=/\n/g,Ra=/^\s*/,Da=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Fa=/^:\s*/,Na=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,$a=/^[;\s]*/,Ha=/^\s+|\s+$/g,Va=`
`,Sn="/",vn="*",Be="",Ua="comment",Ga="declaration",Ya=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(w){var b=w.match(Ma);b&&(n+=b.length);var _=w.lastIndexOf(Va);r=~_?w.length-_:r+w.length}function o(){var w={line:n,column:r};return function(b){return b.position=new l(w),c(),b}}function l(w){this.start=w,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(w){var b=new Error(t.source+":"+n+":"+r+": "+w);if(b.reason=w,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function u(w){var b=w.exec(e);if(b){var _=b[0];return i(_),e=e.slice(_.length),b}}function c(){u(Ra)}function h(w){var b;for(w=w||[];b=d();)b!==!1&&w.push(b);return w}function d(){var w=o();if(!(Sn!=e.charAt(0)||vn!=e.charAt(1))){for(var b=2;Be!=e.charAt(b)&&(vn!=e.charAt(b)||Sn!=e.charAt(b+1));)++b;if(b+=2,Be===e.charAt(b-1))return a("End of comment missing");var _=e.slice(2,b-2);return r+=2,i(_),e=e.slice(b),r+=2,w({type:Ua,comment:_})}}function f(){var w=o(),b=u(Da);if(b){if(d(),!u(Fa))return a("property missing ':'");var _=u(Na),C=w({type:Ga,property:En(b[0].replace(Cn,Be)),value:_?En(_[0].replace(Cn,Be)):Be});return u($a),C}}function p(){var w=[];h(w);for(var b;b=f();)b!==!1&&(w.push(b),h(w));return w}return c(),p()};function En(e){return e?e.replace(Ha,Be):Be}var qa=xn&&xn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Rr,"__esModule",{value:!0});var Wa=qa(Ya);function Qa(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,Wa.default)(e),i=typeof t=="function";return r.forEach(function(o){if(o.type==="declaration"){var l=o.property,a=o.value;i?t(l,a,o):a&&(n=n||{},n[l]=a)}}),n}var Tn=Rr.default=Qa;const Xa=Tn.default||Tn,Dr=Fr("end"),Xt=Fr("start");function Fr(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Za(e){const t=Xt(e),n=Dr(e);if(t&&n)return{start:t,end:n}}function Ye(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?In(e.position):"start"in e||"end"in e?In(e):"line"in e||"column"in e?Bt(e):""}function Bt(e){return _n(e&&e.line)+":"+_n(e&&e.column)}function In(e){return Bt(e&&e.start)+"-"+Bt(e&&e.end)}function _n(e){return e&&typeof e=="number"?e:1}class re extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1))}if(!o.place&&o.ancestors&&o.ancestors){const u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=a?a.line:void 0,this.name=Ye(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}re.prototype.file="";re.prototype.name="";re.prototype.reason="";re.prototype.message="";re.prototype.stack="";re.prototype.column=void 0;re.prototype.line=void 0;re.prototype.ancestors=void 0;re.prototype.cause=void 0;re.prototype.fatal=void 0;re.prototype.place=void 0;re.prototype.ruleId=void 0;re.prototype.source=void 0;const Zt={}.hasOwnProperty,Ka=new Map,Ja=/[A-Z]/g,eu=/-([a-z])/g,tu=new Set(["table","tbody","thead","tfoot","tr"]),nu=new Set(["td","th"]),Nr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function ru(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=pu(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=cu(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Qt:Ba,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=$r(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function $r(e,t,n){if(t.type==="element")return iu(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return ou(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return su(e,t,n);if(t.type==="mdxjsEsm")return lu(e,t);if(t.type==="root")return au(e,t,n);if(t.type==="text")return uu(e,t)}function iu(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Qt,e.schema=i),e.ancestors.push(t);const o=Vr(e,t.tagName,!1),l=hu(e,t);let a=Jt(e,t);return tu.has(t.tagName)&&(a=a.filter(function(u){return typeof u=="string"?!Ca(u):!0})),Hr(e,l,o,t),Kt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function ou(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}We(e,t.position)}function lu(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);We(e,t.position)}function su(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Qt,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Vr(e,t.name,!0),l=du(e,t),a=Jt(e,t);return Hr(e,l,o,t),Kt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function au(e,t,n){const r={};return Kt(r,Jt(e,t)),e.create(t,e.Fragment,r,n)}function uu(e,t){return t.value}function Hr(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Kt(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function cu(e,t,n){return r;function r(i,o,l,a){const c=Array.isArray(l.children)?n:t;return a?c(o,l,a):c(o,l)}}function pu(e,t){return n;function n(r,i,o,l){const a=Array.isArray(o.children),u=Xt(r);return t(i,o,l,a,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function hu(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Zt.call(t.properties,i)){const o=fu(e,i,t.properties[i]);if(o){const[l,a]=o;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&nu.has(t.tagName)?r=a:n[l]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function du(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else We(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else We(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Jt(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Ka;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const u=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(u){const c=i.get(u)||0;l=u+"-"+c,i.set(u,c+1)}}const a=$r(e,o,l);a!==void 0&&n.push(a)}return n}function fu(e,t,n){const r=Aa(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?ya(n):Oa(n)),r.property==="style"){let i=typeof n=="object"?n:xu(e,String(n));return e.stylePropertyNameCase==="css"&&(i=mu(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?La[r.property]||r.property:r.attribute,n]}}function xu(e,t){const n={};try{Xa(t,r)}catch(i){if(!e.ignoreInvalidStyle){const o=i,l=new re("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=Nr+"#cannot-parse-style-attribute",l}}return n;function r(i,o){let l=i;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(eu,yu)),n[l]=o}}function Vr(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const a=wn(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=wn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Zt.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);We(e)}function We(e,t){const n=new re("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Nr+"#cannot-handle-mdx-estrees-without-createevaluater",n}function mu(e){const t={};let n;for(n in e)Zt.call(e,n)&&(t[gu(n)]=e[n]);return t}function gu(e){let t=e.replace(Ja,wu);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function yu(e,t){return t.toUpperCase()}function wu(e){return"-"+e.toLowerCase()}const bt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},bu={};function ku(e,t){const n=t||bu,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Ur(e,r,i)}function Ur(e,t,n){if(ju(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return An(e.children,t,n)}return Array.isArray(e)?An(e,t,n):""}function An(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Ur(e[i],t,n);return r.join("")}function ju(e){return!!(e&&typeof e=="object")}const Pn=document.createElement("i");function en(e){const t="&"+e+";";Pn.innerHTML=t;const n=Pn.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Se(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function de(e,t){return e.length>0?(Se(e,e.length,0,t),e):t}const zn={}.hasOwnProperty;function Cu(e){const t={};let n=-1;for(;++n<e.length;)Su(t,e[n]);return t}function Su(e,t){let n;for(n in t){const i=(zn.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){zn.call(i,l)||(i[l]=[]);const a=o[l];vu(i[l],Array.isArray(a)?a:a?[a]:[])}}}function vu(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Se(e,0,0,r)}function Gr(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Fe(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Eu=_e(/\p{P}/u),Ce=_e(/[A-Za-z]/),ce=_e(/[\dA-Za-z]/),Tu=_e(/[#-'*+\--9=?A-Z^-~]/);function Ot(e){return e!==null&&(e<32||e===127)}const Mt=_e(/\d/),Iu=_e(/[\dA-Fa-f]/),Yr=_e(/[!-/:-@[-`{-~]/);function B(e){return e!==null&&e<-2}function oe(e){return e!==null&&(e<0||e===32)}function U(e){return e===-2||e===-1||e===32}function _u(e){return Yr(e)||Eu(e)}const Au=_e(/\s/);function _e(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function He(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&ce(e.charCodeAt(n+1))&&ce(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Q(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(u){return U(u)?(e.enter(n),a(u)):t(u)}function a(u){return U(u)&&o++<i?(e.consume(u),a):(e.exit(n),t(u))}}const Pu={tokenize:zu};function zu(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Q(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return B(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const Lu={tokenize:Bu},Ln={tokenize:Ou};function Bu(e){const t=this,n=[];let r=0,i,o,l;return a;function a(v){if(r<n.length){const O=n[r];return t.containerState=O[1],e.attempt(O[0].continuation,u,c)(v)}return c(v)}function u(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&k();const O=t.events.length;let L=O,E;for(;L--;)if(t.events[L][0]==="exit"&&t.events[L][1].type==="chunkFlow"){E=t.events[L][1].end;break}C(r);let D=O;for(;D<t.events.length;)t.events[D][1].end=Object.assign({},E),D++;return Se(t.events,L+1,0,t.events.slice(O)),t.events.length=D,c(v)}return a(v)}function c(v){if(r===n.length){if(!i)return f(v);if(i.currentConstruct&&i.currentConstruct.concrete)return w(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Ln,h,d)(v)}function h(v){return i&&k(),C(r),f(v)}function d(v){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,w(v)}function f(v){return t.containerState={},e.attempt(Ln,p,w)(v)}function p(v){return r++,n.push([t.currentConstruct,t.containerState]),f(v)}function w(v){if(v===null){i&&k(),C(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:i}),b(v)}function b(v){if(v===null){_(e.exit("chunkFlow"),!0),C(0),e.consume(v);return}return B(v)?(e.consume(v),_(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(v),b)}function _(v,O){const L=t.sliceStream(v);if(O&&L.push(null),v.previous=o,o&&(o.next=v),o=v,i.defineSkip(v.start),i.write(L),t.parser.lazy[v.start.line]){let E=i.events.length;for(;E--;)if(i.events[E][1].start.offset<l&&(!i.events[E][1].end||i.events[E][1].end.offset>l))return;const D=t.events.length;let G=D,$,V;for(;G--;)if(t.events[G][0]==="exit"&&t.events[G][1].type==="chunkFlow"){if($){V=t.events[G][1].end;break}$=!0}for(C(r),E=D;E<t.events.length;)t.events[E][1].end=Object.assign({},V),E++;Se(t.events,G+1,0,t.events.slice(D)),t.events.length=E}}function C(v){let O=n.length;for(;O-- >v;){const L=n[O];t.containerState=L[1],L[0].exit.call(t,e)}n.length=v}function k(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Ou(e,t,n){return Q(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Bn(e){if(e===null||oe(e)||Au(e))return 1;if(_u(e))return 2}function tn(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Rt={name:"attention",tokenize:Ru,resolveAll:Mu};function Mu(e,t){let n=-1,r,i,o,l,a,u,c,h;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d=Object.assign({},e[r][1].end),f=Object.assign({},e[n][1].start);On(d,-u),On(f,u),l={type:u>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[r][1].end)},a={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:f},o={type:u>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},i={type:u>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},a.end)},e[r][1].end=Object.assign({},l.start),e[n][1].start=Object.assign({},a.end),c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=de(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=de(c,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),c=de(c,tn(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=de(c,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(h=2,c=de(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):h=0,Se(e,r-1,n-r+3,c),n=r+c.length-h-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Ru(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Bn(r);let o;return l;function l(u){return o=u,e.enter("attentionSequence"),a(u)}function a(u){if(u===o)return e.consume(u),a;const c=e.exit("attentionSequence"),h=Bn(u),d=!h||h===2&&i||n.includes(u),f=!i||i===2&&h||n.includes(r);return c._open=!!(o===42?d:d&&(i||!f)),c._close=!!(o===42?f:f&&(h||!d)),t(u)}}function On(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Du={name:"autolink",tokenize:Fu};function Fu(e,t,n){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return Ce(p)?(e.consume(p),l):c(p)}function l(p){return p===43||p===45||p===46||ce(p)?(r=1,a(p)):c(p)}function a(p){return p===58?(e.consume(p),r=0,u):(p===43||p===45||p===46||ce(p))&&r++<32?(e.consume(p),a):(r=0,c(p))}function u(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||Ot(p)?n(p):(e.consume(p),u)}function c(p){return p===64?(e.consume(p),h):Tu(p)?(e.consume(p),c):n(p)}function h(p){return ce(p)?d(p):n(p)}function d(p){return p===46?(e.consume(p),r=0,h):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):f(p)}function f(p){if((p===45||ce(p))&&r++<63){const w=p===45?f:d;return e.consume(p),w}return n(p)}}const ht={tokenize:Nu,partial:!0};function Nu(e,t,n){return r;function r(o){return U(o)?Q(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||B(o)?t(o):n(o)}}const qr={name:"blockQuote",tokenize:$u,continuation:{tokenize:Hu},exit:Vu};function $u(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return U(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function Hu(e,t,n){const r=this;return i;function i(l){return U(l)?Q(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(qr,t,n)(l)}}function Vu(e){e.exit("blockQuote")}const Wr={name:"characterEscape",tokenize:Uu};function Uu(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Yr(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Qr={name:"characterReference",tokenize:Gu};function Gu(e,t,n){const r=this;let i=0,o,l;return a;function a(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),u}function u(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,l=ce,h(d))}function c(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=Iu,h):(e.enter("characterReferenceValue"),o=7,l=Mt,h(d))}function h(d){if(d===59&&i){const f=e.exit("characterReferenceValue");return l===ce&&!en(r.sliceSerialize(f))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(d)&&i++<o?(e.consume(d),h):n(d)}}const Mn={tokenize:qu,partial:!0},Rn={name:"codeFenced",tokenize:Yu,concrete:!0};function Yu(e,t,n){const r=this,i={tokenize:L,partial:!0};let o=0,l=0,a;return u;function u(E){return c(E)}function c(E){const D=r.events[r.events.length-1];return o=D&&D[1].type==="linePrefix"?D[2].sliceSerialize(D[1],!0).length:0,a=E,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),h(E)}function h(E){return E===a?(l++,e.consume(E),h):l<3?n(E):(e.exit("codeFencedFenceSequence"),U(E)?Q(e,d,"whitespace")(E):d(E))}function d(E){return E===null||B(E)?(e.exit("codeFencedFence"),r.interrupt?t(E):e.check(Mn,b,O)(E)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(E))}function f(E){return E===null||B(E)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(E)):U(E)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Q(e,p,"whitespace")(E)):E===96&&E===a?n(E):(e.consume(E),f)}function p(E){return E===null||B(E)?d(E):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(E))}function w(E){return E===null||B(E)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(E)):E===96&&E===a?n(E):(e.consume(E),w)}function b(E){return e.attempt(i,O,_)(E)}function _(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),C}function C(E){return o>0&&U(E)?Q(e,k,"linePrefix",o+1)(E):k(E)}function k(E){return E===null||B(E)?e.check(Mn,b,O)(E):(e.enter("codeFlowValue"),v(E))}function v(E){return E===null||B(E)?(e.exit("codeFlowValue"),k(E)):(e.consume(E),v)}function O(E){return e.exit("codeFenced"),t(E)}function L(E,D,G){let $=0;return V;function V(F){return E.enter("lineEnding"),E.consume(F),E.exit("lineEnding"),I}function I(F){return E.enter("codeFencedFence"),U(F)?Q(E,P,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):P(F)}function P(F){return F===a?(E.enter("codeFencedFenceSequence"),H(F)):G(F)}function H(F){return F===a?($++,E.consume(F),H):$>=l?(E.exit("codeFencedFenceSequence"),U(F)?Q(E,q,"whitespace")(F):q(F)):G(F)}function q(F){return F===null||B(F)?(E.exit("codeFencedFence"),D(F)):G(F)}}}function qu(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const kt={name:"codeIndented",tokenize:Qu},Wu={tokenize:Xu,partial:!0};function Qu(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),Q(e,o,"linePrefix",4+1)(c)}function o(c){const h=r.events[r.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?l(c):n(c)}function l(c){return c===null?u(c):B(c)?e.attempt(Wu,l,u)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||B(c)?(e.exit("codeFlowValue"),l(c)):(e.consume(c),a)}function u(c){return e.exit("codeIndented"),t(c)}}function Xu(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):B(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):Q(e,o,"linePrefix",4+1)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):B(l)?i(l):n(l)}}const Zu={name:"codeText",tokenize:ec,resolve:Ku,previous:Ju};function Ku(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Ju(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ec(e,t,n){let r=0,i,o;return l;function l(d){return e.enter("codeText"),e.enter("codeTextSequence"),a(d)}function a(d){return d===96?(e.consume(d),r++,a):(e.exit("codeTextSequence"),u(d))}function u(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),u):d===96?(o=e.enter("codeTextSequence"),i=0,h(d)):B(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(d))}function c(d){return d===null||d===32||d===96||B(d)?(e.exit("codeTextData"),u(d)):(e.consume(d),c)}function h(d){return d===96?(e.consume(d),i++,h):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(o.type="codeTextData",c(d))}}function Xr(e){const t={};let n=-1,r,i,o,l,a,u,c;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,tc(e,n)),n=t[n],c=!0);else if(r[1]._container){for(o=n,i=void 0;o--&&(l=e[o],l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(i&&(e[i][1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);i&&(r[1].end=Object.assign({},e[i][1].start),a=e.slice(i,n),a.unshift(r),Se(e,i,n-i+1,a))}}return!c}function tc(e,t){const n=e[t][1],r=e[t][2];let i=t-1;const o=[],l=n._tokenizer||r.parser[n.contentType](n.start),a=l.events,u=[],c={};let h,d,f=-1,p=n,w=0,b=0;const _=[b];for(;p;){for(;e[++i][1]!==p;);o.push(i),p._tokenizer||(h=r.sliceStream(p),p.next||h.push(null),d&&l.defineSkip(p.start),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(h),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(b=f+1,_.push(b),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(l.events=[],p?(p._tokenizer=void 0,p.previous=void 0):_.pop(),f=_.length;f--;){const C=a.slice(_[f],_[f+1]),k=o.pop();u.unshift([k,k+C.length-1]),Se(e,k,2,C)}for(f=-1;++f<u.length;)c[w+u[f][0]]=w+u[f][1],w+=u[f][1]-u[f][0]-1;return c}const nc={tokenize:oc,resolve:ic},rc={tokenize:lc,partial:!0};function ic(e){return Xr(e),e}function oc(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):B(a)?e.check(rc,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function lc(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Q(e,o,"linePrefix")}function o(l){if(l===null||B(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Zr(e,t,n,r,i,o,l,a,u){const c=u||Number.POSITIVE_INFINITY;let h=0;return d;function d(C){return C===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(C),e.exit(o),f):C===null||C===32||C===41||Ot(C)?n(C):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),b(C))}function f(C){return C===62?(e.enter(o),e.consume(C),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(C))}function p(C){return C===62?(e.exit("chunkString"),e.exit(a),f(C)):C===null||C===60||B(C)?n(C):(e.consume(C),C===92?w:p)}function w(C){return C===60||C===62||C===92?(e.consume(C),p):p(C)}function b(C){return!h&&(C===null||C===41||oe(C))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(C)):h<c&&C===40?(e.consume(C),h++,b):C===41?(e.consume(C),h--,b):C===null||C===32||C===40||Ot(C)?n(C):(e.consume(C),C===92?_:b)}function _(C){return C===40||C===41||C===92?(e.consume(C),b):b(C)}}function Kr(e,t,n,r,i,o){const l=this;let a=0,u;return c;function c(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(o),h}function h(p){return a>999||p===null||p===91||p===93&&!u||p===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(p):p===93?(e.exit(o),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):B(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),h):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||B(p)||a++>999?(e.exit("chunkString"),h(p)):(e.consume(p),u||(u=!U(p)),p===92?f:d)}function f(p){return p===91||p===92||p===93?(e.consume(p),a++,d):d(p)}}function Jr(e,t,n,r,i,o){let l;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),l=f===40?41:f,u):n(f)}function u(f){return f===l?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),c(f))}function c(f){return f===l?(e.exit(o),u(l)):f===null?n(f):B(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Q(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),h(f))}function h(f){return f===l||f===null||B(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?d:h)}function d(f){return f===l||f===92?(e.consume(f),h):h(f)}}function qe(e,t){let n;return r;function r(i){return B(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):U(i)?Q(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const sc={name:"definition",tokenize:uc},ac={tokenize:cc,partial:!0};function uc(e,t,n){const r=this;let i;return o;function o(p){return e.enter("definition"),l(p)}function l(p){return Kr.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return i=Fe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),u):n(p)}function u(p){return oe(p)?qe(e,c)(p):c(p)}function c(p){return Zr(e,h,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function h(p){return e.attempt(ac,d,d)(p)}function d(p){return U(p)?Q(e,f,"whitespace")(p):f(p)}function f(p){return p===null||B(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):n(p)}}function cc(e,t,n){return r;function r(a){return oe(a)?qe(e,i)(a):n(a)}function i(a){return Jr(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return U(a)?Q(e,l,"whitespace")(a):l(a)}function l(a){return a===null||B(a)?t(a):n(a)}}const pc={name:"hardBreakEscape",tokenize:hc};function hc(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return B(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const dc={name:"headingAtx",tokenize:xc,resolve:fc};function fc(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Se(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function xc(e,t,n){let r=0;return i;function i(h){return e.enter("atxHeading"),o(h)}function o(h){return e.enter("atxHeadingSequence"),l(h)}function l(h){return h===35&&r++<6?(e.consume(h),l):h===null||oe(h)?(e.exit("atxHeadingSequence"),a(h)):n(h)}function a(h){return h===35?(e.enter("atxHeadingSequence"),u(h)):h===null||B(h)?(e.exit("atxHeading"),t(h)):U(h)?Q(e,a,"whitespace")(h):(e.enter("atxHeadingText"),c(h))}function u(h){return h===35?(e.consume(h),u):(e.exit("atxHeadingSequence"),a(h))}function c(h){return h===null||h===35||oe(h)?(e.exit("atxHeadingText"),a(h)):(e.consume(h),c)}}const mc=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Dn=["pre","script","style","textarea"],gc={name:"htmlFlow",tokenize:kc,resolveTo:bc,concrete:!0},yc={tokenize:Cc,partial:!0},wc={tokenize:jc,partial:!0};function bc(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function kc(e,t,n){const r=this;let i,o,l,a,u;return c;function c(m){return h(m)}function h(m){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(m),d}function d(m){return m===33?(e.consume(m),f):m===47?(e.consume(m),o=!0,b):m===63?(e.consume(m),i=3,r.interrupt?t:x):Ce(m)?(e.consume(m),l=String.fromCharCode(m),_):n(m)}function f(m){return m===45?(e.consume(m),i=2,p):m===91?(e.consume(m),i=5,a=0,w):Ce(m)?(e.consume(m),i=4,r.interrupt?t:x):n(m)}function p(m){return m===45?(e.consume(m),r.interrupt?t:x):n(m)}function w(m){const X="CDATA[";return m===X.charCodeAt(a++)?(e.consume(m),a===X.length?r.interrupt?t:P:w):n(m)}function b(m){return Ce(m)?(e.consume(m),l=String.fromCharCode(m),_):n(m)}function _(m){if(m===null||m===47||m===62||oe(m)){const X=m===47,Z=l.toLowerCase();return!X&&!o&&Dn.includes(Z)?(i=1,r.interrupt?t(m):P(m)):mc.includes(l.toLowerCase())?(i=6,X?(e.consume(m),C):r.interrupt?t(m):P(m)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(m):o?k(m):v(m))}return m===45||ce(m)?(e.consume(m),l+=String.fromCharCode(m),_):n(m)}function C(m){return m===62?(e.consume(m),r.interrupt?t:P):n(m)}function k(m){return U(m)?(e.consume(m),k):V(m)}function v(m){return m===47?(e.consume(m),V):m===58||m===95||Ce(m)?(e.consume(m),O):U(m)?(e.consume(m),v):V(m)}function O(m){return m===45||m===46||m===58||m===95||ce(m)?(e.consume(m),O):L(m)}function L(m){return m===61?(e.consume(m),E):U(m)?(e.consume(m),L):v(m)}function E(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),u=m,D):U(m)?(e.consume(m),E):G(m)}function D(m){return m===u?(e.consume(m),u=null,$):m===null||B(m)?n(m):(e.consume(m),D)}function G(m){return m===null||m===34||m===39||m===47||m===60||m===61||m===62||m===96||oe(m)?L(m):(e.consume(m),G)}function $(m){return m===47||m===62||U(m)?v(m):n(m)}function V(m){return m===62?(e.consume(m),I):n(m)}function I(m){return m===null||B(m)?P(m):U(m)?(e.consume(m),I):n(m)}function P(m){return m===45&&i===2?(e.consume(m),ne):m===60&&i===1?(e.consume(m),te):m===62&&i===4?(e.consume(m),se):m===63&&i===3?(e.consume(m),x):m===93&&i===5?(e.consume(m),ge):B(m)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(yc,he,H)(m)):m===null||B(m)?(e.exit("htmlFlowData"),H(m)):(e.consume(m),P)}function H(m){return e.check(wc,q,he)(m)}function q(m){return e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),F}function F(m){return m===null||B(m)?H(m):(e.enter("htmlFlowData"),P(m))}function ne(m){return m===45?(e.consume(m),x):P(m)}function te(m){return m===47?(e.consume(m),l="",le):P(m)}function le(m){if(m===62){const X=l.toLowerCase();return Dn.includes(X)?(e.consume(m),se):P(m)}return Ce(m)&&l.length<8?(e.consume(m),l+=String.fromCharCode(m),le):P(m)}function ge(m){return m===93?(e.consume(m),x):P(m)}function x(m){return m===62?(e.consume(m),se):m===45&&i===2?(e.consume(m),x):P(m)}function se(m){return m===null||B(m)?(e.exit("htmlFlowData"),he(m)):(e.consume(m),se)}function he(m){return e.exit("htmlFlow"),t(m)}}function jc(e,t,n){const r=this;return i;function i(l){return B(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function Cc(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ht,t,n)}}const Sc={name:"htmlText",tokenize:vc};function vc(e,t,n){const r=this;let i,o,l;return a;function a(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),u}function u(x){return x===33?(e.consume(x),c):x===47?(e.consume(x),L):x===63?(e.consume(x),v):Ce(x)?(e.consume(x),G):n(x)}function c(x){return x===45?(e.consume(x),h):x===91?(e.consume(x),o=0,w):Ce(x)?(e.consume(x),k):n(x)}function h(x){return x===45?(e.consume(x),p):n(x)}function d(x){return x===null?n(x):x===45?(e.consume(x),f):B(x)?(l=d,te(x)):(e.consume(x),d)}function f(x){return x===45?(e.consume(x),p):d(x)}function p(x){return x===62?ne(x):x===45?f(x):d(x)}function w(x){const se="CDATA[";return x===se.charCodeAt(o++)?(e.consume(x),o===se.length?b:w):n(x)}function b(x){return x===null?n(x):x===93?(e.consume(x),_):B(x)?(l=b,te(x)):(e.consume(x),b)}function _(x){return x===93?(e.consume(x),C):b(x)}function C(x){return x===62?ne(x):x===93?(e.consume(x),C):b(x)}function k(x){return x===null||x===62?ne(x):B(x)?(l=k,te(x)):(e.consume(x),k)}function v(x){return x===null?n(x):x===63?(e.consume(x),O):B(x)?(l=v,te(x)):(e.consume(x),v)}function O(x){return x===62?ne(x):v(x)}function L(x){return Ce(x)?(e.consume(x),E):n(x)}function E(x){return x===45||ce(x)?(e.consume(x),E):D(x)}function D(x){return B(x)?(l=D,te(x)):U(x)?(e.consume(x),D):ne(x)}function G(x){return x===45||ce(x)?(e.consume(x),G):x===47||x===62||oe(x)?$(x):n(x)}function $(x){return x===47?(e.consume(x),ne):x===58||x===95||Ce(x)?(e.consume(x),V):B(x)?(l=$,te(x)):U(x)?(e.consume(x),$):ne(x)}function V(x){return x===45||x===46||x===58||x===95||ce(x)?(e.consume(x),V):I(x)}function I(x){return x===61?(e.consume(x),P):B(x)?(l=I,te(x)):U(x)?(e.consume(x),I):$(x)}function P(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),i=x,H):B(x)?(l=P,te(x)):U(x)?(e.consume(x),P):(e.consume(x),q)}function H(x){return x===i?(e.consume(x),i=void 0,F):x===null?n(x):B(x)?(l=H,te(x)):(e.consume(x),H)}function q(x){return x===null||x===34||x===39||x===60||x===61||x===96?n(x):x===47||x===62||oe(x)?$(x):(e.consume(x),q)}function F(x){return x===47||x===62||oe(x)?$(x):n(x)}function ne(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),t):n(x)}function te(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),le}function le(x){return U(x)?Q(e,ge,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):ge(x)}function ge(x){return e.enter("htmlTextData"),l(x)}}const nn={name:"labelEnd",tokenize:Pc,resolveTo:Ac,resolveAll:_c},Ec={tokenize:zc},Tc={tokenize:Lc},Ic={tokenize:Bc};function _c(e){let t=-1;for(;++t<e.length;){const n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function Ac(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const u={type:e[o][1].type==="labelLink"?"link":"image",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[o][1].start),end:Object.assign({},e[l][1].end)},h={type:"labelText",start:Object.assign({},e[o+r+2][1].end),end:Object.assign({},e[l-2][1].start)};return a=[["enter",u,t],["enter",c,t]],a=de(a,e.slice(o+1,o+r+3)),a=de(a,[["enter",h,t]]),a=de(a,tn(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=de(a,[["exit",h,t],e[l-2],e[l-1],["exit",c,t]]),a=de(a,e.slice(l+1)),a=de(a,[["exit",u,t]]),Se(e,o,e.length,a),e}function Pc(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(f){return o?o._inactive?d(f):(l=r.parser.defined.includes(Fe(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),u):n(f)}function u(f){return f===40?e.attempt(Ec,h,l?h:d)(f):f===91?e.attempt(Tc,h,l?c:d)(f):l?h(f):d(f)}function c(f){return e.attempt(Ic,h,d)(f)}function h(f){return t(f)}function d(f){return o._balanced=!0,n(f)}}function zc(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return oe(d)?qe(e,o)(d):o(d)}function o(d){return d===41?h(d):Zr(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function l(d){return oe(d)?qe(e,u)(d):h(d)}function a(d){return n(d)}function u(d){return d===34||d===39||d===40?Jr(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):h(d)}function c(d){return oe(d)?qe(e,h)(d):h(d)}function h(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function Lc(e,t,n){const r=this;return i;function i(a){return Kr.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Fe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function Bc(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Oc={name:"labelStartImage",tokenize:Mc,resolveAll:nn.resolveAll};function Mc(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Rc={name:"labelStartLink",tokenize:Dc,resolveAll:nn.resolveAll};function Dc(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const jt={name:"lineEnding",tokenize:Fc};function Fc(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Q(e,t,"linePrefix")}}const tt={name:"thematicBreak",tokenize:Nc};function Nc(e,t,n){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),l(c)}function l(c){return i=c,a(c)}function a(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||B(c))?(e.exit("thematicBreak"),t(c)):n(c)}function u(c){return c===i?(e.consume(c),r++,u):(e.exit("thematicBreakSequence"),U(c)?Q(e,a,"whitespace")(c):a(c))}}const ie={name:"list",tokenize:Vc,continuation:{tokenize:Uc},exit:Yc},$c={tokenize:qc,partial:!0},Hc={tokenize:Gc,partial:!0};function Vc(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(p){const w=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Mt(p)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(tt,n,c)(p):c(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(p)}return n(p)}function u(p){return Mt(p)&&++l<10?(e.consume(p),u):(!r.interrupt||l<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),c(p)):n(p)}function c(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(ht,r.interrupt?n:h,e.attempt($c,f,d))}function h(p){return r.containerState.initialBlankLine=!0,o++,f(p)}function d(p){return U(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):n(p)}function f(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function Uc(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ht,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Q(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!U(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Hc,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Q(e,e.attempt(ie,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Gc(e,t,n){const r=this;return Q(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function Yc(e){e.exit(this.containerState.type)}function qc(e,t,n){const r=this;return Q(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(o){const l=r.events[r.events.length-1];return!U(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Fn={name:"setextUnderline",tokenize:Qc,resolveTo:Wc};function Wc(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[o][1].end)):e[r][1]=l,e.push(["exit",l,t]),e}function Qc(e,t,n){const r=this;let i;return o;function o(c){let h=r.events.length,d;for(;h--;)if(r.events[h][1].type!=="lineEnding"&&r.events[h][1].type!=="linePrefix"&&r.events[h][1].type!=="content"){d=r.events[h][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=c,l(c)):n(c)}function l(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),U(c)?Q(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||B(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const Xc={tokenize:Zc};function Zc(e){const t=this,n=e.attempt(ht,r,e.attempt(this.parser.constructs.flowInitial,i,Q(e,e.attempt(this.parser.constructs.flow,i,e.attempt(nc,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Kc={resolveAll:ti()},Jc=ei("string"),ep=ei("text");function ei(e){return{tokenize:t,resolveAll:ti(e==="text"?tp:void 0)};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(h){return c(h)?o(h):a(h)}function a(h){if(h===null){n.consume(h);return}return n.enter("data"),n.consume(h),u}function u(h){return c(h)?(n.exit("data"),o(h)):(n.consume(h),u)}function c(h){if(h===null)return!0;const d=i[h];let f=-1;if(d)for(;++f<d.length;){const p=d[f];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function ti(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function tp(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,u;for(;o--;){const c=i[o];if(typeof c=="string"){for(l=c.length;c.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(c===-2)u=!0,a++;else if(c!==-1){o++;break}}if(a){const c={type:n===e.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-a,offset:r.end.offset-a,_index:r.start._index+o,_bufferIndex:o?l:r.start._bufferIndex+l},end:Object.assign({},r.end)};r.end=Object.assign({},c.start),r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}function np(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},o=[];let l=[],a=[];const u={consume:k,enter:v,exit:O,attempt:D(L),check:D(E),interrupt:D(E,{interrupt:!0})},c={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:p,sliceSerialize:f,now:w,defineSkip:b,write:d};let h=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function d(I){return l=de(l,I),_(),l[l.length-1]!==null?[]:(G(t,0),c.events=tn(o,c.events,c),c.events)}function f(I,P){return ip(p(I),P)}function p(I){return rp(l,I)}function w(){const{line:I,column:P,offset:H,_index:q,_bufferIndex:F}=r;return{line:I,column:P,offset:H,_index:q,_bufferIndex:F}}function b(I){i[I.line]=I.column,V()}function _(){let I;for(;r._index<l.length;){const P=l[r._index];if(typeof P=="string")for(I=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===I&&r._bufferIndex<P.length;)C(P.charCodeAt(r._bufferIndex));else C(P)}}function C(I){h=h(I)}function k(I){B(I)?(r.line++,r.column=1,r.offset+=I===-3?2:1,V()):I!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=I}function v(I,P){const H=P||{};return H.type=I,H.start=w(),c.events.push(["enter",H,c]),a.push(H),H}function O(I){const P=a.pop();return P.end=w(),c.events.push(["exit",P,c]),P}function L(I,P){G(I,P.from)}function E(I,P){P.restore()}function D(I,P){return H;function H(q,F,ne){let te,le,ge,x;return Array.isArray(q)?he(q):"tokenize"in q?he([q]):se(q);function se(K){return Ae;function Ae(ke){const Pe=ke!==null&&K[ke],ze=ke!==null&&K.null,xt=[...Array.isArray(Pe)?Pe:Pe?[Pe]:[],...Array.isArray(ze)?ze:ze?[ze]:[]];return he(xt)(ke)}}function he(K){return te=K,le=0,K.length===0?ne:m(K[le])}function m(K){return Ae;function Ae(ke){return x=$(),ge=K,K.partial||(c.currentConstruct=K),K.name&&c.parser.constructs.disable.null.includes(K.name)?Z():K.tokenize.call(P?Object.assign(Object.create(c),P):c,u,X,Z)(ke)}}function X(K){return I(ge,x),F}function Z(K){return x.restore(),++le<te.length?m(te[le]):ne}}}function G(I,P){I.resolveAll&&!o.includes(I)&&o.push(I),I.resolve&&Se(c.events,P,c.events.length-P,I.resolve(c.events.slice(P),c)),I.resolveTo&&(c.events=I.resolveTo(c.events,c))}function $(){const I=w(),P=c.previous,H=c.currentConstruct,q=c.events.length,F=Array.from(a);return{restore:ne,from:q};function ne(){r=I,c.previous=P,c.currentConstruct=H,c.events.length=q,a=F,V()}}function V(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function rp(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function ip(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}const op={42:ie,43:ie,45:ie,48:ie,49:ie,50:ie,51:ie,52:ie,53:ie,54:ie,55:ie,56:ie,57:ie,62:qr},lp={91:sc},sp={[-2]:kt,[-1]:kt,32:kt},ap={35:dc,42:tt,45:[Fn,tt],60:gc,61:Fn,95:tt,96:Rn,126:Rn},up={38:Qr,92:Wr},cp={[-5]:jt,[-4]:jt,[-3]:jt,33:Oc,38:Qr,42:Rt,60:[Du,Sc],91:Rc,92:[pc,Wr],93:nn,95:Rt,96:Zu},pp={null:[Rt,Kc]},hp={null:[42,95]},dp={null:[]},fp=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:hp,contentInitial:lp,disable:dp,document:op,flow:ap,flowInitial:sp,insideSpan:pp,string:up,text:cp},Symbol.toStringTag,{value:"Module"}));function xp(e){const n=Cu([fp,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:n,content:i(Pu),document:i(Lu),flow:i(Xc),string:i(Jc),text:i(ep)};return r;function i(o){return l;function l(a){return np(r,o,a)}}}function mp(e){for(;!Xr(e););return e}const Nn=/[\0\t\n\r]/g;function gp(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const u=[];let c,h,d,f,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),d=0,t="",n&&(o.charCodeAt(0)===65279&&d++,n=void 0);d<o.length;){if(Nn.lastIndex=d,c=Nn.exec(o),f=c&&c.index!==void 0?c.index:o.length,p=o.charCodeAt(f),!c){t=o.slice(d);break}if(p===10&&d===f&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),d<f&&(u.push(o.slice(d,f)),e+=f-d),p){case 0:{u.push(65533),e++;break}case 9:{for(h=Math.ceil(e/4)*4,u.push(-2);e++<h;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}d=f+1}return a&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const yp=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function wp(e){return e.replace(yp,bp)}function bp(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Gr(n.slice(o?2:1),o?16:10)}return en(n)||e}const ni={}.hasOwnProperty;function kp(e,t,n){return typeof t!="string"&&(n=t,t=void 0),jp(n)(mp(xp(n).document().write(gp()(e,t,!0))))}function jp(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(hn),autolinkProtocol:$,autolinkEmail:$,atxHeading:o(un),blockQuote:o(Pe),characterEscape:$,characterReference:$,codeFenced:o(ze),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(ze,l),codeText:o(xt,l),codeTextData:$,data:$,codeFlowValue:$,definition:o(xi),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(mi),hardBreakEscape:o(cn),hardBreakTrailing:o(cn),htmlFlow:o(pn,l),htmlFlowData:$,htmlText:o(pn,l),htmlTextData:$,image:o(gi),label:l,link:o(hn),listItem:o(yi),listItemValue:f,listOrdered:o(dn,d),listUnordered:o(dn),paragraph:o(wi),reference:m,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(un),strong:o(bi),thematicBreak:o(ji)},exit:{atxHeading:u(),atxHeadingSequence:L,autolink:u(),autolinkEmail:ke,autolinkProtocol:Ae,blockQuote:u(),characterEscapeValue:V,characterReferenceMarkerHexadecimal:Z,characterReferenceMarkerNumeric:Z,characterReferenceValue:K,codeFenced:u(_),codeFencedFence:b,codeFencedFenceInfo:p,codeFencedFenceMeta:w,codeFlowValue:V,codeIndented:u(C),codeText:u(F),codeTextData:V,data:V,definition:u(),definitionDestinationString:O,definitionLabelString:k,definitionTitleString:v,emphasis:u(),hardBreakEscape:u(P),hardBreakTrailing:u(P),htmlFlow:u(H),htmlFlowData:V,htmlText:u(q),htmlTextData:V,image:u(te),label:ge,labelText:le,lineEnding:I,link:u(ne),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:X,resourceDestinationString:x,resourceTitleString:se,resource:he,setextHeading:u(G),setextHeadingLineSequence:D,setextHeadingText:E,strong:u(),thematicBreak:u()}};ri(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(S){let A={type:"root",children:[]};const M={stack:[A],tokenStack:[],config:t,enter:a,exit:c,buffer:l,resume:h,data:n},N=[];let Y=-1;for(;++Y<S.length;)if(S[Y][1].type==="listOrdered"||S[Y][1].type==="listUnordered")if(S[Y][0]==="enter")N.push(Y);else{const ye=N.pop();Y=i(S,ye,Y)}for(Y=-1;++Y<S.length;){const ye=t[S[Y][0]];ni.call(ye,S[Y][1].type)&&ye[S[Y][1].type].call(Object.assign({sliceSerialize:S[Y][2].sliceSerialize},M),S[Y][1])}if(M.tokenStack.length>0){const ye=M.tokenStack[M.tokenStack.length-1];(ye[1]||$n).call(M,void 0,ye[0])}for(A.position={start:Te(S.length>0?S[0][1].start:{line:1,column:1,offset:0}),end:Te(S.length>0?S[S.length-2][1].end:{line:1,column:1,offset:0})},Y=-1;++Y<t.transforms.length;)A=t.transforms[Y](A)||A;return A}function i(S,A,M){let N=A-1,Y=-1,ye=!1,Le,ve,Ve,Ue;for(;++N<=M;){const ae=S[N];switch(ae[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ae[0]==="enter"?Y++:Y--,Ue=void 0;break}case"lineEndingBlank":{ae[0]==="enter"&&(Le&&!Ue&&!Y&&!Ve&&(Ve=N),Ue=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ue=void 0}if(!Y&&ae[0]==="enter"&&ae[1].type==="listItemPrefix"||Y===-1&&ae[0]==="exit"&&(ae[1].type==="listUnordered"||ae[1].type==="listOrdered")){if(Le){let Me=N;for(ve=void 0;Me--;){const Ee=S[Me];if(Ee[1].type==="lineEnding"||Ee[1].type==="lineEndingBlank"){if(Ee[0]==="exit")continue;ve&&(S[ve][1].type="lineEndingBlank",ye=!0),Ee[1].type="lineEnding",ve=Me}else if(!(Ee[1].type==="linePrefix"||Ee[1].type==="blockQuotePrefix"||Ee[1].type==="blockQuotePrefixWhitespace"||Ee[1].type==="blockQuoteMarker"||Ee[1].type==="listItemIndent"))break}Ve&&(!ve||Ve<ve)&&(Le._spread=!0),Le.end=Object.assign({},ve?S[ve][1].start:ae[1].end),S.splice(ve||N,0,["exit",Le,ae[2]]),N++,M++}if(ae[1].type==="listItemPrefix"){const Me={type:"listItem",_spread:!1,start:Object.assign({},ae[1].start),end:void 0};Le=Me,S.splice(N,0,["enter",Me,ae[2]]),N++,M++,Ve=void 0,Ue=!0}}}return S[A][1]._spread=ye,M}function o(S,A){return M;function M(N){a.call(this,S(N),N),A&&A.call(this,N)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(S,A,M){this.stack[this.stack.length-1].children.push(S),this.stack.push(S),this.tokenStack.push([A,M]),S.position={start:Te(A.start),end:void 0}}function u(S){return A;function A(M){S&&S.call(this,M),c.call(this,M)}}function c(S,A){const M=this.stack.pop(),N=this.tokenStack.pop();if(N)N[0].type!==S.type&&(A?A.call(this,S,N[0]):(N[1]||$n).call(this,S,N[0]));else throw new Error("Cannot close `"+S.type+"` ("+Ye({start:S.start,end:S.end})+"): it’s not open");M.position.end=Te(S.end)}function h(){return ku(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(S){if(this.data.expectingFirstListItemValue){const A=this.stack[this.stack.length-2];A.start=Number.parseInt(this.sliceSerialize(S),10),this.data.expectingFirstListItemValue=void 0}}function p(){const S=this.resume(),A=this.stack[this.stack.length-1];A.lang=S}function w(){const S=this.resume(),A=this.stack[this.stack.length-1];A.meta=S}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function _(){const S=this.resume(),A=this.stack[this.stack.length-1];A.value=S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function C(){const S=this.resume(),A=this.stack[this.stack.length-1];A.value=S.replace(/(\r?\n|\r)$/g,"")}function k(S){const A=this.resume(),M=this.stack[this.stack.length-1];M.label=A,M.identifier=Fe(this.sliceSerialize(S)).toLowerCase()}function v(){const S=this.resume(),A=this.stack[this.stack.length-1];A.title=S}function O(){const S=this.resume(),A=this.stack[this.stack.length-1];A.url=S}function L(S){const A=this.stack[this.stack.length-1];if(!A.depth){const M=this.sliceSerialize(S).length;A.depth=M}}function E(){this.data.setextHeadingSlurpLineEnding=!0}function D(S){const A=this.stack[this.stack.length-1];A.depth=this.sliceSerialize(S).codePointAt(0)===61?1:2}function G(){this.data.setextHeadingSlurpLineEnding=void 0}function $(S){const M=this.stack[this.stack.length-1].children;let N=M[M.length-1];(!N||N.type!=="text")&&(N=ki(),N.position={start:Te(S.start),end:void 0},M.push(N)),this.stack.push(N)}function V(S){const A=this.stack.pop();A.value+=this.sliceSerialize(S),A.position.end=Te(S.end)}function I(S){const A=this.stack[this.stack.length-1];if(this.data.atHardBreak){const M=A.children[A.children.length-1];M.position.end=Te(S.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(A.type)&&($.call(this,S),V.call(this,S))}function P(){this.data.atHardBreak=!0}function H(){const S=this.resume(),A=this.stack[this.stack.length-1];A.value=S}function q(){const S=this.resume(),A=this.stack[this.stack.length-1];A.value=S}function F(){const S=this.resume(),A=this.stack[this.stack.length-1];A.value=S}function ne(){const S=this.stack[this.stack.length-1];if(this.data.inReference){const A=this.data.referenceType||"shortcut";S.type+="Reference",S.referenceType=A,delete S.url,delete S.title}else delete S.identifier,delete S.label;this.data.referenceType=void 0}function te(){const S=this.stack[this.stack.length-1];if(this.data.inReference){const A=this.data.referenceType||"shortcut";S.type+="Reference",S.referenceType=A,delete S.url,delete S.title}else delete S.identifier,delete S.label;this.data.referenceType=void 0}function le(S){const A=this.sliceSerialize(S),M=this.stack[this.stack.length-2];M.label=wp(A),M.identifier=Fe(A).toLowerCase()}function ge(){const S=this.stack[this.stack.length-1],A=this.resume(),M=this.stack[this.stack.length-1];if(this.data.inReference=!0,M.type==="link"){const N=S.children;M.children=N}else M.alt=A}function x(){const S=this.resume(),A=this.stack[this.stack.length-1];A.url=S}function se(){const S=this.resume(),A=this.stack[this.stack.length-1];A.title=S}function he(){this.data.inReference=void 0}function m(){this.data.referenceType="collapsed"}function X(S){const A=this.resume(),M=this.stack[this.stack.length-1];M.label=A,M.identifier=Fe(this.sliceSerialize(S)).toLowerCase(),this.data.referenceType="full"}function Z(S){this.data.characterReferenceType=S.type}function K(S){const A=this.sliceSerialize(S),M=this.data.characterReferenceType;let N;M?(N=Gr(A,M==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):N=en(A);const Y=this.stack.pop();Y.value+=N,Y.position.end=Te(S.end)}function Ae(S){V.call(this,S);const A=this.stack[this.stack.length-1];A.url=this.sliceSerialize(S)}function ke(S){V.call(this,S);const A=this.stack[this.stack.length-1];A.url="mailto:"+this.sliceSerialize(S)}function Pe(){return{type:"blockquote",children:[]}}function ze(){return{type:"code",lang:null,meta:null,value:""}}function xt(){return{type:"inlineCode",value:""}}function xi(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function mi(){return{type:"emphasis",children:[]}}function un(){return{type:"heading",depth:0,children:[]}}function cn(){return{type:"break"}}function pn(){return{type:"html",value:""}}function gi(){return{type:"image",title:null,url:"",alt:null}}function hn(){return{type:"link",title:null,url:"",children:[]}}function dn(S){return{type:"list",ordered:S.type==="listOrdered",start:null,spread:S._spread,children:[]}}function yi(S){return{type:"listItem",spread:S._spread,checked:null,children:[]}}function wi(){return{type:"paragraph",children:[]}}function bi(){return{type:"strong",children:[]}}function ki(){return{type:"text",value:""}}function ji(){return{type:"thematicBreak"}}}function Te(e){return{line:e.line,column:e.column,offset:e.offset}}function ri(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?ri(e,r):Cp(e,r)}}function Cp(e,t){let n;for(n in t)if(ni.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function $n(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ye({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ye({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ye({start:t.start,end:t.end})+") is still open")}function Sp(e){const t=this;t.parser=n;function n(r){return kp(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function vp(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Ep(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Tp(e,t){const n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i}function Ip(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function _p(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ap(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=He(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,a+=1,e.footnoteCounts.set(r,a);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,c),e.applyData(t,c)}function Pp(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zp(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function ii(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function Lp(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ii(e,t);const i={src:He(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Bp(e,t){const n={src:He(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Op(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Mp(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ii(e,t);const i={href:He(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Rp(e,t){const n={href:He(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Dp(e,t,n){const r=e.all(t),i=n?Fp(n):oi(t),o={},l=[];if(typeof t.checked=="boolean"){const h=r[0];let d;h&&h.type==="element"&&h.tagName==="p"?d=h:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const h=r[a];(i||a!==0||h.type!=="element"||h.tagName!=="p")&&l.push({type:"text",value:`
`}),h.type==="element"&&h.tagName==="p"&&!i?l.push(...h.children):l.push(h)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,c),e.applyData(t,c)}function Fp(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=oi(n[r])}return t}function oi(e){const t=e.spread;return t??e.children.length>1}function Np(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function $p(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Hp(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Vp(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Up(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Xt(t.children[1]),u=Dr(t.children[t.children.length-1]);a&&u&&(l.position={start:a,end:u}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function Gp(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let u=-1;const c=[];for(;++u<a;){const d=t.children[u],f={},p=l?l[u]:void 0;p&&(f.align=p);let w={type:"element",tagName:o,properties:f,children:[]};d&&(w.children=e.all(d),e.patch(d,w),w=e.applyData(d,w)),c.push(w)}const h={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,h),e.applyData(t,h)}function Yp(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Hn=9,Vn=32;function qp(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Un(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Un(t.slice(i),i>0,!1)),o.join("")}function Un(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Hn||o===Vn;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Hn||o===Vn;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Wp(e,t){const n={type:"text",value:qp(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Qp(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Xp={blockquote:vp,break:Ep,code:Tp,delete:Ip,emphasis:_p,footnoteReference:Ap,heading:Pp,html:zp,imageReference:Lp,image:Bp,inlineCode:Op,linkReference:Mp,link:Rp,listItem:Dp,list:Np,paragraph:$p,root:Hp,strong:Vp,table:Up,tableCell:Yp,tableRow:Gp,text:Wp,thematicBreak:Qp,toml:Ke,yaml:Ke,definition:Ke,footnoteDefinition:Ke};function Ke(){}const li=-1,dt=0,ot=1,lt=2,rn=3,on=4,ln=5,sn=6,si=7,ai=8,Gn=typeof self=="object"?self:globalThis,Zp=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case dt:case li:return n(l,i);case ot:{const a=n([],i);for(const u of l)a.push(r(u));return a}case lt:{const a=n({},i);for(const[u,c]of l)a[r(u)]=r(c);return a}case rn:return n(new Date(l),i);case on:{const{source:a,flags:u}=l;return n(new RegExp(a,u),i)}case ln:{const a=n(new Map,i);for(const[u,c]of l)a.set(r(u),r(c));return a}case sn:{const a=n(new Set,i);for(const u of l)a.add(r(u));return a}case si:{const{name:a,message:u}=l;return n(new Gn[a](u),i)}case ai:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i)}return n(new Gn[o](l),i)};return r},Yn=e=>Zp(new Map,e)(0),Re="",{toString:Kp}={},{keys:Jp}=Object,Ge=e=>{const t=typeof e;if(t!=="object"||!e)return[dt,t];const n=Kp.call(e).slice(8,-1);switch(n){case"Array":return[ot,Re];case"Object":return[lt,Re];case"Date":return[rn,Re];case"RegExp":return[on,Re];case"Map":return[ln,Re];case"Set":return[sn,Re]}return n.includes("Array")?[ot,n]:n.includes("Error")?[si,n]:[lt,n]},Je=([e,t])=>e===dt&&(t==="function"||t==="symbol"),eh=(e,t,n,r)=>{const i=(l,a)=>{const u=r.push(l)-1;return n.set(a,u),u},o=l=>{if(n.has(l))return n.get(l);let[a,u]=Ge(l);switch(a){case dt:{let h=l;switch(u){case"bigint":a=ai,h=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);h=null;break;case"undefined":return i([li],l)}return i([a,h],l)}case ot:{if(u)return i([u,[...l]],l);const h=[],d=i([a,h],l);for(const f of l)h.push(o(f));return d}case lt:{if(u)switch(u){case"BigInt":return i([u,l.toString()],l);case"Boolean":case"Number":case"String":return i([u,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const h=[],d=i([a,h],l);for(const f of Jp(l))(e||!Je(Ge(l[f])))&&h.push([o(f),o(l[f])]);return d}case rn:return i([a,l.toISOString()],l);case on:{const{source:h,flags:d}=l;return i([a,{source:h,flags:d}],l)}case ln:{const h=[],d=i([a,h],l);for(const[f,p]of l)(e||!(Je(Ge(f))||Je(Ge(p))))&&h.push([o(f),o(p)]);return d}case sn:{const h=[],d=i([a,h],l);for(const f of l)(e||!Je(Ge(f)))&&h.push(o(f));return d}}const{message:c}=l;return i([a,{name:u,message:c}],l)};return o},qn=(e,{json:t,lossy:n}={})=>{const r=[];return eh(!(t||n),!!t,new Map,r)(e),r},st=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Yn(qn(e,t)):structuredClone(e):(e,t)=>Yn(qn(e,t));function th(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function nh(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function rh(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||th,r=e.options.footnoteBackLabel||nh,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const h=e.all(c),d=String(c.identifier).toUpperCase(),f=He(d.toLowerCase());let p=0;const w=[],b=e.footnoteCounts.get(d);for(;b!==void 0&&++p<=b;){w.length>0&&w.push({type:"text",value:" "});let k=typeof n=="string"?n:n(u,p);typeof k=="string"&&(k={type:"text",value:k}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,p),className:["data-footnote-backref"]},children:Array.isArray(k)?k:[k]})}const _=h[h.length-1];if(_&&_.type==="element"&&_.tagName==="p"){const k=_.children[_.children.length-1];k&&k.type==="text"?k.value+=" ":_.children.push({type:"text",value:" "}),_.children.push(...w)}else h.push(...w);const C={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(h,!0)};e.patch(c,C),a.push(C)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...st(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const ui=function(e){if(e==null)return sh;if(typeof e=="function")return ft(e);if(typeof e=="object")return Array.isArray(e)?ih(e):oh(e);if(typeof e=="string")return lh(e);throw new Error("Expected function, string, or object as test")};function ih(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=ui(e[n]);return ft(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function oh(e){const t=e;return ft(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function lh(e){return ft(t);function t(n){return n&&n.type===e}}function ft(e){return t;function t(n,r,i){return!!(ah(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function sh(){return!0}function ah(e){return e!==null&&typeof e=="object"&&"type"in e}const ci=[],uh=!0,Wn=!1,ch="skip";function ph(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=ui(i),l=r?-1:1;a(e,void 0,[])();function a(u,c,h){const d=u&&typeof u=="object"?u:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(u.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=ci,w,b,_;if((!t||o(u,c,h[h.length-1]||void 0))&&(p=hh(n(u,h)),p[0]===Wn))return p;if("children"in u&&u.children){const C=u;if(C.children&&p[0]!==ch)for(b=(r?C.children.length:-1)+l,_=h.concat(C);b>-1&&b<C.children.length;){const k=C.children[b];if(w=a(k,b,_)(),w[0]===Wn)return w;b=typeof w[1]=="number"?w[1]:b+l}}return p}}}function hh(e){return Array.isArray(e)?e:typeof e=="number"?[uh,e]:e==null?ci:[e]}function pi(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),ph(e,o,a,i);function a(u,c){const h=c[c.length-1],d=h?h.children.indexOf(u):void 0;return l(u,d,h)}}const Dt={}.hasOwnProperty,dh={};function fh(e,t){const n=t||dh,r=new Map,i=new Map,o=new Map,l={...Xp,...n.handlers},a={all:c,applyData:mh,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:u,options:n,patch:xh,wrap:yh};return pi(e,function(h){if(h.type==="definition"||h.type==="footnoteDefinition"){const d=h.type==="definition"?r:i,f=String(h.identifier).toUpperCase();d.has(f)||d.set(f,h)}}),a;function u(h,d){const f=h.type,p=a.handlers[f];if(Dt.call(a.handlers,f)&&p)return p(a,h,d);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in h){const{children:b,..._}=h,C=st(_);return C.children=a.all(h),C}return st(h)}return(a.options.unknownHandler||gh)(a,h,d)}function c(h){const d=[];if("children"in h){const f=h.children;let p=-1;for(;++p<f.length;){const w=a.one(f[p],h);if(w){if(p&&f[p-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Qn(w.value)),!Array.isArray(w)&&w.type==="element")){const b=w.children[0];b&&b.type==="text"&&(b.value=Qn(b.value))}Array.isArray(w)?d.push(...w):d.push(w)}}}return d}}function xh(e,t){e.position&&(t.position=Za(e))}function mh(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,st(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function gh(e,t){const n=t.data||{},r="value"in t&&!(Dt.call(n,"hProperties")||Dt.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function yh(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Qn(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Xn(e,t){const n=fh(e,t),r=n.one(e,void 0),i=rh(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function wh(e,t){return e&&"run"in e?async function(n,r){const i=Xn(n,t);await e.run(i,r)}:function(n){return Xn(n,t||e)}}function Zn(e){if(e)throw e}var nt=Object.prototype.hasOwnProperty,hi=Object.prototype.toString,Kn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,er=function(t){return typeof Array.isArray=="function"?Array.isArray(t):hi.call(t)==="[object Array]"},tr=function(t){if(!t||hi.call(t)!=="[object Object]")return!1;var n=nt.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&nt.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||nt.call(t,i)},nr=function(t,n){Kn&&n.name==="__proto__"?Kn(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},rr=function(t,n){if(n==="__proto__")if(nt.call(t,n)){if(Jn)return Jn(t,n).value}else return;return t[n]},bh=function e(){var t,n,r,i,o,l,a=arguments[0],u=1,c=arguments.length,h=!1;for(typeof a=="boolean"&&(h=a,a=arguments[1]||{},u=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});u<c;++u)if(t=arguments[u],t!=null)for(n in t)r=rr(a,n),i=rr(t,n),a!==i&&(h&&i&&(tr(i)||(o=er(i)))?(o?(o=!1,l=r&&er(r)?r:[]):l=r&&tr(r)?r:{},nr(a,{name:n,newValue:e(h,l,i)})):typeof i<"u"&&nr(a,{name:n,newValue:i}));return a};const Ct=_i(bh);function Ft(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function kh(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(u,...c){const h=e[++o];let d=-1;if(u){l(u);return}for(;++d<i.length;)(c[d]===null||c[d]===void 0)&&(c[d]=i[d]);i=c,h?jh(h,a)(...c):l(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function jh(e,t){let n;return r;function r(...l){const a=e.length>l.length;let u;a&&l.push(i);try{u=e.apply(this,l)}catch(c){const h=c;if(a&&n)throw h;return i(h)}a||(u instanceof Promise?u.then(o,i):u instanceof Error?i(u):o(u))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const je={basename:Ch,dirname:Sh,extname:vh,join:Eh,sep:"/"};function Ch(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Xe(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function Sh(e){if(Xe(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function vh(e){Xe(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Eh(...e){let t=-1,n;for(;++t<e.length;)Xe(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Th(n)}function Th(e){Xe(e);const t=e.codePointAt(0)===47;let n=Ih(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Ih(e,t){let n="",r=0,i=-1,o=0,l=-1,a,u;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function Xe(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const _h={cwd:Ah};function Ah(){return"/"}function Nt(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Ph(e){if(typeof e=="string")e=new URL(e);else if(!Nt(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return zh(e)}function zh(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const St=["history","path","basename","stem","extname","dirname"];class di{constructor(t){let n;t?Nt(t)?n={path:t}:typeof t=="string"||Lh(t)?n={value:t}:n=t:n={},this.cwd=_h.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<St.length;){const o=St[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)St.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?je.basename(this.path):void 0}set basename(t){Et(t,"basename"),vt(t,"basename"),this.path=je.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?je.dirname(this.path):void 0}set dirname(t){ir(this.basename,"dirname"),this.path=je.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?je.extname(this.path):void 0}set extname(t){if(vt(t,"extname"),ir(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=je.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Nt(t)&&(t=Ph(t)),Et(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?je.basename(this.path,this.extname):void 0}set stem(t){Et(t,"stem"),vt(t,"stem"),this.path=je.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new re(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function vt(e,t){if(e&&e.includes(je.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+je.sep+"`")}function Et(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function ir(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Lh(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Bh=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};Object.setPrototypeOf(o,r);const l=Object.getOwnPropertyNames(i);for(const a of l){const u=Object.getOwnPropertyDescriptor(i,a);u&&Object.defineProperty(o,a,u)}return o},Oh={}.hasOwnProperty;class an extends Bh{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=kh()}copy(){const t=new an;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ct(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(_t("data",this.frozen),this.namespace[t]=n,this):Oh.call(this.namespace,t)&&this.namespace[t]||void 0:t?(_t("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=et(t),r=this.parser||this.Parser;return Tt("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Tt("process",this.parser||this.Parser),It("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const a=et(t),u=r.parse(a);r.run(u,a,function(h,d,f){if(h||!d||!f)return c(h);const p=d,w=r.stringify(p,f);Dh(w)?f.value=w:f.result=w,c(h,f)});function c(h,d){h||!d?l(h):o?o(d):n(void 0,d)}}}processSync(t){let n=!1,r;return this.freeze(),Tt("processSync",this.parser||this.Parser),It("processSync",this.compiler||this.Compiler),this.process(t,i),lr("processSync","process",n),r;function i(o,l){n=!0,Zn(o),r=l}}run(t,n,r){or(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const u=et(n);i.run(t,u,c);function c(h,d,f){const p=d||t;h?a(h):l?l(p):r(void 0,p,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),lr("runSync","run",r),i;function o(l,a){Zn(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=et(n),i=this.compiler||this.Compiler;return It("stringify",i),or(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(_t("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[h,...d]=c;u(h,d)}else l(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function l(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=Ct(!0,i.settings,c.settings))}function a(c){let h=-1;if(c!=null)if(Array.isArray(c))for(;++h<c.length;){const d=c[h];o(d)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,h){let d=-1,f=-1;for(;++d<r.length;)if(r[d][0]===c){f=d;break}if(f===-1)r.push([c,...h]);else if(h.length>0){let[p,...w]=h;const b=r[f][1];Ft(b)&&Ft(p)&&(p=Ct(!0,b,p)),r[f]=[c,p,...w]}}}}const Mh=new an().freeze();function Tt(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function It(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function _t(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function or(e){if(!Ft(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function lr(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function et(e){return Rh(e)?e:new di(e)}function Rh(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Dh(e){return typeof e=="string"||Fh(e)}function Fh(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Nh="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",sr=[],ar={allowDangerousHtml:!0},$h=/^(https?|ircs?|mailto|xmpp)$/i,Hh=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Vh(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",i=e.className,o=e.components,l=e.disallowedElements,a=e.rehypePlugins||sr,u=e.remarkPlugins||sr,c=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ar}:ar,h=e.skipHtml,d=e.unwrapDisallowed,f=e.urlTransform||Uh,p=Mh().use(Sp).use(u).use(wh,c).use(a),w=new di;typeof r=="string"&&(w.value=r);for(const k of Hh)Object.hasOwn(e,k.from)&&(""+k.from+(k.to?"use `"+k.to+"` instead":"remove it")+Nh+k.id,void 0);const b=p.parse(w);let _=p.runSync(b,w);return i&&(_={type:"element",tagName:"div",properties:{className:i},children:_.type==="root"?_.children:[_]}),pi(_,C),ru(_,{Fragment:s.Fragment,components:o,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function C(k,v,O){if(k.type==="raw"&&O&&typeof v=="number")return h?O.children.splice(v,1):O.children[v]={type:"text",value:k.value},v;if(k.type==="element"){let L;for(L in bt)if(Object.hasOwn(bt,L)&&Object.hasOwn(k.properties,L)){const E=k.properties[L],D=bt[L];(D===null||D.includes(k.tagName))&&(k.properties[L]=f(String(E||""),L,k))}}if(k.type==="element"){let L=t?!t.includes(k.tagName):l?l.includes(k.tagName):!1;if(!L&&n&&typeof v=="number"&&(L=!n(k,v,O)),L&&O&&typeof v=="number")return d&&k.children?O.children.splice(v,1,...k.children):O.children.splice(v,1),v}}}function Uh(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t<0||i>-1&&t>i||n>-1&&t>n||r>-1&&t>r||$h.test(e.slice(0,t))?e:""}const Gh=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"brand_awareness",children:[s.jsx("mask",{id:"mask0_3696_4540",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_3696_4540)",children:s.jsx("path",{id:"brand_awareness_2",d:"M15.577 10.625H13.8142C13.6368 10.625 13.4883 10.5652 13.3687 10.4455C13.249 10.3259 13.1892 10.1774 13.1892 10C13.1892 9.82269 13.249 9.67419 13.3687 9.55454C13.4883 9.43489 13.6368 9.37506 13.8142 9.37506H15.577C15.7543 9.37506 15.9028 9.43489 16.0225 9.55454C16.1421 9.67419 16.202 9.82269 16.202 10C16.202 10.1774 16.1421 10.3259 16.0225 10.4455C15.9028 10.5652 15.7543 10.625 15.577 10.625ZM12.1106 13.9279C12.2175 13.7816 12.354 13.6972 12.5201 13.6747C12.6862 13.6523 12.8425 13.6945 12.9888 13.8013L14.3943 14.8574C14.5406 14.9642 14.625 15.1007 14.6475 15.2669C14.6699 15.433 14.6277 15.5892 14.5209 15.7356C14.4141 15.882 14.2776 15.9664 14.1114 15.9888C13.9453 16.0112 13.7891 15.969 13.6427 15.8622L12.2372 14.8061C12.0909 14.6993 12.0065 14.5628 11.9841 14.3967C11.9616 14.2305 12.0038 14.0743 12.1106 13.9279ZM14.3622 5.1106L12.9568 6.16671C12.8104 6.27354 12.6542 6.31574 12.488 6.29331C12.3219 6.27087 12.1854 6.18646 12.0786 6.0401C11.9718 5.89374 11.9296 5.7375 11.952 5.57137C11.9744 5.40525 12.0588 5.26876 12.2052 5.16192L13.6106 4.10583C13.757 3.999 13.9133 3.9568 14.0794 3.97923C14.2455 4.00166 14.382 4.08606 14.4888 4.23244C14.5957 4.3788 14.6379 4.53504 14.6154 4.70116C14.593 4.86729 14.5086 5.00377 14.3622 5.1106ZM6.05778 12.0834H3.71805C3.5033 12.0834 3.32408 12.0115 3.18039 11.8678C3.03669 11.7241 2.96484 11.5449 2.96484 11.3301V8.66994C2.96484 8.4552 3.03669 8.27599 3.18039 8.13229C3.32408 7.98858 3.5033 7.91673 3.71805 7.91673H6.05778L8.55134 5.42317C8.75114 5.22339 8.9811 5.17771 9.24124 5.28614C9.50138 5.39459 9.63145 5.5909 9.63145 5.87508V14.125C9.63145 14.4092 9.50138 14.6055 9.24124 14.7139C8.9811 14.8224 8.75114 14.7767 8.55134 14.5769L6.05778 12.0834Z",fill:"currentColor"})})]})}),Yh=({trend:e,onClose:t,selectTrending:n})=>{var w,b;const[r,i]=z.useState(!1),{close:o}=At("briefDescription"),{currentPlayingAudio:l,setCurrentPlayingAudio:a}=pe(_=>_),u=z.useRef(null),c=()=>n(e.name),h=z.useCallback(()=>{t(),o()},[t,o]),d=()=>{u.current&&(r?u.current.pause():u.current.play(),i(!r))},f=()=>{var C,k,v;const _=!((C=l==null?void 0:l.current)!=null&&C.paused);_&&((k=l==null?void 0:l.current)==null||k.pause(),a(null)),(((v=l==null?void 0:l.current)==null?void 0:v.src)!==e.audio_EN||!_)&&d()};z.useEffect(()=>(window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}),[h]);const p=((w=l==null?void 0:l.current)==null?void 0:w.src)===e.audio_EN&&!((b=l==null?void 0:l.current)!=null&&b.paused)||r;return s.jsxs(bo,{id:"briefDescription",kind:"regular",noWrap:!0,onClose:h,preventOutsideClose:!0,children:[e.audio_EN?s.jsxs(s.Fragment,{children:[s.jsxs(Zh,{children:[s.jsx(ur,{className:Ie("default",{play:p}),onClick:f,size:"small",startIcon:p?s.jsx(ut,{}):s.jsx(Gh,{}),children:p?"Pause":"Listen"}),s.jsx(ur,{className:"default",onClick:c,size:"small",startIcon:s.jsx(Bi,{}),children:"Learn More"})]}),s.jsx(Xh,{ref:u,src:e.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null,s.jsxs(g,{mt:75,children:[s.jsx(Qh,{children:e.tldr_topic??e.name}),s.jsx(qh,{children:s.jsx(g,{children:s.jsx(Wh,{children:e.tldr&&s.jsx(Vh,{children:e.tldr})})})})]})]})},qh=j.div`
  max-height: 310px;
  overflow-y: auto;
  margin: 8px 0;
  padding: 0 20px;
`,Wh=j(J)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,Qh=j(J)`
  font-weight: 600;
  font-size: 20px;
  padding: 0 20px;
`,Xh=j.audio`
  display: none;
`,ur=j(we)`
  && {
    &.default {
      font-size: 13px;
      font-weight: 500;
      font-family: Barlow;
      padding: 12px, 16px, 12px, 10px;

      &.play {
        color: ${y.BG3};
        background-color: ${y.white};
      }
    }
  }
`,Zh=j(g)`
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
`,Kh=["Drivechain","Ordinals","L402","Nostr","AI"],Jh=({onSubmit:e})=>{var V;const{open:t}=At("addContent"),[n,r]=z.useState(!1),[i,o]=z.useState(!1),[l,a]=z.useState(null),u=z.useRef(null),[c,h]=z.useState(0),[d,f]=z.useState(!1),{currentPlayingAudio:p,setCurrentPlayingAudio:w}=pe(I=>I),{open:b}=At("briefDescription"),{trendingTopics:_,setTrendingTopics:C}=fe(I=>I),{setValue:k}=fr(),v=z.useCallback(async()=>{r(!0),o(!1),h(0),f(!1),w(null);try{const I=await Ai();I.length&&Array.isArray(I)&&C(I)}catch{C(Kh.map(P=>({name:P,count:0})))}finally{r(!1)}},[w,C]);z.useEffect(()=>{_.length||v()},[v,_.length]),z.useEffect(()=>{const I=setTimeout(()=>{o(!0)},5e3);return()=>clearTimeout(I)},[o,n]);const O=I=>{k("search",I),e==null||e()},L=(I,P)=>{I.stopPropagation(),I.currentTarget.blur(),P!=null&&P.tldr&&(a(P),b())},E=()=>{a(null)},D=I=>{I.stopPropagation(),I.currentTarget.blur(),f(!d),w(u)};z.useEffect(()=>{var I,P;d?(I=u.current)==null||I.play():(P=u.current)==null||P.pause()},[c,d]),z.useEffect(()=>{p||f(!1)},[p]);const G=()=>{h(I=>{var H,q;let P=(I+1)%_.length;for(;P!==I&&!((H=_[P])!=null&&H.audio_EN);)P=(P+1)%_.length;return P===I?(f(!1),P):((q=u.current)==null||q.load(),P===0&&(f(!1),h(0)),P)}),w(u)},$=n?"Loading":"No new trending topics in the last 24 hours";return s.jsxs(t0,{"data-testid":"trending-component",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Trending Topics"}),s.jsx("span",{className:"heading__icon",children:n?s.jsx(Vt,{color:y.white,size:16}):s.jsx(s.Fragment,{children:i?s.jsx(r0,{onClick:v,size:"small",startIcon:s.jsx(ma,{})}):s.jsx(ga,{})})})]}),jo(_)?s.jsxs("div",{children:[s.jsx(we,{onClick:I=>D(I),startIcon:d?s.jsx(ut,{}):s.jsx(Ht,{}),children:d?"Pause":"Play All"}),s.jsx(l0,{ref:u,onEnded:G,src:(V=_[c])==null?void 0:V.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null]}),_.length===0?s.jsxs("div",{className:"trending-empty",children:[s.jsx(n0,{children:$}),s.jsx(we,{color:"secondary",disabled:n,onClick:t,size:"medium",startIcon:s.jsx(wo,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):s.jsx("ul",{className:"list",children:_.map((I,P)=>s.jsxs(g,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>O(I.name),children:[s.jsxs(e0,{children:[s.jsx(o0,{children:s.jsx(xa,{})}),s.jsx("span",{className:"tldr",children:Co(I)})]}),I.tldr&&s.jsx(i0,{className:Ie({isPlaying:c===P&&d}),onClick:H=>L(H,I),children:"TLDR"})]},I.name))})]}),l&&s.jsx(Yh,{onClose:E,selectTrending:O,trend:l})]})},e0=j.div`
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
`,t0=j(g)`
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
`,n0=j.p`
  color: ${y.GRAY6};
  margin-bottom: 20px;
`,r0=j(we)`
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
`,i0=j(we)`
  && {
    &.isPlaying {
      font-weight: 700;
      color: ${y.BG1};
      background-color: ${y.white};
    }
  }
`,o0=j.span`
  justify-content: center;
  align-items: center;
  color: ${y.GRAY6};
  margin-right: 4px;
`,l0=j.audio`
  height: 0;
  width: 0;
`,s0=390,a0=z.forwardRef(({onSubmit:e,subViewOpen:t},n)=>{const{isFetching:r,setTeachMe:i,setSidebarFilter:o}=fe(k=>k),l=cr(),{setSidebarOpen:a,currentSearch:u,clearSearch:c,searchFormValue:h}=pe(k=>k),[d]=Pi(k=>[k.trendingTopicsFeatureFlag]),{setValue:f,watch:p}=fr(),w=z.useRef(null),[b,_]=z.useState(!1);z.useEffect(()=>{f("search",h)},[f,h]),z.useEffect(()=>{const k=w.current;if(!k)return;const v=()=>{_((k==null?void 0:k.scrollTop)>0)};k.addEventListener("scroll",v)},[]);const C=p("search");return s.jsxs(p0,{ref:n,id:"sidebar-wrapper",children:[s.jsx(g0,{}),s.jsxs(fi,{className:Ie({"has-shadow":b}),children:[s.jsxs(h0,{children:[s.jsx(ro,{onSubmit:e}),s.jsx(f0,{"data-testid":"search_action_icon",onClick:()=>{if(u){f("search",""),c(),o("all");return}C.trim()!==""&&(e==null||e())},children:r?s.jsx(Vt,{color:y.SECONDARY_BLUE,"data-testid":"loader",size:"20"}):s.jsx(s.Fragment,{children:u!=null&&u.trim()?s.jsx(Oi,{}):s.jsx(Mi,{})})})]}),u&&s.jsx(d0,{children:r?s.jsx(Po,{}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"left",children:[s.jsx("span",{className:"count",children:l.length}),s.jsx("span",{className:"label",children:" results"})]}),s.jsx("div",{className:"right",style:{alignItems:"center"},children:s.jsx(To,{})})]})})]}),!t&&s.jsx(x0,{onClick:()=>{a(!1),i(!1)},children:s.jsx(Cr,{})}),s.jsxs(m0,{ref:w,children:[!u&&d&&s.jsx(y0,{children:s.jsx(Jh,{onSubmit:e})}),s.jsx(g,{children:r?s.jsx(al,{}):s.jsx(ol,{isSearchResult:!!u})})]})]})}),u0=["topic","person","guest","event","organization","place","project","software"],c0=({onSubmit:e})=>{const{sidebarIsOpen:t}=pe(o=>o),n=xe(),r=!!n&&t&&!u0.includes(n.node_type),{showTeachMe:i}=fe(o=>o);return s.jsxs(s.Fragment,{children:[s.jsx(qt,{direction:"right",in:t,mountOnEnter:!0,unmountOnExit:!0,children:s.jsx(a0,{onSubmit:e,subViewOpen:r})}),s.jsx(aa,{open:r||!!i}),!t&&s.jsx(da,{})]})},p0=j(g)(({theme:e})=>({position:"relative",background:y.BG1,height:"100vh",width:"100%",zIndex:30,[e.breakpoints.up("sm")]:{width:s0}})),fi=j(g).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:e})=>({padding:e.spacing(3.75,2),[e.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:y.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),h0=j(g).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,d0=j(g).attrs({direction:"row",justify:"space-between",align:"center"})`
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
`,f0=j(g).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${y.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${y.gray200}; */
  }

  ${fi} input:focus + & {
    color: ${y.primaryBlue};
  }
`,x0=j(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),m0=j(g)(()=>({overflow:"auto",flex:1,width:"100%"})),g0=j(g)`
  height: 64px;
  background: ${y.BG2};
`,y0=j(g)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`;c0.displayName="Sidebar";export{s0 as MENU_WIDTH,c0 as SideBar};
