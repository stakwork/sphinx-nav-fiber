import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-e86a3f55.js";import{U as g}from"./index-238fe19b.js";import"./index-68b1bca4.js";import"./three.module-9722a9fc.js";import"./isPlainObject-5eea4b26.js";import"./index-d7077484.js";import"./index-3a31dfa6.js";import"./SourcesTableIcon-8b0814dd.js";import"./CheckIcon-86e4f576.js";import"./DeleteNodeIcon-1381115e.js";import"./SoundIcon-c58b3415.js";import"./SucessFeedBackIcon-81377284.js";import"./TextareaAutosize-064ca7e2.js";import"./index-9e41ee26.js";import"./string-a277709d.js";import"./index-2c00377d.js";import"./index-79504a02.js";import"./ClipLoader-6a6c11b4.js";import"./clsx-84305d18.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
