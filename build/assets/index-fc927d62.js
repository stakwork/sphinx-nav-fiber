import{aS as C,Y as S,w as b,aT as I,R as $,aU as U,aV as D,f as x,h as l,y as O,r as g,j as e,F as o,aW as K,T as y,aX as X,D as Q,B as ee,aY as f,M as te,o as se,aZ as oe,O as ne,N as ie,P as re,V as ae}from"./index-df064103.js";import{B as w,C as le,c as ce,F as de}from"./react-toastify.esm-ce8a56f6.js";import{B as ue}from"./index-ff675c0b.js";import{S as xe}from"./index-3d9b0e0b.js";import{i as pe}from"./index.esm-df329d64.js";import{C as ge}from"./CheckIcon-393bd5e9.js";import{T as B}from"./index-b470549c.js";import"./InfoIcon-8635b005.js";const R=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,he=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,we=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,be=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,ye=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,je=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ve=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,Se=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,$e=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function _e(t){return[fe,$e,he,we,me,ye].some(i=>i.test(t))?C:ve.test(t)?S:R.test(t)?b:be.test(t)?I:je.test(t)?$:Se.test(t)?U:D}const Ee=(t,s="")=>{const r=(s===b?R:/@(\w+)/).exec(t);return r?r[1]:null},N=t=>!!t&&[b,S,$].includes(t),ke=({onClick:t,loading:s,type:i,error:r})=>{const n=O(d=>d.budget),[p,c]=g.useState(10),a=N(i)?"radar":"add_node";return g.useEffect(()=>{(async()=>{try{const u=await X(a);c(u.data.price)}catch(u){console.error("cannot fetch",u)}})()},[a]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ze,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[K(n)," sats"]})]})]}),e.jsx(o,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:s||!!r,onClick:t,size:"large",startIcon:s?e.jsx(P,{children:e.jsx(le,{color:"gray",size:12})}):e.jsxs(P,{children:[" ",e.jsx(ge,{})]}),type:"submit",variant:"contained",children:"Approve"})}),r?e.jsxs(Ne,{role:"tooltip",children:[e.jsxs(Re,{children:[e.jsx(pe,{className:"errorIcon"}),e.jsx("span",{children:r})]}),e.jsx("div",{className:"tooltip",children:r})]}):null]})},ze=x(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ce=x(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Re=x(o)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;

  .errorIcon {
    display: block;
    font-size: 13px;
    min-height: 13px;
    min-width: 13px;
  }

  span {
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
  }
`,Ne=x(o)`
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
`,P=x.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Ae=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Le=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Te=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Pe=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Ie=({latitude:t,longitude:s,onNextStep:i,form:r})=>{const n=()=>{const{errors:c}=r.formState;Object.keys(c).length||i()},p=()=>{r.setValue("latitude",""),r.setValue("longitude",""),i()};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Ue,{children:"Add Location"})})}),e.jsxs(o,{direction:"row",mb:20,children:[e.jsx(o,{basis:"100px",grow:1,children:e.jsx(B,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Te},validate:{latitude:Ae}}})}),e.jsx(o,{basis:"100px",grow:1,ml:20,children:e.jsx(B,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Pe},validate:{longitude:Le}}})})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(De,{color:"secondary","data-testid":"skip-location-btn",disabled:!1,onClick:p,size:"large",variant:"contained",children:"Skip"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!t||!s,onClick:n,size:"large",variant:"contained",children:"Next"})})]})]})},Ue=x(y)`
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
`,Oe=/^(https?:\/\/)/g,Ze=/(www\.)?/g,Fe=/[\w-]+(\.[\w-]+)*/g,Ge=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Me=/(\/[^\s?]*)?/g,Ve=/(\?[^\s]*)?/g,Z=new RegExp(`${Oe.source}${Ze.source}${Fe.source}${Ge.source}?${Me.source}${Ve.source}$`,"i"),F=t=>Z.test(t),Ye=({type:t,onNextStep:s,allowNextStep:i})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(We,{children:"Add Content"})})}),e.jsx(o,{mb:12,children:e.jsx(B,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...Q,...t!==C?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:F}}:{}}})}),e.jsx(o,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!i,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),We=x(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z={[b]:{label:"Twitter handle",img:"twitter_default.svg"},[S]:{label:"Youtube channel",img:"youtube_default.svg"},[$]:{label:"RSS Feed",img:"rss_feed.svg"}},qe=({onNextStep:t,onPrevStep:s,type:i,value:r})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Je,{children:"Source Type"})})}),e.jsxs(o,{mb:20,children:[e.jsxs(Xe,{children:[e.jsx("img",{alt:z[i].label,className:"badge__img",src:z[i].img}),e.jsx(Ke,{children:z[i].label})]}),e.jsx(He,{children:Ee(r,i)??r})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(Qe,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),He=x(o)`
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
`,Je=x(y)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Ke=x(y)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,Xe=x(o)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Qe=x(w)`
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
`,G=async(t,s,i)=>{const r=N(s)?"radar":"add_node",n={};if(s===C)n.media_url=t.source,n.content_type="audio_video";else if(s===I){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const d=/\/status\/(\d+)/,u=t.source.match(d);if(u!=null&&u[1]){const[,j]=u;n.tweet_id=j}}else n.tweet_id=t.source;n.content_type="tweet"}else if(s===U)n.content_type="webpage",n.web_page=t.source;else if(s===D)n.content_type="document",n.text=t.source;else if(s===b){const[,a]=(t.source||"").match(R)||[];if(a)n.source=a,n.source_type=s;else return}else(s===S||s===$)&&(n.source=t.source,n.source_type=s);t.latitude&&t.longitude&&(n.latitude=t.latitude,n.longitude=t.longitude);let p="",c;te?c=await oe.enable():c=await se.enable(),n.pubkey=c==null?void 0:c.pubkey,p=await ne();try{const a=await ie.post(`/${r}`,JSON.stringify(n),{Authorization:p});if(a.error){const{message:d}=a.error;throw new Error(d)}}catch(a){if(a.status===402)await re(i),await ae(i),await G(t,s,i);else{let d=f;if(a.status===400)try{const u=await a.json();d=u.message||u.errorCode||f}catch{d=f}else a instanceof Error&&(d=a.message||f);throw new Error(d)}}},lt=()=>{const[t,s]=g.useState(0),{close:i,visible:r}=ee("addContent"),[n]=O(E=>[E.setBudget]),p=ce({mode:"onChange"}),{watch:c,setValue:a,reset:d}=p,[u,j]=g.useState(!1),[M,A]=g.useState("");g.useEffect(()=>()=>{A(""),s(0),d()},[r,d]);const m=c("inputType"),L=c("source"),V=c("longitude"),Y=c("latitude"),T=c("source"),W=F(L);g.useEffect(()=>{a("inputType",_e(T))},[T,a]);const q=()=>{i()},_=()=>{s(t+1)},H=()=>{s(t-1)},J=p.handleSubmit(async E=>{j(!0);try{await G(E,m,n),xe("Content Added"),q()}catch(h){let k=f;if((h==null?void 0:h.status)===400){const v=await h.json();k=v.errorCode||(v==null?void 0:v.status)||f}else h instanceof Error&&(k=h.message);A(String(k))}finally{j(!1)}});return e.jsx(ue,{id:"addContent",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(de,{...p,children:e.jsxs("form",{id:"add-node-form",onSubmit:J,children:[t===0&&e.jsx(Ye,{allowNextStep:W,onNextStep:_,type:m}),t===1&&e.jsx(e.Fragment,{children:N(m)?e.jsx(qe,{onNextStep:_,onPrevStep:H,type:m,value:L}):e.jsx(Ie,{form:p,latitude:Y,longitude:V,onNextStep:_})}),t===2&&e.jsx(ke,{error:M,loading:u,onClick:()=>null,type:m})]})})})};export{lt as AddContentModal};
