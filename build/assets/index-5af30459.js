import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-d7e51bed.js";import{U as w}from"./index-04b69a4c.js";import"./index-52550f52.js";import"./three.module-9722a9fc.js";import"./isPlainObject-70892bc6.js";import"./index-ab61dac3.js";import"./index-6dbe525d.js";import"./SourcesTableIcon-b2b16a20.js";import"./CheckIcon-55d5e3f4.js";import"./DeleteNodeIcon-d7905546.js";import"./SoundIcon-d4dbeaa3.js";import"./SucessFeedBackIcon-0a9d6e2f.js";import"./TextareaAutosize-b25655b5.js";import"./index-927c4d38.js";import"./string-a277709d.js";import"./index-461d4c42.js";import"./index-8980e5b4.js";import"./ClipLoader-81a03b2a.js";import"./clsx-bf87f8e9.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
