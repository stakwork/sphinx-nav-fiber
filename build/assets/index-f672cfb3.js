import{W as se,u as ee,r as o,a as te,b as C,c as S,d as Z,f as re,S as ae,e as ie,_ as i,j as t,s as p,g as d,F as y,I as ce,C as le,m as de,h as oe,i as ue,T as M,B as he,Q as fe,k as pe,l as ge,n as me}from"./index-1a2e2dfa.js";import{P as _e,T as xe,O as ye,A as be}from"./index-a9b5b35b.js";const we=se`
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
`,Ee=()=>{const[e]=ee(),s=e.get("node"),a=o.useRef(!0),{setBudget:r}=te(f=>f),{setSidebarOpen:u,currentSearch:h}=C(f=>f),{fetchData:g,setAbortRequests:c,resetData:w,addNewNode:v,finishLoading:k}=S(f=>f);o.useEffect(()=>{if(a.current){const f=async()=>{h||w(),await g(r,c),u(!0),a.current=!1,h&&await Z(r)},T=async()=>{const A=await re(s||"",0,5);k(),a.current=!1,A&&v({nodes:A.nodes,edges:A.edges})};if(s){T();return}f()}},[s,h,g,r,c,u,w,a,k,v]),o.useEffect(()=>{if(!a.current){const f=async()=>{await g(r,c),u(!0),h&&await Z(r)};w(),f()}},[h,g,r,c,u,w,a])},je=()=>{const e=o.useContext(ae);return e==null?void 0:e.socket},ve={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,teachMeAnswer:null},ke=ie(e=>({...ve,setAskedQuestion:s=>e(a=>({askedQuestions:[...a.askedQuestions||[],s],hasQuestionInProgress:!0})),setAskedQuestionAnswer:s=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],s],hasQuestionInProgress:!1})),setHasQuestionInProgress:s=>e({hasQuestionInProgress:s}),setHasTeachingInProgress:s=>e({hasTeachingInProgress:s}),setTeachMeAnswer:s=>e({hasTeachingInProgress:!1,teachMeAnswer:s})})),Ae="0.1.106",Te=o.lazy(()=>i(()=>import("./index-e11110e2.js"),["assets/index-e11110e2.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-a9b5b35b.js","assets/ClipLoader-514d990e.js","assets/Tabs-f9fed3bc.js","assets/createSvgIcon-e470db97.js"]).then(({SettingsModal:e})=>({default:e}))),ze=o.lazy(()=>i(()=>import("./index-3f6fbb06.js").then(e=>e.i),["assets/index-3f6fbb06.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-a9b5b35b.js","assets/string-a277709d.js"]).then(({ClaimsModal:e})=>({default:e}))),Le=o.lazy(()=>i(()=>import("./index-0ce2dc2a.js"),["assets/index-0ce2dc2a.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css"]).then(({TransactionHistoryModal:e})=>({default:e}))),Se=o.lazy(()=>i(()=>import("./index-6105ec28.js"),["assets/index-6105ec28.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/CheckIcon-9b72cbb4.js","assets/index-717b1eb9.js","assets/ClipLoader-514d990e.js"]).then(({AddContentModal:e})=>({default:e}))),Ie=o.lazy(()=>i(()=>import("./index-859ffa40.js"),["assets/index-859ffa40.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-a9b5b35b.js","assets/CheckIcon-9b72cbb4.js","assets/index-717b1eb9.js","assets/ClipLoader-514d990e.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/index-0f8ad1f4.js","assets/index-1ec66a13.js","assets/SourcesTableIcon-0fdd279c.js","assets/DeleteNodeIcon-c92b86fa.js","assets/SoundIcon-cd12f044.js","assets/SucessFeedBackIcon-6893c0de.js","assets/Stack-f791a033.js","assets/clsx-b097d45b.js","assets/createSvgIcon-e470db97.js","assets/TextareaAutosize-09afa932.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),Re=o.lazy(()=>i(()=>import("./index-8494d208.js"),["assets/index-8494d208.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-1ec66a13.js","assets/SourcesTableIcon-0fdd279c.js","assets/index-a9b5b35b.js","assets/CheckIcon-9b72cbb4.js","assets/DeleteNodeIcon-c92b86fa.js","assets/SoundIcon-cd12f044.js","assets/SucessFeedBackIcon-6893c0de.js","assets/TableRow-a696103b.js","assets/constants-70f8d192.js","assets/ClipLoader-514d990e.js","assets/index-0f8ad1f4.js","assets/Stack-f791a033.js","assets/clsx-b097d45b.js","assets/createSvgIcon-e470db97.js","assets/TextareaAutosize-09afa932.js","assets/index-032f68ee.js","assets/Typography-7ca2e5fa.js","assets/Tabs-f9fed3bc.js"]).then(({SourcesTableModal:e})=>({default:e}))),Pe=o.lazy(()=>i(()=>import("./index-22333a99.js"),["assets/index-22333a99.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-a9b5b35b.js","assets/index-1ec66a13.js","assets/SourcesTableIcon-0fdd279c.js","assets/CheckIcon-9b72cbb4.js","assets/DeleteNodeIcon-c92b86fa.js","assets/SoundIcon-cd12f044.js","assets/SucessFeedBackIcon-6893c0de.js","assets/Skeleton-12b30b49.js","assets/ClipLoader-514d990e.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Me=o.lazy(()=>i(()=>import("./index-7b8060c2.js"),["assets/index-7b8060c2.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-a9b5b35b.js","assets/DeleteNodeIcon-c92b86fa.js","assets/Skeleton-12b30b49.js","assets/ClipLoader-514d990e.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ce=o.lazy(()=>i(()=>import("./index-fcbc4447.js"),["assets/index-fcbc4447.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-a9b5b35b.js","assets/index-1ec66a13.js","assets/SourcesTableIcon-0fdd279c.js","assets/CheckIcon-9b72cbb4.js","assets/DeleteNodeIcon-c92b86fa.js","assets/SoundIcon-cd12f044.js","assets/SucessFeedBackIcon-6893c0de.js","assets/index-0f8ad1f4.js","assets/Stack-f791a033.js","assets/clsx-b097d45b.js","assets/createSvgIcon-e470db97.js","assets/TextareaAutosize-09afa932.js","assets/constants-70f8d192.js","assets/ClipLoader-514d990e.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Oe=o.lazy(()=>i(()=>import("./index-997969e5.js"),["assets/index-997969e5.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-a9b5b35b.js","assets/index-032f68ee.js","assets/constants-70f8d192.js","assets/index-1ec66a13.js","assets/SourcesTableIcon-0fdd279c.js","assets/CheckIcon-9b72cbb4.js","assets/DeleteNodeIcon-c92b86fa.js","assets/SoundIcon-cd12f044.js","assets/SucessFeedBackIcon-6893c0de.js","assets/index-0f8ad1f4.js","assets/Stack-f791a033.js","assets/clsx-b097d45b.js","assets/createSvgIcon-e470db97.js","assets/TextareaAutosize-09afa932.js","assets/ClipLoader-514d990e.js"]).then(({MergeNodeModal:e})=>({default:e}))),Ne=o.lazy(()=>i(()=>import("./index-c723e81a.js"),["assets/index-c723e81a.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/ClipLoader-514d990e.js","assets/index-a9b5b35b.js","assets/index-0f8ad1f4.js","assets/index-1ec66a13.js","assets/SourcesTableIcon-0fdd279c.js","assets/CheckIcon-9b72cbb4.js","assets/DeleteNodeIcon-c92b86fa.js","assets/SoundIcon-cd12f044.js","assets/SucessFeedBackIcon-6893c0de.js","assets/Stack-f791a033.js","assets/clsx-b097d45b.js","assets/createSvgIcon-e470db97.js","assets/TextareaAutosize-09afa932.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),De=o.lazy(()=>i(()=>import("./index-01ccbd15.js"),["assets/index-01ccbd15.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-0f8ad1f4.js","assets/index-1ec66a13.js","assets/SourcesTableIcon-0fdd279c.js","assets/index-a9b5b35b.js","assets/CheckIcon-9b72cbb4.js","assets/DeleteNodeIcon-c92b86fa.js","assets/SoundIcon-cd12f044.js","assets/SucessFeedBackIcon-6893c0de.js","assets/Stack-f791a033.js","assets/clsx-b097d45b.js","assets/createSvgIcon-e470db97.js","assets/TextareaAutosize-09afa932.js","assets/ClipLoader-514d990e.js","assets/isPlainObject-ece4e6c6.js","assets/Tabs-f9fed3bc.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/Switch-b5505986.js","assets/FormControlLabel-9dce55ff.js","assets/Typography-7ca2e5fa.js","assets/index-4ec6d1dd.js"]).then(({BlueprintModal:e})=>({default:e}))),Be=o.lazy(()=>i(()=>import("./index-6c39680e.js"),["assets/index-6c39680e.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/SucessFeedBackIcon-6893c0de.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Ve=o.lazy(()=>i(()=>import("./index-5d373135.js"),["assets/index-5d373135.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-461dd673.js","assets/index-a9b5b35b.js","assets/index-0f8ad1f4.js","assets/index-1ec66a13.js","assets/SourcesTableIcon-0fdd279c.js","assets/CheckIcon-9b72cbb4.js","assets/DeleteNodeIcon-c92b86fa.js","assets/SoundIcon-cd12f044.js","assets/SucessFeedBackIcon-6893c0de.js","assets/Stack-f791a033.js","assets/clsx-b097d45b.js","assets/createSvgIcon-e470db97.js","assets/TextareaAutosize-09afa932.js","assets/FormControlLabel-9dce55ff.js","assets/Typography-7ca2e5fa.js","assets/Switch-b5505986.js","assets/ClipLoader-514d990e.js"]).then(({CreateBountyModal:e})=>({default:e}))),Fe=o.lazy(()=>i(()=>import("./index-1a2e2dfa.js").then(e=>e.ck),["assets/index-1a2e2dfa.js","assets/index-3165de01.css"]).then(({OnboardingModal:e})=>({default:e}))),$e=o.lazy(()=>i(()=>import("./index-d5186a93.js"),["assets/index-d5186a93.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-71348a70.js","assets/index-a9b5b35b.js","assets/SoundIcon-cd12f044.js"]).then(({BriefDescription:e})=>({default:e}))),qe=o.lazy(()=>i(()=>import("./index-f6fb3df2.js"),["assets/index-f6fb3df2.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-6a1f02e8.js","assets/index-a9b5b35b.js","assets/index-461dd673.js","assets/index-0f8ad1f4.js","assets/index-1ec66a13.js","assets/SourcesTableIcon-0fdd279c.js","assets/CheckIcon-9b72cbb4.js","assets/DeleteNodeIcon-c92b86fa.js","assets/SoundIcon-cd12f044.js","assets/SucessFeedBackIcon-6893c0de.js","assets/Stack-f791a033.js","assets/clsx-b097d45b.js","assets/createSvgIcon-e470db97.js","assets/TextareaAutosize-09afa932.js","assets/FormControlLabel-9dce55ff.js","assets/Typography-7ca2e5fa.js","assets/Switch-b5505986.js","assets/ClipLoader-514d990e.js"]).then(({NodeActionModal:e})=>({default:e}))),Qe=()=>t.jsxs(t.Fragment,{children:[t.jsx(Ie,{}),t.jsx(Se,{}),t.jsx(Te,{}),t.jsx(Pe,{}),t.jsx(Me,{}),t.jsx(Re,{}),t.jsx(Ce,{}),t.jsx(Ne,{}),t.jsx(De,{}),t.jsx(Oe,{}),t.jsx(Be,{}),t.jsx(Ve,{}),t.jsx(Fe,{}),t.jsx($e,{}),t.jsx(qe,{}),t.jsx(ze,{}),t.jsx(Le,{})]}),We=()=>{const[e,s]=o.useState(null),{runningProjectMessages:a}=S(c=>c),r=c=>{s(c.currentTarget)},u=()=>{s(null)},h=!!e,g=h?"simple-popover":void 0;return a.length?t.jsxs(Ge,{ml:8,children:[t.jsx(Ke,{onClick:r,children:t.jsxs(xe,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ce,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(He,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:g,onClose:u,open:h,children:[t.jsx(ne,{onClick:u,children:t.jsx(le,{})}),t.jsx(Ue,{p:16,children:a.map(c=>t.jsx("p",{className:"item",children:c},c))})]})]}):null},Ge=p(y).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Ue=p(y)`
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
`,at=o.lazy(()=>i(()=>import("./index-2966c020.js"),["assets/index-2966c020.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/SourcesTableIcon-0fdd279c.js","assets/index-a9b5b35b.js"]).then(({MainToolbar:e})=>({default:e}))),it=o.lazy(()=>i(()=>import("./index-b7edc74c.js"),["assets/index-b7edc74c.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-4ec6d1dd.js","assets/three.module-9722a9fc.js","assets/isPlainObject-ece4e6c6.js","assets/index-a9b5b35b.js","assets/index-1ec66a13.js","assets/SourcesTableIcon-0fdd279c.js","assets/CheckIcon-9b72cbb4.js","assets/DeleteNodeIcon-c92b86fa.js","assets/SoundIcon-cd12f044.js","assets/SucessFeedBackIcon-6893c0de.js","assets/TextareaAutosize-09afa932.js","assets/index-506ca345.js","assets/string-a277709d.js","assets/index-71348a70.js","assets/index-6a1f02e8.js","assets/ClipLoader-514d990e.js","assets/index-717b1eb9.js","assets/clsx-b097d45b.js"]).then(({Universe:e})=>({default:e}))),ct=o.lazy(()=>i(()=>import("./index-6b7ace21.js").then(e=>e.i),["assets/index-6b7ace21.js","assets/index-1a2e2dfa.js","assets/index-3165de01.css","assets/index-1ec66a13.js","assets/SourcesTableIcon-0fdd279c.js","assets/index-a9b5b35b.js","assets/CheckIcon-9b72cbb4.js","assets/DeleteNodeIcon-c92b86fa.js","assets/SoundIcon-cd12f044.js","assets/SucessFeedBackIcon-6893c0de.js","assets/ClipLoader-514d990e.js","assets/Skeleton-12b30b49.js","assets/index-71348a70.js","assets/index-506ca345.js","assets/isPlainObject-ece4e6c6.js","assets/string-a277709d.js","assets/index-d5186a93.js","assets/Stack-f791a033.js","assets/clsx-b097d45b.js","assets/FormControlLabel-9dce55ff.js","assets/Typography-7ca2e5fa.js","assets/createSvgIcon-e470db97.js"]).then(({SideBar:e})=>({default:e}))),ut=()=>{const[e]=ee(),s=e.get("q"),{setNodeCount:a}=te(n=>n),r=o.useRef(null),u=o.useRef(null);Ee();const{setCurrentSearch:h,setRelevanceSelected:g,setTranscriptOpen:c,universeQuestionIsOpen:w,setUniverseQuestionIsOpen:v}=C(n=>n),k=ke(n=>n.setTeachMeAnswer),{setCategoryFilter:f,addNewNode:T,splashDataLoading:A,runningProjectId:E,setRunningProjectMessages:O,isFetching:N}=S(n=>n),{setAiSummaryAnswer:m,getKeyExist:D,aiRefId:I}=oe(n=>n),[R,x,B]=pe(n=>[n.realtimeGraphFeatureFlag,n.chatInterfaceFeatureFlag,n.chatSplashScreenAsDefault]),l=je(),V=ge({mode:"onChange"}),{setValue:F}=V;o.useEffect(()=>{B&&x&&v()},[x,B,v]),o.useEffect(()=>{F("search",s??""),c(!1),g(!1),h(s??""),k(""),f(null)},[s,f,h,g,k,c,F]);const $=o.useCallback(()=>{a("INCREMENT")},[a]),q=o.useCallback(n=>{N||(r.current||(r.current={nodes:[],edges:[]}),n.edges&&r.current.edges.push(...n.edges),n.nodes&&r.current.nodes.push(...n.nodes),u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{if(r.current){const{nodes:b,edges:j}=r.current,z={nodes:b,edges:j};r.current={nodes:[],edges:[]},T(z)}},3e3))},[T,N]),Q=o.useCallback(n=>{console.log(n)},[]),W=o.useCallback(n=>{n.ref_id&&m(n.ref_id,{answer:n.answer,answerLoading:!1})},[m]),G=o.useCallback(n=>{n.ref_id&&m(n.ref_id,{audio_en:n.audio_EN})},[m]),U=o.useCallback(n=>{n.ref_id&&m(n.ref_id,{questions:n.relevant_questions.map(b=>b.question),questionsLoading:!1})},[m]),K=o.useCallback(n=>{n.ref_id&&m(n.ref_id,{sources:n.sources.map(b=>b.ref_id),sourcesLoading:!1})},[m]),H=o.useCallback(n=>{n.question&&D(I)&&m(I,{answerLoading:!1,entities:n.entities})},[m,D,I]);return o.useEffect(()=>(l&&(l.connect(),l.on("connect_error",n=>{console.error("Socket connection error:",n)}),l.on("newnode",$),x&&l.on("extractedentitieshook",H),x&&l.on("askquestionhook",W),x&&l.on("relevantquestionshook",U),x&&l.on("answersourceshook",K),R&&l.on("new_node_created",q),R&&l.on("node_updated",Q),x&&l.on("answeraudiohook",G)),()=>{l&&l.off()}),[l,$,q,R,W,x,U,K,H,G,Q]),o.useEffect(()=>{var z;if(!E)return;const b=((z=window.ENV)==null?void 0:z.STAKWORK_WEBSOCKET_URL)||{}.STAKWORK_WEBSOCKET_URL||"wss://jobs.stakwork.com",j=new WebSocket(`${b}/cable?channel=ProjectLogChannel`);j.onopen=()=>{const _={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:E})};j.send(JSON.stringify(_))},j.onmessage=L=>{var Y;const _=JSON.parse(L.data);if(_.type==="ping")return;const J=_==null?void 0:_.message;if(J.type==="on_step_start"||J.type==="on_step_complete"){const X=(Y=_==null?void 0:_.message)==null?void 0:Y.message;X&&O(X)}},j.onerror=L=>{console.error("WebSocket error:",L)}},[E,O]),o.useEffect(()=>{if(E)try{l==null||l.emit("update_project_id",{id:E})}catch(n){console.error(n)}},[E,l]),t.jsxs(t.Fragment,{children:[t.jsx(we,{}),t.jsx(tt,{}),t.jsx(o.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(st,{direction:"row",children:[t.jsxs(me,{...V,children:[t.jsx(at,{}),!w&&t.jsx(ct,{}),t.jsx(it,{}),t.jsx(ye,{}),t.jsx(Je,{}),t.jsxs(rt,{children:["v",Ae]}),t.jsx(be,{})]}),t.jsx(Qe,{}),t.jsx(nt,{})]})})]})};export{ut as App};
