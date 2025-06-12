import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-344dd3fe.js";import{U as w}from"./index-854d9b68.js";import"./index-28512270.js";import"./three.module-9722a9fc.js";import"./isPlainObject-9dd8e6b7.js";import"./index-cbd09cde.js";import"./index-47b5b545.js";import"./SourcesTableIcon-35d993d4.js";import"./CheckIcon-1ac57090.js";import"./DeleteNodeIcon-d3f23b72.js";import"./SoundIcon-5abadb28.js";import"./SucessFeedBackIcon-ab1b0aa4.js";import"./TextareaAutosize-d405a689.js";import"./index-1c4c086a.js";import"./string-a277709d.js";import"./index-a5a55535.js";import"./index-06144d43.js";import"./ClipLoader-b67af509.js";import"./clsx-77f4f1a7.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
