import{Y as i,X as a,Z as b,j as e,ab as x,a0 as p,r as A,a1 as v}from"./index-7b1e84d7.js";import{aA as M,cr as $,cs as j,ct as B,aK as y,cu as D,cv as k,cw as h,aS as C,cx as F,cy as G,u as L,cm as R}from"./index-e50c2c75.js";const P=({onClose:s})=>{const[n]=M(t=>[t.graphStyle]),r=()=>{localStorage.setItem("graphStyle",n),s()};return e.jsxs(V,{direction:"column",children:[e.jsx(z,{children:"Default graph view:"}),e.jsx($,{}),e.jsx(a,{mt:308,children:e.jsx(j,{kind:"big",onClick:r,children:"Save changes"})})]})},V=i(a)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,z=i(b)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,K=({initialValues:s})=>{const n=B({defaultValues:s,mode:"onSubmit"}),{isSubmitting:r}=n.formState,t=y(o=>o.setAppMetaData),d=n.handleSubmit(async o=>{try{const c=await D(o);console.log(c),c.status==="success"&&t(o)}catch(c){console.log(c),console.warn(c)}});return e.jsx(k,{...n,children:e.jsx(_,{id:"add-node-form",onSubmit:d,children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(a,{pt:20,children:e.jsx(h,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...x}})}),e.jsx(a,{pt:20,children:e.jsx(h,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...x}})}),e.jsx(a,{pt:20,children:e.jsx(h,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...x}})}),e.jsx(a,{pt:20,children:e.jsx(h,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...x}})})]}),e.jsx(a,{my:36,py:24,children:r?e.jsx(W,{children:e.jsx(C,{color:p.white,size:20})}):e.jsx(j,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},W=i(a).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,_=i.form`
  padding: 36px;
`,u=s=>{const{children:n,value:r,index:t,...d}=s;return r===t?e.jsx(Y,{"aria-labelledby":`simple-tab-${t}`,hidden:r!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...d,children:n}):null};function m(s){return{id:`simple-tab-${s}`,"aria-controls":`simple-tabpanel-${s}`}}const E=({onClose:s})=>{const[n,r]=A.useState(0),[t,d]=v(l=>[l.isAdmin,l.setPubKey,l.pubKey]),o=y(l=>l.appMetaData);console.log(o);const c=()=>t?"Admin Settings":"Settings",f=({children:l})=>e.jsxs(I,{children:[e.jsxs(a,{direction:"row",pt:3,children:[e.jsx(U,{children:c()}),S()]}),l]}),S=()=>!d||t?null:e.jsx(e.Fragment,{}),w=(l,T)=>{r(T)};return e.jsxs(q,{direction:"column",children:[e.jsx(f,{children:e.jsxs(H,{"aria-label":"settings tabs",onChange:w,value:n,children:[t&&e.jsx(g,{disableRipple:!0,label:"General",...m(0)}),e.jsx(g,{color:p.white,disableRipple:!0,label:"Appearance",...m(1)})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(u,{index:0,value:n,children:e.jsx(K,{initialValues:o})})}),e.jsx(u,{index:t?1:0,value:n,children:e.jsx(P,{onClose:s})})]})},H=i(F)`
  && {
    .MuiTabs-indicator {
      background: ${p.primaryBlue};
    }
  }
`,I=i(a)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,g=i(G)`
  && {
    padding: 30px 0 24px;
    color: ${p.GRAY6};
    margin-left: 36px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${p.white};
    }
  }
`,Y=i(a)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,q=i(a)`
  min-height: 0;
  flex: 1;
`,U=i(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,J=()=>{const{close:s}=L("settings");return e.jsx(R,{background:"BG1",id:"settings",noWrap:!0,onClose:s,children:e.jsx(E,{onClose:s})})};export{J as SettingsModal};
