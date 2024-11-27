import{r as c,y as he,c as me,j as t,s as y,a as v,F as b,T as V,u as H,N as X,z as xe,d as ge,A as te,D as ye}from"./index-19814313.js";import{Universe as we}from"./index-0ba9517e.js";import{T as je,b as $,c as Ce,d as be,e as ve,f as Se,g as _e,h as Ee,i as Te,v as K,j as ke,a as ze}from"./index-cc210980.js";import{S as Re,R as Me,M as Pe}from"./index-7a4ff7c6.js";import{u as M,a as re,m as Ie,H as $e,C as Fe}from"./index-0f6d5882.js";import{W as Le,L as J,H as He,D as Be,F as We,V as z,S as De}from"./three.module-9c942ca6.js";import"./TextareaAutosize-df1234af.js";import"./index-805fa58a.js";import"./ClipLoader-2e790a7e.js";import"./Skeleton-90695f70.js";import"./Stack-0ac43727.js";import"./isPlainObject-a63e2096.js";import"./Typography-7c929ed0.js";import"./createSvgIcon-68b15df2.js";import"./index-26d44695.js";function Ne(e,r,n){const{gl:o,size:p,viewport:h}=M(),l=typeof e=="number"?e:p.width*h.dpr,a=typeof r=="number"?r:p.height*h.dpr,d=(typeof e=="number"?n:e)||{},{samples:u=0,depth:m,...s}=d,i=c.useMemo(()=>{let w;return w=new Le(l,a,{minFilter:J,magFilter:J,encoding:o.outputEncoding,type:He,...s}),m&&(w.depthTexture=new Be(l,a,We)),w.samples=u,w},[]);return c.useLayoutEffect(()=>{i.setSize(l,a),u&&(i.samples=u)},[u,i,l,a]),c.useEffect(()=>()=>i.dispose(),[]),i}const Ae=e=>typeof e=="function",Ze=c.forwardRef(({envMap:e,resolution:r=256,frames:n=1/0,children:o,makeDefault:p,...h},l)=>{const a=M(({set:x})=>x),d=M(({camera:x})=>x),u=M(({size:x})=>x),m=c.useRef(null),s=c.useRef(null),i=Ne(r);c.useLayoutEffect(()=>{h.manual||m.current.updateProjectionMatrix()},[u,h]),c.useLayoutEffect(()=>{m.current.updateProjectionMatrix()}),c.useLayoutEffect(()=>{if(p){const x=d;return a(()=>({camera:m.current})),()=>a(()=>({camera:x}))}},[m,p,a]);let w=0,S=null;const f=Ae(o);return re(x=>{f&&(n===1/0||w<n)&&(s.current.visible=!1,x.gl.setRenderTarget(i),S=x.scene.background,e&&(x.scene.background=e),x.gl.render(x.scene,m.current),x.scene.background=S,x.gl.setRenderTarget(null),s.current.visible=!0,w++)}),c.createElement(c.Fragment,null,c.createElement("orthographicCamera",he({left:u.width/-2,right:u.width/2,top:u.height/2,bottom:u.height/-2,ref:Ie([m,l])},h),!f&&o),c.createElement("group",{ref:s},f&&o(i.texture)))}),Ge={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},B=me(e=>({...Ge,setSelectedEpisodeId:r=>e({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>e({selectedEpisodeLink:r}),setSelectedEpisode:r=>e({selectedEpisode:r})})),Ve=e=>t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),t.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),qe=()=>t.jsxs(Ue,{children:[t.jsx(Oe,{children:t.jsx(Ye,{children:t.jsx(Ve,{})})}),t.jsx(Xe,{children:"Graph Mindset"})]}),Ue=y(b).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Oe=y(b)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ye=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${v.white};
  }
