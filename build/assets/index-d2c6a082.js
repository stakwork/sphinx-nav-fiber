import{ax as Z,Q as g,S as b,U as t,a5 as T,N as V,r as y,j as e,bD as ee,bE as te,ar as L,bH as se,a4 as ne,bI as oe,ad as $,M as re,O as ae,bF as I,bi as ie,ag as ce,ay as le}from"./index-4f150300.js";import{B as C,ai as U,ab as de,aN as pe,ae as xe,aK as F,aO as z,aP as ue,aQ as me,aR as he,af as fe,aG as ye,ag as ge}from"./index-2ed354cc.js";import{S as je}from"./index-f73b01f1.js";import{p as R}from"./index-44e303ef.js";import{c as we}from"./index-64f1c910.js";import"./three.module-2ce81f73.js";const be=async(o,i,c="")=>await Z.post(`/${o}`,JSON.stringify(i),{Authorization:c}),Se=async(o,i,c,u,d,r)=>{const x=o==="Create custom type"?"schema":"node",l={node_data:{...i,...o==="Image"&&{source_link:c}},node_type:o,name:u,pubkey:r};return be(x,l,d)},Ne=({onClick:o,loading:i,error:c})=>{const u=V(l=>l.budget),[d,r]=y.useState(10),x="node";return y.useEffect(()=>{(async()=>{try{const h=await te(x);r(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[x]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[d," sats"]})]}),e.jsxs(Ce,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ee(u)," sats"]})]})]}),e.jsx(t,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:i||!!c,onClick:o,size:"large",startIcon:i?e.jsx(G,{children:e.jsx(U,{color:b.lightGray,size:12})}):e.jsxs(G,{children:[" ",e.jsx(de,{})]}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsx(Be,{children:e.jsxs(ve,{children:[e.jsx(pe,{className:"errorIcon"}),e.jsx("span",{children:c})]})}):null]})},Te=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,G=g.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,ze=({type:o,onclose:i})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(q,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(q,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:i,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),q=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ie=({handleSelectType:o,skipToStep:i,nodeType:c})=>{const[u,d]=y.useState(!1),[r,x]=y.useState(),{watch:l,setValue:h,formState:{isValid:w}}=xe();y.useEffect(()=>{(async()=>{d(!0);const m=await se(c),E=(m.attributes&&typeof m.attributes=="object"?R(m.attributes):R(m)).filter(_=>_.key!=="node_key");x(E),d(!1)})()},[c,l]);const f=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),n=r?[...r].sort((s,m)=>s.required&&!m.required?-1:!s.required&&m.required?1:0):[],j=()=>{o(""),i("sourceType")},p=()=>{r==null||r.forEach(({key:s,required:m})=>{if(m){const S=l(s);typeof S=="string"&&h(s,S.trim(),{shouldValidate:!0})}}),w&&!u&&(r!=null&&r.every(s=>!s.required||l(s.key)))&&i("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ee,{children:"Set Attributes"})})}),e.jsx(_e,{children:u?e.jsx(t,{style:{margin:"auto"},children:e.jsx(U,{color:b.lightGray})}):e.jsx(t,{className:"input__wrapper",children:n==null?void 0:n.map(({key:s,required:m})=>e.jsxs(Ae,{children:[e.jsx(T,{children:f(s)}),e.jsx(F,{id:"item-name",maxLength:50,name:s,placeholder:m?"Required":"Optional",rules:{...m?{...L,pattern:{message:"No leading whitespace allowed",value:z}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:j,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!w||u||(r==null?void 0:r.some(s=>s.required&&!l(s.key))),onClick:p,size:"large",variant:"contained",children:"Next"})})]})]})},Ee=g(T)`
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
`,Ae=g(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${b.GRAY7};
    -webkit-text-fill-color: ${b.GRAY7};
  }
`,Le=({type:o,skipToStep:i,name:c,sourceLink:u})=>{const d=x=>z.test(x??""),r=o==="Image"?d(c)&&d(u):d(c);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(T,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(F,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...L,pattern:{message:"No leading whitespace allowed",value:z}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(T,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(F,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...L,pattern:{message:"Please avoid special characters and spaces",value:z}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:()=>i("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!r,onClick:()=>i("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Fe=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Me=({skipToStep:o,allowNextStep:i,onSelectType:c,selectedType:u})=>{const[d]=ne(f=>[f.customSchemaFeatureFlag]),[r,x]=y.useState(null),[l,h]=y.useState(!1);y.useEffect(()=>{(async()=>{if(d){h(!0);try{const n=await oe(),j=["about","schema"],p=n.schemas.filter(s=>s.ref_id&&!j.includes(s.type)&&!s.is_deleted).map(s=>({label:we(s.type),value:s.type,action:()=>o("setAttribues")}));x(p)}catch(n){console.warn(n)}finally{h(!1)}}else x([...me,he])})()},[u,d,o]);const w=f=>{c((f==null?void 0:f.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Oe,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ue,{autoFocus:!0,isLoading:l,onSelect:w,options:r})}),e.jsx(t,{children:e.jsx(C,{color:"secondary",disabled:!i,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Oe=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Pe=async(o,i,c)=>{var f;const u=Object.entries(o).reduce((n,[j,p])=>(p!=null&&p!==""&&(n[j]=p),n),{}),{nodeType:d,typeName:r,sourceLink:x,...l}=u;let h="",w="";d!=="Create custom type"&&await ie(async()=>{const n=await ce.enable();w=n==null?void 0:n.pubkey,h=await le()});try{const n=await Se(d,l,x,r,h,w);c(o,(f=n==null?void 0:n.data)==null?void 0:f.ref_id)}catch(n){let j=I;if(n.status===400){const p=await n.json();j=p.message||p.errorCode||(p==null?void 0:p.status)||I}else n instanceof Error&&(j=n.message);throw new Error(j)}},Ue=()=>{const[o,i]=y.useState("sourceType"),{close:c,visible:u}=$("addItem"),{open:d}=$("addType"),[r]=V(a=>[a.setBudget]),x=fe({mode:"onChange"}),{watch:l,setValue:h,reset:w}=x,[f,n]=y.useState(!1),[j,p]=y.useState(""),[s]=re(a=>[a.addNewNode]),[m]=ae(a=>[a.setSelectedNode]);y.useEffect(()=>()=>{i("sourceType"),w()},[u,w]);const S=l("nodeType"),E=l("typeName"),_=l("sourceLink"),W=l("type");l("title");const M=()=>{c()},A=a=>{p(""),i(a)},Y=(a,N)=>{const v=N||`new-id-${Math.random()}`,k=a.nodeType.toLocaleLowerCase(),Q=Object.entries(a).reduce((D,[X,B])=>(B!=null&&B!==""&&(D[X]=B),D),{}),P={name:a.typeName??a.name,type:k,label:a.typeName??a.name,node_type:k,id:v,edge_count:0,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...a.source_link?{source_link:a.source_link}:{},properties:{...Q}};s({nodes:[P],links:[]}),m(P)},H=x.handleSubmit(async a=>{p(""),n(!0);try{await Pe(a,r,Y),je("Item Added"),M()}catch(N){let v=I;if((N==null?void 0:N.status)===400){const k=await N.json();v=k.errorCode||(k==null?void 0:k.status)||I}else N instanceof Error&&(v=N.message);p(String(v))}finally{n(!1)}}),O=a=>{a==="Create custom type"?d():h("nodeType",a)},J={sourceType:e.jsx(Me,{allowNextStep:!!S,onSelectType:O,selectedType:S,skipToStep:A}),source:e.jsx(Le,{name:E,skipToStep:A,sourceLink:_||"",type:S}),setBudget:e.jsx(Ne,{error:j,loading:f,onClick:()=>null}),createConfirmation:e.jsx(ze,{onclose:M,type:W}),setAttribues:e.jsx(Ie,{handleSelectType:O,nodeType:S,skipToStep:A})},K="small";return e.jsx(ye,{id:"addItem",kind:K,onClose:c,preventOutsideClose:!0,children:e.jsx(ge,{...x,children:e.jsx("form",{id:"add-node-form",onSubmit:H,children:J[o]})})})};export{Ue as AddItemModal};
