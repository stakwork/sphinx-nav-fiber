import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-4d11283d.js";import{U as w}from"./index-bc6d1895.js";import"./index-63474a97.js";import"./three.module-9722a9fc.js";import"./index-a1b07ab5.js";import"./index-f1044b15.js";import"./index-ff62a9ee.js";import"./SourcesTableIcon-09e1decc.js";import"./CheckIcon-78d5b2de.js";import"./DeleteNodeIcon-537701f6.js";import"./SoundIcon-4d5678c7.js";import"./SucessFeedBackIcon-912c5867.js";import"./TextareaAutosize-94ae7b5b.js";import"./index-a7a01559.js";import"./index-a3d3d780.js";import"./ClipLoader-6fe741ff.js";import"./clsx-5da4e82f.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[]);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(j,{children:t.jsx(u,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},j=a.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,u=a(i)`
  flex: 1;
  overflow: hidden;
`,v=a(i)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`;export{W as TopicMindset};
