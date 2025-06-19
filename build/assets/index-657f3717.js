import{r as i,j as e,s as u,g as h,F as y,o as Z,c as ee,A as pe,p as X,i as de,q as ue,H as me,t as fe,v as he}from"./index-94a99cb5.js";import{ClaimsModal as ge}from"./index-6315effe.js";import{U as xe}from"./index-b7e0498f.js";import{t as Y,u as F}from"./index-201499a5.js";import{u as P,a as ye,b as be,I as we,c as te,d as je}from"./index-57e1c14f.js";import{M as ve,V as ke}from"./index-a600fa10.js";import{S as Se,R as Ce,s as U,M as Te}from"./index-d98910c6.js";import"./string-a277709d.js";import"./index-29163da3.js";import"./three.module-0192f2a3.js";import"./isPlainObject-ae6a7b20.js";import"./TextareaAutosize-70fe4753.js";import"./CheckIcon-6ed45394.js";import"./index-25f27086.js";import"./index-57fdc0f5.js";import"./index-c6426ded.js";import"./ClipLoader-e4e98d79.js";import"./clsx-79c14d78.js";import"./SourcesTableIcon-08fbce7a.js";import"./DeleteNodeIcon-2a62c8a5.js";import"./SoundIcon-7b463ce2.js";import"./SucessFeedBackIcon-7659f508.js";import"./Skeleton-ca306e86.js";import"./index-ee683b3f.js";import"./Stack-c86f6b96.js";import"./FormControlLabel-ff1a15bb.js";import"./Typography-88431e2a.js";import"./createSvgIcon-f951a079.js";const re=i.memo(()=>{const s=P(a=>a.isPlaying),c=P(a=>a.setIsPlaying),t=P(a=>a.setVolume),r=P(a=>a.setPlaybackSpeed),l=P(a=>a.playbackSpeed),n=P(a=>a.playerRef),[p,g]=i.useState(!1),b=[.5,1,1.5,2],f=()=>{if(n){const a=n.getCurrentTime()-15;n.seekTo(a,"seconds")}},m=()=>{if(n){const a=n.getCurrentTime()+15;n.seekTo(a,"seconds")}},v=()=>{c(!s)},d=()=>{g(!p),t(p?1:0)},o=()=>{const j=(b.indexOf(l)+1)%b.length,C=b[j];if(r(C),n){const E=n.getInternalPlayer();E&&typeof E.playbackRate<"u"&&(E.playbackRate=C)}};return e.jsxs($e,{children:[e.jsx(Re,{onClick:d,children:p?e.jsx(ve,{}):e.jsx(ke,{})}),e.jsx(Ie,{onClick:f,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(Pe,{"data-testid":"play-pause-button",onClick:v,size:"small",children:s?e.jsx(ye,{"data-testid":"pause-icon"}):e.jsx(be,{"data-testid":"play-icon"})}),e.jsx(_e,{onClick:m,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(Ee,{onClick:o,children:[l,"x"]})]})});re.displayName="Controls";const $e=u(y).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${h.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${h.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`,Pe=u(we)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Ie=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,_e=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Re=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${h.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${h.DROPDOWN_BG};
  }
`,Ee=u.button`
  margin-top: 4px;
  background: ${h.BG1};
  color: ${h.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,se=i.memo(({left:s,width:c,title:t})=>e.jsx(Me,{style:{left:`${s}%`,width:`calc(${c}%)`},children:e.jsx("div",{className:"title",children:t})}));se.displayName="Chapter";const Me=u.div`
  position: absolute;
  top: -3px;
  height: 100%;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  & + & {
    border-left: 0.1px solid ${h.white};
  }

  .title {
    position: absolute;
    bottom: calc(100% + 16px);
    display: none;
    color: ${h.white};
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    .title {
      display: block;
    }
  }
`,ne=i.memo(({chapters:s,duration:c})=>c?e.jsx(e.Fragment,{children:s.map((t,r)=>{var f,m,v,d,o;const l=(f=t==null?void 0:t.properties)!=null&&f.timestamp?Y(t.properties.timestamp)/1e3:0,n=(v=(m=s[r+1])==null?void 0:m.properties)!=null&&v.timestamp?Y((d=s[r+1].properties)==null?void 0:d.timestamp)/1e3:c,p=Math.floor(l/c*100),b=Math.floor(n/c*100)-p;return e.jsx(se,{left:p,title:((o=t==null?void 0:t.properties)==null?void 0:o.name)||(t==null?void 0:t.name)||"",width:b},`${t.ref_id}_${r}`)})}):null);ne.displayName="Chapters";const oe=i.memo(({type:s,left:c,img:t})=>{var b,f;const r=Z(m=>m.normalizedSchemasByType),l=(b=r[s])==null?void 0:b.primary_color,n=(f=r[s])==null?void 0:f.icon,p=n?`/svg-icons/${n}.svg`:"",g={iconStart:t||p,color:l??h.THING};return e.jsx(Ae,{style:{left:`${c}%`},children:e.jsx(ie,{...g,label:s})})});oe.displayName="Marker";const ie=i.memo(({iconStart:s,color:c,label:t})=>e.jsx(Ne,{color:c,children:s&&e.jsx("img",{alt:t,className:"badge__img",onError:console.log,src:s})}));ie.displayName="Badge";const Ne=u(y).attrs({direction:"row"})`
  cursor: pointer;
  background: ${({color:s})=>s};
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  .badge__img {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }
`,Ae=u.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${h.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,ae=i.memo(({markers:s,duration:c})=>e.jsx(e.Fragment,{children:s.map((t,r)=>{var g;const l=Math.floor(((t==null?void 0:t.start)||0)/c*100),n=(t==null?void 0:t.node_type)||"",p=((g=t==null?void 0:t.properties)==null?void 0:g.image_url)||"";return e.jsx(oe,{img:p,left:l,type:n},`${t.ref_id}_${r}`)})}));ae.displayName="Markers";const We=({duration:s,markers:c,handleProgressChange:t,playingTIme:r,chapters:l})=>{const n=10/s*100;return e.jsxs(Fe,{children:[e.jsx(ze,{max:s,onChange:t,value:r,width:n}),l&&e.jsx(ce,{children:e.jsx(ne,{chapters:l,duration:s})}),e.jsx(Be,{children:e.jsx(ae,{duration:s,markers:c})})]})},ce=u(y)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,Fe=u(y)`
  position: relative;
  flex: 1 1 100%;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    ${ce} {
      display: block;
    }
  }
`,Be=u(y)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,ze=u(Se)`
  && {
    z-index: 20;
    color: ${h.white};
    height: 3px;
    width: calc(100% - 12px);
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: ${({width:s})=>`${s}%`};
      height: 54px;
      border-radius: 8px;
      background-color: ${h.primaryBlue};
      opacity: 0.2;
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }
`,He=({markers:s,chapters:c})=>{const{playingNode:t,playerRef:r}=P(f=>f),[l,n]=i.useState(0),p=t,g=i.useCallback((f,m)=>{const v=Array.isArray(m)?m[0]:m;r&&r.seekTo(v,"seconds")},[r]);i.useEffect(()=>{const f=setInterval(()=>{if(r&&n){const m=r.getCurrentTime();n(m)}},500);return()=>clearInterval(f)},[r,n]);const b=(r==null?void 0:r.getDuration())||0;return p?e.jsxs(De,{children:[e.jsx(re,{}),e.jsx(We,{chapters:c,duration:b,handleProgressChange:g,markers:s,playingTIme:l})]}):null},De=u(y).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${h.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Ge=(s,c)=>{let t=0,r=s.length-1;for(;t<=r;){const l=Math.floor((t+r)/2),n=s[l],{start:p,end:g}=n.properties;if(c>=p&&c<=g)return n;c<p?r=l-1:t=l+1}return null},Le=({mediaUrl:s})=>{const c=i.useRef(null),[t,r]=i.useState("ready"),[l,n]=i.useState(!1),[p,g]=i.useState(!1),{setActiveEdge:b}=te(x=>x),{dataInitial:f}=ee(x=>x),{isPlaying:m,playingTime:v,setIsPlaying:d,setPlayingTime:o,setDuration:a,playingNode:j,volume:C,setHasError:E,resetPlayer:M,isSeeking:I,setIsSeeking:B,setPlayerRef:_,playerRef:R,playbackSpeed:z}=P(x=>x);i.useEffect(()=>()=>M(),[M]),i.useEffect(()=>{j&&!l&&(o(0),a(0),n(!1))},[j,o,a,n,l]),i.useEffect(()=>{I&&R&&(R.seekTo(v,"seconds"),B(!1))},[v,I,B,R]);const V=i.useCallback(()=>{d(!m)},[m,d]),G=()=>{E(!0),r("error")},T=i.useCallback(x=>{x.code},[V]);i.useEffect(()=>(window.addEventListener("keydown",T),()=>{window.removeEventListener("keydown",T)}),[T]);const A=i.useMemo(()=>((f==null?void 0:f.links.filter(S=>{var W;return(W=S==null?void 0:S.properties)==null?void 0:W.start}))||[]).slice().sort((S,W)=>{var J,K;return((J=S==null?void 0:S.properties)==null?void 0:J.start)-((K=W==null?void 0:W.properties)==null?void 0:K.start)}),[f]),H=x=>{if(!I){const S=x.playedSeconds,W=Ge(A,S);b(W||null)}},k=i.useMemo(()=>{const S=new URL(window.location.href).searchParams.get("start");return S?parseFloat(S):null},[]),$=()=>{r("ready"),R&&k!==null&&!p&&(R.seekTo(k,"seconds"),g(!0))},w=i.useCallback(()=>{m||d(!0)},[d,m]),N=i.useCallback(()=>{m&&d(!1)},[d,m]),D=i.useCallback(x=>{!R&&x&&_(x)},[_,R]);return s?e.jsxs(Ve,{ref:c,tabIndex:0,children:[e.jsx(Oe,{isFullScreen:!1,children:e.jsx(pe,{size:120,src:(j==null?void 0:j.image_url)||"",type:"clip"})}),e.jsx(qe,{isFullScreen:!1,children:e.jsx(Ce,{ref:D,height:"219px",onBuffer:()=>r("buffering"),onBufferEnd:()=>r("ready"),onError:G,onPause:N,onPlay:w,onProgress:H,onReady:$,playbackRate:z,playing:m,url:s||"",volume:C,width:"100%"})}),t==="error"&&e.jsx(Ue,{className:"error-wrapper",children:"Error happened, please try later"})]}):null},Ve=u(y)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Oe=u(y)`
  position: absolute;
  top: ${s=>s.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Ue=u(y)`
  height: 60px;
  padding: 12px 16px;
  color: ${h.primaryRed};
`,qe=u.div`
  margin: ${s=>s.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Xe=i.memo(Le),Ye=({onChangeChapter:s})=>{const c=F(n=>n.highlights),{playerRef:t}=P(n=>n),r=i.useCallback(n=>{const p=Array.isArray(n)?n[0]:n;t&&t.seekTo(p,"seconds")},[t]),l=n=>{s(),r(c[n].startTime)};return e.jsx(Je,{direction:"column",children:c.length>0&&e.jsx(Ke,{children:e.jsx(Qe,{children:c.map((n,p)=>e.jsxs(Ze,{onClick:()=>l(p),children:[e.jsx(et,{children:n.title}),e.jsxs(tt,{children:[Math.floor(n.startTime/60),":",(n.startTime%60).toString().padStart(2,"0")]})]},p))})})})},Je=u(y)({width:"100%",gap:"20px"}),Ke=u.div`
  width: 100%;
`,Qe=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ze=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  background: ${h.gray500};
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${h.gray400};
  }
`,et=u.span`
  font-size: 14px;
  color: ${h.white};
  font-weight: 500;
  flex: 1;
`,tt=u.span`
  font-size: 12px;
  color: ${h.blueTextAccent};
  font-family: monospace;
`,le=i.forwardRef(({active:s,start:c,text:t},r)=>e.jsxs(rt,{ref:r,className:X({active:s}),children:[e.jsx(st,{children:c}),e.jsx(nt,{children:e.jsx("span",{children:t})})]}));le.displayName="ParagraphComponent";const q=i.memo(le,(s,c)=>s.active===c.active),rt=u(y)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${h.AI_HIGHLIGHT};
  }
`,st=u.span`
  background: ${h.lightBlue100};
  color: ${h.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,nt=u.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${h.AI_HIGHLIGHT};
  }
`,ot=({transcriptString:s,isFirst:c})=>{const[t,r]=i.useState(0),[l,n]=i.useState(!1),{playerRef:p}=P(d=>d),g=s.replace(/^["']|["']$/g,""),b=JSON.parse(g),f=i.useRef(null),m=i.useRef(null),v=i.useRef(null);return i.useEffect(()=>{const d=setInterval(()=>{if(p&&r){const o=p.getCurrentTime();r(o)}},100);return()=>clearInterval(d)},[p,r]),i.useEffect(()=>{const d=()=>{n(!0),v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{n(!1)},1e3)},o=m.current;return o&&o.addEventListener("scroll",d),()=>{o&&o.removeEventListener("scroll",d)}},[]),i.useEffect(()=>{!l&&f.current&&f.current.scrollIntoView({behavior:"smooth",block:"center"})},[t,l]),e.jsx(it,{ref:m,children:e.jsx(e.Fragment,{children:c?e.jsx(e.Fragment,{children:b[0].start>t?e.jsx(q,{active:!1,start:U(b[0].start),text:b[0].text}):e.jsx(e.Fragment,{children:b.map(d=>{const o=U(d.start),a=d.start<t&&t<d.end;return!c||d.start<=t+5?e.jsx(q,{ref:a?f:null,active:a,start:o,text:d.text},`${d.start}-${d.end}`):null})})}):e.jsx(e.Fragment,{children:b.map(d=>{const o=U(d.start),a=d.start<t&&t<d.end;return e.jsx(q,{ref:a?f:null,active:a,start:o,text:d.text},`${d.start}-${d.end}`)})})})})},it=u.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,at=()=>{var d;const s=F(o=>o.clips),c=F(o=>o.setActiveClip),t=F(o=>o.activeClip),{playerRef:r}=P(o=>o),[l,n]=i.useState(0),[p,g]=i.useState(!0),[b,f]=te(o=>[o.setActiveNode,o.activeNode]),m=je(o=>o.simulation);i.useEffect(()=>{const o=setInterval(()=>{if(r&&n){const a=r.getCurrentTime();n(a)}},100);return()=>clearInterval(o)},[r,n]),i.useEffect(()=>{l?(()=>{var j;const a=s.find(C=>{var I;const[E,M]=v((I=C==null?void 0:C.properties)==null?void 0:I.timestamp);return E<=l&&l<M});t&&(a==null?void 0:a.ref_id)===(t==null?void 0:t.ref_id)||!a||(g((a==null?void 0:a.ref_id)===((j=s[0])==null?void 0:j.ref_id)),c(a||null))})():(g(!0),c(s[0]))},[l,s,t,c]),i.useEffect(()=>{if(t&&(!f||t.ref_id!==f.ref_id)){const o=m==null?void 0:m.nodes().find(a=>a.ref_id===t.ref_id);typeof(o==null?void 0:o.fx)=="number"&&b(o)}},[t,f,b,m]);const v=o=>o?o.split("-").map(Number):[0,0];return e.jsx(ct,{direction:"row",children:((d=t==null?void 0:t.properties)==null?void 0:d.transcript)&&e.jsx(ot,{isFirst:p,transcriptString:t.properties.transcript})})},ct=u(y)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
  @media (max-width: 768px) {
    margin: 0;
  }
`,O="chapters",L="transcript",lt=()=>{var l,n;const s=F(p=>p.selectedEpisode),c=P(p=>p.isPlaying),[t,r]=i.useState(O);return i.useEffect(()=>{c&&r(L)},[c]),e.jsxs(dt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(ut,{children:((l=s==null?void 0:s.properties)==null?void 0:l.media_url)&&e.jsx(Xe,{mediaUrl:s.properties.media_url})}),e.jsx(y,{className:"heading",children:(n=s==null?void 0:s.properties)==null?void 0:n.episode_title}),e.jsxs(mt,{direction:"row",children:[e.jsx(Q,{className:X({selected:t===O}),onClick:()=>r(O),children:"Chapters"}),e.jsx(Q,{className:X({selected:t===L}),onClick:()=>r(L),children:"Transcript"})]}),e.jsxs(pt,{children:[t===O&&e.jsx(Ye,{onChangeChapter:()=>r(L)}),t===L&&e.jsx(at,{})]})]})},pt=u(y)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${h.white};
  background: ${h.BG1};
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 0 24px 24px;
  overflow-y: auto;
  margin-top: 0;
  flex: 1 1 100%;
  @media (max-width: 768px) {
    max-width: 100vw;
  }
`,dt=u(y)(({theme:s})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[s.breakpoints.up("sm")]:{width:Te},"@media (max-width: 768px)":{padding:0}})),ut=u(y)(({theme:s})=>({width:"100%",marginBottom:"20px",[s.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),Q=u(y)`
  color: ${h.white};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;

  &.selected {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
`,mt=u(y)`
  background: ${h.primaryBlue};
  padding: 12px 24px;
  background: ${h.BG1};
  border-radius: 8px;
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`,ft=s=>{const c=s.edges.filter(r=>{var l;return(l=r==null?void 0:r.properties)==null?void 0:l.start}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return s.nodes.filter(r=>s.edges.some(l=>l.source===r.ref_id||l.target===r.ref_id)).map(r=>{const l=c.find(n=>r.ref_id===n.source||r.ref_id===n.target);return{...r,start:(l==null?void 0:l.start)||0}}).filter(r=>r&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},qt=()=>{const s=ee(o=>o.addNewNode),c=F(o=>o.activeClip),t=F(o=>o.fetchEpisodeData),r=F(o=>o.chapters),l=i.useRef(null),n=i.useRef(null),p=i.useRef(null),g=i.useRef(null),[b,f]=i.useState([]),{setSchemas:m}=Z(o=>o),v=de(),{episodeId:d}=ue();return i.useEffect(()=>{(async()=>{try{const a=await fe();m(a.schemas.filter(j=>!j.is_deleted))}catch(a){console.error("Error fetching schema:",a)}})()},[m]),i.useEffect(()=>{d&&(async()=>{try{t(d||"")}catch(a){v("/"),console.error("Error fetching initial data:",a)}})()},[d,v,t]),i.useEffect(()=>{c&&r&&(async()=>{var a,j,C,E;try{const M=[],I={nodes:((a=p.current)==null?void 0:a.nodes)||[],edges:((j=p.current)==null?void 0:j.edges)||[]},B=c==null?void 0:c.ref_id;if(B){const _=await he(B,["-Clip","-Episode"],[],"",!0,0,2,50),R=_.nodes.filter(T=>T.node_type==="Claim"),z=_.edges.filter(T=>R.some(A=>A.ref_id===T.source||A.ref_id===T.target));g.current={nodes:[...((C=g.current)==null?void 0:C.nodes)||[],...R],edges:[...((E=g.current)==null?void 0:E.edges)||[],...z]};const G=ft(_).map(T=>{var H;const A=((H=(r||[]).find(k=>{var $;return T.start&&Y((($=k==null?void 0:k.properties)==null?void 0:$.timestamp)||"")>=T.start*1e3}))==null?void 0:H.ref_id)||"";return{...T,neighbourHood:A}});I.nodes.push(...G||[]),I.edges.push(...(_==null?void 0:_.edges)||[]),M.push(...G),p.current=I}f(M)}catch(M){console.error("Error processing clip nodes:",M)}})()},[c,r]),i.useEffect(()=>{const o=a=>{var C;const{playerRef:j}=P.getState();if(n.current!==null){if(a-n.current>2e3){if(p.current&&j){const{nodes:M,edges:I}=p.current,B=j==null?void 0:j.getCurrentTime(),[_,R]=I.reduce(([k,$],w)=>{var N,D;return((N=w==null?void 0:w.properties)==null?void 0:N.start)!==void 0&&((D=w==null?void 0:w.properties)==null?void 0:D.start)<B+1?k.push(w):$.push(w),[k,$]},[[],[]]),[z,V]=M.reduce(([k,$],w)=>(_.some(N=>N.target===w.ref_id||N.source===w.ref_id)?k.push(w):$.push(w),[k,$]),[[],[]]);p.current={nodes:V,edges:R};const[G,T]=(((C=g.current)==null?void 0:C.edges)||[]).reduce(([k,$],w)=>{var N,D;if(z.some(x=>x.ref_id===w.source)){const x=(((N=g.current)==null?void 0:N.nodes)||[]).find(S=>S.ref_id===w.target);x&&(k.push(x),$.push(w))}else if(z.some(x=>x.ref_id===w.target)){const x=(((D=g.current)==null?void 0:D.nodes)||[]).find(S=>S.ref_id===w.source);x&&(k.push(x),$.push(w))}return[k,$]},[[],[]]),A=[...z,...G],H=[..._,...T];(A.length||H.length)&&s({nodes:A,edges:H})}n.current=a}}else n.current=a;l.current=requestAnimationFrame(o)};return l.current=requestAnimationFrame(o),()=>{l.current&&cancelAnimationFrame(l.current)}},[p,s]),e.jsxs(ht,{children:[e.jsx(gt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx(y,{children:e.jsx(me,{})}),e.jsx(lt,{})]}),e.jsx(xt,{children:e.jsx(y,{basis:"100%",grow:1,shrink:1,children:e.jsx(xe,{})})})]})}),e.jsx(yt,{children:e.jsx(He,{chapters:r,markers:b})}),e.jsx(ge,{})]})},ht=u.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,gt=u(y)`
  flex: 1;
  overflow: hidden;
`,xt=u(y)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;

  @media (max-width: 768px) {
    display: none;
  }
`,yt=u(y)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{qt as MindSet};
