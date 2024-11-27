import{r as a,y as he,c as xe,j as t,s as y,a as v,F as b,T as V,u as B,N as X,z as me,d as ge,A as te,D as ye}from"./index-45c6190d.js";import{Universe as we}from"./index-c36a2606.js";import{T as je,b as $,C as Ce,c as be,d as ve,e as Se,f as _e,g as Ee,h as Te,i as ke,j as ze,v as K,k as Re,a as Me}from"./index-4de90dc3.js";import{S as Pe,R as Ie,M as $e}from"./index-38e7f255.js";import{u as M,a as re,m as Le,H as He,C as Be}from"./index-0e57dc72.js";import{W as Fe,L as J,H as De,D as Ne,F as We,V as z,S as Ae}from"./three.module-9c942ca6.js";import"./TextareaAutosize-9a4c2d41.js";import"./index-53ea52dc.js";import"./ClipLoader-348c26ec.js";import"./Skeleton-f9e4c071.js";import"./Stack-8a41074b.js";import"./isPlainObject-2834466e.js";import"./Typography-d21f1edc.js";import"./createSvgIcon-6652d33b.js";import"./index-b418c016.js";function Ze(e,r,n){const{gl:s,size:p,viewport:h}=M(),u=typeof e=="number"?e:p.width*h.dpr,i=typeof r=="number"?r:p.height*h.dpr,d=(typeof e=="number"?n:e)||{},{samples:l=0,depth:x,...o}=d,c=a.useMemo(()=>{let w;return w=new Fe(u,i,{minFilter:J,magFilter:J,encoding:s.outputEncoding,type:De,...o}),x&&(w.depthTexture=new Ne(u,i,We)),w.samples=l,w},[]);return a.useLayoutEffect(()=>{c.setSize(u,i),l&&(c.samples=l)},[l,c,u,i]),a.useEffect(()=>()=>c.dispose(),[]),c}const Ge=e=>typeof e=="function",Ve=a.forwardRef(({envMap:e,resolution:r=256,frames:n=1/0,children:s,makeDefault:p,...h},u)=>{const i=M(({set:m})=>m),d=M(({camera:m})=>m),l=M(({size:m})=>m),x=a.useRef(null),o=a.useRef(null),c=Ze(r);a.useLayoutEffect(()=>{h.manual||x.current.updateProjectionMatrix()},[l,h]),a.useLayoutEffect(()=>{x.current.updateProjectionMatrix()}),a.useLayoutEffect(()=>{if(p){const m=d;return i(()=>({camera:x.current})),()=>i(()=>({camera:m}))}},[x,p,i]);let w=0,S=null;const f=Ge(s);return re(m=>{f&&(n===1/0||w<n)&&(o.current.visible=!1,m.gl.setRenderTarget(c),S=m.scene.background,e&&(m.scene.background=e),m.gl.render(m.scene,x.current),m.scene.background=S,m.gl.setRenderTarget(null),o.current.visible=!0,w++)}),a.createElement(a.Fragment,null,a.createElement("orthographicCamera",he({left:l.width/-2,right:l.width/2,top:l.height/2,bottom:l.height/-2,ref:Le([x,u])},h),!f&&s),a.createElement("group",{ref:o},f&&s(c.texture)))}),qe={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},F=xe(e=>({...qe,setSelectedEpisodeId:r=>e({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>e({selectedEpisodeLink:r}),setSelectedEpisode:r=>e({selectedEpisode:r})})),Ue=e=>t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),t.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Oe=()=>t.jsxs(Ye,{children:[t.jsx(Xe,{children:t.jsx(Ke,{children:t.jsx(Ue,{})})}),t.jsx(Je,{children:"Graph Mindset"})]}),Ye=y(b).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Xe=y(b)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ke=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${v.white};
  }
