import{r,j as e,by as B,ap as O,F as h,C as k,bn as F,bz as _,s as l,T as z,E,l as N,n as D,g as C,B as M,bA as Y,b6 as P}from"./index-e86a3f55.js";import{e as X}from"./index-d7077484.js";import{K as G,O as H,Q as R}from"./index-3a31dfa6.js";import{A as I,T as K}from"./index-c229b670.js";import{S as Q,A as V}from"./constants-e5cef508.js";import{C as T}from"./ClipLoader-6a6c11b4.js";import"./SourcesTableIcon-8b0814dd.js";import"./CheckIcon-86e4f576.js";import"./DeleteNodeIcon-1381115e.js";import"./SoundIcon-c58b3415.js";import"./SucessFeedBackIcon-81377284.js";import"./Stack-56686b91.js";import"./clsx-84305d18.js";import"./createSvgIcon-ec3669a0.js";import"./TextareaAutosize-064ca7e2.js";const W=({selectedType:t,setSelectedType:c})=>{const[p,d]=r.useState([]);r.useEffect(()=>{(async()=>{try{const{data:x}=await B();d(x.edge_types)}catch(x){console.warn(x)}})()},[d]);const n=o=>({label:o,value:o}),f=o=>{c((o==null?void 0:o.value)||"")};return e.jsx(I,{onSelect:f,options:p.map(n),selectedValue:t?n(t):null})},$=({onSelect:t,selectedValue:c,topicId:p})=>{const[d,n]=r.useState([]),[f,o]=r.useState(!1),x=r.useMemo(()=>{const s=async u=>{const i={is_muted:"False",sort_by:V,search:u,skip:"0",limit:"1000"};o(!0);try{const w=(await _(i.search)).data.filter(b=>(b==null?void 0:b.ref_id)!==p);n(w)}catch{n([])}finally{o(!1)}};return O.debounce(s,300)},[p]),m=s=>{const u=s.trim();if(!u){n([]);return}u.length>2&&x(s)},j=s=>{const u=s?d.find(i=>i.ref_id===s.value):null;t(u||null)},a=s=>({label:s.search_value,value:s.ref_id,type:s.node_type}),v=s=>s.map(a);return c?e.jsxs(h,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:c.search_value}),e.jsx(Q,{onClick:()=>t(null),size:"medium",children:e.jsx(k,{})})]}):e.jsx(I,{handleInputChange:m,isLoading:f,onSelect:j,options:v(d)||F,selectedValue:c?a(c):null})},q=({from:t,onSelect:c,selectedType:p,setSelectedType:d,selectedToNode:n,setIsSwapped:f,isSwapped:o})=>{const x=()=>{f()},m=t&&("search_value"in t?t.search_value:t.name);return e.jsxs(h,{mb:20,children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(U,{children:"Add Edge"})})}),e.jsxs(Z,{swap:o,children:[e.jsx(h,{children:e.jsx(ee,{disabled:!0,label:o?"To":"From",swap:o,value:m})}),e.jsxs(h,{my:16,children:[e.jsx(oe,{children:"Type"}),e.jsx(W,{selectedType:p,setSelectedType:d})]}),e.jsx(h,{children:e.jsxs(te,{children:[e.jsx(se,{children:o?"From":"To"}),e.jsx($,{onSelect:c,selectedValue:n,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(J,{children:[e.jsx(ne,{children:e.jsx(G,{})}),e.jsx(ae,{onClick:x,children:e.jsx(H,{})}),e.jsx(ie,{children:e.jsx(R,{})})]})]})]})},J=l.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,U=l(z)`
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
`,ee=l(K)`
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
`,re=()=>{const{close:t}=E("addEdgeToNode"),c=N({mode:"onChange"}),[p,d]=r.useState(!1),[n,f]=r.useState(""),[o,x]=r.useState(!1),[m,j]=r.useState(!1),[a,v]=r.useState(null),[s,u]=r.useState(),i=X();r.useEffect(()=>{(async()=>{if(i){j(!0);try{if(i.type==="topic"){const{data:y}=await _(i==null?void 0:i.name,{exact_match:"true",node_type:"topic"}),L=y.find(A=>A.node_type==="topic");u(L)}}catch(y){console.error(y)}finally{j(!1)}}})()},[i]);const S=()=>{t()},w=async()=>{const g=s||i;if(!(!a||!(g!=null&&g.ref_id))){d(!0);try{await Y({relationship:n,...o?{to:g.ref_id,from:a==null?void 0:a.ref_id}:{from:g.ref_id,to:a==null?void 0:a.ref_id}}),S()}catch(y){console.warn(y)}finally{d(!1)}}},b=p||!a||!n;return e.jsxs(D,{...c,children:[m?e.jsx(h,{align:"center",my:24,children:e.jsx(T,{color:C.lightGray,size:24})}):e.jsx(q,{from:s??i,isSwapped:o,onSelect:v,selectedToNode:a,selectedType:n,setIsSwapped:()=>x(!o),setSelectedType:f}),e.jsxs(le,{color:"secondary",disabled:b,onClick:w,size:"large",variant:"contained",children:["Confirm",p&&e.jsx(ce,{children:e.jsx(T,{color:C.lightGray,size:12})})]})]})},le=l(M)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ce=l.span`
  margin-top: 2px;
`,Te=()=>{const{close:t}=E("addEdgeToNode");return e.jsx(P,{id:"addEdgeToNode",kind:"small",onClose:t,preventOutsideClose:!0,children:e.jsx(re,{})})};export{Te as AddNodeEdgeModal};
