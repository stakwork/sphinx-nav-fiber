import{Z as X,t as g,v as b,F as t,T,z as V,r as y,j as e,aJ as ee,aA as L,aO as te,N as se,aP as ne,q as oe,az as I,a1 as re,a0 as ie,aM as ae}from"./index-5c0ac6ff.js";import{aL as ce,B as C,ah as le,$ as de,u as D,a0 as pe,f as me,a1 as xe}from"./index-3e23255c.js";import{B as ue}from"./index-fb069593.js";import{S as he}from"./index-06b6ebf2.js";import{e as fe}from"./index.esm-99836bec.js";import{C as J}from"./ClipLoader-e77a9c56.js";import{n as B,O as ye,i as ge}from"./constants-b2a2fa82.js";import{p as q}from"./index-28e22657.js";import{T as F}from"./index-74d567bf.js";import{A as je}from"./index-6754eda6.js";import{c as we}from"./index-64f1c910.js";import"./three.module-52004ab8.js";import"./Stack-396894db.js";import"./createSvgIcon-f4654896.js";import"./TextareaAutosize-70a3a579.js";const be=async(o,a,c="")=>await X.post(`/${o}`,JSON.stringify(a),{Authorization:c}),Se=async(o,a,c,x,d,r)=>{const m=o==="Create custom type"?"schema":"node",l={node_data:{...a,...o==="Image"&&{source_link:c}},node_type:o,name:x,pubkey:r};return be(m,l,d)},Ne=({onClick:o,loading:a,error:c})=>{const x=V(l=>l.budget),[d,r]=y.useState(10),m="node";return y.useEffect(()=>{(async()=>{try{const h=await ee(m);r(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[m]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[d," sats"]})]}),e.jsxs(Ce,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ce(x)," sats"]})]})]}),e.jsx(t,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:a||!!c,onClick:o,size:"large",startIcon:a?e.jsx(R,{children:e.jsx(J,{color:b.lightGray,size:12})}):e.jsxs(R,{children:[" ",e.jsx(le,{})]}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsx(ze,{children:e.jsxs(ve,{children:[e.jsx(fe,{className:"errorIcon"}),e.jsx("span",{children:c})]})}):null]})},Te=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ie=({handleSelectType:o,skipToStep:a,nodeType:c})=>{const[x,d]=y.useState(!1),[r,m]=y.useState(),{watch:l,setValue:h,formState:{isValid:w}}=de();y.useEffect(()=>{(async()=>{d(!0);const u=await te(c),A=(u.attributes&&typeof u.attributes=="object"?q(u.attributes):q(u)).filter(_=>_.key!=="node_key");m(A),d(!1)})()},[c,l]);const f=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),n=r?[...r].sort((s,u)=>s.required&&!u.required?-1:!s.required&&u.required?1:0):[],j=()=>{o(""),a("sourceType")},p=()=>{r==null||r.forEach(({key:s,required:u})=>{if(u){const S=l(s);typeof S=="string"&&h(s,S.trim(),{shouldValidate:!0})}}),w&&!x&&(r!=null&&r.every(s=>!s.required||l(s.key)))&&a("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ae,{children:"Set Attributes"})})}),e.jsx(_e,{children:x?e.jsx(t,{style:{margin:"auto"},children:e.jsx(J,{color:b.lightGray})}):e.jsx(t,{className:"input__wrapper",children:n==null?void 0:n.map(({key:s,required:u})=>e.jsxs(Ee,{children:[e.jsx(T,{children:f(s)}),e.jsx(F,{id:"item-name",maxLength:50,name:s,placeholder:u?"Required":"Optional",rules:{...u?{...L,pattern:{message:"No leading whitespace allowed",value:B}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:j,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!w||x||(r==null?void 0:r.some(s=>s.required&&!l(s.key))),onClick:p,size:"large",variant:"contained",children:"Next"})})]})]})},Ae=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,_e=g(t)`
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
`,Le=({type:o,skipToStep:a,name:c,sourceLink:x})=>{const d=m=>B.test(m??""),r=o==="Image"?d(c)&&d(x):d(c);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(T,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(F,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...L,pattern:{message:"No leading whitespace allowed",value:B}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(T,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(F,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...L,pattern:{message:"Please avoid special characters and spaces",value:B}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:()=>a("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!r,onClick:()=>a("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Fe=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Me=({skipToStep:o,allowNextStep:a,onSelectType:c,selectedType:x})=>{const[d]=se(f=>[f.customSchemaFeatureFlag]),[r,m]=y.useState(null),[l,h]=y.useState(!1);y.useEffect(()=>{(async()=>{if(d){h(!0);try{const n=await ne(),j=["about","schema"],p=n.schemas.filter(s=>s.ref_id&&!j.includes(s.type)&&!s.is_deleted).map(s=>({label:we(s.type),value:s.type,action:()=>o("setAttribues")}));m(p)}catch(n){console.warn(n)}finally{h(!1)}}else m([...ye,ge])})()},[x,d,o]);const w=f=>{c((f==null?void 0:f.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Oe,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(je,{autoFocus:!0,isLoading:l,onSelect:w,options:r})}),e.jsx(t,{children:e.jsx(C,{color:"secondary",disabled:!a,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Oe=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Pe=async(o,a,c)=>{var f;const x=Object.entries(o).reduce((n,[j,p])=>(p!=null&&p!==""&&(n[j]=p),n),{}),{nodeType:d,typeName:r,sourceLink:m,...l}=x;let h="",w="";d!=="Create custom type"&&await re(async()=>{const n=await ie.enable();w=n==null?void 0:n.pubkey,h=await ae()});try{const n=await Se(d,l,m,r,h,w);c(o,(f=n==null?void 0:n.data)==null?void 0:f.ref_id)}catch(n){let j=I;if(n.status===400){const p=await n.json();j=p.message||p.errorCode||(p==null?void 0:p.status)||I}else n instanceof Error&&(j=n.message);throw new Error(j)}},et=()=>{const[o,a]=y.useState("sourceType"),{close:c,visible:x}=D("addItem"),{open:d}=D("addType"),{setBudget:r}=V(i=>i),m=pe({mode:"onChange"}),{watch:l,setValue:h,reset:w}=m,[f,n]=y.useState(!1),[j,p]=y.useState(""),{addNewNode:s}=oe(i=>i),[u]=me(i=>[i.setSelectedNode]);y.useEffect(()=>()=>{a("sourceType"),w()},[x,w]);const S=l("nodeType"),A=l("typeName"),_=l("sourceLink"),U=l("type");l("title");const M=()=>{c()},E=i=>{p(""),a(i)},W=(i,N)=>{const v=N||`new-id-${Math.random()}`,k=i.nodeType.toLocaleLowerCase(),Z=Object.entries(i).reduce(($,[Q,z])=>(z!=null&&z!==""&&($[Q]=z),$),{}),P={name:i.typeName??i.name,type:k,label:i.typeName??i.name,node_type:k,id:v,edge_count:0,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...i.source_link?{source_link:i.source_link}:{},properties:{...Z}};s({nodes:[P],links:[]}),u(P)},Y=m.handleSubmit(async i=>{p(""),n(!0);try{await Pe(i,r,W),he("Item Added"),M()}catch(N){let v=I;if((N==null?void 0:N.status)===400){const k=await N.json();v=k.errorCode||(k==null?void 0:k.status)||I}else N instanceof Error&&(v=N.message);p(String(v))}finally{n(!1)}}),O=i=>{i==="Create custom type"?d():h("nodeType",i)},H={sourceType:e.jsx(Me,{allowNextStep:!!S,onSelectType:O,selectedType:S,skipToStep:E}),source:e.jsx(Le,{name:A,skipToStep:E,sourceLink:_||"",type:S}),setBudget:e.jsx(Ne,{error:j,loading:f,onClick:()=>null}),createConfirmation:e.jsx(Be,{onclose:M,type:U}),setAttribues:e.jsx(Ie,{handleSelectType:O,nodeType:S,skipToStep:E})},K="small";return e.jsx(ue,{id:"addItem",kind:K,onClose:c,preventOutsideClose:!0,children:e.jsx(xe,{...m,children:e.jsx("form",{id:"add-node-form",onSubmit:Y,children:H[o]})})})};export{et as AddItemModal};
