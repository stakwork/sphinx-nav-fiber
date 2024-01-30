import{u as i,v as t,az as a,j as o,at as n,T as c,d as p}from"./index-bbe6c7e6.js";import{cf as s,cH as d,cI as u}from"./index-a64602ab.js";const T=async()=>{try{const r=await p.topup();if(!r)throw new Error("Topup failed");if(r.budget<5)throw new Error("You set a budget of less than 5 sats");s(o.jsx(e,{message:`You set a budget of ${r.budget} sats`}),{icon:!1,position:s.POSITION.BOTTOM_CENTER,type:"success"})}catch(r){r instanceof Error&&s(o.jsx(e,{message:r.message}),{icon:!1,position:s.POSITION.BOTTOM_CENTER,type:"error"})}},e=({message:r})=>r===n?o.jsxs("div",{children:[r,o.jsx(l,{onClick:T,type:"button",children:o.jsx(c,{color:"white",kind:"medium",children:"Topup"})})]}):o.jsx("div",{children:r}),E=r=>{s(o.jsx(e,{message:r}),{icon:r===a?o.jsx(d,{color:t.primaryGreen}):o.jsx(u,{color:t.primaryRed}),position:s.POSITION.BOTTOM_CENTER,type:r===a?"success":"error"})},l=i.button`
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
