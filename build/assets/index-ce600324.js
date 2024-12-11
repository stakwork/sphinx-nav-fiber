import{r as c,x as ue,c as fe,j as e,s as m,a as b,F as C,T as O,u as D,d as te,y as he,N as U,z as xe,A as me,D as re,E as ge}from"./index-7da75956.js";import{Universe as we}from"./index-b81e1e1d.js";import{b as se,c as L,d as ye,e as je,f as be,g as Ce,h as ve,i as _e,a as Ee}from"./index-30e16aa2.js";import{S as Se,R as Te,s as J,M as Ie}from"./index-03abeb72.js";import{u as H,a as oe,m as Re,T as ze,f as $e,H as Pe,C as Me}from"./index-43664785.js";import{W as ke,L as Q,H as Ae,D as He,F as Le,V as $,S as We}from"./three.module-df70f22b.js";import"./index-70a8cf12.js";import"./TextareaAutosize-af53c459.js";import"./index-4fba9b4f.js";import"./ClipLoader-d7e95e1a.js";import"./Skeleton-d9be6122.js";import"./Stack-7ede5a7a.js";import"./isPlainObject-3d58d9ea.js";import"./Typography-5762c995.js";import"./createSvgIcon-430b3256.js";import"./index-9f1f1c4c.js";function Fe(t,r,s){const{gl:n,size:i,viewport:d}=H(),w=typeof t=="number"?t:i.width*d.dpr,l=typeof r=="number"?r:i.height*d.dpr,o=(typeof t=="number"?s:t)||{},{samples:a=0,depth:x,...f}=o,p=c.useMemo(()=>{let u;return u=new ke(w,l,{minFilter:Q,magFilter:Q,encoding:n.outputEncoding,type:Ae,...f}),x&&(u.depthTexture=new He(w,l,Le)),u.samples=a,u},[]);return c.useLayoutEffect(()=>{p.setSize(w,l),a&&(p.samples=a)},[a,p,w,l]),c.useEffect(()=>()=>p.dispose(),[]),p}const Be=t=>typeof t=="function",De=c.forwardRef(({envMap:t,resolution:r=256,frames:s=1/0,children:n,makeDefault:i,...d},w)=>{const l=H(({set:g})=>g),o=H(({camera:g})=>g),a=H(({size:g})=>g),x=c.useRef(null),f=c.useRef(null),p=Fe(r);c.useLayoutEffect(()=>{d.manual||x.current.updateProjectionMatrix()},[a,d]),c.useLayoutEffect(()=>{x.current.updateProjectionMatrix()}),c.useLayoutEffect(()=>{if(i){const g=o;return l(()=>({camera:x.current})),()=>l(()=>({camera:g}))}},[x,i,l]);let u=0,h=null;const j=Be(n);return oe(g=>{j&&(s===1/0||u<s)&&(f.current.visible=!1,g.gl.setRenderTarget(p),h=g.scene.background,t&&(g.scene.background=t),g.gl.render(g.scene,x.current),g.scene.background=h,g.gl.setRenderTarget(null),f.current.visible=!0,u++)}),c.createElement(c.Fragment,null,c.createElement("orthographicCamera",ue({left:a.width/-2,right:a.width/2,top:a.height/2,bottom:a.height/-2,ref:Re([x,w])},d),!j&&n),c.createElement("group",{ref:f},j&&n(p.texture)))}),Ne={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},N=fe(t=>({...Ne,setSelectedEpisodeId:r=>t({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>t({selectedEpisodeLink:r}),setSelectedEpisode:r=>t({selectedEpisode:r})})),Ge=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Ze=()=>e.jsxs(Ve,{children:[e.jsx(Oe,{children:e.jsx(Ye,{children:e.jsx(Ge,{})})}),e.jsx(qe,{children:"Graph Mindset"})]}),Ve=m(C).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Oe=m(C)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ye=m.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${b.white};
  }
`,qe=m(O)`
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
`,Ue=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Je=({imageUrl:t,title:r,subtitle:s,onClick:n})=>{const i=r.length>35?`${r.substring(0,32)}...`:r,d=s.length>50?`${s.substring(0,47)}...`:s;return e.jsxs(Qe,{onClick:n,children:[e.jsx(Xe,{children:e.jsx(se,{height:140,src:t,type:"Episode",width:170})}),e.jsxs(Ke,{children:[e.jsx(et,{children:i}),e.jsx(tt,{children:d})]})]})},Qe=m(C)`
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
`,Xe=m.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ke=m(C)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,et=m.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${b.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,tt=m.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${b.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,rt=/^(https?:\/\/)/,st=/(www\.)?/,ot=/[\w-]+(\.[\w-]+)*/,nt=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,it=/(\/[^\s?]*)?/,at=/(\?[^\s]*)?/,ct=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,lt=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,pt=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,dt=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ut=new RegExp(`${rt.source}${st.source}${ot.source}${nt.source}?${it.source}${at.source}$`,"i"),ft=t=>{try{if(!(t==null?void 0:t.match(ut)))return!1;const n=new URL(t).hostname;return n!=null&&n.startsWith("www.")?((n==null?void 0:n.match(/\./g))||[]).length>=2:((n==null?void 0:n.match(/\./g))||[]).length>=1}catch{return!1}},X=t=>ft(t)?[ct,lt,pt,dt].some(s=>s.test(t)):!1,ne=[{date_added_to_graph:1733218679827695e-6,node_type:"Episode",properties:{date:1731888e3,episode_title:"AI Agents and AI Assistants: A Contrast in Function",image_url:"https://i.ytimg.com/vi/IivxYYkJ2DI/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/62110bc0-6b27-4779-9d5e-320eab6fae84/IivxYYkJ2DI.mp3",source_link:"https://www.youtube.com/watch?v=IivxYYkJ2DI",status:"completed"},ref_id:"b8784fb9-efa8-4a25-8a78-e14be96a4387"},{date_added_to_graph:1733323898765796e-6,node_type:"Episode",properties:{date:1733184e3,episode_title:"Joe Rogan Experience #2237 - Mike Benz",image_url:"https://i.ytimg.com/vi_webp/rrJhQpvlkLA/sddefault.webp",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/b4c6220e-7048-431c-80c4-90e56b71bd06/rrJhQpvlkLA.mp3",source_link:"https://www.youtube.com/watch?v=rrJhQpvlkLA",status:"completed"},ref_id:"2e51fdb8-a1f1-4e1f-b9d5-4dbdae00b1a2"},{date_added_to_graph:17326354109931817e-7,node_type:"Episode",properties:{date:1730851200,description:"Exploring the Transformative Potential of Llama, the Open-Source AI Model",episode_title:"Llama: The Open-Source AI Model that's Changing How We Think About AI",image_url:"https://i.ytimg.com/vi/8c2LnKNoSmg/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/a4542523-6b12-4baa-bce7-ed63f2704955/8c2LnKNoSmg.mp3",source_link:"https://www.youtube.com/watch?v=8c2LnKNoSmg",status:"completed"},ref_id:"87f5e4c5-39c2-4773-8208-8c1c4fe4019b"}];console.log(ne);const ht=async t=>{const r="add_node",s={};s.media_url=t.source,s.content_type="audio_video";const n=await xe.post(`/${r}`,JSON.stringify(s));if(n.error){const{message:i}=n.error;throw new Error(i)}return n},xt=()=>{const[t,r]=c.useState(""),[s,n]=c.useState(!1),[i,d]=c.useState(""),{setRunningProjectId:w}=D(p=>p),{setSelectedEpisodeId:l,setSelectedEpisodeLink:o}=N(p=>p),{setSchemas:a}=te(p=>p);c.useEffect(()=>{(async()=>{try{const u=await he();a(u.schemas.filter(h=>!h.is_deleted))}catch(u){console.error("Error fetching schema:",u)}})()},[a]);const x=p=>{const{value:u}=p.target;r(u),n(u!==""&&!X(u))},f=async p=>{const u=p||t;if(X(u))try{const h=await ht({source:u});h.data.project_id&&w(h.data.project_id),h.data.ref_id&&(l(h.data.ref_id),o(u))}catch(h){let j=U;if((h==null?void 0:h.status)===400){const g=await h.json();j=g.errorCode||(g==null?void 0:g.status)||U,g.data.ref_id&&(l(g.data.ref_id),o(u))}else h instanceof Error&&(j=h.message);d(String(j))}};return e.jsxs(mt,{children:[e.jsx(gt,{children:"Ideas have shapes"}),e.jsxs(yt,{children:[e.jsx(wt,{error:s,onChange:x,onKeyDown:p=>p.key==="Enter"&&f(),placeholder:"Paste podcast or video link",value:t}),e.jsx(jt,{error:s,onClick:s?void 0:()=>f(),children:e.jsx(Ue,{})})]}),i&&e.jsx("div",{children:i}),e.jsx(bt,{children:ne.map(p=>{var u,h;return e.jsx(Je,{imageUrl:((u=p==null?void 0:p.properties)==null?void 0:u.image_url)||"",onClick:()=>{var j;return f((j=p==null?void 0:p.properties)==null?void 0:j.source_link)},subtitle:"",title:((h=p==null?void 0:p.properties)==null?void 0:h.episode_title)||""},p==null?void 0:p.ref_id)})})]})},mt=m(C)`
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
`,gt=m(C)`
  color: ${b.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,wt=m.input`
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
`,yt=m.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`,jt=m.div`
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
`,bt=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,ie=c.memo(()=>{const{isPlaying:t,playerRef:r}=L(d=>d),s=()=>{if(r){const d=r.getCurrentTime()-15;r.seekTo(d,"seconds")}},n=()=>{if(r){const d=r.getCurrentTime()+15;r.seekTo(d,"seconds")}},i=()=>{if(r!=null&&r.getInternalPlayer()){if(t){r.getInternalPlayer().pauseVideo();return}r.getInternalPlayer().playVideo()}};return e.jsxs(Ct,{children:[e.jsx(_t,{onClick:s,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(vt,{"data-testid":"play-pause-button",onClick:i,size:"small",children:t?e.jsx(ye,{"data-testid":"pause-icon"}):e.jsx(je,{"data-testid":"play-icon"})}),e.jsx(Et,{onClick:n,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]})});ie.displayName="Controls";const Ct=m(C).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 142px;
  height: 54px;
  background: ${b.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${b.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,vt=m(be)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,_t=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,Et=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,ae=c.memo(({type:t,left:r,img:s})=>{var o,a;const n=te(x=>x.normalizedSchemasByType),i=(o=n[t])==null?void 0:o.primary_color,d=(a=n[t])==null?void 0:a.icon,w=d?`svg-icons/${d}.svg`:"",l={iconStart:s||w,color:i??b.THING};return e.jsx(Tt,{style:{left:`${r}%`},children:e.jsx(ce,{...l,label:t})})});ae.displayName="Marker";const ce=c.memo(({iconStart:t,color:r,label:s})=>e.jsx(St,{color:r,children:t&&e.jsx("img",{alt:s,className:"badge__img",src:t})}));ce.displayName="Badge";const St=m(C).attrs({direction:"row"})`
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
`,Tt=m.div`
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
`,le=c.memo(({markers:t,duration:r})=>e.jsx(e.Fragment,{children:t.map(s=>{var w;const n=Math.floor(((s==null?void 0:s.start)||0)/r*100),i=(s==null?void 0:s.node_type)||"",d=((w=s==null?void 0:s.properties)==null?void 0:w.image_url)||"";return e.jsx(ae,{img:d,left:n,type:i},s.ref_id)})}));le.displayName="Markers";const It=({duration:t,markers:r,handleProgressChange:s,playingTIme:n})=>{const i=10/t*100;return e.jsxs(Rt,{children:[e.jsx(zt,{max:t,onChange:s,value:n,width:i}),e.jsx(le,{duration:t,markers:r})]})},Rt=m(C)`
  position: relative;
  flex: 1 1 100%;
`,zt=m(Se)`
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
`,$t=({markers:t})=>{const{playingNode:r,playerRef:s}=L(o=>o),[n,i]=c.useState(0),d=r,w=c.useCallback((o,a)=>{const x=Array.isArray(a)?a[0]:a;s&&s.seekTo(x,"seconds")},[s]);c.useEffect(()=>{const o=setInterval(()=>{if(s&&i){const a=s.getCurrentTime();i(a)}},500);return()=>clearInterval(o)},[s,i]);const l=(s==null?void 0:s.getDuration())||0;return d?e.jsxs(Pt,{children:[e.jsx(ie,{}),e.jsx(It,{duration:l,handleProgressChange:w,markers:t,playingTIme:n})]}):null},Pt=m(C).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${b.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,Mt=({sourcePosition:t,targetPosition:r,color:s="white",arrowSize:n=1,label:i="label"})=>{const{points:d,textPosition:w}=c.useMemo(()=>{const l=new $(t.x,t.y,t.z),o=new $(r.x,r.y,r.z),a=new $().subVectors(o,l).normalize(),x=new $().addVectors(l,o).multiplyScalar(.5),f=new $().copy(a).multiplyScalar(-n).applyAxisAngle(new $(0,0,1),Math.PI/6),p=new $().copy(a).multiplyScalar(-n).applyAxisAngle(new $(0,0,1),-Math.PI/6);return{points:[l,o,o.clone(),o.clone().add(f),o.clone(),o.clone().add(p)],textPosition:x}},[t,r,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(d.flatMap(l=>[l.x,l.y,l.z])),attach:"attributes-position",count:d.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:s})]}),i&&e.jsx(ze,{anchorX:"center",anchorY:"middle",color:s,...$e,position:w,children:i})]})},kt=({title:t,description:r})=>e.jsx(At,{children:e.jsx(Ht,{children:e.jsxs(Lt,{children:[e.jsx(Wt,{children:t}),r&&e.jsx(Ft,{children:r})]})})}),At=m.div`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Ht=m(C)`
  width: 390px;
  min-height: 100px;
  background: ${b.HOVER_CARD_BG};
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
`,Lt=m(C)`
  margin-top: 0;
  flex-direction: column;
  gap: 4px;
`,Wt=m(O)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${b.white};
  margin: 0;
`,Ft=m(O)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${b.white};
  margin: 0;
  opacity: 0.8;
`,Bt=(t,r,s)=>{const n=new We;return n.moveTo(-t/2+s,-r/2),n.lineTo(t/2-s,-r/2),n.quadraticCurveTo(t/2,-r/2,t/2,-r/2+s),n.lineTo(t/2,r/2-s),n.quadraticCurveTo(t/2,r/2,t/2-s,r/2),n.lineTo(-t/2+s,r/2),n.quadraticCurveTo(-t/2,r/2,-t/2,r/2-s),n.lineTo(-t/2,-r/2+s),n.quadraticCurveTo(-t/2,-r/2,-t/2+s,-r/2),n},Dt=({width:t,height:r,radius:s,color:n})=>{const i=Bt(t,r,s);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[i]}),e.jsx("meshBasicMaterial",{color:n,opacity:.9,transparent:!0})]})},Nt=({name:t,url:r,type:s})=>e.jsxs(Gt,{children:[r&&e.jsx("img",{alt:"",className:"image",src:r}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(Ce,{type:s})}),e.jsx("div",{className:"action-btn",children:e.jsx(ve,{})})]}),Gt=m(C)`
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
`,V=c.memo(({width:t,height:r,position:s,url:n,onButtonClick:i,name:d,type:w,color:l,description:o})=>{const{camera:a}=H(),[x,f]=c.useState(!1);return e.jsxs("group",{position:s,children:[e.jsx(Dt,{color:l,height:r,radius:1.5,width:t}),!1,e.jsx(Pe,{position:[-t/2,r/2,0],children:e.jsxs(C,{onClick:()=>i(),onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*a.zoom}px`,height:`${r*a.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:[e.jsx(Nt,{name:`${d}`,type:w||"",url:n}),x&&e.jsx(kt,{description:o,title:d})]})})]})});V.displayName="Node";const K=144/10,Z=84/10,Zt=()=>{const t=H(),{dataInitial:r}=D(i=>i),{viewport:s}=t,n=c.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const i=r.links.filter(o=>{var a;return(a=o==null?void 0:o.properties)==null?void 0:a.start}).map(o=>{var a;return{source:o.source,target:o.target,start:(a=o.properties)==null?void 0:a.start}}),d=r.nodes.filter(o=>r.links.some(a=>a.source===o.ref_id||a.target===o.ref_id)).map(o=>{const a=i.find(u=>o.ref_id===u.source||o.ref_id===u.target),x=((a==null?void 0:a.start)||0)*(s.width/10);return{...o,x,y:0,z:0,start:(a==null?void 0:a.start)||0}}).filter(o=>o.node_type!=="Clip"&&o.node_type!=="Episode"&&o.node_type!=="Show"),w=d.reduce((o,a)=>{const x=r.links.filter(h=>{var j;return!((j=h==null?void 0:h.properties)!=null&&j.start)&&[h.target,h.source].includes(a.ref_id)}),p=r.nodes.filter(h=>h.node_type!=="Episode"&&h.node_type!=="Clip"&&h.ref_id!==a.ref_id&&x.some(j=>[j.source,j.target].includes(h.ref_id))).map((h,j)=>{const{x:g}=a,P=(Math.floor(j/2)+1)*Z*2*(j%2===0?1:-1);return{...h,x:g,y:P,z:0}}),u=x.map(h=>{if(h.source===a.ref_id){const g=p.find(P=>P.ref_id===h.target);return{...h,sourcePositions:{x:a.x,y:a.y,z:a.z},targetPositions:{x:g==null?void 0:g.x,y:g==null?void 0:g.y,z:g==null?void 0:g.z}}}const j=p.find(g=>g.ref_id===h.source);return{...h,sourcePositions:{x:j==null?void 0:j.x,y:j==null?void 0:j.y,z:j==null?void 0:j.z},targetPositions:{x:a.x,y:a.y,z:a.z}}});return o[a.ref_id]={nodes:p,edges:u},o},{}),l=Object.values(w).flatMap(o=>o.edges).filter(o=>{var a;return(a=o==null?void 0:o.sourcePositions)==null?void 0:a.x});return{nodes:d,edges:l,relatedNodes:Object.fromEntries(Object.entries(w).map(([o,a])=>[o,a.nodes]))}},[r,s.width]);return e.jsxs(e.Fragment,{children:[n.nodes.map(i=>{var d,w,l;return e.jsxs(c.Fragment,{children:[e.jsx(V,{color:"#353A46",description:(d=i==null?void 0:i.properties)==null?void 0:d.description,height:Z,name:((w=i==null?void 0:i.properties)==null?void 0:w.name)||"",onButtonClick:console.log,position:[i.x,i.y,i.z],type:i.node_type,url:((l=i==null?void 0:i.properties)==null?void 0:l.image_url)||"logo.png",width:K}),(n.relatedNodes[i.ref_id]||[]).map(o=>{var a,x,f;return e.jsx(V,{color:"#353A46",description:(a=o==null?void 0:o.properties)==null?void 0:a.description,height:Z,name:((x=o==null?void 0:o.properties)==null?void 0:x.name)||"",onButtonClick:console.log,position:[o.x,o.y,o.z],type:o.node_type,url:((f=o==null?void 0:o.properties)==null?void 0:f.image_url)||"logo.png",width:K},`${o.ref_id}-${i.ref_id}`)})]},i.ref_id)}),n.edges.map((i,d)=>i!=null&&i.sourcePositions&&(i!=null&&i.targetPositions)?e.jsx(Mt,{label:i.edge_type||"",sourcePosition:new $(i.sourcePositions.x,i.sourcePositions.y,i.sourcePositions.z),targetPosition:new $(i.targetPositions.x,i.targetPositions.y,i.targetPositions.z)},`edge-${d}`):null)]})},Vt=()=>{const{camera:t,viewport:r}=H(),s=L(n=>n.playerRef);return oe(()=>{if(s){const n=s.getCurrentTime();t.position.x=n*r.width/10}}),null},Ot=()=>{const{camera:t,gl:r}=H();return c.useEffect(()=>{const s=t,n=d=>{d.preventDefault(),d.ctrlKey&&(s.zoom+=d.deltaY*-.1,s.zoom=Math.max(2,Math.min(s.zoom,20))),s.position.x+=d.deltaX*.1,s.updateProjectionMatrix()},i=r.domElement;return i.addEventListener("wheel",n,{passive:!1}),()=>{i.removeEventListener("wheel",n)}},[t,r]),null},pe=c.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs(Me,{orthographic:!0,children:[e.jsx(Vt,{}),e.jsx(De,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(Zt,{}),e.jsx(Ot,{})]})})));pe.displayName="Scene";const Yt=(t,r)=>{let s=0,n=t.length-1;for(;s<=n;){const i=Math.floor((s+n)/2),d=t[i],{start:w,end:l}=d.properties;if(r>=w&&r<=l)return d;r<w?n=i-1:s=i+1}return null},qt=({mediaUrl:t})=>{const r=c.useRef(null),[s,n]=c.useState("ready"),[i,d]=c.useState(!1),{setActiveEdge:w}=_e(S=>S),{dataInitial:l}=D(S=>S),{isPlaying:o,playingTime:a,setIsPlaying:x,setPlayingTime:f,setDuration:p,playingNode:u,volume:h,setHasError:j,resetPlayer:g,isSeeking:P,setIsSeeking:v,setPlayerRef:_,playerRef:y}=L(S=>S);c.useEffect(()=>()=>g(),[g]),c.useEffect(()=>{u&&!i&&(f(0),p(0),d(!1))},[u,f,p,d,i]),c.useEffect(()=>{P&&y&&(y.seekTo(a,"seconds"),v(!1))},[a,P,v,y]);const E=()=>{x(!o)},M=c.useCallback(()=>{x(!0)},[x]),F=c.useCallback(()=>{x(!1)},[x]),B=()=>{j(!0),n("error")},R=c.useMemo(()=>((l==null?void 0:l.links.filter(I=>{var A;return(A=I==null?void 0:I.properties)==null?void 0:A.start}))||[]).slice().sort((I,A)=>{var Y,q;return((Y=I==null?void 0:I.properties)==null?void 0:Y.start)-((q=A==null?void 0:A.properties)==null?void 0:q.start)}),[l]),k=S=>{if(!P){const T=S.playedSeconds,I=Yt(R,T);w(I||null)}},z=()=>{y&&n("ready")},G=()=>{E()},W=c.useCallback(S=>{!y&&S&&_(S)},[_,y]);return t?e.jsxs(Ut,{ref:r,tabIndex:0,children:[e.jsx(Jt,{isFullScreen:!1,children:e.jsx(se,{size:120,src:(u==null?void 0:u.image_url)||"",type:"clip"})}),e.jsx(Xt,{isFullScreen:!1,onClick:G,children:e.jsx(Te,{ref:W,height:"219px",onBuffer:()=>n("buffering"),onBufferEnd:()=>n("ready"),onError:B,onPause:F,onPlay:M,onProgress:k,onReady:z,playing:o,url:t||"",volume:h,width:"100%"})}),s==="error"?e.jsx(Qt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Ut=m(C)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Jt=m(C)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Qt=m(C)`
  height: 60px;
  padding: 12px 16px;
  color: ${b.primaryRed};
`,Xt=m.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Kt=c.memo(qt),de=c.forwardRef(({active:t,start:r,text:s},n)=>e.jsxs(er,{ref:n,className:me({active:t}),children:[e.jsx(tr,{children:r}),e.jsx(rr,{children:e.jsx("span",{children:s})})]}));de.displayName="ParagraphComponent";const ee=c.memo(de,(t,r)=>t.active===r.active),er=m(C)`
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
`,sr=({transcriptString:t})=>{const[r,s]=c.useState(0),[n,i]=c.useState(!1),{playerRef:d}=L(f=>f),w=t.replace(/^["']|["']$/g,""),l=JSON.parse(w),o=c.useRef(null),a=c.useRef(null),x=c.useRef(null);return c.useEffect(()=>{const f=setInterval(()=>{if(d&&s){const p=d.getCurrentTime();s(p)}},100);return()=>clearInterval(f)},[d,s]),c.useEffect(()=>{const f=()=>{i(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{i(!1)},1e3)},p=a.current;return p&&p.addEventListener("scroll",f),()=>{p&&p.removeEventListener("scroll",f)}},[]),c.useEffect(()=>{!n&&o.current&&o.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,n]),e.jsx(or,{ref:a,children:l[0].start>r?e.jsx(ee,{active:!1,start:J(l[0].start),text:l[0].text}):e.jsx(e.Fragment,{children:l.map(f=>{const p=J(f.start),u=f.start<r&&r<f.end;return f.start<=r+5?e.jsx(ee,{ref:u?o:null,active:u,start:p,text:f.text},`${f.start}-${f.end}`):null})})})},or=m.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,nr=({name:t})=>{const{selectedEpisodeId:r}=N(l=>l),{playerRef:s}=L(l=>l),[n,i]=c.useState(0),[d,w]=c.useState([]);return c.useEffect(()=>{r&&(async()=>{try{const o=await re(r,0,50,{nodeType:["Clip"],useSubGraph:!1});o!=null&&o.nodes&&w(o.nodes)}catch(o){console.error(o)}})()},[r]),c.useEffect(()=>{const l=setInterval(()=>{if(s&&i){const o=s.getCurrentTime();i(o)}},100);return()=>clearInterval(l)},[s,i]),e.jsxs(ir,{children:[e.jsx(C,{className:"heading",children:t}),d.map(l=>{var f,p,u;const o=(f=l==null?void 0:l.properties)==null?void 0:f.timestamp,[a,x]=o?o.split("-").map(Number):[0,0];return a<=n*1e3&&n*1e3<x?e.jsx(ar,{direction:"row",children:((p=l.properties)==null?void 0:p.transcript)&&e.jsx(sr,{transcriptString:(u=l.properties)==null?void 0:u.transcript})},l.ref_id):null})]})},ir=m(C)`
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
  max-height: 50%;
`,ar=m(C)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,cr=()=>{const{selectedEpisodeLink:t,selectedEpisode:r}=N(s=>s);return e.jsxs(lr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(pr,{children:t&&e.jsx(Kt,{mediaUrl:t})}),e.jsx(nr,{name:(r==null?void 0:r.name)||""})]})},lr=m(C)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 20px 20px",background:"transparent",width:"100%",[t.breakpoints.up("sm")]:{width:Ie,gap:"10px"}})),pr=m(C)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),Ir=()=>{const{addNewNode:t,isFetching:r,runningProjectId:s}=D(v=>v),[n,i]=c.useState(null),[d,w]=c.useState(!1),{selectedEpisodeId:l,setSelectedEpisode:o}=N(v=>v),a=Ee(),x=c.useRef(null),f=c.useRef(null),p=c.useRef(null),u=c.useRef(null),h=c.useRef(null),{setPlayingNode:j}=L(v=>v),g=c.useCallback(v=>{r||(u.current||(u.current={nodes:[],edges:[]}),v.edges&&u.current.edges.push(...v.edges),v.nodes&&u.current.nodes.push(...v.nodes),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{if(u.current){const{nodes:_,edges:y}=u.current,E={nodes:_,edges:y};u.current={nodes:[],edges:[]},t(E)}},3e3))},[t,r]);c.useEffect(()=>{l&&(async()=>{try{const _=await re(l,0,50);i(_);const[y,E]=((_==null?void 0:_.nodes)||[]).reduce(([R,k],z)=>(["Episode","Show","Host","Guest"].includes(z.node_type)?R.push(z):k.push(z),[R,k]),[[],[]]),M=new Set(y.map(R=>R.ref_id)),[F,B]=((_==null?void 0:_.edges)||[]).reduce(([R,k],z)=>(M.has(z.source)&&M.has(z.target)?R.push(z):k.push(z),[R,k]),[[],[]]);p.current={nodes:E||[],edges:B||[]},t({nodes:y,edges:F})}catch(_){console.error(_)}})()},[l,t]),c.useEffect(()=>{l&&(async()=>{try{const _=await ge(l);_&&(j(_),o(_))}catch(_){console.error(_)}})()},[l,j,o]),c.useEffect(()=>(a&&(a.connect(),a.on("connect_error",v=>{console.error("Socket connection error:",v)}),s&&a.on("new_node_created",g)),()=>{a&&a.off()}),[a,g,s]),c.useEffect(()=>{const v=_=>{const{playerRef:y}=L.getState();if(f.current!==null){if(_-f.current>2e3){if(p.current&&y){const{nodes:M,edges:F}=p.current,B=y==null?void 0:y.getCurrentTime(),[R,k]=F.reduce(([W,S],T)=>{var I,A;return((I=T==null?void 0:T.properties)==null?void 0:I.start)!==void 0&&((A=T==null?void 0:T.properties)==null?void 0:A.start)<B?W.push(T):S.push(T),[W,S]},[[],[]]),[z,G]=M.reduce(([W,S],T)=>(R.some(I=>I.target===T.ref_id||I.source===T.ref_id)?W.push(T):S.push(T),[W,S]),[[],[]]);p.current={nodes:G,edges:k},(z.length||R.length)&&t({nodes:z,edges:R})}f.current=_}}else f.current=_;x.current=requestAnimationFrame(v)};return x.current=requestAnimationFrame(v),()=>{x.current&&cancelAnimationFrame(x.current)}},[p,t]),c.useEffect(()=>{if(s)try{a==null||a.emit("update_project_id",{id:s})}catch(v){console.error(v)}},[s,a]);const P=c.useMemo(()=>{if(n){const v=n.edges.filter(y=>{var E;return(E=y==null?void 0:y.properties)==null?void 0:E.start}).map(y=>{var E;return{source:y.source,target:y.target,start:(E=y.properties)==null?void 0:E.start}});return n.nodes.filter(y=>n.edges.some(E=>E.source===y.ref_id||E.target===y.ref_id)).map(y=>{const E=v.find(M=>y.ref_id===M.source||y.ref_id===M.target);return{...y,start:(E==null?void 0:E.start)||0}}).filter(y=>y&&y.node_type!=="Clip"&&y.node_type!=="Episode"&&y.node_type!=="Show")}return[]},[n]);return e.jsx(C,{direction:"row",style:{height:"100%"},children:l?e.jsxs(e.Fragment,{children:[e.jsxs(C,{children:[e.jsx(C,{onClick:()=>w(!d),children:e.jsx(Ze,{})}),e.jsx(cr,{})]}),e.jsxs(dr,{children:[e.jsx(C,{basis:"100%",grow:1,shrink:1,children:d?e.jsx(pe,{}):e.jsx(we,{})}),e.jsx($t,{markers:P})]})]}):e.jsx(xt,{})})},dr=m(C)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`;export{Ir as MindSet};
