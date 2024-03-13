import{s as f,c as y,u as z,r as p,j as e,F as t,T as h,b as N,x as R,o as U,ad as V,ae as g,d as G,a2 as q}from"./index-e90126f3.js";import{ak as J,B as j,al as Y,l as H,u as K,F as Q}from"./react-toastify.esm-22f05de4.js";import{B as W}from"./index-81d4583b.js";import{n as S}from"./toastMessage-e329366a.js";import{u as X}from"./index-f78eda89.js";import{C as Z}from"./CheckIcon-1d361e8e.js";import{C as ee}from"./ClipLoader-805cbf79.js";import{T as B}from"./index-5147f614.js";import{A as te}from"./index-58c815b4.js";import{i as v,O as L}from"./constants-84edb5fc.js";import"./index.esm-0d3f0902.js";import"./InfoIcon-37b7ba25.js";import"./index-43c2b4f5.js";import"./Popover-7cee3222.js";import"./useSlotProps-45e36f47.js";import"./Select-31a37e50.js";import"./Stack-d3e9c50f.js";import"./Popper-20cbe04d.js";const ne=({onClick:n,loading:a})=>{const d=z(l=>l.budget),[c,m]=p.useState(10),s="node";return p.useEffect(()=>{(async()=>{try{const r=await Y(s);m(r.data.price)}catch(r){console.error("cannot fetch",r)}})()},[s]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(re,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(oe,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(se,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(d)," sats"]})]})]}),e.jsx(t,{children:e.jsx(j,{color:"secondary","data-testid":"check-icon",disabled:a,onClick:n,size:"large",startIcon:a?e.jsx(ee,{size:24}):e.jsx(Z,{}),type:"submit",variant:"contained",children:"Approve"})})]})},oe=f(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,se=f(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,re=f(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ie=({type:n,onNextStep:a,onPrevStep:d,name:c,sourceLink:m})=>{const s=n==="Image"?c&&m:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ae,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(h,{children:[n," name"]})}),e.jsx(t,{mb:12,children:e.jsx(B,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...N}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(h,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(B,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...N}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(j,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(j,{color:"secondary",disabled:!s,onClick:a,size:"large",variant:"contained",children:"Next"})})]})]})},ae=f(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ce=({onNextStep:n,allowNextStep:a,onSelectType:d,selectedType:c})=>{const[m,s]=p.useState(v);p.useEffect(()=>{s(r=>r.value===c?r:L.find(o=>o.value===c)||v)},[c]);const l=r=>{d((r==null?void 0:r.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(le,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(te,{autoFocus:!0,onSelect:l,options:L,selectedValue:m})}),e.jsx(t,{children:e.jsx(j,{color:"secondary",disabled:!a,onClick:n,size:"large",type:"button",variant:"contained",children:"Next"})})]})},le=f(h)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,de=async(n,a,d,c)=>{var r;const m="node",s={};s.node_type=n.nodeType,s.name=n.name,n.nodeType==="Image"&&(s.node_data={source_link:n.sourceLink});let l="";await R(async()=>{const o=await G.enable();s.pubkey=o==null?void 0:o.pubkey,l=await q()});try{const o=await U.post(`/${m}`,JSON.stringify(s),{Authorization:l});if(o.error){const{message:u}=o.error;throw new Error(u)}c(n,(r=o==null?void 0:o.data)==null?void 0:r.ref_id),S(V),a()}catch(o){let u=g;if(o.status===400){const x=await o.json();u=x.errorCode||(x==null?void 0:x.status)||g}else o instanceof Error&&(u=o.message);S(u),a()}},Le=()=>{const[n,a]=p.useState(0),{close:d,visible:c}=X("addItem"),[m]=z(i=>[i.setBudget]),s=H({mode:"onChange"}),{watch:l,setValue:r,reset:o}=s,[u,x]=p.useState(!1),[E,I]=K(i=>[i.addNewNode,i.setSelectedNode]);p.useEffect(()=>()=>{a(0),o()},[c,o]);const w=l("nodeType"),O=l("name"),P=l("sourceLink"),_=()=>{d()},b=()=>{a(n+1)},A=()=>{a(n-1)},D=(i,$)=>{const k=$||`new-id-${Math.random()}`,T=i.nodeType.toLocaleLowerCase(),C={name:i.name,type:T,label:i.name,node_type:T,id:k,ref_id:k,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...i.sourceLink?{source_link:i.sourceLink}:{}};E(C),I(C)},F=s.handleSubmit(async i=>{x(!0);try{await de(i,_,m,D)}catch{S(g)}finally{x(!1)}}),M=i=>r("nodeType",i);return e.jsx(W,{id:"addItem",kind:"small",onClose:d,preventOutsideClose:!0,children:e.jsx(Q,{...s,children:e.jsxs("form",{id:"add-node-form",onSubmit:F,children:[n===0&&e.jsx(ce,{allowNextStep:!!w,onNextStep:b,onSelectType:M,selectedType:w}),n===1&&e.jsx(ie,{name:O,onNextStep:b,onPrevStep:A,sourceLink:P||"",type:w}),n===2&&e.jsx(ne,{loading:u,onClick:()=>null})]})})})};export{Le as AddItemModal};
