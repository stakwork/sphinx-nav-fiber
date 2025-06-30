import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-0e71550c.js";import{U as w}from"./index-b2c0f533.js";import"./index-8b31d10f.js";import"./three.module-a9c166f5.js";import"./isPlainObject-4a21074c.js";import"./index-cc42c491.js";import"./index-c6eb4ffc.js";import"./SourcesTableIcon-733f4b62.js";import"./CheckIcon-22fc4102.js";import"./DeleteNodeIcon-c15a0339.js";import"./SoundIcon-348b8e0c.js";import"./SucessFeedBackIcon-3537b830.js";import"./TextareaAutosize-982d3f42.js";import"./index-69272743.js";import"./string-a277709d.js";import"./index-5174a3ad.js";import"./index-b0dcb7dd.js";import"./index-5742026c.js";import"./ClipLoader-39b0e414.js";import"./clsx-45ad0b2f.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
