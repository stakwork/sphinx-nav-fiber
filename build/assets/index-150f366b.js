import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-116e4c30.js";import{Universe as g}from"./index-5bae65f2.js";import"./index-e88352fe.js";import"./three.module-9722a9fc.js";import"./isPlainObject-cd3d6d7d.js";import"./index-f1f63b64.js";import"./index-5f92bfef.js";import"./SourcesTableIcon-54039684.js";import"./CheckIcon-67026bba.js";import"./DeleteNodeIcon-d7500c49.js";import"./SoundIcon-a8275b85.js";import"./SucessFeedBackIcon-f9cd5201.js";import"./TextareaAutosize-1cb11cfd.js";import"./index-0abd1882.js";import"./string-a277709d.js";import"./index-db5472d8.js";import"./index-67587868.js";import"./ClipLoader-8c75b7a7.js";import"./index-717b1eb9.js";import"./clsx-8e74ece5.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
`;export{B as TopicMindset};
