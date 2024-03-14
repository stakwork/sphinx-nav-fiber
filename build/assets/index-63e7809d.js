import{s as u,j as e,c,a9 as B,Y as j,a as m,aa as L,R as y,ab as N,ac as P,u as I,r as h,F as n,T as w,b as q,x as H,o as W,g as J,ad as C,d as K,a2 as Q}from"./index-b71c035e.js";import{Q as X,ah as E,am as ee,B as g,an as te,l as se,F as ne,ao as oe}from"./react-toastify.esm-657845dc.js";import{B as ie}from"./index-813b6c7e.js";import{n as z}from"./toastMessage-3f86b89b.js";import{u as re}from"./index-386c76de.js";import{M as ae}from"./index.esm-18eb1b53.js";import{C as ce}from"./CheckIcon-07214158.js";import{C as le}from"./ClipLoader-ee4274d7.js";import{T as k}from"./index-5d5ba667.js";import"./InfoIcon-1252b44d.js";const de=u(X)`
  .Toastify__toast {
    background-color: #49c998ff;
    color: white;
    font-weight: 500;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    width: 200px;
    opacity: 200;
    font-family: Barlow;
    position: absolute;
    top: 60px;
    right: 35px;
  }
  .Toastify__close-button {
    display: none;
  }
`,ue=u.div`
  display: Flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,xe=(t,o)=>{let s="";const a="uniqueToastId";switch(o){case"source":s="Source Added";break;case"addContent":s="Content Submitted";break;case"additem":t&&(s="Item Added");break;case"edge":s="Link Created";break;default:s="Success"}E.isActive(a)||E(e.jsxs(ue,{children:[e.jsx(ae,{color:c.white,fontSize:24}),s]}),{toastId:a,autoClose:5e3})},fe=()=>e.jsx("div",{children:e.jsx(de,{hideProgressBar:!0,position:"top-right"})}),A=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,he=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ge=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,pe=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,we=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,be=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,je=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ye=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,Se=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,ve=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function _e(t){return[ge,ve,he,pe,me,be].some(s=>s.test(t))?B:ye.test(t)?j:A.test(t)?m:we.test(t)?L:je.test(t)?y:Se.test(t)?N:P}const Ce=(t,o="")=>{const a=(o===m?A:/@(\w+)/).exec(t);return a?a[1]:null},R=t=>!!t&&[m,j,y].includes(t),ze=({onClick:t,loading:o,type:s})=>{const a=I(r=>r.budget),[x,i]=h.useState(10),d=R(s)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const l=await te(d);i(l.data.price)}catch(l){console.error("cannot fetch",l)}})()},[d]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ae,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ke,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ee(a)," sats"]})]})]}),e.jsx(n,{children:e.jsx(g,{color:"secondary","data-testid":"check-icon",disabled:o,onClick:t,size:"large",startIcon:o?e.jsx(le,{size:24}):e.jsx(ce,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ke=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${c.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${c.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${c.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,Be=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${c.secondaryText4};
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
`,Ae=u(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Re=t=>{const o=Number(t);return o<-90||o>90?"Latitude must be between -90 and 90.":!o&&o!==0?"Latitude is required.":!0},$e=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Te=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Ee=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Le=({latitude:t,longitude:o,onNextStep:s,form:a})=>{const x=()=>{const{errors:d}=a.formState;Object.keys(d).length||s()},i=()=>{a.setValue("latitude",""),a.setValue("longitude",""),s()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ne,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(k,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Te},validate:{latitude:Re}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(k,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Ee},validate:{longitude:$e}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Pe,{color:"secondary",disabled:!1,onClick:i,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",disabled:!t||!o,onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},Ne=u(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Pe=u(g)`
  && {
    background: ${c.white};
    color: ${c.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${c.white};
      color: ${c.BG2};
    }
  }
`,Z=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function U(t){return!!Z.test(t)}const Ie=({type:t,onNextStep:o,allowNextStep:s})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ze,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(k,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...q,...t!==B?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:U}}:{}}})}),e.jsx(n,{children:e.jsx(g,{color:"secondary",disabled:!s,onClick:o,size:"large",variant:"contained",children:"Next"})})]}),Ze=u(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,_={[m]:{label:"Twitter handle",img:"twitter_default.svg"},[j]:{label:"Youtube channel",img:"youtube_default.svg"},[y]:{label:"RSS Feed",img:"rss_feed.svg"}},Ue=({onNextStep:t,onPrevStep:o,type:s,value:a})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Oe,{children:"Source Type"})})}),e.jsxs(n,{mb:20,children:[e.jsxs(De,{children:[e.jsx("img",{alt:_[s].label,className:"badge__img",src:_[s].img}),e.jsx(Ge,{children:_[s].label})]}),e.jsx(Fe,{children:Ce(a,s)??a})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Me,{color:"secondary",disabled:!1,onClick:()=>o(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),Fe=u(n)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 15px;
  color: ${c.GRAY3};
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`,Oe=u(w)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Ge=u(w)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${c.white};
`,De=u(n)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Me=u(g)`
  && {
    background: ${c.white};
    color: ${c.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${c.white};
      color: ${c.BG2};
    }
  }
`,F=async(t,o,s,a)=>{const x=R(s)?"radar":"add_node",i={};if(s===B)i.media_url=t.source,i.content_type="audio_video";else if(s===L){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const l=/\/status\/(\d+)/,f=t.source.match(l);if(f!=null&&f[1]){const[,b]=f;i.tweet_id=b}}else i.tweet_id=t.source;i.content_type="tweet"}else if(s===N)i.content_type="webpage",i.web_page=t.source;else if(s===P)i.content_type="document",i.text=t.source;else if(s===m){const[,r]=(t.source||"").match(A)||[];if(r)i.source=r,i.source_type=s;else return}else(s===j||s===y)&&(i.source=t.source,i.source_type=s);t.latitude&&t.longitude&&(i.latitude=t.latitude,i.longitude=t.longitude);let d="";await H(async()=>{const r=await K.enable();i.pubkey=r==null?void 0:r.pubkey,d=await Q()});try{const r=await W.post(`/${x}`,JSON.stringify(i),{Authorization:d});if(r.error){const{message:l}=r.error;throw new Error(l)}xe(!1,"addContent"),o()}catch(r){if(r.status===402&&(await oe(a),await J(a),await F(t,o,s,a)),r.status===400){const l=await r.json();z((l==null?void 0:l.status)||C),o()}r instanceof Error&&(z(r.message||C),o())}},tt=()=>{const[t,o]=h.useState(0),{close:s,visible:a}=re("addContent"),[x]=I(v=>[v.setBudget]),i=se({mode:"onChange"}),{watch:d,setValue:r,reset:l}=i,[f,b]=h.useState(!1);h.useEffect(()=>()=>{o(0),l()},[a,l]);const p=d("inputType"),$=d("source"),O=d("longitude"),G=d("latitude"),T=d("source"),D=U($);h.useEffect(()=>{r("inputType",_e(T))},[T,r]);const M=()=>{s()},S=()=>{o(t+1)},Y=()=>{o(t-1)},V=i.handleSubmit(async v=>{b(!0);try{await F(v,M,p,x)}catch{z(C)}finally{b(!1)}});return e.jsxs(ie,{id:"addContent",kind:"small",onClose:s,preventOutsideClose:!0,children:[e.jsx(ne,{...i,children:e.jsxs("form",{id:"add-node-form",onSubmit:V,children:[t===0&&e.jsx(Ie,{allowNextStep:D,onNextStep:S,type:p}),t===1&&e.jsx(e.Fragment,{children:R(p)?e.jsx(Ue,{onNextStep:S,onPrevStep:Y,type:p,value:$}):e.jsx(Le,{form:i,latitude:G,longitude:O,onNextStep:S})}),t===2&&e.jsx(ze,{loading:f,onClick:()=>null,type:p})]})}),e.jsx(fe,{})]})};export{tt as AddContentModal};
