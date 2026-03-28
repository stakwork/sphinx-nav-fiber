import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-c02d31e4.js";import{Universe as g}from"./index-ee799276.js";import"./index-2597761e.js";import"./three.module-9722a9fc.js";import"./isPlainObject-a544a88b.js";import"./index-a49522f6.js";import"./index-4ef2239b.js";import"./SourcesTableIcon-f01222c5.js";import"./CheckIcon-a06451ae.js";import"./DeleteNodeIcon-fb98b63d.js";import"./SoundIcon-6a407c38.js";import"./SucessFeedBackIcon-10848812.js";import"./TextareaAutosize-56b8b21a.js";import"./index-ee6ff615.js";import"./string-a277709d.js";import"./index-504441e7.js";import"./index-c007bdba.js";import"./ClipLoader-419cfd64.js";import"./index-717b1eb9.js";import"./clsx-bf4abc40.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
