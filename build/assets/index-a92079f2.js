import{o,F as s,T as g,p as y,j as e,A as b,aT as w,aU as S,q as x,r as T,I as v,N as m}from"./index-b32e1ec4.js";import{B as A}from"./index-2267143a.js";import{G as C,i as B,F as G}from"./index-c0312354.js";import{B as f,T as M,a as $}from"./index-1f6db9c3.js";import{T as u}from"./index-61b17838.js";import{C as k}from"./ClipLoader-c2d8f3f5.js";import"./useSlotProps-87521ceb.js";import"./createSvgIcon-ca5f5744.js";import"./index.esm-a82cf083.js";import"./InfoIcon-69b32930.js";const D=({onClose:t})=>{const[i]=y(n=>[n.graphStyle]),r=()=>{localStorage.setItem("graphStyle",i),t()};return e.jsxs(F,{direction:"column",children:[e.jsx(z,{children:"Default graph view:"}),e.jsx(C,{}),e.jsx(s,{mt:308,children:e.jsx(f,{kind:"big",onClick:r,children:"Save Changes"})})]})},F=o(s)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,z=o(g)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,L=({initialValues:t})=>{const i=B({defaultValues:t,mode:"onSubmit"}),{isSubmitting:r}=i.formState,n=b(d=>d.setAppMetaData),l=i.handleSubmit(async d=>{try{(await w(d)).status==="success"&&n(d)}catch(c){console.warn(c)}});return e.jsx(G,{...i,children:e.jsx(R,{id:"add-node-form",onSubmit:l,children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(s,{pt:20,children:e.jsx(u,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...S}})}),e.jsx(s,{pt:20,children:e.jsx(u,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(s,{mt:210,py:24,children:r?e.jsx(P,{children:e.jsx(k,{color:x.white,size:20})}):e.jsx(f,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save Changes"})})]})})})},P=o(s).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,R=o.form`
  padding: 36px;
`,V=t=>{const{children:i,value:r,index:n,...l}=t;return r===n?e.jsx(U,{"aria-labelledby":`simple-tab-${n}`,hidden:r!==n,id:`simple-tabpanel-${n}`,role:"tabpanel",...l,children:i}):null};function I(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const W=({onClose:t})=>{const[i,r]=T.useState(0),[n]=v(a=>[a.isAdmin,a.setPubKey]),l=b(a=>a.appMetaData),d=()=>n?"Admin Settings":"Settings",c=({children:a})=>e.jsxs(E,{children:[e.jsx(s,{direction:"row",pt:3,children:e.jsx(N,{"data-testid":"setting-label",children:d()})}),a]}),j=(a,p)=>{r(p)},h=[...n?[{label:"General",component:L}]:[],{label:"Appearance",component:D}];return e.jsxs(K,{"data-testid":"settings-modal",direction:"column",children:[e.jsx(c,{children:e.jsx(q,{"aria-label":"settings tabs",onChange:j,value:i,children:h.map((a,p)=>e.jsx(H,{disableRipple:!0,label:a.label,...I(p)},a.label))})}),h.map((a,p)=>e.jsx(V,{index:p,value:i,children:l&&e.jsx(a.component,{initialValues:l,onClose:t})},a.label))]})},q=o(M)`
  && {
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
    padding-left: 34px;
  }
`,E=o(s)`
  border-radius: 9px 9px 0 0;
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,H=o($)`
  && {
    min-width: 0;
    width: auto;
    padding: 30px 0 19px;
    color: ${x.GRAY6};
    margin-right: 87px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${x.white};
    }
  }
`,U=o(s)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
  overflow: hidden;
  border-radius: 9px;

  @media (max-width: 1024px) {
    min-height: auto;
    overflow: auto;
    max-height: 400px;
    min-width: 480px;
  }

  @media (max-width: 768px) {
    min-height: auto;
    overflow: auto;
    max-height: 300px;
    min-width: 380px;
  }

  @media (max-width: 480px) {
    min-height: auto;
    overflow: auto;
    max-height: 200px;
    min-width: 280px;
  }
`,K=o(s)`
  min-height: 0;
  flex: 1;
  overflow: hidden;
`,N=o(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`,ie=()=>{const{close:t}=m("settings"),{visible:i}=m("addItem");return i?null:e.jsx(A,{background:"BG1",id:"settings",noWrap:!0,onClose:t,preventOutsideClose:!0,children:e.jsx(W,{onClose:t})})};export{ie as SettingsModal};
