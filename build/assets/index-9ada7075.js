import{p as i,q as b,G as v,F as s,U as h,O as A,A as F,r as c,j as e,aM as W,bb as q,b9 as G,x as P}from"./index-c06ac289.js";import{B as V}from"./index-36531b7a.js";import{T as k,q as H,F as Y,B as I}from"./index-345999a5.js";import{E as J}from"./EditNodeIcon-0856f962.js";import{T as K}from"./index-357306ea.js";import{S as Q}from"./Skeleton-e9af2ce8.js";import{C as X}from"./ClipLoader-bd8d252a.js";import"./index.esm-a05a60c2.js";const Z=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ee(l){return!!Z.test(l)}const te=()=>{const{open:l}=h("changeNodeType"),{close:x}=h("editNodeName"),{changeNodeTypeFeatureFlag:f}=A(a=>({changeNodeTypeFeatureFlag:a.changeNodeTypeFeatureFlag})),o=F(),j=o==null?void 0:o.node_type,[p,m]=c.useState({});c.useEffect(()=>{o!=null&&o.properties&&m(o.properties)},[o]);const y=()=>{x(),l()},g=(a,n)=>{m(N=>({...N,[a]:n}))};return e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(oe,{children:"Edit Node"}),e.jsxs(ne,{children:[e.jsx(k,{type:j}),f&&e.jsx(se,{onClick:y,children:e.jsx(J,{})})]})]})}),e.jsx(re,{children:Object.keys(p).map(a=>e.jsxs(s,{mb:18,children:[e.jsx(ae,{style:{marginBottom:8},children:a}),e.jsx(K,{id:`cy-${a}`,maxLength:50,name:`properties.${a}`,onChange:n=>g(a,n),placeholder:`Please Enter the ${a}`,rules:a==="name"?{...W}:{}})]},a))})]})},oe=i(v)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ae=i(v)`
  color: ${b.GRAY6};
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
`,se=i(s)`
  align-items: center;
  cursor: pointer;
`,re=i(s)`
  display: flex;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 40px;
  width: calc(100% + 40px);
`,ie=()=>{var C,E,S;const{close:l}=h("editNodeName"),x=H({mode:"onChange"}),{watch:f,setValue:o,reset:j,getValues:p}=x,[m,y]=c.useState(!1),[g,a]=c.useState(!1),[n,N]=c.useState(),t=F(),{open:B}=h("removeNode");c.useEffect(()=>(n?Object.keys(n).forEach(r=>{o(r,n[r])}):t&&Object.keys(t).forEach(r=>{o(r,t[r])}),()=>{j()}),[n,o,j,t]),c.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){a(!0);try{const{data:d}=await q({search:t==null?void 0:t.name}),O=d.find(U=>U.name===t.name);N(O)}catch(d){console.log(d)}finally{a(!1)}}})()},[t]);const D=f("imageInputType"),T=f("image_url");c.useEffect(()=>{o("imageInputType",ee(T))},[T,o]);const L=()=>{l()},u=n||t,R=async()=>{y(!0);const r=p();try{await G((u==null?void 0:u.ref_id)||"",{node_data:r});const{updateNode:d}=P.getState();d({...u,...r}),L()}catch(d){console.warn(d)}finally{y(!1)}},_=async()=>{B()},w=(E=(C=p())==null?void 0:C.name)==null?void 0:E.trim(),$=w&&(n==null?void 0:n.name.trim())!==w,M=p().image_url&&(t==null?void 0:t.image_url)!==((S=p())==null?void 0:S.image_url),z=m||g||!!T&&!D||!$&&!M;return e.jsx(ce,{children:e.jsxs(Y,{...x,children:[g?e.jsx(s,{my:24,children:e.jsx(Q,{})}):e.jsx(te,{}),e.jsxs(s,{direction:"row",justify:"space-between",mt:20,children:[e.jsx(s,{direction:"column",children:e.jsx(le,{color:"secondary",disabled:g||!u,onClick:_,size:"large",variant:"contained",children:"Delete"})}),e.jsxs(pe,{color:"secondary",disabled:z,onClick:R,size:"large",variant:"contained",children:["Save Changes",m&&e.jsx(de,{children:e.jsx(X,{color:b.lightGray,size:12})})]})]})]})})},ce=i(s)`
  padding: 20px;
`,le=i(I)`
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
`,de=i.span`
  margin-top: 4px;
`,pe=i(I)`
  width: 80% !important;
  margin: 0 auto !important;
`,be=()=>{const{close:l}=h("editNodeName");return e.jsx(V,{id:"editNodeName",kind:"regular",onClose:l,preventOutsideClose:!0,children:e.jsx(ie,{})})};export{be as EditNodeNameModal};
