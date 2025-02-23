import{s as o,g as c,F as l,r as d,j as t,o as F,w as L,G as C,x as O,A as U,c as q,i as V,q as X,H as Q,t as K,y as J}from"./index-58097f5b.js";import{Universe as Z}from"./index-e0a5005f.js";import{I as ee,d as b,a as te,b as re}from"./index-d04fc0b6.js";import{S as se,M as ne}from"./index-fcf59dad.js";import"./index-78b029a2.js";import"./VisibilityOn-3e6077e4.js";import"./SourcesTableIcon-eae70fca.js";import"./VolumeIcon-495207a3.js";import"./NodeCircleIcon-fa423c30.js";import"./CheckIcon-b42190d7.js";import"./DeleteNodeIcon-17244472.js";import"./EditNodeIcon-6ed4a95a.js";import"./SearchIcon-ca832aff.js";import"./SoundIcon-1b49f390.js";import"./SucessFeedBackIcon-addeb332.js";import"./three.module-4d3d7244.js";import"./TextareaAutosize-d68e6b53.js";import"./index-73293a28.js";import"./index-a0d3df73.js";import"./index-3ae0e9d1.js";import"./ClipLoader-ceb78197.js";import"./Skeleton-ad7f133a.js";import"./Stack-c9ad25ff.js";import"./index-a598af11.js";import"./FormControlLabel-d4d9c88a.js";import"./Typography-b547f60e.js";import"./createSvgIcon-2ef4c677.js";import"./isPlainObject-ffb58207.js";const A=3e4,E=({onPlaybackRestart:e})=>{const s=b(m=>m.tweetIsPlaying),i=b(m=>m.setTweetIsPlaying),r=()=>{},a=()=>{},n=d.useCallback(()=>{e&&e(),i(!s)},[s,i,e]);return t.jsxs(ie,{children:[t.jsx(ae,{onClick:r,children:t.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),t.jsx(oe,{"data-testid":"play-pause-button",onClick:n,size:"small",children:s?t.jsx(te,{"data-testid":"pause-icon"}):t.jsx(re,{"data-testid":"play-icon"})}),t.jsx(ce,{onClick:a,children:t.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};E.displayName="Controls";const ie=o(l).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,oe=o(ee)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,ae=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,ce=o.div`
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
`;const G=d.memo(({type:e,left:s,img:i})=>{var T,h;const r=F(f=>f.normalizedSchemasByType),a=(T=r[e])==null?void 0:T.primary_color,n=(h=r[e])==null?void 0:h.icon,m=n?`/svg-icons/${n}.svg`:"",g={iconStart:i||m,color:a??c.THING};return t.jsx(pe,{style:{left:`${s}%`},children:t.jsx(W,{...g,label:e})})});G.displayName="Marker";const W=d.memo(({iconStart:e,color:s,label:i})=>t.jsx(le,{color:s,children:e&&t.jsx("img",{alt:i,className:"badge__img",onError:console.log,src:e})}));W.displayName="Badge";const le=o(l).attrs({direction:"row"})`
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
`,pe=o.div`
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
`,H=d.memo(({markers:e})=>{if(e.length===0)return null;const s=e.map(n=>n.start?new Date(n.start).getTime():0),i=Math.min(...s),a=Math.max(...s)-i;return t.jsx(t.Fragment,{children:e.map((n,m)=>{var x;const T=((n.start?new Date(n.start).getTime():0)-i)/a*100,h=(n==null?void 0:n.node_type)||"",f=((x=n==null?void 0:n.properties)==null?void 0:x.image_url)||"";return t.jsx(G,{img:f,left:T,type:h},`${n.ref_id}_${m}`)})})});H.displayName="Markers";const de=({duration:e,markers:s,handleProgressChange:i,playingTime:r,tweetPlayingTime:a})=>{const n=L(a).format("MMM D - h:mma"),m=Math.min(Math.max(r,0),100);return t.jsxs(ue,{children:[t.jsx(ge,{$progress:m,children:n}),t.jsx(he,{max:e,onChange:i,value:m,width:12}),t.jsx(xe,{children:t.jsx(H,{markers:s})})]})},me=o(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,ue=o(l)`
  position: relative;
  flex: 1 1 100%;
  padding: 0;
  box-sizing: border-box;
  margin-right: 12px;

  &:hover {
    ${me} {
      display: block;
    }
  }
`,xe=o(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,ge=o.div`
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
`,he=o(se)`
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
`,fe=({markers:e})=>{const s=b(u=>u.tweetPlayingTime),i=b(u=>u.setTweetPlayingTime),r=b(u=>u.setTweetIsPlaying),a=b(u=>u.setTweetDuration),n=b(u=>u.tweetDuration),m=b(u=>u.tweetIsPlaying),[g,T]=d.useState(0),[h,f]=d.useState(0),x=d.useRef(0);d.useEffect(()=>{const u=e.map(_=>_.start?new Date(_.start).getTime():0),y=Math.min(...u),k=Math.max(...u),j=k-y;T(y),f(k),a(j)},[e,a]);const p=d.useRef(null),v=d.useRef(null),M=d.useCallback((u,y)=>{const k=Array.isArray(y)?y[0]:y,j=g+k/100*n;i(j)},[i,g,n]);d.useEffect(()=>{if(m){s>=h&&(i(g),x.current=g),v.current=Date.now();const u=s?(s-g)/n:0,y=Date.now()-u*A;v.current=y;const k=()=>{const j=Date.now()-(v.current??Date.now());if(j<A){const _=j/A,$=g+_*n;i($),x.current=$,p.current=requestAnimationFrame(k)}else i(h),r(!1),x.current=h,p.current&&cancelAnimationFrame(p.current)};return p.current=requestAnimationFrame(k),()=>{p.current&&cancelAnimationFrame(p.current)}}return x.current=s,()=>{p.current&&(cancelAnimationFrame(p.current),p.current=null)}},[m,g,h,i,n,r,s]);const z=d.useCallback(()=>{s>=h&&(i(g),x.current=g)},[s,h,g,i]);return t.jsxs(we,{children:[t.jsx(E,{onPlaybackRestart:z}),t.jsx(de,{duration:100,handleProgressChange:M,markers:e,playingTime:(s-g)/n*100,tweetPlayingTime:s})]})},we=o(l).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${c.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`;function B(e){return C({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32zm-16-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(e)}function be(e){return C({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z"}}]})(e)}function ye(e){return C({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"}}]})(e)}const je={impression_count:{label:"Impressions",formatter:e=>e.toLocaleString()},like_count:{label:"Likes",formatter:e=>e},reply_count:{label:"Replies",formatter:e=>e},retweet_count:{label:"Retweets",formatter:e=>e},quote_count:{label:"Quotes",formatter:e=>e},bookmark_count:{label:"Bookmarks",formatter:e=>e},analytics_location:{label:"Location",formatter:e=>e||"Unknown"},analytics_gender:{label:"Gender",formatter:e=>e||"Unknown"}},Te=e=>e==null?t.jsx(B,{color:c.GRAY3}):e<=4?t.jsx(be,{color:"#ef4444"}):e>=7?t.jsx(ye,{color:"#22c55e"}):t.jsx(B,{color:c.GRAY3}),ve=({node:e})=>{var s;return t.jsxs(ke,{children:[t.jsx(_e,{children:"Analytics"}),t.jsxs(Me,{children:[Object.entries(je).map(([i,{label:r,formatter:a}])=>{var n;return((n=e==null?void 0:e.properties)==null?void 0:n[i])!==void 0?t.jsxs(D,{children:[t.jsx("span",{children:r}),t.jsx(N,{children:a(e.properties[i])})]},i):null}),t.jsxs(D,{children:[t.jsx("span",{children:"Sentiment"}),t.jsx(N,{children:Te((s=e==null?void 0:e.properties)==null?void 0:s.analytics_sentiment_score)})]})]})]})},ke=o.div`
  background: ${c.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`,_e=o.h2`
  color: ${c.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 0;
`,Me=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,D=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${c.GRAY3};
  font-size: 14px;
  padding-right: 4px;
`,N=o.span`
  color: ${c.GRAY6};
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`,$e=({node:e})=>{const s=e?O(e):null,{text:i,name:r,verified:a,image_url:n,twitter_handle:m}=s||{};return t.jsx(Se,{children:t.jsxs(l,{direction:"column",p:24,children:[t.jsxs(l,{align:"center",direction:"row",pr:16,children:[t.jsx(Pe,{children:t.jsx(U,{rounded:!0,size:58,src:n||"",type:"person"})}),t.jsxs(l,{children:[t.jsxs(Re,{align:"center",direction:"row",children:[r,a&&t.jsx("div",{className:"verification",children:t.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),m&&t.jsxs(ze,{children:["@",m]})]})]}),t.jsx(l,{grow:1,shrink:1,children:t.jsx(Ae,{"data-testid":"episode-description",children:i})})]})})},Se=o(l)`
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
`,Pe=o(l)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Re=o(l)`
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
`,ze=o(l)`
  color: ${c.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Ae=o(l)`
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
`,Ce=()=>{const e=b(s=>s.selectedTweet);return e?t.jsxs(Ie,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsx(Be,{children:e&&t.jsx($e,{node:e})}),t.jsx(ve,{node:e})]}):null},Ie=o(l)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:ne,gap:"10px"}})),Be=o(l)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),De=e=>{const s=e.edges.filter(r=>{var a;return((a=r==null?void 0:r.properties)==null?void 0:a.start)&&typeof r.properties.start=="string"}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return e.nodes.filter(r=>e.edges.some(a=>a.source===r.ref_id||a.target===r.ref_id)).map(r=>{const a=s.find(n=>r.ref_id===n.source||r.ref_id===n.target);return{...r,start:(a==null?void 0:a.start)||0}}).filter(r=>r&&typeof r.start=="string"&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},gt=()=>{const e=q(f=>f.addNewNode),s=d.useRef(null),i=d.useRef(null),r=d.useRef(null),[a,n]=d.useState([]),{setSchemas:m}=F(f=>f),g=b(f=>f.setSelectedTweet),T=V(),{tweetId:h}=X();return d.useEffect(()=>{(async()=>{try{const x=await K();m(x.schemas.filter(p=>!p.is_deleted))}catch(x){console.error("Error fetching schema:",x)}})()},[m]),d.useEffect(()=>{h&&(async x=>{try{const p=await J(x),v=p.nodes.find(z=>z.ref_id===h);v&&(g(v),e({nodes:[v],edges:[]}));const M=De({nodes:p.nodes,edges:p.edges});n(M),r.current={nodes:p.nodes,edges:p.edges}}catch(p){T("/"),console.error(p)}})(h)},[e,T,h,g]),d.useEffect(()=>{const f=x=>{const{tweetPlayingTime:p,tweetDuration:v}=b.getState(),M=v/A*3e3;if(i.current!==null){if(x-i.current>1e3){if(r.current){const{nodes:u,edges:y}=r.current,k=p,[j,_]=y.reduce(([S,P],w)=>{var I;const R=typeof((I=w==null?void 0:w.properties)==null?void 0:I.start)=="string"?new Date(w.properties.start||0).getTime():0;return R!==0&&R<=k+M?S.push(w):P.push(w),[S,P]},[[],[]]),[$,Y]=u.reduce(([S,P],w)=>(j.some(R=>R.target===w.ref_id||R.source===w.ref_id)?S.push(w):P.push(w),[S,P]),[[],[]]);r.current={nodes:Y,edges:_},($.length||j.length)&&e({nodes:$,edges:j})}i.current=x}}else i.current=x;s.current=requestAnimationFrame(f)};return s.current=requestAnimationFrame(f),()=>{s.current&&cancelAnimationFrame(s.current)}},[r,e]),t.jsxs(Ne,{children:[t.jsx(Fe,{direction:"row",children:t.jsxs(t.Fragment,{children:[t.jsxs(l,{children:[t.jsx(Q,{}),t.jsx(Ce,{})]}),t.jsx(Ee,{children:t.jsx(l,{basis:"100%",grow:1,shrink:1,children:t.jsx(Z,{})})})]})}),t.jsx(Ge,{children:t.jsx(fe,{markers:a})})]})},Ne=o.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Fe=o(l)`
  flex: 1;
  overflow: hidden;
`,Ee=o(l)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,Ge=o(l)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{gt as TweetMindset};
