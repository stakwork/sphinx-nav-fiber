import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-abe596c2.js";import{U as w}from"./index-23aeb07a.js";import"./index-f283a3a9.js";import"./three.module-9722a9fc.js";import"./isPlainObject-08fb94dc.js";import"./index-e24fdddd.js";import"./index-a934f93d.js";import"./SourcesTableIcon-98e217ce.js";import"./CheckIcon-c4465b66.js";import"./DeleteNodeIcon-ed1ed550.js";import"./SoundIcon-33304203.js";import"./SucessFeedBackIcon-ec6549cd.js";import"./TextareaAutosize-2daee251.js";import"./index-c83b33eb.js";import"./string-a277709d.js";import"./index-2145b2e4.js";import"./index-b7d028fc.js";import"./ClipLoader-faf5a781.js";import"./clsx-bdb6559c.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
