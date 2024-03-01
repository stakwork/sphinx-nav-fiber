import{aS as $,a9 as y,a8 as p,aT as N,a7 as S,aU as L,aV as T,Y as u,a0 as l,a1 as P,r as h,j as e,X as n,Z as m,ac as M,e as W,a as q,aW as H,aG as J,aX as A,d as X,U as K}from"./index-728fd10a.js";import{cp as Q,bP as g,bJ as ee,cq as te,cm as C,u as ne,cj as se,cc as oe,cl as ie,cr as re}from"./index-155cec3b.js";import{n as b}from"./toastMessage-75a5439c.js";const B=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,ae=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ce=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,le=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,de=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,ue=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,xe=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,fe=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,he=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,ge=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function we(t){return[ce,ge,ae,le,ue].some(s=>s.test(t))?$:fe.test(t)?y:B.test(t)?p:de.test(t)?N:xe.test(t)?S:he.test(t)?L:T}const pe=(t,i="")=>{const a=(i===p?B:/@(\w+)/).exec(t);return a?a[1]:null},E=t=>!!t&&[p,y,S].includes(t),me=({onClick:t,loading:i,type:s})=>{const a=P(r=>r.budget),[x,o]=h.useState(10),d=E(s)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await te(d);o(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[d]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ye,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(je,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Q(a)," sats"]})]})]}),e.jsx(n,{children:e.jsx(g,{color:"secondary","data-testid":"check-icon",disabled:i,onClick:t,size:"large",startIcon:e.jsx(ee,{}),type:"submit",variant:"contained",children:"Approve"})})]})},je=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,be=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ye=u(m)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=t=>{const i=Number(t);return i<-90||i>90?"Latitude must be between -90 and 90.":!i&&i!==0?"Latitude is required.":!0},ve=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,_e=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,ze=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Ae=({latitude:t,longitude:i,onNextStep:s,form:a})=>{const x=()=>{const{errors:d}=a.formState;Object.keys(d).length||s()},o=()=>{a.setValue("latitude",""),a.setValue("longitude",""),s()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{grow:1,children:e.jsx(C,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:_e},validate:{latitude:Se}}})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(C,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:ze},validate:{longitude:ve}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx($e,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",disabled:!t||!i,onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},Ce=u(m)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$e=u(g)`
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
`,U=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function Z(t){return!!U.test(t)}const Be=({type:t,onNextStep:i,allowNextStep:s})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ee,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...M,...t!==$?{pattern:{message:"Please enter a valid URL",value:U},validate:{source:Z}}:{}}})}),e.jsx(n,{children:e.jsx(g,{color:"secondary",disabled:!s,onClick:i,size:"large",variant:"contained",children:"Next"})})]}),Ee=u(m)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z={[p]:{label:"Twitter handle",img:"twitter_default.png"},[y]:{label:"Youtube channel",img:"youtube_default.png"},[S]:{label:"RSS Feed",img:"rss_feed.png"}},Re=({onNextStep:t,onPrevStep:i,type:s,value:a})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ne,{children:"Source Type"})})}),e.jsxs(n,{mb:20,children:[e.jsxs(Te,{children:[e.jsx("img",{alt:z[s].label,className:"badge__img",src:z[s].img}),e.jsx(Le,{children:z[s].label})]}),e.jsx(ke,{children:pe(a,s)??a})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Pe,{color:"secondary",disabled:!1,onClick:()=>i(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),ke=u(n)`
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
`,Ne=u(m)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Le=u(m)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,Te=u(n)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Pe=u(g)`
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
`,I=async(t,i,s,a)=>{const x=E(s)?"radar":"add_node",o={};if(s===$)o.media_url=t.source,o.content_type="audio_video";else if(s===N){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const c=/\/status\/(\d+)/,f=t.source.match(c);if(f!=null&&f[1]){const[,j]=f;o.tweet_id=j}}else o.tweet_id=t.source;o.content_type="tweet"}else if(s===L)o.content_type="webpage",o.web_page=t.source;else if(s===T)o.content_type="document",o.text=t.source;else if(s===p){const[,r]=(t.source||"").match(B)||[];if(r)o.source=r,o.source_type=s;else return}else(s===y||s===S)&&(o.source=t.source,o.source_type=s);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let d="";await W(async()=>{const r=await X.enable();o.pubkey=r==null?void 0:r.pubkey,d=await K()});try{const r=await q.post(`/${x}`,JSON.stringify(o),{Authorization:d});if(r.error){const{message:c}=r.error;throw new Error(c)}b(H),i()}catch(r){if(r.status===402&&(await re(a),await J(a),await I(t,i,s,a)),r.status===400){const c=await r.json();b((c==null?void 0:c.status)||A),i()}r instanceof Error&&(b(r.message||A),i())}},Oe=()=>{const[t,i]=h.useState(0),{close:s,visible:a}=ne("addContent"),[x]=P(_=>[_.setBudget]),o=se({mode:"onChange"}),{watch:d,setValue:r,reset:c}=o,[f,j]=h.useState(!1);h.useEffect(()=>()=>{i(0),c()},[a,c]);const w=d("inputType"),R=d("source"),O=d("longitude"),D=d("latitude"),k=d("source"),G=Z(R);h.useEffect(()=>{r("inputType",we(k))},[k,r]);const F=()=>{s()},v=()=>{i(t+1)},V=()=>{i(t-1)},Y=o.handleSubmit(async _=>{j(!0);try{await I(_,F,w,x)}catch{b(A)}finally{j(!1)}});return e.jsx(oe,{id:"addContent",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(ie,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:Y,children:[t===0&&e.jsx(Be,{allowNextStep:G,onNextStep:v,type:w}),t===1&&e.jsx(e.Fragment,{children:E(w)?e.jsx(Re,{onNextStep:v,onPrevStep:V,type:w,value:R}):e.jsx(Ae,{form:o,latitude:D,longitude:O,onNextStep:v})}),t===2&&e.jsx(me,{loading:f,onClick:()=>null,type:w})]})})})};export{Oe as AddContentModal};
