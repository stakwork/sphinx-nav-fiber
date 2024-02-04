import{Y as g,a0 as l,X as r,j as a}from"./index-292a35cd.js";function c(e){return e?String(e).replace(/[[]{2}/g,"").replace(/[\]]{2}/g,""):""}const i={podcast:{img:"audio_badge.svg",label:"podcast"},clip:{img:"audio_badge.svg",label:"clip"},show:{img:"show_badge.svg",label:"show"},tweet:{img:"twitter_badge.svg",label:"tweet"},twitter_space:{img:"audio_badge.svg",label:"clip"},youtube:{img:"video_badge.svg",label:"clip"},episode:{img:"video_badge.svg",label:"episode"},document:{img:"notes_badge.svg",label:"text"}},n=({type:e})=>{var t,s,o;return a.jsxs(d,{children:[a.jsx("img",{alt:((t=i[e])==null?void 0:t.label)||e,src:((s=i[e])==null?void 0:s.img)||""}),a.jsx("div",{className:"label",children:((o=i[e])==null?void 0:o.label)||e})]})},d=g(r).attrs({direction:"row"})`
  cursor: pointer;
  background: ${l.white};
  border-radius: 3px;
  overflow: hidden;

  img {
    width: 14px;
    height: 14px;
    object-fit: cover;
  }

  .label {
    color: ${l.BG1};
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
`;export{n as T,c as f};
