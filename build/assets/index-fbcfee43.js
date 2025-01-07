import{r as c,x as xe,c as he,j as e,s as y,a as j,F as C,T as me,u as G,d as re,y as ge,N as J,z as ye,A as we,D as se,E as be}from"./index-b5e93c01.js";import{Universe as je}from"./index-c057bb37.js";import{b as oe,c as k,M as Ce,V as ve,d as _e,e as Se,f as Ee,g as Te,h as ne,a as Ie}from"./index-917fe056.js";import{S as Re,R as Pe,s as K,M as ke}from"./index-7c1ffeb9.js";import{u as L,a as ie,m as $e,T as ze,f as Me,H as Ae,C as Le}from"./index-3e6445db.js";import{W as We,L as Q,H as He,D as Fe,F as Be,V as M,S as De}from"./three.module-8711b969.js";import{T as Ne}from"./index-8253974a.js";import"./index-fc2c1b39.js";import"./TextareaAutosize-02f13d34.js";import"./index-38d95a87.js";import"./ClipLoader-06752306.js";import"./Skeleton-d2dcbb79.js";import"./Stack-21460a19.js";import"./isPlainObject-b679a10a.js";import"./Typography-7454e261.js";import"./createSvgIcon-538c749a.js";import"./index-7ba9ca72.js";function Ge(t,s,r){const{gl:o,size:n,viewport:f}=L(),g=typeof t=="number"?t:n.width*f.dpr,p=typeof s=="number"?s:n.height*f.dpr,a=(typeof t=="number"?r:t)||{},{samples:i=0,depth:u,...x}=a,l=c.useMemo(()=>{let h;return h=new We(g,p,{minFilter:Q,magFilter:Q,encoding:o.outputEncoding,type:He,...x}),u&&(h.depthTexture=new Fe(g,p,Be)),h.samples=i,h},[]);return c.useLayoutEffect(()=>{l.setSize(g,p),i&&(l.samples=i)},[i,l,g,p]),c.useEffect(()=>()=>l.dispose(),[]),l}const Ze=t=>typeof t=="function",Oe=c.forwardRef(({envMap:t,resolution:s=256,frames:r=1/0,children:o,makeDefault:n,...f},g)=>{const p=L(({set:m})=>m),a=L(({camera:m})=>m),i=L(({size:m})=>m),u=c.useRef(null),x=c.useRef(null),l=Ge(s);c.useLayoutEffect(()=>{f.manual||u.current.updateProjectionMatrix()},[i,f]),c.useLayoutEffect(()=>{u.current.updateProjectionMatrix()}),c.useLayoutEffect(()=>{if(n){const m=a;return p(()=>({camera:u.current})),()=>p(()=>({camera:m}))}},[u,n,p]);let h=0,d=null;const w=Ze(o);return ie(m=>{w&&(r===1/0||h<r)&&(x.current.visible=!1,m.gl.setRenderTarget(l),d=m.scene.background,t&&(m.scene.background=t),m.gl.render(m.scene,u.current),m.scene.background=d,m.gl.setRenderTarget(null),x.current.visible=!0,h++)}),c.createElement(c.Fragment,null,c.createElement("orthographicCamera",xe({left:i.width/-2,right:i.width/2,top:i.height/2,bottom:i.height/-2,ref:$e([u,g])},f),!w&&o),c.createElement("group",{ref:x},w&&o(l.texture)))}),Ve={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},Z=he(t=>({...Ve,setSelectedEpisodeId:s=>t({selectedEpisodeId:s}),setSelectedEpisodeLink:s=>t({selectedEpisodeLink:s}),setSelectedEpisode:s=>t({selectedEpisode:s})})),Ye=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),qe=()=>e.jsxs(Ue,{children:[e.jsx(Je,{children:e.jsx(Ke,{children:e.jsx(Ye,{})})}),e.jsx(Qe,{children:"Graph Mindset"})]}),Ue=y(C).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Je=y(C)`
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
    color: ${j.white};
  }
`,Qe=y(me)`
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
`,Xe=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),et=({imageUrl:t,title:s,subtitle:r,onClick:o})=>{const n=s.length>35?`${s.substring(0,32)}...`:s,f=r.length>50?`${r.substring(0,47)}...`:r;return e.jsxs(tt,{onClick:o,children:[e.jsx(rt,{children:e.jsx(oe,{height:140,src:t,type:"Episode",width:170})}),e.jsxs(st,{children:[e.jsx(ot,{children:n}),e.jsx(nt,{children:f})]})]})},tt=y(C)`
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
`,rt=y.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,st=y(C)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,ot=y.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${j.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,nt=y.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${j.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,it=/^(https?:\/\/)/,at=/(www\.)?/,ct=/[\w-]+(\.[\w-]+)*/,lt=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,pt=/(\/[^\s?]*)?/,dt=/(\?[^\s]*)?/,ut=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ft=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,xt=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ht=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,mt=new RegExp(`${it.source}${at.source}${ct.source}${lt.source}?${pt.source}${dt.source}$`,"i"),gt=t=>{try{if(!(t==null?void 0:t.match(mt)))return!1;const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}catch{return!1}},X=t=>gt(t)?[ut,ft,xt,ht].some(r=>r.test(t)):!1,ae=[{date_added_to_graph:1733218679827695e-6,node_type:"Episode",properties:{date:1731888e3,episode_title:"AI Agents and AI Assistants: A Contrast in Function",image_url:"https://i.ytimg.com/vi/IivxYYkJ2DI/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/62110bc0-6b27-4779-9d5e-320eab6fae84/IivxYYkJ2DI.mp3",source_link:"https://www.youtube.com/watch?v=IivxYYkJ2DI",status:"completed"},ref_id:"b8784fb9-efa8-4a25-8a78-e14be96a4387"},{date_added_to_graph:1733323898765796e-6,node_type:"Episode",properties:{date:1733184e3,episode_title:"Joe Rogan Experience #2237 - Mike Benz",image_url:"https://i.ytimg.com/vi_webp/rrJhQpvlkLA/sddefault.webp",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/b4c6220e-7048-431c-80c4-90e56b71bd06/rrJhQpvlkLA.mp3",source_link:"https://www.youtube.com/watch?v=rrJhQpvlkLA",status:"completed"},ref_id:"2e51fdb8-a1f1-4e1f-b9d5-4dbdae00b1a2"},{date_added_to_graph:17326354109931817e-7,node_type:"Episode",properties:{date:1730851200,description:"Exploring the Transformative Potential of Llama, the Open-Source AI Model",episode_title:"Llama: The Open-Source AI Model that's Changing How We Think About AI",image_url:"https://i.ytimg.com/vi/8c2LnKNoSmg/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/a4542523-6b12-4baa-bce7-ed63f2704955/8c2LnKNoSmg.mp3",source_link:"https://www.youtube.com/watch?v=8c2LnKNoSmg",status:"completed"},ref_id:"87f5e4c5-39c2-4773-8208-8c1c4fe4019b"}];console.log(ae);const yt=async t=>{const s="add_node",r={};r.media_url=t.source,r.content_type="audio_video";const o=await ye.post(`/${s}`,JSON.stringify(r));if(o.error){const{message:n}=o.error;throw new Error(n)}return o},wt=()=>{const[t,s]=c.useState(""),[r,o]=c.useState(!1),[n,f]=c.useState(""),{setRunningProjectId:g}=G(l=>l),{setSelectedEpisodeId:p,setSelectedEpisodeLink:a}=Z(l=>l),{setSchemas:i}=re(l=>l);c.useEffect(()=>{(async()=>{try{const h=await ge();i(h.schemas.filter(d=>!d.is_deleted))}catch(h){console.error("Error fetching schema:",h)}})()},[i]);const u=l=>{const{value:h}=l.target;s(h),o(h!==""&&!X(h))},x=async l=>{const h=l||t;if(X(h))try{const d=await yt({source:h});d.data.project_id&&g(d.data.project_id),d.data.ref_id&&(p(d.data.ref_id),a(h))}catch(d){let w=J;if((d==null?void 0:d.status)===400){const m=await d.json();w=m.errorCode||(m==null?void 0:m.status)||J,m.data.ref_id&&(p(m.data.ref_id),a(h))}else d instanceof Error&&(w=d.message);f(String(w))}};return e.jsxs(bt,{children:[e.jsx(jt,{children:"Ideas have shapes"}),e.jsxs(vt,{children:[e.jsx(Ct,{error:r,onChange:u,onKeyDown:l=>l.key==="Enter"&&x(),placeholder:"Paste podcast or video link",value:t}),e.jsx(_t,{error:r,onClick:r?void 0:()=>x(),children:e.jsx(Xe,{})})]}),n&&e.jsx("div",{children:n}),e.jsx(St,{children:ae.map(l=>{var h,d;return e.jsx(et,{imageUrl:((h=l==null?void 0:l.properties)==null?void 0:h.image_url)||"",onClick:()=>{var w;return x((w=l==null?void 0:l.properties)==null?void 0:w.source_link)},subtitle:"",title:((d=l==null?void 0:l.properties)==null?void 0:d.episode_title)||""},l==null?void 0:l.ref_id)})})]})},bt=y(C)`
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
`,jt=y(C)`
  color: ${j.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,Ct=y.input`
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
`,vt=y.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`,_t=y.div`
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
`,St=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,ce=c.memo(()=>{const t=k(d=>d.isPlaying),s=k(d=>d.setIsPlaying),r=k(d=>d.setVolume),o=k(d=>d.setPlaybackSpeed),n=k(d=>d.playbackSpeed),f=k(d=>d.playerRef),[g,p]=c.useState(!1),a=[.5,1,1.5,2],i=()=>{if(f){const d=f.getCurrentTime()-15;f.seekTo(d,"seconds")}},u=()=>{if(f){const d=f.getCurrentTime()+15;f.seekTo(d,"seconds")}},x=()=>{s(!t)},l=()=>{p(!g),r(g?1:0)},h=()=>{const w=(a.indexOf(n)+1)%a.length,m=a[w];if(o(m),f){const I=f.getInternalPlayer();I&&typeof I.playbackRate<"u"&&(I.playbackRate=m)}};return e.jsxs(Et,{children:[e.jsx(Pt,{onClick:l,children:g?e.jsx(Ce,{}):e.jsx(ve,{})}),e.jsx(It,{onClick:i,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(Tt,{"data-testid":"play-pause-button",onClick:x,size:"small",children:t?e.jsx(_e,{"data-testid":"pause-icon"}):e.jsx(Se,{"data-testid":"play-icon"})}),e.jsx(Rt,{onClick:u,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})}),e.jsxs(kt,{onClick:h,children:[n,"x"]})]})});ce.displayName="Controls";const Et=y(C).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${j.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${j.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,Tt=y(Ee)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,It=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Rt=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Pt=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${j.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${j.DROPDOWN_BG};
  }
`,kt=y.button`
  margin-top: 4px;
  background: ${j.BG1};
  color: ${j.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,le=c.memo(({type:t,left:s,img:r})=>{var a,i;const o=re(u=>u.normalizedSchemasByType),n=(a=o[t])==null?void 0:a.primary_color,f=(i=o[t])==null?void 0:i.icon,g=f?`svg-icons/${f}.svg`:"",p={iconStart:r||g,color:n??j.THING};return e.jsx(zt,{style:{left:`${s}%`},children:e.jsx(pe,{...p,label:t})})});le.displayName="Marker";const pe=c.memo(({iconStart:t,color:s,label:r})=>e.jsx($t,{color:s,children:t&&e.jsx("img",{alt:r,className:"badge__img",src:t})}));pe.displayName="Badge";const $t=y(C).attrs({direction:"row"})`
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
`,zt=y.div`
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
`,de=c.memo(({markers:t,duration:s})=>e.jsx(e.Fragment,{children:t.map(r=>{var g;const o=Math.floor(((r==null?void 0:r.start)||0)/s*100),n=(r==null?void 0:r.node_type)||"",f=((g=r==null?void 0:r.properties)==null?void 0:g.image_url)||"";return e.jsx(le,{img:f,left:o,type:n},r.ref_id)})}));de.displayName="Markers";const Mt=({duration:t,markers:s,handleProgressChange:r,playingTIme:o})=>{const n=10/t*100;return e.jsxs(At,{children:[e.jsx(Lt,{max:t,onChange:r,value:o,width:n}),e.jsx(de,{duration:t,markers:s})]})},At=y(C)`
  position: relative;
  flex: 1 1 100%;
`,Lt=y(Re)`
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
`,Wt=({markers:t})=>{const{playingNode:s,playerRef:r}=k(a=>a),[o,n]=c.useState(0),f=s,g=c.useCallback((a,i)=>{const u=Array.isArray(i)?i[0]:i;r&&r.seekTo(u,"seconds")},[r]);c.useEffect(()=>{const a=setInterval(()=>{if(r&&n){const i=r.getCurrentTime();n(i)}},500);return()=>clearInterval(a)},[r,n]);const p=(r==null?void 0:r.getDuration())||0;return f?e.jsxs(Ht,{children:[e.jsx(ce,{}),e.jsx(Mt,{duration:p,handleProgressChange:g,markers:t,playingTIme:o})]}):null},Ht=y(C).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${j.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Ft=({sourcePosition:t,targetPosition:s,color:r="white",arrowSize:o=1,label:n="label"})=>{const{points:f,textPosition:g}=c.useMemo(()=>{const p=new M(t.x,t.y,t.z),a=new M(s.x,s.y,s.z),i=new M().subVectors(a,p).normalize(),u=new M().addVectors(p,a).multiplyScalar(.5),x=new M().copy(i).multiplyScalar(-o).applyAxisAngle(new M(0,0,1),Math.PI/6),l=new M().copy(i).multiplyScalar(-o).applyAxisAngle(new M(0,0,1),-Math.PI/6);return{points:[p,a,a.clone(),a.clone().add(x),a.clone(),a.clone().add(l)],textPosition:u}},[t,s,o]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(f.flatMap(p=>[p.x,p.y,p.z])),attach:"attributes-position",count:f.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:r})]}),n&&e.jsx(ze,{anchorX:"center",anchorY:"middle",color:r,...Me,position:g,children:n})]})},Bt=(t,s,r)=>{const o=new De;return o.moveTo(-t/2+r,-s/2),o.lineTo(t/2-r,-s/2),o.quadraticCurveTo(t/2,-s/2,t/2,-s/2+r),o.lineTo(t/2,s/2-r),o.quadraticCurveTo(t/2,s/2,t/2-r,s/2),o.lineTo(-t/2+r,s/2),o.quadraticCurveTo(-t/2,s/2,-t/2,s/2-r),o.lineTo(-t/2,-s/2+r),o.quadraticCurveTo(-t/2,-s/2,-t/2+r,-s/2),o},Dt=({width:t,height:s,radius:r,color:o})=>{const n=Bt(t,s,r);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[n]}),e.jsx("meshBasicMaterial",{color:o,opacity:.9,transparent:!0})]})},Nt=({name:t,url:s,type:r})=>e.jsxs(Gt,{children:[s&&e.jsx("img",{alt:"",className:"image",src:s}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(Ne,{type:r})}),e.jsx("div",{className:"action-btn",children:e.jsx(Te,{})})]}),Gt=y(C)`
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
`,Y=c.memo(({width:t,height:s,position:r,url:o,onButtonClick:n,name:f,type:g,color:p})=>{const{camera:a}=L();return e.jsxs("group",{position:r,children:[e.jsx(Dt,{color:p,height:s,radius:1.5,width:t}),!1,e.jsx(Ae,{position:[-t/2,s/2,0],children:e.jsx(C,{onClick:()=>n(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*a.zoom}px`,height:`${s*a.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:e.jsx(Nt,{name:`${f}`,type:g||"",url:o})})})]})});Y.displayName="Node";const ee=144/10,V=84/10,Zt=()=>{const t=L(),{dataInitial:s}=G(n=>n),{viewport:r}=t,o=c.useMemo(()=>{if(!s)return{nodes:[],edges:[],relatedNodes:{}};const n=s.links.filter(a=>{var i;return(i=a==null?void 0:a.properties)==null?void 0:i.start}).map(a=>{var i;return{source:a.source,target:a.target,start:(i=a.properties)==null?void 0:i.start}}),f=s.nodes.filter(a=>s.links.some(i=>i.source===a.ref_id||i.target===a.ref_id)).map(a=>{const i=n.find(h=>a.ref_id===h.source||a.ref_id===h.target),u=((i==null?void 0:i.start)||0)*(r.width/10);return{...a,x:u,y:0,z:0,start:(i==null?void 0:i.start)||0}}).filter(a=>a.node_type!=="Clip"&&a.node_type!=="Episode"&&a.node_type!=="Show"),g=f.reduce((a,i)=>{const u=s.links.filter(d=>{var w;return!((w=d==null?void 0:d.properties)!=null&&w.start)&&[d.target,d.source].includes(i.ref_id)}),l=s.nodes.filter(d=>d.node_type!=="Episode"&&d.node_type!=="Clip"&&d.ref_id!==i.ref_id&&u.some(w=>[w.source,w.target].includes(d.ref_id))).map((d,w)=>{const{x:m}=i,I=(Math.floor(w/2)+1)*V*2*(w%2===0?1:-1);return{...d,x:m,y:I,z:0}}),h=u.map(d=>{if(d.source===i.ref_id){const m=l.find(I=>I.ref_id===d.target);return{...d,sourcePositions:{x:i.x,y:i.y,z:i.z},targetPositions:{x:m==null?void 0:m.x,y:m==null?void 0:m.y,z:m==null?void 0:m.z}}}const w=l.find(m=>m.ref_id===d.source);return{...d,sourcePositions:{x:w==null?void 0:w.x,y:w==null?void 0:w.y,z:w==null?void 0:w.z},targetPositions:{x:i.x,y:i.y,z:i.z}}});return a[i.ref_id]={nodes:l,edges:h},a},{}),p=Object.values(g).flatMap(a=>a.edges).filter(a=>{var i;return(i=a==null?void 0:a.sourcePositions)==null?void 0:i.x});return{nodes:f,edges:p,relatedNodes:Object.fromEntries(Object.entries(g).map(([a,i])=>[a,i.nodes]))}},[s,r.width]);return e.jsxs(e.Fragment,{children:[o.nodes.map(n=>{var f,g;return e.jsxs(c.Fragment,{children:[e.jsx(Y,{color:"#353A46",height:V,name:((f=n==null?void 0:n.properties)==null?void 0:f.name)||"",onButtonClick:console.log,position:[n.x,n.y,n.z],type:n.node_type,url:((g=n==null?void 0:n.properties)==null?void 0:g.image_url)||"logo.png",width:ee}),(o.relatedNodes[n.ref_id]||[]).map(p=>{var a,i;return e.jsx(Y,{color:"#353A46",height:V,name:((a=p==null?void 0:p.properties)==null?void 0:a.name)||"",onButtonClick:console.log,position:[p.x,p.y,p.z],type:p.node_type,url:((i=p==null?void 0:p.properties)==null?void 0:i.image_url)||"logo.png",width:ee},`${p.ref_id}-${n.ref_id}`)})]},n.ref_id)}),o.edges.map((n,f)=>n!=null&&n.sourcePositions&&(n!=null&&n.targetPositions)?e.jsx(Ft,{label:n.edge_type||"",sourcePosition:new M(n.sourcePositions.x,n.sourcePositions.y,n.sourcePositions.z),targetPosition:new M(n.targetPositions.x,n.targetPositions.y,n.targetPositions.z)},`edge-${f}`):null)]})},Ot=()=>{const{camera:t,viewport:s}=L(),r=k(o=>o.playerRef);return ie(()=>{if(r){const o=r.getCurrentTime();t.position.x=o*s.width/10}}),null},Vt=()=>{const{camera:t,gl:s}=L();return c.useEffect(()=>{const r=t,o=f=>{f.preventDefault(),f.ctrlKey&&(r.zoom+=f.deltaY*-.1,r.zoom=Math.max(2,Math.min(r.zoom,20))),r.position.x+=f.deltaX*.1,r.updateProjectionMatrix()},n=s.domElement;return n.addEventListener("wheel",o,{passive:!1}),()=>{n.removeEventListener("wheel",o)}},[t,s]),null},ue=c.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs(Le,{orthographic:!0,children:[e.jsx(Ot,{}),e.jsx(Oe,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(Zt,{}),e.jsx(Vt,{})]})})));ue.displayName="Scene";const Yt=(t,s)=>{let r=0,o=t.length-1;for(;r<=o;){const n=Math.floor((r+o)/2),f=t[n],{start:g,end:p}=f.properties;if(s>=g&&s<=p)return f;s<g?o=n-1:r=n+1}return null},qt=({mediaUrl:t})=>{const s=c.useRef(null),[r,o]=c.useState("ready"),[n,f]=c.useState(!1),{setActiveEdge:g}=ne(S=>S),{dataInitial:p}=G(S=>S),{isPlaying:a,playingTime:i,setIsPlaying:u,setPlayingTime:x,setDuration:l,playingNode:h,volume:d,setHasError:w,resetPlayer:m,isSeeking:I,setIsSeeking:v,setPlayerRef:_,playerRef:b,playbackSpeed:E}=k(S=>S);c.useEffect(()=>()=>m(),[m]),c.useEffect(()=>{h&&!n&&(x(0),l(0),f(!1))},[h,x,l,f,n]),c.useEffect(()=>{I&&b&&(b.seekTo(i,"seconds"),v(!1))},[i,I,v,b]);const $=c.useCallback(()=>{u(!a)},[a,u]),D=()=>{w(!0),o("error")},W=c.useCallback(S=>{S.code==="Space"&&(S.preventDefault(),$())},[$]);c.useEffect(()=>(window.addEventListener("keydown",W),()=>{window.removeEventListener("keydown",W)}),[W]);const R=c.useMemo(()=>((p==null?void 0:p.links.filter(z=>{var B;return(B=z==null?void 0:z.properties)==null?void 0:B.start}))||[]).slice().sort((z,B)=>{var q,U;return((q=z==null?void 0:z.properties)==null?void 0:q.start)-((U=B==null?void 0:B.properties)==null?void 0:U.start)}),[p]),A=S=>{if(!I){const N=S.playedSeconds,z=Yt(R,N);g(z||null)}},P=()=>{b&&o("ready")},O=c.useCallback(()=>{a||u(!0)},[u,a]),H=c.useCallback(()=>{a&&u(!1)},[u,a]),F=S=>{S.stopPropagation()},T=c.useCallback(S=>{!b&&S&&_(S)},[_,b]);return t?e.jsxs(Ut,{ref:s,tabIndex:0,children:[e.jsx(Jt,{isFullScreen:!1,children:e.jsx(oe,{size:120,src:(h==null?void 0:h.image_url)||"",type:"clip"})}),e.jsx(Qt,{isFullScreen:!1,onClick:F,children:e.jsx(Pe,{ref:T,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:D,onPause:H,onPlay:O,onProgress:A,onReady:P,playbackRate:E,playing:a,url:t||"",volume:d,width:"100%"})}),r==="error"?e.jsx(Kt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Ut=y(C)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Jt=y(C)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Kt=y(C)`
  height: 60px;
  padding: 12px 16px;
  color: ${j.primaryRed};
`,Qt=y.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Xt=c.memo(qt),fe=c.forwardRef(({active:t,start:s,text:r},o)=>e.jsxs(er,{ref:o,className:we({active:t}),children:[e.jsx(tr,{children:s}),e.jsx(rr,{children:e.jsx("span",{children:r})})]}));fe.displayName="ParagraphComponent";const te=c.memo(fe,(t,s)=>t.active===s.active),er=y(C)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,tr=y.span`
  background: ${j.lightBlue100};
  color: ${j.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,rr=y.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,sr=({transcriptString:t})=>{const[s,r]=c.useState(0),[o,n]=c.useState(!1),{playerRef:f}=k(x=>x),g=t.replace(/^["']|["']$/g,""),p=JSON.parse(g),a=c.useRef(null),i=c.useRef(null),u=c.useRef(null);return c.useEffect(()=>{const x=setInterval(()=>{if(f&&r){const l=f.getCurrentTime();r(l)}},100);return()=>clearInterval(x)},[f,r]),c.useEffect(()=>{const x=()=>{n(!0),u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{n(!1)},1e3)},l=i.current;return l&&l.addEventListener("scroll",x),()=>{l&&l.removeEventListener("scroll",x)}},[]),c.useEffect(()=>{!o&&a.current&&a.current.scrollIntoView({behavior:"smooth",block:"center"})},[s,o]),e.jsx(or,{ref:i,children:p[0].start>s?e.jsx(te,{active:!1,start:K(p[0].start),text:p[0].text}):e.jsx(e.Fragment,{children:p.map(x=>{const l=K(x.start),h=x.start<s&&s<x.end;return x.start<=s+5?e.jsx(te,{ref:h?a:null,active:h,start:l,text:x.text},`${x.start}-${x.end}`):null})})})},or=y.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,nr=({name:t})=>{const{selectedEpisodeId:s}=Z(u=>u),{playerRef:r}=k(u=>u),[o,n]=c.useState(0),[f,g,p]=ne(u=>[u.setActiveNode,u.activeNode,u.simulation]),[a,i]=c.useState([]);return c.useEffect(()=>{s&&(async()=>{try{const x=await se(s,0,50,{nodeType:["Clip"],useSubGraph:!1});x!=null&&x.nodes&&i(x.nodes)}catch(x){console.error(x)}})()},[s]),c.useEffect(()=>{const u=setInterval(()=>{if(r&&n){const x=r.getCurrentTime();n(x)}},100);return()=>clearInterval(u)},[r,n]),c.useEffect(()=>{const u=a.find(x=>{var w;const l=(w=x==null?void 0:x.properties)==null?void 0:w.timestamp,[h,d]=l?l.split("-").map(Number):[0,0];return h<=o&&o<d});if(!g||(u==null?void 0:u.ref_id)!==g.ref_id){const x=((p==null?void 0:p.nodes())||[]).find(l=>l.ref_id===(u==null?void 0:u.ref_id));(x==null?void 0:x.fx)!==void 0&&f(x)}},[g,a,o,f,p]),e.jsxs(ir,{children:[e.jsx(C,{className:"heading",children:t}),a.map(u=>{var d,w,m;const x=(d=u==null?void 0:u.properties)==null?void 0:d.timestamp,[l,h]=x?x.split("-").map(Number):[0,0];return l<=o&&o<h?e.jsx(ar,{direction:"row",children:((w=u.properties)==null?void 0:w.transcript)&&e.jsx(sr,{transcriptString:(m=u.properties)==null?void 0:m.transcript})},u.ref_id):null})]})},ir=y(C)`
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
`,ar=y(C)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,cr=()=>{const{selectedEpisodeLink:t,selectedEpisode:s}=Z(r=>r);return e.jsxs(lr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(pr,{children:t&&e.jsx(Xt,{mediaUrl:t})}),e.jsx(nr,{name:(s==null?void 0:s.name)||""})]})},lr=y(C)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[t.breakpoints.up("sm")]:{width:ke,gap:"10px"}})),pr=y(C)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),$r=()=>{const{addNewNode:t,isFetching:s,runningProjectId:r}=G(v=>v),[o,n]=c.useState(null),[f,g]=c.useState(!1),{selectedEpisodeId:p,setSelectedEpisode:a}=Z(v=>v),i=Ie(),u=c.useRef(null),x=c.useRef(null),l=c.useRef(null),h=c.useRef(null),d=c.useRef(null),{setPlayingNode:w}=k(v=>v),m=c.useCallback(v=>{s||(h.current||(h.current={nodes:[],edges:[]}),v.edges&&h.current.edges.push(...v.edges),v.nodes&&h.current.nodes.push(...v.nodes),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{if(h.current){const{nodes:_,edges:b}=h.current,E={nodes:_,edges:b};h.current={nodes:[],edges:[]},t(E)}},3e3))},[t,s]);c.useEffect(()=>{p&&(async()=>{try{const _=await se(p,0,50);n(_);const[b,E]=((_==null?void 0:_.nodes)||[]).reduce(([R,A],P)=>(["Episode","Show","Host","Guest"].includes(P.node_type)?R.push(P):A.push(P),[R,A]),[[],[]]),$=new Set(b.map(R=>R.ref_id)),[D,W]=((_==null?void 0:_.edges)||[]).reduce(([R,A],P)=>($.has(P.source)&&$.has(P.target)?R.push(P):A.push(P),[R,A]),[[],[]]);l.current={nodes:E||[],edges:W||[]},t({nodes:b,edges:D})}catch(_){console.error(_)}})()},[p,t]),c.useEffect(()=>{p&&(async()=>{try{const _=await be(p);_&&(w(_),a(_))}catch(_){console.error(_)}})()},[p,w,a]),c.useEffect(()=>(i&&(i.connect(),i.on("connect_error",v=>{console.error("Socket connection error:",v)}),r&&i.on("new_node_created",m)),()=>{i&&i.off()}),[i,m,r]),c.useEffect(()=>{const v=_=>{const{playerRef:b}=k.getState();if(x.current!==null){if(_-x.current>1e3){if(l.current&&b){const{nodes:$,edges:D}=l.current,W=b==null?void 0:b.getCurrentTime(),[R,A]=D.reduce(([H,F],T)=>{var S,N;return((S=T==null?void 0:T.properties)==null?void 0:S.start)!==void 0&&((N=T==null?void 0:T.properties)==null?void 0:N.start)<W+1?H.push(T):F.push(T),[H,F]},[[],[]]),[P,O]=$.reduce(([H,F],T)=>(R.some(S=>S.target===T.ref_id||S.source===T.ref_id)?H.push(T):F.push(T),[H,F]),[[],[]]);l.current={nodes:O,edges:A},(P.length||R.length)&&t({nodes:P,edges:R})}x.current=_}}else x.current=_;u.current=requestAnimationFrame(v)};return u.current=requestAnimationFrame(v),()=>{u.current&&cancelAnimationFrame(u.current)}},[l,t]),c.useEffect(()=>{if(r)try{i==null||i.emit("update_project_id",{id:r})}catch(v){console.error(v)}},[r,i]);const I=c.useMemo(()=>{if(o){const v=o.edges.filter(b=>{var E;return(E=b==null?void 0:b.properties)==null?void 0:E.start}).map(b=>{var E;return{source:b.source,target:b.target,start:(E=b.properties)==null?void 0:E.start}});return o.nodes.filter(b=>o.edges.some(E=>E.source===b.ref_id||E.target===b.ref_id)).map(b=>{const E=v.find($=>b.ref_id===$.source||b.ref_id===$.target);return{...b,start:(E==null?void 0:E.start)||0}}).filter(b=>b&&b.node_type!=="Clip"&&b.node_type!=="Episode"&&b.node_type!=="Show")}return[]},[o]);return e.jsxs(dr,{children:[e.jsx(ur,{direction:"row",children:p?e.jsxs(e.Fragment,{children:[e.jsxs(C,{children:[e.jsx(C,{onClick:()=>g(!f),children:e.jsx(qe,{})}),e.jsx(cr,{})]}),e.jsx(fr,{children:e.jsx(C,{basis:"100%",grow:1,shrink:1,children:f?e.jsx(ue,{}):e.jsx(je,{})})})]}):e.jsx(wt,{})}),e.jsx(xr,{children:e.jsx(Wt,{markers:I})})]})},dr=y.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,ur=y(C)`
  flex: 1;
  overflow: hidden;
`,fr=y(C)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,xr=y(C)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{$r as MindSet};
