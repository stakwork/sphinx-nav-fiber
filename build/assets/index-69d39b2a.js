import{r as P,X as Si,Z as mt,s as S,b as y,j as s,F as g,T as Z,p as $t,g as ur,P as cr,e as vi,q as Ei,z as dn,C as Ti,k as Ii}from"./index-84e0b589.js";import{at as Ai,u as ce,f as Ue,A as xe,e as me,au as pr,av as Pi,B as ue,z as zi,aw as fn,ax as _i,O as ge,M as Li,I as hr,P as at,R as dr,ay as ut,T as Ht,C as Vt,az as Bi,W as fr,aA as Oi,l as Mi,m as Ri}from"./react-toastify.esm-1ef9dd2a.js";import{C as xr}from"./CheckIcon-5c2b157b.js";import{C as mr}from"./ChevronDownIcon-6a3a49d1.js";import{d as Di}from"./ChevronUpIcon-457634ed.js";import{F as gr,a as Fi,T as Ni}from"./Popover-d66dbbb1.js";import{G as yr,L as Ut,B as Gt,H as $i,M as Hi,R as Vi,a as Ui,S as Gi,b as qi,N as wr,C as Yi,D as br,c as kr,d as Wi,f as Qi,g as jr,e as Xi,P as Zi,h as Cr,s as xn,V as Ki,F as Ji,E as eo,i as to,j as no,k as Sr,l as ro}from"./ChevronRightIcon-e15bf131.js";import{S as io}from"./index-bee64ca9.js";import{f as rt,o as vr,n as oo,X as lo,Y as so,T as ao,D as uo,S as qt,q as Er}from"./generateCategoricalChart-8aeb07b9.js";import{T as We}from"./index-f8569c04.js";import{S as co}from"./Skeleton-78242202.js";import{T as mn}from"./toastMessage-fa439be9.js";import{g as po,d as ho}from"./index.esm-8b73d840.js";import{I as fo,S as xo,O as mo}from"./Select-ea38c162.js";import{I as go}from"./InfoIcon-ce270097.js";import{P as yo}from"./PlusIcon-06121583.js";import{u as zt}from"./index-6ab12e0f.js";import{B as wo}from"./index-42cc1ddd.js";import"./index-664cf71e.js";import"./useSlotProps-636ece8e.js";const bo=(e,t="down")=>{const n=Ai(),[r,i]=P.useState(!1),o=n.breakpoints[t](e).split("@media")[1].trim();return P.useEffect(()=>{const l=()=>{const{matches:a}=window.matchMedia(o);i(a)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[o]),r},ko=e=>e.filter(t=>t.tldr).length>=2&&e.some(t=>t.audio_EN);function jo(e){return e.tldr_topic??e.topic}var it=globalThis&&globalThis.__assign||function(){return it=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},it.apply(this,arguments)},Co=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},So=Si("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function vo(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?"#000000":r,o=e.speedMultiplier,l=o===void 0?1:o,a=e.cssOverride,u=a===void 0?{}:a,c=e.size,p=c===void 0?15:c,d=e.margin,f=d===void 0?2:d,h=Co(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),w=it({display:"inherit"},u),b=function(E){return{display:"inline-block",backgroundColor:i,width:mt(p),height:mt(p),margin:mt(f),borderRadius:"100%",animation:"".concat(So," ").concat(.7/l,"s ").concat(E%2?"0s":"".concat(.35/l,"s")," infinite linear"),animationFillMode:"both"}};return n?P.createElement("span",it({style:w},h),P.createElement("span",{style:b(1)}),P.createElement("span",{style:b(2)}),P.createElement("span",{style:b(3)})):null}const gt={all:"All",podcast:"Audio",episode:"Episode",document:"Document",person:"People",show:"Show",twitter_space:"TwitterSpace",tweet:"Tweet",youtube:"Video"},Eo=()=>{const[e,t]=P.useState(null),{sidebarFilter:n,setSidebarFilter:r}=ce(a=>a),i=a=>{t(a.currentTarget)},o=()=>{t(null)},l=a=>{r(a),o()};return s.jsxs("div",{children:[s.jsxs(To,{onClick:i,children:[s.jsx("div",{className:"text",children:"Show"}),s.jsx("div",{className:"value","data-testid":"value",children:gt[n]}),s.jsx("div",{className:"icon",children:e?s.jsx(Di,{}):s.jsx(mr,{})})]}),s.jsx(Ao,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:o,open:!!e,transformOrigin:{vertical:"top",horizontal:"left"},children:s.jsx(gr,{children:Object.keys(gt).map(a=>s.jsxs(Io,{className:Ue({active:a===n}),onClick:()=>l(a),children:[s.jsx("span",{className:"icon",children:a===n?s.jsx(xr,{}):null}),s.jsx("span",{children:gt[a]})]},a))})})]})},To=S(g).attrs({direction:"row",align:"center"})`
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
`,Io=S(g).attrs({direction:"row",align:"center"})`
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
`,Ao=S(Fi)`
  .MuiPaper-root {
    background: ${y.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${y.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,yt=[["Searching","Podcast Index"],["Searching","YouTube"],["Searching","Twitter Spaces"],["Finding","Transcripts"],["Loading","Audio Clips"],["Loading","Video Clips"],["Preparing","Results"]],Po=()=>{const[e,t]=P.useState(0);return P.useEffect(()=>{if(e===yt.length-1)return;const n=setTimeout(()=>t(r=>(r+1)%yt.length),2e3);return()=>clearTimeout(n)},[e]),s.jsx(zo,{direction:"column",children:yt.map((n,r)=>s.jsxs(g,{className:Ue("raw-wrapper",{show:e===r}),direction:"row",children:[s.jsx("div",{className:Ue("action"),children:n[0]}),s.jsx("div",{className:Ue("entity"),children:n[1]}),s.jsx("div",{children:s.jsx(vo,{color:y.SECONDARY_BLUE,size:2})})]},n[1]))})},zo=S(g)`
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
`,_o=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"browse_gallery",children:[s.jsx("mask",{id:"mask0_1360_27257",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1360_27257)",children:s.jsx("path",{id:"browse_gallery_2",d:"M11.8 15.8442L12.8442 14.8L9.74998 11.7026V7.25003H8.25003V12.2942L11.8 15.8442ZM18 19.9615V18.3C19.2333 17.7167 20.2083 16.8583 20.925 15.725C21.6417 14.5917 22 13.35 22 12C22 10.65 21.6417 9.40834 20.925 8.27501C20.2083 7.14167 19.2333 6.28334 18 5.70001V4.03851C19.6628 4.67184 20.9952 5.71318 21.9971 7.16253C22.999 8.61188 23.5 10.2244 23.5 12C23.5 13.7756 22.999 15.3881 21.9971 16.8375C20.9952 18.2868 19.6628 19.3282 18 19.9615ZM9.00055 20.5C7.8207 20.5 6.71539 20.2769 5.68463 19.8307C4.65386 19.3846 3.75514 18.7782 2.98848 18.0115C2.22181 17.2449 1.61541 16.3463 1.16927 15.3159C0.723092 14.2855 0.5 13.1804 0.5 12.0006C0.5 10.8207 0.723083 9.7154 1.16925 8.68463C1.6154 7.65386 2.2218 6.75515 2.98845 5.98848C3.75512 5.22183 4.65365 4.61543 5.68405 4.16928C6.71445 3.72311 7.81957 3.50003 8.99942 3.50003C10.1793 3.50003 11.2846 3.72311 12.3154 4.16928C13.3461 4.61543 14.2448 5.22183 15.0115 5.98848C15.7782 6.75515 16.3846 7.65368 16.8307 8.68408C17.2769 9.71448 17.5 10.8196 17.5 11.9995C17.5 13.1793 17.2769 14.2846 16.8307 15.3154C16.3846 16.3461 15.7782 17.2449 15.0115 18.0115C14.2448 18.7782 13.3463 19.3846 12.3159 19.8307C11.2855 20.2769 10.1804 20.5 9.00055 20.5ZM9 19C10.95 19 12.6042 18.3208 13.9625 16.9625C15.3208 15.6042 16 13.95 16 12C16 10.05 15.3208 8.39584 13.9625 7.03751C12.6042 5.67917 10.95 5.00001 9 5.00001C7.05 5.00001 5.39583 5.67917 4.0375 7.03751C2.67917 8.39584 2 10.05 2 12C2 13.95 2.67917 15.6042 4.0375 16.9625C5.39583 18.3208 7.05 19 9 19Z",fill:"currentColor"})})]})}),Lo=e=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("mask",{id:"mask0_2638_2680",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_2638_2680)",children:s.jsx("path",{d:"M9.99732 16C9.90858 16 9.82421 15.985 9.74419 15.9551C9.66418 15.9252 9.5909 15.8765 9.52435 15.8091L6.18835 12.4277C6.06278 12.3004 6 12.1406 6 11.9483C6 11.7559 6.06278 11.5961 6.18835 11.4689C6.32145 11.3315 6.48099 11.2648 6.66697 11.2686C6.85295 11.2724 7.00873 11.3392 7.13429 11.4689L9.32114 13.674V4.68539C9.32114 4.49306 9.3864 4.33074 9.51692 4.19845C9.64744 4.06615 9.80758 4 9.99732 4C10.1871 4 10.3472 4.06615 10.4777 4.19845C10.6082 4.33074 10.6735 4.49306 10.6735 4.68539V13.674L12.849 11.4689C12.9845 11.3315 13.1447 11.2629 13.3294 11.2629C13.5143 11.2629 13.6744 11.3315 13.8099 11.4689C13.9378 11.6062 14.0012 11.7685 14 11.9558C13.9988 12.1431 13.9354 12.3004 13.8099 12.4277L10.4738 15.8091C10.4073 15.8765 10.3334 15.9252 10.2522 15.9551C10.171 15.985 10.0861 16 9.99732 16Z",fill:"currentColor"})})]}),Bo=S(g)`
  overflow-y: auto;
  overflow-x: hidden;
  background: ${y.body};
`,Oo=({imageUrl:e,name:t})=>s.jsxs(g,{align:"center",direction:"row",children:[e&&s.jsx(Mo,{children:s.jsx(xe,{rounded:!0,size:64,src:e||"",type:"image"})}),t&&s.jsx(Ro,{children:t})]}),Mo=S(g)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Ro=S(g)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Do=({text:e,type:t,sourceLink:n})=>s.jsxs(g,{direction:"column",children:[s.jsx(g,{align:"center",direction:"row",children:s.jsx(We,{type:t})}),s.jsx(Ir,{"data-testid":"episode-description",children:e}),s.jsx(g,{align:"center",direction:"row",justify:"flex-start",children:n&&s.jsxs(Fo,{href:n,onClick:r=>r.stopPropagation(),target:"_blank",children:[s.jsx(yr,{}),s.jsx(No,{children:n})]})})]}),Fo=S.a`
  color: ${y.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,No=S(Z)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${y.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,$o=({title:e,imageUrl:t,name:n})=>s.jsxs(g,{align:"center",direction:"row",children:[s.jsx(Ho,{children:s.jsx(xe,{rounded:!0,size:64,src:t||"",type:"person"})}),(e||n)&&s.jsx(Vo,{children:e||n})]}),Ho=S(g)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Vo=S(g)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Uo=({text:e,imageUrl:t,date:n,twitterHandle:r,name:i,verified:o})=>s.jsxs(g,{direction:"column",children:[s.jsxs(g,{align:"center",direction:"row",pr:16,children:[s.jsx(Go,{children:s.jsx(xe,{rounded:!0,size:27,src:t||"",type:"person"})}),s.jsxs(g,{children:[s.jsxs(qo,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),r&&s.jsxs(Yo,{children:["@",r]})]})]}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Wo,{"data-testid":"episode-description",children:e}),s.jsx(g,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!n&&s.jsx(ct,{children:$t.unix(n).fromNow()})})]})]}),Go=S(g)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,qo=S(g)`
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
`,Yo=S(g)`
  color: ${y.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,Wo=S(g)`
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
`,Qo=S(g).attrs({direction:"column"})`
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
`,Tr=({boostCount:e,date:t,episodeTitle:n,isSelectedView:r=!1,imageUrl:i,showTitle:o,type:l,text:a,name:u,profilePicture:c,sourceLink:p,verified:d=!1,twitterHandle:f,className:h="episode-wrapper",onClick:w})=>{const b=l==="show"?o:n,E=l==="show"?"":o,k=["tweet","person","guest","topic","document"],C=l==="youtube"?"video":"audio";return l?s.jsx(Qo,{className:h,onClick:w,children:k.includes(l)?s.jsxs(s.Fragment,{children:[l==="topic"&&s.jsxs(Xo,{children:[s.jsx($i,{}),s.jsx("p",{children:E})]}),["person","guest"].includes(l)&&s.jsx($o,{imageUrl:i,name:u||"",title:o||""}),["image"].includes(l)&&s.jsx(Oo,{imageUrl:p,name:u||""}),l==="tweet"&&s.jsx(Uo,{date:t,imageUrl:c,name:u||"",text:a||"",twitterHandle:f,verified:d}),l==="document"&&s.jsx(Do,{sourceLink:p||"",text:a||"",type:l})]}):s.jsxs(g,{direction:"row",children:[!r&&s.jsx(g,{align:"center",pr:16,children:s.jsx(xe,{size:64,src:i||`${C}_default.svg`,type:l||""})}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsxs(g,{align:"center",direction:"row",justify:"space-between",children:[s.jsx(g,{align:"center",direction:"row",children:l&&s.jsx(We,{type:l})}),l==="youtube"&&p?s.jsx(Ko,{href:`${p}?open=system`,onClick:I=>I.stopPropagation(),children:s.jsx(Ut,{})}):null]}),s.jsx(Ir,{"data-testid":"episode-description",children:b}),s.jsxs(g,{align:"center",direction:"row",justify:"flex-start",children:[!!t&&s.jsx(ct,{children:$t.unix(t).fromNow()}),!!E&&s.jsx(Zo,{children:E}),!r&&e>0&&s.jsx(g,{style:{marginLeft:"auto"},children:s.jsx(Gt,{amt:e})})]})]})]})}):null},Ir=S(g)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: ${y.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
`,ct=S(Z)`
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
`,Xo=S.div`
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
`,Zo=S(ct)`
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
    background: ${y.GRAY6};

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
`,Ko=S.a`
  color: ${y.GRAY6};
  font-size: 16px;
  height: 16px;
`,Jo=({isSearchResult:e})=>{const t=P.useRef(null),n=e?80:10,{setSelectedNode:r,setSelectedTimestamp:i}=ce(k=>k),{currentSearch:o,setSidebarOpen:l,setRelevanceSelected:a}=me(k=>k),[u,c]=P.useState(0),p=pr(),f=u*n+n,h=p&&p.length>0?p.length-1>f:!1,w=bo("sm","down"),b=P.useCallback(k=>{Pi(k),i(k),a(!0),r(k),w&&l(!1)},[r,a,l,i,w]),E=P.useMemo(()=>{if(p){const k=[...p].sort((C,I)=>(I.date||0)-(C.date||0));return o&&k.sort((C,I)=>{const F=C.node_type==="topic"&&C.name.toLowerCase()===o.toLowerCase()?1:0;return(I.node_type==="topic"&&I.name.toLowerCase()===o.toLowerCase()?1:0)-F}),k.slice(0,f)}return[]},[p,o,f]);return s.jsx(s.Fragment,{children:s.jsxs(Bo,{ref:t,id:"search-result-list",shrink:1,children:[(E??[]).map((k,C)=>{const{image_url:I,date:F,boost:M,type:v,episode_title:$,show_title:Y,node_type:z,text:O,source_link:L,link:_,name:U,profile_picture:H,verified:B=!1,twitter_handle:X}=k||{};return s.jsx(Tr,{boostCount:M||0,date:F||0,episodeTitle:rt($),imageUrl:I||"",link:_,name:U||"",onClick:()=>{b(k)},profilePicture:H,showTitle:rt(Y),sourceLink:L,text:O||"",twitterHandle:X,type:z||v,verified:B},C.toString())}),s.jsx(tl,{align:"center",background:"BG1",direction:"row",justify:"center",children:h&&s.jsx(ue,{onClick:()=>{h&&c(u+1)},size:"medium",children:"Load More"})})]})})},el=P.memo(Jo),tl=S(g)`
  flex: 0 0 86px;
`,nl=({isSearchResult:e})=>{const{nodeCount:t,setNodeCount:n,setBudget:r}=ur(l=>l),{fetchData:i}=ce(l=>l),o=async()=>{t<1||(await i(r,{skip_cache:"true"}),n("CLEAR"))};return s.jsxs(ol,{children:[!e&&s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Latest"}),s.jsx("span",{className:"heading__icon",children:s.jsx(_o,{})})]}),t?s.jsx("div",{className:"button_container",children:s.jsx(rl,{className:"button",onClick:o,startIcon:s.jsx(Lo,{}),children:`See Latest (${t})`})}):null]}),s.jsx(el,{isSearchResult:e})]})},rl=S(ue)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${y.GRAY6};
    }
  }
`,il=P.memo(nl),ol=S(g)`
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
`,ll=S(g).attrs({direction:"column"})`
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
`,Ze=S(co)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,sl=()=>s.jsx(s.Fragment,{children:Array(7).fill(null).map((e,t)=>s.jsx(ll,{children:s.jsxs(g,{direction:"row",children:[s.jsx(g,{align:"center",pr:16,children:s.jsx(Ze,{animation:"wave",height:64,variant:"rectangular",width:64})}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Ze,{height:10,variant:"rectangular",width:56}),s.jsx(Ze,{className:"title",height:10,variant:"rectangular",width:262}),s.jsx(Ze,{height:10,variant:"rectangular",width:149})]})]})},t))});S(g)`
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
`;const al=S(Z)`
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
`;S(al)`
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
`;const ul=48,cl=8,pl={PaperProps:{style:{maxHeight:ul*4.5+cl,width:250}}},hl=["Beginner","Intermediate","Advanced","Expert"],dl=()=>{const e=ce(C=>C.data),[t,n]=P.useState(""),[r,i]=P.useState("Beginner"),o=me(C=>C.currentSearch),l=zi(),[a]=ur(C=>[C.setBudget]),[u,c,p,d,f]=vr(C=>[C.askedQuestions,C.askedQuestionsAnswers,C.setAskedQuestion,C.setAskedQuestionAnswer,C.hasQuestionInProgress]),h=P.useCallback(C=>{d(C.answer),fn(s.jsx(mn,{message:"Response is ready"}),{position:"bottom-center",type:"success"})},[d]);P.useEffect(()=>{l&&h&&l.on("askquestionhook",h)},[h,l]);const w=async()=>{t&&(p(t),n(""));try{const C=e==null?void 0:e.nodes.filter(M=>M.text),I=C==null?void 0:C.slice(0,5),F=(I!=null&&I.length?I.map(M=>M.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,M=>`\\${M}`);o&&(await vi.enable(),await _i({expertise_level:r,question_text:t,search_term:o,transcripts:F},a),await Ei(a),fn(s.jsx(mn,{message:"We started preparing response for you"}),{type:"success"}))}catch(C){console.error(C)}},b=r&&t.trim()&&!f,E=C=>{i(C.target.value)},k=async C=>{if(f){C.preventDefault();return}C.keyCode===13&&C.shiftKey===!1&&b&&(C.preventDefault(),w())};return s.jsxs(fl,{children:[s.jsx(g,{children:s.jsx(g,{children:s.jsxs(gr,{component:"div",children:[s.jsx(ml,{id:"select-label",size:"small",children:"Expertise level"}),s.jsx(gl,{id:"demo-multiple-name",input:s.jsx(mo,{label:"Expertise level"}),labelId:"select-label",MenuProps:pl,onChange:E,size:"small",value:r,children:hl.map(C=>s.jsx(Hi,{component:"li",value:C,children:C},C))})]})})}),s.jsx(bl,{children:u==null?void 0:u.map((C,I)=>s.jsxs(g,{className:"response",py:12,children:[s.jsx(Z,{kind:"medium",children:C}),s.jsx(g,{py:12,children:(c==null?void 0:c[I])!==void 0?s.jsx(Z,{color:"unreadMsgText",children:c[I]}):s.jsxs(g,{align:"center",py:12,children:[s.jsx(g,{align:"center",py:12,children:s.jsx(cr,{color:y.white})}),s.jsx(g,{align:"center",py:12,children:s.jsx(Z,{children:"Generating response"})})]})})]},C))}),s.jsxs(yl,{onKeyDown:k,py:12,tabIndex:-1,children:[s.jsx(xl,{disabled:f,onChange:C=>n(C.target.value),placeholder:"Enter your question",value:t}),s.jsx(wl,{children:s.jsx(po,{color:b?y.white:y.gray300,size:"18"})})]})]})},fl=S.div`
  margin-top: 20px;
`,xl=S(Ni)`
  background: ${y.inputBg1};
  max-width: 100%;
  color: ${y.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,ml=S(fo)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${y.secondaryText4};
  }
`,gl=S(xo)`
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
`,yl=S(g)`
  position: relative;
`,wl=S(g)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,bl=S(g)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${y.divider2};
  }
