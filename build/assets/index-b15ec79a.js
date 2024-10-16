import{aa as Z,p as g,q as b,F as t,E as T,D as V,r as y,j as e,aU as ee,aV as te,aL as L,a_ as se,N as ne,a$ as oe,Q as P,x as re,t as ie,aK as I,ac as ae,ab as ce,aY as le}from"./index-15dc49aa.js";import{B as C,p as de,q as pe,F as me}from"./index-eb8682b1.js";import{B as xe}from"./index-aea34727.js";import{S as ue}from"./index-9a1fa2f0.js";import{e as he}from"./index.esm-c0334e89.js";import{C as fe}from"./CheckIcon-dd4e34cc.js";import{C as U}from"./ClipLoader-68b2e276.js";import{n as z,O as ye,i as ge}from"./constants-b2a2fa82.js";import{p as q}from"./index-e1867c29.js";import{T as F}from"./index-a0c012ba.js";import{A as je}from"./index-e0aaebd9.js";import{c as we}from"./index-64f1c910.js";import"./three.module-ebe9f2a4.js";import"./Stack-406c930f.js";import"./createSvgIcon-993d3f43.js";import"./TextareaAutosize-a72715e6.js";const be=async(o,a,c="")=>await Z.post(`/${o}`,JSON.stringify(a),{Authorization:c}),Se=async(o,a,c,x,d,r)=>{const m=o==="Create custom type"?"schema":"node",l={node_data:{...a,...o==="Image"&&{source_link:c}},node_type:o,name:x,pubkey:r};return be(m,l,d)},Ne=({onClick:o,loading:a,error:c})=>{const x=V(l=>l.budget),[d,r]=y.useState(10),m="node";return y.useEffect(()=>{(async()=>{try{const h=await te(m);r(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[m]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[d," sats"]})]}),e.jsxs(Ce,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ee(x)," sats"]})]})]}),e.jsx(t,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:a||!!c,onClick:o,size:"large",startIcon:a?e.jsx(R,{children:e.jsx(U,{color:b.lightGray,size:12})}):e.jsxs(R,{children:[" ",e.jsx(fe,{})]}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsx(Be,{children:e.jsxs(ve,{children:[e.jsx(he,{className:"errorIcon"}),e.jsx("span",{children:c})]})}):null]})},Te=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Be=g(t)`
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
`,ze=({type:o,onclose:a})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(G,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(G,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:a,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),G=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ie=({handleSelectType:o,skipToStep:a,nodeType:c})=>{const[x,d]=y.useState(!1),[r,m]=y.useState(),{watch:l,setValue:h,formState:{isValid:w}}=de();y.useEffect(()=>{(async()=>{d(!0);const u=await se(c),_=(u.attributes&&typeof u.attributes=="object"?q(u.attributes):q(u)).filter(E=>E.key!=="node_key");m(_),d(!1)})()},[c,l]);const f=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),n=r?[...r].sort((s,u)=>s.required&&!u.required?-1:!s.required&&u.required?1:0):[],j=()=>{o(""),a("sourceType")},p=()=>{r==null||r.forEach(({key:s,required:u})=>{if(u){const S=l(s);typeof S=="string"&&h(s,S.trim(),{shouldValidate:!0})}}),w&&!x&&(r!=null&&r.every(s=>!s.required||l(s.key)))&&a("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(_e,{children:"Set Attributes"})})}),e.jsx(Ee,{children:x?e.jsx(t,{style:{margin:"auto"},children:e.jsx(U,{color:b.lightGray})}):e.jsx(t,{className:"input__wrapper",children:n==null?void 0:n.map(({key:s,required:u})=>e.jsxs(Ae,{children:[e.jsx(T,{children:f(s)}),e.jsx(F,{id:"item-name",maxLength:50,name:s,placeholder:u?"Required":"Optional",rules:{...u?{...L,pattern:{message:"No leading whitespace allowed",value:z}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:j,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!w||x||(r==null?void 0:r.some(s=>s.required&&!l(s.key))),onClick:p,size:"large",variant:"contained",children:"Next"})})]})]})},_e=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ee=g(t)`
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
`,Ae=g(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${b.GRAY7};
    -webkit-text-fill-color: ${b.GRAY7};
  }
`,Le=({type:o,skipToStep:a,name:c,sourceLink:x})=>{const d=m=>z.test(m??""),r=o==="Image"?d(c)&&d(x):d(c);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(T,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(F,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...L,pattern:{message:"No leading whitespace allowed",value:z}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(T,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(F,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...L,pattern:{message:"Please avoid special characters and spaces",value:z}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:()=>a("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!r,onClick:()=>a("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Fe=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$e=({skipToStep:o,allowNextStep:a,onSelectType:c,selectedType:x})=>{const[d]=ne(f=>[f.customSchemaFeatureFlag]),[r,m]=y.useState(null),[l,h]=y.useState(!1);y.useEffect(()=>{(async()=>{if(d){h(!0);try{const n=await oe(),j=["about","schema"],p=n.schemas.filter(s=>s.ref_id&&!j.includes(s.type)&&!s.is_deleted).map(s=>({label:we(s.type),value:s.type,action:()=>o("setAttribues")}));m(p)}catch(n){console.warn(n)}finally{h(!1)}}else m([...ye,ge])})()},[x,d,o]);const w=f=>{c((f==null?void 0:f.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(De,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(je,{autoFocus:!0,isLoading:l,onSelect:w,options:r})}),e.jsx(t,{children:e.jsx(C,{color:"secondary",disabled:!a,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},De=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Me=async(o,a,c)=>{var f;const x=Object.entries(o).reduce((n,[j,p])=>(p!=null&&p!==""&&(n[j]=p),n),{}),{nodeType:d,typeName:r,sourceLink:m,...l}=x;let h="",w="";d!=="Create custom type"&&await ae(async()=>{const n=await ce.enable();w=n==null?void 0:n.pubkey,h=await le()});try{const n=await Se(d,l,m,r,h,w);c(o,(f=n==null?void 0:n.data)==null?void 0:f.ref_id)}catch(n){let j=I;if(n.status===400){const p=await n.json();j=p.message||p.errorCode||(p==null?void 0:p.status)||I}else n instanceof Error&&(j=n.message);throw new Error(j)}},tt=()=>{const[o,a]=y.useState("sourceType"),{close:c,visible:x}=P("addItem"),{open:d}=P("addType"),{setBudget:r}=V(i=>i),m=pe({mode:"onChange"}),{watch:l,setValue:h,reset:w}=m,[f,n]=y.useState(!1),[j,p]=y.useState(""),{addNewNode:s}=re(i=>i),[u]=ie(i=>[i.setSelectedNode]);y.useEffect(()=>()=>{a("sourceType"),w()},[x,w]);const S=l("nodeType"),_=l("typeName"),E=l("sourceLink"),Y=l("type");l("title");const $=()=>{c()},A=i=>{p(""),a(i)},W=(i,N)=>{const v=N||`new-id-${Math.random()}`,k=i.nodeType.toLocaleLowerCase(),Q=Object.entries(i).reduce((O,[X,B])=>(B!=null&&B!==""&&(O[X]=B),O),{}),M={name:i.typeName??i.name,type:k,label:i.typeName??i.name,node_type:k,id:v,edge_count:0,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...i.source_link?{source_link:i.source_link}:{},properties:{...Q}};s({nodes:[M],links:[]}),u(M)},J=m.handleSubmit(async i=>{p(""),n(!0);try{await Me(i,r,W),ue("Item Added"),$()}catch(N){let v=I;if((N==null?void 0:N.status)===400){const k=await N.json();v=k.errorCode||(k==null?void 0:k.status)||I}else N instanceof Error&&(v=N.message);p(String(v))}finally{n(!1)}}),D=i=>{i==="Create custom type"?d():h("nodeType",i)},K={sourceType:e.jsx($e,{allowNextStep:!!S,onSelectType:D,selectedType:S,skipToStep:A}),source:e.jsx(Le,{name:_,skipToStep:A,sourceLink:E||"",type:S}),setBudget:e.jsx(Ne,{error:j,loading:f,onClick:()=>null}),createConfirmation:e.jsx(ze,{onclose:$,type:Y}),setAttribues:e.jsx(Ie,{handleSelectType:D,nodeType:S,skipToStep:A})},H="small";return e.jsx(xe,{id:"addItem",kind:H,onClose:c,preventOutsideClose:!0,children:e.jsx(me,{...m,children:e.jsx("form",{id:"add-node-form",onSubmit:J,children:K[o]})})})};export{tt as AddItemModal};
