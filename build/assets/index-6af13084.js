import{t as a,j as e,F as s,aA as g,T as n,v as i,r as m,Z as j}from"./index-0d0410ed.js";import{B as S,b5 as w,u as y,$ as k,a0 as v}from"./index-e8fd92b3.js";import{B as F}from"./index-b4e6b364.js";import{S as B}from"./index-47cc173b.js";import{T}from"./index-2851a497.js";import"./index.esm-b5f55779.js";const E=({allowNextStep:r})=>e.jsxs(s,{p:12,children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:25,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx($,{children:"Feedback"})})}),e.jsx(s,{mb:30,children:e.jsx(T,{id:"feedback-message",isTextArea:!0,maxLength:500,name:"message",placeholder:"Leave your feedback here ...",rules:g})}),e.jsx(s,{children:e.jsx(S,{color:"secondary","data-testid":"submit-feedback-btn",disabled:!r,size:"large",type:"submit",variant:"contained",children:"Submit"})})]}),$=a(n)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z=()=>e.jsxs(s,{align:"center",direction:"column",justify:"center",p:40,children:[e.jsx(C,{children:e.jsx(w,{})}),e.jsx(M,{children:"We've Got Your Feedback"}),e.jsx(A,{children:"Thank you for sharing your thoughts with us! We value your input."})]}),C=a.div`
  margin-bottom: 20px;
  width: 50px;
  height: 50px;

  svg {
    width: 100%;
    height: 100%;
    color: ${i.white};
    fill: none;
  }

  circle {
    color: ${i.SUCESS};
  }
`,M=a(n)`
  font-size: 22px;
  font-weight: 700;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 10px;
`,A=a(n)`
  font-size: 16px;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${i.GRAY6};
  padding-top: 10px;
`,I=async r=>{try{const t=await j.post("/prediction/feedback",JSON.stringify(r));if(t.error){const{message:o}=t.error;throw new Error(o)}}catch(t){throw new Error(t.message||"Error submitting feedback")}},U=()=>{const{close:r,visible:t}=y("feedback"),o=k({mode:"onChange"}),{watch:u,reset:c}=o,[x,d]=m.useState(!1);m.useEffect(()=>()=>{d(!1),c()},[t,c]);const l=u("message"),h=!!l&&l.trim().length>0,f=o.handleSubmit(async p=>{try{await I(p),B("Feedback Submitted"),d(!0)}catch(b){console.error(b.message)}});return e.jsx(F,{id:"feedback",kind:"small",onClose:r,preventOutsideClose:!0,children:e.jsx(v,{...o,children:e.jsx("form",{id:"feedback-form",onSubmit:f,children:x?e.jsx(z,{}):e.jsx(E,{allowNextStep:h})})})})};export{U as UserFeedBackModal};
