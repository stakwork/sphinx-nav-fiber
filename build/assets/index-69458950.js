import{r as d,y as te,c as re,j as e,s as w,a as _,F as b,T as F,u as $,N as D,z as se,d as oe,A as V,D as ne}from"./index-76d9c2f1.js";import{Universe as ie}from"./index-f3aac647.js";import{T as ae,b as M,c as ce,d as le,e as pe,f as de,g as ue,h as fe,i as xe,a as he}from"./index-474fff36.js";import{S as ge,R as me,M as ye}from"./index-21542311.js";import{u as R,a as O,m as we,T as je,H as Ce,C as be}from"./index-1baf6dbb.js";import{W as _e,L as Z,H as ve,D as ze,F as Se,V as S,S as Ee}from"./three.module-9c942ca6.js";import"./TextareaAutosize-afa7db6c.js";import"./index-085dee2c.js";import"./ClipLoader-7820d9f6.js";import"./Skeleton-d8ecf068.js";import"./Stack-2be7ab24.js";import"./isPlainObject-9cb6db4e.js";import"./Typography-db09106c.js";import"./createSvgIcon-4e72528d.js";import"./index-167ae998.js";function Pe(t,r,a){const{gl:o,size:u,viewport:c}=R(),x=typeof t=="number"?t:u.width*c.dpr,n=typeof r=="number"?r:u.height*c.dpr,l=(typeof t=="number"?a:t)||{},{samples:p=0,depth:f,...s}=l,i=d.useMemo(()=>{let j;return j=new _e(x,n,{minFilter:Z,magFilter:Z,encoding:o.outputEncoding,type:ve,...s}),f&&(j.depthTexture=new ze(x,n,Se)),j.samples=p,j},[]);return d.useLayoutEffect(()=>{i.setSize(x,n),p&&(i.samples=p)},[p,i,x,n]),d.useEffect(()=>()=>i.dispose(),[]),i}const Te=t=>typeof t=="function",Re=d.forwardRef(({envMap:t,resolution:r=256,frames:a=1/0,children:o,makeDefault:u,...c},x)=>{const n=R(({set:g})=>g),l=R(({camera:g})=>g),p=R(({size:g})=>g),f=d.useRef(null),s=d.useRef(null),i=Pe(r);d.useLayoutEffect(()=>{c.manual||f.current.updateProjectionMatrix()},[p,c]),d.useLayoutEffect(()=>{f.current.updateProjectionMatrix()}),d.useLayoutEffect(()=>{if(u){const g=l;return n(()=>({camera:f.current})),()=>n(()=>({camera:g}))}},[f,u,n]);let j=0,z=null;const y=Te(o);return O(g=>{y&&(a===1/0||j<a)&&(s.current.visible=!1,g.gl.setRenderTarget(i),z=g.scene.background,t&&(g.scene.background=t),g.gl.render(g.scene,f.current),g.scene.background=z,g.gl.setRenderTarget(null),s.current.visible=!0,j++)}),d.createElement(d.Fragment,null,d.createElement("orthographicCamera",te({left:p.width/-2,right:p.width/2,top:p.height/2,bottom:p.height/-2,ref:we([f,x])},c),!y&&o),d.createElement("group",{ref:s},y&&o(i.texture)))}),Me={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},I=re(t=>({...Me,setSelectedEpisodeId:r=>t({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>t({selectedEpisodeLink:r}),setSelectedEpisode:r=>t({selectedEpisode:r})})),$e=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Ie=()=>e.jsxs(ke,{children:[e.jsx(We,{children:e.jsx(Fe,{children:e.jsx($e,{})})}),e.jsx(He,{children:"Graph Mindset"})]}),ke=w(b).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,We=w(b)`
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
    color: ${_.white};
  }
`,He=w(F)`
  width: 127px;
  height: 24px;
  color: ${_.white};
  font-family: Barlow;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.22px;
  margin-left: 16px;
  white-space: nowrap;
`,Be=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Le=/^(https?:\/\/)/,Ae=/(www\.)?/,De=/[\w-]+(\.[\w-]+)*/,Ze=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,Ge=/(\/[^\s?]*)?/,Ne=/(\?[^\s]*)?/,Ve=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,Oe=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,qe=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,Ue=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Xe=new RegExp(`${Le.source}${Ae.source}${De.source}${Ze.source}?${Ge.source}${Ne.source}$`,"i"),Ye=t=>{try{if(!(t==null?void 0:t.match(Xe)))return!1;const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}catch{return!1}},G=t=>Ye(t)?[Ve,Oe,qe,Ue].some(a=>a.test(t)):!1,Ke=async t=>{const r="add_node",a={};a.media_url=t.source,a.content_type="audio_video";const o=await se.post(`/${r}`,JSON.stringify(a));if(o.error){const{message:u}=o.error;throw new Error(u)}return o},Je=()=>{const[t,r]=d.useState(""),[a,o]=d.useState(!1),[u,c]=d.useState(""),{setRunningProjectId:x}=$(s=>s),{setSelectedEpisodeId:n,setSelectedEpisodeLink:l}=I(s=>s),p=s=>{const{value:i}=s.target;r(i),o(i!==""&&!G(i))},f=async()=>{if(G(t))try{const s=await Ke({source:t});s.data.project_id&&x(s.data.project_id),s.data.ref_id&&(n(s.data.ref_id),l(t))}catch(s){let i=D;if((s==null?void 0:s.status)===400){const j=await s.json();i=j.errorCode||(j==null?void 0:j.status)||D,j.data.ref_id&&(n(j.data.ref_id),l(t))}else s instanceof Error&&(i=s.message);c(String(i))}};return e.jsxs(Qe,{children:[e.jsx(et,{children:"Ideas have shapes"}),e.jsxs(rt,{children:[e.jsx(tt,{error:a,onChange:p,onKeyDown:s=>s.key==="Enter"&&f(),placeholder:"Paste podcast or video link",value:t}),e.jsx(st,{error:a,onClick:a?void 0:f,children:e.jsx(Be,{})})]}),u&&e.jsx("div",{children:u})]})},Qe=w(b)`
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
`,et=w(b)`
  color: ${_.white};
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
  border: 1px solid ${t=>t.error?"red":_.DIVIDER_4};
  background: ${_.INPUT_BG};
  color: ${_.white};
  font-family: Barlow;
  font-size: 16px;

  &::placeholder {
    color: ${_.INPUT_PLACEHOLDER};
  }

  &:focus {
    outline: none;
    border-color: ${t=>t.error?"red":_.primaryBlue};
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
  color: ${_.white};
  font-size: 20px;
  cursor: ${t=>t.error?"not-allowed":"pointer"};

  svg {
    width: 8px;
    height: 17px;
    color: ${_.GRAY6};
  }
`,q=d.memo(({type:t,name:r,left:a})=>{var l,p;const[o]=oe(f=>[f.normalizedSchemasByType]),u=(l=o[t])==null?void 0:l.primary_color,c=(p=o[t])==null?void 0:p.icon,n={iconStart:(c?`svg-icons/${c}.svg`:null)??"thing_badge.svg",color:u??_.THING};return e.jsx(it,{style:{left:`${a}%`},children:e.jsx(ae,{content:`${r||t}`,children:e.jsx(ot,{...n,label:t})})})});q.displayName="Marker";const ot=({iconStart:t,color:r,label:a})=>e.jsx(nt,{color:r,children:e.jsx("img",{alt:a,className:"badge__img",src:t})}),nt=w(b).attrs({direction:"row"})`
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
  background-color: ${_.white};
  border-radius: 50%;
  transform: translateX(-50%); /* Center the marker horizontally */
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,at=({duration:t,markers:r,handleProgressChange:a,playingTIme:o})=>e.jsxs(ct,{children:[e.jsx(lt,{max:t,onChange:a,value:o}),r.map(u=>{var l;const c=((u==null?void 0:u.start)||0)/t*100,x=(u==null?void 0:u.node_type)||"",n=((l=u==null?void 0:u.properties)==null?void 0:l.name)||"";return e.jsx(q,{left:c,name:n,type:x},u.ref_id)})]}),ct=w(b)`
  position: relative;
  flex: 1 1 100%;
`,lt=w(ge)`
  && {
    z-index: 20;
    color: ${_.white};
    height: 3px;
    width: calc(100% - 12px);
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 10px;
      height: 10px;
      background-color: ${_.white};
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
`,pt=({markers:t})=>{const{isPlaying:r,setIsPlaying:a,playingTime:o,playingNode:u,playerRef:c}=M(s=>s),x=u,n=d.useCallback((s,i)=>{const j=Array.isArray(i)?i[0]:i;c&&c.seekTo(j,"seconds")},[c]),l=()=>{if(c){const s=c.getCurrentTime()-15;c.seekTo(s,"seconds")}},p=()=>{if(c){const s=c.getCurrentTime()+15;c.seekTo(s,"seconds")}},f=(c==null?void 0:c.getDuration())||0;return x?e.jsxs(dt,{children:[e.jsxs(ut,{children:[e.jsx(xt,{onClick:l,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(ft,{"data-testid":"play-pause-button",onClick:s=>{a(!r),s.stopPropagation()},size:"small",children:r?e.jsx(ce,{"data-testid":"pause-icon"}):e.jsx(le,{"data-testid":"play-icon"})}),e.jsx(ht,{onClick:p,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]}),e.jsx(at,{duration:f,handleProgressChange:n,markers:t,playingTIme:o})]}):null},dt=w(b).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${_.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,ut=w(b).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 142px;
  height: 54px;
  background: ${_.BG1};
  border-radius: 40px;
  margin-right: 54px;
  color: ${_.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,ft=w(pe)`
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
`,gt=({sourcePosition:t,targetPosition:r,color:a="white",arrowSize:o=1,label:u="label"})=>{const{points:c,textPosition:x,textRotation:n}=d.useMemo(()=>{const l=new S(t.x,t.y,t.z),p=new S(r.x,r.y,r.z),f=new S().subVectors(p,l).normalize(),s=new S().addVectors(l,p).multiplyScalar(.5),i=Math.atan2(f.y,f.x),j=new S().copy(f).multiplyScalar(-o).applyAxisAngle(new S(0,0,1),Math.PI/6),z=new S().copy(f).multiplyScalar(-o).applyAxisAngle(new S(0,0,1),-Math.PI/6);return{points:[l,p,p.clone(),p.clone().add(j),p.clone(),p.clone().add(z)],textPosition:s,textRotation:i}},[t,r,o]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(c.flatMap(l=>[l.x,l.y,l.z])),attach:"attributes-position",count:c.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:a})]}),u&&e.jsx(je,{anchorX:"center",anchorY:"middle",color:a,fontSize:1,position:x,rotation:[0,0,n],children:u})]})},mt=(t,r,a)=>{const o=new Ee;return o.moveTo(-t/2+a,-r/2),o.lineTo(t/2-a,-r/2),o.quadraticCurveTo(t/2,-r/2,t/2,-r/2+a),o.lineTo(t/2,r/2-a),o.quadraticCurveTo(t/2,r/2,t/2-a,r/2),o.lineTo(-t/2+a,r/2),o.quadraticCurveTo(-t/2,r/2,-t/2,r/2-a),o.lineTo(-t/2,-r/2+a),o.quadraticCurveTo(-t/2,-r/2,-t/2+a,-r/2),o},yt=({width:t,height:r,radius:a,color:o})=>{const u=mt(t,r,a);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[u]}),e.jsx("meshBasicMaterial",{color:o,opacity:.9,transparent:!0})]})},wt=({name:t,url:r,type:a})=>e.jsxs(jt,{children:[r&&e.jsx("img",{alt:"",className:"image",src:r}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(de,{type:a})}),e.jsx("div",{className:"action-btn",children:e.jsx(ue,{})})]}),jt=w(b)`
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
    color: ${_.GRAY6};
    position: absolute;
  }
`,W=d.memo(({width:t,height:r,position:a,url:o,onButtonClick:u,name:c,type:x,color:n,zoom:l})=>e.jsxs("group",{position:a,children:[e.jsx(yt,{color:n,height:r,radius:1.5,width:t}),!1,e.jsx(Ce,{position:[-t/2,r/2,0],children:e.jsx(b,{onClick:()=>u(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*l}px`,height:`${r*l}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:e.jsx(wt,{name:`${c}`,type:x||"",url:o})})})]}));W.displayName="Node";const N=144/10,k=84/10,Ct=()=>{const t=R(),{dataInitial:r}=$(n=>n),{camera:a,viewport:o}=t,[u,c]=d.useState(a.zoom);d.useEffect(()=>{const n=a,l=p=>{p.preventDefault(),p.ctrlKey?(n.zoom+=p.deltaY*-.1,n.zoom=Math.max(2,Math.min(n.zoom,20)),c(n.zoom)):n.position.x+=p.deltaX*.1,n.updateProjectionMatrix()};return window.addEventListener("wheel",l,{passive:!1}),()=>{window.removeEventListener("wheel",l)}},[a]);const x=d.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const n=r.links.filter(s=>{var i;return(i=s==null?void 0:s.properties)==null?void 0:i.start}).map(s=>{var i;return{source:s.source,target:s.target,start:(i=s.properties)==null?void 0:i.start}}),l=r.nodes.filter(s=>r.links.some(i=>i.source===s.ref_id||i.target===s.ref_id)).map(s=>{const i=n.find(g=>s.ref_id===g.source||s.ref_id===g.target),j=((i==null?void 0:i.start)||0)*(o.width/10);return{...s,x:j,y:0,z:0,start:(i==null?void 0:i.start)||0}}).filter(s=>s.node_type!=="Clip"&&s.node_type!=="Episode"&&s.node_type!=="Show"),p=l.reduce((s,i)=>{const j=r.links.filter(h=>{var m;return!((m=h==null?void 0:h.properties)!=null&&m.start)&&[h.target,h.source].includes(i.ref_id)}),y=r.nodes.filter(h=>h.node_type!=="Episode"&&h.node_type!=="Clip"&&h.ref_id!==i.ref_id&&j.some(m=>[m.source,m.target].includes(h.ref_id))).map((h,m)=>{const{x:C}=i,P=(Math.floor(m/2)+1)*k*2*(m%2===0?1:-1);return{...h,x:C,y:P,z:0}}),g=j.map(h=>{if(h.source===i.ref_id){const C=y.find(P=>P.ref_id===h.target);return{...h,sourcePositions:{x:i.x,y:i.y,z:i.z},targetPositions:{x:C==null?void 0:C.x,y:C==null?void 0:C.y,z:C==null?void 0:C.z}}}const m=y.find(C=>C.ref_id===h.source);return{...h,sourcePositions:{x:m==null?void 0:m.x,y:m==null?void 0:m.y,z:m==null?void 0:m.z},targetPositions:{x:i.x,y:i.y,z:i.z}}});return s[i.ref_id]={nodes:y,edges:g},s},{}),f=Object.values(p).flatMap(s=>s.edges);return{nodes:l,edges:f,relatedNodes:Object.fromEntries(Object.entries(p).map(([s,i])=>[s,i.nodes]))}},[r,o.width]);return e.jsxs(e.Fragment,{children:[x.nodes.map(n=>{var l,p;return e.jsxs(d.Fragment,{children:[e.jsx(W,{color:"#353A46",height:k,name:((l=n==null?void 0:n.properties)==null?void 0:l.name)||"",onButtonClick:console.log,position:[n.x,n.y,n.z],type:n.node_type,url:((p=n==null?void 0:n.properties)==null?void 0:p.image_url)||"logo.png",width:N,zoom:u}),(x.relatedNodes[n.ref_id]||[]).map(f=>{var s,i;return e.jsx(W,{color:"#353A46",height:k,name:((s=f==null?void 0:f.properties)==null?void 0:s.name)||"",onButtonClick:console.log,position:[f.x,f.y,f.z],type:f.node_type,url:((i=f==null?void 0:f.properties)==null?void 0:i.image_url)||"logo.png",width:N,zoom:u},`${f.ref_id}-${n.ref_id}`)})]},n.ref_id)}),x.edges.map((n,l)=>n!=null&&n.sourcePositions&&(n!=null&&n.targetPositions)?e.jsx(gt,{label:n.edge_type||"",sourcePosition:new S(n.sourcePositions.x,n.sourcePositions.y,n.sourcePositions.z),targetPosition:new S(n.targetPositions.x,n.targetPositions.y,n.targetPositions.z)},`edge-${l}`):null)]})},bt=()=>{const{camera:t,viewport:r}=R(),a=M(o=>o.playerRef);return O(()=>{if(a){const o=a.getCurrentTime();t.position.x=o*r.width/10}}),null},U=d.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs(be,{orthographic:!0,children:[e.jsx(bt,{}),e.jsx(Re,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(Ct,{})]})})));U.displayName="Scene";const _t=({mediaUrl:t})=>{const r=d.useRef(null),[a,o]=d.useState("ready"),[u,c]=d.useState(!1);fe(v=>v);const{dataInitial:x}=$(v=>v),{isPlaying:n,playingTime:l,setIsPlaying:p,setPlayingTime:f,setDuration:s,playingNode:i,volume:j,setHasError:z,resetPlayer:y,isSeeking:g,setIsSeeking:h,setPlayerRef:m,playerRef:C}=M(v=>v);d.useEffect(()=>()=>y(),[y]),d.useEffect(()=>{i&&!u&&(f(0),s(0),c(!1))},[i,f,s,c,u]),d.useEffect(()=>{g&&C&&(C.seekTo(l,"seconds"),h(!1))},[l,g,h,C]);const P=()=>{p(!n)},H=()=>{p(!0)},X=()=>{p(!1)},Y=()=>{z(!0),o("error")};d.useMemo(()=>((x==null?void 0:x.links.filter(E=>{var T;return(T=E==null?void 0:E.properties)==null?void 0:T.start}))||[]).slice().sort((E,T)=>{var L,A;return((L=E==null?void 0:E.properties)==null?void 0:L.start)-((A=T==null?void 0:T.properties)==null?void 0:A.start)}),[x]);const K=v=>{if(!g){const B=v.playedSeconds;f(B);return}},J=()=>{C&&(o("ready"),P())},Q=()=>{P()},ee=d.useCallback(v=>{!C&&v&&m(v)},[m,C]);return t?e.jsxs(vt,{ref:r,tabIndex:0,children:[e.jsx(zt,{isFullScreen:!1,children:e.jsx(xe,{size:120,src:(i==null?void 0:i.image_url)||"",type:"clip"})}),e.jsx(Et,{isFullScreen:!1,onClick:Q,children:e.jsx(me,{ref:ee,controls:!0,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:Y,onPause:X,onPlay:H,onProgress:K,onReady:J,playing:n,url:t||"",volume:j,width:"100%"})}),a==="error"?e.jsx(St,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},vt=w(b)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,zt=w(b)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,St=w(b)`
  height: 60px;
  padding: 12px 16px;
  color: ${_.primaryRed};
`,Et=w.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Pt=d.memo(_t),Tt=()=>{const{selectedEpisodeId:t}=I(c=>c),{playingTime:r,duration:a}=M(c=>c),[o,u]=d.useState([]);return d.useEffect(()=>{t&&(async()=>{try{const x=await V(t,0,50,{nodeType:["Clip"],useSubGraph:!1});x!=null&&x.nodes&&u(x.nodes)}catch(x){console.error(x)}})()},[t]),e.jsxs(Rt,{children:[e.jsx(b,{className:"heading",children:"Transcript"}),o.map(c=>{var p,f,s;const x=(p=c==null?void 0:c.properties)==null?void 0:p.timestamp,[n,l]=x?x.split("-").map(Number):[0,a];return n<=r*1e3&&r*1e3<l?e.jsx(Mt,{direction:"row",children:((f=c==null?void 0:c.properties)==null?void 0:f.text)&&e.jsx("span",{children:(s=c==null?void 0:c.properties)==null?void 0:s.text})},c.ref_id):null})]})},Rt=w(b)`
  .heading {
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 16px;
  }

  color: ${_.white};
  background: ${_.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
`,Mt=w(b)`
  flex-wrap: wrap;
  flex: 1 1 100%;
`,$t=()=>{var a,o;const{selectedEpisodeLink:t,selectedEpisode:r}=I(u=>u);return e.jsxs(It,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsxs(Ft,{children:[(r==null?void 0:r.name)&&e.jsx(Wt,{children:r==null?void 0:r.name}),((a=r==null?void 0:r.properties)==null?void 0:a.text)&&e.jsx(kt,{children:(o=r==null?void 0:r.properties)==null?void 0:o.text}),t&&e.jsx(Pt,{mediaUrl:t})]}),e.jsx(Tt,{})]})},It=w(b)(({theme:t})=>({position:"relative",display:"flex",padding:"20px",background:"transparent",width:"100%",[t.breakpoints.up("sm")]:{width:ye}})),kt=w(F)`
  font-size: 20px;
  font-weight: Bold;
  line-height: 24.2px;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
  font-weight: 500;
`,Wt=w(F)`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
`,Ft=w(b)(({theme:t})=>({width:"100%",margin:"16px auto",zIndex:29,[t.breakpoints.up("sm")]:{width:"390px"}})),Jt=()=>{const{addNewNode:t,isFetching:r,runningProjectId:a,dataInitial:o}=$(y=>y),[u,c]=d.useState(!0),{selectedEpisodeId:x,setSelectedEpisode:n}=I(y=>y),l=he(),p=d.useRef(null),f=d.useRef(null),{setPlayingNode:s}=M(y=>y),i=d.useCallback(y=>{r||(p.current||(p.current={nodes:[],edges:[]}),y.edges&&p.current.edges.push(...y.edges),y.nodes&&p.current.nodes.push(...y.nodes),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{if(p.current){const{nodes:g,edges:h}=p.current,m={nodes:g,edges:h};p.current={nodes:[],edges:[]},t(m)}},3e3))},[t,r]),j=d.useCallback(y=>{console.log(y,"uuuuuupdate")},[]);d.useEffect(()=>{x&&(async()=>{try{const g=await V(x,0,50);g&&i(g)}catch(g){console.error(g)}})()},[x,i]),d.useEffect(()=>{x&&(async()=>{try{const g=await ne(x);g&&(s(g),n(g))}catch(g){console.error(g)}})()},[x,s,n]),d.useEffect(()=>(l&&(l.connect(),l.on("connect_error",y=>{console.error("Socket connection error:",y)}),l.on("new_node_created",i),l.on("node_updated",j)),()=>{l&&l.off()}),[l,j,i]),d.useEffect(()=>{if(a)try{l==null||l.emit("update_project_id",{id:a})}catch(y){console.error(y)}},[a,l]);const z=d.useMemo(()=>{if(o){const y=o.links.filter(h=>{var m;return(m=h==null?void 0:h.properties)==null?void 0:m.start}).map(h=>{var m;return{source:h.source,target:h.target,start:(m=h.properties)==null?void 0:m.start}});return o.nodes.filter(h=>o.links.some(m=>m.source===h.ref_id||m.target===h.ref_id)).map(h=>{const m=y.find(C=>h.ref_id===C.source||h.ref_id===C.target);return{...h,start:(m==null?void 0:m.start)||0}}).filter(h=>h&&h.node_type!=="Clip"&&h.node_type!=="Episode"&&h.node_type!=="Show")}return[]},[o]);return e.jsx(b,{direction:"row",style:{height:"100%"},children:x?e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(b,{onClick:()=>c(!u),children:e.jsx(Ie,{})}),e.jsx($t,{})]}),e.jsxs(b,{basis:"100%",grow:1,p:16,shrink:1,children:[e.jsx(b,{basis:"100%",grow:1,shrink:1,children:u?e.jsx(U,{}):e.jsx(ie,{})}),e.jsx(pt,{markers:z})]})]}):e.jsx(Je,{})})};export{Jt as MindSet};
