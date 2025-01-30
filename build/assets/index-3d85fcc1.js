import{W as oe,c as ne,r,_ as u,j as t,s as l,a as s,F as h,u as A,I as re,C as se,m as ie,b as X,d as Z,e as ae,T,B as le,Q as ce,f as de,g as ue,h as he,i as ge,k as pe,l as fe}from"./index-abea8d7f.js";import{P as me,T as xe,u as ye,a as _e,O as be,A as we}from"./index-e8341c99.js";const je=oe`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  body {

    &.no-scroll {
      overflow: hidden;
    }
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`,ke={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},ve=ne(e=>({...ke,setAskedQuestion:n=>e(i=>({askedQuestions:[...i.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(i=>({askedQuestionsAnswers:[...i.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var i,c,a,p;(i=n==null?void 0:n.instagraph)!=null&&i.edges&&((c=n==null?void 0:n.instagraph)!=null&&c.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(a=n==null?void 0:n.instagraph)==null?void 0:a.edges,nodes:(p=n==null?void 0:n.instagraph)==null?void 0:p.nodes}})}})),Ee="0.1.106",Te=r.lazy(()=>u(()=>import("./index-028b76ce.js"),["assets/index-028b76ce.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/index-e8341c99.js","assets/ClipLoader-636500cc.js","assets/Tabs-1b220485.js","assets/createSvgIcon-a467e822.js"]).then(({SettingsModal:e})=>({default:e}))),Ae=r.lazy(()=>u(()=>import("./index-d1c17f14.js"),["assets/index-d1c17f14.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/CheckIcon-d3631751.js","assets/index-717b1eb9.js","assets/ClipLoader-636500cc.js"]).then(({AddContentModal:e})=>({default:e}))),ze=r.lazy(()=>u(()=>import("./index-053ec44d.js"),["assets/index-053ec44d.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/index-e8341c99.js","assets/CheckIcon-d3631751.js","assets/index-717b1eb9.js","assets/ClipLoader-636500cc.js","assets/index-5fe8c70d.js","assets/three.module-71ec604c.js","assets/index-2483918c.js","assets/index-26b2fdf0.js","assets/Stack-321428a6.js","assets/createSvgIcon-a467e822.js","assets/TextareaAutosize-5c2f15c2.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),Se=r.lazy(()=>u(()=>import("./index-1f3d727c.js"),["assets/index-1f3d727c.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/VisibilityOn-5c3dc2ee.js","assets/SearchIcon-221e359c.js","assets/constants-9273b308.js","assets/index-e8341c99.js","assets/ClipLoader-636500cc.js","assets/index-2483918c.js","assets/index-26b2fdf0.js","assets/Stack-321428a6.js","assets/createSvgIcon-a467e822.js","assets/TextareaAutosize-5c2f15c2.js","assets/index-5d72746d.js","assets/NodeCircleIcon-70e62a84.js","assets/CheckIcon-d3631751.js","assets/Typography-cc1edd3f.js","assets/Tabs-1b220485.js"]).then(({SourcesTableModal:e})=>({default:e}))),Ie=r.lazy(()=>u(()=>import("./index-e9b21485.js"),["assets/index-e9b21485.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/index-e8341c99.js","assets/EditNodeIcon-a2c7eb11.js","assets/index-26b2fdf0.js","assets/Skeleton-d2098c52.js","assets/ClipLoader-636500cc.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Le=r.lazy(()=>u(()=>import("./index-079ef868.js"),["assets/index-079ef868.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/index-e8341c99.js","assets/DeleteNodeIcon-1d0892d7.js","assets/Skeleton-d2098c52.js","assets/ClipLoader-636500cc.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Pe=r.lazy(()=>u(()=>import("./index-36f9e793.js"),["assets/index-36f9e793.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/index-e8341c99.js","assets/NodeCircleIcon-70e62a84.js","assets/index-2483918c.js","assets/index-26b2fdf0.js","assets/Stack-321428a6.js","assets/createSvgIcon-a467e822.js","assets/TextareaAutosize-5c2f15c2.js","assets/constants-9273b308.js","assets/ClipLoader-636500cc.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Re=r.lazy(()=>u(()=>import("./index-8e32dce7.js"),["assets/index-8e32dce7.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/index-e8341c99.js","assets/index-5d72746d.js","assets/constants-9273b308.js","assets/NodeCircleIcon-70e62a84.js","assets/index-2483918c.js","assets/index-26b2fdf0.js","assets/Stack-321428a6.js","assets/createSvgIcon-a467e822.js","assets/TextareaAutosize-5c2f15c2.js","assets/ClipLoader-636500cc.js"]).then(({MergeNodeModal:e})=>({default:e}))),Me=r.lazy(()=>u(()=>import("./index-088c814d.js"),["assets/index-088c814d.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/index-5fe8c70d.js","assets/three.module-71ec604c.js","assets/ClipLoader-636500cc.js","assets/index-e8341c99.js","assets/index-2483918c.js","assets/index-26b2fdf0.js","assets/Stack-321428a6.js","assets/createSvgIcon-a467e822.js","assets/TextareaAutosize-5c2f15c2.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Ne=r.lazy(()=>u(()=>import("./index-62b56f7e.js"),["assets/index-62b56f7e.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/index-2483918c.js","assets/index-26b2fdf0.js","assets/Stack-321428a6.js","assets/index-e8341c99.js","assets/createSvgIcon-a467e822.js","assets/TextareaAutosize-5c2f15c2.js","assets/ClipLoader-636500cc.js","assets/index-8c5340b2.js","assets/VisibilityOn-5c3dc2ee.js","assets/SourcesTableIcon-993fcc6a.js","assets/VolumeIcon-1d674bd5.js","assets/NodeCircleIcon-70e62a84.js","assets/SoundIcon-e947d51f.js","assets/CheckIcon-d3631751.js","assets/DeleteNodeIcon-1d0892d7.js","assets/EditNodeIcon-a2c7eb11.js","assets/SearchIcon-221e359c.js","assets/SucessFeedBackIcon-4d76d318.js","assets/three.module-71ec604c.js","assets/isPlainObject-28afbf05.js","assets/Typography-cc1edd3f.js","assets/Tabs-1b220485.js","assets/index-5fe8c70d.js"]).then(({BlueprintModal:e})=>({default:e}))),Oe=r.lazy(()=>u(()=>import("./index-4ff2e48c.js"),["assets/index-4ff2e48c.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-4d76d318.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Be=r.lazy(()=>u(()=>import("./index-1f65d565.js"),["assets/index-1f65d565.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/index-e8341c99.js","assets/index-2483918c.js","assets/index-26b2fdf0.js","assets/Stack-321428a6.js","assets/createSvgIcon-a467e822.js","assets/TextareaAutosize-5c2f15c2.js"]).then(({CreateBountyModal:e})=>({default:e}))),Ce=r.lazy(()=>u(()=>import("./index-abea8d7f.js").then(e=>e.ca),["assets/index-abea8d7f.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),$e=r.lazy(()=>u(()=>import("./index-3a572951.js").then(e=>e.i),["assets/index-3a572951.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/SoundIcon-e947d51f.js","assets/index-e8341c99.js"]).then(({BriefDescription:e})=>({default:e}))),De=()=>t.jsxs(t.Fragment,{children:[t.jsx(ze,{}),t.jsx(Ae,{}),t.jsx(Te,{}),t.jsx(Ie,{}),t.jsx(Le,{}),t.jsx(Se,{}),t.jsx(Pe,{}),t.jsx(Me,{}),t.jsx(Ne,{}),t.jsx(Re,{}),t.jsx(Oe,{}),t.jsx(Be,{}),t.jsx(Ce,{}),t.jsx($e,{})]}),Ve=()=>{const[e,n]=r.useState(null),{runningProjectMessages:i}=A(g=>g),c=g=>{n(g.currentTarget)},a=()=>{n(null)},p=!!e,_=p?"simple-popover":void 0;return i.length?t.jsxs(qe,{ml:8,children:[t.jsx(Qe,{onClick:c,children:t.jsxs(xe,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(re,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:i.length})})]})}),t.jsxs(Ge,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:_,onClose:a,open:p,children:[t.jsx(ee,{onClick:a,children:t.jsx(se,{})}),t.jsx(Fe,{p:16,children:i.map(g=>t.jsx("p",{className:"item",children:g},g))})]})]}):null},qe=l(h).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Fe=l(h)`
  max-height: 50vh;
  max-width: 30vw;
  background: transparent;
  padding-top: 1px !important;
  padding-bottom: 0 !important;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 9px;
    margin: 4px;
    overflow-y: hidden;
  }

  .item {
    padding: 8px 0;
    word-break: break-word;
    font-family: 'Barlow';
    font-size: 12px;
    font-weight: 400;
    text-align: right;
    color: ${s.GRAY6};
  }

  &:hover {
    background: ${s.MESSAGE_BG_HOVER};
  }
`,Qe=l(h).attrs({align:"center",direction:"row"})`
  display: flex;
  cursor: pointer;
  height: 2.5rem;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${s.white};
  background: ${s.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${s.BUTTON1_PRESS};
  }

  &:active {
    background: ${s.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 16px;
  }

  .budgetUnit {
    color: ${s.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,ee=l.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  display: none;
  z-index: 1;
  width: 2em;
  height: 2em;
  background-color: ${s.BUTTON1};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${s.white} !important;
    width: 1.5em;
    height: 1.5em;
  }
`,Ge=l(me)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${s.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${ee} {
        display: flex;
      }
    }
  }
`;l(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})``;l(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-end"})``;l(h).attrs({align:"center",direction:"row",grow:1})`
  justify-content: between;
`;l(h).attrs({align:"center",direction:"row",justify:"flex-start"})`
  color: ${s.white};
  background: ${s.BG1};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 8px;
  border-radius: 200px;
  cursor: pointer;

  &:hover {
    background: ${s.BUTTON1_PRESS};
  }

  &:active {
    background: ${s.BUTTON1};
  }

  .icon {
    margin-right: 8px;
    font-size: 16px;
  }

  .text {
  }
`;l(h).attrs({align:"center",direction:"row"})`
  display: flex;
  height: 2.5rem;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${s.white};
  background: ${s.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${s.BUTTON1_PRESS};
  }

  &:active {
    background: ${s.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  .budgetUnit {
    color: ${s.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;l(h).attrs({align:"center",direction:"row"})`
  margin-right: 10px;
  display: flex;
  height: 28px;
  padding: 0.75rem 0.6375rem 0.75rem 0.3187rem;
  align-items: center;
  gap: 4px;
  color: ${s.white};
  background: ${s.modalShield};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:active {
    background: ${s.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;const Ue=()=>{const e=X(g=>g.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:i}=Z(),{abortFetchData:c,resetGraph:a}=A(g=>g),p=ae();if(!e)return null;const _=()=>{i(null),c(),a(),n(),p("/")};return t.jsxs(We,{children:[t.jsxs(He,{onClick:_,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(T,{className:"title",color:"white",children:e.title})}),t.jsx(T,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(Ve,{})]})},We=l(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,He=l.div`
  ${ie.smallOnly`
    display: none;
  `}

  width: 367px;

  .title {
    color: var(--Primary-Text, #fff);
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 72.727% */
    letter-spacing: 0.22px;
    cursor: pointer;
  }

  .subtitle {
    color: ${s.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
    margin-left: 8px;
    cursor: pointer;
  }
`,Ye=620,Je=()=>{const e=`(max-width: ${Ye}px)`,[n,i]=r.useState(()=>window.matchMedia(e).matches);return r.useEffect(()=>{const c=window.matchMedia(e);i(c.matches);const a=()=>{i(c.matches)};return window.addEventListener("resize",a),()=>c.removeEventListener("change",a)},[e]),n},Ke=()=>{const[e,n]=r.useState(!0),i=Je();r.useEffect(()=>{n(!0)},[i]);const c=()=>{n(!1)};return i&&e?t.jsxs(Xe,{align:"center",direction:"column",justify:"center",onClick:c,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(h,{align:"center",direction:"column",justify:"center",children:[t.jsx(E,{children:"Second Brain is currently"}),t.jsx(E,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(E,{children:"Mobile support coming soon."})]}),t.jsx(le,{color:"secondary",onClick:c,variant:"contained",children:"Got It"})]}):null},Xe=l(h)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,E=l(T)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,Ze=l(ce)`
  .Toastify__toast {
    background-color: #49c998ff;
    width: fit-content;
    min-height: 100%;
    border-radius: 12px;
    padding: 6px;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${s.white};
    font-weight: 500;
    font-family: 'Barlow';
  }
  .Toastify__close-button {
    color: ${s.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${s.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${s.primaryGreen};
  }
  &.Toastify__toast-container--top-right {
    width: fit-content;
    height: auto;
    top: 60px;
    right: 48px;
  }
`,et=l(h)`
  height: 100%;
  width: 100%;
  background-color: ${s.black};
`,tt=l(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${s.white};
  font-size: 12px;
  opacity: 0.5;
`,ot=r.lazy(()=>u(()=>import("./index-48b6e695.js"),["assets/index-48b6e695.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-993fcc6a.js"]).then(({MainToolbar:e})=>({default:e}))),nt=r.lazy(()=>u(()=>import("./index-9caddac4.js"),["assets/index-9caddac4.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/index-8c5340b2.js","assets/VisibilityOn-5c3dc2ee.js","assets/SourcesTableIcon-993fcc6a.js","assets/VolumeIcon-1d674bd5.js","assets/NodeCircleIcon-70e62a84.js","assets/SoundIcon-e947d51f.js","assets/index-e8341c99.js","assets/CheckIcon-d3631751.js","assets/DeleteNodeIcon-1d0892d7.js","assets/EditNodeIcon-a2c7eb11.js","assets/SearchIcon-221e359c.js","assets/SucessFeedBackIcon-4d76d318.js","assets/three.module-71ec604c.js","assets/TextareaAutosize-5c2f15c2.js","assets/index-26b2fdf0.js","assets/ClipLoader-636500cc.js"]).then(({Universe:e})=>({default:e}))),rt=r.lazy(()=>u(()=>import("./index-d1dca85b.js").then(e=>e.i),["assets/index-d1dca85b.js","assets/index-abea8d7f.js","assets/index-b4d03b7b.css","assets/VolumeIcon-1d674bd5.js","assets/index-e8341c99.js","assets/SearchIcon-221e359c.js","assets/ClipLoader-636500cc.js","assets/Skeleton-d2098c52.js","assets/Stack-321428a6.js","assets/index-3a572951.js","assets/SoundIcon-e947d51f.js","assets/index-26b2fdf0.js","assets/CheckIcon-d3631751.js","assets/isPlainObject-28afbf05.js","assets/Typography-cc1edd3f.js","assets/createSvgIcon-a467e822.js"]).then(({SideBar:e})=>({default:e}))),at=()=>{const[e]=de(),n=e.get("q"),{setBudget:i,setNodeCount:c}=ue(o=>o),a=r.useRef(null),p=r.useRef(null),{setSidebarOpen:_,currentSearch:g,setCurrentSearch:z,setRelevanceSelected:S,setTranscriptOpen:I,universeQuestionIsOpen:te,setUniverseQuestionIsOpen:L}=X(o=>o),P=ve(o=>o.setTeachMeAnswer),{fetchData:R,setCategoryFilter:M,setAbortRequests:N,addNewNode:O,splashDataLoading:k,runningProjectId:b,setRunningProjectMessages:B,isFetching:C,resetData:$}=A(o=>o),{setAiSummaryAnswer:f,getKeyExist:D,aiRefId:v}=Z(o=>o),w=ye(),[V,y]=he(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),d=_e(),q=ge({mode:"onChange"}),{setValue:F}=q;r.useEffect(()=>{F("search",n??""),I(!1),w(null),S(!1),z(n??""),P(""),M(null)},[n,M,z,S,w,P,I,F]),r.useEffect(()=>{const o=async()=>{await R(i,N),_(!0),g?await fe(i):w(null)};$(),o()},[g,R,i,N,_,w,$]);const Q=r.useCallback(()=>{c("INCREMENT")},[c]),G=r.useCallback(o=>{C||(a.current||(a.current={nodes:[],edges:[]}),o.edges&&a.current.edges.push(...o.edges),o.nodes&&a.current.nodes.push(...o.nodes),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{if(a.current){const{nodes:m,edges:x}=a.current,j={nodes:m,edges:x};a.current={nodes:[],edges:[]},O(j)}},3e3))},[O,C]),U=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{answer:o.answer,answerLoading:!1})},[f]),W=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{audio_en:o.audio_EN})},[f]),H=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{questions:o.relevant_questions.map(m=>m.question),questionsLoading:!1})},[f]),Y=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{sources:o.sources.map(m=>m.ref_id),sourcesLoading:!1})},[f]),J=r.useCallback(o=>{o.question&&D(v)&&f(v,{answerLoading:!1,entities:o.entities})},[f,D,v]);return r.useEffect(()=>(d&&(d.connect(),d.on("connect_error",o=>{console.error("Socket connection error:",o)}),d.on("newnode",Q),y&&d.on("extractedentitieshook",J),y&&d.on("askquestionhook",U),y&&d.on("relevantquestionshook",H),y&&d.on("answersourceshook",Y),V&&d.on("new_node_created",G),y&&d.on("answeraudiohook",W)),()=>{d&&d.off()}),[d,Q,G,V,U,y,H,Y,J,W]),r.useEffect(()=>{if(!b)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const x={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:b})};o.send(JSON.stringify(x))},o.onmessage=m=>{var K;const x=JSON.parse(m.data);if(console.log(x),x.type==="ping")return;const j=(K=x==null?void 0:x.message)==null?void 0:K.message;j&&B(j)},o.onerror=m=>{console.error("WebSocket error:",m)}},[b,B]),r.useEffect(()=>{if(b)try{d==null||d.emit("update_project_id",{id:b})}catch(o){console.error(o)}},[b,d]),r.useEffect(()=>{k||y&&L()},[L,k,y]),t.jsxs(t.Fragment,{children:[t.jsx(je,{}),t.jsx(Ke,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:k?null:t.jsxs(et,{direction:"row",children:[t.jsxs(pe,{...q,children:[t.jsx(ot,{}),!te&&t.jsx(rt,{}),t.jsx(nt,{}),t.jsx(be,{}),t.jsx(Ue,{}),t.jsxs(tt,{children:["v",Ee]}),t.jsx(we,{})]}),t.jsx(De,{}),t.jsx(Ze,{})]})})]})};export{at as App};
