import{s as u,b as w,F as t,T as b,g as $,r as h,j as e,h as E,k as V,ai as g,v as I,C as q,e as H,a5 as Y}from"./index-1ee61b3a.js";import{aJ as Q,B as S,C as W,aK as X,aH as Z,t as ee,e as te,F as oe}from"./react-toastify.esm-72d67069.js";import{B as se}from"./index-6761adb5.js";import{u as L}from"./index-2c4ca382.js";import{S as ne}from"./index-6c9e5c68.js";import{h as re}from"./index.esm-00343a7f.js";import{C as ie}from"./CheckIcon-f61c081a.js";import{T as M}from"./index-a7f34ac7.js";import{A as ae}from"./index-99b45fac.js";import{a as ce,i as le}from"./constants-cde8ebc3.js";import"./InfoIcon-99f0cb4c.js";import"./Popover-d5b38327.js";import"./useSlotProps-6cdee9a7.js";import"./Select-ef7db6d0.js";import"./Stack-dde24edb.js";import"./Popper-1c28e189.js";const de=({onClick:o,loading:d,error:c})=>{const x=$(i=>i.budget),[p,r]=h.useState(10),n="node";return h.useEffect(()=>{(async()=>{try{const s=await X(n);r(s.data.price)}catch(s){console.error("cannot fetch",s)}})()},[n]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(xe,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(pe,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(me,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Q(x)," sats"]})]})]}),e.jsx(t,{children:e.jsx(S,{color:"secondary","data-testid":"check-icon",disabled:d||!!c,onClick:o,size:"large",startIcon:d?e.jsx(W,{size:24}):e.jsx(ie,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(fe,{role:"tooltip",children:[e.jsxs(he,{children:[e.jsx(re,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},pe=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,me=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,xe=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,he=u(t)`
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
`,fe=u(t)`
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
`,ue=({type:o,onclose:d})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(F,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(F,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(S,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(S,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),F=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ye=({type:o,skipToStep:d,name:c,sourceLink:x})=>{const p=o==="Image"?c&&x:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ge,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(b,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(M,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...E}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(b,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(M,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...E}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(S,{color:"secondary",onClick:()=>d("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(S,{color:"secondary",disabled:!p,onClick:()=>d("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},ge=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=o=>o.charAt(0).toUpperCase()+o.slice(1),je=({skipToStep:o,allowNextStep:d,onSelectType:c,selectedType:x})=>{const[p]=V(l=>[l.customSchemaFlag]),[r,n]=h.useState(null),[i,s]=h.useState(!1);h.useEffect(()=>{(async()=>{if(p){s(!0);try{const v=(await Z()).schemas.map(C=>({label:we(C.type),value:C.type,type:C.type}));n(v)}catch(T){console.warn(T)}finally{s(!1)}}else n([...ce,le])})()},[x,p]);const m=l=>{c((l==null?void 0:l.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(be,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ae,{autoFocus:!0,isLoading:i,onSelect:m,options:r})}),e.jsx(t,{children:e.jsx(S,{color:"secondary",disabled:!d,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},be=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=async(o,d,c)=>{var x,p;if(o.nodeType==="Create custom type"){o.type;try{const r=await I.post("/schema",JSON.stringify(o),{});if(r.error){const{message:n}=r.error;throw new Error(n)}c(o,(x=r==null?void 0:r.data)==null?void 0:x.ref_id),close()}catch(r){let n=g;if(r.status===400){const i=await r.json();n=i.errorCode||(i==null?void 0:i.status)||g}else r instanceof Error&&(n=r.message);throw new Error(n)}}else{const r="node",n={};n.node_type=o.nodeType,n.name=o.name,o.nodeType==="Image"&&(n.node_data={source_link:o.sourceLink});let i="";await q(async()=>{const s=await H.enable();n.pubkey=s==null?void 0:s.pubkey,i=await Y()});try{const s=await I.post(`/${r}`,JSON.stringify(n),{Authorization:i});if(s.error){const{message:m}=s.error;throw new Error(m)}c(o,(p=s==null?void 0:s.data)==null?void 0:p.ref_id),close()}catch(s){let m=g;if(s.status===400)try{const l=await s.json();m=l.message||l.errorCode||(l==null?void 0:l.status)||g}catch{m=g}else s instanceof Error&&(m=s.message);throw new Error(m)}}},_e=()=>{const[o,d]=h.useState("sourceType"),{close:c,visible:x}=L("addItem"),{open:p}=L("addType"),[r]=$(a=>[a.setBudget]),n=ee({mode:"onChange"}),{watch:i,setValue:s,reset:m}=n,[l,T]=h.useState(!1),[v,C]=h.useState(""),[A,O]=te(a=>[a.addNewNode,a.setSelectedNode]);h.useEffect(()=>()=>{d("sourceType"),m()},[x,m]);const k=i("nodeType"),P=i("name"),_=i("sourceLink"),D=i("type");i("title");const B=()=>{c()},N=a=>{d(a)},R=(a,f)=>{const j=f||`new-id-${Math.random()}`,y=a.nodeType.toLocaleLowerCase(),z={name:a.name,type:y,label:a.name,node_type:y,id:j,ref_id:j,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...a.sourceLink?{source_link:a.sourceLink}:{}};A(z),O(z)},J=n.handleSubmit(async a=>{T(!0);try{await Se(a,r,R),ne("Item Added"),B()}catch(f){let j=g;if((f==null?void 0:f.status)===400){const y=await f.json();j=y.errorCode||(y==null?void 0:y.status)||g}else f instanceof Error&&(j=f.message);C(String(j))}finally{T(!1)}}),U=a=>{a==="Create custom type"?p():s("nodeType",a)},G={sourceType:e.jsx(je,{allowNextStep:!!k,onSelectType:U,selectedType:k,skipToStep:N}),source:e.jsx(ye,{name:P,skipToStep:N,sourceLink:_||"",type:k}),setBudget:e.jsx(de,{loading:l,onClick:()=>null}),createConfirmation:e.jsx(ue,{onclose:B,type:D})},K="small";return e.jsx(se,{id:"addItem",kind:K,onClose:c,preventOutsideClose:!0,children:e.jsx(oe,{...n,children:e.jsx("form",{id:"add-node-form",onSubmit:J,children:G[o]})})})};export{_e as AddItemModal};
