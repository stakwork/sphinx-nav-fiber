import{r as l,v as B,j as e,F as p,A as E,f as n,T as _,B as F,a5 as M,h as v,b1 as k,G as N}from"./index-ccbcf913.js";import{b as z,c as O,F as D,C as I,B as P}from"./react-toastify.esm-8db1f6ed.js";import{B as R}from"./index-afd26c51.js";import{S as Y,A as X,u as C,I as H}from"./index-9d1dce08.js";import{a as U,N as G,F as W,b as $}from"./index-fb8523d7.js";import{A as q,T as J}from"./index-be5e76e2.js";import"./generateCategoricalChart-1869a071.js";import"./Popover-e013dd18.js";import"./useSlotProps-261fbc24.js";import"./InfoIcon-f9bbc38f.js";import"./index.esm-4d529a46.js";import"./NoFilterResultIcon-0e021255.js";import"./index-a6ae168c.js";import"./index-f2376303.js";import"./PlusIcon-7fab8941.js";import"./CheckIcon-4c80da60.js";import"./index-4848061c.js";import"./Popper-b0ff3088.js";const K=({topicId:o,onSelect:a,selectedValue:d,dataId:c})=>{const[x,u]=l.useState([]),[g,f]=l.useState(!1),T=l.useMemo(()=>{const t=async h=>{const i={is_muted:"False",sort_by:X,search:h,skip:"0",limit:"1000"};f(!0);try{const w=(await E(i.search)).data.filter(s=>(s==null?void 0:s.ref_id)!==o);u(w)}catch{u([])}finally{f(!1)}};return B.debounce(t,300)},[o]),r=t=>{if(!t){u([]);return}t.length>2&&T(t)},b=t=>{const h=t?x.find(i=>i.ref_id===t.value):null;a(h||null)},j=t=>({label:t.search_value,value:t.ref_id,type:t.node_type}),S=t=>t.map(j);return d?e.jsxs(p,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:d.search_value}),e.jsx(Y,{onClick:()=>a(null),size:"medium",children:e.jsx(z,{})})]}):e.jsx(q,{dataId:c,handleInputChange:r,isLoading:g,onSelect:b,options:S(x)||U,selectedValue:d?j(d):null})},Q=({from:o,onSelect:a,selectedToNode:d,isSwapped:c,setIsSwapped:x})=>e.jsxs(p,{mb:20,children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(Z,{children:"Merge topic"})})}),e.jsxs(te,{swap:c,children:[e.jsx(V,{children:e.jsx(oe,{disabled:!0,label:c?"To":"From",swap:c,value:o==null?void 0:o.name})}),e.jsxs(p,{my:16,children:[e.jsx(ne,{children:"Type"}),e.jsx(_,{children:"IS ALIAS"})]}),e.jsx(p,{"data-testid":"to-section-container",children:e.jsxs(se,{children:[e.jsx(ie,{children:c?"From":"To"}),e.jsx(K,{dataId:"to-node",onSelect:a,selectedValue:d,topicId:o==null?void 0:o.ref_id})]})}),e.jsxs(ee,{children:[e.jsx(ae,{children:e.jsx(G,{})}),e.jsx(re,{"data-testid":"swap-icon",onClick:x,children:e.jsx(W,{})}),e.jsx(le,{children:e.jsx($,{})})]})]})]}),Z=n(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,V=n(p)`
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
  flex-direction: ${o=>o.swap?"column-reverse":"column"};
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
`,Le=()=>{const{close:o}=F("mergeToNode"),[a,d,c]=C(s=>[s.data,s.ids,s.total]),x=O({mode:"onChange"}),[u,g]=l.useState(!1),[f,T]=l.useState(!1),[r,b]=l.useState(null),[j,S]=l.useState(!1),[t,h]=l.useState(),i=M();l.useEffect(()=>{(async()=>{if(i){S(!0);try{if(i.type==="topic"){const m=await k({search:i==null?void 0:i.name}),L=m==null?void 0:m.data.find(A=>A.name===i.name);h(L)}}catch(m){console.log(m)}finally{S(!1)}}})()},[i]);const y=()=>{b(null),o()},w=async()=>{if(!(!r||!a)){g(!0);try{await N({from:t==null?void 0:t.ref_id,to:r==null?void 0:r.ref_id}),t!=null&&t.ref_id&&(a[t==null?void 0:t.ref_id]={...a[t==null?void 0:t.ref_id],edgeList:[H],edgeCount:a[t==null?void 0:t.ref_id].edgeCount-1},C.setState({ids:d.filter(s=>s!==r.ref_id),total:c-1})),y()}catch(s){console.warn(s)}finally{g(!1)}}};return e.jsx(R,{id:"mergeToNode",kind:"small",onClose:y,preventOutsideClose:!0,children:e.jsxs(D,{...x,children:[j?e.jsx(p,{align:"center",my:24,children:e.jsx(I,{color:v.BLUE_PRESS_STATE,size:24})}):e.jsx(Q,{from:t,isSwapped:f,onSelect:b,selectedToNode:r,setIsSwapped:()=>T(!f)}),e.jsxs(de,{color:"secondary","data-testid":"merge-topics-button",disabled:u||!r,onClick:w,size:"large",variant:"contained",children:["Merge topics",u&&e.jsx(I,{color:v.BLUE_PRESS_STATE,size:10})]})]})})},de=n(P)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`;export{Le as MergeNodeModal};
