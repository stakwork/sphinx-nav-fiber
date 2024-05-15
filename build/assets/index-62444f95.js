import{f as y,h as w,F as t,T as S,x as M,r as f,j as e,be as V,bf as W,D as z,b2 as H,J as K,b4 as Q,B as A,i as X,b3 as N,W as I,bj as Z,o as ee,bh as te}from"./index-f84c5caa.js";import{B as T,C as O,i as se,c as oe,F as ne}from"./react-toastify.esm-dd7332df.js";import{B as re}from"./index-2eac630c.js";import{S as ie}from"./index-8644036b.js";import{g as ae}from"./index.esm-90978199.js";import{C as ce}from"./CheckIcon-94edf20b.js";import{p as le}from"./index-30d16895.js";import{T as E}from"./index-d9e6bbd2.js";import{A as de}from"./index-5a75b019.js";import{c as pe}from"./index-64f1c910.js";import{d as me,i as xe}from"./index-52a59717.js";import"./InfoIcon-200eb276.js";import"./index-f9076b1e.js";import"./Popover-9f49cd8b.js";import"./useSlotProps-10a4f8ac.js";import"./Popper-bbcfcaa3.js";import"./generateCategoricalChart-fca9f85f.js";import"./NoFilterResultIcon-fc0207d7.js";import"./index-9ebf036a.js";import"./index-70c98e96.js";import"./PlusIcon-cb8bfa05.js";const ue=({onClick:s,loading:p,error:c})=>{const u=M(i=>i.budget),[x,o]=f.useState(10),a="node";return f.useEffect(()=>{(async()=>{try{const h=await W(a);o(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[a]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ye,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(he,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(fe,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[V(u)," sats"]})]})]}),e.jsx(t,{children:e.jsx(T,{color:"secondary","data-testid":"check-icon",disabled:p||!!c,onClick:s,size:"large",startIcon:p?e.jsx(O,{size:24}):e.jsx(ce,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(je,{role:"tooltip",children:[e.jsxs(ge,{children:[e.jsx(ae,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},he=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,we=({type:s,onclose:p})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx($,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs($,{children:["Type: ",s]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:p,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),$=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,be=({handleSelectType:s,skipToStep:p,nodeType:c})=>{const[u,x]=f.useState(!1),[o,a]=f.useState(),{watch:i,formState:{isValid:h}}=se();f.useEffect(()=>{(async()=>{x(!0);const l=await H(c),j=le(l);a(j),x(!1)})()},[c,i]);const g=r=>r.charAt(0).toUpperCase()+r.slice(1).replace(/_/g," "),m=o?[...o].sort((r,l)=>r.required&&!l.required?-1:!r.required&&l.required?1:0):[],n=()=>{s(""),p("sourceType")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Se,{children:"Set Attributes"})})}),e.jsx(Te,{children:u?e.jsx(t,{style:{margin:"auto"},children:e.jsx(O,{color:w.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:m==null?void 0:m.map(({key:r,required:l})=>e.jsx(e.Fragment,{children:e.jsxs(Ce,{children:[e.jsx(S,{children:g(r)}),e.jsx(E,{id:"item-name",maxLength:50,name:r,placeholder:l?"Required":"Optional",rules:{...l?z:{}}})]})}))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:n,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!h||u||(o==null?void 0:o.some(r=>r.required&&!i(r.key))),onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Se=y(S)`
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
`,Ne=({type:s,skipToStep:p,name:c,sourceLink:u})=>{const x=s==="Image"?c&&u:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ve,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(S,{children:[s," name"]})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...z}})}),s==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(S,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...z}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>p("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!x,onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},ve=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ke=({skipToStep:s,allowNextStep:p,onSelectType:c,selectedType:u})=>{const[x]=K(m=>[m.customSchemaFeatureFlag]),[o,a]=f.useState(null),[i,h]=f.useState(!1);f.useEffect(()=>{(async()=>{if(x){h(!0);try{const n=await Q(),r=["about","schema"],l=n.schemas.filter(j=>j.ref_id&&!r.includes(j.type)&&!j.is_deleted).map(j=>({label:pe(j.type),value:j.type,action:()=>s("setAttribues")}));a(l)}catch(n){console.warn(n)}finally{h(!1)}}else a([...me,xe])})()},[u,x,s]);const g=m=>{c((m==null?void 0:m.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Be,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(de,{autoFocus:!0,isLoading:i,onSelect:g,options:o})}),e.jsx(t,{children:e.jsx(T,{color:"secondary",disabled:!p,onClick:()=>s("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Be=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ze=async(s,p,c)=>{var u,x;if(s.nodeType==="Create custom type"){s.type;try{const o=await I.post("/schema",JSON.stringify(s),{});if(o.error){const{message:a}=o.error;throw new Error(a)}c(s,(u=o==null?void 0:o.data)==null?void 0:u.ref_id),close()}catch(o){let a=N;if(o.status===400){const i=await o.json();a=i.errorCode||(i==null?void 0:i.status)||N}else o instanceof Error&&(a=o.message);throw new Error(a)}}else{const o="node",{nodeType:a,typeName:i,...h}=s,g={node_data:{...h},node_type:a,name:i};s.nodeType==="Image"&&(g.node_data={...s.node_data,source_link:s.sourceLink});let m="";await Z(async()=>{const n=await ee.enable();g.pubkey=n==null?void 0:n.pubkey,m=await te()});try{const n=await I.post(`/${o}`,JSON.stringify(g),{Authorization:m});if(n.error){const{message:r}=n.error;throw new Error(r)}c(s,(x=n==null?void 0:n.data)==null?void 0:x.ref_id),close()}catch(n){let r=N;if(n.status===400)try{const l=await n.json();r=l.message||l.errorCode||(l==null?void 0:l.status)||N}catch{r=N}else n instanceof Error&&(r=n.message);throw new Error(r)}}},Qe=()=>{const[s,p]=f.useState("sourceType"),{close:c,visible:u}=A("addItem"),{open:x}=A("addType"),[o]=M(d=>[d.setBudget]),a=oe({mode:"onChange"}),{watch:i,setValue:h,reset:g}=a,[m,n]=f.useState(!1),[r,l]=f.useState(""),[j,P]=X(d=>[d.addNewNode,d.setSelectedNode]);f.useEffect(()=>()=>{p("sourceType"),g()},[u,g]);const k=i("nodeType"),D=i("typeName"),R=i("sourceLink"),q=i("type");i("title");const L=()=>{c()},B=d=>{p(d)},G=(d,b)=>{const v=b||`new-id-${Math.random()}`,C=d.nodeType.toLocaleLowerCase(),F={name:d.typeName,type:C,label:d.typeName,node_type:C,id:v,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...d.sourceLink?{source_link:d.sourceLink}:{}};j(F),P(F)},J=a.handleSubmit(async d=>{n(!0);try{await ze(d,o,G),ie("Item Added"),L()}catch(b){let v=N;if((b==null?void 0:b.status)===400){const C=await b.json();v=C.errorCode||(C==null?void 0:C.status)||N}else b instanceof Error&&(v=b.message);l(String(v))}finally{n(!1)}}),_=d=>{d==="Create custom type"?x():h("nodeType",d)},U={sourceType:e.jsx(ke,{allowNextStep:!!k,onSelectType:_,selectedType:k,skipToStep:B}),source:e.jsx(Ne,{name:D,skipToStep:B,sourceLink:R||"",type:k}),setBudget:e.jsx(ue,{loading:m,onClick:()=>null}),createConfirmation:e.jsx(we,{onclose:L,type:q}),setAttribues:e.jsx(be,{handleSelectType:_,nodeType:k,skipToStep:B})},Y="small";return e.jsx(re,{id:"addItem",kind:Y,onClose:c,preventOutsideClose:!0,children:e.jsx(ne,{...a,children:e.jsx("form",{id:"add-node-form",onSubmit:J,children:U[s]})})})};export{Qe as AddItemModal};
