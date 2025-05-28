import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-d285c35e.js";import{U as w}from"./index-a31868fd.js";import"./index-7619a127.js";import"./three.module-9722a9fc.js";import"./index-573110c6.js";import"./index-6ba4ed6e.js";import"./index-563cf1a5.js";import"./SourcesTableIcon-2c44db36.js";import"./CheckIcon-fe547295.js";import"./DeleteNodeIcon-63817670.js";import"./SoundIcon-68a19546.js";import"./SucessFeedBackIcon-9f66d1c0.js";import"./TextareaAutosize-b00862c7.js";import"./index-862b17c6.js";import"./index-0187b948.js";import"./ClipLoader-7cb62567.js";import"./clsx-86ce0c02.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
`;export{W as TopicMindset};
