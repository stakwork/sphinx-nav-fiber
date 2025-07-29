import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-2f9ba739.js";import{U as g}from"./index-af8fcc00.js";import"./index-1f608dba.js";import"./three.module-9722a9fc.js";import"./isPlainObject-9fee9299.js";import"./index-ee48d8c5.js";import"./index-b76e5e95.js";import"./SourcesTableIcon-eeef6f8c.js";import"./CheckIcon-34970b68.js";import"./DeleteNodeIcon-ad156892.js";import"./SoundIcon-458a3f0d.js";import"./SucessFeedBackIcon-9e33e8ff.js";import"./TextareaAutosize-a07e49c6.js";import"./index-6364df48.js";import"./string-a277709d.js";import"./index-4887c341.js";import"./index-ada20312.js";import"./ClipLoader-1d602055.js";import"./clsx-e4ec62b4.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
`;export{z as TopicMindset};
