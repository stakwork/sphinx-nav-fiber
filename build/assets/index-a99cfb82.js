import{s as f,g as y,r as c,c as oe,j as e,A as ie,F as b,o as ye,p as ae,q as J,i as we,t as je,H as ve,v as Se,w as ke}from"./index-3953f5c7.js";import{u as I,t as Z,C as Ce}from"./index-20cb65f3.js";import{U as Te}from"./index-e2939f45.js";import{u as ce,a as P,b as _e,c as le,I as Pe,v as U,d as Ie}from"./index-77fd02b9.js";import{R as $e,S as Ee,s as X,M as Ne}from"./index-1e3d4f3d.js";import{F as Me,E as Re,M as Fe,V as Ae,C as ze,a as We}from"./index-f5c0a6ac.js";import"./string-a277709d.js";import"./index-1e29b867.js";import"./three.module-9722a9fc.js";import"./isPlainObject-81d85651.js";import"./TextareaAutosize-f797397e.js";import"./CheckIcon-e323d974.js";import"./index-376aba5e.js";import"./index-94301b19.js";import"./index-dbeba04a.js";import"./ClipLoader-7b76ab2c.js";import"./clsx-943348ee.js";import"./Skeleton-7a24a0d7.js";import"./index-b94ba8e6.js";import"./SoundIcon-d55715d0.js";import"./Stack-81cc35d2.js";import"./FormControlLabel-0f1914bd.js";import"./Typography-52022857.js";import"./createSvgIcon-5fbb377c.js";import"./SourcesTableIcon-cede0655.js";import"./DeleteNodeIcon-2e5b1a42.js";import"./SucessFeedBackIcon-26120d5f.js";const Be=(r,a)=>{let t=0,s=r.length-1;for(;t<=s;){const p=Math.floor((t+s)/2),o=r[p],{start:l,end:x}=o.properties;if(a>=l&&a<=x)return o;a<l?s=p-1:t=p+1}return null},He=({mediaUrl:r})=>{var O;const a=c.useRef(null),[t,s]=c.useState("ready"),[p,o]=c.useState(!1),[l,x]=c.useState(!1),m=I(k=>k.setIsFullScreen),g=I(k=>k.isFullScreen),{setActiveEdge:n}=ce(k=>k),{dataInitial:h}=oe(k=>k),{isPlaying:u,playingTime:d,setIsPlaying:i,setPlayingTime:w,setDuration:j,playingNode:S,volume:A,setHasError:_,resetPlayer:W,isSeeking:B,setIsSeeking:E,setPlayerRef:D,playerRef:$,playbackSpeed:q}=P(k=>k);c.useEffect(()=>()=>W(),[W]),c.useEffect(()=>{S&&!p&&(w(0),j(0),o(!1))},[S,w,j,o,p]),c.useEffect(()=>{B&&$&&($.seekTo(d,"seconds"),E(!1))},[d,B,E,$]);const V=c.useCallback(()=>{i(!u)},[u,i]),N=()=>{_(!0),s("error")},R=c.useCallback(k=>{k.code},[V]);c.useEffect(()=>(window.addEventListener("keydown",R),()=>{window.removeEventListener("keydown",R)}),[R]);const L=c.useMemo(()=>((h==null?void 0:h.links.filter(M=>{var H;return(H=M==null?void 0:M.properties)==null?void 0:H.start}))||[]).slice().sort((M,H)=>{var ee,te;return((ee=M==null?void 0:M.properties)==null?void 0:ee.start)-((te=H==null?void 0:H.properties)==null?void 0:te.start)}),[h]),C=k=>{if(!B){const M=k.playedSeconds,H=Be(L,M);n(H||null)}},T=c.useMemo(()=>{const M=new URL(window.location.href).searchParams.get("start");return M?parseFloat(M):null},[]),v=()=>{s("ready"),$&&T!==null&&!l&&($.seekTo(T,"seconds"),x(!0))},z=c.useCallback(()=>{u||i(!0)},[i,u]),G=c.useCallback(()=>{u&&i(!1)},[i,u]),F=c.useCallback(k=>{!$&&k&&D(k)},[D,$]);return r?e.jsxs(De,{ref:a,tabIndex:0,children:[e.jsx(Le,{isFullScreen:!1,children:e.jsx(ie,{size:200,src:((O=S==null?void 0:S.properties)==null?void 0:O.image_url)||"",type:"clip"})}),e.jsx(Ve,{isFullScreen:g,children:e.jsx($e,{ref:F,height:"100%",onBuffer:()=>s("buffering"),onBufferEnd:()=>s("ready"),onError:N,onPause:G,onPlay:z,onProgress:C,onReady:v,playbackRate:q,playing:u,url:r||"",volume:A,width:"100%"})}),e.jsx(Oe,{onClick:()=>m(!g),children:g?e.jsx(Re,{}):e.jsx(Me,{})}),t==="error"&&e.jsx(Ge,{className:"error-wrapper",children:"Error happened, please try later"})]}):null},De=f(b)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Le=f(b)`
  position: absolute;
  top: ${r=>r.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Ge=f(b)`
  height: 60px;
  padding: 12px 16px;
  color: ${y.primaryRed};
