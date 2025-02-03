import{c as ie,j as e,s as u,a as v,F as b,T as ae,r as s,n as ce,u as Y,A as le,o as pe,e as de,p as ue,q as fe,t as V}from"./index-c8c7fa60.js";import{Universe as he}from"./index-ad1cd884.js";import{b as W,c as xe,d as ge,I as me,e as J,a as ye}from"./index-f59e3493.js";import{M as we,V as Ce}from"./VolumeIcon-e6886f20.js";import{S as je,R as be,s as O,M as ve}from"./index-250ca99e.js";import"./index-a74c3734.js";import"./VisibilityOn-fba6a4db.js";import"./SourcesTableIcon-e70d8ee2.js";import"./NodeCircleIcon-05989b24.js";import"./SoundIcon-dff145f3.js";import"./CheckIcon-417df54f.js";import"./DeleteNodeIcon-87626fea.js";import"./EditNodeIcon-134dfea5.js";import"./SearchIcon-a791c1c8.js";import"./SucessFeedBackIcon-7de9b7dd.js";import"./three.module-71ec604c.js";import"./TextareaAutosize-0178facd.js";import"./index-14f6b1bb.js";import"./ClipLoader-0e9a1539.js";import"./Skeleton-00730da1.js";import"./Stack-ebdb50ef.js";import"./index-69886605.js";import"./isPlainObject-f8f97ffd.js";import"./Typography-0f1a7f00.js";import"./createSvgIcon-12607cdb.js";function D(t){const[n,r,o]=t.split(":").map(Number);return Number((n*60*60*1e3+r*60*1e3+o*1e3).toFixed(6))}const Se={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null,clips:[]},L=ie(t=>({...Se,setSelectedEpisodeId:n=>t({selectedEpisodeId:n}),setSelectedEpisodeLink:n=>t({selectedEpisodeLink:n}),setSelectedEpisode:n=>t({selectedEpisode:n}),setClips:n=>t({clips:n})})),ke=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Te=()=>e.jsxs(Ie,{children:[e.jsx(Ee,{children:e.jsx(Pe,{children:e.jsx(ke,{})})}),e.jsx($e,{children:"Graph Mindset"})]}),Ie=u(b).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Ee=u(b)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Pe=u.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${v.white};
  }
`,$e=u(ae)`
  width: 127px;
  height: 24px;
  color: ${v.white};
  font-family: Barlow;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.22px;
  margin-left: 16px;
  white-space: nowrap;
