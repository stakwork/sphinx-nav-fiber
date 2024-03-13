import{a9 as B,Y as y,a as w,aa as L,R as S,ab as N,ac as T,s as u,c as l,u as P,r as h,j as e,F as s,T as p,b as V,x as H,o as W,ad as q,g as J,ae as C,d as K,a2 as Q}from"./index-5e402b8d.js";import{ak as X,B as g,al as ee,l as te,F as se,am as ne}from"./react-toastify.esm-2e91314a.js";import{B as oe}from"./index-c47d9c0b.js";import{n as j}from"./toastMessage-b78976b8.js";import{u as re}from"./index-0692858f.js";import{C as ie}from"./CheckIcon-30a76a43.js";import{C as ae}from"./ClipLoader-f1f2aaad.js";import{T as A}from"./index-ea5825a7.js";import"./index.esm-58802bb8.js";import"./InfoIcon-21a8e098.js";const R=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,ce=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,le=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,de=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ue=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,xe=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,fe=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,he=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ge=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,me=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,we=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function pe(t){return[le,we,ce,de,ue,fe].some(n=>n.test(t))?B:ge.test(t)?y:R.test(t)?w:xe.test(t)?L:he.test(t)?S:me.test(t)?N:T}const be=(t,r="")=>{const a=(r===w?R:/@(\w+)/).exec(t);return a?a[1]:null},$=t=>!!t&&[w,y,S].includes(t),je=({onClick:t,loading:r,type:n})=>{const a=P(i=>i.budget),[x,o]=h.useState(10),d=$(n)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await ee(d);o(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[d]),e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(ve,{children:"Approve Cost"})})}),e.jsxs(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ye,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(Se,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[X(a)," sats"]})]})]}),e.jsx(s,{children:e.jsx(g,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:t,size:"large",startIcon:r?e.jsx(ae,{size:24}):e.jsx(ie,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ye=u(s).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${l.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${l.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${l.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,Se=u(s).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${l.secondaryText4};
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
`,ve=u(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,_e=t=>{const r=Number(t);return r<-90||r>90?"Latitude must be between -90 and 90.":!r&&r!==0?"Latitude is required.":!0},ze=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Ce=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Ae=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Be=({latitude:t,longitude:r,onNextStep:n,form:a})=>{const x=()=>{const{errors:d}=a.formState;Object.keys(d).length||n()},o=()=>{a.setValue("latitude",""),a.setValue("longitude",""),n()};return e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(Re,{children:"Add Location"})})}),e.jsxs(s,{direction:"row",mb:20,children:[e.jsx(s,{basis:"100px",grow:1,children:e.jsx(A,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Ce},validate:{latitude:_e}}})}),e.jsx(s,{basis:"100px",grow:1,ml:20,children:e.jsx(A,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Ae},validate:{longitude:ze}}})})]}),e.jsxs(s,{direction:"row",children:[e.jsx(s,{grow:1,children:e.jsx($e,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(s,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",disabled:!t||!r,onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},Re=u(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$e=u(g)`
  && {
    background: ${l.white};
    color: ${l.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${l.white};
      color: ${l.BG2};
    }
  }
`,Z=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function U(t){return!!Z.test(t)}const ke=({type:t,onNextStep:r,allowNextStep:n})=>e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(Ee,{children:"Add Content"})})}),e.jsx(s,{mb:12,children:e.jsx(A,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...V,...t!==B?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:U}}:{}}})}),e.jsx(s,{children:e.jsx(g,{color:"secondary",disabled:!n,onClick:r,size:"large",variant:"contained",children:"Next"})})]}),Ee=u(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z={[w]:{label:"Twitter handle",img:"twitter_default.svg"},[y]:{label:"Youtube channel",img:"youtube_default.svg"},[S]:{label:"RSS Feed",img:"rss_feed.svg"}},Le=({onNextStep:t,onPrevStep:r,type:n,value:a})=>e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(Te,{children:"Source Type"})})}),e.jsxs(s,{mb:20,children:[e.jsxs(Ze,{children:[e.jsx("img",{alt:z[n].label,className:"badge__img",src:z[n].img}),e.jsx(Pe,{children:z[n].label})]}),e.jsx(Ne,{children:be(a,n)??a})]}),e.jsxs(s,{direction:"row",children:[e.jsx(s,{grow:1,children:e.jsx(Ue,{color:"secondary",disabled:!1,onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(s,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),Ne=u(s)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 15px;
  color: ${l.GRAY3};
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`,Te=u(p)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Pe=u(p)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,Ze=u(s)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Ue=u(g)`
  && {
    background: ${l.white};
    color: ${l.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${l.white};
      color: ${l.BG2};
    }
  }
`,I=async(t,r,n,a)=>{const x=$(n)?"radar":"add_node",o={};if(n===B)o.media_url=t.source,o.content_type="audio_video";else if(n===L){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const c=/\/status\/(\d+)/,f=t.source.match(c);if(f!=null&&f[1]){const[,b]=f;o.tweet_id=b}}else o.tweet_id=t.source;o.content_type="tweet"}else if(n===N)o.content_type="webpage",o.web_page=t.source;else if(n===T)o.content_type="document",o.text=t.source;else if(n===w){const[,i]=(t.source||"").match(R)||[];if(i)o.source=i,o.source_type=n;else return}else(n===y||n===S)&&(o.source=t.source,o.source_type=n);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let d="";await H(async()=>{const i=await K.enable();o.pubkey=i==null?void 0:i.pubkey,d=await Q()});try{const i=await W.post(`/${x}`,JSON.stringify(o),{Authorization:d});if(i.error){const{message:c}=i.error;throw new Error(c)}j(q),r()}catch(i){if(i.status===402&&(await ne(a),await J(a),await I(t,r,n,a)),i.status===400){const c=await i.json();j((c==null?void 0:c.status)||C),r()}i instanceof Error&&(j(i.message||C),r())}},qe=()=>{const[t,r]=h.useState(0),{close:n,visible:a}=re("addContent"),[x]=P(_=>[_.setBudget]),o=te({mode:"onChange"}),{watch:d,setValue:i,reset:c}=o,[f,b]=h.useState(!1);h.useEffect(()=>()=>{r(0),c()},[a,c]);const m=d("inputType"),k=d("source"),O=d("longitude"),D=d("latitude"),E=d("source"),F=U(k);h.useEffect(()=>{i("inputType",pe(E))},[E,i]);const G=()=>{n()},v=()=>{r(t+1)},Y=()=>{r(t-1)},M=o.handleSubmit(async _=>{b(!0);try{await I(_,G,m,x)}catch{j(C)}finally{b(!1)}});return e.jsx(oe,{id:"addContent",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(se,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:M,children:[t===0&&e.jsx(ke,{allowNextStep:F,onNextStep:v,type:m}),t===1&&e.jsx(e.Fragment,{children:$(m)?e.jsx(Le,{onNextStep:v,onPrevStep:Y,type:m,value:k}):e.jsx(Be,{form:o,latitude:D,longitude:O,onNextStep:v})}),t===2&&e.jsx(je,{loading:f,onClick:()=>null,type:m})]})})})};export{qe as AddContentModal};
