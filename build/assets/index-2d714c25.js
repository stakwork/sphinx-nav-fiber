import{r as f,y as te,c as re,j as t,s as y,a as b,F as C,T as H,u as P,N as L,z as se,d as oe,A as G,D as ne}from"./index-6f567ed7.js";import{Universe as ie}from"./index-6b7859b5.js";import{T as ae,b as R,c as ce,d as le,e as pe,f as de,g as ue,h as fe,i as xe,a as he}from"./index-c5e79f8f.js";import{S as ge,R as me,M as ye}from"./index-5fc9815e.js";import{u as k,a as V,m as we,H as je,C as Ce}from"./index-0e2da59d.js";import{W as be,L as D,H as _e,D as ve,F as Se,V as E,S as ze}from"./three.module-9c942ca6.js";import"./TextareaAutosize-8c237d8d.js";import"./index-1d7349f8.js";import"./ClipLoader-ea7361cf.js";import"./Skeleton-624e9611.js";import"./Stack-2c4bf386.js";import"./isPlainObject-94a766a8.js";import"./Typography-c7bc2770.js";import"./createSvgIcon-231ee846.js";import"./index-43352a70.js";function Ee(e,r,n){const{gl:s,size:x,viewport:c}=k(),p=typeof e=="number"?e:x.width*c.dpr,i=typeof r=="number"?r:x.height*c.dpr,l=(typeof e=="number"?n:e)||{},{samples:d=0,depth:g,...o}=l,a=f.useMemo(()=>{let w;return w=new be(p,i,{minFilter:D,magFilter:D,encoding:s.outputEncoding,type:_e,...o}),g&&(w.depthTexture=new ve(p,i,Se)),w.samples=d,w},[]);return f.useLayoutEffect(()=>{a.setSize(p,i),d&&(a.samples=d)},[d,a,p,i]),f.useEffect(()=>()=>a.dispose(),[]),a}const Te=e=>typeof e=="function",ke=f.forwardRef(({envMap:e,resolution:r=256,frames:n=1/0,children:s,makeDefault:x,...c},p)=>{const i=k(({set:h})=>h),l=k(({camera:h})=>h),d=k(({size:h})=>h),g=f.useRef(null),o=f.useRef(null),a=Ee(r);f.useLayoutEffect(()=>{c.manual||g.current.updateProjectionMatrix()},[d,c]),f.useLayoutEffect(()=>{g.current.updateProjectionMatrix()}),f.useLayoutEffect(()=>{if(x){const h=l;return i(()=>({camera:g.current})),()=>i(()=>({camera:h}))}},[g,x,i]);let w=0,_=null;const u=Te(s);return V(h=>{u&&(n===1/0||w<n)&&(o.current.visible=!1,h.gl.setRenderTarget(a),_=h.scene.background,e&&(h.scene.background=e),h.gl.render(h.scene,g.current),h.scene.background=_,h.gl.setRenderTarget(null),o.current.visible=!0,w++)}),f.createElement(f.Fragment,null,f.createElement("orthographicCamera",te({left:d.width/-2,right:d.width/2,top:d.height/2,bottom:d.height/-2,ref:we([g,p])},c),!u&&s),f.createElement("group",{ref:o},u&&s(a.texture)))}),Re={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},M=re(e=>({...Re,setSelectedEpisodeId:r=>e({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>e({selectedEpisodeLink:r}),setSelectedEpisode:r=>e({selectedEpisode:r})})),Pe=e=>t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),t.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Me=()=>t.jsxs($e,{children:[t.jsx(Ie,{children:t.jsx(He,{children:t.jsx(Pe,{})})}),t.jsx(Fe,{children:"Graph Mindset"})]}),$e=y(C).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Ie=y(C)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,He=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${b.white};
  }
`,Fe=y(H)`
  width: 127px;
  height: 24px;
  color: ${b.white};
  font-family: Barlow;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.22px;
  margin-left: 16px;
  white-space: nowrap;
