import{r as a,y as ce,c as le,j as t,s as x,a as C,F as _,T as V,u as D,d as K,z as pe,A as ue,N as Y,D as de,E as fe,G as ee,H as he}from"./index-f22e6e13.js";import{Universe as xe}from"./index-0d511f35.js";import{b as H,c as me,d as ge,e as ye,f as we,g as je,h as be,i as Ce,a as ve}from"./index-8304ea06.js";import{S as Se,R as _e,s as Ee,M as Te}from"./index-9ddac9de.js";import{u as W,a as te,m as Re,T as Pe,f as $e,H as ze,C as Ie}from"./index-d3e0dfea.js";import{W as Me,L as X,H as ke,D as We,F as He,V as M,S as Ae}from"./three.module-9c942ca6.js";import"./TextareaAutosize-5da8bada.js";import"./index-e36d8aa5.js";import"./ClipLoader-1ce39797.js";import"./Skeleton-6d9b0e62.js";import"./Stack-e2486c11.js";import"./isPlainObject-212517ba.js";import"./Typography-1355ab6c.js";import"./createSvgIcon-9d40ff73.js";import"./index-a1115826.js";function Fe(e,r,s){const{gl:n,size:o,viewport:p}=W(),f=typeof e=="number"?e:o.width*p.dpr,l=typeof r=="number"?r:o.height*p.dpr,c=(typeof e=="number"?s:e)||{},{samples:i=0,depth:h,...m}=c,g=a.useMemo(()=>{let w;return w=new Me(f,l,{minFilter:X,magFilter:X,encoding:n.outputEncoding,type:ke,...m}),h&&(w.depthTexture=new We(f,l,He)),w.samples=i,w},[]);return a.useLayoutEffect(()=>{g.setSize(f,l),i&&(g.samples=i)},[i,g,f,l]),a.useEffect(()=>()=>g.dispose(),[]),g}const Le=e=>typeof e=="function",Be=a.forwardRef(({envMap:e,resolution:r=256,frames:s=1/0,children:n,makeDefault:o,...p},f)=>{const l=W(({set:u})=>u),c=W(({camera:u})=>u),i=W(({size:u})=>u),h=a.useRef(null),m=a.useRef(null),g=Fe(r);a.useLayoutEffect(()=>{p.manual||h.current.updateProjectionMatrix()},[i,p]),a.useLayoutEffect(()=>{h.current.updateProjectionMatrix()}),a.useLayoutEffect(()=>{if(o){const u=c;return l(()=>({camera:h.current})),()=>l(()=>({camera:u}))}},[h,o,l]);let w=0,j=null;const d=Le(n);return te(u=>{d&&(s===1/0||w<s)&&(m.current.visible=!1,u.gl.setRenderTarget(g),j=u.scene.background,e&&(u.scene.background=e),u.gl.render(u.scene,h.current),u.scene.background=j,u.gl.setRenderTarget(null),m.current.visible=!0,w++)}),a.createElement(a.Fragment,null,a.createElement("orthographicCamera",ce({left:i.width/-2,right:i.width/2,top:i.height/2,bottom:i.height/-2,ref:Re([h,f])},p),!d&&n),a.createElement("group",{ref:m},d&&n(g.texture)))}),De={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},N=le(e=>({...De,setSelectedEpisodeId:r=>e({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>e({selectedEpisodeLink:r}),setSelectedEpisode:r=>e({selectedEpisode:r})})),Ne=e=>t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),t.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Ge=()=>t.jsxs(Ze,{children:[t.jsx(Ve,{children:t.jsx(Oe,{children:t.jsx(Ne,{})})}),t.jsx(Ue,{children:"Graph Mindset"})]}),Ze=x(_).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Ve=x(_)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Oe=x.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${C.white};
  }
`,Ue=x(V)`
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
`,qe=e=>t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Ye=({imageUrl:e,title:r,subtitle:s,onClick:n})=>{const o=r.length>35?`${r.substring(0,32)}...`:r,p=s.length>50?`${s.substring(0,47)}...`:s;return t.jsxs(Xe,{onClick:n,children:[t.jsx(Qe,{children:t.jsx(Je,{alt:r,src:e})}),t.jsxs(Ke,{children:[t.jsx(et,{children:o}),t.jsx(tt,{children:p})]})]})},Xe=x(_)`
  background: ${C.BG1};
  width: 170px;
  height: 200px;
  color: ${C.white};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: ${C.SEEDQUESTION_HOVER};
  }
  &:active {
    background: ${C.SEEDQUESTION};
  }
