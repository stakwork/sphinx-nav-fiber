import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-297a8c04.js";import{U as w}from"./index-d2e7fbec.js";import"./index-0fdf1d13.js";import"./three.module-9722a9fc.js";import"./index-271fa01f.js";import"./index-ada1b2ce.js";import"./index-627ed9cb.js";import"./SourcesTableIcon-d6f72212.js";import"./CheckIcon-404e52e8.js";import"./DeleteNodeIcon-086f2361.js";import"./SoundIcon-cf83e916.js";import"./SucessFeedBackIcon-12b263e7.js";import"./TextareaAutosize-6eb78a9a.js";import"./index-eb81293e.js";import"./index-1eefdd3c.js";import"./ClipLoader-c4fd7490.js";import"./clsx-7bd293f5.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[]);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(j,{children:t.jsx(u,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},j=a.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,u=a(i)`
  flex: 1;
  overflow: hidden;
`,v=a(i)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`;export{W as TopicMindset};
