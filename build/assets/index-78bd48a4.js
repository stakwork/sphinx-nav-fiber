import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-a42e6981.js";import{U as g}from"./index-5c0f1ab5.js";import"./index-113059cc.js";import"./three.module-9722a9fc.js";import"./isPlainObject-4c890d64.js";import"./index-fa96fe33.js";import"./index-b3fb73ea.js";import"./SourcesTableIcon-c8ac0faa.js";import"./CheckIcon-6485b246.js";import"./DeleteNodeIcon-d9568cd5.js";import"./SoundIcon-810c6330.js";import"./SucessFeedBackIcon-39094a9a.js";import"./TextareaAutosize-c44e5243.js";import"./index-c54d34f1.js";import"./string-a277709d.js";import"./index-875ef9a8.js";import"./index-9771906f.js";import"./ClipLoader-44362f18.js";import"./clsx-90897688.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
