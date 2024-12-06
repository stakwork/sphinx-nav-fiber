import{r as c,y as ce,c as le,j as e,s as h,a as y,F as E,T as D,u as G,d as K,z as pe,A as de,N as Y,D as ue,E as fe,G as ee,H as xe}from"./index-e4b94b0f.js";import{Universe as he}from"./index-6b640815.js";import{b as W,c as ge,d as me,e as we,f as ye,g as je,h as Ce,i as be,a as ve}from"./index-8e221b9e.js";import{S as _e,R as Ee,s as Se,M as Te}from"./index-66dd1a8c.js";import{u as H,a as te,m as Re,T as $e,f as ze,H as Pe,C as Ie}from"./index-34ea1f23.js";import{W as Me,L as X,H as ke,D as He,F as We,V as M,S as Ae}from"./three.module-9c942ca6.js";import"./TextareaAutosize-66e372db.js";import"./index-79b391a0.js";import"./ClipLoader-e2c35846.js";import"./Skeleton-586e5695.js";import"./Stack-299b14f8.js";import"./isPlainObject-2c0ed8ca.js";import"./Typography-29a776da.js";import"./createSvgIcon-98a1dc67.js";import"./index-249f55c5.js";function Be(t,r,s){const{gl:n,size:o,viewport:p}=H(),f=typeof t=="number"?t:o.width*p.dpr,l=typeof r=="number"?r:o.height*p.dpr,a=(typeof t=="number"?s:t)||{},{samples:i=0,depth:x,...g}=a,m=c.useMemo(()=>{let j;return j=new Me(f,l,{minFilter:X,magFilter:X,encoding:n.outputEncoding,type:ke,...g}),x&&(j.depthTexture=new He(f,l,We)),j.samples=i,j},[]);return c.useLayoutEffect(()=>{m.setSize(f,l),i&&(m.samples=i)},[i,m,f,l]),c.useEffect(()=>()=>m.dispose(),[]),m}const Fe=t=>typeof t=="function",Le=c.forwardRef(({envMap:t,resolution:r=256,frames:s=1/0,children:n,makeDefault:o,...p},f)=>{const l=H(({set:d})=>d),a=H(({camera:d})=>d),i=H(({size:d})=>d),x=c.useRef(null),g=c.useRef(null),m=Be(r);c.useLayoutEffect(()=>{p.manual||x.current.updateProjectionMatrix()},[i,p]),c.useLayoutEffect(()=>{x.current.updateProjectionMatrix()}),c.useLayoutEffect(()=>{if(o){const d=a;return l(()=>({camera:x.current})),()=>l(()=>({camera:d}))}},[x,o,l]);let j=0,C=null;const u=Fe(n);return te(d=>{u&&(s===1/0||j<s)&&(g.current.visible=!1,d.gl.setRenderTarget(m),C=d.scene.background,t&&(d.scene.background=t),d.gl.render(d.scene,x.current),d.scene.background=C,d.gl.setRenderTarget(null),g.current.visible=!0,j++)}),c.createElement(c.Fragment,null,c.createElement("orthographicCamera",ce({left:i.width/-2,right:i.width/2,top:i.height/2,bottom:i.height/-2,ref:Re([x,f])},p),!u&&n),c.createElement("group",{ref:g},u&&n(m.texture)))}),De={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},Z=le(t=>({...De,setSelectedEpisodeId:r=>t({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>t({selectedEpisodeLink:r}),setSelectedEpisode:r=>t({selectedEpisode:r})})),Ge=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Ze=()=>e.jsxs(Ne,{children:[e.jsx(Ve,{children:e.jsx(Oe,{children:e.jsx(Ge,{})})}),e.jsx(Ue,{children:"Graph Mindset"})]}),Ne=h(E).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Ve=h(E)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Oe=h.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${y.white};
  }
`,Ue=h(D)`
  width: 127px;
  height: 24px;
  color: ${y.white};
  font-family: Barlow;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.22px;
  margin-left: 16px;
  white-space: nowrap;
`,qe=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Ye=({imageUrl:t,title:r,subtitle:s,onClick:n})=>{const o=r.length>35?`${r.substring(0,32)}...`:r,p=s.length>50?`${s.substring(0,47)}...`:s;return e.jsxs(Xe,{onClick:n,children:[e.jsx(Qe,{children:e.jsx(Je,{alt:r,src:t})}),e.jsxs(Ke,{children:[e.jsx(et,{children:o}),e.jsx(tt,{children:p})]})]})},Xe=h(E)`
  background: ${y.BG1};
  width: 170px;
  height: 200px;
  color: ${y.white};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: ${y.SEEDQUESTION_HOVER};
  }
  &:active {
    background: ${y.SEEDQUESTION};
  }
