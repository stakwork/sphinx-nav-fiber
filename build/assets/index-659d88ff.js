import{r as l,v as B,j as e,F as p,A as F,f as s,T as _,B as E,a5 as M,h as v,b2 as k,G as N}from"./index-383e0c8b.js";import{b as z,c as O,F as D,C,B as P}from"./react-toastify.esm-064ddb25.js";import{B as Y}from"./index-80cb1ac9.js";import{S as R,A as X,u as I,I as G}from"./index-fed0d9e6.js";import{a as H,N as W,F as U,b as $}from"./index-187bee4f.js";import{A as q,T as J}from"./index-c060540d.js";import"./generateCategoricalChart-3d5f54b5.js";import"./Popover-9435e3f5.js";import"./useSlotProps-39eda9f8.js";import"./InfoIcon-00f7404d.js";import"./index.esm-32fe5a81.js";import"./NoFilterResultIcon-dcaf0d3e.js";import"./index-76264462.js";import"./index-b9c662ce.js";import"./PlusIcon-3158c689.js";import"./CheckIcon-a6c01dca.js";import"./index-9410856d.js";import"./Popper-e9f697c2.js";const K=({topicId:o,onSelect:i,selectedValue:d,dataId:c})=>{const[x,h]=l.useState([]),[g,u]=l.useState(!1),w=l.useMemo(()=>{const t=async f=>{const a={is_muted:"False",sort_by:X,search:f,skip:"0",limit:"1000"};u(!0);try{const T=(await F(a.search)).data.filter(n=>(n==null?void 0:n.ref_id)!==o);h(T)}catch{h([])}finally{u(!1)}};return B.debounce(t,300)},[o]),r=t=>{if(!t){h([]);return}t.length>2&&w(t)},b=t=>{const f=t?x.find(a=>a.ref_id===t.value):null;i(f||null)},j=t=>({label:t.search_value,value:t.ref_id,type:t.node_type}),y=t=>t.map(j);return d?e.jsxs(p,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:d.search_value}),e.jsx(R,{onClick:()=>i(null),size:"medium",children:e.jsx(z,{})})]}):e.jsx(q,{dataId:c,handleInputChange:r,isLoading:g,onSelect:b,options:y(x)||H,selectedValue:d?j(d):null})},Q=({from:o,onSelect:i,selectedToNode:d,isSwapped:c,setIsSwapped:x})=>e.jsxs(p,{mb:20,children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(Z,{children:"Merge topic"})})}),e.jsxs(te,{swap:c,children:[e.jsx(V,{children:e.jsx(oe,{disabled:!0,label:c?"To":"From",swap:c,value:o==null?void 0:o.name})}),e.jsxs(p,{my:16,children:[e.jsx(ne,{children:"Type"}),e.jsx(_,{children:"IS ALIAS"})]}),e.jsx(p,{"data-testid":"to-section-container",children:e.jsxs(se,{children:[e.jsx(ae,{children:c?"From":"To"}),e.jsx(K,{dataId:"to-node",onSelect:i,selectedValue:d,topicId:o==null?void 0:o.ref_id})]})}),e.jsxs(ee,{children:[e.jsx(ie,{children:e.jsx(W,{})}),e.jsx(re,{"data-testid":"swap-icon",onClick:x,children:e.jsx(U,{})}),e.jsx(le,{children:e.jsx($,{})})]})]})]}),Z=s(_)`
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
`,oe=s(J)`
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
`,ne=s.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,ae=s.label`
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
`,Ae=()=>{const{close:o}=E("mergeToNode"),[i,d,c]=I(n=>[n.data,n.ids,n.total]),x=O({mode:"onChange"}),[h,g]=l.useState(!1),[u,w]=l.useState(!1),[r,b]=l.useState(null),[j,y]=l.useState(!1),[t,f]=l.useState(),a=M();l.useEffect(()=>{(async()=>{if(a){y(!0);try{if(a.type==="topic"){const m=await k({search:a==null?void 0:a.name}),L=m==null?void 0:m.data.find(A=>A.name===a.name);f(L)}}catch(m){console.log(m)}finally{y(!1)}}})()},[a]);const S=()=>{b(null),o()},T=async()=>{if(!(!r||!i)){g(!0);try{await N({from:t==null?void 0:t.ref_id,to:r==null?void 0:r.ref_id}),t!=null&&t.ref_id&&(i[t==null?void 0:t.ref_id]={...i[t==null?void 0:t.ref_id],edgeList:[G],edgeCount:i[t==null?void 0:t.ref_id].edgeCount-1},I.setState({ids:d.filter(n=>n!==r.ref_id),total:c-1})),S()}catch(n){console.warn(n)}finally{g(!1)}}};return e.jsx(Y,{id:"mergeToNode",kind:"small",onClose:S,preventOutsideClose:!0,children:e.jsxs(D,{...x,children:[j?e.jsx(p,{align:"center",my:24,children:e.jsx(C,{color:v.lightGray,size:24})}):e.jsx(Q,{from:t,isSwapped:u,onSelect:b,selectedToNode:r,setIsSwapped:()=>w(!u)}),e.jsxs(de,{color:"secondary","data-testid":"merge-topics-button",disabled:h||!r,onClick:T,size:"large",variant:"contained",children:["Merge topics",h&&e.jsx(ce,{children:e.jsx(C,{color:v.BLUE_PRESS_STATE,size:12})})]})]})})},de=s(P)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ce=s.span`
  margin-top: 2px;
`;export{Ae as MergeNodeModal};
