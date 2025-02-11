import{W as ee,c as te,r,_ as l,j as t,s as c,a as s,F as h,u as E,I as oe,C as ne,m as re,b as Y,d as J,e as se,T as v,B as ie,Q as ae,f as le,g as ce,h as de,i as ue,k as he,l as ge}from"./index-df66d2e5.js";import{P as pe,T as fe,u as me,O as xe,A as ye}from"./index-4fd7a16d.js";const _e=ee`
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
`,be={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},we=te(e=>({...be,setAskedQuestion:n=>e(i=>({askedQuestions:[...i.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(i=>({askedQuestionsAnswers:[...i.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var i,d,a,p;(i=n==null?void 0:n.instagraph)!=null&&i.edges&&((d=n==null?void 0:n.instagraph)!=null&&d.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(a=n==null?void 0:n.instagraph)==null?void 0:a.edges,nodes:(p=n==null?void 0:n.instagraph)==null?void 0:p.nodes}})}})),je="0.1.106",ke=r.lazy(()=>l(()=>import("./index-d410e248.js"),["assets/index-d410e248.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/index-4fd7a16d.js","assets/ClipLoader-6fb4fa6e.js","assets/Tabs-614d23ad.js","assets/createSvgIcon-2865e2f2.js"]).then(({SettingsModal:e})=>({default:e}))),ve=r.lazy(()=>l(()=>import("./index-12ff8ab7.js"),["assets/index-12ff8ab7.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/CheckIcon-a44ebb3f.js","assets/index-717b1eb9.js","assets/ClipLoader-6fb4fa6e.js"]).then(({AddContentModal:e})=>({default:e}))),Ee=r.lazy(()=>l(()=>import("./index-ebdd351d.js"),["assets/index-ebdd351d.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/index-4fd7a16d.js","assets/CheckIcon-a44ebb3f.js","assets/index-717b1eb9.js","assets/ClipLoader-6fb4fa6e.js","assets/index-348f31a0.js","assets/three.module-1c1ec8b9.js","assets/index-3153875e.js","assets/index-df1f96f3.js","assets/Stack-5478da5d.js","assets/createSvgIcon-2865e2f2.js","assets/TextareaAutosize-84c0dfd0.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),Te=r.lazy(()=>l(()=>import("./index-87337538.js"),["assets/index-87337538.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/VisibilityOn-ad90babc.js","assets/SearchIcon-74b7c147.js","assets/constants-c69566b3.js","assets/index-4fd7a16d.js","assets/ClipLoader-6fb4fa6e.js","assets/index-3153875e.js","assets/index-df1f96f3.js","assets/Stack-5478da5d.js","assets/createSvgIcon-2865e2f2.js","assets/TextareaAutosize-84c0dfd0.js","assets/index-05ab7b6a.js","assets/NodeCircleIcon-fa800def.js","assets/CheckIcon-a44ebb3f.js","assets/Typography-dd556dce.js","assets/Tabs-614d23ad.js"]).then(({SourcesTableModal:e})=>({default:e}))),Ae=r.lazy(()=>l(()=>import("./index-66c3bd34.js"),["assets/index-66c3bd34.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/index-4fd7a16d.js","assets/EditNodeIcon-e07cf21a.js","assets/index-df1f96f3.js","assets/Skeleton-cbd8037e.js","assets/ClipLoader-6fb4fa6e.js"]).then(({EditNodeNameModal:e})=>({default:e}))),ze=r.lazy(()=>l(()=>import("./index-0ab17fa6.js"),["assets/index-0ab17fa6.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/index-4fd7a16d.js","assets/DeleteNodeIcon-2f051464.js","assets/Skeleton-cbd8037e.js","assets/ClipLoader-6fb4fa6e.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Le=r.lazy(()=>l(()=>import("./index-00fe6dfb.js"),["assets/index-00fe6dfb.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/index-4fd7a16d.js","assets/NodeCircleIcon-fa800def.js","assets/index-3153875e.js","assets/index-df1f96f3.js","assets/Stack-5478da5d.js","assets/createSvgIcon-2865e2f2.js","assets/TextareaAutosize-84c0dfd0.js","assets/constants-c69566b3.js","assets/ClipLoader-6fb4fa6e.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Se=r.lazy(()=>l(()=>import("./index-3b88b2fb.js"),["assets/index-3b88b2fb.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/index-4fd7a16d.js","assets/index-05ab7b6a.js","assets/constants-c69566b3.js","assets/NodeCircleIcon-fa800def.js","assets/index-3153875e.js","assets/index-df1f96f3.js","assets/Stack-5478da5d.js","assets/createSvgIcon-2865e2f2.js","assets/TextareaAutosize-84c0dfd0.js","assets/ClipLoader-6fb4fa6e.js"]).then(({MergeNodeModal:e})=>({default:e}))),Ie=r.lazy(()=>l(()=>import("./index-72283dcd.js"),["assets/index-72283dcd.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/index-348f31a0.js","assets/three.module-1c1ec8b9.js","assets/ClipLoader-6fb4fa6e.js","assets/index-4fd7a16d.js","assets/index-3153875e.js","assets/index-df1f96f3.js","assets/Stack-5478da5d.js","assets/createSvgIcon-2865e2f2.js","assets/TextareaAutosize-84c0dfd0.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Pe=r.lazy(()=>l(()=>import("./index-628dbba9.js"),["assets/index-628dbba9.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/index-3153875e.js","assets/index-df1f96f3.js","assets/Stack-5478da5d.js","assets/index-4fd7a16d.js","assets/createSvgIcon-2865e2f2.js","assets/TextareaAutosize-84c0dfd0.js","assets/ClipLoader-6fb4fa6e.js","assets/index-a8e88e19.js","assets/VisibilityOn-ad90babc.js","assets/SourcesTableIcon-04b36861.js","assets/VolumeIcon-9b783b96.js","assets/NodeCircleIcon-fa800def.js","assets/SoundIcon-3a74ee61.js","assets/CheckIcon-a44ebb3f.js","assets/DeleteNodeIcon-2f051464.js","assets/EditNodeIcon-e07cf21a.js","assets/SearchIcon-74b7c147.js","assets/SucessFeedBackIcon-f69297f4.js","assets/three.module-1c1ec8b9.js","assets/isPlainObject-19dcf86c.js","assets/Typography-dd556dce.js","assets/Tabs-614d23ad.js","assets/index-348f31a0.js"]).then(({BlueprintModal:e})=>({default:e}))),Re=r.lazy(()=>l(()=>import("./index-cc1e0ee4.js"),["assets/index-cc1e0ee4.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-f69297f4.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Me=r.lazy(()=>l(()=>import("./index-5f444668.js"),["assets/index-5f444668.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/index-2ea1f99e.js","assets/index-4fd7a16d.js","assets/index-3153875e.js","assets/index-df1f96f3.js","assets/Stack-5478da5d.js","assets/createSvgIcon-2865e2f2.js","assets/TextareaAutosize-84c0dfd0.js"]).then(({CreateBountyModal:e})=>({default:e}))),Oe=r.lazy(()=>l(()=>import("./index-df66d2e5.js").then(e=>e.cd),["assets/index-df66d2e5.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Be=r.lazy(()=>l(()=>import("./index-55b16c53.js").then(e=>e.i),["assets/index-55b16c53.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/SoundIcon-3a74ee61.js","assets/index-4fd7a16d.js"]).then(({BriefDescription:e})=>({default:e}))),Ne=r.lazy(()=>l(()=>import("./index-4c41b158.js"),["assets/index-4c41b158.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/index-dc60ad53.js","assets/index-4fd7a16d.js","assets/index-2ea1f99e.js","assets/index-3153875e.js","assets/index-df1f96f3.js","assets/Stack-5478da5d.js","assets/createSvgIcon-2865e2f2.js","assets/TextareaAutosize-84c0dfd0.js","assets/ClipLoader-6fb4fa6e.js"]).then(({NodeActionModal:e})=>({default:e}))),Ce=()=>t.jsxs(t.Fragment,{children:[t.jsx(Ee,{}),t.jsx(ve,{}),t.jsx(ke,{}),t.jsx(Ae,{}),t.jsx(ze,{}),t.jsx(Te,{}),t.jsx(Le,{}),t.jsx(Ie,{}),t.jsx(Pe,{}),t.jsx(Se,{}),t.jsx(Re,{}),t.jsx(Me,{}),t.jsx(Oe,{}),t.jsx(Be,{}),t.jsx(Ne,{})]}),$e=()=>{const[e,n]=r.useState(null),{runningProjectMessages:i}=E(g=>g),d=g=>{n(g.currentTarget)},a=()=>{n(null)},p=!!e,y=p?"simple-popover":void 0;return i.length?t.jsxs(De,{ml:8,children:[t.jsx(qe,{onClick:d,children:t.jsxs(fe,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(oe,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:i.length})})]})}),t.jsxs(Fe,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:y,onClose:a,open:p,children:[t.jsx(K,{onClick:a,children:t.jsx(ne,{})}),t.jsx(Ve,{p:16,children:i.map(g=>t.jsx("p",{className:"item",children:g},g))})]})]}):null},De=c(h).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Ve=c(h)`
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
`,qe=c(h).attrs({align:"center",direction:"row"})`
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
`,K=c.div`
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
`,Fe=c(pe)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${s.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${K} {
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
`;const Qe=()=>{const e=Y(g=>g.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:i}=J(),{abortFetchData:d,resetGraph:a}=E(g=>g),p=se();if(!e)return null;const y=()=>{i(null),d(),a(),n(),p("/")};return t.jsxs(Ge,{children:[t.jsxs(Ue,{onClick:y,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(v,{className:"title",color:"white",children:e.title})}),t.jsx(v,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx($e,{})]})},Ge=c(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Ue=c.div`
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
`,We=620,He=()=>{const e=`(max-width: ${We}px)`,[n,i]=r.useState(()=>window.matchMedia(e).matches);return r.useEffect(()=>{const d=window.matchMedia(e);i(d.matches);const a=()=>{i(d.matches)};return window.addEventListener("resize",a),()=>d.removeEventListener("change",a)},[e]),n},Ye=()=>{const[e,n]=r.useState(!0),i=He();r.useEffect(()=>{n(!0)},[i]);const d=()=>{n(!1)};return i&&e?t.jsxs(Je,{align:"center",direction:"column",justify:"center",onClick:d,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(h,{align:"center",direction:"column",justify:"center",children:[t.jsx(k,{children:"Second Brain is currently"}),t.jsx(k,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(k,{children:"Mobile support coming soon."})]}),t.jsx(ie,{color:"secondary",onClick:d,variant:"contained",children:"Got It"})]}):null},Je=c(h)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,k=c(v)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,Ke=c(ae)`
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
`,Xe=c(h)`
  height: 100%;
  width: 100%;
  background-color: ${s.black};
`,Ze=c(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${s.white};
  font-size: 12px;
  opacity: 0.5;
`,et=r.lazy(()=>l(()=>import("./index-5d0b78d4.js"),["assets/index-5d0b78d4.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-04b36861.js"]).then(({MainToolbar:e})=>({default:e}))),tt=r.lazy(()=>l(()=>import("./index-470b6cf1.js"),["assets/index-470b6cf1.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/index-a8e88e19.js","assets/VisibilityOn-ad90babc.js","assets/SourcesTableIcon-04b36861.js","assets/VolumeIcon-9b783b96.js","assets/NodeCircleIcon-fa800def.js","assets/SoundIcon-3a74ee61.js","assets/index-4fd7a16d.js","assets/CheckIcon-a44ebb3f.js","assets/DeleteNodeIcon-2f051464.js","assets/EditNodeIcon-e07cf21a.js","assets/SearchIcon-74b7c147.js","assets/SucessFeedBackIcon-f69297f4.js","assets/three.module-1c1ec8b9.js","assets/TextareaAutosize-84c0dfd0.js","assets/index-df1f96f3.js","assets/index-881d5ed7.js","assets/index-dc60ad53.js","assets/ClipLoader-6fb4fa6e.js"]).then(({Universe:e})=>({default:e}))),ot=r.lazy(()=>l(()=>import("./index-54dc66a7.js").then(e=>e.i),["assets/index-54dc66a7.js","assets/index-df66d2e5.js","assets/index-b4d03b7b.css","assets/VolumeIcon-9b783b96.js","assets/index-4fd7a16d.js","assets/SearchIcon-74b7c147.js","assets/ClipLoader-6fb4fa6e.js","assets/Skeleton-cbd8037e.js","assets/Stack-5478da5d.js","assets/index-55b16c53.js","assets/SoundIcon-3a74ee61.js","assets/index-df1f96f3.js","assets/CheckIcon-a44ebb3f.js","assets/isPlainObject-19dcf86c.js","assets/Typography-dd556dce.js","assets/createSvgIcon-2865e2f2.js","assets/index-881d5ed7.js"]).then(({SideBar:e})=>({default:e}))),st=()=>{const[e]=le(),n=e.get("q"),{setBudget:i,setNodeCount:d}=ce(o=>o),a=r.useRef(null),p=r.useRef(null),{setSidebarOpen:y,currentSearch:g,setCurrentSearch:T,setRelevanceSelected:A,setTranscriptOpen:z,universeQuestionIsOpen:X}=Y(o=>o),L=we(o=>o.setTeachMeAnswer),{fetchData:S,setCategoryFilter:I,setAbortRequests:P,addNewNode:R,splashDataLoading:Z,runningProjectId:_,setRunningProjectMessages:M,isFetching:O,resetData:B}=E(o=>o),{setAiSummaryAnswer:f,getKeyExist:N,aiRefId:j}=J(o=>o),[C,b]=de(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),u=me(),$=ue({mode:"onChange"}),{setValue:D}=$;r.useEffect(()=>{D("search",n??""),z(!1),A(!1),T(n??""),L(""),I(null)},[n,I,T,A,L,z,D]),r.useEffect(()=>{const o=async()=>{await S(i,P),y(!0),g&&await ge(i)};B(),o()},[g,S,i,P,y,B]);const V=r.useCallback(()=>{d("INCREMENT")},[d]),q=r.useCallback(o=>{O||(a.current||(a.current={nodes:[],edges:[]}),o.edges&&a.current.edges.push(...o.edges),o.nodes&&a.current.nodes.push(...o.nodes),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{if(a.current){const{nodes:m,edges:x}=a.current,w={nodes:m,edges:x};a.current={nodes:[],edges:[]},R(w)}},3e3))},[R,O]),F=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{answer:o.answer,answerLoading:!1})},[f]),Q=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{audio_en:o.audio_EN})},[f]),G=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{questions:o.relevant_questions.map(m=>m.question),questionsLoading:!1})},[f]),U=r.useCallback(o=>{o.ref_id&&f(o.ref_id,{sources:o.sources.map(m=>m.ref_id),sourcesLoading:!1})},[f]),W=r.useCallback(o=>{o.question&&N(j)&&f(j,{answerLoading:!1,entities:o.entities})},[f,N,j]);return r.useEffect(()=>(u&&(u.connect(),u.on("connect_error",o=>{console.error("Socket connection error:",o)}),u.on("newnode",V),b&&u.on("extractedentitieshook",W),b&&u.on("askquestionhook",F),b&&u.on("relevantquestionshook",G),b&&u.on("answersourceshook",U),C&&u.on("new_node_created",q),b&&u.on("answeraudiohook",Q)),()=>{u&&u.off()}),[u,V,q,C,F,b,G,U,W,Q]),r.useEffect(()=>{if(!_)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const x={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:_})};o.send(JSON.stringify(x))},o.onmessage=m=>{var H;const x=JSON.parse(m.data);if(console.log(x),x.type==="ping")return;const w=(H=x==null?void 0:x.message)==null?void 0:H.message;w&&M(w)},o.onerror=m=>{console.error("WebSocket error:",m)}},[_,M]),r.useEffect(()=>{if(_)try{u==null||u.emit("update_project_id",{id:_})}catch(o){console.error(o)}},[_,u]),t.jsxs(t.Fragment,{children:[t.jsx(_e,{}),t.jsx(Ye,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:Z?null:t.jsxs(Xe,{direction:"row",children:[t.jsxs(he,{...$,children:[t.jsx(et,{}),!X&&t.jsx(ot,{}),t.jsx(tt,{}),t.jsx(xe,{}),t.jsx(Qe,{}),t.jsxs(Ze,{children:["v",je]}),t.jsx(ye,{})]}),t.jsx(Ce,{}),t.jsx(Ke,{})]})})]})};export{st as App};
