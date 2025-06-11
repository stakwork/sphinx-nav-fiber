import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-11b3d6c9.js";import{U as w}from"./index-01c2307a.js";import"./index-88d46c7a.js";import"./three.module-9722a9fc.js";import"./isPlainObject-15a76a63.js";import"./index-bc719ac8.js";import"./index-76ac83ae.js";import"./SourcesTableIcon-21616e47.js";import"./CheckIcon-4fa5db29.js";import"./DeleteNodeIcon-8589b4d2.js";import"./SoundIcon-af53df50.js";import"./SucessFeedBackIcon-45557d62.js";import"./TextareaAutosize-f881e19a.js";import"./index-02c807b3.js";import"./string-a277709d.js";import"./index-41891942.js";import"./index-09080cad.js";import"./ClipLoader-89d347a0.js";import"./clsx-02ac72d2.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
