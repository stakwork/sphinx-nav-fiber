import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-81cc0adb.js";import{Universe as g}from"./index-4ae7bade.js";import"./index-d9a9649e.js";import"./three.module-9722a9fc.js";import"./isPlainObject-80921df9.js";import"./index-03e41c84.js";import"./index-da475f89.js";import"./SourcesTableIcon-bdf0196f.js";import"./CheckIcon-cb9f21c3.js";import"./DeleteNodeIcon-d8612905.js";import"./SoundIcon-d8105267.js";import"./SucessFeedBackIcon-216da043.js";import"./TextareaAutosize-e65b2b90.js";import"./index-696f13b5.js";import"./string-a277709d.js";import"./index-01b99f86.js";import"./index-eeeb929f.js";import"./ClipLoader-94779f0e.js";import"./index-717b1eb9.js";import"./clsx-7ce7070d.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
`;export{B as TopicMindset};
