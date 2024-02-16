import{Y as i,X as n,Z as m,j as e,ab as T,a0 as p,r as A,a1 as v}from"./index-cfb66438.js";import{aA as M,cf as $,cg as b,ch as k,aK as j,ci as B,cj as D,ck as x,aS as C,cl as F,cm as G,u as R,ca as L}from"./index-3e10e9f4.js";const P=({onClose:a})=>{const[s]=M(t=>[t.graphStyle]),r=()=>{localStorage.setItem("graphStyle",s),a()};return e.jsxs(V,{direction:"column",children:[e.jsx(z,{children:"Default graph view:"}),e.jsx($,{}),e.jsx(n,{mt:308,children:e.jsx(b,{kind:"big",onClick:r,children:"Save changes"})})]})},V=i(n)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,z=i(m)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,K=({initialValues:a})=>{const s=k({defaultValues:a,mode:"onSubmit"}),{isSubmitting:r}=s.formState,t=j(o=>o.setAppMetaData),c=s.handleSubmit(async o=>{try{(await B(o)).status==="success"&&t(o)}catch(d){console.log(d),console.warn(d)}});return e.jsx(D,{...s,children:e.jsx(E,{id:"add-node-form",onSubmit:c,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...T}})}),e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(n,{mt:210,py:24,children:r?e.jsx(W,{children:e.jsx(C,{color:p.white,size:20})}):e.jsx(b,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},W=i(n).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,E=i.form`
  padding: 36px;
`,h=a=>{const{children:s,value:r,index:t,...c}=a;return r===t?e.jsx(q,{"aria-labelledby":`simple-tab-${t}`,hidden:r!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...c,children:s}):null};function u(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const H=({onClose:a})=>{const[s,r]=A.useState(0),[t,c]=v(l=>[l.isAdmin,l.setPubKey,l.pubKey]),o=j(l=>l.appMetaData),d=()=>t?"Admin Settings":"Settings",f=({children:l})=>e.jsxs(Y,{children:[e.jsxs(n,{direction:"row",pt:3,children:[e.jsx(X,{children:d()}),y()]}),l]}),y=()=>!c||t?null:e.jsx(e.Fragment,{}),S=(l,w)=>{r(w)};return e.jsxs(U,{direction:"column",children:[e.jsx(f,{children:e.jsxs(I,{"aria-label":"settings tabs",onChange:S,value:s,children:[t&&e.jsx(g,{disableRipple:!0,label:"General",...u(0)}),e.jsx(g,{color:p.white,disableRipple:!0,label:"Appearance",...u(1)})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(h,{index:0,value:s,children:e.jsx(K,{initialValues:o})})}),e.jsx(h,{index:t?1:0,value:s,children:e.jsx(P,{onClose:a})})]})},I=i(F)`
  && {
    .MuiTabs-indicator {
      background: ${p.primaryBlue};
    }
  }
`,Y=i(n)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,g=i(G)`
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
`,q=i(n)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,U=i(n)`
  min-height: 0;
  flex: 1;
`,X=i(m)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,N=()=>{const{close:a}=R("settings");return e.jsx(L,{background:"BG1",id:"settings",noWrap:!0,onClose:a,children:e.jsx(H,{onClose:a})})};export{N as SettingsModal};
