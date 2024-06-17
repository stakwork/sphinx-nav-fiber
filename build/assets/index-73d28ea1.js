import{f as y,h as w,F as t,T as N,y as G,r as f,j as e,aW as Q,aX as Z,D as F,a_ as ee,J as te,a$ as se,N as ne,B as P,i as oe,aY as I,b0 as re,o as ie,O as ae}from"./index-61c60aaf.js";import{B as T,C as V,i as ce,c as le,F as de}from"./react-toastify.esm-b9ea12aa.js";import{B as pe}from"./index-7f8d72b7.js";import{S as me}from"./index-e0dbdc55.js";import{i as xe}from"./index.esm-d055e8bc.js";import{C as ue}from"./CheckIcon-ce5703c3.js";import{n as z,a as he,i as fe}from"./index-45f20263.js";import{p as ye}from"./index-d1219299.js";import{T as L}from"./index-b7f4621d.js";import{A as ge}from"./index-f57eac8b.js";import{c as je}from"./index-64f1c910.js";import"./generateCategoricalChart-86dda3e2.js";import"./Popover-11996145.js";import"./useSlotProps-87c77688.js";import"./InfoIcon-edbb05e4.js";import"./NoFilterResultIcon-63350546.js";import"./index-2fbb380f.js";import"./index-42555945.js";import"./PlusIcon-b2d218c8.js";import"./index-4fad6eb0.js";import"./Popper-6d40d6ef.js";const we=({onClick:o,loading:i,error:a})=>{const m=G(d=>d.budget),[l,r]=f.useState(10),p="node";return f.useEffect(()=>{(async()=>{try{const h=await Z(p);r(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[p]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ne,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(be,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[l," sats"]})]}),e.jsxs(Se,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Q(m)," sats"]})]})]}),e.jsx(t,{children:e.jsx(T,{color:"secondary","data-testid":"check-icon",disabled:i||!!a,onClick:o,size:"large",startIcon:i?e.jsx(R,{children:e.jsx(V,{color:w.lightGray,size:12})}):e.jsxs(R,{children:[" ",e.jsx(ue,{})]}),type:"submit",variant:"contained",children:"Approve"})}),a?e.jsx(Ce,{children:e.jsxs(Te,{children:[e.jsx(xe,{className:"errorIcon"}),e.jsx("span",{children:a})]})}):null]})},be=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Se=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
  color: ${w.primaryRed};
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
`,ve=({handleSelectType:o,skipToStep:i,nodeType:a})=>{const[m,l]=f.useState(!1),[r,p]=f.useState(),{watch:d,setValue:h,formState:{isValid:j}}=ce();f.useEffect(()=>{(async()=>{l(!0);const g=await ee(a),_=ye(g).filter(A=>A.key!=="node_key");p(_),l(!1)})()},[a,d]);const n=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),x=r?[...r].sort((s,g)=>s.required&&!g.required?-1:!s.required&&g.required?1:0):[],u=()=>{o(""),i("sourceType")},C=()=>{r==null||r.forEach(({key:s,required:g})=>{if(g){const b=d(s);typeof b=="string"&&h(s,b.trim(),{shouldValidate:!0})}}),j&&!m&&(r!=null&&r.every(s=>!s.required||d(s.key)))&&i("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Be,{children:"Set Attributes"})})}),e.jsx(ze,{children:m?e.jsx(t,{style:{margin:"auto"},children:e.jsx(V,{color:w.lightGray})}):e.jsx(t,{className:"input__wrapper",children:x==null?void 0:x.map(({key:s,required:g})=>e.jsxs(Ie,{children:[e.jsx(N,{children:n(s)}),e.jsx(L,{id:"item-name",maxLength:50,name:s,placeholder:g?"Required":"Optional",rules:{...g?{...F,pattern:{message:"No leading whitespace allowed",value:z}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:u,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!j||m||(r==null?void 0:r.some(s=>s.required&&!d(s.key))),onClick:C,size:"large",variant:"contained",children:"Next"})})]})]})},Be=y(N)`
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
    color: ${w.GRAY7};
    -webkit-text-fill-color: ${w.GRAY7};
  }
