import{Y as r,X as s,Z as b,j as e,ad as x,a0 as d,r as A,a1 as v}from"./index-5737e71e.js";import{ax as M,co as $,cp as j,cq as B,aH as y,cr as D,cs as k,ct as h,aN as C,cu as F,cv as G,u as L,cj as R}from"./index-b1d3367e.js";const P=({onClose:a})=>{const[n]=M(t=>[t.graphStyle]),i=()=>{localStorage.setItem("graphStyle",n),a()};return e.jsxs(V,{direction:"column",children:[e.jsx(z,{children:"Default graph view:"}),e.jsx($,{}),e.jsx(s,{mt:308,children:e.jsx(j,{kind:"big",onClick:i,children:"Save changes"})})]})},V=r(s)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,z=r(b)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,W=({initialValues:a})=>{const n=B({defaultValues:a,mode:"onSubmit"}),{isSubmitting:i}=n.formState,t=y(o=>o.setAppMetaData),c=n.handleSubmit(async o=>{try{(await D(o)).status==="success"&&t(o)}catch(p){console.warn(p)}});return e.jsx(k,{...n,children:e.jsx(H,{id:"add-node-form",onSubmit:c,children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(s,{pt:20,children:e.jsx(h,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...x}})}),e.jsx(s,{pt:20,children:e.jsx(h,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...x}})}),e.jsx(s,{pt:20,children:e.jsx(h,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...x}})}),e.jsx(s,{pt:20,children:e.jsx(h,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...x}})})]}),e.jsx(s,{my:36,py:24,children:i?e.jsx(_,{children:e.jsx(C,{color:d.white,size:20})}):e.jsx(j,{disabled:i,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},_=r(s).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,H=r.form`
  padding: 36px;
`,u=a=>{const{children:n,value:i,index:t,...c}=a;return i===t?e.jsx(I,{"aria-labelledby":`simple-tab-${t}`,hidden:i!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...c,children:n}):null};function m(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const K=({onClose:a})=>{const[n,i]=A.useState(0),[t,c]=v(l=>[l.isAdmin,l.setPubKey,l.pubKey]),o=y(l=>l.appMetaData),p=()=>t?"Admin Settings":"Settings",f=({children:l})=>e.jsxs(E,{children:[e.jsxs(s,{direction:"row",pt:3,children:[e.jsx(N,{children:p()}),S()]}),l]}),S=()=>!c||t?null:e.jsx(e.Fragment,{}),T=(l,w)=>{i(w)};return e.jsxs(Y,{direction:"column",children:[e.jsx(f,{children:e.jsxs(q,{"aria-label":"settings tabs",onChange:T,value:n,children:[t&&e.jsx(g,{disableRipple:!0,label:"General",...m(0)}),e.jsx(g,{color:d.white,disableRipple:!0,label:"Appearance",...m(1)})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(u,{index:0,value:n,children:e.jsx(W,{initialValues:o})})}),e.jsx(u,{index:t?1:0,value:n,children:e.jsx(P,{onClose:a})})]})},q=r(F)`
  && {
    .MuiTabs-indicator {
      background: ${d.primaryBlue};
    }
  }
`,E=r(s)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,g=r(G)`
  && {
    padding: 30px 0 24px;
    color: ${d.GRAY6};
    margin-left: 36px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${d.white};
    }
  }
`,I=r(s)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,Y=r(s)`
  min-height: 0;
  flex: 1;
`,N=r(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,Z=()=>{const{close:a}=L("settings");return e.jsx(R,{background:"BG1",id:"settings",noWrap:!0,onClose:a,children:e.jsx(K,{onClose:a})})};export{Z as SettingsModal};
