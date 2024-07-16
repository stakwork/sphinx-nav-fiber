import{r,j as e,ao as B,ak as F,U as u,ap as E,Q as l,a5 as O,ad as I,a1 as z,S as _,aq as A}from"./index-82a0cfae.js";import{aP as L,aT as N,ac as D,aQ as M,aU as Y,aV as P,aW as X,aX as G,aY as H,af as Q,ag as R,aF as T,B as U,aG as W}from"./index-4a8e183a.js";const q=({selectedType:t,setSelectedType:c})=>{const[p,d]=r.useState([]);r.useEffect(()=>{(async()=>{try{const{data:x}=await B();d(x.edge_types)}catch(x){console.warn(x)}})()},[d]);const a=o=>({label:o,value:o}),h=o=>{c((o==null?void 0:o.value)||"")};return e.jsx(L,{onSelect:h,options:p.map(a),selectedValue:t?a(t):null})},V=({onSelect:t,selectedValue:c,topicId:p})=>{const[d,a]=r.useState([]),[h,o]=r.useState(!1),x=r.useMemo(()=>{const s=async m=>{const i={is_muted:"False",sort_by:Y,search:m,skip:"0",limit:"1000"};o(!0);try{const w=(await E(i.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==p);a(w)}catch{a([])}finally{o(!1)}};return F.debounce(s,300)},[p]),b=s=>{if(!s){a([]);return}s.length>2&&x(s)},j=s=>{const m=s?d.find(i=>i.ref_id===s.value):null;t(m||null)},n=s=>({label:s.search_value,value:s.ref_id,type:s.node_type}),v=s=>s.map(n);return c?e.jsxs(u,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:c.search_value}),e.jsx(N,{onClick:()=>t(null),size:"medium",children:e.jsx(D,{})})]}):e.jsx(L,{handleInputChange:b,isLoading:h,onSelect:j,options:v(d)||M,selectedValue:c?n(c):null})},$=({from:t,onSelect:c,selectedType:p,setSelectedType:d,selectedToNode:a,setIsSwapped:h,isSwapped:o})=>{const x=()=>{h()},b=t&&("search_value"in t?t.search_value:t.name);return e.jsxs(u,{mb:20,children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(K,{children:"Add Edge"})})}),e.jsxs(Z,{swap:o,children:[e.jsx(u,{children:e.jsx(ee,{disabled:!0,label:o?"To":"From",swap:o,value:b})}),e.jsxs(u,{my:16,children:[e.jsx(oe,{children:"Type"}),e.jsx(q,{selectedType:p,setSelectedType:d})]}),e.jsx(u,{children:e.jsxs(te,{children:[e.jsx(se,{children:o?"From":"To"}),e.jsx(V,{onSelect:c,selectedValue:a,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(J,{children:[e.jsx(ne,{children:e.jsx(X,{})}),e.jsx(ae,{onClick:x,children:e.jsx(G,{})}),e.jsx(ie,{children:e.jsx(H,{})})]})]})]})},J=l.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,K=l(O)`
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
`,ee=l(P)`
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
`,re=()=>{const{close:t}=I("addEdgeToNode"),c=Q({mode:"onChange"}),[p,d]=r.useState(!1),[a,h]=r.useState(""),[o,x]=r.useState(!1),[b,j]=r.useState(!1),[n,v]=r.useState(null),[s,m]=r.useState(),i=z();r.useEffect(()=>{(async()=>{if(i){j(!0);try{if(i.type==="topic"){const{data:f}=await E(i==null?void 0:i.name,{exact_match:"true",node_type:"topic"}),C=f.find(k=>k.node_type==="topic");m(C)}}catch(f){console.log(f)}finally{j(!1)}}})()},[i]);const S=()=>{t()},w=async()=>{const g=s||i;if(!(!n||!(g!=null&&g.ref_id))){d(!0);try{await A({relationship:a,...o?{to:g.ref_id,from:n==null?void 0:n.ref_id}:{from:g.ref_id,to:n==null?void 0:n.ref_id}});const{ref_id:f}=g,{ref_id:C}=n;console.log(f,C),S()}catch(f){console.warn(f)}finally{d(!1)}}},y=p||!n||!a;return e.jsxs(R,{...c,children:[b?e.jsx(u,{align:"center",my:24,children:e.jsx(T,{color:_.lightGray,size:24})}):e.jsx($,{from:s??i,isSwapped:o,onSelect:v,selectedToNode:n,selectedType:a,setIsSwapped:()=>x(!o),setSelectedType:h}),e.jsxs(le,{color:"secondary",disabled:y,onClick:w,size:"large",variant:"contained",children:["Confirm",p&&e.jsx(ce,{children:e.jsx(T,{color:_.lightGray,size:12})})]})]})},le=l(U)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ce=l.span`
  margin-top: 2px;
`,xe=()=>{const{close:t}=I("addEdgeToNode");return e.jsx(W,{id:"addEdgeToNode",kind:"small",onClose:t,preventOutsideClose:!0,children:e.jsx(re,{})})};export{xe as AddNodeEdgeModal};