`,Qe=h.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Je=h.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Ke=h(E)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,et=h.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${y.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,tt=h.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${y.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,rt=/^(https?:\/\/)/,st=/(www\.)?/,nt=/[\w-]+(\.[\w-]+)*/,ot=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,it=/(\/[^\s?]*)?/,at=/(\?[^\s]*)?/,ct=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,lt=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,pt=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,dt=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ut=new RegExp(`${rt.source}${st.source}${nt.source}${ot.source}?${it.source}${at.source}$`,"i"),ft=t=>{try{if(!(t==null?void 0:t.match(ut)))return!1;const n=new URL(t).hostname;return n!=null&&n.startsWith("www.")?((n==null?void 0:n.match(/\./g))||[]).length>=2:((n==null?void 0:n.match(/\./g))||[]).length>=1}catch{return!1}},Q=t=>ft(t)?[ct,lt,pt,dt].some(s=>s.test(t)):!1,xt=async t=>{const r="add_node",s={};s.media_url=t.source,s.content_type="audio_video";const n=await ue.post(`/${r}`,JSON.stringify(s));if(n.error){const{message:o}=n.error;throw new Error(o)}return n},ht=()=>{const[t,r]=c.useState(""),[s,n]=c.useState(!1),[o,p]=c.useState(""),[f,l]=c.useState([]),{setRunningProjectId:a}=G(u=>u),{setSelectedEpisodeId:i,setSelectedEpisodeLink:x}=Z(u=>u),{setSchemas:g}=K(u=>u),m=u=>u.nodes.filter(d=>{var v;return d.node_type.toLowerCase()==="episode"&&((v=d.properties)==null?void 0:v.date)}).slice(0,3);c.useEffect(()=>{(async()=>{try{const d=await pe(),v=m(d);l(v);const R=await de();g(R.schemas.filter(w=>!w.is_deleted))}catch(d){console.error("Error fetching schema:",d)}})()},[g]);const j=u=>{const{value:d}=u.target;r(d),n(d!==""&&!Q(d))},C=async u=>{const d=u||t;if(Q(d))try{const v=await xt({source:d});v.data.project_id&&a(v.data.project_id),v.data.ref_id&&(i(v.data.ref_id),x(d))}catch(v){let R=Y;if((v==null?void 0:v.status)===400){const w=await v.json();R=w.errorCode||(w==null?void 0:w.status)||Y,w.data.ref_id&&(i(w.data.ref_id),x(d))}else v instanceof Error&&(R=v.message);p(String(R))}};return e.jsxs(gt,{children:[e.jsx(mt,{children:"Ideas have shapes"}),e.jsxs(yt,{children:[e.jsx(wt,{error:s,onChange:j,onKeyDown:u=>u.key==="Enter"&&C(),placeholder:"Paste podcast or video link",value:t}),e.jsx(jt,{error:s,onClick:s?void 0:()=>C(),children:e.jsx(qe,{})})]}),o&&e.jsx("div",{children:o}),e.jsx(Ct,{children:f.map(u=>{var d,v;return e.jsx(Ye,{imageUrl:((d=u==null?void 0:u.properties)==null?void 0:d.image_url)||"",onClick:()=>{var R;return C((R=u==null?void 0:u.properties)==null?void 0:R.source_link)},subtitle:"",title:((v=u==null?void 0:u.properties)==null?void 0:v.episode_title)||""},u==null?void 0:u.ref_id)})})]})},gt=h(E)`
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
`,mt=h(E)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,wt=h.input`
  width: 100%;
  max-width: 648px;
  padding: 12px 28px 12px 16px;
  border-radius: 100px;
  border: 1px solid ${t=>t.error?"red":y.DIVIDER_4};
  background: ${y.INPUT_BG};
  color: ${y.white};
  font-family: Barlow;
  font-size: 16px;
  &::placeholder {
    color: ${y.INPUT_PLACEHOLDER};
  }
  &:focus {
    outline: none;
    border-color: ${t=>t.error?"red":y.primaryBlue};
  }
