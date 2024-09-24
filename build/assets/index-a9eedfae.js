import{a9 as S,o as p,T as h,F as n,j as e,aW as C,r as T,O as f,y as F}from"./index-4d468204.js";import{h as k,B as x,i as g,F as _}from"./index-866976ad.js";import{B as z}from"./index-f4b0a4bd.js";import{T as E}from"./index-62eaae02.js";import{A as V}from"./index-0c516da9.js";import"./index.esm-c44d3bf1.js";import"./InfoIcon-2dc4b884.js";import"./Stack-2a5ee51e.js";import"./useSlotProps-bd068323.js";import"./Popover-91f6a20d.js";import"./createSvgIcon-4daeca66.js";import"./TextareaAutosize-51573234.js";const v=async t=>await S.post("/bounty",JSON.stringify(t)),M=({errMessage:t,handleClose:r})=>{const{setValue:a,watch:o}=k(),s=o("budget",""),l=o("nodeType",""),i=c=>{const m=(c==null?void 0:c.label)||"SecondBrain";a("nodeType",m,{shouldValidate:!0})},d=[{label:"SecondBrain",value:"SecondBrain"}],u=!!(s&&l);return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(D,{children:"Create Bounty"})}),e.jsxs(n,{mb:20,children:[e.jsx(y,{children:"Select Workspace"}),e.jsx(V,{autoFocus:!0,onSelect:i,options:d})]}),e.jsxs(n,{mb:20,children:[e.jsx(y,{children:"Set Budget"}),e.jsx(E,{id:"budget",name:"budget",placeholder:"Enter budget",rules:{...C,pattern:{value:/^[0-9]+$/,message:"Please enter a valid number"}},value:s})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(x,{color:"secondary",onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(x,{color:"secondary",disabled:!u,size:"large",type:"submit",variant:"contained",children:"Confirm"})})]}),t&&e.jsx(N,{children:t})]})},y=p(h)`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,D=p(h)`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,N=p(n)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`,O=()=>{const[t,r]=T.useState(""),{close:a}=f("createBounty"),o=F(),s=g({mode:"onChange"}),{handleSubmit:l,setValue:i}=s,d=()=>{i("budget",""),i("nodeType",""),a()},u=async c=>{const{budget:m,nodeType:b}=c,j={name:b},B={type:"code_generation",amount:Number(m),workspace_uuid:"ck9drb84nncjnaefo090",jwt_token:null,ref_id:o==null?void 0:o.ref_id,node_data:j};try{await v(B)}catch(w){r(w)}finally{i("budget",""),i("nodeType",""),d()}};return e.jsx(_,{...s,children:e.jsx("form",{id:"create-bounty-form",onSubmit:l(u),children:e.jsx(M,{errMessage:t,handleClose:d})})})},Q=()=>{const{close:t}=f("createBounty"),r=g({mode:"onChange"}),{setValue:a}=r,o=()=>{a("budget",""),a("nodeType",""),t()},s="small";return e.jsx(z,{id:"createBounty",kind:s,onClose:o,preventOutsideClose:!0,children:e.jsx(O,{})})};export{Q as CreateBountyModal};
