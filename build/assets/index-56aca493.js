import{s as c,a as N,T as _,F as r,a0 as x,h as V,r as d,j as e,aU as W,aV as k,i as P,u as G,k as q,B as F,bs as H,bt as X,aX as Y}from"./index-b2b122bb.js";import{f as I}from"./index-abe7064a.js";import{E as J}from"./EditNodeIcon-82ddfda2.js";import{T as K}from"./index-05320fd1.js";import{S as Q}from"./Skeleton-debc3ca4.js";import{C as Z}from"./ClipLoader-d4018a4a.js";const ee=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function te(i){return!!ee.test(i)}function oe(i){return i.split("_").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")}const ae=()=>{const{open:i}=x("changeNodeType"),{close:p}=x("editNodeName"),{changeNodeTypeFeatureFlag:y}=V(a=>({changeNodeTypeFeatureFlag:a.changeNodeTypeFeatureFlag})),o=I(),j=o==null?void 0:o.node_type,[m,g]=d.useState({});d.useEffect(()=>{o!=null&&o.properties&&g(o.properties)},[o]);const b=()=>{p(),i()},h=(a,n)=>{g(T=>({...T,[a]:n}))};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(r,{align:"center",direction:"row",children:[e.jsx(ne,{children:"Edit Node"}),e.jsxs(re,{children:[e.jsx(K,{type:j}),y&&e.jsx(ie,{onClick:b,children:e.jsx(J,{})})]})]})}),e.jsx(ce,{children:Object.keys(m).map(a=>e.jsxs(r,{mb:18,children:[e.jsx(se,{style:{marginBottom:8},children:oe(a)}),e.jsx(W,{id:`cy-${a}`,maxLength:50,name:`properties.${a}`,onChange:n=>h(a,n),placeholder:`Please Enter the ${a}`,rules:a==="name"?{...k}:{}})]},a))})]})},ne=c(_)`
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
`,le=()=>{var v,w,S;const{close:i}=x("editNodeName"),p=P({mode:"onChange"}),{watch:y,setValue:o,reset:j,getValues:m}=p,[g,b]=d.useState(!1),[h,a]=d.useState(!1),[n,T]=d.useState(),t=I(),D=G(s=>s.updateNode),{open:B}=x("removeNode");d.useEffect(()=>(n?Object.keys(n).forEach(s=>{o(s,n[s])}):t&&Object.keys(t).forEach(s=>{o(s,t[s])}),()=>{j()}),[n,o,j,t]),d.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){a(!0);try{const{data:u}=await H({search:t==null?void 0:t.name}),f=u.find(O=>O.name===t.name);T(f)}catch(u){console.error(u)}finally{a(!1)}}})()},[t]);const L=y("imageInputType"),C=y("image_url");d.useEffect(()=>{o("imageInputType",te(C))},[C,o]);const R=()=>{i()},l=n||t,$=async()=>{if(!l)return;b(!0);const s=m(),u={name:s.name,image_url:s.image_url,properties:s.properties};try{const f={node_type:l.node_type,ref_id:l.ref_id,properties:u.properties};await X((l==null?void 0:l.ref_id)||"",f),D({...l,...u}),R()}catch(f){console.warn(f)}finally{b(!1)}},U=async()=>{B()},E=(w=(v=m())==null?void 0:v.name)==null?void 0:w.trim(),z=E&&(n==null?void 0:n.name.trim())!==E,M=m().image_url&&(t==null?void 0:t.image_url)!==((S=m())==null?void 0:S.image_url),A=g||h||!!C&&!L||!z&&!M;return e.jsx(de,{children:e.jsxs(q,{...p,children:[h?e.jsx(r,{my:24,children:e.jsx(Q,{})}):e.jsx(ae,{}),e.jsxs(r,{direction:"row",justify:"space-between",mt:20,children:[e.jsx(r,{direction:"column",children:e.jsx(pe,{color:"secondary",disabled:h||!l,onClick:U,size:"large",variant:"contained",children:"Delete"})}),e.jsxs(ue,{color:"secondary",disabled:A,onClick:$,size:"large",variant:"contained",children:["Save Changes",g&&e.jsx(me,{children:e.jsx(Z,{color:N.lightGray,size:12})})]})]})]})})},de=c(r)`
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
`,be=()=>{const{close:i}=x("editNodeName");return e.jsx(Y,{id:"editNodeName",kind:"regular",onClose:i,preventOutsideClose:!0,children:e.jsx(le,{})})};export{be as EditNodeNameModal};
