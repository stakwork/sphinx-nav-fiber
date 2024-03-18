import{j as e,s as d,c as o,F as a,r as l}from"./index-912a006b.js";import{B as b}from"./index-a8906cb4.js";import{u as M,H as R,C as T,B as j,i as $,ay as E,ap as D}from"./react-toastify.esm-5fb76b52.js";import{T as A}from"./toastMessage-075abc72.js";import{u as y}from"./index-c8b55d33.js";import{S as z}from"./Skeleton-6fe7015a.js";import"./index.esm-b4803265.js";const I=n=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 60 52",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12.849 16.2461L31.5592 5.44376L50.2694 16.2461V37.8508L31.5592 48.6531L12.849 37.8508V16.2461Z",stroke:"#6B7A8D",fill:"currentColor","stroke-width":"2"}),e.jsx("path",{d:"M50.7383 16.0509L31.559 27.047M31.559 27.047L12.3798 16.0509M31.559 27.047L31.559 49.2949",stroke:"#6B7A8D","stroke-width":"2"}),e.jsx("path",{d:"M7.44052 9.03136C5.80715 8.08833 3.71857 8.64797 2.77554 10.2813C1.83251 11.9147 2.39215 14.0033 4.02552 14.9463L52.5595 42.9674C54.1929 43.9104 56.2814 43.3508 57.2245 41.7174L55.4924 40.7174L57.2245 41.7174C58.1675 40.0841 57.6079 37.9955 55.9745 37.0525L7.44052 9.03136Z",fill:"currentColor",stroke:"#23252F","stroke-width":"4","stroke-linecap":"round"})]}),_=({nodeName:n})=>e.jsx(a,{children:e.jsxs(a,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(G,{children:e.jsx(I,{})}),e.jsxs(F,{children:["Are you sure you want to delete ",n||"this item","?"]})]})}),F=d(a)`
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
`,G=d(a)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,u=(n,p)=>{D(e.jsx(A,{message:n}),{icon:!1,position:"bottom-center",type:p})},H=()=>{const{close:n}=y("removeNode"),{close:p}=y("editNodeName"),[x,m]=l.useState(!1),[v,g]=M(t=>[t.removeNode,t.setSelectedNode]),[k,w]=l.useState(!1),[i,L]=l.useState(),[c,B]=l.useState(),r=R(),h=()=>{n()};l.useEffect(()=>{(async()=>{if(r){w(!0);try{if(r.type==="topic"){const{data:s}=await $({search:r==null?void 0:r.name}),f=s.find(S=>S.topic===r.name);B(f)}else L(r)}catch(s){console.log(s)}finally{w(!1)}}})()},[r]);const C=async()=>{m(!0);try{u("Topic node removal coming soon","info"),g(null),h(),p()}catch(t){console.warn(t)}finally{m(!1)}},N=async()=>{let t="";const s=i||c;if(s){s!=null&&s.ref_id&&(t=s.ref_id),m(!0);try{await E(t),v(t),g(null),u("Removed Node","success"),h(),p()}catch(f){console.log(f),u("Removed failed, try later","error"),console.warn(f)}finally{m(!1)}}};return e.jsxs(V,{children:[e.jsx(_,{nodeName:(i==null?void 0:i.name)||(c==null?void 0:c.topic)||""}),k?e.jsx(z,{}):e.jsxs(a,{direction:"row",mt:34,children:[e.jsx(W,{color:"secondary",onClick:h,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(Z,{color:"secondary",disabled:x||!i&&!c,onClick:i||c?N:C,size:"large",style:{flex:1},variant:"contained",children:["Delete",x&&e.jsx(T,{color:o.BLUE_PRESS_STATE,size:10})]})]})]})},V=d(a)`
  padding: 4px 12px 16px;
`,W=d(j)`
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
`,Z=d(j)`
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
`,X=()=>e.jsx(b,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(H,{})});export{X as RemoveNodeModal};
