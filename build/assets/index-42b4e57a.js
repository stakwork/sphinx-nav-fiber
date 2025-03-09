import{s as a,j as e,F as s,b4 as p,b5 as j,B as S,T as i,g as n,a6 as w,l as y,r as m,b2 as k,b7 as F,n as v,aj as B}from"./index-0bc9ae90.js";import{S as T}from"./SucessFeedBackIcon-06d2d64f.js";const E=({allowNextStep:r})=>e.jsxs(s,{p:12,children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:25,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(z,{children:"Feedback"})})}),e.jsx(s,{mb:30,children:e.jsx(p,{id:"feedback-message",isTextArea:!0,maxLength:500,name:"message",placeholder:"Leave your feedback here ...",rules:j})}),e.jsx(s,{children:e.jsx(S,{color:"secondary","data-testid":"submit-feedback-btn",disabled:!r,size:"large",type:"submit",variant:"contained",children:"Submit"})})]}),z=a(i)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,C=()=>e.jsxs(s,{align:"center",direction:"column",justify:"center",p:40,children:[e.jsx(M,{children:e.jsx(T,{})}),e.jsx($,{children:"We've Got Your Feedback"}),e.jsx(I,{children:"Thank you for sharing your thoughts with us! We value your input."})]}),M=a.div`
  margin-bottom: 20px;
  width: 50px;
  height: 50px;

  svg {
    width: 100%;
    height: 100%;
    color: ${n.white};
    fill: none;
  }

  circle {
    color: ${n.SUCESS};
  }
`,$=a(i)`
  font-size: 22px;
  font-weight: 700;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 10px;
`,I=a(i)`
  font-size: 16px;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${n.GRAY6};
  padding-top: 10px;
`,N=async r=>{try{const t=await B.post("/prediction/feedback",JSON.stringify(r));if(t.error){const{message:o}=t.error;throw new Error(o)}}catch(t){throw new Error(t.message||"Error submitting feedback")}},A=()=>{const{close:r,visible:t}=w("feedback"),o=y({mode:"onChange"}),{watch:u,reset:c}=o,[x,l]=m.useState(!1);m.useEffect(()=>()=>{l(!1),c()},[t,c]);const d=u("message"),h=!!d&&d.trim().length>0,f=o.handleSubmit(async b=>{try{await N(b),k("Feedback Submitted"),l(!0)}catch(g){console.error(g.message)}});return e.jsx(F,{id:"feedback",kind:"small",onClose:r,preventOutsideClose:!0,children:e.jsx(v,{...o,children:e.jsx("form",{id:"feedback-form",onSubmit:f,children:x?e.jsx(C,{}):e.jsx(E,{allowNextStep:h})})})})};export{A as UserFeedBackModal};
