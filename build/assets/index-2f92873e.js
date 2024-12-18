import{r as l,x as ue,c as fe,j as t,s as g,a as j,F as v,T as he,u as N,d as te,y as me,N as U,z as xe,A as ge,D as re,E as we}from"./index-6e5704db.js";import{Universe as ye}from"./index-c272e704.js";import{b as se,c as L,d as be,e as je,f as Ce,g as ve,h as _e,a as Ee}from"./index-ef7e01b5.js";import{S as Se,R as Te,s as J,M as Ie}from"./index-5abc9c57.js";import{u as A,a as oe,m as Re,T as Pe,f as ze,H as $e,C as ke}from"./index-38e90e3e.js";import{W as Me,L as K,H as Ae,D as Le,F as He,V as P,S as We}from"./three.module-9c942ca6.js";import{T as Fe}from"./index-e0151410.js";import"./index-898207ef.js";import"./TextareaAutosize-7cb9e8f0.js";import"./index-4d1eec50.js";import"./ClipLoader-6ba36c3f.js";import"./Skeleton-5feab5c5.js";import"./Stack-bce33733.js";import"./isPlainObject-86cb3288.js";import"./Typography-41b6bb1c.js";import"./createSvgIcon-1a2f11c1.js";import"./index-7d06f2bf.js";function Be(e,r,s){const{gl:o,size:n,viewport:d}=A(),w=typeof e=="number"?e:n.width*d.dpr,c=typeof r=="number"?r:n.height*d.dpr,i=(typeof e=="number"?s:e)||{},{samples:a=0,depth:m,...x}=i,p=l.useMemo(()=>{let u;return u=new Me(w,c,{minFilter:K,magFilter:K,encoding:o.outputEncoding,type:Ae,...x}),m&&(u.depthTexture=new Le(w,c,He)),u.samples=a,u},[]);return l.useLayoutEffect(()=>{p.setSize(w,c),a&&(p.samples=a)},[a,p,w,c]),l.useEffect(()=>()=>p.dispose(),[]),p}const De=e=>typeof e=="function",Ne=l.forwardRef(({envMap:e,resolution:r=256,frames:s=1/0,children:o,makeDefault:n,...d},w)=>{const c=A(({set:h})=>h),i=A(({camera:h})=>h),a=A(({size:h})=>h),m=l.useRef(null),x=l.useRef(null),p=Be(r);l.useLayoutEffect(()=>{d.manual||m.current.updateProjectionMatrix()},[a,d]),l.useLayoutEffect(()=>{m.current.updateProjectionMatrix()}),l.useLayoutEffect(()=>{if(n){const h=i;return c(()=>({camera:m.current})),()=>c(()=>({camera:h}))}},[m,n,c]);let u=0,f=null;const b=De(o);return oe(h=>{b&&(s===1/0||u<s)&&(x.current.visible=!1,h.gl.setRenderTarget(p),f=h.scene.background,e&&(h.scene.background=e),h.gl.render(h.scene,m.current),h.scene.background=f,h.gl.setRenderTarget(null),x.current.visible=!0,u++)}),l.createElement(l.Fragment,null,l.createElement("orthographicCamera",ue({left:a.width/-2,right:a.width/2,top:a.height/2,bottom:a.height/-2,ref:Re([m,w])},d),!b&&o),l.createElement("group",{ref:x},b&&o(p.texture)))}),Ge={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},G=fe(e=>({...Ge,setSelectedEpisodeId:r=>e({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>e({selectedEpisodeLink:r}),setSelectedEpisode:r=>e({selectedEpisode:r})})),Ze=e=>t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),t.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Ve=()=>t.jsxs(Oe,{children:[t.jsx(Ye,{children:t.jsx(qe,{children:t.jsx(Ze,{})})}),t.jsx(Ue,{children:"Graph Mindset"})]}),Oe=g(v).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Ye=g(v)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,qe=g.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${j.white};
  }
