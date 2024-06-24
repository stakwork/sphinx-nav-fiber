import{N as Q,f as y,h as b,F as t,T,y as G,r as f,j as e,aW as Z,aX as ee,D as F,a_ as te,J as se,a$ as ne,B as P,i as oe,aY as I,b0 as re,o as ie,O as ae}from"./index-70bf1cd1.js";import{B as C,C as V,i as ce,c as le,F as de}from"./react-toastify.esm-6b2a5193.js";import{B as pe}from"./index-a48065f6.js";import{S as me}from"./index-7d97fadd.js";import{i as xe}from"./index.esm-adce71f0.js";import{C as ue}from"./CheckIcon-3a00976b.js";import{n as z,a as he,i as fe}from"./index-9bb41333.js";import{p as ye}from"./index-f3691d5d.js";import{T as L}from"./index-77fe4f2e.js";import{A as ge}from"./index-858232fa.js";import{c as je}from"./index-64f1c910.js";import"./generateCategoricalChart-f809dc4e.js";import"./Popover-64b0b1f6.js";import"./useSlotProps-814ba413.js";import"./InfoIcon-4dc4c8e8.js";import"./NoFilterResultIcon-8956dd91.js";import"./index-92a046fe.js";import"./index-a9c517ca.js";import"./PlusIcon-d4d29142.js";import"./index-58188385.js";import"./Popper-af0cafe0.js";const we=async(o,i,a="")=>await Q.post(`/${o}`,JSON.stringify(i),{Authorization:a}),be=async(o,i,a,x,d,r)=>{const m=o==="Create custom type"?"schema":"node",l={node_data:{...i,...o==="Image"&&{source_link:a}},node_type:o,name:x,pubkey:r};return we(m,l,d)},Se=({onClick:o,loading:i,error:a})=>{const x=G(l=>l.budget),[d,r]=f.useState(10),m="node";return f.useEffect(()=>{(async()=>{try{const u=await ee(m);r(u.data.price)}catch(u){console.error("cannot fetch",u)}})()},[m]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Ne,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[d," sats"]})]}),e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Z(x)," sats"]})]})]}),e.jsx(t,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:i||!!a,onClick:o,size:"large",startIcon:i?e.jsx(R,{children:e.jsx(V,{color:b.lightGray,size:12})}):e.jsxs(R,{children:[" ",e.jsx(ue,{})]}),type:"submit",variant:"contained",children:"Approve"})}),a?e.jsx(ve,{children:e.jsxs(ke,{children:[e.jsx(xe,{className:"errorIcon"}),e.jsx("span",{children:a})]})}):null]})},Ne=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Te=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ce=y(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ke=y(t)`
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
`,ve=y(t)`
  display: flex;
  align-items: center;
  color: ${b.primaryRed};
  position: relative;
  margin-top: 20px;
`,R=y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Be=({type:o,onclose:i})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(q,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(q,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:i,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),q=y(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ze=({handleSelectType:o,skipToStep:i,nodeType:a})=>{const[x,d]=f.useState(!1),[r,m]=f.useState(),{watch:l,setValue:u,formState:{isValid:w}}=ce();f.useEffect(()=>{(async()=>{d(!0);const j=await te(a),_=ye(j).filter(A=>A.key!=="node_key");m(_),d(!1)})()},[a,l]);const h=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),n=r?[...r].sort((s,j)=>s.required&&!j.required?-1:!s.required&&j.required?1:0):[],g=()=>{o(""),i("sourceType")},p=()=>{r==null||r.forEach(({key:s,required:j})=>{if(j){const S=l(s);typeof S=="string"&&u(s,S.trim(),{shouldValidate:!0})}}),w&&!x&&(r!=null&&r.every(s=>!s.required||l(s.key)))&&i("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ie,{children:"Set Attributes"})})}),e.jsx(_e,{children:x?e.jsx(t,{style:{margin:"auto"},children:e.jsx(V,{color:b.lightGray})}):e.jsx(t,{className:"input__wrapper",children:n==null?void 0:n.map(({key:s,required:j})=>e.jsxs(Ae,{children:[e.jsx(T,{children:h(s)}),e.jsx(L,{id:"item-name",maxLength:50,name:s,placeholder:j?"Required":"Optional",rules:{...j?{...F,pattern:{message:"No leading whitespace allowed",value:z}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:g,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!w||x||(r==null?void 0:r.some(s=>s.required&&!l(s.key))),onClick:p,size:"large",variant:"contained",children:"Next"})})]})]})},Ie=y(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,_e=y(t)`
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
`,Ae=y(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${b.GRAY7};
    -webkit-text-fill-color: ${b.GRAY7};
  }
`,Ee=({type:o,skipToStep:i,name:a,sourceLink:x})=>{const d=m=>z.test(m??""),r=o==="Image"?d(a)&&d(x):d(a);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(T,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...F,pattern:{message:"No leading whitespace allowed",value:z}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(T,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...F,pattern:{message:"Please avoid special characters and spaces",value:z}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:()=>i("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!r,onClick:()=>i("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Fe=y(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Le=({skipToStep:o,allowNextStep:i,onSelectType:a,selectedType:x})=>{const[d]=se(h=>[h.customSchemaFeatureFlag]),[r,m]=f.useState(null),[l,u]=f.useState(!1);f.useEffect(()=>{(async()=>{if(d){u(!0);try{const n=await ne(),g=["about","schema"],p=n.schemas.filter(s=>s.ref_id&&!g.includes(s.type)&&!s.is_deleted).map(s=>({label:je(s.type),value:s.type,action:()=>o("setAttribues")}));m(p)}catch(n){console.warn(n)}finally{u(!1)}}else m([...he,fe])})()},[x,d,o]);const w=h=>{a((h==null?void 0:h.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx($e,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ge,{autoFocus:!0,isLoading:l,onSelect:w,options:r})}),e.jsx(t,{children:e.jsx(C,{color:"secondary",disabled:!i,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},$e=y(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,De=async(o,i,a)=>{var h;const x=Object.entries(o).reduce((n,[g,p])=>(p!=null&&p!==""&&(n[g]=p),n),{}),{nodeType:d,typeName:r,sourceLink:m,...l}=x;let u="",w="";d!=="Create custom type"&&await re(async()=>{const n=await ie.enable();w=n==null?void 0:n.pubkey,u=await ae()});try{const n=await be(d,l,m,r,u,w);a(o,(h=n==null?void 0:n.data)==null?void 0:h.ref_id)}catch(n){let g=I;if(n.status===400){const p=await n.json();g=p.message||p.errorCode||(p==null?void 0:p.status)||I}else n instanceof Error&&(g=n.message);throw new Error(g)}},rt=()=>{const[o,i]=f.useState("sourceType"),{close:a,visible:x}=P("addItem"),{open:d}=P("addType"),[r]=G(c=>[c.setBudget]),m=le({mode:"onChange"}),{watch:l,setValue:u,reset:w}=m,[h,n]=f.useState(!1),[g,p]=f.useState(""),[s,j]=oe(c=>[c.addNewNode,c.setSelectedNode]);f.useEffect(()=>()=>{i("sourceType"),w()},[x,w]);const S=l("nodeType"),_=l("typeName"),A=l("sourceLink"),W=l("type");l("title");const $=()=>{a()},E=c=>{p(""),i(c)},Y=(c,N)=>{const v=N||`new-id-${Math.random()}`,k=c.nodeType.toLocaleLowerCase(),K=Object.entries(c).reduce((O,[X,B])=>(B!=null&&B!==""&&(O[X]=B),O),{}),M={name:c.typeName??c.name,type:k,label:c.typeName??c.name,node_type:k,id:v,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...c.source_link?{source_link:c.source_link}:{},properties:{...K}};s(M),j(M)},J=m.handleSubmit(async c=>{p(""),n(!0);try{await De(c,r,Y),me("Item Added"),$()}catch(N){let v=I;if((N==null?void 0:N.status)===400){const k=await N.json();v=k.errorCode||(k==null?void 0:k.status)||I}else N instanceof Error&&(v=N.message);p(String(v))}finally{n(!1)}}),D=c=>{c==="Create custom type"?d():u("nodeType",c)},U={sourceType:e.jsx(Le,{allowNextStep:!!S,onSelectType:D,selectedType:S,skipToStep:E}),source:e.jsx(Ee,{name:_,skipToStep:E,sourceLink:A||"",type:S}),setBudget:e.jsx(Se,{error:g,loading:h,onClick:()=>null}),createConfirmation:e.jsx(Be,{onclose:$,type:W}),setAttribues:e.jsx(ze,{handleSelectType:D,nodeType:S,skipToStep:E})},H="small";return e.jsx(pe,{id:"addItem",kind:H,onClose:a,preventOutsideClose:!0,children:e.jsx(de,{...m,children:e.jsx("form",{id:"add-node-form",onSubmit:J,children:U[o]})})})};export{rt as AddItemModal};
