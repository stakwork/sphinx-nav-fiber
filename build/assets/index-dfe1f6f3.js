import{s as r,F as n,T as g,j as e,h as w,b as c,r as A,g as B}from"./index-238bcbcb.js";import{B as v}from"./index-16b19465.js";import{u as F}from"./index-2fe630df.js";import{e as M,X as $,t as C,h as b,z as D,F as k,C as G}from"./react-toastify.esm-51e9cc33.js";import{B as f,T as R,a as z}from"./index-f8ef5697.js";import{T as x}from"./index-3548e533.js";import"./useSlotProps-ca420900.js";import"./index.esm-18f2dc8d.js";import"./InfoIcon-cc0311d3.js";const L=({onClose:s})=>{const[a]=M(t=>[t.graphStyle]),i=()=>{localStorage.setItem("graphStyle",a),s()};return e.jsxs(P,{direction:"column",children:[e.jsx(V,{children:"Default graph view:"}),e.jsx($,{}),e.jsx(n,{mt:308,children:e.jsx(f,{kind:"big",onClick:i,children:"Save changes"})})]})},P=r(n)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,V=r(g)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,W=({initialValues:s})=>{const a=C({defaultValues:s,mode:"onSubmit"}),{isSubmitting:i}=a.formState,t=b(l=>l.setAppMetaData),d=a.handleSubmit(async l=>{try{(await D(l)).status==="success"&&t(l)}catch(p){console.warn(p)}});return e.jsx(k,{...a,children:e.jsx(E,{id:"add-node-form",onSubmit:d,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...w}})}),e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(n,{mt:210,py:24,children:i?e.jsx(K,{children:e.jsx(G,{color:c.white,size:20})}):e.jsx(f,{disabled:i,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},K=r(n).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,E=r.form`
  padding: 36px;
`,h=s=>{const{children:a,value:i,index:t,...d}=s;return i===t?e.jsx(U,{"aria-labelledby":`simple-tab-${t}`,hidden:i!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...d,children:a}):null};function u(s){return{id:`simple-tab-${s}`,"aria-controls":`simple-tabpanel-${s}`}}const H=({onClose:s})=>{const[a,i]=A.useState(0),[t,d]=B(o=>[o.isAdmin,o.setPubKey,o.pubKey]),l=b(o=>o.appMetaData),p=()=>t?"Admin Settings":"Settings",j=({children:o})=>e.jsxs(q,{children:[e.jsxs(n,{direction:"row",pt:3,children:[e.jsx(Y,{children:p()}),y()]}),o]}),y=()=>!d||t?null:e.jsx(e.Fragment,{}),S=(o,T)=>{i(T)};return e.jsxs(X,{direction:"column",children:[e.jsx(j,{children:e.jsxs(I,{"aria-label":"settings tabs",onChange:S,value:a,children:[t&&e.jsx(m,{disableRipple:!0,label:"General",...u(0)}),e.jsx(m,{color:c.white,disableRipple:!0,label:"Appearance",...u(1)})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(h,{index:0,value:a,children:e.jsx(W,{initialValues:l})})}),e.jsx(h,{index:t?1:0,value:a,children:e.jsx(L,{onClose:s})})]})},I=r(R)`
  && {
    .MuiTabs-indicator {
      background: ${c.primaryBlue};
    }
  }
`,q=r(n)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,m=r(z)`
  && {
    padding: 30px 0 24px;
    color: ${c.GRAY6};
    margin-left: 36px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${c.white};
    }
  }
`,U=r(n)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,X=r(n)`
  min-height: 0;
  flex: 1;
`,Y=r(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,ae=()=>{const{close:s}=F("settings");return e.jsx(v,{background:"BG1",id:"settings",noWrap:!0,onClose:s,children:e.jsx(H,{onClose:s})})};export{ae as SettingsModal};
