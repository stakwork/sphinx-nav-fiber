import{r as u,y as re,c as se,j as t,s as y,a as b,F as C,T as W,u as $,d as V,z as oe,N as L,A as ne,D as ie,E as O,G as ae}from"./index-ba6c1b2c.js";import{Universe as ce}from"./index-680d05c4.js";import{b as R,c as le,d as pe,e as de,f as ue,g as fe,h as xe,i as he,a as me}from"./index-346f40c7.js";import{S as ge,R as ye,s as D,M as we}from"./index-39a879d7.js";import{u as T,a as q,m as je,T as Ce,f as be,H as ve,C as _e}from"./index-2e852984.js";import{W as Se,L as Z,H as Ee,D as Te,F as Pe,V as S,S as ze}from"./three.module-9c942ca6.js";import"./TextareaAutosize-8832e4bc.js";import"./index-a9014abf.js";import"./ClipLoader-34b0effb.js";import"./Skeleton-a0975269.js";import"./Stack-519f5a4b.js";import"./isPlainObject-95a3c1f7.js";import"./Typography-14bcf514.js";import"./createSvgIcon-d75dd243.js";import"./index-e7537181.js";function Re(e,r,a){const{gl:n,size:s,viewport:c}=T(),p=typeof e=="number"?e:s.width*c.dpr,d=typeof r=="number"?r:s.height*c.dpr,i=(typeof e=="number"?a:e)||{},{samples:o=0,depth:g,...j}=i,l=u.useMemo(()=>{let h;return h=new Se(p,d,{minFilter:Z,magFilter:Z,encoding:n.outputEncoding,type:Ee,...j}),g&&(h.depthTexture=new Te(p,d,Pe)),h.samples=o,h},[]);return u.useLayoutEffect(()=>{l.setSize(p,d),o&&(l.samples=o)},[o,l,p,d]),u.useEffect(()=>()=>l.dispose(),[]),l}const $e=e=>typeof e=="function",Me=u.forwardRef(({envMap:e,resolution:r=256,frames:a=1/0,children:n,makeDefault:s,...c},p)=>{const d=T(({set:f})=>f),i=T(({camera:f})=>f),o=T(({size:f})=>f),g=u.useRef(null),j=u.useRef(null),l=Re(r);u.useLayoutEffect(()=>{c.manual||g.current.updateProjectionMatrix()},[o,c]),u.useLayoutEffect(()=>{g.current.updateProjectionMatrix()}),u.useLayoutEffect(()=>{if(s){const f=i;return d(()=>({camera:g.current})),()=>d(()=>({camera:f}))}},[g,s,d]);let h=0,m=null;const x=$e(n);return q(f=>{x&&(a===1/0||h<a)&&(j.current.visible=!1,f.gl.setRenderTarget(l),m=f.scene.background,e&&(f.scene.background=e),f.gl.render(f.scene,g.current),f.scene.background=m,f.gl.setRenderTarget(null),j.current.visible=!0,h++)}),u.createElement(u.Fragment,null,u.createElement("orthographicCamera",re({left:o.width/-2,right:o.width/2,top:o.height/2,bottom:o.height/-2,ref:je([g,p])},c),!x&&n),u.createElement("group",{ref:j},x&&n(l.texture)))}),Ie={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},M=se(e=>({...Ie,setSelectedEpisodeId:r=>e({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>e({selectedEpisodeLink:r}),setSelectedEpisode:r=>e({selectedEpisode:r})})),ke=e=>t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),t.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),We=()=>t.jsxs(He,{children:[t.jsx(Fe,{children:t.jsx(Be,{children:t.jsx(ke,{})})}),t.jsx(Ae,{children:"Graph Mindset"})]}),He=y(C).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Fe=y(C)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Be=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${b.white};
  }
