import{s as u,b as j,F as t,T,g as A,r as h,j as e,h as I,k as K,ai as w,v as L,C as V,e as q,a5 as Y}from"./index-0f50bdbb.js";import{aJ as Q,B as C,C as W,aK as X,aH as Z,t as ee,e as te,F as oe}from"./react-toastify.esm-d795285c.js";import{B as se}from"./index-592f1d67.js";import{u as M}from"./index-dde0b953.js";import{S as ne}from"./index-bb1fb19e.js";import{h as re}from"./index.esm-28dab1a8.js";import{C as ie}from"./CheckIcon-ee1c8e06.js";import{T as F}from"./index-5587f6b8.js";import{A as ae}from"./index-ca4ad8d5.js";import{a as ce,i as le}from"./constants-cde8ebc3.js";import"./InfoIcon-5580d469.js";import"./Popover-36bedb6c.js";import"./useSlotProps-f40772fa.js";import"./Select-468ef9e6.js";import"./Stack-b6c8921f.js";import"./Popper-b2cf4418.js";const de=({onClick:o,loading:d,error:c})=>{const x=A(i=>i.budget),[p,r]=h.useState(10),n="node";return h.useEffect(()=>{(async()=>{try{const s=await X(n);r(s.data.price)}catch(s){console.error("cannot fetch",s)}})()},[n]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(xe,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(pe,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(me,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Q(x)," sats"]})]})]}),e.jsx(t,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:d||!!c,onClick:o,size:"large",startIcon:d?e.jsx(W,{size:24}):e.jsx(ie,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(fe,{role:"tooltip",children:[e.jsxs(he,{children:[e.jsx(re,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},pe=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,me=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,xe=u(T)`
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
`,ue=({type:o,onclose:d})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx($,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs($,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),$=u(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ye=({type:o,skipToStep:d,name:c,sourceLink:x})=>{const p=o==="Image"?c&&x:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ge,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(T,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(F,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...I}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(T,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(F,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...I}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:()=>d("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!p,onClick:()=>d("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},ge=u(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=o=>o.charAt(0).toUpperCase()+o.slice(1),je=({skipToStep:o,allowNextStep:d,onSelectType:c,selectedType:x})=>{const[p]=K(l=>[l.customSchemaFlag]),[r,n]=h.useState(null),[i,s]=h.useState(!1);h.useEffect(()=>{(async()=>{if(p){s(!0);try{const b=await Z(),B=["about","schema"],k=b.schemas.filter(y=>!B.includes(y.type)).map(y=>({label:we(y.type),value:y.type,type:y.type}));n(k)}catch(b){console.warn(b)}finally{s(!1)}}else n([...ce,le])})()},[x,p]);const m=l=>{c((l==null?void 0:l.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(be,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ae,{autoFocus:!0,isLoading:i,onSelect:m,options:r})}),e.jsx(t,{children:e.jsx(C,{color:"secondary",disabled:!d,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},be=u(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=async(o,d,c)=>{var x,p;if(o.nodeType==="Create custom type"){o.type;try{const r=await L.post("/schema",JSON.stringify(o),{});if(r.error){const{message:n}=r.error;throw new Error(n)}c(o,(x=r==null?void 0:r.data)==null?void 0:x.ref_id),close()}catch(r){let n=w;if(r.status===400){const i=await r.json();n=i.errorCode||(i==null?void 0:i.status)||w}else r instanceof Error&&(n=r.message);throw new Error(n)}}else{const r="node",n={};n.node_type=o.nodeType,n.name=o.name,o.nodeType==="Image"&&(n.node_data={source_link:o.sourceLink});let i="";await V(async()=>{const s=await q.enable();n.pubkey=s==null?void 0:s.pubkey,i=await Y()});try{const s=await L.post(`/${r}`,JSON.stringify(n),{Authorization:i});if(s.error){const{message:m}=s.error;throw new Error(m)}c(o,(p=s==null?void 0:s.data)==null?void 0:p.ref_id),close()}catch(s){let m=w;if(s.status===400)try{const l=await s.json();m=l.message||l.errorCode||(l==null?void 0:l.status)||w}catch{m=w}else s instanceof Error&&(m=s.message);throw new Error(m)}}},_e=()=>{const[o,d]=h.useState("sourceType"),{close:c,visible:x}=M("addItem"),{open:p}=M("addType"),[r]=A(a=>[a.setBudget]),n=ee({mode:"onChange"}),{watch:i,setValue:s,reset:m}=n,[l,b]=h.useState(!1),[B,k]=h.useState(""),[y,O]=te(a=>[a.addNewNode,a.setSelectedNode]);h.useEffect(()=>()=>{d("sourceType"),m()},[x,m]);const v=i("nodeType"),P=i("name"),_=i("sourceLink"),D=i("type");i("title");const N=()=>{c()},z=a=>{d(a)},R=(a,f)=>{const S=f||`new-id-${Math.random()}`,g=a.nodeType.toLocaleLowerCase(),E={name:a.name,type:g,label:a.name,node_type:g,id:S,ref_id:S,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...a.sourceLink?{source_link:a.sourceLink}:{}};y(E),O(E)},J=n.handleSubmit(async a=>{b(!0);try{await Se(a,r,R),ne("Item Added"),N()}catch(f){let S=w;if((f==null?void 0:f.status)===400){const g=await f.json();S=g.errorCode||(g==null?void 0:g.status)||w}else f instanceof Error&&(S=f.message);k(String(S))}finally{b(!1)}}),U=a=>{a==="Create custom type"?p():s("nodeType",a)},G={sourceType:e.jsx(je,{allowNextStep:!!v,onSelectType:U,selectedType:v,skipToStep:z}),source:e.jsx(ye,{name:P,skipToStep:z,sourceLink:_||"",type:v}),setBudget:e.jsx(de,{loading:l,onClick:()=>null}),createConfirmation:e.jsx(ue,{onclose:N,type:D})},H="small";return e.jsx(se,{id:"addItem",kind:H,onClose:c,preventOutsideClose:!0,children:e.jsx(oe,{...n,children:e.jsx("form",{id:"add-node-form",onSubmit:J,children:G[o]})})})};export{_e as AddItemModal};
