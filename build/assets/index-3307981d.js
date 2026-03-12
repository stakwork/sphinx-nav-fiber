import{c as d,p as h,i as l,t as x,r as p,j as t,F as i,s as a,v as f,w}from"./index-16330c52.js";import{U as g}from"./index-df13da63.js";import"./index-e08dc0d7.js";import"./three.module-9722a9fc.js";import"./isPlainObject-a5888ea8.js";import"./index-2547ffb2.js";import"./index-69afc39c.js";import"./SourcesTableIcon-36fcc5af.js";import"./CheckIcon-60c6c98a.js";import"./DeleteNodeIcon-78f49b28.js";import"./SoundIcon-06d51d2e.js";import"./SucessFeedBackIcon-8807a76f.js";import"./TextareaAutosize-c412b224.js";import"./index-348047f8.js";import"./string-a277709d.js";import"./index-578b0a5b.js";import"./index-13946be6.js";import"./ClipLoader-aec19a05.js";import"./index-717b1eb9.js";import"./clsx-ac64453c.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await w(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(g,{})})})})})})})},u=a.div`
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
