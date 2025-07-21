import{s as h,g as w,r as a,c as oe,j as e,A as ie,F as v,o as ye,p as ae,q as J,i as we,t as je,H as ve,v as ke,w as Se}from"./index-a42e6981.js";import{u as P,t as Z,C as Ce}from"./index-637ac6ad.js";import{U as Te}from"./index-5c0f1ab5.js";import{u as ce,a as z,b as _e,c as le,I as $e,v as X,d as Ie}from"./index-fa96fe33.js";import{R as Pe,S as Ee,s as q,M as Ne,C as Fe}from"./index-c6b0ee1b.js";import{F as Me,E as Re,M as Ae,V as ze,C as We,a as Be}from"./index-b3fb73ea.js";import{F as He}from"./FormControlLabel-3feefd3d.js";import"./string-a277709d.js";import"./index-113059cc.js";import"./three.module-9722a9fc.js";import"./isPlainObject-4c890d64.js";import"./TextareaAutosize-c44e5243.js";import"./CheckIcon-6485b246.js";import"./index-c54d34f1.js";import"./index-875ef9a8.js";import"./index-9771906f.js";import"./ClipLoader-44362f18.js";import"./clsx-90897688.js";import"./Skeleton-df7fe562.js";import"./index-031b6372.js";import"./SoundIcon-810c6330.js";import"./Stack-66219ba4.js";import"./createSvgIcon-abc5acff.js";import"./SourcesTableIcon-c8ac0faa.js";import"./DeleteNodeIcon-d9568cd5.js";import"./SucessFeedBackIcon-39094a9a.js";import"./Typography-87dd5fec.js";const De=r=>/\.(mp4|webm|mov|mkv|avi)(\?.*)?$/i.test(r),Le=(r,i)=>{let t=0,s=r.length-1;for(;t<=s;){const d=Math.floor((t+s)/2),n=r[d],{start:c,end:g}=n.properties;if(i>=c&&i<=g)return n;i<c?s=d-1:t=d+1}return null},Ge=({mediaUrl:r})=>{var Y;const i=a.useRef(null),[t,s]=a.useState("ready"),[d,n]=a.useState(!1),[c,g]=a.useState(!1),x=P(I=>I.setIsFullScreen),f=P(I=>I.isFullScreen),{setActiveEdge:o}=ce(I=>I),{dataInitial:m}=oe(I=>I),{isPlaying:u,playingTime:y,setIsPlaying:l,setPlayingTime:j,setDuration:k,playingNode:p,volume:b,setHasError:$,resetPlayer:E,isSeeking:T,setIsSeeking:S,setPlayerRef:R,playerRef:_,playbackSpeed:G}=z(I=>I);a.useEffect(()=>()=>E(),[E]),a.useEffect(()=>{p&&!d&&(j(0),k(0),n(!1))},[p,j,k,n,d]),a.useEffect(()=>{T&&_&&(_.seekTo(y,"seconds"),S(!1))},[y,T,S,_]);const D=a.useCallback(()=>{l(!u)},[u,l]),N=()=>{$(!0),s("error")},A=a.useCallback(I=>{I.code},[D]);a.useEffect(()=>(window.addEventListener("keydown",A),()=>{window.removeEventListener("keydown",A)}),[A]);const V=a.useMemo(()=>((m==null?void 0:m.links.filter(W=>{var L;return(L=W==null?void 0:W.properties)==null?void 0:L.start}))||[]).slice().sort((W,L)=>{var ee,te;return((ee=W==null?void 0:W.properties)==null?void 0:ee.start)-((te=L==null?void 0:L.properties)==null?void 0:te.start)}),[m]),F=I=>{if(!T){const W=I.playedSeconds,L=Le(V,W);o(L||null)}},M=a.useMemo(()=>{const W=new URL(window.location.href).searchParams.get("start");return W?parseFloat(W):null},[]),C=()=>{s("ready"),_&&M!==null&&!c&&(_.seekTo(M,"seconds"),g(!0))},H=a.useCallback(()=>{u||l(!0)},[l,u]),O=a.useCallback(()=>{u&&l(!1)},[l,u]),B=a.useCallback(I=>{!_&&I&&R(I)},[R,_]);return r?e.jsxs(Ve,{ref:i,isFullScreen:f,tabIndex:0,children:[e.jsx(Oe,{isFullScreen:f,children:e.jsx(ie,{size:200,src:((Y=p==null?void 0:p.properties)==null?void 0:Y.image_url)||"",type:"clip"})}),e.jsx(Ue,{isFullScreen:f,children:e.jsx(Pe,{ref:B,height:f?"100%":"auto",onBuffer:()=>s("buffering"),onBufferEnd:()=>s("ready"),onError:N,onPause:O,onPlay:H,onProgress:F,onReady:C,playbackRate:G,playing:u,style:{maxWidth:"100%",maxHeight:f?"100vh":"auto",width:f?"100%":"auto",height:f?"100%":"auto",objectFit:"contain"},url:r||"",volume:b,width:"100%"})}),De(r)&&e.jsx(Xe,{onClick:()=>x(!f),children:f?e.jsx(Re,{}):e.jsx(Me,{})}),t==="error"&&e.jsx(Ye,{className:"error-wrapper",children:"Error happened, please try later"})]}):null},Ve=h(v)`
  border-bottom: ${r=>r.isFullScreen?"none":"1px solid rgba(0, 0, 0, 0.25)"};
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: ${r=>r.isFullScreen?"100%":"auto"};
  min-height: ${r=>r.isFullScreen?"100%":"190px"};
  width: 100%;
  &:focus {
    outline: none;
  }
`,Oe=h(v)`
  position: absolute;
  top: ${r=>r.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Ye=h(v)`
  height: 60px;
  padding: 12px 16px;
  color: ${w.primaryRed};
