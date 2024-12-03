import{r as d,y as oe,c as ne,j as t,s as w,a as C,F as b,T as W,u as I,d as V,z as ie,N as D,A as ae,D as ce,E as O,G as le}from"./index-9386bca6.js";import{Universe as pe}from"./index-a77765a7.js";import{b as R,c as de,d as ue,e as fe,f as xe,g as he,h as me,i as ge,a as ye}from"./index-b4a48e27.js";import{S as we,R as je,s as Ce,M as be}from"./index-83f5748f.js";import{u as T,a as U,m as ve,T as _e,f as Ee,H as Se,C as Te}from"./index-8c3bbe31.js";import{W as ze,L as Z,H as Pe,D as Re,F as $e,V as S,S as Ie}from"./three.module-9c942ca6.js";import"./TextareaAutosize-1fe9e923.js";import"./index-3bb19895.js";import"./ClipLoader-4e75d8b4.js";import"./Skeleton-b2e0bb2a.js";import"./Stack-56e936c3.js";import"./isPlainObject-1fb3fdf9.js";import"./Typography-03213c00.js";import"./createSvgIcon-176b29f9.js";import"./index-62fd750f.js";function Me(e,r,a){const{gl:o,size:s,viewport:u}=T(),p=typeof e=="number"?e:s.width*u.dpr,l=typeof r=="number"?r:s.height*u.dpr,n=(typeof e=="number"?a:e)||{},{samples:i=0,depth:y,...g}=n,c=d.useMemo(()=>{let x;return x=new ze(p,l,{minFilter:Z,magFilter:Z,encoding:o.outputEncoding,type:Pe,...g}),y&&(x.depthTexture=new Re(p,l,$e)),x.samples=i,x},[]);return d.useLayoutEffect(()=>{c.setSize(p,l),i&&(c.samples=i)},[i,c,p,l]),d.useEffect(()=>()=>c.dispose(),[]),c}const ke=e=>typeof e=="function",He=d.forwardRef(({envMap:e,resolution:r=256,frames:a=1/0,children:o,makeDefault:s,...u},p)=>{const l=T(({set:h})=>h),n=T(({camera:h})=>h),i=T(({size:h})=>h),y=d.useRef(null),g=d.useRef(null),c=Me(r);d.useLayoutEffect(()=>{u.manual||y.current.updateProjectionMatrix()},[i,u]),d.useLayoutEffect(()=>{y.current.updateProjectionMatrix()}),d.useLayoutEffect(()=>{if(s){const h=n;return l(()=>({camera:y.current})),()=>l(()=>({camera:h}))}},[y,s,l]);let x=0,m=null;const f=ke(o);return U(h=>{f&&(a===1/0||x<a)&&(g.current.visible=!1,h.gl.setRenderTarget(c),m=h.scene.background,e&&(h.scene.background=e),h.gl.render(h.scene,y.current),h.scene.background=m,h.gl.setRenderTarget(null),g.current.visible=!0,x++)}),d.createElement(d.Fragment,null,d.createElement("orthographicCamera",oe({left:i.width/-2,right:i.width/2,top:i.height/2,bottom:i.height/-2,ref:ve([y,p])},u),!f&&o),d.createElement("group",{ref:g},f&&o(c.texture)))}),We={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},M=ne(e=>({...We,setSelectedEpisodeId:r=>e({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>e({selectedEpisodeLink:r}),setSelectedEpisode:r=>e({selectedEpisode:r})})),Be=e=>t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),t.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Fe=()=>t.jsxs(Le,{children:[t.jsx(Ae,{children:t.jsx(De,{children:t.jsx(Be,{})})}),t.jsx(Ze,{children:"Graph Mindset"})]}),Le=w(b).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Ae=w(b)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,De=w.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${C.white};
  }
`,Ze=w(W)`
  width: 127px;
  height: 24px;
  color: ${C.white};
  font-family: Barlow;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.22px;
  margin-left: 16px;
  white-space: nowrap;