`,We=e=>t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Be=/^(https?:\/\/)/,Ae=/(www\.)?/,Le=/[\w-]+(\.[\w-]+)*/,De=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,Ne=/(\/[^\s?]*)?/,Ze=/(\?[^\s]*)?/,Ge=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,Ve=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,qe=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,Ue=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Oe=new RegExp(`${Be.source}${Ae.source}${Le.source}${De.source}?${Ne.source}${Ze.source}$`,"i"),Xe=e=>{try{if(!(e==null?void 0:e.match(Oe)))return!1;const s=new URL(e).hostname;return s!=null&&s.startsWith("www.")?((s==null?void 0:s.match(/\./g))||[]).length>=2:((s==null?void 0:s.match(/\./g))||[]).length>=1}catch{return!1}},N=e=>Xe(e)?[Ge,Ve,qe,Ue].some(n=>n.test(e)):!1,Ye=async e=>{const r="add_node",n={};n.media_url=e.source,n.content_type="audio_video";const s=await se.post(`/${r}`,JSON.stringify(n));if(s.error){const{message:x}=s.error;throw new Error(x)}return s},Ke=()=>{const[e,r]=f.useState(""),[n,s]=f.useState(!1),[x,c]=f.useState(""),{setRunningProjectId:p}=P(o=>o),{setSelectedEpisodeId:i,setSelectedEpisodeLink:l}=M(o=>o),d=o=>{const{value:a}=o.target;r(a),s(a!==""&&!N(a))},g=async()=>{if(N(e))try{const o=await Ye({source:e});o.data.project_id&&p(o.data.project_id),o.data.ref_id&&(i(o.data.ref_id),l(e))}catch(o){let a=L;if((o==null?void 0:o.status)===400){const w=await o.json();a=w.errorCode||(w==null?void 0:w.status)||L,w.data.ref_id&&(i(w.data.ref_id),l(e))}else o instanceof Error&&(a=o.message);c(String(a))}};return t.jsxs(Je,{children:[t.jsx(Qe,{children:"Ideas have shapes"}),t.jsxs(tt,{children:[t.jsx(et,{error:n,onChange:d,onKeyDown:o=>o.key==="Enter"&&g(),placeholder:"Paste podcast or video link",value:e}),t.jsx(rt,{error:n,onClick:n?void 0:g,children:t.jsx(We,{})})]}),x&&t.jsx("div",{children:x})]})},Je=y(C)`
  background: #16161de3;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  font-family: 'Barlow';
  z-index: 40;
