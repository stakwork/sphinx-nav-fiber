import{f as x,h as f,x as I,r as p,j as e,F as o,ba as G,T as u,bb as U,C as v,b3 as V,bf as q,U as J,be as Y,O as H,o as K,bd as Q}from"./index-5ef49d62.js";import{B as y,c as W,F as X}from"./react-toastify.esm-aa1b4299.js";import{B as Z}from"./index-c8995a48.js";import{a as k}from"./index-27a75825.js";import{u as ee}from"./index-e99ac89a.js";import{C as te}from"./CheckIcon-77e4e7e5.js";import{T as N}from"./index-8c217b7a.js";import{A as oe}from"./index-2fdb1f1a.js";import"./index-ac432e64.js";import"./index.esm-f0e46de8.js";import"./InfoIcon-68d98e01.js";import"./Popover-5233e748.js";import"./useSlotProps-f03f2e4a.js";import"./Select-fdbdcb17.js";import"./Stack-fd35c23e.js";import"./Popper-2c76abc6.js";const ne=({onClick:n,loading:a})=>{const i=I(l=>l.budget),[c,d]=p.useState(10),r="node";return p.useEffect(()=>{(async()=>{try{const t=await U(r);d(t.data.price)}catch(t){console.error("cannot fetch",t)}})()},[r]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(ae,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(se,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(re,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[G(i)," sats"]})]})]}),e.jsx(o,{children:e.jsx(y,{color:"secondary","data-testid":"check-icon",disabled:a,onClick:n,size:"large",startIcon:e.jsx(te,{}),type:"submit",variant:"contained",children:"Approve"})})]})},se=x(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,re=x(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ae=x(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ie=({type:n,onNextStep:a,onPrevStep:i,name:c,sourceLink:d})=>{const r=n==="Image"?c&&d:c;return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(ce,{children:"Enter details"})})}),e.jsx(o,{mb:4,children:e.jsxs(u,{children:[n," name"]})}),e.jsx(o,{mb:12,children:e.jsx(N,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...v}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(o,{mb:4,children:e.jsx(u,{children:"Link"})}),e.jsx(o,{mb:12,children:e.jsx(N,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...v}})})]}):null,e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(y,{color:"secondary",onClick:i,size:"large",variant:"contained",children:"Prev"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(y,{color:"secondary",disabled:!r,onClick:a,size:"large",variant:"contained",children:"Next"})})]})]})},ce=x(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,g={label:"Not selected",value:""},C=[{label:"Corporation",value:"Corporation",type:"Topic"},{label:"Event",value:"Event",type:"Topic"},{label:"Image",value:"Image",type:"Topic"},{label:"Organization",value:"Organization",type:"Topic"},{label:"Person",value:"Person",type:"Topic"},{label:"Place",value:"Place",type:"Topic"},{label:"Project",value:"Project",type:"blue"},{label:"Software",value:"Software",type:"blue"},{label:"Topic",value:"Topic",type:"blue"},g],le=({onNextStep:n,allowNextStep:a,onSelectType:i,selectedType:c})=>{const[d,r]=p.useState(g);p.useEffect(()=>{r(t=>t.value===c?t:C.find(m=>m.value===c)||g)},[c]);const l=t=>{i((t==null?void 0:t.label)||"")};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(de,{children:"Select Type"})})}),e.jsx(o,{direction:"row",mb:20,children:e.jsx(oe,{onSelect:l,options:C,selectedValue:d})}),e.jsx(o,{children:e.jsx(y,{color:"secondary",disabled:!a,onClick:n,size:"large",type:"button",variant:"contained",children:"Next"})})]})},de=x(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,P=async(n,a,i,c)=>{const d="node",r={};r.node_type=n.nodeType,r.name=n.name,n.nodeType==="Image"&&(r.node_data={source_link:n.sourceLink});let l="";await q(async()=>{const t=await K.enable();r.pubkey=t==null?void 0:t.pubkey,l=await Q()});try{const t=await J.post(`/${d}`,JSON.stringify(r),{Authorization:l});if(t.error){const{message:m}=t.error;throw new Error(m)}c(n),a()}catch(t){t.status===402&&(await Y(i),await H(i),await P(n,a,i,c)),t.status===400&&(await t.json(),a()),t instanceof Error&&a()}},Ce=()=>{const[n,a]=p.useState(0),{close:i,visible:c}=ee("addItem"),[d]=I(s=>[s.setBudget]),r=W({mode:"onChange"}),{watch:l,setValue:t,reset:m}=r,[z,S]=p.useState(!1),[B,_]=k(s=>[s.addNewNode,s.setSelectedNode]),[L]=k(s=>[s.addNewNode]);p.useEffect(()=>()=>{a(0),m()},[c,m]);const w=l("nodeType"),E=l("name"),M=l("sourceLink"),O=()=>{i()},T=()=>{a(n+1)},F=()=>{a(n-1)},$=s=>{const j=`new-id-${Math.random()}`,b=s.nodeType.toLocaleLowerCase(),h={name:s.name,node_type:b,ref_id:j,x:Math.random(),y:Math.random(),z:Math.random(),date_added_to_graph:parseInt((new Date().getTime()/1e3).toFixed(0),10)};B(h),_(h),i()},A=s=>{const j=`new-id-${Math.random()}`,b=s.nodeType,h={ref_id:j,node_type:b,properties:{topic:s.name||"",date_added_to_graph:parseInt((new Date().getTime()/1e3).toFixed(0),10),...s.sourceLink?{source_link:s.sourceLink}:{}},x:Math.random()*1e3,y:Math.random()*1e3,z:Math.random()*1e3};L(h),i()},D=r.handleSubmit(async s=>{A(s);return;try{await P(s,O,d,$)}catch{console.log(V)}finally{S(!1)}}),R=s=>t("nodeType",s);return e.jsx(Z,{id:"addItem",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(X,{...r,children:e.jsxs("form",{id:"add-node-form",onSubmit:D,children:[n===0&&e.jsx(le,{allowNextStep:!!w,onNextStep:T,onSelectType:R,selectedType:w}),n===1&&e.jsx(ie,{name:E,onNextStep:T,onPrevStep:F,sourceLink:M||"",type:w}),n===2&&e.jsx(ne,{loading:z,onClick:()=>null})]})})})};export{Ce as AddItemModal};