`,K=s.memo(()=>{const t=W(a=>a.isPlaying),n=W(a=>a.setIsPlaying),r=W(a=>a.setVolume),o=W(a=>a.setPlaybackSpeed),y=W(a=>a.playbackSpeed),i=W(a=>a.playerRef),[w,C]=s.useState(!1),h=[.5,1,1.5,2],x=()=>{if(i){const a=i.getCurrentTime()-15;i.seekTo(a,"seconds")}},l=()=>{if(i){const a=i.getCurrentTime()+15;i.seekTo(a,"seconds")}},j=()=>{n(!t)},p=()=>{C(!w),r(w?1:0)},g=()=>{const k=(h.indexOf(y)+1)%h.length,E=h[k];if(o(E),i){const M=i.getInternalPlayer();M&&typeof M.playbackRate<"u"&&(M.playbackRate=E)}};return e.jsxs(Me,{children:[e.jsx(He,{onClick:p,children:w?e.jsx(we,{}):e.jsx(Ce,{})}),e.jsx(Re,{onClick:x,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(_e,{"data-testid":"play-pause-button",onClick:j,size:"small",children:t?e.jsx(xe,{"data-testid":"pause-icon"}):e.jsx(ge,{"data-testid":"play-icon"})}),e.jsx(Ne,{onClick:l,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(We,{onClick:g,children:[y,"x"]})]})});K.displayName="Controls";const Me=u(b).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,_e=u(me)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Re=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Ne=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,He=u.div`
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
`,We=u.button`
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
`,Q=s.memo(({left:t,width:n,title:r})=>e.jsx(Fe,{style:{left:`${t}%`,width:`calc(${n}%)`},children:e.jsx("div",{className:"title",children:r})}));Q.displayName="Chapter";const Fe=u.div`
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
`,ee=s.memo(({chapters:t,duration:n})=>n?e.jsx(e.Fragment,{children:t.map((r,o)=>{var x,l,j,p;const y=(x=r==null?void 0:r.properties)!=null&&x.timestamp?D(r.properties.timestamp)/1e3:0,i=(j=(l=t[o+1])==null?void 0:l.properties)!=null&&j.timestamp?D((p=t[o+1].properties)==null?void 0:p.timestamp)/1e3:n,w=Math.floor(y/n*100),h=Math.floor(i/n*100)-w;return e.jsx(Q,{left:w,title:r.name,width:h},`${r.ref_id}_${o}`)})}):null);ee.displayName="Chapters";const te=s.memo(({type:t,left:n,img:r})=>{var h,x;const o=ce(l=>l.normalizedSchemasByType),y=(h=o[t])==null?void 0:h.primary_color,i=(x=o[t])==null?void 0:x.icon,w=i?`/svg-icons/${i}.svg`:"",C={iconStart:r||w,color:y??v.THING};return e.jsx(Ae,{style:{left:`${n}%`},children:e.jsx(re,{...C,label:t})})});te.displayName="Marker";const re=s.memo(({iconStart:t,color:n,label:r})=>e.jsx(Be,{color:n,children:t&&e.jsx("img",{alt:r,className:"badge__img",onError:console.log,src:t})}));re.displayName="Badge";const Be=u(b).attrs({direction:"row"})`
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
`,Ae=u.div`
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
`,se=s.memo(({markers:t,duration:n})=>e.jsx(e.Fragment,{children:t.map((r,o)=>{var C;const y=Math.floor(((r==null?void 0:r.start)||0)/n*100),i=(r==null?void 0:r.node_type)||"",w=((C=r==null?void 0:r.properties)==null?void 0:C.image_url)||"";return e.jsx(te,{img:w,left:y,type:i},`${r.ref_id}_${o}`)})}));se.displayName="Markers";const ze=({duration:t,markers:n,handleProgressChange:r,playingTIme:o,chapters:y})=>{const i=10/t*100;return e.jsxs(Ge,{children:[e.jsx(Ze,{max:t,onChange:r,value:o,width:i}),e.jsx(ne,{children:e.jsx(ee,{chapters:y,duration:t})}),e.jsx(Le,{children:e.jsx(se,{duration:t,markers:n})})]})},ne=u(b)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,Ge=u(b)`
  position: relative;
  flex: 1 1 100%;

  &:hover {
    ${ne} {
      display: block;
    }
  }
