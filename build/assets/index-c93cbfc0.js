import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-90b40932.js";import{U as w}from"./index-dbe10d2e.js";import"./index-af4be033.js";import"./three.module-9722a9fc.js";import"./isPlainObject-928598a1.js";import"./index-e704322b.js";import"./index-0779cd2a.js";import"./SourcesTableIcon-c2ca82b7.js";import"./CheckIcon-c876fcd0.js";import"./DeleteNodeIcon-14b8d438.js";import"./SoundIcon-5b4925f1.js";import"./SucessFeedBackIcon-1e3cdd17.js";import"./TextareaAutosize-3b31c3b2.js";import"./index-08656954.js";import"./string-a277709d.js";import"./index-8f70e394.js";import"./index-869e7090.js";import"./index-cfccb09f.js";import"./ClipLoader-b126851a.js";import"./clsx-c0cead1b.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
