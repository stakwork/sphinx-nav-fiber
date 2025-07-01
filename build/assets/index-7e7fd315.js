import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-d485b6c2.js";import{U as w}from"./index-928b361f.js";import"./index-2ec69b51.js";import"./three.module-a9c166f5.js";import"./isPlainObject-887da352.js";import"./index-eb2a6a9a.js";import"./index-a9f15ae2.js";import"./SourcesTableIcon-c0866f58.js";import"./CheckIcon-ee5c643e.js";import"./DeleteNodeIcon-98340730.js";import"./SoundIcon-2c2de975.js";import"./SucessFeedBackIcon-9b9fd80e.js";import"./TextareaAutosize-80cf7b85.js";import"./index-402e5f68.js";import"./string-a277709d.js";import"./index-367bf172.js";import"./index-5306dbca.js";import"./index-262e3d57.js";import"./ClipLoader-bd473af5.js";import"./clsx-1001a10e.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
