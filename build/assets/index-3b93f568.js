import{r as l,x as xe,c as he,j as e,s as m,a as b,F as S,T as me,u as G,d as re,y as ge,N as Q,z as ye,A as we,D as se,E as be}from"./index-31b814fa.js";import{Universe as je}from"./index-3f8acc1d.js";import{b as oe,c as k,M as Ce,V as ve,d as _e,e as Se,f as Ee,g as Te,h as ne,a as Ie}from"./index-5602f744.js";import{S as Re,R as Pe,s as V,M as $e}from"./index-d0698fb5.js";import{u as F,a as ie,m as ke,T as ze,f as Me,H as Ae,C as Le}from"./index-5e211352.js";import{W as We,L as X,H as Fe,D as He,F as Be,V as A,S as De}from"./three.module-8711b969.js";import{T as Ne}from"./index-0450f0da.js";import"./index-b4efe72f.js";import"./TextareaAutosize-a7898ebd.js";import"./index-966347a8.js";import"./ClipLoader-fd637e16.js";import"./Skeleton-4eecc465.js";import"./Stack-f86e6c9b.js";import"./isPlainObject-3efebf91.js";import"./Typography-8f6b81c6.js";import"./createSvgIcon-bd5422e0.js";import"./index-6ecd87fa.js";function Ge(t,s,r){const{gl:o,size:i,viewport:d}=F(),h=typeof t=="number"?t:i.width*d.dpr,f=typeof s=="number"?s:i.height*d.dpr,a=(typeof t=="number"?r:t)||{},{samples:n=0,depth:g,...C}=a,c=l.useMemo(()=>{let x;return x=new We(h,f,{minFilter:X,magFilter:X,encoding:o.outputEncoding,type:Fe,...C}),g&&(x.depthTexture=new He(h,f,Be)),x.samples=n,x},[]);return l.useLayoutEffect(()=>{c.setSize(h,f),n&&(c.samples=n)},[n,c,h,f]),l.useEffect(()=>()=>c.dispose(),[]),c}const Ze=t=>typeof t=="function",Oe=l.forwardRef(({envMap:t,resolution:s=256,frames:r=1/0,children:o,makeDefault:i,...d},h)=>{const f=F(({set:u})=>u),a=F(({camera:u})=>u),n=F(({size:u})=>u),g=l.useRef(null),C=l.useRef(null),c=Ge(s);l.useLayoutEffect(()=>{d.manual||g.current.updateProjectionMatrix()},[n,d]),l.useLayoutEffect(()=>{g.current.updateProjectionMatrix()}),l.useLayoutEffect(()=>{if(i){const u=a;return f(()=>({camera:g.current})),()=>f(()=>({camera:u}))}},[g,i,f]);let x=0,p=null;const w=Ze(o);return ie(u=>{w&&(r===1/0||x<r)&&(C.current.visible=!1,u.gl.setRenderTarget(c),p=u.scene.background,t&&(u.scene.background=t),u.gl.render(u.scene,g.current),u.scene.background=p,u.gl.setRenderTarget(null),C.current.visible=!0,x++)}),l.createElement(l.Fragment,null,l.createElement("orthographicCamera",xe({left:n.width/-2,right:n.width/2,top:n.height/2,bottom:n.height/-2,ref:ke([g,h])},d),!w&&o),l.createElement("group",{ref:C},w&&o(c.texture)))}),Ve={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},Z=he(t=>({...Ve,setSelectedEpisodeId:s=>t({selectedEpisodeId:s}),setSelectedEpisodeLink:s=>t({selectedEpisodeLink:s}),setSelectedEpisode:s=>t({selectedEpisode:s})})),Ye=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),qe=()=>e.jsxs(Ue,{children:[e.jsx(Je,{children:e.jsx(Ke,{children:e.jsx(Ye,{})})}),e.jsx(Qe,{children:"Graph Mindset"})]}),Ue=m(S).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Je=m(S)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ke=m.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${b.white};
  }
