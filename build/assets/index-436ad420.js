import{t as i,v as N,T as E,F as s,N as U,r as c,j as e,aA as W,a_ as P,aY as V,q as k}from"./index-892f5817.js";import{B as q}from"./index-a4706925.js";import{u as h,e as F,T as G,aZ as Y,a0 as H,a1 as Z,B as I}from"./index-ac3adf36.js";import{T as J}from"./index-f5442956.js";import{S as K}from"./Skeleton-573f044a.js";import{C as Q}from"./ClipLoader-95e79f0e.js";import"./index.esm-16f5e1ea.js";const X=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ee(l){return!!X.test(l)}const te=()=>{const{open:l}=h("changeNodeType"),{close:x}=h("editNodeName"),{changeNodeTypeFeatureFlag:f}=U(o=>({changeNodeTypeFeatureFlag:o.changeNodeTypeFeatureFlag})),a=F(),j=a==null?void 0:a.node_type,[p,m]=c.useState({});c.useEffect(()=>{a!=null&&a.properties&&m(a.properties)},[a]);const y=()=>{x(),l()},g=(o,n)=>{m(T=>({...T,[o]:n}))};return e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(ae,{children:"Edit Node"}),e.jsxs(ne,{children:[e.jsx(G,{type:j}),f&&e.jsx(se,{onClick:y,children:e.jsx(Y,{})})]})]})}),e.jsx(re,{children:Object.keys(p).map(o=>e.jsxs(s,{mb:18,children:[e.jsx(oe,{style:{marginBottom:8},children:o}),e.jsx(J,{id:`cy-${o}`,maxLength:50,name:`properties.${o}`,onChange:n=>g(o,n),placeholder:`Please Enter the ${o}`,rules:o==="name"?{...W}:{}})]},o))})]})},ae=i(E)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,oe=i(E)`
  color: ${N.GRAY6};
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
`,ie=()=>{var w,C,S;const{close:l}=h("editNodeName"),x=H({mode:"onChange"}),{watch:f,setValue:a,reset:j,getValues:p}=x,[m,y]=c.useState(!1),[g,o]=c.useState(!1),[n,T]=c.useState(),t=F(),{open:B}=h("removeNode");c.useEffect(()=>(n?Object.keys(n).forEach(r=>{a(r,n[r])}):t&&Object.keys(t).forEach(r=>{a(r,t[r])}),()=>{j()}),[n,a,j,t]),c.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){o(!0);try{const{data:d}=await P({search:t==null?void 0:t.name}),A=d.find(O=>O.name===t.name);T(A)}catch(d){console.log(d)}finally{o(!1)}}})()},[t]);const D=f("imageInputType"),b=f("image_url");c.useEffect(()=>{a("imageInputType",ee(b))},[b,a]);const L=()=>{l()},u=n||t,_=async()=>{y(!0);const r=p();try{await V((u==null?void 0:u.ref_id)||"",{node_data:r});const{updateNode:d}=k.getState();d({...u,...r}),L()}catch(d){console.warn(d)}finally{y(!1)}},R=async()=>{B()},v=(C=(w=p())==null?void 0:w.name)==null?void 0:C.trim(),$=v&&(n==null?void 0:n.name.trim())!==v,z=p().image_url&&(t==null?void 0:t.image_url)!==((S=p())==null?void 0:S.image_url),M=m||g||!!b&&!D||!$&&!z;return e.jsx(ce,{children:e.jsxs(Z,{...x,children:[g?e.jsx(s,{my:24,children:e.jsx(K,{})}):e.jsx(te,{}),e.jsxs(s,{direction:"row",justify:"space-between",mt:20,children:[e.jsx(s,{direction:"column",children:e.jsx(le,{color:"secondary",disabled:g||!u,onClick:R,size:"large",variant:"contained",children:"Delete"})}),e.jsxs(pe,{color:"secondary",disabled:M,onClick:_,size:"large",variant:"contained",children:["Save Changes",m&&e.jsx(de,{children:e.jsx(Q,{color:N.lightGray,size:12})})]})]})]})})},ce=i(s)`
  padding: 20px;
`,le=i(I)`
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
`,de=i.span`
  margin-top: 4px;
`,pe=i(I)`
  width: 80% !important;
  margin: 0 auto !important;
`,ye=()=>{const{close:l}=h("editNodeName");return e.jsx(q,{id:"editNodeName",kind:"regular",onClose:l,preventOutsideClose:!0,children:e.jsx(ie,{})})};export{ye as EditNodeNameModal};
