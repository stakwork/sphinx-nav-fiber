import{o as n,F as s,T,p as A,r as m,j as e,q as g,A as C,aU as z,aV as S,aW as G,J as M,O as w}from"./index-9a661f70.js";import{B as k}from"./index-7752b5de.js";import{G as B,B as $,h as E,F as I}from"./index-52668574.js";import{C as D}from"./ClipLoader-2b34de11.js";import{T as v}from"./index-bd460585.js";import{S as F}from"./index-bfea6ee2.js";import{e as P}from"./index.esm-bf210678.js";import{T as R,a as W}from"./Tabs-52b701ab.js";import"./InfoIcon-692e7219.js";import"./useSlotProps-a91c4758.js";import"./createSvgIcon-882d7919.js";const N=({onClose:a})=>{const[l]=A(c=>[c.graphStyle]),[o,i]=m.useState(!1),d=()=>{i(!0),localStorage.setItem("graphStyle",l),i(!1),a()};return e.jsxs(V,{direction:"column",children:[e.jsx(L,{children:"Default graph view:"}),e.jsx(B,{}),e.jsx(s,{mt:308,py:24,children:e.jsx($,{color:"secondary",disabled:o,id:"add-node-submit-cta",onClick:d,size:"large",startIcon:o&&e.jsx(O,{children:e.jsx(D,{color:g.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"})})]})},V=n(s)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,L=n(T)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,O=n.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,U=({initialValues:a,onClose:l})=>{const o=E({defaultValues:a,mode:"onSubmit"}),{isSubmitting:i}=o.formState,d=C(x=>x.setAppMetaData),[c,b]=m.useState(""),f=o.handleSubmit(async x=>{try{(await z(x)).status==="success"&&(F("Changes Saved"),d(x),l())}catch(p){let u=S;if((p==null?void 0:p.status)===400){const h=await p.json();u=h.errorCode||(h==null?void 0:h.status)||S}else p instanceof Error&&(u=p.message);b(String(u))}}),y=x=>{x.preventDefault(),f()};return e.jsx(I,{...o,children:e.jsx(q,{id:"add-node-form",onSubmit:y,children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(s,{pt:20,children:e.jsx(v,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...G}})}),e.jsx(s,{pt:20,children:e.jsx(v,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsxs(s,{mt:210,py:c?0:24,children:[e.jsx($,{color:"secondary",disabled:i,id:"add-node-submit-cta",size:"large",startIcon:i&&e.jsx(H,{children:e.jsx(D,{color:g.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"}),c?e.jsx(_,{children:e.jsxs(J,{children:[e.jsx(P,{className:"errorIcon"}),e.jsx("span",{children:c})]})}):null]})]})})})},q=n.form`
  padding: 36px;
`,H=n.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,_=n(s)`
  display: flex;
  align-items: center;
  color: ${g.primaryRed};
  position: relative;
  margin-top: 10px;
`,J=n(s)`
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
`,K=a=>{const{children:l,value:o,index:i,...d}=a;return o===i?e.jsx(te,{"aria-labelledby":`simple-tab-${i}`,hidden:o!==i,id:`simple-tabpanel-${i}`,role:"tabpanel",...d,children:l}):null};function Y(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const Q=({onClose:a})=>{const[l,o]=m.useState(0),[i]=M(t=>[t.isAdmin,t.setPubKey]),d=C(t=>t.appMetaData),[c,b]=m.useState(""),[f,y]=m.useState(0),x=()=>i?"Admin Settings":"Settings";m.useEffect(()=>{f>=7&&b((()=>{let r="";for(const j in navigator)try{r+=`${j}: ${navigator[j]}
`}catch{r+=`${j}: [Unable to access]
`}return r})())},[f]);const p=({children:t})=>e.jsxs(Z,{children:[e.jsx(s,{direction:"row",onClick:()=>y(r=>r+1),pt:3,children:e.jsx(ie,{"data-testid":"setting-label",children:x()})}),t]}),u=(t,r)=>{o(r)},h=[...i?[{label:"General",component:U}]:[],{label:"Appearance",component:N}];return c?e.jsx("pre",{style:{color:"#f0f8ff"},children:c}):e.jsxs(ae,{"data-testid":"settings-modal",direction:"column",children:[e.jsx(p,{children:e.jsx(X,{"aria-label":"settings tabs",onChange:u,value:l,children:h.map((t,r)=>e.jsx(ee,{disableRipple:!0,label:t.label,...Y(r)},t.label))})}),h.map((t,r)=>e.jsx(K,{index:r,value:l,children:d&&e.jsx(t.component,{initialValues:d,onClose:a})},t.label))]})},X=n(R)`
  && {
    .MuiTabs-indicator {
      background: ${g.primaryBlue};
    }
    padding-left: 34px;
  }
`,Z=n(s)`
  border-radius: 9px 9px 0 0;
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,ee=n(W)`
  && {
    min-width: 0;
    width: auto;
    padding: 30px 0 19px;
    color: ${g.GRAY6};
    margin-right: 87px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${g.white};
    }
  }
`,te=n(s)`
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
`,ae=n(s)`
  min-height: 0;
  flex: 1;
  overflow: hidden;
`,ie=n(T)`
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
`,ue=()=>{const{close:a}=w("settings"),{visible:l}=w("addItem");return l?null:e.jsx(k,{background:"BG1",id:"settings",noWrap:!0,onClose:a,preventOutsideClose:!0,children:e.jsx(Q,{onClose:a})})};export{ue as SettingsModal};
