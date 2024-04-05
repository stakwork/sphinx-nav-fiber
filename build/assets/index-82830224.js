import{f as c,h as i,T as N,j as e,F as s,C as k,r as n,a3 as z,z as F,D as M}from"./index-84e6feed.js";import{B as A}from"./index-7a17970d.js";import{u as p}from"./index-b5061f1d.js";import{e as I,F as V,B as w,C as _}from"./react-toastify.esm-7ad05984.js";import{T as $}from"./index-424e2ae8.js";import{S as P}from"./Skeleton-4d2f8239.js";import"./index.esm-7bc36a0c.js";import"./InfoIcon-d232d482.js";const q=()=>e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(G,{children:"Edit Node"})})}),e.jsxs(s,{mb:36,children:[e.jsx(H,{style:{marginBottom:8},children:"Node Name"}),e.jsx($,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...k}})]})]}),G=c(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,H=c(N)`
  color: ${i.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,O=()=>{const{close:l}=p("editNodeName"),f=I({mode:"onChange"}),{watch:S,setValue:d,reset:x,getValues:h}=f,[u,g]=n.useState(!1),[m,y]=n.useState(!1),[t,b]=n.useState(),o=z(),{open:v}=p("removeNode");n.useEffect(()=>(t?d("topic",t==null?void 0:t.topic):o&&d("topic",o.name),()=>{x()}),[t,d,x,o]),n.useEffect(()=>{(async()=>{if(!(!o||o.type!=="topic")){y(!0);try{const{data:a}=await F({search:o==null?void 0:o.name}),D=a.find(L=>L.topic===o.name);b(D)}catch(a){console.log(a)}finally{y(!1)}}})()},[o]);const B=S("topic"),C=()=>{l()},r=t||o,E=async()=>{g(!0);const j=t?"topic":"name";try{await M((r==null?void 0:r.ref_id)||"",{[j]:B.trim()}),C()}catch(a){console.warn(a)}finally{g(!1)}},T=async()=>{v()},R=h().topic&&(t==null?void 0:t.topic)!==h().topic;return e.jsx(U,{children:e.jsxs(V,{...f,children:[m?e.jsx(s,{my:24,children:e.jsx(P,{})}):e.jsx(q,{}),e.jsxs(s,{direction:"row",mb:6,children:[e.jsx(W,{color:"secondary",disabled:m||!r,onClick:T,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(w,{color:"secondary",disabled:u||m||!R,onClick:E,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",u&&e.jsx(_,{color:i.BLUE_PRESS_STATE,size:10})]})]})]})})},U=c(s)`
  padding: 20px;
`,W=c(w)`
  && {
    color: ${i.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${i.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,te=()=>{const{close:l}=p("editNodeName");return e.jsx(A,{id:"editNodeName",kind:"small",onClose:l,preventOutsideClose:!0,children:e.jsx(O,{})})};export{te as EditNodeNameModal};