`,yt=h.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`,jt=h.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${y.white};
  font-size: 20px;
  cursor: ${t=>t.error?"not-allowed":"pointer"};
  svg {
    width: 8px;
    height: 17px;
    color: ${y.GRAY6};
  }
`,Ct=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,re=c.memo(()=>{const{isPlaying:t,playerRef:r}=W(p=>p),s=()=>{if(r){const p=r.getCurrentTime()-15;r.seekTo(p,"seconds")}},n=()=>{if(r){const p=r.getCurrentTime()+15;r.seekTo(p,"seconds")}},o=()=>{if(r){if(t){r.getInternalPlayer().pauseVideo();return}r.getInternalPlayer().playVideo()}};return e.jsxs(bt,{children:[e.jsx(_t,{onClick:s,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(vt,{"data-testid":"play-pause-button",onClick:o,size:"small",children:t?e.jsx(ge,{"data-testid":"pause-icon"}):e.jsx(me,{"data-testid":"play-icon"})}),e.jsx(Et,{onClick:n,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]})});re.displayName="Controls";const bt=h(E).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 142px;
  height: 54px;
  background: ${y.BG1};
  border-radius: 40px;
  margin-right: 54px;
  color: ${y.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,vt=h(we)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,_t=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Et=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,se=c.memo(({type:t,left:r,img:s})=>{var a,i;const[n]=K(x=>[x.normalizedSchemasByType]),o=(a=n[t])==null?void 0:a.primary_color,p=(i=n[t])==null?void 0:i.icon,f=p?`svg-icons/${p}.svg`:"",l={iconStart:s||f,color:o??y.THING};return e.jsx(Tt,{style:{left:`${r}%`},children:e.jsx(ne,{...l,label:t})})});se.displayName="Marker";const ne=c.memo(({iconStart:t,color:r,label:s})=>e.jsx(St,{color:r,children:t&&e.jsx("img",{alt:s,className:"badge__img",src:t})}));ne.displayName="Badge";const St=h(E).attrs({direction:"row"})`
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
  background-color: ${y.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,oe=c.memo(({markers:t,duration:r})=>e.jsx(e.Fragment,{children:t.map(s=>{var f;const n=((s==null?void 0:s.start)||0)/r*100,o=(s==null?void 0:s.node_type)||"",p=((f=s==null?void 0:s.properties)==null?void 0:f.image_url)||"";return e.jsx(se,{img:p,left:n,type:o},s.ref_id)})}));oe.displayName="Markers";const Rt=({duration:t,markers:r,handleProgressChange:s,playingTIme:n})=>{const o=10/t*100;return e.jsxs($t,{children:[e.jsx(zt,{max:t,onChange:s,value:n,width:o}),e.jsx(oe,{duration:t,markers:r})]})},$t=h(E)`
  position: relative;
  flex: 1 1 100%;
`,zt=h(_e)`
  && {
    z-index: 20;
    color: ${y.white};
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
      background-color: ${y.primaryBlue};
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
`,Pt=({markers:t})=>{const{playingNode:r,playerRef:s}=W(a=>a),[n,o]=c.useState(0),p=r,f=c.useCallback((a,i)=>{const x=Array.isArray(i)?i[0]:i;s&&s.seekTo(x,"seconds")},[s]);c.useEffect(()=>{const a=setInterval(()=>{if(s&&o){const i=s.getCurrentTime();o(i)}},500);return()=>clearInterval(a)},[s,o]);const l=(s==null?void 0:s.getDuration())||0;return p?e.jsxs(It,{children:[e.jsx(re,{}),e.jsx(Rt,{duration:l,handleProgressChange:f,markers:t,playingTIme:n})]}):null},It=h(E).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${y.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,Mt=({sourcePosition:t,targetPosition:r,color:s="white",arrowSize:n=1,label:o="label"})=>{const{points:p,textPosition:f}=c.useMemo(()=>{const l=new M(t.x,t.y,t.z),a=new M(r.x,r.y,r.z),i=new M().subVectors(a,l).normalize(),x=new M().addVectors(l,a).multiplyScalar(.5),g=new M().copy(i).multiplyScalar(-n).applyAxisAngle(new M(0,0,1),Math.PI/6),m=new M().copy(i).multiplyScalar(-n).applyAxisAngle(new M(0,0,1),-Math.PI/6);return{points:[l,a,a.clone(),a.clone().add(g),a.clone(),a.clone().add(m)],textPosition:x}},[t,r,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(p.flatMap(l=>[l.x,l.y,l.z])),attach:"attributes-position",count:p.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:s})]}),o&&e.jsx($e,{anchorX:"center",anchorY:"middle",color:s,...ze,position:f,children:o})]})},kt=({title:t,description:r})=>e.jsx(Ht,{children:e.jsx(Wt,{children:e.jsxs(At,{children:[e.jsx(Bt,{children:t}),r&&e.jsx(Ft,{children:r})]})})}),Ht=h.div`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Wt=h(E)`
  width: 390px;
  min-height: 100px;
  background: ${y.HOVER_CARD_BG};
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
`,At=h(E)`
  margin-top: 0;
  flex-direction: column;
  gap: 4px;
