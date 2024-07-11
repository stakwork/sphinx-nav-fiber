import{j as e,Q as r,S as f,a5 as I,U as s,ad as g,a4 as G,a1 as _,ar as P,r as l,am as q,as as J,M as O}from"./index-0b949b2a.js";import{b as Q,aJ as B,aH as Y,aI as K,B as k,aB as X,aC as Z}from"./index-2282c57e.js";import{S as ee}from"./Skeleton-40b3215e.js";const E=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ae(o){return!!E.test(o)}const te=o=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"4 3 14 14",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M10 4.7002H6.1C5.21634 4.7002 4.5 5.41654 4.5 6.3002V13.9002C4.5 14.7838 5.21634 15.5002 6.1 15.5002H13.7C14.5837 15.5002 15.3 14.7839 15.3 13.9002V10.5002",stroke:"#909BAA","stroke-linecap":"round"}),e.jsx("path",{d:"M16 4L9 11",stroke:"#909BAA","stroke-width":"1.5","stroke-linecap":"round"})]}),ne=()=>{const{open:o}=g("changeNodeType"),{close:u}=g("editNodeName"),{changeNodeTypeFeatureFlag:c}=G(x=>({changeNodeTypeFeatureFlag:x.changeNodeTypeFeatureFlag})),t=_(),h=t==null?void 0:t.node_type,d=()=>{u(),o()};return e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(se,{children:"Edit Node"}),e.jsxs(oe,{children:[e.jsx(Q,{type:h}),c&&e.jsx(re,{onClick:d,children:e.jsx(te,{})})]})]})}),e.jsxs(s,{mb:18,children:[e.jsx(T,{style:{marginBottom:8},children:"Node Name"}),e.jsx(B,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Node name",rules:{...P}})]}),e.jsxs(s,{mb:36,children:[e.jsx(T,{style:{marginBottom:8},children:"image_url"}),e.jsx(B,{id:"cy-image_url",maxLength:500,name:"image_url",placeholder:"image_url",rules:{pattern:{message:"Please enter a valid URL",value:E}}})]})]})},se=r(I)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,T=r(I)`
  color: ${f.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,oe=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 5px 0 0 40px;
`,re=r(s)`
  align-items: center;
  cursor: pointer;
`,ie=()=>{var C,b,S;const{close:o}=g("editNodeName"),u=Y({mode:"onChange"}),{watch:c,setValue:t,reset:h,getValues:d}=u,[x,N]=l.useState(!1),[j,w]=l.useState(!1),[n,F]=l.useState(),a=_(),{open:L}=g("removeNode");l.useEffect(()=>(n?t("name",n==null?void 0:n.name):a&&(t("name",a.name),t("image_url",(a==null?void 0:a.image_url)??"")),()=>{h()}),[n,t,h,a]),l.useEffect(()=>{(async()=>{if(!(!a||a.type!=="topic")){w(!0);try{const{data:i}=await q({search:a==null?void 0:a.name}),p=i.find($=>$.name===a.name);F(p)}catch(i){console.log(i)}finally{w(!1)}}})()},[a]);const D=c("imageInputType"),R=c("name"),y=c("image_url");l.useEffect(()=>{t("imageInputType",ae(y))},[y,t]);const M=()=>{o()},m=n||a,A=async()=>{N(!0);const i={["name"]:R.trim(),image_url:y.trim()};try{await J((m==null?void 0:m.ref_id)||"",i);const{updateNode:p}=O.getState();p({...m,...i}),M()}catch(p){console.warn(p)}finally{N(!1)}},U=async()=>{L()},v=(b=(C=d())==null?void 0:C.name)==null?void 0:b.trim(),V=v&&(n==null?void 0:n.name.trim())!==v,z=d().image_url&&(a==null?void 0:a.image_url)!==((S=d())==null?void 0:S.image_url),H=x||j||!!y&&!D||!V&&!z;return e.jsx(le,{children:e.jsxs(K,{...u,children:[j?e.jsx(s,{my:24,children:e.jsx(ee,{})}):e.jsx(ne,{}),e.jsxs(s,{direction:"row",mb:6,children:[e.jsx(ce,{color:"secondary",disabled:j||!m,onClick:U,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(k,{color:"secondary",disabled:H,onClick:A,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",x&&e.jsx(de,{children:e.jsx(X,{color:f.lightGray,size:12})})]})]})]})})},le=r(s)`
  padding: 20px;
`,ce=r(k)`
  && {
    color: ${f.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${f.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,de=r.span`
  margin-top: 3px;
`,ue=()=>{const{close:o}=g("editNodeName");return e.jsx(Z,{id:"editNodeName",kind:"large",onClose:o,preventOutsideClose:!0,children:e.jsx(ie,{})})};export{ue as EditNodeNameModal};
