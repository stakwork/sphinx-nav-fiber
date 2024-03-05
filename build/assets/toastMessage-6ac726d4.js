import{s as n,c as t,ad as i,j as o,aO as c,T as p,d}from"./index-2d5c8145.js";import{M as u,i as T}from"./index.esm-60620dce.js";import{ak as s}from"./react-toastify.esm-7361992a.js";const l=async()=>{try{const r=await d.topup();if(!r)throw new Error("Topup failed");if(r.budget<5)throw new Error("You set a budget of less than 5 sats");s(o.jsx(e,{message:`You set a budget of ${r.budget} sats`}),{icon:!1,position:s.POSITION.BOTTOM_CENTER,type:"success"})}catch(r){r instanceof Error&&s(o.jsx(e,{message:r.message}),{icon:!1,position:s.POSITION.BOTTOM_CENTER,type:"error"})}},e=({message:r})=>r===c?o.jsxs("div",{children:[r,o.jsx(x,{onClick:l,type:"button",children:o.jsx(p,{color:"white",kind:"medium",children:"Topup"})})]}):o.jsx("div",{children:r}),h=(r,a)=>{s(o.jsx(e,{message:r}),{icon:r===i?o.jsx(u,{color:t.primaryGreen}):o.jsx(T,{color:t.primaryRed}),position:s.POSITION.BOTTOM_CENTER,type:a||r===i?"success":"error"})},x=n.button`
  background: ${t.gray200};
  border: 1px solid ${t.white};
  border-radius: 2px;
  margin: 10px;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${t.gray300};
  }
`;export{e as T,h as n};
