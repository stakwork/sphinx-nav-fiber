import{f as y,h as b,F as t,T as N,y as V,r as f,j as e,aW as Q,aX as Z,D as L,a_ as ee,J as te,a$ as se,N as ne,B as P,i as oe,aY as I,b0 as re,o as ie,O as ae}from"./index-382466ac.js";import{B as T,C as Y,i as ce,c as le,F as de}from"./react-toastify.esm-544b3ad9.js";import{B as pe}from"./index-13ebb6fc.js";import{S as me}from"./index-ea1a1e5d.js";import{i as xe}from"./index.esm-effff289.js";import{C as ue}from"./CheckIcon-72fa76b6.js";import{n as z,a as he,i as fe}from"./index-2c970141.js";import{p as ye}from"./index-7405dfa3.js";import{T as F}from"./index-43f46160.js";import{A as ge}from"./index-4a0f3f68.js";import{c as je}from"./index-64f1c910.js";import"./generateCategoricalChart-51d7969d.js";import"./Popover-d886eaf8.js";import"./useSlotProps-f9180805.js";import"./InfoIcon-c480a4d1.js";import"./NoFilterResultIcon-de060e9d.js";import"./index-7123bf58.js";import"./index-8843bf0c.js";import"./PlusIcon-cb42ca64.js";import"./index-14984475.js";import"./Popper-e0faa8b7.js";const we=({onClick:o,loading:i,error:a})=>{const m=V(d=>d.budget),[l,r]=f.useState(10),p="node";return f.useEffect(()=>{(async()=>{try{const h=await Z(p);r(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[p]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ne,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Se,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[l," sats"]})]}),e.jsxs(be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Q(m)," sats"]})]})]}),e.jsx(t,{children:e.jsx(T,{color:"secondary","data-testid":"check-icon",disabled:i||!!a,onClick:o,size:"large",startIcon:i?e.jsx(R,{children:e.jsx(Y,{color:"gray",size:12})}):e.jsxs(R,{children:[" ",e.jsx(ue,{})]}),type:"submit",variant:"contained",children:"Approve"})}),a?e.jsx(Ce,{children:e.jsxs(Te,{children:[e.jsx(xe,{className:"errorIcon"}),e.jsx("span",{children:a})]})}):null]})},Se=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,be=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ne=y(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Te=y(t)`
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
`,Ce=y(t)`
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
`,ke=({type:o,onclose:i})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(q,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(q,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:i,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),q=y(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Be=({handleSelectType:o,skipToStep:i,nodeType:a})=>{const[m,l]=f.useState(!1),[r,p]=f.useState(),{watch:d,setValue:h,formState:{isValid:j}}=ce();f.useEffect(()=>{(async()=>{l(!0);const g=await ee(a),E=ye(g).filter(_=>_.key!=="node_key");p(E),l(!1)})()},[a,d]);const n=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),x=r?[...r].sort((s,g)=>s.required&&!g.required?-1:!s.required&&g.required?1:0):[],u=()=>{o(""),i("sourceType")},C=()=>{r==null||r.forEach(({key:s,required:g})=>{if(g){const w=d(s);typeof w=="string"&&h(s,w.trim(),{shouldValidate:!0})}}),j&&!m&&(r!=null&&r.every(s=>!s.required||d(s.key)))&&i("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ve,{children:"Set Attributes"})})}),e.jsx(ze,{children:m?e.jsx(t,{style:{margin:"auto"},children:e.jsx(Y,{color:b.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:x==null?void 0:x.map(({key:s,required:g})=>e.jsxs(Ie,{children:[e.jsx(N,{children:n(s)}),e.jsx(F,{id:"item-name",maxLength:50,name:s,placeholder:g?"Required":"Optional",rules:{...g?{...L,pattern:{message:"No leading whitespace allowed",value:z}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:u,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!j||m||(r==null?void 0:r.some(s=>s.required&&!d(s.key))),onClick:C,size:"large",variant:"contained",children:"Next"})})]})]})},ve=y(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ze=y(t)`
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
`,Ie=y(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${b.GRAY7};
    -webkit-text-fill-color: ${b.GRAY7};
  }
`,Ee=({type:o,skipToStep:i,name:a,sourceLink:m})=>{const l=p=>z.test(p??""),r=o==="Image"?l(a)&&l(m):l(a);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(_e,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(N,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(F,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...L,pattern:{message:"No leading whitespace allowed",value:z}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(N,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(F,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...L,pattern:{message:"Please avoid special characters and spaces",value:z}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>i("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!r,onClick:()=>i("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},_e=y(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ae=({skipToStep:o,allowNextStep:i,onSelectType:a,selectedType:m})=>{const[l]=te(n=>[n.customSchemaFeatureFlag]),[r,p]=f.useState(null),[d,h]=f.useState(!1);f.useEffect(()=>{(async()=>{if(l){h(!0);try{const x=await se(),u=["about","schema"],C=x.schemas.filter(s=>s.ref_id&&!u.includes(s.type)&&!s.is_deleted).map(s=>({label:je(s.type),value:s.type,action:()=>o("setAttribues")}));p(C)}catch(x){console.warn(x)}finally{h(!1)}}else p([...he,fe])})()},[m,l,o]);const j=n=>{a((n==null?void 0:n.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Le,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ge,{autoFocus:!0,isLoading:d,onSelect:j,options:r})}),e.jsx(t,{children:e.jsx(T,{color:"secondary",disabled:!i,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Le=y(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Fe=async(o,i,a="")=>await ne.post(`/${o}`,JSON.stringify(i),{Authorization:a}),De=async(o,i,a,m,l)=>{const r=o==="Create custom type"?"schema":"node",p={node_data:{...i,...o==="Image"&&{source_link:a}},node_type:o,name:m};return Fe(r,p,l)},Oe=async(o,i,a)=>{var j;const m=Object.entries(o).reduce((n,[x,u])=>(u!=null&&u!==""&&(n[x]=u),n),{}),{nodeType:l,typeName:r,sourceLink:p,...d}=m;let h="";l!=="Create custom type"&&await re(async()=>{const n=await ie.enable();d.pubkey=n==null?void 0:n.pubkey,h=await ae()});try{const n=await De(l,d,p,r,h);a(o,(j=n==null?void 0:n.data)==null?void 0:j.ref_id)}catch(n){let x=I;if(n.status===400){const u=await n.json();x=u.message||u.errorCode||(u==null?void 0:u.status)||I}else n instanceof Error&&(x=n.message);throw new Error(x)}},rt=()=>{const[o,i]=f.useState("sourceType"),{close:a,visible:m}=P("addItem"),{open:l}=P("addType"),[r]=V(c=>[c.setBudget]),p=le({mode:"onChange"}),{watch:d,setValue:h,reset:j}=p,[n,x]=f.useState(!1),[u,C]=f.useState(""),[s,g]=oe(c=>[c.addNewNode,c.setSelectedNode]);f.useEffect(()=>()=>{i("sourceType"),j()},[m,j]);const w=d("nodeType"),E=d("typeName"),_=d("sourceLink"),G=d("type");d("title");const D=()=>{a()},A=c=>{C(""),i(c)},U=(c,S)=>{const B=S||`new-id-${Math.random()}`,k=c.nodeType.toLocaleLowerCase(),K=Object.entries(c).reduce((M,[X,v])=>(v!=null&&v!==""&&(M[X]=v),M),{}),$={name:c.typeName??c.name,type:k,label:c.typeName??c.name,node_type:k,id:B,ref_id:B,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...c.source_link?{source_link:c.source_link}:{},properties:{...K}};s($),g($)},W=p.handleSubmit(async c=>{C(""),x(!0);try{await Oe(c,r,U),me("Item Added"),D()}catch(S){let B=I;if((S==null?void 0:S.status)===400){const k=await S.json();B=k.errorCode||(k==null?void 0:k.status)||I}else S instanceof Error&&(B=S.message);C(String(B))}finally{x(!1)}}),O=c=>{c==="Create custom type"?l():h("nodeType",c)},J={sourceType:e.jsx(Ae,{allowNextStep:!!w,onSelectType:O,selectedType:w,skipToStep:A}),source:e.jsx(Ee,{name:E,skipToStep:A,sourceLink:_||"",type:w}),setBudget:e.jsx(we,{error:u,loading:n,onClick:()=>null}),createConfirmation:e.jsx(ke,{onclose:D,type:G}),setAttribues:e.jsx(Be,{handleSelectType:O,nodeType:w,skipToStep:A})},H="small";return e.jsx(pe,{id:"addItem",kind:H,onClose:a,preventOutsideClose:!0,children:e.jsx(de,{...p,children:e.jsx("form",{id:"add-node-form",onSubmit:W,children:J[o]})})})};export{rt as AddItemModal};
