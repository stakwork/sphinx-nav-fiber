import{r,j as e,an as O,aj as k,U as u,ao as I,Q as l,a4 as F,ac as E,a1 as z,S as _,ap as A}from"./index-b4a5f29b.js";import{aO as L,aS as N,a9 as D,aP as M,aT as P,aU as X,aV as Y,aW as H,aX as G,aH as R,aI as U,aB as T,ab as W,aC as Q}from"./index-83ab11f1.js";const V=({selectedType:t,setSelectedType:c})=>{const[p,d]=r.useState([]);r.useEffect(()=>{(async()=>{try{const{data:x}=await O();d(x.edge_types)}catch(x){console.warn(x)}})()},[d]);const a=o=>({label:o,value:o}),h=o=>{c((o==null?void 0:o.value)||"")};return e.jsx(L,{onSelect:h,options:p.map(a),selectedValue:t?a(t):null})},$=({onSelect:t,selectedValue:c,topicId:p})=>{const[d,a]=r.useState([]),[h,o]=r.useState(!1),x=r.useMemo(()=>{const s=async m=>{const i={is_muted:"False",sort_by:P,search:m,skip:"0",limit:"1000"};o(!0);try{const w=(await I(i.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==p);a(w)}catch{a([])}finally{o(!1)}};return k.debounce(s,300)},[p]),b=s=>{if(!s){a([]);return}s.length>2&&x(s)},j=s=>{const m=s?d.find(i=>i.ref_id===s.value):null;t(m||null)},n=s=>({label:s.search_value,value:s.ref_id,type:s.node_type}),v=s=>s.map(n);return c?e.jsxs(u,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:c.search_value}),e.jsx(N,{onClick:()=>t(null),size:"medium",children:e.jsx(D,{})})]}):e.jsx(L,{handleInputChange:b,isLoading:h,onSelect:j,options:v(d)||M,selectedValue:c?n(c):null})},q=({from:t,onSelect:c,selectedType:p,setSelectedType:d,selectedToNode:a,setIsSwapped:h,isSwapped:o})=>{const x=()=>{h()},b=t&&("search_value"in t?t.search_value:t.name);return e.jsxs(u,{mb:20,children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(K,{children:"Add Edge"})})}),e.jsxs(Z,{swap:o,children:[e.jsx(u,{children:e.jsx(ee,{disabled:!0,label:o?"To":"From",swap:o,value:b})}),e.jsxs(u,{my:16,children:[e.jsx(oe,{children:"Type"}),e.jsx(V,{selectedType:p,setSelectedType:d})]}),e.jsx(u,{children:e.jsxs(te,{children:[e.jsx(se,{children:o?"From":"To"}),e.jsx($,{onSelect:c,selectedValue:a,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(J,{children:[e.jsx(ne,{children:e.jsx(Y,{})}),e.jsx(ae,{onClick:x,children:e.jsx(H,{})}),e.jsx(ie,{children:e.jsx(G,{})})]})]})]})},J=l.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,K=l(F)`
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
`,ee=l(X)`
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
`,re=()=>{const{close:t}=E("addEdgeToNode"),c=R({mode:"onChange"}),[p,d]=r.useState(!1),[a,h]=r.useState(""),[o,x]=r.useState(!1),[b,j]=r.useState(!1),[n,v]=r.useState(null),[s,m]=r.useState(),i=z();r.useEffect(()=>{(async()=>{if(i){j(!0);try{if(i.type==="topic"){const{data:f}=await I(i==null?void 0:i.name,{exact_match:"true",node_type:"topic"}),C=f.find(B=>B.node_type==="topic");m(C)}}catch(f){console.log(f)}finally{j(!1)}}})()},[i]);const S=()=>{t()},w=async()=>{const g=s||i;if(!(!n||!(g!=null&&g.ref_id))){d(!0);try{await A({relationship:a,...o?{to:g.ref_id,from:n==null?void 0:n.ref_id}:{from:g.ref_id,to:n==null?void 0:n.ref_id}});const{ref_id:f}=g,{ref_id:C}=n;console.log(f,C),S()}catch(f){console.warn(f)}finally{d(!1)}}},y=p||!n||!a;return e.jsxs(U,{...c,children:[b?e.jsx(u,{align:"center",my:24,children:e.jsx(T,{color:_.lightGray,size:24})}):e.jsx(q,{from:s??i,isSwapped:o,onSelect:v,selectedToNode:n,selectedType:a,setIsSwapped:()=>x(!o),setSelectedType:h}),e.jsxs(le,{color:"secondary",disabled:y,onClick:w,size:"large",variant:"contained",children:["Confirm",p&&e.jsx(ce,{children:e.jsx(T,{color:_.lightGray,size:12})})]})]})},le=l(W)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ce=l.span`
  margin-top: 2px;
`,xe=()=>{const{close:t}=E("addEdgeToNode");return e.jsx(Q,{id:"addEdgeToNode",kind:"small",onClose:t,preventOutsideClose:!0,children:e.jsx(re,{})})};export{xe as AddNodeEdgeModal};
