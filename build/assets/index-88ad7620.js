import{a8 as L,bX as F,bY as B,bZ as O,s as m,g as p,T as M,F as d,B as D,j as t,am as V,r as f,a as P,aW as z,aX as N,a2 as R,l as W,n as A,aU as K}from"./index-645093c3.js";import{f as v}from"./index-944b9f3a.js";import{A as q}from"./index-1dee01e8.js";import{F as X}from"./FormControlLabel-d47f76d8.js";import{S as H}from"./Switch-8595f24b.js";import{C as J}from"./ClipLoader-f988cfbc.js";const G="https://community.sphinx.chat",Y=async e=>await L.post("/bounty",JSON.stringify(e)),Z=async e=>await F(`${G}/person/${e}`,{headers:{"Content-Type":"application/json"},method:"GET"}),Q=async e=>await F(`${G}/workspaces/user/${e}`,{headers:{"Content-Type":"application/json"},method:"GET"});async function ee(){try{const e=Math.floor(Date.now()/1e3),o=B.Buffer.from(e.toString(16),"hex"),r=B.Buffer.from(o).toString("base64"),c=await O.signMessage(r),s=te(c.signature),g=B.Buffer.concat([o,s],s.length+o.length);return oe(g)}catch(e){return console.log("error from signing more message: ",e),""}}function te(e){const o=e.replace(/_/g,"/").replace(/-/g,"+"),r=o.padEnd(o.length+(4-o.length%4)%4,"=");return B.Buffer.from(r,"base64")}function oe(e){let o="";const r=e.byteLength;for(let s=0;s<r;s+=1)o+=String.fromCharCode(e[s]);return btoa(o).replace(/\//g,"_").replace(/\+/g,"-").replace(/=+$/,"")}const I=/^[0-9]+$/,ne=e=>{const o=e.trim();return!!(o&&I.test(o))},se=({errMessage:e,handleClose:o,loading:r})=>{const{setValue:c,watch:s}=V(),[g,a]=f.useState([]),{pubKey:b}=P(),[y,x]=f.useState(!1),[i,S]=f.useState(!1);f.useEffect(()=>{async function n(){try{x(!0);const l=await Z(b);if(!l.id){a([{label:"SecondBrain",value:"SecondBrain"}]);return}const u=await Q(l.id);if(u.length>0){const $=[];for(let E=0;E<u.length;E+=1){const U=u[E];$.push({label:U.name,value:U.uuid})}a($)}}catch(l){console.error("Error from get user details: ",l)}finally{x(!1)}}n()},[b]);const w=s("budget",""),j=s("nodeType",""),k=n=>{const l=(n==null?void 0:n.label)||"SecondBrain",u=(n==null?void 0:n.value)||"ck9drb84nncjnaefo090";c("nodeType",l,{shouldValidate:!0}),c("workspaceUuid",u)},T=()=>{let n=!1;S(l=>{const u=!l;return n=u,u}),c("publicBounty",n)},C=ne(w)&&!!j,h=n=>{n.key===" "&&n.preventDefault()};return t.jsxs(d,{children:[t.jsx(d,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(re,{children:"Create Bounty"})}),t.jsxs(d,{mb:20,children:[t.jsx(_,{children:"Select Workspace"}),t.jsx(q,{autoFocus:!0,isLoading:y,onSelect:k,options:g})]}),t.jsxs(d,{mb:20,children:[t.jsx(_,{children:"Set Budget"}),t.jsx(z,{id:"budget",name:"budget",onKeyDown:h,placeholder:"Enter budget",rules:{...N,pattern:{value:I,message:"Please enter a valid number"}},value:w})]}),t.jsx(le,{control:t.jsx(ue,{checked:i,onChange:()=>T()}),label:t.jsx(_,{children:"Public"}),labelPlacement:"start"}),t.jsxs(d,{direction:"row",children:[t.jsx(d,{grow:1,children:t.jsx(ce,{color:"secondary",onClick:()=>o(),size:"large",variant:"contained",children:"Cancel"})}),t.jsx(d,{grow:1,ml:20,children:t.jsx(D,{color:"secondary",disabled:!C||r,size:"large",startIcon:r&&t.jsx(ie,{children:t.jsx(J,{color:p.lightGray,size:12})}),type:"submit",variant:"contained",children:"Confirm"})})]}),e&&t.jsx(ae,{children:e})]})},_=m(M)`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 20px;
`,re=m(M)`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,ae=m(d)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`,ie=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,ce=m(D)`
  && {
    background: ${p.white};
    color: ${p.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${p.TOPIC};
      color: ${p.BG2};
    }
  }
`,le=m(X)`
  justify-content: start;
  align-items: center;
  margin-left: 2px !important;
  margin-bottom: 8px;
`,ue=m(e=>t.jsx(H,{...e}))`
  &.MuiSwitch-root {
    width: 58px;
    height: 42px;
  }
  & .MuiSwitch-switchBase {
    margin-top: 4px;
    &.Mui-checked {
      color: ${p.white};
      & + .MuiSwitch-track {
        background-color: ${p.primaryBlueBorder};
        opacity: 1;
      }
    }
  }
  & .MuiSwitch-thumb {
    width: 16px;
    height: 16px;
  }
  & .MuiSwitch-track {
    border-radius: 10px;
    background-color: ${p.BG2};
    opacity: 1;
  }
`,be=({setBounty:e,cancelBounty:o,loading:r})=>{const[c,s]=f.useState(""),{close:g}=R("createBounty"),a=v(),{pubKey:b}=P(),y=W({mode:"onChange"}),{handleSubmit:x,setValue:i}=y,S=()=>{i("budget",""),i("nodeType",""),i("workspaceUuid",""),i("publicBounty",!1),o?o():g()},w=async j=>{const{budget:k,workspaceUuid:T,publicBounty:C}=j;try{const h=await ee(),n={type:"code_generation",amount:Number(k),workspace_uuid:T||"ck9drb84nncjnaefo090",ref_id:a==null?void 0:a.ref_id,node_data:(a==null?void 0:a.properties)||{},jwt_token:h,pub_key:b,public_bounty:C||!1};e?e(n):(await Y(n),K("Bounty Created"))}catch(h){s(h)}finally{i("budget",""),i("nodeType",""),i("workspaceUuid",""),i("publicBounty",!1),g()}};return t.jsx(A,{...y,children:t.jsx("form",{id:"create-bounty-form",onSubmit:x(w),children:t.jsx(se,{errMessage:c,handleClose:S,loading:r})})})};export{be as B};
