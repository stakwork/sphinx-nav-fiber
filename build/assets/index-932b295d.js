import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-baea693d.js";import{U as w}from"./index-0aa89cad.js";import"./index-783f51ec.js";import"./three.module-9722a9fc.js";import"./index-19ec3296.js";import"./index-ddc9dc34.js";import"./index-469f6fef.js";import"./SourcesTableIcon-d62bfc41.js";import"./CheckIcon-d71f9c08.js";import"./DeleteNodeIcon-2b54e967.js";import"./SoundIcon-fea36cbd.js";import"./SucessFeedBackIcon-a8dc9d44.js";import"./TextareaAutosize-d8a936e3.js";import"./index-6f91c8d8.js";import"./index-7325c5e4.js";import"./ClipLoader-4f76fc03.js";import"./clsx-6fe4b563.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
