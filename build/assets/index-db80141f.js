import{s as i,g as a,F as l,r as x,j as e,o as G,w as Y,G as z,x as H,A as V,c as q,i as O,q as X,H as K,t as Q,y as J}from"./index-c85e9986.js";import{Universe as Z}from"./index-201985dc.js";import{I as tt,d as b,a as et,b as rt}from"./index-a57c2402.js";import{S as st,M as nt}from"./index-fe3e2dd9.js";import{C as it}from"./CheckIcon-3498fa6f.js";import{L as ot}from"./VolumeIcon-665cfc18.js";import{P as at}from"./index-026a5d3c.js";import"./TextareaAutosize-f399149e.js";import"./three.module-4d3d7244.js";import"./index-237b0cb5.js";import"./index-7b45419f.js";import"./VisibilityOn-b61c175a.js";import"./SearchIcon-9b7575ce.js";import"./index-8b4e9ab0.js";import"./ClipLoader-b3b17164.js";import"./Skeleton-08b45b22.js";import"./Stack-ed544957.js";import"./index-492cd918.js";import"./SoundIcon-b18d159f.js";import"./FormControlLabel-38329c4b.js";import"./Typography-03ab6c88.js";import"./createSvgIcon-991a1070.js";import"./isPlainObject-d39fd9dd.js";import"./SourcesTableIcon-c120bdda.js";import"./NodeCircleIcon-05131130.js";import"./DeleteNodeIcon-c21fee3b.js";import"./EditNodeIcon-f9deaf52.js";import"./SucessFeedBackIcon-eafd7742.js";const R=3e4,W=({onPlaybackRestart:t})=>{const r=b(p=>p.tweetIsPlaying),o=b(p=>p.setTweetIsPlaying),s=()=>{},c=()=>{},n=x.useCallback(()=>{t&&t(),o(!r)},[r,o,t]);return e.jsxs(ct,{children:[e.jsx(pt,{onClick:s,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(lt,{"data-testid":"play-pause-button",onClick:n,size:"small",children:r?e.jsx(et,{"data-testid":"pause-icon"}):e.jsx(rt,{"data-testid":"play-icon"})}),e.jsx(dt,{onClick:c,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};W.displayName="Controls";const ct=i(l).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${a.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${a.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,lt=i(tt)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,pt=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,dt=i.div`
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
  color: ${a.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${a.DROPDOWN_BG};
  }
`;i.button`
  margin-top: 4px;
  background: ${a.BG1};
  color: ${a.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;const N=x.memo(({type:t,left:r,img:o})=>{var T,g;const s=G(f=>f.normalizedSchemasByType),c=(T=s[t])==null?void 0:T.primary_color,n=(g=s[t])==null?void 0:g.icon,p=n?`/svg-icons/${n}.svg`:"",d={iconStart:o||p,color:c??a.THING};return e.jsx(xt,{style:{left:`${r}%`},children:e.jsx(E,{...d,label:t})})});N.displayName="Marker";const E=x.memo(({iconStart:t,color:r,label:o})=>e.jsx(mt,{color:r,children:t&&e.jsx("img",{alt:o,className:"badge__img",onError:console.log,src:t})}));E.displayName="Badge";const mt=i(l).attrs({direction:"row"})`
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
`,xt=i.div`
  position: absolute;
  color: white;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${a.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,L=x.memo(({markers:t})=>{if(t.length===0)return null;const r=t.map(n=>n.start?new Date(n.start).getTime():0),o=Math.min(...r),c=Math.max(...r)-o;return e.jsx(e.Fragment,{children:t.map((n,p)=>{var u;const T=((n.start?new Date(n.start).getTime():0)-o)/c*100,g=(n==null?void 0:n.node_type)||"",f=((u=n==null?void 0:n.properties)==null?void 0:u.image_url)||"";return e.jsx(N,{img:f,left:T,type:g},`${n.ref_id}_${p}`)})})});L.displayName="Markers";const ht=({duration:t,markers:r,handleProgressChange:o,playingTime:s,tweetPlayingTime:c})=>{const n=Y(c).format("MMM D - h:mma"),p=Math.min(Math.max(s,0),100);return e.jsxs(gt,{children:[e.jsx(wt,{$progress:p,children:n}),e.jsx(bt,{max:t,onChange:o,value:p,width:12}),e.jsx(ft,{children:e.jsx(L,{markers:r})})]})},ut=i(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,gt=i(l)`
  position: relative;
  flex: 1 1 100%;
  padding: 0;
  box-sizing: border-box;
  margin-right: 12px;

  &:hover {
    ${ut} {
      display: block;
    }
  }
`,ft=i(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,wt=i.div`
  position: absolute;
  top: -40px;
  transform: translateX(-50%);
  background: rgba(230, 230, 230, 255);
  color: ${a.black};
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

  left: ${t=>`${t.$progress}%`};

  transition: transform 0.1s ease-out;

  transform: ${t=>{const r=t.$progress||0;return r>=95?`translateX(calc(-50% - ${Math.min((r-95)*5,50)}%))`:"translateX(-50%)"}};
`,bt=i(st)`
  && {
    z-index: 20;
    color: ${a.white};
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
      background-color: ${a.primaryBlue};
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
`,yt=({markers:t})=>{const r=b(h=>h.tweetPlayingTime),o=b(h=>h.setTweetPlayingTime),s=b(h=>h.setTweetIsPlaying),c=b(h=>h.setTweetDuration),n=b(h=>h.tweetDuration),p=b(h=>h.tweetIsPlaying),[d,T]=x.useState(0),[g,f]=x.useState(0),u=x.useRef(0);x.useEffect(()=>{const h=t.map(_=>_.start?new Date(_.start).getTime():0),y=Math.min(...h),k=Math.max(...h),j=k-y;T(y),f(k),c(j)},[t,c]);const m=x.useRef(null),v=x.useRef(null),$=x.useCallback((h,y)=>{const k=Array.isArray(y)?y[0]:y,j=d+k/100*n;o(j)},[o,d,n]);x.useEffect(()=>{if(p){r>=g&&(o(d),u.current=d),v.current=Date.now();const h=r?(r-d)/n:0,y=Date.now()-h*R;v.current=y;const k=()=>{const j=Date.now()-(v.current??Date.now());if(j<R){const _=j/R,M=d+_*n;o(M),u.current=M,m.current=requestAnimationFrame(k)}else o(g),s(!1),u.current=g,m.current&&cancelAnimationFrame(m.current)};return m.current=requestAnimationFrame(k),()=>{m.current&&cancelAnimationFrame(m.current)}}return u.current=r,()=>{m.current&&(cancelAnimationFrame(m.current),m.current=null)}},[p,d,g,o,n,s,r]);const C=x.useCallback(()=>{r>=g&&(o(d),u.current=d)},[r,g,d,o]);return e.jsxs(jt,{children:[e.jsx(W,{onPlaybackRestart:C}),e.jsx(ht,{duration:100,handleProgressChange:$,markers:t,playingTime:(r-d)/n*100,tweetPlayingTime:r})]})},jt=i(l).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${a.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`;function B(t){return z({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32zm-16-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(t)}function Tt(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z"}}]})(t)}function vt(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"}}]})(t)}const kt={impression_count:{label:"Impressions",formatter:t=>t.toLocaleString()},like_count:{label:"Likes",formatter:t=>t},reply_count:{label:"Replies",formatter:t=>t},retweet_count:{label:"Retweets",formatter:t=>t},quote_count:{label:"Quotes",formatter:t=>t},bookmark_count:{label:"Bookmarks",formatter:t=>t},analytics_location:{label:"Location",formatter:t=>t||"Unknown"},analytics_gender:{label:"Gender",formatter:t=>t||"Unknown"}},_t=t=>t==null?e.jsx(B,{color:a.GRAY3}):t<=4?e.jsx(Tt,{color:"#ef4444"}):t>=7?e.jsx(vt,{color:"#22c55e"}):e.jsx(B,{color:a.GRAY3}),$t=({node:t})=>{var r;return e.jsxs(Mt,{children:[e.jsx(Pt,{children:"Analytics"}),e.jsxs(St,{children:[Object.entries(kt).map(([o,{label:s,formatter:c}])=>{var n;return((n=t==null?void 0:t.properties)==null?void 0:n[o])!==void 0?e.jsxs(D,{children:[e.jsx("span",{children:s}),e.jsx(F,{children:c(t.properties[o])})]},o):null}),e.jsxs(D,{children:[e.jsx("span",{children:"Sentiment"}),e.jsx(F,{children:_t((r=t==null?void 0:t.properties)==null?void 0:r.analytics_sentiment_score)})]})]})]})},Mt=i.div`
  background: ${a.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`,Pt=i.h2`
  color: ${a.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 0;
`,St=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,D=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${a.GRAY3};
  font-size: 14px;
  padding-right: 4px;
`,F=i.span`
  color: ${a.GRAY6};
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`,At=({node:t})=>{const r=t?H(t):null,{text:o,name:s,verified:c,image_url:n,twitter_handle:p}=r||{};let d="";return(r==null?void 0:r.node_type)==="Tweet"?d=`https://x.com/${p}/status/${r==null?void 0:r.tweet_id}`:(r==null?void 0:r.node_type)==="User"&&(d=`https://x.com/${p}`),e.jsx(Ct,{children:e.jsxs(Rt,{children:[e.jsx(zt,{children:n?e.jsx(V,{rounded:!0,size:58,src:n,type:"person"}):e.jsx(It,{children:e.jsx(at,{})})}),e.jsxs(Bt,{children:[e.jsxs(Dt,{children:[e.jsxs(Ft,{children:[s&&e.jsx(Gt,{children:s}),!c&&e.jsx(Et,{children:e.jsx(it,{})})]}),e.jsx(Lt,{href:d,target:"_blank",children:e.jsx(ot,{})})]}),p&&e.jsxs(Wt,{children:["@",p]}),e.jsx(Nt,{children:o})]})]})})},Ct=i(l)`
  background: ${a.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  max-width: 369px;
`,Rt=i(l)`
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
`,zt=i(l)`
  margin-right: 10px;
`,It=i(l)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${a.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${a.white};
  font-size: 24px;
`,Bt=i(l)`
  flex-direction: column;
  gap: 3px;
  margin-top: 12px;
`,Dt=i(l)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`,Ft=i(l)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 1;
  min-width: 0;
`,Gt=i(l)`
  font-family: 'Barlow';
  font-size: 15px;
  font-weight: 700;
  color: ${a.white};
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,Wt=i(l)`
  font-family: 'Barlow';
  font-size: 14px;
  font-weight: 400;
  color: ${a.white};
  opacity: 0.6;
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-top: 2px;
`,Nt=i(l)`
  color: ${a.white};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 4px;
  white-space: normal;
`,Et=i(l)`
  background: #1d9bf0;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  font-size: 15px;
  margin-top: 3px;

  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 10px;
    text-align: center;
    height: 10px;
    color: ${a.BG1_HOVER};
  }
`,Lt=i.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${a.white};
  opacity: 0.6;
  font-size: 14px;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
  }
  svg {
    width: 18px;
    height: 18px;
    color: ${a.white} !important;
    fill: ${a.white} !important;
  }
`,Ut=()=>{const t=b(r=>r.selectedTweet);return t?e.jsxs(Yt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(Ht,{children:t&&e.jsx(At,{node:t})}),e.jsx($t,{node:t})]}):null},Yt=i(l)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[t.breakpoints.up("sm")]:{width:nt,gap:"10px"}})),Ht=i(l)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),Vt=t=>{const r=t.edges.filter(s=>{var c;return((c=s==null?void 0:s.properties)==null?void 0:c.start)&&typeof s.properties.start=="string"}).map(s=>({source:s.source,target:s.target,start:s.properties.start}));return t.nodes.filter(s=>t.edges.some(c=>c.source===s.ref_id||c.target===s.ref_id)).map(s=>{const c=r.find(n=>s.ref_id===n.source||s.ref_id===n.target);return{...s,start:(c==null?void 0:c.start)||0}}).filter(s=>s&&typeof s.start=="string"&&s.node_type!=="Clip"&&s.node_type!=="Episode"&&s.node_type!=="Show")},_e=()=>{const t=q(f=>f.addNewNode),r=x.useRef(null),o=x.useRef(null),s=x.useRef(null),[c,n]=x.useState([]),{setSchemas:p}=G(f=>f),d=b(f=>f.setSelectedTweet),T=O(),{tweetId:g}=X();return x.useEffect(()=>{(async()=>{try{const u=await Q();p(u.schemas.filter(m=>!m.is_deleted))}catch(u){console.error("Error fetching schema:",u)}})()},[p]),x.useEffect(()=>{g&&(async u=>{try{const m=await J(u),v=m.nodes.find(C=>C.ref_id===g);v&&(d(v),t({nodes:[v],edges:[]}));const $=Vt({nodes:m.nodes,edges:m.edges});n($),s.current={nodes:m.nodes,edges:m.edges}}catch(m){T("/"),console.error(m)}})(g)},[t,T,g,d]),x.useEffect(()=>{const f=u=>{const{tweetPlayingTime:m,tweetDuration:v}=b.getState(),$=v/R*3e3;if(o.current!==null){if(u-o.current>1e3){if(s.current){const{nodes:h,edges:y}=s.current,k=m,[j,_]=y.reduce(([P,S],w)=>{var I;const A=typeof((I=w==null?void 0:w.properties)==null?void 0:I.start)=="string"?new Date(w.properties.start||0).getTime():0;return A!==0&&A<=k+$?P.push(w):S.push(w),[P,S]},[[],[]]),[M,U]=h.reduce(([P,S],w)=>(j.some(A=>A.target===w.ref_id||A.source===w.ref_id)?P.push(w):S.push(w),[P,S]),[[],[]]);s.current={nodes:U,edges:_},(M.length||j.length)&&t({nodes:M,edges:j})}o.current=u}}else o.current=u;r.current=requestAnimationFrame(f)};return r.current=requestAnimationFrame(f),()=>{r.current&&cancelAnimationFrame(r.current)}},[s,t]),e.jsxs(qt,{children:[e.jsx(Ot,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(K,{}),e.jsx(Ut,{})]}),e.jsx(Xt,{children:e.jsx(l,{basis:"100%",grow:1,shrink:1,children:e.jsx(Z,{})})})]})}),e.jsx(Kt,{children:e.jsx(yt,{markers:c})})]})},qt=i.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Ot=i(l)`
  flex: 1;
  overflow: hidden;
`,Xt=i(l)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,Kt=i(l)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{_e as TweetMindset};