`,Ve=f.div`
  margin: ${r=>(r.isFullScreen,"0")};
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,Oe=f(b)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  color: ${y.white};
  font-size: 32px;
  cursor: pointer;
`,Ye=c.memo(He),Ue=()=>{var o;const r=I(l=>l.selectedEpisode),a=I(l=>l.isFullScreen),t=c.useRef(null),[s,p]=c.useState(!1);return c.useEffect(()=>{t.current||(t.current=document.createElement("div"));const l=t.current,x=document.getElementById(a?"floating-player-root":"sidebar-player-root");return l&&x&&!x.contains(l)&&x.appendChild(l),p(!0),()=>{const m=l==null?void 0:l.parentNode;m&&"id"in m&&typeof m.id=="string"&&["floating-player-root","sidebar-player-root"].includes(m.id)&&m.removeChild(l)}},[a]),!((o=r==null?void 0:r.properties)!=null&&o.media_url)||!s||!t.current?null:ye.createPortal(e.jsx(Ye,{mediaUrl:r.properties.media_url}),t.current)},pe=c.memo(()=>{const r=P(i=>i.isPlaying),a=P(i=>i.setIsPlaying),t=P(i=>i.setVolume),s=P(i=>i.setPlaybackSpeed),p=P(i=>i.playbackSpeed),o=P(i=>i.playerRef),[l,x]=c.useState(!1),m=[.5,1,1.5,2],g=()=>{if(o){const i=o.getCurrentTime()-15;o.seekTo(i,"seconds")}},n=()=>{if(o){const i=o.getCurrentTime()+15;o.seekTo(i,"seconds")}},h=()=>{a(!r)},u=()=>{x(!l),t(l?1:0)},d=()=>{const w=(m.indexOf(p)+1)%m.length,j=m[w];if(s(j),o){const S=o.getInternalPlayer();S&&typeof S.playbackRate<"u"&&(S.playbackRate=j)}};return e.jsxs(Xe,{children:[e.jsx(Qe,{onClick:u,children:l?e.jsx(Fe,{}):e.jsx(Ae,{})}),e.jsx(Ke,{onClick:g,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(qe,{"data-testid":"play-pause-button",onClick:h,size:"small",children:r?e.jsx(_e,{"data-testid":"pause-icon"}):e.jsx(le,{"data-testid":"play-icon"})}),e.jsx(Je,{onClick:n,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(Ze,{onClick:d,children:[p,"x"]})]})});pe.displayName="Controls";const Xe=f(b).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,qe=f(Pe)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Ke=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Je=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Qe=f.div`
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
`,Ze=f.button`
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
`,de=c.memo(({left:r,width:a,title:t})=>e.jsx(et,{style:{left:`${r}%`,width:`calc(${a}%)`},children:e.jsx("div",{className:"title",children:t})}));de.displayName="Chapter";const et=f.div`
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
`,ue=c.memo(({chapters:r,duration:a})=>a?e.jsx(e.Fragment,{children:r.map((t,s)=>{var g,n,h,u,d;const p=(g=t==null?void 0:t.properties)!=null&&g.timestamp?Z(t.properties.timestamp)/1e3:0,o=(h=(n=r[s+1])==null?void 0:n.properties)!=null&&h.timestamp?Z((u=r[s+1].properties)==null?void 0:u.timestamp)/1e3:a,l=Math.floor(p/a*100),m=Math.floor(o/a*100)-l;return e.jsx(de,{left:l,title:((d=t==null?void 0:t.properties)==null?void 0:d.name)||(t==null?void 0:t.name)||"",width:m},`${t.ref_id}_${s}`)})}):null);ue.displayName="Chapters";const fe=c.memo(({type:r,left:a,img:t})=>{var m,g;const s=ae(n=>n.normalizedSchemasByType),p=(m=s[r])==null?void 0:m.primary_color,o=(g=s[r])==null?void 0:g.icon,l=o?`/svg-icons/${o}.svg`:"",x={iconStart:t||l,color:p??y.THING};return e.jsx(rt,{style:{left:`${a}%`},children:e.jsx(he,{...x,label:r})})});fe.displayName="Marker";const he=c.memo(({iconStart:r,color:a,label:t})=>e.jsx(tt,{color:a,children:r&&e.jsx("img",{alt:t,className:"badge__img",onError:console.log,src:r})}));he.displayName="Badge";const tt=f(b).attrs({direction:"row"})`
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
`,rt=f.div`
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
`,xe=c.memo(({markers:r,duration:a})=>e.jsx(e.Fragment,{children:r.map((t,s)=>{var x;const p=Math.floor(((t==null?void 0:t.start)||0)/a*100),o=(t==null?void 0:t.node_type)||"",l=((x=t==null?void 0:t.properties)==null?void 0:x.image_url)||"";return e.jsx(fe,{img:l,left:p,type:o},`${t.ref_id}_${s}`)})}));xe.displayName="Markers";const st=({duration:r,markers:a,handleProgressChange:t,playingTIme:s,chapters:p})=>{const o=10/r*100;return e.jsxs(nt,{children:[e.jsx(it,{max:r,onChange:t,value:s,width:o}),p&&e.jsx(me,{children:e.jsx(ue,{chapters:p,duration:r})}),e.jsx(ot,{children:e.jsx(xe,{duration:r,markers:a})})]})},me=f(b)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,nt=f(b)`
  position: relative;
  flex: 1 1 100%;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    ${me} {
      display: block;
    }
  }
