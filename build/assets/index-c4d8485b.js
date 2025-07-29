import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-bfdac096.js";import{U as g}from"./index-5ce3d782.js";import"./index-b5cbb973.js";import"./three.module-9722a9fc.js";import"./isPlainObject-77be63e5.js";import"./index-bdf9e970.js";import"./index-c07b705d.js";import"./SourcesTableIcon-05f9b5c9.js";import"./CheckIcon-c2fd0a17.js";import"./DeleteNodeIcon-4ab5ca45.js";import"./SoundIcon-05dcab23.js";import"./SucessFeedBackIcon-9d08a611.js";import"./TextareaAutosize-5a3ee9b9.js";import"./index-c5d61435.js";import"./string-a277709d.js";import"./index-2e9ceb64.js";import"./index-716bb694.js";import"./ClipLoader-d3b77358.js";import"./clsx-8c202a74.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
