import{f as t,h as o,F as d,j as a}from"./index-b85f35cf.js";const i={podcast:{img:"audio_badge.svg",label:"podcast"},clip:{img:"audio_badge.svg",label:"clip"},show:{img:"show_badge.svg",label:"show"},tweet:{img:"twitter_badge.svg",label:"tweet"},twitter_space:{img:"audio_badge.svg",label:"clip"},youtube:{img:"video_badge.svg",label:"clip"},episode:{img:"video_badge.svg",label:"episode"},document:{img:"notes_badge.svg",label:"text"},image:{img:"image_badge.png",label:"image"}},p=({type:e})=>{var g,s,l;return a.jsxs(r,{children:[a.jsx("img",{alt:((g=i[e])==null?void 0:g.label)||e,className:"badge__img",src:((s=i[e])==null?void 0:s.img)||"generic_badge.svg"}),a.jsx("div",{className:"badge__label",children:((l=i[e])==null?void 0:l.label)||e})]})},r=t(d).attrs({direction:"row"})`
  cursor: pointer;
  background: ${o.white};
  border-radius: 3px;
  overflow: hidden;

  .badge__img {
    width: 14px;
    height: 14px;
    object-fit: cover;
    background: rgba(255, 255, 255, 0.1);
  }

  .badge__label {
    color: ${o.BG1};
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
`;export{p as T};
