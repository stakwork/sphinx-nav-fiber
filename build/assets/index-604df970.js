import{r as d,v as B,j as e,F as x,A as E,f as n,T as _,B as F,a5 as M,h as v,b1 as k,G as N}from"./index-8315a78a.js";import{b as z,c as O,F as D,C,B as P}from"./react-toastify.esm-c9bf8e06.js";import{B as R}from"./index-36081304.js";import{S as Y,A as X,u as I,I as H}from"./index-d31750cc.js";import{a as U,N as G,F as W,b as $}from"./index-84fe9f38.js";import{A as q,T as J}from"./index-557881a3.js";import"./generateCategoricalChart-46ff3026.js";import"./Popover-795841fc.js";import"./useSlotProps-1af0a721.js";import"./InfoIcon-0099963d.js";import"./index.esm-dcb6642f.js";import"./NoFilterResultIcon-34423c2b.js";import"./index-44cb4abb.js";import"./index-6f2dd91b.js";import"./PlusIcon-4b89801e.js";import"./CheckIcon-0ce7f101.js";import"./index-5cc0bd6d.js";import"./Popper-355774d1.js";const K=({topicId:s,onSelect:i,selectedValue:c})=>{const[r,u]=d.useState([]),[S,f]=d.useState(!1),h=d.useMemo(()=>{const o=async t=>{const g={is_muted:"False",sort_by:X,search:t,skip:"0",limit:"1000"};f(!0);try{const y=(await E(g.search)).data.filter(b=>(b==null?void 0:b.ref_id)!==s);u(y)}catch{u([])}finally{f(!1)}};return B.debounce(o,300)},[s]),T=o=>{if(!o){u([]);return}o.length>2&&h(o)},a=o=>{const t=o?r.find(g=>g.ref_id===o.value):null;i(t||null)},m=o=>({label:o.search_value,value:o.ref_id,type:o.node_type}),w=o=>o.map(m);return c?e.jsxs(x,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:c.search_value}),e.jsx(Y,{onClick:()=>i(null),size:"medium",children:e.jsx(z,{})})]}):e.jsx(q,{handleInputChange:T,isLoading:S,onSelect:a,options:w(r)||U,selectedValue:c?m(c):null})},Q=({from:s,onSelect:i,selectedToNode:c,isSwapped:r,setIsSwapped:u})=>e.jsxs(x,{mb:20,children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx(Z,{children:"Merge topic"})})}),e.jsxs(te,{swap:r,children:[e.jsx(V,{children:e.jsx(oe,{disabled:!0,label:r?"To":"From",swap:r,value:s==null?void 0:s.name})}),e.jsxs(x,{my:16,children:[e.jsx(ne,{children:"Type"}),e.jsx(_,{children:"IS ALIAS"})]}),e.jsx(x,{"data-testid":"to-section-container",children:e.jsxs(se,{children:[e.jsx(ie,{children:r?"From":"To"}),e.jsx(K,{onSelect:i,selectedValue:c,topicId:s==null?void 0:s.ref_id})]})}),e.jsxs(ee,{children:[e.jsx(re,{children:e.jsx(G,{})}),e.jsx(ae,{onClick:u,children:e.jsx(W,{})}),e.jsx(le,{children:e.jsx($,{})})]})]})]}),Z=n(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,V=n(x)`
  flex: 1 1 100%;
`,ee=n.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,te=n.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${s=>s.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,oe=n(J)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,se=n.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,ne=n.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,ie=n.label`
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
`,re=n.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,ae=n.div`
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
`,le=n.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Le=()=>{const{close:s}=F("mergeToNode"),[i,c,r]=I(p=>[p.data,p.ids,p.total]),u=O({mode:"onChange"}),[S,f]=d.useState(!1),[h,T]=d.useState(!1),[a,m]=d.useState(null),[w,o]=d.useState(!1),[t,g]=d.useState(),l=M();d.useEffect(()=>{(async()=>{if(l){o(!0);try{if(l.type==="topic"){const j=await k({search:l==null?void 0:l.name}),L=j==null?void 0:j.data.find(A=>A.name===l.name);g(L)}}catch(j){console.log(j)}finally{o(!1)}}})()},[l]);const y=()=>{m(null),s()},b=async()=>{if(!(!a||!i)){f(!0);try{await N({from:t==null?void 0:t.ref_id,to:a==null?void 0:a.ref_id}),t!=null&&t.ref_id&&(i[t==null?void 0:t.ref_id]={...i[t==null?void 0:t.ref_id],edgeList:[H],edgeCount:i[t==null?void 0:t.ref_id].edgeCount-1},I.setState({ids:c.filter(p=>p!==a.ref_id),total:r-1})),y()}catch(p){console.warn(p)}finally{f(!1)}}};return e.jsx(R,{id:"mergeToNode",kind:"small",onClose:y,preventOutsideClose:!0,children:e.jsxs(D,{...u,children:[w?e.jsx(x,{align:"center",my:24,children:e.jsx(C,{color:v.BLUE_PRESS_STATE,size:24})}):e.jsx(Q,{from:t,isSwapped:h,onSelect:m,selectedToNode:a,setIsSwapped:()=>T(!h)}),e.jsxs(de,{color:"secondary","data-testid":"merge-topics-button",disabled:S||h||!a,onClick:b,size:"large",variant:"contained",children:["Merge topics",S&&e.jsx(C,{color:v.BLUE_PRESS_STATE,size:10})]})]})})},de=n(P)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`;export{Le as MergeNodeModal};
