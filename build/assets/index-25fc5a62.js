import{s as h,b as f,g as z,r as m,j as e,F as o,T as u,h as k,B as V,v as q,aQ as J,q as Q,ai as S,e as Y,a4 as H}from"./index-5fb1066b.js";import{az as K,B as w,aA as W,o as X,F as Z,aB as ee}from"./react-toastify.esm-74a6e79d.js";import{B as te}from"./index-336ec8a7.js";import{n as y}from"./toastMessage-9ee55ee8.js";import{a as C}from"./index-99aacf27.js";import{u as oe}from"./index-8c752204.js";import{C as ne}from"./CheckIcon-c6306821.js";import{T as B}from"./index-9bd962af.js";import{A as se}from"./index-3e388da8.js";import"./index.esm-a4700a64.js";import"./InfoIcon-3763223f.js";import"./index-b87a6c6a.js";import"./Popover-6a0988bf.js";import"./useSlotProps-4cfb1cc9.js";import"./Select-c279e03a.js";import"./Stack-5d503865.js";import"./Popper-03cceb62.js";const re=({onClick:n,loading:a})=>{const i=z(l=>l.budget),[c,p]=m.useState(10),r="node";return m.useEffect(()=>{(async()=>{try{const t=await W(r);p(t.data.price)}catch(t){console.error("cannot fetch",t)}})()},[r]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(ce,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ae,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(ie,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[K(i)," sats"]})]})]}),e.jsx(o,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:a,onClick:n,size:"large",startIcon:e.jsx(ne,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ae=h(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ie=h(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ce=h(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,le=({type:n,onNextStep:a,onPrevStep:i,name:c,sourceLink:p})=>{const r=n==="Image"?c&&p:c;return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(de,{children:"Enter details"})})}),e.jsx(o,{mb:4,children:e.jsxs(u,{children:[n," name"]})}),e.jsx(o,{mb:12,children:e.jsx(B,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...k}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(o,{mb:4,children:e.jsx(u,{children:"Link"})}),e.jsx(o,{mb:12,children:e.jsx(B,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...k}})})]}):null,e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(w,{color:"secondary",onClick:i,size:"large",variant:"contained",children:"Prev"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!r,onClick:a,size:"large",variant:"contained",children:"Next"})})]})]})},de=h(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,T={label:"Not selected",value:""},_=[{label:"Corporation",value:"Corporation",type:"Topic"},{label:"Event",value:"Event",type:"Topic"},{label:"Image",value:"Image",type:"Topic"},{label:"Organization",value:"Organization",type:"Topic"},{label:"Person",value:"Person",type:"Topic"},{label:"Place",value:"Place",type:"Topic"},{label:"Project",value:"Project",type:"blue"},{label:"Software",value:"Software",type:"blue"},{label:"Topic",value:"Topic",type:"blue"},T],pe=({onNextStep:n,allowNextStep:a,onSelectType:i,selectedType:c})=>{const[p,r]=m.useState(T);m.useEffect(()=>{r(t=>t.value===c?t:_.find(d=>d.value===c)||T)},[c]);const l=t=>{i((t==null?void 0:t.label)||"")};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(me,{children:"Select Type"})})}),e.jsx(o,{direction:"row",mb:20,children:e.jsx(se,{onSelect:l,options:_,selectedValue:p})}),e.jsx(o,{children:e.jsx(w,{color:"secondary",disabled:!a,onClick:n,size:"large",type:"button",variant:"contained",children:"Next"})})]})},me=h(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,I=async(n,a,i,c)=>{const p="node",r={};r.node_type=n.nodeType,r.name=n.name,n.nodeType==="Image"&&(r.node_data={source_link:n.sourceLink});let l="";await V(async()=>{const t=await Y.enable();r.pubkey=t==null?void 0:t.pubkey,l=await H()});try{const t=await q.post(`/${p}`,JSON.stringify(r),{Authorization:l});if(t.error){const{message:d}=t.error;throw new Error(d)}c(n),y(J),a()}catch(t){if(t.status===402&&(await ee(i),await Q(i),await I(n,a,i,c)),t.status===400){const d=await t.json();y((d==null?void 0:d.status)||S),a()}t instanceof Error&&(y(t.message||S),a())}},ze=()=>{const[n,a]=m.useState(0),{close:i,visible:c}=oe("addItem"),[p]=z(s=>[s.setBudget]),r=X({mode:"onChange"}),{watch:l,setValue:t,reset:d}=r,[P,v]=m.useState(!1),[E,L]=C(s=>[s.addNewNode,s.setSelectedNode]),[M]=C(s=>[s.addNewNode]);m.useEffect(()=>()=>{a(0),d()},[c,d]);const j=l("nodeType"),O=l("name"),A=l("sourceLink"),D=()=>{i()},N=()=>{a(n+1)},F=()=>{a(n-1)},$=s=>{const g=`new-id-${Math.random()}`,b=s.nodeType.toLocaleLowerCase(),x={name:s.name,node_type:b,ref_id:g,x:Math.random(),y:Math.random(),z:Math.random(),date_added_to_graph:parseInt((new Date().getTime()/1e3).toFixed(0),10)};E(x),L(x),i()},R=s=>{const g=`new-id-${Math.random()}`,b=s.nodeType,x={ref_id:g,node_type:b,properties:{topic:s.name||"",date_added_to_graph:parseInt((new Date().getTime()/1e3).toFixed(0),10),...s.sourceLink?{source_link:s.sourceLink}:{}},x:Math.random()*1e3,y:Math.random()*1e3,z:Math.random()*1e3};M(x),i()},G=r.handleSubmit(async s=>{R(s);return;try{await I(s,D,p,$)}catch{y(S)}finally{v(!1)}}),U=s=>t("nodeType",s);return e.jsx(te,{id:"addItem",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(Z,{...r,children:e.jsxs("form",{id:"add-node-form",onSubmit:G,children:[n===0&&e.jsx(pe,{allowNextStep:!!j,onNextStep:N,onSelectType:U,selectedType:j}),n===1&&e.jsx(le,{name:O,onNextStep:N,onPrevStep:F,sourceLink:A||"",type:j}),n===2&&e.jsx(re,{loading:P,onClick:()=>null})]})})})};export{ze as AddItemModal};
