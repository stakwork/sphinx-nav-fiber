import{r as c,a7 as T,j as e,F as p,bf as I,o as n,T as v,N as _,y as L,q as A,bi as F}from"./index-4b35c83e.js";import{g as B,i as N,F as E,B as M}from"./index-67c0da52.js";import{B as k}from"./index-24ce2fae.js";import{u as w}from"./index-37235687.js";import{S as O,A as z,N as D,F as P,b as Y,I as R}from"./NodeCircleIcon-c67f59b3.js";import{A as X,O as H,T as W}from"./index-371507bb.js";import{C as q}from"./ClipLoader-b451caa9.js";import"./index-37a24d51.js";import"./Stack-79dc01e7.js";import"./useSlotProps-d8b27a34.js";import"./Popover-e451de0e.js";import"./createSvgIcon-08b8911f.js";import"./TextareaAutosize-c511de29.js";const U=({topicId:s,onSelect:r,selectedValue:l,dataId:d})=>{const[x,u]=c.useState([]),[g,h]=c.useState(!1),j=c.useMemo(()=>{const o=async f=>{const m={is_muted:"False",sort_by:z,search:f,skip:"0",limit:"1000"};h(!0);try{const C=(await I(m.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==s);u(C)}catch{u([])}finally{h(!1)}};return T.debounce(o,300)},[s]),i=o=>{if(!o){u([]);return}o.length>2&&j(o)},b=o=>{const f=o?x.find(m=>m.ref_id===o.value):null;r(f||null)},t=o=>({label:o.search_value,value:o.ref_id,type:o.node_type}),S=o=>o.map(t);return l?e.jsxs(p,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:l.search_value}),e.jsx(O,{onClick:()=>r(null),size:"medium",children:e.jsx(B,{})})]}):e.jsx(X,{dataId:d,handleInputChange:i,isLoading:g,onSelect:b,options:S(x)||H,selectedValue:l?t(l):null})},$=({from:s,onSelect:r,selectedToNode:l,isSwapped:d,setIsSwapped:x})=>e.jsxs(p,{mb:20,children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(G,{children:"Merge topic"})})}),e.jsxs(Q,{swap:d,children:[e.jsx(J,{children:e.jsx(Z,{disabled:!0,label:d?"To":"From",swap:d,value:s==null?void 0:s.name})}),e.jsxs(p,{my:16,children:[e.jsx(ee,{children:"Type"}),e.jsx(v,{children:"IS ALIAS"})]}),e.jsx(p,{"data-testid":"to-section-container",children:e.jsxs(V,{children:[e.jsx(te,{children:d?"From":"To"}),e.jsx(U,{dataId:"to-node",onSelect:r,selectedValue:l,topicId:s==null?void 0:s.ref_id})]})}),e.jsxs(K,{children:[e.jsx(oe,{children:e.jsx(D,{})}),e.jsx(se,{"data-testid":"swap-icon",onClick:x,children:e.jsx(P,{})}),e.jsx(ne,{children:e.jsx(Y,{})})]})]})]}),G=n(v)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,J=n(p)`
  flex: 1 1 100%;
`,K=n.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,Q=n.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${s=>s.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,Z=n(W)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,V=n.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,ee=n.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,te=n.label`
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
`,oe=n.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,se=n.div`
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
`,ne=n.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Se=()=>{const{close:s}=_("mergeToNode"),[r,l,d]=w(a=>[a.data,a.ids,a.total]),x=N({mode:"onChange"}),[u,g]=c.useState(!1),[h,j]=c.useState(!1),[i,b]=c.useState(null),[t,S]=c.useState(),o=L();c.useEffect(()=>{o&&S(o)},[o]);const f=()=>{b(null),s()},m=async()=>{if(!(!i||!r)){g(!0);try{await F({from:t==null?void 0:t.ref_id,to:i==null?void 0:i.ref_id}),t!=null&&t.ref_id&&(r[t==null?void 0:t.ref_id]={...r[t==null?void 0:t.ref_id],edgeList:[R],edgeCount:r[t==null?void 0:t.ref_id].edgeCount-1},w.setState({ids:l.filter(a=>a!==i.ref_id),total:d-1})),f()}catch(a){console.warn(a)}finally{g(!1)}}};return e.jsx(k,{id:"mergeToNode",kind:"small",onClose:f,preventOutsideClose:!0,children:e.jsxs(E,{...x,children:[e.jsx($,{from:t,isSwapped:h,onSelect:b,selectedToNode:i,setIsSwapped:()=>j(!h)}),e.jsxs(re,{color:"secondary","data-testid":"merge-topics-button",disabled:u||!i,onClick:m,size:"large",variant:"contained",children:["Merge topics",u&&e.jsx(ie,{children:e.jsx(q,{color:A.BLUE_PRESS_STATE,size:12})})]})]})})},re=n(M)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ie=n.span`
  margin-top: 2px;
`;export{Se as MergeNodeModal};
