import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-94a99cb5.js";import{U as w}from"./index-b7e0498f.js";import"./index-29163da3.js";import"./three.module-0192f2a3.js";import"./isPlainObject-ae6a7b20.js";import"./index-57e1c14f.js";import"./index-a600fa10.js";import"./SourcesTableIcon-08fbce7a.js";import"./CheckIcon-6ed45394.js";import"./DeleteNodeIcon-2a62c8a5.js";import"./SoundIcon-7b463ce2.js";import"./SucessFeedBackIcon-7659f508.js";import"./TextareaAutosize-70fe4753.js";import"./index-25f27086.js";import"./string-a277709d.js";import"./index-57fdc0f5.js";import"./index-201499a5.js";import"./index-c6426ded.js";import"./ClipLoader-e4e98d79.js";import"./clsx-79c14d78.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
