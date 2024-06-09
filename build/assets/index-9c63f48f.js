import{aS as z,Y as j,w as m,aT as k,R as b,aU as E,aV as N,f as u,h as d,y as L,r as f,j as e,F as n,aW as V,T as y,aX as Y,D as M,B as W,aY as q,b0 as H,N as J,P as K,V as X,o as Q,O as ee}from"./index-1f32104b.js";import{B as w,c as te,F as ne}from"./react-toastify.esm-778eaf5b.js";import{B as se}from"./index-e9915fcc.js";import{C as oe}from"./CheckIcon-b6ba1038.js";import{T as _}from"./index-dd3c818a.js";import"./index.esm-b5bec20a.js";import"./InfoIcon-651502b1.js";const B=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,re=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ie=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,ae=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,ce=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,de=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,le=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ue=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,xe=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,he=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function fe(t){return[ie,he,re,ae,de].some(s=>s.test(t))?z:ue.test(t)?j:B.test(t)?m:ce.test(t)?k:le.test(t)?b:xe.test(t)?E:N}const we=(t,r="")=>{const a=(r===m?B:/@(\w+)/).exec(t);return a?a[1]:null},C=t=>!!t&&[m,j,b].includes(t),ge=({onClick:t,loading:r,type:s})=>{const a=L(i=>i.budget),[x,o]=f.useState(10),c=C(s)?"radar":"add_node";return f.useEffect(()=>{(async()=>{try{const l=await Y(c);o(l.data.price)}catch(l){console.error("cannot fetch",l)}})()},[c]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(je,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(me,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(pe,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[V(a)," sats"]})]})]}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:t,size:"large",startIcon:e.jsx(oe,{}),type:"submit",variant:"contained",children:"Approve"})})]})},me=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,pe=u(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,je=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,be=t=>{const r=Number(t);return r<-90||r>90?"Latitude must be between -90 and 90.":!r&&r!==0?"Latitude is required.":!0},ye=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Se=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,ve=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,_e=({latitude:t,longitude:r,onNextStep:s,form:a})=>{const x=()=>{const{errors:c}=a.formState;Object.keys(c).length||s()},o=()=>{a.setValue("latitude",""),a.setValue("longitude",""),s()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ze,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(_,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Se},validate:{latitude:be}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(_,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:ve},validate:{longitude:ye}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Be,{color:"secondary",disabled:!1,onClick:o,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"skip-location-btn",disabled:!t||!r,onClick:x,size:"large",variant:"contained",children:"Next"})})]})]})},ze=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Be=u(w)`
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
`,T=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function P(t){return!!T.test(t)}const Ce=({type:t,onNextStep:r,allowNextStep:s})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Re,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(_,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...M,...t!==z?{pattern:{message:"Please enter a valid URL",value:T},validate:{source:P}}:{}}})}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!s,onClick:r,size:"large",variant:"contained",children:"Next"})})]}),Re=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ae={[m]:"Twitter handle",[j]:"Youtube channel",[b]:"RSS Feed"},$e=({onNextStep:t,onPrevStep:r,type:s,value:a})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx($,{children:"Source Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsxs($,{children:[Ae[s],": @",we(a,s)??a]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(ke,{color:"secondary",disabled:!1,onClick:()=>r(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),$=u(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ke=u(w)`
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
`,Z=async(t,r,s,a)=>{const x=C(s)?"radar":"add_node",o={};if(s===z)o.media_url=t.source,o.content_type="audio_video";else if(s===k){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const l=/\/status\/(\d+)/,h=t.source.match(l);if(h!=null&&h[1]){const[,p]=h;o.tweet_id=p}}else o.tweet_id=t.source;o.content_type="tweet"}else if(s===E)o.content_type="webpage",o.web_page=t.source;else if(s===N)o.content_type="document",o.text=t.source;else if(s===m){const[,i]=(t.source||"").match(B)||[];if(i)o.source=i,o.source_type=s;else return}else(s===j||s===b)&&(o.source=t.source,o.source_type=s);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let c="";await H(async()=>{const i=await Q.enable();o.pubkey=i==null?void 0:i.pubkey,c=await ee()});try{const i=await J.post(`/${x}`,JSON.stringify(o),{Authorization:c});if(i.error){const{message:l}=i.error;throw new Error(l)}r()}catch(i){i.status===402&&(await K(a),await X(a),await Z(t,r,s,a)),i.status===400&&(await i.json(),r()),i instanceof Error&&r()}},Ie=()=>{const[t,r]=f.useState(0),{close:s,visible:a}=W("addContent"),[x]=L(v=>[v.setBudget]),o=te({mode:"onChange"}),{watch:c,setValue:i,reset:l}=o,[h,p]=f.useState(!1);f.useEffect(()=>()=>{r(0),l()},[a,l]);const g=c("inputType"),R=c("source"),U=c("longitude"),I=c("latitude"),A=c("source"),O=P(R);f.useEffect(()=>{i("inputType",fe(A))},[A,i]);const F=()=>{s()},S=()=>{r(t+1)},D=()=>{r(t-1)},G=o.handleSubmit(async v=>{p(!0);try{await Z(v,F,g,x)}catch{console.error(q)}finally{p(!1)}});return e.jsx(se,{id:"addContent",kind:"small",onClose:s,preventOutsideClose:!0,children:e.jsx(ne,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:G,children:[t===0&&e.jsx(Ce,{allowNextStep:O,onNextStep:S,type:g}),t===1&&e.jsx(e.Fragment,{children:C(g)?e.jsx($e,{onNextStep:S,onPrevStep:D,type:g,value:R}):e.jsx(_e,{form:o,latitude:I,longitude:U,onNextStep:S})}),t===2&&e.jsx(ge,{loading:h,onClick:()=>null,type:g})]})})})};export{Ie as AddContentModal};
