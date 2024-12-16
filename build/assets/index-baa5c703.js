import{r as l,x as de,c as ue,j as t,s as g,a as j,F as C,T as fe,u as D,d as ee,y as he,N as q,z as me,A as xe,D as te,E as ge}from"./index-6ead5a5a.js";import{Universe as we}from"./index-52c2d36b.js";import{b as re,c as H,d as ye,e as be,f as je,g as Ce,h as ve,a as _e}from"./index-a81a8747.js";import{S as Ee,R as Se,s as U,M as Te}from"./index-09ca6cf4.js";import{u as L,a as se,m as Ie,T as Re,f as Pe,H as ze,C as $e}from"./index-c8d529ec.js";import{W as Me,L as J,H as ke,D as Ae,F as Le,V as z,S as He}from"./three.module-9c942ca6.js";import{T as We}from"./index-cb0d6327.js";import"./index-deb67677.js";import"./TextareaAutosize-ccd72cd4.js";import"./index-8100de88.js";import"./ClipLoader-294cee1f.js";import"./Skeleton-7df20277.js";import"./Stack-cd2df6cb.js";import"./isPlainObject-5e885593.js";import"./Typography-f984249a.js";import"./createSvgIcon-1ef332fe.js";import"./index-6050e9c5.js";function Fe(e,r,s){const{gl:o,size:n,viewport:d}=L(),w=typeof e=="number"?e:n.width*d.dpr,c=typeof r=="number"?r:n.height*d.dpr,a=(typeof e=="number"?s:e)||{},{samples:i=0,depth:x,...m}=a,p=l.useMemo(()=>{let u;return u=new Me(w,c,{minFilter:J,magFilter:J,encoding:o.outputEncoding,type:ke,...m}),x&&(u.depthTexture=new Ae(w,c,Le)),u.samples=i,u},[]);return l.useLayoutEffect(()=>{p.setSize(w,c),i&&(p.samples=i)},[i,p,w,c]),l.useEffect(()=>()=>p.dispose(),[]),p}const Be=e=>typeof e=="function",De=l.forwardRef(({envMap:e,resolution:r=256,frames:s=1/0,children:o,makeDefault:n,...d},w)=>{const c=L(({set:h})=>h),a=L(({camera:h})=>h),i=L(({size:h})=>h),x=l.useRef(null),m=l.useRef(null),p=Fe(r);l.useLayoutEffect(()=>{d.manual||x.current.updateProjectionMatrix()},[i,d]),l.useLayoutEffect(()=>{x.current.updateProjectionMatrix()}),l.useLayoutEffect(()=>{if(n){const h=a;return c(()=>({camera:x.current})),()=>c(()=>({camera:h}))}},[x,n,c]);let u=0,f=null;const b=Be(o);return se(h=>{b&&(s===1/0||u<s)&&(m.current.visible=!1,h.gl.setRenderTarget(p),f=h.scene.background,e&&(h.scene.background=e),h.gl.render(h.scene,x.current),h.scene.background=f,h.gl.setRenderTarget(null),m.current.visible=!0,u++)}),l.createElement(l.Fragment,null,l.createElement("orthographicCamera",de({left:i.width/-2,right:i.width/2,top:i.height/2,bottom:i.height/-2,ref:Ie([x,w])},d),!b&&o),l.createElement("group",{ref:m},b&&o(p.texture)))}),Ne={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},N=ue(e=>({...Ne,setSelectedEpisodeId:r=>e({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>e({selectedEpisodeLink:r}),setSelectedEpisode:r=>e({selectedEpisode:r})})),Ge=e=>t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),t.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),t.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),t.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),t.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Ze=()=>t.jsxs(Ve,{children:[t.jsx(Oe,{children:t.jsx(Ye,{children:t.jsx(Ge,{})})}),t.jsx(qe,{children:"Graph Mindset"})]}),Ve=g(C).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Oe=g(C)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ye=g.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${j.white};
  }
