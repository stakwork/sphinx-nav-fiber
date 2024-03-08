import{a9 as B,Y as y,a as w,aa as L,R as S,ab as N,ac as T,s as u,c as l,u as P,r as h,j as e,F as n,T as p,b as V,w as H,n as W,ad as q,f as J,ae as C,d as K,a1 as Q}from"./index-2dc07d34.js";import{ak as X,B as g,al as ee,l as te,F as ne,am as se}from"./react-toastify.esm-8204b115.js";import{B as oe}from"./index-196a7a56.js";import{n as b}from"./toastMessage-a2b0b96c.js";import{u as re}from"./index-d0a19889.js";import{C as ie}from"./CheckIcon-1ef4fe85.js";import{C as ae}from"./ClipLoader-a01d94b5.js";import{T as A}from"./index-4395af69.js";import"./index.esm-554a6801.js";import"./InfoIcon-ccb1bb98.js";const R=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,ce=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,le=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,de=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ue=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,xe=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,fe=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,he=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ge=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,me=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,we=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function pe(t){return[le,we,ce,de,ue,fe].some(s=>s.test(t))?B:ge.test(t)?y:R.test(t)?w:xe.test(t)?L:he.test(t)?S:me.test(t)?N:T}const je=(t,r="")=>{const a=(r===w?R:/@(\w+)/).exec(t);return a?a[1]:null},$=t=>!!t&&[w,y,S].includes(t),be=({onClick:t,loading:r,type:s})=>{const a=P(i=>i.budget),[x,o]=h.useState(10),d=$(s)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await ee(d);o(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[d]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ve,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ye,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(Se,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[X(a)," sats"]})]})]}),e.jsx(n,{children:e.jsx(g,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:t,size:"large",startIcon:r?e.jsx(ae,{size:24}):e.jsx(ie,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ye=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Se=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,_e=t=>{const r=Number(t);return r<-90||r>90?"Latitude must be between -90 and 90.":!r&&r!==0?"Latitude is required.":!0},ze=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Ce=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Ae=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Be=({latitude:t,longitude:r,onNextStep:s,form:a})=>{const x=()=>{const{errors:d}=a.formState;Object.keys(d).length||s()},o=()=>{a.setValue("latitude",""),a.setValue("longitude",""),s()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Re,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{grow:1,children:e.jsx(A,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Ce},validate:{latitude:_e}}})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(A,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Ae},validate:{longitude:ze}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx($e,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",disabled:!t||!r,onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},Re=u(p)`
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
`,Z=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function U(t){return!!Z.test(t)}const ke=({type:t,onNextStep:r,allowNextStep:s})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ee,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(A,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...V,...t!==B?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:U}}:{}}})}),e.jsx(n,{children:e.jsx(g,{color:"secondary",disabled:!s,onClick:r,size:"large",variant:"contained",children:"Next"})})]}),Ee=u(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z={[w]:{label:"Twitter handle",img:"twitter_default.svg"},[y]:{label:"Youtube channel",img:"youtube_default.svg"},[S]:{label:"RSS Feed",img:"rss_feed.svg"}},Le=({onNextStep:t,onPrevStep:r,type:s,value:a})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Te,{children:"Source Type"})})}),e.jsxs(n,{mb:20,children:[e.jsxs(Ze,{children:[e.jsx("img",{alt:z[s].label,className:"badge__img",src:z[s].img}),e.jsx(Pe,{children:z[s].label})]}),e.jsx(Ne,{children:je(a,s)??a})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ue,{color:"secondary",disabled:!1,onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),Ne=u(n)`
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
`,Ze=u(n)`
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
`,I=async(t,r,s,a)=>{const x=$(s)?"radar":"add_node",o={};if(s===B)o.media_url=t.source,o.content_type="audio_video";else if(s===L){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const c=/\/status\/(\d+)/,f=t.source.match(c);if(f!=null&&f[1]){const[,j]=f;o.tweet_id=j}}else o.tweet_id=t.source;o.content_type="tweet"}else if(s===N)o.content_type="webpage",o.web_page=t.source;else if(s===T)o.content_type="document",o.text=t.source;else if(s===w){const[,i]=(t.source||"").match(R)||[];if(i)o.source=i,o.source_type=s;else return}else(s===y||s===S)&&(o.source=t.source,o.source_type=s);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let d="";await H(async()=>{const i=await K.enable();o.pubkey=i==null?void 0:i.pubkey,d=await Q()});try{const i=await W.post(`/${x}`,JSON.stringify(o),{Authorization:d});if(i.error){const{message:c}=i.error;throw new Error(c)}b(q),r()}catch(i){if(i.status===402&&(await se(a),await J(a),await I(t,r,s,a)),i.status===400){const c=await i.json();b((c==null?void 0:c.status)||C),r()}i instanceof Error&&(b(i.message||C),r())}},qe=()=>{const[t,r]=h.useState(0),{close:s,visible:a}=re("addContent"),[x]=P(_=>[_.setBudget]),o=te({mode:"onChange"}),{watch:d,setValue:i,reset:c}=o,[f,j]=h.useState(!1);h.useEffect(()=>()=>{r(0),c()},[a,c]);const m=d("inputType"),k=d("source"),O=d("longitude"),D=d("latitude"),E=d("source"),F=U(k);h.useEffect(()=>{i("inputType",pe(E))},[E,i]);const G=()=>{s()},v=()=>{r(t+1)},Y=()=>{r(t-1)},M=o.handleSubmit(async _=>{j(!0);try{await I(_,G,m,x)}catch{b(C)}finally{j(!1)}});return e.jsx(oe,{id:"addContent",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(ne,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:M,children:[t===0&&e.jsx(ke,{allowNextStep:F,onNextStep:v,type:m}),t===1&&e.jsx(e.Fragment,{children:$(m)?e.jsx(Le,{onNextStep:v,onPrevStep:Y,type:m,value:k}):e.jsx(Be,{form:o,latitude:D,longitude:O,onNextStep:v})}),t===2&&e.jsx(be,{loading:f,onClick:()=>null,type:m})]})})})};export{qe as AddContentModal};
