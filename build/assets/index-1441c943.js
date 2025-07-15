import{r as l,j as e,s as f,g as y,F as g,o as re,A as se,c as ne,p as K,i as he,q as ge,H as ye,t as be,v as we}from"./index-aa147a39.js";import{t as q,u as W,C as je}from"./index-73ded3b9.js";import{U as ve}from"./index-6eb4c574.js";import{u as N,a as ke,b as oe,I as Ce,v as V,c as ie,d as Se}from"./index-dee2e50f.js";import{M as _e,V as Te,C as $e,a as Pe}from"./index-64bf63a3.js";import{S as Ie,s as Y,R as Ne,M as Me}from"./index-69ffafa7.js";import"./string-a277709d.js";import"./index-43e03cc3.js";import"./three.module-9722a9fc.js";import"./isPlainObject-a5d368e3.js";import"./TextareaAutosize-220d14b1.js";import"./CheckIcon-e95d0922.js";import"./index-15c2140a.js";import"./index-6d26d866.js";import"./index-5241b618.js";import"./ClipLoader-dab7b1fa.js";import"./clsx-9fe7ca33.js";import"./SourcesTableIcon-548e89ba.js";import"./DeleteNodeIcon-c2327e61.js";import"./SoundIcon-7051b901.js";import"./SucessFeedBackIcon-63951ce1.js";import"./Skeleton-926bdec0.js";import"./index-c8781408.js";import"./Stack-b32efadb.js";import"./FormControlLabel-705cfb39.js";import"./Typography-cad53893.js";import"./createSvgIcon-e7cdb5a0.js";const ae=l.memo(()=>{const r=N(c=>c.isPlaying),a=N(c=>c.setIsPlaying),t=N(c=>c.setVolume),n=N(c=>c.setPlaybackSpeed),p=N(c=>c.playbackSpeed),o=N(c=>c.playerRef),[u,h]=l.useState(!1),w=[.5,1,1.5,2],x=()=>{if(o){const c=o.getCurrentTime()-15;o.seekTo(c,"seconds")}},s=()=>{if(o){const c=o.getCurrentTime()+15;o.seekTo(c,"seconds")}},m=()=>{a(!r)},d=()=>{h(!u),t(u?1:0)},i=()=>{const b=(w.indexOf(p)+1)%w.length,k=w[b];if(n(k),o){const T=o.getInternalPlayer();T&&typeof T.playbackRate<"u"&&(T.playbackRate=k)}};return e.jsxs(Re,{children:[e.jsx(We,{onClick:d,children:u?e.jsx(_e,{}):e.jsx(Te,{})}),e.jsx(Ae,{onClick:x,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(Ee,{"data-testid":"play-pause-button",onClick:m,size:"small",children:r?e.jsx(ke,{"data-testid":"pause-icon"}):e.jsx(oe,{"data-testid":"play-icon"})}),e.jsx(ze,{onClick:s,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(Fe,{onClick:i,children:[p,"x"]})]})});ae.displayName="Controls";const Re=f(g).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,Ee=f(Ce)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Ae=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,ze=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,We=f.div`
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
`,Fe=f.button`
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
`,ce=l.memo(({left:r,width:a,title:t})=>e.jsx(Be,{style:{left:`${r}%`,width:`calc(${a}%)`},children:e.jsx("div",{className:"title",children:t})}));ce.displayName="Chapter";const Be=f.div`
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
`,le=l.memo(({chapters:r,duration:a})=>a?e.jsx(e.Fragment,{children:r.map((t,n)=>{var x,s,m,d,i;const p=(x=t==null?void 0:t.properties)!=null&&x.timestamp?q(t.properties.timestamp)/1e3:0,o=(m=(s=r[n+1])==null?void 0:s.properties)!=null&&m.timestamp?q((d=r[n+1].properties)==null?void 0:d.timestamp)/1e3:a,u=Math.floor(p/a*100),w=Math.floor(o/a*100)-u;return e.jsx(ce,{left:u,title:((i=t==null?void 0:t.properties)==null?void 0:i.name)||(t==null?void 0:t.name)||"",width:w},`${t.ref_id}_${n}`)})}):null);le.displayName="Chapters";const pe=l.memo(({type:r,left:a,img:t})=>{var w,x;const n=re(s=>s.normalizedSchemasByType),p=(w=n[r])==null?void 0:w.primary_color,o=(x=n[r])==null?void 0:x.icon,u=o?`/svg-icons/${o}.svg`:"",h={iconStart:t||u,color:p??y.THING};return e.jsx(Le,{style:{left:`${a}%`},children:e.jsx(de,{...h,label:r})})});pe.displayName="Marker";const de=l.memo(({iconStart:r,color:a,label:t})=>e.jsx(He,{color:a,children:r&&e.jsx("img",{alt:t,className:"badge__img",onError:console.log,src:r})}));de.displayName="Badge";const He=f(g).attrs({direction:"row"})`
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
`,Le=f.div`
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
`,ue=l.memo(({markers:r,duration:a})=>e.jsx(e.Fragment,{children:r.map((t,n)=>{var h;const p=Math.floor(((t==null?void 0:t.start)||0)/a*100),o=(t==null?void 0:t.node_type)||"",u=((h=t==null?void 0:t.properties)==null?void 0:h.image_url)||"";return e.jsx(pe,{img:u,left:p,type:o},`${t.ref_id}_${n}`)})}));ue.displayName="Markers";const De=({duration:r,markers:a,handleProgressChange:t,playingTIme:n,chapters:p})=>{const o=10/r*100;return e.jsxs(Ge,{children:[e.jsx(Ye,{max:r,onChange:t,value:n,width:o}),p&&e.jsx(fe,{children:e.jsx(le,{chapters:p,duration:r})}),e.jsx(Ve,{children:e.jsx(ue,{duration:r,markers:a})})]})},fe=f(g)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,Ge=f(g)`
  position: relative;
  flex: 1 1 100%;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    ${fe} {
      display: block;
    }
  }
`,Ve=f(g)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,Ye=f(Ie)`
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
`,Oe=({markers:r,chapters:a})=>{const{playingNode:t,playerRef:n}=N(x=>x),[p,o]=l.useState(0),u=t,h=l.useCallback((x,s)=>{const m=Array.isArray(s)?s[0]:s;n&&n.seekTo(m,"seconds")},[n]);l.useEffect(()=>{const x=setInterval(()=>{if(n&&o){const s=n.getCurrentTime();o(s)}},500);return()=>clearInterval(x)},[n,o]);const w=(n==null?void 0:n.getDuration())||0;return u?e.jsxs(Ue,{children:[e.jsx(ae,{}),e.jsx(De,{chapters:a,duration:w,handleProgressChange:h,markers:r,playingTIme:p})]}):null},Ue=f(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${y.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Xe=({text:r,timestamps:a,description:t})=>e.jsxs(Ke,{children:[e.jsx("div",{className:"title",children:r}),e.jsx("div",{className:"description",children:t}),e.jsxs("div",{className:"clip",children:[a&&e.jsx("div",{className:"clip__timestamps",children:a}),e.jsx("div",{className:"clip__icon",children:e.jsx(oe,{})})]})]}),Ke=f(g)`
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
`,qe=({name:r,imgUrl:a,description:t})=>e.jsxs(Je,{children:[e.jsx("div",{className:"avatar",children:a?e.jsx(se,{rounded:!0,size:64,src:a,type:"Person"}):r.charAt(0)}),e.jsxs("div",{className:"label",children:[e.jsx("div",{className:"name",children:r}),e.jsx("div",{className:"description",children:t})]})]}),Je=f(g)`
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
`,xe=[{node_type:"Speaker",ref_id:"speaker-arthur-hayes",properties:{name:"Arthur Hayes",avatar_url:"arthur.png",description:"Co-founder, BitMEX",timestamp:"00:00:12",end:"00:25:00"}},{node_type:"KeyClaim",ref_id:"claim-ai-transform",properties:{text:"AI will transform every industry",description:"Predicts exponential impact of artificial intelligence across all sectors.",timestamp:"00:03:40",end:"00:04:10"}},{node_type:"HotTake",ref_id:"hot-alt-season",properties:{text:"Only cash-flow shitcoins win",description:"Future alt-coin cycles will reward projects with real revenue.",timestamp:"00:14:05",end:"00:14:35"}},{node_type:"Speaker",ref_id:"speaker-lex-fridman",properties:{name:"Lex Fridman",avatar_url:"lex.png",description:"AI researcher & host",timestamp:"00:00:00",end:"00:25:32"}},{node_type:"KeyClaim",ref_id:"claim-btc-million",properties:{text:"Bitcoin will reach $1 M",description:"Forecasts million-dollar BTC due to macro money printing.",timestamp:"00:11:20",end:"00:11:50",speaker:"speaker-arthur-hayes"}},{node_type:"KeyClaim",ref_id:"claim-crypto-regulation",properties:{text:"Regulation will legitimize crypto",description:"Government oversight will bring institutional adoption to cryptocurrency markets.",timestamp:"00:07:15",end:"00:07:45",speaker:"speaker-arthur-hayes"}},{node_type:"KeyClaim",ref_id:"claim-ai-consciousness",properties:{text:"AI consciousness is inevitable",description:"Artificial general intelligence will develop self-awareness within this decade.",timestamp:"00:18:30",end:"00:19:00",speaker:"speaker-lex-fridman"}},{node_type:"KeyClaim",ref_id:"claim-human-ai-symbiosis",properties:{text:"Humans and AI will merge",description:"Brain-computer interfaces will create hybrid human-AI intelligence.",timestamp:"00:21:10",end:"00:21:40",speaker:"speaker-lex-fridman"}}],Qe=xe.filter(r=>r.node_type==="Speaker"),Ze=xe.filter(r=>r.node_type!=="Speaker").sort((r,a)=>{var p,o;const t=V(((p=r.properties)==null?void 0:p.timestamp)||"00:00:00"),n=V(((o=a.properties)==null?void 0:o.timestamp)||"00:00:00");return t-n}),et=()=>{const[r,a]=l.useState({x:0,y:0}),[t,n]=l.useState(!1),[p,o]=l.useState(null),{playerRef:u}=N(s=>s);console.log(p,r),l.useEffect(()=>{const s=m=>{a({x:m.clientX,y:m.clientY})};return window.addEventListener("mousemove",s),()=>window.removeEventListener("mousemove",s)},[]);const h=()=>{n(!t)},w=l.useCallback(s=>{const m=Array.isArray(s)?s[0]:s;u&&u.seekTo(m,"seconds")},[u]),x=s=>{var m,d,i;if((m=s==null?void 0:s.properties)!=null&&m.timestamp&&(d=s.properties)!=null&&d.timestamp&&u){const c=V((i=s.properties)==null?void 0:i.timestamp);w(c)}};return e.jsxs(tt,{className:t?"swapped":"",children:[e.jsxs(rt,{onClick:h,children:[t?null:e.jsx("div",{className:"icon",children:e.jsx($e,{})}),e.jsx("span",{children:"Hot takes"}),t?e.jsx("div",{className:"icon",children:e.jsx(Pe,{})}):null]}),t?null:e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:Qe.map(s=>{var c,b,k;const m=((c=s==null?void 0:s.properties)==null?void 0:c.description)||"",d=((b=s==null?void 0:s.properties)==null?void 0:b.name)||"",i=((k=s==null?void 0:s.properties)==null?void 0:k.avatar_url)||"";return e.jsx("div",{className:"child",children:e.jsx(ee,{onClick:()=>x(s),onMouseEnter:()=>o(s.ref_id),onMouseLeave:()=>o(null),children:e.jsx(qe,{description:m,imgUrl:i,name:d})})},s.ref_id)})}),e.jsx(Z,{children:Ze.map(s=>{var c,b,k,T,$,_;const m=((c=s==null?void 0:s.properties)==null?void 0:c.text)||"",d=((b=s==null?void 0:s.properties)==null?void 0:b.description)||"",i=(k=s==null?void 0:s.properties)!=null&&k.timestamp&&((T=s==null?void 0:s.properties)!=null&&T.end)?`${Y(V(($=s==null?void 0:s.properties)==null?void 0:$.timestamp))} - ${Y(V((_=s==null?void 0:s.properties)==null?void 0:_.end))}`:void 0;return e.jsx("div",{className:"child",children:e.jsx(ee,{onClick:()=>x(s),onMouseEnter:()=>o(s.ref_id),onMouseLeave:()=>o(null),children:e.jsx(Xe,{description:d,text:m,timestamps:i})})},s.ref_id)})})]})]})},tt=f.div`
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
`,Z=f(g)`
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
`,rt=f.button`
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
`,ee=f.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 10;
`,st=(r,a)=>{let t=0,n=r.length-1;for(;t<=n;){const p=Math.floor((t+n)/2),o=r[p],{start:u,end:h}=o.properties;if(a>=u&&a<=h)return o;a<u?n=p-1:t=p+1}return null},nt=({mediaUrl:r})=>{const a=l.useRef(null),[t,n]=l.useState("ready"),[p,o]=l.useState(!1),[u,h]=l.useState(!1),{setActiveEdge:w}=ie(j=>j),{dataInitial:x}=ne(j=>j),{isPlaying:s,playingTime:m,setIsPlaying:d,setPlayingTime:i,setDuration:c,playingNode:b,volume:k,setHasError:T,resetPlayer:$,isSeeking:_,setIsSeeking:F,setPlayerRef:M,playerRef:R,playbackSpeed:B}=N(j=>j);l.useEffect(()=>()=>$(),[$]),l.useEffect(()=>{b&&!p&&(i(0),c(0),o(!1))},[b,i,c,o,p]),l.useEffect(()=>{_&&R&&(R.seekTo(m,"seconds"),F(!1))},[m,_,F,R]);const O=l.useCallback(()=>{d(!s)},[s,d]),D=()=>{T(!0),n("error")},P=l.useCallback(j=>{j.code},[O]);l.useEffect(()=>(window.addEventListener("keydown",P),()=>{window.removeEventListener("keydown",P)}),[P]);const A=l.useMemo(()=>((x==null?void 0:x.links.filter(S=>{var z;return(z=S==null?void 0:S.properties)==null?void 0:z.start}))||[]).slice().sort((S,z)=>{var J,Q;return((J=S==null?void 0:S.properties)==null?void 0:J.start)-((Q=z==null?void 0:z.properties)==null?void 0:Q.start)}),[x]),H=j=>{if(!_){const S=j.playedSeconds,z=st(A,S);w(z||null)}},C=l.useMemo(()=>{const S=new URL(window.location.href).searchParams.get("start");return S?parseFloat(S):null},[]),I=()=>{n("ready"),R&&C!==null&&!u&&(R.seekTo(C,"seconds"),h(!0))},v=l.useCallback(()=>{s||d(!0)},[d,s]),E=l.useCallback(()=>{s&&d(!1)},[d,s]),L=l.useCallback(j=>{!R&&j&&M(j)},[M,R]);return r?e.jsxs(ot,{ref:a,tabIndex:0,children:[e.jsx(it,{isFullScreen:!1,children:e.jsx(se,{size:120,src:(b==null?void 0:b.image_url)||"",type:"clip"})}),e.jsx(ct,{isFullScreen:!1,children:e.jsx(Ne,{ref:L,height:"219px",onBuffer:()=>n("buffering"),onBufferEnd:()=>n("ready"),onError:D,onPause:E,onPlay:v,onProgress:H,onReady:I,playbackRate:B,playing:s,url:r||"",volume:k,width:"100%"})}),t==="error"&&e.jsx(at,{className:"error-wrapper",children:"Error happened, please try later"})]}):null},ot=f(g)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,it=f(g)`
  position: absolute;
  top: ${r=>r.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,at=f(g)`
  height: 60px;
  padding: 12px 16px;
  color: ${y.primaryRed};
`,ct=f.div`
  margin: ${r=>r.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,lt=l.memo(nt),pt=({onChangeChapter:r})=>{const a=W(o=>o.highlights),{playerRef:t}=N(o=>o),n=l.useCallback(o=>{const u=Array.isArray(o)?o[0]:o;t&&t.seekTo(u,"seconds")},[t]),p=o=>{r(),n(a[o].startTime)};return e.jsx(dt,{direction:"column",children:a.length>0&&e.jsx(ut,{children:e.jsx(ft,{children:a.map((o,u)=>e.jsxs(xt,{onClick:()=>p(u),children:[e.jsx(mt,{children:o.title}),e.jsxs(ht,{children:[Math.floor(o.startTime/60),":",(o.startTime%60).toString().padStart(2,"0")]})]},u))})})})},dt=f(g)({width:"100%",gap:"20px"}),ut=f.div`
  width: 100%;
`,ft=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,xt=f.div`
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
`,mt=f.span`
  font-size: 14px;
  color: ${y.white};
  font-weight: 500;
  flex: 1;
`,ht=f.span`
  font-size: 12px;
  color: ${y.blueTextAccent};
  font-family: monospace;
`,me=l.forwardRef(({active:r,start:a,text:t},n)=>e.jsxs(gt,{ref:n,className:K({active:r}),children:[e.jsx(yt,{children:a}),e.jsx(bt,{children:e.jsx("span",{children:t})})]}));me.displayName="ParagraphComponent";const X=l.memo(me,(r,a)=>r.active===a.active),gt=f(g)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${y.AI_HIGHLIGHT};
  }
`,yt=f.span`
  background: ${y.lightBlue100};
  color: ${y.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,bt=f.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${y.AI_HIGHLIGHT};
  }
`,wt=({transcriptString:r,isFirst:a})=>{const[t,n]=l.useState(0),[p,o]=l.useState(!1),{playerRef:u}=N(d=>d),h=r.replace(/^["']|["']$/g,""),w=JSON.parse(h),x=l.useRef(null),s=l.useRef(null),m=l.useRef(null);return l.useEffect(()=>{const d=setInterval(()=>{if(u&&n){const i=u.getCurrentTime();n(i)}},100);return()=>clearInterval(d)},[u,n]),l.useEffect(()=>{const d=()=>{o(!0),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{o(!1)},1e3)},i=s.current;return i&&i.addEventListener("scroll",d),()=>{i&&i.removeEventListener("scroll",d)}},[]),l.useEffect(()=>{!p&&x.current&&x.current.scrollIntoView({behavior:"smooth",block:"center"})},[t,p]),e.jsx(jt,{ref:s,children:e.jsx(e.Fragment,{children:a?e.jsx(e.Fragment,{children:w[0].start>t?e.jsx(X,{active:!1,start:Y(w[0].start),text:w[0].text}):e.jsx(e.Fragment,{children:w.map(d=>{const i=Y(d.start),c=d.start<t&&t<d.end;return!a||d.start<=t+5?e.jsx(X,{ref:c?x:null,active:c,start:i,text:d.text},`${d.start}-${d.end}`):null})})}):e.jsx(e.Fragment,{children:w.map(d=>{const i=Y(d.start),c=d.start<t&&t<d.end;return e.jsx(X,{ref:c?x:null,active:c,start:i,text:d.text},`${d.start}-${d.end}`)})})})})},jt=f.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,vt=()=>{var d;const r=W(i=>i.clips),a=W(i=>i.setActiveClip),t=W(i=>i.activeClip),{playerRef:n}=N(i=>i),[p,o]=l.useState(0),[u,h]=l.useState(!0),[w,x]=ie(i=>[i.setActiveNode,i.activeNode]),s=Se(i=>i.simulation);l.useEffect(()=>{const i=setInterval(()=>{if(n&&o){const c=n.getCurrentTime();o(c)}},100);return()=>clearInterval(i)},[n,o]),l.useEffect(()=>{p?(()=>{var b;const c=r.find(k=>{var _;const[T,$]=m((_=k==null?void 0:k.properties)==null?void 0:_.timestamp);return T<=p&&p<$});t&&(c==null?void 0:c.ref_id)===(t==null?void 0:t.ref_id)||!c||(h((c==null?void 0:c.ref_id)===((b=r[0])==null?void 0:b.ref_id)),a(c||null))})():(h(!0),a(r[0]))},[p,r,t,a]),l.useEffect(()=>{if(t&&(!x||t.ref_id!==x.ref_id)){const i=s==null?void 0:s.nodes().find(c=>c.ref_id===t.ref_id);typeof(i==null?void 0:i.fx)=="number"&&w(i)}},[t,x,w,s]);const m=i=>i?i.split("-").map(Number):[0,0];return e.jsx(kt,{direction:"row",children:((d=t==null?void 0:t.properties)==null?void 0:d.transcript)&&e.jsx(wt,{isFirst:u,transcriptString:t.properties.transcript})})},kt=f(g)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
  @media (max-width: 768px) {
    margin: 0;
  }
`,U="chapters",G="transcript",Ct=()=>{var p,o;const r=W(u=>u.selectedEpisode),a=N(u=>u.isPlaying),[t,n]=l.useState(U);return l.useEffect(()=>{a&&n(G)},[a]),e.jsxs(_t,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(Tt,{children:((p=r==null?void 0:r.properties)==null?void 0:p.media_url)&&e.jsx(lt,{mediaUrl:r.properties.media_url})}),e.jsx(g,{className:"heading",children:(o=r==null?void 0:r.properties)==null?void 0:o.episode_title}),e.jsxs($t,{direction:"row",children:[e.jsx(te,{className:K({selected:t===U}),onClick:()=>n(U),children:"Chapters"}),e.jsx(te,{className:K({selected:t===G}),onClick:()=>n(G),children:"Transcript"})]}),e.jsxs(St,{children:[t===U&&e.jsx(pt,{onChangeChapter:()=>n(G)}),t===G&&e.jsx(vt,{})]})]})},St=f(g)`
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
`,_t=f(g)(({theme:r})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[r.breakpoints.up("sm")]:{width:Me},"@media (max-width: 768px)":{padding:0}})),Tt=f(g)(({theme:r})=>({width:"100%",marginBottom:"20px",[r.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),te=f(g)`
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
`,$t=f(g)`
  background: ${y.primaryBlue};
  padding: 12px 24px;
  background: ${y.BG1};
  border-radius: 8px;
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`,Pt=r=>{const a=r.edges.filter(n=>{var p;return(p=n==null?void 0:n.properties)==null?void 0:p.start}).map(n=>({source:n.source,target:n.target,start:n.properties.start}));return r.nodes.filter(n=>r.edges.some(p=>p.source===n.ref_id||p.target===n.ref_id)).map(n=>{const p=a.find(o=>n.ref_id===o.source||n.ref_id===o.target);return{...n,start:(p==null?void 0:p.start)||0}}).filter(n=>n&&n.node_type!=="Clip"&&n.node_type!=="Episode"&&n.node_type!=="Show")},ar=()=>{const r=ne(i=>i.addNewNode),a=W(i=>i.activeClip),t=W(i=>i.fetchEpisodeData),n=W(i=>i.chapters),p=l.useRef(null),o=l.useRef(null),u=l.useRef(null),h=l.useRef(null),[w,x]=l.useState([]),{setSchemas:s}=re(i=>i),m=he(),{episodeId:d}=ge();return l.useEffect(()=>{(async()=>{try{const c=await be();s(c.schemas.filter(b=>!b.is_deleted))}catch(c){console.error("Error fetching schema:",c)}})()},[s]),l.useEffect(()=>{d&&(async()=>{try{t(d||"")}catch(c){m("/"),console.error("Error fetching initial data:",c)}})()},[d,m,t]),l.useEffect(()=>{a&&n&&(async()=>{var c,b,k,T;try{const $=[],_={nodes:((c=u.current)==null?void 0:c.nodes)||[],edges:((b=u.current)==null?void 0:b.edges)||[]},F=a==null?void 0:a.ref_id;if(F){const M=await we(F,["-Clip","-Episode"],[],"",!0,0,2,50),R=M.nodes.filter(P=>P.node_type==="Claim"),B=M.edges.filter(P=>R.some(A=>A.ref_id===P.source||A.ref_id===P.target));h.current={nodes:[...((k=h.current)==null?void 0:k.nodes)||[],...R],edges:[...((T=h.current)==null?void 0:T.edges)||[],...B]};const D=Pt(M).map(P=>{var H;const A=((H=(n||[]).find(C=>{var I;return P.start&&q(((I=C==null?void 0:C.properties)==null?void 0:I.timestamp)||"")>=P.start*1e3}))==null?void 0:H.ref_id)||"";return{...P,neighbourHood:A}});_.nodes.push(...D||[]),_.edges.push(...(M==null?void 0:M.edges)||[]),$.push(...D),u.current=_}x($)}catch($){console.error("Error processing clip nodes:",$)}})()},[a,n]),l.useEffect(()=>{const i=c=>{var k;const{playerRef:b}=N.getState();if(o.current!==null){if(c-o.current>2e3){if(u.current&&b){const{nodes:$,edges:_}=u.current,F=b==null?void 0:b.getCurrentTime(),[M,R]=_.reduce(([C,I],v)=>{var E,L;return((E=v==null?void 0:v.properties)==null?void 0:E.start)!==void 0&&((L=v==null?void 0:v.properties)==null?void 0:L.start)<F+1?C.push(v):I.push(v),[C,I]},[[],[]]),[B,O]=$.reduce(([C,I],v)=>(M.some(E=>E.target===v.ref_id||E.source===v.ref_id)?C.push(v):I.push(v),[C,I]),[[],[]]);u.current={nodes:O,edges:R};const[D,P]=(((k=h.current)==null?void 0:k.edges)||[]).reduce(([C,I],v)=>{var E,L;if(B.some(j=>j.ref_id===v.source)){const j=(((E=h.current)==null?void 0:E.nodes)||[]).find(S=>S.ref_id===v.target);j&&(C.push(j),I.push(v))}else if(B.some(j=>j.ref_id===v.target)){const j=(((L=h.current)==null?void 0:L.nodes)||[]).find(S=>S.ref_id===v.source);j&&(C.push(j),I.push(v))}return[C,I]},[[],[]]),A=[...B,...D],H=[...M,...P];(A.length||H.length)&&r({nodes:A,edges:H})}o.current=c}}else o.current=c;p.current=requestAnimationFrame(i)};return p.current=requestAnimationFrame(i),()=>{p.current&&cancelAnimationFrame(p.current)}},[u,r]),e.jsxs(It,{children:[e.jsx(Nt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx(g,{children:e.jsx(ye,{})}),e.jsx(Ct,{})]}),e.jsx(Mt,{children:e.jsxs(g,{basis:"100%",grow:1,shrink:1,children:[e.jsx(ve,{}),d==="f6d3e4a8-3c4d-4571-b10f-77d6663f90cc"&&e.jsx(et,{})]})})]})}),e.jsx(Rt,{children:e.jsx(Oe,{chapters:n,markers:w})}),e.jsx(je,{})]})},It=f.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Nt=f(g)`
  flex: 1;
  overflow: hidden;
`,Mt=f(g)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`,Rt=f(g)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{ar as MindSet};
