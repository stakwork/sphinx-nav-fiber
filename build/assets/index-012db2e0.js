import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-955e3483.js";import{U as w}from"./index-d9e6d614.js";import"./index-97937e32.js";import"./three.module-0192f2a3.js";import"./isPlainObject-7848c088.js";import"./index-40a0299c.js";import"./index-42f17c08.js";import"./SourcesTableIcon-40bc7934.js";import"./CheckIcon-5d4463f8.js";import"./DeleteNodeIcon-d05062e3.js";import"./SoundIcon-0dfae750.js";import"./SucessFeedBackIcon-56acdd4b.js";import"./TextareaAutosize-f4b23bcd.js";import"./index-011bc1f0.js";import"./string-a277709d.js";import"./index-ecb0c9b7.js";import"./index-da5fefee.js";import"./index-d86c459d.js";import"./ClipLoader-0e81d132.js";import"./clsx-40eb567e.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
