import{f as i,F as n,T as g,i as w,j as e,k as b,L as A,D as B,h as c,r as v,x as D,B as F}from"./index-b17e6e7f.js";import{B as M}from"./index-a41ce7c3.js";import{h as $,c as k,F as C,C as G}from"./react-toastify.esm-ac6bd257.js";import{B as f,T as L,a as R}from"./index-6bbf0f8e.js";import{T as x}from"./index-922af843.js";import"./useSlotProps-ddc77366.js";import"./index.esm-de2ad175.js";import"./InfoIcon-eed706a9.js";const P=({onClose:a})=>{const[s]=w(t=>[t.graphStyle]),r=()=>{localStorage.setItem("graphStyle",s),a()};return e.jsxs(V,{direction:"column",children:[e.jsx(z,{children:"Default graph view:"}),e.jsx($,{}),e.jsx(n,{mt:308,children:e.jsx(f,{kind:"big",onClick:r,children:"Save changes"})})]})},V=i(n)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,z=i(g)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,W=({initialValues:a})=>{const s=k({defaultValues:a,mode:"onSubmit"}),{isSubmitting:r}=s.formState,t=b(l=>l.setAppMetaData),d=s.handleSubmit(async l=>{try{(await A(l)).status==="success"&&t(l)}catch(p){console.warn(p)}});return e.jsx(C,{...s,children:e.jsx(E,{id:"add-node-form",onSubmit:d,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...B}})}),e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(n,{mt:210,py:24,children:r?e.jsx(K,{children:e.jsx(G,{color:c.white,size:20})}):e.jsx(f,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},K=i(n).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,E=i.form`
  padding: 36px;
`,h=a=>{const{children:s,value:r,index:t,...d}=a;return r===t?e.jsx(U,{"aria-labelledby":`simple-tab-${t}`,hidden:r!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...d,children:s}):null};function u(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const H=({onClose:a})=>{const[s,r]=v.useState(0),[t,d]=D(o=>[o.isAdmin,o.setPubKey,o.pubKey]),l=b(o=>o.appMetaData),p=()=>t?"Admin Settings":"Settings",j=({children:o})=>e.jsxs(q,{children:[e.jsxs(n,{direction:"row",pt:3,children:[e.jsx(J,{children:p()}),y()]}),o]}),y=()=>!d||t?null:e.jsx(e.Fragment,{}),S=(o,T)=>{r(T)};return e.jsxs(Y,{direction:"column",children:[e.jsx(j,{children:e.jsxs(I,{"aria-label":"settings tabs",onChange:S,value:s,children:[t&&e.jsx(m,{disableRipple:!0,label:"General",...u(0)}),e.jsx(m,{color:c.white,disableRipple:!0,label:"Appearance",...u(1)})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(h,{index:0,value:s,children:l&&e.jsx(W,{initialValues:l})})}),e.jsx(h,{index:t?1:0,value:s,children:e.jsx(P,{onClose:a})})]})},I=i(L)`
  && {
    .MuiTabs-indicator {
      background: ${c.primaryBlue};
    }
  }
`,q=i(n)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,m=i(R)`
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
`,ae=()=>{const{close:a}=F("settings");return e.jsx(M,{background:"BG1",id:"settings",noWrap:!0,onClose:a,children:e.jsx(H,{onClose:a})})};export{ae as SettingsModal};
