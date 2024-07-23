import{ax as X,Q as y,S as b,U as t,a5 as T,N as q,r as f,j as e,bB as Z,bC as ee,ar as F,bF as te,a4 as se,bG as ne,ad as $,M as oe,O as re,bD as I,bh as ae,ag as ie,ay as ce}from"./index-2786dc8f.js";import{B as C,aF as V,ab as le,aN as de,ae as pe,aK as L,aO as z,aP as xe,aQ as ue,aR as me,af as he,aG as fe,ag as ye}from"./index-d75bac20.js";import{S as ge}from"./index-14753326.js";import{p as je}from"./index-bbc7c996.js";import{c as we}from"./index-64f1c910.js";import"./three.module-a2e04964.js";const be=async(o,i,c="")=>await X.post(`/${o}`,JSON.stringify(i),{Authorization:c}),Se=async(o,i,c,u,d,r)=>{const x=o==="Create custom type"?"schema":"node",l={node_data:{...i,...o==="Image"&&{source_link:c}},node_type:o,name:u,pubkey:r};return be(x,l,d)},Ne=({onClick:o,loading:i,error:c})=>{const u=q(l=>l.budget),[d,r]=f.useState(10),x="node";return f.useEffect(()=>{(async()=>{try{const m=await ee(x);r(m.data.price)}catch(m){console.error("cannot fetch",m)}})()},[x]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[d," sats"]})]}),e.jsxs(Ce,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Z(u)," sats"]})]})]}),e.jsx(t,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:i||!!c,onClick:o,size:"large",startIcon:i?e.jsx(G,{children:e.jsx(V,{color:b.lightGray,size:12})}):e.jsxs(G,{children:[" ",e.jsx(le,{})]}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsx(Be,{children:e.jsxs(ve,{children:[e.jsx(de,{className:"errorIcon"}),e.jsx("span",{children:c})]})}):null]})},Te=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ce=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ke=y(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ve=y(t)`
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
`,Be=y(t)`
  display: flex;
  align-items: center;
  color: ${b.primaryRed};
  position: relative;
  margin-top: 20px;
`,G=y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,ze=({type:o,onclose:i})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(R,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(R,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:i,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),R=y(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ie=({handleSelectType:o,skipToStep:i,nodeType:c})=>{const[u,d]=f.useState(!1),[r,x]=f.useState(),{watch:l,setValue:m,formState:{isValid:w}}=pe();f.useEffect(()=>{(async()=>{d(!0);const j=await te(c),_=je(j).filter(E=>E.key!=="node_key");x(_),d(!1)})()},[c,l]);const h=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),n=r?[...r].sort((s,j)=>s.required&&!j.required?-1:!s.required&&j.required?1:0):[],g=()=>{o(""),i("sourceType")},p=()=>{r==null||r.forEach(({key:s,required:j})=>{if(j){const S=l(s);typeof S=="string"&&m(s,S.trim(),{shouldValidate:!0})}}),w&&!u&&(r!=null&&r.every(s=>!s.required||l(s.key)))&&i("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(_e,{children:"Set Attributes"})})}),e.jsx(Ee,{children:u?e.jsx(t,{style:{margin:"auto"},children:e.jsx(V,{color:b.lightGray})}):e.jsx(t,{className:"input__wrapper",children:n==null?void 0:n.map(({key:s,required:j})=>e.jsxs(Ae,{children:[e.jsx(T,{children:h(s)}),e.jsx(L,{id:"item-name",maxLength:50,name:s,placeholder:j?"Required":"Optional",rules:{...j?{...F,pattern:{message:"No leading whitespace allowed",value:z}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:g,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!w||u||(r==null?void 0:r.some(s=>s.required&&!l(s.key))),onClick:p,size:"large",variant:"contained",children:"Next"})})]})]})},_e=y(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ee=y(t)`
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
`,Fe=({type:o,skipToStep:i,name:c,sourceLink:u})=>{const d=x=>z.test(x??""),r=o==="Image"?d(c)&&d(u):d(c);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Le,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(T,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...F,pattern:{message:"No leading whitespace allowed",value:z}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(T,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...F,pattern:{message:"Please avoid special characters and spaces",value:z}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:()=>i("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!r,onClick:()=>i("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Le=y(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Me=({skipToStep:o,allowNextStep:i,onSelectType:c,selectedType:u})=>{const[d]=se(h=>[h.customSchemaFeatureFlag]),[r,x]=f.useState(null),[l,m]=f.useState(!1);f.useEffect(()=>{(async()=>{if(d){m(!0);try{const n=await ne(),g=["about","schema"],p=n.schemas.filter(s=>s.ref_id&&!g.includes(s.type)&&!s.is_deleted).map(s=>({label:we(s.type),value:s.type,action:()=>o("setAttribues")}));x(p)}catch(n){console.warn(n)}finally{m(!1)}}else x([...ue,me])})()},[u,d,o]);const w=h=>{c((h==null?void 0:h.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Oe,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(xe,{autoFocus:!0,isLoading:l,onSelect:w,options:r})}),e.jsx(t,{children:e.jsx(C,{color:"secondary",disabled:!i,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Oe=y(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Pe=async(o,i,c)=>{var h;const u=Object.entries(o).reduce((n,[g,p])=>(p!=null&&p!==""&&(n[g]=p),n),{}),{nodeType:d,typeName:r,sourceLink:x,...l}=u;let m="",w="";d!=="Create custom type"&&await ae(async()=>{const n=await ie.enable();w=n==null?void 0:n.pubkey,m=await ce()});try{const n=await Se(d,l,x,r,m,w);c(o,(h=n==null?void 0:n.data)==null?void 0:h.ref_id)}catch(n){let g=I;if(n.status===400){const p=await n.json();g=p.message||p.errorCode||(p==null?void 0:p.status)||I}else n instanceof Error&&(g=n.message);throw new Error(g)}},Ue=()=>{const[o,i]=f.useState("sourceType"),{close:c,visible:u}=$("addItem"),{open:d}=$("addType"),[r]=q(a=>[a.setBudget]),x=he({mode:"onChange"}),{watch:l,setValue:m,reset:w}=x,[h,n]=f.useState(!1),[g,p]=f.useState(""),[s]=oe(a=>[a.addNewNode]),[j]=re(a=>[a.setSelectedNode]);f.useEffect(()=>()=>{i("sourceType"),w()},[u,w]);const S=l("nodeType"),_=l("typeName"),E=l("sourceLink"),U=l("type");l("title");const M=()=>{c()},A=a=>{p(""),i(a)},W=(a,N)=>{const v=N||`new-id-${Math.random()}`,k=a.nodeType.toLocaleLowerCase(),Q=Object.entries(a).reduce((D,[H,B])=>(B!=null&&B!==""&&(D[H]=B),D),{}),P={name:a.typeName??a.name,type:k,label:a.typeName??a.name,node_type:k,id:v,edge_count:0,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...a.source_link?{source_link:a.source_link}:{},properties:{...Q}};s({nodes:[P],links:[]}),j(P)},Y=x.handleSubmit(async a=>{p(""),n(!0);try{await Pe(a,r,W),ge("Item Added"),M()}catch(N){let v=I;if((N==null?void 0:N.status)===400){const k=await N.json();v=k.errorCode||(k==null?void 0:k.status)||I}else N instanceof Error&&(v=N.message);p(String(v))}finally{n(!1)}}),O=a=>{a==="Create custom type"?d():m("nodeType",a)},J={sourceType:e.jsx(Me,{allowNextStep:!!S,onSelectType:O,selectedType:S,skipToStep:A}),source:e.jsx(Fe,{name:_,skipToStep:A,sourceLink:E||"",type:S}),setBudget:e.jsx(Ne,{error:g,loading:h,onClick:()=>null}),createConfirmation:e.jsx(ze,{onclose:M,type:U}),setAttribues:e.jsx(Ie,{handleSelectType:O,nodeType:S,skipToStep:A})},K="small";return e.jsx(fe,{id:"addItem",kind:K,onClose:c,preventOutsideClose:!0,children:e.jsx(ye,{...x,children:e.jsx("form",{id:"add-node-form",onSubmit:Y,children:J[o]})})})};export{Ue as AddItemModal};
