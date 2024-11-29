import{r as d,y as ee,c as te,j as e,s as y,a as b,F as C,T as W,u as $,N as L,z as re,d as se,A as oe,D as G,E as ne}from"./index-349527c1.js";import{Universe as ie}from"./index-c9e974da.js";import{T as ae,b as R,c as ce,d as le,e as pe,f as de,g as ue,h as xe,i as fe,a as he}from"./index-35e3f555.js";import{S as me,R as ge,M as ye}from"./index-c6c46479.js";import{u as S,a as V,m as we,T as je,f as Ce,H as be,C as ve}from"./index-6f0144fe.js";import{W as _e,L as D,H as Te,D as Ee,F as Se,V as T,S as Pe}from"./three.module-9c942ca6.js";import"./TextareaAutosize-9ae0795b.js";import"./index-33b49a39.js";import"./ClipLoader-0c054498.js";import"./Skeleton-be9b32a7.js";import"./Stack-e10efaa7.js";import"./isPlainObject-38822200.js";import"./Typography-41cd8fb1.js";import"./createSvgIcon-857f94eb.js";import"./index-71af0c0c.js";function ze(t,s,a){const{gl:n,size:r,viewport:l}=S(),c=typeof t=="number"?t:r.width*l.dpr,p=typeof s=="number"?s:r.height*l.dpr,i=(typeof t=="number"?a:t)||{},{samples:o=0,depth:m,...h}=i,u=d.useMemo(()=>{let g;return g=new _e(c,p,{minFilter:D,magFilter:D,encoding:n.outputEncoding,type:Te,...h}),m&&(g.depthTexture=new Ee(c,p,Se)),g.samples=o,g},[]);return d.useLayoutEffect(()=>{u.setSize(c,p),o&&(u.samples=o)},[o,u,c,p]),d.useEffect(()=>()=>u.dispose(),[]),u}const Re=t=>typeof t=="function",$e=d.forwardRef(({envMap:t,resolution:s=256,frames:a=1/0,children:n,makeDefault:r,...l},c)=>{const p=S(({set:x})=>x),i=S(({camera:x})=>x),o=S(({size:x})=>x),m=d.useRef(null),h=d.useRef(null),u=ze(s);d.useLayoutEffect(()=>{l.manual||m.current.updateProjectionMatrix()},[o,l]),d.useLayoutEffect(()=>{m.current.updateProjectionMatrix()}),d.useLayoutEffect(()=>{if(r){const x=i;return p(()=>({camera:m.current})),()=>p(()=>({camera:x}))}},[m,r,p]);let g=0,w=null;const f=Re(n);return V(x=>{f&&(a===1/0||g<a)&&(h.current.visible=!1,x.gl.setRenderTarget(u),w=x.scene.background,t&&(x.scene.background=t),x.gl.render(x.scene,m.current),x.scene.background=w,x.gl.setRenderTarget(null),h.current.visible=!0,g++)}),d.createElement(d.Fragment,null,d.createElement("orthographicCamera",ee({left:o.width/-2,right:o.width/2,top:o.height/2,bottom:o.height/-2,ref:we([m,c])},l),!f&&n),d.createElement("group",{ref:h},f&&n(u.texture)))}),Me={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},M=te(t=>({...Me,setSelectedEpisodeId:s=>t({selectedEpisodeId:s}),setSelectedEpisodeLink:s=>t({selectedEpisodeLink:s}),setSelectedEpisode:s=>t({selectedEpisode:s})})),Ie=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),ke=()=>e.jsxs(We,{children:[e.jsx(Fe,{children:e.jsx(He,{children:e.jsx(Ie,{})})}),e.jsx(Be,{children:"Graph Mindset"})]}),We=y(C).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Fe=y(C)`
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
`,Be=y(W)`
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
`,Ae=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Le=/^(https?:\/\/)/,De=/(www\.)?/,Ze=/[\w-]+(\.[\w-]+)*/,Ne=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,Ge=/(\/[^\s?]*)?/,Ve=/(\?[^\s]*)?/,Oe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,qe=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,Ue=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,Xe=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Ye=new RegExp(`${Le.source}${De.source}${Ze.source}${Ne.source}?${Ge.source}${Ve.source}$`,"i"),Je=t=>{try{if(!(t==null?void 0:t.match(Ye)))return!1;const n=new URL(t).hostname;return n!=null&&n.startsWith("www.")?((n==null?void 0:n.match(/\./g))||[]).length>=2:((n==null?void 0:n.match(/\./g))||[]).length>=1}catch{return!1}},Z=t=>Je(t)?[Oe,qe,Ue,Xe].some(a=>a.test(t)):!1,Ke=async t=>{const s="add_node",a={};a.media_url=t.source,a.content_type="audio_video";const n=await re.post(`/${s}`,JSON.stringify(a));if(n.error){const{message:r}=n.error;throw new Error(r)}return n},Qe=()=>{const[t,s]=d.useState(""),[a,n]=d.useState(!1),[r,l]=d.useState(""),{setRunningProjectId:c}=$(h=>h),{setSelectedEpisodeId:p,setSelectedEpisodeLink:i}=M(h=>h),o=h=>{const{value:u}=h.target;s(u),n(u!==""&&!Z(u))},m=async()=>{if(Z(t))try{const h=await Ke({source:t});h.data.project_id&&c(h.data.project_id),h.data.ref_id&&(p(h.data.ref_id),i(t))}catch(h){let u=L;if((h==null?void 0:h.status)===400){const g=await h.json();u=g.errorCode||(g==null?void 0:g.status)||L,g.data.ref_id&&(p(g.data.ref_id),i(t))}else h instanceof Error&&(u=h.message);l(String(u))}};return e.jsxs(et,{children:[e.jsx(tt,{children:"Ideas have shapes"}),e.jsxs(st,{children:[e.jsx(rt,{error:a,onChange:o,onKeyDown:h=>h.key==="Enter"&&m(),placeholder:"Paste podcast or video link",value:t}),e.jsx(ot,{error:a,onClick:a?void 0:m,children:e.jsx(Ae,{})})]}),r&&e.jsx("div",{children:r})]})},et=y(C)`
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
`,tt=y(C)`
  color: ${b.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,rt=y.input`
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
`,st=y.div`
  position: relative;
  width: 450px;
  display: flex;
  align-items: center;
