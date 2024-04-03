import{s as u,b as w,F as t,T as b,g as $,r as f,j as e,h as z,k as V,ai as g,v as I,C as q,an as H,e as Y,a5 as Q}from"./index-b289d19f.js";import{aJ as W,B as S,C as X,aK as Z,aH as ee,t as te,e as oe,F as se}from"./react-toastify.esm-4c5c25b4.js";import{B as ne}from"./index-fd5f6c5e.js";import{n as re}from"./toastMessage-07149623.js";import{u as L}from"./index-910cbaf3.js";import{S as ie}from"./index-8901e50e.js";import{h as ae}from"./index.esm-4cc9982e.js";import{C as ce}from"./CheckIcon-655ba42a.js";import{T as M}from"./index-1bb468a5.js";import{A as le}from"./index-7fda5340.js";import{a as de,i as pe}from"./constants-cde8ebc3.js";import"./InfoIcon-05337e3a.js";import"./Popover-07994904.js";import"./useSlotProps-8944b131.js";import"./Select-f232fda7.js";import"./Stack-a8f794e1.js";import"./Popper-8f102aaf.js";const me=({onClick:o,loading:d,error:c})=>{const x=$(i=>i.budget),[p,r]=f.useState(10),n="node";return f.useEffect(()=>{(async()=>{try{const s=await Z(n);r(s.data.price)}catch(s){console.error("cannot fetch",s)}})()},[n]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(he,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(xe,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(fe,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[W(x)," sats"]})]})]}),e.jsx(t,{children:e.jsx(S,{color:"secondary","data-testid":"check-icon",disabled:d||!!c,onClick:o,size:"large",startIcon:d?e.jsx(X,{size:24}):e.jsx(ce,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(ye,{role:"tooltip",children:[e.jsxs(ue,{children:[e.jsx(ae,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},xe=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,fe=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,he=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ue=u(t)`
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
`,ye=u(t)`
  display: flex;
  align-items: center;
  color: ${w.primaryRed};
  position: relative;
  margin-top: 20px;

  .tooltip {
    position: absolute;
    background-color: ${w.black};
    opacity: 0.8;
    border-radius: 4px;
    color: ${w.white};
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
`,ge=({type:o,onclose:d})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(F,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(F,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(S,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(S,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),F=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=({type:o,skipToStep:d,name:c,sourceLink:x})=>{const p=o==="Image"?c&&x:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(je,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(b,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(M,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...z}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(b,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(M,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...z}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(S,{color:"secondary",onClick:()=>d("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(S,{color:"secondary",disabled:!p,onClick:()=>d("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},je=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,be=o=>o.charAt(0).toUpperCase()+o.slice(1),Se=({skipToStep:o,allowNextStep:d,onSelectType:c,selectedType:x})=>{const[p]=V(l=>[l.customSchemaFlag]),[r,n]=f.useState(null),[i,s]=f.useState(!1);f.useEffect(()=>{(async()=>{if(p){s(!0);try{const v=(await ee()).schemas.map(C=>({label:be(C.type),value:C.type,type:C.type}));n(v)}catch(T){console.warn(T)}finally{s(!1)}}else n([...de,pe])})()},[x,p]);const m=l=>{c((l==null?void 0:l.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Te,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(le,{autoFocus:!0,isLoading:i,onSelect:m,options:r})}),e.jsx(t,{children:e.jsx(S,{color:"secondary",disabled:!d,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Te=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ce=async(o,d,c)=>{var x,p;if(o.nodeType==="Create custom type"){o.type;try{const r=await I.post("/schema",JSON.stringify(o),{});if(r.error){const{message:n}=r.error;throw new Error(n)}c(o,(x=r==null?void 0:r.data)==null?void 0:x.ref_id),close()}catch(r){let n=g;if(r.status===400){const i=await r.json();n=i.errorCode||(i==null?void 0:i.status)||g}else r instanceof Error&&(n=r.message);throw new Error(n)}}else{const r="node",n={};n.node_type=o.nodeType,n.name=o.name,o.nodeType==="Image"&&(n.node_data={source_link:o.sourceLink});let i="";await q(async()=>{const s=await Y.enable();n.pubkey=s==null?void 0:s.pubkey,i=await Q()});try{const s=await I.post(`/${r}`,JSON.stringify(n),{Authorization:i});if(s.error){const{message:m}=s.error;throw new Error(m)}c(o,(p=s==null?void 0:s.data)==null?void 0:p.ref_id),re(H),close()}catch(s){let m=g;if(s.status===400)try{const l=await s.json();m=l.message||l.errorCode||(l==null?void 0:l.status)||g}catch{m=g}else s instanceof Error&&(m=s.message);throw new Error(m)}}},Ue=()=>{const[o,d]=f.useState("sourceType"),{close:c,visible:x}=L("addItem"),{open:p}=L("addType"),[r]=$(a=>[a.setBudget]),n=te({mode:"onChange"}),{watch:i,setValue:s,reset:m}=n,[l,T]=f.useState(!1),[v,C]=f.useState(""),[A,_]=oe(a=>[a.addNewNode,a.setSelectedNode]);f.useEffect(()=>()=>{d("sourceType"),m()},[x,m]);const k=i("nodeType"),O=i("name"),P=i("sourceLink"),D=i("type");i("title");const E=()=>{c()},N=a=>{d(a)},R=(a,h)=>{const j=h||`new-id-${Math.random()}`,y=a.nodeType.toLocaleLowerCase(),B={name:a.name,type:y,label:a.name,node_type:y,id:j,ref_id:j,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...a.sourceLink?{source_link:a.sourceLink}:{}};A(B),_(B)},U=n.handleSubmit(async a=>{T(!0);try{await Ce(a,r,R),ie("Item Added"),E()}catch(h){let j=g;if((h==null?void 0:h.status)===400){const y=await h.json();j=y.errorCode||(y==null?void 0:y.status)||g}else h instanceof Error&&(j=h.message);C(String(j))}finally{T(!1)}}),J=a=>{a==="Create custom type"?p():s("nodeType",a)},G={sourceType:e.jsx(Se,{allowNextStep:!!k,onSelectType:J,selectedType:k,skipToStep:N}),source:e.jsx(we,{name:O,skipToStep:N,sourceLink:P||"",type:k}),setBudget:e.jsx(me,{loading:l,onClick:()=>null}),createConfirmation:e.jsx(ge,{onclose:E,type:D})},K="small";return e.jsx(ne,{id:"addItem",kind:K,onClose:c,preventOutsideClose:!0,children:e.jsx(se,{...n,children:e.jsx("form",{id:"add-node-form",onSubmit:U,children:G[o]})})})};export{Ue as AddItemModal};
