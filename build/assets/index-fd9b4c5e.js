import{s as N,T as B,j as e,F as r,b as C,r as s,c as L}from"./index-f76464f2.js";import{B as b}from"./index-47dde8aa.js";import{u as x}from"./index-9c3b490f.js";import{l as v,a as F,F as k,B as z,j as D,n as I}from"./react-toastify.esm-bb128754.js";import{u as M}from"./index-eafda19d.js";import{T as R}from"./index-2c3c416b.js";import{S as _}from"./Skeleton-d45c4af6.js";import{C as A}from"./ClipLoader-634bea35.js";import"./index.esm-a945e31d.js";import"./InfoIcon-d72751f5.js";const P=()=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(V,{children:"Edit node name"})})}),e.jsx(r,{mb:12,children:e.jsx(R,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...C}})})]}),V=N(B)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,q=()=>{const{close:i}=x("editNodeName"),[h]=M(a=>[a.data]),c=v({mode:"onChange"}),{watch:j,setValue:d,reset:l}=c,[m,p]=s.useState(!1),[f,u]=s.useState(!1),[t,y]=s.useState(),o=F();s.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{l()}),[t,d,l]),s.useEffect(()=>{(async()=>{if(o){u(!0);try{const{data:n}=await D({search:o==null?void 0:o.name}),E=n.find(w=>w.topic===o.name);y(E)}catch(n){console.error(n)}finally{u(!1)}}})()},[o]);const S=j("topic"),g=()=>{i()},T=async()=>{p(!0);try{await I((t==null?void 0:t.ref_id)||"",{topic:S.trim()}),g()}catch(a){console.warn(a)}finally{p(!1)}};return e.jsxs(k,{...c,children:[f?e.jsx(r,{my:24,children:e.jsx(_,{})}):e.jsx(P,{}),e.jsxs(z,{color:"secondary",disabled:m||f,onClick:T,size:"large",variant:"contained",children:["Save",m&&e.jsx(A,{color:L.BLUE_PRESS_STATE,size:10})]})]})},Z=()=>{const{close:i}=x("editNodeName");return e.jsx(b,{id:"editNodeName",kind:"regular",onClose:i,preventOutsideClose:!0,children:e.jsx(q,{})})};export{Z as EditNodeNameModal};