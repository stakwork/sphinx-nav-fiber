import{s as h,g as w,r as i,c as ie,j as e,A as ae,F as j,o as we,p as ce,q as J,i as ve,t as je,H as ke,v as Se,w as Ce}from"./index-c575771d.js";import{u as P,t as Z,C as Te}from"./index-d905de8c.js";import{U as _e}from"./index-d29b1ed5.js";import{u as le,a as A,b as $e,c as pe,I as Ie,v as q,d as Ee}from"./index-3e4dfee8.js";import{R as Me,s as V,S as Pe,M as Ne,C as Fe}from"./index-de5681cc.js";import{F as Re,E as Ae,M as ze,V as We,C as Be,a as De}from"./index-0fb2ecac.js";import{F as He}from"./FormControlLabel-cdce597a.js";import"./string-a277709d.js";import"./index-30031878.js";import"./three.module-9722a9fc.js";import"./isPlainObject-f65fd0f9.js";import"./TextareaAutosize-e9acb7a1.js";import"./CheckIcon-ff067ded.js";import"./index-0ef2f70a.js";import"./index-51de8a06.js";import"./index-892a4d8c.js";import"./ClipLoader-c29baf4c.js";import"./clsx-aa752837.js";import"./Skeleton-e5019721.js";import"./index-2fd44e7b.js";import"./SoundIcon-71355fcb.js";import"./Stack-767b87e4.js";import"./createSvgIcon-28f2ac01.js";import"./SourcesTableIcon-a25da39d.js";import"./DeleteNodeIcon-8e75e833.js";import"./SucessFeedBackIcon-e8275976.js";import"./Typography-70fe62a8.js";const Le=t=>/\.(mp4|webm|mov|mkv|avi)(\?.*)?$/i.test(t),Ge=(t,a)=>{let r=0,s=t.length-1;for(;r<=s;){const u=Math.floor((r+s)/2),n=t[u],{start:c,end:f}=n.properties;if(a>=c&&a<=f)return n;a<c?s=u-1:r=u+1}return null},Ve=({mediaUrl:t})=>{var ee;const a=i.useRef(null),[r,s]=i.useState("ready"),[u,n]=i.useState(!1),[c,f]=i.useState(!1),x=P(E=>E.setIsFullScreen),m=P(E=>E.isFullScreen),{setActiveEdge:o}=le(E=>E),{dataInitial:b}=ie(E=>E),{isPlaying:d,playingTime:g,setIsPlaying:l,setPlayingTime:v,setDuration:C,playingNode:p,volume:y,setHasError:T,resetPlayer:_,isSeeking:k,setIsSeeking:S,setPlayerRef:M,playerRef:$,playbackSpeed:X}=A(E=>E),L=($==null?void 0:$.getDuration())||0;i.useEffect(()=>()=>_(),[_]),i.useEffect(()=>{p&&!u&&(v(0),C(0),n(!1))},[p,v,C,n,u]),i.useEffect(()=>{k&&$&&($.seekTo(g,"seconds"),S(!1))},[g,k,S,$]);const N=i.useCallback(()=>{l(!d)},[d,l]),W=()=>{T(!0),s("error")},H=i.useCallback(E=>{E.code},[N]);i.useEffect(()=>(window.addEventListener("keydown",H),()=>{window.removeEventListener("keydown",H)}),[H]);const F=i.useMemo(()=>((b==null?void 0:b.links.filter(z=>{var G;return(G=z==null?void 0:z.properties)==null?void 0:G.start}))||[]).slice().sort((z,G)=>{var te,re;return((te=z==null?void 0:z.properties)==null?void 0:te.start)-((re=G==null?void 0:G.properties)==null?void 0:re.start)}),[b]),R=E=>{if(!k){const z=E.playedSeconds;v(z);const G=Ge(F,z);o(G||null)}},I=()=>{if(s("ready"),$){const E=$.getDuration();C(E),B!==null&&!c&&($.seekTo(B,"seconds"),f(!0))}},B=i.useMemo(()=>{const z=new URL(window.location.href).searchParams.get("start");return z?parseFloat(z):null},[]),Y=i.useCallback(()=>{d||l(!0)},[l,d]),D=i.useCallback(()=>{d&&l(!1)},[l,d]),O=i.useCallback(E=>{!$&&E&&M(E)},[M,$]);return t?e.jsxs(Xe,{ref:a,isFullScreen:m,tabIndex:0,children:[e.jsx(Ye,{isFullScreen:m,children:e.jsx(ae,{size:200,src:((ee=p==null?void 0:p.properties)==null?void 0:ee.image_url)||"",type:"clip"})}),e.jsxs(Ue,{isFullScreen:m,children:[e.jsx(Me,{ref:O,height:m?"100%":"auto",onBuffer:()=>s("buffering"),onBufferEnd:()=>s("ready"),onError:W,onPause:D,onPlay:Y,onProgress:R,onReady:I,playbackRate:X,playing:d,style:{maxWidth:"100%",maxHeight:m?"100vh":"auto",width:m?"100%":"auto",height:m?"100%":"auto",objectFit:"contain"},url:t||"",volume:y,width:"100%"}),e.jsx(qe,{className:"time-overlay",isFullScreen:m,children:e.jsxs(Ke,{children:[V(g)," / ",V(L)]})})]}),Le(t)&&e.jsx(Je,{onClick:()=>x(!m),children:m?e.jsx(Ae,{}):e.jsx(Re,{})}),r==="error"&&e.jsx(Oe,{className:"error-wrapper",children:"Error happened, please try later"})]}):null},Xe=h(j)`
  border-bottom: ${t=>t.isFullScreen?"none":"1px solid rgba(0, 0, 0, 0.25)"};
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: ${t=>t.isFullScreen?"100%":"auto"};
  min-height: ${t=>t.isFullScreen?"100%":"190px"};
  width: 100%;
  &:focus {
    outline: none;
  }
`,Ye=h(j)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Oe=h(j)`
  height: 60px;
  padding: 12px 16px;
  color: ${w.primaryRed};
`,Ue=h.div`
  margin: 0;
  width: 100%;
  height: ${t=>t.isFullScreen?"100%":"auto"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;

  ${t=>t.isFullScreen&&`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `}

  .time-overlay {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .time-overlay {
    opacity: 1;
  }
`,qe=h.div`
  position: absolute;
  bottom: ${t=>t.isFullScreen?"-4px":"0px"};
  left: 0px;
  z-index: 50;
  width: 100%;
`,Ke=h.div`
  background: rgba(0, 0, 0, 0.45);
  color: ${w.GRAY6};
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
  text-align: center;
`,Je=h(j)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
  color: ${w.white};
  font-size: 32px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 5px;
