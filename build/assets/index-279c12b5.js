import{r as c,j as t,s as h,c as m,T as C,F as d}from"./index-71257a51.js";import{B as N}from"./index-fcf46a2b.js";import{u as S}from"./index-81b7e2b0.js";import{k as L,l as A,F as B,B as z,V as g}from"./react-toastify.esm-80f7abc3.js";import{a as T}from"./index-c8697d14.js";import{A as E}from"./index-bfeb668a.js";import{C as y}from"./ClipLoader-954a7bed.js";import"./index-c1388cf9.js";import"./Popover-750f866a.js";import"./useSlotProps-e0213659.js";import"./Select-f9d2f4e0.js";import"./Stack-f8f836ce.js";import"./Popper-52fdc8f0.js";const F=({selectedType:s,setSelectedType:i})=>{const[r,a]=c.useState([]);c.useEffect(()=>{(async()=>{try{const{data:n}=await L();a(n.edge_types)}catch(n){console.warn(n)}})()},[a]);const o=e=>({label:e,value:e}),p=e=>{i((e==null?void 0:e.value)||"")};return t.jsx(E,{onSelect:p,options:r.map(o),selectedValue:s?o(s):null})},O=({onSelect:s,selectedValue:i})=>{const[r=[]]=T(e=>{var n;return[(n=e==null?void 0:e.data)==null?void 0:n.nodes]}),a=e=>{const n=e?r.find(u=>u.ref_id===e.value):null;s(n||null)},o=e=>({label:e.name,value:e.ref_id,type:e.node_type}),p=e=>e.map(o);return t.jsx(E,{onSelect:a,options:p(r),selectedValue:i?o(i):null})},P=({from:s,onSelect:i,selectedType:r,setSelectedType:a,selectedToNode:o})=>t.jsxs(d,{mb:20,children:[t.jsx(d,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(d,{align:"center",direction:"row",children:t.jsx(k,{children:"Add edge"})})}),t.jsxs(R,{mb:12,children:[t.jsxs(f,{children:[t.jsx("div",{className:"label",children:"From"}),t.jsx("div",{children:s})]}),t.jsxs(f,{children:[t.jsx("div",{className:"label",children:"Type"}),t.jsx(F,{selectedType:r,setSelectedType:a})]}),t.jsxs(f,{children:[t.jsx("div",{className:"label",children:"To"}),t.jsx(O,{onSelect:i,selectedValue:o})]})]})]}),k=h(C)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,R=h(d).attrs({align:"stretch",direction:"row",justify:"flex-start"})`
  color: ${m.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${m.GRAY3};
  }
`,f=h(d)`
  flex: 1 1 100%;
  padding: 0 8px;
`,V=()=>{const{close:s}=S("addEdgeToNode"),i=A({mode:"onChange"}),[r,a]=c.useState(!1),[o,p]=c.useState("RELATION_TYPE"),[e,n]=T(x=>[x.selectedNode,x.addNewLink]),[u,j]=c.useState(!1),[l,b]=c.useState(null);c.useEffect(()=>{(async()=>{if(e){j(!0);try{}catch(_){console.error(_)}finally{j(!1)}}})()},[e]);const v=async()=>{!l||!e||(n({attributes:{},edge_type:o,source:e==null?void 0:e.ref_id,target:l.ref_id,sourcePosition:new g(e.x,e.y,e.z),targetPosition:new g(l.x,l.y,l.z)}),s())},w=r||!l||!o;return t.jsxs(B,{...i,children:[u?t.jsx(d,{align:"center",my:24,children:t.jsx(y,{color:m.BLUE_PRESS_STATE,size:24})}):t.jsx(P,{from:(e==null?void 0:e.name)||"",onSelect:b,selectedToNode:l,selectedType:o,setSelectedType:p}),t.jsxs(z,{color:"secondary",disabled:w,onClick:v,size:"large",variant:"contained",children:["Confirm",r&&t.jsx(y,{color:m.BLUE_PRESS_STATE,size:10})]})]})},X=()=>{const{close:s}=S("addEdgeToNode");return t.jsx(N,{id:"addEdgeToNode",kind:"large",onClose:s,preventOutsideClose:!0,children:t.jsx(V,{})})};export{X as AddNodeEdgeModal};
