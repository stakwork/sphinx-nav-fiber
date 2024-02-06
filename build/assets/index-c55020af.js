import{Y as x,a0 as d,a1 as C,r as h,j as e,X as t,Z as m,ab as S,e as A,a as D,aW as L,aF as R,aX as g,d as F,U as _}from"./index-767c35b3.js";import{c0 as u,bY as k,cB as G,cy as T,bf as U,bV as Y,bW as M,bX as X,aG as W,u as q,cv as J,co as V,cx as Z,cC as H}from"./index-093e3bcc.js";import{n as f}from"./toastMessage-47056a68.js";import{f as K}from"./index-f371730d.js";const Q=({onClick:n,loading:r})=>{const a=C(o=>o.budget),[c,l]=h.useState(10),i="node";return h.useEffect(()=>{(async()=>{try{const s=await G(i);l(s.data.price)}catch(s){console.error("cannot fetch",s)}})()},[i]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ne,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ee,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(te,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[K(a)," sats"]})]})]}),e.jsx(t,{children:e.jsx(u,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:n,size:"large",startIcon:e.jsx(k,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ee=x(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ne=x(m)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,oe=({type:n,onNextStep:r,onPrevStep:a,name:c,sourceLink:l})=>{const i=n==="Image"?c&&l:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(se,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(m,{children:[n," name"]})}),e.jsx(t,{mb:12,children:e.jsx(T,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...S}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(m,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(T,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...S}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(u,{color:"secondary",onClick:a,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(u,{color:"secondary",disabled:!i,onClick:r,size:"large",variant:"contained",children:"Next"})})]})]})},se=x(m)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,w={Corporation:"Corporation",Event:"Event",Image:"Image",Organization:"Organization",Person:"Person",Place:"Place",Project:"Project",Show:"Show",Software:"Software",Topic:"Topic","":"Not selected"},re=({onSelect:n,selectedValue:r=""})=>{const[a,c]=h.useState(null),l=s=>{c(s.currentTarget)},i=()=>{c(null)},o=s=>{n(s),i()};return e.jsxs("div",{children:[e.jsxs(ae,{onClick:l,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:w[r]}),e.jsx("div",{className:"icon",children:a?e.jsx(M,{}):e.jsx(Y,{})})]}),e.jsx(ce,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:i,open:!!a,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(X,{children:Object.keys(w).map(s=>e.jsxs(ie,{className:W({active:s===r}),onClick:()=>o(s),children:[e.jsx("span",{className:"icon",children:s===r?e.jsx(k,{}):null}),e.jsx("span",{children:w[s]})]},s))})})]})},ae=x(t).attrs({direction:"row",align:"center"})`
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
`,le=({onNextStep:n,allowNextStep:r,onSelectType:a,selectedType:c})=>e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(de,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(re,{onSelect:a,selectedValue:c})}),e.jsx(t,{children:e.jsx(u,{color:"secondary",disabled:!r,onClick:n,size:"large",variant:"contained",children:"Next"})})]}),de=x(m)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,P=async(n,r,a)=>{const c="node",l={};l.node_type=n.nodeType,l.name=n.name,n.nodeType==="Image"&&(l.node_data={source_link:n.sourceLink});let i="";await A(async()=>{const o=await F.enable();l.pubkey=o==null?void 0:o.pubkey,i=await _()});try{const o=await D.post(`/${c}`,JSON.stringify(l),{Authorization:i});if(o.error){const{message:s}=o.error;throw new Error(s)}f(L),r()}catch(o){if(o.status===402&&(await H(a),await R(a),await P(n,r,a)),o.status===400){const s=await o.json();f((s==null?void 0:s.status)||g),r()}o instanceof Error&&(f(o.message||g),r())}},fe=()=>{const[n,r]=h.useState(0),{close:a,visible:c}=q("addItem"),[l]=C(p=>[p.setBudget]),i=J({mode:"onChange"}),{watch:o,setValue:s,reset:y}=i,[N,b]=h.useState(!1);h.useEffect(()=>()=>{r(0),y()},[c,y]);const j=o("nodeType"),z=o("name"),B=o("sourceLink"),E=()=>{a()},v=()=>{r(n+1)},I=()=>{r(n-1)},$=i.handleSubmit(async p=>{b(!0);try{await P(p,E,l)}catch{f(g)}finally{b(!1)}}),O=p=>s("nodeType",p);return e.jsx(V,{id:"addItem",kind:"small",onClose:a,preventOutsideClose:!0,children:e.jsx(Z,{...i,children:e.jsxs("form",{id:"add-node-form",onSubmit:$,children:[n===0&&e.jsx(le,{allowNextStep:!!j,onNextStep:v,onSelectType:O,selectedType:j}),n===1&&e.jsx(oe,{name:z,onNextStep:v,onPrevStep:I,sourceLink:B||"",type:j}),n===2&&e.jsx(Q,{loading:N,onClick:()=>null})]})})})};export{fe as AddItemModal};