`,gn=({text:e})=>s.jsxs(g,{align:"center",justify:"center",py:12,children:[s.jsx(g,{align:"center",py:12,children:s.jsx(cr,{color:y.white})}),s.jsx(g,{align:"center",py:12,children:s.jsx(Z,{children:e})})]}),kl=()=>{const[e,t,n,r]=vr(o=>[o.teachMeAnswer,o.hasTeachingInProgress,o.instgraphAnswser,o.hasInstagraphInProgress]),i=!r&&!!(n!=null&&n.edges)&&!!(n!=null&&n.nodes);return s.jsxs(s.Fragment,{children:[i?s.jsx(Vi,{edges:n==null?void 0:n.edges,nodes:n==null?void 0:n.nodes}):s.jsx(gn,{text:"Generating instagraph"}),t?s.jsx(gn,{text:"Generating tutorial"}):s.jsxs(s.Fragment,{children:[s.jsx(jl,{children:s.jsx(Z,{children:e})}),s.jsx(dl,{})]})]})};S(ue)``;const jl=S(g)`
  padding-left: 10px;
  padding-right: 10px;
`,Cl=({cx:e,cy:t})=>s.jsx(uo,{cx:e,cy:t,fill:y.blueTextAccent,r:2}),Sl=()=>{const e=ge(),t=[...(e==null?void 0:e.data)||[]].sort((i,o)=>(i.year||0)-(o.year||0)),n=t.map(i=>i.year).filter(i=>i),r=t.map(i=>i.rate).filter(i=>i);return s.jsx(vl,{direction:"column",px:24,py:16,children:s.jsx(Ui,{height:"100%",width:"100%",children:s.jsxs(Gi,{margin:{bottom:20,left:20,right:20,top:20},children:[s.jsx(oo,{stroke:"#f5f5f5"}),s.jsx(lo,{dataKey:"year",domain:[Math.min(...n),Math.max(...n)],label:{fill:y.white,fontSize:"12px",offset:-10,position:"insideBottom",value:e.x_axis_name},name:"X",tick:{fill:y.white,fontSize:"8px"},type:"number"}),s.jsx(so,{color:"#000",dataKey:"rate",domain:[Math.min(...r),Math.max(...r)],label:{angle:-90,fill:y.white,fontSize:"12px",offset:0,position:"insideLeft",value:e.y_axis_name},name:"Y",tick:{fill:y.white,fontSize:"8px"},type:"number"}),s.jsx(ao,{cursor:{strokeDasharray:"3 3"}}),s.jsx(qi,{data:t,fill:y.blueTextAccent,line:!0,name:"A scatter",shape:s.jsx(Cl,{})})]})})})},vl=S(g)`
  width: 100%;
  height: 100%;
`;function pt(e,t){if(!(t!=null&&t.trim()))return e;const n=new RegExp(`(${t})`,"gi"),r=e.split(n);return s.jsx(s.Fragment,{children:r.map((i,o)=>n.test(i)?s.jsx(El,{children:i},o):i)})}const El=S.span`
  background-color: rgba(0, 123, 255, 0.4);
  padding: 2;
  margin: 0;
  border-radius: 3px;
  color: inherit;
`,Tl=({stateless:e,node:t,searchTerm:n})=>s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Al,{children:e&&s.jsxs(Il,{children:[s.jsx("div",{className:"icon",children:s.jsx(wr,{})}),s.jsx("div",{className:"title",children:"Description"})]})}),s.jsx(Z,{children:t!=null&&t.description?pt(t.description,n):"..."})]}),Il=S(g).attrs({direction:"row",align:"center"})`
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
`,Al=S(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Pl=S.span`
  color: ${y.white};
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`,zl=({stateless:e,node:t})=>{var b;const[n,r]=me(E=>[E.transcriptIsOpen,E.setTranscriptOpen]),[i,o]=P.useState(!1),[l,a]=P.useState(""),[u,c]=P.useState(!1);if(!e&&!n)return null;const p="https://knowledge-graph.sphinx.chat",d=async E=>{try{const k=await fetch(`${p}/node/text/${E}`);if(!k.ok)throw new Error("Network response was not ok");const C=await k.json();a(C.data.text),c(!0)}catch(k){console.error("Error fetching full transcript",k)}},f=()=>{w(t==null?void 0:t.text),setTimeout(()=>{o(!1)},2e3)},h=()=>{u?c(!1):t!=null&&t.ref_id&&d(t.ref_id)},w=E=>{E!==void 0&&(navigator.clipboard.writeText(E),o(!0))};return s.jsxs(g,{grow:1,shrink:1,children:[s.jsxs(Ll,{children:[e&&s.jsxs(_l,{children:[s.jsx("div",{className:"icon",children:s.jsx(wr,{})}),s.jsx("div",{className:"title",children:"Transcript"})]}),t!=null&&t.text?s.jsx(s.Fragment,{children:i?s.jsxs(Ml,{align:"center",direction:"row",justify:"flex-start",children:[s.jsx("div",{className:"icon",children:s.jsx(xr,{})}),s.jsx("div",{className:"text",children:"Copied"})]}):s.jsx(ue,{endIcon:s.jsx(Yi,{}),onPointerDown:()=>f(),size:"small",variant:"outlined",children:"Copy"})}):s.jsx("div",{}),!e&&s.jsx(Bl,{onClick:()=>{r(!1)},children:s.jsx(ho,{fontSize:35})})]}),s.jsxs(Ol,{children:[u?l:`${(b=t==null?void 0:t.text)==null?void 0:b.substring(0,100)}...`,s.jsx(Pl,{onClick:h,children:u?"less":"more"})]})]})},_l=S(g).attrs({direction:"row",align:"center"})`
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
`,Ll=S(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Bl=S(g).attrs({})`
  color: ${y.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${y.lightBlue500};
  }
`,Ol=S(g)`
  color: ${y.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Ml=S(g)`
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
`,Ar=({node:e})=>{const t=ce(b=>b.selectedNode),n=me(b=>b.currentSearch),{link:r,image_url:i,date:o,boost:l,node_type:a,type:u,id:c,show_title:p,episode_title:d,ref_id:f}=e||t||{},[h,w]=P.useState(l||0);return t?s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(Rl,{children:[s.jsx(Fl,{boostCount:h||0,date:o||0,episodeTitle:rt(d),imageUrl:i,isSelectedView:!0,link:r,onClick:()=>null,showTitle:p,type:a||u}),s.jsx(wt,{}),s.jsxs(Dl,{children:[s.jsx(Gt,{amt:h}),s.jsx(kr,{content:t,count:h,refId:f,updateCount:w})]}),s.jsx(wt,{}),s.jsx(yn,{children:s.jsx(Tl,{node:t,searchTerm:n,stateless:!0})}),s.jsx(wt,{}),s.jsx(yn,{children:s.jsx(zl,{node:t,stateless:!0},c)})]})}):null},Rl=S(g)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,Dl=S(g)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,yn=S(g)`
  padding: 18px 18px 18px;
`,Fl=S(Tr)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,wt=S(br)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,Nl=S(g)`
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
`,$l=({selectedNodeShow:e})=>{const[t,n]=ce(o=>[o.selectedNode,o.setSelectedNode]),{type:r}=t||{},i=me(o=>o.currentSearch);return s.jsxs(Nl,{p:20,children:[s.jsx(g,{align:"flex-start",children:r&&s.jsx(We,{type:r})}),s.jsx(g,{direction:"row",mb:22,mt:22,children:s.jsx(g,{grow:1,shrink:1,children:s.jsx(Z,{className:"episode-title",kind:"heading",children:pt((t==null?void 0:t.episode_title)||"Unknown",i)})})}),e?s.jsxs(g,{className:"show",direction:"row",onClick:()=>n(e),children:[s.jsx(xe,{size:16,src:(e==null?void 0:e.image_url)||"",type:"show"}),s.jsx(Z,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:e==null?void 0:e.show_title})]}):null]})},Hl="Flow 1",Vl=0,Ul=12,Gl=15,ql={g:"LottieFiles Figma v45"},Yl=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],Wl="5.7.0",Ql=60,Xl=57.6,Zl=0,Kl=[],Jl={nm:Hl,ddd:Vl,h:Ul,w:Gl,meta:ql,layers:Yl,v:Wl,fr:Ql,op:Xl,ip:Zl,assets:Kl},es=()=>{const e=P.useRef(null);return P.useEffect(()=>{const t=document.getElementById("lottie-timestamp-equalizer");return t&&(e.current=Li.loadAnimation({container:t,animationData:Jl,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),s.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},ts=S(g).attrs(()=>({direction:"row"}))`
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
`,ns=({onClick:e,timestamp:t,isSelected:n,setOpenClip:r})=>s.jsxs(ts,{align:"center","data-testid":"wrapper",direction:"row",isSelected:n,justify:"flex-start",onClick:e,px:20,py:20,children:[s.jsxs("div",{children:[s.jsx(hr,{className:"play-pause",children:n?s.jsx(es,{}):s.jsx(Wi,{})}),!1]}),s.jsxs(rs,{align:"flex-start",direction:"column",justify:"center",children:[t.timestamp&&s.jsx("span",{className:"timestamp",children:Qi(t.timestamp)}),s.jsx("span",{className:"title",children:rt(t.show_title)})]}),s.jsx("div",{className:"info",children:s.jsx(g,{"data-testid":"info-icon-wrapper",onClick:()=>r(t),pt:4,children:s.jsx(go,{})})})]}),rs=S(g)`
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
`,is=S(g)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,os=()=>{const e=ge(),t=Er(),[n,r]=P.useState(null),[i,o]=P.useState(null),[l,a,u]=at(f=>[f.playingNode,f.setPlayingNodeLink,f.setPlayingTime]),c=P.useMemo(()=>jr((t==null?void 0:t.nodes)||[],e),[t==null?void 0:t.nodes,e]),p=P.useMemo(()=>t==null?void 0:t.nodes.find(f=>f.node_type==="show"&&f.show_title===(e==null?void 0:e.show_title)),[t==null?void 0:t.nodes,e]),d=P.useCallback(f=>{var h;l&&f.link&&(l==null?void 0:l.link)!==f.link&&a(f.link),u(dr(((h=f==null?void 0:f.timestamp)==null?void 0:h.split("-")[0])||"00:00:01")),o(f)},[l,a,o,u]);return P.useEffect(()=>{c!=null&&c.length&&!c.some(f=>f.ref_id===(i==null?void 0:i.ref_id))&&d(c[0])},[c,i,d]),e?s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(ss,{children:[n&&s.jsx(as,{className:"slide-me",direction:"up",in:!!n,children:s.jsxs(ls,{children:[s.jsx(g,{className:"close-info",onClick:()=>r(null),children:s.jsx(mr,{})}),n&&s.jsx(Ar,{node:n})]})}),s.jsx($l,{selectedNodeShow:p}),!!(c!=null&&c.length)&&s.jsx(is,{children:s.jsx(g,{pb:20,children:c==null?void 0:c.map((f,h)=>s.jsx(ns,{isSelected:(i==null?void 0:i.ref_id)===f.ref_id,onClick:()=>d(f),setOpenClip:r,timestamp:f},`${f.episode_title}_${h}`))})})]})}):null},ls=S(g)`
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
`,ss=S(g)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,as=S(qt)`
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
`,us=()=>{const e=ge(),t=e==null?void 0:e.name;return s.jsxs(g,{direction:"column",px:24,py:16,children:[s.jsx(xe,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.source_link)||"",type:"image"}),s.jsx(g,{py:20,children:s.jsx(Z,{color:"primaryText1",kind:"bigHeading",children:t})})]})},cs=()=>{const{sender_pic:e,sender_alias:t,date:n,message_content:r}=ge()||{};return s.jsxs(g,{direction:"row",children:[s.jsx(ds,{src:e}),s.jsxs(ps,{children:[s.jsxs(g,{align:"flex-end",className:"info",direction:"row",children:[t&&s.jsx("span",{className:"info__name",children:t}),n&&s.jsx("span",{className:"info__date",children:n})]}),r&&s.jsx(hs,{dangerouslySetInnerHTML:{__html:Xi(r)}})]})]})},ps=S(g)`
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
`,hs=S.div`
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
`,ds=S.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,fs=()=>{const e=ge(),t=(e==null?void 0:e.name)||(e==null?void 0:e.label);return s.jsxs(g,{direction:"row",px:24,py:16,children:[s.jsx(xe,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.image_url)||"person_placeholder_img.png",type:"person"}),s.jsx(g,{p:20,children:s.jsx(Z,{color:"primaryText1",kind:"bigHeading",children:t})})]})},xs=({node:e,onClick:t})=>{var i,o;const n=dr(e.timestamp||""),r=Math.ceil(n/60);return s.jsx(ms,{onClick:t,p:24,children:s.jsxs("div",{children:[s.jsxs(g,{align:"flex-start",direction:"row",justify:"flex-start",children:[s.jsx(g,{align:"center",children:s.jsx(xe,{size:64,src:(e==null?void 0:e.image_url)||"",type:(e==null?void 0:e.node_type)||"episode"})}),s.jsxs("div",{className:"content",children:[s.jsxs(g,{align:"center",direction:"row",children:[s.jsx(We,{type:"episode"}),r>0&&s.jsxs("div",{className:"subtitle",children:[r," ",r===1?"min":"mins"]})]}),s.jsx(Z,{className:"title",color:"primaryText1",kind:"regular",children:e.episode_title})]})]}),s.jsxs(g,{align:"center",direction:"row",justify:"flex-end",pt:4,children:[s.jsxs(Z,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((i=e==null?void 0:e.children)==null?void 0:i.length)||0," ",((o=e==null?void 0:e.children)==null?void 0:o.length)===1?"Clip":"Clips"]}),s.jsx(Zi,{style:{color:y.white}})]})]})})},ms=S(g).attrs({})`
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
  }

  .title {
    margin-top: 16px;
    display: block;
  }

  .clipText {
    font-size: 12px;
    margin-right: 6px;
  }
`,gs=S(g)`
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
`,ys=S(g)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,ws=S(Z)`
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
`,bs=S.div`
  max-height: calc(100vh - 340px);
  overflow-y: auto;
`,ks=()=>{const[e,t]=ce(l=>[l.selectedNode,l.setSelectedNode]),n=Er(),[r,i]=P.useState([]),o=P.useMemo(()=>{var u;const l=new Set,a={};if((u=e==null?void 0:e.children)!=null&&u.length){e.children.forEach((p,d)=>{var w,b,E,k;const f=jr((n==null?void 0:n.nodes)||[],e)||[],h=n==null?void 0:n.nodes.find(C=>C.ref_id===p);if(h){h.timestamp=(w=f[0])==null?void 0:w.timestamp;const C=(k=(E=(b=f[d])==null?void 0:b.hosts)==null?void 0:E[0])==null?void 0:k.name;C&&l.add(C),a[p]=h,a[p]=h}});const c=Array.from(l);i(c)}return Object.values(a).filter(c=>c.node_type==="episode").sort((c,p)=>(p.weight||0)-(c.weight||0))},[n==null?void 0:n.nodes,e]);return s.jsxs(gs,{children:[s.jsx(ys,{children:s.jsxs(g,{direction:"row",children:[s.jsx(g,{pr:24,children:s.jsx(xe,{size:80,src:(e==null?void 0:e.image_url)||"audio_default.svg",type:"show"})}),s.jsx(g,{direction:"column",children:s.jsxs(g,{direction:"column",grow:1,justify:"space-between",children:[s.jsxs(g,{align:"center",direction:"row",justify:"flex-start",mb:16,children:[s.jsx(We,{type:"show"})," ",s.jsxs("div",{className:"subtitle",children:["by ",r.join(", ")||(e==null?void 0:e.show_title)]})]}),s.jsx(ws,{kind:"bigHeading",title:(e==null?void 0:e.show_title)||"Unknown",children:(e==null?void 0:e.show_title)||"Unknown"})]})})]})}),s.jsxs(g,{direction:"column",children:[s.jsx(g,{p:24,children:s.jsx(Z,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),s.jsx(bs,{children:o.map(l=>s.jsx(xs,{node:l,onClick:()=>t(l)},l.ref_id))})]})]})},js=()=>{const e=ge();return s.jsx(g,{align:"center",justify:"center",children:s.jsx(Z,{color:"primaryText1",kind:"hugeHeading",children:e==null?void 0:e.label})})},Cs=()=>{const e=ge(),{date:t,boost:n,text:r,name:i,verified:o,profile_picture:l,twitter_handle:a,ref_id:u}=e||{},c=(e==null?void 0:e.tweet_id)||"",[p,d]=P.useState(n||0),f=me(h=>h.currentSearch);return e&&s.jsxs(s.Fragment,{children:[s.jsxs(g,{direction:"column",p:24,children:[s.jsxs(g,{align:"center",direction:"row",pr:16,children:[s.jsx(Ss,{children:s.jsx(xe,{rounded:!0,size:58,src:l||"",type:"person"})}),s.jsxs(g,{children:[s.jsxs(vs,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&s.jsxs(Es,{children:["@",a]})]})]}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Ts,{"data-testid":"episode-description",children:pt(r||"",f)}),s.jsx(g,{direction:"row",justify:"flex-start",children:!!t&&s.jsx(ct,{children:$t.unix(t).format("ll")})})]}),s.jsx(g,{align:"stretch",mt:22,children:s.jsx("a",{href:`https://twitter.com/Interior/status/${c}?open=system`,children:s.jsx(As,{endIcon:s.jsx(Ut,{}),children:"View Tweet "})})})]}),s.jsx(Is,{}),s.jsxs(g,{direction:"row",justify:"space-between",pt:14,px:24,children:[s.jsx(Gt,{amt:p}),s.jsx(kr,{content:e,count:p,refId:u,updateCount:d})]})]})},Ss=S(g)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,vs=S(g)`
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
`,Es=S(g)`
  color: ${y.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Ts=S(g)`
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
`,Is=S(br)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,As=S(ue)`
  width: 100%;
