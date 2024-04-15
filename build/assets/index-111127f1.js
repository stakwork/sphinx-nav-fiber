import{j as e,f as l,h as o,F as c,r as i,i as S,a3 as b,z as M,bh as $}from"./index-b85f35cf.js";import{B as E}from"./index-0c223900.js";import{u as w}from"./index-b9c9b7e2.js";import{S as R}from"./Skeleton-bd55acf5.js";import{C as D,B as y}from"./react-toastify.esm-ce67a4f9.js";const T=d=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 60 52",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12.849 16.2461L31.5592 5.44376L50.2694 16.2461V37.8508L31.5592 48.6531L12.849 37.8508V16.2461Z",stroke:"#6B7A8D",fill:"currentColor","stroke-width":"2"}),e.jsx("path",{d:"M50.7383 16.0509L31.559 27.047M31.559 27.047L12.3798 16.0509M31.559 27.047L31.559 49.2949",stroke:"#6B7A8D","stroke-width":"2"}),e.jsx("path",{d:"M7.44052 9.03136C5.80715 8.08833 3.71857 8.64797 2.77554 10.2813C1.83251 11.9147 2.39215 14.0033 4.02552 14.9463L52.5595 42.9674C54.1929 43.9104 56.2814 43.3508 57.2245 41.7174L55.4924 40.7174L57.2245 41.7174C58.1675 40.0841 57.6079 37.9955 55.9745 37.0525L7.44052 9.03136Z",fill:"currentColor",stroke:"#23252F","stroke-width":"4","stroke-linecap":"round"})]}),z=({nodeName:d})=>e.jsx(c,{children:e.jsxs(c,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(I,{children:e.jsx(T,{})}),e.jsxs(A,{children:["Are you sure you want to delete ",d||"this item","?"]})]})}),A=l(c)`
  color: ${o.white};
  font-family: 'Barlow';
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  padding: 0 20px;
  width: 100%;
  word-wrap: break-word;
`,I=l(c)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,_=()=>{const{close:d}=w("removeNode"),{close:m}=w("editNodeName"),[u,h]=i.useState(!1),[j,x]=S(t=>[t.removeNode,t.setSelectedNode]),[v,g]=i.useState(!1),[n,k]=i.useState(),[a,L]=i.useState(),r=b(),f=()=>{d()};i.useEffect(()=>{(async()=>{if(r){g(!0);try{if(r.type==="topic"){const{data:s}=await M({search:r==null?void 0:r.name}),p=s.find(N=>N.name===r.name);L(p)}else k(r)}catch(s){console.log(s)}finally{g(!1)}}})()},[r]);const B=async()=>{h(!0);try{x(null),f(),m()}catch(t){console.warn(t)}finally{h(!1)}},C=async()=>{let t="";const s=n||a;if(s){s!=null&&s.ref_id&&(t=s.ref_id),h(!0);try{await $(t),j(t),x(null),f(),m()}catch(p){console.log(p),console.warn(p)}finally{h(!1)}}};return e.jsxs(F,{children:[e.jsx(z,{nodeName:(n==null?void 0:n.name)||(a==null?void 0:a.name)||""}),v?e.jsx(R,{}):e.jsxs(c,{direction:"row",mt:34,children:[e.jsx(G,{color:"secondary",onClick:f,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(V,{color:"secondary",disabled:u||!n&&!a,onClick:n||a?C:B,size:"large",style:{flex:1},variant:"contained",children:["Delete",u&&e.jsx(D,{color:o.BLUE_PRESS_STATE,size:10})]})]})]})},F=l(c)`
  padding: 4px 12px 16px;
`,G=l(y)`
  && {
    background: ${o.white};
    color: ${o.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${o.white};
      color: ${o.BG2};
    }
  }
`,V=l(y)`
  && {
    color: ${o.white};
    background-color: ${o.primaryRed};

    &:hover,
    &:active,
    &:focus {
      color: ${o.white};
      background-color: ${o.primaryRed};
    }
  }
`,U=()=>e.jsx(E,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(_,{})});export{U as RemoveNodeModal};