`,Ue=g(he)`
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
`,Je=e=>t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Ke=({imageUrl:e,title:r,subtitle:s,onClick:o})=>{const n=r.length>35?`${r.substring(0,32)}...`:r,d=s.length>50?`${s.substring(0,47)}...`:s;return t.jsxs(Qe,{onClick:o,children:[t.jsx(Xe,{children:t.jsx(se,{height:140,src:e,type:"Episode",width:170})}),t.jsxs(et,{children:[t.jsx(tt,{children:n}),t.jsx(rt,{children:d})]})]})},Qe=g(v)`
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
`,Xe=g.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,et=g(v)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,tt=g.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${j.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,rt=g.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${j.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,st=/^(https?:\/\/)/,ot=/(www\.)?/,nt=/[\w-]+(\.[\w-]+)*/,it=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,at=/(\/[^\s?]*)?/,ct=/(\?[^\s]*)?/,lt=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,pt=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,dt=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ut=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ft=new RegExp(`${st.source}${ot.source}${nt.source}${it.source}?${at.source}${ct.source}$`,"i"),ht=e=>{try{if(!(e==null?void 0:e.match(ft)))return!1;const o=new URL(e).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}catch{return!1}},Q=e=>ht(e)?[lt,pt,dt,ut].some(s=>s.test(e)):!1,ne=[{date_added_to_graph:1733218679827695e-6,node_type:"Episode",properties:{date:1731888e3,episode_title:"AI Agents and AI Assistants: A Contrast in Function",image_url:"https://i.ytimg.com/vi/IivxYYkJ2DI/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/62110bc0-6b27-4779-9d5e-320eab6fae84/IivxYYkJ2DI.mp3",source_link:"https://www.youtube.com/watch?v=IivxYYkJ2DI",status:"completed"},ref_id:"b8784fb9-efa8-4a25-8a78-e14be96a4387"},{date_added_to_graph:1733323898765796e-6,node_type:"Episode",properties:{date:1733184e3,episode_title:"Joe Rogan Experience #2237 - Mike Benz",image_url:"https://i.ytimg.com/vi_webp/rrJhQpvlkLA/sddefault.webp",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/b4c6220e-7048-431c-80c4-90e56b71bd06/rrJhQpvlkLA.mp3",source_link:"https://www.youtube.com/watch?v=rrJhQpvlkLA",status:"completed"},ref_id:"2e51fdb8-a1f1-4e1f-b9d5-4dbdae00b1a2"},{date_added_to_graph:17326354109931817e-7,node_type:"Episode",properties:{date:1730851200,description:"Exploring the Transformative Potential of Llama, the Open-Source AI Model",episode_title:"Llama: The Open-Source AI Model that's Changing How We Think About AI",image_url:"https://i.ytimg.com/vi/8c2LnKNoSmg/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/a4542523-6b12-4baa-bce7-ed63f2704955/8c2LnKNoSmg.mp3",source_link:"https://www.youtube.com/watch?v=8c2LnKNoSmg",status:"completed"},ref_id:"87f5e4c5-39c2-4773-8208-8c1c4fe4019b"}];console.log(ne);const mt=async e=>{const r="add_node",s={};s.media_url=e.source,s.content_type="audio_video";const o=await xe.post(`/${r}`,JSON.stringify(s));if(o.error){const{message:n}=o.error;throw new Error(n)}return o},xt=()=>{const[e,r]=l.useState(""),[s,o]=l.useState(!1),[n,d]=l.useState(""),{setRunningProjectId:w}=N(p=>p),{setSelectedEpisodeId:c,setSelectedEpisodeLink:i}=G(p=>p),{setSchemas:a}=te(p=>p);l.useEffect(()=>{(async()=>{try{const u=await me();a(u.schemas.filter(f=>!f.is_deleted))}catch(u){console.error("Error fetching schema:",u)}})()},[a]);const m=p=>{const{value:u}=p.target;r(u),o(u!==""&&!Q(u))},x=async p=>{const u=p||e;if(Q(u))try{const f=await mt({source:u});f.data.project_id&&w(f.data.project_id),f.data.ref_id&&(c(f.data.ref_id),i(u))}catch(f){let b=U;if((f==null?void 0:f.status)===400){const h=await f.json();b=h.errorCode||(h==null?void 0:h.status)||U,h.data.ref_id&&(c(h.data.ref_id),i(u))}else f instanceof Error&&(b=f.message);d(String(b))}};return t.jsxs(gt,{children:[t.jsx(wt,{children:"Ideas have shapes"}),t.jsxs(bt,{children:[t.jsx(yt,{error:s,onChange:m,onKeyDown:p=>p.key==="Enter"&&x(),placeholder:"Paste podcast or video link",value:e}),t.jsx(jt,{error:s,onClick:s?void 0:()=>x(),children:t.jsx(Je,{})})]}),n&&t.jsx("div",{children:n}),t.jsx(Ct,{children:ne.map(p=>{var u,f;return t.jsx(Ke,{imageUrl:((u=p==null?void 0:p.properties)==null?void 0:u.image_url)||"",onClick:()=>{var b;return x((b=p==null?void 0:p.properties)==null?void 0:b.source_link)},subtitle:"",title:((f=p==null?void 0:p.properties)==null?void 0:f.episode_title)||""},p==null?void 0:p.ref_id)})})]})},gt=g(v)`
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
`,wt=g(v)`
  color: ${j.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,yt=g.input`
  width: 100%;
  max-width: 648px;
  padding: 12px 28px 12px 16px;
  border-radius: 100px;
  border: 1px solid ${e=>e.error?"red":j.DIVIDER_4};
  background: ${j.INPUT_BG};
  color: ${j.white};
  font-family: Barlow;
  font-size: 16px;
  &::placeholder {
    color: ${j.INPUT_PLACEHOLDER};
  }
  &:focus {
    outline: none;
    border-color: ${e=>e.error?"red":j.primaryBlue};
  }
`,bt=g.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`,jt=g.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${j.white};
  font-size: 20px;
  cursor: ${e=>e.error?"not-allowed":"pointer"};
  svg {
    width: 8px;
    height: 17px;
    color: ${j.GRAY6};
  }
`,Ct=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,ie=l.memo(()=>{const{isPlaying:e,playerRef:r}=L(d=>d),s=()=>{if(r){const d=r.getCurrentTime()-15;r.seekTo(d,"seconds")}},o=()=>{if(r){const d=r.getCurrentTime()+15;r.seekTo(d,"seconds")}},n=()=>{if(r!=null&&r.getInternalPlayer()){if(e){r.getInternalPlayer().pauseVideo();return}r.getInternalPlayer().playVideo()}};return t.jsxs(vt,{children:[t.jsx(Et,{onClick:s,children:t.jsx("img",{alt:"",src:"RewindIcon.svg"})}),t.jsx(_t,{"data-testid":"play-pause-button",onClick:n,size:"small",children:e?t.jsx(be,{"data-testid":"pause-icon"}):t.jsx(je,{"data-testid":"play-icon"})}),t.jsx(St,{onClick:o,children:t.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]})});ie.displayName="Controls";const vt=g(v).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 142px;
  height: 54px;
  background: ${j.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${j.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,_t=g(Ce)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Et=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,St=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,ae=l.memo(({type:e,left:r,img:s})=>{var i,a;const o=te(m=>m.normalizedSchemasByType),n=(i=o[e])==null?void 0:i.primary_color,d=(a=o[e])==null?void 0:a.icon,w=d?`svg-icons/${d}.svg`:"",c={iconStart:s||w,color:n??j.THING};return t.jsx(It,{style:{left:`${r}%`},children:t.jsx(ce,{...c,label:e})})});ae.displayName="Marker";const ce=l.memo(({iconStart:e,color:r,label:s})=>t.jsx(Tt,{color:r,children:e&&t.jsx("img",{alt:s,className:"badge__img",src:e})}));ce.displayName="Badge";const Tt=g(v).attrs({direction:"row"})`
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
`,It=g.div`
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
`,le=l.memo(({markers:e,duration:r})=>t.jsx(t.Fragment,{children:e.map(s=>{var w;const o=Math.floor(((s==null?void 0:s.start)||0)/r*100),n=(s==null?void 0:s.node_type)||"",d=((w=s==null?void 0:s.properties)==null?void 0:w.image_url)||"";return t.jsx(ae,{img:d,left:o,type:n},s.ref_id)})}));le.displayName="Markers";const Rt=({duration:e,markers:r,handleProgressChange:s,playingTIme:o})=>{const n=10/e*100;return t.jsxs(Pt,{children:[t.jsx(zt,{max:e,onChange:s,value:o,width:n}),t.jsx(le,{duration:e,markers:r})]})},Pt=g(v)`
  position: relative;
  flex: 1 1 100%;
`,zt=g(Se)`
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
      width: ${({width:e})=>`${e}%`};
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
`,$t=({markers:e})=>{const{playingNode:r,playerRef:s}=L(i=>i),[o,n]=l.useState(0),d=r,w=l.useCallback((i,a)=>{const m=Array.isArray(a)?a[0]:a;s&&s.seekTo(m,"seconds")},[s]);l.useEffect(()=>{const i=setInterval(()=>{if(s&&n){const a=s.getCurrentTime();n(a)}},500);return()=>clearInterval(i)},[s,n]);const c=(s==null?void 0:s.getDuration())||0;return d?t.jsxs(kt,{children:[t.jsx(ie,{}),t.jsx(Rt,{duration:c,handleProgressChange:w,markers:e,playingTIme:o})]}):null},kt=g(v).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${j.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,Mt=({sourcePosition:e,targetPosition:r,color:s="white",arrowSize:o=1,label:n="label"})=>{const{points:d,textPosition:w}=l.useMemo(()=>{const c=new P(e.x,e.y,e.z),i=new P(r.x,r.y,r.z),a=new P().subVectors(i,c).normalize(),m=new P().addVectors(c,i).multiplyScalar(.5),x=new P().copy(a).multiplyScalar(-o).applyAxisAngle(new P(0,0,1),Math.PI/6),p=new P().copy(a).multiplyScalar(-o).applyAxisAngle(new P(0,0,1),-Math.PI/6);return{points:[c,i,i.clone(),i.clone().add(x),i.clone(),i.clone().add(p)],textPosition:m}},[e,r,o]);return t.jsxs(t.Fragment,{children:[t.jsxs("line",{children:[t.jsx("bufferGeometry",{children:t.jsx("bufferAttribute",{array:new Float32Array(d.flatMap(c=>[c.x,c.y,c.z])),attach:"attributes-position",count:d.length,itemSize:3})}),t.jsx("lineBasicMaterial",{color:s})]}),n&&t.jsx(Pe,{anchorX:"center",anchorY:"middle",color:s,...ze,position:w,children:n})]})},At=(e,r,s)=>{const o=new We;return o.moveTo(-e/2+s,-r/2),o.lineTo(e/2-s,-r/2),o.quadraticCurveTo(e/2,-r/2,e/2,-r/2+s),o.lineTo(e/2,r/2-s),o.quadraticCurveTo(e/2,r/2,e/2-s,r/2),o.lineTo(-e/2+s,r/2),o.quadraticCurveTo(-e/2,r/2,-e/2,r/2-s),o.lineTo(-e/2,-r/2+s),o.quadraticCurveTo(-e/2,-r/2,-e/2+s,-r/2),o},Lt=({width:e,height:r,radius:s,color:o})=>{const n=At(e,r,s);return t.jsxs("mesh",{children:[t.jsx("shapeGeometry",{args:[n]}),t.jsx("meshBasicMaterial",{color:o,opacity:.9,transparent:!0})]})},Ht=({name:e,url:r,type:s})=>t.jsxs(Wt,{children:[r&&t.jsx("img",{alt:"",className:"image",src:r}),t.jsx("div",{className:"title",children:e}),t.jsx("div",{className:"badge",children:t.jsx(Fe,{type:s})}),t.jsx("div",{className:"action-btn",children:t.jsx(ve,{})})]}),Wt=g(v)`
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
`,O=l.memo(({width:e,height:r,position:s,url:o,onButtonClick:n,name:d,type:w,color:c})=>{const{camera:i}=A();return t.jsxs("group",{position:s,children:[t.jsx(Lt,{color:c,height:r,radius:1.5,width:e}),!1,t.jsx($e,{position:[-e/2,r/2,0],children:t.jsx(v,{onClick:()=>n(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${e*i.zoom}px`,height:`${r*i.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:t.jsx(Ht,{name:`${d}`,type:w||"",url:o})})})]})});O.displayName="Node";const X=144/10,V=84/10,Ft=()=>{const e=A(),{dataInitial:r}=N(n=>n),{viewport:s}=e,o=l.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const n=r.links.filter(i=>{var a;return(a=i==null?void 0:i.properties)==null?void 0:a.start}).map(i=>{var a;return{source:i.source,target:i.target,start:(a=i.properties)==null?void 0:a.start}}),d=r.nodes.filter(i=>r.links.some(a=>a.source===i.ref_id||a.target===i.ref_id)).map(i=>{const a=n.find(u=>i.ref_id===u.source||i.ref_id===u.target),m=((a==null?void 0:a.start)||0)*(s.width/10);return{...i,x:m,y:0,z:0,start:(a==null?void 0:a.start)||0}}).filter(i=>i.node_type!=="Clip"&&i.node_type!=="Episode"&&i.node_type!=="Show"),w=d.reduce((i,a)=>{const m=r.links.filter(f=>{var b;return!((b=f==null?void 0:f.properties)!=null&&b.start)&&[f.target,f.source].includes(a.ref_id)}),p=r.nodes.filter(f=>f.node_type!=="Episode"&&f.node_type!=="Clip"&&f.ref_id!==a.ref_id&&m.some(b=>[b.source,b.target].includes(f.ref_id))).map((f,b)=>{const{x:h}=a,z=(Math.floor(b/2)+1)*V*2*(b%2===0?1:-1);return{...f,x:h,y:z,z:0}}),u=m.map(f=>{if(f.source===a.ref_id){const h=p.find(z=>z.ref_id===f.target);return{...f,sourcePositions:{x:a.x,y:a.y,z:a.z},targetPositions:{x:h==null?void 0:h.x,y:h==null?void 0:h.y,z:h==null?void 0:h.z}}}const b=p.find(h=>h.ref_id===f.source);return{...f,sourcePositions:{x:b==null?void 0:b.x,y:b==null?void 0:b.y,z:b==null?void 0:b.z},targetPositions:{x:a.x,y:a.y,z:a.z}}});return i[a.ref_id]={nodes:p,edges:u},i},{}),c=Object.values(w).flatMap(i=>i.edges).filter(i=>{var a;return(a=i==null?void 0:i.sourcePositions)==null?void 0:a.x});return{nodes:d,edges:c,relatedNodes:Object.fromEntries(Object.entries(w).map(([i,a])=>[i,a.nodes]))}},[r,s.width]);return t.jsxs(t.Fragment,{children:[o.nodes.map(n=>{var d,w;return t.jsxs(l.Fragment,{children:[t.jsx(O,{color:"#353A46",height:V,name:((d=n==null?void 0:n.properties)==null?void 0:d.name)||"",onButtonClick:console.log,position:[n.x,n.y,n.z],type:n.node_type,url:((w=n==null?void 0:n.properties)==null?void 0:w.image_url)||"logo.png",width:X}),(o.relatedNodes[n.ref_id]||[]).map(c=>{var i,a;return t.jsx(O,{color:"#353A46",height:V,name:((i=c==null?void 0:c.properties)==null?void 0:i.name)||"",onButtonClick:console.log,position:[c.x,c.y,c.z],type:c.node_type,url:((a=c==null?void 0:c.properties)==null?void 0:a.image_url)||"logo.png",width:X},`${c.ref_id}-${n.ref_id}`)})]},n.ref_id)}),o.edges.map((n,d)=>n!=null&&n.sourcePositions&&(n!=null&&n.targetPositions)?t.jsx(Mt,{label:n.edge_type||"",sourcePosition:new P(n.sourcePositions.x,n.sourcePositions.y,n.sourcePositions.z),targetPosition:new P(n.targetPositions.x,n.targetPositions.y,n.targetPositions.z)},`edge-${d}`):null)]})},Bt=()=>{const{camera:e,viewport:r}=A(),s=L(o=>o.playerRef);return oe(()=>{if(s){const o=s.getCurrentTime();e.position.x=o*r.width/10}}),null},Dt=()=>{const{camera:e,gl:r}=A();return l.useEffect(()=>{const s=e,o=d=>{d.preventDefault(),d.ctrlKey&&(s.zoom+=d.deltaY*-.1,s.zoom=Math.max(2,Math.min(s.zoom,20))),s.position.x+=d.deltaX*.1,s.updateProjectionMatrix()},n=r.domElement;return n.addEventListener("wheel",o,{passive:!1}),()=>{n.removeEventListener("wheel",o)}},[e,r]),null},pe=l.memo(()=>(console.log("rerender"),t.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:t.jsxs(ke,{orthographic:!0,children:[t.jsx(Bt,{}),t.jsx(Ne,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),t.jsx(Ft,{}),t.jsx(Dt,{})]})})));pe.displayName="Scene";const Nt=(e,r)=>{let s=0,o=e.length-1;for(;s<=o;){const n=Math.floor((s+o)/2),d=e[n],{start:w,end:c}=d.properties;if(r>=w&&r<=c)return d;r<w?o=n-1:s=n+1}return null},Gt=({mediaUrl:e})=>{const r=l.useRef(null),[s,o]=l.useState("ready"),[n,d]=l.useState(!1),{setActiveEdge:w}=_e(C=>C),{dataInitial:c}=N(C=>C),{isPlaying:i,playingTime:a,setIsPlaying:m,setPlayingTime:x,setDuration:p,playingNode:u,volume:f,setHasError:b,resetPlayer:h,isSeeking:z,setIsSeeking:_,setPlayerRef:E,playerRef:y}=L(C=>C);l.useEffect(()=>()=>h(),[h]),l.useEffect(()=>{u&&!n&&(x(0),p(0),d(!1))},[u,x,p,d,n]),l.useEffect(()=>{z&&y&&(y.seekTo(a,"seconds"),_(!1))},[a,z,_,y]);const S=l.useCallback(()=>{m(!i)},[i,m]),$=l.useCallback(()=>{m(!0)},[m]),B=l.useCallback(()=>{m(!1)},[m]),D=()=>{b(!0),o("error")},T=l.useCallback(C=>{C.code==="Space"&&(C.preventDefault(),S())},[S]);l.useEffect(()=>(window.addEventListener("keydown",T),()=>{window.removeEventListener("keydown",T)}),[T]);const k=l.useMemo(()=>((c==null?void 0:c.links.filter(R=>{var F;return(F=R==null?void 0:R.properties)==null?void 0:F.start}))||[]).slice().sort((R,F)=>{var Y,q;return((Y=R==null?void 0:R.properties)==null?void 0:Y.start)-((q=F==null?void 0:F.properties)==null?void 0:q.start)}),[c]),I=C=>{if(!z){const M=C.playedSeconds,R=Nt(k,M);w(R||null)}},Z=()=>{y&&o("ready")},H=()=>{S()},W=l.useCallback(C=>{!y&&C&&E(C)},[E,y]);return e?t.jsxs(Zt,{ref:r,tabIndex:0,children:[t.jsx(Vt,{isFullScreen:!1,children:t.jsx(se,{size:120,src:(u==null?void 0:u.image_url)||"",type:"clip"})}),t.jsx(Yt,{isFullScreen:!1,onClick:H,children:t.jsx(Te,{ref:W,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:D,onPause:B,onPlay:$,onProgress:I,onReady:Z,playing:i,url:e||"",volume:f,width:"100%"})}),s==="error"?t.jsx(Ot,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Zt=g(v)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Vt=g(v)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Ot=g(v)`
  height: 60px;
  padding: 12px 16px;
  color: ${j.primaryRed};
`,Yt=g.div`
  margin: ${e=>e.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,qt=l.memo(Gt),de=l.forwardRef(({active:e,start:r,text:s},o)=>t.jsxs(Ut,{ref:o,className:ge({active:e}),children:[t.jsx(Jt,{children:r}),t.jsx(Kt,{children:t.jsx("span",{children:s})})]}));de.displayName="ParagraphComponent";const ee=l.memo(de,(e,r)=>e.active===r.active),Ut=g(v)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,Jt=g.span`
  background: ${j.lightBlue100};
  color: ${j.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Kt=g.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,Qt=({transcriptString:e})=>{const[r,s]=l.useState(0),[o,n]=l.useState(!1),{playerRef:d}=L(x=>x),w=e.replace(/^["']|["']$/g,""),c=JSON.parse(w),i=l.useRef(null),a=l.useRef(null),m=l.useRef(null);return l.useEffect(()=>{const x=setInterval(()=>{if(d&&s){const p=d.getCurrentTime();s(p)}},100);return()=>clearInterval(x)},[d,s]),l.useEffect(()=>{const x=()=>{n(!0),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{n(!1)},1e3)},p=a.current;return p&&p.addEventListener("scroll",x),()=>{p&&p.removeEventListener("scroll",x)}},[]),l.useEffect(()=>{!o&&i.current&&i.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,o]),t.jsx(Xt,{ref:a,children:c[0].start>r?t.jsx(ee,{active:!1,start:J(c[0].start),text:c[0].text}):t.jsx(t.Fragment,{children:c.map(x=>{const p=J(x.start),u=x.start<r&&r<x.end;return x.start<=r+5?t.jsx(ee,{ref:u?i:null,active:u,start:p,text:x.text},`${x.start}-${x.end}`):null})})})},Xt=g.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,er=({name:e})=>{const{selectedEpisodeId:r}=G(c=>c),{playerRef:s}=L(c=>c),[o,n]=l.useState(0),[d,w]=l.useState([]);return l.useEffect(()=>{r&&(async()=>{try{const i=await re(r,0,50,{nodeType:["Clip"],useSubGraph:!1});i!=null&&i.nodes&&w(i.nodes)}catch(i){console.error(i)}})()},[r]),l.useEffect(()=>{const c=setInterval(()=>{if(s&&n){const i=s.getCurrentTime();n(i)}},100);return()=>clearInterval(c)},[s,n]),t.jsxs(tr,{children:[t.jsx(v,{className:"heading",children:e}),d.map(c=>{var x,p,u;const i=(x=c==null?void 0:c.properties)==null?void 0:x.timestamp,[a,m]=i?i.split("-").map(Number):[0,0];return a<=o*1e3&&o*1e3<m?t.jsx(rr,{direction:"row",children:((p=c.properties)==null?void 0:p.transcript)&&t.jsx(Qt,{transcriptString:(u=c.properties)==null?void 0:u.transcript})},c.ref_id):null})]})},tr=g(v)`
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
`,rr=g(v)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,sr=()=>{const{selectedEpisodeLink:e,selectedEpisode:r}=G(s=>s);return t.jsxs(or,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsx(nr,{children:e&&t.jsx(qt,{mediaUrl:e})}),t.jsx(er,{name:(r==null?void 0:r.name)||""})]})},or=g(v)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 20px 20px",background:"transparent",width:"100%",[e.breakpoints.up("sm")]:{width:Ie,gap:"10px"}})),nr=g(v)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),_r=()=>{const{addNewNode:e,isFetching:r,runningProjectId:s}=N(_=>_),[o,n]=l.useState(null),[d,w]=l.useState(!1),{selectedEpisodeId:c,setSelectedEpisode:i}=G(_=>_),a=Ee(),m=l.useRef(null),x=l.useRef(null),p=l.useRef(null),u=l.useRef(null),f=l.useRef(null),{setPlayingNode:b}=L(_=>_),h=l.useCallback(_=>{r||(u.current||(u.current={nodes:[],edges:[]}),_.edges&&u.current.edges.push(..._.edges),_.nodes&&u.current.nodes.push(..._.nodes),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{if(u.current){const{nodes:E,edges:y}=u.current,S={nodes:E,edges:y};u.current={nodes:[],edges:[]},e(S)}},3e3))},[e,r]);l.useEffect(()=>{c&&(async()=>{try{const E=await re(c,0,50);n(E);const[y,S]=((E==null?void 0:E.nodes)||[]).reduce(([T,k],I)=>(["Episode","Show","Host","Guest"].includes(I.node_type)?T.push(I):k.push(I),[T,k]),[[],[]]),$=new Set(y.map(T=>T.ref_id)),[B,D]=((E==null?void 0:E.edges)||[]).reduce(([T,k],I)=>($.has(I.source)&&$.has(I.target)?T.push(I):k.push(I),[T,k]),[[],[]]);p.current={nodes:S||[],edges:D||[]},e({nodes:y,edges:B})}catch(E){console.error(E)}})()},[c,e]),l.useEffect(()=>{c&&(async()=>{try{const E=await we(c);E&&(b(E),i(E))}catch(E){console.error(E)}})()},[c,b,i]),l.useEffect(()=>(a&&(a.connect(),a.on("connect_error",_=>{console.error("Socket connection error:",_)}),s&&a.on("new_node_created",h)),()=>{a&&a.off()}),[a,h,s]),l.useEffect(()=>{const _=E=>{const{playerRef:y}=L.getState();if(x.current!==null){if(E-x.current>2e3){if(p.current&&y){const{nodes:$,edges:B}=p.current,D=y==null?void 0:y.getCurrentTime(),[T,k]=B.reduce(([H,W],C)=>{var M,R;return((M=C==null?void 0:C.properties)==null?void 0:M.start)!==void 0&&((R=C==null?void 0:C.properties)==null?void 0:R.start)<D?H.push(C):W.push(C),[H,W]},[[],[]]),[I,Z]=$.reduce(([H,W],C)=>(T.some(M=>M.target===C.ref_id||M.source===C.ref_id)?H.push(C):W.push(C),[H,W]),[[],[]]);p.current={nodes:Z,edges:k},(I.length||T.length)&&e({nodes:I,edges:T})}x.current=E}}else x.current=E;m.current=requestAnimationFrame(_)};return m.current=requestAnimationFrame(_),()=>{m.current&&cancelAnimationFrame(m.current)}},[p,e]),l.useEffect(()=>{if(s)try{a==null||a.emit("update_project_id",{id:s})}catch(_){console.error(_)}},[s,a]);const z=l.useMemo(()=>{if(o){const _=o.edges.filter(y=>{var S;return(S=y==null?void 0:y.properties)==null?void 0:S.start}).map(y=>{var S;return{source:y.source,target:y.target,start:(S=y.properties)==null?void 0:S.start}});return o.nodes.filter(y=>o.edges.some(S=>S.source===y.ref_id||S.target===y.ref_id)).map(y=>{const S=_.find($=>y.ref_id===$.source||y.ref_id===$.target);return{...y,start:(S==null?void 0:S.start)||0}}).filter(y=>y&&y.node_type!=="Clip"&&y.node_type!=="Episode"&&y.node_type!=="Show")}return[]},[o]);return t.jsx(v,{direction:"row",style:{height:"100%"},children:c?t.jsxs(t.Fragment,{children:[t.jsxs(v,{children:[t.jsx(v,{onClick:()=>w(!d),children:t.jsx(Ve,{})}),t.jsx(sr,{})]}),t.jsxs(ir,{children:[t.jsx(v,{basis:"100%",grow:1,shrink:1,children:d?t.jsx(pe,{}):t.jsx(ye,{})}),t.jsx($t,{markers:z})]})]}):t.jsx(xt,{})})},ir=g(v)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`;export{_r as MindSet};
