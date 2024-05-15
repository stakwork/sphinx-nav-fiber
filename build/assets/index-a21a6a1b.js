import{f as y,h as w,F as t,T as S,x as M,r as f,j as e,be as W,bf as H,D as E,b2 as K,J as Q,b4 as X,B as I,i as Z,b3 as C,W as P,bj as ee,o as te,bh as se}from"./index-58d1ac52.js";import{B as T,C as O,i as oe,c as ne,F as re}from"./react-toastify.esm-d30eefbb.js";import{B as ie}from"./index-bd7f0f5d.js";import{S as ae}from"./index-d8c87a04.js";import{g as ce}from"./index.esm-864f7b20.js";import{C as le}from"./CheckIcon-d7a2ac53.js";import{p as de}from"./index-30d16895.js";import{T as L}from"./index-ecd38180.js";import{n as pe,d as z,e as me,i as xe}from"./index-22454958.js";import{A as ue}from"./index-0d1c3a3c.js";import{c as he}from"./index-64f1c910.js";import"./InfoIcon-d983fb82.js";import"./generateCategoricalChart-6773b068.js";import"./Popover-d9c20fa0.js";import"./useSlotProps-1d301f31.js";import"./NoFilterResultIcon-044b3edf.js";import"./index-8159c227.js";import"./index-719eb5ad.js";import"./PlusIcon-ba2bbc8a.js";import"./index-4a3a502c.js";import"./Popper-b2030f22.js";const fe=({onClick:o,loading:p,error:c})=>{const u=M(a=>a.budget),[m,s]=f.useState(10),i="node";return f.useEffect(()=>{(async()=>{try{const h=await H(i);s(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[i]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(je,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ye,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[m," sats"]})]}),e.jsxs(ge,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[W(u)," sats"]})]})]}),e.jsx(t,{children:e.jsx(T,{color:"secondary","data-testid":"check-icon",disabled:p||!!c,onClick:o,size:"large",startIcon:p?e.jsx(O,{size:24}):e.jsx(le,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(be,{role:"tooltip",children:[e.jsxs(we,{children:[e.jsx(ce,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},ye=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,je=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=y(t)`
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
`,Se=({type:o,onclose:p})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx($,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs($,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:p,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),$=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Te=({handleSelectType:o,skipToStep:p,nodeType:c})=>{const[u,m]=f.useState(!1),[s,i]=f.useState(),{watch:a,formState:{isValid:h}}=oe();f.useEffect(()=>{(async()=>{m(!0);const l=await K(c),j=de(l);i(j),m(!1)})()},[c,a]);const g=r=>r.charAt(0).toUpperCase()+r.slice(1).replace(/_/g," "),x=s?[...s].sort((r,l)=>r.required&&!l.required?-1:!r.required&&l.required?1:0):[],n=()=>{o(""),p("sourceType")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ve,{children:"Set Attributes"})})}),e.jsx(Ce,{children:u?e.jsx(t,{style:{margin:"auto"},children:e.jsx(O,{color:w.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:x==null?void 0:x.map(({key:r,required:l})=>e.jsx(e.Fragment,{children:e.jsxs(Ne,{children:[e.jsx(S,{children:g(r)}),e.jsx(L,{id:"item-name",maxLength:50,name:r,placeholder:l?"Required":"Optional",rules:{...l?{...E,pattern:{message:"Please avoid special characters and spaces",value:pe}}:{}}})]})}))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:n,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!h||u||(s==null?void 0:s.some(r=>r.required&&!a(r.key))),onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},ve=y(S)`
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
`,ke=({type:o,skipToStep:p,name:c,sourceLink:u})=>{const m=i=>z.test(i??""),s=o==="Image"?m(c)&&m(u):m(c);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Be,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(S,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...E,pattern:{message:"Please avoid special characters and spaces",value:z}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(S,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...E,pattern:{message:"Please avoid special characters and spaces",value:z}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>p("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!s,onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Be=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ze=({skipToStep:o,allowNextStep:p,onSelectType:c,selectedType:u})=>{const[m]=Q(x=>[x.customSchemaFeatureFlag]),[s,i]=f.useState(null),[a,h]=f.useState(!1);f.useEffect(()=>{(async()=>{if(m){h(!0);try{const n=await X(),r=["about","schema"],l=n.schemas.filter(j=>j.ref_id&&!r.includes(j.type)&&!j.is_deleted).map(j=>({label:he(j.type),value:j.type,action:()=>o("setAttribues")}));i(l)}catch(n){console.warn(n)}finally{h(!1)}}else i([...me,xe])})()},[u,m,o]);const g=x=>{c((x==null?void 0:x.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ee,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ue,{autoFocus:!0,isLoading:a,onSelect:g,options:s})}),e.jsx(t,{children:e.jsx(T,{color:"secondary",disabled:!p,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Ee=y(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Le=async(o,p,c)=>{var u,m;if(o.nodeType==="Create custom type"){o.type;try{const s=await P.post("/schema",JSON.stringify(o),{});if(s.error){const{message:i}=s.error;throw new Error(i)}c(o,(u=s==null?void 0:s.data)==null?void 0:u.ref_id),close()}catch(s){let i=C;if(s.status===400){const a=await s.json();i=a.errorCode||(a==null?void 0:a.status)||C}else s instanceof Error&&(i=s.message);throw new Error(i)}}else{const s="node",{nodeType:i,typeName:a,...h}=o,g={node_data:{...h},node_type:i,name:a};o.nodeType==="Image"&&(g.node_data={...o.node_data,source_link:o.sourceLink});let x="";await ee(async()=>{const n=await te.enable();g.pubkey=n==null?void 0:n.pubkey,x=await se()});try{const n=await P.post(`/${s}`,JSON.stringify(g),{Authorization:x});if(n.error){const{message:r}=n.error;throw new Error(r)}c(o,(m=n==null?void 0:n.data)==null?void 0:m.ref_id),close()}catch(n){let r=C;if(n.status===400)try{const l=await n.json();r=l.message||l.errorCode||(l==null?void 0:l.status)||C}catch{r=C}else n instanceof Error&&(r=n.message);throw new Error(r)}}},Ze=()=>{const[o,p]=f.useState("sourceType"),{close:c,visible:u}=I("addItem"),{open:m}=I("addType"),[s]=M(d=>[d.setBudget]),i=ne({mode:"onChange"}),{watch:a,setValue:h,reset:g}=i,[x,n]=f.useState(!1),[r,l]=f.useState(""),[j,D]=Z(d=>[d.addNewNode,d.setSelectedNode]);f.useEffect(()=>()=>{p("sourceType"),g()},[u,g]);const k=a("nodeType"),R=a("typeName"),q=a("sourceLink"),G=a("type");a("title");const _=()=>{c()},B=d=>{p(d)},J=(d,b)=>{const N=b||`new-id-${Math.random()}`,v=d.nodeType.toLocaleLowerCase(),F={name:d.typeName,type:v,label:d.typeName,node_type:v,id:N,ref_id:N,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...d.sourceLink?{source_link:d.sourceLink}:{}};j(F),D(F)},U=i.handleSubmit(async d=>{n(!0);try{await Le(d,s,J),ae("Item Added"),_()}catch(b){let N=C;if((b==null?void 0:b.status)===400){const v=await b.json();N=v.errorCode||(v==null?void 0:v.status)||C}else b instanceof Error&&(N=b.message);l(String(N))}finally{n(!1)}}),A=d=>{d==="Create custom type"?m():h("nodeType",d)},V={sourceType:e.jsx(ze,{allowNextStep:!!k,onSelectType:A,selectedType:k,skipToStep:B}),source:e.jsx(ke,{name:R,skipToStep:B,sourceLink:q||"",type:k}),setBudget:e.jsx(fe,{loading:x,onClick:()=>null}),createConfirmation:e.jsx(Se,{onclose:_,type:G}),setAttribues:e.jsx(Te,{handleSelectType:A,nodeType:k,skipToStep:B})},Y="small";return e.jsx(ie,{id:"addItem",kind:Y,onClose:c,preventOutsideClose:!0,children:e.jsx(re,{...i,children:e.jsx("form",{id:"add-node-form",onSubmit:U,children:V[o]})})})};export{Ze as AddItemModal};
