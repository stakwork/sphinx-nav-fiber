import{j as e,Q as i,S as t,U as c,ad as y,r as l,O as S,M as b,a1 as M,am as $,bG as D}from"./index-48fa2f4f.js";import{aF as R,B as j,aG as G}from"./index-c4aecd34.js";import{S as I}from"./Skeleton-0e83a3ed.js";const z=d=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 60 52",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12.849 16.2461L31.5592 5.44376L50.2694 16.2461V37.8508L31.5592 48.6531L12.849 37.8508V16.2461Z",stroke:"#6B7A8D",fill:"currentColor","stroke-width":"2"}),e.jsx("path",{d:"M50.7383 16.0509L31.559 27.047M31.559 27.047L12.3798 16.0509M31.559 27.047L31.559 49.2949",stroke:"#6B7A8D","stroke-width":"2"}),e.jsx("path",{d:"M7.44052 9.03136C5.80715 8.08833 3.71857 8.64797 2.77554 10.2813C1.83251 11.9147 2.39215 14.0033 4.02552 14.9463L52.5595 42.9674C54.1929 43.9104 56.2814 43.3508 57.2245 41.7174L55.4924 40.7174L57.2245 41.7174C58.1675 40.0841 57.6079 37.9955 55.9745 37.0525L7.44052 9.03136Z",fill:"currentColor",stroke:"#23252F","stroke-width":"4","stroke-linecap":"round"})]}),A=({nodeName:d})=>e.jsx(c,{children:e.jsxs(c,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(T,{children:e.jsx(z,{})}),e.jsxs(E,{children:["Are you sure you want to delete ",d||"this item","?"]})]})}),E=i(c)`
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
`,T=i(c)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,F=()=>{const{close:d}=y("removeNode"),{close:f}=y("editNodeName"),[m,p]=l.useState(!1),[g]=S(s=>[s.setSelectedNode]),[v]=b(s=>[s.removeNode]),[k,w]=l.useState(!1),[n,L]=l.useState(),[a,C]=l.useState(),o=M(),h=()=>{d()};l.useEffect(()=>{(async()=>{if(o){w(!0);try{if(o.type==="topic"){const{data:r}=await $({search:o==null?void 0:o.name}),u=r.find(x=>x.name===o.name);C(u)}else L(o)}catch(r){console.log(r)}finally{w(!1)}}})()},[o]);const B=async()=>{p(!0);try{g(null),h(),f()}catch(s){console.warn(s)}finally{p(!1)}},N=async()=>{let s="";const r=n||a;if(!r)return;r!=null&&r.ref_id&&(s=r.ref_id),p(!0);const u=o==null?void 0:o.ref_id;try{await D(s),v(u),g(null),h(),f()}catch(x){console.warn(x)}finally{p(!1)}};return e.jsxs(W,{children:[e.jsx(A,{nodeName:(n==null?void 0:n.name)||(a==null?void 0:a.name)||""}),k?e.jsx(I,{}):e.jsxs(c,{direction:"row",mt:34,children:[e.jsx(_,{color:"secondary",onClick:h,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(O,{color:"secondary",disabled:m||!n&&!a,onClick:n||a?N:B,size:"large",style:{flex:1},variant:"contained",children:["Delete",m&&e.jsx(V,{children:e.jsx(R,{color:t.lightGray,size:12})})]})]})]})},W=i(c)`
  padding: 4px 12px 16px;
`,_=i(j)`
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
`,O=i(j)`
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
`,V=i.span`
  margin-top: 2px;
`,U=()=>e.jsx(G,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(F,{})});export{U as RemoveNodeModal};
