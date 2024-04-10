import{j as e,r,A as B,y as I,bh as T,f as l,T as A,F as w,a3 as z,h as S,B as F}from"./index-299e7590.js";import{B as O}from"./index-e55329f0.js";import{u as E}from"./index-39d7c398.js";import{c as M,F as D,C,B as P}from"./react-toastify.esm-56bc85ec.js";import{A as _,T as $}from"./index-a6d876b2.js";import{a as N}from"./constants-cde8ebc3.js";import{A as R}from"./index-76f03922.js";import"./Popover-85fa5d36.js";import"./useSlotProps-1358bf37.js";import"./Select-bea119a5.js";import"./Stack-bac23c11.js";import"./Popper-c9815c2f.js";const V=o=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 6 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 5L6.90043e-08 9.33013L4.47556e-07 0.669872L6 5Z",fill:"currentColor"})}),H=o=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4.5 6.04386L7.83333 2.83398V13.6673",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M15.5 13.9581L12.1667 17.168L12.1667 6.33463",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),U=o=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 10 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"5",cy:"5",r:"4.5",fill:"currentColor",stroke:"#6B7A8D"})}),Y=({selectedType:o,setSelectedType:h})=>{const[p,a]=r.useState([]);r.useEffect(()=>{(async()=>{try{const{data:d}=await B();a(d.edge_types)}catch(d){console.warn(d)}})()},[a]);const c=s=>({label:s,value:s}),n=s=>{h((s==null?void 0:s.value)||"")};return e.jsx(_,{onSelect:n,options:p.map(c),selectedValue:o?c(o):null})},Z=({onSelect:o,selectedValue:h})=>{const[p,a]=r.useState([]),[c,n]=r.useState(!1),s=async t=>{const m={muted:"False",sort_by:R,search:t,skip:"0",limit:"1000"};n(!0);try{const f=await T(m.search);a(f.data)}catch{a([])}finally{n(!1)}},d=r.useMemo(()=>I.debounce(s,300),[]),i=t=>{if(!t){a([]);return}t.length>2&&d(t)},b=t=>{const m=t?p.find(f=>f.ref_id===t.value):null;o(m||null)},x=t=>({label:t.search_value,value:t.ref_id,type:t.node_type}),j=t=>t.map(x);return e.jsx(_,{handleInputChange:i,isLoading:c,onSelect:b,options:j(p)||N,selectedValue:h?x(h):null})},q=({from:o,onSelect:h,selectedType:p,setSelectedType:a,selectedToNode:c})=>{const[n,s]=r.useState(!0),d=()=>{s(!n)};return e.jsxs(w,{mb:20,children:[e.jsx(w,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(w,{align:"center",direction:"row",children:e.jsx(J,{children:"Add Edge"})})}),e.jsxs(oe,{children:[e.jsx(G,{}),e.jsx(se,{children:e.jsx(U,{})}),e.jsx(ne,{onClick:d,children:e.jsx(H,{})}),e.jsx(ie,{children:e.jsx(V,{})})]}),e.jsxs(K,{swap:n,children:[e.jsx(Q,{label:"From",swap:n,value:o}),e.jsxs(X,{swap:n,children:[e.jsx(ee,{children:"Type"}),e.jsx(Y,{selectedType:p,setSelectedType:a})]}),e.jsxs(W,{swap:n,children:[e.jsx(te,{children:"To"}),e.jsx(Z,{onSelect:h,selectedValue:c})]})]})]})},G=l.div`
  position: absolute;
  top: 6px;
  left: 4px;
  width: 35px;
  height: 165px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,J=l(A)`
  font-size: 22px;
  font-weight: 600;
`,K=l.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${o=>o.swap?"column":"column-reverse"};
  margin-bottom: 10px;
`,Q=l($)`
  position: relative;
  width: 250px;
  height: 64px;
  top: ${o=>o.swap?"12px":"25px"};
  left: 55px;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  z-index: -10;
`,W=l.div`
  position: relative;
  width: 250px;
  height: 64px;
  top: ${o=>o.swap?"18px":"8px"};
  margin-left: 55px;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
  z-index: -10;
`,X=l.div`
  position: relative;
  width: 195px;
  height: 64px;
  top: ${o=>(o.swap,"25px")};
  left: 35px;
  opacity: 0px;
  margin-bottom: ${o=>(o.swap,"25px")};
  display: flex;
  align-items: center;
  z-index: -10;
`,ee=l.label`
  background-color: #23252f;
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: relative;
  left: 30px;
  top: -34px;
`,te=l.label`
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
`,oe=l.div`
  position: absolute;
  top: 102px;
  left: 35px;
`,se=l.div`
  position: absolute;
  top: -2px;
  left: 33px;
  color: #23252f;
  width: 10px;
  height: 10px;
`,ne=l.div`
  position: absolute;
  top: 70px;
  left: -10px;
  z-index: 999;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`,ie=l.div`
  position: absolute;
  top: 162px;
  left: 28px;
  color: #6b7a8d;
`,re=()=>{var v;const{close:o}=E("addEdgeToNode"),h=M({mode:"onChange"}),[p,a]=r.useState(!1),[c,n]=r.useState(""),[s,d]=r.useState(!1),[i,b]=r.useState(null);console.log(1234);const[x,j]=r.useState(),t=z();r.useEffect(()=>{(async()=>{if(t){d(!0);try{if(t.type==="topic"){const{data:u}=await T(t==null?void 0:t.name,{exact_match:"true",node_type:"topic"}),y=u.find(k=>k.node_type==="topic");j(y)}}catch(u){console.log(u)}finally{d(!1)}}})()},[t]);const m=()=>{o()},f=async()=>{const g=x||t;if(!(!i||!(g!=null&&g.ref_id))){a(!0);try{await F({from:g.ref_id,to:i==null?void 0:i.ref_id,relationship:c});const{ref_id:u}=g,{ref_id:y}=i;console.log(u,y),m()}catch(u){console.warn(u)}finally{a(!1)}}},L=p||!i||!c;return e.jsxs(D,{...h,children:[s?e.jsx(w,{align:"center",my:24,children:e.jsx(C,{color:S.BLUE_PRESS_STATE,size:24})}):e.jsx(q,{from:x?x==null?void 0:x.search_value:(t==null?void 0:t.name)||"",onSelect:b,selectedToNode:i,selectedType:c,setSelectedType:n}),e.jsxs("div",{children:[(v=x||t)==null?void 0:v.ref_id,": ",i==null?void 0:i.ref_id]}),e.jsxs(P,{color:"secondary",disabled:L,onClick:f,size:"large",variant:"contained",children:["Confirm",p&&e.jsx(C,{color:S.BLUE_PRESS_STATE,size:10})]})]})},be=()=>{const{close:o}=E("addEdgeToNode");return e.jsx(O,{id:"addEdgeToNode",kind:"small",onClose:o,preventOutsideClose:!0,children:e.jsx(re,{})})};export{be as AddNodeEdgeModal};
