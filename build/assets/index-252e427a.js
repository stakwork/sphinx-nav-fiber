import{r as l,y as oe,c as ie,j as e,s as g,a as C,F as _,T as V,u as D,d as K,z as ae,A as ce,N as Y,D as le,E as pe,G as ee,H as de}from"./index-0a6ee7ee.js";import{Universe as ue}from"./index-a1d2110a.js";import{b as A,c as fe,d as he,e as xe,f as ge,g as me,h as we,i as ye,a as je}from"./index-0994fbe2.js";import{S as be,R as Ce,s as ve,M as Se}from"./index-4947b751.js";import{u as H,a as te,m as _e,T as Ee,f as Te,H as Re,C as $e}from"./index-d866da66.js";import{W as ze,L as X,H as Ie,D as Pe,F as Me,V as M,S as ke}from"./three.module-9c942ca6.js";import"./TextareaAutosize-dadc823a.js";import"./index-ef1b856d.js";import"./ClipLoader-bad459b5.js";import"./Skeleton-d83655fb.js";import"./Stack-e4c38477.js";import"./isPlainObject-902046d6.js";import"./Typography-cc3e30a5.js";import"./createSvgIcon-e31fde8c.js";import"./index-b6fc6ecd.js";function He(t,r,i){const{gl:n,size:s,viewport:p}=H(),u=typeof t=="number"?t:s.width*p.dpr,a=typeof r=="number"?r:s.height*p.dpr,c=(typeof t=="number"?i:t)||{},{samples:o=0,depth:w,...m}=c,h=l.useMemo(()=>{let x;return x=new ze(u,a,{minFilter:X,magFilter:X,encoding:n.outputEncoding,type:Ie,...m}),w&&(x.depthTexture=new Pe(u,a,Me)),x.samples=o,x},[]);return l.useLayoutEffect(()=>{h.setSize(u,a),o&&(h.samples=o)},[o,h,u,a]),l.useEffect(()=>()=>h.dispose(),[]),h}const We=t=>typeof t=="function",Ae=l.forwardRef(({envMap:t,resolution:r=256,frames:i=1/0,children:n,makeDefault:s,...p},u)=>{const a=H(({set:f})=>f),c=H(({camera:f})=>f),o=H(({size:f})=>f),w=l.useRef(null),m=l.useRef(null),h=He(r);l.useLayoutEffect(()=>{p.manual||w.current.updateProjectionMatrix()},[o,p]),l.useLayoutEffect(()=>{w.current.updateProjectionMatrix()}),l.useLayoutEffect(()=>{if(s){const f=c;return a(()=>({camera:w.current})),()=>a(()=>({camera:f}))}},[w,s,a]);let x=0,y=null;const d=We(n);return te(f=>{d&&(i===1/0||x<i)&&(m.current.visible=!1,f.gl.setRenderTarget(h),y=f.scene.background,t&&(f.scene.background=t),f.gl.render(f.scene,w.current),f.scene.background=y,f.gl.setRenderTarget(null),m.current.visible=!0,x++)}),l.createElement(l.Fragment,null,l.createElement("orthographicCamera",oe({left:o.width/-2,right:o.width/2,top:o.height/2,bottom:o.height/-2,ref:_e([w,u])},p),!d&&n),l.createElement("group",{ref:m},d&&n(h.texture)))}),Fe={selectedEpisodeId:"",selectedEpisodeLink:"",selectedEpisode:null},N=ie(t=>({...Fe,setSelectedEpisodeId:r=>t({selectedEpisodeId:r}),setSelectedEpisodeLink:r=>t({selectedEpisodeLink:r}),setSelectedEpisode:r=>t({selectedEpisode:r})})),Le=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.2998 2.55199C7.2998 1.51094 8.11675 0.666992 9.1245 0.666992H12.1299C13.1376 0.666992 13.9546 1.51094 13.9546 2.55199C13.9546 3.59305 13.1376 4.43699 12.1299 4.43699H9.1245C8.11675 4.43699 7.2998 3.59305 7.2998 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M7.2998 25.449C7.2998 26.49 8.11675 27.334 9.1245 27.334H12.1299C13.1376 27.334 13.9546 26.49 13.9546 25.449C13.9546 24.4079 13.1376 23.564 12.1299 23.564H9.1245C8.11675 23.564 7.2998 24.4079 7.2998 25.449Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 8.29613C2.79102 7.25508 3.60796 6.41113 4.61571 6.41113H12.1292C13.1369 6.41113 13.9539 7.25508 13.9539 8.29613C13.9539 9.33719 13.1369 10.1811 12.1292 10.1811H4.61571C3.60796 10.1811 2.79102 9.33719 2.79102 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M2.79102 19.7039C2.79102 20.7449 3.60796 21.5889 4.61571 21.5889H12.1292C13.1369 21.5889 13.9539 20.7449 13.9539 19.7039C13.9539 18.6628 13.1369 17.8189 12.1292 17.8189H4.61571C3.60796 17.8189 2.79102 18.6628 2.79102 19.7039Z",fill:"currentColor"}),e.jsx("path",{d:"M0 14.094C0 13.0529 0.816945 12.209 1.8247 12.209H12.1289C13.1366 12.209 13.9536 13.0529 13.9536 14.094C13.9536 15.135 13.1366 15.979 12.1289 15.979H1.8247C0.816946 15.979 0 15.135 0 14.094Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 25.448C22.7002 26.4891 21.8833 27.333 20.8755 27.333H17.8701C16.8624 27.333 16.0454 26.4891 16.0454 25.448C16.0454 24.407 16.8624 23.563 17.8701 23.563H20.8755C21.8832 23.563 22.7002 24.407 22.7002 25.448Z",fill:"currentColor"}),e.jsx("path",{d:"M22.7002 2.55199C22.7002 1.51094 21.8833 0.666992 20.8755 0.666992H17.8701C16.8624 0.666992 16.0454 1.51094 16.0454 2.55199C16.0454 3.59305 16.8624 4.43699 17.8701 4.43699H20.8755C21.8832 4.43699 22.7002 3.59305 22.7002 2.55199Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 19.7029C27.209 20.7439 26.392 21.5879 25.3843 21.5879H17.8708C16.8631 21.5879 16.0461 20.7439 16.0461 19.7029C16.0461 18.6618 16.8631 17.8179 17.8708 17.8179H25.3843C26.392 17.8179 27.209 18.6618 27.209 19.7029Z",fill:"currentColor"}),e.jsx("path",{d:"M27.209 8.29613C27.209 7.25508 26.392 6.41113 25.3843 6.41113H17.8708C16.8631 6.41113 16.0461 7.25508 16.0461 8.29613C16.0461 9.33719 16.8631 10.1811 17.8708 10.1811H25.3843C26.392 10.1811 27.209 9.33719 27.209 8.29613Z",fill:"currentColor"}),e.jsx("path",{d:"M30 14.093C30 13.052 29.1831 12.208 28.1753 12.208H17.8711C16.8634 12.208 16.0464 13.052 16.0464 14.093C16.0464 15.1341 16.8634 15.978 17.8711 15.978H28.1753C29.1831 15.978 30 15.1341 30 14.093Z",fill:"currentColor"})]}),Be=()=>e.jsxs(De,{children:[e.jsx(Ne,{children:e.jsx(Ge,{children:e.jsx(Le,{})})}),e.jsx(Ze,{children:"Graph Mindset"})]}),De=g(_).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`,Ne=g(_)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ge=g.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${C.white};
  }
