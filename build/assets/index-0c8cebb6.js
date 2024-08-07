import{w as n,o as g,q as t,F as d,j as c}from"./index-9b1de64f.js";const l={schemas:[],links:[]},p=n((a,e)=>({...l,setSchemas:s=>{a({schemas:s.map(r=>({...r}))})},setSchemaLinks:s=>{a({links:s})},getPrimaryColorByType:s=>{const r=e().schemas.find(o=>o.type===s);return r?r.primary_color:void 0}})),_=({type:a})=>{let e;const[s]=p(i=>[i.getPrimaryColorByType]),r=a.toLowerCase(),o=s(a);switch(r){case"video":case"twitter_space":case"podcast":case"clip":e={iconStart:"video_badge.svg",color:o??t.CLIP};break;case"show":e={iconStart:"show_badge.svg",color:o??t.SHOW};break;case"tweet":e={iconStart:"twitter_badge.svg",color:o??t.TWEET};break;case"episode":e={iconStart:"audio_badge.svg",color:o??t.EPISODE};break;case"document":e={iconStart:"notes_badge.svg",color:o??t.TEXT};break;case"organization":e={iconStart:"organization_badge.svg",color:o??t.ORGANIZATION};break;case"person":case"guest":case"host":e={iconStart:"person_badge.svg",color:o??t.PERSON};break;case"event":e={iconStart:"event_badge.svg",color:o??t.EVENT};break;case"topic":e={iconStart:"topic_badge.svg",color:o??t.TOPIC};break;default:e={iconStart:"thing_badge.svg",color:o??t.THING};break}return c.jsx(b,{...e,label:a})},b=({iconStart:a,color:e,label:s})=>c.jsxs(m,{color:e,label:s,children:[c.jsx("img",{alt:s,className:"badge__img",src:a}),c.jsx("div",{className:"badge__label",children:s})]}),m=g(d).attrs({direction:"row"})`
  cursor: pointer;
  background: ${({color:a})=>a};
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  gap: 2px;

  .badge__img {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }

  .badge__label {
    color: ${({label:a})=>a.toLowerCase()==="topic"?t.black:t.white};
    font-family: Barlow;
    font-size: 8px;
    font-style: normal;
    font-weight: 800;
    line-height: 14px;
    text-transform: uppercase;
    line-height: 14px;
    letter-spacing: 0.48px;
    padding: 0 4px;
  }
`;export{_ as T,p as u};
