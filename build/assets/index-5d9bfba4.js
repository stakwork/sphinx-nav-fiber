import{s as i,g as t,F as c,j as e,a6 as j,r as l,c as C,B as w,by as S,bA as R,b1 as D}from"./index-5f66bd69.js";import{g as I,e as T}from"./index-0dc2447a.js";import{D as z}from"./DeleteNodeIcon-7ea32c57.js";import{S as E}from"./Skeleton-a1841394.js";import{C as L}from"./ClipLoader-520c1933.js";const A=({nodeName:p})=>e.jsx(c,{children:e.jsxs(c,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(G,{children:e.jsx(z,{})}),e.jsxs(M,{children:["Are you sure you want to delete ",p||"this item","?"]})]})}),M=i(c)`
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
`,G=i(c)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,W=()=>{const{close:p}=j("removeNode"),{close:h}=j("editNodeName"),[x,d]=l.useState(!1),{navigateToNode:g}=I(),[v]=C(n=>[n.removeNode]),[N,y]=l.useState(!1),[r,b]=l.useState(),[a,k]=l.useState(),o=T(),m=()=>{p()};l.useEffect(()=>{(async()=>{if(o){y(!0);try{if(o.type==="topic"){const{data:s}=await S({search:o==null?void 0:o.name}),f=s.find(u=>u.name===o.name);k(f)}else b(o)}catch(s){console.error(s)}finally{y(!1)}}})()},[o]);const B=async()=>{d(!0);try{g(null),m(),h()}catch(n){console.warn(n)}finally{d(!1)}},$=async()=>{let n="";const s=r||a;if(!s)return;s!=null&&s.ref_id&&(n=s.ref_id),d(!0);const f=o==null?void 0:o.ref_id;try{await R(n),v(f),g(null),m(),h()}catch(u){console.warn(u)}finally{d(!1)}};return e.jsxs(_,{children:[e.jsx(A,{nodeName:(r==null?void 0:r.name)||(a==null?void 0:a.name)||""}),N?e.jsx(E,{}):e.jsxs(c,{direction:"row",mt:34,children:[e.jsx(F,{color:"secondary",onClick:m,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(H,{color:"secondary",disabled:x||!r&&!a,onClick:r||a?$:B,size:"large",style:{flex:1},variant:"contained",children:["Delete",x&&e.jsx(O,{children:e.jsx(L,{color:t.lightGray,size:12})})]})]})]})},_=i(c)`
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
`,U=()=>e.jsx(D,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(W,{})});export{U as RemoveNodeModal};
