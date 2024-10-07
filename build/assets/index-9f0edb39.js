import{p as i,j as e,F as s,b0 as g,E as n,q as a,U as S,r as m,ah as j}from"./index-e12ed714.js";import{B as w,z as y,F as k}from"./index-5eef59ea.js";import{B as F}from"./index-7b044c82.js";import{S as v}from"./index-9e18a5e5.js";import{T as B}from"./index-9de01744.js";import{S as E}from"./SucessFeedBackIcon-007a5490.js";import"./index.esm-bfc5a010.js";const T=({allowNextStep:r})=>e.jsxs(s,{p:12,children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:25,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(z,{children:"Feedback"})})}),e.jsx(s,{mb:30,children:e.jsx(B,{id:"feedback-message",isTextArea:!0,maxLength:500,name:"message",placeholder:"Leave your feedback here ...",rules:g})}),e.jsx(s,{children:e.jsx(w,{color:"secondary","data-testid":"submit-feedback-btn",disabled:!r,size:"large",type:"submit",variant:"contained",children:"Submit"})})]}),z=i(n)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,C=()=>e.jsxs(s,{align:"center",direction:"column",justify:"center",p:40,children:[e.jsx(M,{children:e.jsx(E,{})}),e.jsx($,{children:"We've Got Your Feedback"}),e.jsx(I,{children:"Thank you for sharing your thoughts with us! We value your input."})]}),M=i.div`
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
`,I=i(n)`
  font-size: 16px;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${a.GRAY6};
  padding-top: 10px;
`,N=async r=>{try{const t=await j.post("/prediction/feedback",JSON.stringify(r));if(t.error){const{message:o}=t.error;throw new Error(o)}}catch(t){throw new Error(t.message||"Error submitting feedback")}},O=()=>{const{close:r,visible:t}=S("feedback"),o=y({mode:"onChange"}),{watch:h,reset:c}=o,[u,d]=m.useState(!1);m.useEffect(()=>()=>{d(!1),c()},[t,c]);const l=h("message"),x=!!l&&l.trim().length>0,f=o.handleSubmit(async p=>{try{await N(p),v("Feedback Submitted"),d(!0)}catch(b){console.error(b.message)}});return e.jsx(F,{id:"feedback",kind:"small",onClose:r,preventOutsideClose:!0,children:e.jsx(k,{...o,children:e.jsx("form",{id:"feedback-form",onSubmit:f,children:u?e.jsx(C,{}):e.jsx(T,{allowNextStep:x})})})})};export{O as UserFeedBackModal};
