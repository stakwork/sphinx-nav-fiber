import{Y as i,X as s,Z as b,j as e,ab as x,a0 as d,r as A,a1 as v}from"./index-767c35b3.js";import{aA as M,ct as $,cu as j,cv as B,aK as y,cw as D,cx as k,cy as h,aR as C,cz as F,cA as G,u as L,co as R}from"./index-093e3bcc.js";const z=({onClose:a})=>{const[n]=M(t=>[t.graphStyle]),r=()=>{localStorage.setItem("graphStyle",n),a()};return e.jsxs(P,{direction:"column",children:[e.jsx(V,{children:"Default graph view:"}),e.jsx($,{}),e.jsx(s,{mt:308,children:e.jsx(j,{kind:"big",onClick:r,children:"Save changes"})})]})},P=i(s)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,V=i(b)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,K=({initialValues:a})=>{const n=B({defaultValues:a,mode:"onSubmit"}),{isSubmitting:r}=n.formState,t=y(o=>o.setAppMetaData),c=n.handleSubmit(async o=>{try{(await D(o)).status==="success"&&t(o)}catch(p){console.warn(p)}});return e.jsx(k,{...n,children:e.jsx(_,{id:"add-node-form",onSubmit:c,children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(s,{pt:20,children:e.jsx(h,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...x}})}),e.jsx(s,{pt:20,children:e.jsx(h,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...x}})}),e.jsx(s,{pt:20,children:e.jsx(h,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...x}})}),e.jsx(s,{pt:20,children:e.jsx(h,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...x}})})]}),e.jsx(s,{my:36,py:24,children:r?e.jsx(W,{children:e.jsx(C,{color:d.white,size:20})}):e.jsx(j,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},W=i(s).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,_=i.form`
  padding: 36px;
`,u=a=>{const{children:n,value:r,index:t,...c}=a;return r===t?e.jsx(Y,{"aria-labelledby":`simple-tab-${t}`,hidden:r!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...c,children:n}):null};function m(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const E=({onClose:a})=>{const[n,r]=A.useState(0),[t,c]=v(l=>[l.isAdmin,l.setPubKey,l.pubKey]),o=y(l=>l.appMetaData),p=()=>t?"Admin Settings":"Settings",f=({children:l})=>e.jsxs(I,{children:[e.jsxs(s,{direction:"row",pt:3,children:[e.jsx(U,{children:p()}),S()]}),l]}),S=()=>!c||t?null:e.jsx(e.Fragment,{}),w=(l,T)=>{r(T)};return e.jsxs(q,{direction:"column",children:[e.jsx(f,{children:e.jsxs(H,{"aria-label":"settings tabs",onChange:w,value:n,children:[t&&e.jsx(g,{disableRipple:!0,label:"General",...m(0)}),e.jsx(g,{color:d.white,disableRipple:!0,label:"Appearance",...m(1)})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(u,{index:0,value:n,children:e.jsx(K,{initialValues:o})})}),e.jsx(u,{index:t?1:0,value:n,children:e.jsx(z,{onClose:a})})]})},H=i(F)`
  && {
    .MuiTabs-indicator {
      background: ${d.primaryBlue};
    }
  }
`,I=i(s)`
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
`,Y=i(s)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,q=i(s)`
  min-height: 0;
  flex: 1;
`,U=i(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,J=()=>{const{close:a}=L("settings");return e.jsx(R,{background:"BG1",id:"settings",noWrap:!0,onClose:a,children:e.jsx(E,{onClose:a})})};export{J as SettingsModal};
