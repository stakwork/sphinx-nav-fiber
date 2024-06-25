import{j as e,f as i,h,T as _,F as o,B as p,a5 as k,D as G,r as c,b2 as P,E as q,i as O}from"./index-05afde16.js";import{B as Y}from"./index-740f2ffd.js";import{c as J,F as K,B as E,C as Q}from"./react-toastify.esm-3cc87da8.js";import{T}from"./index-e0641c2a.js";import{T as X}from"./index-6663d47e.js";import{S as Z}from"./Skeleton-6e8b9e35.js";import"./index.esm-2dfabbab.js";import"./InfoIcon-0804607b.js";import"./Popover-3608a7da.js";import"./useSlotProps-00cd5537.js";const I=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ee(n){return!!I.test(n)}const te=n=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"4 3 14 14",fill:"transparent",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M10 4.7002H6.1C5.21634 4.7002 4.5 5.41654 4.5 6.3002V13.9002C4.5 14.7838 5.21634 15.5002 6.1 15.5002H13.7C14.5837 15.5002 15.3 14.7839 15.3 13.9002V10.5002",stroke:"#909BAA","stroke-linecap":"round"}),e.jsx("path",{d:"M16 4L9 11",stroke:"#909BAA","stroke-width":"1.5","stroke-linecap":"round"})]}),ae=()=>{const{open:n}=p("changeNodeType"),{close:g}=p("editNodeName"),r=k(),s=r==null?void 0:r.node_type,u=()=>{g(),n()};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(o,{align:"center",direction:"row",children:[e.jsx(oe,{children:"Edit Node"}),e.jsxs(ne,{children:[e.jsx(X,{type:s}),e.jsx(se,{onClick:u,children:e.jsx(te,{})})]})]})}),e.jsxs(o,{mb:18,children:[e.jsx(S,{style:{marginBottom:8},children:"Node Name"}),e.jsx(T,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Node name",rules:{...G}})]}),e.jsxs(o,{mb:36,children:[e.jsx(S,{style:{marginBottom:8},children:"image_url"}),e.jsx(T,{id:"cy-image_url",maxLength:500,name:"image_url",placeholder:"image_url",rules:{pattern:{message:"Please enter a valid URL",value:I}}})]})]})},oe=i(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,S=i(_)`
  color: ${h.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,ne=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 5px 0 0 40px;
`,se=i(o)`
  align-items: center;
  cursor: pointer;
`,re=()=>{var b,B,C;const{close:n}=p("editNodeName"),g=J({mode:"onChange"}),{watch:r,setValue:s,reset:u,getValues:f}=g,[j,w]=c.useState(!1),[y,N]=c.useState(!1),[a,L]=c.useState(),t=k(),{open:D}=p("removeNode");c.useEffect(()=>(a?s("name",a==null?void 0:a.name):t&&(s("name",t.name),s("image_url",(t==null?void 0:t.image_url)??"")),()=>{u()}),[a,s,u,t]),c.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){N(!0);try{const{data:l}=await P({search:t==null?void 0:t.name}),m=l.find(H=>H.name===t.name);L(m)}catch(l){console.log(l)}finally{N(!1)}}})()},[t]);const R=r("imageInputType"),A=r("name"),x=r("image_url");c.useEffect(()=>{s("imageInputType",ee(x))},[x,s]);const M=()=>{n()},d=a||t,V=async()=>{w(!0);const l={["name"]:A.trim(),image_url:x.trim()};try{await q((d==null?void 0:d.ref_id)||"",l);const{updateNode:m}=O.getState();m({...d,...l}),M()}catch(m){console.warn(m)}finally{w(!1)}},z=async()=>{D()},v=(B=(b=f())==null?void 0:b.name)==null?void 0:B.trim(),F=v&&(a==null?void 0:a.name.trim())!==v,U=f().image_url&&(t==null?void 0:t.image_url)!==((C=f())==null?void 0:C.image_url),W=j||y||!!x&&!R||!F&&!U;return e.jsx(ie,{children:e.jsxs(K,{...g,children:[y?e.jsx(o,{my:24,children:e.jsx(Z,{})}):e.jsx(ae,{}),e.jsxs(o,{direction:"row",mb:6,children:[e.jsx(le,{color:"secondary",disabled:y||!d,onClick:z,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(E,{color:"secondary",disabled:W,onClick:V,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",j&&e.jsx(ce,{children:e.jsx(Q,{color:h.lightGray,size:12})})]})]})]})})},ie=i(o)`
  padding: 20px;
`,le=i(E)`
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
`,ce=i.span`
  margin-top: 3px;
`,we=()=>{const{close:n}=p("editNodeName");return e.jsx(Y,{id:"editNodeName",kind:"large",onClose:n,preventOutsideClose:!0,children:e.jsx(re,{})})};export{we as EditNodeNameModal};
