import{r as o,j as e,s as f,g as v,F as j,o as Y,c as J,A as ie,p as ae,i as ce,q as le,H as pe,t as de,v as ue}from"./index-31948834.js";import{ClaimsModal as me}from"./index-3918e9db.js";import{U as fe}from"./index-2cdc5f04.js";import{t as U,u as G}from"./index-042b1579.js";import{u as M,a as he,b as ge,I as xe,c as K,d as ye}from"./index-8c95c680.js";import{M as we,V as be}from"./index-0ab4316b.js";import{S as je,R as ve,s as V,M as Se}from"./index-386f2bc5.js";import"./string-a277709d.js";import"./index-8911f025.js";import"./three.module-0192f2a3.js";import"./isPlainObject-41c1b2a7.js";import"./TextareaAutosize-5547dc05.js";import"./CheckIcon-259f2637.js";import"./index-ca064bcb.js";import"./index-ca4e9b8e.js";import"./index-043a76fe.js";import"./ClipLoader-a1bda373.js";import"./clsx-28119d9e.js";import"./SourcesTableIcon-3d98a0a1.js";import"./DeleteNodeIcon-26cb904c.js";import"./SoundIcon-ce586e76.js";import"./SucessFeedBackIcon-d2a6d988.js";import"./Skeleton-ca81fb69.js";import"./index-86a6cda8.js";import"./Stack-fa86676e.js";import"./FormControlLabel-2723a009.js";import"./Typography-45e60869.js";import"./createSvgIcon-364cce4a.js";const Q=o.memo(()=>{const r=M(s=>s.isPlaying),i=M(s=>s.setIsPlaying),n=M(s=>s.setVolume),t=M(s=>s.setPlaybackSpeed),c=M(s=>s.playbackSpeed),a=M(s=>s.playerRef),[d,g]=o.useState(!1),y=[.5,1,1.5,2],h=()=>{if(a){const s=a.getCurrentTime()-15;a.seekTo(s,"seconds")}},u=()=>{if(a){const s=a.getCurrentTime()+15;a.seekTo(s,"seconds")}},b=()=>{i(!r)},l=()=>{g(!d),n(d?1:0)},p=()=>{const m=(y.indexOf(c)+1)%y.length,P=y[m];if(t(P),a){const _=a.getInternalPlayer();_&&typeof _.playbackRate<"u"&&(_.playbackRate=P)}};return e.jsxs(ke,{children:[e.jsx(_e,{onClick:l,children:d?e.jsx(we,{}):e.jsx(be,{})}),e.jsx(Ie,{onClick:h,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(Ce,{"data-testid":"play-pause-button",onClick:b,size:"small",children:r?e.jsx(he,{"data-testid":"pause-icon"}):e.jsx(ge,{"data-testid":"play-icon"})}),e.jsx(Pe,{onClick:u,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(Te,{onClick:p,children:[c,"x"]})]})});Q.displayName="Controls";const ke=f(j).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,Z=o.memo(({left:r,width:i,title:n})=>e.jsx($e,{style:{left:`${r}%`,width:`calc(${i}%)`},children:e.jsx("div",{className:"title",children:n})}));Z.displayName="Chapter";const $e=f.div`
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
`,ee=o.memo(({chapters:r,duration:i})=>i?e.jsx(e.Fragment,{children:r.map((n,t)=>{var h,u,b,l,p;const c=(h=n==null?void 0:n.properties)!=null&&h.timestamp?U(n.properties.timestamp)/1e3:0,a=(b=(u=r[t+1])==null?void 0:u.properties)!=null&&b.timestamp?U((l=r[t+1].properties)==null?void 0:l.timestamp)/1e3:i,d=Math.floor(c/i*100),y=Math.floor(a/i*100)-d;return e.jsx(Z,{left:d,title:((p=n==null?void 0:n.properties)==null?void 0:p.name)||(n==null?void 0:n.name)||"",width:y},`${n.ref_id}_${t}`)})}):null);ee.displayName="Chapters";const te=o.memo(({type:r,left:i,img:n})=>{var y,h;const t=Y(u=>u.normalizedSchemasByType),c=(y=t[r])==null?void 0:y.primary_color,a=(h=t[r])==null?void 0:h.icon,d=a?`/svg-icons/${a}.svg`:"",g={iconStart:n||d,color:c??v.THING};return e.jsx(Ee,{style:{left:`${i}%`},children:e.jsx(re,{...g,label:r})})});te.displayName="Marker";const re=o.memo(({iconStart:r,color:i,label:n})=>e.jsx(Re,{color:i,children:r&&e.jsx("img",{alt:n,className:"badge__img",onError:console.log,src:r})}));re.displayName="Badge";const Re=f(j).attrs({direction:"row"})`
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
`,se=o.memo(({markers:r,duration:i})=>e.jsx(e.Fragment,{children:r.map((n,t)=>{var g;const c=Math.floor(((n==null?void 0:n.start)||0)/i*100),a=(n==null?void 0:n.node_type)||"",d=((g=n==null?void 0:n.properties)==null?void 0:g.image_url)||"";return e.jsx(te,{img:d,left:c,type:a},`${n.ref_id}_${t}`)})}));se.displayName="Markers";const Me=({duration:r,markers:i,handleProgressChange:n,playingTIme:t,chapters:c})=>{const a=10/r*100;return e.jsxs(Ne,{children:[e.jsx(We,{max:r,onChange:n,value:t,width:a}),c&&e.jsx(ne,{children:e.jsx(ee,{chapters:c,duration:r})}),e.jsx(Fe,{children:e.jsx(se,{duration:r,markers:i})})]})},ne=f(j)`
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
`,Ae=({markers:r,chapters:i})=>{const{playingNode:n,playerRef:t}=M(h=>h),[c,a]=o.useState(0),d=n,g=o.useCallback((h,u)=>{const b=Array.isArray(u)?u[0]:u;t&&t.seekTo(b,"seconds")},[t]);o.useEffect(()=>{const h=setInterval(()=>{if(t&&a){const u=t.getCurrentTime();a(u)}},500);return()=>clearInterval(h)},[t,a]);const y=(t==null?void 0:t.getDuration())||0;return d?e.jsxs(Be,{children:[e.jsx(Q,{}),e.jsx(Me,{chapters:i,duration:y,handleProgressChange:g,markers:r,playingTIme:c})]}):null},Be=f(j).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${v.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,De=(r,i)=>{let n=0,t=r.length-1;for(;n<=t;){const c=Math.floor((n+t)/2),a=r[c],{start:d,end:g}=a.properties;if(i>=d&&i<=g)return a;i<d?t=c-1:n=c+1}return null},ze=({mediaUrl:r})=>{const i=o.useRef(null),[n,t]=o.useState("ready"),[c,a]=o.useState(!1),[d,g]=o.useState(!1),{setActiveEdge:y}=K(x=>x),{dataInitial:h}=J(x=>x),{isPlaying:u,playingTime:b,setIsPlaying:l,setPlayingTime:p,setDuration:s,playingNode:m,volume:P,setHasError:_,resetPlayer:R,isSeeking:E,setIsSeeking:N,setPlayerRef:T,playerRef:$,playbackSpeed:B}=M(x=>x);o.useEffect(()=>()=>R(),[R]),o.useEffect(()=>{m&&!c&&(p(0),s(0),a(!1))},[m,p,s,a,c]),o.useEffect(()=>{E&&$&&($.seekTo(b,"seconds"),N(!1))},[b,E,N,$]);const L=o.useCallback(()=>{l(!u)},[u,l]),H=()=>{_(!0),t("error")},C=o.useCallback(x=>{x.code},[L]);o.useEffect(()=>(window.addEventListener("keydown",C),()=>{window.removeEventListener("keydown",C)}),[C]);const W=o.useMemo(()=>((h==null?void 0:h.links.filter(k=>{var A;return(A=k==null?void 0:k.properties)==null?void 0:A.start}))||[]).slice().sort((k,A)=>{var q,X;return((q=k==null?void 0:k.properties)==null?void 0:q.start)-((X=A==null?void 0:A.properties)==null?void 0:X.start)}),[h]),D=x=>{if(!E){const k=x.playedSeconds,A=De(W,k);y(A||null)}},S=o.useMemo(()=>{const k=new URL(window.location.href).searchParams.get("start");return k?parseFloat(k):null},[]),I=()=>{t("ready"),$&&S!==null&&!d&&($.seekTo(S,"seconds"),g(!0))},w=o.useCallback(()=>{u||l(!0)},[l,u]),F=o.useCallback(()=>{u&&l(!1)},[l,u]),z=o.useCallback(x=>{!$&&x&&T(x)},[T,$]);return r?e.jsxs(Ge,{ref:i,tabIndex:0,children:[e.jsx(He,{isFullScreen:!1,children:e.jsx(ie,{size:120,src:(m==null?void 0:m.image_url)||"",type:"clip"})}),e.jsx(Ve,{isFullScreen:!1,children:e.jsx(ve,{ref:z,height:"219px",onBuffer:()=>t("buffering"),onBufferEnd:()=>t("ready"),onError:H,onPause:F,onPlay:w,onProgress:D,onReady:I,playbackRate:B,playing:u,url:r||"",volume:P,width:"100%"})}),n==="error"&&e.jsx(Le,{className:"error-wrapper",children:"Error happened, please try later"})]}):null},Ge=f(j)`
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
`,Oe=o.memo(ze),oe=o.forwardRef(({active:r,start:i,text:n},t)=>e.jsxs(Ue,{ref:t,className:ae({active:r}),children:[e.jsx(qe,{children:i}),e.jsx(Xe,{children:e.jsx("span",{children:n})})]}));oe.displayName="ParagraphComponent";const O=o.memo(oe,(r,i)=>r.active===i.active),Ue=f(j)`
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
`,Ye=({transcriptString:r,isFirst:i})=>{const[n,t]=o.useState(0),[c,a]=o.useState(!1),{playerRef:d}=M(l=>l),g=r.replace(/^["']|["']$/g,""),y=JSON.parse(g),h=o.useRef(null),u=o.useRef(null),b=o.useRef(null);return o.useEffect(()=>{const l=setInterval(()=>{if(d&&t){const p=d.getCurrentTime();t(p)}},100);return()=>clearInterval(l)},[d,t]),o.useEffect(()=>{const l=()=>{a(!0),b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{a(!1)},1e3)},p=u.current;return p&&p.addEventListener("scroll",l),()=>{p&&p.removeEventListener("scroll",l)}},[]),o.useEffect(()=>{!c&&h.current&&h.current.scrollIntoView({behavior:"smooth",block:"center"})},[n,c]),e.jsx(Je,{ref:u,children:e.jsx(e.Fragment,{children:i?e.jsx(e.Fragment,{children:y[0].start>n?e.jsx(O,{active:!1,start:V(y[0].start),text:y[0].text}):e.jsx(e.Fragment,{children:y.map(l=>{const p=V(l.start),s=l.start<n&&n<l.end;return!i||l.start<=n+5?e.jsx(O,{ref:s?h:null,active:s,start:p,text:l.text},`${l.start}-${l.end}`):null})})}):e.jsx(e.Fragment,{children:y.map(l=>{const p=V(l.start),s=l.start<n&&n<l.end;return e.jsx(O,{ref:s?h:null,active:s,start:p,text:l.text},`${l.start}-${l.end}`)})})})})},Je=f.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Ke=({name:r})=>{var p;const i=G(s=>s.clips),n=G(s=>s.setActiveClip),t=G(s=>s.activeClip),{playerRef:c}=M(s=>s),[a,d]=o.useState(0),[g,y]=o.useState(!0),[h,u]=K(s=>[s.setActiveNode,s.activeNode]),b=ye(s=>s.simulation);o.useEffect(()=>{const s=setInterval(()=>{if(c&&d){const m=c.getCurrentTime();d(m)}},100);return()=>clearInterval(s)},[c,d]),o.useEffect(()=>{a?(()=>{var P;const m=i.find(_=>{var N;const[R,E]=l((N=_==null?void 0:_.properties)==null?void 0:N.timestamp);return R<=a&&a<E});t&&(m==null?void 0:m.ref_id)===(t==null?void 0:t.ref_id)||!m||(y((m==null?void 0:m.ref_id)===((P=i[0])==null?void 0:P.ref_id)),n(m||null))})():(y(!0),n(i[0]))},[a,i,t,n]),o.useEffect(()=>{if(t&&(!u||t.ref_id!==u.ref_id)){const s=b==null?void 0:b.nodes().find(m=>m.ref_id===t.ref_id);typeof(s==null?void 0:s.fx)=="number"&&h(s)}},[t,u,h,b]);const l=s=>s?s.split("-").map(Number):[0,0];return e.jsxs(Qe,{children:[e.jsx(j,{className:"heading",children:r}),t?e.jsx(Ze,{direction:"row",children:((p=t.properties)==null?void 0:p.transcript)&&e.jsx(Ye,{isFirst:g,transcriptString:t.properties.transcript})}):null]})},Qe=f(j)`
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
`,et=()=>{var i;const r=G(n=>n.selectedEpisode);return e.jsxs(tt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(rt,{children:((i=r==null?void 0:r.properties)==null?void 0:i.media_url)&&e.jsx(Oe,{mediaUrl:r.properties.media_url})}),e.jsx(Ke,{name:(r==null?void 0:r.name)||""})]})},tt=f(j)(({theme:r})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[r.breakpoints.up("sm")]:{width:Se,gap:"10px"},"@media (max-width: 768px)":{padding:0}})),rt=f(j)(({theme:r})=>({width:"100%",marginBottom:"20px",[r.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),st=r=>{const i=r.edges.filter(t=>{var c;return(c=t==null?void 0:t.properties)==null?void 0:c.start}).map(t=>({source:t.source,target:t.target,start:t.properties.start}));return r.nodes.filter(t=>r.edges.some(c=>c.source===t.ref_id||c.target===t.ref_id)).map(t=>{const c=i.find(a=>t.ref_id===a.source||t.ref_id===a.target);return{...t,start:(c==null?void 0:c.start)||0}}).filter(t=>t&&t.node_type!=="Clip"&&t.node_type!=="Episode"&&t.node_type!=="Show")},Wt=()=>{const r=J(p=>p.addNewNode),i=G(p=>p.activeClip),n=G(p=>p.fetchEpisodeData),t=G(p=>p.chapters),c=o.useRef(null),a=o.useRef(null),d=o.useRef(null),g=o.useRef(null),[y,h]=o.useState([]),{setSchemas:u}=Y(p=>p),b=ce(),{episodeId:l}=le();return o.useEffect(()=>{(async()=>{try{const s=await de();u(s.schemas.filter(m=>!m.is_deleted))}catch(s){console.error("Error fetching schema:",s)}})()},[u]),o.useEffect(()=>{l&&(async()=>{try{n(l||"")}catch(s){b("/"),console.error("Error fetching initial data:",s)}})()},[l,b,n]),o.useEffect(()=>{i&&t&&(async()=>{var s,m,P,_;try{const R=[],E={nodes:((s=d.current)==null?void 0:s.nodes)||[],edges:((m=d.current)==null?void 0:m.edges)||[]},N=i==null?void 0:i.ref_id;if(N){const T=await ue(N,["-Clip","-Episode"],[],"",!0,0,2,50),$=T.nodes.filter(C=>C.node_type==="Claim"),B=T.edges.filter(C=>$.some(W=>W.ref_id===C.source||W.ref_id===C.target));g.current={nodes:[...((P=g.current)==null?void 0:P.nodes)||[],...$],edges:[...((_=g.current)==null?void 0:_.edges)||[],...B]};const H=st(T).map(C=>{var D;const W=((D=(t||[]).find(S=>{var I;return C.start&&U(((I=S==null?void 0:S.properties)==null?void 0:I.timestamp)||"")>=C.start*1e3}))==null?void 0:D.ref_id)||"";return{...C,neighbourHood:W}});E.nodes.push(...H||[]),E.edges.push(...(T==null?void 0:T.edges)||[]),R.push(...H),d.current=E}h(R)}catch(R){console.error("Error processing clip nodes:",R)}})()},[i,t]),o.useEffect(()=>{const p=s=>{var P;const{playerRef:m}=M.getState();if(a.current!==null){if(s-a.current>2e3){if(d.current&&m){const{nodes:R,edges:E}=d.current,N=m==null?void 0:m.getCurrentTime(),[T,$]=E.reduce(([S,I],w)=>{var F,z;return((F=w==null?void 0:w.properties)==null?void 0:F.start)!==void 0&&((z=w==null?void 0:w.properties)==null?void 0:z.start)<N+1?S.push(w):I.push(w),[S,I]},[[],[]]),[B,L]=R.reduce(([S,I],w)=>(T.some(F=>F.target===w.ref_id||F.source===w.ref_id)?S.push(w):I.push(w),[S,I]),[[],[]]);d.current={nodes:L,edges:$};const[H,C]=(((P=g.current)==null?void 0:P.edges)||[]).reduce(([S,I],w)=>{var F,z;if(B.some(x=>x.ref_id===w.source)){const x=(((F=g.current)==null?void 0:F.nodes)||[]).find(k=>k.ref_id===w.target);x&&(S.push(x),I.push(w))}else if(B.some(x=>x.ref_id===w.target)){const x=(((z=g.current)==null?void 0:z.nodes)||[]).find(k=>k.ref_id===w.source);x&&(S.push(x),I.push(w))}return[S,I]},[[],[]]),W=[...B,...H],D=[...T,...C];(W.length||D.length)&&r({nodes:W,edges:D})}a.current=s}}else a.current=s;c.current=requestAnimationFrame(p)};return c.current=requestAnimationFrame(p),()=>{c.current&&cancelAnimationFrame(c.current)}},[d,r]),e.jsxs(nt,{children:[e.jsx(ot,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(j,{children:e.jsx(pe,{})}),e.jsx(et,{})]}),e.jsx(it,{children:e.jsx(j,{basis:"100%",grow:1,shrink:1,children:e.jsx(fe,{})})})]})}),e.jsx(at,{children:e.jsx(Ae,{chapters:t,markers:y})}),e.jsx(me,{})]})},nt=f.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,ot=f(j)`
  flex: 1;
  overflow: hidden;
`,it=f(j)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;

  @media (max-width: 768px) {
    display: none;
  }
`,at=f(j)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{Wt as MindSet};
