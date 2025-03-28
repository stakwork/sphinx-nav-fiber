import{W as Z,u as Y,r,a as J,b as P,c as T,d as H,f as ee,S as te,e as oe,_ as u,j as t,s as h,g as i,F as p,I as ne,C as re,m as se,h as K,i as ie,T as I,B as ae,Q as ce,k as le,l as de,n as ue}from"./index-bc2c154d.js";import{P as he,T as fe,O as pe,A as ge}from"./index-d0a13267.js";const me=Z`
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
`,xe=()=>{const[e]=Y(),n=e.get("node"),a=r.useRef(!0),{setBudget:s}=J(g=>g),{setSidebarOpen:c,currentSearch:f}=P(g=>g),{fetchData:m,setAbortRequests:l,resetData:w,addNewNode:k,finishLoading:v}=T(g=>g);r.useEffect(()=>{if(a.current){const g=async()=>{f||w(),await m(s,l),c(!0),a.current=!1,f&&await H(s)},A=async()=>{const _=await ee(n||"",0,5);v(),a.current=!1,_&&k({nodes:_.nodes,edges:_.edges})};if(n){A();return}g()}},[n,f,m,s,l,c,w,a,v,k]),r.useEffect(()=>{if(!a.current){const g=async()=>{await m(s,l),c(!0),f&&await H(s)};w(),g()}},[f,m,s,l,c,w,a])},_e=()=>{const e=r.useContext(te);return e==null?void 0:e.socket},ye={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},be=oe(e=>({...ye,setAskedQuestion:n=>e(a=>({askedQuestions:[...a.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var a,s,c,f;(a=n==null?void 0:n.instagraph)!=null&&a.edges&&((s=n==null?void 0:n.instagraph)!=null&&s.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=n==null?void 0:n.instagraph)==null?void 0:c.edges,nodes:(f=n==null?void 0:n.instagraph)==null?void 0:f.nodes}})}})),we="0.1.106",je=r.lazy(()=>u(()=>import("./index-2330c473.js"),["assets/index-2330c473.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-d0a13267.js","assets/ClipLoader-a9e99782.js","assets/Tabs-ed1e3716.js","assets/createSvgIcon-f8254f33.js"]).then(({SettingsModal:e})=>({default:e}))),ke=r.lazy(()=>u(()=>import("./index-2e581b13.js"),["assets/index-2e581b13.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/CheckIcon-3c6737d8.js","assets/index-717b1eb9.js","assets/ClipLoader-a9e99782.js"]).then(({AddContentModal:e})=>({default:e}))),ve=r.lazy(()=>u(()=>import("./index-8efca61f.js"),["assets/index-8efca61f.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-d0a13267.js","assets/CheckIcon-3c6737d8.js","assets/index-717b1eb9.js","assets/ClipLoader-a9e99782.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/index-c0aa80f0.js","assets/index-88105fdf.js","assets/SourcesTableIcon-408d51c5.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/SoundIcon-b8477c29.js","assets/SucessFeedBackIcon-0950df57.js","assets/Stack-842fbdf8.js","assets/clsx-f0455c2d.js","assets/createSvgIcon-f8254f33.js","assets/TextareaAutosize-6618e502.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),Ee=r.lazy(()=>u(()=>import("./index-e45d2285.js"),["assets/index-e45d2285.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-88105fdf.js","assets/SourcesTableIcon-408d51c5.js","assets/index-d0a13267.js","assets/CheckIcon-3c6737d8.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/SoundIcon-b8477c29.js","assets/SucessFeedBackIcon-0950df57.js","assets/TableRow-213e6469.js","assets/constants-57e003b9.js","assets/ClipLoader-a9e99782.js","assets/index-c0aa80f0.js","assets/Stack-842fbdf8.js","assets/clsx-f0455c2d.js","assets/createSvgIcon-f8254f33.js","assets/TextareaAutosize-6618e502.js","assets/index-afdfc711.js","assets/Typography-1bb3944d.js","assets/Tabs-ed1e3716.js"]).then(({SourcesTableModal:e})=>({default:e}))),Te=r.lazy(()=>u(()=>import("./index-f35b9a50.js"),["assets/index-f35b9a50.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-d0a13267.js","assets/index-88105fdf.js","assets/SourcesTableIcon-408d51c5.js","assets/CheckIcon-3c6737d8.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/SoundIcon-b8477c29.js","assets/SucessFeedBackIcon-0950df57.js","assets/Skeleton-d4b73b63.js","assets/ClipLoader-a9e99782.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Ae=r.lazy(()=>u(()=>import("./index-d11124f3.js"),["assets/index-d11124f3.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-d0a13267.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/Skeleton-d4b73b63.js","assets/ClipLoader-a9e99782.js"]).then(({RemoveNodeModal:e})=>({default:e}))),ze=r.lazy(()=>u(()=>import("./index-2e5f7804.js"),["assets/index-2e5f7804.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-d0a13267.js","assets/index-88105fdf.js","assets/SourcesTableIcon-408d51c5.js","assets/CheckIcon-3c6737d8.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/SoundIcon-b8477c29.js","assets/SucessFeedBackIcon-0950df57.js","assets/index-c0aa80f0.js","assets/Stack-842fbdf8.js","assets/clsx-f0455c2d.js","assets/createSvgIcon-f8254f33.js","assets/TextareaAutosize-6618e502.js","assets/constants-57e003b9.js","assets/ClipLoader-a9e99782.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Se=r.lazy(()=>u(()=>import("./index-54685ea3.js"),["assets/index-54685ea3.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-d0a13267.js","assets/index-afdfc711.js","assets/constants-57e003b9.js","assets/index-88105fdf.js","assets/SourcesTableIcon-408d51c5.js","assets/CheckIcon-3c6737d8.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/SoundIcon-b8477c29.js","assets/SucessFeedBackIcon-0950df57.js","assets/index-c0aa80f0.js","assets/Stack-842fbdf8.js","assets/clsx-f0455c2d.js","assets/createSvgIcon-f8254f33.js","assets/TextareaAutosize-6618e502.js","assets/ClipLoader-a9e99782.js"]).then(({MergeNodeModal:e})=>({default:e}))),Le=r.lazy(()=>u(()=>import("./index-581b2151.js"),["assets/index-581b2151.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/ClipLoader-a9e99782.js","assets/index-d0a13267.js","assets/index-c0aa80f0.js","assets/index-88105fdf.js","assets/SourcesTableIcon-408d51c5.js","assets/CheckIcon-3c6737d8.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/SoundIcon-b8477c29.js","assets/SucessFeedBackIcon-0950df57.js","assets/Stack-842fbdf8.js","assets/clsx-f0455c2d.js","assets/createSvgIcon-f8254f33.js","assets/TextareaAutosize-6618e502.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Ie=r.lazy(()=>u(()=>import("./index-c2c4b82c.js"),["assets/index-c2c4b82c.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-c0aa80f0.js","assets/index-88105fdf.js","assets/SourcesTableIcon-408d51c5.js","assets/index-d0a13267.js","assets/CheckIcon-3c6737d8.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/SoundIcon-b8477c29.js","assets/SucessFeedBackIcon-0950df57.js","assets/Stack-842fbdf8.js","assets/clsx-f0455c2d.js","assets/createSvgIcon-f8254f33.js","assets/TextareaAutosize-6618e502.js","assets/ClipLoader-a9e99782.js","assets/isPlainObject-1d4550fa.js","assets/index-8ff23998.js","assets/Tabs-ed1e3716.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/Switch-4e3006b2.js","assets/FormControlLabel-4dd3b5ea.js","assets/Typography-1bb3944d.js","assets/index-48bb3873.js"]).then(({BlueprintModal:e})=>({default:e}))),Pe=r.lazy(()=>u(()=>import("./index-7cd69325.js"),["assets/index-7cd69325.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-0950df57.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Ne=r.lazy(()=>u(()=>import("./index-8b73db73.js"),["assets/index-8b73db73.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-f85e78c4.js","assets/index-d0a13267.js","assets/index-c0aa80f0.js","assets/index-88105fdf.js","assets/SourcesTableIcon-408d51c5.js","assets/CheckIcon-3c6737d8.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/SoundIcon-b8477c29.js","assets/SucessFeedBackIcon-0950df57.js","assets/Stack-842fbdf8.js","assets/clsx-f0455c2d.js","assets/createSvgIcon-f8254f33.js","assets/TextareaAutosize-6618e502.js","assets/FormControlLabel-4dd3b5ea.js","assets/Typography-1bb3944d.js","assets/Switch-4e3006b2.js","assets/ClipLoader-a9e99782.js"]).then(({CreateBountyModal:e})=>({default:e}))),Re=r.lazy(()=>u(()=>import("./index-bc2c154d.js").then(e=>e.cj),["assets/index-bc2c154d.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Me=r.lazy(()=>u(()=>import("./index-b0b48e31.js").then(e=>e.i),["assets/index-b0b48e31.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-d0a13267.js","assets/SoundIcon-b8477c29.js"]).then(({BriefDescription:e})=>({default:e}))),Oe=r.lazy(()=>u(()=>import("./index-2dd5baa4.js"),["assets/index-2dd5baa4.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-3cb560d2.js","assets/index-d0a13267.js","assets/index-f85e78c4.js","assets/index-c0aa80f0.js","assets/index-88105fdf.js","assets/SourcesTableIcon-408d51c5.js","assets/CheckIcon-3c6737d8.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/SoundIcon-b8477c29.js","assets/SucessFeedBackIcon-0950df57.js","assets/Stack-842fbdf8.js","assets/clsx-f0455c2d.js","assets/createSvgIcon-f8254f33.js","assets/TextareaAutosize-6618e502.js","assets/FormControlLabel-4dd3b5ea.js","assets/Typography-1bb3944d.js","assets/Switch-4e3006b2.js","assets/ClipLoader-a9e99782.js"]).then(({NodeActionModal:e})=>({default:e}))),Be=()=>t.jsxs(t.Fragment,{children:[t.jsx(ve,{}),t.jsx(ke,{}),t.jsx(je,{}),t.jsx(Te,{}),t.jsx(Ae,{}),t.jsx(Ee,{}),t.jsx(ze,{}),t.jsx(Le,{}),t.jsx(Ie,{}),t.jsx(Se,{}),t.jsx(Pe,{}),t.jsx(Ne,{}),t.jsx(Re,{}),t.jsx(Me,{}),t.jsx(Oe,{})]}),Ce=()=>{const[e,n]=r.useState(null),{runningProjectMessages:a}=T(l=>l),s=l=>{n(l.currentTarget)},c=()=>{n(null)},f=!!e,m=f?"simple-popover":void 0;return a.length?t.jsxs($e,{ml:8,children:[t.jsx(Ve,{onClick:s,children:t.jsxs(fe,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ne,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(Fe,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:c,open:f,children:[t.jsx(X,{onClick:c,children:t.jsx(re,{})}),t.jsx(De,{p:16,children:a.map(l=>t.jsx("p",{className:"item",children:l},l))})]})]}):null},$e=h(p).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,De=h(p)`
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
`,Ve=h(p).attrs({align:"center",direction:"row"})`
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
`,X=h.div`
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
`,Fe=h(he)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${i.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${X} {
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
`;const qe=()=>{const e=P(l=>l.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:a}=K(),{abortFetchData:s,resetGraph:c}=T(l=>l),f=ie();if(!e)return null;const m=()=>{a(null),s(),c(),n(),f("/")};return t.jsxs(Qe,{children:[t.jsxs(Ge,{onClick:m,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(I,{className:"title",color:"white",children:e.title})}),t.jsx(I,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(Ce,{})]})},Qe=h(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Ge=h.div`
  ${se.smallOnly`
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
`,Ue=620,We=()=>{const e=`(max-width: ${Ue}px)`,[n,a]=r.useState(()=>window.matchMedia(e).matches);return r.useEffect(()=>{const s=window.matchMedia(e);a(s.matches);const c=()=>{a(s.matches)};return window.addEventListener("resize",c),()=>s.removeEventListener("change",c)},[e]),n},He=()=>{const[e,n]=r.useState(!0),a=We();r.useEffect(()=>{n(!0)},[a]);const s=()=>{n(!1)};return a&&e?t.jsxs(Ye,{align:"center",direction:"column",justify:"center",onClick:s,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(p,{align:"center",direction:"column",justify:"center",children:[t.jsx(L,{children:"Second Brain is currently"}),t.jsx(L,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(L,{children:"Mobile support coming soon."})]}),t.jsx(ae,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Ye=h(p)`
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
`,Je=h(ce)`
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
`,Ke=h(p)`
  height: 100%;
  width: 100%;
  background-color: ${i.black};
`,Xe=h(p)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${i.white};
  font-size: 12px;
  opacity: 0.5;
`,Ze=r.lazy(()=>u(()=>import("./index-75f3be46.js"),["assets/index-75f3be46.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-408d51c5.js","assets/index-d0a13267.js"]).then(({MainToolbar:e})=>({default:e}))),et=r.lazy(()=>u(()=>import("./index-c4d0a8df.js").then(e=>e.i),["assets/index-c4d0a8df.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-48bb3873.js","assets/three.module-4d3d7244.js","assets/index-8ff23998.js","assets/index-d0a13267.js","assets/index-88105fdf.js","assets/SourcesTableIcon-408d51c5.js","assets/CheckIcon-3c6737d8.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/SoundIcon-b8477c29.js","assets/SucessFeedBackIcon-0950df57.js","assets/TextareaAutosize-6618e502.js","assets/index-801a2f04.js","assets/index-3cb560d2.js","assets/ClipLoader-a9e99782.js","assets/clsx-f0455c2d.js"]).then(({Universe:e})=>({default:e}))),tt=r.lazy(()=>u(()=>import("./index-066e9283.js").then(e=>e.r),["assets/index-066e9283.js","assets/index-bc2c154d.js","assets/index-b4d03b7b.css","assets/index-88105fdf.js","assets/SourcesTableIcon-408d51c5.js","assets/index-d0a13267.js","assets/CheckIcon-3c6737d8.js","assets/DeleteNodeIcon-6f0ecb03.js","assets/SoundIcon-b8477c29.js","assets/SucessFeedBackIcon-0950df57.js","assets/ClipLoader-a9e99782.js","assets/Skeleton-d4b73b63.js","assets/index-b0b48e31.js","assets/Stack-842fbdf8.js","assets/clsx-f0455c2d.js","assets/FormControlLabel-4dd3b5ea.js","assets/Typography-1bb3944d.js","assets/createSvgIcon-f8254f33.js","assets/isPlainObject-1d4550fa.js","assets/index-8ff23998.js","assets/index-801a2f04.js"]).then(({SideBar:e})=>({default:e}))),rt=()=>{const[e]=Y(),n=e.get("q"),{setNodeCount:a}=J(o=>o),s=r.useRef(null),c=r.useRef(null);xe();const{setCurrentSearch:f,setRelevanceSelected:m,setTranscriptOpen:l,universeQuestionIsOpen:w}=P(o=>o),k=be(o=>o.setTeachMeAnswer),{setCategoryFilter:v,addNewNode:g,splashDataLoading:A,runningProjectId:_,setRunningProjectMessages:N,isFetching:R}=T(o=>o),{setAiSummaryAnswer:y,getKeyExist:M,aiRefId:z}=K(o=>o),[S,j]=le(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),d=_e(),O=de({mode:"onChange"}),{setValue:B}=O;r.useEffect(()=>{B("search",n??""),l(!1),m(!1),f(n??""),k(""),v(null)},[n,v,f,m,k,l,B]);const C=r.useCallback(()=>{a("INCREMENT")},[a]),$=r.useCallback(o=>{R||(s.current||(s.current={nodes:[],edges:[]}),o.edges&&s.current.edges.push(...o.edges),o.nodes&&s.current.nodes.push(...o.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(s.current){const{nodes:b,edges:x}=s.current,E={nodes:b,edges:x};s.current={nodes:[],edges:[]},g(E)}},3e3))},[g,R]),D=r.useCallback(o=>{console.log(o)},[]),V=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{answer:o.answer,answerLoading:!1})},[y]),F=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{audio_en:o.audio_EN})},[y]),q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{questions:o.relevant_questions.map(b=>b.question),questionsLoading:!1})},[y]),Q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{sources:o.sources.map(b=>b.ref_id),sourcesLoading:!1})},[y]),G=r.useCallback(o=>{o.question&&M(z)&&y(z,{answerLoading:!1,entities:o.entities})},[y,M,z]);return r.useEffect(()=>(d&&(d.connect(),d.on("connect_error",o=>{console.error("Socket connection error:",o)}),d.on("newnode",C),j&&d.on("extractedentitieshook",G),j&&d.on("askquestionhook",V),j&&d.on("relevantquestionshook",q),j&&d.on("answersourceshook",Q),S&&d.on("new_node_created",$),S&&d.on("node_updated",D),j&&d.on("answeraudiohook",F)),()=>{d&&d.off()}),[d,C,$,S,V,j,q,Q,G,F,D]),r.useEffect(()=>{if(!_)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const x={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:_})};o.send(JSON.stringify(x))},o.onmessage=b=>{var U;const x=JSON.parse(b.data);if(x.type==="ping")return;const E=x==null?void 0:x.message;if(E.type==="on_step_start"||E.type==="on_step_complete"){const W=(U=x==null?void 0:x.message)==null?void 0:U.message;W&&N(W)}},o.onerror=b=>{console.error("WebSocket error:",b)}},[_,N]),r.useEffect(()=>{if(_)try{d==null||d.emit("update_project_id",{id:_})}catch(o){console.error(o)}},[_,d]),t.jsxs(t.Fragment,{children:[t.jsx(me,{}),t.jsx(He,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(Ke,{direction:"row",children:[t.jsxs(ue,{...O,children:[t.jsx(Ze,{}),!w&&t.jsx(tt,{}),t.jsx(et,{}),t.jsx(pe,{}),t.jsx(qe,{}),t.jsxs(Xe,{children:["v",we]}),t.jsx(ge,{})]}),t.jsx(Be,{}),t.jsx(Je,{})]})})]})};export{rt as App};
