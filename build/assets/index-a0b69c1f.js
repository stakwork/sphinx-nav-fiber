import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-4a439277.js";import{U as g}from"./index-4e26858e.js";import"./index-9402702b.js";import"./three.module-9722a9fc.js";import"./isPlainObject-d0e9f37d.js";import"./index-0e82f978.js";import"./index-2b70d713.js";import"./SourcesTableIcon-846f8b1e.js";import"./CheckIcon-5884d428.js";import"./DeleteNodeIcon-e8dd2c01.js";import"./SoundIcon-4a099702.js";import"./SucessFeedBackIcon-67491a8e.js";import"./TextareaAutosize-2a15afdf.js";import"./index-d31060df.js";import"./string-a277709d.js";import"./index-fdb21238.js";import"./index-3bd05d6a.js";import"./ClipLoader-cbf6ebcf.js";import"./clsx-d0b9f467.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
