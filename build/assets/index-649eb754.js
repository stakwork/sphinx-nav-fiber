import{r,j as t,z as A,y as F,F as u,A as w,f as l,T as k,B as C,a4 as O,h as v,C as z}from"./index-b17e6e7f.js";import{B as M}from"./index-a41ce7c3.js";import{I as N,b as P,c as D,F as R,C as T,B as Y}from"./react-toastify.esm-ac6bd257.js";import{b as X,N as H,F as U,A as $}from"./index-adfb9662.js";import{A as _,T as q}from"./index-070c6dfb.js";import{A as G}from"./index-46828888.js";import"./generateCategoricalChart-435279e6.js";import"./Popover-bcd53c70.js";import"./useSlotProps-ddc77366.js";import"./InfoIcon-eed706a9.js";import"./index.esm-de2ad175.js";import"./NoFilterResultIcon-d7bfc88d.js";import"./index-6bbf0f8e.js";import"./index-922af843.js";import"./PlusIcon-179f716a.js";import"./CheckIcon-7c4c0597.js";import"./index-b0a49808.js";import"./Popper-f6f28cec.js";const J=({selectedType:n,setSelectedType:c})=>{const[p,a]=r.useState([]);r.useEffect(()=>{(async()=>{try{const{data:x}=await A();a(x.edge_types)}catch(x){console.warn(x)}})()},[a]);const d=o=>({label:o,value:o}),m=o=>{c((o==null?void 0:o.value)||"")};return t.jsx(_,{onSelect:m,options:p.map(d),selectedValue:n?d(n):null})},K=({onSelect:n,selectedValue:c})=>{const[p,a]=r.useState([]),[d,m]=r.useState(!1),o=async e=>{const g={is_muted:"False",sort_by:G,search:e,skip:"0",limit:"1000"};m(!0);try{const s=await w(g.search);a(s.data)}catch{a([])}finally{m(!1)}},x=r.useMemo(()=>F.debounce(o,300),[]),y=e=>{if(!e){a([]);return}e.length>2&&x(e)},b=e=>{const g=e?p.find(s=>s.ref_id===e.value):null;n(g||null)},i=e=>({label:e.search_value,value:e.ref_id,type:e.node_type}),j=e=>e.map(i);return c?t.jsxs(u,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[t.jsx("span",{children:c.search_value}),t.jsx(N,{onClick:()=>n(null),size:"small",children:t.jsx(P,{})})]}):t.jsx(_,{handleInputChange:y,isLoading:d,onSelect:b,options:j(p)||X,selectedValue:c?i(c):null})},Q=({from:n,onSelect:c,selectedType:p,setSelectedType:a,selectedToNode:d,setIsSwapped:m,isSwapped:o})=>{const x=()=>{m()};return t.jsxs(u,{mb:20,children:[t.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(u,{align:"center",direction:"row",children:t.jsx(W,{children:"Add Edge"})})}),t.jsxs(Z,{swap:o,children:[t.jsx(u,{children:t.jsx(tt,{disabled:!0,label:o?"To":"From",swap:o,value:n})}),t.jsxs(u,{my:16,children:[t.jsx(ot,{children:"Type"}),t.jsx(J,{selectedType:p,setSelectedType:a})]}),t.jsx(u,{children:t.jsxs(et,{children:[t.jsx(st,{children:o?"From":"To"}),t.jsx(K,{onSelect:c,selectedValue:d})]})}),t.jsxs(V,{children:[t.jsx(nt,{children:t.jsx(H,{})}),t.jsx(it,{onClick:x,children:t.jsx(U,{})}),t.jsx(rt,{children:t.jsx($,{})})]})]})]})},V=l.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,W=l(k)`
  font-size: 22px;
  font-weight: 600;
`,Z=l.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${n=>n.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,tt=l(q)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,et=l.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,ot=l.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,st=l.label`
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
`,nt=l.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,it=l.div`
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
`,rt=l.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,at=()=>{const{close:n}=C("addEdgeToNode"),c=D({mode:"onChange"}),[p,a]=r.useState(!1),[d,m]=r.useState(""),[o,x]=r.useState(!1),[y,b]=r.useState(!1),[i,j]=r.useState(null),[e,g]=r.useState(),s=O();r.useEffect(()=>{(async()=>{if(s){b(!0);try{if(s.type==="topic"){const{data:h}=await w(s==null?void 0:s.name,{exact_match:"true",node_type:"topic"}),S=h.find(L=>L.node_type==="topic");g(S)}}catch(h){console.log(h)}finally{b(!1)}}})()},[s]);const E=()=>{n()},I=async()=>{const f=e||s;if(!(!i||!(f!=null&&f.ref_id))){a(!0);try{await z({relationship:d,...o?{to:f.ref_id,from:i==null?void 0:i.ref_id}:{from:f.ref_id,to:i==null?void 0:i.ref_id}});const{ref_id:h}=f,{ref_id:S}=i;console.log(h,S),E()}catch(h){console.warn(h)}finally{a(!1)}}},B=p||!i||!d;return t.jsxs(R,{...c,children:[y?t.jsx(u,{align:"center",my:24,children:t.jsx(T,{color:v.BLUE_PRESS_STATE,size:24})}):t.jsx(Q,{from:e?e==null?void 0:e.search_value:(s==null?void 0:s.name)||"",isSwapped:o,onSelect:j,selectedToNode:i,selectedType:d,setIsSwapped:()=>x(!o),setSelectedType:m}),t.jsxs(lt,{color:"secondary",disabled:B,onClick:I,size:"large",variant:"contained",children:["Confirm",p&&t.jsx(T,{color:v.BLUE_PRESS_STATE,size:10})]})]})},lt=l(Y)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Et=()=>{const{close:n}=C("addEdgeToNode");return t.jsx(M,{id:"addEdgeToNode",kind:"small",onClose:n,preventOutsideClose:!0,children:t.jsx(at,{})})};export{Et as AddNodeEdgeModal};
