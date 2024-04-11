import{b6 as R,Y as S,v as b,b7 as P,R as _,b8 as Z,b9 as U,f as u,h as l,x as O,r as f,j as e,F as n,ba as J,T as j,bb as K,C as Q,b3 as g,W as X,o as ee,bc as te,bd as se,U as ne,be as oe,O as ie}from"./index-fffb68b5.js";import{B as w,C as re,c as ae,F as le}from"./react-toastify.esm-743cfc19.js";import{B as ce}from"./index-6cc8a98f.js";import{u as de}from"./index-10e5a3d3.js";import{S as ue}from"./index-9ac4755a.js";import{h as xe}from"./index.esm-55221a47.js";import{C as pe}from"./CheckIcon-6fbf89eb.js";import{T as C}from"./index-96500165.js";import"./InfoIcon-c211880f.js";const $=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,he=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,ge=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,we=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,be=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,je=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ye=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ve=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Se=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function _e(t){return[he,Se,fe,ge,we,be].some(i=>i.test(t))?R:ye.test(t)?S:$.test(t)?b:me.test(t)?P:je.test(t)?_:ve.test(t)?Z:U}const ze=(t,s="")=>{const r=(s===b?$:/@(\w+)/).exec(t);return r?r[1]:null},A=t=>!!t&&[b,S,_].includes(t),Ee=({onClick:t,loading:s,type:i,error:r})=>{const o=O(d=>d.budget),[p,c]=f.useState(10),a=A(i)?"radar":"add_node";return f.useEffect(()=>{(async()=>{try{const x=await K(a);c(x.data.price)}catch(x){console.error("cannot fetch",x)}})()},[a]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ke,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(o)," sats"]})]})]}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:s||!!r,onClick:t,size:"large",startIcon:s?e.jsx(re,{size:24}):e.jsx(pe,{}),type:"submit",variant:"contained",children:"Approve"})}),r?e.jsxs($e,{role:"tooltip",children:[e.jsxs(Re,{children:[e.jsx(xe,{fontSize:13}),e.jsx("span",{children:r})]}),e.jsx("div",{className:"tooltip",children:r})]}):null]})},ke=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ce=u(j)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Re=u(n)`
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
`,$e=u(n)`
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
`,Ae=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Ne=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Le=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Te=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Pe=({latitude:t,longitude:s,onNextStep:i,form:r})=>{const o=()=>{const{errors:c}=r.formState;Object.keys(c).length||i()},p=()=>{r.setValue("latitude",""),r.setValue("longitude",""),i()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ze,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(C,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Le},validate:{latitude:Ae}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(C,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Te},validate:{longitude:Ne}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ue,{color:"secondary","data-testid":"skip-location-btn",disabled:!1,onClick:p,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!t||!s,onClick:o,size:"large",variant:"contained",children:"Next"})})]})]})},Ze=u(j)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ue=u(w)`
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
`,I=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function F(t){return!!I.test(t)}const Oe=({type:t,onNextStep:s,allowNextStep:i})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ie,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...Q,...t!==R?{pattern:{message:"Please enter a valid URL",value:I},validate:{source:F}}:{}}})}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!i,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Ie=u(j)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,B={[b]:{label:"Twitter handle",img:"twitter_default.svg"},[S]:{label:"Youtube channel",img:"youtube_default.svg"},[_]:{label:"RSS Feed",img:"rss_feed.svg"}},Fe=({onNextStep:t,onPrevStep:s,type:i,value:r})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Me,{children:"Source Type"})})}),e.jsxs(n,{mb:20,children:[e.jsxs(Ye,{children:[e.jsx("img",{alt:B[i].label,className:"badge__img",src:B[i].img}),e.jsx(De,{children:B[i].label})]}),e.jsx(Ge,{children:ze(r,i)??r})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ve,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),Ge=u(n)`
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
`,Me=u(j)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,De=u(j)`
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
`,Ve=u(w)`
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
`,G=async(t,s,i)=>{const r=A(s)?"radar":"add_node",o={};if(s===R)o.media_url=t.source,o.content_type="audio_video";else if(s===P){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const d=/\/status\/(\d+)/,x=t.source.match(d);if(x!=null&&x[1]){const[,y]=x;o.tweet_id=y}}else o.tweet_id=t.source;o.content_type="tweet"}else if(s===Z)o.content_type="webpage",o.web_page=t.source;else if(s===U)o.content_type="document",o.text=t.source;else if(s===b){const[,a]=(t.source||"").match($)||[];if(a)o.source=a,o.source_type=s;else return}else(s===S||s===_)&&(o.source=t.source,o.source_type=s);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let p="",c;X?c=await te.enable():c=await ee.enable(),o.pubkey=c==null?void 0:c.pubkey,p=await se();try{const a=await ne.post(`/${r}`,JSON.stringify(o),{Authorization:p});if(a.error){const{message:d}=a.error;throw new Error(d)}}catch(a){if(a.status===402)await oe(i),await ie(i),await G(t,s,i);else{let d=g;if(a.status===400)try{d=(await a.json()).message||g}catch{d=g}else a instanceof Error&&(d=a.message||g);throw new Error(d)}}},st=()=>{const[t,s]=f.useState(0),{close:i,visible:r}=de("addContent"),[o]=O(E=>[E.setBudget]),p=ae({mode:"onChange"}),{watch:c,setValue:a,reset:d}=p,[x,y]=f.useState(!1),[M,N]=f.useState("");f.useEffect(()=>()=>{N(""),s(0),d()},[r,d]);const m=c("inputType"),L=c("source"),D=c("longitude"),Y=c("latitude"),T=c("source"),V=F(L);f.useEffect(()=>{a("inputType",_e(T))},[T,a]);const W=()=>{i()},z=()=>{s(t+1)},H=()=>{s(t-1)},q=p.handleSubmit(async E=>{y(!0);try{await G(E,m,o),ue("Content Added"),W()}catch(h){let k=g;if((h==null?void 0:h.status)===400){const v=await h.json();k=v.errorCode||(v==null?void 0:v.status)||g}else h instanceof Error&&(k=h.message);N(String(k))}finally{y(!1)}});return e.jsx(ce,{id:"addContent",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(le,{...p,children:e.jsxs("form",{id:"add-node-form",onSubmit:q,children:[t===0&&e.jsx(Oe,{allowNextStep:V,onNextStep:z,type:m}),t===1&&e.jsx(e.Fragment,{children:A(m)?e.jsx(Fe,{onNextStep:z,onPrevStep:H,type:m,value:L}):e.jsx(Pe,{form:p,latitude:Y,longitude:D,onNextStep:z})}),t===2&&e.jsx(Ee,{error:M,loading:x,onClick:()=>null,type:m})]})})})};export{st as AddContentModal};
