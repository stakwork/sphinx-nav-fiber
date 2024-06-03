import{f as g,h as T,F as t,T as N,y as q,r as y,j as e,aW as H,aX as K,D as L,a_ as X,J as Q,a$ as Z,B as P,i as ee,aY as k,N as O,b0 as te,o as se,O as oe}from"./index-6e53b845.js";import{B as C,C as V,i as ne,c as re,F as ie}from"./react-toastify.esm-6f404510.js";import{B as ae}from"./index-1641e3f9.js";import{S as ce}from"./index-934548ea.js";import{i as le}from"./index.esm-6d9dcba1.js";import{C as de}from"./CheckIcon-1e1abfa6.js";import{n as E,a as pe,i as me}from"./index-26c4750c.js";import{p as xe}from"./index-30d16895.js";import{T as A}from"./index-08ed1ddf.js";import{A as ue}from"./index-c8f608e9.js";import{c as he}from"./index-64f1c910.js";import"./generateCategoricalChart-cb88e114.js";import"./Popover-3f1dc81b.js";import"./useSlotProps-c04af8a9.js";import"./InfoIcon-975a9ea1.js";import"./NoFilterResultIcon-74616256.js";import"./index-2ed6b8a3.js";import"./index-08996edb.js";import"./PlusIcon-5a119337.js";import"./index-601d7cfb.js";import"./Popper-5a53dd55.js";const fe=({onClick:n,loading:d,error:l})=>{const m=q(i=>i.budget),[p,s]=y.useState(10),a="node";return y.useEffect(()=>{(async()=>{try{const h=await K(a);s(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[a]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(we,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ye,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(ge,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[H(m)," sats"]})]})]}),e.jsx(t,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:d||!!l,onClick:n,size:"large",startIcon:d?e.jsx(D,{children:e.jsx(V,{color:"gray",size:12})}):e.jsxs(D,{children:[" ",e.jsx(de,{})]}),type:"submit",variant:"contained",children:"Approve"})}),l?e.jsx(Se,{children:e.jsxs(je,{children:[e.jsx(le,{className:"errorIcon"}),e.jsx("span",{children:l})]})}):null]})},ye=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${T.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${T.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${T.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,ge=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${T.secondaryText4};
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
`,we=g(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,je=g(t)`
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
`,Se=g(t)`
  display: flex;
  align-items: center;
  color: ${T.primaryRed};
  position: relative;
  margin-top: 20px;
`,D=g.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,be=({type:n,onclose:d})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(R,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(R,{children:["Type: ",n]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),R=g(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Te=({handleSelectType:n,skipToStep:d,nodeType:l})=>{const[m,p]=y.useState(!1),[s,a]=y.useState(),{watch:i,setValue:h,formState:{isValid:w}}=ne();y.useEffect(()=>{(async()=>{p(!0);const j=await X(l),z=xe(j).filter(_=>_.key!=="node_key");a(z),p(!1)})()},[l,i]);const u=o=>o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),r=s?[...s].sort((o,j)=>o.required&&!j.required?-1:!o.required&&j.required?1:0):[],f=()=>{n(""),d("sourceType")},x=()=>{s==null||s.forEach(({key:o,required:j})=>{if(j){const S=i(o);typeof S=="string"&&h(o,S.trim(),{shouldValidate:!0})}}),w&&!m&&(s!=null&&s.every(o=>!o.required||i(o.key)))&&d("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ne,{children:"Set Attributes"})})}),e.jsx(Ce,{children:m?e.jsx(t,{style:{margin:"auto"},children:e.jsx(V,{color:T.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:r==null?void 0:r.map(({key:o,required:j})=>e.jsxs(ve,{children:[e.jsx(N,{children:u(o)}),e.jsx(A,{id:"item-name",maxLength:50,name:o,placeholder:j?"Required":"Optional",rules:{...j?{...L,pattern:{message:"No leading whitespace allowed",value:E}}:{}}})]},o))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:f,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!w||m||(s==null?void 0:s.some(o=>o.required&&!i(o.key))),onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},Ne=g(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ce=g(t)`
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
`,ve=g(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${T.GRAY7};
    -webkit-text-fill-color: ${T.GRAY7};
  }
`,ke=({type:n,skipToStep:d,name:l,sourceLink:m})=>{const p=a=>E.test(a??""),s=n==="Image"?p(l)&&p(m):p(l);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Be,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(N,{children:[n," name"]})}),e.jsx(t,{mb:12,children:e.jsx(A,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...L,pattern:{message:"No leading whitespace allowed",value:E}}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(N,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(A,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...L,pattern:{message:"Please avoid special characters and spaces",value:E}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:()=>d("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!s,onClick:()=>d("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Be=g(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ee=({skipToStep:n,allowNextStep:d,onSelectType:l,selectedType:m})=>{const[p]=Q(u=>[u.customSchemaFeatureFlag]),[s,a]=y.useState(null),[i,h]=y.useState(!1);y.useEffect(()=>{(async()=>{if(p){h(!0);try{const r=await Z(),f=["about","schema"],x=r.schemas.filter(o=>o.ref_id&&!f.includes(o.type)&&!o.is_deleted).map(o=>({label:he(o.type),value:o.type,action:()=>n("setAttribues")}));a(x)}catch(r){console.warn(r)}finally{h(!1)}}else a([...pe,me])})()},[m,p,n]);const w=u=>{l((u==null?void 0:u.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ze,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ue,{autoFocus:!0,isLoading:i,onSelect:w,options:s})}),e.jsx(t,{children:e.jsx(C,{color:"secondary",disabled:!d,onClick:()=>n("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},ze=g(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,_e=async(n,d,l)=>{var m,p;if(n.nodeType==="Create custom type"){n.type;try{const s=await O.post("/schema",JSON.stringify(n),{});if(s.error){const{message:a}=s.error;throw new Error(a)}l(n,(m=s==null?void 0:s.data)==null?void 0:m.ref_id),close()}catch(s){let a=k;if(s.status===400){const i=await s.json();a=i.errorCode||(i==null?void 0:i.status)||k}else s instanceof Error&&(a=s.message);throw new Error(a)}}else{const s="node",{nodeType:a,typeName:i,...h}=n,w={node_data:{...h},node_type:a,name:i};n.nodeType==="Image"&&(w.node_data={...n.node_data,source_link:n.sourceLink});let u="";await te(async()=>{const r=await se.enable();w.pubkey=r==null?void 0:r.pubkey,u=await oe()});try{const r=await O.post(`/${s}`,JSON.stringify(w),{Authorization:u});if(r.error){const{message:f}=r.error;throw new Error(f)}l(n,(p=r==null?void 0:r.data)==null?void 0:p.ref_id),close()}catch(r){let f=k;if(r.status===400)try{const x=await r.json();f=x.message||x.errorCode||(x==null?void 0:x.status)||k}catch{f=k}else r instanceof Error&&(f=r.message);throw new Error(f)}}},Ze=()=>{const[n,d]=y.useState("sourceType"),{close:l,visible:m}=P("addItem"),{open:p}=P("addType"),[s]=q(c=>[c.setBudget]),a=re({mode:"onChange"}),{watch:i,setValue:h,reset:w}=a,[u,r]=y.useState(!1),[f,x]=y.useState(""),[o,j]=ee(c=>[c.addNewNode,c.setSelectedNode]);y.useEffect(()=>()=>{d("sourceType"),w()},[m,w]);const S=i("nodeType"),z=i("typeName"),_=i("sourceLink"),Y=i("type");i("title");const F=()=>{l()},I=c=>{x(""),d(c)},G=(c,b)=>{const B=b||`new-id-${Math.random()}`,v=c.nodeType.toLocaleLowerCase(),M={name:c.typeName,type:v,label:c.typeName,node_type:v,id:B,ref_id:B,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...c.sourceLink?{source_link:c.sourceLink}:{},properties:{...c}};o(M),j(M)},J=a.handleSubmit(async c=>{x(""),r(!0);try{await _e(c,s,G),ce("Item Added"),F()}catch(b){let B=k;if((b==null?void 0:b.status)===400){const v=await b.json();B=v.errorCode||(v==null?void 0:v.status)||k}else b instanceof Error&&(B=b.message);x(String(B))}finally{r(!1)}}),$=c=>{c==="Create custom type"?p():h("nodeType",c)},U={sourceType:e.jsx(Ee,{allowNextStep:!!S,onSelectType:$,selectedType:S,skipToStep:I}),source:e.jsx(ke,{name:z,skipToStep:I,sourceLink:_||"",type:S}),setBudget:e.jsx(fe,{error:f,loading:u,onClick:()=>null}),createConfirmation:e.jsx(be,{onclose:F,type:Y}),setAttribues:e.jsx(Te,{handleSelectType:$,nodeType:S,skipToStep:I})},W="small";return e.jsx(ae,{id:"addItem",kind:W,onClose:l,preventOutsideClose:!0,children:e.jsx(ie,{...a,children:e.jsx("form",{id:"add-node-form",onSubmit:J,children:U[n]})})})};export{Ze as AddItemModal};
