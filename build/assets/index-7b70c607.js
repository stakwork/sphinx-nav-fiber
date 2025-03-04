import{W as X,u as H,r,a as Y,b as P,c as T,d as W,f as Z,e as ee,_ as u,j as t,s as h,g as i,F as g,I as te,C as oe,m as ne,h as J,i as re,T as I,B as se,Q as ie,k as ae,l as ce,n as le}from"./index-5f66bd69.js";import{P as de,T as ue,O as he,A as fe}from"./index-0dc2447a.js";import{u as ge}from"./index-07be6839.js";const pe=X`
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
`,me=()=>{const[e]=H(),n=e.get("node"),a=r.useRef(!0),{setBudget:s}=Y(p=>p),{setSidebarOpen:c,currentSearch:f}=P(p=>p),{fetchData:m,setAbortRequests:l,resetData:w,addNewNode:k,finishLoading:v}=T(p=>p);r.useEffect(()=>{if(a.current){const p=async()=>{f||w(),await m(s,l),c(!0),a.current=!1,f&&await W(s)},A=async()=>{const x=await Z(n||"",0,5);v(),a.current=!1,x&&k({nodes:x.nodes,edges:x.edges})};if(n){A();return}p()}},[n,f,m,s,l,c,w,a,v,k]),r.useEffect(()=>{if(!a.current){const p=async()=>{await m(s,l),c(!0),f&&await W(s)};w(),p()}},[f,m,s,l,c,w,a])},xe={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},ye=ee(e=>({...xe,setAskedQuestion:n=>e(a=>({askedQuestions:[...a.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var a,s,c,f;(a=n==null?void 0:n.instagraph)!=null&&a.edges&&((s=n==null?void 0:n.instagraph)!=null&&s.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=n==null?void 0:n.instagraph)==null?void 0:c.edges,nodes:(f=n==null?void 0:n.instagraph)==null?void 0:f.nodes}})}})),_e="0.1.106",be=r.lazy(()=>u(()=>import("./index-54758386.js"),["assets/index-54758386.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-0dc2447a.js","assets/ClipLoader-520c1933.js","assets/Tabs-d91d8b4f.js","assets/createSvgIcon-0fd3adf3.js"]).then(({SettingsModal:e})=>({default:e}))),we=r.lazy(()=>u(()=>import("./index-48104a89.js"),["assets/index-48104a89.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/CheckIcon-45934500.js","assets/index-717b1eb9.js","assets/ClipLoader-520c1933.js"]).then(({AddContentModal:e})=>({default:e}))),je=r.lazy(()=>u(()=>import("./index-35dba113.js"),["assets/index-35dba113.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-0dc2447a.js","assets/CheckIcon-45934500.js","assets/index-717b1eb9.js","assets/ClipLoader-520c1933.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/index-5cac0a9e.js","assets/index-be6092b4.js","assets/SourcesTableIcon-b88bf841.js","assets/DeleteNodeIcon-7ea32c57.js","assets/SoundIcon-061186b9.js","assets/SucessFeedBackIcon-5a8f06fe.js","assets/Stack-ae37105e.js","assets/createSvgIcon-0fd3adf3.js","assets/TextareaAutosize-f40673c7.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),ke=r.lazy(()=>u(()=>import("./index-168405f5.js"),["assets/index-168405f5.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-be6092b4.js","assets/SourcesTableIcon-b88bf841.js","assets/index-0dc2447a.js","assets/CheckIcon-45934500.js","assets/DeleteNodeIcon-7ea32c57.js","assets/SoundIcon-061186b9.js","assets/SucessFeedBackIcon-5a8f06fe.js","assets/constants-32f3ad4f.js","assets/ClipLoader-520c1933.js","assets/index-5cac0a9e.js","assets/Stack-ae37105e.js","assets/createSvgIcon-0fd3adf3.js","assets/TextareaAutosize-f40673c7.js","assets/index-c39098d3.js","assets/Typography-1723043b.js","assets/Tabs-d91d8b4f.js"]).then(({SourcesTableModal:e})=>({default:e}))),ve=r.lazy(()=>u(()=>import("./index-185de6ca.js"),["assets/index-185de6ca.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-0dc2447a.js","assets/index-be6092b4.js","assets/SourcesTableIcon-b88bf841.js","assets/CheckIcon-45934500.js","assets/DeleteNodeIcon-7ea32c57.js","assets/SoundIcon-061186b9.js","assets/SucessFeedBackIcon-5a8f06fe.js","assets/Skeleton-a1841394.js","assets/ClipLoader-520c1933.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Ee=r.lazy(()=>u(()=>import("./index-5d9bfba4.js"),["assets/index-5d9bfba4.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-0dc2447a.js","assets/DeleteNodeIcon-7ea32c57.js","assets/Skeleton-a1841394.js","assets/ClipLoader-520c1933.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Te=r.lazy(()=>u(()=>import("./index-004801ab.js"),["assets/index-004801ab.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-0dc2447a.js","assets/index-be6092b4.js","assets/SourcesTableIcon-b88bf841.js","assets/CheckIcon-45934500.js","assets/DeleteNodeIcon-7ea32c57.js","assets/SoundIcon-061186b9.js","assets/SucessFeedBackIcon-5a8f06fe.js","assets/index-5cac0a9e.js","assets/Stack-ae37105e.js","assets/createSvgIcon-0fd3adf3.js","assets/TextareaAutosize-f40673c7.js","assets/constants-32f3ad4f.js","assets/ClipLoader-520c1933.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Ae=r.lazy(()=>u(()=>import("./index-5769a573.js"),["assets/index-5769a573.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-0dc2447a.js","assets/index-c39098d3.js","assets/constants-32f3ad4f.js","assets/index-be6092b4.js","assets/SourcesTableIcon-b88bf841.js","assets/CheckIcon-45934500.js","assets/DeleteNodeIcon-7ea32c57.js","assets/SoundIcon-061186b9.js","assets/SucessFeedBackIcon-5a8f06fe.js","assets/index-5cac0a9e.js","assets/Stack-ae37105e.js","assets/createSvgIcon-0fd3adf3.js","assets/TextareaAutosize-f40673c7.js","assets/ClipLoader-520c1933.js"]).then(({MergeNodeModal:e})=>({default:e}))),ze=r.lazy(()=>u(()=>import("./index-228718f0.js"),["assets/index-228718f0.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/ClipLoader-520c1933.js","assets/index-0dc2447a.js","assets/index-5cac0a9e.js","assets/index-be6092b4.js","assets/SourcesTableIcon-b88bf841.js","assets/CheckIcon-45934500.js","assets/DeleteNodeIcon-7ea32c57.js","assets/SoundIcon-061186b9.js","assets/SucessFeedBackIcon-5a8f06fe.js","assets/Stack-ae37105e.js","assets/createSvgIcon-0fd3adf3.js","assets/TextareaAutosize-f40673c7.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Le=r.lazy(()=>u(()=>import("./index-319a2c94.js"),["assets/index-319a2c94.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-5cac0a9e.js","assets/index-be6092b4.js","assets/SourcesTableIcon-b88bf841.js","assets/index-0dc2447a.js","assets/CheckIcon-45934500.js","assets/DeleteNodeIcon-7ea32c57.js","assets/SoundIcon-061186b9.js","assets/SucessFeedBackIcon-5a8f06fe.js","assets/Stack-ae37105e.js","assets/createSvgIcon-0fd3adf3.js","assets/TextareaAutosize-f40673c7.js","assets/ClipLoader-520c1933.js","assets/isPlainObject-7f377500.js","assets/index-ab80283d.js","assets/Tabs-d91d8b4f.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/Switch-09e060d1.js","assets/FormControlLabel-f69ce413.js","assets/Typography-1723043b.js","assets/index-ddb306b1.js"]).then(({BlueprintModal:e})=>({default:e}))),Se=r.lazy(()=>u(()=>import("./index-8958c8f1.js"),["assets/index-8958c8f1.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-5a8f06fe.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Ie=r.lazy(()=>u(()=>import("./index-b4d8ab1b.js"),["assets/index-b4d8ab1b.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-c99a6a6a.js","assets/index-0dc2447a.js","assets/index-5cac0a9e.js","assets/index-be6092b4.js","assets/SourcesTableIcon-b88bf841.js","assets/CheckIcon-45934500.js","assets/DeleteNodeIcon-7ea32c57.js","assets/SoundIcon-061186b9.js","assets/SucessFeedBackIcon-5a8f06fe.js","assets/Stack-ae37105e.js","assets/createSvgIcon-0fd3adf3.js","assets/TextareaAutosize-f40673c7.js","assets/FormControlLabel-f69ce413.js","assets/Typography-1723043b.js","assets/Switch-09e060d1.js","assets/ClipLoader-520c1933.js"]).then(({CreateBountyModal:e})=>({default:e}))),Pe=r.lazy(()=>u(()=>import("./index-5f66bd69.js").then(e=>e.ch),["assets/index-5f66bd69.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Ne=r.lazy(()=>u(()=>import("./index-c5ecdc25.js").then(e=>e.i),["assets/index-c5ecdc25.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-0dc2447a.js","assets/SoundIcon-061186b9.js"]).then(({BriefDescription:e})=>({default:e}))),Re=r.lazy(()=>u(()=>import("./index-5438f305.js"),["assets/index-5438f305.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-b4a1cb1e.js","assets/index-0dc2447a.js","assets/index-c99a6a6a.js","assets/index-5cac0a9e.js","assets/index-be6092b4.js","assets/SourcesTableIcon-b88bf841.js","assets/CheckIcon-45934500.js","assets/DeleteNodeIcon-7ea32c57.js","assets/SoundIcon-061186b9.js","assets/SucessFeedBackIcon-5a8f06fe.js","assets/Stack-ae37105e.js","assets/createSvgIcon-0fd3adf3.js","assets/TextareaAutosize-f40673c7.js","assets/FormControlLabel-f69ce413.js","assets/Typography-1723043b.js","assets/Switch-09e060d1.js","assets/ClipLoader-520c1933.js"]).then(({NodeActionModal:e})=>({default:e}))),Me=()=>t.jsxs(t.Fragment,{children:[t.jsx(je,{}),t.jsx(we,{}),t.jsx(be,{}),t.jsx(ve,{}),t.jsx(Ee,{}),t.jsx(ke,{}),t.jsx(Te,{}),t.jsx(ze,{}),t.jsx(Le,{}),t.jsx(Ae,{}),t.jsx(Se,{}),t.jsx(Ie,{}),t.jsx(Pe,{}),t.jsx(Ne,{}),t.jsx(Re,{})]}),Oe=()=>{const[e,n]=r.useState(null),{runningProjectMessages:a}=T(l=>l),s=l=>{n(l.currentTarget)},c=()=>{n(null)},f=!!e,m=f?"simple-popover":void 0;return a.length?t.jsxs(Be,{ml:8,children:[t.jsx($e,{onClick:s,children:t.jsxs(ue,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(te,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(De,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:c,open:f,children:[t.jsx(K,{onClick:c,children:t.jsx(oe,{})}),t.jsx(Ce,{p:16,children:a.map(l=>t.jsx("p",{className:"item",children:l},l))})]})]}):null},Be=h(g).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Ce=h(g)`
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
`,$e=h(g).attrs({align:"center",direction:"row"})`
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
`,De=h(de)`
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
`;h(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})``;h(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-end"})``;h(g).attrs({align:"center",direction:"row",grow:1})`
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
`;const Ve=()=>{const e=P(l=>l.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:a}=J(),{abortFetchData:s,resetGraph:c}=T(l=>l),f=re();if(!e)return null;const m=()=>{a(null),s(),c(),n(),f("/")};return t.jsxs(Fe,{children:[t.jsxs(qe,{onClick:m,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(I,{className:"title",color:"white",children:e.title})}),t.jsx(I,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(Oe,{})]})},Fe=h(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,qe=h.div`
  ${ne.smallOnly`
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
`,Qe=620,Ge=()=>{const e=`(max-width: ${Qe}px)`,[n,a]=r.useState(()=>window.matchMedia(e).matches);return r.useEffect(()=>{const s=window.matchMedia(e);a(s.matches);const c=()=>{a(s.matches)};return window.addEventListener("resize",c),()=>s.removeEventListener("change",c)},[e]),n},Ue=()=>{const[e,n]=r.useState(!0),a=Ge();r.useEffect(()=>{n(!0)},[a]);const s=()=>{n(!1)};return a&&e?t.jsxs(We,{align:"center",direction:"column",justify:"center",onClick:s,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(g,{align:"center",direction:"column",justify:"center",children:[t.jsx(S,{children:"Second Brain is currently"}),t.jsx(S,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(S,{children:"Mobile support coming soon."})]}),t.jsx(se,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},We=h(g)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,S=h(I)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,He=h(ie)`
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
`,Ye=h(g)`
  height: 100%;
  width: 100%;
  background-color: ${i.black};
`,Je=h(g)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${i.white};
  font-size: 12px;
  opacity: 0.5;
`,Ke=r.lazy(()=>u(()=>import("./index-d0bbd038.js"),["assets/index-d0bbd038.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-b88bf841.js","assets/index-0dc2447a.js"]).then(({MainToolbar:e})=>({default:e}))),Xe=r.lazy(()=>u(()=>import("./index-914c46f4.js").then(e=>e.i),["assets/index-914c46f4.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-ddb306b1.js","assets/three.module-4d3d7244.js","assets/index-ab80283d.js","assets/index-0dc2447a.js","assets/index-be6092b4.js","assets/SourcesTableIcon-b88bf841.js","assets/CheckIcon-45934500.js","assets/DeleteNodeIcon-7ea32c57.js","assets/SoundIcon-061186b9.js","assets/SucessFeedBackIcon-5a8f06fe.js","assets/TextareaAutosize-f40673c7.js","assets/index-b1fe2646.js","assets/index-b4a1cb1e.js","assets/ClipLoader-520c1933.js"]).then(({Universe:e})=>({default:e}))),Ze=r.lazy(()=>u(()=>import("./index-d7cb96a6.js").then(e=>e.i),["assets/index-d7cb96a6.js","assets/index-5f66bd69.js","assets/index-b4d03b7b.css","assets/index-be6092b4.js","assets/SourcesTableIcon-b88bf841.js","assets/index-0dc2447a.js","assets/CheckIcon-45934500.js","assets/DeleteNodeIcon-7ea32c57.js","assets/SoundIcon-061186b9.js","assets/SucessFeedBackIcon-5a8f06fe.js","assets/ClipLoader-520c1933.js","assets/Skeleton-a1841394.js","assets/Stack-ae37105e.js","assets/index-c5ecdc25.js","assets/FormControlLabel-f69ce413.js","assets/Typography-1723043b.js","assets/createSvgIcon-0fd3adf3.js","assets/isPlainObject-7f377500.js","assets/index-ab80283d.js","assets/index-b1fe2646.js"]).then(({SideBar:e})=>({default:e}))),nt=()=>{const[e]=H(),n=e.get("q"),{setNodeCount:a}=Y(o=>o),s=r.useRef(null),c=r.useRef(null);me();const{setCurrentSearch:f,setRelevanceSelected:m,setTranscriptOpen:l,universeQuestionIsOpen:w}=P(o=>o),k=ye(o=>o.setTeachMeAnswer),{setCategoryFilter:v,addNewNode:p,splashDataLoading:A,runningProjectId:x,setRunningProjectMessages:N,isFetching:R}=T(o=>o),{setAiSummaryAnswer:y,getKeyExist:M,aiRefId:z}=J(o=>o),[L,j]=ae(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),d=ge(),O=ce({mode:"onChange"}),{setValue:B}=O;r.useEffect(()=>{B("search",n??""),l(!1),m(!1),f(n??""),k(""),v(null)},[n,v,f,m,k,l,B]);const C=r.useCallback(()=>{a("INCREMENT")},[a]),$=r.useCallback(o=>{R||(s.current||(s.current={nodes:[],edges:[]}),o.edges&&s.current.edges.push(...o.edges),o.nodes&&s.current.nodes.push(...o.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(s.current){const{nodes:_,edges:b}=s.current,E={nodes:_,edges:b};s.current={nodes:[],edges:[]},p(E)}},3e3))},[p,R]),D=r.useCallback(o=>{console.log(o)},[]),V=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{answer:o.answer,answerLoading:!1})},[y]),F=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{audio_en:o.audio_EN})},[y]),q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{questions:o.relevant_questions.map(_=>_.question),questionsLoading:!1})},[y]),Q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{sources:o.sources.map(_=>_.ref_id),sourcesLoading:!1})},[y]),G=r.useCallback(o=>{o.question&&M(z)&&y(z,{answerLoading:!1,entities:o.entities})},[y,M,z]);return r.useEffect(()=>(d&&(d.connect(),d.on("connect_error",o=>{console.error("Socket connection error:",o)}),d.on("newnode",C),j&&d.on("extractedentitieshook",G),j&&d.on("askquestionhook",V),j&&d.on("relevantquestionshook",q),j&&d.on("answersourceshook",Q),L&&d.on("new_node_created",$),L&&d.on("node_updated",D),j&&d.on("answeraudiohook",F)),()=>{d&&d.off()}),[d,C,$,L,V,j,q,Q,G,F,D]),r.useEffect(()=>{if(!x)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const b={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:x})};o.send(JSON.stringify(b))},o.onmessage=_=>{var U;const b=JSON.parse(_.data);if(console.log(b),b.type==="ping")return;const E=(U=b==null?void 0:b.message)==null?void 0:U.message;E&&N(E)},o.onerror=_=>{console.error("WebSocket error:",_)}},[x,N]),r.useEffect(()=>{if(x)try{d==null||d.emit("update_project_id",{id:x})}catch(o){console.error(o)}},[x,d]),t.jsxs(t.Fragment,{children:[t.jsx(pe,{}),t.jsx(Ue,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(Ye,{direction:"row",children:[t.jsxs(le,{...O,children:[t.jsx(Ke,{}),!w&&t.jsx(Ze,{}),t.jsx(Xe,{}),t.jsx(he,{}),t.jsx(Ve,{}),t.jsxs(Je,{children:["v",_e]}),t.jsx(fe,{})]}),t.jsx(Me,{}),t.jsx(He,{})]})})]})};export{nt as App};
