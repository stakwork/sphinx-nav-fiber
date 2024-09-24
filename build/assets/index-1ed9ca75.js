import{a9 as B,o as p,T as h,F as n,j as e,aW as w,r as S,O as f,z as C}from"./index-83d55f33.js";import{h as T,B as x,i as g,F}from"./index-c3a89a83.js";import{B as k}from"./index-bce962ef.js";import{T as z}from"./index-5b3a7da6.js";import{A as _}from"./index-c2dc84fb.js";import"./index.esm-c515702c.js";import"./InfoIcon-842d52dc.js";import"./Stack-8a2d7dec.js";import"./useSlotProps-a98a182e.js";import"./Popover-43a72fce.js";import"./createSvgIcon-c4265c93.js";import"./TextareaAutosize-6f250eee.js";const E=async o=>await B.post("/bounty",JSON.stringify(o)),V=({errMessage:o,handleClose:r})=>{const{setValue:a,watch:t}=T(),s=t("budget",""),l=t("nodeType",""),i=c=>{const m=(c==null?void 0:c.label)||"SecondBrain";a("nodeType",m,{shouldValidate:!0})},d=[{label:"SecondBrain",value:"SecondBrain"}],u=!!(s&&l);return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(v,{children:"Create Bounty"})}),e.jsxs(n,{mb:20,children:[e.jsx(y,{children:"Select Workspace"}),e.jsx(_,{autoFocus:!0,onSelect:i,options:d})]}),e.jsxs(n,{mb:20,children:[e.jsx(y,{children:"Set Budget"}),e.jsx(z,{id:"budget",name:"budget",placeholder:"Enter budget",rules:{...w,pattern:{value:/^[0-9]+$/,message:"Please enter a valid number"}},value:s})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(x,{color:"secondary",onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(x,{color:"secondary",disabled:!u,size:"large",type:"submit",variant:"contained",children:"Confirm"})})]}),o&&e.jsx(M,{children:o})]})},y=p(h)`
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
