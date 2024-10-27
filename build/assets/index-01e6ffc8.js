import{t as i,v as t,F as c,j as e,r as l,q as k,a_ as C,a$ as R}from"./index-fee3c6d5.js";import{B as I}from"./index-4e2da516.js";import{a_ as z,u as j,f as D,e as E,B as w}from"./index-51abeec7.js";import{S as L}from"./Skeleton-2e6ae0a4.js";import{C as T}from"./ClipLoader-65d6202c.js";const _=({nodeName:p})=>e.jsx(c,{children:e.jsxs(c,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(M,{children:e.jsx(z,{})}),e.jsxs(G,{children:["Are you sure you want to delete ",p||"this item","?"]})]})}),G=i(c)`
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
`,A=()=>{const{close:p}=j("removeNode"),{close:h}=j("editNodeName"),[x,d]=l.useState(!1),[g]=D(s=>[s.setSelectedNode]),[v]=k(s=>[s.removeNode]),[N,y]=l.useState(!1),[r,S]=l.useState(),[a,B]=l.useState(),o=E(),f=()=>{p()};l.useEffect(()=>{(async()=>{if(o){y(!0);try{if(o.type==="topic"){const{data:n}=await C({search:o==null?void 0:o.name}),m=n.find(u=>u.name===o.name);B(m)}else S(o)}catch(n){console.log(n)}finally{y(!1)}}})()},[o]);const $=async()=>{d(!0);try{g(null),f(),h()}catch(s){console.warn(s)}finally{d(!1)}},b=async()=>{let s="";const n=r||a;if(!n)return;n!=null&&n.ref_id&&(s=n.ref_id),d(!0);const m=o==null?void 0:o.ref_id;try{await R(s),v(m),g(null),f(),h()}catch(u){console.warn(u)}finally{d(!1)}};return e.jsxs(W,{children:[e.jsx(_,{nodeName:(r==null?void 0:r.name)||(a==null?void 0:a.name)||""}),N?e.jsx(L,{}):e.jsxs(c,{direction:"row",mt:34,children:[e.jsx(F,{color:"secondary",onClick:f,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(q,{color:"secondary",disabled:x||!r&&!a,onClick:r||a?b:$,size:"large",style:{flex:1},variant:"contained",children:["Delete",x&&e.jsx(H,{children:e.jsx(T,{color:t.lightGray,size:12})})]})]})]})},W=i(c)`
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
`,U=()=>e.jsx(I,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(A,{})});export{U as RemoveNodeModal};
