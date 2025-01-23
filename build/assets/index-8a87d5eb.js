import{s as i,a as t,F as c,j as e,e as j,r as l,u as C,B as w,bv as $,bx as R,a_ as I}from"./index-4e60c9e2.js";import{aC as z,f as D,l as E}from"./index-af5a3f81.js";import{S as L}from"./Skeleton-7af13a79.js";import{C as T}from"./ClipLoader-8590c2f1.js";const G=({nodeName:p})=>e.jsx(c,{children:e.jsxs(c,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(_,{children:e.jsx(z,{})}),e.jsxs(M,{children:["Are you sure you want to delete ",p||"this item","?"]})]})}),M=i(c)`
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
`,_=i(c)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,A=()=>{const{close:p}=j("removeNode"),{close:h}=j("editNodeName"),[x,d]=l.useState(!1),[g]=D(s=>[s.setSelectedNode]),[v]=C(s=>[s.removeNode]),[N,y]=l.useState(!1),[n,b]=l.useState(),[a,S]=l.useState(),o=E(),f=()=>{p()};l.useEffect(()=>{(async()=>{if(o){y(!0);try{if(o.type==="topic"){const{data:r}=await $({search:o==null?void 0:o.name}),u=r.find(m=>m.name===o.name);S(u)}else b(o)}catch(r){console.error(r)}finally{y(!1)}}})()},[o]);const k=async()=>{d(!0);try{g(null),f(),h()}catch(s){console.warn(s)}finally{d(!1)}},B=async()=>{let s="";const r=n||a;if(!r)return;r!=null&&r.ref_id&&(s=r.ref_id),d(!0);const u=o==null?void 0:o.ref_id;try{await R(s),v(u),g(null),f(),h()}catch(m){console.warn(m)}finally{d(!1)}};return e.jsxs(W,{children:[e.jsx(G,{nodeName:(n==null?void 0:n.name)||(a==null?void 0:a.name)||""}),N?e.jsx(L,{}):e.jsxs(c,{direction:"row",mt:34,children:[e.jsx(F,{color:"secondary",onClick:f,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(H,{color:"secondary",disabled:x||!n&&!a,onClick:n||a?B:k,size:"large",style:{flex:1},variant:"contained",children:["Delete",x&&e.jsx(O,{children:e.jsx(T,{color:t.lightGray,size:12})})]})]})]})},W=i(c)`
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
`,H=i(w)`
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
`,O=i.span`
  margin-top: 2px;
`,Q=()=>e.jsx(I,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(A,{})});export{Q as RemoveNodeModal};