`,Qe=i.memo(Ve),Ze=()=>{var n;const t=P(c=>c.selectedEpisode),a=P(c=>c.isFullScreen),r=i.useRef(null),[s,u]=i.useState(!1);return i.useEffect(()=>{r.current||(r.current=document.createElement("div")),a&&(r.current.style.width="100%",r.current.style.height="100%",r.current.style.display="flex",r.current.style.justifyContent="center",r.current.style.alignItems="center");const c=r.current,f=document.getElementById(a?"floating-player-root":"sidebar-player-root");return c&&f&&!f.contains(c)&&f.appendChild(c),u(!0),()=>{const x=c==null?void 0:c.parentNode;x&&"id"in x&&typeof x.id=="string"&&["floating-player-root","sidebar-player-root"].includes(x.id)&&x.removeChild(c)}},[a]),!((n=t==null?void 0:t.properties)!=null&&n.media_url)||!s||!r.current?null:we.createPortal(e.jsx(et,{isFullScreen:a,children:e.jsx(Qe,{mediaUrl:t.properties.media_url})}),r.current)},et=h.div`
  width: ${t=>t.isFullScreen?"100%":"auto"};
  height: ${t=>t.isFullScreen?"100%":"auto"};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  ${t=>t.isFullScreen&&`
    position: relative;
    flex: 1;
  `}