`,qe=g(fe)`
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
`,Ue=e=>t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Je=({imageUrl:e,title:r,subtitle:s,onClick:o})=>{const n=r.length>35?`${r.substring(0,32)}...`:r,d=s.length>50?`${s.substring(0,47)}...`:s;return t.jsxs(Qe,{onClick:o,children:[t.jsx(Xe,{children:t.jsx(re,{height:140,src:e,type:"Episode",width:170})}),t.jsxs(Ke,{children:[t.jsx(et,{children:n}),t.jsx(tt,{children:d})]})]})},Qe=g(C)`
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
`,Ke=g(C)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,et=g.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${j.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,tt=g.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${j.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,rt=/^(https?:\/\/)/,st=/(www\.)?/,ot=/[\w-]+(\.[\w-]+)*/,nt=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,it=/(\/[^\s?]*)?/,at=/(\?[^\s]*)?/,ct=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,lt=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,pt=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,dt=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ut=new RegExp(`${rt.source}${st.source}${ot.source}${nt.source}?${it.source}${at.source}$`,"i"),ft=e=>{try{if(!(e==null?void 0:e.match(ut)))return!1;const o=new URL(e).hostname;return o!=null&&o.startsWith("www.")?((o==null?void 0:o.match(/\./g))||[]).length>=2:((o==null?void 0:o.match(/\./g))||[]).length>=1}catch{return!1}},Q=e=>ft(e)?[ct,lt,pt,dt].some(s=>s.test(e)):!1,oe=[{date_added_to_graph:1733218679827695e-6,node_type:"Episode",properties:{date:1731888e3,episode_title:"AI Agents and AI Assistants: A Contrast in Function",image_url:"https://i.ytimg.com/vi/IivxYYkJ2DI/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/62110bc0-6b27-4779-9d5e-320eab6fae84/IivxYYkJ2DI.mp3",source_link:"https://www.youtube.com/watch?v=IivxYYkJ2DI",status:"completed"},ref_id:"b8784fb9-efa8-4a25-8a78-e14be96a4387"},{date_added_to_graph:1733323898765796e-6,node_type:"Episode",properties:{date:1733184e3,episode_title:"Joe Rogan Experience #2237 - Mike Benz",image_url:"https://i.ytimg.com/vi_webp/rrJhQpvlkLA/sddefault.webp",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/b4c6220e-7048-431c-80c4-90e56b71bd06/rrJhQpvlkLA.mp3",source_link:"https://www.youtube.com/watch?v=rrJhQpvlkLA",status:"completed"},ref_id:"2e51fdb8-a1f1-4e1f-b9d5-4dbdae00b1a2"},{date_added_to_graph:17326354109931817e-7,node_type:"Episode",properties:{date:1730851200,description:"Exploring the Transformative Potential of Llama, the Open-Source AI Model",episode_title:"Llama: The Open-Source AI Model that's Changing How We Think About AI",image_url:"https://i.ytimg.com/vi/8c2LnKNoSmg/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/a4542523-6b12-4baa-bce7-ed63f2704955/8c2LnKNoSmg.mp3",source_link:"https://www.youtube.com/watch?v=8c2LnKNoSmg",status:"completed"},ref_id:"87f5e4c5-39c2-4773-8208-8c1c4fe4019b"}];console.log(oe);const ht=async e=>{const r="add_node",s={};s.media_url=e.source,s.content_type="audio_video";const o=await me.post(`/${r}`,JSON.stringify(s));if(o.error){const{message:n}=o.error;throw new Error(n)}return o},mt=()=>{const[e,r]=l.useState(""),[s,o]=l.useState(!1),[n,d]=l.useState(""),{setRunningProjectId:w}=D(p=>p),{setSelectedEpisodeId:c,setSelectedEpisodeLink:a}=N(p=>p),{setSchemas:i}=ee(p=>p);l.useEffect(()=>{(async()=>{try{const u=await he();i(u.schemas.filter(f=>!f.is_deleted))}catch(u){console.error("Error fetching schema:",u)}})()},[i]);const x=p=>{const{value:u}=p.target;r(u),o(u!==""&&!Q(u))},m=async p=>{const u=p||e;if(Q(u))try{const f=await ht({source:u});f.data.project_id&&w(f.data.project_id),f.data.ref_id&&(c(f.data.ref_id),a(u))}catch(f){let b=q;if((f==null?void 0:f.status)===400){const h=await f.json();b=h.errorCode||(h==null?void 0:h.status)||q,h.data.ref_id&&(c(h.data.ref_id),a(u))}else f instanceof Error&&(b=f.message);d(String(b))}};return t.jsxs(xt,{children:[t.jsx(gt,{children:"Ideas have shapes"}),t.jsxs(yt,{children:[t.jsx(wt,{error:s,onChange:x,onKeyDown:p=>p.key==="Enter"&&m(),placeholder:"Paste podcast or video link",value:e}),t.jsx(bt,{error:s,onClick:s?void 0:()=>m(),children:t.jsx(Ue,{})})]}),n&&t.jsx("div",{children:n}),t.jsx(jt,{children:oe.map(p=>{var u,f;return t.jsx(Je,{imageUrl:((u=p==null?void 0:p.properties)==null?void 0:u.image_url)||"",onClick:()=>{var b;return m((b=p==null?void 0:p.properties)==null?void 0:b.source_link)},subtitle:"",title:((f=p==null?void 0:p.properties)==null?void 0:f.episode_title)||""},p==null?void 0:p.ref_id)})})]})},xt=g(C)`
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
`,gt=g(C)`
  color: ${j.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,wt=g.input`
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
`,yt=g.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`,bt=g.div`
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
`,jt=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,ne=l.memo(()=>{const{isPlaying:e,playerRef:r}=H(d=>d),s=()=>{if(r){const d=r.getCurrentTime()-15;r.seekTo(d,"seconds")}},o=()=>{if(r){const d=r.getCurrentTime()+15;r.seekTo(d,"seconds")}},n=()=>{if(r!=null&&r.getInternalPlayer()){if(e){r.getInternalPlayer().pauseVideo();return}r.getInternalPlayer().playVideo()}};return t.jsxs(Ct,{children:[t.jsx(_t,{onClick:s,children:t.jsx("img",{alt:"",src:"RewindIcon.svg"})}),t.jsx(vt,{"data-testid":"play-pause-button",onClick:n,size:"small",children:e?t.jsx(ye,{"data-testid":"pause-icon"}):t.jsx(be,{"data-testid":"play-icon"})}),t.jsx(Et,{onClick:o,children:t.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]})});ne.displayName="Controls";const Ct=g(C).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,vt=g(je)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,_t=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Et=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,ie=l.memo(({type:e,left:r,img:s})=>{var a,i;const o=ee(x=>x.normalizedSchemasByType),n=(a=o[e])==null?void 0:a.primary_color,d=(i=o[e])==null?void 0:i.icon,w=d?`svg-icons/${d}.svg`:"",c={iconStart:s||w,color:n??j.THING};return t.jsx(Tt,{style:{left:`${r}%`},children:t.jsx(ae,{...c,label:e})})});ie.displayName="Marker";const ae=l.memo(({iconStart:e,color:r,label:s})=>t.jsx(St,{color:r,children:e&&t.jsx("img",{alt:s,className:"badge__img",src:e})}));ae.displayName="Badge";const St=g(C).attrs({direction:"row"})`
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
`,Tt=g.div`
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
`,ce=l.memo(({markers:e,duration:r})=>t.jsx(t.Fragment,{children:e.map(s=>{var w;const o=Math.floor(((s==null?void 0:s.start)||0)/r*100),n=(s==null?void 0:s.node_type)||"",d=((w=s==null?void 0:s.properties)==null?void 0:w.image_url)||"";return t.jsx(ie,{img:d,left:o,type:n},s.ref_id)})}));ce.displayName="Markers";const It=({duration:e,markers:r,handleProgressChange:s,playingTIme:o})=>{const n=10/e*100;return t.jsxs(Rt,{children:[t.jsx(Pt,{max:e,onChange:s,value:o,width:n}),t.jsx(ce,{duration:e,markers:r})]})},Rt=g(C)`
  position: relative;
  flex: 1 1 100%;
`,Pt=g(Ee)`
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
`,zt=({markers:e})=>{const{playingNode:r,playerRef:s}=H(a=>a),[o,n]=l.useState(0),d=r,w=l.useCallback((a,i)=>{const x=Array.isArray(i)?i[0]:i;s&&s.seekTo(x,"seconds")},[s]);l.useEffect(()=>{const a=setInterval(()=>{if(s&&n){const i=s.getCurrentTime();n(i)}},500);return()=>clearInterval(a)},[s,n]);const c=(s==null?void 0:s.getDuration())||0;return d?t.jsxs($t,{children:[t.jsx(ne,{}),t.jsx(It,{duration:c,handleProgressChange:w,markers:e,playingTIme:o})]}):null},$t=g(C).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${j.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,Mt=({sourcePosition:e,targetPosition:r,color:s="white",arrowSize:o=1,label:n="label"})=>{const{points:d,textPosition:w}=l.useMemo(()=>{const c=new z(e.x,e.y,e.z),a=new z(r.x,r.y,r.z),i=new z().subVectors(a,c).normalize(),x=new z().addVectors(c,a).multiplyScalar(.5),m=new z().copy(i).multiplyScalar(-o).applyAxisAngle(new z(0,0,1),Math.PI/6),p=new z().copy(i).multiplyScalar(-o).applyAxisAngle(new z(0,0,1),-Math.PI/6);return{points:[c,a,a.clone(),a.clone().add(m),a.clone(),a.clone().add(p)],textPosition:x}},[e,r,o]);return t.jsxs(t.Fragment,{children:[t.jsxs("line",{children:[t.jsx("bufferGeometry",{children:t.jsx("bufferAttribute",{array:new Float32Array(d.flatMap(c=>[c.x,c.y,c.z])),attach:"attributes-position",count:d.length,itemSize:3})}),t.jsx("lineBasicMaterial",{color:s})]}),n&&t.jsx(Re,{anchorX:"center",anchorY:"middle",color:s,...Pe,position:w,children:n})]})},kt=(e,r,s)=>{const o=new He;return o.moveTo(-e/2+s,-r/2),o.lineTo(e/2-s,-r/2),o.quadraticCurveTo(e/2,-r/2,e/2,-r/2+s),o.lineTo(e/2,r/2-s),o.quadraticCurveTo(e/2,r/2,e/2-s,r/2),o.lineTo(-e/2+s,r/2),o.quadraticCurveTo(-e/2,r/2,-e/2,r/2-s),o.lineTo(-e/2,-r/2+s),o.quadraticCurveTo(-e/2,-r/2,-e/2+s,-r/2),o},At=({width:e,height:r,radius:s,color:o})=>{const n=kt(e,r,s);return t.jsxs("mesh",{children:[t.jsx("shapeGeometry",{args:[n]}),t.jsx("meshBasicMaterial",{color:o,opacity:.9,transparent:!0})]})},Lt=({name:e,url:r,type:s})=>t.jsxs(Ht,{children:[r&&t.jsx("img",{alt:"",className:"image",src:r}),t.jsx("div",{className:"title",children:e}),t.jsx("div",{className:"badge",children:t.jsx(We,{type:s})}),t.jsx("div",{className:"action-btn",children:t.jsx(Ce,{})})]}),Ht=g(C)`
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
`,V=l.memo(({width:e,height:r,position:s,url:o,onButtonClick:n,name:d,type:w,color:c})=>{const{camera:a}=L();return t.jsxs("group",{position:s,children:[t.jsx(At,{color:c,height:r,radius:1.5,width:e}),!1,t.jsx(ze,{position:[-e/2,r/2,0],children:t.jsx(C,{onClick:()=>n(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${e*a.zoom}px`,height:`${r*a.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:t.jsx(Lt,{name:`${d}`,type:w||"",url:o})})})]})});V.displayName="Node";const X=144/10,Z=84/10,Wt=()=>{const e=L(),{dataInitial:r}=D(n=>n),{viewport:s}=e,o=l.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const n=r.links.filter(a=>{var i;return(i=a==null?void 0:a.properties)==null?void 0:i.start}).map(a=>{var i;return{source:a.source,target:a.target,start:(i=a.properties)==null?void 0:i.start}}),d=r.nodes.filter(a=>r.links.some(i=>i.source===a.ref_id||i.target===a.ref_id)).map(a=>{const i=n.find(u=>a.ref_id===u.source||a.ref_id===u.target),x=((i==null?void 0:i.start)||0)*(s.width/10);return{...a,x,y:0,z:0,start:(i==null?void 0:i.start)||0}}).filter(a=>a.node_type!=="Clip"&&a.node_type!=="Episode"&&a.node_type!=="Show"),w=d.reduce((a,i)=>{const x=r.links.filter(f=>{var b;return!((b=f==null?void 0:f.properties)!=null&&b.start)&&[f.target,f.source].includes(i.ref_id)}),p=r.nodes.filter(f=>f.node_type!=="Episode"&&f.node_type!=="Clip"&&f.ref_id!==i.ref_id&&x.some(b=>[b.source,b.target].includes(f.ref_id))).map((f,b)=>{const{x:h}=i,$=(Math.floor(b/2)+1)*Z*2*(b%2===0?1:-1);return{...f,x:h,y:$,z:0}}),u=x.map(f=>{if(f.source===i.ref_id){const h=p.find($=>$.ref_id===f.target);return{...f,sourcePositions:{x:i.x,y:i.y,z:i.z},targetPositions:{x:h==null?void 0:h.x,y:h==null?void 0:h.y,z:h==null?void 0:h.z}}}const b=p.find(h=>h.ref_id===f.source);return{...f,sourcePositions:{x:b==null?void 0:b.x,y:b==null?void 0:b.y,z:b==null?void 0:b.z},targetPositions:{x:i.x,y:i.y,z:i.z}}});return a[i.ref_id]={nodes:p,edges:u},a},{}),c=Object.values(w).flatMap(a=>a.edges).filter(a=>{var i;return(i=a==null?void 0:a.sourcePositions)==null?void 0:i.x});return{nodes:d,edges:c,relatedNodes:Object.fromEntries(Object.entries(w).map(([a,i])=>[a,i.nodes]))}},[r,s.width]);return t.jsxs(t.Fragment,{children:[o.nodes.map(n=>{var d,w;return t.jsxs(l.Fragment,{children:[t.jsx(V,{color:"#353A46",height:Z,name:((d=n==null?void 0:n.properties)==null?void 0:d.name)||"",onButtonClick:console.log,position:[n.x,n.y,n.z],type:n.node_type,url:((w=n==null?void 0:n.properties)==null?void 0:w.image_url)||"logo.png",width:X}),(o.relatedNodes[n.ref_id]||[]).map(c=>{var a,i;return t.jsx(V,{color:"#353A46",height:Z,name:((a=c==null?void 0:c.properties)==null?void 0:a.name)||"",onButtonClick:console.log,position:[c.x,c.y,c.z],type:c.node_type,url:((i=c==null?void 0:c.properties)==null?void 0:i.image_url)||"logo.png",width:X},`${c.ref_id}-${n.ref_id}`)})]},n.ref_id)}),o.edges.map((n,d)=>n!=null&&n.sourcePositions&&(n!=null&&n.targetPositions)?t.jsx(Mt,{label:n.edge_type||"",sourcePosition:new z(n.sourcePositions.x,n.sourcePositions.y,n.sourcePositions.z),targetPosition:new z(n.targetPositions.x,n.targetPositions.y,n.targetPositions.z)},`edge-${d}`):null)]})},Ft=()=>{const{camera:e,viewport:r}=L(),s=H(o=>o.playerRef);return se(()=>{if(s){const o=s.getCurrentTime();e.position.x=o*r.width/10}}),null},Bt=()=>{const{camera:e,gl:r}=L();return l.useEffect(()=>{const s=e,o=d=>{d.preventDefault(),d.ctrlKey&&(s.zoom+=d.deltaY*-.1,s.zoom=Math.max(2,Math.min(s.zoom,20))),s.position.x+=d.deltaX*.1,s.updateProjectionMatrix()},n=r.domElement;return n.addEventListener("wheel",o,{passive:!1}),()=>{n.removeEventListener("wheel",o)}},[e,r]),null},le=l.memo(()=>(console.log("rerender"),t.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:t.jsxs($e,{orthographic:!0,children:[t.jsx(Ft,{}),t.jsx(De,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),t.jsx(Wt,{}),t.jsx(Bt,{})]})})));le.displayName="Scene";const Dt=(e,r)=>{let s=0,o=e.length-1;for(;s<=o;){const n=Math.floor((s+o)/2),d=e[n],{start:w,end:c}=d.properties;if(r>=w&&r<=c)return d;r<w?o=n-1:s=n+1}return null},Nt=({mediaUrl:e})=>{const r=l.useRef(null),[s,o]=l.useState("ready"),[n,d]=l.useState(!1),{setActiveEdge:w}=ve(S=>S),{dataInitial:c}=D(S=>S),{isPlaying:a,playingTime:i,setIsPlaying:x,setPlayingTime:m,setDuration:p,playingNode:u,volume:f,setHasError:b,resetPlayer:h,isSeeking:$,setIsSeeking:v,setPlayerRef:_,playerRef:y}=H(S=>S);l.useEffect(()=>()=>h(),[h]),l.useEffect(()=>{u&&!n&&(m(0),p(0),d(!1))},[u,m,p,d,n]),l.useEffect(()=>{$&&y&&(y.seekTo(i,"seconds"),v(!1))},[i,$,v,y]);const E=()=>{x(!a)},M=l.useCallback(()=>{x(!0)},[x]),F=l.useCallback(()=>{x(!1)},[x]),B=()=>{b(!0),o("error")},R=l.useMemo(()=>((c==null?void 0:c.links.filter(I=>{var A;return(A=I==null?void 0:I.properties)==null?void 0:A.start}))||[]).slice().sort((I,A)=>{var O,Y;return((O=I==null?void 0:I.properties)==null?void 0:O.start)-((Y=A==null?void 0:A.properties)==null?void 0:Y.start)}),[c]),k=S=>{if(!$){const T=S.playedSeconds,I=Dt(R,T);w(I||null)}},P=()=>{y&&o("ready")},G=()=>{E()},W=l.useCallback(S=>{!y&&S&&_(S)},[_,y]);return e?t.jsxs(Gt,{ref:r,tabIndex:0,children:[t.jsx(Zt,{isFullScreen:!1,children:t.jsx(re,{size:120,src:(u==null?void 0:u.image_url)||"",type:"clip"})}),t.jsx(Ot,{isFullScreen:!1,onClick:G,children:t.jsx(Se,{ref:W,height:"219px",onBuffer:()=>o("buffering"),onBufferEnd:()=>o("ready"),onError:B,onPause:F,onPlay:M,onProgress:k,onReady:P,playing:a,url:e||"",volume:f,width:"100%"})}),s==="error"?t.jsx(Vt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Gt=g(C)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Zt=g(C)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Vt=g(C)`
  height: 60px;
  padding: 12px 16px;
  color: ${j.primaryRed};
`,Ot=g.div`
  margin: ${e=>e.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Yt=l.memo(Nt),pe=l.forwardRef(({active:e,start:r,text:s},o)=>t.jsxs(qt,{ref:o,className:xe({active:e}),children:[t.jsx(Ut,{children:r}),t.jsx(Jt,{children:t.jsx("span",{children:s})})]}));pe.displayName="ParagraphComponent";const K=l.memo(pe,(e,r)=>e.active===r.active),qt=g(C)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,Ut=g.span`
  background: ${j.lightBlue100};
  color: ${j.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Jt=g.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${j.AI_HIGHLIGHT};
  }
`,Qt=({transcriptString:e})=>{const[r,s]=l.useState(0),[o,n]=l.useState(!1),{playerRef:d}=H(m=>m),w=e.replace(/^["']|["']$/g,""),c=JSON.parse(w),a=l.useRef(null),i=l.useRef(null),x=l.useRef(null);return l.useEffect(()=>{const m=setInterval(()=>{if(d&&s){const p=d.getCurrentTime();s(p)}},100);return()=>clearInterval(m)},[d,s]),l.useEffect(()=>{const m=()=>{n(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{n(!1)},1e3)},p=i.current;return p&&p.addEventListener("scroll",m),()=>{p&&p.removeEventListener("scroll",m)}},[]),l.useEffect(()=>{!o&&a.current&&a.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,o]),t.jsx(Xt,{ref:i,children:c[0].start>r?t.jsx(K,{active:!1,start:U(c[0].start),text:c[0].text}):t.jsx(t.Fragment,{children:c.map(m=>{const p=U(m.start),u=m.start<r&&r<m.end;return m.start<=r+5?t.jsx(K,{ref:u?a:null,active:u,start:p,text:m.text},`${m.start}-${m.end}`):null})})})},Xt=g.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,Kt=({name:e})=>{const{selectedEpisodeId:r}=N(c=>c),{playerRef:s}=H(c=>c),[o,n]=l.useState(0),[d,w]=l.useState([]);return l.useEffect(()=>{r&&(async()=>{try{const a=await te(r,0,50,{nodeType:["Clip"],useSubGraph:!1});a!=null&&a.nodes&&w(a.nodes)}catch(a){console.error(a)}})()},[r]),l.useEffect(()=>{const c=setInterval(()=>{if(s&&n){const a=s.getCurrentTime();n(a)}},100);return()=>clearInterval(c)},[s,n]),t.jsxs(er,{children:[t.jsx(C,{className:"heading",children:e}),d.map(c=>{var m,p,u;const a=(m=c==null?void 0:c.properties)==null?void 0:m.timestamp,[i,x]=a?a.split("-").map(Number):[0,0];return i<=o*1e3&&o*1e3<x?t.jsx(tr,{direction:"row",children:((p=c.properties)==null?void 0:p.transcript)&&t.jsx(Qt,{transcriptString:(u=c.properties)==null?void 0:u.transcript})},c.ref_id):null})]})},er=g(C)`
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
`,tr=g(C)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,rr=()=>{const{selectedEpisodeLink:e,selectedEpisode:r}=N(s=>s);return t.jsxs(sr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsx(or,{children:e&&t.jsx(Yt,{mediaUrl:e})}),t.jsx(Kt,{name:(r==null?void 0:r.name)||""})]})},sr=g(C)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 20px 20px",background:"transparent",width:"100%",[e.breakpoints.up("sm")]:{width:Te,gap:"10px"}})),or=g(C)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),vr=()=>{const{addNewNode:e,isFetching:r,runningProjectId:s}=D(v=>v),[o,n]=l.useState(null),[d,w]=l.useState(!1),{selectedEpisodeId:c,setSelectedEpisode:a}=N(v=>v),i=_e(),x=l.useRef(null),m=l.useRef(null),p=l.useRef(null),u=l.useRef(null),f=l.useRef(null),{setPlayingNode:b}=H(v=>v),h=l.useCallback(v=>{r||(u.current||(u.current={nodes:[],edges:[]}),v.edges&&u.current.edges.push(...v.edges),v.nodes&&u.current.nodes.push(...v.nodes),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{if(u.current){const{nodes:_,edges:y}=u.current,E={nodes:_,edges:y};u.current={nodes:[],edges:[]},e(E)}},3e3))},[e,r]);l.useEffect(()=>{c&&(async()=>{try{const _=await te(c,0,50);n(_);const[y,E]=((_==null?void 0:_.nodes)||[]).reduce(([R,k],P)=>(["Episode","Show","Host","Guest"].includes(P.node_type)?R.push(P):k.push(P),[R,k]),[[],[]]),M=new Set(y.map(R=>R.ref_id)),[F,B]=((_==null?void 0:_.edges)||[]).reduce(([R,k],P)=>(M.has(P.source)&&M.has(P.target)?R.push(P):k.push(P),[R,k]),[[],[]]);p.current={nodes:E||[],edges:B||[]},e({nodes:y,edges:F})}catch(_){console.error(_)}})()},[c,e]),l.useEffect(()=>{c&&(async()=>{try{const _=await ge(c);_&&(b(_),a(_))}catch(_){console.error(_)}})()},[c,b,a]),l.useEffect(()=>(i&&(i.connect(),i.on("connect_error",v=>{console.error("Socket connection error:",v)}),s&&i.on("new_node_created",h)),()=>{i&&i.off()}),[i,h,s]),l.useEffect(()=>{const v=_=>{const{playerRef:y}=H.getState();if(m.current!==null){if(_-m.current>2e3){if(p.current&&y){const{nodes:M,edges:F}=p.current,B=y==null?void 0:y.getCurrentTime(),[R,k]=F.reduce(([W,S],T)=>{var I,A;return((I=T==null?void 0:T.properties)==null?void 0:I.start)!==void 0&&((A=T==null?void 0:T.properties)==null?void 0:A.start)<B?W.push(T):S.push(T),[W,S]},[[],[]]),[P,G]=M.reduce(([W,S],T)=>(R.some(I=>I.target===T.ref_id||I.source===T.ref_id)?W.push(T):S.push(T),[W,S]),[[],[]]);p.current={nodes:G,edges:k},(P.length||R.length)&&e({nodes:P,edges:R})}m.current=_}}else m.current=_;x.current=requestAnimationFrame(v)};return x.current=requestAnimationFrame(v),()=>{x.current&&cancelAnimationFrame(x.current)}},[p,e]),l.useEffect(()=>{if(s)try{i==null||i.emit("update_project_id",{id:s})}catch(v){console.error(v)}},[s,i]);const $=l.useMemo(()=>{if(o){const v=o.edges.filter(y=>{var E;return(E=y==null?void 0:y.properties)==null?void 0:E.start}).map(y=>{var E;return{source:y.source,target:y.target,start:(E=y.properties)==null?void 0:E.start}});return o.nodes.filter(y=>o.edges.some(E=>E.source===y.ref_id||E.target===y.ref_id)).map(y=>{const E=v.find(M=>y.ref_id===M.source||y.ref_id===M.target);return{...y,start:(E==null?void 0:E.start)||0}}).filter(y=>y&&y.node_type!=="Clip"&&y.node_type!=="Episode"&&y.node_type!=="Show")}return[]},[o]);return t.jsx(C,{direction:"row",style:{height:"100%"},children:c?t.jsxs(t.Fragment,{children:[t.jsxs(C,{children:[t.jsx(C,{onClick:()=>w(!d),children:t.jsx(Ze,{})}),t.jsx(rr,{})]}),t.jsxs(nr,{children:[t.jsx(C,{basis:"100%",grow:1,shrink:1,children:d?t.jsx(le,{}):t.jsx(we,{})}),t.jsx(zt,{markers:$})]})]}):t.jsx(mt,{})})},nr=g(C)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`;export{vr as MindSet};
