import{aX as B,aY as S,aZ as m,a_ as I,a$ as v,b0 as _,b1 as U,b2 as O,o as u,p as d,C as D,r as f,j as e,F as o,b3 as q,D as E,b4 as J,aW as K,Q,aV as g,b5 as X,ab as ee,b6 as te,b7 as se,aa as ne,b8 as oe,O as re}from"./index-5cb4ebc8.js";import{B as C,i as ie,F as ae}from"./index-72cdd01f.js";import{B as ce}from"./index-3d09e601.js";import{S as le}from"./index-02b50aac.js";import{e as de}from"./index.esm-3c53850e.js";import{C as ue}from"./CheckIcon-28a06def.js";import{C as xe}from"./ClipLoader-0a9bd744.js";import{T as pe}from"./index-f044788d.js";import"./InfoIcon-fcbe919c.js";const A=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,he=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,we=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ge=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,me=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,be=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ye=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,je=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,Se=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,ve=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/,_e=/https:\/\/github\.com\/[\w-]+\/[\w-]+/;function Ee(t){return[he,ve,fe,we,ge,be].some(i=>i.test(t))?B:je.test(t)?S:A.test(t)?m:me.test(t)?I:ye.test(t)?v:_e.test(t)?_:Se.test(t)?U:O}const Ce=(t,s="")=>{const n=(s===m?A:/@(\w+)/).exec(t);return n?n[1]:null},j=t=>!!t&&[m,S,v,_].includes(t),Re=({onClick:t,loading:s,type:i,error:n})=>{const r=D(l=>l.budget),[p,x]=f.useState(10),a=j(i)?"radar":"add_node";return f.useEffect(()=>{(async()=>{try{const c=await J(a);x(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[a]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Be,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ze,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs($e,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[q(r)," sats"]})]})]}),e.jsx(o,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:s||!!n,onClick:t,size:"large",startIcon:s?e.jsx(L,{children:e.jsx(xe,{color:d.lightGray,size:12})}):e.jsxs(L,{children:[" ",e.jsx(ue,{})]}),type:"submit",variant:"contained",children:"Approve"})}),n?e.jsx(ke,{children:e.jsxs(Ae,{children:[e.jsx(de,{className:"errorIcon"}),e.jsx("span",{children:n})]})}):null]})},ze=u(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,$e=u(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Be=u(E)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ae=u(o)`
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
`,ke=u(o)`
  display: flex;
  align-items: center;
  color: ${d.primaryRed};
  position: relative;
  margin-top: 20px;
`,L=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Ne=/^(https?:\/\/)/g,Te=/(www\.)?/g,Pe=/[\w-]+(\.[\w-]+)*/g,Le=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Ie=/(\/[^\s?]*)?/g,Ue=/(\?[^\s]*)?/g,Z=new RegExp(`${Ne.source}${Te.source}${Pe.source}${Le.source}?${Ie.source}${Ue.source}$`,"i"),G=t=>{if(t==null?void 0:t.match(Z)){const n=new URL(t).hostname;return n!=null&&n.startsWith("www.")?((n==null?void 0:n.match(/\./g))||[]).length>=2:((n==null?void 0:n.match(/\./g))||[]).length>=1}return!1},Oe=({type:t,onNextStep:s,allowNextStep:i})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(De,{children:"Add Content"})})}),e.jsx(o,{mb:12,children:e.jsx(pe,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...K,...t!==B?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:G}}:{}}})}),e.jsx(o,{children:e.jsx(C,{color:"secondary","data-testid":"add-content-btn",disabled:!i,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),De=u(E)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$={[m]:{label:"Twitter handle",img:"twitter_default.svg"},[S]:{label:"Youtube channel",img:"youtube_default.svg"},[v]:{label:"RSS Feed",img:"rss_feed.svg"},[_]:{label:"GitHub Repository",img:"github_default.svg"}},Ze=({onNextStep:t,onPrevStep:s,type:i,value:n})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Source Type"})})}),e.jsxs(o,{mb:20,children:[e.jsxs(We,{children:[e.jsx("img",{alt:$[i].label,className:"badge__img",src:$[i].img}),e.jsx(Me,{children:$[i].label})]}),e.jsx(Ge,{children:Ce(n,i)??n})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(Ye,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(C,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),Ge=u(o)`
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
`,Fe=u(E)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Me=u(E)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${d.white};
`,We=u(o)`
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
`,F=async(t,s,i)=>{const n=j(s)?"radar":"add_node",r={};if(s===B)r.media_url=t.source,r.content_type="audio_video";else if(s===I){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const l=/\/status\/(\d+)/,c=t.source.match(l);if(c!=null&&c[1]){const[,b]=c;r.tweet_id=b}}else r.tweet_id=t.source;r.content_type="tweet"}else if(s===U)r.content_type="webpage",r.web_page=t.source;else if(s===O)r.content_type="document",r.text=t.source;else if(s===m){const[,a]=(t.source||"").match(A)||[];if(a)r.source=a,r.source_type=s;else return}else(s===S||s===v||s===_)&&(r.source=t.source,r.source_type=s);t.latitude&&t.longitude&&(r.latitude=t.latitude,r.longitude=t.longitude);let p="",x;X?x=await te.enable():x=await ee.enable(),r.pubkey=x==null?void 0:x.pubkey,p=await se();try{const a=await ne.post(`/${n}`,JSON.stringify(r),{Authorization:p});if(a.error){const{message:l}=a.error;throw new Error(l)}}catch(a){if(a.status===402)await oe(i),await re(i),await F(t,s,i);else{let l=g;if(a.status===400)try{const c=await a.json();l=c.message||c.status||(c==null?void 0:c.errorCode)||g}catch{l=g}else a instanceof Error&&(l=a.message||g);throw new Error(l)}}},st=()=>{const[t,s]=f.useState(0),{close:i,visible:n}=Q("addContent"),{setBudget:r}=D(R=>R),p=ie({mode:"onChange"}),{watch:x,setValue:a,reset:l}=p,[c,b]=f.useState(!1),[M,k]=f.useState("");f.useEffect(()=>()=>{k(""),s(0),l()},[n,l]);const h=x("inputType"),N=x("source"),T=x("source"),W=G(N);f.useEffect(()=>{a("inputType",Ee(T))},[T,a]);const Y=()=>{i()},P=()=>{s(t===0?j(h)?1:2:t+1)},H=()=>{s(t-1)},V=p.handleSubmit(async R=>{b(!0);try{await F(R,h,r),le("Content Added"),Y()}catch(w){let z=g;if((w==null?void 0:w.status)===400){const y=await w.json();z=y.errorCode||(y==null?void 0:y.status)||g}else w instanceof Error&&(z=w.message);k(String(z))}finally{b(!1)}});return e.jsx(ce,{id:"addContent",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(ae,{...p,children:e.jsxs("form",{id:"add-node-form",onSubmit:V,children:[t===0&&e.jsx(Oe,{allowNextStep:W,onNextStep:P,type:h}),t===1&&j(h)&&e.jsx(Ze,{onNextStep:P,onPrevStep:H,type:h,value:N}),t===2&&e.jsx(Re,{error:M,loading:c,onClick:()=>null,type:h})]})})})};export{st as AddContentModal};
