import{ak as Z,s as g,g as b,F as t,T,a as V,r as y,j as e,B as C,b4 as ee,be as te,ay as se,b2 as L,b3 as F,bj as B,bk as ne,k as oe,bl as re,bm as ie,bn as ae,D as O,l as ce,c as le,b0 as de,b1 as I,b5 as pe,n as me,as as xe,ar as ue,bh as he}from"./index-fd66fa62.js";import{g as fe}from"./index-80bf7276.js";import{C as ye}from"./CheckIcon-f0c01bc0.js";import{f as ge}from"./index-717b1eb9.js";import{C as U}from"./ClipLoader-a27b3188.js";import{p as R}from"./index-b4a141ad.js";import{A as je}from"./index-e8a58c38.js";import{c as we}from"./index-64f1c910.js";import"./three.module-9722a9fc.js";import"./index-9b9c3e24.js";import"./SourcesTableIcon-c3a66ab9.js";import"./DeleteNodeIcon-3f57b907.js";import"./SoundIcon-5588cca4.js";import"./SucessFeedBackIcon-ff147d93.js";import"./Stack-5fb2048c.js";import"./clsx-dbb40d39.js";import"./createSvgIcon-dbb9e732.js";import"./TextareaAutosize-1944770c.js";const be=async(o,i,a="")=>await Z.post(`/${o}`,JSON.stringify(i),{Authorization:a}),Se=async(o,i,a,x,d,r)=>{const m=o==="Create custom type"?"schema":"node",c={node_data:{...i,...o==="Image"&&{source_link:a}},node_type:o,name:x,pubkey:r};return be(m,c,d)},Ne=({onClick:o,loading:i,error:a})=>{const x=V(c=>c.budget),[d,r]=y.useState(10),m="node";return y.useEffect(()=>{(async()=>{try{const h=await te(m);r(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[m]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[d," sats"]})]}),e.jsxs(Ce,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ge(x)," sats"]})]})]}),e.jsx(t,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:i||!!a,onClick:o,size:"large",startIcon:i?e.jsx(q,{children:e.jsx(U,{color:b.lightGray,size:12})}):e.jsxs(q,{children:[" ",e.jsx(ye,{})]}),type:"submit",variant:"contained",children:"Approve"})}),a?e.jsx(ze,{children:e.jsxs(ve,{children:[e.jsx(ee,{className:"errorIcon"}),e.jsx("span",{children:a})]})}):null]})},Te=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ce=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ke=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ve=g(t)`
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
`,ze=g(t)`
  display: flex;
  align-items: center;
  color: ${b.primaryRed};
  position: relative;
  margin-top: 20px;
`,q=g.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Be=({type:o,onclose:i})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(G,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(G,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:i,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),G=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ie=({handleSelectType:o,skipToStep:i,nodeType:a})=>{const[x,d]=y.useState(!1),[r,m]=y.useState(),{watch:c,setValue:h,formState:{isValid:w}}=se();y.useEffect(()=>{(async()=>{d(!0);const u=await ne(a),_=(u.attributes&&typeof u.attributes=="object"?R(u.attributes):R(u)).filter(A=>A.key!=="node_key");m(_),d(!1)})()},[a,c]);const f=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),n=r?[...r].sort((s,u)=>s.required&&!u.required?-1:!s.required&&u.required?1:0):[],j=()=>{o(""),i("sourceType")},p=()=>{r==null||r.forEach(({key:s,required:u})=>{if(u){const S=c(s);typeof S=="string"&&h(s,S.trim(),{shouldValidate:!0})}}),w&&!x&&(r!=null&&r.every(s=>!s.required||c(s.key)))&&i("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(_e,{children:"Set Attributes"})})}),e.jsx(Ae,{children:x?e.jsx(t,{style:{margin:"auto"},children:e.jsx(U,{color:b.lightGray})}):e.jsx(t,{className:"input__wrapper",children:n==null?void 0:n.map(({key:s,required:u})=>e.jsxs(Ee,{children:[e.jsx(T,{children:f(s)}),e.jsx(L,{id:"item-name",maxLength:50,name:s,placeholder:u?"Required":"Optional",rules:{...u?{...F,pattern:{message:"No leading whitespace allowed",value:B}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:j,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!w||x||(r==null?void 0:r.some(s=>s.required&&!c(s.key))),onClick:p,size:"large",variant:"contained",children:"Next"})})]})]})},_e=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ae=g(t)`
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
`,Ee=g(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${b.GRAY7};
    -webkit-text-fill-color: ${b.GRAY7};
  }
`,Le=({type:o,skipToStep:i,name:a,sourceLink:x})=>{const d=m=>B.test(m??""),r=o==="Image"?d(a)&&d(x):d(a);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(T,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...F,pattern:{message:"No leading whitespace allowed",value:B}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(T,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...F,pattern:{message:"Please avoid special characters and spaces",value:B}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:()=>i("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!r,onClick:()=>i("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Fe=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,De=({skipToStep:o,allowNextStep:i,onSelectType:a,selectedType:x})=>{const[d]=oe(f=>[f.customSchemaFeatureFlag]),[r,m]=y.useState(null),[c,h]=y.useState(!1);y.useEffect(()=>{(async()=>{if(d){h(!0);try{const n=await re(),j=["about","schema"],p=n.schemas.filter(s=>s.ref_id&&!j.includes(s.type)&&!s.is_deleted).map(s=>({label:we(s.type),value:s.type}));m(p)}catch(n){console.warn(n)}finally{h(!1)}}else m([...ie,ae])})()},[x,d,o]);const w=f=>{a((f==null?void 0:f.label)||""),o("setAttribues")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Me,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(je,{autoFocus:!0,isLoading:c,onSelect:w,options:r})}),e.jsx(t,{children:e.jsx(C,{color:"secondary",disabled:!i,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Me=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Pe=async(o,i,a)=>{var f;const x=Object.entries(o).reduce((n,[j,p])=>(p!=null&&p!==""&&(n[j]=p),n),{}),{nodeType:d,typeName:r,sourceLink:m,...c}=x;let h="",w="";d!=="Create custom type"&&await xe(async()=>{const n=await ue.enable();w=n==null?void 0:n.pubkey,h=await he()});try{const n=await Se(d,c,m,r,h,w);a(o,(f=n==null?void 0:n.data)==null?void 0:f.ref_id)}catch(n){let j=I;if(n.status===400){const p=await n.json();j=p.message||p.errorCode||(p==null?void 0:p.status)||I}else n instanceof Error&&(j=n.message);throw new Error(j)}},nt=()=>{const[o,i]=y.useState("sourceType"),{close:a,visible:x}=O("addItem"),{open:d}=O("addType"),{setBudget:r}=V(l=>l),m=ce({mode:"onChange"}),{watch:c,setValue:h,reset:w}=m,[f,n]=y.useState(!1),[j,p]=y.useState(""),{addNewNode:s}=le(l=>l),{navigateToNode:u}=fe();y.useEffect(()=>()=>{i("sourceType"),w()},[x,w]);const S=c("nodeType"),_=c("typeName"),A=c("sourceLink"),W=c("type");c("title");const D=()=>{a()},E=l=>{p(""),i(l)},Y=(l,N)=>{const v=N||`new-id-${Math.random()}`,k=l.nodeType.toLocaleLowerCase(),Q=Object.entries(l).reduce(($,[X,z])=>(z!=null&&z!==""&&($[X]=z),$),{}),P={name:l.typeName??l.name,type:k,label:l.typeName??l.name,node_type:k,id:v,edge_count:0,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...l.source_link?{source_link:l.source_link}:{},properties:{...Q}};s({nodes:[P],edges:[]}),u(P.ref_id)},J=m.handleSubmit(async l=>{p(""),n(!0);try{await Pe(l,r,Y),de("Item Added"),D()}catch(N){let v=I;if((N==null?void 0:N.status)===400){const k=await N.json();v=k.errorCode||(k==null?void 0:k.status)||I}else N instanceof Error&&(v=N.message);p(String(v))}finally{n(!1)}}),M=l=>{l==="Create custom type"?d():h("nodeType",l)},H={sourceType:e.jsx(De,{allowNextStep:!!S,onSelectType:M,selectedType:S,skipToStep:E}),source:e.jsx(Le,{name:_,skipToStep:E,sourceLink:A||"",type:S}),setBudget:e.jsx(Ne,{error:j,loading:f,onClick:()=>null}),createConfirmation:e.jsx(Be,{onclose:D,type:W}),setAttribues:e.jsx(Ie,{handleSelectType:M,nodeType:S,skipToStep:E})},K="small";return e.jsx(pe,{id:"addItem",kind:K,onClose:a,preventOutsideClose:!0,children:e.jsx(me,{...m,children:e.jsx("form",{id:"add-node-form",onSubmit:J,children:H[o]})})})};export{nt as AddItemModal};
