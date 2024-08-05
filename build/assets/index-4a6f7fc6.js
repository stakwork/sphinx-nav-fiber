import{r as p,a7 as T,j as e,F as x,bf as I,o as n,T as v,N as _,y as L,q as A,bi as F}from"./index-b32e1ec4.js";import{g as B,i as N,F as E,B as M}from"./index-c0312354.js";import{B as k}from"./index-2267143a.js";import{u as w}from"./index-4060dfc0.js";import{S as O,A as z,N as D,F as P,b as Y,I as R}from"./NodeCircleIcon-1686cdb1.js";import{A as X,O as H,T as W}from"./index-4fdabe4b.js";import{C as q}from"./ClipLoader-c2d8f3f5.js";import"./index-fea3ec52.js";import"./Stack-87b4f1b9.js";import"./useSlotProps-87521ceb.js";import"./Popover-5c26409a.js";import"./createSvgIcon-ca5f5744.js";import"./TextareaAutosize-d79a72cb.js";const U=({topicId:s,onSelect:r,selectedValue:d,dataId:c})=>{const[u,f]=p.useState([]),[g,h]=p.useState(!1),j=p.useMemo(()=>{const o=async a=>{const m={is_muted:"False",sort_by:z,search:a,skip:"0",limit:"1000"};h(!0);try{const C=(await I(m.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==s);f(C)}catch{f([])}finally{h(!1)}};return T.debounce(o,300)},[s]),i=o=>{const a=o.trim();if(!a){f([]);return}a.length>2&&j(o)},b=o=>{const a=o?u.find(m=>m.ref_id===o.value):null;r(a||null)},t=o=>({label:o.search_value,value:o.ref_id,type:o.node_type}),S=o=>o.map(t);return d?e.jsxs(x,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:d.search_value}),e.jsx(O,{onClick:()=>r(null),size:"medium",children:e.jsx(B,{})})]}):e.jsx(X,{dataId:c,handleInputChange:i,isLoading:g,onSelect:b,options:S(u)||H,selectedValue:d?t(d):null})},$=({from:s,onSelect:r,selectedToNode:d,isSwapped:c,setIsSwapped:u})=>e.jsxs(x,{mb:20,children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx(G,{children:"Merge topic"})})}),e.jsxs(Q,{swap:c,children:[e.jsx(J,{children:e.jsx(V,{disabled:!0,label:c?"To":"From",swap:c,value:s==null?void 0:s.name})}),e.jsxs(x,{my:16,children:[e.jsx(ee,{children:"Type"}),e.jsx(v,{children:"IS ALIAS"})]}),e.jsx(x,{"data-testid":"to-section-container",children:e.jsxs(Z,{children:[e.jsx(te,{children:c?"From":"To"}),e.jsx(U,{dataId:"to-node",onSelect:r,selectedValue:d,topicId:s==null?void 0:s.ref_id})]})}),e.jsxs(K,{children:[e.jsx(oe,{children:e.jsx(D,{})}),e.jsx(se,{"data-testid":"swap-icon",onClick:u,children:e.jsx(P,{})}),e.jsx(ne,{children:e.jsx(Y,{})})]})]})]}),G=n(v)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,J=n(x)`
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
`,Se=()=>{const{close:s}=_("mergeToNode"),[r,d,c]=w(l=>[l.data,l.ids,l.total]),u=N({mode:"onChange"}),[f,g]=p.useState(!1),[h,j]=p.useState(!1),[i,b]=p.useState(null),[t,S]=p.useState(),o=L();p.useEffect(()=>{o&&S(o)},[o]);const a=()=>{b(null),s()},m=async()=>{if(!(!i||!r)){g(!0);try{await F({from:t==null?void 0:t.ref_id,to:i==null?void 0:i.ref_id}),t!=null&&t.ref_id&&(r[t==null?void 0:t.ref_id]={...r[t==null?void 0:t.ref_id],edgeList:[R],edgeCount:r[t==null?void 0:t.ref_id].edgeCount-1},w.setState({ids:d.filter(l=>l!==i.ref_id),total:c-1})),a()}catch(l){console.warn(l)}finally{g(!1)}}};return e.jsx(k,{id:"mergeToNode",kind:"small",onClose:a,preventOutsideClose:!0,children:e.jsxs(E,{...u,children:[e.jsx($,{from:t,isSwapped:h,onSelect:b,selectedToNode:i,setIsSwapped:()=>j(!h)}),e.jsxs(re,{color:"secondary","data-testid":"merge-topics-button",disabled:f||!i,onClick:m,size:"large",variant:"contained",children:["Merge topics",f&&e.jsx(ie,{children:e.jsx(q,{color:A.BLUE_PRESS_STATE,size:12})})]})]})})},re=n(M)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ie=n.span`
  margin-top: 2px;
`;export{Se as MergeNodeModal};
