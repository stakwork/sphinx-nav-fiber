import{Y as i,a0 as t,aW as a,j as o,aQ as n,Z as c,d as p}from"./index-3a9a8ecb.js";import{bY as s,cG as d,cH as u}from"./index-28893972.js";const T=async()=>{try{const r=await p.topup();if(!r)throw new Error("Topup failed");if(r.budget<5)throw new Error("You set a budget of less than 5 sats");s(o.jsx(e,{message:`You set a budget of ${r.budget} sats`}),{icon:!1,position:s.POSITION.BOTTOM_CENTER,type:"success"})}catch(r){r instanceof Error&&s(o.jsx(e,{message:r.message}),{icon:!1,position:s.POSITION.BOTTOM_CENTER,type:"error"})}},e=({message:r})=>r===n?o.jsxs("div",{children:[r,o.jsx(l,{onClick:T,type:"button",children:o.jsx(c,{color:"white",kind:"medium",children:"Topup"})})]}):o.jsx("div",{children:r}),E=r=>{s(o.jsx(e,{message:r}),{icon:r===a?o.jsx(d,{color:t.primaryGreen}):o.jsx(u,{color:t.primaryRed}),position:s.POSITION.BOTTOM_CENTER,type:r===a?"success":"error"})},l=i.button`
  background: ${t.gray200};
  border: 1px solid ${t.white};
  border-radius: 2px;
  margin: 10px;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${t.gray300};
  }
`;export{e as T,E as n};
