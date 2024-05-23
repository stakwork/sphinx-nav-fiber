import{j as e,f as l,h as t,F as c,B as y,r as i,i as N,a4 as b,b4 as M,b5 as $}from"./index-b17e6e7f.js";import{B as E}from"./index-a41ce7c3.js";import{S as R}from"./Skeleton-f751c368.js";import{C as D,B as j}from"./react-toastify.esm-ac6bd257.js";const T=d=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 60 52",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12.849 16.2461L31.5592 5.44376L50.2694 16.2461V37.8508L31.5592 48.6531L12.849 37.8508V16.2461Z",stroke:"#6B7A8D",fill:"currentColor","stroke-width":"2"}),e.jsx("path",{d:"M50.7383 16.0509L31.559 27.047M31.559 27.047L12.3798 16.0509M31.559 27.047L31.559 49.2949",stroke:"#6B7A8D","stroke-width":"2"}),e.jsx("path",{d:"M7.44052 9.03136C5.80715 8.08833 3.71857 8.64797 2.77554 10.2813C1.83251 11.9147 2.39215 14.0033 4.02552 14.9463L52.5595 42.9674C54.1929 43.9104 56.2814 43.3508 57.2245 41.7174L55.4924 40.7174L57.2245 41.7174C58.1675 40.0841 57.6079 37.9955 55.9745 37.0525L7.44052 9.03136Z",fill:"currentColor",stroke:"#23252F","stroke-width":"4","stroke-linecap":"round"})]}),A=({nodeName:d})=>e.jsx(c,{children:e.jsxs(c,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(z,{children:e.jsx(T,{})}),e.jsxs(I,{children:["Are you sure you want to delete ",d||"this item","?"]})]})}),I=l(c)`
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
`,z=l(c)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,_=()=>{const{close:d}=y("removeNode"),{close:m}=y("editNodeName"),[x,h]=i.useState(!1),[v,g]=N(r=>[r.removeNode,r.setSelectedNode]),[k,w]=i.useState(!1),[n,L]=i.useState(),[a,B]=i.useState(),o=b(),f=()=>{d()};i.useEffect(()=>{(async()=>{if(o){w(!0);try{if(o.type==="topic"){const{data:s}=await M({search:o==null?void 0:o.name}),u=s.find(p=>p.name===o.name);B(u)}else L(o)}catch(s){console.log(s)}finally{w(!1)}}})()},[o]);const C=async()=>{h(!0);try{g(null),f(),m()}catch(r){console.warn(r)}finally{h(!1)}},S=async()=>{let r="";const s=n||a;if(!s)return;s!=null&&s.ref_id&&(r=s.ref_id),h(!0);const u=o==null?void 0:o.ref_id;try{await $(r),v(u),g(null),f(),m()}catch(p){console.log(p),console.warn(p)}finally{h(!1)}};return e.jsxs(F,{children:[e.jsx(A,{nodeName:(n==null?void 0:n.name)||(a==null?void 0:a.name)||""}),k?e.jsx(R,{}):e.jsxs(c,{direction:"row",mt:34,children:[e.jsx(G,{color:"secondary",onClick:f,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(V,{color:"secondary",disabled:x||!n&&!a,onClick:n||a?S:C,size:"large",style:{flex:1},variant:"contained",children:["Delete",x&&e.jsx(D,{color:t.BLUE_PRESS_STATE,size:10})]})]})]})},F=l(c)`
  padding: 4px 12px 16px;
`,G=l(j)`
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
`,V=l(j)`
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
`,P=()=>e.jsx(E,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(_,{})});export{P as RemoveNodeModal};
