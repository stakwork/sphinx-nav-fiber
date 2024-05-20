import{f as r,F as i,T as g,i as y,j as e,k as b,L as S,D as w,h as x,r as T,x as v,B as m}from"./index-98fd1490.js";import{B}from"./index-c53f84d0.js";import{h as C,c as A,F as D,C as M}from"./react-toastify.esm-b3e70d0f.js";import{B as f,T as $,a as k}from"./index-0acee7a9.js";import{T as u}from"./index-8bc7dcda.js";import"./useSlotProps-bf7cabc4.js";import"./index.esm-4b0e6fd5.js";import"./InfoIcon-52e4d134.js";const F=({onClose:t})=>{const[s]=y(n=>[n.graphStyle]),o=()=>{localStorage.setItem("graphStyle",s),t()};return e.jsxs(G,{direction:"column",children:[e.jsx(L,{children:"Default graph view:"}),e.jsx(C,{}),e.jsx(i,{mt:308,children:e.jsx(f,{kind:"big",onClick:o,children:"Save Changes"})})]})},G=r(i)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,L=r(g)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,P=({initialValues:t})=>{const s=A({defaultValues:t,mode:"onSubmit"}),{isSubmitting:o}=s.formState,n=b(d=>d.setAppMetaData),l=s.handleSubmit(async d=>{try{(await S(d)).status==="success"&&n(d)}catch(p){console.log(p),console.warn(p)}});return e.jsx(D,{...s,children:e.jsx(V,{id:"add-node-form",onSubmit:l,children:e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(i,{pt:20,children:e.jsx(u,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...w}})}),e.jsx(i,{pt:20,children:e.jsx(u,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(i,{mt:210,py:24,children:o?e.jsx(R,{children:e.jsx(M,{color:x.white,size:20})}):e.jsx(f,{disabled:o,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save Changes"})})]})})})},R=r(i).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,V=r.form`
  padding: 36px;
`,z=t=>{const{children:s,value:o,index:n,...l}=t;return o===n?e.jsx(K,{"aria-labelledby":`simple-tab-${n}`,hidden:o!==n,id:`simple-tabpanel-${n}`,role:"tabpanel",...l,children:s}):null};function W(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const I=({onClose:t})=>{const[s,o]=T.useState(0),[n]=v(a=>[a.isAdmin,a.setPubKey]),l=b(a=>a.appMetaData),d=()=>n?"Admin Settings":"Settings",p=({children:a})=>e.jsxs(H,{children:[e.jsx(i,{direction:"row",pt:3,children:e.jsx(U,{"data-testid":"setting-label",children:d()})}),a]}),j=(a,c)=>{o(c)},h=[...n?[{label:"General",component:P}]:[],{label:"Appearance",component:F}];return e.jsxs(O,{"data-testid":"settings-modal",direction:"column",children:[e.jsx(p,{children:e.jsx(E,{"aria-label":"settings tabs",onChange:j,value:s,children:h.map((a,c)=>e.jsx(q,{disableRipple:!0,label:a.label,...W(c)},a.label))})}),h.map((a,c)=>e.jsx(z,{index:c,value:s,children:l&&e.jsx(a.component,{initialValues:l,onClose:t})},a.label))]})},E=r($)`
  && {
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
    padding-left: 34px;
  }
`,H=r(i)`
  border-radius: 9px 9px 0 0;
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,q=r(k)`
  && {
    min-width: 0;
    width: auto;
    padding: 30px 0 19px;
    color: ${x.GRAY6};
    margin-right: 87px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${x.white};
    }
  }
`,K=r(i)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
  overflow: hidden;
  border-radius: 9px;
`,O=r(i)`
  min-height: 0;
  flex: 1;
`,U=r(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,te=()=>{const{close:t}=m("settings"),{visible:s}=m("addItem");return s?null:e.jsx(B,{background:"BG1",id:"settings",noWrap:!0,onClose:t,preventOutsideClose:!0,children:e.jsx(I,{onClose:t})})};export{te as SettingsModal};
