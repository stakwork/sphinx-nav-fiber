import{b8 as R,Y as S,v as b,b9 as P,R as $,ba as U,bb as O,f as u,h as l,x as D,r as g,j as e,F as o,bc as J,T as y,bd as K,C as Q,b1 as h,W as X,o as ee,be as te,bf as se,U as oe,bg as ne,O as ie}from"./index-6865c215.js";import{B as m,C as re,c as ae,F as le}from"./react-toastify.esm-22bb4a54.js";import{B as ce}from"./index-41b2a75e.js";import{u as de}from"./index-27c0e8db.js";import{S as ue}from"./index-f0b50a08.js";import{g as xe}from"./index.esm-6af15a5e.js";import{C as pe}from"./CheckIcon-c555d9ea.js";import{T as C}from"./index-e40a00bc.js";import"./InfoIcon-bad0ebb4.js";const z=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,ge=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,he=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,we=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,be=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ye=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,je=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ve=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Se=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function $e(t){return[fe,Se,ge,he,me,be].some(i=>i.test(t))?R:je.test(t)?S:z.test(t)?b:we.test(t)?P:ye.test(t)?$:ve.test(t)?U:O}const _e=(t,s="")=>{const r=(s===b?z:/@(\w+)/).exec(t);return r?r[1]:null},L=t=>!!t&&[b,S,$].includes(t),ke=({onClick:t,loading:s,type:i,error:r})=>{const n=D(d=>d.budget),[p,c]=g.useState(10),a=L(i)?"radar":"add_node";return g.useEffect(()=>{(async()=>{try{const x=await K(a);c(x.data.price)}catch(x){console.error("cannot fetch",x)}})()},[a]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Ee,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(n)," sats"]})]})]}),e.jsx(o,{children:e.jsx(m,{color:"secondary","data-testid":"check-icon",disabled:s||!!r,onClick:t,size:"large",startIcon:s?e.jsx(re,{size:24}):e.jsx(pe,{}),type:"submit",variant:"contained",children:"Approve"})}),r?e.jsxs(ze,{role:"tooltip",children:[e.jsxs(Re,{children:[e.jsx(xe,{fontSize:13}),e.jsx("span",{children:r})]}),e.jsx("div",{className:"tooltip",children:r})]}):null]})},Ee=u(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ce=u(y)`
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
`,ze=u(o)`
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
`,Le=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Ne=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Te=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Ae=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Pe=({latitude:t,longitude:s,onNextStep:i,form:r})=>{const n=()=>{const{errors:c}=r.formState;Object.keys(c).length||i()},p=()=>{r.setValue("latitude",""),r.setValue("longitude",""),i()};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Ue,{children:"Add Location"})})}),e.jsxs(o,{direction:"row",mb:20,children:[e.jsx(o,{basis:"100px",grow:1,children:e.jsx(C,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Te},validate:{latitude:Le}}})}),e.jsx(o,{basis:"100px",grow:1,ml:20,children:e.jsx(C,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Ae},validate:{longitude:Ne}}})})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(Oe,{color:"secondary","data-testid":"skip-location-btn",disabled:!1,onClick:p,size:"large",variant:"contained",children:"Skip"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(m,{color:"secondary",disabled:!t||!s,onClick:n,size:"large",variant:"contained",children:"Next"})})]})]})},Ue=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Oe=u(m)`
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
`,De=/^(https?:\/\/)/g,Ie=/(www\.)?/g,Fe=/[\w-]+(\.[\w-]+)*/g,Ge=/(com|org|net|info|edu|gov|mil|co|biz|name|museum|club|email|link|city|solutions|photography|tips|today|technology|directory|center|gallery|graphics|equipment|exchange|estate|land|media|money|news|network|world|international|services|engineer|systems|software|ninja|xyz|site|online|space|store|tech|fun|press|website|co.uk)/g,Me=/(\/[^\s?]*)?/g,Ye=/(\?[^\s]*)?/g,I=new RegExp(`${De.source}${Ie.source}${Fe.source}\\.${Ge.source}?${Me.source}${Ye.source}$`,"i"),F=t=>I.test(t),Ze=({type:t,onNextStep:s,allowNextStep:i})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(qe,{children:"Add Content"})})}),e.jsx(o,{mb:12,children:e.jsx(C,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...Q,...t!==R?{pattern:{message:"Please enter a valid URL",value:I},validate:{source:F}}:{}}})}),e.jsx(o,{children:e.jsx(m,{color:"secondary","data-testid":"add-content-btn",disabled:!i,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),qe=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,B={[b]:{label:"Twitter handle",img:"twitter_default.svg"},[S]:{label:"Youtube channel",img:"youtube_default.svg"},[$]:{label:"RSS Feed",img:"rss_feed.svg"}},Ve=({onNextStep:t,onPrevStep:s,type:i,value:r})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(He,{children:"Source Type"})})}),e.jsxs(o,{mb:20,children:[e.jsxs(Ke,{children:[e.jsx("img",{alt:B[i].label,className:"badge__img",src:B[i].img}),e.jsx(Je,{children:B[i].label})]}),e.jsx(We,{children:_e(r,i)??r})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(Qe,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(m,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),We=u(o)`
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
`,Qe=u(m)`
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
`,G=async(t,s,i)=>{const r=L(s)?"radar":"add_node",n={};if(s===R)n.media_url=t.source,n.content_type="audio_video";else if(s===P){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const d=/\/status\/(\d+)/,x=t.source.match(d);if(x!=null&&x[1]){const[,j]=x;n.tweet_id=j}}else n.tweet_id=t.source;n.content_type="tweet"}else if(s===U)n.content_type="webpage",n.web_page=t.source;else if(s===O)n.content_type="document",n.text=t.source;else if(s===b){const[,a]=(t.source||"").match(z)||[];if(a)n.source=a,n.source_type=s;else return}else(s===S||s===$)&&(n.source=t.source,n.source_type=s);t.latitude&&t.longitude&&(n.latitude=t.latitude,n.longitude=t.longitude);let p="",c;X?c=await te.enable():c=await ee.enable(),n.pubkey=c==null?void 0:c.pubkey,p=await se();try{const a=await oe.post(`/${r}`,JSON.stringify(n),{Authorization:p});if(a.error){const{message:d}=a.error;throw new Error(d)}}catch(a){if(a.status===402)await ne(i),await ie(i),await G(t,s,i);else{let d=h;if(a.status===400)try{d=(await a.json()).message||h}catch{d=h}else a instanceof Error&&(d=a.message||h);throw new Error(d)}}},lt=()=>{const[t,s]=g.useState(0),{close:i,visible:r}=de("addContent"),[n]=D(k=>[k.setBudget]),p=ae({mode:"onChange"}),{watch:c,setValue:a,reset:d}=p,[x,j]=g.useState(!1),[M,N]=g.useState("");g.useEffect(()=>()=>{N(""),s(0),d()},[r,d]);const w=c("inputType"),T=c("source"),Y=c("longitude"),Z=c("latitude"),A=c("source"),q=F(T);g.useEffect(()=>{a("inputType",$e(A))},[A,a]);const V=()=>{i()},_=()=>{s(t+1)},W=()=>{s(t-1)},H=p.handleSubmit(async k=>{j(!0);try{await G(k,w,n),ue("Content Added"),V()}catch(f){let E=h;if((f==null?void 0:f.status)===400){const v=await f.json();E=v.errorCode||(v==null?void 0:v.status)||h}else f instanceof Error&&(E=f.message);N(String(E))}finally{j(!1)}});return e.jsx(ce,{id:"addContent",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(le,{...p,children:e.jsxs("form",{id:"add-node-form",onSubmit:H,children:[t===0&&e.jsx(Ze,{allowNextStep:q,onNextStep:_,type:w}),t===1&&e.jsx(e.Fragment,{children:L(w)?e.jsx(Ve,{onNextStep:_,onPrevStep:W,type:w,value:T}):e.jsx(Pe,{form:p,latitude:Z,longitude:Y,onNextStep:_})}),t===2&&e.jsx(ke,{error:M,loading:x,onClick:()=>null,type:w})]})})})};export{lt as AddContentModal};
