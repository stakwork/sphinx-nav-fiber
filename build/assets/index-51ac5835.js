import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-c575771d.js";import{U as g}from"./index-d29b1ed5.js";import"./index-30031878.js";import"./three.module-9722a9fc.js";import"./isPlainObject-f65fd0f9.js";import"./index-3e4dfee8.js";import"./index-0fb2ecac.js";import"./SourcesTableIcon-a25da39d.js";import"./CheckIcon-ff067ded.js";import"./DeleteNodeIcon-8e75e833.js";import"./SoundIcon-71355fcb.js";import"./SucessFeedBackIcon-e8275976.js";import"./TextareaAutosize-e9acb7a1.js";import"./index-0ef2f70a.js";import"./string-a277709d.js";import"./index-51de8a06.js";import"./index-892a4d8c.js";import"./ClipLoader-c29baf4c.js";import"./clsx-aa752837.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