`,Le=u(b)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,Ze=u(je)`
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
      width: ${({width:t})=>`${t}%`};
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
`,Ve=({markers:t,chapters:n})=>{const{playingNode:r,playerRef:o}=W(x=>x),[y,i]=s.useState(0),w=r,C=s.useCallback((x,l)=>{const j=Array.isArray(l)?l[0]:l;o&&o.seekTo(j,"seconds")},[o]);s.useEffect(()=>{const x=setInterval(()=>{if(o&&i){const l=o.getCurrentTime();i(l)}},500);return()=>clearInterval(x)},[o,i]);const h=(o==null?void 0:o.getDuration())||0;return w?e.jsxs(De,{children:[e.jsx(K,{}),e.jsx(ze,{chapters:n,duration:h,handleProgressChange:C,markers:t,playingTIme:y})]}):null},De=u(b).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${v.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,qe=(t,n)=>{let r=0,o=t.length-1;for(;r<=o;){const y=Math.floor((r+o)/2),i=t[y],{start:w,end:C}=i.properties;if(n>=w&&n<=C)return i;n<w?o=y-1:r=y+1}return null},Oe=({mediaUrl:t})=>{const n=s.useRef(null),[r,o]=s.useState("ready"),[y,i]=s.useState(!1),{setActiveEdge:w}=J(S=>S),{dataInitial:C}=Y(S=>S),{isPlaying:h,playingTime:x,setIsPlaying:l,setPlayingTime:j,setDuration:p,playingNode:g,volume:a,setHasError:k,resetPlayer:E,isSeeking:M,setIsSeeking:F,setPlayerRef:_,playerRef:N,playbackSpeed:Z}=W(S=>S);s.useEffect(()=>()=>E(),[E]),s.useEffect(()=>{g&&!y&&(j(0),p(0),i(!1))},[g,j,p,i,y]),s.useEffect(()=>{M&&N&&(N.seekTo(x,"seconds"),F(!1))},[x,M,F,N]);const q=s.useCallback(()=>{l(!h)},[h,l]),f=()=>{k(!0),o("error")},d=s.useCallback(S=>{S.code},[q]);s.useEffect(()=>(window.addEventListener("keydown",d),()=>{window.removeEventListener("keydown",d)}),[d]);const c=s.useMemo(()=>((C==null?void 0:C.links.filter(I=>{var H;return(H=I==null?void 0:I.properties)==null?void 0:H.start}))||[]).slice().sort((I,H)=>{var $,B;return(($=I==null?void 0:I.properties)==null?void 0:$.start)-((B=H==null?void 0:H.properties)==null?void 0:B.start)}),[C]),m=S=>{if(!M){const z=S.playedSeconds,I=qe(c,z);w(I||null)}},T=()=>{N&&o("ready")},R=s.useCallback(()=>{h||l(!0)},[l,h]),P=s.useCallback(()=>{h&&l(!1)},[l,h]),A=S=>{S.stopPropagation()},G=s.useCallback(S=>{!N&&S&&_(S)},[_,N]);return t?e.jsxs(Xe,{ref:n,tabIndex:0,children:[e.jsx(Ye,{isFullScreen:!1,children:e.jsx(le,{size:120,src:(g==null?void 0:g.image_url)||"",type:"clip"})}),e.jsx(Je,{isFullScreen:!1,onClick:A,children:e.jsx(be,{ref:G,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:f,onPause:P,onPlay:R,onProgress:m,onReady:T,playbackRate:Z,playing:h,url:t||"",volume:a,width:"100%"})}),r==="error"?e.jsx(Ue,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Xe=u(b)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Ye=u(b)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Ue=u(b)`
  height: 60px;
  padding: 12px 16px;
  color: ${v.primaryRed};
