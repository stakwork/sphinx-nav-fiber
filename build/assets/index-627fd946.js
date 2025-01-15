import{s as c,a as N,T as _,F as r,e as x,q as O,r as d,j as e,aV as V,aW as P,t as k,u as q,v as G,B as F,bt as Y,bu as H,aY as J}from"./index-04abc105.js";import{n as I,aC as K}from"./index-a801c2df.js";import{T as Q}from"./index-8c8f68c1.js";import{S as X}from"./Skeleton-b0b44622.js";import{C as Z}from"./ClipLoader-b234ef37.js";const ee=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function te(i){return!!ee.test(i)}function ae(i){return i.split("_").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")}const oe=()=>{const{open:i}=x("changeNodeType"),{close:p}=x("editNodeName"),{changeNodeTypeFeatureFlag:y}=O(o=>({changeNodeTypeFeatureFlag:o.changeNodeTypeFeatureFlag})),a=I(),j=a==null?void 0:a.node_type,[m,g]=d.useState({});d.useEffect(()=>{a!=null&&a.properties&&g(a.properties)},[a]);const b=()=>{p(),i()},h=(o,n)=>{g(C=>({...C,[o]:n}))};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(r,{align:"center",direction:"row",children:[e.jsx(ne,{children:"Edit Node"}),e.jsxs(re,{children:[e.jsx(Q,{type:j}),y&&e.jsx(ie,{onClick:b,children:e.jsx(K,{})})]})]})}),e.jsx(ce,{children:Object.keys(m).map(o=>e.jsxs(r,{mb:18,children:[e.jsx(se,{style:{marginBottom:8},children:ae(o)}),e.jsx(V,{id:`cy-${o}`,maxLength:50,name:`properties.${o}`,onChange:n=>h(o,n),placeholder:`Please Enter the ${o}`,rules:o==="name"?{...P}:{}})]},o))})]})},ne=c(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,se=c(_)`
  color: ${N.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,re=c.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 5px 0 0 40px;
`,ie=c(r)`
  align-items: center;
  cursor: pointer;
`,ce=c(r)`
  display: flex;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 40px;
  width: calc(100% + 40px);
`,le=()=>{var w,E,S;const{close:i}=x("editNodeName"),p=k({mode:"onChange"}),{watch:y,setValue:a,reset:j,getValues:m}=p,[g,b]=d.useState(!1),[h,o]=d.useState(!1),[n,C]=d.useState(),t=I(),D=q(s=>s.updateNode),{open:B}=x("removeNode");d.useEffect(()=>(n?Object.keys(n).forEach(s=>{a(s,n[s])}):t&&Object.keys(t).forEach(s=>{a(s,t[s])}),()=>{j()}),[n,a,j,t]),d.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){o(!0);try{const{data:u}=await Y({search:t==null?void 0:t.name}),f=u.find(A=>A.name===t.name);C(f)}catch(u){console.error(u)}finally{o(!1)}}})()},[t]);const L=y("imageInputType"),T=y("image_url");d.useEffect(()=>{a("imageInputType",te(T))},[T,a]);const R=()=>{i()},l=n||t,$=async()=>{if(!l)return;b(!0);const s=m(),u={name:s.name,image_url:s.image_url,properties:s.properties};try{const f={node_type:l.node_type,ref_id:l.ref_id,properties:u.properties};await H((l==null?void 0:l.ref_id)||"",f),D({...l,...u}),R()}catch(f){console.warn(f)}finally{b(!1)}},z=async()=>{B()},v=(E=(w=m())==null?void 0:w.name)==null?void 0:E.trim(),M=v&&(n==null?void 0:n.name.trim())!==v,U=m().image_url&&(t==null?void 0:t.image_url)!==((S=m())==null?void 0:S.image_url),W=g||h||!!T&&!L||!M&&!U;return e.jsx(de,{children:e.jsxs(G,{...p,children:[h?e.jsx(r,{my:24,children:e.jsx(X,{})}):e.jsx(oe,{}),e.jsxs(r,{direction:"row",justify:"space-between",mt:20,children:[e.jsx(r,{direction:"column",children:e.jsx(pe,{color:"secondary",disabled:h||!l,onClick:z,size:"large",variant:"contained",children:"Delete"})}),e.jsxs(ue,{color:"secondary",disabled:W,onClick:$,size:"large",variant:"contained",children:["Save Changes",g&&e.jsx(me,{children:e.jsx(Z,{color:N.lightGray,size:12})})]})]})]})})},de=c(r)`
  padding: 20px;
`,pe=c(F)`
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
`,ue=c(F)`
  width: 80% !important;
  margin: 0 auto !important;
`,je=()=>{const{close:i}=x("editNodeName");return e.jsx(J,{id:"editNodeName",kind:"regular",onClose:i,preventOutsideClose:!0,children:e.jsx(le,{})})};export{je as EditNodeNameModal};
