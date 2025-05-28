import{r as o,j as e,s as m,g as C,F as v,o as K,c as Q,A as ce,p as le,i as pe,q as de,H as ue,t as fe,v as Y}from"./index-d285c35e.js";import{t as O,u as L,C as me}from"./index-dfcdab22.js";import{U as ge}from"./index-a31868fd.js";import{u as B,a as he,b as xe,I as ye,c as Z,d as be}from"./index-6ba4ed6e.js";import{M as we,V as je}from"./index-563cf1a5.js";import{S as ve,R as ke,s as V,M as Se}from"./index-6eb80361.js";import"./string-a277709d.js";import"./index-7619a127.js";import"./three.module-9722a9fc.js";import"./index-573110c6.js";import"./TextareaAutosize-b00862c7.js";import"./CheckIcon-fe547295.js";import"./index-862b17c6.js";import"./index-0187b948.js";import"./ClipLoader-7cb62567.js";import"./clsx-86ce0c02.js";import"./SourcesTableIcon-2c44db36.js";import"./DeleteNodeIcon-63817670.js";import"./SoundIcon-68a19546.js";import"./SucessFeedBackIcon-9f66d1c0.js";import"./Skeleton-ea403916.js";import"./index-998d1df4.js";import"./Stack-f77e3c08.js";import"./FormControlLabel-7915f97e.js";import"./Typography-1dc23d5d.js";import"./createSvgIcon-100bea89.js";import"./isPlainObject-28732d32.js";const ee=o.memo(()=>{const s=B(r=>r.isPlaying),i=B(r=>r.setIsPlaying),n=B(r=>r.setVolume),t=B(r=>r.setPlaybackSpeed),a=B(r=>r.playbackSpeed),c=B(r=>r.playerRef),[u,g]=o.useState(!1),f=[.5,1,1.5,2],h=()=>{if(c){const r=c.getCurrentTime()-15;c.seekTo(r,"seconds")}},d=()=>{if(c){const r=c.getCurrentTime()+15;c.seekTo(r,"seconds")}},j=()=>{i(!s)},l=()=>{g(!u),n(u?1:0)},x=()=>{const p=(f.indexOf(a)+1)%f.length,k=f[p];if(t(k),c){const _=c.getInternalPlayer();_&&typeof _.playbackRate<"u"&&(_.playbackRate=k)}};return e.jsxs(Ce,{children:[e.jsx(Te,{onClick:l,children:u?e.jsx(we,{}):e.jsx(je,{})}),e.jsx(Ie,{onClick:h,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(_e,{"data-testid":"play-pause-button",onClick:j,size:"small",children:s?e.jsx(he,{"data-testid":"pause-icon"}):e.jsx(xe,{"data-testid":"play-icon"})}),e.jsx(Pe,{onClick:d,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(Ee,{onClick:x,children:[a,"x"]})]})});ee.displayName="Controls";const Ce=m(v).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${C.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${C.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,_e=m(ye)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Ie=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Pe=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Te=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${C.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${C.DROPDOWN_BG};
  }
`,Ee=m.button`
  margin-top: 4px;
  background: ${C.BG1};
  color: ${C.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,te=o.memo(({left:s,width:i,title:n})=>e.jsx($e,{style:{left:`${s}%`,width:`calc(${i}%)`},children:e.jsx("div",{className:"title",children:n})}));te.displayName="Chapter";const $e=m.div`
  position: absolute;
  top: -3px;
  height: 100%;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  & + & {
    border-left: 0.1px solid ${C.white};
  }

  .title {
    position: absolute;
    bottom: calc(100% + 16px);
    display: none;
    color: ${C.white};
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
`,re=o.memo(({chapters:s,duration:i})=>i?e.jsx(e.Fragment,{children:s.map((n,t)=>{var h,d,j,l,x;const a=(h=n==null?void 0:n.properties)!=null&&h.timestamp?O(n.properties.timestamp)/1e3:0,c=(j=(d=s[t+1])==null?void 0:d.properties)!=null&&j.timestamp?O((l=s[t+1].properties)==null?void 0:l.timestamp)/1e3:i,u=Math.floor(a/i*100),f=Math.floor(c/i*100)-u;return e.jsx(te,{left:u,title:((x=n==null?void 0:n.properties)==null?void 0:x.name)||(n==null?void 0:n.name)||"",width:f},`${n.ref_id}_${t}`)})}):null);re.displayName="Chapters";const se=o.memo(({type:s,left:i,img:n})=>{var f,h;const t=K(d=>d.normalizedSchemasByType),a=(f=t[s])==null?void 0:f.primary_color,c=(h=t[s])==null?void 0:h.icon,u=c?`/svg-icons/${c}.svg`:"",g={iconStart:n||u,color:a??C.THING};return e.jsx(Re,{style:{left:`${i}%`},children:e.jsx(ne,{...g,label:s})})});se.displayName="Marker";const ne=o.memo(({iconStart:s,color:i,label:n})=>e.jsx(Me,{color:i,children:s&&e.jsx("img",{alt:n,className:"badge__img",onError:console.log,src:s})}));ne.displayName="Badge";const Me=m(v).attrs({direction:"row"})`
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
`,Re=m.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${C.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,oe=o.memo(({markers:s,duration:i})=>e.jsx(e.Fragment,{children:s.map((n,t)=>{var g;const a=Math.floor(((n==null?void 0:n.start)||0)/i*100),c=(n==null?void 0:n.node_type)||"",u=((g=n==null?void 0:n.properties)==null?void 0:g.image_url)||"";return e.jsx(se,{img:u,left:a,type:c},`${n.ref_id}_${t}`)})}));oe.displayName="Markers";const Ne=({duration:s,markers:i,handleProgressChange:n,playingTIme:t,chapters:a})=>{const c=10/s*100;return e.jsxs(We,{children:[e.jsx(Ae,{max:s,onChange:n,value:t,width:c}),a&&e.jsx(ie,{children:e.jsx(re,{chapters:a,duration:s})}),e.jsx(Fe,{children:e.jsx(oe,{duration:s,markers:i})})]})},ie=m(v)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,We=m(v)`
  position: relative;
  flex: 1 1 100%;

  &:hover {
    ${ie} {
      display: block;
    }
  }
`,Fe=m(v)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,Ae=m(ve)`
  && {
    z-index: 20;
    color: ${C.white};
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
      background-color: ${C.primaryBlue};
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
`,Be=({markers:s,chapters:i})=>{const{playingNode:n,playerRef:t}=B(h=>h),[a,c]=o.useState(0),u=n,g=o.useCallback((h,d)=>{const j=Array.isArray(d)?d[0]:d;t&&t.seekTo(j,"seconds")},[t]);o.useEffect(()=>{const h=setInterval(()=>{if(t&&c){const d=t.getCurrentTime();c(d)}},500);return()=>clearInterval(h)},[t,c]);const f=(t==null?void 0:t.getDuration())||0;return u?e.jsxs(De,{children:[e.jsx(ee,{}),e.jsx(Ne,{chapters:i,duration:f,handleProgressChange:g,markers:s,playingTIme:a})]}):null},De=m(v).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${C.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,ze=(s,i)=>{let n=0,t=s.length-1;for(;n<=t;){const a=Math.floor((n+t)/2),c=s[a],{start:u,end:g}=c.properties;if(i>=u&&i<=g)return c;i<u?t=a-1:n=a+1}return null},He=({mediaUrl:s})=>{const i=o.useRef(null),[n,t]=o.useState("ready"),[a,c]=o.useState(!1),[u,g]=o.useState(!1),{setActiveEdge:f}=Z(S=>S),{dataInitial:h}=Q(S=>S),{isPlaying:d,playingTime:j,setIsPlaying:l,setPlayingTime:x,setDuration:r,playingNode:p,volume:k,setHasError:_,resetPlayer:W,isSeeking:E,setIsSeeking:$,setPlayerRef:F,playerRef:b,playbackSpeed:M}=B(S=>S);o.useEffect(()=>()=>W(),[W]),o.useEffect(()=>{p&&!a&&(x(0),r(0),c(!1))},[p,x,r,c,a]),o.useEffect(()=>{E&&b&&(b.seekTo(j,"seconds"),$(!1))},[j,E,$,b]);const D=o.useCallback(()=>{l(!d)},[d,l]),A=()=>{_(!0),t("error")},T=o.useCallback(S=>{S.code},[D]);o.useEffect(()=>(window.addEventListener("keydown",T),()=>{window.removeEventListener("keydown",T)}),[T]);const R=o.useMemo(()=>((h==null?void 0:h.links.filter(w=>{var N;return(N=w==null?void 0:w.properties)==null?void 0:N.start}))||[]).slice().sort((w,N)=>{var q,X;return((q=w==null?void 0:w.properties)==null?void 0:q.start)-((X=N==null?void 0:N.properties)==null?void 0:X.start)}),[h]),z=S=>{if(!E){const w=S.playedSeconds,N=ze(R,w);f(N||null)}},H=o.useMemo(()=>{const w=new URL(window.location.href).searchParams.get("start");return w?parseFloat(w):null},[]),I=()=>{t("ready"),b&&H!==null&&!u&&(b.seekTo(H,"seconds"),g(!0))},P=o.useCallback(()=>{d||l(!0)},[l,d]),y=o.useCallback(()=>{d&&l(!1)},[l,d]),G=o.useCallback(S=>{!b&&S&&F(S)},[F,b]);return s?e.jsxs(Ge,{ref:i,tabIndex:0,children:[e.jsx(Le,{isFullScreen:!1,children:e.jsx(ce,{size:120,src:(p==null?void 0:p.image_url)||"",type:"clip"})}),e.jsx(Ve,{isFullScreen:!1,children:e.jsx(ke,{ref:G,height:"219px",onBuffer:()=>t("buffering"),onBufferEnd:()=>t("ready"),onError:A,onPause:y,onPlay:P,onProgress:z,onReady:I,playbackRate:M,playing:d,url:s||"",volume:k,width:"100%"})}),n==="error"&&e.jsx(Oe,{className:"error-wrapper",children:"Error happened, please try later"})]}):null},Ge=m(v)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Le=m(v)`
  position: absolute;
  top: ${s=>s.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Oe=m(v)`
  height: 60px;
  padding: 12px 16px;
  color: ${C.primaryRed};
`,Ve=m.div`
  margin: ${s=>s.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Ue=o.memo(He),ae=o.forwardRef(({active:s,start:i,text:n},t)=>e.jsxs(qe,{ref:t,className:le({active:s}),children:[e.jsx(Xe,{children:i}),e.jsx(Ye,{children:e.jsx("span",{children:n})})]}));ae.displayName="ParagraphComponent";const U=o.memo(ae,(s,i)=>s.active===i.active),qe=m(v)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${C.AI_HIGHLIGHT};
  }
`,Xe=m.span`
  background: ${C.lightBlue100};
  color: ${C.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Ye=m.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${C.AI_HIGHLIGHT};
  }
`,Je=({transcriptString:s,isFirst:i})=>{const[n,t]=o.useState(0),[a,c]=o.useState(!1),{playerRef:u}=B(l=>l),g=s.replace(/^["']|["']$/g,""),f=JSON.parse(g),h=o.useRef(null),d=o.useRef(null),j=o.useRef(null);return o.useEffect(()=>{const l=setInterval(()=>{if(u&&t){const x=u.getCurrentTime();t(x)}},100);return()=>clearInterval(l)},[u,t]),o.useEffect(()=>{const l=()=>{c(!0),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{c(!1)},1e3)},x=d.current;return x&&x.addEventListener("scroll",l),()=>{x&&x.removeEventListener("scroll",l)}},[]),o.useEffect(()=>{!a&&h.current&&h.current.scrollIntoView({behavior:"smooth",block:"center"})},[n,a]),e.jsx(Ke,{ref:d,children:e.jsx(e.Fragment,{children:i?e.jsx(e.Fragment,{children:f[0].start>n?e.jsx(U,{active:!1,start:V(f[0].start),text:f[0].text}):e.jsx(e.Fragment,{children:f.map(l=>{const x=V(l.start),r=l.start<n&&n<l.end;return!i||l.start<=n+5?e.jsx(U,{ref:r?h:null,active:r,start:x,text:l.text},`${l.start}-${l.end}`):null})})}):e.jsx(e.Fragment,{children:f.map(l=>{const x=V(l.start),r=l.start<n&&n<l.end;return e.jsx(U,{ref:r?h:null,active:r,start:x,text:l.text},`${l.start}-${l.end}`)})})})})},Ke=m.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Qe=({name:s})=>{var x;const i=L(r=>r.clips),n=L(r=>r.setActiveClip),t=L(r=>r.activeClip),{playerRef:a}=B(r=>r),[c,u]=o.useState(0),[g,f]=o.useState(!0),[h,d]=Z(r=>[r.setActiveNode,r.activeNode]),j=be(r=>r.simulation);o.useEffect(()=>{const r=setInterval(()=>{if(a&&u){const p=a.getCurrentTime();u(p)}},100);return()=>clearInterval(r)},[a,u]),o.useEffect(()=>{c&&(()=>{var k;const p=i.find(_=>{var $;const[W,E]=l(($=_==null?void 0:_.properties)==null?void 0:$.timestamp);return W<=c&&c<E});t&&(p==null?void 0:p.ref_id)===(t==null?void 0:t.ref_id)||!p||(f((p==null?void 0:p.ref_id)===((k=i[0])==null?void 0:k.ref_id)),n(p||null))})()},[c,i,t,n]),o.useEffect(()=>{if(t&&(!d||t.ref_id!==d.ref_id)){const r=j==null?void 0:j.nodes().find(p=>p.ref_id===t.ref_id);typeof(r==null?void 0:r.fx)=="number"&&h(r)}},[t,d,h,j]);const l=r=>r?r.split("-").map(Number):[0,0];return e.jsxs(Ze,{children:[e.jsx(v,{className:"heading",children:s}),t?e.jsx(et,{direction:"row",children:((x=t.properties)==null?void 0:x.transcript)&&e.jsx(Je,{isFirst:g,transcriptString:t.properties.transcript})}):null]})},Ze=m(v)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${C.white};
  background: ${C.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
`,et=m(v)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,tt=()=>{var i;const s=L(n=>n.selectedEpisode);return e.jsxs(rt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(st,{children:((i=s==null?void 0:s.properties)==null?void 0:i.media_url)&&e.jsx(Ue,{mediaUrl:s.properties.media_url})}),e.jsx(Qe,{name:(s==null?void 0:s.name)||""})]})},rt=m(v)(({theme:s})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[s.breakpoints.up("sm")]:{width:Se,gap:"10px"}})),st=m(v)(({theme:s})=>({width:"100%",marginBottom:"20px",[s.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),J=s=>{const i=s.edges.filter(t=>{var a;return(a=t==null?void 0:t.properties)==null?void 0:a.start}).map(t=>({source:t.source,target:t.target,start:t.properties.start}));return s.nodes.filter(t=>s.edges.some(a=>a.source===t.ref_id||a.target===t.ref_id)).map(t=>{const a=i.find(c=>t.ref_id===c.source||t.ref_id===c.target);return{...t,start:(a==null?void 0:a.start)||0}}).filter(t=>t&&t.node_type!=="Clip"&&t.node_type!=="Episode"&&t.node_type!=="Show")},Wt=()=>{const s=Q(r=>r.addNewNode),i=L(r=>r.clips),n=L(r=>r.activeClip),t=L(r=>r.fetchEpisodeData),a=L(r=>r.chapters),c=o.useRef(null),u=o.useRef(null),g=o.useRef(null),f=o.useRef(null),[h,d]=o.useState([]),{setSchemas:j}=K(r=>r),l=pe(),{episodeId:x}=de();return o.useEffect(()=>{(async()=>{try{const p=await fe();j(p.schemas.filter(k=>!k.is_deleted))}catch(p){console.error("Error fetching schema:",p)}})()},[j]),o.useEffect(()=>{x&&(async()=>{try{t(x||"")}catch(p){l("/"),console.error("Error fetching initial data:",p)}})()},[x,l,t]),o.useEffect(()=>{},[i,d,a,s,n]),o.useEffect(()=>{n&&a&&(async()=>{var p,k,_,W;try{const E=[],$={nodes:((p=g.current)==null?void 0:p.nodes)||[],edges:((k=g.current)==null?void 0:k.edges)||[]},F=n==null?void 0:n.ref_id;if(F){const b=await Y(F,["-Clip","-Episode"],[],"",!0,0,2,50),M=b.nodes.filter(A=>A.node_type==="Claim"),D=b.edges.filter(A=>M.some(T=>T.ref_id===A.source||T.ref_id===A.target));if(f.current={nodes:[...((_=f.current)==null?void 0:_.nodes)||[],...M],edges:[...((W=f.current)==null?void 0:W.edges)||[],...D]},b){const T=J(b).map(R=>{var H;const z=((H=(a||[]).find(I=>{var P;return R.start&&O(((P=I==null?void 0:I.properties)==null?void 0:P.timestamp)||"")>=R.start*1e3}))==null?void 0:H.ref_id)||"";return{...R,neighbourHood:z}});$.nodes.push(...T||[]),$.edges.push(...(b==null?void 0:b.edges)||[]),E.push(...T),g.current=$}}d(E)}catch(E){console.error("Error processing clip nodes:",E)}})()},[n,a]),o.useEffect(()=>{const r=p=>{var _;const{playerRef:k}=B.getState();if(u.current!==null){if(p-u.current>2e3){if(g.current&&k){const{nodes:E,edges:$}=g.current,F=k==null?void 0:k.getCurrentTime(),[b,M]=$.reduce(([I,P],y)=>{var G,S;return((G=y==null?void 0:y.properties)==null?void 0:G.start)!==void 0&&((S=y==null?void 0:y.properties)==null?void 0:S.start)<F+1?I.push(y):P.push(y),[I,P]},[[],[]]),[D,A]=E.reduce(([I,P],y)=>(b.some(G=>G.target===y.ref_id||G.source===y.ref_id)?I.push(y):P.push(y),[I,P]),[[],[]]);g.current={nodes:A,edges:M};const[T,R]=(((_=f.current)==null?void 0:_.edges)||[]).reduce(([I,P],y)=>{var G,S;if(D.some(w=>w.ref_id===y.source)){const w=(((G=f.current)==null?void 0:G.nodes)||[]).find(N=>N.ref_id===y.target);w&&(I.push(w),P.push(y))}else if(D.some(w=>w.ref_id===y.target)){const w=(((S=f.current)==null?void 0:S.nodes)||[]).find(N=>N.ref_id===y.source);w&&(I.push(w),P.push(y))}return[I,P]},[[],[]]),z=[...D,...T],H=[...b,...R];(z.length||H.length)&&s({nodes:z,edges:H})}u.current=p}}else u.current=p;c.current=requestAnimationFrame(r)};return c.current=requestAnimationFrame(r),()=>{c.current&&cancelAnimationFrame(c.current)}},[g,s]),e.jsxs(nt,{children:[e.jsx(ot,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(v,{children:e.jsx(ue,{})}),e.jsx(tt,{})]}),e.jsx(it,{children:e.jsx(v,{basis:"100%",grow:1,shrink:1,children:e.jsx(ge,{})})})]})}),e.jsx(at,{children:e.jsx(Be,{chapters:a,markers:h})}),e.jsx(me,{})]})},nt=m.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,ot=m(v)`
  flex: 1;
  overflow: hidden;
`,it=m(v)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,at=m(v)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{Wt as MindSet};
