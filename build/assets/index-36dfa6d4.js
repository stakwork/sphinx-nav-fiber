import{af as B,Y as b,f as m,ag as N,R as y,ah as L,ai as T,s as u,b as d,g as P,r as h,j as e,F as s,T as S,h as V,B as Y,v as H,ak as W,q as J,aj as C,e as K,a4 as Q}from"./index-5c5b2926.js";import{aC as X,B as g,aD as ee,q as te,F as se,aE as ne}from"./react-toastify.esm-7abd2405.js";import{B as oe}from"./index-4c13014e.js";import{n as j}from"./toastMessage-4daaf3fd.js";import{u as re}from"./index-1f310504.js";import{C as ie}from"./CheckIcon-aadf54be.js";import{T as z}from"./index-19454506.js";import"./index.esm-605225f9.js";import"./InfoIcon-e36216d7.js";const E=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,ae=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ce=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,le=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,de=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,ue=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,fe=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,xe=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,he=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,ge=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function we(t){return[ce,ge,ae,le,ue].some(n=>n.test(t))?B:xe.test(t)?b:E.test(t)?m:de.test(t)?N:fe.test(t)?y:he.test(t)?L:T}const me=(t,r="")=>{const a=(r===m?E:/@(\w+)/).exec(t);return a?a[1]:null},A=t=>!!t&&[m,b,y].includes(t),pe=({onClick:t,loading:r,type:n})=>{const a=P(i=>i.budget),[f,o]=h.useState(10),l=A(n)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await ee(l);o(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[l]),e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(ye,{children:"Approve Cost"})})}),e.jsxs(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(je,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[f," sats"]})]}),e.jsxs(be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[X(a)," sats"]})]})]}),e.jsx(s,{children:e.jsx(g,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:t,size:"large",startIcon:e.jsx(ie,{}),type:"submit",variant:"contained",children:"Approve"})})]})},je=u(s).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,be=u(s).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Se=t=>{const r=Number(t);return r<-90||r>90?"Latitude must be between -90 and 90.":!r&&r!==0?"Latitude is required.":!0},ve=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,_e=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Ce=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,ze=({latitude:t,longitude:r,onNextStep:n,form:a})=>{const f=()=>{const{errors:l}=a.formState;Object.keys(l).length||n()},o=()=>{a.setValue("latitude",""),a.setValue("longitude",""),n()};return e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(Be,{children:"Add Location"})})}),e.jsxs(s,{direction:"row",mb:20,children:[e.jsx(s,{basis:"100px",grow:1,children:e.jsx(z,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:_e},validate:{latitude:Se}}})}),e.jsx(s,{basis:"100px",grow:1,ml:20,children:e.jsx(z,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Ce},validate:{longitude:ve}}})})]}),e.jsxs(s,{direction:"row",children:[e.jsx(s,{grow:1,children:e.jsx(Ee,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(s,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",disabled:!t||!r,onClick:f,size:"large",variant:"contained",children:"Next"})})]})]})},Be=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ee=u(g)`
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
`,Z=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function U(t){return!!Z.test(t)}const Ae=({type:t,onNextStep:r,allowNextStep:n})=>e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(Re,{children:"Add Content"})})}),e.jsx(s,{mb:12,children:e.jsx(z,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...V,...t!==B?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:U}}:{}}})}),e.jsx(s,{children:e.jsx(g,{color:"secondary",disabled:!n,onClick:r,size:"large",variant:"contained",children:"Next"})})]}),Re=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$e={[m]:"Twitter handle",[b]:"Youtube channel",[y]:"RSS Feed"},ke=({onNextStep:t,onPrevStep:r,type:n,value:a})=>e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(k,{children:"Source Type"})})}),e.jsx(s,{direction:"row",mb:20,children:e.jsxs(k,{children:[$e[n],": @",me(a,n)??a]})}),e.jsxs(s,{direction:"row",children:[e.jsx(s,{grow:1,children:e.jsx(Ne,{color:"secondary",disabled:!1,onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(s,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),k=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ne=u(g)`
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
`,D=async(t,r,n,a)=>{const f=A(n)?"radar":"add_node",o={};if(n===B)o.media_url=t.source,o.content_type="audio_video";else if(n===N){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const c=/\/status\/(\d+)/,x=t.source.match(c);if(x!=null&&x[1]){const[,p]=x;o.tweet_id=p}}else o.tweet_id=t.source;o.content_type="tweet"}else if(n===L)o.content_type="webpage",o.web_page=t.source;else if(n===T)o.content_type="document",o.text=t.source;else if(n===m){const[,i]=(t.source||"").match(E)||[];if(i)o.source=i,o.source_type=n;else return}else(n===b||n===y)&&(o.source=t.source,o.source_type=n);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let l="";await Y(async()=>{const i=await K.enable();o.pubkey=i==null?void 0:i.pubkey,l=await Q()});try{const i=await H.post(`/${f}`,JSON.stringify(o),{Authorization:l});if(i.error){const{message:c}=i.error;throw new Error(c)}j(W),r()}catch(i){if(i.status===402&&(await ne(a),await J(a),await D(t,r,n,a)),i.status===400){const c=await i.json();j((c==null?void 0:c.status)||C),r()}i instanceof Error&&(j(i.message||C),r())}},Ge=()=>{const[t,r]=h.useState(0),{close:n,visible:a}=re("addContent"),[f]=P(_=>[_.setBudget]),o=te({mode:"onChange"}),{watch:l,setValue:i,reset:c}=o,[x,p]=h.useState(!1);h.useEffect(()=>()=>{r(0),c()},[a,c]);const w=l("inputType"),R=l("source"),I=l("longitude"),O=l("latitude"),$=l("source"),F=U(R);h.useEffect(()=>{i("inputType",we($))},[$,i]);const G=()=>{n()},v=()=>{r(t+1)},q=()=>{r(t-1)},M=o.handleSubmit(async _=>{p(!0);try{await D(_,G,w,f)}catch{j(C)}finally{p(!1)}});return e.jsx(oe,{id:"addContent",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(se,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:M,children:[t===0&&e.jsx(Ae,{allowNextStep:F,onNextStep:v,type:w}),t===1&&e.jsx(e.Fragment,{children:A(w)?e.jsx(ke,{onNextStep:v,onPrevStep:q,type:w,value:R}):e.jsx(ze,{form:o,latitude:O,longitude:I,onNextStep:v})}),t===2&&e.jsx(pe,{loading:x,onClick:()=>null,type:w})]})})})};export{Ge as AddContentModal};
