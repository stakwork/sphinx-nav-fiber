import{W as X,u as H,r,a as Y,b as P,c as T,d as W,f as Z,S as ee,e as te,_ as u,j as t,s as h,g as i,F as g,I as oe,C as ne,m as re,h as J,i as se,T as I,B as ie,Q as ae,k as ce,l as le,n as de}from"./index-ad9631ef.js";import{P as ue,T as he,O as fe,A as ge}from"./index-9193665a.js";const pe=X`
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
`,me=()=>{const[e]=H(),n=e.get("node"),a=r.useRef(!0),{setBudget:s}=Y(p=>p),{setSidebarOpen:c,currentSearch:f}=P(p=>p),{fetchData:m,setAbortRequests:l,resetData:w,addNewNode:k,finishLoading:v}=T(p=>p);r.useEffect(()=>{if(a.current){const p=async()=>{f||w(),await m(s,l),c(!0),a.current=!1,f&&await W(s)},A=async()=>{const x=await Z(n||"",0,5);v(),a.current=!1,x&&k({nodes:x.nodes,edges:x.edges})};if(n){A();return}p()}},[n,f,m,s,l,c,w,a,v,k]),r.useEffect(()=>{if(!a.current){const p=async()=>{await m(s,l),c(!0),f&&await W(s)};w(),p()}},[f,m,s,l,c,w,a])},xe=()=>{const e=r.useContext(ee);return e==null?void 0:e.socket},ye={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},_e=te(e=>({...ye,setAskedQuestion:n=>e(a=>({askedQuestions:[...a.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var a,s,c,f;(a=n==null?void 0:n.instagraph)!=null&&a.edges&&((s=n==null?void 0:n.instagraph)!=null&&s.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=n==null?void 0:n.instagraph)==null?void 0:c.edges,nodes:(f=n==null?void 0:n.instagraph)==null?void 0:f.nodes}})}})),be="0.1.106",we=r.lazy(()=>u(()=>import("./index-536aa7b6.js"),["assets/index-536aa7b6.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-9193665a.js","assets/ClipLoader-d09e04e2.js","assets/Tabs-846686fa.js","assets/createSvgIcon-5e825230.js"]).then(({SettingsModal:e})=>({default:e}))),je=r.lazy(()=>u(()=>import("./index-000586f9.js"),["assets/index-000586f9.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/CheckIcon-83a45cee.js","assets/index-717b1eb9.js","assets/ClipLoader-d09e04e2.js"]).then(({AddContentModal:e})=>({default:e}))),ke=r.lazy(()=>u(()=>import("./index-83879f21.js"),["assets/index-83879f21.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-9193665a.js","assets/CheckIcon-83a45cee.js","assets/index-717b1eb9.js","assets/ClipLoader-d09e04e2.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/index-1219a6e3.js","assets/index-45ec3b30.js","assets/SourcesTableIcon-9a3cfc26.js","assets/DeleteNodeIcon-268ffdef.js","assets/SoundIcon-3370e7c5.js","assets/SucessFeedBackIcon-10b4525f.js","assets/Stack-4d624b97.js","assets/clsx-6257b198.js","assets/createSvgIcon-5e825230.js","assets/TextareaAutosize-edc0caa4.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),ve=r.lazy(()=>u(()=>import("./index-3c4af572.js"),["assets/index-3c4af572.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-45ec3b30.js","assets/SourcesTableIcon-9a3cfc26.js","assets/index-9193665a.js","assets/CheckIcon-83a45cee.js","assets/DeleteNodeIcon-268ffdef.js","assets/SoundIcon-3370e7c5.js","assets/SucessFeedBackIcon-10b4525f.js","assets/TableRow-b8d1fe59.js","assets/constants-ed8ca754.js","assets/ClipLoader-d09e04e2.js","assets/index-1219a6e3.js","assets/Stack-4d624b97.js","assets/clsx-6257b198.js","assets/createSvgIcon-5e825230.js","assets/TextareaAutosize-edc0caa4.js","assets/index-d6b22a92.js","assets/Typography-731153e8.js","assets/Tabs-846686fa.js"]).then(({SourcesTableModal:e})=>({default:e}))),Ee=r.lazy(()=>u(()=>import("./index-210b662b.js"),["assets/index-210b662b.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-9193665a.js","assets/index-45ec3b30.js","assets/SourcesTableIcon-9a3cfc26.js","assets/CheckIcon-83a45cee.js","assets/DeleteNodeIcon-268ffdef.js","assets/SoundIcon-3370e7c5.js","assets/SucessFeedBackIcon-10b4525f.js","assets/Skeleton-09c0d619.js","assets/ClipLoader-d09e04e2.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Te=r.lazy(()=>u(()=>import("./index-4e7b017e.js"),["assets/index-4e7b017e.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-9193665a.js","assets/DeleteNodeIcon-268ffdef.js","assets/Skeleton-09c0d619.js","assets/ClipLoader-d09e04e2.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ae=r.lazy(()=>u(()=>import("./index-75ed47d2.js"),["assets/index-75ed47d2.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-9193665a.js","assets/index-45ec3b30.js","assets/SourcesTableIcon-9a3cfc26.js","assets/CheckIcon-83a45cee.js","assets/DeleteNodeIcon-268ffdef.js","assets/SoundIcon-3370e7c5.js","assets/SucessFeedBackIcon-10b4525f.js","assets/index-1219a6e3.js","assets/Stack-4d624b97.js","assets/clsx-6257b198.js","assets/createSvgIcon-5e825230.js","assets/TextareaAutosize-edc0caa4.js","assets/constants-ed8ca754.js","assets/ClipLoader-d09e04e2.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),ze=r.lazy(()=>u(()=>import("./index-3bda6b98.js"),["assets/index-3bda6b98.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-9193665a.js","assets/index-d6b22a92.js","assets/constants-ed8ca754.js","assets/index-45ec3b30.js","assets/SourcesTableIcon-9a3cfc26.js","assets/CheckIcon-83a45cee.js","assets/DeleteNodeIcon-268ffdef.js","assets/SoundIcon-3370e7c5.js","assets/SucessFeedBackIcon-10b4525f.js","assets/index-1219a6e3.js","assets/Stack-4d624b97.js","assets/clsx-6257b198.js","assets/createSvgIcon-5e825230.js","assets/TextareaAutosize-edc0caa4.js","assets/ClipLoader-d09e04e2.js"]).then(({MergeNodeModal:e})=>({default:e}))),Se=r.lazy(()=>u(()=>import("./index-e4c5b97b.js"),["assets/index-e4c5b97b.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/ClipLoader-d09e04e2.js","assets/index-9193665a.js","assets/index-1219a6e3.js","assets/index-45ec3b30.js","assets/SourcesTableIcon-9a3cfc26.js","assets/CheckIcon-83a45cee.js","assets/DeleteNodeIcon-268ffdef.js","assets/SoundIcon-3370e7c5.js","assets/SucessFeedBackIcon-10b4525f.js","assets/Stack-4d624b97.js","assets/clsx-6257b198.js","assets/createSvgIcon-5e825230.js","assets/TextareaAutosize-edc0caa4.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Le=r.lazy(()=>u(()=>import("./index-5ed892ef.js"),["assets/index-5ed892ef.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-1219a6e3.js","assets/index-45ec3b30.js","assets/SourcesTableIcon-9a3cfc26.js","assets/index-9193665a.js","assets/CheckIcon-83a45cee.js","assets/DeleteNodeIcon-268ffdef.js","assets/SoundIcon-3370e7c5.js","assets/SucessFeedBackIcon-10b4525f.js","assets/Stack-4d624b97.js","assets/clsx-6257b198.js","assets/createSvgIcon-5e825230.js","assets/TextareaAutosize-edc0caa4.js","assets/ClipLoader-d09e04e2.js","assets/isPlainObject-a227b789.js","assets/index-d463a459.js","assets/Tabs-846686fa.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/Switch-8665ed42.js","assets/FormControlLabel-5ccb456d.js","assets/Typography-731153e8.js","assets/index-90b0c734.js"]).then(({BlueprintModal:e})=>({default:e}))),Ie=r.lazy(()=>u(()=>import("./index-7734fa71.js"),["assets/index-7734fa71.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-10b4525f.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Pe=r.lazy(()=>u(()=>import("./index-1e4baba6.js"),["assets/index-1e4baba6.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-7b73b546.js","assets/index-9193665a.js","assets/index-1219a6e3.js","assets/index-45ec3b30.js","assets/SourcesTableIcon-9a3cfc26.js","assets/CheckIcon-83a45cee.js","assets/DeleteNodeIcon-268ffdef.js","assets/SoundIcon-3370e7c5.js","assets/SucessFeedBackIcon-10b4525f.js","assets/Stack-4d624b97.js","assets/clsx-6257b198.js","assets/createSvgIcon-5e825230.js","assets/TextareaAutosize-edc0caa4.js","assets/FormControlLabel-5ccb456d.js","assets/Typography-731153e8.js","assets/Switch-8665ed42.js","assets/ClipLoader-d09e04e2.js"]).then(({CreateBountyModal:e})=>({default:e}))),Ne=r.lazy(()=>u(()=>import("./index-ad9631ef.js").then(e=>e.cj),["assets/index-ad9631ef.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Re=r.lazy(()=>u(()=>import("./index-f64e1293.js").then(e=>e.i),["assets/index-f64e1293.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-9193665a.js","assets/SoundIcon-3370e7c5.js"]).then(({BriefDescription:e})=>({default:e}))),Me=r.lazy(()=>u(()=>import("./index-a2f62b35.js"),["assets/index-a2f62b35.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-bc4099ac.js","assets/index-9193665a.js","assets/index-7b73b546.js","assets/index-1219a6e3.js","assets/index-45ec3b30.js","assets/SourcesTableIcon-9a3cfc26.js","assets/CheckIcon-83a45cee.js","assets/DeleteNodeIcon-268ffdef.js","assets/SoundIcon-3370e7c5.js","assets/SucessFeedBackIcon-10b4525f.js","assets/Stack-4d624b97.js","assets/clsx-6257b198.js","assets/createSvgIcon-5e825230.js","assets/TextareaAutosize-edc0caa4.js","assets/FormControlLabel-5ccb456d.js","assets/Typography-731153e8.js","assets/Switch-8665ed42.js","assets/ClipLoader-d09e04e2.js"]).then(({NodeActionModal:e})=>({default:e}))),Oe=()=>t.jsxs(t.Fragment,{children:[t.jsx(ke,{}),t.jsx(je,{}),t.jsx(we,{}),t.jsx(Ee,{}),t.jsx(Te,{}),t.jsx(ve,{}),t.jsx(Ae,{}),t.jsx(Se,{}),t.jsx(Le,{}),t.jsx(ze,{}),t.jsx(Ie,{}),t.jsx(Pe,{}),t.jsx(Ne,{}),t.jsx(Re,{}),t.jsx(Me,{})]}),Be=()=>{const[e,n]=r.useState(null),{runningProjectMessages:a}=T(l=>l),s=l=>{n(l.currentTarget)},c=()=>{n(null)},f=!!e,m=f?"simple-popover":void 0;return a.length?t.jsxs(Ce,{ml:8,children:[t.jsx(De,{onClick:s,children:t.jsxs(he,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(oe,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(Ve,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:c,open:f,children:[t.jsx(K,{onClick:c,children:t.jsx(ne,{})}),t.jsx($e,{p:16,children:a.map(l=>t.jsx("p",{className:"item",children:l},l))})]})]}):null},Ce=h(g).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,$e=h(g)`
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
`,Xe=r.lazy(()=>u(()=>import("./index-70fa43db.js"),["assets/index-70fa43db.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-9a3cfc26.js","assets/index-9193665a.js"]).then(({MainToolbar:e})=>({default:e}))),Ze=r.lazy(()=>u(()=>import("./index-5c2fb4cb.js").then(e=>e.i),["assets/index-5c2fb4cb.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-90b0c734.js","assets/three.module-4d3d7244.js","assets/index-d463a459.js","assets/index-9193665a.js","assets/index-45ec3b30.js","assets/SourcesTableIcon-9a3cfc26.js","assets/CheckIcon-83a45cee.js","assets/DeleteNodeIcon-268ffdef.js","assets/SoundIcon-3370e7c5.js","assets/SucessFeedBackIcon-10b4525f.js","assets/TextareaAutosize-edc0caa4.js","assets/index-d7a3e3c9.js","assets/index-bc4099ac.js","assets/ClipLoader-d09e04e2.js","assets/clsx-6257b198.js"]).then(({Universe:e})=>({default:e}))),et=r.lazy(()=>u(()=>import("./index-a84a1f0f.js").then(e=>e.r),["assets/index-a84a1f0f.js","assets/index-ad9631ef.js","assets/index-b4d03b7b.css","assets/index-45ec3b30.js","assets/SourcesTableIcon-9a3cfc26.js","assets/index-9193665a.js","assets/CheckIcon-83a45cee.js","assets/DeleteNodeIcon-268ffdef.js","assets/SoundIcon-3370e7c5.js","assets/SucessFeedBackIcon-10b4525f.js","assets/ClipLoader-d09e04e2.js","assets/Skeleton-09c0d619.js","assets/Stack-4d624b97.js","assets/clsx-6257b198.js","assets/index-f64e1293.js","assets/FormControlLabel-5ccb456d.js","assets/Typography-731153e8.js","assets/createSvgIcon-5e825230.js","assets/isPlainObject-a227b789.js","assets/index-d463a459.js","assets/index-d7a3e3c9.js"]).then(({SideBar:e})=>({default:e}))),nt=()=>{const[e]=H(),n=e.get("q"),{setNodeCount:a}=Y(o=>o),s=r.useRef(null),c=r.useRef(null);me();const{setCurrentSearch:f,setRelevanceSelected:m,setTranscriptOpen:l,universeQuestionIsOpen:w}=P(o=>o),k=_e(o=>o.setTeachMeAnswer),{setCategoryFilter:v,addNewNode:p,splashDataLoading:A,runningProjectId:x,setRunningProjectMessages:N,isFetching:R}=T(o=>o),{setAiSummaryAnswer:y,getKeyExist:M,aiRefId:z}=J(o=>o),[S,j]=ce(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),d=xe(),O=le({mode:"onChange"}),{setValue:B}=O;r.useEffect(()=>{B("search",n??""),l(!1),m(!1),f(n??""),k(""),v(null)},[n,v,f,m,k,l,B]);const C=r.useCallback(()=>{a("INCREMENT")},[a]),$=r.useCallback(o=>{R||(s.current||(s.current={nodes:[],edges:[]}),o.edges&&s.current.edges.push(...o.edges),o.nodes&&s.current.nodes.push(...o.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(s.current){const{nodes:_,edges:b}=s.current,E={nodes:_,edges:b};s.current={nodes:[],edges:[]},p(E)}},3e3))},[p,R]),D=r.useCallback(o=>{console.log(o)},[]),V=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{answer:o.answer,answerLoading:!1})},[y]),F=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{audio_en:o.audio_EN})},[y]),q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{questions:o.relevant_questions.map(_=>_.question),questionsLoading:!1})},[y]),Q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{sources:o.sources.map(_=>_.ref_id),sourcesLoading:!1})},[y]),G=r.useCallback(o=>{o.question&&M(z)&&y(z,{answerLoading:!1,entities:o.entities})},[y,M,z]);return r.useEffect(()=>(d&&(d.connect(),d.on("connect_error",o=>{console.error("Socket connection error:",o)}),d.on("newnode",C),j&&d.on("extractedentitieshook",G),j&&d.on("askquestionhook",V),j&&d.on("relevantquestionshook",q),j&&d.on("answersourceshook",Q),S&&d.on("new_node_created",$),S&&d.on("node_updated",D),j&&d.on("answeraudiohook",F)),()=>{d&&d.off()}),[d,C,$,S,V,j,q,Q,G,F,D]),r.useEffect(()=>{if(!x)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const b={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:x})};o.send(JSON.stringify(b))},o.onmessage=_=>{var U;const b=JSON.parse(_.data);if(console.log(b),b.type==="ping")return;const E=(U=b==null?void 0:b.message)==null?void 0:U.message;E&&N(E)},o.onerror=_=>{console.error("WebSocket error:",_)}},[x,N]),r.useEffect(()=>{if(x)try{d==null||d.emit("update_project_id",{id:x})}catch(o){console.error(o)}},[x,d]),t.jsxs(t.Fragment,{children:[t.jsx(pe,{}),t.jsx(We,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(Je,{direction:"row",children:[t.jsxs(de,{...O,children:[t.jsx(Xe,{}),!w&&t.jsx(et,{}),t.jsx(Ze,{}),t.jsx(fe,{}),t.jsx(Fe,{}),t.jsxs(Ke,{children:["v",be]}),t.jsx(ge,{})]}),t.jsx(Oe,{}),t.jsx(Ye,{})]})})]})};export{nt as App};
