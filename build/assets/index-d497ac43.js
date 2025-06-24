import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-1e93486a.js";import{U as w}from"./index-0a9b3f60.js";import"./index-780d8bc3.js";import"./three.module-9722a9fc.js";import"./isPlainObject-2e10868b.js";import"./index-a5371f70.js";import"./index-dfaa87d3.js";import"./SourcesTableIcon-9fdf221c.js";import"./CheckIcon-6bfc5225.js";import"./DeleteNodeIcon-b70f61a0.js";import"./SoundIcon-adb38010.js";import"./SucessFeedBackIcon-9825a892.js";import"./TextareaAutosize-185af8f6.js";import"./index-a58b41e9.js";import"./string-a277709d.js";import"./index-d51213fc.js";import"./index-94b4cd7f.js";import"./index-e5cae69f.js";import"./ClipLoader-244d42b1.js";import"./clsx-ab173606.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
