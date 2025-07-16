import{r as l,j as e,s as f,g as y,F as g,o as se,A as ne,c as oe,p as q,i as ge,q as ye,H as be,t as we,v as je}from"./index-abe596c2.js";import{t as J,u as F,C as ve}from"./index-ff3dccf6.js";import{U as ke}from"./index-23aeb07a.js";import{u as I,a as Ce,b as ie,I as Se,v as Y,c as ae,d as _e}from"./index-e24fdddd.js";import{M as Te,V as $e,C as Pe,a as Ie}from"./index-a934f93d.js";import{S as Ne,s as O,R as Me,M as Re}from"./index-eb00b821.js";import"./string-a277709d.js";import"./index-f283a3a9.js";import"./three.module-9722a9fc.js";import"./isPlainObject-08fb94dc.js";import"./TextareaAutosize-2daee251.js";import"./CheckIcon-c4465b66.js";import"./index-c83b33eb.js";import"./index-2145b2e4.js";import"./index-b7d028fc.js";import"./ClipLoader-faf5a781.js";import"./clsx-bdb6559c.js";import"./SourcesTableIcon-98e217ce.js";import"./DeleteNodeIcon-ed1ed550.js";import"./SoundIcon-33304203.js";import"./SucessFeedBackIcon-ec6549cd.js";import"./Skeleton-6aedc447.js";import"./index-ec036ec4.js";import"./Stack-4faae1d4.js";import"./FormControlLabel-8c0e9a85.js";import"./Typography-ef8e7528.js";import"./createSvgIcon-7339f3b4.js";const ce=l.memo(()=>{const r=I(c=>c.isPlaying),a=I(c=>c.setIsPlaying),t=I(c=>c.setVolume),n=I(c=>c.setPlaybackSpeed),p=I(c=>c.playbackSpeed),o=I(c=>c.playerRef),[u,h]=l.useState(!1),w=[.5,1,1.5,2],x=()=>{if(o){const c=o.getCurrentTime()-15;o.seekTo(c,"seconds")}},s=()=>{if(o){const c=o.getCurrentTime()+15;o.seekTo(c,"seconds")}},m=()=>{a(!r)},d=()=>{h(!u),t(u?1:0)},i=()=>{const b=(w.indexOf(p)+1)%w.length,v=w[b];if(n(v),o){const _=o.getInternalPlayer();_&&typeof _.playbackRate<"u"&&(_.playbackRate=v)}};return e.jsxs(Ee,{children:[e.jsx(Fe,{onClick:d,children:u?e.jsx(Te,{}):e.jsx($e,{})}),e.jsx(ze,{onClick:x,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(Ae,{"data-testid":"play-pause-button",onClick:m,size:"small",children:r?e.jsx(Ce,{"data-testid":"pause-icon"}):e.jsx(ie,{"data-testid":"play-icon"})}),e.jsx(We,{onClick:s,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(Be,{onClick:i,children:[p,"x"]})]})});ce.displayName="Controls";const Ee=f(g).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${y.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${y.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`,Ae=f(Se)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,ze=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,We=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Fe=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${y.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${y.DROPDOWN_BG};
  }
`,Be=f.button`
  margin-top: 4px;
  background: ${y.BG1};
  color: ${y.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,le=l.memo(({left:r,width:a,title:t})=>e.jsx(He,{style:{left:`${r}%`,width:`calc(${a}%)`},children:e.jsx("div",{className:"title",children:t})}));le.displayName="Chapter";const He=f.div`
  position: absolute;
  top: -3px;
  height: 100%;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  & + & {
    border-left: 0.1px solid ${y.white};
  }

  .title {
    position: absolute;
    bottom: calc(100% + 16px);
    display: none;
    color: ${y.white};
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
`,pe=l.memo(({chapters:r,duration:a})=>a?e.jsx(e.Fragment,{children:r.map((t,n)=>{var x,s,m,d,i;const p=(x=t==null?void 0:t.properties)!=null&&x.timestamp?J(t.properties.timestamp)/1e3:0,o=(m=(s=r[n+1])==null?void 0:s.properties)!=null&&m.timestamp?J((d=r[n+1].properties)==null?void 0:d.timestamp)/1e3:a,u=Math.floor(p/a*100),w=Math.floor(o/a*100)-u;return e.jsx(le,{left:u,title:((i=t==null?void 0:t.properties)==null?void 0:i.name)||(t==null?void 0:t.name)||"",width:w},`${t.ref_id}_${n}`)})}):null);pe.displayName="Chapters";const de=l.memo(({type:r,left:a,img:t})=>{var w,x;const n=se(s=>s.normalizedSchemasByType),p=(w=n[r])==null?void 0:w.primary_color,o=(x=n[r])==null?void 0:x.icon,u=o?`/svg-icons/${o}.svg`:"",h={iconStart:t||u,color:p??y.THING};return e.jsx(De,{style:{left:`${a}%`},children:e.jsx(ue,{...h,label:r})})});de.displayName="Marker";const ue=l.memo(({iconStart:r,color:a,label:t})=>e.jsx(Le,{color:a,children:r&&e.jsx("img",{alt:t,className:"badge__img",onError:console.log,src:r})}));ue.displayName="Badge";const Le=f(g).attrs({direction:"row"})`
  cursor: pointer;
  background: ${({color:r})=>r};
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  .badge__img {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }
`,De=f.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${y.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,fe=l.memo(({markers:r,duration:a})=>e.jsx(e.Fragment,{children:r.map((t,n)=>{var h;const p=Math.floor(((t==null?void 0:t.start)||0)/a*100),o=(t==null?void 0:t.node_type)||"",u=((h=t==null?void 0:t.properties)==null?void 0:h.image_url)||"";return e.jsx(de,{img:u,left:p,type:o},`${t.ref_id}_${n}`)})}));fe.displayName="Markers";const Ge=({duration:r,markers:a,handleProgressChange:t,playingTIme:n,chapters:p})=>{const o=10/r*100;return e.jsxs(Ve,{children:[e.jsx(Oe,{max:r,onChange:t,value:n,width:o}),p&&e.jsx(xe,{children:e.jsx(pe,{chapters:p,duration:r})}),e.jsx(Ye,{children:e.jsx(fe,{duration:r,markers:a})})]})},xe=f(g)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,Ve=f(g)`
  position: relative;
  flex: 1 1 100%;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    ${xe} {
      display: block;
    }
  }
`,Ye=f(g)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,Oe=f(Ne)`
  && {
    z-index: 20;
    color: ${y.white};
    height: 3px;
    width: calc(100% - 12px);
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: ${({width:r})=>`${r}%`};
      height: 54px;
      border-radius: 8px;
      background-color: ${y.primaryBlue};
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
`,Ue=({markers:r,chapters:a})=>{const{playingNode:t,playerRef:n}=I(x=>x),[p,o]=l.useState(0),u=t,h=l.useCallback((x,s)=>{const m=Array.isArray(s)?s[0]:s;n&&n.seekTo(m,"seconds")},[n]);l.useEffect(()=>{const x=setInterval(()=>{if(n&&o){const s=n.getCurrentTime();o(s)}},500);return()=>clearInterval(x)},[n,o]);const w=(n==null?void 0:n.getDuration())||0;return u?e.jsxs(Xe,{children:[e.jsx(ce,{}),e.jsx(Ge,{chapters:a,duration:w,handleProgressChange:h,markers:r,playingTIme:p})]}):null},Xe=f(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${y.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Ke=({text:r,timestamps:a,description:t})=>e.jsxs(qe,{children:[e.jsx("div",{className:"title",children:r}),e.jsx("div",{className:"description",children:t}),e.jsxs("div",{className:"clip",children:[a&&e.jsx("div",{className:"clip__timestamps",children:a}),e.jsx("div",{className:"clip__icon",children:e.jsx(ie,{})})]})]}),qe=f(g)`
  position: relative;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  color: white;
  border-radius: 12px;
  min-height: 90px;
  height: 100%;
  font-size: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgb(75, 85, 99);
  background: 'rgba(30, 58, 138, 0.2)';

  .title {
    font-size: 12px;
    font-weight: 500;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .clip {
    position: absolute;
    left: 50%;
    bottom: 0;
    padding: 0 12px;
    /* width: 26px; */
    height: 28px;
    border-radius: 14px;
    transform: translateX(-50%) translateY(50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgb(31, 41, 55);
    background-color: rgb(196, 181, 253);

    &__timestamps {
      font-size: 12px;
      color: rgb(31, 41, 55);
      white-space: nowrap;
    }
  }
`,Je=({name:r,imgUrl:a,description:t})=>e.jsxs(Qe,{children:[e.jsx("div",{className:"avatar",children:a?e.jsx(ne,{rounded:!0,size:64,src:a,type:"Person"}):r.charAt(0)}),e.jsxs("div",{className:"label",children:[e.jsx("div",{className:"name",children:r}),e.jsx("div",{className:"description",children:t})]})]}),Qe=f(g)`
  position: relative;
  align-items: center;
  gap: 8px;

  .avatar {
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid rgb(196, 181, 253);
    background-color: rgb(31, 41, 55);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  .label {
    background-color: rgba(31, 41, 55, 0.9);
    backdrop-filter: blur(8px);
    border: 1px solid rgb(75, 85, 99);
    border-radius: 8px;
    padding: 4px 12px;
    color: white;
    font-size: 14px;
    font-weight: 500;

    .name {
      font-size: 16px;
      font-weight: 600;
    }

    .description {
      font-size: 14px;
      font-weight: 400;
    }
  }
`,me=[{node_type:"Speaker",ref_id:"speaker-arthur-hayes",properties:{name:"Arthur Hayes",avatar_url:"arthur.png",description:"Co-founder, BitMEX",timestamp:"00:00:12",end:"00:25:00"}},{node_type:"KeyClaim",ref_id:"claim-ai-transform",properties:{text:"AI will transform every industry",description:"Predicts exponential impact of artificial intelligence across all sectors.",timestamp:"00:03:40",end:"00:04:10"}},{node_type:"HotTake",ref_id:"hot-alt-season",properties:{text:"Only cash-flow shitcoins win",description:"Future alt-coin cycles will reward projects with real revenue.",timestamp:"00:14:05",end:"00:14:35"}},{node_type:"Speaker",ref_id:"speaker-lex-fridman",properties:{name:"Lex Fridman",avatar_url:"lex.png",description:"AI researcher & host",timestamp:"00:00:00",end:"00:25:32"}},{node_type:"KeyClaim",ref_id:"claim-btc-million",properties:{text:"Bitcoin will reach $1 M",description:"Forecasts million-dollar BTC due to macro money printing.",timestamp:"00:11:20",end:"00:11:50",speaker:"speaker-arthur-hayes"}},{node_type:"KeyClaim",ref_id:"claim-crypto-regulation",properties:{text:"Regulation will legitimize crypto",description:"Government oversight will bring institutional adoption to cryptocurrency markets.",timestamp:"00:07:15",end:"00:07:45",speaker:"speaker-arthur-hayes"}},{node_type:"KeyClaim",ref_id:"claim-ai-consciousness",properties:{text:"AI consciousness is inevitable",description:"Artificial general intelligence will develop self-awareness within this decade.",timestamp:"00:18:30",end:"00:19:00",speaker:"speaker-lex-fridman"}},{node_type:"KeyClaim",ref_id:"claim-human-ai-symbiosis",properties:{text:"Humans and AI will merge",description:"Brain-computer interfaces will create hybrid human-AI intelligence.",timestamp:"00:21:10",end:"00:21:40",speaker:"speaker-lex-fridman"}}],Ze=me.filter(r=>r.node_type==="Speaker"),et=me.filter(r=>r.node_type!=="Speaker").sort((r,a)=>{var p,o;const t=Y(((p=r.properties)==null?void 0:p.timestamp)||"00:00:00"),n=Y(((o=a.properties)==null?void 0:o.timestamp)||"00:00:00");return t-n}),tt=()=>{const[r,a]=l.useState({x:0,y:0}),[t,n]=l.useState(!1),[p,o]=l.useState(null),{playerRef:u}=I(s=>s);console.log(p,r),l.useEffect(()=>{const s=m=>{a({x:m.clientX,y:m.clientY})};return window.addEventListener("mousemove",s),()=>window.removeEventListener("mousemove",s)},[]);const h=()=>{n(!t)},w=l.useCallback(s=>{const m=Array.isArray(s)?s[0]:s;u&&u.seekTo(m,"seconds")},[u]),x=s=>{var m,d,i;if((m=s==null?void 0:s.properties)!=null&&m.timestamp&&(d=s.properties)!=null&&d.timestamp&&u){const c=Y((i=s.properties)==null?void 0:i.timestamp);w(c)}};return e.jsxs(rt,{className:t?"swapped":"",children:[e.jsxs(st,{onClick:h,children:[t?null:e.jsx("div",{className:"icon",children:e.jsx(Pe,{})}),e.jsx("span",{children:"Hot takes"}),t?e.jsx("div",{className:"icon",children:e.jsx(Ie,{})}):null]}),t?null:e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:Ze.map(s=>{var c,b,v;const m=((c=s==null?void 0:s.properties)==null?void 0:c.description)||"",d=((b=s==null?void 0:s.properties)==null?void 0:b.name)||"",i=((v=s==null?void 0:s.properties)==null?void 0:v.avatar_url)||"";return e.jsx("div",{className:"child",children:e.jsx(te,{onClick:()=>x(s),onMouseEnter:()=>o(s.ref_id),onMouseLeave:()=>o(null),children:e.jsx(Je,{description:m,imgUrl:i,name:d})})},s.ref_id)})}),e.jsx(ee,{children:et.map(s=>{var c,b,v,_,T,S;const m=((c=s==null?void 0:s.properties)==null?void 0:c.text)||"",d=((b=s==null?void 0:s.properties)==null?void 0:b.description)||"",i=(v=s==null?void 0:s.properties)!=null&&v.timestamp&&((_=s==null?void 0:s.properties)!=null&&_.end)?`${O(Y((T=s==null?void 0:s.properties)==null?void 0:T.timestamp))} - ${O(Y((S=s==null?void 0:s.properties)==null?void 0:S.end))}`:void 0;return e.jsx("div",{className:"child",children:e.jsx(te,{onClick:()=>x(s),onMouseEnter:()=>o(s.ref_id),onMouseLeave:()=>o(null),children:e.jsx(Ke,{description:d,text:m,timestamps:i})})},s.ref_id)})})]})]})},rt=f.div`
  position: absolute;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1f293764;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: all 0.3s ease;
  &.swapped {
    perspective: 1000px;
    height: 42px;
    width: 104px;
  }
`,ee=f(g)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex: 1;

  .child {
    flex: 1 1 calc(25% - 24px);
    max-width: calc(25% - 24px);
  }
`,st=f.button`
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(135deg, #1f293764, #1f2937a2);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px #1f293720;
  z-index: 10;
  white-space: nowrap;
  transform: rotateY(40deg);
  transform-origin: left;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  gap: 8px;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  &:hover {
    /* transform: translateY(-50%) scale(1.05); */
    box-shadow: 0 6px 20px #1f293764;
    background: #1f293764;
  }

  &:active {
    /* transform: translateY(-50%) scale(0.98); */
  }
`,te=f.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 10;
`,nt=(r,a)=>{let t=0,n=r.length-1;for(;t<=n;){const p=Math.floor((t+n)/2),o=r[p],{start:u,end:h}=o.properties;if(a>=u&&a<=h)return o;a<u?n=p-1:t=p+1}return null},ot=({mediaUrl:r})=>{var R;const a=l.useRef(null),[t,n]=l.useState("ready"),[p,o]=l.useState(!1),[u,h]=l.useState(!1),{setActiveEdge:w}=ae(k=>k),{dataInitial:x}=oe(k=>k),{isPlaying:s,playingTime:m,setIsPlaying:d,setPlayingTime:i,setDuration:c,playingNode:b,volume:v,setHasError:_,resetPlayer:T,isSeeking:S,setIsSeeking:B,setPlayerRef:N,playerRef:M,playbackSpeed:H}=I(k=>k);l.useEffect(()=>()=>T(),[T]),l.useEffect(()=>{b&&!p&&(i(0),c(0),o(!1))},[b,i,c,o,p]),l.useEffect(()=>{S&&M&&(M.seekTo(m,"seconds"),B(!1))},[m,S,B,M]);const U=l.useCallback(()=>{d(!s)},[s,d]),G=()=>{_(!0),n("error")},$=l.useCallback(k=>{k.code},[U]);l.useEffect(()=>(window.addEventListener("keydown",$),()=>{window.removeEventListener("keydown",$)}),[$]);const z=l.useMemo(()=>((x==null?void 0:x.links.filter(E=>{var W;return(W=E==null?void 0:E.properties)==null?void 0:W.start}))||[]).slice().sort((E,W)=>{var Q,Z;return((Q=E==null?void 0:E.properties)==null?void 0:Q.start)-((Z=W==null?void 0:W.properties)==null?void 0:Z.start)}),[x]),L=k=>{if(!S){const E=k.playedSeconds,W=nt(z,E);w(W||null)}},C=l.useMemo(()=>{const E=new URL(window.location.href).searchParams.get("start");return E?parseFloat(E):null},[]),P=()=>{n("ready"),M&&C!==null&&!u&&(M.seekTo(C,"seconds"),h(!0))},j=l.useCallback(()=>{s||d(!0)},[d,s]),A=l.useCallback(()=>{s&&d(!1)},[d,s]),D=l.useCallback(k=>{!M&&k&&N(k)},[N,M]);return r?e.jsxs(it,{ref:a,tabIndex:0,children:[e.jsx(at,{isFullScreen:!1,children:e.jsx(ne,{size:200,src:((R=b==null?void 0:b.properties)==null?void 0:R.image_url)||"",type:"clip"})}),e.jsx(lt,{isFullScreen:!1,children:e.jsx(Me,{ref:D,height:"219px",onBuffer:()=>n("buffering"),onBufferEnd:()=>n("ready"),onError:G,onPause:A,onPlay:j,onProgress:L,onReady:P,playbackRate:H,playing:s,url:r||"",volume:v,width:"100%"})}),t==="error"&&e.jsx(ct,{className:"error-wrapper",children:"Error happened, please try later"})]}):null},it=f(g)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,at=f(g)`
  position: absolute;
  top: ${r=>r.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,ct=f(g)`
  height: 60px;
  padding: 12px 16px;
  color: ${y.primaryRed};
`,lt=f.div`
  margin: ${r=>r.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,pt=l.memo(ot),dt=({onChangeChapter:r})=>{const a=F(o=>o.highlights),{playerRef:t}=I(o=>o),n=l.useCallback(o=>{const u=Array.isArray(o)?o[0]:o;t&&t.seekTo(u,"seconds")},[t]),p=o=>{r(),n(a[o].startTime)};return e.jsx(ut,{direction:"column",children:a.length>0&&e.jsx(ft,{children:e.jsx(xt,{children:a.map((o,u)=>e.jsxs(mt,{onClick:()=>p(u),children:[e.jsx(ht,{children:o.title}),e.jsxs(gt,{children:[Math.floor(o.startTime/60),":",(o.startTime%60).toString().padStart(2,"0")]})]},u))})})})},ut=f(g)({width:"100%",gap:"20px"}),ft=f.div`
  width: 100%;
`,xt=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,mt=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  background: ${y.gray500};
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${y.gray400};
  }
`,ht=f.span`
  font-size: 14px;
  color: ${y.white};
  font-weight: 500;
  flex: 1;
`,gt=f.span`
  font-size: 12px;
  color: ${y.blueTextAccent};
  font-family: monospace;
`,he=l.forwardRef(({active:r,start:a,text:t},n)=>e.jsxs(yt,{ref:n,className:q({active:r}),children:[e.jsx(bt,{children:a}),e.jsx(wt,{children:e.jsx("span",{children:t})})]}));he.displayName="ParagraphComponent";const K=l.memo(he,(r,a)=>r.active===a.active),yt=f(g)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${y.AI_HIGHLIGHT};
  }
`,bt=f.span`
  background: ${y.lightBlue100};
  color: ${y.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,wt=f.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${y.AI_HIGHLIGHT};
  }
`,jt=({transcriptString:r,isFirst:a})=>{const[t,n]=l.useState(0),[p,o]=l.useState(!1),{playerRef:u}=I(d=>d),h=r.replace(/^["']|["']$/g,""),w=JSON.parse(h),x=l.useRef(null),s=l.useRef(null),m=l.useRef(null);return l.useEffect(()=>{const d=setInterval(()=>{if(u&&n){const i=u.getCurrentTime();n(i)}},100);return()=>clearInterval(d)},[u,n]),l.useEffect(()=>{const d=()=>{o(!0),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{o(!1)},1e3)},i=s.current;return i&&i.addEventListener("scroll",d),()=>{i&&i.removeEventListener("scroll",d)}},[]),l.useEffect(()=>{!p&&x.current&&x.current.scrollIntoView({behavior:"smooth",block:"center"})},[t,p]),e.jsx(vt,{ref:s,children:e.jsx(e.Fragment,{children:a?e.jsx(e.Fragment,{children:w[0].start>t?e.jsx(K,{active:!1,start:O(w[0].start),text:w[0].text}):e.jsx(e.Fragment,{children:w.map(d=>{const i=O(d.start),c=d.start<t&&t<d.end;return!a||d.start<=t+5?e.jsx(K,{ref:c?x:null,active:c,start:i,text:d.text},`${d.start}-${d.end}`):null})})}):e.jsx(e.Fragment,{children:w.map(d=>{const i=O(d.start),c=d.start<t&&t<d.end;return e.jsx(K,{ref:c?x:null,active:c,start:i,text:d.text},`${d.start}-${d.end}`)})})})})},vt=f.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,kt=()=>{var d;const r=F(i=>i.clips),a=F(i=>i.setActiveClip),t=F(i=>i.activeClip),{playerRef:n}=I(i=>i),[p,o]=l.useState(0),[u,h]=l.useState(!0),[w,x]=ae(i=>[i.setActiveNode,i.activeNode]),s=_e(i=>i.simulation);l.useEffect(()=>{const i=setInterval(()=>{if(n&&o){const c=n.getCurrentTime();o(c)}},100);return()=>clearInterval(i)},[n,o]),l.useEffect(()=>{p?(()=>{var b;const c=r.find(v=>{var S;const[_,T]=m((S=v==null?void 0:v.properties)==null?void 0:S.timestamp);return _<=p&&p<T});t&&(c==null?void 0:c.ref_id)===(t==null?void 0:t.ref_id)||!c||(h((c==null?void 0:c.ref_id)===((b=r[0])==null?void 0:b.ref_id)),a(c||null))})():(h(!0),a(r[0]))},[p,r,t,a]),l.useEffect(()=>{if(t&&(!x||t.ref_id!==x.ref_id)){const i=s==null?void 0:s.nodes().find(c=>c.ref_id===t.ref_id);typeof(i==null?void 0:i.fx)=="number"&&w(i)}},[t,x,w,s]);const m=i=>i?i.split("-").map(Number):[0,0];return e.jsx(Ct,{direction:"row",children:((d=t==null?void 0:t.properties)==null?void 0:d.transcript)&&e.jsx(jt,{isFirst:u,transcriptString:t.properties.transcript})})},Ct=f(g)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
  @media (max-width: 768px) {
    margin: 0;
  }
`,X="chapters",V="transcript",St=()=>{var p,o;const r=F(u=>u.selectedEpisode),a=I(u=>u.isPlaying),[t,n]=l.useState(X);return l.useEffect(()=>{a&&n(V)},[a]),e.jsxs(Tt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx($t,{children:((p=r==null?void 0:r.properties)==null?void 0:p.media_url)&&e.jsx(pt,{mediaUrl:r.properties.media_url})}),e.jsx(g,{className:"heading",children:(o=r==null?void 0:r.properties)==null?void 0:o.episode_title}),e.jsxs(Pt,{direction:"row",children:[e.jsx(re,{className:q({selected:t===X}),onClick:()=>n(X),children:"Chapters"}),e.jsx(re,{className:q({selected:t===V}),onClick:()=>n(V),children:"Transcript"})]}),e.jsxs(_t,{children:[t===X&&e.jsx(dt,{onChangeChapter:()=>n(V)}),t===V&&e.jsx(kt,{})]})]})},_t=f(g)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${y.white};
  background: ${y.BG1};
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
`,Tt=f(g)(({theme:r})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[r.breakpoints.up("sm")]:{width:Re},"@media (max-width: 768px)":{padding:0}})),$t=f(g)(({theme:r})=>({width:"100%",marginBottom:"20px",[r.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),re=f(g)`
  color: ${y.white};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;

  &.selected {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
`,Pt=f(g)`
  background: ${y.primaryBlue};
  padding: 12px 24px;
  background: ${y.BG1};
  border-radius: 8px;
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`,It=r=>{const a=r.edges.filter(n=>{var p;return(p=n==null?void 0:n.properties)==null?void 0:p.start}).map(n=>({source:n.source,target:n.target,start:n.properties.start}));return r.nodes.filter(n=>r.edges.some(p=>p.source===n.ref_id||p.target===n.ref_id)).map(n=>{const p=a.find(o=>n.ref_id===o.source||n.ref_id===o.target);return{...n,start:(p==null?void 0:p.start)||0}}).filter(n=>n&&n.node_type!=="Clip"&&n.node_type!=="Episode"&&n.node_type!=="Show")},cr=()=>{const r=oe(i=>i.addNewNode),a=F(i=>i.activeClip),t=F(i=>i.fetchEpisodeData),n=F(i=>i.chapters),p=l.useRef(null),o=l.useRef(null),u=l.useRef(null),h=l.useRef(null),[w,x]=l.useState([]),{setSchemas:s}=se(i=>i),m=ge(),{episodeId:d}=ye();return l.useEffect(()=>{(async()=>{try{const c=await we();s(c.schemas.filter(b=>!b.is_deleted))}catch(c){console.error("Error fetching schema:",c)}})()},[s]),l.useEffect(()=>{d&&(async()=>{try{t(d||"")}catch(c){m("/"),console.error("Error fetching initial data:",c)}})()},[d,m,t]),l.useEffect(()=>{a&&n&&(async()=>{var c,b,v,_;try{const T=[],S={nodes:((c=u.current)==null?void 0:c.nodes)||[],edges:((b=u.current)==null?void 0:b.edges)||[]},B=a==null?void 0:a.ref_id;if(B){const N=await je(B,["-Clip","-Episode"],[],"",!0,0,2,50),M=N.nodes.filter($=>$.node_type==="Claim"),H=N.edges.filter($=>M.some(z=>z.ref_id===$.source||z.ref_id===$.target));h.current={nodes:[...((v=h.current)==null?void 0:v.nodes)||[],...M],edges:[...((_=h.current)==null?void 0:_.edges)||[],...H]};const G=It(N).map($=>{var L;const z=((L=(n||[]).find(C=>{var P;return $.start&&J(((P=C==null?void 0:C.properties)==null?void 0:P.timestamp)||"")>=$.start*1e3}))==null?void 0:L.ref_id)||"";return{...$,neighbourHood:z}});S.nodes.push(...G||[]),S.edges.push(...(N==null?void 0:N.edges)||[]),T.push(...G),u.current=S}x(T)}catch(T){console.error("Error processing clip nodes:",T)}})()},[a,n]),l.useEffect(()=>{const i=c=>{var v;const{playerRef:b}=I.getState();if(o.current!==null){if(c-o.current>2e3){if(u.current&&b){const{nodes:T,edges:S}=u.current,B=b==null?void 0:b.getCurrentTime(),[N,M]=S.reduce(([C,P],j)=>{var A,D;return((A=j==null?void 0:j.properties)==null?void 0:A.start)!==void 0&&((D=j==null?void 0:j.properties)==null?void 0:D.start)<B+1?C.push(j):P.push(j),[C,P]},[[],[]]),[H,U]=T.reduce(([C,P],j)=>(N.some(A=>A.target===j.ref_id||A.source===j.ref_id)?C.push(j):P.push(j),[C,P]),[[],[]]);u.current={nodes:U,edges:M};const[G,$]=(((v=h.current)==null?void 0:v.edges)||[]).reduce(([C,P],j)=>{var A,D;if(H.some(R=>R.ref_id===j.source)){const R=(((A=h.current)==null?void 0:A.nodes)||[]).find(k=>k.ref_id===j.target);R&&(C.push(R),P.push(j))}else if(H.some(R=>R.ref_id===j.target)){const R=(((D=h.current)==null?void 0:D.nodes)||[]).find(k=>k.ref_id===j.source);R&&(C.push(R),P.push(j))}return[C,P]},[[],[]]),z=[...H,...G],L=[...N,...$];(z.length||L.length)&&r({nodes:z,edges:L})}o.current=c}}else o.current=c;p.current=requestAnimationFrame(i)};return p.current=requestAnimationFrame(i),()=>{p.current&&cancelAnimationFrame(p.current)}},[u,r]),e.jsxs(Nt,{children:[e.jsx(Mt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx(g,{children:e.jsx(be,{})}),e.jsx(St,{})]}),e.jsx(Rt,{children:e.jsxs(g,{basis:"100%",grow:1,shrink:1,children:[e.jsx(ke,{}),d==="f6d3e4a8-3c4d-4571-b10f-77d6663f90cc"&&e.jsx(tt,{})]})})]})}),e.jsx(Et,{children:e.jsx(Ue,{chapters:n,markers:w})}),e.jsx(ve,{})]})},Nt=f.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Mt=f(g)`
  flex: 1;
  overflow: hidden;
`,Rt=f(g)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`,Et=f(g)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{cr as MindSet};
