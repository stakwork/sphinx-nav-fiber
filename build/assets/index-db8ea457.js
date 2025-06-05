import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-20edceed.js";import{U as w}from"./index-90f6d8b4.js";import"./index-87940bd8.js";import"./three.module-9722a9fc.js";import"./index-9463cdb2.js";import"./index-0354bf1b.js";import"./index-80995083.js";import"./SourcesTableIcon-aab0b193.js";import"./CheckIcon-2af25782.js";import"./DeleteNodeIcon-2683a992.js";import"./SoundIcon-6a261a8f.js";import"./SucessFeedBackIcon-cdd30cd3.js";import"./TextareaAutosize-9097434a.js";import"./index-9d025e0d.js";import"./index-48c2e0fa.js";import"./ClipLoader-466545e4.js";import"./clsx-35d1f629.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
