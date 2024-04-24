import{r as i,j as e,z as A,y as F,F as u,A as w,f as d,T as k,a3 as O,h as v,B as z}from"./index-6865c215.js";import{B as M}from"./index-41b2a75e.js";import{u as _}from"./index-27c0e8db.js";import{I as P,b as D,c as N,F as R,C as T,B as Y}from"./react-toastify.esm-22bb4a54.js";import{d as X,f as H,F as U,g as $}from"./index-026da7c2.js";import{A as C,T as q}from"./index-e2b6f25f.js";import{A as G}from"./index-29450604.js";import"./generateCategoricalChart-c02bec87.js";import"./Popover-f9928c08.js";import"./useSlotProps-3d116945.js";import"./InfoIcon-bad0ebb4.js";import"./index.esm-6af15a5e.js";import"./NoFilterResultIcon-e651ea7b.js";import"./index-15aedafe.js";import"./index-e40a00bc.js";import"./PlusIcon-8d1cf88e.js";import"./CheckIcon-c555d9ea.js";import"./index-a81519a3.js";import"./Popper-3ee49886.js";const J=({selectedType:n,setSelectedType:l})=>{const[p,a]=i.useState([]);i.useEffect(()=>{(async()=>{try{const{data:x}=await A();a(x.edge_types)}catch(x){console.warn(x)}})()},[a]);const c=o=>({label:o,value:o}),f=o=>{l((o==null?void 0:o.value)||"")};return e.jsx(C,{onSelect:f,options:p.map(c),selectedValue:n?c(n):null})},K=({onSelect:n,selectedValue:l})=>{const[p,a]=i.useState([]),[c,f]=i.useState(!1),o=async t=>{const g={is_muted:"False",sort_by:G,search:t,skip:"0",limit:"1000"};f(!0);try{const s=await w(g.search);a(s.data)}catch{a([])}finally{f(!1)}},x=i.useMemo(()=>F.debounce(o,300),[]),y=t=>{if(!t){a([]);return}t.length>2&&x(t)},b=t=>{const g=t?p.find(s=>s.ref_id===t.value):null;n(g||null)},r=t=>({label:t.search_value,value:t.ref_id,type:t.node_type}),j=t=>t.map(r);return l?e.jsxs(u,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:l.search_value}),e.jsx(P,{onClick:()=>n(null),size:"small",children:e.jsx(D,{})})]}):e.jsx(C,{handleInputChange:y,isLoading:c,onSelect:b,options:j(p)||X,selectedValue:l?r(l):null})},Q=({from:n,onSelect:l,selectedType:p,setSelectedType:a,selectedToNode:c,setIsSwapped:f,isSwapped:o})=>{const x=()=>{f()};return e.jsxs(u,{mb:20,children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(W,{children:"Add Edge"})})}),e.jsxs(Z,{swap:o,children:[e.jsx(u,{children:e.jsx(ee,{disabled:!0,label:o?"To":"From",swap:o,value:n})}),e.jsxs(u,{my:16,children:[e.jsx(oe,{children:"Type"}),e.jsx(J,{selectedType:p,setSelectedType:a})]}),e.jsx(u,{children:e.jsxs(te,{children:[e.jsx(se,{children:o?"From":"To"}),e.jsx(K,{onSelect:l,selectedValue:c})]})}),e.jsxs(V,{children:[e.jsx(ne,{children:e.jsx(H,{})}),e.jsx(re,{onClick:x,children:e.jsx(U,{})}),e.jsx(ie,{children:e.jsx($,{})})]})]})]})},V=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,W=d(k)`
  font-size: 22px;
  font-weight: 600;
`,Z=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${n=>n.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,ee=d(q)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,te=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,oe=d.label`
  background-color: #23252f;
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,se=d.label`
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
`,ne=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,re=d.div`
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
`,ie=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,ae=()=>{const{close:n}=_("addEdgeToNode"),l=N({mode:"onChange"}),[p,a]=i.useState(!1),[c,f]=i.useState(""),[o,x]=i.useState(!1),[y,b]=i.useState(!1),[r,j]=i.useState(null),[t,g]=i.useState(),s=O();i.useEffect(()=>{(async()=>{if(s){b(!0);try{if(s.type==="topic"){const{data:m}=await w(s==null?void 0:s.name,{exact_match:"true",node_type:"topic"}),S=m.find(B=>B.node_type==="topic");g(S)}}catch(m){console.log(m)}finally{b(!1)}}})()},[s]);const E=()=>{n()},I=async()=>{const h=t||s;if(!(!r||!(h!=null&&h.ref_id))){a(!0);try{await z({relationship:c,...o?{to:h.ref_id,from:r==null?void 0:r.ref_id}:{from:h.ref_id,to:r==null?void 0:r.ref_id}});const{ref_id:m}=h,{ref_id:S}=r;console.log(m,S),E()}catch(m){console.warn(m)}finally{a(!1)}}},L=p||!r||!c;return e.jsxs(R,{...l,children:[y?e.jsx(u,{align:"center",my:24,children:e.jsx(T,{color:v.BLUE_PRESS_STATE,size:24})}):e.jsx(Q,{from:t?t==null?void 0:t.search_value:(s==null?void 0:s.name)||"",isSwapped:o,onSelect:j,selectedToNode:r,selectedType:c,setIsSwapped:()=>x(!o),setSelectedType:f}),e.jsxs(Y,{color:"secondary",disabled:L,onClick:I,size:"large",variant:"contained",children:["Confirm",p&&e.jsx(T,{color:v.BLUE_PRESS_STATE,size:10})]})]})},Ee=()=>{const{close:n}=_("addEdgeToNode");return e.jsx(M,{id:"addEdgeToNode",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(ae,{})})};export{Ee as AddNodeEdgeModal};
