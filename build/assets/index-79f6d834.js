import{r as l,x as xe,c as he,j as e,s as m,a as C,F as _,T as ge,u as N,d as se,y as me,N as X,z as ye,A as we,D as be,E as V}from"./index-04f9e7e6.js";import{Universe as je}from"./index-971cba7b.js";import{b as oe,c as $,M as Ce,V as ve,d as _e,e as Se,f as Ee,g as Te,h as ne,a as Ie}from"./index-292d93f3.js";import{S as Re,R as Pe,s as Y,M as $e}from"./index-e6c92504.js";import{u as W,a as ie,m as ke,T as ze,f as Me,H as Ae,C as We}from"./index-dfd22792.js";import{W as Le,L as ee,H as Fe,D as He,F as De,V as z,S as Be}from"./three.module-ba6167ce.js";import{T as Ge}from"./index-782ff866.js";import"./index-0f3ae51e.js";import"./TextareaAutosize-6a1de228.js";import"./index-51ac9e53.js";import"./ClipLoader-c5e3f404.js";import"./Skeleton-38c1ef25.js";import"./Stack-9bdcdce4.js";import"./isPlainObject-0689f20b.js";import"./Typography-1878e488.js";import"./createSvgIcon-a3d1c07a.js";import"./index-734a9b6e.js";function Ne(t,s,r){const{gl:o,size:i,viewport:d}=W(),y=typeof t=="number"?t:i.width*d.dpr,u=typeof s=="number"?s:i.height*d.dpr,a=(typeof t=="number"?r:t)||{},{samples:c=0,depth:g,...w}=a,p=l.useMemo(()=>{let f;return f=new Le(y,u,{minFilter:ee,magFilter:ee,encoding:o.outputEncoding,type:Fe,...w}),g&&(f.depthTexture=new He(y,u,De)),f.samples=c,f},[]);return l.useLayoutEffect(()=>{p.setSize(y,u),c&&(p.samples=c)},[c,p,y,u]),l.useEffect(()=>()=>p.dispose(),[]),p}const Ze=t=>typeof t=="function",Oe=l.forwardRef(({envMap:t,resolution:s=256,frames:r=1/0,children:o,makeDefault:i,...d},y)=>{const u=W(({set:h})=>h),a=W(({camera:h})=>h),c=W(({size:h})=>h),g=l.useRef(null),w=l.useRef(null),p=Ne(s);l.useLayoutEffect(()=>{d.manual||g.current.updateProjectionMatrix()},[c,d]),l.useLayoutEffect(()=>{g.current.updateProjectionMatrix()}),l.useLayoutEffect(()=>{if(i){const h=a;return u(()=>({camera:g.current})),()=>u(()=>({camera:h}))}},[g,i,u]);let f=0,n=null;const x=Ze(o);return ie(h=>{x&&(r===1/0||f<r)&&(w.current.visible=!1,h.gl.setRenderTarget(p),n=h.scene.background,t&&(h.scene.background=t),h.gl.render(h.scene,g.current),h.scene.background=n,h.gl.setRenderTarget(null),w.current.visible=!0,f++)}),l.createElement(l.Fragment,null,l.createElement("orthographicCamera",xe({left:c.width/-2,right:c.width/2,top:c.height/2,bottom:c.height/-2,ref:ke([g,y])},d),!x&&o),l.createElement("group",{ref:w},x&&o(p.texture)))}),Ve={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null,clips:[]},D=he(t=>({...Ve,setSelectedEpisodeId:s=>t({selectedEpisodeId:s}),setSelectedEpisodeLink:s=>t({selectedEpisodeLink:s}),setSelectedEpisode:s=>t({selectedEpisode:s}),setClips:s=>t({clips:s})})),Ye=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),qe=()=>e.jsxs(Ue,{children:[e.jsx(Je,{children:e.jsx(Ke,{children:e.jsx(Ye,{})})}),e.jsx(Qe,{children:"Graph Mindset"})]}),Ue=m(_).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Je=m(_)`
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
    color: ${C.white};
  }
`,Qe=m(ge)`
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
`,Xe=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),et=({imageUrl:t,title:s,subtitle:r,onClick:o})=>{const i=s.length>35?`${s.substring(0,32)}...`:s,d=r.length>50?`${r.substring(0,47)}...`:r;return e.jsxs(tt,{onClick:o,children:[e.jsx(rt,{children:e.jsx(oe,{height:140,src:t,type:"Episode",width:170})}),e.jsxs(st,{children:[e.jsx(ot,{children:i}),e.jsx(nt,{children:d})]})]})},tt=m(_)`
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
`,rt=m.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,st=m(_)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,ot=m.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${C.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,nt=m.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${C.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,it=/^(https?:\/\/)/,at=/(www\.)?/,ct=/[\w-]+(\.[\w-]+)*/,lt=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,pt=/(\/[^\s?]*)?/,dt=/(\?[^\s]*)?/,ut=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ft=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,xt=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ht=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,gt=new RegExp(`${it.source}${at.source}${ct.source}${lt.source}?${pt.source}${dt.source}$`,"i"),mt=t=>{try{if(!(t==null?void 0:t.match(gt)))return!1;const o=new URL(t).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}catch{return!1}},te=t=>mt(t)?[ut,ft,xt,ht].some(r=>r.test(t)):!1,ae=[{date_added_to_graph:1733218679827695e-6,node_type:"Episode",properties:{date:1731888e3,episode_title:"AI Agents and AI Assistants: A Contrast in Function",image_url:"https://i.ytimg.com/vi/IivxYYkJ2DI/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/62110bc0-6b27-4779-9d5e-320eab6fae84/IivxYYkJ2DI.mp3",source_link:"https://www.youtube.com/watch?v=IivxYYkJ2DI",status:"completed"},ref_id:"b8784fb9-efa8-4a25-8a78-e14be96a4387"},{date_added_to_graph:1733323898765796e-6,node_type:"Episode",properties:{date:1733184e3,episode_title:"Joe Rogan Experience #2237 - Mike Benz",image_url:"https://i.ytimg.com/vi_webp/rrJhQpvlkLA/sddefault.webp",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/b4c6220e-7048-431c-80c4-90e56b71bd06/rrJhQpvlkLA.mp3",source_link:"https://www.youtube.com/watch?v=rrJhQpvlkLA",status:"completed"},ref_id:"2e51fdb8-a1f1-4e1f-b9d5-4dbdae00b1a2"},{date_added_to_graph:17326354109931817e-7,node_type:"Episode",properties:{date:1730851200,description:"Exploring the Transformative Potential of Llama, the Open-Source AI Model",episode_title:"Llama: The Open-Source AI Model that's Changing How We Think About AI",image_url:"https://i.ytimg.com/vi/8c2LnKNoSmg/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/a4542523-6b12-4baa-bce7-ed63f2704955/8c2LnKNoSmg.mp3",source_link:"https://www.youtube.com/watch?v=8c2LnKNoSmg",status:"completed"},ref_id:"87f5e4c5-39c2-4773-8208-8c1c4fe4019b"}];console.log(ae);const yt=async t=>{const s="add_node",r={};r.media_url=t.source,r.content_type="audio_video";const o=await ye.post(`/${s}`,JSON.stringify(r));if(o.error){const{message:i}=o.error;throw new Error(i)}return o},wt=()=>{const[t,s]=l.useState(""),[r,o]=l.useState(!1),[i,d]=l.useState(""),{setRunningProjectId:y}=N(p=>p),{setSelectedEpisodeId:u,setSelectedEpisodeLink:a}=D(p=>p),{setSchemas:c}=se(p=>p);l.useEffect(()=>{(async()=>{try{const f=await me();c(f.schemas.filter(n=>!n.is_deleted))}catch(f){console.error("Error fetching schema:",f)}})()},[c]);const g=p=>{const{value:f}=p.target;s(f),o(f!==""&&!te(f))},w=async p=>{const f=p||t;if(te(f))try{const n=await yt({source:f});n.data.project_id&&y(n.data.project_id),n.data.ref_id&&(u(n.data.ref_id),a(f))}catch(n){let x=X;if((n==null?void 0:n.status)===400){const h=await n.json();x=h.errorCode||(h==null?void 0:h.status)||X,h.data.ref_id&&(u(h.data.ref_id),a(f))}else n instanceof Error&&(x=n.message);d(String(x))}};return e.jsxs(bt,{children:[e.jsx(jt,{children:"Ideas have shapes"}),e.jsxs(vt,{children:[e.jsx(Ct,{error:r,onChange:g,onKeyDown:p=>p.key==="Enter"&&w(),placeholder:"Paste podcast or video link",value:t}),e.jsx(_t,{error:r,onClick:r?void 0:()=>w(),children:e.jsx(Xe,{})})]}),i&&e.jsx("div",{children:i}),e.jsx(St,{children:ae.map(p=>{var f,n;return e.jsx(et,{imageUrl:((f=p==null?void 0:p.properties)==null?void 0:f.image_url)||"",onClick:()=>{var x;return w((x=p==null?void 0:p.properties)==null?void 0:x.source_link)},subtitle:"",title:((n=p==null?void 0:p.properties)==null?void 0:n.episode_title)||""},p==null?void 0:p.ref_id)})})]})},bt=m(_)`
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
`,jt=m(_)`
  color: ${C.white};
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
  border: 1px solid ${t=>t.error?"red":C.DIVIDER_4};
  background: ${C.INPUT_BG};
  color: ${C.white};
  font-family: Barlow;
  font-size: 16px;
  &::placeholder {
    color: ${C.INPUT_PLACEHOLDER};
  }
  &:focus {
    outline: none;
    border-color: ${t=>t.error?"red":C.primaryBlue};
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
  color: ${C.white};
  font-size: 20px;
  cursor: ${t=>t.error?"not-allowed":"pointer"};
  svg {
    width: 8px;
    height: 17px;
    color: ${C.GRAY6};
  }
`,St=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,ce=l.memo(()=>{const t=$(n=>n.isPlaying),s=$(n=>n.setIsPlaying),r=$(n=>n.setVolume),o=$(n=>n.setPlaybackSpeed),i=$(n=>n.playbackSpeed),d=$(n=>n.playerRef),[y,u]=l.useState(!1),a=[.5,1,1.5,2],c=()=>{if(d){const n=d.getCurrentTime()-15;d.seekTo(n,"seconds")}},g=()=>{if(d){const n=d.getCurrentTime()+15;d.seekTo(n,"seconds")}},w=()=>{s(!t)},p=()=>{u(!y),r(y?1:0)},f=()=>{const x=(a.indexOf(i)+1)%a.length,h=a[x];if(o(h),d){const T=d.getInternalPlayer();T&&typeof T.playbackRate<"u"&&(T.playbackRate=h)}};return e.jsxs(Et,{children:[e.jsx(Pt,{onClick:p,children:y?e.jsx(Ce,{}):e.jsx(ve,{})}),e.jsx(It,{onClick:c,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(Tt,{"data-testid":"play-pause-button",onClick:w,size:"small",children:t?e.jsx(_e,{"data-testid":"pause-icon"}):e.jsx(Se,{"data-testid":"play-icon"})}),e.jsx(Rt,{onClick:g,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})}),e.jsxs($t,{onClick:f,children:[i,"x"]})]})});ce.displayName="Controls";const Et=m(_).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${C.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${C.white};
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
  color: ${C.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${C.DROPDOWN_BG};
  }
`,$t=m.button`
  margin-top: 4px;
  background: ${C.BG1};
  color: ${C.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`,le=l.memo(({type:t,left:s,img:r})=>{var a,c;const o=se(g=>g.normalizedSchemasByType),i=(a=o[t])==null?void 0:a.primary_color,d=(c=o[t])==null?void 0:c.icon,y=d?`svg-icons/${d}.svg`:"",u={iconStart:r||y,color:i??C.THING};return e.jsx(zt,{style:{left:`${s}%`},children:e.jsx(pe,{...u,label:t})})});le.displayName="Marker";const pe=l.memo(({iconStart:t,color:s,label:r})=>e.jsx(kt,{color:s,children:t&&e.jsx("img",{alt:r,className:"badge__img",src:t})}));pe.displayName="Badge";const kt=m(_).attrs({direction:"row"})`
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
  background-color: ${C.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,de=l.memo(({markers:t,duration:s})=>e.jsx(e.Fragment,{children:t.map((r,o)=>{var u;const i=Math.floor(((r==null?void 0:r.start)||0)/s*200),d=(r==null?void 0:r.node_type)||"",y=((u=r==null?void 0:r.properties)==null?void 0:u.image_url)||"";return e.jsx(le,{img:y,left:i,type:d},`${r.ref_id}_${o}`)})}));de.displayName="Markers";const Mt=({duration:t,markers:s,handleProgressChange:r,playingTIme:o})=>{const i=10/t*100;return e.jsxs(At,{children:[e.jsx(Wt,{max:t,onChange:r,value:o,width:i}),e.jsx(de,{duration:t,markers:s})]})},At=m(_)`
  position: relative;
  flex: 1 1 100%;
`,Wt=m(Re)`
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
      width: ${({width:t})=>`${t}%`};
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
`,Lt=({markers:t})=>{const{playingNode:s,playerRef:r}=$(a=>a),[o,i]=l.useState(0),d=s,y=l.useCallback((a,c)=>{const g=Array.isArray(c)?c[0]:c;r&&r.seekTo(g,"seconds")},[r]);l.useEffect(()=>{const a=setInterval(()=>{if(r&&i){const c=r.getCurrentTime();i(c)}},500);return()=>clearInterval(a)},[r,i]);const u=(r==null?void 0:r.getDuration())||0;return d?e.jsxs(Ft,{children:[e.jsx(ce,{}),e.jsx(Mt,{duration:u,handleProgressChange:y,markers:t,playingTIme:o})]}):null},Ft=m(_).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${C.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Ht=({sourcePosition:t,targetPosition:s,color:r="white",arrowSize:o=1,label:i="label"})=>{const{points:d,textPosition:y}=l.useMemo(()=>{const u=new z(t.x,t.y,t.z),a=new z(s.x,s.y,s.z),c=new z().subVectors(a,u).normalize(),g=new z().addVectors(u,a).multiplyScalar(.5),w=new z().copy(c).multiplyScalar(-o).applyAxisAngle(new z(0,0,1),Math.PI/6),p=new z().copy(c).multiplyScalar(-o).applyAxisAngle(new z(0,0,1),-Math.PI/6);return{points:[u,a,a.clone(),a.clone().add(w),a.clone(),a.clone().add(p)],textPosition:g}},[t,s,o]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(d.flatMap(u=>[u.x,u.y,u.z])),attach:"attributes-position",count:d.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:r})]}),i&&e.jsx(ze,{anchorX:"center",anchorY:"middle",color:r,...Me,position:y,children:i})]})},Dt=(t,s,r)=>{const o=new Be;return o.moveTo(-t/2+r,-s/2),o.lineTo(t/2-r,-s/2),o.quadraticCurveTo(t/2,-s/2,t/2,-s/2+r),o.lineTo(t/2,s/2-r),o.quadraticCurveTo(t/2,s/2,t/2-r,s/2),o.lineTo(-t/2+r,s/2),o.quadraticCurveTo(-t/2,s/2,-t/2,s/2-r),o.lineTo(-t/2,-s/2+r),o.quadraticCurveTo(-t/2,-s/2,-t/2+r,-s/2),o},Bt=({width:t,height:s,radius:r,color:o})=>{const i=Dt(t,s,r);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[i]}),e.jsx("meshBasicMaterial",{color:o,opacity:.9,transparent:!0})]})},Gt=({name:t,url:s,type:r})=>e.jsxs(Nt,{children:[s&&e.jsx("img",{alt:"",className:"image",src:s}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(Ge,{type:r})}),e.jsx("div",{className:"action-btn",children:e.jsx(Te,{})})]}),Nt=m(_)`
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
`,J=l.memo(({width:t,height:s,position:r,url:o,onButtonClick:i,name:d,type:y,color:u})=>{const{camera:a}=W();return e.jsxs("group",{position:r,children:[e.jsx(Bt,{color:u,height:s,radius:1.5,width:t}),!1,e.jsx(Ae,{position:[-t/2,s/2,0],children:e.jsx(_,{onClick:()=>i(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*a.zoom}px`,height:`${s*a.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:e.jsx(Gt,{name:`${d}`,type:y||"",url:o})})})]})});J.displayName="Node";const re=144/10,q=84/10,Zt=()=>{const t=W(),{dataInitial:s}=N(i=>i),{viewport:r}=t,o=l.useMemo(()=>{if(!s)return{nodes:[],edges:[],relatedNodes:{}};const i=s.links.filter(a=>{var c;return(c=a==null?void 0:a.properties)==null?void 0:c.start}).map(a=>{var c;return{source:a.source,target:a.target,start:(c=a.properties)==null?void 0:c.start}}),d=s.nodes.filter(a=>s.links.some(c=>c.source===a.ref_id||c.target===a.ref_id)).map(a=>{const c=i.find(f=>a.ref_id===f.source||a.ref_id===f.target),g=((c==null?void 0:c.start)||0)*(r.width/10);return{...a,x:g,y:0,z:0,start:(c==null?void 0:c.start)||0}}).filter(a=>a.node_type!=="Clip"&&a.node_type!=="Episode"&&a.node_type!=="Show"),y=d.reduce((a,c)=>{const g=s.links.filter(n=>{var x;return!((x=n==null?void 0:n.properties)!=null&&x.start)&&[n.target,n.source].includes(c.ref_id)}),p=s.nodes.filter(n=>n.node_type!=="Episode"&&n.node_type!=="Clip"&&n.ref_id!==c.ref_id&&g.some(x=>[x.source,x.target].includes(n.ref_id))).map((n,x)=>{const{x:h}=c,T=(Math.floor(x/2)+1)*q*2*(x%2===0?1:-1);return{...n,x:h,y:T,z:0}}),f=g.map(n=>{if(n.source===c.ref_id){const h=p.find(T=>T.ref_id===n.target);return{...n,sourcePositions:{x:c.x,y:c.y,z:c.z},targetPositions:{x:h==null?void 0:h.x,y:h==null?void 0:h.y,z:h==null?void 0:h.z}}}const x=p.find(h=>h.ref_id===n.source);return{...n,sourcePositions:{x:x==null?void 0:x.x,y:x==null?void 0:x.y,z:x==null?void 0:x.z},targetPositions:{x:c.x,y:c.y,z:c.z}}});return a[c.ref_id]={nodes:p,edges:f},a},{}),u=Object.values(y).flatMap(a=>a.edges).filter(a=>{var c;return(c=a==null?void 0:a.sourcePositions)==null?void 0:c.x});return{nodes:d,edges:u,relatedNodes:Object.fromEntries(Object.entries(y).map(([a,c])=>[a,c.nodes]))}},[s,r.width]);return e.jsxs(e.Fragment,{children:[o.nodes.map(i=>{var d,y;return e.jsxs(l.Fragment,{children:[e.jsx(J,{color:"#353A46",height:q,name:((d=i==null?void 0:i.properties)==null?void 0:d.name)||"",onButtonClick:console.log,position:[i.x,i.y,i.z],type:i.node_type,url:((y=i==null?void 0:i.properties)==null?void 0:y.image_url)||"logo.png",width:re}),(o.relatedNodes[i.ref_id]||[]).map(u=>{var a,c;return e.jsx(J,{color:"#353A46",height:q,name:((a=u==null?void 0:u.properties)==null?void 0:a.name)||"",onButtonClick:console.log,position:[u.x,u.y,u.z],type:u.node_type,url:((c=u==null?void 0:u.properties)==null?void 0:c.image_url)||"logo.png",width:re},`${u.ref_id}-${i.ref_id}`)})]},i.ref_id)}),o.edges.map((i,d)=>i!=null&&i.sourcePositions&&(i!=null&&i.targetPositions)?e.jsx(Ht,{label:i.edge_type||"",sourcePosition:new z(i.sourcePositions.x,i.sourcePositions.y,i.sourcePositions.z),targetPosition:new z(i.targetPositions.x,i.targetPositions.y,i.targetPositions.z)},`edge-${d}`):null)]})},Ot=()=>{const{camera:t,viewport:s}=W(),r=$(o=>o.playerRef);return ie(()=>{if(r){const o=r.getCurrentTime();t.position.x=o*s.width/10}}),null},Vt=()=>{const{camera:t,gl:s}=W();return l.useEffect(()=>{const r=t,o=d=>{d.preventDefault(),d.ctrlKey&&(r.zoom+=d.deltaY*-.1,r.zoom=Math.max(2,Math.min(r.zoom,20))),r.position.x+=d.deltaX*.1,r.updateProjectionMatrix()},i=s.domElement;return i.addEventListener("wheel",o,{passive:!1}),()=>{i.removeEventListener("wheel",o)}},[t,s]),null},ue=l.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs(We,{orthographic:!0,children:[e.jsx(Ot,{}),e.jsx(Oe,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(Zt,{}),e.jsx(Vt,{})]})})));ue.displayName="Scene";const Yt=(t,s)=>{let r=0,o=t.length-1;for(;r<=o;){const i=Math.floor((r+o)/2),d=t[i],{start:y,end:u}=d.properties;if(s>=y&&s<=u)return d;s<y?o=i-1:r=i+1}return null},qt=({mediaUrl:t})=>{const s=l.useRef(null),[r,o]=l.useState("ready"),[i,d]=l.useState(!1),{setActiveEdge:y}=ne(E=>E),{dataInitial:u}=N(E=>E),{isPlaying:a,playingTime:c,setIsPlaying:g,setPlayingTime:w,setDuration:p,playingNode:f,volume:n,setHasError:x,resetPlayer:h,isSeeking:T,setIsSeeking:A,setPlayerRef:H,playerRef:j,playbackSpeed:v}=$(E=>E);l.useEffect(()=>()=>h(),[h]),l.useEffect(()=>{f&&!i&&(w(0),p(0),d(!1))},[f,w,p,d,i]),l.useEffect(()=>{T&&j&&(j.seekTo(c,"seconds"),A(!1))},[c,T,A,j]);const b=l.useCallback(()=>{g(!a)},[a,g]),S=()=>{x(!0),o("error")},P=l.useCallback(E=>{E.code},[b]);l.useEffect(()=>(window.addEventListener("keydown",P),()=>{window.removeEventListener("keydown",P)}),[P]);const L=l.useMemo(()=>((u==null?void 0:u.links.filter(R=>{var M;return(M=R==null?void 0:R.properties)==null?void 0:M.start}))||[]).slice().sort((R,M)=>{var K,Q;return((K=R==null?void 0:R.properties)==null?void 0:K.start)-((Q=M==null?void 0:M.properties)==null?void 0:Q.start)}),[u]),k=E=>{if(!T){const I=E.playedSeconds,R=Yt(L,I);y(R||null)}},B=()=>{j&&o("ready")},Z=l.useCallback(()=>{a||g(!0)},[g,a]),G=l.useCallback(()=>{a&&g(!1)},[g,a]),O=E=>{E.stopPropagation()},F=l.useCallback(E=>{!j&&E&&H(E)},[H,j]);return t?e.jsxs(Ut,{ref:s,tabIndex:0,children:[e.jsx(Jt,{isFullScreen:!1,children:e.jsx(oe,{size:120,src:(f==null?void 0:f.image_url)||"",type:"clip"})}),e.jsx(Qt,{isFullScreen:!1,onClick:O,children:e.jsx(Pe,{ref:F,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:S,onPause:G,onPlay:Z,onProgress:k,onReady:B,playbackRate:v,playing:a,url:t||"",volume:n,width:"100%"})}),r==="error"?e.jsx(Kt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Ut=m(_)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Jt=m(_)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Kt=m(_)`
  height: 60px;
  padding: 12px 16px;
  color: ${C.primaryRed};
`,Qt=m.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Xt=l.memo(qt),fe=l.forwardRef(({active:t,start:s,text:r},o)=>e.jsxs(er,{ref:o,className:we({active:t}),children:[e.jsx(tr,{children:s}),e.jsx(rr,{children:e.jsx("span",{children:r})})]}));fe.displayName="ParagraphComponent";const U=l.memo(fe,(t,s)=>t.active===s.active),er=m(_)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${C.AI_HIGHLIGHT};
  }
`,tr=m.span`
  background: ${C.lightBlue100};
  color: ${C.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,rr=m.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${C.AI_HIGHLIGHT};
  }
`,sr=({transcriptString:t,isFirst:s})=>{const[r,o]=l.useState(0),[i,d]=l.useState(!1),{playerRef:y}=$(p=>p),u=t.replace(/^["']|["']$/g,""),a=JSON.parse(u),c=l.useRef(null),g=l.useRef(null),w=l.useRef(null);return l.useEffect(()=>{const p=setInterval(()=>{if(y&&o){const f=y.getCurrentTime();o(f)}},100);return()=>clearInterval(p)},[y,o]),l.useEffect(()=>{const p=()=>{d(!0),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{d(!1)},1e3)},f=g.current;return f&&f.addEventListener("scroll",p),()=>{f&&f.removeEventListener("scroll",p)}},[]),l.useEffect(()=>{!i&&c.current&&c.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,i]),e.jsx(or,{ref:g,children:e.jsx(e.Fragment,{children:s?e.jsx(e.Fragment,{children:a[0].start>r?e.jsx(U,{active:!1,start:Y(a[0].start),text:a[0].text}):e.jsx(e.Fragment,{children:a.map(p=>{const f=Y(p.start),n=p.start<r&&r<p.end;return!s||p.start<=r+5?e.jsx(U,{ref:n?c:null,active:n,start:f,text:p.text},`${p.start}-${p.end}`):null})})}):e.jsx(e.Fragment,{children:a.map(p=>{const f=Y(p.start),n=p.start<r&&r<p.end;return e.jsx(U,{ref:n?c:null,active:n,start:f,text:p.text},`${p.start}-${p.end}`)})})})})},or=m.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,nr=({name:t})=>{var f;const s=D(n=>n.clips),{playerRef:r}=$(n=>n),[o,i]=l.useState(0),[d,y]=l.useState(null),[u,a]=l.useState(!0),[c,g,w]=ne(n=>[n.setActiveNode,n.activeNode,n.simulation]);l.useEffect(()=>{const n=setInterval(()=>{if(r&&i){const x=r.getCurrentTime();i(x)}},100);return()=>clearInterval(n)},[r,i]),l.useEffect(()=>{o&&(()=>{var h;const x=s.find(T=>{var j;const[A,H]=p((j=T==null?void 0:T.properties)==null?void 0:j.timestamp);return A<=o&&o<H});d&&(x==null?void 0:x.ref_id)===(d==null?void 0:d.ref_id)||!x||(a((x==null?void 0:x.ref_id)===((h=s[0])==null?void 0:h.ref_id)),y(x||null))})()},[o,s,d]),l.useEffect(()=>{if(d&&(!g||d.ref_id!==g.ref_id)){const n=w==null?void 0:w.nodes().find(x=>x.ref_id===d.ref_id);typeof(n==null?void 0:n.fx)=="number"&&c(n)}},[d,g,c,w]);const p=n=>n?n.split("-").map(Number):[0,0];return e.jsxs(ir,{children:[e.jsx(_,{className:"heading",children:t}),d?e.jsx(ar,{direction:"row",children:((f=d.properties)==null?void 0:f.transcript)&&e.jsx(sr,{isFirst:u,transcriptString:d.properties.transcript})}):null]})},ir=m(_)`
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
`,ar=m(_)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,cr=()=>{const{selectedEpisodeLink:t,selectedEpisode:s}=D(r=>r);return e.jsxs(lr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(pr,{children:t&&e.jsx(Xt,{mediaUrl:t})}),e.jsx(nr,{name:(s==null?void 0:s.name)||""})]})},lr=m(_)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[t.breakpoints.up("sm")]:{width:$e,gap:"10px"}})),pr=m(_)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),kr=()=>{const{addNewNode:t,isFetching:s,runningProjectId:r}=N(j=>j),[o,i]=l.useState(null),[d,y]=l.useState(!1),{selectedEpisodeId:u,setSelectedEpisode:a}=D(j=>j),c=D(j=>j.setClips),g=D(j=>j.clips),w=Ie(),p=l.useRef(null),f=l.useRef(null),n=l.useRef(null),x=l.useRef(null),h=l.useRef(null),{setPlayingNode:T}=$(j=>j);l.useEffect(()=>{u&&(async()=>{try{const v=await be(u);v&&(T(v),a(v),t({nodes:[v],edges:[]}))}catch(v){console.error(v)}})()},[u,T,a,t]),l.useEffect(()=>{u&&(async()=>{try{const v=await V(u,0,50,{nodeType:["Show","Host","Guest"],useSubGraph:!1}),b=await V(u,0,50,{nodeType:["Clip"],useSubGraph:!1});t({nodes:v!=null&&v.nodes?v==null?void 0:v.nodes:[],edges:v!=null&&v.edges?v.edges:[]}),b!=null&&b.nodes&&c(b==null?void 0:b.nodes)}catch(v){console.error("Error fetching initial data:",v)}})()},[u,t,c]),l.useEffect(()=>{if(!g)return;(async()=>{var v,b;try{const S=(g==null?void 0:g.map(L=>L.ref_id).filter(Boolean))||[],P={nodes:((v=n.current)==null?void 0:v.nodes)||[],edges:((b=n.current)==null?void 0:b.edges)||[]};for(const L of S){const k=await V(L,0,50);k&&(P.nodes.push(...(k==null?void 0:k.nodes)||[]),P.edges.push(...(k==null?void 0:k.edges)||[]),n.current=P,i({...P}))}}catch(S){console.error("Error processing clip nodes:",S)}})()},[g]);const A=l.useCallback(j=>{s||(x.current||(x.current={nodes:[],edges:[]}),j.edges&&x.current.edges.push(...j.edges),j.nodes&&x.current.nodes.push(...j.nodes),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{if(x.current){const{nodes:v,edges:b}=x.current,S={nodes:v,edges:b};x.current={nodes:[],edges:[]},t(S)}},3e3))},[t,s]);l.useEffect(()=>(w&&(w.connect(),w.on("connect_error",j=>{console.error("Socket connection error:",j)}),r&&w.on("new_node_created",A)),()=>{w&&w.off()}),[w,A,r]),l.useEffect(()=>{const j=v=>{const{playerRef:b}=$.getState();if(f.current!==null){if(v-f.current>1e3){if(n.current&&b){const{nodes:P,edges:L}=n.current,k=b==null?void 0:b.getCurrentTime(),[B,Z]=L.reduce(([F,E],I)=>{var R,M;return((R=I==null?void 0:I.properties)==null?void 0:R.start)!==void 0&&((M=I==null?void 0:I.properties)==null?void 0:M.start)<k+1?F.push(I):E.push(I),[F,E]},[[],[]]),[G,O]=P.reduce(([F,E],I)=>(B.some(R=>R.target===I.ref_id||R.source===I.ref_id)?F.push(I):E.push(I),[F,E]),[[],[]]);n.current={nodes:O,edges:Z},(G.length||B.length)&&t({nodes:G,edges:B})}f.current=v}}else f.current=v;p.current=requestAnimationFrame(j)};return p.current=requestAnimationFrame(j),()=>{p.current&&cancelAnimationFrame(p.current)}},[n,t]),l.useEffect(()=>{if(r)try{w==null||w.emit("update_project_id",{id:r})}catch(j){console.error(j)}},[r,w]);const H=l.useMemo(()=>{if(o){const j=o.edges.filter(b=>{var S;return(S=b==null?void 0:b.properties)==null?void 0:S.start}).map(b=>{var S;return{source:b.source,target:b.target,start:(S=b.properties)==null?void 0:S.start}});return o.nodes.filter(b=>o.edges.some(S=>S.source===b.ref_id||S.target===b.ref_id)).map(b=>{const S=j.find(P=>b.ref_id===P.source||b.ref_id===P.target);return{...b,start:(S==null?void 0:S.start)||0}}).filter(b=>b&&b.node_type!=="Clip"&&b.node_type!=="Episode"&&b.node_type!=="Show")}return[]},[o]);return e.jsxs(dr,{children:[e.jsx(ur,{direction:"row",children:u?e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsx(_,{onClick:()=>y(!d),children:e.jsx(qe,{})}),e.jsx(cr,{})]}),e.jsx(fr,{children:e.jsx(_,{basis:"100%",grow:1,shrink:1,children:d?e.jsx(ue,{}):e.jsx(je,{})})})]}):e.jsx(wt,{})}),e.jsx(xr,{children:e.jsx(Lt,{markers:H})})]})},dr=m.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,ur=m(_)`
  flex: 1;
  overflow: hidden;
`,fr=m(_)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,xr=m(_)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{kr as MindSet};