`,de=i.memo(()=>{const t=A(l=>l.isPlaying),a=A(l=>l.setIsPlaying),r=A(l=>l.setVolume),s=A(l=>l.setPlaybackSpeed),u=A(l=>l.playbackSpeed),n=A(l=>l.playerRef),[c,f]=i.useState(!1),x=[.5,1,1.5,2],m=()=>{if(n){const l=n.getCurrentTime()-15;n.seekTo(l,"seconds")}},o=()=>{if(n){const l=n.getCurrentTime()+15;n.seekTo(l,"seconds")}},b=()=>{a(!t)},d=()=>{f(!c),r(c?1:0)},g=()=>{const v=(x.indexOf(u)+1)%x.length,C=x[v];if(s(C),n){const p=n.getInternalPlayer();p&&typeof p.playbackRate<"u"&&(p.playbackRate=C)}};return e.jsxs(tt,{children:[e.jsx(ot,{onClick:d,children:c?e.jsx(ze,{}):e.jsx(We,{})}),e.jsx(st,{onClick:m,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(rt,{"data-testid":"play-pause-button",onClick:b,size:"small",children:t?e.jsx($e,{"data-testid":"pause-icon"}):e.jsx(pe,{"data-testid":"play-icon"})}),e.jsx(nt,{onClick:o,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(it,{onClick:g,children:[u,"x"]})]})});de.displayName="Controls";const tt=h(j).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${w.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${w.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`,rt=h(Ie)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,st=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,nt=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,ot=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${w.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${w.DROPDOWN_BG};
  }
