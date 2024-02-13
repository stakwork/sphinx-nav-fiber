import{aS as E,a8 as S,a7 as j,aT as L,a6 as v,aU as N,aV as P,Y as f,a0 as d,a1 as T,r as u,j as e,X as s,Z as _,ab as K,e as Q,a as U,aW as ee,aF as te,aX as z,d as se,U as ne}from"./index-1d000db5.js";import{bO as p,bJ as oe,cn as re,ck as A,u as ae,ch as ie,ca as ce,cj as le,co as de}from"./index-63261217.js";import{n as m}from"./toastMessage-546a77c9.js";import{f as ue}from"./index-f371730d.js";const $=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,he=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,xe=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,we=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,ge=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,me=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,pe=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,je=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,ye=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function be(t){return[he,ye,fe,xe,ge].some(n=>n.test(t))?E:pe.test(t)?S:$.test(t)?j:we.test(t)?L:me.test(t)?v:je.test(t)?N:P}const Se=(t,r="")=>{const i=(r===j?$:/@(\w+)/).exec(t);return i?i[1]:null},Z=t=>!!t&&[j,S,v].includes(t),ve=({onClick:t,loading:r,type:n})=>{const i=T(a=>a.budget),[h,o]=u.useState(10),l=Z(n)?"radar":"add_node";return u.useEffect(()=>{(async()=>{try{const c=await re(l);o(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[l]),e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Approve Cost"})})}),e.jsxs(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(_e,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[h," sats"]})]}),e.jsxs(Re,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ue(i)," sats"]})]})]}),e.jsx(s,{children:e.jsx(p,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:t,size:"large",startIcon:e.jsx(oe,{}),type:"submit",variant:"contained",children:"Approve"})})]})},_e=f(s).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${d.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${d.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${d.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,Re=f(s).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${d.secondaryText4};
  .title {
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`,Ce=f(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ze=t=>{const r=Number(t);return r<-90||r>90?"Latitude must be between -90 and 90.":!r&&r!==0?"Latitude is required.":!0},Ae=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Ee=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,$e=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,ke=({latitude:t,longitude:r,onNextStep:n,form:i})=>{const h=()=>{const{errors:l}=i.formState;Object.keys(l).length||n()},o=()=>{i.setValue("latitude",""),i.setValue("longitude",""),n()};return e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(Be,{children:"Add Location"})})}),e.jsxs(s,{direction:"row",mb:20,children:[e.jsx(s,{grow:1,children:e.jsx(A,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Ee},validate:{latitude:ze}}})}),e.jsx(s,{grow:1,ml:20,children:e.jsx(A,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:$e},validate:{longitude:Ae}}})})]}),e.jsxs(s,{direction:"row",children:[e.jsx(s,{grow:1,children:e.jsx(Le,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(s,{grow:1,ml:20,children:e.jsx(p,{color:"secondary",disabled:!t||!r,onClick:h,size:"large",variant:"contained",children:"Next"})})]})]})},Be=f(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Le=f(p)`
  && {
    background: ${d.white};
    color: ${d.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${d.white};
      color: ${d.BG2};
    }
  }
`,I=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function O(t){return!!I.test(t)}const Ne=({type:t,onNextStep:r,allowNextStep:n})=>e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(Pe,{children:"Add Content"})})}),e.jsx(s,{mb:12,children:e.jsx(A,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...K,...t!==E?{pattern:{message:"Please enter a valid URL",value:I},validate:{source:O}}:{}}})}),e.jsx(s,{children:e.jsx(p,{color:"secondary",disabled:!n,onClick:r,size:"large",variant:"contained",children:"Next"})})]}),Pe=f(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Te={[j]:"Twitter handle",[S]:"Youtube channel",[v]:"RSS Feed"},Ue=({onNextStep:t,onPrevStep:r,type:n,value:i})=>e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(B,{children:"Source Type"})})}),e.jsx(s,{direction:"row",mb:20,children:e.jsxs(B,{children:[Te[n],": @",Se(i,n)??i]})}),e.jsxs(s,{direction:"row",children:[e.jsx(s,{grow:1,children:e.jsx(Ze,{color:"secondary",disabled:!1,onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(s,{grow:1,ml:20,children:e.jsx(p,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),B=f(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ze=f(p)`
  && {
    background: ${d.white};
    color: ${d.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${d.white};
      color: ${d.BG2};
    }
  }
`,D=async(t,r,n,i)=>{const h=Z(n)?"radar":"add_node",o={};if(n===E)o.media_url=t.source,o.content_type="audio_video";else if(n===L){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const c=/\/status\/(\d+)/,g=t.source.match(c);if(g!=null&&g[1]){const[,y]=g;o.tweet_id=y}}else o.tweet_id=t.source;o.content_type="tweet"}else if(n===N)o.content_type="webpage",o.web_page=t.source;else if(n===P)o.content_type="document",o.text=t.source;else if(n===j){const[,a]=(t.source||"").match($)||[];if(a)o.source=a,o.source_type=n;else return}else(n===S||n===v)&&(o.source=t.source,o.source_type=n);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let l="";await Q(async()=>{const a=await se.enable();o.pubkey=a==null?void 0:a.pubkey,l=await ne()});try{const a=await U.post(`/${h}`,JSON.stringify(o),{Authorization:l});if(a.error){const{message:c}=a.error;throw new Error(c)}m(ee),r()}catch(a){if(a.status===402&&(await de(i),await te(i),await D(t,r,n,i)),a.status===400){const c=await a.json();m((c==null?void 0:c.status)||z),r()}a instanceof Error&&(m(a.message||z),r())}},Ge=()=>{const[t,r]=u.useState(0),{close:n,visible:i}=ae("addContent"),[h]=T(x=>[x.setBudget]),o=ie({mode:"onChange"}),{watch:l,setValue:a,reset:c}=o,[g,y]=u.useState(!1),[F,G]=u.useState(!1),[V,M]=u.useState(!1);u.useEffect(()=>()=>{r(0),c()},[i,c]);const b=l("inputType"),k=l("source"),Y=l("longitude"),W=l("latitude"),R=l("source"),q=O(k);u.useEffect(()=>{a("inputType",be(R))},[R,a]);const H=()=>{n()},C=async()=>{if(t===0)try{const x={source:R},w=await U.post("/validate_content",JSON.stringify(x));if(w.status===404||w.status===400){m("Please enter a valid URL"),c();return}w.source&&(G(!0),r(t+1)),w.content&&(M(!0),r(t+1))}catch(x){const w=x;(w.status===404||w.status===400)&&(m("Please enter a valid URL"),c())}},J=()=>{r(t-1)},X=o.handleSubmit(async x=>{y(!0);try{await D(x,H,b,h)}catch{m(z)}finally{y(!1)}});return e.jsx(ce,{id:"addContent",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(le,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:X,children:[t===0&&e.jsx(Ne,{allowNextStep:q,onNextStep:C,type:b}),t===1&&e.jsxs(e.Fragment,{children:[F&&e.jsx(ke,{form:o,latitude:W,longitude:Y,onNextStep:C}),V&&e.jsx(Ue,{onNextStep:C,onPrevStep:J,type:b,value:k})]}),t===2&&e.jsx(ve,{loading:g,onClick:()=>null,type:b})]})})})};export{Ge as AddContentModal};
