import{Y as p,a0 as f,a1 as E,r as u,j as e,X as n,Z as h,ab as N,e as R,a as U,aW as V,aX as L,d as G,U as J}from"./index-b639b6f9.js";import{cn as X,bO as y,bJ as Y,co as q,ck as C,u as W,ch as Z,aA as H,ca as K,cj as Q}from"./index-06aeb711.js";import{n as w}from"./toastMessage-5eb83970.js";import{i as v,O as B,A as ee}from"./constants-b28599d8.js";import"./index-56950d92.js";import"./Select-631e4391.js";const te=({onClick:s,loading:i})=>{const d=E(l=>l.budget),[c,m]=u.useState(10),o="node";return u.useEffect(()=>{(async()=>{try{const r=await q(o);m(r.data.price)}catch(r){console.error("cannot fetch",r)}})()},[o]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(oe,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ne,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(se,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[X(d)," sats"]})]})]}),e.jsx(n,{children:e.jsx(y,{color:"secondary","data-testid":"check-icon",disabled:i,onClick:s,size:"large",startIcon:e.jsx(Y,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ne=p(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,se=p(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,oe=p(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,re=({type:s,onNextStep:i,onPrevStep:d,name:c,sourceLink:m})=>{const o=s==="Image"?c&&m:c;return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ae,{children:"Enter details"})})}),e.jsx(n,{mb:4,children:e.jsxs(h,{children:[s," name"]})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...N}})}),s==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(n,{mb:4,children:e.jsx(h,{children:"Link"})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...N}})})]}):null,e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(y,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(y,{color:"secondary",disabled:!o,onClick:i,size:"large",variant:"contained",children:"Next"})})]})]})},ae=p(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ie=({onNextStep:s,allowNextStep:i,onSelectType:d,selectedType:c})=>{const[m,o]=u.useState(v);u.useEffect(()=>{o(r=>r.value===c?r:B.find(t=>t.value===c)||v)},[c]);const l=r=>{d((r==null?void 0:r.label)||"")};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ce,{children:"Select Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(ee,{onSelect:l,options:B,selectedValue:m})}),e.jsx(n,{children:e.jsx(y,{color:"secondary",disabled:!i,onClick:s,size:"large",type:"button",variant:"contained",children:"Next"})})]})},ce=p(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,le=async(s,i,d,c)=>{var r;const m="node",o={};o.node_type=s.nodeType,o.name=s.name,s.nodeType==="Image"&&(o.node_data={source_link:s.sourceLink});let l="";await R(async()=>{const t=await G.enable();o.pubkey=t==null?void 0:t.pubkey,l=await J()});try{const t=await U.post(`/${m}`,JSON.stringify(o),{Authorization:l});if(t.error){const{message:x}=t.error;throw new Error(x)}c(s,(r=t==null?void 0:t.data)==null?void 0:r.ref_id),w(V),i()}catch(t){let x=L;t!=null&&t.response&&t.response.data&&t.response.data.message?x=t.response.data.message:t instanceof Error&&(x=t.message),w(x),i()}},fe=()=>{const[s,i]=u.useState(0),{close:d,visible:c}=W("addItem"),[m]=E(a=>[a.setBudget]),o=Z({mode:"onChange"}),{watch:l,setValue:r,reset:t}=o,[x,g]=u.useState(!1),[z,I]=H(a=>[a.addNewNode,a.setSelectedNode]);u.useEffect(()=>()=>{i(0),t()},[c,t]);const j=l("nodeType"),O=l("name"),A=l("sourceLink"),P=()=>{d()},b=()=>{i(s+1)},_=()=>{i(s-1)},D=(a,F)=>{const S=F||`new-id-${Math.random()}`,k=a.nodeType.toLocaleLowerCase(),T={name:a.name,type:k,label:a.name,node_type:k,id:S,ref_id:S,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...a.sourceLink?{source_link:a.sourceLink}:{}};z(T),I(T)},M=o.handleSubmit(async a=>{g(!0);try{await le(a,P,m,D)}catch{w(L)}finally{g(!1)}}),$=a=>r("nodeType",a);return e.jsx(K,{id:"addItem",kind:"small",onClose:d,preventOutsideClose:!0,children:e.jsx(Q,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:M,children:[s===0&&e.jsx(ie,{allowNextStep:!!j,onNextStep:b,onSelectType:$,selectedType:j}),s===1&&e.jsx(re,{name:O,onNextStep:b,onPrevStep:_,sourceLink:A||"",type:j}),s===2&&e.jsx(te,{loading:x,onClick:()=>null})]})})})};export{fe as AddItemModal};
