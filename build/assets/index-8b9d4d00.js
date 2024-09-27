import{aX as y,aY as _,aZ as m,a_ as E,a$ as B,b0 as L,b1 as U,b2 as D,o as u,p as d,C as O,r as h,j as e,F as r,b3 as q,D as R,b4 as J,aW as K,Q,aV as g,b5 as X,ab as ee,b6 as te,b7 as se,aa as ne,b8 as oe,O as re}from"./index-bf9689fe.js";import{B as C,i as ie,F as ae}from"./index-9b9b3148.js";import{B as ce}from"./index-33a42653.js";import{S as le}from"./index-b77cb11f.js";import{e as de}from"./index.esm-4897c75e.js";import{C as ue}from"./CheckIcon-915f1eb0.js";import{C as pe}from"./ClipLoader-02d3ad3d.js";import{T as xe}from"./index-15f48481.js";import"./InfoIcon-672d5e1d.js";const T=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,he=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,we=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ge=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,me=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,ye=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,be=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,je=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,Se=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,ve=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/,_e=/https:\/\/github\.com\/[\w-]+\/[\w-]+/;async function Ee(t){try{const n=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return(n==null?void 0:n.includes("application/rss+xml"))??!1}catch{return!1}}async function Re(t){return[he,ve,fe,we,ge,ye].some(n=>n.test(t))?B:je.test(t)?_:T.test(t)?y:me.test(t)?L:be.test(t)?m:_e.test(t)?E:Se.test(t)?await Ee(t)?m:U:D}const Ce=(t,s="")=>{const o=(s===y?T:/@(\w+)/).exec(t);return o?o[1]:null},v=t=>!!t&&[y,_,m,E].includes(t),ze=({onClick:t,loading:s,type:n,error:o})=>{const i=O(l=>l.budget),[x,p]=h.useState(10),a=v(n)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await J(a);p(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[a]),e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(Te,{children:"Approve Cost"})})}),e.jsxs(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs($e,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[q(i)," sats"]})]})]}),e.jsx(r,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:s||!!o,onClick:t,size:"large",startIcon:s?e.jsx(I,{children:e.jsx(pe,{color:d.lightGray,size:12})}):e.jsxs(I,{children:[" ",e.jsx(ue,{})]}),type:"submit",variant:"contained",children:"Approve"})}),o?e.jsx(ke,{children:e.jsxs(Ae,{children:[e.jsx(de,{className:"errorIcon"}),e.jsx("span",{children:o})]})}):null]})},$e=u(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${d.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${d.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${d.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,Be=u(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${d.secondaryText4};
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
`,Te=u(R)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ae=u(r)`
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
`,ke=u(r)`
  display: flex;
  align-items: center;
  color: ${d.primaryRed};
  position: relative;
  margin-top: 20px;
`,I=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Ne=/^(https?:\/\/)/g,Pe=/(www\.)?/g,Ie=/[\w-]+(\.[\w-]+)*/g,Le=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Ue=/(\/[^\s?]*)?/g,De=/(\?[^\s]*)?/g,Z=new RegExp(`${Ne.source}${Pe.source}${Ie.source}${Le.source}?${Ue.source}${De.source}$`,"i"),G=t=>{if(t==null?void 0:t.match(Z)){const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}return!1},Oe=({type:t,onNextStep:s,allowNextStep:n})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(Ze,{children:"Add Content"})})}),e.jsx(r,{mb:12,children:e.jsx(xe,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...K,...t!==B?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:G}}:{}}})}),e.jsx(r,{children:e.jsx(C,{color:"secondary","data-testid":"add-content-btn",disabled:!n,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Ze=u(R)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$={[y]:{label:"Twitter handle",img:"twitter_default.svg"},[_]:{label:"Youtube channel",img:"youtube_default.svg"},[m]:{label:"RSS Feed",img:"rss_feed.svg"},[E]:{label:"GitHub Repository",img:"github_default.svg"}},Ge=({onNextStep:t,onPrevStep:s,type:n,value:o})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(Me,{children:"Source Type"})})}),e.jsxs(r,{mb:20,children:[e.jsxs(We,{children:[e.jsx("img",{alt:$[n].label,className:"badge__img",src:$[n].img}),e.jsx(He,{children:$[n].label})]}),e.jsx(Fe,{children:Ce(o,n)??o})]}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(Ye,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(C,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),Fe=u(r)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 15px;
  color: ${d.GRAY3};
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`,Me=u(R)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,He=u(R)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${d.white};
`,We=u(r)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Ye=u(C)`
  && {
    background: ${d.white};
    color: ${d.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${d.white};
      color: ${d.BG2};
    }
  }
`,F=async(t,s,n)=>{const o=v(s)?"radar":"add_node",i={};if(s===B)i.media_url=t.source,i.content_type="audio_video";else if(s===L){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const l=/\/status\/(\d+)/,c=t.source.match(l);if(c!=null&&c[1]){const[,b]=c;i.tweet_id=b}}else i.tweet_id=t.source;i.content_type="tweet"}else if(s===U)i.content_type="webpage",i.web_page=t.source;else if(s===D)i.content_type="document",i.text=t.source;else if(s===y){const[,a]=(t.source||"").match(T)||[];if(a)i.source=a,i.source_type=s;else return}else(s===_||s===m||s===E)&&(i.source=t.source,i.source_type=s);t.latitude&&t.longitude&&(i.latitude=t.latitude,i.longitude=t.longitude);let x="",p;X?p=await te.enable():p=await ee.enable(),i.pubkey=p==null?void 0:p.pubkey,x=await se();try{const a=await ne.post(`/${o}`,JSON.stringify(i),{Authorization:x});if(a.error){const{message:l}=a.error;throw new Error(l)}}catch(a){if(a.status===402)await oe(n),await re(n),await F(t,s,n);else{let l=g;if(a.status===400)try{const c=await a.json();l=c.message||c.status||(c==null?void 0:c.errorCode)||g}catch{l=g}else a instanceof Error&&(l=a.message||g);throw new Error(l)}}},nt=()=>{const[t,s]=h.useState(0),{close:n,visible:o}=Q("addContent"),{setBudget:i}=O(j=>j),x=ie({mode:"onChange"}),{watch:p,setValue:a,reset:l}=x,[c,b]=h.useState(!1),[M,A]=h.useState("");h.useEffect(()=>()=>{A(""),s(0),l()},[o,l]);const w=p("inputType"),k=p("source"),N=p("source"),H=G(k);h.useEffect(()=>{(async()=>{const f=await Re(N);a("inputType",f)})()},[N,a]);const W=()=>{n()},P=()=>{s(t===0?v(w)?1:2:t+1)},Y=()=>{s(t-1)},V=x.handleSubmit(async j=>{b(!0);try{await F(j,w,i),le("Content Added"),W()}catch(f){let z=g;if((f==null?void 0:f.status)===400){const S=await f.json();z=S.errorCode||(S==null?void 0:S.status)||g}else f instanceof Error&&(z=f.message);A(String(z))}finally{b(!1)}});return e.jsx(ce,{id:"addContent",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(ae,{...x,children:e.jsxs("form",{id:"add-node-form",onSubmit:V,children:[t===0&&e.jsx(Oe,{allowNextStep:H,onNextStep:P,type:w}),t===1&&v(w)&&e.jsx(Ge,{onNextStep:P,onPrevStep:Y,type:w,value:k}),t===2&&e.jsx(ze,{error:M,loading:c,onClick:()=>null,type:w})]})})})};export{nt as AddContentModal};
