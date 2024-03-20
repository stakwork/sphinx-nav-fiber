import{s as h,b as f,g as E,r as m,j as e,F as o,T as u,h as N,B as U,v as V,ak as J,q as Y,aj as S,e as H,a4 as K}from"./index-5c5b2926.js";import{aC as Q,B as w,aD as W,q as X,F as Z,aE as ee}from"./react-toastify.esm-7abd2405.js";import{B as te}from"./index-4c13014e.js";import{n as y}from"./toastMessage-4daaf3fd.js";import{a as C}from"./index-5593bb2f.js";import{u as oe}from"./index-1f310504.js";import{C as ne}from"./CheckIcon-aadf54be.js";import{T as _}from"./index-19454506.js";import{A as se}from"./index-b329d361.js";import"./index.esm-605225f9.js";import"./index-1e13ef59.js";import"./InfoIcon-e36216d7.js";import"./index-d17fb05c.js";import"./Popover-ca71abf6.js";import"./useSlotProps-c438f4f6.js";import"./Select-1feec7a4.js";import"./Stack-693d810a.js";import"./Popper-2c640885.js";const re=({onClick:n,loading:a})=>{const i=E(l=>l.budget),[c,p]=m.useState(10),r="node";return m.useEffect(()=>{(async()=>{try{const t=await W(r);p(t.data.price)}catch(t){console.error("cannot fetch",t)}})()},[r]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(ce,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ae,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(ie,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Q(i)," sats"]})]})]}),e.jsx(o,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:a,onClick:n,size:"large",startIcon:e.jsx(ne,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ae=h(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,le=({type:n,onNextStep:a,onPrevStep:i,name:c,sourceLink:p})=>{const r=n==="Image"?c&&p:c;return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(de,{children:"Enter details"})})}),e.jsx(o,{mb:4,children:e.jsxs(u,{children:[n," name"]})}),e.jsx(o,{mb:12,children:e.jsx(_,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...N}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(o,{mb:4,children:e.jsx(u,{children:"Link"})}),e.jsx(o,{mb:12,children:e.jsx(_,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...N}})})]}):null,e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(w,{color:"secondary",onClick:i,size:"large",variant:"contained",children:"Prev"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!r,onClick:a,size:"large",variant:"contained",children:"Next"})})]})]})},de=h(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,T={label:"Not selected",value:""},B=[{label:"Corporation",value:"Corporation",type:"Topic"},{label:"Event",value:"Event",type:"Topic"},{label:"Image",value:"Image",type:"Topic"},{label:"Organization",value:"Organization",type:"Topic"},{label:"Person",value:"Person",type:"Topic"},{label:"Place",value:"Place",type:"Topic"},{label:"Project",value:"Project",type:"blue"},{label:"Software",value:"Software",type:"blue"},{label:"Topic",value:"Topic",type:"blue"},T],pe=({onNextStep:n,allowNextStep:a,onSelectType:i,selectedType:c})=>{const[p,r]=m.useState(T);m.useEffect(()=>{r(t=>t.value===c?t:B.find(d=>d.value===c)||T)},[c]);const l=t=>{i((t==null?void 0:t.label)||"")};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(me,{children:"Select Type"})})}),e.jsx(o,{direction:"row",mb:20,children:e.jsx(se,{onSelect:l,options:B,selectedValue:p})}),e.jsx(o,{children:e.jsx(w,{color:"secondary",disabled:!a,onClick:n,size:"large",type:"button",variant:"contained",children:"Next"})})]})},me=h(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,I=async(n,a,i,c)=>{const p="node",r={};r.node_type=n.nodeType,r.name=n.name,n.nodeType==="Image"&&(r.node_data={source_link:n.sourceLink});let l="";await U(async()=>{const t=await H.enable();r.pubkey=t==null?void 0:t.pubkey,l=await K()});try{const t=await V.post(`/${p}`,JSON.stringify(r),{Authorization:l});if(t.error){const{message:d}=t.error;throw new Error(d)}c(n),y(J),a()}catch(t){if(t.status===402&&(await ee(i),await Y(i),await I(n,a,i,c)),t.status===400){const d=await t.json();y((d==null?void 0:d.status)||S),a()}t instanceof Error&&(y(t.message||S),a())}},Ie=()=>{const[n,a]=m.useState(0),{close:i,visible:c}=oe("addItem"),[p]=E(s=>[s.setBudget]),r=X({mode:"onChange"}),{watch:l,setValue:t,reset:d}=r,[P,v]=m.useState(!1),[z,L]=C(s=>[s.addNewNode,s.setSelectedNode]),[M]=C(s=>[s.addNewNode]);m.useEffect(()=>()=>{a(0),d()},[c,d]);const j=l("nodeType"),O=l("name"),D=l("sourceLink"),A=()=>{i()},k=()=>{a(n+1)},F=()=>{a(n-1)},$=s=>{const g=`new-id-${Math.random()}`,b=s.nodeType.toLocaleLowerCase(),x={name:s.name,node_type:b,ref_id:g,x:Math.random(),y:Math.random(),z:Math.random(),date_added_to_graph:parseInt((new Date().getTime()/1e3).toFixed(0),10)};z(x),L(x),i()},R=s=>{const g=`new-id-${Math.random()}`,b=s.nodeType,x={ref_id:g,node_type:b,properties:{topic:s.name||"",date_added_to_graph:parseInt((new Date().getTime()/1e3).toFixed(0),10),...s.sourceLink?{source_link:s.sourceLink}:{}},x:Math.random()*1e3,y:Math.random()*1e3,z:Math.random()*1e3};M(x),i()},G=r.handleSubmit(async s=>{R(s);return;try{await I(s,A,p,$)}catch{y(S)}finally{v(!1)}}),q=s=>t("nodeType",s);return e.jsx(te,{id:"addItem",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(Z,{...r,children:e.jsxs("form",{id:"add-node-form",onSubmit:G,children:[n===0&&e.jsx(pe,{allowNextStep:!!j,onNextStep:k,onSelectType:q,selectedType:j}),n===1&&e.jsx(le,{name:O,onNextStep:k,onPrevStep:F,sourceLink:D||"",type:j}),n===2&&e.jsx(re,{loading:P,onClick:()=>null})]})})})};export{Ie as AddItemModal};
