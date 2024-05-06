import{f as y,h as w,F as t,T as S,x as M,r as f,j as e,bd as V,be as W,C as z,b1 as H,I as K,b3 as Q,i as X,b2 as N,U as A,bi as Z,o as ee,bg as te}from"./index-6b8035a0.js";import{B as T,C as O,i as oe,c as se,F as re}from"./react-toastify.esm-f4357339.js";import{B as ne}from"./index-20c51ea9.js";import{u as I}from"./index-dacc80d1.js";import{S as ie}from"./index-ec92b96d.js";import{g as ae}from"./index.esm-d53e501d.js";import{C as ce}from"./CheckIcon-2598bec0.js";import{p as le}from"./index-30d16895.js";import{T as E}from"./index-82a06da1.js";import{A as de}from"./index-19c690e3.js";import{c as pe}from"./index-64f1c910.js";import{d as me,i as xe}from"./index-cc14f10a.js";import"./InfoIcon-c4102d48.js";import"./index-434b5211.js";import"./Popover-e4ca8d48.js";import"./useSlotProps-9149ef2d.js";import"./Popper-5ef99285.js";import"./generateCategoricalChart-d627afdd.js";import"./NoFilterResultIcon-9488fe40.js";import"./index-46d769de.js";import"./index-e598f385.js";import"./PlusIcon-741afe7f.js";const ue=({onClick:o,loading:p,error:c})=>{const u=M(i=>i.budget),[x,s]=f.useState(10),a="node";return f.useEffect(()=>{(async()=>{try{const h=await W(a);s(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[a]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ye,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(he,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(fe,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[V(u)," sats"]})]})]}),e.jsx(t,{children:e.jsx(T,{color:"secondary","data-testid":"check-icon",disabled:p||!!c,onClick:o,size:"large",startIcon:p?e.jsx(O,{size:24}):e.jsx(ce,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(je,{role:"tooltip",children:[e.jsxs(ge,{children:[e.jsx(ae,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},he=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,fe=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ye=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ge=y(t)`
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
`,je=y(t)`
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
`,we=({type:o,onclose:p})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx($,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs($,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:p,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),$=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,be=({handleSelectType:o,skipToStep:p,nodeType:c})=>{const[u,x]=f.useState(!1),[s,a]=f.useState(),{watch:i,formState:{isValid:h}}=oe();f.useEffect(()=>{(async()=>{x(!0);const l=await H(c),j=le(l);a(j),x(!1)})()},[c,i]);const g=n=>n.charAt(0).toUpperCase()+n.slice(1).replace(/_/g," "),m=s?[...s].sort((n,l)=>n.required&&!l.required?-1:!n.required&&l.required?1:0):[],r=()=>{o(""),p("sourceType")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Se,{children:"Set Attributes"})})}),e.jsx(Te,{children:u?e.jsx(t,{style:{margin:"auto"},children:e.jsx(O,{color:w.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:m==null?void 0:m.map(({key:n,required:l})=>e.jsx(e.Fragment,{children:e.jsxs(Ce,{children:[e.jsx(S,{children:g(n)}),e.jsx(E,{id:"item-name",maxLength:50,name:n,placeholder:l?"Required":"Optional",rules:{...l?z:{}}})]})}))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:r,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!h||u||(s==null?void 0:s.some(n=>n.required&&!i(n.key))),onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Se=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Te=y(t)`
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
`,Ce=y(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${w.GRAY7};
    -webkit-text-fill-color: ${w.GRAY7};
  }
`,Ne=({type:o,skipToStep:p,name:c,sourceLink:u})=>{const x=o==="Image"?c&&u:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ve,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(S,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...z}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(S,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...z}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>p("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!x,onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},ve=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ke=({skipToStep:o,allowNextStep:p,onSelectType:c,selectedType:u})=>{const[x]=K(m=>[m.customSchemaFeatureFlag]),[s,a]=f.useState(null),[i,h]=f.useState(!1);f.useEffect(()=>{(async()=>{if(x){h(!0);try{const r=await Q(),n=["about","schema"],l=r.schemas.filter(j=>j.ref_id&&!n.includes(j.type)&&!j.is_deleted).map(j=>({label:pe(j.type),value:j.type,action:()=>o("setAttribues")}));a(l)}catch(r){console.warn(r)}finally{h(!1)}}else a([...me,xe])})()},[u,x,o]);const g=m=>{c((m==null?void 0:m.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Be,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(de,{autoFocus:!0,isLoading:i,onSelect:g,options:s})}),e.jsx(t,{children:e.jsx(T,{color:"secondary",disabled:!p,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Be=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ze=async(o,p,c)=>{var u,x;if(o.nodeType==="Create custom type"){o.type;try{const s=await A.post("/schema",JSON.stringify(o),{});if(s.error){const{message:a}=s.error;throw new Error(a)}c(o,(u=s==null?void 0:s.data)==null?void 0:u.ref_id),close()}catch(s){let a=N;if(s.status===400){const i=await s.json();a=i.errorCode||(i==null?void 0:i.status)||N}else s instanceof Error&&(a=s.message);throw new Error(a)}}else{const s="node",{nodeType:a,typeName:i,...h}=o,g={node_data:{...h},node_type:a,name:i};o.nodeType==="Image"&&(g.node_data={...o.node_data,source_link:o.sourceLink});let m="";await Z(async()=>{const r=await ee.enable();g.pubkey=r==null?void 0:r.pubkey,m=await te()});try{const r=await A.post(`/${s}`,JSON.stringify(g),{Authorization:m});if(r.error){const{message:n}=r.error;throw new Error(n)}c(o,(x=r==null?void 0:r.data)==null?void 0:x.ref_id),close()}catch(r){let n=N;if(r.status===400)try{const l=await r.json();n=l.message||l.errorCode||(l==null?void 0:l.status)||N}catch{n=N}else r instanceof Error&&(n=r.message);throw new Error(n)}}},Xe=()=>{const[o,p]=f.useState("sourceType"),{close:c,visible:u}=I("addItem"),{open:x}=I("addType"),[s]=M(d=>[d.setBudget]),a=se({mode:"onChange"}),{watch:i,setValue:h,reset:g}=a,[m,r]=f.useState(!1),[n,l]=f.useState(""),[j,P]=X(d=>[d.addNewNode,d.setSelectedNode]);f.useEffect(()=>()=>{p("sourceType"),g()},[u,g]);const k=i("nodeType"),D=i("typeName"),R=i("sourceLink"),q=i("type");i("title");const L=()=>{c()},B=d=>{p(d)},U=(d,b)=>{const v=b||`new-id-${Math.random()}`,C=d.nodeType.toLocaleLowerCase(),F={name:d.typeName,type:C,label:d.typeName,node_type:C,id:v,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...d.sourceLink?{source_link:d.sourceLink}:{}};j(F),P(F)},G=a.handleSubmit(async d=>{r(!0);try{await ze(d,s,U),ie("Item Added"),L()}catch(b){let v=N;if((b==null?void 0:b.status)===400){const C=await b.json();v=C.errorCode||(C==null?void 0:C.status)||N}else b instanceof Error&&(v=b.message);l(String(v))}finally{r(!1)}}),_=d=>{d==="Create custom type"?x():h("nodeType",d)},Y={sourceType:e.jsx(ke,{allowNextStep:!!k,onSelectType:_,selectedType:k,skipToStep:B}),source:e.jsx(Ne,{name:D,skipToStep:B,sourceLink:R||"",type:k}),setBudget:e.jsx(ue,{loading:m,onClick:()=>null}),createConfirmation:e.jsx(we,{onclose:L,type:q}),setAttribues:e.jsx(be,{handleSelectType:_,nodeType:k,skipToStep:B})},J="small";return e.jsx(ne,{id:"addItem",kind:J,onClose:c,preventOutsideClose:!0,children:e.jsx(re,{...a,children:e.jsx("form",{id:"add-node-form",onSubmit:G,children:Y[o]})})})};export{Xe as AddItemModal};
