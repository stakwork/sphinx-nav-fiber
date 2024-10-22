import{r as p,H as T,j as e,F as x,aW as I,t as n,T as v,v as _,aZ as L}from"./index-311f5e1d.js";import{ah as A,aP as B,aQ as E,aR as F,u as M,$ as N,e as k,a0 as O,B as z}from"./index-b3d504b4.js";import{B as D}from"./index-146a182e.js";import{u as w}from"./index-ea411943.js";import{S as P,A as R,I as Y}from"./constants-104c86df.js";import{O as H}from"./constants-b2a2fa82.js";import{A as W,T as X}from"./index-4410528e.js";import{C as $}from"./ClipLoader-3e52df85.js";import"./Stack-dcbf847f.js";import"./createSvgIcon-5d2e26a6.js";import"./TextareaAutosize-8373cbad.js";const Q=({topicId:s,onSelect:a,selectedValue:d,dataId:c})=>{const[u,h]=p.useState([]),[g,f]=p.useState(!1),j=p.useMemo(()=>{const o=async i=>{const m={is_muted:"False",sort_by:R,search:i,skip:"0",limit:"1000"};f(!0);try{const C=(await I(m.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==s);h(C)}catch{h([])}finally{f(!1)}};return T.debounce(o,300)},[s]),r=o=>{const i=o.trim();if(!i){h([]);return}i.length>2&&j(o)},b=o=>{const i=o?u.find(m=>m.ref_id===o.value):null;a(i||null)},t=o=>({label:o.search_value,value:o.ref_id,type:o.node_type}),S=o=>o.map(t);return d?e.jsxs(x,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:d.search_value}),e.jsx(P,{onClick:()=>a(null),size:"medium",children:e.jsx(A,{})})]}):e.jsx(W,{dataId:c,handleInputChange:r,isLoading:g,onSelect:b,options:S(u)||H,selectedValue:d?t(d):null})},U=({from:s,onSelect:a,selectedToNode:d,isSwapped:c,setIsSwapped:u})=>e.jsxs(x,{mb:20,children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx(Z,{children:"Merge topic"})})}),e.jsxs(J,{swap:c,children:[e.jsx(q,{children:e.jsx(K,{disabled:!0,label:c?"To":"From",swap:c,value:s==null?void 0:s.name})}),e.jsxs(x,{my:16,children:[e.jsx(ee,{children:"Type"}),e.jsx(v,{children:"IS ALIAS"})]}),e.jsx(x,{"data-testid":"to-section-container",children:e.jsxs(V,{children:[e.jsx(te,{children:c?"From":"To"}),e.jsx(Q,{dataId:"to-node",onSelect:a,selectedValue:d,topicId:s==null?void 0:s.ref_id})]})}),e.jsxs(G,{children:[e.jsx(oe,{children:e.jsx(B,{})}),e.jsx(se,{"data-testid":"swap-icon",onClick:u,children:e.jsx(E,{})}),e.jsx(ne,{children:e.jsx(F,{})})]})]})]}),Z=n(v)`
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
`,K=n(X)`
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
`,be=()=>{const{close:s}=M("mergeToNode"),[a,d,c]=w(l=>[l.data,l.ids,l.total]),u=N({mode:"onChange"}),[h,g]=p.useState(!1),[f,j]=p.useState(!1),[r,b]=p.useState(null),[t,S]=p.useState(),o=k();p.useEffect(()=>{o&&S(o)},[o]);const i=()=>{b(null),s()},m=async()=>{if(!(!r||!a)){g(!0);try{await L({from:t==null?void 0:t.ref_id,to:r==null?void 0:r.ref_id}),t!=null&&t.ref_id&&(a[t==null?void 0:t.ref_id]={...a[t==null?void 0:t.ref_id],edgeList:[Y],edgeCount:a[t==null?void 0:t.ref_id].edgeCount-1},w.setState({ids:d.filter(l=>l!==r.ref_id),total:c-1})),i()}catch(l){console.warn(l)}finally{g(!1)}}};return e.jsx(D,{id:"mergeToNode",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsxs(O,{...u,children:[e.jsx(U,{from:t,isSwapped:f,onSelect:b,selectedToNode:r,setIsSwapped:()=>j(!f)}),e.jsxs(ae,{color:"secondary","data-testid":"merge-topics-button",disabled:h||!r,onClick:m,size:"large",variant:"contained",children:["Merge topics",h&&e.jsx(re,{children:e.jsx($,{color:_.BLUE_PRESS_STATE,size:12})})]})]})})},ae=n(z)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,re=n.span`
  margin-top: 2px;
`;export{be as MergeNodeModal};
