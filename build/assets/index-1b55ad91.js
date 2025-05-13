import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-fd66fa62.js";import{U as w}from"./index-8adc8d66.js";import"./index-c4e31ada.js";import"./three.module-9722a9fc.js";import"./index-d0ff402c.js";import"./index-80bf7276.js";import"./index-9b9c3e24.js";import"./SourcesTableIcon-c3a66ab9.js";import"./CheckIcon-f0c01bc0.js";import"./DeleteNodeIcon-3f57b907.js";import"./SoundIcon-5588cca4.js";import"./SucessFeedBackIcon-ff147d93.js";import"./TextareaAutosize-1944770c.js";import"./index-ec1d934b.js";import"./index-198ace75.js";import"./ClipLoader-a27b3188.js";import"./clsx-dbb40d39.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,j=a(i)`
  flex: 1;
  overflow: hidden;
`,v=a(i)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`;export{W as TopicMindset};
