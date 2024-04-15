import{aT as ji,r as P,f as C,h as k,i as pe,j as s,l as Ue,F as g,T as K,N as $t,k as ge,aU as ar,aV as Ci,x as ur,o as Si,aW as vi,O as Ei,a3 as he,aX as dn,a1 as Ti,aY as fn,ac as Ii,aZ as Ai,I as Pi}from"./index-b85f35cf.js";import{k as zi,l as mt,A as ye,B as ce,d as _i,I as cr,f as at,g as pr,m as ut,P as Ht,C as Vt,n as Li,i as hr,b as Bi,S as Oi}from"./react-toastify.esm-ce67a4f9.js";import{C as dr}from"./CheckIcon-b94a1aa2.js";import{C as fr}from"./ChevronDownIcon-cf5b6e54.js";import{d as Mi}from"./ChevronUpIcon-6e1fca04.js";import{F as xr,a as Ri,T as Di}from"./Popover-28c1573e.js";import{G as mr,L as Ut,B as Gt,H as Fi,M as Ni,R as $i,a as Hi,S as Vi,b as Ui,N as gr,C as Gi,D as yr,c as wr,d as Yi,f as qi,g as kr,e as Wi,P as Qi,h as br,s as xn,V as Xi,F as Zi,E as Ki,i as Ji,j as eo,k as jr,l as to}from"./ChevronRightIcon-27a1f67e.js";import{S as no}from"./index-f774867a.js";import{f as rt,o as Cr,P as Sr,n as ro,X as io,Y as oo,T as lo,D as so,S as Yt,q as vr}from"./generateCategoricalChart-a6175423.js";import{T as We}from"./index-1e89d407.js";import{S as ao}from"./Skeleton-bd55acf5.js";import{g as uo,d as co}from"./index.esm-ac56504e.js";import{I as po,S as ho,O as fo}from"./Select-f3cb55de.js";import{I as xo}from"./InfoIcon-de2f1e11.js";import{P as mo}from"./PlusIcon-261fd641.js";import{u as Pt}from"./index-b9c9b7e2.js";import{B as go}from"./index-0c223900.js";import"./index-341edfe1.js";import"./useSlotProps-b8a587b0.js";const yo=(e,t="down")=>{const n=ji(),[r,i]=P.useState(!1),o=n.breakpoints[t](e).split("@media")[1].trim();return P.useEffect(()=>{const l=()=>{const{matches:a}=window.matchMedia(o);i(a)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[o]),r},wo=e=>e.filter(t=>t.tldr).length>=2&&e.some(t=>t.audio_EN);function ko(e){return e.tldr_topic??e.name}var it=globalThis&&globalThis.__assign||function(){return it=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},it.apply(this,arguments)},bo=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},jo=zi("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function Co(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?"#000000":r,o=e.speedMultiplier,l=o===void 0?1:o,a=e.cssOverride,u=a===void 0?{}:a,c=e.size,h=c===void 0?15:c,d=e.margin,f=d===void 0?2:d,p=bo(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),w=it({display:"inherit"},u),y=function(I){return{display:"inline-block",backgroundColor:i,width:mt(h),height:mt(h),margin:mt(f),borderRadius:"100%",animation:"".concat(jo," ").concat(.7/l,"s ").concat(I%2?"0s":"".concat(.35/l,"s")," infinite linear"),animationFillMode:"both"}};return n?P.createElement("span",it({style:w},p),P.createElement("span",{style:y(1)}),P.createElement("span",{style:y(2)}),P.createElement("span",{style:y(3)})):null}const So=()=>{var d;const[e,t]=P.useState(null),{sidebarFilter:n,setSidebarFilter:r,sidebarFilterCounts:i}=pe(f=>f),o=n==="undefined"?"Other":n,l=((d=i.find(f=>f.name===o))==null?void 0:d.count)||0,a=f=>f?f.charAt(0).toUpperCase()+f.slice(1):"",u=f=>{t(f.currentTarget)},c=()=>{t(null)},h=f=>{r(f),c()};return s.jsxs("div",{children:[s.jsxs(vo,{onClick:u,children:[s.jsx("div",{className:"text",children:"Show"}),s.jsx("div",{className:"value","data-testid":"value",children:`${a(o)} (${l})`}),s.jsx("div",{className:"icon",children:e?s.jsx(Mi,{}):s.jsx(fr,{})})]}),s.jsx(To,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:c,open:!!e,transformOrigin:{vertical:"top",horizontal:"left"},children:s.jsx(xr,{children:i.map(({name:f,count:p})=>s.jsxs(Eo,{className:Ue({active:f===n}),onClick:()=>h(f),children:[s.jsx("span",{className:"icon",children:f===n?s.jsx(dr,{}):null}),s.jsx("span",{children:`${a(f)} (${p})`})]},f))})})]})},vo=C(g).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${k.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${k.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,Eo=C(g).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${k.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${k.white};
  }
  &:hover {
    color: ${k.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,To=C(Ri)`
  .MuiPaper-root {
    background: ${k.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${k.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,gt=[["Searching","Podcast Index"],["Searching","YouTube"],["Searching","Twitter Spaces"],["Finding","Transcripts"],["Loading","Audio Clips"],["Loading","Video Clips"],["Preparing","Results"]],Io=()=>{const[e,t]=P.useState(0);return P.useEffect(()=>{if(e===gt.length-1)return;const n=setTimeout(()=>t(r=>(r+1)%gt.length),2e3);return()=>clearTimeout(n)},[e]),s.jsx(Ao,{direction:"column",children:gt.map((n,r)=>s.jsxs(g,{className:Ue("raw-wrapper",{show:e===r}),direction:"row",children:[s.jsx("div",{className:Ue("action"),children:n[0]}),s.jsx("div",{className:Ue("entity"),children:n[1]}),s.jsx("div",{children:s.jsx(Co,{color:k.SECONDARY_BLUE,size:2})})]},n[1]))})},Ao=C(g)`
  overflow: hidden;
  height: 20px;
  position: relative;
  .action {
    color: ${k.white};
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
    color: ${k.SECONDARY_BLUE};
  }
`,Po=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"browse_gallery",children:[s.jsx("mask",{id:"mask0_1360_27257",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1360_27257)",children:s.jsx("path",{id:"browse_gallery_2",d:"M11.8 15.8442L12.8442 14.8L9.74998 11.7026V7.25003H8.25003V12.2942L11.8 15.8442ZM18 19.9615V18.3C19.2333 17.7167 20.2083 16.8583 20.925 15.725C21.6417 14.5917 22 13.35 22 12C22 10.65 21.6417 9.40834 20.925 8.27501C20.2083 7.14167 19.2333 6.28334 18 5.70001V4.03851C19.6628 4.67184 20.9952 5.71318 21.9971 7.16253C22.999 8.61188 23.5 10.2244 23.5 12C23.5 13.7756 22.999 15.3881 21.9971 16.8375C20.9952 18.2868 19.6628 19.3282 18 19.9615ZM9.00055 20.5C7.8207 20.5 6.71539 20.2769 5.68463 19.8307C4.65386 19.3846 3.75514 18.7782 2.98848 18.0115C2.22181 17.2449 1.61541 16.3463 1.16927 15.3159C0.723092 14.2855 0.5 13.1804 0.5 12.0006C0.5 10.8207 0.723083 9.7154 1.16925 8.68463C1.6154 7.65386 2.2218 6.75515 2.98845 5.98848C3.75512 5.22183 4.65365 4.61543 5.68405 4.16928C6.71445 3.72311 7.81957 3.50003 8.99942 3.50003C10.1793 3.50003 11.2846 3.72311 12.3154 4.16928C13.3461 4.61543 14.2448 5.22183 15.0115 5.98848C15.7782 6.75515 16.3846 7.65368 16.8307 8.68408C17.2769 9.71448 17.5 10.8196 17.5 11.9995C17.5 13.1793 17.2769 14.2846 16.8307 15.3154C16.3846 16.3461 15.7782 17.2449 15.0115 18.0115C14.2448 18.7782 13.3463 19.3846 12.3159 19.8307C11.2855 20.2769 10.1804 20.5 9.00055 20.5ZM9 19C10.95 19 12.6042 18.3208 13.9625 16.9625C15.3208 15.6042 16 13.95 16 12C16 10.05 15.3208 8.39584 13.9625 7.03751C12.6042 5.67917 10.95 5.00001 9 5.00001C7.05 5.00001 5.39583 5.67917 4.0375 7.03751C2.67917 8.39584 2 10.05 2 12C2 13.95 2.67917 15.6042 4.0375 16.9625C5.39583 18.3208 7.05 19 9 19Z",fill:"currentColor"})})]})}),zo=e=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("mask",{id:"mask0_2638_2680",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_2638_2680)",children:s.jsx("path",{d:"M9.99732 16C9.90858 16 9.82421 15.985 9.74419 15.9551C9.66418 15.9252 9.5909 15.8765 9.52435 15.8091L6.18835 12.4277C6.06278 12.3004 6 12.1406 6 11.9483C6 11.7559 6.06278 11.5961 6.18835 11.4689C6.32145 11.3315 6.48099 11.2648 6.66697 11.2686C6.85295 11.2724 7.00873 11.3392 7.13429 11.4689L9.32114 13.674V4.68539C9.32114 4.49306 9.3864 4.33074 9.51692 4.19845C9.64744 4.06615 9.80758 4 9.99732 4C10.1871 4 10.3472 4.06615 10.4777 4.19845C10.6082 4.33074 10.6735 4.49306 10.6735 4.68539V13.674L12.849 11.4689C12.9845 11.3315 13.1447 11.2629 13.3294 11.2629C13.5143 11.2629 13.6744 11.3315 13.8099 11.4689C13.9378 11.6062 14.0012 11.7685 14 11.9558C13.9988 12.1431 13.9354 12.3004 13.8099 12.4277L10.4738 15.8091C10.4073 15.8765 10.3334 15.9252 10.2522 15.9551C10.171 15.985 10.0861 16 9.99732 16Z",fill:"currentColor"})})]}),_o=C(g)`
  overflow-y: auto;
  overflow-x: hidden;
  background: ${k.body};
`,Lo=({imageUrl:e,name:t})=>s.jsxs(g,{align:"center",direction:"row",children:[e&&s.jsx(Bo,{children:s.jsx(ye,{rounded:!0,size:64,src:e||"",type:"image"})}),t&&s.jsx(Oo,{children:t})]}),Bo=C(g)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Oo=C(g)`
  color: ${k.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Mo=({text:e,type:t,sourceLink:n})=>s.jsxs(g,{direction:"column",children:[s.jsx(g,{align:"center",direction:"row",children:s.jsx(We,{type:t})}),s.jsx(zt,{"data-testid":"episode-description",children:e}),s.jsx(g,{align:"center",direction:"row",justify:"flex-start",children:n&&s.jsxs(Ro,{href:n,onClick:r=>r.stopPropagation(),target:"_blank",children:[s.jsx(mr,{}),s.jsx(Do,{children:n})]})})]}),Ro=C.a`
  color: ${k.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Do=C(K)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${k.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Fo=({title:e,imageUrl:t,name:n})=>s.jsxs(g,{align:"center",direction:"row",children:[s.jsx(No,{children:s.jsx(ye,{rounded:!0,size:64,src:t||"",type:"person"})}),(e||n)&&s.jsx($o,{children:e||n})]}),No=C(g)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,$o=C(g)`
  color: ${k.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Ho=({text:e,imageUrl:t,date:n,twitterHandle:r,name:i,verified:o})=>s.jsxs(g,{direction:"column",children:[s.jsxs(g,{align:"center",direction:"row",pr:16,children:[s.jsx(Vo,{children:s.jsx(ye,{rounded:!0,size:27,src:t||"",type:"person"})}),s.jsxs(g,{children:[s.jsxs(Uo,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),r&&s.jsxs(Go,{children:["@",r]})]})]}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Yo,{"data-testid":"episode-description",children:e}),s.jsx(g,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!n&&s.jsx(ct,{children:$t.unix(n).fromNow()})})]})]}),Vo=C(g)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Uo=C(g)`
  color: ${k.white};
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
  .verification {
    margin-left: 4px;
  }
`,Go=C(g)`
  color: ${k.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,Yo=C(g)`
  color: ${k.white};
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
`,qo=C(g).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${k.BG1};

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
`,Er=({boostCount:e,date:t,episodeTitle:n,isSelectedView:r=!1,imageUrl:i,showTitle:o,type:l,text:a,name:u,sourceLink:c,verified:h=!1,twitterHandle:d,className:f="episode-wrapper",onClick:p})=>{const w=l==="show"?o:n,y=l==="show"?"":o,I=["tweet","person","guest","topic","document"],j=l==="youtube"?"video":"audio";return l?s.jsx(qo,{className:f,onClick:p,children:I.includes(l)?s.jsxs(s.Fragment,{children:[l==="topic"&&s.jsxs(Wo,{children:[s.jsx(Fi,{}),s.jsx("p",{children:y})]}),["person","guest"].includes(l)&&s.jsx(Fo,{imageUrl:i,name:u||"",title:o||""}),["image"].includes(l)&&s.jsx(Lo,{imageUrl:c,name:u||""}),l==="tweet"&&s.jsx(Ho,{date:t,imageUrl:i,name:u||"",text:a||"",twitterHandle:d,verified:h}),l==="document"&&s.jsx(Mo,{sourceLink:c||"",text:a||"",type:l})]}):s.jsxs(g,{direction:"row",children:[!r&&s.jsx(g,{align:"center",pr:16,children:s.jsx(ye,{size:64,src:i||`${j}_default.svg`,type:l||""})}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsxs(g,{align:"center",direction:"row",justify:"space-between",children:[s.jsx(g,{align:"center",direction:"row",children:l&&s.jsx(We,{type:l})}),l==="youtube"&&c?s.jsx(Xo,{href:`${c}${c.includes("?")?"&":"?"}open=system`,onClick:S=>S.stopPropagation(),target:"_blank",children:s.jsx(Ut,{})}):null]}),s.jsx(zt,{"data-testid":"episode-name",children:u}),s.jsx(zt,{"data-testid":"episode-description",children:w}),s.jsxs(g,{align:"center",direction:"row",justify:"flex-start",children:[!!t&&s.jsx(ct,{children:$t.unix(t).fromNow()}),!!y&&s.jsx(Qo,{children:y}),!r&&e>0&&s.jsx(g,{style:{marginLeft:"auto"},children:s.jsx(Gt,{amt:e})})]})]})]})}):null},zt=C(g)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: ${k.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
`,ct=C(K)`
  overflow: hidden;
  color: ${k.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
  letter-spacing: 0.2pt;
`,Wo=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    color: ${k.mainBottomIcons};
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
`,Qo=C(ct)`
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  padding-left: 12px;
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
    background: ${k.GRAY6};

    margin-top: 20px;
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
`,Xo=C.a`
  color: ${k.GRAY6};
  font-size: 16px;
  height: 16px;
`,Zo=({isSearchResult:e})=>{const t=P.useRef(null),n=e?80:10,{setSelectedNode:r,setSelectedTimestamp:i}=pe(j=>j),{currentSearch:o,setSidebarOpen:l,setRelevanceSelected:a}=ge(j=>j),[u,c]=P.useState(0),h=ar(),f=u*n+n,p=h&&h.length>0?h.length-1>f:!1,w=yo("sm","down"),y=P.useCallback(j=>{Ci(j),i(j),a(!0),r(j),w&&l(!1)},[r,a,l,i,w]),I=P.useMemo(()=>{if(h){const j=[...h].sort((S,T)=>(T.date||0)-(S.date||0));return o&&j.sort((S,T)=>{const R=S.node_type==="topic"&&S.name.toLowerCase()===o.toLowerCase()?1:0;return(T.node_type==="topic"&&T.name.toLowerCase()===o.toLowerCase()?1:0)-R}),j.slice(0,f)}return[]},[h,o,f]);return s.jsx(s.Fragment,{children:s.jsxs(_o,{ref:t,id:"search-result-list",shrink:1,children:[(I??[]).map((j,S)=>{const{image_url:T,date:R,boost:O,type:v,episode_title:$,show_title:W,node_type:z,text:B,source_link:L,link:_,name:Y,verified:Z=!1,twitter_handle:N}=j||{};return s.jsx(Er,{boostCount:O||0,date:R||0,episodeTitle:rt($),imageUrl:T||"",link:_,name:Y||"",onClick:()=>{y(j)},showTitle:rt(W),sourceLink:L,text:B||"",twitterHandle:N,type:z||v,verified:Z},S.toString())}),s.jsx(Jo,{align:"center",background:"BG1",direction:"row",justify:"center",children:p&&s.jsx(ce,{onClick:()=>{p&&c(u+1)},size:"medium",children:"Load More"})})]})})},Ko=P.memo(Zo),Jo=C(g)`
  flex: 0 0 86px;
`,el=({isSearchResult:e})=>{const{nodeCount:t,setNodeCount:n,setBudget:r}=ur(l=>l),{fetchData:i}=pe(l=>l),o=async()=>{t<1||(await i(r,{skip_cache:"true"}),n("CLEAR"))};return s.jsxs(rl,{children:[!e&&s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Latest"}),s.jsx("span",{className:"heading__icon",children:s.jsx(Po,{})})]}),t?s.jsx("div",{className:"button_container",children:s.jsx(tl,{className:"button",onClick:o,startIcon:s.jsx(zo,{}),children:`See Latest (${t})`})}):null]}),s.jsx(Ko,{isSearchResult:e})]})},tl=C(ce)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${k.GRAY6};
    }
  }
`,nl=P.memo(el),rl=C(g)`
  .heading-container {
    display: flex;
    flex-direction: column;
    padding: 16px 24px 16px 24px;
  }

  .heading {
    color: ${k.GRAY6};
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
      color: ${k.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${k.SECONDARY_BLUE};
      }

      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${k.PRIMARY_BLUE};
      }
    }
  }
`,il=C(g).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${k.BG1};

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
`,Ze=C(ao)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,ol=()=>s.jsx(s.Fragment,{children:Array(7).fill(null).map((e,t)=>s.jsx(il,{children:s.jsxs(g,{direction:"row",children:[s.jsx(g,{align:"center",pr:16,children:s.jsx(Ze,{animation:"wave",height:64,variant:"rectangular",width:64})}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Ze,{height:10,variant:"rectangular",width:56}),s.jsx(Ze,{className:"title",height:10,variant:"rectangular",width:262}),s.jsx(Ze,{height:10,variant:"rectangular",width:149})]})]})},t))});C(g)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${k.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`;const ll=C(K)`
  overflow: hidden;
  color: ${k.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`;C(ll)`
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
    background: ${k.GRAY6};
  }
`;const sl=48,al=8,ul={PaperProps:{style:{maxHeight:sl*4.5+al,width:250}}},cl=["Beginner","Intermediate","Advanced","Expert"],pl=()=>{const e=pe(S=>S.data),[t,n]=P.useState(""),[r,i]=P.useState("Beginner"),o=ge(S=>S.currentSearch),l=_i(),[a]=ur(S=>[S.setBudget]),[u,c,h,d,f]=Cr(S=>[S.askedQuestions,S.askedQuestionsAnswers,S.setAskedQuestion,S.setAskedQuestionAnswer,S.hasQuestionInProgress]),p=P.useCallback(S=>{d(S.answer)},[d]);P.useEffect(()=>{l&&p&&l.on("askquestionhook",p)},[p,l]);const w=async()=>{t&&(h(t),n(""));try{const S=e==null?void 0:e.nodes.filter(O=>O.text),T=S==null?void 0:S.slice(0,5),R=(T!=null&&T.length?T.map(O=>O.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,O=>`\\${O}`);o&&(await Si.enable(),await vi({expertise_level:r,question_text:t,search_term:o,transcripts:R},a),await Ei(a))}catch(S){console.error(S)}},y=r&&t.trim()&&!f,I=S=>{i(S.target.value)},j=async S=>{if(f){S.preventDefault();return}S.keyCode===13&&S.shiftKey===!1&&y&&(S.preventDefault(),w())};return s.jsxs(hl,{children:[s.jsx(g,{children:s.jsx(g,{children:s.jsxs(xr,{component:"div",children:[s.jsx(fl,{id:"select-label",size:"small",children:"Expertise level"}),s.jsx(xl,{id:"demo-multiple-name",input:s.jsx(fo,{label:"Expertise level"}),labelId:"select-label",MenuProps:ul,onChange:I,size:"small",value:r,children:cl.map(S=>s.jsx(Ni,{component:"li",value:S,children:S},S))})]})})}),s.jsx(yl,{children:u==null?void 0:u.map((S,T)=>s.jsxs(g,{className:"response",py:12,children:[s.jsx(K,{kind:"medium",children:S}),s.jsx(g,{py:12,children:(c==null?void 0:c[T])!==void 0?s.jsx(K,{color:"unreadMsgText",children:c[T]}):s.jsxs(g,{align:"center",py:12,children:[s.jsx(g,{align:"center",py:12,children:s.jsx(Sr,{color:k.white})}),s.jsx(g,{align:"center",py:12,children:s.jsx(K,{children:"Generating response"})})]})})]},S))}),s.jsxs(ml,{onKeyDown:j,py:12,tabIndex:-1,children:[s.jsx(dl,{disabled:f,onChange:S=>n(S.target.value),placeholder:"Enter your question",value:t}),s.jsx(gl,{children:s.jsx(uo,{color:y?k.white:k.gray300,size:"18"})})]})]})},hl=C.div`
  margin-top: 20px;
`,dl=C(Di)`
  background: ${k.inputBg1};
  max-width: 100%;
  color: ${k.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,fl=C(po)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${k.secondaryText4};
  }
`,xl=C(ho)`
  .MuiInputBase-root {
    color: blue;
  }
  background: ${k.inputBg1};

  .MuiSvgIcon-root {
    color: ${k.white};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
    color: ${k.white};
  }
`,ml=C(g)`
  position: relative;
`,gl=C(g)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,yl=C(g)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${k.divider2};
  }
`,mn=({text:e})=>s.jsxs(g,{align:"center",justify:"center",py:12,children:[s.jsx(g,{align:"center",py:12,children:s.jsx(Sr,{color:k.white})}),s.jsx(g,{align:"center",py:12,children:s.jsx(K,{children:e})})]}),wl=()=>{const[e,t,n,r]=Cr(o=>[o.teachMeAnswer,o.hasTeachingInProgress,o.instgraphAnswser,o.hasInstagraphInProgress]),i=!r&&!!(n!=null&&n.edges)&&!!(n!=null&&n.nodes);return s.jsxs(s.Fragment,{children:[i?s.jsx($i,{edges:n==null?void 0:n.edges,nodes:n==null?void 0:n.nodes}):s.jsx(mn,{text:"Generating instagraph"}),t?s.jsx(mn,{text:"Generating tutorial"}):s.jsxs(s.Fragment,{children:[s.jsx(kl,{children:s.jsx(K,{children:e})}),s.jsx(pl,{})]})]})};C(ce)``;const kl=C(g)`
  padding-left: 10px;
  padding-right: 10px;
`,bl=({cx:e,cy:t})=>s.jsx(so,{cx:e,cy:t,fill:k.blueTextAccent,r:2}),jl=()=>{const e=he(),t=[...(e==null?void 0:e.data)||[]].sort((i,o)=>(i.year||0)-(o.year||0)),n=t.map(i=>i.year).filter(i=>i),r=t.map(i=>i.rate).filter(i=>i);return s.jsx(Cl,{direction:"column",px:24,py:16,children:s.jsx(Hi,{height:"100%",width:"100%",children:s.jsxs(Vi,{margin:{bottom:20,left:20,right:20,top:20},children:[s.jsx(ro,{stroke:"#f5f5f5"}),s.jsx(io,{dataKey:"year",domain:[Math.min(...n),Math.max(...n)],label:{fill:k.white,fontSize:"12px",offset:-10,position:"insideBottom",value:e.x_axis_name},name:"X",tick:{fill:k.white,fontSize:"8px"},type:"number"}),s.jsx(oo,{color:"#000",dataKey:"rate",domain:[Math.min(...r),Math.max(...r)],label:{angle:-90,fill:k.white,fontSize:"12px",offset:0,position:"insideLeft",value:e.y_axis_name},name:"Y",tick:{fill:k.white,fontSize:"8px"},type:"number"}),s.jsx(lo,{cursor:{strokeDasharray:"3 3"}}),s.jsx(Ui,{data:t,fill:k.blueTextAccent,line:!0,name:"A scatter",shape:s.jsx(bl,{})})]})})})},Cl=C(g)`
  width: 100%;
  height: 100%;
`;function pt(e,t){if(!(t!=null&&t.trim()))return e;const n=new RegExp(`(${t})`,"gi"),r=e.split(n);return s.jsx(s.Fragment,{children:r.map((i,o)=>n.test(i)?s.jsx(Sl,{children:i},o):i)})}const Sl=C.span`
  background-color: rgba(0, 123, 255, 0.4);
  padding: 2;
  margin: 0;
  border-radius: 3px;
  color: inherit;
`,vl=({stateless:e,node:t,searchTerm:n})=>s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Tl,{children:e&&s.jsxs(El,{children:[s.jsx("div",{className:"icon",children:s.jsx(gr,{})}),s.jsx("div",{className:"title",children:"Description"})]})}),s.jsx(K,{children:t!=null&&t.description?pt(t.description,n):"..."})]}),El=C(g).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${k.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${k.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,Tl=C(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Il=C.span`
  color: ${k.white};
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`,Al=({stateless:e,node:t})=>{var w;const[n,r]=ge(y=>[y.transcriptIsOpen,y.setTranscriptOpen]),[i,o]=P.useState(!1),[l,a]=P.useState(""),[u,c]=P.useState(!1);if(!e&&!n)return null;const h=async()=>{try{const y=await dn(t==null?void 0:t.ref_id);a(y.data.text)}catch(y){console.error("Error fetching full transcript",y)}},d=async()=>{if(l===""){const y=await dn(t==null?void 0:t.ref_id);p(y.data.text)}else p(l);setTimeout(()=>{o(!1)},2e3)},f=async()=>{u?c(!1):(await h(),c(!0))},p=y=>{y!==void 0&&(navigator.clipboard.writeText(y),o(!0))};return s.jsxs(g,{grow:1,shrink:1,children:[s.jsxs(zl,{children:[e&&s.jsxs(Pl,{children:[s.jsx("div",{className:"icon",children:s.jsx(gr,{})}),s.jsx("div",{className:"title",children:"Transcript"})]}),t!=null&&t.text?s.jsx(s.Fragment,{children:i?s.jsxs(Bl,{align:"center",direction:"row",justify:"flex-start",children:[s.jsx("div",{className:"icon",children:s.jsx(dr,{})}),s.jsx("div",{className:"text",children:"Copied"})]}):s.jsx(ce,{endIcon:s.jsx(Gi,{}),onPointerDown:()=>d(),size:"small",variant:"outlined",children:"Copy"})}):s.jsx("div",{}),!e&&s.jsx(_l,{onClick:()=>{r(!1)},children:s.jsx(co,{fontSize:35})})]}),s.jsxs(Ll,{children:[u?l:`${(w=t==null?void 0:t.text)==null?void 0:w.substring(0,100)}...`,s.jsx(Il,{onClick:f,children:u?"less":"more"})]})]})},Pl=C(g).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${k.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${k.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,zl=C(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,_l=C(g).attrs({})`
  color: ${k.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${k.lightBlue500};
  }
`,Ll=C(g)`
  color: ${k.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Bl=C(g)`
  color: ${k.SECONDARY_BLUE};
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
`,Tr=({node:e})=>{const t=pe(y=>y.selectedNode),n=ge(y=>y.currentSearch),{link:r,image_url:i,date:o,boost:l,node_type:a,type:u,id:c,show_title:h,episode_title:d,ref_id:f}=e||t||{},[p,w]=P.useState(l||0);return!e&&!t?null:s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(Ol,{children:[s.jsx(Rl,{boostCount:p||0,date:o||0,episodeTitle:rt(d),imageUrl:i,isSelectedView:!0,link:r,onClick:()=>null,showTitle:h,type:a||u}),s.jsx(yt,{}),s.jsxs(Ml,{children:[s.jsx(Gt,{amt:p}),s.jsx(wr,{content:e||t,count:p,refId:f,updateCount:w})]}),s.jsx(yt,{}),s.jsx(gn,{children:s.jsx(vl,{node:e||t,searchTerm:n,stateless:!0})}),s.jsx(yt,{}),s.jsx(gn,{children:s.jsx(Al,{node:e||t,stateless:!0},c)})]})})},Ol=C(g)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,Ml=C(g)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,gn=C(g)`
  padding: 18px 18px 18px;
`,Rl=C(Er)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,yt=C(yr)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,Dl=C(g)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);

  .episode-title {
    font-size: 20px;
    font-weight: 600;
    color: ${k.white};
  }

  .show {
    cursor: pointer;
    &__title {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${k.white};
      margin-left: 8px;
    }
  }
`,Fl=({selectedNodeShow:e})=>{const[t,n]=pe(o=>[o.selectedNode,o.setSelectedNode]),{type:r}=t||{},i=ge(o=>o.currentSearch);return s.jsxs(Dl,{p:20,children:[s.jsx(g,{align:"flex-start",children:r&&s.jsx(We,{type:r})}),s.jsx(g,{direction:"row",mb:22,mt:22,children:s.jsx(g,{grow:1,shrink:1,children:s.jsx(K,{className:"episode-title",kind:"heading",children:pt((t==null?void 0:t.episode_title)||"Unknown",i)})})}),e?s.jsxs(g,{className:"show",direction:"row",onClick:()=>n(e),children:[s.jsx(ye,{size:16,src:(e==null?void 0:e.image_url)||"",type:"show"}),s.jsx(K,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:e==null?void 0:e.show_title})]}):null]})},Nl="Flow 1",$l=0,Hl=12,Vl=15,Ul={g:"LottieFiles Figma v45"},Gl=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],Yl="5.7.0",ql=60,Wl=57.6,Ql=0,Xl=[],Zl={nm:Nl,ddd:$l,h:Hl,w:Vl,meta:Ul,layers:Gl,v:Yl,fr:ql,op:Wl,ip:Ql,assets:Xl},Kl=()=>{const e=P.useRef(null);return P.useEffect(()=>{const t=document.getElementById("lottie-timestamp-equalizer");return t&&(e.current=Ti.loadAnimation({container:t,animationData:Zl,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),s.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},Jl=C(g).attrs(()=>({direction:"row"}))`
  cursor: pointer;
  color: ${k.primaryText1};
  border-top: 1px solid ${k.black};
  background: ${e=>e.isSelected?"rgba(97, 138, 255, 0.1)":`${k.BG1}`};

  .play-pause {
    font-size: 24px;
    border-radius: 4px;
    color: ${k.GRAY7};
    cursor: pointer;
  }

  .info {
    margin-left: auto;
    color: ${k.GRAY7};
    font-size: 24px;
  }

  &:hover {
    .play-pause {
      color: ${k.white};
    }
  }
`,es=({onClick:e,timestamp:t,isSelected:n,setOpenClip:r})=>s.jsxs(Jl,{align:"center","data-testid":"wrapper",direction:"row",isSelected:n,justify:"flex-start",onClick:e,px:20,py:20,children:[s.jsxs("div",{children:[s.jsx(cr,{className:"play-pause",children:n?s.jsx(Kl,{}):s.jsx(Yi,{})}),!1]}),s.jsxs(ts,{align:"flex-start",direction:"column",justify:"center",children:[t.timestamp&&s.jsx("span",{className:"timestamp",children:qi(t.timestamp)}),s.jsx("span",{className:"title",children:rt(t.show_title)})]}),s.jsx("div",{className:"info",children:s.jsx(g,{"data-testid":"info-icon-wrapper",onClick:()=>r(t),pt:4,children:s.jsx(xo,{})})})]}),ts=C(g)`
  font-size: 13px;
  color: ${k.white};
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
    color: ${k.GRAY6};
  }
`,ns=C(g)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,rs=()=>{const e=he(),t=vr(),[n,r]=P.useState(null),[i,o]=P.useState(null),[l,a,u,c]=at(p=>[p.playingNode,p.setPlayingNodeLink,p.setPlayingTime,p.setIsSeeking]),h=P.useMemo(()=>kr((t==null?void 0:t.nodes)||[],e),[t==null?void 0:t.nodes,e]),d=P.useMemo(()=>t==null?void 0:t.nodes.find(p=>p.node_type==="show"&&p.show_title===(e==null?void 0:e.show_title)),[t==null?void 0:t.nodes,e]),f=P.useCallback(p=>{var y;const w=pr(((y=p==null?void 0:p.timestamp)==null?void 0:y.split("-")[0])||"00:00:01");l&&p.link&&(l==null?void 0:l.link)!==p.link&&a(p.link),u(w),c(!0),o(p)},[l,a,c,o,u]);return P.useEffect(()=>{h!=null&&h.length&&!h.some(p=>p.ref_id===(i==null?void 0:i.ref_id))&&f(h[0])},[h,i,f]),e?s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(os,{children:[n&&s.jsx(ls,{className:"slide-me",direction:"up",in:!!n,children:s.jsxs(is,{children:[s.jsx(g,{className:"close-info",onClick:()=>r(null),children:s.jsx(fr,{})}),n&&s.jsx(Tr,{node:n})]})}),s.jsx(Fl,{selectedNodeShow:d}),!!(h!=null&&h.length)&&s.jsx(ns,{children:s.jsx(g,{pb:20,children:h==null?void 0:h.map((p,w)=>s.jsx(es,{isSelected:(i==null?void 0:i.ref_id)===p.ref_id,onClick:()=>f(p),setOpenClip:r,timestamp:p},`${p.episode_title}_${w}`))})})]})}):null},is=C(g)`
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  .close-info {
    position: absolute;
    color: ${k.white};
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`,os=C(g)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,ls=C(Yt)`
  && {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 16px;
    overflow: hidden;
    background: ${k.BG1};
    z-index: 1;
  }
`,ss=()=>{const e=he(),t=e==null?void 0:e.name;return s.jsxs(g,{direction:"column",px:24,py:16,children:[s.jsx(ye,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.source_link)||"",type:"image"}),s.jsx(g,{py:20,children:s.jsx(K,{color:"primaryText1",kind:"bigHeading",children:t})})]})},as=()=>{const{sender_pic:e,sender_alias:t,date:n,message_content:r}=he()||{};return s.jsxs(g,{direction:"row",children:[s.jsx(ps,{src:e}),s.jsxs(us,{children:[s.jsxs(g,{align:"flex-end",className:"info",direction:"row",children:[t&&s.jsx("span",{className:"info__name",children:t}),n&&s.jsx("span",{className:"info__date",children:n})]}),r&&s.jsx(cs,{dangerouslySetInnerHTML:{__html:Wi(r)}})]})]})},us=C(g)`
  color: ${k.black};
  border-radius: 8px;
  font-size: 20px;
  margin-left: 8px;
  flex: 1;

  .info__date {
    color: ${k.textMessages};
    font-size: 14px;
    margin-left: 8px;
  }

  .info__name {
    color: ${k.green400};
    font-size: 16px;
  }
`,cs=C.div`
  background: ${k.white};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${k.white};
    position: absolute;
    left: -6px;
    top: 0;
  }

  .username {
    color: ${k.blueTextAccent};
  }

  a {
    color: ${k.blueTextAccent};
    text-decoration: none;
  }

  a:hover,
  a:visited {
    color: ${k.blueTextAccent};
    text-decoration: none;
  }
`,ps=C.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,hs=()=>{const e=he(),t=(e==null?void 0:e.name)||(e==null?void 0:e.label);return s.jsxs(g,{direction:"row",px:24,py:16,children:[s.jsx(ye,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.image_url)||"person_placeholder_img.png",type:"person"}),s.jsx(g,{p:20,children:s.jsx(K,{color:"primaryText1",kind:"bigHeading",children:t})})]})},ds=({node:e,onClick:t})=>{var i,o;const n=pr(e.timestamp||""),r=Math.ceil(n/60);return s.jsx(fs,{onClick:t,p:24,children:s.jsxs("div",{children:[s.jsxs(g,{align:"flex-start",direction:"row",justify:"flex-start",children:[s.jsx(g,{align:"center",children:s.jsx(ye,{size:64,src:(e==null?void 0:e.image_url)||"",type:(e==null?void 0:e.node_type)||"episode"})}),s.jsxs("div",{className:"content",children:[s.jsxs(g,{align:"center",direction:"row",children:[s.jsx(We,{type:"episode"}),r>0&&s.jsxs("div",{className:"subtitle",children:[r," ",r===1?"min":"mins"]})]}),s.jsx(K,{className:"title",color:"primaryText1",kind:"regular",children:e.episode_title})]})]}),s.jsxs(g,{align:"center",direction:"row",justify:"flex-end",pt:4,children:[s.jsxs(K,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((i=e==null?void 0:e.children)==null?void 0:i.length)||0," ",((o=e==null?void 0:e.children)==null?void 0:o.length)===1?"Clip":"Clips"]}),s.jsx(Qi,{style:{color:k.white}})]})]})})},fs=C(g).attrs({})`
  direction: row;
  cursor: pointer;
  color: ${k.primaryText1};
  border-bottom: 1px solid #101317;

  .content {
    margin-left: 16px;
    align-self: stretch;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .title {
    margin-top: 16px;
    display: block;
  }

  .clipText {
    font-size: 12px;
    margin-right: 6px;
  }
`,xs=C(g)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;

  .subtitle {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${k.GRAY6};
    margin-left: 8px;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,ms=C(g)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,gs=C(K)`
  font-size: 22px;
  font-weight: 700;
  max-width: 250px;
  -webkit-box-orient: vertical;
  max-height: calc(2 * 1.5em);
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`,ys=C.div`
  max-height: calc(100vh - 340px);
  overflow-y: auto;
`,ws=()=>{const[e,t]=pe(l=>[l.selectedNode,l.setSelectedNode]),n=vr(),[r,i]=P.useState([]),o=P.useMemo(()=>{var u;const l=new Set,a={};if((u=e==null?void 0:e.children)!=null&&u.length){e.children.forEach((h,d)=>{var w,y,I,j;const f=kr((n==null?void 0:n.nodes)||[],e)||[],p=n==null?void 0:n.nodes.find(S=>S.ref_id===h);if(p){p.timestamp=(w=f[0])==null?void 0:w.timestamp;const S=(j=(I=(y=f[d])==null?void 0:y.hosts)==null?void 0:I[0])==null?void 0:j.name;S&&l.add(S),a[h]=p,a[h]=p}});const c=Array.from(l);i(c)}return Object.values(a).filter(c=>c.node_type==="episode").sort((c,h)=>(h.weight||0)-(c.weight||0))},[n==null?void 0:n.nodes,e]);return s.jsxs(xs,{children:[s.jsx(ms,{children:s.jsxs(g,{direction:"row",children:[s.jsx(g,{pr:24,children:s.jsx(ye,{size:80,src:(e==null?void 0:e.image_url)||"audio_default.svg",type:"show"})}),s.jsx(g,{direction:"column",children:s.jsxs(g,{direction:"column",grow:1,justify:"space-between",children:[s.jsxs(g,{align:"center",direction:"row",justify:"flex-start",mb:16,children:[s.jsx(We,{type:"show"})," ",s.jsxs("div",{className:"subtitle",children:["by ",r.join(", ")||(e==null?void 0:e.show_title)]})]}),s.jsx(gs,{kind:"bigHeading",title:(e==null?void 0:e.show_title)||"Unknown",children:(e==null?void 0:e.show_title)||"Unknown"})]})})]})}),s.jsxs(g,{direction:"column",children:[s.jsx(g,{p:24,children:s.jsx(K,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),s.jsx(ys,{children:o.map(l=>s.jsx(ds,{node:l,onClick:()=>t(l)},l.ref_id))})]})]})},ks=()=>{const e=he();return s.jsx(g,{align:"center",justify:"center",children:s.jsx(K,{color:"primaryText1",kind:"hugeHeading",children:e==null?void 0:e.label})})},bs=()=>{const e=he(),{date:t,boost:n,text:r,name:i,verified:o,image_url:l,twitter_handle:a,ref_id:u}=e||{},c=(e==null?void 0:e.tweet_id)||"",[h,d]=P.useState(n||0),f=ge(p=>p.currentSearch);return e&&s.jsxs(s.Fragment,{children:[s.jsxs(g,{direction:"column",p:24,children:[s.jsxs(g,{align:"center",direction:"row",pr:16,children:[s.jsx(js,{children:s.jsx(ye,{rounded:!0,size:58,src:l||"",type:"person"})}),s.jsxs(g,{children:[s.jsxs(Cs,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&s.jsxs(Ss,{children:["@",a]})]})]}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(vs,{"data-testid":"episode-description",children:pt(r||"",f)}),s.jsx(g,{direction:"row",justify:"flex-start",children:!!t&&s.jsx(ct,{children:$t.unix(t).format("ll")})})]}),s.jsx(g,{align:"stretch",mt:22,children:s.jsx(Ts,{endIcon:s.jsx(Ut,{}),onClick:()=>window.open(`https://twitter.com/Interior/status/${c}${c.includes("?")?"&":"?"}open=system`,"_blank"),children:"View Tweet"})})]}),s.jsx(Es,{}),s.jsxs(g,{direction:"row",justify:"space-between",pt:14,px:24,children:[s.jsx(Gt,{amt:h}),s.jsx(wr,{content:e,count:h,refId:u,updateCount:d})]})]})},js=C(g)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Cs=C(g)`
  color: ${k.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`,Ss=C(g)`
  color: ${k.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,vs=C(g)`
  color: ${k.white};
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
`,Es=C(yr)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,Ts=C(ce)`
  width: 100%;
`,Is=()=>{const e=he();if(!e)return null;const{name:t}=e;return s.jsx(g,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",shrink:1,children:s.jsx(As,{grow:1,justify:"flex-start",p:12,shrink:1,children:s.jsxs(g,{children:[s.jsx(K,{color:"primaryText1",kind:"regular",children:"Name:"}),s.jsx(K,{color:"primaryText1",kind:"regular",children:t})]})})})},As=C(g)`
  overflow: auto;
`,Ps=()=>{var a,u;const[e,t]=P.useState(!1),n=he(),r=!!(n!=null&&n.source_link),i=P.useRef(null),o=ge(c=>c.currentSearch),l=c=>{c.stopPropagation(),c.currentTarget.blur(),t(!e)};return P.useEffect(()=>{var c,h;e?(c=i.current)==null||c.play():(h=i.current)==null||h.pause()},[e]),s.jsxs(g,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:r?62:0,shrink:1,children:[r&&s.jsxs(zs,{children:[s.jsx(mr,{color:k.GRAY6}),s.jsx(Bs,{children:n==null?void 0:n.source_link}),s.jsx(_s,{href:`${n==null?void 0:n.source_link}?open=system`,onClick:c=>c.stopPropagation(),target:"_blank",children:s.jsx(Ut,{})})]}),(a=n==null?void 0:n.audio)!=null&&a.length?s.jsxs(g,{justify:"flex-start",p:12,children:[s.jsx(ce,{onClick:c=>l(c),startIcon:e?s.jsx(ut,{}):s.jsx(Ht,{}),children:e?"Pause":"Play"}),s.jsx(Os,{ref:i,src:((u=n.audio[0])==null?void 0:u.link)||"",children:s.jsx("track",{kind:"captions"})})]}):null,s.jsx(Ls,{grow:1,justify:"flex-start",p:12,shrink:1,children:s.jsx(K,{color:"primaryText1",kind:"regular",children:pt((n==null?void 0:n.text)||"",o)})})]})},zs=C(g)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${k.BG2};
  gap: 5px;
  color: ${k.GRAY6};

  span {
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color: ${k.GRAY6};
  }
`,_s=C.a`
  color: ${k.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Ls=C(g)`
  overflow: auto;
`,Bs=C(K)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Os=C.audio`
  height: 0;
  width: 0;
`,Ms=["clip","twitter_space","youtube","episode","podcast"],Rs=()=>{const e=he(),{showTeachMe:t}=pe(r=>r),{setPlayingNode:n}=at(r=>r);if(P.useEffect(()=>{Ms.includes((e==null?void 0:e.node_type)||"")&&n(e)},[n,e]),t)return s.jsx(wl,{});switch(e==null?void 0:e.node_type){case"guest":case"person":return s.jsx(hs,{});case"data_series":return s.jsx(jl,{});case"tribe_message":return s.jsx(as,{});case"tweet":return s.jsx(bs,{});case"topic":return s.jsx(ks,{});case"show":return s.jsx(ws,{});case"youtube":case"podcast":case"clip":case"twitter_space":return s.jsx(Tr,{});case"document":return s.jsx(Ps,{});case"episode":return s.jsx(rs,{},e.ref_id);case"image":return s.jsx(ss,{});default:return s.jsx(Is,{})}},Ds=P.memo(Rs),Fs=({isPlaying:e,isFullScreen:t,setIsPlaying:n,playingTime:r,duration:i,handleProgressChange:o,handleVolumeChange:l,onFullScreenClick:a,showToolbar:u})=>s.jsxs(g,{children:[!u&&s.jsx(Us,{"aria-label":"Small",max:i,onChange:o,size:"small",value:r}),s.jsxs(Ns,{align:"center",direction:"row",showToolbar:u,children:[s.jsx($s,{onClick:n,size:"small",children:e?s.jsx(ut,{}):s.jsx(Ht,{})}),s.jsxs(Gs,{direction:"row",children:[s.jsx("span",{children:xn(r)}),s.jsx("span",{className:"separator",children:"/"}),s.jsx("span",{className:"duration",children:xn(i)})]}),s.jsxs(Hs,{direction:"row",px:9,children:[s.jsx(br,{className:"volume-slider",defaultValue:.5,max:1,min:0,onChange:l,size:"small",step:.1}),s.jsx(Xi,{})]}),s.jsx(Vs,{onClick:()=>a(),children:t?s.jsx(Ki,{}):s.jsx(Zi,{})})]})]}),Ns=C(g)`
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
    color: ${k.primaryRed};
  }
`,$s=C(cr)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,Hs=C(g)`
  height: 28px;
  font-size: 26px;
  border-radius: 200px;
  color: ${k.white};
  margin-left: auto;

  .volume-slider {
    display: none;
    color: ${k.white};
    height: 3px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 2px;
      height: 10px;
      background-color: ${k.white};
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
`,Vs=C(g)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,Us=C(br)`
  && {
    z-index: 20;
    color: ${k.white};
    height: 3px;
    width: calc(100% - 12px);
    margin: -12px auto;
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 10px;
      height: 10px;
      background-color: ${k.white};
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
`,Gs=C(g)`
  color: ${k.white};
  font-size: 13px;
  margin-left: 16px;
  font-weight: 500;

  .separator {
    color: ${k.GRAY6};
    margin: 0 4px;
  }

  .duration {
    color: ${k.GRAY6};
  }
`,Ys=({hidden:e})=>{const t=P.useRef(null),n=P.useRef(null),[r,i]=P.useState(!1),[o,l]=P.useState(!1),[a,u]=P.useState("ready"),{isPlaying:c,playingTime:h,duration:d,setIsPlaying:f,setPlayingTime:p,setDuration:w,playingNode:y,volume:I,setVolume:j,setHasError:S,resetPlayer:T,isSeeking:R,setIsSeeking:O}=at(G=>G);P.useEffect(()=>()=>T(),[T]),P.useEffect(()=>{R&&t.current&&(t.current.seekTo(h,"seconds"),O(!1))},[h,R,O]);const v=()=>{f(!c)},$=()=>{f(!0)},W=()=>{f(!1)},z=(G,V)=>{const ee=Array.isArray(V)?V[0]:V;t.current&&(t.current.seekTo(ee),p(ee))},B=(G,V)=>{const ee=Array.isArray(V)?V[0]:V;j(ee)},L=()=>{S(!0),u("error")},_=G=>{if(!R){const V=G.playedSeconds;p(V)}},Y=()=>{if(t.current){u("ready");const G=t.current.getDuration();w(G)}},Z=()=>{n.current&&(document.fullscreenElement?(document.exitFullscreen(),i(!1)):n.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",N)}))},N=()=>{i(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",N)};return P.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",N)}),P.useEffect(()=>{const G=V=>{if(r){const ee=window.screen.height,fe=V.clientY,x=ee-fe;l(x<=50)}};return document.addEventListener("mousemove",G),()=>{document.removeEventListener("mousemove",G)}},[r,o]),P.useEffect(()=>{const G=V=>{r&&V.key==="Escape"&&(V.preventDefault(),V.stopPropagation())};return document.addEventListener("fullscreenchange",N),document.addEventListener("keydown",G),()=>{document.removeEventListener("fullscreenchange",N),document.removeEventListener("keydown",G)}}),y!=null&&y.link?s.jsxs(qs,{ref:n,hidden:e,children:[s.jsx(Ws,{children:s.jsx(ye,{size:120,src:(y==null?void 0:y.image_url)||"",type:"clip"})}),s.jsx(Ji,{ref:t,controls:!1,height:r?window.screen.height:"200px",onBuffer:()=>u("buffering"),onBufferEnd:()=>u("ready"),onError:L,onPause:W,onPlay:$,onProgress:_,onReady:Y,playing:c,url:(y==null?void 0:y.link)||"",volume:I,width:"100%"}),a==="error"?s.jsx(Xs,{className:"error-wrapper",children:"Error happened, please try later"}):null,a==="ready"?s.jsx(Fs,{duration:d,handleProgressChange:z,handleVolumeChange:B,isFullScreen:r,isPlaying:c,onFullScreenClick:Z,playingTime:h,setIsPlaying:v,showToolbar:o&&r}):null,a==="buffering"?s.jsx(Qs,{children:s.jsx(Vt,{color:k.lightGray})}):null]}):null},qs=C(g)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${e=>e.hidden?"0px":"auto"};
`,Ws=C(g)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Qs=C(g)`
  position: absolute;
  top: 39%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,Xs=C(g)`
  height: 60px;
  padding: 12px 16px;
  color: ${k.primaryRed};
`,Zs=P.memo(Ys),Ks=({open:e})=>{const{setSelectedNode:t,setTeachMe:n,showTeachMe:r}=pe(a=>a),i=he(),{setSidebarOpen:o}=ge(a=>a),{playingNode:l}=at(a=>a);return s.jsx(Yt,{"data-testid":"sidebar-sub-view",direction:"right",in:e,style:{width:r?"700px":"",position:e?"relative":"absolute"},children:s.jsxs(Js,{children:[s.jsx(Zs,{hidden:(i==null?void 0:i.ref_id)!==(l==null?void 0:l.ref_id)},l==null?void 0:l.ref_id),s.jsx(ta,{children:s.jsx(Ds,{})}),s.jsx(ea,{onClick:()=>{t(null),n(!1)},children:s.jsx(eo,{})}),s.jsx(na,{onClick:()=>{o(!1)},children:s.jsx(jr,{})})]})})},Js=C(g)(({theme:e})=>({position:"relative",background:k.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,overflow:"hidden",[e.breakpoints.up("sm")]:{width:"390px"}})),ea=C(g)`
  font-size: 32px;
  color: ${k.white};
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 3px;

  &:hover {
    color: ${k.GRAY6};
  }

  &:active {
  }
`,ta=C(g)`
  flex: 1 1 100%;
`,na=C(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:k.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:k.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:k.BG1_HOVER},"&:active":{backgroundColor:k.BG1_PRESS,color:k.GRAY6}})),ra=()=>{const e=ge(t=>t.setSidebarOpen);return s.jsx(ia,{onClick:()=>{e(!0)},children:s.jsx(to,{})})},ia=C(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:k.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:k.white,[e.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:k.BG1_HOVER},"&:active":{backgroundColor:k.BG1_PRESS,color:k.GRAY6}})),oa=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_5099_7163",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"16",height:"16",children:s.jsx("rect",{x:"2",y:"2",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_5099_7163)",children:s.jsx("path",{d:"M10 16.6667C9.16667 16.6667 8.38611 16.5083 7.65833 16.1917C6.93056 15.875 6.29722 15.4472 5.75833 14.9083C5.21944 14.3695 4.79167 13.7361 4.475 13.0083C4.15833 12.2806 4 11.5 4 10.6667C4 10.4778 4.06389 10.3195 4.19167 10.1917C4.31944 10.0639 4.47778 10 4.66667 10C4.85556 10 5.01389 10.0639 5.14167 10.1917C5.26944 10.3195 5.33333 10.4778 5.33333 10.6667C5.33333 11.9667 5.78611 13.0695 6.69167 13.975C7.59722 14.8806 8.7 15.3333 10 15.3333C11.3 15.3333 12.4028 14.8806 13.3083 13.975C14.2139 13.0695 14.6667 11.9667 14.6667 10.6667C14.6667 9.36667 14.2139 8.2639 13.3083 7.35834C12.4028 6.45279 11.3 6.00001 10 6.00001H9.9L10.4667 6.56667C10.6 6.70001 10.6639 6.85556 10.6583 7.03334C10.6528 7.21112 10.5889 7.36667 10.4667 7.50001C10.3333 7.63334 10.175 7.70279 9.99167 7.70834C9.80833 7.7139 9.65 7.65001 9.51667 7.51667L7.8 5.80001C7.66667 5.66667 7.6 5.51112 7.6 5.33334C7.6 5.15556 7.66667 5.00001 7.8 4.86667L9.51667 3.15001C9.65 3.01667 9.80833 2.95279 9.99167 2.95834C10.175 2.9639 10.3333 3.03334 10.4667 3.16667C10.5889 3.30001 10.6528 3.45556 10.6583 3.63334C10.6639 3.81112 10.6 3.96667 10.4667 4.10001L9.9 4.66667H10C10.8333 4.66667 11.6139 4.82501 12.3417 5.14167C13.0694 5.45834 13.7028 5.88612 14.2417 6.42501C14.7806 6.9639 15.2083 7.59723 15.525 8.32501C15.8417 9.05279 16 9.83334 16 10.6667C16 11.5 15.8417 12.2806 15.525 13.0083C15.2083 13.7361 14.7806 14.3695 14.2417 14.9083C13.7028 15.4472 13.0694 15.875 12.3417 16.1917C11.6139 16.5083 10.8333 16.6667 10 16.6667Z",fill:"currentColor"})})]}),la=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_1259_28",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1259_28)",children:s.jsx("path",{d:"M3 20.75L2.91345 19.4327L4.74998 17.6058V20.75H3ZM7.25003 20.75V15.1058L8.74998 13.6058V20.75H7.25003ZM11.25 20.75V13.6058L12.75 15.1308V20.75H11.25ZM15.25 20.75V15.1308L16.75 13.6308V20.75H15.25ZM19.25 20.75V11.1058L20.75 9.60583V20.75H19.25ZM3.25003 15.2192V13.1058L10 6.35581L14 10.3558L20.75 3.60583V5.71924L14 12.4692L10 8.46921L3.25003 15.2192Z",fill:"currentColor"})})]});function sa(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const aa=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ua=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ca={};function yn(e,t){return((t||ca).jsx?ua:aa).test(e)}const pa=/[ \t\n\f\r]/g;function ha(e){return typeof e=="object"?e.type==="text"?wn(e.value):!1:wn(e)}function wn(e){return e.replace(pa,"")===""}class Qe{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}Qe.prototype.property={};Qe.prototype.normal={};Qe.prototype.space=null;function Ir(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new Qe(n,r,t)}function _t(e){return e.toLowerCase()}class de{constructor(t,n){this.property=t,this.attribute=n}}de.prototype.space=null;de.prototype.boolean=!1;de.prototype.booleanish=!1;de.prototype.overloadedBoolean=!1;de.prototype.number=!1;de.prototype.commaSeparated=!1;de.prototype.spaceSeparated=!1;de.prototype.commaOrSpaceSeparated=!1;de.prototype.mustUseProperty=!1;de.prototype.defined=!1;let da=0;const F=_e(),J=_e(),Ar=_e(),E=_e(),Q=_e(),Me=_e(),le=_e();function _e(){return 2**++da}const Lt=Object.freeze(Object.defineProperty({__proto__:null,boolean:F,booleanish:J,commaOrSpaceSeparated:le,commaSeparated:Me,number:E,overloadedBoolean:Ar,spaceSeparated:Q},Symbol.toStringTag,{value:"Module"})),wt=Object.keys(Lt);class qt extends de{constructor(t,n,r,i){let o=-1;if(super(t,n),kn(this,"space",i),typeof r=="number")for(;++o<wt.length;){const l=wt[o];kn(this,wt[o],(r&Lt[l])===Lt[l])}}}qt.prototype.defined=!0;function kn(e,t,n){n&&(e[t]=n)}const fa={}.hasOwnProperty;function De(e){const t={},n={};let r;for(r in e.properties)if(fa.call(e.properties,r)){const i=e.properties[r],o=new qt(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[_t(r)]=r,n[_t(o.attribute)]=r}return new Qe(t,n,e.space)}const Pr=De({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),zr=De({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function _r(e,t){return t in e?e[t]:t}function Lr(e,t){return _r(e,t.toLowerCase())}const Br=De({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Lr,properties:{xmlns:null,xmlnsXLink:null}}),Or=De({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:J,ariaAutoComplete:null,ariaBusy:J,ariaChecked:J,ariaColCount:E,ariaColIndex:E,ariaColSpan:E,ariaControls:Q,ariaCurrent:null,ariaDescribedBy:Q,ariaDetails:null,ariaDisabled:J,ariaDropEffect:Q,ariaErrorMessage:null,ariaExpanded:J,ariaFlowTo:Q,ariaGrabbed:J,ariaHasPopup:null,ariaHidden:J,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Q,ariaLevel:E,ariaLive:null,ariaModal:J,ariaMultiLine:J,ariaMultiSelectable:J,ariaOrientation:null,ariaOwns:Q,ariaPlaceholder:null,ariaPosInSet:E,ariaPressed:J,ariaReadOnly:J,ariaRelevant:null,ariaRequired:J,ariaRoleDescription:Q,ariaRowCount:E,ariaRowIndex:E,ariaRowSpan:E,ariaSelected:J,ariaSetSize:E,ariaSort:null,ariaValueMax:E,ariaValueMin:E,ariaValueNow:E,ariaValueText:null,role:null}}),xa=De({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Lr,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Me,acceptCharset:Q,accessKey:Q,action:null,allow:null,allowFullScreen:F,allowPaymentRequest:F,allowUserMedia:F,alt:null,as:null,async:F,autoCapitalize:null,autoComplete:Q,autoFocus:F,autoPlay:F,blocking:Q,capture:F,charSet:null,checked:F,cite:null,className:Q,cols:E,colSpan:null,content:null,contentEditable:J,controls:F,controlsList:Q,coords:E|Me,crossOrigin:null,data:null,dateTime:null,decoding:null,default:F,defer:F,dir:null,dirName:null,disabled:F,download:Ar,draggable:J,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:F,formTarget:null,headers:Q,height:E,hidden:F,high:E,href:null,hrefLang:null,htmlFor:Q,httpEquiv:Q,id:null,imageSizes:null,imageSrcSet:null,inert:F,inputMode:null,integrity:null,is:null,isMap:F,itemId:null,itemProp:Q,itemRef:Q,itemScope:F,itemType:Q,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:F,low:E,manifest:null,max:null,maxLength:E,media:null,method:null,min:null,minLength:E,multiple:F,muted:F,name:null,nonce:null,noModule:F,noValidate:F,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:F,optimum:E,pattern:null,ping:Q,placeholder:null,playsInline:F,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:F,referrerPolicy:null,rel:Q,required:F,reversed:F,rows:E,rowSpan:E,sandbox:Q,scope:null,scoped:F,seamless:F,selected:F,shadowRootDelegatesFocus:F,shadowRootMode:null,shape:null,size:E,sizes:null,slot:null,span:E,spellCheck:J,src:null,srcDoc:null,srcLang:null,srcSet:null,start:E,step:null,style:null,tabIndex:E,target:null,title:null,translate:null,type:null,typeMustMatch:F,useMap:null,value:J,width:E,wrap:null,align:null,aLink:null,archive:Q,axis:null,background:null,bgColor:null,border:E,borderColor:null,bottomMargin:E,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:F,declare:F,event:null,face:null,frame:null,frameBorder:null,hSpace:E,leftMargin:E,link:null,longDesc:null,lowSrc:null,marginHeight:E,marginWidth:E,noResize:F,noHref:F,noShade:F,noWrap:F,object:null,profile:null,prompt:null,rev:null,rightMargin:E,rules:null,scheme:null,scrolling:J,standby:null,summary:null,text:null,topMargin:E,valueType:null,version:null,vAlign:null,vLink:null,vSpace:E,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:F,disableRemotePlayback:F,prefix:null,property:null,results:E,security:null,unselectable:null}}),ma=De({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:_r,properties:{about:le,accentHeight:E,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:E,amplitude:E,arabicForm:null,ascent:E,attributeName:null,attributeType:null,azimuth:E,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:E,by:null,calcMode:null,capHeight:E,className:Q,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:E,diffuseConstant:E,direction:null,display:null,dur:null,divisor:E,dominantBaseline:null,download:F,dx:null,dy:null,edgeMode:null,editable:null,elevation:E,enableBackground:null,end:null,event:null,exponent:E,externalResourcesRequired:null,fill:null,fillOpacity:E,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Me,g2:Me,glyphName:Me,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:E,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:E,horizOriginX:E,horizOriginY:E,id:null,ideographic:E,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:E,k:E,k1:E,k2:E,k3:E,k4:E,kernelMatrix:le,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:E,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:E,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:E,overlineThickness:E,paintOrder:null,panose1:null,path:null,pathLength:E,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Q,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:E,pointsAtY:E,pointsAtZ:E,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:le,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:le,rev:le,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:le,requiredFeatures:le,requiredFonts:le,requiredFormats:le,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:E,specularExponent:E,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:E,strikethroughThickness:E,string:null,stroke:null,strokeDashArray:le,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:E,strokeOpacity:E,strokeWidth:null,style:null,surfaceScale:E,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:le,tabIndex:E,tableValues:null,target:null,targetX:E,targetY:E,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:le,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:E,underlineThickness:E,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:E,values:null,vAlphabetic:E,vMathematical:E,vectorEffect:null,vHanging:E,vIdeographic:E,version:null,vertAdvY:E,vertOriginX:E,vertOriginY:E,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:E,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),ga=/^data[-\w.:]+$/i,bn=/-[a-z]/g,ya=/[A-Z]/g;function wa(e,t){const n=_t(t);let r=t,i=de;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&ga.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(bn,ba);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!bn.test(o)){let l=o.replace(ya,ka);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=qt}return new i(r,t)}function ka(e){return"-"+e.toLowerCase()}function ba(e){return e.charAt(1).toUpperCase()}const ja={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ca=Ir([zr,Pr,Br,Or,xa],"html"),Wt=Ir([zr,Pr,Br,Or,ma],"svg");function Sa(e){return e.join(" ").trim()}var Mr={},jn=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,va=/\n/g,Ea=/^\s*/,Ta=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Ia=/^:\s*/,Aa=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Pa=/^[;\s]*/,za=/^\s+|\s+$/g,_a=`
`,Cn="/",Sn="*",ze="",La="comment",Ba="declaration",Oa=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(w){var y=w.match(va);y&&(n+=y.length);var I=w.lastIndexOf(_a);r=~I?w.length-I:r+w.length}function o(){var w={line:n,column:r};return function(y){return y.position=new l(w),c(),y}}function l(w){this.start=w,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(w){var y=new Error(t.source+":"+n+":"+r+": "+w);if(y.reason=w,y.filename=t.source,y.line=n,y.column=r,y.source=e,!t.silent)throw y}function u(w){var y=w.exec(e);if(y){var I=y[0];return i(I),e=e.slice(I.length),y}}function c(){u(Ea)}function h(w){var y;for(w=w||[];y=d();)y!==!1&&w.push(y);return w}function d(){var w=o();if(!(Cn!=e.charAt(0)||Sn!=e.charAt(1))){for(var y=2;ze!=e.charAt(y)&&(Sn!=e.charAt(y)||Cn!=e.charAt(y+1));)++y;if(y+=2,ze===e.charAt(y-1))return a("End of comment missing");var I=e.slice(2,y-2);return r+=2,i(I),e=e.slice(y),r+=2,w({type:La,comment:I})}}function f(){var w=o(),y=u(Ta);if(y){if(d(),!u(Ia))return a("property missing ':'");var I=u(Aa),j=w({type:Ba,property:vn(y[0].replace(jn,ze)),value:I?vn(I[0].replace(jn,ze)):ze});return u(Pa),j}}function p(){var w=[];h(w);for(var y;y=f();)y!==!1&&(w.push(y),h(w));return w}return c(),p()};function vn(e){return e?e.replace(za,ze):ze}var Ma=fn&&fn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mr,"__esModule",{value:!0});var Ra=Ma(Oa);function Da(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,Ra.default)(e),i=typeof t=="function";return r.forEach(function(o){if(o.type==="declaration"){var l=o.property,a=o.value;i?t(l,a,o):a&&(n=n||{},n[l]=a)}}),n}var En=Mr.default=Da;const Fa=En.default||En,Rr=Dr("end"),Qt=Dr("start");function Dr(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Na(e){const t=Qt(e),n=Rr(e);if(t&&n)return{start:t,end:n}}function Ge(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Tn(e.position):"start"in e||"end"in e?Tn(e):"line"in e||"column"in e?Bt(e):""}function Bt(e){return In(e&&e.line)+":"+In(e&&e.column)}function Tn(e){return Bt(e&&e.start)+"-"+Bt(e&&e.end)}function In(e){return e&&typeof e=="number"?e:1}class ne extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1))}if(!o.place&&o.ancestors&&o.ancestors){const u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=a?a.line:void 0,this.name=Ge(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}ne.prototype.file="";ne.prototype.name="";ne.prototype.reason="";ne.prototype.message="";ne.prototype.stack="";ne.prototype.column=void 0;ne.prototype.line=void 0;ne.prototype.ancestors=void 0;ne.prototype.cause=void 0;ne.prototype.fatal=void 0;ne.prototype.place=void 0;ne.prototype.ruleId=void 0;ne.prototype.source=void 0;const Xt={}.hasOwnProperty,$a=new Map,Ha=/[A-Z]/g,Va=/-([a-z])/g,Ua=new Set(["table","tbody","thead","tfoot","tr"]),Ga=new Set(["td","th"]),Fr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Ya(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=eu(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Ja(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Wt:Ca,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Nr(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Nr(e,t,n){if(t.type==="element")return qa(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Wa(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Xa(e,t,n);if(t.type==="mdxjsEsm")return Qa(e,t);if(t.type==="root")return Za(e,t,n);if(t.type==="text")return Ka(e,t)}function qa(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Wt,e.schema=i),e.ancestors.push(t);const o=Hr(e,t.tagName,!1),l=tu(e,t);let a=Kt(e,t);return Ua.has(t.tagName)&&(a=a.filter(function(u){return typeof u=="string"?!ha(u):!0})),$r(e,l,o,t),Zt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Wa(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}qe(e,t.position)}function Qa(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);qe(e,t.position)}function Xa(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Wt,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Hr(e,t.name,!0),l=nu(e,t),a=Kt(e,t);return $r(e,l,o,t),Zt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Za(e,t,n){const r={};return Zt(r,Kt(e,t)),e.create(t,e.Fragment,r,n)}function Ka(e,t){return t.value}function $r(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Zt(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Ja(e,t,n){return r;function r(i,o,l,a){const c=Array.isArray(l.children)?n:t;return a?c(o,l,a):c(o,l)}}function eu(e,t){return n;function n(r,i,o,l){const a=Array.isArray(o.children),u=Qt(r);return t(i,o,l,a,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function tu(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Xt.call(t.properties,i)){const o=ru(e,i,t.properties[i]);if(o){const[l,a]=o;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&Ga.has(t.tagName)?r=a:n[l]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function nu(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else qe(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else qe(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Kt(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:$a;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const u=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(u){const c=i.get(u)||0;l=u+"-"+c,i.set(u,c+1)}}const a=Nr(e,o,l);a!==void 0&&n.push(a)}return n}function ru(e,t,n){const r=wa(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?sa(n):Sa(n)),r.property==="style"){let i=typeof n=="object"?n:iu(e,String(n));return e.stylePropertyNameCase==="css"&&(i=ou(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?ja[r.property]||r.property:r.attribute,n]}}function iu(e,t){const n={};try{Fa(t,r)}catch(i){if(!e.ignoreInvalidStyle){const o=i,l=new ne("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=Fr+"#cannot-parse-style-attribute",l}}return n;function r(i,o){let l=i;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(Va,su)),n[l]=o}}function Hr(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const a=yn(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=yn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Xt.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);qe(e)}function qe(e,t){const n=new ne("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Fr+"#cannot-handle-mdx-estrees-without-createevaluater",n}function ou(e){const t={};let n;for(n in e)Xt.call(e,n)&&(t[lu(n)]=e[n]);return t}function lu(e){let t=e.replace(Ha,au);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function su(e,t){return t.toUpperCase()}function au(e){return"-"+e.toLowerCase()}const kt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},uu={};function cu(e,t){const n=t||uu,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Vr(e,r,i)}function Vr(e,t,n){if(pu(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return An(e.children,t,n)}return Array.isArray(e)?An(e,t,n):""}function An(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Vr(e[i],t,n);return r.join("")}function pu(e){return!!(e&&typeof e=="object")}const Pn=document.createElement("i");function Jt(e){const t="&"+e+";";Pn.innerHTML=t;const n=Pn.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function be(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function ue(e,t){return e.length>0?(be(e,e.length,0,t),e):t}const zn={}.hasOwnProperty;function hu(e){const t={};let n=-1;for(;++n<e.length;)du(t,e[n]);return t}function du(e,t){let n;for(n in t){const i=(zn.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){zn.call(i,l)||(i[l]=[]);const a=o[l];fu(i[l],Array.isArray(a)?a:a?[a]:[])}}}function fu(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);be(e,0,0,r)}function Ur(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Re(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const xu=Te(/\p{P}/u),ke=Te(/[A-Za-z]/),se=Te(/[\dA-Za-z]/),mu=Te(/[#-'*+\--9=?A-Z^-~]/);function Ot(e){return e!==null&&(e<32||e===127)}const Mt=Te(/\d/),gu=Te(/[\dA-Fa-f]/),Gr=Te(/[!-/:-@[-`{-~]/);function M(e){return e!==null&&e<-2}function ie(e){return e!==null&&(e<0||e===32)}function U(e){return e===-2||e===-1||e===32}function yu(e){return Gr(e)||xu(e)}const wu=Te(/\s/);function Te(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Fe(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&se(e.charCodeAt(n+1))&&se(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function X(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(u){return U(u)?(e.enter(n),a(u)):t(u)}function a(u){return U(u)&&o++<i?(e.consume(u),a):(e.exit(n),t(u))}}const ku={tokenize:bu};function bu(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),X(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return M(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const ju={tokenize:Cu},_n={tokenize:Su};function Cu(e){const t=this,n=[];let r=0,i,o,l;return a;function a(T){if(r<n.length){const R=n[r];return t.containerState=R[1],e.attempt(R[0].continuation,u,c)(T)}return c(T)}function u(T){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&S();const R=t.events.length;let O=R,v;for(;O--;)if(t.events[O][0]==="exit"&&t.events[O][1].type==="chunkFlow"){v=t.events[O][1].end;break}j(r);let $=R;for(;$<t.events.length;)t.events[$][1].end=Object.assign({},v),$++;return be(t.events,O+1,0,t.events.slice(R)),t.events.length=$,c(T)}return a(T)}function c(T){if(r===n.length){if(!i)return f(T);if(i.currentConstruct&&i.currentConstruct.concrete)return w(T);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(_n,h,d)(T)}function h(T){return i&&S(),j(r),f(T)}function d(T){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,w(T)}function f(T){return t.containerState={},e.attempt(_n,p,w)(T)}function p(T){return r++,n.push([t.currentConstruct,t.containerState]),f(T)}function w(T){if(T===null){i&&S(),j(0),e.consume(T);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:i}),y(T)}function y(T){if(T===null){I(e.exit("chunkFlow"),!0),j(0),e.consume(T);return}return M(T)?(e.consume(T),I(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(T),y)}function I(T,R){const O=t.sliceStream(T);if(R&&O.push(null),T.previous=o,o&&(o.next=T),o=T,i.defineSkip(T.start),i.write(O),t.parser.lazy[T.start.line]){let v=i.events.length;for(;v--;)if(i.events[v][1].start.offset<l&&(!i.events[v][1].end||i.events[v][1].end.offset>l))return;const $=t.events.length;let W=$,z,B;for(;W--;)if(t.events[W][0]==="exit"&&t.events[W][1].type==="chunkFlow"){if(z){B=t.events[W][1].end;break}z=!0}for(j(r),v=$;v<t.events.length;)t.events[v][1].end=Object.assign({},B),v++;be(t.events,W+1,0,t.events.slice($)),t.events.length=v}}function j(T){let R=n.length;for(;R-- >T;){const O=n[R];t.containerState=O[1],O[0].exit.call(t,e)}n.length=T}function S(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Su(e,t,n){return X(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ln(e){if(e===null||ie(e)||wu(e))return 1;if(yu(e))return 2}function en(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Rt={name:"attention",tokenize:Eu,resolveAll:vu};function vu(e,t){let n=-1,r,i,o,l,a,u,c,h;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d=Object.assign({},e[r][1].end),f=Object.assign({},e[n][1].start);Bn(d,-u),Bn(f,u),l={type:u>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[r][1].end)},a={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:f},o={type:u>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},i={type:u>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},a.end)},e[r][1].end=Object.assign({},l.start),e[n][1].start=Object.assign({},a.end),c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=ue(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=ue(c,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),c=ue(c,en(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=ue(c,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(h=2,c=ue(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):h=0,be(e,r-1,n-r+3,c),n=r+c.length-h-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Eu(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ln(r);let o;return l;function l(u){return o=u,e.enter("attentionSequence"),a(u)}function a(u){if(u===o)return e.consume(u),a;const c=e.exit("attentionSequence"),h=Ln(u),d=!h||h===2&&i||n.includes(u),f=!i||i===2&&h||n.includes(r);return c._open=!!(o===42?d:d&&(i||!f)),c._close=!!(o===42?f:f&&(h||!d)),t(u)}}function Bn(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Tu={name:"autolink",tokenize:Iu};function Iu(e,t,n){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return ke(p)?(e.consume(p),l):c(p)}function l(p){return p===43||p===45||p===46||se(p)?(r=1,a(p)):c(p)}function a(p){return p===58?(e.consume(p),r=0,u):(p===43||p===45||p===46||se(p))&&r++<32?(e.consume(p),a):(r=0,c(p))}function u(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||Ot(p)?n(p):(e.consume(p),u)}function c(p){return p===64?(e.consume(p),h):mu(p)?(e.consume(p),c):n(p)}function h(p){return se(p)?d(p):n(p)}function d(p){return p===46?(e.consume(p),r=0,h):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):f(p)}function f(p){if((p===45||se(p))&&r++<63){const w=p===45?f:d;return e.consume(p),w}return n(p)}}const ht={tokenize:Au,partial:!0};function Au(e,t,n){return r;function r(o){return U(o)?X(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||M(o)?t(o):n(o)}}const Yr={name:"blockQuote",tokenize:Pu,continuation:{tokenize:zu},exit:_u};function Pu(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return U(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function zu(e,t,n){const r=this;return i;function i(l){return U(l)?X(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(Yr,t,n)(l)}}function _u(e){e.exit("blockQuote")}const qr={name:"characterEscape",tokenize:Lu};function Lu(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Gr(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Wr={name:"characterReference",tokenize:Bu};function Bu(e,t,n){const r=this;let i=0,o,l;return a;function a(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),u}function u(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,l=se,h(d))}function c(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=gu,h):(e.enter("characterReferenceValue"),o=7,l=Mt,h(d))}function h(d){if(d===59&&i){const f=e.exit("characterReferenceValue");return l===se&&!Jt(r.sliceSerialize(f))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(d)&&i++<o?(e.consume(d),h):n(d)}}const On={tokenize:Mu,partial:!0},Mn={name:"codeFenced",tokenize:Ou,concrete:!0};function Ou(e,t,n){const r=this,i={tokenize:O,partial:!0};let o=0,l=0,a;return u;function u(v){return c(v)}function c(v){const $=r.events[r.events.length-1];return o=$&&$[1].type==="linePrefix"?$[2].sliceSerialize($[1],!0).length:0,a=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),h(v)}function h(v){return v===a?(l++,e.consume(v),h):l<3?n(v):(e.exit("codeFencedFenceSequence"),U(v)?X(e,d,"whitespace")(v):d(v))}function d(v){return v===null||M(v)?(e.exit("codeFencedFence"),r.interrupt?t(v):e.check(On,y,R)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(v))}function f(v){return v===null||M(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(v)):U(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),X(e,p,"whitespace")(v)):v===96&&v===a?n(v):(e.consume(v),f)}function p(v){return v===null||M(v)?d(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(v))}function w(v){return v===null||M(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(v)):v===96&&v===a?n(v):(e.consume(v),w)}function y(v){return e.attempt(i,R,I)(v)}function I(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),j}function j(v){return o>0&&U(v)?X(e,S,"linePrefix",o+1)(v):S(v)}function S(v){return v===null||M(v)?e.check(On,y,R)(v):(e.enter("codeFlowValue"),T(v))}function T(v){return v===null||M(v)?(e.exit("codeFlowValue"),S(v)):(e.consume(v),T)}function R(v){return e.exit("codeFenced"),t(v)}function O(v,$,W){let z=0;return B;function B(N){return v.enter("lineEnding"),v.consume(N),v.exit("lineEnding"),L}function L(N){return v.enter("codeFencedFence"),U(N)?X(v,_,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(N):_(N)}function _(N){return N===a?(v.enter("codeFencedFenceSequence"),Y(N)):W(N)}function Y(N){return N===a?(z++,v.consume(N),Y):z>=l?(v.exit("codeFencedFenceSequence"),U(N)?X(v,Z,"whitespace")(N):Z(N)):W(N)}function Z(N){return N===null||M(N)?(v.exit("codeFencedFence"),$(N)):W(N)}}}function Mu(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const bt={name:"codeIndented",tokenize:Du},Ru={tokenize:Fu,partial:!0};function Du(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),X(e,o,"linePrefix",4+1)(c)}function o(c){const h=r.events[r.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?l(c):n(c)}function l(c){return c===null?u(c):M(c)?e.attempt(Ru,l,u)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||M(c)?(e.exit("codeFlowValue"),l(c)):(e.consume(c),a)}function u(c){return e.exit("codeIndented"),t(c)}}function Fu(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):M(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):X(e,o,"linePrefix",4+1)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):M(l)?i(l):n(l)}}const Nu={name:"codeText",tokenize:Vu,resolve:$u,previous:Hu};function $u(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Hu(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Vu(e,t,n){let r=0,i,o;return l;function l(d){return e.enter("codeText"),e.enter("codeTextSequence"),a(d)}function a(d){return d===96?(e.consume(d),r++,a):(e.exit("codeTextSequence"),u(d))}function u(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),u):d===96?(o=e.enter("codeTextSequence"),i=0,h(d)):M(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(d))}function c(d){return d===null||d===32||d===96||M(d)?(e.exit("codeTextData"),u(d)):(e.consume(d),c)}function h(d){return d===96?(e.consume(d),i++,h):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(o.type="codeTextData",c(d))}}function Qr(e){const t={};let n=-1,r,i,o,l,a,u,c;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Uu(e,n)),n=t[n],c=!0);else if(r[1]._container){for(o=n,i=void 0;o--&&(l=e[o],l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(i&&(e[i][1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);i&&(r[1].end=Object.assign({},e[i][1].start),a=e.slice(i,n),a.unshift(r),be(e,i,n-i+1,a))}}return!c}function Uu(e,t){const n=e[t][1],r=e[t][2];let i=t-1;const o=[],l=n._tokenizer||r.parser[n.contentType](n.start),a=l.events,u=[],c={};let h,d,f=-1,p=n,w=0,y=0;const I=[y];for(;p;){for(;e[++i][1]!==p;);o.push(i),p._tokenizer||(h=r.sliceStream(p),p.next||h.push(null),d&&l.defineSkip(p.start),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(h),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(y=f+1,I.push(y),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(l.events=[],p?(p._tokenizer=void 0,p.previous=void 0):I.pop(),f=I.length;f--;){const j=a.slice(I[f],I[f+1]),S=o.pop();u.unshift([S,S+j.length-1]),be(e,S,2,j)}for(f=-1;++f<u.length;)c[w+u[f][0]]=w+u[f][1],w+=u[f][1]-u[f][0]-1;return c}const Gu={tokenize:Wu,resolve:qu},Yu={tokenize:Qu,partial:!0};function qu(e){return Qr(e),e}function Wu(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):M(a)?e.check(Yu,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Qu(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),X(e,o,"linePrefix")}function o(l){if(l===null||M(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Xr(e,t,n,r,i,o,l,a,u){const c=u||Number.POSITIVE_INFINITY;let h=0;return d;function d(j){return j===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(j),e.exit(o),f):j===null||j===32||j===41||Ot(j)?n(j):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),y(j))}function f(j){return j===62?(e.enter(o),e.consume(j),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(j))}function p(j){return j===62?(e.exit("chunkString"),e.exit(a),f(j)):j===null||j===60||M(j)?n(j):(e.consume(j),j===92?w:p)}function w(j){return j===60||j===62||j===92?(e.consume(j),p):p(j)}function y(j){return!h&&(j===null||j===41||ie(j))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(j)):h<c&&j===40?(e.consume(j),h++,y):j===41?(e.consume(j),h--,y):j===null||j===32||j===40||Ot(j)?n(j):(e.consume(j),j===92?I:y)}function I(j){return j===40||j===41||j===92?(e.consume(j),y):y(j)}}function Zr(e,t,n,r,i,o){const l=this;let a=0,u;return c;function c(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(o),h}function h(p){return a>999||p===null||p===91||p===93&&!u||p===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(p):p===93?(e.exit(o),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):M(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),h):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||M(p)||a++>999?(e.exit("chunkString"),h(p)):(e.consume(p),u||(u=!U(p)),p===92?f:d)}function f(p){return p===91||p===92||p===93?(e.consume(p),a++,d):d(p)}}function Kr(e,t,n,r,i,o){let l;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),l=f===40?41:f,u):n(f)}function u(f){return f===l?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),c(f))}function c(f){return f===l?(e.exit(o),u(l)):f===null?n(f):M(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),X(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),h(f))}function h(f){return f===l||f===null||M(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?d:h)}function d(f){return f===l||f===92?(e.consume(f),h):h(f)}}function Ye(e,t){let n;return r;function r(i){return M(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):U(i)?X(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Xu={name:"definition",tokenize:Ku},Zu={tokenize:Ju,partial:!0};function Ku(e,t,n){const r=this;let i;return o;function o(p){return e.enter("definition"),l(p)}function l(p){return Zr.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return i=Re(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),u):n(p)}function u(p){return ie(p)?Ye(e,c)(p):c(p)}function c(p){return Xr(e,h,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function h(p){return e.attempt(Zu,d,d)(p)}function d(p){return U(p)?X(e,f,"whitespace")(p):f(p)}function f(p){return p===null||M(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):n(p)}}function Ju(e,t,n){return r;function r(a){return ie(a)?Ye(e,i)(a):n(a)}function i(a){return Kr(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return U(a)?X(e,l,"whitespace")(a):l(a)}function l(a){return a===null||M(a)?t(a):n(a)}}const ec={name:"hardBreakEscape",tokenize:tc};function tc(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return M(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const nc={name:"headingAtx",tokenize:ic,resolve:rc};function rc(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},be(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function ic(e,t,n){let r=0;return i;function i(h){return e.enter("atxHeading"),o(h)}function o(h){return e.enter("atxHeadingSequence"),l(h)}function l(h){return h===35&&r++<6?(e.consume(h),l):h===null||ie(h)?(e.exit("atxHeadingSequence"),a(h)):n(h)}function a(h){return h===35?(e.enter("atxHeadingSequence"),u(h)):h===null||M(h)?(e.exit("atxHeading"),t(h)):U(h)?X(e,a,"whitespace")(h):(e.enter("atxHeadingText"),c(h))}function u(h){return h===35?(e.consume(h),u):(e.exit("atxHeadingSequence"),a(h))}function c(h){return h===null||h===35||ie(h)?(e.exit("atxHeadingText"),a(h)):(e.consume(h),c)}}const oc=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Rn=["pre","script","style","textarea"],lc={name:"htmlFlow",tokenize:cc,resolveTo:uc,concrete:!0},sc={tokenize:hc,partial:!0},ac={tokenize:pc,partial:!0};function uc(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function cc(e,t,n){const r=this;let i,o,l,a,u;return c;function c(m){return h(m)}function h(m){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(m),d}function d(m){return m===33?(e.consume(m),f):m===47?(e.consume(m),o=!0,y):m===63?(e.consume(m),i=3,r.interrupt?t:x):ke(m)?(e.consume(m),l=String.fromCharCode(m),I):n(m)}function f(m){return m===45?(e.consume(m),i=2,p):m===91?(e.consume(m),i=5,a=0,w):ke(m)?(e.consume(m),i=4,r.interrupt?t:x):n(m)}function p(m){return m===45?(e.consume(m),r.interrupt?t:x):n(m)}function w(m){const xe="CDATA[";return m===xe.charCodeAt(a++)?(e.consume(m),a===xe.length?r.interrupt?t:_:w):n(m)}function y(m){return ke(m)?(e.consume(m),l=String.fromCharCode(m),I):n(m)}function I(m){if(m===null||m===47||m===62||ie(m)){const xe=m===47,Ie=l.toLowerCase();return!xe&&!o&&Rn.includes(Ie)?(i=1,r.interrupt?t(m):_(m)):oc.includes(l.toLowerCase())?(i=6,xe?(e.consume(m),j):r.interrupt?t(m):_(m)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(m):o?S(m):T(m))}return m===45||se(m)?(e.consume(m),l+=String.fromCharCode(m),I):n(m)}function j(m){return m===62?(e.consume(m),r.interrupt?t:_):n(m)}function S(m){return U(m)?(e.consume(m),S):B(m)}function T(m){return m===47?(e.consume(m),B):m===58||m===95||ke(m)?(e.consume(m),R):U(m)?(e.consume(m),T):B(m)}function R(m){return m===45||m===46||m===58||m===95||se(m)?(e.consume(m),R):O(m)}function O(m){return m===61?(e.consume(m),v):U(m)?(e.consume(m),O):T(m)}function v(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),u=m,$):U(m)?(e.consume(m),v):W(m)}function $(m){return m===u?(e.consume(m),u=null,z):m===null||M(m)?n(m):(e.consume(m),$)}function W(m){return m===null||m===34||m===39||m===47||m===60||m===61||m===62||m===96||ie(m)?O(m):(e.consume(m),W)}function z(m){return m===47||m===62||U(m)?T(m):n(m)}function B(m){return m===62?(e.consume(m),L):n(m)}function L(m){return m===null||M(m)?_(m):U(m)?(e.consume(m),L):n(m)}function _(m){return m===45&&i===2?(e.consume(m),G):m===60&&i===1?(e.consume(m),V):m===62&&i===4?(e.consume(m),ae):m===63&&i===3?(e.consume(m),x):m===93&&i===5?(e.consume(m),fe):M(m)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(sc,je,Y)(m)):m===null||M(m)?(e.exit("htmlFlowData"),Y(m)):(e.consume(m),_)}function Y(m){return e.check(ac,Z,je)(m)}function Z(m){return e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),N}function N(m){return m===null||M(m)?Y(m):(e.enter("htmlFlowData"),_(m))}function G(m){return m===45?(e.consume(m),x):_(m)}function V(m){return m===47?(e.consume(m),l="",ee):_(m)}function ee(m){if(m===62){const xe=l.toLowerCase();return Rn.includes(xe)?(e.consume(m),ae):_(m)}return ke(m)&&l.length<8?(e.consume(m),l+=String.fromCharCode(m),ee):_(m)}function fe(m){return m===93?(e.consume(m),x):_(m)}function x(m){return m===62?(e.consume(m),ae):m===45&&i===2?(e.consume(m),x):_(m)}function ae(m){return m===null||M(m)?(e.exit("htmlFlowData"),je(m)):(e.consume(m),ae)}function je(m){return e.exit("htmlFlow"),t(m)}}function pc(e,t,n){const r=this;return i;function i(l){return M(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function hc(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ht,t,n)}}const dc={name:"htmlText",tokenize:fc};function fc(e,t,n){const r=this;let i,o,l;return a;function a(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),u}function u(x){return x===33?(e.consume(x),c):x===47?(e.consume(x),O):x===63?(e.consume(x),T):ke(x)?(e.consume(x),W):n(x)}function c(x){return x===45?(e.consume(x),h):x===91?(e.consume(x),o=0,w):ke(x)?(e.consume(x),S):n(x)}function h(x){return x===45?(e.consume(x),p):n(x)}function d(x){return x===null?n(x):x===45?(e.consume(x),f):M(x)?(l=d,V(x)):(e.consume(x),d)}function f(x){return x===45?(e.consume(x),p):d(x)}function p(x){return x===62?G(x):x===45?f(x):d(x)}function w(x){const ae="CDATA[";return x===ae.charCodeAt(o++)?(e.consume(x),o===ae.length?y:w):n(x)}function y(x){return x===null?n(x):x===93?(e.consume(x),I):M(x)?(l=y,V(x)):(e.consume(x),y)}function I(x){return x===93?(e.consume(x),j):y(x)}function j(x){return x===62?G(x):x===93?(e.consume(x),j):y(x)}function S(x){return x===null||x===62?G(x):M(x)?(l=S,V(x)):(e.consume(x),S)}function T(x){return x===null?n(x):x===63?(e.consume(x),R):M(x)?(l=T,V(x)):(e.consume(x),T)}function R(x){return x===62?G(x):T(x)}function O(x){return ke(x)?(e.consume(x),v):n(x)}function v(x){return x===45||se(x)?(e.consume(x),v):$(x)}function $(x){return M(x)?(l=$,V(x)):U(x)?(e.consume(x),$):G(x)}function W(x){return x===45||se(x)?(e.consume(x),W):x===47||x===62||ie(x)?z(x):n(x)}function z(x){return x===47?(e.consume(x),G):x===58||x===95||ke(x)?(e.consume(x),B):M(x)?(l=z,V(x)):U(x)?(e.consume(x),z):G(x)}function B(x){return x===45||x===46||x===58||x===95||se(x)?(e.consume(x),B):L(x)}function L(x){return x===61?(e.consume(x),_):M(x)?(l=L,V(x)):U(x)?(e.consume(x),L):z(x)}function _(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),i=x,Y):M(x)?(l=_,V(x)):U(x)?(e.consume(x),_):(e.consume(x),Z)}function Y(x){return x===i?(e.consume(x),i=void 0,N):x===null?n(x):M(x)?(l=Y,V(x)):(e.consume(x),Y)}function Z(x){return x===null||x===34||x===39||x===60||x===61||x===96?n(x):x===47||x===62||ie(x)?z(x):(e.consume(x),Z)}function N(x){return x===47||x===62||ie(x)?z(x):n(x)}function G(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),t):n(x)}function V(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),ee}function ee(x){return U(x)?X(e,fe,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):fe(x)}function fe(x){return e.enter("htmlTextData"),l(x)}}const tn={name:"labelEnd",tokenize:kc,resolveTo:wc,resolveAll:yc},xc={tokenize:bc},mc={tokenize:jc},gc={tokenize:Cc};function yc(e){let t=-1;for(;++t<e.length;){const n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function wc(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const u={type:e[o][1].type==="labelLink"?"link":"image",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[o][1].start),end:Object.assign({},e[l][1].end)},h={type:"labelText",start:Object.assign({},e[o+r+2][1].end),end:Object.assign({},e[l-2][1].start)};return a=[["enter",u,t],["enter",c,t]],a=ue(a,e.slice(o+1,o+r+3)),a=ue(a,[["enter",h,t]]),a=ue(a,en(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=ue(a,[["exit",h,t],e[l-2],e[l-1],["exit",c,t]]),a=ue(a,e.slice(l+1)),a=ue(a,[["exit",u,t]]),be(e,o,e.length,a),e}function kc(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(f){return o?o._inactive?d(f):(l=r.parser.defined.includes(Re(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),u):n(f)}function u(f){return f===40?e.attempt(xc,h,l?h:d)(f):f===91?e.attempt(mc,h,l?c:d)(f):l?h(f):d(f)}function c(f){return e.attempt(gc,h,d)(f)}function h(f){return t(f)}function d(f){return o._balanced=!0,n(f)}}function bc(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return ie(d)?Ye(e,o)(d):o(d)}function o(d){return d===41?h(d):Xr(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function l(d){return ie(d)?Ye(e,u)(d):h(d)}function a(d){return n(d)}function u(d){return d===34||d===39||d===40?Kr(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):h(d)}function c(d){return ie(d)?Ye(e,h)(d):h(d)}function h(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function jc(e,t,n){const r=this;return i;function i(a){return Zr.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Re(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function Cc(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Sc={name:"labelStartImage",tokenize:vc,resolveAll:tn.resolveAll};function vc(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Ec={name:"labelStartLink",tokenize:Tc,resolveAll:tn.resolveAll};function Tc(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const jt={name:"lineEnding",tokenize:Ic};function Ic(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),X(e,t,"linePrefix")}}const tt={name:"thematicBreak",tokenize:Ac};function Ac(e,t,n){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),l(c)}function l(c){return i=c,a(c)}function a(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||M(c))?(e.exit("thematicBreak"),t(c)):n(c)}function u(c){return c===i?(e.consume(c),r++,u):(e.exit("thematicBreakSequence"),U(c)?X(e,a,"whitespace")(c):a(c))}}const re={name:"list",tokenize:_c,continuation:{tokenize:Lc},exit:Oc},Pc={tokenize:Mc,partial:!0},zc={tokenize:Bc,partial:!0};function _c(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(p){const w=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Mt(p)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(tt,n,c)(p):c(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(p)}return n(p)}function u(p){return Mt(p)&&++l<10?(e.consume(p),u):(!r.interrupt||l<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),c(p)):n(p)}function c(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(ht,r.interrupt?n:h,e.attempt(Pc,f,d))}function h(p){return r.containerState.initialBlankLine=!0,o++,f(p)}function d(p){return U(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):n(p)}function f(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function Lc(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ht,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,X(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!U(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(zc,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,X(e,e.attempt(re,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Bc(e,t,n){const r=this;return X(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function Oc(e){e.exit(this.containerState.type)}function Mc(e,t,n){const r=this;return X(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(o){const l=r.events[r.events.length-1];return!U(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Dn={name:"setextUnderline",tokenize:Dc,resolveTo:Rc};function Rc(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[o][1].end)):e[r][1]=l,e.push(["exit",l,t]),e}function Dc(e,t,n){const r=this;let i;return o;function o(c){let h=r.events.length,d;for(;h--;)if(r.events[h][1].type!=="lineEnding"&&r.events[h][1].type!=="linePrefix"&&r.events[h][1].type!=="content"){d=r.events[h][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=c,l(c)):n(c)}function l(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),U(c)?X(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||M(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const Fc={tokenize:Nc};function Nc(e){const t=this,n=e.attempt(ht,r,e.attempt(this.parser.constructs.flowInitial,i,X(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Gu,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const $c={resolveAll:ei()},Hc=Jr("string"),Vc=Jr("text");function Jr(e){return{tokenize:t,resolveAll:ei(e==="text"?Uc:void 0)};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(h){return c(h)?o(h):a(h)}function a(h){if(h===null){n.consume(h);return}return n.enter("data"),n.consume(h),u}function u(h){return c(h)?(n.exit("data"),o(h)):(n.consume(h),u)}function c(h){if(h===null)return!0;const d=i[h];let f=-1;if(d)for(;++f<d.length;){const p=d[f];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function ei(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Uc(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,u;for(;o--;){const c=i[o];if(typeof c=="string"){for(l=c.length;c.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(c===-2)u=!0,a++;else if(c!==-1){o++;break}}if(a){const c={type:n===e.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-a,offset:r.end.offset-a,_index:r.start._index+o,_bufferIndex:o?l:r.start._bufferIndex+l},end:Object.assign({},r.end)};r.end=Object.assign({},c.start),r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}function Gc(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},o=[];let l=[],a=[];const u={consume:S,enter:T,exit:R,attempt:$(O),check:$(v),interrupt:$(v,{interrupt:!0})},c={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:p,sliceSerialize:f,now:w,defineSkip:y,write:d};let h=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function d(L){return l=ue(l,L),I(),l[l.length-1]!==null?[]:(W(t,0),c.events=en(o,c.events,c),c.events)}function f(L,_){return qc(p(L),_)}function p(L){return Yc(l,L)}function w(){const{line:L,column:_,offset:Y,_index:Z,_bufferIndex:N}=r;return{line:L,column:_,offset:Y,_index:Z,_bufferIndex:N}}function y(L){i[L.line]=L.column,B()}function I(){let L;for(;r._index<l.length;){const _=l[r._index];if(typeof _=="string")for(L=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===L&&r._bufferIndex<_.length;)j(_.charCodeAt(r._bufferIndex));else j(_)}}function j(L){h=h(L)}function S(L){M(L)?(r.line++,r.column=1,r.offset+=L===-3?2:1,B()):L!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=L}function T(L,_){const Y=_||{};return Y.type=L,Y.start=w(),c.events.push(["enter",Y,c]),a.push(Y),Y}function R(L){const _=a.pop();return _.end=w(),c.events.push(["exit",_,c]),_}function O(L,_){W(L,_.from)}function v(L,_){_.restore()}function $(L,_){return Y;function Y(Z,N,G){let V,ee,fe,x;return Array.isArray(Z)?je(Z):"tokenize"in Z?je([Z]):ae(Z);function ae(te){return Ne;function Ne(ve){const Le=ve!==null&&te[ve],Ae=ve!==null&&te.null,xt=[...Array.isArray(Le)?Le:Le?[Le]:[],...Array.isArray(Ae)?Ae:Ae?[Ae]:[]];return je(xt)(ve)}}function je(te){return V=te,ee=0,te.length===0?G:m(te[ee])}function m(te){return Ne;function Ne(ve){return x=z(),fe=te,te.partial||(c.currentConstruct=te),te.name&&c.parser.constructs.disable.null.includes(te.name)?Ie():te.tokenize.call(_?Object.assign(Object.create(c),_):c,u,xe,Ie)(ve)}}function xe(te){return L(fe,x),N}function Ie(te){return x.restore(),++ee<V.length?m(V[ee]):G}}}function W(L,_){L.resolveAll&&!o.includes(L)&&o.push(L),L.resolve&&be(c.events,_,c.events.length-_,L.resolve(c.events.slice(_),c)),L.resolveTo&&(c.events=L.resolveTo(c.events,c))}function z(){const L=w(),_=c.previous,Y=c.currentConstruct,Z=c.events.length,N=Array.from(a);return{restore:G,from:Z};function G(){r=L,c.previous=_,c.currentConstruct=Y,c.events.length=Z,a=N,B()}}function B(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Yc(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function qc(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}const Wc={42:re,43:re,45:re,48:re,49:re,50:re,51:re,52:re,53:re,54:re,55:re,56:re,57:re,62:Yr},Qc={91:Xu},Xc={[-2]:bt,[-1]:bt,32:bt},Zc={35:nc,42:tt,45:[Dn,tt],60:lc,61:Dn,95:tt,96:Mn,126:Mn},Kc={38:Wr,92:qr},Jc={[-5]:jt,[-4]:jt,[-3]:jt,33:Sc,38:Wr,42:Rt,60:[Tu,dc],91:Ec,92:[ec,qr],93:tn,95:Rt,96:Nu},ep={null:[Rt,$c]},tp={null:[42,95]},np={null:[]},rp=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:tp,contentInitial:Qc,disable:np,document:Wc,flow:Zc,flowInitial:Xc,insideSpan:ep,string:Kc,text:Jc},Symbol.toStringTag,{value:"Module"}));function ip(e){const n=hu([rp,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:n,content:i(ku),document:i(ju),flow:i(Fc),string:i(Hc),text:i(Vc)};return r;function i(o){return l;function l(a){return Gc(r,o,a)}}}function op(e){for(;!Qr(e););return e}const Fn=/[\0\t\n\r]/g;function lp(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const u=[];let c,h,d,f,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),d=0,t="",n&&(o.charCodeAt(0)===65279&&d++,n=void 0);d<o.length;){if(Fn.lastIndex=d,c=Fn.exec(o),f=c&&c.index!==void 0?c.index:o.length,p=o.charCodeAt(f),!c){t=o.slice(d);break}if(p===10&&d===f&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),d<f&&(u.push(o.slice(d,f)),e+=f-d),p){case 0:{u.push(65533),e++;break}case 9:{for(h=Math.ceil(e/4)*4,u.push(-2);e++<h;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}d=f+1}return a&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const sp=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ap(e){return e.replace(sp,up)}function up(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Ur(n.slice(o?2:1),o?16:10)}return Jt(n)||e}const ti={}.hasOwnProperty;function cp(e,t,n){return typeof t!="string"&&(n=t,t=void 0),pp(n)(op(ip(n).document().write(lp()(e,t,!0))))}function pp(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(pn),autolinkProtocol:z,autolinkEmail:z,atxHeading:o(an),blockQuote:o(Le),characterEscape:z,characterReference:z,codeFenced:o(Ae),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(Ae,l),codeText:o(xt,l),codeTextData:z,data:z,codeFlowValue:z,definition:o(fi),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(xi),hardBreakEscape:o(un),hardBreakTrailing:o(un),htmlFlow:o(cn,l),htmlFlowData:z,htmlText:o(cn,l),htmlTextData:z,image:o(mi),label:l,link:o(pn),listItem:o(gi),listItemValue:f,listOrdered:o(hn,d),listUnordered:o(hn),paragraph:o(yi),reference:m,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(an),strong:o(wi),thematicBreak:o(bi)},exit:{atxHeading:u(),atxHeadingSequence:O,autolink:u(),autolinkEmail:ve,autolinkProtocol:Ne,blockQuote:u(),characterEscapeValue:B,characterReferenceMarkerHexadecimal:Ie,characterReferenceMarkerNumeric:Ie,characterReferenceValue:te,codeFenced:u(I),codeFencedFence:y,codeFencedFenceInfo:p,codeFencedFenceMeta:w,codeFlowValue:B,codeIndented:u(j),codeText:u(N),codeTextData:B,data:B,definition:u(),definitionDestinationString:R,definitionLabelString:S,definitionTitleString:T,emphasis:u(),hardBreakEscape:u(_),hardBreakTrailing:u(_),htmlFlow:u(Y),htmlFlowData:B,htmlText:u(Z),htmlTextData:B,image:u(V),label:fe,labelText:ee,lineEnding:L,link:u(G),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:xe,resourceDestinationString:x,resourceTitleString:ae,resource:je,setextHeading:u(W),setextHeadingLineSequence:$,setextHeadingText:v,strong:u(),thematicBreak:u()}};ni(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(b){let A={type:"root",children:[]};const D={stack:[A],tokenStack:[],config:t,enter:a,exit:c,buffer:l,resume:h,data:n},H=[];let q=-1;for(;++q<b.length;)if(b[q][1].type==="listOrdered"||b[q][1].type==="listUnordered")if(b[q][0]==="enter")H.push(q);else{const me=H.pop();q=i(b,me,q)}for(q=-1;++q<b.length;){const me=t[b[q][0]];ti.call(me,b[q][1].type)&&me[b[q][1].type].call(Object.assign({sliceSerialize:b[q][2].sliceSerialize},D),b[q][1])}if(D.tokenStack.length>0){const me=D.tokenStack[D.tokenStack.length-1];(me[1]||Nn).call(D,void 0,me[0])}for(A.position={start:Ee(b.length>0?b[0][1].start:{line:1,column:1,offset:0}),end:Ee(b.length>0?b[b.length-2][1].end:{line:1,column:1,offset:0})},q=-1;++q<t.transforms.length;)A=t.transforms[q](A)||A;return A}function i(b,A,D){let H=A-1,q=-1,me=!1,Pe,Ce,$e,He;for(;++H<=D;){const oe=b[H];switch(oe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{oe[0]==="enter"?q++:q--,He=void 0;break}case"lineEndingBlank":{oe[0]==="enter"&&(Pe&&!He&&!q&&!$e&&($e=H),He=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:He=void 0}if(!q&&oe[0]==="enter"&&oe[1].type==="listItemPrefix"||q===-1&&oe[0]==="exit"&&(oe[1].type==="listUnordered"||oe[1].type==="listOrdered")){if(Pe){let Be=H;for(Ce=void 0;Be--;){const Se=b[Be];if(Se[1].type==="lineEnding"||Se[1].type==="lineEndingBlank"){if(Se[0]==="exit")continue;Ce&&(b[Ce][1].type="lineEndingBlank",me=!0),Se[1].type="lineEnding",Ce=Be}else if(!(Se[1].type==="linePrefix"||Se[1].type==="blockQuotePrefix"||Se[1].type==="blockQuotePrefixWhitespace"||Se[1].type==="blockQuoteMarker"||Se[1].type==="listItemIndent"))break}$e&&(!Ce||$e<Ce)&&(Pe._spread=!0),Pe.end=Object.assign({},Ce?b[Ce][1].start:oe[1].end),b.splice(Ce||H,0,["exit",Pe,oe[2]]),H++,D++}if(oe[1].type==="listItemPrefix"){const Be={type:"listItem",_spread:!1,start:Object.assign({},oe[1].start),end:void 0};Pe=Be,b.splice(H,0,["enter",Be,oe[2]]),H++,D++,$e=void 0,He=!0}}}return b[A][1]._spread=me,D}function o(b,A){return D;function D(H){a.call(this,b(H),H),A&&A.call(this,H)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(b,A,D){this.stack[this.stack.length-1].children.push(b),this.stack.push(b),this.tokenStack.push([A,D]),b.position={start:Ee(A.start),end:void 0}}function u(b){return A;function A(D){b&&b.call(this,D),c.call(this,D)}}function c(b,A){const D=this.stack.pop(),H=this.tokenStack.pop();if(H)H[0].type!==b.type&&(A?A.call(this,b,H[0]):(H[1]||Nn).call(this,b,H[0]));else throw new Error("Cannot close `"+b.type+"` ("+Ge({start:b.start,end:b.end})+"): it’s not open");D.position.end=Ee(b.end)}function h(){return cu(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(b){if(this.data.expectingFirstListItemValue){const A=this.stack[this.stack.length-2];A.start=Number.parseInt(this.sliceSerialize(b),10),this.data.expectingFirstListItemValue=void 0}}function p(){const b=this.resume(),A=this.stack[this.stack.length-1];A.lang=b}function w(){const b=this.resume(),A=this.stack[this.stack.length-1];A.meta=b}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function I(){const b=this.resume(),A=this.stack[this.stack.length-1];A.value=b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function j(){const b=this.resume(),A=this.stack[this.stack.length-1];A.value=b.replace(/(\r?\n|\r)$/g,"")}function S(b){const A=this.resume(),D=this.stack[this.stack.length-1];D.label=A,D.identifier=Re(this.sliceSerialize(b)).toLowerCase()}function T(){const b=this.resume(),A=this.stack[this.stack.length-1];A.title=b}function R(){const b=this.resume(),A=this.stack[this.stack.length-1];A.url=b}function O(b){const A=this.stack[this.stack.length-1];if(!A.depth){const D=this.sliceSerialize(b).length;A.depth=D}}function v(){this.data.setextHeadingSlurpLineEnding=!0}function $(b){const A=this.stack[this.stack.length-1];A.depth=this.sliceSerialize(b).codePointAt(0)===61?1:2}function W(){this.data.setextHeadingSlurpLineEnding=void 0}function z(b){const D=this.stack[this.stack.length-1].children;let H=D[D.length-1];(!H||H.type!=="text")&&(H=ki(),H.position={start:Ee(b.start),end:void 0},D.push(H)),this.stack.push(H)}function B(b){const A=this.stack.pop();A.value+=this.sliceSerialize(b),A.position.end=Ee(b.end)}function L(b){const A=this.stack[this.stack.length-1];if(this.data.atHardBreak){const D=A.children[A.children.length-1];D.position.end=Ee(b.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(A.type)&&(z.call(this,b),B.call(this,b))}function _(){this.data.atHardBreak=!0}function Y(){const b=this.resume(),A=this.stack[this.stack.length-1];A.value=b}function Z(){const b=this.resume(),A=this.stack[this.stack.length-1];A.value=b}function N(){const b=this.resume(),A=this.stack[this.stack.length-1];A.value=b}function G(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const A=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=A,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function V(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const A=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=A,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function ee(b){const A=this.sliceSerialize(b),D=this.stack[this.stack.length-2];D.label=ap(A),D.identifier=Re(A).toLowerCase()}function fe(){const b=this.stack[this.stack.length-1],A=this.resume(),D=this.stack[this.stack.length-1];if(this.data.inReference=!0,D.type==="link"){const H=b.children;D.children=H}else D.alt=A}function x(){const b=this.resume(),A=this.stack[this.stack.length-1];A.url=b}function ae(){const b=this.resume(),A=this.stack[this.stack.length-1];A.title=b}function je(){this.data.inReference=void 0}function m(){this.data.referenceType="collapsed"}function xe(b){const A=this.resume(),D=this.stack[this.stack.length-1];D.label=A,D.identifier=Re(this.sliceSerialize(b)).toLowerCase(),this.data.referenceType="full"}function Ie(b){this.data.characterReferenceType=b.type}function te(b){const A=this.sliceSerialize(b),D=this.data.characterReferenceType;let H;D?(H=Ur(A,D==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):H=Jt(A);const q=this.stack.pop();q.value+=H,q.position.end=Ee(b.end)}function Ne(b){B.call(this,b);const A=this.stack[this.stack.length-1];A.url=this.sliceSerialize(b)}function ve(b){B.call(this,b);const A=this.stack[this.stack.length-1];A.url="mailto:"+this.sliceSerialize(b)}function Le(){return{type:"blockquote",children:[]}}function Ae(){return{type:"code",lang:null,meta:null,value:""}}function xt(){return{type:"inlineCode",value:""}}function fi(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function xi(){return{type:"emphasis",children:[]}}function an(){return{type:"heading",depth:0,children:[]}}function un(){return{type:"break"}}function cn(){return{type:"html",value:""}}function mi(){return{type:"image",title:null,url:"",alt:null}}function pn(){return{type:"link",title:null,url:"",children:[]}}function hn(b){return{type:"list",ordered:b.type==="listOrdered",start:null,spread:b._spread,children:[]}}function gi(b){return{type:"listItem",spread:b._spread,checked:null,children:[]}}function yi(){return{type:"paragraph",children:[]}}function wi(){return{type:"strong",children:[]}}function ki(){return{type:"text",value:""}}function bi(){return{type:"thematicBreak"}}}function Ee(e){return{line:e.line,column:e.column,offset:e.offset}}function ni(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?ni(e,r):hp(e,r)}}function hp(e,t){let n;for(n in t)if(ti.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Nn(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ge({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ge({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ge({start:t.start,end:t.end})+") is still open")}function dp(e){const t=this;t.parser=n;function n(r){return cp(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function fp(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function xp(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function mp(e,t){const n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i}function gp(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yp(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wp(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Fe(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,a+=1,e.footnoteCounts.set(r,a);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,c),e.applyData(t,c)}function kp(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function bp(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function ri(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function jp(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ri(e,t);const i={src:Fe(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Cp(e,t){const n={src:Fe(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Sp(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function vp(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ri(e,t);const i={href:Fe(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Ep(e,t){const n={href:Fe(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Tp(e,t,n){const r=e.all(t),i=n?Ip(n):ii(t),o={},l=[];if(typeof t.checked=="boolean"){const h=r[0];let d;h&&h.type==="element"&&h.tagName==="p"?d=h:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const h=r[a];(i||a!==0||h.type!=="element"||h.tagName!=="p")&&l.push({type:"text",value:`
`}),h.type==="element"&&h.tagName==="p"&&!i?l.push(...h.children):l.push(h)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,c),e.applyData(t,c)}function Ip(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=ii(n[r])}return t}function ii(e){const t=e.spread;return t??e.children.length>1}function Ap(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function Pp(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zp(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function _p(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Lp(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Qt(t.children[1]),u=Rr(t.children[t.children.length-1]);a&&u&&(l.position={start:a,end:u}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function Bp(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let u=-1;const c=[];for(;++u<a;){const d=t.children[u],f={},p=l?l[u]:void 0;p&&(f.align=p);let w={type:"element",tagName:o,properties:f,children:[]};d&&(w.children=e.all(d),e.patch(d,w),w=e.applyData(d,w)),c.push(w)}const h={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,h),e.applyData(t,h)}function Op(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const $n=9,Hn=32;function Mp(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Vn(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Vn(t.slice(i),i>0,!1)),o.join("")}function Vn(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===$n||o===Hn;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===$n||o===Hn;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Rp(e,t){const n={type:"text",value:Mp(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Dp(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Fp={blockquote:fp,break:xp,code:mp,delete:gp,emphasis:yp,footnoteReference:wp,heading:kp,html:bp,imageReference:jp,image:Cp,inlineCode:Sp,linkReference:vp,link:Ep,listItem:Tp,list:Ap,paragraph:Pp,root:zp,strong:_p,table:Lp,tableCell:Op,tableRow:Bp,text:Rp,thematicBreak:Dp,toml:Ke,yaml:Ke,definition:Ke,footnoteDefinition:Ke};function Ke(){}const oi=-1,dt=0,ot=1,lt=2,nn=3,rn=4,on=5,ln=6,li=7,si=8,Un=typeof self=="object"?self:globalThis,Np=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case dt:case oi:return n(l,i);case ot:{const a=n([],i);for(const u of l)a.push(r(u));return a}case lt:{const a=n({},i);for(const[u,c]of l)a[r(u)]=r(c);return a}case nn:return n(new Date(l),i);case rn:{const{source:a,flags:u}=l;return n(new RegExp(a,u),i)}case on:{const a=n(new Map,i);for(const[u,c]of l)a.set(r(u),r(c));return a}case ln:{const a=n(new Set,i);for(const u of l)a.add(r(u));return a}case li:{const{name:a,message:u}=l;return n(new Un[a](u),i)}case si:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i)}return n(new Un[o](l),i)};return r},Gn=e=>Np(new Map,e)(0),Oe="",{toString:$p}={},{keys:Hp}=Object,Ve=e=>{const t=typeof e;if(t!=="object"||!e)return[dt,t];const n=$p.call(e).slice(8,-1);switch(n){case"Array":return[ot,Oe];case"Object":return[lt,Oe];case"Date":return[nn,Oe];case"RegExp":return[rn,Oe];case"Map":return[on,Oe];case"Set":return[ln,Oe]}return n.includes("Array")?[ot,n]:n.includes("Error")?[li,n]:[lt,n]},Je=([e,t])=>e===dt&&(t==="function"||t==="symbol"),Vp=(e,t,n,r)=>{const i=(l,a)=>{const u=r.push(l)-1;return n.set(a,u),u},o=l=>{if(n.has(l))return n.get(l);let[a,u]=Ve(l);switch(a){case dt:{let h=l;switch(u){case"bigint":a=si,h=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);h=null;break;case"undefined":return i([oi],l)}return i([a,h],l)}case ot:{if(u)return i([u,[...l]],l);const h=[],d=i([a,h],l);for(const f of l)h.push(o(f));return d}case lt:{if(u)switch(u){case"BigInt":return i([u,l.toString()],l);case"Boolean":case"Number":case"String":return i([u,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const h=[],d=i([a,h],l);for(const f of Hp(l))(e||!Je(Ve(l[f])))&&h.push([o(f),o(l[f])]);return d}case nn:return i([a,l.toISOString()],l);case rn:{const{source:h,flags:d}=l;return i([a,{source:h,flags:d}],l)}case on:{const h=[],d=i([a,h],l);for(const[f,p]of l)(e||!(Je(Ve(f))||Je(Ve(p))))&&h.push([o(f),o(p)]);return d}case ln:{const h=[],d=i([a,h],l);for(const f of l)(e||!Je(Ve(f)))&&h.push(o(f));return d}}const{message:c}=l;return i([a,{name:u,message:c}],l)};return o},Yn=(e,{json:t,lossy:n}={})=>{const r=[];return Vp(!(t||n),!!t,new Map,r)(e),r},st=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Gn(Yn(e,t)):structuredClone(e):(e,t)=>Gn(Yn(e,t));function Up(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Gp(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Yp(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Up,r=e.options.footnoteBackLabel||Gp,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const h=e.all(c),d=String(c.identifier).toUpperCase(),f=Fe(d.toLowerCase());let p=0;const w=[],y=e.footnoteCounts.get(d);for(;y!==void 0&&++p<=y;){w.length>0&&w.push({type:"text",value:" "});let S=typeof n=="string"?n:n(u,p);typeof S=="string"&&(S={type:"text",value:S}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,p),className:["data-footnote-backref"]},children:Array.isArray(S)?S:[S]})}const I=h[h.length-1];if(I&&I.type==="element"&&I.tagName==="p"){const S=I.children[I.children.length-1];S&&S.type==="text"?S.value+=" ":I.children.push({type:"text",value:" "}),I.children.push(...w)}else h.push(...w);const j={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(h,!0)};e.patch(c,j),a.push(j)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...st(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const ai=function(e){if(e==null)return Xp;if(typeof e=="function")return ft(e);if(typeof e=="object")return Array.isArray(e)?qp(e):Wp(e);if(typeof e=="string")return Qp(e);throw new Error("Expected function, string, or object as test")};function qp(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=ai(e[n]);return ft(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function Wp(e){const t=e;return ft(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function Qp(e){return ft(t);function t(n){return n&&n.type===e}}function ft(e){return t;function t(n,r,i){return!!(Zp(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Xp(){return!0}function Zp(e){return e!==null&&typeof e=="object"&&"type"in e}const ui=[],Kp=!0,qn=!1,Jp="skip";function eh(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=ai(i),l=r?-1:1;a(e,void 0,[])();function a(u,c,h){const d=u&&typeof u=="object"?u:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(u.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=ui,w,y,I;if((!t||o(u,c,h[h.length-1]||void 0))&&(p=th(n(u,h)),p[0]===qn))return p;if("children"in u&&u.children){const j=u;if(j.children&&p[0]!==Jp)for(y=(r?j.children.length:-1)+l,I=h.concat(j);y>-1&&y<j.children.length;){const S=j.children[y];if(w=a(S,y,I)(),w[0]===qn)return w;y=typeof w[1]=="number"?w[1]:y+l}}return p}}}function th(e){return Array.isArray(e)?e:typeof e=="number"?[Kp,e]:e==null?ui:[e]}function ci(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),eh(e,o,a,i);function a(u,c){const h=c[c.length-1],d=h?h.children.indexOf(u):void 0;return l(u,d,h)}}const Dt={}.hasOwnProperty,nh={};function rh(e,t){const n=t||nh,r=new Map,i=new Map,o=new Map,l={...Fp,...n.handlers},a={all:c,applyData:oh,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:u,options:n,patch:ih,wrap:sh};return ci(e,function(h){if(h.type==="definition"||h.type==="footnoteDefinition"){const d=h.type==="definition"?r:i,f=String(h.identifier).toUpperCase();d.has(f)||d.set(f,h)}}),a;function u(h,d){const f=h.type,p=a.handlers[f];if(Dt.call(a.handlers,f)&&p)return p(a,h,d);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in h){const{children:y,...I}=h,j=st(I);return j.children=a.all(h),j}return st(h)}return(a.options.unknownHandler||lh)(a,h,d)}function c(h){const d=[];if("children"in h){const f=h.children;let p=-1;for(;++p<f.length;){const w=a.one(f[p],h);if(w){if(p&&f[p-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Wn(w.value)),!Array.isArray(w)&&w.type==="element")){const y=w.children[0];y&&y.type==="text"&&(y.value=Wn(y.value))}Array.isArray(w)?d.push(...w):d.push(w)}}}return d}}function ih(e,t){e.position&&(t.position=Na(e))}function oh(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,st(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function lh(e,t){const n=t.data||{},r="value"in t&&!(Dt.call(n,"hProperties")||Dt.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function sh(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Wn(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Qn(e,t){const n=rh(e,t),r=n.one(e,void 0),i=Yp(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function ah(e,t){return e&&"run"in e?async function(n,r){const i=Qn(n,t);await e.run(i,r)}:function(n){return Qn(n,t||e)}}function Xn(e){if(e)throw e}var nt=Object.prototype.hasOwnProperty,pi=Object.prototype.toString,Zn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Jn=function(t){return typeof Array.isArray=="function"?Array.isArray(t):pi.call(t)==="[object Array]"},er=function(t){if(!t||pi.call(t)!=="[object Object]")return!1;var n=nt.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&nt.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||nt.call(t,i)},tr=function(t,n){Zn&&n.name==="__proto__"?Zn(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},nr=function(t,n){if(n==="__proto__")if(nt.call(t,n)){if(Kn)return Kn(t,n).value}else return;return t[n]},uh=function e(){var t,n,r,i,o,l,a=arguments[0],u=1,c=arguments.length,h=!1;for(typeof a=="boolean"&&(h=a,a=arguments[1]||{},u=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});u<c;++u)if(t=arguments[u],t!=null)for(n in t)r=nr(a,n),i=nr(t,n),a!==i&&(h&&i&&(er(i)||(o=Jn(i)))?(o?(o=!1,l=r&&Jn(r)?r:[]):l=r&&er(r)?r:{},tr(a,{name:n,newValue:e(h,l,i)})):typeof i<"u"&&tr(a,{name:n,newValue:i}));return a};const Ct=Ii(uh);function Ft(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ch(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(u,...c){const h=e[++o];let d=-1;if(u){l(u);return}for(;++d<i.length;)(c[d]===null||c[d]===void 0)&&(c[d]=i[d]);i=c,h?ph(h,a)(...c):l(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function ph(e,t){let n;return r;function r(...l){const a=e.length>l.length;let u;a&&l.push(i);try{u=e.apply(this,l)}catch(c){const h=c;if(a&&n)throw h;return i(h)}a||(u instanceof Promise?u.then(o,i):u instanceof Error?i(u):o(u))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const we={basename:hh,dirname:dh,extname:fh,join:xh,sep:"/"};function hh(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Xe(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function dh(e){if(Xe(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function fh(e){Xe(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function xh(...e){let t=-1,n;for(;++t<e.length;)Xe(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":mh(n)}function mh(e){Xe(e);const t=e.codePointAt(0)===47;let n=gh(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function gh(e,t){let n="",r=0,i=-1,o=0,l=-1,a,u;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function Xe(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const yh={cwd:wh};function wh(){return"/"}function Nt(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function kh(e){if(typeof e=="string")e=new URL(e);else if(!Nt(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return bh(e)}function bh(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const St=["history","path","basename","stem","extname","dirname"];class hi{constructor(t){let n;t?Nt(t)?n={path:t}:typeof t=="string"||jh(t)?n={value:t}:n=t:n={},this.cwd=yh.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<St.length;){const o=St[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)St.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?we.basename(this.path):void 0}set basename(t){Et(t,"basename"),vt(t,"basename"),this.path=we.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?we.dirname(this.path):void 0}set dirname(t){rr(this.basename,"dirname"),this.path=we.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?we.extname(this.path):void 0}set extname(t){if(vt(t,"extname"),rr(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=we.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Nt(t)&&(t=kh(t)),Et(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?we.basename(this.path,this.extname):void 0}set stem(t){Et(t,"stem"),vt(t,"stem"),this.path=we.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ne(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function vt(e,t){if(e&&e.includes(we.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+we.sep+"`")}function Et(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function rr(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function jh(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Ch=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};Object.setPrototypeOf(o,r);const l=Object.getOwnPropertyNames(i);for(const a of l){const u=Object.getOwnPropertyDescriptor(i,a);u&&Object.defineProperty(o,a,u)}return o},Sh={}.hasOwnProperty;class sn extends Ch{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ch()}copy(){const t=new sn;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ct(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(At("data",this.frozen),this.namespace[t]=n,this):Sh.call(this.namespace,t)&&this.namespace[t]||void 0:t?(At("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=et(t),r=this.parser||this.Parser;return Tt("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Tt("process",this.parser||this.Parser),It("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const a=et(t),u=r.parse(a);r.run(u,a,function(h,d,f){if(h||!d||!f)return c(h);const p=d,w=r.stringify(p,f);Th(w)?f.value=w:f.result=w,c(h,f)});function c(h,d){h||!d?l(h):o?o(d):n(void 0,d)}}}processSync(t){let n=!1,r;return this.freeze(),Tt("processSync",this.parser||this.Parser),It("processSync",this.compiler||this.Compiler),this.process(t,i),or("processSync","process",n),r;function i(o,l){n=!0,Xn(o),r=l}}run(t,n,r){ir(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const u=et(n);i.run(t,u,c);function c(h,d,f){const p=d||t;h?a(h):l?l(p):r(void 0,p,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),or("runSync","run",r),i;function o(l,a){Xn(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=et(n),i=this.compiler||this.Compiler;return It("stringify",i),ir(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(At("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[h,...d]=c;u(h,d)}else l(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function l(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=Ct(!0,i.settings,c.settings))}function a(c){let h=-1;if(c!=null)if(Array.isArray(c))for(;++h<c.length;){const d=c[h];o(d)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,h){let d=-1,f=-1;for(;++d<r.length;)if(r[d][0]===c){f=d;break}if(f===-1)r.push([c,...h]);else if(h.length>0){let[p,...w]=h;const y=r[f][1];Ft(y)&&Ft(p)&&(p=Ct(!0,y,p)),r[f]=[c,p,...w]}}}}const vh=new sn().freeze();function Tt(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function It(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function At(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ir(e){if(!Ft(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function or(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function et(e){return Eh(e)?e:new hi(e)}function Eh(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Th(e){return typeof e=="string"||Ih(e)}function Ih(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Ah="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",lr=[],sr={allowDangerousHtml:!0},Ph=/^(https?|ircs?|mailto|xmpp)$/i,zh=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function _h(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",i=e.className,o=e.components,l=e.disallowedElements,a=e.rehypePlugins||lr,u=e.remarkPlugins||lr,c=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...sr}:sr,h=e.skipHtml,d=e.unwrapDisallowed,f=e.urlTransform||Lh,p=vh().use(dp).use(u).use(ah,c).use(a),w=new hi;typeof r=="string"&&(w.value=r);for(const S of zh)Object.hasOwn(e,S.from)&&(""+S.from+(S.to?"use `"+S.to+"` instead":"remove it")+Ah+S.id,void 0);const y=p.parse(w);let I=p.runSync(y,w);return i&&(I={type:"element",tagName:"div",properties:{className:i},children:I.type==="root"?I.children:[I]}),ci(I,j),Ya(I,{Fragment:s.Fragment,components:o,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function j(S,T,R){if(S.type==="raw"&&R&&typeof T=="number")return h?R.children.splice(T,1):R.children[T]={type:"text",value:S.value},T;if(S.type==="element"){let O;for(O in kt)if(Object.hasOwn(kt,O)&&Object.hasOwn(S.properties,O)){const v=S.properties[O],$=kt[O];($===null||$.includes(S.tagName))&&(S.properties[O]=f(String(v||""),O,S))}}if(S.type==="element"){let O=t?!t.includes(S.tagName):l?l.includes(S.tagName):!1;if(!O&&n&&typeof T=="number"&&(O=!n(S,T,R)),O&&R&&typeof T=="number")return d&&S.children?R.children.splice(T,1,...S.children):R.children.splice(T,1),T}}}function Lh(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t<0||i>-1&&t>i||n>-1&&t>n||r>-1&&t>r||Ph.test(e.slice(0,t))?e:""}const Bh=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"brand_awareness",children:[s.jsx("mask",{id:"mask0_3696_4540",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_3696_4540)",children:s.jsx("path",{id:"brand_awareness_2",d:"M15.577 10.625H13.8142C13.6368 10.625 13.4883 10.5652 13.3687 10.4455C13.249 10.3259 13.1892 10.1774 13.1892 10C13.1892 9.82269 13.249 9.67419 13.3687 9.55454C13.4883 9.43489 13.6368 9.37506 13.8142 9.37506H15.577C15.7543 9.37506 15.9028 9.43489 16.0225 9.55454C16.1421 9.67419 16.202 9.82269 16.202 10C16.202 10.1774 16.1421 10.3259 16.0225 10.4455C15.9028 10.5652 15.7543 10.625 15.577 10.625ZM12.1106 13.9279C12.2175 13.7816 12.354 13.6972 12.5201 13.6747C12.6862 13.6523 12.8425 13.6945 12.9888 13.8013L14.3943 14.8574C14.5406 14.9642 14.625 15.1007 14.6475 15.2669C14.6699 15.433 14.6277 15.5892 14.5209 15.7356C14.4141 15.882 14.2776 15.9664 14.1114 15.9888C13.9453 16.0112 13.7891 15.969 13.6427 15.8622L12.2372 14.8061C12.0909 14.6993 12.0065 14.5628 11.9841 14.3967C11.9616 14.2305 12.0038 14.0743 12.1106 13.9279ZM14.3622 5.1106L12.9568 6.16671C12.8104 6.27354 12.6542 6.31574 12.488 6.29331C12.3219 6.27087 12.1854 6.18646 12.0786 6.0401C11.9718 5.89374 11.9296 5.7375 11.952 5.57137C11.9744 5.40525 12.0588 5.26876 12.2052 5.16192L13.6106 4.10583C13.757 3.999 13.9133 3.9568 14.0794 3.97923C14.2455 4.00166 14.382 4.08606 14.4888 4.23244C14.5957 4.3788 14.6379 4.53504 14.6154 4.70116C14.593 4.86729 14.5086 5.00377 14.3622 5.1106ZM6.05778 12.0834H3.71805C3.5033 12.0834 3.32408 12.0115 3.18039 11.8678C3.03669 11.7241 2.96484 11.5449 2.96484 11.3301V8.66994C2.96484 8.4552 3.03669 8.27599 3.18039 8.13229C3.32408 7.98858 3.5033 7.91673 3.71805 7.91673H6.05778L8.55134 5.42317C8.75114 5.22339 8.9811 5.17771 9.24124 5.28614C9.50138 5.39459 9.63145 5.5909 9.63145 5.87508V14.125C9.63145 14.4092 9.50138 14.6055 9.24124 14.7139C8.9811 14.8224 8.75114 14.7767 8.55134 14.5769L6.05778 12.0834Z",fill:"currentColor"})})]})}),Oh=({trend:e,onClose:t,selectTrending:n})=>{const[r,i]=P.useState(!1),{close:o}=Pt("briefDescription"),l=P.useRef(null),a=()=>{n(e.name)},u=P.useCallback(()=>{t(),o()},[t,o]),c=()=>{l.current&&(r?l.current.pause():l.current.play(),i(!r)),i(!r)};return P.useEffect(()=>(window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}),[u]),s.jsxs(go,{id:"briefDescription",kind:"regular",noWrap:!0,onClose:u,children:[e.audio_EN?s.jsxs(s.Fragment,{children:[s.jsxs(g,{direction:"row",justify:"flex-start",m:20,children:[s.jsx(ce,{onClick:c,size:"small",startIcon:r?s.jsx(ut,{}):s.jsx(Bh,{}),style:{marginRight:"10px"},children:"Listen"}),s.jsx(ce,{onClick:a,size:"small",startIcon:s.jsx(Li,{}),children:"Learn More"})]}),s.jsx(Fh,{ref:l,src:e.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null,s.jsx(Dh,{children:e.tldr_topic??e.name}),s.jsx(Mh,{children:s.jsx(g,{children:s.jsx(Rh,{children:e.tldr&&s.jsx(_h,{children:e.tldr})})})})]})},Mh=C.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 8px 0;
  padding: 0 20px;
`,Rh=C(K)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,Dh=C(K)`
  font-weight: 600;
  font-size: 20px;
  padding: 0 20px;
`,Fh=C.audio`
  height: 0;
  width: 0;
`,Nh=["Drivechain","Ordinals","L402","Nostr","AI"],$h=({onSubmit:e})=>{var W;const{open:t}=Pt("addContent"),[n,r]=P.useState(!1),[i,o]=P.useState(!1),[l,a]=P.useState(null),u=P.useRef(null),[c,h]=P.useState(0),[d,f]=P.useState(!1),{open:p}=Pt("briefDescription"),{trendingTopics:w,setTrendingTopics:y}=pe(z=>z),{setValue:I}=hr(),j=P.useCallback(async()=>{r(!0),o(!1);try{const z=await Ai();z.length&&Array.isArray(z)&&y(z)}catch{y(Nh.map(B=>({name:B,count:0})))}finally{r(!1)}},[y,o]);P.useEffect(()=>{w.length||j()},[j,w.length]),P.useEffect(()=>{const z=setTimeout(()=>{o(!0)},5e3);return()=>clearTimeout(z)},[o,n]);const S=z=>{I("search",z),e==null||e()},T=(z,B)=>{z.stopPropagation(),z.currentTarget.blur(),B!=null&&B.tldr&&(a(B),p())},R=()=>{a(null)},O=z=>{z.stopPropagation(),z.currentTarget.blur(),f(!d)};P.useEffect(()=>{var z,B;d?(z=u.current)==null||z.play():(B=u.current)==null||B.pause()},[c,d]);const v=()=>{h(z=>{var L,_;let B=(z+1)%w.length;for(;B!==z&&!((L=w[B])!=null&&L.audio_EN);)B=(B+1)%w.length;return B===z?(f(!1),B):((_=u.current)==null||_.load(),B===0&&(f(!1),h(0)),B)})},$=n?"Loading":"No new trending topics in the last 24 hours";return s.jsxs(Vh,{"data-testid":"trending-component",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Trending Topics"}),s.jsx("span",{className:"heading__icon",children:n?s.jsx(Vt,{color:k.white,size:16}):s.jsx(s.Fragment,{children:i?s.jsx(Gh,{onClick:j,size:"small",startIcon:s.jsx(oa,{})}):s.jsx(la,{})})})]}),wo(w)?s.jsxs("div",{children:[s.jsx(ce,{onClick:z=>O(z),startIcon:d?s.jsx(ut,{}):s.jsx(Ht,{}),children:d?"Pause":"Play All"}),s.jsx(Yh,{ref:u,onEnded:v,src:(W=w[c])==null?void 0:W.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null]}),w.length===0?s.jsxs("div",{className:"trending-empty",children:[s.jsx(Uh,{children:$}),s.jsx(ce,{color:"secondary",disabled:n,onClick:t,size:"medium",startIcon:s.jsx(mo,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):s.jsx("ul",{className:"list",children:w.map(z=>s.jsxs(g,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>S(z.name),children:[s.jsxs(Hh,{children:[" #",ko(z)]}),z.tldr&&s.jsx(ce,{onClick:B=>T(B,z),children:"TLDR"})]},z.name))})]}),l&&s.jsx(Oh,{onClose:R,selectTrending:S,trend:l})]})},Hh=C.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 0.3pt;
`,Vh=C(g)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
    display: flex;
    align-items: center;
    color: ${k.GRAY6};
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
    color: ${k.GRAY6};
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${k.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${k.SECONDARY_BLUE};
      }
      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${k.PRIMARY_BLUE};
      }
    }
  }
`,Uh=C.p`
  color: ${k.GRAY6};
  margin-bottom: 20px;
`,Gh=C(ce)`
  && {
    min-width: 28px;
    width: 28px;
    padding: 0;
    height: 28px;
    .MuiButton-startIcon {
      color: ${k.white};
      margin: auto;
      display: flex;
      align-items: center;
    }
  }
`,Yh=C.audio`
  height: 0;
  width: 0;
`,qh=390,Wh=P.forwardRef(({onSubmit:e,subViewOpen:t},n)=>{const{isFetching:r,setTeachMe:i,setSidebarFilter:o}=pe(I=>I),l=ar(),{setSidebarOpen:a,currentSearch:u,clearSearch:c,searchFormValue:h}=ge(I=>I),[d]=Pi(I=>[I.trendingTopicsFlag]),{setValue:f}=hr(),p=P.useRef(null),[w,y]=P.useState(!1);return P.useEffect(()=>{f("search",h)},[f,h]),P.useEffect(()=>{const I=p.current;if(!I)return;const j=()=>{y((I==null?void 0:I.scrollTop)>0)};I.addEventListener("scroll",j)},[]),s.jsxs(Zh,{ref:n,id:"sidebar-wrapper",children:[s.jsx(r0,{}),s.jsxs(di,{className:Ue({"has-shadow":w}),children:[s.jsxs(Kh,{children:[s.jsx(no,{onSubmit:e}),s.jsx(e0,{onClick:()=>{if(u){f("search",""),c(),o("all");return}e==null||e()},children:r?s.jsx(Vt,{color:k.SECONDARY_BLUE,"data-testid":"loader",size:"20"}):s.jsx(s.Fragment,{children:u?s.jsx(Bi,{}):s.jsx(Oi,{})})})]}),u&&s.jsx(Jh,{children:r?s.jsx(Io,{}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"left",children:[s.jsx("span",{className:"count",children:l.length}),s.jsx("span",{className:"label",children:" results"})]}),s.jsx("div",{className:"right",style:{alignItems:"center"},children:s.jsx(So,{})})]})})]}),!t&&s.jsx(t0,{onClick:()=>{a(!1),i(!1)},children:s.jsx(jr,{})}),s.jsxs(n0,{ref:p,children:[!u&&d&&s.jsx(i0,{children:s.jsx($h,{onSubmit:e})}),s.jsx(g,{children:r?s.jsx(ol,{}):s.jsx(nl,{isSearchResult:!!u})})]})]})}),Qh=["topic","person","guest","event","organization","place","project","software"],Xh=({onSubmit:e})=>{const{sidebarIsOpen:t}=ge(o=>o),n=he(),r=!!n&&t&&!Qh.includes(n.node_type),{showTeachMe:i}=pe(o=>o);return s.jsxs(s.Fragment,{children:[s.jsx(Yt,{direction:"right",in:t,mountOnEnter:!0,unmountOnExit:!0,children:s.jsx(Wh,{onSubmit:e,subViewOpen:r})}),s.jsx(Ks,{open:r||!!i}),!t&&s.jsx(ra,{})]})},Zh=C(g)(({theme:e})=>({position:"relative",background:k.BG1,height:"100vh",width:"100%",zIndex:30,[e.breakpoints.up("sm")]:{width:qh}})),di=C(g).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:e})=>({padding:e.spacing(3.75,2),[e.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:k.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),Kh=C(g).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,Jh=C(g).attrs({direction:"row",justify:"space-between",align:"center"})`
  flex-grow: 1;
  color: ${k.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
  padding: 0 8px;
  .count {
    color: ${k.white};
  }

  .right {
    display: flex;
  }
`,e0=C(g).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${k.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${k.gray200}; */
  }

  ${di} input:focus + & {
    color: ${k.primaryBlue};
  }
`,t0=C(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:k.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:k.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:k.BG1_HOVER},"&:active":{backgroundColor:k.BG1_PRESS,color:k.GRAY6}})),n0=C(g)(()=>({overflow:"auto",flex:1,width:"100%"})),r0=C(g)`
  height: 64px;
  background: ${k.BG2};
`,i0=C(g)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`;Xh.displayName="Sidebar";export{qh as MENU_WIDTH,Xh as SideBar};
