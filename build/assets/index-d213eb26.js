import{r as i,j as e,b6 as B,a9 as F,F as h,b7 as E,p as l,G as O,U as I,A as k,q as _,b8 as N}from"./index-82d37e05.js";import{B as z}from"./index-43687a0b.js";import{t as D,q as M,F as Y,B as G}from"./index-704cc98e.js";import{N as P,F as X,A as q}from"./NodeCircleIcon-3ced4176.js";import{A as L,T as H}from"./index-1521d4d3.js";import{O as R}from"./constants-b2a2fa82.js";import{S as U,A as V}from"./constants-bfac5158.js";import{C as T}from"./ClipLoader-bf52a3e7.js";import"./Stack-8df41976.js";import"./createSvgIcon-09858966.js";import"./TextareaAutosize-c2baf328.js";const W=({selectedType:t,setSelectedType:c})=>{const[p,d]=i.useState([]);i.useEffect(()=>{(async()=>{try{const{data:x}=await B();d(x.edge_types)}catch(x){console.warn(x)}})()},[d]);const a=o=>({label:o,value:o}),f=o=>{c((o==null?void 0:o.value)||"")};return e.jsx(L,{onSelect:f,options:p.map(a),selectedValue:t?a(t):null})},$=({onSelect:t,selectedValue:c,topicId:p})=>{const[d,a]=i.useState([]),[f,o]=i.useState(!1),x=i.useMemo(()=>{const s=async u=>{const r={is_muted:"False",sort_by:V,search:u,skip:"0",limit:"1000"};o(!0);try{const w=(await E(r.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==p);a(w)}catch{a([])}finally{o(!1)}};return F.debounce(s,300)},[p]),b=s=>{const u=s.trim();if(!u){a([]);return}u.length>2&&x(s)},j=s=>{const u=s?d.find(r=>r.ref_id===s.value):null;t(u||null)},n=s=>({label:s.search_value,value:s.ref_id,type:s.node_type}),v=s=>s.map(n);return c?e.jsxs(h,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:c.search_value}),e.jsx(U,{onClick:()=>t(null),size:"medium",children:e.jsx(D,{})})]}):e.jsx(L,{handleInputChange:b,isLoading:f,onSelect:j,options:v(d)||R,selectedValue:c?n(c):null})},J=({from:t,onSelect:c,selectedType:p,setSelectedType:d,selectedToNode:a,setIsSwapped:f,isSwapped:o})=>{const x=()=>{f()},b=t&&("search_value"in t?t.search_value:t.name);return e.jsxs(h,{mb:20,children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(Q,{children:"Add Edge"})})}),e.jsxs(Z,{swap:o,children:[e.jsx(h,{children:e.jsx(ee,{disabled:!0,label:o?"To":"From",swap:o,value:b})}),e.jsxs(h,{my:16,children:[e.jsx(oe,{children:"Type"}),e.jsx(W,{selectedType:p,setSelectedType:d})]}),e.jsx(h,{children:e.jsxs(te,{children:[e.jsx(se,{children:o?"From":"To"}),e.jsx($,{onSelect:c,selectedValue:a,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(K,{children:[e.jsx(ne,{children:e.jsx(P,{})}),e.jsx(ae,{onClick:x,children:e.jsx(X,{})}),e.jsx(re,{children:e.jsx(q,{})})]})]})]})},K=l.div`
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
`,ee=l(H)`
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
`,re=l.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,ie=()=>{const{close:t}=I("addEdgeToNode"),c=M({mode:"onChange"}),[p,d]=i.useState(!1),[a,f]=i.useState(""),[o,x]=i.useState(!1),[b,j]=i.useState(!1),[n,v]=i.useState(null),[s,u]=i.useState(),r=k();i.useEffect(()=>{(async()=>{if(r){j(!0);try{if(r.type==="topic"){const{data:m}=await E(r==null?void 0:r.name,{exact_match:"true",node_type:"topic"}),C=m.find(A=>A.node_type==="topic");u(C)}}catch(m){console.error(m)}finally{j(!1)}}})()},[r]);const S=()=>{t()},w=async()=>{const g=s||r;if(!(!n||!(g!=null&&g.ref_id))){d(!0);try{await N({relationship:a,...o?{to:g.ref_id,from:n==null?void 0:n.ref_id}:{from:g.ref_id,to:n==null?void 0:n.ref_id}});const{ref_id:m}=g,{ref_id:C}=n;console.log(m,C),S()}catch(m){console.warn(m)}finally{d(!1)}}},y=p||!n||!a;return e.jsxs(Y,{...c,children:[b?e.jsx(h,{align:"center",my:24,children:e.jsx(T,{color:_.lightGray,size:24})}):e.jsx(J,{from:s??r,isSwapped:o,onSelect:v,selectedToNode:n,selectedType:a,setIsSwapped:()=>x(!o),setSelectedType:f}),e.jsxs(le,{color:"secondary",disabled:y,onClick:w,size:"large",variant:"contained",children:["Confirm",p&&e.jsx(ce,{children:e.jsx(T,{color:_.lightGray,size:12})})]})]})},le=l(G)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ce=l.span`
  margin-top: 2px;
`,ve=()=>{const{close:t}=I("addEdgeToNode");return e.jsx(z,{id:"addEdgeToNode",kind:"small",onClose:t,preventOutsideClose:!0,children:e.jsx(ie,{})})};export{ve as AddNodeEdgeModal};
