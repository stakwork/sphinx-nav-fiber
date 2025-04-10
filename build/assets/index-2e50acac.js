import{r as i,j as e,s as u,g as S,F as j,o as X,c as Y,A as oe,p as ie,i as ae,q as ce,H as le,t as pe,v as de}from"./index-ddba5714.js";import{t as O,u as H,C as ue}from"./index-56630dc2.js";import{U as fe}from"./index-2083840e.js";import{u as T,a as me,b as ge,I as he,c as J,d as xe}from"./index-a3c41c69.js";import{M as ye,V as be}from"./index-c5bc6208.js";import{S as we,R as je,s as V,M as ve}from"./index-212b1c09.js";import"./string-a277709d.js";import"./index-4c9d888b.js";import"./three.module-976f5d36.js";import"./index-dfecc567.js";import"./TextareaAutosize-e56b71f5.js";import"./CheckIcon-a1334902.js";import"./index-6c744bf6.js";import"./index-b9ba8ee2.js";import"./ClipLoader-4f1bfd14.js";import"./clsx-1b372696.js";import"./SourcesTableIcon-7cd964d6.js";import"./DeleteNodeIcon-77b1e5b3.js";import"./SoundIcon-93114f3d.js";import"./SucessFeedBackIcon-b51707af.js";import"./Skeleton-898ad52e.js";import"./index-5054beb5.js";import"./Stack-020a49e5.js";import"./FormControlLabel-98837f44.js";import"./Typography-67b785a1.js";import"./createSvgIcon-3b3e8f48.js";import"./isPlainObject-5bd64986.js";const K=i.memo(()=>{const r=T(n=>n.isPlaying),a=T(n=>n.setIsPlaying),s=T(n=>n.setVolume),t=T(n=>n.setPlaybackSpeed),c=T(n=>n.playbackSpeed),o=T(n=>n.playerRef),[d,g]=i.useState(!1),m=[.5,1,1.5,2],h=()=>{if(o){const n=o.getCurrentTime()-15;o.seekTo(n,"seconds")}},f=()=>{if(o){const n=o.getCurrentTime()+15;o.seekTo(n,"seconds")}},w=()=>{a(!r)},p=()=>{g(!d),s(d?1:0)},l=()=>{const x=(m.indexOf(c)+1)%m.length,P=m[x];if(t(P),o){const k=o.getInternalPlayer();k&&typeof k.playbackRate<"u"&&(k.playbackRate=P)}};return e.jsxs(Se,{children:[e.jsx(Pe,{onClick:p,children:d?e.jsx(ye,{}):e.jsx(be,{})}),e.jsx(Ce,{onClick:h,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(ke,{"data-testid":"play-pause-button",onClick:w,size:"small",children:r?e.jsx(me,{"data-testid":"pause-icon"}):e.jsx(ge,{"data-testid":"play-icon"})}),e.jsx(Ie,{onClick:f,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(_e,{onClick:l,children:[c,"x"]})]})});K.displayName="Controls";const Se=u(j).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${S.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${S.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,ke=u(he)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Ce=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Ie=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Pe=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${S.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${S.DROPDOWN_BG};
  }
`,_e=u.button`
  margin-top: 4px;
  background: ${S.BG1};
  color: ${S.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,Q=i.memo(({left:r,width:a,title:s})=>e.jsx($e,{style:{left:`${r}%`,width:`calc(${a}%)`},children:e.jsx("div",{className:"title",children:s})}));Q.displayName="Chapter";const $e=u.div`
  position: absolute;
  top: -3px;
  height: 100%;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  & + & {
    border-left: 0.1px solid ${S.white};
  }

  .title {
    position: absolute;
    bottom: calc(100% + 16px);
    display: none;
    color: ${S.white};
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
`,Z=i.memo(({chapters:r,duration:a})=>a?e.jsx(e.Fragment,{children:r.map((s,t)=>{var h,f,w,p,l;const c=(h=s==null?void 0:s.properties)!=null&&h.timestamp?O(s.properties.timestamp)/1e3:0,o=(w=(f=r[t+1])==null?void 0:f.properties)!=null&&w.timestamp?O((p=r[t+1].properties)==null?void 0:p.timestamp)/1e3:a,d=Math.floor(c/a*100),m=Math.floor(o/a*100)-d;return e.jsx(Q,{left:d,title:((l=s==null?void 0:s.properties)==null?void 0:l.name)||(s==null?void 0:s.name)||"",width:m},`${s.ref_id}_${t}`)})}):null);Z.displayName="Chapters";const ee=i.memo(({type:r,left:a,img:s})=>{var m,h;const t=X(f=>f.normalizedSchemasByType),c=(m=t[r])==null?void 0:m.primary_color,o=(h=t[r])==null?void 0:h.icon,d=o?`/svg-icons/${o}.svg`:"",g={iconStart:s||d,color:c??S.THING};return e.jsx(Ee,{style:{left:`${a}%`},children:e.jsx(te,{...g,label:r})})});ee.displayName="Marker";const te=i.memo(({iconStart:r,color:a,label:s})=>e.jsx(Te,{color:a,children:r&&e.jsx("img",{alt:s,className:"badge__img",onError:console.log,src:r})}));te.displayName="Badge";const Te=u(j).attrs({direction:"row"})`
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
`,Ee=u.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${S.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,re=i.memo(({markers:r,duration:a})=>e.jsx(e.Fragment,{children:r.map((s,t)=>{var g;const c=Math.floor(((s==null?void 0:s.start)||0)/a*100),o=(s==null?void 0:s.node_type)||"",d=((g=s==null?void 0:s.properties)==null?void 0:g.image_url)||"";return e.jsx(ee,{img:d,left:c,type:o},`${s.ref_id}_${t}`)})}));re.displayName="Markers";const Re=({duration:r,markers:a,handleProgressChange:s,playingTIme:t,chapters:c})=>{const o=10/r*100;return e.jsxs(Me,{children:[e.jsx(We,{max:r,onChange:s,value:t,width:o}),c&&e.jsx(se,{children:e.jsx(Z,{chapters:c,duration:r})}),e.jsx(Ne,{children:e.jsx(re,{duration:r,markers:a})})]})},se=u(j)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,Me=u(j)`
  position: relative;
  flex: 1 1 100%;

  &:hover {
    ${se} {
      display: block;
    }
  }
`,Ne=u(j)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,We=u(we)`
  && {
    z-index: 20;
    color: ${S.white};
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
      background-color: ${S.primaryBlue};
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
`,Ae=({markers:r,chapters:a})=>{const{playingNode:s,playerRef:t}=T(h=>h),[c,o]=i.useState(0),d=s,g=i.useCallback((h,f)=>{const w=Array.isArray(f)?f[0]:f;t&&t.seekTo(w,"seconds")},[t]);i.useEffect(()=>{const h=setInterval(()=>{if(t&&o){const f=t.getCurrentTime();o(f)}},500);return()=>clearInterval(h)},[t,o]);const m=(t==null?void 0:t.getDuration())||0;return d?e.jsxs(Fe,{children:[e.jsx(K,{}),e.jsx(Re,{chapters:a,duration:m,handleProgressChange:g,markers:r,playingTIme:c})]}):null},Fe=u(j).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${S.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Be=(r,a)=>{let s=0,t=r.length-1;for(;s<=t;){const c=Math.floor((s+t)/2),o=r[c],{start:d,end:g}=o.properties;if(a>=d&&a<=g)return o;a<d?t=c-1:s=c+1}return null},De=({mediaUrl:r})=>{const a=i.useRef(null),[s,t]=i.useState("ready"),[c,o]=i.useState(!1),{setActiveEdge:d}=J(b=>b),{dataInitial:g}=Y(b=>b),{isPlaying:m,playingTime:h,setIsPlaying:f,setPlayingTime:w,setDuration:p,playingNode:l,volume:n,setHasError:x,resetPlayer:P,isSeeking:k,setIsSeeking:E,setPlayerRef:M,playerRef:C,playbackSpeed:A}=T(b=>b);i.useEffect(()=>()=>P(),[P]),i.useEffect(()=>{l&&!c&&(w(0),p(0),o(!1))},[l,w,p,o,c]),i.useEffect(()=>{k&&C&&(C.seekTo(h,"seconds"),E(!1))},[h,k,E,C]);const $=i.useCallback(()=>{f(!m)},[m,f]),F=()=>{x(!0),t("error")},z=i.useCallback(b=>{b.code},[$]);i.useEffect(()=>(window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}),[z]);const N=i.useMemo(()=>((g==null?void 0:g.links.filter(v=>{var R;return(R=v==null?void 0:v.properties)==null?void 0:R.start}))||[]).slice().sort((v,R)=>{var q,U;return((q=v==null?void 0:v.properties)==null?void 0:q.start)-((U=R==null?void 0:R.properties)==null?void 0:U.start)}),[g]),W=b=>{if(!k){const D=b.playedSeconds,v=Be(N,D);d(v||null)}},B=()=>{C&&t("ready")},G=i.useCallback(()=>{m||f(!0)},[f,m]),_=i.useCallback(()=>{m&&f(!1)},[f,m]),I=b=>{b.stopPropagation()},y=i.useCallback(b=>{!C&&b&&M(b)},[M,C]);return r?e.jsxs(ze,{ref:a,tabIndex:0,children:[e.jsx(Ge,{isFullScreen:!1,children:e.jsx(oe,{size:120,src:(l==null?void 0:l.image_url)||"",type:"clip"})}),e.jsx(Ve,{isFullScreen:!1,onClick:I,children:e.jsx(je,{ref:y,height:"219px",onBuffer:()=>t("buffering"),onBufferEnd:()=>t("ready"),onError:F,onPause:_,onPlay:G,onProgress:W,onReady:B,playbackRate:A,playing:m,url:r||"",volume:n,width:"100%"})}),s==="error"?e.jsx(He,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},ze=u(j)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Ge=u(j)`
  position: absolute;
  top: ${r=>r.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,He=u(j)`
  height: 60px;
  padding: 12px 16px;
  color: ${S.primaryRed};
`,Ve=u.div`
  margin: ${r=>r.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Le=i.memo(De),ne=i.forwardRef(({active:r,start:a,text:s},t)=>e.jsxs(Oe,{ref:t,className:ie({active:r}),children:[e.jsx(qe,{children:a}),e.jsx(Ue,{children:e.jsx("span",{children:s})})]}));ne.displayName="ParagraphComponent";const L=i.memo(ne,(r,a)=>r.active===a.active),Oe=u(j)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${S.AI_HIGHLIGHT};
  }
`,qe=u.span`
  background: ${S.lightBlue100};
  color: ${S.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Ue=u.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${S.AI_HIGHLIGHT};
  }
`,Xe=({transcriptString:r,isFirst:a})=>{const[s,t]=i.useState(0),[c,o]=i.useState(!1),{playerRef:d}=T(p=>p),g=r.replace(/^["']|["']$/g,""),m=JSON.parse(g),h=i.useRef(null),f=i.useRef(null),w=i.useRef(null);return i.useEffect(()=>{const p=setInterval(()=>{if(d&&t){const l=d.getCurrentTime();t(l)}},100);return()=>clearInterval(p)},[d,t]),i.useEffect(()=>{const p=()=>{o(!0),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{o(!1)},1e3)},l=f.current;return l&&l.addEventListener("scroll",p),()=>{l&&l.removeEventListener("scroll",p)}},[]),i.useEffect(()=>{!c&&h.current&&h.current.scrollIntoView({behavior:"smooth",block:"center"})},[s,c]),e.jsx(Ye,{ref:f,children:e.jsx(e.Fragment,{children:a?e.jsx(e.Fragment,{children:m[0].start>s?e.jsx(L,{active:!1,start:V(m[0].start),text:m[0].text}):e.jsx(e.Fragment,{children:m.map(p=>{const l=V(p.start),n=p.start<s&&s<p.end;return!a||p.start<=s+5?e.jsx(L,{ref:n?h:null,active:n,start:l,text:p.text},`${p.start}-${p.end}`):null})})}):e.jsx(e.Fragment,{children:m.map(p=>{const l=V(p.start),n=p.start<s&&s<p.end;return e.jsx(L,{ref:n?h:null,active:n,start:l,text:p.text},`${p.start}-${p.end}`)})})})})},Ye=u.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Je=({name:r})=>{var l;const a=H(n=>n.clips),{playerRef:s}=T(n=>n),[t,c]=i.useState(0),[o,d]=i.useState(null),[g,m]=i.useState(!0),[h,f]=J(n=>[n.setActiveNode,n.activeNode]),w=xe(n=>n.simulation);i.useEffect(()=>{const n=setInterval(()=>{if(s&&c){const x=s.getCurrentTime();c(x)}},100);return()=>clearInterval(n)},[s,c]),i.useEffect(()=>{t&&(()=>{var P;const x=a.find(k=>{var C;const[E,M]=p((C=k==null?void 0:k.properties)==null?void 0:C.timestamp);return E<=t&&t<M});o&&(x==null?void 0:x.ref_id)===(o==null?void 0:o.ref_id)||!x||(m((x==null?void 0:x.ref_id)===((P=a[0])==null?void 0:P.ref_id)),d(x||null))})()},[t,a,o]),i.useEffect(()=>{if(o&&(!f||o.ref_id!==f.ref_id)){const n=w==null?void 0:w.nodes().find(x=>x.ref_id===o.ref_id);typeof(n==null?void 0:n.fx)=="number"&&h(n)}},[o,f,h,w]);const p=n=>n?n.split("-").map(Number):[0,0];return e.jsxs(Ke,{children:[e.jsx(j,{className:"heading",children:r}),o?e.jsx(Qe,{direction:"row",children:((l=o.properties)==null?void 0:l.transcript)&&e.jsx(Xe,{isFirst:g,transcriptString:o.properties.transcript})}):null]})},Ke=u(j)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${S.white};
  background: ${S.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
`,Qe=u(j)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,Ze=()=>{var a;const r=H(s=>s.selectedEpisode);return e.jsxs(et,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(tt,{children:((a=r==null?void 0:r.properties)==null?void 0:a.media_url)&&e.jsx(Le,{mediaUrl:r.properties.media_url})}),e.jsx(Je,{name:(r==null?void 0:r.name)||""})]})},et=u(j)(({theme:r})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[r.breakpoints.up("sm")]:{width:ve,gap:"10px"}})),tt=u(j)(({theme:r})=>({width:"100%",marginBottom:"20px",[r.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),rt=r=>{const a=r.edges.filter(t=>{var c;return(c=t==null?void 0:t.properties)==null?void 0:c.start}).map(t=>({source:t.source,target:t.target,start:t.properties.start}));return r.nodes.filter(t=>r.edges.some(c=>c.source===t.ref_id||c.target===t.ref_id)).map(t=>{const c=a.find(o=>t.ref_id===o.source||t.ref_id===o.target);return{...t,start:(c==null?void 0:c.start)||0}}).filter(t=>t&&t.node_type!=="Clip"&&t.node_type!=="Episode"&&t.node_type!=="Show")},Nt=()=>{const r=Y(l=>l.addNewNode),a=H(l=>l.clips),s=H(l=>l.fetchEpisodeData),t=H(l=>l.chapters),c=i.useRef(null),o=i.useRef(null),d=i.useRef(null),g=i.useRef(null),[m,h]=i.useState([]),{setSchemas:f}=X(l=>l),w=ae(),{episodeId:p}=ce();return i.useEffect(()=>{(async()=>{try{const n=await pe();f(n.schemas.filter(x=>!x.is_deleted))}catch(n){console.error("Error fetching schema:",n)}})()},[f]),i.useEffect(()=>{p&&(async()=>{try{s(p||"")}catch(n){w("/"),console.error("Error fetching initial data:",n)}})()},[p,w,s]),i.useEffect(()=>{if(!a||!t)return;(async()=>{var n,x,P,k;try{const E=(a==null?void 0:a.map(A=>A.ref_id).filter(Boolean))||[],M=[],C={nodes:((n=d.current)==null?void 0:n.nodes)||[],edges:((x=d.current)==null?void 0:x.edges)||[]};for(const A of E){const $=await de(A,["-Clip","-Episode"],[],"",!0,0,2,50),F=$.nodes.filter(N=>N.node_type==="Claim"),z=$.edges.filter(N=>F.some(W=>W.ref_id===N.source||W.ref_id===N.target));if(g.current={nodes:[...((P=g.current)==null?void 0:P.nodes)||[],...F],edges:[...((k=g.current)==null?void 0:k.edges)||[],...z]},$){const W=rt($).map(B=>{var _;const G=((_=t.find(I=>{var y;return B.start&&O(((y=I==null?void 0:I.properties)==null?void 0:y.timestamp)||"")>=B.start*1e3}))==null?void 0:_.ref_id)||"";return{...B,neighbourHood:G}});C.nodes.push(...W||[]),C.edges.push(...($==null?void 0:$.edges)||[]),M.push(...W),d.current=C}}h(M)}catch(E){console.error("Error processing clip nodes:",E)}})()},[a,h,t,r]),i.useEffect(()=>{const l=n=>{var P;const{playerRef:x}=T.getState();if(o.current!==null){if(n-o.current>2e3){if(d.current&&x){const{nodes:E,edges:M}=d.current,C=x==null?void 0:x.getCurrentTime(),[A,$]=M.reduce(([_,I],y)=>{var b,D;return((b=y==null?void 0:y.properties)==null?void 0:b.start)!==void 0&&((D=y==null?void 0:y.properties)==null?void 0:D.start)<C+1?_.push(y):I.push(y),[_,I]},[[],[]]),[F,z]=E.reduce(([_,I],y)=>(A.some(b=>b.target===y.ref_id||b.source===y.ref_id)?_.push(y):I.push(y),[_,I]),[[],[]]);d.current={nodes:z,edges:$};const[N,W]=(((P=g.current)==null?void 0:P.edges)||[]).reduce(([_,I],y)=>{var b,D;if(F.some(v=>v.ref_id===y.source)){const v=(((b=g.current)==null?void 0:b.nodes)||[]).find(R=>R.ref_id===y.target);v&&(_.push(v),I.push(y))}else if(F.some(v=>v.ref_id===y.target)){const v=(((D=g.current)==null?void 0:D.nodes)||[]).find(R=>R.ref_id===y.source);v&&(_.push(v),I.push(y))}return[_,I]},[[],[]]),B=[...F,...N],G=[...A,...W];(B.length||G.length)&&r({nodes:B,edges:G})}o.current=n}}else o.current=n;c.current=requestAnimationFrame(l)};return c.current=requestAnimationFrame(l),()=>{c.current&&cancelAnimationFrame(c.current)}},[d,r]),e.jsxs(st,{children:[e.jsx(nt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(j,{children:e.jsx(le,{})}),e.jsx(Ze,{})]}),e.jsx(ot,{children:e.jsx(j,{basis:"100%",grow:1,shrink:1,children:e.jsx(fe,{})})})]})}),e.jsx(it,{children:e.jsx(Ae,{chapters:t,markers:m})}),e.jsx(ue,{})]})},st=u.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,nt=u(j)`
  flex: 1;
  overflow: hidden;
`,ot=u(j)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,it=u(j)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{Nt as MindSet};
