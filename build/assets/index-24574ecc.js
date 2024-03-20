import{s as i,b as r,T as w,j as e,F as t,h as k,r as a}from"./index-411fe9a5.js";import{B as z}from"./index-f40006ff.js";import{u as m}from"./index-5cc32178.js";import{q as F,O as M,F as A,B as N,C as I,n as V,t as _}from"./react-toastify.esm-650aec5d.js";import{u as $}from"./index-04665246.js";import{T as q}from"./index-c81ffe9a.js";import{S as O}from"./Skeleton-51713948.js";import"./index.esm-6ff8d86e.js";import"./InfoIcon-796e7b8c.js";const P=()=>e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(G,{children:"Edit Node"})})}),e.jsxs(t,{mb:36,children:[e.jsx(H,{style:{marginBottom:8},children:"Node Name"}),e.jsx(q,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...k}})]})]}),G=i(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,H=i(w)`
  color: ${r.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,U=()=>{const{close:c}=m("editNodeName"),[p]=$(n=>[n.data]),f=F({mode:"onChange"}),{watch:S,setValue:x,reset:h,getValues:u}=f,[g,y]=a.useState(!1),[l,j]=a.useState(!1),[o,b]=a.useState(),s=M(),{open:T}=m("removeNode");a.useEffect(()=>(o&&x("topic",o==null?void 0:o.topic),()=>{h()}),[o,x,h]),a.useEffect(()=>{(async()=>{if(s){j(!0);try{const{data:d}=await V({search:s==null?void 0:s.name}),D=d.find(L=>L.topic===s.name);b(D)}catch(d){console.log(d)}finally{j(!1)}}})()},[s]);const v=S("topic"),B=()=>{c()},E=async()=>{y(!0);try{if(await _((o==null?void 0:o.ref_id)||"",{topic:v.trim()}),p){const n={...p};console.log(n)}B()}catch(n){console.warn(n)}finally{y(!1)}},C=async()=>{T()},R=u().topic&&(o==null?void 0:o.topic)!==u().topic;return e.jsx(W,{children:e.jsxs(A,{...f,children:[l?e.jsx(t,{my:24,children:e.jsx(O,{})}):e.jsx(P,{}),e.jsxs(t,{direction:"row",mb:6,children:[e.jsx(Y,{color:"secondary",disabled:l||!o,onClick:C,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(N,{color:"secondary",disabled:g||l||!R,onClick:E,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",g&&e.jsx(I,{color:r.BLUE_PRESS_STATE,size:10})]})]})]})})},W=i(t)`
  padding: 20px;
`,Y=i(N)`
  && {
    color: ${r.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${r.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,ne=()=>{const{close:c}=m("editNodeName");return e.jsx(z,{id:"editNodeName",kind:"small",onClose:c,preventOutsideClose:!0,children:e.jsx(U,{})})};export{ne as EditNodeNameModal};
