import{s as u,b as j,F as t,T as w,g as P,r as m,j as e,h as C,k as V,aj as N,B as J,v as Y,e as H,a4 as K}from"./index-411fe9a5.js";import{aC as Q,B as h,C as W,aD as X,aF as I,q as Z,u as ee,F as te}from"./react-toastify.esm-650aec5d.js";import{B as oe}from"./index-f40006ff.js";import{u as se}from"./index-5cc32178.js";import{S as ne}from"./index-1d0f5061.js";import{h as re}from"./index.esm-6ff8d86e.js";import{C as ie}from"./CheckIcon-5d922a75.js";import{A as L}from"./index-0fb8e2f3.js";import{T as B}from"./index-c81ffe9a.js";import{N as ae,c as E,O as ce,i as le}from"./constants-72496a68.js";import"./index-dd34bee5.js";import"./Popover-3ffd5b08.js";import"./useSlotProps-7dd44e72.js";import"./Select-df77053e.js";import"./Stack-9245d234.js";import"./Popper-aeaca409.js";import"./InfoIcon-796e7b8c.js";const de=({onClick:o,loading:l,error:r})=>{const p=P(s=>s.budget),[i,c]=m.useState(10),d="node";return m.useEffect(()=>{(async()=>{try{const n=await X(d);c(n.data.price)}catch(n){console.error("cannot fetch",n)}})()},[d]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(xe,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(pe,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[i," sats"]})]}),e.jsxs(me,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Q(p)," sats"]})]})]}),e.jsx(t,{children:e.jsx(h,{color:"secondary","data-testid":"check-icon",disabled:l||!!r,onClick:o,size:"large",startIcon:l?e.jsx(W,{size:24}):e.jsx(ie,{}),type:"submit",variant:"contained",children:"Approve"})}),r?e.jsxs(ue,{role:"tooltip",children:[e.jsxs(he,{children:[e.jsx(re,{fontSize:13}),e.jsx("span",{children:r})]}),e.jsx("div",{className:"tooltip",children:r})]}):null]})},pe=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,xe=u(w)`
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
`,ue=u(t)`
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
`,F=o=>o.charAt(0).toUpperCase()+o.slice(1),ye=({onSelectType:o,skipToStep:l})=>{const[r,p]=m.useState(null);m.useEffect(()=>{(async()=>{const s=(await I()).schemas.map(n=>({label:F(n.type),value:n.type}));p([...s,ae])})()},[]);const i=c=>{o((c==null?void 0:c.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(A,{children:"Select Parent"})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(L,{autoFocus:!0,onSelect:i,options:r})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(h,{color:"secondary",onClick:()=>l("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(h,{color:"secondary",onClick:()=>l("createType"),size:"large",variant:"contained",children:"Next"})})]})]})},fe=({skipToStep:o})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(A,{children:"Enter Type Name"})}),e.jsx(t,{mb:12,children:e.jsx(B,{id:"cy-item-name",maxLength:50,name:"name",placeholder:"Enter Type Name...",rules:{...C}})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(h,{color:"secondary",onClick:()=>o("selectParent"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(h,{color:"secondary",onClick:()=>o("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]}),A=u(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,je=({type:o,skipToStep:l,name:r,sourceLink:p})=>{const i=o==="Image"?r&&p:r;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ge,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(w,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(B,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...C}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(w,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(B,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...C}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(h,{color:"secondary",onClick:()=>l("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(h,{color:"secondary",disabled:!i,onClick:()=>l("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},ge=u(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=({skipToStep:o,allowNextStep:l,onSelectType:r,selectedType:p})=>{const[i]=V(n=>[n.customSchemaFlag]),[c,d]=m.useState(null);E.action=()=>o("selectParent"),m.useEffect(()=>{(async()=>{if(i){const b=(await I()).schemas.map(S=>({label:F(S.type),value:S.type,type:S.type}));d([...b,E])}else d([...ce,le])})()},[p,i]);const s=n=>{r((n==null?void 0:n.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(be,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(L,{autoFocus:!0,onSelect:s,options:c})}),e.jsx(t,{children:e.jsx(h,{color:"secondary",disabled:!l,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},be=u(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=async(o,l,r)=>{var d;const p="node",i={};i.node_type=o.nodeType,i.name=o.name,o.nodeType==="Image"&&(i.node_data={source_link:o.sourceLink});let c="";await J(async()=>{const s=await H.enable();i.pubkey=s==null?void 0:s.pubkey,c=await K()});try{const s=await Y.post(`/${p}`,JSON.stringify(i),{Authorization:c});if(s.error){const{message:n}=s.error;throw new Error(n)}r(o,(d=s==null?void 0:s.data)==null?void 0:d.ref_id)}catch(s){let n=N;if(s.status===400){const y=await s.json();n=y.errorCode||(y==null?void 0:y.status)||N}else s instanceof Error&&(n=s.message);throw new Error(n)}},De=()=>{const[o,l]=m.useState("sourceType"),{close:r,visible:p}=se("addItem"),[i]=P(a=>[a.setBudget]),c=Z({mode:"onChange"}),{watch:d,setValue:s,reset:n}=c,[y,b]=m.useState(!1),[S,M]=m.useState(""),[O,$]=ee(a=>[a.addNewNode,a.setSelectedNode]);m.useEffect(()=>()=>{l("sourceType"),n()},[p,n]);const k=d("nodeType"),_=d("name"),D=d("sourceLink"),R=()=>{r()},T=a=>{l(a)},U=(a,x)=>{const g=x||`new-id-${Math.random()}`,f=a.nodeType.toLocaleLowerCase(),z={name:a.name,type:f,label:a.name,node_type:f,id:g,ref_id:g,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...a.sourceLink?{source_link:a.sourceLink}:{}};O(z),$(z)},q=c.handleSubmit(async a=>{b(!0);try{await Se(a,i,U),ne("Item Added"),R()}catch(x){let g=N;if((x==null?void 0:x.status)===400){const f=await x.json();g=f.errorCode||(f==null?void 0:f.status)||N}else x instanceof Error&&(g=x.message);M(String(g))}finally{b(!1)}}),v=a=>s("nodeType",a),G={sourceType:e.jsx(we,{allowNextStep:!!k,onSelectType:v,selectedType:k,skipToStep:T}),source:e.jsx(je,{name:_,skipToStep:T,sourceLink:D||"",type:k}),selectParent:e.jsx(ye,{onSelectType:v,skipToStep:T}),createType:e.jsx(fe,{onSelectType:v,skipToStep:T}),setBudget:e.jsx(de,{loading:y,onClick:()=>null})};return e.jsx(oe,{id:"addItem",kind:"small",onClose:r,preventOutsideClose:!0,children:e.jsx(te,{...c,children:e.jsx("form",{id:"add-node-form",onSubmit:q,children:G[o]})})})};export{De as AddItemModal};
