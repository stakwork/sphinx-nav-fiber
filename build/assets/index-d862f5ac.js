import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-3fb06edb.js";import{Universe as g}from"./index-33505984.js";import"./index-574f7fbb.js";import"./three.module-9722a9fc.js";import"./isPlainObject-fd69c641.js";import"./index-d6c48c54.js";import"./index-f38d013f.js";import"./SourcesTableIcon-d73b4b69.js";import"./CheckIcon-5a235f8d.js";import"./DeleteNodeIcon-96a11f80.js";import"./SoundIcon-5cfe54be.js";import"./SucessFeedBackIcon-3b89b4dc.js";import"./TextareaAutosize-c2b306bd.js";import"./index-7a5b3529.js";import"./string-a277709d.js";import"./index-666a29e1.js";import"./index-ca742f7c.js";import"./ClipLoader-718f5911.js";import"./index-717b1eb9.js";import"./clsx-07776742.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
