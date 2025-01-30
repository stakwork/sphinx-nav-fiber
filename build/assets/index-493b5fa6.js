import{c as te,j as e,s as p,a as k,F as v,T as re,r as s,n as se,u as O,A as ne,o as oe,e as ie,p as ae,q as ce,t as Z}from"./index-65d2402f.js";import{Universe as le}from"./index-c2c60ea8.js";import{b as $,c as de,d as pe,I as ue,e as X,a as fe}from"./index-7445f9e2.js";import{M as ge,V as xe}from"./VolumeIcon-d7584ef7.js";import{S as he,R as me,s as V,M as ye}from"./index-f62ecea4.js";import"./index-2f01e549.js";import"./VisibilityOn-a43cdb04.js";import"./SourcesTableIcon-bb5fa766.js";import"./NodeCircleIcon-f78048bc.js";import"./SoundIcon-0ccc17ec.js";import"./CheckIcon-06b44ae4.js";import"./DeleteNodeIcon-8e205e45.js";import"./EditNodeIcon-d0d6ea6e.js";import"./SearchIcon-ddf0c3c3.js";import"./SucessFeedBackIcon-49eb2be6.js";import"./three.module-71ec604c.js";import"./TextareaAutosize-36b5ee4c.js";import"./index-24124e9e.js";import"./ClipLoader-fb365489.js";import"./Skeleton-5f011463.js";import"./Stack-91e4320d.js";import"./index-f63bb01e.js";import"./isPlainObject-150008a5.js";import"./Typography-75c579f7.js";import"./createSvgIcon-60a91767.js";const we={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null,clips:[]},D=te(t=>({...we,setSelectedEpisodeId:o=>t({selectedEpisodeId:o}),setSelectedEpisodeLink:o=>t({selectedEpisodeLink:o}),setSelectedEpisode:o=>t({selectedEpisode:o}),setClips:o=>t({clips:o})})),Ce=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),je=()=>e.jsxs(be,{children:[e.jsx(ve,{children:e.jsx(Se,{children:e.jsx(Ce,{})})}),e.jsx(ke,{children:"Graph Mindset"})]}),be=p(v).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,ve=p(v)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Se=p.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${k.white};
  }
`,ke=p(re)`
  width: 127px;
  height: 24px;
  color: ${k.white};
  font-family: Barlow;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.22px;
  margin-left: 16px;
  white-space: nowrap;
`,Y=s.memo(()=>{const t=$(n=>n.isPlaying),o=$(n=>n.setIsPlaying),r=$(n=>n.setVolume),c=$(n=>n.setPlaybackSpeed),x=$(n=>n.playbackSpeed),a=$(n=>n.playerRef),[j,b]=s.useState(!1),u=[.5,1,1.5,2],h=()=>{if(a){const n=a.getCurrentTime()-15;a.seekTo(n,"seconds")}},d=()=>{if(a){const n=a.getCurrentTime()+15;a.seekTo(n,"seconds")}},I=()=>{o(!t)},l=()=>{b(!j),r(j?1:0)},g=()=>{const S=(u.indexOf(x)+1)%u.length,P=u[S];if(c(P),a){const T=a.getInternalPlayer();T&&typeof T.playbackRate<"u"&&(T.playbackRate=P)}};return e.jsxs(Te,{children:[e.jsx(Me,{onClick:l,children:j?e.jsx(ge,{}):e.jsx(xe,{})}),e.jsx(Ee,{onClick:h,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(Ie,{"data-testid":"play-pause-button",onClick:I,size:"small",children:t?e.jsx(de,{"data-testid":"pause-icon"}):e.jsx(pe,{"data-testid":"play-icon"})}),e.jsx(Pe,{onClick:d,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})}),e.jsxs(Re,{onClick:g,children:[x,"x"]})]})});Y.displayName="Controls";const Te=p(v).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,Ie=p(ue)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Ee=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Pe=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Me=p.div`
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
`,Re=p.button`
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
`,J=s.memo(({type:t,left:o,img:r})=>{var u,h;const c=se(d=>d.normalizedSchemasByType),x=(u=c[t])==null?void 0:u.primary_color,a=(h=c[t])==null?void 0:h.icon,j=a?`/svg-icons/${a}.svg`:"",b={iconStart:r||j,color:x??k.THING};return e.jsx($e,{style:{left:`${o}%`},children:e.jsx(K,{...b,label:t})})});J.displayName="Marker";const K=s.memo(({iconStart:t,color:o,label:r})=>e.jsx(_e,{color:o,children:t&&e.jsx("img",{alt:r,className:"badge__img",onError:console.log,src:t})}));K.displayName="Badge";const _e=p(v).attrs({direction:"row"})`
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
`,$e=p.div`
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
`,Q=s.memo(({markers:t,duration:o})=>e.jsx(e.Fragment,{children:t.map((r,c)=>{var b;const x=Math.floor(((r==null?void 0:r.start)||0)/o*100),a=(r==null?void 0:r.node_type)||"",j=((b=r==null?void 0:r.properties)==null?void 0:b.image_url)||"";return e.jsx(J,{img:j,left:x,type:a},`${r.ref_id}_${c}`)})}));Q.displayName="Markers";const He=({duration:t,markers:o,handleProgressChange:r,playingTIme:c})=>{const x=10/t*100;return e.jsxs(Ne,{children:[e.jsx(Be,{max:t,onChange:r,value:c,width:x}),e.jsx(Q,{duration:t,markers:o})]})},Ne=p(v)`
  position: relative;
  flex: 1 1 100%;
