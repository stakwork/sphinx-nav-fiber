import{j as e,s as d,c as o,F as c,r as l}from"./index-725cd71c.js";import{B as M}from"./index-c7317d75.js";import{u as R,a as E,B as v,j as b,ap as $,ah as y}from"./react-toastify.esm-2b45af49.js";import{T as D}from"./toastMessage-e30a9a05.js";import{u as j}from"./index-c3e60fc6.js";import{S as I}from"./Skeleton-5cdaafa2.js";import{C as A}from"./ClipLoader-0a48de47.js";import"./index.esm-665ada5a.js";const z=n=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 60 52",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12.849 16.2461L31.5592 5.44376L50.2694 16.2461V37.8508L31.5592 48.6531L12.849 37.8508V16.2461Z",stroke:"#6B7A8D",fill:"currentColor","stroke-width":"2"}),e.jsx("path",{d:"M50.7383 16.0509L31.559 27.047M31.559 27.047L12.3798 16.0509M31.559 27.047L31.559 49.2949",stroke:"#6B7A8D","stroke-width":"2"}),e.jsx("path",{d:"M7.44052 9.03136C5.80715 8.08833 3.71857 8.64797 2.77554 10.2813C1.83251 11.9147 2.39215 14.0033 4.02552 14.9463L52.5595 42.9674C54.1929 43.9104 56.2814 43.3508 57.2245 41.7174L55.4924 40.7174L57.2245 41.7174C58.1675 40.0841 57.6079 37.9955 55.9745 37.0525L7.44052 9.03136Z",fill:"currentColor",stroke:"#23252F","stroke-width":"4","stroke-linecap":"round"})]}),O=({nodeName:n})=>e.jsx(c,{children:e.jsxs(c,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(F,{children:e.jsx(z,{})}),e.jsxs(_,{children:["Are you sure you want to delete ",n||"this item","?"]})]})}),_=d(c)`
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
`,F=d(c)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,u=(n,p)=>{y(e.jsx(D,{message:n}),{icon:!1,position:y.POSITION.BOTTOM_CENTER,type:p})},G=()=>{const{close:n}=j("removeNode"),{close:p}=j("editNodeName"),[x,m]=l.useState(!1),[k,g]=R(t=>[t.removeNode,t.setSelectedNode]),[L,w]=l.useState(!1),[a,N]=l.useState(),[i,B]=l.useState(),r=E(),h=()=>{n()};l.useEffect(()=>{(async()=>{if(r){w(!0);try{if(r.type==="topic"){const{data:s}=await b({search:r==null?void 0:r.name}),f=s.find(T=>T.topic===r.name);B(f)}else N(r)}catch(s){console.log(s)}finally{w(!1)}}})()},[r]);const C=async()=>{m(!0);try{u("Topic node removal coming soon","info"),g(null),h(),p()}catch(t){console.warn(t)}finally{m(!1)}},S=async()=>{let t="";const s=a||i;if(s){s!=null&&s.ref_id&&(t=s.ref_id),m(!0);try{await $(t),k(t),g(null),u("Removed Node","success"),h(),p()}catch(f){console.log(f),u("Removed failed, try later","error"),console.warn(f)}finally{m(!1)}}};return e.jsxs(P,{children:[e.jsx(O,{nodeName:(a==null?void 0:a.name)||(i==null?void 0:i.topic)||""}),L?e.jsx(I,{}):e.jsxs(c,{direction:"row",mt:34,children:[e.jsx(V,{color:"secondary",onClick:h,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(W,{color:"secondary",disabled:x||!a&&!i,onClick:a||i?S:C,size:"large",style:{flex:1},variant:"contained",children:["Delete",x&&e.jsx(A,{color:o.BLUE_PRESS_STATE,size:10})]})]})]})},P=d(c)`
  padding: 4px 12px 16px;
`,V=d(v)`
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
`,W=d(v)`
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
`,Y=()=>e.jsx(M,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(G,{})});export{Y as RemoveNodeModal};