`,Ae=y(W)`
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
`,Le=e=>t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),De=/^(https?:\/\/)/,Ze=/(www\.)?/,Ne=/[\w-]+(\.[\w-]+)*/,Ge=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,Ve=/(\/[^\s?]*)?/,Oe=/(\?[^\s]*)?/,qe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,Ue=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,Xe=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,Ye=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,Je=new RegExp(`${De.source}${Ze.source}${Ne.source}${Ge.source}?${Ve.source}${Oe.source}$`,"i"),Ke=e=>{try{if(!(e==null?void 0:e.match(Je)))return!1;const n=new URL(e).hostname;return n!=null&&n.startsWith("www.")?((n==null?void 0:n.match(/\./g))||[]).length>=2:((n==null?void 0:n.match(/\./g))||[]).length>=1}catch{return!1}},N=e=>Ke(e)?[qe,Ue,Xe,Ye].some(a=>a.test(e)):!1,Qe=async e=>{const r="add_node",a={};a.media_url=e.source,a.content_type="audio_video";const n=await ne.post(`/${r}`,JSON.stringify(a));if(n.error){const{message:s}=n.error;throw new Error(s)}return n},et=()=>{const[e,r]=u.useState(""),[a,n]=u.useState(!1),[s,c]=u.useState(""),{setRunningProjectId:p}=$(l=>l),{setSelectedEpisodeId:d,setSelectedEpisodeLink:i}=M(l=>l),{setSchemas:o}=V(l=>l);u.useEffect(()=>{(async()=>{try{const h=await oe();o(h.schemas.filter(m=>!m.is_deleted))}catch(h){console.error("Error fetching schema:",h)}})()},[o]);const g=l=>{const{value:h}=l.target;r(h),n(h!==""&&!N(h))},j=async()=>{if(N(e))try{const l=await Qe({source:e});l.data.project_id&&p(l.data.project_id),l.data.ref_id&&(d(l.data.ref_id),i(e))}catch(l){let h=L;if((l==null?void 0:l.status)===400){const m=await l.json();h=m.errorCode||(m==null?void 0:m.status)||L,m.data.ref_id&&(d(m.data.ref_id),i(e))}else l instanceof Error&&(h=l.message);c(String(h))}};return t.jsxs(tt,{children:[t.jsx(rt,{children:"Ideas have shapes"}),t.jsxs(ot,{children:[t.jsx(st,{error:a,onChange:g,onKeyDown:l=>l.key==="Enter"&&j(),placeholder:"Paste podcast or video link",value:e}),t.jsx(nt,{error:a,onClick:a?void 0:j,children:t.jsx(Le,{})})]}),s&&t.jsx("div",{children:s})]})},tt=y(C)`
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
`,rt=y(C)`
  color: ${b.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,st=y.input`
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
`,ot=y.div`
  position: relative;
  width: 450px;
  display: flex;
  align-items: center;
`,nt=y.div`
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
`,U=u.memo(({type:e,left:r,img:a})=>{var i,o;const[n]=V(g=>[g.normalizedSchemasByType]),s=(i=n[e])==null?void 0:i.primary_color,c=(o=n[e])==null?void 0:o.icon,p=c?`svg-icons/${c}.svg`:"",d={iconStart:a||p,color:s??b.THING};return t.jsx(ct,{style:{left:`${r}%`},children:t.jsx(it,{...d,label:e})})});U.displayName="Marker";const it=({iconStart:e,color:r,label:a})=>t.jsx(at,{color:r,children:e&&t.jsx("img",{alt:a,className:"badge__img",src:e})}),at=y(C).attrs({direction:"row"})`
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
`,ct=y.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${b.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,lt=({duration:e,markers:r,handleProgressChange:a,playingTIme:n})=>{const s=10/e*100;return t.jsxs(pt,{children:[t.jsx(dt,{max:e,onChange:a,thumbWidth:s,value:n}),r.map(c=>{var o;const p=((c==null?void 0:c.start)||0)/e*100,d=(c==null?void 0:c.node_type)||"",i=((o=c==null?void 0:c.properties)==null?void 0:o.image_url)||"";return t.jsx(U,{img:i,left:p,type:d},c.ref_id)})]})},pt=y(C)`
  position: relative;
  flex: 1 1 100%;
`,dt=y(ge)`
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
      width: ${({thumbWidth:e})=>`${e}%`};
      height: 54px;
      border-radius: 8px;
      background-color: ${b.primaryBlue};
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
`,ut=({markers:e})=>{const{isPlaying:r,setIsPlaying:a,playingNode:n,playerRef:s}=R(l=>l),[c,p]=u.useState(0),d=n,i=u.useCallback((l,h)=>{const m=Array.isArray(h)?h[0]:h;s&&s.seekTo(m,"seconds")},[s]);u.useEffect(()=>{const l=setInterval(()=>{if(s&&p){const h=s.getCurrentTime();p(h)}},100);return()=>clearInterval(l)},[s,p]);const o=()=>{if(s){const l=s.getCurrentTime()-15;s.seekTo(l,"seconds")}},g=()=>{if(s){const l=s.getCurrentTime()+15;s.seekTo(l,"seconds")}},j=(s==null?void 0:s.getDuration())||0;return d?t.jsxs(ft,{children:[t.jsxs(xt,{children:[t.jsx(mt,{onClick:o,children:t.jsx("img",{alt:"",src:"RewindIcon.svg"})}),t.jsx(ht,{"data-testid":"play-pause-button",onClick:l=>{a(!r),l.stopPropagation()},size:"small",children:r?t.jsx(le,{"data-testid":"pause-icon"}):t.jsx(pe,{"data-testid":"play-icon"})}),t.jsx(gt,{onClick:g,children:t.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]}),t.jsx(lt,{duration:j,handleProgressChange:i,markers:e,playingTIme:c})]}):null},ft=y(C).attrs({direction:"row",align:"center",justify:"space-between"})`
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
`,ht=y(de)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,mt=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,gt=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,yt=({sourcePosition:e,targetPosition:r,color:a="white",arrowSize:n=1,label:s="label"})=>{const{points:c,textPosition:p}=u.useMemo(()=>{const d=new S(e.x,e.y,e.z),i=new S(r.x,r.y,r.z),o=new S().subVectors(i,d).normalize(),g=new S().addVectors(d,i).multiplyScalar(.5),j=new S().copy(o).multiplyScalar(-n).applyAxisAngle(new S(0,0,1),Math.PI/6),l=new S().copy(o).multiplyScalar(-n).applyAxisAngle(new S(0,0,1),-Math.PI/6);return{points:[d,i,i.clone(),i.clone().add(j),i.clone(),i.clone().add(l)],textPosition:g}},[e,r,n]);return t.jsxs(t.Fragment,{children:[t.jsxs("line",{children:[t.jsx("bufferGeometry",{children:t.jsx("bufferAttribute",{array:new Float32Array(c.flatMap(d=>[d.x,d.y,d.z])),attach:"attributes-position",count:c.length,itemSize:3})}),t.jsx("lineBasicMaterial",{color:a})]}),s&&t.jsx(Ce,{anchorX:"center",anchorY:"middle",color:a,...be,position:p,children:s})]})},wt=(e,r,a)=>{const n=new ze;return n.moveTo(-e/2+a,-r/2),n.lineTo(e/2-a,-r/2),n.quadraticCurveTo(e/2,-r/2,e/2,-r/2+a),n.lineTo(e/2,r/2-a),n.quadraticCurveTo(e/2,r/2,e/2-a,r/2),n.lineTo(-e/2+a,r/2),n.quadraticCurveTo(-e/2,r/2,-e/2,r/2-a),n.lineTo(-e/2,-r/2+a),n.quadraticCurveTo(-e/2,-r/2,-e/2+a,-r/2),n},jt=({width:e,height:r,radius:a,color:n})=>{const s=wt(e,r,a);return t.jsxs("mesh",{children:[t.jsx("shapeGeometry",{args:[s]}),t.jsx("meshBasicMaterial",{color:n,opacity:.9,transparent:!0})]})},Ct=({name:e,url:r,type:a})=>t.jsxs(bt,{children:[r&&t.jsx("img",{alt:"",className:"image",src:r}),t.jsx("div",{className:"title",children:e}),t.jsx("div",{className:"badge",children:t.jsx(ue,{type:a})}),t.jsx("div",{className:"action-btn",children:t.jsx(fe,{})})]}),bt=y(C)`
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
`,k=u.memo(({width:e,height:r,position:a,url:n,onButtonClick:s,name:c,type:p,color:d})=>{const{camera:i}=T();return t.jsxs("group",{position:a,children:[t.jsx(jt,{color:d,height:r,radius:1.5,width:e}),!1,t.jsx(ve,{position:[-e/2,r/2,0],children:t.jsx(C,{onClick:()=>s(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${e*i.zoom}px`,height:`${r*i.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:t.jsx(Ct,{name:`${c}`,type:p||"",url:n})})})]})});k.displayName="Node";const G=144/10,I=84/10,vt=()=>{const e=T(),{dataInitial:r}=$(s=>s),{viewport:a}=e,n=u.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const s=r.links.filter(i=>{var o;return(o=i==null?void 0:i.properties)==null?void 0:o.start}).map(i=>{var o;return{source:i.source,target:i.target,start:(o=i.properties)==null?void 0:o.start}}),c=r.nodes.filter(i=>r.links.some(o=>o.source===i.ref_id||o.target===i.ref_id)).map(i=>{const o=s.find(h=>i.ref_id===h.source||i.ref_id===h.target),g=((o==null?void 0:o.start)||0)*(a.width/10);return{...i,x:g,y:0,z:0,start:(o==null?void 0:o.start)||0}}).filter(i=>i.node_type!=="Clip"&&i.node_type!=="Episode"&&i.node_type!=="Show"),p=c.reduce((i,o)=>{const g=r.links.filter(m=>{var x;return!((x=m==null?void 0:m.properties)!=null&&x.start)&&[m.target,m.source].includes(o.ref_id)}),l=r.nodes.filter(m=>m.node_type!=="Episode"&&m.node_type!=="Clip"&&m.ref_id!==o.ref_id&&g.some(x=>[x.source,x.target].includes(m.ref_id))).map((m,x)=>{const{x:f}=o,w=(Math.floor(x/2)+1)*I*2*(x%2===0?1:-1);return{...m,x:f,y:w,z:0}}),h=g.map(m=>{if(m.source===o.ref_id){const f=l.find(w=>w.ref_id===m.target);return{...m,sourcePositions:{x:o.x,y:o.y,z:o.z},targetPositions:{x:f==null?void 0:f.x,y:f==null?void 0:f.y,z:f==null?void 0:f.z}}}const x=l.find(f=>f.ref_id===m.source);return{...m,sourcePositions:{x:x==null?void 0:x.x,y:x==null?void 0:x.y,z:x==null?void 0:x.z},targetPositions:{x:o.x,y:o.y,z:o.z}}});return i[o.ref_id]={nodes:l,edges:h},i},{}),d=Object.values(p).flatMap(i=>i.edges).filter(i=>{var o;return(o=i==null?void 0:i.sourcePositions)==null?void 0:o.x});return{nodes:c,edges:d,relatedNodes:Object.fromEntries(Object.entries(p).map(([i,o])=>[i,o.nodes]))}},[r,a.width]);return t.jsxs(t.Fragment,{children:[n.nodes.map(s=>{var c,p;return t.jsxs(u.Fragment,{children:[t.jsx(k,{color:"#353A46",height:I,name:((c=s==null?void 0:s.properties)==null?void 0:c.name)||"",onButtonClick:console.log,position:[s.x,s.y,s.z],type:s.node_type,url:((p=s==null?void 0:s.properties)==null?void 0:p.image_url)||"logo.png",width:G}),(n.relatedNodes[s.ref_id]||[]).map(d=>{var i,o;return t.jsx(k,{color:"#353A46",height:I,name:((i=d==null?void 0:d.properties)==null?void 0:i.name)||"",onButtonClick:console.log,position:[d.x,d.y,d.z],type:d.node_type,url:((o=d==null?void 0:d.properties)==null?void 0:o.image_url)||"logo.png",width:G},`${d.ref_id}-${s.ref_id}`)})]},s.ref_id)}),n.edges.map((s,c)=>s!=null&&s.sourcePositions&&(s!=null&&s.targetPositions)?t.jsx(yt,{label:s.edge_type||"",sourcePosition:new S(s.sourcePositions.x,s.sourcePositions.y,s.sourcePositions.z),targetPosition:new S(s.targetPositions.x,s.targetPositions.y,s.targetPositions.z)},`edge-${c}`):null)]})},_t=()=>{const{camera:e,viewport:r}=T(),a=R(n=>n.playerRef);return q(()=>{if(a){const n=a.getCurrentTime();e.position.x=n*r.width/10}}),null},St=()=>{const{camera:e,gl:r}=T();return u.useEffect(()=>{const a=e,n=c=>{c.preventDefault(),c.ctrlKey&&(a.zoom+=c.deltaY*-.1,a.zoom=Math.max(2,Math.min(a.zoom,20))),a.position.x+=c.deltaX*.1,a.updateProjectionMatrix()},s=r.domElement;return s.addEventListener("wheel",n,{passive:!1}),()=>{s.removeEventListener("wheel",n)}},[e,r]),null},X=u.memo(()=>(console.log("rerender"),t.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:t.jsxs(_e,{orthographic:!0,children:[t.jsx(_t,{}),t.jsx(Me,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),t.jsx(vt,{}),t.jsx(St,{})]})})));X.displayName="Scene";const Et=({mediaUrl:e})=>{const r=u.useRef(null),[a,n]=u.useState("ready"),[s,c]=u.useState(!1);xe(_=>_);const{dataInitial:p}=$(_=>_),{isPlaying:d,playingTime:i,setIsPlaying:o,setPlayingTime:g,setDuration:j,playingNode:l,volume:h,setHasError:m,resetPlayer:x,isSeeking:f,setIsSeeking:w,setPlayerRef:v,playerRef:E}=R(_=>_);u.useEffect(()=>()=>x(),[x]),u.useEffect(()=>{l&&!s&&(g(0),j(0),c(!1))},[l,g,j,c,s]),u.useEffect(()=>{f&&E&&(E.seekTo(i,"seconds"),w(!1))},[i,f,w,E]);const H=()=>{o(!d)},Y=()=>{o(!0)},J=()=>{o(!1)},K=()=>{m(!0),n("error")};u.useMemo(()=>((p==null?void 0:p.links.filter(P=>{var z;return(z=P==null?void 0:P.properties)==null?void 0:z.start}))||[]).slice().sort((P,z)=>{var B,A;return((B=P==null?void 0:P.properties)==null?void 0:B.start)-((A=z==null?void 0:z.properties)==null?void 0:A.start)}),[p]),console.log(_=>{if(!f){const F=_.playedSeconds;g(F);return}});const Q=()=>{E&&(n("ready"),H())},ee=()=>{H()},te=u.useCallback(_=>{!E&&_&&v(_)},[v,E]);return e?t.jsxs(Tt,{ref:r,tabIndex:0,children:[t.jsx(Pt,{isFullScreen:!1,children:t.jsx(he,{size:120,src:(l==null?void 0:l.image_url)||"",type:"clip"})}),t.jsx(Rt,{isFullScreen:!1,onClick:ee,children:t.jsx(ye,{ref:te,controls:!0,height:"219px",onBuffer:()=>n("buffering"),onBufferEnd:()=>n("ready"),onError:K,onPause:J,onPlay:Y,onReady:Q,playing:d,url:e||"",volume:h,width:"100%"})}),a==="error"?t.jsx(zt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Tt=y(C)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Pt=y(C)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,zt=y(C)`
  height: 60px;
  padding: 12px 16px;
  color: ${b.primaryRed};
`,Rt=y.div`
  margin: ${e=>e.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,$t=u.memo(Et),Mt=({transcriptString:e})=>{const[r,a]=u.useState(0),{playerRef:n}=R(p=>p),s=e.replace(/^["']|["']$/g,""),c=JSON.parse(s);return u.useEffect(()=>{const p=setInterval(()=>{if(n&&a){const d=n.getCurrentTime();a(d)}},100);return()=>clearInterval(p)},[n,a]),t.jsx(kt,{children:c.map(p=>{const d=D(p.start),i=D(p.end);return t.jsxs(It,{children:[t.jsxs(Wt,{children:[d,":",i]}),p.words.map(o=>{const g=o.start<r&&r<o.end;return t.jsx(Ht,{className:ie({active:g}),children:o.word},`${o.start}`)})]},p.start)})})},It=y.div`
  font-size: 14px;
  word-break: break-word;
`,kt=y.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Wt=y.span``,Ht=y.span`
  margin: 0 2px;

  &.active {
    background: ${b.lightBlue300};
  }
`,Ft=()=>{const{selectedEpisodeId:e}=M(c=>c),{playingTime:r,duration:a}=R(c=>c),[n,s]=u.useState([]);return u.useEffect(()=>{e&&(async()=>{try{const p=await O(e,0,50,{nodeType:["Clip"],useSubGraph:!1});p!=null&&p.nodes&&s(p.nodes)}catch(p){console.error(p)}})()},[e]),t.jsxs(Bt,{children:[t.jsx(C,{className:"heading",children:"Transcript"}),n.map(c=>{var o,g,j,l,h,m;const p=(o=c==null?void 0:c.properties)==null?void 0:o.timestamp,[d,i]=p?p.split("-").map(Number):[0,a];return d<=r*1e3&&r*1e3<i?t.jsxs(At,{direction:"row",children:[!((g=c.properties)!=null&&g.transcript)&&((j=c==null?void 0:c.properties)==null?void 0:j.text)&&t.jsx("span",{children:(l=c==null?void 0:c.properties)==null?void 0:l.text}),((h=c.properties)==null?void 0:h.transcript)&&t.jsx(Mt,{transcriptString:(m=c.properties)==null?void 0:m.transcript})]},c.ref_id):null})]})},Bt=y(C)`
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
`,Lt=()=>{var a,n;const{selectedEpisodeLink:e,selectedEpisode:r}=M(s=>s);return t.jsxs(Dt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsxs(Gt,{children:[(r==null?void 0:r.name)&&t.jsx(Nt,{children:r==null?void 0:r.name}),((a=r==null?void 0:r.properties)==null?void 0:a.text)&&t.jsx(Zt,{children:(n=r==null?void 0:r.properties)==null?void 0:n.text}),e&&t.jsx($t,{mediaUrl:e})]}),t.jsx(Ft,{})]})},Dt=y(C)(({theme:e})=>({position:"relative",display:"flex",padding:"20px",background:"transparent",width:"100%",[e.breakpoints.up("sm")]:{width:we}})),Zt=y(W)`
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
`,Gt=y(C)(({theme:e})=>({width:"100%",margin:"16px auto",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),ar=()=>{const{addNewNode:e,isFetching:r,runningProjectId:a,dataInitial:n}=$(x=>x),[s,c]=u.useState(!0),{selectedEpisodeId:p,setSelectedEpisode:d}=M(x=>x),i=me(),o=u.useRef(null),g=u.useRef(null),{setPlayingNode:j}=R(x=>x),l=u.useCallback(x=>{r||(o.current||(o.current={nodes:[],edges:[]}),x.edges&&o.current.edges.push(...x.edges),x.nodes&&o.current.nodes.push(...x.nodes),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{if(o.current){const{nodes:f,edges:w}=o.current,v={nodes:f,edges:w};o.current={nodes:[],edges:[]},e(v)}},3e3))},[e,r]),h=u.useCallback(x=>{console.log(x,"uuuuuupdate")},[]);u.useEffect(()=>{p&&(async()=>{try{const f=await O(p,0,50);f&&l(f)}catch(f){console.error(f)}})()},[p,l]),u.useEffect(()=>{p&&(async()=>{try{const f=await ae(p);f&&(j(f),d(f))}catch(f){console.error(f)}})()},[p,j,d]),u.useEffect(()=>(i&&(i.connect(),i.on("connect_error",x=>{console.error("Socket connection error:",x)}),i.on("new_node_created",l),i.on("node_updated",h)),()=>{i&&i.off()}),[i,h,l]),u.useEffect(()=>{if(a)try{i==null||i.emit("update_project_id",{id:a})}catch(x){console.error(x)}},[a,i]);const m=u.useMemo(()=>{if(n){const x=n.links.filter(w=>{var v;return(v=w==null?void 0:w.properties)==null?void 0:v.start}).map(w=>{var v;return{source:w.source,target:w.target,start:(v=w.properties)==null?void 0:v.start}});return n.nodes.filter(w=>n.links.some(v=>v.source===w.ref_id||v.target===w.ref_id)).map(w=>{const v=x.find(E=>w.ref_id===E.source||w.ref_id===E.target);return{...w,start:(v==null?void 0:v.start)||0}}).filter(w=>w&&w.node_type!=="Clip"&&w.node_type!=="Episode"&&w.node_type!=="Show")}return[]},[n]);return t.jsx(C,{direction:"row",style:{height:"100%"},children:p?t.jsxs(t.Fragment,{children:[t.jsxs(C,{children:[t.jsx(C,{onClick:()=>c(!s),children:t.jsx(We,{})}),t.jsx(Lt,{})]}),t.jsxs(C,{basis:"100%",grow:1,p:16,shrink:1,children:[t.jsx(C,{basis:"100%",grow:1,shrink:1,children:s?t.jsx(X,{}):t.jsx(ce,{})}),t.jsx(ut,{markers:m})]})]}):t.jsx(et,{})})};export{ar as MindSet};
