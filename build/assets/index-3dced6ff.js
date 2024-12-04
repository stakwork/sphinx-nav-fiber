import{r as p,y as ne,c as ie,j as t,s as y,a as v,F as _,T as V,u as D,d as Q,z as ae,N as X,A as ce,D as le,E as ee,G as pe}from"./index-9ea548bf.js";import{Universe as ue}from"./index-7394c1ad.js";import{b as W,c as de,d as fe,e as he,f as xe,g as me,h as ge,i as ye,a as we}from"./index-21ff39de.js";import{S as je,R as Ce,s as be,M as ve}from"./index-b477bf67.js";import{u as k,a as te,m as _e,T as Te,f as Se,H as Ee,C as Re}from"./index-b4dfcadc.js";import{W as ze,L as Y,H as Pe,D as Ie,F as $e,V as $,S as Me}from"./three.module-9c942ca6.js";import"./TextareaAutosize-2fec526d.js";import"./index-e289ecf4.js";import"./ClipLoader-93320b77.js";import"./Skeleton-fdbac141.js";import"./Stack-aa75a6f3.js";import"./isPlainObject-d88c55e5.js";import"./Typography-22692b68.js";import"./createSvgIcon-fa820abb.js";import"./index-f76442fb.js";function ke(e,r,i){const{gl:o,size:s,viewport:u}=k(),d=typeof e=="number"?e:s.width*u.dpr,a=typeof r=="number"?r:s.height*u.dpr,c=(typeof e=="number"?i:e)||{},{samples:n=0,depth:m,...x}=c,l=p.useMemo(()=>{let f;return f=new ze(d,a,{minFilter:Y,magFilter:Y,encoding:o.outputEncoding,type:Pe,...x}),m&&(f.depthTexture=new Ie(d,a,$e)),f.samples=n,f},[]);return p.useLayoutEffect(()=>{l.setSize(d,a),n&&(l.samples=n)},[n,l,d,a]),p.useEffect(()=>()=>l.dispose(),[]),l}const He=e=>typeof e=="function",We=p.forwardRef(({envMap:e,resolution:r=256,frames:i=1/0,children:o,makeDefault:s,...u},d)=>{const a=k(({set:g})=>g),c=k(({camera:g})=>g),n=k(({size:g})=>g),m=p.useRef(null),x=p.useRef(null),l=ke(r);p.useLayoutEffect(()=>{u.manual||m.current.updateProjectionMatrix()},[n,u]),p.useLayoutEffect(()=>{m.current.updateProjectionMatrix()}),p.useLayoutEffect(()=>{if(s){const g=c;return a(()=>({camera:m.current})),()=>a(()=>({camera:g}))}},[m,s,a]);let f=0,h=null;const j=He(o);return te(g=>{j&&(i===1/0||f<i)&&(x.current.visible=!1,g.gl.setRenderTarget(l),h=g.scene.background,e&&(g.scene.background=e),g.gl.render(g.scene,m.current),g.scene.background=h,g.gl.setRenderTarget(null),x.current.visible=!0,f++)}),p.createElement(p.Fragment,null,p.createElement("orthographicCamera",ne({left:n.width/-2,right:n.width/2,top:n.height/2,bottom:n.height/-2,ref:_e([m,d])},u),!j&&o),p.createElement("group",{ref:x},j&&o(l.texture)))}),Ae={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},Z=ie(e=>({...Ae,setSelectedEpisodeId:r=>e({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>e({selectedEpisodeLink:r}),setSelectedEpisode:r=>e({selectedEpisode:r})})),Fe=e=>t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),t.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Le=()=>t.jsxs(Be,{children:[t.jsx(De,{children:t.jsx(Ze,{children:t.jsx(Fe,{})})}),t.jsx(Ge,{children:"Graph Mindset"})]}),Be=y(_).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,De=y(_)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ze=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${v.white};
  }