`,ot=f(b)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,it=f(Ee)`
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
`,at=({markers:r,chapters:a})=>{const{playingNode:t,playerRef:s}=P(g=>g),[p,o]=c.useState(0),l=t,x=c.useCallback((g,n)=>{const h=Array.isArray(n)?n[0]:n;s&&s.seekTo(h,"seconds")},[s]);c.useEffect(()=>{const g=setInterval(()=>{if(s&&o){const n=s.getCurrentTime();o(n)}},500);return()=>clearInterval(g)},[s,o]);const m=(s==null?void 0:s.getDuration())||0;return l?e.jsxs(ct,{children:[e.jsx(pe,{}),e.jsx(st,{chapters:a,duration:m,handleProgressChange:x,markers:r,playingTIme:p})]}):null},ct=f(b).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${y.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,lt=({text:r,timestamps:a,description:t})=>e.jsxs(pt,{children:[e.jsx("div",{className:"title",children:r}),e.jsx("div",{className:"description",children:t}),e.jsxs("div",{className:"clip",children:[a&&e.jsx("div",{className:"clip__timestamps",children:a}),e.jsx("div",{className:"clip__icon",children:e.jsx(le,{})})]})]}),pt=f(b)`
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
`,dt=({name:r,imgUrl:a,description:t})=>e.jsxs(ut,{children:[e.jsx("div",{className:"avatar",children:a?e.jsx(ie,{rounded:!0,size:64,src:a,type:"Person"}):r.charAt(0)}),e.jsxs("div",{className:"label",children:[e.jsx("div",{className:"name",children:r}),e.jsx("div",{className:"description",children:t})]})]}),ut=f(b)`
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
`,ge=[{node_type:"Speaker",ref_id:"speaker-datalabtech",properties:{name:"DataLabTech",avatar_url:"datalab.png",description:"Data engineer & educator, host of DataLabTechTV",timestamp:"00:00:00",end:"00:25:32"}},{node_type:"HotTake",ref_id:"hottake-graph-ai-hype",properties:{text:'Most "AI graph apps" don’t use real graphs',description:"Many companies claim to use graphs and AI, but they only scratch the surface.",timestamp:"00:05:10",end:"00:05:40"}},{node_type:"HotTake",ref_id:"hottake-text-vs-node-embeddings",properties:{text:"Node embeddings > text embeddings for real context",description:"To leverage graph structure, node embeddings outperform pure text approaches.",timestamp:"00:07:45",end:"00:08:15"}},{node_type:"HotTake",ref_id:"hottake-kuzudb-vs-neo4j",properties:{text:"KuzuDB is the DuckDB of graph databases",description:"Columnar, fast, and analytics-focused—KuzuDB outperforms Neo4j for OLAP tasks.",timestamp:"00:12:30",end:"00:13:00"}},{node_type:"HotTake",ref_id:"hottake-graphrag-metallica",properties:{text:"GraphRAG can recommend Slayer if you like Metallica",description:"Using graph paths and embeddings, GraphRAG builds contextual music recommendations.",timestamp:"00:16:20",end:"00:16:50"}},{node_type:"HotTake",ref_id:"hottake-langchain-llm-orchestration",properties:{text:"LangChain glues LLMs, graphs, and logic together",description:"LangChain helps build complex GraphRAG pipelines by chaining prompts and DB calls.",timestamp:"00:19:40",end:"00:20:10"}}],ft=ge.filter(r=>r.node_type==="Speaker"),ht=ge.filter(r=>r.node_type!=="Speaker").sort((r,a)=>{var p,o;const t=U(((p=r.properties)==null?void 0:p.timestamp)||"00:00:00"),s=U(((o=a.properties)==null?void 0:o.timestamp)||"00:00:00");return t-s}),xt=()=>{const[r,a]=c.useState({x:0,y:0}),[t,s]=c.useState(!1),[p,o]=c.useState(null),{playerRef:l}=P(n=>n);console.log(p,r),c.useEffect(()=>{const n=h=>{a({x:h.clientX,y:h.clientY})};return window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)},[]);const x=()=>{s(!t)},m=c.useCallback(n=>{const h=Array.isArray(n)?n[0]:n;l&&l.seekTo(h,"seconds")},[l]),g=n=>{var h,u,d;if((h=n==null?void 0:n.properties)!=null&&h.timestamp&&(u=n.properties)!=null&&u.timestamp&&l){const i=U((d=n.properties)==null?void 0:d.timestamp);m(i)}};return e.jsxs(mt,{className:t?"swapped":"",children:[e.jsxs(gt,{onClick:x,children:[t?null:e.jsx("div",{className:"icon",children:e.jsx(ze,{})}),e.jsx("span",{children:"Hot takes"}),t?e.jsx("div",{className:"icon",children:e.jsx(We,{})}):null]}),t?null:e.jsxs(e.Fragment,{children:[e.jsx(re,{children:ft.map(n=>{var i,w,j;const h=((i=n==null?void 0:n.properties)==null?void 0:i.description)||"",u=((w=n==null?void 0:n.properties)==null?void 0:w.name)||"",d=((j=n==null?void 0:n.properties)==null?void 0:j.avatar_url)||"";return e.jsx("div",{className:"child",children:e.jsx(se,{onClick:()=>g(n),onMouseEnter:()=>o(n.ref_id),onMouseLeave:()=>o(null),children:e.jsx(dt,{description:h,imgUrl:d,name:u})})},n.ref_id)})}),e.jsx(re,{children:ht.map(n=>{var i,w,j,S,A,_;const h=((i=n==null?void 0:n.properties)==null?void 0:i.text)||"",u=((w=n==null?void 0:n.properties)==null?void 0:w.description)||"",d=(j=n==null?void 0:n.properties)!=null&&j.timestamp&&((S=n==null?void 0:n.properties)!=null&&S.end)?`${X(U((A=n==null?void 0:n.properties)==null?void 0:A.timestamp))} - ${X(U((_=n==null?void 0:n.properties)==null?void 0:_.end))}`:void 0;return e.jsx("div",{className:"child",children:e.jsx(se,{onClick:()=>g(n),onMouseEnter:()=>o(n.ref_id),onMouseLeave:()=>o(null),children:e.jsx(lt,{description:u,text:h,timestamps:d})})},n.ref_id)})})]})]})},mt=f.div`
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
`,re=f(b)`
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
`,gt=f.button`
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
`,se=f.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 10;
`,bt=({onChangeChapter:r})=>{const a=I(o=>o.highlights),{playerRef:t}=P(o=>o),s=c.useCallback(o=>{const l=Array.isArray(o)?o[0]:o;t&&t.seekTo(l,"seconds")},[t]),p=o=>{r(),s(a[o].startTime)};return e.jsx(yt,{direction:"column",children:a.length>0&&e.jsx(wt,{children:e.jsx(jt,{children:a.map((o,l)=>e.jsxs(vt,{onClick:()=>p(l),children:[e.jsx(St,{children:o.title}),e.jsxs(kt,{children:[Math.floor(o.startTime/60),":",(o.startTime%60).toString().padStart(2,"0")]})]},l))})})})},yt=f(b)({width:"100%",gap:"20px"}),wt=f.div`
  width: 100%;
`,jt=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,vt=f.div`
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
`,St=f.span`
  font-size: 14px;
  color: ${y.white};
  font-weight: 500;
  flex: 1;
`,kt=f.span`
  font-size: 12px;
  color: ${y.blueTextAccent};
  font-family: monospace;
`,be=c.forwardRef(({active:r,start:a,text:t},s)=>e.jsxs(Ct,{ref:s,className:J({active:r}),children:[e.jsx(Tt,{children:a}),e.jsx(_t,{children:e.jsx("span",{children:t})})]}));be.displayName="ParagraphComponent";const Q=c.memo(be,(r,a)=>r.active===a.active),Ct=f(b)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${y.AI_HIGHLIGHT};
  }
