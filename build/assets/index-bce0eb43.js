import{Y as h,a0 as t,X as l,r as s,a4 as A,j as e,Z as P}from"./index-7b1e84d7.js";import{cI as k,cg as F,cp as C,cJ as L,b9 as O,cK as R,aS as E,cq as _,aG as I,cF as T,cL as D,bf as M,bT as Y,bU as G,bV as U,bW as H,cM as V,u as $,ct as W,az as q,cv as J,b_ as K,cN as X,cm as Z}from"./index-e50c2c75.js";import{S as Q}from"./Skeleton-670d9e49.js";const ee=({onSelect:a,selectedTopic:u})=>{const[d,f]=s.useState(!1),[p,j]=s.useState(""),[g,c]=s.useState([]),[i,n]=s.useState(!1),r=s.useRef(null);s.useEffect(()=>()=>c([]),[c]);const y=async o=>{const w={muted:"False",sort_by:D,search:o,skip:"0",limit:"1000"};n(!0);try{const x=await T(w);console.log(x.data),c(x.data)}catch{c([])}finally{n(!1)}},m=s.useMemo(()=>A.debounce(y,300),[]),b=o=>{a(o)},v=o=>{if(j(o),!o){c([]);return}o.length>2&&m(o)};return u?e.jsxs(se,{children:[e.jsx("div",{className:"value",children:u.topic}),e.jsx(l,{className:"icon",onClick:()=>a(null),children:e.jsx(C,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(L,{ref:r,component:"form",onSubmit:o=>o.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(O,{inputProps:{"aria-label":"search topic"},onChange:o=>v(o.target.value),onFocus:()=>f(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:p}),p&&e.jsxs(e.Fragment,{children:[e.jsx(N,{"aria-label":"search",onClick:()=>v(""),type:"button",children:e.jsx(C,{})}),e.jsx(R,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(N,{"aria-label":"search",type:"button",children:i?e.jsx(E,{color:t.white,size:24}):e.jsx(_,{})})]}),r.current&&g.length?e.jsx(te,{anchorEl:r.current,open:d,placement:"bottom",children:e.jsx(e.Fragment,{children:g.map(o=>e.jsx(oe,{className:I({active:u===o.ref_id}),onClick:()=>b(o),children:o.topic},"option"))})}):null]})},oe=h(l).attrs({direction:"row",align:"center"})`
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
`,te=h(k)`
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
`,se=h(l).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,N=h(F)`
  font-size: 24px;
`,ne=({selectedType:a,setSelectedType:u})=>{const[d,f]=s.useState(null),[p,j]=s.useState([]);s.useEffect(()=>{(async()=>{try{const{data:r}=await V();j(r.edge_types)}catch(r){console.warn(r)}})()},[j]);const g=n=>{f(n.currentTarget)},c=()=>{f(null)},i=n=>{u(n),c()};return e.jsxs("div",{children:[e.jsxs(re,{onClick:g,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:a}),e.jsx("div",{className:"icon",children:d?e.jsx(G,{}):e.jsx(Y,{})})]}),e.jsx(ce,{anchorEl:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:c,open:!!d,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(U,{children:p.map(n=>e.jsxs(ae,{className:I({active:n===a}),onClick:()=>i(n),children:[e.jsx("span",{className:"icon",children:n===a?e.jsx(H,{}):null}),e.jsx("span",{children:n})]},n))})})]})},re=h(l).attrs({direction:"row",align:"center"})`
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
`,ae=h(l).attrs({direction:"row",align:"center"})`
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
`,ce=h(M)`
  .MuiPaper-root {
    background: ${t.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${t.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,ie=({from:a,onSelect:u,selectedTopic:d,selectedType:f,setSelectedType:p})=>e.jsxs(l,{children:[e.jsx(l,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(l,{align:"center",direction:"row",children:e.jsx(le,{children:"Add edge"})})}),e.jsxs(de,{mb:12,children:[e.jsxs(S,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:a})]}),e.jsx(S,{children:e.jsx(ne,{selectedType:f,setSelectedType:p})}),e.jsxs(S,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(ee,{onSelect:u,selectedTopic:d})]})]})]}),le=h(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,de=h(l).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${t.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${t.GRAY3};
  }
`,S=h(l)`
  flex: 1 1 100%;
`,pe=()=>{const{close:a}=$("editNodeName"),u=W({mode:"onChange"}),[d,f]=s.useState(!1),[p,j]=s.useState(""),[g,c]=s.useState(!1),[i,n]=s.useState(null);console.log(g);const[r,y]=s.useState(),m=q();s.useEffect(()=>{(async()=>{if(m){c(!0);try{const{data:x}=await T({search:m==null?void 0:m.name}),z=x.find(B=>B.topic===m.name);y(z)}catch(x){console.log(x),console.log(x)}finally{c(!1)}}})()},[m]);const b=()=>{a()},v=async()=>{if(!(!i||!r)){f(!0);try{await X({from:r.ref_id,to:i==null?void 0:i.ref_id,relationship:p});const{ref_id:w}=r,{ref_id:x}=i;console.log(w,x),b()}catch(w){console.warn(w)}finally{f(!1)}}},o=d||!i||!p;return e.jsxs(J,{...u,children:[g?e.jsx(l,{my:24,children:e.jsx(Q,{})}):e.jsx(ie,{from:r?r.topic:"",onSelect:n,selectedTopic:i,selectedType:p,setSelectedType:j}),e.jsxs(K,{color:"secondary",disabled:o,onClick:v,size:"large",variant:"contained",children:["Confirm",d&&e.jsx(E,{color:t.BLUE_PRESS_STATE,size:10})]})]})},fe=()=>{const{close:a}=$("addEdgeToNode");return e.jsx(Z,{id:"addEdgeToNode",kind:"large",onClose:a,preventOutsideClose:!0,children:e.jsx(pe,{})})};export{fe as AddNodeEdgeModal};
