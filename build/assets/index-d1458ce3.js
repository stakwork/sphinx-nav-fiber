import{s as i,F as o,T as f,j as e,h as C,b as x,r as m,g as F,k as v}from"./index-7a3017bc.js";import{B as M}from"./index-72845d56.js";import{u}from"./index-ca99b93a.js";import{u as D,U as $,q as k,e as j,x as G,F as R,C as y,B as L,aB as P}from"./react-toastify.esm-558803b1.js";import{B as S,T as z,a as I}from"./index-3597604a.js";import{T as b}from"./index-55656401.js";import{S as V,a as h,b as W}from"./index-4dbf911b.js";import{P as E}from"./PlusIcon-b5401cae.js";import{M as H,a as K}from"./ChevronUpIcon-57f10106.js";import"./useSlotProps-22051b00.js";import"./index.esm-bae92ed7.js";import"./InfoIcon-82d10ef5.js";import"./generateCategoricalChart-e5317115.js";import"./Popover-74d0ca4e.js";import"./index-a7047eca.js";import"./Popper-349bd2e2.js";import"./CheckIcon-d6e87c46.js";import"./ChevronDownIcon-794a0fcc.js";import"./Stack-e8525426.js";const N=({onClose:t})=>{const[n]=D(a=>[a.graphStyle]),r=()=>{localStorage.setItem("graphStyle",n),t()};return e.jsxs(U,{direction:"column",children:[e.jsx(q,{children:"Default graph view:"}),e.jsx($,{}),e.jsx(o,{mt:308,children:e.jsx(S,{kind:"big",onClick:r,children:"Save changes"})})]})},U=i(o)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,q=i(f)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,Y=({initialValues:t})=>{const n=k({defaultValues:t,mode:"onSubmit"}),{isSubmitting:r}=n.formState,a=j(l=>l.setAppMetaData),c=n.handleSubmit(async l=>{try{(await G(l)).status==="success"&&a(l)}catch(p){console.log(p),console.warn(p)}});return e.jsx(R,{...n,children:e.jsx(J,{id:"add-node-form",onSubmit:c,children:e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(o,{pt:20,children:e.jsx(b,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...C}})}),e.jsx(o,{pt:20,children:e.jsx(b,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(o,{mt:210,py:24,children:r?e.jsx(_,{children:e.jsx(y,{color:x.white,size:20})}):e.jsx(S,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},_=i(o).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,J=i.form`
  padding: 36px;
`;function O(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const Q=({schema:t})=>e.jsxs(V,{children:[e.jsx(h,{className:"empty"}),e.jsx(h,{children:O(t.type??"")})]}),X=m.memo(Q),Z=({schemas:t})=>{const{open:n}=u("addItem"),r=async()=>{n()};return e.jsxs(e.Fragment,{children:[e.jsxs(H,{component:"table",children:[e.jsx(W,{children:e.jsxs(K,{component:"tr",children:[e.jsx(h,{className:"empty"}),e.jsx(h,{children:"Type"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsx(X,{schema:a},a==null?void 0:a.ref_id))})]}),e.jsx(ee,{children:e.jsx(L,{color:"secondary",endIcon:e.jsx(E,{}),onClick:r,size:"medium",type:"submit",variant:"contained",children:"Create New Type"})})]})},ee=i(o)`
  display: flex;
  margin: 20px 0px 0px 30px;
  width: 28%;
`,te=()=>{const[t,n]=m.useState(!0),[r,a]=m.useState([]);return m.useEffect(()=>{(async()=>{try{const l=await P();a(l.schemas),n(!1)}catch(l){console.error("Error fetching data:",l),n(!1)}})()},[]),e.jsx(ae,{align:t?"center":"flex-start",justify:t?"center":"flex-start",children:t?e.jsx(y,{color:x.white}):e.jsx(e.Fragment,{children:e.jsx(Z,{schemas:r})})})},ae=i(o)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ne=t=>{const{children:n,value:r,index:a,...c}=t;return r===a?e.jsx(ce,{"aria-labelledby":`simple-tab-${a}`,hidden:r!==a,id:`simple-tabpanel-${a}`,role:"tabpanel",...c,children:n}):null};function se(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const re=({onClose:t})=>{const[n,r]=m.useState(0),[a,c]=F(s=>[s.isAdmin,s.setPubKey,s.pubKey]),l=v(s=>s.graphBlueprintFlag),p=j(s=>s.appMetaData),w=()=>a?"Admin Settings":"Settings",T=({children:s})=>e.jsxs(ie,{children:[e.jsxs(o,{direction:"row",pt:3,children:[e.jsx(de,{"data-testid":"setting-label",children:w()}),A()]}),s]}),A=()=>!c||a?null:e.jsx(e.Fragment,{}),B=(s,d)=>{r(d)},g=[...a?[{label:"General",component:Y}]:[],{label:"Appearance",component:N},...a&&l?[{label:"Graph Blueprint",component:te}]:[]];return e.jsxs(pe,{direction:"column",children:[e.jsx(T,{children:e.jsx(oe,{"aria-label":"settings tabs",onChange:B,value:n,children:g.map((s,d)=>e.jsx(le,{disableRipple:!0,label:s.label,...se(d)},s.label))})}),g.map((s,d)=>e.jsx(ne,{index:d,value:n,children:e.jsx(s.component,{initialValues:p,onClose:t})},s.label))]})},oe=i(z)`
  && {
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
    width: 90%;
  }
`,ie=i(o)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,le=i(I)`
  && {
    padding: 30px 0 24px;
    color: ${x.GRAY6};
    margin-left: 10px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: center;

    &.Mui-selected {
      color: ${x.white};
    }
    flex-grow: 1;
  }
`,ce=i(o)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,pe=i(o)`
  min-height: 0;
  flex: 1;
`,de=i(f)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,$e=()=>{const{close:t}=u("settings"),{visible:n}=u("addItem");return n?null:e.jsx(M,{background:"BG1",id:"settings",noWrap:!0,onClose:t,children:e.jsx(re,{onClose:t})})};export{$e as SettingsModal};
