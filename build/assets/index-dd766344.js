import{b7 as z,Y as b,v as m,b8 as k,R as j,b9 as E,ba as L,f as u,h as d,x as N,r as h,j as e,F as n,bb as M,T as y,bc as V,C as Y,b4 as q,bg as H,U as W,bf as J,O as K,o as Q,be as X}from"./index-b85f35cf.js";import{B as w,c as ee,F as te}from"./react-toastify.esm-ce67a4f9.js";import{B as ne}from"./index-0c223900.js";import{u as se}from"./index-b9c9b7e2.js";import{C as oe}from"./CheckIcon-b94a1aa2.js";import{T as _}from"./index-e6f0fb8d.js";import"./index.esm-ac56504e.js";import"./InfoIcon-de2f1e11.js";const C=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,re=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ie=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,ae=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,ce=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,de=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,le=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ue=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,xe=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,fe=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function he(t){return[ie,fe,re,ae,de].some(s=>s.test(t))?z:ue.test(t)?b:C.test(t)?m:ce.test(t)?k:le.test(t)?j:xe.test(t)?E:L}const we=(t,r="")=>{const a=(r===m?C:/@(\w+)/).exec(t);return a?a[1]:null},B=t=>!!t&&[m,b,j].includes(t),ge=({onClick:t,loading:r,type:s})=>{const a=N(i=>i.budget),[x,o]=h.useState(10),c=B(s)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const l=await V(c);o(l.data.price)}catch(l){console.error("cannot fetch",l)}})()},[c]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(be,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(me,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(pe,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[M(a)," sats"]})]})]}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:t,size:"large",startIcon:e.jsx(oe,{}),type:"submit",variant:"contained",children:"Approve"})})]})},me=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,pe=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,be=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,je=t=>{const r=Number(t);return r<-90||r>90?"Latitude must be between -90 and 90.":!r&&r!==0?"Latitude is required.":!0},ye=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Se=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,ve=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,_e=({latitude:t,longitude:r,onNextStep:s,form:a})=>{const x=()=>{const{errors:c}=a.formState;Object.keys(c).length||s()},o=()=>{a.setValue("latitude",""),a.setValue("longitude",""),s()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ze,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(_,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Se},validate:{latitude:je}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(_,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:ve},validate:{longitude:ye}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ce,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"skip-location-btn",disabled:!t||!r,onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},ze=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ce=u(w)`
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
`,T=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function P(t){return!!T.test(t)}const Be=({type:t,onNextStep:r,allowNextStep:s})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Re,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(_,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...Y,...t!==z?{pattern:{message:"Please enter a valid URL",value:T},validate:{source:P}}:{}}})}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!s,onClick:r,size:"large",variant:"contained",children:"Next"})})]}),Re=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ae={[m]:"Twitter handle",[b]:"Youtube channel",[j]:"RSS Feed"},$e=({onNextStep:t,onPrevStep:r,type:s,value:a})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx($,{children:"Source Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsxs($,{children:[Ae[s],": @",we(a,s)??a]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(ke,{color:"secondary",disabled:!1,onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),$=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ke=u(w)`
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
`,Z=async(t,r,s,a)=>{const x=B(s)?"radar":"add_node",o={};if(s===z)o.media_url=t.source,o.content_type="audio_video";else if(s===k){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const l=/\/status\/(\d+)/,f=t.source.match(l);if(f!=null&&f[1]){const[,p]=f;o.tweet_id=p}}else o.tweet_id=t.source;o.content_type="tweet"}else if(s===E)o.content_type="webpage",o.web_page=t.source;else if(s===L)o.content_type="document",o.text=t.source;else if(s===m){const[,i]=(t.source||"").match(C)||[];if(i)o.source=i,o.source_type=s;else return}else(s===b||s===j)&&(o.source=t.source,o.source_type=s);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let c="";await H(async()=>{const i=await Q.enable();o.pubkey=i==null?void 0:i.pubkey,c=await X()});try{const i=await W.post(`/${x}`,JSON.stringify(o),{Authorization:c});if(i.error){const{message:l}=i.error;throw new Error(l)}r()}catch(i){i.status===402&&(await J(a),await K(a),await Z(t,r,s,a)),i.status===400&&(await i.json(),r()),i instanceof Error&&r()}},Oe=()=>{const[t,r]=h.useState(0),{close:s,visible:a}=se("addContent"),[x]=N(v=>[v.setBudget]),o=ee({mode:"onChange"}),{watch:c,setValue:i,reset:l}=o,[f,p]=h.useState(!1);h.useEffect(()=>()=>{r(0),l()},[a,l]);const g=c("inputType"),R=c("source"),U=c("longitude"),I=c("latitude"),A=c("source"),O=P(R);h.useEffect(()=>{i("inputType",he(A))},[A,i]);const F=()=>{s()},S=()=>{r(t+1)},G=()=>{r(t-1)},D=o.handleSubmit(async v=>{p(!0);try{await Z(v,F,g,x)}catch{console.error(q)}finally{p(!1)}});return e.jsx(ne,{id:"addContent",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(te,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:D,children:[t===0&&e.jsx(Be,{allowNextStep:O,onNextStep:S,type:g}),t===1&&e.jsx(e.Fragment,{children:B(g)?e.jsx($e,{onNextStep:S,onPrevStep:G,type:g,value:R}):e.jsx(_e,{form:o,latitude:I,longitude:U,onNextStep:S})}),t===2&&e.jsx(ge,{loading:f,onClick:()=>null,type:g})]})})})};export{Oe as AddContentModal};
