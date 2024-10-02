import{j as e,p as r,q as y,E as S,F as n,U as g,N as H,A as F,aW as G,r as l,bl as P,bj as O,x as Y}from"./index-a2fee79d.js";import{B as J}from"./index-5e0c95ad.js";import{T as K,q as Q,F as X,B as k}from"./index-57446bb9.js";import{T as B}from"./index-50af411d.js";import{S as Z}from"./Skeleton-fd588422.js";import{C as ee}from"./ClipLoader-94036fe6.js";import"./index.esm-5cf1d22e.js";const E=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function te(s){return!!E.test(s)}const ae=s=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"4 3 14 14",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M10 4.7002H6.1C5.21634 4.7002 4.5 5.41654 4.5 6.3002V13.9002C4.5 14.7838 5.21634 15.5002 6.1 15.5002H13.7C14.5837 15.5002 15.3 14.7839 15.3 13.9002V10.5002",stroke:"#909BAA","stroke-linecap":"round"}),e.jsx("path",{d:"M16 4L9 11",stroke:"#909BAA","stroke-width":"1.5","stroke-linecap":"round"})]}),oe=()=>{const{open:s}=g("changeNodeType"),{close:u}=g("editNodeName"),{changeNodeTypeFeatureFlag:c}=H(x=>({changeNodeTypeFeatureFlag:x.changeNodeTypeFeatureFlag})),a=F(),h=a==null?void 0:a.node_type,d=()=>{u(),s()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(n,{align:"center",direction:"row",children:[e.jsx(ne,{children:"Edit Node"}),e.jsxs(se,{children:[e.jsx(K,{type:h}),c&&e.jsx(re,{onClick:d,children:e.jsx(ae,{})})]})]})}),e.jsxs(n,{mb:18,children:[e.jsx(I,{style:{marginBottom:8},children:"Node Name"}),e.jsx(B,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Node name",rules:{...G}})]}),e.jsxs(n,{mb:36,children:[e.jsx(I,{style:{marginBottom:8},children:"Image Url"}),e.jsx(B,{id:"cy-image_url",maxLength:500,name:"image_url",placeholder:"Image url",rules:{pattern:{message:"Please enter a valid URL",value:E}}})]})]})},ne=r(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,I=r(S)`
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
`,ie=()=>{var b,C,T;const{close:s}=g("editNodeName"),u=Q({mode:"onChange"}),{watch:c,setValue:a,reset:h,getValues:d}=u,[x,N]=l.useState(!1),[j,w]=l.useState(!1),[o,_]=l.useState(),t=F(),{open:L}=g("removeNode");l.useEffect(()=>(o?a("name",o==null?void 0:o.name):t&&(a("name",t.name),a("image_url",(t==null?void 0:t.image_url)??"")),()=>{h()}),[o,a,h,t]),l.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){w(!0);try{const{data:i}=await P({search:t==null?void 0:t.name}),p=i.find(q=>q.name===t.name);_(p)}catch(i){console.log(i)}finally{w(!1)}}})()},[t]);const D=c("imageInputType"),R=c("name"),f=c("image_url");l.useEffect(()=>{a("imageInputType",te(f))},[f,a]);const A=()=>{s()},m=o||t,M=async()=>{N(!0);const i={["name"]:R.trim(),image_url:f.trim()};try{await O((m==null?void 0:m.ref_id)||"",{node_data:i});const{updateNode:p}=Y.getState();p({...m,...i}),A()}catch(p){console.warn(p)}finally{N(!1)}},U=async()=>{L()},v=(C=(b=d())==null?void 0:b.name)==null?void 0:C.trim(),V=v&&(o==null?void 0:o.name.trim())!==v,z=d().image_url&&(t==null?void 0:t.image_url)!==((T=d())==null?void 0:T.image_url),W=x||j||!!f&&!D||!V&&!z;return e.jsx(le,{children:e.jsxs(X,{...u,children:[j?e.jsx(n,{my:24,children:e.jsx(Z,{})}):e.jsx(oe,{}),e.jsxs(n,{direction:"row",mb:6,children:[e.jsx(ce,{color:"secondary",disabled:j||!m,onClick:U,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(k,{color:"secondary",disabled:W,onClick:M,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",x&&e.jsx(de,{children:e.jsx(ee,{color:y.lightGray,size:12})})]})]})]})})},le=r(n)`
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
`,ye=()=>{const{close:s}=g("editNodeName");return e.jsx(J,{id:"editNodeName",kind:"large",onClose:s,preventOutsideClose:!0,children:e.jsx(ie,{})})};export{ye as EditNodeNameModal};
