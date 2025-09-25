import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-fab10bb0.js";import{U as g}from"./index-78a6f96f.js";import"./index-9dffe24a.js";import"./three.module-9722a9fc.js";import"./isPlainObject-bb80aae9.js";import"./index-1a0d0c27.js";import"./index-a151a639.js";import"./SourcesTableIcon-27de4552.js";import"./CheckIcon-d15a4d0e.js";import"./DeleteNodeIcon-b444f3b4.js";import"./SoundIcon-204702fb.js";import"./SucessFeedBackIcon-5380d4b6.js";import"./TextareaAutosize-ad085dd2.js";import"./index-d660e45c.js";import"./string-a277709d.js";import"./index-9a2e8247.js";import"./index-0fa64f5d.js";import"./ClipLoader-0a81d32f.js";import"./clsx-4b05a83c.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
