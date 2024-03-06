import{s as x,c as f,u as P,r as m,j as e,F as n,T as u,b as k,w as V,n as q,ad as J,f as Y,ae as S,d as H,a2 as K}from"./index-192c4af5.js";import{ao as Q,B as w,ap as W,l as X,F as Z,aq as ee}from"./react-toastify.esm-322b754b.js";import{B as te}from"./index-f7a083b8.js";import{n as y}from"./toastMessage-0572f501.js";import{a as C}from"./index-0cded8e2.js";import{u as ne}from"./index-8ba7564d.js";import{C as oe}from"./CheckIcon-cd9ee8ed.js";import{T as _}from"./index-091f2c6c.js";import{A as se}from"./index-8adc0141.js";import"./index.esm-2729db2b.js";import"./InfoIcon-e42de8ec.js";import"./index-69158b78.js";import"./Popover-624804ea.js";import"./useSlotProps-8086a3a5.js";import"./Select-0d94085d.js";import"./Stack-b94a741a.js";import"./Popper-a42dd332.js";const ae=({onClick:o,loading:r})=>{const i=P(l=>l.budget),[c,p]=m.useState(10),a="node";return m.useEffect(()=>{(async()=>{try{const t=await W(a);p(t.data.price)}catch(t){console.error("cannot fetch",t)}})()},[a]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ce,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(re,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(ie,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Q(i)," sats"]})]})]}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:o,size:"large",startIcon:e.jsx(oe,{}),type:"submit",variant:"contained",children:"Approve"})})]})},re=x(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ie=x(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ce=x(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,le=({type:o,onNextStep:r,onPrevStep:i,name:c,sourceLink:p})=>{const a=o==="Image"?c&&p:c;return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(de,{children:"Enter details"})})}),e.jsx(n,{mb:4,children:e.jsxs(u,{children:[o," name"]})}),e.jsx(n,{mb:12,children:e.jsx(_,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...k}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(n,{mb:4,children:e.jsx(u,{children:"Link"})}),e.jsx(n,{mb:12,children:e.jsx(_,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...k}})})]}):null,e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(w,{color:"secondary",onClick:i,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!a,onClick:r,size:"large",variant:"contained",children:"Next"})})]})]})},de=x(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,T={label:"Not selected",value:""},I=[{label:"Corporation",value:"Corporation",type:"Topic"},{label:"Event",value:"Event",type:"Topic"},{label:"Image",value:"Image",type:"Topic"},{label:"Organization",value:"Organization",type:"Topic"},{label:"Person",value:"Person",type:"Topic"},{label:"Place",value:"Place",type:"Topic"},{label:"Project",value:"Project",type:"blue"},{label:"Software",value:"Software",type:"blue"},{label:"Topic",value:"Topic",type:"blue"},T],pe=({onNextStep:o,allowNextStep:r,onSelectType:i,selectedType:c})=>{const[p,a]=m.useState(T);m.useEffect(()=>{a(t=>t.value===c?t:I.find(d=>d.value===c)||T)},[c]);const l=t=>{i((t==null?void 0:t.label)||"")};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(me,{children:"Select Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(se,{onSelect:l,options:I,selectedValue:p})}),e.jsx(n,{children:e.jsx(w,{color:"secondary",disabled:!r,onClick:o,size:"large",type:"button",variant:"contained",children:"Next"})})]})},me=x(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z=async(o,r,i,c)=>{const p="node",a={};a.node_type=o.nodeType,a.name=o.name,o.nodeType==="Image"&&(a.node_data={source_link:o.sourceLink});let l="";await V(async()=>{const t=await H.enable();a.pubkey=t==null?void 0:t.pubkey,l=await K()});try{const t=await q.post(`/${p}`,JSON.stringify(a),{Authorization:l});if(t.error){const{message:d}=t.error;throw new Error(d)}c(o),y(J),r()}catch(t){if(t.status===402&&(await ee(i),await Y(i),await z(o,r,i,c)),t.status===400){const d=await t.json();y((d==null?void 0:d.status)||S),r()}t instanceof Error&&(y(t.message||S),r())}},Pe=()=>{const[o,r]=m.useState(0),{close:i,visible:c}=ne("addItem"),[p]=P(s=>[s.setBudget]),a=X({mode:"onChange"}),{watch:l,setValue:t,reset:d}=a,[B,v]=m.useState(!1),[E,L]=C(s=>[s.addNewNode,s.setSelectedNode]),[M]=C(s=>[s.addNewNode]);m.useEffect(()=>()=>{r(0),d()},[c,d]);const j=l("nodeType"),O=l("name"),A=l("sourceLink"),D=()=>{i()},N=()=>{r(o+1)},F=()=>{r(o-1)},$=s=>{const g=`new-id-${Math.random()}`,b=s.nodeType.toLocaleLowerCase(),h={name:s.name,node_type:b,ref_id:g,x:Math.random(),y:Math.random(),z:Math.random(),date_added_to_graph:parseInt((new Date().getTime()/1e3).toFixed(0),10)};E(h),L(h),i()},R=s=>{const g=`new-id-${Math.random()}`,b=s.nodeType,h={ref_id:g,node_type:b,attributes:{topic:s.name,date_added_to_graph:parseInt((new Date().getTime()/1e3).toFixed(0),10),...s.sourceLink?{source_link:s.sourceLink}:{}},x:Math.random()*1e3,y:Math.random()*1e3,z:Math.random()*1e3};M(h),i()},G=a.handleSubmit(async s=>{R(s);return;try{await z(s,D,p,$)}catch{y(S)}finally{v(!1)}}),U=s=>t("nodeType",s);return e.jsx(te,{id:"addItem",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(Z,{...a,children:e.jsxs("form",{id:"add-node-form",onSubmit:G,children:[o===0&&e.jsx(pe,{allowNextStep:!!j,onNextStep:N,onSelectType:U,selectedType:j}),o===1&&e.jsx(le,{name:O,onNextStep:N,onPrevStep:F,sourceLink:A||"",type:j}),o===2&&e.jsx(ae,{loading:B,onClick:()=>null})]})})})};export{Pe as AddItemModal};
