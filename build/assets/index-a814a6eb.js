import{p as i,j as e,F as s,aM as g,G as n,q as a,U as S,r as m,ab as j}from"./index-792bebcd.js";import{B as w,q as y,F as k}from"./index-3e505185.js";import{B as F}from"./index-45d1de92.js";import{S as v}from"./index-ec7c5316.js";import{T as B}from"./index-50b342a8.js";import{S as T}from"./SucessFeedBackIcon-be1d4edb.js";import"./index.esm-485a5b7e.js";const E=({allowNextStep:r})=>e.jsxs(s,{p:12,children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:25,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(M,{children:"Feedback"})})}),e.jsx(s,{mb:30,children:e.jsx(B,{id:"feedback-message",isTextArea:!0,maxLength:500,name:"message",placeholder:"Leave your feedback here ...",rules:g})}),e.jsx(s,{children:e.jsx(w,{color:"secondary","data-testid":"submit-feedback-btn",disabled:!r,size:"large",type:"submit",variant:"contained",children:"Submit"})})]}),M=i(n)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z=()=>e.jsxs(s,{align:"center",direction:"column",justify:"center",p:40,children:[e.jsx(C,{children:e.jsx(T,{})}),e.jsx($,{children:"We've Got Your Feedback"}),e.jsx(q,{children:"Thank you for sharing your thoughts with us! We value your input."})]}),C=i.div`
  margin-bottom: 20px;
  width: 50px;
  height: 50px;

  svg {
    width: 100%;
    height: 100%;
    color: ${a.white};
    fill: none;
  }

  circle {
    color: ${a.SUCESS};
  }
`,$=i(n)`
  font-size: 22px;
  font-weight: 700;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 10px;
`,q=i(n)`
  font-size: 16px;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${a.GRAY6};
  padding-top: 10px;
`,G=async r=>{try{const t=await j.post("/prediction/feedback",JSON.stringify(r));if(t.error){const{message:o}=t.error;throw new Error(o)}}catch(t){throw new Error(t.message||"Error submitting feedback")}},O=()=>{const{close:r,visible:t}=S("feedback"),o=y({mode:"onChange"}),{watch:u,reset:c}=o,[x,d]=m.useState(!1);m.useEffect(()=>()=>{d(!1),c()},[t,c]);const l=u("message"),h=!!l&&l.trim().length>0,f=o.handleSubmit(async p=>{try{await G(p),v("Feedback Submitted"),d(!0)}catch(b){console.error(b.message)}});return e.jsx(F,{id:"feedback",kind:"small",onClose:r,preventOutsideClose:!0,children:e.jsx(k,{...o,children:e.jsx("form",{id:"feedback-form",onSubmit:f,children:x?e.jsx(z,{}):e.jsx(E,{allowNextStep:h})})})})};export{O as UserFeedBackModal};
