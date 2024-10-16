import{p as i,q as t,F as c,j as e,Q as j,r as l,t as $,x as C,A as R,ba as D,bb as I}from"./index-f9bfb679.js";import{B as z}from"./index-cb823dcc.js";import{D as E}from"./DeleteNodeIcon-1b5b45f5.js";import{S as L}from"./Skeleton-e2ba3a0e.js";import{C as T}from"./ClipLoader-5194ea40.js";import{B as w}from"./index-7d55c360.js";const A=({nodeName:p})=>e.jsx(c,{children:e.jsxs(c,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(M,{children:e.jsx(E,{})}),e.jsxs(G,{children:["Are you sure you want to delete ",p||"this item","?"]})]})}),G=i(c)`
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
`,M=i(c)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,W=()=>{const{close:p}=j("removeNode"),{close:h}=j("editNodeName"),[x,d]=l.useState(!1),[g]=$(s=>[s.setSelectedNode]),[v]=C(s=>[s.removeNode]),[b,y]=l.useState(!1),[n,N]=l.useState(),[a,S]=l.useState(),o=R(),m=()=>{p()};l.useEffect(()=>{(async()=>{if(o){y(!0);try{if(o.type==="topic"){const{data:r}=await D({search:o==null?void 0:o.name}),f=r.find(u=>u.name===o.name);S(f)}else N(o)}catch(r){console.log(r)}finally{y(!1)}}})()},[o]);const B=async()=>{d(!0);try{g(null),m(),h()}catch(s){console.warn(s)}finally{d(!1)}},k=async()=>{let s="";const r=n||a;if(!r)return;r!=null&&r.ref_id&&(s=r.ref_id),d(!0);const f=o==null?void 0:o.ref_id;try{await I(s),v(f),g(null),m(),h()}catch(u){console.warn(u)}finally{d(!1)}};return e.jsxs(_,{children:[e.jsx(A,{nodeName:(n==null?void 0:n.name)||(a==null?void 0:a.name)||""}),b?e.jsx(L,{}):e.jsxs(c,{direction:"row",mt:34,children:[e.jsx(F,{color:"secondary",onClick:m,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(q,{color:"secondary",disabled:x||!n&&!a,onClick:n||a?k:B,size:"large",style:{flex:1},variant:"contained",children:["Delete",x&&e.jsx(H,{children:e.jsx(T,{color:t.lightGray,size:12})})]})]})]})},_=i(c)`
  padding: 4px 12px 16px;
`,F=i(w)`
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
`,q=i(w)`
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
`,H=i.span`
  margin-top: 2px;
`,V=()=>e.jsx(z,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(W,{})});export{V as RemoveNodeModal};