`,Be=p(he)`
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
      width: ${({width:t})=>`${t}%`};
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
`,We=({markers:t})=>{const{playingNode:o,playerRef:r}=$(u=>u),[c,x]=s.useState(0),a=o,j=s.useCallback((u,h)=>{const d=Array.isArray(h)?h[0]:h;r&&r.seekTo(d,"seconds")},[r]);s.useEffect(()=>{const u=setInterval(()=>{if(r&&x){const h=r.getCurrentTime();x(h)}},500);return()=>clearInterval(u)},[r,x]);const b=(r==null?void 0:r.getDuration())||0;return a?e.jsxs(Fe,{children:[e.jsx(Y,{}),e.jsx(He,{duration:b,handleProgressChange:j,markers:t,playingTIme:c})]}):null},Fe=p(v).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${k.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Ae=(t,o)=>{let r=0,c=t.length-1;for(;r<=c;){const x=Math.floor((r+c)/2),a=t[x],{start:j,end:b}=a.properties;if(o>=j&&o<=b)return a;o<j?c=x-1:r=x+1}return null},ze=({mediaUrl:t})=>{const o=s.useRef(null),[r,c]=s.useState("ready"),[x,a]=s.useState(!1),{setActiveEdge:j}=X(w=>w),{dataInitial:b}=O(w=>w),{isPlaying:u,playingTime:h,setIsPlaying:d,setPlayingTime:I,setDuration:l,playingNode:g,volume:n,setHasError:S,resetPlayer:P,isSeeking:T,setIsSeeking:B,setPlayerRef:W,playerRef:H,playbackSpeed:f}=$(w=>w);s.useEffect(()=>()=>P(),[P]),s.useEffect(()=>{g&&!x&&(I(0),l(0),a(!1))},[g,I,l,a,x]),s.useEffect(()=>{T&&H&&(H.seekTo(h,"seconds"),B(!1))},[h,T,B,H]);const m=s.useCallback(()=>{d(!u)},[u,d]),i=()=>{S(!0),c("error")},y=s.useCallback(w=>{w.code},[m]);s.useEffect(()=>(window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}),[y]);const E=s.useMemo(()=>((b==null?void 0:b.links.filter(C=>{var _;return(_=C==null?void 0:C.properties)==null?void 0:_.start}))||[]).slice().sort((C,_)=>{var L,U;return((L=C==null?void 0:C.properties)==null?void 0:L.start)-((U=_==null?void 0:_.properties)==null?void 0:U.start)}),[b]),R=w=>{if(!T){const N=w.playedSeconds,C=Ae(E,N);j(C||null)}},M=()=>{H&&c("ready")},F=s.useCallback(()=>{u||d(!0)},[d,u]),z=s.useCallback(()=>{u&&d(!1)},[d,u]),A=w=>{w.stopPropagation()},G=s.useCallback(w=>{!H&&w&&W(w)},[W,H]);return t?e.jsxs(Ge,{ref:o,tabIndex:0,children:[e.jsx(Le,{isFullScreen:!1,children:e.jsx(ne,{size:120,src:(g==null?void 0:g.image_url)||"",type:"clip"})}),e.jsx(Ze,{isFullScreen:!1,onClick:A,children:e.jsx(me,{ref:G,height:"219px",onBuffer:()=>c("buffering"),onBufferEnd:()=>c("ready"),onError:i,onPause:z,onPlay:F,onProgress:R,onReady:M,playbackRate:f,playing:u,url:t||"",volume:n,width:"100%"})}),r==="error"?e.jsx(De,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Ge=p(v)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Le=p(v)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,De=p(v)`
  height: 60px;
  padding: 12px 16px;
  color: ${k.primaryRed};
