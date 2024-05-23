import{aT as C,Y as S,v as b,aU as P,R as $,aV as U,aW as D,f as x,h as l,x as Z,r as f,j as e,F as o,aX as X,T as y,aY as J,D as K,B as Q,aZ as h,X as ee,o as te,a_ as se,a$ as oe,W as ne,b0 as ie,P as re}from"./index-b17e6e7f.js";import{B as w,C as ae,c as le,F as ce}from"./react-toastify.esm-ac6bd257.js";import{B as de}from"./index-a41ce7c3.js";import{S as ue}from"./index-be361899.js";import{i as xe}from"./index.esm-de2ad175.js";import{C as pe}from"./CheckIcon-7c4c0597.js";import{T as k}from"./index-922af843.js";import"./InfoIcon-eed706a9.js";const R=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ge=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,he=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,we=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,be=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ye=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,je=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ve=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Se=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function $e(t){return[ge,Se,fe,he,we,be].some(i=>i.test(t))?C:je.test(t)?S:R.test(t)?b:me.test(t)?P:ye.test(t)?$:ve.test(t)?U:D}const _e=(t,s="")=>{const r=(s===b?R:/@(\w+)/).exec(t);return r?r[1]:null},A=t=>!!t&&[b,S,$].includes(t),Ee=({onClick:t,loading:s,type:i,error:r})=>{const n=Z(d=>d.budget),[p,c]=f.useState(10),a=A(i)?"radar":"add_node";return f.useEffect(()=>{(async()=>{try{const u=await J(a);c(u.data.price)}catch(u){console.error("cannot fetch",u)}})()},[a]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ze,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[X(n)," sats"]})]})]}),e.jsx(o,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:s||!!r,onClick:t,size:"large",startIcon:s?e.jsx(ae,{size:24}):e.jsx(pe,{}),type:"submit",variant:"contained",children:"Approve"})}),r?e.jsxs(Re,{role:"tooltip",children:[e.jsxs(Ce,{children:[e.jsx(xe,{fontSize:13}),e.jsx("span",{children:r})]}),e.jsx("div",{className:"tooltip",children:r})]}):null]})},ze=x(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Be=x(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ke=x(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ce=x(o)`
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
`,Re=x(o)`
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
`,Ae=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Le=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Ne=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Te=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Pe=({latitude:t,longitude:s,onNextStep:i,form:r})=>{const n=()=>{const{errors:c}=r.formState;Object.keys(c).length||i()},p=()=>{r.setValue("latitude",""),r.setValue("longitude",""),i()};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Ue,{children:"Add Location"})})}),e.jsxs(o,{direction:"row",mb:20,children:[e.jsx(o,{basis:"100px",grow:1,children:e.jsx(k,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Ne},validate:{latitude:Ae}}})}),e.jsx(o,{basis:"100px",grow:1,ml:20,children:e.jsx(k,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Te},validate:{longitude:Le}}})})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(De,{color:"secondary","data-testid":"skip-location-btn",disabled:!1,onClick:p,size:"large",variant:"contained",children:"Skip"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!t||!s,onClick:n,size:"large",variant:"contained",children:"Next"})})]})]})},Ue=x(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,De=x(w)`
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
`,Ze=/^(https?:\/\/)/g,Ie=/(www\.)?/g,Oe=/[\w-]+(\.[\w-]+)*/g,Fe=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Ge=/(\/[^\s?]*)?/g,Me=/(\?[^\s]*)?/g,I=new RegExp(`${Ze.source}${Ie.source}${Oe.source}${Fe.source}?${Ge.source}${Me.source}$`,"i"),O=t=>I.test(t),Ye=({type:t,onNextStep:s,allowNextStep:i})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Ve,{children:"Add Content"})})}),e.jsx(o,{mb:12,children:e.jsx(k,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...K,...t!==C?{pattern:{message:"Please enter a valid URL",value:I},validate:{source:O}}:{}}})}),e.jsx(o,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!i,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Ve=x(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,B={[b]:{label:"Twitter handle",img:"twitter_default.svg"},[S]:{label:"Youtube channel",img:"youtube_default.svg"},[$]:{label:"RSS Feed",img:"rss_feed.svg"}},We=({onNextStep:t,onPrevStep:s,type:i,value:r})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(He,{children:"Source Type"})})}),e.jsxs(o,{mb:20,children:[e.jsxs(Je,{children:[e.jsx("img",{alt:B[i].label,className:"badge__img",src:B[i].img}),e.jsx(Xe,{children:B[i].label})]}),e.jsx(qe,{children:_e(r,i)??r})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(Ke,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),qe=x(o)`
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
`,He=x(y)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Xe=x(y)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,Je=x(o)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Ke=x(w)`
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
`,F=async(t,s,i)=>{const r=A(s)?"radar":"add_node",n={};if(s===C)n.media_url=t.source,n.content_type="audio_video";else if(s===P){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const d=/\/status\/(\d+)/,u=t.source.match(d);if(u!=null&&u[1]){const[,j]=u;n.tweet_id=j}}else n.tweet_id=t.source;n.content_type="tweet"}else if(s===U)n.content_type="webpage",n.web_page=t.source;else if(s===D)n.content_type="document",n.text=t.source;else if(s===b){const[,a]=(t.source||"").match(R)||[];if(a)n.source=a,n.source_type=s;else return}else(s===S||s===$)&&(n.source=t.source,n.source_type=s);t.latitude&&t.longitude&&(n.latitude=t.latitude,n.longitude=t.longitude);let p="",c;ee?c=await se.enable():c=await te.enable(),n.pubkey=c==null?void 0:c.pubkey,p=await oe();try{const a=await ne.post(`/${r}`,JSON.stringify(n),{Authorization:p});if(a.error){const{message:d}=a.error;throw new Error(d)}}catch(a){if(a.status===402)await ie(i),await re(i),await F(t,s,i);else{let d=h;if(a.status===400)try{const u=await a.json();d=u.message||u.errorCode||h}catch{d=h}else a instanceof Error&&(d=a.message||h);throw new Error(d)}}},at=()=>{const[t,s]=f.useState(0),{close:i,visible:r}=Q("addContent"),[n]=Z(E=>[E.setBudget]),p=le({mode:"onChange"}),{watch:c,setValue:a,reset:d}=p,[u,j]=f.useState(!1),[G,L]=f.useState("");f.useEffect(()=>()=>{L(""),s(0),d()},[r,d]);const m=c("inputType"),N=c("source"),M=c("longitude"),Y=c("latitude"),T=c("source"),V=O(N);f.useEffect(()=>{a("inputType",$e(T))},[T,a]);const W=()=>{i()},_=()=>{s(t+1)},q=()=>{s(t-1)},H=p.handleSubmit(async E=>{j(!0);try{await F(E,m,n),ue("Content Added"),W()}catch(g){let z=h;if((g==null?void 0:g.status)===400){const v=await g.json();z=v.errorCode||(v==null?void 0:v.status)||h}else g instanceof Error&&(z=g.message);L(String(z))}finally{j(!1)}});return e.jsx(de,{id:"addContent",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(ce,{...p,children:e.jsxs("form",{id:"add-node-form",onSubmit:H,children:[t===0&&e.jsx(Ye,{allowNextStep:V,onNextStep:_,type:m}),t===1&&e.jsx(e.Fragment,{children:A(m)?e.jsx(We,{onNextStep:_,onPrevStep:q,type:m,value:N}):e.jsx(Pe,{form:p,latitude:Y,longitude:M,onNextStep:_})}),t===2&&e.jsx(Ee,{error:G,loading:u,onClick:()=>null,type:m})]})})})};export{at as AddContentModal};
