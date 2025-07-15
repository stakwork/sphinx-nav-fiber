import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-aa147a39.js";import{U as w}from"./index-6eb4c574.js";import"./index-43e03cc3.js";import"./three.module-9722a9fc.js";import"./isPlainObject-a5d368e3.js";import"./index-dee2e50f.js";import"./index-64bf63a3.js";import"./SourcesTableIcon-548e89ba.js";import"./CheckIcon-e95d0922.js";import"./DeleteNodeIcon-c2327e61.js";import"./SoundIcon-7051b901.js";import"./SucessFeedBackIcon-63951ce1.js";import"./TextareaAutosize-220d14b1.js";import"./index-15c2140a.js";import"./string-a277709d.js";import"./index-6d26d866.js";import"./index-5241b618.js";import"./ClipLoader-dab7b1fa.js";import"./clsx-9fe7ca33.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
