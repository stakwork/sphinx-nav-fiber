import{s as c,a as t,F as i,j as e,a1 as j,r as l,u as C,B as w,bu as S,bw as R,aZ as D}from"./index-9f953937.js";import{g as I,e as T}from"./index-0145b65d.js";import{D as z}from"./DeleteNodeIcon-80104840.js";import{S as E}from"./Skeleton-32b71f48.js";import{C as L}from"./ClipLoader-e02cb2f5.js";const M=({nodeName:p})=>e.jsx(i,{children:e.jsxs(i,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(G,{children:e.jsx(z,{})}),e.jsxs(A,{children:["Are you sure you want to delete ",p||"this item","?"]})]})}),A=c(i)`
  color: ${t.white};
  font-family: 'Barlow';
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  padding: 0 20px;
  width: 100%;
  word-wrap: break-word;
`,G=c(i)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,W=()=>{const{close:p}=j("removeNode"),{close:h}=j("editNodeName"),[x,d]=l.useState(!1),{navigateToNode:g}=I(),[v]=C(n=>[n.removeNode]),[N,y]=l.useState(!1),[r,b]=l.useState(),[a,k]=l.useState(),o=T(),m=()=>{p()};l.useEffect(()=>{(async()=>{if(o){y(!0);try{if(o.type==="topic"){const{data:s}=await S({search:o==null?void 0:o.name}),u=s.find(f=>f.name===o.name);k(u)}else b(o)}catch(s){console.error(s)}finally{y(!1)}}})()},[o]);const B=async()=>{d(!0);try{g(null),m(),h()}catch(n){console.warn(n)}finally{d(!1)}},$=async()=>{let n="";const s=r||a;if(!s)return;s!=null&&s.ref_id&&(n=s.ref_id),d(!0);const u=o==null?void 0:o.ref_id;try{await R(n),v(u),g(null),m(),h()}catch(f){console.warn(f)}finally{d(!1)}};return e.jsxs(_,{children:[e.jsx(M,{nodeName:(r==null?void 0:r.name)||(a==null?void 0:a.name)||""}),N?e.jsx(E,{}):e.jsxs(i,{direction:"row",mt:34,children:[e.jsx(F,{color:"secondary",onClick:m,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(H,{color:"secondary",disabled:x||!r&&!a,onClick:r||a?$:B,size:"large",style:{flex:1},variant:"contained",children:["Delete",x&&e.jsx(O,{children:e.jsx(L,{color:t.lightGray,size:12})})]})]})]})},_=c(i)`
  padding: 4px 12px 16px;
`,F=c(w)`
  && {
    background: ${t.white};
    color: ${t.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${t.white};
      color: ${t.BG2};
    }
  }
`,H=c(w)`
  && {
    color: ${t.white};
    background-color: ${t.primaryRed};

    &:hover,
    &:active,
    &:focus {
      color: ${t.white};
      background-color: ${t.primaryRed};
    }
  }
`,O=c.span`
  margin-top: 2px;
`,Q=()=>e.jsx(D,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(W,{})});export{Q as RemoveNodeModal};
