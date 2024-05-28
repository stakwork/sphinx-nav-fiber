import{r as d,y as B,j as e,F as x,A as E,f as n,T as _,B as F,a5 as M,h as v,b1 as k,G as N}from"./index-530f6618.js";import{I as z,b as O,c as D,F as P,C as I,B as R}from"./react-toastify.esm-7264a5d3.js";import{B as Y}from"./index-a101b3f5.js";import{A as X,u as C,I as H}from"./index-a3fa1a1a.js";import{a as U,N as G,F as W,b as $}from"./index-03b01b14.js";import{A as q,T as J}from"./index-3db1f864.js";import"./generateCategoricalChart-32ace6f3.js";import"./Popover-99e940b8.js";import"./useSlotProps-11e18c14.js";import"./InfoIcon-1357a1ce.js";import"./index.esm-51a0b245.js";import"./NoFilterResultIcon-63c61aee.js";import"./index-2f843e70.js";import"./index-fa56e81c.js";import"./PlusIcon-357dc440.js";import"./CheckIcon-44aceca1.js";import"./index-a388b7a3.js";import"./Popper-31c40a3a.js";const K=({topicId:s,onSelect:i,selectedValue:c})=>{const[a,f]=d.useState([]),[j,h]=d.useState(!1),u=d.useMemo(()=>{const o=async t=>{const m={is_muted:"False",sort_by:X,search:t,skip:"0",limit:"1000"};h(!0);try{const w=(await E(m.search)).data.filter(g=>(g==null?void 0:g.ref_id)!==s);f(w)}catch{f([])}finally{h(!1)}};return B.debounce(o,300)},[s]),y=o=>{if(!o){f([]);return}o.length>2&&u(o)},r=o=>{const t=o?a.find(m=>m.ref_id===o.value):null;i(t||null)},S=o=>({label:o.search_value,value:o.ref_id,type:o.node_type}),T=o=>o.map(S);return c?e.jsxs(x,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:c.search_value}),e.jsx(z,{onClick:()=>i(null),size:"small",children:e.jsx(O,{})})]}):e.jsx(q,{handleInputChange:y,isLoading:j,onSelect:r,options:T(a)||U,selectedValue:c?S(c):null})},Q=({from:s,onSelect:i,selectedToNode:c,isSwapped:a,setIsSwapped:f})=>e.jsxs(x,{mb:20,children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx(Z,{children:"Merge topic"})})}),e.jsxs(te,{swap:a,children:[e.jsx(V,{children:e.jsx(oe,{disabled:!0,label:a?"To":"From",swap:a,value:s==null?void 0:s.name})}),e.jsxs(x,{my:16,children:[e.jsx(ne,{children:"Type"}),e.jsx(_,{children:"IS ALIAS"})]}),e.jsx(x,{"data-testid":"to-section-container",children:e.jsxs(se,{children:[e.jsx(ie,{children:a?"From":"To"}),e.jsx(K,{onSelect:i,selectedValue:c,topicId:s==null?void 0:s.ref_id})]})}),e.jsxs(ee,{children:[e.jsx(ae,{children:e.jsx(G,{})}),e.jsx(re,{onClick:f,children:e.jsx(W,{})}),e.jsx(le,{children:e.jsx($,{})})]})]})]}),Z=n(_)`
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
`,ae=n.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,re=n.div`
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
`,Le=()=>{const{close:s}=F("mergeToNode"),[i,c,a]=C(p=>[p.data,p.ids,p.total]),f=D({mode:"onChange"}),[j,h]=d.useState(!1),[u,y]=d.useState(!1),[r,S]=d.useState(null),[T,o]=d.useState(!1),[t,m]=d.useState(),l=M();d.useEffect(()=>{(async()=>{if(l){o(!0);try{if(l.type==="topic"){const b=await k({search:l==null?void 0:l.name}),L=b==null?void 0:b.data.find(A=>A.name===l.name);m(L)}}catch(b){console.log(b)}finally{o(!1)}}})()},[l]);const w=()=>{s()},g=async()=>{if(!(!r||!i)){h(!0);try{await N({from:t==null?void 0:t.ref_id,to:r==null?void 0:r.ref_id}),t!=null&&t.ref_id&&(i[t==null?void 0:t.ref_id]={...i[t==null?void 0:t.ref_id],edgeList:[H],edgeCount:i[t==null?void 0:t.ref_id].edgeCount-1},C.setState({ids:c.filter(p=>p!==r.ref_id),total:a-1})),w()}catch(p){console.warn(p)}finally{h(!1)}}};return e.jsx(Y,{id:"mergeToNode",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsxs(P,{...f,children:[T?e.jsx(x,{align:"center",my:24,children:e.jsx(I,{color:v.BLUE_PRESS_STATE,size:24})}):e.jsx(Q,{from:t,isSwapped:u,onSelect:S,selectedToNode:r,setIsSwapped:()=>y(!u)}),e.jsxs(de,{color:"secondary","data-testid":"merge-topics-button",disabled:j||u||!r,onClick:g,size:"large",variant:"contained",children:["Merge topics",j&&e.jsx(I,{color:v.BLUE_PRESS_STATE,size:10})]})]})})},de=n(R)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`;export{Le as MergeNodeModal};