`,Je=u.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Ke=s.memo(Oe),oe=s.forwardRef(({active:t,start:n,text:r},o)=>e.jsxs(Qe,{ref:o,className:pe({active:t}),children:[e.jsx(et,{children:n}),e.jsx(tt,{children:e.jsx("span",{children:r})})]}));oe.displayName="ParagraphComponent";const X=s.memo(oe,(t,n)=>t.active===n.active),Qe=u(b)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${v.AI_HIGHLIGHT};
  }
`,et=u.span`
  background: ${v.lightBlue100};
  color: ${v.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,tt=u.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${v.AI_HIGHLIGHT};
  }
`,rt=({transcriptString:t,isFirst:n})=>{const[r,o]=s.useState(0),[y,i]=s.useState(!1),{playerRef:w}=W(p=>p),C=t.replace(/^["']|["']$/g,""),h=JSON.parse(C),x=s.useRef(null),l=s.useRef(null),j=s.useRef(null);return s.useEffect(()=>{const p=setInterval(()=>{if(w&&o){const g=w.getCurrentTime();o(g)}},100);return()=>clearInterval(p)},[w,o]),s.useEffect(()=>{const p=()=>{i(!0),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{i(!1)},1e3)},g=l.current;return g&&g.addEventListener("scroll",p),()=>{g&&g.removeEventListener("scroll",p)}},[]),s.useEffect(()=>{!y&&x.current&&x.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,y]),e.jsx(st,{ref:l,children:e.jsx(e.Fragment,{children:n?e.jsx(e.Fragment,{children:h[0].start>r?e.jsx(X,{active:!1,start:O(h[0].start),text:h[0].text}):e.jsx(e.Fragment,{children:h.map(p=>{const g=O(p.start),a=p.start<r&&r<p.end;return!n||p.start<=r+5?e.jsx(X,{ref:a?x:null,active:a,start:g,text:p.text},`${p.start}-${p.end}`):null})})}):e.jsx(e.Fragment,{children:h.map(p=>{const g=O(p.start),a=p.start<r&&r<p.end;return e.jsx(X,{ref:a?x:null,active:a,start:g,text:p.text},`${p.start}-${p.end}`)})})})})},st=u.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,nt=({name:t})=>{var g;const n=L(a=>a.clips),{playerRef:r}=W(a=>a),[o,y]=s.useState(0),[i,w]=s.useState(null),[C,h]=s.useState(!0),[x,l,j]=J(a=>[a.setActiveNode,a.activeNode,a.simulation]);s.useEffect(()=>{const a=setInterval(()=>{if(r&&y){const k=r.getCurrentTime();y(k)}},100);return()=>clearInterval(a)},[r,y]),s.useEffect(()=>{o&&(()=>{var E;const k=n.find(M=>{var N;const[F,_]=p((N=M==null?void 0:M.properties)==null?void 0:N.timestamp);return F<=o&&o<_});i&&(k==null?void 0:k.ref_id)===(i==null?void 0:i.ref_id)||!k||(h((k==null?void 0:k.ref_id)===((E=n[0])==null?void 0:E.ref_id)),w(k||null))})()},[o,n,i]),s.useEffect(()=>{if(i&&(!l||i.ref_id!==l.ref_id)){const a=j==null?void 0:j.nodes().find(k=>k.ref_id===i.ref_id);typeof(a==null?void 0:a.fx)=="number"&&x(a)}},[i,l,x,j]);const p=a=>a?a.split("-").map(Number):[0,0];return e.jsxs(ot,{children:[e.jsx(b,{className:"heading",children:t}),i?e.jsx(it,{direction:"row",children:((g=i.properties)==null?void 0:g.transcript)&&e.jsx(rt,{isFirst:C,transcriptString:i.properties.transcript})}):null]})},ot=u(b)`
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
`,it=u(b)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,at=()=>{var n;const t=L(r=>r.selectedEpisode);return e.jsxs(ct,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(lt,{children:((n=t==null?void 0:t.properties)==null?void 0:n.source_link)&&e.jsx(Ke,{mediaUrl:t.properties.source_link})}),e.jsx(nt,{name:(t==null?void 0:t.name)||""})]})},ct=u(b)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[t.breakpoints.up("sm")]:{width:ve,gap:"10px"}})),lt=u(b)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),At=()=>{const{isFetching:t,runningProjectId:n}=Y(f=>f),r=Y(f=>f.addNewNode),[o,y]=s.useState(null),[i,w]=s.useState(!1),C=L(f=>f.setSelectedEpisode),h=L(f=>f.setClips),x=L(f=>f.clips),l=ye(),j=s.useRef(null),p=s.useRef(null),g=s.useRef(null),[a,k]=s.useState([]),E=s.useRef(null),M=s.useRef(null),F=de(),{episodeId:_}=ue(),{setPlayingNode:N}=W(f=>f);s.useEffect(()=>{_&&(async d=>{try{const c=await fe(d);c&&(N(c),C(c),r({nodes:[c],edges:[]}))}catch(c){F("/"),console.error(c)}})(_)},[_,N,C,r,F]),s.useEffect(()=>{_&&(async()=>{try{const d=await V(_||"",0,50,{nodeType:["Show","Host","Guest"],useSubGraph:!1}),c=await V(_||"",0,1e3,{nodeType:["Clip"],useSubGraph:!1});if(r({nodes:d!=null&&d.nodes?d==null?void 0:d.nodes:[],edges:d!=null&&d.edges?d.edges:[]}),c!=null&&c.nodes){const m=c.nodes.filter(T=>{var R;return(R=T.properties)==null?void 0:R.timestamp}).sort((T,R)=>{var G,S,z,I;const P=Number((S=(G=T.properties)==null?void 0:G.timestamp)==null?void 0:S.split("-")[0]),A=Number((I=(z=R.properties)==null?void 0:z.timestamp)==null?void 0:I.split("-")[0]);return P-A});h(m)}}catch(d){F("/"),console.error("Error fetching initial data:",d)}})()},[_,r,h,F]),s.useEffect(()=>{_&&(async()=>{try{const d=await V(_||"",0,50,{nodeType:["Chapter"],useSubGraph:!1});if(d!=null&&d.nodes){const c=d==null?void 0:d.nodes.filter(m=>m.node_type==="Chapter").sort((m,T)=>{var R,P;return D(((R=m==null?void 0:m.properties)==null?void 0:R.timestamp)||"")-D(((P=T==null?void 0:T.properties)==null?void 0:P.timestamp)||"")});k(c)}}catch{console.log("no chapters was fetched")}})()},[_,k]),s.useEffect(()=>{if(!x)return;(async()=>{var d,c;try{const m=(x==null?void 0:x.map(R=>R.ref_id).filter(Boolean))||[],T={nodes:((d=g.current)==null?void 0:d.nodes)||[],edges:((c=g.current)==null?void 0:c.edges)||[]};for(const R of m){const P=await V(R,0,50);P&&(T.nodes.push(...(P==null?void 0:P.nodes)||[]),T.edges.push(...(P==null?void 0:P.edges)||[]),g.current=T,y({...T}))}}catch(m){console.error("Error processing clip nodes:",m)}})()},[x]);const Z=s.useCallback(f=>{t||(E.current||(E.current={nodes:[],edges:[]}),f.edges&&E.current.edges.push(...f.edges),f.nodes&&E.current.nodes.push(...f.nodes),M.current&&clearTimeout(M.current),M.current=setTimeout(()=>{if(E.current){const{nodes:d,edges:c}=E.current,m={nodes:d,edges:c};E.current={nodes:[],edges:[]},r(m)}},3e3))},[r,t]);s.useEffect(()=>(l&&(l.connect(),l.on("connect_error",f=>{console.error("Socket connection error:",f)}),n&&l.on("new_node_created",Z)),()=>{l&&l.off()}),[l,Z,n]),s.useEffect(()=>{const f=d=>{const{playerRef:c}=W.getState();if(p.current!==null){if(d-p.current>1e3){if(g.current&&c){const{nodes:T,edges:R}=g.current,P=c==null?void 0:c.getCurrentTime(),[A,G]=R.reduce(([I,H],$)=>{var B,U;return((B=$==null?void 0:$.properties)==null?void 0:B.start)!==void 0&&((U=$==null?void 0:$.properties)==null?void 0:U.start)<P+1?I.push($):H.push($),[I,H]},[[],[]]),[S,z]=T.reduce(([I,H],$)=>(A.some(B=>B.target===$.ref_id||B.source===$.ref_id)?I.push($):H.push($),[I,H]),[[],[]]);g.current={nodes:z,edges:G},(S.length||A.length)&&r({nodes:S,edges:A})}p.current=d}}else p.current=d;j.current=requestAnimationFrame(f)};return j.current=requestAnimationFrame(f),()=>{j.current&&cancelAnimationFrame(j.current)}},[g,r]),s.useEffect(()=>{if(n)try{l==null||l.emit("update_project_id",{id:n})}catch(f){console.error(f)}},[n,l]);const q=s.useMemo(()=>{if(o){const f=o.edges.filter(c=>{var m;return(m=c==null?void 0:c.properties)==null?void 0:m.start}).map(c=>{var m;return{source:c.source,target:c.target,start:(m=c.properties)==null?void 0:m.start}});return o.nodes.filter(c=>o.edges.some(m=>m.source===c.ref_id||m.target===c.ref_id)).map(c=>{const m=f.find(T=>c.ref_id===T.source||c.ref_id===T.target);return{...c,start:(m==null?void 0:m.start)||0}}).filter(c=>c&&c.node_type!=="Clip"&&c.node_type!=="Episode"&&c.node_type!=="Show")}return[]},[o]);return e.jsxs(pt,{children:[e.jsx(dt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(b,{onClick:()=>w(!i),children:e.jsx(Te,{})}),e.jsx(at,{})]}),e.jsx(ut,{children:e.jsx(b,{basis:"100%",grow:1,shrink:1,children:e.jsx(he,{})})})]})}),e.jsx(ft,{children:e.jsx(Ve,{chapters:a,markers:q})})]})},pt=u.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,dt=u(b)`
  flex: 1;
  overflow: hidden;
`,ut=u(b)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,ft=u(b)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{At as MindSet};
