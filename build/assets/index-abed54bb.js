import{s as r,F as s,T as m,j as e,b as w,c as u,r as T,u as B,f as A}from"./index-2a9d3beb.js";import{B as F}from"./index-5c9cd044.js";import{u as G}from"./index-82f4c095.js";import{u as M,M as $,k as v,b as g,q as k,F as C,C as D}from"./react-toastify.esm-07017734.js";import{B as b,T as z,a as L}from"./index-889d74de.js";import{T as x}from"./index-8d47b5aa.js";import"./useSlotProps-28bca2ab.js";import"./index.esm-7c2c6137.js";import"./InfoIcon-fa5df30b.js";const P=({onClose:n})=>{const[i]=M(a=>[a.graphStyle]),o=()=>{localStorage.setItem("graphStyle",i),n()};return e.jsxs(R,{direction:"column",children:[e.jsx(V,{children:"Default graph view:"}),e.jsx($,{}),e.jsx(s,{mt:308,children:e.jsx(b,{kind:"big",onClick:o,children:"Save changes"})})]})},R=r(s)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,V=r(m)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,W=({initialValues:n})=>{const i=v({defaultValues:n,mode:"onSubmit"}),{isSubmitting:o}=i.formState,a=g(l=>l.setAppMetaData),p=i.handleSubmit(async l=>{try{(await k(l)).status==="success"&&a(l)}catch(c){console.log(c),console.warn(c)}});return e.jsx(C,{...i,children:e.jsx(q,{id:"add-node-form",onSubmit:p,children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(s,{pt:20,children:e.jsx(x,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...w}})}),e.jsx(s,{pt:20,children:e.jsx(x,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(s,{mt:210,py:24,children:o?e.jsx(K,{children:e.jsx(D,{color:u.white,size:20})}):e.jsx(b,{disabled:o,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},K=r(s).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,q=r.form`
  padding: 36px;
`,E=()=>e.jsx(s,{direction:"column",children:e.jsx(H,{children:"Graph Blueprint settings will go here."})}),H=r(m)`
  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin: 120px;
`,I=n=>{const{children:i,value:o,index:a,...p}=n;return o===a?e.jsx(Q,{"aria-labelledby":`simple-tab-${a}`,hidden:o!==a,id:`simple-tabpanel-${a}`,role:"tabpanel",...p,children:i}):null};function U(n){return{id:`simple-tab-${n}`,"aria-controls":`simple-tabpanel-${n}`}}const Y=({onClose:n})=>{const[i,o]=T.useState(0),[a,p]=B(t=>[t.isAdmin,t.setPubKey,t.pubKey]),l=A(t=>t.graphBlueprintFlag),c=g(t=>t.appMetaData),f=()=>a?"Admin Settings":"Settings",y=({children:t})=>e.jsxs(N,{children:[e.jsxs(s,{direction:"row",pt:3,children:[e.jsx(Z,{"data-testid":"setting-label",children:f()}),j()]}),t]}),j=()=>!p||a?null:e.jsx(e.Fragment,{}),S=(t,d)=>{o(d)},h=[...a?[{label:"General",component:W}]:[],{label:"Appearance",component:P},...a&&l?[{label:"Graph Blueprint",component:E}]:[]];return e.jsxs(X,{direction:"column",children:[e.jsx(y,{children:e.jsx(J,{"aria-label":"settings tabs",onChange:S,value:i,children:h.map((t,d)=>e.jsx(O,{disableRipple:!0,label:t.label,...U(d)},t.label))})}),h.map((t,d)=>e.jsx(I,{index:d,value:i,children:e.jsx(t.component,{initialValues:c,onClose:n})},t.label))]})},J=r(z)`
  && {
    .MuiTabs-indicator {
      background: ${u.primaryBlue};
    }
  }
`,N=r(s)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,O=r(L)`
  && {
    padding: 30px 0 24px;
    color: ${u.GRAY6};
    margin-left: 36px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${u.white};
    }
  }
`,Q=r(s)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,X=r(s)`
  min-height: 0;
  flex: 1;
`,Z=r(m)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,le=()=>{const{close:n}=G("settings");return e.jsx(F,{background:"BG1",id:"settings",noWrap:!0,onClose:n,children:e.jsx(Y,{onClose:n})})};export{le as SettingsModal};