`,Ge=e=>t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Ne=/^(https?:\/\/)/,Ve=/(www\.)?/,Oe=/[\w-]+(\.[\w-]+)*/,Ue=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,qe=/(\/[^\s?]*)?/,Xe=/(\?[^\s]*)?/,Ye=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,Je=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,Ke=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,Qe=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,et=new RegExp(`${Ne.source}${Ve.source}${Oe.source}${Ue.source}?${qe.source}${Xe.source}$`,"i"),tt=e=>{try{if(!(e==null?void 0:e.match(et)))return!1;const o=new URL(e).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}catch{return!1}},G=e=>tt(e)?[Ye,Je,Ke,Qe].some(a=>a.test(e)):!1,rt=async e=>{const r="add_node",a={};a.media_url=e.source,a.content_type="audio_video";const o=await ae.post(`/${r}`,JSON.stringify(a));if(o.error){const{message:s}=o.error;throw new Error(s)}return o},st=()=>{const[e,r]=d.useState(""),[a,o]=d.useState(!1),[s,u]=d.useState(""),{setRunningProjectId:p}=I(c=>c),{setSelectedEpisodeId:l,setSelectedEpisodeLink:n}=M(c=>c),{setSchemas:i}=V(c=>c);d.useEffect(()=>{(async()=>{try{const x=await ie();i(x.schemas.filter(m=>!m.is_deleted))}catch(x){console.error("Error fetching schema:",x)}})()},[i]);const y=c=>{const{value:x}=c.target;r(x),o(x!==""&&!G(x))},g=async()=>{if(G(e))try{const c=await rt({source:e});c.data.project_id&&p(c.data.project_id),c.data.ref_id&&(l(c.data.ref_id),n(e))}catch(c){let x=D;if((c==null?void 0:c.status)===400){const m=await c.json();x=m.errorCode||(m==null?void 0:m.status)||D,m.data.ref_id&&(l(m.data.ref_id),n(e))}else c instanceof Error&&(x=c.message);u(String(x))}};return t.jsxs(ot,{children:[t.jsx(nt,{children:"Ideas have shapes"}),t.jsxs(at,{children:[t.jsx(it,{error:a,onChange:y,onKeyDown:c=>c.key==="Enter"&&g(),placeholder:"Paste podcast or video link",value:e}),t.jsx(ct,{error:a,onClick:a?void 0:g,children:t.jsx(Ge,{})})]}),s&&t.jsx("div",{children:s})]})},ot=w(b)`
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
`,nt=w(b)`
  color: ${C.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,it=w.input`
  width: 100%;
  max-width: 450px;
  padding: 12px 28px 12px 16px;
  border-radius: 100px;
  border: 1px solid ${e=>e.error?"red":C.DIVIDER_4};
  background: ${C.INPUT_BG};
  color: ${C.white};
  font-family: Barlow;
  font-size: 16px;

  &::placeholder {
    color: ${C.INPUT_PLACEHOLDER};
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.error?"red":C.primaryBlue};
  }
`,at=w.div`
  position: relative;
  width: 450px;
  display: flex;
  align-items: center;
`,ct=w.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${C.white};
  font-size: 20px;
  cursor: ${e=>e.error?"not-allowed":"pointer"};

  svg {
    width: 8px;
    height: 17px;
    color: ${C.GRAY6};
  }
`,q=d.memo(({type:e,left:r,img:a})=>{var n,i;const[o]=V(y=>[y.normalizedSchemasByType]),s=(n=o[e])==null?void 0:n.primary_color,u=(i=o[e])==null?void 0:i.icon,p=u?`svg-icons/${u}.svg`:"",l={iconStart:a||p,color:s??C.THING};return t.jsx(dt,{style:{left:`${r}%`},children:t.jsx(lt,{...l,label:e})})});q.displayName="Marker";const lt=({iconStart:e,color:r,label:a})=>t.jsx(pt,{color:r,children:e&&t.jsx("img",{alt:a,className:"badge__img",src:e})}),pt=w(b).attrs({direction:"row"})`
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
`,dt=w.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${C.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,ut=({duration:e,markers:r,handleProgressChange:a,playingTIme:o})=>{const s=10/e*100;return t.jsxs(ft,{children:[t.jsx(xt,{max:e,onChange:a,thumbWidth:s,value:o}),r.map(u=>{var i;const p=((u==null?void 0:u.start)||0)/e*100,l=(u==null?void 0:u.node_type)||"",n=((i=u==null?void 0:u.properties)==null?void 0:i.image_url)||"";return t.jsx(q,{img:n,left:p,type:l},u.ref_id)})]})},ft=w(b)`
  position: relative;
  flex: 1 1 100%;
`,xt=w(we)`
  && {
    z-index: 20;
    color: ${C.white};
    height: 3px;
    width: calc(100% - 12px);
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: ${({thumbWidth:e})=>`${e}%`};
      height: 54px;
      border-radius: 8px;
      background-color: ${C.primaryBlue};
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
`,ht=({markers:e})=>{const{isPlaying:r,setIsPlaying:a,playingNode:o,playerRef:s}=R(c=>c),[u,p]=d.useState(0),l=o,n=d.useCallback((c,x)=>{const m=Array.isArray(x)?x[0]:x;s&&s.seekTo(m,"seconds")},[s]);d.useEffect(()=>{const c=setInterval(()=>{if(s&&p){const x=s.getCurrentTime();p(x)}},100);return()=>clearInterval(c)},[s,p]);const i=()=>{if(s){const c=s.getCurrentTime()-15;s.seekTo(c,"seconds")}},y=()=>{if(s){const c=s.getCurrentTime()+15;s.seekTo(c,"seconds")}},g=(s==null?void 0:s.getDuration())||0;return l?t.jsxs(mt,{children:[t.jsxs(gt,{children:[t.jsx(wt,{onClick:i,children:t.jsx("img",{alt:"",src:"RewindIcon.svg"})}),t.jsx(yt,{"data-testid":"play-pause-button",onClick:c=>{a(!r),c.stopPropagation()},size:"small",children:r?t.jsx(de,{"data-testid":"pause-icon"}):t.jsx(ue,{"data-testid":"play-icon"})}),t.jsx(jt,{onClick:y,children:t.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]}),t.jsx(ut,{duration:g,handleProgressChange:n,markers:e,playingTIme:u})]}):null},mt=w(b).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${C.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,gt=w(b).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 142px;
  height: 54px;
  background: ${C.BG1};
  border-radius: 40px;
  margin-right: 54px;
  color: ${C.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,yt=w(fe)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,wt=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,jt=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Ct=({sourcePosition:e,targetPosition:r,color:a="white",arrowSize:o=1,label:s="label"})=>{const{points:u,textPosition:p}=d.useMemo(()=>{const l=new S(e.x,e.y,e.z),n=new S(r.x,r.y,r.z),i=new S().subVectors(n,l).normalize(),y=new S().addVectors(l,n).multiplyScalar(.5),g=new S().copy(i).multiplyScalar(-o).applyAxisAngle(new S(0,0,1),Math.PI/6),c=new S().copy(i).multiplyScalar(-o).applyAxisAngle(new S(0,0,1),-Math.PI/6);return{points:[l,n,n.clone(),n.clone().add(g),n.clone(),n.clone().add(c)],textPosition:y}},[e,r,o]);return t.jsxs(t.Fragment,{children:[t.jsxs("line",{children:[t.jsx("bufferGeometry",{children:t.jsx("bufferAttribute",{array:new Float32Array(u.flatMap(l=>[l.x,l.y,l.z])),attach:"attributes-position",count:u.length,itemSize:3})}),t.jsx("lineBasicMaterial",{color:a})]}),s&&t.jsx(_e,{anchorX:"center",anchorY:"middle",color:a,...Ee,position:p,children:s})]})},bt=(e,r,a)=>{const o=new Ie;return o.moveTo(-e/2+a,-r/2),o.lineTo(e/2-a,-r/2),o.quadraticCurveTo(e/2,-r/2,e/2,-r/2+a),o.lineTo(e/2,r/2-a),o.quadraticCurveTo(e/2,r/2,e/2-a,r/2),o.lineTo(-e/2+a,r/2),o.quadraticCurveTo(-e/2,r/2,-e/2,r/2-a),o.lineTo(-e/2,-r/2+a),o.quadraticCurveTo(-e/2,-r/2,-e/2+a,-r/2),o},vt=({width:e,height:r,radius:a,color:o})=>{const s=bt(e,r,a);return t.jsxs("mesh",{children:[t.jsx("shapeGeometry",{args:[s]}),t.jsx("meshBasicMaterial",{color:o,opacity:.9,transparent:!0})]})},_t=({name:e,url:r,type:a})=>t.jsxs(Et,{children:[r&&t.jsx("img",{alt:"",className:"image",src:r}),t.jsx("div",{className:"title",children:e}),t.jsx("div",{className:"badge",children:t.jsx(xe,{type:a})}),t.jsx("div",{className:"action-btn",children:t.jsx(he,{})})]}),Et=w(b)`
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
    color: ${C.GRAY6};
    position: absolute;
  }
`,H=d.memo(({width:e,height:r,position:a,url:o,onButtonClick:s,name:u,type:p,color:l})=>{const{camera:n}=T();return t.jsxs("group",{position:a,children:[t.jsx(vt,{color:l,height:r,radius:1.5,width:e}),!1,t.jsx(Se,{position:[-e/2,r/2,0],children:t.jsx(b,{onClick:()=>s(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${e*n.zoom}px`,height:`${r*n.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:t.jsx(_t,{name:`${u}`,type:p||"",url:o})})})]})});H.displayName="Node";const N=144/10,k=84/10,St=()=>{const e=T(),{dataInitial:r}=I(s=>s),{viewport:a}=e,o=d.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const s=r.links.filter(n=>{var i;return(i=n==null?void 0:n.properties)==null?void 0:i.start}).map(n=>{var i;return{source:n.source,target:n.target,start:(i=n.properties)==null?void 0:i.start}}),u=r.nodes.filter(n=>r.links.some(i=>i.source===n.ref_id||i.target===n.ref_id)).map(n=>{const i=s.find(x=>n.ref_id===x.source||n.ref_id===x.target),y=((i==null?void 0:i.start)||0)*(a.width/10);return{...n,x:y,y:0,z:0,start:(i==null?void 0:i.start)||0}}).filter(n=>n.node_type!=="Clip"&&n.node_type!=="Episode"&&n.node_type!=="Show"),p=u.reduce((n,i)=>{const y=r.links.filter(m=>{var f;return!((f=m==null?void 0:m.properties)!=null&&f.start)&&[m.target,m.source].includes(i.ref_id)}),c=r.nodes.filter(m=>m.node_type!=="Episode"&&m.node_type!=="Clip"&&m.ref_id!==i.ref_id&&y.some(f=>[f.source,f.target].includes(m.ref_id))).map((m,f)=>{const{x:h}=i,j=(Math.floor(f/2)+1)*k*2*(f%2===0?1:-1);return{...m,x:h,y:j,z:0}}),x=y.map(m=>{if(m.source===i.ref_id){const h=c.find(j=>j.ref_id===m.target);return{...m,sourcePositions:{x:i.x,y:i.y,z:i.z},targetPositions:{x:h==null?void 0:h.x,y:h==null?void 0:h.y,z:h==null?void 0:h.z}}}const f=c.find(h=>h.ref_id===m.source);return{...m,sourcePositions:{x:f==null?void 0:f.x,y:f==null?void 0:f.y,z:f==null?void 0:f.z},targetPositions:{x:i.x,y:i.y,z:i.z}}});return n[i.ref_id]={nodes:c,edges:x},n},{}),l=Object.values(p).flatMap(n=>n.edges).filter(n=>{var i;return(i=n==null?void 0:n.sourcePositions)==null?void 0:i.x});return{nodes:u,edges:l,relatedNodes:Object.fromEntries(Object.entries(p).map(([n,i])=>[n,i.nodes]))}},[r,a.width]);return t.jsxs(t.Fragment,{children:[o.nodes.map(s=>{var u,p;return t.jsxs(d.Fragment,{children:[t.jsx(H,{color:"#353A46",height:k,name:((u=s==null?void 0:s.properties)==null?void 0:u.name)||"",onButtonClick:console.log,position:[s.x,s.y,s.z],type:s.node_type,url:((p=s==null?void 0:s.properties)==null?void 0:p.image_url)||"logo.png",width:N}),(o.relatedNodes[s.ref_id]||[]).map(l=>{var n,i;return t.jsx(H,{color:"#353A46",height:k,name:((n=l==null?void 0:l.properties)==null?void 0:n.name)||"",onButtonClick:console.log,position:[l.x,l.y,l.z],type:l.node_type,url:((i=l==null?void 0:l.properties)==null?void 0:i.image_url)||"logo.png",width:N},`${l.ref_id}-${s.ref_id}`)})]},s.ref_id)}),o.edges.map((s,u)=>s!=null&&s.sourcePositions&&(s!=null&&s.targetPositions)?t.jsx(Ct,{label:s.edge_type||"",sourcePosition:new S(s.sourcePositions.x,s.sourcePositions.y,s.sourcePositions.z),targetPosition:new S(s.targetPositions.x,s.targetPositions.y,s.targetPositions.z)},`edge-${u}`):null)]})},Tt=()=>{const{camera:e,viewport:r}=T(),a=R(o=>o.playerRef);return U(()=>{if(a){const o=a.getCurrentTime();e.position.x=o*r.width/10}}),null},zt=()=>{const{camera:e,gl:r}=T();return d.useEffect(()=>{const a=e,o=u=>{u.preventDefault(),u.ctrlKey&&(a.zoom+=u.deltaY*-.1,a.zoom=Math.max(2,Math.min(a.zoom,20))),a.position.x+=u.deltaX*.1,a.updateProjectionMatrix()},s=r.domElement;return s.addEventListener("wheel",o,{passive:!1}),()=>{s.removeEventListener("wheel",o)}},[e,r]),null},X=d.memo(()=>(console.log("rerender"),t.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:t.jsxs(Te,{orthographic:!0,children:[t.jsx(Tt,{}),t.jsx(He,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),t.jsx(St,{}),t.jsx(zt,{})]})})));X.displayName="Scene";const Pt=(e,r)=>{let a=0,o=e.length-1;for(;a<=o;){const s=Math.floor((a+o)/2),u=e[s],{start:p,end:l}=u.properties;if(r>=p&&r<=l)return u;r<p?o=s-1:a=s+1}return null},Rt=({mediaUrl:e})=>{const r=d.useRef(null),[a,o]=d.useState("ready"),[s,u]=d.useState(!1),{setActiveEdge:p}=me(_=>_),{dataInitial:l}=I(_=>_),{isPlaying:n,playingTime:i,setIsPlaying:y,setPlayingTime:g,setDuration:c,playingNode:x,volume:m,setHasError:f,resetPlayer:h,isSeeking:j,setIsSeeking:v,setPlayerRef:$,playerRef:z}=R(_=>_);d.useEffect(()=>()=>h(),[h]),d.useEffect(()=>{x&&!s&&(g(0),c(0),u(!1))},[x,g,c,u,s]),d.useEffect(()=>{j&&z&&(z.seekTo(i,"seconds"),v(!1))},[i,j,v,z]);const B=()=>{y(!n)},Y=()=>{y(!0)},J=()=>{y(!1)},K=()=>{f(!0),o("error")},Q=d.useMemo(()=>((l==null?void 0:l.links.filter(E=>{var P;return(P=E==null?void 0:E.properties)==null?void 0:P.start}))||[]).slice().sort((E,P)=>{var L,A;return((L=E==null?void 0:E.properties)==null?void 0:L.start)-((A=P==null?void 0:P.properties)==null?void 0:A.start)}),[l]),ee=_=>{if(!j){const F=_.playedSeconds,E=Pt(Q,F);p(E||null)}},te=()=>{z&&(o("ready"),B())},re=()=>{B()},se=d.useCallback(_=>{!z&&_&&$(_)},[$,z]);return e?t.jsxs($t,{ref:r,tabIndex:0,children:[t.jsx(It,{isFullScreen:!1,children:t.jsx(ge,{size:120,src:(x==null?void 0:x.image_url)||"",type:"clip"})}),t.jsx(kt,{isFullScreen:!1,onClick:re,children:t.jsx(je,{ref:se,controls:!0,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:K,onPause:J,onPlay:Y,onProgress:ee,onReady:te,playing:n,url:e||"",volume:m,width:"100%"})}),a==="error"?t.jsx(Mt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},$t=w(b)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,It=w(b)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Mt=w(b)`
  height: 60px;
  padding: 12px 16px;
  color: ${C.primaryRed};
`,kt=w.div`
  margin: ${e=>e.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Ht=d.memo(Rt),Wt=({transcriptString:e})=>{const[r,a]=d.useState(0),[o,s]=d.useState(!1),{playerRef:u}=R(g=>g),p=e.replace(/^["']|["']$/g,""),l=JSON.parse(p),n=d.useRef(null),i=d.useRef(null),y=d.useRef(null);return d.useEffect(()=>{const g=setInterval(()=>{if(u&&a){const c=u.getCurrentTime();a(c)}},100);return()=>clearInterval(g)},[u,a]),d.useEffect(()=>{const g=()=>{s(!0),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{s(!1)},1e3)},c=i.current;return c&&c.addEventListener("scroll",g),()=>{c&&c.removeEventListener("scroll",g)}},[]),d.useEffect(()=>{!o&&n.current&&n.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,o]),t.jsx(Ft,{ref:i,children:l.map(g=>{const c=Ce(g.start),x=g.start<r&&r<g.end;return t.jsxs(Bt,{ref:x?n:null,className:ce({active:x}),children:[t.jsx(Lt,{children:c}),t.jsx(At,{children:t.jsx("span",{children:g.text})})]},`${g.start}-${g.end}`)})})},Bt=w(b)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${C.AI_HIGHLIGHT};
  }
`,Ft=w.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Lt=w.span`
  background: ${C.lightBlue100};
  color: ${C.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,At=w.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${C.AI_HIGHLIGHT};
  }
`,Dt=()=>{const{selectedEpisodeId:e}=M(p=>p),{playerRef:r}=R(p=>p),[a,o]=d.useState(0),[s,u]=d.useState([]);return d.useEffect(()=>{e&&(async()=>{try{const l=await O(e,0,50,{nodeType:["Clip"],useSubGraph:!1});l!=null&&l.nodes&&u(l.nodes)}catch(l){console.error(l)}})()},[e]),d.useEffect(()=>{const p=setInterval(()=>{if(r&&o){const l=r.getCurrentTime();o(l)}},100);return()=>clearInterval(p)},[r,o]),t.jsxs(Zt,{children:[t.jsx(b,{className:"heading",children:"Transcript"}),s.map(p=>{var y,g,c,x,m,f;const l=(y=p==null?void 0:p.properties)==null?void 0:y.timestamp,[n,i]=l?l.split("-").map(Number):[0,0];return n<=a*1e3&&a*1e3<i?t.jsxs(Gt,{direction:"row",children:[!((g=p.properties)!=null&&g.transcript)&&((c=p==null?void 0:p.properties)==null?void 0:c.text)&&t.jsx("span",{children:(x=p==null?void 0:p.properties)==null?void 0:x.text}),((m=p.properties)==null?void 0:m.transcript)&&t.jsx(Wt,{transcriptString:(f=p.properties)==null?void 0:f.transcript})]},p.ref_id):null})]})},Zt=w(b)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }

  color: ${C.white};
  background: ${C.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
  max-height: 50%;
`,Gt=w(b)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,Nt=()=>{var a,o;const{selectedEpisodeLink:e,selectedEpisode:r}=M(s=>s);return t.jsxs(Vt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsxs(qt,{children:[(r==null?void 0:r.name)&&t.jsx(Ut,{children:r==null?void 0:r.name}),((a=r==null?void 0:r.properties)==null?void 0:a.text)&&t.jsx(Ot,{children:(o=r==null?void 0:r.properties)==null?void 0:o.text}),e&&t.jsx(Ht,{mediaUrl:e})]}),t.jsx(Dt,{})]})},Vt=w(b)(({theme:e})=>({position:"relative",display:"flex",padding:"20px",background:"transparent",width:"100%",[e.breakpoints.up("sm")]:{width:be}})),Ot=w(W)`
  font-size: 20px;
  font-weight: Bold;
  line-height: 24.2px;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
  font-weight: 500;
`,Ut=w(W)`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
`,qt=w(b)(({theme:e})=>({width:"100%",margin:"16px auto",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),pr=()=>{const{addNewNode:e,isFetching:r,runningProjectId:a,dataInitial:o}=I(f=>f),[s,u]=d.useState(!0),{selectedEpisodeId:p,setSelectedEpisode:l}=M(f=>f),n=ye(),i=d.useRef(null),y=d.useRef(null),{setPlayingNode:g}=R(f=>f),c=d.useCallback(f=>{r||(i.current||(i.current={nodes:[],edges:[]}),f.edges&&i.current.edges.push(...f.edges),f.nodes&&i.current.nodes.push(...f.nodes),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{if(i.current){const{nodes:h,edges:j}=i.current,v={nodes:h,edges:j};i.current={nodes:[],edges:[]},e(v)}},3e3))},[e,r]),x=d.useCallback(f=>{console.log(f,"uuuuuupdate")},[]);d.useEffect(()=>{p&&(async()=>{try{const h=await O(p,0,50);h&&c(h)}catch(h){console.error(h)}})()},[p,c]),d.useEffect(()=>{p&&(async()=>{try{const h=await le(p);h&&(g(h),l(h))}catch(h){console.error(h)}})()},[p,g,l]),d.useEffect(()=>(n&&(n.connect(),n.on("connect_error",f=>{console.error("Socket connection error:",f)}),n.on("new_node_created",c),n.on("node_updated",x)),()=>{n&&n.off()}),[n,x,c]),d.useEffect(()=>{if(a)try{n==null||n.emit("update_project_id",{id:a})}catch(f){console.error(f)}},[a,n]);const m=d.useMemo(()=>{if(o){const f=o.links.filter(j=>{var v;return(v=j==null?void 0:j.properties)==null?void 0:v.start}).map(j=>{var v;return{source:j.source,target:j.target,start:(v=j.properties)==null?void 0:v.start}});return o.nodes.filter(j=>o.links.some(v=>v.source===j.ref_id||v.target===j.ref_id)).map(j=>{const v=f.find($=>j.ref_id===$.source||j.ref_id===$.target);return{...j,start:(v==null?void 0:v.start)||0}}).filter(j=>j&&j.node_type!=="Clip"&&j.node_type!=="Episode"&&j.node_type!=="Show")}return[]},[o]);return t.jsx(b,{direction:"row",style:{height:"100%"},children:p?t.jsxs(t.Fragment,{children:[t.jsxs(b,{children:[t.jsx(b,{onClick:()=>u(!s),children:t.jsx(Fe,{})}),t.jsx(Nt,{})]}),t.jsxs(b,{basis:"100%",grow:1,p:16,shrink:1,children:[t.jsx(b,{basis:"100%",grow:1,shrink:1,children:s?t.jsx(X,{}):t.jsx(pe,{})}),t.jsx(ht,{markers:m})]})]}):t.jsx(st,{})})};export{pr as MindSet};