`,Je=y(V)`
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
`,Qe=e=>t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),et=/^(https?:\/\/)/,tt=/(www\.)?/,rt=/[\w-]+(\.[\w-]+)*/,st=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,ot=/(\/[^\s?]*)?/,nt=/(\?[^\s]*)?/,it=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,at=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,ct=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,lt=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,pt=new RegExp(`${et.source}${tt.source}${rt.source}${st.source}?${ot.source}${nt.source}$`,"i"),dt=e=>{try{if(!(e==null?void 0:e.match(pt)))return!1;const s=new URL(e).hostname;return s!=null&&s.startsWith("www.")?((s==null?void 0:s.match(/\./g))||[]).length>=2:((s==null?void 0:s.match(/\./g))||[]).length>=1}catch{return!1}},Q=e=>dt(e)?[it,at,ct,lt].some(n=>n.test(e)):!1,ut=async e=>{const r="add_node",n={};n.media_url=e.source,n.content_type="audio_video";const s=await me.post(`/${r}`,JSON.stringify(n));if(s.error){const{message:p}=s.error;throw new Error(p)}return s},ft=()=>{const[e,r]=a.useState(""),[n,s]=a.useState(!1),[p,h]=a.useState(""),{setRunningProjectId:u}=B(o=>o),{setSelectedEpisodeId:i,setSelectedEpisodeLink:d}=F(o=>o),l=o=>{const{value:c}=o.target;r(c),s(c!==""&&!Q(c))},x=async()=>{if(Q(e))try{const o=await ut({source:e});o.data.project_id&&u(o.data.project_id),o.data.ref_id&&(i(o.data.ref_id),d(e))}catch(o){let c=X;if((o==null?void 0:o.status)===400){const w=await o.json();c=w.errorCode||(w==null?void 0:w.status)||X,w.data.ref_id&&(i(w.data.ref_id),d(e))}else o instanceof Error&&(c=o.message);h(String(c))}};return t.jsxs(ht,{children:[t.jsx(xt,{children:"Ideas have shapes"}),t.jsxs(gt,{children:[t.jsx(mt,{error:n,onChange:l,onKeyDown:o=>o.key==="Enter"&&x(),placeholder:"Paste podcast or video link",value:e}),t.jsx(yt,{error:n,onClick:n?void 0:x,children:t.jsx(Qe,{})})]}),p&&t.jsx("div",{children:p})]})},ht=y(b)`
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
`,xt=y(b)`
  color: ${v.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,mt=y.input`
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
`,gt=y.div`
  position: relative;
  width: 450px;
  display: flex;
  align-items: center;
`,yt=y.div`
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
`,se=a.memo(({type:e,name:r,left:n})=>{var d,l;const[s]=ge(x=>[x.normalizedSchemasByType]),p=(d=s[e])==null?void 0:d.primary_color,h=(l=s[e])==null?void 0:l.icon,i={iconStart:(h?`svg-icons/${h}.svg`:null)??"thing_badge.svg",color:p??v.THING};return t.jsx(Ct,{style:{left:`${n}%`},children:t.jsx(je,{content:`${r||e}`,children:t.jsx(wt,{...i,label:e})})})});se.displayName="Marker";const wt=({iconStart:e,color:r,label:n})=>t.jsx(jt,{color:r,children:t.jsx("img",{alt:n,className:"badge__img",src:e})}),jt=y(b).attrs({direction:"row"})`
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
`,Ct=y.div`
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
`,bt=({duration:e,markers:r,handleProgressChange:n,playingTIme:s})=>t.jsxs(vt,{children:[t.jsx(St,{max:e,onChange:n,value:s}),r.map(p=>{var d;const h=((p==null?void 0:p.start)||0)/e*100,u=(p==null?void 0:p.node_type)||"",i=((d=p==null?void 0:p.properties)==null?void 0:d.name)||"";return t.jsx(se,{left:h,name:i,type:u},p.ref_id)})]}),vt=y(b)`
  position: relative;
  flex: 1 1 100%;
`,St=y(Pe)`
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
`,_t=({markers:e})=>{const{isPlaying:r,setIsPlaying:n,playingTime:s,playingNode:p,duration:h,playerRef:u}=$(l=>l),i=p,d=a.useCallback((l,x)=>{const o=Array.isArray(x)?x[0]:x;u&&u.seekTo(o,"seconds")},[u]);return i?t.jsxs(Et,{children:[t.jsxs(Tt,{children:[t.jsx(Ce,{}),t.jsx(kt,{"data-testid":"play-pause-button",onClick:l=>{n(!r),l.stopPropagation()},size:"small",children:r?t.jsx(be,{"data-testid":"pause-icon"}):t.jsx(ve,{"data-testid":"play-icon"})}),t.jsx(Se,{})]}),t.jsx(bt,{duration:h,handleProgressChange:d,markers:e,playingTIme:s})]}):null},Et=y(b).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${v.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,Tt=y(b).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,kt=y(_e)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,zt=({sourcePosition:e,targetPosition:r,color:n="white",arrowSize:s=1})=>{const p=a.useMemo(()=>{const h=new z(e.x,e.y,e.z),u=new z(r.x,r.y,r.z),i=new z().subVectors(u,h).normalize(),d=new z().copy(i).multiplyScalar(-s).applyAxisAngle(new z(0,0,1),Math.PI/6),l=new z().copy(i).multiplyScalar(-s).applyAxisAngle(new z(0,0,1),-Math.PI/6);return[h,u,u.clone(),u.clone().add(d),u.clone(),u.clone().add(l)]},[e,r,s]);return t.jsxs("line",{children:[t.jsx("bufferGeometry",{children:t.jsx("bufferAttribute",{array:new Float32Array(p.flatMap(h=>[h.x,h.y,h.z])),attach:"attributes-position",count:p.length,itemSize:3})}),t.jsx("lineBasicMaterial",{color:n})]})},Rt=(e,r,n)=>{const s=new Ae;return s.moveTo(-e/2+n,-r/2),s.lineTo(e/2-n,-r/2),s.quadraticCurveTo(e/2,-r/2,e/2,-r/2+n),s.lineTo(e/2,r/2-n),s.quadraticCurveTo(e/2,r/2,e/2-n,r/2),s.lineTo(-e/2+n,r/2),s.quadraticCurveTo(-e/2,r/2,-e/2,r/2-n),s.lineTo(-e/2,-r/2+n),s.quadraticCurveTo(-e/2,-r/2,-e/2+n,-r/2),s},Mt=({width:e,height:r,radius:n,color:s})=>{const p=Rt(e,r,n);return t.jsxs("mesh",{children:[t.jsx("shapeGeometry",{args:[p]}),t.jsx("meshBasicMaterial",{color:s,opacity:.9,transparent:!0})]})},Pt=({name:e,url:r,type:n})=>t.jsxs(It,{children:[r&&t.jsx("img",{alt:"",className:"image",src:r}),t.jsx("div",{className:"title",children:e}),t.jsx("div",{className:"badge",children:t.jsx(Ee,{type:n})}),t.jsx("div",{className:"action-btn",children:t.jsx(Te,{})})]}),It=y(b)`
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
`,G=a.memo(({width:e,height:r,position:n,url:s,onButtonClick:p,name:h,type:u,color:i,zoom:d})=>t.jsxs("group",{position:n,children:[t.jsx(Mt,{color:i,height:r,radius:1.5,width:e}),!1,t.jsx(He,{position:[-e/2,r/2,0],children:t.jsx(b,{onClick:()=>p(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${e*d}px`,height:`${r*d}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:t.jsx(Pt,{name:`${h}`,type:u||"",url:s})})})]}));G.displayName="Node";const ee=144/10,Z=84/10,$t=()=>{const e=M(),{dataInitial:r}=B(i=>i),{camera:n,viewport:s}=e,[p,h]=a.useState(n.zoom);a.useEffect(()=>{const i=n,d=l=>{l.preventDefault(),l.ctrlKey?(i.zoom+=l.deltaY*-.1,i.zoom=Math.max(2,Math.min(i.zoom,20)),h(i.zoom)):i.position.x+=l.deltaX*.1,i.updateProjectionMatrix()};return window.addEventListener("wheel",d,{passive:!1}),()=>{window.removeEventListener("wheel",d)}},[n]);const u=a.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const i=r.links.filter(o=>{var c;return(c=o==null?void 0:o.properties)==null?void 0:c.start}).map(o=>{var c;return{source:o.source,target:o.target,start:(c=o.properties)==null?void 0:c.start}}),d=r.nodes.filter(o=>r.links.some(c=>c.source===o.ref_id||c.target===o.ref_id)).map(o=>{const c=i.find(m=>o.ref_id===m.source||o.ref_id===m.target),w=((c==null?void 0:c.start)||0)*(s.width/10);return{...o,x:w,y:0,z:0,start:(c==null?void 0:c.start)||0}}).filter(o=>o.node_type!=="Clip"&&o.node_type!=="Episode"&&o.node_type!=="Show"),l=d.reduce((o,c)=>{const w=r.nodes.filter(S=>r.links.some(f=>S.node_type!=="Episode"&&S.node_type!=="Clip"&&(f.source===c.ref_id&&f.target===S.ref_id||f.target===c.ref_id&&f.source===S.ref_id))).map((S,f)=>{const{x:m}=c,g=(Math.floor(f/2)+1)*Z*2*(f%2===0?1:-1);return{...S,x:m,y:g,z:0}});return o[c.ref_id]=w,o},{}),x=Object.entries(l).flatMap(([o,c])=>{const w=[o,...c.map(f=>f.ref_id)];return r.links.filter(f=>w.includes(f.source)&&w.includes(f.target)).map(f=>{const m=d.find(j=>j.ref_id===f.source)||c.find(j=>j.ref_id===f.source),g=d.find(j=>j.ref_id===f.target)||c.find(j=>j.ref_id===f.target);return{...f,sourcePosition:m?{x:m.x,y:m.y,z:m.z}:null,targetPosition:g?{x:g.x,y:g.y,z:g.z}:null}})});return{nodes:d,edges:x,relatedNodes:l}},[r,s.width]);return t.jsxs(t.Fragment,{children:[u.nodes.map(i=>{var d,l;return t.jsxs(a.Fragment,{children:[t.jsx(G,{color:"#353A46",height:Z,name:((d=i==null?void 0:i.properties)==null?void 0:d.name)||"",onButtonClick:console.log,position:[i.x,i.y,i.z],type:i.node_type,url:((l=i==null?void 0:i.properties)==null?void 0:l.image_url)||"logo.png",width:ee,zoom:p}),(u.relatedNodes[i.ref_id]||[]).map(x=>{var o,c;return t.jsx(G,{color:"#353A46",height:Z,name:((o=x==null?void 0:x.properties)==null?void 0:o.name)||"",onButtonClick:console.log,position:[x.x,x.y,x.z],type:x.node_type,url:((c=x==null?void 0:x.properties)==null?void 0:c.image_url)||"logo.png",width:ee,zoom:p},`${x.ref_id}-${i.ref_id}`)})]},i.ref_id)}),u.edges.map((i,d)=>{if(!i.sourcePosition||!i.targetPosition)return null;const{sourcePosition:l,targetPosition:x}=i;return t.jsx(a.Fragment,{children:t.jsx(zt,{sourcePosition:l,targetPosition:x})},`edge-${d}`)})]})},Lt=()=>{const{camera:e,viewport:r}=M(),n=$(s=>s.playerRef);return re(()=>{if(n){const s=n.getCurrentTime();e.position.x=s*r.width/10}}),null},oe=a.memo(()=>(console.log("rerender"),t.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:t.jsxs(Be,{orthographic:!0,children:[t.jsx(Lt,{}),t.jsx(Ve,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),t.jsx($t,{})]})})));oe.displayName="Scene";const Ht=({mediaUrl:e})=>{const r=a.useRef(null),[n,s]=a.useState(!1),[p,h]=a.useState(!1),[u,i]=a.useState(!1),[d,l]=a.useState("ready"),[x,o]=a.useState(!1),[c,w]=a.useState(""),[S,f]=a.useState(!1),m=ke();ze(C=>C);const{dataInitial:g}=B(C=>C);a.useEffect(()=>{const C="00:00:00-00:12:00",_=C==null?void 0:C.split("-")[0];w(_)},[m]);const{isPlaying:j,playingTime:P,setIsPlaying:D,setPlayingTime:R,setDuration:N,playingNode:I,volume:ne,setHasError:ie,resetPlayer:q,isSeeking:W,setIsSeeking:U,setPlayerRef:O,playerRef:E}=$(C=>C);a.useEffect(()=>()=>q(),[q]),a.useEffect(()=>{I&&!x&&(R(0),N(0),o(!1),f(!1))},[I,R,N,o,x]),a.useEffect(()=>{W&&E&&(E.seekTo(P,"seconds"),U(!1))},[P,W,U,E]),a.useEffect(()=>{if(x&&c&&E&&!S){const C=K(c);E.seekTo(C,"seconds"),R(C),f(!0)}},[x,c,R,S,E]);const Y=()=>{D(!j)},ae=()=>{D(!0)},ce=()=>{D(!1)},le=()=>{ie(!0),l("error")};a.useMemo(()=>((g==null?void 0:g.links.filter(T=>{var k;return(k=T==null?void 0:T.properties)==null?void 0:k.start}))||[]).slice().sort((T,k)=>{var H,A;return((H=T==null?void 0:T.properties)==null?void 0:H.start)-((A=k==null?void 0:k.properties)==null?void 0:A.start)}),[g]);const pe=C=>{if(!W){const _=C.playedSeconds;R(_);return}},de=()=>{if(E){l("ready");const C=E.getDuration();if(N(C),c&&!S){const _=K(c);E.seekTo(_,"seconds"),R(_),f(!0)}}},L=()=>{h(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",L)};a.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",L)}),a.useEffect(()=>{const C=_=>{if(p){const T=window.screen.height,k=_.clientY,H=T-k;i(H<=50)}};return document.addEventListener("mousemove",C),()=>{document.removeEventListener("mousemove",C)}},[p,u]),a.useEffect(()=>{const C=_=>{p&&_.key==="Escape"?(_.preventDefault(),_.stopPropagation()):n&&_.key===" "&&(_.preventDefault(),Y())};return document.addEventListener("fullscreenchange",L),document.addEventListener("keydown",C),()=>{document.removeEventListener("fullscreenchange",L),document.removeEventListener("keydown",C)}});const ue=()=>{Y()},fe=a.useCallback(C=>{!E&&C&&O(C)},[O,E]);return e?t.jsxs(Bt,{ref:r,onBlur:()=>s(!1),onFocus:()=>s(!0),tabIndex:0,children:[t.jsx(Ft,{isFullScreen:p,children:t.jsx(Re,{size:120,src:(I==null?void 0:I.image_url)||"",type:"clip"})}),t.jsx(Nt,{isFullScreen:p,onClick:ue,children:t.jsx(Ie,{ref:fe,controls:!0,height:p?window.screen.height:"219px",onBuffer:()=>l("buffering"),onBufferEnd:()=>l("ready"),onError:le,onPause:ce,onPlay:ae,onProgress:pe,onReady:de,playing:j,url:e||"",volume:ne,width:"100%"})}),d==="error"?t.jsx(Dt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Bt=y(b)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Ft=y(b)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Dt=y(b)`
  height: 60px;
  padding: 12px 16px;
  color: ${v.primaryRed};
`,Nt=y.div`
  margin: ${e=>e.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Wt=a.memo(Ht),At=()=>{const{selectedEpisodeId:e}=F(h=>h),{playingTime:r,duration:n}=$(h=>h),[s,p]=a.useState([]);return a.useEffect(()=>{e&&(async()=>{try{const u=await te(e,0,50,{nodeType:["Clip"],useSubGraph:!1});u!=null&&u.nodes&&p(u.nodes)}catch(u){console.error(u)}})()},[e]),t.jsxs(Zt,{children:[t.jsx(b,{className:"heading",children:"Transcript"}),s.map(h=>{var l,x,o;const u=(l=h==null?void 0:h.properties)==null?void 0:l.timestamp,[i,d]=u?u.split("-").map(Number):[0,n];return i<=r*1e3&&r*1e3<d?t.jsx(Gt,{direction:"row",children:((x=h==null?void 0:h.properties)==null?void 0:x.text)&&t.jsx("span",{children:(o=h==null?void 0:h.properties)==null?void 0:o.text})},h.ref_id):null})]})},Zt=y(b)`
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
`,Vt=()=>{var n,s;const{selectedEpisodeLink:e,selectedEpisode:r}=F(p=>p);return t.jsxs(qt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsxs(Yt,{children:[(r==null?void 0:r.name)&&t.jsx(Ot,{children:r==null?void 0:r.name}),((n=r==null?void 0:r.properties)==null?void 0:n.text)&&t.jsx(Ut,{children:(s=r==null?void 0:r.properties)==null?void 0:s.text}),e&&t.jsx(Wt,{mediaUrl:e})]}),t.jsx(At,{})]})},qt=y(b)(({theme:e})=>({position:"relative",display:"flex",padding:"20px",background:"transparent",width:"100%",[e.breakpoints.up("sm")]:{width:$e}})),Ut=y(V)`
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
`,Yt=y(b)(({theme:e})=>({width:"100%",margin:"16px auto",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),dr=()=>{const{addNewNode:e,isFetching:r,runningProjectId:n,dataInitial:s}=B(f=>f),[p,h]=a.useState(!0),{selectedEpisodeId:u,setSelectedEpisode:i}=F(f=>f),d=Me(),l=a.useRef(null),x=a.useRef(null),{setPlayingNode:o}=$(f=>f),c=a.useCallback(f=>{r||(l.current||(l.current={nodes:[],edges:[]}),f.edges&&l.current.edges.push(...f.edges),f.nodes&&l.current.nodes.push(...f.nodes),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{if(l.current){const{nodes:m,edges:g}=l.current,j={nodes:m,edges:g};l.current={nodes:[],edges:[]},e(j)}},3e3))},[e,r]),w=a.useCallback(f=>{console.log(f,"uuuuuupdate")},[]);a.useEffect(()=>{u&&(async()=>{try{const m=await te(u,0,50);m&&c(m)}catch(m){console.error(m)}})()},[u,c]),a.useEffect(()=>{u&&(async()=>{try{const m=await ye(u);m&&(o(m),i(m))}catch(m){console.error(m)}})()},[u,o,i]),a.useEffect(()=>(d&&(d.connect(),d.on("connect_error",f=>{console.error("Socket connection error:",f)}),d.on("new_node_created",c),d.on("node_updated",w)),()=>{d&&d.off()}),[d,w,c]),a.useEffect(()=>{if(n)try{d==null||d.emit("update_project_id",{id:n})}catch(f){console.error(f)}},[n,d]);const S=a.useMemo(()=>{if(s){const f=s.links.filter(g=>{var j;return(j=g==null?void 0:g.properties)==null?void 0:j.start}).map(g=>{var j;return{source:g.source,target:g.target,start:(j=g.properties)==null?void 0:j.start}});return s.nodes.filter(g=>s.links.some(j=>j.source===g.ref_id||j.target===g.ref_id)).map(g=>{const j=f.find(P=>g.ref_id===P.source||g.ref_id===P.target);return{...g,start:(j==null?void 0:j.start)||0}}).filter(g=>g&&g.node_type!=="Clip"&&g.node_type!=="Episode"&&g.node_type!=="Show")}return[]},[s]);return t.jsx(b,{direction:"row",style:{height:"100%"},children:u?t.jsxs(t.Fragment,{children:[t.jsxs(b,{children:[t.jsx(b,{onClick:()=>h(!p),children:t.jsx(Oe,{})}),t.jsx(Vt,{})]}),t.jsxs(b,{basis:"100%",grow:1,p:16,shrink:1,children:[t.jsx(b,{basis:"100%",grow:1,shrink:1,children:p?t.jsx(oe,{}):t.jsx(we,{})}),t.jsx(_t,{markers:S})]})]}):t.jsx(ft,{})})};export{dr as MindSet};
