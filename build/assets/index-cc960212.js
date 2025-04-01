import{W as Z,u as Y,r,a as J,b as P,c as T,d as H,f as ee,S as te,e as oe,_ as u,j as t,s as h,g as i,F as p,I as ne,C as re,m as se,h as K,i as ie,T as I,B as ae,Q as ce,k as le,l as de,n as ue}from"./index-042300e8.js";import{P as he,T as fe,O as pe,A as ge}from"./index-c359d33b.js";const me=Z`
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
`,xe=()=>{const[e]=Y(),n=e.get("node"),a=r.useRef(!0),{setBudget:s}=J(g=>g),{setSidebarOpen:c,currentSearch:f}=P(g=>g),{fetchData:m,setAbortRequests:l,resetData:w,addNewNode:k,finishLoading:v}=T(g=>g);r.useEffect(()=>{if(a.current){const g=async()=>{f||w(),await m(s,l),c(!0),a.current=!1,f&&await H(s)},A=async()=>{const _=await ee(n||"",0,5);v(),a.current=!1,_&&k({nodes:_.nodes,edges:_.edges})};if(n){A();return}g()}},[n,f,m,s,l,c,w,a,v,k]),r.useEffect(()=>{if(!a.current){const g=async()=>{await m(s,l),c(!0),f&&await H(s)};w(),g()}},[f,m,s,l,c,w,a])},_e=()=>{const e=r.useContext(te);return e==null?void 0:e.socket},ye={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},be=oe(e=>({...ye,setAskedQuestion:n=>e(a=>({askedQuestions:[...a.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var a,s,c,f;(a=n==null?void 0:n.instagraph)!=null&&a.edges&&((s=n==null?void 0:n.instagraph)!=null&&s.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=n==null?void 0:n.instagraph)==null?void 0:c.edges,nodes:(f=n==null?void 0:n.instagraph)==null?void 0:f.nodes}})}})),we="0.1.106",je=r.lazy(()=>u(()=>import("./index-06ff655e.js"),["assets/index-06ff655e.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-c359d33b.js","assets/ClipLoader-8d568c68.js","assets/Tabs-9ec2a124.js","assets/createSvgIcon-219a298d.js"]).then(({SettingsModal:e})=>({default:e}))),ke=r.lazy(()=>u(()=>import("./index-4f95c497.js"),["assets/index-4f95c497.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/CheckIcon-d38df98b.js","assets/index-717b1eb9.js","assets/ClipLoader-8d568c68.js"]).then(({AddContentModal:e})=>({default:e}))),ve=r.lazy(()=>u(()=>import("./index-12019d4b.js"),["assets/index-12019d4b.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-c359d33b.js","assets/CheckIcon-d38df98b.js","assets/index-717b1eb9.js","assets/ClipLoader-8d568c68.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/index-a6bf30a8.js","assets/index-f91efa52.js","assets/SourcesTableIcon-3e95cc08.js","assets/DeleteNodeIcon-8fceabfe.js","assets/SoundIcon-28291abe.js","assets/SucessFeedBackIcon-8c59e050.js","assets/Stack-cc5b2d14.js","assets/clsx-b6a48541.js","assets/createSvgIcon-219a298d.js","assets/TextareaAutosize-79125955.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),Ee=r.lazy(()=>u(()=>import("./index-840879b4.js"),["assets/index-840879b4.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-f91efa52.js","assets/SourcesTableIcon-3e95cc08.js","assets/index-c359d33b.js","assets/CheckIcon-d38df98b.js","assets/DeleteNodeIcon-8fceabfe.js","assets/SoundIcon-28291abe.js","assets/SucessFeedBackIcon-8c59e050.js","assets/TableRow-1ca3c4ea.js","assets/constants-62631875.js","assets/ClipLoader-8d568c68.js","assets/index-a6bf30a8.js","assets/Stack-cc5b2d14.js","assets/clsx-b6a48541.js","assets/createSvgIcon-219a298d.js","assets/TextareaAutosize-79125955.js","assets/index-bf7061dc.js","assets/Typography-5e362a3e.js","assets/Tabs-9ec2a124.js"]).then(({SourcesTableModal:e})=>({default:e}))),Te=r.lazy(()=>u(()=>import("./index-1d10a28f.js"),["assets/index-1d10a28f.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-c359d33b.js","assets/index-f91efa52.js","assets/SourcesTableIcon-3e95cc08.js","assets/CheckIcon-d38df98b.js","assets/DeleteNodeIcon-8fceabfe.js","assets/SoundIcon-28291abe.js","assets/SucessFeedBackIcon-8c59e050.js","assets/Skeleton-23c44d7c.js","assets/ClipLoader-8d568c68.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Ae=r.lazy(()=>u(()=>import("./index-2b869daf.js"),["assets/index-2b869daf.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-c359d33b.js","assets/DeleteNodeIcon-8fceabfe.js","assets/Skeleton-23c44d7c.js","assets/ClipLoader-8d568c68.js"]).then(({RemoveNodeModal:e})=>({default:e}))),ze=r.lazy(()=>u(()=>import("./index-a18d001f.js"),["assets/index-a18d001f.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-c359d33b.js","assets/index-f91efa52.js","assets/SourcesTableIcon-3e95cc08.js","assets/CheckIcon-d38df98b.js","assets/DeleteNodeIcon-8fceabfe.js","assets/SoundIcon-28291abe.js","assets/SucessFeedBackIcon-8c59e050.js","assets/index-a6bf30a8.js","assets/Stack-cc5b2d14.js","assets/clsx-b6a48541.js","assets/createSvgIcon-219a298d.js","assets/TextareaAutosize-79125955.js","assets/constants-62631875.js","assets/ClipLoader-8d568c68.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Se=r.lazy(()=>u(()=>import("./index-9946143e.js"),["assets/index-9946143e.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-c359d33b.js","assets/index-bf7061dc.js","assets/constants-62631875.js","assets/index-f91efa52.js","assets/SourcesTableIcon-3e95cc08.js","assets/CheckIcon-d38df98b.js","assets/DeleteNodeIcon-8fceabfe.js","assets/SoundIcon-28291abe.js","assets/SucessFeedBackIcon-8c59e050.js","assets/index-a6bf30a8.js","assets/Stack-cc5b2d14.js","assets/clsx-b6a48541.js","assets/createSvgIcon-219a298d.js","assets/TextareaAutosize-79125955.js","assets/ClipLoader-8d568c68.js"]).then(({MergeNodeModal:e})=>({default:e}))),Le=r.lazy(()=>u(()=>import("./index-87fa0745.js"),["assets/index-87fa0745.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/ClipLoader-8d568c68.js","assets/index-c359d33b.js","assets/index-a6bf30a8.js","assets/index-f91efa52.js","assets/SourcesTableIcon-3e95cc08.js","assets/CheckIcon-d38df98b.js","assets/DeleteNodeIcon-8fceabfe.js","assets/SoundIcon-28291abe.js","assets/SucessFeedBackIcon-8c59e050.js","assets/Stack-cc5b2d14.js","assets/clsx-b6a48541.js","assets/createSvgIcon-219a298d.js","assets/TextareaAutosize-79125955.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Ie=r.lazy(()=>u(()=>import("./index-0140df3d.js"),["assets/index-0140df3d.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-a6bf30a8.js","assets/index-f91efa52.js","assets/SourcesTableIcon-3e95cc08.js","assets/index-c359d33b.js","assets/CheckIcon-d38df98b.js","assets/DeleteNodeIcon-8fceabfe.js","assets/SoundIcon-28291abe.js","assets/SucessFeedBackIcon-8c59e050.js","assets/Stack-cc5b2d14.js","assets/clsx-b6a48541.js","assets/createSvgIcon-219a298d.js","assets/TextareaAutosize-79125955.js","assets/ClipLoader-8d568c68.js","assets/isPlainObject-c279c9f3.js","assets/index-ee01e419.js","assets/Tabs-9ec2a124.js","assets/index-aff699a3.js","assets/three.module-4d3d7244.js","assets/Switch-97a4e9b0.js","assets/FormControlLabel-63b449ea.js","assets/Typography-5e362a3e.js","assets/index-49979a9c.js"]).then(({BlueprintModal:e})=>({default:e}))),Pe=r.lazy(()=>u(()=>import("./index-29a74b91.js"),["assets/index-29a74b91.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-8c59e050.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Ne=r.lazy(()=>u(()=>import("./index-feb4abf2.js"),["assets/index-feb4abf2.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-4ddf8643.js","assets/index-c359d33b.js","assets/index-a6bf30a8.js","assets/index-f91efa52.js","assets/SourcesTableIcon-3e95cc08.js","assets/CheckIcon-d38df98b.js","assets/DeleteNodeIcon-8fceabfe.js","assets/SoundIcon-28291abe.js","assets/SucessFeedBackIcon-8c59e050.js","assets/Stack-cc5b2d14.js","assets/clsx-b6a48541.js","assets/createSvgIcon-219a298d.js","assets/TextareaAutosize-79125955.js","assets/FormControlLabel-63b449ea.js","assets/Typography-5e362a3e.js","assets/Switch-97a4e9b0.js","assets/ClipLoader-8d568c68.js"]).then(({CreateBountyModal:e})=>({default:e}))),Re=r.lazy(()=>u(()=>import("./index-042300e8.js").then(e=>e.cj),["assets/index-042300e8.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Me=r.lazy(()=>u(()=>import("./index-7aea7752.js").then(e=>e.i),["assets/index-7aea7752.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-c359d33b.js","assets/SoundIcon-28291abe.js"]).then(({BriefDescription:e})=>({default:e}))),Oe=r.lazy(()=>u(()=>import("./index-1ce3c54b.js"),["assets/index-1ce3c54b.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-80ef5f61.js","assets/index-c359d33b.js","assets/index-4ddf8643.js","assets/index-a6bf30a8.js","assets/index-f91efa52.js","assets/SourcesTableIcon-3e95cc08.js","assets/CheckIcon-d38df98b.js","assets/DeleteNodeIcon-8fceabfe.js","assets/SoundIcon-28291abe.js","assets/SucessFeedBackIcon-8c59e050.js","assets/Stack-cc5b2d14.js","assets/clsx-b6a48541.js","assets/createSvgIcon-219a298d.js","assets/TextareaAutosize-79125955.js","assets/FormControlLabel-63b449ea.js","assets/Typography-5e362a3e.js","assets/Switch-97a4e9b0.js","assets/ClipLoader-8d568c68.js"]).then(({NodeActionModal:e})=>({default:e}))),Be=()=>t.jsxs(t.Fragment,{children:[t.jsx(ve,{}),t.jsx(ke,{}),t.jsx(je,{}),t.jsx(Te,{}),t.jsx(Ae,{}),t.jsx(Ee,{}),t.jsx(ze,{}),t.jsx(Le,{}),t.jsx(Ie,{}),t.jsx(Se,{}),t.jsx(Pe,{}),t.jsx(Ne,{}),t.jsx(Re,{}),t.jsx(Me,{}),t.jsx(Oe,{})]}),Ce=()=>{const[e,n]=r.useState(null),{runningProjectMessages:a}=T(l=>l),s=l=>{n(l.currentTarget)},c=()=>{n(null)},f=!!e,m=f?"simple-popover":void 0;return a.length?t.jsxs($e,{ml:8,children:[t.jsx(Ve,{onClick:s,children:t.jsxs(fe,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ne,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(Fe,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:c,open:f,children:[t.jsx(X,{onClick:c,children:t.jsx(re,{})}),t.jsx(De,{p:16,children:a.map(l=>t.jsx("p",{className:"item",children:l},l))})]})]}):null},$e=h(p).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,De=h(p)`
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
`,Ze=r.lazy(()=>u(()=>import("./index-5134e99f.js"),["assets/index-5134e99f.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-3e95cc08.js","assets/index-c359d33b.js"]).then(({MainToolbar:e})=>({default:e}))),et=r.lazy(()=>u(()=>import("./index-9a33cb33.js").then(e=>e.i),["assets/index-9a33cb33.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-49979a9c.js","assets/three.module-4d3d7244.js","assets/index-ee01e419.js","assets/index-c359d33b.js","assets/index-f91efa52.js","assets/SourcesTableIcon-3e95cc08.js","assets/CheckIcon-d38df98b.js","assets/DeleteNodeIcon-8fceabfe.js","assets/SoundIcon-28291abe.js","assets/SucessFeedBackIcon-8c59e050.js","assets/TextareaAutosize-79125955.js","assets/index-87bc2cc4.js","assets/index-80ef5f61.js","assets/ClipLoader-8d568c68.js","assets/clsx-b6a48541.js"]).then(({Universe:e})=>({default:e}))),tt=r.lazy(()=>u(()=>import("./index-634e8067.js").then(e=>e.x),["assets/index-634e8067.js","assets/index-042300e8.js","assets/index-b4d03b7b.css","assets/index-f91efa52.js","assets/SourcesTableIcon-3e95cc08.js","assets/index-c359d33b.js","assets/CheckIcon-d38df98b.js","assets/DeleteNodeIcon-8fceabfe.js","assets/SoundIcon-28291abe.js","assets/SucessFeedBackIcon-8c59e050.js","assets/ClipLoader-8d568c68.js","assets/Skeleton-23c44d7c.js","assets/index-7aea7752.js","assets/Stack-cc5b2d14.js","assets/clsx-b6a48541.js","assets/FormControlLabel-63b449ea.js","assets/Typography-5e362a3e.js","assets/createSvgIcon-219a298d.js","assets/isPlainObject-c279c9f3.js","assets/index-ee01e419.js","assets/index-87bc2cc4.js"]).then(({SideBar:e})=>({default:e}))),rt=()=>{const[e]=Y(),n=e.get("q"),{setNodeCount:a}=J(o=>o),s=r.useRef(null),c=r.useRef(null);xe();const{setCurrentSearch:f,setRelevanceSelected:m,setTranscriptOpen:l,universeQuestionIsOpen:w}=P(o=>o),k=be(o=>o.setTeachMeAnswer),{setCategoryFilter:v,addNewNode:g,splashDataLoading:A,runningProjectId:_,setRunningProjectMessages:N,isFetching:R}=T(o=>o),{setAiSummaryAnswer:y,getKeyExist:M,aiRefId:z}=K(o=>o),[S,j]=le(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),d=_e(),O=de({mode:"onChange"}),{setValue:B}=O;r.useEffect(()=>{B("search",n??""),l(!1),m(!1),f(n??""),k(""),v(null)},[n,v,f,m,k,l,B]);const C=r.useCallback(()=>{a("INCREMENT")},[a]),$=r.useCallback(o=>{R||(s.current||(s.current={nodes:[],edges:[]}),o.edges&&s.current.edges.push(...o.edges),o.nodes&&s.current.nodes.push(...o.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(s.current){const{nodes:b,edges:x}=s.current,E={nodes:b,edges:x};s.current={nodes:[],edges:[]},g(E)}},3e3))},[g,R]),D=r.useCallback(o=>{console.log(o)},[]),V=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{answer:o.answer,answerLoading:!1})},[y]),F=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{audio_en:o.audio_EN})},[y]),q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{questions:o.relevant_questions.map(b=>b.question),questionsLoading:!1})},[y]),Q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{sources:o.sources.map(b=>b.ref_id),sourcesLoading:!1})},[y]),G=r.useCallback(o=>{o.question&&M(z)&&y(z,{answerLoading:!1,entities:o.entities})},[y,M,z]);return r.useEffect(()=>(d&&(d.connect(),d.on("connect_error",o=>{console.error("Socket connection error:",o)}),d.on("newnode",C),j&&d.on("extractedentitieshook",G),j&&d.on("askquestionhook",V),j&&d.on("relevantquestionshook",q),j&&d.on("answersourceshook",Q),S&&d.on("new_node_created",$),S&&d.on("node_updated",D),j&&d.on("answeraudiohook",F)),()=>{d&&d.off()}),[d,C,$,S,V,j,q,Q,G,F,D]),r.useEffect(()=>{if(!_)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const x={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:_})};o.send(JSON.stringify(x))},o.onmessage=b=>{var U;const x=JSON.parse(b.data);if(x.type==="ping")return;const E=x==null?void 0:x.message;if(E.type==="on_step_start"||E.type==="on_step_complete"){const W=(U=x==null?void 0:x.message)==null?void 0:U.message;W&&N(W)}},o.onerror=b=>{console.error("WebSocket error:",b)}},[_,N]),r.useEffect(()=>{if(_)try{d==null||d.emit("update_project_id",{id:_})}catch(o){console.error(o)}},[_,d]),t.jsxs(t.Fragment,{children:[t.jsx(me,{}),t.jsx(He,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(Ke,{direction:"row",children:[t.jsxs(ue,{...O,children:[t.jsx(Ze,{}),!w&&t.jsx(tt,{}),t.jsx(et,{}),t.jsx(pe,{}),t.jsx(qe,{}),t.jsxs(Xe,{children:["v",we]}),t.jsx(ge,{})]}),t.jsx(Be,{}),t.jsx(Je,{})]})})]})};export{rt as App};
