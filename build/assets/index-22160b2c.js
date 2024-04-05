import{f as u,h as g,F as t,T as b,x as $,r as m,j as e,ba as W,bb as q,C as z,b2 as H,I as K,b4 as Q,i as X,b3 as N,U as I,bf as Z,o as ee,bd as te}from"./index-78c1e94a.js";import{B as S,C as M,k as se,e as oe,F as ne}from"./react-toastify.esm-26d0fce1.js";import{B as re}from"./index-ad3822cb.js";import{u as _}from"./index-f751514a.js";import{S as ie}from"./index-db650437.js";import{h as ae}from"./index.esm-8585a75f.js";import{C as ce}from"./CheckIcon-87991d05.js";import{T as E}from"./index-b44336fa.js";import{p as le}from"./index-30d16895.js";import{A as de}from"./index-6c9eb85d.js";import{a as pe,i as xe}from"./constants-cde8ebc3.js";import"./InfoIcon-69713509.js";import"./Popover-fe65656a.js";import"./useSlotProps-f1c9137a.js";import"./Select-48506644.js";import"./Stack-9b780243.js";import"./Popper-ad88e681.js";const me=({onClick:s,loading:l,error:a})=>{const x=$(o=>o.budget),[d,r]=m.useState(10),i="node";return m.useEffect(()=>{(async()=>{try{const p=await q(i);r(p.data.price)}catch(p){console.error("cannot fetch",p)}})()},[i]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(fe,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(he,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[d," sats"]})]}),e.jsxs(ue,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[W(x)," sats"]})]})]}),e.jsx(t,{children:e.jsx(S,{color:"secondary","data-testid":"check-icon",disabled:l||!!a,onClick:s,size:"large",startIcon:l?e.jsx(M,{size:24}):e.jsx(ce,{}),type:"submit",variant:"contained",children:"Approve"})}),a?e.jsxs(ge,{role:"tooltip",children:[e.jsxs(ye,{children:[e.jsx(ae,{fontSize:13}),e.jsx("span",{children:a})]}),e.jsx("div",{className:"tooltip",children:a})]}):null]})},he=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${g.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${g.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${g.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,ue=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${g.secondaryText4};
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
`,fe=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ye=u(t)`
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
`,ge=u(t)`
  display: flex;
  align-items: center;
  color: ${g.primaryRed};
  position: relative;
  margin-top: 20px;

  .tooltip {
    position: absolute;
    background-color: ${g.black};
    opacity: 0.8;
    border-radius: 4px;
    color: ${g.white};
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
`,je=({type:s,onclose:l})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(F,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(F,{children:["Type: ",s]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(S,{color:"secondary",onClick:l,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(S,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),F=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=({skipToStep:s,nodeType:l})=>{const[a,x]=m.useState(!1),[d,r]=m.useState(),{watch:i}=se();return m.useEffect(()=>{(async()=>{x(!0);const p=await H(l.toLowerCase()),f=le(p);r(f),x(!1)})()},[l,i]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(be,{children:"Set Attributes"})})}),e.jsx(Se,{children:a?e.jsx(t,{style:{margin:"auto"},children:e.jsx(M,{color:g.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:d==null?void 0:d.map(({key:o,required:p})=>e.jsx(e.Fragment,{children:e.jsxs(Te,{children:[e.jsx(b,{children:o.replace("_"," ")}),e.jsx(E,{id:"item-name",name:o,placeholder:p?"Required":"Optional",rules:{...p?z:{}}})]})}))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(S,{color:"secondary",onClick:()=>s("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(S,{color:"secondary",onClick:()=>s("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},be=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=u(t)`
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
  }
`,Te=u(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${g.GRAY7};
    -webkit-text-fill-color: ${g.GRAY7};
  }
`,Ce=({type:s,skipToStep:l,name:a,sourceLink:x})=>{const d=s==="Image"?a&&x:a;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ne,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(b,{children:[s," name"]})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...z}})}),s==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(b,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...z}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(S,{color:"secondary",onClick:()=>l("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(S,{color:"secondary",disabled:!d,onClick:()=>l("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Ne=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ke=s=>s.charAt(0).toUpperCase()+s.slice(1),ve=({skipToStep:s,allowNextStep:l,onSelectType:a,selectedType:x})=>{const[d]=K(h=>[h.customSchemaFlag]),[r,i]=m.useState(null),[o,p]=m.useState(!1);m.useEffect(()=>{(async()=>{if(d){p(!0);try{const n=await Q(),j=["about","schema"],y=n.schemas.filter(T=>!j.includes(T.type)).map(T=>({label:ke(T.type),value:T.type,type:T.type,action:()=>s("setAttribues")}));i(y)}catch(n){console.warn(n)}finally{p(!1)}}else i([...pe,xe])})()},[x,d,s]);const f=h=>{a((h==null?void 0:h.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Be,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(de,{autoFocus:!0,isLoading:o,onSelect:f,options:r})}),e.jsx(t,{children:e.jsx(S,{color:"secondary",disabled:!l,onClick:()=>s("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Be=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ze=async(s,l,a)=>{var x,d;if(s.nodeType==="Create custom type"){s.type;try{const r=await I.post("/schema",JSON.stringify(s),{});if(r.error){const{message:i}=r.error;throw new Error(i)}a(s,(x=r==null?void 0:r.data)==null?void 0:x.ref_id),close()}catch(r){let i=N;if(r.status===400){const o=await r.json();i=o.errorCode||(o==null?void 0:o.status)||N}else r instanceof Error&&(i=r.message);throw new Error(i)}}else{const r="node",{nodeType:i,typeName:o,...p}=s,f={node_data:{...p},node_type:i,name:o};s.nodeType==="Image"&&(f.node_data={...s.node_data,source_link:s.sourceLink});let h="";await Z(async()=>{const n=await ee.enable();f.pubkey=n==null?void 0:n.pubkey,h=await te()});try{const n=await I.post(`/${r}`,JSON.stringify(f),{Authorization:h});if(n.error){const{message:j}=n.error;throw new Error(j)}a(s,(d=n==null?void 0:n.data)==null?void 0:d.ref_id),close()}catch(n){let j=N;if(n.status===400)try{const y=await n.json();j=y.message||y.errorCode||(y==null?void 0:y.status)||N}catch{j=N}else n instanceof Error&&(j=n.message);throw new Error(j)}}},We=()=>{const[s,l]=m.useState("sourceType"),{close:a,visible:x}=_("addItem"),{open:d}=_("addType"),[r]=$(c=>[c.setBudget]),i=oe({mode:"onChange"}),{watch:o,setValue:p,reset:f}=i,[h,n]=m.useState(!1),[j,y]=m.useState(""),[T,O]=X(c=>[c.addNewNode,c.setSelectedNode]);m.useEffect(()=>()=>{l("sourceType"),f()},[x,f]);const v=o("nodeType"),P=o("typeName"),D=o("sourceLink"),R=o("type");o("title");const L=()=>{a()},B=c=>{l(c)},U=(c,w)=>{const k=w||`new-id-${Math.random()}`,C=c.nodeType.toLocaleLowerCase(),A={name:c.typeName,type:C,label:c.typeName,node_type:C,id:k,ref_id:k,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...c.sourceLink?{source_link:c.sourceLink}:{}};T(A),O(A)},G=i.handleSubmit(async c=>{n(!0);try{await ze(c,r,U),ie("Item Added"),L()}catch(w){let k=N;if((w==null?void 0:w.status)===400){const C=await w.json();k=C.errorCode||(C==null?void 0:C.status)||N}else w instanceof Error&&(k=w.message);y(String(k))}finally{n(!1)}}),Y=c=>{c==="Create custom type"?d():p("nodeType",c)},J={sourceType:e.jsx(ve,{allowNextStep:!!v,onSelectType:Y,selectedType:v,skipToStep:B}),source:e.jsx(Ce,{name:P,skipToStep:B,sourceLink:D||"",type:v}),setBudget:e.jsx(me,{loading:h,onClick:()=>null}),createConfirmation:e.jsx(je,{onclose:L,type:R}),setAttribues:e.jsx(we,{nodeType:v,skipToStep:B})},V="small";return e.jsx(re,{id:"addItem",kind:V,onClose:a,preventOutsideClose:!0,children:e.jsx(ne,{...i,children:e.jsx("form",{id:"add-node-form",onSubmit:G,children:J[s]})})})};export{We as AddItemModal};
