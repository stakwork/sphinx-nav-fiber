import{s as u,b as g,F as t,T as b,g as $,r as f,j as e,h as z,k as V,ai as j,v as I,C as q,an as H,e as Y,a5 as Q}from"./index-49119fea.js";import{aJ as W,B as S,C as X,aK as Z,aH as ee,t as te,e as oe,F as se}from"./react-toastify.esm-cab56736.js";import{B as ne}from"./index-9783c4d9.js";import{n as re}from"./toastMessage-35a4aa1b.js";import{u as L}from"./index-3098c379.js";import{S as ie}from"./index-f2319d17.js";import{h as ae}from"./index.esm-abe4cb74.js";import{C as ce}from"./CheckIcon-e550fde8.js";import{T as M}from"./index-b4e4a884.js";import{A as le}from"./index-ca8924d3.js";import{a as de,i as pe}from"./constants-cde8ebc3.js";import"./InfoIcon-49f77bdb.js";import"./index-e23be030.js";import"./Popover-228af3d8.js";import"./useSlotProps-e5ef1c74.js";import"./Select-453947c0.js";import"./Stack-cfe9c89f.js";import"./Popper-9af1d197.js";const me=({onClick:o,loading:l,error:c})=>{const m=$(i=>i.budget),[p,r]=f.useState(10),n="node";return f.useEffect(()=>{(async()=>{try{const s=await Z(n);r(s.data.price)}catch(s){console.error("cannot fetch",s)}})()},[n]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(he,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(xe,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(fe,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[W(m)," sats"]})]})]}),e.jsx(t,{children:e.jsx(S,{color:"secondary","data-testid":"check-icon",disabled:l||!!c,onClick:o,size:"large",startIcon:l?e.jsx(X,{size:24}):e.jsx(ce,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(ye,{role:"tooltip",children:[e.jsxs(ue,{children:[e.jsx(ae,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},xe=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,fe=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ge=({type:o,onclose:l})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(F,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(F,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(S,{color:"secondary",onClick:l,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(S,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),F=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=({type:o,skipToStep:l,name:c,sourceLink:m})=>{const p=o==="Image"?c&&m:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(je,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(b,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(M,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...z}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(b,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(M,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...z}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(S,{color:"secondary",onClick:()=>l("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(S,{color:"secondary",disabled:!p,onClick:()=>l("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},je=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,be=o=>o.charAt(0).toUpperCase()+o.slice(1),Se=({skipToStep:o,allowNextStep:l,onSelectType:c,selectedType:m})=>{const[p]=V(d=>[d.customSchemaFlag]),[r,n]=f.useState(null),[i,s]=f.useState(!1);f.useEffect(()=>{(async()=>{if(p){s(!0);try{const v=(await ee()).schemas.map(C=>({label:be(C.type),value:C.type,type:C.type}));n(v)}catch(T){console.warn(T)}finally{s(!1)}}else n([...de,pe])})()},[m,p]);const x=d=>{c((d==null?void 0:d.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Te,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(le,{autoFocus:!0,isLoading:i,onSelect:x,options:r})}),e.jsx(t,{children:e.jsx(S,{color:"secondary",disabled:!l,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Te=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ce=async(o,l,c)=>{var m,p;if(o.nodeType==="Create custom type"){o.type;try{const r=await I.post("/schema",JSON.stringify(o),{});if(r.error){const{message:n}=r.error;throw new Error(n)}c(o,(m=r==null?void 0:r.data)==null?void 0:m.ref_id),close()}catch(r){let n=j;if(r.status===400){const i=await r.json();n=i.errorCode||(i==null?void 0:i.status)||j}else r instanceof Error&&(n=r.message);throw new Error(n)}}else{const r="node",n={};n.node_type=o.nodeType,n.name=o.name,o.nodeType==="Image"&&(n.node_data={source_link:o.sourceLink});let i="";await q(async()=>{const s=await Y.enable();n.pubkey=s==null?void 0:s.pubkey,i=await Q()});try{const s=await I.post(`/${r}`,JSON.stringify(n),{Authorization:i});if(s.error){const{message:x}=s.error;throw new Error(x)}c(o,(p=s==null?void 0:s.data)==null?void 0:p.ref_id),re(H),close()}catch(s){let x=j;if(s.status===400){const d=await s.json();x=d.errorCode||(d==null?void 0:d.status)||j}else s instanceof Error&&(x=s.message);throw new Error(x)}}},Je=()=>{const[o,l]=f.useState("sourceType"),{close:c,visible:m}=L("addItem"),{open:p}=L("addType"),[r]=$(a=>[a.setBudget]),n=te({mode:"onChange"}),{watch:i,setValue:s,reset:x}=n,[d,T]=f.useState(!1),[v,C]=f.useState(""),[A,_]=oe(a=>[a.addNewNode,a.setSelectedNode]);f.useEffect(()=>()=>{l("sourceType"),x()},[m,x]);const k=i("nodeType"),O=i("name"),P=i("sourceLink"),D=i("type");i("title");const N=()=>{c()},B=a=>{l(a)},R=(a,h)=>{const w=h||`new-id-${Math.random()}`,y=a.nodeType.toLocaleLowerCase(),E={name:a.name,type:y,label:a.name,node_type:y,id:w,ref_id:w,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...a.sourceLink?{source_link:a.sourceLink}:{}};A(E),_(E)},U=n.handleSubmit(async a=>{T(!0);try{await Ce(a,r,R),ie("Item Added"),N()}catch(h){let w=j;if((h==null?void 0:h.status)===400){const y=await h.json();w=y.errorCode||(y==null?void 0:y.status)||j}else h instanceof Error&&(w=h.message);C(String(w))}finally{T(!1)}}),J=a=>{a==="Create custom type"?p():s("nodeType",a)},G={sourceType:e.jsx(Se,{allowNextStep:!!k,onSelectType:J,selectedType:k,skipToStep:B}),source:e.jsx(we,{name:O,skipToStep:B,sourceLink:P||"",type:k}),setBudget:e.jsx(me,{loading:d,onClick:()=>null}),createConfirmation:e.jsx(ge,{onclose:N,type:D})},K="small";return e.jsx(ne,{id:"addItem",kind:K,onClose:c,preventOutsideClose:!0,children:e.jsx(se,{...n,children:e.jsx("form",{id:"add-node-form",onSubmit:U,children:G[o]})})})};export{Je as AddItemModal};
