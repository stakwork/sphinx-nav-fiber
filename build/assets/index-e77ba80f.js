import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-054d527d.js";import{U as w}from"./index-8e43f6e3.js";import"./index-1a41ba5f.js";import"./three.module-9722a9fc.js";import"./isPlainObject-c0b60b7d.js";import"./index-432cb653.js";import"./index-ab5fe31c.js";import"./SourcesTableIcon-44e80d77.js";import"./CheckIcon-db30f160.js";import"./DeleteNodeIcon-f43b93ae.js";import"./SoundIcon-427f484b.js";import"./SucessFeedBackIcon-a0f54e05.js";import"./TextareaAutosize-01755d22.js";import"./index-903735c4.js";import"./string-a277709d.js";import"./index-bb566c75.js";import"./index-96899cfe.js";import"./index-0087cb29.js";import"./ClipLoader-2ed7a2d8.js";import"./clsx-160a0785.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
