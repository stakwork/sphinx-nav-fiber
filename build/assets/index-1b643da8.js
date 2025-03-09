import{r as p,am as T,j as e,F as x,C as I,bo as _,bA as L,s as n,T as C,a6 as A,l as B,b7 as E,n as F,g as M,bD as N,B as k}from"./index-0bc9ae90.js";import{e as O}from"./index-a97a73cc.js";import{u as w}from"./index-932a9ad0.js";import{S as z,A as D,I as P}from"./constants-2af8fd66.js";import{K as Y,O as R,Q as X}from"./index-0813e708.js";import{A as H,T as W}from"./index-f7cb6eac.js";import{C as K}from"./ClipLoader-a4ee2175.js";import"./SourcesTableIcon-db95c031.js";import"./CheckIcon-c13450bd.js";import"./DeleteNodeIcon-64022384.js";import"./SoundIcon-dbfb099f.js";import"./SucessFeedBackIcon-06d2d64f.js";import"./Stack-faaea80c.js";import"./clsx-0ff35b70.js";import"./createSvgIcon-39e89e6d.js";import"./TextareaAutosize-acb7dc8e.js";const Q=({topicId:s,onSelect:r,selectedValue:d,dataId:c})=>{const[u,h]=p.useState([]),[g,f]=p.useState(!1),j=p.useMemo(()=>{const o=async a=>{const m={is_muted:"False",sort_by:D,search:a,skip:"0",limit:"1000"};f(!0);try{const v=(await L(m.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==s);h(v)}catch{h([])}finally{f(!1)}};return T.debounce(o,300)},[s]),i=o=>{const a=o.trim();if(!a){h([]);return}a.length>2&&j(o)},b=o=>{const a=o?u.find(m=>m.ref_id===o.value):null;r(a||null)},t=o=>({label:o.search_value,value:o.ref_id,type:o.node_type}),S=o=>o.map(t);return d?e.jsxs(x,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:d.search_value}),e.jsx(z,{onClick:()=>r(null),size:"medium",children:e.jsx(I,{})})]}):e.jsx(H,{dataId:c,handleInputChange:i,isLoading:g,onSelect:b,options:S(u)||_,selectedValue:d?t(d):null})},U=({from:s,onSelect:r,selectedToNode:d,isSwapped:c,setIsSwapped:u})=>e.jsxs(x,{mb:20,children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx($,{children:"Merge topic"})})}),e.jsxs(J,{swap:c,children:[e.jsx(q,{children:e.jsx(V,{disabled:!0,label:c?"To":"From",swap:c,value:s==null?void 0:s.name})}),e.jsxs(x,{my:16,children:[e.jsx(ee,{children:"Type"}),e.jsx(C,{children:"IS ALIAS"})]}),e.jsx(x,{"data-testid":"to-section-container",children:e.jsxs(Z,{children:[e.jsx(te,{children:c?"From":"To"}),e.jsx(Q,{dataId:"to-node",onSelect:r,selectedValue:d,topicId:s==null?void 0:s.ref_id})]})}),e.jsxs(G,{children:[e.jsx(oe,{children:e.jsx(Y,{})}),e.jsx(se,{"data-testid":"swap-icon",onClick:u,children:e.jsx(R,{})}),e.jsx(ne,{children:e.jsx(X,{})})]})]})]}),$=n(C)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,q=n(x)`
  flex: 1 1 100%;
`,G=n.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,J=n.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${s=>s.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,V=n(W)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,Z=n.div`
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
`,Ce=()=>{const{close:s}=A("mergeToNode"),[r,d,c]=w(l=>[l.data,l.ids,l.total]),u=B({mode:"onChange"}),[h,g]=p.useState(!1),[f,j]=p.useState(!1),[i,b]=p.useState(null),[t,S]=p.useState(),o=O();p.useEffect(()=>{o&&S(o)},[o]);const a=()=>{b(null),s()},m=async()=>{if(!(!i||!r)){g(!0);try{await N({from:t==null?void 0:t.ref_id,to:i==null?void 0:i.ref_id}),t!=null&&t.ref_id&&(r[t==null?void 0:t.ref_id]={...r[t==null?void 0:t.ref_id],edgeList:[P],edgeCount:r[t==null?void 0:t.ref_id].edgeCount-1},w.setState({ids:d.filter(l=>l!==i.ref_id),total:c-1})),a()}catch(l){console.warn(l)}finally{g(!1)}}};return e.jsx(E,{id:"mergeToNode",kind:"small",onClose:a,preventOutsideClose:!0,children:e.jsxs(F,{...u,children:[e.jsx(U,{from:t,isSwapped:f,onSelect:b,selectedToNode:i,setIsSwapped:()=>j(!f)}),e.jsxs(re,{color:"secondary","data-testid":"merge-topics-button",disabled:h||!i,onClick:m,size:"large",variant:"contained",children:["Merge topics",h&&e.jsx(ie,{children:e.jsx(K,{color:M.BLUE_PRESS_STATE,size:12})})]})]})})},re=n(k)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ie=n.span`
  margin-top: 2px;
`;export{Ce as MergeNodeModal};
