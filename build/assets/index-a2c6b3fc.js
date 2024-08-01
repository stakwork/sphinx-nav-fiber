import{r as c,ak as T,j as e,U as p,ap as _,Q as a,a5 as v,ad as I,a1 as L,S as k,at as A}from"./index-c937f9eb.js";import{aY as B,ah as E,aU as F,aV as M,aZ as N,a$ as O,b0 as z,b1 as D,a_ as Y,b2 as w,ak as P,aL as R,al as U,an as X,b3 as H,B as W}from"./index-6f8cb5f0.js";const $=({topicId:s,onSelect:n,selectedValue:l,dataId:d})=>{const[x,u]=c.useState([]),[b,f]=c.useState(!1),j=c.useMemo(()=>{const o=async h=>{const g={is_muted:"False",sort_by:N,search:h,skip:"0",limit:"1000"};f(!0);try{const C=(await _(g.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==s);u(C)}catch{u([])}finally{f(!1)}};return T.debounce(o,300)},[s]),r=o=>{if(!o){u([]);return}o.length>2&&j(o)},m=o=>{const h=o?x.find(g=>g.ref_id===o.value):null;n(h||null)},t=o=>({label:o.search_value,value:o.ref_id,type:o.node_type}),S=o=>o.map(t);return l?e.jsxs(p,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:l.search_value}),e.jsx(B,{onClick:()=>n(null),size:"medium",children:e.jsx(E,{})})]}):e.jsx(F,{dataId:d,handleInputChange:r,isLoading:b,onSelect:m,options:S(x)||M,selectedValue:l?t(l):null})},Q=({from:s,onSelect:n,selectedToNode:l,isSwapped:d,setIsSwapped:x})=>e.jsxs(p,{mb:20,children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(Z,{children:"Merge topic"})})}),e.jsxs(J,{swap:d,children:[e.jsx(q,{children:e.jsx(K,{disabled:!0,label:d?"To":"From",swap:d,value:s==null?void 0:s.name})}),e.jsxs(p,{my:16,children:[e.jsx(ee,{children:"Type"}),e.jsx(v,{children:"IS ALIAS"})]}),e.jsx(p,{"data-testid":"to-section-container",children:e.jsxs(V,{children:[e.jsx(te,{children:d?"From":"To"}),e.jsx($,{dataId:"to-node",onSelect:n,selectedValue:l,topicId:s==null?void 0:s.ref_id})]})}),e.jsxs(G,{children:[e.jsx(oe,{children:e.jsx(O,{})}),e.jsx(se,{"data-testid":"swap-icon",onClick:x,children:e.jsx(z,{})}),e.jsx(ae,{children:e.jsx(D,{})})]})]})]}),Z=a(v)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,q=a(p)`
  flex: 1 1 100%;
`,G=a.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,J=a.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${s=>s.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,K=a(Y)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,V=a.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,ee=a.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,te=a.label`
  color: #bac1c6;
  background-color: #23252f;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: absolute;
  left: 15px;
  top: -10px;
`,oe=a.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,se=a.div`
  position: absolute;
  color: transparent;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`,ae=a.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,de=()=>{const{close:s}=I("mergeToNode"),[n,l,d]=w(i=>[i.data,i.ids,i.total]),x=P({mode:"onChange"}),[u,b]=c.useState(!1),[f,j]=c.useState(!1),[r,m]=c.useState(null),[t,S]=c.useState(),o=L();c.useEffect(()=>{o&&S(o)},[o]);const h=()=>{m(null),s()},g=async()=>{if(!(!r||!n)){b(!0);try{await A({from:t==null?void 0:t.ref_id,to:r==null?void 0:r.ref_id}),t!=null&&t.ref_id&&(n[t==null?void 0:t.ref_id]={...n[t==null?void 0:t.ref_id],edgeList:[H],edgeCount:n[t==null?void 0:t.ref_id].edgeCount-1},w.setState({ids:l.filter(i=>i!==r.ref_id),total:d-1})),h()}catch(i){console.warn(i)}finally{b(!1)}}};return e.jsx(R,{id:"mergeToNode",kind:"small",onClose:h,preventOutsideClose:!0,children:e.jsxs(U,{...x,children:[e.jsx(Q,{from:t,isSwapped:f,onSelect:m,selectedToNode:r,setIsSwapped:()=>j(!f)}),e.jsxs(ne,{color:"secondary","data-testid":"merge-topics-button",disabled:u||!r,onClick:g,size:"large",variant:"contained",children:["Merge topics",u&&e.jsx(re,{children:e.jsx(X,{color:k.BLUE_PRESS_STATE,size:12})})]})]})})},ne=a(W)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,re=a.span`
  margin-top: 2px;
`;export{de as MergeNodeModal};
