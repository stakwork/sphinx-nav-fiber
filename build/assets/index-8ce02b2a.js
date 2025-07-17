import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-3953f5c7.js";import{U as g}from"./index-e2939f45.js";import"./index-1e29b867.js";import"./three.module-9722a9fc.js";import"./isPlainObject-81d85651.js";import"./index-77fd02b9.js";import"./index-f5c0a6ac.js";import"./SourcesTableIcon-cede0655.js";import"./CheckIcon-e323d974.js";import"./DeleteNodeIcon-2e5b1a42.js";import"./SoundIcon-d55715d0.js";import"./SucessFeedBackIcon-26120d5f.js";import"./TextareaAutosize-f797397e.js";import"./index-376aba5e.js";import"./string-a277709d.js";import"./index-94301b19.js";import"./index-dbeba04a.js";import"./ClipLoader-7b76ab2c.js";import"./clsx-943348ee.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
