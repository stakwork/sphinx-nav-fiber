import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-31948834.js";import{U as w}from"./index-2cdc5f04.js";import"./index-8911f025.js";import"./three.module-0192f2a3.js";import"./isPlainObject-41c1b2a7.js";import"./index-8c95c680.js";import"./index-0ab4316b.js";import"./SourcesTableIcon-3d98a0a1.js";import"./CheckIcon-259f2637.js";import"./DeleteNodeIcon-26cb904c.js";import"./SoundIcon-ce586e76.js";import"./SucessFeedBackIcon-d2a6d988.js";import"./TextareaAutosize-5547dc05.js";import"./index-ca064bcb.js";import"./string-a277709d.js";import"./index-ca4e9b8e.js";import"./index-042b1579.js";import"./index-043a76fe.js";import"./ClipLoader-a1bda373.js";import"./clsx-28119d9e.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
