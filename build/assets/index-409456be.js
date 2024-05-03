import{j as e,f as c,h,T as b,F as a,a3 as B,C as U,r as l,bj as $,D as H,i as P}from"./index-e0ac65aa.js";import{B as W}from"./index-e749dffc.js";import{u as g}from"./index-a04b0a93.js";import{c as q,F as G,B as S,C as O}from"./react-toastify.esm-5e2ed92b.js";import{T as w}from"./index-79045176.js";import{T as Y}from"./index-3714ce22.js";import{S as J}from"./Skeleton-aa14457a.js";import"./index.esm-612f4c9d.js";import"./InfoIcon-ef734dd1.js";import"./Popover-1cf74c13.js";import"./useSlotProps-e6a2e50b.js";const C=/^https:\/\/.*\.(png|jpe?g|svg)$/;function E(s){return!!C.test(s)}const K=s=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"4 3 14 14",fill:"transparent",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M10 4.7002H6.1C5.21634 4.7002 4.5 5.41654 4.5 6.3002V13.9002C4.5 14.7838 5.21634 15.5002 6.1 15.5002H13.7C14.5837 15.5002 15.3 14.7839 15.3 13.9002V10.5002",stroke:"#909BAA","stroke-linecap":"round"}),e.jsx("path",{d:"M16 4L9 11",stroke:"#909BAA","stroke-width":"1.5","stroke-linecap":"round"})]}),Q=()=>{const{open:s}=g("changeNodeType"),{close:u}=g("editNodeName"),r=B(),n=r==null?void 0:r.node_type,x=()=>{u(),s()};return e.jsxs(a,{children:[e.jsx(a,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(a,{align:"center",direction:"row",children:[e.jsx(X,{children:"Edit Node"}),e.jsxs(Z,{children:[e.jsx(Y,{type:n}),e.jsx(ee,{onClick:x,children:e.jsx(K,{})})]})]})}),e.jsxs(a,{mb:18,children:[e.jsx(T,{style:{marginBottom:8},children:"Node Name"}),e.jsx(w,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Node name",rules:{...U}})]}),e.jsxs(a,{mb:36,children:[e.jsx(T,{style:{marginBottom:8},children:"image_url"}),e.jsx(w,{id:"cy-image_url",maxLength:500,name:"image_url",placeholder:"image_url",rules:{pattern:{message:"Please enter a valid URL",value:C},validate:{source:E}}})]})]})},X=c(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,T=c(b)`
  color: ${h.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Z=c.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 5px 0 0 40px;
`,ee=c(a)`
  align-items: center;
`,te=()=>{const{close:s}=g("editNodeName"),u=q({mode:"onChange"}),{watch:r,setValue:n,reset:x,getValues:y}=u,[j,N]=l.useState(!1),[f,v]=l.useState(!1),[o,k]=l.useState(),t=B(),{open:_}=g("removeNode");l.useEffect(()=>(o?n("name",o==null?void 0:o.name):t&&(n("name",t.name),n("image_url",(t==null?void 0:t.image_url)??"")),()=>{x()}),[o,n,x,t]),l.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){v(!0);try{const{data:i}=await $({search:t==null?void 0:t.name}),p=i.find(F=>F.name===t.name);k(p)}catch(i){console.log(i)}finally{v(!1)}}})()},[t]);const I=r("imageInputType"),L=r("name"),d=r("image_url");l.useEffect(()=>{n("imageInputType",E(d))},[d,n]);const D=()=>{s()},m=o||t,R=async()=>{N(!0);const i={["name"]:L.trim(),image_url:d.trim()};try{await H((m==null?void 0:m.ref_id)||"",i);const{updateNode:p}=P.getState();p({...m,...i}),D()}catch(p){console.warn(p)}finally{N(!1)}},A=async()=>{_()},M=y().name&&(o==null?void 0:o.name)!==y().name,V=j||f||!!d&&!I||!d&&!M;return e.jsx(oe,{children:e.jsxs(G,{...u,children:[f?e.jsx(a,{my:24,children:e.jsx(J,{})}):e.jsx(Q,{}),e.jsxs(a,{direction:"row",mb:6,children:[e.jsx(ae,{color:"secondary",disabled:f||!m,onClick:A,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(S,{color:"secondary",disabled:V,onClick:R,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",j&&e.jsx(O,{color:h.BLUE_PRESS_STATE,size:10})]})]})]})})},oe=c(a)`
  padding: 20px;
`,ae=c(S)`
  && {
    color: ${h.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${h.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,xe=()=>{const{close:s}=g("editNodeName");return e.jsx(W,{id:"editNodeName",kind:"large",onClose:s,preventOutsideClose:!0,children:e.jsx(te,{})})};export{xe as EditNodeNameModal};