`,Xe=y(V)`
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
`,Ke=e=>t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Je=/^(https?:\/\/)/,Qe=/(www\.)?/,et=/[\w-]+(\.[\w-]+)*/,tt=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,rt=/(\/[^\s?]*)?/,st=/(\?[^\s]*)?/,ot=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,nt=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,it=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,at=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ct=new RegExp(`${Je.source}${Qe.source}${et.source}${tt.source}?${rt.source}${st.source}$`,"i"),lt=e=>{try{if(!(e==null?void 0:e.match(ct)))return!1;const o=new URL(e).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}catch{return!1}},Q=e=>lt(e)?[ot,nt,it,at].some(n=>n.test(e)):!1,pt=async e=>{const r="add_node",n={};n.media_url=e.source,n.content_type="audio_video";const o=await xe.post(`/${r}`,JSON.stringify(n));if(o.error){const{message:p}=o.error;throw new Error(p)}return o},dt=()=>{const[e,r]=c.useState(""),[n,o]=c.useState(!1),[p,h]=c.useState(""),{setRunningProjectId:l}=H(s=>s),{setSelectedEpisodeId:a,setSelectedEpisodeLink:d}=B(s=>s),u=s=>{const{value:i}=s.target;r(i),o(i!==""&&!Q(i))},m=async()=>{if(Q(e))try{const s=await pt({source:e});s.data.project_id&&l(s.data.project_id),s.data.ref_id&&(a(s.data.ref_id),d(e))}catch(s){let i=X;if((s==null?void 0:s.status)===400){const w=await s.json();i=w.errorCode||(w==null?void 0:w.status)||X,w.data.ref_id&&(a(w.data.ref_id),d(e))}else s instanceof Error&&(i=s.message);h(String(i))}};return t.jsxs(ut,{children:[t.jsx(ft,{children:"Ideas have shapes"}),t.jsxs(mt,{children:[t.jsx(ht,{error:n,onChange:u,onKeyDown:s=>s.key==="Enter"&&m(),placeholder:"Paste podcast or video link",value:e}),t.jsx(xt,{error:n,onClick:n?void 0:m,children:t.jsx(Ke,{})})]}),p&&t.jsx("div",{children:p})]})},ut=y(b)`
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
`,ft=y(b)`
  color: ${v.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,ht=y.input`
  width: 100%;
  max-width: 450px;
  padding: 12px 28px 12px 16px;
  border-radius: 100px;
  border: 1px solid ${e=>e.error?"red":v.DIVIDER_4};
  background: ${v.INPUT_BG};
  color: ${v.white};
  font-family: Barlow;
  font-size: 16px;

  &::placeholder {
    color: ${v.INPUT_PLACEHOLDER};
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.error?"red":v.primaryBlue};
  }
`,mt=y.div`
  position: relative;
  width: 450px;
  display: flex;
  align-items: center;
`,xt=y.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${v.white};
  font-size: 20px;
  cursor: ${e=>e.error?"not-allowed":"pointer"};

  svg {
    width: 8px;
    height: 17px;
    color: ${v.GRAY6};
  }
`,se=c.memo(({type:e,name:r,left:n})=>{var d,u;const[o]=ge(m=>[m.normalizedSchemasByType]),p=(d=o[e])==null?void 0:d.primary_color,h=(u=o[e])==null?void 0:u.icon,a={iconStart:(h?`svg-icons/${h}.svg`:null)??"thing_badge.svg",color:p??v.THING};return t.jsx(wt,{style:{left:`${n}%`},children:t.jsx(je,{content:`${r||e}`,children:t.jsx(gt,{...a,label:e})})})});se.displayName="Marker";const gt=({iconStart:e,color:r,label:n})=>t.jsx(yt,{color:r,children:t.jsx("img",{alt:n,className:"badge__img",src:e})}),yt=y(b).attrs({direction:"row"})`
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
`,wt=y.div`
  position: absolute;
  top: -4px; /* Adjust as needed to center above the progress bar */
  width: 8px;
  height: 8px;
  background-color: ${v.white};
  border-radius: 50%;
  transform: translateX(-50%); /* Center the marker horizontally */
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,jt=({duration:e,markers:r,handleProgressChange:n,playingTIme:o})=>t.jsxs(Ct,{children:[t.jsx(bt,{max:e,onChange:n,value:o}),r.map(p=>{var d;const h=((p==null?void 0:p.start)||0)/e*100,l=(p==null?void 0:p.node_type)||"",a=((d=p==null?void 0:p.properties)==null?void 0:d.name)||"";return t.jsx(se,{left:h,name:a,type:l},p.ref_id)})]}),Ct=y(b)`
  position: relative;
  flex: 1 1 100%;
`,bt=y(Re)`
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
      width: 10px;
      height: 10px;
      background-color: ${v.white};
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
`,vt=({markers:e})=>{const{isPlaying:r,setIsPlaying:n,playingTime:o,playingNode:p,duration:h,playerRef:l}=$(s=>s),a=p,d=c.useCallback((s,i)=>{const w=Array.isArray(i)?i[0]:i;l&&l.seekTo(w,"seconds")},[l]),u=()=>{if(l){const s=l.getCurrentTime()-15;l.seekTo(s,"seconds")}},m=()=>{if(l){const s=l.getCurrentTime()+15;l.seekTo(s,"seconds")}};return a?t.jsxs(St,{children:[t.jsxs(_t,{children:[t.jsx(Tt,{onClick:u,children:t.jsx("img",{alt:"",src:"public/RewindIcon.svg"})}),t.jsx(Et,{"data-testid":"play-pause-button",onClick:s=>{n(!r),s.stopPropagation()},size:"small",children:r?t.jsx(Ce,{"data-testid":"pause-icon"}):t.jsx(be,{"data-testid":"play-icon"})}),t.jsx(kt,{onClick:m,children:t.jsx("img",{alt:"",src:"public/ForwardIcon.svg"})})]}),t.jsx(jt,{duration:h,handleProgressChange:d,markers:e,playingTIme:o})]}):null},St=y(b).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${v.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,_t=y(b).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 142px;
  height: 54px;
  background: ${v.BG1};
  border-radius: 40px;
  margin-right: 54px;
  color: ${v.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,Et=y(ve)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Tt=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,kt=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,zt=({sourcePosition:e,targetPosition:r,color:n="white",arrowSize:o=1})=>{const p=c.useMemo(()=>{const h=new z(e.x,e.y,e.z),l=new z(r.x,r.y,r.z),a=new z().subVectors(l,h).normalize(),d=new z().copy(a).multiplyScalar(-o).applyAxisAngle(new z(0,0,1),Math.PI/6),u=new z().copy(a).multiplyScalar(-o).applyAxisAngle(new z(0,0,1),-Math.PI/6);return[h,l,l.clone(),l.clone().add(d),l.clone(),l.clone().add(u)]},[e,r,o]);return t.jsxs("line",{children:[t.jsx("bufferGeometry",{children:t.jsx("bufferAttribute",{array:new Float32Array(p.flatMap(h=>[h.x,h.y,h.z])),attach:"attributes-position",count:p.length,itemSize:3})}),t.jsx("lineBasicMaterial",{color:n})]})},Rt=(e,r,n)=>{const o=new De;return o.moveTo(-e/2+n,-r/2),o.lineTo(e/2-n,-r/2),o.quadraticCurveTo(e/2,-r/2,e/2,-r/2+n),o.lineTo(e/2,r/2-n),o.quadraticCurveTo(e/2,r/2,e/2-n,r/2),o.lineTo(-e/2+n,r/2),o.quadraticCurveTo(-e/2,r/2,-e/2,r/2-n),o.lineTo(-e/2,-r/2+n),o.quadraticCurveTo(-e/2,-r/2,-e/2+n,-r/2),o},Mt=({width:e,height:r,radius:n,color:o})=>{const p=Rt(e,r,n);return t.jsxs("mesh",{children:[t.jsx("shapeGeometry",{args:[p]}),t.jsx("meshBasicMaterial",{color:o,opacity:.9,transparent:!0})]})},Pt=({name:e,url:r,type:n})=>t.jsxs(It,{children:[r&&t.jsx("img",{alt:"",className:"image",src:r}),t.jsx("div",{className:"title",children:e}),t.jsx("div",{className:"badge",children:t.jsx(Se,{type:n})}),t.jsx("div",{className:"action-btn",children:t.jsx(_e,{})})]}),It=y(b)`
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
    color: ${v.GRAY6};
    position: absolute;
  }
`,G=c.memo(({width:e,height:r,position:n,url:o,onButtonClick:p,name:h,type:l,color:a,zoom:d})=>t.jsxs("group",{position:n,children:[t.jsx(Mt,{color:a,height:r,radius:1.5,width:e}),!1,t.jsx($e,{position:[-e/2,r/2,0],children:t.jsx(b,{onClick:()=>p(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${e*d}px`,height:`${r*d}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:t.jsx(Pt,{name:`${h}`,type:l||"",url:o})})})]}));G.displayName="Node";const ee=144/10,Z=84/10,$t=()=>{const e=M(),{dataInitial:r}=H(a=>a),{camera:n,viewport:o}=e,[p,h]=c.useState(n.zoom);c.useEffect(()=>{const a=n,d=u=>{u.preventDefault(),u.ctrlKey?(a.zoom+=u.deltaY*-.1,a.zoom=Math.max(2,Math.min(a.zoom,20)),h(a.zoom)):a.position.x+=u.deltaX*.1,a.updateProjectionMatrix()};return window.addEventListener("wheel",d,{passive:!1}),()=>{window.removeEventListener("wheel",d)}},[n]);const l=c.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const a=r.links.filter(s=>{var i;return(i=s==null?void 0:s.properties)==null?void 0:i.start}).map(s=>{var i;return{source:s.source,target:s.target,start:(i=s.properties)==null?void 0:i.start}}),d=r.nodes.filter(s=>r.links.some(i=>i.source===s.ref_id||i.target===s.ref_id)).map(s=>{const i=a.find(x=>s.ref_id===x.source||s.ref_id===x.target),w=((i==null?void 0:i.start)||0)*(o.width/10);return{...s,x:w,y:0,z:0,start:(i==null?void 0:i.start)||0}}).filter(s=>s.node_type!=="Clip"&&s.node_type!=="Episode"&&s.node_type!=="Show"),u=d.reduce((s,i)=>{const w=r.nodes.filter(S=>r.links.some(f=>S.node_type!=="Episode"&&S.node_type!=="Clip"&&(f.source===i.ref_id&&f.target===S.ref_id||f.target===i.ref_id&&f.source===S.ref_id))).map((S,f)=>{const{x}=i,g=(Math.floor(f/2)+1)*Z*2*(f%2===0?1:-1);return{...S,x,y:g,z:0}});return s[i.ref_id]=w,s},{}),m=Object.entries(u).flatMap(([s,i])=>{const w=[s,...i.map(f=>f.ref_id)];return r.links.filter(f=>w.includes(f.source)&&w.includes(f.target)).map(f=>{const x=d.find(j=>j.ref_id===f.source)||i.find(j=>j.ref_id===f.source),g=d.find(j=>j.ref_id===f.target)||i.find(j=>j.ref_id===f.target);return{...f,sourcePosition:x?{x:x.x,y:x.y,z:x.z}:null,targetPosition:g?{x:g.x,y:g.y,z:g.z}:null}})});return{nodes:d,edges:m,relatedNodes:u}},[r,o.width]);return t.jsxs(t.Fragment,{children:[l.nodes.map(a=>{var d,u;return t.jsxs(c.Fragment,{children:[t.jsx(G,{color:"#353A46",height:Z,name:((d=a==null?void 0:a.properties)==null?void 0:d.name)||"",onButtonClick:console.log,position:[a.x,a.y,a.z],type:a.node_type,url:((u=a==null?void 0:a.properties)==null?void 0:u.image_url)||"logo.png",width:ee,zoom:p}),(l.relatedNodes[a.ref_id]||[]).map(m=>{var s,i;return t.jsx(G,{color:"#353A46",height:Z,name:((s=m==null?void 0:m.properties)==null?void 0:s.name)||"",onButtonClick:console.log,position:[m.x,m.y,m.z],type:m.node_type,url:((i=m==null?void 0:m.properties)==null?void 0:i.image_url)||"logo.png",width:ee,zoom:p},`${m.ref_id}-${a.ref_id}`)})]},a.ref_id)}),l.edges.map((a,d)=>{if(!a.sourcePosition||!a.targetPosition)return null;const{sourcePosition:u,targetPosition:m}=a;return t.jsx(c.Fragment,{children:t.jsx(zt,{sourcePosition:u,targetPosition:m})},`edge-${d}`)})]})},Ft=()=>{const{camera:e,viewport:r}=M(),n=$(o=>o.playerRef);return re(()=>{if(n){const o=n.getCurrentTime();e.position.x=o*r.width/10}}),null},oe=c.memo(()=>(console.log("rerender"),t.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:t.jsxs(Fe,{orthographic:!0,children:[t.jsx(Ft,{}),t.jsx(Ze,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),t.jsx($t,{})]})})));oe.displayName="Scene";const Lt=({mediaUrl:e})=>{const r=c.useRef(null),[n,o]=c.useState(!1),[p,h]=c.useState(!1),[l,a]=c.useState(!1),[d,u]=c.useState("ready"),[m,s]=c.useState(!1),[i,w]=c.useState(""),[S,f]=c.useState(!1),x=Ee();Te(C=>C);const{dataInitial:g}=H(C=>C);c.useEffect(()=>{const C="00:00:00-00:12:00",_=C==null?void 0:C.split("-")[0];w(_)},[x]);const{isPlaying:j,playingTime:P,setIsPlaying:W,setPlayingTime:R,setDuration:D,playingNode:I,volume:ne,setHasError:ie,resetPlayer:q,isSeeking:N,setIsSeeking:U,setPlayerRef:O,playerRef:E}=$(C=>C);c.useEffect(()=>()=>q(),[q]),c.useEffect(()=>{I&&!m&&(R(0),D(0),s(!1),f(!1))},[I,R,D,s,m]),c.useEffect(()=>{N&&E&&(E.seekTo(P,"seconds"),U(!1))},[P,N,U,E]),c.useEffect(()=>{if(m&&i&&E&&!S){const C=K(i);E.seekTo(C,"seconds"),R(C),f(!0)}},[m,i,R,S,E]);const Y=()=>{W(!j)},ae=()=>{W(!0)},ce=()=>{W(!1)},le=()=>{ie(!0),u("error")};c.useMemo(()=>((g==null?void 0:g.links.filter(T=>{var k;return(k=T==null?void 0:T.properties)==null?void 0:k.start}))||[]).slice().sort((T,k)=>{var L,A;return((L=T==null?void 0:T.properties)==null?void 0:L.start)-((A=k==null?void 0:k.properties)==null?void 0:A.start)}),[g]);const pe=C=>{if(!N){const _=C.playedSeconds;R(_);return}},de=()=>{if(E){u("ready");const C=E.getDuration();if(D(C),i&&!S){const _=K(i);E.seekTo(_,"seconds"),R(_),f(!0)}}},F=()=>{h(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",F)};c.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",F)}),c.useEffect(()=>{const C=_=>{if(p){const T=window.screen.height,k=_.clientY,L=T-k;a(L<=50)}};return document.addEventListener("mousemove",C),()=>{document.removeEventListener("mousemove",C)}},[p,l]),c.useEffect(()=>{const C=_=>{p&&_.key==="Escape"?(_.preventDefault(),_.stopPropagation()):n&&_.key===" "&&(_.preventDefault(),Y())};return document.addEventListener("fullscreenchange",F),document.addEventListener("keydown",C),()=>{document.removeEventListener("fullscreenchange",F),document.removeEventListener("keydown",C)}});const ue=()=>{Y()},fe=c.useCallback(C=>{!E&&C&&O(C)},[O,E]);return e?t.jsxs(Ht,{ref:r,onBlur:()=>o(!1),onFocus:()=>o(!0),tabIndex:0,children:[t.jsx(Bt,{isFullScreen:p,children:t.jsx(ke,{size:120,src:(I==null?void 0:I.image_url)||"",type:"clip"})}),t.jsx(Dt,{isFullScreen:p,onClick:ue,children:t.jsx(Me,{ref:fe,controls:!0,height:p?window.screen.height:"219px",onBuffer:()=>u("buffering"),onBufferEnd:()=>u("ready"),onError:le,onPause:ce,onPlay:ae,onProgress:pe,onReady:de,playing:j,url:e||"",volume:ne,width:"100%"})}),d==="error"?t.jsx(Wt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Ht=y(b)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Bt=y(b)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Wt=y(b)`
  height: 60px;
  padding: 12px 16px;
  color: ${v.primaryRed};
`,Dt=y.div`
  margin: ${e=>e.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Nt=c.memo(Lt),At=()=>{const{selectedEpisodeId:e}=B(h=>h),{playingTime:r,duration:n}=$(h=>h),[o,p]=c.useState([]);return c.useEffect(()=>{e&&(async()=>{try{const l=await te(e,0,50,{nodeType:["Clip"],useSubGraph:!1});l!=null&&l.nodes&&p(l.nodes)}catch(l){console.error(l)}})()},[e]),t.jsxs(Zt,{children:[t.jsx(b,{className:"heading",children:"Transcript"}),o.map(h=>{var u,m,s;const l=(u=h==null?void 0:h.properties)==null?void 0:u.timestamp,[a,d]=l?l.split("-").map(Number):[0,n];return a<=r*1e3&&r*1e3<d?t.jsx(Gt,{direction:"row",children:((m=h==null?void 0:h.properties)==null?void 0:m.text)&&t.jsx("span",{children:(s=h==null?void 0:h.properties)==null?void 0:s.text})},h.ref_id):null})]})},Zt=y(b)`
  .heading {
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 16px;
  }

  color: ${v.white};
  background: ${v.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
`,Gt=y(b)`
  flex-wrap: wrap;
  flex: 1 1 100%;
`,Vt=()=>{var n,o;const{selectedEpisodeLink:e,selectedEpisode:r}=B(p=>p);return t.jsxs(qt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsxs(Yt,{children:[(r==null?void 0:r.name)&&t.jsx(Ot,{children:r==null?void 0:r.name}),((n=r==null?void 0:r.properties)==null?void 0:n.text)&&t.jsx(Ut,{children:(o=r==null?void 0:r.properties)==null?void 0:o.text}),e&&t.jsx(Nt,{mediaUrl:e})]}),t.jsx(At,{})]})},qt=y(b)(({theme:e})=>({position:"relative",display:"flex",padding:"20px",background:"transparent",width:"100%",[e.breakpoints.up("sm")]:{width:Pe}})),Ut=y(V)`
  font-size: 20px;
  font-weight: Bold;
  line-height: 24.2px;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
  font-weight: 500;
`,Ot=y(V)`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
`,Yt=y(b)(({theme:e})=>({width:"100%",margin:"16px auto",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),dr=()=>{const{addNewNode:e,isFetching:r,runningProjectId:n,dataInitial:o}=H(f=>f),[p,h]=c.useState(!0),{selectedEpisodeId:l,setSelectedEpisode:a}=B(f=>f),d=ze(),u=c.useRef(null),m=c.useRef(null),{setPlayingNode:s}=$(f=>f),i=c.useCallback(f=>{r||(u.current||(u.current={nodes:[],edges:[]}),f.edges&&u.current.edges.push(...f.edges),f.nodes&&u.current.nodes.push(...f.nodes),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{if(u.current){const{nodes:x,edges:g}=u.current,j={nodes:x,edges:g};u.current={nodes:[],edges:[]},e(j)}},3e3))},[e,r]),w=c.useCallback(f=>{console.log(f,"uuuuuupdate")},[]);c.useEffect(()=>{l&&(async()=>{try{const x=await te(l,0,50);x&&i(x)}catch(x){console.error(x)}})()},[l,i]),c.useEffect(()=>{l&&(async()=>{try{const x=await ye(l);x&&(s(x),a(x))}catch(x){console.error(x)}})()},[l,s,a]),c.useEffect(()=>(d&&(d.connect(),d.on("connect_error",f=>{console.error("Socket connection error:",f)}),d.on("new_node_created",i),d.on("node_updated",w)),()=>{d&&d.off()}),[d,w,i]),c.useEffect(()=>{if(n)try{d==null||d.emit("update_project_id",{id:n})}catch(f){console.error(f)}},[n,d]);const S=c.useMemo(()=>{if(o){const f=o.links.filter(g=>{var j;return(j=g==null?void 0:g.properties)==null?void 0:j.start}).map(g=>{var j;return{source:g.source,target:g.target,start:(j=g.properties)==null?void 0:j.start}});return o.nodes.filter(g=>o.links.some(j=>j.source===g.ref_id||j.target===g.ref_id)).map(g=>{const j=f.find(P=>g.ref_id===P.source||g.ref_id===P.target);return{...g,start:(j==null?void 0:j.start)||0}}).filter(g=>g&&g.node_type!=="Clip"&&g.node_type!=="Episode"&&g.node_type!=="Show")}return[]},[o]);return t.jsx(b,{direction:"row",style:{height:"100%"},children:l?t.jsxs(t.Fragment,{children:[t.jsxs(b,{children:[t.jsx(b,{onClick:()=>h(!p),children:t.jsx(qe,{})}),t.jsx(Vt,{})]}),t.jsxs(b,{basis:"100%",grow:1,p:16,shrink:1,children:[t.jsx(b,{basis:"100%",grow:1,shrink:1,children:p?t.jsx(oe,{}):t.jsx(we,{})}),t.jsx(vt,{markers:S})]})]}):t.jsx(dt,{})})};export{dr as MindSet};
