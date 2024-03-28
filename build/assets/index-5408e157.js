import{aj as $,Y as S,f as m,ak as P,R as _,al as Z,am as U,s as u,b as l,g as I,r as p,j as e,F as n,T as b,h as J,ai as v,w as K,e as Q,A as X,a5 as ee,v as te,q as se}from"./index-1f2b463a.js";import{aJ as ne,B as g,C as oe,aK as ie,t as re,F as ae,aL as le}from"./react-toastify.esm-8467f46c.js";import{B as ce}from"./index-7cd1068f.js";import{u as de}from"./index-450d0403.js";import{S as ue}from"./index-b6880b0b.js";import{h as xe}from"./index.esm-886d4e00.js";import{C as fe}from"./CheckIcon-ae1b41a7.js";import{T as C}from"./index-89f763de.js";import"./InfoIcon-d5429fff.js";const A=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,pe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,he=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,ge=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,we=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,be=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,je=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ye=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ve=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Se=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function _e(t){return[he,Se,pe,ge,we,be].some(i=>i.test(t))?$:ye.test(t)?S:A.test(t)?m:me.test(t)?P:je.test(t)?_:ve.test(t)?Z:U}const ze=(t,s="")=>{const r=(s===m?A:/@(\w+)/).exec(t);return r?r[1]:null},R=t=>!!t&&[m,S,_].includes(t),Ee=({onClick:t,loading:s,type:i,error:r})=>{const o=I(d=>d.budget),[x,c]=p.useState(10),a=R(i)?"radar":"add_node";return p.useEffect(()=>{(async()=>{try{const f=await ie(a);c(f.data.price)}catch(f){console.error("cannot fetch",f)}})()},[a]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ke,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ne(o)," sats"]})]})]}),e.jsx(n,{children:e.jsx(g,{color:"secondary","data-testid":"check-icon",disabled:s||!!r,onClick:t,size:"large",startIcon:s?e.jsx(oe,{size:24}):e.jsx(fe,{}),type:"submit",variant:"contained",children:"Approve"})}),r?e.jsxs(Ae,{role:"tooltip",children:[e.jsxs($e,{children:[e.jsx(xe,{fontSize:13}),e.jsx("span",{children:r})]}),e.jsx("div",{className:"tooltip",children:r})]}):null]})},ke=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Be=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ce=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$e=u(n)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
  cursor: pointer;
  padding-left: 4px;
  font-size: 13px;
  font-family: Barlow;
  line-height: 18px;
  justify-content: center;

  span {
    margin-left: 4px;
  }
`,Ae=u(n)`
  display: flex;
  align-items: center;
  color: ${l.primaryRed};
  position: relative;
  margin-top: 20px;

  .tooltip {
    position: absolute;
    background-color: ${l.black};
    opacity: 0.8;
    border-radius: 4px;
    color: ${l.white};
    top: -10px;
    left: 335px;
    padding: 4px 8px;
    font-size: 13px;
    font-family: Barlow;
    visibility: hidden;
    width: 175px;
    z-index: 1;
  }

  &:hover .tooltip {
    visibility: visible;
  }

  &:focus .tooltip {
    visibility: visible;
  }