`,Tt=f.span`
  background: ${y.lightBlue100};
  color: ${y.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,_t=f.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${y.AI_HIGHLIGHT};
  }
`,Pt=({transcriptString:r,isFirst:a})=>{const[t,s]=c.useState(0),[p,o]=c.useState(!1),{playerRef:l}=P(u=>u),x=r.replace(/^["']|["']$/g,""),m=JSON.parse(x),g=c.useRef(null),n=c.useRef(null),h=c.useRef(null);return c.useEffect(()=>{const u=setInterval(()=>{if(l&&s){const d=l.getCurrentTime();s(d)}},100);return()=>clearInterval(u)},[l,s]),c.useEffect(()=>{const u=()=>{o(!0),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{o(!1)},1e3)},d=n.current;return d&&d.addEventListener("scroll",u),()=>{d&&d.removeEventListener("scroll",u)}},[]),c.useEffect(()=>{!p&&g.current&&g.current.scrollIntoView({behavior:"smooth",block:"center"})},[t,p]),e.jsx(It,{ref:n,children:e.jsx(e.Fragment,{children:a?e.jsx(e.Fragment,{children:m[0].start>t?e.jsx(Q,{active:!1,start:X(m[0].start),text:m[0].text}):e.jsx(e.Fragment,{children:m.map(u=>{const d=X(u.start),i=u.start<t&&t<u.end;return!a||u.start<=t+5?e.jsx(Q,{ref:i?g:null,active:i,start:d,text:u.text},`${u.start}-${u.end}`):null})})}):e.jsx(e.Fragment,{children:m.map(u=>{const d=X(u.start),i=u.start<t&&t<u.end;return e.jsx(Q,{ref:i?g:null,active:i,start:d,text:u.text},`${u.start}-${u.end}`)})})})})},It=f.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,$t=()=>{var u;const r=I(d=>d.clips),a=I(d=>d.setActiveClip),t=I(d=>d.activeClip),{playerRef:s}=P(d=>d),[p,o]=c.useState(0),[l,x]=c.useState(!0),[m,g]=ce(d=>[d.setActiveNode,d.activeNode]),n=Ie(d=>d.simulation);c.useEffect(()=>{const d=setInterval(()=>{if(s&&o){const i=s.getCurrentTime();o(i)}},100);return()=>clearInterval(d)},[s,o]),c.useEffect(()=>{p?(()=>{var w;const i=r.find(j=>{var _;const[S,A]=h((_=j==null?void 0:j.properties)==null?void 0:_.timestamp);return S<=p&&p<A});t&&(i==null?void 0:i.ref_id)===(t==null?void 0:t.ref_id)||!i||(x((i==null?void 0:i.ref_id)===((w=r[0])==null?void 0:w.ref_id)),a(i||null))})():(x(!0),a(r[0]))},[p,r,t,a]),c.useEffect(()=>{if(t&&(!g||t.ref_id!==g.ref_id)){const d=n==null?void 0:n.nodes().find(i=>i.ref_id===t.ref_id);typeof(d==null?void 0:d.fx)=="number"&&m(d)}},[t,g,m,n]);const h=d=>d?d.split("-").map(Number):[0,0];return e.jsx(Et,{direction:"row",children:((u=t==null?void 0:t.properties)==null?void 0:u.transcript)&&e.jsx(Pt,{isFirst:l,transcriptString:t.properties.transcript})})},Et=f(b)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
  @media (max-width: 768px) {
    margin: 0;
  }
`,K="chapters",Y="transcript",Nt=()=>{var o;const r=I(l=>l.selectedEpisode),a=I(l=>l.isFullScreen),t=P(l=>l.isPlaying),[s,p]=c.useState(K);return c.useEffect(()=>{t&&p(Y)},[t]),e.jsxs(Rt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(Ft,{className:J({fullScreen:a}),children:e.jsx("div",{id:"sidebar-player-root"})}),e.jsx(b,{className:"heading",children:(o=r==null?void 0:r.properties)==null?void 0:o.episode_title}),e.jsxs(At,{direction:"row",children:[e.jsx(ne,{className:J({selected:s===K}),onClick:()=>p(K),children:"Chapters"}),e.jsx(ne,{className:J({selected:s===Y}),onClick:()=>p(Y),children:"Transcript"})]}),e.jsxs(Mt,{children:[s===K&&e.jsx(bt,{onChangeChapter:()=>p(Y)}),s===Y&&e.jsx($t,{})]})]})},Mt=f(b)`
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
`,Rt=f(b)(({theme:r})=>({display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[r.breakpoints.up("sm")]:{width:Ne},"@media (max-width: 768px)":{padding:0}})),Ft=f(b)(({theme:r})=>({width:"100%",marginBottom:"20px",[r.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),ne=f(b)`
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
`,At=f(b)`
  background: ${y.primaryBlue};
  padding: 12px 24px;
  background: ${y.BG1};
  border-radius: 8px;
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`,zt=["63a5707b-46a5-4df3-9258-7749aefc7fcd"],Wt=r=>{const a=r.edges.filter(s=>{var p;return(p=s==null?void 0:s.properties)==null?void 0:p.start}).map(s=>({source:s.source,target:s.target,start:s.properties.start}));return r.nodes.filter(s=>r.edges.some(p=>p.source===s.ref_id||p.target===s.ref_id)).map(s=>{const p=a.find(o=>s.ref_id===o.source||s.ref_id===o.target);return{...s,start:(p==null?void 0:p.start)||0}}).filter(s=>s&&s.node_type!=="Clip"&&s.node_type!=="Episode"&&s.node_type!=="Show")},gr=()=>{const r=oe(i=>i.addNewNode),a=I(i=>i.activeClip),t=I(i=>i.fetchEpisodeData),s=I(i=>i.chapters),p=c.useRef(null),o=c.useRef(null),l=c.useRef(null),x=c.useRef(null),[m,g]=c.useState([]),{setSchemas:n}=ae(i=>i),h=we(),{episodeId:u}=je(),d=I(i=>i.isFullScreen);return c.useEffect(()=>{(async()=>{try{const w=await Se();n(w.schemas.filter(j=>!j.is_deleted))}catch(w){console.error("Error fetching schema:",w)}})()},[n]),c.useEffect(()=>{u&&(async()=>{try{t(u||"")}catch(w){h("/"),console.error("Error fetching initial data:",w)}})()},[u,h,t]),c.useEffect(()=>{a&&s&&(async()=>{var w,j,S,A;try{const _=[],W={nodes:((w=l.current)==null?void 0:w.nodes)||[],edges:((j=l.current)==null?void 0:j.edges)||[]},B=a==null?void 0:a.ref_id;if(B){const E=await ke(B,["-Clip","-Episode"],[],"",!0,0,2,50),D=E.nodes.filter(N=>N.node_type==="Claim"),$=E.edges.filter(N=>D.some(R=>R.ref_id===N.source||R.ref_id===N.target));x.current={nodes:[...((S=x.current)==null?void 0:S.nodes)||[],...D],edges:[...((A=x.current)==null?void 0:A.edges)||[],...$]};const V=Wt(E).map(N=>{var L;const R=((L=(s||[]).find(C=>{var T;return N.start&&Z(((T=C==null?void 0:C.properties)==null?void 0:T.timestamp)||"")>=N.start*1e3}))==null?void 0:L.ref_id)||"";return{...N,neighbourHood:R}});W.nodes.push(...V||[]),W.edges.push(...(E==null?void 0:E.edges)||[]),_.push(...V),l.current=W}g(_)}catch(_){console.error("Error processing clip nodes:",_)}})()},[a,s]),c.useEffect(()=>{const i=w=>{var S;const{playerRef:j}=P.getState();if(o.current!==null){if(w-o.current>2e3){if(l.current&&j){const{nodes:_,edges:W}=l.current,B=j==null?void 0:j.getCurrentTime(),[E,D]=W.reduce(([C,T],v)=>{var z,G;return((z=v==null?void 0:v.properties)==null?void 0:z.start)!==void 0&&((G=v==null?void 0:v.properties)==null?void 0:G.start)<B+1?C.push(v):T.push(v),[C,T]},[[],[]]),[$,q]=_.reduce(([C,T],v)=>(E.some(z=>z.target===v.ref_id||z.source===v.ref_id)?C.push(v):T.push(v),[C,T]),[[],[]]);l.current={nodes:q,edges:D};const[V,N]=(((S=x.current)==null?void 0:S.edges)||[]).reduce(([C,T],v)=>{var z,G;if($.some(F=>F.ref_id===v.source)){const F=(((z=x.current)==null?void 0:z.nodes)||[]).find(O=>O.ref_id===v.target);F&&(C.push(F),T.push(v))}else if($.some(F=>F.ref_id===v.target)){const F=(((G=x.current)==null?void 0:G.nodes)||[]).find(O=>O.ref_id===v.source);F&&(C.push(F),T.push(v))}return[C,T]},[[],[]]),R=[...$,...V],L=[...E,...N];(R.length||L.length)&&r({nodes:R,edges:L})}o.current=w}}else o.current=w;p.current=requestAnimationFrame(i)};return p.current=requestAnimationFrame(i),()=>{p.current&&cancelAnimationFrame(p.current)}},[l,r]),e.jsxs(Bt,{children:[e.jsx(Dt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(b,{children:e.jsx(ve,{})}),e.jsx(Nt,{})]}),e.jsx(Lt,{children:e.jsxs(b,{basis:"100%",grow:1,shrink:1,children:[e.jsx(Te,{}),zt.includes(u||"")&&e.jsx(xt,{}),d&&e.jsx(Ht,{id:"floating-player-root"}),e.jsx(Ue,{})]})})]})}),e.jsx(Gt,{children:e.jsx(at,{chapters:s,markers:m})}),e.jsx(Ce,{})]})},Bt=f.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Ht=f.div`
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
  justify-content: center;
  align-items: center;
`,Dt=f(b)`
  flex: 1;
  overflow: hidden;
`,Lt=f(b)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`,Gt=f(b)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{gr as MindSet};
