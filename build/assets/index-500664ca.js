import{W as te,u as K,r as n,a as X,b as R,c as z,d as J,f as oe,S as ne,e as se,_ as l,j as t,s as h,g as i,F as p,I as re,C as ie,m as ae,h as Z,i as ce,T as P,B as le,Q as de,k as ue,l as he,n as fe}from"./index-94a99cb5.js";import{P as pe,T as ge,O as me,A as xe}from"./index-57e1c14f.js";const _e=te`
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
`,ye=()=>{const[e]=K(),s=e.get("node"),a=n.useRef(!0),{setBudget:r}=X(g=>g),{setSidebarOpen:c,currentSearch:f}=R(g=>g),{fetchData:m,setAbortRequests:d,resetData:w,addNewNode:k,finishLoading:v}=z(g=>g);n.useEffect(()=>{if(a.current){const g=async()=>{f||w(),await m(r,d),c(!0),a.current=!1,f&&await J(r)},T=async()=>{const E=await oe(s||"",0,5);v(),a.current=!1,E&&k({nodes:E.nodes,edges:E.edges})};if(s){T();return}g()}},[s,f,m,r,d,c,w,a,v,k]),n.useEffect(()=>{if(!a.current){const g=async()=>{await m(r,d),c(!0),f&&await J(r)};w(),g()}},[f,m,r,d,c,w,a])},be=()=>{const e=n.useContext(ne);return e==null?void 0:e.socket},we={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},je=se(e=>({...we,setAskedQuestion:s=>e(a=>({askedQuestions:[...a.askedQuestions||[],s],hasQuestionInProgress:!0})),setAskedQuestionAnswer:s=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],s],hasQuestionInProgress:!1})),setHasQuestionInProgress:s=>e({hasQuestionInProgress:s}),setHasTeachingInProgress:s=>e({hasTeachingInProgress:s}),setHasInstagraphInProgress:s=>e({hasInstagraphInProgress:s}),setTeachMeAnswer:s=>e({hasTeachingInProgress:!1,teachMeAnswer:s}),setInstagraphAnswer:s=>{var a,r,c,f;(a=s==null?void 0:s.instagraph)!=null&&a.edges&&((r=s==null?void 0:s.instagraph)!=null&&r.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=s==null?void 0:s.instagraph)==null?void 0:c.edges,nodes:(f=s==null?void 0:s.instagraph)==null?void 0:f.nodes}})}})),ke="0.1.106",ve=n.lazy(()=>l(()=>import("./index-48db9067.js"),["assets/index-48db9067.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-57e1c14f.js","assets/ClipLoader-e4e98d79.js","assets/Tabs-dca858bf.js","assets/createSvgIcon-f951a079.js"]).then(({SettingsModal:e})=>({default:e}))),Ee=n.lazy(()=>l(()=>import("./index-6315effe.js"),["assets/index-6315effe.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-57e1c14f.js","assets/index-201499a5.js","assets/string-a277709d.js"]).then(({ClaimsModal:e})=>({default:e}))),Te=n.lazy(()=>l(()=>import("./index-a759b6a1.js"),["assets/index-a759b6a1.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/CheckIcon-6ed45394.js","assets/index-717b1eb9.js","assets/ClipLoader-e4e98d79.js"]).then(({AddContentModal:e})=>({default:e}))),Ae=n.lazy(()=>l(()=>import("./index-90fbb516.js"),["assets/index-90fbb516.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-57e1c14f.js","assets/CheckIcon-6ed45394.js","assets/index-717b1eb9.js","assets/ClipLoader-e4e98d79.js","assets/index-4a4b2186.js","assets/three.module-0192f2a3.js","assets/index-749ec93e.js","assets/index-a600fa10.js","assets/SourcesTableIcon-08fbce7a.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/SoundIcon-7b463ce2.js","assets/SucessFeedBackIcon-7659f508.js","assets/Stack-c86f6b96.js","assets/clsx-79c14d78.js","assets/createSvgIcon-f951a079.js","assets/TextareaAutosize-70fe4753.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),ze=n.lazy(()=>l(()=>import("./index-2a6df019.js"),["assets/index-2a6df019.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-a600fa10.js","assets/SourcesTableIcon-08fbce7a.js","assets/index-57e1c14f.js","assets/CheckIcon-6ed45394.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/SoundIcon-7b463ce2.js","assets/SucessFeedBackIcon-7659f508.js","assets/TableRow-aa727643.js","assets/constants-c114ae73.js","assets/ClipLoader-e4e98d79.js","assets/index-749ec93e.js","assets/Stack-c86f6b96.js","assets/clsx-79c14d78.js","assets/createSvgIcon-f951a079.js","assets/TextareaAutosize-70fe4753.js","assets/index-a19eaf41.js","assets/Typography-88431e2a.js","assets/Tabs-dca858bf.js"]).then(({SourcesTableModal:e})=>({default:e}))),Se=n.lazy(()=>l(()=>import("./index-5ac43201.js"),["assets/index-5ac43201.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-57e1c14f.js","assets/index-a600fa10.js","assets/SourcesTableIcon-08fbce7a.js","assets/CheckIcon-6ed45394.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/SoundIcon-7b463ce2.js","assets/SucessFeedBackIcon-7659f508.js","assets/Skeleton-ca306e86.js","assets/ClipLoader-e4e98d79.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Le=n.lazy(()=>l(()=>import("./index-b103ed10.js"),["assets/index-b103ed10.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-57e1c14f.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/Skeleton-ca306e86.js","assets/ClipLoader-e4e98d79.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ie=n.lazy(()=>l(()=>import("./index-87cd7942.js"),["assets/index-87cd7942.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-57e1c14f.js","assets/index-a600fa10.js","assets/SourcesTableIcon-08fbce7a.js","assets/CheckIcon-6ed45394.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/SoundIcon-7b463ce2.js","assets/SucessFeedBackIcon-7659f508.js","assets/index-749ec93e.js","assets/Stack-c86f6b96.js","assets/clsx-79c14d78.js","assets/createSvgIcon-f951a079.js","assets/TextareaAutosize-70fe4753.js","assets/constants-c114ae73.js","assets/ClipLoader-e4e98d79.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Pe=n.lazy(()=>l(()=>import("./index-03c71ecc.js"),["assets/index-03c71ecc.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-57e1c14f.js","assets/index-a19eaf41.js","assets/constants-c114ae73.js","assets/index-a600fa10.js","assets/SourcesTableIcon-08fbce7a.js","assets/CheckIcon-6ed45394.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/SoundIcon-7b463ce2.js","assets/SucessFeedBackIcon-7659f508.js","assets/index-749ec93e.js","assets/Stack-c86f6b96.js","assets/clsx-79c14d78.js","assets/createSvgIcon-f951a079.js","assets/TextareaAutosize-70fe4753.js","assets/ClipLoader-e4e98d79.js"]).then(({MergeNodeModal:e})=>({default:e}))),Re=n.lazy(()=>l(()=>import("./index-47a9446f.js"),["assets/index-47a9446f.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-4a4b2186.js","assets/three.module-0192f2a3.js","assets/ClipLoader-e4e98d79.js","assets/index-57e1c14f.js","assets/index-749ec93e.js","assets/index-a600fa10.js","assets/SourcesTableIcon-08fbce7a.js","assets/CheckIcon-6ed45394.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/SoundIcon-7b463ce2.js","assets/SucessFeedBackIcon-7659f508.js","assets/Stack-c86f6b96.js","assets/clsx-79c14d78.js","assets/createSvgIcon-f951a079.js","assets/TextareaAutosize-70fe4753.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Ne=n.lazy(()=>l(()=>import("./index-3344249b.js"),["assets/index-3344249b.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-749ec93e.js","assets/index-a600fa10.js","assets/SourcesTableIcon-08fbce7a.js","assets/index-57e1c14f.js","assets/CheckIcon-6ed45394.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/SoundIcon-7b463ce2.js","assets/SucessFeedBackIcon-7659f508.js","assets/Stack-c86f6b96.js","assets/clsx-79c14d78.js","assets/createSvgIcon-f951a079.js","assets/TextareaAutosize-70fe4753.js","assets/ClipLoader-e4e98d79.js","assets/isPlainObject-ae6a7b20.js","assets/Tabs-dca858bf.js","assets/index-4a4b2186.js","assets/three.module-0192f2a3.js","assets/Switch-0135c4c8.js","assets/FormControlLabel-ff1a15bb.js","assets/Typography-88431e2a.js","assets/index-29163da3.js"]).then(({BlueprintModal:e})=>({default:e}))),Me=n.lazy(()=>l(()=>import("./index-b67c45a9.js"),["assets/index-b67c45a9.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-7659f508.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Oe=n.lazy(()=>l(()=>import("./index-dadcef6d.js"),["assets/index-dadcef6d.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-36a53e35.js","assets/index-57e1c14f.js","assets/index-749ec93e.js","assets/index-a600fa10.js","assets/SourcesTableIcon-08fbce7a.js","assets/CheckIcon-6ed45394.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/SoundIcon-7b463ce2.js","assets/SucessFeedBackIcon-7659f508.js","assets/Stack-c86f6b96.js","assets/clsx-79c14d78.js","assets/createSvgIcon-f951a079.js","assets/TextareaAutosize-70fe4753.js","assets/FormControlLabel-ff1a15bb.js","assets/Typography-88431e2a.js","assets/Switch-0135c4c8.js","assets/ClipLoader-e4e98d79.js"]).then(({CreateBountyModal:e})=>({default:e}))),Ce=n.lazy(()=>l(()=>import("./index-94a99cb5.js").then(e=>e.ck),["assets/index-94a99cb5.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Be=n.lazy(()=>l(()=>import("./index-ee683b3f.js"),["assets/index-ee683b3f.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-57fdc0f5.js","assets/index-57e1c14f.js","assets/SoundIcon-7b463ce2.js"]).then(({BriefDescription:e})=>({default:e}))),De=n.lazy(()=>l(()=>import("./index-96f6a5bd.js"),["assets/index-96f6a5bd.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-c6426ded.js","assets/index-57e1c14f.js","assets/index-36a53e35.js","assets/index-749ec93e.js","assets/index-a600fa10.js","assets/SourcesTableIcon-08fbce7a.js","assets/CheckIcon-6ed45394.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/SoundIcon-7b463ce2.js","assets/SucessFeedBackIcon-7659f508.js","assets/Stack-c86f6b96.js","assets/clsx-79c14d78.js","assets/createSvgIcon-f951a079.js","assets/TextareaAutosize-70fe4753.js","assets/FormControlLabel-ff1a15bb.js","assets/Typography-88431e2a.js","assets/Switch-0135c4c8.js","assets/ClipLoader-e4e98d79.js"]).then(({NodeActionModal:e})=>({default:e}))),$e=()=>t.jsxs(t.Fragment,{children:[t.jsx(Ae,{}),t.jsx(Te,{}),t.jsx(ve,{}),t.jsx(Se,{}),t.jsx(Le,{}),t.jsx(ze,{}),t.jsx(Ie,{}),t.jsx(Re,{}),t.jsx(Ne,{}),t.jsx(Pe,{}),t.jsx(Me,{}),t.jsx(Oe,{}),t.jsx(Ce,{}),t.jsx(Be,{}),t.jsx(De,{}),t.jsx(Ee,{})]}),Ve=()=>{const[e,s]=n.useState(null),{runningProjectMessages:a}=z(d=>d),r=d=>{s(d.currentTarget)},c=()=>{s(null)},f=!!e,m=f?"simple-popover":void 0;return a.length?t.jsxs(Fe,{ml:8,children:[t.jsx(Qe,{onClick:r,children:t.jsxs(ge,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(re,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(Ge,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:c,open:f,children:[t.jsx(ee,{onClick:c,children:t.jsx(ie,{})}),t.jsx(qe,{p:16,children:a.map(d=>t.jsx("p",{className:"item",children:d},d))})]})]}):null},Fe=h(p).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,qe=h(p)`
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
`,Qe=h(p).attrs({align:"center",direction:"row"})`
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
`,ee=h.div`
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
`,Ge=h(pe)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${i.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${ee} {
        display: flex;
      }
    }
  }
`;h(p).attrs({})``;h(p).attrs({})``;h(p).attrs({direction:"row",grow:1})`
  margin-left: 10px;
  justify-content: between;
`;h(p).attrs({align:"center",direction:"row",justify:"flex-start"})`
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
`;h(p).attrs({align:"center",direction:"row"})`
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
`;h(p).attrs({align:"center",direction:"row"})`
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
`;const Ue=()=>{const e=R(d=>d.appMetaData),{resetAiSummaryAnswer:s,setNewLoading:a}=Z(),{abortFetchData:r,resetGraph:c}=z(d=>d),f=ce();if(!e)return null;const m=()=>{a(null),r(),c(),s(),f("/")};return t.jsxs(We,{children:[t.jsxs(He,{onClick:m,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(P,{className:"title",color:"white",children:e.title})}),t.jsx(P,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(Ve,{})]})},We=h(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,He=h.div`
  ${ae.smallOnly`
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
`,Ye=620,Je=()=>{const e=`(max-width: ${Ye}px)`,[s,a]=n.useState(()=>window.matchMedia(e).matches);return n.useEffect(()=>{const r=window.matchMedia(e);a(r.matches);const c=()=>{a(r.matches)};return window.addEventListener("resize",c),()=>r.removeEventListener("change",c)},[e]),s},Ke=()=>{const[e,s]=n.useState(!0),a=Je();n.useEffect(()=>{s(!0)},[a]);const r=()=>{s(!1)};return a&&e?t.jsxs(Xe,{align:"center",direction:"column",justify:"center",onClick:r,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(p,{align:"center",direction:"column",justify:"center",children:[t.jsx(I,{children:"Second Brain is currently"}),t.jsx(I,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(I,{children:"Mobile support coming soon."})]}),t.jsx(le,{color:"secondary",onClick:r,variant:"contained",children:"Got It"})]}):null},Xe=h(p)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,I=h(P)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,Ze=h(de)`
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
`,et=h(p)`
  height: 100%;
  width: 100%;
  background-color: ${i.black};
`,tt=h(p)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${i.white};
  font-size: 12px;
  opacity: 0.5;
`,ot=n.lazy(()=>l(()=>import("./index-1ff4de9f.js"),["assets/index-1ff4de9f.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-08fbce7a.js","assets/index-57e1c14f.js"]).then(({MainToolbar:e})=>({default:e}))),nt=n.lazy(()=>l(()=>import("./index-b7e0498f.js").then(e=>e.i),["assets/index-b7e0498f.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-29163da3.js","assets/three.module-0192f2a3.js","assets/isPlainObject-ae6a7b20.js","assets/index-57e1c14f.js","assets/index-a600fa10.js","assets/SourcesTableIcon-08fbce7a.js","assets/CheckIcon-6ed45394.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/SoundIcon-7b463ce2.js","assets/SucessFeedBackIcon-7659f508.js","assets/TextareaAutosize-70fe4753.js","assets/index-25f27086.js","assets/string-a277709d.js","assets/index-57fdc0f5.js","assets/index-201499a5.js","assets/index-c6426ded.js","assets/ClipLoader-e4e98d79.js","assets/clsx-79c14d78.js"]).then(({Universe:e})=>({default:e}))),st=n.lazy(()=>l(()=>import("./index-d98910c6.js").then(e=>e.i),["assets/index-d98910c6.js","assets/index-94a99cb5.js","assets/index-b4d03b7b.css","assets/index-a600fa10.js","assets/SourcesTableIcon-08fbce7a.js","assets/index-57e1c14f.js","assets/CheckIcon-6ed45394.js","assets/DeleteNodeIcon-2a62c8a5.js","assets/SoundIcon-7b463ce2.js","assets/SucessFeedBackIcon-7659f508.js","assets/ClipLoader-e4e98d79.js","assets/Skeleton-ca306e86.js","assets/index-57fdc0f5.js","assets/index-25f27086.js","assets/isPlainObject-ae6a7b20.js","assets/string-a277709d.js","assets/index-ee683b3f.js","assets/Stack-c86f6b96.js","assets/clsx-79c14d78.js","assets/FormControlLabel-ff1a15bb.js","assets/Typography-88431e2a.js","assets/createSvgIcon-f951a079.js"]).then(({SideBar:e})=>({default:e}))),at=()=>{const[e]=K(),s=e.get("q"),{setNodeCount:a}=X(o=>o),r=n.useRef(null),c=n.useRef(null);ye();const{setCurrentSearch:f,setRelevanceSelected:m,setTranscriptOpen:d,universeQuestionIsOpen:w,setUniverseQuestionIsOpen:k}=R(o=>o),v=je(o=>o.setTeachMeAnswer),{setCategoryFilter:g,addNewNode:T,splashDataLoading:E,runningProjectId:j,setRunningProjectMessages:N,isFetching:M}=z(o=>o),{setAiSummaryAnswer:_,getKeyExist:O,aiRefId:S}=Z(o=>o),[L,b,C]=ue(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag,o.chatSplashScreenAsDefault]),u=be(),B=he({mode:"onChange"}),{setValue:D}=B;n.useEffect(()=>{C&&b&&k()},[b,C,k]),n.useEffect(()=>{D("search",s??""),d(!1),m(!1),f(s??""),v(""),g(null)},[s,g,f,m,v,d,D]);const $=n.useCallback(()=>{a("INCREMENT")},[a]),V=n.useCallback(o=>{M||(r.current||(r.current={nodes:[],edges:[]}),o.edges&&r.current.edges.push(...o.edges),o.nodes&&r.current.nodes.push(...o.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(r.current){const{nodes:y,edges:x}=r.current,A={nodes:y,edges:x};r.current={nodes:[],edges:[]},T(A)}},3e3))},[T,M]),F=n.useCallback(o=>{console.log(o)},[]),q=n.useCallback(o=>{o.ref_id&&_(o.ref_id,{answer:o.answer,answerLoading:!1})},[_]),Q=n.useCallback(o=>{o.ref_id&&_(o.ref_id,{audio_en:o.audio_EN})},[_]),G=n.useCallback(o=>{o.ref_id&&_(o.ref_id,{questions:o.relevant_questions.map(y=>y.question),questionsLoading:!1})},[_]),U=n.useCallback(o=>{o.ref_id&&_(o.ref_id,{sources:o.sources.map(y=>y.ref_id),sourcesLoading:!1})},[_]),W=n.useCallback(o=>{o.question&&O(S)&&_(S,{answerLoading:!1,entities:o.entities})},[_,O,S]);return n.useEffect(()=>(u&&(u.connect(),u.on("connect_error",o=>{console.error("Socket connection error:",o)}),u.on("newnode",$),b&&u.on("extractedentitieshook",W),b&&u.on("askquestionhook",q),b&&u.on("relevantquestionshook",G),b&&u.on("answersourceshook",U),L&&u.on("new_node_created",V),L&&u.on("node_updated",F),b&&u.on("answeraudiohook",Q)),()=>{u&&u.off()}),[u,$,V,L,q,b,G,U,W,Q,F]),n.useEffect(()=>{if(!j)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const x={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:j})};o.send(JSON.stringify(x))},o.onmessage=y=>{var H;const x=JSON.parse(y.data);if(x.type==="ping")return;const A=x==null?void 0:x.message;if(A.type==="on_step_start"||A.type==="on_step_complete"){const Y=(H=x==null?void 0:x.message)==null?void 0:H.message;Y&&N(Y)}},o.onerror=y=>{console.error("WebSocket error:",y)}},[j,N]),n.useEffect(()=>{if(j)try{u==null||u.emit("update_project_id",{id:j})}catch(o){console.error(o)}},[j,u]),t.jsxs(t.Fragment,{children:[t.jsx(_e,{}),t.jsx(Ke,{}),t.jsx(n.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:E?null:t.jsxs(et,{direction:"row",children:[t.jsxs(fe,{...B,children:[t.jsx(ot,{}),!w&&t.jsx(st,{}),t.jsx(nt,{}),t.jsx(me,{}),t.jsx(Ue,{}),t.jsxs(tt,{children:["v",ke]}),t.jsx(xe,{})]}),t.jsx($e,{}),t.jsx(Ze,{})]})})]})};export{at as App};
