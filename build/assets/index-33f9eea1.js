import{s as i,F as n,T as g,j as e,b as w,c as p,r as A,u as B}from"./index-acf86df8.js";import{B as v}from"./index-f58c2ff2.js";import{u as F}from"./index-709a04ec.js";import{u as M,G as $,l as C,b,q as D,F as G}from"./react-toastify.esm-9e975f1c.js";import{B as f,T as k,a as R}from"./index-1658b0e9.js";import{T as x}from"./index-4c09a329.js";import{C as L}from"./ClipLoader-930b6314.js";import"./useSlotProps-6fcf1e83.js";import"./index.esm-fdb798ec.js";import"./InfoIcon-221d62e1.js";const P=({onClose:s})=>{const[a]=M(t=>[t.graphStyle]),r=()=>{localStorage.setItem("graphStyle",a),s()};return e.jsxs(V,{direction:"column",children:[e.jsx(z,{children:"Default graph view:"}),e.jsx($,{}),e.jsx(n,{mt:308,children:e.jsx(f,{kind:"big",onClick:r,children:"Save changes"})})]})},V=i(n)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,z=i(g)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,W=({initialValues:s})=>{const a=C({defaultValues:s,mode:"onSubmit"}),{isSubmitting:r}=a.formState,t=b(l=>l.setAppMetaData),d=a.handleSubmit(async l=>{try{(await D(l)).status==="success"&&t(l)}catch(c){console.log(c),console.warn(c)}});return e.jsx(G,{...a,children:e.jsx(q,{id:"add-node-form",onSubmit:d,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...w}})}),e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(n,{mt:210,py:24,children:r?e.jsx(K,{children:e.jsx(L,{color:p.white,size:20})}):e.jsx(f,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},K=i(n).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,q=i.form`
  padding: 36px;
`,u=s=>{const{children:a,value:r,index:t,...d}=s;return r===t?e.jsx(U,{"aria-labelledby":`simple-tab-${t}`,hidden:r!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...d,children:a}):null};function h(s){return{id:`simple-tab-${s}`,"aria-controls":`simple-tabpanel-${s}`}}const E=({onClose:s})=>{const[a,r]=A.useState(0),[t,d]=B(o=>[o.isAdmin,o.setPubKey,o.pubKey]),l=b(o=>o.appMetaData),c=()=>t?"Admin Settings":"Settings",j=({children:o})=>e.jsxs(I,{children:[e.jsxs(n,{direction:"row",pt:3,children:[e.jsx(J,{"data-testid":"setting-label",children:c()}),y()]}),o]}),y=()=>!d||t?null:e.jsx(e.Fragment,{}),S=(o,T)=>{r(T)};return e.jsxs(Y,{direction:"column",children:[e.jsx(j,{children:e.jsxs(H,{"aria-label":"settings tabs",onChange:S,value:a,children:[t&&e.jsx(m,{disableRipple:!0,label:"General",...h(0)}),e.jsx(m,{color:p.white,disableRipple:!0,label:"Appearance",...h(1)})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(u,{index:0,value:a,children:e.jsx(W,{initialValues:l})})}),e.jsx(u,{index:t?1:0,value:a,children:e.jsx(P,{onClose:s})})]})},H=i(k)`
  && {
    .MuiTabs-indicator {
      background: ${p.primaryBlue};
    }
  }
`,I=i(n)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,m=i(R)`
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
`,U=i(n)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,Y=i(n)`
  min-height: 0;
  flex: 1;
`,J=i(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,ne=()=>{const{close:s}=F("settings");return e.jsx(v,{background:"BG1",id:"settings",noWrap:!0,onClose:s,children:e.jsx(E,{onClose:s})})};export{ne as SettingsModal};
