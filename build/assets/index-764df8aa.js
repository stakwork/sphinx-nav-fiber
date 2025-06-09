import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-3e423de1.js";import{U as w}from"./index-b367058e.js";import"./index-17d2b743.js";import"./three.module-9722a9fc.js";import"./isPlainObject-79031aec.js";import"./index-3a7d80d5.js";import"./index-3bd2e583.js";import"./SourcesTableIcon-8bf2d6c4.js";import"./CheckIcon-74713451.js";import"./DeleteNodeIcon-825dd73b.js";import"./SoundIcon-b80419e2.js";import"./SucessFeedBackIcon-c3dded47.js";import"./TextareaAutosize-2a4da7f6.js";import"./index-c0ba4d67.js";import"./string-a277709d.js";import"./index-d637ee76.js";import"./index-a5768123.js";import"./ClipLoader-6fc4a312.js";import"./clsx-2b162be9.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
