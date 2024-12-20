import{s as p,a,F as b,d as m,j as c}from"./index-011e0c31.js";const v=({type:s})=>{var n,g;let e;const[r]=m(l=>[l.normalizedSchemasByType]),d=s,o=(n=r[s])==null?void 0:n.primary_color,i=(g=r[s])==null?void 0:g.icon,t=i?`svg-icons/${i}.svg`:null;switch(d){case"video":case"twitter_space":case"podcast":case"clip":e={iconStart:t??"video_badge.svg",color:o??a.CLIP};break;case"show":e={iconStart:t??"show_badge.svg",color:o??a.SHOW};break;case"tweet":e={iconStart:t??"twitter_badge.svg",color:o??a.TWEET};break;case"episode":e={iconStart:t??"audio_badge.svg",color:o??a.EPISODE};break;case"document":e={iconStart:t??"notes_badge.svg",color:o??a.TEXT};break;case(i??"organization"):e={iconStart:t??"organization_badge.svg",color:o??a.ORGANIZATION};break;case"person":case"guest":case"host":e={iconStart:t??"person_badge.svg",color:o??a.PERSON};break;case"event":e={iconStart:t??"event_badge.svg",color:o??a.EVENT};break;default:e={iconStart:t??"thing_badge.svg",color:o??a.THING};break}return c.jsx(h,{...e,label:s})},h=({iconStart:s,color:e,label:r})=>c.jsxs(x,{color:e,children:[c.jsx("img",{alt:r,className:"badge__img",src:s}),c.jsx("div",{className:"badge__label",children:r})]}),x=p(b).attrs({direction:"row"})`
  cursor: pointer;
  background: ${({color:s})=>s};
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
    color: ${a.white};
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
`;export{v as T};
