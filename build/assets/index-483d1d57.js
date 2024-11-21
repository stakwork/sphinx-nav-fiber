import{w as a,j as e,F as s,aU as g,aV as j,z as w,H as i,x as n,M as S,a1 as y,r as m,aS as k,aX as F,a3 as v,ac as B}from"./index-30c717ff.js";import{aW as E}from"./index-8fc142ef.js";const T=({allowNextStep:r})=>e.jsxs(s,{p:12,children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:25,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(z,{children:"Feedback"})})}),e.jsx(s,{mb:30,children:e.jsx(g,{id:"feedback-message",isTextArea:!0,maxLength:500,name:"message",placeholder:"Leave your feedback here ...",rules:j})}),e.jsx(s,{children:e.jsx(w,{color:"secondary","data-testid":"submit-feedback-btn",disabled:!r,size:"large",type:"submit",variant:"contained",children:"Submit"})})]}),z=a(i)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,M=()=>e.jsxs(s,{align:"center",direction:"column",justify:"center",p:40,children:[e.jsx(C,{children:e.jsx(E,{})}),e.jsx(W,{children:"We've Got Your Feedback"}),e.jsx($,{children:"Thank you for sharing your thoughts with us! We value your input."})]}),C=a.div`
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
`,W=a(i)`
  font-size: 22px;
  font-weight: 700;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 10px;
`,$=a(i)`
  font-size: 16px;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${n.GRAY6};
  padding-top: 10px;
`,I=async r=>{try{const t=await B.post("/prediction/feedback",JSON.stringify(r));if(t.error){const{message:o}=t.error;throw new Error(o)}}catch(t){throw new Error(t.message||"Error submitting feedback")}},U=()=>{const{close:r,visible:t}=S("feedback"),o=y({mode:"onChange"}),{watch:x,reset:c}=o,[u,d]=m.useState(!1);m.useEffect(()=>()=>{d(!1),c()},[t,c]);const l=x("message"),h=!!l&&l.trim().length>0,f=o.handleSubmit(async p=>{try{await I(p),k("Feedback Submitted"),d(!0)}catch(b){console.error(b.message)}});return e.jsx(F,{id:"feedback",kind:"small",onClose:r,preventOutsideClose:!0,children:e.jsx(v,{...o,children:e.jsx("form",{id:"feedback-form",onSubmit:f,children:u?e.jsx(M,{}):e.jsx(T,{allowNextStep:h})})})})};export{U as UserFeedBackModal};
