import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-61b1c9f9.js";import{U as w}from"./index-72bd51cb.js";import"./index-79bf3be3.js";import"./three.module-0192f2a3.js";import"./isPlainObject-71588dc0.js";import"./index-4c7ad28b.js";import"./index-862ffbdc.js";import"./SourcesTableIcon-026190c7.js";import"./CheckIcon-d589cc24.js";import"./DeleteNodeIcon-38d26483.js";import"./SoundIcon-ac977acc.js";import"./SucessFeedBackIcon-f8de5613.js";import"./TextareaAutosize-06c16b0c.js";import"./index-c8c1137f.js";import"./string-a277709d.js";import"./index-da33e6b5.js";import"./index-beac8566.js";import"./index-78e5856f.js";import"./ClipLoader-ad277083.js";import"./clsx-d1085406.js";const B=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:s}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(o=>!o.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{s&&(async r=>{try{const o=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(o)}catch(o){m("/"),console.error(o)}})(s)},[n,m,s]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
