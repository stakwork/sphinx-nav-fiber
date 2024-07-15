import{bw as C,ac as v,ab as b,bx as I,aa as _,by as U,bz as D,Q as x,S as l,N as G,r as h,j as e,U as n,bA as J,a5 as y,bB as Q,ar as X,ad as ee,bC as p,aw as te,ag as se,bD as ne,ay as oe,ax as re,az as ie,b0 as ae}from"./index-f6a7245a.js";import{B as w,aF as ce,ab as le,aN as de,aK as B,af as ue,aG as xe,ag as ge}from"./index-64bfa90c.js";import{S as he}from"./index-06eb7eee.js";const R=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,pe=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,we=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,be=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,ye=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,je=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,Se=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ve=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,_e=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function Ee(t){return[pe,_e,fe,we,me,ye].some(i=>i.test(t))?C:Se.test(t)?v:R.test(t)?b:be.test(t)?I:je.test(t)?_:ve.test(t)?U:D}const $e=(t,s="")=>{const o=(s===b?R:/@(\w+)/).exec(t);return o?o[1]:null},N=t=>!!t&&[b,v,_].includes(t),ze=({onClick:t,loading:s,type:i,error:o})=>{const r=G(u=>u.budget),[g,d]=h.useState(10),a=N(i)?"radar":"add_node";return h.useEffect(()=>{(async()=>{try{const c=await Q(a);d(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[a]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ke,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[g," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(r)," sats"]})]})]}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:s||!!o,onClick:t,size:"large",startIcon:s?e.jsx(P,{children:e.jsx(ce,{color:l.lightGray,size:12})}):e.jsxs(P,{children:[" ",e.jsx(le,{})]}),type:"submit",variant:"contained",children:"Approve"})}),o?e.jsx(Ne,{children:e.jsxs(Re,{children:[e.jsx(de,{className:"errorIcon"}),e.jsx("span",{children:o})]})}):null]})},ke=x(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Ne=x(n)`
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
`,Ae=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Le=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Te=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Pe=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Ie=({latitude:t,longitude:s,onNextStep:i,form:o})=>{const r=()=>{const{errors:d}=o.formState;Object.keys(d).length||i()},g=()=>{o.setValue("latitude",""),o.setValue("longitude",""),i()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ue,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(B,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Te},validate:{latitude:Ae}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(B,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Pe},validate:{longitude:Le}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(De,{color:"secondary","data-testid":"skip-location-btn",disabled:!1,onClick:g,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!t||!s,onClick:r,size:"large",variant:"contained",children:"Next"})})]})]})},Ue=x(y)`
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
`,Ge=/^(https?:\/\/)/g,Oe=/(www\.)?/g,Ze=/[\w-]+(\.[\w-]+)*/g,Fe=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Me=/(\/[^\s?]*)?/g,We=/(\?[^\s]*)?/g,O=new RegExp(`${Ge.source}${Oe.source}${Ze.source}${Fe.source}?${Me.source}${We.source}$`,"i"),Z=t=>{if(t==null?void 0:t.match(O)){const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}return!1},Ve=({type:t,onNextStep:s,allowNextStep:i})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ye,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(B,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...X,...t!==C?{pattern:{message:"Please enter a valid URL",value:O},validate:{source:Z}}:{}}})}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!i,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Ye=x(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,k={[b]:{label:"Twitter handle",img:"twitter_default.svg"},[v]:{label:"Youtube channel",img:"youtube_default.svg"},[_]:{label:"RSS Feed",img:"rss_feed.svg"}},qe=({onNextStep:t,onPrevStep:s,type:i,value:o})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ke,{children:"Source Type"})})}),e.jsxs(n,{mb:20,children:[e.jsxs(Qe,{children:[e.jsx("img",{alt:k[i].label,className:"badge__img",src:k[i].img}),e.jsx(Je,{children:k[i].label})]}),e.jsx(He,{children:$e(o,i)??o})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(Xe,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),He=x(n)`
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
`,Ke=x(y)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Je=x(y)`
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
`,F=async(t,s,i)=>{const o=N(s)?"radar":"add_node",r={};if(s===C)r.media_url=t.source,r.content_type="audio_video";else if(s===I){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const u=/\/status\/(\d+)/,c=t.source.match(u);if(c!=null&&c[1]){const[,j]=c;r.tweet_id=j}}else r.tweet_id=t.source;r.content_type="tweet"}else if(s===U)r.content_type="webpage",r.web_page=t.source;else if(s===D)r.content_type="document",r.text=t.source;else if(s===b){const[,a]=(t.source||"").match(R)||[];if(a)r.source=a,r.source_type=s;else return}else(s===v||s===_)&&(r.source=t.source,r.source_type=s);t.latitude&&t.longitude&&(r.latitude=t.latitude,r.longitude=t.longitude);let g="",d;te?d=await ne.enable():d=await se.enable(),r.pubkey=d==null?void 0:d.pubkey,g=await oe();try{const a=await re.post(`/${o}`,JSON.stringify(r),{Authorization:g});if(a.error){const{message:u}=a.error;throw new Error(u)}}catch(a){if(a.status===402)await ie(i),await ae(i),await F(t,s,i);else{let u=p;if(a.status===400)try{const c=await a.json();u=c.message||c.status||(c==null?void 0:c.errorCode)||p}catch{u=p}else a instanceof Error&&(u=a.message||p);throw new Error(u)}}},nt=()=>{const[t,s]=h.useState(0),{close:i,visible:o}=ee("addContent"),[r]=G($=>[$.setBudget]),g=ue({mode:"onChange"}),{watch:d,setValue:a,reset:u}=g,[c,j]=h.useState(!1),[M,A]=h.useState("");h.useEffect(()=>()=>{A(""),s(0),u()},[o,u]);const m=d("inputType"),L=d("source"),W=d("longitude"),V=d("latitude"),T=d("source"),Y=Z(L);h.useEffect(()=>{a("inputType",Ee(T))},[T,a]);const q=()=>{i()},E=()=>{s(t+1)},H=()=>{s(t-1)},K=g.handleSubmit(async $=>{j(!0);try{await F($,m,r),he("Content Added"),q()}catch(f){let z=p;if((f==null?void 0:f.status)===400){const S=await f.json();z=S.errorCode||(S==null?void 0:S.status)||p}else f instanceof Error&&(z=f.message);A(String(z))}finally{j(!1)}});return e.jsx(xe,{id:"addContent",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(ge,{...g,children:e.jsxs("form",{id:"add-node-form",onSubmit:K,children:[t===0&&e.jsx(Ve,{allowNextStep:Y,onNextStep:E,type:m}),t===1&&e.jsx(e.Fragment,{children:N(m)?e.jsx(qe,{onNextStep:E,onPrevStep:H,type:m,value:L}):e.jsx(Ie,{form:g,latitude:V,longitude:W,onNextStep:E})}),t===2&&e.jsx(ze,{error:M,loading:c,onClick:()=>null,type:m})]})})})};export{nt as AddContentModal};
