import{W as te,c as oe,r,_ as l,j as t,s as c,a as s,F as h,u as T,I as ne,C as re,m as se,b as J,d as K,e as ie,T as E,B as ae,Q as le,f as ce,g as de,h as ue,i as he,k as ge,l as pe}from"./index-4069bdc1.js";import{P as fe,T as me,u as xe,a as ye,O as _e,A as be}from"./index-53d44bb5.js";const we=te`
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
`,je={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},ke=oe(e=>({...je,setAskedQuestion:n=>e(i=>({askedQuestions:[...i.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(i=>({askedQuestionsAnswers:[...i.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var i,d,a,p;(i=n==null?void 0:n.instagraph)!=null&&i.edges&&((d=n==null?void 0:n.instagraph)!=null&&d.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(a=n==null?void 0:n.instagraph)==null?void 0:a.edges,nodes:(p=n==null?void 0:n.instagraph)==null?void 0:p.nodes}})}})),ve="0.1.106",Ee=r.lazy(()=>l(()=>import("./index-22a7671c.js"),["assets/index-22a7671c.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/index-53d44bb5.js","assets/ClipLoader-0fae20c9.js","assets/Tabs-f108a092.js","assets/createSvgIcon-cb28d4b6.js"]).then(({SettingsModal:e})=>({default:e}))),Te=r.lazy(()=>l(()=>import("./index-b8e9afa7.js"),["assets/index-b8e9afa7.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/CheckIcon-ad5d6bda.js","assets/index-717b1eb9.js","assets/ClipLoader-0fae20c9.js"]).then(({AddContentModal:e})=>({default:e}))),Ae=r.lazy(()=>l(()=>import("./index-872fdc4f.js"),["assets/index-872fdc4f.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/index-53d44bb5.js","assets/CheckIcon-ad5d6bda.js","assets/index-717b1eb9.js","assets/ClipLoader-0fae20c9.js","assets/index-6c8b601e.js","assets/three.module-c645d2a3.js","assets/index-2ed6cdb4.js","assets/index-217128d8.js","assets/Stack-45ad6543.js","assets/createSvgIcon-cb28d4b6.js","assets/TextareaAutosize-91c9ab33.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),ze=r.lazy(()=>l(()=>import("./index-9baf826d.js"),["assets/index-9baf826d.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/VisibilityOn-3063d140.js","assets/SearchIcon-dad31c3f.js","assets/constants-4ad835ce.js","assets/index-53d44bb5.js","assets/ClipLoader-0fae20c9.js","assets/index-2ed6cdb4.js","assets/index-217128d8.js","assets/Stack-45ad6543.js","assets/createSvgIcon-cb28d4b6.js","assets/TextareaAutosize-91c9ab33.js","assets/index-5d2a6e31.js","assets/NodeCircleIcon-5aa88484.js","assets/CheckIcon-ad5d6bda.js","assets/Typography-b45e67cc.js","assets/Tabs-f108a092.js"]).then(({SourcesTableModal:e})=>({default:e}))),Se=r.lazy(()=>l(()=>import("./index-134c6c9b.js"),["assets/index-134c6c9b.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/index-53d44bb5.js","assets/EditNodeIcon-f5210aad.js","assets/index-217128d8.js","assets/Skeleton-22f779d9.js","assets/ClipLoader-0fae20c9.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Le=r.lazy(()=>l(()=>import("./index-bf653063.js"),["assets/index-bf653063.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/index-53d44bb5.js","assets/DeleteNodeIcon-8d063512.js","assets/Skeleton-22f779d9.js","assets/ClipLoader-0fae20c9.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ie=r.lazy(()=>l(()=>import("./index-a4c68957.js"),["assets/index-a4c68957.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/index-53d44bb5.js","assets/NodeCircleIcon-5aa88484.js","assets/index-2ed6cdb4.js","assets/index-217128d8.js","assets/Stack-45ad6543.js","assets/createSvgIcon-cb28d4b6.js","assets/TextareaAutosize-91c9ab33.js","assets/constants-4ad835ce.js","assets/ClipLoader-0fae20c9.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Pe=r.lazy(()=>l(()=>import("./index-35d3abbb.js"),["assets/index-35d3abbb.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/index-53d44bb5.js","assets/index-5d2a6e31.js","assets/constants-4ad835ce.js","assets/NodeCircleIcon-5aa88484.js","assets/index-2ed6cdb4.js","assets/index-217128d8.js","assets/Stack-45ad6543.js","assets/createSvgIcon-cb28d4b6.js","assets/TextareaAutosize-91c9ab33.js","assets/ClipLoader-0fae20c9.js"]).then(({MergeNodeModal:e})=>({default:e}))),Re=r.lazy(()=>l(()=>import("./index-5f4bb5d1.js"),["assets/index-5f4bb5d1.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/index-6c8b601e.js","assets/three.module-c645d2a3.js","assets/ClipLoader-0fae20c9.js","assets/index-53d44bb5.js","assets/index-2ed6cdb4.js","assets/index-217128d8.js","assets/Stack-45ad6543.js","assets/createSvgIcon-cb28d4b6.js","assets/TextareaAutosize-91c9ab33.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Me=r.lazy(()=>l(()=>import("./index-ef145065.js"),["assets/index-ef145065.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/index-2ed6cdb4.js","assets/index-217128d8.js","assets/Stack-45ad6543.js","assets/index-53d44bb5.js","assets/createSvgIcon-cb28d4b6.js","assets/TextareaAutosize-91c9ab33.js","assets/ClipLoader-0fae20c9.js","assets/index-01a29c41.js","assets/VisibilityOn-3063d140.js","assets/SourcesTableIcon-b888be9f.js","assets/VolumeIcon-e5736afa.js","assets/NodeCircleIcon-5aa88484.js","assets/SoundIcon-dceaa3f2.js","assets/CheckIcon-ad5d6bda.js","assets/DeleteNodeIcon-8d063512.js","assets/EditNodeIcon-f5210aad.js","assets/SearchIcon-dad31c3f.js","assets/SucessFeedBackIcon-3bcbf659.js","assets/three.module-c645d2a3.js","assets/isPlainObject-56b198af.js","assets/Typography-b45e67cc.js","assets/Tabs-f108a092.js","assets/index-6c8b601e.js"]).then(({BlueprintModal:e})=>({default:e}))),Ne=r.lazy(()=>l(()=>import("./index-82e97122.js"),["assets/index-82e97122.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-3bcbf659.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Oe=r.lazy(()=>l(()=>import("./index-1b3675eb.js"),["assets/index-1b3675eb.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/index-237772c8.js","assets/index-53d44bb5.js","assets/index-2ed6cdb4.js","assets/index-217128d8.js","assets/Stack-45ad6543.js","assets/createSvgIcon-cb28d4b6.js","assets/TextareaAutosize-91c9ab33.js"]).then(({CreateBountyModal:e})=>({default:e}))),Be=r.lazy(()=>l(()=>import("./index-4069bdc1.js").then(e=>e.cc),["assets/index-4069bdc1.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Ce=r.lazy(()=>l(()=>import("./index-3a0537e8.js").then(e=>e.i),["assets/index-3a0537e8.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/SoundIcon-dceaa3f2.js","assets/index-53d44bb5.js"]).then(({BriefDescription:e})=>({default:e}))),$e=r.lazy(()=>l(()=>import("./index-b7090e33.js"),["assets/index-b7090e33.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/index-b40ef9cc.js","assets/index-53d44bb5.js","assets/index-237772c8.js","assets/index-2ed6cdb4.js","assets/index-217128d8.js","assets/Stack-45ad6543.js","assets/createSvgIcon-cb28d4b6.js","assets/TextareaAutosize-91c9ab33.js","assets/ClipLoader-0fae20c9.js"]).then(({NodeActionModal:e})=>({default:e}))),De=()=>t.jsxs(t.Fragment,{children:[t.jsx(Ae,{}),t.jsx(Te,{}),t.jsx(Ee,{}),t.jsx(Se,{}),t.jsx(Le,{}),t.jsx(ze,{}),t.jsx(Ie,{}),t.jsx(Re,{}),t.jsx(Me,{}),t.jsx(Pe,{}),t.jsx(Ne,{}),t.jsx(Oe,{}),t.jsx(Be,{}),t.jsx(Ce,{}),t.jsx($e,{})]}),Ve=()=>{const[e,n]=r.useState(null),{runningProjectMessages:i}=T(g=>g),d=g=>{n(g.currentTarget)},a=()=>{n(null)},p=!!e,y=p?"simple-popover":void 0;return i.length?t.jsxs(qe,{ml:8,children:[t.jsx(Qe,{onClick:d,children:t.jsxs(me,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ne,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:i.length})})]})}),t.jsxs(Ge,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:y,onClose:a,open:p,children:[t.jsx(X,{onClick:a,children:t.jsx(re,{})}),t.jsx(Fe,{p:16,children:i.map(g=>t.jsx("p",{className:"item",children:g},g))})]})]}):null},qe=c(h).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Fe=c(h)`
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
    color: ${s.GRAY6};
  }

  &:hover {
    background: ${s.MESSAGE_BG_HOVER};
  }
`,Qe=c(h).attrs({align:"center",direction:"row"})`
  display: flex;
  cursor: pointer;
  height: 2.5rem;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${s.white};
  background: ${s.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${s.BUTTON1_PRESS};
  }

  &:active {
    background: ${s.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 16px;
  }

  .budgetUnit {
    color: ${s.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,X=c.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  display: none;
  z-index: 1;
  width: 2em;
  height: 2em;
  background-color: ${s.BUTTON1};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${s.white} !important;
    width: 1.5em;
    height: 1.5em;
  }
`,Ge=c(fe)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${s.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${X} {
        display: flex;
      }
    }
  }
`;c(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})``;c(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-end"})``;c(h).attrs({align:"center",direction:"row",grow:1})`
  justify-content: between;
`;c(h).attrs({align:"center",direction:"row",justify:"flex-start"})`
  color: ${s.white};
  background: ${s.BG1};
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
    background: ${s.BUTTON1_PRESS};
  }

  &:active {
    background: ${s.BUTTON1};
  }

  .icon {
    margin-right: 8px;
    font-size: 16px;
  }

  .text {
  }
`;c(h).attrs({align:"center",direction:"row"})`
  display: flex;
  height: 2.5rem;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${s.white};
  background: ${s.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${s.BUTTON1_PRESS};
  }

  &:active {
    background: ${s.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  .budgetUnit {
    color: ${s.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;c(h).attrs({align:"center",direction:"row"})`
  margin-right: 10px;
  display: flex;
  height: 28px;
  padding: 0.75rem 0.6375rem 0.75rem 0.3187rem;
  align-items: center;
  gap: 4px;
  color: ${s.white};
  background: ${s.modalShield};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:active {
    background: ${s.BUTTON1};
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
`;const Ue=()=>{const e=J(g=>g.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:i}=K(),{abortFetchData:d,resetGraph:a}=T(g=>g),p=ie();if(!e)return null;const y=()=>{i(null),d(),a(),n(),p("/")};return t.jsxs(We,{children:[t.jsxs(He,{onClick:y,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(E,{className:"title",color:"white",children:e.title})}),t.jsx(E,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(Ve,{})]})},We=c(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,He=c.div`
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
    color: ${s.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
    margin-left: 8px;
    cursor: pointer;
  }
`,Ye=620,Je=()=>{const e=`(max-width: ${Ye}px)`,[n,i]=r.useState(()=>window.matchMedia(e).matches);return r.useEffect(()=>{const d=window.matchMedia(e);i(d.matches);const a=()=>{i(d.matches)};return window.addEventListener("resize",a),()=>d.removeEventListener("change",a)},[e]),n},Ke=()=>{const[e,n]=r.useState(!0),i=Je();r.useEffect(()=>{n(!0)},[i]);const d=()=>{n(!1)};return i&&e?t.jsxs(Xe,{align:"center",direction:"column",justify:"center",onClick:d,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(h,{align:"center",direction:"column",justify:"center",children:[t.jsx(v,{children:"Second Brain is currently"}),t.jsx(v,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(v,{children:"Mobile support coming soon."})]}),t.jsx(ae,{color:"secondary",onClick:d,variant:"contained",children:"Got It"})]}):null},Xe=c(h)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,v=c(E)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,Ze=c(le)`
  .Toastify__toast {
    background-color: #49c998ff;
    width: fit-content;
    min-height: 100%;
    border-radius: 12px;
    padding: 6px;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${s.white};
    font-weight: 500;
    font-family: 'Barlow';
  }
  .Toastify__close-button {
    color: ${s.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${s.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${s.primaryGreen};
  }
  &.Toastify__toast-container--top-right {
    width: fit-content;
    height: auto;
    top: 60px;
    right: 48px;
  }
`,et=c(h)`
  height: 100%;
  width: 100%;
  background-color: ${s.black};
`,tt=c(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${s.white};
  font-size: 12px;
  opacity: 0.5;
`,ot=r.lazy(()=>l(()=>import("./index-2ce1e833.js"),["assets/index-2ce1e833.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-b888be9f.js"]).then(({MainToolbar:e})=>({default:e}))),nt=r.lazy(()=>l(()=>import("./index-b451fb89.js"),["assets/index-b451fb89.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/index-01a29c41.js","assets/VisibilityOn-3063d140.js","assets/SourcesTableIcon-b888be9f.js","assets/VolumeIcon-e5736afa.js","assets/NodeCircleIcon-5aa88484.js","assets/SoundIcon-dceaa3f2.js","assets/index-53d44bb5.js","assets/CheckIcon-ad5d6bda.js","assets/DeleteNodeIcon-8d063512.js","assets/EditNodeIcon-f5210aad.js","assets/SearchIcon-dad31c3f.js","assets/SucessFeedBackIcon-3bcbf659.js","assets/three.module-c645d2a3.js","assets/TextareaAutosize-91c9ab33.js","assets/index-217128d8.js","assets/index-ee46aa5a.js","assets/index-b40ef9cc.js","assets/ClipLoader-0fae20c9.js"]).then(({Universe:e})=>({default:e}))),rt=r.lazy(()=>l(()=>import("./index-b5520212.js").then(e=>e.i),["assets/index-b5520212.js","assets/index-4069bdc1.js","assets/index-b4d03b7b.css","assets/VolumeIcon-e5736afa.js","assets/index-53d44bb5.js","assets/SearchIcon-dad31c3f.js","assets/ClipLoader-0fae20c9.js","assets/Skeleton-22f779d9.js","assets/Stack-45ad6543.js","assets/index-3a0537e8.js","assets/SoundIcon-dceaa3f2.js","assets/index-217128d8.js","assets/CheckIcon-ad5d6bda.js","assets/isPlainObject-56b198af.js","assets/Typography-b45e67cc.js","assets/createSvgIcon-cb28d4b6.js","assets/index-ee46aa5a.js"]).then(({SideBar:e})=>({default:e}))),at=()=>{const[e]=ce(),n=e.get("q"),{setBudget:i,setNodeCount:d}=de(o=>o),a=r.useRef(null),p=r.useRef(null),{setSidebarOpen:y,currentSearch:g,setCurrentSearch:A,setRelevanceSelected:z,setTranscriptOpen:S,universeQuestionIsOpen:Z}=J(o=>o),L=ke(o=>o.setTeachMeAnswer),{fetchData:I,setCategoryFilter:P,setAbortRequests:R,addNewNode:M,splashDataLoading:ee,runningProjectId:_,setRunningProjectMessages:N,isFetching:O,resetData:B}=T(o=>o),{setAiSummaryAnswer:f,getKeyExist:C,aiRefId:k}=K(o=>o),w=xe(),[$,b]=ue(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),u=ye(),D=he({mode:"onChange"}),{setValue:V}=D;r.useEffect(()=>{V("search",n??""),S(!1),w(null),z(!1),A(n??""),L(""),P(null)},[n,P,A,z,w,L,S,V]),r.useEffect(()=>{const o=async()=>{await I(i,R),y(!0),g?await pe(i):w(null)};B(),o()},[g,I,i,R,y,w,B]);const q=r.useCallback(()=>{d("INCREMENT")},[d]),F=r.useCallback(o=>{O||(a.current||(a.current={nodes:[],edges:[]}),o.edges&&a.current.edges.push(...o.edges),o.nodes&&a.current.nodes.push(...o.nodes),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{if(a.current){const{nodes:m,edges:x}=a.current,j={nodes:m,edges:x};a.current={nodes:[],edges:[]},M(j)}},3e3))},[M,O]),Q=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{answer:o.answer,answerLoading:!1})},[f]),G=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{audio_en:o.audio_EN})},[f]),U=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{questions:o.relevant_questions.map(m=>m.question),questionsLoading:!1})},[f]),W=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{sources:o.sources.map(m=>m.ref_id),sourcesLoading:!1})},[f]),H=r.useCallback(o=>{o.question&&C(k)&&f(k,{answerLoading:!1,entities:o.entities})},[f,C,k]);return r.useEffect(()=>(u&&(u.connect(),u.on("connect_error",o=>{console.error("Socket connection error:",o)}),u.on("newnode",q),b&&u.on("extractedentitieshook",H),b&&u.on("askquestionhook",Q),b&&u.on("relevantquestionshook",U),b&&u.on("answersourceshook",W),$&&u.on("new_node_created",F),b&&u.on("answeraudiohook",G)),()=>{u&&u.off()}),[u,q,F,$,Q,b,U,W,H,G]),r.useEffect(()=>{if(!_)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const x={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:_})};o.send(JSON.stringify(x))},o.onmessage=m=>{var Y;const x=JSON.parse(m.data);if(console.log(x),x.type==="ping")return;const j=(Y=x==null?void 0:x.message)==null?void 0:Y.message;j&&N(j)},o.onerror=m=>{console.error("WebSocket error:",m)}},[_,N]),r.useEffect(()=>{if(_)try{u==null||u.emit("update_project_id",{id:_})}catch(o){console.error(o)}},[_,u]),t.jsxs(t.Fragment,{children:[t.jsx(we,{}),t.jsx(Ke,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:ee?null:t.jsxs(et,{direction:"row",children:[t.jsxs(ge,{...D,children:[t.jsx(ot,{}),!Z&&t.jsx(rt,{}),t.jsx(nt,{}),t.jsx(_e,{}),t.jsx(Ue,{}),t.jsxs(tt,{children:["v",ve]}),t.jsx(be,{})]}),t.jsx(De,{}),t.jsx(Ze,{})]})})]})};export{at as App};
