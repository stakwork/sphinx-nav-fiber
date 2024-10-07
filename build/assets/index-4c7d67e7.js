import{b1 as j,b2 as E,b3 as y,b4 as R,b5 as T,b6 as U,b7 as D,b8 as O,p,q as u,D as G,r as h,j as e,F as r,b9 as J,E as C,ba as K,b0 as Q,U as X,x as ee,a$ as m,bb as te,ai as se,bc as ne,bd as oe,ah as re,be as ie,Q as ae}from"./index-e12ed714.js";import{B as z,z as ce,F as le}from"./index-5eef59ea.js";import{B as de}from"./index-7b044c82.js";import{S as ue}from"./index-9e18a5e5.js";import{e as pe}from"./index.esm-bfc5a010.js";import{C as xe}from"./CheckIcon-68e9c7f4.js";import{C as fe}from"./ClipLoader-94095adf.js";import{T as he}from"./index-9de01744.js";const A=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,we=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ge=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,me=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,be=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,ye=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,je=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Se=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ve=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,_e=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Ee=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/,Re=/https:\/\/github\.com\/[\w-]+\/[\w-]+/;async function Ce(t){try{const n=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return(n==null?void 0:n.includes("application/rss+xml"))??!1}catch{return!1}}async function ze(t){return[ge,Ee,we,me,be,je].some(n=>n.test(t))?T:ve.test(t)?E:A.test(t)?j:ye.test(t)?U:Se.test(t)?y:Re.test(t)?R:_e.test(t)?await Ce(t)?y:D:O}const $e=(t,s="")=>{const o=(s===j?A:/@(\w+)/).exec(t);return o?o[1]:null},_=t=>!!t&&[j,E,y,R].includes(t),Be=({onClick:t,loading:s,type:n,error:o})=>{const b=G(a=>a.budget),[i,x]=h.useState(10),d=_(n)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await K(d);x(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[d]),e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[i," sats"]})]}),e.jsxs(Ae,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(b)," sats"]})]})]}),e.jsx(r,{children:e.jsx(z,{color:"secondary","data-testid":"check-icon",disabled:s||!!o,onClick:t,size:"large",startIcon:s?e.jsx(L,{children:e.jsx(fe,{color:u.lightGray,size:12})}):e.jsxs(L,{children:[" ",e.jsx(xe,{})]}),type:"submit",variant:"contained",children:"Approve"})}),o?e.jsx(Pe,{children:e.jsxs(Ne,{children:[e.jsx(pe,{className:"errorIcon"}),e.jsx("span",{children:o})]})}):null]})},Te=p(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${u.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${u.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${u.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,Ae=p(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${u.secondaryText4};
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
`,ke=p(C)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ne=p(r)`
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
`,Pe=p(r)`
  display: flex;
  align-items: center;
  color: ${u.primaryRed};
  position: relative;
  margin-top: 20px;
`,L=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Ie=/^(https?:\/\/)/g,Le=/(www\.)?/g,Ue=/[\w-]+(\.[\w-]+)*/g,De=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Oe=/(\/[^\s?]*)?/g,Ge=/(\?[^\s]*)?/g,Z=new RegExp(`${Ie.source}${Le.source}${Ue.source}${De.source}?${Oe.source}${Ge.source}$`,"i"),F=t=>{if(t==null?void 0:t.match(Z)){const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}return!1},Ze=({type:t,onNextStep:s,allowNextStep:n})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Add Content"})})}),e.jsx(r,{mb:12,children:e.jsx(he,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...Q,...t!==T?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:F}}:{}}})}),e.jsx(r,{children:e.jsx(z,{color:"secondary","data-testid":"add-content-btn",disabled:!n,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Fe=p(C)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,B={[j]:{label:"Twitter handle",img:"twitter_default.svg"},[E]:{label:"Youtube channel",img:"youtube_default.svg"},[y]:{label:"RSS Feed",img:"rss_feed.svg"},[R]:{label:"GitHub Repository",img:"github_default.svg"}},Me=({onNextStep:t,onPrevStep:s,type:n,value:o})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(We,{children:"Source Type"})})}),e.jsxs(r,{mb:20,children:[e.jsxs(qe,{children:[e.jsx("img",{alt:B[n].label,className:"badge__img",src:B[n].img}),e.jsx(Ye,{children:B[n].label})]}),e.jsx(He,{children:$e(o,n)??o})]}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(Ve,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(z,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),He=p(r)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 15px;
  color: ${u.GRAY3};
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`,We=p(C)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Ye=p(C)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${u.white};
`,qe=p(r)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Ve=p(z)`
  && {
    background: ${u.white};
    color: ${u.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${u.white};
      color: ${u.BG2};
    }
  }
`,M=async(t,s,n,o)=>{const b=_(s)?"radar":"add_node",i={};if(s===T)i.media_url=t.source,i.content_type="audio_video";else if(s===U){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const c=/\/status\/(\d+)/,l=t.source.match(c);if(l!=null&&l[1]){const[,S]=l;i.tweet_id=S}}else i.tweet_id=t.source;i.content_type="tweet"}else if(s===D)i.content_type="webpage",i.web_page=t.source;else if(s===O)i.content_type="document",i.text=t.source;else if(s===j){const[,a]=(t.source||"").match(A)||[];if(a)i.source=a,i.source_type=s;else return}else(s===E||s===y||s===R)&&(i.source=t.source,i.source_type=s);t.latitude&&t.longitude&&(i.latitude=t.latitude,i.longitude=t.longitude);let x="",d;te?d=await ne.enable():d=await se.enable(),i.pubkey=d==null?void 0:d.pubkey,x=await oe();try{const a=await re.post(`/${b}`,JSON.stringify(i),{Authorization:x});if(a.data.project_id&&o(a.data.project_id),a.error){const{message:c}=a.error;throw new Error(c)}}catch(a){if(a.status===402)await ie(n),await ae(n),await M(t,s,n,o);else{let c=m;if(a.status===400)try{const l=await a.json();c=l.message||l.status||(l==null?void 0:l.errorCode)||m}catch{c=m}else a instanceof Error&&(c=a.message||m);throw new Error(c)}}},ot=()=>{const[t,s]=h.useState(0),{close:n,visible:o}=X("addContent"),{setBudget:b}=G(g=>g),{setRunningProjectId:i}=ee(g=>g),x=ce({mode:"onChange"}),{watch:d,setValue:a,reset:c}=x,[l,S]=h.useState(!1),[H,k]=h.useState("");h.useEffect(()=>()=>{k(""),s(0),c()},[o,c]);const w=d("inputType"),N=d("source"),P=d("source"),W=F(N);h.useEffect(()=>{(async()=>{const f=await ze(P);a("inputType",f)})()},[P,a]);const Y=()=>{n()},I=()=>{s(t===0?_(w)?1:2:t+1)},q=()=>{s(t-1)},V=x.handleSubmit(async g=>{S(!0);try{await M(g,w,b,i),ue("Content Added"),Y()}catch(f){let $=m;if((f==null?void 0:f.status)===400){const v=await f.json();$=v.errorCode||(v==null?void 0:v.status)||m}else f instanceof Error&&($=f.message);k(String($))}finally{S(!1)}});return e.jsx(de,{id:"addContent",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(le,{...x,children:e.jsxs("form",{id:"add-node-form",onSubmit:V,children:[t===0&&e.jsx(Ze,{allowNextStep:W,onNextStep:I,type:w}),t===1&&_(w)&&e.jsx(Me,{onNextStep:I,onPrevStep:q,type:w,value:N}),t===2&&e.jsx(Be,{error:H,loading:l,onClick:()=>null,type:w})]})})})};export{ot as AddContentModal};
