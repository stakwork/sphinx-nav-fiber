import{j as e,r as i,A as B,y as A,F as u,bi as C,f as d,T as F,a3 as O,h as v,B as M}from"./index-b85f35cf.js";import{B as z}from"./index-0c223900.js";import{u as T}from"./index-b9c9b7e2.js";import{I as D,b as P,c as N,F as R,C as S,B as Y}from"./react-toastify.esm-ce67a4f9.js";import{A as _,T as X}from"./index-39ab8de8.js";import{a as H}from"./constants-cde8ebc3.js";import{A as U}from"./index-856cc0ad.js";import"./Popover-28c1573e.js";import"./useSlotProps-b8a587b0.js";import"./Select-f3cb55de.js";import"./Stack-b0e83988.js";import"./Popper-704ca55a.js";const V=s=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 6 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 5L6.90043e-08 9.33013L4.47556e-07 0.669872L6 5Z",fill:"currentColor"})}),Z=s=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4.5 6.04386L7.83333 2.83398V13.6673",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M15.5 13.9581L12.1667 17.168L12.1667 6.33463",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),$=s=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 10 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"5",cy:"5",r:"4.5",fill:"currentColor",stroke:"#6B7A8D"})}),q=({selectedType:s,setSelectedType:l})=>{const[p,a]=i.useState([]);i.useEffect(()=>{(async()=>{try{const{data:x}=await B();a(x.edge_types)}catch(x){console.warn(x)}})()},[a]);const c=o=>({label:o,value:o}),h=o=>{l((o==null?void 0:o.value)||"")};return e.jsx(_,{onSelect:h,options:p.map(c),selectedValue:s?c(s):null})},G=({onSelect:s,selectedValue:l})=>{const[p,a]=i.useState([]),[c,h]=i.useState(!1),o=async t=>{const g={muted:"False",sort_by:U,search:t,skip:"0",limit:"1000"};h(!0);try{const n=await C(g.search);a(n.data)}catch{a([])}finally{h(!1)}},x=i.useMemo(()=>A.debounce(o,300),[]),j=t=>{if(!t){a([]);return}t.length>2&&x(t)},b=t=>{const g=t?p.find(n=>n.ref_id===t.value):null;s(g||null)},r=t=>({label:t.search_value,value:t.ref_id,type:t.node_type}),w=t=>t.map(r);return l?e.jsxs(u,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:l.search_value}),e.jsx(D,{onClick:()=>s(null),size:"small",children:e.jsx(P,{})})]}):e.jsx(_,{handleInputChange:j,isLoading:c,onSelect:b,options:w(p)||H,selectedValue:l?r(l):null})},J=({from:s,onSelect:l,selectedType:p,setSelectedType:a,selectedToNode:c,setIsSwapped:h,isSwapped:o})=>{const x=()=>{h()};return e.jsxs(u,{mb:20,children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(Q,{children:"Add Edge"})})}),e.jsxs(W,{swap:o,children:[e.jsx(u,{children:e.jsx(ee,{disabled:!0,label:o?"To":"From",swap:o,value:s})}),e.jsxs(u,{my:16,children:[e.jsx(oe,{children:"Type"}),e.jsx(q,{selectedType:p,setSelectedType:a})]}),e.jsx(u,{children:e.jsxs(te,{children:[e.jsx(se,{children:o?"From":"To"}),e.jsx(G,{onSelect:l,selectedValue:c})]})}),e.jsxs(K,{children:[e.jsx(ne,{children:e.jsx($,{})}),e.jsx(re,{onClick:x,children:e.jsx(Z,{})}),e.jsx(ie,{children:e.jsx(V,{})})]})]})]})},K=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,Q=d(F)`
  font-size: 22px;
  font-weight: 600;
`,W=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${s=>s.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,ee=d(X)`
  position: relative;
  width: 250px;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,te=d.div`
  position: relative;
  width: 250px;
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
`,ae=()=>{const{close:s}=T("addEdgeToNode"),l=N({mode:"onChange"}),[p,a]=i.useState(!1),[c,h]=i.useState(""),[o,x]=i.useState(!1),[j,b]=i.useState(!1),[r,w]=i.useState(null),[t,g]=i.useState(),n=O();i.useEffect(()=>{(async()=>{if(n){b(!0);try{if(n.type==="topic"){const{data:m}=await C(n==null?void 0:n.name,{exact_match:"true",node_type:"topic"}),y=m.find(I=>I.node_type==="topic");g(y)}}catch(m){console.log(m)}finally{b(!1)}}})()},[n]);const E=()=>{s()},L=async()=>{const f=t||n;if(!(!r||!(f!=null&&f.ref_id))){a(!0);try{await M({relationship:c,...o?{to:f.ref_id,from:r==null?void 0:r.ref_id}:{from:f.ref_id,to:r==null?void 0:r.ref_id}});const{ref_id:m}=f,{ref_id:y}=r;console.log(m,y),E()}catch(m){console.warn(m)}finally{a(!1)}}},k=p||!r||!c;return e.jsxs(R,{...l,children:[j?e.jsx(u,{align:"center",my:24,children:e.jsx(S,{color:v.BLUE_PRESS_STATE,size:24})}):e.jsx(J,{from:t?t==null?void 0:t.search_value:(n==null?void 0:n.name)||"",isSwapped:o,onSelect:w,selectedToNode:r,selectedType:c,setIsSwapped:()=>x(!o),setSelectedType:h}),e.jsxs(Y,{color:"secondary",disabled:k,onClick:L,size:"large",variant:"contained",children:["Confirm",p&&e.jsx(S,{color:v.BLUE_PRESS_STATE,size:10})]})]})},we=()=>{const{close:s}=T("addEdgeToNode");return e.jsx(z,{id:"addEdgeToNode",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(ae,{})})};export{we as AddNodeEdgeModal};
