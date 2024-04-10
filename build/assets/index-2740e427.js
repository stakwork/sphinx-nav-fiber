import{j as e,r as i,A as k,y as B,F as j,bh as T,f as a,T as A,a3 as H,h as C,B as F}from"./index-f5e44975.js";import{B as O}from"./index-b6d9cb2b.js";import{u as L}from"./index-210aa713.js";import{I as V,c as D,F as R,C as S,B as P}from"./react-toastify.esm-d23a87b7.js";import{A as z,T as $}from"./index-5d650521.js";import{a as N}from"./constants-cde8ebc3.js";import{A as U}from"./index-9ef150cd.js";import{c as f}from"./useSlotProps-81537b78.js";import"./Popover-5db26993.js";import"./Select-35456aa0.js";import"./Stack-83dd97b5.js";import"./Popper-b835de55.js";f(e.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");f(e.jsx("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"ArrowLeft");f(e.jsx("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"ArrowRight");f(e.jsx("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Calendar");f(e.jsxs(i.Fragment,{children:[e.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),e.jsx("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})]}),"Clock");f(e.jsx("path",{d:"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"}),"DateRange");f(e.jsxs(i.Fragment,{children:[e.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),e.jsx("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})]}),"Time");const Y=f(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),Z=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 6 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 5L6.90043e-08 9.33013L4.47556e-07 0.669872L6 5Z",fill:"currentColor"})}),q=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4.5 6.04386L7.83333 2.83398V13.6673",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M15.5 13.9581L12.1667 17.168L12.1667 6.33463",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),G=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 10 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"5",cy:"5",r:"4.5",fill:"currentColor",stroke:"#6B7A8D"})}),J=({selectedType:t,setSelectedType:c})=>{const[p,l]=i.useState([]);i.useEffect(()=>{(async()=>{try{const{data:x}=await k();l(x.edge_types)}catch(x){console.warn(x)}})()},[l]);const d=s=>({label:s,value:s}),h=s=>{c((s==null?void 0:s.value)||"")};return e.jsx(z,{onSelect:h,options:p.map(d),selectedValue:t?d(t):null})},K=({onSelect:t,selectedValue:c})=>{const[p,l]=i.useState([]),[d,h]=i.useState(!1),s=async o=>{const m={muted:"False",sort_by:U,search:o,skip:"0",limit:"1000"};h(!0);try{const n=await T(m.search);l(n.data)}catch{l([])}finally{h(!1)}},x=i.useMemo(()=>B.debounce(s,300),[]),v=o=>{if(!o){l([]);return}o.length>2&&x(o)},w=o=>{const m=o?p.find(n=>n.ref_id===o.value):null;t(m||null)},r=o=>({label:o.search_value,value:o.ref_id,type:o.node_type}),b=o=>o.map(r);return c?e.jsxs(j,{align:"center",direction:"row",children:[c.search_value,e.jsx(V,{onClick:()=>t(null),children:e.jsx(Y,{})})]}):e.jsx(z,{handleInputChange:v,isLoading:d,onSelect:w,options:b(p)||N,selectedValue:c?r(c):null})},Q=({from:t,onSelect:c,selectedType:p,setSelectedType:l,selectedToNode:d,setIsSwapped:h,isSwapped:s})=>{const x=()=>{h()};return e.jsxs(j,{mb:20,children:[e.jsx(j,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(j,{align:"center",direction:"row",children:e.jsx(X,{children:"Add Edge"})})}),e.jsxs(re,{children:[e.jsx(W,{}),e.jsx(ae,{children:e.jsx(G,{})}),e.jsx(le,{onClick:x,children:e.jsx(q,{})}),e.jsx(ce,{children:e.jsx(Z,{})})]}),e.jsxs(ee,{swap:s,children:[e.jsx(te,{disabled:!0,label:"From",swap:s,value:t}),e.jsxs(se,{swap:s,children:[e.jsx(ne,{children:"Type"}),e.jsx(J,{selectedType:p,setSelectedType:l})]}),e.jsxs(oe,{swap:s,children:[e.jsx(ie,{children:"To"}),e.jsx(K,{onSelect:c,selectedValue:d})]})]})]})},W=a.div`
  position: absolute;
  top: 6px;
  left: 4px;
  width: 35px;
  height: 165px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,X=a(A)`
  font-size: 22px;
  font-weight: 600;
`,ee=a.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column":"column-reverse"};
  margin-bottom: 10px;
`,te=a($)`
  position: relative;
  width: 250px;
  height: 64px;
  top: ${t=>t.swap?"12px":"25px"};
  left: 55px;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,oe=a.div`
  position: relative;
  width: 250px;
  height: 64px;
  top: ${t=>t.swap?"18px":"8px"};
  margin-left: 55px;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,se=a.div`
  position: relative;
  width: 195px;
  height: 64px;
  top: ${t=>(t.swap,"25px")};
  left: 35px;
  opacity: 0px;
  margin-bottom: ${t=>(t.swap,"25px")};
  display: flex;
  align-items: center;
`,ne=a.label`
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
`,ie=a.label`
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
`,re=a.div`
  position: absolute;
  top: 102px;
  left: 35px;
`,ae=a.div`
  position: absolute;
  top: -2px;
  left: 33px;
  color: #23252f;
  width: 10px;
  height: 10px;
`,le=a.div`
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
`,ce=a.div`
  position: absolute;
  top: 162px;
  left: 28px;
  color: #6b7a8d;
`,de=()=>{const{close:t}=L("addEdgeToNode"),c=D({mode:"onChange"}),[p,l]=i.useState(!1),[d,h]=i.useState(""),[s,x]=i.useState(!1),[v,w]=i.useState(!1),[r,b]=i.useState(null),[o,m]=i.useState(),n=H();i.useEffect(()=>{(async()=>{if(n){w(!0);try{if(n.type==="topic"){const{data:g}=await T(n==null?void 0:n.name,{exact_match:"true",node_type:"topic"}),y=g.find(I=>I.node_type==="topic");m(y)}}catch(g){console.log(g)}finally{w(!1)}}})()},[n]);const _=()=>{t()},E=async()=>{const u=o||n;if(!(!r||!(u!=null&&u.ref_id))){l(!0);try{await F({relationship:d,...s?{to:u.ref_id,from:r==null?void 0:r.ref_id}:{from:u.ref_id,to:r==null?void 0:r.ref_id}});const{ref_id:g}=u,{ref_id:y}=r;console.log(g,y),_()}catch(g){console.warn(g)}finally{l(!1)}}},M=p||!r||!d;return e.jsxs(R,{...c,children:[v?e.jsx(j,{align:"center",my:24,children:e.jsx(S,{color:C.BLUE_PRESS_STATE,size:24})}):e.jsx(Q,{from:o?o==null?void 0:o.search_value:(n==null?void 0:n.name)||"",isSwapped:s,onSelect:b,selectedToNode:r,selectedType:d,setIsSwapped:()=>x(!s),setSelectedType:h}),e.jsxs(P,{color:"secondary",disabled:M,onClick:E,size:"large",variant:"contained",children:["Confirm",p&&e.jsx(S,{color:C.BLUE_PRESS_STATE,size:10})]})]})},Ce=()=>{const{close:t}=L("addEdgeToNode");return e.jsx(O,{id:"addEdgeToNode",kind:"small",onClose:t,preventOutsideClose:!0,children:e.jsx(de,{})})};export{Ce as AddNodeEdgeModal};
