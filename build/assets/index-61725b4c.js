import{aX as B,aY as v,aZ as b,a_ as O,a$ as _,b0 as E,b1 as U,b2 as G,o as x,p as l,C as D,r as g,j as e,F as n,b3 as Q,D as j,b4 as X,aW as ee,Q as te,aV as f,b5 as se,ab as ne,b6 as oe,b7 as re,aa as ie,b8 as ae,O as ce}from"./index-1d939776.js";import{B as w,i as le,F as de}from"./index-ae70cbfe.js";import{B as ue}from"./index-fb842d70.js";import{S as xe}from"./index-fcede0e9.js";import{e as he}from"./index.esm-376dc9ec.js";import{C as ge}from"./CheckIcon-cdd6a774.js";import{C as pe}from"./ClipLoader-70bb3610.js";import{T as z}from"./index-d1547770.js";import"./InfoIcon-4f119a7c.js";const L=/\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,we=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,me=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,be=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,je=/https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/,ye=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Se=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,ve=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,_e=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Ee=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/,$e=/https:\/\/github\.com\/[\w-]+\/[\w-]+/;function Ce(t){return[we,Ee,fe,me,be,ye].some(i=>i.test(t))?B:ve.test(t)?v:L.test(t)?b:je.test(t)?O:Se.test(t)?_:$e.test(t)?E:_e.test(t)?U:G}const Re=(t,s="")=>{const o=(s===b?L:/@(\w+)/).exec(t);return o?o[1]:null},A=t=>!!t&&[b,v,_,E].includes(t),ke=({onClick:t,loading:s,type:i,error:o})=>{const r=D(u=>u.budget),[h,d]=g.useState(10),a=A(i)?"radar":"add_node";return g.useEffect(()=>{(async()=>{try{const c=await X(a);d(c.data.price)}catch(c){console.error("cannot fetch",c)}})()},[a]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Le,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ze,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[h," sats"]})]}),e.jsxs(Be,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Q(r)," sats"]})]})]}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:s||!!o,onClick:t,size:"large",startIcon:s?e.jsx(I,{children:e.jsx(pe,{color:l.lightGray,size:12})}):e.jsxs(I,{children:[" ",e.jsx(ge,{})]}),type:"submit",variant:"contained",children:"Approve"})}),o?e.jsx(Ne,{children:e.jsxs(Ae,{children:[e.jsx(he,{className:"errorIcon"}),e.jsx("span",{children:o})]})}):null]})},ze=x(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,Le=x(j)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ae=x(n)`
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
`,I=x.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Te=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Pe=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Ie=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Oe=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Ue=({latitude:t,longitude:s,onNextStep:i,form:o})=>{const r=()=>{const{errors:d}=o.formState;Object.keys(d).length||i()},h=()=>{o.setValue("latitude",""),o.setValue("longitude",""),i()};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Ge,{children:"Add Location"})})}),e.jsxs(n,{direction:"row",mb:20,children:[e.jsx(n,{basis:"100px",grow:1,children:e.jsx(z,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Ie},validate:{latitude:Te}}})}),e.jsx(n,{basis:"100px",grow:1,ml:20,children:e.jsx(z,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Oe},validate:{longitude:Pe}}})})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(De,{color:"secondary","data-testid":"skip-location-btn",disabled:!1,onClick:h,size:"large",variant:"contained",children:"Skip"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!t||!s,onClick:r,size:"large",variant:"contained",children:"Next"})})]})]})},Ge=x(j)`
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
`,Ze=/^(https?:\/\/)/g,Fe=/(www\.)?/g,Me=/[\w-]+(\.[\w-]+)*/g,We=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Ye=/(\/[^\s?]*)?/g,He=/(\?[^\s]*)?/g,Z=new RegExp(`${Ze.source}${Fe.source}${Me.source}${We.source}?${Ye.source}${He.source}$`,"i"),F=t=>{if(t==null?void 0:t.match(Z)){const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}return!1},Ve=({type:t,onNextStep:s,allowNextStep:i})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(qe,{children:"Add Content"})})}),e.jsx(n,{mb:12,children:e.jsx(z,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...ee,...t!==B?{pattern:{message:"Please enter a valid URL",value:Z},validate:{source:F}}:{}}})}),e.jsx(n,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!i,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),qe=x(j)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,k={[b]:{label:"Twitter handle",img:"twitter_default.svg"},[v]:{label:"Youtube channel",img:"youtube_default.svg"},[_]:{label:"RSS Feed",img:"rss_feed.svg"},[E]:{label:"GitHub Repository",img:"github_default.svg"}},Je=({onNextStep:t,onPrevStep:s,type:i,value:o})=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(Qe,{children:"Source Type"})})}),e.jsxs(n,{mb:20,children:[e.jsxs(et,{children:[e.jsx("img",{alt:k[i].label,className:"badge__img",src:k[i].img}),e.jsx(Xe,{children:k[i].label})]}),e.jsx(Ke,{children:Re(o,i)??o})]}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(tt,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),Ke=x(n)`
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
`,Qe=x(j)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Xe=x(j)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,et=x(n)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,tt=x(w)`
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
`,M=async(t,s,i)=>{const o=A(s)?"radar":"add_node",r={};if(s===B)r.media_url=t.source,r.content_type="audio_video";else if(s===O){if(/(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s.test(t.source)){const u=/\/status\/(\d+)/,c=t.source.match(u);if(c!=null&&c[1]){const[,y]=c;r.tweet_id=y}}else r.tweet_id=t.source;r.content_type="tweet"}else if(s===U)r.content_type="webpage",r.web_page=t.source;else if(s===G)r.content_type="document",r.text=t.source;else if(s===b){const[,a]=(t.source||"").match(L)||[];if(a)r.source=a,r.source_type=s;else return}else(s===v||s===_||s===E)&&(r.source=t.source,r.source_type=s);t.latitude&&t.longitude&&(r.latitude=t.latitude,r.longitude=t.longitude);let h="",d;se?d=await oe.enable():d=await ne.enable(),r.pubkey=d==null?void 0:d.pubkey,h=await re();try{const a=await ie.post(`/${o}`,JSON.stringify(r),{Authorization:h});if(a.error){const{message:u}=a.error;throw new Error(u)}}catch(a){if(a.status===402)await ae(i),await ce(i),await M(t,s,i);else{let u=f;if(a.status===400)try{const c=await a.json();u=c.message||c.status||(c==null?void 0:c.errorCode)||f}catch{u=f}else a instanceof Error&&(u=a.message||f);throw new Error(u)}}},ut=()=>{const[t,s]=g.useState(0),{close:i,visible:o}=te("addContent"),{setBudget:r}=D(C=>C),h=le({mode:"onChange"}),{watch:d,setValue:a,reset:u}=h,[c,y]=g.useState(!1),[W,N]=g.useState("");g.useEffect(()=>()=>{N(""),s(0),u()},[o,u]);const m=d("inputType"),T=d("source"),Y=d("longitude"),H=d("latitude"),P=d("source"),V=F(T);g.useEffect(()=>{a("inputType",Ce(P))},[P,a]);const q=()=>{i()},$=()=>{s(t+1)},J=()=>{s(t-1)},K=h.handleSubmit(async C=>{y(!0);try{await M(C,m,r),xe("Content Added"),q()}catch(p){let R=f;if((p==null?void 0:p.status)===400){const S=await p.json();R=S.errorCode||(S==null?void 0:S.status)||f}else p instanceof Error&&(R=p.message);N(String(R))}finally{y(!1)}});return e.jsx(ue,{id:"addContent",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(de,{...h,children:e.jsxs("form",{id:"add-node-form",onSubmit:K,children:[t===0&&e.jsx(Ve,{allowNextStep:V,onNextStep:$,type:m}),t===1&&e.jsx(e.Fragment,{children:A(m)?e.jsx(Je,{onNextStep:$,onPrevStep:J,type:m,value:T}):e.jsx(Ue,{form:h,latitude:H,longitude:Y,onNextStep:$})}),t===2&&e.jsx(ke,{error:W,loading:c,onClick:()=>null,type:m})]})})})};export{ut as AddContentModal};
