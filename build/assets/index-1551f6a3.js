import{r as u,y as ee,c as te,j as e,s as w,a as b,F as j,T as W,u as $,N as A,z as re,d as se,A as N,D as oe}from"./index-9411005d.js";import{Universe as ne}from"./index-1029960a.js";import{T as ie,b as R,c as ae,d as ce,e as le,f as pe,g as de,h as ue,i as fe,a as xe}from"./index-ab2c2a50.js";import{S as he,R as ge,M as me}from"./index-6a9f69ff.js";import{u as T,a as V,m as ye,T as we,f as je,H as Ce,C as be}from"./index-20515de8.js";import{W as _e,L as D,H as ve,D as Pe,F as ze,V as z,S as Ee}from"./three.module-9c942ca6.js";import"./TextareaAutosize-6ee3158b.js";import"./index-8bdf6f0c.js";import"./ClipLoader-23c91b09.js";import"./Skeleton-456bb1f6.js";import"./Stack-132235d4.js";import"./isPlainObject-9cfe8835.js";import"./Typography-ef0cb56d.js";import"./createSvgIcon-3f43ff5f.js";import"./index-a0d418bd.js";function Te(t,r,c){const{gl:n,size:a,viewport:s}=T(),l=typeof t=="number"?t:a.width*s.dpr,f=typeof r=="number"?r:a.height*s.dpr,p=(typeof t=="number"?c:t)||{},{samples:o=0,depth:i,...h}=p,g=u.useMemo(()=>{let y;return y=new _e(l,f,{minFilter:D,magFilter:D,encoding:n.outputEncoding,type:ve,...h}),i&&(y.depthTexture=new Pe(l,f,ze)),y.samples=o,y},[]);return u.useLayoutEffect(()=>{g.setSize(l,f),o&&(g.samples=o)},[o,g,l,f]),u.useEffect(()=>()=>g.dispose(),[]),g}const Se=t=>typeof t=="function",Re=u.forwardRef(({envMap:t,resolution:r=256,frames:c=1/0,children:n,makeDefault:a,...s},l)=>{const f=T(({set:d})=>d),p=T(({camera:d})=>d),o=T(({size:d})=>d),i=u.useRef(null),h=u.useRef(null),g=Te(r);u.useLayoutEffect(()=>{s.manual||i.current.updateProjectionMatrix()},[o,s]),u.useLayoutEffect(()=>{i.current.updateProjectionMatrix()}),u.useLayoutEffect(()=>{if(a){const d=p;return f(()=>({camera:i.current})),()=>f(()=>({camera:d}))}},[i,a,f]);let y=0,_=null;const x=Se(n);return V(d=>{x&&(c===1/0||y<c)&&(h.current.visible=!1,d.gl.setRenderTarget(g),_=d.scene.background,t&&(d.scene.background=t),d.gl.render(d.scene,i.current),d.scene.background=_,d.gl.setRenderTarget(null),h.current.visible=!0,y++)}),u.createElement(u.Fragment,null,u.createElement("orthographicCamera",ee({left:o.width/-2,right:o.width/2,top:o.height/2,bottom:o.height/-2,ref:ye([i,l])},s),!x&&n),u.createElement("group",{ref:h},x&&n(g.texture)))}),$e={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},M=te(t=>({...$e,setSelectedEpisodeId:r=>t({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>t({selectedEpisodeLink:r}),setSelectedEpisode:r=>t({selectedEpisode:r})})),Me=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Ie=()=>e.jsxs(ke,{children:[e.jsx(We,{children:e.jsx(Fe,{children:e.jsx(Me,{})})}),e.jsx(He,{children:"Graph Mindset"})]}),ke=w(j).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,We=w(j)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Fe=w.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${b.white};
  }
`,He=w(W)`
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
`,Be=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Le=/^(https?:\/\/)/,Ae=/(www\.)?/,De=/[\w-]+(\.[\w-]+)*/,Ze=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,Ge=/(\/[^\s?]*)?/,Ne=/(\?[^\s]*)?/,Ve=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,Oe=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,qe=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,Ue=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Xe=new RegExp(`${Le.source}${Ae.source}${De.source}${Ze.source}?${Ge.source}${Ne.source}$`,"i"),Ye=t=>{try{if(!(t==null?void 0:t.match(Xe)))return!1;const n=new URL(t).hostname;return n!=null&&n.startsWith("www.")?((n==null?void 0:n.match(/\./g))||[]).length>=2:((n==null?void 0:n.match(/\./g))||[]).length>=1}catch{return!1}},Z=t=>Ye(t)?[Ve,Oe,qe,Ue].some(c=>c.test(t)):!1,Ke=async t=>{const r="add_node",c={};c.media_url=t.source,c.content_type="audio_video";const n=await re.post(`/${r}`,JSON.stringify(c));if(n.error){const{message:a}=n.error;throw new Error(a)}return n},Je=()=>{const[t,r]=u.useState(""),[c,n]=u.useState(!1),[a,s]=u.useState(""),{setRunningProjectId:l}=$(h=>h),{setSelectedEpisodeId:f,setSelectedEpisodeLink:p}=M(h=>h),o=h=>{const{value:g}=h.target;r(g),n(g!==""&&!Z(g))},i=async()=>{if(Z(t))try{const h=await Ke({source:t});h.data.project_id&&l(h.data.project_id),h.data.ref_id&&(f(h.data.ref_id),p(t))}catch(h){let g=A;if((h==null?void 0:h.status)===400){const y=await h.json();g=y.errorCode||(y==null?void 0:y.status)||A,y.data.ref_id&&(f(y.data.ref_id),p(t))}else h instanceof Error&&(g=h.message);s(String(g))}};return e.jsxs(Qe,{children:[e.jsx(et,{children:"Ideas have shapes"}),e.jsxs(rt,{children:[e.jsx(tt,{error:c,onChange:o,onKeyDown:h=>h.key==="Enter"&&i(),placeholder:"Paste podcast or video link",value:t}),e.jsx(st,{error:c,onClick:c?void 0:i,children:e.jsx(Be,{})})]}),a&&e.jsx("div",{children:a})]})},Qe=w(j)`
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
`,et=w(j)`
  color: ${b.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,tt=w.input`
  width: 100%;
  max-width: 450px;
  padding: 12px 28px 12px 16px;
  border-radius: 100px;
  border: 1px solid ${t=>t.error?"red":b.DIVIDER_4};
  background: ${b.INPUT_BG};
  color: ${b.white};
  font-family: Barlow;
  font-size: 16px;

  &::placeholder {
    color: ${b.INPUT_PLACEHOLDER};
  }

  &:focus {
    outline: none;
    border-color: ${t=>t.error?"red":b.primaryBlue};
  }
`,rt=w.div`
  position: relative;
  width: 450px;
  display: flex;
  align-items: center;
`,st=w.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${b.white};
  font-size: 20px;
  cursor: ${t=>t.error?"not-allowed":"pointer"};

  svg {
    width: 8px;
    height: 17px;
    color: ${b.GRAY6};
  }
`,O=u.memo(({type:t,name:r,left:c,img:n})=>{var o,i;const[a]=se(h=>[h.normalizedSchemasByType]),s=(o=a[t])==null?void 0:o.primary_color,l=(i=a[t])==null?void 0:i.icon,f=l?`svg-icons/${l}.svg`:"thing_badge.svg",p={iconStart:n??f,color:s??b.THING};return e.jsx(it,{style:{left:`${c}%`},children:e.jsx(ie,{content:`${r||t}`,children:e.jsx(ot,{...p,label:t})})})});O.displayName="Marker";const ot=({iconStart:t,color:r,label:c})=>e.jsx(nt,{color:r,children:e.jsx("img",{alt:c,className:"badge__img",src:t})}),nt=w(j).attrs({direction:"row"})`
  cursor: pointer;
  background: ${({color:t})=>t};
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
`,it=w.div`
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
`,at=({duration:t,markers:r,handleProgressChange:c,playingTIme:n})=>e.jsxs(ct,{children:[e.jsx(lt,{max:t,onChange:c,value:n}),r.map(a=>{var o,i;const s=((a==null?void 0:a.start)||0)/t*100,l=(a==null?void 0:a.node_type)||"",f=((o=a==null?void 0:a.properties)==null?void 0:o.name)||"",p=((i=a==null?void 0:a.properties)==null?void 0:i.image_url)||"";return e.jsx(O,{img:p,left:s,name:f,type:l},a.ref_id)})]}),ct=w(j)`
  position: relative;
  flex: 1 1 100%;
`,lt=w(he)`
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
`,pt=({markers:t})=>{const{isPlaying:r,setIsPlaying:c,playingNode:n,playerRef:a}=R(g=>g),[s,l]=u.useState(0),f=n,p=u.useCallback((g,y)=>{const _=Array.isArray(y)?y[0]:y;a&&a.seekTo(_,"seconds")},[a]);u.useEffect(()=>{const g=setInterval(()=>{if(a&&l){const y=a.getCurrentTime();l(y)}},100);return()=>clearInterval(g)},[a,l]);const o=()=>{if(a){const g=a.getCurrentTime()-15;a.seekTo(g,"seconds")}},i=()=>{if(a){const g=a.getCurrentTime()+15;a.seekTo(g,"seconds")}},h=(a==null?void 0:a.getDuration())||0;return f?e.jsxs(dt,{children:[e.jsxs(ut,{children:[e.jsx(xt,{onClick:o,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(ft,{"data-testid":"play-pause-button",onClick:g=>{c(!r),g.stopPropagation()},size:"small",children:r?e.jsx(ae,{"data-testid":"pause-icon"}):e.jsx(ce,{"data-testid":"play-icon"})}),e.jsx(ht,{onClick:i,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]}),e.jsx(at,{duration:h,handleProgressChange:p,markers:t,playingTIme:s})]}):null},dt=w(j).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${b.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,ut=w(j).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,ft=w(le)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,xt=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,ht=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,gt=({sourcePosition:t,targetPosition:r,color:c="white",arrowSize:n=1,label:a="label"})=>{const{points:s,textPosition:l}=u.useMemo(()=>{const f=new z(t.x,t.y,t.z),p=new z(r.x,r.y,r.z),o=new z().subVectors(p,f).normalize(),i=new z().addVectors(f,p).multiplyScalar(.5),h=new z().copy(o).multiplyScalar(-n).applyAxisAngle(new z(0,0,1),Math.PI/6),g=new z().copy(o).multiplyScalar(-n).applyAxisAngle(new z(0,0,1),-Math.PI/6);return{points:[f,p,p.clone(),p.clone().add(h),p.clone(),p.clone().add(g)],textPosition:i}},[t,r,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(s.flatMap(f=>[f.x,f.y,f.z])),attach:"attributes-position",count:s.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:c})]}),a&&e.jsx(we,{anchorX:"center",anchorY:"middle",color:c,...je,position:l,children:a})]})},mt=(t,r,c)=>{const n=new Ee;return n.moveTo(-t/2+c,-r/2),n.lineTo(t/2-c,-r/2),n.quadraticCurveTo(t/2,-r/2,t/2,-r/2+c),n.lineTo(t/2,r/2-c),n.quadraticCurveTo(t/2,r/2,t/2-c,r/2),n.lineTo(-t/2+c,r/2),n.quadraticCurveTo(-t/2,r/2,-t/2,r/2-c),n.lineTo(-t/2,-r/2+c),n.quadraticCurveTo(-t/2,-r/2,-t/2+c,-r/2),n},yt=({width:t,height:r,radius:c,color:n})=>{const a=mt(t,r,c);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[a]}),e.jsx("meshBasicMaterial",{color:n,opacity:.9,transparent:!0})]})},wt=({name:t,url:r,type:c})=>e.jsxs(jt,{children:[r&&e.jsx("img",{alt:"",className:"image",src:r}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(pe,{type:c})}),e.jsx("div",{className:"action-btn",children:e.jsx(de,{})})]}),jt=w(j)`
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
`,k=u.memo(({width:t,height:r,position:c,url:n,onButtonClick:a,name:s,type:l,color:f})=>{const{camera:p}=T();return e.jsxs("group",{position:c,children:[e.jsx(yt,{color:f,height:r,radius:1.5,width:t}),!1,e.jsx(Ce,{position:[-t/2,r/2,0],children:e.jsx(j,{onClick:()=>a(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*p.zoom}px`,height:`${r*p.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:e.jsx(wt,{name:`${s}`,type:l||"",url:n})})})]})});k.displayName="Node";const G=144/10,I=84/10,Ct=()=>{const t=T(),{dataInitial:r}=$(s=>s),{camera:c,viewport:n}=t;u.useEffect(()=>{const s=c,l=f=>{f.preventDefault(),f.ctrlKey&&(s.zoom+=f.deltaY*-.1,s.zoom=Math.max(2,Math.min(s.zoom,20))),s.position.x+=f.deltaX*.1,s.updateProjectionMatrix()};return window.addEventListener("wheel",l,{passive:!1}),()=>{window.removeEventListener("wheel",l)}},[c]);const a=u.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const s=r.links.filter(o=>{var i;return(i=o==null?void 0:o.properties)==null?void 0:i.start}).map(o=>{var i;return{source:o.source,target:o.target,start:(i=o.properties)==null?void 0:i.start}}),l=r.nodes.filter(o=>r.links.some(i=>i.source===o.ref_id||i.target===o.ref_id)).map(o=>{const i=s.find(_=>o.ref_id===_.source||o.ref_id===_.target),h=((i==null?void 0:i.start)||0)*(n.width/10);return{...o,x:h,y:0,z:0,start:(i==null?void 0:i.start)||0}}).filter(o=>o.node_type!=="Clip"&&o.node_type!=="Episode"&&o.node_type!=="Show"),f=l.reduce((o,i)=>{const h=r.links.filter(x=>{var d;return!((d=x==null?void 0:x.properties)!=null&&d.start)&&[x.target,x.source].includes(i.ref_id)}),y=r.nodes.filter(x=>x.node_type!=="Episode"&&x.node_type!=="Clip"&&x.ref_id!==i.ref_id&&h.some(d=>[d.source,d.target].includes(x.ref_id))).map((x,d)=>{const{x:m}=i,C=(Math.floor(d/2)+1)*I*2*(d%2===0?1:-1);return{...x,x:m,y:C,z:0}}),_=h.map(x=>{if(x.source===i.ref_id){const m=y.find(C=>C.ref_id===x.target);return{...x,sourcePositions:{x:i.x,y:i.y,z:i.z},targetPositions:{x:m==null?void 0:m.x,y:m==null?void 0:m.y,z:m==null?void 0:m.z}}}const d=y.find(m=>m.ref_id===x.source);return{...x,sourcePositions:{x:d==null?void 0:d.x,y:d==null?void 0:d.y,z:d==null?void 0:d.z},targetPositions:{x:i.x,y:i.y,z:i.z}}});return o[i.ref_id]={nodes:y,edges:_},o},{}),p=Object.values(f).flatMap(o=>o.edges).filter(o=>{var i;return(i=o==null?void 0:o.sourcePositions)==null?void 0:i.x});return{nodes:l,edges:p,relatedNodes:Object.fromEntries(Object.entries(f).map(([o,i])=>[o,i.nodes]))}},[r,n.width]);return e.jsxs(e.Fragment,{children:[a.nodes.map(s=>{var l,f;return e.jsxs(u.Fragment,{children:[e.jsx(k,{color:"#353A46",height:I,name:((l=s==null?void 0:s.properties)==null?void 0:l.name)||"",onButtonClick:console.log,position:[s.x,s.y,s.z],type:s.node_type,url:((f=s==null?void 0:s.properties)==null?void 0:f.image_url)||"logo.png",width:G}),(a.relatedNodes[s.ref_id]||[]).map(p=>{var o,i;return e.jsx(k,{color:"#353A46",height:I,name:((o=p==null?void 0:p.properties)==null?void 0:o.name)||"",onButtonClick:console.log,position:[p.x,p.y,p.z],type:p.node_type,url:((i=p==null?void 0:p.properties)==null?void 0:i.image_url)||"logo.png",width:G},`${p.ref_id}-${s.ref_id}`)})]},s.ref_id)}),a.edges.map((s,l)=>s!=null&&s.sourcePositions&&(s!=null&&s.targetPositions)?e.jsx(gt,{label:s.edge_type||"",sourcePosition:new z(s.sourcePositions.x,s.sourcePositions.y,s.sourcePositions.z),targetPosition:new z(s.targetPositions.x,s.targetPositions.y,s.targetPositions.z)},`edge-${l}`):null)]})},bt=()=>{const{camera:t,viewport:r}=T(),c=R(n=>n.playerRef);return V(()=>{if(c){const n=c.getCurrentTime();t.position.x=n*r.width/10}}),null},q=u.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs(be,{orthographic:!0,children:[e.jsx(bt,{}),e.jsx(Re,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(Ct,{})]})})));q.displayName="Scene";const _t=({mediaUrl:t})=>{const r=u.useRef(null),[c,n]=u.useState("ready"),[a,s]=u.useState(!1);ue(v=>v);const{dataInitial:l}=$(v=>v),{isPlaying:f,playingTime:p,setIsPlaying:o,setPlayingTime:i,setDuration:h,playingNode:g,volume:y,setHasError:_,resetPlayer:x,isSeeking:d,setIsSeeking:m,setPlayerRef:C,playerRef:P}=R(v=>v);u.useEffect(()=>()=>x(),[x]),u.useEffect(()=>{g&&!a&&(i(0),h(0),s(!1))},[g,i,h,s,a]),u.useEffect(()=>{d&&P&&(P.seekTo(p,"seconds"),m(!1))},[p,d,m,P]);const F=()=>{o(!f)},U=()=>{o(!0)},X=()=>{o(!1)},Y=()=>{_(!0),n("error")};u.useMemo(()=>((l==null?void 0:l.links.filter(E=>{var S;return(S=E==null?void 0:E.properties)==null?void 0:S.start}))||[]).slice().sort((E,S)=>{var B,L;return((B=E==null?void 0:E.properties)==null?void 0:B.start)-((L=S==null?void 0:S.properties)==null?void 0:L.start)}),[l]),console.log(v=>{if(!d){const H=v.playedSeconds;i(H);return}});const K=()=>{P&&(n("ready"),F())},J=()=>{F()},Q=u.useCallback(v=>{!P&&v&&C(v)},[C,P]);return t?e.jsxs(vt,{ref:r,tabIndex:0,children:[e.jsx(Pt,{isFullScreen:!1,children:e.jsx(fe,{size:120,src:(g==null?void 0:g.image_url)||"",type:"clip"})}),e.jsx(Et,{isFullScreen:!1,onClick:J,children:e.jsx(ge,{ref:Q,controls:!0,height:"219px",onBuffer:()=>n("buffering"),onBufferEnd:()=>n("ready"),onError:Y,onPause:X,onPlay:U,onReady:K,playing:f,url:t||"",volume:y,width:"100%"})}),c==="error"?e.jsx(zt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},vt=w(j)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Pt=w(j)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,zt=w(j)`
  height: 60px;
  padding: 12px 16px;
  color: ${b.primaryRed};
`,Et=w.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Tt=u.memo(_t),St=()=>{const{selectedEpisodeId:t}=M(s=>s),{playingTime:r,duration:c}=R(s=>s),[n,a]=u.useState([]);return u.useEffect(()=>{t&&(async()=>{try{const l=await N(t,0,50,{nodeType:["Clip"],useSubGraph:!1});l!=null&&l.nodes&&a(l.nodes)}catch(l){console.error(l)}})()},[t]),e.jsxs(Rt,{children:[e.jsx(j,{className:"heading",children:"Transcript"}),n.map(s=>{var o,i,h;const l=(o=s==null?void 0:s.properties)==null?void 0:o.timestamp,[f,p]=l?l.split("-").map(Number):[0,c];return f<=r*1e3&&r*1e3<p?e.jsx($t,{direction:"row",children:((i=s==null?void 0:s.properties)==null?void 0:i.text)&&e.jsx("span",{children:(h=s==null?void 0:s.properties)==null?void 0:h.text})},s.ref_id):null})]})},Rt=w(j)`
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
`,$t=w(j)`
  flex-wrap: wrap;
  flex: 1 1 100%;
`,Mt=()=>{var c,n;const{selectedEpisodeLink:t,selectedEpisode:r}=M(a=>a);return e.jsxs(It,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsxs(Ft,{children:[(r==null?void 0:r.name)&&e.jsx(Wt,{children:r==null?void 0:r.name}),((c=r==null?void 0:r.properties)==null?void 0:c.text)&&e.jsx(kt,{children:(n=r==null?void 0:r.properties)==null?void 0:n.text}),t&&e.jsx(Tt,{mediaUrl:t})]}),e.jsx(St,{})]})},It=w(j)(({theme:t})=>({position:"relative",display:"flex",padding:"20px",background:"transparent",width:"100%",[t.breakpoints.up("sm")]:{width:me}})),kt=w(W)`
  font-size: 20px;
  font-weight: Bold;
  line-height: 24.2px;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
  font-weight: 500;
`,Wt=w(W)`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
`,Ft=w(j)(({theme:t})=>({width:"100%",margin:"16px auto",zIndex:29,[t.breakpoints.up("sm")]:{width:"390px"}})),Qt=()=>{const{addNewNode:t,isFetching:r,runningProjectId:c,dataInitial:n}=$(x=>x),[a,s]=u.useState(!0),{selectedEpisodeId:l,setSelectedEpisode:f}=M(x=>x),p=xe(),o=u.useRef(null),i=u.useRef(null),{setPlayingNode:h}=R(x=>x),g=u.useCallback(x=>{r||(o.current||(o.current={nodes:[],edges:[]}),x.edges&&o.current.edges.push(...x.edges),x.nodes&&o.current.nodes.push(...x.nodes),i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{if(o.current){const{nodes:d,edges:m}=o.current,C={nodes:d,edges:m};o.current={nodes:[],edges:[]},t(C)}},3e3))},[t,r]),y=u.useCallback(x=>{console.log(x,"uuuuuupdate")},[]);u.useEffect(()=>{l&&(async()=>{try{const d=await N(l,0,50);d&&g(d)}catch(d){console.error(d)}})()},[l,g]),u.useEffect(()=>{l&&(async()=>{try{const d=await oe(l);d&&(h(d),f(d))}catch(d){console.error(d)}})()},[l,h,f]),u.useEffect(()=>(p&&(p.connect(),p.on("connect_error",x=>{console.error("Socket connection error:",x)}),p.on("new_node_created",g),p.on("node_updated",y)),()=>{p&&p.off()}),[p,y,g]),u.useEffect(()=>{if(c)try{p==null||p.emit("update_project_id",{id:c})}catch(x){console.error(x)}},[c,p]);const _=u.useMemo(()=>{if(n){const x=n.links.filter(m=>{var C;return(C=m==null?void 0:m.properties)==null?void 0:C.start}).map(m=>{var C;return{source:m.source,target:m.target,start:(C=m.properties)==null?void 0:C.start}});return n.nodes.filter(m=>n.links.some(C=>C.source===m.ref_id||C.target===m.ref_id)).map(m=>{const C=x.find(P=>m.ref_id===P.source||m.ref_id===P.target);return{...m,start:(C==null?void 0:C.start)||0}}).filter(m=>m&&m.node_type!=="Clip"&&m.node_type!=="Episode"&&m.node_type!=="Show")}return[]},[n]);return e.jsx(j,{direction:"row",style:{height:"100%"},children:l?e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(j,{onClick:()=>s(!a),children:e.jsx(Ie,{})}),e.jsx(Mt,{})]}),e.jsxs(j,{basis:"100%",grow:1,p:16,shrink:1,children:[e.jsx(j,{basis:"100%",grow:1,shrink:1,children:a?e.jsx(q,{}):e.jsx(ne,{})}),e.jsx(pt,{markers:_})]})]}):e.jsx(Je,{})})};export{Qt as MindSet};
