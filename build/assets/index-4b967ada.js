import{f as u,h as g,F as t,T as S,x as $,r as f,j as e,bb as q,bc as W,C as B,b3 as H,I as K,b5 as Q,i as X,b4 as N,U as _,bg as Z,o as ee,be as te}from"./index-44236261.js";import{B as T,C as M,i as se,c as oe,F as ne}from"./react-toastify.esm-6fa51cf6.js";import{B as re}from"./index-1b6390ff.js";import{u as I}from"./index-00f176fd.js";import{S as ie}from"./index-7273d4a8.js";import{h as ae}from"./index.esm-aaf3f4f3.js";import{C as ce}from"./CheckIcon-e077b2b5.js";import{T as E}from"./index-57a0a997.js";import{p as le}from"./index-30d16895.js";import{A as de}from"./index-3f7f1ee0.js";import{a as pe,i as xe}from"./constants-cde8ebc3.js";import"./InfoIcon-387675be.js";import"./Popover-2e9942df.js";import"./useSlotProps-6641d2c4.js";import"./Select-9d6559c3.js";import"./Stack-8902592c.js";import"./Popper-8365a5e1.js";const me=({onClick:s,loading:p,error:a})=>{const m=$(i=>i.budget),[c,n]=f.useState(10),r="node";return f.useEffect(()=>{(async()=>{try{const h=await W(r);n(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[r]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ue,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(he,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(fe,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[q(m)," sats"]})]})]}),e.jsx(t,{children:e.jsx(T,{color:"secondary","data-testid":"check-icon",disabled:p||!!a,onClick:s,size:"large",startIcon:p?e.jsx(M,{size:24}):e.jsx(ce,{}),type:"submit",variant:"contained",children:"Approve"})}),a?e.jsxs(ge,{role:"tooltip",children:[e.jsxs(ye,{children:[e.jsx(ae,{fontSize:13}),e.jsx("span",{children:a})]}),e.jsx("div",{className:"tooltip",children:a})]}):null]})},he=u(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ue=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ye=u(t)`
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
`,ge=u(t)`
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
`,je=({type:s,onclose:p})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(F,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(F,{children:["Type: ",s]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:p,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),F=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=({skipToStep:s,nodeType:p})=>{const[a,m]=f.useState(!1),[c,n]=f.useState(),{watch:r,formState:{isValid:i}}=se();f.useEffect(()=>{(async()=>{m(!0);const x=await H(p),o=le(x);n(o),m(!1)})()},[p,r]);const h=l=>l.charAt(0).toUpperCase()+l.slice(1).replace(/_/g," ");return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(be,{children:"Set Attributes"})})}),e.jsx(Se,{children:a?e.jsx(t,{style:{margin:"auto"},children:e.jsx(M,{color:g.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:c==null?void 0:c.map(({key:l,required:x})=>e.jsx(e.Fragment,{children:e.jsxs(Te,{children:[e.jsx(S,{children:h(l)}),e.jsx(E,{id:"item-name",name:l,placeholder:x?"Required":"Optional",rules:{...x?B:{}}})]})}))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>s("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!i||a||(c==null?void 0:c.some(l=>l.required&&!r(l.key))),onClick:()=>s("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},be=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=u(t)`
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
`,Te=u(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${g.GRAY7};
    -webkit-text-fill-color: ${g.GRAY7};
  }
`,Ce=({type:s,skipToStep:p,name:a,sourceLink:m})=>{const c=s==="Image"?a&&m:a;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ne,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(S,{children:[s," name"]})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...B}})}),s==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(S,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(E,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...B}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>p("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!c,onClick:()=>p("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Ne=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ke=s=>s.charAt(0).toUpperCase()+s.slice(1),ve=({skipToStep:s,allowNextStep:p,onSelectType:a,selectedType:m})=>{const[c]=K(x=>[x.customSchemaFlag]),[n,r]=f.useState(null),[i,h]=f.useState(!1);f.useEffect(()=>{(async()=>{if(c){h(!0);try{const o=await Q(),j=["about","schema"],y=o.schemas.filter(w=>!j.includes(w.type)&&!w.is_deleted).map(w=>({label:ke(w.type),value:w.type,type:w.type,action:()=>s("setAttribues")}));r(y)}catch(o){console.warn(o)}finally{h(!1)}}else r([...pe,xe])})()},[m,c,s]);const l=x=>{a((x==null?void 0:x.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ze,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(de,{autoFocus:!0,isLoading:i,onSelect:l,options:n})}),e.jsx(t,{children:e.jsx(T,{color:"secondary",disabled:!p,onClick:()=>s("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},ze=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Be=async(s,p,a)=>{var m,c;if(s.nodeType==="Create custom type"){s.type;try{const n=await _.post("/schema",JSON.stringify(s),{});if(n.error){const{message:r}=n.error;throw new Error(r)}a(s,(m=n==null?void 0:n.data)==null?void 0:m.ref_id),close()}catch(n){let r=N;if(n.status===400){const i=await n.json();r=i.errorCode||(i==null?void 0:i.status)||N}else n instanceof Error&&(r=n.message);throw new Error(r)}}else{const n="node",{nodeType:r,typeName:i,...h}=s,l={node_data:{...h},node_type:r,name:i};s.nodeType==="Image"&&(l.node_data={...s.node_data,source_link:s.sourceLink});let x="";await Z(async()=>{const o=await ee.enable();l.pubkey=o==null?void 0:o.pubkey,x=await te()});try{const o=await _.post(`/${n}`,JSON.stringify(l),{Authorization:x});if(o.error){const{message:j}=o.error;throw new Error(j)}a(s,(c=o==null?void 0:o.data)==null?void 0:c.ref_id),close()}catch(o){let j=N;if(o.status===400)try{const y=await o.json();j=y.message||y.errorCode||(y==null?void 0:y.status)||N}catch{j=N}else o instanceof Error&&(j=o.message);throw new Error(j)}}},qe=()=>{const[s,p]=f.useState("sourceType"),{close:a,visible:m}=I("addItem"),{open:c}=I("addType"),[n]=$(d=>[d.setBudget]),r=oe({mode:"onChange"}),{watch:i,setValue:h,reset:l}=r,[x,o]=f.useState(!1),[j,y]=f.useState(""),[w,O]=X(d=>[d.addNewNode,d.setSelectedNode]);f.useEffect(()=>()=>{p("sourceType"),l()},[m,l]);const v=i("nodeType"),P=i("typeName"),D=i("sourceLink"),R=i("type");i("title");const A=()=>{a()},z=d=>{p(d)},U=(d,b)=>{const k=b||`new-id-${Math.random()}`,C=d.nodeType.toLocaleLowerCase(),L={name:d.typeName,type:C,label:d.typeName,node_type:C,id:k,ref_id:k,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...d.sourceLink?{source_link:d.sourceLink}:{}};w(L),O(L)},G=r.handleSubmit(async d=>{o(!0);try{await Be(d,n,U),ie("Item Added"),A()}catch(b){let k=N;if((b==null?void 0:b.status)===400){const C=await b.json();k=C.errorCode||(C==null?void 0:C.status)||N}else b instanceof Error&&(k=b.message);y(String(k))}finally{o(!1)}}),Y=d=>{d==="Create custom type"?c():h("nodeType",d)},J={sourceType:e.jsx(ve,{allowNextStep:!!v,onSelectType:Y,selectedType:v,skipToStep:z}),source:e.jsx(Ce,{name:P,skipToStep:z,sourceLink:D||"",type:v}),setBudget:e.jsx(me,{loading:x,onClick:()=>null}),createConfirmation:e.jsx(je,{onclose:A,type:R}),setAttribues:e.jsx(we,{nodeType:v,skipToStep:z})},V="small";return e.jsx(re,{id:"addItem",kind:V,onClose:a,preventOutsideClose:!0,children:e.jsx(ne,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:G,children:J[s]})})})};export{qe as AddItemModal};
