import{s as f,c as y,u as L,r as x,j as e,F as t,T as h,b as C,w as R,n as U,ad as V,ae as g,d as G,a2 as q}from"./index-5ae80368.js";import{ao as J,B as j,ap as Y,l as H,u as K,F as Q}from"./react-toastify.esm-3af80b55.js";import{B as W}from"./index-b2b0359c.js";import{n as S}from"./toastMessage-d5a023ae.js";import{u as X}from"./index-26a2bf18.js";import{C as Z}from"./CheckIcon-78faca24.js";import{T as B}from"./index-47c1efd9.js";import{A as ee}from"./index-cde86544.js";import{i as v,O as E}from"./constants-84edb5fc.js";import"./index.esm-2d8a98d7.js";import"./InfoIcon-8316e2b6.js";import"./index-7e3602c9.js";import"./Popover-1b4b5002.js";import"./useSlotProps-e6584029.js";import"./Select-6a7d2b02.js";import"./Stack-1d1f1202.js";import"./Popper-ff6be7e4.js";const te=({onClick:n,loading:a})=>{const d=L(l=>l.budget),[c,m]=x.useState(10),s="node";return x.useEffect(()=>{(async()=>{try{const r=await Y(s);m(r.data.price)}catch(r){console.error("cannot fetch",r)}})()},[s]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(se,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ne,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(oe,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(d)," sats"]})]})]}),e.jsx(t,{children:e.jsx(j,{color:"secondary","data-testid":"check-icon",disabled:a,onClick:n,size:"large",startIcon:e.jsx(Z,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ne=f(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${y.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${y.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${y.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,oe=f(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${y.secondaryText4};
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
`,se=f(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,re=({type:n,onNextStep:a,onPrevStep:d,name:c,sourceLink:m})=>{const s=n==="Image"?c&&m:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ie,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(h,{children:[n," name"]})}),e.jsx(t,{mb:12,children:e.jsx(B,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...C}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(h,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(B,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...C}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(j,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(j,{color:"secondary",disabled:!s,onClick:a,size:"large",variant:"contained",children:"Next"})})]})]})},ie=f(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ae=({onNextStep:n,allowNextStep:a,onSelectType:d,selectedType:c})=>{const[m,s]=x.useState(v);x.useEffect(()=>{s(r=>r.value===c?r:E.find(o=>o.value===c)||v)},[c]);const l=r=>{d((r==null?void 0:r.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ce,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ee,{autoFocus:!0,onSelect:l,options:E,selectedValue:m})}),e.jsx(t,{children:e.jsx(j,{color:"secondary",disabled:!a,onClick:n,size:"large",type:"button",variant:"contained",children:"Next"})})]})},ce=f(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,le=async(n,a,d,c)=>{var r;const m="node",s={};s.node_type=n.nodeType,s.name=n.name,n.nodeType==="Image"&&(s.node_data={source_link:n.sourceLink});let l="";await R(async()=>{const o=await G.enable();s.pubkey=o==null?void 0:o.pubkey,l=await q()});try{const o=await U.post(`/${m}`,JSON.stringify(s),{Authorization:l});if(o.error){const{message:u}=o.error;throw new Error(u)}c(n,(r=o==null?void 0:o.data)==null?void 0:r.ref_id),S(V),a()}catch(o){let u=g;if(o.status===400){const p=await o.json();u=p.errorCode||(p==null?void 0:p.status)||g}else o instanceof Error&&(u=o.message);S(u),a()}},Be=()=>{const[n,a]=x.useState(0),{close:d,visible:c}=X("addItem"),[m]=L(i=>[i.setBudget]),s=H({mode:"onChange"}),{watch:l,setValue:r,reset:o}=s,[u,p]=x.useState(!1),[z,I]=K(i=>[i.addNewNode,i.setSelectedNode]);x.useEffect(()=>()=>{a(0),o()},[c,o]);const w=l("nodeType"),O=l("name"),P=l("sourceLink"),_=()=>{d()},b=()=>{a(n+1)},A=()=>{a(n-1)},D=(i,$)=>{const T=$||`new-id-${Math.random()}`,k=i.nodeType.toLocaleLowerCase(),N={name:i.name,type:k,label:i.name,node_type:k,id:T,ref_id:T,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...i.sourceLink?{source_link:i.sourceLink}:{}};z(N),I(N)},F=s.handleSubmit(async i=>{p(!0);try{await le(i,_,m,D)}catch{S(g)}finally{p(!1)}}),M=i=>r("nodeType",i);return e.jsx(W,{id:"addItem",kind:"small",onClose:d,preventOutsideClose:!0,children:e.jsx(Q,{...s,children:e.jsxs("form",{id:"add-node-form",onSubmit:F,children:[n===0&&e.jsx(ae,{allowNextStep:!!w,onNextStep:b,onSelectType:M,selectedType:w}),n===1&&e.jsx(re,{name:O,onNextStep:b,onPrevStep:A,sourceLink:P||"",type:w}),n===2&&e.jsx(te,{loading:u,onClick:()=>null})]})})})};export{Be as AddItemModal};
