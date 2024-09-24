import{a9 as B,o as p,T as h,F as n,j as e,aW as w,r as S,O as f,y as C}from"./index-44056107.js";import{h as T,B as x,i as g,F}from"./index-46ebf95b.js";import{B as k}from"./index-fd5555ed.js";import{T as _}from"./index-e6f2e950.js";import{A as z}from"./index-c02bee74.js";import"./index.esm-31d2893b.js";import"./InfoIcon-f1af9ba5.js";import"./Stack-aac595cd.js";import"./useSlotProps-0a379798.js";import"./Popover-b775c7d4.js";import"./createSvgIcon-4f741b2c.js";import"./TextareaAutosize-0327942e.js";const E=async o=>await B.post("/bounty",JSON.stringify(o)),V=({errMessage:o,handleClose:r})=>{const{setValue:a,watch:t}=T(),s=t("budget",""),l=t("nodeType",""),i=c=>{const m=(c==null?void 0:c.label)||"SecondBrain";a("nodeType",m,{shouldValidate:!0})},d=[{label:"SecondBrain",value:"SecondBrain"}],u=!!(s&&l);return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(v,{children:"Create Bounty"})}),e.jsxs(n,{mb:20,children:[e.jsx(y,{children:"Select Workspace"}),e.jsx(z,{autoFocus:!0,onSelect:i,options:d})]}),e.jsxs(n,{mb:20,children:[e.jsx(y,{children:"Set Budget"}),e.jsx(_,{id:"budget",name:"budget",placeholder:"Enter budget",rules:{...w,pattern:{value:/^[0-9]+$/,message:"Please enter a valid number"}},value:s})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(x,{color:"secondary",onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(x,{color:"secondary",disabled:!u,size:"large",type:"submit",variant:"contained",children:"Confirm"})})]}),o&&e.jsx(M,{children:o})]})},y=p(h)`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,v=p(h)`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,M=p(n)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`,O=()=>{const[o,r]=S.useState(""),{close:a}=f("createBounty"),t=C(),s=g({mode:"onChange"}),{handleSubmit:l,setValue:i}=s,d=()=>{i("budget",""),i("nodeType",""),a()},u=async c=>{const{budget:m}=c,b={type:"code_generation",amount:Number(m),workspace_uuid:"ck9drb84nncjnaefo090",jwt_token:"abced-12345",ref_id:t==null?void 0:t.ref_id,node_data:(t==null?void 0:t.properties)||{}};try{await E(b)}catch(j){r(j)}finally{i("budget",""),i("nodeType",""),d()}};return e.jsx(F,{...s,children:e.jsx("form",{id:"create-bounty-form",onSubmit:l(u),children:e.jsx(V,{errMessage:o,handleClose:d})})})},G=()=>{const{close:o}=f("createBounty"),r=g({mode:"onChange"}),{setValue:a}=r,t=()=>{a("budget",""),a("nodeType",""),o()},s="small";return e.jsx(k,{id:"createBounty",kind:s,onClose:t,preventOutsideClose:!0,children:e.jsx(O,{})})};export{G as CreateBountyModal};
