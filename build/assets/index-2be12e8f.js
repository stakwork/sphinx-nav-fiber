import{f as y,h as j,F as t,T as S,x as $,r as h,j as e,bb as V,bc as W,C as B,b3 as H,I as K,b5 as Q,i as X,b4 as N,U as _,bg as Z,o as ee,be as te}from"./index-b85f35cf.js";import{B as T,C as M,i as se,c as oe,F as ne}from"./react-toastify.esm-ce67a4f9.js";import{B as re}from"./index-0c223900.js";import{u as I}from"./index-b9c9b7e2.js";import{S as ie}from"./index-7e285ddc.js";import{h as ae}from"./index.esm-ac56504e.js";import{C as ce}from"./CheckIcon-b94a1aa2.js";import{T as E}from"./index-e6f0fb8d.js";import{p as le}from"./index-30d16895.js";import{A as de}from"./index-39ab8de8.js";import{a as pe,i as xe}from"./constants-cde8ebc3.js";import"./InfoIcon-de2f1e11.js";import"./Popover-28c1573e.js";import"./useSlotProps-b8a587b0.js";import"./Select-f3cb55de.js";import"./Stack-b0e83988.js";import"./Popper-704ca55a.js";const me=({onClick:s,loading:p,error:c})=>{const x=$(a=>a.budget),[l,r]=h.useState(10),i="node";return h.useEffect(()=>{(async()=>{try{const m=await W(i);r(m.data.price)}catch(m){console.error("cannot fetch",m)}})()},[i]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(fe,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ue,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[l," sats"]})]}),e.jsxs(he,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[V(x)," sats"]})]})]}),e.jsx(t,{children:e.jsx(T,{color:"secondary","data-testid":"check-icon",disabled:p||!!c,onClick:s,size:"large",startIcon:p?e.jsx(M,{size:24}):e.jsx(ce,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(ge,{role:"tooltip",children:[e.jsxs(ye,{children:[e.jsx(ae,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},ue=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${j.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${j.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${j.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,he=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${j.secondaryText4};
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
`,fe=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ye=y(t)`
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
`,ge=y(t)`
  display: flex;
  align-items: center;
  color: ${j.primaryRed};
  position: relative;
  margin-top: 20px;

  .tooltip {
    position: absolute;
    background-color: ${j.black};
    opacity: 0.8;
    border-radius: 4px;
    color: ${j.white};
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
`,je=({type:s,onclose:p})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(F,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(F,{children:["Type: ",s]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:p,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),F=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=({skipToStep:s,nodeType:p})=>{const[c,x]=h.useState(!1),[l,r]=h.useState(),{watch:i,formState:{isValid:a}}=se();h.useEffect(()=>{(async()=>{x(!0);const o=await H(p),f=le(o);r(f),x(!1)})()},[p,i]);const m=n=>n.charAt(0).toUpperCase()+n.slice(1).replace(/_/g," "),u=l?[...l].sort((n,o)=>n.required&&!o.required?-1:!n.required&&o.required?1:0):[];return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(be,{children:"Set Attributes"})})}),e.jsx(Se,{children:c?e.jsx(t,{style:{margin:"auto"},children:e.jsx(M,{color:j.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:u==null?void 0:u.map(({key:n,required:o})=>e.jsx(e.Fragment,{children:e.jsxs(Te,{children:[e.jsx(S,{children:m(n)}),e.jsx(E,{id:"item-name",name:n,placeholder:o?"Required":"Optional",rules:{...o?B:{}}})]})}))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>s("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!a||c||(l==null?void 0:l.some(n=>n.required&&!i(n.key))),onClick:()=>s("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},be=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=y(t)`
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
`,Te=y(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${j.GRAY7};
    -webkit-text-fill-color: ${j.GRAY7};
  }
`,Ce=({type:s,skipToStep:p,name:c,sourceLink:x})=>{const l=s==="Image"?c&&x:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ne,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(S,{children:[s," name"]})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...B}})}),s==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(S,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...B}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>p("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!l,onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Ne=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ke=s=>s.charAt(0).toUpperCase()+s.slice(1),ve=({skipToStep:s,allowNextStep:p,onSelectType:c,selectedType:x})=>{const[l]=K(n=>[n.customSchemaFlag]),[r,i]=h.useState(null),[a,m]=h.useState(!1);h.useEffect(()=>{(async()=>{if(l){m(!0);try{const o=await Q(),f=["about","schema"],g=o.schemas.filter(w=>!f.includes(w.type)&&!w.is_deleted).map(w=>({label:ke(w.type),value:w.type,type:w.type,action:()=>s("setAttribues")}));i(g)}catch(o){console.warn(o)}finally{m(!1)}}else i([...pe,xe])})()},[x,l,s]);const u=n=>{c((n==null?void 0:n.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ze,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(de,{autoFocus:!0,isLoading:a,onSelect:u,options:r})}),e.jsx(t,{children:e.jsx(T,{color:"secondary",disabled:!p,onClick:()=>s("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},ze=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Be=async(s,p,c)=>{var x,l;if(s.nodeType==="Create custom type"){s.type;try{const r=await _.post("/schema",JSON.stringify(s),{});if(r.error){const{message:i}=r.error;throw new Error(i)}c(s,(x=r==null?void 0:r.data)==null?void 0:x.ref_id),close()}catch(r){let i=N;if(r.status===400){const a=await r.json();i=a.errorCode||(a==null?void 0:a.status)||N}else r instanceof Error&&(i=r.message);throw new Error(i)}}else{const r="node",{nodeType:i,typeName:a,...m}=s,u={node_data:{...m},node_type:i,name:a};s.nodeType==="Image"&&(u.node_data={...s.node_data,source_link:s.sourceLink});let n="";await Z(async()=>{const o=await ee.enable();u.pubkey=o==null?void 0:o.pubkey,n=await te()});try{const o=await _.post(`/${r}`,JSON.stringify(u),{Authorization:n});if(o.error){const{message:f}=o.error;throw new Error(f)}c(s,(l=o==null?void 0:o.data)==null?void 0:l.ref_id),close()}catch(o){let f=N;if(o.status===400)try{const g=await o.json();f=g.message||g.errorCode||(g==null?void 0:g.status)||N}catch{f=N}else o instanceof Error&&(f=o.message);throw new Error(f)}}},Ve=()=>{const[s,p]=h.useState("sourceType"),{close:c,visible:x}=I("addItem"),{open:l}=I("addType"),[r]=$(d=>[d.setBudget]),i=oe({mode:"onChange"}),{watch:a,setValue:m,reset:u}=i,[n,o]=h.useState(!1),[f,g]=h.useState(""),[w,O]=X(d=>[d.addNewNode,d.setSelectedNode]);h.useEffect(()=>()=>{p("sourceType"),u()},[x,u]);const v=a("nodeType"),P=a("typeName"),D=a("sourceLink"),R=a("type");a("title");const L=()=>{c()},z=d=>{p(d)},q=(d,b)=>{const k=b||`new-id-${Math.random()}`,C=d.nodeType.toLocaleLowerCase(),A={name:d.typeName,type:C,label:d.typeName,node_type:C,id:k,ref_id:k,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...d.sourceLink?{source_link:d.sourceLink}:{}};w(A),O(A)},U=i.handleSubmit(async d=>{o(!0);try{await Be(d,r,q),ie("Item Added"),L()}catch(b){let k=N;if((b==null?void 0:b.status)===400){const C=await b.json();k=C.errorCode||(C==null?void 0:C.status)||N}else b instanceof Error&&(k=b.message);g(String(k))}finally{o(!1)}}),G=d=>{d==="Create custom type"?l():m("nodeType",d)},Y={sourceType:e.jsx(ve,{allowNextStep:!!v,onSelectType:G,selectedType:v,skipToStep:z}),source:e.jsx(Ce,{name:P,skipToStep:z,sourceLink:D||"",type:v}),setBudget:e.jsx(me,{loading:n,onClick:()=>null}),createConfirmation:e.jsx(je,{onclose:L,type:R}),setAttribues:e.jsx(we,{nodeType:v,skipToStep:z})},J="small";return e.jsx(re,{id:"addItem",kind:J,onClose:c,preventOutsideClose:!0,children:e.jsx(ne,{...i,children:e.jsx("form",{id:"add-node-form",onSubmit:U,children:Y[s]})})})};export{Ve as AddItemModal};
