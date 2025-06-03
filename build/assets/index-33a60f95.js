import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-1b71a057.js";import{U as w}from"./index-9a902ddb.js";import"./index-509adaac.js";import"./three.module-9722a9fc.js";import"./index-df86bcb5.js";import"./index-0d251521.js";import"./index-425c2f5b.js";import"./SourcesTableIcon-a755ddc3.js";import"./CheckIcon-df27193d.js";import"./DeleteNodeIcon-3aade908.js";import"./SoundIcon-31319fe1.js";import"./SucessFeedBackIcon-dd3de416.js";import"./TextareaAutosize-7ae53699.js";import"./index-f1729483.js";import"./index-31f7e06b.js";import"./ClipLoader-58db09d5.js";import"./clsx-06d5be43.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
