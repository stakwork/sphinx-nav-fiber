import{r as o,j as e,s as f,g as v,F as j,o as Y,c as J,A as ae,p as ie,i as ce,q as le,H as pe,t as de,v as ue}from"./index-d92fb92e.js";import{t as U,u as G,C as me}from"./index-a920c05a.js";import{U as fe}from"./index-4f6f48ff.js";import{u as M,a as he,b as ge,I as xe,c as K,d as ye}from"./index-cd0c94f3.js";import{M as we,V as be}from"./index-e7e5c1fb.js";import{S as je,R as ve,s as V,M as Se}from"./index-5823bdd7.js";import"./string-a277709d.js";import"./index-d3b6e07a.js";import"./three.module-9722a9fc.js";import"./isPlainObject-ccb0d90f.js";import"./TextareaAutosize-7af50cc4.js";import"./CheckIcon-60cafa57.js";import"./index-bca19ca7.js";import"./index-0fbfe3a0.js";import"./index-da2d9420.js";import"./ClipLoader-0b6e6634.js";import"./clsx-6b169284.js";import"./SourcesTableIcon-84a3a06d.js";import"./DeleteNodeIcon-15423c31.js";import"./SoundIcon-763ebb29.js";import"./SucessFeedBackIcon-6d2574bb.js";import"./Skeleton-f3d94bc4.js";import"./index-201978af.js";import"./Stack-296aab19.js";import"./FormControlLabel-065abf53.js";import"./Typography-208c0673.js";import"./createSvgIcon-f77753fb.js";const Q=o.memo(()=>{const r=M(s=>s.isPlaying),a=M(s=>s.setIsPlaying),n=M(s=>s.setVolume),t=M(s=>s.setPlaybackSpeed),c=M(s=>s.playbackSpeed),i=M(s=>s.playerRef),[d,g]=o.useState(!1),y=[.5,1,1.5,2],h=()=>{if(i){const s=i.getCurrentTime()-15;i.seekTo(s,"seconds")}},u=()=>{if(i){const s=i.getCurrentTime()+15;i.seekTo(s,"seconds")}},b=()=>{a(!r)},l=()=>{g(!d),n(d?1:0)},p=()=>{const m=(y.indexOf(c)+1)%y.length,P=y[m];if(t(P),i){const _=i.getInternalPlayer();_&&typeof _.playbackRate<"u"&&(_.playbackRate=P)}};return e.jsxs(ke,{children:[e.jsx(_e,{onClick:l,children:d?e.jsx(we,{}):e.jsx(be,{})}),e.jsx(Ie,{onClick:h,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(Ce,{"data-testid":"play-pause-button",onClick:b,size:"small",children:r?e.jsx(he,{"data-testid":"pause-icon"}):e.jsx(ge,{"data-testid":"play-icon"})}),e.jsx(Pe,{onClick:u,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(Te,{onClick:p,children:[c,"x"]})]})});Q.displayName="Controls";const ke=f(j).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${v.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${v.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`,Ce=f(xe)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Ie=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Pe=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,_e=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${v.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${v.DROPDOWN_BG};
  }
`,Te=f.button`
  margin-top: 4px;
  background: ${v.BG1};
  color: ${v.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,Z=o.memo(({left:r,width:a,title:n})=>e.jsx($e,{style:{left:`${r}%`,width:`calc(${a}%)`},children:e.jsx("div",{className:"title",children:n})}));Z.displayName="Chapter";const $e=f.div`
  position: absolute;
  top: -3px;
  height: 100%;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  & + & {
    border-left: 0.1px solid ${v.white};
  }

  .title {
    position: absolute;
    bottom: calc(100% + 16px);
    display: none;
    color: ${v.white};
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
`,ee=o.memo(({chapters:r,duration:a})=>a?e.jsx(e.Fragment,{children:r.map((n,t)=>{var h,u,b,l,p;const c=(h=n==null?void 0:n.properties)!=null&&h.timestamp?U(n.properties.timestamp)/1e3:0,i=(b=(u=r[t+1])==null?void 0:u.properties)!=null&&b.timestamp?U((l=r[t+1].properties)==null?void 0:l.timestamp)/1e3:a,d=Math.floor(c/a*100),y=Math.floor(i/a*100)-d;return e.jsx(Z,{left:d,title:((p=n==null?void 0:n.properties)==null?void 0:p.name)||(n==null?void 0:n.name)||"",width:y},`${n.ref_id}_${t}`)})}):null);ee.displayName="Chapters";const te=o.memo(({type:r,left:a,img:n})=>{var y,h;const t=Y(u=>u.normalizedSchemasByType),c=(y=t[r])==null?void 0:y.primary_color,i=(h=t[r])==null?void 0:h.icon,d=i?`/svg-icons/${i}.svg`:"",g={iconStart:n||d,color:c??v.THING};return e.jsx(Ee,{style:{left:`${a}%`},children:e.jsx(re,{...g,label:r})})});te.displayName="Marker";const re=o.memo(({iconStart:r,color:a,label:n})=>e.jsx(Re,{color:a,children:r&&e.jsx("img",{alt:n,className:"badge__img",onError:console.log,src:r})}));re.displayName="Badge";const Re=f(j).attrs({direction:"row"})`
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
`,Ee=f.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${v.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,se=o.memo(({markers:r,duration:a})=>e.jsx(e.Fragment,{children:r.map((n,t)=>{var g;const c=Math.floor(((n==null?void 0:n.start)||0)/a*100),i=(n==null?void 0:n.node_type)||"",d=((g=n==null?void 0:n.properties)==null?void 0:g.image_url)||"";return e.jsx(te,{img:d,left:c,type:i},`${n.ref_id}_${t}`)})}));se.displayName="Markers";const Me=({duration:r,markers:a,handleProgressChange:n,playingTIme:t,chapters:c})=>{const i=10/r*100;return e.jsxs(Ne,{children:[e.jsx(We,{max:r,onChange:n,value:t,width:i}),c&&e.jsx(ne,{children:e.jsx(ee,{chapters:c,duration:r})}),e.jsx(Fe,{children:e.jsx(se,{duration:r,markers:a})})]})},ne=f(j)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,Ne=f(j)`
  position: relative;
  flex: 1 1 100%;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    ${ne} {
      display: block;
    }
  }
`,Fe=f(j)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,We=f(je)`
  && {
    z-index: 20;
    color: ${v.white};
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
      background-color: ${v.primaryBlue};
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
`,Ae=({markers:r,chapters:a})=>{const{playingNode:n,playerRef:t}=M(h=>h),[c,i]=o.useState(0),d=n,g=o.useCallback((h,u)=>{const b=Array.isArray(u)?u[0]:u;t&&t.seekTo(b,"seconds")},[t]);o.useEffect(()=>{const h=setInterval(()=>{if(t&&i){const u=t.getCurrentTime();i(u)}},500);return()=>clearInterval(h)},[t,i]);const y=(t==null?void 0:t.getDuration())||0;return d?e.jsxs(Be,{children:[e.jsx(Q,{}),e.jsx(Me,{chapters:a,duration:y,handleProgressChange:g,markers:r,playingTIme:c})]}):null},Be=f(j).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${v.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,De=(r,a)=>{let n=0,t=r.length-1;for(;n<=t;){const c=Math.floor((n+t)/2),i=r[c],{start:d,end:g}=i.properties;if(a>=d&&a<=g)return i;a<d?t=c-1:n=c+1}return null},ze=({mediaUrl:r})=>{const a=o.useRef(null),[n,t]=o.useState("ready"),[c,i]=o.useState(!1),[d,g]=o.useState(!1),{setActiveEdge:y}=K(x=>x),{dataInitial:h}=J(x=>x),{isPlaying:u,playingTime:b,setIsPlaying:l,setPlayingTime:p,setDuration:s,playingNode:m,volume:P,setHasError:_,resetPlayer:R,isSeeking:E,setIsSeeking:N,setPlayerRef:T,playerRef:$,playbackSpeed:B}=M(x=>x);o.useEffect(()=>()=>R(),[R]),o.useEffect(()=>{m&&!c&&(p(0),s(0),i(!1))},[m,p,s,i,c]),o.useEffect(()=>{E&&$&&($.seekTo(b,"seconds"),N(!1))},[b,E,N,$]);const L=o.useCallback(()=>{l(!u)},[u,l]),H=()=>{_(!0),t("error")},C=o.useCallback(x=>{x.code},[L]);o.useEffect(()=>(window.addEventListener("keydown",C),()=>{window.removeEventListener("keydown",C)}),[C]);const W=o.useMemo(()=>((h==null?void 0:h.links.filter(k=>{var A;return(A=k==null?void 0:k.properties)==null?void 0:A.start}))||[]).slice().sort((k,A)=>{var q,X;return((q=k==null?void 0:k.properties)==null?void 0:q.start)-((X=A==null?void 0:A.properties)==null?void 0:X.start)}),[h]),D=x=>{if(!E){const k=x.playedSeconds,A=De(W,k);y(A||null)}},S=o.useMemo(()=>{const k=new URL(window.location.href).searchParams.get("start");return k?parseFloat(k):null},[]),I=()=>{t("ready"),$&&S!==null&&!d&&($.seekTo(S,"seconds"),g(!0))},w=o.useCallback(()=>{u||l(!0)},[l,u]),F=o.useCallback(()=>{u&&l(!1)},[l,u]),z=o.useCallback(x=>{!$&&x&&T(x)},[T,$]);return r?e.jsxs(Ge,{ref:a,tabIndex:0,children:[e.jsx(He,{isFullScreen:!1,children:e.jsx(ae,{size:120,src:(m==null?void 0:m.image_url)||"",type:"clip"})}),e.jsx(Ve,{isFullScreen:!1,children:e.jsx(ve,{ref:z,height:"219px",onBuffer:()=>t("buffering"),onBufferEnd:()=>t("ready"),onError:H,onPause:F,onPlay:w,onProgress:D,onReady:I,playbackRate:B,playing:u,url:r||"",volume:P,width:"100%"})}),n==="error"&&e.jsx(Le,{className:"error-wrapper",children:"Error happened, please try later"})]}):null},Ge=f(j)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,He=f(j)`
  position: absolute;
  top: ${r=>r.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Le=f(j)`
  height: 60px;
  padding: 12px 16px;
  color: ${v.primaryRed};
`,Ve=f.div`
  margin: ${r=>r.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Oe=o.memo(ze),oe=o.forwardRef(({active:r,start:a,text:n},t)=>e.jsxs(Ue,{ref:t,className:ie({active:r}),children:[e.jsx(qe,{children:a}),e.jsx(Xe,{children:e.jsx("span",{children:n})})]}));oe.displayName="ParagraphComponent";const O=o.memo(oe,(r,a)=>r.active===a.active),Ue=f(j)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${v.AI_HIGHLIGHT};
  }
`,qe=f.span`
  background: ${v.lightBlue100};
  color: ${v.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Xe=f.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${v.AI_HIGHLIGHT};
  }
`,Ye=({transcriptString:r,isFirst:a})=>{const[n,t]=o.useState(0),[c,i]=o.useState(!1),{playerRef:d}=M(l=>l),g=r.replace(/^["']|["']$/g,""),y=JSON.parse(g),h=o.useRef(null),u=o.useRef(null),b=o.useRef(null);return o.useEffect(()=>{const l=setInterval(()=>{if(d&&t){const p=d.getCurrentTime();t(p)}},100);return()=>clearInterval(l)},[d,t]),o.useEffect(()=>{const l=()=>{i(!0),b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{i(!1)},1e3)},p=u.current;return p&&p.addEventListener("scroll",l),()=>{p&&p.removeEventListener("scroll",l)}},[]),o.useEffect(()=>{!c&&h.current&&h.current.scrollIntoView({behavior:"smooth",block:"center"})},[n,c]),e.jsx(Je,{ref:u,children:e.jsx(e.Fragment,{children:a?e.jsx(e.Fragment,{children:y[0].start>n?e.jsx(O,{active:!1,start:V(y[0].start),text:y[0].text}):e.jsx(e.Fragment,{children:y.map(l=>{const p=V(l.start),s=l.start<n&&n<l.end;return!a||l.start<=n+5?e.jsx(O,{ref:s?h:null,active:s,start:p,text:l.text},`${l.start}-${l.end}`):null})})}):e.jsx(e.Fragment,{children:y.map(l=>{const p=V(l.start),s=l.start<n&&n<l.end;return e.jsx(O,{ref:s?h:null,active:s,start:p,text:l.text},`${l.start}-${l.end}`)})})})})},Je=f.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Ke=({name:r})=>{var p;const a=G(s=>s.clips),n=G(s=>s.setActiveClip),t=G(s=>s.activeClip),{playerRef:c}=M(s=>s),[i,d]=o.useState(0),[g,y]=o.useState(!0),[h,u]=K(s=>[s.setActiveNode,s.activeNode]),b=ye(s=>s.simulation);o.useEffect(()=>{const s=setInterval(()=>{if(c&&d){const m=c.getCurrentTime();d(m)}},100);return()=>clearInterval(s)},[c,d]),o.useEffect(()=>{i&&(()=>{var P;const m=a.find(_=>{var N;const[R,E]=l((N=_==null?void 0:_.properties)==null?void 0:N.timestamp);return R<=i&&i<E});t&&(m==null?void 0:m.ref_id)===(t==null?void 0:t.ref_id)||!m||(y((m==null?void 0:m.ref_id)===((P=a[0])==null?void 0:P.ref_id)),n(m||null))})()},[i,a,t,n]),o.useEffect(()=>{if(t&&(!u||t.ref_id!==u.ref_id)){const s=b==null?void 0:b.nodes().find(m=>m.ref_id===t.ref_id);typeof(s==null?void 0:s.fx)=="number"&&h(s)}},[t,u,h,b]);const l=s=>s?s.split("-").map(Number):[0,0];return e.jsxs(Qe,{children:[e.jsx(j,{className:"heading",children:r}),t?e.jsx(Ze,{direction:"row",children:((p=t.properties)==null?void 0:p.transcript)&&e.jsx(Ye,{isFirst:g,transcriptString:t.properties.transcript})}):null]})},Qe=f(j)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${v.white};
  background: ${v.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
  @media (max-width: 768px) {
    max-width: 100vw;
    padding: 0;
  }
`,Ze=f(j)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
  @media (max-width: 768px) {
    margin: 0;
  }
`,et=()=>{var a;const r=G(n=>n.selectedEpisode);return e.jsxs(tt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(rt,{children:((a=r==null?void 0:r.properties)==null?void 0:a.media_url)&&e.jsx(Oe,{mediaUrl:r.properties.media_url})}),e.jsx(Ke,{name:(r==null?void 0:r.name)||""})]})},tt=f(j)(({theme:r})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[r.breakpoints.up("sm")]:{width:Se,gap:"10px"},"@media (max-width: 768px)":{padding:0}})),rt=f(j)(({theme:r})=>({width:"100%",marginBottom:"20px",[r.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),st=r=>{const a=r.edges.filter(t=>{var c;return(c=t==null?void 0:t.properties)==null?void 0:c.start}).map(t=>({source:t.source,target:t.target,start:t.properties.start}));return r.nodes.filter(t=>r.edges.some(c=>c.source===t.ref_id||c.target===t.ref_id)).map(t=>{const c=a.find(i=>t.ref_id===i.source||t.ref_id===i.target);return{...t,start:(c==null?void 0:c.start)||0}}).filter(t=>t&&t.node_type!=="Clip"&&t.node_type!=="Episode"&&t.node_type!=="Show")},Ft=()=>{const r=J(p=>p.addNewNode),a=G(p=>p.activeClip),n=G(p=>p.fetchEpisodeData),t=G(p=>p.chapters),c=o.useRef(null),i=o.useRef(null),d=o.useRef(null),g=o.useRef(null),[y,h]=o.useState([]),{setSchemas:u}=Y(p=>p),b=ce(),{episodeId:l}=le();return o.useEffect(()=>{(async()=>{try{const s=await de();u(s.schemas.filter(m=>!m.is_deleted))}catch(s){console.error("Error fetching schema:",s)}})()},[u]),o.useEffect(()=>{l&&(async()=>{try{n(l||"")}catch(s){b("/"),console.error("Error fetching initial data:",s)}})()},[l,b,n]),o.useEffect(()=>{a&&t&&(async()=>{var s,m,P,_;try{const R=[],E={nodes:((s=d.current)==null?void 0:s.nodes)||[],edges:((m=d.current)==null?void 0:m.edges)||[]},N=a==null?void 0:a.ref_id;if(N){const T=await ue(N,["-Clip","-Episode"],[],"",!0,0,2,50),$=T.nodes.filter(C=>C.node_type==="Claim"),B=T.edges.filter(C=>$.some(W=>W.ref_id===C.source||W.ref_id===C.target));g.current={nodes:[...((P=g.current)==null?void 0:P.nodes)||[],...$],edges:[...((_=g.current)==null?void 0:_.edges)||[],...B]};const H=st(T).map(C=>{var D;const W=((D=(t||[]).find(S=>{var I;return C.start&&U(((I=S==null?void 0:S.properties)==null?void 0:I.timestamp)||"")>=C.start*1e3}))==null?void 0:D.ref_id)||"";return{...C,neighbourHood:W}});E.nodes.push(...H||[]),E.edges.push(...(T==null?void 0:T.edges)||[]),R.push(...H),d.current=E}h(R)}catch(R){console.error("Error processing clip nodes:",R)}})()},[a,t]),o.useEffect(()=>{const p=s=>{var P;const{playerRef:m}=M.getState();if(i.current!==null){if(s-i.current>2e3){if(d.current&&m){const{nodes:R,edges:E}=d.current,N=m==null?void 0:m.getCurrentTime(),[T,$]=E.reduce(([S,I],w)=>{var F,z;return((F=w==null?void 0:w.properties)==null?void 0:F.start)!==void 0&&((z=w==null?void 0:w.properties)==null?void 0:z.start)<N+1?S.push(w):I.push(w),[S,I]},[[],[]]),[B,L]=R.reduce(([S,I],w)=>(T.some(F=>F.target===w.ref_id||F.source===w.ref_id)?S.push(w):I.push(w),[S,I]),[[],[]]);d.current={nodes:L,edges:$};const[H,C]=(((P=g.current)==null?void 0:P.edges)||[]).reduce(([S,I],w)=>{var F,z;if(B.some(x=>x.ref_id===w.source)){const x=(((F=g.current)==null?void 0:F.nodes)||[]).find(k=>k.ref_id===w.target);x&&(S.push(x),I.push(w))}else if(B.some(x=>x.ref_id===w.target)){const x=(((z=g.current)==null?void 0:z.nodes)||[]).find(k=>k.ref_id===w.source);x&&(S.push(x),I.push(w))}return[S,I]},[[],[]]),W=[...B,...H],D=[...T,...C];(W.length||D.length)&&r({nodes:W,edges:D})}i.current=s}}else i.current=s;c.current=requestAnimationFrame(p)};return c.current=requestAnimationFrame(p),()=>{c.current&&cancelAnimationFrame(c.current)}},[d,r]),e.jsxs(nt,{children:[e.jsx(ot,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(j,{children:e.jsx(pe,{})}),e.jsx(et,{})]}),e.jsx(at,{children:e.jsx(j,{basis:"100%",grow:1,shrink:1,children:e.jsx(fe,{})})})]})}),e.jsx(it,{children:e.jsx(Ae,{chapters:t,markers:y})}),e.jsx(me,{})]})},nt=f.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,ot=f(j)`
  flex: 1;
  overflow: hidden;
`,at=f(j)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;

  @media (max-width: 768px) {
    display: none;
  }
`,it=f(j)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{Ft as MindSet};
