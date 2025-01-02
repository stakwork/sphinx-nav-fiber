import{s as c,a as b,T as E,F as s,e as x,q as O,r as d,j as e,aU as V,aV as W,t as q,v as P,B as F,bs as k,bq as G,u as H,aX as X}from"./index-bb6fcda3.js";import{n as I,aC as Y}from"./index-540f0663.js";import{T as J}from"./index-7b4f8c50.js";import{S as K}from"./Skeleton-ef700faa.js";import{C as Q}from"./ClipLoader-171dad3d.js";const Z=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ee(r){return!!Z.test(r)}function te(r){return r.split("_").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")}const ae=()=>{const{open:r}=x("changeNodeType"),{close:p}=x("editNodeName"),{changeNodeTypeFeatureFlag:f}=O(o=>({changeNodeTypeFeatureFlag:o.changeNodeTypeFeatureFlag})),a=I(),j=a==null?void 0:a.node_type,[u,g]=d.useState({});d.useEffect(()=>{a!=null&&a.properties&&g(a.properties)},[a]);const y=()=>{p(),r()},h=(o,n)=>{g(N=>({...N,[o]:n}))};return e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(oe,{children:"Edit Node"}),e.jsxs(se,{children:[e.jsx(J,{type:j}),f&&e.jsx(re,{onClick:y,children:e.jsx(Y,{})})]})]})}),e.jsx(ie,{children:Object.keys(u).map(o=>e.jsxs(s,{mb:18,children:[e.jsx(ne,{style:{marginBottom:8},children:te(o)}),e.jsx(V,{id:`cy-${o}`,maxLength:50,name:`properties.${o}`,onChange:n=>h(o,n),placeholder:`Please Enter the ${o}`,rules:o==="name"?{...W}:{}})]},o))})]})},oe=c(E)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ne=c(E)`
  color: ${b.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,se=c.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 5px 0 0 40px;
`,re=c(s)`
  align-items: center;
  cursor: pointer;
`,ie=c(s)`
  display: flex;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 40px;
  width: calc(100% + 40px);
`,ce=()=>{var v,S,w;const{close:r}=x("editNodeName"),p=q({mode:"onChange"}),{watch:f,setValue:a,reset:j,getValues:u}=p,[g,y]=d.useState(!1),[h,o]=d.useState(!1),[n,N]=d.useState(),t=I(),{open:B}=x("removeNode");d.useEffect(()=>(n?Object.keys(n).forEach(i=>{a(i,n[i])}):t&&Object.keys(t).forEach(i=>{a(i,t[i])}),()=>{j()}),[n,a,j,t]),d.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){o(!0);try{const{data:m}=await k({search:t==null?void 0:t.name}),M=m.find(A=>A.name===t.name);N(M)}catch(m){console.error(m)}finally{o(!1)}}})()},[t]);const _=f("imageInputType"),C=f("image_url");d.useEffect(()=>{a("imageInputType",ee(C))},[C,a]);const D=()=>{r()},l=n||t,L=async()=>{y(!0);const i=u();try{await G((l==null?void 0:l.ref_id)||"",{node_type:l==null?void 0:l.node_type,node_data:i});const{updateNode:m}=H.getState();m({...l,...i}),D()}catch(m){console.warn(m)}finally{y(!1)}},R=async()=>{B()},T=(S=(v=u())==null?void 0:v.name)==null?void 0:S.trim(),$=T&&(n==null?void 0:n.name.trim())!==T,U=u().image_url&&(t==null?void 0:t.image_url)!==((w=u())==null?void 0:w.image_url),z=g||h||!!C&&!_||!$&&!U;return e.jsx(le,{children:e.jsxs(P,{...p,children:[h?e.jsx(s,{my:24,children:e.jsx(K,{})}):e.jsx(ae,{}),e.jsxs(s,{direction:"row",justify:"space-between",mt:20,children:[e.jsx(s,{direction:"column",children:e.jsx(de,{color:"secondary",disabled:h||!l,onClick:R,size:"large",variant:"contained",children:"Delete"})}),e.jsxs(me,{color:"secondary",disabled:z,onClick:L,size:"large",variant:"contained",children:["Save Changes",g&&e.jsx(pe,{children:e.jsx(Q,{color:b.lightGray,size:12})})]})]})]})})},le=c(s)`
  padding: 20px;
`,de=c(F)`
  && {
    color: ${b.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);
    flex: 1;
    margin-right: 10px;

    &:hover,
    &:active,
    &:focus {
      color: ${b.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,pe=c.span`
  margin-top: 4px;
`,me=c(F)`
  width: 80% !important;
  margin: 0 auto !important;
`,je=()=>{const{close:r}=x("editNodeName");return e.jsx(X,{id:"editNodeName",kind:"regular",onClose:r,preventOutsideClose:!0,children:e.jsx(ce,{})})};export{je as EditNodeNameModal};
