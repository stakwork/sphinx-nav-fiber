import{p as i,q as N,E as w,F as r,Q as h,N as U,A as F,r as c,j as e,aL as W,ba as q,b8 as P,x as V}from"./index-7a3b1cbd.js";import{B as k}from"./index-925ce5c6.js";import{T as G,q as H,F as Q,B as I}from"./index-df1dff91.js";import{E as Y}from"./EditNodeIcon-7888b110.js";import{T as J}from"./index-0efe2a07.js";import{S as K}from"./Skeleton-991d6787.js";import{C as X}from"./ClipLoader-d350ab88.js";import"./index.esm-30ca5682.js";const Z=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ee(l){return!!Z.test(l)}const te=()=>{const{open:l}=h("changeNodeType"),{close:x}=h("editNodeName"),{changeNodeTypeFeatureFlag:f}=U(a=>({changeNodeTypeFeatureFlag:a.changeNodeTypeFeatureFlag})),o=F(),j=o==null?void 0:o.node_type,[p,m]=c.useState({});c.useEffect(()=>{o!=null&&o.properties&&m(o.properties)},[o]);const y=()=>{x(),l()},g=(a,n)=>{m(b=>({...b,[a]:n}))};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(r,{align:"center",direction:"row",children:[e.jsx(oe,{children:"Edit Node"}),e.jsxs(ne,{children:[e.jsx(G,{type:j}),f&&e.jsx(se,{onClick:y,children:e.jsx(Y,{})})]})]})}),e.jsx(re,{children:Object.keys(p).map(a=>e.jsxs(r,{mb:18,children:[e.jsx(ae,{style:{marginBottom:8},children:a}),e.jsx(J,{id:`cy-${a}`,maxLength:50,name:`properties.${a}`,onChange:n=>g(a,n),placeholder:`Please Enter the ${a}`,rules:a==="name"?{...W}:{}})]},a))})]})},oe=i(w)`
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
`,ie=()=>{var S,v,C;const{close:l}=h("editNodeName"),x=H({mode:"onChange"}),{watch:f,setValue:o,reset:j,getValues:p}=x,[m,y]=c.useState(!1),[g,a]=c.useState(!1),[n,b]=c.useState(),t=F(),{open:B}=h("removeNode");c.useEffect(()=>(n?Object.keys(n).forEach(s=>{o(s,n[s])}):t&&Object.keys(t).forEach(s=>{o(s,t[s])}),()=>{j()}),[n,o,j,t]),c.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){a(!0);try{const{data:d}=await q({search:t==null?void 0:t.name}),A=d.find(O=>O.name===t.name);b(A)}catch(d){console.log(d)}finally{a(!1)}}})()},[t]);const D=f("imageInputType"),T=f("image_url");c.useEffect(()=>{o("imageInputType",ee(T))},[T,o]);const L=()=>{l()},u=n||t,R=async()=>{y(!0);const s=p();try{await P((u==null?void 0:u.ref_id)||"",{node_data:s});const{updateNode:d}=V.getState();d({...u,...s}),L()}catch(d){console.warn(d)}finally{y(!1)}},_=async()=>{B()},E=(v=(S=p())==null?void 0:S.name)==null?void 0:v.trim(),$=E&&(n==null?void 0:n.name.trim())!==E,z=p().image_url&&(t==null?void 0:t.image_url)!==((C=p())==null?void 0:C.image_url),M=m||g||!!T&&!D||!$&&!z;return e.jsx(ce,{children:e.jsxs(Q,{...x,children:[g?e.jsx(r,{my:24,children:e.jsx(K,{})}):e.jsx(te,{}),e.jsxs(r,{direction:"row",mt:18,children:[e.jsx(le,{color:"secondary",disabled:g||!u,onClick:_,size:"large",variant:"contained",children:"Delete"}),e.jsxs(de,{color:"secondary",disabled:M,onClick:R,size:"large",variant:"contained",children:["Save Changes",m&&e.jsx(pe,{children:e.jsx(X,{color:N.lightGray,size:12})})]})]})]})})},ce=i(r)`
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
`,Ne=()=>{const{close:l}=h("editNodeName");return e.jsx(k,{id:"editNodeName",kind:"large",onClose:l,preventOutsideClose:!0,children:e.jsx(ie,{})})};export{Ne as EditNodeNameModal};
