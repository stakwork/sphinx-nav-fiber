import{Y as p,a0 as f,a1 as E,r as u,j as e,X as t,Z as h,ab as C,e as U,a as V,aW as G,aF as J,aX as g,d as X,U as Y}from"./index-4a8044f4.js";import{cn as q,bO as j,bJ as W,co as Z,ck as v,u as H,ch as K,aA as Q,ca as ee,cj as te,cp as ne}from"./index-df253cde.js";import{n as y}from"./toastMessage-f33e6dbc.js";import{i as L,O as B,A as se}from"./constants-98946a50.js";import"./index-a7e970e7.js";import"./Select-21ed12bc.js";const oe=({onClick:n,loading:i})=>{const l=E(d=>d.budget),[c,x]=u.useState(10),o="node";return u.useEffect(()=>{(async()=>{try{const a=await Z(o);x(a.data.price)}catch(a){console.error("cannot fetch",a)}})()},[o]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(re,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ae,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(ie,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[q(l)," sats"]})]})]}),e.jsx(t,{children:e.jsx(j,{color:"secondary","data-testid":"check-icon",disabled:i,onClick:n,size:"large",startIcon:e.jsx(W,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ae=p(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${f.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${f.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${f.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,ie=p(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${f.secondaryText4};
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
`,re=p(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ce=({type:n,onNextStep:i,onPrevStep:l,name:c,sourceLink:x})=>{const o=n==="Image"?c&&x:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(le,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(h,{children:[n," name"]})}),e.jsx(t,{mb:12,children:e.jsx(v,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...C}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(h,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(v,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...C}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(j,{color:"secondary",onClick:l,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(j,{color:"secondary",disabled:!o,onClick:i,size:"large",variant:"contained",children:"Next"})})]})]})},le=p(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,de=({onNextStep:n,allowNextStep:i,onSelectType:l,selectedType:c})=>{const[x,o]=u.useState(L);u.useEffect(()=>{o(a=>a.value===c?a:B.find(s=>s.value===c)||L)},[c]);const d=a=>{l((a==null?void 0:a.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(xe,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(se,{onSelect:d,options:B,selectedValue:x})}),e.jsx(t,{children:e.jsx(j,{color:"secondary",disabled:!i,onClick:n,size:"large",type:"button",variant:"contained",children:"Next"})})]})},xe=p(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z=async(n,i,l,c)=>{var a;const x="node",o={};o.node_type=n.nodeType,o.name=n.name,n.nodeType==="Image"&&(o.node_data={source_link:n.sourceLink});let d="";await U(async()=>{const s=await X.enable();o.pubkey=s==null?void 0:s.pubkey,d=await Y()});try{const s=await V.post(`/${x}`,JSON.stringify(o),{Authorization:d});if(s.error){const{message:m}=s.error;throw new Error(m)}c(n,(a=s==null?void 0:s.data)==null?void 0:a.ref_id),y(G),i()}catch(s){if(s.status===402&&(await ne(l),await J(l),await z(n,i,l,c)),s.status===400){const m=await s.json();y((m==null?void 0:m.status)||g),i()}s instanceof Error&&(y(s.message||g),i())}},je=()=>{const[n,i]=u.useState(0),{close:l,visible:c}=H("addItem"),[x]=E(r=>[r.setBudget]),o=K({mode:"onChange"}),{watch:d,setValue:a,reset:s}=o,[m,b]=u.useState(!1),[I,O]=Q(r=>[r.addNewNode,r.setSelectedNode]);u.useEffect(()=>()=>{i(0),s()},[c,s]);const w=d("nodeType"),P=d("name"),_=d("sourceLink"),A=()=>{l()},S=()=>{i(n+1)},D=()=>{i(n-1)},$=(r,R)=>{const k=R||`new-id-${Math.random()}`,T=r.nodeType.toLocaleLowerCase(),N={name:r.name,type:T,label:r.name,node_type:T,id:k,ref_id:k,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...r.sourceLink?{source_link:r.sourceLink}:{}};I(N),O(N)},F=o.handleSubmit(async r=>{b(!0);try{await z(r,A,x,$)}catch{y(g)}finally{b(!1)}}),M=r=>a("nodeType",r);return e.jsx(ee,{id:"addItem",kind:"small",onClose:l,preventOutsideClose:!0,children:e.jsx(te,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:F,children:[n===0&&e.jsx(de,{allowNextStep:!!w,onNextStep:S,onSelectType:M,selectedType:w}),n===1&&e.jsx(ce,{name:P,onNextStep:S,onPrevStep:D,sourceLink:_||"",type:w}),n===2&&e.jsx(oe,{loading:m,onClick:()=>null})]})})})};export{je as AddItemModal};
