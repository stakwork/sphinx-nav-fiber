import{aS as A,a9 as y,a8 as m,aT as N,a7 as b,aU as L,aV as P,Y as u,a0 as d,a1 as T,r as f,j as e,X as n,Z as S,ac as Y,e as q,a as W,aW as H,aG as J,aX as z,d as X,U as K}from"./index-7d13a00d.js";import{cp as Q,bP as w,bJ as ee,cq as te,cm as C,u as ne,cj as se,cc as oe,cl as re,cr as ie}from"./index-e18b682b.js";import{n as j}from"./toastMessage-beb52b8d.js";const E=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,ae=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ce=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,le=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,de=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,ue=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,xe=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,he=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,fe=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,we=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function ge(t){return[ce,we,ae,le,ue].some(s=>s.test(t))?A:he.test(t)?y:E.test(t)?m:de.test(t)?N:xe.test(t)?b:fe.test(t)?L:P}const me=(t,r="")=>{const a=(r===m?E:/@(\w+)/).exec(t);return a?a[1]:null},R=t=>!!t&&[m,y,b].includes(t),pe=({onClick:t,loading:r,type:s})=>{const a=T(i=>i.budget),[x,o]=f.useState(10),l=R(s)?"radar":"add_node";return f.useEffect(()=>{(async()=>{try{const c=await te(l);o(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[l]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(be,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(je,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(ye,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Q(a)," sats"]})]})]}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:t,size:"large",startIcon:e.jsx(ee,{}),type:"submit",variant:"contained",children:"Approve"})})]})},je=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ye=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Se=t=>{const r=Number(t);return r<-90||r>90?"Latitude must be between -90 and 90.":!r&&r!==0?"Latitude is required.":!0},ve=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,_e=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,ze=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Ce=({latitude:t,longitude:r,onNextStep:s,form:a})=>{const x=()=>{const{errors:l}=a.formState;Object.keys(l).length||s()},o=()=>{a.setValue("latitude",""),a.setValue("longitude",""),s()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ae,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{grow:1,children:e.jsx(C,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:_e},validate:{latitude:Se}}})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(C,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:ze},validate:{longitude:ve}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ee,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!t||!r,onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},Ae=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ee=u(w)`
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
`,U=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function Z(t){return!!U.test(t)}const Re=({type:t,onNextStep:r,allowNextStep:s})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx($e,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(C,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...Y,...t!==A?{pattern:{message:"Please enter a valid URL",value:U},validate:{source:Z}}:{}}})}),e.jsx(n,{children:e.jsx(w,{color:"secondary",disabled:!s,onClick:r,size:"large",variant:"contained",children:"Next"})})]}),$e=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Be={[m]:"Twitter handle",[y]:"Youtube channel",[b]:"RSS Feed"},ke=({onNextStep:t,onPrevStep:r,type:s,value:a})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(k,{children:"Source Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsxs(k,{children:[Be[s],": @",me(a,s)??a]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Ne,{color:"secondary",disabled:!1,onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),k=u(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ne=u(w)`
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
`,I=async(t,r,s,a)=>{const x=R(s)?"radar":"add_node",o={};if(s===A)o.media_url=t.source,o.content_type="audio_video";else if(s===N){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const c=/\/status\/(\d+)/,h=t.source.match(c);if(h!=null&&h[1]){const[,p]=h;o.tweet_id=p}}else o.tweet_id=t.source;o.content_type="tweet"}else if(s===L)o.content_type="webpage",o.web_page=t.source;else if(s===P)o.content_type="document",o.text=t.source;else if(s===m){const[,i]=(t.source||"").match(E)||[];if(i)o.source=i,o.source_type=s;else return}else(s===y||s===b)&&(o.source=t.source,o.source_type=s);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let l="";await q(async()=>{const i=await X.enable();o.pubkey=i==null?void 0:i.pubkey,l=await K()});try{const i=await W.post(`/${x}`,JSON.stringify(o),{Authorization:l});if(i.error){const{message:c}=i.error;throw new Error(c)}j(H),r()}catch(i){if(i.status===402&&(await ie(a),await J(a),await I(t,r,s,a)),i.status===400){const c=await i.json();j((c==null?void 0:c.status)||z),r()}i instanceof Error&&(j(i.message||z),r())}},Ue=()=>{const[t,r]=f.useState(0),{close:s,visible:a}=ne("addContent"),[x]=T(_=>[_.setBudget]),o=se({mode:"onChange"}),{watch:l,setValue:i,reset:c}=o,[h,p]=f.useState(!1);f.useEffect(()=>()=>{r(0),c()},[a,c]);const g=l("inputType"),$=l("source"),O=l("longitude"),D=l("latitude"),B=l("source"),G=Z($);f.useEffect(()=>{i("inputType",ge(B))},[B,i]);const F=()=>{s()},v=()=>{r(t+1)},V=()=>{r(t-1)},M=o.handleSubmit(async _=>{p(!0);try{await I(_,F,g,x)}catch{j(z)}finally{p(!1)}});return e.jsx(oe,{id:"addContent",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(re,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:M,children:[t===0&&e.jsx(Re,{allowNextStep:G,onNextStep:v,type:g}),t===1&&e.jsx(e.Fragment,{children:R(g)?e.jsx(ke,{onNextStep:v,onPrevStep:V,type:g,value:$}):e.jsx(Ce,{form:o,latitude:D,longitude:O,onNextStep:v})}),t===2&&e.jsx(pe,{loading:h,onClick:()=>null,type:g})]})})})};export{Ue as AddContentModal};
