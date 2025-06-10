import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-59a682e9.js";import{U as w}from"./index-c483e239.js";import"./index-3b47b10c.js";import"./three.module-9722a9fc.js";import"./isPlainObject-8a8197e0.js";import"./index-5721889e.js";import"./index-e82db91d.js";import"./SourcesTableIcon-a9fc3bff.js";import"./CheckIcon-b13a8e38.js";import"./DeleteNodeIcon-8dd9e418.js";import"./SoundIcon-313ef194.js";import"./SucessFeedBackIcon-27cfd902.js";import"./TextareaAutosize-8a77c498.js";import"./index-7fe89f36.js";import"./string-a277709d.js";import"./index-2bbd0b61.js";import"./index-f214e675.js";import"./ClipLoader-16d3ade8.js";import"./clsx-e135f8b2.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
