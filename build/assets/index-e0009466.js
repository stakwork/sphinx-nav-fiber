import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-a6495643.js";import{U as w}from"./index-69e4fc46.js";import"./index-38cf33a0.js";import"./three.module-9722a9fc.js";import"./isPlainObject-71e7286f.js";import"./index-09ee6175.js";import"./index-d13a8c86.js";import"./SourcesTableIcon-eacce9e7.js";import"./CheckIcon-9c46d108.js";import"./DeleteNodeIcon-11258d39.js";import"./SoundIcon-76a6cf9d.js";import"./SucessFeedBackIcon-e011ba0d.js";import"./TextareaAutosize-aabdb1f7.js";import"./index-73d6b62b.js";import"./string-a277709d.js";import"./index-7fdf2736.js";import"./index-2215f5ee.js";import"./ClipLoader-c7022165.js";import"./clsx-72b6a77f.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
