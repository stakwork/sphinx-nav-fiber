import{W as se,u as ee,r as o,a as te,b as C,c as S,d as Z,f as re,S as ae,e as ie,_ as i,j as t,s as p,g as d,F as y,I as ce,C as le,m as de,h as oe,i as ue,T as M,B as he,Q as fe,k as pe,l as ge,n as me}from"./index-116e4c30.js";import{P as _e,T as xe,O as ye,A as be}from"./index-f1f63b64.js";const we=se`
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
`,Ee=()=>{const[e]=ee(),s=e.get("node"),a=o.useRef(!0),{setBudget:r}=te(f=>f),{setSidebarOpen:u,currentSearch:h}=C(f=>f),{fetchData:g,setAbortRequests:c,resetData:w,addNewNode:v,finishLoading:k}=S(f=>f);o.useEffect(()=>{if(a.current){const f=async()=>{h||w(),await g(r,c),u(!0),a.current=!1,h&&await Z(r)},T=async()=>{const A=await re(s||"",0,5);k(),a.current=!1,A&&v({nodes:A.nodes,edges:A.edges})};if(s){T();return}f()}},[s,h,g,r,c,u,w,a,k,v]),o.useEffect(()=>{if(!a.current){const f=async()=>{await g(r,c),u(!0),h&&await Z(r)};w(),f()}},[h,g,r,c,u,w,a])},je=()=>{const e=o.useContext(ae);return e==null?void 0:e.socket},ve={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,teachMeAnswer:null},ke=ie(e=>({...ve,setAskedQuestion:s=>e(a=>({askedQuestions:[...a.askedQuestions||[],s],hasQuestionInProgress:!0})),setAskedQuestionAnswer:s=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],s],hasQuestionInProgress:!1})),setHasQuestionInProgress:s=>e({hasQuestionInProgress:s}),setHasTeachingInProgress:s=>e({hasTeachingInProgress:s}),setTeachMeAnswer:s=>e({hasTeachingInProgress:!1,teachMeAnswer:s})})),Ae="0.1.106",Te=o.lazy(()=>i(()=>import("./index-f6024576.js"),["assets/index-f6024576.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-f1f63b64.js","assets/ClipLoader-8c75b7a7.js","assets/Tabs-ca07e2f9.js","assets/createSvgIcon-6aacb818.js"]).then(({SettingsModal:e})=>({default:e}))),ze=o.lazy(()=>i(()=>import("./index-b444b467.js").then(e=>e.i),["assets/index-b444b467.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-f1f63b64.js","assets/string-a277709d.js"]).then(({ClaimsModal:e})=>({default:e}))),Le=o.lazy(()=>i(()=>import("./index-b0a887b5.js"),["assets/index-b0a887b5.js","assets/index-116e4c30.js","assets/index-3165de01.css"]).then(({TransactionHistoryModal:e})=>({default:e}))),Se=o.lazy(()=>i(()=>import("./index-5d0daca4.js"),["assets/index-5d0daca4.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/CheckIcon-67026bba.js","assets/index-717b1eb9.js","assets/ClipLoader-8c75b7a7.js"]).then(({AddContentModal:e})=>({default:e}))),Ie=o.lazy(()=>i(()=>import("./index-72dbc692.js"),["assets/index-72dbc692.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-f1f63b64.js","assets/CheckIcon-67026bba.js","assets/index-717b1eb9.js","assets/ClipLoader-8c75b7a7.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/index-1c739837.js","assets/index-5f92bfef.js","assets/SourcesTableIcon-54039684.js","assets/DeleteNodeIcon-d7500c49.js","assets/SoundIcon-a8275b85.js","assets/SucessFeedBackIcon-f9cd5201.js","assets/Stack-e7429d7d.js","assets/clsx-8e74ece5.js","assets/createSvgIcon-6aacb818.js","assets/TextareaAutosize-1cb11cfd.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),Re=o.lazy(()=>i(()=>import("./index-c91a7004.js"),["assets/index-c91a7004.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-5f92bfef.js","assets/SourcesTableIcon-54039684.js","assets/index-f1f63b64.js","assets/CheckIcon-67026bba.js","assets/DeleteNodeIcon-d7500c49.js","assets/SoundIcon-a8275b85.js","assets/SucessFeedBackIcon-f9cd5201.js","assets/TableRow-33e0a390.js","assets/constants-1f76d1a2.js","assets/ClipLoader-8c75b7a7.js","assets/index-1c739837.js","assets/Stack-e7429d7d.js","assets/clsx-8e74ece5.js","assets/createSvgIcon-6aacb818.js","assets/TextareaAutosize-1cb11cfd.js","assets/index-6bab385a.js","assets/Typography-4f8a0aee.js","assets/Tabs-ca07e2f9.js"]).then(({SourcesTableModal:e})=>({default:e}))),Pe=o.lazy(()=>i(()=>import("./index-0268778c.js"),["assets/index-0268778c.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-f1f63b64.js","assets/index-5f92bfef.js","assets/SourcesTableIcon-54039684.js","assets/CheckIcon-67026bba.js","assets/DeleteNodeIcon-d7500c49.js","assets/SoundIcon-a8275b85.js","assets/SucessFeedBackIcon-f9cd5201.js","assets/Skeleton-dc1b6504.js","assets/ClipLoader-8c75b7a7.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Me=o.lazy(()=>i(()=>import("./index-4f52f65b.js"),["assets/index-4f52f65b.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-f1f63b64.js","assets/DeleteNodeIcon-d7500c49.js","assets/Skeleton-dc1b6504.js","assets/ClipLoader-8c75b7a7.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ce=o.lazy(()=>i(()=>import("./index-56027174.js"),["assets/index-56027174.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-f1f63b64.js","assets/index-5f92bfef.js","assets/SourcesTableIcon-54039684.js","assets/CheckIcon-67026bba.js","assets/DeleteNodeIcon-d7500c49.js","assets/SoundIcon-a8275b85.js","assets/SucessFeedBackIcon-f9cd5201.js","assets/index-1c739837.js","assets/Stack-e7429d7d.js","assets/clsx-8e74ece5.js","assets/createSvgIcon-6aacb818.js","assets/TextareaAutosize-1cb11cfd.js","assets/constants-1f76d1a2.js","assets/ClipLoader-8c75b7a7.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Oe=o.lazy(()=>i(()=>import("./index-c9cede17.js"),["assets/index-c9cede17.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-f1f63b64.js","assets/index-6bab385a.js","assets/constants-1f76d1a2.js","assets/index-5f92bfef.js","assets/SourcesTableIcon-54039684.js","assets/CheckIcon-67026bba.js","assets/DeleteNodeIcon-d7500c49.js","assets/SoundIcon-a8275b85.js","assets/SucessFeedBackIcon-f9cd5201.js","assets/index-1c739837.js","assets/Stack-e7429d7d.js","assets/clsx-8e74ece5.js","assets/createSvgIcon-6aacb818.js","assets/TextareaAutosize-1cb11cfd.js","assets/ClipLoader-8c75b7a7.js"]).then(({MergeNodeModal:e})=>({default:e}))),Ne=o.lazy(()=>i(()=>import("./index-866af65b.js"),["assets/index-866af65b.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/ClipLoader-8c75b7a7.js","assets/index-f1f63b64.js","assets/index-1c739837.js","assets/index-5f92bfef.js","assets/SourcesTableIcon-54039684.js","assets/CheckIcon-67026bba.js","assets/DeleteNodeIcon-d7500c49.js","assets/SoundIcon-a8275b85.js","assets/SucessFeedBackIcon-f9cd5201.js","assets/Stack-e7429d7d.js","assets/clsx-8e74ece5.js","assets/createSvgIcon-6aacb818.js","assets/TextareaAutosize-1cb11cfd.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),De=o.lazy(()=>i(()=>import("./index-3158ee39.js"),["assets/index-3158ee39.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-1c739837.js","assets/index-5f92bfef.js","assets/SourcesTableIcon-54039684.js","assets/index-f1f63b64.js","assets/CheckIcon-67026bba.js","assets/DeleteNodeIcon-d7500c49.js","assets/SoundIcon-a8275b85.js","assets/SucessFeedBackIcon-f9cd5201.js","assets/Stack-e7429d7d.js","assets/clsx-8e74ece5.js","assets/createSvgIcon-6aacb818.js","assets/TextareaAutosize-1cb11cfd.js","assets/ClipLoader-8c75b7a7.js","assets/isPlainObject-cd3d6d7d.js","assets/Tabs-ca07e2f9.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/Switch-97f0d3de.js","assets/FormControlLabel-dd429d4e.js","assets/Typography-4f8a0aee.js","assets/index-e88352fe.js"]).then(({BlueprintModal:e})=>({default:e}))),Be=o.lazy(()=>i(()=>import("./index-8725ccad.js"),["assets/index-8725ccad.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/SucessFeedBackIcon-f9cd5201.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Ve=o.lazy(()=>i(()=>import("./index-a38797e9.js"),["assets/index-a38797e9.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-b6a0fc46.js","assets/index-f1f63b64.js","assets/index-1c739837.js","assets/index-5f92bfef.js","assets/SourcesTableIcon-54039684.js","assets/CheckIcon-67026bba.js","assets/DeleteNodeIcon-d7500c49.js","assets/SoundIcon-a8275b85.js","assets/SucessFeedBackIcon-f9cd5201.js","assets/Stack-e7429d7d.js","assets/clsx-8e74ece5.js","assets/createSvgIcon-6aacb818.js","assets/TextareaAutosize-1cb11cfd.js","assets/FormControlLabel-dd429d4e.js","assets/Typography-4f8a0aee.js","assets/Switch-97f0d3de.js","assets/ClipLoader-8c75b7a7.js"]).then(({CreateBountyModal:e})=>({default:e}))),Fe=o.lazy(()=>i(()=>import("./index-116e4c30.js").then(e=>e.ck),["assets/index-116e4c30.js","assets/index-3165de01.css"]).then(({OnboardingModal:e})=>({default:e}))),$e=o.lazy(()=>i(()=>import("./index-c1f5cc1c.js"),["assets/index-c1f5cc1c.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-db5472d8.js","assets/index-f1f63b64.js","assets/SoundIcon-a8275b85.js"]).then(({BriefDescription:e})=>({default:e}))),qe=o.lazy(()=>i(()=>import("./index-4f7410f8.js"),["assets/index-4f7410f8.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-67587868.js","assets/index-f1f63b64.js","assets/index-b6a0fc46.js","assets/index-1c739837.js","assets/index-5f92bfef.js","assets/SourcesTableIcon-54039684.js","assets/CheckIcon-67026bba.js","assets/DeleteNodeIcon-d7500c49.js","assets/SoundIcon-a8275b85.js","assets/SucessFeedBackIcon-f9cd5201.js","assets/Stack-e7429d7d.js","assets/clsx-8e74ece5.js","assets/createSvgIcon-6aacb818.js","assets/TextareaAutosize-1cb11cfd.js","assets/FormControlLabel-dd429d4e.js","assets/Typography-4f8a0aee.js","assets/Switch-97f0d3de.js","assets/ClipLoader-8c75b7a7.js"]).then(({NodeActionModal:e})=>({default:e}))),Qe=()=>t.jsxs(t.Fragment,{children:[t.jsx(Ie,{}),t.jsx(Se,{}),t.jsx(Te,{}),t.jsx(Pe,{}),t.jsx(Me,{}),t.jsx(Re,{}),t.jsx(Ce,{}),t.jsx(Ne,{}),t.jsx(De,{}),t.jsx(Oe,{}),t.jsx(Be,{}),t.jsx(Ve,{}),t.jsx(Fe,{}),t.jsx($e,{}),t.jsx(qe,{}),t.jsx(ze,{}),t.jsx(Le,{})]}),We=()=>{const[e,s]=o.useState(null),{runningProjectMessages:a}=S(c=>c),r=c=>{s(c.currentTarget)},u=()=>{s(null)},h=!!e,g=h?"simple-popover":void 0;return a.length?t.jsxs(Ge,{ml:8,children:[t.jsx(Ke,{onClick:r,children:t.jsxs(xe,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ce,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(He,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:g,onClose:u,open:h,children:[t.jsx(ne,{onClick:u,children:t.jsx(le,{})}),t.jsx(Ue,{p:16,children:a.map(c=>t.jsx("p",{className:"item",children:c},c))})]})]}):null},Ge=p(y).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Ue=p(y)`
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
    color: ${d.GRAY6};
  }

  &:hover {
    background: ${d.MESSAGE_BG_HOVER};
  }
`,Ke=p(y).attrs({align:"center",direction:"row"})`
  display: flex;
  cursor: pointer;
  height: 2.5rem;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${d.white};
  background: ${d.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${d.BUTTON1_PRESS};
  }

  &:active {
    background: ${d.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 16px;
  }

  .budgetUnit {
    color: ${d.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,ne=p.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  display: none;
  z-index: 1;
  width: 2em;
  height: 2em;
  background-color: ${d.BUTTON1};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${d.white} !important;
    width: 1.5em;
    height: 1.5em;
  }
`,He=p(_e)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${d.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${ne} {
        display: flex;
      }
    }
  }
`,Je=()=>{const e=C(c=>c.appMetaData),{resetAiSummaryAnswer:s,setNewLoading:a}=oe(),{abortFetchData:r,resetGraph:u}=S(c=>c),h=ue();if(!e)return null;const g=()=>{a(null),r(),u(),s(),h("/")};return t.jsxs(Ye,{children:[t.jsxs(Xe,{onClick:g,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(M,{className:"title",color:"white",children:e.title})}),t.jsx(M,{className:"subtitle",children:"Second Brain"})]}),t.jsx(We,{})]})},Ye=p(y).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Xe=p.div`
  ${de.smallOnly`
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
    color: ${d.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
    margin-left: 8px;
    cursor: pointer;
  }
`,Ze=620,et=()=>{const e=`(max-width: ${Ze}px)`,[s,a]=o.useState(()=>window.matchMedia(e).matches);return o.useEffect(()=>{const r=window.matchMedia(e);a(r.matches);const u=()=>{a(r.matches)};return window.addEventListener("resize",u),()=>r.removeEventListener("change",u)},[e]),s},tt=()=>{const[e,s]=o.useState(!0),a=et();o.useEffect(()=>{s(!0)},[a]);const r=()=>{s(!1)};return a&&e?t.jsxs(ot,{align:"center",direction:"column",justify:"center",onClick:r,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(y,{align:"center",direction:"column",justify:"center",children:[t.jsx(P,{children:"Second Brain is currently"}),t.jsx(P,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(P,{children:"Mobile support coming soon."})]}),t.jsx(he,{color:"secondary",onClick:r,variant:"contained",children:"Got It"})]}):null},ot=p(y)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,P=p(M)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,nt=p(fe)`
  .Toastify__toast {
    background-color: #49c998ff;
    width: fit-content;
    min-height: 100%;
    border-radius: 12px;
    padding: 6px;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${d.white};
    font-weight: 500;
    font-family: 'Barlow';
  }
  .Toastify__close-button {
    color: ${d.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${d.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${d.primaryGreen};
  }
  &.Toastify__toast-container--top-right {
    width: fit-content;
    height: auto;
    top: 60px;
    right: 48px;
  }
`,st=p(y)`
  height: 100%;
  width: 100%;
  background-color: ${d.black};
`,rt=p(y)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${d.white};
  font-size: 12px;
  opacity: 0.5;
`,at=o.lazy(()=>i(()=>import("./index-8e5cca5c.js"),["assets/index-8e5cca5c.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/SourcesTableIcon-54039684.js","assets/index-f1f63b64.js"]).then(({MainToolbar:e})=>({default:e}))),it=o.lazy(()=>i(()=>import("./index-5bae65f2.js"),["assets/index-5bae65f2.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-e88352fe.js","assets/three.module-9722a9fc.js","assets/isPlainObject-cd3d6d7d.js","assets/index-f1f63b64.js","assets/index-5f92bfef.js","assets/SourcesTableIcon-54039684.js","assets/CheckIcon-67026bba.js","assets/DeleteNodeIcon-d7500c49.js","assets/SoundIcon-a8275b85.js","assets/SucessFeedBackIcon-f9cd5201.js","assets/TextareaAutosize-1cb11cfd.js","assets/index-0abd1882.js","assets/string-a277709d.js","assets/index-db5472d8.js","assets/index-67587868.js","assets/ClipLoader-8c75b7a7.js","assets/index-717b1eb9.js","assets/clsx-8e74ece5.js"]).then(({Universe:e})=>({default:e}))),ct=o.lazy(()=>i(()=>import("./index-e02d5a08.js").then(e=>e.i),["assets/index-e02d5a08.js","assets/index-116e4c30.js","assets/index-3165de01.css","assets/index-5f92bfef.js","assets/SourcesTableIcon-54039684.js","assets/index-f1f63b64.js","assets/CheckIcon-67026bba.js","assets/DeleteNodeIcon-d7500c49.js","assets/SoundIcon-a8275b85.js","assets/SucessFeedBackIcon-f9cd5201.js","assets/ClipLoader-8c75b7a7.js","assets/Skeleton-dc1b6504.js","assets/index-db5472d8.js","assets/index-0abd1882.js","assets/isPlainObject-cd3d6d7d.js","assets/string-a277709d.js","assets/index-c1f5cc1c.js","assets/Stack-e7429d7d.js","assets/clsx-8e74ece5.js","assets/FormControlLabel-dd429d4e.js","assets/Typography-4f8a0aee.js","assets/createSvgIcon-6aacb818.js"]).then(({SideBar:e})=>({default:e}))),ut=()=>{const[e]=ee(),s=e.get("q"),{setNodeCount:a}=te(n=>n),r=o.useRef(null),u=o.useRef(null);Ee();const{setCurrentSearch:h,setRelevanceSelected:g,setTranscriptOpen:c,universeQuestionIsOpen:w,setUniverseQuestionIsOpen:v}=C(n=>n),k=ke(n=>n.setTeachMeAnswer),{setCategoryFilter:f,addNewNode:T,splashDataLoading:A,runningProjectId:E,setRunningProjectMessages:O,isFetching:N}=S(n=>n),{setAiSummaryAnswer:m,getKeyExist:D,aiRefId:I}=oe(n=>n),[R,x,B]=pe(n=>[n.realtimeGraphFeatureFlag,n.chatInterfaceFeatureFlag,n.chatSplashScreenAsDefault]),l=je(),V=ge({mode:"onChange"}),{setValue:F}=V;o.useEffect(()=>{B&&x&&v()},[x,B,v]),o.useEffect(()=>{F("search",s??""),c(!1),g(!1),h(s??""),k(""),f(null)},[s,f,h,g,k,c,F]);const $=o.useCallback(()=>{a("INCREMENT")},[a]),q=o.useCallback(n=>{N||(r.current||(r.current={nodes:[],edges:[]}),n.edges&&r.current.edges.push(...n.edges),n.nodes&&r.current.nodes.push(...n.nodes),u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{if(r.current){const{nodes:b,edges:j}=r.current,z={nodes:b,edges:j};r.current={nodes:[],edges:[]},T(z)}},3e3))},[T,N]),Q=o.useCallback(n=>{console.log(n)},[]),W=o.useCallback(n=>{n.ref_id&&m(n.ref_id,{answer:n.answer,answerLoading:!1})},[m]),G=o.useCallback(n=>{n.ref_id&&m(n.ref_id,{audio_en:n.audio_EN})},[m]),U=o.useCallback(n=>{n.ref_id&&m(n.ref_id,{questions:n.relevant_questions.map(b=>b.question),questionsLoading:!1})},[m]),K=o.useCallback(n=>{n.ref_id&&m(n.ref_id,{sources:n.sources.map(b=>b.ref_id),sourcesLoading:!1})},[m]),H=o.useCallback(n=>{n.question&&D(I)&&m(I,{answerLoading:!1,entities:n.entities})},[m,D,I]);return o.useEffect(()=>(l&&(l.connect(),l.on("connect_error",n=>{console.error("Socket connection error:",n)}),l.on("newnode",$),x&&l.on("extractedentitieshook",H),x&&l.on("askquestionhook",W),x&&l.on("relevantquestionshook",U),x&&l.on("answersourceshook",K),R&&l.on("new_node_created",q),R&&l.on("node_updated",Q),x&&l.on("answeraudiohook",G)),()=>{l&&l.off()}),[l,$,q,R,W,x,U,K,H,G,Q]),o.useEffect(()=>{var z;if(!E)return;const b=((z=window.ENV)==null?void 0:z.STAKWORK_WEBSOCKET_URL)||{}.STAKWORK_WEBSOCKET_URL||"wss://jobs.stakwork.com",j=new WebSocket(`${b}/cable?channel=ProjectLogChannel`);j.onopen=()=>{const _={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:E})};j.send(JSON.stringify(_))},j.onmessage=L=>{var Y;const _=JSON.parse(L.data);if(_.type==="ping")return;const J=_==null?void 0:_.message;if(J.type==="on_step_start"||J.type==="on_step_complete"){const X=(Y=_==null?void 0:_.message)==null?void 0:Y.message;X&&O(X)}},j.onerror=L=>{console.error("WebSocket error:",L)}},[E,O]),o.useEffect(()=>{if(E)try{l==null||l.emit("update_project_id",{id:E})}catch(n){console.error(n)}},[E,l]),t.jsxs(t.Fragment,{children:[t.jsx(we,{}),t.jsx(tt,{}),t.jsx(o.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(st,{direction:"row",children:[t.jsxs(me,{...V,children:[t.jsx(at,{}),!w&&t.jsx(ct,{}),t.jsx(it,{}),t.jsx(ye,{}),t.jsx(Je,{}),t.jsxs(rt,{children:["v",Ae]}),t.jsx(be,{})]}),t.jsx(Qe,{}),t.jsx(nt,{})]})})]})};export{ut as App};