`,it=h.button`
  margin-top: 4px;
  background: ${w.BG1};
  color: ${w.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,ue=i.memo(({left:t,width:a,title:r})=>e.jsx(at,{style:{left:`${t}%`,width:`calc(${a}%)`},children:e.jsx("div",{className:"title",children:r})}));ue.displayName="Chapter";const at=h.div`
  position: absolute;
  top: -3px;
  height: 100%;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  & + & {
    border-left: 0.1px solid ${w.white};
  }

  .title {
    position: absolute;
    bottom: calc(100% + 16px);
    display: none;
    color: ${w.white};
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
`,he=i.memo(({chapters:t,duration:a})=>a?e.jsx(e.Fragment,{children:t.map((r,s)=>{var m,o,b,d,g;const u=(m=r==null?void 0:r.properties)!=null&&m.timestamp?Z(r.properties.timestamp)/1e3:0,n=(b=(o=t[s+1])==null?void 0:o.properties)!=null&&b.timestamp?Z((d=t[s+1].properties)==null?void 0:d.timestamp)/1e3:a,c=Math.floor(u/a*100),x=Math.floor(n/a*100)-c;return e.jsx(ue,{left:c,title:((g=r==null?void 0:r.properties)==null?void 0:g.name)||(r==null?void 0:r.name)||"",width:x},`${r.ref_id}_${s}`)})}):null);he.displayName="Chapters";const xe=i.memo(({type:t,left:a,img:r})=>{var x,m;const s=ce(o=>o.normalizedSchemasByType),u=(x=s[t])==null?void 0:x.primary_color,n=(m=s[t])==null?void 0:m.icon,c=n?`/svg-icons/${n}.svg`:"",f={iconStart:r||c,color:u??w.THING};return e.jsx(lt,{style:{left:`${a}%`},children:e.jsx(fe,{...f,label:t})})});xe.displayName="Marker";const fe=i.memo(({iconStart:t,color:a,label:r})=>e.jsx(ct,{color:a,children:t&&e.jsx("img",{alt:r,className:"badge__img",onError:console.log,src:t})}));fe.displayName="Badge";const ct=h(j).attrs({direction:"row"})`
  cursor: pointer;
  background: ${({color:t})=>t};
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  .badge__img {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }
`,lt=h.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${w.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,me=i.memo(({markers:t,duration:a})=>e.jsx(e.Fragment,{children:t.map((r,s)=>{var f;const u=Math.floor(((r==null?void 0:r.start)||0)/a*100),n=(r==null?void 0:r.node_type)||"",c=((f=r==null?void 0:r.properties)==null?void 0:f.image_url)||"";return e.jsx(xe,{img:c,left:u,type:n},`${r.ref_id}_${s}`)})}));me.displayName="Markers";const pt=({duration:t,markers:a,handleProgressChange:r,playingTime:s,chapters:u})=>{const n=10/t*100,[c,f]=i.useState(!1),[x,m]=i.useState(0),[o,b]=i.useState(0),d=i.useRef(null),g=i.useCallback(()=>d.current?d.current.querySelector(".MuiSlider-root"):null,[]),l=i.useCallback((T,_)=>{const k=T-_.left;return Math.max(0,Math.min(1,k/_.width))*t},[t]),v=i.useCallback(T=>{if(t<=0)return;const _=g();if(!_)return;const k=_.getBoundingClientRect(),S=T.clientX-k.left,M=l(T.clientX,k);m(M),b(S),f(!0)},[t,l,g]),C=i.useCallback(T=>{if(t<=0)return;const _=g();if(!_)return;const k=_.getBoundingClientRect(),S=l(T.clientX,k),M=new Event("change");r(M,S)},[t,l,r,g]),p=()=>{f(!0)},y=()=>{f(!1)};return e.jsxs(dt,{children:[e.jsxs(ut,{ref:d,onClick:C,onMouseEnter:p,onMouseLeave:y,onMouseMove:v,children:[e.jsx(ft,{max:t,onChange:r,onMouseDown:T=>T.preventDefault(),value:s,width:n}),c&&t>0&&e.jsx(xt,{style:{left:o},children:V(x)})]}),u&&u.length>0&&e.jsx(ge,{children:e.jsx(he,{chapters:u,duration:t})}),e.jsx(ht,{children:e.jsx(me,{duration:t,markers:a})})]})},ge=h(j)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,dt=h(j)`
  position: relative;
  flex: 1 1 100%;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    ${ge} {
      display: block;
    }
  }
`,ut=h.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  z-index: 25;
`,ht=h(j)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,xt=h.div`
  position: absolute;
  bottom: 100%;
  transform: translateX(-50%);
  background: ${w.BG4};
  color: ${w.white};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  margin-bottom: 8px;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid ${w.BG4};
  }

  animation: fadeIn 0.15s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`,ft=h(Pe)`
  && {
    z-index: 20;
    color: ${w.white};
    height: 3px;
    width: calc(100% - 12px);
    box-sizing: border-box;
    pointer-events: none;

    .MuiSlider-track {
      border: none;
    }

    .MuiSlider-thumb {
      width: ${({width:t})=>`${t}%`};
      height: 54px;
      border-radius: 8px;
      background-color: ${w.primaryBlue};
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
`,mt=({markers:t,chapters:a})=>{const{playingNode:r,playerRef:s}=A(m=>m),[u,n]=i.useState(0),c=r,f=i.useCallback((m,o)=>{const b=Array.isArray(o)?o[0]:o;s&&s.seekTo(b,"seconds")},[s]);i.useEffect(()=>{const m=setInterval(()=>{if(s&&n){const o=s.getCurrentTime();n(o)}},500);return()=>clearInterval(m)},[s,n]);const x=(s==null?void 0:s.getDuration())||0;return c?e.jsxs(gt,{children:[e.jsx(de,{}),e.jsx(pt,{chapters:a,duration:x,handleProgressChange:f,markers:t,playingTime:u})]}):null},gt=h(j).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${w.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,bt=({text:t,timestamps:a,description:r})=>e.jsxs(yt,{children:[e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"description",children:r}),e.jsxs("div",{className:"clip",children:[a&&e.jsx("div",{className:"clip__timestamps",children:a}),e.jsx("div",{className:"clip__icon",children:e.jsx(pe,{})})]})]}),yt=h(j)`
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
`,wt=({name:t,imgUrl:a,description:r})=>e.jsxs(vt,{children:[e.jsx("div",{className:"avatar",children:a?e.jsx(ae,{rounded:!0,size:64,src:a,type:"Person"}):t.charAt(0)}),e.jsxs("div",{className:"label",children:[e.jsx("div",{className:"name",children:t}),e.jsx("div",{className:"description",children:r})]})]}),vt=h(j)`
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
`,be=[{node_type:"Speaker",ref_id:"speaker-datalabtech",properties:{name:"DataLabTech",avatar_url:"datalab.png",description:"Data engineer & educator, host of DataLabTechTV",timestamp:"00:00:00",end:"00:25:32"}},{node_type:"HotTake",ref_id:"hottake-graph-ai-hype",properties:{text:'Most "AI graph apps" don’t use real graphs',description:"Many companies claim to use graphs and AI, but they only scratch the surface.",timestamp:"00:05:10",end:"00:05:40"}},{node_type:"HotTake",ref_id:"hottake-text-vs-node-embeddings",properties:{text:"Node embeddings > text embeddings for real context",description:"To leverage graph structure, node embeddings outperform pure text approaches.",timestamp:"00:07:45",end:"00:08:15"}},{node_type:"HotTake",ref_id:"hottake-kuzudb-vs-neo4j",properties:{text:"KuzuDB is the DuckDB of graph databases",description:"Columnar, fast, and analytics-focused—KuzuDB outperforms Neo4j for OLAP tasks.",timestamp:"00:12:30",end:"00:13:00"}},{node_type:"HotTake",ref_id:"hottake-graphrag-metallica",properties:{text:"GraphRAG can recommend Slayer if you like Metallica",description:"Using graph paths and embeddings, GraphRAG builds contextual music recommendations.",timestamp:"00:16:20",end:"00:16:50"}},{node_type:"HotTake",ref_id:"hottake-langchain-llm-orchestration",properties:{text:"LangChain glues LLMs, graphs, and logic together",description:"LangChain helps build complex GraphRAG pipelines by chaining prompts and DB calls.",timestamp:"00:19:40",end:"00:20:10"}}],jt=be.filter(t=>t.node_type==="Speaker"),kt=be.filter(t=>t.node_type!=="Speaker").sort((t,a)=>{var u,n;const r=q(((u=t.properties)==null?void 0:u.timestamp)||"00:00:00"),s=q(((n=a.properties)==null?void 0:n.timestamp)||"00:00:00");return r-s}),St=()=>{const[t,a]=i.useState({x:0,y:0}),[r,s]=i.useState(!1),[u,n]=i.useState(null),{playerRef:c}=A(o=>o);console.log(u,t),i.useEffect(()=>{const o=b=>{a({x:b.clientX,y:b.clientY})};return window.addEventListener("mousemove",o),()=>window.removeEventListener("mousemove",o)},[]);const f=()=>{s(!r)},x=i.useCallback(o=>{const b=Array.isArray(o)?o[0]:o;c&&c.seekTo(b,"seconds")},[c]),m=o=>{var b,d,g;if((b=o==null?void 0:o.properties)!=null&&b.timestamp&&(d=o.properties)!=null&&d.timestamp&&c){const l=q((g=o.properties)==null?void 0:g.timestamp);x(l)}};return e.jsxs(Ct,{className:r?"swapped":"",children:[e.jsxs(Tt,{onClick:f,children:[r?null:e.jsx("div",{className:"icon",children:e.jsx(Be,{})}),e.jsx("span",{children:"Hot takes"}),r?e.jsx("div",{className:"icon",children:e.jsx(De,{})}):null]}),r?null:e.jsxs(e.Fragment,{children:[e.jsx(se,{children:jt.map(o=>{var l,v,C;const b=((l=o==null?void 0:o.properties)==null?void 0:l.description)||"",d=((v=o==null?void 0:o.properties)==null?void 0:v.name)||"",g=((C=o==null?void 0:o.properties)==null?void 0:C.avatar_url)||"";return e.jsx("div",{className:"child",children:e.jsx(ne,{onClick:()=>m(o),onMouseEnter:()=>n(o.ref_id),onMouseLeave:()=>n(null),children:e.jsx(wt,{description:b,imgUrl:g,name:d})})},o.ref_id)})}),e.jsx(se,{children:kt.map(o=>{var l,v,C,p,y,T;const b=((l=o==null?void 0:o.properties)==null?void 0:l.text)||"",d=((v=o==null?void 0:o.properties)==null?void 0:v.description)||"",g=(C=o==null?void 0:o.properties)!=null&&C.timestamp&&((p=o==null?void 0:o.properties)!=null&&p.end)?`${V(q((y=o==null?void 0:o.properties)==null?void 0:y.timestamp))} - ${V(q((T=o==null?void 0:o.properties)==null?void 0:T.end))}`:void 0;return e.jsx("div",{className:"child",children:e.jsx(ne,{onClick:()=>m(o),onMouseEnter:()=>n(o.ref_id),onMouseLeave:()=>n(null),children:e.jsx(bt,{description:d,text:b,timestamps:g})})},o.ref_id)})})]})]})},Ct=h.div`
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
`,se=h(j)`
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
`,Tt=h.button`
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
`,ne=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 10;
`,_t=({onChangeChapter:t})=>{const a=P(n=>n.highlights),{playerRef:r}=A(n=>n),s=i.useCallback(n=>{const c=Array.isArray(n)?n[0]:n;r&&r.seekTo(c,"seconds")},[r]),u=n=>{t(),s(a[n].startTime)};return e.jsx($t,{direction:"column",children:a.length>0&&e.jsx(It,{children:e.jsx(Et,{children:a.map((n,c)=>e.jsxs(Mt,{onClick:()=>u(c),children:[e.jsx(Pt,{children:n.title}),e.jsxs(Nt,{children:[Math.floor(n.startTime/60),":",(n.startTime%60).toString().padStart(2,"0")]})]},c))})})})},$t=h(j)({width:"100%",gap:"20px"}),It=h.div`
  width: 100%;
`,Et=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Mt=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  background: ${w.gray500};
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${w.gray400};
  }
`,Pt=h.span`
  font-size: 14px;
  color: ${w.white};
  font-weight: 500;
  flex: 1;
`,Nt=h.span`
  font-size: 12px;
  color: ${w.blueTextAccent};
  font-family: monospace;
`,ye=i.forwardRef(({active:t,start:a,text:r},s)=>e.jsxs(Ft,{ref:s,className:J({active:t}),children:[e.jsx(Rt,{children:a}),e.jsx(At,{children:e.jsx("span",{children:r})})]}));ye.displayName="ParagraphComponent";const Q=i.memo(ye,(t,a)=>t.active===a.active),Ft=h(j)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${w.AI_HIGHLIGHT};
  }
`,Rt=h.span`
  background: ${w.lightBlue100};
  color: ${w.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,At=h.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${w.AI_HIGHLIGHT};
  }
`,zt=({transcriptString:t,isFirst:a})=>{const[r,s]=i.useState(0),[u,n]=i.useState(!1),{playerRef:c}=A(d=>d),f=t.replace(/^["']|["']$/g,""),x=JSON.parse(f),m=i.useRef(null),o=i.useRef(null),b=i.useRef(null);return i.useEffect(()=>{const d=setInterval(()=>{if(c&&s){const g=c.getCurrentTime();s(g)}},100);return()=>clearInterval(d)},[c,s]),i.useEffect(()=>{const d=()=>{n(!0),b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{n(!1)},1e3)},g=o.current;return g&&g.addEventListener("scroll",d),()=>{g&&g.removeEventListener("scroll",d)}},[]),i.useEffect(()=>{!u&&m.current&&m.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,u]),e.jsx(Wt,{ref:o,children:e.jsx(e.Fragment,{children:a?e.jsx(e.Fragment,{children:x[0].start>r?e.jsx(Q,{active:!1,start:V(x[0].start),text:x[0].text}):e.jsx(e.Fragment,{children:x.map(d=>{const g=V(d.start),l=d.start<r&&r<d.end;return!a||d.start<=r+5?e.jsx(Q,{ref:l?m:null,active:l,start:g,text:d.text},`${d.start}-${d.end}`):null})})}):e.jsx(e.Fragment,{children:x.map(d=>{const g=V(d.start),l=d.start<r&&r<d.end;return e.jsx(Q,{ref:l?m:null,active:l,start:g,text:d.text},`${d.start}-${d.end}`)})})})})},Wt=h.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Bt=()=>{var C;const t=P(p=>p.clips),a=P(p=>p.setActiveClip),r=P(p=>p.activeClip),s=P(p=>p.chapters),u=P(p=>p.skipAds),{playerRef:n}=A(p=>p),[c,f]=i.useState(0),[x,m]=i.useState(!0),[o,b]=le(p=>[p.setActiveNode,p.activeNode]),d=Ee(p=>p.simulation),g=i.useCallback(p=>{var y;return((y=p==null?void 0:p.properties)==null?void 0:y.is_ad)==="True"},[]),l=i.useCallback(p=>{if(!s)return null;for(let y=p+1;y<s.length;y+=1)if(!g(s[y]))return s[y];return null},[s,g]),v=i.useCallback(p=>{if(!p)return[0,0];if(p.includes(":")){const y=p.split(":").map(Number);if(y.length===3){const[T,_,k]=y,S=T*3600+_*60+k;return[S,S]}if(y.length===2){const[T,_]=y,k=T*60+_;return[k,k]}}return p.split("-").map(Number)},[]);return i.useEffect(()=>{const p=setInterval(()=>{if(n&&f){const y=n.getCurrentTime();f(y)}},100);return()=>clearInterval(p)},[n,f]),i.useEffect(()=>{c?(()=>{var T,_;if(u&&s){const k=s.findIndex((S,M)=>{var N,W;const[$]=v((N=S==null?void 0:S.properties)==null?void 0:N.timestamp),X=s[M+1],L=X?v((W=X.properties)==null?void 0:W.timestamp)[0]:1/0;return $<=c&&c<L});if(k!==-1){const S=s[k];if(g(S)){const M=l(k);if(M&&n){const[$]=v((T=M.properties)==null?void 0:T.timestamp);n.seekTo($,"seconds");return}}}}const y=t.find(k=>{var $;const[S,M]=v(($=k==null?void 0:k.properties)==null?void 0:$.timestamp);return S<=c&&c<M});r&&(y==null?void 0:y.ref_id)===(r==null?void 0:r.ref_id)||!y||(m((y==null?void 0:y.ref_id)===((_=t[0])==null?void 0:_.ref_id)),a(y||null))})():(m(!0),a(t[0]))},[c,t,r,a,s,u,l,g,v,n]),i.useEffect(()=>{if(r&&(!b||r.ref_id!==b.ref_id)){const p=d==null?void 0:d.nodes().find(y=>y.ref_id===r.ref_id);typeof(p==null?void 0:p.fx)=="number"&&o(p)}},[r,b,o,d]),e.jsx(Dt,{direction:"row",children:((C=r==null?void 0:r.properties)==null?void 0:C.transcript)&&e.jsx(zt,{isFirst:x,transcriptString:r.properties.transcript})})},Dt=h(j)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
  @media (max-width: 768px) {
    margin: 0;
  }
`,K="chapters",U="transcript",Ht=()=>{var f;const t=P(x=>x.selectedEpisode),a=P(x=>x.isFullScreen),r=P(x=>x.skipAds),s=P(x=>x.setSkipAds),u=A(x=>x.isPlaying),[n,c]=i.useState(K);return i.useEffect(()=>{u&&c(U)},[u]),e.jsxs(Vt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(Xt,{className:J({fullScreen:a}),children:e.jsx("div",{id:"sidebar-player-root"})}),e.jsx(j,{className:"heading",children:(f=t==null?void 0:t.properties)==null?void 0:f.episode_title}),e.jsx(Lt,{children:e.jsx(He,{control:e.jsx(Fe,{checked:r,onChange:x=>s(x.target.checked),sx:{color:w.white}}),label:"Skip ads",sx:{color:w.white}})}),e.jsxs(Yt,{direction:"row",children:[e.jsx(oe,{className:J({selected:n===K}),onClick:()=>c(K),children:"Chapters"}),e.jsx(oe,{className:J({selected:n===U}),onClick:()=>c(U),children:"Transcript"})]}),e.jsxs(Gt,{children:[n===K&&e.jsx(_t,{onChangeChapter:()=>c(U)}),n===U&&e.jsx(Bt,{})]})]})},Lt=h(j)`
  padding: 8px 24px;
  background: ${w.BG1};
  border-radius: 8px;
  margin-bottom: 8px;
`,Gt=h(j)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${w.white};
  background: ${w.BG1};
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
`,Vt=h(j)(({theme:t})=>({display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[t.breakpoints.up("sm")]:{width:Ne},"@media (max-width: 768px)":{padding:0}})),Xt=h(j)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),oe=h(j)`
  color: ${w.white};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;

  &.selected {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
`,Yt=h(j)`
  background: ${w.primaryBlue};
  padding: 12px 24px;
  background: ${w.BG1};
  border-radius: 8px;
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`,Ot=["63a5707b-46a5-4df3-9258-7749aefc7fcd"],Ut=t=>{const a=t.edges.filter(s=>{var u;return(u=s==null?void 0:s.properties)==null?void 0:u.start}).map(s=>({source:s.source,target:s.target,start:s.properties.start}));return t.nodes.filter(s=>t.edges.some(u=>u.source===s.ref_id||u.target===s.ref_id)).map(s=>{const u=a.find(n=>s.ref_id===n.source||s.ref_id===n.target);return{...s,start:(u==null?void 0:u.start)||0}}).filter(s=>s&&s.node_type!=="Clip"&&s.node_type!=="Episode"&&s.node_type!=="Show")},_r=()=>{const t=ie(l=>l.addNewNode),a=P(l=>l.activeClip),r=P(l=>l.fetchEpisodeData),s=P(l=>l.chapters),u=i.useRef(null),n=i.useRef(null),c=i.useRef(null),f=i.useRef(null),[x,m]=i.useState([]),{setSchemas:o}=ce(l=>l),b=ve(),{episodeId:d}=je(),g=P(l=>l.isFullScreen);return i.useEffect(()=>{(async()=>{try{const v=await Se();o(v.schemas.filter(C=>!C.is_deleted))}catch(v){console.error("Error fetching schema:",v)}})()},[o]),i.useEffect(()=>{d&&(async()=>{try{r(d||"")}catch(v){b("/"),console.error("Error fetching initial data:",v)}})()},[d,b,r]),i.useEffect(()=>{a&&s&&(async()=>{var v,C,p,y;try{const T=[],_={nodes:((v=c.current)==null?void 0:v.nodes)||[],edges:((C=c.current)==null?void 0:C.edges)||[]},k=a==null?void 0:a.ref_id;if(k){const S=await Ce(k,["-Clip","-Episode"],[],"",!0,0,2,50),M=S.nodes.filter(N=>N.node_type==="Claim"),$=S.edges.filter(N=>M.some(W=>W.ref_id===N.source||W.ref_id===N.target));f.current={nodes:[...((p=f.current)==null?void 0:p.nodes)||[],...M],edges:[...((y=f.current)==null?void 0:y.edges)||[],...$]};const L=Ut(S).map(N=>{var H;const W=((H=(s||[]).find(F=>{var R;return N.start&&Z(((R=F==null?void 0:F.properties)==null?void 0:R.timestamp)||"")>=N.start*1e3}))==null?void 0:H.ref_id)||"";return{...N,neighbourHood:W}});_.nodes.push(...L||[]),_.edges.push(...(S==null?void 0:S.edges)||[]),T.push(...L),c.current=_}m(T)}catch(T){console.error("Error processing clip nodes:",T)}})()},[a,s]),i.useEffect(()=>{const l=v=>{var p;const{playerRef:C}=A.getState();if(n.current!==null){if(v-n.current>2e3){if(c.current&&C){const{nodes:T,edges:_}=c.current,k=C==null?void 0:C.getCurrentTime(),[S,M]=_.reduce(([F,R],I)=>{var B,Y;return((B=I==null?void 0:I.properties)==null?void 0:B.start)!==void 0&&((Y=I==null?void 0:I.properties)==null?void 0:Y.start)<k+1?F.push(I):R.push(I),[F,R]},[[],[]]),[$,X]=T.reduce(([F,R],I)=>(S.some(B=>B.target===I.ref_id||B.source===I.ref_id)?F.push(I):R.push(I),[F,R]),[[],[]]);c.current={nodes:X,edges:M};const[L,N]=(((p=f.current)==null?void 0:p.edges)||[]).reduce(([F,R],I)=>{var B,Y;if($.some(D=>D.ref_id===I.source)){const D=(((B=f.current)==null?void 0:B.nodes)||[]).find(O=>O.ref_id===I.target);D&&(F.push(D),R.push(I))}else if($.some(D=>D.ref_id===I.target)){const D=(((Y=f.current)==null?void 0:Y.nodes)||[]).find(O=>O.ref_id===I.source);D&&(F.push(D),R.push(I))}return[F,R]},[[],[]]),W=[...$,...L],H=[...S,...N];(W.length||H.length)&&t({nodes:W,edges:H})}n.current=v}}else n.current=v;u.current=requestAnimationFrame(l)};return u.current=requestAnimationFrame(l),()=>{u.current&&cancelAnimationFrame(u.current)}},[c,t]),e.jsxs(qt,{children:[e.jsx(Jt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(j,{children:e.jsx(ke,{})}),e.jsx(Ht,{})]}),e.jsx(Qt,{children:e.jsxs(j,{basis:"100%",grow:1,shrink:1,children:[e.jsx(_e,{}),Ot.includes(d||"")&&e.jsx(St,{}),g&&e.jsx(Kt,{id:"floating-player-root"}),e.jsx(Ze,{})]})})]})}),e.jsx(Zt,{children:e.jsx(mt,{chapters:s,markers:x})}),e.jsx(Te,{})]})},qt=h.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Kt=h.div`
  position: absolute;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 64px);
  z-index: 1000;
  padding: 0;
  margin: 0;
`,Jt=h(j)`
  flex: 1;
  overflow: hidden;
`,Qt=h(j)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`,Zt=h(j)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{_r as MindSet};
