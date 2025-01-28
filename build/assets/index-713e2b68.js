import{c as te,j as e,s as p,a as k,F as v,T as re,r as s,d as se,u as U,A as ne,x as oe,o as ie,y as ae,z as ce,D as Z}from"./index-173367b0.js";import{Universe as le}from"./index-1bbfd612.js";import{b as M,M as de,V as pe,c as ue,d as fe,e as ge,f as X,a as xe}from"./index-ae00d897.js";import{S as he,R as me,s as V,M as ye}from"./index-b765971c.js";import"./index-6b605210.js";import"./three.module-71ec604c.js";import"./index-b8763128.js";import"./TextareaAutosize-bbb033e8.js";import"./index-a10e087d.js";import"./ClipLoader-1925a497.js";import"./Skeleton-c61d24ca.js";import"./Stack-4b34548b.js";import"./index-1aff0ad0.js";import"./isPlainObject-431e99e4.js";import"./Typography-63a2d8a3.js";import"./createSvgIcon-8bd3f7fc.js";const we={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null,clips:[]},D=te(t=>({...we,setSelectedEpisodeId:i=>t({selectedEpisodeId:i}),setSelectedEpisodeLink:i=>t({selectedEpisodeLink:i}),setSelectedEpisode:i=>t({selectedEpisode:i}),setClips:i=>t({clips:i})})),Ce=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),je=()=>e.jsxs(be,{children:[e.jsx(ve,{children:e.jsx(Se,{children:e.jsx(Ce,{})})}),e.jsx(ke,{children:"Graph Mindset"})]}),be=p(v).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
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
`,Y=s.memo(()=>{const t=M(n=>n.isPlaying),i=M(n=>n.setIsPlaying),r=M(n=>n.setVolume),c=M(n=>n.setPlaybackSpeed),g=M(n=>n.playbackSpeed),a=M(n=>n.playerRef),[w,j]=s.useState(!1),u=[.5,1,1.5,2],h=()=>{if(a){const n=a.getCurrentTime()-15;a.seekTo(n,"seconds")}},d=()=>{if(a){const n=a.getCurrentTime()+15;a.seekTo(n,"seconds")}},I=()=>{i(!t)},l=()=>{j(!w),r(w?1:0)},f=()=>{const S=(u.indexOf(g)+1)%u.length,E=u[S];if(c(E),a){const T=a.getInternalPlayer();T&&typeof T.playbackRate<"u"&&(T.playbackRate=E)}};return e.jsxs(Te,{children:[e.jsx(Me,{onClick:l,children:w?e.jsx(de,{}):e.jsx(pe,{})}),e.jsx(Ee,{onClick:h,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(Ie,{"data-testid":"play-pause-button",onClick:I,size:"small",children:t?e.jsx(ue,{"data-testid":"pause-icon"}):e.jsx(fe,{"data-testid":"play-icon"})}),e.jsx(Pe,{onClick:d,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})}),e.jsxs(Re,{onClick:f,children:[g,"x"]})]})});Y.displayName="Controls";const Te=p(v).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,Ie=p(ge)`
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
`,J=s.memo(({type:t,left:i,img:r})=>{var u,h;const c=se(d=>d.normalizedSchemasByType),g=(u=c[t])==null?void 0:u.primary_color,a=(h=c[t])==null?void 0:h.icon,w=a?`svg-icons/${a}.svg`:"",j={iconStart:r||w,color:g??k.THING};return e.jsx($e,{style:{left:`${i}%`},children:e.jsx(K,{...j,label:t})})});J.displayName="Marker";const K=s.memo(({iconStart:t,color:i,label:r})=>e.jsx(_e,{color:i,children:t&&e.jsx("img",{alt:r,className:"badge__img",src:t})}));K.displayName="Badge";const _e=p(v).attrs({direction:"row"})`
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
`,Q=s.memo(({markers:t,duration:i})=>e.jsx(e.Fragment,{children:t.map((r,c)=>{var j;const g=Math.floor(((r==null?void 0:r.start)||0)/i*200),a=(r==null?void 0:r.node_type)||"",w=((j=r==null?void 0:r.properties)==null?void 0:j.image_url)||"";return e.jsx(J,{img:w,left:g,type:a},`${r.ref_id}_${c}`)})}));Q.displayName="Markers";const He=({duration:t,markers:i,handleProgressChange:r,playingTIme:c})=>{const g=10/t*100;return e.jsxs(We,{children:[e.jsx(Be,{max:t,onChange:r,value:c,width:g}),e.jsx(Q,{duration:t,markers:i})]})},We=p(v)`
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
`,Fe=({markers:t})=>{const{playingNode:i,playerRef:r}=M(u=>u),[c,g]=s.useState(0),a=i,w=s.useCallback((u,h)=>{const d=Array.isArray(h)?h[0]:h;r&&r.seekTo(d,"seconds")},[r]);s.useEffect(()=>{const u=setInterval(()=>{if(r&&g){const h=r.getCurrentTime();g(h)}},500);return()=>clearInterval(u)},[r,g]);const j=(r==null?void 0:r.getDuration())||0;return a?e.jsxs(Ae,{children:[e.jsx(Y,{}),e.jsx(He,{duration:j,handleProgressChange:w,markers:t,playingTIme:c})]}):null},Ae=p(v).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${k.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,ze=(t,i)=>{let r=0,c=t.length-1;for(;r<=c;){const g=Math.floor((r+c)/2),a=t[g],{start:w,end:j}=a.properties;if(i>=w&&i<=j)return a;i<w?c=g-1:r=g+1}return null},De=({mediaUrl:t})=>{const i=s.useRef(null),[r,c]=s.useState("ready"),[g,a]=s.useState(!1),{setActiveEdge:w}=X(b=>b),{dataInitial:j}=U(b=>b),{isPlaying:u,playingTime:h,setIsPlaying:d,setPlayingTime:I,setDuration:l,playingNode:f,volume:n,setHasError:S,resetPlayer:E,isSeeking:T,setIsSeeking:W,setPlayerRef:B,playerRef:R,playbackSpeed:x}=M(b=>b);s.useEffect(()=>()=>E(),[E]),s.useEffect(()=>{f&&!g&&(I(0),l(0),a(!1))},[f,I,l,a,g]),s.useEffect(()=>{T&&R&&(R.seekTo(h,"seconds"),W(!1))},[h,T,W,R]);const m=s.useCallback(()=>{d(!u)},[u,d]),o=()=>{S(!0),c("error")},C=s.useCallback(b=>{b.code},[m]);s.useEffect(()=>(window.addEventListener("keydown",C),()=>{window.removeEventListener("keydown",C)}),[C]);const _=s.useMemo(()=>((j==null?void 0:j.links.filter(y=>{var P;return(P=y==null?void 0:y.properties)==null?void 0:P.start}))||[]).slice().sort((y,P)=>{var z,q;return((z=y==null?void 0:y.properties)==null?void 0:z.start)-((q=P==null?void 0:P.properties)==null?void 0:q.start)}),[j]),F=b=>{if(!T){const H=b.playedSeconds,y=ze(_,H);w(y||null)}},$=()=>{R&&c("ready")},A=s.useCallback(()=>{u||d(!0)},[d,u]),G=s.useCallback(()=>{u&&d(!1)},[d,u]),N=b=>{b.stopPropagation()},L=s.useCallback(b=>{!R&&b&&B(b)},[B,R]);return t?e.jsxs(Ne,{ref:i,tabIndex:0,children:[e.jsx(Ge,{isFullScreen:!1,children:e.jsx(ne,{size:120,src:(f==null?void 0:f.image_url)||"",type:"clip"})}),e.jsx(Ze,{isFullScreen:!1,onClick:N,children:e.jsx(me,{ref:L,height:"219px",onBuffer:()=>c("buffering"),onBufferEnd:()=>c("ready"),onError:o,onPause:G,onPlay:A,onProgress:F,onReady:$,playbackRate:x,playing:u,url:t||"",volume:n,width:"100%"})}),r==="error"?e.jsx(Le,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Ne=p(v)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Ge=p(v)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Le=p(v)`
  height: 60px;
  padding: 12px 16px;
  color: ${k.primaryRed};
