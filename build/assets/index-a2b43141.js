import{s as n,c as r,F as s,j as e}from"./index-d235c36b.js";import{u as p,E as i,e as l,H as x,J as h,K as m,M as u,N as d}from"./react-toastify.esm-c1f13023.js";const j={split:e.jsx(x,{}),force:e.jsx(h,{}),sphere:e.jsx(m,{}),earth:e.jsx(u,{}),v2:e.jsx(d,{})},b=()=>{const[a,t]=p(o=>[o.graphStyle,o.setGraphStyle]),c=o=>{t(o)};return e.jsx(g,{direction:"column",children:i.map(o=>e.jsx(s,{className:l("icon",{active:a===o}),onClick:()=>c(o),children:j[o]},o))})},g=n(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 6px 6px 6px 11px;
  background: ${r.BG1};
  border-radius: 200px;
  margin-top: 16px;
  .icon {
    color: ${r.GRAY6};
    font-size: 20px;
    cursor: pointer;

    &:hover {
      color: ${r.GRAY3};
    }

    &:active {
      color: ${r.white};
    }

    &.active {
      color: ${r.white};
    }
  }

  .icon + .icon {
    margin-left: 20px;
  }
`;export{b as G};
