import{D as Q,s as g,a as b,F as t,T,b as V,r as y,j as e,B as C,aY as ee,b6 as te,ap as se,aW as L,aX as F,bb as B,bc as ne,q as oe,bd as re,be as ie,bf as ae,e as O,t as ce,u as le,aV as de,N as I,aZ as pe,w as xe,ai as me,ah as ue,b9 as he}from"./index-0a6ee7ee.js";import{ai as fe,h as ye}from"./index-0994fbe2.js";import{f as ge}from"./index-1274d765.js";import{C as W}from"./ClipLoader-bad459b5.js";import{p as q}from"./index-83069401.js";import{A as je}from"./index-5901f0df.js";import{c as we}from"./index-64f1c910.js";import"./three.module-9c942ca6.js";import"./Stack-e4c38477.js";import"./createSvgIcon-e31fde8c.js";import"./TextareaAutosize-dadc823a.js";const be=async(o,a,c="")=>await Q.post(`/${o}`,JSON.stringify(a),{Authorization:c}),Se=async(o,a,c,m,d,r)=>{const x=o==="Create custom type"?"schema":"node",l={node_data:{...a,...o==="Image"&&{source_link:c}},node_type:o,name:m,pubkey:r};return be(x,l,d)},Ne=({onClick:o,loading:a,error:c})=>{const m=V(l=>l.budget),[d,r]=y.useState(10),x="node";return y.useEffect(()=>{(async()=>{try{const h=await te(x);r(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[x]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[d," sats"]})]}),e.jsxs(Ce,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ge(m)," sats"]})]})]}),e.jsx(t,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:a||!!c,onClick:o,size:"large",startIcon:a?e.jsx(R,{children:e.jsx(W,{color:b.lightGray,size:12})}):e.jsxs(R,{children:[" ",e.jsx(fe,{})]}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsx(ze,{children:e.jsxs(ve,{children:[e.jsx(ee,{className:"errorIcon"}),e.jsx("span",{children:c})]})}):null]})},Te=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ie=({handleSelectType:o,skipToStep:a,nodeType:c})=>{const[m,d]=y.useState(!1),[r,x]=y.useState(),{watch:l,setValue:h,formState:{isValid:w}}=se();y.useEffect(()=>{(async()=>{d(!0);const u=await ne(c),_=(u.attributes&&typeof u.attributes=="object"?q(u.attributes):q(u)).filter(A=>A.key!=="node_key");x(_),d(!1)})()},[c,l]);const f=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),n=r?[...r].sort((s,u)=>s.required&&!u.required?-1:!s.required&&u.required?1:0):[],j=()=>{o(""),a("sourceType")},p=()=>{r==null||r.forEach(({key:s,required:u})=>{if(u){const S=l(s);typeof S=="string"&&h(s,S.trim(),{shouldValidate:!0})}}),w&&!m&&(r!=null&&r.every(s=>!s.required||l(s.key)))&&a("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(_e,{children:"Set Attributes"})})}),e.jsx(Ae,{children:m?e.jsx(t,{style:{margin:"auto"},children:e.jsx(W,{color:b.lightGray})}):e.jsx(t,{className:"input__wrapper",children:n==null?void 0:n.map(({key:s,required:u})=>e.jsxs(Ee,{children:[e.jsx(T,{children:f(s)}),e.jsx(L,{id:"item-name",maxLength:50,name:s,placeholder:u?"Required":"Optional",rules:{...u?{...F,pattern:{message:"No leading whitespace allowed",value:B}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:j,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!w||m||(r==null?void 0:r.some(s=>s.required&&!l(s.key))),onClick:p,size:"large",variant:"contained",children:"Next"})})]})]})},_e=g(T)`
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
`,Le=({type:o,skipToStep:a,name:c,sourceLink:m})=>{const d=x=>B.test(x??""),r=o==="Image"?d(c)&&d(m):d(c);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(T,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...F,pattern:{message:"No leading whitespace allowed",value:B}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(T,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...F,pattern:{message:"Please avoid special characters and spaces",value:B}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:()=>a("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!r,onClick:()=>a("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Fe=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,De=({skipToStep:o,allowNextStep:a,onSelectType:c,selectedType:m})=>{const[d]=oe(f=>[f.customSchemaFeatureFlag]),[r,x]=y.useState(null),[l,h]=y.useState(!1);y.useEffect(()=>{(async()=>{if(d){h(!0);try{const n=await re(),j=["about","schema"],p=n.schemas.filter(s=>s.ref_id&&!j.includes(s.type)&&!s.is_deleted).map(s=>({label:we(s.type),value:s.type,action:()=>o("setAttribues")}));x(p)}catch(n){console.warn(n)}finally{h(!1)}}else x([...ie,ae])})()},[m,d,o]);const w=f=>{c((f==null?void 0:f.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Me,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(je,{autoFocus:!0,isLoading:l,onSelect:w,options:r})}),e.jsx(t,{children:e.jsx(C,{color:"secondary",disabled:!a,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Me=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Pe=async(o,a,c)=>{var f;const m=Object.entries(o).reduce((n,[j,p])=>(p!=null&&p!==""&&(n[j]=p),n),{}),{nodeType:d,typeName:r,sourceLink:x,...l}=m;let h="",w="";d!=="Create custom type"&&await me(async()=>{const n=await ue.enable();w=n==null?void 0:n.pubkey,h=await he()});try{const n=await Se(d,l,x,r,h,w);c(o,(f=n==null?void 0:n.data)==null?void 0:f.ref_id)}catch(n){let j=I;if(n.status===400){const p=await n.json();j=p.message||p.errorCode||(p==null?void 0:p.status)||I}else n instanceof Error&&(j=n.message);throw new Error(j)}},Ke=()=>{const[o,a]=y.useState("sourceType"),{close:c,visible:m}=O("addItem"),{open:d}=O("addType"),{setBudget:r}=V(i=>i),x=ce({mode:"onChange"}),{watch:l,setValue:h,reset:w}=x,[f,n]=y.useState(!1),[j,p]=y.useState(""),{addNewNode:s}=le(i=>i),[u]=ye(i=>[i.setSelectedNode]);y.useEffect(()=>()=>{a("sourceType"),w()},[m,w]);const S=l("nodeType"),_=l("typeName"),A=l("sourceLink"),Y=l("type");l("title");const D=()=>{c()},E=i=>{p(""),a(i)},U=(i,N)=>{const v=N||`new-id-${Math.random()}`,k=i.nodeType.toLocaleLowerCase(),X=Object.entries(i).reduce(($,[Z,z])=>(z!=null&&z!==""&&($[Z]=z),$),{}),P={name:i.typeName??i.name,type:k,label:i.typeName??i.name,node_type:k,id:v,edge_count:0,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...i.source_link?{source_link:i.source_link}:{},properties:{...X}};s({nodes:[P],edges:[]}),u(P)},J=x.handleSubmit(async i=>{p(""),n(!0);try{await Pe(i,r,U),de("Item Added"),D()}catch(N){let v=I;if((N==null?void 0:N.status)===400){const k=await N.json();v=k.errorCode||(k==null?void 0:k.status)||I}else N instanceof Error&&(v=N.message);p(String(v))}finally{n(!1)}}),M=i=>{i==="Create custom type"?d():h("nodeType",i)},H={sourceType:e.jsx(De,{allowNextStep:!!S,onSelectType:M,selectedType:S,skipToStep:E}),source:e.jsx(Le,{name:_,skipToStep:E,sourceLink:A||"",type:S}),setBudget:e.jsx(Ne,{error:j,loading:f,onClick:()=>null}),createConfirmation:e.jsx(Be,{onclose:D,type:Y}),setAttribues:e.jsx(Ie,{handleSelectType:M,nodeType:S,skipToStep:E})},K="small";return e.jsx(pe,{id:"addItem",kind:K,onClose:c,preventOutsideClose:!0,children:e.jsx(xe,{...x,children:e.jsx("form",{id:"add-node-form",onSubmit:J,children:H[o]})})})};export{Ke as AddItemModal};
