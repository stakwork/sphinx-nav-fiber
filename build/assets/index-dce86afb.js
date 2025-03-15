import{W as X,u as H,r,a as Y,b as P,c as T,d as W,f as Z,S as ee,e as te,_ as u,j as t,s as h,g as i,F as g,I as oe,C as ne,m as re,h as J,i as se,T as I,B as ie,Q as ae,k as ce,l as le,n as de}from"./index-05f5c6cd.js";import{P as ue,T as he,O as fe,A as ge}from"./index-55570399.js";const pe=X`
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
`,me=()=>{const[e]=H(),n=e.get("node"),a=r.useRef(!0),{setBudget:s}=Y(p=>p),{setSidebarOpen:c,currentSearch:f}=P(p=>p),{fetchData:m,setAbortRequests:l,resetData:w,addNewNode:k,finishLoading:v}=T(p=>p);r.useEffect(()=>{if(a.current){const p=async()=>{f||w(),await m(s,l),c(!0),a.current=!1,f&&await W(s)},A=async()=>{const x=await Z(n||"",0,5);v(),a.current=!1,x&&k({nodes:x.nodes,edges:x.edges})};if(n){A();return}p()}},[n,f,m,s,l,c,w,a,v,k]),r.useEffect(()=>{if(!a.current){const p=async()=>{await m(s,l),c(!0),f&&await W(s)};w(),p()}},[f,m,s,l,c,w,a])},xe=()=>{const e=r.useContext(ee);return e==null?void 0:e.socket},ye={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},_e=te(e=>({...ye,setAskedQuestion:n=>e(a=>({askedQuestions:[...a.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var a,s,c,f;(a=n==null?void 0:n.instagraph)!=null&&a.edges&&((s=n==null?void 0:n.instagraph)!=null&&s.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=n==null?void 0:n.instagraph)==null?void 0:c.edges,nodes:(f=n==null?void 0:n.instagraph)==null?void 0:f.nodes}})}})),be="0.1.106",we=r.lazy(()=>u(()=>import("./index-1990b176.js"),["assets/index-1990b176.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-55570399.js","assets/ClipLoader-8967250d.js","assets/Tabs-53fa11a5.js","assets/createSvgIcon-7c3887e5.js"]).then(({SettingsModal:e})=>({default:e}))),je=r.lazy(()=>u(()=>import("./index-805929d8.js"),["assets/index-805929d8.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/CheckIcon-c201524d.js","assets/index-717b1eb9.js","assets/ClipLoader-8967250d.js"]).then(({AddContentModal:e})=>({default:e}))),ke=r.lazy(()=>u(()=>import("./index-fb25bf16.js"),["assets/index-fb25bf16.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-55570399.js","assets/CheckIcon-c201524d.js","assets/index-717b1eb9.js","assets/ClipLoader-8967250d.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/index-26b9fa35.js","assets/index-64e456ae.js","assets/SourcesTableIcon-f39c4fa8.js","assets/DeleteNodeIcon-953bb561.js","assets/SoundIcon-170f2cd8.js","assets/SucessFeedBackIcon-9888ff7e.js","assets/Stack-826017fe.js","assets/clsx-b650a2af.js","assets/createSvgIcon-7c3887e5.js","assets/TextareaAutosize-de3cbae0.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),ve=r.lazy(()=>u(()=>import("./index-d4fcd471.js"),["assets/index-d4fcd471.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-64e456ae.js","assets/SourcesTableIcon-f39c4fa8.js","assets/index-55570399.js","assets/CheckIcon-c201524d.js","assets/DeleteNodeIcon-953bb561.js","assets/SoundIcon-170f2cd8.js","assets/SucessFeedBackIcon-9888ff7e.js","assets/TableRow-f4df4ae0.js","assets/constants-ed79793b.js","assets/ClipLoader-8967250d.js","assets/index-26b9fa35.js","assets/Stack-826017fe.js","assets/clsx-b650a2af.js","assets/createSvgIcon-7c3887e5.js","assets/TextareaAutosize-de3cbae0.js","assets/index-51e2c2dc.js","assets/Typography-d425ba4c.js","assets/Tabs-53fa11a5.js"]).then(({SourcesTableModal:e})=>({default:e}))),Ee=r.lazy(()=>u(()=>import("./index-a4dbccfb.js"),["assets/index-a4dbccfb.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-55570399.js","assets/index-64e456ae.js","assets/SourcesTableIcon-f39c4fa8.js","assets/CheckIcon-c201524d.js","assets/DeleteNodeIcon-953bb561.js","assets/SoundIcon-170f2cd8.js","assets/SucessFeedBackIcon-9888ff7e.js","assets/Skeleton-ef7d4c61.js","assets/ClipLoader-8967250d.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Te=r.lazy(()=>u(()=>import("./index-a7334a46.js"),["assets/index-a7334a46.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-55570399.js","assets/DeleteNodeIcon-953bb561.js","assets/Skeleton-ef7d4c61.js","assets/ClipLoader-8967250d.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ae=r.lazy(()=>u(()=>import("./index-b4134546.js"),["assets/index-b4134546.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-55570399.js","assets/index-64e456ae.js","assets/SourcesTableIcon-f39c4fa8.js","assets/CheckIcon-c201524d.js","assets/DeleteNodeIcon-953bb561.js","assets/SoundIcon-170f2cd8.js","assets/SucessFeedBackIcon-9888ff7e.js","assets/index-26b9fa35.js","assets/Stack-826017fe.js","assets/clsx-b650a2af.js","assets/createSvgIcon-7c3887e5.js","assets/TextareaAutosize-de3cbae0.js","assets/constants-ed79793b.js","assets/ClipLoader-8967250d.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),ze=r.lazy(()=>u(()=>import("./index-03c97f1f.js"),["assets/index-03c97f1f.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-55570399.js","assets/index-51e2c2dc.js","assets/constants-ed79793b.js","assets/index-64e456ae.js","assets/SourcesTableIcon-f39c4fa8.js","assets/CheckIcon-c201524d.js","assets/DeleteNodeIcon-953bb561.js","assets/SoundIcon-170f2cd8.js","assets/SucessFeedBackIcon-9888ff7e.js","assets/index-26b9fa35.js","assets/Stack-826017fe.js","assets/clsx-b650a2af.js","assets/createSvgIcon-7c3887e5.js","assets/TextareaAutosize-de3cbae0.js","assets/ClipLoader-8967250d.js"]).then(({MergeNodeModal:e})=>({default:e}))),Se=r.lazy(()=>u(()=>import("./index-658af505.js"),["assets/index-658af505.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/ClipLoader-8967250d.js","assets/index-55570399.js","assets/index-26b9fa35.js","assets/index-64e456ae.js","assets/SourcesTableIcon-f39c4fa8.js","assets/CheckIcon-c201524d.js","assets/DeleteNodeIcon-953bb561.js","assets/SoundIcon-170f2cd8.js","assets/SucessFeedBackIcon-9888ff7e.js","assets/Stack-826017fe.js","assets/clsx-b650a2af.js","assets/createSvgIcon-7c3887e5.js","assets/TextareaAutosize-de3cbae0.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Le=r.lazy(()=>u(()=>import("./index-f6a56a2d.js"),["assets/index-f6a56a2d.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-26b9fa35.js","assets/index-64e456ae.js","assets/SourcesTableIcon-f39c4fa8.js","assets/index-55570399.js","assets/CheckIcon-c201524d.js","assets/DeleteNodeIcon-953bb561.js","assets/SoundIcon-170f2cd8.js","assets/SucessFeedBackIcon-9888ff7e.js","assets/Stack-826017fe.js","assets/clsx-b650a2af.js","assets/createSvgIcon-7c3887e5.js","assets/TextareaAutosize-de3cbae0.js","assets/ClipLoader-8967250d.js","assets/isPlainObject-9e5535bd.js","assets/index-27b8d298.js","assets/Tabs-53fa11a5.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/Switch-75a1afe0.js","assets/FormControlLabel-58917edc.js","assets/Typography-d425ba4c.js","assets/index-80e8f33d.js"]).then(({BlueprintModal:e})=>({default:e}))),Ie=r.lazy(()=>u(()=>import("./index-411e0dfd.js"),["assets/index-411e0dfd.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-9888ff7e.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Pe=r.lazy(()=>u(()=>import("./index-ea68b0d7.js"),["assets/index-ea68b0d7.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-fdd2e1e0.js","assets/index-55570399.js","assets/index-26b9fa35.js","assets/index-64e456ae.js","assets/SourcesTableIcon-f39c4fa8.js","assets/CheckIcon-c201524d.js","assets/DeleteNodeIcon-953bb561.js","assets/SoundIcon-170f2cd8.js","assets/SucessFeedBackIcon-9888ff7e.js","assets/Stack-826017fe.js","assets/clsx-b650a2af.js","assets/createSvgIcon-7c3887e5.js","assets/TextareaAutosize-de3cbae0.js","assets/FormControlLabel-58917edc.js","assets/Typography-d425ba4c.js","assets/Switch-75a1afe0.js","assets/ClipLoader-8967250d.js"]).then(({CreateBountyModal:e})=>({default:e}))),Ne=r.lazy(()=>u(()=>import("./index-05f5c6cd.js").then(e=>e.ci),["assets/index-05f5c6cd.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Re=r.lazy(()=>u(()=>import("./index-c6a043d5.js").then(e=>e.i),["assets/index-c6a043d5.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-55570399.js","assets/SoundIcon-170f2cd8.js"]).then(({BriefDescription:e})=>({default:e}))),Me=r.lazy(()=>u(()=>import("./index-130433c5.js"),["assets/index-130433c5.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-ac393e03.js","assets/index-55570399.js","assets/index-fdd2e1e0.js","assets/index-26b9fa35.js","assets/index-64e456ae.js","assets/SourcesTableIcon-f39c4fa8.js","assets/CheckIcon-c201524d.js","assets/DeleteNodeIcon-953bb561.js","assets/SoundIcon-170f2cd8.js","assets/SucessFeedBackIcon-9888ff7e.js","assets/Stack-826017fe.js","assets/clsx-b650a2af.js","assets/createSvgIcon-7c3887e5.js","assets/TextareaAutosize-de3cbae0.js","assets/FormControlLabel-58917edc.js","assets/Typography-d425ba4c.js","assets/Switch-75a1afe0.js","assets/ClipLoader-8967250d.js"]).then(({NodeActionModal:e})=>({default:e}))),Oe=()=>t.jsxs(t.Fragment,{children:[t.jsx(ke,{}),t.jsx(je,{}),t.jsx(we,{}),t.jsx(Ee,{}),t.jsx(Te,{}),t.jsx(ve,{}),t.jsx(Ae,{}),t.jsx(Se,{}),t.jsx(Le,{}),t.jsx(ze,{}),t.jsx(Ie,{}),t.jsx(Pe,{}),t.jsx(Ne,{}),t.jsx(Re,{}),t.jsx(Me,{})]}),Be=()=>{const[e,n]=r.useState(null),{runningProjectMessages:a}=T(l=>l),s=l=>{n(l.currentTarget)},c=()=>{n(null)},f=!!e,m=f?"simple-popover":void 0;return a.length?t.jsxs(Ce,{ml:8,children:[t.jsx(De,{onClick:s,children:t.jsxs(he,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(oe,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(Ve,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:c,open:f,children:[t.jsx(K,{onClick:c,children:t.jsx(ne,{})}),t.jsx($e,{p:16,children:a.map(l=>t.jsx("p",{className:"item",children:l},l))})]})]}):null},Ce=h(g).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,$e=h(g)`
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
    color: ${i.GRAY6};
  }

  &:hover {
    background: ${i.MESSAGE_BG_HOVER};
  }
`,De=h(g).attrs({align:"center",direction:"row"})`
  display: flex;
  cursor: pointer;
  height: 2.5rem;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${i.white};
  background: ${i.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${i.BUTTON1_PRESS};
  }

  &:active {
    background: ${i.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 16px;
  }

  .budgetUnit {
    color: ${i.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,K=h.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  display: none;
  z-index: 1;
  width: 2em;
  height: 2em;
  background-color: ${i.BUTTON1};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${i.white} !important;
    width: 1.5em;
    height: 1.5em;
  }
`,Ve=h(ue)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${i.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${K} {
        display: flex;
      }
    }
  }
`;h(g).attrs({})``;h(g).attrs({})``;h(g).attrs({direction:"row",grow:1})`
  margin-left: 10px;
  justify-content: between;
`;h(g).attrs({align:"center",direction:"row",justify:"flex-start"})`
  color: ${i.white};
  background: ${i.BG1};
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
    background: ${i.BUTTON1_PRESS};
  }

  &:active {
    background: ${i.BUTTON1};
  }

  .icon {
    margin-right: 8px;
    font-size: 16px;
  }

  .text {
  }
`;h(g).attrs({align:"center",direction:"row"})`
  display: flex;
  height: 32px;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${i.white};
  background: ${i.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${i.BUTTON1_PRESS};
  }

  &:active {
    background: ${i.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  .budgetUnit {
    color: ${i.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;h(g).attrs({align:"center",direction:"row"})`
  margin-right: 10px;
  display: flex;
  height: 28px;
  padding: 0.75rem 0.6375rem 0.75rem 0.3187rem;
  align-items: center;
  gap: 4px;
  color: ${i.white};
  background: ${i.modalShield};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:active {
    background: ${i.BUTTON1};
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
`;const Fe=()=>{const e=P(l=>l.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:a}=J(),{abortFetchData:s,resetGraph:c}=T(l=>l),f=se();if(!e)return null;const m=()=>{a(null),s(),c(),n(),f("/")};return t.jsxs(qe,{children:[t.jsxs(Qe,{onClick:m,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(I,{className:"title",color:"white",children:e.title})}),t.jsx(I,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(Be,{})]})},qe=h(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Qe=h.div`
  ${re.smallOnly`
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
    color: ${i.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
    margin-left: 8px;
    cursor: pointer;
  }
`,Ge=620,Ue=()=>{const e=`(max-width: ${Ge}px)`,[n,a]=r.useState(()=>window.matchMedia(e).matches);return r.useEffect(()=>{const s=window.matchMedia(e);a(s.matches);const c=()=>{a(s.matches)};return window.addEventListener("resize",c),()=>s.removeEventListener("change",c)},[e]),n},We=()=>{const[e,n]=r.useState(!0),a=Ue();r.useEffect(()=>{n(!0)},[a]);const s=()=>{n(!1)};return a&&e?t.jsxs(He,{align:"center",direction:"column",justify:"center",onClick:s,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(g,{align:"center",direction:"column",justify:"center",children:[t.jsx(L,{children:"Second Brain is currently"}),t.jsx(L,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(L,{children:"Mobile support coming soon."})]}),t.jsx(ie,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},He=h(g)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,L=h(I)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,Ye=h(ae)`
  .Toastify__toast {
    background-color: #49c998ff;
    width: fit-content;
    min-height: 100%;
    border-radius: 12px;
    padding: 6px;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${i.white};
    font-weight: 500;
    font-family: 'Barlow';
  }
  .Toastify__close-button {
    color: ${i.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${i.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${i.primaryGreen};
  }
  &.Toastify__toast-container--top-right {
    width: fit-content;
    height: auto;
    top: 60px;
    right: 48px;
  }
`,Je=h(g)`
  height: 100%;
  width: 100%;
  background-color: ${i.black};
`,Ke=h(g)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${i.white};
  font-size: 12px;
  opacity: 0.5;
`,Xe=r.lazy(()=>u(()=>import("./index-5c9a9c09.js"),["assets/index-5c9a9c09.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-f39c4fa8.js","assets/index-55570399.js"]).then(({MainToolbar:e})=>({default:e}))),Ze=r.lazy(()=>u(()=>import("./index-c470046d.js").then(e=>e.i),["assets/index-c470046d.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-80e8f33d.js","assets/three.module-4d3d7244.js","assets/index-27b8d298.js","assets/index-55570399.js","assets/index-64e456ae.js","assets/SourcesTableIcon-f39c4fa8.js","assets/CheckIcon-c201524d.js","assets/DeleteNodeIcon-953bb561.js","assets/SoundIcon-170f2cd8.js","assets/SucessFeedBackIcon-9888ff7e.js","assets/TextareaAutosize-de3cbae0.js","assets/index-93ba6d9b.js","assets/index-ac393e03.js","assets/ClipLoader-8967250d.js","assets/clsx-b650a2af.js"]).then(({Universe:e})=>({default:e}))),et=r.lazy(()=>u(()=>import("./index-a8259104.js").then(e=>e.r),["assets/index-a8259104.js","assets/index-05f5c6cd.js","assets/index-b4d03b7b.css","assets/index-64e456ae.js","assets/SourcesTableIcon-f39c4fa8.js","assets/index-55570399.js","assets/CheckIcon-c201524d.js","assets/DeleteNodeIcon-953bb561.js","assets/SoundIcon-170f2cd8.js","assets/SucessFeedBackIcon-9888ff7e.js","assets/ClipLoader-8967250d.js","assets/Skeleton-ef7d4c61.js","assets/Stack-826017fe.js","assets/clsx-b650a2af.js","assets/index-c6a043d5.js","assets/FormControlLabel-58917edc.js","assets/Typography-d425ba4c.js","assets/createSvgIcon-7c3887e5.js","assets/isPlainObject-9e5535bd.js","assets/index-27b8d298.js","assets/index-93ba6d9b.js"]).then(({SideBar:e})=>({default:e}))),nt=()=>{const[e]=H(),n=e.get("q"),{setNodeCount:a}=Y(o=>o),s=r.useRef(null),c=r.useRef(null);me();const{setCurrentSearch:f,setRelevanceSelected:m,setTranscriptOpen:l,universeQuestionIsOpen:w}=P(o=>o),k=_e(o=>o.setTeachMeAnswer),{setCategoryFilter:v,addNewNode:p,splashDataLoading:A,runningProjectId:x,setRunningProjectMessages:N,isFetching:R}=T(o=>o),{setAiSummaryAnswer:y,getKeyExist:M,aiRefId:z}=J(o=>o),[S,j]=ce(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),d=xe(),O=le({mode:"onChange"}),{setValue:B}=O;r.useEffect(()=>{B("search",n??""),l(!1),m(!1),f(n??""),k(""),v(null)},[n,v,f,m,k,l,B]);const C=r.useCallback(()=>{a("INCREMENT")},[a]),$=r.useCallback(o=>{R||(s.current||(s.current={nodes:[],edges:[]}),o.edges&&s.current.edges.push(...o.edges),o.nodes&&s.current.nodes.push(...o.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(s.current){const{nodes:_,edges:b}=s.current,E={nodes:_,edges:b};s.current={nodes:[],edges:[]},p(E)}},3e3))},[p,R]),D=r.useCallback(o=>{console.log(o)},[]),V=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{answer:o.answer,answerLoading:!1})},[y]),F=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{audio_en:o.audio_EN})},[y]),q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{questions:o.relevant_questions.map(_=>_.question),questionsLoading:!1})},[y]),Q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{sources:o.sources.map(_=>_.ref_id),sourcesLoading:!1})},[y]),G=r.useCallback(o=>{o.question&&M(z)&&y(z,{answerLoading:!1,entities:o.entities})},[y,M,z]);return r.useEffect(()=>(d&&(d.connect(),d.on("connect_error",o=>{console.error("Socket connection error:",o)}),d.on("newnode",C),j&&d.on("extractedentitieshook",G),j&&d.on("askquestionhook",V),j&&d.on("relevantquestionshook",q),j&&d.on("answersourceshook",Q),S&&d.on("new_node_created",$),S&&d.on("node_updated",D),j&&d.on("answeraudiohook",F)),()=>{d&&d.off()}),[d,C,$,S,V,j,q,Q,G,F,D]),r.useEffect(()=>{if(!x)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const b={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:x})};o.send(JSON.stringify(b))},o.onmessage=_=>{var U;const b=JSON.parse(_.data);if(console.log(b),b.type==="ping")return;const E=(U=b==null?void 0:b.message)==null?void 0:U.message;E&&N(E)},o.onerror=_=>{console.error("WebSocket error:",_)}},[x,N]),r.useEffect(()=>{if(x)try{d==null||d.emit("update_project_id",{id:x})}catch(o){console.error(o)}},[x,d]),t.jsxs(t.Fragment,{children:[t.jsx(pe,{}),t.jsx(We,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(Je,{direction:"row",children:[t.jsxs(de,{...O,children:[t.jsx(Xe,{}),!w&&t.jsx(et,{}),t.jsx(Ze,{}),t.jsx(fe,{}),t.jsx(Fe,{}),t.jsxs(Ke,{children:["v",be]}),t.jsx(ge,{})]}),t.jsx(Oe,{}),t.jsx(Ye,{})]})})]})};export{nt as App};
