import{aS as C,a8 as y,a7 as m,aT as L,a6 as b,aU as N,aV as P,Y as u,a0 as d,a1 as T,r as h,j as e,X as s,Z as S,ac as M,e as q,a as W,aW as H,aG as X,aX as z,d as J,U as K}from"./index-292a35cd.js";import{bY as g,bU as Q,cw as ee,ct as B,u as te,cq as ne,cj as se,cs as oe,cx as re}from"./index-4ce20e81.js";import{n as j}from"./toastMessage-760ea628.js";function ie(t){return t===null?"?":t.toLocaleString().split(",").join(" ")}const A=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,ae=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ce=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,le=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,de=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,ue=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,xe=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,fe=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,he=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,ge=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function we(t){return[ce,ge,ae,le,ue].some(n=>n.test(t))?C:fe.test(t)?y:A.test(t)?m:de.test(t)?L:xe.test(t)?b:he.test(t)?N:P}const me=(t,r="")=>{const a=(r===m?A:/@(\w+)/).exec(t);return a?a[1]:null},E=t=>!!t&&[m,y,b].includes(t),pe=({onClick:t,loading:r,type:n})=>{const a=T(i=>i.budget),[x,o]=h.useState(10),l=E(n)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await ee(l);o(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[l]),e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(be,{children:"Approve Cost"})})}),e.jsxs(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(je,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(ye,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ie(a)," sats"]})]})]}),e.jsx(s,{children:e.jsx(g,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:t,size:"large",startIcon:e.jsx(Q,{}),type:"submit",variant:"contained",children:"Approve"})})]})},je=u(s).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ye=u(s).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,be=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=t=>{const r=Number(t);return r<-90||r>90?"Latitude must be between -90 and 90.":!r&&r!==0?"Latitude is required.":!0},ve=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,_e=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,ze=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Be=({latitude:t,longitude:r,onNextStep:n,form:a})=>{const x=()=>{const{errors:l}=a.formState;Object.keys(l).length||n()},o=()=>{a.setValue("latitude",""),a.setValue("longitude",""),n()};return e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Add Location"})})}),e.jsxs(s,{direction:"row",mb:20,children:[e.jsx(s,{grow:1,children:e.jsx(B,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:_e},validate:{latitude:Se}}})}),e.jsx(s,{grow:1,ml:20,children:e.jsx(B,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:ze},validate:{longitude:ve}}})})]}),e.jsxs(s,{direction:"row",children:[e.jsx(s,{grow:1,children:e.jsx(Ae,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(s,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",disabled:!t||!r,onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},Ce=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ae=u(g)`
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
`,U=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function Z(t){return!!U.test(t)}const Ee=({type:t,onNextStep:r,allowNextStep:n})=>e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(Re,{children:"Add Content"})})}),e.jsx(s,{mb:12,children:e.jsx(B,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...M,...t!==C?{pattern:{message:"Please enter a valid URL",value:U},validate:{source:Z}}:{}}})}),e.jsx(s,{children:e.jsx(g,{color:"secondary",disabled:!n,onClick:r,size:"large",variant:"contained",children:"Next"})})]}),Re=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$e={[m]:"Twitter handle",[y]:"Youtube channel",[b]:"RSS Feed"},ke=({onNextStep:t,onPrevStep:r,type:n,value:a})=>e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(k,{children:"Source Type"})})}),e.jsx(s,{direction:"row",mb:20,children:e.jsxs(k,{children:[$e[n],": @",me(a,n)??a]})}),e.jsxs(s,{direction:"row",children:[e.jsx(s,{grow:1,children:e.jsx(Le,{color:"secondary",disabled:!1,onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(s,{grow:1,ml:20,children:e.jsx(g,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),k=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Le=u(g)`
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
`,I=async(t,r,n,a)=>{const x=E(n)?"radar":"add_node",o={};if(n===C)o.media_url=t.source,o.content_type="audio_video";else if(n===L){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const c=/\/status\/(\d+)/,f=t.source.match(c);if(f!=null&&f[1]){const[,p]=f;o.tweet_id=p}}else o.tweet_id=t.source;o.content_type="tweet"}else if(n===N)o.content_type="webpage",o.web_page=t.source;else if(n===P)o.content_type="document",o.text=t.source;else if(n===m){const[,i]=(t.source||"").match(A)||[];if(i)o.source=i,o.source_type=n;else return}else(n===y||n===b)&&(o.source=t.source,o.source_type=n);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let l="";await q(async()=>{const i=await J.enable();o.pubkey=i==null?void 0:i.pubkey,l=await K()});try{const i=await W.post(`/${x}`,JSON.stringify(o),{Authorization:l});if(i.error){const{message:c}=i.error;throw new Error(c)}j(H),r()}catch(i){if(i.status===402&&(await re(a),await X(a),await I(t,r,n,a)),i.status===400){const c=await i.json();j((c==null?void 0:c.status)||z),r()}i instanceof Error&&(j(i.message||z),r())}},Ue=()=>{const[t,r]=h.useState(0),{close:n,visible:a}=te("addContent"),[x]=T(_=>[_.setBudget]),o=ne({mode:"onChange"}),{watch:l,setValue:i,reset:c}=o,[f,p]=h.useState(!1);h.useEffect(()=>()=>{r(0),c()},[a,c]);const w=l("inputType"),R=l("source"),O=l("longitude"),D=l("latitude"),$=l("source"),G=Z(R);h.useEffect(()=>{i("inputType",we($))},[$,i]);const F=()=>{n()},v=()=>{r(t+1)},V=()=>{r(t-1)},Y=o.handleSubmit(async _=>{p(!0);try{await I(_,F,w,x)}catch{j(z)}finally{p(!1)}});return e.jsx(se,{id:"addContent",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(oe,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:Y,children:[t===0&&e.jsx(Ee,{allowNextStep:G,onNextStep:v,type:w}),t===1&&e.jsx(e.Fragment,{children:E(w)?e.jsx(ke,{onNextStep:v,onPrevStep:V,type:w,value:R}):e.jsx(Be,{form:o,latitude:D,longitude:O,onNextStep:v})}),t===2&&e.jsx(pe,{loading:f,onClick:()=>null,type:w})]})})})};export{Ue as AddContentModal};
