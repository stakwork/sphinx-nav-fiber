import{r as p,j as e,s as h,g as b,F as g,o as se,A as oe,c as ne,p as K,i as ge,q as be,H as ye,t as we,v as je}from"./index-a6495643.js";import{t as J,u as H,C as ve}from"./index-a32f4125.js";import{U as ke}from"./index-69e4fc46.js";import{u as I,a as Se,b as ie,I as Ce,v as O,c as ae,d as Te}from"./index-09ee6175.js";import{M as _e,V as Pe,C as $e,a as Ie}from"./index-d13a8c86.js";import{S as Ne,s as Y,R as Me,M as Re}from"./index-c53609e8.js";import"./string-a277709d.js";import"./index-38cf33a0.js";import"./three.module-9722a9fc.js";import"./isPlainObject-71e7286f.js";import"./TextareaAutosize-aabdb1f7.js";import"./CheckIcon-9c46d108.js";import"./index-73d6b62b.js";import"./index-7fdf2736.js";import"./index-2215f5ee.js";import"./ClipLoader-c7022165.js";import"./clsx-72b6a77f.js";import"./SourcesTableIcon-eacce9e7.js";import"./DeleteNodeIcon-11258d39.js";import"./SoundIcon-76a6cf9d.js";import"./SucessFeedBackIcon-e011ba0d.js";import"./Skeleton-4a6d7ac4.js";import"./index-7b28a756.js";import"./Stack-7710fe48.js";import"./FormControlLabel-7c02d0c7.js";import"./Typography-1fb5e588.js";import"./createSvgIcon-6a9ce21c.js";const ce=p.memo(()=>{const r=I(c=>c.isPlaying),a=I(c=>c.setIsPlaying),t=I(c=>c.setVolume),o=I(c=>c.setPlaybackSpeed),l=I(c=>c.playbackSpeed),n=I(c=>c.playerRef),[u,m]=p.useState(!1),w=[.5,1,1.5,2],x=()=>{if(n){const c=n.getCurrentTime()-15;n.seekTo(c,"seconds")}},s=()=>{if(n){const c=n.getCurrentTime()+15;n.seekTo(c,"seconds")}},f=()=>{a(!r)},d=()=>{m(!u),t(u?1:0)},i=()=>{const y=(w.indexOf(l)+1)%w.length,v=w[y];if(o(v),n){const T=n.getInternalPlayer();T&&typeof T.playbackRate<"u"&&(T.playbackRate=v)}};return e.jsxs(Ee,{children:[e.jsx(He,{onClick:d,children:u?e.jsx(_e,{}):e.jsx(Pe,{})}),e.jsx(ze,{onClick:x,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(Ae,{"data-testid":"play-pause-button",onClick:f,size:"small",children:r?e.jsx(Se,{"data-testid":"pause-icon"}):e.jsx(ie,{"data-testid":"play-icon"})}),e.jsx(We,{onClick:s,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(Fe,{onClick:i,children:[l,"x"]})]})});ce.displayName="Controls";const Ee=h(g).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${b.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${b.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`,Ae=h(Ce)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,ze=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,We=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,He=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${b.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${b.DROPDOWN_BG};
  }
`,Fe=h.button`
  margin-top: 4px;
  background: ${b.BG1};
  color: ${b.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,pe=p.memo(({left:r,width:a,title:t})=>e.jsx(Be,{style:{left:`${r}%`,width:`calc(${a}%)`},children:e.jsx("div",{className:"title",children:t})}));pe.displayName="Chapter";const Be=h.div`
  position: absolute;
  top: -3px;
  height: 100%;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  & + & {
    border-left: 0.1px solid ${b.white};
  }

  .title {
    position: absolute;
    bottom: calc(100% + 16px);
    display: none;
    color: ${b.white};
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
`,le=p.memo(({chapters:r,duration:a})=>a?e.jsx(e.Fragment,{children:r.map((t,o)=>{var x,s,f,d,i;const l=(x=t==null?void 0:t.properties)!=null&&x.timestamp?J(t.properties.timestamp)/1e3:0,n=(f=(s=r[o+1])==null?void 0:s.properties)!=null&&f.timestamp?J((d=r[o+1].properties)==null?void 0:d.timestamp)/1e3:a,u=Math.floor(l/a*100),w=Math.floor(n/a*100)-u;return e.jsx(pe,{left:u,title:((i=t==null?void 0:t.properties)==null?void 0:i.name)||(t==null?void 0:t.name)||"",width:w},`${t.ref_id}_${o}`)})}):null);le.displayName="Chapters";const de=p.memo(({type:r,left:a,img:t})=>{var w,x;const o=se(s=>s.normalizedSchemasByType),l=(w=o[r])==null?void 0:w.primary_color,n=(x=o[r])==null?void 0:x.icon,u=n?`/svg-icons/${n}.svg`:"",m={iconStart:t||u,color:l??b.THING};return e.jsx(Le,{style:{left:`${a}%`},children:e.jsx(ue,{...m,label:r})})});de.displayName="Marker";const ue=p.memo(({iconStart:r,color:a,label:t})=>e.jsx(De,{color:a,children:r&&e.jsx("img",{alt:t,className:"badge__img",onError:console.log,src:r})}));ue.displayName="Badge";const De=h(g).attrs({direction:"row"})`
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
`,Le=h.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${b.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,he=p.memo(({markers:r,duration:a})=>e.jsx(e.Fragment,{children:r.map((t,o)=>{var m;const l=Math.floor(((t==null?void 0:t.start)||0)/a*100),n=(t==null?void 0:t.node_type)||"",u=((m=t==null?void 0:t.properties)==null?void 0:m.image_url)||"";return e.jsx(de,{img:u,left:l,type:n},`${t.ref_id}_${o}`)})}));he.displayName="Markers";const Ge=({duration:r,markers:a,handleProgressChange:t,playingTIme:o,chapters:l})=>{const n=10/r*100;return e.jsxs(Ve,{children:[e.jsx(Ye,{max:r,onChange:t,value:o,width:n}),l&&e.jsx(xe,{children:e.jsx(le,{chapters:l,duration:r})}),e.jsx(Oe,{children:e.jsx(he,{duration:r,markers:a})})]})},xe=h(g)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,Ve=h(g)`
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
`,Oe=h(g)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,Ye=h(Ne)`
  && {
    z-index: 20;
    color: ${b.white};
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
      background-color: ${b.primaryBlue};
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
`,Ue=({markers:r,chapters:a})=>{const{playingNode:t,playerRef:o}=I(x=>x),[l,n]=p.useState(0),u=t,m=p.useCallback((x,s)=>{const f=Array.isArray(s)?s[0]:s;o&&o.seekTo(f,"seconds")},[o]);p.useEffect(()=>{const x=setInterval(()=>{if(o&&n){const s=o.getCurrentTime();n(s)}},500);return()=>clearInterval(x)},[o,n]);const w=(o==null?void 0:o.getDuration())||0;return u?e.jsxs(Xe,{children:[e.jsx(ce,{}),e.jsx(Ge,{chapters:a,duration:w,handleProgressChange:m,markers:r,playingTIme:l})]}):null},Xe=h(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${b.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,qe=({text:r,timestamps:a,description:t})=>e.jsxs(Ke,{children:[e.jsx("div",{className:"title",children:r}),e.jsx("div",{className:"description",children:t}),e.jsxs("div",{className:"clip",children:[a&&e.jsx("div",{className:"clip__timestamps",children:a}),e.jsx("div",{className:"clip__icon",children:e.jsx(ie,{})})]})]}),Ke=h(g)`
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
`,Je=({name:r,imgUrl:a,description:t})=>e.jsxs(Qe,{children:[e.jsx("div",{className:"avatar",children:a?e.jsx(oe,{rounded:!0,size:64,src:a,type:"Person"}):r.charAt(0)}),e.jsxs("div",{className:"label",children:[e.jsx("div",{className:"name",children:r}),e.jsx("div",{className:"description",children:t})]})]}),Qe=h(g)`
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
`,fe=[{node_type:"Speaker",ref_id:"speaker-datalabtech",properties:{name:"DataLabTech",avatar_url:"datalab.png",description:"Data engineer & educator, host of DataLabTechTV",timestamp:"00:00:00",end:"00:25:32"}},{node_type:"HotTake",ref_id:"hottake-graph-ai-hype",properties:{text:'Most "AI graph apps" don’t use real graphs',description:"Many companies claim to use graphs and AI, but they only scratch the surface.",timestamp:"00:05:10",end:"00:05:40"}},{node_type:"HotTake",ref_id:"hottake-text-vs-node-embeddings",properties:{text:"Node embeddings > text embeddings for real context",description:"To leverage graph structure, node embeddings outperform pure text approaches.",timestamp:"00:07:45",end:"00:08:15"}},{node_type:"HotTake",ref_id:"hottake-kuzudb-vs-neo4j",properties:{text:"KuzuDB is the DuckDB of graph databases",description:"Columnar, fast, and analytics-focused—KuzuDB outperforms Neo4j for OLAP tasks.",timestamp:"00:12:30",end:"00:13:00"}},{node_type:"HotTake",ref_id:"hottake-graphrag-metallica",properties:{text:"GraphRAG can recommend Slayer if you like Metallica",description:"Using graph paths and embeddings, GraphRAG builds contextual music recommendations.",timestamp:"00:16:20",end:"00:16:50"}},{node_type:"HotTake",ref_id:"hottake-langchain-llm-orchestration",properties:{text:"LangChain glues LLMs, graphs, and logic together",description:"LangChain helps build complex GraphRAG pipelines by chaining prompts and DB calls.",timestamp:"00:19:40",end:"00:20:10"}}],Ze=fe.filter(r=>r.node_type==="Speaker"),et=fe.filter(r=>r.node_type!=="Speaker").sort((r,a)=>{var l,n;const t=O(((l=r.properties)==null?void 0:l.timestamp)||"00:00:00"),o=O(((n=a.properties)==null?void 0:n.timestamp)||"00:00:00");return t-o}),tt=()=>{const[r,a]=p.useState({x:0,y:0}),[t,o]=p.useState(!1),[l,n]=p.useState(null),{playerRef:u}=I(s=>s);console.log(l,r),p.useEffect(()=>{const s=f=>{a({x:f.clientX,y:f.clientY})};return window.addEventListener("mousemove",s),()=>window.removeEventListener("mousemove",s)},[]);const m=()=>{o(!t)},w=p.useCallback(s=>{const f=Array.isArray(s)?s[0]:s;u&&u.seekTo(f,"seconds")},[u]),x=s=>{var f,d,i;if((f=s==null?void 0:s.properties)!=null&&f.timestamp&&(d=s.properties)!=null&&d.timestamp&&u){const c=O((i=s.properties)==null?void 0:i.timestamp);w(c)}};return e.jsxs(rt,{className:t?"swapped":"",children:[e.jsxs(st,{onClick:m,children:[t?null:e.jsx("div",{className:"icon",children:e.jsx($e,{})}),e.jsx("span",{children:"Hot takes"}),t?e.jsx("div",{className:"icon",children:e.jsx(Ie,{})}):null]}),t?null:e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:Ze.map(s=>{var c,y,v;const f=((c=s==null?void 0:s.properties)==null?void 0:c.description)||"",d=((y=s==null?void 0:s.properties)==null?void 0:y.name)||"",i=((v=s==null?void 0:s.properties)==null?void 0:v.avatar_url)||"";return e.jsx("div",{className:"child",children:e.jsx(te,{onClick:()=>x(s),onMouseEnter:()=>n(s.ref_id),onMouseLeave:()=>n(null),children:e.jsx(Je,{description:f,imgUrl:i,name:d})})},s.ref_id)})}),e.jsx(ee,{children:et.map(s=>{var c,y,v,T,_,C;const f=((c=s==null?void 0:s.properties)==null?void 0:c.text)||"",d=((y=s==null?void 0:s.properties)==null?void 0:y.description)||"",i=(v=s==null?void 0:s.properties)!=null&&v.timestamp&&((T=s==null?void 0:s.properties)!=null&&T.end)?`${Y(O((_=s==null?void 0:s.properties)==null?void 0:_.timestamp))} - ${Y(O((C=s==null?void 0:s.properties)==null?void 0:C.end))}`:void 0;return e.jsx("div",{className:"child",children:e.jsx(te,{onClick:()=>x(s),onMouseEnter:()=>n(s.ref_id),onMouseLeave:()=>n(null),children:e.jsx(qe,{description:d,text:f,timestamps:i})})},s.ref_id)})})]})]})},rt=h.div`
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
`,ee=h(g)`
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
`,st=h.button`
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
`,te=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 10;
`,ot=(r,a)=>{let t=0,o=r.length-1;for(;t<=o;){const l=Math.floor((t+o)/2),n=r[l],{start:u,end:m}=n.properties;if(a>=u&&a<=m)return n;a<u?o=l-1:t=l+1}return null},nt=({mediaUrl:r})=>{var R;const a=p.useRef(null),[t,o]=p.useState("ready"),[l,n]=p.useState(!1),[u,m]=p.useState(!1),{setActiveEdge:w}=ae(k=>k),{dataInitial:x}=ne(k=>k),{isPlaying:s,playingTime:f,setIsPlaying:d,setPlayingTime:i,setDuration:c,playingNode:y,volume:v,setHasError:T,resetPlayer:_,isSeeking:C,setIsSeeking:F,setPlayerRef:N,playerRef:M,playbackSpeed:B}=I(k=>k);p.useEffect(()=>()=>_(),[_]),p.useEffect(()=>{y&&!l&&(i(0),c(0),n(!1))},[y,i,c,n,l]),p.useEffect(()=>{C&&M&&(M.seekTo(f,"seconds"),F(!1))},[f,C,F,M]);const U=p.useCallback(()=>{d(!s)},[s,d]),G=()=>{T(!0),o("error")},P=p.useCallback(k=>{k.code},[U]);p.useEffect(()=>(window.addEventListener("keydown",P),()=>{window.removeEventListener("keydown",P)}),[P]);const z=p.useMemo(()=>((x==null?void 0:x.links.filter(E=>{var W;return(W=E==null?void 0:E.properties)==null?void 0:W.start}))||[]).slice().sort((E,W)=>{var Q,Z;return((Q=E==null?void 0:E.properties)==null?void 0:Q.start)-((Z=W==null?void 0:W.properties)==null?void 0:Z.start)}),[x]),D=k=>{if(!C){const E=k.playedSeconds,W=ot(z,E);w(W||null)}},S=p.useMemo(()=>{const E=new URL(window.location.href).searchParams.get("start");return E?parseFloat(E):null},[]),$=()=>{o("ready"),M&&S!==null&&!u&&(M.seekTo(S,"seconds"),m(!0))},j=p.useCallback(()=>{s||d(!0)},[d,s]),A=p.useCallback(()=>{s&&d(!1)},[d,s]),L=p.useCallback(k=>{!M&&k&&N(k)},[N,M]);return r?e.jsxs(it,{ref:a,tabIndex:0,children:[e.jsx(at,{isFullScreen:!1,children:e.jsx(oe,{size:200,src:((R=y==null?void 0:y.properties)==null?void 0:R.image_url)||"",type:"clip"})}),e.jsx(pt,{isFullScreen:!1,children:e.jsx(Me,{ref:L,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:G,onPause:A,onPlay:j,onProgress:D,onReady:$,playbackRate:B,playing:s,url:r||"",volume:v,width:"100%"})}),t==="error"&&e.jsx(ct,{className:"error-wrapper",children:"Error happened, please try later"})]}):null},it=h(g)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,at=h(g)`
  position: absolute;
  top: ${r=>r.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,ct=h(g)`
  height: 60px;
  padding: 12px 16px;
  color: ${b.primaryRed};
`,pt=h.div`
  margin: ${r=>r.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,lt=p.memo(nt),dt=({onChangeChapter:r})=>{const a=H(n=>n.highlights),{playerRef:t}=I(n=>n),o=p.useCallback(n=>{const u=Array.isArray(n)?n[0]:n;t&&t.seekTo(u,"seconds")},[t]),l=n=>{r(),o(a[n].startTime)};return e.jsx(ut,{direction:"column",children:a.length>0&&e.jsx(ht,{children:e.jsx(xt,{children:a.map((n,u)=>e.jsxs(ft,{onClick:()=>l(u),children:[e.jsx(mt,{children:n.title}),e.jsxs(gt,{children:[Math.floor(n.startTime/60),":",(n.startTime%60).toString().padStart(2,"0")]})]},u))})})})},ut=h(g)({width:"100%",gap:"20px"}),ht=h.div`
  width: 100%;
`,xt=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ft=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  background: ${b.gray500};
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${b.gray400};
  }
`,mt=h.span`
  font-size: 14px;
  color: ${b.white};
  font-weight: 500;
  flex: 1;
`,gt=h.span`
  font-size: 12px;
  color: ${b.blueTextAccent};
  font-family: monospace;
`,me=p.forwardRef(({active:r,start:a,text:t},o)=>e.jsxs(bt,{ref:o,className:K({active:r}),children:[e.jsx(yt,{children:a}),e.jsx(wt,{children:e.jsx("span",{children:t})})]}));me.displayName="ParagraphComponent";const q=p.memo(me,(r,a)=>r.active===a.active),bt=h(g)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${b.AI_HIGHLIGHT};
  }
`,yt=h.span`
  background: ${b.lightBlue100};
  color: ${b.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,wt=h.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${b.AI_HIGHLIGHT};
  }
`,jt=({transcriptString:r,isFirst:a})=>{const[t,o]=p.useState(0),[l,n]=p.useState(!1),{playerRef:u}=I(d=>d),m=r.replace(/^["']|["']$/g,""),w=JSON.parse(m),x=p.useRef(null),s=p.useRef(null),f=p.useRef(null);return p.useEffect(()=>{const d=setInterval(()=>{if(u&&o){const i=u.getCurrentTime();o(i)}},100);return()=>clearInterval(d)},[u,o]),p.useEffect(()=>{const d=()=>{n(!0),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{n(!1)},1e3)},i=s.current;return i&&i.addEventListener("scroll",d),()=>{i&&i.removeEventListener("scroll",d)}},[]),p.useEffect(()=>{!l&&x.current&&x.current.scrollIntoView({behavior:"smooth",block:"center"})},[t,l]),e.jsx(vt,{ref:s,children:e.jsx(e.Fragment,{children:a?e.jsx(e.Fragment,{children:w[0].start>t?e.jsx(q,{active:!1,start:Y(w[0].start),text:w[0].text}):e.jsx(e.Fragment,{children:w.map(d=>{const i=Y(d.start),c=d.start<t&&t<d.end;return!a||d.start<=t+5?e.jsx(q,{ref:c?x:null,active:c,start:i,text:d.text},`${d.start}-${d.end}`):null})})}):e.jsx(e.Fragment,{children:w.map(d=>{const i=Y(d.start),c=d.start<t&&t<d.end;return e.jsx(q,{ref:c?x:null,active:c,start:i,text:d.text},`${d.start}-${d.end}`)})})})})},vt=h.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,kt=()=>{var d;const r=H(i=>i.clips),a=H(i=>i.setActiveClip),t=H(i=>i.activeClip),{playerRef:o}=I(i=>i),[l,n]=p.useState(0),[u,m]=p.useState(!0),[w,x]=ae(i=>[i.setActiveNode,i.activeNode]),s=Te(i=>i.simulation);p.useEffect(()=>{const i=setInterval(()=>{if(o&&n){const c=o.getCurrentTime();n(c)}},100);return()=>clearInterval(i)},[o,n]),p.useEffect(()=>{l?(()=>{var y;const c=r.find(v=>{var C;const[T,_]=f((C=v==null?void 0:v.properties)==null?void 0:C.timestamp);return T<=l&&l<_});t&&(c==null?void 0:c.ref_id)===(t==null?void 0:t.ref_id)||!c||(m((c==null?void 0:c.ref_id)===((y=r[0])==null?void 0:y.ref_id)),a(c||null))})():(m(!0),a(r[0]))},[l,r,t,a]),p.useEffect(()=>{if(t&&(!x||t.ref_id!==x.ref_id)){const i=s==null?void 0:s.nodes().find(c=>c.ref_id===t.ref_id);typeof(i==null?void 0:i.fx)=="number"&&w(i)}},[t,x,w,s]);const f=i=>i?i.split("-").map(Number):[0,0];return e.jsx(St,{direction:"row",children:((d=t==null?void 0:t.properties)==null?void 0:d.transcript)&&e.jsx(jt,{isFirst:u,transcriptString:t.properties.transcript})})},St=h(g)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
  @media (max-width: 768px) {
    margin: 0;
  }
`,X="chapters",V="transcript",Ct=()=>{var l,n;const r=H(u=>u.selectedEpisode),a=I(u=>u.isPlaying),[t,o]=p.useState(X);return p.useEffect(()=>{a&&o(V)},[a]),e.jsxs(_t,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(Pt,{children:((l=r==null?void 0:r.properties)==null?void 0:l.media_url)&&e.jsx(lt,{mediaUrl:r.properties.media_url})}),e.jsx(g,{className:"heading",children:(n=r==null?void 0:r.properties)==null?void 0:n.episode_title}),e.jsxs($t,{direction:"row",children:[e.jsx(re,{className:K({selected:t===X}),onClick:()=>o(X),children:"Chapters"}),e.jsx(re,{className:K({selected:t===V}),onClick:()=>o(V),children:"Transcript"})]}),e.jsxs(Tt,{children:[t===X&&e.jsx(dt,{onChangeChapter:()=>o(V)}),t===V&&e.jsx(kt,{})]})]})},Tt=h(g)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${b.white};
  background: ${b.BG1};
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
`,_t=h(g)(({theme:r})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[r.breakpoints.up("sm")]:{width:Re},"@media (max-width: 768px)":{padding:0}})),Pt=h(g)(({theme:r})=>({width:"100%",marginBottom:"20px",[r.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),re=h(g)`
  color: ${b.white};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;

  &.selected {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
`,$t=h(g)`
  background: ${b.primaryBlue};
  padding: 12px 24px;
  background: ${b.BG1};
  border-radius: 8px;
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`,It=["63a5707b-46a5-4df3-9258-7749aefc7fcd"],Nt=r=>{const a=r.edges.filter(o=>{var l;return(l=o==null?void 0:o.properties)==null?void 0:l.start}).map(o=>({source:o.source,target:o.target,start:o.properties.start}));return r.nodes.filter(o=>r.edges.some(l=>l.source===o.ref_id||l.target===o.ref_id)).map(o=>{const l=a.find(n=>o.ref_id===n.source||o.ref_id===n.target);return{...o,start:(l==null?void 0:l.start)||0}}).filter(o=>o&&o.node_type!=="Clip"&&o.node_type!=="Episode"&&o.node_type!=="Show")},pr=()=>{const r=ne(i=>i.addNewNode),a=H(i=>i.activeClip),t=H(i=>i.fetchEpisodeData),o=H(i=>i.chapters),l=p.useRef(null),n=p.useRef(null),u=p.useRef(null),m=p.useRef(null),[w,x]=p.useState([]),{setSchemas:s}=se(i=>i),f=ge(),{episodeId:d}=be();return p.useEffect(()=>{(async()=>{try{const c=await we();s(c.schemas.filter(y=>!y.is_deleted))}catch(c){console.error("Error fetching schema:",c)}})()},[s]),p.useEffect(()=>{d&&(async()=>{try{t(d||"")}catch(c){f("/"),console.error("Error fetching initial data:",c)}})()},[d,f,t]),p.useEffect(()=>{a&&o&&(async()=>{var c,y,v,T;try{const _=[],C={nodes:((c=u.current)==null?void 0:c.nodes)||[],edges:((y=u.current)==null?void 0:y.edges)||[]},F=a==null?void 0:a.ref_id;if(F){const N=await je(F,["-Clip","-Episode"],[],"",!0,0,2,50),M=N.nodes.filter(P=>P.node_type==="Claim"),B=N.edges.filter(P=>M.some(z=>z.ref_id===P.source||z.ref_id===P.target));m.current={nodes:[...((v=m.current)==null?void 0:v.nodes)||[],...M],edges:[...((T=m.current)==null?void 0:T.edges)||[],...B]};const G=Nt(N).map(P=>{var D;const z=((D=(o||[]).find(S=>{var $;return P.start&&J((($=S==null?void 0:S.properties)==null?void 0:$.timestamp)||"")>=P.start*1e3}))==null?void 0:D.ref_id)||"";return{...P,neighbourHood:z}});C.nodes.push(...G||[]),C.edges.push(...(N==null?void 0:N.edges)||[]),_.push(...G),u.current=C}x(_)}catch(_){console.error("Error processing clip nodes:",_)}})()},[a,o]),p.useEffect(()=>{const i=c=>{var v;const{playerRef:y}=I.getState();if(n.current!==null){if(c-n.current>2e3){if(u.current&&y){const{nodes:_,edges:C}=u.current,F=y==null?void 0:y.getCurrentTime(),[N,M]=C.reduce(([S,$],j)=>{var A,L;return((A=j==null?void 0:j.properties)==null?void 0:A.start)!==void 0&&((L=j==null?void 0:j.properties)==null?void 0:L.start)<F+1?S.push(j):$.push(j),[S,$]},[[],[]]),[B,U]=_.reduce(([S,$],j)=>(N.some(A=>A.target===j.ref_id||A.source===j.ref_id)?S.push(j):$.push(j),[S,$]),[[],[]]);u.current={nodes:U,edges:M};const[G,P]=(((v=m.current)==null?void 0:v.edges)||[]).reduce(([S,$],j)=>{var A,L;if(B.some(R=>R.ref_id===j.source)){const R=(((A=m.current)==null?void 0:A.nodes)||[]).find(k=>k.ref_id===j.target);R&&(S.push(R),$.push(j))}else if(B.some(R=>R.ref_id===j.target)){const R=(((L=m.current)==null?void 0:L.nodes)||[]).find(k=>k.ref_id===j.source);R&&(S.push(R),$.push(j))}return[S,$]},[[],[]]),z=[...B,...G],D=[...N,...P];(z.length||D.length)&&r({nodes:z,edges:D})}n.current=c}}else n.current=c;l.current=requestAnimationFrame(i)};return l.current=requestAnimationFrame(i),()=>{l.current&&cancelAnimationFrame(l.current)}},[u,r]),e.jsxs(Mt,{children:[e.jsx(Rt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx(g,{children:e.jsx(ye,{})}),e.jsx(Ct,{})]}),e.jsx(Et,{children:e.jsxs(g,{basis:"100%",grow:1,shrink:1,children:[e.jsx(ke,{}),It.includes(d||"")&&e.jsx(tt,{})]})})]})}),e.jsx(At,{children:e.jsx(Ue,{chapters:o,markers:w})}),e.jsx(ve,{})]})},Mt=h.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Rt=h(g)`
  flex: 1;
  overflow: hidden;
`,Et=h(g)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`,At=h(g)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{pr as MindSet};