`,Ze=p.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Ve=s.memo(De),ee=s.forwardRef(({active:t,start:i,text:r},c)=>e.jsxs(Oe,{ref:c,className:oe({active:t}),children:[e.jsx(qe,{children:i}),e.jsx(Ue,{children:e.jsx("span",{children:r})})]}));ee.displayName="ParagraphComponent";const O=s.memo(ee,(t,i)=>t.active===i.active),Oe=p(v)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${k.AI_HIGHLIGHT};
  }
`,qe=p.span`
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
`,Xe=({transcriptString:t,isFirst:i})=>{const[r,c]=s.useState(0),[g,a]=s.useState(!1),{playerRef:w}=M(l=>l),j=t.replace(/^["']|["']$/g,""),u=JSON.parse(j),h=s.useRef(null),d=s.useRef(null),I=s.useRef(null);return s.useEffect(()=>{const l=setInterval(()=>{if(w&&c){const f=w.getCurrentTime();c(f)}},100);return()=>clearInterval(l)},[w,c]),s.useEffect(()=>{const l=()=>{a(!0),I.current&&clearTimeout(I.current),I.current=setTimeout(()=>{a(!1)},1e3)},f=d.current;return f&&f.addEventListener("scroll",l),()=>{f&&f.removeEventListener("scroll",l)}},[]),s.useEffect(()=>{!g&&h.current&&h.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,g]),e.jsx(Ye,{ref:d,children:e.jsx(e.Fragment,{children:i?e.jsx(e.Fragment,{children:u[0].start>r?e.jsx(O,{active:!1,start:V(u[0].start),text:u[0].text}):e.jsx(e.Fragment,{children:u.map(l=>{const f=V(l.start),n=l.start<r&&r<l.end;return!i||l.start<=r+5?e.jsx(O,{ref:n?h:null,active:n,start:f,text:l.text},`${l.start}-${l.end}`):null})})}):e.jsx(e.Fragment,{children:u.map(l=>{const f=V(l.start),n=l.start<r&&r<l.end;return e.jsx(O,{ref:n?h:null,active:n,start:f,text:l.text},`${l.start}-${l.end}`)})})})})},Ye=p.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Je=({name:t})=>{var f;const i=D(n=>n.clips),{playerRef:r}=M(n=>n),[c,g]=s.useState(0),[a,w]=s.useState(null),[j,u]=s.useState(!0),[h,d,I]=X(n=>[n.setActiveNode,n.activeNode,n.simulation]);s.useEffect(()=>{const n=setInterval(()=>{if(r&&g){const S=r.getCurrentTime();g(S)}},100);return()=>clearInterval(n)},[r,g]),s.useEffect(()=>{c&&(()=>{var E;const S=i.find(T=>{var R;const[W,B]=l((R=T==null?void 0:T.properties)==null?void 0:R.timestamp);return W<=c&&c<B});a&&(S==null?void 0:S.ref_id)===(a==null?void 0:a.ref_id)||!S||(u((S==null?void 0:S.ref_id)===((E=i[0])==null?void 0:E.ref_id)),w(S||null))})()},[c,i,a]),s.useEffect(()=>{if(a&&(!d||a.ref_id!==d.ref_id)){const n=I==null?void 0:I.nodes().find(S=>S.ref_id===a.ref_id);typeof(n==null?void 0:n.fx)=="number"&&h(n)}},[a,d,h,I]);const l=n=>n?n.split("-").map(Number):[0,0];return e.jsxs(Ke,{children:[e.jsx(v,{className:"heading",children:t}),a?e.jsx(Qe,{direction:"row",children:((f=a.properties)==null?void 0:f.transcript)&&e.jsx(Xe,{isFirst:j,transcriptString:a.properties.transcript})}):null]})},Ke=p(v)`
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
`,et=()=>{var i;const t=D(r=>r.selectedEpisode);return e.jsxs(tt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(rt,{children:((i=t==null?void 0:t.properties)==null?void 0:i.source_link)&&e.jsx(Ve,{mediaUrl:t.properties.source_link})}),e.jsx(Je,{name:(t==null?void 0:t.name)||""})]})},tt=p(v)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[t.breakpoints.up("sm")]:{width:ye,gap:"10px"}})),rt=p(v)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),vt=()=>{const{addNewNode:t,isFetching:i,runningProjectId:r}=U(x=>x),[c,g]=s.useState(null),[a,w]=s.useState(!1),j=D(x=>x.setSelectedEpisode),u=D(x=>x.setClips),h=D(x=>x.clips),d=xe(),I=s.useRef(null),l=s.useRef(null),f=s.useRef(null),n=s.useRef(null),S=s.useRef(null),E=ie(),{episodeId:T}=ae(),{setPlayingNode:W}=M(x=>x);s.useEffect(()=>{T&&(async m=>{try{const o=await ce(m);o&&(W(o),j(o),t({nodes:[o],edges:[]}))}catch(o){E("/"),console.error(o)}})(T)},[T,W,j,t,E]),s.useEffect(()=>{T&&(async()=>{try{const m=await Z(T||"",0,50,{nodeType:["Show","Host","Guest"],useSubGraph:!1}),o=await Z(T||"",0,50,{nodeType:["Clip"],useSubGraph:!1});t({nodes:m!=null&&m.nodes?m==null?void 0:m.nodes:[],edges:m!=null&&m.edges?m.edges:[]}),o!=null&&o.nodes&&u(o==null?void 0:o.nodes)}catch(m){E("/"),console.error("Error fetching initial data:",m)}})()},[T,t,u,E]),s.useEffect(()=>{if(!h)return;(async()=>{var m,o;try{const C=(h==null?void 0:h.map(F=>F.ref_id).filter(Boolean))||[],_={nodes:((m=f.current)==null?void 0:m.nodes)||[],edges:((o=f.current)==null?void 0:o.edges)||[]};for(const F of C){const $=await Z(F,0,50);$&&(_.nodes.push(...($==null?void 0:$.nodes)||[]),_.edges.push(...($==null?void 0:$.edges)||[]),f.current=_,g({..._}))}}catch(C){console.error("Error processing clip nodes:",C)}})()},[h]);const B=s.useCallback(x=>{i||(n.current||(n.current={nodes:[],edges:[]}),x.edges&&n.current.edges.push(...x.edges),x.nodes&&n.current.nodes.push(...x.nodes),S.current&&clearTimeout(S.current),S.current=setTimeout(()=>{if(n.current){const{nodes:m,edges:o}=n.current,C={nodes:m,edges:o};n.current={nodes:[],edges:[]},t(C)}},3e3))},[t,i]);s.useEffect(()=>(d&&(d.connect(),d.on("connect_error",x=>{console.error("Socket connection error:",x)}),r&&d.on("new_node_created",B)),()=>{d&&d.off()}),[d,B,r]),s.useEffect(()=>{const x=m=>{const{playerRef:o}=M.getState();if(l.current!==null){if(m-l.current>1e3){if(f.current&&o){const{nodes:_,edges:F}=f.current,$=o==null?void 0:o.getCurrentTime(),[A,G]=F.reduce(([b,H],y)=>{var P,z;return((P=y==null?void 0:y.properties)==null?void 0:P.start)!==void 0&&((z=y==null?void 0:y.properties)==null?void 0:z.start)<$+1?b.push(y):H.push(y),[b,H]},[[],[]]),[N,L]=_.reduce(([b,H],y)=>(A.some(P=>P.target===y.ref_id||P.source===y.ref_id)?b.push(y):H.push(y),[b,H]),[[],[]]);f.current={nodes:L,edges:G},(N.length||A.length)&&t({nodes:N,edges:A})}l.current=m}}else l.current=m;I.current=requestAnimationFrame(x)};return I.current=requestAnimationFrame(x),()=>{I.current&&cancelAnimationFrame(I.current)}},[f,t]),s.useEffect(()=>{if(r)try{d==null||d.emit("update_project_id",{id:r})}catch(x){console.error(x)}},[r,d]);const R=s.useMemo(()=>{if(c){const x=c.edges.filter(o=>{var C;return(C=o==null?void 0:o.properties)==null?void 0:C.start}).map(o=>{var C;return{source:o.source,target:o.target,start:(C=o.properties)==null?void 0:C.start}});return c.nodes.filter(o=>c.edges.some(C=>C.source===o.ref_id||C.target===o.ref_id)).map(o=>{const C=x.find(_=>o.ref_id===_.source||o.ref_id===_.target);return{...o,start:(C==null?void 0:C.start)||0}}).filter(o=>o&&o.node_type!=="Clip"&&o.node_type!=="Episode"&&o.node_type!=="Show")}return[]},[c]);return e.jsxs(st,{children:[e.jsx(nt,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(v,{onClick:()=>w(!a),children:e.jsx(je,{})}),e.jsx(et,{})]}),e.jsx(ot,{children:e.jsx(v,{basis:"100%",grow:1,shrink:1,children:e.jsx(le,{})})})]})}),e.jsx(it,{children:e.jsx(Fe,{markers:R})})]})},st=p.div`
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
`;export{vt as MindSet};
