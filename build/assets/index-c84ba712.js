import{W as K,u as W,r,a as H,b as I,c as w,d as U,f as X,e as Z,_ as u,j as t,s as h,g as i,F as p,I as ee,C as te,m as oe,h as Y,i as ne,T as S,B as re,Q as se,k as ie,l as ae,n as ce}from"./index-f70e6238.js";import{P as le,T as de,O as ue,A as he}from"./index-2dcd0c32.js";import{u as fe}from"./index-62c5793f.js";const ge=K`
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
`,pe=()=>{const[e]=W(),n=e.get("node"),a=r.useRef(!0),{setBudget:s}=H(c=>c),{setSidebarOpen:l,currentSearch:g}=I(c=>c),m=w(c=>c.fetchData),d=w(c=>c.setAbortRequests),j=w(c=>c.resetData),v=w(c=>c.addNewNode),E=w(c=>c.finishLoading);r.useEffect(()=>{if(a.current){const c=async()=>{g||j(),await m(s,d),l(!0),a.current=!1,g&&await U(s)},A=async()=>{const x=await X(n||"",0,5);E(),a.current=!1,x&&v({nodes:x.nodes,edges:x.edges})};if(n){A();return}c()}},[n,g,m,s,d,l,j,a,E,v]),r.useEffect(()=>{if(!a.current){const c=async()=>{await m(s,d),l(!0),g&&await U(s)};j(),c()}},[g,m,s,d,l,j,a])},me={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},xe=Z(e=>({...me,setAskedQuestion:n=>e(a=>({askedQuestions:[...a.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var a,s,l,g;(a=n==null?void 0:n.instagraph)!=null&&a.edges&&((s=n==null?void 0:n.instagraph)!=null&&s.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(l=n==null?void 0:n.instagraph)==null?void 0:l.edges,nodes:(g=n==null?void 0:n.instagraph)==null?void 0:g.nodes}})}})),ye="0.1.106",_e=r.lazy(()=>u(()=>import("./index-9a612b94.js"),["assets/index-9a612b94.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-2dcd0c32.js","assets/ClipLoader-440bdd9c.js","assets/Tabs-b626a07d.js","assets/createSvgIcon-c1a81f08.js"]).then(({SettingsModal:e})=>({default:e}))),be=r.lazy(()=>u(()=>import("./index-f7d8f19a.js"),["assets/index-f7d8f19a.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/CheckIcon-74430a26.js","assets/index-717b1eb9.js","assets/ClipLoader-440bdd9c.js"]).then(({AddContentModal:e})=>({default:e}))),we=r.lazy(()=>u(()=>import("./index-5e2f60b9.js"),["assets/index-5e2f60b9.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-2dcd0c32.js","assets/CheckIcon-74430a26.js","assets/index-717b1eb9.js","assets/ClipLoader-440bdd9c.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/index-0bbbc174.js","assets/index-8bd8a98e.js","assets/Stack-cb097f41.js","assets/createSvgIcon-c1a81f08.js","assets/TextareaAutosize-1dc3dfd7.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),je=r.lazy(()=>u(()=>import("./index-9284cf4f.js"),["assets/index-9284cf4f.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/VisibilityOn-71b768cb.js","assets/SearchIcon-d4153698.js","assets/constants-98a070b7.js","assets/index-2dcd0c32.js","assets/ClipLoader-440bdd9c.js","assets/index-0bbbc174.js","assets/index-8bd8a98e.js","assets/Stack-cb097f41.js","assets/createSvgIcon-c1a81f08.js","assets/TextareaAutosize-1dc3dfd7.js","assets/index-63f5b955.js","assets/NodeCircleIcon-acdcb155.js","assets/CheckIcon-74430a26.js","assets/Typography-24872f4e.js","assets/Tabs-b626a07d.js"]).then(({SourcesTableModal:e})=>({default:e}))),ke=r.lazy(()=>u(()=>import("./index-9fad52b3.js"),["assets/index-9fad52b3.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-2dcd0c32.js","assets/EditNodeIcon-979f9d87.js","assets/index-8bd8a98e.js","assets/Skeleton-526dea12.js","assets/ClipLoader-440bdd9c.js"]).then(({EditNodeNameModal:e})=>({default:e}))),ve=r.lazy(()=>u(()=>import("./index-f545adfc.js"),["assets/index-f545adfc.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-2dcd0c32.js","assets/DeleteNodeIcon-895367d7.js","assets/Skeleton-526dea12.js","assets/ClipLoader-440bdd9c.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ee=r.lazy(()=>u(()=>import("./index-42deaa2d.js"),["assets/index-42deaa2d.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-2dcd0c32.js","assets/NodeCircleIcon-acdcb155.js","assets/index-0bbbc174.js","assets/index-8bd8a98e.js","assets/Stack-cb097f41.js","assets/createSvgIcon-c1a81f08.js","assets/TextareaAutosize-1dc3dfd7.js","assets/constants-98a070b7.js","assets/ClipLoader-440bdd9c.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Te=r.lazy(()=>u(()=>import("./index-f6caf6fd.js"),["assets/index-f6caf6fd.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-2dcd0c32.js","assets/index-63f5b955.js","assets/constants-98a070b7.js","assets/NodeCircleIcon-acdcb155.js","assets/index-0bbbc174.js","assets/index-8bd8a98e.js","assets/Stack-cb097f41.js","assets/createSvgIcon-c1a81f08.js","assets/TextareaAutosize-1dc3dfd7.js","assets/ClipLoader-440bdd9c.js"]).then(({MergeNodeModal:e})=>({default:e}))),Ae=r.lazy(()=>u(()=>import("./index-1e091fc1.js"),["assets/index-1e091fc1.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/ClipLoader-440bdd9c.js","assets/index-2dcd0c32.js","assets/index-0bbbc174.js","assets/index-8bd8a98e.js","assets/Stack-cb097f41.js","assets/createSvgIcon-c1a81f08.js","assets/TextareaAutosize-1dc3dfd7.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),ze=r.lazy(()=>u(()=>import("./index-f2485a07.js"),["assets/index-f2485a07.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-0bbbc174.js","assets/index-8bd8a98e.js","assets/Stack-cb097f41.js","assets/index-2dcd0c32.js","assets/createSvgIcon-c1a81f08.js","assets/TextareaAutosize-1dc3dfd7.js","assets/ClipLoader-440bdd9c.js","assets/index-3f801199.js","assets/VisibilityOn-71b768cb.js","assets/SourcesTableIcon-95068c10.js","assets/VolumeIcon-250d1bd3.js","assets/NodeCircleIcon-acdcb155.js","assets/CheckIcon-74430a26.js","assets/DeleteNodeIcon-895367d7.js","assets/EditNodeIcon-979f9d87.js","assets/SearchIcon-d4153698.js","assets/SoundIcon-e57cad52.js","assets/SucessFeedBackIcon-f815ad00.js","assets/three.module-4d3d7244.js","assets/isPlainObject-c7a2f3aa.js","assets/Tabs-b626a07d.js","assets/index-aff699a3.js","assets/Switch-e11d5dcc.js","assets/FormControlLabel-5917b14f.js","assets/Typography-24872f4e.js"]).then(({BlueprintModal:e})=>({default:e}))),Le=r.lazy(()=>u(()=>import("./index-fd24e713.js"),["assets/index-fd24e713.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-f815ad00.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Se=r.lazy(()=>u(()=>import("./index-2d647db4.js"),["assets/index-2d647db4.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-d4805dcf.js","assets/index-2dcd0c32.js","assets/index-0bbbc174.js","assets/index-8bd8a98e.js","assets/Stack-cb097f41.js","assets/createSvgIcon-c1a81f08.js","assets/TextareaAutosize-1dc3dfd7.js","assets/FormControlLabel-5917b14f.js","assets/Typography-24872f4e.js","assets/Switch-e11d5dcc.js","assets/ClipLoader-440bdd9c.js"]).then(({CreateBountyModal:e})=>({default:e}))),Ie=r.lazy(()=>u(()=>import("./index-f70e6238.js").then(e=>e.ch),["assets/index-f70e6238.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Pe=r.lazy(()=>u(()=>import("./index-41a452d9.js").then(e=>e.i),["assets/index-41a452d9.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-2dcd0c32.js","assets/SoundIcon-e57cad52.js"]).then(({BriefDescription:e})=>({default:e}))),Ne=r.lazy(()=>u(()=>import("./index-e3002c09.js"),["assets/index-e3002c09.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-86448236.js","assets/index-2dcd0c32.js","assets/index-d4805dcf.js","assets/index-0bbbc174.js","assets/index-8bd8a98e.js","assets/Stack-cb097f41.js","assets/createSvgIcon-c1a81f08.js","assets/TextareaAutosize-1dc3dfd7.js","assets/FormControlLabel-5917b14f.js","assets/Typography-24872f4e.js","assets/Switch-e11d5dcc.js","assets/ClipLoader-440bdd9c.js"]).then(({NodeActionModal:e})=>({default:e}))),Re=()=>t.jsxs(t.Fragment,{children:[t.jsx(we,{}),t.jsx(be,{}),t.jsx(_e,{}),t.jsx(ke,{}),t.jsx(ve,{}),t.jsx(je,{}),t.jsx(Ee,{}),t.jsx(Ae,{}),t.jsx(ze,{}),t.jsx(Te,{}),t.jsx(Le,{}),t.jsx(Se,{}),t.jsx(Ie,{}),t.jsx(Pe,{}),t.jsx(Ne,{})]}),Me=()=>{const[e,n]=r.useState(null),{runningProjectMessages:a}=w(d=>d),s=d=>{n(d.currentTarget)},l=()=>{n(null)},g=!!e,m=g?"simple-popover":void 0;return a.length?t.jsxs(Oe,{ml:8,children:[t.jsx(Ce,{onClick:s,children:t.jsxs(de,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ee,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(De,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:l,open:g,children:[t.jsx(J,{onClick:l,children:t.jsx(te,{})}),t.jsx(Be,{p:16,children:a.map(d=>t.jsx("p",{className:"item",children:d},d))})]})]}):null},Oe=h(p).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Be=h(p)`
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
`,Ce=h(p).attrs({align:"center",direction:"row"})`
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
`,J=h.div`
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
`,De=h(le)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${i.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${J} {
        display: flex;
      }
    }
  }
`;h(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})``;h(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-end"})``;h(p).attrs({align:"center",direction:"row",grow:1})`
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
`;const $e=()=>{const e=I(d=>d.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:a}=Y(),{abortFetchData:s,resetGraph:l}=w(d=>d),g=ne();if(!e)return null;const m=()=>{a(null),s(),l(),n(),g("/")};return t.jsxs(Ve,{children:[t.jsxs(qe,{onClick:m,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(S,{className:"title",color:"white",children:e.title})}),t.jsx(S,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(Me,{})]})},Ve=h(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,qe=h.div`
  ${oe.smallOnly`
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
`,Fe=620,Qe=()=>{const e=`(max-width: ${Fe}px)`,[n,a]=r.useState(()=>window.matchMedia(e).matches);return r.useEffect(()=>{const s=window.matchMedia(e);a(s.matches);const l=()=>{a(s.matches)};return window.addEventListener("resize",l),()=>s.removeEventListener("change",l)},[e]),n},Ge=()=>{const[e,n]=r.useState(!0),a=Qe();r.useEffect(()=>{n(!0)},[a]);const s=()=>{n(!1)};return a&&e?t.jsxs(Ue,{align:"center",direction:"column",justify:"center",onClick:s,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(p,{align:"center",direction:"column",justify:"center",children:[t.jsx(L,{children:"Second Brain is currently"}),t.jsx(L,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(L,{children:"Mobile support coming soon."})]}),t.jsx(re,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Ue=h(p)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,L=h(S)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,We=h(se)`
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
`,He=h(p)`
  height: 100%;
  width: 100%;
  background-color: ${i.black};
`,Ye=h(p)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${i.white};
  font-size: 12px;
  opacity: 0.5;
`,Je=r.lazy(()=>u(()=>import("./index-69eb6f2e.js"),["assets/index-69eb6f2e.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-95068c10.js","assets/index-2dcd0c32.js"]).then(({MainToolbar:e})=>({default:e}))),Ke=r.lazy(()=>u(()=>import("./index-0d01a561.js"),["assets/index-0d01a561.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/index-3f801199.js","assets/VisibilityOn-71b768cb.js","assets/SourcesTableIcon-95068c10.js","assets/VolumeIcon-250d1bd3.js","assets/NodeCircleIcon-acdcb155.js","assets/index-2dcd0c32.js","assets/CheckIcon-74430a26.js","assets/DeleteNodeIcon-895367d7.js","assets/EditNodeIcon-979f9d87.js","assets/SearchIcon-d4153698.js","assets/SoundIcon-e57cad52.js","assets/SucessFeedBackIcon-f815ad00.js","assets/three.module-4d3d7244.js","assets/TextareaAutosize-1dc3dfd7.js","assets/index-8bd8a98e.js","assets/index-d5c762d5.js","assets/index-86448236.js","assets/ClipLoader-440bdd9c.js"]).then(({Universe:e})=>({default:e}))),Xe=r.lazy(()=>u(()=>import("./index-4a928f22.js").then(e=>e.i),["assets/index-4a928f22.js","assets/index-f70e6238.js","assets/index-b4d03b7b.css","assets/VolumeIcon-250d1bd3.js","assets/index-2dcd0c32.js","assets/SearchIcon-d4153698.js","assets/ClipLoader-440bdd9c.js","assets/Skeleton-526dea12.js","assets/Stack-cb097f41.js","assets/index-41a452d9.js","assets/SoundIcon-e57cad52.js","assets/index-8bd8a98e.js","assets/CheckIcon-74430a26.js","assets/FormControlLabel-5917b14f.js","assets/Typography-24872f4e.js","assets/createSvgIcon-c1a81f08.js","assets/isPlainObject-c7a2f3aa.js","assets/index-d5c762d5.js"]).then(({SideBar:e})=>({default:e}))),ot=()=>{const[e]=W(),n=e.get("q"),{setNodeCount:a}=H(o=>o),s=r.useRef(null),l=r.useRef(null);pe();const{setCurrentSearch:g,setRelevanceSelected:m,setTranscriptOpen:d,universeQuestionIsOpen:j}=I(o=>o),v=xe(o=>o.setTeachMeAnswer),{setCategoryFilter:E,addNewNode:c,splashDataLoading:A,runningProjectId:x,setRunningProjectMessages:P,isFetching:N}=w(o=>o),{setAiSummaryAnswer:y,getKeyExist:R,aiRefId:z}=Y(o=>o),[M,k]=ie(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),f=fe(),O=ae({mode:"onChange"}),{setValue:B}=O;r.useEffect(()=>{B("search",n??""),d(!1),m(!1),g(n??""),v(""),E(null)},[n,E,g,m,v,d,B]);const C=r.useCallback(()=>{a("INCREMENT")},[a]),D=r.useCallback(o=>{N||(s.current||(s.current={nodes:[],edges:[]}),o.edges&&s.current.edges.push(...o.edges),o.nodes&&s.current.nodes.push(...o.nodes),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{if(s.current){const{nodes:_,edges:b}=s.current,T={nodes:_,edges:b};s.current={nodes:[],edges:[]},c(T)}},3e3))},[c,N]),$=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{answer:o.answer,answerLoading:!1})},[y]),V=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{audio_en:o.audio_EN})},[y]),q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{questions:o.relevant_questions.map(_=>_.question),questionsLoading:!1})},[y]),F=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{sources:o.sources.map(_=>_.ref_id),sourcesLoading:!1})},[y]),Q=r.useCallback(o=>{o.question&&R(z)&&y(z,{answerLoading:!1,entities:o.entities})},[y,R,z]);return r.useEffect(()=>(f&&(f.connect(),f.on("connect_error",o=>{console.error("Socket connection error:",o)}),f.on("newnode",C),k&&f.on("extractedentitieshook",Q),k&&f.on("askquestionhook",$),k&&f.on("relevantquestionshook",q),k&&f.on("answersourceshook",F),M&&f.on("new_node_created",D),k&&f.on("answeraudiohook",V)),()=>{f&&f.off()}),[f,C,D,M,$,k,q,F,Q,V]),r.useEffect(()=>{if(!x)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const b={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:x})};o.send(JSON.stringify(b))},o.onmessage=_=>{var G;const b=JSON.parse(_.data);if(console.log(b),b.type==="ping")return;const T=(G=b==null?void 0:b.message)==null?void 0:G.message;T&&P(T)},o.onerror=_=>{console.error("WebSocket error:",_)}},[x,P]),r.useEffect(()=>{if(x)try{f==null||f.emit("update_project_id",{id:x})}catch(o){console.error(o)}},[x,f]),t.jsxs(t.Fragment,{children:[t.jsx(ge,{}),t.jsx(Ge,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(He,{direction:"row",children:[t.jsxs(ce,{...O,children:[t.jsx(Je,{}),!j&&t.jsx(Xe,{}),t.jsx(Ke,{}),t.jsx(ue,{}),t.jsx($e,{}),t.jsxs(Ye,{children:["v",ye]}),t.jsx(he,{})]}),t.jsx(Re,{}),t.jsx(We,{})]})})]})};export{ot as App};