`,Ze=p.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Ve=s.memo(ze),ee=s.forwardRef(({active:t,start:o,text:r},c)=>e.jsxs(qe,{ref:c,className:oe({active:t}),children:[e.jsx(Oe,{children:o}),e.jsx(Ue,{children:e.jsx("span",{children:r})})]}));ee.displayName="ParagraphComponent";const q=s.memo(ee,(t,o)=>t.active===o.active),qe=p(v)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${k.AI_HIGHLIGHT};
  }
`,Oe=p.span`
  background: ${k.lightBlue100};
  color: ${k.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Ue=p.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${k.AI_HIGHLIGHT};
  }
`,Xe=({transcriptString:t,isFirst:o})=>{const[r,c]=s.useState(0),[x,a]=s.useState(!1),{playerRef:j}=$(l=>l),b=t.replace(/^["']|["']$/g,""),u=JSON.parse(b),h=s.useRef(null),d=s.useRef(null),I=s.useRef(null);return s.useEffect(()=>{const l=setInterval(()=>{if(j&&c){const g=j.getCurrentTime();c(g)}},100);return()=>clearInterval(l)},[j,c]),s.useEffect(()=>{const l=()=>{a(!0),I.current&&clearTimeout(I.current),I.current=setTimeout(()=>{a(!1)},1e3)},g=d.current;return g&&g.addEventListener("scroll",l),()=>{g&&g.removeEventListener("scroll",l)}},[]),s.useEffect(()=>{!x&&h.current&&h.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,x]),e.jsx(Ye,{ref:d,children:e.jsx(e.Fragment,{children:o?e.jsx(e.Fragment,{children:u[0].start>r?e.jsx(q,{active:!1,start:V(u[0].start),text:u[0].text}):e.jsx(e.Fragment,{children:u.map(l=>{const g=V(l.start),n=l.start<r&&r<l.end;return!o||l.start<=r+5?e.jsx(q,{ref:n?h:null,active:n,start:g,text:l.text},`${l.start}-${l.end}`):null})})}):e.jsx(e.Fragment,{children:u.map(l=>{const g=V(l.start),n=l.start<r&&r<l.end;return e.jsx(q,{ref:n?h:null,active:n,start:g,text:l.text},`${l.start}-${l.end}`)})})})})},Ye=p.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Je=({name:t})=>{var g;const o=D(n=>n.clips),{playerRef:r}=$(n=>n),[c,x]=s.useState(0),[a,j]=s.useState(null),[b,u]=s.useState(!0),[h,d,I]=X(n=>[n.setActiveNode,n.activeNode,n.simulation]);s.useEffect(()=>{const n=setInterval(()=>{if(r&&x){const S=r.getCurrentTime();x(S)}},100);return()=>clearInterval(n)},[r,x]),s.useEffect(()=>{c&&(()=>{var P;const S=o.find(T=>{var H;const[B,W]=l((H=T==null?void 0:T.properties)==null?void 0:H.timestamp);return B<=c&&c<W});a&&(S==null?void 0:S.ref_id)===(a==null?void 0:a.ref_id)||!S||(u((S==null?void 0:S.ref_id)===((P=o[0])==null?void 0:P.ref_id)),j(S||null))})()},[c,o,a]),s.useEffect(()=>{if(a&&(!d||a.ref_id!==d.ref_id)){const n=I==null?void 0:I.nodes().find(S=>S.ref_id===a.ref_id);typeof(n==null?void 0:n.fx)=="number"&&h(n)}},[a,d,h,I]);const l=n=>n?n.split("-").map(Number):[0,0];return e.jsxs(Ke,{children:[e.jsx(v,{className:"heading",children:t}),a?e.jsx(Qe,{direction:"row",children:((g=a.properties)==null?void 0:g.transcript)&&e.jsx(Xe,{isFirst:b,transcriptString:a.properties.transcript})}):null]})},Ke=p(v)`
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
`,Qe=p(v)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,et=()=>{var o;const t=D(r=>r.selectedEpisode);return e.jsxs(tt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(rt,{children:((o=t==null?void 0:t.properties)==null?void 0:o.source_link)&&e.jsx(Ve,{mediaUrl:t.properties.source_link})}),e.jsx(Je,{name:(t==null?void 0:t.name)||""})]})},tt=p(v)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[t.breakpoints.up("sm")]:{width:ye,gap:"10px"}})),rt=p(v)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),_t=()=>{const{isFetching:t,runningProjectId:o}=O(f=>f),r=O(f=>f.addNewNode),[c,x]=s.useState(null),[a,j]=s.useState(!1),b=D(f=>f.setSelectedEpisode),u=D(f=>f.setClips),h=D(f=>f.clips),d=fe(),I=s.useRef(null),l=s.useRef(null),g=s.useRef(null),n=s.useRef(null),S=s.useRef(null),P=ie(),{episodeId:T}=ae(),{setPlayingNode:B}=$(f=>f);s.useEffect(()=>{T&&(async m=>{try{const i=await ce(m);i&&(B(i),b(i),r({nodes:[i],edges:[]}))}catch(i){P("/"),console.error(i)}})(T)},[T,B,b,r,P]),s.useEffect(()=>{T&&(async()=>{try{const m=await Z(T||"",0,50,{nodeType:["Show","Host","Guest"],useSubGraph:!1}),i=await Z(T||"",0,1e3,{nodeType:["Clip"],useSubGraph:!1});if(r({nodes:m!=null&&m.nodes?m==null?void 0:m.nodes:[],edges:m!=null&&m.edges?m.edges:[]}),i!=null&&i.nodes){const y=i.nodes.filter(E=>{var R;return(R=E.properties)==null?void 0:R.timestamp}).sort((E,R)=>{var z,A,G,w;const M=Number((A=(z=E.properties)==null?void 0:z.timestamp)==null?void 0:A.split("-")[0]),F=Number((w=(G=R.properties)==null?void 0:G.timestamp)==null?void 0:w.split("-")[0]);return M-F});u(y)}}catch(m){P("/"),console.error("Error fetching initial data:",m)}})()},[T,r,u,P]),s.useEffect(()=>{if(!h)return;(async()=>{var m,i;try{const y=(h==null?void 0:h.map(R=>R.ref_id).filter(Boolean))||[],E={nodes:((m=g.current)==null?void 0:m.nodes)||[],edges:((i=g.current)==null?void 0:i.edges)||[]};for(const R of y){const M=await Z(R,0,50);M&&(E.nodes.push(...(M==null?void 0:M.nodes)||[]),E.edges.push(...(M==null?void 0:M.edges)||[]),g.current=E,x({...E}))}}catch(y){console.error("Error processing clip nodes:",y)}})()},[h]);const W=s.useCallback(f=>{t||(n.current||(n.current={nodes:[],edges:[]}),f.edges&&n.current.edges.push(...f.edges),f.nodes&&n.current.nodes.push(...f.nodes),S.current&&clearTimeout(S.current),S.current=setTimeout(()=>{if(n.current){const{nodes:m,edges:i}=n.current,y={nodes:m,edges:i};n.current={nodes:[],edges:[]},r(y)}},3e3))},[r,t]);s.useEffect(()=>(d&&(d.connect(),d.on("connect_error",f=>{console.error("Socket connection error:",f)}),o&&d.on("new_node_created",W)),()=>{d&&d.off()}),[d,W,o]),s.useEffect(()=>{const f=m=>{const{playerRef:i}=$.getState();if(l.current!==null){if(m-l.current>1e3){if(g.current&&i){const{nodes:E,edges:R}=g.current,M=i==null?void 0:i.getCurrentTime(),[F,z]=R.reduce(([w,N],C)=>{var _,L;return((_=C==null?void 0:C.properties)==null?void 0:_.start)!==void 0&&((L=C==null?void 0:C.properties)==null?void 0:L.start)<M+1?w.push(C):N.push(C),[w,N]},[[],[]]),[A,G]=E.reduce(([w,N],C)=>(F.some(_=>_.target===C.ref_id||_.source===C.ref_id)?w.push(C):N.push(C),[w,N]),[[],[]]);g.current={nodes:G,edges:z},(A.length||F.length)&&r({nodes:A,edges:F})}l.current=m}}else l.current=m;I.current=requestAnimationFrame(f)};return I.current=requestAnimationFrame(f),()=>{I.current&&cancelAnimationFrame(I.current)}},[g,r]),s.useEffect(()=>{if(o)try{d==null||d.emit("update_project_id",{id:o})}catch(f){console.error(f)}},[o,d]);const H=s.useMemo(()=>{if(c){const f=c.edges.filter(i=>{var y;return(y=i==null?void 0:i.properties)==null?void 0:y.start}).map(i=>{var y;return{source:i.source,target:i.target,start:(y=i.properties)==null?void 0:y.start}});return c.nodes.filter(i=>c.edges.some(y=>y.source===i.ref_id||y.target===i.ref_id)).map(i=>{const y=f.find(E=>i.ref_id===E.source||i.ref_id===E.target);return{...i,start:(y==null?void 0:y.start)||0}}).filter(i=>i&&i.node_type!=="Clip"&&i.node_type!=="Episode"&&i.node_type!=="Show")}return[]},[c]);return e.jsxs(st,{children:[e.jsx(nt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(v,{onClick:()=>j(!a),children:e.jsx(je,{})}),e.jsx(et,{})]}),e.jsx(ot,{children:e.jsx(v,{basis:"100%",grow:1,shrink:1,children:e.jsx(le,{})})})]})}),e.jsx(it,{children:e.jsx(We,{markers:H})})]})},st=p.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,nt=p(v)`
  flex: 1;
  overflow: hidden;
`,ot=p(v)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,it=p(v)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{_t as MindSet};
