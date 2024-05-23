import{f as o,F as s,T as g,i as y,j as e,k as b,L as w,D as S,h as x,r as T,x as v,B as m}from"./index-b17e6e7f.js";import{B}from"./index-a41ce7c3.js";import{h as C,c as A,F as D,C as M}from"./react-toastify.esm-ac6bd257.js";import{B as f,T as $,a as k}from"./index-6bbf0f8e.js";import{T as u}from"./index-922af843.js";import"./useSlotProps-ddc77366.js";import"./index.esm-de2ad175.js";import"./InfoIcon-eed706a9.js";const F=({onClose:t})=>{const[i]=y(n=>[n.graphStyle]),r=()=>{localStorage.setItem("graphStyle",i),t()};return e.jsxs(G,{direction:"column",children:[e.jsx(z,{children:"Default graph view:"}),e.jsx(C,{}),e.jsx(s,{mt:308,children:e.jsx(f,{kind:"big",onClick:r,children:"Save Changes"})})]})},G=o(s)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,z=o(g)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,L=({initialValues:t})=>{const i=A({defaultValues:t,mode:"onSubmit"}),{isSubmitting:r}=i.formState,n=b(d=>d.setAppMetaData),l=i.handleSubmit(async d=>{try{(await w(d)).status==="success"&&n(d)}catch(p){console.log(p),console.warn(p)}});return e.jsx(D,{...i,children:e.jsx(R,{id:"add-node-form",onSubmit:l,children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(s,{pt:20,children:e.jsx(u,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...S}})}),e.jsx(s,{pt:20,children:e.jsx(u,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(s,{mt:210,py:24,children:r?e.jsx(P,{children:e.jsx(M,{color:x.white,size:20})}):e.jsx(f,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save Changes"})})]})})})},P=o(s).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,R=o.form`
  padding: 36px;
`,V=t=>{const{children:i,value:r,index:n,...l}=t;return r===n?e.jsx(K,{"aria-labelledby":`simple-tab-${n}`,hidden:r!==n,id:`simple-tabpanel-${n}`,role:"tabpanel",...l,children:i}):null};function W(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const I=({onClose:t})=>{const[i,r]=T.useState(0),[n]=v(a=>[a.isAdmin,a.setPubKey]),l=b(a=>a.appMetaData),d=()=>n?"Admin Settings":"Settings",p=({children:a})=>e.jsxs(H,{children:[e.jsx(s,{direction:"row",pt:3,children:e.jsx(U,{"data-testid":"setting-label",children:d()})}),a]}),j=(a,c)=>{r(c)},h=[...n?[{label:"General",component:L}]:[],{label:"Appearance",component:F}];return e.jsxs(O,{"data-testid":"settings-modal",direction:"column",children:[e.jsx(p,{children:e.jsx(E,{"aria-label":"settings tabs",onChange:j,value:i,children:h.map((a,c)=>e.jsx(q,{disableRipple:!0,label:a.label,...W(c)},a.label))})}),h.map((a,c)=>e.jsx(V,{index:c,value:i,children:l&&e.jsx(a.component,{initialValues:l,onClose:t})},a.label))]})},E=o($)`
  && {
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
    padding-left: 34px;
  }
`,H=o(s)`
  border-radius: 9px 9px 0 0;
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,q=o(k)`
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
`,K=o(s)`
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
`,O=o(s)`
  min-height: 0;
  flex: 1;
  overflow: hidden;
`,U=o(g)`
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
`,te=()=>{const{close:t}=m("settings"),{visible:i}=m("addItem");return i?null:e.jsx(B,{background:"BG1",id:"settings",noWrap:!0,onClose:t,preventOutsideClose:!0,children:e.jsx(I,{onClose:t})})};export{te as SettingsModal};