`,Ps=()=>{var a,u;const[e,t]=P.useState(!1),n=ge(),r=!!(n!=null&&n.source_link),i=P.useRef(null),o=me(c=>c.currentSearch),l=c=>{c.stopPropagation(),c.currentTarget.blur(),t(!e)};return P.useEffect(()=>{var c,p;e?(c=i.current)==null||c.play():(p=i.current)==null||p.pause()},[e]),s.jsxs(g,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:r?62:0,shrink:1,children:[r&&s.jsxs(zs,{children:[s.jsx(yr,{color:y.GRAY6}),s.jsx(Bs,{children:n==null?void 0:n.source_link}),s.jsx(_s,{href:n==null?void 0:n.source_link,onClick:c=>c.stopPropagation(),target:"_blank",children:s.jsx(Ut,{})})]}),(a=n==null?void 0:n.audio)!=null&&a.length?s.jsxs(g,{justify:"flex-start",p:12,children:[s.jsx(ue,{onClick:c=>l(c),startIcon:e?s.jsx(ut,{}):s.jsx(Ht,{}),children:e?"Pause":"Play"}),s.jsx(Os,{ref:i,src:((u=n.audio[0])==null?void 0:u.link)||"",children:s.jsx("track",{kind:"captions"})})]}):null,s.jsx(Ls,{grow:1,justify:"flex-start",p:12,shrink:1,children:s.jsx(Z,{color:"primaryText1",kind:"regular",children:pt((n==null?void 0:n.text)||"",o)})})]})},zs=S(g)`
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
`,_s=S.a`
  color: ${y.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Ls=S(g)`
  overflow: auto;
`,Bs=S(Z)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Os=S.audio`
  height: 0;
  width: 0;
`,Ms=["clip","twitter_space","youtube","episode","podcast"],Rs=()=>{const e=ge(),{showTeachMe:t}=ce(r=>r),{setPlayingNode:n}=at(r=>r);if(P.useEffect(()=>{Ms.includes((e==null?void 0:e.node_type)||"")&&n(e)},[n,e]),t)return s.jsx(kl,{});switch(e==null?void 0:e.node_type){case"guest":case"person":return s.jsx(fs,{});case"data_series":return s.jsx(Sl,{});case"tribe_message":return s.jsx(cs,{});case"tweet":return s.jsx(Cs,{});case"topic":return s.jsx(js,{});case"show":return s.jsx(ks,{});case"youtube":case"podcast":case"clip":case"twitter_space":return s.jsx(Ar,{});case"document":return s.jsx(Ps,{});case"episode":return s.jsx(os,{},e.ref_id);case"image":return s.jsx(us,{});default:return null}},Ds=P.memo(Rs),Fs=({isPlaying:e,isFullScreen:t,setIsPlaying:n,playingTime:r,duration:i,handleProgressChange:o,handleVolumeChange:l,onFullScreenClick:a,showToolbar:u})=>s.jsxs(g,{children:[!u&&s.jsx(Us,{"aria-label":"Small",max:i,onChange:o,size:"small",value:r}),s.jsxs(Ns,{align:"center",direction:"row",showToolbar:u,children:[s.jsx($s,{onClick:n,size:"small",children:e?s.jsx(ut,{}):s.jsx(Ht,{})}),s.jsxs(Gs,{direction:"row",children:[s.jsx("span",{children:xn(r)}),s.jsx("span",{className:"separator",children:"/"}),s.jsx("span",{className:"duration",children:xn(i)})]}),s.jsxs(Hs,{direction:"row",px:9,children:[s.jsx(Cr,{className:"volume-slider",defaultValue:.5,max:1,min:0,onChange:l,size:"small",step:.1}),s.jsx(Ki,{})]}),s.jsx(Vs,{onClick:()=>a(),children:t?s.jsx(eo,{}):s.jsx(Ji,{})})]})]}),Ns=S(g)`
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
`,$s=S(hr)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,Hs=S(g)`
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
`,Vs=S(g)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,Us=S(Cr)`
  && {
    z-index: 20;
    color: ${y.white};
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
`,Gs=S(g)`
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
`,qs=({hidden:e})=>{const t=P.useRef(null),n=P.useRef(null),[r,i]=P.useState(!1),[o,l]=P.useState(!1),[a,u]=P.useState("ready"),{isPlaying:c,playingTime:p,duration:d,setIsPlaying:f,setPlayingTime:h,setDuration:w,playingNode:b,volume:E,setVolume:k,setHasError:C,resetPlayer:I}=at(H=>H);P.useEffect(()=>()=>I(),[I]);const F=()=>{f(!c)},M=()=>{f(!0)},v=()=>{f(!1)},$=(H,B)=>{const X=Array.isArray(B)?B[0]:B;t.current&&(t.current.seekTo(X),h(X))},Y=(H,B)=>{const X=Array.isArray(B)?B[0]:B;k(X)},z=()=>{C(!0),u("error")},O=H=>{const B=H.playedSeconds;h(B)},L=()=>{if(t.current){u("ready");const H=t.current.getDuration();w(H)}},_=()=>{n.current&&(document.fullscreenElement?(document.exitFullscreen(),i(!1)):n.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",U)}))},U=()=>{i(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",U)};return P.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",U)}),P.useEffect(()=>{const H=B=>{if(r){const X=window.screen.height,J=B.clientY,ie=X-J;l(ie<=50)}};return document.addEventListener("mousemove",H),()=>{document.removeEventListener("mousemove",H)}},[r,o]),P.useEffect(()=>{const H=B=>{r&&B.key==="Escape"&&(B.preventDefault(),B.stopPropagation())};return document.addEventListener("fullscreenchange",U),document.addEventListener("keydown",H),()=>{document.removeEventListener("fullscreenchange",U),document.removeEventListener("keydown",H)}}),b!=null&&b.link?s.jsxs(Ys,{ref:n,hidden:e,children:[s.jsx(Ws,{children:s.jsx(xe,{size:120,src:(b==null?void 0:b.image_url)||"",type:"clip"})}),s.jsx(to,{ref:t,controls:!1,height:r?window.screen.height:"200px",onBuffer:()=>u("buffering"),onBufferEnd:()=>u("ready"),onError:z,onPause:v,onPlay:M,onProgress:O,onReady:L,playing:c,url:(b==null?void 0:b.link)||"",volume:E,width:"100%"}),a==="error"?s.jsx(Xs,{className:"error-wrapper",children:"Error happened, please try later"}):null,a==="ready"?s.jsx(Fs,{duration:d,handleProgressChange:$,handleVolumeChange:Y,isFullScreen:r,isPlaying:c,onFullScreenClick:_,playingTime:p,setIsPlaying:F,showToolbar:o&&r}):null,a==="buffering"?s.jsx(Qs,{children:s.jsx(Vt,{color:y.lightGray})}):null]}):null},Ys=S(g)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${e=>e.hidden?"0px":"auto"};
`,Ws=S(g)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Qs=S(g)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,Xs=S(g)`
  height: 60px;
  padding: 12px 16px;
  color: ${y.primaryRed};
`,Zs=P.memo(qs),Ks=({open:e})=>{const{setSelectedNode:t,setTeachMe:n,showTeachMe:r}=ce(a=>a),i=ge(),{setSidebarOpen:o}=me(a=>a),{playingNode:l}=at(a=>a);return s.jsx(qt,{"data-testid":"sidebar-sub-view",direction:"right",in:e,style:{width:r?"700px":"",position:e?"relative":"absolute"},children:s.jsxs(Js,{children:[s.jsx(Zs,{hidden:(i==null?void 0:i.ref_id)!==(l==null?void 0:l.ref_id)},l==null?void 0:l.ref_id),s.jsx(ta,{children:s.jsx(Ds,{})}),s.jsx(ea,{onClick:()=>{t(null),n(!1)},children:s.jsx(no,{})}),s.jsx(na,{onClick:()=>{o(!1)},children:s.jsx(Sr,{})})]})})},Js=S(g)(({theme:e})=>({position:"relative",background:y.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),ea=S(g)`
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
`,ta=S(g)`
  flex: 1 1 100%;
`,na=S(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),ra=()=>{const e=me(t=>t.setSidebarOpen);return s.jsx(ia,{onClick:()=>{e(!0)},children:s.jsx(ro,{})})},ia=S(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),oa=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_5099_7163",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"16",height:"16",children:s.jsx("rect",{x:"2",y:"2",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_5099_7163)",children:s.jsx("path",{d:"M10 16.6667C9.16667 16.6667 8.38611 16.5083 7.65833 16.1917C6.93056 15.875 6.29722 15.4472 5.75833 14.9083C5.21944 14.3695 4.79167 13.7361 4.475 13.0083C4.15833 12.2806 4 11.5 4 10.6667C4 10.4778 4.06389 10.3195 4.19167 10.1917C4.31944 10.0639 4.47778 10 4.66667 10C4.85556 10 5.01389 10.0639 5.14167 10.1917C5.26944 10.3195 5.33333 10.4778 5.33333 10.6667C5.33333 11.9667 5.78611 13.0695 6.69167 13.975C7.59722 14.8806 8.7 15.3333 10 15.3333C11.3 15.3333 12.4028 14.8806 13.3083 13.975C14.2139 13.0695 14.6667 11.9667 14.6667 10.6667C14.6667 9.36667 14.2139 8.2639 13.3083 7.35834C12.4028 6.45279 11.3 6.00001 10 6.00001H9.9L10.4667 6.56667C10.6 6.70001 10.6639 6.85556 10.6583 7.03334C10.6528 7.21112 10.5889 7.36667 10.4667 7.50001C10.3333 7.63334 10.175 7.70279 9.99167 7.70834C9.80833 7.7139 9.65 7.65001 9.51667 7.51667L7.8 5.80001C7.66667 5.66667 7.6 5.51112 7.6 5.33334C7.6 5.15556 7.66667 5.00001 7.8 4.86667L9.51667 3.15001C9.65 3.01667 9.80833 2.95279 9.99167 2.95834C10.175 2.9639 10.3333 3.03334 10.4667 3.16667C10.5889 3.30001 10.6528 3.45556 10.6583 3.63334C10.6639 3.81112 10.6 3.96667 10.4667 4.10001L9.9 4.66667H10C10.8333 4.66667 11.6139 4.82501 12.3417 5.14167C13.0694 5.45834 13.7028 5.88612 14.2417 6.42501C14.7806 6.9639 15.2083 7.59723 15.525 8.32501C15.8417 9.05279 16 9.83334 16 10.6667C16 11.5 15.8417 12.2806 15.525 13.0083C15.2083 13.7361 14.7806 14.3695 14.2417 14.9083C13.7028 15.4472 13.0694 15.875 12.3417 16.1917C11.6139 16.5083 10.8333 16.6667 10 16.6667Z",fill:"currentColor"})})]}),la=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_1259_28",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1259_28)",children:s.jsx("path",{d:"M3 20.75L2.91345 19.4327L4.74998 17.6058V20.75H3ZM7.25003 20.75V15.1058L8.74998 13.6058V20.75H7.25003ZM11.25 20.75V13.6058L12.75 15.1308V20.75H11.25ZM15.25 20.75V15.1308L16.75 13.6308V20.75H15.25ZM19.25 20.75V11.1058L20.75 9.60583V20.75H19.25ZM3.25003 15.2192V13.1058L10 6.35581L14 10.3558L20.75 3.60583V5.71924L14 12.4692L10 8.46921L3.25003 15.2192Z",fill:"currentColor"})})]});function sa(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const aa=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ua=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ca={};function wn(e,t){return((t||ca).jsx?ua:aa).test(e)}const pa=/[ \t\n\f\r]/g;function ha(e){return typeof e=="object"?e.type==="text"?bn(e.value):!1:bn(e)}function bn(e){return e.replace(pa,"")===""}class Qe{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}Qe.prototype.property={};Qe.prototype.normal={};Qe.prototype.space=null;function Pr(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new Qe(n,r,t)}function _t(e){return e.toLowerCase()}class pe{constructor(t,n){this.property=t,this.attribute=n}}pe.prototype.space=null;pe.prototype.boolean=!1;pe.prototype.booleanish=!1;pe.prototype.overloadedBoolean=!1;pe.prototype.number=!1;pe.prototype.commaSeparated=!1;pe.prototype.spaceSeparated=!1;pe.prototype.commaOrSpaceSeparated=!1;pe.prototype.mustUseProperty=!1;pe.prototype.defined=!1;let da=0;const N=_e(),K=_e(),zr=_e(),T=_e(),W=_e(),Me=_e(),le=_e();function _e(){return 2**++da}const Lt=Object.freeze(Object.defineProperty({__proto__:null,boolean:N,booleanish:K,commaOrSpaceSeparated:le,commaSeparated:Me,number:T,overloadedBoolean:zr,spaceSeparated:W},Symbol.toStringTag,{value:"Module"})),bt=Object.keys(Lt);class Yt extends pe{constructor(t,n,r,i){let o=-1;if(super(t,n),kn(this,"space",i),typeof r=="number")for(;++o<bt.length;){const l=bt[o];kn(this,bt[o],(r&Lt[l])===Lt[l])}}}Yt.prototype.defined=!0;function kn(e,t,n){n&&(e[t]=n)}const fa={}.hasOwnProperty;function De(e){const t={},n={};let r;for(r in e.properties)if(fa.call(e.properties,r)){const i=e.properties[r],o=new Yt(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[_t(r)]=r,n[_t(o.attribute)]=r}return new Qe(t,n,e.space)}const _r=De({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Lr=De({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Br(e,t){return t in e?e[t]:t}function Or(e,t){return Br(e,t.toLowerCase())}const Mr=De({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Or,properties:{xmlns:null,xmlnsXLink:null}}),Rr=De({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:K,ariaAutoComplete:null,ariaBusy:K,ariaChecked:K,ariaColCount:T,ariaColIndex:T,ariaColSpan:T,ariaControls:W,ariaCurrent:null,ariaDescribedBy:W,ariaDetails:null,ariaDisabled:K,ariaDropEffect:W,ariaErrorMessage:null,ariaExpanded:K,ariaFlowTo:W,ariaGrabbed:K,ariaHasPopup:null,ariaHidden:K,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:W,ariaLevel:T,ariaLive:null,ariaModal:K,ariaMultiLine:K,ariaMultiSelectable:K,ariaOrientation:null,ariaOwns:W,ariaPlaceholder:null,ariaPosInSet:T,ariaPressed:K,ariaReadOnly:K,ariaRelevant:null,ariaRequired:K,ariaRoleDescription:W,ariaRowCount:T,ariaRowIndex:T,ariaRowSpan:T,ariaSelected:K,ariaSetSize:T,ariaSort:null,ariaValueMax:T,ariaValueMin:T,ariaValueNow:T,ariaValueText:null,role:null}}),xa=De({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Or,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Me,acceptCharset:W,accessKey:W,action:null,allow:null,allowFullScreen:N,allowPaymentRequest:N,allowUserMedia:N,alt:null,as:null,async:N,autoCapitalize:null,autoComplete:W,autoFocus:N,autoPlay:N,blocking:W,capture:N,charSet:null,checked:N,cite:null,className:W,cols:T,colSpan:null,content:null,contentEditable:K,controls:N,controlsList:W,coords:T|Me,crossOrigin:null,data:null,dateTime:null,decoding:null,default:N,defer:N,dir:null,dirName:null,disabled:N,download:zr,draggable:K,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:N,formTarget:null,headers:W,height:T,hidden:N,high:T,href:null,hrefLang:null,htmlFor:W,httpEquiv:W,id:null,imageSizes:null,imageSrcSet:null,inert:N,inputMode:null,integrity:null,is:null,isMap:N,itemId:null,itemProp:W,itemRef:W,itemScope:N,itemType:W,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:N,low:T,manifest:null,max:null,maxLength:T,media:null,method:null,min:null,minLength:T,multiple:N,muted:N,name:null,nonce:null,noModule:N,noValidate:N,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:N,optimum:T,pattern:null,ping:W,placeholder:null,playsInline:N,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:N,referrerPolicy:null,rel:W,required:N,reversed:N,rows:T,rowSpan:T,sandbox:W,scope:null,scoped:N,seamless:N,selected:N,shadowRootDelegatesFocus:N,shadowRootMode:null,shape:null,size:T,sizes:null,slot:null,span:T,spellCheck:K,src:null,srcDoc:null,srcLang:null,srcSet:null,start:T,step:null,style:null,tabIndex:T,target:null,title:null,translate:null,type:null,typeMustMatch:N,useMap:null,value:K,width:T,wrap:null,align:null,aLink:null,archive:W,axis:null,background:null,bgColor:null,border:T,borderColor:null,bottomMargin:T,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:N,declare:N,event:null,face:null,frame:null,frameBorder:null,hSpace:T,leftMargin:T,link:null,longDesc:null,lowSrc:null,marginHeight:T,marginWidth:T,noResize:N,noHref:N,noShade:N,noWrap:N,object:null,profile:null,prompt:null,rev:null,rightMargin:T,rules:null,scheme:null,scrolling:K,standby:null,summary:null,text:null,topMargin:T,valueType:null,version:null,vAlign:null,vLink:null,vSpace:T,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:N,disableRemotePlayback:N,prefix:null,property:null,results:T,security:null,unselectable:null}}),ma=De({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Br,properties:{about:le,accentHeight:T,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:T,amplitude:T,arabicForm:null,ascent:T,attributeName:null,attributeType:null,azimuth:T,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:T,by:null,calcMode:null,capHeight:T,className:W,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:T,diffuseConstant:T,direction:null,display:null,dur:null,divisor:T,dominantBaseline:null,download:N,dx:null,dy:null,edgeMode:null,editable:null,elevation:T,enableBackground:null,end:null,event:null,exponent:T,externalResourcesRequired:null,fill:null,fillOpacity:T,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Me,g2:Me,glyphName:Me,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:T,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:T,horizOriginX:T,horizOriginY:T,id:null,ideographic:T,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:T,k:T,k1:T,k2:T,k3:T,k4:T,kernelMatrix:le,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:T,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:T,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:T,overlineThickness:T,paintOrder:null,panose1:null,path:null,pathLength:T,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:W,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:T,pointsAtY:T,pointsAtZ:T,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:le,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:le,rev:le,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:le,requiredFeatures:le,requiredFonts:le,requiredFormats:le,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:T,specularExponent:T,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:T,strikethroughThickness:T,string:null,stroke:null,strokeDashArray:le,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:T,strokeOpacity:T,strokeWidth:null,style:null,surfaceScale:T,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:le,tabIndex:T,tableValues:null,target:null,targetX:T,targetY:T,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:le,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:T,underlineThickness:T,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:T,values:null,vAlphabetic:T,vMathematical:T,vectorEffect:null,vHanging:T,vIdeographic:T,version:null,vertAdvY:T,vertOriginX:T,vertOriginY:T,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:T,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),ga=/^data[-\w.:]+$/i,jn=/-[a-z]/g,ya=/[A-Z]/g;function wa(e,t){const n=_t(t);let r=t,i=pe;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&ga.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(jn,ka);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!jn.test(o)){let l=o.replace(ya,ba);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=Yt}return new i(r,t)}function ba(e){return"-"+e.toLowerCase()}function ka(e){return e.charAt(1).toUpperCase()}const ja={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ca=Pr([Lr,_r,Mr,Rr,xa],"html"),Wt=Pr([Lr,_r,Mr,Rr,ma],"svg");function Sa(e){return e.join(" ").trim()}var Dr={},Cn=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,va=/\n/g,Ea=/^\s*/,Ta=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Ia=/^:\s*/,Aa=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Pa=/^[;\s]*/,za=/^\s+|\s+$/g,_a=`
`,Sn="/",vn="*",ze="",La="comment",Ba="declaration",Oa=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(w){var b=w.match(va);b&&(n+=b.length);var E=w.lastIndexOf(_a);r=~E?w.length-E:r+w.length}function o(){var w={line:n,column:r};return function(b){return b.position=new l(w),c(),b}}function l(w){this.start=w,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(w){var b=new Error(t.source+":"+n+":"+r+": "+w);if(b.reason=w,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function u(w){var b=w.exec(e);if(b){var E=b[0];return i(E),e=e.slice(E.length),b}}function c(){u(Ea)}function p(w){var b;for(w=w||[];b=d();)b!==!1&&w.push(b);return w}function d(){var w=o();if(!(Sn!=e.charAt(0)||vn!=e.charAt(1))){for(var b=2;ze!=e.charAt(b)&&(vn!=e.charAt(b)||Sn!=e.charAt(b+1));)++b;if(b+=2,ze===e.charAt(b-1))return a("End of comment missing");var E=e.slice(2,b-2);return r+=2,i(E),e=e.slice(b),r+=2,w({type:La,comment:E})}}function f(){var w=o(),b=u(Ta);if(b){if(d(),!u(Ia))return a("property missing ':'");var E=u(Aa),k=w({type:Ba,property:En(b[0].replace(Cn,ze)),value:E?En(E[0].replace(Cn,ze)):ze});return u(Pa),k}}function h(){var w=[];p(w);for(var b;b=f();)b!==!1&&(w.push(b),p(w));return w}return c(),h()};function En(e){return e?e.replace(za,ze):ze}var Ma=dn&&dn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Dr,"__esModule",{value:!0});var Ra=Ma(Oa);function Da(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,Ra.default)(e),i=typeof t=="function";return r.forEach(function(o){if(o.type==="declaration"){var l=o.property,a=o.value;i?t(l,a,o):a&&(n=n||{},n[l]=a)}}),n}var Tn=Dr.default=Da;const Fa=Tn.default||Tn,Fr=Nr("end"),Qt=Nr("start");function Nr(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Na(e){const t=Qt(e),n=Fr(e);if(t&&n)return{start:t,end:n}}function Ge(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?In(e.position):"start"in e||"end"in e?In(e):"line"in e||"column"in e?Bt(e):""}function Bt(e){return An(e&&e.line)+":"+An(e&&e.column)}function In(e){return Bt(e&&e.start)+"-"+Bt(e&&e.end)}function An(e){return e&&typeof e=="number"?e:1}class te extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1))}if(!o.place&&o.ancestors&&o.ancestors){const u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=a?a.line:void 0,this.name=Ge(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}te.prototype.file="";te.prototype.name="";te.prototype.reason="";te.prototype.message="";te.prototype.stack="";te.prototype.column=void 0;te.prototype.line=void 0;te.prototype.ancestors=void 0;te.prototype.cause=void 0;te.prototype.fatal=void 0;te.prototype.place=void 0;te.prototype.ruleId=void 0;te.prototype.source=void 0;const Xt={}.hasOwnProperty,$a=new Map,Ha=/[A-Z]/g,Va=/-([a-z])/g,Ua=new Set(["table","tbody","thead","tfoot","tr"]),Ga=new Set(["td","th"]),$r="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function qa(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=eu(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Ja(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Wt:Ca,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Hr(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Hr(e,t,n){if(t.type==="element")return Ya(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Wa(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Xa(e,t,n);if(t.type==="mdxjsEsm")return Qa(e,t);if(t.type==="root")return Za(e,t,n);if(t.type==="text")return Ka(e,t)}function Ya(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Wt,e.schema=i),e.ancestors.push(t);const o=Ur(e,t.tagName,!1),l=tu(e,t);let a=Kt(e,t);return Ua.has(t.tagName)&&(a=a.filter(function(u){return typeof u=="string"?!ha(u):!0})),Vr(e,l,o,t),Zt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Wa(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ye(e,t.position)}function Qa(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ye(e,t.position)}function Xa(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Wt,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Ur(e,t.name,!0),l=nu(e,t),a=Kt(e,t);return Vr(e,l,o,t),Zt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Za(e,t,n){const r={};return Zt(r,Kt(e,t)),e.create(t,e.Fragment,r,n)}function Ka(e,t){return t.value}function Vr(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Zt(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Ja(e,t,n){return r;function r(i,o,l,a){const c=Array.isArray(l.children)?n:t;return a?c(o,l,a):c(o,l)}}function eu(e,t){return n;function n(r,i,o,l){const a=Array.isArray(o.children),u=Qt(r);return t(i,o,l,a,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function tu(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Xt.call(t.properties,i)){const o=ru(e,i,t.properties[i]);if(o){const[l,a]=o;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&Ga.has(t.tagName)?r=a:n[l]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function nu(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Ye(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else Ye(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Kt(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:$a;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const u=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(u){const c=i.get(u)||0;l=u+"-"+c,i.set(u,c+1)}}const a=Hr(e,o,l);a!==void 0&&n.push(a)}return n}function ru(e,t,n){const r=wa(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?sa(n):Sa(n)),r.property==="style"){let i=typeof n=="object"?n:iu(e,String(n));return e.stylePropertyNameCase==="css"&&(i=ou(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?ja[r.property]||r.property:r.attribute,n]}}function iu(e,t){const n={};try{Fa(t,r)}catch(i){if(!e.ignoreInvalidStyle){const o=i,l=new te("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=$r+"#cannot-parse-style-attribute",l}}return n;function r(i,o){let l=i;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(Va,su)),n[l]=o}}function Ur(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const a=wn(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=wn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Xt.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ye(e)}function Ye(e,t){const n=new te("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=$r+"#cannot-handle-mdx-estrees-without-createevaluater",n}function ou(e){const t={};let n;for(n in e)Xt.call(e,n)&&(t[lu(n)]=e[n]);return t}function lu(e){let t=e.replace(Ha,au);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function su(e,t){return t.toUpperCase()}function au(e){return"-"+e.toLowerCase()}const kt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},uu={};function cu(e,t){const n=t||uu,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Gr(e,r,i)}function Gr(e,t,n){if(pu(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Pn(e.children,t,n)}return Array.isArray(e)?Pn(e,t,n):""}function Pn(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Gr(e[i],t,n);return r.join("")}function pu(e){return!!(e&&typeof e=="object")}const zn=document.createElement("i");function Jt(e){const t="&"+e+";";zn.innerHTML=t;const n=zn.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function ke(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function ae(e,t){return e.length>0?(ke(e,e.length,0,t),e):t}const _n={}.hasOwnProperty;function hu(e){const t={};let n=-1;for(;++n<e.length;)du(t,e[n]);return t}function du(e,t){let n;for(n in t){const i=(_n.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){_n.call(i,l)||(i[l]=[]);const a=o[l];fu(i[l],Array.isArray(a)?a:a?[a]:[])}}}function fu(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ke(e,0,0,r)}function qr(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Re(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const xu=Te(/\p{P}/u),be=Te(/[A-Za-z]/),se=Te(/[\dA-Za-z]/),mu=Te(/[#-'*+\--9=?A-Z^-~]/);function Ot(e){return e!==null&&(e<32||e===127)}const Mt=Te(/\d/),gu=Te(/[\dA-Fa-f]/),Yr=Te(/[!-/:-@[-`{-~]/);function R(e){return e!==null&&e<-2}function re(e){return e!==null&&(e<0||e===32)}function G(e){return e===-2||e===-1||e===32}function yu(e){return Yr(e)||xu(e)}const wu=Te(/\s/);function Te(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Fe(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&se(e.charCodeAt(n+1))&&se(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Q(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(u){return G(u)?(e.enter(n),a(u)):t(u)}function a(u){return G(u)&&o++<i?(e.consume(u),a):(e.exit(n),t(u))}}const bu={tokenize:ku};function ku(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Q(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return R(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const ju={tokenize:Cu},Ln={tokenize:Su};function Cu(e){const t=this,n=[];let r=0,i,o,l;return a;function a(I){if(r<n.length){const F=n[r];return t.containerState=F[1],e.attempt(F[0].continuation,u,c)(I)}return c(I)}function u(I){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&C();const F=t.events.length;let M=F,v;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){v=t.events[M][1].end;break}k(r);let $=F;for(;$<t.events.length;)t.events[$][1].end=Object.assign({},v),$++;return ke(t.events,M+1,0,t.events.slice(F)),t.events.length=$,c(I)}return a(I)}function c(I){if(r===n.length){if(!i)return f(I);if(i.currentConstruct&&i.currentConstruct.concrete)return w(I);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Ln,p,d)(I)}function p(I){return i&&C(),k(r),f(I)}function d(I){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,w(I)}function f(I){return t.containerState={},e.attempt(Ln,h,w)(I)}function h(I){return r++,n.push([t.currentConstruct,t.containerState]),f(I)}function w(I){if(I===null){i&&C(),k(0),e.consume(I);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:i}),b(I)}function b(I){if(I===null){E(e.exit("chunkFlow"),!0),k(0),e.consume(I);return}return R(I)?(e.consume(I),E(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(I),b)}function E(I,F){const M=t.sliceStream(I);if(F&&M.push(null),I.previous=o,o&&(o.next=I),o=I,i.defineSkip(I.start),i.write(M),t.parser.lazy[I.start.line]){let v=i.events.length;for(;v--;)if(i.events[v][1].start.offset<l&&(!i.events[v][1].end||i.events[v][1].end.offset>l))return;const $=t.events.length;let Y=$,z,O;for(;Y--;)if(t.events[Y][0]==="exit"&&t.events[Y][1].type==="chunkFlow"){if(z){O=t.events[Y][1].end;break}z=!0}for(k(r),v=$;v<t.events.length;)t.events[v][1].end=Object.assign({},O),v++;ke(t.events,Y+1,0,t.events.slice($)),t.events.length=v}}function k(I){let F=n.length;for(;F-- >I;){const M=n[F];t.containerState=M[1],M[0].exit.call(t,e)}n.length=I}function C(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Su(e,t,n){return Q(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Bn(e){if(e===null||re(e)||wu(e))return 1;if(yu(e))return 2}function en(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Rt={name:"attention",tokenize:Eu,resolveAll:vu};function vu(e,t){let n=-1,r,i,o,l,a,u,c,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d=Object.assign({},e[r][1].end),f=Object.assign({},e[n][1].start);On(d,-u),On(f,u),l={type:u>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[r][1].end)},a={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:f},o={type:u>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},i={type:u>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},a.end)},e[r][1].end=Object.assign({},l.start),e[n][1].start=Object.assign({},a.end),c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=ae(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=ae(c,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),c=ae(c,en(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=ae(c,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,c=ae(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,ke(e,r-1,n-r+3,c),n=r+c.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Eu(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Bn(r);let o;return l;function l(u){return o=u,e.enter("attentionSequence"),a(u)}function a(u){if(u===o)return e.consume(u),a;const c=e.exit("attentionSequence"),p=Bn(u),d=!p||p===2&&i||n.includes(u),f=!i||i===2&&p||n.includes(r);return c._open=!!(o===42?d:d&&(i||!f)),c._close=!!(o===42?f:f&&(p||!d)),t(u)}}function On(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Tu={name:"autolink",tokenize:Iu};function Iu(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(h){return be(h)?(e.consume(h),l):c(h)}function l(h){return h===43||h===45||h===46||se(h)?(r=1,a(h)):c(h)}function a(h){return h===58?(e.consume(h),r=0,u):(h===43||h===45||h===46||se(h))&&r++<32?(e.consume(h),a):(r=0,c(h))}function u(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Ot(h)?n(h):(e.consume(h),u)}function c(h){return h===64?(e.consume(h),p):mu(h)?(e.consume(h),c):n(h)}function p(h){return se(h)?d(h):n(h)}function d(h){return h===46?(e.consume(h),r=0,p):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||se(h))&&r++<63){const w=h===45?f:d;return e.consume(h),w}return n(h)}}const ht={tokenize:Au,partial:!0};function Au(e,t,n){return r;function r(o){return G(o)?Q(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||R(o)?t(o):n(o)}}const Wr={name:"blockQuote",tokenize:Pu,continuation:{tokenize:zu},exit:_u};function Pu(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return G(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function zu(e,t,n){const r=this;return i;function i(l){return G(l)?Q(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(Wr,t,n)(l)}}function _u(e){e.exit("blockQuote")}const Qr={name:"characterEscape",tokenize:Lu};function Lu(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Yr(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Xr={name:"characterReference",tokenize:Bu};function Bu(e,t,n){const r=this;let i=0,o,l;return a;function a(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),u}function u(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,l=se,p(d))}function c(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=gu,p):(e.enter("characterReferenceValue"),o=7,l=Mt,p(d))}function p(d){if(d===59&&i){const f=e.exit("characterReferenceValue");return l===se&&!Jt(r.sliceSerialize(f))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(d)&&i++<o?(e.consume(d),p):n(d)}}const Mn={tokenize:Mu,partial:!0},Rn={name:"codeFenced",tokenize:Ou,concrete:!0};function Ou(e,t,n){const r=this,i={tokenize:M,partial:!0};let o=0,l=0,a;return u;function u(v){return c(v)}function c(v){const $=r.events[r.events.length-1];return o=$&&$[1].type==="linePrefix"?$[2].sliceSerialize($[1],!0).length:0,a=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(v)}function p(v){return v===a?(l++,e.consume(v),p):l<3?n(v):(e.exit("codeFencedFenceSequence"),G(v)?Q(e,d,"whitespace")(v):d(v))}function d(v){return v===null||R(v)?(e.exit("codeFencedFence"),r.interrupt?t(v):e.check(Mn,b,F)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(v))}function f(v){return v===null||R(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(v)):G(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Q(e,h,"whitespace")(v)):v===96&&v===a?n(v):(e.consume(v),f)}function h(v){return v===null||R(v)?d(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(v))}function w(v){return v===null||R(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(v)):v===96&&v===a?n(v):(e.consume(v),w)}function b(v){return e.attempt(i,F,E)(v)}function E(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),k}function k(v){return o>0&&G(v)?Q(e,C,"linePrefix",o+1)(v):C(v)}function C(v){return v===null||R(v)?e.check(Mn,b,F)(v):(e.enter("codeFlowValue"),I(v))}function I(v){return v===null||R(v)?(e.exit("codeFlowValue"),C(v)):(e.consume(v),I)}function F(v){return e.exit("codeFenced"),t(v)}function M(v,$,Y){let z=0;return O;function O(B){return v.enter("lineEnding"),v.consume(B),v.exit("lineEnding"),L}function L(B){return v.enter("codeFencedFence"),G(B)?Q(v,_,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):_(B)}function _(B){return B===a?(v.enter("codeFencedFenceSequence"),U(B)):Y(B)}function U(B){return B===a?(z++,v.consume(B),U):z>=l?(v.exit("codeFencedFenceSequence"),G(B)?Q(v,H,"whitespace")(B):H(B)):Y(B)}function H(B){return B===null||R(B)?(v.exit("codeFencedFence"),$(B)):Y(B)}}}function Mu(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const jt={name:"codeIndented",tokenize:Du},Ru={tokenize:Fu,partial:!0};function Du(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),Q(e,o,"linePrefix",4+1)(c)}function o(c){const p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?l(c):n(c)}function l(c){return c===null?u(c):R(c)?e.attempt(Ru,l,u)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||R(c)?(e.exit("codeFlowValue"),l(c)):(e.consume(c),a)}function u(c){return e.exit("codeIndented"),t(c)}}function Fu(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):R(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):Q(e,o,"linePrefix",4+1)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):R(l)?i(l):n(l)}}const Nu={name:"codeText",tokenize:Vu,resolve:$u,previous:Hu};function $u(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Hu(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Vu(e,t,n){let r=0,i,o;return l;function l(d){return e.enter("codeText"),e.enter("codeTextSequence"),a(d)}function a(d){return d===96?(e.consume(d),r++,a):(e.exit("codeTextSequence"),u(d))}function u(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),u):d===96?(o=e.enter("codeTextSequence"),i=0,p(d)):R(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(d))}function c(d){return d===null||d===32||d===96||R(d)?(e.exit("codeTextData"),u(d)):(e.consume(d),c)}function p(d){return d===96?(e.consume(d),i++,p):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(o.type="codeTextData",c(d))}}function Zr(e){const t={};let n=-1,r,i,o,l,a,u,c;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Uu(e,n)),n=t[n],c=!0);else if(r[1]._container){for(o=n,i=void 0;o--&&(l=e[o],l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(i&&(e[i][1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);i&&(r[1].end=Object.assign({},e[i][1].start),a=e.slice(i,n),a.unshift(r),ke(e,i,n-i+1,a))}}return!c}function Uu(e,t){const n=e[t][1],r=e[t][2];let i=t-1;const o=[],l=n._tokenizer||r.parser[n.contentType](n.start),a=l.events,u=[],c={};let p,d,f=-1,h=n,w=0,b=0;const E=[b];for(;h;){for(;e[++i][1]!==h;);o.push(i),h._tokenizer||(p=r.sliceStream(h),h.next||p.push(null),d&&l.defineSkip(h.start),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(p),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),d=h,h=h.next}for(h=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(b=f+1,E.push(b),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(l.events=[],h?(h._tokenizer=void 0,h.previous=void 0):E.pop(),f=E.length;f--;){const k=a.slice(E[f],E[f+1]),C=o.pop();u.unshift([C,C+k.length-1]),ke(e,C,2,k)}for(f=-1;++f<u.length;)c[w+u[f][0]]=w+u[f][1],w+=u[f][1]-u[f][0]-1;return c}const Gu={tokenize:Wu,resolve:Yu},qu={tokenize:Qu,partial:!0};function Yu(e){return Zr(e),e}function Wu(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):R(a)?e.check(qu,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Qu(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Q(e,o,"linePrefix")}function o(l){if(l===null||R(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Kr(e,t,n,r,i,o,l,a,u){const c=u||Number.POSITIVE_INFINITY;let p=0;return d;function d(k){return k===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(k),e.exit(o),f):k===null||k===32||k===41||Ot(k)?n(k):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),b(k))}function f(k){return k===62?(e.enter(o),e.consume(k),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===62?(e.exit("chunkString"),e.exit(a),f(k)):k===null||k===60||R(k)?n(k):(e.consume(k),k===92?w:h)}function w(k){return k===60||k===62||k===92?(e.consume(k),h):h(k)}function b(k){return!p&&(k===null||k===41||re(k))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(k)):p<c&&k===40?(e.consume(k),p++,b):k===41?(e.consume(k),p--,b):k===null||k===32||k===40||Ot(k)?n(k):(e.consume(k),k===92?E:b)}function E(k){return k===40||k===41||k===92?(e.consume(k),b):b(k)}}function Jr(e,t,n,r,i,o){const l=this;let a=0,u;return c;function c(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(o),p}function p(h){return a>999||h===null||h===91||h===93&&!u||h===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(h):h===93?(e.exit(o),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):R(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===null||h===91||h===93||R(h)||a++>999?(e.exit("chunkString"),p(h)):(e.consume(h),u||(u=!G(h)),h===92?f:d)}function f(h){return h===91||h===92||h===93?(e.consume(h),a++,d):d(h)}}function ei(e,t,n,r,i,o){let l;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),l=f===40?41:f,u):n(f)}function u(f){return f===l?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),c(f))}function c(f){return f===l?(e.exit(o),u(l)):f===null?n(f):R(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Q(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(f))}function p(f){return f===l||f===null||R(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?d:p)}function d(f){return f===l||f===92?(e.consume(f),p):p(f)}}function qe(e,t){let n;return r;function r(i){return R(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):G(i)?Q(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Xu={name:"definition",tokenize:Ku},Zu={tokenize:Ju,partial:!0};function Ku(e,t,n){const r=this;let i;return o;function o(h){return e.enter("definition"),l(h)}function l(h){return Jr.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return i=Re(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),u):n(h)}function u(h){return re(h)?qe(e,c)(h):c(h)}function c(h){return Kr(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function p(h){return e.attempt(Zu,d,d)(h)}function d(h){return G(h)?Q(e,f,"whitespace")(h):f(h)}function f(h){return h===null||R(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function Ju(e,t,n){return r;function r(a){return re(a)?qe(e,i)(a):n(a)}function i(a){return ei(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return G(a)?Q(e,l,"whitespace")(a):l(a)}function l(a){return a===null||R(a)?t(a):n(a)}}const ec={name:"hardBreakEscape",tokenize:tc};function tc(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return R(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const nc={name:"headingAtx",tokenize:ic,resolve:rc};function rc(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ke(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function ic(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),o(p)}function o(p){return e.enter("atxHeadingSequence"),l(p)}function l(p){return p===35&&r++<6?(e.consume(p),l):p===null||re(p)?(e.exit("atxHeadingSequence"),a(p)):n(p)}function a(p){return p===35?(e.enter("atxHeadingSequence"),u(p)):p===null||R(p)?(e.exit("atxHeading"),t(p)):G(p)?Q(e,a,"whitespace")(p):(e.enter("atxHeadingText"),c(p))}function u(p){return p===35?(e.consume(p),u):(e.exit("atxHeadingSequence"),a(p))}function c(p){return p===null||p===35||re(p)?(e.exit("atxHeadingText"),a(p)):(e.consume(p),c)}}const oc=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Dn=["pre","script","style","textarea"],lc={name:"htmlFlow",tokenize:cc,resolveTo:uc,concrete:!0},sc={tokenize:hc,partial:!0},ac={tokenize:pc,partial:!0};function uc(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function cc(e,t,n){const r=this;let i,o,l,a,u;return c;function c(m){return p(m)}function p(m){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(m),d}function d(m){return m===33?(e.consume(m),f):m===47?(e.consume(m),o=!0,b):m===63?(e.consume(m),i=3,r.interrupt?t:x):be(m)?(e.consume(m),l=String.fromCharCode(m),E):n(m)}function f(m){return m===45?(e.consume(m),i=2,h):m===91?(e.consume(m),i=5,a=0,w):be(m)?(e.consume(m),i=4,r.interrupt?t:x):n(m)}function h(m){return m===45?(e.consume(m),r.interrupt?t:x):n(m)}function w(m){const de="CDATA[";return m===de.charCodeAt(a++)?(e.consume(m),a===de.length?r.interrupt?t:_:w):n(m)}function b(m){return be(m)?(e.consume(m),l=String.fromCharCode(m),E):n(m)}function E(m){if(m===null||m===47||m===62||re(m)){const de=m===47,Ie=l.toLowerCase();return!de&&!o&&Dn.includes(Ie)?(i=1,r.interrupt?t(m):_(m)):oc.includes(l.toLowerCase())?(i=6,de?(e.consume(m),k):r.interrupt?t(m):_(m)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(m):o?C(m):I(m))}return m===45||se(m)?(e.consume(m),l+=String.fromCharCode(m),E):n(m)}function k(m){return m===62?(e.consume(m),r.interrupt?t:_):n(m)}function C(m){return G(m)?(e.consume(m),C):O(m)}function I(m){return m===47?(e.consume(m),O):m===58||m===95||be(m)?(e.consume(m),F):G(m)?(e.consume(m),I):O(m)}function F(m){return m===45||m===46||m===58||m===95||se(m)?(e.consume(m),F):M(m)}function M(m){return m===61?(e.consume(m),v):G(m)?(e.consume(m),M):I(m)}function v(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),u=m,$):G(m)?(e.consume(m),v):Y(m)}function $(m){return m===u?(e.consume(m),u=null,z):m===null||R(m)?n(m):(e.consume(m),$)}function Y(m){return m===null||m===34||m===39||m===47||m===60||m===61||m===62||m===96||re(m)?M(m):(e.consume(m),Y)}function z(m){return m===47||m===62||G(m)?I(m):n(m)}function O(m){return m===62?(e.consume(m),L):n(m)}function L(m){return m===null||R(m)?_(m):G(m)?(e.consume(m),L):n(m)}function _(m){return m===45&&i===2?(e.consume(m),X):m===60&&i===1?(e.consume(m),J):m===62&&i===4?(e.consume(m),he):m===63&&i===3?(e.consume(m),x):m===93&&i===5?(e.consume(m),ye):R(m)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(sc,je,U)(m)):m===null||R(m)?(e.exit("htmlFlowData"),U(m)):(e.consume(m),_)}function U(m){return e.check(ac,H,je)(m)}function H(m){return e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),B}function B(m){return m===null||R(m)?U(m):(e.enter("htmlFlowData"),_(m))}function X(m){return m===45?(e.consume(m),x):_(m)}function J(m){return m===47?(e.consume(m),l="",ie):_(m)}function ie(m){if(m===62){const de=l.toLowerCase();return Dn.includes(de)?(e.consume(m),he):_(m)}return be(m)&&l.length<8?(e.consume(m),l+=String.fromCharCode(m),ie):_(m)}function ye(m){return m===93?(e.consume(m),x):_(m)}function x(m){return m===62?(e.consume(m),he):m===45&&i===2?(e.consume(m),x):_(m)}function he(m){return m===null||R(m)?(e.exit("htmlFlowData"),je(m)):(e.consume(m),he)}function je(m){return e.exit("htmlFlow"),t(m)}}function pc(e,t,n){const r=this;return i;function i(l){return R(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function hc(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ht,t,n)}}const dc={name:"htmlText",tokenize:fc};function fc(e,t,n){const r=this;let i,o,l;return a;function a(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),u}function u(x){return x===33?(e.consume(x),c):x===47?(e.consume(x),M):x===63?(e.consume(x),I):be(x)?(e.consume(x),Y):n(x)}function c(x){return x===45?(e.consume(x),p):x===91?(e.consume(x),o=0,w):be(x)?(e.consume(x),C):n(x)}function p(x){return x===45?(e.consume(x),h):n(x)}function d(x){return x===null?n(x):x===45?(e.consume(x),f):R(x)?(l=d,J(x)):(e.consume(x),d)}function f(x){return x===45?(e.consume(x),h):d(x)}function h(x){return x===62?X(x):x===45?f(x):d(x)}function w(x){const he="CDATA[";return x===he.charCodeAt(o++)?(e.consume(x),o===he.length?b:w):n(x)}function b(x){return x===null?n(x):x===93?(e.consume(x),E):R(x)?(l=b,J(x)):(e.consume(x),b)}function E(x){return x===93?(e.consume(x),k):b(x)}function k(x){return x===62?X(x):x===93?(e.consume(x),k):b(x)}function C(x){return x===null||x===62?X(x):R(x)?(l=C,J(x)):(e.consume(x),C)}function I(x){return x===null?n(x):x===63?(e.consume(x),F):R(x)?(l=I,J(x)):(e.consume(x),I)}function F(x){return x===62?X(x):I(x)}function M(x){return be(x)?(e.consume(x),v):n(x)}function v(x){return x===45||se(x)?(e.consume(x),v):$(x)}function $(x){return R(x)?(l=$,J(x)):G(x)?(e.consume(x),$):X(x)}function Y(x){return x===45||se(x)?(e.consume(x),Y):x===47||x===62||re(x)?z(x):n(x)}function z(x){return x===47?(e.consume(x),X):x===58||x===95||be(x)?(e.consume(x),O):R(x)?(l=z,J(x)):G(x)?(e.consume(x),z):X(x)}function O(x){return x===45||x===46||x===58||x===95||se(x)?(e.consume(x),O):L(x)}function L(x){return x===61?(e.consume(x),_):R(x)?(l=L,J(x)):G(x)?(e.consume(x),L):z(x)}function _(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),i=x,U):R(x)?(l=_,J(x)):G(x)?(e.consume(x),_):(e.consume(x),H)}function U(x){return x===i?(e.consume(x),i=void 0,B):x===null?n(x):R(x)?(l=U,J(x)):(e.consume(x),U)}function H(x){return x===null||x===34||x===39||x===60||x===61||x===96?n(x):x===47||x===62||re(x)?z(x):(e.consume(x),H)}function B(x){return x===47||x===62||re(x)?z(x):n(x)}function X(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),t):n(x)}function J(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),ie}function ie(x){return G(x)?Q(e,ye,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):ye(x)}function ye(x){return e.enter("htmlTextData"),l(x)}}const tn={name:"labelEnd",tokenize:bc,resolveTo:wc,resolveAll:yc},xc={tokenize:kc},mc={tokenize:jc},gc={tokenize:Cc};function yc(e){let t=-1;for(;++t<e.length;){const n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function wc(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const u={type:e[o][1].type==="labelLink"?"link":"image",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[o][1].start),end:Object.assign({},e[l][1].end)},p={type:"labelText",start:Object.assign({},e[o+r+2][1].end),end:Object.assign({},e[l-2][1].start)};return a=[["enter",u,t],["enter",c,t]],a=ae(a,e.slice(o+1,o+r+3)),a=ae(a,[["enter",p,t]]),a=ae(a,en(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=ae(a,[["exit",p,t],e[l-2],e[l-1],["exit",c,t]]),a=ae(a,e.slice(l+1)),a=ae(a,[["exit",u,t]]),ke(e,o,e.length,a),e}function bc(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(f){return o?o._inactive?d(f):(l=r.parser.defined.includes(Re(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),u):n(f)}function u(f){return f===40?e.attempt(xc,p,l?p:d)(f):f===91?e.attempt(mc,p,l?c:d)(f):l?p(f):d(f)}function c(f){return e.attempt(gc,p,d)(f)}function p(f){return t(f)}function d(f){return o._balanced=!0,n(f)}}function kc(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return re(d)?qe(e,o)(d):o(d)}function o(d){return d===41?p(d):Kr(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function l(d){return re(d)?qe(e,u)(d):p(d)}function a(d){return n(d)}function u(d){return d===34||d===39||d===40?ei(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):p(d)}function c(d){return re(d)?qe(e,p)(d):p(d)}function p(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function jc(e,t,n){const r=this;return i;function i(a){return Jr.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Re(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function Cc(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Sc={name:"labelStartImage",tokenize:vc,resolveAll:tn.resolveAll};function vc(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Ec={name:"labelStartLink",tokenize:Tc,resolveAll:tn.resolveAll};function Tc(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const Ct={name:"lineEnding",tokenize:Ic};function Ic(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Q(e,t,"linePrefix")}}const tt={name:"thematicBreak",tokenize:Ac};function Ac(e,t,n){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),l(c)}function l(c){return i=c,a(c)}function a(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||R(c))?(e.exit("thematicBreak"),t(c)):n(c)}function u(c){return c===i?(e.consume(c),r++,u):(e.exit("thematicBreakSequence"),G(c)?Q(e,a,"whitespace")(c):a(c))}}const ne={name:"list",tokenize:_c,continuation:{tokenize:Lc},exit:Oc},Pc={tokenize:Mc,partial:!0},zc={tokenize:Bc,partial:!0};function _c(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(h){const w=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Mt(h)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(tt,n,c)(h):c(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(h)}return n(h)}function u(h){return Mt(h)&&++l<10?(e.consume(h),u):(!r.interrupt||l<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),c(h)):n(h)}function c(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(ht,r.interrupt?n:p,e.attempt(Pc,f,d))}function p(h){return r.containerState.initialBlankLine=!0,o++,f(h)}function d(h){return G(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function Lc(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ht,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Q(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!G(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(zc,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Q(e,e.attempt(ne,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Bc(e,t,n){const r=this;return Q(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function Oc(e){e.exit(this.containerState.type)}function Mc(e,t,n){const r=this;return Q(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(o){const l=r.events[r.events.length-1];return!G(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Fn={name:"setextUnderline",tokenize:Dc,resolveTo:Rc};function Rc(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[o][1].end)):e[r][1]=l,e.push(["exit",l,t]),e}function Dc(e,t,n){const r=this;let i;return o;function o(c){let p=r.events.length,d;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){d=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=c,l(c)):n(c)}function l(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),G(c)?Q(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||R(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const Fc={tokenize:Nc};function Nc(e){const t=this,n=e.attempt(ht,r,e.attempt(this.parser.constructs.flowInitial,i,Q(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Gu,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const $c={resolveAll:ni()},Hc=ti("string"),Vc=ti("text");function ti(e){return{tokenize:t,resolveAll:ni(e==="text"?Uc:void 0)};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(p){return c(p)?o(p):a(p)}function a(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),u}function u(p){return c(p)?(n.exit("data"),o(p)):(n.consume(p),u)}function c(p){if(p===null)return!0;const d=i[p];let f=-1;if(d)for(;++f<d.length;){const h=d[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function ni(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Uc(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,u;for(;o--;){const c=i[o];if(typeof c=="string"){for(l=c.length;c.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(c===-2)u=!0,a++;else if(c!==-1){o++;break}}if(a){const c={type:n===e.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-a,offset:r.end.offset-a,_index:r.start._index+o,_bufferIndex:o?l:r.start._bufferIndex+l},end:Object.assign({},r.end)};r.end=Object.assign({},c.start),r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}function Gc(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},o=[];let l=[],a=[];const u={consume:C,enter:I,exit:F,attempt:$(M),check:$(v),interrupt:$(v,{interrupt:!0})},c={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:h,sliceSerialize:f,now:w,defineSkip:b,write:d};let p=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function d(L){return l=ae(l,L),E(),l[l.length-1]!==null?[]:(Y(t,0),c.events=en(o,c.events,c),c.events)}function f(L,_){return Yc(h(L),_)}function h(L){return qc(l,L)}function w(){const{line:L,column:_,offset:U,_index:H,_bufferIndex:B}=r;return{line:L,column:_,offset:U,_index:H,_bufferIndex:B}}function b(L){i[L.line]=L.column,O()}function E(){let L;for(;r._index<l.length;){const _=l[r._index];if(typeof _=="string")for(L=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===L&&r._bufferIndex<_.length;)k(_.charCodeAt(r._bufferIndex));else k(_)}}function k(L){p=p(L)}function C(L){R(L)?(r.line++,r.column=1,r.offset+=L===-3?2:1,O()):L!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=L}function I(L,_){const U=_||{};return U.type=L,U.start=w(),c.events.push(["enter",U,c]),a.push(U),U}function F(L){const _=a.pop();return _.end=w(),c.events.push(["exit",_,c]),_}function M(L,_){Y(L,_.from)}function v(L,_){_.restore()}function $(L,_){return U;function U(H,B,X){let J,ie,ye,x;return Array.isArray(H)?je(H):"tokenize"in H?je([H]):he(H);function he(ee){return Ne;function Ne(ve){const Le=ve!==null&&ee[ve],Ae=ve!==null&&ee.null,xt=[...Array.isArray(Le)?Le:Le?[Le]:[],...Array.isArray(Ae)?Ae:Ae?[Ae]:[]];return je(xt)(ve)}}function je(ee){return J=ee,ie=0,ee.length===0?X:m(ee[ie])}function m(ee){return Ne;function Ne(ve){return x=z(),ye=ee,ee.partial||(c.currentConstruct=ee),ee.name&&c.parser.constructs.disable.null.includes(ee.name)?Ie():ee.tokenize.call(_?Object.assign(Object.create(c),_):c,u,de,Ie)(ve)}}function de(ee){return L(ye,x),B}function Ie(ee){return x.restore(),++ie<J.length?m(J[ie]):X}}}function Y(L,_){L.resolveAll&&!o.includes(L)&&o.push(L),L.resolve&&ke(c.events,_,c.events.length-_,L.resolve(c.events.slice(_),c)),L.resolveTo&&(c.events=L.resolveTo(c.events,c))}function z(){const L=w(),_=c.previous,U=c.currentConstruct,H=c.events.length,B=Array.from(a);return{restore:X,from:H};function X(){r=L,c.previous=_,c.currentConstruct=U,c.events.length=H,a=B,O()}}function O(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function qc(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function Yc(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}const Wc={42:ne,43:ne,45:ne,48:ne,49:ne,50:ne,51:ne,52:ne,53:ne,54:ne,55:ne,56:ne,57:ne,62:Wr},Qc={91:Xu},Xc={[-2]:jt,[-1]:jt,32:jt},Zc={35:nc,42:tt,45:[Fn,tt],60:lc,61:Fn,95:tt,96:Rn,126:Rn},Kc={38:Xr,92:Qr},Jc={[-5]:Ct,[-4]:Ct,[-3]:Ct,33:Sc,38:Xr,42:Rt,60:[Tu,dc],91:Ec,92:[ec,Qr],93:tn,95:Rt,96:Nu},ep={null:[Rt,$c]},tp={null:[42,95]},np={null:[]},rp=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:tp,contentInitial:Qc,disable:np,document:Wc,flow:Zc,flowInitial:Xc,insideSpan:ep,string:Kc,text:Jc},Symbol.toStringTag,{value:"Module"}));function ip(e){const n=hu([rp,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:n,content:i(bu),document:i(ju),flow:i(Fc),string:i(Hc),text:i(Vc)};return r;function i(o){return l;function l(a){return Gc(r,o,a)}}}function op(e){for(;!Zr(e););return e}const Nn=/[\0\t\n\r]/g;function lp(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const u=[];let c,p,d,f,h;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),d=0,t="",n&&(o.charCodeAt(0)===65279&&d++,n=void 0);d<o.length;){if(Nn.lastIndex=d,c=Nn.exec(o),f=c&&c.index!==void 0?c.index:o.length,h=o.charCodeAt(f),!c){t=o.slice(d);break}if(h===10&&d===f&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),d<f&&(u.push(o.slice(d,f)),e+=f-d),h){case 0:{u.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,u.push(-2);e++<p;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}d=f+1}return a&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const sp=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ap(e){return e.replace(sp,up)}function up(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return qr(n.slice(o?2:1),o?16:10)}return Jt(n)||e}const ri={}.hasOwnProperty;function cp(e,t,n){return typeof t!="string"&&(n=t,t=void 0),pp(n)(op(ip(n).document().write(lp()(e,t,!0))))}function pp(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(pn),autolinkProtocol:z,autolinkEmail:z,atxHeading:o(an),blockQuote:o(Le),characterEscape:z,characterReference:z,codeFenced:o(Ae),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(Ae,l),codeText:o(xt,l),codeTextData:z,data:z,codeFlowValue:z,definition:o(mi),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(gi),hardBreakEscape:o(un),hardBreakTrailing:o(un),htmlFlow:o(cn,l),htmlFlowData:z,htmlText:o(cn,l),htmlTextData:z,image:o(yi),label:l,link:o(pn),listItem:o(wi),listItemValue:f,listOrdered:o(hn,d),listUnordered:o(hn),paragraph:o(bi),reference:m,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(an),strong:o(ki),thematicBreak:o(Ci)},exit:{atxHeading:u(),atxHeadingSequence:M,autolink:u(),autolinkEmail:ve,autolinkProtocol:Ne,blockQuote:u(),characterEscapeValue:O,characterReferenceMarkerHexadecimal:Ie,characterReferenceMarkerNumeric:Ie,characterReferenceValue:ee,codeFenced:u(E),codeFencedFence:b,codeFencedFenceInfo:h,codeFencedFenceMeta:w,codeFlowValue:O,codeIndented:u(k),codeText:u(B),codeTextData:O,data:O,definition:u(),definitionDestinationString:F,definitionLabelString:C,definitionTitleString:I,emphasis:u(),hardBreakEscape:u(_),hardBreakTrailing:u(_),htmlFlow:u(U),htmlFlowData:O,htmlText:u(H),htmlTextData:O,image:u(J),label:ye,labelText:ie,lineEnding:L,link:u(X),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:de,resourceDestinationString:x,resourceTitleString:he,resource:je,setextHeading:u(Y),setextHeadingLineSequence:$,setextHeadingText:v,strong:u(),thematicBreak:u()}};ii(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(j){let A={type:"root",children:[]};const D={stack:[A],tokenStack:[],config:t,enter:a,exit:c,buffer:l,resume:p,data:n},V=[];let q=-1;for(;++q<j.length;)if(j[q][1].type==="listOrdered"||j[q][1].type==="listUnordered")if(j[q][0]==="enter")V.push(q);else{const fe=V.pop();q=i(j,fe,q)}for(q=-1;++q<j.length;){const fe=t[j[q][0]];ri.call(fe,j[q][1].type)&&fe[j[q][1].type].call(Object.assign({sliceSerialize:j[q][2].sliceSerialize},D),j[q][1])}if(D.tokenStack.length>0){const fe=D.tokenStack[D.tokenStack.length-1];(fe[1]||$n).call(D,void 0,fe[0])}for(A.position={start:Ee(j.length>0?j[0][1].start:{line:1,column:1,offset:0}),end:Ee(j.length>0?j[j.length-2][1].end:{line:1,column:1,offset:0})},q=-1;++q<t.transforms.length;)A=t.transforms[q](A)||A;return A}function i(j,A,D){let V=A-1,q=-1,fe=!1,Pe,Ce,$e,He;for(;++V<=D;){const oe=j[V];switch(oe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{oe[0]==="enter"?q++:q--,He=void 0;break}case"lineEndingBlank":{oe[0]==="enter"&&(Pe&&!He&&!q&&!$e&&($e=V),He=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:He=void 0}if(!q&&oe[0]==="enter"&&oe[1].type==="listItemPrefix"||q===-1&&oe[0]==="exit"&&(oe[1].type==="listUnordered"||oe[1].type==="listOrdered")){if(Pe){let Be=V;for(Ce=void 0;Be--;){const Se=j[Be];if(Se[1].type==="lineEnding"||Se[1].type==="lineEndingBlank"){if(Se[0]==="exit")continue;Ce&&(j[Ce][1].type="lineEndingBlank",fe=!0),Se[1].type="lineEnding",Ce=Be}else if(!(Se[1].type==="linePrefix"||Se[1].type==="blockQuotePrefix"||Se[1].type==="blockQuotePrefixWhitespace"||Se[1].type==="blockQuoteMarker"||Se[1].type==="listItemIndent"))break}$e&&(!Ce||$e<Ce)&&(Pe._spread=!0),Pe.end=Object.assign({},Ce?j[Ce][1].start:oe[1].end),j.splice(Ce||V,0,["exit",Pe,oe[2]]),V++,D++}if(oe[1].type==="listItemPrefix"){const Be={type:"listItem",_spread:!1,start:Object.assign({},oe[1].start),end:void 0};Pe=Be,j.splice(V,0,["enter",Be,oe[2]]),V++,D++,$e=void 0,He=!0}}}return j[A][1]._spread=fe,D}function o(j,A){return D;function D(V){a.call(this,j(V),V),A&&A.call(this,V)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(j,A,D){this.stack[this.stack.length-1].children.push(j),this.stack.push(j),this.tokenStack.push([A,D]),j.position={start:Ee(A.start),end:void 0}}function u(j){return A;function A(D){j&&j.call(this,D),c.call(this,D)}}function c(j,A){const D=this.stack.pop(),V=this.tokenStack.pop();if(V)V[0].type!==j.type&&(A?A.call(this,j,V[0]):(V[1]||$n).call(this,j,V[0]));else throw new Error("Cannot close `"+j.type+"` ("+Ge({start:j.start,end:j.end})+"): it’s not open");D.position.end=Ee(j.end)}function p(){return cu(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(j){if(this.data.expectingFirstListItemValue){const A=this.stack[this.stack.length-2];A.start=Number.parseInt(this.sliceSerialize(j),10),this.data.expectingFirstListItemValue=void 0}}function h(){const j=this.resume(),A=this.stack[this.stack.length-1];A.lang=j}function w(){const j=this.resume(),A=this.stack[this.stack.length-1];A.meta=j}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function E(){const j=this.resume(),A=this.stack[this.stack.length-1];A.value=j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function k(){const j=this.resume(),A=this.stack[this.stack.length-1];A.value=j.replace(/(\r?\n|\r)$/g,"")}function C(j){const A=this.resume(),D=this.stack[this.stack.length-1];D.label=A,D.identifier=Re(this.sliceSerialize(j)).toLowerCase()}function I(){const j=this.resume(),A=this.stack[this.stack.length-1];A.title=j}function F(){const j=this.resume(),A=this.stack[this.stack.length-1];A.url=j}function M(j){const A=this.stack[this.stack.length-1];if(!A.depth){const D=this.sliceSerialize(j).length;A.depth=D}}function v(){this.data.setextHeadingSlurpLineEnding=!0}function $(j){const A=this.stack[this.stack.length-1];A.depth=this.sliceSerialize(j).codePointAt(0)===61?1:2}function Y(){this.data.setextHeadingSlurpLineEnding=void 0}function z(j){const D=this.stack[this.stack.length-1].children;let V=D[D.length-1];(!V||V.type!=="text")&&(V=ji(),V.position={start:Ee(j.start),end:void 0},D.push(V)),this.stack.push(V)}function O(j){const A=this.stack.pop();A.value+=this.sliceSerialize(j),A.position.end=Ee(j.end)}function L(j){const A=this.stack[this.stack.length-1];if(this.data.atHardBreak){const D=A.children[A.children.length-1];D.position.end=Ee(j.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(A.type)&&(z.call(this,j),O.call(this,j))}function _(){this.data.atHardBreak=!0}function U(){const j=this.resume(),A=this.stack[this.stack.length-1];A.value=j}function H(){const j=this.resume(),A=this.stack[this.stack.length-1];A.value=j}function B(){const j=this.resume(),A=this.stack[this.stack.length-1];A.value=j}function X(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const A=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=A,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function J(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const A=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=A,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function ie(j){const A=this.sliceSerialize(j),D=this.stack[this.stack.length-2];D.label=ap(A),D.identifier=Re(A).toLowerCase()}function ye(){const j=this.stack[this.stack.length-1],A=this.resume(),D=this.stack[this.stack.length-1];if(this.data.inReference=!0,D.type==="link"){const V=j.children;D.children=V}else D.alt=A}function x(){const j=this.resume(),A=this.stack[this.stack.length-1];A.url=j}function he(){const j=this.resume(),A=this.stack[this.stack.length-1];A.title=j}function je(){this.data.inReference=void 0}function m(){this.data.referenceType="collapsed"}function de(j){const A=this.resume(),D=this.stack[this.stack.length-1];D.label=A,D.identifier=Re(this.sliceSerialize(j)).toLowerCase(),this.data.referenceType="full"}function Ie(j){this.data.characterReferenceType=j.type}function ee(j){const A=this.sliceSerialize(j),D=this.data.characterReferenceType;let V;D?(V=qr(A,D==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):V=Jt(A);const q=this.stack.pop();q.value+=V,q.position.end=Ee(j.end)}function Ne(j){O.call(this,j);const A=this.stack[this.stack.length-1];A.url=this.sliceSerialize(j)}function ve(j){O.call(this,j);const A=this.stack[this.stack.length-1];A.url="mailto:"+this.sliceSerialize(j)}function Le(){return{type:"blockquote",children:[]}}function Ae(){return{type:"code",lang:null,meta:null,value:""}}function xt(){return{type:"inlineCode",value:""}}function mi(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function gi(){return{type:"emphasis",children:[]}}function an(){return{type:"heading",depth:0,children:[]}}function un(){return{type:"break"}}function cn(){return{type:"html",value:""}}function yi(){return{type:"image",title:null,url:"",alt:null}}function pn(){return{type:"link",title:null,url:"",children:[]}}function hn(j){return{type:"list",ordered:j.type==="listOrdered",start:null,spread:j._spread,children:[]}}function wi(j){return{type:"listItem",spread:j._spread,checked:null,children:[]}}function bi(){return{type:"paragraph",children:[]}}function ki(){return{type:"strong",children:[]}}function ji(){return{type:"text",value:""}}function Ci(){return{type:"thematicBreak"}}}function Ee(e){return{line:e.line,column:e.column,offset:e.offset}}function ii(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?ii(e,r):hp(e,r)}}function hp(e,t){let n;for(n in t)if(ri.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function $n(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ge({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ge({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ge({start:t.start,end:t.end})+") is still open")}function dp(e){const t=this;t.parser=n;function n(r){return cp(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function fp(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function xp(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function mp(e,t){const n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i}function gp(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yp(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wp(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Fe(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,a+=1,e.footnoteCounts.set(r,a);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,c),e.applyData(t,c)}function bp(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function kp(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function oi(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function jp(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return oi(e,t);const i={src:Fe(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Cp(e,t){const n={src:Fe(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Sp(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function vp(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return oi(e,t);const i={href:Fe(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Ep(e,t){const n={href:Fe(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Tp(e,t,n){const r=e.all(t),i=n?Ip(n):li(t),o={},l=[];if(typeof t.checked=="boolean"){const p=r[0];let d;p&&p.type==="element"&&p.tagName==="p"?d=p:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const p=r[a];(i||a!==0||p.type!=="element"||p.tagName!=="p")&&l.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?l.push(...p.children):l.push(p)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,c),e.applyData(t,c)}function Ip(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=li(n[r])}return t}function li(e){const t=e.spread;return t??e.children.length>1}function Ap(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function Pp(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zp(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function _p(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Lp(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Qt(t.children[1]),u=Fr(t.children[t.children.length-1]);a&&u&&(l.position={start:a,end:u}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function Bp(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let u=-1;const c=[];for(;++u<a;){const d=t.children[u],f={},h=l?l[u]:void 0;h&&(f.align=h);let w={type:"element",tagName:o,properties:f,children:[]};d&&(w.children=e.all(d),e.patch(d,w),w=e.applyData(d,w)),c.push(w)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,p),e.applyData(t,p)}function Op(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Hn=9,Vn=32;function Mp(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Un(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Un(t.slice(i),i>0,!1)),o.join("")}function Un(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Hn||o===Vn;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Hn||o===Vn;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Rp(e,t){const n={type:"text",value:Mp(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Dp(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Fp={blockquote:fp,break:xp,code:mp,delete:gp,emphasis:yp,footnoteReference:wp,heading:bp,html:kp,imageReference:jp,image:Cp,inlineCode:Sp,linkReference:vp,link:Ep,listItem:Tp,list:Ap,paragraph:Pp,root:zp,strong:_p,table:Lp,tableCell:Op,tableRow:Bp,text:Rp,thematicBreak:Dp,toml:Ke,yaml:Ke,definition:Ke,footnoteDefinition:Ke};function Ke(){}const si=-1,dt=0,ot=1,lt=2,nn=3,rn=4,on=5,ln=6,ai=7,ui=8,Gn=typeof self=="object"?self:globalThis,Np=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case dt:case si:return n(l,i);case ot:{const a=n([],i);for(const u of l)a.push(r(u));return a}case lt:{const a=n({},i);for(const[u,c]of l)a[r(u)]=r(c);return a}case nn:return n(new Date(l),i);case rn:{const{source:a,flags:u}=l;return n(new RegExp(a,u),i)}case on:{const a=n(new Map,i);for(const[u,c]of l)a.set(r(u),r(c));return a}case ln:{const a=n(new Set,i);for(const u of l)a.add(r(u));return a}case ai:{const{name:a,message:u}=l;return n(new Gn[a](u),i)}case ui:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i)}return n(new Gn[o](l),i)};return r},qn=e=>Np(new Map,e)(0),Oe="",{toString:$p}={},{keys:Hp}=Object,Ve=e=>{const t=typeof e;if(t!=="object"||!e)return[dt,t];const n=$p.call(e).slice(8,-1);switch(n){case"Array":return[ot,Oe];case"Object":return[lt,Oe];case"Date":return[nn,Oe];case"RegExp":return[rn,Oe];case"Map":return[on,Oe];case"Set":return[ln,Oe]}return n.includes("Array")?[ot,n]:n.includes("Error")?[ai,n]:[lt,n]},Je=([e,t])=>e===dt&&(t==="function"||t==="symbol"),Vp=(e,t,n,r)=>{const i=(l,a)=>{const u=r.push(l)-1;return n.set(a,u),u},o=l=>{if(n.has(l))return n.get(l);let[a,u]=Ve(l);switch(a){case dt:{let p=l;switch(u){case"bigint":a=ui,p=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);p=null;break;case"undefined":return i([si],l)}return i([a,p],l)}case ot:{if(u)return i([u,[...l]],l);const p=[],d=i([a,p],l);for(const f of l)p.push(o(f));return d}case lt:{if(u)switch(u){case"BigInt":return i([u,l.toString()],l);case"Boolean":case"Number":case"String":return i([u,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const p=[],d=i([a,p],l);for(const f of Hp(l))(e||!Je(Ve(l[f])))&&p.push([o(f),o(l[f])]);return d}case nn:return i([a,l.toISOString()],l);case rn:{const{source:p,flags:d}=l;return i([a,{source:p,flags:d}],l)}case on:{const p=[],d=i([a,p],l);for(const[f,h]of l)(e||!(Je(Ve(f))||Je(Ve(h))))&&p.push([o(f),o(h)]);return d}case ln:{const p=[],d=i([a,p],l);for(const f of l)(e||!Je(Ve(f)))&&p.push(o(f));return d}}const{message:c}=l;return i([a,{name:u,message:c}],l)};return o},Yn=(e,{json:t,lossy:n}={})=>{const r=[];return Vp(!(t||n),!!t,new Map,r)(e),r},st=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?qn(Yn(e,t)):structuredClone(e):(e,t)=>qn(Yn(e,t));function Up(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Gp(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function qp(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Up,r=e.options.footnoteBackLabel||Gp,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const p=e.all(c),d=String(c.identifier).toUpperCase(),f=Fe(d.toLowerCase());let h=0;const w=[],b=e.footnoteCounts.get(d);for(;b!==void 0&&++h<=b;){w.length>0&&w.push({type:"text",value:" "});let C=typeof n=="string"?n:n(u,h);typeof C=="string"&&(C={type:"text",value:C}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,h),className:["data-footnote-backref"]},children:Array.isArray(C)?C:[C]})}const E=p[p.length-1];if(E&&E.type==="element"&&E.tagName==="p"){const C=E.children[E.children.length-1];C&&C.type==="text"?C.value+=" ":E.children.push({type:"text",value:" "}),E.children.push(...w)}else p.push(...w);const k={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(p,!0)};e.patch(c,k),a.push(k)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...st(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const ci=function(e){if(e==null)return Xp;if(typeof e=="function")return ft(e);if(typeof e=="object")return Array.isArray(e)?Yp(e):Wp(e);if(typeof e=="string")return Qp(e);throw new Error("Expected function, string, or object as test")};function Yp(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=ci(e[n]);return ft(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function Wp(e){const t=e;return ft(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function Qp(e){return ft(t);function t(n){return n&&n.type===e}}function ft(e){return t;function t(n,r,i){return!!(Zp(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Xp(){return!0}function Zp(e){return e!==null&&typeof e=="object"&&"type"in e}const pi=[],Kp=!0,Wn=!1,Jp="skip";function eh(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=ci(i),l=r?-1:1;a(e,void 0,[])();function a(u,c,p){const d=u&&typeof u=="object"?u:{};if(typeof d.type=="string"){const h=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(u.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=pi,w,b,E;if((!t||o(u,c,p[p.length-1]||void 0))&&(h=th(n(u,p)),h[0]===Wn))return h;if("children"in u&&u.children){const k=u;if(k.children&&h[0]!==Jp)for(b=(r?k.children.length:-1)+l,E=p.concat(k);b>-1&&b<k.children.length;){const C=k.children[b];if(w=a(C,b,E)(),w[0]===Wn)return w;b=typeof w[1]=="number"?w[1]:b+l}}return h}}}function th(e){return Array.isArray(e)?e:typeof e=="number"?[Kp,e]:e==null?pi:[e]}function hi(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),eh(e,o,a,i);function a(u,c){const p=c[c.length-1],d=p?p.children.indexOf(u):void 0;return l(u,d,p)}}const Dt={}.hasOwnProperty,nh={};function rh(e,t){const n=t||nh,r=new Map,i=new Map,o=new Map,l={...Fp,...n.handlers},a={all:c,applyData:oh,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:u,options:n,patch:ih,wrap:sh};return hi(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const d=p.type==="definition"?r:i,f=String(p.identifier).toUpperCase();d.has(f)||d.set(f,p)}}),a;function u(p,d){const f=p.type,h=a.handlers[f];if(Dt.call(a.handlers,f)&&h)return h(a,p,d);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in p){const{children:b,...E}=p,k=st(E);return k.children=a.all(p),k}return st(p)}return(a.options.unknownHandler||lh)(a,p,d)}function c(p){const d=[];if("children"in p){const f=p.children;let h=-1;for(;++h<f.length;){const w=a.one(f[h],p);if(w){if(h&&f[h-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Qn(w.value)),!Array.isArray(w)&&w.type==="element")){const b=w.children[0];b&&b.type==="text"&&(b.value=Qn(b.value))}Array.isArray(w)?d.push(...w):d.push(w)}}}return d}}function ih(e,t){e.position&&(t.position=Na(e))}function oh(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,st(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function lh(e,t){const n=t.data||{},r="value"in t&&!(Dt.call(n,"hProperties")||Dt.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function sh(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Qn(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Xn(e,t){const n=rh(e,t),r=n.one(e,void 0),i=qp(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function ah(e,t){return e&&"run"in e?async function(n,r){const i=Xn(n,t);await e.run(i,r)}:function(n){return Xn(n,t||e)}}function Zn(e){if(e)throw e}var nt=Object.prototype.hasOwnProperty,di=Object.prototype.toString,Kn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,er=function(t){return typeof Array.isArray=="function"?Array.isArray(t):di.call(t)==="[object Array]"},tr=function(t){if(!t||di.call(t)!=="[object Object]")return!1;var n=nt.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&nt.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||nt.call(t,i)},nr=function(t,n){Kn&&n.name==="__proto__"?Kn(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},rr=function(t,n){if(n==="__proto__")if(nt.call(t,n)){if(Jn)return Jn(t,n).value}else return;return t[n]},uh=function e(){var t,n,r,i,o,l,a=arguments[0],u=1,c=arguments.length,p=!1;for(typeof a=="boolean"&&(p=a,a=arguments[1]||{},u=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});u<c;++u)if(t=arguments[u],t!=null)for(n in t)r=rr(a,n),i=rr(t,n),a!==i&&(p&&i&&(tr(i)||(o=er(i)))?(o?(o=!1,l=r&&er(r)?r:[]):l=r&&tr(r)?r:{},nr(a,{name:n,newValue:e(p,l,i)})):typeof i<"u"&&nr(a,{name:n,newValue:i}));return a};const St=Ti(uh);function Ft(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ch(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(u,...c){const p=e[++o];let d=-1;if(u){l(u);return}for(;++d<i.length;)(c[d]===null||c[d]===void 0)&&(c[d]=i[d]);i=c,p?ph(p,a)(...c):l(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function ph(e,t){let n;return r;function r(...l){const a=e.length>l.length;let u;a&&l.push(i);try{u=e.apply(this,l)}catch(c){const p=c;if(a&&n)throw p;return i(p)}a||(u instanceof Promise?u.then(o,i):u instanceof Error?i(u):o(u))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const we={basename:hh,dirname:dh,extname:fh,join:xh,sep:"/"};function hh(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Xe(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function dh(e){if(Xe(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function fh(e){Xe(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function xh(...e){let t=-1,n;for(;++t<e.length;)Xe(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":mh(n)}function mh(e){Xe(e);const t=e.codePointAt(0)===47;let n=gh(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function gh(e,t){let n="",r=0,i=-1,o=0,l=-1,a,u;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function Xe(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const yh={cwd:wh};function wh(){return"/"}function Nt(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function bh(e){if(typeof e=="string")e=new URL(e);else if(!Nt(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return kh(e)}function kh(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const vt=["history","path","basename","stem","extname","dirname"];class fi{constructor(t){let n;t?Nt(t)?n={path:t}:typeof t=="string"||jh(t)?n={value:t}:n=t:n={},this.cwd=yh.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<vt.length;){const o=vt[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)vt.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?we.basename(this.path):void 0}set basename(t){Tt(t,"basename"),Et(t,"basename"),this.path=we.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?we.dirname(this.path):void 0}set dirname(t){ir(this.basename,"dirname"),this.path=we.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?we.extname(this.path):void 0}set extname(t){if(Et(t,"extname"),ir(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=we.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Nt(t)&&(t=bh(t)),Tt(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?we.basename(this.path,this.extname):void 0}set stem(t){Tt(t,"stem"),Et(t,"stem"),this.path=we.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new te(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Et(e,t){if(e&&e.includes(we.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+we.sep+"`")}function Tt(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function ir(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function jh(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Ch=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};Object.setPrototypeOf(o,r);const l=Object.getOwnPropertyNames(i);for(const a of l){const u=Object.getOwnPropertyDescriptor(i,a);u&&Object.defineProperty(o,a,u)}return o},Sh={}.hasOwnProperty;class sn extends Ch{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ch()}copy(){const t=new sn;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(St(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Pt("data",this.frozen),this.namespace[t]=n,this):Sh.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Pt("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=et(t),r=this.parser||this.Parser;return It("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),It("process",this.parser||this.Parser),At("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const a=et(t),u=r.parse(a);r.run(u,a,function(p,d,f){if(p||!d||!f)return c(p);const h=d,w=r.stringify(h,f);Th(w)?f.value=w:f.result=w,c(p,f)});function c(p,d){p||!d?l(p):o?o(d):n(void 0,d)}}}processSync(t){let n=!1,r;return this.freeze(),It("processSync",this.parser||this.Parser),At("processSync",this.compiler||this.Compiler),this.process(t,i),lr("processSync","process",n),r;function i(o,l){n=!0,Zn(o),r=l}}run(t,n,r){or(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const u=et(n);i.run(t,u,c);function c(p,d,f){const h=d||t;p?a(p):l?l(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),lr("runSync","run",r),i;function o(l,a){Zn(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=et(n),i=this.compiler||this.Compiler;return At("stringify",i),or(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Pt("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[p,...d]=c;u(p,d)}else l(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function l(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=St(!0,i.settings,c.settings))}function a(c){let p=-1;if(c!=null)if(Array.isArray(c))for(;++p<c.length;){const d=c[p];o(d)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,p){let d=-1,f=-1;for(;++d<r.length;)if(r[d][0]===c){f=d;break}if(f===-1)r.push([c,...p]);else if(p.length>0){let[h,...w]=p;const b=r[f][1];Ft(b)&&Ft(h)&&(h=St(!0,b,h)),r[f]=[c,h,...w]}}}}const vh=new sn().freeze();function It(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function At(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Pt(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function or(e){if(!Ft(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function lr(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function et(e){return Eh(e)?e:new fi(e)}function Eh(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Th(e){return typeof e=="string"||Ih(e)}function Ih(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Ah="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",sr=[],ar={allowDangerousHtml:!0},Ph=/^(https?|ircs?|mailto|xmpp)$/i,zh=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function _h(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",i=e.className,o=e.components,l=e.disallowedElements,a=e.rehypePlugins||sr,u=e.remarkPlugins||sr,c=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ar}:ar,p=e.skipHtml,d=e.unwrapDisallowed,f=e.urlTransform||Lh,h=vh().use(dp).use(u).use(ah,c).use(a),w=new fi;typeof r=="string"&&(w.value=r);for(const C of zh)Object.hasOwn(e,C.from)&&(""+C.from+(C.to?"use `"+C.to+"` instead":"remove it")+Ah+C.id,void 0);const b=h.parse(w);let E=h.runSync(b,w);return i&&(E={type:"element",tagName:"div",properties:{className:i},children:E.type==="root"?E.children:[E]}),hi(E,k),qa(E,{Fragment:s.Fragment,components:o,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function k(C,I,F){if(C.type==="raw"&&F&&typeof I=="number")return p?F.children.splice(I,1):F.children[I]={type:"text",value:C.value},I;if(C.type==="element"){let M;for(M in kt)if(Object.hasOwn(kt,M)&&Object.hasOwn(C.properties,M)){const v=C.properties[M],$=kt[M];($===null||$.includes(C.tagName))&&(C.properties[M]=f(String(v||""),M,C))}}if(C.type==="element"){let M=t?!t.includes(C.tagName):l?l.includes(C.tagName):!1;if(!M&&n&&typeof I=="number"&&(M=!n(C,I,F)),M&&F&&typeof I=="number")return d&&C.children?F.children.splice(I,1,...C.children):F.children.splice(I,1),I}}}function Lh(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t<0||i>-1&&t>i||n>-1&&t>n||r>-1&&t>r||Ph.test(e.slice(0,t))?e:""}const Bh=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"brand_awareness",children:[s.jsx("mask",{id:"mask0_3696_4540",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_3696_4540)",children:s.jsx("path",{id:"brand_awareness_2",d:"M15.577 10.625H13.8142C13.6368 10.625 13.4883 10.5652 13.3687 10.4455C13.249 10.3259 13.1892 10.1774 13.1892 10C13.1892 9.82269 13.249 9.67419 13.3687 9.55454C13.4883 9.43489 13.6368 9.37506 13.8142 9.37506H15.577C15.7543 9.37506 15.9028 9.43489 16.0225 9.55454C16.1421 9.67419 16.202 9.82269 16.202 10C16.202 10.1774 16.1421 10.3259 16.0225 10.4455C15.9028 10.5652 15.7543 10.625 15.577 10.625ZM12.1106 13.9279C12.2175 13.7816 12.354 13.6972 12.5201 13.6747C12.6862 13.6523 12.8425 13.6945 12.9888 13.8013L14.3943 14.8574C14.5406 14.9642 14.625 15.1007 14.6475 15.2669C14.6699 15.433 14.6277 15.5892 14.5209 15.7356C14.4141 15.882 14.2776 15.9664 14.1114 15.9888C13.9453 16.0112 13.7891 15.969 13.6427 15.8622L12.2372 14.8061C12.0909 14.6993 12.0065 14.5628 11.9841 14.3967C11.9616 14.2305 12.0038 14.0743 12.1106 13.9279ZM14.3622 5.1106L12.9568 6.16671C12.8104 6.27354 12.6542 6.31574 12.488 6.29331C12.3219 6.27087 12.1854 6.18646 12.0786 6.0401C11.9718 5.89374 11.9296 5.7375 11.952 5.57137C11.9744 5.40525 12.0588 5.26876 12.2052 5.16192L13.6106 4.10583C13.757 3.999 13.9133 3.9568 14.0794 3.97923C14.2455 4.00166 14.382 4.08606 14.4888 4.23244C14.5957 4.3788 14.6379 4.53504 14.6154 4.70116C14.593 4.86729 14.5086 5.00377 14.3622 5.1106ZM6.05778 12.0834H3.71805C3.5033 12.0834 3.32408 12.0115 3.18039 11.8678C3.03669 11.7241 2.96484 11.5449 2.96484 11.3301V8.66994C2.96484 8.4552 3.03669 8.27599 3.18039 8.13229C3.32408 7.98858 3.5033 7.91673 3.71805 7.91673H6.05778L8.55134 5.42317C8.75114 5.22339 8.9811 5.17771 9.24124 5.28614C9.50138 5.39459 9.63145 5.5909 9.63145 5.87508V14.125C9.63145 14.4092 9.50138 14.6055 9.24124 14.7139C8.9811 14.8224 8.75114 14.7767 8.55134 14.5769L6.05778 12.0834Z",fill:"currentColor"})})]})}),Oh=({trend:e,onClose:t,selectTrending:n})=>{const[r,i]=P.useState(!1),{close:o}=zt("briefDescription"),l=P.useRef(null),a=()=>{n(e.topic)},u=P.useCallback(()=>{t(),o()},[t,o]),c=()=>{l.current&&(r?l.current.pause():l.current.play(),i(!r)),i(!r)};return P.useEffect(()=>(window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}),[u]),s.jsxs(wo,{id:"briefDescription",kind:"regular",noWrap:!0,onClose:u,children:[e.audio_EN?s.jsxs(s.Fragment,{children:[s.jsxs(g,{direction:"row",justify:"flex-start",m:20,children:[s.jsx(ue,{onClick:c,size:"small",startIcon:r?s.jsx(ut,{}):s.jsx(Bh,{}),style:{marginRight:"10px"},children:"Listen"}),s.jsx(ue,{onClick:a,size:"small",startIcon:s.jsx(Bi,{}),children:"Learn More"})]}),s.jsx(Fh,{ref:l,src:e.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null,s.jsx(Dh,{children:e.tldr_topic??e.topic}),s.jsx(Mh,{children:s.jsx(g,{children:s.jsx(Rh,{children:e.tldr&&s.jsx(_h,{children:e.tldr})})})})]})},Mh=S.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 8px 0;
  padding: 0 20px;
`,Rh=S(Z)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,Dh=S(Z)`
  font-weight: 600;
  font-size: 20px;
  padding: 0 20px;
`,Fh=S.audio`
  height: 0;
  width: 0;
`,Nh=["Drivechain","Ordinals","L402","Nostr","AI"],$h=({onSubmit:e})=>{var Y;const{open:t}=zt("addContent"),[n,r]=P.useState(!1),[i,o]=P.useState(!1),[l,a]=P.useState(null),u=P.useRef(null),[c,p]=P.useState(0),[d,f]=P.useState(!1),{open:h}=zt("briefDescription"),{trendingTopics:w,setTrendingTopics:b}=ce(z=>z),{setValue:E}=fr(),k=P.useCallback(async()=>{r(!0),o(!1);try{const z=await Oi();z.length&&Array.isArray(z)&&b(z)}catch{b(Nh.map(O=>({topic:O,count:0})))}finally{r(!1)}},[b,o]);P.useEffect(()=>{w.length||k()},[k,w.length]),P.useEffect(()=>{const z=setTimeout(()=>{o(!0)},5e3);return()=>clearTimeout(z)},[o,n]);const C=z=>{E("search",z),e==null||e()},I=(z,O)=>{z.stopPropagation(),z.currentTarget.blur(),O!=null&&O.tldr&&(a(O),h())},F=()=>{a(null)},M=z=>{z.stopPropagation(),z.currentTarget.blur(),f(!d)};P.useEffect(()=>{var z,O;d?(z=u.current)==null||z.play():(O=u.current)==null||O.pause()},[c,d]);const v=()=>{p(z=>{var L,_;let O=(z+1)%w.length;for(;O!==z&&!((L=w[O])!=null&&L.audio_EN);)O=(O+1)%w.length;return O===z?(f(!1),O):((_=u.current)==null||_.load(),O===0&&(f(!1),p(0)),O)})},$=n?"Loading":"No new trending topics in the last 24 hours";return s.jsxs(Vh,{"data-testid":"trending-component",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Trending Topics"}),s.jsx("span",{className:"heading__icon",children:n?s.jsx(Vt,{color:y.white,size:16}):s.jsx(s.Fragment,{children:i?s.jsx(Gh,{onClick:k,size:"small",startIcon:s.jsx(oa,{})}):s.jsx(la,{})})})]}),ko(w)?s.jsxs("div",{children:[s.jsx(ue,{onClick:z=>M(z),startIcon:d?s.jsx(ut,{}):s.jsx(Ht,{}),children:d?"Pause":"Play All"}),s.jsx(qh,{ref:u,onEnded:v,src:(Y=w[c])==null?void 0:Y.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null]}),w.length===0?s.jsxs("div",{className:"trending-empty",children:[s.jsx(Uh,{children:$}),s.jsx(ue,{color:"secondary",disabled:n,onClick:t,size:"medium",startIcon:s.jsx(yo,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):s.jsx("ul",{className:"list",children:w.map(z=>s.jsxs(g,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>C(z.topic),children:[s.jsxs(Hh,{children:[" #",jo(z)]}),z.tldr&&s.jsx(ue,{onClick:O=>I(O,z),children:"TLDR"})]},z.topic))})]}),l&&s.jsx(Oh,{onClose:F,selectTrending:C,trend:l})]})},Hh=S.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 0.3pt;
`,Vh=S(g)`
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
`,Uh=S.p`
  color: ${y.GRAY6};
  margin-bottom: 20px;
`,Gh=S(ue)`
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
`,qh=S.audio`
  height: 0;
  width: 0;
`,Yh=390,Wh=P.forwardRef(({onSubmit:e,subViewOpen:t},n)=>{const{isFetching:r,setTeachMe:i,setSidebarFilter:o}=ce(E=>E),l=pr(),{setSidebarOpen:a,currentSearch:u,clearSearch:c,searchFormValue:p}=me(E=>E),[d]=Ii(E=>[E.trendingTopicsFlag]),{setValue:f}=fr(),h=P.useRef(null),[w,b]=P.useState(!1);return P.useEffect(()=>{f("search",p)},[f,p]),P.useEffect(()=>{const E=h.current;if(!E)return;const k=()=>{b((E==null?void 0:E.scrollTop)>0)};E.addEventListener("scroll",k)},[]),s.jsxs(Zh,{ref:n,id:"sidebar-wrapper",children:[s.jsx(r0,{}),s.jsxs(xi,{className:Ue({"has-shadow":w}),children:[s.jsxs(Kh,{children:[s.jsx(io,{onSubmit:e}),s.jsx(e0,{onClick:()=>{if(u){f("search",""),c(),o("all");return}e==null||e()},children:r?s.jsx(Vt,{color:y.SECONDARY_BLUE,"data-testid":"loader",size:"20"}):s.jsx(s.Fragment,{children:u?s.jsx(Mi,{}):s.jsx(Ri,{})})})]}),u&&s.jsx(Jh,{children:r?s.jsx(Po,{}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"left",children:[s.jsx("span",{className:"count",children:l.length}),s.jsx("span",{className:"label",children:" results"})]}),s.jsx("div",{className:"right",style:{alignItems:"center"},children:s.jsx(Eo,{})})]})})]}),!t&&s.jsx(t0,{onClick:()=>{a(!1),i(!1)},children:s.jsx(Sr,{})}),s.jsxs(n0,{ref:h,children:[!u&&d&&s.jsx(i0,{children:s.jsx($h,{onSubmit:e})}),s.jsx(g,{children:r?s.jsx(sl,{}):s.jsx(il,{isSearchResult:!!u})})]})]})}),Qh=["topic","person","guest","event","organization","place","project","software"],Xh=({onSubmit:e})=>{const{sidebarIsOpen:t}=me(o=>o),n=ge(),r=!!n&&t&&!Qh.includes(n.node_type),{showTeachMe:i}=ce(o=>o);return s.jsxs(s.Fragment,{children:[s.jsx(qt,{direction:"right",in:t,mountOnEnter:!0,unmountOnExit:!0,children:s.jsx(Wh,{onSubmit:e,subViewOpen:r})}),s.jsx(Ks,{open:r||!!i}),!t&&s.jsx(ra,{})]})},Zh=S(g)(({theme:e})=>({position:"relative",background:y.BG1,height:"100vh",width:"100%",zIndex:30,[e.breakpoints.up("sm")]:{width:Yh}})),xi=S(g).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:e})=>({padding:e.spacing(3.75,2),[e.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:y.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),Kh=S(g).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,Jh=S(g).attrs({direction:"row",justify:"space-between",align:"center"})`
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
`,e0=S(g).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${y.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${y.gray200}; */
  }

  ${xi} input:focus + & {
    color: ${y.primaryBlue};
  }
`,t0=S(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),n0=S(g)(()=>({overflow:"auto",flex:1,width:"100%"})),r0=S(g)`
  height: 64px;
  background: ${y.BG2};
`,i0=S(g)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`;Xh.displayName="Sidebar";export{Yh as MENU_WIDTH,Xh as SideBar};