`,Qe=x.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Je=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Ke=x(_)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,et=x.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${C.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,tt=x.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${C.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,rt=/^(https?:\/\/)/,st=/(www\.)?/,nt=/[\w-]+(\.[\w-]+)*/,ot=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,it=/(\/[^\s?]*)?/,at=/(\?[^\s]*)?/,ct=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,lt=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,pt=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ut=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,dt=new RegExp(`${rt.source}${st.source}${nt.source}${ot.source}?${it.source}${at.source}$`,"i"),ft=e=>{try{if(!(e==null?void 0:e.match(dt)))return!1;const n=new URL(e).hostname;return n!=null&&n.startsWith("www.")?((n==null?void 0:n.match(/\./g))||[]).length>=2:((n==null?void 0:n.match(/\./g))||[]).length>=1}catch{return!1}},Q=e=>ft(e)?[ct,lt,pt,ut].some(s=>s.test(e)):!1,ht=async e=>{const r="add_node",s={};s.media_url=e.source,s.content_type="audio_video";const n=await de.post(`/${r}`,JSON.stringify(s));if(n.error){const{message:o}=n.error;throw new Error(o)}return n},xt=()=>{const[e,r]=a.useState(""),[s,n]=a.useState(!1),[o,p]=a.useState(""),[f,l]=a.useState([]),{setRunningProjectId:c}=D(d=>d),{setSelectedEpisodeId:i,setSelectedEpisodeLink:h}=N(d=>d),{setSchemas:m}=K(d=>d),g=d=>d.nodes.filter(u=>{var v;return u.node_type.toLowerCase()==="episode"&&((v=u.properties)==null?void 0:v.date)}).slice(0,3);a.useEffect(()=>{(async()=>{try{const u=await pe(),v=g(u);l(v);const R=await ue();m(R.schemas.filter(y=>!y.is_deleted))}catch(u){console.error("Error fetching schema:",u)}})()},[m]);const w=d=>{const{value:u}=d.target;r(u),n(u!==""&&!Q(u))},j=async d=>{const u=d||e;if(Q(u))try{const v=await ht({source:u});v.data.project_id&&c(v.data.project_id),v.data.ref_id&&(i(v.data.ref_id),h(u))}catch(v){let R=Y;if((v==null?void 0:v.status)===400){const y=await v.json();R=y.errorCode||(y==null?void 0:y.status)||Y,y.data.ref_id&&(i(y.data.ref_id),h(u))}else v instanceof Error&&(R=v.message);p(String(R))}};return t.jsxs(mt,{children:[t.jsx(gt,{children:"Ideas have shapes"}),t.jsxs(wt,{children:[t.jsx(yt,{error:s,onChange:w,onKeyDown:d=>d.key==="Enter"&&j(),placeholder:"Paste podcast or video link",value:e}),t.jsx(jt,{error:s,onClick:s?void 0:()=>j(),children:t.jsx(qe,{})})]}),o&&t.jsx("div",{children:o}),t.jsx(bt,{children:f.map(d=>{var u,v;return t.jsx(Ye,{imageUrl:((u=d==null?void 0:d.properties)==null?void 0:u.image_url)||"",onClick:()=>{var R;return j((R=d==null?void 0:d.properties)==null?void 0:R.source_link)},subtitle:"",title:((v=d==null?void 0:d.properties)==null?void 0:v.episode_title)||""},d==null?void 0:d.ref_id)})})]})},mt=x(_)`
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
`,gt=x(_)`
  color: ${C.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,yt=x.input`
  width: 100%;
  max-width: 648px;
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
`,wt=x.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`,jt=x.div`
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
`,bt=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,re=a.memo(()=>{const{isPlaying:e,playerRef:r}=H(p=>p),s=()=>{if(r){const p=r.getCurrentTime()-15;r.seekTo(p,"seconds")}},n=()=>{if(r){const p=r.getCurrentTime()+15;r.seekTo(p,"seconds")}},o=()=>{if(r){if(e){r.getInternalPlayer().pauseVideo();return}r.getInternalPlayer().playVideo()}};return t.jsxs(Ct,{children:[t.jsx(St,{onClick:s,children:t.jsx("img",{alt:"",src:"RewindIcon.svg"})}),t.jsx(vt,{"data-testid":"play-pause-button",onClick:o,size:"small",children:e?t.jsx(me,{"data-testid":"pause-icon"}):t.jsx(ge,{"data-testid":"play-icon"})}),t.jsx(_t,{onClick:n,children:t.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]})});re.displayName="Controls";const Ct=x(_).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,vt=x(ye)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,St=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,_t=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,se=a.memo(({type:e,left:r,img:s})=>{var c,i;const[n]=K(h=>[h.normalizedSchemasByType]),o=(c=n[e])==null?void 0:c.primary_color,p=(i=n[e])==null?void 0:i.icon,f=p?`svg-icons/${p}.svg`:"",l={iconStart:s||f,color:o??C.THING};return t.jsx(Tt,{style:{left:`${r}%`},children:t.jsx(ne,{...l,label:e})})});se.displayName="Marker";const ne=a.memo(({iconStart:e,color:r,label:s})=>t.jsx(Et,{color:r,children:e&&t.jsx("img",{alt:s,className:"badge__img",src:e})}));ne.displayName="Badge";const Et=x(_).attrs({direction:"row"})`
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
`,Tt=x.div`
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
`,oe=a.memo(({markers:e,duration:r})=>t.jsx(t.Fragment,{children:e.map(s=>{var f;const n=((s==null?void 0:s.start)||0)/r*100,o=(s==null?void 0:s.node_type)||"",p=((f=s==null?void 0:s.properties)==null?void 0:f.image_url)||"";return t.jsx(se,{img:p,left:n,type:o},s.ref_id)})}));oe.displayName="Markers";const Rt=({duration:e,markers:r,handleProgressChange:s,playingTIme:n})=>{const o=10/e*100;return t.jsxs(Pt,{children:[t.jsx($t,{max:e,onChange:s,value:n,width:o}),t.jsx(oe,{duration:e,markers:r})]})},Pt=x(_)`
  position: relative;
  flex: 1 1 100%;
`,$t=x(Se)`
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
      width: ${({width:e})=>`${e}%`};
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
`,zt=({markers:e})=>{const{playingNode:r,playerRef:s}=H(c=>c),[n,o]=a.useState(0),p=r,f=a.useCallback((c,i)=>{const h=Array.isArray(i)?i[0]:i;s&&s.seekTo(h,"seconds")},[s]);a.useEffect(()=>{const c=setInterval(()=>{if(s&&o){const i=s.getCurrentTime();o(i)}},500);return()=>clearInterval(c)},[s,o]);const l=(s==null?void 0:s.getDuration())||0;return p?t.jsxs(It,{children:[t.jsx(re,{}),t.jsx(Rt,{duration:l,handleProgressChange:f,markers:e,playingTIme:n})]}):null},It=x(_).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${C.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,Mt=({sourcePosition:e,targetPosition:r,color:s="white",arrowSize:n=1,label:o="label"})=>{const{points:p,textPosition:f}=a.useMemo(()=>{const l=new M(e.x,e.y,e.z),c=new M(r.x,r.y,r.z),i=new M().subVectors(c,l).normalize(),h=new M().addVectors(l,c).multiplyScalar(.5),m=new M().copy(i).multiplyScalar(-n).applyAxisAngle(new M(0,0,1),Math.PI/6),g=new M().copy(i).multiplyScalar(-n).applyAxisAngle(new M(0,0,1),-Math.PI/6);return{points:[l,c,c.clone(),c.clone().add(m),c.clone(),c.clone().add(g)],textPosition:h}},[e,r,n]);return t.jsxs(t.Fragment,{children:[t.jsxs("line",{children:[t.jsx("bufferGeometry",{children:t.jsx("bufferAttribute",{array:new Float32Array(p.flatMap(l=>[l.x,l.y,l.z])),attach:"attributes-position",count:p.length,itemSize:3})}),t.jsx("lineBasicMaterial",{color:s})]}),o&&t.jsx(Pe,{anchorX:"center",anchorY:"middle",color:s,...$e,position:f,children:o})]})},kt=(e,r,s)=>{const n=new Ae;return n.moveTo(-e/2+s,-r/2),n.lineTo(e/2-s,-r/2),n.quadraticCurveTo(e/2,-r/2,e/2,-r/2+s),n.lineTo(e/2,r/2-s),n.quadraticCurveTo(e/2,r/2,e/2-s,r/2),n.lineTo(-e/2+s,r/2),n.quadraticCurveTo(-e/2,r/2,-e/2,r/2-s),n.lineTo(-e/2,-r/2+s),n.quadraticCurveTo(-e/2,-r/2,-e/2+s,-r/2),n},Wt=({width:e,height:r,radius:s,color:n})=>{const o=kt(e,r,s);return t.jsxs("mesh",{children:[t.jsx("shapeGeometry",{args:[o]}),t.jsx("meshBasicMaterial",{color:n,opacity:.9,transparent:!0})]})},Ht=({name:e,url:r,type:s})=>t.jsxs(At,{children:[r&&t.jsx("img",{alt:"",className:"image",src:r}),t.jsx("div",{className:"title",children:e}),t.jsx("div",{className:"badge",children:t.jsx(we,{type:s})}),t.jsx("div",{className:"action-btn",children:t.jsx(je,{})})]}),At=x(_)`
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
`,Z=a.memo(({width:e,height:r,position:s,url:n,onButtonClick:o,name:p,type:f,color:l})=>{const{camera:c}=W();return t.jsxs("group",{position:s,children:[t.jsx(Wt,{color:l,height:r,radius:1.5,width:e}),!1,t.jsx(ze,{position:[-e/2,r/2,0],children:t.jsx(_,{onClick:()=>o(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${e*c.zoom}px`,height:`${r*c.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:t.jsx(Ht,{name:`${p}`,type:f||"",url:n})})})]})});Z.displayName="Node";const J=144/10,G=84/10,Ft=()=>{const e=W(),{dataInitial:r}=D(o=>o),{viewport:s}=e,n=a.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const o=r.links.filter(c=>{var i;return(i=c==null?void 0:c.properties)==null?void 0:i.start}).map(c=>{var i;return{source:c.source,target:c.target,start:(i=c.properties)==null?void 0:i.start}}),p=r.nodes.filter(c=>r.links.some(i=>i.source===c.ref_id||i.target===c.ref_id)).map(c=>{const i=o.find(w=>c.ref_id===w.source||c.ref_id===w.target),h=((i==null?void 0:i.start)||0)*(s.width/10);return{...c,x:h,y:0,z:0,start:(i==null?void 0:i.start)||0}}).filter(c=>c.node_type!=="Clip"&&c.node_type!=="Episode"&&c.node_type!=="Show"),f=p.reduce((c,i)=>{const h=r.links.filter(j=>{var d;return!((d=j==null?void 0:j.properties)!=null&&d.start)&&[j.target,j.source].includes(i.ref_id)}),g=r.nodes.filter(j=>j.node_type!=="Episode"&&j.node_type!=="Clip"&&j.ref_id!==i.ref_id&&h.some(d=>[d.source,d.target].includes(j.ref_id))).map((j,d)=>{const{x:u}=i,v=(Math.floor(d/2)+1)*G*2*(d%2===0?1:-1);return{...j,x:u,y:v,z:0}}),w=h.map(j=>{if(j.source===i.ref_id){const u=g.find(v=>v.ref_id===j.target);return{...j,sourcePositions:{x:i.x,y:i.y,z:i.z},targetPositions:{x:u==null?void 0:u.x,y:u==null?void 0:u.y,z:u==null?void 0:u.z}}}const d=g.find(u=>u.ref_id===j.source);return{...j,sourcePositions:{x:d==null?void 0:d.x,y:d==null?void 0:d.y,z:d==null?void 0:d.z},targetPositions:{x:i.x,y:i.y,z:i.z}}});return c[i.ref_id]={nodes:g,edges:w},c},{}),l=Object.values(f).flatMap(c=>c.edges).filter(c=>{var i;return(i=c==null?void 0:c.sourcePositions)==null?void 0:i.x});return{nodes:p,edges:l,relatedNodes:Object.fromEntries(Object.entries(f).map(([c,i])=>[c,i.nodes]))}},[r,s.width]);return t.jsxs(t.Fragment,{children:[n.nodes.map(o=>{var p,f;return t.jsxs(a.Fragment,{children:[t.jsx(Z,{color:"#353A46",height:G,name:((p=o==null?void 0:o.properties)==null?void 0:p.name)||"",onButtonClick:console.log,position:[o.x,o.y,o.z],type:o.node_type,url:((f=o==null?void 0:o.properties)==null?void 0:f.image_url)||"logo.png",width:J}),(n.relatedNodes[o.ref_id]||[]).map(l=>{var c,i;return t.jsx(Z,{color:"#353A46",height:G,name:((c=l==null?void 0:l.properties)==null?void 0:c.name)||"",onButtonClick:console.log,position:[l.x,l.y,l.z],type:l.node_type,url:((i=l==null?void 0:l.properties)==null?void 0:i.image_url)||"logo.png",width:J},`${l.ref_id}-${o.ref_id}`)})]},o.ref_id)}),n.edges.map((o,p)=>o!=null&&o.sourcePositions&&(o!=null&&o.targetPositions)?t.jsx(Mt,{label:o.edge_type||"",sourcePosition:new M(o.sourcePositions.x,o.sourcePositions.y,o.sourcePositions.z),targetPosition:new M(o.targetPositions.x,o.targetPositions.y,o.targetPositions.z)},`edge-${p}`):null)]})},Lt=()=>{const{camera:e,viewport:r}=W(),s=H(n=>n.playerRef);return te(()=>{if(s){const n=s.getCurrentTime();e.position.x=n*r.width/10}}),null},Bt=()=>{const{camera:e,gl:r}=W();return a.useEffect(()=>{const s=e,n=p=>{p.preventDefault(),p.ctrlKey&&(s.zoom+=p.deltaY*-.1,s.zoom=Math.max(2,Math.min(s.zoom,20))),s.position.x+=p.deltaX*.1,s.updateProjectionMatrix()},o=r.domElement;return o.addEventListener("wheel",n,{passive:!1}),()=>{o.removeEventListener("wheel",n)}},[e,r]),null},ie=a.memo(()=>(console.log("rerender"),t.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:t.jsxs(Ie,{orthographic:!0,children:[t.jsx(Lt,{}),t.jsx(Be,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),t.jsx(Ft,{}),t.jsx(Bt,{})]})})));ie.displayName="Scene";const Dt=(e,r)=>{let s=0,n=e.length-1;for(;s<=n;){const o=Math.floor((s+n)/2),p=e[o],{start:f,end:l}=p.properties;if(r>=f&&r<=l)return p;r<f?n=o-1:s=o+1}return null},Nt=({mediaUrl:e})=>{const r=a.useRef(null),[s,n]=a.useState("ready"),[o,p]=a.useState(!1),{setActiveEdge:f}=be(P=>P),{dataInitial:l}=D(P=>P),{isPlaying:c,playingTime:i,setIsPlaying:h,setPlayingTime:m,setDuration:g,playingNode:w,volume:j,setHasError:d,resetPlayer:u,isSeeking:v,setIsSeeking:R,setPlayerRef:y,playerRef:S}=H(P=>P);a.useEffect(()=>()=>u(),[u]),a.useEffect(()=>{w&&!o&&(m(0),g(0),p(!1))},[w,m,g,p,o]),a.useEffect(()=>{v&&S&&(S.seekTo(i,"seconds"),R(!1))},[i,v,R,S]);const b=()=>{h(!c)},T=a.useCallback(()=>{h(!0)},[h]),k=a.useCallback(()=>{h(!1)},[h]),L=()=>{d(!0),n("error")},B=a.useMemo(()=>((l==null?void 0:l.links.filter(I=>{var F;return(F=I==null?void 0:I.properties)==null?void 0:F.start}))||[]).slice().sort((I,F)=>{var U,q;return((U=I==null?void 0:I.properties)==null?void 0:U.start)-((q=F==null?void 0:F.properties)==null?void 0:q.start)}),[l]),$=P=>{if(!v){const O=P.playedSeconds,I=Dt(B,O);f(I||null)}},z=()=>{S&&n("ready")},E=()=>{b()},A=a.useCallback(P=>{!S&&P&&y(P)},[y,S]);return e?t.jsxs(Gt,{ref:r,tabIndex:0,children:[t.jsx(Zt,{isFullScreen:!1,children:t.jsx(Ce,{size:120,src:(w==null?void 0:w.image_url)||"",type:"clip"})}),t.jsx(Ot,{isFullScreen:!1,onClick:E,children:t.jsx(_e,{ref:A,height:"219px",onBuffer:()=>n("buffering"),onBufferEnd:()=>n("ready"),onError:L,onPause:k,onPlay:T,onProgress:$,onReady:z,playing:c,url:e||"",volume:j,width:"100%"})}),s==="error"?t.jsx(Vt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Gt=x(_)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Zt=x(_)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Vt=x(_)`
  height: 60px;
  padding: 12px 16px;
  color: ${C.primaryRed};
`,Ot=x.div`
  margin: ${e=>e.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Ut=a.memo(Nt),ae=a.forwardRef(({active:e,start:r,text:s},n)=>t.jsxs(Yt,{ref:n,className:fe({active:e}),children:[t.jsx(Xt,{children:r}),t.jsx(Qt,{children:t.jsx("span",{children:s})})]}));ae.displayName="ParagraphComponent";const qt=a.memo(ae,(e,r)=>e.active===r.active),Yt=x(_)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${C.AI_HIGHLIGHT};
  }
`,Xt=x.span`
  background: ${C.lightBlue100};
  color: ${C.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Qt=x.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${C.AI_HIGHLIGHT};
  }
`,Jt=({transcriptString:e})=>{const[r,s]=a.useState(0),[n,o]=a.useState(!1),{playerRef:p}=H(m=>m),f=e.replace(/^["']|["']$/g,""),l=JSON.parse(f),c=a.useRef(null),i=a.useRef(null),h=a.useRef(null);return a.useEffect(()=>{const m=setInterval(()=>{if(p&&s){const g=p.getCurrentTime();s(g)}},100);return()=>clearInterval(m)},[p,s]),a.useEffect(()=>{const m=()=>{o(!0),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{o(!1)},1e3)},g=i.current;return g&&g.addEventListener("scroll",m),()=>{g&&g.removeEventListener("scroll",m)}},[]),a.useEffect(()=>{!n&&c.current&&c.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,n]),t.jsx(Kt,{ref:i,children:l.map(m=>{const g=Ee(m.start),w=m.start<r&&r<m.end;return t.jsx(qt,{ref:w?c:null,active:w,start:g,text:m.text},`${m.start}-${m.end}`)})})},Kt=x.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,er=()=>{const{selectedEpisodeId:e}=N(f=>f),{playerRef:r}=H(f=>f),[s,n]=a.useState(0),[o,p]=a.useState([]);return a.useEffect(()=>{e&&(async()=>{try{const l=await ee(e,0,50,{nodeType:["Clip"],useSubGraph:!1});l!=null&&l.nodes&&p(l.nodes)}catch(l){console.error(l)}})()},[e]),a.useEffect(()=>{const f=setInterval(()=>{if(r&&n){const l=r.getCurrentTime();n(l)}},100);return()=>clearInterval(f)},[r,n]),s?t.jsxs(tr,{children:[t.jsx(_,{className:"heading",children:"Transcript"}),o.map(f=>{var h,m,g;const l=(h=f==null?void 0:f.properties)==null?void 0:h.timestamp,[c,i]=l?l.split("-").map(Number):[0,0];return c<=s*1e3&&s*1e3<i?t.jsx(rr,{direction:"row",children:((m=f.properties)==null?void 0:m.transcript)&&t.jsx(Jt,{transcriptString:(g=f.properties)==null?void 0:g.transcript})},f.ref_id):null})]}):null},tr=x(_)`
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
`,rr=x(_)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,sr=()=>{var s,n;const{selectedEpisodeLink:e,selectedEpisode:r}=N(o=>o);return t.jsxs(nr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsxs(ar,{children:[(r==null?void 0:r.name)&&t.jsx(ir,{children:r==null?void 0:r.name}),((s=r==null?void 0:r.properties)==null?void 0:s.text)&&t.jsx(or,{children:(n=r==null?void 0:r.properties)==null?void 0:n.text}),e&&t.jsx(Ut,{mediaUrl:e})]}),t.jsx(er,{})]})},nr=x(_)(({theme:e})=>({position:"relative",display:"flex",padding:"33px 20px 20px 20px",background:"transparent",width:"100%",[e.breakpoints.up("sm")]:{width:Te}})),or=x(V)`
  font-size: 20px;
  font-weight: Bold;
  line-height: 24.2px;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
  font-weight: 500;
`,ir=x(V)`
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
  margin-bottom: 12px;
`,ar=x(_)(({theme:e})=>({width:"100%",margin:"0 auto 16px",[e.breakpoints.up("sm")]:{width:"390px"}})),vr=()=>{const{addNewNode:e,isFetching:r,runningProjectId:s}=D(y=>y),[n,o]=a.useState(null),[p,f]=a.useState(!1),{selectedEpisodeId:l,setSelectedEpisode:c}=N(y=>y),i=ve(),h=a.useRef(null),m=a.useRef(null),g=a.useRef(null),w=a.useRef(null),j=a.useRef(null),{setPlayingNode:d}=H(y=>y),u=a.useCallback(y=>{r||(w.current||(w.current={nodes:[],edges:[]}),y.edges&&w.current.edges.push(...y.edges),y.nodes&&w.current.nodes.push(...y.nodes),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{if(w.current){const{nodes:S,edges:b}=w.current,T={nodes:S,edges:b};w.current={nodes:[],edges:[]},e(T)}},3e3))},[e,r]),v=a.useCallback(y=>{console.log(y,"uuuuuupdate")},[]);a.useEffect(()=>{l&&(async()=>{try{const S=await ee(l,0,50);o(S);const[b,T]=((S==null?void 0:S.nodes)||[]).reduce(([$,z],E)=>(["Episode","Show"].includes(E.node_type)?$.push(E):z.push(E),[$,z]),[[],[]]),k=new Set(b.map($=>$.ref_id)),[L,B]=((S==null?void 0:S.edges)||[]).reduce(([$,z],E)=>(k.has(E.source)&&k.has(E.target)?$.push(E):z.push(E),[$,z]),[[],[]]);g.current={nodes:T||[],edges:B||[]},u({nodes:b,edges:L})}catch(S){console.error(S)}})()},[l,u]),a.useEffect(()=>{l&&(async()=>{try{const S=await he(l);S&&(d(S),c(S))}catch(S){console.error(S)}})()},[l,d,c]),a.useEffect(()=>(i&&(i.connect(),i.on("connect_error",y=>{console.error("Socket connection error:",y)}),s&&(i.on("new_node_created",u),i.on("node_updated",v))),()=>{i&&i.off()}),[i,v,u,s]),a.useEffect(()=>{const y=S=>{const{playerRef:b}=H.getState();if(m.current!==null){if(S-m.current>2e3){if(g.current&&b){const{nodes:k,edges:L}=g.current,B=b==null?void 0:b.getCurrentTime(),$=L.filter(E=>{var A,P;return((A=E==null?void 0:E.properties)==null?void 0:A.start)!==void 0&&((P=E==null?void 0:E.properties)==null?void 0:P.start)<B}),z=k.filter(E=>$.some(A=>A.target===E.ref_id||A.source===E.ref_id));(z.length||$.length)&&e({nodes:z,edges:$})}m.current=S}}else m.current=S;h.current=requestAnimationFrame(y)};return h.current=requestAnimationFrame(y),()=>{h.current&&cancelAnimationFrame(h.current)}},[g,e]),a.useEffect(()=>{if(s)try{i==null||i.emit("update_project_id",{id:s})}catch(y){console.error(y)}},[s,i]);const R=a.useMemo(()=>{if(n){const y=n.edges.filter(b=>{var T;return(T=b==null?void 0:b.properties)==null?void 0:T.start}).map(b=>{var T;return{source:b.source,target:b.target,start:(T=b.properties)==null?void 0:T.start}});return n.nodes.filter(b=>n.edges.some(T=>T.source===b.ref_id||T.target===b.ref_id)).map(b=>{const T=y.find(k=>b.ref_id===k.source||b.ref_id===k.target);return{...b,start:(T==null?void 0:T.start)||0}}).filter(b=>b&&b.node_type!=="Clip"&&b.node_type!=="Episode"&&b.node_type!=="Show")}return[]},[n]);return t.jsx(_,{direction:"row",style:{height:"100%"},children:l?t.jsxs(t.Fragment,{children:[t.jsxs(_,{children:[t.jsx(_,{onClick:()=>f(!p),children:t.jsx(Ge,{})}),t.jsx(sr,{})]}),t.jsxs(_,{basis:"100%",grow:1,p:16,shrink:1,children:[t.jsx(_,{basis:"100%",grow:1,shrink:1,children:p?t.jsx(ie,{}):t.jsx(xe,{})}),t.jsx(zt,{markers:R})]})]}):t.jsx(xt,{})})};export{vr as MindSet};
