import{af as k,Y as v,f as m,ag as P,R as S,ah as Z,ai as I,s as d,b as l,g as U,r as p,j as e,F as n,T as b,h as J,aj as y,B as K,v as Q,q as X,e as ee,a4 as te}from"./index-fffd6c14.js";import{aC as se,B as g,C as ne,aD as oe,q as ie,F as re,aE as ae}from"./react-toastify.esm-c6a3f8fb.js";import{B as le}from"./index-0ec30624.js";import{u as ce}from"./index-bb0d1196.js";import{S as de}from"./index-287aaa52.js";import{h as ue}from"./index.esm-de5a2811.js";import{C as xe}from"./CheckIcon-1b877735.js";import{T as C}from"./index-0cbeb3a0.js";import"./InfoIcon-0d439864.js";const $=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,pe=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,he=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ge=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,we=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,me=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,be=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,je=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ye=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,ve=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function Se(t){return[pe,ve,fe,he,ge,me].some(r=>r.test(t))?k:je.test(t)?v:$.test(t)?m:we.test(t)?P:be.test(t)?S:ye.test(t)?Z:I}const ze=(t,s="")=>{const a=(s===m?$:/@(\w+)/).exec(t);return a?a[1]:null},A=t=>!!t&&[m,v,S].includes(t),_e=({onClick:t,loading:s,type:r,error:a})=>{const i=U(x=>x.budget),[u,o]=p.useState(10),c=A(r)?"radar":"add_node";return p.useEffect(()=>{(async()=>{try{const f=await oe(c);o(f.data.price)}catch(f){console.error("cannot fetch",f)}})()},[c]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Ee,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[u," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[se(i)," sats"]})]})]}),e.jsx(n,{children:e.jsx(g,{color:"secondary","data-testid":"check-icon",disabled:s||!!a,onClick:t,size:"large",startIcon:s?e.jsx(ne,{size:24}):e.jsx(xe,{}),type:"submit",variant:"contained",children:"Approve"})}),a?e.jsxs($e,{role:"tooltip",children:[e.jsxs(ke,{children:[e.jsx(ue,{fontSize:13}),e.jsx("span",{children:a})]}),e.jsx("div",{className:"tooltip",children:a})]}):null]})},Ee=d(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Be=d(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ce=d(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ke=d(n)`
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
`,$e=d(n)`
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
`,Ae=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Re=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Ne=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Le=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Te=({latitude:t,longitude:s,onNextStep:r,form:a})=>{const i=()=>{const{errors:o}=a.formState;Object.keys(o).length||r()},u=()=>{a.setValue("latitude",""),a.setValue("longitude",""),r()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Pe,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(C,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Ne},validate:{latitude:Ae}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(C,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Le},validate:{longitude:Re}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ze,{color:"secondary",disabled:!1,onClick:u,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",disabled:!t||!s,onClick:i,size:"large",variant:"contained",children:"Next"})})]})]})},Pe=d(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ze=d(g)`
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
`,O=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function F(t){return!!O.test(t)}const Ie=({type:t,onNextStep:s,allowNextStep:r})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ue,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...J,...t!==k?{pattern:{message:"Please enter a valid URL",value:O},validate:{source:F}}:{}}})}),e.jsx(n,{children:e.jsx(g,{color:"secondary",disabled:!r,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Ue=d(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,B={[m]:{label:"Twitter handle",img:"twitter_default.svg"},[v]:{label:"Youtube channel",img:"youtube_default.svg"},[S]:{label:"RSS Feed",img:"rss_feed.svg"}},Oe=({onNextStep:t,onPrevStep:s,type:r,value:a})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ge,{children:"Source Type"})})}),e.jsxs(n,{mb:20,children:[e.jsxs(Me,{children:[e.jsx("img",{alt:B[r].label,className:"badge__img",src:B[r].img}),e.jsx(De,{children:B[r].label})]}),e.jsx(Fe,{children:ze(a,r)??a})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ye,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),Fe=d(n)`
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
`,Ge=d(b)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,De=d(b)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,Me=d(n)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Ye=d(g)`
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
`,G=async(t,s,r)=>{const a=A(s)?"radar":"add_node",i={};if(s===k)i.media_url=t.source,i.content_type="audio_video";else if(s===P){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const c=/\/status\/(\d+)/,x=t.source.match(c);if(x!=null&&x[1]){const[,f]=x;i.tweet_id=f}}else i.tweet_id=t.source;i.content_type="tweet"}else if(s===Z)i.content_type="webpage",i.web_page=t.source;else if(s===I)i.content_type="document",i.text=t.source;else if(s===m){const[,o]=(t.source||"").match($)||[];if(o)i.source=o,i.source_type=s;else return}else(s===v||s===S)&&(i.source=t.source,i.source_type=s);t.latitude&&t.longitude&&(i.latitude=t.latitude,i.longitude=t.longitude);let u="";await K(async()=>{const o=await ee.enable();i.pubkey=o==null?void 0:o.pubkey,u=await te()});try{const o=await Q.post(`/${a}`,JSON.stringify(i),{Authorization:u});if(o.error){const{message:c}=o.error;throw new Error(c)}}catch(o){if(o.status===402&&(await ae(r),await X(r),await G(t,s,r)),o.status===400){const c=await o.json();throw new Error((c==null?void 0:c.status)||y)}if(o instanceof Error)throw new Error(o.message||y)}},tt=()=>{const[t,s]=p.useState(0),{close:r,visible:a}=ce("addContent"),[i]=U(_=>[_.setBudget]),u=ie({mode:"onChange"}),{watch:o,setValue:c,reset:x}=u,[f,R]=p.useState(!1),[D,N]=p.useState("");p.useEffect(()=>()=>{N(""),s(0),x()},[a,x]);const w=o("inputType"),L=o("source"),M=o("longitude"),Y=o("latitude"),T=o("source"),q=F(L);p.useEffect(()=>{c("inputType",Se(T))},[T,c]);const V=()=>{r()},z=()=>{s(t+1)},H=()=>{s(t-1)},W=u.handleSubmit(async _=>{R(!0);try{await G(_,w,i),de("Content Added"),V()}catch(h){let E=y;if((h==null?void 0:h.status)===400){const j=await h.json();E=j.errorCode||(j==null?void 0:j.status)||y}else h instanceof Error&&(E=h.message);N(String(E))}finally{R(!1)}});return e.jsx(le,{id:"addContent",kind:"small",onClose:r,preventOutsideClose:!0,children:e.jsx(re,{...u,children:e.jsxs("form",{id:"add-node-form",onSubmit:W,children:[t===0&&e.jsx(Ie,{allowNextStep:q,onNextStep:z,type:w}),t===1&&e.jsx(e.Fragment,{children:A(w)?e.jsx(Oe,{onNextStep:z,onPrevStep:H,type:w,value:L}):e.jsx(Te,{form:u,latitude:Y,longitude:M,onNextStep:z})}),t===2&&e.jsx(_e,{error:D,loading:f,onClick:()=>null,type:w})]})})})};export{tt as AddContentModal};
