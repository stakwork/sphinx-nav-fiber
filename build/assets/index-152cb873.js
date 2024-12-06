import{r as c,y as de,c as ue,j as e,s as h,a as j,F as _,T as V,u as D,d as te,z as fe,A as xe,N as Y,D as he,E as ge,G as re,H as me}from"./index-6502785b.js";import{Universe as ye}from"./index-f104c89b.js";import{b as se,c as W,d as we,e as je,f as Ce,g as be,h as ve,i as Ee,a as _e}from"./index-e4d37dbe.js";import{S as Se,R as Te,s as X,M as Re}from"./index-a40552ce.js";import{u as H,a as ne,m as $e,T as Pe,f as ze,H as Ie,C as Me}from"./index-73fbdc56.js";import{W as ke,L as Q,H as He,D as We,F as Ae,V as M,S as Fe}from"./three.module-9c942ca6.js";import"./TextareaAutosize-a343ed23.js";import"./index-0c4fb1ee.js";import"./ClipLoader-2e8a2039.js";import"./Skeleton-e8200c96.js";import"./Stack-72c38e89.js";import"./isPlainObject-886127ee.js";import"./Typography-04aa1062.js";import"./createSvgIcon-6b5253a6.js";import"./index-ac06168d.js";function Be(t,r,s){const{gl:o,size:i,viewport:p}=H(),g=typeof t=="number"?t:i.width*p.dpr,l=typeof r=="number"?r:i.height*p.dpr,n=(typeof t=="number"?s:t)||{},{samples:a=0,depth:f,...x}=n,m=c.useMemo(()=>{let y;return y=new ke(g,l,{minFilter:Q,magFilter:Q,encoding:o.outputEncoding,type:He,...x}),f&&(y.depthTexture=new We(g,l,Ae)),y.samples=a,y},[]);return c.useLayoutEffect(()=>{m.setSize(g,l),a&&(m.samples=a)},[a,m,g,l]),c.useEffect(()=>()=>m.dispose(),[]),m}const Le=t=>typeof t=="function",De=c.forwardRef(({envMap:t,resolution:r=256,frames:s=1/0,children:o,makeDefault:i,...p},g)=>{const l=H(({set:d})=>d),n=H(({camera:d})=>d),a=H(({size:d})=>d),f=c.useRef(null),x=c.useRef(null),m=Be(r);c.useLayoutEffect(()=>{p.manual||f.current.updateProjectionMatrix()},[a,p]),c.useLayoutEffect(()=>{f.current.updateProjectionMatrix()}),c.useLayoutEffect(()=>{if(i){const d=n;return l(()=>({camera:f.current})),()=>l(()=>({camera:d}))}},[f,i,l]);let y=0,C=null;const u=Le(o);return ne(d=>{u&&(s===1/0||y<s)&&(x.current.visible=!1,d.gl.setRenderTarget(m),C=d.scene.background,t&&(d.scene.background=t),d.gl.render(d.scene,f.current),d.scene.background=C,d.gl.setRenderTarget(null),x.current.visible=!0,y++)}),c.createElement(c.Fragment,null,c.createElement("orthographicCamera",de({left:a.width/-2,right:a.width/2,top:a.height/2,bottom:a.height/-2,ref:$e([f,g])},p),!u&&o),c.createElement("group",{ref:x},u&&o(m.texture)))}),Ge={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},G=ue(t=>({...Ge,setSelectedEpisodeId:r=>t({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>t({selectedEpisodeLink:r}),setSelectedEpisode:r=>t({selectedEpisode:r})})),Ze=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Ne=()=>e.jsxs(Ve,{children:[e.jsx(Oe,{children:e.jsx(Ue,{children:e.jsx(Ze,{})})}),e.jsx(qe,{children:"Graph Mindset"})]}),Ve=h(_).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Oe=h(_)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ue=h.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${j.white};
  }
`,qe=h(V)`
  width: 127px;
  height: 24px;
  color: ${j.white};
  font-family: Barlow;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.22px;
  margin-left: 16px;
  white-space: nowrap;
`,Ye=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Xe=({imageUrl:t,title:r,subtitle:s,onClick:o})=>{const i=r.length>35?`${r.substring(0,32)}...`:r,p=s.length>50?`${s.substring(0,47)}...`:s;return e.jsxs(Qe,{onClick:o,children:[e.jsx(Je,{children:e.jsx(se,{height:140,src:t,type:"Episode",width:170})}),e.jsxs(Ke,{children:[e.jsx(et,{children:i}),e.jsx(tt,{children:p})]})]})},Qe=h(_)`
  background: ${j.BG1};
  width: 170px;
  height: 200px;
  color: ${j.white};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: ${j.SEEDQUESTION_HOVER};
  }
  &:active {
    background: ${j.SEEDQUESTION};
  }
