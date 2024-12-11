import{s as t,a as o,F as n,T as S,r as b,j as e,B as v,t as C,k as $,b as T,aT as G,aU as k,N as y,v as z,aV as w,aW as M,aX as D,e as j,aY as I}from"./index-7da75956.js";import{i as A,o as R}from"./index-30e16aa2.js";import{C as B}from"./ClipLoader-d7e95e1a.js";import{T as E,a as L}from"./Tabs-c8041d74.js";import"./createSvgIcon-430b3256.js";const V=()=>(A(R(a=>[a.graphStyle,a.setGraphStyle])),null);t(n).attrs({direction:"row",align:"center",justify:"space-between"})`
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
`;const W=({onClose:a})=>{const[d]=A(x=>[x.graphStyle]),[l,r]=b.useState(!1),p=()=>{r(!0),localStorage.setItem("graphStyle",d),r(!1),a()};return e.jsxs(F,{direction:"column",children:[e.jsx(P,{children:"Default graph view:"}),e.jsx(V,{}),e.jsx(n,{mt:308,py:8,children:e.jsx(v,{color:"secondary",disabled:l,id:"add-node-submit-cta",onClick:p,size:"large",startIcon:l&&e.jsx(U,{children:e.jsx(B,{color:o.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"})})]})},F=t(n)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,P=t(S)`
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
`,Y=({initialValues:a,onClose:d})=>{const l=C({defaultValues:a,mode:"onSubmit"}),{isSubmitting:r}=l.formState,p=$(s=>s.setAppMetaData),{swarmUiUrl:x}=T(s=>s),[h,u]=b.useState(""),m=l.handleSubmit(async s=>{try{(await G(s)).status==="success"&&(k("Changes Saved"),p(s),d())}catch(c){let f=y;if((c==null?void 0:c.status)===400){const g=await c.json();f=g.errorCode||(g==null?void 0:g.status)||y}else c instanceof Error&&(f=c.message);u(String(f))}}),i=s=>{s.preventDefault(),m()};return e.jsx(z,{...l,children:e.jsx(N,{id:"add-node-form",onSubmit:i,children:e.jsxs(H,{children:[e.jsxs(n,{children:[x&&e.jsx(_,{children:e.jsx(q,{href:x,children:"View Swarm UI"})}),e.jsx(n,{pt:20,children:e.jsx(w,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...M}})}),e.jsx(n,{pt:20,children:e.jsx(w,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsxs(n,{mt:210,py:h?0:24,children:[e.jsx(v,{color:"secondary",disabled:r,id:"add-node-submit-cta",size:"large",startIcon:r&&e.jsx(O,{children:e.jsx(B,{color:o.lightGray,size:12})}),type:"submit",variant:"contained",children:"Save Changes"}),h?e.jsx(K,{children:e.jsxs(X,{children:[e.jsx(D,{className:"errorIcon"}),e.jsx("span",{children:h})]})}):null]})]})})})},N=t.form`
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
`,_=t(n)`
  display: flex;
  align-items: flex-end;
`,H=t(n)`
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
`,K=t(n)`
  display: flex;
  align-items: center;
  color: ${o.primaryRed};
  position: relative;
  margin-top: 10px;
`,X=t(n)`
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
`,J=a=>{const{children:d,value:l,index:r,...p}=a;return l===r?e.jsx(ie,{"aria-labelledby":`simple-tab-${r}`,hidden:l!==r,id:`simple-tabpanel-${r}`,role:"tabpanel",...p,children:d}):null};function Q(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const Z=({onClose:a})=>{const[d,l]=b.useState(0),[r]=T(i=>[i.isAdmin,i.setPubKey]),p=$(i=>i.appMetaData),x=()=>r?"Admin Settings":"Settings",h=({children:i})=>e.jsxs(te,{children:[e.jsx(n,{direction:"row",pt:3,children:e.jsx(se,{"data-testid":"setting-label",children:x()})}),i]}),u=(i,s)=>{l(s)},m=[...r?[{label:"General",component:Y}]:[],{label:"Appearance",component:W}];return e.jsxs(ne,{"data-testid":"settings-modal",direction:"column",children:[e.jsx(h,{children:e.jsx(ee,{"aria-label":"settings tabs",onChange:u,value:d,children:m.map((i,s)=>e.jsx(ae,{disableRipple:!0,label:i.label,...Q(s)},i.label))})}),m.map((i,s)=>e.jsx(J,{index:s,value:d,children:p&&e.jsx(i.component,{initialValues:p,onClose:a})},i.label))]})},ee=t(E)`
  && {
    .MuiTabs-indicator {
      background: ${o.primaryBlue};
    }
    padding-left: 34px;
  }
`,te=t(n)`
  border-radius: 9px 9px 0 0;
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,ae=t(L)`
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
`,ie=t(n)`
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
`,ne=t(n)`
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
`,ce=()=>{const{close:a}=j("settings"),{visible:d}=j("addItem");return d?null:e.jsx(I,{background:"BG1",id:"settings",noWrap:!0,onClose:a,preventOutsideClose:!0,children:e.jsx(Z,{onClose:a})})};export{ce as SettingsModal};
