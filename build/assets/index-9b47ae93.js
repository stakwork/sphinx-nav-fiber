import{s as i,b as a,T as N,j as e,F as t,h as k,r}from"./index-c2b1a8c4.js";import{B as z}from"./index-b7734c3e.js";import{u as m}from"./index-6d3b281c.js";import{o as F,N as M,F as A,B as w,C as I,m as V,r as _}from"./react-toastify.esm-39b5cc7c.js";import{u as $}from"./index-e55b871a.js";import{T as P}from"./index-4615d738.js";import{S as q}from"./Skeleton-c54fdc98.js";import"./index.esm-4d3d224b.js";import"./InfoIcon-29245caa.js";const G=()=>e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(H,{children:"Edit Node"})})}),e.jsxs(t,{mb:36,children:[e.jsx(O,{style:{marginBottom:8},children:"Node Name"}),e.jsx(P,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...k}})]})]}),H=i(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,O=i(N)`
  color: ${a.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,U=()=>{const{close:c}=m("editNodeName"),[p]=$(n=>[n.data]),f=F({mode:"onChange"}),{watch:S,setValue:x,reset:h,getValues:u}=f,[g,y]=r.useState(!1),[l,j]=r.useState(!1),[o,b]=r.useState(),s=M(),{open:T}=m("removeNode");r.useEffect(()=>(o&&x("topic",o==null?void 0:o.topic),()=>{h()}),[o,x,h]),r.useEffect(()=>{(async()=>{if(s){j(!0);try{const{data:d}=await V({search:s==null?void 0:s.name}),D=d.find(L=>L.topic===s.name);b(D)}catch(d){console.log(d)}finally{j(!1)}}})()},[s]);const v=S("topic"),B=()=>{c()},E=async()=>{y(!0);try{if(await _((o==null?void 0:o.ref_id)||"",{topic:v.trim()}),p){const n={...p};console.log(n)}B()}catch(n){console.warn(n)}finally{y(!1)}},C=async()=>{T()},R=u().topic&&(o==null?void 0:o.topic)!==u().topic;return e.jsx(W,{children:e.jsxs(A,{...f,children:[l?e.jsx(t,{my:24,children:e.jsx(q,{})}):e.jsx(G,{}),e.jsxs(t,{direction:"row",mb:6,children:[e.jsx(Y,{color:"secondary",disabled:l||!o,onClick:C,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(w,{color:"secondary",disabled:g||l||!R,onClick:E,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",g&&e.jsx(I,{color:a.BLUE_PRESS_STATE,size:10})]})]})]})})},W=i(t)`
  padding: 20px;
`,Y=i(w)`
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
`,ne=()=>{const{close:c}=m("editNodeName");return e.jsx(z,{id:"editNodeName",kind:"small",onClose:c,preventOutsideClose:!0,children:e.jsx(U,{})})};export{ne as EditNodeNameModal};
