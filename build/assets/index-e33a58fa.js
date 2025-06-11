import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-90418f8c.js";import{U as w}from"./index-63662795.js";import"./index-38fcb7fb.js";import"./three.module-9722a9fc.js";import"./isPlainObject-a8124a11.js";import"./index-312d1386.js";import"./index-4de34ab5.js";import"./SourcesTableIcon-94f8e70e.js";import"./CheckIcon-517ec471.js";import"./DeleteNodeIcon-c59ac025.js";import"./SoundIcon-a6e2a61a.js";import"./SucessFeedBackIcon-89488c7e.js";import"./TextareaAutosize-e6f12933.js";import"./index-9adfcb97.js";import"./string-a277709d.js";import"./index-a34d3215.js";import"./index-1a1e19bd.js";import"./ClipLoader-e5369e07.js";import"./clsx-e2bc7cd8.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
