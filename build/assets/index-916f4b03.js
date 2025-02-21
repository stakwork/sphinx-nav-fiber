import{s as o,g as c,F as l,r as d,j as t,o as C,w as F,x as G,A as Y,c as O,i as q,q as H,H as L,t as U,y as X}from"./index-401280d9.js";import{Universe as V}from"./index-27119db9.js";import{I as Q,d as b,a as K,b as J}from"./index-4b768973.js";import{S as Z,M as ee}from"./index-6c9ec53b.js";import"./index-6bdd24fa.js";import"./VisibilityOn-d8a81973.js";import"./SourcesTableIcon-e94e077e.js";import"./VolumeIcon-70e59c13.js";import"./NodeCircleIcon-c61b6d09.js";import"./CheckIcon-c006a81e.js";import"./DeleteNodeIcon-edb40353.js";import"./EditNodeIcon-5a0306ea.js";import"./SearchIcon-d4246d31.js";import"./SoundIcon-881ba7b8.js";import"./SucessFeedBackIcon-48f96d57.js";import"./three.module-4d3d7244.js";import"./TextareaAutosize-e9a3d034.js";import"./index-57154734.js";import"./index-ee59aa57.js";import"./index-44427afa.js";import"./ClipLoader-b11c0843.js";import"./Skeleton-48b57248.js";import"./Stack-35fe0025.js";import"./index-5357279c.js";import"./FormControlLabel-c2fa70a0.js";import"./Typography-53076fa6.js";import"./createSvgIcon-59b6d22a.js";import"./isPlainObject-118f6b78.js";const I=3e4,D=({onPlaybackRestart:e})=>{const s=b(m=>m.tweetIsPlaying),n=b(m=>m.setTweetIsPlaying),r=()=>{},a=()=>{},i=d.useCallback(()=>{e&&e(),n(!s)},[s,n,e]);return t.jsxs(te,{children:[t.jsx(se,{onClick:r,children:t.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),t.jsx(re,{"data-testid":"play-pause-button",onClick:i,size:"small",children:s?t.jsx(K,{"data-testid":"pause-icon"}):t.jsx(J,{"data-testid":"play-icon"})}),t.jsx(ie,{onClick:a,children:t.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};D.displayName="Controls";const te=o(l).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,re=o(Q)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,se=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,ie=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`;o.div`
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
`;o.button`
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
`;const B=d.memo(({type:e,left:s,img:n})=>{var T,h;const r=C(f=>f.normalizedSchemasByType),a=(T=r[e])==null?void 0:T.primary_color,i=(h=r[e])==null?void 0:h.icon,m=i?`/svg-icons/${i}.svg`:"",g={iconStart:n||m,color:a??c.THING};return t.jsx(oe,{style:{left:`${s}%`},children:t.jsx(z,{...g,label:e})})});B.displayName="Marker";const z=d.memo(({iconStart:e,color:s,label:n})=>t.jsx(ne,{color:s,children:e&&t.jsx("img",{alt:n,className:"badge__img",onError:console.log,src:e})}));z.displayName="Badge";const ne=o(l).attrs({direction:"row"})`
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
`,oe=o.div`
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
`,E=d.memo(({markers:e})=>{if(e.length===0)return null;const s=e.map(i=>i.start?new Date(i.start).getTime():0),n=Math.min(...s),a=Math.max(...s)-n;return t.jsx(t.Fragment,{children:e.map((i,m)=>{var x;const T=((i.start?new Date(i.start).getTime():0)-n)/a*100,h=(i==null?void 0:i.node_type)||"",f=((x=i==null?void 0:i.properties)==null?void 0:x.image_url)||"";return t.jsx(B,{img:f,left:T,type:h},`${i.ref_id}_${m}`)})})});E.displayName="Markers";const ae=({duration:e,markers:s,handleProgressChange:n,playingTime:r,tweetPlayingTime:a})=>{const i=F(a).format("MMM D - h:mma"),m=Math.min(Math.max(r,0),100);return t.jsxs(le,{children:[t.jsx(de,{$progress:m,children:i}),t.jsx(me,{max:e,onChange:n,value:m,width:12}),t.jsx(pe,{children:t.jsx(E,{markers:s})})]})},ce=o(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,le=o(l)`
  position: relative;
  flex: 1 1 100%;
  padding: 0;
  box-sizing: border-box;
  margin-right: 12px;

  &:hover {
    ${ce} {
      display: block;
    }
  }
`,pe=o(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,de=o.div`
  position: absolute;
  top: -40px;
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
  margin-bottom: 4px;

  left: ${e=>`${e.$progress}%`};

  transition: transform 0.1s ease-out;

  transform: ${e=>{const s=e.$progress||0;return s>=95?`translateX(calc(-50% - ${Math.min((s-95)*5,50)}%))`:"translateX(-50%)"}};
`,me=o(Z)`
  && {
    z-index: 20;
    color: ${c.white};
    height: 3px;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    position: relative;

    .MuiSlider-rail {
      opacity: 1;
      width: 100%;
    }

    .MuiSlider-track {
      border: none;
      width: 100%;
    }

    .MuiSlider-thumb {
      width: 12px;
      height: 54px;
      border-radius: 8px;
      background-color: ${c.primaryBlue};
      opacity: 0.2;
      margin: 0;
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;

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
`,ue=({markers:e})=>{const s=b(u=>u.tweetPlayingTime),n=b(u=>u.setTweetPlayingTime),r=b(u=>u.setTweetIsPlaying),a=b(u=>u.setTweetDuration),i=b(u=>u.tweetDuration),m=b(u=>u.tweetIsPlaying),[g,T]=d.useState(0),[h,f]=d.useState(0),x=d.useRef(0);d.useEffect(()=>{const u=e.map($=>$.start?new Date($.start).getTime():0),y=Math.min(...u),k=Math.max(...u),j=k-y;T(y),f(k),a(j)},[e,a]);const p=d.useRef(null),v=d.useRef(null),_=d.useCallback((u,y)=>{const k=Array.isArray(y)?y[0]:y,j=g+k/100*i;n(j)},[n,g,i]);d.useEffect(()=>{if(m){s>=h&&(n(g),x.current=g),v.current=Date.now();const u=(s-g)/i,y=Date.now()-u*I;v.current=y;const k=()=>{const j=Date.now()-(v.current??Date.now());if(j<I){const $=j/I,P=g+$*i;n(P),x.current=P,p.current=requestAnimationFrame(k)}else n(h),r(!1),x.current=h,p.current&&cancelAnimationFrame(p.current)};return p.current=requestAnimationFrame(k),()=>{p.current&&cancelAnimationFrame(p.current)}}return x.current=s,()=>{p.current&&(cancelAnimationFrame(p.current),p.current=null)}},[m,g,h,n,i,r,s]);const A=d.useCallback(()=>{s>=h&&(n(g),x.current=g)},[s,h,g,n]);return t.jsxs(xe,{children:[t.jsx(D,{onPlaybackRestart:A}),t.jsx(ae,{duration:100,handleProgressChange:_,markers:e,playingTime:(s-g)/i*100,tweetPlayingTime:s})]})},xe=o(l).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${c.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,ge={impression_count:{label:"Impressions",formatter:e=>e.toLocaleString()},like_count:{label:"Likes",formatter:e=>e},reply_count:{label:"Replies",formatter:e=>e},retweet_count:{label:"Retweets",formatter:e=>e},quote_count:{label:"Quotes",formatter:e=>e},bookmark_count:{label:"Bookmarks",formatter:e=>e}},he=({node:e})=>t.jsxs(fe,{children:[t.jsx(we,{children:"Analytics"}),t.jsx(be,{children:Object.entries(ge).map(([s,{label:n,formatter:r}])=>{var a;return((a=e==null?void 0:e.properties)==null?void 0:a[s])!==void 0?t.jsxs(ye,{children:[t.jsx("span",{children:n}),t.jsx(je,{children:r(e.properties[s]??0)})]},s):null})})]}),fe=o.div`
  background: ${c.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`,we=o.h2`
  color: ${c.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 0;
`,be=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,ye=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${c.GRAY3};
  font-size: 14px;
`,je=o.span`
  color: ${c.GRAY6};
`,Te=({node:e})=>{const s=e?G(e):null,{text:n,name:r,verified:a,image_url:i,twitter_handle:m}=s||{};return t.jsx(ve,{children:t.jsxs(l,{direction:"column",p:24,children:[t.jsxs(l,{align:"center",direction:"row",pr:16,children:[t.jsx(ke,{children:t.jsx(Y,{rounded:!0,size:58,src:i||"",type:"person"})}),t.jsxs(l,{children:[t.jsxs($e,{align:"center",direction:"row",children:[r,a&&t.jsx("div",{className:"verification",children:t.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),m&&t.jsxs(_e,{children:["@",m]})]})]}),t.jsx(l,{grow:1,shrink:1,children:t.jsx(Pe,{"data-testid":"episode-description",children:n})})]})})},ve=o(l)`
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
`,ke=o(l)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,$e=o(l)`
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
`,_e=o(l)`
  color: ${c.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Pe=o(l)`
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
`,Se=()=>{const e=b(s=>s.selectedTweet);return e?t.jsxs(Me,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsx(Re,{children:e&&t.jsx(Te,{node:e})}),t.jsx(he,{node:e})]}):null},Me=o(l)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:ee,gap:"10px"}})),Re=o(l)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),Ae=e=>{const s=e.edges.filter(r=>{var a;return((a=r==null?void 0:r.properties)==null?void 0:a.start)&&typeof r.properties.start=="string"}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return e.nodes.filter(r=>e.edges.some(a=>a.source===r.ref_id||a.target===r.ref_id)).map(r=>{const a=s.find(i=>r.ref_id===i.source||r.ref_id===i.target);return{...r,start:(a==null?void 0:a.start)||0}}).filter(r=>r&&typeof r.start=="string"&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},pt=()=>{const e=O(f=>f.addNewNode),s=d.useRef(null),n=d.useRef(null),r=d.useRef(null),[a,i]=d.useState([]),{setSchemas:m}=C(f=>f),g=b(f=>f.setSelectedTweet),T=q(),{tweetId:h}=H();return d.useEffect(()=>{(async()=>{try{const x=await U();m(x.schemas.filter(p=>!p.is_deleted))}catch(x){console.error("Error fetching schema:",x)}})()},[m]),d.useEffect(()=>{h&&(async x=>{try{const p=await X(x),v=p.nodes.find(A=>A.ref_id===h);v&&(g(v),e({nodes:[v],edges:[]}));const _=Ae({nodes:p.nodes,edges:p.edges});i(_),r.current={nodes:p.nodes,edges:p.edges}}catch(p){T("/"),console.error(p)}})(h)},[e,T,h,g]),d.useEffect(()=>{const f=x=>{const{tweetPlayingTime:p,tweetDuration:v}=b.getState(),_=v/I*3e3;if(n.current!==null){if(x-n.current>1e3){if(r.current){const{nodes:u,edges:y}=r.current,k=p,[j,$]=y.reduce(([S,M],w)=>{var N;const R=typeof((N=w==null?void 0:w.properties)==null?void 0:N.start)=="string"?new Date(w.properties.start||0).getTime():0;return R!==0&&R<=k+_?S.push(w):M.push(w),[S,M]},[[],[]]),[P,W]=u.reduce(([S,M],w)=>(j.some(R=>R.target===w.ref_id||R.source===w.ref_id)?S.push(w):M.push(w),[S,M]),[[],[]]);r.current={nodes:W,edges:$},(P.length||j.length)&&e({nodes:P,edges:j})}n.current=x}}else n.current=x;s.current=requestAnimationFrame(f)};return s.current=requestAnimationFrame(f),()=>{s.current&&cancelAnimationFrame(s.current)}},[r,e]),t.jsxs(Ie,{children:[t.jsx(Ne,{direction:"row",children:t.jsxs(t.Fragment,{children:[t.jsxs(l,{children:[t.jsx(L,{}),t.jsx(Se,{})]}),t.jsx(Ce,{children:t.jsx(l,{basis:"100%",grow:1,shrink:1,children:t.jsx(V,{})})})]})}),t.jsx(De,{children:t.jsx(ue,{markers:a})})]})},Ie=o.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Ne=o(l)`
  flex: 1;
  overflow: hidden;
`,Ce=o(l)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,De=o(l)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{pt as TweetMindset};
