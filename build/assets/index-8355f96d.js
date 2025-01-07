import{s as l,a as N,T as E,F as i,e as x,q as O,r as d,j as e,aU as V,aV as W,t as q,v as P,B as F,bs as k,bq as G,u as H,aX as X}from"./index-31b814fa.js";import{n as I,aC as Y}from"./index-5602f744.js";import{T as J}from"./index-0450f0da.js";import{S as K}from"./Skeleton-4eecc465.js";import{C as Q}from"./ClipLoader-fd637e16.js";const Z=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ee(c){return!!Z.test(c)}function te(c){return c.split("_").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")}const ae=()=>{const{open:c}=x("changeNodeType"),{close:p}=x("editNodeName"),{changeNodeTypeFeatureFlag:j}=O(o=>({changeNodeTypeFeatureFlag:o.changeNodeTypeFeatureFlag})),a=I(),y=a==null?void 0:a.node_type,[m,u]=d.useState({});d.useEffect(()=>{a!=null&&a.properties&&u(a.properties)},[a]);const b=()=>{p(),c()},g=(o,s)=>{u(C=>({...C,[o]:s}))};return e.jsxs(i,{children:[e.jsx(i,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(i,{align:"center",direction:"row",children:[e.jsx(oe,{children:"Edit Node"}),e.jsxs(se,{children:[e.jsx(J,{type:y}),j&&e.jsx(re,{onClick:b,children:e.jsx(Y,{})})]})]})}),e.jsx(ie,{children:Object.keys(m).map(o=>e.jsxs(i,{mb:18,children:[e.jsx(ne,{style:{marginBottom:8},children:te(o)}),e.jsx(V,{id:`cy-${o}`,maxLength:50,name:`properties.${o}`,onChange:s=>g(o,s),placeholder:`Please Enter the ${o}`,rules:o==="name"?{...W}:{}})]},o))})]})},oe=l(E)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ne=l(E)`
  color: ${N.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,se=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 5px 0 0 40px;
`,re=l(i)`
  align-items: center;
  cursor: pointer;
`,ie=l(i)`
  display: flex;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 40px;
  width: calc(100% + 40px);
`,ce=()=>{var v,S,w;const{close:c}=x("editNodeName"),p=q({mode:"onChange"}),{watch:j,setValue:a,reset:y,getValues:m}=p,[u,b]=d.useState(!1),[g,o]=d.useState(!1),[s,C]=d.useState(),t=I(),{open:B}=x("removeNode");d.useEffect(()=>(s?Object.keys(s).forEach(n=>{a(n,s[n])}):t&&Object.keys(t).forEach(n=>{a(n,t[n])}),()=>{y()}),[s,a,y,t]),d.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){o(!0);try{const{data:h}=await k({search:t==null?void 0:t.name}),f=h.find(A=>A.name===t.name);C(f)}catch(h){console.error(h)}finally{o(!1)}}})()},[t]);const D=j("imageInputType"),T=j("image_url");d.useEffect(()=>{a("imageInputType",ee(T))},[T,a]);const L=()=>{c()},r=s||t,R=async()=>{b(!0);const n=m(),h={node_type:r==null?void 0:r.node_type,properties:{name:n.name,...n.image_url&&{image_url:n.image_url}},ref_id:r==null?void 0:r.ref_id};try{await G((r==null?void 0:r.ref_id)||"",h);const{updateNode:f}=H.getState();f({...r,name:n.name,...n.image_url&&{image_url:n.image_url}}),L()}catch(f){console.warn(f)}finally{b(!1)}},$=async()=>{B()},_=(S=(v=m())==null?void 0:v.name)==null?void 0:S.trim(),U=_&&(s==null?void 0:s.name.trim())!==_,z=m().image_url&&(t==null?void 0:t.image_url)!==((w=m())==null?void 0:w.image_url),M=u||g||!!T&&!D||!U&&!z;return e.jsx(le,{children:e.jsxs(P,{...p,children:[g?e.jsx(i,{my:24,children:e.jsx(K,{})}):e.jsx(ae,{}),e.jsxs(i,{direction:"row",justify:"space-between",mt:20,children:[e.jsx(i,{direction:"column",children:e.jsx(de,{color:"secondary",disabled:g||!r,onClick:$,size:"large",variant:"contained",children:"Delete"})}),e.jsxs(me,{color:"secondary",disabled:M,onClick:R,size:"large",variant:"contained",children:["Save Changes",u&&e.jsx(pe,{children:e.jsx(Q,{color:N.lightGray,size:12})})]})]})]})})},le=l(i)`
  padding: 20px;
`,de=l(F)`
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
`,pe=l.span`
  margin-top: 4px;
`,me=l(F)`
  width: 80% !important;
  margin: 0 auto !important;
`,je=()=>{const{close:c}=x("editNodeName");return e.jsx(X,{id:"editNodeName",kind:"regular",onClose:c,preventOutsideClose:!0,children:e.jsx(ce,{})})};export{je as EditNodeNameModal};