`,Bt=h(D)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${y.white};
  margin: 0;
`,Ft=h(D)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${y.white};
  margin: 0;
  opacity: 0.8;
`,Lt=(t,r,s)=>{const n=new Ae;return n.moveTo(-t/2+s,-r/2),n.lineTo(t/2-s,-r/2),n.quadraticCurveTo(t/2,-r/2,t/2,-r/2+s),n.lineTo(t/2,r/2-s),n.quadraticCurveTo(t/2,r/2,t/2-s,r/2),n.lineTo(-t/2+s,r/2),n.quadraticCurveTo(-t/2,r/2,-t/2,r/2-s),n.lineTo(-t/2,-r/2+s),n.quadraticCurveTo(-t/2,-r/2,-t/2+s,-r/2),n},Dt=({width:t,height:r,radius:s,color:n})=>{const o=Lt(t,r,s);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[o]}),e.jsx("meshBasicMaterial",{color:n,opacity:.9,transparent:!0})]})},Gt=({name:t,url:r,type:s})=>e.jsxs(Zt,{children:[r&&e.jsx("img",{alt:"",className:"image",src:r}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(ye,{type:s})}),e.jsx("div",{className:"action-btn",children:e.jsx(je,{})})]}),Zt=h(E)`
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
    color: ${y.GRAY6};
    position: absolute;
  }
