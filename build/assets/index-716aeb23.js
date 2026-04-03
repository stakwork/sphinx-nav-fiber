import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-1a2e2dfa.js";import{Universe as g}from"./index-b7edc74c.js";import"./index-4ec6d1dd.js";import"./three.module-9722a9fc.js";import"./isPlainObject-ece4e6c6.js";import"./index-a9b5b35b.js";import"./index-1ec66a13.js";import"./SourcesTableIcon-0fdd279c.js";import"./CheckIcon-9b72cbb4.js";import"./DeleteNodeIcon-c92b86fa.js";import"./SoundIcon-cd12f044.js";import"./SucessFeedBackIcon-6893c0de.js";import"./TextareaAutosize-09afa932.js";import"./index-506ca345.js";import"./string-a277709d.js";import"./index-71348a70.js";import"./index-6a1f02e8.js";import"./ClipLoader-514d990e.js";import"./index-717b1eb9.js";import"./clsx-b097d45b.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