`,ot=y.div`
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
`,O=d.memo(({type:t,name:s,left:a,img:n})=>{var o,m;const[r]=se(h=>[h.normalizedSchemasByType]),l=(o=r[t])==null?void 0:o.primary_color,c=(m=r[t])==null?void 0:m.icon,p=c?`svg-icons/${c}.svg`:"thing_badge.svg",i={iconStart:n??p,color:l??b.THING};return e.jsx(at,{style:{left:`${a}%`},children:e.jsx(ae,{content:`${s||t}`,children:e.jsx(nt,{...i,label:t})})})});O.displayName="Marker";const nt=({iconStart:t,color:s,label:a})=>e.jsx(it,{color:s,children:e.jsx("img",{alt:a,className:"badge__img",src:t})}),it=y(C).attrs({direction:"row"})`
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
`,at=y.div`
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
`,ct=({duration:t,markers:s,handleProgressChange:a,playingTIme:n})=>e.jsxs(lt,{children:[e.jsx(pt,{max:t,onChange:a,value:n}),s.map(r=>{var o,m;const l=((r==null?void 0:r.start)||0)/t*100,c=(r==null?void 0:r.node_type)||"",p=((o=r==null?void 0:r.properties)==null?void 0:o.name)||"",i=((m=r==null?void 0:r.properties)==null?void 0:m.image_url)||"";return e.jsx(O,{img:i,left:l,name:p,type:c},r.ref_id)})]}),lt=y(C)`
  position: relative;
  flex: 1 1 100%;