`,Ge=y(V)`
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
`,Ne=e=>t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Ve=/^(https?:\/\/)/,qe=/(www\.)?/,Oe=/[\w-]+(\.[\w-]+)*/,Ue=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,Xe=/(\/[^\s?]*)?/,Ye=/(\?[^\s]*)?/,Je=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,Ke=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,Qe=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,et=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,tt=new RegExp(`${Ve.source}${qe.source}${Oe.source}${Ue.source}?${Xe.source}${Ye.source}$`,"i"),rt=e=>{try{if(!(e==null?void 0:e.match(tt)))return!1;const o=new URL(e).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}catch{return!1}},J=e=>rt(e)?[Je,Ke,Qe,et].some(i=>i.test(e)):!1,st=async e=>{const r="add_node",i={};i.media_url=e.source,i.content_type="audio_video";const o=await ce.post(`/${r}`,JSON.stringify(i));if(o.error){const{message:s}=o.error;throw new Error(s)}return o},ot=()=>{const[e,r]=p.useState(""),[i,o]=p.useState(!1),[s,u]=p.useState(""),{setRunningProjectId:d}=D(l=>l),{setSelectedEpisodeId:a,setSelectedEpisodeLink:c}=Z(l=>l),{setSchemas:n}=Q(l=>l);p.useEffect(()=>{(async()=>{try{const f=await ae();n(f.schemas.filter(h=>!h.is_deleted))}catch(f){console.error("Error fetching schema:",f)}})()},[n]);const m=l=>{const{value:f}=l.target;r(f),o(f!==""&&!J(f))},x=async()=>{if(J(e))try{const l=await st({source:e});l.data.project_id&&d(l.data.project_id),l.data.ref_id&&(a(l.data.ref_id),c(e))}catch(l){let f=X;if((l==null?void 0:l.status)===400){const h=await l.json();f=h.errorCode||(h==null?void 0:h.status)||X,h.data.ref_id&&(a(h.data.ref_id),c(e))}else l instanceof Error&&(f=l.message);u(String(f))}};return t.jsxs(nt,{children:[t.jsx(it,{children:"Ideas have shapes"}),t.jsxs(ct,{children:[t.jsx(at,{error:i,onChange:m,onKeyDown:l=>l.key==="Enter"&&x(),placeholder:"Paste podcast or video link",value:e}),t.jsx(lt,{error:i,onClick:i?void 0:x,children:t.jsx(Ne,{})})]}),s&&t.jsx("div",{children:s})]})},nt=y(_)`
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
`,it=y(_)`
  color: ${v.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,at=y.input`
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
`,ct=y.div`
  position: relative;
  width: 450px;
  display: flex;
  align-items: center;
`,lt=y.div`
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
`,re=p.memo(({type:e,left:r,img:i})=>{var c,n;const[o]=Q(m=>[m.normalizedSchemasByType]),s=(c=o[e])==null?void 0:c.primary_color,u=(n=o[e])==null?void 0:n.icon,d=u?`svg-icons/${u}.svg`:"",a={iconStart:i||d,color:s??v.THING};return t.jsx(ut,{style:{left:`${r}%`},children:t.jsx(se,{...a,label:e})})});re.displayName="Marker";const se=p.memo(({iconStart:e,color:r,label:i})=>t.jsx(pt,{color:r,children:e&&t.jsx("img",{alt:i,className:"badge__img",src:e})}));se.displayName="Badge";const pt=y(_).attrs({direction:"row"})`
  cursor: pointer;
  background: ${({color:e})=>e};
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  .badge__img {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }
`,ut=y.div`
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
`,dt=({duration:e,markers:r,handleProgressChange:i,playingTIme:o})=>{const s=10/e*100;return t.jsxs(ft,{children:[t.jsx(ht,{max:e,onChange:i,value:o,width:s}),r.map(u=>{var n;const d=((u==null?void 0:u.start)||0)/e*100,a=(u==null?void 0:u.node_type)||"",c=((n=u==null?void 0:u.properties)==null?void 0:n.image_url)||"";return t.jsx(re,{img:c,left:d,type:a},u.ref_id)})]})},ft=y(_)`
  position: relative;
  flex: 1 1 100%;
`,ht=y(je)`
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
      width: ${({width:e})=>`${e}%`};
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
`,xt=({markers:e})=>{const{isPlaying:r,setIsPlaying:i,playingNode:o,playerRef:s}=W(l=>l),[u,d]=p.useState(0),a=o,c=p.useCallback((l,f)=>{const h=Array.isArray(f)?f[0]:f;s&&s.seekTo(h,"seconds")},[s]);p.useEffect(()=>{const l=setInterval(()=>{if(s&&d){const f=s.getCurrentTime();d(f)}},500);return()=>clearInterval(l)},[s,d]);const n=()=>{if(s){const l=s.getCurrentTime()-15;s.seekTo(l,"seconds")}},m=()=>{if(s){const l=s.getCurrentTime()+15;s.seekTo(l,"seconds")}},x=(s==null?void 0:s.getDuration())||0;return a?t.jsxs(mt,{children:[t.jsxs(gt,{children:[t.jsx(wt,{onClick:n,children:t.jsx("img",{alt:"",src:"RewindIcon.svg"})}),t.jsx(yt,{"data-testid":"play-pause-button",onClick:l=>{i(!r),l.stopPropagation()},size:"small",children:r?t.jsx(de,{"data-testid":"pause-icon"}):t.jsx(fe,{"data-testid":"play-icon"})}),t.jsx(jt,{onClick:m,children:t.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]}),t.jsx(dt,{duration:x,handleProgressChange:c,markers:e,playingTIme:u})]}):null},mt=y(_).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${v.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,gt=y(_).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,yt=y(he)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,wt=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,jt=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Ct=({sourcePosition:e,targetPosition:r,color:i="white",arrowSize:o=1,label:s="label"})=>{const{points:u,textPosition:d}=p.useMemo(()=>{const a=new $(e.x,e.y,e.z),c=new $(r.x,r.y,r.z),n=new $().subVectors(c,a).normalize(),m=new $().addVectors(a,c).multiplyScalar(.5),x=new $().copy(n).multiplyScalar(-o).applyAxisAngle(new $(0,0,1),Math.PI/6),l=new $().copy(n).multiplyScalar(-o).applyAxisAngle(new $(0,0,1),-Math.PI/6);return{points:[a,c,c.clone(),c.clone().add(x),c.clone(),c.clone().add(l)],textPosition:m}},[e,r,o]);return t.jsxs(t.Fragment,{children:[t.jsxs("line",{children:[t.jsx("bufferGeometry",{children:t.jsx("bufferAttribute",{array:new Float32Array(u.flatMap(a=>[a.x,a.y,a.z])),attach:"attributes-position",count:u.length,itemSize:3})}),t.jsx("lineBasicMaterial",{color:i})]}),s&&t.jsx(Te,{anchorX:"center",anchorY:"middle",color:i,...Se,position:d,children:s})]})},bt=(e,r,i)=>{const o=new Me;return o.moveTo(-e/2+i,-r/2),o.lineTo(e/2-i,-r/2),o.quadraticCurveTo(e/2,-r/2,e/2,-r/2+i),o.lineTo(e/2,r/2-i),o.quadraticCurveTo(e/2,r/2,e/2-i,r/2),o.lineTo(-e/2+i,r/2),o.quadraticCurveTo(-e/2,r/2,-e/2,r/2-i),o.lineTo(-e/2,-r/2+i),o.quadraticCurveTo(-e/2,-r/2,-e/2+i,-r/2),o},vt=({width:e,height:r,radius:i,color:o})=>{const s=bt(e,r,i);return t.jsxs("mesh",{children:[t.jsx("shapeGeometry",{args:[s]}),t.jsx("meshBasicMaterial",{color:o,opacity:.9,transparent:!0})]})},_t=({name:e,url:r,type:i})=>t.jsxs(Tt,{children:[r&&t.jsx("img",{alt:"",className:"image",src:r}),t.jsx("div",{className:"title",children:e}),t.jsx("div",{className:"badge",children:t.jsx(xe,{type:i})}),t.jsx("div",{className:"action-btn",children:t.jsx(me,{})})]}),Tt=y(_)`
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
`,N=p.memo(({width:e,height:r,position:i,url:o,onButtonClick:s,name:u,type:d,color:a})=>{const{camera:c}=k();return t.jsxs("group",{position:i,children:[t.jsx(vt,{color:a,height:r,radius:1.5,width:e}),!1,t.jsx(Ee,{position:[-e/2,r/2,0],children:t.jsx(_,{onClick:()=>s(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${e*c.zoom}px`,height:`${r*c.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:t.jsx(_t,{name:`${u}`,type:d||"",url:o})})})]})});N.displayName="Node";const K=144/10,G=84/10,St=()=>{const e=k(),{dataInitial:r}=D(s=>s),{viewport:i}=e,o=p.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const s=r.links.filter(c=>{var n;return(n=c==null?void 0:c.properties)==null?void 0:n.start}).map(c=>{var n;return{source:c.source,target:c.target,start:(n=c.properties)==null?void 0:n.start}}),u=r.nodes.filter(c=>r.links.some(n=>n.source===c.ref_id||n.target===c.ref_id)).map(c=>{const n=s.find(f=>c.ref_id===f.source||c.ref_id===f.target),m=((n==null?void 0:n.start)||0)*(i.width/10);return{...c,x:m,y:0,z:0,start:(n==null?void 0:n.start)||0}}).filter(c=>c.node_type!=="Clip"&&c.node_type!=="Episode"&&c.node_type!=="Show"),d=u.reduce((c,n)=>{const m=r.links.filter(h=>{var j;return!((j=h==null?void 0:h.properties)!=null&&j.start)&&[h.target,h.source].includes(n.ref_id)}),l=r.nodes.filter(h=>h.node_type!=="Episode"&&h.node_type!=="Clip"&&h.ref_id!==n.ref_id&&m.some(j=>[j.source,j.target].includes(h.ref_id))).map((h,j)=>{const{x:g}=n,z=(Math.floor(j/2)+1)*G*2*(j%2===0?1:-1);return{...h,x:g,y:z,z:0}}),f=m.map(h=>{if(h.source===n.ref_id){const g=l.find(z=>z.ref_id===h.target);return{...h,sourcePositions:{x:n.x,y:n.y,z:n.z},targetPositions:{x:g==null?void 0:g.x,y:g==null?void 0:g.y,z:g==null?void 0:g.z}}}const j=l.find(g=>g.ref_id===h.source);return{...h,sourcePositions:{x:j==null?void 0:j.x,y:j==null?void 0:j.y,z:j==null?void 0:j.z},targetPositions:{x:n.x,y:n.y,z:n.z}}});return c[n.ref_id]={nodes:l,edges:f},c},{}),a=Object.values(d).flatMap(c=>c.edges).filter(c=>{var n;return(n=c==null?void 0:c.sourcePositions)==null?void 0:n.x});return{nodes:u,edges:a,relatedNodes:Object.fromEntries(Object.entries(d).map(([c,n])=>[c,n.nodes]))}},[r,i.width]);return t.jsxs(t.Fragment,{children:[o.nodes.map(s=>{var u,d;return t.jsxs(p.Fragment,{children:[t.jsx(N,{color:"#353A46",height:G,name:((u=s==null?void 0:s.properties)==null?void 0:u.name)||"",onButtonClick:console.log,position:[s.x,s.y,s.z],type:s.node_type,url:((d=s==null?void 0:s.properties)==null?void 0:d.image_url)||"logo.png",width:K}),(o.relatedNodes[s.ref_id]||[]).map(a=>{var c,n;return t.jsx(N,{color:"#353A46",height:G,name:((c=a==null?void 0:a.properties)==null?void 0:c.name)||"",onButtonClick:console.log,position:[a.x,a.y,a.z],type:a.node_type,url:((n=a==null?void 0:a.properties)==null?void 0:n.image_url)||"logo.png",width:K},`${a.ref_id}-${s.ref_id}`)})]},s.ref_id)}),o.edges.map((s,u)=>s!=null&&s.sourcePositions&&(s!=null&&s.targetPositions)?t.jsx(Ct,{label:s.edge_type||"",sourcePosition:new $(s.sourcePositions.x,s.sourcePositions.y,s.sourcePositions.z),targetPosition:new $(s.targetPositions.x,s.targetPositions.y,s.targetPositions.z)},`edge-${u}`):null)]})},Et=()=>{const{camera:e,viewport:r}=k(),i=W(o=>o.playerRef);return te(()=>{if(i){const o=i.getCurrentTime();e.position.x=o*r.width/10}}),null},Rt=()=>{const{camera:e,gl:r}=k();return p.useEffect(()=>{const i=e,o=u=>{u.preventDefault(),u.ctrlKey&&(i.zoom+=u.deltaY*-.1,i.zoom=Math.max(2,Math.min(i.zoom,20))),i.position.x+=u.deltaX*.1,i.updateProjectionMatrix()},s=r.domElement;return s.addEventListener("wheel",o,{passive:!1}),()=>{s.removeEventListener("wheel",o)}},[e,r]),null},oe=p.memo(()=>(console.log("rerender"),t.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:t.jsxs(Re,{orthographic:!0,children:[t.jsx(Et,{}),t.jsx(We,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),t.jsx(St,{}),t.jsx(Rt,{})]})})));oe.displayName="Scene";const zt=(e,r)=>{let i=0,o=e.length-1;for(;i<=o;){const s=Math.floor((i+o)/2),u=e[s],{start:d,end:a}=u.properties;if(r>=d&&r<=a)return u;r<d?o=s-1:i=s+1}return null},Pt=({mediaUrl:e})=>{const r=p.useRef(null),[i,o]=p.useState("ready"),[s,u]=p.useState(!1),{setActiveEdge:d}=ge(E=>E),{dataInitial:a}=D(E=>E),{isPlaying:c,playingTime:n,setIsPlaying:m,setPlayingTime:x,setDuration:l,playingNode:f,volume:h,setHasError:j,resetPlayer:g,isSeeking:z,setIsSeeking:F,setPlayerRef:b,playerRef:C}=W(E=>E);p.useEffect(()=>()=>g(),[g]),p.useEffect(()=>{f&&!s&&(x(0),l(0),u(!1))},[f,x,l,u,s]),p.useEffect(()=>{z&&C&&(C.seekTo(n,"seconds"),F(!1))},[n,z,F,C]);const w=()=>{m(!c)},S=()=>{m(!0)},M=()=>{m(!1)},L=()=>{j(!0),o("error")},B=p.useMemo(()=>((a==null?void 0:a.links.filter(I=>{var A;return(A=I==null?void 0:I.properties)==null?void 0:A.start}))||[]).slice().sort((I,A)=>{var O,U;return((O=I==null?void 0:I.properties)==null?void 0:O.start)-((U=A==null?void 0:A.properties)==null?void 0:U.start)}),[a]),R=E=>{if(!z){const q=E.playedSeconds,I=zt(B,q);d(I||null)}},P=()=>{C&&o("ready")},T=()=>{w()},H=p.useCallback(E=>{!C&&E&&b(E)},[b,C]);return e?t.jsxs(It,{ref:r,tabIndex:0,children:[t.jsx($t,{isFullScreen:!1,children:t.jsx(ye,{size:120,src:(f==null?void 0:f.image_url)||"",type:"clip"})}),t.jsx(kt,{isFullScreen:!1,onClick:T,children:t.jsx(Ce,{ref:H,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:L,onPause:M,onPlay:S,onProgress:R,onReady:P,playing:c,url:e||"",volume:h,width:"100%"})}),i==="error"?t.jsx(Mt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},It=y(_)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,$t=y(_)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Mt=y(_)`
  height: 60px;
  padding: 12px 16px;
  color: ${v.primaryRed};
`,kt=y.div`
  margin: ${e=>e.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Ht=p.memo(Pt),Wt=({transcriptString:e})=>{const[r,i]=p.useState(0),[o,s]=p.useState(!1),{playerRef:u}=W(x=>x),d=e.replace(/^["']|["']$/g,""),a=JSON.parse(d),c=p.useRef(null),n=p.useRef(null),m=p.useRef(null);return p.useEffect(()=>{const x=setInterval(()=>{if(u&&i){const l=u.getCurrentTime();i(l)}},100);return()=>clearInterval(x)},[u,i]),p.useEffect(()=>{const x=()=>{s(!0),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{s(!1)},1e3)},l=n.current;return l&&l.addEventListener("scroll",x),()=>{l&&l.removeEventListener("scroll",x)}},[]),p.useEffect(()=>{!o&&c.current&&c.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,o]),t.jsx(Ft,{ref:n,children:a.map(x=>{const l=be(x.start),f=x.start<r&&r<x.end;return t.jsxs(At,{ref:f?c:null,className:le({active:f}),children:[t.jsx(Lt,{children:l}),t.jsx(Bt,{children:t.jsx("span",{children:x.text})})]},`${x.start}-${x.end}`)})})},At=y(_)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${v.AI_HIGHLIGHT};
  }
`,Ft=y.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Lt=y.span`
  background: ${v.lightBlue100};
  color: ${v.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Bt=y.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${v.AI_HIGHLIGHT};
  }
`,Dt=()=>{const{selectedEpisodeId:e}=Z(d=>d),{playerRef:r}=W(d=>d),[i,o]=p.useState(0),[s,u]=p.useState([]);return p.useEffect(()=>{e&&(async()=>{try{const a=await ee(e,0,50,{nodeType:["Clip"],useSubGraph:!1});a!=null&&a.nodes&&u(a.nodes)}catch(a){console.error(a)}})()},[e]),p.useEffect(()=>{const d=setInterval(()=>{if(r&&o){const a=r.getCurrentTime();o(a)}},100);return()=>clearInterval(d)},[r,o]),t.jsxs(Zt,{children:[t.jsx(_,{className:"heading",children:"Transcript"}),s.map(d=>{var m,x,l,f,h,j;const a=(m=d==null?void 0:d.properties)==null?void 0:m.timestamp,[c,n]=a?a.split("-").map(Number):[0,0];return c<=i*1e3&&i*1e3<n?t.jsxs(Gt,{direction:"row",children:[!((x=d.properties)!=null&&x.transcript)&&((l=d==null?void 0:d.properties)==null?void 0:l.text)&&t.jsx("span",{children:(f=d==null?void 0:d.properties)==null?void 0:f.text}),((h=d.properties)==null?void 0:h.transcript)&&t.jsx(Wt,{transcriptString:(j=d.properties)==null?void 0:j.transcript})]},d.ref_id):null})]})},Zt=y(_)`
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
  max-height: 50%;
`,Gt=y(_)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,Nt=()=>{var i,o;const{selectedEpisodeLink:e,selectedEpisode:r}=Z(s=>s);return t.jsxs(Vt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsxs(Ut,{children:[(r==null?void 0:r.name)&&t.jsx(Ot,{children:r==null?void 0:r.name}),((i=r==null?void 0:r.properties)==null?void 0:i.text)&&t.jsx(qt,{children:(o=r==null?void 0:r.properties)==null?void 0:o.text}),e&&t.jsx(Ht,{mediaUrl:e})]}),t.jsx(Dt,{})]})},Vt=y(_)(({theme:e})=>({position:"relative",display:"flex",padding:"20px",background:"transparent",width:"100%",[e.breakpoints.up("sm")]:{width:ve}})),qt=y(V)`
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
`,Ut=y(_)(({theme:e})=>({width:"100%",margin:"16px auto",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),pr=()=>{const{addNewNode:e,isFetching:r,runningProjectId:i}=D(b=>b),[o,s]=p.useState(null),[u,d]=p.useState(!1),{selectedEpisodeId:a,setSelectedEpisode:c}=Z(b=>b),n=we(),m=p.useRef(null),x=p.useRef(null),l=p.useRef(null),f=p.useRef(null),h=p.useRef(null),{setPlayingNode:j}=W(b=>b),g=p.useCallback(b=>{r||(f.current||(f.current={nodes:[],edges:[]}),b.edges&&f.current.edges.push(...b.edges),b.nodes&&f.current.nodes.push(...b.nodes),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{if(f.current){const{nodes:C,edges:w}=f.current,S={nodes:C,edges:w};f.current={nodes:[],edges:[]},e(S)}},3e3))},[e,r]),z=p.useCallback(b=>{console.log(b,"uuuuuupdate")},[]);p.useEffect(()=>{a&&(async()=>{try{const C=await ee(a,0,50);s(C);const[w,S]=((C==null?void 0:C.nodes)||[]).reduce(([R,P],T)=>(["Episode","Show"].includes(T.node_type)?R.push(T):P.push(T),[R,P]),[[],[]]),M=new Set(w.map(R=>R.ref_id)),[L,B]=((C==null?void 0:C.edges)||[]).reduce(([R,P],T)=>(M.has(T.source)&&M.has(T.target)?R.push(T):P.push(T),[R,P]),[[],[]]);l.current={nodes:S||[],edges:B||[]},g({nodes:w,edges:L})}catch(C){console.error(C)}})()},[a,g]),p.useEffect(()=>{a&&(async()=>{try{const C=await pe(a);C&&(j(C),c(C))}catch(C){console.error(C)}})()},[a,j,c]),p.useEffect(()=>(n&&(n.connect(),n.on("connect_error",b=>{console.error("Socket connection error:",b)}),i&&(n.on("new_node_created",g),n.on("node_updated",z))),()=>{n&&n.off()}),[n,z,g,i]),p.useEffect(()=>{const b=C=>{const{playerRef:w}=W.getState();if(x.current!==null){if(C-x.current>2e3){if(l.current&&w){const{nodes:M,edges:L}=l.current,B=w==null?void 0:w.getCurrentTime(),R=L.filter(T=>{var H,E;return((H=T==null?void 0:T.properties)==null?void 0:H.start)!==void 0&&((E=T==null?void 0:T.properties)==null?void 0:E.start)<B}),P=M.filter(T=>R.some(H=>H.target===T.ref_id||H.source===T.ref_id));(P.length||R.length)&&e({nodes:P,edges:R})}x.current=C}}else x.current=C;m.current=requestAnimationFrame(b)};return m.current=requestAnimationFrame(b),()=>{m.current&&cancelAnimationFrame(m.current)}},[l,e]),p.useEffect(()=>{if(i)try{n==null||n.emit("update_project_id",{id:i})}catch(b){console.error(b)}},[i,n]);const F=p.useMemo(()=>{if(o){const b=o.edges.filter(w=>{var S;return(S=w==null?void 0:w.properties)==null?void 0:S.start}).map(w=>{var S;return{source:w.source,target:w.target,start:(S=w.properties)==null?void 0:S.start}});return o.nodes.filter(w=>o.edges.some(S=>S.source===w.ref_id||S.target===w.ref_id)).map(w=>{const S=b.find(M=>w.ref_id===M.source||w.ref_id===M.target);return{...w,start:(S==null?void 0:S.start)||0}}).filter(w=>w&&w.node_type!=="Clip"&&w.node_type!=="Episode"&&w.node_type!=="Show")}return[]},[o]);return t.jsx(_,{direction:"row",style:{height:"100%"},children:a?t.jsxs(t.Fragment,{children:[t.jsxs(_,{children:[t.jsx(_,{onClick:()=>d(!u),children:t.jsx(Le,{})}),t.jsx(Nt,{})]}),t.jsxs(_,{basis:"100%",grow:1,p:16,shrink:1,children:[t.jsx(_,{basis:"100%",grow:1,shrink:1,children:u?t.jsx(oe,{}):t.jsx(ue,{})}),t.jsx(xt,{markers:F})]})]}):t.jsx(ot,{})})};export{pr as MindSet};