`,Je=h.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ke=h(_)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,et=h.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${j.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,tt=h.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${j.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,rt=/^(https?:\/\/)/,st=/(www\.)?/,nt=/[\w-]+(\.[\w-]+)*/,ot=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,it=/(\/[^\s?]*)?/,at=/(\?[^\s]*)?/,ct=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,lt=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,pt=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,dt=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ut=new RegExp(`${rt.source}${st.source}${nt.source}${ot.source}?${it.source}${at.source}$`,"i"),ft=t=>{try{if(!(t==null?void 0:t.match(ut)))return!1;const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}catch{return!1}},J=t=>ft(t)?[ct,lt,pt,dt].some(s=>s.test(t)):!1,xt=async t=>{const r="add_node",s={};s.media_url=t.source,s.content_type="audio_video";const o=await he.post(`/${r}`,JSON.stringify(s));if(o.error){const{message:i}=o.error;throw new Error(i)}return o},ht=()=>{const[t,r]=c.useState(""),[s,o]=c.useState(!1),[i,p]=c.useState(""),[g,l]=c.useState([]),{setRunningProjectId:n}=D(u=>u),{setSelectedEpisodeId:a,setSelectedEpisodeLink:f}=G(u=>u),{setSchemas:x}=te(u=>u),m=u=>u.nodes.filter(d=>{var v;return d.node_type.toLowerCase()==="episode"&&((v=d.properties)==null?void 0:v.date)}).slice(0,3);c.useEffect(()=>{(async()=>{try{const d=await fe(),v=m(d);l(v);const R=await xe();x(R.schemas.filter(w=>!w.is_deleted))}catch(d){console.error("Error fetching schema:",d)}})()},[x]);const y=u=>{const{value:d}=u.target;r(d),o(d!==""&&!J(d))},C=async u=>{const d=u||t;if(J(d))try{const v=await xt({source:d});v.data.project_id&&n(v.data.project_id),v.data.ref_id&&(a(v.data.ref_id),f(d))}catch(v){let R=Y;if((v==null?void 0:v.status)===400){const w=await v.json();R=w.errorCode||(w==null?void 0:w.status)||Y,w.data.ref_id&&(a(w.data.ref_id),f(d))}else v instanceof Error&&(R=v.message);p(String(R))}};return e.jsxs(gt,{children:[e.jsx(mt,{children:"Ideas have shapes"}),e.jsxs(wt,{children:[e.jsx(yt,{error:s,onChange:y,onKeyDown:u=>u.key==="Enter"&&C(),placeholder:"Paste podcast or video link",value:t}),e.jsx(jt,{error:s,onClick:s?void 0:()=>C(),children:e.jsx(Ye,{})})]}),i&&e.jsx("div",{children:i}),e.jsx(Ct,{children:g.map(u=>{var d,v;return e.jsx(Xe,{imageUrl:((d=u==null?void 0:u.properties)==null?void 0:d.image_url)||"",onClick:()=>{var R;return C((R=u==null?void 0:u.properties)==null?void 0:R.source_link)},subtitle:"",title:((v=u==null?void 0:u.properties)==null?void 0:v.episode_title)||""},u==null?void 0:u.ref_id)})})]})},gt=h(_)`
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
`,mt=h(_)`
  color: ${j.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,yt=h.input`
  width: 100%;
  max-width: 648px;
  padding: 12px 28px 12px 16px;
  border-radius: 100px;
  border: 1px solid ${t=>t.error?"red":j.DIVIDER_4};
  background: ${j.INPUT_BG};
  color: ${j.white};
  font-family: Barlow;
  font-size: 16px;
  &::placeholder {
    color: ${j.INPUT_PLACEHOLDER};
  }
  &:focus {
    outline: none;
    border-color: ${t=>t.error?"red":j.primaryBlue};
  }
`,wt=h.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`,jt=h.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${j.white};
  font-size: 20px;
  cursor: ${t=>t.error?"not-allowed":"pointer"};
  svg {
    width: 8px;
    height: 17px;
    color: ${j.GRAY6};
  }
`,Ct=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,oe=c.memo(()=>{const{isPlaying:t,playerRef:r}=W(p=>p),s=()=>{if(r){const p=r.getCurrentTime()-15;r.seekTo(p,"seconds")}},o=()=>{if(r){const p=r.getCurrentTime()+15;r.seekTo(p,"seconds")}},i=()=>{if(r){if(t){r.getInternalPlayer().pauseVideo();return}r.getInternalPlayer().playVideo()}};return e.jsxs(bt,{children:[e.jsx(Et,{onClick:s,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(vt,{"data-testid":"play-pause-button",onClick:i,size:"small",children:t?e.jsx(we,{"data-testid":"pause-icon"}):e.jsx(je,{"data-testid":"play-icon"})}),e.jsx(_t,{onClick:o,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]})});oe.displayName="Controls";const bt=h(_).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 142px;
  height: 54px;
  background: ${j.BG1};
  border-radius: 40px;
  margin-right: 54px;
  color: ${j.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,vt=h(Ce)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Et=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,_t=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,ie=c.memo(({type:t,left:r,img:s})=>{var n,a;const[o]=te(f=>[f.normalizedSchemasByType]),i=(n=o[t])==null?void 0:n.primary_color,p=(a=o[t])==null?void 0:a.icon,g=p?`svg-icons/${p}.svg`:"",l={iconStart:s||g,color:i??j.THING};return e.jsx(Tt,{style:{left:`${r}%`},children:e.jsx(ae,{...l,label:t})})});ie.displayName="Marker";const ae=c.memo(({iconStart:t,color:r,label:s})=>e.jsx(St,{color:r,children:t&&e.jsx("img",{alt:s,className:"badge__img",src:t})}));ae.displayName="Badge";const St=h(_).attrs({direction:"row"})`
  cursor: pointer;
  background: ${({color:t})=>t};
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  .badge__img {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }
`,Tt=h.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${j.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,ce=c.memo(({markers:t,duration:r})=>e.jsx(e.Fragment,{children:t.map(s=>{var g;const o=((s==null?void 0:s.start)||0)/r*100,i=(s==null?void 0:s.node_type)||"",p=((g=s==null?void 0:s.properties)==null?void 0:g.image_url)||"";return e.jsx(ie,{img:p,left:o,type:i},s.ref_id)})}));ce.displayName="Markers";const Rt=({duration:t,markers:r,handleProgressChange:s,playingTIme:o})=>{const i=10/t*100;return e.jsxs($t,{children:[e.jsx(Pt,{max:t,onChange:s,value:o,width:i}),e.jsx(ce,{duration:t,markers:r})]})},$t=h(_)`
  position: relative;
  flex: 1 1 100%;
`,Pt=h(Se)`
  && {
    z-index: 20;
    color: ${j.white};
    height: 3px;
    width: calc(100% - 12px);
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: ${({width:t})=>`${t}%`};
      height: 54px;
      border-radius: 8px;
      background-color: ${j.primaryBlue};
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
`,zt=({markers:t})=>{const{playingNode:r,playerRef:s}=W(n=>n),[o,i]=c.useState(0),p=r,g=c.useCallback((n,a)=>{const f=Array.isArray(a)?a[0]:a;s&&s.seekTo(f,"seconds")},[s]);c.useEffect(()=>{const n=setInterval(()=>{if(s&&i){const a=s.getCurrentTime();i(a)}},500);return()=>clearInterval(n)},[s,i]);const l=(s==null?void 0:s.getDuration())||0;return p?e.jsxs(It,{children:[e.jsx(oe,{}),e.jsx(Rt,{duration:l,handleProgressChange:g,markers:t,playingTIme:o})]}):null},It=h(_).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${j.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,Mt=({sourcePosition:t,targetPosition:r,color:s="white",arrowSize:o=1,label:i="label"})=>{const{points:p,textPosition:g}=c.useMemo(()=>{const l=new M(t.x,t.y,t.z),n=new M(r.x,r.y,r.z),a=new M().subVectors(n,l).normalize(),f=new M().addVectors(l,n).multiplyScalar(.5),x=new M().copy(a).multiplyScalar(-o).applyAxisAngle(new M(0,0,1),Math.PI/6),m=new M().copy(a).multiplyScalar(-o).applyAxisAngle(new M(0,0,1),-Math.PI/6);return{points:[l,n,n.clone(),n.clone().add(x),n.clone(),n.clone().add(m)],textPosition:f}},[t,r,o]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(p.flatMap(l=>[l.x,l.y,l.z])),attach:"attributes-position",count:p.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:s})]}),i&&e.jsx(Pe,{anchorX:"center",anchorY:"middle",color:s,...ze,position:g,children:i})]})},kt=({title:t,description:r})=>e.jsx(Ht,{children:e.jsx(Wt,{children:e.jsxs(At,{children:[e.jsx(Ft,{children:t}),r&&e.jsx(Bt,{children:r})]})})}),Ht=h.div`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Wt=h(_)`
  width: 390px;
  min-height: 100px;
  background: ${j.HOVER_CARD_BG};
  border-radius: 8px;
  padding: 15px;
  padding-bottom: 3px !important;
  position: fixed;
  flex-direction: column;
  gap: 4px;
  top: calc(-230px);
  left: 100%;
  z-index: 1000;
  margin-left: 450px;
  pointer-events: auto;
`,At=h(_)`
  margin-top: 0;
  flex-direction: column;
  gap: 4px;
`,Ft=h(V)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${j.white};
  margin: 0;
`,Bt=h(V)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${j.white};
  margin: 0;
  opacity: 0.8;
`,Lt=(t,r,s)=>{const o=new Fe;return o.moveTo(-t/2+s,-r/2),o.lineTo(t/2-s,-r/2),o.quadraticCurveTo(t/2,-r/2,t/2,-r/2+s),o.lineTo(t/2,r/2-s),o.quadraticCurveTo(t/2,r/2,t/2-s,r/2),o.lineTo(-t/2+s,r/2),o.quadraticCurveTo(-t/2,r/2,-t/2,r/2-s),o.lineTo(-t/2,-r/2+s),o.quadraticCurveTo(-t/2,-r/2,-t/2+s,-r/2),o},Dt=({width:t,height:r,radius:s,color:o})=>{const i=Lt(t,r,s);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[i]}),e.jsx("meshBasicMaterial",{color:o,opacity:.9,transparent:!0})]})},Gt=({name:t,url:r,type:s})=>e.jsxs(Zt,{children:[r&&e.jsx("img",{alt:"",className:"image",src:r}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(be,{type:s})}),e.jsx("div",{className:"action-btn",children:e.jsx(ve,{})})]}),Zt=h(_)`
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
    color: ${j.GRAY6};
    position: absolute;
  }
