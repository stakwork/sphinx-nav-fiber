import{s as i,c as a,T as w,j as e,F as t,b as k,r}from"./index-89a3f7cf.js";import{B as z}from"./index-373f5dda.js";import{u as m}from"./index-06055e2a.js";import{l as F,a as M,F as A,B as N,j as I,n as V}from"./react-toastify.esm-2901fbc8.js";import{u as _}from"./index-b2952448.js";import{T as $}from"./index-d03f8245.js";import{S as P}from"./Skeleton-b22233aa.js";import{C as q}from"./ClipLoader-60d11628.js";import"./index.esm-fe20163c.js";import"./InfoIcon-e27207b6.js";const G=()=>e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(H,{children:"Edit Node"})})}),e.jsxs(t,{mb:36,children:[e.jsx(O,{style:{marginBottom:8},children:"Node Name"}),e.jsx($,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...k}})]})]}),H=i(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,O=i(w)`
  color: ${a.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,U=()=>{const{close:c}=m("editNodeName"),[p]=_(n=>[n.data]),f=F({mode:"onChange"}),{watch:S,setValue:x,reset:h,getValues:u}=f,[g,j]=r.useState(!1),[l,y]=r.useState(!1),[o,b]=r.useState(),s=M(),{open:T}=m("removeNode");r.useEffect(()=>(o&&x("topic",o==null?void 0:o.topic),()=>{h()}),[o,x,h]),r.useEffect(()=>{(async()=>{if(s){y(!0);try{const{data:d}=await I({search:s==null?void 0:s.name}),D=d.find(L=>L.topic===s.name);b(D)}catch(d){console.log(d)}finally{y(!1)}}})()},[s]);const v=S("topic"),B=()=>{c()},E=async()=>{j(!0);try{if(await V((o==null?void 0:o.ref_id)||"",{topic:v.trim()}),p){const n={...p};console.log(n)}B()}catch(n){console.warn(n)}finally{j(!1)}},C=async()=>{T()},R=u().topic&&(o==null?void 0:o.topic)!==u().topic;return e.jsx(W,{children:e.jsxs(A,{...f,children:[l?e.jsx(t,{my:24,children:e.jsx(P,{})}):e.jsx(G,{}),e.jsxs(t,{direction:"row",mb:6,children:[e.jsx(Y,{color:"secondary",disabled:l||!o,onClick:C,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(N,{color:"secondary",disabled:g||l||!R,onClick:E,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",g&&e.jsx(q,{color:a.BLUE_PRESS_STATE,size:10})]})]})]})})},W=i(t)`
  padding: 20px;
`,Y=i(N)`
  && {
    color: ${a.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${a.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,re=()=>{const{close:c}=m("editNodeName");return e.jsx(z,{id:"editNodeName",kind:"small",onClose:c,preventOutsideClose:!0,children:e.jsx(U,{})})};export{re as EditNodeNameModal};
