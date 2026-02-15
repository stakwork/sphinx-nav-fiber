import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-cd477ce3.js";import{U as g}from"./index-1177c852.js";import"./index-b34c56d3.js";import"./three.module-9722a9fc.js";import"./isPlainObject-6cf62c7e.js";import"./index-c78262fb.js";import"./index-2ec0752b.js";import"./SourcesTableIcon-baa3c369.js";import"./CheckIcon-cdc2da01.js";import"./DeleteNodeIcon-8d8f27fd.js";import"./SoundIcon-d953b14f.js";import"./SucessFeedBackIcon-e326e5b8.js";import"./TextareaAutosize-141961f4.js";import"./index-79b57cab.js";import"./string-a277709d.js";import"./index-762a6942.js";import"./index-fa195717.js";import"./ClipLoader-a2aabfa5.js";import"./clsx-b7d39b3a.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
