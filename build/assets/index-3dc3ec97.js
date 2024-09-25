import{aa as B,o as p,D as f,F as n,j as e,aW as w,r as S,Q as h,z as C}from"./index-5cb4ebc8.js";import{h as T,B as x,i as g,F}from"./index-72cdd01f.js";import{B as k}from"./index-3d09e601.js";import{S as z}from"./index-02b50aac.js";import{T as _}from"./index-f044788d.js";import{A as E}from"./index-63872321.js";import"./index.esm-3c53850e.js";import"./InfoIcon-fcbe919c.js";import"./Stack-19ef1f72.js";import"./useSlotProps-47008162.js";import"./Popover-80ebe034.js";import"./createSvgIcon-933bf452.js";import"./TextareaAutosize-33c0b2f3.js";const V=async o=>await B.post("/bounty",JSON.stringify(o)),v=({errMessage:o,handleClose:r})=>{const{setValue:a,watch:t}=T(),s=t("budget",""),l=t("nodeType",""),i=c=>{const m=(c==null?void 0:c.label)||"SecondBrain";a("nodeType",m,{shouldValidate:!0})},d=[{label:"SecondBrain",value:"SecondBrain"}],u=!!(s&&l);return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(M,{children:"Create Bounty"})}),e.jsxs(n,{mb:20,children:[e.jsx(y,{children:"Select Workspace"}),e.jsx(E,{autoFocus:!0,onSelect:i,options:d})]}),e.jsxs(n,{mb:20,children:[e.jsx(y,{children:"Set Budget"}),e.jsx(_,{id:"budget",name:"budget",placeholder:"Enter budget",rules:{...w,pattern:{value:/^[0-9]+$/,message:"Please enter a valid number"}},value:s})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(x,{color:"secondary",onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(x,{color:"secondary",disabled:!u,size:"large",type:"submit",variant:"contained",children:"Confirm"})})]}),o&&e.jsx(D,{children:o})]})},y=p(f)`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,M=p(f)`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,D=p(n)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`,A=()=>{const[o,r]=S.useState(""),{close:a}=h("createBounty"),t=C(),s=g({mode:"onChange"}),{handleSubmit:l,setValue:i}=s,d=()=>{i("budget",""),i("nodeType",""),a()},u=async c=>{const{budget:m}=c,b={type:"code_generation",amount:Number(m),workspace_uuid:"ck9drb84nncjnaefo090",jwt_token:"abced-12345",ref_id:t==null?void 0:t.ref_id,node_data:(t==null?void 0:t.properties)||{}};try{await V(b),z("Bounty Created")}catch(j){r(j)}finally{i("budget",""),i("nodeType",""),d()}};return e.jsx(F,{...s,children:e.jsx("form",{id:"create-bounty-form",onSubmit:l(u),children:e.jsx(v,{errMessage:o,handleClose:d})})})},L=()=>{const{close:o}=h("createBounty"),r=g({mode:"onChange"}),{setValue:a}=r,t=()=>{a("budget",""),a("nodeType",""),o()},s="small";return e.jsx(k,{id:"createBounty",kind:s,onClose:t,preventOutsideClose:!0,children:e.jsx(A,{})})};export{L as CreateBountyModal};
