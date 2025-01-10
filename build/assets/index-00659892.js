import{s as i,a as N,T as F,F as s,e as x,q as O,r as l,j as e,aU as V,aV as W,t as P,v as k,B as I,bs as q,bt as G,u as H,aX as X}from"./index-973bf373.js";import{n as _,aC as Y}from"./index-251381ec.js";import{T as J}from"./index-91b449e7.js";import{S as K}from"./Skeleton-3d6db2cd.js";import{C as Q}from"./ClipLoader-4bd8407c.js";const Z=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ee(r){return!!Z.test(r)}function te(r){return r.split("_").map(d=>d.charAt(0).toUpperCase()+d.slice(1)).join(" ")}const oe=()=>{const{open:r}=x("changeNodeType"),{close:d}=x("editNodeName"),{changeNodeTypeFeatureFlag:y}=O(a=>({changeNodeTypeFeatureFlag:a.changeNodeTypeFeatureFlag})),o=_(),j=o==null?void 0:o.node_type,[m,g]=l.useState({});l.useEffect(()=>{o!=null&&o.properties&&g(o.properties)},[o]);const b=()=>{d(),r()},h=(a,n)=>{g(C=>({...C,[a]:n}))};return e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(ae,{children:"Edit Node"}),e.jsxs(se,{children:[e.jsx(J,{type:j}),y&&e.jsx(re,{onClick:b,children:e.jsx(Y,{})})]})]})}),e.jsx(ie,{children:Object.keys(m).map(a=>e.jsxs(s,{mb:18,children:[e.jsx(ne,{style:{marginBottom:8},children:te(a)}),e.jsx(V,{id:`cy-${a}`,maxLength:50,name:`properties.${a}`,onChange:n=>h(a,n),placeholder:`Please Enter the ${a}`,rules:a==="name"?{...W}:{}})]},a))})]})},ae=i(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ne=i(F)`
  color: ${N.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,se=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 5px 0 0 40px;
`,re=i(s)`
  align-items: center;
  cursor: pointer;
`,ie=i(s)`
  display: flex;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 40px;
  width: calc(100% + 40px);
`,ce=()=>{var w,E,D;const{close:r}=x("editNodeName"),d=P({mode:"onChange"}),{watch:y,setValue:o,reset:j,getValues:m}=d,[g,b]=l.useState(!1),[h,a]=l.useState(!1),[n,C]=l.useState(),t=_(),{open:B}=x("removeNode");l.useEffect(()=>(n?Object.keys(n).forEach(p=>{o(p,n[p])}):t&&Object.keys(t).forEach(p=>{o(p,t[p])}),()=>{j()}),[n,o,j,t]),l.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){a(!0);try{const{data:u}=await q({search:t==null?void 0:t.name}),f=u.find(v=>v.name===t.name);C(f)}catch(u){console.error(u)}finally{a(!1)}}})()},[t]);const L=y("imageInputType"),T=y("image_url");l.useEffect(()=>{o("imageInputType",ee(T))},[T,o]);const R=()=>{r()},c=n||t,$=async()=>{if(!c)return;b(!0);const u={properties:m().properties};try{const f={node_type:c.node_type,ref_id:c.ref_id,properties:u.properties};await G((c==null?void 0:c.ref_id)||"",f);const{updateNode:v}=H.getState();v({...c,...u}),R()}catch(f){console.warn(f)}finally{b(!1)}},U=async()=>{B()},S=(E=(w=m())==null?void 0:w.name)==null?void 0:E.trim(),z=S&&(n==null?void 0:n.name.trim())!==S,M=m().image_url&&(t==null?void 0:t.image_url)!==((D=m())==null?void 0:D.image_url),A=g||h||!!T&&!L||!z&&!M;return e.jsx(le,{children:e.jsxs(k,{...d,children:[h?e.jsx(s,{my:24,children:e.jsx(K,{})}):e.jsx(oe,{}),e.jsxs(s,{direction:"row",justify:"space-between",mt:20,children:[e.jsx(s,{direction:"column",children:e.jsx(de,{color:"secondary",disabled:h||!c,onClick:U,size:"large",variant:"contained",children:"Delete"})}),e.jsxs(me,{color:"secondary",disabled:A,onClick:$,size:"large",variant:"contained",children:["Save Changes",g&&e.jsx(pe,{children:e.jsx(Q,{color:N.lightGray,size:12})})]})]})]})})},le=i(s)`
  padding: 20px;
`,de=i(I)`
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
`,pe=i.span`
  margin-top: 4px;
`,me=i(I)`
  width: 80% !important;
  margin: 0 auto !important;
`,ye=()=>{const{close:r}=x("editNodeName");return e.jsx(X,{id:"editNodeName",kind:"regular",onClose:r,preventOutsideClose:!0,children:e.jsx(ce,{})})};export{ye as EditNodeNameModal};
