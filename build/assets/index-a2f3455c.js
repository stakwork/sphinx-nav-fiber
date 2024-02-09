import{Y as x,a0 as t,X as l,r as s,a4 as P,j as e,Z as A}from"./index-a35eafb3.js";import{cs as k,c4 as O,cd as C,ct as F,cB as L,cM as R,aS as E,ce as D,aG as I,cJ as $,cN as _,bK as G,bG as M,bH as Y,bI as U,bJ as H,cO as J,u as B,ch as K,az as V,cj as W,bO as X,cP as Z,ca as q}from"./index-2b8ef315.js";import{S as Q}from"./Skeleton-0dcfb54c.js";const ee=({onSelect:a,selectedTopic:u})=>{const[d,f]=s.useState(!1),[h,j]=s.useState(""),[g,c]=s.useState([]),[i,n]=s.useState(!1),r=s.useRef(null);s.useEffect(()=>()=>c([]),[c]);const y=async o=>{const w={muted:"False",sort_by:_,search:o,skip:"0",limit:"1000"};n(!0);try{const p=await $(w);console.log(p.data),c(p.data)}catch{c([])}finally{n(!1)}},m=s.useMemo(()=>P.debounce(y,300),[]),b=o=>{a(o)},v=o=>{if(j(o),!o){c([]);return}o.length>2&&m(o)};return u?e.jsxs(se,{children:[e.jsx("div",{className:"value",children:u.topic}),e.jsx(l,{className:"icon",onClick:()=>a(null),children:e.jsx(C,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(F,{ref:r,component:"form",onSubmit:o=>o.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(L,{inputProps:{"aria-label":"search topic"},onChange:o=>v(o.target.value),onFocus:()=>f(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:h}),h&&e.jsxs(e.Fragment,{children:[e.jsx(N,{"aria-label":"search",onClick:()=>v(""),type:"button",children:e.jsx(C,{})}),e.jsx(R,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(N,{"aria-label":"search",type:"button",children:i?e.jsx(E,{color:t.white,size:24}):e.jsx(D,{})})]}),r.current&&g.length?e.jsx(te,{anchorEl:r.current,open:d,placement:"bottom",children:e.jsx(e.Fragment,{children:g.map(o=>e.jsx(oe,{className:I({active:u===o.ref_id}),onClick:()=>b(o),children:o.topic},"option"))})}):null]})},oe=x(l).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${t.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${t.white};
  }
  &:hover {
    color: ${t.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,te=x(k)`
  && {
    z-index: 99999;
    background: ${t.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${t.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,se=x(l).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${t.white};
    background: ${t.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,N=x(O)`
  font-size: 24px;
`,ne=({selectedType:a,setSelectedType:u})=>{const[d,f]=s.useState(null),[h,j]=s.useState([]);s.useEffect(()=>{(async()=>{try{const{data:r}=await J();j(r.edge_types)}catch(r){console.warn(r)}})()},[j]);const g=n=>{f(n.currentTarget)},c=()=>{f(null)},i=n=>{u(n),c()};return e.jsxs("div",{children:[e.jsxs(re,{onClick:g,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:a}),e.jsx("div",{className:"icon",children:d?e.jsx(Y,{}):e.jsx(M,{})})]}),e.jsx(ce,{anchorEl:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:c,open:!!d,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(U,{children:h.map(n=>e.jsxs(ae,{className:I({active:n===a}),onClick:()=>i(n),children:[e.jsx("span",{className:"icon",children:n===a?e.jsx(H,{}):null}),e.jsx("span",{children:n})]},n))})})]})},re=x(l).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${t.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${t.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,ae=x(l).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${t.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${t.white};
  }
  &:hover {
    color: ${t.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,ce=x(G)`
  .MuiPaper-root {
    background: ${t.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${t.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,ie=({from:a,onSelect:u,selectedTopic:d,selectedType:f,setSelectedType:h})=>e.jsxs(l,{children:[e.jsx(l,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(l,{align:"center",direction:"row",children:e.jsx(le,{children:"Add edge"})})}),e.jsxs(de,{mb:12,children:[e.jsxs(S,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:a})]}),e.jsx(S,{children:e.jsx(ne,{selectedType:f,setSelectedType:h})}),e.jsxs(S,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(ee,{onSelect:u,selectedTopic:d})]})]})]}),le=x(A)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,de=x(l).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${t.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${t.GRAY3};
  }
`,S=x(l)`
  flex: 1 1 100%;
`,he=()=>{const{close:a}=B("editNodeName"),u=K({mode:"onChange"}),[d,f]=s.useState(!1),[h,j]=s.useState(""),[g,c]=s.useState(!1),[i,n]=s.useState(null);console.log(g);const[r,y]=s.useState(),m=V();s.useEffect(()=>{(async()=>{if(m){c(!0);try{const{data:p}=await $({search:m==null?void 0:m.name}),T=p.find(z=>z.topic===m.name);y(T)}catch(p){console.log(p),console.log(p)}finally{c(!1)}}})()},[m]);const b=()=>{a()},v=async()=>{if(!(!i||!r)){f(!0);try{await Z({from:r.ref_id,to:i==null?void 0:i.ref_id,relationship:h});const{ref_id:w}=r,{ref_id:p}=i;console.log(w,p),b()}catch(w){console.warn(w)}finally{f(!1)}}},o=d||!i||!h;return e.jsxs(W,{...u,children:[g?e.jsx(l,{my:24,children:e.jsx(Q,{})}):e.jsx(ie,{from:r?r.topic:"",onSelect:n,selectedTopic:i,selectedType:h,setSelectedType:j}),e.jsxs(X,{color:"secondary",disabled:o,onClick:v,size:"large",variant:"contained",children:["Confirm",d&&e.jsx(E,{color:t.BLUE_PRESS_STATE,size:10})]})]})},fe=()=>{const{close:a}=B("addEdgeToNode");return e.jsx(q,{id:"addEdgeToNode",kind:"large",onClose:a,preventOutsideClose:!0,children:e.jsx(he,{})})};export{fe as AddNodeEdgeModal};
