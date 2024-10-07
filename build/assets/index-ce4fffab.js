import{p as i,q as N,E as w,F as r,U as h,N as O,A as F,r as c,j as e,b0 as W,br as P,bp as V,x as k}from"./index-c26382fd.js";import{B as q}from"./index-ee0cdd24.js";import{T as G,z as H,F as Y,B as I}from"./index-e5d99902.js";import{E as J}from"./EditNodeIcon-c7de113f.js";import{T as K}from"./index-192d9e03.js";import{S as Q}from"./Skeleton-ddc99b14.js";import{C as X}from"./ClipLoader-c0585ed2.js";import"./index.esm-82e1df6f.js";const Z=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ee(l){return!!Z.test(l)}const te=()=>{const{open:l}=h("changeNodeType"),{close:x}=h("editNodeName"),{changeNodeTypeFeatureFlag:f}=O(a=>({changeNodeTypeFeatureFlag:a.changeNodeTypeFeatureFlag})),o=F(),j=o==null?void 0:o.node_type,[p,m]=c.useState({});c.useEffect(()=>{o!=null&&o.properties&&m(o.properties)},[o]);const y=()=>{x(),l()},g=(a,n)=>{m(b=>({...b,[a]:n}))};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(r,{align:"center",direction:"row",children:[e.jsx(oe,{children:"Edit Node"}),e.jsxs(ne,{children:[e.jsx(G,{type:j}),f&&e.jsx(se,{onClick:y,children:e.jsx(J,{})})]})]})}),e.jsx(re,{children:Object.keys(p).map(a=>e.jsxs(r,{mb:18,children:[e.jsx(ae,{style:{marginBottom:8},children:a}),e.jsx(K,{id:`cy-${a}`,maxLength:50,name:`properties.${a}`,onChange:n=>g(a,n),placeholder:`Please Enter the ${a}`,rules:a==="name"?{...W}:{}})]},a))})]})},oe=i(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ae=i(w)`
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
`,se=i(r)`
  align-items: center;
  cursor: pointer;
`,re=i(r)`
  display: flex;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 40px;
  width: calc(100% + 40px);
`,ie=()=>{var S,v,C;const{close:l}=h("editNodeName"),x=H({mode:"onChange"}),{watch:f,setValue:o,reset:j,getValues:p}=x,[m,y]=c.useState(!1),[g,a]=c.useState(!1),[n,b]=c.useState(),t=F(),{open:B}=h("removeNode");c.useEffect(()=>(n?Object.keys(n).forEach(s=>{o(s,n[s])}):t&&Object.keys(t).forEach(s=>{o(s,t[s])}),()=>{j()}),[n,o,j,t]),c.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){a(!0);try{const{data:d}=await P({search:t==null?void 0:t.name}),U=d.find(A=>A.name===t.name);b(U)}catch(d){console.log(d)}finally{a(!1)}}})()},[t]);const D=f("imageInputType"),T=f("image_url");c.useEffect(()=>{o("imageInputType",ee(T))},[T,o]);const L=()=>{l()},u=n||t,R=async()=>{y(!0);const s=p();try{await V((u==null?void 0:u.ref_id)||"",{node_data:s});const{updateNode:d}=k.getState();d({...u,...s}),L()}catch(d){console.warn(d)}finally{y(!1)}},_=async()=>{B()},E=(v=(S=p())==null?void 0:S.name)==null?void 0:v.trim(),$=E&&(n==null?void 0:n.name.trim())!==E,z=p().image_url&&(t==null?void 0:t.image_url)!==((C=p())==null?void 0:C.image_url),M=m||g||!!T&&!D||!$&&!z;return e.jsx(ce,{children:e.jsxs(Y,{...x,children:[g?e.jsx(r,{my:24,children:e.jsx(Q,{})}):e.jsx(te,{}),e.jsxs(r,{direction:"row",mt:18,children:[e.jsx(le,{color:"secondary",disabled:g||!u,onClick:_,size:"large",variant:"contained",children:"Delete"}),e.jsxs(de,{color:"secondary",disabled:M,onClick:R,size:"large",variant:"contained",children:["Save Changes",m&&e.jsx(pe,{children:e.jsx(X,{color:N.lightGray,size:12})})]})]})]})})},ce=i(r)`
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
`,de=i(I)`
  && {
    flex: 1;
  }
`,pe=i.span`
  margin-top: 3px;
`,Ne=()=>{const{close:l}=h("editNodeName");return e.jsx(q,{id:"editNodeName",kind:"large",onClose:l,preventOutsideClose:!0,children:e.jsx(ie,{})})};export{Ne as EditNodeNameModal};