`,pt=y(me)`
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
`,dt=({markers:t})=>{const{isPlaying:s,setIsPlaying:a,playingNode:n,playerRef:r}=R(u=>u),[l,c]=d.useState(0),p=n,i=d.useCallback((u,g)=>{const w=Array.isArray(g)?g[0]:g;r&&r.seekTo(w,"seconds")},[r]);d.useEffect(()=>{const u=setInterval(()=>{if(r&&c){const g=r.getCurrentTime();c(g)}},100);return()=>clearInterval(u)},[r,c]);const o=()=>{if(r){const u=r.getCurrentTime()-15;r.seekTo(u,"seconds")}},m=()=>{if(r){const u=r.getCurrentTime()+15;r.seekTo(u,"seconds")}},h=(r==null?void 0:r.getDuration())||0;return p?e.jsxs(ut,{children:[e.jsxs(xt,{children:[e.jsx(ht,{onClick:o,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(ft,{"data-testid":"play-pause-button",onClick:u=>{a(!s),u.stopPropagation()},size:"small",children:s?e.jsx(ce,{"data-testid":"pause-icon"}):e.jsx(le,{"data-testid":"play-icon"})}),e.jsx(mt,{onClick:m,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]}),e.jsx(ct,{duration:h,handleProgressChange:i,markers:t,playingTIme:l})]}):null},ut=y(C).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${b.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,xt=y(C).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,ft=y(pe)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,ht=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,mt=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,gt=({sourcePosition:t,targetPosition:s,color:a="white",arrowSize:n=1,label:r="label"})=>{const{points:l,textPosition:c}=d.useMemo(()=>{const p=new T(t.x,t.y,t.z),i=new T(s.x,s.y,s.z),o=new T().subVectors(i,p).normalize(),m=new T().addVectors(p,i).multiplyScalar(.5),h=new T().copy(o).multiplyScalar(-n).applyAxisAngle(new T(0,0,1),Math.PI/6),u=new T().copy(o).multiplyScalar(-n).applyAxisAngle(new T(0,0,1),-Math.PI/6);return{points:[p,i,i.clone(),i.clone().add(h),i.clone(),i.clone().add(u)],textPosition:m}},[t,s,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(l.flatMap(p=>[p.x,p.y,p.z])),attach:"attributes-position",count:l.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:a})]}),r&&e.jsx(je,{anchorX:"center",anchorY:"middle",color:a,...Ce,position:c,children:r})]})},yt=(t,s,a)=>{const n=new Pe;return n.moveTo(-t/2+a,-s/2),n.lineTo(t/2-a,-s/2),n.quadraticCurveTo(t/2,-s/2,t/2,-s/2+a),n.lineTo(t/2,s/2-a),n.quadraticCurveTo(t/2,s/2,t/2-a,s/2),n.lineTo(-t/2+a,s/2),n.quadraticCurveTo(-t/2,s/2,-t/2,s/2-a),n.lineTo(-t/2,-s/2+a),n.quadraticCurveTo(-t/2,-s/2,-t/2+a,-s/2),n},wt=({width:t,height:s,radius:a,color:n})=>{const r=yt(t,s,a);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[r]}),e.jsx("meshBasicMaterial",{color:n,opacity:.9,transparent:!0})]})},jt=({name:t,url:s,type:a})=>e.jsxs(Ct,{children:[s&&e.jsx("img",{alt:"",className:"image",src:s}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(de,{type:a})}),e.jsx("div",{className:"action-btn",children:e.jsx(ue,{})})]}),Ct=y(C)`
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
`,k=d.memo(({width:t,height:s,position:a,url:n,onButtonClick:r,name:l,type:c,color:p})=>{const{camera:i}=S();return e.jsxs("group",{position:a,children:[e.jsx(wt,{color:p,height:s,radius:1.5,width:t}),!1,e.jsx(be,{position:[-t/2,s/2,0],children:e.jsx(C,{onClick:()=>r(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*i.zoom}px`,height:`${s*i.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:e.jsx(jt,{name:`${l}`,type:c||"",url:n})})})]})});k.displayName="Node";const N=144/10,I=84/10,bt=()=>{const t=S(),{dataInitial:s}=$(r=>r),{viewport:a}=t,n=d.useMemo(()=>{if(!s)return{nodes:[],edges:[],relatedNodes:{}};const r=s.links.filter(i=>{var o;return(o=i==null?void 0:i.properties)==null?void 0:o.start}).map(i=>{var o;return{source:i.source,target:i.target,start:(o=i.properties)==null?void 0:o.start}}),l=s.nodes.filter(i=>s.links.some(o=>o.source===i.ref_id||o.target===i.ref_id)).map(i=>{const o=r.find(g=>i.ref_id===g.source||i.ref_id===g.target),m=((o==null?void 0:o.start)||0)*(a.width/10);return{...i,x:m,y:0,z:0,start:(o==null?void 0:o.start)||0}}).filter(i=>i.node_type!=="Clip"&&i.node_type!=="Episode"&&i.node_type!=="Show"),c=l.reduce((i,o)=>{const m=s.links.filter(w=>{var f;return!((f=w==null?void 0:w.properties)!=null&&f.start)&&[w.target,w.source].includes(o.ref_id)}),u=s.nodes.filter(w=>w.node_type!=="Episode"&&w.node_type!=="Clip"&&w.ref_id!==o.ref_id&&m.some(f=>[f.source,f.target].includes(w.ref_id))).map((w,f)=>{const{x}=o,j=(Math.floor(f/2)+1)*I*2*(f%2===0?1:-1);return{...w,x,y:j,z:0}}),g=m.map(w=>{if(w.source===o.ref_id){const x=u.find(j=>j.ref_id===w.target);return{...w,sourcePositions:{x:o.x,y:o.y,z:o.z},targetPositions:{x:x==null?void 0:x.x,y:x==null?void 0:x.y,z:x==null?void 0:x.z}}}const f=u.find(x=>x.ref_id===w.source);return{...w,sourcePositions:{x:f==null?void 0:f.x,y:f==null?void 0:f.y,z:f==null?void 0:f.z},targetPositions:{x:o.x,y:o.y,z:o.z}}});return i[o.ref_id]={nodes:u,edges:g},i},{}),p=Object.values(c).flatMap(i=>i.edges).filter(i=>{var o;return(o=i==null?void 0:i.sourcePositions)==null?void 0:o.x});return{nodes:l,edges:p,relatedNodes:Object.fromEntries(Object.entries(c).map(([i,o])=>[i,o.nodes]))}},[s,a.width]);return e.jsxs(e.Fragment,{children:[n.nodes.map(r=>{var l,c;return e.jsxs(d.Fragment,{children:[e.jsx(k,{color:"#353A46",height:I,name:((l=r==null?void 0:r.properties)==null?void 0:l.name)||"",onButtonClick:console.log,position:[r.x,r.y,r.z],type:r.node_type,url:((c=r==null?void 0:r.properties)==null?void 0:c.image_url)||"logo.png",width:N}),(n.relatedNodes[r.ref_id]||[]).map(p=>{var i,o;return e.jsx(k,{color:"#353A46",height:I,name:((i=p==null?void 0:p.properties)==null?void 0:i.name)||"",onButtonClick:console.log,position:[p.x,p.y,p.z],type:p.node_type,url:((o=p==null?void 0:p.properties)==null?void 0:o.image_url)||"logo.png",width:N},`${p.ref_id}-${r.ref_id}`)})]},r.ref_id)}),n.edges.map((r,l)=>r!=null&&r.sourcePositions&&(r!=null&&r.targetPositions)?e.jsx(gt,{label:r.edge_type||"",sourcePosition:new T(r.sourcePositions.x,r.sourcePositions.y,r.sourcePositions.z),targetPosition:new T(r.targetPositions.x,r.targetPositions.y,r.targetPositions.z)},`edge-${l}`):null)]})},vt=()=>{const{camera:t,viewport:s}=S(),a=R(n=>n.playerRef);return V(()=>{if(a){const n=a.getCurrentTime();t.position.x=n*s.width/10}}),null},_t=()=>{const{camera:t,gl:s}=S();return d.useEffect(()=>{const a=t,n=l=>{l.preventDefault(),l.ctrlKey&&(a.zoom+=l.deltaY*-.1,a.zoom=Math.max(2,Math.min(a.zoom,20))),a.position.x+=l.deltaX*.1,a.updateProjectionMatrix()},r=s.domElement;return r.addEventListener("wheel",n,{passive:!1}),()=>{r.removeEventListener("wheel",n)}},[t,s]),null},q=d.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs(ve,{orthographic:!0,children:[e.jsx(vt,{}),e.jsx($e,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(bt,{}),e.jsx(_t,{})]})})));q.displayName="Scene";const Tt=({mediaUrl:t})=>{const s=d.useRef(null),[a,n]=d.useState("ready"),[r,l]=d.useState(!1);xe(_=>_);const{dataInitial:c}=$(_=>_),{isPlaying:p,playingTime:i,setIsPlaying:o,setPlayingTime:m,setDuration:h,playingNode:u,volume:g,setHasError:w,resetPlayer:f,isSeeking:x,setIsSeeking:j,setPlayerRef:v,playerRef:E}=R(_=>_);d.useEffect(()=>()=>f(),[f]),d.useEffect(()=>{u&&!r&&(m(0),h(0),l(!1))},[u,m,h,l,r]),d.useEffect(()=>{x&&E&&(E.seekTo(i,"seconds"),j(!1))},[i,x,j,E]);const F=()=>{o(!p)},U=()=>{o(!0)},X=()=>{o(!1)},Y=()=>{w(!0),n("error")};d.useMemo(()=>((c==null?void 0:c.links.filter(P=>{var z;return(z=P==null?void 0:P.properties)==null?void 0:z.start}))||[]).slice().sort((P,z)=>{var B,A;return((B=P==null?void 0:P.properties)==null?void 0:B.start)-((A=z==null?void 0:z.properties)==null?void 0:A.start)}),[c]),console.log(_=>{if(!x){const H=_.playedSeconds;m(H);return}});const J=()=>{E&&(n("ready"),F())},K=()=>{F()},Q=d.useCallback(_=>{!E&&_&&v(_)},[v,E]);return t?e.jsxs(Et,{ref:s,tabIndex:0,children:[e.jsx(St,{isFullScreen:!1,children:e.jsx(fe,{size:120,src:(u==null?void 0:u.image_url)||"",type:"clip"})}),e.jsx(zt,{isFullScreen:!1,onClick:K,children:e.jsx(ge,{ref:Q,controls:!0,height:"219px",onBuffer:()=>n("buffering"),onBufferEnd:()=>n("ready"),onError:Y,onPause:X,onPlay:U,onReady:J,playing:p,url:t||"",volume:g,width:"100%"})}),a==="error"?e.jsx(Pt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Et=y(C)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,St=y(C)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Pt=y(C)`
  height: 60px;
  padding: 12px 16px;
  color: ${b.primaryRed};
