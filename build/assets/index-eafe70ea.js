import{r as p,a8 as T,j as e,F as x,C as I,bd as _,bp as L,s as n,T as C,a0 as A,i as F,aY as B,k as E,a as N,bs as k,B as M}from"./index-814def7d.js";import{f as O}from"./index-9e2c3791.js";import{u as w}from"./index-e41467fe.js";import{S as z,A as D,I as Y}from"./constants-9e530140.js";import{N as P,F as R,A as X}from"./NodeCircleIcon-adddadab.js";import{A as H,T as W}from"./index-18499ec5.js";import{C as U}from"./ClipLoader-fee1fd7a.js";import"./index-93d087d3.js";import"./Stack-2b36fa20.js";import"./createSvgIcon-e4ad4091.js";import"./TextareaAutosize-07b9ef03.js";const $=({topicId:s,onSelect:r,selectedValue:d,dataId:c})=>{const[u,f]=p.useState([]),[g,h]=p.useState(!1),j=p.useMemo(()=>{const o=async i=>{const m={is_muted:"False",sort_by:D,search:i,skip:"0",limit:"1000"};h(!0);try{const v=(await L(m.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==s);f(v)}catch{f([])}finally{h(!1)}};return T.debounce(o,300)},[s]),a=o=>{const i=o.trim();if(!i){f([]);return}i.length>2&&j(o)},b=o=>{const i=o?u.find(m=>m.ref_id===o.value):null;r(i||null)},t=o=>({label:o.search_value,value:o.ref_id,type:o.node_type}),S=o=>o.map(t);return d?e.jsxs(x,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:d.search_value}),e.jsx(z,{onClick:()=>r(null),size:"medium",children:e.jsx(I,{})})]}):e.jsx(H,{dataId:c,handleInputChange:a,isLoading:g,onSelect:b,options:S(u)||_,selectedValue:d?t(d):null})},q=({from:s,onSelect:r,selectedToNode:d,isSwapped:c,setIsSwapped:u})=>e.jsxs(x,{mb:20,children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx(G,{children:"Merge topic"})})}),e.jsxs(Q,{swap:c,children:[e.jsx(J,{children:e.jsx(V,{disabled:!0,label:c?"To":"From",swap:c,value:s==null?void 0:s.name})}),e.jsxs(x,{my:16,children:[e.jsx(ee,{children:"Type"}),e.jsx(C,{children:"IS ALIAS"})]}),e.jsx(x,{"data-testid":"to-section-container",children:e.jsxs(Z,{children:[e.jsx(te,{children:c?"From":"To"}),e.jsx($,{dataId:"to-node",onSelect:r,selectedValue:d,topicId:s==null?void 0:s.ref_id})]})}),e.jsxs(K,{children:[e.jsx(oe,{children:e.jsx(P,{})}),e.jsx(se,{"data-testid":"swap-icon",onClick:u,children:e.jsx(R,{})}),e.jsx(ne,{children:e.jsx(X,{})})]})]})]}),G=n(C)`
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
`,be=()=>{const{close:s}=A("mergeToNode"),[r,d,c]=w(l=>[l.data,l.ids,l.total]),u=F({mode:"onChange"}),[f,g]=p.useState(!1),[h,j]=p.useState(!1),[a,b]=p.useState(null),[t,S]=p.useState(),o=O();p.useEffect(()=>{o&&S(o)},[o]);const i=()=>{b(null),s()},m=async()=>{if(!(!a||!r)){g(!0);try{await k({from:t==null?void 0:t.ref_id,to:a==null?void 0:a.ref_id}),t!=null&&t.ref_id&&(r[t==null?void 0:t.ref_id]={...r[t==null?void 0:t.ref_id],edgeList:[Y],edgeCount:r[t==null?void 0:t.ref_id].edgeCount-1},w.setState({ids:d.filter(l=>l!==a.ref_id),total:c-1})),i()}catch(l){console.warn(l)}finally{g(!1)}}};return e.jsx(B,{id:"mergeToNode",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsxs(E,{...u,children:[e.jsx(q,{from:t,isSwapped:h,onSelect:b,selectedToNode:a,setIsSwapped:()=>j(!h)}),e.jsxs(re,{color:"secondary","data-testid":"merge-topics-button",disabled:f||!a,onClick:m,size:"large",variant:"contained",children:["Merge topics",f&&e.jsx(ae,{children:e.jsx(U,{color:N.BLUE_PRESS_STATE,size:12})})]})]})})},re=n(M)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ae=n.span`
  margin-top: 2px;
`;export{be as MergeNodeModal};
