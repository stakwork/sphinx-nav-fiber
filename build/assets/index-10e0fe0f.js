import{a_ as j,a$ as E,b0 as y,b1 as R,b2 as T,b3 as D,b4 as U,b5 as O,s as x,a as u,b as Z,r as f,j as e,F as r,B as C,aY as J,T as z,b6 as K,aW as X,aX as Q,e as ee,u as te,t as se,aV as ne,N as m,aZ as oe,w as re,b7 as ae,ah as ie,b8 as ce,b9 as le,D as de,x as ue,ba as xe}from"./index-e4b94b0f.js";import{ai as pe}from"./index-8e221b9e.js";import{f as he}from"./index-088da34e.js";import{C as fe}from"./ClipLoader-e2c35846.js";const A=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,we=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ge=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,me=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,be=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,ye=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,je=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Se=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss\.xml|.*\?(feed|format)=rss)(\/.*)?$/,_e=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ve=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Ee=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/,Re=/https:\/\/github\.com\/[\w-]+\/[\w-]+/;async function Ce(t){try{const n=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return(n==null?void 0:n.includes("application/rss+xml"))??!1}catch{return!1}}async function ze(t){return[ge,Ee,we,me,be,je].some(n=>n.test(t))?T:_e.test(t)?E:A.test(t)?j:ye.test(t)?D:Se.test(t)?y:Re.test(t)?R:ve.test(t)?await Ce(t)?y:U:O}const $e=(t,s="")=>{const o=(s===j?A:/@(\w+)/).exec(t);return o?o[1]:null},v=t=>!!t&&[j,E,y,R].includes(t),Be=({onClick:t,loading:s,type:n,error:o})=>{const b=Z(i=>i.budget),[a,p]=f.useState(10),d=v(n)?"radar":"add_node";return f.useEffect(()=>{(async()=>{try{const c=await K(d);p(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[d]),e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[a," sats"]})]}),e.jsxs(Ae,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[he(b)," sats"]})]})]}),e.jsx(r,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:s||!!o,onClick:t,size:"large",startIcon:s?e.jsx(L,{children:e.jsx(fe,{color:u.lightGray,size:12})}):e.jsxs(L,{children:[" ",e.jsx(pe,{})]}),type:"submit",variant:"contained",children:"Approve"})}),o?e.jsx(Pe,{children:e.jsxs(Ne,{children:[e.jsx(J,{className:"errorIcon"}),e.jsx("span",{children:o})]})}):null]})},Te=x(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ae=x(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ke=x(z)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ne=x(r)`
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
`,Pe=x(r)`
  display: flex;
  align-items: center;
  color: ${u.primaryRed};
  position: relative;
  margin-top: 20px;
`,L=x.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Ie=/^(https?:\/\/)/g,Le=/(www\.)?/g,De=/[\w-]+(\.[\w-]+)*/g,Ue=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Oe=/(\/[^\s?]*)?/g,Ze=/(\?[^\s]*)?/g,G=new RegExp(`${Ie.source}${Le.source}${De.source}${Ue.source}?${Oe.source}${Ze.source}$`,"i"),M=t=>{if(t==null?void 0:t.match(G)){const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}return!1},Ge=({type:t,onNextStep:s,allowNextStep:n})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(Me,{children:"Add Content"})})}),e.jsx(r,{mb:12,children:e.jsx(X,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...Q,...t!==T?{pattern:{message:"Please enter a valid URL",value:G},validate:{source:M}}:{}}})}),e.jsx(r,{children:e.jsx(C,{color:"secondary","data-testid":"add-content-btn",disabled:!n,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Me=x(z)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,B={[j]:{label:"Twitter handle",img:"twitter_default.svg"},[E]:{label:"Youtube channel",img:"youtube_default.svg"},[y]:{label:"RSS Feed",img:"rss_feed.svg"},[R]:{label:"GitHub Repository",img:"github_default.svg"}},Fe=({onNextStep:t,onPrevStep:s,type:n,value:o})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(We,{children:"Source Type"})})}),e.jsxs(r,{mb:20,children:[e.jsxs(Ve,{children:[e.jsx("img",{alt:B[n].label,className:"badge__img",src:B[n].img}),e.jsx(Ye,{children:B[n].label})]}),e.jsx(He,{children:$e(o,n)??o})]}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(qe,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(C,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),He=x(r)`
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
`,We=x(z)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Ye=x(z)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${u.white};
`,Ve=x(r)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,qe=x(C)`
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
`,F=async(t,s,n,o)=>{const b=v(s)?"radar":"add_node",a={};if(s===T)a.media_url=t.source,a.content_type="audio_video";else if(s===D){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const c=/\/status\/(\d+)/,l=t.source.match(c);if(l!=null&&l[1]){const[,S]=l;a.tweet_id=S}}else a.tweet_id=t.source;a.content_type="tweet"}else if(s===U)a.content_type="webpage",a.web_page=t.source;else if(s===O)a.content_type="document",a.text=t.source;else if(s===j){const[,i]=(t.source||"").match(A)||[];if(i)a.source=i,a.source_type=s;else return}else(s===E||s===y||s===R)&&(a.source=t.source,a.source_type=s);t.latitude&&t.longitude&&(a.latitude=t.latitude,a.longitude=t.longitude);let p="",d;ae?d=await ce.enable():d=await ie.enable(),a.pubkey=d==null?void 0:d.pubkey,p=await le();try{const i=await de.post(`/${b}`,JSON.stringify(a),{Authorization:p});if(await ue(n),i.data.project_id&&o(i.data.project_id),i.error){const{message:c}=i.error;throw new Error(c)}}catch(i){if(i.status===402)await xe(n),await F(t,s,n,o);else{let c=m;if(i.status===400)try{const l=await i.json();c=l.message||l.status||(l==null?void 0:l.errorCode)||m}catch{c=m}else i instanceof Error&&(c=i.message||m);throw new Error(c)}}},et=()=>{const[t,s]=f.useState(0),{close:n,visible:o}=ee("addContent"),{setBudget:b}=Z(g=>g),{setRunningProjectId:a}=te(g=>g),p=se({mode:"onChange"}),{watch:d,setValue:i,reset:c}=p,[l,S]=f.useState(!1),[H,k]=f.useState("");f.useEffect(()=>()=>{k(""),s(0),c()},[o,c]);const w=d("inputType"),N=d("source"),P=d("source"),W=M(N);f.useEffect(()=>{(async()=>{const h=await ze(P);i("inputType",h)})()},[P,i]);const Y=()=>{n()},I=()=>{s(t===0?v(w)?1:2:t+1)},V=()=>{s(t-1)},q=p.handleSubmit(async g=>{S(!0);try{await F(g,w,b,a),ne("Content Added"),Y()}catch(h){let $=m;if((h==null?void 0:h.status)===400){const _=await h.json();$=_.errorCode||(_==null?void 0:_.status)||m}else h instanceof Error&&($=h.message);k(String($))}finally{S(!1)}});return e.jsx(oe,{id:"addContent",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(re,{...p,children:e.jsxs("form",{id:"add-node-form",onSubmit:q,children:[t===0&&e.jsx(Ge,{allowNextStep:W,onNextStep:I,type:w}),t===1&&v(w)&&e.jsx(Fe,{onNextStep:I,onPrevStep:V,type:w,value:N}),t===2&&e.jsx(Be,{error:H,loading:l,onClick:()=>null,type:w})]})})})};export{et as AddContentModal};
