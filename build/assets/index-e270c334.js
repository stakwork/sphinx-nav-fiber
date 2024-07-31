import{Q as o,U as s,a5 as g,O as y,j as e,a3 as b,av as w,ar as S,S as x,r as v,N as T,ad as m}from"./index-9c102e77.js";import{aN as A,aO as f,ak as C,al as M,aP as u,an as $,aQ as k,aR as B,aL as G}from"./index-965cbcc4.js";const D=({onClose:t})=>{const[i]=y(n=>[n.graphStyle]),r=()=>{localStorage.setItem("graphStyle",i),t()};return e.jsxs(z,{direction:"column",children:[e.jsx(L,{children:"Default graph view:"}),e.jsx(A,{}),e.jsx(s,{mt:308,children:e.jsx(f,{kind:"big",onClick:r,children:"Save Changes"})})]})},z=o(s)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,L=o(g)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,P=({initialValues:t})=>{const i=C({defaultValues:t,mode:"onSubmit"}),{isSubmitting:r}=i.formState,n=b(d=>d.setAppMetaData),l=i.handleSubmit(async d=>{try{(await w(d)).status==="success"&&n(d)}catch(c){console.warn(c)}});return e.jsx(M,{...i,children:e.jsx(F,{id:"add-node-form",onSubmit:l,children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(s,{pt:20,children:e.jsx(u,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...S}})}),e.jsx(s,{pt:20,children:e.jsx(u,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(s,{mt:210,py:24,children:r?e.jsx(R,{children:e.jsx($,{color:x.white,size:20})}):e.jsx(f,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save Changes"})})]})})})},R=o(s).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,F=o.form`
  padding: 36px;
`,V=t=>{const{children:i,value:r,index:n,...l}=t;return r===n?e.jsx(N,{"aria-labelledby":`simple-tab-${n}`,hidden:r!==n,id:`simple-tabpanel-${n}`,role:"tabpanel",...l,children:i}):null};function W(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const I=({onClose:t})=>{const[i,r]=v.useState(0),[n]=T(a=>[a.isAdmin,a.setPubKey]),l=b(a=>a.appMetaData),d=()=>n?"Admin Settings":"Settings",c=({children:a})=>e.jsxs(E,{children:[e.jsx(s,{direction:"row",pt:3,children:e.jsx(U,{"data-testid":"setting-label",children:d()})}),a]}),j=(a,p)=>{r(p)},h=[...n?[{label:"General",component:P}]:[],{label:"Appearance",component:D}];return e.jsxs(Q,{"data-testid":"settings-modal",direction:"column",children:[e.jsx(c,{children:e.jsx(O,{"aria-label":"settings tabs",onChange:j,value:i,children:h.map((a,p)=>e.jsx(H,{disableRipple:!0,label:a.label,...W(p)},a.label))})}),h.map((a,p)=>e.jsx(V,{index:p,value:i,children:l&&e.jsx(a.component,{initialValues:l,onClose:t})},a.label))]})},O=o(k)`
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
`,H=o(B)`
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
`,N=o(s)`
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
`,Q=o(s)`
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
`,Y=()=>{const{close:t}=m("settings"),{visible:i}=m("addItem");return i?null:e.jsx(G,{background:"BG1",id:"settings",noWrap:!0,onClose:t,preventOutsideClose:!0,children:e.jsx(I,{onClose:t})})};export{Y as SettingsModal};