`,Ze=g(V)`
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
`,Ve=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 7 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.77978 6.00243L0.706705 1.92933C0.568239 1.79088 0.497405 1.61684 0.494205 1.40723C0.490989 1.19763 0.561822 1.02039 0.706705 0.875528C0.851572 0.730645 1.02721 0.658203 1.23361 0.658203C1.44001 0.658203 1.61564 0.730645 1.7605 0.875528L6.25473 5.36975C6.34833 5.46334 6.41436 5.56205 6.45281 5.6659C6.49127 5.76974 6.51051 5.88191 6.51051 6.00243C6.51051 6.12294 6.49127 6.23512 6.45281 6.33895C6.41436 6.4428 6.34833 6.54152 6.25473 6.6351L1.7605 11.1293C1.62205 11.2678 1.44802 11.3386 1.2384 11.3418C1.0288 11.345 0.851572 11.2742 0.706705 11.1293C0.561822 10.9845 0.48938 10.8088 0.48938 10.6024C0.48938 10.396 0.561822 10.2204 0.706705 10.0755L4.77978 6.00243Z",fill:"currentColor"})}),Oe=/^(https?:\/\/)/,Ue=/(www\.)?/,qe=/[\w-]+(\.[\w-]+)*/,Ye=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/,Xe=/(\/[^\s?]*)?/,Qe=/(\?[^\s]*)?/,Je=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,Ke=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,et=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,tt=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,rt=new RegExp(`${Oe.source}${Ue.source}${qe.source}${Ye.source}?${Xe.source}${Qe.source}$`,"i"),st=t=>{try{if(!(t==null?void 0:t.match(rt)))return!1;const n=new URL(t).hostname;return n!=null&&n.startsWith("www.")?((n==null?void 0:n.match(/\./g))||[]).length>=2:((n==null?void 0:n.match(/\./g))||[]).length>=1}catch{return!1}},Q=t=>st(t)?[Je,Ke,et,tt].some(i=>i.test(t)):!1,nt=({imageUrl:t,title:r,subtitle:i,onClick:n})=>{const s=r.length>35?`${r.substring(0,32)}...`:r,p=i.length>50?`${i.substring(0,47)}...`:i;return e.jsxs(ot,{onClick:n,children:[e.jsx(it,{children:e.jsx(at,{alt:r,src:t})}),e.jsxs(ct,{children:[e.jsx(lt,{children:s}),e.jsx(pt,{children:p})]})]})},ot=g(_)`
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
`,it=g.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,at=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ct=g(_)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,lt=g.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${C.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,pt=g.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${C.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dt=async t=>{const r="add_node",i={};i.media_url=t.source,i.content_type="audio_video";const n=await le.post(`/${r}`,JSON.stringify(i));if(n.error){const{message:s}=n.error;throw new Error(s)}return n},ut=()=>{const[t,r]=l.useState(""),[i,n]=l.useState(!1),[s,p]=l.useState(""),[u,a]=l.useState([]),{setRunningProjectId:c}=D(d=>d),{setSelectedEpisodeId:o,setSelectedEpisodeLink:w}=N(d=>d),{setSchemas:m}=K(d=>d),h=d=>d.nodes.filter(f=>{var v;return f.node_type.toLowerCase()==="episode"&&((v=f.properties)==null?void 0:v.date)}).map(f=>f.properties).sort((f,v)=>v.date-f.date).slice(0,3);l.useEffect(()=>{(async()=>{try{const f=await ae(),v=h(f);a(v);const z=await ce();m(z.schemas.filter(j=>!j.is_deleted))}catch(f){console.error("Error fetching schema:",f)}})()},[m]);const x=d=>{const{value:f}=d.target;r(f),n(f!==""&&!Q(f))},y=async d=>{const f=d||t;if(Q(f))try{const v=await dt({source:f});v.data.project_id&&c(v.data.project_id),v.data.ref_id&&(o(v.data.ref_id),w(f))}catch(v){let z=Y;if((v==null?void 0:v.status)===400){const j=await v.json();z=j.errorCode||(j==null?void 0:j.status)||Y,j.data.ref_id&&(o(j.data.ref_id),w(f))}else v instanceof Error&&(z=v.message);p(String(z))}};return e.jsxs(ft,{children:[e.jsx(ht,{children:"Ideas have shapes"}),e.jsxs(gt,{children:[e.jsx(xt,{error:i,onChange:x,onKeyDown:d=>d.key==="Enter"&&y(),placeholder:"Paste podcast or video link",value:t}),e.jsx(mt,{error:i,onClick:i?void 0:()=>y(),children:e.jsx(Ve,{})})]}),s&&e.jsx("div",{children:s}),e.jsx(wt,{children:u.map(d=>e.jsx(nt,{imageUrl:(d==null?void 0:d.image_url)||"",onClick:()=>y(d==null?void 0:d.source_link),subtitle:"Subtitle for episode seed",title:(d==null?void 0:d.episode_title)||""},d==null?void 0:d.episode_title))})]})},ft=g(_)`
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
`,ht=g(_)`
  color: ${C.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`,xt=g.input`
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
`,gt=g.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`,mt=g.div`
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
`,wt=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`,re=l.memo(({type:t,left:r,img:i})=>{var c,o;const[n]=K(w=>[w.normalizedSchemasByType]),s=(c=n[t])==null?void 0:c.primary_color,p=(o=n[t])==null?void 0:o.icon,u=p?`svg-icons/${p}.svg`:"",a={iconStart:i||u,color:s??C.THING};return e.jsx(jt,{style:{left:`${r}%`},children:e.jsx(se,{...a,label:t})})});re.displayName="Marker";const se=l.memo(({iconStart:t,color:r,label:i})=>e.jsx(yt,{color:r,children:t&&e.jsx("img",{alt:i,className:"badge__img",src:t})}));se.displayName="Badge";const yt=g(_).attrs({direction:"row"})`
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
`,jt=g.div`
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
`,bt=({duration:t,markers:r,handleProgressChange:i,playingTIme:n})=>{const s=10/t*100;return e.jsxs(Ct,{children:[e.jsx(vt,{max:t,onChange:i,value:n,width:s}),r.map(p=>{var o;const u=((p==null?void 0:p.start)||0)/t*100,a=(p==null?void 0:p.node_type)||"",c=((o=p==null?void 0:p.properties)==null?void 0:o.image_url)||"";return e.jsx(re,{img:c,left:u,type:a},p.ref_id)})]})},Ct=g(_)`
  position: relative;
  flex: 1 1 100%;
`,vt=g(be)`
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
`,St=({markers:t})=>{const{isPlaying:r,setIsPlaying:i,playingNode:n,playerRef:s}=A(h=>h),[p,u]=l.useState(0),a=n,c=l.useCallback((h,x)=>{const y=Array.isArray(x)?x[0]:x;s&&s.seekTo(y,"seconds")},[s]);l.useEffect(()=>{const h=setInterval(()=>{if(s&&u){const x=s.getCurrentTime();u(x)}},500);return()=>clearInterval(h)},[s,u]);const o=()=>{if(s){const h=s.getCurrentTime()-15;s.seekTo(h,"seconds")}},w=()=>{if(s){const h=s.getCurrentTime()+15;s.seekTo(h,"seconds")}},m=(s==null?void 0:s.getDuration())||0;return a?e.jsxs(_t,{children:[e.jsxs(Et,{children:[e.jsx(Rt,{onClick:o,children:e.jsx("img",{alt:"",src:"RewindIcon.svg"})}),e.jsx(Tt,{"data-testid":"play-pause-button",onClick:h=>{i(!r),h.stopPropagation()},size:"small",children:r?e.jsx(fe,{"data-testid":"pause-icon"}):e.jsx(he,{"data-testid":"play-icon"})}),e.jsx($t,{onClick:w,children:e.jsx("img",{alt:"",src:"ForwardIcon.svg"})})]}),e.jsx(bt,{duration:m,handleProgressChange:c,markers:t,playingTIme:p})]}):null},_t=g(_).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${C.BG2};
  height: 96px;
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`,Et=g(_).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 142px;
  height: 54px;
  background: ${C.BG1};
  border-radius: 40px;
  margin-right: 54px;
  color: ${C.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,Tt=g(xe)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,Rt=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,$t=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`,zt=({sourcePosition:t,targetPosition:r,color:i="white",arrowSize:n=1,label:s="label"})=>{const{points:p,textPosition:u}=l.useMemo(()=>{const a=new M(t.x,t.y,t.z),c=new M(r.x,r.y,r.z),o=new M().subVectors(c,a).normalize(),w=new M().addVectors(a,c).multiplyScalar(.5),m=new M().copy(o).multiplyScalar(-n).applyAxisAngle(new M(0,0,1),Math.PI/6),h=new M().copy(o).multiplyScalar(-n).applyAxisAngle(new M(0,0,1),-Math.PI/6);return{points:[a,c,c.clone(),c.clone().add(m),c.clone(),c.clone().add(h)],textPosition:w}},[t,r,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("line",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{array:new Float32Array(p.flatMap(a=>[a.x,a.y,a.z])),attach:"attributes-position",count:p.length,itemSize:3})}),e.jsx("lineBasicMaterial",{color:i})]}),s&&e.jsx(Ee,{anchorX:"center",anchorY:"middle",color:i,...Te,position:u,children:s})]})},It=(t,r,i)=>{const n=new ke;return n.moveTo(-t/2+i,-r/2),n.lineTo(t/2-i,-r/2),n.quadraticCurveTo(t/2,-r/2,t/2,-r/2+i),n.lineTo(t/2,r/2-i),n.quadraticCurveTo(t/2,r/2,t/2-i,r/2),n.lineTo(-t/2+i,r/2),n.quadraticCurveTo(-t/2,r/2,-t/2,r/2-i),n.lineTo(-t/2,-r/2+i),n.quadraticCurveTo(-t/2,-r/2,-t/2+i,-r/2),n},Pt=({width:t,height:r,radius:i,color:n})=>{const s=It(t,r,i);return e.jsxs("mesh",{children:[e.jsx("shapeGeometry",{args:[s]}),e.jsx("meshBasicMaterial",{color:n,opacity:.9,transparent:!0})]})},Mt=({name:t,url:r,type:i})=>e.jsxs(kt,{children:[r&&e.jsx("img",{alt:"",className:"image",src:r}),e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"badge",children:e.jsx(ge,{type:i})}),e.jsx("div",{className:"action-btn",children:e.jsx(me,{})})]}),kt=g(_)`
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
`,Z=l.memo(({width:t,height:r,position:i,url:n,onButtonClick:s,name:p,type:u,color:a})=>{const{camera:c}=H();return e.jsxs("group",{position:i,children:[e.jsx(Pt,{color:a,height:r,radius:1.5,width:t}),!1,e.jsx(Re,{position:[-t/2,r/2,0],children:e.jsx(_,{onClick:()=>s(),style:{fontSize:"12px",color:"white",fontWeight:600,width:`${t*c.zoom}px`,height:`${r*c.zoom}px`,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",pointerEvents:"auto"},children:e.jsx(Mt,{name:`${p}`,type:u||"",url:n})})})]})});Z.displayName="Node";const J=144/10,G=84/10,Ht=()=>{const t=H(),{dataInitial:r}=D(s=>s),{viewport:i}=t,n=l.useMemo(()=>{if(!r)return{nodes:[],edges:[],relatedNodes:{}};const s=r.links.filter(c=>{var o;return(o=c==null?void 0:c.properties)==null?void 0:o.start}).map(c=>{var o;return{source:c.source,target:c.target,start:(o=c.properties)==null?void 0:o.start}}),p=r.nodes.filter(c=>r.links.some(o=>o.source===c.ref_id||o.target===c.ref_id)).map(c=>{const o=s.find(x=>c.ref_id===x.source||c.ref_id===x.target),w=((o==null?void 0:o.start)||0)*(i.width/10);return{...c,x:w,y:0,z:0,start:(o==null?void 0:o.start)||0}}).filter(c=>c.node_type!=="Clip"&&c.node_type!=="Episode"&&c.node_type!=="Show"),u=p.reduce((c,o)=>{const w=r.links.filter(y=>{var d;return!((d=y==null?void 0:y.properties)!=null&&d.start)&&[y.target,y.source].includes(o.ref_id)}),h=r.nodes.filter(y=>y.node_type!=="Episode"&&y.node_type!=="Clip"&&y.ref_id!==o.ref_id&&w.some(d=>[d.source,d.target].includes(y.ref_id))).map((y,d)=>{const{x:f}=o,v=(Math.floor(d/2)+1)*G*2*(d%2===0?1:-1);return{...y,x:f,y:v,z:0}}),x=w.map(y=>{if(y.source===o.ref_id){const f=h.find(v=>v.ref_id===y.target);return{...y,sourcePositions:{x:o.x,y:o.y,z:o.z},targetPositions:{x:f==null?void 0:f.x,y:f==null?void 0:f.y,z:f==null?void 0:f.z}}}const d=h.find(f=>f.ref_id===y.source);return{...y,sourcePositions:{x:d==null?void 0:d.x,y:d==null?void 0:d.y,z:d==null?void 0:d.z},targetPositions:{x:o.x,y:o.y,z:o.z}}});return c[o.ref_id]={nodes:h,edges:x},c},{}),a=Object.values(u).flatMap(c=>c.edges).filter(c=>{var o;return(o=c==null?void 0:c.sourcePositions)==null?void 0:o.x});return{nodes:p,edges:a,relatedNodes:Object.fromEntries(Object.entries(u).map(([c,o])=>[c,o.nodes]))}},[r,i.width]);return e.jsxs(e.Fragment,{children:[n.nodes.map(s=>{var p,u;return e.jsxs(l.Fragment,{children:[e.jsx(Z,{color:"#353A46",height:G,name:((p=s==null?void 0:s.properties)==null?void 0:p.name)||"",onButtonClick:console.log,position:[s.x,s.y,s.z],type:s.node_type,url:((u=s==null?void 0:s.properties)==null?void 0:u.image_url)||"logo.png",width:J}),(n.relatedNodes[s.ref_id]||[]).map(a=>{var c,o;return e.jsx(Z,{color:"#353A46",height:G,name:((c=a==null?void 0:a.properties)==null?void 0:c.name)||"",onButtonClick:console.log,position:[a.x,a.y,a.z],type:a.node_type,url:((o=a==null?void 0:a.properties)==null?void 0:o.image_url)||"logo.png",width:J},`${a.ref_id}-${s.ref_id}`)})]},s.ref_id)}),n.edges.map((s,p)=>s!=null&&s.sourcePositions&&(s!=null&&s.targetPositions)?e.jsx(zt,{label:s.edge_type||"",sourcePosition:new M(s.sourcePositions.x,s.sourcePositions.y,s.sourcePositions.z),targetPosition:new M(s.targetPositions.x,s.targetPositions.y,s.targetPositions.z)},`edge-${p}`):null)]})},Wt=()=>{const{camera:t,viewport:r}=H(),i=A(n=>n.playerRef);return te(()=>{if(i){const n=i.getCurrentTime();t.position.x=n*r.width/10}}),null},At=()=>{const{camera:t,gl:r}=H();return l.useEffect(()=>{const i=t,n=p=>{p.preventDefault(),p.ctrlKey&&(i.zoom+=p.deltaY*-.1,i.zoom=Math.max(2,Math.min(i.zoom,20))),i.position.x+=p.deltaX*.1,i.updateProjectionMatrix()},s=r.domElement;return s.addEventListener("wheel",n,{passive:!1}),()=>{s.removeEventListener("wheel",n)}},[t,r]),null},ne=l.memo(()=>(console.log("rerender"),e.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:e.jsxs($e,{orthographic:!0,children:[e.jsx(Wt,{}),e.jsx(Ae,{far:2e3,makeDefault:!0,near:1,position:[0,0,20],zoom:10}),e.jsx(Ht,{}),e.jsx(At,{})]})})));ne.displayName="Scene";const Ft=(t,r)=>{let i=0,n=t.length-1;for(;i<=n;){const s=Math.floor((i+n)/2),p=t[s],{start:u,end:a}=p.properties;if(r>=u&&r<=a)return p;r<u?n=s-1:i=s+1}return null},Lt=({mediaUrl:t})=>{const r=l.useRef(null),[i,n]=l.useState("ready"),[s,p]=l.useState(!1),{setActiveEdge:u}=we(R=>R),{dataInitial:a}=D(R=>R),{isPlaying:c,playingTime:o,setIsPlaying:w,setPlayingTime:m,setDuration:h,playingNode:x,volume:y,setHasError:d,resetPlayer:f,isSeeking:v,setIsSeeking:z,setPlayerRef:j,playerRef:S}=A(R=>R);l.useEffect(()=>()=>f(),[f]),l.useEffect(()=>{x&&!s&&(m(0),h(0),p(!1))},[x,m,h,p,s]),l.useEffect(()=>{v&&S&&(S.seekTo(o,"seconds"),z(!1))},[o,v,z,S]);const b=()=>{w(!c)},T=()=>{w(!0)},k=()=>{w(!1)},L=()=>{d(!0),n("error")},B=l.useMemo(()=>((a==null?void 0:a.links.filter(P=>{var F;return(F=P==null?void 0:P.properties)==null?void 0:F.start}))||[]).slice().sort((P,F)=>{var U,q;return((U=P==null?void 0:P.properties)==null?void 0:U.start)-((q=F==null?void 0:F.properties)==null?void 0:q.start)}),[a]),$=R=>{if(!v){const O=R.playedSeconds,P=Ft(B,O);u(P||null)}},I=()=>{S&&n("ready")},E=()=>{b()},W=l.useCallback(R=>{!S&&R&&j(R)},[j,S]);return t?e.jsxs(Bt,{ref:r,tabIndex:0,children:[e.jsx(Dt,{isFullScreen:!1,children:e.jsx(ye,{size:120,src:(x==null?void 0:x.image_url)||"",type:"clip"})}),e.jsx(Gt,{isFullScreen:!1,onClick:E,children:e.jsx(Ce,{ref:W,height:"219px",onBuffer:()=>n("buffering"),onBufferEnd:()=>n("ready"),onError:L,onPause:k,onPlay:T,onProgress:$,onReady:I,playing:c,url:t||"",volume:y,width:"100%"})}),i==="error"?e.jsx(Nt,{className:"error-wrapper",children:"Error happened, please try later"}):null]}):null},Bt=g(_)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`,Dt=g(_)`
  position: absolute;
  top: ${t=>t.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Nt=g(_)`
  height: 60px;
  padding: 12px 16px;
  color: ${C.primaryRed};
`,Gt=g.div`
  margin: ${t=>t.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,Zt=l.memo(Lt),Vt=({transcriptString:t})=>{const[r,i]=l.useState(0),[n,s]=l.useState(!1),{playerRef:p}=A(m=>m),u=t.replace(/^["']|["']$/g,""),a=JSON.parse(u),c=l.useRef(null),o=l.useRef(null),w=l.useRef(null);return l.useEffect(()=>{const m=setInterval(()=>{if(p&&i){const h=p.getCurrentTime();i(h)}},100);return()=>clearInterval(m)},[p,i]),l.useEffect(()=>{const m=()=>{s(!0),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{s(!1)},1e3)},h=o.current;return h&&h.addEventListener("scroll",m),()=>{h&&h.removeEventListener("scroll",m)}},[]),l.useEffect(()=>{!n&&c.current&&c.current.scrollIntoView({behavior:"smooth",block:"center"})},[r,n]),e.jsx(Ut,{ref:o,children:a.map(m=>{const h=ve(m.start),x=m.start<r&&r<m.end;return e.jsxs(Ot,{ref:x?c:null,className:pe({active:x}),children:[e.jsx(qt,{children:h}),e.jsx(Yt,{children:e.jsx("span",{children:m.text})})]},`${m.start}-${m.end}`)})})},Ot=g(_)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${C.AI_HIGHLIGHT};
  }
`,Ut=g.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`,qt=g.span`
  background: ${C.lightBlue100};
  color: ${C.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`,Yt=g.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${C.AI_HIGHLIGHT};
  }
`,Xt=()=>{const{selectedEpisodeId:t}=N(u=>u),{playerRef:r}=A(u=>u),[i,n]=l.useState(0),[s,p]=l.useState([]);return l.useEffect(()=>{t&&(async()=>{try{const a=await ee(t,0,50,{nodeType:["Clip"],useSubGraph:!1});a!=null&&a.nodes&&p(a.nodes)}catch(a){console.error(a)}})()},[t]),l.useEffect(()=>{const u=setInterval(()=>{if(r&&n){const a=r.getCurrentTime();n(a)}},100);return()=>clearInterval(u)},[r,n]),e.jsxs(Qt,{children:[e.jsx(_,{className:"heading",children:"Transcript"}),s.map(u=>{var w,m,h,x,y,d;const a=(w=u==null?void 0:u.properties)==null?void 0:w.timestamp,[c,o]=a?a.split("-").map(Number):[0,0];return c<=i*1e3&&i*1e3<o?e.jsxs(Jt,{direction:"row",children:[!((m=u.properties)!=null&&m.transcript)&&((h=u==null?void 0:u.properties)==null?void 0:h.text)&&e.jsx("span",{children:(x=u==null?void 0:u.properties)==null?void 0:x.text}),((y=u.properties)==null?void 0:y.transcript)&&e.jsx(Vt,{transcriptString:(d=u.properties)==null?void 0:d.transcript})]},u.ref_id):null})]})},Qt=g(_)`
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
  max-height: 50%;
`,Jt=g(_)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`,Kt=()=>{var i,n;const{selectedEpisodeLink:t,selectedEpisode:r}=N(s=>s);return e.jsxs(er,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsxs(sr,{children:[(r==null?void 0:r.name)&&e.jsx(rr,{children:r==null?void 0:r.name}),((i=r==null?void 0:r.properties)==null?void 0:i.text)&&e.jsx(tr,{children:(n=r==null?void 0:r.properties)==null?void 0:n.text}),t&&e.jsx(Zt,{mediaUrl:t})]}),e.jsx(Xt,{})]})},er=g(_)(({theme:t})=>({position:"relative",display:"flex",padding:"20px",background:"transparent",width:"100%",[t.breakpoints.up("sm")]:{width:Se}})),tr=g(V)`
  font-size: 20px;
  font-weight: Bold;
  line-height: 24.2px;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
  font-weight: 500;
`,rr=g(V)`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
`,sr=g(_)(({theme:t})=>({width:"100%",margin:"16px auto",zIndex:29,[t.breakpoints.up("sm")]:{width:"390px"}})),yr=()=>{const{addNewNode:t,isFetching:r,runningProjectId:i}=D(j=>j),[n,s]=l.useState(null),[p,u]=l.useState(!1),{selectedEpisodeId:a,setSelectedEpisode:c}=N(j=>j),o=je(),w=l.useRef(null),m=l.useRef(null),h=l.useRef(null),x=l.useRef(null),y=l.useRef(null),{setPlayingNode:d}=A(j=>j),f=l.useCallback(j=>{r||(x.current||(x.current={nodes:[],edges:[]}),j.edges&&x.current.edges.push(...j.edges),j.nodes&&x.current.nodes.push(...j.nodes),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{if(x.current){const{nodes:S,edges:b}=x.current,T={nodes:S,edges:b};x.current={nodes:[],edges:[]},t(T)}},3e3))},[t,r]),v=l.useCallback(j=>{console.log(j,"uuuuuupdate")},[]);l.useEffect(()=>{a&&(async()=>{try{const S=await ee(a,0,50);s(S);const[b,T]=((S==null?void 0:S.nodes)||[]).reduce(([$,I],E)=>(["Episode","Show"].includes(E.node_type)?$.push(E):I.push(E),[$,I]),[[],[]]),k=new Set(b.map($=>$.ref_id)),[L,B]=((S==null?void 0:S.edges)||[]).reduce(([$,I],E)=>(k.has(E.source)&&k.has(E.target)?$.push(E):I.push(E),[$,I]),[[],[]]);h.current={nodes:T||[],edges:B||[]},f({nodes:b,edges:L})}catch(S){console.error(S)}})()},[a,f]),l.useEffect(()=>{a&&(async()=>{try{const S=await de(a);S&&(d(S),c(S))}catch(S){console.error(S)}})()},[a,d,c]),l.useEffect(()=>(o&&(o.connect(),o.on("connect_error",j=>{console.error("Socket connection error:",j)}),i&&(o.on("new_node_created",f),o.on("node_updated",v))),()=>{o&&o.off()}),[o,v,f,i]),l.useEffect(()=>{const j=S=>{const{playerRef:b}=A.getState();if(m.current!==null){if(S-m.current>2e3){if(h.current&&b){const{nodes:k,edges:L}=h.current,B=b==null?void 0:b.getCurrentTime(),$=L.filter(E=>{var W,R;return((W=E==null?void 0:E.properties)==null?void 0:W.start)!==void 0&&((R=E==null?void 0:E.properties)==null?void 0:R.start)<B}),I=k.filter(E=>$.some(W=>W.target===E.ref_id||W.source===E.ref_id));(I.length||$.length)&&t({nodes:I,edges:$})}m.current=S}}else m.current=S;w.current=requestAnimationFrame(j)};return w.current=requestAnimationFrame(j),()=>{w.current&&cancelAnimationFrame(w.current)}},[h,t]),l.useEffect(()=>{if(i)try{o==null||o.emit("update_project_id",{id:i})}catch(j){console.error(j)}},[i,o]);const z=l.useMemo(()=>{if(n){const j=n.edges.filter(b=>{var T;return(T=b==null?void 0:b.properties)==null?void 0:T.start}).map(b=>{var T;return{source:b.source,target:b.target,start:(T=b.properties)==null?void 0:T.start}});return n.nodes.filter(b=>n.edges.some(T=>T.source===b.ref_id||T.target===b.ref_id)).map(b=>{const T=j.find(k=>b.ref_id===k.source||b.ref_id===k.target);return{...b,start:(T==null?void 0:T.start)||0}}).filter(b=>b&&b.node_type!=="Clip"&&b.node_type!=="Episode"&&b.node_type!=="Show")}return[]},[n]);return e.jsx(_,{direction:"row",style:{height:"100%"},children:a?e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsx(_,{onClick:()=>u(!p),children:e.jsx(Be,{})}),e.jsx(Kt,{})]}),e.jsxs(_,{basis:"100%",grow:1,p:16,shrink:1,children:[e.jsx(_,{basis:"100%",grow:1,shrink:1,children:p?e.jsx(ne,{}):e.jsx(ue,{})}),e.jsx(St,{markers:z})]})]}):e.jsx(ut,{})})};export{yr as MindSet};
