import{s as c,j as e,c as l,ae as B,Y as y,a as w,af as N,R as j,ag as P,ah as I,u as Z,r as f,F as o,T as m,b as W,x as J,n as K,g as Q,ai as T,d as X,a4 as ee}from"./index-8fb39b9b.js";import{Q as te,ap as L,av as se,B as h,C as oe,aw as ne,k as ie,F as re,ax as ae}from"./react-toastify.esm-309129e5.js";import{B as le}from"./index-d1e98921.js";import{u as ce}from"./index-2142cd26.js";import{M as de,h as ue}from"./index.esm-b92f54d4.js";import{C as xe}from"./CheckIcon-1674d40c.js";import{T as C}from"./index-f15bce2a.js";import"./InfoIcon-624f7e1b.js";const pe=c(te)`
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
`,fe=c.div`
  display: Flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,he=(t,i)=>{let s="";const r="uniqueToastId";switch(i){case"source":s="Source Added";break;case"addContent":s="Content Submitted";break;case"additem":t&&(s="Item Added");break;case"edge":s="Link Created";break;default:s="Success"}L.isActive(r)||L(e.jsxs(fe,{children:[e.jsx(de,{color:l.white,fontSize:24}),s]}),{toastId:r,autoClose:5e3})},ge=()=>e.jsx("div",{children:e.jsx(pe,{hideProgressBar:!0,position:"top-right"})}),E=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,we=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,me=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,be=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ye=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,je=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,ve=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Se=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,_e=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ke=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,ze=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function Ce(t){return[me,ze,we,be,ye,ve].some(s=>s.test(t))?B:_e.test(t)?y:E.test(t)?w:je.test(t)?N:Se.test(t)?j:ke.test(t)?P:I}const Be=(t,i="")=>{const r=(i===w?E:/@(\w+)/).exec(t);return r?r[1]:null},A=t=>!!t&&[w,y,j].includes(t),Ee=({onClick:t,loading:i,type:s,error:r})=>{const p=Z(d=>d.budget),[n,u]=f.useState(10),a=A(s)?"radar":"add_node";return f.useEffect(()=>{(async()=>{try{const x=await ne(a);u(x.data.price)}catch(x){console.error("cannot fetch",x)}})()},[a]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Re,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Ae,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[n," sats"]})]}),e.jsxs($e,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[se(p)," sats"]})]})]}),e.jsx(o,{children:e.jsx(h,{color:"secondary","data-testid":"check-icon",disabled:i||!!r,onClick:t,size:"large",startIcon:i?e.jsx(oe,{size:24}):e.jsx(xe,{}),type:"submit",variant:"contained",children:"Approve"})}),r?e.jsxs(Le,{role:"tooltip",children:[e.jsxs(Te,{children:[e.jsx(ue,{fontSize:13}),e.jsx("span",{children:r})]}),e.jsx("div",{className:"tooltip",children:r})]}):null]})},Ae=c(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,$e=c(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Re=c(m)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Te=c(o)`
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
`,Le=c(o)`
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
`,Ne=t=>{const i=Number(t);return i<-90||i>90?"Latitude must be between -90 and 90.":!i&&i!==0?"Latitude is required.":!0},Pe=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Ie=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Ze=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Ue=({latitude:t,longitude:i,onNextStep:s,form:r})=>{const p=()=>{const{errors:u}=r.formState;Object.keys(u).length||s()},n=()=>{r.setValue("latitude",""),r.setValue("longitude",""),s()};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Add Location"})})}),e.jsxs(o,{direction:"row",mb:20,children:[e.jsx(o,{basis:"100px",grow:1,children:e.jsx(C,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Ie},validate:{latitude:Ne}}})}),e.jsx(o,{basis:"100px",grow:1,ml:20,children:e.jsx(C,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Ze},validate:{longitude:Pe}}})})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(Oe,{color:"secondary",disabled:!1,onClick:n,size:"large",variant:"contained",children:"Skip"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(h,{color:"secondary",disabled:!t||!i,onClick:p,size:"large",variant:"contained",children:"Next"})})]})]})},Fe=c(m)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Oe=c(h)`
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
`,U=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function F(t){return!!U.test(t)}const Ge=({type:t,onNextStep:i,allowNextStep:s})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Me,{children:"Add Content"})})}),e.jsx(o,{mb:12,children:e.jsx(C,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...W,...t!==B?{pattern:{message:"Please enter a valid URL",value:U},validate:{source:F}}:{}}})}),e.jsx(o,{children:e.jsx(h,{color:"secondary",disabled:!s,onClick:i,size:"large",variant:"contained",children:"Next"})})]}),Me=c(m)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z={[w]:{label:"Twitter handle",img:"twitter_default.svg"},[y]:{label:"Youtube channel",img:"youtube_default.svg"},[j]:{label:"RSS Feed",img:"rss_feed.svg"}},De=({onNextStep:t,onPrevStep:i,type:s,value:r})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Ve,{children:"Source Type"})})}),e.jsxs(o,{mb:20,children:[e.jsxs(He,{children:[e.jsx("img",{alt:z[s].label,className:"badge__img",src:z[s].img}),e.jsx(qe,{children:z[s].label})]}),e.jsx(Ye,{children:Be(r,s)??r})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(We,{color:"secondary",disabled:!1,onClick:()=>i(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(h,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),Ye=c(o)`
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
`,Ve=c(m)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,qe=c(m)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,He=c(o)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,We=c(h)`
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
`,O=async(t,i,s,r)=>{const p=A(s)?"radar":"add_node",n={};if(s===B)n.media_url=t.source,n.content_type="audio_video";else if(s===N){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const d=/\/status\/(\d+)/,x=t.source.match(d);if(x!=null&&x[1]){const[,b]=x;n.tweet_id=b}}else n.tweet_id=t.source;n.content_type="tweet"}else if(s===P)n.content_type="webpage",n.web_page=t.source;else if(s===I)n.content_type="document",n.text=t.source;else if(s===w){const[,a]=(t.source||"").match(E)||[];if(a)n.source=a,n.source_type=s;else return}else(s===y||s===j)&&(n.source=t.source,n.source_type=s);t.latitude&&t.longitude&&(n.latitude=t.latitude,n.longitude=t.longitude);let u="";await J(async()=>{const a=await X.enable();n.pubkey=a==null?void 0:a.pubkey,u=await ee()});try{const a=await K.post(`/${p}`,JSON.stringify(n),{Authorization:u});if(a.error){const{message:d}=a.error;throw new Error(d)}he(!1,"addContent"),i()}catch(a){if(a.status===402&&(await ae(r),await Q(r),await O(t,i,s,r)),a.status===400){const d=await a.json();throw new Error((d==null?void 0:d.status)||T)}if(a instanceof Error)throw new Error(a.message||T)}},nt=()=>{const[t,i]=f.useState(0),{close:s,visible:r}=ce("addContent"),[p]=Z(_=>[_.setBudget]),n=ie({mode:"onChange"}),{watch:u,setValue:a,reset:d}=n,[x,b]=f.useState(!1),[G,v]=f.useState("");f.useEffect(()=>()=>{v(""),i(0),d()},[r,d]);const g=u("inputType"),$=u("source"),M=u("longitude"),D=u("latitude"),R=u("source"),Y=F($);f.useEffect(()=>{a("inputType",Ce(R))},[R,a]);const V=()=>{s()},S=()=>{i(t+1)},q=()=>{i(t-1)},H=n.handleSubmit(async _=>{b(!0);try{await O(_,V,g,p)}catch(k){k instanceof Error&&v(k.message),v(String(k))}finally{b(!1)}});return e.jsxs(le,{id:"addContent",kind:"small",onClose:s,preventOutsideClose:!0,children:[e.jsx(re,{...n,children:e.jsxs("form",{id:"add-node-form",onSubmit:H,children:[t===0&&e.jsx(Ge,{allowNextStep:Y,onNextStep:S,type:g}),t===1&&e.jsx(e.Fragment,{children:A(g)?e.jsx(De,{onNextStep:S,onPrevStep:q,type:g,value:$}):e.jsx(Ue,{form:n,latitude:D,longitude:M,onNextStep:S})}),t===2&&e.jsx(Ee,{error:G,loading:x,onClick:()=>null,type:g})]})}),e.jsx(ge,{})]})};export{nt as AddContentModal};
