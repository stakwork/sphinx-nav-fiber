import{f as y,h as w,F as t,T as S,x as O,r as f,j as e,aX as W,aY as H,D as L,b1 as K,J as X,b2 as Z,B as P,i as Q,aZ as C,W as $,b3 as ee,o as te,a$ as se}from"./index-b17e6e7f.js";import{B as T,C as D,i as oe,c as re,F as ne}from"./react-toastify.esm-ac6bd257.js";import{B as ie}from"./index-a41ce7c3.js";import{S as ae}from"./index-be361899.js";import{i as ce}from"./index.esm-de2ad175.js";import{C as le}from"./CheckIcon-7c4c0597.js";import{p as de}from"./index-30d16895.js";import{T as _}from"./index-922af843.js";import{n as pe,a as E,b as me,i as xe}from"./index-adfb9662.js";import{A as ue}from"./index-070c6dfb.js";import{c as he}from"./index-64f1c910.js";import"./InfoIcon-eed706a9.js";import"./generateCategoricalChart-435279e6.js";import"./Popover-bcd53c70.js";import"./useSlotProps-ddc77366.js";import"./NoFilterResultIcon-d7bfc88d.js";import"./index-6bbf0f8e.js";import"./index-46828888.js";import"./PlusIcon-179f716a.js";import"./index-b0a49808.js";import"./Popper-f6f28cec.js";const fe=({onClick:o,loading:p,error:c})=>{const u=O(a=>a.budget),[m,s]=f.useState(10),i="node";return f.useEffect(()=>{(async()=>{try{const h=await H(i);s(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[i]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(we,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ye,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[m," sats"]})]}),e.jsxs(ge,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[W(u)," sats"]})]})]}),e.jsx(t,{children:e.jsx(T,{color:"secondary","data-testid":"check-icon",disabled:p||!!c,onClick:o,size:"large",startIcon:p?e.jsx(D,{size:24}):e.jsx(le,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(be,{role:"tooltip",children:[e.jsxs(je,{children:[e.jsx(ce,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},ye=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ge=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,we=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,je=y(t)`
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
`,be=y(t)`
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
`,Se=({type:o,onclose:p})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(M,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(M,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:p,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),M=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Te=({handleSelectType:o,skipToStep:p,nodeType:c})=>{const[u,m]=f.useState(!1),[s,i]=f.useState(),{watch:a,formState:{isValid:h}}=oe();f.useEffect(()=>{(async()=>{m(!0);const l=await K(c),B=de(l).filter(N=>N.key!=="node_key");i(B),m(!1)})()},[c,a]);const g=n=>n.charAt(0).toUpperCase()+n.slice(1).replace(/_/g," "),x=s?[...s].sort((n,l)=>n.required&&!l.required?-1:!n.required&&l.required?1:0):[],r=()=>{o(""),p("sourceType")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ve,{children:"Set Attributes"})})}),e.jsx(Ce,{children:u?e.jsx(t,{style:{margin:"auto"},children:e.jsx(D,{color:w.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:x==null?void 0:x.map(({key:n,required:l})=>e.jsxs(Ne,{children:[e.jsx(S,{children:g(n)}),e.jsx(_,{id:"item-name",maxLength:50,name:n,placeholder:l?"Required":"Optional",rules:{...l?{...L,pattern:{message:"Please avoid special characters and spaces",value:pe}}:{}}})]},n))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:r,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!h||u||(s==null?void 0:s.some(n=>n.required&&!a(n.key))),onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},ve=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ce=y(t)`
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
`,Ne=y(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${w.GRAY7};
    -webkit-text-fill-color: ${w.GRAY7};
  }
`,ke=({type:o,skipToStep:p,name:c,sourceLink:u})=>{const m=i=>E.test(i??""),s=o==="Image"?m(c)&&m(u):m(c);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Be,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(S,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(_,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...L,pattern:{message:"Please avoid special characters and spaces",value:E}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(S,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(_,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...L,pattern:{message:"Please avoid special characters and spaces",value:E}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>p("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!s,onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Be=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ze=({skipToStep:o,allowNextStep:p,onSelectType:c,selectedType:u})=>{const[m]=X(x=>[x.customSchemaFeatureFlag]),[s,i]=f.useState(null),[a,h]=f.useState(!1);f.useEffect(()=>{(async()=>{if(m){h(!0);try{const r=await Z(),n=["about","schema"],l=r.schemas.filter(j=>j.ref_id&&!n.includes(j.type)&&!j.is_deleted).map(j=>({label:he(j.type),value:j.type,action:()=>o("setAttribues")}));i(l)}catch(r){console.warn(r)}finally{h(!1)}}else i([...me,xe])})()},[u,m,o]);const g=x=>{c((x==null?void 0:x.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ee,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ue,{autoFocus:!0,isLoading:a,onSelect:g,options:s})}),e.jsx(t,{children:e.jsx(T,{color:"secondary",disabled:!p,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Ee=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Le=async(o,p,c)=>{var u,m;if(o.nodeType==="Create custom type"){o.type;try{const s=await $.post("/schema",JSON.stringify(o),{});if(s.error){const{message:i}=s.error;throw new Error(i)}c(o,(u=s==null?void 0:s.data)==null?void 0:u.ref_id),close()}catch(s){let i=C;if(s.status===400){const a=await s.json();i=a.errorCode||(a==null?void 0:a.status)||C}else s instanceof Error&&(i=s.message);throw new Error(i)}}else{const s="node",{nodeType:i,typeName:a,...h}=o,g={node_data:{...h},node_type:i,name:a};o.nodeType==="Image"&&(g.node_data={...o.node_data,source_link:o.sourceLink});let x="";await ee(async()=>{const r=await te.enable();g.pubkey=r==null?void 0:r.pubkey,x=await se()});try{const r=await $.post(`/${s}`,JSON.stringify(g),{Authorization:x});if(r.error){const{message:n}=r.error;throw new Error(n)}c(o,(m=r==null?void 0:r.data)==null?void 0:m.ref_id),close()}catch(r){let n=C;if(r.status===400)try{const l=await r.json();n=l.message||l.errorCode||(l==null?void 0:l.status)||C}catch{n=C}else r instanceof Error&&(n=r.message);throw new Error(n)}}},Qe=()=>{const[o,p]=f.useState("sourceType"),{close:c,visible:u}=P("addItem"),{open:m}=P("addType"),[s]=O(d=>[d.setBudget]),i=re({mode:"onChange"}),{watch:a,setValue:h,reset:g}=i,[x,r]=f.useState(!1),[n,l]=f.useState(""),[j,B]=Q(d=>[d.addNewNode,d.setSelectedNode]);f.useEffect(()=>()=>{p("sourceType"),g()},[u,g]);const N=a("nodeType"),R=a("typeName"),q=a("sourceLink"),Y=a("type");a("title");const A=()=>{c()},z=d=>{p(d)},G=(d,b)=>{const k=b||`new-id-${Math.random()}`,v=d.nodeType.toLocaleLowerCase(),I={name:d.typeName,type:v,label:d.typeName,node_type:v,id:k,ref_id:k,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...d.sourceLink?{source_link:d.sourceLink}:{}};j(I),B(I)},J=i.handleSubmit(async d=>{r(!0);try{await Le(d,s,G),ae("Item Added"),A()}catch(b){let k=C;if((b==null?void 0:b.status)===400){const v=await b.json();k=v.errorCode||(v==null?void 0:v.status)||C}else b instanceof Error&&(k=b.message);l(String(k))}finally{r(!1)}}),F=d=>{d==="Create custom type"?m():h("nodeType",d)},U={sourceType:e.jsx(ze,{allowNextStep:!!N,onSelectType:F,selectedType:N,skipToStep:z}),source:e.jsx(ke,{name:R,skipToStep:z,sourceLink:q||"",type:N}),setBudget:e.jsx(fe,{loading:x,onClick:()=>null}),createConfirmation:e.jsx(Se,{onclose:A,type:Y}),setAttribues:e.jsx(Te,{handleSelectType:F,nodeType:N,skipToStep:z})},V="small";return e.jsx(ie,{id:"addItem",kind:V,onClose:c,preventOutsideClose:!0,children:e.jsx(ne,{...i,children:e.jsx("form",{id:"add-node-form",onSubmit:J,children:U[o]})})})};export{Qe as AddItemModal};
