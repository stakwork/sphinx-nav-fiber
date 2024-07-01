import{j as e,f as r,h as y,T as F,F as n,B as g,J as G,a5 as _,D as P,r as l,b3 as q,E as J,i as O}from"./index-10ba6357.js";import{B as Y}from"./index-e1510dd9.js";import{c as K,F as Q,B as k,C as X}from"./react-toastify.esm-0311feb0.js";import{T as C}from"./index-43fb0a19.js";import{T as Z}from"./index-e1fcdb12.js";import{S as ee}from"./Skeleton-84a40d9e.js";import"./index.esm-12fd3e0f.js";import"./InfoIcon-7e45a0a9.js";import"./Popover-9ed2c7f9.js";import"./useSlotProps-1ec3b865.js";const E=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function te(s){return!!E.test(s)}const ae=s=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"4 3 14 14",fill:"transparent",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M10 4.7002H6.1C5.21634 4.7002 4.5 5.41654 4.5 6.3002V13.9002C4.5 14.7838 5.21634 15.5002 6.1 15.5002H13.7C14.5837 15.5002 15.3 14.7839 15.3 13.9002V10.5002",stroke:"#909BAA","stroke-linecap":"round"}),e.jsx("path",{d:"M16 4L9 11",stroke:"#909BAA","stroke-width":"1.5","stroke-linecap":"round"})]}),oe=()=>{const{open:s}=g("changeNodeType"),{close:u}=g("editNodeName"),{changeNodeTypeFeatureFlag:c}=G(x=>({changeNodeTypeFeatureFlag:x.changeNodeTypeFeatureFlag})),a=_(),h=a==null?void 0:a.node_type,d=()=>{u(),s()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(n,{align:"center",direction:"row",children:[e.jsx(ne,{children:"Edit Node"}),e.jsxs(se,{children:[e.jsx(Z,{type:h}),c&&e.jsx(re,{onClick:d,children:e.jsx(ae,{})})]})]})}),e.jsxs(n,{mb:18,children:[e.jsx(S,{style:{marginBottom:8},children:"Node Name"}),e.jsx(C,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Node name",rules:{...P}})]}),e.jsxs(n,{mb:36,children:[e.jsx(S,{style:{marginBottom:8},children:"image_url"}),e.jsx(C,{id:"cy-image_url",maxLength:500,name:"image_url",placeholder:"image_url",rules:{pattern:{message:"Please enter a valid URL",value:E}}})]})]})},ne=r(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,S=r(F)`
  color: ${y.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,se=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 5px 0 0 40px;
`,re=r(n)`
  align-items: center;
  cursor: pointer;
`,ie=()=>{var T,b,B;const{close:s}=g("editNodeName"),u=K({mode:"onChange"}),{watch:c,setValue:a,reset:h,getValues:d}=u,[x,N]=l.useState(!1),[j,w]=l.useState(!1),[o,I]=l.useState(),t=_(),{open:L}=g("removeNode");l.useEffect(()=>(o?a("name",o==null?void 0:o.name):t&&(a("name",t.name),a("image_url",(t==null?void 0:t.image_url)??"")),()=>{h()}),[o,a,h,t]),l.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){w(!0);try{const{data:i}=await q({search:t==null?void 0:t.name}),p=i.find(H=>H.name===t.name);I(p)}catch(i){console.log(i)}finally{w(!1)}}})()},[t]);const D=c("imageInputType"),R=c("name"),f=c("image_url");l.useEffect(()=>{a("imageInputType",te(f))},[f,a]);const A=()=>{s()},m=o||t,M=async()=>{N(!0);const i={["name"]:R.trim(),image_url:f.trim()};try{await J((m==null?void 0:m.ref_id)||"",i);const{updateNode:p}=O.getState();p({...m,...i}),A()}catch(p){console.warn(p)}finally{N(!1)}},V=async()=>{L()},v=(b=(T=d())==null?void 0:T.name)==null?void 0:b.trim(),z=v&&(o==null?void 0:o.name.trim())!==v,U=d().image_url&&(t==null?void 0:t.image_url)!==((B=d())==null?void 0:B.image_url),W=x||j||!!f&&!D||!z&&!U;return e.jsx(le,{children:e.jsxs(Q,{...u,children:[j?e.jsx(n,{my:24,children:e.jsx(ee,{})}):e.jsx(oe,{}),e.jsxs(n,{direction:"row",mb:6,children:[e.jsx(ce,{color:"secondary",disabled:j||!m,onClick:V,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(k,{color:"secondary",disabled:W,onClick:M,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",x&&e.jsx(de,{children:e.jsx(X,{color:y.lightGray,size:12})})]})]})]})})},le=r(n)`
  padding: 20px;
`,ce=r(k)`
  && {
    color: ${y.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${y.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,de=r.span`
  margin-top: 3px;
`,we=()=>{const{close:s}=g("editNodeName");return e.jsx(Y,{id:"editNodeName",kind:"large",onClose:s,preventOutsideClose:!0,children:e.jsx(ie,{})})};export{we as EditNodeNameModal};
