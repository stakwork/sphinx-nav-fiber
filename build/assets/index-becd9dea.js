import{r as l,x as fe,c as he,j as e,s as x,a as j,F as C,T as xe,u as G,d as re,y as me,N as J,z as ge,A as ye,D as se,E as we}from"./index-25108a0a.js";import{Universe as be}from"./index-768426d5.js";import{b as oe,c as k,M as je,V as Ce,d as ve,e as _e,f as Se,g as Ee,h as Te,a as Ie}from"./index-cc44fa18.js";import{S as Re,R as Pe,s as K,M as ke}from"./index-269eac7c.js";import{u as L,a as ne,m as $e,T as ze,f as Me,H as Ae,C as Le}from"./index-6e9dd8b2.js";import{W as We,L as Q,H as He,D as Fe,F as Be,V as M,S as De}from"./three.module-8711b969.js";import{T as Ne}from"./index-df58e782.js";import"./index-0f3a9b59.js";import"./TextareaAutosize-913a770d.js";import"./index-73ec95fd.js";import"./ClipLoader-d09cc51b.js";import"./Skeleton-ee3ab53b.js";import"./Stack-087e4539.js";import"./isPlainObject-aa7e5c8c.js";import"./Typography-64f33d69.js";import"./createSvgIcon-61075121.js";import"./index-5a3f9609.js";function Ge(t,s,r){const{gl:n,size:i,viewport:u}=L(),m=typeof t=="number"?t:i.width*u.dpr,c=typeof s=="number"?s:i.height*u.dpr,o=(typeof t=="number"?r:t)||{},{samples:a=0,depth:g,...y}=o,p=l.useMemo(()=>{let f;return f=new We(m,c,{minFilter:Q,magFilter:Q,encoding:n.outputEncoding,type:He,...y}),g&&(f.depthTexture=new Fe(m,c,Be)),f.samples=a,f},[]);return l.useLayoutEffect(()=>{p.setSize(m,c),a&&(p.samples=a)},[a,p,m,c]),l.useEffect(()=>()=>p.dispose(),[]),p}const Ze=t=>typeof t=="function",Oe=l.forwardRef(({envMap:t,resolution:s=256,frames:r=1/0,children:n,makeDefault:i,...u},m)=>{const c=L(({set:h})=>h),o=L(({camera:h})=>h),a=L(({size:h})=>h),g=l.useRef(null),y=l.useRef(null),p=Ge(s);l.useLayoutEffect(()=>{u.manual||g.current.updateProjectionMatrix()},[a,u]),l.useLayoutEffect(()=>{g.current.updateProjectionMatrix()}),l.useLayoutEffect(()=>{if(i){const h=o;return c(()=>({camera:g.current})),()=>c(()=>({camera:h}))}},[g,i,c]);let f=0,d=null;const w=Ze(n);return ne(h=>{w&&(r===1/0||f<r)&&(y.current.visible=!1,h.gl.setRenderTarget(p),d=h.scene.background,t&&(h.scene.background=t),h.gl.render(h.scene,g.current),h.scene.background=d,h.gl.setRenderTarget(null),y.current.visible=!0,f++)}),l.createElement(l.Fragment,null,l.createElement("orthographicCamera",fe({left:a.width/-2,right:a.width/2,top:a.height/2,bottom:a.height/-2,ref:$e([g,m])},u),!w&&n),l.createElement("group",{ref:y},w&&n(p.texture)))}),Ve={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},Z=he(t=>({...Ve,setSelectedEpisodeId:s=>t({selectedEpisodeId:s}),setSelectedEpisodeLink:s=>t({selectedEpisodeLink:s}),setSelectedEpisode:s=>t({selectedEpisode:s})})),Ye=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),qe=()=>e.jsxs(Ue,{children:[e.jsx(Je,{children:e.jsx(Ke,{children:e.jsx(Ye,{})})}),e.jsx(Qe,{children:"Graph Mindset"})]}),Ue=x(C).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Je=x(C)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ke=x.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${j.white};
  }
