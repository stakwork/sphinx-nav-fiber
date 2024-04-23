import{f as u,h as m,T as w,j as e,F as o,C as V,r,a4 as $,E as A,D as P,i as q}from"./index-659df10a.js";import{B as G}from"./index-3652260a.js";import{u as f}from"./index-53b0bc65.js";import{c as H,F as O,B as E,C as W}from"./react-toastify.esm-6120373c.js";import{T as S}from"./index-fdaf0b4c.js";import{S as Y}from"./Skeleton-ab1826e1.js";import"./index.esm-581f5c21.js";import"./InfoIcon-b4da5800.js";const T=/^https:\/\/.*\.(png|jpe?g|svg)$/;function B(i){return!!T.test(i)}const J=()=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(K,{children:"Edit Node"})})}),e.jsxs(o,{mb:18,children:[e.jsx(b,{style:{marginBottom:8},children:"Node Name"}),e.jsx(S,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Node name",rules:{...V}})]}),e.jsxs(o,{mb:36,children:[e.jsx(b,{style:{marginBottom:8},children:"image_url"}),e.jsx(S,{id:"cy-image_url",maxLength:500,name:"image_url",placeholder:"image_url",rules:{pattern:{message:"Please enter a valid URL",value:T},validate:{source:B}}})]})]}),K=u(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,b=u(w)`
  color: ${m.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Q=()=>{const{close:i}=f("editNodeName"),x=H({mode:"onChange"}),{watch:p,setValue:s,reset:h,getValues:y}=x,[j,v]=r.useState(!1),[g,N]=r.useState(!1),[a,_]=r.useState(),t=$(),{open:C}=f("removeNode");r.useEffect(()=>(a?s("name",a==null?void 0:a.name):t&&(s("name",t.name),s("image_url",(t==null?void 0:t.image_url)??"")),()=>{h()}),[a,s,h,t]),r.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){N(!0);try{const{data:n}=await A({search:t==null?void 0:t.name}),d=n.find(M=>M.name===t.name);_(d)}catch(n){console.log(n)}finally{N(!1)}}})()},[t]);const D=p("imageInputType"),R=p("name"),l=p("image_url");r.useEffect(()=>{s("imageInputType",B(l))},[l,s]);const L=()=>{i()},c=a||t,I=async()=>{v(!0);const n={["name"]:R.trim(),image_url:l.trim()};try{await P((c==null?void 0:c.ref_id)||"",n);const{updateNode:d}=q.getState();d({...c,...n}),L()}catch(d){console.warn(d)}finally{v(!1)}},k=async()=>{C()},z=y().name&&(a==null?void 0:a.name)!==y().name,F=j||g||!!l&&!D||!l&&!z;return e.jsx(X,{children:e.jsxs(O,{...x,children:[g?e.jsx(o,{my:24,children:e.jsx(Y,{})}):e.jsx(J,{}),e.jsxs(o,{direction:"row",mb:6,children:[e.jsx(Z,{color:"secondary",disabled:g||!c,onClick:k,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(E,{color:"secondary",disabled:F,onClick:I,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",j&&e.jsx(W,{color:m.BLUE_PRESS_STATE,size:10})]})]})]})})},X=u(o)`
  padding: 20px;
`,Z=u(E)`
  && {
    color: ${m.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${m.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,le=()=>{const{close:i}=f("editNodeName");return e.jsx(G,{id:"editNodeName",kind:"large",onClose:i,preventOutsideClose:!0,children:e.jsx(Q,{})})};export{le as EditNodeNameModal};
