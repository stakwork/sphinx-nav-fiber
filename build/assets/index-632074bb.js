import{r as l,x as ue,c as fe,j as t,s as w,a as j,F as v,T as he,u as N,d as te,y as me,N as U,z as xe,A as ge,D as re,E as we}from"./index-3506c528.js";import{Universe as ye}from"./index-df640694.js";import{b as se,c as z,d as be,e as je,f as Ce,g as ve,h as _e,a as Ee}from"./index-ccbb14cf.js";import{S as Se,R as Te,s as J,M as Re}from"./index-44c74031.js";import{u as L,a as oe,m as Ie,T as Pe,f as ze,H as $e,C as ke}from"./index-b1ebd2b7.js";import{W as Me,L as K,H as Ae,D as Le,F as He,V as P,S as We}from"./three.module-10ab52a5.js";import{T as Fe}from"./index-d54cb162.js";import"./index-c106f68f.js";import"./TextareaAutosize-e8dfc0e6.js";import"./index-27744ada.js";import"./ClipLoader-273b2bbd.js";import"./Skeleton-c3abb4f1.js";import"./Stack-7521353f.js";import"./isPlainObject-9e89c04f.js";import"./Typography-7897fa03.js";import"./createSvgIcon-0fd508c0.js";import"./index-831eec8c.js";function Be(e,s,r){const{gl:o,size:i,viewport:d}=L(),f=typeof e=="number"?e:i.width*d.dpr,c=typeof s=="number"?s:i.height*d.dpr,n=(typeof e=="number"?r:e)||{},{samples:a=0,depth:x,...g}=n,p=l.useMemo(()=>{let u;return u=new Me(f,c,{minFilter:K,magFilter:K,encoding:o.outputEncoding,type:Ae,...g}),x&&(u.depthTexture=new Le(f,c,He)),u.samples=a,u},[]);return l.useLayoutEffect(()=>{p.setSize(f,c),a&&(p.samples=a)},[a,p,f,c]),l.useEffect(()=>()=>p.dispose(),[]),p}const De=e=>typeof e=="function",Ne=l.forwardRef(({envMap:e,resolution:s=256,frames:r=1/0,children:o,makeDefault:i,...d},f)=>{const c=L(({set:m})=>m),n=L(({camera:m})=>m),a=L(({size:m})=>m),x=l.useRef(null),g=l.useRef(null),p=Be(s);l.useLayoutEffect(()=>{d.manual||x.current.updateProjectionMatrix()},[a,d]),l.useLayoutEffect(()=>{x.current.updateProjectionMatrix()}),l.useLayoutEffect(()=>{if(i){const m=n;return c(()=>({camera:x.current})),()=>c(()=>({camera:m}))}},[x,i,c]);let u=0,h=null;const b=De(o);return oe(m=>{b&&(r===1/0||u<r)&&(g.current.visible=!1,m.gl.setRenderTarget(p),h=m.scene.background,e&&(m.scene.background=e),m.gl.render(m.scene,x.current),m.scene.background=h,m.gl.setRenderTarget(null),g.current.visible=!0,u++)}),l.createElement(l.Fragment,null,l.createElement("orthographicCamera",ue({left:a.width/-2,right:a.width/2,top:a.height/2,bottom:a.height/-2,ref:Ie([x,f])},d),!b&&o),l.createElement("group",{ref:g},b&&o(p.texture)))}),Ge={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},G=fe(e=>({...Ge,setSelectedEpisodeId:s=>e({selectedEpisodeId:s}),setSelectedEpisodeLink:s=>e({selectedEpisodeLink:s}),setSelectedEpisode:s=>e({selectedEpisode:s})})),Ze=e=>t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),t.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Oe=()=>t.jsxs(Ve,{children:[t.jsx(Ye,{children:t.jsx(qe,{children:t.jsx(Ze,{})})}),t.jsx(Ue,{children:"Graph Mindset"})]}),Ve=w(v).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Ye=w(v)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,qe=w.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${j.white};
  }
