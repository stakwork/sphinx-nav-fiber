import{W as K,u as W,r,a as H,b as I,c as T,d as U,f as X,e as Z,_ as d,j as t,s as u,g as i,F as g,I as ee,C as te,m as oe,h as Y,i as ne,T as S,B as re,Q as se,k as ie,l as ae,n as ce}from"./index-4eba51ff.js";import{P as le,T as de,O as ue,A as he}from"./index-252d7cea.js";import{u as fe}from"./index-d508ce39.js";const ge=K`
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
`,pe=()=>{const[e]=W(),n=e.get("node"),a=r.useRef(!0),{setBudget:s}=H(p=>p),{setSidebarOpen:c,currentSearch:f}=I(p=>p),{fetchData:m,setAbortRequests:l,resetData:w,addNewNode:k,finishLoading:v}=T(p=>p);r.useEffect(()=>{if(a.current){const p=async()=>{f||w(),await m(s,l),c(!0),a.current=!1,f&&await U(s)},A=async()=>{const x=await X(n||"",0,5);v(),a.current=!1,x&&k({nodes:x.nodes,edges:x.edges})};if(n){A();return}p()}},[n,f,m,s,l,c,w,a,v,k]),r.useEffect(()=>{if(!a.current){const p=async()=>{await m(s,l),c(!0),f&&await U(s)};w(),p()}},[f,m,s,l,c,w,a])},me={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},xe=Z(e=>({...me,setAskedQuestion:n=>e(a=>({askedQuestions:[...a.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var a,s,c,f;(a=n==null?void 0:n.instagraph)!=null&&a.edges&&((s=n==null?void 0:n.instagraph)!=null&&s.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=n==null?void 0:n.instagraph)==null?void 0:c.edges,nodes:(f=n==null?void 0:n.instagraph)==null?void 0:f.nodes}})}})),ye="0.1.106",_e=r.lazy(()=>d(()=>import("./index-b63e4bc7.js"),["assets/index-b63e4bc7.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-252d7cea.js","assets/ClipLoader-c5e59754.js","assets/Tabs-c361fdd0.js","assets/createSvgIcon-3ff2cdf1.js"]).then(({SettingsModal:e})=>({default:e}))),be=r.lazy(()=>d(()=>import("./index-5be44548.js"),["assets/index-5be44548.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/CheckIcon-e2474ada.js","assets/index-717b1eb9.js","assets/ClipLoader-c5e59754.js"]).then(({AddContentModal:e})=>({default:e}))),we=r.lazy(()=>d(()=>import("./index-a7ad4c2b.js"),["assets/index-a7ad4c2b.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-252d7cea.js","assets/CheckIcon-e2474ada.js","assets/index-717b1eb9.js","assets/ClipLoader-c5e59754.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/index-1176a022.js","assets/index-fd26afd8.js","assets/Stack-bd548ab0.js","assets/createSvgIcon-3ff2cdf1.js","assets/TextareaAutosize-be7dae31.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),je=r.lazy(()=>d(()=>import("./index-18714a21.js"),["assets/index-18714a21.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/VisibilityOn-d2d25592.js","assets/SearchIcon-1eea1cd2.js","assets/constants-60ba8ac4.js","assets/index-252d7cea.js","assets/ClipLoader-c5e59754.js","assets/index-1176a022.js","assets/index-fd26afd8.js","assets/Stack-bd548ab0.js","assets/createSvgIcon-3ff2cdf1.js","assets/TextareaAutosize-be7dae31.js","assets/index-07f48d90.js","assets/NodeCircleIcon-00b1d9b6.js","assets/CheckIcon-e2474ada.js","assets/Typography-b2ab7b8a.js","assets/Tabs-c361fdd0.js"]).then(({SourcesTableModal:e})=>({default:e}))),ke=r.lazy(()=>d(()=>import("./index-d7a60ad9.js"),["assets/index-d7a60ad9.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-252d7cea.js","assets/EditNodeIcon-2f5e7968.js","assets/index-fd26afd8.js","assets/Skeleton-11c306b5.js","assets/ClipLoader-c5e59754.js"]).then(({EditNodeNameModal:e})=>({default:e}))),ve=r.lazy(()=>d(()=>import("./index-bb3a4d3b.js"),["assets/index-bb3a4d3b.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-252d7cea.js","assets/DeleteNodeIcon-8f50bf4e.js","assets/Skeleton-11c306b5.js","assets/ClipLoader-c5e59754.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ee=r.lazy(()=>d(()=>import("./index-c201b2c4.js"),["assets/index-c201b2c4.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-252d7cea.js","assets/NodeCircleIcon-00b1d9b6.js","assets/index-1176a022.js","assets/index-fd26afd8.js","assets/Stack-bd548ab0.js","assets/createSvgIcon-3ff2cdf1.js","assets/TextareaAutosize-be7dae31.js","assets/constants-60ba8ac4.js","assets/ClipLoader-c5e59754.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Te=r.lazy(()=>d(()=>import("./index-bc777022.js"),["assets/index-bc777022.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-252d7cea.js","assets/index-07f48d90.js","assets/constants-60ba8ac4.js","assets/NodeCircleIcon-00b1d9b6.js","assets/index-1176a022.js","assets/index-fd26afd8.js","assets/Stack-bd548ab0.js","assets/createSvgIcon-3ff2cdf1.js","assets/TextareaAutosize-be7dae31.js","assets/ClipLoader-c5e59754.js"]).then(({MergeNodeModal:e})=>({default:e}))),Ae=r.lazy(()=>d(()=>import("./index-4f18a052.js"),["assets/index-4f18a052.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/ClipLoader-c5e59754.js","assets/index-252d7cea.js","assets/index-1176a022.js","assets/index-fd26afd8.js","assets/Stack-bd548ab0.js","assets/createSvgIcon-3ff2cdf1.js","assets/TextareaAutosize-be7dae31.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),ze=r.lazy(()=>d(()=>import("./index-beb097db.js"),["assets/index-beb097db.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-1176a022.js","assets/index-fd26afd8.js","assets/Stack-bd548ab0.js","assets/index-252d7cea.js","assets/createSvgIcon-3ff2cdf1.js","assets/TextareaAutosize-be7dae31.js","assets/ClipLoader-c5e59754.js","assets/index-e5e93d94.js","assets/VisibilityOn-d2d25592.js","assets/SourcesTableIcon-ac992966.js","assets/VolumeIcon-5a7718d7.js","assets/NodeCircleIcon-00b1d9b6.js","assets/CheckIcon-e2474ada.js","assets/DeleteNodeIcon-8f50bf4e.js","assets/EditNodeIcon-2f5e7968.js","assets/SearchIcon-1eea1cd2.js","assets/SoundIcon-27783a34.js","assets/SucessFeedBackIcon-dd3ed035.js","assets/three.module-4d3d7244.js","assets/isPlainObject-1b527cbd.js","assets/Tabs-c361fdd0.js","assets/index-aff699a3.js","assets/Switch-5c3371e0.js","assets/FormControlLabel-1e5387ad.js","assets/Typography-b2ab7b8a.js"]).then(({BlueprintModal:e})=>({default:e}))),Le=r.lazy(()=>d(()=>import("./index-c34464d4.js"),["assets/index-c34464d4.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-dd3ed035.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Se=r.lazy(()=>d(()=>import("./index-30f5b374.js"),["assets/index-30f5b374.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-fe127e9a.js","assets/index-252d7cea.js","assets/index-1176a022.js","assets/index-fd26afd8.js","assets/Stack-bd548ab0.js","assets/createSvgIcon-3ff2cdf1.js","assets/TextareaAutosize-be7dae31.js","assets/FormControlLabel-1e5387ad.js","assets/Typography-b2ab7b8a.js","assets/Switch-5c3371e0.js","assets/ClipLoader-c5e59754.js"]).then(({CreateBountyModal:e})=>({default:e}))),Ie=r.lazy(()=>d(()=>import("./index-4eba51ff.js").then(e=>e.ch),["assets/index-4eba51ff.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Pe=r.lazy(()=>d(()=>import("./index-e92fa579.js").then(e=>e.i),["assets/index-e92fa579.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-252d7cea.js","assets/SoundIcon-27783a34.js"]).then(({BriefDescription:e})=>({default:e}))),Re=r.lazy(()=>d(()=>import("./index-78fd900f.js"),["assets/index-78fd900f.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-d32581d9.js","assets/index-252d7cea.js","assets/index-fe127e9a.js","assets/index-1176a022.js","assets/index-fd26afd8.js","assets/Stack-bd548ab0.js","assets/createSvgIcon-3ff2cdf1.js","assets/TextareaAutosize-be7dae31.js","assets/FormControlLabel-1e5387ad.js","assets/Typography-b2ab7b8a.js","assets/Switch-5c3371e0.js","assets/ClipLoader-c5e59754.js"]).then(({NodeActionModal:e})=>({default:e}))),Ne=()=>t.jsxs(t.Fragment,{children:[t.jsx(we,{}),t.jsx(be,{}),t.jsx(_e,{}),t.jsx(ke,{}),t.jsx(ve,{}),t.jsx(je,{}),t.jsx(Ee,{}),t.jsx(Ae,{}),t.jsx(ze,{}),t.jsx(Te,{}),t.jsx(Le,{}),t.jsx(Se,{}),t.jsx(Ie,{}),t.jsx(Pe,{}),t.jsx(Re,{})]}),Me=()=>{const[e,n]=r.useState(null),{runningProjectMessages:a}=T(l=>l),s=l=>{n(l.currentTarget)},c=()=>{n(null)},f=!!e,m=f?"simple-popover":void 0;return a.length?t.jsxs(Oe,{ml:8,children:[t.jsx(Ce,{onClick:s,children:t.jsxs(de,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ee,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs($e,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:c,open:f,children:[t.jsx(J,{onClick:c,children:t.jsx(te,{})}),t.jsx(Be,{p:16,children:a.map(l=>t.jsx("p",{className:"item",children:l},l))})]})]}):null},Oe=u(g).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Be=u(g)`
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
`,Ce=u(g).attrs({align:"center",direction:"row"})`
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
`,J=u.div`
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
`,$e=u(le)`
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
`;u(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})``;u(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-end"})``;u(g).attrs({align:"center",direction:"row",grow:1})`
  justify-content: between;
`;u(g).attrs({align:"center",direction:"row",justify:"flex-start"})`
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
`;u(g).attrs({align:"center",direction:"row"})`
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
`;u(g).attrs({align:"center",direction:"row"})`
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
`;const De=()=>{const e=I(l=>l.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:a}=Y(),{abortFetchData:s,resetGraph:c}=T(l=>l),f=ne();if(!e)return null;const m=()=>{a(null),s(),c(),n(),f("/")};return t.jsxs(Ve,{children:[t.jsxs(Fe,{onClick:m,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(S,{className:"title",color:"white",children:e.title})}),t.jsx(S,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(Me,{})]})},Ve=u(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Fe=u.div`
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
`,qe=620,Qe=()=>{const e=`(max-width: ${qe}px)`,[n,a]=r.useState(()=>window.matchMedia(e).matches);return r.useEffect(()=>{const s=window.matchMedia(e);a(s.matches);const c=()=>{a(s.matches)};return window.addEventListener("resize",c),()=>s.removeEventListener("change",c)},[e]),n},Ge=()=>{const[e,n]=r.useState(!0),a=Qe();r.useEffect(()=>{n(!0)},[a]);const s=()=>{n(!1)};return a&&e?t.jsxs(Ue,{align:"center",direction:"column",justify:"center",onClick:s,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(g,{align:"center",direction:"column",justify:"center",children:[t.jsx(L,{children:"Second Brain is currently"}),t.jsx(L,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(L,{children:"Mobile support coming soon."})]}),t.jsx(re,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Ue=u(g)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,L=u(S)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,We=u(se)`
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
`,He=u(g)`
  height: 100%;
  width: 100%;
  background-color: ${i.black};
`,Ye=u(g)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${i.white};
  font-size: 12px;
  opacity: 0.5;
`,Je=r.lazy(()=>d(()=>import("./index-cb46b713.js"),["assets/index-cb46b713.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-ac992966.js","assets/index-252d7cea.js"]).then(({MainToolbar:e})=>({default:e}))),Ke=r.lazy(()=>d(()=>import("./index-3ccba952.js").then(e=>e.i),["assets/index-3ccba952.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/index-e5e93d94.js","assets/VisibilityOn-d2d25592.js","assets/SourcesTableIcon-ac992966.js","assets/VolumeIcon-5a7718d7.js","assets/NodeCircleIcon-00b1d9b6.js","assets/index-252d7cea.js","assets/CheckIcon-e2474ada.js","assets/DeleteNodeIcon-8f50bf4e.js","assets/EditNodeIcon-2f5e7968.js","assets/SearchIcon-1eea1cd2.js","assets/SoundIcon-27783a34.js","assets/SucessFeedBackIcon-dd3ed035.js","assets/three.module-4d3d7244.js","assets/TextareaAutosize-be7dae31.js","assets/index-fd26afd8.js","assets/index-e843147c.js","assets/index-d32581d9.js","assets/ClipLoader-c5e59754.js"]).then(({Universe:e})=>({default:e}))),Xe=r.lazy(()=>d(()=>import("./index-0e27f5ca.js").then(e=>e.i),["assets/index-0e27f5ca.js","assets/index-4eba51ff.js","assets/index-b4d03b7b.css","assets/VolumeIcon-5a7718d7.js","assets/index-252d7cea.js","assets/SearchIcon-1eea1cd2.js","assets/ClipLoader-c5e59754.js","assets/Skeleton-11c306b5.js","assets/Stack-bd548ab0.js","assets/index-e92fa579.js","assets/SoundIcon-27783a34.js","assets/index-fd26afd8.js","assets/CheckIcon-e2474ada.js","assets/FormControlLabel-1e5387ad.js","assets/Typography-b2ab7b8a.js","assets/createSvgIcon-3ff2cdf1.js","assets/isPlainObject-1b527cbd.js","assets/index-e843147c.js"]).then(({SideBar:e})=>({default:e}))),ot=()=>{const[e]=W(),n=e.get("q"),{setNodeCount:a}=H(o=>o),s=r.useRef(null),c=r.useRef(null);pe();const{setCurrentSearch:f,setRelevanceSelected:m,setTranscriptOpen:l,universeQuestionIsOpen:w}=I(o=>o),k=xe(o=>o.setTeachMeAnswer),{setCategoryFilter:v,addNewNode:p,splashDataLoading:A,runningProjectId:x,setRunningProjectMessages:P,isFetching:R}=T(o=>o),{setAiSummaryAnswer:y,getKeyExist:N,aiRefId:z}=Y(o=>o),[M,j]=ie(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),h=fe(),O=ae({mode:"onChange"}),{setValue:B}=O;r.useEffect(()=>{B("search",n??""),l(!1),m(!1),f(n??""),k(""),v(null)},[n,v,f,m,k,l,B]);const C=r.useCallback(()=>{a("INCREMENT")},[a]),$=r.useCallback(o=>{R||(s.current||(s.current={nodes:[],edges:[]}),o.edges&&s.current.edges.push(...o.edges),o.nodes&&s.current.nodes.push(...o.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(s.current){const{nodes:_,edges:b}=s.current,E={nodes:_,edges:b};s.current={nodes:[],edges:[]},p(E)}},3e3))},[p,R]),D=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{answer:o.answer,answerLoading:!1})},[y]),V=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{audio_en:o.audio_EN})},[y]),F=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{questions:o.relevant_questions.map(_=>_.question),questionsLoading:!1})},[y]),q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{sources:o.sources.map(_=>_.ref_id),sourcesLoading:!1})},[y]),Q=r.useCallback(o=>{o.question&&N(z)&&y(z,{answerLoading:!1,entities:o.entities})},[y,N,z]);return r.useEffect(()=>(h&&(h.connect(),h.on("connect_error",o=>{console.error("Socket connection error:",o)}),h.on("newnode",C),j&&h.on("extractedentitieshook",Q),j&&h.on("askquestionhook",D),j&&h.on("relevantquestionshook",F),j&&h.on("answersourceshook",q),M&&h.on("new_node_created",$),j&&h.on("answeraudiohook",V)),()=>{h&&h.off()}),[h,C,$,M,D,j,F,q,Q,V]),r.useEffect(()=>{if(!x)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const b={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:x})};o.send(JSON.stringify(b))},o.onmessage=_=>{var G;const b=JSON.parse(_.data);if(console.log(b),b.type==="ping")return;const E=(G=b==null?void 0:b.message)==null?void 0:G.message;E&&P(E)},o.onerror=_=>{console.error("WebSocket error:",_)}},[x,P]),r.useEffect(()=>{if(x)try{h==null||h.emit("update_project_id",{id:x})}catch(o){console.error(o)}},[x,h]),t.jsxs(t.Fragment,{children:[t.jsx(ge,{}),t.jsx(Ge,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(He,{direction:"row",children:[t.jsxs(ce,{...O,children:[t.jsx(Je,{}),!w&&t.jsx(Xe,{}),t.jsx(Ke,{}),t.jsx(ue,{}),t.jsx(De,{}),t.jsxs(Ye,{children:["v",ye]}),t.jsx(he,{})]}),t.jsx(Ne,{}),t.jsx(We,{})]})})]})};export{ot as App};
