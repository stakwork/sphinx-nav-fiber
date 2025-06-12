import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-60f01453.js";import{U as w}from"./index-6530aacc.js";import"./index-6da90996.js";import"./three.module-9722a9fc.js";import"./isPlainObject-78a1cc71.js";import"./index-204e5ada.js";import"./index-d9e6ec60.js";import"./SourcesTableIcon-897d7622.js";import"./CheckIcon-fece7859.js";import"./DeleteNodeIcon-9e106e27.js";import"./SoundIcon-a91554cc.js";import"./SucessFeedBackIcon-89e68ba8.js";import"./TextareaAutosize-36d1b6eb.js";import"./index-4fe6c716.js";import"./string-a277709d.js";import"./index-fb92296a.js";import"./index-4ab6c0a6.js";import"./ClipLoader-153af8d2.js";import"./clsx-978fb6ea.js";const z=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
`;export{z as TopicMindset};