`,V=c.memo(({width:t,height:r,position:s,url:n,onButtonClick:o,name:p,type:f,color:l,description:a})=>{const{camera:i}=H(),[x,g]=c.useState(!1);return e.jsxs("group",{position:s,children:[e.jsx(Dt,{color:l,height:r,radius:1.5,width:t}),!1,e.jsx(Pe,{position:[-t/2,r/2,0],children:e.jsxs(E,{onClick:()=>o(),onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*i.zoom}px`,height:`${r*i.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:[e.jsx(Gt,{name:`${p}`,type:f||"",url:n}),x&&e.jsx(kt,{description:a,title:p})]})})]})});V.displayName="Node";const J=144/10,N=84/10,Nt=()=>{const t=H(),{dataInitial:r}=G(o=>o),{viewport:s}=t,n=c.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const o=r.links.filter(a=>{var i;return(i=a==null?void 0:a.properties)==null?void 0:i.start}).map(a=>{var i;return{source:a.source,target:a.target,start:(i=a.properties)==null?void 0:i.start}}),p=r.nodes.filter(a=>r.links.some(i=>i.source===a.ref_id||i.target===a.ref_id)).map(a=>{const i=o.find(j=>a.ref_id===j.source||a.ref_id===j.target),x=((i==null?void 0:i.start)||0)*(s.width/10);return{...a,x,y:0,z:0,start:(i==null?void 0:i.start)||0}}).filter(a=>a.node_type!=="Clip"&&a.node_type!=="Episode"&&a.node_type!=="Show"),f=p.reduce((a,i)=>{const x=r.links.filter(C=>{var u;return!((u=C==null?void 0:C.properties)!=null&&u.start)&&[C.target,C.source].includes(i.ref_id)}),m=r.nodes.filter(C=>C.node_type!=="Episode"&&C.node_type!=="Clip"&&C.ref_id!==i.ref_id&&x.some(u=>[u.source,u.target].includes(C.ref_id))).map((C,u)=>{const{x:d}=i,v=(Math.floor(u/2)+1)*N*2*(u%2===0?1:-1);return{...C,x:d,y:v,z:0}}),j=x.map(C=>{if(C.source===i.ref_id){const d=m.find(v=>v.ref_id===C.target);return{...C,sourcePositions:{x:i.x,y:i.y,z:i.z},targetPositions:{x:d==null?void 0:d.x,y:d==null?void 0:d.y,z:d==null?void 0:d.z}}}const u=m.find(d=>d.ref_id===C.source);return{...C,sourcePositions:{x:u==null?void 0:u.x,y:u==null?void 0:u.y,z:u==null?void 0:u.z},targetPositions:{x:i.x,y:i.y,z:i.z}}});return a[i.ref_id]={nodes:m,edges:j},a},{}),l=Object.values(f).flatMap(a=>a.edges).filter(a=>{var i;return(i=a==null?void 0:a.sourcePositions)==null?void 0:i.x});return{nodes:p,edges:l,relatedNodes:Object.fromEntries(Object.entries(f).map(([a,i])=>[a,i.nodes]))}},[r,s.width]);return e.jsxs(e.Fragment,{children:[n.nodes.map(o=>{var p,f,l;return e.jsxs(c.Fragment,{children:[e.jsx(V,{color:"#353A46",description:(p=o==null?void 0:o.properties)==null?void 0:p.description,height:N,name:((f=o==null?void 0:o.properties)==null?void 0:f.name)||"",onButtonClick:console.log,position:[o.x,o.y,o.z],type:o.node_type,url:((l=o==null?void 0:o.properties)==null?void 0:l.image_url)||"logo.png",width:J}),(n.relatedNodes[o.ref_id]||[]).map(a=>{var i,x,g;return e.jsx(V,{color:"#353A46",description:(i=a==null?void 0:a.properties)==null?void 0:i.description,height:N,name:((x=a==null?void 0:a.properties)==null?void 0:x.name)||"",onButtonClick:console.log,position:[a.x,a.y,a.z],type:a.node_type,url:((g=a==null?void 0:a.properties)==null?void 0:g.image_url)||"logo.png",width:J},`${a.ref_id}-${o.ref_id}`)})]},o.ref_id)}),n.edges.map((o,p)=>o!=null&&o.sourcePositions&&(o!=null&&o.targetPositions)?e.jsx(Mt,{label:o.edge_type||"",sourcePosition:new M(o.sourcePositions.x,o.sourcePositions.y,o.sourcePositions.z),targetPosition:new M(o.targetPositions.x,o.targetPositions.y,o.targetPositions.z)},`edge-${p}`):null)]})},Vt=()=>{const{camera:t,viewport:r}=H(),s=W(n=>n.playerRef);return te(()=>{if(s){const n=s.getCurrentTime();t.position.x=n*r.width/10}}),null},Ot=()=>{const{camera:t,gl:r}=H();return c.useEffect(()=>{const s=t,n=p=>{p.preventDefault(),p.ctrlKey&&(s.zoom+=p.deltaY*-.1,s.zoom=Math.max(2,Math.min(s.zoom,20))),s.position.x+=p.deltaX*.1,s.updateProjectionMatrix()},o=r.domElement;return o.addEventListener("wheel",n,{passive:!1}),()=>{o.removeEventListener("wheel",n)}},[t,r]),null},ie=c.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs(Ie,{orthographic:!0,children:[e.jsx(Vt,{}),e.jsx(Le,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(Nt,{}),e.jsx(Ot,{})]})})));ie.displayName="Scene";const Ut=(t,r)=>{let s=0,n=t.length-1;for(;s<=n;){const o=Math.floor((s+n)/2),p=t[o],{start:f,end:l}=p.properties;if(r>=f&&r<=l)return p;r<f?n=o-1:s=o+1}return null},qt=({mediaUrl:t})=>{const r=c.useRef(null),[s,n]=c.useState("ready"),[o,p]=c.useState(!1),{setActiveEdge:f}=Ce($=>$),{dataInitial:l}=G($=>$),{isPlaying:a,playingTime:i,setIsPlaying:x,setPlayingTime:g,setDuration:m,playingNode:j,volume:C,setHasError:u,resetPlayer:d,isSeeking:v,setIsSeeking:R,setPlayerRef:w,playerRef:_}=W($=>$);c.useEffect(()=>()=>d(),[d]),c.useEffect(()=>{j&&!o&&(g(0),m(0),p(!1))},[j,g,m,p,o]),c.useEffect(()=>{v&&_&&(_.seekTo(i,"seconds"),R(!1))},[i,v,R,_]);const b=()=>{x(!a)},T=c.useCallback(()=>{x(!0)},[x]),k=c.useCallback(()=>{x(!1)},[x]),F=()=>{u(!0),n("error")},L=c.useMemo(()=>((l==null?void 0:l.links.filter(I=>{var B;return(B=I==null?void 0:I.properties)==null?void 0:B.start}))||[]).slice().sort((I,B)=>{var U,q;return((U=I==null?void 0:I.properties)==null?void 0:U.start)-((q=B==null?void 0:B.properties)==null?void 0:q.start)}),[l]),z=$=>{if(!v){const O=$.playedSeconds,I=Ut(L,O);f(I||null)}},P=()=>{_&&n("ready")},S=()=>{b()},A=c.useCallback($=>{!_&&$&&w($)},[w,_]);return t?e.jsxs(Yt,{ref:r,tabIndex:0,children:[e.jsx(Xt,{isFullScreen:!1,children:e.jsx(be,{size:120,src:(j==null?void 0:j.image_url)||"",type:"clip"})}),e.jsx(Jt,{isFullScreen:!1,onClick:S,children:e.jsx(Ee,{ref:A,height:"219px",onBuffer:()=>n("buffering"),onBufferEnd:()=>n("ready"),onError:F,onPause:k,onPlay:T,onProgress:z,onReady:P,playing:a,url:t||"",volume:C,width:"100%"})}),s==="error"?e.jsx(Qt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Yt=h(E)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Xt=h(E)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Qt=h(E)`
  height: 60px;
  padding: 12px 16px;
  color: ${y.primaryRed};