`,N=c.memo(({width:t,height:r,position:s,url:o,onButtonClick:i,name:p,type:g,color:l,description:n})=>{const{camera:a}=H(),[f,x]=c.useState(!1);return e.jsxs("group",{position:s,children:[e.jsx(Dt,{color:l,height:r,radius:1.5,width:t}),!1,e.jsx(Ie,{position:[-t/2,r/2,0],children:e.jsxs(_,{onClick:()=>i(),onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*a.zoom}px`,height:`${r*a.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:[e.jsx(Gt,{name:`${p}`,type:g||"",url:o}),f&&e.jsx(kt,{description:n,title:p})]})})]})});N.displayName="Node";const K=144/10,Z=84/10,Nt=()=>{const t=H(),{dataInitial:r}=D(i=>i),{viewport:s}=t,o=c.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const i=r.links.filter(n=>{var a;return(a=n==null?void 0:n.properties)==null?void 0:a.start}).map(n=>{var a;return{source:n.source,target:n.target,start:(a=n.properties)==null?void 0:a.start}}),p=r.nodes.filter(n=>r.links.some(a=>a.source===n.ref_id||a.target===n.ref_id)).map(n=>{const a=i.find(y=>n.ref_id===y.source||n.ref_id===y.target),f=((a==null?void 0:a.start)||0)*(s.width/10);return{...n,x:f,y:0,z:0,start:(a==null?void 0:a.start)||0}}).filter(n=>n.node_type!=="Clip"&&n.node_type!=="Episode"&&n.node_type!=="Show"),g=p.reduce((n,a)=>{const f=r.links.filter(C=>{var u;return!((u=C==null?void 0:C.properties)!=null&&u.start)&&[C.target,C.source].includes(a.ref_id)}),m=r.nodes.filter(C=>C.node_type!=="Episode"&&C.node_type!=="Clip"&&C.ref_id!==a.ref_id&&f.some(u=>[u.source,u.target].includes(C.ref_id))).map((C,u)=>{const{x:d}=a,v=(Math.floor(u/2)+1)*Z*2*(u%2===0?1:-1);return{...C,x:d,y:v,z:0}}),y=f.map(C=>{if(C.source===a.ref_id){const d=m.find(v=>v.ref_id===C.target);return{...C,sourcePositions:{x:a.x,y:a.y,z:a.z},targetPositions:{x:d==null?void 0:d.x,y:d==null?void 0:d.y,z:d==null?void 0:d.z}}}const u=m.find(d=>d.ref_id===C.source);return{...C,sourcePositions:{x:u==null?void 0:u.x,y:u==null?void 0:u.y,z:u==null?void 0:u.z},targetPositions:{x:a.x,y:a.y,z:a.z}}});return n[a.ref_id]={nodes:m,edges:y},n},{}),l=Object.values(g).flatMap(n=>n.edges).filter(n=>{var a;return(a=n==null?void 0:n.sourcePositions)==null?void 0:a.x});return{nodes:p,edges:l,relatedNodes:Object.fromEntries(Object.entries(g).map(([n,a])=>[n,a.nodes]))}},[r,s.width]);return e.jsxs(e.Fragment,{children:[o.nodes.map(i=>{var p,g,l;return e.jsxs(c.Fragment,{children:[e.jsx(N,{color:"#353A46",description:(p=i==null?void 0:i.properties)==null?void 0:p.description,height:Z,name:((g=i==null?void 0:i.properties)==null?void 0:g.name)||"",onButtonClick:console.log,position:[i.x,i.y,i.z],type:i.node_type,url:((l=i==null?void 0:i.properties)==null?void 0:l.image_url)||"logo.png",width:K}),(o.relatedNodes[i.ref_id]||[]).map(n=>{var a,f,x;return e.jsx(N,{color:"#353A46",description:(a=n==null?void 0:n.properties)==null?void 0:a.description,height:Z,name:((f=n==null?void 0:n.properties)==null?void 0:f.name)||"",onButtonClick:console.log,position:[n.x,n.y,n.z],type:n.node_type,url:((x=n==null?void 0:n.properties)==null?void 0:x.image_url)||"logo.png",width:K},`${n.ref_id}-${i.ref_id}`)})]},i.ref_id)}),o.edges.map((i,p)=>i!=null&&i.sourcePositions&&(i!=null&&i.targetPositions)?e.jsx(Mt,{label:i.edge_type||"",sourcePosition:new M(i.sourcePositions.x,i.sourcePositions.y,i.sourcePositions.z),targetPosition:new M(i.targetPositions.x,i.targetPositions.y,i.targetPositions.z)},`edge-${p}`):null)]})},Vt=()=>{const{camera:t,viewport:r}=H(),s=W(o=>o.playerRef);return ne(()=>{if(s){const o=s.getCurrentTime();t.position.x=o*r.width/10}}),null},Ot=()=>{const{camera:t,gl:r}=H();return c.useEffect(()=>{const s=t,o=p=>{p.preventDefault(),p.ctrlKey&&(s.zoom+=p.deltaY*-.1,s.zoom=Math.max(2,Math.min(s.zoom,20))),s.position.x+=p.deltaX*.1,s.updateProjectionMatrix()},i=r.domElement;return i.addEventListener("wheel",o,{passive:!1}),()=>{i.removeEventListener("wheel",o)}},[t,r]),null},le=c.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs(Me,{orthographic:!0,children:[e.jsx(Vt,{}),e.jsx(De,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(Nt,{}),e.jsx(Ot,{})]})})));le.displayName="Scene";const Ut=(t,r)=>{let s=0,o=t.length-1;for(;s<=o;){const i=Math.floor((s+o)/2),p=t[i],{start:g,end:l}=p.properties;if(r>=g&&r<=l)return p;r<g?o=i-1:s=i+1}return null},qt=({mediaUrl:t})=>{const r=c.useRef(null),[s,o]=c.useState("ready"),[i,p]=c.useState(!1),{setActiveEdge:g}=Ee($=>$),{dataInitial:l}=D($=>$),{isPlaying:n,playingTime:a,setIsPlaying:f,setPlayingTime:x,setDuration:m,playingNode:y,volume:C,setHasError:u,resetPlayer:d,isSeeking:v,setIsSeeking:R,setPlayerRef:w,playerRef:E}=W($=>$);c.useEffect(()=>()=>d(),[d]),c.useEffect(()=>{y&&!i&&(x(0),m(0),p(!1))},[y,x,m,p,i]),c.useEffect(()=>{v&&E&&(E.seekTo(a,"seconds"),R(!1))},[a,v,R,E]);const b=()=>{f(!n)},T=c.useCallback(()=>{f(!0)},[f]),k=c.useCallback(()=>{f(!1)},[f]),B=()=>{u(!0),o("error")},L=c.useMemo(()=>((l==null?void 0:l.links.filter(I=>{var F;return(F=I==null?void 0:I.properties)==null?void 0:F.start}))||[]).slice().sort((I,F)=>{var U,q;return((U=I==null?void 0:I.properties)==null?void 0:U.start)-((q=F==null?void 0:F.properties)==null?void 0:q.start)}),[l]),P=$=>{if(!v){const O=$.playedSeconds,I=Ut(L,O);g(I||null)}},z=()=>{E&&o("ready")},S=()=>{b()},A=c.useCallback($=>{!E&&$&&w($)},[w,E]);return t?e.jsxs(Yt,{ref:r,tabIndex:0,children:[e.jsx(Xt,{isFullScreen:!1,children:e.jsx(se,{size:120,src:(y==null?void 0:y.image_url)||"",type:"clip"})}),e.jsx(Jt,{isFullScreen:!1,onClick:S,children:e.jsx(Te,{ref:A,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:B,onPause:k,onPlay:T,onProgress:P,onReady:z,playing:n,url:t||"",volume:C,width:"100%"})}),s==="error"?e.jsx(Qt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Yt=h(_)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Xt=h(_)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Qt=h(_)`
  height: 60px;
  padding: 12px 16px;
  color: ${j.primaryRed};
