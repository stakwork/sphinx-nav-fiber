import{r as g,j as e,u as i,v as x,F as o,T,M as b,w as k}from"./index-6fbe820f.js";import{a_ as I,aY as P,b0 as B,b6 as z,b7 as D,_ as w,bb as V,ba as F,cx as G,cy as H,cz as U,cA as _,cB as f,c5 as v,cC as A,cD as L,cE as N,cF as h,aO as M,ay as J,cG as X,cH as R,aI as $,cI as W,cJ as E,cK as K,u as Y,cs as Z}from"./index-5cad0c14.js";import{C as q,I as O}from"./CopyIcon-8fcd56af.js";function Q(t){return I("MuiTableContainer",t)}P("MuiTableContainer",["root"]);const ee=["className","component"],te=t=>{const{classes:s}=t;return F({root:["root"]},Q,s)},se=B("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,s)=>s.root})({width:"100%",overflowX:"auto"}),ne=g.forwardRef(function(s,a){const n=z({props:s,name:"MuiTableContainer"}),{className:c,component:l="div"}=n,d=D(n,ee),m=w({},n,{component:l}),u=te(m);return e.jsx(se,w({ref:a,as:l,className:V(u.root,c),ownerState:m},d))}),ae=ne,ie=t=>e.jsx("svg",{width:"2em",height:"2em",viewBox:"0 0 22 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M17 7H15C14.7167 7 14.4792 6.90417 14.2875 6.7125C14.0958 6.52083 14 6.28333 14 6C14 5.71667 14.0958 5.47917 14.2875 5.2875C14.4792 5.09583 14.7167 5 15 5H17V3C17 2.71667 17.0958 2.47917 17.2875 2.2875C17.4792 2.09583 17.7167 2 18 2C18.2833 2 18.5208 2.09583 18.7125 2.2875C18.9042 2.47917 19 2.71667 19 3V5H21C21.2833 5 21.5208 5.09583 21.7125 5.2875C21.9042 5.47917 22 5.71667 22 6C22 6.28333 21.9042 6.52083 21.7125 6.7125C21.5208 6.90417 21.2833 7 21 7H19V9C19 9.28333 18.9042 9.52083 18.7125 9.7125C18.5208 9.90417 18.2833 10 18 10C17.7167 10 17.4792 9.90417 17.2875 9.7125C17.0958 9.52083 17 9.28333 17 9V7ZM8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 14V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14Z",fill:"currentColor"})}),oe=({data:t,onRemove:s})=>e.jsx(ae,{component:G,children:e.jsx(H,{"aria-label":"simple table",children:e.jsx(U,{children:t.map(a=>e.jsxs(_,{children:[e.jsx(f,{component:"th",scope:"row",children:a.name}),e.jsxs(f,{children:[a.identifier," ",e.jsx(q,{})]}),e.jsx(f,{children:e.jsx(v,{onClick:()=>s(a.identifier),variant:"contained",children:"Remove"})})]},a.identifier))})})}),re=i.form`
  padding: 2px;
`,le=i(o)`
  display: flex;
  width: 320px;
`,ce=i.p`
  color: white;
  font-size: 13px;
`,de=i(o)`
  display: flex;
  margin-top: 2px;
`,pe=i(o)`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 16px;
  justify-content: center;
  margin-top: 30px;
`,xe=i(o)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: ${x.GRAY6};
  background-color: #1c1e26;
  margin-top: 32px;
`,me=i.p`
  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`,ue=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 80px;
`,he=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: white;
  gap: 8px;
  margin-bottom: 80px;
`,be=({initialValues:t})=>{const s=A({defaultValues:t,mode:"onSubmit"}),[a,n]=g.useState(!1),[c,l]=g.useState(!1),d=[{name:"Name Surname",identifier:"aXA60jczLJl1uew..."},{name:"Name Surname",identifier:"aXA60jczLJl1uew..."},{name:"Name Surname",identifier:"aXA60jczLJl1uew..."},{name:"Name Surname",identifier:"aXA60jczLJl1uew..."},{name:"Name Surname",identifier:"aXA60jczLJl1uew..."}],m=()=>new Promise(p=>{setTimeout(()=>{p()},2e3)}),u=s.handleSubmit(async()=>{try{n(!0),await m(),l(!0),n(!1)}catch(p){console.warn(p),n(!1)}}),j=p=>{console.log(`Remove item at index: ${p}`)};let r;return a?r=e.jsxs(he,{children:[e.jsx(M,{color:x.white}),"Adding..."]}):c?r=e.jsx(oe,{data:d,onRemove:j}):r=e.jsxs(ue,{children:[e.jsx(ie,{}),e.jsx(me,{children:"Add User"})]}),e.jsx(L,{...s,children:e.jsxs(re,{onSubmit:u,children:[e.jsxs(pe,{children:[e.jsxs(le,{pt:20,children:[e.jsxs(O,{sx:{display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(ce,{children:"Enter pubkey"}),e.jsx(de,{children:e.jsx(N,{})})]}),e.jsx(h,{id:"cy-about-pubkey-id",maxLength:50,name:"pubkey",placeholder:"Paste pubkey here..."})]}),e.jsx(v,{color:"secondary",onClick:u,size:"medium",sx:{minHeight:"38px"},variant:"contained",children:"Paste"})]}),e.jsx(xe,{children:r})]})})},ge=({onClose:t})=>{const[s]=J(n=>[n.graphStyle]),a=()=>{localStorage.setItem("graphStyle",s),t()};return e.jsxs(je,{direction:"column",children:[e.jsx(fe,{children:"Default graph view:"}),e.jsx(X,{}),e.jsx(o,{mt:308,children:e.jsx(R,{kind:"big",onClick:a,children:"Save changes"})})]})},je=i(o)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,fe=i(T)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,ye=({initialValues:t})=>{const s=A({defaultValues:t,mode:"onSubmit"}),{isSubmitting:a}=s.formState,n=$(l=>l.setAppMetaData),c=s.handleSubmit(async l=>{try{(await W(l)).status==="success"&&n(l)}catch(d){console.warn(d)}});return e.jsx(L,{...s,children:e.jsx(Se,{id:"add-node-form",onSubmit:c,children:e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(o,{pt:20,children:e.jsx(h,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...b}})}),e.jsx(o,{pt:20,children:e.jsx(h,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...b}})}),e.jsx(o,{pt:20,children:e.jsx(h,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...b}})}),e.jsx(o,{pt:20,children:e.jsx(h,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...b}})})]}),e.jsx(o,{my:36,py:24,children:a?e.jsx(Ce,{children:e.jsx(M,{color:x.white,size:20})}):e.jsx(R,{disabled:a,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},Ce=i(o).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,Se=i.form`
  padding: 36px;
`,y=t=>{const{children:s,value:a,index:n,...c}=t;return a===n?e.jsx(Ae,{"aria-labelledby":`simple-tab-${n}`,hidden:a!==n,id:`simple-tabpanel-${n}`,role:"tabpanel",...c,children:s}):null};function C(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const we=({onClose:t})=>{const[s,a]=g.useState(0),[n,c]=k(r=>[r.isAdmin,r.setPubKey,r.pubKey]),l=$(r=>r.appMetaData),d=()=>n?"Admin Settings":"Settings",m=({children:r})=>e.jsxs(ve,{children:[e.jsxs(o,{direction:"row",pt:3,children:[e.jsx(Me,{children:d()}),u()]}),r]}),u=()=>!c||n?null:e.jsx(e.Fragment,{}),j=(r,p)=>{a(p)};return e.jsxs(Le,{direction:"column",children:[e.jsx(m,{children:e.jsxs(Te,{"aria-label":"settings tabs",onChange:j,value:s,children:[n&&e.jsx(S,{disableRipple:!0,label:"General",...C(0)}),e.jsx(S,{color:x.white,disableRipple:!0,label:"Appearance",...C(1)}),n&&e.jsx(S,{disableRipple:!0,label:"User Permissions",...C(2)})]})}),n&&e.jsxs(e.Fragment,{children:[e.jsx(y,{index:0,value:s,children:e.jsx(ye,{initialValues:l})}),e.jsx(y,{index:2,value:s,children:e.jsx(be,{initialValues:l})})]}),e.jsx(y,{index:n?1:0,value:s,children:e.jsx(ge,{onClose:t})})]})},Te=i(E)`
  && {
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
  }
`,ve=i(o)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,S=i(K)`
  && {
    padding: 30px 0 24px;
    color: ${x.GRAY6};
    margin-left: 36px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${x.white};
    }
  }
`,Ae=i(o)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,Le=i(o)`
  min-height: 0;
  flex: 1;
`,Me=i(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,Ie=()=>{const{close:t}=Y("settings");return e.jsx(Z,{background:"BG1",id:"settings",noWrap:!0,onClose:t,children:e.jsx(we,{onClose:t})})};export{Ie as SettingsModal};
