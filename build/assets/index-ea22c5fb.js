import{s as p,g as o,F as b,o as m,j as c}from"./index-1d72d4f1.js";const v=({type:s})=>{var n,g;let e;const[r]=m(l=>[l.normalizedSchemasByType]),d=s,a=(n=r[s])==null?void 0:n.primary_color,i=(g=r[s])==null?void 0:g.icon,t=i?`svg-icons/${i}.svg`:null;switch(d){case"video":case"twitter_space":case"podcast":case"clip":e={iconStart:t??"video_badge.svg",color:a??o.CLIP};break;case"show":e={iconStart:t??"show_badge.svg",color:a??o.SHOW};break;case"tweet":e={iconStart:t??"twitter_badge.svg",color:a??o.TWEET};break;case"episode":e={iconStart:t??"audio_badge.svg",color:a??o.EPISODE};break;case"document":e={iconStart:t??"notes_badge.svg",color:a??o.TEXT};break;case(i??"organization"):e={iconStart:t??"organization_badge.svg",color:a??o.ORGANIZATION};break;case"person":case"guest":case"host":e={iconStart:t??"person_badge.svg",color:a??o.PERSON};break;case"event":e={iconStart:t??"event_badge.svg",color:a??o.EVENT};break;default:e={iconStart:t??"thing_badge.svg",color:a??o.THING};break}return c.jsx(h,{...e,label:s})},h=({iconStart:s,color:e,label:r})=>c.jsxs(x,{color:e,children:[c.jsx("img",{alt:r,className:"badge__img",src:`/${s}`}),c.jsx("div",{className:"badge__label",children:r})]}),x=p(b).attrs({direction:"row"})`
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
    color: ${o.white};
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
