import{s as c,a as N,T as F,F as r,e as x,q as O,r as d,j as e,aU as V,aV as W,t as P,v as k,B as I,bs as q,bt as G,u as H,aX as X}from"./index-39c25276.js";import{n as D,aC as Y}from"./index-f52dd80c.js";import{T as J}from"./index-6a132ace.js";import{S as K}from"./Skeleton-a190231d.js";import{C as Q}from"./ClipLoader-047b1166.js";const Z=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ee(i){return!!Z.test(i)}function te(i){return i.split("_").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")}const ae=()=>{const{open:i}=x("changeNodeType"),{close:p}=x("editNodeName"),{changeNodeTypeFeatureFlag:y}=O(o=>({changeNodeTypeFeatureFlag:o.changeNodeTypeFeatureFlag})),a=D(),j=a==null?void 0:a.node_type,[m,g]=d.useState({});d.useEffect(()=>{a!=null&&a.properties&&g(a.properties)},[a]);const b=()=>{p(),i()},h=(o,n)=>{g(C=>({...C,[o]:n}))};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(r,{align:"center",direction:"row",children:[e.jsx(oe,{children:"Edit Node"}),e.jsxs(se,{children:[e.jsx(J,{type:j}),y&&e.jsx(re,{onClick:b,children:e.jsx(Y,{})})]})]})}),e.jsx(ie,{children:Object.keys(m).map(o=>e.jsxs(r,{mb:18,children:[e.jsx(ne,{style:{marginBottom:8},children:te(o)}),e.jsx(V,{id:`cy-${o}`,maxLength:50,name:`properties.${o}`,onChange:n=>h(o,n),placeholder:`Please Enter the ${o}`,rules:o==="name"?{...W}:{}})]},o))})]})},oe=c(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ne=c(F)`
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
`,ce=()=>{var w,E,_;const{close:i}=x("editNodeName"),p=P({mode:"onChange"}),{watch:y,setValue:a,reset:j,getValues:m}=p,[g,b]=d.useState(!1),[h,o]=d.useState(!1),[n,C]=d.useState(),t=D(),{open:B}=x("removeNode");d.useEffect(()=>(n?Object.keys(n).forEach(s=>{a(s,n[s])}):t&&Object.keys(t).forEach(s=>{a(s,t[s])}),()=>{j()}),[n,a,j,t]),d.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){o(!0);try{const{data:u}=await q({search:t==null?void 0:t.name}),f=u.find(v=>v.name===t.name);C(f)}catch(u){console.error(u)}finally{o(!1)}}})()},[t]);const L=y("imageInputType"),T=y("image_url");d.useEffect(()=>{a("imageInputType",ee(T))},[T,a]);const R=()=>{i()},l=n||t,$=async()=>{if(!l)return;b(!0);const s=m(),u={name:s.name,image_url:s.image_url,properties:s.properties};try{const f={node_type:l.node_type,ref_id:l.ref_id,properties:u.properties};await G((l==null?void 0:l.ref_id)||"",f);const{updateNode:v}=H.getState();v({...l,...u}),R()}catch(f){console.warn(f)}finally{b(!1)}},U=async()=>{B()},S=(E=(w=m())==null?void 0:w.name)==null?void 0:E.trim(),z=S&&(n==null?void 0:n.name.trim())!==S,M=m().image_url&&(t==null?void 0:t.image_url)!==((_=m())==null?void 0:_.image_url),A=g||h||!!T&&!L||!z&&!M;return e.jsx(le,{children:e.jsxs(k,{...p,children:[h?e.jsx(r,{my:24,children:e.jsx(K,{})}):e.jsx(ae,{}),e.jsxs(r,{direction:"row",justify:"space-between",mt:20,children:[e.jsx(r,{direction:"column",children:e.jsx(de,{color:"secondary",disabled:h||!l,onClick:U,size:"large",variant:"contained",children:"Delete"})}),e.jsxs(me,{color:"secondary",disabled:A,onClick:$,size:"large",variant:"contained",children:["Save Changes",g&&e.jsx(pe,{children:e.jsx(Q,{color:N.lightGray,size:12})})]})]})]})})},le=c(r)`
  padding: 20px;
`,de=c(I)`
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
`,me=c(I)`
  width: 80% !important;
  margin: 0 auto !important;
`,ye=()=>{const{close:i}=x("editNodeName");return e.jsx(X,{id:"editNodeName",kind:"regular",onClose:i,preventOutsideClose:!0,children:e.jsx(ce,{})})};export{ye as EditNodeNameModal};
