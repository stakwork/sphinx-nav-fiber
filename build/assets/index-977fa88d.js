import{f as h,h as g,F as t,T as w,x as F,r as u,j as e,ba as q,bb as W,b2 as H,C as _,I as K,b4 as Q,i as X,b3 as T,U as A,bf as Z,o as ee,bd as te}from"./index-26ac0dae.js";import{B as b,C as M,k as se,e as oe,F as ne}from"./react-toastify.esm-22478e2f.js";import{B as re}from"./index-04182e17.js";import{u as I}from"./index-4844e4b5.js";import{S as ie}from"./index-4a5a71ba.js";import{h as ae}from"./index.esm-1b8c4fc1.js";import{C as ce}from"./CheckIcon-d5bea122.js";import{T as E}from"./index-cd3cddf6.js";import{p as le}from"./index-30d16895.js";import{A as de}from"./index-e1538e44.js";import{a as pe,i as xe}from"./constants-cde8ebc3.js";import"./InfoIcon-c29a86af.js";import"./Popover-70565b78.js";import"./useSlotProps-dc95fabe.js";import"./Select-bf335723.js";import"./Stack-f0923ac3.js";import"./Popper-b8a5f76b.js";const me=({onClick:s,loading:d,error:c})=>{const x=F(i=>i.budget),[p,r]=u.useState(10),n="node";return u.useEffect(()=>{(async()=>{try{const o=await W(n);r(o.data.price)}catch(o){console.error("cannot fetch",o)}})()},[n]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(fe,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ue,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(he,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[q(x)," sats"]})]})]}),e.jsx(t,{children:e.jsx(b,{color:"secondary","data-testid":"check-icon",disabled:d||!!c,onClick:s,size:"large",startIcon:d?e.jsx(M,{size:24}):e.jsx(ce,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(ge,{role:"tooltip",children:[e.jsxs(ye,{children:[e.jsx(ae,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},ue=h(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${g.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${g.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${g.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,he=h(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${g.secondaryText4};
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
`,fe=h(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ye=h(t)`
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
  justify-content: center;

  span {
    margin-left: 4px;
  }
`,ge=h(t)`
  display: flex;
  align-items: center;
  color: ${g.primaryRed};
  position: relative;
  margin-top: 20px;

  .tooltip {
    position: absolute;
    background-color: ${g.black};
    opacity: 0.8;
    border-radius: 4px;
    color: ${g.white};
    top: -10px;
    left: 335px;
    padding: 4px 8px;
    font-size: 13px;
    font-family: Barlow;
    visibility: hidden;
    width: 175px;
    z-index: 1;
  }

  &:hover .tooltip {
    visibility: visible;
  }

  &:focus .tooltip {
    visibility: visible;
  }
`,je=({type:s,onclose:d})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx($,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs($,{children:["Type: ",s]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(b,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(b,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),$=h(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=({skipToStep:s,nodeType:d})=>{const[c,x]=u.useState(!1),[p,r]=u.useState(),{setValue:n,register:i}=se();return u.useEffect(()=>{(async()=>{x(!0);const m=await H(d.toLowerCase()),a=le(m);r(a);let f={};a.forEach(({key:N,required:v})=>{const y=v?"Required":"Optional";n(`${N.toLocaleLowerCase()}`,y),f={...f,[N]:y}}),n("node_data",f),x(!1)})()},[d,i,n]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(be,{children:"Set Attributes"})})}),e.jsx(Se,{children:c?e.jsx(t,{style:{margin:"auto"},children:e.jsx(M,{color:g.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:p==null?void 0:p.map(({key:o})=>e.jsx(e.Fragment,{children:e.jsxs(Te,{children:[e.jsx(w,{children:o.replace("_"," ")}),e.jsx(E,{disabled:!0,id:"item-name",name:o})]})}))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(b,{color:"secondary",onClick:()=>s("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(b,{color:"secondary",onClick:()=>s("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},be=h(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=h(t)`
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
  }
`,Te=h(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${g.GRAY7};
    -webkit-text-fill-color: ${g.GRAY7};
  }
`,Ce=({type:s,skipToStep:d,name:c,sourceLink:x})=>{const p=s==="Image"?c&&x:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ne,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(w,{children:[s," name"]})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{..._}})}),s==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(w,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{..._}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(b,{color:"secondary",onClick:()=>d("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(b,{color:"secondary",disabled:!p,onClick:()=>d("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Ne=h(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ve=s=>s.charAt(0).toUpperCase()+s.slice(1),ke=({skipToStep:s,allowNextStep:d,onSelectType:c,selectedType:x})=>{const[p]=K(a=>[a.customSchemaFlag]),[r,n]=u.useState(null),[i,o]=u.useState(!1);u.useEffect(()=>{(async()=>{if(p){o(!0);try{const f=await Q(),N=["about","schema"],v=f.schemas.filter(y=>!N.includes(y.type)).map(y=>({label:ve(y.type),value:y.type,type:y.type,action:()=>s("setAttribues")}));n(v)}catch(f){console.warn(f)}finally{o(!1)}}else n([...pe,xe])})()},[x,p,s]);const m=a=>{c((a==null?void 0:a.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Be,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(de,{autoFocus:!0,isLoading:i,onSelect:m,options:r})}),e.jsx(t,{children:e.jsx(b,{color:"secondary",disabled:!d,onClick:()=>s("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Be=h(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ee=async(s,d,c)=>{var x,p;if(s.nodeType==="Create custom type"){s.type;try{const r=await A.post("/schema",JSON.stringify(s),{});if(r.error){const{message:n}=r.error;throw new Error(n)}c(s,(x=r==null?void 0:r.data)==null?void 0:x.ref_id),close()}catch(r){let n=T;if(r.status===400){const i=await r.json();n=i.errorCode||(i==null?void 0:i.status)||T}else r instanceof Error&&(n=r.message);throw new Error(n)}}else{const r="node",n={node_data:{...s.node_data},node_type:s.nodeType,name:s.typeName};s.nodeType==="Image"&&(n.node_data={...s.node_data,source_link:s.sourceLink});let i="";await Z(async()=>{const o=await ee.enable();n.pubkey=o==null?void 0:o.pubkey,i=await te()});try{const o=await A.post(`/${r}`,JSON.stringify(n),{Authorization:i});if(o.error){const{message:m}=o.error;throw new Error(m)}c(s,(p=o==null?void 0:o.data)==null?void 0:p.ref_id),close()}catch(o){let m=T;if(o.status===400)try{const a=await o.json();m=a.message||a.errorCode||(a==null?void 0:a.status)||T}catch{m=T}else o instanceof Error&&(m=o.message);throw new Error(m)}}},qe=()=>{const[s,d]=u.useState("sourceType"),{close:c,visible:x}=I("addItem"),{open:p}=I("addType"),[r]=F(l=>[l.setBudget]),n=oe({mode:"onChange"}),{watch:i,setValue:o,reset:m}=n,[a,f]=u.useState(!1),[N,v]=u.useState(""),[y,O]=X(l=>[l.addNewNode,l.setSelectedNode]);u.useEffect(()=>()=>{d("sourceType"),m()},[x,m]);const k=i("nodeType"),P=i("typeName"),D=i("sourceLink"),R=i("type");i("title");const z=()=>{c()},B=l=>{d(l)},U=(l,j)=>{const C=j||`new-id-${Math.random()}`,S=l.nodeType.toLocaleLowerCase(),L={name:l.typeName,type:S,label:l.typeName,node_type:S,id:C,ref_id:C,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...l.sourceLink?{source_link:l.sourceLink}:{}};y(L),O(L)},G=n.handleSubmit(async l=>{f(!0);try{await Ee(l,r,U),ie("Item Added"),z()}catch(j){let C=T;if((j==null?void 0:j.status)===400){const S=await j.json();C=S.errorCode||(S==null?void 0:S.status)||T}else j instanceof Error&&(C=j.message);v(String(C))}finally{f(!1)}}),Y=l=>{l==="Create custom type"?p():o("nodeType",l)},J={sourceType:e.jsx(ke,{allowNextStep:!!k,onSelectType:Y,selectedType:k,skipToStep:B}),source:e.jsx(Ce,{name:P,skipToStep:B,sourceLink:D||"",type:k}),setBudget:e.jsx(me,{loading:a,onClick:()=>null}),createConfirmation:e.jsx(je,{onclose:z,type:R}),setAttribues:e.jsx(we,{nodeType:k,skipToStep:B})},V="small";return e.jsx(re,{id:"addItem",kind:V,onClose:c,preventOutsideClose:!0,children:e.jsx(ne,{...n,children:e.jsx("form",{id:"add-node-form",onSubmit:G,children:J[s]})})})};export{qe as AddItemModal};
