import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-79a62d4f.js";import{U as g}from"./index-973c6251.js";import"./index-660c5b45.js";import"./three.module-9722a9fc.js";import"./isPlainObject-899bdfee.js";import"./index-5ee95c52.js";import"./index-25bf2ee1.js";import"./SourcesTableIcon-64094681.js";import"./CheckIcon-62453f38.js";import"./DeleteNodeIcon-ab4f97f0.js";import"./SoundIcon-a0de14c0.js";import"./SucessFeedBackIcon-0f5e7be0.js";import"./TextareaAutosize-f66c43d0.js";import"./index-3f4ad310.js";import"./string-a277709d.js";import"./index-5d211dd5.js";import"./index-fb95fdaa.js";import"./ClipLoader-4064019d.js";import"./clsx-8fed4a60.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
