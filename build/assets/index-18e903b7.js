import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-d92fb92e.js";import{U as w}from"./index-4f6f48ff.js";import"./index-d3b6e07a.js";import"./three.module-9722a9fc.js";import"./isPlainObject-ccb0d90f.js";import"./index-cd0c94f3.js";import"./index-e7e5c1fb.js";import"./SourcesTableIcon-84a3a06d.js";import"./CheckIcon-60cafa57.js";import"./DeleteNodeIcon-15423c31.js";import"./SoundIcon-763ebb29.js";import"./SucessFeedBackIcon-6d2574bb.js";import"./TextareaAutosize-7af50cc4.js";import"./index-bca19ca7.js";import"./string-a277709d.js";import"./index-0fbfe3a0.js";import"./index-da2d9420.js";import"./ClipLoader-0b6e6634.js";import"./clsx-6b169284.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
