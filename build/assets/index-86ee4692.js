import{r as n,j as e,s as f,g as T,F as S,o as K,c as U,A as ae,p as ce,i as le,q as pe,H as de,t as ue,v as fe,f as q}from"./index-1bfcc735.js";import{Universe as me}from"./index-8dbbbfbf.js";import{a as W,b as he,c as ge,I as xe,d as Q,e as V,u as ye}from"./index-edfda444.js";import{M as be,V as we}from"./VolumeIcon-d36e86ba.js";import{S as je,R as ve,s as X,M as Se}from"./index-41e83564.js";import"./index-19b40602.js";import"./VisibilityOn-41f8e162.js";import"./SourcesTableIcon-e528cd4f.js";import"./NodeCircleIcon-8db83bbc.js";import"./CheckIcon-164112af.js";import"./DeleteNodeIcon-50c187c2.js";import"./EditNodeIcon-f75569c2.js";import"./SearchIcon-0d1c560d.js";import"./SoundIcon-9ead6a96.js";import"./SucessFeedBackIcon-50c502f2.js";import"./three.module-1c1ec8b9.js";import"./TextareaAutosize-ec51b429.js";import"./index-e791815d.js";import"./index-3e214976.js";import"./index-29b67cda.js";import"./ClipLoader-8ab12cf7.js";import"./Skeleton-a771a089.js";import"./Stack-26b160a2.js";import"./index-5cf48340.js";import"./FormControlLabel-a2216edd.js";import"./Typography-85a0e814.js";import"./createSvgIcon-6f492f28.js";import"./isPlainObject-855f5a1e.js";function D(t){const[i,s,r]=t.split(":").map(Number);return Number((i*60*60*1e3+s*60*1e3+r*1e3).toFixed(6))}const Z=n.memo(()=>{const t=W(a=>a.isPlaying),i=W(a=>a.setIsPlaying),s=W(a=>a.setVolume),r=W(a=>a.setPlaybackSpeed),c=W(a=>a.playbackSpeed),o=W(a=>a.playerRef),[x,b]=n.useState(!1),m=[.5,1,1.5,2],g=()=>{if(o){const a=o.getCurrentTime()-15;o.seekTo(a,"seconds")}},p=()=>{if(o){const a=o.getCurrentTime()+15;o.seekTo(a,"seconds")}},j=()=>{i(!t)},d=()=>{b(!x),s(x?1:0)},h=()=>{const I=(m.indexOf(c)+1)%m.length,F=m[I];if(r(F),o){const P=o.getInternalPlayer();P&&typeof P.playbackRate<"u"&&(P.playbackRate=F)}};return e.jsxs(ke,{children:[e.jsx(Pe,{onClick:d,children:x?e.jsx(be,{}):e.jsx(we,{})}),e.jsx(Te,{onClick:g,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(Ce,{"data-testid":"play-pause-button",onClick:j,size:"small",children:t?e.jsx(he,{"data-testid":"pause-icon"}):e.jsx(ge,{"data-testid":"play-icon"})}),e.jsx(Ie,{onClick:p,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(_e,{onClick:h,children:[c,"x"]})]})});Z.displayName="Controls";const ke=f(S).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,Ce=f(xe)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Te=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Ie=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Pe=f.div`
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
`,_e=f.button`
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
`,ee=n.memo(({left:t,width:i,title:s})=>e.jsx(Ee,{style:{left:`${t}%`,width:`calc(${i}%)`},children:e.jsx("div",{className:"title",children:s})}));ee.displayName="Chapter";const Ee=f.div`
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
`,te=n.memo(({chapters:t,duration:i})=>i?e.jsx(e.Fragment,{children:t.map((s,r)=>{var g,p,j,d;const c=(g=s==null?void 0:s.properties)!=null&&g.timestamp?D(s.properties.timestamp)/1e3:0,o=(j=(p=t[r+1])==null?void 0:p.properties)!=null&&j.timestamp?D((d=t[r+1].properties)==null?void 0:d.timestamp)/1e3:i,x=Math.floor(c/i*100),m=Math.floor(o/i*100)-x;return e.jsx(ee,{left:x,title:s.name,width:m},`${s.ref_id}_${r}`)})}):null);te.displayName="Chapters";const re=n.memo(({type:t,left:i,img:s})=>{var m,g;const r=K(p=>p.normalizedSchemasByType),c=(m=r[t])==null?void 0:m.primary_color,o=(g=r[t])==null?void 0:g.icon,x=o?`/svg-icons/${o}.svg`:"",b={iconStart:s||x,color:c??T.THING};return e.jsx(Re,{style:{left:`${i}%`},children:e.jsx(se,{...b,label:t})})});re.displayName="Marker";const se=n.memo(({iconStart:t,color:i,label:s})=>e.jsx($e,{color:i,children:t&&e.jsx("img",{alt:s,className:"badge__img",onError:console.log,src:t})}));se.displayName="Badge";const $e=f(S).attrs({direction:"row"})`
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
`,Re=f.div`
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
`,ne=n.memo(({markers:t,duration:i})=>e.jsx(e.Fragment,{children:t.map((s,r)=>{var b;const c=Math.floor(((s==null?void 0:s.start)||0)/i*100),o=(s==null?void 0:s.node_type)||"",x=((b=s==null?void 0:s.properties)==null?void 0:b.image_url)||"";return e.jsx(re,{img:x,left:c,type:o},`${s.ref_id}_${r}`)})}));ne.displayName="Markers";const Ne=({duration:t,markers:i,handleProgressChange:s,playingTIme:r,chapters:c})=>{const o=10/t*100;return e.jsxs(Me,{children:[e.jsx(Fe,{max:t,onChange:s,value:r,width:o}),c&&e.jsx(oe,{children:e.jsx(te,{chapters:c,duration:t})}),e.jsx(We,{children:e.jsx(ne,{duration:t,markers:i})})]})},oe=f(S)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,Me=f(S)`
  position: relative;
  flex: 1 1 100%;

  &:hover {
    ${oe} {
      display: block;
    }
  }
`,We=f(S)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,Fe=f(je)`
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
      width: ${({width:t})=>`${t}%`};
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
`,Ae=({markers:t,chapters:i})=>{const{playingNode:s,playerRef:r}=W(g=>g),[c,o]=n.useState(0),x=s,b=n.useCallback((g,p)=>{const j=Array.isArray(p)?p[0]:p;r&&r.seekTo(j,"seconds")},[r]);n.useEffect(()=>{const g=setInterval(()=>{if(r&&o){const p=r.getCurrentTime();o(p)}},500);return()=>clearInterval(g)},[r,o]);const m=(r==null?void 0:r.getDuration())||0;return x?e.jsxs(Be,{children:[e.jsx(Z,{}),e.jsx(Ne,{chapters:i,duration:m,handleProgressChange:b,markers:t,playingTIme:c})]}):null},Be=f(S).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${T.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Ge=(t,i)=>{let s=0,r=t.length-1;for(;s<=r;){const c=Math.floor((s+r)/2),o=t[c],{start:x,end:b}=o.properties;if(i>=x&&i<=b)return o;i<x?r=c-1:s=c+1}return null},ze=({mediaUrl:t})=>{const i=n.useRef(null),[s,r]=n.useState("ready"),[c,o]=n.useState(!1),{setActiveEdge:x}=Q(w=>w),{dataInitial:b}=U(w=>w),{isPlaying:m,playingTime:g,setIsPlaying:p,setPlayingTime:j,setDuration:d,playingNode:h,volume:a,setHasError:I,resetPlayer:F,isSeeking:P,setIsSeeking:z,setPlayerRef:G,playerRef:k,playbackSpeed:L}=W(w=>w);n.useEffect(()=>()=>F(),[F]),n.useEffect(()=>{h&&!c&&(j(0),d(0),o(!1))},[h,j,d,o,c]),n.useEffect(()=>{P&&k&&(k.seekTo(g,"seconds"),z(!1))},[g,P,z,k]);const O=n.useCallback(()=>{p(!m)},[m,p]),u=()=>{I(!0),r("error")},l=n.useCallback(w=>{w.code},[O]);n.useEffect(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[l]);const y=n.useMemo(()=>((b==null?void 0:b.links.filter(v=>{var $;return($=v==null?void 0:v.properties)==null?void 0:$.start}))||[]).slice().sort((v,$)=>{var C,B;return((C=v==null?void 0:v.properties)==null?void 0:C.start)-((B=$==null?void 0:$.properties)==null?void 0:B.start)}),[b]),_=w=>{if(!P){const A=w.playedSeconds,v=Ge(y,A);x(v||null)}},R=()=>{k&&r("ready")},E=n.useCallback(()=>{m||p(!0)},[p,m]),M=n.useCallback(()=>{m&&p(!1)},[p,m]),N=w=>{w.stopPropagation()},H=n.useCallback(w=>{!k&&w&&G(w)},[G,k]);return t?e.jsxs(He,{ref:i,tabIndex:0,children:[e.jsx(Ve,{isFullScreen:!1,children:e.jsx(ae,{size:120,src:(h==null?void 0:h.image_url)||"",type:"clip"})}),e.jsx(Le,{isFullScreen:!1,onClick:N,children:e.jsx(ve,{ref:H,height:"219px",onBuffer:()=>r("buffering"),onBufferEnd:()=>r("ready"),onError:u,onPause:M,onPlay:E,onProgress:_,onReady:R,playbackRate:L,playing:m,url:t||"",volume:a,width:"100%"})}),s==="error"?e.jsx(De,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},He=f(S)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Ve=f(S)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,De=f(S)`
  height: 60px;
  padding: 12px 16px;
  color: ${T.primaryRed};
`,Le=f.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Oe=n.memo(ze),ie=n.forwardRef(({active:t,start:i,text:s},r)=>e.jsxs(qe,{ref:r,className:ce({active:t}),children:[e.jsx(Xe,{children:i}),e.jsx(Ye,{children:e.jsx("span",{children:s})})]}));ie.displayName="ParagraphComponent";const Y=n.memo(ie,(t,i)=>t.active===i.active),qe=f(S)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${T.AI_HIGHLIGHT};
  }
`,Xe=f.span`
  background: ${T.lightBlue100};
  color: ${T.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Ye=f.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${T.AI_HIGHLIGHT};
  }
`,Ue=({transcriptString:t,isFirst:i})=>{const[s,r]=n.useState(0),[c,o]=n.useState(!1),{playerRef:x}=W(d=>d),b=t.replace(/^["']|["']$/g,""),m=JSON.parse(b),g=n.useRef(null),p=n.useRef(null),j=n.useRef(null);return n.useEffect(()=>{const d=setInterval(()=>{if(x&&r){const h=x.getCurrentTime();r(h)}},100);return()=>clearInterval(d)},[x,r]),n.useEffect(()=>{const d=()=>{o(!0),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{o(!1)},1e3)},h=p.current;return h&&h.addEventListener("scroll",d),()=>{h&&h.removeEventListener("scroll",d)}},[]),n.useEffect(()=>{!c&&g.current&&g.current.scrollIntoView({behavior:"smooth",block:"center"})},[s,c]),e.jsx(Je,{ref:p,children:e.jsx(e.Fragment,{children:i?e.jsx(e.Fragment,{children:m[0].start>s?e.jsx(Y,{active:!1,start:X(m[0].start),text:m[0].text}):e.jsx(e.Fragment,{children:m.map(d=>{const h=X(d.start),a=d.start<s&&s<d.end;return!i||d.start<=s+5?e.jsx(Y,{ref:a?g:null,active:a,start:h,text:d.text},`${d.start}-${d.end}`):null})})}):e.jsx(e.Fragment,{children:m.map(d=>{const h=X(d.start),a=d.start<s&&s<d.end;return e.jsx(Y,{ref:a?g:null,active:a,start:h,text:d.text},`${d.start}-${d.end}`)})})})})},Je=f.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Ke=({name:t})=>{var h;const i=V(a=>a.clips),{playerRef:s}=W(a=>a),[r,c]=n.useState(0),[o,x]=n.useState(null),[b,m]=n.useState(!0),[g,p,j]=Q(a=>[a.setActiveNode,a.activeNode,a.simulation]);n.useEffect(()=>{const a=setInterval(()=>{if(s&&c){const I=s.getCurrentTime();c(I)}},100);return()=>clearInterval(a)},[s,c]),n.useEffect(()=>{r&&(()=>{var F;const I=i.find(P=>{var k;const[z,G]=d((k=P==null?void 0:P.properties)==null?void 0:k.timestamp);return z<=r&&r<G});o&&(I==null?void 0:I.ref_id)===(o==null?void 0:o.ref_id)||!I||(m((I==null?void 0:I.ref_id)===((F=i[0])==null?void 0:F.ref_id)),x(I||null))})()},[r,i,o]),n.useEffect(()=>{if(o&&(!p||o.ref_id!==p.ref_id)){const a=j==null?void 0:j.nodes().find(I=>I.ref_id===o.ref_id);typeof(a==null?void 0:a.fx)=="number"&&g(a)}},[o,p,g,j]);const d=a=>a?a.split("-").map(Number):[0,0];return e.jsxs(Qe,{children:[e.jsx(S,{className:"heading",children:t}),o?e.jsx(Ze,{direction:"row",children:((h=o.properties)==null?void 0:h.transcript)&&e.jsx(Ue,{isFirst:b,transcriptString:o.properties.transcript})}):null]})},Qe=f(S)`
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
`,Ze=f(S)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,et=()=>{var i;const t=V(s=>s.selectedEpisode);return e.jsxs(tt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(rt,{children:((i=t==null?void 0:t.properties)==null?void 0:i.source_link)&&e.jsx(Oe,{mediaUrl:t.properties.source_link})}),e.jsx(Ke,{name:(t==null?void 0:t.name)||""})]})},tt=f(S)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[t.breakpoints.up("sm")]:{width:Se,gap:"10px"}})),rt=f(S)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),st=t=>{const i=t.edges.filter(r=>{var c;return(c=r==null?void 0:r.properties)==null?void 0:c.start}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return t.nodes.filter(r=>t.edges.some(c=>c.source===r.ref_id||c.target===r.ref_id)).map(r=>{const c=i.find(o=>r.ref_id===o.source||r.ref_id===o.target);return{...r,start:(c==null?void 0:c.start)||0}}).filter(r=>r&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},Ft=()=>{const{isFetching:t,runningProjectId:i}=U(u=>u),s=U(u=>u.addNewNode),[r,c]=n.useState(!1),o=V(u=>u.setSelectedEpisode),x=V(u=>u.setClips),b=V(u=>u.clips),m=V(u=>u.setChapters),g=V(u=>u.chapters),p=ye(),j=n.useRef(null),d=n.useRef(null),h=n.useRef(null),[a,I]=n.useState([]),{setSchemas:F}=K(u=>u),P=n.useRef(null),z=n.useRef(null),G=le(),{episodeId:k}=pe(),{setPlayingNode:L}=W(u=>u);n.useEffect(()=>{(async()=>{try{const l=await ue();F(l.schemas.filter(y=>!y.is_deleted))}catch(l){console.error("Error fetching schema:",l)}})()},[F]),n.useEffect(()=>{k&&(async l=>{try{const y=await fe(l);y&&(L(y),o(y),s({nodes:[y],edges:[]}))}catch(y){G("/"),console.error(y)}})(k)},[k,L,o,s,G]),n.useEffect(()=>{k&&(async()=>{try{const l=await q(k||"",0,50,{nodeType:["Show","Host","Guest"],useSubGraph:!1}),y=await q(k||"",0,1e3,{nodeType:["Clip"],useSubGraph:!1});if(s({nodes:l!=null&&l.nodes?l==null?void 0:l.nodes:[],edges:l!=null&&l.edges?l.edges:[]}),y!=null&&y.nodes){const _=y.nodes.filter(R=>{var E;return(E=R.properties)==null?void 0:E.timestamp}).sort((R,E)=>{var H,w,A,v;const M=Number((w=(H=R.properties)==null?void 0:H.timestamp)==null?void 0:w.split("-")[0]),N=Number((v=(A=E.properties)==null?void 0:A.timestamp)==null?void 0:v.split("-")[0]);return M-N});x(_)}}catch(l){G("/"),console.error("Error fetching initial data:",l)}})()},[k,s,x,G]),n.useEffect(()=>{k&&(async()=>{try{const l=await q(k||"",0,50,{nodeType:["Chapter"],useSubGraph:!1});if(l!=null&&l.nodes){const y=l==null?void 0:l.nodes.filter(_=>_.node_type==="Chapter").sort((_,R)=>{var E,M;return D(((E=_==null?void 0:_.properties)==null?void 0:E.timestamp)||"")-D(((M=R==null?void 0:R.properties)==null?void 0:M.timestamp)||"")});m(y)}}catch{console.log("no chapters was fetched")}})()},[k,m]),n.useEffect(()=>{if(!b||!g)return;(async()=>{var l,y;try{const _=(b==null?void 0:b.map(M=>M.ref_id).filter(Boolean))||[],R=[],E={nodes:((l=h.current)==null?void 0:l.nodes)||[],edges:((y=h.current)==null?void 0:y.edges)||[]};for(const M of _){const N=await q(M,0,50);if(N){const w=st(N).map(A=>{var $;const v=(($=g.find(C=>{var B;return A.start&&D(((B=C==null?void 0:C.properties)==null?void 0:B.timestamp)||"")>=A.start*1e3}))==null?void 0:$.ref_id)||"";return{...A,neighbourHood:v}});E.nodes.push(...w||[]),E.edges.push(...(N==null?void 0:N.edges)||[]),R.push(...w),h.current=E}}I(R)}catch(_){console.error("Error processing clip nodes:",_)}})()},[b,I,g]);const O=n.useCallback(u=>{t||(P.current||(P.current={nodes:[],edges:[]}),u.edges&&P.current.edges.push(...u.edges),u.nodes&&P.current.nodes.push(...u.nodes),z.current&&clearTimeout(z.current),z.current=setTimeout(()=>{if(P.current){const{nodes:l,edges:y}=P.current,_={nodes:l,edges:y};P.current={nodes:[],edges:[]},s(_)}},3e3))},[s,t]);return n.useEffect(()=>(p&&(p.connect(),p.on("connect_error",u=>{console.error("Socket connection error:",u)}),i&&p.on("new_node_created",O)),()=>{p&&p.off()}),[p,O,i]),n.useEffect(()=>{const u=l=>{const{playerRef:y}=W.getState();if(d.current!==null){if(l-d.current>1e3){if(h.current&&y){const{nodes:R,edges:E}=h.current,M=y==null?void 0:y.getCurrentTime(),[N,H]=E.reduce(([v,$],C)=>{var B,J;return((B=C==null?void 0:C.properties)==null?void 0:B.start)!==void 0&&((J=C==null?void 0:C.properties)==null?void 0:J.start)<M+1?v.push(C):$.push(C),[v,$]},[[],[]]),[w,A]=R.reduce(([v,$],C)=>(N.some(B=>B.target===C.ref_id||B.source===C.ref_id)?v.push(C):$.push(C),[v,$]),[[],[]]);h.current={nodes:A,edges:H},(w.length||N.length)&&s({nodes:w,edges:N})}d.current=l}}else d.current=l;j.current=requestAnimationFrame(u)};return j.current=requestAnimationFrame(u),()=>{j.current&&cancelAnimationFrame(j.current)}},[h,s]),n.useEffect(()=>{if(i)try{p==null||p.emit("update_project_id",{id:i})}catch(u){console.error(u)}},[i,p]),e.jsxs(nt,{children:[e.jsx(ot,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(S,{onClick:()=>c(!r),children:e.jsx(de,{})}),e.jsx(et,{})]}),e.jsx(it,{children:e.jsx(S,{basis:"100%",grow:1,shrink:1,children:e.jsx(me,{})})})]})}),e.jsx(at,{children:e.jsx(Ae,{chapters:g,markers:a})})]})},nt=f.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,ot=f(S)`
  flex: 1;
  overflow: hidden;
`,it=f(S)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,at=f(S)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{Ft as MindSet};
