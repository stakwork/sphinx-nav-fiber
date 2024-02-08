import{Y as p,a0 as d,a1 as P,r as m,j as e,X as n,Z as f,ab as N,e as F,a as U,aW as G,aF as Y,aX as g,d as W,U as X}from"./index-7b1e84d7.js";import{b_ as w,bW as z,cz as q,cw as C,bf as J,bT as V,bU as Z,bV as H,aG as K,u as Q,ct as ee,aA as te,cm as ne,cv as oe,cA as se}from"./index-e50c2c75.js";import{n as u}from"./toastMessage-6739c440.js";import{f as re}from"./index-f371730d.js";const ae=({onClick:o,loading:s})=>{const a=P(l=>l.budget),[i,x]=m.useState(10),r="node";return m.useEffect(()=>{(async()=>{try{const t=await q(r);x(t.data.price)}catch(t){console.error("cannot fetch",t)}})()},[r]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(le,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ie,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[i," sats"]})]}),e.jsxs(ce,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[re(a)," sats"]})]})]}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:s,onClick:o,size:"large",startIcon:e.jsx(z,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ie=p(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ce=p(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,le=p(f)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,de=({type:o,onNextStep:s,onPrevStep:a,name:i,sourceLink:x})=>{const r=o==="Image"?i&&x:i;return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(xe,{children:"Enter details"})})}),e.jsx(n,{mb:4,children:e.jsxs(f,{children:[o," name"]})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...N}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(n,{mb:4,children:e.jsx(f,{children:"Link"})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...N}})})]}):null,e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(w,{color:"secondary",onClick:a,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!r,onClick:s,size:"large",variant:"contained",children:"Next"})})]})]})},xe=p(f)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,y={Corporation:"Corporation",Event:"Event",Image:"Image",Organization:"Organization",Person:"Person",Place:"Place",Project:"Project",Software:"Software",Topic:"Topic","":"Not selected"},he=({onSelect:o,selectedValue:s=""})=>{const[a,i]=m.useState(null),x=t=>{i(t.currentTarget)},r=()=>{i(null)},l=t=>{o(t),r()};return e.jsxs("div",{children:[e.jsxs(pe,{onClick:x,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:y[s]}),e.jsx("div",{className:"icon",children:a?e.jsx(Z,{}):e.jsx(V,{})})]}),e.jsx(fe,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:r,open:!!a,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(H,{children:Object.keys(y).map(t=>e.jsxs(me,{className:K({active:t===s}),onClick:()=>l(t),children:[e.jsx("span",{className:"icon",children:t===s?e.jsx(z,{}):null}),e.jsx("span",{children:y[t]})]},t))})})]})},pe=p(n).attrs({direction:"row",align:"center"})`
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
`,me=p(n).attrs({direction:"row",align:"center"})`
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
`,fe=p(J)`
  .MuiPaper-root {
    background: ${d.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${d.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,ue=({onNextStep:o,allowNextStep:s,onSelectType:a,selectedType:i})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(we,{children:"Select Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(he,{onSelect:a,selectedValue:i})}),e.jsx(n,{children:e.jsx(w,{color:"secondary",disabled:!s,onClick:o,size:"large",variant:"contained",children:"Next"})})]}),we=p(f)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,B=async(o,s,a,i)=>{const x="node",r={};r.node_type=o.nodeType,r.name=o.name,o.nodeType==="Image"&&(r.node_data={source_link:o.sourceLink});let l="";await F(async()=>{const t=await W.enable();r.pubkey=t==null?void 0:t.pubkey,l=await X()});try{const t=await U.post(`/${x}`,JSON.stringify(r),{Authorization:l});if(t.error){const{message:h}=t.error;throw new Error(h)}i(o),u(G),s()}catch(t){if(t.status===402&&(await se(a),await Y(a),await B(o,s,a,i)),t.status===400){const h=await t.json();u((h==null?void 0:h.status)||g),s()}t instanceof Error&&(u(t.message||g),s())}},ve=()=>{const[o,s]=m.useState(0),{close:a,visible:i}=Q("addItem"),[x]=P(c=>[c.setBudget]),r=ee({mode:"onChange"}),{watch:l,setValue:t,reset:h}=r,[E,b]=m.useState(!1),[I,L]=te(c=>[c.addNewNode,c.setSelectedNode]);m.useEffect(()=>()=>{s(0),h()},[i,h]);const j=l("nodeType"),$=l("name"),A=l("sourceLink"),O=()=>{a()},v=()=>{s(o+1)},D=()=>{s(o-1)},_=c=>{const S=`new-id-${Math.random()}`,T=c.nodeType.toLocaleLowerCase(),k={name:c.name,type:T,label:c.name,node_type:T,id:S,ref_id:S,x:Math.random(),y:Math.random(),z:Math.random(),date:+new Date,weight:4,...c.sourceLink?{source_link:c.sourceLink}:{}};I(k),L(k)},M=r.handleSubmit(async c=>{b(!0);try{await B(c,O,x,_)}catch{u(g)}finally{b(!1)}}),R=c=>t("nodeType",c);return e.jsx(ne,{id:"addItem",kind:"small",onClose:a,preventOutsideClose:!0,children:e.jsx(oe,{...r,children:e.jsxs("form",{id:"add-node-form",onSubmit:M,children:[o===0&&e.jsx(ue,{allowNextStep:!!j,onNextStep:v,onSelectType:R,selectedType:j}),o===1&&e.jsx(de,{name:$,onNextStep:v,onPrevStep:D,sourceLink:A||"",type:j}),o===2&&e.jsx(ae,{loading:E,onClick:()=>null})]})})})};export{ve as AddItemModal};
