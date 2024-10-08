import{p as s,q as l,F as n,t as w,j as e,v as T,w as G,E as S,r as f,C as v,aJ as I,aK as b,aL as A,D as B,Q as y}from"./index-32da8a56.js";import{B as z}from"./index-0aaa79cc.js";import{u as D,H as M,C as k,x as E,J as R,B as $,q as F,F as W}from"./index-fc12644d.js";import{C}from"./ClipLoader-071caa1f.js";import{T as j}from"./index-24c44d83.js";import{S as L}from"./index-cd2004a8.js";import{e as P}from"./index.esm-02e975d7.js";import{T as V,a as N}from"./Tabs-f8228063.js";import"./createSvgIcon-a805dade.js";const q={split:e.jsx(M,{}),force:e.jsx(k,{}),sphere:e.jsx(E,{}),earth:e.jsx(R,{})},H=()=>{const[i,p]=w(D(t=>[t.graphStyle,t.setGraphStyle])),r=t=>{p(t)};return e.jsx(O,{direction:"column",children:T.map(t=>e.jsx(n,{className:G("icon",{active:i===t}),onClick:()=>r(t),children:q[t]},t))})},O=s(n).attrs({direction:"row",align:"center",justify:"space-between"})`
  width: 447px;
  height: 48px;
  background: ${l.appearanceBg};
  border-radius: 6px;
  .icon {
    color: ${l.GRAY6};
    font-size: 20px;
    cursor: pointer;
    padding: 12px 20px;

    &:hover {
      color: ${l.GRAY3};
    }

    &:active {
      color: ${l.white};
    }

    &.active {
      color: ${l.white};
      background: ${l.primaryBlue};
      padding: 12px 20px;
      border-radius: 6px;
    }
  }

  .icon + .icon {
    margin-left: 20px;
  }
`,Y=({onClose:i})=>{const[p]=w(d=>[d.graphStyle]),[r,t]=f.useState(!1),c=()=>{t(!0),localStorage.setItem("graphStyle",p),t(!1),i()};return e.jsxs(J,{direction:"column",children:[e.jsx(K,{children:"Default graph view:"}),e.jsx(H,{}),e.jsx(n,{mt:308,py:8,children:e.jsx($,{color:"secondary",disabled:r,id:"add-node-submit-cta",onClick:c,size:"large",startIcon:r&&e.jsx(_,{children:e.jsx(C,{color:l.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"})})]})},J=s(n)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,K=s(S)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
  color: ${l.lightGray};
`,_=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Q=({initialValues:i,onClose:p})=>{const r=F({defaultValues:i,mode:"onSubmit"}),{isSubmitting:t}=r.formState,c=v(a=>a.setAppMetaData),[d,m]=f.useState(""),g=r.handleSubmit(async a=>{try{(await I(a)).status==="success"&&(L("Changes Saved"),c(a),p())}catch(o){let u=b;if((o==null?void 0:o.status)===400){const h=await o.json();u=h.errorCode||(h==null?void 0:h.status)||b}else o instanceof Error&&(u=o.message);m(String(u))}}),x=a=>{a.preventDefault(),g()};return e.jsx(W,{...r,children:e.jsx(U,{id:"add-node-form",onSubmit:x,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(n,{pt:20,children:e.jsx(j,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...A}})}),e.jsx(n,{pt:20,children:e.jsx(j,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsxs(n,{mt:210,py:d?0:24,children:[e.jsx($,{color:"secondary",disabled:t,id:"add-node-submit-cta",size:"large",startIcon:t&&e.jsx(X,{children:e.jsx(C,{color:l.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"}),d?e.jsx(Z,{children:e.jsxs(ee,{children:[e.jsx(P,{className:"errorIcon"}),e.jsx("span",{children:d})]})}):null]})]})})})},U=s.form`
  padding: 36px;
`,X=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Z=s(n)`
  display: flex;
  align-items: center;
  color: ${l.primaryRed};
  position: relative;
  margin-top: 10px;
`,ee=s(n)`
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
`,te=i=>{const{children:p,value:r,index:t,...c}=i;return r===t?e.jsx(oe,{"aria-labelledby":`simple-tab-${t}`,hidden:r!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...c,children:p}):null};function ae(i){return{id:`simple-tab-${i}`,"aria-controls":`simple-tabpanel-${i}`}}const ie=({onClose:i})=>{const[p,r]=f.useState(0),[t]=B(a=>[a.isAdmin,a.setPubKey]),c=v(a=>a.appMetaData),d=()=>t?"Admin Settings":"Settings",m=({children:a})=>e.jsxs(se,{children:[e.jsx(n,{direction:"row",pt:3,children:e.jsx(pe,{"data-testid":"setting-label",children:d()})}),a]}),g=(a,o)=>{r(o)},x=[...t?[{label:"General",component:Q}]:[],{label:"Appearance",component:Y}];return e.jsxs(le,{"data-testid":"settings-modal",direction:"column",children:[e.jsx(m,{children:e.jsx(ne,{"aria-label":"settings tabs",onChange:g,value:p,children:x.map((a,o)=>e.jsx(re,{disableRipple:!0,label:a.label,...ae(o)},a.label))})}),x.map((a,o)=>e.jsx(te,{index:o,value:p,children:c&&e.jsx(a.component,{initialValues:c,onClose:i})},a.label))]})},ne=s(V)`
  && {
    .MuiTabs-indicator {
      background: ${l.primaryBlue};
    }
    padding-left: 34px;
  }
`,se=s(n)`
  border-radius: 9px 9px 0 0;
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,re=s(N)`
  && {
    min-width: 0;
    width: auto;
    padding: 30px 0 19px;
    color: ${l.GRAY6};
    margin-right: 87px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${l.white};
    }
  }
`,oe=s(n)`
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
`,le=s(n)`
  min-height: 0;
  flex: 1;
  overflow: hidden;
`,pe=s(S)`
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
`,ye=()=>{const{close:i}=y("settings"),{visible:p}=y("addItem");return p?null:e.jsx(z,{background:"BG1",id:"settings",noWrap:!0,onClose:i,preventOutsideClose:!0,children:e.jsx(ie,{onClose:i})})};export{ye as SettingsModal};
