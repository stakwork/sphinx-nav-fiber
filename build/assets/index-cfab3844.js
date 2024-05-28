import{f as j,h as b,F as t,T as v,x as R,r as f,j as e,aW as W,aX as H,D as I,a_ as K,J as X,a$ as Q,B as P,i as Z,aY as k,N as O,b0 as ee,o as te,O as se}from"./index-530f6618.js";import{B as N,C as q,i as oe,c as ne,F as re}from"./react-toastify.esm-7264a5d3.js";import{B as ie}from"./index-a101b3f5.js";import{S as ae}from"./index-aa1a6825.js";import{i as ce}from"./index.esm-51a0b245.js";import{C as le}from"./CheckIcon-44aceca1.js";import{n as z,a as de,i as pe}from"./index-03b01b14.js";import{p as me}from"./index-30d16895.js";import{T as A}from"./index-fa56e81c.js";import{A as xe}from"./index-3db1f864.js";import{c as ue}from"./index-64f1c910.js";import"./generateCategoricalChart-32ace6f3.js";import"./Popover-99e940b8.js";import"./useSlotProps-11e18c14.js";import"./InfoIcon-1357a1ce.js";import"./NoFilterResultIcon-63c61aee.js";import"./index-2f843e70.js";import"./index-a3fa1a1a.js";import"./PlusIcon-357dc440.js";import"./index-a388b7a3.js";import"./Popper-31c40a3a.js";const he=({onClick:n,loading:d,error:c})=>{const m=R(i=>i.budget),[p,s]=f.useState(10),a="node";return f.useEffect(()=>{(async()=>{try{const u=await H(a);s(u.data.price)}catch(u){console.error("cannot fetch",u)}})()},[a]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ge,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(fe,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(ye,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[W(m)," sats"]})]})]}),e.jsx(t,{children:e.jsx(N,{color:"secondary","data-testid":"check-icon",disabled:d||!!c,onClick:n,size:"large",startIcon:d?e.jsx(q,{size:24}):e.jsx(le,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(je,{role:"tooltip",children:[e.jsxs(we,{children:[e.jsx(ce,{className:"errorIcon"}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},fe=j(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${b.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${b.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${b.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,ye=j(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${b.secondaryText4};
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
`,ge=j(v)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=j(t)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;

  .errorIcon {
    display: block;
    font-size: 13px;
    min-height: 13px;
    min-width: 13px;
  }

  span {
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
  }
`,je=j(t)`
  display: flex;
  align-items: center;
  color: ${b.primaryRed};
  position: relative;
  margin-top: 20px;

  .tooltip {
    position: absolute;
    background-color: ${b.black};
    opacity: 0.8;
    border-radius: 4px;
    color: ${b.white};
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
`,be=({type:n,onclose:d})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(D,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(D,{children:["Type: ",n]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(N,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(N,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),D=j(v)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=({handleSelectType:n,skipToStep:d,nodeType:c})=>{const[m,p]=f.useState(!1),[s,a]=f.useState(),{watch:i,setValue:u,formState:{isValid:y}}=oe();f.useEffect(()=>{(async()=>{p(!0);const w=await K(c),E=me(w).filter(_=>_.key!=="node_key");a(E),p(!1)})()},[c,i]);const x=o=>o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),r=s?[...s].sort((o,w)=>o.required&&!w.required?-1:!o.required&&w.required?1:0):[],g=()=>{n(""),d("sourceType")},h=()=>{s==null||s.forEach(({key:o,required:w})=>{if(w){const S=i(o);typeof S=="string"&&u(o,S.trim(),{shouldValidate:!0})}}),y&&!m&&(s!=null&&s.every(o=>!o.required||i(o.key)))&&d("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Te,{children:"Set Attributes"})})}),e.jsx(ve,{children:m?e.jsx(t,{style:{margin:"auto"},children:e.jsx(q,{color:b.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:r==null?void 0:r.map(({key:o,required:w})=>e.jsxs(Ne,{children:[e.jsx(v,{children:x(o)}),e.jsx(A,{id:"item-name",maxLength:50,name:o,placeholder:w?"Required":"Optional",rules:{...w?{...I,pattern:{message:"No leading whitespace allowed",value:z}}:{}}})]},o))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(N,{color:"secondary",onClick:g,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(N,{color:"secondary",disabled:!y||m||(s==null?void 0:s.some(o=>o.required&&!i(o.key))),onClick:h,size:"large",variant:"contained",children:"Next"})})]})]})},Te=j(v)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ve=j(t)`
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
`,Ne=j(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${b.GRAY7};
    -webkit-text-fill-color: ${b.GRAY7};
  }
`,Ce=({type:n,skipToStep:d,name:c,sourceLink:m})=>{const p=a=>z.test(a??""),s=n==="Image"?p(c)&&p(m):p(c);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ke,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(v,{children:[n," name"]})}),e.jsx(t,{mb:12,children:e.jsx(A,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...I,pattern:{message:"No leading whitespace allowed",value:z}}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(v,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(A,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...I,pattern:{message:"Please avoid special characters and spaces",value:z}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(N,{color:"secondary",onClick:()=>d("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(N,{color:"secondary",disabled:!s,onClick:()=>d("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},ke=j(v)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Be=({skipToStep:n,allowNextStep:d,onSelectType:c,selectedType:m})=>{const[p]=X(x=>[x.customSchemaFeatureFlag]),[s,a]=f.useState(null),[i,u]=f.useState(!1);f.useEffect(()=>{(async()=>{if(p){u(!0);try{const r=await Q(),g=["about","schema"],h=r.schemas.filter(o=>o.ref_id&&!g.includes(o.type)&&!o.is_deleted).map(o=>({label:ue(o.type),value:o.type,action:()=>n("setAttribues")}));a(h)}catch(r){console.warn(r)}finally{u(!1)}}else a([...de,pe])})()},[m,p,n]);const y=x=>{c((x==null?void 0:x.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ze,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(xe,{autoFocus:!0,isLoading:i,onSelect:y,options:s})}),e.jsx(t,{children:e.jsx(N,{color:"secondary",disabled:!d,onClick:()=>n("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},ze=j(v)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ee=async(n,d,c)=>{var m,p;if(n.nodeType==="Create custom type"){n.type;try{const s=await O.post("/schema",JSON.stringify(n),{});if(s.error){const{message:a}=s.error;throw new Error(a)}c(n,(m=s==null?void 0:s.data)==null?void 0:m.ref_id),close()}catch(s){let a=k;if(s.status===400){const i=await s.json();a=i.errorCode||(i==null?void 0:i.status)||k}else s instanceof Error&&(a=s.message);throw new Error(a)}}else{const s="node",{nodeType:a,typeName:i,...u}=n,y={node_data:{...u},node_type:a,name:i};n.nodeType==="Image"&&(y.node_data={...n.node_data,source_link:n.sourceLink});let x="";await ee(async()=>{const r=await te.enable();y.pubkey=r==null?void 0:r.pubkey,x=await se()});try{const r=await O.post(`/${s}`,JSON.stringify(y),{Authorization:x});if(r.error){const{message:g}=r.error;throw new Error(g)}c(n,(p=r==null?void 0:r.data)==null?void 0:p.ref_id),close()}catch(r){let g=k;if(r.status===400)try{const h=await r.json();g=h.message||h.errorCode||(h==null?void 0:h.status)||k}catch{g=k}else r instanceof Error&&(g=r.message);throw new Error(g)}}},Qe=()=>{const[n,d]=f.useState("sourceType"),{close:c,visible:m}=P("addItem"),{open:p}=P("addType"),[s]=R(l=>[l.setBudget]),a=ne({mode:"onChange"}),{watch:i,setValue:u,reset:y}=a,[x,r]=f.useState(!1),[g,h]=f.useState(""),[o,w]=Z(l=>[l.addNewNode,l.setSelectedNode]);f.useEffect(()=>()=>{d("sourceType"),y()},[m,y]);const S=i("nodeType"),E=i("typeName"),_=i("sourceLink"),V=i("type");i("title");const F=()=>{c()},L=l=>{d(l)},Y=(l,T)=>{const B=T||`new-id-${Math.random()}`,C=l.nodeType.toLocaleLowerCase(),M={name:l.typeName,type:C,label:l.typeName,node_type:C,id:B,ref_id:B,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...l.sourceLink?{source_link:l.sourceLink}:{},properties:{...l}};o(M),w(M)},G=a.handleSubmit(async l=>{r(!0);try{await Ee(l,s,Y),ae("Item Added"),F()}catch(T){let B=k;if((T==null?void 0:T.status)===400){const C=await T.json();B=C.errorCode||(C==null?void 0:C.status)||k}else T instanceof Error&&(B=T.message);h(String(B))}finally{r(!1)}}),$=l=>{l==="Create custom type"?p():u("nodeType",l)},J={sourceType:e.jsx(Be,{allowNextStep:!!S,onSelectType:$,selectedType:S,skipToStep:L}),source:e.jsx(Ce,{name:E,skipToStep:L,sourceLink:_||"",type:S}),setBudget:e.jsx(he,{loading:x,onClick:()=>null}),createConfirmation:e.jsx(be,{onclose:F,type:V}),setAttribues:e.jsx(Se,{handleSelectType:$,nodeType:S,skipToStep:L})},U="small";return e.jsx(ie,{id:"addItem",kind:U,onClose:c,preventOutsideClose:!0,children:e.jsx(re,{...a,children:e.jsx("form",{id:"add-node-form",onSubmit:G,children:J[n]})})})};export{Qe as AddItemModal};
