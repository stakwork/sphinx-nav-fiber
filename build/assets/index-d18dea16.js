import{s as c,g as N,T as F,F as s,a6 as x,k as W,r as d,j as e,b4 as k,b5 as P,l as V,c as G,n as q,B as _,bE as H,bF as Y,b7 as J}from"./index-0bc9ae90.js";import{e as I}from"./index-a97a73cc.js";import{T as K,a0 as Q}from"./index-0813e708.js";import{S as X}from"./Skeleton-7f80f646.js";import{C as Z}from"./ClipLoader-a4ee2175.js";import"./SourcesTableIcon-db95c031.js";import"./CheckIcon-c13450bd.js";import"./DeleteNodeIcon-64022384.js";import"./SoundIcon-dbfb099f.js";import"./SucessFeedBackIcon-06d2d64f.js";const ee=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function te(i){return!!ee.test(i)}function oe(i){return i.split("_").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")}const ae=()=>{const{open:i}=x("changeNodeType"),{close:p}=x("editNodeName"),{changeNodeTypeFeatureFlag:y}=W(a=>({changeNodeTypeFeatureFlag:a.changeNodeTypeFeatureFlag})),o=I(),j=o==null?void 0:o.node_type,[m,g]=d.useState({});d.useEffect(()=>{o!=null&&o.properties&&g(o.properties)},[o]);const b=()=>{p(),i()},h=(a,n)=>{g(T=>({...T,[a]:n}))};return e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(ne,{children:"Edit Node"}),e.jsxs(se,{children:[e.jsx(K,{type:j}),y&&e.jsx(ie,{onClick:b,children:e.jsx(Q,{})})]})]})}),e.jsx(ce,{children:Object.keys(m).map(a=>e.jsxs(s,{mb:18,children:[e.jsx(re,{style:{marginBottom:8},children:oe(a)}),e.jsx(k,{id:`cy-${a}`,maxLength:50,name:`properties.${a}`,onChange:n=>h(a,n),placeholder:`Please Enter the ${a}`,rules:a==="name"?{...P}:{}})]},a))})]})},ne=c(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,re=c(F)`
  color: ${N.GRAY6};
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
`,ie=c(s)`
  align-items: center;
  cursor: pointer;
`,ce=c(s)`
  display: flex;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 40px;
  width: calc(100% + 40px);
`,le=()=>{var v,w,S;const{close:i}=x("editNodeName"),p=V({mode:"onChange"}),{watch:y,setValue:o,reset:j,getValues:m}=p,[g,b]=d.useState(!1),[h,a]=d.useState(!1),[n,T]=d.useState(),t=I(),D=G(r=>r.updateNode),{open:B}=x("removeNode");d.useEffect(()=>(n?Object.keys(n).forEach(r=>{o(r,n[r])}):t&&Object.keys(t).forEach(r=>{o(r,t[r])}),()=>{j()}),[n,o,j,t]),d.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){a(!0);try{const{data:u}=await H({search:t==null?void 0:t.name}),f=u.find(O=>O.name===t.name);T(f)}catch(u){console.error(u)}finally{a(!1)}}})()},[t]);const L=y("imageInputType"),C=y("image_url");d.useEffect(()=>{o("imageInputType",te(C))},[C,o]);const R=()=>{i()},l=n||t,$=async()=>{if(!l)return;b(!0);const r=m(),u={name:r.name,image_url:r.image_url,properties:r.properties};try{const f={node_type:l.node_type,ref_id:l.ref_id,properties:u.properties};await Y((l==null?void 0:l.ref_id)||"",f),D({...l,...u}),R()}catch(f){console.warn(f)}finally{b(!1)}},z=async()=>{B()},E=(w=(v=m())==null?void 0:v.name)==null?void 0:w.trim(),M=E&&(n==null?void 0:n.name.trim())!==E,U=m().image_url&&(t==null?void 0:t.image_url)!==((S=m())==null?void 0:S.image_url),A=g||h||!!C&&!L||!M&&!U;return e.jsx(de,{children:e.jsxs(q,{...p,children:[h?e.jsx(s,{my:24,children:e.jsx(X,{})}):e.jsx(ae,{}),e.jsxs(s,{direction:"row",justify:"space-between",mt:20,children:[e.jsx(s,{direction:"column",children:e.jsx(pe,{color:"secondary",disabled:h||!l,onClick:z,size:"large",variant:"contained",children:"Delete"})}),e.jsxs(ue,{color:"secondary",disabled:A,onClick:$,size:"large",variant:"contained",children:["Save Changes",g&&e.jsx(me,{children:e.jsx(Z,{color:N.lightGray,size:12})})]})]})]})})},de=c(s)`
  padding: 20px;
`,pe=c(_)`
  && {
    color: ${N.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);
    flex: 1;
    margin-right: 10px;

    &:hover,
    &:active,
    &:focus {
      color: ${N.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,me=c.span`
  margin-top: 4px;
`,ue=c(_)`
  width: 80% !important;
  margin: 0 auto !important;
`,Ee=()=>{const{close:i}=x("editNodeName");return e.jsx(J,{id:"editNodeName",kind:"regular",onClose:i,preventOutsideClose:!0,children:e.jsx(le,{})})};export{Ee as EditNodeNameModal};
