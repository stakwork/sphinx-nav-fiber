import{af as Z,t as g,v as b,F as t,I as T,H as V,r as y,j as e,bj as ee,bk as te,ba as F,bp as se,U as ne,bq as oe,Y as D,z as re,w as ie,b9 as I,ah as ae,ag as ce,bn as le}from"./index-9b695812.js";import{B as C,q as de,f as pe,g as me,S as xe,F as ue}from"./index-b5d3fb4d.js";import{B as he}from"./index-c78982d3.js";import{C as fe}from"./CheckIcon-da675647.js";import{C as U}from"./ClipLoader-3a1394ec.js";import{n as B,O as ye,i as ge}from"./constants-a6b58f4d.js";import{p as q}from"./index-44e303ef.js";import{T as L}from"./index-a43cca75.js";import{A as je}from"./index-0f33a255.js";import{c as we}from"./index-64f1c910.js";import"./three.module-2ce81f73.js";import"./Stack-31918e8c.js";import"./createSvgIcon-f26364ea.js";import"./TextareaAutosize-5d69ee3b.js";const be=async(o,a,c="")=>await Z.post(`/${o}`,JSON.stringify(a),{Authorization:c}),Se=async(o,a,c,x,d,r)=>{const m=o==="Create custom type"?"schema":"node",l={node_data:{...a,...o==="Image"&&{source_link:c}},node_type:o,name:x,pubkey:r};return be(m,l,d)},Ne=({onClick:o,loading:a,error:c})=>{const x=V(l=>l.budget),[d,r]=y.useState(10),m="node";return y.useEffect(()=>{(async()=>{try{const h=await te(m);r(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[m]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[d," sats"]})]}),e.jsxs(Ce,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ee(x)," sats"]})]})]}),e.jsx(t,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:a||!!c,onClick:o,size:"large",startIcon:a?e.jsx(R,{children:e.jsx(U,{color:b.lightGray,size:12})}):e.jsxs(R,{children:[" ",e.jsx(fe,{})]}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsx(ze,{children:e.jsxs(ve,{children:[e.jsx(de,{className:"errorIcon"}),e.jsx("span",{children:c})]})}):null]})},Te=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,R=g.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Be=({type:o,onclose:a})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(G,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(G,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:a,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),G=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ie=({handleSelectType:o,skipToStep:a,nodeType:c})=>{const[x,d]=y.useState(!1),[r,m]=y.useState(),{watch:l,setValue:h,formState:{isValid:w}}=pe();y.useEffect(()=>{(async()=>{d(!0);const u=await se(c),_=(u.attributes&&typeof u.attributes=="object"?q(u.attributes):q(u)).filter(A=>A.key!=="node_key");m(_),d(!1)})()},[c,l]);const f=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),n=r?[...r].sort((s,u)=>s.required&&!u.required?-1:!s.required&&u.required?1:0):[],j=()=>{o(""),a("sourceType")},p=()=>{r==null||r.forEach(({key:s,required:u})=>{if(u){const S=l(s);typeof S=="string"&&h(s,S.trim(),{shouldValidate:!0})}}),w&&!x&&(r!=null&&r.every(s=>!s.required||l(s.key)))&&a("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(_e,{children:"Set Attributes"})})}),e.jsx(Ae,{children:x?e.jsx(t,{style:{margin:"auto"},children:e.jsx(U,{color:b.lightGray})}):e.jsx(t,{className:"input__wrapper",children:n==null?void 0:n.map(({key:s,required:u})=>e.jsxs(Ee,{children:[e.jsx(T,{children:f(s)}),e.jsx(L,{id:"item-name",maxLength:50,name:s,placeholder:u?"Required":"Optional",rules:{...u?{...F,pattern:{message:"No leading whitespace allowed",value:B}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:j,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!w||x||(r==null?void 0:r.some(s=>s.required&&!l(s.key))),onClick:p,size:"large",variant:"contained",children:"Next"})})]})]})},_e=g(T)`
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
`,Fe=({type:o,skipToStep:a,name:c,sourceLink:x})=>{const d=m=>B.test(m??""),r=o==="Image"?d(c)&&d(x):d(c);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Le,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(T,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...F,pattern:{message:"No leading whitespace allowed",value:B}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(T,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...F,pattern:{message:"Please avoid special characters and spaces",value:B}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:()=>a("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!r,onClick:()=>a("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Le=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Me=({skipToStep:o,allowNextStep:a,onSelectType:c,selectedType:x})=>{const[d]=ne(f=>[f.customSchemaFeatureFlag]),[r,m]=y.useState(null),[l,h]=y.useState(!1);y.useEffect(()=>{(async()=>{if(d){h(!0);try{const n=await oe(),j=["about","schema"],p=n.schemas.filter(s=>s.ref_id&&!j.includes(s.type)&&!s.is_deleted).map(s=>({label:we(s.type),value:s.type,action:()=>o("setAttribues")}));m(p)}catch(n){console.warn(n)}finally{h(!1)}}else m([...ye,ge])})()},[x,d,o]);const w=f=>{c((f==null?void 0:f.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Oe,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(je,{autoFocus:!0,isLoading:l,onSelect:w,options:r})}),e.jsx(t,{children:e.jsx(C,{color:"secondary",disabled:!a,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Oe=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Pe=async(o,a,c)=>{var f;const x=Object.entries(o).reduce((n,[j,p])=>(p!=null&&p!==""&&(n[j]=p),n),{}),{nodeType:d,typeName:r,sourceLink:m,...l}=x;let h="",w="";d!=="Create custom type"&&await ae(async()=>{const n=await ce.enable();w=n==null?void 0:n.pubkey,h=await le()});try{const n=await Se(d,l,m,r,h,w);c(o,(f=n==null?void 0:n.data)==null?void 0:f.ref_id)}catch(n){let j=I;if(n.status===400){const p=await n.json();j=p.message||p.errorCode||(p==null?void 0:p.status)||I}else n instanceof Error&&(j=n.message);throw new Error(j)}},Ze=()=>{const[o,a]=y.useState("sourceType"),{close:c,visible:x}=D("addItem"),{open:d}=D("addType"),{setBudget:r}=V(i=>i),m=me({mode:"onChange"}),{watch:l,setValue:h,reset:w}=m,[f,n]=y.useState(!1),[j,p]=y.useState(""),{addNewNode:s}=re(i=>i),[u]=ie(i=>[i.setSelectedNode]);y.useEffect(()=>()=>{a("sourceType"),w()},[x,w]);const S=l("nodeType"),_=l("typeName"),A=l("sourceLink"),Y=l("type");l("title");const M=()=>{c()},E=i=>{p(""),a(i)},W=(i,N)=>{const v=N||`new-id-${Math.random()}`,k=i.nodeType.toLocaleLowerCase(),Q=Object.entries(i).reduce(($,[X,z])=>(z!=null&&z!==""&&($[X]=z),$),{}),P={name:i.typeName??i.name,type:k,label:i.typeName??i.name,node_type:k,id:v,edge_count:0,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...i.source_link?{source_link:i.source_link}:{},properties:{...Q}};s({nodes:[P],links:[]}),u(P)},H=m.handleSubmit(async i=>{p(""),n(!0);try{await Pe(i,r,W),xe("Item Added"),M()}catch(N){let v=I;if((N==null?void 0:N.status)===400){const k=await N.json();v=k.errorCode||(k==null?void 0:k.status)||I}else N instanceof Error&&(v=N.message);p(String(v))}finally{n(!1)}}),O=i=>{i==="Create custom type"?d():h("nodeType",i)},J={sourceType:e.jsx(Me,{allowNextStep:!!S,onSelectType:O,selectedType:S,skipToStep:E}),source:e.jsx(Fe,{name:_,skipToStep:E,sourceLink:A||"",type:S}),setBudget:e.jsx(Ne,{error:j,loading:f,onClick:()=>null}),createConfirmation:e.jsx(Be,{onclose:M,type:Y}),setAttribues:e.jsx(Ie,{handleSelectType:O,nodeType:S,skipToStep:E})},K="small";return e.jsx(he,{id:"addItem",kind:K,onClose:c,preventOutsideClose:!0,children:e.jsx(ue,{...m,children:e.jsx("form",{id:"add-node-form",onSubmit:H,children:J[o]})})})};export{Ze as AddItemModal};