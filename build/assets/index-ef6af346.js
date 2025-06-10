import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-173303f8.js";import{U as w}from"./index-aeea1b36.js";import"./index-7ba47109.js";import"./three.module-9722a9fc.js";import"./isPlainObject-10bac472.js";import"./index-9ee3ad37.js";import"./index-e5c0464a.js";import"./SourcesTableIcon-0f01a151.js";import"./CheckIcon-cd1c4c9f.js";import"./DeleteNodeIcon-8d3da3a3.js";import"./SoundIcon-4c05e2ed.js";import"./SucessFeedBackIcon-373f12bc.js";import"./TextareaAutosize-43f509f9.js";import"./index-95a1ebb9.js";import"./string-a277709d.js";import"./index-4434621c.js";import"./index-76591fa3.js";import"./ClipLoader-378c66e1.js";import"./clsx-b9232f80.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
