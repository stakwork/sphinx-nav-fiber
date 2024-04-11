import{f as d,h as l,T as B,j as e,F as a,C as w,r as n,a3 as V,z as $,D as A}from"./index-243bacb7.js";import{B as P}from"./index-08397a82.js";import{u as g}from"./index-46266415.js";import{c as q,F as G,B as E,C as H}from"./react-toastify.esm-e229b502.js";import{T as S}from"./index-49667ada.js";import{S as O}from"./Skeleton-90b5f7fc.js";import"./index.esm-af5ef772.js";import"./InfoIcon-b8ce886b.js";const _=/^https:\/\/.*\.(png|jpg|svg)$/;function C(s){return!!_.test(s)}const W=({isValidImageUrl:s})=>e.jsxs(a,{children:[e.jsx(a,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(a,{align:"center",direction:"row",children:e.jsx(Y,{children:"Edit Node"})})}),e.jsxs(a,{mb:18,children:[e.jsx(T,{style:{marginBottom:8},children:"Node Name"}),e.jsx(S,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...w}})]}),e.jsxs(a,{mb:36,children:[e.jsx(T,{style:{marginBottom:8},children:"image_url"}),e.jsx(S,{id:"cy-image_url",maxLength:500,name:"image_url",placeholder:"image_url",rules:{...w,...s?{}:{pattern:{message:"Please enter a valid URL",value:_},validate:{source:C}}}})]})]}),Y=d(B)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,T=d(B)`
  color: ${l.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,J=()=>{const{close:s}=g("editNodeName"),f=q({mode:"onChange"}),{watch:m,setValue:r,reset:x,getValues:h}=f,[y,j]=n.useState(!1),[p,v]=n.useState(!1),[o,R]=n.useState(),t=V(),{open:L}=g("removeNode");n.useEffect(()=>(o?r("topic",o==null?void 0:o.topic):t&&(r("topic",t.name),r("image_url",(t==null?void 0:t.image_url)??"")),()=>{x()}),[o,r,x,t]),n.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){v(!0);try{const{data:i}=await $({search:t==null?void 0:t.name}),U=i.find(M=>M.topic===t.name);R(U)}catch(i){console.log(i)}finally{v(!1)}}})()},[t]);const N=m("imageInputType"),I=m("topic"),u=m("image_url");n.useEffect(()=>{r("imageInputType",C(u))},[u,r]);const D=()=>{s()},c=o||t,k=async()=>{j(!0);const b=o?"topic":"name";try{await A((c==null?void 0:c.ref_id)||"",{[b]:I.trim(),image_url:u.trim()}),D()}catch(i){console.warn(i)}finally{j(!1)}},z=async()=>{L()},F=h().topic&&(o==null?void 0:o.topic)!==h().topic;return e.jsx(K,{children:e.jsxs(G,{...f,children:[p?e.jsx(a,{my:24,children:e.jsx(O,{})}):e.jsx(W,{isValidImageUrl:N}),e.jsxs(a,{direction:"row",mb:6,children:[e.jsx(Q,{color:"secondary",disabled:p||!c,onClick:z,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(E,{color:"secondary",disabled:y||p||!F||!N,onClick:k,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",y&&e.jsx(H,{color:l.BLUE_PRESS_STATE,size:10})]})]})]})})},K=d(a)`
  padding: 20px;
`,Q=d(E)`
  && {
    color: ${l.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${l.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,ne=()=>{const{close:s}=g("editNodeName");return e.jsx(P,{id:"editNodeName",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(J,{})})};export{ne as EditNodeNameModal};