`,Qe=m(me)`
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
`,Xe=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),et=({imageUrl:t,title:s,subtitle:r,onClick:o})=>{const i=s.length>35?`${s.substring(0,32)}...`:s,d=r.length>50?`${r.substring(0,47)}...`:r;return e.jsxs(tt,{onClick:o,children:[e.jsx(rt,{children:e.jsx(oe,{height:140,src:t,type:"Episode",width:170})}),e.jsxs(st,{children:[e.jsx(ot,{children:i}),e.jsx(nt,{children:d})]})]})},tt=m(S)`
  background: ${b.BG1};
  width: 170px;
  height: 200px;
  color: ${b.white};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: ${b.SEEDQUESTION_HOVER};
  }
  &:active {
    background: ${b.SEEDQUESTION};
  }
`,rt=m.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,st=m(S)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,ot=m.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${b.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,nt=m.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${b.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,it=/^(https?:\/\/)/,at=/(www\.)?/,ct=/[\w-]+(\.[\w-]+)*/,lt=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,pt=/(\/[^\s?]*)?/,dt=/(\?[^\s]*)?/,ut=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ft=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,xt=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ht=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,mt=new RegExp(`${it.source}${at.source}${ct.source}${lt.source}?${pt.source}${dt.source}$`,"i"),gt=t=>{try{if(!(t==null?void 0:t.match(mt)))return!1;const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}catch{return!1}},ee=t=>gt(t)?[ut,ft,xt,ht].some(r=>r.test(t)):!1,ae=[{date_added_to_graph:1733218679827695e-6,node_type:"Episode",properties:{date:1731888e3,episode_title:"AI Agents and AI Assistants: A Contrast in Function",image_url:"https://i.ytimg.com/vi/IivxYYkJ2DI/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/62110bc0-6b27-4779-9d5e-320eab6fae84/IivxYYkJ2DI.mp3",source_link:"https://www.youtube.com/watch?v=IivxYYkJ2DI",status:"completed"},ref_id:"b8784fb9-efa8-4a25-8a78-e14be96a4387"},{date_added_to_graph:1733323898765796e-6,node_type:"Episode",properties:{date:1733184e3,episode_title:"Joe Rogan Experience #2237 - Mike Benz",image_url:"https://i.ytimg.com/vi_webp/rrJhQpvlkLA/sddefault.webp",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/b4c6220e-7048-431c-80c4-90e56b71bd06/rrJhQpvlkLA.mp3",source_link:"https://www.youtube.com/watch?v=rrJhQpvlkLA",status:"completed"},ref_id:"2e51fdb8-a1f1-4e1f-b9d5-4dbdae00b1a2"},{date_added_to_graph:17326354109931817e-7,node_type:"Episode",properties:{date:1730851200,description:"Exploring the Transformative Potential of Llama, the Open-Source AI Model",episode_title:"Llama: The Open-Source AI Model that's Changing How We Think About AI",image_url:"https://i.ytimg.com/vi/8c2LnKNoSmg/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/a4542523-6b12-4baa-bce7-ed63f2704955/8c2LnKNoSmg.mp3",source_link:"https://www.youtube.com/watch?v=8c2LnKNoSmg",status:"completed"},ref_id:"87f5e4c5-39c2-4773-8208-8c1c4fe4019b"}];console.log(ae);const yt=async t=>{const s="add_node",r={};r.media_url=t.source,r.content_type="audio_video";const o=await ye.post(`/${s}`,JSON.stringify(r));if(o.error){const{message:i}=o.error;throw new Error(i)}return o},wt=()=>{const[t,s]=l.useState(""),[r,o]=l.useState(!1),[i,d]=l.useState(""),{setRunningProjectId:h}=G(c=>c),{setSelectedEpisodeId:f,setSelectedEpisodeLink:a}=Z(c=>c),{setSchemas:n}=re(c=>c);l.useEffect(()=>{(async()=>{try{const x=await ge();n(x.schemas.filter(p=>!p.is_deleted))}catch(x){console.error("Error fetching schema:",x)}})()},[n]);const g=c=>{const{value:x}=c.target;s(x),o(x!==""&&!ee(x))},C=async c=>{const x=c||t;if(ee(x))try{const p=await yt({source:x});p.data.project_id&&h(p.data.project_id),p.data.ref_id&&(f(p.data.ref_id),a(x))}catch(p){let w=Q;if((p==null?void 0:p.status)===400){const u=await p.json();w=u.errorCode||(u==null?void 0:u.status)||Q,u.data.ref_id&&(f(u.data.ref_id),a(x))}else p instanceof Error&&(w=p.message);d(String(w))}};return e.jsxs(bt,{children:[e.jsx(jt,{children:"Ideas have shapes"}),e.jsxs(vt,{children:[e.jsx(Ct,{error:r,onChange:g,onKeyDown:c=>c.key==="Enter"&&C(),placeholder:"Paste podcast or video link",value:t}),e.jsx(_t,{error:r,onClick:r?void 0:()=>C(),children:e.jsx(Xe,{})})]}),i&&e.jsx("div",{children:i}),e.jsx(St,{children:ae.map(c=>{var x,p;return e.jsx(et,{imageUrl:((x=c==null?void 0:c.properties)==null?void 0:x.image_url)||"",onClick:()=>{var w;return C((w=c==null?void 0:c.properties)==null?void 0:w.source_link)},subtitle:"",title:((p=c==null?void 0:c.properties)==null?void 0:p.episode_title)||""},c==null?void 0:c.ref_id)})})]})},bt=m(S)`
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
`,jt=m(S)`
  color: ${b.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,Ct=m.input`
  width: 100%;
  max-width: 648px;
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
`,vt=m.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`,_t=m.div`
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
`,St=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,ce=l.memo(()=>{const t=k(p=>p.isPlaying),s=k(p=>p.setIsPlaying),r=k(p=>p.setVolume),o=k(p=>p.setPlaybackSpeed),i=k(p=>p.playbackSpeed),d=k(p=>p.playerRef),[h,f]=l.useState(!1),a=[.5,1,1.5,2],n=()=>{if(d){const p=d.getCurrentTime()-15;d.seekTo(p,"seconds")}},g=()=>{if(d){const p=d.getCurrentTime()+15;d.seekTo(p,"seconds")}},C=()=>{s(!t)},c=()=>{f(!h),r(h?1:0)},x=()=>{const w=(a.indexOf(i)+1)%a.length,u=a[w];if(o(u),d){const j=d.getInternalPlayer();j&&typeof j.playbackRate<"u"&&(j.playbackRate=u)}};return e.jsxs(Et,{children:[e.jsx(Pt,{onClick:c,children:h?e.jsx(Ce,{}):e.jsx(ve,{})}),e.jsx(It,{onClick:n,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(Tt,{"data-testid":"play-pause-button",onClick:C,size:"small",children:t?e.jsx(_e,{"data-testid":"pause-icon"}):e.jsx(Se,{"data-testid":"play-icon"})}),e.jsx(Rt,{onClick:g,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})}),e.jsxs($t,{onClick:x,children:[i,"x"]})]})});ce.displayName="Controls";const Et=m(S).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${b.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${b.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,Tt=m(Ee)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,It=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Rt=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,Pt=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${b.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${b.DROPDOWN_BG};
  }
`,$t=m.button`
  margin-top: 4px;
  background: ${b.BG1};
  color: ${b.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,le=l.memo(({type:t,left:s,img:r})=>{var a,n;const o=re(g=>g.normalizedSchemasByType),i=(a=o[t])==null?void 0:a.primary_color,d=(n=o[t])==null?void 0:n.icon,h=d?`svg-icons/${d}.svg`:"",f={iconStart:r||h,color:i??b.THING};return e.jsx(zt,{style:{left:`${s}%`},children:e.jsx(pe,{...f,label:t})})});le.displayName="Marker";const pe=l.memo(({iconStart:t,color:s,label:r})=>e.jsx(kt,{color:s,children:t&&e.jsx("img",{alt:r,className:"badge__img",src:t})}));pe.displayName="Badge";const kt=m(S).attrs({direction:"row"})`
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
`,zt=m.div`
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
`,de=l.memo(({markers:t,duration:s})=>e.jsx(e.Fragment,{children:t.map(r=>{var h;const o=Math.floor(((r==null?void 0:r.start)||0)/s*100),i=(r==null?void 0:r.node_type)||"",d=((h=r==null?void 0:r.properties)==null?void 0:h.image_url)||"";return e.jsx(le,{img:d,left:o,type:i},r.ref_id)})}));de.displayName="Markers";const Mt=({duration:t,markers:s,handleProgressChange:r,playingTIme:o})=>{const i=10/t*100;return e.jsxs(At,{children:[e.jsx(Lt,{max:t,onChange:r,value:o,width:i}),e.jsx(de,{duration:t,markers:s})]})},At=m(S)`
  position: relative;
  flex: 1 1 100%;
`,Lt=m(Re)`
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
      width: ${({width:t})=>`${t}%`};
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
`,Wt=({markers:t})=>{const{playingNode:s,playerRef:r}=k(a=>a),[o,i]=l.useState(0),d=s,h=l.useCallback((a,n)=>{const g=Array.isArray(n)?n[0]:n;r&&r.seekTo(g,"seconds")},[r]);l.useEffect(()=>{const a=setInterval(()=>{if(r&&i){const n=r.getCurrentTime();i(n)}},500);return()=>clearInterval(a)},[r,i]);const f=(r==null?void 0:r.getDuration())||0;return d?e.jsxs(Ft,{children:[e.jsx(ce,{}),e.jsx(Mt,{duration:f,handleProgressChange:h,markers:t,playingTIme:o})]}):null},Ft=m(S).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${b.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Ht=({sourcePosition:t,targetPosition:s,color:r="white",arrowSize:o=1,label:i="label"})=>{const{points:d,textPosition:h}=l.useMemo(()=>{const f=new A(t.x,t.y,t.z),a=new A(s.x,s.y,s.z),n=new A().subVectors(a,f).normalize(),g=new A().addVectors(f,a).multiplyScalar(.5),C=new A().copy(n).multiplyScalar(-o).applyAxisAngle(new A(0,0,1),Math.PI/6),c=new A().copy(n).multiplyScalar(-o).applyAxisAngle(new A(0,0,1),-Math.PI/6);return{points:[f,a,a.clone(),a.clone().add(C),a.clone(),a.clone().add(c)],textPosition:g}},[t,s,o]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(d.flatMap(f=>[f.x,f.y,f.z])),attach:"attributes-position",count:d.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:r})]}),i&&e.jsx(ze,{anchorX:"center",anchorY:"middle",color:r,...Me,position:h,children:i})]})},Bt=(t,s,r)=>{const o=new De;return o.moveTo(-t/2+r,-s/2),o.lineTo(t/2-r,-s/2),o.quadraticCurveTo(t/2,-s/2,t/2,-s/2+r),o.lineTo(t/2,s/2-r),o.quadraticCurveTo(t/2,s/2,t/2-r,s/2),o.lineTo(-t/2+r,s/2),o.quadraticCurveTo(-t/2,s/2,-t/2,s/2-r),o.lineTo(-t/2,-s/2+r),o.quadraticCurveTo(-t/2,-s/2,-t/2+r,-s/2),o},Dt=({width:t,height:s,radius:r,color:o})=>{const i=Bt(t,s,r);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[i]}),e.jsx("meshBasicMaterial",{color:o,opacity:.9,transparent:!0})]})},Nt=({name:t,url:s,type:r})=>e.jsxs(Gt,{children:[s&&e.jsx("img",{alt:"",className:"image",src:s}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(Ne,{type:r})}),e.jsx("div",{className:"action-btn",children:e.jsx(Te,{})})]}),Gt=m(S)`
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
`,U=l.memo(({width:t,height:s,position:r,url:o,onButtonClick:i,name:d,type:h,color:f})=>{const{camera:a}=F();return e.jsxs("group",{position:r,children:[e.jsx(Dt,{color:f,height:s,radius:1.5,width:t}),!1,e.jsx(Ae,{position:[-t/2,s/2,0],children:e.jsx(S,{onClick:()=>i(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*a.zoom}px`,height:`${s*a.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:e.jsx(Nt,{name:`${d}`,type:h||"",url:o})})})]})});U.displayName="Node";const te=144/10,Y=84/10,Zt=()=>{const t=F(),{dataInitial:s}=G(i=>i),{viewport:r}=t,o=l.useMemo(()=>{if(!s)return{nodes:[],edges:[],relatedNodes:{}};const i=s.links.filter(a=>{var n;return(n=a==null?void 0:a.properties)==null?void 0:n.start}).map(a=>{var n;return{source:a.source,target:a.target,start:(n=a.properties)==null?void 0:n.start}}),d=s.nodes.filter(a=>s.links.some(n=>n.source===a.ref_id||n.target===a.ref_id)).map(a=>{const n=i.find(x=>a.ref_id===x.source||a.ref_id===x.target),g=((n==null?void 0:n.start)||0)*(r.width/10);return{...a,x:g,y:0,z:0,start:(n==null?void 0:n.start)||0}}).filter(a=>a.node_type!=="Clip"&&a.node_type!=="Episode"&&a.node_type!=="Show"),h=d.reduce((a,n)=>{const g=s.links.filter(p=>{var w;return!((w=p==null?void 0:p.properties)!=null&&w.start)&&[p.target,p.source].includes(n.ref_id)}),c=s.nodes.filter(p=>p.node_type!=="Episode"&&p.node_type!=="Clip"&&p.ref_id!==n.ref_id&&g.some(w=>[w.source,w.target].includes(p.ref_id))).map((p,w)=>{const{x:u}=n,j=(Math.floor(w/2)+1)*Y*2*(w%2===0?1:-1);return{...p,x:u,y:j,z:0}}),x=g.map(p=>{if(p.source===n.ref_id){const u=c.find(j=>j.ref_id===p.target);return{...p,sourcePositions:{x:n.x,y:n.y,z:n.z},targetPositions:{x:u==null?void 0:u.x,y:u==null?void 0:u.y,z:u==null?void 0:u.z}}}const w=c.find(u=>u.ref_id===p.source);return{...p,sourcePositions:{x:w==null?void 0:w.x,y:w==null?void 0:w.y,z:w==null?void 0:w.z},targetPositions:{x:n.x,y:n.y,z:n.z}}});return a[n.ref_id]={nodes:c,edges:x},a},{}),f=Object.values(h).flatMap(a=>a.edges).filter(a=>{var n;return(n=a==null?void 0:a.sourcePositions)==null?void 0:n.x});return{nodes:d,edges:f,relatedNodes:Object.fromEntries(Object.entries(h).map(([a,n])=>[a,n.nodes]))}},[s,r.width]);return e.jsxs(e.Fragment,{children:[o.nodes.map(i=>{var d,h;return e.jsxs(l.Fragment,{children:[e.jsx(U,{color:"#353A46",height:Y,name:((d=i==null?void 0:i.properties)==null?void 0:d.name)||"",onButtonClick:console.log,position:[i.x,i.y,i.z],type:i.node_type,url:((h=i==null?void 0:i.properties)==null?void 0:h.image_url)||"logo.png",width:te}),(o.relatedNodes[i.ref_id]||[]).map(f=>{var a,n;return e.jsx(U,{color:"#353A46",height:Y,name:((a=f==null?void 0:f.properties)==null?void 0:a.name)||"",onButtonClick:console.log,position:[f.x,f.y,f.z],type:f.node_type,url:((n=f==null?void 0:f.properties)==null?void 0:n.image_url)||"logo.png",width:te},`${f.ref_id}-${i.ref_id}`)})]},i.ref_id)}),o.edges.map((i,d)=>i!=null&&i.sourcePositions&&(i!=null&&i.targetPositions)?e.jsx(Ht,{label:i.edge_type||"",sourcePosition:new A(i.sourcePositions.x,i.sourcePositions.y,i.sourcePositions.z),targetPosition:new A(i.targetPositions.x,i.targetPositions.y,i.targetPositions.z)},`edge-${d}`):null)]})},Ot=()=>{const{camera:t,viewport:s}=F(),r=k(o=>o.playerRef);return ie(()=>{if(r){const o=r.getCurrentTime();t.position.x=o*s.width/10}}),null},Vt=()=>{const{camera:t,gl:s}=F();return l.useEffect(()=>{const r=t,o=d=>{d.preventDefault(),d.ctrlKey&&(r.zoom+=d.deltaY*-.1,r.zoom=Math.max(2,Math.min(r.zoom,20))),r.position.x+=d.deltaX*.1,r.updateProjectionMatrix()},i=s.domElement;return i.addEventListener("wheel",o,{passive:!1}),()=>{i.removeEventListener("wheel",o)}},[t,s]),null},ue=l.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs(Le,{orthographic:!0,children:[e.jsx(Ot,{}),e.jsx(Oe,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(Zt,{}),e.jsx(Vt,{})]})})));ue.displayName="Scene";const Yt=(t,s)=>{let r=0,o=t.length-1;for(;r<=o;){const i=Math.floor((r+o)/2),d=t[i],{start:h,end:f}=d.properties;if(s>=h&&s<=f)return d;s<h?o=i-1:r=i+1}return null},qt=({mediaUrl:t})=>{const s=l.useRef(null),[r,o]=l.useState("ready"),[i,d]=l.useState(!1),{setActiveEdge:h}=ne(T=>T),{dataInitial:f}=G(T=>T),{isPlaying:a,playingTime:n,setIsPlaying:g,setPlayingTime:C,setDuration:c,playingNode:x,volume:p,setHasError:w,resetPlayer:u,isSeeking:j,setIsSeeking:_,setPlayerRef:v,playerRef:y,playbackSpeed:E}=k(T=>T);l.useEffect(()=>()=>u(),[u]),l.useEffect(()=>{x&&!i&&(C(0),c(0),d(!1))},[x,C,c,d,i]),l.useEffect(()=>{j&&y&&(y.seekTo(n,"seconds"),_(!1))},[n,j,_,y]);const I=l.useCallback(()=>{g(!a)},[a,g]),W=()=>{w(!0),o("error")},z=l.useCallback(T=>{T.code==="Space"&&(T.preventDefault(),I())},[I]);l.useEffect(()=>(window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}),[z]);const P=l.useMemo(()=>((f==null?void 0:f.links.filter(M=>{var D;return(D=M==null?void 0:M.properties)==null?void 0:D.start}))||[]).slice().sort((M,D)=>{var J,K;return((J=M==null?void 0:M.properties)==null?void 0:J.start)-((K=D==null?void 0:D.properties)==null?void 0:K.start)}),[f]),L=T=>{if(!j){const N=T.playedSeconds,M=Yt(P,N);h(M||null)}},$=()=>{y&&o("ready")},O=l.useCallback(()=>{a||g(!0)},[g,a]),H=l.useCallback(()=>{a&&g(!1)},[g,a]),B=T=>{T.stopPropagation()},R=l.useCallback(T=>{!y&&T&&v(T)},[v,y]);return t?e.jsxs(Ut,{ref:s,tabIndex:0,children:[e.jsx(Jt,{isFullScreen:!1,children:e.jsx(oe,{size:120,src:(x==null?void 0:x.image_url)||"",type:"clip"})}),e.jsx(Qt,{isFullScreen:!1,onClick:B,children:e.jsx(Pe,{ref:R,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:W,onPause:H,onPlay:O,onProgress:L,onReady:$,playbackRate:E,playing:a,url:t||"",volume:p,width:"100%"})}),r==="error"?e.jsx(Kt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Ut=m(S)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Jt=m(S)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Kt=m(S)`
  height: 60px;
  padding: 12px 16px;
  color: ${b.primaryRed};
`,Qt=m.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Xt=l.memo(qt),fe=l.forwardRef(({active:t,start:s,text:r},o)=>e.jsxs(er,{ref:o,className:we({active:t}),children:[e.jsx(tr,{children:s}),e.jsx(rr,{children:e.jsx("span",{children:r})})]}));fe.displayName="ParagraphComponent";const q=l.memo(fe,(t,s)=>t.active===s.active),er=m(S)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${b.AI_HIGHLIGHT};
  }
`,tr=m.span`
  background: ${b.lightBlue100};
  color: ${b.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,rr=m.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${b.AI_HIGHLIGHT};
  }
`,sr=({transcriptString:t,isFirst:s})=>{const[r,o]=l.useState(0),[i,d]=l.useState(!1),{playerRef:h}=k(c=>c),f=t.replace(/^["']|["']$/g,""),a=JSON.parse(f),n=l.useRef(null),g=l.useRef(null),C=l.useRef(null);return l.useEffect(()=>{const c=setInterval(()=>{if(h&&o){const x=h.getCurrentTime();o(x)}},100);return()=>clearInterval(c)},[h,o]),l.useEffect(()=>{const c=()=>{d(!0),C.current&&clearTimeout(C.current),C.current=setTimeout(()=>{d(!1)},1e3)},x=g.current;return x&&x.addEventListener("scroll",c),()=>{x&&x.removeEventListener("scroll",c)}},[]),l.useEffect(()=>{!i&&n.current&&n.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,i]),e.jsx(or,{ref:g,children:e.jsx(e.Fragment,{children:s?e.jsx(e.Fragment,{children:a[0].start>r?e.jsx(q,{active:!1,start:V(a[0].start),text:a[0].text}):e.jsx(e.Fragment,{children:a.map(c=>{const x=V(c.start),p=c.start<r&&r<c.end;return!s||c.start<=r+5?e.jsx(q,{ref:p?n:null,active:p,start:x,text:c.text},`${c.start}-${c.end}`):null})})}):e.jsx(e.Fragment,{children:a.map(c=>{const x=V(c.start),p=c.start<r&&r<c.end;return e.jsx(q,{ref:p?n:null,active:p,start:x,text:c.text},`${c.start}-${c.end}`)})})})})},or=m.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,nr=({name:t})=>{var w;const{selectedEpisodeId:s}=Z(u=>u),{playerRef:r}=k(u=>u),[o,i]=l.useState(0),[d,h]=l.useState(null),[f,a]=l.useState(!0),[n,g,C]=ne(u=>[u.setActiveNode,u.activeNode,u.simulation]),[c,x]=l.useState([]);l.useEffect(()=>{s&&(async()=>{try{const j=await se(s,0,50,{nodeType:["Clip"],useSubGraph:!1});if(j!=null&&j.nodes){const _=j.nodes.sort((v,y)=>{var W,z;const E=p((W=v.properties)==null?void 0:W.timestamp)[0],I=p((z=y.properties)==null?void 0:z.timestamp)[0];return E-I});x(_)}}catch(j){console.error("Failed to fetch clips:",j)}})()},[s]),l.useEffect(()=>{const u=setInterval(()=>{if(r&&i){const j=r.getCurrentTime();i(j)}},100);return()=>clearInterval(u)},[r,i]),l.useEffect(()=>{o&&(()=>{var _;const j=c.find(v=>{var I;const[y,E]=p((I=v==null?void 0:v.properties)==null?void 0:I.timestamp);return y<=o&&o<E});d&&(j==null?void 0:j.ref_id)===(d==null?void 0:d.ref_id)||!j||(a((j==null?void 0:j.ref_id)===((_=c[0])==null?void 0:_.ref_id)),h(j||null))})()},[o,c,d]),l.useEffect(()=>{if(d&&(!g||d.ref_id!==g.ref_id)){const u=C==null?void 0:C.nodes().find(j=>j.ref_id===d.ref_id);(u==null?void 0:u.fx)!==void 0&&n(u)}},[d,g,n,C]);const p=u=>u?u.split("-").map(Number):[0,0];return e.jsxs(ir,{children:[e.jsx(S,{className:"heading",children:t}),d?e.jsx(ar,{direction:"row",children:((w=d.properties)==null?void 0:w.transcript)&&e.jsx(sr,{isFirst:f,transcriptString:d.properties.transcript})}):null]})},ir=m(S)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${b.white};
  background: ${b.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
`,ar=m(S)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,cr=()=>{const{selectedEpisodeLink:t,selectedEpisode:s}=Z(r=>r);return e.jsxs(lr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(pr,{children:t&&e.jsx(Xt,{mediaUrl:t})}),e.jsx(nr,{name:(s==null?void 0:s.name)||""})]})},lr=m(S)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[t.breakpoints.up("sm")]:{width:$e,gap:"10px"}})),pr=m(S)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),kr=()=>{const{addNewNode:t,isFetching:s,runningProjectId:r}=G(_=>_),[o,i]=l.useState(null),[d,h]=l.useState(!1),{selectedEpisodeId:f,setSelectedEpisode:a}=Z(_=>_),n=Ie(),g=l.useRef(null),C=l.useRef(null),c=l.useRef(null),x=l.useRef(null),p=l.useRef(null),{setPlayingNode:w}=k(_=>_),u=l.useCallback(_=>{s||(x.current||(x.current={nodes:[],edges:[]}),_.edges&&x.current.edges.push(..._.edges),_.nodes&&x.current.nodes.push(..._.nodes),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{if(x.current){const{nodes:v,edges:y}=x.current,E={nodes:v,edges:y};x.current={nodes:[],edges:[]},t(E)}},3e3))},[t,s]);l.useEffect(()=>{f&&(async()=>{try{const v=await se(f,0,50);i(v);const[y,E]=((v==null?void 0:v.nodes)||[]).reduce(([P,L],$)=>(["Episode","Show","Host","Guest"].includes($.node_type)?P.push($):L.push($),[P,L]),[[],[]]),I=new Set(y.map(P=>P.ref_id)),[W,z]=((v==null?void 0:v.edges)||[]).reduce(([P,L],$)=>(I.has($.source)&&I.has($.target)?P.push($):L.push($),[P,L]),[[],[]]);c.current={nodes:E||[],edges:z||[]},t({nodes:y,edges:W})}catch(v){console.error(v)}})()},[f,t]),l.useEffect(()=>{f&&(async()=>{try{const v=await be(f);v&&(w(v),a(v))}catch(v){console.error(v)}})()},[f,w,a]),l.useEffect(()=>(n&&(n.connect(),n.on("connect_error",_=>{console.error("Socket connection error:",_)}),r&&n.on("new_node_created",u)),()=>{n&&n.off()}),[n,u,r]),l.useEffect(()=>{const _=v=>{const{playerRef:y}=k.getState();if(C.current!==null){if(v-C.current>1e3){if(c.current&&y){const{nodes:I,edges:W}=c.current,z=y==null?void 0:y.getCurrentTime(),[P,L]=W.reduce(([H,B],R)=>{var T,N;return((T=R==null?void 0:R.properties)==null?void 0:T.start)!==void 0&&((N=R==null?void 0:R.properties)==null?void 0:N.start)<z+1?H.push(R):B.push(R),[H,B]},[[],[]]),[$,O]=I.reduce(([H,B],R)=>(P.some(T=>T.target===R.ref_id||T.source===R.ref_id)?H.push(R):B.push(R),[H,B]),[[],[]]);c.current={nodes:O,edges:L},($.length||P.length)&&t({nodes:$,edges:P})}C.current=v}}else C.current=v;g.current=requestAnimationFrame(_)};return g.current=requestAnimationFrame(_),()=>{g.current&&cancelAnimationFrame(g.current)}},[c,t]),l.useEffect(()=>{if(r)try{n==null||n.emit("update_project_id",{id:r})}catch(_){console.error(_)}},[r,n]);const j=l.useMemo(()=>{if(o){const _=o.edges.filter(y=>{var E;return(E=y==null?void 0:y.properties)==null?void 0:E.start}).map(y=>{var E;return{source:y.source,target:y.target,start:(E=y.properties)==null?void 0:E.start}});return o.nodes.filter(y=>o.edges.some(E=>E.source===y.ref_id||E.target===y.ref_id)).map(y=>{const E=_.find(I=>y.ref_id===I.source||y.ref_id===I.target);return{...y,start:(E==null?void 0:E.start)||0}}).filter(y=>y&&y.node_type!=="Clip"&&y.node_type!=="Episode"&&y.node_type!=="Show")}return[]},[o]);return e.jsxs(dr,{children:[e.jsx(ur,{direction:"row",children:f?e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(S,{onClick:()=>h(!d),children:e.jsx(qe,{})}),e.jsx(cr,{})]}),e.jsx(fr,{children:e.jsx(S,{basis:"100%",grow:1,shrink:1,children:d?e.jsx(ue,{}):e.jsx(je,{})})})]}):e.jsx(wt,{})}),e.jsx(xr,{children:e.jsx(Wt,{markers:j})})]})},dr=m.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,ur=m(S)`
  flex: 1;
  overflow: hidden;
`,fr=m(S)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,xr=m(S)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{kr as MindSet};
