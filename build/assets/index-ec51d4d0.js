import{aa as A,Y as b,a as g,ab as N,R as y,ac as L,ad as T,s as u,c as d,u as P,r as h,j as e,F as n,T as S,b as Y,x as q,o as H,af as W,g as J,ae as z,d as K,a2 as Q}from"./index-89a3f7cf.js";import{am as X,B as m,an as ee,l as te,F as ne,ao as se}from"./react-toastify.esm-2901fbc8.js";import{B as oe}from"./index-373f5dda.js";import{n as j}from"./toastMessage-81d7d28d.js";import{u as re}from"./index-06055e2a.js";import{C as ie}from"./CheckIcon-ae5ce382.js";import{T as C}from"./index-d03f8245.js";import"./index.esm-fe20163c.js";import"./InfoIcon-e27207b6.js";const B=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,ae=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ce=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,le=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,de=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,ue=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,xe=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,fe=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,he=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,me=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function we(t){return[ce,me,ae,le,ue].some(s=>s.test(t))?A:fe.test(t)?b:B.test(t)?g:de.test(t)?N:xe.test(t)?y:he.test(t)?L:T}const ge=(t,r="")=>{const a=(r===g?B:/@(\w+)/).exec(t);return a?a[1]:null},E=t=>!!t&&[g,b,y].includes(t),pe=({onClick:t,loading:r,type:s})=>{const a=P(i=>i.budget),[x,o]=h.useState(10),l=E(s)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await ee(l);o(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[l]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ye,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(je,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[X(a)," sats"]})]})]}),e.jsx(n,{children:e.jsx(m,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:t,size:"large",startIcon:e.jsx(ie,{}),type:"submit",variant:"contained",children:"Approve"})})]})},je=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,be=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ye=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=t=>{const r=Number(t);return r<-90||r>90?"Latitude must be between -90 and 90.":!r&&r!==0?"Latitude is required.":!0},ve=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,_e=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,ze=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Ce=({latitude:t,longitude:r,onNextStep:s,form:a})=>{const x=()=>{const{errors:l}=a.formState;Object.keys(l).length||s()},o=()=>{a.setValue("latitude",""),a.setValue("longitude",""),s()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ae,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(C,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:_e},validate:{latitude:Se}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(C,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:ze},validate:{longitude:ve}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Be,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(m,{color:"secondary",disabled:!t||!r,onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},Ae=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Be=u(m)`
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
`,Z=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function U(t){return!!Z.test(t)}const Ee=({type:t,onNextStep:r,allowNextStep:s})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Re,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...Y,...t!==A?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:U}}:{}}})}),e.jsx(n,{children:e.jsx(m,{color:"secondary",disabled:!s,onClick:r,size:"large",variant:"contained",children:"Next"})})]}),Re=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$e={[g]:"Twitter handle",[b]:"Youtube channel",[y]:"RSS Feed"},ke=({onNextStep:t,onPrevStep:r,type:s,value:a})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(k,{children:"Source Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsxs(k,{children:[$e[s],": @",ge(a,s)??a]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ne,{color:"secondary",disabled:!1,onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(m,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),k=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ne=u(m)`
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
`,I=async(t,r,s,a)=>{const x=E(s)?"radar":"add_node",o={};if(s===A)o.media_url=t.source,o.content_type="audio_video";else if(s===N){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const c=/\/status\/(\d+)/,f=t.source.match(c);if(f!=null&&f[1]){const[,p]=f;o.tweet_id=p}}else o.tweet_id=t.source;o.content_type="tweet"}else if(s===L)o.content_type="webpage",o.web_page=t.source;else if(s===T)o.content_type="document",o.text=t.source;else if(s===g){const[,i]=(t.source||"").match(B)||[];if(i)o.source=i,o.source_type=s;else return}else(s===b||s===y)&&(o.source=t.source,o.source_type=s);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let l="";await q(async()=>{const i=await K.enable();o.pubkey=i==null?void 0:i.pubkey,l=await Q()});try{const i=await H.post(`/${x}`,JSON.stringify(o),{Authorization:l});if(i.error){const{message:c}=i.error;throw new Error(c)}j(W),r()}catch(i){if(i.status===402&&(await se(a),await J(a),await I(t,r,s,a)),i.status===400){const c=await i.json();j((c==null?void 0:c.status)||z),r()}i instanceof Error&&(j(i.message||z),r())}},Ge=()=>{const[t,r]=h.useState(0),{close:s,visible:a}=re("addContent"),[x]=P(_=>[_.setBudget]),o=te({mode:"onChange"}),{watch:l,setValue:i,reset:c}=o,[f,p]=h.useState(!1);h.useEffect(()=>()=>{r(0),c()},[a,c]);const w=l("inputType"),R=l("source"),O=l("longitude"),D=l("latitude"),$=l("source"),F=U(R);h.useEffect(()=>{i("inputType",we($))},[$,i]);const G=()=>{s()},v=()=>{r(t+1)},M=()=>{r(t-1)},V=o.handleSubmit(async _=>{p(!0);try{await I(_,G,w,x)}catch{j(z)}finally{p(!1)}});return e.jsx(oe,{id:"addContent",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(ne,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:V,children:[t===0&&e.jsx(Ee,{allowNextStep:F,onNextStep:v,type:w}),t===1&&e.jsx(e.Fragment,{children:E(w)?e.jsx(ke,{onNextStep:v,onPrevStep:M,type:w,value:R}):e.jsx(Ce,{form:o,latitude:D,longitude:O,onNextStep:v})}),t===2&&e.jsx(pe,{loading:f,onClick:()=>null,type:w})]})})})};export{Ge as AddContentModal};