`,Ue=h.div`
  margin: 0;
  width: 100%;
  height: ${r=>r.isFullScreen?"100%":"auto"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  ${r=>r.isFullScreen&&`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `}
`,Xe=h(v)`
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
`,qe=a.memo(Ge),Ke=()=>{var n;const r=P(c=>c.selectedEpisode),i=P(c=>c.isFullScreen),t=a.useRef(null),[s,d]=a.useState(!1);return a.useEffect(()=>{t.current||(t.current=document.createElement("div")),i&&(t.current.style.width="100%",t.current.style.height="100%",t.current.style.display="flex",t.current.style.justifyContent="center",t.current.style.alignItems="center");const c=t.current,g=document.getElementById(i?"floating-player-root":"sidebar-player-root");return c&&g&&!g.contains(c)&&g.appendChild(c),d(!0),()=>{const x=c==null?void 0:c.parentNode;x&&"id"in x&&typeof x.id=="string"&&["floating-player-root","sidebar-player-root"].includes(x.id)&&x.removeChild(c)}},[i]),!((n=r==null?void 0:r.properties)!=null&&n.media_url)||!s||!t.current?null:ye.createPortal(e.jsx(Je,{isFullScreen:i,children:e.jsx(qe,{mediaUrl:r.properties.media_url})}),t.current)},Je=h.div`
  width: ${r=>r.isFullScreen?"100%":"auto"};
  height: ${r=>r.isFullScreen?"100%":"auto"};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  ${r=>r.isFullScreen&&`
    position: relative;
    flex: 1;
  `}
`,pe=a.memo(()=>{const r=z(l=>l.isPlaying),i=z(l=>l.setIsPlaying),t=z(l=>l.setVolume),s=z(l=>l.setPlaybackSpeed),d=z(l=>l.playbackSpeed),n=z(l=>l.playerRef),[c,g]=a.useState(!1),x=[.5,1,1.5,2],f=()=>{if(n){const l=n.getCurrentTime()-15;n.seekTo(l,"seconds")}},o=()=>{if(n){const l=n.getCurrentTime()+15;n.seekTo(l,"seconds")}},m=()=>{i(!r)},u=()=>{g(!c),t(c?1:0)},y=()=>{const j=(x.indexOf(d)+1)%x.length,k=x[j];if(s(k),n){const p=n.getInternalPlayer();p&&typeof p.playbackRate<"u"&&(p.playbackRate=k)}};return e.jsxs(Qe,{children:[e.jsx(rt,{onClick:u,children:c?e.jsx(Ae,{}):e.jsx(ze,{})}),e.jsx(et,{onClick:f,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(Ze,{"data-testid":"play-pause-button",onClick:m,size:"small",children:r?e.jsx(_e,{"data-testid":"pause-icon"}):e.jsx(le,{"data-testid":"play-icon"})}),e.jsx(tt,{onClick:o,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(st,{onClick:y,children:[d,"x"]})]})});pe.displayName="Controls";const Qe=h(v).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,Ze=h($e)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,et=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,tt=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,rt=h.div`
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
`,st=h.button`
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
`,de=a.memo(({left:r,width:i,title:t})=>e.jsx(nt,{style:{left:`${r}%`,width:`calc(${i}%)`},children:e.jsx("div",{className:"title",children:t})}));de.displayName="Chapter";const nt=h.div`
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
`,ue=a.memo(({chapters:r,duration:i})=>i?e.jsx(e.Fragment,{children:r.map((t,s)=>{var f,o,m,u,y;const d=(f=t==null?void 0:t.properties)!=null&&f.timestamp?Z(t.properties.timestamp)/1e3:0,n=(m=(o=r[s+1])==null?void 0:o.properties)!=null&&m.timestamp?Z((u=r[s+1].properties)==null?void 0:u.timestamp)/1e3:i,c=Math.floor(d/i*100),x=Math.floor(n/i*100)-c;return e.jsx(de,{left:c,title:((y=t==null?void 0:t.properties)==null?void 0:y.name)||(t==null?void 0:t.name)||"",width:x},`${t.ref_id}_${s}`)})}):null);ue.displayName="Chapters";const he=a.memo(({type:r,left:i,img:t})=>{var x,f;const s=ae(o=>o.normalizedSchemasByType),d=(x=s[r])==null?void 0:x.primary_color,n=(f=s[r])==null?void 0:f.icon,c=n?`/svg-icons/${n}.svg`:"",g={iconStart:t||c,color:d??w.THING};return e.jsx(it,{style:{left:`${i}%`},children:e.jsx(xe,{...g,label:r})})});he.displayName="Marker";const xe=a.memo(({iconStart:r,color:i,label:t})=>e.jsx(ot,{color:i,children:r&&e.jsx("img",{alt:t,className:"badge__img",onError:console.log,src:r})}));xe.displayName="Badge";const ot=h(v).attrs({direction:"row"})`
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
`,it=h.div`
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
`,fe=a.memo(({markers:r,duration:i})=>e.jsx(e.Fragment,{children:r.map((t,s)=>{var g;const d=Math.floor(((t==null?void 0:t.start)||0)/i*100),n=(t==null?void 0:t.node_type)||"",c=((g=t==null?void 0:t.properties)==null?void 0:g.image_url)||"";return e.jsx(he,{img:c,left:d,type:n},`${t.ref_id}_${s}`)})}));fe.displayName="Markers";const at=({duration:r,markers:i,handleProgressChange:t,playingTIme:s,chapters:d})=>{const n=10/r*100;return e.jsxs(ct,{children:[e.jsx(pt,{max:r,onChange:t,value:s,width:n}),d&&e.jsx(ge,{children:e.jsx(ue,{chapters:d,duration:r})}),e.jsx(lt,{children:e.jsx(fe,{duration:r,markers:i})})]})},ge=h(v)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,ct=h(v)`
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
`,lt=h(v)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,pt=h(Ee)`
  && {
    z-index: 20;
    color: ${w.white};
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
`,dt=({markers:r,chapters:i})=>{const{playingNode:t,playerRef:s}=z(f=>f),[d,n]=a.useState(0),c=t,g=a.useCallback((f,o)=>{const m=Array.isArray(o)?o[0]:o;s&&s.seekTo(m,"seconds")},[s]);a.useEffect(()=>{const f=setInterval(()=>{if(s&&n){const o=s.getCurrentTime();n(o)}},500);return()=>clearInterval(f)},[s,n]);const x=(s==null?void 0:s.getDuration())||0;return c?e.jsxs(ut,{children:[e.jsx(pe,{}),e.jsx(at,{chapters:i,duration:x,handleProgressChange:g,markers:r,playingTIme:d})]}):null},ut=h(v).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${w.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,ht=({text:r,timestamps:i,description:t})=>e.jsxs(xt,{children:[e.jsx("div",{className:"title",children:r}),e.jsx("div",{className:"description",children:t}),e.jsxs("div",{className:"clip",children:[i&&e.jsx("div",{className:"clip__timestamps",children:i}),e.jsx("div",{className:"clip__icon",children:e.jsx(le,{})})]})]}),xt=h(v)`
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
`,ft=({name:r,imgUrl:i,description:t})=>e.jsxs(gt,{children:[e.jsx("div",{className:"avatar",children:i?e.jsx(ie,{rounded:!0,size:64,src:i,type:"Person"}):r.charAt(0)}),e.jsxs("div",{className:"label",children:[e.jsx("div",{className:"name",children:r}),e.jsx("div",{className:"description",children:t})]})]}),gt=h(v)`
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
`,me=[{node_type:"Speaker",ref_id:"speaker-datalabtech",properties:{name:"DataLabTech",avatar_url:"datalab.png",description:"Data engineer & educator, host of DataLabTechTV",timestamp:"00:00:00",end:"00:25:32"}},{node_type:"HotTake",ref_id:"hottake-graph-ai-hype",properties:{text:'Most "AI graph apps" don’t use real graphs',description:"Many companies claim to use graphs and AI, but they only scratch the surface.",timestamp:"00:05:10",end:"00:05:40"}},{node_type:"HotTake",ref_id:"hottake-text-vs-node-embeddings",properties:{text:"Node embeddings > text embeddings for real context",description:"To leverage graph structure, node embeddings outperform pure text approaches.",timestamp:"00:07:45",end:"00:08:15"}},{node_type:"HotTake",ref_id:"hottake-kuzudb-vs-neo4j",properties:{text:"KuzuDB is the DuckDB of graph databases",description:"Columnar, fast, and analytics-focused—KuzuDB outperforms Neo4j for OLAP tasks.",timestamp:"00:12:30",end:"00:13:00"}},{node_type:"HotTake",ref_id:"hottake-graphrag-metallica",properties:{text:"GraphRAG can recommend Slayer if you like Metallica",description:"Using graph paths and embeddings, GraphRAG builds contextual music recommendations.",timestamp:"00:16:20",end:"00:16:50"}},{node_type:"HotTake",ref_id:"hottake-langchain-llm-orchestration",properties:{text:"LangChain glues LLMs, graphs, and logic together",description:"LangChain helps build complex GraphRAG pipelines by chaining prompts and DB calls.",timestamp:"00:19:40",end:"00:20:10"}}],mt=me.filter(r=>r.node_type==="Speaker"),bt=me.filter(r=>r.node_type!=="Speaker").sort((r,i)=>{var d,n;const t=X(((d=r.properties)==null?void 0:d.timestamp)||"00:00:00"),s=X(((n=i.properties)==null?void 0:n.timestamp)||"00:00:00");return t-s}),yt=()=>{const[r,i]=a.useState({x:0,y:0}),[t,s]=a.useState(!1),[d,n]=a.useState(null),{playerRef:c}=z(o=>o);console.log(d,r),a.useEffect(()=>{const o=m=>{i({x:m.clientX,y:m.clientY})};return window.addEventListener("mousemove",o),()=>window.removeEventListener("mousemove",o)},[]);const g=()=>{s(!t)},x=a.useCallback(o=>{const m=Array.isArray(o)?o[0]:o;c&&c.seekTo(m,"seconds")},[c]),f=o=>{var m,u,y;if((m=o==null?void 0:o.properties)!=null&&m.timestamp&&(u=o.properties)!=null&&u.timestamp&&c){const l=X((y=o.properties)==null?void 0:y.timestamp);x(l)}};return e.jsxs(wt,{className:t?"swapped":"",children:[e.jsxs(jt,{onClick:g,children:[t?null:e.jsx("div",{className:"icon",children:e.jsx(We,{})}),e.jsx("span",{children:"Hot takes"}),t?e.jsx("div",{className:"icon",children:e.jsx(Be,{})}):null]}),t?null:e.jsxs(e.Fragment,{children:[e.jsx(re,{children:mt.map(o=>{var l,j,k;const m=((l=o==null?void 0:o.properties)==null?void 0:l.description)||"",u=((j=o==null?void 0:o.properties)==null?void 0:j.name)||"",y=((k=o==null?void 0:o.properties)==null?void 0:k.avatar_url)||"";return e.jsx("div",{className:"child",children:e.jsx(se,{onClick:()=>f(o),onMouseEnter:()=>n(o.ref_id),onMouseLeave:()=>n(null),children:e.jsx(ft,{description:m,imgUrl:y,name:u})})},o.ref_id)})}),e.jsx(re,{children:bt.map(o=>{var l,j,k,p,b,$;const m=((l=o==null?void 0:o.properties)==null?void 0:l.text)||"",u=((j=o==null?void 0:o.properties)==null?void 0:j.description)||"",y=(k=o==null?void 0:o.properties)!=null&&k.timestamp&&((p=o==null?void 0:o.properties)!=null&&p.end)?`${q(X((b=o==null?void 0:o.properties)==null?void 0:b.timestamp))} - ${q(X(($=o==null?void 0:o.properties)==null?void 0:$.end))}`:void 0;return e.jsx("div",{className:"child",children:e.jsx(se,{onClick:()=>f(o),onMouseEnter:()=>n(o.ref_id),onMouseLeave:()=>n(null),children:e.jsx(ht,{description:u,text:m,timestamps:y})})},o.ref_id)})})]})]})},wt=h.div`
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
`,re=h(v)`
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
`,jt=h.button`
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
`,se=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 10;
`,vt=({onChangeChapter:r})=>{const i=P(n=>n.highlights),{playerRef:t}=z(n=>n),s=a.useCallback(n=>{const c=Array.isArray(n)?n[0]:n;t&&t.seekTo(c,"seconds")},[t]),d=n=>{r(),s(i[n].startTime)};return e.jsx(kt,{direction:"column",children:i.length>0&&e.jsx(St,{children:e.jsx(Ct,{children:i.map((n,c)=>e.jsxs(Tt,{onClick:()=>d(c),children:[e.jsx(_t,{children:n.title}),e.jsxs($t,{children:[Math.floor(n.startTime/60),":",(n.startTime%60).toString().padStart(2,"0")]})]},c))})})})},kt=h(v)({width:"100%",gap:"20px"}),St=h.div`
  width: 100%;
`,Ct=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Tt=h.div`
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
`,_t=h.span`
  font-size: 14px;
  color: ${w.white};
  font-weight: 500;
  flex: 1;
`,$t=h.span`
  font-size: 12px;
  color: ${w.blueTextAccent};
  font-family: monospace;
`,be=a.forwardRef(({active:r,start:i,text:t},s)=>e.jsxs(It,{ref:s,className:J({active:r}),children:[e.jsx(Pt,{children:i}),e.jsx(Et,{children:e.jsx("span",{children:t})})]}));be.displayName="ParagraphComponent";const Q=a.memo(be,(r,i)=>r.active===i.active),It=h(v)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${w.AI_HIGHLIGHT};
  }
`,Pt=h.span`
  background: ${w.lightBlue100};
  color: ${w.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Et=h.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${w.AI_HIGHLIGHT};
  }
`,Nt=({transcriptString:r,isFirst:i})=>{const[t,s]=a.useState(0),[d,n]=a.useState(!1),{playerRef:c}=z(u=>u),g=r.replace(/^["']|["']$/g,""),x=JSON.parse(g),f=a.useRef(null),o=a.useRef(null),m=a.useRef(null);return a.useEffect(()=>{const u=setInterval(()=>{if(c&&s){const y=c.getCurrentTime();s(y)}},100);return()=>clearInterval(u)},[c,s]),a.useEffect(()=>{const u=()=>{n(!0),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{n(!1)},1e3)},y=o.current;return y&&y.addEventListener("scroll",u),()=>{y&&y.removeEventListener("scroll",u)}},[]),a.useEffect(()=>{!d&&f.current&&f.current.scrollIntoView({behavior:"smooth",block:"center"})},[t,d]),e.jsx(Ft,{ref:o,children:e.jsx(e.Fragment,{children:i?e.jsx(e.Fragment,{children:x[0].start>t?e.jsx(Q,{active:!1,start:q(x[0].start),text:x[0].text}):e.jsx(e.Fragment,{children:x.map(u=>{const y=q(u.start),l=u.start<t&&t<u.end;return!i||u.start<=t+5?e.jsx(Q,{ref:l?f:null,active:l,start:y,text:u.text},`${u.start}-${u.end}`):null})})}):e.jsx(e.Fragment,{children:x.map(u=>{const y=q(u.start),l=u.start<t&&t<u.end;return e.jsx(Q,{ref:l?f:null,active:l,start:y,text:u.text},`${u.start}-${u.end}`)})})})})},Ft=h.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Mt=()=>{var k;const r=P(p=>p.clips),i=P(p=>p.setActiveClip),t=P(p=>p.activeClip),s=P(p=>p.chapters),d=P(p=>p.skipAds),{playerRef:n}=z(p=>p),[c,g]=a.useState(0),[x,f]=a.useState(!0),[o,m]=ce(p=>[p.setActiveNode,p.activeNode]),u=Ie(p=>p.simulation),y=a.useCallback(p=>{var b;return((b=p==null?void 0:p.properties)==null?void 0:b.is_ad)==="True"},[]),l=a.useCallback(p=>{if(!s)return null;for(let b=p+1;b<s.length;b+=1)if(!y(s[b]))return s[b];return null},[s,y]),j=a.useCallback(p=>{if(!p)return[0,0];if(p.includes(":")){const b=p.split(":").map(Number);if(b.length===3){const[$,E,T]=b,S=$*3600+E*60+T;return[S,S]}if(b.length===2){const[$,E]=b,T=$*60+E;return[T,T]}}return p.split("-").map(Number)},[]);return a.useEffect(()=>{const p=setInterval(()=>{if(n&&g){const b=n.getCurrentTime();g(b)}},100);return()=>clearInterval(p)},[n,g]),a.useEffect(()=>{c?(()=>{var $,E;if(d&&s){const T=s.findIndex((S,R)=>{var N,A;const[_]=j((N=S==null?void 0:S.properties)==null?void 0:N.timestamp),G=s[R+1],D=G?j((A=G.properties)==null?void 0:A.timestamp)[0]:1/0;return _<=c&&c<D});if(T!==-1){const S=s[T];if(y(S)){const R=l(T);if(R&&n){const[_]=j(($=R.properties)==null?void 0:$.timestamp);n.seekTo(_,"seconds");return}}}}const b=r.find(T=>{var _;const[S,R]=j((_=T==null?void 0:T.properties)==null?void 0:_.timestamp);return S<=c&&c<R});t&&(b==null?void 0:b.ref_id)===(t==null?void 0:t.ref_id)||!b||(f((b==null?void 0:b.ref_id)===((E=r[0])==null?void 0:E.ref_id)),i(b||null))})():(f(!0),i(r[0]))},[c,r,t,i,s,d,l,y,j,n]),a.useEffect(()=>{if(t&&(!m||t.ref_id!==m.ref_id)){const p=u==null?void 0:u.nodes().find(b=>b.ref_id===t.ref_id);typeof(p==null?void 0:p.fx)=="number"&&o(p)}},[t,m,o,u]),e.jsx(Rt,{direction:"row",children:((k=t==null?void 0:t.properties)==null?void 0:k.transcript)&&e.jsx(Nt,{isFirst:x,transcriptString:t.properties.transcript})})},Rt=h(v)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
  @media (max-width: 768px) {
    margin: 0;
  }
`,K="chapters",U="transcript",At=()=>{var g;const r=P(x=>x.selectedEpisode),i=P(x=>x.isFullScreen),t=P(x=>x.skipAds),s=P(x=>x.setSkipAds),d=z(x=>x.isPlaying),[n,c]=a.useState(K);return a.useEffect(()=>{d&&c(U)},[d]),e.jsxs(Bt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(Ht,{className:J({fullScreen:i}),children:e.jsx("div",{id:"sidebar-player-root"})}),e.jsx(v,{className:"heading",children:(g=r==null?void 0:r.properties)==null?void 0:g.episode_title}),e.jsx(zt,{children:e.jsx(He,{control:e.jsx(Fe,{checked:t,onChange:x=>s(x.target.checked),sx:{color:w.white}}),label:"Skip adds",sx:{color:w.white}})}),e.jsxs(Dt,{direction:"row",children:[e.jsx(ne,{className:J({selected:n===K}),onClick:()=>c(K),children:"Chapters"}),e.jsx(ne,{className:J({selected:n===U}),onClick:()=>c(U),children:"Transcript"})]}),e.jsxs(Wt,{children:[n===K&&e.jsx(vt,{onChangeChapter:()=>c(U)}),n===U&&e.jsx(Mt,{})]})]})},zt=h(v)`
  padding: 8px 24px;
  background: ${w.BG1};
  border-radius: 8px;
  margin-bottom: 8px;
`,Wt=h(v)`
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
`,Bt=h(v)(({theme:r})=>({display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[r.breakpoints.up("sm")]:{width:Ne},"@media (max-width: 768px)":{padding:0}})),Ht=h(v)(({theme:r})=>({width:"100%",marginBottom:"20px",[r.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),ne=h(v)`
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
`,Dt=h(v)`
  background: ${w.primaryBlue};
  padding: 12px 24px;
  background: ${w.BG1};
  border-radius: 8px;
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`,Lt=["63a5707b-46a5-4df3-9258-7749aefc7fcd"],Gt=r=>{const i=r.edges.filter(s=>{var d;return(d=s==null?void 0:s.properties)==null?void 0:d.start}).map(s=>({source:s.source,target:s.target,start:s.properties.start}));return r.nodes.filter(s=>r.edges.some(d=>d.source===s.ref_id||d.target===s.ref_id)).map(s=>{const d=i.find(n=>s.ref_id===n.source||s.ref_id===n.target);return{...s,start:(d==null?void 0:d.start)||0}}).filter(s=>s&&s.node_type!=="Clip"&&s.node_type!=="Episode"&&s.node_type!=="Show")},vr=()=>{const r=oe(l=>l.addNewNode),i=P(l=>l.activeClip),t=P(l=>l.fetchEpisodeData),s=P(l=>l.chapters),d=a.useRef(null),n=a.useRef(null),c=a.useRef(null),g=a.useRef(null),[x,f]=a.useState([]),{setSchemas:o}=ae(l=>l),m=we(),{episodeId:u}=je(),y=P(l=>l.isFullScreen);return a.useEffect(()=>{(async()=>{try{const j=await ke();o(j.schemas.filter(k=>!k.is_deleted))}catch(j){console.error("Error fetching schema:",j)}})()},[o]),a.useEffect(()=>{u&&(async()=>{try{t(u||"")}catch(j){m("/"),console.error("Error fetching initial data:",j)}})()},[u,m,t]),a.useEffect(()=>{i&&s&&(async()=>{var j,k,p,b;try{const $=[],E={nodes:((j=c.current)==null?void 0:j.nodes)||[],edges:((k=c.current)==null?void 0:k.edges)||[]},T=i==null?void 0:i.ref_id;if(T){const S=await Se(T,["-Clip","-Episode"],[],"",!0,0,2,50),R=S.nodes.filter(N=>N.node_type==="Claim"),_=S.edges.filter(N=>R.some(A=>A.ref_id===N.source||A.ref_id===N.target));g.current={nodes:[...((p=g.current)==null?void 0:p.nodes)||[],...R],edges:[...((b=g.current)==null?void 0:b.edges)||[],..._]};const D=Gt(S).map(N=>{var V;const A=((V=(s||[]).find(F=>{var M;return N.start&&Z(((M=F==null?void 0:F.properties)==null?void 0:M.timestamp)||"")>=N.start*1e3}))==null?void 0:V.ref_id)||"";return{...N,neighbourHood:A}});E.nodes.push(...D||[]),E.edges.push(...(S==null?void 0:S.edges)||[]),$.push(...D),c.current=E}f($)}catch($){console.error("Error processing clip nodes:",$)}})()},[i,s]),a.useEffect(()=>{const l=j=>{var p;const{playerRef:k}=z.getState();if(n.current!==null){if(j-n.current>2e3){if(c.current&&k){const{nodes:$,edges:E}=c.current,T=k==null?void 0:k.getCurrentTime(),[S,R]=E.reduce(([F,M],C)=>{var H,O;return((H=C==null?void 0:C.properties)==null?void 0:H.start)!==void 0&&((O=C==null?void 0:C.properties)==null?void 0:O.start)<T+1?F.push(C):M.push(C),[F,M]},[[],[]]),[_,G]=$.reduce(([F,M],C)=>(S.some(H=>H.target===C.ref_id||H.source===C.ref_id)?F.push(C):M.push(C),[F,M]),[[],[]]);c.current={nodes:G,edges:R};const[D,N]=(((p=g.current)==null?void 0:p.edges)||[]).reduce(([F,M],C)=>{var H,O;if(_.some(B=>B.ref_id===C.source)){const B=(((H=g.current)==null?void 0:H.nodes)||[]).find(Y=>Y.ref_id===C.target);B&&(F.push(B),M.push(C))}else if(_.some(B=>B.ref_id===C.target)){const B=(((O=g.current)==null?void 0:O.nodes)||[]).find(Y=>Y.ref_id===C.source);B&&(F.push(B),M.push(C))}return[F,M]},[[],[]]),A=[..._,...D],V=[...S,...N];(A.length||V.length)&&r({nodes:A,edges:V})}n.current=j}}else n.current=j;d.current=requestAnimationFrame(l)};return d.current=requestAnimationFrame(l),()=>{d.current&&cancelAnimationFrame(d.current)}},[c,r]),e.jsxs(Vt,{children:[e.jsx(Yt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(v,{children:e.jsx(ve,{})}),e.jsx(At,{})]}),e.jsx(Ut,{children:e.jsxs(v,{basis:"100%",grow:1,shrink:1,children:[e.jsx(Te,{}),Lt.includes(u||"")&&e.jsx(yt,{}),y&&e.jsx(Ot,{id:"floating-player-root"}),e.jsx(Ke,{})]})})]})}),e.jsx(Xt,{children:e.jsx(dt,{chapters:s,markers:x})}),e.jsx(Ce,{})]})},Vt=h.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Ot=h.div`
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
`,Yt=h(v)`
  flex: 1;
  overflow: hidden;
`,Ut=h(v)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`,Xt=h(v)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{vr as MindSet};
