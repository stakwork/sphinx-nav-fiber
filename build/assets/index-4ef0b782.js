import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-4dab41c2.js";import{Universe as g}from"./index-ecf588f1.js";import"./index-eb8c7093.js";import"./three.module-9722a9fc.js";import"./isPlainObject-91dd515c.js";import"./index-58011292.js";import"./index-af9861fb.js";import"./SourcesTableIcon-3ed37b72.js";import"./CheckIcon-f7bb3427.js";import"./DeleteNodeIcon-d6374162.js";import"./SoundIcon-254b8f1b.js";import"./SucessFeedBackIcon-f25ece47.js";import"./TextareaAutosize-73319f5f.js";import"./index-1edc0d0f.js";import"./string-a277709d.js";import"./index-8b947378.js";import"./index-9e66783d.js";import"./ClipLoader-5aedc0f4.js";import"./index-717b1eb9.js";import"./clsx-894ba608.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