`,_e=({type:o,skipToStep:i,name:a,sourceLink:m})=>{const l=p=>z.test(p??""),r=o==="Image"?l(a)&&l(m):l(a);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ae,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(N,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...F,pattern:{message:"No leading whitespace allowed",value:z}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(N,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...F,pattern:{message:"Please avoid special characters and spaces",value:z}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>i("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!r,onClick:()=>i("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Ae=y(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ee=({skipToStep:o,allowNextStep:i,onSelectType:a,selectedType:m})=>{const[l]=te(n=>[n.customSchemaFeatureFlag]),[r,p]=f.useState(null),[d,h]=f.useState(!1);f.useEffect(()=>{(async()=>{if(l){h(!0);try{const x=await se(),u=["about","schema"],C=x.schemas.filter(s=>s.ref_id&&!u.includes(s.type)&&!s.is_deleted).map(s=>({label:je(s.type),value:s.type,action:()=>o("setAttribues")}));p(C)}catch(x){console.warn(x)}finally{h(!1)}}else p([...he,fe])})()},[m,l,o]);const j=n=>{a((n==null?void 0:n.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ge,{autoFocus:!0,isLoading:d,onSelect:j,options:r})}),e.jsx(t,{children:e.jsx(T,{color:"secondary",disabled:!i,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Fe=y(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Le=async(o,i,a="")=>await ne.post(`/${o}`,JSON.stringify(i),{Authorization:a}),$e=async(o,i,a,m,l)=>{const r=o==="Create custom type"?"schema":"node",p={node_data:{...i,...o==="Image"&&{source_link:a}},node_type:o,name:m};return Le(r,p,l)},De=async(o,i,a)=>{var j;const m=Object.entries(o).reduce((n,[x,u])=>(u!=null&&u!==""&&(n[x]=u),n),{}),{nodeType:l,typeName:r,sourceLink:p,...d}=m;let h="";l!=="Create custom type"&&await re(async()=>{const n=await ie.enable();d.pubkey=n==null?void 0:n.pubkey,h=await ae()});try{const n=await $e(l,d,p,r,h);a(o,(j=n==null?void 0:n.data)==null?void 0:j.ref_id)}catch(n){let x=I;if(n.status===400){const u=await n.json();x=u.message||u.errorCode||(u==null?void 0:u.status)||I}else n instanceof Error&&(x=n.message);throw new Error(x)}},rt=()=>{const[o,i]=f.useState("sourceType"),{close:a,visible:m}=P("addItem"),{open:l}=P("addType"),[r]=G(c=>[c.setBudget]),p=le({mode:"onChange"}),{watch:d,setValue:h,reset:j}=p,[n,x]=f.useState(!1),[u,C]=f.useState(""),[s,g]=oe(c=>[c.addNewNode,c.setSelectedNode]);f.useEffect(()=>()=>{i("sourceType"),j()},[m,j]);const b=d("nodeType"),_=d("typeName"),A=d("sourceLink"),W=d("type");d("title");const $=()=>{a()},E=c=>{C(""),i(c)},Y=(c,S)=>{const v=S||`new-id-${Math.random()}`,k=c.nodeType.toLocaleLowerCase(),K=Object.entries(c).reduce((O,[X,B])=>(B!=null&&B!==""&&(O[X]=B),O),{}),M={name:c.typeName??c.name,type:k,label:c.typeName??c.name,node_type:k,id:v,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...c.source_link?{source_link:c.source_link}:{},properties:{...K}};s(M),g(M)},J=p.handleSubmit(async c=>{C(""),x(!0);try{await De(c,r,Y),me("Item Added"),$()}catch(S){let v=I;if((S==null?void 0:S.status)===400){const k=await S.json();v=k.errorCode||(k==null?void 0:k.status)||I}else S instanceof Error&&(v=S.message);C(String(v))}finally{x(!1)}}),D=c=>{c==="Create custom type"?l():h("nodeType",c)},U={sourceType:e.jsx(Ee,{allowNextStep:!!b,onSelectType:D,selectedType:b,skipToStep:E}),source:e.jsx(_e,{name:_,skipToStep:E,sourceLink:A||"",type:b}),setBudget:e.jsx(we,{error:u,loading:n,onClick:()=>null}),createConfirmation:e.jsx(ke,{onclose:$,type:W}),setAttribues:e.jsx(ve,{handleSelectType:D,nodeType:b,skipToStep:E})},H="small";return e.jsx(pe,{id:"addItem",kind:H,onClose:a,preventOutsideClose:!0,children:e.jsx(de,{...p,children:e.jsx("form",{id:"add-node-form",onSubmit:J,children:U[o]})})})};export{rt as AddItemModal};
