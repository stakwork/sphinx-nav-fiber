import{s as N,T as B,j as e,F as r,b as C,r as a,c as L}from"./index-49995fa4.js";import{B as b}from"./index-eb581935.js";import{u as h}from"./index-9b15cf03.js";import{l as v,a as F,F as D,B as k,j as z,n as I}from"./react-toastify.esm-ed803d9a.js";import{u as M}from"./index-44a0230e.js";import{T as R}from"./index-948a2fc0.js";import{S as _}from"./Skeleton-c00ff55a.js";import{C as A}from"./ClipLoader-744d61e7.js";import"./index.esm-7e06d974.js";import"./InfoIcon-0d27e851.js";const P=()=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(V,{children:"Edit node name"})})}),e.jsx(r,{mb:12,children:e.jsx(R,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...C}})})]}),V=N(B)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,q=()=>{const{close:n}=h("editNodeName"),[c]=M(s=>[s.data]),l=v({mode:"onChange"}),{watch:j,setValue:d,reset:m}=l,[p,f]=a.useState(!1),[u,x]=a.useState(!1),[t,g]=a.useState(),o=F();a.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{m()}),[t,d,m]),a.useEffect(()=>{(async()=>{if(o){x(!0);try{const{data:i}=await z({search:o==null?void 0:o.name}),w=i.find(E=>E.topic===o.name);g(w)}catch(i){console.log(i)}finally{x(!1)}}})()},[o]);const y=j("topic"),S=()=>{n()},T=async()=>{f(!0);try{if(await I((t==null?void 0:t.ref_id)||"",{topic:y.trim()}),c){const s={...c};console.log(s)}S()}catch(s){console.warn(s)}finally{f(!1)}};return e.jsxs(D,{...l,children:[u?e.jsx(r,{my:24,children:e.jsx(_,{})}):e.jsx(P,{}),e.jsxs(k,{color:"secondary",disabled:p||u,onClick:T,size:"large",variant:"contained",children:["Save",p&&e.jsx(A,{color:L.BLUE_PRESS_STATE,size:10})]})]})},Z=()=>{const{close:n}=h("editNodeName");return e.jsx(b,{id:"editNodeName",kind:"regular",onClose:n,preventOutsideClose:!0,children:e.jsx(q,{})})};export{Z as EditNodeNameModal};