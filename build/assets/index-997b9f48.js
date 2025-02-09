import{s as a,j as e,F as s,aV as g,aW as j,B as S,T as i,a as n,a0 as w,i as y,r as m,aT as k,aY as F,k as v,ac as T}from"./index-3f2162d7.js";import{S as B}from"./SucessFeedBackIcon-68b9c4b6.js";const E=({allowNextStep:r})=>e.jsxs(s,{p:12,children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:25,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(z,{children:"Feedback"})})}),e.jsx(s,{mb:30,children:e.jsx(g,{id:"feedback-message",isTextArea:!0,maxLength:500,name:"message",placeholder:"Leave your feedback here ...",rules:j})}),e.jsx(s,{children:e.jsx(S,{color:"secondary","data-testid":"submit-feedback-btn",disabled:!r,size:"large",type:"submit",variant:"contained",children:"Submit"})})]}),z=a(i)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,C=()=>e.jsxs(s,{align:"center",direction:"column",justify:"center",p:40,children:[e.jsx(M,{children:e.jsx(B,{})}),e.jsx(W,{children:"We've Got Your Feedback"}),e.jsx($,{children:"Thank you for sharing your thoughts with us! We value your input."})]}),M=a.div`
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
`,I=async r=>{try{const t=await T.post("/prediction/feedback",JSON.stringify(r));if(t.error){const{message:o}=t.error;throw new Error(o)}}catch(t){throw new Error(t.message||"Error submitting feedback")}},Y=()=>{const{close:r,visible:t}=w("feedback"),o=y({mode:"onChange"}),{watch:u,reset:c}=o,[x,d]=m.useState(!1);m.useEffect(()=>()=>{d(!1),c()},[t,c]);const l=u("message"),h=!!l&&l.trim().length>0,f=o.handleSubmit(async p=>{try{await I(p),k("Feedback Submitted"),d(!0)}catch(b){console.error(b.message)}});return e.jsx(F,{id:"feedback",kind:"small",onClose:r,preventOutsideClose:!0,children:e.jsx(v,{...o,children:e.jsx("form",{id:"feedback-form",onSubmit:f,children:x?e.jsx(C,{}):e.jsx(E,{allowNextStep:h})})})})};export{Y as UserFeedBackModal};