`,Qe=x(xe)`
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
`,Xe=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),et=({imageUrl:t,title:s,subtitle:r,onClick:n})=>{const i=s.length>35?`${s.substring(0,32)}...`:s,u=r.length>50?`${r.substring(0,47)}...`:r;return e.jsxs(tt,{onClick:n,children:[e.jsx(rt,{children:e.jsx(oe,{height:140,src:t,type:"Episode",width:170})}),e.jsxs(st,{children:[e.jsx(ot,{children:i}),e.jsx(nt,{children:u})]})]})},tt=x(C)`
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
`,rt=x.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,st=x(C)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,ot=x.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${j.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,nt=x.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${j.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,it=/^(https?:\/\/)/,at=/(www\.)?/,ct=/[\w-]+(\.[\w-]+)*/,lt=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,pt=/(\/[^\s?]*)?/,dt=/(\?[^\s]*)?/,ut=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ft=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,ht=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,xt=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,mt=new RegExp(`${it.source}${at.source}${ct.source}${lt.source}?${pt.source}${dt.source}$`,"i"),gt=t=>{try{if(!(t==null?void 0:t.match(mt)))return!1;const n=new URL(t).hostname;return n!=null&&n.startsWith("www.")?((n==null?void 0:n.match(/\./g))||[]).length>=2:((n==null?void 0:n.match(/\./g))||[]).length>=1}catch{return!1}},X=t=>gt(t)?[ut,ft,ht,xt].some(r=>r.test(t)):!1,ie=[{date_added_to_graph:1733218679827695e-6,node_type:"Episode",properties:{date:1731888e3,episode_title:"AI Agents and AI Assistants: A Contrast in Function",image_url:"https://i.ytimg.com/vi/IivxYYkJ2DI/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/62110bc0-6b27-4779-9d5e-320eab6fae84/IivxYYkJ2DI.mp3",source_link:"https://www.youtube.com/watch?v=IivxYYkJ2DI",status:"completed"},ref_id:"b8784fb9-efa8-4a25-8a78-e14be96a4387"},{date_added_to_graph:1733323898765796e-6,node_type:"Episode",properties:{date:1733184e3,episode_title:"Joe Rogan Experience #2237 - Mike Benz",image_url:"https://i.ytimg.com/vi_webp/rrJhQpvlkLA/sddefault.webp",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/b4c6220e-7048-431c-80c4-90e56b71bd06/rrJhQpvlkLA.mp3",source_link:"https://www.youtube.com/watch?v=rrJhQpvlkLA",status:"completed"},ref_id:"2e51fdb8-a1f1-4e1f-b9d5-4dbdae00b1a2"},{date_added_to_graph:17326354109931817e-7,node_type:"Episode",properties:{date:1730851200,description:"Exploring the Transformative Potential of Llama, the Open-Source AI Model",episode_title:"Llama: The Open-Source AI Model that's Changing How We Think About AI",image_url:"https://i.ytimg.com/vi/8c2LnKNoSmg/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/a4542523-6b12-4baa-bce7-ed63f2704955/8c2LnKNoSmg.mp3",source_link:"https://www.youtube.com/watch?v=8c2LnKNoSmg",status:"completed"},ref_id:"87f5e4c5-39c2-4773-8208-8c1c4fe4019b"}];console.log(ie);const yt=async t=>{const s="add_node",r={};r.media_url=t.source,r.content_type="audio_video";const n=await ge.post(`/${s}`,JSON.stringify(r));if(n.error){const{message:i}=n.error;throw new Error(i)}return n},wt=()=>{const[t,s]=l.useState(""),[r,n]=l.useState(!1),[i,u]=l.useState(""),{setRunningProjectId:m}=G(p=>p),{setSelectedEpisodeId:c,setSelectedEpisodeLink:o}=Z(p=>p),{setSchemas:a}=re(p=>p);l.useEffect(()=>{(async()=>{try{const f=await me();a(f.schemas.filter(d=>!d.is_deleted))}catch(f){console.error("Error fetching schema:",f)}})()},[a]);const g=p=>{const{value:f}=p.target;s(f),n(f!==""&&!X(f))},y=async p=>{const f=p||t;if(X(f))try{const d=await yt({source:f});d.data.project_id&&m(d.data.project_id),d.data.ref_id&&(c(d.data.ref_id),o(f))}catch(d){let w=J;if((d==null?void 0:d.status)===400){const h=await d.json();w=h.errorCode||(h==null?void 0:h.status)||J,h.data.ref_id&&(c(h.data.ref_id),o(f))}else d instanceof Error&&(w=d.message);u(String(w))}};return e.jsxs(bt,{children:[e.jsx(jt,{children:"Ideas have shapes"}),e.jsxs(vt,{children:[e.jsx(Ct,{error:r,onChange:g,onKeyDown:p=>p.key==="Enter"&&y(),placeholder:"Paste podcast or video link",value:t}),e.jsx(_t,{error:r,onClick:r?void 0:()=>y(),children:e.jsx(Xe,{})})]}),i&&e.jsx("div",{children:i}),e.jsx(St,{children:ie.map(p=>{var f,d;return e.jsx(et,{imageUrl:((f=p==null?void 0:p.properties)==null?void 0:f.image_url)||"",onClick:()=>{var w;return y((w=p==null?void 0:p.properties)==null?void 0:w.source_link)},subtitle:"",title:((d=p==null?void 0:p.properties)==null?void 0:d.episode_title)||""},p==null?void 0:p.ref_id)})})]})},bt=x(C)`
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
`,jt=x(C)`
  color: ${j.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,Ct=x.input`
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
`,vt=x.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`,_t=x.div`
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
`,St=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,ae=l.memo(()=>{const t=k(d=>d.isPlaying),s=k(d=>d.setIsPlaying),r=k(d=>d.setVolume),n=k(d=>d.setPlaybackSpeed),i=k(d=>d.playbackSpeed),u=k(d=>d.playerRef),[m,c]=l.useState(!1),o=[.5,1,1.5,2],a=()=>{if(u){const d=u.getCurrentTime()-15;u.seekTo(d,"seconds")}},g=()=>{if(u){const d=u.getCurrentTime()+15;u.seekTo(d,"seconds")}},y=()=>{s(!t)},p=()=>{c(!m),r(m?1:0)},f=()=>{const w=(o.indexOf(i)+1)%o.length,h=o[w];if(n(h),u){const I=u.getInternalPlayer();I&&typeof I.playbackRate<"u"&&(I.playbackRate=h)}};return e.jsxs(Et,{children:[e.jsx(Pt,{onClick:p,children:m?e.jsx(je,{}):e.jsx(Ce,{})}),e.jsx(It,{onClick:a,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(Tt,{"data-testid":"play-pause-button",onClick:y,size:"small",children:t?e.jsx(ve,{"data-testid":"pause-icon"}):e.jsx(_e,{"data-testid":"play-icon"})}),e.jsx(Rt,{onClick:g,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})}),e.jsxs(kt,{onClick:f,children:[i,"x"]})]})});ae.displayName="Controls";const Et=x(C).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,Tt=x(Se)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,It=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Rt=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Pt=x.div`
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
`,kt=x.button`
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
`,ce=l.memo(({type:t,left:s,img:r})=>{var o,a;const n=re(g=>g.normalizedSchemasByType),i=(o=n[t])==null?void 0:o.primary_color,u=(a=n[t])==null?void 0:a.icon,m=u?`svg-icons/${u}.svg`:"",c={iconStart:r||m,color:i??j.THING};return e.jsx(zt,{style:{left:`${s}%`},children:e.jsx(le,{...c,label:t})})});ce.displayName="Marker";const le=l.memo(({iconStart:t,color:s,label:r})=>e.jsx($t,{color:s,children:t&&e.jsx("img",{alt:r,className:"badge__img",src:t})}));le.displayName="Badge";const $t=x(C).attrs({direction:"row"})`
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
`,zt=x.div`
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
`,pe=l.memo(({markers:t,duration:s})=>e.jsx(e.Fragment,{children:t.map(r=>{var m;const n=Math.floor(((r==null?void 0:r.start)||0)/s*100),i=(r==null?void 0:r.node_type)||"",u=((m=r==null?void 0:r.properties)==null?void 0:m.image_url)||"";return e.jsx(ce,{img:u,left:n,type:i},r.ref_id)})}));pe.displayName="Markers";const Mt=({duration:t,markers:s,handleProgressChange:r,playingTIme:n})=>{const i=10/t*100;return e.jsxs(At,{children:[e.jsx(Lt,{max:t,onChange:r,value:n,width:i}),e.jsx(pe,{duration:t,markers:s})]})},At=x(C)`
  position: relative;
  flex: 1 1 100%;
`,Lt=x(Re)`
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
`,Wt=({markers:t})=>{const{playingNode:s,playerRef:r}=k(o=>o),[n,i]=l.useState(0),u=s,m=l.useCallback((o,a)=>{const g=Array.isArray(a)?a[0]:a;r&&r.seekTo(g,"seconds")},[r]);l.useEffect(()=>{const o=setInterval(()=>{if(r&&i){const a=r.getCurrentTime();i(a)}},500);return()=>clearInterval(o)},[r,i]);const c=(r==null?void 0:r.getDuration())||0;return u?e.jsxs(Ht,{children:[e.jsx(ae,{}),e.jsx(Mt,{duration:c,handleProgressChange:m,markers:t,playingTIme:n})]}):null},Ht=x(C).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${j.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Ft=({sourcePosition:t,targetPosition:s,color:r="white",arrowSize:n=1,label:i="label"})=>{const{points:u,textPosition:m}=l.useMemo(()=>{const c=new M(t.x,t.y,t.z),o=new M(s.x,s.y,s.z),a=new M().subVectors(o,c).normalize(),g=new M().addVectors(c,o).multiplyScalar(.5),y=new M().copy(a).multiplyScalar(-n).applyAxisAngle(new M(0,0,1),Math.PI/6),p=new M().copy(a).multiplyScalar(-n).applyAxisAngle(new M(0,0,1),-Math.PI/6);return{points:[c,o,o.clone(),o.clone().add(y),o.clone(),o.clone().add(p)],textPosition:g}},[t,s,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(u.flatMap(c=>[c.x,c.y,c.z])),attach:"attributes-position",count:u.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:r})]}),i&&e.jsx(ze,{anchorX:"center",anchorY:"middle",color:r,...Me,position:m,children:i})]})},Bt=(t,s,r)=>{const n=new De;return n.moveTo(-t/2+r,-s/2),n.lineTo(t/2-r,-s/2),n.quadraticCurveTo(t/2,-s/2,t/2,-s/2+r),n.lineTo(t/2,s/2-r),n.quadraticCurveTo(t/2,s/2,t/2-r,s/2),n.lineTo(-t/2+r,s/2),n.quadraticCurveTo(-t/2,s/2,-t/2,s/2-r),n.lineTo(-t/2,-s/2+r),n.quadraticCurveTo(-t/2,-s/2,-t/2+r,-s/2),n},Dt=({width:t,height:s,radius:r,color:n})=>{const i=Bt(t,s,r);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[i]}),e.jsx("meshBasicMaterial",{color:n,opacity:.9,transparent:!0})]})},Nt=({name:t,url:s,type:r})=>e.jsxs(Gt,{children:[s&&e.jsx("img",{alt:"",className:"image",src:s}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(Ne,{type:r})}),e.jsx("div",{className:"action-btn",children:e.jsx(Ee,{})})]}),Gt=x(C)`
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
`,Y=l.memo(({width:t,height:s,position:r,url:n,onButtonClick:i,name:u,type:m,color:c})=>{const{camera:o}=L();return e.jsxs("group",{position:r,children:[e.jsx(Dt,{color:c,height:s,radius:1.5,width:t}),!1,e.jsx(Ae,{position:[-t/2,s/2,0],children:e.jsx(C,{onClick:()=>i(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*o.zoom}px`,height:`${s*o.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:e.jsx(Nt,{name:`${u}`,type:m||"",url:n})})})]})});Y.displayName="Node";const ee=144/10,V=84/10,Zt=()=>{const t=L(),{dataInitial:s}=G(i=>i),{viewport:r}=t,n=l.useMemo(()=>{if(!s)return{nodes:[],edges:[],relatedNodes:{}};const i=s.links.filter(o=>{var a;return(a=o==null?void 0:o.properties)==null?void 0:a.start}).map(o=>{var a;return{source:o.source,target:o.target,start:(a=o.properties)==null?void 0:a.start}}),u=s.nodes.filter(o=>s.links.some(a=>a.source===o.ref_id||a.target===o.ref_id)).map(o=>{const a=i.find(f=>o.ref_id===f.source||o.ref_id===f.target),g=((a==null?void 0:a.start)||0)*(r.width/10);return{...o,x:g,y:0,z:0,start:(a==null?void 0:a.start)||0}}).filter(o=>o.node_type!=="Clip"&&o.node_type!=="Episode"&&o.node_type!=="Show"),m=u.reduce((o,a)=>{const g=s.links.filter(d=>{var w;return!((w=d==null?void 0:d.properties)!=null&&w.start)&&[d.target,d.source].includes(a.ref_id)}),p=s.nodes.filter(d=>d.node_type!=="Episode"&&d.node_type!=="Clip"&&d.ref_id!==a.ref_id&&g.some(w=>[w.source,w.target].includes(d.ref_id))).map((d,w)=>{const{x:h}=a,I=(Math.floor(w/2)+1)*V*2*(w%2===0?1:-1);return{...d,x:h,y:I,z:0}}),f=g.map(d=>{if(d.source===a.ref_id){const h=p.find(I=>I.ref_id===d.target);return{...d,sourcePositions:{x:a.x,y:a.y,z:a.z},targetPositions:{x:h==null?void 0:h.x,y:h==null?void 0:h.y,z:h==null?void 0:h.z}}}const w=p.find(h=>h.ref_id===d.source);return{...d,sourcePositions:{x:w==null?void 0:w.x,y:w==null?void 0:w.y,z:w==null?void 0:w.z},targetPositions:{x:a.x,y:a.y,z:a.z}}});return o[a.ref_id]={nodes:p,edges:f},o},{}),c=Object.values(m).flatMap(o=>o.edges).filter(o=>{var a;return(a=o==null?void 0:o.sourcePositions)==null?void 0:a.x});return{nodes:u,edges:c,relatedNodes:Object.fromEntries(Object.entries(m).map(([o,a])=>[o,a.nodes]))}},[s,r.width]);return e.jsxs(e.Fragment,{children:[n.nodes.map(i=>{var u,m;return e.jsxs(l.Fragment,{children:[e.jsx(Y,{color:"#353A46",height:V,name:((u=i==null?void 0:i.properties)==null?void 0:u.name)||"",onButtonClick:console.log,position:[i.x,i.y,i.z],type:i.node_type,url:((m=i==null?void 0:i.properties)==null?void 0:m.image_url)||"logo.png",width:ee}),(n.relatedNodes[i.ref_id]||[]).map(c=>{var o,a;return e.jsx(Y,{color:"#353A46",height:V,name:((o=c==null?void 0:c.properties)==null?void 0:o.name)||"",onButtonClick:console.log,position:[c.x,c.y,c.z],type:c.node_type,url:((a=c==null?void 0:c.properties)==null?void 0:a.image_url)||"logo.png",width:ee},`${c.ref_id}-${i.ref_id}`)})]},i.ref_id)}),n.edges.map((i,u)=>i!=null&&i.sourcePositions&&(i!=null&&i.targetPositions)?e.jsx(Ft,{label:i.edge_type||"",sourcePosition:new M(i.sourcePositions.x,i.sourcePositions.y,i.sourcePositions.z),targetPosition:new M(i.targetPositions.x,i.targetPositions.y,i.targetPositions.z)},`edge-${u}`):null)]})},Ot=()=>{const{camera:t,viewport:s}=L(),r=k(n=>n.playerRef);return ne(()=>{if(r){const n=r.getCurrentTime();t.position.x=n*s.width/10}}),null},Vt=()=>{const{camera:t,gl:s}=L();return l.useEffect(()=>{const r=t,n=u=>{u.preventDefault(),u.ctrlKey&&(r.zoom+=u.deltaY*-.1,r.zoom=Math.max(2,Math.min(r.zoom,20))),r.position.x+=u.deltaX*.1,r.updateProjectionMatrix()},i=s.domElement;return i.addEventListener("wheel",n,{passive:!1}),()=>{i.removeEventListener("wheel",n)}},[t,s]),null},de=l.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs(Le,{orthographic:!0,children:[e.jsx(Ot,{}),e.jsx(Oe,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(Zt,{}),e.jsx(Vt,{})]})})));de.displayName="Scene";const Yt=(t,s)=>{let r=0,n=t.length-1;for(;r<=n;){const i=Math.floor((r+n)/2),u=t[i],{start:m,end:c}=u.properties;if(s>=m&&s<=c)return u;s<m?n=i-1:r=i+1}return null},qt=({mediaUrl:t})=>{const s=l.useRef(null),[r,n]=l.useState("ready"),[i,u]=l.useState(!1),{setActiveEdge:m}=Te(S=>S),{dataInitial:c}=G(S=>S),{isPlaying:o,playingTime:a,setIsPlaying:g,setPlayingTime:y,setDuration:p,playingNode:f,volume:d,setHasError:w,resetPlayer:h,isSeeking:I,setIsSeeking:v,setPlayerRef:_,playerRef:b,playbackSpeed:E}=k(S=>S);l.useEffect(()=>()=>h(),[h]),l.useEffect(()=>{f&&!i&&(y(0),p(0),u(!1))},[f,y,p,u,i]),l.useEffect(()=>{I&&b&&(b.seekTo(a,"seconds"),v(!1))},[a,I,v,b]);const $=l.useCallback(()=>{g(!o)},[o,g]),D=()=>{w(!0),n("error")},W=l.useCallback(S=>{S.code==="Space"&&(S.preventDefault(),$())},[$]);l.useEffect(()=>(window.addEventListener("keydown",W),()=>{window.removeEventListener("keydown",W)}),[W]);const R=l.useMemo(()=>((c==null?void 0:c.links.filter(z=>{var B;return(B=z==null?void 0:z.properties)==null?void 0:B.start}))||[]).slice().sort((z,B)=>{var q,U;return((q=z==null?void 0:z.properties)==null?void 0:q.start)-((U=B==null?void 0:B.properties)==null?void 0:U.start)}),[c]),A=S=>{if(!I){const N=S.playedSeconds,z=Yt(R,N);m(z||null)}},P=()=>{b&&n("ready")},O=l.useCallback(()=>{o||g(!0)},[g,o]),H=l.useCallback(()=>{o&&g(!1)},[g,o]),F=S=>{S.stopPropagation()},T=l.useCallback(S=>{!b&&S&&_(S)},[_,b]);return t?e.jsxs(Ut,{ref:s,tabIndex:0,children:[e.jsx(Jt,{isFullScreen:!1,children:e.jsx(oe,{size:120,src:(f==null?void 0:f.image_url)||"",type:"clip"})}),e.jsx(Qt,{isFullScreen:!1,onClick:F,children:e.jsx(Pe,{ref:T,height:"219px",onBuffer:()=>n("buffering"),onBufferEnd:()=>n("ready"),onError:D,onPause:H,onPlay:O,onProgress:A,onReady:P,playbackRate:E,playing:o,url:t||"",volume:d,width:"100%"})}),r==="error"?e.jsx(Kt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Ut=x(C)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Jt=x(C)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Kt=x(C)`
  height: 60px;
  padding: 12px 16px;
  color: ${j.primaryRed};
`,Qt=x.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Xt=l.memo(qt),ue=l.forwardRef(({active:t,start:s,text:r},n)=>e.jsxs(er,{ref:n,className:ye({active:t}),children:[e.jsx(tr,{children:s}),e.jsx(rr,{children:e.jsx("span",{children:r})})]}));ue.displayName="ParagraphComponent";const te=l.memo(ue,(t,s)=>t.active===s.active),er=x(C)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,tr=x.span`
  background: ${j.lightBlue100};
  color: ${j.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,rr=x.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,sr=({transcriptString:t})=>{const[s,r]=l.useState(0),[n,i]=l.useState(!1),{playerRef:u}=k(y=>y),m=t.replace(/^["']|["']$/g,""),c=JSON.parse(m),o=l.useRef(null),a=l.useRef(null),g=l.useRef(null);return l.useEffect(()=>{const y=setInterval(()=>{if(u&&r){const p=u.getCurrentTime();r(p)}},100);return()=>clearInterval(y)},[u,r]),l.useEffect(()=>{const y=()=>{i(!0),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{i(!1)},1e3)},p=a.current;return p&&p.addEventListener("scroll",y),()=>{p&&p.removeEventListener("scroll",y)}},[]),l.useEffect(()=>{!n&&o.current&&o.current.scrollIntoView({behavior:"smooth",block:"center"})},[s,n]),e.jsx(or,{ref:a,children:c[0].start>s?e.jsx(te,{active:!1,start:K(c[0].start),text:c[0].text}):e.jsx(e.Fragment,{children:c.map(y=>{const p=K(y.start),f=y.start<s&&s<y.end;return y.start<=s+5?e.jsx(te,{ref:f?o:null,active:f,start:p,text:y.text},`${y.start}-${y.end}`):null})})})},or=x.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,nr=({name:t})=>{const{selectedEpisodeId:s}=Z(c=>c),{playerRef:r}=k(c=>c),[n,i]=l.useState(0),[u,m]=l.useState([]);return l.useEffect(()=>{s&&(async()=>{try{const o=await se(s,0,50,{nodeType:["Clip"],useSubGraph:!1});o!=null&&o.nodes&&m(o.nodes)}catch(o){console.error(o)}})()},[s]),l.useEffect(()=>{const c=setInterval(()=>{if(r&&i){const o=r.getCurrentTime();i(o)}},100);return()=>clearInterval(c)},[r,i]),e.jsxs(ir,{children:[e.jsx(C,{className:"heading",children:t}),u.map(c=>{var y,p,f;const o=(y=c==null?void 0:c.properties)==null?void 0:y.timestamp,[a,g]=o?o.split("-").map(Number):[0,0];return a<=n&&n<g?e.jsx(ar,{direction:"row",children:((p=c.properties)==null?void 0:p.transcript)&&e.jsx(sr,{transcriptString:(f=c.properties)==null?void 0:f.transcript})},c.ref_id):null})]})},ir=x(C)`
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
`,ar=x(C)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,cr=()=>{const{selectedEpisodeLink:t,selectedEpisode:s}=Z(r=>r);return e.jsxs(lr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(pr,{children:t&&e.jsx(Xt,{mediaUrl:t})}),e.jsx(nr,{name:(s==null?void 0:s.name)||""})]})},lr=x(C)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[t.breakpoints.up("sm")]:{width:ke,gap:"10px"}})),pr=x(C)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),$r=()=>{const{addNewNode:t,isFetching:s,runningProjectId:r}=G(v=>v),[n,i]=l.useState(null),[u,m]=l.useState(!1),{selectedEpisodeId:c,setSelectedEpisode:o}=Z(v=>v),a=Ie(),g=l.useRef(null),y=l.useRef(null),p=l.useRef(null),f=l.useRef(null),d=l.useRef(null),{setPlayingNode:w}=k(v=>v),h=l.useCallback(v=>{s||(f.current||(f.current={nodes:[],edges:[]}),v.edges&&f.current.edges.push(...v.edges),v.nodes&&f.current.nodes.push(...v.nodes),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{if(f.current){const{nodes:_,edges:b}=f.current,E={nodes:_,edges:b};f.current={nodes:[],edges:[]},t(E)}},3e3))},[t,s]);l.useEffect(()=>{c&&(async()=>{try{const _=await se(c,0,50);i(_);const[b,E]=((_==null?void 0:_.nodes)||[]).reduce(([R,A],P)=>(["Episode","Show","Host","Guest"].includes(P.node_type)?R.push(P):A.push(P),[R,A]),[[],[]]),$=new Set(b.map(R=>R.ref_id)),[D,W]=((_==null?void 0:_.edges)||[]).reduce(([R,A],P)=>($.has(P.source)&&$.has(P.target)?R.push(P):A.push(P),[R,A]),[[],[]]);p.current={nodes:E||[],edges:W||[]},t({nodes:b,edges:D})}catch(_){console.error(_)}})()},[c,t]),l.useEffect(()=>{c&&(async()=>{try{const _=await we(c);_&&(w(_),o(_))}catch(_){console.error(_)}})()},[c,w,o]),l.useEffect(()=>(a&&(a.connect(),a.on("connect_error",v=>{console.error("Socket connection error:",v)}),r&&a.on("new_node_created",h)),()=>{a&&a.off()}),[a,h,r]),l.useEffect(()=>{const v=_=>{const{playerRef:b}=k.getState();if(y.current!==null){if(_-y.current>1e3){if(p.current&&b){const{nodes:$,edges:D}=p.current,W=b==null?void 0:b.getCurrentTime(),[R,A]=D.reduce(([H,F],T)=>{var S,N;return((S=T==null?void 0:T.properties)==null?void 0:S.start)!==void 0&&((N=T==null?void 0:T.properties)==null?void 0:N.start)<W+1?H.push(T):F.push(T),[H,F]},[[],[]]),[P,O]=$.reduce(([H,F],T)=>(R.some(S=>S.target===T.ref_id||S.source===T.ref_id)?H.push(T):F.push(T),[H,F]),[[],[]]);p.current={nodes:O,edges:A},(P.length||R.length)&&t({nodes:P,edges:R})}y.current=_}}else y.current=_;g.current=requestAnimationFrame(v)};return g.current=requestAnimationFrame(v),()=>{g.current&&cancelAnimationFrame(g.current)}},[p,t]),l.useEffect(()=>{if(r)try{a==null||a.emit("update_project_id",{id:r})}catch(v){console.error(v)}},[r,a]);const I=l.useMemo(()=>{if(n){const v=n.edges.filter(b=>{var E;return(E=b==null?void 0:b.properties)==null?void 0:E.start}).map(b=>{var E;return{source:b.source,target:b.target,start:(E=b.properties)==null?void 0:E.start}});return n.nodes.filter(b=>n.edges.some(E=>E.source===b.ref_id||E.target===b.ref_id)).map(b=>{const E=v.find($=>b.ref_id===$.source||b.ref_id===$.target);return{...b,start:(E==null?void 0:E.start)||0}}).filter(b=>b&&b.node_type!=="Clip"&&b.node_type!=="Episode"&&b.node_type!=="Show")}return[]},[n]);return e.jsxs(dr,{children:[e.jsx(ur,{direction:"row",children:c?e.jsxs(e.Fragment,{children:[e.jsxs(C,{children:[e.jsx(C,{onClick:()=>m(!u),children:e.jsx(qe,{})}),e.jsx(cr,{})]}),e.jsx(fr,{children:e.jsx(C,{basis:"100%",grow:1,shrink:1,children:u?e.jsx(de,{}):e.jsx(be,{})})})]}):e.jsx(wt,{})}),e.jsx(hr,{children:e.jsx(Wt,{markers:I})})]})},dr=x.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,ur=x(C)`
  flex: 1;
  overflow: hidden;
`,fr=x(C)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,hr=x(C)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{$r as MindSet};
