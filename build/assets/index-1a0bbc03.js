import{b7 as j,b8 as E,b9 as y,ba as R,bb as T,bc as U,bd as D,be as O,s as p,g as u,a as G,r as f,j as e,F as r,B as C,b5 as J,T as z,bf as K,b3 as Q,b4 as X,E as ee,c as te,l as se,b1 as ne,b2 as m,b6 as oe,n as re,bg as ie,aF as ae,bh as ce,bi as le,am as de,d as ue,bj as pe}from"./index-c575771d.js";import{C as xe}from"./CheckIcon-ff067ded.js";import{f as he}from"./index-717b1eb9.js";import{C as fe}from"./ClipLoader-c29baf4c.js";const A=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,ge=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,we=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,me=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,be=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,ye=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,je=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Se=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss\.xml|.*\?(feed|format)=rss)(\/.*)?$/,_e=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ve=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Ee=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/,Re=/https:\/\/github\.com\/[\w-]+\/[\w-]+/;async function Ce(t){try{const n=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return(n==null?void 0:n.includes("application/rss+xml"))??!1}catch{return!1}}async function ze(t){return[we,Ee,ge,me,be,je].some(n=>n.test(t))?T:_e.test(t)?E:A.test(t)?j:ye.test(t)?U:Se.test(t)?y:Re.test(t)?R:ve.test(t)?await Ce(t)?y:D:O}const $e=(t,s="")=>{const o=(s===j?A:/@(\w+)/).exec(t);return o?o[1]:null},v=t=>!!t&&[j,E,y,R].includes(t),Be=({onClick:t,loading:s,type:n,error:o})=>{const b=G(a=>a.budget),[i,x]=f.useState(10),d=v(n)?"radar":"add_node";return f.useEffect(()=>{(async()=>{try{const c=await K(d);x(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[d]),e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[i," sats"]})]}),e.jsxs(Ae,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[he(b)," sats"]})]})]}),e.jsx(r,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:s||!!o,onClick:t,size:"large",startIcon:s?e.jsx(L,{children:e.jsx(fe,{color:u.lightGray,size:12})}):e.jsxs(L,{children:[" ",e.jsx(xe,{})]}),type:"submit",variant:"contained",children:"Approve"})}),o?e.jsx(Pe,{children:e.jsxs(Ne,{children:[e.jsx(J,{className:"errorIcon"}),e.jsx("span",{children:o})]})}):null]})},Te=p(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ke=p(z)`
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
`,Ie=/^(https?:\/\/)/g,Le=/(www\.)?/g,Ue=/[\w-]+(\.[\w-]+)*/g,De=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Oe=/(\/[^\s?]*)?/g,Ge=/(\?[^\s]*)?/g,Z=new RegExp(`${Ie.source}${Le.source}${Ue.source}${De.source}?${Oe.source}${Ge.source}$`,"i"),F=t=>{if(t==null?void 0:t.match(Z)){const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}return!1},Ze=({type:t,onNextStep:s,allowNextStep:n})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Add Content"})})}),e.jsx(r,{mb:12,children:e.jsx(Q,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...X,...t!==T?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:F}}:{}}})}),e.jsx(r,{children:e.jsx(C,{color:"secondary","data-testid":"add-content-btn",disabled:!n,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Fe=p(z)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,B={[j]:{label:"Twitter handle",img:"twitter_default.svg"},[E]:{label:"Youtube channel",img:"youtube_default.svg"},[y]:{label:"RSS Feed",img:"rss_feed.svg"},[R]:{label:"GitHub Repository",img:"github_default.svg"}},Me=({onNextStep:t,onPrevStep:s,type:n,value:o})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(We,{children:"Source Type"})})}),e.jsxs(r,{mb:20,children:[e.jsxs(Ve,{children:[e.jsx("img",{alt:B[n].label,className:"badge__img",src:B[n].img}),e.jsx(Ye,{children:B[n].label})]}),e.jsx(He,{children:$e(o,n)??o})]}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(qe,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(C,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),He=p(r)`
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
`,We=p(z)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Ye=p(z)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${u.white};
`,Ve=p(r)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,qe=p(C)`
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
`,M=async(t,s,n,o)=>{const b=v(s)?"radar":"add_node",i={};if(s===T)i.media_url=t.source,i.content_type="audio_video";else if(s===U){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const c=/\/status\/(\d+)/,l=t.source.match(c);if(l!=null&&l[1]){const[,S]=l;i.tweet_id=S}}else i.tweet_id=t.source;i.content_type="tweet"}else if(s===D)i.content_type="webpage",i.web_page=t.source;else if(s===O)i.content_type="document",i.text=t.source;else if(s===j){const[,a]=(t.source||"").match(A)||[];if(a)i.source=a,i.source_type=s;else return}else(s===E||s===y||s===R)&&(i.source=t.source,i.source_type=s);t.latitude&&t.longitude&&(i.latitude=t.latitude,i.longitude=t.longitude);let x="",d;ie?d=await ce.enable():d=await ae.enable(),i.pubkey=d==null?void 0:d.pubkey,x=await le();try{const a=await de.post(`/${b}`,JSON.stringify(i),{Authorization:x});if(await ue(n),a.data.project_id&&o(a.data.project_id),a.error){const{message:c}=a.error;throw new Error(c)}}catch(a){if(a.status===402)await pe(n),await M(t,s,n,o);else{let c=m;if(a.status===400)try{const l=await a.json();c=l.message||l.status||(l==null?void 0:l.errorCode)||m}catch{c=m}else a instanceof Error&&(c=a.message||m);throw new Error(c)}}},et=()=>{const[t,s]=f.useState(0),{close:n,visible:o}=ee("addContent"),{setBudget:b}=G(w=>w),{setRunningProjectId:i}=te(w=>w),x=se({mode:"onChange"}),{watch:d,setValue:a,reset:c}=x,[l,S]=f.useState(!1),[H,k]=f.useState("");f.useEffect(()=>()=>{k(""),s(0),c()},[o,c]);const g=d("inputType"),N=d("source"),P=d("source"),W=F(N);f.useEffect(()=>{(async()=>{const h=await ze(P);a("inputType",h)})()},[P,a]);const Y=()=>{n()},I=()=>{s(t===0?v(g)?1:2:t+1)},V=()=>{s(t-1)},q=x.handleSubmit(async w=>{S(!0);try{await M(w,g,b,i),ne("Content Added"),Y()}catch(h){let $=m;if((h==null?void 0:h.status)===400){const _=await h.json();$=_.errorCode||(_==null?void 0:_.status)||m}else h instanceof Error&&($=h.message);k(String($))}finally{S(!1)}});return e.jsx(oe,{id:"addContent",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(re,{...x,children:e.jsxs("form",{id:"add-node-form",onSubmit:q,children:[t===0&&e.jsx(Ze,{allowNextStep:W,onNextStep:I,type:g}),t===1&&v(g)&&e.jsx(Me,{onNextStep:I,onPrevStep:V,type:g,value:N}),t===2&&e.jsx(Be,{error:H,loading:l,onClick:()=>null,type:g})]})})})};export{et as AddContentModal};