`,Ue=w(he)`
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
`,Je=e=>t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Ke=({imageUrl:e,title:s,subtitle:r,onClick:o})=>{const i=s.length>35?`${s.substring(0,32)}...`:s,d=r.length>50?`${r.substring(0,47)}...`:r;return t.jsxs(Qe,{onClick:o,children:[t.jsx(Xe,{children:t.jsx(se,{height:140,src:e,type:"Episode",width:170})}),t.jsxs(et,{children:[t.jsx(tt,{children:i}),t.jsx(rt,{children:d})]})]})},Qe=w(v)`
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
`,Xe=w.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,et=w(v)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,tt=w.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${j.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,rt=w.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${j.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,st=/^(https?:\/\/)/,ot=/(www\.)?/,nt=/[\w-]+(\.[\w-]+)*/,it=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,at=/(\/[^\s?]*)?/,ct=/(\?[^\s]*)?/,lt=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,pt=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,dt=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,ut=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ft=new RegExp(`${st.source}${ot.source}${nt.source}${it.source}?${at.source}${ct.source}$`,"i"),ht=e=>{try{if(!(e==null?void 0:e.match(ft)))return!1;const o=new URL(e).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}catch{return!1}},Q=e=>ht(e)?[lt,pt,dt,ut].some(r=>r.test(e)):!1,ne=[{date_added_to_graph:1733218679827695e-6,node_type:"Episode",properties:{date:1731888e3,episode_title:"AI Agents and AI Assistants: A Contrast in Function",image_url:"https://i.ytimg.com/vi/IivxYYkJ2DI/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/62110bc0-6b27-4779-9d5e-320eab6fae84/IivxYYkJ2DI.mp3",source_link:"https://www.youtube.com/watch?v=IivxYYkJ2DI",status:"completed"},ref_id:"b8784fb9-efa8-4a25-8a78-e14be96a4387"},{date_added_to_graph:1733323898765796e-6,node_type:"Episode",properties:{date:1733184e3,episode_title:"Joe Rogan Experience #2237 - Mike Benz",image_url:"https://i.ytimg.com/vi_webp/rrJhQpvlkLA/sddefault.webp",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/b4c6220e-7048-431c-80c4-90e56b71bd06/rrJhQpvlkLA.mp3",source_link:"https://www.youtube.com/watch?v=rrJhQpvlkLA",status:"completed"},ref_id:"2e51fdb8-a1f1-4e1f-b9d5-4dbdae00b1a2"},{date_added_to_graph:17326354109931817e-7,node_type:"Episode",properties:{date:1730851200,description:"Exploring the Transformative Potential of Llama, the Open-Source AI Model",episode_title:"Llama: The Open-Source AI Model that's Changing How We Think About AI",image_url:"https://i.ytimg.com/vi/8c2LnKNoSmg/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/a4542523-6b12-4baa-bce7-ed63f2704955/8c2LnKNoSmg.mp3",source_link:"https://www.youtube.com/watch?v=8c2LnKNoSmg",status:"completed"},ref_id:"87f5e4c5-39c2-4773-8208-8c1c4fe4019b"}];console.log(ne);const mt=async e=>{const s="add_node",r={};r.media_url=e.source,r.content_type="audio_video";const o=await xe.post(`/${s}`,JSON.stringify(r));if(o.error){const{message:i}=o.error;throw new Error(i)}return o},xt=()=>{const[e,s]=l.useState(""),[r,o]=l.useState(!1),[i,d]=l.useState(""),{setRunningProjectId:f}=N(p=>p),{setSelectedEpisodeId:c,setSelectedEpisodeLink:n}=G(p=>p),{setSchemas:a}=te(p=>p);l.useEffect(()=>{(async()=>{try{const u=await me();a(u.schemas.filter(h=>!h.is_deleted))}catch(u){console.error("Error fetching schema:",u)}})()},[a]);const x=p=>{const{value:u}=p.target;s(u),o(u!==""&&!Q(u))},g=async p=>{const u=p||e;if(Q(u))try{const h=await mt({source:u});h.data.project_id&&f(h.data.project_id),h.data.ref_id&&(c(h.data.ref_id),n(u))}catch(h){let b=U;if((h==null?void 0:h.status)===400){const m=await h.json();b=m.errorCode||(m==null?void 0:m.status)||U,m.data.ref_id&&(c(m.data.ref_id),n(u))}else h instanceof Error&&(b=h.message);d(String(b))}};return t.jsxs(gt,{children:[t.jsx(wt,{children:"Ideas have shapes"}),t.jsxs(bt,{children:[t.jsx(yt,{error:r,onChange:x,onKeyDown:p=>p.key==="Enter"&&g(),placeholder:"Paste podcast or video link",value:e}),t.jsx(jt,{error:r,onClick:r?void 0:()=>g(),children:t.jsx(Je,{})})]}),i&&t.jsx("div",{children:i}),t.jsx(Ct,{children:ne.map(p=>{var u,h;return t.jsx(Ke,{imageUrl:((u=p==null?void 0:p.properties)==null?void 0:u.image_url)||"",onClick:()=>{var b;return g((b=p==null?void 0:p.properties)==null?void 0:b.source_link)},subtitle:"",title:((h=p==null?void 0:p.properties)==null?void 0:h.episode_title)||""},p==null?void 0:p.ref_id)})})]})},gt=w(v)`
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
`,wt=w(v)`
  color: ${j.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,yt=w.input`
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
`,bt=w.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`,jt=w.div`
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
`,Ct=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,ie=l.memo(()=>{const e=z(f=>f.isPlaying),s=z(f=>f.setIsPlaying),r=z(f=>f.playerRef),o=()=>{if(r){const f=r.getCurrentTime()-15;r.seekTo(f,"seconds")}},i=()=>{if(r){const f=r.getCurrentTime()+15;r.seekTo(f,"seconds")}},d=()=>{s(!e)};return t.jsxs(vt,{children:[t.jsx(Et,{onClick:o,children:t.jsx("img",{alt:"",src:"RewindIcon.svg"})}),t.jsx(_t,{"data-testid":"play-pause-button",onClick:d,size:"small",children:e?t.jsx(be,{"data-testid":"pause-icon"}):t.jsx(je,{"data-testid":"play-icon"})}),t.jsx(St,{onClick:i,children:t.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]})});ie.displayName="Controls";const vt=w(v).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,_t=w(Ce)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Et=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,St=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,ae=l.memo(({type:e,left:s,img:r})=>{var n,a;const o=te(x=>x.normalizedSchemasByType),i=(n=o[e])==null?void 0:n.primary_color,d=(a=o[e])==null?void 0:a.icon,f=d?`svg-icons/${d}.svg`:"",c={iconStart:r||f,color:i??j.THING};return t.jsx(Rt,{style:{left:`${s}%`},children:t.jsx(ce,{...c,label:e})})});ae.displayName="Marker";const ce=l.memo(({iconStart:e,color:s,label:r})=>t.jsx(Tt,{color:s,children:e&&t.jsx("img",{alt:r,className:"badge__img",src:e})}));ce.displayName="Badge";const Tt=w(v).attrs({direction:"row"})`
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
`,Rt=w.div`
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
`,le=l.memo(({markers:e,duration:s})=>t.jsx(t.Fragment,{children:e.map(r=>{var f;const o=Math.floor(((r==null?void 0:r.start)||0)/s*100),i=(r==null?void 0:r.node_type)||"",d=((f=r==null?void 0:r.properties)==null?void 0:f.image_url)||"";return t.jsx(ae,{img:d,left:o,type:i},r.ref_id)})}));le.displayName="Markers";const It=({duration:e,markers:s,handleProgressChange:r,playingTIme:o})=>{const i=10/e*100;return t.jsxs(Pt,{children:[t.jsx(zt,{max:e,onChange:r,value:o,width:i}),t.jsx(le,{duration:e,markers:s})]})},Pt=w(v)`
  position: relative;
  flex: 1 1 100%;
`,zt=w(Se)`
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
`,$t=({markers:e})=>{const{playingNode:s,playerRef:r}=z(n=>n),[o,i]=l.useState(0),d=s,f=l.useCallback((n,a)=>{const x=Array.isArray(a)?a[0]:a;r&&r.seekTo(x,"seconds")},[r]);l.useEffect(()=>{const n=setInterval(()=>{if(r&&i){const a=r.getCurrentTime();i(a)}},500);return()=>clearInterval(n)},[r,i]);const c=(r==null?void 0:r.getDuration())||0;return d?t.jsxs(kt,{children:[t.jsx(ie,{}),t.jsx(It,{duration:c,handleProgressChange:f,markers:e,playingTIme:o})]}):null},kt=w(v).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${j.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,Mt=({sourcePosition:e,targetPosition:s,color:r="white",arrowSize:o=1,label:i="label"})=>{const{points:d,textPosition:f}=l.useMemo(()=>{const c=new P(e.x,e.y,e.z),n=new P(s.x,s.y,s.z),a=new P().subVectors(n,c).normalize(),x=new P().addVectors(c,n).multiplyScalar(.5),g=new P().copy(a).multiplyScalar(-o).applyAxisAngle(new P(0,0,1),Math.PI/6),p=new P().copy(a).multiplyScalar(-o).applyAxisAngle(new P(0,0,1),-Math.PI/6);return{points:[c,n,n.clone(),n.clone().add(g),n.clone(),n.clone().add(p)],textPosition:x}},[e,s,o]);return t.jsxs(t.Fragment,{children:[t.jsxs("line",{children:[t.jsx("bufferGeometry",{children:t.jsx("bufferAttribute",{array:new Float32Array(d.flatMap(c=>[c.x,c.y,c.z])),attach:"attributes-position",count:d.length,itemSize:3})}),t.jsx("lineBasicMaterial",{color:r})]}),i&&t.jsx(Pe,{anchorX:"center",anchorY:"middle",color:r,...ze,position:f,children:i})]})},At=(e,s,r)=>{const o=new We;return o.moveTo(-e/2+r,-s/2),o.lineTo(e/2-r,-s/2),o.quadraticCurveTo(e/2,-s/2,e/2,-s/2+r),o.lineTo(e/2,s/2-r),o.quadraticCurveTo(e/2,s/2,e/2-r,s/2),o.lineTo(-e/2+r,s/2),o.quadraticCurveTo(-e/2,s/2,-e/2,s/2-r),o.lineTo(-e/2,-s/2+r),o.quadraticCurveTo(-e/2,-s/2,-e/2+r,-s/2),o},Lt=({width:e,height:s,radius:r,color:o})=>{const i=At(e,s,r);return t.jsxs("mesh",{children:[t.jsx("shapeGeometry",{args:[i]}),t.jsx("meshBasicMaterial",{color:o,opacity:.9,transparent:!0})]})},Ht=({name:e,url:s,type:r})=>t.jsxs(Wt,{children:[s&&t.jsx("img",{alt:"",className:"image",src:s}),t.jsx("div",{className:"title",children:e}),t.jsx("div",{className:"badge",children:t.jsx(Fe,{type:r})}),t.jsx("div",{className:"action-btn",children:t.jsx(ve,{})})]}),Wt=w(v)`
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
`,V=l.memo(({width:e,height:s,position:r,url:o,onButtonClick:i,name:d,type:f,color:c})=>{const{camera:n}=L();return t.jsxs("group",{position:r,children:[t.jsx(Lt,{color:c,height:s,radius:1.5,width:e}),!1,t.jsx($e,{position:[-e/2,s/2,0],children:t.jsx(v,{onClick:()=>i(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${e*n.zoom}px`,height:`${s*n.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:t.jsx(Ht,{name:`${d}`,type:f||"",url:o})})})]})});V.displayName="Node";const X=144/10,O=84/10,Ft=()=>{const e=L(),{dataInitial:s}=N(i=>i),{viewport:r}=e,o=l.useMemo(()=>{if(!s)return{nodes:[],edges:[],relatedNodes:{}};const i=s.links.filter(n=>{var a;return(a=n==null?void 0:n.properties)==null?void 0:a.start}).map(n=>{var a;return{source:n.source,target:n.target,start:(a=n.properties)==null?void 0:a.start}}),d=s.nodes.filter(n=>s.links.some(a=>a.source===n.ref_id||a.target===n.ref_id)).map(n=>{const a=i.find(u=>n.ref_id===u.source||n.ref_id===u.target),x=((a==null?void 0:a.start)||0)*(r.width/10);return{...n,x,y:0,z:0,start:(a==null?void 0:a.start)||0}}).filter(n=>n.node_type!=="Clip"&&n.node_type!=="Episode"&&n.node_type!=="Show"),f=d.reduce((n,a)=>{const x=s.links.filter(h=>{var b;return!((b=h==null?void 0:h.properties)!=null&&b.start)&&[h.target,h.source].includes(a.ref_id)}),p=s.nodes.filter(h=>h.node_type!=="Episode"&&h.node_type!=="Clip"&&h.ref_id!==a.ref_id&&x.some(b=>[b.source,b.target].includes(h.ref_id))).map((h,b)=>{const{x:m}=a,$=(Math.floor(b/2)+1)*O*2*(b%2===0?1:-1);return{...h,x:m,y:$,z:0}}),u=x.map(h=>{if(h.source===a.ref_id){const m=p.find($=>$.ref_id===h.target);return{...h,sourcePositions:{x:a.x,y:a.y,z:a.z},targetPositions:{x:m==null?void 0:m.x,y:m==null?void 0:m.y,z:m==null?void 0:m.z}}}const b=p.find(m=>m.ref_id===h.source);return{...h,sourcePositions:{x:b==null?void 0:b.x,y:b==null?void 0:b.y,z:b==null?void 0:b.z},targetPositions:{x:a.x,y:a.y,z:a.z}}});return n[a.ref_id]={nodes:p,edges:u},n},{}),c=Object.values(f).flatMap(n=>n.edges).filter(n=>{var a;return(a=n==null?void 0:n.sourcePositions)==null?void 0:a.x});return{nodes:d,edges:c,relatedNodes:Object.fromEntries(Object.entries(f).map(([n,a])=>[n,a.nodes]))}},[s,r.width]);return t.jsxs(t.Fragment,{children:[o.nodes.map(i=>{var d,f;return t.jsxs(l.Fragment,{children:[t.jsx(V,{color:"#353A46",height:O,name:((d=i==null?void 0:i.properties)==null?void 0:d.name)||"",onButtonClick:console.log,position:[i.x,i.y,i.z],type:i.node_type,url:((f=i==null?void 0:i.properties)==null?void 0:f.image_url)||"logo.png",width:X}),(o.relatedNodes[i.ref_id]||[]).map(c=>{var n,a;return t.jsx(V,{color:"#353A46",height:O,name:((n=c==null?void 0:c.properties)==null?void 0:n.name)||"",onButtonClick:console.log,position:[c.x,c.y,c.z],type:c.node_type,url:((a=c==null?void 0:c.properties)==null?void 0:a.image_url)||"logo.png",width:X},`${c.ref_id}-${i.ref_id}`)})]},i.ref_id)}),o.edges.map((i,d)=>i!=null&&i.sourcePositions&&(i!=null&&i.targetPositions)?t.jsx(Mt,{label:i.edge_type||"",sourcePosition:new P(i.sourcePositions.x,i.sourcePositions.y,i.sourcePositions.z),targetPosition:new P(i.targetPositions.x,i.targetPositions.y,i.targetPositions.z)},`edge-${d}`):null)]})},Bt=()=>{const{camera:e,viewport:s}=L(),r=z(o=>o.playerRef);return oe(()=>{if(r){const o=r.getCurrentTime();e.position.x=o*s.width/10}}),null},Dt=()=>{const{camera:e,gl:s}=L();return l.useEffect(()=>{const r=e,o=d=>{d.preventDefault(),d.ctrlKey&&(r.zoom+=d.deltaY*-.1,r.zoom=Math.max(2,Math.min(r.zoom,20))),r.position.x+=d.deltaX*.1,r.updateProjectionMatrix()},i=s.domElement;return i.addEventListener("wheel",o,{passive:!1}),()=>{i.removeEventListener("wheel",o)}},[e,s]),null},pe=l.memo(()=>(console.log("rerender"),t.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:t.jsxs(ke,{orthographic:!0,children:[t.jsx(Bt,{}),t.jsx(Ne,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),t.jsx(Ft,{}),t.jsx(Dt,{})]})})));pe.displayName="Scene";const Nt=(e,s)=>{let r=0,o=e.length-1;for(;r<=o;){const i=Math.floor((r+o)/2),d=e[i],{start:f,end:c}=d.properties;if(s>=f&&s<=c)return d;s<f?o=i-1:r=i+1}return null},Gt=({mediaUrl:e})=>{const s=l.useRef(null),[r,o]=l.useState("ready"),[i,d]=l.useState(!1),{setActiveEdge:f}=_e(C=>C),{dataInitial:c}=N(C=>C),{isPlaying:n,playingTime:a,setIsPlaying:x,setPlayingTime:g,setDuration:p,playingNode:u,volume:h,setHasError:b,resetPlayer:m,isSeeking:$,setIsSeeking:_,setPlayerRef:E,playerRef:y}=z(C=>C);l.useEffect(()=>()=>m(),[m]),l.useEffect(()=>{u&&!i&&(g(0),p(0),d(!1))},[u,g,p,d,i]),l.useEffect(()=>{$&&y&&(y.seekTo(a,"seconds"),_(!1))},[a,$,_,y]);const S=l.useCallback(()=>{x(!n)},[n,x]),k=()=>{b(!0),o("error")},H=l.useCallback(C=>{C.code==="Space"&&(C.preventDefault(),S())},[S]);l.useEffect(()=>(window.addEventListener("keydown",H),()=>{window.removeEventListener("keydown",H)}),[H]);const D=l.useMemo(()=>((c==null?void 0:c.links.filter(I=>{var B;return(B=I==null?void 0:I.properties)==null?void 0:B.start}))||[]).slice().sort((I,B)=>{var Y,q;return((Y=I==null?void 0:I.properties)==null?void 0:Y.start)-((q=B==null?void 0:B.properties)==null?void 0:q.start)}),[c]),T=C=>{if(!$){const A=C.playedSeconds,I=Nt(D,A);f(I||null)}},M=()=>{y&&o("ready")},R=l.useCallback(()=>{n||x(!0)},[x,n]),Z=l.useCallback(()=>{n&&x(!1)},[x,n]),W=C=>{C.stopPropagation()},F=l.useCallback(C=>{!y&&C&&E(C)},[E,y]);return e?t.jsxs(Zt,{ref:s,tabIndex:0,children:[t.jsx(Ot,{isFullScreen:!1,children:t.jsx(se,{size:120,src:(u==null?void 0:u.image_url)||"",type:"clip"})}),t.jsx(Yt,{isFullScreen:!1,onClick:W,children:t.jsx(Te,{ref:F,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:k,onPause:Z,onPlay:R,onProgress:T,onReady:M,playing:n,url:e||"",volume:h,width:"100%"})}),r==="error"?t.jsx(Vt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Zt=w(v)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Ot=w(v)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Vt=w(v)`
  height: 60px;
  padding: 12px 16px;
  color: ${j.primaryRed};
`,Yt=w.div`
  margin: ${e=>e.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,qt=l.memo(Gt),de=l.forwardRef(({active:e,start:s,text:r},o)=>t.jsxs(Ut,{ref:o,className:ge({active:e}),children:[t.jsx(Jt,{children:s}),t.jsx(Kt,{children:t.jsx("span",{children:r})})]}));de.displayName="ParagraphComponent";const ee=l.memo(de,(e,s)=>e.active===s.active),Ut=w(v)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,Jt=w.span`
  background: ${j.lightBlue100};
  color: ${j.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Kt=w.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,Qt=({transcriptString:e})=>{const[s,r]=l.useState(0),[o,i]=l.useState(!1),{playerRef:d}=z(g=>g),f=e.replace(/^["']|["']$/g,""),c=JSON.parse(f),n=l.useRef(null),a=l.useRef(null),x=l.useRef(null);return l.useEffect(()=>{const g=setInterval(()=>{if(d&&r){const p=d.getCurrentTime();r(p)}},100);return()=>clearInterval(g)},[d,r]),l.useEffect(()=>{const g=()=>{i(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{i(!1)},1e3)},p=a.current;return p&&p.addEventListener("scroll",g),()=>{p&&p.removeEventListener("scroll",g)}},[]),l.useEffect(()=>{!o&&n.current&&n.current.scrollIntoView({behavior:"smooth",block:"center"})},[s,o]),t.jsx(Xt,{ref:a,children:c[0].start>s?t.jsx(ee,{active:!1,start:J(c[0].start),text:c[0].text}):t.jsx(t.Fragment,{children:c.map(g=>{const p=J(g.start),u=g.start<s&&s<g.end;return g.start<=s+5?t.jsx(ee,{ref:u?n:null,active:u,start:p,text:g.text},`${g.start}-${g.end}`):null})})})},Xt=w.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,er=({name:e})=>{const{selectedEpisodeId:s}=G(c=>c),{playerRef:r}=z(c=>c),[o,i]=l.useState(0),[d,f]=l.useState([]);return l.useEffect(()=>{s&&(async()=>{try{const n=await re(s,0,50,{nodeType:["Clip"],useSubGraph:!1});n!=null&&n.nodes&&f(n.nodes)}catch(n){console.error(n)}})()},[s]),l.useEffect(()=>{const c=setInterval(()=>{if(r&&i){const n=r.getCurrentTime();i(n)}},100);return()=>clearInterval(c)},[r,i]),t.jsxs(tr,{children:[t.jsx(v,{className:"heading",children:e}),d.map(c=>{var g,p,u;const n=(g=c==null?void 0:c.properties)==null?void 0:g.timestamp,[a,x]=n?n.split("-").map(Number):[0,0];return a<=o&&o<x?t.jsx(rr,{direction:"row",children:((p=c.properties)==null?void 0:p.transcript)&&t.jsx(Qt,{transcriptString:(u=c.properties)==null?void 0:u.transcript})},c.ref_id):null})]})},tr=w(v)`
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
`,rr=w(v)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,sr=()=>{const{selectedEpisodeLink:e,selectedEpisode:s}=G(r=>r);return t.jsxs(or,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsx(nr,{children:e&&t.jsx(qt,{mediaUrl:e})}),t.jsx(er,{name:(s==null?void 0:s.name)||""})]})},or=w(v)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 20px 20px",background:"transparent",width:"100%",[e.breakpoints.up("sm")]:{width:Re,gap:"10px"}})),nr=w(v)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),_r=()=>{const{addNewNode:e,isFetching:s,runningProjectId:r}=N(_=>_),[o,i]=l.useState(null),[d,f]=l.useState(!1),{selectedEpisodeId:c,setSelectedEpisode:n}=G(_=>_),a=Ee(),x=l.useRef(null),g=l.useRef(null),p=l.useRef(null),u=l.useRef(null),h=l.useRef(null),{setPlayingNode:b}=z(_=>_),m=l.useCallback(_=>{s||(u.current||(u.current={nodes:[],edges:[]}),_.edges&&u.current.edges.push(..._.edges),_.nodes&&u.current.nodes.push(..._.nodes),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{if(u.current){const{nodes:E,edges:y}=u.current,S={nodes:E,edges:y};u.current={nodes:[],edges:[]},e(S)}},3e3))},[e,s]);l.useEffect(()=>{c&&(async()=>{try{const E=await re(c,0,50);i(E);const[y,S]=((E==null?void 0:E.nodes)||[]).reduce(([T,M],R)=>(["Episode","Show","Host","Guest"].includes(R.node_type)?T.push(R):M.push(R),[T,M]),[[],[]]),k=new Set(y.map(T=>T.ref_id)),[H,D]=((E==null?void 0:E.edges)||[]).reduce(([T,M],R)=>(k.has(R.source)&&k.has(R.target)?T.push(R):M.push(R),[T,M]),[[],[]]);p.current={nodes:S||[],edges:D||[]},e({nodes:y,edges:H})}catch(E){console.error(E)}})()},[c,e]),l.useEffect(()=>{c&&(async()=>{try{const E=await we(c);E&&(b(E),n(E))}catch(E){console.error(E)}})()},[c,b,n]),l.useEffect(()=>(a&&(a.connect(),a.on("connect_error",_=>{console.error("Socket connection error:",_)}),r&&a.on("new_node_created",m)),()=>{a&&a.off()}),[a,m,r]),l.useEffect(()=>{const _=E=>{const{playerRef:y}=z.getState();if(g.current!==null){if(E-g.current>2e3){if(p.current&&y){const{nodes:k,edges:H}=p.current,D=y==null?void 0:y.getCurrentTime(),[T,M]=H.reduce(([W,F],C)=>{var A,I;return((A=C==null?void 0:C.properties)==null?void 0:A.start)!==void 0&&((I=C==null?void 0:C.properties)==null?void 0:I.start)<D?W.push(C):F.push(C),[W,F]},[[],[]]),[R,Z]=k.reduce(([W,F],C)=>(T.some(A=>A.target===C.ref_id||A.source===C.ref_id)?W.push(C):F.push(C),[W,F]),[[],[]]);p.current={nodes:Z,edges:M},(R.length||T.length)&&e({nodes:R,edges:T})}g.current=E}}else g.current=E;x.current=requestAnimationFrame(_)};return x.current=requestAnimationFrame(_),()=>{x.current&&cancelAnimationFrame(x.current)}},[p,e]),l.useEffect(()=>{if(r)try{a==null||a.emit("update_project_id",{id:r})}catch(_){console.error(_)}},[r,a]);const $=l.useMemo(()=>{if(o){const _=o.edges.filter(y=>{var S;return(S=y==null?void 0:y.properties)==null?void 0:S.start}).map(y=>{var S;return{source:y.source,target:y.target,start:(S=y.properties)==null?void 0:S.start}});return o.nodes.filter(y=>o.edges.some(S=>S.source===y.ref_id||S.target===y.ref_id)).map(y=>{const S=_.find(k=>y.ref_id===k.source||y.ref_id===k.target);return{...y,start:(S==null?void 0:S.start)||0}}).filter(y=>y&&y.node_type!=="Clip"&&y.node_type!=="Episode"&&y.node_type!=="Show")}return[]},[o]);return t.jsx(v,{direction:"row",style:{height:"100%"},children:c?t.jsxs(t.Fragment,{children:[t.jsxs(v,{children:[t.jsx(v,{onClick:()=>f(!d),children:t.jsx(Oe,{})}),t.jsx(sr,{})]}),t.jsxs(ir,{children:[t.jsx(v,{basis:"100%",grow:1,shrink:1,children:d?t.jsx(pe,{}):t.jsx(ye,{})}),t.jsx($t,{markers:$})]})]}):t.jsx(xt,{})})},ir=w(v)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`;export{_r as MindSet};
