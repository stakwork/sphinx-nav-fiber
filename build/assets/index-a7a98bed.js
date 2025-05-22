import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-ac0a30af.js";import{U as w}from"./index-5009fe46.js";import"./index-43e543bb.js";import"./three.module-9722a9fc.js";import"./index-231514d9.js";import"./index-282da0ae.js";import"./index-43d3b5e8.js";import"./SourcesTableIcon-1fe7875a.js";import"./CheckIcon-72fe4cec.js";import"./DeleteNodeIcon-0e170aa2.js";import"./SoundIcon-4adfc096.js";import"./SucessFeedBackIcon-7898a075.js";import"./TextareaAutosize-d7b10828.js";import"./index-d527c339.js";import"./index-f8cda756.js";import"./ClipLoader-7f3eb13d.js";import"./clsx-6474fddc.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
