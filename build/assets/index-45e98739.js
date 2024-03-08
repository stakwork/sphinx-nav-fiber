import{s as h,c as a,F as o,a8 as u,u as m,j as s}from"./index-b00f070c.js";import{u as d,D as g,e as c,E as j,H as v,J as G,K as y,N as F}from"./react-toastify.esm-33bde65a.js";const n={split:s.jsx(j,{}),force:s.jsx(v,{}),sphere:s.jsx(G,{}),earth:s.jsx(y,{}),v2:s.jsx(F,{})},I=()=>{const[i,l]=d(e=>[e.graphStyle,e.setGraphStyle]),[r,t]=u(e=>[e.v2Flag,e.setV2Flag]),[p]=m(e=>[e.isAdmin]),x=e=>{l(e),t(!1)};return s.jsxs(S,{direction:"column",children:[g.map(e=>s.jsx(o,{className:c("icon",{active:i===e&&!r}),onClick:()=>x(e),children:n[e]},e)),p&&s.jsx(o,{className:c("icon",{active:r}),onClick:()=>t(!0),children:n.v2})]})},S=h(o).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 6px 6px 6px 11px;
  background: ${a.BG1};
  border-radius: 200px;
  margin-top: 16px;
  .icon {
    color: ${a.GRAY6};
    font-size: 20px;
    cursor: pointer;

    &:hover {
      color: ${a.GRAY3};
    }

    &:active {
      color: ${a.white};
    }

    &.active {
      color: ${a.white};
    }
  }

  .icon + .icon {
    margin-left: 20px;
  }
`;export{I as G};
