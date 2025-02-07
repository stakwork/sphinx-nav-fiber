import{W as te,c as oe,r,_ as u,j as t,s as l,a as s,F as h,u as T,I as ne,C as re,m as se,b as J,d as K,e as ie,T as E,B as ae,Q as le,f as ce,g as de,h as ue,i as he,k as ge,l as pe}from"./index-5e07d665.js";import{P as fe,T as me,u as xe,a as ye,O as _e,A as be}from"./index-e3d912f0.js";const we=te`
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
`,je={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},ke=oe(e=>({...je,setAskedQuestion:n=>e(i=>({askedQuestions:[...i.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(i=>({askedQuestionsAnswers:[...i.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var i,c,a,p;(i=n==null?void 0:n.instagraph)!=null&&i.edges&&((c=n==null?void 0:n.instagraph)!=null&&c.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(a=n==null?void 0:n.instagraph)==null?void 0:a.edges,nodes:(p=n==null?void 0:n.instagraph)==null?void 0:p.nodes}})}})),ve="0.1.106",Ee=r.lazy(()=>u(()=>import("./index-b900b1a9.js"),["assets/index-b900b1a9.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/index-e3d912f0.js","assets/ClipLoader-c52673a4.js","assets/Tabs-5e4c251a.js","assets/createSvgIcon-31174c25.js"]).then(({SettingsModal:e})=>({default:e}))),Te=r.lazy(()=>u(()=>import("./index-dd65afcd.js"),["assets/index-dd65afcd.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/CheckIcon-324862c6.js","assets/index-717b1eb9.js","assets/ClipLoader-c52673a4.js"]).then(({AddContentModal:e})=>({default:e}))),Ae=r.lazy(()=>u(()=>import("./index-d54ca73b.js"),["assets/index-d54ca73b.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/index-e3d912f0.js","assets/CheckIcon-324862c6.js","assets/index-717b1eb9.js","assets/ClipLoader-c52673a4.js","assets/index-6c8b601e.js","assets/three.module-c645d2a3.js","assets/index-61ef8228.js","assets/index-db2bb1f3.js","assets/Stack-ea647b8d.js","assets/createSvgIcon-31174c25.js","assets/TextareaAutosize-8ae9b1fa.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),ze=r.lazy(()=>u(()=>import("./index-4e494005.js"),["assets/index-4e494005.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/VisibilityOn-c05630d5.js","assets/SearchIcon-151ac448.js","assets/constants-f9e118eb.js","assets/index-e3d912f0.js","assets/ClipLoader-c52673a4.js","assets/index-61ef8228.js","assets/index-db2bb1f3.js","assets/Stack-ea647b8d.js","assets/createSvgIcon-31174c25.js","assets/TextareaAutosize-8ae9b1fa.js","assets/index-67eae2ab.js","assets/NodeCircleIcon-90e8e6f6.js","assets/CheckIcon-324862c6.js","assets/Typography-12e2eafd.js","assets/Tabs-5e4c251a.js"]).then(({SourcesTableModal:e})=>({default:e}))),Se=r.lazy(()=>u(()=>import("./index-1547f641.js"),["assets/index-1547f641.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/index-e3d912f0.js","assets/EditNodeIcon-4dcfe801.js","assets/index-db2bb1f3.js","assets/Skeleton-a4fb5c98.js","assets/ClipLoader-c52673a4.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Ie=r.lazy(()=>u(()=>import("./index-f2aa05b8.js"),["assets/index-f2aa05b8.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/index-e3d912f0.js","assets/DeleteNodeIcon-3183cabd.js","assets/Skeleton-a4fb5c98.js","assets/ClipLoader-c52673a4.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Le=r.lazy(()=>u(()=>import("./index-19c81d69.js"),["assets/index-19c81d69.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/index-e3d912f0.js","assets/NodeCircleIcon-90e8e6f6.js","assets/index-61ef8228.js","assets/index-db2bb1f3.js","assets/Stack-ea647b8d.js","assets/createSvgIcon-31174c25.js","assets/TextareaAutosize-8ae9b1fa.js","assets/constants-f9e118eb.js","assets/ClipLoader-c52673a4.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Pe=r.lazy(()=>u(()=>import("./index-847aa324.js"),["assets/index-847aa324.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/index-e3d912f0.js","assets/index-67eae2ab.js","assets/constants-f9e118eb.js","assets/NodeCircleIcon-90e8e6f6.js","assets/index-61ef8228.js","assets/index-db2bb1f3.js","assets/Stack-ea647b8d.js","assets/createSvgIcon-31174c25.js","assets/TextareaAutosize-8ae9b1fa.js","assets/ClipLoader-c52673a4.js"]).then(({MergeNodeModal:e})=>({default:e}))),Re=r.lazy(()=>u(()=>import("./index-9cb77539.js"),["assets/index-9cb77539.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/index-6c8b601e.js","assets/three.module-c645d2a3.js","assets/ClipLoader-c52673a4.js","assets/index-e3d912f0.js","assets/index-61ef8228.js","assets/index-db2bb1f3.js","assets/Stack-ea647b8d.js","assets/createSvgIcon-31174c25.js","assets/TextareaAutosize-8ae9b1fa.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Me=r.lazy(()=>u(()=>import("./index-cf66e86b.js"),["assets/index-cf66e86b.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/index-61ef8228.js","assets/index-db2bb1f3.js","assets/Stack-ea647b8d.js","assets/index-e3d912f0.js","assets/createSvgIcon-31174c25.js","assets/TextareaAutosize-8ae9b1fa.js","assets/ClipLoader-c52673a4.js","assets/index-fbb7d945.js","assets/VisibilityOn-c05630d5.js","assets/SourcesTableIcon-b5672ffc.js","assets/VolumeIcon-1c8556c7.js","assets/NodeCircleIcon-90e8e6f6.js","assets/SoundIcon-7a278b5a.js","assets/CheckIcon-324862c6.js","assets/DeleteNodeIcon-3183cabd.js","assets/EditNodeIcon-4dcfe801.js","assets/SearchIcon-151ac448.js","assets/SucessFeedBackIcon-8bc426ba.js","assets/three.module-c645d2a3.js","assets/isPlainObject-4681a34b.js","assets/Typography-12e2eafd.js","assets/Tabs-5e4c251a.js","assets/index-6c8b601e.js"]).then(({BlueprintModal:e})=>({default:e}))),Ne=r.lazy(()=>u(()=>import("./index-18125956.js"),["assets/index-18125956.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-8bc426ba.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Be=r.lazy(()=>u(()=>import("./index-c31567ad.js"),["assets/index-c31567ad.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/index-e3d912f0.js","assets/index-61ef8228.js","assets/index-db2bb1f3.js","assets/Stack-ea647b8d.js","assets/createSvgIcon-31174c25.js","assets/TextareaAutosize-8ae9b1fa.js"]).then(({CreateBountyModal:e})=>({default:e}))),Oe=r.lazy(()=>u(()=>import("./index-5e07d665.js").then(e=>e.cc),["assets/index-5e07d665.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Ce=r.lazy(()=>u(()=>import("./index-4cdced0e.js").then(e=>e.i),["assets/index-4cdced0e.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/SoundIcon-7a278b5a.js","assets/index-e3d912f0.js"]).then(({BriefDescription:e})=>({default:e}))),$e=()=>t.jsxs(t.Fragment,{children:[t.jsx(Ae,{}),t.jsx(Te,{}),t.jsx(Ee,{}),t.jsx(Se,{}),t.jsx(Ie,{}),t.jsx(ze,{}),t.jsx(Le,{}),t.jsx(Re,{}),t.jsx(Me,{}),t.jsx(Pe,{}),t.jsx(Ne,{}),t.jsx(Be,{}),t.jsx(Oe,{}),t.jsx(Ce,{})]}),De=()=>{const[e,n]=r.useState(null),{runningProjectMessages:i}=T(g=>g),c=g=>{n(g.currentTarget)},a=()=>{n(null)},p=!!e,y=p?"simple-popover":void 0;return i.length?t.jsxs(Ve,{ml:8,children:[t.jsx(Fe,{onClick:c,children:t.jsxs(me,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ne,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:i.length})})]})}),t.jsxs(Qe,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:y,onClose:a,open:p,children:[t.jsx(X,{onClick:a,children:t.jsx(re,{})}),t.jsx(qe,{p:16,children:i.map(g=>t.jsx("p",{className:"item",children:g},g))})]})]}):null},Ve=l(h).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,qe=l(h)`
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
`,Fe=l(h).attrs({align:"center",direction:"row"})`
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
`,X=l.div`
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
`,Qe=l(fe)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${s.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${X} {
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
`;const Ge=()=>{const e=J(g=>g.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:i}=K(),{abortFetchData:c,resetGraph:a}=T(g=>g),p=ie();if(!e)return null;const y=()=>{i(null),c(),a(),n(),p("/")};return t.jsxs(Ue,{children:[t.jsxs(We,{onClick:y,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(E,{className:"title",color:"white",children:e.title})}),t.jsx(E,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(De,{})]})},Ue=l(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,We=l.div`
  ${se.smallOnly`
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
`,He=620,Ye=()=>{const e=`(max-width: ${He}px)`,[n,i]=r.useState(()=>window.matchMedia(e).matches);return r.useEffect(()=>{const c=window.matchMedia(e);i(c.matches);const a=()=>{i(c.matches)};return window.addEventListener("resize",a),()=>c.removeEventListener("change",a)},[e]),n},Je=()=>{const[e,n]=r.useState(!0),i=Ye();r.useEffect(()=>{n(!0)},[i]);const c=()=>{n(!1)};return i&&e?t.jsxs(Ke,{align:"center",direction:"column",justify:"center",onClick:c,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(h,{align:"center",direction:"column",justify:"center",children:[t.jsx(v,{children:"Second Brain is currently"}),t.jsx(v,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(v,{children:"Mobile support coming soon."})]}),t.jsx(ae,{color:"secondary",onClick:c,variant:"contained",children:"Got It"})]}):null},Ke=l(h)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,v=l(E)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,Xe=l(le)`
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
`,Ze=l(h)`
  height: 100%;
  width: 100%;
  background-color: ${s.black};
`,et=l(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${s.white};
  font-size: 12px;
  opacity: 0.5;
`,tt=r.lazy(()=>u(()=>import("./index-0ac212f1.js"),["assets/index-0ac212f1.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-b5672ffc.js"]).then(({MainToolbar:e})=>({default:e}))),ot=r.lazy(()=>u(()=>import("./index-b8594e25.js"),["assets/index-b8594e25.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/index-fbb7d945.js","assets/VisibilityOn-c05630d5.js","assets/SourcesTableIcon-b5672ffc.js","assets/VolumeIcon-1c8556c7.js","assets/NodeCircleIcon-90e8e6f6.js","assets/SoundIcon-7a278b5a.js","assets/index-e3d912f0.js","assets/CheckIcon-324862c6.js","assets/DeleteNodeIcon-3183cabd.js","assets/EditNodeIcon-4dcfe801.js","assets/SearchIcon-151ac448.js","assets/SucessFeedBackIcon-8bc426ba.js","assets/three.module-c645d2a3.js","assets/TextareaAutosize-8ae9b1fa.js","assets/index-db2bb1f3.js","assets/index-aedbdb40.js","assets/ClipLoader-c52673a4.js"]).then(({Universe:e})=>({default:e}))),nt=r.lazy(()=>u(()=>import("./index-e567b798.js").then(e=>e.i),["assets/index-e567b798.js","assets/index-5e07d665.js","assets/index-b4d03b7b.css","assets/VolumeIcon-1c8556c7.js","assets/index-e3d912f0.js","assets/SearchIcon-151ac448.js","assets/ClipLoader-c52673a4.js","assets/Skeleton-a4fb5c98.js","assets/Stack-ea647b8d.js","assets/index-4cdced0e.js","assets/SoundIcon-7a278b5a.js","assets/index-db2bb1f3.js","assets/CheckIcon-324862c6.js","assets/isPlainObject-4681a34b.js","assets/Typography-12e2eafd.js","assets/createSvgIcon-31174c25.js","assets/index-aedbdb40.js"]).then(({SideBar:e})=>({default:e}))),it=()=>{const[e]=ce(),n=e.get("q"),{setBudget:i,setNodeCount:c}=de(o=>o),a=r.useRef(null),p=r.useRef(null),{setSidebarOpen:y,currentSearch:g,setCurrentSearch:A,setRelevanceSelected:z,setTranscriptOpen:S,universeQuestionIsOpen:Z}=J(o=>o),I=ke(o=>o.setTeachMeAnswer),{fetchData:L,setCategoryFilter:P,setAbortRequests:R,addNewNode:M,splashDataLoading:ee,runningProjectId:_,setRunningProjectMessages:N,isFetching:B,resetData:O}=T(o=>o),{setAiSummaryAnswer:f,getKeyExist:C,aiRefId:k}=K(o=>o),w=xe(),[$,b]=ue(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),d=ye(),D=he({mode:"onChange"}),{setValue:V}=D;r.useEffect(()=>{V("search",n??""),S(!1),w(null),z(!1),A(n??""),I(""),P(null)},[n,P,A,z,w,I,S,V]),r.useEffect(()=>{const o=async()=>{await L(i,R),y(!0),g?await pe(i):w(null)};O(),o()},[g,L,i,R,y,w,O]);const q=r.useCallback(()=>{c("INCREMENT")},[c]),F=r.useCallback(o=>{B||(a.current||(a.current={nodes:[],edges:[]}),o.edges&&a.current.edges.push(...o.edges),o.nodes&&a.current.nodes.push(...o.nodes),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{if(a.current){const{nodes:m,edges:x}=a.current,j={nodes:m,edges:x};a.current={nodes:[],edges:[]},M(j)}},3e3))},[M,B]),Q=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{answer:o.answer,answerLoading:!1})},[f]),G=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{audio_en:o.audio_EN})},[f]),U=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{questions:o.relevant_questions.map(m=>m.question),questionsLoading:!1})},[f]),W=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{sources:o.sources.map(m=>m.ref_id),sourcesLoading:!1})},[f]),H=r.useCallback(o=>{o.question&&C(k)&&f(k,{answerLoading:!1,entities:o.entities})},[f,C,k]);return r.useEffect(()=>(d&&(d.connect(),d.on("connect_error",o=>{console.error("Socket connection error:",o)}),d.on("newnode",q),b&&d.on("extractedentitieshook",H),b&&d.on("askquestionhook",Q),b&&d.on("relevantquestionshook",U),b&&d.on("answersourceshook",W),$&&d.on("new_node_created",F),b&&d.on("answeraudiohook",G)),()=>{d&&d.off()}),[d,q,F,$,Q,b,U,W,H,G]),r.useEffect(()=>{if(!_)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const x={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:_})};o.send(JSON.stringify(x))},o.onmessage=m=>{var Y;const x=JSON.parse(m.data);if(console.log(x),x.type==="ping")return;const j=(Y=x==null?void 0:x.message)==null?void 0:Y.message;j&&N(j)},o.onerror=m=>{console.error("WebSocket error:",m)}},[_,N]),r.useEffect(()=>{if(_)try{d==null||d.emit("update_project_id",{id:_})}catch(o){console.error(o)}},[_,d]),t.jsxs(t.Fragment,{children:[t.jsx(we,{}),t.jsx(Je,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:ee?null:t.jsxs(Ze,{direction:"row",children:[t.jsxs(ge,{...D,children:[t.jsx(tt,{}),!Z&&t.jsx(nt,{}),t.jsx(ot,{}),t.jsx(_e,{}),t.jsx(Ge,{}),t.jsxs(et,{children:["v",ve]}),t.jsx(be,{})]}),t.jsx($e,{}),t.jsx(Xe,{})]})})]})};export{it as App};
