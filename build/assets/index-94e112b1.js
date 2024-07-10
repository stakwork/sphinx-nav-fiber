import{bt as C,ac as v,ab as b,bu as I,aa as _,bv as U,bw as D,Q as x,S as l,N as G,r as p,j as e,U as n,bx as K,a5 as y,by as Q,ar as X,ad as ee,bz as f,aw as te,ag as se,bA as ne,ay as oe,ax as re,az as ie,b0 as ae}from"./index-cd4f333a.js";import{B as w,aB as ce,aa as le,aM as de,aJ as B,aH as ue,aC as xe,aI as ge}from"./index-be228c79.js";import{S as pe}from"./index-4e32d254.js";const R=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,he=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,we=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,be=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,ye=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,je=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,Se=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ve=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,_e=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function Ee(t){return[fe,_e,he,we,me,ye].some(r=>r.test(t))?C:Se.test(t)?v:R.test(t)?b:be.test(t)?I:je.test(t)?_:ve.test(t)?U:D}const $e=(t,s="")=>{const a=(s===b?R:/@(\w+)/).exec(t);return a?a[1]:null},A=t=>!!t&&[b,v,_].includes(t),ze=({onClick:t,loading:s,type:r,error:a})=>{const o=G(u=>u.budget),[g,d]=p.useState(10),i=A(r)?"radar":"add_node";return p.useEffect(()=>{(async()=>{try{const c=await Q(i);d(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[i]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ke,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[g," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[K(o)," sats"]})]})]}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:s||!!a,onClick:t,size:"large",startIcon:s?e.jsx(P,{children:e.jsx(ce,{color:l.lightGray,size:12})}):e.jsxs(P,{children:[" ",e.jsx(le,{})]}),type:"submit",variant:"contained",children:"Approve"})}),a?e.jsx(Ae,{children:e.jsxs(Re,{children:[e.jsx(de,{className:"errorIcon"}),e.jsx("span",{children:a})]})}):null]})},ke=x(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Be=x(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ce=x(y)`
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
`,Ae=x(n)`
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
`,Ne=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Le=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Te=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Pe=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Ie=({latitude:t,longitude:s,onNextStep:r,form:a})=>{const o=()=>{const{errors:d}=a.formState;Object.keys(d).length||r()},g=()=>{a.setValue("latitude",""),a.setValue("longitude",""),r()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ue,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(B,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Te},validate:{latitude:Ne}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(B,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Pe},validate:{longitude:Le}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(De,{color:"secondary","data-testid":"skip-location-btn",disabled:!1,onClick:g,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!t||!s,onClick:o,size:"large",variant:"contained",children:"Next"})})]})]})},Ue=x(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,De=x(w)`
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
`,Ge=/^(https?:\/\/)/g,Oe=/(www\.)?/g,Ze=/[\w-]+(\.[\w-]+)*/g,Me=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Fe=/(\/[^\s?]*)?/g,He=/(\?[^\s]*)?/g,O=new RegExp(`${Ge.source}${Oe.source}${Ze.source}${Me.source}?${Fe.source}${He.source}$`,"i"),Z=t=>O.test(t),Ve=({type:t,onNextStep:s,allowNextStep:r})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(We,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(B,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...X,...t!==C?{pattern:{message:"Please enter a valid URL",value:O},validate:{source:Z}}:{}}})}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!r,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),We=x(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,k={[b]:{label:"Twitter handle",img:"twitter_default.svg"},[v]:{label:"Youtube channel",img:"youtube_default.svg"},[_]:{label:"RSS Feed",img:"rss_feed.svg"}},Ye=({onNextStep:t,onPrevStep:s,type:r,value:a})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Je,{children:"Source Type"})})}),e.jsxs(n,{mb:20,children:[e.jsxs(Qe,{children:[e.jsx("img",{alt:k[r].label,className:"badge__img",src:k[r].img}),e.jsx(Ke,{children:k[r].label})]}),e.jsx(qe,{children:$e(a,r)??a})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Xe,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),qe=x(n)`
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
`,Je=x(y)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Ke=x(y)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,Qe=x(n)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Xe=x(w)`
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
`,M=async(t,s,r)=>{const a=A(s)?"radar":"add_node",o={};if(s===C)o.media_url=t.source,o.content_type="audio_video";else if(s===I){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const u=/\/status\/(\d+)/,c=t.source.match(u);if(c!=null&&c[1]){const[,j]=c;o.tweet_id=j}}else o.tweet_id=t.source;o.content_type="tweet"}else if(s===U)o.content_type="webpage",o.web_page=t.source;else if(s===D)o.content_type="document",o.text=t.source;else if(s===b){const[,i]=(t.source||"").match(R)||[];if(i)o.source=i,o.source_type=s;else return}else(s===v||s===_)&&(o.source=t.source,o.source_type=s);t.latitude&&t.longitude&&(o.latitude=t.latitude,o.longitude=t.longitude);let g="",d;te?d=await ne.enable():d=await se.enable(),o.pubkey=d==null?void 0:d.pubkey,g=await oe();try{const i=await re.post(`/${a}`,JSON.stringify(o),{Authorization:g});if(i.error){const{message:u}=i.error;throw new Error(u)}}catch(i){if(i.status===402)await ie(r),await ae(r),await M(t,s,r);else{let u=f;if(i.status===400)try{const c=await i.json();u=c.message||c.status||(c==null?void 0:c.errorCode)||f}catch{u=f}else i instanceof Error&&(u=i.message||f);throw new Error(u)}}},nt=()=>{const[t,s]=p.useState(0),{close:r,visible:a}=ee("addContent"),[o]=G($=>[$.setBudget]),g=ue({mode:"onChange"}),{watch:d,setValue:i,reset:u}=g,[c,j]=p.useState(!1),[F,N]=p.useState("");p.useEffect(()=>()=>{N(""),s(0),u()},[a,u]);const m=d("inputType"),L=d("source"),H=d("longitude"),V=d("latitude"),T=d("source"),W=Z(L);p.useEffect(()=>{i("inputType",Ee(T))},[T,i]);const Y=()=>{r()},E=()=>{s(t+1)},q=()=>{s(t-1)},J=g.handleSubmit(async $=>{j(!0);try{await M($,m,o),pe("Content Added"),Y()}catch(h){let z=f;if((h==null?void 0:h.status)===400){const S=await h.json();z=S.errorCode||(S==null?void 0:S.status)||f}else h instanceof Error&&(z=h.message);N(String(z))}finally{j(!1)}});return e.jsx(xe,{id:"addContent",kind:"small",onClose:r,preventOutsideClose:!0,children:e.jsx(ge,{...g,children:e.jsxs("form",{id:"add-node-form",onSubmit:J,children:[t===0&&e.jsx(Ve,{allowNextStep:W,onNextStep:E,type:m}),t===1&&e.jsx(e.Fragment,{children:A(m)?e.jsx(Ye,{onNextStep:E,onPrevStep:q,type:m,value:L}):e.jsx(Ie,{form:g,latitude:V,longitude:H,onNextStep:E})}),t===2&&e.jsx(ze,{error:F,loading:c,onClick:()=>null,type:m})]})})})};export{nt as AddContentModal};
