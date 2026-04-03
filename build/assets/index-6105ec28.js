import{b9 as j,ba as _,bb as y,bc as B,bd as I,be as D,bf as U,s as p,g as u,a as O,r as f,j as e,F as r,B as C,b5 as q,T as R,bg as J,b3 as K,b4 as Q,E as X,c as ee,l as te,b1 as se,b2 as m,b6 as ne,n as oe,bh as re,aF as ie,bi as ae,b7 as ce,aD as le,d as de,bj as ue}from"./index-1a2e2dfa.js";import{C as pe}from"./CheckIcon-9b72cbb4.js";import{f as xe}from"./index-717b1eb9.js";import{C as he}from"./ClipLoader-514d990e.js";const T=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,we=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,ge=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,be=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,ye=/(https?:\/\/)?.*\.mp3/,je=/(https?:\/\/)?.*\.mp4/,Se=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss\.xml|.*\?(feed|format)=rss)(\/.*)?$/,ve=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,Ee=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,_e=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;async function Ce(t){try{const n=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return(n==null?void 0:n.includes("application/rss+xml"))??!1}catch{return!1}}async function Re(t){return[we,_e,fe,ge,me,ye,je].some(n=>n.test(t))?B:ve.test(t)?_:T.test(t)?j:be.test(t)?I:Se.test(t)?y:Ee.test(t)?await Ce(t)?y:D:U}const ze=(t,s="")=>{const o=(s===j?T:/@(\w+)/).exec(t);return o?o[1]:null},E=t=>!!t&&[j,_,y].includes(t),$e=({onClick:t,loading:s,type:n,error:o})=>{const b=O(a=>a.budget),[i,x]=f.useState(10),d=E(n)?"radar":"v2/content";return f.useEffect(()=>{(async()=>{try{const c=await J(d);x(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[d]),e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[i," sats"]})]}),e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[xe(b)," sats"]})]})]}),e.jsx(r,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:s||!!o,onClick:t,size:"large",startIcon:s?e.jsx(L,{children:e.jsx(he,{color:u.lightGray,size:12})}):e.jsxs(L,{children:[" ",e.jsx(pe,{})]}),type:"submit",variant:"contained",children:"Approve"})}),o?e.jsx(Ne,{children:e.jsxs(Ae,{children:[e.jsx(q,{className:"errorIcon"}),e.jsx("span",{children:o})]})}):null]})},Be=p(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Te=p(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ke=p(R)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ae=p(r)`
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
    white-space: normal;
    letter-spacing: 0.2px;
    cursor: pointer;
    padding-left: 4px;
    font-size: 13px;
    font-family: Barlow;
    line-height: 18px;
  }
`,Ne=p(r)`
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
`,Pe=/^(https?:\/\/)/g,Le=/(www\.)?/g,Ie=/[\w-]+(\.[\w-]+)*/g,De=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Ue=/(\/[^\s?]*)?/g,Oe=/(\?[^\s]*)?/g,Z=new RegExp(`${Pe.source}${Le.source}${Ie.source}${De.source}?${Ue.source}${Oe.source}$`,"i"),F=t=>{if(t==null?void 0:t.match(Z)){const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}return!1},Ze=({type:t,onNextStep:s,allowNextStep:n})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Add Content"})})}),e.jsx(r,{mb:12,children:e.jsx(K,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...Q,...t!==B?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:F}}:{}}})}),e.jsx(r,{children:e.jsx(C,{color:"secondary","data-testid":"add-content-btn",disabled:!n,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Fe=p(R)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$={[j]:{label:"Twitter handle",img:"twitter_default.svg"},[_]:{label:"Youtube channel",img:"youtube_default.svg"},[y]:{label:"RSS Feed",img:"rss_feed.svg"}},Ge=({onNextStep:t,onPrevStep:s,type:n,value:o})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(We,{children:"Source Type"})})}),e.jsxs(r,{mb:20,children:[e.jsxs(Ye,{children:[e.jsx("img",{alt:$[n].label,className:"badge__img",src:$[n].img}),e.jsx(He,{children:$[n].label})]}),e.jsx(Me,{children:ze(o,n)??o})]}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(Ve,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(C,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),Me=p(r)`
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
`,We=p(R)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,He=p(R)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${u.white};
`,Ye=p(r)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Ve=p(C)`
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
`,G=async(t,s,n,o)=>{const b=E(s)?"radar":"v2/content",i={};if(s===B)i.media_url=t.source,i.content_type="audio_video";else if(s===I){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const c=/\/status\/(\d+)/,l=t.source.match(c);if(l!=null&&l[1]){const[,S]=l;i.tweet_id=S}}else i.tweet_id=t.source;i.content_type="tweet"}else if(s===D)i.content_type="webpage",i.web_page=t.source;else if(s===U)i.content_type="document",i.text=t.source;else if(s===j){const[,a]=(t.source||"").match(T)||[];if(a)i.source=a,i.source_type=s;else return}else(s===_||s===y)&&(i.source=t.source,i.source_type=s);t.latitude&&t.longitude&&(i.latitude=t.latitude,i.longitude=t.longitude);let x="",d;re?d=await ae.enable():d=await ie.enable(),i.pubkey=d==null?void 0:d.pubkey,x=await ce();try{const a=await le.post(`/${b}`,JSON.stringify(i),{Authorization:x});if(await de(n),a.data.project_id&&o(a.data.project_id),a.error){const{message:c}=a.error;throw new Error(c)}}catch(a){if(a.status===402)await ue(n),await G(t,s,n,o);else{let c=m;if(a.status===400)try{const l=await a.json();c=l.message||l.status||(l==null?void 0:l.errorCode)||m}catch{c=m}else a instanceof Error&&(c=a.message||m);throw new Error(c)}}},Xe=()=>{const[t,s]=f.useState(0),{close:n,visible:o}=X("addContent"),{setBudget:b}=O(g=>g),{setRunningProjectId:i}=ee(g=>g),x=te({mode:"onChange"}),{watch:d,setValue:a,reset:c}=x,[l,S]=f.useState(!1),[M,k]=f.useState("");f.useEffect(()=>()=>{k(""),s(0),c()},[o,c]);const w=d("inputType"),A=d("source"),N=d("source"),W=F(A);f.useEffect(()=>{(async()=>{const h=await Re(N);a("inputType",h)})()},[N,a]);const H=()=>{n()},P=()=>{s(t===0?E(w)?1:2:t+1)},Y=()=>{s(t-1)},V=x.handleSubmit(async g=>{S(!0);try{await G(g,w,b,i),se("Content Added"),H()}catch(h){let z=m;if((h==null?void 0:h.status)===400){const v=await h.json();z=v.errorCode||(v==null?void 0:v.status)||m}else h instanceof Error&&(z=h.message);k(String(z))}finally{S(!1)}});return e.jsx(ne,{id:"addContent",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(oe,{...x,children:e.jsxs("form",{id:"add-node-form",onSubmit:V,children:[t===0&&e.jsx(Ze,{allowNextStep:W,onNextStep:P,type:w}),t===1&&E(w)&&e.jsx(Ge,{onNextStep:P,onPrevStep:Y,type:w,value:A}),t===2&&e.jsx($e,{error:M,loading:l,onClick:()=>null,type:w})]})})})};export{Xe as AddContentModal};
