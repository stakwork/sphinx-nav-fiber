import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-cde1947e.js";import{U as g}from"./index-05bdfef4.js";import"./index-562f60f5.js";import"./three.module-9722a9fc.js";import"./isPlainObject-ad7aaffb.js";import"./index-a57539fa.js";import"./index-13a86562.js";import"./SourcesTableIcon-d767bffd.js";import"./CheckIcon-e1b3e689.js";import"./DeleteNodeIcon-3cd6f727.js";import"./SoundIcon-b5ab64d8.js";import"./SucessFeedBackIcon-752148e4.js";import"./TextareaAutosize-c00d65fd.js";import"./index-4e71d433.js";import"./string-a277709d.js";import"./index-30ea2fa7.js";import"./index-6c59eb73.js";import"./ClipLoader-c970f843.js";import"./index-717b1eb9.js";import"./clsx-5485959d.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
