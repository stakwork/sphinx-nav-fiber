import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-c3200209.js";import{U as w}from"./index-df5687dd.js";import"./index-46deada7.js";import"./three.module-9722a9fc.js";import"./index-35784ba4.js";import"./index-48550186.js";import"./index-77ecbc30.js";import"./SourcesTableIcon-c3c99f85.js";import"./CheckIcon-dd6f8b57.js";import"./DeleteNodeIcon-e69f42ee.js";import"./SoundIcon-671081c3.js";import"./SucessFeedBackIcon-c85aa430.js";import"./TextareaAutosize-335b1f71.js";import"./index-68d950d9.js";import"./index-0793ee45.js";import"./ClipLoader-e554054f.js";import"./clsx-293d7bd5.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
`;export{W as TopicMindset};
