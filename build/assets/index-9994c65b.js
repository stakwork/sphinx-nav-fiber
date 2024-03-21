import{s as i,F as o,T as f,j as e,h as C,b as x,r as m,g as F,k as v}from"./index-fbea16ad.js";import{B as M}from"./index-7b5195df.js";import{u}from"./index-73d5b24f.js";import{u as D,U as $,q as k,e as j,x as G,F as R,C as y,B as L,aB as P}from"./react-toastify.esm-ee4152bf.js";import{B as S,T as z,a as I}from"./index-e2f44253.js";import{T as b}from"./index-c28e550d.js";import{S as V,a as h,b as W}from"./index-9b543d41.js";import{P as E}from"./PlusIcon-8b46e117.js";import{M as H,a as K}from"./ChevronUpIcon-d81cc681.js";import"./useSlotProps-22211fec.js";import"./index.esm-08135425.js";import"./InfoIcon-8f72a8b2.js";import"./generateCategoricalChart-491cd6ff.js";import"./Popover-29078010.js";import"./index-ce67f34a.js";import"./Popper-f1095716.js";import"./CheckIcon-190c4154.js";import"./ChevronDownIcon-83c66862.js";import"./Stack-6ea30c66.js";const N=({onClose:t})=>{const[a]=D(n=>[n.graphStyle]),r=()=>{localStorage.setItem("graphStyle",a),t()};return e.jsxs(U,{direction:"column",children:[e.jsx(q,{children:"Default graph view:"}),e.jsx($,{}),e.jsx(o,{mt:308,children:e.jsx(S,{kind:"big",onClick:r,children:"Save changes"})})]})},U=i(o)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,q=i(f)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,Y=({initialValues:t})=>{const a=k({defaultValues:t,mode:"onSubmit"}),{isSubmitting:r}=a.formState,n=j(l=>l.setAppMetaData),c=a.handleSubmit(async l=>{try{(await G(l)).status==="success"&&n(l)}catch(p){console.log(p),console.warn(p)}});return e.jsx(R,{...a,children:e.jsx(J,{id:"add-node-form",onSubmit:c,children:e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(o,{pt:20,children:e.jsx(b,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...C}})}),e.jsx(o,{pt:20,children:e.jsx(b,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(o,{mt:210,py:24,children:r?e.jsx(_,{children:e.jsx(y,{color:x.white,size:20})}):e.jsx(S,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},_=i(o).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,J=i.form`
  padding: 36px;
`;function O(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const Q=({schema:t})=>e.jsxs(V,{children:[e.jsx(h,{className:"empty"}),e.jsx(h,{children:O(t.type??"")})]}),X=m.memo(Q),Z=({schemas:t})=>{const{open:a}=u("addItem"),r=async()=>{a()};return e.jsxs(e.Fragment,{children:[e.jsxs(H,{component:"table",children:[e.jsx(W,{children:e.jsxs(K,{component:"tr",children:[e.jsx(h,{className:"empty"}),e.jsx(h,{children:"Type"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(n=>e.jsx(X,{schema:n},n==null?void 0:n.ref_id))})]}),e.jsx(ee,{children:e.jsx(L,{color:"secondary",endIcon:e.jsx(E,{}),onClick:r,size:"medium",type:"submit",variant:"contained",children:"Create New Type"})})]})},ee=i(o)`
  display: flex;
  margin: 20px 0px 0px 30px;
  width: 28%;
`,te=()=>{const[t,a]=m.useState(!0),[r,n]=m.useState([]);return m.useEffect(()=>{(async()=>{try{const l=await P();n(l.schemas),a(!1)}catch(l){console.error("Error fetching data:",l),a(!1)}})()},[]),e.jsx(ne,{align:t?"center":"flex-start",justify:t?"center":"flex-start",children:t?e.jsx(y,{color:x.white}):e.jsx(e.Fragment,{children:e.jsx(Z,{schemas:r})})})},ne=i(o)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ae=t=>{const{children:a,value:r,index:n,...c}=t;return r===n?e.jsx(ce,{"aria-labelledby":`simple-tab-${n}`,hidden:r!==n,id:`simple-tabpanel-${n}`,role:"tabpanel",...c,children:a}):null};function se(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const re=({onClose:t})=>{const[a,r]=m.useState(0),[n,c]=F(s=>[s.isAdmin,s.setPubKey,s.pubKey]),l=v(s=>s.graphBluePrint),p=j(s=>s.appMetaData),w=()=>n?"Admin Settings":"Settings",T=({children:s})=>e.jsxs(ie,{children:[e.jsxs(o,{direction:"row",pt:3,children:[e.jsx(de,{"data-testid":"setting-label",children:w()}),A()]}),s]}),A=()=>!c||n?null:e.jsx(e.Fragment,{}),B=(s,d)=>{r(d)},g=[...n?[{label:"General",component:Y}]:[],{label:"Appearance",component:N},...n&&l?[{label:"Graph Blueprint",component:te}]:[]];return e.jsxs(pe,{direction:"column",children:[e.jsx(T,{children:e.jsx(oe,{"aria-label":"settings tabs",onChange:B,value:a,children:g.map((s,d)=>e.jsx(le,{disableRipple:!0,label:s.label,...se(d)},s.label))})}),g.map((s,d)=>e.jsx(ae,{index:d,value:a,children:e.jsx(s.component,{initialValues:p,onClose:t})},s.label))]})},oe=i(z)`
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
`,$e=()=>{const{close:t}=u("settings"),{visible:a}=u("addItem");return a?null:e.jsx(M,{background:"BG1",id:"settings",noWrap:!0,onClose:t,children:e.jsx(re,{onClose:t})})};export{$e as SettingsModal};
