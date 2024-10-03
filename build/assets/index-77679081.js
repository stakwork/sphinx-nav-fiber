import{ab as w,p as y,E as h,F as r,j as e,aW as S,r as C,U as g,A as T}from"./index-a2fee79d.js";import{p as E,B as x,q as b,F as k}from"./index-57446bb9.js";import{B as F}from"./index-5e0c95ad.js";import{S as _}from"./index-45a55236.js";import{A as D}from"./index-c12b6999.js";import{T as V}from"./index-50af411d.js";import"./index.esm-5cf1d22e.js";import"./Stack-622941f0.js";import"./createSvgIcon-dc3a6e29.js";import"./TextareaAutosize-8a0b55f0.js";const z=async o=>await w.post("/bounty",JSON.stringify(o)),j=/^[0-9]+$/,v=o=>{const n=o.trim();return!!(n&&j.test(n))},A=({errMessage:o,handleClose:n})=>{const{setValue:i,watch:t}=E(),a=t("budget",""),l=t("nodeType",""),c=s=>{const p=(s==null?void 0:s.label)||"SecondBrain";i("nodeType",p,{shouldValidate:!0})},d=[{label:"SecondBrain",value:"SecondBrain"}],u=v(a)&&!!l,m=s=>{s.key===" "&&s.preventDefault()};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(M,{children:"Create Bounty"})}),e.jsxs(r,{mb:20,children:[e.jsx(f,{children:"Select Workspace"}),e.jsx(D,{autoFocus:!0,onSelect:c,options:d})]}),e.jsxs(r,{mb:20,children:[e.jsx(f,{children:"Set Budget"}),e.jsx(V,{id:"budget",name:"budget",onKeyDown:m,placeholder:"Enter budget",rules:{...S,pattern:{value:j,message:"Please enter a valid number"}},value:a})]}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(x,{color:"secondary",onClick:()=>n(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(x,{color:"secondary",disabled:!u,size:"large",type:"submit",variant:"contained",children:"Confirm"})})]}),o&&e.jsx(K,{children:o})]})},f=y(h)`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,M=y(h)`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,K=y(r)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`,N=()=>{const[o,n]=C.useState(""),{close:i}=g("createBounty"),t=T(),a=b({mode:"onChange"}),{handleSubmit:l,setValue:c}=a,d=()=>{c("budget",""),c("nodeType",""),i()},u=async m=>{const{budget:s}=m,p={type:"code_generation",amount:Number(s),workspace_uuid:"ck9drb84nncjnaefo090",jwt_token:"abced-12345",ref_id:t==null?void 0:t.ref_id,node_data:(t==null?void 0:t.properties)||{}};try{await z(p),_("Bounty Created")}catch(B){n(B)}finally{c("budget",""),c("nodeType",""),d()}};return e.jsx(k,{...a,children:e.jsx("form",{id:"create-bounty-form",onSubmit:l(u),children:e.jsx(A,{errMessage:o,handleClose:d})})})},$=()=>{const{close:o}=g("createBounty"),n=b({mode:"onChange"}),{setValue:i}=n,t=()=>{i("budget",""),i("nodeType",""),o()},a="small";return e.jsx(F,{id:"createBounty",kind:a,onClose:t,preventOutsideClose:!0,children:e.jsx(N,{})})};export{$ as CreateBountyModal};
