import{Y as i,a0 as t,aX as a,j as o,aR as n,Z as c,d as p}from"./index-eaef4030.js";import{c6 as s,cy as d,cz as u}from"./index-0b92b853.js";const T=async()=>{try{const r=await p.topup();if(!r)throw new Error("Topup failed");if(r.budget<5)throw new Error("You set a budget of less than 5 sats");s(o.jsx(e,{message:`You set a budget of ${r.budget} sats`}),{icon:!1,position:s.POSITION.BOTTOM_CENTER,type:"success"})}catch(r){r instanceof Error&&s(o.jsx(e,{message:r.message}),{icon:!1,position:s.POSITION.BOTTOM_CENTER,type:"error"})}},e=({message:r})=>r===n?o.jsxs("div",{children:[r,o.jsx(l,{onClick:T,type:"button",children:o.jsx(c,{color:"white",kind:"medium",children:"Topup"})})]}):o.jsx("div",{children:r}),E=r=>{s(o.jsx(e,{message:r}),{icon:r===a?o.jsx(d,{color:t.primaryGreen}):o.jsx(u,{color:t.primaryRed}),position:s.POSITION.BOTTOM_CENTER,type:r===a?"success":"error"})},l=i.button`
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
