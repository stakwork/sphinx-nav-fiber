import{s as r,F as n,T as g,j as e,b as w,c as p,r as A,u as B}from"./index-b00f070c.js";import{B as v}from"./index-ee15833b.js";import{u as F}from"./index-4ed31db1.js";import{u as M,l as $,b,q as C,F as D}from"./react-toastify.esm-33bde65a.js";import{G}from"./index-45e98739.js";import{B as f,T as k,a as R}from"./index-fad08197.js";import{T as x}from"./index-47ec6fb6.js";import{C as L}from"./ClipLoader-bd3151f8.js";import"./useSlotProps-64798079.js";import"./index.esm-48f5a0db.js";import"./InfoIcon-2b7db8e3.js";const P=({onClose:s})=>{const[a]=M(t=>[t.graphStyle]),i=()=>{localStorage.setItem("graphStyle",a),s()};return e.jsxs(V,{direction:"column",children:[e.jsx(z,{children:"Default graph view:"}),e.jsx(G,{}),e.jsx(n,{mt:308,children:e.jsx(f,{kind:"big",onClick:i,children:"Save changes"})})]})},V=r(n)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,z=r(g)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,W=({initialValues:s})=>{const a=$({defaultValues:s,mode:"onSubmit"}),{isSubmitting:i}=a.formState,t=b(l=>l.setAppMetaData),d=a.handleSubmit(async l=>{try{(await C(l)).status==="success"&&t(l)}catch(c){console.warn(c)}});return e.jsx(D,{...a,children:e.jsx(q,{id:"add-node-form",onSubmit:d,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...w}})}),e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(n,{mt:210,py:24,children:i?e.jsx(K,{children:e.jsx(L,{color:p.white,size:20})}):e.jsx(f,{disabled:i,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},K=r(n).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,q=r.form`
  padding: 36px;
`,m=s=>{const{children:a,value:i,index:t,...d}=s;return i===t?e.jsx(U,{"aria-labelledby":`simple-tab-${t}`,hidden:i!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...d,children:a}):null};function u(s){return{id:`simple-tab-${s}`,"aria-controls":`simple-tabpanel-${s}`}}const E=({onClose:s})=>{const[a,i]=A.useState(0),[t,d]=B(o=>[o.isAdmin,o.setPubKey,o.pubKey]),l=b(o=>o.appMetaData),c=()=>t?"Admin Settings":"Settings",j=({children:o})=>e.jsxs(I,{children:[e.jsxs(n,{direction:"row",pt:3,children:[e.jsx(J,{children:c()}),y()]}),o]}),y=()=>!d||t?null:e.jsx(e.Fragment,{}),S=(o,T)=>{i(T)};return e.jsxs(Y,{direction:"column",children:[e.jsx(j,{children:e.jsxs(H,{"aria-label":"settings tabs",onChange:S,value:a,children:[t&&e.jsx(h,{disableRipple:!0,label:"General",...u(0)}),e.jsx(h,{color:p.white,disableRipple:!0,label:"Appearance",...u(1)})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(m,{index:0,value:a,children:e.jsx(W,{initialValues:l})})}),e.jsx(m,{index:t?1:0,value:a,children:e.jsx(P,{onClose:s})})]})},H=r(k)`
  && {
    .MuiTabs-indicator {
      background: ${p.primaryBlue};
    }
  }
`,I=r(n)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,h=r(R)`
  && {
    padding: 30px 0 24px;
    color: ${p.GRAY6};
    margin-left: 36px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${p.white};
    }
  }
`,U=r(n)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,Y=r(n)`
  min-height: 0;
  flex: 1;
`,J=r(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,re=()=>{const{close:s}=F("settings");return e.jsx(v,{background:"BG1",id:"settings",noWrap:!0,onClose:s,children:e.jsx(E,{onClose:s})})};export{re as SettingsModal};
