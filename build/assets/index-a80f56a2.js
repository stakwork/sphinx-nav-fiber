import{r,j as e,bg as F,a8 as k,F as h,bh as E,o as l,D as O,Q as I,z as A,p as _,bi as z}from"./index-b08b534b.js";import{B as N}from"./index-8867245c.js";import{k as D,i as M,F as Y,B as P}from"./index-9fe70b87.js";import{S as X,A as G,N as H,F as R,b as Q}from"./NodeCircleIcon-1830e18f.js";import{A as L,T as V}from"./index-3245558d.js";import{O as W}from"./constants-a6b58f4d.js";import{C as T}from"./ClipLoader-76edefbe.js";import"./Stack-fb9bbf7e.js";import"./useSlotProps-26d49b50.js";import"./Popover-14b41708.js";import"./createSvgIcon-d9d894b9.js";import"./TextareaAutosize-5e3e1506.js";const $=({selectedType:t,setSelectedType:c})=>{const[p,d]=r.useState([]);r.useEffect(()=>{(async()=>{try{const{data:x}=await F();d(x.edge_types)}catch(x){console.warn(x)}})()},[d]);const i=o=>({label:o,value:o}),f=o=>{c((o==null?void 0:o.value)||"")};return e.jsx(L,{onSelect:f,options:p.map(i),selectedValue:t?i(t):null})},q=({onSelect:t,selectedValue:c,topicId:p})=>{const[d,i]=r.useState([]),[f,o]=r.useState(!1),x=r.useMemo(()=>{const s=async u=>{const a={is_muted:"False",sort_by:G,search:u,skip:"0",limit:"1000"};o(!0);try{const w=(await E(a.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==p);i(w)}catch{i([])}finally{o(!1)}};return k.debounce(s,300)},[p]),b=s=>{const u=s.trim();if(!u){i([]);return}u.length>2&&x(s)},j=s=>{const u=s?d.find(a=>a.ref_id===s.value):null;t(u||null)},n=s=>({label:s.search_value,value:s.ref_id,type:s.node_type}),v=s=>s.map(n);return c?e.jsxs(h,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:c.search_value}),e.jsx(X,{onClick:()=>t(null),size:"medium",children:e.jsx(D,{})})]}):e.jsx(L,{handleInputChange:b,isLoading:f,onSelect:j,options:v(d)||W,selectedValue:c?n(c):null})},J=({from:t,onSelect:c,selectedType:p,setSelectedType:d,selectedToNode:i,setIsSwapped:f,isSwapped:o})=>{const x=()=>{f()},b=t&&("search_value"in t?t.search_value:t.name);return e.jsxs(h,{mb:20,children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(U,{children:"Add Edge"})})}),e.jsxs(Z,{swap:o,children:[e.jsx(h,{children:e.jsx(ee,{disabled:!0,label:o?"To":"From",swap:o,value:b})}),e.jsxs(h,{my:16,children:[e.jsx(oe,{children:"Type"}),e.jsx($,{selectedType:p,setSelectedType:d})]}),e.jsx(h,{children:e.jsxs(te,{children:[e.jsx(se,{children:o?"From":"To"}),e.jsx(q,{onSelect:c,selectedValue:i,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(K,{children:[e.jsx(ne,{children:e.jsx(H,{})}),e.jsx(ie,{onClick:x,children:e.jsx(R,{})}),e.jsx(ae,{children:e.jsx(Q,{})})]})]})]})},K=l.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,U=l(O)`
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
`,ee=l(V)`
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
`,ie=l.div`
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
`,ae=l.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,re=()=>{const{close:t}=I("addEdgeToNode"),c=M({mode:"onChange"}),[p,d]=r.useState(!1),[i,f]=r.useState(""),[o,x]=r.useState(!1),[b,j]=r.useState(!1),[n,v]=r.useState(null),[s,u]=r.useState(),a=A();r.useEffect(()=>{(async()=>{if(a){j(!0);try{if(a.type==="topic"){const{data:m}=await E(a==null?void 0:a.name,{exact_match:"true",node_type:"topic"}),C=m.find(B=>B.node_type==="topic");u(C)}}catch(m){console.error(m)}finally{j(!1)}}})()},[a]);const S=()=>{t()},w=async()=>{const g=s||a;if(!(!n||!(g!=null&&g.ref_id))){d(!0);try{await z({relationship:i,...o?{to:g.ref_id,from:n==null?void 0:n.ref_id}:{from:g.ref_id,to:n==null?void 0:n.ref_id}});const{ref_id:m}=g,{ref_id:C}=n;console.log(m,C),S()}catch(m){console.warn(m)}finally{d(!1)}}},y=p||!n||!i;return e.jsxs(Y,{...c,children:[b?e.jsx(h,{align:"center",my:24,children:e.jsx(T,{color:_.lightGray,size:24})}):e.jsx(J,{from:s??a,isSwapped:o,onSelect:v,selectedToNode:n,selectedType:i,setIsSwapped:()=>x(!o),setSelectedType:f}),e.jsxs(le,{color:"secondary",disabled:y,onClick:w,size:"large",variant:"contained",children:["Confirm",p&&e.jsx(ce,{children:e.jsx(T,{color:_.lightGray,size:12})})]})]})},le=l(P)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ce=l.span`
  margin-top: 2px;
`,Se=()=>{const{close:t}=I("addEdgeToNode");return e.jsx(N,{id:"addEdgeToNode",kind:"small",onClose:t,preventOutsideClose:!0,children:e.jsx(re,{})})};export{Se as AddNodeEdgeModal};