`,zt=y.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Rt=d.memo(Tt),$t=({transcriptString:t})=>{const[s,a]=d.useState(0),{playerRef:n}=R(c=>c),r=t.replace(/^["']|["']$/g,""),l=JSON.parse(r);return d.useEffect(()=>{const c=setInterval(()=>{if(n&&a){const p=n.getCurrentTime();a(p)}},100);return()=>clearInterval(c)},[n,a]),e.jsx(It,{children:l.map(c=>{const p=c.start.toFixed(2),i=c.end.toFixed(2);return e.jsxs(Mt,{children:[e.jsxs(kt,{children:[p,":",i]}),e.jsx(Wt,{children:c.text}),c.words.map(o=>{const m=o.start<s&&s<o.end;return e.jsx(Ft,{className:oe({active:m}),children:o.word},`${o.start}`)})]},c.id)})})},Mt=y.div`
  font-size: 14px;
  word-break: break-word;
`,It=y.div`
  width: 100%;
`,kt=y.span``,Wt=y.span``,Ft=y.span`
  margin: 0 2px;

  &.active {
    background: ${b.lightBlue300};
  }
`,Ht=()=>{const{selectedEpisodeId:t}=M(l=>l),{playingTime:s,duration:a}=R(l=>l),[n,r]=d.useState([]);return d.useEffect(()=>{t&&(async()=>{try{const c=await G(t,0,50,{nodeType:["Clip"],useSubGraph:!1});c!=null&&c.nodes&&r(c.nodes)}catch(c){console.error(c)}})()},[t]),e.jsxs(Bt,{children:[e.jsx(C,{className:"heading",children:"Transcript"}),n.map(l=>{var o,m,h,u,g,w;const c=(o=l==null?void 0:l.properties)==null?void 0:o.timestamp,[p,i]=c?c.split("-").map(Number):[0,a];return p<=s*1e3&&s*1e3<i?e.jsxs(At,{direction:"row",children:[!((m=l.properties)!=null&&m.transcript)&&((h=l==null?void 0:l.properties)==null?void 0:h.text)&&e.jsx("span",{children:(u=l==null?void 0:l.properties)==null?void 0:u.text}),((g=l.properties)==null?void 0:g.transcript)&&e.jsx($t,{transcriptString:(w=l.properties)==null?void 0:w.transcript})]},l.ref_id):null})]})},Bt=y(C)`
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
`,At=y(C)`
  flex-wrap: wrap;
  flex: 1 1 100%;
