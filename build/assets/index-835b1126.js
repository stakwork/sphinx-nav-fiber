import{aj as z,Y as j,f as m,ak as $,R as b,al as E,am as L,s as u,b as l,g as N,r as h,j as e,F as n,T as y,h as M,ai as V,C as Y,v as q,q as H,e as W,a5 as J}from"./index-96b41805.js";import{aI as K,B as w,aJ as Q,t as X,F as ee,aK as te}from"./react-toastify.esm-4df78b0d.js";import{B as ne}from"./index-263d0c1a.js";import{u as se}from"./index-ec3446f8.js";import{C as oe}from"./CheckIcon-db269fba.js";import{T as _}from"./index-a7c441bc.js";import"./index.esm-ff9ef8aa.js";import"./InfoIcon-5fcce5a0.js";const C=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,re=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ie=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,ae=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,ce=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,le=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,de=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ue=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,xe=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,fe=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function he(t){return[ie,fe,re,ae,le].some(s=>s.test(t))?z:ue.test(t)?j:C.test(t)?m:ce.test(t)?$:de.test(t)?b:xe.test(t)?E:L}const we=(t,r="")=>{const a=(r===m?C:/@(\w+)/).exec(t);return a?a[1]:null},B=t=>!!t&&[m,j,b].includes(t),ge=({onClick:t,loading:r,type:s})=>{const a=N(i=>i.budget),[x,o]=h.useState(10),c=B(s)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const d=await Q(c);o(d.data.price)}catch(d){console.error("cannot fetch",d)}})()},[c]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(je,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(me,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(pe,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[K(a)," sats"]})]})]}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:t,size:"large",startIcon:e.jsx(oe,{}),type:"submit",variant:"contained",children:"Approve"})})]})},me=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,pe=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,je=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,be=t=>{const r=Number(t);return r<-90||r>90?"Latitude must be between -90 and 90.":!r&&r!==0?"Latitude is required.":!0},ye=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Se=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,ve=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,_e=({latitude:t,longitude:r,onNextStep:s,form:a})=>{const x=()=>{const{errors:c}=a.formState;Object.keys(c).length||s()},o=()=>{a.setValue("latitude",""),a.setValue("longitude",""),s()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ze,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(_,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Se},validate:{latitude:be}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(_,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:ve},validate:{longitude:ye}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ce,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"skip-location-btn",disabled:!t||!r,onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},ze=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ce=u(w)`
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
`,T=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function P(t){return!!T.test(t)}const Be=({type:t,onNextStep:r,allowNextStep:s})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Re,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(_,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...M,...t!==z?{pattern:{message:"Please enter a valid URL",value:T},validate:{source:P}}:{}}})}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!s,onClick:r,size:"large",variant:"contained",children:"Next"})})]}),Re=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ke={[m]:"Twitter handle",[j]:"Youtube channel",[b]:"RSS Feed"},Ae=({onNextStep:t,onPrevStep:r,type:s,value:a})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(A,{children:"Source Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsxs(A,{children:[ke[s],": @",we(a,s)??a]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx($e,{color:"secondary",disabled:!1,onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),A=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$e=u(w)`
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
`,Z=async(t,r,s,a)=>{const x=B(s)?"radar":"add_node",o={};if(s===z)o.media_url=t.source,o.content_type="audio_video";else if(s===$){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const d=/\/status\/(\d+)/,f=t.source.match(d);if(f!=null&&f[1]){const[,p]=f;o.tweet_id=p}}else o.tweet_id=t.source;o.content_type="tweet"}else if(s===E)o.content_type="webpage",o.web_page=t.source;else if(s===L)o.content_type="document",o.text=t.source;else if(s===m){const[,i]=(t.source||"").match(C)||[];if(i)o.source=i,o.source_type=s;else return}else(s===j||s===b)&&(o.source=t.source,o.source_type=s);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let c="";await Y(async()=>{const i=await W.enable();o.pubkey=i==null?void 0:i.pubkey,c=await J()});try{const i=await q.post(`/${x}`,JSON.stringify(o),{Authorization:c});if(i.error){const{message:d}=i.error;throw new Error(d)}r()}catch(i){i.status===402&&(await te(a),await H(a),await Z(t,r,s,a)),i.status===400&&(await i.json(),r()),i instanceof Error&&r()}},Oe=()=>{const[t,r]=h.useState(0),{close:s,visible:a}=se("addContent"),[x]=N(v=>[v.setBudget]),o=X({mode:"onChange"}),{watch:c,setValue:i,reset:d}=o,[f,p]=h.useState(!1);h.useEffect(()=>()=>{r(0),d()},[a,d]);const g=c("inputType"),R=c("source"),I=c("longitude"),U=c("latitude"),k=c("source"),O=P(R);h.useEffect(()=>{i("inputType",he(k))},[k,i]);const F=()=>{s()},S=()=>{r(t+1)},G=()=>{r(t-1)},D=o.handleSubmit(async v=>{p(!0);try{await Z(v,F,g,x)}catch{console.error(V)}finally{p(!1)}});return e.jsx(ne,{id:"addContent",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(ee,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:D,children:[t===0&&e.jsx(Be,{allowNextStep:O,onNextStep:S,type:g}),t===1&&e.jsx(e.Fragment,{children:B(g)?e.jsx(Ae,{onNextStep:S,onPrevStep:G,type:g,value:R}):e.jsx(_e,{form:o,latitude:U,longitude:I,onNextStep:S})}),t===2&&e.jsx(ge,{loading:f,onClick:()=>null,type:g})]})})})};export{Oe as AddContentModal};
