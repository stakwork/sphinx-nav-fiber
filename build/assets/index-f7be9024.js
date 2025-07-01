import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-5d91095a.js";import{U as w}from"./index-ed5a6d89.js";import"./index-b7bf02a5.js";import"./three.module-a9c166f5.js";import"./isPlainObject-0a4f165c.js";import"./index-0824eecd.js";import"./index-68ee0ada.js";import"./SourcesTableIcon-d0f9046e.js";import"./CheckIcon-675f17ec.js";import"./DeleteNodeIcon-636b7b24.js";import"./SoundIcon-afae563b.js";import"./SucessFeedBackIcon-c817e6a8.js";import"./TextareaAutosize-e0da0eee.js";import"./index-84fa4231.js";import"./string-a277709d.js";import"./index-21ae0fc8.js";import"./index-d122f1a8.js";import"./index-cbd6f5a8.js";import"./ClipLoader-8427fdc9.js";import"./clsx-8d5121b3.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
