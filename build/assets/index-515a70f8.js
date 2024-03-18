import{s as h,c as f,u as L,r as x,j as e,F as o,T as j,b as B,ai as g,x as V,n as G,d as U,a4 as q}from"./index-912a006b.js";import{av as J,B as b,C as Y,aw as H,k as K,u as Q,F as W}from"./react-toastify.esm-5fb76b52.js";import{B as X}from"./index-a8906cb4.js";import{u as Z}from"./index-c8b55d33.js";import{S as ee}from"./index-acbd86c1.js";import{h as te}from"./index.esm-b4803265.js";import{C as oe}from"./CheckIcon-969d5faf.js";import{T as C}from"./index-65abfc9f.js";import{A as se}from"./index-42c6f895.js";import{i as z,O as E}from"./constants-84edb5fc.js";import"./InfoIcon-600b59a0.js";import"./index-6d3674a4.js";import"./Popover-936d9635.js";import"./useSlotProps-4d777221.js";import"./Select-c84953f9.js";import"./Stack-d7933113.js";import"./Popper-3c65353d.js";const ne=({onClick:s,loading:d,error:r})=>{const c=L(t=>t.budget),[a,l]=x.useState(10),p="node";return x.useEffect(()=>{(async()=>{try{const n=await H(p);l(n.data.price)}catch(n){console.error("cannot fetch",n)}})()},[p]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(ae,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ie,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[a," sats"]})]}),e.jsxs(re,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(c)," sats"]})]})]}),e.jsx(o,{children:e.jsx(b,{color:"secondary","data-testid":"check-icon",disabled:d||!!r,onClick:s,size:"large",startIcon:d?e.jsx(Y,{size:24}):e.jsx(oe,{}),type:"submit",variant:"contained",children:"Approve"})}),r?e.jsxs(le,{role:"tooltip",children:[e.jsxs(ce,{children:[e.jsx(te,{fontSize:13}),e.jsx("span",{children:r})]}),e.jsx("div",{className:"tooltip",children:r})]}):null]})},ie=h(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,re=h(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ae=h(j)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ce=h(o)`
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
`,le=h(o)`
  display: flex;
  align-items: center;
  color: ${f.primaryRed};
  position: relative;
  margin-top: 20px;

  .tooltip {
    position: absolute;
    background-color: ${f.black};
    opacity: 0.8;
    border-radius: 4px;
    color: ${f.white};
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
`,de=({type:s,onNextStep:d,onPrevStep:r,name:c,sourceLink:a})=>{const l=s==="Image"?c&&a:c;return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(pe,{children:"Enter details"})})}),e.jsx(o,{mb:4,children:e.jsxs(j,{children:[s," name"]})}),e.jsx(o,{mb:12,children:e.jsx(C,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...B}})}),s==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(o,{mb:4,children:e.jsx(j,{children:"Link"})}),e.jsx(o,{mb:12,children:e.jsx(C,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...B}})})]}):null,e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(b,{color:"secondary",onClick:r,size:"large",variant:"contained",children:"Prev"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(b,{color:"secondary",disabled:!l,onClick:d,size:"large",variant:"contained",children:"Next"})})]})]})},pe=h(j)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,me=({onNextStep:s,allowNextStep:d,onSelectType:r,selectedType:c})=>{const[a,l]=x.useState(z);x.useEffect(()=>{l(t=>t.value===c?t:E.find(n=>n.value===c)||z)},[c]);const p=t=>{r((t==null?void 0:t.label)||"")};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(xe,{children:"Select Type"})})}),e.jsx(o,{direction:"row",mb:20,children:e.jsx(se,{autoFocus:!0,onSelect:p,options:E,selectedValue:a})}),e.jsx(o,{children:e.jsx(b,{color:"secondary",disabled:!d,onClick:s,size:"large",type:"button",variant:"contained",children:"Next"})})]})},xe=h(j)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ue=async(s,d,r)=>{var p;const c="node",a={};a.node_type=s.nodeType,a.name=s.name,s.nodeType==="Image"&&(a.node_data={source_link:s.sourceLink});let l="";await V(async()=>{const t=await U.enable();a.pubkey=t==null?void 0:t.pubkey,l=await q()});try{const t=await G.post(`/${c}`,JSON.stringify(a),{Authorization:l});if(t.error){const{message:n}=t.error;throw new Error(n)}r(s,(p=t==null?void 0:t.data)==null?void 0:p.ref_id)}catch(t){let n=g;if(t.status===400){const y=await t.json();n=y.errorCode||(y==null?void 0:y.status)||g}else t instanceof Error&&(n=t.message);throw new Error(n)}},Ie=()=>{const[s,d]=x.useState(0),{close:r,visible:c}=Z("addItem"),[a]=L(i=>[i.setBudget]),l=K({mode:"onChange"}),{watch:p,setValue:t,reset:n}=l,[y,k]=x.useState(!1),[I,v]=x.useState(""),[P,$]=Q(i=>[i.addNewNode,i.setSelectedNode]);x.useEffect(()=>()=>{v(""),d(0),n()},[c,n]);const S=p("nodeType"),A=p("name"),M=p("sourceLink"),O=()=>{r()},T=()=>{d(s+1)},F=()=>{d(s-1)},_=(i,m)=>{const w=m||`new-id-${Math.random()}`,u=i.nodeType.toLocaleLowerCase(),N={name:i.name,type:u,label:i.name,node_type:u,id:w,ref_id:w,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...i.sourceLink?{source_link:i.sourceLink}:{}};P(N),$(N)},D=l.handleSubmit(async i=>{k(!0);try{await ue(i,a,_),ee("Item Added"),O()}catch(m){let w=g;if((m==null?void 0:m.status)===400){const u=await m.json();w=u.errorCode||(u==null?void 0:u.status)||g}else m instanceof Error&&(w=m.message);v(String(w))}finally{k(!1)}}),R=i=>t("nodeType",i);return e.jsx(X,{id:"addItem",kind:"small",onClose:r,preventOutsideClose:!0,children:e.jsx(W,{...l,children:e.jsxs("form",{id:"add-node-form",onSubmit:D,children:[s===0&&e.jsx(me,{allowNextStep:!!S,onNextStep:T,onSelectType:R,selectedType:S}),s===1&&e.jsx(de,{name:A,onNextStep:T,onPrevStep:F,sourceLink:M||"",type:S}),s===2&&e.jsx(ne,{error:I,loading:y,onClick:()=>null})]})})})};export{Ie as AddItemModal};
