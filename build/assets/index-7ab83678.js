import{r as n,j as e,s as m,g as T,F as S,o as K,c as Y,A as ae,p as ce,i as le,q as pe,H as de,t as ue,v as fe,f as q}from"./index-0bc9ae90.js";import{U as me}from"./index-9492386b.js";import{u as he}from"./index-63e98790.js";import{u as W,a as ge,b as xe,I as ye,c as Q,d as V}from"./index-a97a73cc.js";import{M as be,V as we}from"./index-0813e708.js";import{S as je,R as ve,s as U,M as Se}from"./index-e33306f7.js";import"./index-4044aa7b.js";import"./three.module-4d3d7244.js";import"./index-971a0f27.js";import"./TextareaAutosize-acb7dc8e.js";import"./CheckIcon-c13450bd.js";import"./index-30fb37bf.js";import"./index-1ed69b45.js";import"./ClipLoader-a4ee2175.js";import"./clsx-0ff35b70.js";import"./SourcesTableIcon-db95c031.js";import"./DeleteNodeIcon-64022384.js";import"./SoundIcon-dbfb099f.js";import"./SucessFeedBackIcon-06d2d64f.js";import"./Skeleton-7f80f646.js";import"./Stack-faaea80c.js";import"./index-c7b1e632.js";import"./FormControlLabel-d213a304.js";import"./Typography-8117be15.js";import"./createSvgIcon-39e89e6d.js";import"./isPlainObject-7a297de7.js";function D(r){const[i,t,s]=r.split(":").map(Number);return Number((i*60*60*1e3+t*60*1e3+s*1e3).toFixed(6))}const Z=n.memo(()=>{const r=W(a=>a.isPlaying),i=W(a=>a.setIsPlaying),t=W(a=>a.setVolume),s=W(a=>a.setPlaybackSpeed),c=W(a=>a.playbackSpeed),o=W(a=>a.playerRef),[x,b]=n.useState(!1),h=[.5,1,1.5,2],g=()=>{if(o){const a=o.getCurrentTime()-15;o.seekTo(a,"seconds")}},p=()=>{if(o){const a=o.getCurrentTime()+15;o.seekTo(a,"seconds")}},j=()=>{i(!r)},d=()=>{b(!x),t(x?1:0)},f=()=>{const I=(h.indexOf(c)+1)%h.length,F=h[I];if(s(F),o){const P=o.getInternalPlayer();P&&typeof P.playbackRate<"u"&&(P.playbackRate=F)}};return e.jsxs(ke,{children:[e.jsx(Pe,{onClick:d,children:x?e.jsx(be,{}):e.jsx(we,{})}),e.jsx(Te,{onClick:g,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(Ce,{"data-testid":"play-pause-button",onClick:j,size:"small",children:r?e.jsx(ge,{"data-testid":"pause-icon"}):e.jsx(xe,{"data-testid":"play-icon"})}),e.jsx(Ie,{onClick:p,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(_e,{onClick:f,children:[c,"x"]})]})});Z.displayName="Controls";const ke=m(S).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${T.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${T.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,Ce=m(ye)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Te=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Ie=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Pe=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${T.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${T.DROPDOWN_BG};
  }
`,_e=m.button`
  margin-top: 4px;
  background: ${T.BG1};
  color: ${T.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,ee=n.memo(({left:r,width:i,title:t})=>e.jsx(Ee,{style:{left:`${r}%`,width:`calc(${i}%)`},children:e.jsx("div",{className:"title",children:t})}));ee.displayName="Chapter";const Ee=m.div`
  position: absolute;
  top: -3px;
  height: 100%;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  & + & {
    border-left: 0.1px solid ${T.white};
  }

  .title {
    position: absolute;
    bottom: calc(100% + 16px);
    display: none;
    color: ${T.white};
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
`,te=n.memo(({chapters:r,duration:i})=>i?e.jsx(e.Fragment,{children:r.map((t,s)=>{var g,p,j,d,f;const c=(g=t==null?void 0:t.properties)!=null&&g.timestamp?D(t.properties.timestamp)/1e3:0,o=(j=(p=r[s+1])==null?void 0:p.properties)!=null&&j.timestamp?D((d=r[s+1].properties)==null?void 0:d.timestamp)/1e3:i,x=Math.floor(c/i*100),h=Math.floor(o/i*100)-x;return e.jsx(ee,{left:x,title:((f=t==null?void 0:t.properties)==null?void 0:f.name)||(t==null?void 0:t.name)||"",width:h},`${t.ref_id}_${s}`)})}):null);te.displayName="Chapters";const re=n.memo(({type:r,left:i,img:t})=>{var h,g;const s=K(p=>p.normalizedSchemasByType),c=(h=s[r])==null?void 0:h.primary_color,o=(g=s[r])==null?void 0:g.icon,x=o?`/svg-icons/${o}.svg`:"",b={iconStart:t||x,color:c??T.THING};return e.jsx(Re,{style:{left:`${i}%`},children:e.jsx(se,{...b,label:r})})});re.displayName="Marker";const se=n.memo(({iconStart:r,color:i,label:t})=>e.jsx($e,{color:i,children:r&&e.jsx("img",{alt:t,className:"badge__img",onError:console.log,src:r})}));se.displayName="Badge";const $e=m(S).attrs({direction:"row"})`
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
`,Re=m.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${T.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,ne=n.memo(({markers:r,duration:i})=>e.jsx(e.Fragment,{children:r.map((t,s)=>{var b;const c=Math.floor(((t==null?void 0:t.start)||0)/i*100),o=(t==null?void 0:t.node_type)||"",x=((b=t==null?void 0:t.properties)==null?void 0:b.image_url)||"";return e.jsx(re,{img:x,left:c,type:o},`${t.ref_id}_${s}`)})}));ne.displayName="Markers";const Ne=({duration:r,markers:i,handleProgressChange:t,playingTIme:s,chapters:c})=>{const o=10/r*100;return e.jsxs(Me,{children:[e.jsx(Fe,{max:r,onChange:t,value:s,width:o}),c&&e.jsx(oe,{children:e.jsx(te,{chapters:c,duration:r})}),e.jsx(We,{children:e.jsx(ne,{duration:r,markers:i})})]})},oe=m(S)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,Me=m(S)`
  position: relative;
  flex: 1 1 100%;

  &:hover {
    ${oe} {
      display: block;
    }
  }
`,We=m(S)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,Fe=m(je)`
  && {
    z-index: 20;
    color: ${T.white};
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
      background-color: ${T.primaryBlue};
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
`,Ae=({markers:r,chapters:i})=>{const{playingNode:t,playerRef:s}=W(g=>g),[c,o]=n.useState(0),x=t,b=n.useCallback((g,p)=>{const j=Array.isArray(p)?p[0]:p;s&&s.seekTo(j,"seconds")},[s]);n.useEffect(()=>{const g=setInterval(()=>{if(s&&o){const p=s.getCurrentTime();o(p)}},500);return()=>clearInterval(g)},[s,o]);const h=(s==null?void 0:s.getDuration())||0;return x?e.jsxs(Be,{children:[e.jsx(Z,{}),e.jsx(Ne,{chapters:i,duration:h,handleProgressChange:b,markers:r,playingTIme:c})]}):null},Be=m(S).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${T.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Ge=(r,i)=>{let t=0,s=r.length-1;for(;t<=s;){const c=Math.floor((t+s)/2),o=r[c],{start:x,end:b}=o.properties;if(i>=x&&i<=b)return o;i<x?s=c-1:t=c+1}return null},ze=({mediaUrl:r})=>{const i=n.useRef(null),[t,s]=n.useState("ready"),[c,o]=n.useState(!1),{setActiveEdge:x}=Q(w=>w),{dataInitial:b}=Y(w=>w),{isPlaying:h,playingTime:g,setIsPlaying:p,setPlayingTime:j,setDuration:d,playingNode:f,volume:a,setHasError:I,resetPlayer:F,isSeeking:P,setIsSeeking:z,setPlayerRef:G,playerRef:k,playbackSpeed:L}=W(w=>w);n.useEffect(()=>()=>F(),[F]),n.useEffect(()=>{f&&!c&&(j(0),d(0),o(!1))},[f,j,d,o,c]),n.useEffect(()=>{P&&k&&(k.seekTo(g,"seconds"),z(!1))},[g,P,z,k]);const O=n.useCallback(()=>{p(!h)},[h,p]),u=()=>{I(!0),s("error")},l=n.useCallback(w=>{w.code},[O]);n.useEffect(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[l]);const y=n.useMemo(()=>((b==null?void 0:b.links.filter(v=>{var $;return($=v==null?void 0:v.properties)==null?void 0:$.start}))||[]).slice().sort((v,$)=>{var C,B;return((C=v==null?void 0:v.properties)==null?void 0:C.start)-((B=$==null?void 0:$.properties)==null?void 0:B.start)}),[b]),_=w=>{if(!P){const A=w.playedSeconds,v=Ge(y,A);x(v||null)}},R=()=>{k&&s("ready")},E=n.useCallback(()=>{h||p(!0)},[p,h]),M=n.useCallback(()=>{h&&p(!1)},[p,h]),N=w=>{w.stopPropagation()},H=n.useCallback(w=>{!k&&w&&G(w)},[G,k]);return r?e.jsxs(He,{ref:i,tabIndex:0,children:[e.jsx(Ve,{isFullScreen:!1,children:e.jsx(ae,{size:120,src:(f==null?void 0:f.image_url)||"",type:"clip"})}),e.jsx(Le,{isFullScreen:!1,onClick:N,children:e.jsx(ve,{ref:H,height:"219px",onBuffer:()=>s("buffering"),onBufferEnd:()=>s("ready"),onError:u,onPause:M,onPlay:E,onProgress:_,onReady:R,playbackRate:L,playing:h,url:r||"",volume:a,width:"100%"})}),t==="error"?e.jsx(De,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},He=m(S)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Ve=m(S)`
  position: absolute;
  top: ${r=>r.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,De=m(S)`
  height: 60px;
  padding: 12px 16px;
  color: ${T.primaryRed};
`,Le=m.div`
  margin: ${r=>r.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Oe=n.memo(ze),ie=n.forwardRef(({active:r,start:i,text:t},s)=>e.jsxs(qe,{ref:s,className:ce({active:r}),children:[e.jsx(Ue,{children:i}),e.jsx(Xe,{children:e.jsx("span",{children:t})})]}));ie.displayName="ParagraphComponent";const X=n.memo(ie,(r,i)=>r.active===i.active),qe=m(S)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${T.AI_HIGHLIGHT};
  }
`,Ue=m.span`
  background: ${T.lightBlue100};
  color: ${T.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Xe=m.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${T.AI_HIGHLIGHT};
  }
`,Ye=({transcriptString:r,isFirst:i})=>{const[t,s]=n.useState(0),[c,o]=n.useState(!1),{playerRef:x}=W(d=>d),b=r.replace(/^["']|["']$/g,""),h=JSON.parse(b),g=n.useRef(null),p=n.useRef(null),j=n.useRef(null);return n.useEffect(()=>{const d=setInterval(()=>{if(x&&s){const f=x.getCurrentTime();s(f)}},100);return()=>clearInterval(d)},[x,s]),n.useEffect(()=>{const d=()=>{o(!0),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{o(!1)},1e3)},f=p.current;return f&&f.addEventListener("scroll",d),()=>{f&&f.removeEventListener("scroll",d)}},[]),n.useEffect(()=>{!c&&g.current&&g.current.scrollIntoView({behavior:"smooth",block:"center"})},[t,c]),e.jsx(Je,{ref:p,children:e.jsx(e.Fragment,{children:i?e.jsx(e.Fragment,{children:h[0].start>t?e.jsx(X,{active:!1,start:U(h[0].start),text:h[0].text}):e.jsx(e.Fragment,{children:h.map(d=>{const f=U(d.start),a=d.start<t&&t<d.end;return!i||d.start<=t+5?e.jsx(X,{ref:a?g:null,active:a,start:f,text:d.text},`${d.start}-${d.end}`):null})})}):e.jsx(e.Fragment,{children:h.map(d=>{const f=U(d.start),a=d.start<t&&t<d.end;return e.jsx(X,{ref:a?g:null,active:a,start:f,text:d.text},`${d.start}-${d.end}`)})})})})},Je=m.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Ke=({name:r})=>{var f;const i=V(a=>a.clips),{playerRef:t}=W(a=>a),[s,c]=n.useState(0),[o,x]=n.useState(null),[b,h]=n.useState(!0),[g,p,j]=Q(a=>[a.setActiveNode,a.activeNode,a.simulation]);n.useEffect(()=>{const a=setInterval(()=>{if(t&&c){const I=t.getCurrentTime();c(I)}},100);return()=>clearInterval(a)},[t,c]),n.useEffect(()=>{s&&(()=>{var F;const I=i.find(P=>{var k;const[z,G]=d((k=P==null?void 0:P.properties)==null?void 0:k.timestamp);return z<=s&&s<G});o&&(I==null?void 0:I.ref_id)===(o==null?void 0:o.ref_id)||!I||(h((I==null?void 0:I.ref_id)===((F=i[0])==null?void 0:F.ref_id)),x(I||null))})()},[s,i,o]),n.useEffect(()=>{if(o&&(!p||o.ref_id!==p.ref_id)){const a=j==null?void 0:j.nodes().find(I=>I.ref_id===o.ref_id);typeof(a==null?void 0:a.fx)=="number"&&g(a)}},[o,p,g,j]);const d=a=>a?a.split("-").map(Number):[0,0];return e.jsxs(Qe,{children:[e.jsx(S,{className:"heading",children:r}),o?e.jsx(Ze,{direction:"row",children:((f=o.properties)==null?void 0:f.transcript)&&e.jsx(Ye,{isFirst:b,transcriptString:o.properties.transcript})}):null]})},Qe=m(S)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${T.white};
  background: ${T.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
`,Ze=m(S)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,et=()=>{var i;const r=V(t=>t.selectedEpisode);return e.jsxs(tt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(rt,{children:((i=r==null?void 0:r.properties)==null?void 0:i.source_link)&&e.jsx(Oe,{mediaUrl:r.properties.source_link})}),e.jsx(Ke,{name:(r==null?void 0:r.name)||""})]})},tt=m(S)(({theme:r})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[r.breakpoints.up("sm")]:{width:Se,gap:"10px"}})),rt=m(S)(({theme:r})=>({width:"100%",marginBottom:"20px",[r.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),st=r=>{const i=r.edges.filter(s=>{var c;return(c=s==null?void 0:s.properties)==null?void 0:c.start}).map(s=>({source:s.source,target:s.target,start:s.properties.start}));return r.nodes.filter(s=>r.edges.some(c=>c.source===s.ref_id||c.target===s.ref_id)).map(s=>{const c=i.find(o=>s.ref_id===o.source||s.ref_id===o.target);return{...s,start:(c==null?void 0:c.start)||0}}).filter(s=>s&&s.node_type!=="Clip"&&s.node_type!=="Episode"&&s.node_type!=="Show")},Mt=()=>{const{isFetching:r,runningProjectId:i}=Y(u=>u),t=Y(u=>u.addNewNode),[s,c]=n.useState(!1),o=V(u=>u.setSelectedEpisode),x=V(u=>u.setClips),b=V(u=>u.clips),h=V(u=>u.setChapters),g=V(u=>u.chapters),p=he(),j=n.useRef(null),d=n.useRef(null),f=n.useRef(null),[a,I]=n.useState([]),{setSchemas:F}=K(u=>u),P=n.useRef(null),z=n.useRef(null),G=le(),{episodeId:k}=pe(),{setPlayingNode:L}=W(u=>u);n.useEffect(()=>{(async()=>{try{const l=await ue();F(l.schemas.filter(y=>!y.is_deleted))}catch(l){console.error("Error fetching schema:",l)}})()},[F]),n.useEffect(()=>{k&&(async l=>{try{const y=await fe(l);y&&(L(y),o(y),t({nodes:[y],edges:[]}))}catch(y){G("/"),console.error(y)}})(k)},[k,L,o,t,G]),n.useEffect(()=>{k&&(async()=>{try{const l=await q(k||"",0,50,{nodeType:["Show","Host","Guest"],useSubGraph:!1}),y=await q(k||"",0,1e3,{nodeType:["Clip"],useSubGraph:!1});if(t({nodes:l!=null&&l.nodes?l==null?void 0:l.nodes:[],edges:l!=null&&l.edges?l.edges:[]}),y!=null&&y.nodes){const _=y.nodes.filter(R=>{var E;return(E=R.properties)==null?void 0:E.timestamp}).sort((R,E)=>{var H,w,A,v;const M=Number((w=(H=R.properties)==null?void 0:H.timestamp)==null?void 0:w.split("-")[0]),N=Number((v=(A=E.properties)==null?void 0:A.timestamp)==null?void 0:v.split("-")[0]);return M-N});x(_)}}catch(l){G("/"),console.error("Error fetching initial data:",l)}})()},[k,t,x,G]),n.useEffect(()=>{k&&(async()=>{try{const l=await q(k||"",0,50,{nodeType:["Chapter"],useSubGraph:!1});if(l!=null&&l.nodes){const y=l==null?void 0:l.nodes.filter(_=>_.node_type==="Chapter").sort((_,R)=>{var E,M;return D(((E=_==null?void 0:_.properties)==null?void 0:E.timestamp)||"")-D(((M=R==null?void 0:R.properties)==null?void 0:M.timestamp)||"")});h(y)}}catch{console.log("no chapters was fetched")}})()},[k,h]),n.useEffect(()=>{if(!b||!g)return;(async()=>{var l,y;try{const _=(b==null?void 0:b.map(M=>M.ref_id).filter(Boolean))||[],R=[],E={nodes:((l=f.current)==null?void 0:l.nodes)||[],edges:((y=f.current)==null?void 0:y.edges)||[]};for(const M of _){const N=await q(M,0,50);if(N){const w=st(N).map(A=>{var $;const v=(($=g.find(C=>{var B;return A.start&&D(((B=C==null?void 0:C.properties)==null?void 0:B.timestamp)||"")>=A.start*1e3}))==null?void 0:$.ref_id)||"";return{...A,neighbourHood:v}});E.nodes.push(...w||[]),E.edges.push(...(N==null?void 0:N.edges)||[]),R.push(...w),f.current=E}}I(R)}catch(_){console.error("Error processing clip nodes:",_)}})()},[b,I,g]);const O=n.useCallback(u=>{r||(P.current||(P.current={nodes:[],edges:[]}),u.edges&&P.current.edges.push(...u.edges),u.nodes&&P.current.nodes.push(...u.nodes),z.current&&clearTimeout(z.current),z.current=setTimeout(()=>{if(P.current){const{nodes:l,edges:y}=P.current,_={nodes:l,edges:y};P.current={nodes:[],edges:[]},t(_)}},3e3))},[t,r]);return n.useEffect(()=>(p&&(p.connect(),p.on("connect_error",u=>{console.error("Socket connection error:",u)}),i&&p.on("new_node_created",O)),()=>{p&&p.off()}),[p,O,i]),n.useEffect(()=>{const u=l=>{const{playerRef:y}=W.getState();if(d.current!==null){if(l-d.current>1e3){if(f.current&&y){const{nodes:R,edges:E}=f.current,M=y==null?void 0:y.getCurrentTime(),[N,H]=E.reduce(([v,$],C)=>{var B,J;return((B=C==null?void 0:C.properties)==null?void 0:B.start)!==void 0&&((J=C==null?void 0:C.properties)==null?void 0:J.start)<M+1?v.push(C):$.push(C),[v,$]},[[],[]]),[w,A]=R.reduce(([v,$],C)=>(N.some(B=>B.target===C.ref_id||B.source===C.ref_id)?v.push(C):$.push(C),[v,$]),[[],[]]);f.current={nodes:A,edges:H},(w.length||N.length)&&t({nodes:w,edges:N})}d.current=l}}else d.current=l;j.current=requestAnimationFrame(u)};return j.current=requestAnimationFrame(u),()=>{j.current&&cancelAnimationFrame(j.current)}},[f,t]),n.useEffect(()=>{if(i)try{p==null||p.emit("update_project_id",{id:i})}catch(u){console.error(u)}},[i,p]),e.jsxs(nt,{children:[e.jsx(ot,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(S,{onClick:()=>c(!s),children:e.jsx(de,{})}),e.jsx(et,{})]}),e.jsx(it,{children:e.jsx(S,{basis:"100%",grow:1,shrink:1,children:e.jsx(me,{})})})]})}),e.jsx(at,{children:e.jsx(Ae,{chapters:g,markers:a})})]})},nt=m.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,ot=m(S)`
  flex: 1;
  overflow: hidden;
`,it=m(S)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,at=m(S)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{Mt as MindSet};