`,Jt=h.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Kt=c.memo(qt),ae=c.forwardRef(({active:t,start:r,text:s},n)=>e.jsxs(tr,{ref:n,className:fe({active:t}),children:[e.jsx(rr,{children:r}),e.jsx(sr,{children:e.jsx("span",{children:s})})]}));ae.displayName="ParagraphComponent";const er=c.memo(ae,(t,r)=>t.active===r.active),tr=h(E)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${y.AI_HIGHLIGHT};
  }
`,rr=h.span`
  background: ${y.lightBlue100};
  color: ${y.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,sr=h.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${y.AI_HIGHLIGHT};
  }
`,nr=({transcriptString:t})=>{const[r,s]=c.useState(0),[n,o]=c.useState(!1),{playerRef:p}=W(g=>g),f=t.replace(/^["']|["']$/g,""),l=JSON.parse(f),a=c.useRef(null),i=c.useRef(null),x=c.useRef(null);return c.useEffect(()=>{const g=setInterval(()=>{if(p&&s){const m=p.getCurrentTime();s(m)}},100);return()=>clearInterval(g)},[p,s]),c.useEffect(()=>{const g=()=>{o(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{o(!1)},1e3)},m=i.current;return m&&m.addEventListener("scroll",g),()=>{m&&m.removeEventListener("scroll",g)}},[]),c.useEffect(()=>{!n&&a.current&&a.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,n]),e.jsx(or,{ref:i,children:l.map(g=>{const m=Se(g.start),j=g.start<r&&r<g.end;return e.jsx(er,{ref:j?a:null,active:j,start:m,text:g.text},`${g.start}-${g.end}`)})})},or=h.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,ir=()=>{const{selectedEpisodeId:t}=Z(f=>f),{playerRef:r}=W(f=>f),[s,n]=c.useState(0),[o,p]=c.useState([]);return c.useEffect(()=>{t&&(async()=>{try{const l=await ee(t,0,50,{nodeType:["Clip"],useSubGraph:!1});l!=null&&l.nodes&&p(l.nodes)}catch(l){console.error(l)}})()},[t]),c.useEffect(()=>{const f=setInterval(()=>{if(r&&n){const l=r.getCurrentTime();n(l)}},100);return()=>clearInterval(f)},[r,n]),s?e.jsxs(ar,{children:[e.jsx(E,{className:"heading",children:"Transcript"}),o.map(f=>{var x,g,m;const l=(x=f==null?void 0:f.properties)==null?void 0:x.timestamp,[a,i]=l?l.split("-").map(Number):[0,0];return a<=s*1e3&&s*1e3<i?e.jsx(cr,{direction:"row",children:((g=f.properties)==null?void 0:g.transcript)&&e.jsx(nr,{transcriptString:(m=f.properties)==null?void 0:m.transcript})},f.ref_id):null})]}):null},ar=h(E)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }

  color: ${y.white};
  background: ${y.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
  max-height: 50%;
`,cr=h(E)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,lr=()=>{var s,n;const{selectedEpisodeLink:t,selectedEpisode:r}=Z(o=>o);return e.jsxs(pr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsxs(fr,{children:[(r==null?void 0:r.name)&&e.jsx(ur,{children:r==null?void 0:r.name}),((s=r==null?void 0:r.properties)==null?void 0:s.text)&&e.jsx(dr,{children:(n=r==null?void 0:r.properties)==null?void 0:n.text}),t&&e.jsx(Kt,{mediaUrl:t})]}),e.jsx(ir,{})]})},pr=h(E)(({theme:t})=>({position:"relative",display:"flex",padding:"33px 20px 20px 20px",background:"transparent",width:"100%",[t.breakpoints.up("sm")]:{width:Te}})),dr=h(D)`
  font-size: 20px;
  font-weight: Bold;
  line-height: 24.2px;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
  font-weight: 500;
`,ur=h(D)`
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
  margin-bottom: 12px;
`,fr=h(E)(({theme:t})=>({width:"100%",margin:"0 auto 16px",[t.breakpoints.up("sm")]:{width:"390px"}})),$r=()=>{const{addNewNode:t,isFetching:r,runningProjectId:s}=G(w=>w),[n,o]=c.useState(null),[p,f]=c.useState(!1),{selectedEpisodeId:l,setSelectedEpisode:a}=Z(w=>w),i=ve(),x=c.useRef(null),g=c.useRef(null),m=c.useRef(null),j=c.useRef(null),C=c.useRef(null),{setPlayingNode:u}=W(w=>w),d=c.useCallback(w=>{r||(j.current||(j.current={nodes:[],edges:[]}),w.edges&&j.current.edges.push(...w.edges),w.nodes&&j.current.nodes.push(...w.nodes),C.current&&clearTimeout(C.current),C.current=setTimeout(()=>{if(j.current){const{nodes:_,edges:b}=j.current,T={nodes:_,edges:b};j.current={nodes:[],edges:[]},t(T)}},3e3))},[t,r]),v=c.useCallback(w=>{console.log(w,"uuuuuupdate")},[]);c.useEffect(()=>{l&&(async()=>{try{const _=await ee(l,0,50);o(_);const[b,T]=((_==null?void 0:_.nodes)||[]).reduce(([z,P],S)=>(["Episode","Show","Host","Guest"].includes(S.node_type)?z.push(S):P.push(S),[z,P]),[[],[]]),k=new Set(b.map(z=>z.ref_id)),[F,L]=((_==null?void 0:_.edges)||[]).reduce(([z,P],S)=>(k.has(S.source)&&k.has(S.target)?z.push(S):P.push(S),[z,P]),[[],[]]);m.current={nodes:T||[],edges:L||[]},d({nodes:b,edges:F})}catch(_){console.error(_)}})()},[l,d]),c.useEffect(()=>{l&&(async()=>{try{const _=await xe(l);_&&(u(_),a(_))}catch(_){console.error(_)}})()},[l,u,a]),c.useEffect(()=>(i&&(i.connect(),i.on("connect_error",w=>{console.error("Socket connection error:",w)}),s&&(i.on("new_node_created",d),i.on("node_updated",v))),()=>{i&&i.off()}),[i,v,d,s]),c.useEffect(()=>{const w=_=>{const{playerRef:b}=W.getState();if(g.current!==null){if(_-g.current>2e3){if(m.current&&b){const{nodes:k,edges:F}=m.current,L=b==null?void 0:b.getCurrentTime(),z=F.filter(S=>{var A,$;return((A=S==null?void 0:S.properties)==null?void 0:A.start)!==void 0&&(($=S==null?void 0:S.properties)==null?void 0:$.start)<L}),P=k.filter(S=>z.some(A=>A.target===S.ref_id||A.source===S.ref_id));(P.length||z.length)&&t({nodes:P,edges:z})}g.current=_}}else g.current=_;x.current=requestAnimationFrame(w)};return x.current=requestAnimationFrame(w),()=>{x.current&&cancelAnimationFrame(x.current)}},[m,t]),c.useEffect(()=>{if(s)try{i==null||i.emit("update_project_id",{id:s})}catch(w){console.error(w)}},[s,i]);const R=c.useMemo(()=>{if(n){const w=n.edges.filter(b=>{var T;return(T=b==null?void 0:b.properties)==null?void 0:T.start}).map(b=>{var T;return{source:b.source,target:b.target,start:(T=b.properties)==null?void 0:T.start}});return n.nodes.filter(b=>n.edges.some(T=>T.source===b.ref_id||T.target===b.ref_id)).map(b=>{const T=w.find(k=>b.ref_id===k.source||b.ref_id===k.target);return{...b,start:(T==null?void 0:T.start)||0}}).filter(b=>b&&b.node_type!=="Clip"&&b.node_type!=="Episode"&&b.node_type!=="Show")}return[]},[n]);return e.jsx(E,{direction:"row",style:{height:"100%"},children:l?e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsx(E,{onClick:()=>f(!p),children:e.jsx(Ze,{})}),e.jsx(lr,{})]}),e.jsxs(E,{basis:"100%",grow:1,p:16,shrink:1,children:[e.jsx(E,{basis:"100%",grow:1,shrink:1,children:p?e.jsx(ie,{}):e.jsx(he,{})}),e.jsx(Pt,{markers:R})]})]}):e.jsx(ht,{})})};export{$r as MindSet};
