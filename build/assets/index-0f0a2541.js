import{p as r,q as y,E as w,F as o,U as g,N as G,A as C,j as e,b0 as P,r as l,br as H,bp as O,x as Y}from"./index-3b9447c2.js";import{B as J}from"./index-1da849f8.js";import{T as K,z as Q,F as X,B as _}from"./index-dfad0ea4.js";import{E as Z}from"./EditNodeIcon-7336fed9.js";import{T as E}from"./index-44da5082.js";import{S as ee}from"./Skeleton-b154ebf7.js";import{C as te}from"./ClipLoader-90e0b25d.js";import"./index.esm-78ad86e8.js";const B=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ae(s){return!!B.test(s)}const ne=()=>{const{open:s}=g("changeNodeType"),{close:u}=g("editNodeName"),{changeNodeTypeFeatureFlag:c}=G(h=>({changeNodeTypeFeatureFlag:h.changeNodeTypeFeatureFlag})),a=C(),x=a==null?void 0:a.node_type,d=()=>{u(),s()};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(o,{align:"center",direction:"row",children:[e.jsx(oe,{children:"Edit Node"}),e.jsxs(se,{children:[e.jsx(K,{type:x}),c&&e.jsx(re,{onClick:d,children:e.jsx(Z,{})})]})]})}),e.jsxs(o,{mb:18,children:[e.jsx(F,{style:{marginBottom:8},children:"Node Name"}),e.jsx(E,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Node name",rules:{...P}})]}),e.jsxs(o,{mb:36,children:[e.jsx(F,{style:{marginBottom:8},children:"Image Url"}),e.jsx(E,{id:"cy-image_url",maxLength:500,name:"image_url",placeholder:"Image url",rules:{pattern:{message:"Please enter a valid URL",value:B}}})]})]})},oe=r(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,F=r(w)`
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
`,re=r(o)`
  align-items: center;
  cursor: pointer;
`,ie=()=>{var v,I,S;const{close:s}=g("editNodeName"),u=Q({mode:"onChange"}),{watch:c,setValue:a,reset:x,getValues:d}=u,[h,N]=l.useState(!1),[j,b]=l.useState(!1),[n,L]=l.useState(),t=C(),{open:D}=g("removeNode");l.useEffect(()=>(n?a("name",n==null?void 0:n.name):t&&(a("name",t.name),a("image_url",(t==null?void 0:t.image_url)??"")),()=>{x()}),[n,a,x,t]),l.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){b(!0);try{const{data:i}=await H({search:t==null?void 0:t.name}),p=i.find(q=>q.name===t.name);L(p)}catch(i){console.log(i)}finally{b(!1)}}})()},[t]);const R=c("imageInputType"),k=c("name"),f=c("image_url");l.useEffect(()=>{a("imageInputType",ae(f))},[f,a]);const U=()=>{s()},m=n||t,z=async()=>{N(!0);const i={["name"]:k.trim(),image_url:f.trim()};try{await O((m==null?void 0:m.ref_id)||"",{node_data:i});const{updateNode:p}=Y.getState();p({...m,...i}),U()}catch(p){console.warn(p)}finally{N(!1)}},M=async()=>{D()},T=(I=(v=d())==null?void 0:v.name)==null?void 0:I.trim(),A=T&&(n==null?void 0:n.name.trim())!==T,V=d().image_url&&(t==null?void 0:t.image_url)!==((S=d())==null?void 0:S.image_url),W=h||j||!!f&&!R||!A&&!V;return e.jsx(le,{children:e.jsxs(X,{...u,children:[j?e.jsx(o,{my:24,children:e.jsx(ee,{})}):e.jsx(ne,{}),e.jsxs(o,{direction:"row",mb:6,children:[e.jsx(ce,{color:"secondary",disabled:j||!m,onClick:M,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(_,{color:"secondary",disabled:W,onClick:z,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",h&&e.jsx(de,{children:e.jsx(te,{color:y.lightGray,size:12})})]})]})]})})},le=r(o)`
  padding: 20px;
`,ce=r(_)`
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
`,je=()=>{const{close:s}=g("editNodeName");return e.jsx(J,{id:"editNodeName",kind:"large",onClose:s,preventOutsideClose:!0,children:e.jsx(ie,{})})};export{je as EditNodeNameModal};
