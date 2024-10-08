import{aM as j,aN as E,aO as b,aP as R,aQ as $,aR as U,aS as D,aT as O,p,q as u,D as Z,r as h,j as e,F as r,aU as K,E as C,aV as Q,aL as J,Q as X,x as ee,aK as m,aW as te,ab as se,aX as ne,aY as oe,aa as re,aZ as ae,P as ie}from"./index-7a3b1cbd.js";import{B as z,q as ce,F as le}from"./index-df1dff91.js";import{B as de}from"./index-925ce5c6.js";import{S as ue}from"./index-a67c5a6a.js";import{e as pe}from"./index.esm-30ca5682.js";import{C as xe}from"./CheckIcon-28788406.js";import{C as fe}from"./ClipLoader-d350ab88.js";import{T as he}from"./index-0efe2a07.js";const A=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,we=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ge=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,me=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ye=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,be=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,je=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Se=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ve=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,_e=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Ee=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/,Re=/https:\/\/github\.com\/[\w-]+\/[\w-]+/;async function Ce(t){try{const n=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return(n==null?void 0:n.includes("application/rss+xml"))??!1}catch{return!1}}async function ze(t){return[ge,Ee,we,me,ye,je].some(n=>n.test(t))?$:ve.test(t)?E:A.test(t)?j:be.test(t)?U:Se.test(t)?b:Re.test(t)?R:_e.test(t)?await Ce(t)?b:D:O}const Be=(t,s="")=>{const o=(s===j?A:/@(\w+)/).exec(t);return o?o[1]:null},_=t=>!!t&&[j,E,b,R].includes(t),Te=({onClick:t,loading:s,type:n,error:o})=>{const y=Z(i=>i.budget),[a,x]=h.useState(10),d=_(n)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await Q(d);x(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[d]),e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs($e,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[a," sats"]})]}),e.jsxs(Ae,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[K(y)," sats"]})]})]}),e.jsx(r,{children:e.jsx(z,{color:"secondary","data-testid":"check-icon",disabled:s||!!o,onClick:t,size:"large",startIcon:s?e.jsx(L,{children:e.jsx(fe,{color:u.lightGray,size:12})}):e.jsxs(L,{children:[" ",e.jsx(xe,{})]}),type:"submit",variant:"contained",children:"Approve"})}),o?e.jsx(Pe,{children:e.jsxs(Ne,{children:[e.jsx(pe,{className:"errorIcon"}),e.jsx("span",{children:o})]})}):null]})},$e=p(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ie=/^(https?:\/\/)/g,Le=/(www\.)?/g,Ue=/[\w-]+(\.[\w-]+)*/g,De=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Oe=/(\/[^\s?]*)?/g,Ze=/(\?[^\s]*)?/g,G=new RegExp(`${Ie.source}${Le.source}${Ue.source}${De.source}?${Oe.source}${Ze.source}$`,"i"),M=t=>{if(t==null?void 0:t.match(G)){const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}return!1},Ge=({type:t,onNextStep:s,allowNextStep:n})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(Me,{children:"Add Content"})})}),e.jsx(r,{mb:12,children:e.jsx(he,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...J,...t!==$?{pattern:{message:"Please enter a valid URL",value:G},validate:{source:M}}:{}}})}),e.jsx(r,{children:e.jsx(z,{color:"secondary","data-testid":"add-content-btn",disabled:!n,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Me=p(C)`
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
`,F=async(t,s,n,o)=>{const y=_(s)?"radar":"add_node",a={};if(s===$)a.media_url=t.source,a.content_type="audio_video";else if(s===U){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const c=/\/status\/(\d+)/,l=t.source.match(c);if(l!=null&&l[1]){const[,S]=l;a.tweet_id=S}}else a.tweet_id=t.source;a.content_type="tweet"}else if(s===D)a.content_type="webpage",a.web_page=t.source;else if(s===O)a.content_type="document",a.text=t.source;else if(s===j){const[,i]=(t.source||"").match(A)||[];if(i)a.source=i,a.source_type=s;else return}else(s===E||s===b||s===R)&&(a.source=t.source,a.source_type=s);t.latitude&&t.longitude&&(a.latitude=t.latitude,a.longitude=t.longitude);let x="",d;te?d=await ne.enable():d=await se.enable(),a.pubkey=d==null?void 0:d.pubkey,x=await oe();try{const i=await re.post(`/${y}`,JSON.stringify(a),{Authorization:x});if(i.data.project_id&&o(i.data.project_id),i.error){const{message:c}=i.error;throw new Error(c)}}catch(i){if(i.status===402)await ae(n),await ie(n),await F(t,s,n,o);else{let c=m;if(i.status===400)try{const l=await i.json();c=l.message||l.status||(l==null?void 0:l.errorCode)||m}catch{c=m}else i instanceof Error&&(c=i.message||m);throw new Error(c)}}},ot=()=>{const[t,s]=h.useState(0),{close:n,visible:o}=X("addContent"),{setBudget:y}=Z(g=>g),{setRunningProjectId:a}=ee(g=>g),x=ce({mode:"onChange"}),{watch:d,setValue:i,reset:c}=x,[l,S]=h.useState(!1),[H,k]=h.useState("");h.useEffect(()=>()=>{k(""),s(0),c()},[o,c]);const w=d("inputType"),N=d("source"),P=d("source"),W=M(N);h.useEffect(()=>{(async()=>{const f=await ze(P);i("inputType",f)})()},[P,i]);const Y=()=>{n()},I=()=>{s(t===0?_(w)?1:2:t+1)},q=()=>{s(t-1)},V=x.handleSubmit(async g=>{S(!0);try{await F(g,w,y,a),ue("Content Added"),Y()}catch(f){let B=m;if((f==null?void 0:f.status)===400){const v=await f.json();B=v.errorCode||(v==null?void 0:v.status)||m}else f instanceof Error&&(B=f.message);k(String(B))}finally{S(!1)}});return e.jsx(de,{id:"addContent",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(le,{...x,children:e.jsxs("form",{id:"add-node-form",onSubmit:V,children:[t===0&&e.jsx(Ge,{allowNextStep:W,onNextStep:I,type:w}),t===1&&_(w)&&e.jsx(Fe,{onNextStep:I,onPrevStep:q,type:w,value:N}),t===2&&e.jsx(Te,{error:H,loading:l,onClick:()=>null,type:w})]})})})};export{ot as AddContentModal};
