import{w as a,x as r,F as i,j as e,y as I,H as S,r as b,z as v,a1 as z,D as $,E as C,aR as A,aS as B,aT as y,a3 as M,aU as w,aV as k,aW as D,M as j,aX as R}from"./index-4c5f8236.js";import{e as T,g as E,aw as L,ax as W,C as P,ay as V,az as F}from"./index-a4caf8d5.js";import{C as G}from"./ClipLoader-601f6378.js";import{T as U,a as N}from"./Tabs-02e36f7f.js";import"./createSvgIcon-2fe026f6.js";const Y={split:e.jsx(W,{}),force:e.jsx(P,{}),sphere:e.jsx(V,{}),earth:e.jsx(F,{})},H=()=>{const[n,c]=T(E(t=>[t.graphStyle,t.setGraphStyle])),l=t=>{c(t)};return e.jsx(O,{direction:"column",children:L.map(t=>e.jsx(i,{className:I("icon",{active:n===t}),onClick:()=>l(t),children:Y[t]},t))})},O=a(i).attrs({direction:"row",align:"center",justify:"space-between"})`
  width: 447px;
  height: 48px;
  background: ${r.appearanceBg};
  border-radius: 6px;
  .icon {
    color: ${r.GRAY6};
    font-size: 20px;
    cursor: pointer;
    padding: 12px 20px;

    &:hover {
      color: ${r.GRAY3};
    }

    &:active {
      color: ${r.white};
    }

    &.active {
      color: ${r.white};
      background: ${r.primaryBlue};
      padding: 12px 20px;
      border-radius: 6px;
    }
  }

  .icon + .icon {
    margin-left: 20px;
  }
`,_=({onClose:n})=>{const[c]=T(x=>[x.graphStyle]),[l,t]=b.useState(!1),p=()=>{t(!0),localStorage.setItem("graphStyle",c),t(!1),n()};return e.jsxs(q,{direction:"column",children:[e.jsx(K,{children:"Default graph view:"}),e.jsx(H,{}),e.jsx(i,{mt:308,py:8,children:e.jsx(v,{color:"secondary",disabled:l,id:"add-node-submit-cta",onClick:p,size:"large",startIcon:l&&e.jsx(X,{children:e.jsx(G,{color:r.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"})})]})},q=a(i)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,K=a(S)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
  color: ${r.lightGray};
`,X=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,J=({initialValues:n,onClose:c})=>{const l=z({defaultValues:n,mode:"onSubmit"}),{isSubmitting:t}=l.formState,p=$(o=>o.setAppMetaData),{swarmUiUrl:x}=C(o=>o),[h,u]=b.useState(""),m=l.handleSubmit(async o=>{try{(await A(o)).status==="success"&&(B("Changes Saved"),p(o),c())}catch(d){let f=y;if((d==null?void 0:d.status)===400){const g=await d.json();f=g.errorCode||(g==null?void 0:g.status)||y}else d instanceof Error&&(f=d.message);u(String(f))}}),s=o=>{o.preventDefault(),m()};return e.jsx(M,{...l,children:e.jsx(Q,{id:"add-node-form",onSubmit:s,children:e.jsxs(te,{children:[e.jsxs(i,{children:[x&&e.jsx(ee,{children:e.jsx(ae,{href:x,children:"View Swarm UI"})}),e.jsx(i,{pt:20,children:e.jsx(w,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...k}})}),e.jsx(i,{pt:20,children:e.jsx(w,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsxs(i,{mt:210,py:h?0:24,children:[e.jsx(v,{color:"secondary",disabled:t,id:"add-node-submit-cta",size:"large",startIcon:t&&e.jsx(Z,{children:e.jsx(G,{color:r.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"}),h?e.jsx(ie,{children:e.jsxs(ne,{children:[e.jsx(D,{className:"errorIcon"}),e.jsx("span",{children:h})]})}):null]})]})})})},Q=a.form`
  padding: 36px;
  height: 100%;
`,Z=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,ee=a(i)`
  display: flex;
  align-items: flex-end;
`,te=a(i)`
  display: flex;
  direction: column;
  justify-content: space-between;
  height: 100%;
`,ae=a.a`
  font-family: 'Barlow';
  font-size: 16px;
  color: ${r.PRIMARY_BLUE};
  text-decoration: underline;
  font-weight: 500;
`,ie=a(i)`
  display: flex;
  align-items: center;
  color: ${r.primaryRed};
  position: relative;
  margin-top: 10px;
`,ne=a(i)`
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
`,se=n=>{const{children:c,value:l,index:t,...p}=n;return l===t?e.jsx(de,{"aria-labelledby":`simple-tab-${t}`,hidden:l!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...p,children:c}):null};function oe(n){return{id:`simple-tab-${n}`,"aria-controls":`simple-tabpanel-${n}`}}const re=({onClose:n})=>{const[c,l]=b.useState(0),[t]=C(s=>[s.isAdmin,s.setPubKey]),p=$(s=>s.appMetaData),x=()=>t?"Admin Settings":"Settings",h=({children:s})=>e.jsxs(ce,{children:[e.jsx(i,{direction:"row",pt:3,children:e.jsx(he,{"data-testid":"setting-label",children:x()})}),s]}),u=(s,o)=>{l(o)},m=[...t?[{label:"General",component:J}]:[],{label:"Appearance",component:_}];return e.jsxs(xe,{"data-testid":"settings-modal",direction:"column",children:[e.jsx(h,{children:e.jsx(le,{"aria-label":"settings tabs",onChange:u,value:c,children:m.map((s,o)=>e.jsx(pe,{disableRipple:!0,label:s.label,...oe(o)},s.label))})}),m.map((s,o)=>e.jsx(se,{index:o,value:c,children:p&&e.jsx(s.component,{initialValues:p,onClose:n})},s.label))]})},le=a(U)`
  && {
    .MuiTabs-indicator {
      background: ${r.primaryBlue};
    }
    padding-left: 34px;
  }
`,ce=a(i)`
  border-radius: 9px 9px 0 0;
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,pe=a(N)`
  && {
    min-width: 0;
    width: auto;
    padding: 30px 0 19px;
    color: ${r.GRAY6};
    margin-right: 87px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${r.white};
    }
  }
`,de=a(i)`
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
`,xe=a(i)`
  min-height: 0;
  flex: 1;
  overflow: hidden;
`,he=a(S)`
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
`,ye=()=>{const{close:n}=j("settings"),{visible:c}=j("addItem");return c?null:e.jsx(R,{background:"BG1",id:"settings",noWrap:!0,onClose:n,preventOutsideClose:!0,children:e.jsx(re,{onClose:n})})};export{ye as SettingsModal};
