import{u as i,F as a,T as b,j as e,M as x,v as d,r as A,w as M}from"./index-0b9e4d85.js";import{ay as v,cx as B,cy as j,cz as D,aI as y,cA as $,cB as C,cC as h,aO as F,cD as k,cE as G,u as L,cs as R}from"./index-55c5d15f.js";const z=({onClose:s})=>{const[n]=v(t=>[t.graphStyle]),r=()=>{localStorage.setItem("graphStyle",n),s()};return e.jsxs(P,{direction:"column",children:[e.jsx(V,{children:"Default graph view:"}),e.jsx(B,{}),e.jsx(a,{mt:308,children:e.jsx(j,{kind:"big",onClick:r,children:"Save changes"})})]})},P=i(a)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,V=i(b)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,W=({initialValues:s})=>{const n=D({defaultValues:s,mode:"onSubmit"}),{isSubmitting:r}=n.formState,t=y(o=>o.setAppMetaData),c=n.handleSubmit(async o=>{try{(await $(o)).status==="success"&&t(o)}catch(p){console.warn(p)}});return e.jsx(C,{...n,children:e.jsx(E,{id:"add-node-form",onSubmit:c,children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(a,{pt:20,children:e.jsx(h,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...x}})}),e.jsx(a,{pt:20,children:e.jsx(h,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...x}})}),e.jsx(a,{pt:20,children:e.jsx(h,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...x}})}),e.jsx(a,{pt:20,children:e.jsx(h,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...x}})})]}),e.jsx(a,{my:36,py:24,children:r?e.jsx(_,{children:e.jsx(F,{color:d.white,size:20})}):e.jsx(j,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},_=i(a).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,E=i.form`
  padding: 36px;
`,u=s=>{const{children:n,value:r,index:t,...c}=s;return r===t?e.jsx(q,{"aria-labelledby":`simple-tab-${t}`,hidden:r!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...c,children:n}):null};function m(s){return{id:`simple-tab-${s}`,"aria-controls":`simple-tabpanel-${s}`}}const I=({onClose:s})=>{const[n,r]=A.useState(0),[t,c]=M(l=>[l.isAdmin,l.setPubKey,l.pubKey]),o=y(l=>l.appMetaData),p=()=>t?"Admin Settings":"Settings",f=({children:l})=>e.jsxs(H,{children:[e.jsxs(a,{direction:"row",pt:3,children:[e.jsx(U,{children:p()}),S()]}),l]}),S=()=>!c||t?null:e.jsx(e.Fragment,{}),T=(l,w)=>{r(w)};return e.jsxs(O,{direction:"column",children:[e.jsx(f,{children:e.jsxs(K,{"aria-label":"settings tabs",onChange:T,value:n,children:[t&&e.jsx(g,{disableRipple:!0,label:"General",...m(0)}),e.jsx(g,{color:d.white,disableRipple:!0,label:"Appearance",...m(1)})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(u,{index:0,value:n,children:e.jsx(W,{initialValues:o})})}),e.jsx(u,{index:t?1:0,value:n,children:e.jsx(z,{onClose:s})})]})},K=i(k)`
  && {
    .MuiTabs-indicator {
      background: ${d.primaryBlue};
    }
  }
`,H=i(a)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,g=i(G)`
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
`,q=i(a)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,O=i(a)`
  min-height: 0;
  flex: 1;
`,U=i(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,N=()=>{const{close:s}=L("settings");return e.jsx(R,{background:"BG1",id:"settings",noWrap:!0,onClose:s,children:e.jsx(I,{onClose:s})})};export{N as SettingsModal};
