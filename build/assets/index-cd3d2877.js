import{ba as R,Y as S,v as b,bb as P,R as $,bc as D,bd as U,f as u,h as l,x as I,r as f,j as e,F as o,be as J,T as y,bf as K,D as X,B as Q,b3 as h,X as ee,o as te,bg as se,bh as oe,W as ne,bi as ie,P as re}from"./index-58d1ac52.js";import{B as w,C as ae,c as le,F as ce}from"./react-toastify.esm-d30eefbb.js";import{B as de}from"./index-bd7f0f5d.js";import{S as ue}from"./index-d8c87a04.js";import{g as xe}from"./index.esm-864f7b20.js";import{C as pe}from"./CheckIcon-d7a2ac53.js";import{T as k}from"./index-ecd38180.js";import"./InfoIcon-d983fb82.js";const C=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ge=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,he=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,we=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,be=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ye=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,je=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ve=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Se=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function $e(t){return[ge,Se,fe,he,we,be].some(i=>i.test(t))?R:je.test(t)?S:C.test(t)?b:me.test(t)?P:ye.test(t)?$:ve.test(t)?D:U}const _e=(t,s="")=>{const r=(s===b?C:/@(\w+)/).exec(t);return r?r[1]:null},A=t=>!!t&&[b,S,$].includes(t),Ee=({onClick:t,loading:s,type:i,error:r})=>{const n=I(d=>d.budget),[p,c]=f.useState(10),a=A(i)?"radar":"add_node";return f.useEffect(()=>{(async()=>{try{const x=await K(a);c(x.data.price)}catch(x){console.error("cannot fetch",x)}})()},[a]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ze,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(n)," sats"]})]})]}),e.jsx(o,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:s||!!r,onClick:t,size:"large",startIcon:s?e.jsx(ae,{size:24}):e.jsx(pe,{}),type:"submit",variant:"contained",children:"Approve"})}),r?e.jsxs(Ce,{role:"tooltip",children:[e.jsxs(Re,{children:[e.jsx(xe,{fontSize:13}),e.jsx("span",{children:r})]}),e.jsx("div",{className:"tooltip",children:r})]}):null]})},ze=u(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Be=u(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ke=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Re=u(o)`
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
`,Ce=u(o)`
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
`,Ae=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Le=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Ne=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Te=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Pe=({latitude:t,longitude:s,onNextStep:i,form:r})=>{const n=()=>{const{errors:c}=r.formState;Object.keys(c).length||i()},p=()=>{r.setValue("latitude",""),r.setValue("longitude",""),i()};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(De,{children:"Add Location"})})}),e.jsxs(o,{direction:"row",mb:20,children:[e.jsx(o,{basis:"100px",grow:1,children:e.jsx(k,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Ne},validate:{latitude:Ae}}})}),e.jsx(o,{basis:"100px",grow:1,ml:20,children:e.jsx(k,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Te},validate:{longitude:Le}}})})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(Ue,{color:"secondary","data-testid":"skip-location-btn",disabled:!1,onClick:p,size:"large",variant:"contained",children:"Skip"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!t||!s,onClick:n,size:"large",variant:"contained",children:"Next"})})]})]})},De=u(y)`
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
`,Ie=/^(https?:\/\/)/g,Oe=/(www\.)?/g,Ze=/[\w-]+(\.[\w-]+)*/g,Fe=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Ge=/(\/[^\s?]*)?/g,Me=/(\?[^\s]*)?/g,O=new RegExp(`${Ie.source}${Oe.source}${Ze.source}${Fe.source}?${Ge.source}${Me.source}$`,"i"),Z=t=>O.test(t),Ye=({type:t,onNextStep:s,allowNextStep:i})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Ve,{children:"Add Content"})})}),e.jsx(o,{mb:12,children:e.jsx(k,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...X,...t!==R?{pattern:{message:"Please enter a valid URL",value:O},validate:{source:Z}}:{}}})}),e.jsx(o,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!i,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Ve=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,B={[b]:{label:"Twitter handle",img:"twitter_default.svg"},[S]:{label:"Youtube channel",img:"youtube_default.svg"},[$]:{label:"RSS Feed",img:"rss_feed.svg"}},We=({onNextStep:t,onPrevStep:s,type:i,value:r})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(He,{children:"Source Type"})})}),e.jsxs(o,{mb:20,children:[e.jsxs(Ke,{children:[e.jsx("img",{alt:B[i].label,className:"badge__img",src:B[i].img}),e.jsx(Je,{children:B[i].label})]}),e.jsx(qe,{children:_e(r,i)??r})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(Xe,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),qe=u(o)`
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
`,He=u(y)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Je=u(y)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,Ke=u(o)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Xe=u(w)`
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
`,F=async(t,s,i)=>{const r=A(s)?"radar":"add_node",n={};if(s===R)n.media_url=t.source,n.content_type="audio_video";else if(s===P){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const d=/\/status\/(\d+)/,x=t.source.match(d);if(x!=null&&x[1]){const[,j]=x;n.tweet_id=j}}else n.tweet_id=t.source;n.content_type="tweet"}else if(s===D)n.content_type="webpage",n.web_page=t.source;else if(s===U)n.content_type="document",n.text=t.source;else if(s===b){const[,a]=(t.source||"").match(C)||[];if(a)n.source=a,n.source_type=s;else return}else(s===S||s===$)&&(n.source=t.source,n.source_type=s);t.latitude&&t.longitude&&(n.latitude=t.latitude,n.longitude=t.longitude);let p="",c;ee?c=await se.enable():c=await te.enable(),n.pubkey=c==null?void 0:c.pubkey,p=await oe();try{const a=await ne.post(`/${r}`,JSON.stringify(n),{Authorization:p});if(a.error){const{message:d}=a.error;throw new Error(d)}}catch(a){if(a.status===402)await ie(i),await re(i),await F(t,s,i);else{let d=h;if(a.status===400)try{d=(await a.json()).message||h}catch{d=h}else a instanceof Error&&(d=a.message||h);throw new Error(d)}}},at=()=>{const[t,s]=f.useState(0),{close:i,visible:r}=Q("addContent"),[n]=I(E=>[E.setBudget]),p=le({mode:"onChange"}),{watch:c,setValue:a,reset:d}=p,[x,j]=f.useState(!1),[G,L]=f.useState("");f.useEffect(()=>()=>{L(""),s(0),d()},[r,d]);const m=c("inputType"),N=c("source"),M=c("longitude"),Y=c("latitude"),T=c("source"),V=Z(N);f.useEffect(()=>{a("inputType",$e(T))},[T,a]);const W=()=>{i()},_=()=>{s(t+1)},q=()=>{s(t-1)},H=p.handleSubmit(async E=>{j(!0);try{await F(E,m,n),ue("Content Added"),W()}catch(g){let z=h;if((g==null?void 0:g.status)===400){const v=await g.json();z=v.errorCode||(v==null?void 0:v.status)||h}else g instanceof Error&&(z=g.message);L(String(z))}finally{j(!1)}});return e.jsx(de,{id:"addContent",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(ce,{...p,children:e.jsxs("form",{id:"add-node-form",onSubmit:H,children:[t===0&&e.jsx(Ye,{allowNextStep:V,onNextStep:_,type:m}),t===1&&e.jsx(e.Fragment,{children:A(m)?e.jsx(We,{onNextStep:_,onPrevStep:q,type:m,value:N}):e.jsx(Pe,{form:p,latitude:Y,longitude:M,onNextStep:_})}),t===2&&e.jsx(Ee,{error:G,loading:x,onClick:()=>null,type:m})]})})})};export{at as AddContentModal};
