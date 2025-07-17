import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-a2c8d9e8.js";import{U as g}from"./index-7d4b9761.js";import"./index-c506eed2.js";import"./three.module-9722a9fc.js";import"./isPlainObject-9fb37db8.js";import"./index-3bc9014e.js";import"./index-5cb2056c.js";import"./SourcesTableIcon-47084140.js";import"./CheckIcon-0cb79077.js";import"./DeleteNodeIcon-f4bc9209.js";import"./SoundIcon-7148f7e9.js";import"./SucessFeedBackIcon-d7c64501.js";import"./TextareaAutosize-16ed010b.js";import"./index-f8f50e34.js";import"./string-a277709d.js";import"./index-19b7e695.js";import"./index-bb23b08f.js";import"./ClipLoader-40c52708.js";import"./clsx-703a72e2.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