`,Re=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Le=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Ne=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Te=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Pe=({latitude:t,longitude:s,onNextStep:i,form:r})=>{const o=()=>{const{errors:c}=r.formState;Object.keys(c).length||i()},x=()=>{r.setValue("latitude",""),r.setValue("longitude",""),i()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ze,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(C,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Ne},validate:{latitude:Re}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(C,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Te},validate:{longitude:Le}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ue,{color:"secondary","data-testid":"skip-location-btn",disabled:!1,onClick:x,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",disabled:!t||!s,onClick:o,size:"large",variant:"contained",children:"Next"})})]})]})},Ze=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
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
`,O=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function F(t){return!!O.test(t)}const Ie=({type:t,onNextStep:s,allowNextStep:i})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Oe,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...J,...t!==$?{pattern:{message:"Please enter a valid URL",value:O},validate:{source:F}}:{}}})}),e.jsx(n,{children:e.jsx(g,{color:"secondary","data-testid":"add-content-btn",disabled:!i,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Oe=u(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,B={[m]:{label:"Twitter handle",img:"twitter_default.svg"},[S]:{label:"Youtube channel",img:"youtube_default.svg"},[_]:{label:"RSS Feed",img:"rss_feed.svg"}},Fe=({onNextStep:t,onPrevStep:s,type:i,value:r})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(De,{children:"Source Type"})})}),e.jsxs(n,{mb:20,children:[e.jsxs(Ye,{children:[e.jsx("img",{alt:B[i].label,className:"badge__img",src:B[i].img}),e.jsx(Me,{children:B[i].label})]}),e.jsx(Ge,{children:ze(r,i)??r})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ve,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),Ge=u(n)`
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
`,De=u(b)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Me=u(b)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,Ye=u(n)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Ve=u(g)`
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
`,G=async(t,s,i)=>{const r=R(s)?"radar":"add_node",o={};if(s===$)o.media_url=t.source,o.content_type="audio_video";else if(s===P){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const d=/\/status\/(\d+)/,f=t.source.match(d);if(f!=null&&f[1]){const[,j]=f;o.tweet_id=j}}else o.tweet_id=t.source;o.content_type="tweet"}else if(s===Z)o.content_type="webpage",o.web_page=t.source;else if(s===U)o.content_type="document",o.text=t.source;else if(s===m){const[,a]=(t.source||"").match(A)||[];if(a)o.source=a,o.source_type=s;else return}else(s===S||s===_)&&(o.source=t.source,o.source_type=s);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let x="",c;K?c=await X.enable():c=await Q.enable(),o.pubkey=c==null?void 0:c.pubkey,x=await ee();try{const a=await te.post(`/${r}`,JSON.stringify(o),{Authorization:x});if(a.error){const{message:d}=a.error;throw new Error(d)}}catch(a){if(a.status===402&&(await le(i),await se(i),await G(t,s,i)),a.status===400){const d=await a.json();throw new Error((d==null?void 0:d.status)||v)}if(a instanceof Error)throw new Error(a.message||v)}},st=()=>{const[t,s]=p.useState(0),{close:i,visible:r}=de("addContent"),[o]=I(E=>[E.setBudget]),x=re({mode:"onChange"}),{watch:c,setValue:a,reset:d}=x,[f,j]=p.useState(!1),[D,L]=p.useState("");p.useEffect(()=>()=>{L(""),s(0),d()},[r,d]);const w=c("inputType"),N=c("source"),M=c("longitude"),Y=c("latitude"),T=c("source"),V=F(N);p.useEffect(()=>{a("inputType",_e(T))},[T,a]);const q=()=>{i()},z=()=>{s(t+1)},H=()=>{s(t-1)},W=x.handleSubmit(async E=>{j(!0);try{await G(E,w,o),ue("Content Added"),q()}catch(h){let k=v;if((h==null?void 0:h.status)===400){const y=await h.json();k=y.errorCode||(y==null?void 0:y.status)||v}else h instanceof Error&&(k=h.message);L(String(k))}finally{j(!1)}});return e.jsx(ce,{id:"addContent",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(ae,{...x,children:e.jsxs("form",{id:"add-node-form",onSubmit:W,children:[t===0&&e.jsx(Ie,{allowNextStep:V,onNextStep:z,type:w}),t===1&&e.jsx(e.Fragment,{children:R(w)?e.jsx(Fe,{onNextStep:z,onPrevStep:H,type:w,value:N}):e.jsx(Pe,{form:x,latitude:Y,longitude:M,onNextStep:z})}),t===2&&e.jsx(Ee,{error:D,loading:f,onClick:()=>null,type:w})]})})})};export{st as AddContentModal};