`,Qe=y(C)`
  color: ${b.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,et=y.input`
  width: 100%;
  max-width: 450px;
  padding: 12px 28px 12px 16px;
  border-radius: 100px;
  border: 1px solid ${e=>e.error?"red":b.DIVIDER_4};
  background: ${b.INPUT_BG};
  color: ${b.white};
  font-family: Barlow;
  font-size: 16px;

  &::placeholder {
    color: ${b.INPUT_PLACEHOLDER};
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.error?"red":b.primaryBlue};
  }
`,tt=y.div`
  position: relative;
  width: 450px;
  display: flex;
  align-items: center;
`,rt=y.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${b.white};
  font-size: 20px;
  cursor: ${e=>e.error?"not-allowed":"pointer"};

  svg {
    width: 8px;
    height: 17px;
    color: ${b.GRAY6};
  }
`,q=f.memo(({type:e,name:r,left:n})=>{var l,d;const[s]=oe(g=>[g.normalizedSchemasByType]),x=(l=s[e])==null?void 0:l.primary_color,c=(d=s[e])==null?void 0:d.icon,i={iconStart:(c?`svg-icons/${c}.svg`:null)??"thing_badge.svg",color:x??b.THING};return t.jsx(nt,{style:{left:`${n}%`},children:t.jsx(ae,{content:`${r||e}`,children:t.jsx(st,{...i,label:e})})})});q.displayName="Marker";const st=({iconStart:e,color:r,label:n})=>t.jsx(ot,{color:r,children:t.jsx("img",{alt:n,className:"badge__img",src:e})}),ot=y(C).attrs({direction:"row"})`
  cursor: pointer;
  background: ${({color:e})=>e};
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding: 0 4px;

  .badge__img {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }
`,nt=y.div`
  position: absolute;
  top: -4px; /* Adjust as needed to center above the progress bar */
  width: 8px;
  height: 8px;
  background-color: ${b.white};
  border-radius: 50%;
  transform: translateX(-50%); /* Center the marker horizontally */
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,it=({duration:e,markers:r,handleProgressChange:n,playingTIme:s})=>t.jsxs(at,{children:[t.jsx(ct,{max:e,onChange:n,value:s}),r.map(x=>{var l;const c=((x==null?void 0:x.start)||0)/e*100,p=(x==null?void 0:x.node_type)||"",i=((l=x==null?void 0:x.properties)==null?void 0:l.name)||"";return t.jsx(q,{left:c,name:i,type:p},x.ref_id)})]}),at=y(C)`
  position: relative;
  flex: 1 1 100%;
`,ct=y(ge)`
  && {
    z-index: 20;
    color: ${b.white};
    height: 3px;
    width: calc(100% - 12px);
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 10px;
      height: 10px;
      background-color: ${b.white};
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
`,lt=({markers:e})=>{const{isPlaying:r,setIsPlaying:n,playingTime:s,playingNode:x,playerRef:c}=R(o=>o),p=x,i=f.useCallback((o,a)=>{const w=Array.isArray(a)?a[0]:a;c&&c.seekTo(w,"seconds")},[c]),l=()=>{if(c){const o=c.getCurrentTime()-15;c.seekTo(o,"seconds")}},d=()=>{if(c){const o=c.getCurrentTime()+15;c.seekTo(o,"seconds")}},g=(c==null?void 0:c.getDuration())||0;return p?t.jsxs(pt,{children:[t.jsxs(dt,{children:[t.jsx(ft,{onClick:l,children:t.jsx("img",{alt:"",src:"RewindIcon.svg"})}),t.jsx(ut,{"data-testid":"play-pause-button",onClick:o=>{n(!r),o.stopPropagation()},size:"small",children:r?t.jsx(ce,{"data-testid":"pause-icon"}):t.jsx(le,{"data-testid":"play-icon"})}),t.jsx(xt,{onClick:d,children:t.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]}),t.jsx(it,{duration:g,handleProgressChange:i,markers:e,playingTIme:s})]}):null},pt=y(C).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${b.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,dt=y(C).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 142px;
  height: 54px;
  background: ${b.BG1};
  border-radius: 40px;
  margin-right: 54px;
  color: ${b.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,ut=y(pe)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,ft=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,xt=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,ht=({sourcePosition:e,targetPosition:r,color:n="white",arrowSize:s=1})=>{const x=f.useMemo(()=>{const c=new E(e.x,e.y,e.z),p=new E(r.x,r.y,r.z),i=new E().subVectors(p,c).normalize(),l=new E().copy(i).multiplyScalar(-s).applyAxisAngle(new E(0,0,1),Math.PI/6),d=new E().copy(i).multiplyScalar(-s).applyAxisAngle(new E(0,0,1),-Math.PI/6);return[c,p,p.clone(),p.clone().add(l),p.clone(),p.clone().add(d)]},[e,r,s]);return t.jsxs("line",{children:[t.jsx("bufferGeometry",{children:t.jsx("bufferAttribute",{array:new Float32Array(x.flatMap(c=>[c.x,c.y,c.z])),attach:"attributes-position",count:x.length,itemSize:3})}),t.jsx("lineBasicMaterial",{color:n})]})},gt=(e,r,n)=>{const s=new ze;return s.moveTo(-e/2+n,-r/2),s.lineTo(e/2-n,-r/2),s.quadraticCurveTo(e/2,-r/2,e/2,-r/2+n),s.lineTo(e/2,r/2-n),s.quadraticCurveTo(e/2,r/2,e/2-n,r/2),s.lineTo(-e/2+n,r/2),s.quadraticCurveTo(-e/2,r/2,-e/2,r/2-n),s.lineTo(-e/2,-r/2+n),s.quadraticCurveTo(-e/2,-r/2,-e/2+n,-r/2),s},mt=({width:e,height:r,radius:n,color:s})=>{const x=gt(e,r,n);return t.jsxs("mesh",{children:[t.jsx("shapeGeometry",{args:[x]}),t.jsx("meshBasicMaterial",{color:s,opacity:.9,transparent:!0})]})},yt=({name:e,url:r,type:n})=>t.jsxs(wt,{children:[r&&t.jsx("img",{alt:"",className:"image",src:r}),t.jsx("div",{className:"title",children:e}),t.jsx("div",{className:"badge",children:t.jsx(de,{type:n})}),t.jsx("div",{className:"action-btn",children:t.jsx(ue,{})})]}),wt=y(C)`
  position: relative;
  padding: 14px;
  padding-right: 28px;
  flex: 1;
  width: 100%;
  box-sizing: border-box;

  .title {
    margin-top: 8px;
  }

  .badge {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-bottom: 8px;
    object-fit: cover;
  }

  .action-btn {
    top: 14px;
    right: 14px;
    color: ${b.GRAY6};
    position: absolute;
  }
`,I=f.memo(({width:e,height:r,position:n,url:s,onButtonClick:x,name:c,type:p,color:i,zoom:l})=>t.jsxs("group",{position:n,children:[t.jsx(mt,{color:i,height:r,radius:1.5,width:e}),!1,t.jsx(je,{position:[-e/2,r/2,0],children:t.jsx(C,{onClick:()=>x(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${e*l}px`,height:`${r*l}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:t.jsx(yt,{name:`${c}`,type:p||"",url:s})})})]}));I.displayName="Node";const Z=144/10,$=84/10,jt=()=>{const e=k(),{dataInitial:r}=P(i=>i),{camera:n,viewport:s}=e,[x,c]=f.useState(n.zoom);f.useEffect(()=>{const i=n,l=d=>{d.preventDefault(),d.ctrlKey?(i.zoom+=d.deltaY*-.1,i.zoom=Math.max(2,Math.min(i.zoom,20)),c(i.zoom)):i.position.x+=d.deltaX*.1,i.updateProjectionMatrix()};return window.addEventListener("wheel",l,{passive:!1}),()=>{window.removeEventListener("wheel",l)}},[n]);const p=f.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const i=r.links.filter(o=>{var a;return(a=o==null?void 0:o.properties)==null?void 0:a.start}).map(o=>{var a;return{source:o.source,target:o.target,start:(a=o.properties)==null?void 0:a.start}}),l=r.nodes.filter(o=>r.links.some(a=>a.source===o.ref_id||a.target===o.ref_id)).map(o=>{const a=i.find(h=>o.ref_id===h.source||o.ref_id===h.target),w=((a==null?void 0:a.start)||0)*(s.width/10);return{...o,x:w,y:0,z:0,start:(a==null?void 0:a.start)||0}}).filter(o=>o.node_type!=="Clip"&&o.node_type!=="Episode"&&o.node_type!=="Show"),d=l.reduce((o,a)=>{const w=r.nodes.filter(_=>r.links.some(u=>_.node_type!=="Episode"&&_.node_type!=="Clip"&&(u.source===a.ref_id&&u.target===_.ref_id||u.target===a.ref_id&&u.source===_.ref_id))).map((_,u)=>{const{x:h}=a,m=(Math.floor(u/2)+1)*$*2*(u%2===0?1:-1);return{..._,x:h,y:m,z:0}});return o[a.ref_id]=w,o},{}),g=Object.entries(d).flatMap(([o,a])=>{const w=[o,...a.map(u=>u.ref_id)];return r.links.filter(u=>w.includes(u.source)&&w.includes(u.target)).map(u=>{const h=l.find(j=>j.ref_id===u.source)||a.find(j=>j.ref_id===u.source),m=l.find(j=>j.ref_id===u.target)||a.find(j=>j.ref_id===u.target);return{...u,sourcePosition:h?{x:h.x,y:h.y,z:h.z}:null,targetPosition:m?{x:m.x,y:m.y,z:m.z}:null}})});return{nodes:l,edges:g,relatedNodes:d}},[r,s.width]);return t.jsxs(t.Fragment,{children:[p.nodes.map(i=>{var l,d;return t.jsxs(f.Fragment,{children:[t.jsx(I,{color:"#353A46",height:$,name:((l=i==null?void 0:i.properties)==null?void 0:l.name)||"",onButtonClick:console.log,position:[i.x,i.y,i.z],type:i.node_type,url:((d=i==null?void 0:i.properties)==null?void 0:d.image_url)||"logo.png",width:Z,zoom:x}),(p.relatedNodes[i.ref_id]||[]).map(g=>{var o,a;return t.jsx(I,{color:"#353A46",height:$,name:((o=g==null?void 0:g.properties)==null?void 0:o.name)||"",onButtonClick:console.log,position:[g.x,g.y,g.z],type:g.node_type,url:((a=g==null?void 0:g.properties)==null?void 0:a.image_url)||"logo.png",width:Z,zoom:x},`${g.ref_id}-${i.ref_id}`)})]},i.ref_id)}),p.edges.map((i,l)=>{if(!i.sourcePosition||!i.targetPosition)return null;const{sourcePosition:d,targetPosition:g}=i;return t.jsx(f.Fragment,{children:t.jsx(ht,{sourcePosition:d,targetPosition:g})},`edge-${l}`)})]})},Ct=()=>{const{camera:e,viewport:r}=k(),n=R(s=>s.playerRef);return V(()=>{if(n){const s=n.getCurrentTime();e.position.x=s*r.width/10}}),null},U=f.memo(()=>(console.log("rerender"),t.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:t.jsxs(Ce,{orthographic:!0,children:[t.jsx(Ct,{}),t.jsx(ke,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),t.jsx(jt,{})]})})));U.displayName="Scene";const bt=({mediaUrl:e})=>{const r=f.useRef(null),[n,s]=f.useState("ready"),[x,c]=f.useState(!1);fe(v=>v);const{dataInitial:p}=P(v=>v),{isPlaying:i,playingTime:l,setIsPlaying:d,setPlayingTime:g,setDuration:o,playingNode:a,volume:w,setHasError:_,resetPlayer:u,isSeeking:h,setIsSeeking:m,setPlayerRef:j,playerRef:S}=R(v=>v);f.useEffect(()=>()=>u(),[u]),f.useEffect(()=>{a&&!x&&(g(0),o(0),c(!1))},[a,g,o,c,x]),f.useEffect(()=>{h&&S&&(S.seekTo(l,"seconds"),m(!1))},[l,h,m,S]);const F=()=>{d(!i)},O=()=>{d(!0)},X=()=>{d(!1)},Y=()=>{_(!0),s("error")};f.useMemo(()=>((p==null?void 0:p.links.filter(z=>{var T;return(T=z==null?void 0:z.properties)==null?void 0:T.start}))||[]).slice().sort((z,T)=>{var B,A;return((B=z==null?void 0:z.properties)==null?void 0:B.start)-((A=T==null?void 0:T.properties)==null?void 0:A.start)}),[p]);const K=v=>{if(!h){const W=v.playedSeconds;g(W);return}},J=()=>{S&&(s("ready"),F())},Q=()=>{F()},ee=f.useCallback(v=>{!S&&v&&j(v)},[j,S]);return e?t.jsxs(_t,{ref:r,tabIndex:0,children:[t.jsx(vt,{isFullScreen:!1,children:t.jsx(xe,{size:120,src:(a==null?void 0:a.image_url)||"",type:"clip"})}),t.jsx(zt,{isFullScreen:!1,onClick:Q,children:t.jsx(me,{ref:ee,controls:!0,height:"219px",onBuffer:()=>s("buffering"),onBufferEnd:()=>s("ready"),onError:Y,onPause:X,onPlay:O,onProgress:K,onReady:J,playing:i,url:e||"",volume:w,width:"100%"})}),n==="error"?t.jsx(St,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},_t=y(C)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,vt=y(C)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,St=y(C)`
  height: 60px;
  padding: 12px 16px;
  color: ${b.primaryRed};
`,zt=y.div`
  margin: ${e=>e.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Et=f.memo(bt),Tt=()=>{const{selectedEpisodeId:e}=M(c=>c),{playingTime:r,duration:n}=R(c=>c),[s,x]=f.useState([]);return f.useEffect(()=>{e&&(async()=>{try{const p=await G(e,0,50,{nodeType:["Clip"],useSubGraph:!1});p!=null&&p.nodes&&x(p.nodes)}catch(p){console.error(p)}})()},[e]),t.jsxs(kt,{children:[t.jsx(C,{className:"heading",children:"Transcript"}),s.map(c=>{var d,g,o;const p=(d=c==null?void 0:c.properties)==null?void 0:d.timestamp,[i,l]=p?p.split("-").map(Number):[0,n];return i<=r*1e3&&r*1e3<l?t.jsx(Rt,{direction:"row",children:((g=c==null?void 0:c.properties)==null?void 0:g.text)&&t.jsx("span",{children:(o=c==null?void 0:c.properties)==null?void 0:o.text})},c.ref_id):null})]})},kt=y(C)`
  .heading {
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 16px;
  }

  color: ${b.white};
  background: ${b.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
`,Rt=y(C)`
  flex-wrap: wrap;
  flex: 1 1 100%;
`,Pt=()=>{var n,s;const{selectedEpisodeLink:e,selectedEpisode:r}=M(x=>x);return t.jsxs(Mt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsxs(Ht,{children:[(r==null?void 0:r.name)&&t.jsx(It,{children:r==null?void 0:r.name}),((n=r==null?void 0:r.properties)==null?void 0:n.text)&&t.jsx($t,{children:(s=r==null?void 0:r.properties)==null?void 0:s.text}),e&&t.jsx(Et,{mediaUrl:e})]}),t.jsx(Tt,{})]})},Mt=y(C)(({theme:e})=>({position:"relative",display:"flex",padding:"20px",background:"transparent",width:"100%",[e.breakpoints.up("sm")]:{width:ye}})),$t=y(H)`
  font-size: 20px;
  font-weight: Bold;
  line-height: 24.2px;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
  font-weight: 500;
`,It=y(H)`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
`,Ht=y(C)(({theme:e})=>({width:"100%",margin:"16px auto",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),Kt=()=>{const{addNewNode:e,isFetching:r,runningProjectId:n,dataInitial:s}=P(u=>u),[x,c]=f.useState(!0),{selectedEpisodeId:p,setSelectedEpisode:i}=M(u=>u),l=he(),d=f.useRef(null),g=f.useRef(null),{setPlayingNode:o}=R(u=>u),a=f.useCallback(u=>{r||(d.current||(d.current={nodes:[],edges:[]}),u.edges&&d.current.edges.push(...u.edges),u.nodes&&d.current.nodes.push(...u.nodes),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{if(d.current){const{nodes:h,edges:m}=d.current,j={nodes:h,edges:m};d.current={nodes:[],edges:[]},e(j)}},3e3))},[e,r]),w=f.useCallback(u=>{console.log(u,"uuuuuupdate")},[]);f.useEffect(()=>{p&&(async()=>{try{const h=await G(p,0,50);h&&a(h)}catch(h){console.error(h)}})()},[p,a]),f.useEffect(()=>{p&&(async()=>{try{const h=await ne(p);h&&(o(h),i(h))}catch(h){console.error(h)}})()},[p,o,i]),f.useEffect(()=>(l&&(l.connect(),l.on("connect_error",u=>{console.error("Socket connection error:",u)}),l.on("new_node_created",a),l.on("node_updated",w)),()=>{l&&l.off()}),[l,w,a]),f.useEffect(()=>{if(n)try{l==null||l.emit("update_project_id",{id:n})}catch(u){console.error(u)}},[n,l]);const _=f.useMemo(()=>{if(s){const u=s.links.filter(m=>{var j;return(j=m==null?void 0:m.properties)==null?void 0:j.start}).map(m=>{var j;return{source:m.source,target:m.target,start:(j=m.properties)==null?void 0:j.start}});return s.nodes.filter(m=>s.links.some(j=>j.source===m.ref_id||j.target===m.ref_id)).map(m=>{const j=u.find(S=>m.ref_id===S.source||m.ref_id===S.target);return{...m,start:(j==null?void 0:j.start)||0}}).filter(m=>m&&m.node_type!=="Clip"&&m.node_type!=="Episode"&&m.node_type!=="Show")}return[]},[s]);return t.jsx(C,{direction:"row",style:{height:"100%"},children:p?t.jsxs(t.Fragment,{children:[t.jsxs(C,{children:[t.jsx(C,{onClick:()=>c(!x),children:t.jsx(Me,{})}),t.jsx(Pt,{})]}),t.jsxs(C,{basis:"100%",grow:1,p:16,shrink:1,children:[t.jsx(C,{basis:"100%",grow:1,shrink:1,children:x?t.jsx(U,{}):t.jsx(ie,{})}),t.jsx(lt,{markers:_})]})]}):t.jsx(Ke,{})})};export{Kt as MindSet};
