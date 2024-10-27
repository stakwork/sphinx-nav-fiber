import{aB as j,aC as E,aD as b,aE as R,aF as $,aG as D,aH as U,aI as G,t as p,v as u,z as O,r as f,j as e,F as r,T as C,aJ as J,aA as K,q as Q,az as m,aK as X,a0 as ee,aL as te,aM as se,Z as ne,P as oe,aN as re}from"./index-7411281d.js";import{aL as ae,B as z,ah as ie,u as ce,a0 as le,a1 as de}from"./index-51425417.js";import{B as ue}from"./index-e09d0c7a.js";import{S as pe}from"./index-708b3741.js";import{e as xe}from"./index.esm-6e812b35.js";import{C as he}from"./ClipLoader-9b8d8b68.js";import{T as fe}from"./index-11c18f7c.js";const A=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,we=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ge=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,me=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ye=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,be=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,je=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Se=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ve=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,_e=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Ee=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/,Re=/https:\/\/github\.com\/[\w-]+\/[\w-]+/;async function Ce(t){try{const n=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return(n==null?void 0:n.includes("application/rss+xml"))??!1}catch{return!1}}async function ze(t){return[ge,Ee,we,me,ye,je].some(n=>n.test(t))?$:ve.test(t)?E:A.test(t)?j:be.test(t)?D:Se.test(t)?b:Re.test(t)?R:_e.test(t)?await Ce(t)?b:U:G}const Be=(t,s="")=>{const o=(s===j?A:/@(\w+)/).exec(t);return o?o[1]:null},_=t=>!!t&&[j,E,b,R].includes(t),Te=({onClick:t,loading:s,type:n,error:o})=>{const y=O(i=>i.budget),[a,x]=f.useState(10),d=_(n)?"radar":"add_node";return f.useEffect(()=>{(async()=>{try{const c=await J(d);x(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[d]),e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs($e,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[a," sats"]})]}),e.jsxs(Ae,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ae(y)," sats"]})]})]}),e.jsx(r,{children:e.jsx(z,{color:"secondary","data-testid":"check-icon",disabled:s||!!o,onClick:t,size:"large",startIcon:s?e.jsx(L,{children:e.jsx(he,{color:u.lightGray,size:12})}):e.jsxs(L,{children:[" ",e.jsx(ie,{})]}),type:"submit",variant:"contained",children:"Approve"})}),o?e.jsx(Pe,{children:e.jsxs(Ne,{children:[e.jsx(xe,{className:"errorIcon"}),e.jsx("span",{children:o})]})}):null]})},$e=p(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ie=/^(https?:\/\/)/g,Le=/(www\.)?/g,De=/[\w-]+(\.[\w-]+)*/g,Ue=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Ge=/(\/[^\s?]*)?/g,Oe=/(\?[^\s]*)?/g,Z=new RegExp(`${Ie.source}${Le.source}${De.source}${Ue.source}?${Ge.source}${Oe.source}$`,"i"),M=t=>{if(t==null?void 0:t.match(Z)){const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}return!1},Ze=({type:t,onNextStep:s,allowNextStep:n})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(Me,{children:"Add Content"})})}),e.jsx(r,{mb:12,children:e.jsx(fe,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...K,...t!==$?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:M}}:{}}})}),e.jsx(r,{children:e.jsx(z,{color:"secondary","data-testid":"add-content-btn",disabled:!n,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Me=p(C)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,T={[j]:{label:"Twitter handle",img:"twitter_default.svg"},[E]:{label:"Youtube channel",img:"youtube_default.svg"},[b]:{label:"RSS Feed",img:"rss_feed.svg"},[R]:{label:"GitHub Repository",img:"github_default.svg"}},Fe=({onNextStep:t,onPrevStep:s,type:n,value:o})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(We,{children:"Source Type"})})}),e.jsxs(r,{mb:20,children:[e.jsxs(qe,{children:[e.jsx("img",{alt:T[n].label,className:"badge__img",src:T[n].img}),e.jsx(Ye,{children:T[n].label})]}),e.jsx(He,{children:Be(o,n)??o})]}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(Ve,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(z,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),He=p(r)`
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
`,F=async(t,s,n,o)=>{const y=_(s)?"radar":"add_node",a={};if(s===$)a.media_url=t.source,a.content_type="audio_video";else if(s===D){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const c=/\/status\/(\d+)/,l=t.source.match(c);if(l!=null&&l[1]){const[,S]=l;a.tweet_id=S}}else a.tweet_id=t.source;a.content_type="tweet"}else if(s===U)a.content_type="webpage",a.web_page=t.source;else if(s===G)a.content_type="document",a.text=t.source;else if(s===j){const[,i]=(t.source||"").match(A)||[];if(i)a.source=i,a.source_type=s;else return}else(s===E||s===b||s===R)&&(a.source=t.source,a.source_type=s);t.latitude&&t.longitude&&(a.latitude=t.latitude,a.longitude=t.longitude);let x="",d;X?d=await te.enable():d=await ee.enable(),a.pubkey=d==null?void 0:d.pubkey,x=await se();try{const i=await ne.post(`/${y}`,JSON.stringify(a),{Authorization:x});if(await oe(n),i.data.project_id&&o(i.data.project_id),i.error){const{message:c}=i.error;throw new Error(c)}}catch(i){if(i.status===402)await re(n),await F(t,s,n,o);else{let c=m;if(i.status===400)try{const l=await i.json();c=l.message||l.status||(l==null?void 0:l.errorCode)||m}catch{c=m}else i instanceof Error&&(c=i.message||m);throw new Error(c)}}},nt=()=>{const[t,s]=f.useState(0),{close:n,visible:o}=ce("addContent"),{setBudget:y}=O(g=>g),{setRunningProjectId:a}=Q(g=>g),x=le({mode:"onChange"}),{watch:d,setValue:i,reset:c}=x,[l,S]=f.useState(!1),[H,k]=f.useState("");f.useEffect(()=>()=>{k(""),s(0),c()},[o,c]);const w=d("inputType"),N=d("source"),P=d("source"),W=M(N);f.useEffect(()=>{(async()=>{const h=await ze(P);i("inputType",h)})()},[P,i]);const Y=()=>{n()},I=()=>{s(t===0?_(w)?1:2:t+1)},q=()=>{s(t-1)},V=x.handleSubmit(async g=>{S(!0);try{await F(g,w,y,a),pe("Content Added"),Y()}catch(h){let B=m;if((h==null?void 0:h.status)===400){const v=await h.json();B=v.errorCode||(v==null?void 0:v.status)||m}else h instanceof Error&&(B=h.message);k(String(B))}finally{S(!1)}});return e.jsx(ue,{id:"addContent",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(de,{...x,children:e.jsxs("form",{id:"add-node-form",onSubmit:V,children:[t===0&&e.jsx(Ze,{allowNextStep:W,onNextStep:I,type:w}),t===1&&_(w)&&e.jsx(Fe,{onNextStep:I,onPrevStep:q,type:w,value:N}),t===2&&e.jsx(Te,{error:H,loading:l,onClick:()=>null,type:w})]})})})};export{nt as AddContentModal};
