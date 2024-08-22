import{aX as B,aY as v,aZ as b,a_ as I,a$ as _,b0 as U,b1 as O,o as x,q as l,J as Z,r as g,j as e,F as n,b2 as K,T as j,b3 as X,aW as Q,O as ee,aV as f,b4 as te,aa as se,b5 as ne,b6 as oe,a9 as re,b7 as ie,N as ae}from"./index-1f7d2a80.js";import{B as w,i as ce,F as le}from"./index-7201cee1.js";import{B as de}from"./index-300d2cb1.js";import{S as ue}from"./index-73f16123.js";import{e as xe}from"./index.esm-119229fc.js";import{C as he}from"./CheckIcon-9a632f8b.js";import{C as ge}from"./ClipLoader-d8e0c2e4.js";import{T as z}from"./index-3fe3fc6a.js";import"./InfoIcon-9b66b8a7.js";const R=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,pe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,we=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,be=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,je=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ye=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,Se=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ve=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,_e=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function $e(t){return[fe,_e,pe,we,me,je].some(i=>i.test(t))?B:Se.test(t)?v:R.test(t)?b:be.test(t)?I:ye.test(t)?_:ve.test(t)?U:O}const Ee=(t,s="")=>{const o=(s===b?R:/@(\w+)/).exec(t);return o?o[1]:null},L=t=>!!t&&[b,v,_].includes(t),Ce=({onClick:t,loading:s,type:i,error:o})=>{const r=Z(u=>u.budget),[h,d]=g.useState(10),a=L(i)?"radar":"add_node";return g.useEffect(()=>{(async()=>{try{const c=await X(a);d(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[a]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Be,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ke,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[h," sats"]})]}),e.jsxs(ze,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[K(r)," sats"]})]})]}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:s||!!o,onClick:t,size:"large",startIcon:s?e.jsx(P,{children:e.jsx(ge,{color:l.lightGray,size:12})}):e.jsxs(P,{children:[" ",e.jsx(he,{})]}),type:"submit",variant:"contained",children:"Approve"})}),o?e.jsx(Le,{children:e.jsxs(Re,{children:[e.jsx(xe,{className:"errorIcon"}),e.jsx("span",{children:o})]})}):null]})},ke=x(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,ze=x(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Be=x(j)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Re=x(n)`
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
`,Le=x(n)`
  display: flex;
  align-items: center;
  color: ${l.primaryRed};
  position: relative;
  margin-top: 20px;
`,P=x.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Ne=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Ae=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Te=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Pe=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Ie=({latitude:t,longitude:s,onNextStep:i,form:o})=>{const r=()=>{const{errors:d}=o.formState;Object.keys(d).length||i()},h=()=>{o.setValue("latitude",""),o.setValue("longitude",""),i()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ue,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(z,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Te},validate:{latitude:Ne}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(z,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Pe},validate:{longitude:Ae}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Oe,{color:"secondary","data-testid":"skip-location-btn",disabled:!1,onClick:h,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!t||!s,onClick:r,size:"large",variant:"contained",children:"Next"})})]})]})},Ue=x(j)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Oe=x(w)`
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
`,Ze=/^(https?:\/\/)/g,De=/(www\.)?/g,Ge=/[\w-]+(\.[\w-]+)*/g,Fe=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Me=/(\/[^\s?]*)?/g,We=/(\?[^\s]*)?/g,D=new RegExp(`${Ze.source}${De.source}${Ge.source}${Fe.source}?${Me.source}${We.source}$`,"i"),G=t=>{if(t==null?void 0:t.match(D)){const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}return!1},Ve=({type:t,onNextStep:s,allowNextStep:i})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ye,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(z,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...Q,...t!==B?{pattern:{message:"Please enter a valid URL",value:D},validate:{source:G}}:{}}})}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!i,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Ye=x(j)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,k={[b]:{label:"Twitter handle",img:"twitter_default.svg"},[v]:{label:"Youtube channel",img:"youtube_default.svg"},[_]:{label:"RSS Feed",img:"rss_feed.svg"}},qe=({onNextStep:t,onPrevStep:s,type:i,value:o})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Je,{children:"Source Type"})})}),e.jsxs(n,{mb:20,children:[e.jsxs(Xe,{children:[e.jsx("img",{alt:k[i].label,className:"badge__img",src:k[i].img}),e.jsx(Ke,{children:k[i].label})]}),e.jsx(He,{children:Ee(o,i)??o})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Qe,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),He=x(n)`
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
`,Je=x(j)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Ke=x(j)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,Xe=x(n)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Qe=x(w)`
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
`,F=async(t,s,i)=>{const o=L(s)?"radar":"add_node",r={};if(s===B)r.media_url=t.source,r.content_type="audio_video";else if(s===I){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const u=/\/status\/(\d+)/,c=t.source.match(u);if(c!=null&&c[1]){const[,y]=c;r.tweet_id=y}}else r.tweet_id=t.source;r.content_type="tweet"}else if(s===U)r.content_type="webpage",r.web_page=t.source;else if(s===O)r.content_type="document",r.text=t.source;else if(s===b){const[,a]=(t.source||"").match(R)||[];if(a)r.source=a,r.source_type=s;else return}else(s===v||s===_)&&(r.source=t.source,r.source_type=s);t.latitude&&t.longitude&&(r.latitude=t.latitude,r.longitude=t.longitude);let h="",d;te?d=await ne.enable():d=await se.enable(),r.pubkey=d==null?void 0:d.pubkey,h=await oe();try{const a=await re.post(`/${o}`,JSON.stringify(r),{Authorization:h});if(a.error){const{message:u}=a.error;throw new Error(u)}}catch(a){if(a.status===402)await ie(i),await ae(i),await F(t,s,i);else{let u=f;if(a.status===400)try{const c=await a.json();u=c.message||c.status||(c==null?void 0:c.errorCode)||f}catch{u=f}else a instanceof Error&&(u=a.message||f);throw new Error(u)}}},lt=()=>{const[t,s]=g.useState(0),{close:i,visible:o}=ee("addContent"),[r]=Z(E=>[E.setBudget]),h=ce({mode:"onChange"}),{watch:d,setValue:a,reset:u}=h,[c,y]=g.useState(!1),[M,N]=g.useState("");g.useEffect(()=>()=>{N(""),s(0),u()},[o,u]);const m=d("inputType"),A=d("source"),W=d("longitude"),V=d("latitude"),T=d("source"),Y=G(A);g.useEffect(()=>{a("inputType",$e(T))},[T,a]);const q=()=>{i()},$=()=>{s(t+1)},H=()=>{s(t-1)},J=h.handleSubmit(async E=>{y(!0);try{await F(E,m,r),ue("Content Added"),q()}catch(p){let C=f;if((p==null?void 0:p.status)===400){const S=await p.json();C=S.errorCode||(S==null?void 0:S.status)||f}else p instanceof Error&&(C=p.message);N(String(C))}finally{y(!1)}});return e.jsx(de,{id:"addContent",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(le,{...h,children:e.jsxs("form",{id:"add-node-form",onSubmit:J,children:[t===0&&e.jsx(Ve,{allowNextStep:Y,onNextStep:$,type:m}),t===1&&e.jsx(e.Fragment,{children:L(m)?e.jsx(qe,{onNextStep:$,onPrevStep:H,type:m,value:A}):e.jsx(Ie,{form:h,latitude:V,longitude:W,onNextStep:$})}),t===2&&e.jsx(Ce,{error:M,loading:c,onClick:()=>null,type:m})]})})})};export{lt as AddContentModal};