`,Lt=()=>{var a,n;const{selectedEpisodeLink:t,selectedEpisode:s}=M(r=>r);return e.jsxs(Dt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsxs(Gt,{children:[(s==null?void 0:s.name)&&e.jsx(Nt,{children:s==null?void 0:s.name}),((a=s==null?void 0:s.properties)==null?void 0:a.text)&&e.jsx(Zt,{children:(n=s==null?void 0:s.properties)==null?void 0:n.text}),t&&e.jsx(Rt,{mediaUrl:t})]}),e.jsx(Ht,{})]})},Dt=y(C)(({theme:t})=>({position:"relative",display:"flex",padding:"20px",background:"transparent",width:"100%",[t.breakpoints.up("sm")]:{width:ye}})),Zt=y(W)`
  font-size: 20px;
  font-weight: Bold;
  line-height: 24.2px;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
  font-weight: 500;
`,Nt=y(W)`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
`,Gt=y(C)(({theme:t})=>({width:"100%",margin:"16px auto",zIndex:29,[t.breakpoints.up("sm")]:{width:"390px"}})),ar=()=>{const{addNewNode:t,isFetching:s,runningProjectId:a,dataInitial:n}=$(f=>f),[r,l]=d.useState(!0),{selectedEpisodeId:c,setSelectedEpisode:p}=M(f=>f),i=he(),o=d.useRef(null),m=d.useRef(null),{setPlayingNode:h}=R(f=>f),u=d.useCallback(f=>{s||(o.current||(o.current={nodes:[],edges:[]}),f.edges&&o.current.edges.push(...f.edges),f.nodes&&o.current.nodes.push(...f.nodes),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{if(o.current){const{nodes:x,edges:j}=o.current,v={nodes:x,edges:j};o.current={nodes:[],edges:[]},t(v)}},3e3))},[t,s]),g=d.useCallback(f=>{console.log(f,"uuuuuupdate")},[]);d.useEffect(()=>{c&&(async()=>{try{const x=await G(c,0,50);x&&u(x)}catch(x){console.error(x)}})()},[c,u]),d.useEffect(()=>{c&&(async()=>{try{const x=await ne(c);x&&(h(x),p(x))}catch(x){console.error(x)}})()},[c,h,p]),d.useEffect(()=>(i&&(i.connect(),i.on("connect_error",f=>{console.error("Socket connection error:",f)}),i.on("new_node_created",u),i.on("node_updated",g)),()=>{i&&i.off()}),[i,g,u]),d.useEffect(()=>{if(a)try{i==null||i.emit("update_project_id",{id:a})}catch(f){console.error(f)}},[a,i]);const w=d.useMemo(()=>{if(n){const f=n.links.filter(j=>{var v;return(v=j==null?void 0:j.properties)==null?void 0:v.start}).map(j=>{var v;return{source:j.source,target:j.target,start:(v=j.properties)==null?void 0:v.start}});return n.nodes.filter(j=>n.links.some(v=>v.source===j.ref_id||v.target===j.ref_id)).map(j=>{const v=f.find(E=>j.ref_id===E.source||j.ref_id===E.target);return{...j,start:(v==null?void 0:v.start)||0}}).filter(j=>j&&j.node_type!=="Clip"&&j.node_type!=="Episode"&&j.node_type!=="Show")}return[]},[n]);return e.jsx(C,{direction:"row",style:{height:"100%"},children:c?e.jsxs(e.Fragment,{children:[e.jsxs(C,{children:[e.jsx(C,{onClick:()=>l(!r),children:e.jsx(ke,{})}),e.jsx(Lt,{})]}),e.jsxs(C,{basis:"100%",grow:1,p:16,shrink:1,children:[e.jsx(C,{basis:"100%",grow:1,shrink:1,children:r?e.jsx(q,{}):e.jsx(ie,{})}),e.jsx(dt,{markers:w})]})]}):e.jsx(Qe,{})})};export{ar as MindSet};
