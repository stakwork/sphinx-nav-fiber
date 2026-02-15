import{W as se,u as ee,r as n,a as te,b as N,c as L,d as Z,f as re,S as ie,e as ae,_ as l,j as t,s as h,g as i,F as p,I as ce,C as le,m as de,h as oe,i as ue,T as O,B as he,Q as fe,k as pe,l as ge,n as me}from"./index-cd477ce3.js";import{P as xe,T as _e,O as ye,A as be}from"./index-c78262fb.js";const we=se`
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
`,je=()=>{const[e]=ee(),s=e.get("node"),a=n.useRef(!0),{setBudget:r}=te(g=>g),{setSidebarOpen:c,currentSearch:f}=N(g=>g),{fetchData:m,setAbortRequests:d,resetData:w,addNewNode:v,finishLoading:E}=L(g=>g);n.useEffect(()=>{if(a.current){const g=async()=>{f||w(),await m(r,d),c(!0),a.current=!1,f&&await Z(r)},A=async()=>{const T=await re(s||"",0,5);E(),a.current=!1,T&&v({nodes:T.nodes,edges:T.edges})};if(s){A();return}g()}},[s,f,m,r,d,c,w,a,E,v]),n.useEffect(()=>{if(!a.current){const g=async()=>{await m(r,d),c(!0),f&&await Z(r)};w(),g()}},[f,m,r,d,c,w,a])},ke=()=>{const e=n.useContext(ie);return e==null?void 0:e.socket},ve={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},Ee=ae(e=>({...ve,setAskedQuestion:s=>e(a=>({askedQuestions:[...a.askedQuestions||[],s],hasQuestionInProgress:!0})),setAskedQuestionAnswer:s=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],s],hasQuestionInProgress:!1})),setHasQuestionInProgress:s=>e({hasQuestionInProgress:s}),setHasTeachingInProgress:s=>e({hasTeachingInProgress:s}),setHasInstagraphInProgress:s=>e({hasInstagraphInProgress:s}),setTeachMeAnswer:s=>e({hasTeachingInProgress:!1,teachMeAnswer:s}),setInstagraphAnswer:s=>{var a,r,c,f;(a=s==null?void 0:s.instagraph)!=null&&a.edges&&((r=s==null?void 0:s.instagraph)!=null&&r.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=s==null?void 0:s.instagraph)==null?void 0:c.edges,nodes:(f=s==null?void 0:s.instagraph)==null?void 0:f.nodes}})}})),Te="0.1.106",Ae=n.lazy(()=>l(()=>import("./index-2267ea9d.js"),["assets/index-2267ea9d.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-c78262fb.js","assets/ClipLoader-a2aabfa5.js","assets/Tabs-3479e63e.js","assets/createSvgIcon-d3a37ae8.js"]).then(({SettingsModal:e})=>({default:e}))),ze=n.lazy(()=>l(()=>import("./index-b444b4c5.js").then(e=>e.i),["assets/index-b444b4c5.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-c78262fb.js","assets/string-a277709d.js"]).then(({ClaimsModal:e})=>({default:e}))),Se=n.lazy(()=>l(()=>import("./index-c5b8262a.js"),["assets/index-c5b8262a.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/CheckIcon-cdc2da01.js","assets/index-717b1eb9.js","assets/ClipLoader-a2aabfa5.js"]).then(({AddContentModal:e})=>({default:e}))),Le=n.lazy(()=>l(()=>import("./index-7a810086.js"),["assets/index-7a810086.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-c78262fb.js","assets/CheckIcon-cdc2da01.js","assets/index-717b1eb9.js","assets/ClipLoader-a2aabfa5.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/index-6e5a45ba.js","assets/index-2ec0752b.js","assets/SourcesTableIcon-baa3c369.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/SoundIcon-d953b14f.js","assets/SucessFeedBackIcon-e326e5b8.js","assets/Stack-a99f7a31.js","assets/clsx-b7d39b3a.js","assets/createSvgIcon-d3a37ae8.js","assets/TextareaAutosize-141961f4.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),Ie=n.lazy(()=>l(()=>import("./index-8be28c76.js"),["assets/index-8be28c76.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-2ec0752b.js","assets/SourcesTableIcon-baa3c369.js","assets/index-c78262fb.js","assets/CheckIcon-cdc2da01.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/SoundIcon-d953b14f.js","assets/SucessFeedBackIcon-e326e5b8.js","assets/TableRow-537c0ebf.js","assets/constants-fdeeebce.js","assets/ClipLoader-a2aabfa5.js","assets/index-6e5a45ba.js","assets/Stack-a99f7a31.js","assets/clsx-b7d39b3a.js","assets/createSvgIcon-d3a37ae8.js","assets/TextareaAutosize-141961f4.js","assets/index-3949c68d.js","assets/Typography-d0b50fa8.js","assets/Tabs-3479e63e.js"]).then(({SourcesTableModal:e})=>({default:e}))),Pe=n.lazy(()=>l(()=>import("./index-a5c0d47d.js"),["assets/index-a5c0d47d.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-c78262fb.js","assets/index-2ec0752b.js","assets/SourcesTableIcon-baa3c369.js","assets/CheckIcon-cdc2da01.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/SoundIcon-d953b14f.js","assets/SucessFeedBackIcon-e326e5b8.js","assets/Skeleton-6f91f8f8.js","assets/ClipLoader-a2aabfa5.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Re=n.lazy(()=>l(()=>import("./index-5940473f.js"),["assets/index-5940473f.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-c78262fb.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/Skeleton-6f91f8f8.js","assets/ClipLoader-a2aabfa5.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Oe=n.lazy(()=>l(()=>import("./index-303a129d.js"),["assets/index-303a129d.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-c78262fb.js","assets/index-2ec0752b.js","assets/SourcesTableIcon-baa3c369.js","assets/CheckIcon-cdc2da01.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/SoundIcon-d953b14f.js","assets/SucessFeedBackIcon-e326e5b8.js","assets/index-6e5a45ba.js","assets/Stack-a99f7a31.js","assets/clsx-b7d39b3a.js","assets/createSvgIcon-d3a37ae8.js","assets/TextareaAutosize-141961f4.js","assets/constants-fdeeebce.js","assets/ClipLoader-a2aabfa5.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Ne=n.lazy(()=>l(()=>import("./index-8f7dd3da.js"),["assets/index-8f7dd3da.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-c78262fb.js","assets/index-3949c68d.js","assets/constants-fdeeebce.js","assets/index-2ec0752b.js","assets/SourcesTableIcon-baa3c369.js","assets/CheckIcon-cdc2da01.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/SoundIcon-d953b14f.js","assets/SucessFeedBackIcon-e326e5b8.js","assets/index-6e5a45ba.js","assets/Stack-a99f7a31.js","assets/clsx-b7d39b3a.js","assets/createSvgIcon-d3a37ae8.js","assets/TextareaAutosize-141961f4.js","assets/ClipLoader-a2aabfa5.js"]).then(({MergeNodeModal:e})=>({default:e}))),Ce=n.lazy(()=>l(()=>import("./index-ffbed009.js"),["assets/index-ffbed009.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/ClipLoader-a2aabfa5.js","assets/index-c78262fb.js","assets/index-6e5a45ba.js","assets/index-2ec0752b.js","assets/SourcesTableIcon-baa3c369.js","assets/CheckIcon-cdc2da01.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/SoundIcon-d953b14f.js","assets/SucessFeedBackIcon-e326e5b8.js","assets/Stack-a99f7a31.js","assets/clsx-b7d39b3a.js","assets/createSvgIcon-d3a37ae8.js","assets/TextareaAutosize-141961f4.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Me=n.lazy(()=>l(()=>import("./index-fda540ed.js"),["assets/index-fda540ed.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-6e5a45ba.js","assets/index-2ec0752b.js","assets/SourcesTableIcon-baa3c369.js","assets/index-c78262fb.js","assets/CheckIcon-cdc2da01.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/SoundIcon-d953b14f.js","assets/SucessFeedBackIcon-e326e5b8.js","assets/Stack-a99f7a31.js","assets/clsx-b7d39b3a.js","assets/createSvgIcon-d3a37ae8.js","assets/TextareaAutosize-141961f4.js","assets/ClipLoader-a2aabfa5.js","assets/isPlainObject-6cf62c7e.js","assets/Tabs-3479e63e.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/Switch-92dba872.js","assets/FormControlLabel-a4cab2de.js","assets/Typography-d0b50fa8.js","assets/index-b34c56d3.js"]).then(({BlueprintModal:e})=>({default:e}))),Be=n.lazy(()=>l(()=>import("./index-96a91276.js"),["assets/index-96a91276.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-e326e5b8.js"]).then(({UserFeedBackModal:e})=>({default:e}))),De=n.lazy(()=>l(()=>import("./index-c0c30221.js"),["assets/index-c0c30221.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-1d63f457.js","assets/index-c78262fb.js","assets/index-6e5a45ba.js","assets/index-2ec0752b.js","assets/SourcesTableIcon-baa3c369.js","assets/CheckIcon-cdc2da01.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/SoundIcon-d953b14f.js","assets/SucessFeedBackIcon-e326e5b8.js","assets/Stack-a99f7a31.js","assets/clsx-b7d39b3a.js","assets/createSvgIcon-d3a37ae8.js","assets/TextareaAutosize-141961f4.js","assets/FormControlLabel-a4cab2de.js","assets/Typography-d0b50fa8.js","assets/Switch-92dba872.js","assets/ClipLoader-a2aabfa5.js"]).then(({CreateBountyModal:e})=>({default:e}))),$e=n.lazy(()=>l(()=>import("./index-cd477ce3.js").then(e=>e.ck),["assets/index-cd477ce3.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Ve=n.lazy(()=>l(()=>import("./index-d2cc3e8f.js"),["assets/index-d2cc3e8f.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-762a6942.js","assets/index-c78262fb.js","assets/SoundIcon-d953b14f.js"]).then(({BriefDescription:e})=>({default:e}))),Fe=n.lazy(()=>l(()=>import("./index-68f74506.js"),["assets/index-68f74506.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-fa195717.js","assets/index-c78262fb.js","assets/index-1d63f457.js","assets/index-6e5a45ba.js","assets/index-2ec0752b.js","assets/SourcesTableIcon-baa3c369.js","assets/CheckIcon-cdc2da01.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/SoundIcon-d953b14f.js","assets/SucessFeedBackIcon-e326e5b8.js","assets/Stack-a99f7a31.js","assets/clsx-b7d39b3a.js","assets/createSvgIcon-d3a37ae8.js","assets/TextareaAutosize-141961f4.js","assets/FormControlLabel-a4cab2de.js","assets/Typography-d0b50fa8.js","assets/Switch-92dba872.js","assets/ClipLoader-a2aabfa5.js"]).then(({NodeActionModal:e})=>({default:e}))),qe=()=>t.jsxs(t.Fragment,{children:[t.jsx(Le,{}),t.jsx(Se,{}),t.jsx(Ae,{}),t.jsx(Pe,{}),t.jsx(Re,{}),t.jsx(Ie,{}),t.jsx(Oe,{}),t.jsx(Ce,{}),t.jsx(Me,{}),t.jsx(Ne,{}),t.jsx(Be,{}),t.jsx(De,{}),t.jsx($e,{}),t.jsx(Ve,{}),t.jsx(Fe,{}),t.jsx(ze,{})]}),Qe=()=>{const[e,s]=n.useState(null),{runningProjectMessages:a}=L(d=>d),r=d=>{s(d.currentTarget)},c=()=>{s(null)},f=!!e,m=f?"simple-popover":void 0;return a.length?t.jsxs(Ue,{ml:8,children:[t.jsx(We,{onClick:r,children:t.jsxs(_e,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ce,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(Ke,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:c,open:f,children:[t.jsx(ne,{onClick:c,children:t.jsx(le,{})}),t.jsx(Ge,{p:16,children:a.map(d=>t.jsx("p",{className:"item",children:d},d))})]})]}):null},Ue=h(p).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Ge=h(p)`
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
`,We=h(p).attrs({align:"center",direction:"row"})`
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
`,ne=h.div`
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
`,Ke=h(xe)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${i.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${ne} {
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
`;const He=()=>{const e=N(d=>d.appMetaData),{resetAiSummaryAnswer:s,setNewLoading:a}=oe(),{abortFetchData:r,resetGraph:c}=L(d=>d),f=ue();if(!e)return null;const m=()=>{a(null),r(),c(),s(),f("/")};return t.jsxs(Ye,{children:[t.jsxs(Je,{onClick:m,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(O,{className:"title",color:"white",children:e.title})}),t.jsx(O,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(Qe,{})]})},Ye=h(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Je=h.div`
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
`,Xe=620,Ze=()=>{const e=`(max-width: ${Xe}px)`,[s,a]=n.useState(()=>window.matchMedia(e).matches);return n.useEffect(()=>{const r=window.matchMedia(e);a(r.matches);const c=()=>{a(r.matches)};return window.addEventListener("resize",c),()=>r.removeEventListener("change",c)},[e]),s},et=()=>{const[e,s]=n.useState(!0),a=Ze();n.useEffect(()=>{s(!0)},[a]);const r=()=>{s(!1)};return a&&e?t.jsxs(tt,{align:"center",direction:"column",justify:"center",onClick:r,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(p,{align:"center",direction:"column",justify:"center",children:[t.jsx(R,{children:"Second Brain is currently"}),t.jsx(R,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(R,{children:"Mobile support coming soon."})]}),t.jsx(he,{color:"secondary",onClick:r,variant:"contained",children:"Got It"})]}):null},tt=h(p)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,R=h(O)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,ot=h(fe)`
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
`,nt=h(p)`
  height: 100%;
  width: 100%;
  background-color: ${i.black};
`,st=h(p)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${i.white};
  font-size: 12px;
  opacity: 0.5;
`,rt=n.lazy(()=>l(()=>import("./index-a5773ada.js"),["assets/index-a5773ada.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-baa3c369.js","assets/index-c78262fb.js"]).then(({MainToolbar:e})=>({default:e}))),it=n.lazy(()=>l(()=>import("./index-1177c852.js").then(e=>e.i),["assets/index-1177c852.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-b34c56d3.js","assets/three.module-9722a9fc.js","assets/isPlainObject-6cf62c7e.js","assets/index-c78262fb.js","assets/index-2ec0752b.js","assets/SourcesTableIcon-baa3c369.js","assets/CheckIcon-cdc2da01.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/SoundIcon-d953b14f.js","assets/SucessFeedBackIcon-e326e5b8.js","assets/TextareaAutosize-141961f4.js","assets/index-79b57cab.js","assets/string-a277709d.js","assets/index-762a6942.js","assets/index-fa195717.js","assets/ClipLoader-a2aabfa5.js","assets/clsx-b7d39b3a.js"]).then(({Universe:e})=>({default:e}))),at=n.lazy(()=>l(()=>import("./index-612fde02.js").then(e=>e.i),["assets/index-612fde02.js","assets/index-cd477ce3.js","assets/index-b4d03b7b.css","assets/index-2ec0752b.js","assets/SourcesTableIcon-baa3c369.js","assets/index-c78262fb.js","assets/CheckIcon-cdc2da01.js","assets/DeleteNodeIcon-8d8f27fd.js","assets/SoundIcon-d953b14f.js","assets/SucessFeedBackIcon-e326e5b8.js","assets/ClipLoader-a2aabfa5.js","assets/Skeleton-6f91f8f8.js","assets/index-762a6942.js","assets/index-79b57cab.js","assets/isPlainObject-6cf62c7e.js","assets/string-a277709d.js","assets/index-d2cc3e8f.js","assets/Stack-a99f7a31.js","assets/clsx-b7d39b3a.js","assets/FormControlLabel-a4cab2de.js","assets/Typography-d0b50fa8.js","assets/createSvgIcon-d3a37ae8.js"]).then(({SideBar:e})=>({default:e}))),dt=()=>{const[e]=ee(),s=e.get("q"),{setNodeCount:a}=te(o=>o),r=n.useRef(null),c=n.useRef(null);je();const{setCurrentSearch:f,setRelevanceSelected:m,setTranscriptOpen:d,universeQuestionIsOpen:w,setUniverseQuestionIsOpen:v}=N(o=>o),E=Ee(o=>o.setTeachMeAnswer),{setCategoryFilter:g,addNewNode:A,splashDataLoading:T,runningProjectId:j,setRunningProjectMessages:C,isFetching:M}=L(o=>o),{setAiSummaryAnswer:x,getKeyExist:B,aiRefId:I}=oe(o=>o),[P,y,D]=pe(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag,o.chatSplashScreenAsDefault]),u=ke(),$=ge({mode:"onChange"}),{setValue:V}=$;n.useEffect(()=>{D&&y&&v()},[y,D,v]),n.useEffect(()=>{V("search",s??""),d(!1),m(!1),f(s??""),E(""),g(null)},[s,g,f,m,E,d,V]);const F=n.useCallback(()=>{a("INCREMENT")},[a]),q=n.useCallback(o=>{M||(r.current||(r.current={nodes:[],edges:[]}),o.edges&&r.current.edges.push(...o.edges),o.nodes&&r.current.nodes.push(...o.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(r.current){const{nodes:b,edges:k}=r.current,z={nodes:b,edges:k};r.current={nodes:[],edges:[]},A(z)}},3e3))},[A,M]),Q=n.useCallback(o=>{console.log(o)},[]),U=n.useCallback(o=>{o.ref_id&&x(o.ref_id,{answer:o.answer,answerLoading:!1})},[x]),G=n.useCallback(o=>{o.ref_id&&x(o.ref_id,{audio_en:o.audio_EN})},[x]),W=n.useCallback(o=>{o.ref_id&&x(o.ref_id,{questions:o.relevant_questions.map(b=>b.question),questionsLoading:!1})},[x]),K=n.useCallback(o=>{o.ref_id&&x(o.ref_id,{sources:o.sources.map(b=>b.ref_id),sourcesLoading:!1})},[x]),H=n.useCallback(o=>{o.question&&B(I)&&x(I,{answerLoading:!1,entities:o.entities})},[x,B,I]);return n.useEffect(()=>(u&&(u.connect(),u.on("connect_error",o=>{console.error("Socket connection error:",o)}),u.on("newnode",F),y&&u.on("extractedentitieshook",H),y&&u.on("askquestionhook",U),y&&u.on("relevantquestionshook",W),y&&u.on("answersourceshook",K),P&&u.on("new_node_created",q),P&&u.on("node_updated",Q),y&&u.on("answeraudiohook",G)),()=>{u&&u.off()}),[u,F,q,P,U,y,W,K,H,G,Q]),n.useEffect(()=>{var z;if(!j)return;const b=((z=window.ENV)==null?void 0:z.STAKWORK_WEBSOCKET_URL)||{}.STAKWORK_WEBSOCKET_URL||"wss://jobs.stakwork.com",k=new WebSocket(`${b}/cable?channel=ProjectLogChannel`);k.onopen=()=>{const _={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:j})};k.send(JSON.stringify(_))},k.onmessage=S=>{var J;const _=JSON.parse(S.data);if(_.type==="ping")return;const Y=_==null?void 0:_.message;if(Y.type==="on_step_start"||Y.type==="on_step_complete"){const X=(J=_==null?void 0:_.message)==null?void 0:J.message;X&&C(X)}},k.onerror=S=>{console.error("WebSocket error:",S)}},[j,C]),n.useEffect(()=>{if(j)try{u==null||u.emit("update_project_id",{id:j})}catch(o){console.error(o)}},[j,u]),t.jsxs(t.Fragment,{children:[t.jsx(we,{}),t.jsx(et,{}),t.jsx(n.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:T?null:t.jsxs(nt,{direction:"row",children:[t.jsxs(me,{...$,children:[t.jsx(rt,{}),!w&&t.jsx(at,{}),t.jsx(it,{}),t.jsx(ye,{}),t.jsx(He,{}),t.jsxs(st,{children:["v",Te]}),t.jsx(be,{})]}),t.jsx(qe,{}),t.jsx(ot,{})]})})]})};export{dt as App};
