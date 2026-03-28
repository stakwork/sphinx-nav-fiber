import{W as ne,u as ee,r as o,a as te,b as C,c as S,d as Z,f as re,S as ae,e as ie,_ as i,j as t,s as p,g as u,F as y,I as ce,C as le,m as de,h as oe,i as ue,T as M,B as he,Q as fe,k as pe,l as ge,n as me}from"./index-3fb06edb.js";import{P as _e,T as xe,O as ye,A as be}from"./index-d6c48c54.js";const we=ne`
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
`,Ee=()=>{const[e]=ee(),n=e.get("node"),a=o.useRef(!0),{setBudget:r}=te(f=>f),{setSidebarOpen:c,currentSearch:h}=C(f=>f),{fetchData:g,setAbortRequests:l,resetData:w,addNewNode:v,finishLoading:k}=S(f=>f);o.useEffect(()=>{if(a.current){const f=async()=>{h||w(),await g(r,l),c(!0),a.current=!1,h&&await Z(r)},T=async()=>{const A=await re(n||"",0,5);k(),a.current=!1,A&&v({nodes:A.nodes,edges:A.edges})};if(n){T();return}f()}},[n,h,g,r,l,c,w,a,k,v]),o.useEffect(()=>{if(!a.current){const f=async()=>{await g(r,l),c(!0),h&&await Z(r)};w(),f()}},[h,g,r,l,c,w,a])},je=()=>{const e=o.useContext(ae);return e==null?void 0:e.socket},ve={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},ke=ie(e=>({...ve,setAskedQuestion:n=>e(a=>({askedQuestions:[...a.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var a,r,c,h;(a=n==null?void 0:n.instagraph)!=null&&a.edges&&((r=n==null?void 0:n.instagraph)!=null&&r.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=n==null?void 0:n.instagraph)==null?void 0:c.edges,nodes:(h=n==null?void 0:n.instagraph)==null?void 0:h.nodes}})}})),Ae="0.1.106",Te=o.lazy(()=>i(()=>import("./index-7fb6d6e3.js"),["assets/index-7fb6d6e3.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-d6c48c54.js","assets/ClipLoader-718f5911.js","assets/Tabs-847312ea.js","assets/createSvgIcon-7acd57cf.js"]).then(({SettingsModal:e})=>({default:e}))),ze=o.lazy(()=>i(()=>import("./index-23347f31.js").then(e=>e.i),["assets/index-23347f31.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-d6c48c54.js","assets/string-a277709d.js"]).then(({ClaimsModal:e})=>({default:e}))),Le=o.lazy(()=>i(()=>import("./index-41bdfbd2.js"),["assets/index-41bdfbd2.js","assets/index-3fb06edb.js","assets/index-3165de01.css"]).then(({TransactionHistoryModal:e})=>({default:e}))),Se=o.lazy(()=>i(()=>import("./index-c5ee90f5.js"),["assets/index-c5ee90f5.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/CheckIcon-5a235f8d.js","assets/index-717b1eb9.js","assets/ClipLoader-718f5911.js"]).then(({AddContentModal:e})=>({default:e}))),Ie=o.lazy(()=>i(()=>import("./index-c1195811.js"),["assets/index-c1195811.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-d6c48c54.js","assets/CheckIcon-5a235f8d.js","assets/index-717b1eb9.js","assets/ClipLoader-718f5911.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/index-4a0df21d.js","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/Stack-ef53240c.js","assets/clsx-07776742.js","assets/createSvgIcon-7acd57cf.js","assets/TextareaAutosize-c2b306bd.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),Pe=o.lazy(()=>i(()=>import("./index-5547cfcf.js"),["assets/index-5547cfcf.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/index-d6c48c54.js","assets/CheckIcon-5a235f8d.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/TableRow-a47dbbfe.js","assets/constants-5d377ba6.js","assets/ClipLoader-718f5911.js","assets/index-4a0df21d.js","assets/Stack-ef53240c.js","assets/clsx-07776742.js","assets/createSvgIcon-7acd57cf.js","assets/TextareaAutosize-c2b306bd.js","assets/index-80f72b8b.js","assets/Typography-df876157.js","assets/Tabs-847312ea.js"]).then(({SourcesTableModal:e})=>({default:e}))),Re=o.lazy(()=>i(()=>import("./index-a0dfa34a.js"),["assets/index-a0dfa34a.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-d6c48c54.js","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/CheckIcon-5a235f8d.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/Skeleton-437bc0c8.js","assets/ClipLoader-718f5911.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Me=o.lazy(()=>i(()=>import("./index-c90a1184.js"),["assets/index-c90a1184.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-d6c48c54.js","assets/DeleteNodeIcon-96a11f80.js","assets/Skeleton-437bc0c8.js","assets/ClipLoader-718f5911.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ce=o.lazy(()=>i(()=>import("./index-2b3057ca.js"),["assets/index-2b3057ca.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-d6c48c54.js","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/CheckIcon-5a235f8d.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/index-4a0df21d.js","assets/Stack-ef53240c.js","assets/clsx-07776742.js","assets/createSvgIcon-7acd57cf.js","assets/TextareaAutosize-c2b306bd.js","assets/constants-5d377ba6.js","assets/ClipLoader-718f5911.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Oe=o.lazy(()=>i(()=>import("./index-570e08ba.js"),["assets/index-570e08ba.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-d6c48c54.js","assets/index-80f72b8b.js","assets/constants-5d377ba6.js","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/CheckIcon-5a235f8d.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/index-4a0df21d.js","assets/Stack-ef53240c.js","assets/clsx-07776742.js","assets/createSvgIcon-7acd57cf.js","assets/TextareaAutosize-c2b306bd.js","assets/ClipLoader-718f5911.js"]).then(({MergeNodeModal:e})=>({default:e}))),Ne=o.lazy(()=>i(()=>import("./index-e7f30c56.js"),["assets/index-e7f30c56.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/ClipLoader-718f5911.js","assets/index-d6c48c54.js","assets/index-4a0df21d.js","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/CheckIcon-5a235f8d.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/Stack-ef53240c.js","assets/clsx-07776742.js","assets/createSvgIcon-7acd57cf.js","assets/TextareaAutosize-c2b306bd.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),De=o.lazy(()=>i(()=>import("./index-85dc800c.js"),["assets/index-85dc800c.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-4a0df21d.js","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/index-d6c48c54.js","assets/CheckIcon-5a235f8d.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/Stack-ef53240c.js","assets/clsx-07776742.js","assets/createSvgIcon-7acd57cf.js","assets/TextareaAutosize-c2b306bd.js","assets/ClipLoader-718f5911.js","assets/isPlainObject-fd69c641.js","assets/Tabs-847312ea.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/Switch-587b8deb.js","assets/FormControlLabel-a9ea8b64.js","assets/Typography-df876157.js","assets/index-574f7fbb.js"]).then(({BlueprintModal:e})=>({default:e}))),Be=o.lazy(()=>i(()=>import("./index-e969a452.js"),["assets/index-e969a452.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/SucessFeedBackIcon-3b89b4dc.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Ve=o.lazy(()=>i(()=>import("./index-c564e33a.js"),["assets/index-c564e33a.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-5c8d7580.js","assets/index-d6c48c54.js","assets/index-4a0df21d.js","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/CheckIcon-5a235f8d.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/Stack-ef53240c.js","assets/clsx-07776742.js","assets/createSvgIcon-7acd57cf.js","assets/TextareaAutosize-c2b306bd.js","assets/FormControlLabel-a9ea8b64.js","assets/Typography-df876157.js","assets/Switch-587b8deb.js","assets/ClipLoader-718f5911.js"]).then(({CreateBountyModal:e})=>({default:e}))),Fe=o.lazy(()=>i(()=>import("./index-3fb06edb.js").then(e=>e.cl),["assets/index-3fb06edb.js","assets/index-3165de01.css"]).then(({OnboardingModal:e})=>({default:e}))),$e=o.lazy(()=>i(()=>import("./index-593dec5c.js"),["assets/index-593dec5c.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-666a29e1.js","assets/index-d6c48c54.js","assets/SoundIcon-5cfe54be.js"]).then(({BriefDescription:e})=>({default:e}))),qe=o.lazy(()=>i(()=>import("./index-d51527a3.js"),["assets/index-d51527a3.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-ca742f7c.js","assets/index-d6c48c54.js","assets/index-5c8d7580.js","assets/index-4a0df21d.js","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/CheckIcon-5a235f8d.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/Stack-ef53240c.js","assets/clsx-07776742.js","assets/createSvgIcon-7acd57cf.js","assets/TextareaAutosize-c2b306bd.js","assets/FormControlLabel-a9ea8b64.js","assets/Typography-df876157.js","assets/Switch-587b8deb.js","assets/ClipLoader-718f5911.js"]).then(({NodeActionModal:e})=>({default:e}))),Qe=()=>t.jsxs(t.Fragment,{children:[t.jsx(Ie,{}),t.jsx(Se,{}),t.jsx(Te,{}),t.jsx(Re,{}),t.jsx(Me,{}),t.jsx(Pe,{}),t.jsx(Ce,{}),t.jsx(Ne,{}),t.jsx(De,{}),t.jsx(Oe,{}),t.jsx(Be,{}),t.jsx(Ve,{}),t.jsx(Fe,{}),t.jsx($e,{}),t.jsx(qe,{}),t.jsx(ze,{}),t.jsx(Le,{})]}),We=()=>{const[e,n]=o.useState(null),{runningProjectMessages:a}=S(l=>l),r=l=>{n(l.currentTarget)},c=()=>{n(null)},h=!!e,g=h?"simple-popover":void 0;return a.length?t.jsxs(Ge,{ml:8,children:[t.jsx(Ke,{onClick:r,children:t.jsxs(xe,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ce,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(He,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:g,onClose:c,open:h,children:[t.jsx(se,{onClick:c,children:t.jsx(le,{})}),t.jsx(Ue,{p:16,children:a.map(l=>t.jsx("p",{className:"item",children:l},l))})]})]}):null},Ge=p(y).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Ue=p(y)`
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
`,Ke=p(y).attrs({align:"center",direction:"row"})`
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
`,He=p(_e)`
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
`,Je=()=>{const e=C(l=>l.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:a}=oe(),{abortFetchData:r,resetGraph:c}=S(l=>l),h=ue();if(!e)return null;const g=()=>{a(null),r(),c(),n(),h("/")};return t.jsxs(Ye,{children:[t.jsxs(Xe,{onClick:g,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(M,{className:"title",color:"white",children:e.title})}),t.jsx(M,{className:"subtitle",children:"Second Brain"})]}),t.jsx(We,{})]})},Ye=p(y).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
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
`,Ze=620,et=()=>{const e=`(max-width: ${Ze}px)`,[n,a]=o.useState(()=>window.matchMedia(e).matches);return o.useEffect(()=>{const r=window.matchMedia(e);a(r.matches);const c=()=>{a(r.matches)};return window.addEventListener("resize",c),()=>r.removeEventListener("change",c)},[e]),n},tt=()=>{const[e,n]=o.useState(!0),a=et();o.useEffect(()=>{n(!0)},[a]);const r=()=>{n(!1)};return a&&e?t.jsxs(ot,{align:"center",direction:"column",justify:"center",onClick:r,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(y,{align:"center",direction:"column",justify:"center",children:[t.jsx(R,{children:"Second Brain is currently"}),t.jsx(R,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(R,{children:"Mobile support coming soon."})]}),t.jsx(he,{color:"secondary",onClick:r,variant:"contained",children:"Got It"})]}):null},ot=p(y)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,R=p(M)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,st=p(fe)`
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
`,nt=p(y)`
  height: 100%;
  width: 100%;
  background-color: ${u.black};
`,rt=p(y)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${u.white};
  font-size: 12px;
  opacity: 0.5;
`,at=o.lazy(()=>i(()=>import("./index-69a1ebf3.js"),["assets/index-69a1ebf3.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/SourcesTableIcon-d73b4b69.js","assets/index-d6c48c54.js"]).then(({MainToolbar:e})=>({default:e}))),it=o.lazy(()=>i(()=>import("./index-33505984.js"),["assets/index-33505984.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-574f7fbb.js","assets/three.module-9722a9fc.js","assets/isPlainObject-fd69c641.js","assets/index-d6c48c54.js","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/CheckIcon-5a235f8d.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/TextareaAutosize-c2b306bd.js","assets/index-7a5b3529.js","assets/string-a277709d.js","assets/index-666a29e1.js","assets/index-ca742f7c.js","assets/ClipLoader-718f5911.js","assets/index-717b1eb9.js","assets/clsx-07776742.js"]).then(({Universe:e})=>({default:e}))),ct=o.lazy(()=>i(()=>import("./index-c6caeac5.js").then(e=>e.i),["assets/index-c6caeac5.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/index-d6c48c54.js","assets/CheckIcon-5a235f8d.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/ClipLoader-718f5911.js","assets/Skeleton-437bc0c8.js","assets/index-666a29e1.js","assets/index-7a5b3529.js","assets/isPlainObject-fd69c641.js","assets/string-a277709d.js","assets/index-593dec5c.js","assets/Stack-ef53240c.js","assets/clsx-07776742.js","assets/FormControlLabel-a9ea8b64.js","assets/Typography-df876157.js","assets/createSvgIcon-7acd57cf.js"]).then(({SideBar:e})=>({default:e}))),ut=()=>{const[e]=ee(),n=e.get("q"),{setNodeCount:a}=te(s=>s),r=o.useRef(null),c=o.useRef(null);Ee();const{setCurrentSearch:h,setRelevanceSelected:g,setTranscriptOpen:l,universeQuestionIsOpen:w,setUniverseQuestionIsOpen:v}=C(s=>s),k=ke(s=>s.setTeachMeAnswer),{setCategoryFilter:f,addNewNode:T,splashDataLoading:A,runningProjectId:E,setRunningProjectMessages:O,isFetching:N}=S(s=>s),{setAiSummaryAnswer:m,getKeyExist:D,aiRefId:I}=oe(s=>s),[P,x,B]=pe(s=>[s.realtimeGraphFeatureFlag,s.chatInterfaceFeatureFlag,s.chatSplashScreenAsDefault]),d=je(),V=ge({mode:"onChange"}),{setValue:F}=V;o.useEffect(()=>{B&&x&&v()},[x,B,v]),o.useEffect(()=>{F("search",n??""),l(!1),g(!1),h(n??""),k(""),f(null)},[n,f,h,g,k,l,F]);const $=o.useCallback(()=>{a("INCREMENT")},[a]),q=o.useCallback(s=>{N||(r.current||(r.current={nodes:[],edges:[]}),s.edges&&r.current.edges.push(...s.edges),s.nodes&&r.current.nodes.push(...s.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(r.current){const{nodes:b,edges:j}=r.current,z={nodes:b,edges:j};r.current={nodes:[],edges:[]},T(z)}},3e3))},[T,N]),Q=o.useCallback(s=>{console.log(s)},[]),W=o.useCallback(s=>{s.ref_id&&m(s.ref_id,{answer:s.answer,answerLoading:!1})},[m]),G=o.useCallback(s=>{s.ref_id&&m(s.ref_id,{audio_en:s.audio_EN})},[m]),U=o.useCallback(s=>{s.ref_id&&m(s.ref_id,{questions:s.relevant_questions.map(b=>b.question),questionsLoading:!1})},[m]),K=o.useCallback(s=>{s.ref_id&&m(s.ref_id,{sources:s.sources.map(b=>b.ref_id),sourcesLoading:!1})},[m]),H=o.useCallback(s=>{s.question&&D(I)&&m(I,{answerLoading:!1,entities:s.entities})},[m,D,I]);return o.useEffect(()=>(d&&(d.connect(),d.on("connect_error",s=>{console.error("Socket connection error:",s)}),d.on("newnode",$),x&&d.on("extractedentitieshook",H),x&&d.on("askquestionhook",W),x&&d.on("relevantquestionshook",U),x&&d.on("answersourceshook",K),P&&d.on("new_node_created",q),P&&d.on("node_updated",Q),x&&d.on("answeraudiohook",G)),()=>{d&&d.off()}),[d,$,q,P,W,x,U,K,H,G,Q]),o.useEffect(()=>{var z;if(!E)return;const b=((z=window.ENV)==null?void 0:z.STAKWORK_WEBSOCKET_URL)||{}.STAKWORK_WEBSOCKET_URL||"wss://jobs.stakwork.com",j=new WebSocket(`${b}/cable?channel=ProjectLogChannel`);j.onopen=()=>{const _={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:E})};j.send(JSON.stringify(_))},j.onmessage=L=>{var Y;const _=JSON.parse(L.data);if(_.type==="ping")return;const J=_==null?void 0:_.message;if(J.type==="on_step_start"||J.type==="on_step_complete"){const X=(Y=_==null?void 0:_.message)==null?void 0:Y.message;X&&O(X)}},j.onerror=L=>{console.error("WebSocket error:",L)}},[E,O]),o.useEffect(()=>{if(E)try{d==null||d.emit("update_project_id",{id:E})}catch(s){console.error(s)}},[E,d]),t.jsxs(t.Fragment,{children:[t.jsx(we,{}),t.jsx(tt,{}),t.jsx(o.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(nt,{direction:"row",children:[t.jsxs(me,{...V,children:[t.jsx(at,{}),!w&&t.jsx(ct,{}),t.jsx(it,{}),t.jsx(ye,{}),t.jsx(Je,{}),t.jsxs(rt,{children:["v",Ae]}),t.jsx(be,{})]}),t.jsx(Qe,{}),t.jsx(st,{})]})})]})};export{ut as App};
