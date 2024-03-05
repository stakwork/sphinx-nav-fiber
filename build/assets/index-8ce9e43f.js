import{a9 as A,Y as y,a as w,aa as N,R as S,ab as L,ac as T,s as u,c as l,u as P,r as h,j as e,F as n,T as p,b as V,w as q,n as H,ad as W,f as J,ae as B,d as K,a2 as Q}from"./index-2d5c8145.js";import{ao as X,B as g,ap as ee,m as te,F as ne,aq as se}from"./react-toastify.esm-7361992a.js";import{B as oe}from"./index-f465290e.js";import{n as b}from"./toastMessage-6ac726d4.js";import{u as re}from"./index-9d01024a.js";import{C as ie}from"./CheckIcon-3dcf59e1.js";import{T as C}from"./index-f6c79cb9.js";import"./index.esm-60620dce.js";import"./InfoIcon-de0a2952.js";const R=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,ae=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ce=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,le=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,de=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,ue=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,xe=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,fe=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,he=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,ge=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function me(t){return[ce,ge,ae,le,ue].some(s=>s.test(t))?A:fe.test(t)?y:R.test(t)?w:de.test(t)?N:xe.test(t)?S:he.test(t)?L:T}const we=(t,r="")=>{const a=(r===w?R:/@(\w+)/).exec(t);return a?a[1]:null},$=t=>!!t&&[w,y,S].includes(t),pe=({onClick:t,loading:r,type:s})=>{const a=P(i=>i.budget),[x,o]=h.useState(10),d=$(s)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await ee(d);o(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[d]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ye,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(je,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[X(a)," sats"]})]})]}),e.jsx(n,{children:e.jsx(g,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:t,size:"large",startIcon:e.jsx(ie,{}),type:"submit",variant:"contained",children:"Approve"})})]})},je=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,be=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ye=u(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=t=>{const r=Number(t);return r<-90||r>90?"Latitude must be between -90 and 90.":!r&&r!==0?"Latitude is required.":!0},ve=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,_e=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,ze=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Be=({latitude:t,longitude:r,onNextStep:s,form:a})=>{const x=()=>{const{errors:d}=a.formState;Object.keys(d).length||s()},o=()=>{a.setValue("latitude",""),a.setValue("longitude",""),s()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{grow:1,children:e.jsx(C,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:_e},validate:{latitude:Se}}})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(C,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:ze},validate:{longitude:ve}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ae,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",disabled:!t||!r,onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},Ce=u(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ae=u(g)`
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
`,Z=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function U(t){return!!Z.test(t)}const Re=({type:t,onNextStep:r,allowNextStep:s})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx($e,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...V,...t!==A?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:U}}:{}}})}),e.jsx(n,{children:e.jsx(g,{color:"secondary",disabled:!s,onClick:r,size:"large",variant:"contained",children:"Next"})})]}),$e=u(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z={[w]:{label:"Twitter handle",img:"twitter_default.svg"},[y]:{label:"Youtube channel",img:"youtube_default.svg"},[S]:{label:"RSS Feed",img:"rss_feed.svg"}},Ee=({onNextStep:t,onPrevStep:r,type:s,value:a})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ne,{children:"Source Type"})})}),e.jsxs(n,{mb:20,children:[e.jsxs(Te,{children:[e.jsx("img",{alt:z[s].label,className:"badge__img",src:z[s].img}),e.jsx(Le,{children:z[s].label})]}),e.jsx(ke,{children:we(a,s)??a})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Pe,{color:"secondary",disabled:!1,onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),ke=u(n)`
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
`,Ne=u(p)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Le=u(p)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,Te=u(n)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Pe=u(g)`
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
`,I=async(t,r,s,a)=>{const x=$(s)?"radar":"add_node",o={};if(s===A)o.media_url=t.source,o.content_type="audio_video";else if(s===N){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const c=/\/status\/(\d+)/,f=t.source.match(c);if(f!=null&&f[1]){const[,j]=f;o.tweet_id=j}}else o.tweet_id=t.source;o.content_type="tweet"}else if(s===L)o.content_type="webpage",o.web_page=t.source;else if(s===T)o.content_type="document",o.text=t.source;else if(s===w){const[,i]=(t.source||"").match(R)||[];if(i)o.source=i,o.source_type=s;else return}else(s===y||s===S)&&(o.source=t.source,o.source_type=s);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let d="";await q(async()=>{const i=await K.enable();o.pubkey=i==null?void 0:i.pubkey,d=await Q()});try{const i=await H.post(`/${x}`,JSON.stringify(o),{Authorization:d});if(i.error){const{message:c}=i.error;throw new Error(c)}b(W),r()}catch(i){if(i.status===402&&(await se(a),await J(a),await I(t,r,s,a)),i.status===400){const c=await i.json();b((c==null?void 0:c.status)||B),r()}i instanceof Error&&(b(i.message||B),r())}},Ve=()=>{const[t,r]=h.useState(0),{close:s,visible:a}=re("addContent"),[x]=P(_=>[_.setBudget]),o=te({mode:"onChange"}),{watch:d,setValue:i,reset:c}=o,[f,j]=h.useState(!1);h.useEffect(()=>()=>{r(0),c()},[a,c]);const m=d("inputType"),E=d("source"),O=d("longitude"),D=d("latitude"),k=d("source"),F=U(E);h.useEffect(()=>{i("inputType",me(k))},[k,i]);const G=()=>{s()},v=()=>{r(t+1)},Y=()=>{r(t-1)},M=o.handleSubmit(async _=>{j(!0);try{await I(_,G,m,x)}catch{b(B)}finally{j(!1)}});return e.jsx(oe,{id:"addContent",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(ne,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:M,children:[t===0&&e.jsx(Re,{allowNextStep:F,onNextStep:v,type:m}),t===1&&e.jsx(e.Fragment,{children:$(m)?e.jsx(Ee,{onNextStep:v,onPrevStep:Y,type:m,value:E}):e.jsx(Be,{form:o,latitude:D,longitude:O,onNextStep:v})}),t===2&&e.jsx(pe,{loading:f,onClick:()=>null,type:m})]})})})};export{Ve as AddContentModal};
