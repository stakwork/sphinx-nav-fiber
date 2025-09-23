import{s as t,g as o,F as a,T as S,r as b,j as e,B as v,l as B,b as $,a as T,b0 as C,b1 as G,b2 as y,n as z,b3 as w,b4 as k,b5 as M,E as j,b6 as D}from"./index-e86a3f55.js";import{u as E,g as R}from"./index-d7077484.js";import{C as A}from"./ClipLoader-6a6c11b4.js";import{T as I,a as L}from"./Tabs-f6a726d3.js";import"./createSvgIcon-ec3669a0.js";const F=()=>(E(R(i=>[i.graphStyle,i.setGraphStyle])),null);t(a).attrs({direction:"row",align:"center",justify:"space-between"})`
  width: 447px;
  height: 48px;
  background: ${o.appearanceBg};
  border-radius: 6px;
  .icon {
    color: ${o.GRAY6};
    font-size: 20px;
    cursor: pointer;
    padding: 12px 20px;

    &:hover {
      color: ${o.GRAY3};
    }

    &:active {
      color: ${o.white};
    }

    &.active {
      color: ${o.white};
      background: ${o.primaryBlue};
      padding: 12px 20px;
      border-radius: 6px;
    }
  }

  .icon + .icon {
    margin-left: 20px;
  }
`;const P=({onClose:i})=>{const[l,d]=b.useState(!1),r=()=>{d(!0),d(!1),i()};return e.jsxs(V,{direction:"column",children:[e.jsx(W,{children:"Default graph view:"}),e.jsx(F,{}),e.jsx(a,{mt:308,py:8,children:e.jsx(v,{color:"secondary",disabled:l,id:"add-node-submit-cta",onClick:r,size:"large",startIcon:l&&e.jsx(U,{children:e.jsx(A,{color:o.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"})})]})},V=t(a)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,W=t(S)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
  color: ${o.lightGray};
`,U=t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Y=({initialValues:i,onClose:l})=>{const d=B({defaultValues:i,mode:"onSubmit"}),{isSubmitting:r}=d.formState,c=$(s=>s.setAppMetaData),{swarmUiUrl:h}=T(s=>s),[x,u]=b.useState(""),m=d.handleSubmit(async s=>{try{(await C(s)).status==="success"&&(G("Changes Saved"),c(s),l())}catch(p){let f=y;if((p==null?void 0:p.status)===400){const g=await p.json();f=g.errorCode||(g==null?void 0:g.status)||y}else p instanceof Error&&(f=p.message);u(String(f))}}),n=s=>{s.preventDefault(),m()};return e.jsx(z,{...d,children:e.jsx(N,{id:"add-node-form",onSubmit:n,children:e.jsxs(H,{children:[e.jsxs(a,{children:[h&&e.jsx(_,{children:e.jsx(q,{href:h,children:"View Swarm UI"})}),e.jsx(a,{pt:20,children:e.jsx(w,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...k}})}),e.jsx(a,{pt:20,children:e.jsx(w,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsxs(a,{mt:180,py:x?0:24,children:[e.jsx(v,{color:"secondary",disabled:r,id:"add-node-submit-cta",size:"large",startIcon:r&&e.jsx(O,{children:e.jsx(A,{color:o.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"}),x?e.jsx(K,{children:e.jsxs(J,{children:[e.jsx(M,{className:"errorIcon"}),e.jsx("span",{children:x})]})}):null]})]})})})},N=t.form`
  padding: 36px;
  height: 100%;
`,O=t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,_=t(a)`
  display: flex;
  align-items: flex-end;
`,H=t(a)`
  display: flex;
  direction: column;
  justify-content: space-between;
  height: 100%;
`,q=t.a`
  font-family: 'Barlow';
  font-size: 16px;
  color: ${o.PRIMARY_BLUE};
  text-decoration: underline;
  font-weight: 500;
`,K=t(a)`
  display: flex;
  align-items: center;
  color: ${o.primaryRed};
  position: relative;
  margin-top: 10px;
`,J=t(a)`
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
`,Q=i=>{const{children:l,value:d,index:r,...c}=i;return d===r?e.jsx(ne,{"aria-labelledby":`simple-tab-${r}`,hidden:d!==r,id:`simple-tabpanel-${r}`,role:"tabpanel",...c,children:l}):null};function X(i){return{id:`simple-tab-${i}`,"aria-controls":`simple-tabpanel-${i}`}}const Z=({onClose:i})=>{const[l,d]=b.useState(0),[r]=T(n=>[n.isAdmin,n.setPubKey]),c=$(n=>n.appMetaData),h=()=>r?"Admin Settings":"Settings",x=({children:n})=>e.jsxs(te,{children:[e.jsx(a,{direction:"row",pt:3,children:e.jsx(se,{"data-testid":"setting-label",children:h()})}),n]}),u=(n,s)=>{d(s)},m=[...r?[{label:"General",component:Y}]:[],{label:"Appearance",component:P}];return e.jsxs(ae,{"data-testid":"settings-modal",direction:"column",children:[e.jsx(x,{children:e.jsx(ee,{"aria-label":"settings tabs",onChange:u,value:l,children:m.map((n,s)=>e.jsx(ie,{disableRipple:!0,label:n.label,...X(s)},n.label))})}),m.map((n,s)=>e.jsx(Q,{index:s,value:l,children:c&&e.jsx(n.component,{initialValues:c,onClose:i})},n.label))]})},ee=t(I)`
  && {
    .MuiTabs-indicator {
      background: ${o.primaryBlue};
    }
    padding-left: 34px;
  }
`,te=t(a)`
  border-radius: 9px 9px 0 0;
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,ie=t(L)`
  && {
    min-width: 0;
    width: auto;
    padding: 30px 0 19px;
    color: ${o.GRAY6};
    margin-right: 87px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${o.white};
    }
  }
`,ne=t(a)`
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
`,ae=t(a)`
  min-height: 0;
  flex: 1;
  overflow: hidden;
`,se=t(S)`
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
`,ce=()=>{const{close:i}=j("settings"),{visible:l}=j("addItem");return l?null:e.jsx(D,{background:"BG1",id:"settings",noWrap:!0,onClose:i,preventOutsideClose:!0,children:e.jsx(Z,{onClose:i})})};export{ce as SettingsModal};
