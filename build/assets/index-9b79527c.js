import{s as c,a as N,T as _,F as r,e as x,q as O,r as d,j as e,aU as V,aV as W,t as q,v as P,B as F,bs as k,bq as G,u as H,aX as X}from"./index-202b5202.js";import{n as I,aC as Y}from"./index-e039876a.js";import{T as J}from"./index-03f78652.js";import{S as K}from"./Skeleton-dbdefa9c.js";import{C as Q}from"./ClipLoader-935e2297.js";const Z=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ee(i){return!!Z.test(i)}function te(i){return i.split("_").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")}const ae=()=>{const{open:i}=x("changeNodeType"),{close:p}=x("editNodeName"),{changeNodeTypeFeatureFlag:j}=O(o=>({changeNodeTypeFeatureFlag:o.changeNodeTypeFeatureFlag})),a=I(),y=a==null?void 0:a.node_type,[m,g]=d.useState({});d.useEffect(()=>{a!=null&&a.properties&&g(a.properties)},[a]);const b=()=>{p(),i()},h=(o,n)=>{g(C=>({...C,[o]:n}))};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(r,{align:"center",direction:"row",children:[e.jsx(oe,{children:"Edit Node"}),e.jsxs(se,{children:[e.jsx(J,{type:y}),j&&e.jsx(re,{onClick:b,children:e.jsx(Y,{})})]})]})}),e.jsx(ie,{children:Object.keys(m).map(o=>e.jsxs(r,{mb:18,children:[e.jsx(ne,{style:{marginBottom:8},children:te(o)}),e.jsx(V,{id:`cy-${o}`,maxLength:50,name:`properties.${o}`,onChange:n=>h(o,n),placeholder:`Please Enter the ${o}`,rules:o==="name"?{...W}:{}})]},o))})]})},oe=c(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ne=c(_)`
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
`,re=c(r)`
  align-items: center;
  cursor: pointer;
`,ie=c(r)`
  display: flex;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 40px;
  width: calc(100% + 40px);
`,ce=()=>{var S,w,E;const{close:i}=x("editNodeName"),p=q({mode:"onChange"}),{watch:j,setValue:a,reset:y,getValues:m}=p,[g,b]=d.useState(!1),[h,o]=d.useState(!1),[n,C]=d.useState(),t=I(),{open:B}=x("removeNode");d.useEffect(()=>(n?Object.keys(n).forEach(s=>{a(s,n[s])}):t&&Object.keys(t).forEach(s=>{a(s,t[s])}),()=>{y()}),[n,a,y,t]),d.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){o(!0);try{const{data:u}=await k({search:t==null?void 0:t.name}),f=u.find(A=>A.name===t.name);C(f)}catch(u){console.error(u)}finally{o(!1)}}})()},[t]);const D=j("imageInputType"),T=j("image_url");d.useEffect(()=>{a("imageInputType",ee(T))},[T,a]);const L=()=>{i()},l=n||t,R=async()=>{b(!0);const s=m(),u={node_type:l==null?void 0:l.node_type,node_data:{name:s.name,properties:s.properties,ref_id:s.ref_id}};try{await G((l==null?void 0:l.ref_id)||"",u);const{updateNode:f}=H.getState();f({...l,...u.node_data}),L()}catch(f){console.warn(f)}finally{b(!1)}},$=async()=>{B()},v=(w=(S=m())==null?void 0:S.name)==null?void 0:w.trim(),U=v&&(n==null?void 0:n.name.trim())!==v,z=m().image_url&&(t==null?void 0:t.image_url)!==((E=m())==null?void 0:E.image_url),M=g||h||!!T&&!D||!U&&!z;return e.jsx(le,{children:e.jsxs(P,{...p,children:[h?e.jsx(r,{my:24,children:e.jsx(K,{})}):e.jsx(ae,{}),e.jsxs(r,{direction:"row",justify:"space-between",mt:20,children:[e.jsx(r,{direction:"column",children:e.jsx(de,{color:"secondary",disabled:h||!l,onClick:$,size:"large",variant:"contained",children:"Delete"})}),e.jsxs(me,{color:"secondary",disabled:M,onClick:R,size:"large",variant:"contained",children:["Save Changes",g&&e.jsx(pe,{children:e.jsx(Q,{color:N.lightGray,size:12})})]})]})]})})},le=c(r)`
  padding: 20px;
`,de=c(F)`
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
`,pe=c.span`
  margin-top: 4px;
`,me=c(F)`
  width: 80% !important;
  margin: 0 auto !important;
`,je=()=>{const{close:i}=x("editNodeName");return e.jsx(X,{id:"editNodeName",kind:"regular",onClose:i,preventOutsideClose:!0,children:e.jsx(ce,{})})};export{je as EditNodeNameModal};
