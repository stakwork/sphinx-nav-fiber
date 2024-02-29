import{Y as n,a0 as t,aW as a,j as o,aQ as c,Z as p,d}from"./index-95e8eb4a.js";import{bZ as s,cT as u,cU as T}from"./index-5aab2cbe.js";const l=async()=>{try{const r=await d.topup();if(!r)throw new Error("Topup failed");if(r.budget<5)throw new Error("You set a budget of less than 5 sats");s(o.jsx(e,{message:`You set a budget of ${r.budget} sats`}),{icon:!1,position:s.POSITION.BOTTOM_CENTER,type:"success"})}catch(r){r instanceof Error&&s(o.jsx(e,{message:r.message}),{icon:!1,position:s.POSITION.BOTTOM_CENTER,type:"error"})}},e=({message:r})=>r===c?o.jsxs("div",{children:[r,o.jsx(x,{onClick:l,type:"button",children:o.jsx(p,{color:"white",kind:"medium",children:"Topup"})})]}):o.jsx("div",{children:r}),f=(r,i)=>{s(o.jsx(e,{message:r}),{icon:r===a?o.jsx(u,{color:t.primaryGreen}):o.jsx(T,{color:t.primaryRed}),position:s.POSITION.BOTTOM_CENTER,type:i||r===a?"success":"error"})},x=n.button`
  background: ${t.gray200};
  border: 1px solid ${t.white};
  border-radius: 2px;
  margin: 10px;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${t.gray300};
  }
`;export{e as T,f as n};
