import{r as m,j as t,s as i,g as c,F as l,o as N,w as O,x as Y,A as L,c as q,i as H,q as U,H as V,t as K,y as Q}from"./index-070ff888.js";import{Universe as X}from"./index-8ccc461c.js";import{d as y,a as J,b as Z,I as ee}from"./index-5e14f5e6.js";import{S as te,M as re}from"./index-c99dd4d6.js";import"./index-746388de.js";import"./VisibilityOn-4c3dbe8b.js";import"./SourcesTableIcon-e011f4f2.js";import"./VolumeIcon-420abd3b.js";import"./NodeCircleIcon-5bf5631b.js";import"./CheckIcon-f5b82a99.js";import"./DeleteNodeIcon-e8d012fe.js";import"./EditNodeIcon-ec5c2379.js";import"./SearchIcon-e8f982ac.js";import"./SoundIcon-50c48fe4.js";import"./SucessFeedBackIcon-21289487.js";import"./three.module-1c1ec8b9.js";import"./TextareaAutosize-016d5360.js";import"./index-18551a1b.js";import"./index-4ec86774.js";import"./index-997cc97b.js";import"./ClipLoader-1de7a01b.js";import"./Skeleton-3b36f248.js";import"./Stack-29ab2ab3.js";import"./index-4ee1c76e.js";import"./FormControlLabel-15dcdd9b.js";import"./Typography-0bd7b703.js";import"./createSvgIcon-1e728591.js";import"./isPlainObject-d89397d3.js";const B=m.memo(()=>{const e=y(s=>s.tweetIsPlaying),n=y(s=>s.setTweetIsPlaying),a=()=>{},r=()=>{},o=()=>{n(!e)};return t.jsxs(se,{children:[t.jsx(ne,{onClick:a,children:t.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),t.jsx(ie,{"data-testid":"play-pause-button",onClick:o,size:"small",children:e?t.jsx(J,{"data-testid":"pause-icon"}):t.jsx(Z,{"data-testid":"play-icon"})}),t.jsx(oe,{onClick:r,children:t.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})});B.displayName="Controls";const se=i(l).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${c.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${c.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,ie=i(ee)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,ne=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,oe=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`;i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${c.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${c.DROPDOWN_BG};
  }
`;i.button`
  margin-top: 4px;
  background: ${c.BG1};
  color: ${c.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;const D=m.memo(({type:e,left:n,img:a})=>{var j,h;const r=N(x=>x.normalizedSchemasByType),o=(j=r[e])==null?void 0:j.primary_color,s=(h=r[e])==null?void 0:h.icon,u=s?`/svg-icons/${s}.svg`:"",w={iconStart:a||u,color:o??c.THING};return t.jsx(ce,{style:{left:`${n}%`},children:t.jsx(C,{...w,label:e})})});D.displayName="Marker";const C=m.memo(({iconStart:e,color:n,label:a})=>t.jsx(ae,{color:n,children:e&&t.jsx("img",{alt:a,className:"badge__img",onError:console.log,src:e})}));C.displayName="Badge";const ae=i(l).attrs({direction:"row"})`
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
`,ce=i.div`
  position: absolute;
  color: white;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${c.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,E=m.memo(({markers:e})=>{if(e.length===0)return null;const n=e.map(s=>s.start?new Date(s.start).getTime():0),a=Math.min(...n),o=Math.max(...n)-a;return t.jsx(t.Fragment,{children:e.map((s,u)=>{var d;const j=((s.start?new Date(s.start).getTime():0)-a)/o*100,h=(s==null?void 0:s.node_type)||"",x=((d=s==null?void 0:s.properties)==null?void 0:d.image_url)||"";return t.jsx(D,{img:x,left:j,type:h},`${s.ref_id}_${u}`)})})});E.displayName="Markers";const le=({duration:e,markers:n,handleProgressChange:a,playingTime:r,tweetPlayingTime:o})=>{const u=O(o).format("MMM D - h:mma");return t.jsxs(de,{children:[t.jsx(xe,{style:{left:`${r}%`},children:u}),t.jsx(ue,{max:e,onChange:a,value:r,width:1}),t.jsx(me,{children:t.jsx(E,{markers:n})})]})},pe=i(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,de=i(l)`
  position: relative;
  flex: 1 1 100%;

  &:hover {
    ${pe} {
      display: block;
    }
  }
`,me=i(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,xe=i.div`
  position: absolute;
  top: -35px;
  transform: translateX(-50%);
  background: rgba(230, 230, 230, 255);
  color: ${c.black};
  padding: 6px 12px;
  border-radius: 6px;
  font-family: 'Barlow';
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  z-index: 30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  letter-spacing: 0.2px;
`,ue=i(te)`
  && {
    z-index: 20;
    color: ${c.white};
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
      background-color: ${c.primaryBlue};
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
`,M=3e4,ge=({markers:e})=>{const n=y(p=>p.tweetPlayingTime),a=y(p=>p.setTweetPlayingTime),r=y(p=>p.setTweetIsPlaying),o=y(p=>p.setTweetDuration),s=y(p=>p.tweetDuration),u=y(p=>p.tweetIsPlaying),[w,j]=m.useState(0),[h,x]=m.useState(0);m.useEffect(()=>{const p=e.map(A=>A.start?new Date(A.start).getTime():0),f=Math.min(...p),T=Math.max(...p),k=T-f;j(f),x(T),o(k)},[e,o]);const d=m.useRef(null),g=m.useRef(null),v=m.useCallback((p,f)=>{const T=Array.isArray(f)?f[0]:f,k=w+T/100*s;a(k)},[a,w,s]);return m.useEffect(()=>{if(u){g.current=Date.now();const p=()=>{const f=Date.now()-(g.current??Date.now());if(f<M){const T=f/M,k=w+T*s;a(k),d.current=requestAnimationFrame(p)}else a(h),r(!1),cancelAnimationFrame(d.current)};return d.current=requestAnimationFrame(p),()=>cancelAnimationFrame(d.current)}return d.current&&(cancelAnimationFrame(d.current),d.current=null),()=>null},[u,w,h,a,s,r]),t.jsxs(he,{children:[t.jsx(B,{}),t.jsx(le,{duration:100,handleProgressChange:v,markers:e,playingTime:(n-w)/s*100,tweetPlayingTime:n})]})},he=i(l).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${c.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,fe={impression_count:{label:"Impressions",formatter:e=>e.toLocaleString()},like_count:{label:"Likes",formatter:e=>e},reply_count:{label:"Replies",formatter:e=>e},retweet_count:{label:"Retweets",formatter:e=>e},quote_count:{label:"Quotes",formatter:e=>e},bookmark_count:{label:"Bookmarks",formatter:e=>e}},we=({node:e})=>t.jsxs(be,{children:[t.jsx(ye,{children:"Analytics"}),t.jsx(je,{children:Object.entries(fe).map(([n,{label:a,formatter:r}])=>{var o;return((o=e==null?void 0:e.properties)==null?void 0:o[n])!==void 0?t.jsxs(Te,{children:[t.jsx("span",{children:a}),t.jsx(ve,{children:r(e.properties[n]??0)})]},n):null})})]}),be=i.div`
  background: ${c.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`,ye=i.h2`
  color: ${c.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 0;
`,je=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,Te=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${c.GRAY3};
  font-size: 14px;
`,ve=i.span`
  color: ${c.GRAY6};
`,ke=({node:e})=>{const n=e?Y(e):null,{text:a,name:r,verified:o,image_url:s,twitter_handle:u}=n||{};return t.jsx(_e,{children:t.jsxs(l,{direction:"column",p:24,children:[t.jsxs(l,{align:"center",direction:"row",pr:16,children:[t.jsx($e,{children:t.jsx(L,{rounded:!0,size:58,src:s||"",type:"person"})}),t.jsxs(l,{children:[t.jsxs(Ae,{align:"center",direction:"row",children:[r,o&&t.jsx("div",{className:"verification",children:t.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),u&&t.jsxs(Pe,{children:["@",u]})]})]}),t.jsx(l,{grow:1,shrink:1,children:t.jsx(Se,{"data-testid":"episode-description",children:a})})]})})},_e=i(l)`
  background: ${c.BG1};
  color: ${c.white};
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: ${c.SEEDQUESTION_HOVER};
  }
  &:active {
    background: ${c.SEEDQUESTION};
  }
`,$e=i(l)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Ae=i(l)`
  color: ${c.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`,Pe=i(l)`
  color: ${c.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Se=i(l)`
  color: ${c.white};
  font-family: Barlow;
  font-size: 17px;
  font-weight: 400;
  font-style: normal;
  line-height: 130%;
  letter-spacing: -0.39px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`,Re=()=>{const e=y(n=>n.selectedTweet);return e?t.jsxs(Ie,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsx(Me,{children:e&&t.jsx(ke,{node:e})}),t.jsx(we,{node:e})]}):null},Ie=i(l)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:re,gap:"10px"}})),Me=i(l)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),Ne=e=>{const n=e.edges.filter(r=>{var o;return((o=r==null?void 0:r.properties)==null?void 0:o.start)&&typeof r.properties.start=="string"}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return e.nodes.filter(r=>e.edges.some(o=>o.source===r.ref_id||o.target===r.ref_id)).map(r=>{const o=n.find(s=>r.ref_id===s.source||r.ref_id===s.target);return{...r,start:(o==null?void 0:o.start)||0}}).filter(r=>r&&typeof r.start=="string"&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},mt=()=>{const e=q(x=>x.addNewNode),n=m.useRef(null),a=m.useRef(null),r=m.useRef(null),[o,s]=m.useState([]),{setSchemas:u}=N(x=>x),w=y(x=>x.setSelectedTweet),j=H(),{tweetId:h}=U();return m.useEffect(()=>{(async()=>{try{const d=await K();u(d.schemas.filter(g=>!g.is_deleted))}catch(d){console.error("Error fetching schema:",d)}})()},[u]),m.useEffect(()=>{h&&(async d=>{try{const g=await Q(d),v=g.nodes.find(f=>f.ref_id===h);v&&(w(v),e({nodes:[v],edges:[]}));const p=Ne({nodes:g.nodes,edges:g.edges});s(p),r.current={nodes:g.nodes,edges:g.edges}}catch(g){j("/"),console.error(g)}})(h)},[e,j,h,w]),m.useEffect(()=>{const x=d=>{const{tweetPlayingTime:g,tweetDuration:v}=y.getState(),T=6e3/3e4*100/100*v;if(a.current!==null){if(d-a.current>1e3){if(r.current){const{nodes:A,edges:z}=r.current,W=g,[P,F]=z.reduce(([_,$],b)=>{var I;return(typeof((I=b==null?void 0:b.properties)==null?void 0:I.start)=="string"?new Date(b.properties.start||0).getTime():0)<=W+T?_.push(b):$.push(b),[_,$]},[[],[]]),[R,G]=A.reduce(([_,$],b)=>(P.some(S=>S.target===b.ref_id||S.source===b.ref_id)?_.push(b):$.push(b),[_,$]),[[],[]]);r.current={nodes:G,edges:F},(R.length||P.length)&&e({nodes:R,edges:P})}a.current=d}}else a.current=d;n.current=requestAnimationFrame(x)};return n.current=requestAnimationFrame(x),()=>{n.current&&cancelAnimationFrame(n.current)}},[r,e]),t.jsxs(Be,{children:[t.jsx(De,{direction:"row",children:t.jsxs(t.Fragment,{children:[t.jsxs(l,{children:[t.jsx(V,{}),t.jsx(Re,{})]}),t.jsx(Ce,{children:t.jsx(l,{basis:"100%",grow:1,shrink:1,children:t.jsx(X,{})})})]})}),t.jsx(Ee,{children:t.jsx(ge,{markers:o})})]})},Be=i.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,De=i(l)`
  flex: 1;
  overflow: hidden;
`,Ce=i(l)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,Ee=i(l)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{mt as TweetMindset};
