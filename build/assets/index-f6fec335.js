import{r as o,j as e,s as h,g as k,F as j,o as J,c as K,A as ae,p as ce,i as le,q as pe,H as de,t as ue,v as X}from"./index-fd66fa62.js";import{t as V,u as H,C as fe}from"./index-d61f7dfa.js";import{U as me}from"./index-8adc8d66.js";import{u as B,a as ge,b as he,I as xe,c as Q,d as ye}from"./index-80bf7276.js";import{M as be,V as we}from"./index-9b9c3e24.js";import{S as je,R as ve,s as L,M as ke}from"./index-564bd4da.js";import"./string-a277709d.js";import"./index-c4e31ada.js";import"./three.module-9722a9fc.js";import"./index-d0ff402c.js";import"./TextareaAutosize-1944770c.js";import"./CheckIcon-f0c01bc0.js";import"./index-ec1d934b.js";import"./index-198ace75.js";import"./ClipLoader-a27b3188.js";import"./clsx-dbb40d39.js";import"./SourcesTableIcon-c3a66ab9.js";import"./DeleteNodeIcon-3f57b907.js";import"./SoundIcon-5588cca4.js";import"./SucessFeedBackIcon-ff147d93.js";import"./Skeleton-ffee2890.js";import"./index-01d99814.js";import"./Stack-5fb2048c.js";import"./FormControlLabel-24f21b9d.js";import"./Typography-a4bc6b18.js";import"./createSvgIcon-dbb9e732.js";import"./isPlainObject-f126b6ab.js";const Z=o.memo(()=>{const s=B(r=>r.isPlaying),i=B(r=>r.setIsPlaying),n=B(r=>r.setVolume),t=B(r=>r.setPlaybackSpeed),a=B(r=>r.playbackSpeed),c=B(r=>r.playerRef),[f,m]=o.useState(!1),p=[.5,1,1.5,2],y=()=>{if(c){const r=c.getCurrentTime()-15;c.seekTo(r,"seconds")}},g=()=>{if(c){const r=c.getCurrentTime()+15;c.seekTo(r,"seconds")}},b=()=>{i(!s)},d=()=>{m(!f),n(f?1:0)},x=()=>{const u=(p.indexOf(a)+1)%p.length,w=p[u];if(t(w),c){const v=c.getInternalPlayer();v&&typeof v.playbackRate<"u"&&(v.playbackRate=w)}};return e.jsxs(Ce,{children:[e.jsx(Pe,{onClick:d,children:f?e.jsx(be,{}):e.jsx(we,{})}),e.jsx(_e,{onClick:y,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(Se,{"data-testid":"play-pause-button",onClick:b,size:"small",children:s?e.jsx(ge,{"data-testid":"pause-icon"}):e.jsx(he,{"data-testid":"play-icon"})}),e.jsx(Ie,{onClick:g,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(Ee,{onClick:x,children:[a,"x"]})]})});Z.displayName="Controls";const Ce=h(j).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${k.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${k.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,Se=h(xe)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,_e=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Ie=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Pe=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${k.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${k.DROPDOWN_BG};
  }
`,Ee=h.button`
  margin-top: 4px;
  background: ${k.BG1};
  color: ${k.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,ee=o.memo(({left:s,width:i,title:n})=>e.jsx($e,{style:{left:`${s}%`,width:`calc(${i}%)`},children:e.jsx("div",{className:"title",children:n})}));ee.displayName="Chapter";const $e=h.div`
  position: absolute;
  top: -3px;
  height: 100%;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  & + & {
    border-left: 0.1px solid ${k.white};
  }

  .title {
    position: absolute;
    bottom: calc(100% + 16px);
    display: none;
    color: ${k.white};
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
`,te=o.memo(({chapters:s,duration:i})=>i?e.jsx(e.Fragment,{children:s.map((n,t)=>{var y,g,b,d,x;const a=(y=n==null?void 0:n.properties)!=null&&y.timestamp?V(n.properties.timestamp)/1e3:0,c=(b=(g=s[t+1])==null?void 0:g.properties)!=null&&b.timestamp?V((d=s[t+1].properties)==null?void 0:d.timestamp)/1e3:i,f=Math.floor(a/i*100),p=Math.floor(c/i*100)-f;return e.jsx(ee,{left:f,title:((x=n==null?void 0:n.properties)==null?void 0:x.name)||(n==null?void 0:n.name)||"",width:p},`${n.ref_id}_${t}`)})}):null);te.displayName="Chapters";const re=o.memo(({type:s,left:i,img:n})=>{var p,y;const t=J(g=>g.normalizedSchemasByType),a=(p=t[s])==null?void 0:p.primary_color,c=(y=t[s])==null?void 0:y.icon,f=c?`/svg-icons/${c}.svg`:"",m={iconStart:n||f,color:a??k.THING};return e.jsx(Me,{style:{left:`${i}%`},children:e.jsx(se,{...m,label:s})})});re.displayName="Marker";const se=o.memo(({iconStart:s,color:i,label:n})=>e.jsx(Te,{color:i,children:s&&e.jsx("img",{alt:n,className:"badge__img",onError:console.log,src:s})}));se.displayName="Badge";const Te=h(j).attrs({direction:"row"})`
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
`,Me=h.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${k.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,ne=o.memo(({markers:s,duration:i})=>e.jsx(e.Fragment,{children:s.map((n,t)=>{var m;const a=Math.floor(((n==null?void 0:n.start)||0)/i*100),c=(n==null?void 0:n.node_type)||"",f=((m=n==null?void 0:n.properties)==null?void 0:m.image_url)||"";return e.jsx(re,{img:f,left:a,type:c},`${n.ref_id}_${t}`)})}));ne.displayName="Markers";const Re=({duration:s,markers:i,handleProgressChange:n,playingTIme:t,chapters:a})=>{const c=10/s*100;return e.jsxs(Ne,{children:[e.jsx(Ae,{max:s,onChange:n,value:t,width:c}),a&&e.jsx(oe,{children:e.jsx(te,{chapters:a,duration:s})}),e.jsx(We,{children:e.jsx(ne,{duration:s,markers:i})})]})},oe=h(j)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,Ne=h(j)`
  position: relative;
  flex: 1 1 100%;

  &:hover {
    ${oe} {
      display: block;
    }
  }
`,We=h(j)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,Ae=h(je)`
  && {
    z-index: 20;
    color: ${k.white};
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
      background-color: ${k.primaryBlue};
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
`,Fe=({markers:s,chapters:i})=>{const{playingNode:n,playerRef:t}=B(y=>y),[a,c]=o.useState(0),f=n,m=o.useCallback((y,g)=>{const b=Array.isArray(g)?g[0]:g;t&&t.seekTo(b,"seconds")},[t]);o.useEffect(()=>{const y=setInterval(()=>{if(t&&c){const g=t.getCurrentTime();c(g)}},500);return()=>clearInterval(y)},[t,c]);const p=(t==null?void 0:t.getDuration())||0;return f?e.jsxs(Be,{children:[e.jsx(Z,{}),e.jsx(Re,{chapters:i,duration:p,handleProgressChange:m,markers:s,playingTIme:a})]}):null},Be=h(j).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${k.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,De=(s,i)=>{let n=0,t=s.length-1;for(;n<=t;){const a=Math.floor((n+t)/2),c=s[a],{start:f,end:m}=c.properties;if(i>=f&&i<=m)return c;i<f?t=a-1:n=a+1}return null},ze=({mediaUrl:s})=>{const i=o.useRef(null),[n,t]=o.useState("ready"),[a,c]=o.useState(!1),{setActiveEdge:f}=Q(l=>l),{dataInitial:m}=K(l=>l),{isPlaying:p,playingTime:y,setIsPlaying:g,setPlayingTime:b,setDuration:d,playingNode:x,volume:r,setHasError:u,resetPlayer:w,isSeeking:v,setIsSeeking:W,setPlayerRef:$,playerRef:C,playbackSpeed:D}=B(l=>l);o.useEffect(()=>()=>w(),[w]),o.useEffect(()=>{x&&!a&&(b(0),d(0),c(!1))},[x,b,d,c,a]),o.useEffect(()=>{v&&C&&(C.seekTo(y,"seconds"),W(!1))},[y,v,W,C]);const I=o.useCallback(()=>{g(!p)},[p,g]),M=()=>{u(!0),t("error")},N=o.useCallback(l=>{l.code},[I]);o.useEffect(()=>(window.addEventListener("keydown",N),()=>{window.removeEventListener("keydown",N)}),[N]);const A=o.useMemo(()=>((m==null?void 0:m.links.filter(P=>{var E;return(E=P==null?void 0:P.properties)==null?void 0:E.start}))||[]).slice().sort((P,E)=>{var O,U;return((O=P==null?void 0:P.properties)==null?void 0:O.start)-((U=E==null?void 0:E.properties)==null?void 0:U.start)}),[m]),T=l=>{if(!v){const F=l.playedSeconds,P=De(A,F);f(P||null)}},R=()=>{C&&t("ready")},z=o.useCallback(()=>{p||g(!0)},[g,p]),G=o.useCallback(()=>{p&&g(!1)},[g,p]),S=l=>{l.stopPropagation()},_=o.useCallback(l=>{!C&&l&&$(l)},[$,C]);return s?e.jsxs(Ge,{ref:i,tabIndex:0,children:[e.jsx(He,{isFullScreen:!1,children:e.jsx(ae,{size:120,src:(x==null?void 0:x.image_url)||"",type:"clip"})}),e.jsx(Ve,{isFullScreen:!1,onClick:S,children:e.jsx(ve,{ref:_,height:"219px",onBuffer:()=>t("buffering"),onBufferEnd:()=>t("ready"),onError:M,onPause:G,onPlay:z,onProgress:T,onReady:R,playbackRate:D,playing:p,url:s||"",volume:r,width:"100%"})}),n==="error"?e.jsx(Oe,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Ge=h(j)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,He=h(j)`
  position: absolute;
  top: ${s=>s.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Oe=h(j)`
  height: 60px;
  padding: 12px 16px;
  color: ${k.primaryRed};
`,Ve=h.div`
  margin: ${s=>s.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Le=o.memo(ze),ie=o.forwardRef(({active:s,start:i,text:n},t)=>e.jsxs(qe,{ref:t,className:ce({active:s}),children:[e.jsx(Ue,{children:i}),e.jsx(Xe,{children:e.jsx("span",{children:n})})]}));ie.displayName="ParagraphComponent";const q=o.memo(ie,(s,i)=>s.active===i.active),qe=h(j)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${k.AI_HIGHLIGHT};
  }
`,Ue=h.span`
  background: ${k.lightBlue100};
  color: ${k.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Xe=h.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${k.AI_HIGHLIGHT};
  }
`,Ye=({transcriptString:s,isFirst:i})=>{const[n,t]=o.useState(0),[a,c]=o.useState(!1),{playerRef:f}=B(d=>d),m=s.replace(/^["']|["']$/g,""),p=JSON.parse(m),y=o.useRef(null),g=o.useRef(null),b=o.useRef(null);return o.useEffect(()=>{const d=setInterval(()=>{if(f&&t){const x=f.getCurrentTime();t(x)}},100);return()=>clearInterval(d)},[f,t]),o.useEffect(()=>{const d=()=>{c(!0),b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{c(!1)},1e3)},x=g.current;return x&&x.addEventListener("scroll",d),()=>{x&&x.removeEventListener("scroll",d)}},[]),o.useEffect(()=>{!a&&y.current&&y.current.scrollIntoView({behavior:"smooth",block:"center"})},[n,a]),e.jsx(Je,{ref:g,children:e.jsx(e.Fragment,{children:i?e.jsx(e.Fragment,{children:p[0].start>n?e.jsx(q,{active:!1,start:L(p[0].start),text:p[0].text}):e.jsx(e.Fragment,{children:p.map(d=>{const x=L(d.start),r=d.start<n&&n<d.end;return!i||d.start<=n+5?e.jsx(q,{ref:r?y:null,active:r,start:x,text:d.text},`${d.start}-${d.end}`):null})})}):e.jsx(e.Fragment,{children:p.map(d=>{const x=L(d.start),r=d.start<n&&n<d.end;return e.jsx(q,{ref:r?y:null,active:r,start:x,text:d.text},`${d.start}-${d.end}`)})})})})},Je=h.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Ke=({name:s})=>{var x;const i=H(r=>r.clips),n=H(r=>r.setActiveClip),t=H(r=>r.activeClip),{playerRef:a}=B(r=>r),[c,f]=o.useState(0),[m,p]=o.useState(!0),[y,g]=Q(r=>[r.setActiveNode,r.activeNode]),b=ye(r=>r.simulation);o.useEffect(()=>{const r=setInterval(()=>{if(a&&f){const u=a.getCurrentTime();f(u)}},100);return()=>clearInterval(r)},[a,f]),o.useEffect(()=>{c&&(()=>{var w;const u=i.find(v=>{var C;const[W,$]=d((C=v==null?void 0:v.properties)==null?void 0:C.timestamp);return W<=c&&c<$});t&&(u==null?void 0:u.ref_id)===(t==null?void 0:t.ref_id)||!u||(p((u==null?void 0:u.ref_id)===((w=i[0])==null?void 0:w.ref_id)),n(u||null))})()},[c,i,t,n]),o.useEffect(()=>{if(t&&(!g||t.ref_id!==g.ref_id)){const r=b==null?void 0:b.nodes().find(u=>u.ref_id===t.ref_id);typeof(r==null?void 0:r.fx)=="number"&&y(r)}},[t,g,y,b]);const d=r=>r?r.split("-").map(Number):[0,0];return e.jsxs(Qe,{children:[e.jsx(j,{className:"heading",children:s}),t?e.jsx(Ze,{direction:"row",children:((x=t.properties)==null?void 0:x.transcript)&&e.jsx(Ye,{isFirst:m,transcriptString:t.properties.transcript})}):null]})},Qe=h(j)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${k.white};
  background: ${k.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
`,Ze=h(j)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,et=()=>{var i;const s=H(n=>n.selectedEpisode);return e.jsxs(tt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(rt,{children:((i=s==null?void 0:s.properties)==null?void 0:i.media_url)&&e.jsx(Le,{mediaUrl:s.properties.media_url})}),e.jsx(Ke,{name:(s==null?void 0:s.name)||""})]})},tt=h(j)(({theme:s})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[s.breakpoints.up("sm")]:{width:ke,gap:"10px"}})),rt=h(j)(({theme:s})=>({width:"100%",marginBottom:"20px",[s.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),Y=s=>{const i=s.edges.filter(t=>{var a;return(a=t==null?void 0:t.properties)==null?void 0:a.start}).map(t=>({source:t.source,target:t.target,start:t.properties.start}));return s.nodes.filter(t=>s.edges.some(a=>a.source===t.ref_id||a.target===t.ref_id)).map(t=>{const a=i.find(c=>t.ref_id===c.source||t.ref_id===c.target);return{...t,start:(a==null?void 0:a.start)||0}}).filter(t=>t&&t.node_type!=="Clip"&&t.node_type!=="Episode"&&t.node_type!=="Show")},Nt=()=>{const s=K(r=>r.addNewNode),i=H(r=>r.clips),n=H(r=>r.activeClip),t=H(r=>r.fetchEpisodeData),a=H(r=>r.chapters),c=o.useRef(null),f=o.useRef(null),m=o.useRef(null),p=o.useRef(null),[y,g]=o.useState([]),{setSchemas:b}=J(r=>r),d=le(),{episodeId:x}=pe();return o.useEffect(()=>{(async()=>{try{const u=await ue();b(u.schemas.filter(w=>!w.is_deleted))}catch(u){console.error("Error fetching schema:",u)}})()},[b]),o.useEffect(()=>{x&&(async()=>{try{t(x||"")}catch(u){d("/"),console.error("Error fetching initial data:",u)}})()},[x,d,t]),o.useEffect(()=>{},[i,g,a,s,n]),o.useEffect(()=>{n&&a&&(async()=>{var u,w,v,W;try{const $=[],C={nodes:((u=m.current)==null?void 0:u.nodes)||[],edges:((w=m.current)==null?void 0:w.edges)||[]},D=n==null?void 0:n.ref_id;if(D){const I=await X(D,["-Clip","-Episode"],[],"",!0,0,2,50),M=I.nodes.filter(A=>A.node_type==="Claim"),N=I.edges.filter(A=>M.some(T=>T.ref_id===A.source||T.ref_id===A.target));if(p.current={nodes:[...((v=p.current)==null?void 0:v.nodes)||[],...M],edges:[...((W=p.current)==null?void 0:W.edges)||[],...N]},I){const T=Y(I).map(R=>{var G;const z=((G=(a||[]).find(S=>{var _;return R.start&&V(((_=S==null?void 0:S.properties)==null?void 0:_.timestamp)||"")>=R.start*1e3}))==null?void 0:G.ref_id)||"";return{...R,neighbourHood:z}});C.nodes.push(...T||[]),C.edges.push(...(I==null?void 0:I.edges)||[]),$.push(...T),m.current=C}}g($)}catch($){console.error("Error processing clip nodes:",$)}})()},[n,a]),o.useEffect(()=>{const r=u=>{var v;const{playerRef:w}=B.getState();if(f.current!==null){if(u-f.current>2e3){if(m.current&&w){const{nodes:$,edges:C}=m.current,D=w==null?void 0:w.getCurrentTime(),[I,M]=C.reduce(([S,_],l)=>{var F,P;return((F=l==null?void 0:l.properties)==null?void 0:F.start)!==void 0&&((P=l==null?void 0:l.properties)==null?void 0:P.start)<D+1?S.push(l):_.push(l),[S,_]},[[],[]]),[N,A]=$.reduce(([S,_],l)=>(I.some(F=>F.target===l.ref_id||F.source===l.ref_id)?S.push(l):_.push(l),[S,_]),[[],[]]);m.current={nodes:A,edges:M};const[T,R]=(((v=p.current)==null?void 0:v.edges)||[]).reduce(([S,_],l)=>{var F,P;if(N.some(E=>E.ref_id===l.source)){const E=(((F=p.current)==null?void 0:F.nodes)||[]).find(O=>O.ref_id===l.target);E&&(S.push(E),_.push(l))}else if(N.some(E=>E.ref_id===l.target)){const E=(((P=p.current)==null?void 0:P.nodes)||[]).find(O=>O.ref_id===l.source);E&&(S.push(E),_.push(l))}return[S,_]},[[],[]]),z=[...N,...T],G=[...I,...R];(z.length||G.length)&&s({nodes:z,edges:G})}f.current=u}}else f.current=u;c.current=requestAnimationFrame(r)};return c.current=requestAnimationFrame(r),()=>{c.current&&cancelAnimationFrame(c.current)}},[m,s]),e.jsxs(st,{children:[e.jsx(nt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(j,{children:e.jsx(de,{})}),e.jsx(et,{})]}),e.jsx(ot,{children:e.jsx(j,{basis:"100%",grow:1,shrink:1,children:e.jsx(me,{})})})]})}),e.jsx(it,{children:e.jsx(Fe,{chapters:a,markers:y})}),e.jsx(fe,{})]})},st=h.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,nt=h(j)`
  flex: 1;
  overflow: hidden;
`,ot=h(j)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,it=h(j)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{Nt as MindSet};
