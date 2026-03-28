import{W as ne,u as ee,r as s,a as te,b as M,c as L,d as Z,f as re,S as ae,e as ie,_ as c,j as t,s as p,g as u,F as y,I as ce,C as le,m as de,h as oe,i as ue,T as C,B as he,Q as fe,k as pe,l as ge,n as me}from"./index-c02d31e4.js";import{P as _e,T as xe,O as ye,A as be}from"./index-a49522f6.js";const we=ne`
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
`,je=()=>{const[e]=ee(),n=e.get("node"),a=s.useRef(!0),{setBudget:r}=te(f=>f),{setSidebarOpen:i,currentSearch:h}=M(f=>f),{fetchData:g,setAbortRequests:l,resetData:w,addNewNode:k,finishLoading:v}=L(f=>f);s.useEffect(()=>{if(a.current){const f=async()=>{h||w(),await g(r,l),i(!0),a.current=!1,h&&await Z(r)},T=async()=>{const A=await re(n||"",0,5);v(),a.current=!1,A&&k({nodes:A.nodes,edges:A.edges})};if(n){T();return}f()}},[n,h,g,r,l,i,w,a,v,k]),s.useEffect(()=>{if(!a.current){const f=async()=>{await g(r,l),i(!0),h&&await Z(r)};w(),f()}},[h,g,r,l,i,w,a])},Ee=()=>{const e=s.useContext(ae);return e==null?void 0:e.socket},ke={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},ve=ie(e=>({...ke,setAskedQuestion:n=>e(a=>({askedQuestions:[...a.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var a,r,i,h;(a=n==null?void 0:n.instagraph)!=null&&a.edges&&((r=n==null?void 0:n.instagraph)!=null&&r.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(i=n==null?void 0:n.instagraph)==null?void 0:i.edges,nodes:(h=n==null?void 0:n.instagraph)==null?void 0:h.nodes}})}})),Ae="0.1.106",Te=s.lazy(()=>c(()=>import("./index-e36784f0.js"),["assets/index-e36784f0.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-a49522f6.js","assets/ClipLoader-419cfd64.js","assets/Tabs-c57658a1.js","assets/createSvgIcon-0f3863b8.js"]).then(({SettingsModal:e})=>({default:e}))),ze=s.lazy(()=>c(()=>import("./index-5c1d296b.js").then(e=>e.i),["assets/index-5c1d296b.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-a49522f6.js","assets/string-a277709d.js"]).then(({ClaimsModal:e})=>({default:e}))),Se=s.lazy(()=>c(()=>import("./index-6abd637c.js"),["assets/index-6abd637c.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/CheckIcon-a06451ae.js","assets/index-717b1eb9.js","assets/ClipLoader-419cfd64.js"]).then(({AddContentModal:e})=>({default:e}))),Le=s.lazy(()=>c(()=>import("./index-d113999f.js"),["assets/index-d113999f.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-a49522f6.js","assets/CheckIcon-a06451ae.js","assets/index-717b1eb9.js","assets/ClipLoader-419cfd64.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/index-5c4493ee.js","assets/index-4ef2239b.js","assets/SourcesTableIcon-f01222c5.js","assets/DeleteNodeIcon-fb98b63d.js","assets/SoundIcon-6a407c38.js","assets/SucessFeedBackIcon-10848812.js","assets/Stack-af8d60a8.js","assets/clsx-bf4abc40.js","assets/createSvgIcon-0f3863b8.js","assets/TextareaAutosize-56b8b21a.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),Ie=s.lazy(()=>c(()=>import("./index-6e39b8d0.js"),["assets/index-6e39b8d0.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-4ef2239b.js","assets/SourcesTableIcon-f01222c5.js","assets/index-a49522f6.js","assets/CheckIcon-a06451ae.js","assets/DeleteNodeIcon-fb98b63d.js","assets/SoundIcon-6a407c38.js","assets/SucessFeedBackIcon-10848812.js","assets/TableRow-a6543ca0.js","assets/constants-b360e018.js","assets/ClipLoader-419cfd64.js","assets/index-5c4493ee.js","assets/Stack-af8d60a8.js","assets/clsx-bf4abc40.js","assets/createSvgIcon-0f3863b8.js","assets/TextareaAutosize-56b8b21a.js","assets/index-f665e086.js","assets/Typography-2f057aac.js","assets/Tabs-c57658a1.js"]).then(({SourcesTableModal:e})=>({default:e}))),Pe=s.lazy(()=>c(()=>import("./index-71922c42.js"),["assets/index-71922c42.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-a49522f6.js","assets/index-4ef2239b.js","assets/SourcesTableIcon-f01222c5.js","assets/CheckIcon-a06451ae.js","assets/DeleteNodeIcon-fb98b63d.js","assets/SoundIcon-6a407c38.js","assets/SucessFeedBackIcon-10848812.js","assets/Skeleton-417d4c40.js","assets/ClipLoader-419cfd64.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Re=s.lazy(()=>c(()=>import("./index-bee47354.js"),["assets/index-bee47354.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-a49522f6.js","assets/DeleteNodeIcon-fb98b63d.js","assets/Skeleton-417d4c40.js","assets/ClipLoader-419cfd64.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ce=s.lazy(()=>c(()=>import("./index-03075a35.js"),["assets/index-03075a35.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-a49522f6.js","assets/index-4ef2239b.js","assets/SourcesTableIcon-f01222c5.js","assets/CheckIcon-a06451ae.js","assets/DeleteNodeIcon-fb98b63d.js","assets/SoundIcon-6a407c38.js","assets/SucessFeedBackIcon-10848812.js","assets/index-5c4493ee.js","assets/Stack-af8d60a8.js","assets/clsx-bf4abc40.js","assets/createSvgIcon-0f3863b8.js","assets/TextareaAutosize-56b8b21a.js","assets/constants-b360e018.js","assets/ClipLoader-419cfd64.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Me=s.lazy(()=>c(()=>import("./index-78a93dc9.js"),["assets/index-78a93dc9.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-a49522f6.js","assets/index-f665e086.js","assets/constants-b360e018.js","assets/index-4ef2239b.js","assets/SourcesTableIcon-f01222c5.js","assets/CheckIcon-a06451ae.js","assets/DeleteNodeIcon-fb98b63d.js","assets/SoundIcon-6a407c38.js","assets/SucessFeedBackIcon-10848812.js","assets/index-5c4493ee.js","assets/Stack-af8d60a8.js","assets/clsx-bf4abc40.js","assets/createSvgIcon-0f3863b8.js","assets/TextareaAutosize-56b8b21a.js","assets/ClipLoader-419cfd64.js"]).then(({MergeNodeModal:e})=>({default:e}))),Oe=s.lazy(()=>c(()=>import("./index-cb7ea94a.js"),["assets/index-cb7ea94a.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/ClipLoader-419cfd64.js","assets/index-a49522f6.js","assets/index-5c4493ee.js","assets/index-4ef2239b.js","assets/SourcesTableIcon-f01222c5.js","assets/CheckIcon-a06451ae.js","assets/DeleteNodeIcon-fb98b63d.js","assets/SoundIcon-6a407c38.js","assets/SucessFeedBackIcon-10848812.js","assets/Stack-af8d60a8.js","assets/clsx-bf4abc40.js","assets/createSvgIcon-0f3863b8.js","assets/TextareaAutosize-56b8b21a.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Ne=s.lazy(()=>c(()=>import("./index-7127c9d2.js"),["assets/index-7127c9d2.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-5c4493ee.js","assets/index-4ef2239b.js","assets/SourcesTableIcon-f01222c5.js","assets/index-a49522f6.js","assets/CheckIcon-a06451ae.js","assets/DeleteNodeIcon-fb98b63d.js","assets/SoundIcon-6a407c38.js","assets/SucessFeedBackIcon-10848812.js","assets/Stack-af8d60a8.js","assets/clsx-bf4abc40.js","assets/createSvgIcon-0f3863b8.js","assets/TextareaAutosize-56b8b21a.js","assets/ClipLoader-419cfd64.js","assets/isPlainObject-a544a88b.js","assets/Tabs-c57658a1.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/Switch-046006e2.js","assets/FormControlLabel-2313df16.js","assets/Typography-2f057aac.js","assets/index-2597761e.js"]).then(({BlueprintModal:e})=>({default:e}))),De=s.lazy(()=>c(()=>import("./index-62adf1ca.js"),["assets/index-62adf1ca.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/SucessFeedBackIcon-10848812.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Be=s.lazy(()=>c(()=>import("./index-905d92bd.js"),["assets/index-905d92bd.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-a95c773a.js","assets/index-a49522f6.js","assets/index-5c4493ee.js","assets/index-4ef2239b.js","assets/SourcesTableIcon-f01222c5.js","assets/CheckIcon-a06451ae.js","assets/DeleteNodeIcon-fb98b63d.js","assets/SoundIcon-6a407c38.js","assets/SucessFeedBackIcon-10848812.js","assets/Stack-af8d60a8.js","assets/clsx-bf4abc40.js","assets/createSvgIcon-0f3863b8.js","assets/TextareaAutosize-56b8b21a.js","assets/FormControlLabel-2313df16.js","assets/Typography-2f057aac.js","assets/Switch-046006e2.js","assets/ClipLoader-419cfd64.js"]).then(({CreateBountyModal:e})=>({default:e}))),Ve=s.lazy(()=>c(()=>import("./index-c02d31e4.js").then(e=>e.ck),["assets/index-c02d31e4.js","assets/index-3165de01.css"]).then(({OnboardingModal:e})=>({default:e}))),Fe=s.lazy(()=>c(()=>import("./index-62d99127.js"),["assets/index-62d99127.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-504441e7.js","assets/index-a49522f6.js","assets/SoundIcon-6a407c38.js"]).then(({BriefDescription:e})=>({default:e}))),$e=s.lazy(()=>c(()=>import("./index-dd948134.js"),["assets/index-dd948134.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-c007bdba.js","assets/index-a49522f6.js","assets/index-a95c773a.js","assets/index-5c4493ee.js","assets/index-4ef2239b.js","assets/SourcesTableIcon-f01222c5.js","assets/CheckIcon-a06451ae.js","assets/DeleteNodeIcon-fb98b63d.js","assets/SoundIcon-6a407c38.js","assets/SucessFeedBackIcon-10848812.js","assets/Stack-af8d60a8.js","assets/clsx-bf4abc40.js","assets/createSvgIcon-0f3863b8.js","assets/TextareaAutosize-56b8b21a.js","assets/FormControlLabel-2313df16.js","assets/Typography-2f057aac.js","assets/Switch-046006e2.js","assets/ClipLoader-419cfd64.js"]).then(({NodeActionModal:e})=>({default:e}))),qe=()=>t.jsxs(t.Fragment,{children:[t.jsx(Le,{}),t.jsx(Se,{}),t.jsx(Te,{}),t.jsx(Pe,{}),t.jsx(Re,{}),t.jsx(Ie,{}),t.jsx(Ce,{}),t.jsx(Oe,{}),t.jsx(Ne,{}),t.jsx(Me,{}),t.jsx(De,{}),t.jsx(Be,{}),t.jsx(Ve,{}),t.jsx(Fe,{}),t.jsx($e,{}),t.jsx(ze,{})]}),Qe=()=>{const[e,n]=s.useState(null),{runningProjectMessages:a}=L(l=>l),r=l=>{n(l.currentTarget)},i=()=>{n(null)},h=!!e,g=h?"simple-popover":void 0;return a.length?t.jsxs(We,{ml:8,children:[t.jsx(Ue,{onClick:r,children:t.jsxs(xe,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ce,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(Ke,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:g,onClose:i,open:h,children:[t.jsx(se,{onClick:i,children:t.jsx(le,{})}),t.jsx(Ge,{p:16,children:a.map(l=>t.jsx("p",{className:"item",children:l},l))})]})]}):null},We=p(y).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Ge=p(y)`
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
    color: ${u.GRAY6};
  }

  &:hover {
    background: ${u.MESSAGE_BG_HOVER};
  }
`,Ue=p(y).attrs({align:"center",direction:"row"})`
  display: flex;
  cursor: pointer;
  height: 2.5rem;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${u.white};
  background: ${u.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${u.BUTTON1_PRESS};
  }

  &:active {
    background: ${u.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 16px;
  }

  .budgetUnit {
    color: ${u.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,se=p.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  display: none;
  z-index: 1;
  width: 2em;
  height: 2em;
  background-color: ${u.BUTTON1};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${u.white} !important;
    width: 1.5em;
    height: 1.5em;
  }
`,Ke=p(_e)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${u.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${se} {
        display: flex;
      }
    }
  }
`,He=()=>{const e=M(l=>l.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:a}=oe(),{abortFetchData:r,resetGraph:i}=L(l=>l),h=ue();if(!e)return null;const g=()=>{a(null),r(),i(),n(),h("/")};return t.jsxs(Je,{children:[t.jsxs(Ye,{onClick:g,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(C,{className:"title",color:"white",children:e.title})}),t.jsx(C,{className:"subtitle",children:"Second Brain"})]}),t.jsx(Qe,{})]})},Je=p(y).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Ye=p.div`
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
    color: ${u.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
    margin-left: 8px;
    cursor: pointer;
  }
`,Xe=620,Ze=()=>{const e=`(max-width: ${Xe}px)`,[n,a]=s.useState(()=>window.matchMedia(e).matches);return s.useEffect(()=>{const r=window.matchMedia(e);a(r.matches);const i=()=>{a(r.matches)};return window.addEventListener("resize",i),()=>r.removeEventListener("change",i)},[e]),n},et=()=>{const[e,n]=s.useState(!0),a=Ze();s.useEffect(()=>{n(!0)},[a]);const r=()=>{n(!1)};return a&&e?t.jsxs(tt,{align:"center",direction:"column",justify:"center",onClick:r,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(y,{align:"center",direction:"column",justify:"center",children:[t.jsx(R,{children:"Second Brain is currently"}),t.jsx(R,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(R,{children:"Mobile support coming soon."})]}),t.jsx(he,{color:"secondary",onClick:r,variant:"contained",children:"Got It"})]}):null},tt=p(y)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,R=p(C)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,ot=p(fe)`
  .Toastify__toast {
    background-color: #49c998ff;
    width: fit-content;
    min-height: 100%;
    border-radius: 12px;
    padding: 6px;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${u.white};
    font-weight: 500;
    font-family: 'Barlow';
  }
  .Toastify__close-button {
    color: ${u.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${u.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${u.primaryGreen};
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
  background-color: ${u.black};
`,nt=p(y)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${u.white};
  font-size: 12px;
  opacity: 0.5;
`,rt=s.lazy(()=>c(()=>import("./index-365d1792.js"),["assets/index-365d1792.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/SourcesTableIcon-f01222c5.js","assets/index-a49522f6.js"]).then(({MainToolbar:e})=>({default:e}))),at=s.lazy(()=>c(()=>import("./index-ee799276.js"),["assets/index-ee799276.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-2597761e.js","assets/three.module-9722a9fc.js","assets/isPlainObject-a544a88b.js","assets/index-a49522f6.js","assets/index-4ef2239b.js","assets/SourcesTableIcon-f01222c5.js","assets/CheckIcon-a06451ae.js","assets/DeleteNodeIcon-fb98b63d.js","assets/SoundIcon-6a407c38.js","assets/SucessFeedBackIcon-10848812.js","assets/TextareaAutosize-56b8b21a.js","assets/index-ee6ff615.js","assets/string-a277709d.js","assets/index-504441e7.js","assets/index-c007bdba.js","assets/ClipLoader-419cfd64.js","assets/index-717b1eb9.js","assets/clsx-bf4abc40.js"]).then(({Universe:e})=>({default:e}))),it=s.lazy(()=>c(()=>import("./index-0d0d97ce.js").then(e=>e.i),["assets/index-0d0d97ce.js","assets/index-c02d31e4.js","assets/index-3165de01.css","assets/index-4ef2239b.js","assets/SourcesTableIcon-f01222c5.js","assets/index-a49522f6.js","assets/CheckIcon-a06451ae.js","assets/DeleteNodeIcon-fb98b63d.js","assets/SoundIcon-6a407c38.js","assets/SucessFeedBackIcon-10848812.js","assets/ClipLoader-419cfd64.js","assets/Skeleton-417d4c40.js","assets/index-504441e7.js","assets/index-ee6ff615.js","assets/isPlainObject-a544a88b.js","assets/string-a277709d.js","assets/index-62d99127.js","assets/Stack-af8d60a8.js","assets/clsx-bf4abc40.js","assets/FormControlLabel-2313df16.js","assets/Typography-2f057aac.js","assets/createSvgIcon-0f3863b8.js"]).then(({SideBar:e})=>({default:e}))),dt=()=>{const[e]=ee(),n=e.get("q"),{setNodeCount:a}=te(o=>o),r=s.useRef(null),i=s.useRef(null);je();const{setCurrentSearch:h,setRelevanceSelected:g,setTranscriptOpen:l,universeQuestionIsOpen:w,setUniverseQuestionIsOpen:k}=M(o=>o),v=ve(o=>o.setTeachMeAnswer),{setCategoryFilter:f,addNewNode:T,splashDataLoading:A,runningProjectId:j,setRunningProjectMessages:O,isFetching:N}=L(o=>o),{setAiSummaryAnswer:m,getKeyExist:D,aiRefId:I}=oe(o=>o),[P,x,B]=pe(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag,o.chatSplashScreenAsDefault]),d=Ee(),V=ge({mode:"onChange"}),{setValue:F}=V;s.useEffect(()=>{B&&x&&k()},[x,B,k]),s.useEffect(()=>{F("search",n??""),l(!1),g(!1),h(n??""),v(""),f(null)},[n,f,h,g,v,l,F]);const $=s.useCallback(()=>{a("INCREMENT")},[a]),q=s.useCallback(o=>{N||(r.current||(r.current={nodes:[],edges:[]}),o.edges&&r.current.edges.push(...o.edges),o.nodes&&r.current.nodes.push(...o.nodes),i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{if(r.current){const{nodes:b,edges:E}=r.current,z={nodes:b,edges:E};r.current={nodes:[],edges:[]},T(z)}},3e3))},[T,N]),Q=s.useCallback(o=>{console.log(o)},[]),W=s.useCallback(o=>{o.ref_id&&m(o.ref_id,{answer:o.answer,answerLoading:!1})},[m]),G=s.useCallback(o=>{o.ref_id&&m(o.ref_id,{audio_en:o.audio_EN})},[m]),U=s.useCallback(o=>{o.ref_id&&m(o.ref_id,{questions:o.relevant_questions.map(b=>b.question),questionsLoading:!1})},[m]),K=s.useCallback(o=>{o.ref_id&&m(o.ref_id,{sources:o.sources.map(b=>b.ref_id),sourcesLoading:!1})},[m]),H=s.useCallback(o=>{o.question&&D(I)&&m(I,{answerLoading:!1,entities:o.entities})},[m,D,I]);return s.useEffect(()=>(d&&(d.connect(),d.on("connect_error",o=>{console.error("Socket connection error:",o)}),d.on("newnode",$),x&&d.on("extractedentitieshook",H),x&&d.on("askquestionhook",W),x&&d.on("relevantquestionshook",U),x&&d.on("answersourceshook",K),P&&d.on("new_node_created",q),P&&d.on("node_updated",Q),x&&d.on("answeraudiohook",G)),()=>{d&&d.off()}),[d,$,q,P,W,x,U,K,H,G,Q]),s.useEffect(()=>{var z;if(!j)return;const b=((z=window.ENV)==null?void 0:z.STAKWORK_WEBSOCKET_URL)||{}.STAKWORK_WEBSOCKET_URL||"wss://jobs.stakwork.com",E=new WebSocket(`${b}/cable?channel=ProjectLogChannel`);E.onopen=()=>{const _={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:j})};E.send(JSON.stringify(_))},E.onmessage=S=>{var Y;const _=JSON.parse(S.data);if(_.type==="ping")return;const J=_==null?void 0:_.message;if(J.type==="on_step_start"||J.type==="on_step_complete"){const X=(Y=_==null?void 0:_.message)==null?void 0:Y.message;X&&O(X)}},E.onerror=S=>{console.error("WebSocket error:",S)}},[j,O]),s.useEffect(()=>{if(j)try{d==null||d.emit("update_project_id",{id:j})}catch(o){console.error(o)}},[j,d]),t.jsxs(t.Fragment,{children:[t.jsx(we,{}),t.jsx(et,{}),t.jsx(s.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(st,{direction:"row",children:[t.jsxs(me,{...V,children:[t.jsx(rt,{}),!w&&t.jsx(it,{}),t.jsx(at,{}),t.jsx(ye,{}),t.jsx(He,{}),t.jsxs(nt,{children:["v",Ae]}),t.jsx(be,{})]}),t.jsx(qe,{}),t.jsx(ot,{})]})})]})};export{dt as App};
