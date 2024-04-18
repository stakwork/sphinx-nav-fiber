import{f as m,h as d,T,j as e,F as o,C as b,r as i,a4 as V,E as $,D as A,i as P}from"./index-866a46a7.js";import{B as q}from"./index-e05c71f5.js";import{u as f}from"./index-4892040c.js";import{c as G,F as H,B,C as O}from"./react-toastify.esm-2d5928c7.js";import{T as w}from"./index-adfa34a6.js";import{S as W}from"./Skeleton-836b2fb1.js";import"./index.esm-f0a63ba0.js";import"./InfoIcon-ae59157b.js";const _=/^https:\/\/.*\.(png|jpg|svg)$/;function C(s){return!!_.test(s)}const Y=({isValidImageUrl:s})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(J,{children:"Edit Node"})})}),e.jsxs(o,{mb:18,children:[e.jsx(E,{style:{marginBottom:8},children:"Node Name"}),e.jsx(w,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Node name",rules:{...b}})]}),e.jsxs(o,{mb:36,children:[e.jsx(E,{style:{marginBottom:8},children:"image_url"}),e.jsx(w,{id:"cy-image_url",maxLength:500,name:"image_url",placeholder:"image_url",rules:{...b,...s?{}:{pattern:{message:"Please enter a valid URL",value:_},validate:{source:C}}}})]})]}),J=m(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,E=m(T)`
  color: ${d.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,K=()=>{const{close:s}=f("editNodeName"),x=G({mode:"onChange"}),{watch:u,setValue:n,reset:h,getValues:y}=x,[j,N]=i.useState(!1),[p,v]=i.useState(!1),[a,R]=i.useState(),t=V(),{open:D}=f("removeNode");i.useEffect(()=>(a?n("name",a==null?void 0:a.name):t&&(n("name",t.name),n("image_url",(t==null?void 0:t.image_url)??"")),()=>{h()}),[a,n,h,t]),i.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){v(!0);try{const{data:r}=await $({search:t==null?void 0:t.name}),c=r.find(M=>M.name===t.name);R(c)}catch(r){console.log(r)}finally{v(!1)}}})()},[t]);const S=u("imageInputType"),L=u("name"),g=u("image_url");i.useEffect(()=>{n("imageInputType",C(g))},[g,n]);const I=()=>{s()},l=a||t,k=async()=>{N(!0);const r={["name"]:L.trim(),image_url:g.trim()};try{await A((l==null?void 0:l.ref_id)||"",r);const{updateNode:c}=P.getState();c({...l,...r}),I()}catch(c){console.warn(c)}finally{N(!1)}},z=async()=>{D()},F=y().name&&(a==null?void 0:a.name)!==y().name;return e.jsx(Q,{children:e.jsxs(H,{...x,children:[p?e.jsx(o,{my:24,children:e.jsx(W,{})}):e.jsx(Y,{isValidImageUrl:S}),e.jsxs(o,{direction:"row",mb:6,children:[e.jsx(X,{color:"secondary",disabled:p||!l,onClick:z,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(B,{color:"secondary",disabled:j||p||!F||!S,onClick:k,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",j&&e.jsx(O,{color:d.BLUE_PRESS_STATE,size:10})]})]})]})})},Q=m(o)`
  padding: 20px;
`,X=m(B)`
  && {
    color: ${d.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${d.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,ie=()=>{const{close:s}=f("editNodeName");return e.jsx(q,{id:"editNodeName",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(K,{})})};export{ie as EditNodeNameModal};
