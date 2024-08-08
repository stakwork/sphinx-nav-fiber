import{o,F as s,T as g,p as y,j as e,A as b,aU as w,aV as S,q as h,r as T,J as v,O as m}from"./index-369c6756.js";import{B as A}from"./index-e220f2d2.js";import{G as C,h as B,F as G}from"./index-46d6ff89.js";import{B as f,T as M,a as $}from"./index-f3afa770.js";import{T as u}from"./index-e5f6dda4.js";import{C as k}from"./ClipLoader-575b4d56.js";import"./useSlotProps-a1a7d336.js";import"./createSvgIcon-e09467d4.js";import"./index.esm-1761dbdb.js";import"./InfoIcon-853ba6bc.js";const D=({onClose:t})=>{const[i]=y(n=>[n.graphStyle]),r=()=>{localStorage.setItem("graphStyle",i),t()};return e.jsxs(F,{direction:"column",children:[e.jsx(z,{children:"Default graph view:"}),e.jsx(C,{}),e.jsx(s,{mt:308,children:e.jsx(f,{kind:"big",onClick:r,children:"Save Changes"})})]})},F=o(s)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,z=o(g)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,V=({initialValues:t})=>{const i=B({defaultValues:t,mode:"onSubmit"}),{isSubmitting:r}=i.formState,n=b(d=>d.setAppMetaData),l=i.handleSubmit(async d=>{try{(await w(d)).status==="success"&&n(d)}catch(c){console.warn(c)}});return e.jsx(G,{...i,children:e.jsx(P,{id:"add-node-form",onSubmit:l,children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(s,{pt:20,children:e.jsx(u,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...S}})}),e.jsx(s,{pt:20,children:e.jsx(u,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(s,{mt:210,py:24,children:r?e.jsx(L,{children:e.jsx(k,{color:h.white,size:20})}):e.jsx(f,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save Changes"})})]})})})},L=o(s).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,P=o.form`
  padding: 36px;
`,R=t=>{const{children:i,value:r,index:n,...l}=t;return r===n?e.jsx(O,{"aria-labelledby":`simple-tab-${n}`,hidden:r!==n,id:`simple-tabpanel-${n}`,role:"tabpanel",...l,children:i}):null};function W(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const I=({onClose:t})=>{const[i,r]=T.useState(0),[n]=v(a=>[a.isAdmin,a.setPubKey]),l=b(a=>a.appMetaData),d=()=>n?"Admin Settings":"Settings",c=({children:a})=>e.jsxs(E,{children:[e.jsx(s,{direction:"row",pt:3,children:e.jsx(J,{"data-testid":"setting-label",children:d()})}),a]}),j=(a,p)=>{r(p)},x=[...n?[{label:"General",component:V}]:[],{label:"Appearance",component:D}];return e.jsxs(U,{"data-testid":"settings-modal",direction:"column",children:[e.jsx(c,{children:e.jsx(q,{"aria-label":"settings tabs",onChange:j,value:i,children:x.map((a,p)=>e.jsx(H,{disableRipple:!0,label:a.label,...W(p)},a.label))})}),x.map((a,p)=>e.jsx(R,{index:p,value:i,children:l&&e.jsx(a.component,{initialValues:l,onClose:t})},a.label))]})},q=o(M)`
  && {
    .MuiTabs-indicator {
      background: ${h.primaryBlue};
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
    color: ${h.GRAY6};
    margin-right: 87px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${h.white};
    }
  }
`,O=o(s)`
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
`,U=o(s)`
  min-height: 0;
  flex: 1;
  overflow: hidden;
`,J=o(g)`
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
`,ie=()=>{const{close:t}=m("settings"),{visible:i}=m("addItem");return i?null:e.jsx(A,{background:"BG1",id:"settings",noWrap:!0,onClose:t,preventOutsideClose:!0,children:e.jsx(I,{onClose:t})})};export{ie as SettingsModal};
