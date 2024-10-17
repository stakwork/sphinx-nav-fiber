import{p as a,j as e,F as s,aL as g,E as n,q as i,Q as S,r as m,aa as j}from"./index-22aa968f.js";import{B as w,q as y,F as k}from"./index-dfbd10cd.js";import{B as F}from"./index-ee912fe8.js";import{S as v}from"./index-74a99071.js";import{T as B}from"./index-2355906a.js";import{S as E}from"./SucessFeedBackIcon-ab0bf001.js";import"./index.esm-af7a8efa.js";const T=({allowNextStep:r})=>e.jsxs(s,{p:12,children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:25,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(z,{children:"Feedback"})})}),e.jsx(s,{mb:30,children:e.jsx(B,{id:"feedback-message",isTextArea:!0,maxLength:500,name:"message",placeholder:"Leave your feedback here ...",rules:g})}),e.jsx(s,{children:e.jsx(w,{color:"secondary","data-testid":"submit-feedback-btn",disabled:!r,size:"large",type:"submit",variant:"contained",children:"Submit"})})]}),z=a(n)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,C=()=>e.jsxs(s,{align:"center",direction:"column",justify:"center",p:40,children:[e.jsx(M,{children:e.jsx(E,{})}),e.jsx($,{children:"We've Got Your Feedback"}),e.jsx(q,{children:"Thank you for sharing your thoughts with us! We value your input."})]}),M=a.div`
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
`,$=a(n)`
  font-size: 22px;
  font-weight: 700;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 10px;
`,q=a(n)`
  font-size: 16px;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${i.GRAY6};
  padding-top: 10px;
`,I=async r=>{try{const t=await j.post("/prediction/feedback",JSON.stringify(r));if(t.error){const{message:o}=t.error;throw new Error(o)}}catch(t){throw new Error(t.message||"Error submitting feedback")}},U=()=>{const{close:r,visible:t}=S("feedback"),o=y({mode:"onChange"}),{watch:u,reset:c}=o,[x,d]=m.useState(!1);m.useEffect(()=>()=>{d(!1),c()},[t,c]);const l=u("message"),h=!!l&&l.trim().length>0,f=o.handleSubmit(async p=>{try{await I(p),v("Feedback Submitted"),d(!0)}catch(b){console.error(b.message)}});return e.jsx(F,{id:"feedback",kind:"small",onClose:r,preventOutsideClose:!0,children:e.jsx(k,{...o,children:e.jsx("form",{id:"feedback-form",onSubmit:f,children:x?e.jsx(C,{}):e.jsx(T,{allowNextStep:h})})})})};export{U as UserFeedBackModal};
