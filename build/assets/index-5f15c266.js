import{r,j as e,bg as F,a9 as A,F as h,bh as E,p as l,E as O,U as I,A as k,q as _,bi as N}from"./index-a2fee79d.js";import{B as z}from"./index-5e0c95ad.js";import{t as D,q as M,F as Y,B as P}from"./index-57446bb9.js";import{S as X,A as q,N as G,F as H,b as R}from"./NodeCircleIcon-dde9d26b.js";import{A as L,T as U}from"./index-c12b6999.js";import{O as V}from"./constants-a6b58f4d.js";import{C as T}from"./ClipLoader-94036fe6.js";import"./Stack-622941f0.js";import"./createSvgIcon-dc3a6e29.js";import"./TextareaAutosize-8a0b55f0.js";const W=({selectedType:t,setSelectedType:c})=>{const[p,d]=r.useState([]);r.useEffect(()=>{(async()=>{try{const{data:x}=await F();d(x.edge_types)}catch(x){console.warn(x)}})()},[d]);const a=o=>({label:o,value:o}),f=o=>{c((o==null?void 0:o.value)||"")};return e.jsx(L,{onSelect:f,options:p.map(a),selectedValue:t?a(t):null})},$=({onSelect:t,selectedValue:c,topicId:p})=>{const[d,a]=r.useState([]),[f,o]=r.useState(!1),x=r.useMemo(()=>{const s=async u=>{const i={is_muted:"False",sort_by:q,search:u,skip:"0",limit:"1000"};o(!0);try{const w=(await E(i.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==p);a(w)}catch{a([])}finally{o(!1)}};return A.debounce(s,300)},[p]),b=s=>{const u=s.trim();if(!u){a([]);return}u.length>2&&x(s)},j=s=>{const u=s?d.find(i=>i.ref_id===s.value):null;t(u||null)},n=s=>({label:s.search_value,value:s.ref_id,type:s.node_type}),v=s=>s.map(n);return c?e.jsxs(h,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:c.search_value}),e.jsx(X,{onClick:()=>t(null),size:"medium",children:e.jsx(D,{})})]}):e.jsx(L,{handleInputChange:b,isLoading:f,onSelect:j,options:v(d)||V,selectedValue:c?n(c):null})},J=({from:t,onSelect:c,selectedType:p,setSelectedType:d,selectedToNode:a,setIsSwapped:f,isSwapped:o})=>{const x=()=>{f()},b=t&&("search_value"in t?t.search_value:t.name);return e.jsxs(h,{mb:20,children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(Q,{children:"Add Edge"})})}),e.jsxs(Z,{swap:o,children:[e.jsx(h,{children:e.jsx(ee,{disabled:!0,label:o?"To":"From",swap:o,value:b})}),e.jsxs(h,{my:16,children:[e.jsx(oe,{children:"Type"}),e.jsx(W,{selectedType:p,setSelectedType:d})]}),e.jsx(h,{children:e.jsxs(te,{children:[e.jsx(se,{children:o?"From":"To"}),e.jsx($,{onSelect:c,selectedValue:a,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(K,{children:[e.jsx(ne,{children:e.jsx(G,{})}),e.jsx(ae,{onClick:x,children:e.jsx(H,{})}),e.jsx(ie,{children:e.jsx(R,{})})]})]})]})},K=l.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,Q=l(O)`
  font-size: 22px;
  font-weight: 600;
`,Z=l.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,ee=l(U)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,te=l.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,oe=l.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,se=l.label`
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
`,ne=l.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,ae=l.div`
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
`,ie=l.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,re=()=>{const{close:t}=I("addEdgeToNode"),c=M({mode:"onChange"}),[p,d]=r.useState(!1),[a,f]=r.useState(""),[o,x]=r.useState(!1),[b,j]=r.useState(!1),[n,v]=r.useState(null),[s,u]=r.useState(),i=k();r.useEffect(()=>{(async()=>{if(i){j(!0);try{if(i.type==="topic"){const{data:m}=await E(i==null?void 0:i.name,{exact_match:"true",node_type:"topic"}),C=m.find(B=>B.node_type==="topic");u(C)}}catch(m){console.error(m)}finally{j(!1)}}})()},[i]);const S=()=>{t()},w=async()=>{const g=s||i;if(!(!n||!(g!=null&&g.ref_id))){d(!0);try{await N({relationship:a,...o?{to:g.ref_id,from:n==null?void 0:n.ref_id}:{from:g.ref_id,to:n==null?void 0:n.ref_id}});const{ref_id:m}=g,{ref_id:C}=n;console.log(m,C),S()}catch(m){console.warn(m)}finally{d(!1)}}},y=p||!n||!a;return e.jsxs(Y,{...c,children:[b?e.jsx(h,{align:"center",my:24,children:e.jsx(T,{color:_.lightGray,size:24})}):e.jsx(J,{from:s??i,isSwapped:o,onSelect:v,selectedToNode:n,selectedType:a,setIsSwapped:()=>x(!o),setSelectedType:f}),e.jsxs(le,{color:"secondary",disabled:y,onClick:w,size:"large",variant:"contained",children:["Confirm",p&&e.jsx(ce,{children:e.jsx(T,{color:_.lightGray,size:12})})]})]})},le=l(P)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ce=l.span`
  margin-top: 2px;
`,je=()=>{const{close:t}=I("addEdgeToNode");return e.jsx(z,{id:"addEdgeToNode",kind:"small",onClose:t,preventOutsideClose:!0,children:e.jsx(re,{})})};export{je as AddNodeEdgeModal};