`,Jt=h.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Kt=c.memo(qt),pe=c.forwardRef(({active:t,start:r,text:s},o)=>e.jsxs(er,{ref:o,className:ge({active:t}),children:[e.jsx(tr,{children:r}),e.jsx(rr,{children:e.jsx("span",{children:s})})]}));pe.displayName="ParagraphComponent";const ee=c.memo(pe,(t,r)=>t.active===r.active),er=h(_)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,tr=h.span`
  background: ${j.lightBlue100};
  color: ${j.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,rr=h.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,sr=({transcriptString:t})=>{const[r,s]=c.useState(0),[o,i]=c.useState(!1),{playerRef:p}=W(x=>x),g=t.replace(/^["']|["']$/g,""),l=JSON.parse(g),n=c.useRef(null),a=c.useRef(null),f=c.useRef(null);return c.useEffect(()=>{const x=setInterval(()=>{if(p&&s){const m=p.getCurrentTime();s(m)}},100);return()=>clearInterval(x)},[p,s]),c.useEffect(()=>{const x=()=>{i(!0),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{i(!1)},1e3)},m=a.current;return m&&m.addEventListener("scroll",x),()=>{m&&m.removeEventListener("scroll",x)}},[]),c.useEffect(()=>{!o&&n.current&&n.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,o]),e.jsx(nr,{ref:a,children:l[0].start>r?e.jsx(ee,{active:!1,start:X(l[0].start),text:l[0].text}):e.jsx(e.Fragment,{children:l.map(x=>{const m=X(x.start),y=x.start<r&&r<x.end;return x.start<=r+5?e.jsx(ee,{ref:y?n:null,active:y,start:m,text:x.text},`${x.start}-${x.end}`):null})})})},nr=h.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,or=({name:t})=>{const{selectedEpisodeId:r}=G(l=>l),{playerRef:s}=W(l=>l),[o,i]=c.useState(0),[p,g]=c.useState([]);return c.useEffect(()=>{r&&(async()=>{try{const n=await re(r,0,50,{nodeType:["Clip"],useSubGraph:!1});n!=null&&n.nodes&&g(n.nodes)}catch(n){console.error(n)}})()},[r]),c.useEffect(()=>{const l=setInterval(()=>{if(s&&i){const n=s.getCurrentTime();i(n)}},100);return()=>clearInterval(l)},[s,i]),e.jsxs(ir,{children:[e.jsx(_,{className:"heading",children:t}),p.map(l=>{var x,m,y;const n=(x=l==null?void 0:l.properties)==null?void 0:x.timestamp,[a,f]=n?n.split("-").map(Number):[0,0];return a<=o*1e3&&o*1e3<f?e.jsx(ar,{direction:"row",children:((m=l.properties)==null?void 0:m.transcript)&&e.jsx(sr,{transcriptString:(y=l.properties)==null?void 0:y.transcript})},l.ref_id):null})]})},ir=h(_)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }

  color: ${j.white};
  background: ${j.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
  max-height: 50%;
`,ar=h(_)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,cr=()=>{const{selectedEpisodeLink:t,selectedEpisode:r}=G(s=>s);return e.jsxs(lr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(pr,{children:t&&e.jsx(Kt,{mediaUrl:t})}),e.jsx(or,{name:(r==null?void 0:r.name)||""})]})},lr=h(_)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 20px 20px",background:"transparent",width:"100%",[t.breakpoints.up("sm")]:{width:Re}})),pr=h(_)(({theme:t})=>({width:"100%",margin:"0 auto 16px",[t.breakpoints.up("sm")]:{width:"390px"}})),Sr=()=>{const{addNewNode:t,isFetching:r,runningProjectId:s}=D(w=>w),[o,i]=c.useState(null),[p,g]=c.useState(!1),{selectedEpisodeId:l,setSelectedEpisode:n}=G(w=>w),a=_e(),f=c.useRef(null),x=c.useRef(null),m=c.useRef(null),y=c.useRef(null),C=c.useRef(null),{setPlayingNode:u}=W(w=>w),d=c.useCallback(w=>{r||(y.current||(y.current={nodes:[],edges:[]}),w.edges&&y.current.edges.push(...w.edges),w.nodes&&y.current.nodes.push(...w.nodes),C.current&&clearTimeout(C.current),C.current=setTimeout(()=>{if(y.current){const{nodes:E,edges:b}=y.current,T={nodes:E,edges:b};y.current={nodes:[],edges:[]},t(T)}},3e3))},[t,r]),v=c.useCallback(w=>{console.log(w,"uuuuuupdate")},[]);c.useEffect(()=>{l&&(async()=>{try{const E=await re(l,0,50);i(E);const[b,T]=((E==null?void 0:E.nodes)||[]).reduce(([P,z],S)=>(["Episode","Show","Host","Guest"].includes(S.node_type)?P.push(S):z.push(S),[P,z]),[[],[]]),k=new Set(b.map(P=>P.ref_id)),[B,L]=((E==null?void 0:E.edges)||[]).reduce(([P,z],S)=>(k.has(S.source)&&k.has(S.target)?P.push(S):z.push(S),[P,z]),[[],[]]);m.current={nodes:T||[],edges:L||[]},d({nodes:b,edges:B})}catch(E){console.error(E)}})()},[l,d]),c.useEffect(()=>{l&&(async()=>{try{const E=await me(l);E&&(u(E),n(E))}catch(E){console.error(E)}})()},[l,u,n]),c.useEffect(()=>(a&&(a.connect(),a.on("connect_error",w=>{console.error("Socket connection error:",w)}),s&&(a.on("new_node_created",d),a.on("node_updated",v))),()=>{a&&a.off()}),[a,v,d,s]),c.useEffect(()=>{const w=E=>{const{playerRef:b}=W.getState();if(x.current!==null){if(E-x.current>2e3){if(m.current&&b){const{nodes:k,edges:B}=m.current,L=b==null?void 0:b.getCurrentTime(),P=B.filter(S=>{var A,$;return((A=S==null?void 0:S.properties)==null?void 0:A.start)!==void 0&&(($=S==null?void 0:S.properties)==null?void 0:$.start)<L}),z=k.filter(S=>P.some(A=>A.target===S.ref_id||A.source===S.ref_id));(z.length||P.length)&&t({nodes:z,edges:P})}x.current=E}}else x.current=E;f.current=requestAnimationFrame(w)};return f.current=requestAnimationFrame(w),()=>{f.current&&cancelAnimationFrame(f.current)}},[m,t]),c.useEffect(()=>{if(s)try{a==null||a.emit("update_project_id",{id:s})}catch(w){console.error(w)}},[s,a]);const R=c.useMemo(()=>{if(o){const w=o.edges.filter(b=>{var T;return(T=b==null?void 0:b.properties)==null?void 0:T.start}).map(b=>{var T;return{source:b.source,target:b.target,start:(T=b.properties)==null?void 0:T.start}});return o.nodes.filter(b=>o.edges.some(T=>T.source===b.ref_id||T.target===b.ref_id)).map(b=>{const T=w.find(k=>b.ref_id===k.source||b.ref_id===k.target);return{...b,start:(T==null?void 0:T.start)||0}}).filter(b=>b&&b.node_type!=="Clip"&&b.node_type!=="Episode"&&b.node_type!=="Show")}return[]},[o]);return e.jsx(_,{direction:"row",style:{height:"100%"},children:l?e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsx(_,{onClick:()=>g(!p),children:e.jsx(Ne,{})}),e.jsx(cr,{})]}),e.jsxs(_,{basis:"100%",grow:1,p:16,shrink:1,children:[e.jsx(_,{basis:"100%",grow:1,shrink:1,children:p?e.jsx(le,{}):e.jsx(ye,{})}),e.jsx(zt,{markers:R})]})]}):e.jsx(ht,{})})};export{Sr as MindSet};
