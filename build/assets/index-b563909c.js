import{aS as v,a8 as S,a7 as z,aT as B,a6 as _,aU as E,aV as P,Y as u,a0 as i,a1 as $,r as h,j as e,X as r,Z as A,ab as Y,e as M,a as V,aW as W,aF as H,aX as b,d as X,U as q}from"./index-a0372049.js";import{bY as m,bU as N,cx as J,cu as K,bb as Q,ax as ee,bR as te,bS as se,bT as oe,aD as ne,u as re,cr as ae,ck as ie,ct as ce,cy as le}from"./index-bff42570.js";import{n as w}from"./toastMessage-3dcd2813.js";import{f as de}from"./index-f371730d.js";const k=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,ue=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,xe=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,he=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,pe=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,fe=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,we=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,me=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ge=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,je=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function ye(t){return[xe,je,ue,he,fe].some(n=>n.test(t))?v:me.test(t)?S:k.test(t)?z:pe.test(t)?B:we.test(t)?_:ge.test(t)?E:P}const T=t=>!!t&&[z,S,_].includes(t),be=({onClick:t,loading:a,type:n})=>{const d=$(s=>s.budget),[x,o]=h.useState(10),l=T(n)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await J(l);o(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[l]),e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ze,{children:"Approve Cost"})})}),e.jsxs(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ve,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[x," sats"]})]}),e.jsxs(Se,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[de(d)," sats"]})]})]}),e.jsx(r,{children:e.jsx(m,{color:"secondary","data-testid":"check-icon",disabled:a,onClick:t,size:"large",startIcon:e.jsx(N,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ve=u(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${i.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${i.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${i.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,Se=u(r).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${i.secondaryText4};
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
`,ze=u(A)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,U=/^(https?:\/\/)?(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i;function I(t){return!!U.test(t)}const _e=({type:t,onNextStep:a,allowNextStep:n})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(Ae,{children:"Add Item"})})}),e.jsx(r,{mb:12,children:e.jsx(K,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...Y,...t!==v?{pattern:{message:"Please enter a valid URL",value:U},validate:{source:I}}:{}}})}),e.jsx(r,{children:e.jsx(m,{color:"secondary",disabled:!n,onClick:a,size:"large",variant:"contained",children:"Next"})})]}),Ae=u(A)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,y={corporation:"Corporation",event:"Event",image:"Image",organization:"Organization",person:"Person",place:"Place",Project:"Project",Show:"Show",Software:"Software",Topic:"Topic"},Ce=()=>{const[t,a]=h.useState(null),[n,d]=ee(s=>[s.sidebarFilter,s.setSidebarFilter]),x=s=>{a(s.currentTarget)},o=()=>{a(null)},l=s=>{d(s),o()};return e.jsxs("div",{children:[e.jsxs(Re,{onClick:x,children:[e.jsx("div",{className:"text",children:"Show"}),e.jsx("div",{className:"value",children:y[n]}),e.jsx("div",{className:"icon",children:t?e.jsx(se,{}):e.jsx(te,{})})]}),e.jsx(Ee,{anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:o,open:!!t,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(oe,{children:Object.keys(y).map(s=>e.jsxs(Be,{className:ne({active:s===n}),onClick:()=>l(s),children:[e.jsx("span",{className:"icon",children:s===n?e.jsx(N,{}):null}),e.jsx("span",{children:y[s]})]},s))})})]})},Re=u(r).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${i.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${i.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,Be=u(r).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${i.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${i.white};
  }
  &:hover {
    color: ${i.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Ee=u(Q)`
  .MuiPaper-root {
    background: ${i.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${i.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Pe=({onNextStep:t,onPrevStep:a})=>e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx($e,{children:"Choose Type"})})}),e.jsx(r,{direction:"row",mb:20,children:e.jsx(Ce,{})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(Ne,{color:"secondary",onClick:()=>a(),size:"large",variant:"contained",children:"Back"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(m,{color:"secondary",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),$e=u(A)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ne=u(m)`
  && {
    background: ${i.white};
    color: ${i.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${i.white};
      color: ${i.BG2};
    }
  }
`,D=async(t,a,n,d)=>{const x=T(n)?"radar":"add_node",o={};if(n===v)o.media_url=t.source,o.content_type="audio_video";else if(n===B){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const c=/\/status\/(\d+)/,p=t.source.match(c);if(p!=null&&p[1]){const[,f]=p;o.tweet_id=f}}else o.tweet_id=t.source;o.content_type="tweet"}else if(n===E)o.content_type="webpage",o.web_page=t.source;else if(n===P)o.content_type="document",o.text=t.source;else if(n===z){const[,s]=(t.source||"").match(k)||[];if(s)o.source=s,o.source_type=n;else return}else(n===S||n===_)&&(o.source=t.source,o.source_type=n);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let l="";await M(async()=>{const s=await X.enable();o.pubkey=s==null?void 0:s.pubkey,l=await q()});try{const s=await V.post(`/${x}`,JSON.stringify(o),{Authorization:l});if(s.error){const{message:c}=s.error;throw new Error(c)}w(W),a()}catch(s){if(s.status===402&&(await le(d),await H(d),await D(t,a,n,d)),s.status===400){const c=await s.json();w((c==null?void 0:c.status)||b),a()}s instanceof Error&&(w(s.message||b),a())}},De=()=>{const[t,a]=h.useState(0),{close:n,visible:d}=re("addItem"),[x]=$(j=>[j.setBudget]),o=ae({mode:"onChange"}),{watch:l,setValue:s,reset:c}=o,[p,f]=h.useState(!1);h.useEffect(()=>()=>{a(0),c()},[d,c]);const g=l("inputType"),O=l("source"),C=l("source"),Z=I(O);h.useEffect(()=>{s("inputType",ye(C))},[C,s]);const F=()=>{n()},R=()=>{a(t+1)},L=()=>{a(t-1)},G=o.handleSubmit(async j=>{f(!0);try{await D(j,F,g,x)}catch{w(b)}finally{f(!1)}});return e.jsx(ie,{id:"addItem",kind:"small",onClose:n,preventOutsideClose:!0,children:e.jsx(ce,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:G,children:[t===0&&e.jsx(_e,{allowNextStep:Z,onNextStep:R,type:g}),t===1&&e.jsx(Pe,{onNextStep:R,onPrevStep:L}),t===2&&e.jsx(be,{loading:p,onClick:()=>null,type:g})]})})})};export{De as AddItemModal};
