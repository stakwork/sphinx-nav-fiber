import{r as l,ak as B,j as e,U as p,ap as E,Q as s,a5 as _,ad as F,a1 as k,S as v,am as M,at as z}from"./index-939706f6.js";import{aT as N,ac as O,aP as D,aQ as P,aU as Y,aW as X,aX as R,aY as U,aV as W,aZ as C,af as G,aG as H,ag as Q,aF as I,a_ as Z,B as $}from"./index-ad62e472.js";const q=({topicId:o,onSelect:i,selectedValue:d,dataId:c})=>{const[x,h]=l.useState([]),[b,u]=l.useState(!1),w=l.useMemo(()=>{const t=async f=>{const n={is_muted:"False",sort_by:Y,search:f,skip:"0",limit:"1000"};u(!0);try{const T=(await E(n.search)).data.filter(a=>(a==null?void 0:a.ref_id)!==o);h(T)}catch{h([])}finally{u(!1)}};return B.debounce(t,300)},[o]),r=t=>{if(!t){h([]);return}t.length>2&&w(t)},m=t=>{const f=t?x.find(n=>n.ref_id===t.value):null;i(f||null)},j=t=>({label:t.search_value,value:t.ref_id,type:t.node_type}),y=t=>t.map(j);return d?e.jsxs(p,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:d.search_value}),e.jsx(N,{onClick:()=>i(null),size:"medium",children:e.jsx(O,{})})]}):e.jsx(D,{dataId:c,handleInputChange:r,isLoading:b,onSelect:m,options:y(x)||P,selectedValue:d?j(d):null})},J=({from:o,onSelect:i,selectedToNode:d,isSwapped:c,setIsSwapped:x})=>e.jsxs(p,{mb:20,children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(K,{children:"Merge topic"})})}),e.jsxs(te,{swap:c,children:[e.jsx(V,{children:e.jsx(oe,{disabled:!0,label:c?"To":"From",swap:c,value:o==null?void 0:o.name})}),e.jsxs(p,{my:16,children:[e.jsx(ae,{children:"Type"}),e.jsx(_,{children:"IS ALIAS"})]}),e.jsx(p,{"data-testid":"to-section-container",children:e.jsxs(se,{children:[e.jsx(ne,{children:c?"From":"To"}),e.jsx(q,{dataId:"to-node",onSelect:i,selectedValue:d,topicId:o==null?void 0:o.ref_id})]})}),e.jsxs(ee,{children:[e.jsx(ie,{children:e.jsx(X,{})}),e.jsx(re,{"data-testid":"swap-icon",onClick:x,children:e.jsx(R,{})}),e.jsx(le,{children:e.jsx(U,{})})]})]})]}),K=s(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,V=s(p)`
  flex: 1 1 100%;
`,ee=s.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,te=s.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${o=>o.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,oe=s(W)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,se=s.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,ae=s.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,ne=s.label`
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
`,ie=s.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,re=s.div`
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
`,le=s.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,he=()=>{const{close:o}=F("mergeToNode"),[i,d,c]=C(a=>[a.data,a.ids,a.total]),x=G({mode:"onChange"}),[h,b]=l.useState(!1),[u,w]=l.useState(!1),[r,m]=l.useState(null),[j,y]=l.useState(!1),[t,f]=l.useState(),n=k();l.useEffect(()=>{(async()=>{if(n){y(!0);try{if(n.type==="topic"){const g=await M({search:n==null?void 0:n.name}),L=g==null?void 0:g.data.find(A=>A.name===n.name);f(L)}}catch(g){console.log(g)}finally{y(!1)}}})()},[n]);const S=()=>{m(null),o()},T=async()=>{if(!(!r||!i)){b(!0);try{await z({from:t==null?void 0:t.ref_id,to:r==null?void 0:r.ref_id}),t!=null&&t.ref_id&&(i[t==null?void 0:t.ref_id]={...i[t==null?void 0:t.ref_id],edgeList:[Z],edgeCount:i[t==null?void 0:t.ref_id].edgeCount-1},C.setState({ids:d.filter(a=>a!==r.ref_id),total:c-1})),S()}catch(a){console.warn(a)}finally{b(!1)}}};return e.jsx(H,{id:"mergeToNode",kind:"small",onClose:S,preventOutsideClose:!0,children:e.jsxs(Q,{...x,children:[j?e.jsx(p,{align:"center",my:24,children:e.jsx(I,{color:v.lightGray,size:24})}):e.jsx(J,{from:t,isSwapped:u,onSelect:m,selectedToNode:r,setIsSwapped:()=>w(!u)}),e.jsxs(de,{color:"secondary","data-testid":"merge-topics-button",disabled:h||!r,onClick:T,size:"large",variant:"contained",children:["Merge topics",h&&e.jsx(ce,{children:e.jsx(I,{color:v.BLUE_PRESS_STATE,size:12})})]})]})})},de=s($)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ce=s.span`
  margin-top: 2px;
`;export{he as MergeNodeModal};
