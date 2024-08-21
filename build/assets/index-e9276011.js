import{o as s,F as o,T as w,p as C,r as f,j as e,q as c,A as S,aU as A,aV as b,aW as z,J as D,O as y}from"./index-cfeaae22.js";import{B as G}from"./index-1f79fbaa.js";import{G as M,B as v,i as $,F as B}from"./index-a86e1b7b.js";import{C as T}from"./ClipLoader-4b18be02.js";import{T as j}from"./index-728b8be7.js";import{S as E}from"./index-7453cfc6.js";import{e as I}from"./index.esm-56425550.js";import{T as k,a as F}from"./Tabs-0c99463c.js";import"./InfoIcon-c55abf2d.js";import"./useSlotProps-2461ab7e.js";import"./createSvgIcon-f3d1f3c7.js";const R=({onClose:a})=>{const[l]=C(d=>[d.graphStyle]),[r,i]=f.useState(!1),p=()=>{i(!0),localStorage.setItem("graphStyle",l),i(!1),a()};return e.jsxs(W,{direction:"column",children:[e.jsx(V,{children:"Default graph view:"}),e.jsx(M,{}),e.jsx(o,{mt:308,py:24,children:e.jsx(v,{color:"secondary",disabled:r,id:"add-node-submit-cta",onClick:p,size:"large",startIcon:r&&e.jsx(L,{children:e.jsx(T,{color:c.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"})})]})},W=s(o)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,V=s(w)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,L=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,P=({initialValues:a,onClose:l})=>{const r=$({defaultValues:a,mode:"onSubmit"}),{isSubmitting:i}=r.formState,p=S(t=>t.setAppMetaData),[d,m]=f.useState(""),g=r.handleSubmit(async t=>{try{(await A(t)).status==="success"&&(E("Changes Saved"),p(t),l())}catch(n){let u=b;if((n==null?void 0:n.status)===400){const h=await n.json();u=h.errorCode||(h==null?void 0:h.status)||b}else n instanceof Error&&(u=n.message);m(String(u))}}),x=t=>{t.preventDefault(),g()};return e.jsx(B,{...r,children:e.jsx(O,{id:"add-node-form",onSubmit:x,children:e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(o,{pt:20,children:e.jsx(j,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...z}})}),e.jsx(o,{pt:20,children:e.jsx(j,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsxs(o,{mt:210,py:d?0:24,children:[e.jsx(v,{color:"secondary",disabled:i,id:"add-node-submit-cta",size:"large",startIcon:i&&e.jsx(N,{children:e.jsx(T,{color:c.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"}),d?e.jsx(q,{children:e.jsxs(H,{children:[e.jsx(I,{className:"errorIcon"}),e.jsx("span",{children:d})]})}):null]})]})})})},O=s.form`
  padding: 36px;
`,N=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,q=s(o)`
  display: flex;
  align-items: center;
  color: ${c.primaryRed};
  position: relative;
  margin-top: 10px;
`,H=s(o)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;

  .errorIcon {
    display: block;
    font-size: 13px;
    min-height: 13px;
    min-width: 13px;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    letter-spacing: 0.2px;
    cursor: pointer;
    padding-left: 4px;
    font-size: 13px;
    font-family: Barlow;
    line-height: 18px;
  }
`,U=a=>{const{children:l,value:r,index:i,...p}=a;return r===i?e.jsx(X,{"aria-labelledby":`simple-tab-${i}`,hidden:r!==i,id:`simple-tabpanel-${i}`,role:"tabpanel",...p,children:l}):null};function _(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const J=({onClose:a})=>{const[l,r]=f.useState(0),[i]=D(t=>[t.isAdmin,t.setPubKey]),p=S(t=>t.appMetaData),d=()=>i?"Admin Settings":"Settings",m=({children:t})=>e.jsxs(Y,{children:[e.jsx(o,{direction:"row",pt:3,children:e.jsx(ee,{"data-testid":"setting-label",children:d()})}),t]}),g=(t,n)=>{r(n)},x=[...i?[{label:"General",component:P}]:[],{label:"Appearance",component:R}];return e.jsxs(Z,{"data-testid":"settings-modal",direction:"column",children:[e.jsx(m,{children:e.jsx(K,{"aria-label":"settings tabs",onChange:g,value:l,children:x.map((t,n)=>e.jsx(Q,{disableRipple:!0,label:t.label,..._(n)},t.label))})}),x.map((t,n)=>e.jsx(U,{index:n,value:l,children:p&&e.jsx(t.component,{initialValues:p,onClose:a})},t.label))]})},K=s(k)`
  && {
    .MuiTabs-indicator {
      background: ${c.primaryBlue};
    }
    padding-left: 34px;
  }
`,Y=s(o)`
  border-radius: 9px 9px 0 0;
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,Q=s(F)`
  && {
    min-width: 0;
    width: auto;
    padding: 30px 0 19px;
    color: ${c.GRAY6};
    margin-right: 87px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${c.white};
    }
  }
`,X=s(o)`
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
`,Z=s(o)`
  min-height: 0;
  flex: 1;
  overflow: hidden;
`,ee=s(w)`
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
`,xe=()=>{const{close:a}=y("settings"),{visible:l}=y("addItem");return l?null:e.jsx(G,{background:"BG1",id:"settings",noWrap:!0,onClose:a,preventOutsideClose:!0,children:e.jsx(J,{onClose:a})})};export{xe as SettingsModal};
