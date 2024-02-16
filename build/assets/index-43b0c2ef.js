import{Y as p,a0 as o,X as l,r as s,a4 as P,j as e,Z as A}from"./index-d0c65b38.js";import{ct as k,c4 as O,cd as C,cu as F,cC as L,cN as R,aS as E,ce as D,aG as I,cK as $,cO as _,bK as G,bG as Y,bH as M,bI as U,bJ as H,cP as K,u as T,ch as J,az as Q,cj as V,bO as W,cQ as X,ca as Z}from"./index-3b9597fd.js";import{S as q}from"./Skeleton-153630ce.js";const ee=({onSelect:a,selectedTopic:x})=>{const[d,u]=s.useState(!1),[h,g]=s.useState(""),[j,i]=s.useState([]),[c,n]=s.useState(!1),r=s.useRef(null);s.useEffect(()=>()=>i([]),[i]);const y=async t=>{const w={muted:"False",sort_by:_,search:t,skip:"0",limit:"1000"};n(!0);try{const m=await $(w);i(m.data)}catch{i([])}finally{n(!1)}},f=s.useMemo(()=>P.debounce(y,300),[]),b=t=>{a(t)},v=t=>{if(g(t),!t){i([]);return}t.length>2&&f(t)};return x?e.jsxs(se,{children:[e.jsx("div",{className:"value",children:x.topic}),e.jsx(l,{className:"icon",onClick:()=>a(null),children:e.jsx(C,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(F,{ref:r,component:"form",onSubmit:t=>t.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(L,{inputProps:{"aria-label":"search topic"},onChange:t=>v(t.target.value),onFocus:()=>u(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:h}),h&&e.jsxs(e.Fragment,{children:[e.jsx(N,{"aria-label":"search",onClick:()=>v(""),type:"button",children:e.jsx(C,{})}),e.jsx(R,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(N,{"aria-label":"search",type:"button",children:c?e.jsx(E,{color:o.white,size:24}):e.jsx(D,{})})]}),r.current&&j.length?e.jsx(oe,{anchorEl:r.current,open:d,placement:"bottom",children:e.jsx(e.Fragment,{children:j.map(t=>e.jsx(te,{className:I({active:x===t.ref_id}),onClick:()=>b(t),children:t.topic},"option"))})}):null]})},te=p(l).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${o.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${o.white};
  }
  &:hover {
    color: ${o.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,oe=p(k)`
  && {
    z-index: 99999;
    background: ${o.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${o.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,se=p(l).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${o.white};
    background: ${o.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,N=p(O)`
  font-size: 24px;
`,ne=({selectedType:a,setSelectedType:x})=>{const[d,u]=s.useState(null),[h,g]=s.useState([]);s.useEffect(()=>{(async()=>{try{const{data:r}=await K();g(r.edge_types)}catch(r){console.warn(r)}})()},[g]);const j=n=>{u(n.currentTarget)},i=()=>{u(null)},c=n=>{x(n),i()};return e.jsxs("div",{children:[e.jsxs(re,{onClick:j,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:a}),e.jsx("div",{className:"icon",children:d?e.jsx(M,{}):e.jsx(Y,{})})]}),e.jsx(ie,{anchorEl:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:i,open:!!d,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(U,{children:h.map(n=>e.jsxs(ae,{className:I({active:n===a}),onClick:()=>c(n),children:[e.jsx("span",{className:"icon",children:n===a?e.jsx(H,{}):null}),e.jsx("span",{children:n})]},n))})})]})},re=p(l).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${o.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${o.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,ae=p(l).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${o.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${o.white};
  }
  &:hover {
    color: ${o.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,ie=p(G)`
  .MuiPaper-root {
    background: ${o.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${o.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,ce=({from:a,onSelect:x,selectedTopic:d,selectedType:u,setSelectedType:h})=>e.jsxs(l,{children:[e.jsx(l,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(l,{align:"center",direction:"row",children:e.jsx(le,{children:"Add edge"})})}),e.jsxs(de,{mb:12,children:[e.jsxs(S,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:a})]}),e.jsx(S,{children:e.jsx(ne,{selectedType:u,setSelectedType:h})}),e.jsxs(S,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(ee,{onSelect:x,selectedTopic:d})]})]})]}),le=p(A)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,de=p(l).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${o.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${o.GRAY3};
  }
`,S=p(l)`
  flex: 1 1 100%;
`,he=()=>{const{close:a}=T("editNodeName"),x=J({mode:"onChange"}),[d,u]=s.useState(!1),[h,g]=s.useState(""),[j,i]=s.useState(!1),[c,n]=s.useState(null),[r,y]=s.useState(),f=Q();s.useEffect(()=>{(async()=>{if(f){i(!0);try{const{data:m}=await $({search:f==null?void 0:f.name}),z=m.find(B=>B.topic===f.name);y(z)}catch(m){console.log(m)}finally{i(!1)}}})()},[f]);const b=()=>{a()},v=async()=>{if(!(!c||!r)){u(!0);try{await X({from:r.ref_id,to:c==null?void 0:c.ref_id,relationship:h});const{ref_id:w}=r,{ref_id:m}=c;console.log(w,m),b()}catch(w){console.warn(w)}finally{u(!1)}}},t=d||!c||!h;return e.jsxs(V,{...x,children:[j?e.jsx(l,{my:24,children:e.jsx(q,{})}):e.jsx(ce,{from:r?r.topic:"",onSelect:n,selectedTopic:c,selectedType:h,setSelectedType:g}),e.jsxs(W,{color:"secondary",disabled:t,onClick:v,size:"large",variant:"contained",children:["Confirm",d&&e.jsx(E,{color:o.BLUE_PRESS_STATE,size:10})]})]})},fe=()=>{const{close:a}=T("addEdgeToNode");return e.jsx(Z,{id:"addEdgeToNode",kind:"large",onClose:a,preventOutsideClose:!0,children:e.jsx(he,{})})};export{fe as AddNodeEdgeModal};
