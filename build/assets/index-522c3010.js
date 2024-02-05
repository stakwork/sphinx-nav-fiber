import{Y as x,a0 as d,a1 as T,r as h,j as e,X as t,Z as g,ab as S,e as O,a as D,aW as L,aF as R,aX as j,d as _,U as F}from"./index-d3758f34.js";import{c0 as f,bY as k,cB as G,cy as C,bf as U,bV as Y,bW as M,bX as X,aG as W,u as q,cv as J,co as V,cx as Z,cC as H}from"./index-23497f02.js";import{n as m}from"./toastMessage-b4e0aa21.js";import{f as K}from"./index-f371730d.js";const Q=({onClick:s,loading:r})=>{const a=T(n=>n.budget),[c,l]=h.useState(10),i="node";return h.useEffect(()=>{(async()=>{try{const o=await G(i);l(o.data.price)}catch(o){console.error("cannot fetch",o)}})()},[i]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ne,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ee,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(te,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[K(a)," sats"]})]})]}),e.jsx(t,{children:e.jsx(f,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:s,size:"large",startIcon:e.jsx(k,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ee=x(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${d.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${d.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${d.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,te=x(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${d.secondaryText4};
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
`,ne=x(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,oe=({type:s,onNextStep:r,onPrevStep:a,name:c,sourceLink:l})=>{const i=s==="Image"?c&&l:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(se,{children:"Add Item"})})}),e.jsx(t,{mb:12,children:e.jsx(C,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...S}})}),s==="Image"?e.jsx(t,{mb:12,children:e.jsx(C,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...S}})}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(f,{color:"secondary",onClick:a,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(f,{color:"secondary",disabled:!i,onClick:r,size:"large",variant:"contained",children:"Next"})})]})]})},se=x(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,w={Corporation:"Corporation",Event:"Event",Image:"Image",Organization:"Organization",Person:"Person",Place:"Place",Project:"Project",Show:"Show",Software:"Software",Topic:"Topic","":"Not selected"},re=({onSelect:s,selectedValue:r=""})=>{const[a,c]=h.useState(null),l=o=>{c(o.currentTarget)},i=()=>{c(null)},n=o=>{s(o),i()};return e.jsxs("div",{children:[e.jsxs(ae,{onClick:l,children:[e.jsx("div",{className:"text",children:"Node type"}),e.jsx("div",{className:"value",children:w[r]}),e.jsx("div",{className:"icon",children:a?e.jsx(M,{}):e.jsx(Y,{})})]}),e.jsx(ce,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:i,open:!!a,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(X,{children:Object.keys(w).map(o=>e.jsxs(ie,{className:W({active:o===r}),onClick:()=>n(o),children:[e.jsx("span",{className:"icon",children:o===r?e.jsx(k,{}):null}),e.jsx("span",{children:w[o]})]},o))})})]})},ae=x(t).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${d.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${d.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,ie=x(t).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${d.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${d.white};
  }
  &:hover {
    color: ${d.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,ce=x(U)`
  .MuiPaper-root {
    background: ${d.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${d.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,le=({onNextStep:s,allowNextStep:r,onSelectType:a,selectedType:c})=>e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(de,{children:"Choose Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(re,{onSelect:a,selectedValue:c})}),e.jsx(t,{children:e.jsx(f,{color:"secondary",disabled:!r,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),de=x(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,P=async(s,r,a)=>{const c="node",l={};l.node_type=s.nodeType,l.name=s.name,s.nodeType==="Image"&&(l.node_data={source_link:s.sourceLink});let i="";await O(async()=>{const n=await _.enable();l.pubkey=n==null?void 0:n.pubkey,i=await F()});try{const n=await D.post(`/${c}`,JSON.stringify(l),{Authorization:i});if(n.error){const{message:o}=n.error;throw new Error(o)}m(L),r()}catch(n){if(n.status===402&&(await H(a),await R(a),await P(s,r,a)),n.status===400){const o=await n.json();m((o==null?void 0:o.status)||j),r()}n instanceof Error&&(m(n.message||j),r())}},fe=()=>{const[s,r]=h.useState(0),{close:a,visible:c}=q("addItem"),[l]=T(p=>[p.setBudget]),i=J({mode:"onChange"}),{watch:n,setValue:o,reset:y}=i,[N,b]=h.useState(!1);h.useEffect(()=>()=>{r(0),y()},[c,y]);const u=n("nodeType"),z=n("name"),B=n("sourceLink"),E=()=>{a()},v=()=>{r(s+1)},I=()=>{r(s-1)},$=i.handleSubmit(async p=>{b(!0);try{await P(p,E,l)}catch{m(j)}finally{b(!1)}}),A=p=>o("nodeType",p);return e.jsx(V,{id:"addItem",kind:"small",onClose:a,preventOutsideClose:!0,children:e.jsx(Z,{...i,children:e.jsxs("form",{id:"add-node-form",onSubmit:$,children:[s===0&&e.jsx(le,{allowNextStep:!!u,onNextStep:v,onSelectType:A,selectedType:u}),s===1&&e.jsx(oe,{name:z,onNextStep:v,onPrevStep:I,sourceLink:B||"",type:u}),s===2&&e.jsx(Q,{loading:N,onClick:()=>null})]})})})};export{fe as AddItemModal};
