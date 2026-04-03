import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-74dcc36e.js";import{Universe as g}from"./index-6f16dff2.js";import"./index-51f50458.js";import"./three.module-9722a9fc.js";import"./isPlainObject-ad8215ac.js";import"./index-7fb9b6ce.js";import"./index-1321a353.js";import"./SourcesTableIcon-940e1785.js";import"./CheckIcon-433cc34b.js";import"./DeleteNodeIcon-0c27c955.js";import"./SoundIcon-82ef444e.js";import"./SucessFeedBackIcon-99457ba4.js";import"./TextareaAutosize-1949a541.js";import"./index-7c01f70c.js";import"./string-a277709d.js";import"./index-d61215a8.js";import"./index-2929a78e.js";import"./ClipLoader-6d66ae1a.js";import"./index-717b1eb9.js";import"./clsx-eea0dbd2.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
