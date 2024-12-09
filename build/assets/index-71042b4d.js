import{r as c,y as ue,c as fe,j as e,s as g,a as b,F as v,T as V,u as D,d as te,z as he,N as q,A as xe,D as me,E as re,G as ge}from"./index-01e06a66.js";import{Universe as we}from"./index-57debfcc.js";import{b as se,c as A,d as ye,e as be,f as je,g as Ce,h as ve,i as _e,a as Ee}from"./index-c4b4031a.js";import{S as Se,R as Te,s as J,M as Re}from"./index-cc7a15bf.js";import{u as M,a as oe,m as Ie,T as ze,f as $e,H as Pe,C as ke}from"./index-44f92583.js";import{W as Me,L as Q,H as Ae,D as He,F as We,V as P,S as Le}from"./three.module-9c942ca6.js";import"./TextareaAutosize-03966cab.js";import"./index-1c349595.js";import"./ClipLoader-d4db971f.js";import"./Skeleton-b4729f80.js";import"./Stack-3ab02f2b.js";import"./isPlainObject-7a018531.js";import"./Typography-9da7c006.js";import"./createSvgIcon-ab034385.js";import"./index-c8e29e6c.js";function Fe(t,r,s){const{gl:n,size:i,viewport:d}=M(),w=typeof t=="number"?t:i.width*d.dpr,l=typeof r=="number"?r:i.height*d.dpr,o=(typeof t=="number"?s:t)||{},{samples:a=0,depth:m,...f}=o,p=c.useMemo(()=>{let u;return u=new Me(w,l,{minFilter:Q,magFilter:Q,encoding:n.outputEncoding,type:Ae,...f}),m&&(u.depthTexture=new He(w,l,We)),u.samples=a,u},[]);return c.useLayoutEffect(()=>{p.setSize(w,l),a&&(p.samples=a)},[a,p,w,l]),c.useEffect(()=>()=>p.dispose(),[]),p}const Be=t=>typeof t=="function",De=c.forwardRef(({envMap:t,resolution:r=256,frames:s=1/0,children:n,makeDefault:i,...d},w)=>{const l=M(({set:x})=>x),o=M(({camera:x})=>x),a=M(({size:x})=>x),m=c.useRef(null),f=c.useRef(null),p=Fe(r);c.useLayoutEffect(()=>{d.manual||m.current.updateProjectionMatrix()},[a,d]),c.useLayoutEffect(()=>{m.current.updateProjectionMatrix()}),c.useLayoutEffect(()=>{if(i){const x=o;return l(()=>({camera:m.current})),()=>l(()=>({camera:x}))}},[m,i,l]);let u=0,h=null;const y=Be(n);return oe(x=>{y&&(s===1/0||u<s)&&(f.current.visible=!1,x.gl.setRenderTarget(p),h=x.scene.background,t&&(x.scene.background=t),x.gl.render(x.scene,m.current),x.scene.background=h,x.gl.setRenderTarget(null),f.current.visible=!0,u++)}),c.createElement(c.Fragment,null,c.createElement("orthographicCamera",ue({left:a.width/-2,right:a.width/2,top:a.height/2,bottom:a.height/-2,ref:Ie([m,w])},d),!y&&n),c.createElement("group",{ref:f},y&&n(p.texture)))}),Ge={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},G=fe(t=>({...Ge,setSelectedEpisodeId:r=>t({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>t({selectedEpisodeLink:r}),setSelectedEpisode:r=>t({selectedEpisode:r})})),Ne=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Ze=()=>e.jsxs(Ve,{children:[e.jsx(Oe,{children:e.jsx(Ye,{children:e.jsx(Ne,{})})}),e.jsx(Ue,{children:"Graph Mindset"})]}),Ve=g(v).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Oe=g(v)`
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
    color: ${b.white};
  }
`,Ue=g(V)`
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
`,qe=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Je=({imageUrl:t,title:r,subtitle:s,onClick:n})=>{const i=r.length>35?`${r.substring(0,32)}...`:r,d=s.length>50?`${s.substring(0,47)}...`:s;return e.jsxs(Qe,{onClick:n,children:[e.jsx(Xe,{children:e.jsx(se,{height:140,src:t,type:"Episode",width:170})}),e.jsxs(Ke,{children:[e.jsx(et,{children:i}),e.jsx(tt,{children:d})]})]})},Qe=g(v)`
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
`,Xe=g.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ke=g(v)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,et=g.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${b.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,tt=g.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${b.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,rt=/^(https?:\/\/)/,st=/(www\.)?/,ot=/[\w-]+(\.[\w-]+)*/,nt=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,it=/(\/[^\s?]*)?/,at=/(\?[^\s]*)?/,ct=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,lt=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,pt=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,dt=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ut=new RegExp(`${rt.source}${st.source}${ot.source}${nt.source}?${it.source}${at.source}$`,"i"),ft=t=>{try{if(!(t==null?void 0:t.match(ut)))return!1;const n=new URL(t).hostname;return n!=null&&n.startsWith("www.")?((n==null?void 0:n.match(/\./g))||[]).length>=2:((n==null?void 0:n.match(/\./g))||[]).length>=1}catch{return!1}},X=t=>ft(t)?[ct,lt,pt,dt].some(s=>s.test(t)):!1,ne=[{date_added_to_graph:1733218679827695e-6,node_type:"Episode",properties:{date:1731888e3,episode_title:"AI Agents and AI Assistants: A Contrast in Function",image_url:"https://i.ytimg.com/vi/IivxYYkJ2DI/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/62110bc0-6b27-4779-9d5e-320eab6fae84/IivxYYkJ2DI.mp3",source_link:"https://www.youtube.com/watch?v=IivxYYkJ2DI",status:"completed"},ref_id:"b8784fb9-efa8-4a25-8a78-e14be96a4387"},{date_added_to_graph:1733323898765796e-6,node_type:"Episode",properties:{date:1733184e3,episode_title:"Joe Rogan Experience #2237 - Mike Benz",image_url:"https://i.ytimg.com/vi_webp/rrJhQpvlkLA/sddefault.webp",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/b4c6220e-7048-431c-80c4-90e56b71bd06/rrJhQpvlkLA.mp3",source_link:"https://www.youtube.com/watch?v=rrJhQpvlkLA",status:"completed"},ref_id:"2e51fdb8-a1f1-4e1f-b9d5-4dbdae00b1a2"},{date_added_to_graph:17326354109931817e-7,node_type:"Episode",properties:{date:1730851200,description:"Exploring the Transformative Potential of Llama, the Open-Source AI Model",episode_title:"Llama: The Open-Source AI Model that's Changing How We Think About AI",image_url:"https://i.ytimg.com/vi/8c2LnKNoSmg/sddefault.jpg",media_url:"https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/a4542523-6b12-4baa-bce7-ed63f2704955/8c2LnKNoSmg.mp3",source_link:"https://www.youtube.com/watch?v=8c2LnKNoSmg",status:"completed"},ref_id:"87f5e4c5-39c2-4773-8208-8c1c4fe4019b"}];console.log(ne);const ht=async t=>{const r="add_node",s={};s.media_url=t.source,s.content_type="audio_video";const n=await xe.post(`/${r}`,JSON.stringify(s));if(n.error){const{message:i}=n.error;throw new Error(i)}return n},xt=()=>{const[t,r]=c.useState(""),[s,n]=c.useState(!1),[i,d]=c.useState(""),{setRunningProjectId:w}=D(p=>p),{setSelectedEpisodeId:l,setSelectedEpisodeLink:o}=G(p=>p),{setSchemas:a}=te(p=>p);c.useEffect(()=>{(async()=>{try{const u=await he();a(u.schemas.filter(h=>!h.is_deleted))}catch(u){console.error("Error fetching schema:",u)}})()},[a]);const m=p=>{const{value:u}=p.target;r(u),n(u!==""&&!X(u))},f=async p=>{const u=p||t;if(X(u))try{const h=await ht({source:u});h.data.project_id&&w(h.data.project_id),h.data.ref_id&&(l(h.data.ref_id),o(u))}catch(h){let y=q;if((h==null?void 0:h.status)===400){const x=await h.json();y=x.errorCode||(x==null?void 0:x.status)||q,x.data.ref_id&&(l(x.data.ref_id),o(u))}else h instanceof Error&&(y=h.message);d(String(y))}};return e.jsxs(mt,{children:[e.jsx(gt,{children:"Ideas have shapes"}),e.jsxs(yt,{children:[e.jsx(wt,{error:s,onChange:m,onKeyDown:p=>p.key==="Enter"&&f(),placeholder:"Paste podcast or video link",value:t}),e.jsx(bt,{error:s,onClick:s?void 0:()=>f(),children:e.jsx(qe,{})})]}),i&&e.jsx("div",{children:i}),e.jsx(jt,{children:ne.map(p=>{var u,h;return e.jsx(Je,{imageUrl:((u=p==null?void 0:p.properties)==null?void 0:u.image_url)||"",onClick:()=>{var y;return f((y=p==null?void 0:p.properties)==null?void 0:y.source_link)},subtitle:"",title:((h=p==null?void 0:p.properties)==null?void 0:h.episode_title)||""},p==null?void 0:p.ref_id)})})]})},mt=g(v)`
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
`,gt=g(v)`
  color: ${b.white};
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
  color: ${b.white};
  font-size: 20px;
  cursor: ${t=>t.error?"not-allowed":"pointer"};
  svg {
    width: 8px;
    height: 17px;
    color: ${b.GRAY6};
  }
`,jt=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,ie=c.memo(()=>{const{isPlaying:t,playerRef:r}=A(d=>d),s=()=>{if(r){const d=r.getCurrentTime()-15;r.seekTo(d,"seconds")}},n=()=>{if(r){const d=r.getCurrentTime()+15;r.seekTo(d,"seconds")}},i=()=>{if(r){if(t){r.getInternalPlayer().pauseVideo();return}r.getInternalPlayer().playVideo()}};return e.jsxs(Ct,{children:[e.jsx(_t,{onClick:s,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(vt,{"data-testid":"play-pause-button",onClick:i,size:"small",children:t?e.jsx(ye,{"data-testid":"pause-icon"}):e.jsx(be,{"data-testid":"play-icon"})}),e.jsx(Et,{onClick:n,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]})});ie.displayName="Controls";const Ct=g(v).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,ae=c.memo(({type:t,left:r,img:s})=>{var o,a;const[n]=te(m=>[m.normalizedSchemasByType]),i=(o=n[t])==null?void 0:o.primary_color,d=(a=n[t])==null?void 0:a.icon,w=d?`svg-icons/${d}.svg`:"",l={iconStart:s||w,color:i??b.THING};return e.jsx(Tt,{style:{left:`${r}%`},children:e.jsx(ce,{...l,label:t})})});ae.displayName="Marker";const ce=c.memo(({iconStart:t,color:r,label:s})=>e.jsx(St,{color:r,children:t&&e.jsx("img",{alt:s,className:"badge__img",src:t})}));ce.displayName="Badge";const St=g(v).attrs({direction:"row"})`
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
`,Tt=g.div`
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
`,le=c.memo(({markers:t,duration:r})=>e.jsx(e.Fragment,{children:t.map(s=>{var w;const n=((s==null?void 0:s.start)||0)/r*100,i=(s==null?void 0:s.node_type)||"",d=((w=s==null?void 0:s.properties)==null?void 0:w.image_url)||"";return e.jsx(ae,{img:d,left:n,type:i},s.ref_id)})}));le.displayName="Markers";const Rt=({duration:t,markers:r,handleProgressChange:s,playingTIme:n})=>{const i=10/t*100;return e.jsxs(It,{children:[e.jsx(zt,{max:t,onChange:s,value:n,width:i}),e.jsx(le,{duration:t,markers:r})]})},It=g(v)`
  position: relative;
  flex: 1 1 100%;
`,zt=g(Se)`
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
`,$t=({markers:t})=>{const{playingNode:r,playerRef:s}=A(o=>o),[n,i]=c.useState(0),d=r,w=c.useCallback((o,a)=>{const m=Array.isArray(a)?a[0]:a;s&&s.seekTo(m,"seconds")},[s]);c.useEffect(()=>{const o=setInterval(()=>{if(s&&i){const a=s.getCurrentTime();i(a)}},500);return()=>clearInterval(o)},[s,i]);const l=(s==null?void 0:s.getDuration())||0;return d?e.jsxs(Pt,{children:[e.jsx(ie,{}),e.jsx(Rt,{duration:l,handleProgressChange:w,markers:t,playingTIme:n})]}):null},Pt=g(v).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${b.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,kt=({sourcePosition:t,targetPosition:r,color:s="white",arrowSize:n=1,label:i="label"})=>{const{points:d,textPosition:w}=c.useMemo(()=>{const l=new P(t.x,t.y,t.z),o=new P(r.x,r.y,r.z),a=new P().subVectors(o,l).normalize(),m=new P().addVectors(l,o).multiplyScalar(.5),f=new P().copy(a).multiplyScalar(-n).applyAxisAngle(new P(0,0,1),Math.PI/6),p=new P().copy(a).multiplyScalar(-n).applyAxisAngle(new P(0,0,1),-Math.PI/6);return{points:[l,o,o.clone(),o.clone().add(f),o.clone(),o.clone().add(p)],textPosition:m}},[t,r,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(d.flatMap(l=>[l.x,l.y,l.z])),attach:"attributes-position",count:d.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:s})]}),i&&e.jsx(ze,{anchorX:"center",anchorY:"middle",color:s,...$e,position:w,children:i})]})},Mt=({title:t,description:r})=>e.jsx(At,{children:e.jsx(Ht,{children:e.jsxs(Wt,{children:[e.jsx(Lt,{children:t}),r&&e.jsx(Ft,{children:r})]})})}),At=g.div`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Ht=g(v)`
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
`,Wt=g(v)`
  margin-top: 0;
  flex-direction: column;
  gap: 4px;
`,Lt=g(V)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${b.white};
  margin: 0;
`,Ft=g(V)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${b.white};
  margin: 0;
  opacity: 0.8;
`,Bt=(t,r,s)=>{const n=new Le;return n.moveTo(-t/2+s,-r/2),n.lineTo(t/2-s,-r/2),n.quadraticCurveTo(t/2,-r/2,t/2,-r/2+s),n.lineTo(t/2,r/2-s),n.quadraticCurveTo(t/2,r/2,t/2-s,r/2),n.lineTo(-t/2+s,r/2),n.quadraticCurveTo(-t/2,r/2,-t/2,r/2-s),n.lineTo(-t/2,-r/2+s),n.quadraticCurveTo(-t/2,-r/2,-t/2+s,-r/2),n},Dt=({width:t,height:r,radius:s,color:n})=>{const i=Bt(t,r,s);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[i]}),e.jsx("meshBasicMaterial",{color:n,opacity:.9,transparent:!0})]})},Gt=({name:t,url:r,type:s})=>e.jsxs(Nt,{children:[r&&e.jsx("img",{alt:"",className:"image",src:r}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(Ce,{type:s})}),e.jsx("div",{className:"action-btn",children:e.jsx(ve,{})})]}),Nt=g(v)`
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
`,Z=c.memo(({width:t,height:r,position:s,url:n,onButtonClick:i,name:d,type:w,color:l,description:o})=>{const{camera:a}=M(),[m,f]=c.useState(!1);return e.jsxs("group",{position:s,children:[e.jsx(Dt,{color:l,height:r,radius:1.5,width:t}),!1,e.jsx(Pe,{position:[-t/2,r/2,0],children:e.jsxs(v,{onClick:()=>i(),onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*a.zoom}px`,height:`${r*a.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:[e.jsx(Gt,{name:`${d}`,type:w||"",url:n}),m&&e.jsx(Mt,{description:o,title:d})]})})]})});Z.displayName="Node";const K=144/10,N=84/10,Zt=()=>{const t=M(),{dataInitial:r}=D(i=>i),{viewport:s}=t,n=c.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const i=r.links.filter(o=>{var a;return(a=o==null?void 0:o.properties)==null?void 0:a.start}).map(o=>{var a;return{source:o.source,target:o.target,start:(a=o.properties)==null?void 0:a.start}}),d=r.nodes.filter(o=>r.links.some(a=>a.source===o.ref_id||a.target===o.ref_id)).map(o=>{const a=i.find(u=>o.ref_id===u.source||o.ref_id===u.target),m=((a==null?void 0:a.start)||0)*(s.width/10);return{...o,x:m,y:0,z:0,start:(a==null?void 0:a.start)||0}}).filter(o=>o.node_type!=="Clip"&&o.node_type!=="Episode"&&o.node_type!=="Show"),w=d.reduce((o,a)=>{const m=r.links.filter(h=>{var y;return!((y=h==null?void 0:h.properties)!=null&&y.start)&&[h.target,h.source].includes(a.ref_id)}),p=r.nodes.filter(h=>h.node_type!=="Episode"&&h.node_type!=="Clip"&&h.ref_id!==a.ref_id&&m.some(y=>[y.source,y.target].includes(h.ref_id))).map((h,y)=>{const{x}=a,I=(Math.floor(y/2)+1)*N*2*(y%2===0?1:-1);return{...h,x,y:I,z:0}}),u=m.map(h=>{if(h.source===a.ref_id){const x=p.find(I=>I.ref_id===h.target);return{...h,sourcePositions:{x:a.x,y:a.y,z:a.z},targetPositions:{x:x==null?void 0:x.x,y:x==null?void 0:x.y,z:x==null?void 0:x.z}}}const y=p.find(x=>x.ref_id===h.source);return{...h,sourcePositions:{x:y==null?void 0:y.x,y:y==null?void 0:y.y,z:y==null?void 0:y.z},targetPositions:{x:a.x,y:a.y,z:a.z}}});return o[a.ref_id]={nodes:p,edges:u},o},{}),l=Object.values(w).flatMap(o=>o.edges).filter(o=>{var a;return(a=o==null?void 0:o.sourcePositions)==null?void 0:a.x});return{nodes:d,edges:l,relatedNodes:Object.fromEntries(Object.entries(w).map(([o,a])=>[o,a.nodes]))}},[r,s.width]);return e.jsxs(e.Fragment,{children:[n.nodes.map(i=>{var d,w,l;return e.jsxs(c.Fragment,{children:[e.jsx(Z,{color:"#353A46",description:(d=i==null?void 0:i.properties)==null?void 0:d.description,height:N,name:((w=i==null?void 0:i.properties)==null?void 0:w.name)||"",onButtonClick:console.log,position:[i.x,i.y,i.z],type:i.node_type,url:((l=i==null?void 0:i.properties)==null?void 0:l.image_url)||"logo.png",width:K}),(n.relatedNodes[i.ref_id]||[]).map(o=>{var a,m,f;return e.jsx(Z,{color:"#353A46",description:(a=o==null?void 0:o.properties)==null?void 0:a.description,height:N,name:((m=o==null?void 0:o.properties)==null?void 0:m.name)||"",onButtonClick:console.log,position:[o.x,o.y,o.z],type:o.node_type,url:((f=o==null?void 0:o.properties)==null?void 0:f.image_url)||"logo.png",width:K},`${o.ref_id}-${i.ref_id}`)})]},i.ref_id)}),n.edges.map((i,d)=>i!=null&&i.sourcePositions&&(i!=null&&i.targetPositions)?e.jsx(kt,{label:i.edge_type||"",sourcePosition:new P(i.sourcePositions.x,i.sourcePositions.y,i.sourcePositions.z),targetPosition:new P(i.targetPositions.x,i.targetPositions.y,i.targetPositions.z)},`edge-${d}`):null)]})},Vt=()=>{const{camera:t,viewport:r}=M(),s=A(n=>n.playerRef);return oe(()=>{if(s){const n=s.getCurrentTime();t.position.x=n*r.width/10}}),null},Ot=()=>{const{camera:t,gl:r}=M();return c.useEffect(()=>{const s=t,n=d=>{d.preventDefault(),d.ctrlKey&&(s.zoom+=d.deltaY*-.1,s.zoom=Math.max(2,Math.min(s.zoom,20))),s.position.x+=d.deltaX*.1,s.updateProjectionMatrix()},i=r.domElement;return i.addEventListener("wheel",n,{passive:!1}),()=>{i.removeEventListener("wheel",n)}},[t,r]),null},pe=c.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs(ke,{orthographic:!0,children:[e.jsx(Vt,{}),e.jsx(De,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(Zt,{}),e.jsx(Ot,{})]})})));pe.displayName="Scene";const Yt=(t,r)=>{let s=0,n=t.length-1;for(;s<=n;){const i=Math.floor((s+n)/2),d=t[i],{start:w,end:l}=d.properties;if(r>=w&&r<=l)return d;r<w?n=i-1:s=i+1}return null},Ut=({mediaUrl:t})=>{const r=c.useRef(null),[s,n]=c.useState("ready"),[i,d]=c.useState(!1),{setActiveEdge:w}=_e(T=>T),{dataInitial:l}=D(T=>T),{isPlaying:o,playingTime:a,setIsPlaying:m,setPlayingTime:f,setDuration:p,playingNode:u,volume:h,setHasError:y,resetPlayer:x,isSeeking:I,setIsSeeking:L,setPlayerRef:_,playerRef:C}=A(T=>T);c.useEffect(()=>()=>x(),[x]),c.useEffect(()=>{u&&!i&&(f(0),p(0),d(!1))},[u,f,p,d,i]),c.useEffect(()=>{I&&C&&(C.seekTo(a,"seconds"),L(!1))},[a,I,L,C]);const j=()=>{m(!o)},S=c.useCallback(()=>{m(!0)},[m]),k=c.useCallback(()=>{m(!1)},[m]),F=()=>{y(!0),n("error")},B=c.useMemo(()=>((l==null?void 0:l.links.filter($=>{var W;return(W=$==null?void 0:$.properties)==null?void 0:W.start}))||[]).slice().sort(($,W)=>{var Y,U;return((Y=$==null?void 0:$.properties)==null?void 0:Y.start)-((U=W==null?void 0:W.properties)==null?void 0:U.start)}),[l]),R=T=>{if(!I){const O=T.playedSeconds,$=Yt(B,O);w($||null)}},z=()=>{C&&n("ready")},E=()=>{j()},H=c.useCallback(T=>{!C&&T&&_(T)},[_,C]);return t?e.jsxs(qt,{ref:r,tabIndex:0,children:[e.jsx(Jt,{isFullScreen:!1,children:e.jsx(se,{size:120,src:(u==null?void 0:u.image_url)||"",type:"clip"})}),e.jsx(Xt,{isFullScreen:!1,onClick:E,children:e.jsx(Te,{ref:H,height:"219px",onBuffer:()=>n("buffering"),onBufferEnd:()=>n("ready"),onError:F,onPause:k,onPlay:S,onProgress:R,onReady:z,playing:o,url:t||"",volume:h,width:"100%"})}),s==="error"?e.jsx(Qt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},qt=g(v)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Jt=g(v)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Qt=g(v)`
  height: 60px;
  padding: 12px 16px;
  color: ${b.primaryRed};
`,Xt=g.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Kt=c.memo(Ut),de=c.forwardRef(({active:t,start:r,text:s},n)=>e.jsxs(er,{ref:n,className:me({active:t}),children:[e.jsx(tr,{children:r}),e.jsx(rr,{children:e.jsx("span",{children:s})})]}));de.displayName="ParagraphComponent";const ee=c.memo(de,(t,r)=>t.active===r.active),er=g(v)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${b.AI_HIGHLIGHT};
  }
`,tr=g.span`
  background: ${b.lightBlue100};
  color: ${b.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,rr=g.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${b.AI_HIGHLIGHT};
  }
`,sr=({transcriptString:t})=>{const[r,s]=c.useState(0),[n,i]=c.useState(!1),{playerRef:d}=A(f=>f),w=t.replace(/^["']|["']$/g,""),l=JSON.parse(w),o=c.useRef(null),a=c.useRef(null),m=c.useRef(null);return c.useEffect(()=>{const f=setInterval(()=>{if(d&&s){const p=d.getCurrentTime();s(p)}},100);return()=>clearInterval(f)},[d,s]),c.useEffect(()=>{const f=()=>{i(!0),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{i(!1)},1e3)},p=a.current;return p&&p.addEventListener("scroll",f),()=>{p&&p.removeEventListener("scroll",f)}},[]),c.useEffect(()=>{!n&&o.current&&o.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,n]),e.jsx(or,{ref:a,children:l[0].start>r?e.jsx(ee,{active:!1,start:J(l[0].start),text:l[0].text}):e.jsx(e.Fragment,{children:l.map(f=>{const p=J(f.start),u=f.start<r&&r<f.end;return f.start<=r+5?e.jsx(ee,{ref:u?o:null,active:u,start:p,text:f.text},`${f.start}-${f.end}`):null})})})},or=g.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,nr=({name:t})=>{const{selectedEpisodeId:r}=G(l=>l),{playerRef:s}=A(l=>l),[n,i]=c.useState(0),[d,w]=c.useState([]);return c.useEffect(()=>{r&&(async()=>{try{const o=await re(r,0,50,{nodeType:["Clip"],useSubGraph:!1});o!=null&&o.nodes&&w(o.nodes)}catch(o){console.error(o)}})()},[r]),c.useEffect(()=>{const l=setInterval(()=>{if(s&&i){const o=s.getCurrentTime();i(o)}},100);return()=>clearInterval(l)},[s,i]),e.jsxs(ir,{children:[e.jsx(v,{className:"heading",children:t}),d.map(l=>{var f,p,u;const o=(f=l==null?void 0:l.properties)==null?void 0:f.timestamp,[a,m]=o?o.split("-").map(Number):[0,0];return a<=n*1e3&&n*1e3<m?e.jsx(ar,{direction:"row",children:((p=l.properties)==null?void 0:p.transcript)&&e.jsx(sr,{transcriptString:(u=l.properties)==null?void 0:u.transcript})},l.ref_id):null})]})},ir=g(v)`
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
`,ar=g(v)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,cr=()=>{const{selectedEpisodeLink:t,selectedEpisode:r}=G(s=>s);return e.jsxs(lr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(pr,{children:t&&e.jsx(Kt,{mediaUrl:t})}),e.jsx(nr,{name:(r==null?void 0:r.name)||""})]})},lr=g(v)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 20px 20px",background:"transparent",width:"100%",[t.breakpoints.up("sm")]:{width:Re,gap:"10px"}})),pr=g(v)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),Tr=()=>{const{addNewNode:t,isFetching:r,runningProjectId:s}=D(_=>_),[n,i]=c.useState(null),[d,w]=c.useState(!1),{selectedEpisodeId:l,setSelectedEpisode:o}=G(_=>_),a=Ee(),m=c.useRef(null),f=c.useRef(null),p=c.useRef(null),u=c.useRef(null),h=c.useRef(null),{setPlayingNode:y}=A(_=>_),x=c.useCallback(_=>{r||(u.current||(u.current={nodes:[],edges:[]}),_.edges&&u.current.edges.push(..._.edges),_.nodes&&u.current.nodes.push(..._.nodes),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{if(u.current){const{nodes:C,edges:j}=u.current,S={nodes:C,edges:j};u.current={nodes:[],edges:[]},t(S)}},3e3))},[t,r]),I=c.useCallback(_=>{console.log(_,"uuuuuupdate")},[]);c.useEffect(()=>{l&&(async()=>{try{const C=await re(l,0,50);i(C);const[j,S]=((C==null?void 0:C.nodes)||[]).reduce(([R,z],E)=>(["Episode","Show","Host","Guest"].includes(E.node_type)?R.push(E):z.push(E),[R,z]),[[],[]]),k=new Set(j.map(R=>R.ref_id)),[F,B]=((C==null?void 0:C.edges)||[]).reduce(([R,z],E)=>(k.has(E.source)&&k.has(E.target)?R.push(E):z.push(E),[R,z]),[[],[]]);p.current={nodes:S||[],edges:B||[]},x({nodes:j,edges:F})}catch(C){console.error(C)}})()},[l,x]),c.useEffect(()=>{l&&(async()=>{try{const C=await ge(l);C&&(y(C),o(C))}catch(C){console.error(C)}})()},[l,y,o]),c.useEffect(()=>(a&&(a.connect(),a.on("connect_error",_=>{console.error("Socket connection error:",_)}),s&&(a.on("new_node_created",x),a.on("node_updated",I))),()=>{a&&a.off()}),[a,I,x,s]),c.useEffect(()=>{const _=C=>{const{playerRef:j}=A.getState();if(f.current!==null){if(C-f.current>2e3){if(p.current&&j){const{nodes:k,edges:F}=p.current,B=j==null?void 0:j.getCurrentTime(),R=F.filter(E=>{var H,T;return((H=E==null?void 0:E.properties)==null?void 0:H.start)!==void 0&&((T=E==null?void 0:E.properties)==null?void 0:T.start)<B}),z=k.filter(E=>R.some(H=>H.target===E.ref_id||H.source===E.ref_id));(z.length||R.length)&&t({nodes:z,edges:R})}f.current=C}}else f.current=C;m.current=requestAnimationFrame(_)};return m.current=requestAnimationFrame(_),()=>{m.current&&cancelAnimationFrame(m.current)}},[p,t]),c.useEffect(()=>{if(s)try{a==null||a.emit("update_project_id",{id:s})}catch(_){console.error(_)}},[s,a]);const L=c.useMemo(()=>{if(n){const _=n.edges.filter(j=>{var S;return(S=j==null?void 0:j.properties)==null?void 0:S.start}).map(j=>{var S;return{source:j.source,target:j.target,start:(S=j.properties)==null?void 0:S.start}});return n.nodes.filter(j=>n.edges.some(S=>S.source===j.ref_id||S.target===j.ref_id)).map(j=>{const S=_.find(k=>j.ref_id===k.source||j.ref_id===k.target);return{...j,start:(S==null?void 0:S.start)||0}}).filter(j=>j&&j.node_type!=="Clip"&&j.node_type!=="Episode"&&j.node_type!=="Show")}return[]},[n]);return e.jsx(v,{direction:"row",style:{height:"100%"},children:l?e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(v,{onClick:()=>w(!d),children:e.jsx(Ze,{})}),e.jsx(cr,{})]}),e.jsxs(dr,{children:[e.jsx(v,{basis:"100%",grow:1,shrink:1,children:d?e.jsx(pe,{}):e.jsx(we,{})}),e.jsx($t,{markers:L})]})]}):e.jsx(xt,{})})},dr=g(v)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`;export{Tr as MindSet};
