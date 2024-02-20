import{Y as h,a0 as p,a1 as B,r as m,j as e,X as n,Z as u,ab as N,e as R,a as U,aW as V,aF as G,aX as w,d as J,U as X}from"./index-4cfbb823.js";import{cn as Y,bO as y,bJ as q,co as W,ck as C,u as Z,ch as H,aA as K,ca as Q,cj as ee,cp as te}from"./index-3ab49fb6.js";import{n as f}from"./toastMessage-77875e72.js";import{i as v,O as L,A as ne}from"./constants-952c5f38.js";import"./index-6ff5fb44.js";import"./Select-55b74a29.js";const se=({onClick:s,loading:a})=>{const c=B(l=>l.budget),[i,x]=m.useState(10),o="node";return m.useEffect(()=>{(async()=>{try{const t=await W(o);x(t.data.price)}catch(t){console.error("cannot fetch",t)}})()},[o]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(re,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(oe,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[i," sats"]})]}),e.jsxs(ae,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Y(c)," sats"]})]})]}),e.jsx(n,{children:e.jsx(y,{color:"secondary","data-testid":"check-icon",disabled:a,onClick:s,size:"large",startIcon:e.jsx(q,{}),type:"submit",variant:"contained",children:"Approve"})})]})},oe=h(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${p.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${p.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${p.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,ae=h(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${p.secondaryText4};
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
`,re=h(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ie=({type:s,onNextStep:a,onPrevStep:c,name:i,sourceLink:x})=>{const o=s==="Image"?i&&x:i;return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ce,{children:"Enter details"})})}),e.jsx(n,{mb:4,children:e.jsxs(u,{children:[s," name"]})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...N}})}),s==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(n,{mb:4,children:e.jsx(u,{children:"Link"})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...N}})})]}):null,e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(y,{color:"secondary",onClick:c,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(y,{color:"secondary",disabled:!o,onClick:a,size:"large",variant:"contained",children:"Next"})})]})]})},ce=h(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,le=({onNextStep:s,allowNextStep:a,onSelectType:c,selectedType:i})=>{const[x,o]=m.useState(v);m.useEffect(()=>{o(t=>t.value===i?t:L.find(d=>d.value===i)||v)},[i]);const l=t=>{c((t==null?void 0:t.label)||"")};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(de,{children:"Select Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(ne,{onSelect:l,options:L,selectedValue:x})}),e.jsx(n,{children:e.jsx(y,{color:"secondary",disabled:!a,onClick:s,size:"large",type:"button",variant:"contained",children:"Next"})})]})},de=h(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,E=async(s,a,c,i)=>{const x="node",o={};o.node_type=s.nodeType,o.name=s.name,s.nodeType==="Image"&&(o.node_data={source_link:s.sourceLink});let l="";await R(async()=>{const t=await J.enable();o.pubkey=t==null?void 0:t.pubkey,l=await X()});try{const t=await U.post(`/${x}`,JSON.stringify(o),{Authorization:l});if(t.error){const{message:d}=t.error;throw new Error(d)}i(s),f(V),a()}catch(t){if(t.status===402&&(await te(c),await G(c),await E(s,a,c,i)),t.status===400){const d=await t.json();f((d==null?void 0:d.status)||w),a()}t instanceof Error&&(f(t.message||w),a())}},ye=()=>{const[s,a]=m.useState(0),{close:c,visible:i}=Z("addItem"),[x]=B(r=>[r.setBudget]),o=H({mode:"onChange"}),{watch:l,setValue:t,reset:d}=o,[z,g]=m.useState(!1),[I,O]=K(r=>[r.addNewNode,r.setSelectedNode]);m.useEffect(()=>()=>{a(0),d()},[i,d]);const j=l("nodeType"),P=l("name"),A=l("sourceLink"),_=()=>{c()},b=()=>{a(s+1)},D=()=>{a(s-1)},$=r=>{const S=`new-id-${Math.random()}`,k=r.nodeType.toLocaleLowerCase(),T={name:r.name,type:k,label:r.name,node_type:k,id:S,ref_id:S,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...r.sourceLink?{source_link:r.sourceLink}:{}};I(T),O(T)},F=o.handleSubmit(async r=>{g(!0);try{await E(r,_,x,$)}catch{f(w)}finally{g(!1)}}),M=r=>t("nodeType",r);return e.jsx(Q,{id:"addItem",kind:"small",onClose:c,preventOutsideClose:!0,children:e.jsx(ee,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:F,children:[s===0&&e.jsx(le,{allowNextStep:!!j,onNextStep:b,onSelectType:M,selectedType:j}),s===1&&e.jsx(ie,{name:P,onNextStep:b,onPrevStep:D,sourceLink:A||"",type:j}),s===2&&e.jsx(se,{loading:z,onClick:()=>null})]})})})};export{ye as AddItemModal};
