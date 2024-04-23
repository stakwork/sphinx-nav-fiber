import{f as g,h as w,F as t,T as S,x as M,r as f,j as e,bd as V,be as W,C as z,b1 as H,J as K,b3 as Q,i as X,b2 as N,W as F,bi as Z,o as ee,bg as te}from"./index-659df10a.js";import{B as T,C as O,i as oe,c as se,F as ne}from"./react-toastify.esm-6120373c.js";import{B as re}from"./index-3652260a.js";import{u as I}from"./index-53b0bc65.js";import{S as ie}from"./index-b0d44554.js";import{g as ae}from"./index.esm-581f5c21.js";import{C as ce}from"./CheckIcon-df1e65fc.js";import{T as E}from"./index-fdaf0b4c.js";import{p as le}from"./index-30d16895.js";import{A as de}from"./index-b4742f19.js";import{d as pe,i as me}from"./index-8dfafbcc.js";import"./InfoIcon-b4da5800.js";import"./Popover-377b2722.js";import"./useSlotProps-ff692886.js";import"./Select-d9b6aeba.js";import"./Popper-9b917218.js";import"./generateCategoricalChart-64c91a5a.js";import"./NoFilterResultIcon-c32588d0.js";import"./dividerClasses-1a382922.js";import"./index-17c113fd.js";import"./index-577cd31f.js";import"./PlusIcon-97a7f876.js";const xe=({onClick:o,loading:p,error:c})=>{const u=M(i=>i.budget),[x,s]=f.useState(10),a="node";return f.useEffect(()=>{(async()=>{try{const h=await W(a);s(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[a]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(fe,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ue,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(he,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[V(u)," sats"]})]})]}),e.jsx(t,{children:e.jsx(T,{color:"secondary","data-testid":"check-icon",disabled:p||!!c,onClick:o,size:"large",startIcon:p?e.jsx(O,{size:24}):e.jsx(ce,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(ge,{role:"tooltip",children:[e.jsxs(ye,{children:[e.jsx(ae,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},ue=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${w.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${w.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${w.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,he=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${w.secondaryText4};
  .title {
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`,fe=g(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ye=g(t)`
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
  justify-content: center;

  span {
    margin-left: 4px;
  }
`,ge=g(t)`
  display: flex;
  align-items: center;
  color: ${w.primaryRed};
  position: relative;
  margin-top: 20px;

  .tooltip {
    position: absolute;
    background-color: ${w.black};
    opacity: 0.8;
    border-radius: 4px;
    color: ${w.white};
    top: -10px;
    left: 335px;
    padding: 4px 8px;
    font-size: 13px;
    font-family: Barlow;
    visibility: hidden;
    width: 175px;
    z-index: 1;
  }

  &:hover .tooltip {
    visibility: visible;
  }

  &:focus .tooltip {
    visibility: visible;
  }
`,je=({type:o,onclose:p})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx($,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs($,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:p,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),$=g(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=({handleSelectType:o,skipToStep:p,nodeType:c})=>{const[u,x]=f.useState(!1),[s,a]=f.useState(),{watch:i,formState:{isValid:h}}=oe();f.useEffect(()=>{(async()=>{x(!0);const l=await H(c),y=le(l);a(y),x(!1)})()},[c,i]);const j=r=>r.charAt(0).toUpperCase()+r.slice(1).replace(/_/g," "),m=s?[...s].sort((r,l)=>r.required&&!l.required?-1:!r.required&&l.required?1:0):[],n=()=>{o(""),p("sourceType")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(be,{children:"Set Attributes"})})}),e.jsx(Se,{children:u?e.jsx(t,{style:{margin:"auto"},children:e.jsx(O,{color:w.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:m==null?void 0:m.map(({key:r,required:l})=>e.jsx(e.Fragment,{children:e.jsxs(Te,{children:[e.jsx(S,{children:j(r)}),e.jsx(E,{id:"item-name",maxLength:50,name:r,placeholder:l?"Required":"Optional",rules:{...l?z:{}}})]})}))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:n,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!h||u||(s==null?void 0:s.some(r=>r.required&&!i(r.key))),onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},be=g(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=g(t)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`,Te=g(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${w.GRAY7};
    -webkit-text-fill-color: ${w.GRAY7};
  }
`,Ce=({type:o,skipToStep:p,name:c,sourceLink:u})=>{const x=o==="Image"?c&&u:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ne,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(S,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...z}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(S,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...z}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>p("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!x,onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Ne=g(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ve=o=>o.charAt(0).toUpperCase()+o.slice(1),ke=({skipToStep:o,allowNextStep:p,onSelectType:c,selectedType:u})=>{const[x]=K(m=>[m.customSchemaFlag]),[s,a]=f.useState(null),[i,h]=f.useState(!1);console.log(),f.useEffect(()=>{(async()=>{if(x){h(!0);try{const n=await Q(),r=["about","schema"],l=n.schemas.filter(y=>y.ref_id&&!r.includes(y.type)&&!y.is_deleted).map(y=>({label:ve(y.type),value:y.type,type:y.type,action:()=>o("setAttribues")}));a(l)}catch(n){console.warn(n)}finally{h(!1)}}else a([...pe,me])})()},[u,x,o]);const j=m=>{c((m==null?void 0:m.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Be,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(de,{autoFocus:!0,isLoading:i,onSelect:j,options:s})}),e.jsx(t,{children:e.jsx(T,{color:"secondary",disabled:!p,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Be=g(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ze=async(o,p,c)=>{var u,x;if(o.nodeType==="Create custom type"){o.type;try{const s=await F.post("/schema",JSON.stringify(o),{});if(s.error){const{message:a}=s.error;throw new Error(a)}c(o,(u=s==null?void 0:s.data)==null?void 0:u.ref_id),close()}catch(s){let a=N;if(s.status===400){const i=await s.json();a=i.errorCode||(i==null?void 0:i.status)||N}else s instanceof Error&&(a=s.message);throw new Error(a)}}else{const s="node",{nodeType:a,typeName:i,...h}=o,j={node_data:{...h},node_type:a,name:i};o.nodeType==="Image"&&(j.node_data={...o.node_data,source_link:o.sourceLink});let m="";await Z(async()=>{const n=await ee.enable();j.pubkey=n==null?void 0:n.pubkey,m=await te()});try{const n=await F.post(`/${s}`,JSON.stringify(j),{Authorization:m});if(n.error){const{message:r}=n.error;throw new Error(r)}c(o,(x=n==null?void 0:n.data)==null?void 0:x.ref_id),close()}catch(n){let r=N;if(n.status===400)try{const l=await n.json();r=l.message||l.errorCode||(l==null?void 0:l.status)||N}catch{r=N}else n instanceof Error&&(r=n.message);throw new Error(r)}}},Xe=()=>{const[o,p]=f.useState("sourceType"),{close:c,visible:u}=I("addItem"),{open:x}=I("addType"),[s]=M(d=>[d.setBudget]),a=se({mode:"onChange"}),{watch:i,setValue:h,reset:j}=a,[m,n]=f.useState(!1),[r,l]=f.useState(""),[y,P]=X(d=>[d.addNewNode,d.setSelectedNode]);f.useEffect(()=>()=>{p("sourceType"),j()},[u,j]);const k=i("nodeType"),D=i("typeName"),R=i("sourceLink"),q=i("type");i("title");const L=()=>{c()},B=d=>{p(d)},U=(d,b)=>{const v=b||`new-id-${Math.random()}`,C=d.nodeType.toLocaleLowerCase(),A={name:d.typeName,type:C,label:d.typeName,node_type:C,id:v,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...d.sourceLink?{source_link:d.sourceLink}:{}};y(A),P(A)},G=a.handleSubmit(async d=>{n(!0);try{await ze(d,s,U),ie("Item Added"),L()}catch(b){let v=N;if((b==null?void 0:b.status)===400){const C=await b.json();v=C.errorCode||(C==null?void 0:C.status)||N}else b instanceof Error&&(v=b.message);l(String(v))}finally{n(!1)}}),_=d=>{d==="Create custom type"?x():h("nodeType",d)},J={sourceType:e.jsx(ke,{allowNextStep:!!k,onSelectType:_,selectedType:k,skipToStep:B}),source:e.jsx(Ce,{name:D,skipToStep:B,sourceLink:R||"",type:k}),setBudget:e.jsx(xe,{loading:m,onClick:()=>null}),createConfirmation:e.jsx(je,{onclose:L,type:q}),setAttribues:e.jsx(we,{handleSelectType:_,nodeType:k,skipToStep:B})},Y="small";return e.jsx(re,{id:"addItem",kind:Y,onClose:c,preventOutsideClose:!0,children:e.jsx(ne,{...a,children:e.jsx("form",{id:"add-node-form",onSubmit:G,children:J[o]})})})};export{Xe as AddItemModal};
