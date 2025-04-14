import{W as Z,u as Y,r as n,a as J,b as P,c as T,d as H,f as ee,S as te,e as oe,_ as l,j as t,s as h,g as i,F as p,I as ne,C as re,m as se,h as K,i as ie,T as I,B as ae,Q as ce,k as le,l as de,n as ue}from"./index-431d76f4.js";import{P as he,T as fe,O as pe,A as ge}from"./index-d5a78730.js";const me=Z`
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
`,xe=()=>{const[e]=Y(),r=e.get("node"),a=n.useRef(!0),{setBudget:s}=J(g=>g),{setSidebarOpen:c,currentSearch:f}=P(g=>g),{fetchData:m,setAbortRequests:d,resetData:w,addNewNode:k,finishLoading:v}=T(g=>g);n.useEffect(()=>{if(a.current){const g=async()=>{f||w(),await m(s,d),c(!0),a.current=!1,f&&await H(s)},A=async()=>{const _=await ee(r||"",0,5);v(),a.current=!1,_&&k({nodes:_.nodes,edges:_.edges})};if(r){A();return}g()}},[r,f,m,s,d,c,w,a,v,k]),n.useEffect(()=>{if(!a.current){const g=async()=>{await m(s,d),c(!0),f&&await H(s)};w(),g()}},[f,m,s,d,c,w,a])},_e=()=>{const e=n.useContext(te);return e==null?void 0:e.socket},ye={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},be=oe(e=>({...ye,setAskedQuestion:r=>e(a=>({askedQuestions:[...a.askedQuestions||[],r],hasQuestionInProgress:!0})),setAskedQuestionAnswer:r=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],r],hasQuestionInProgress:!1})),setHasQuestionInProgress:r=>e({hasQuestionInProgress:r}),setHasTeachingInProgress:r=>e({hasTeachingInProgress:r}),setHasInstagraphInProgress:r=>e({hasInstagraphInProgress:r}),setTeachMeAnswer:r=>e({hasTeachingInProgress:!1,teachMeAnswer:r}),setInstagraphAnswer:r=>{var a,s,c,f;(a=r==null?void 0:r.instagraph)!=null&&a.edges&&((s=r==null?void 0:r.instagraph)!=null&&s.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=r==null?void 0:r.instagraph)==null?void 0:c.edges,nodes:(f=r==null?void 0:r.instagraph)==null?void 0:f.nodes}})}})),we="0.1.106",je=n.lazy(()=>l(()=>import("./index-8a98ac32.js"),["assets/index-8a98ac32.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-d5a78730.js","assets/ClipLoader-44a82ea4.js","assets/Tabs-2e7d5714.js","assets/createSvgIcon-917d5a63.js"]).then(({SettingsModal:e})=>({default:e}))),ke=n.lazy(()=>l(()=>import("./index-b5896d9a.js").then(e=>e.i),["assets/index-b5896d9a.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-d5a78730.js","assets/string-a277709d.js"]).then(({ClaimsModal:e})=>({default:e}))),ve=n.lazy(()=>l(()=>import("./index-554a575c.js"),["assets/index-554a575c.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/CheckIcon-64f55349.js","assets/index-717b1eb9.js","assets/ClipLoader-44a82ea4.js"]).then(({AddContentModal:e})=>({default:e}))),Ee=n.lazy(()=>l(()=>import("./index-afced24d.js"),["assets/index-afced24d.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-d5a78730.js","assets/CheckIcon-64f55349.js","assets/index-717b1eb9.js","assets/ClipLoader-44a82ea4.js","assets/index-bc4b1a6c.js","assets/three.module-976f5d36.js","assets/index-c183617e.js","assets/index-75c899cd.js","assets/SourcesTableIcon-1d777f00.js","assets/DeleteNodeIcon-4345e1bf.js","assets/SoundIcon-52f066d1.js","assets/SucessFeedBackIcon-139eb95f.js","assets/Stack-05415c27.js","assets/clsx-fa4a1317.js","assets/createSvgIcon-917d5a63.js","assets/TextareaAutosize-392a7a2c.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),Te=n.lazy(()=>l(()=>import("./index-f8698468.js"),["assets/index-f8698468.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-75c899cd.js","assets/SourcesTableIcon-1d777f00.js","assets/index-d5a78730.js","assets/CheckIcon-64f55349.js","assets/DeleteNodeIcon-4345e1bf.js","assets/SoundIcon-52f066d1.js","assets/SucessFeedBackIcon-139eb95f.js","assets/TableRow-b0abbc31.js","assets/constants-122e294e.js","assets/ClipLoader-44a82ea4.js","assets/index-c183617e.js","assets/Stack-05415c27.js","assets/clsx-fa4a1317.js","assets/createSvgIcon-917d5a63.js","assets/TextareaAutosize-392a7a2c.js","assets/index-be89eddc.js","assets/Typography-060e6b80.js","assets/Tabs-2e7d5714.js"]).then(({SourcesTableModal:e})=>({default:e}))),Ae=n.lazy(()=>l(()=>import("./index-2f78ca32.js"),["assets/index-2f78ca32.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-d5a78730.js","assets/index-75c899cd.js","assets/SourcesTableIcon-1d777f00.js","assets/CheckIcon-64f55349.js","assets/DeleteNodeIcon-4345e1bf.js","assets/SoundIcon-52f066d1.js","assets/SucessFeedBackIcon-139eb95f.js","assets/Skeleton-51b3ff8f.js","assets/ClipLoader-44a82ea4.js"]).then(({EditNodeNameModal:e})=>({default:e}))),ze=n.lazy(()=>l(()=>import("./index-d4694c33.js"),["assets/index-d4694c33.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-d5a78730.js","assets/DeleteNodeIcon-4345e1bf.js","assets/Skeleton-51b3ff8f.js","assets/ClipLoader-44a82ea4.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Le=n.lazy(()=>l(()=>import("./index-46cd6785.js"),["assets/index-46cd6785.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-d5a78730.js","assets/index-75c899cd.js","assets/SourcesTableIcon-1d777f00.js","assets/CheckIcon-64f55349.js","assets/DeleteNodeIcon-4345e1bf.js","assets/SoundIcon-52f066d1.js","assets/SucessFeedBackIcon-139eb95f.js","assets/index-c183617e.js","assets/Stack-05415c27.js","assets/clsx-fa4a1317.js","assets/createSvgIcon-917d5a63.js","assets/TextareaAutosize-392a7a2c.js","assets/constants-122e294e.js","assets/ClipLoader-44a82ea4.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Se=n.lazy(()=>l(()=>import("./index-9531853b.js"),["assets/index-9531853b.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-d5a78730.js","assets/index-be89eddc.js","assets/constants-122e294e.js","assets/index-75c899cd.js","assets/SourcesTableIcon-1d777f00.js","assets/CheckIcon-64f55349.js","assets/DeleteNodeIcon-4345e1bf.js","assets/SoundIcon-52f066d1.js","assets/SucessFeedBackIcon-139eb95f.js","assets/index-c183617e.js","assets/Stack-05415c27.js","assets/clsx-fa4a1317.js","assets/createSvgIcon-917d5a63.js","assets/TextareaAutosize-392a7a2c.js","assets/ClipLoader-44a82ea4.js"]).then(({MergeNodeModal:e})=>({default:e}))),Ie=n.lazy(()=>l(()=>import("./index-ecea18a6.js"),["assets/index-ecea18a6.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-bc4b1a6c.js","assets/three.module-976f5d36.js","assets/ClipLoader-44a82ea4.js","assets/index-d5a78730.js","assets/index-c183617e.js","assets/index-75c899cd.js","assets/SourcesTableIcon-1d777f00.js","assets/CheckIcon-64f55349.js","assets/DeleteNodeIcon-4345e1bf.js","assets/SoundIcon-52f066d1.js","assets/SucessFeedBackIcon-139eb95f.js","assets/Stack-05415c27.js","assets/clsx-fa4a1317.js","assets/createSvgIcon-917d5a63.js","assets/TextareaAutosize-392a7a2c.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Pe=n.lazy(()=>l(()=>import("./index-5ea22a8e.js"),["assets/index-5ea22a8e.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-c183617e.js","assets/index-75c899cd.js","assets/SourcesTableIcon-1d777f00.js","assets/index-d5a78730.js","assets/CheckIcon-64f55349.js","assets/DeleteNodeIcon-4345e1bf.js","assets/SoundIcon-52f066d1.js","assets/SucessFeedBackIcon-139eb95f.js","assets/Stack-05415c27.js","assets/clsx-fa4a1317.js","assets/createSvgIcon-917d5a63.js","assets/TextareaAutosize-392a7a2c.js","assets/ClipLoader-44a82ea4.js","assets/isPlainObject-09bd30ad.js","assets/index-c44e7ab4.js","assets/Tabs-2e7d5714.js","assets/index-bc4b1a6c.js","assets/three.module-976f5d36.js","assets/Switch-f1816816.js","assets/FormControlLabel-07e27eb7.js","assets/Typography-060e6b80.js","assets/index-17aabe58.js"]).then(({BlueprintModal:e})=>({default:e}))),Re=n.lazy(()=>l(()=>import("./index-22dd7ee0.js"),["assets/index-22dd7ee0.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-139eb95f.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Ne=n.lazy(()=>l(()=>import("./index-26858ecb.js"),["assets/index-26858ecb.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-4a4582f7.js","assets/index-d5a78730.js","assets/index-c183617e.js","assets/index-75c899cd.js","assets/SourcesTableIcon-1d777f00.js","assets/CheckIcon-64f55349.js","assets/DeleteNodeIcon-4345e1bf.js","assets/SoundIcon-52f066d1.js","assets/SucessFeedBackIcon-139eb95f.js","assets/Stack-05415c27.js","assets/clsx-fa4a1317.js","assets/createSvgIcon-917d5a63.js","assets/TextareaAutosize-392a7a2c.js","assets/FormControlLabel-07e27eb7.js","assets/Typography-060e6b80.js","assets/Switch-f1816816.js","assets/ClipLoader-44a82ea4.js"]).then(({CreateBountyModal:e})=>({default:e}))),Me=n.lazy(()=>l(()=>import("./index-431d76f4.js").then(e=>e.cj),["assets/index-431d76f4.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Oe=n.lazy(()=>l(()=>import("./index-2d7958e9.js").then(e=>e.i),["assets/index-2d7958e9.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-d5a78730.js","assets/SoundIcon-52f066d1.js"]).then(({BriefDescription:e})=>({default:e}))),Ce=n.lazy(()=>l(()=>import("./index-b83cff0c.js"),["assets/index-b83cff0c.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-25756053.js","assets/index-d5a78730.js","assets/index-4a4582f7.js","assets/index-c183617e.js","assets/index-75c899cd.js","assets/SourcesTableIcon-1d777f00.js","assets/CheckIcon-64f55349.js","assets/DeleteNodeIcon-4345e1bf.js","assets/SoundIcon-52f066d1.js","assets/SucessFeedBackIcon-139eb95f.js","assets/Stack-05415c27.js","assets/clsx-fa4a1317.js","assets/createSvgIcon-917d5a63.js","assets/TextareaAutosize-392a7a2c.js","assets/FormControlLabel-07e27eb7.js","assets/Typography-060e6b80.js","assets/Switch-f1816816.js","assets/ClipLoader-44a82ea4.js"]).then(({NodeActionModal:e})=>({default:e}))),Be=()=>t.jsxs(t.Fragment,{children:[t.jsx(Ee,{}),t.jsx(ve,{}),t.jsx(je,{}),t.jsx(Ae,{}),t.jsx(ze,{}),t.jsx(Te,{}),t.jsx(Le,{}),t.jsx(Ie,{}),t.jsx(Pe,{}),t.jsx(Se,{}),t.jsx(Re,{}),t.jsx(Ne,{}),t.jsx(Me,{}),t.jsx(Oe,{}),t.jsx(Ce,{}),t.jsx(ke,{})]}),De=()=>{const[e,r]=n.useState(null),{runningProjectMessages:a}=T(d=>d),s=d=>{r(d.currentTarget)},c=()=>{r(null)},f=!!e,m=f?"simple-popover":void 0;return a.length?t.jsxs($e,{ml:8,children:[t.jsx(Fe,{onClick:s,children:t.jsxs(fe,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ne,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(qe,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:c,open:f,children:[t.jsx(X,{onClick:c,children:t.jsx(re,{})}),t.jsx(Ve,{p:16,children:a.map(d=>t.jsx("p",{className:"item",children:d},d))})]})]}):null},$e=h(p).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Ve=h(p)`
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
`,Fe=h(p).attrs({align:"center",direction:"row"})`
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
`,qe=h(he)`
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
`;const Qe=()=>{const e=P(d=>d.appMetaData),{resetAiSummaryAnswer:r,setNewLoading:a}=K(),{abortFetchData:s,resetGraph:c}=T(d=>d),f=ie();if(!e)return null;const m=()=>{a(null),s(),c(),r(),f("/")};return t.jsxs(Ge,{children:[t.jsxs(Ue,{onClick:m,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(I,{className:"title",color:"white",children:e.title})}),t.jsx(I,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(De,{})]})},Ge=h(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Ue=h.div`
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
`,We=620,He=()=>{const e=`(max-width: ${We}px)`,[r,a]=n.useState(()=>window.matchMedia(e).matches);return n.useEffect(()=>{const s=window.matchMedia(e);a(s.matches);const c=()=>{a(s.matches)};return window.addEventListener("resize",c),()=>s.removeEventListener("change",c)},[e]),r},Ye=()=>{const[e,r]=n.useState(!0),a=He();n.useEffect(()=>{r(!0)},[a]);const s=()=>{r(!1)};return a&&e?t.jsxs(Je,{align:"center",direction:"column",justify:"center",onClick:s,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(p,{align:"center",direction:"column",justify:"center",children:[t.jsx(S,{children:"Second Brain is currently"}),t.jsx(S,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(S,{children:"Mobile support coming soon."})]}),t.jsx(ae,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Je=h(p)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,S=h(I)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,Ke=h(ce)`
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
`,Xe=h(p)`
  height: 100%;
  width: 100%;
  background-color: ${i.black};
`,Ze=h(p)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${i.white};
  font-size: 12px;
  opacity: 0.5;
`,et=n.lazy(()=>l(()=>import("./index-723ae19d.js"),["assets/index-723ae19d.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-1d777f00.js","assets/index-d5a78730.js"]).then(({MainToolbar:e})=>({default:e}))),tt=n.lazy(()=>l(()=>import("./index-0ef0d224.js").then(e=>e.i),["assets/index-0ef0d224.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-17aabe58.js","assets/three.module-976f5d36.js","assets/index-c44e7ab4.js","assets/index-d5a78730.js","assets/index-75c899cd.js","assets/SourcesTableIcon-1d777f00.js","assets/CheckIcon-64f55349.js","assets/DeleteNodeIcon-4345e1bf.js","assets/SoundIcon-52f066d1.js","assets/SucessFeedBackIcon-139eb95f.js","assets/TextareaAutosize-392a7a2c.js","assets/index-b4386479.js","assets/index-25756053.js","assets/ClipLoader-44a82ea4.js","assets/clsx-fa4a1317.js"]).then(({Universe:e})=>({default:e}))),ot=n.lazy(()=>l(()=>import("./index-d4b3e32e.js").then(e=>e.r),["assets/index-d4b3e32e.js","assets/index-431d76f4.js","assets/index-b4d03b7b.css","assets/index-75c899cd.js","assets/SourcesTableIcon-1d777f00.js","assets/index-d5a78730.js","assets/CheckIcon-64f55349.js","assets/DeleteNodeIcon-4345e1bf.js","assets/SoundIcon-52f066d1.js","assets/SucessFeedBackIcon-139eb95f.js","assets/ClipLoader-44a82ea4.js","assets/Skeleton-51b3ff8f.js","assets/index-2d7958e9.js","assets/Stack-05415c27.js","assets/clsx-fa4a1317.js","assets/FormControlLabel-07e27eb7.js","assets/Typography-060e6b80.js","assets/createSvgIcon-917d5a63.js","assets/isPlainObject-09bd30ad.js","assets/string-a277709d.js","assets/index-c44e7ab4.js","assets/index-b4386479.js"]).then(({SideBar:e})=>({default:e}))),st=()=>{const[e]=Y(),r=e.get("q"),{setNodeCount:a}=J(o=>o),s=n.useRef(null),c=n.useRef(null);xe();const{setCurrentSearch:f,setRelevanceSelected:m,setTranscriptOpen:d,universeQuestionIsOpen:w}=P(o=>o),k=be(o=>o.setTeachMeAnswer),{setCategoryFilter:v,addNewNode:g,splashDataLoading:A,runningProjectId:_,setRunningProjectMessages:R,isFetching:N}=T(o=>o),{setAiSummaryAnswer:y,getKeyExist:M,aiRefId:z}=K(o=>o),[L,j]=le(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),u=_e(),O=de({mode:"onChange"}),{setValue:C}=O;n.useEffect(()=>{C("search",r??""),d(!1),m(!1),f(r??""),k(""),v(null)},[r,v,f,m,k,d,C]);const B=n.useCallback(()=>{a("INCREMENT")},[a]),D=n.useCallback(o=>{N||(s.current||(s.current={nodes:[],edges:[]}),o.edges&&s.current.edges.push(...o.edges),o.nodes&&s.current.nodes.push(...o.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(s.current){const{nodes:b,edges:x}=s.current,E={nodes:b,edges:x};s.current={nodes:[],edges:[]},g(E)}},3e3))},[g,N]),$=n.useCallback(o=>{console.log(o)},[]),V=n.useCallback(o=>{o.ref_id&&y(o.ref_id,{answer:o.answer,answerLoading:!1})},[y]),F=n.useCallback(o=>{o.ref_id&&y(o.ref_id,{audio_en:o.audio_EN})},[y]),q=n.useCallback(o=>{o.ref_id&&y(o.ref_id,{questions:o.relevant_questions.map(b=>b.question),questionsLoading:!1})},[y]),Q=n.useCallback(o=>{o.ref_id&&y(o.ref_id,{sources:o.sources.map(b=>b.ref_id),sourcesLoading:!1})},[y]),G=n.useCallback(o=>{o.question&&M(z)&&y(z,{answerLoading:!1,entities:o.entities})},[y,M,z]);return n.useEffect(()=>(u&&(u.connect(),u.on("connect_error",o=>{console.error("Socket connection error:",o)}),u.on("newnode",B),j&&u.on("extractedentitieshook",G),j&&u.on("askquestionhook",V),j&&u.on("relevantquestionshook",q),j&&u.on("answersourceshook",Q),L&&u.on("new_node_created",D),L&&u.on("node_updated",$),j&&u.on("answeraudiohook",F)),()=>{u&&u.off()}),[u,B,D,L,V,j,q,Q,G,F,$]),n.useEffect(()=>{if(!_)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const x={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:_})};o.send(JSON.stringify(x))},o.onmessage=b=>{var U;const x=JSON.parse(b.data);if(x.type==="ping")return;const E=x==null?void 0:x.message;if(E.type==="on_step_start"||E.type==="on_step_complete"){const W=(U=x==null?void 0:x.message)==null?void 0:U.message;W&&R(W)}},o.onerror=b=>{console.error("WebSocket error:",b)}},[_,R]),n.useEffect(()=>{if(_)try{u==null||u.emit("update_project_id",{id:_})}catch(o){console.error(o)}},[_,u]),t.jsxs(t.Fragment,{children:[t.jsx(me,{}),t.jsx(Ye,{}),t.jsx(n.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(Xe,{direction:"row",children:[t.jsxs(ue,{...O,children:[t.jsx(et,{}),!w&&t.jsx(ot,{}),t.jsx(tt,{}),t.jsx(pe,{}),t.jsx(Qe,{}),t.jsxs(Ze,{children:["v",we]}),t.jsx(ge,{})]}),t.jsx(Be,{}),t.jsx(Ke,{})]})})]})};export{st as App};
