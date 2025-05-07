import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-1c4cc7d0.js";import{U as w}from"./index-e0b07872.js";import"./index-80c08abd.js";import"./three.module-9722a9fc.js";import"./index-6f4f2324.js";import"./index-c0369567.js";import"./index-662b7f9b.js";import"./SourcesTableIcon-6747714e.js";import"./CheckIcon-55e6afb9.js";import"./DeleteNodeIcon-6f57d611.js";import"./SoundIcon-0d04d415.js";import"./SucessFeedBackIcon-6f5489c8.js";import"./TextareaAutosize-d6576837.js";import"./index-9190281b.js";import"./index-d6611608.js";import"./ClipLoader-b6ec3a1e.js";import"./clsx-02c69243.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[]);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(j,{children:t.jsx(u,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},j=a.div`
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
