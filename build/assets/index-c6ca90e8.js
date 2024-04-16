import{f as m,h as c,T,j as e,F as o,C as w,r,a4 as V,E as $,D as A}from"./index-652706b4.js";import{B as P}from"./index-083bf858.js";import{u as p}from"./index-ab04921d.js";import{c as q,F as G,B,C as H}from"./react-toastify.esm-db251548.js";import{T as E}from"./index-9b997d91.js";import{S as O}from"./Skeleton-a46602ba.js";import"./index.esm-91c7105f.js";import"./InfoIcon-423a01a0.js";const _=/^https:\/\/.*\.(png|jpg|svg)$/;function C(s){return!!_.test(s)}const W=({isValidImageUrl:s})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Y,{children:"Edit Node"})})}),e.jsxs(o,{mb:18,children:[e.jsx(S,{style:{marginBottom:8},children:"Node Name"}),e.jsx(E,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Node name",rules:{...w}})]}),e.jsxs(o,{mb:36,children:[e.jsx(S,{style:{marginBottom:8},children:"image_url"}),e.jsx(E,{id:"cy-image_url",maxLength:500,name:"image_url",placeholder:"image_url",rules:{...w,...s?{}:{pattern:{message:"Please enter a valid URL",value:_},validate:{source:C}}}})]})]}),Y=m(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,S=m(T)`
  color: ${c.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,J=()=>{const{close:s}=p("editNodeName"),f=q({mode:"onChange"}),{watch:d,setValue:n,reset:x,getValues:h}=f,[y,j]=r.useState(!1),[u,v]=r.useState(!1),[a,R]=r.useState(),t=V(),{open:L}=p("removeNode");r.useEffect(()=>(a?n("name",a==null?void 0:a.name):t&&(n("name",t.name),n("image_url",(t==null?void 0:t.image_url)??"")),()=>{x()}),[a,n,x,t]),r.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){v(!0);try{const{data:i}=await $({search:t==null?void 0:t.name}),U=i.find(M=>M.name===t.name);R(U)}catch(i){console.log(i)}finally{v(!1)}}})()},[t]);const N=d("imageInputType"),I=d("name"),g=d("image_url");r.useEffect(()=>{n("imageInputType",C(g))},[g,n]);const D=()=>{s()},l=a||t,k=async()=>{j(!0);const b="name";try{await A((l==null?void 0:l.ref_id)||"",{[b]:I.trim(),image_url:g.trim()}),D()}catch(i){console.warn(i)}finally{j(!1)}},z=async()=>{L()},F=h().name&&(a==null?void 0:a.name)!==h().name;return e.jsx(K,{children:e.jsxs(G,{...f,children:[u?e.jsx(o,{my:24,children:e.jsx(O,{})}):e.jsx(W,{isValidImageUrl:N}),e.jsxs(o,{direction:"row",mb:6,children:[e.jsx(Q,{color:"secondary",disabled:u||!l,onClick:z,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(B,{color:"secondary",disabled:y||u||!F||!N,onClick:k,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",y&&e.jsx(H,{color:c.BLUE_PRESS_STATE,size:10})]})]})]})})},K=m(o)`
  padding: 20px;
`,Q=m(B)`
  && {
    color: ${c.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${c.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,re=()=>{const{close:s}=p("editNodeName");return e.jsx(P,{id:"editNodeName",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(J,{})})};export{re as EditNodeNameModal};
