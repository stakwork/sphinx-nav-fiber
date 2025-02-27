import{s as n,g as a,F as p,r as x,j as t,o as z,w as U,x as Y,A as q,c as H,i as V,q as O,H as X,t as K,y as Q}from"./index-4eba51ff.js";import{F,a as J,b as Z,U as ee}from"./index-3ccba952.js";import{I as te,d as y,a as re,b as se}from"./index-252d7cea.js";import{S as ie,M as ne}from"./index-0e27f5ca.js";import{C as oe}from"./CheckIcon-e2474ada.js";import{L as ae}from"./VolumeIcon-5a7718d7.js";import{P as ce}from"./index-e5e93d94.js";import"./TextareaAutosize-be7dae31.js";import"./three.module-4d3d7244.js";import"./index-fd26afd8.js";import"./index-e843147c.js";import"./VisibilityOn-d2d25592.js";import"./SearchIcon-1eea1cd2.js";import"./index-d32581d9.js";import"./ClipLoader-c5e59754.js";import"./Skeleton-11c306b5.js";import"./Stack-bd548ab0.js";import"./index-e92fa579.js";import"./SoundIcon-27783a34.js";import"./FormControlLabel-1e5387ad.js";import"./Typography-b2ab7b8a.js";import"./createSvgIcon-3ff2cdf1.js";import"./isPlainObject-1b527cbd.js";import"./SourcesTableIcon-ac992966.js";import"./NodeCircleIcon-00b1d9b6.js";import"./DeleteNodeIcon-8f50bf4e.js";import"./EditNodeIcon-2f5e7968.js";import"./SucessFeedBackIcon-dd3ed035.js";const I=3e4,N=({onPlaybackRestart:e})=>{const r=y(l=>l.tweetIsPlaying),o=y(l=>l.setTweetIsPlaying),s=()=>{},c=()=>{},i=x.useCallback(()=>{e&&e(),o(!r)},[r,o,e]);return t.jsxs(le,{children:[t.jsx(de,{onClick:s,children:t.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),t.jsx(pe,{"data-testid":"play-pause-button",onClick:i,size:"small",children:r?t.jsx(re,{"data-testid":"pause-icon"}):t.jsx(se,{"data-testid":"play-icon"})}),t.jsx(me,{onClick:c,children:t.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};N.displayName="Controls";const le=n(p).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,pe=n(te)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,de=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,me=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`;n.div`
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
`;n.button`
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
`;const W=x.memo(({type:e,left:r,img:o})=>{var w,g;const s=z(f=>f.normalizedSchemasByType),c=(w=s[e])==null?void 0:w.primary_color,i=(g=s[e])==null?void 0:g.icon,l=i?`/svg-icons/${i}.svg`:"",d={iconStart:o||l,color:c??a.THING};return t.jsx(ue,{style:{left:`${r}%`},children:t.jsx(G,{...d,label:e})})});W.displayName="Marker";const G=x.memo(({iconStart:e,color:r,label:o})=>t.jsx(xe,{color:r,children:e&&t.jsx("img",{alt:o,className:"badge__img",onError:console.log,src:e})}));G.displayName="Badge";const xe=n(p).attrs({direction:"row"})`
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
`,ue=n.div`
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
`,E=x.memo(({markers:e})=>{if(e.length===0)return null;const r=e.map(i=>i.start?new Date(i.start).getTime():0),o=Math.min(...r),c=Math.max(...r)-o;return t.jsx(t.Fragment,{children:e.map((i,l)=>{var h;const w=((i.start?new Date(i.start).getTime():0)-o)/c*100,g=(i==null?void 0:i.node_type)||"",f=((h=i==null?void 0:i.properties)==null?void 0:h.image_url)||"";return t.jsx(W,{img:f,left:w,type:g},`${i.ref_id}_${l}`)})})});E.displayName="Markers";const he=({duration:e,markers:r,handleProgressChange:o,playingTime:s,tweetPlayingTime:c})=>{const i=U(c).format("MMM D - h:mma"),l=Math.min(Math.max(s,0),100);return t.jsxs(fe,{children:[l?t.jsx(be,{$progress:l,children:i}):null,t.jsx(ye,{max:e,onChange:o,value:l,width:12}),t.jsx(we,{children:t.jsx(E,{markers:r})})]})},ge=n(p)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,fe=n(p)`
  position: relative;
  flex: 1 1 100%;
  padding: 0;
  box-sizing: border-box;
  margin-right: 12px;

  &:hover {
    ${ge} {
      display: block;
    }
  }
`,we=n(p)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,be=n.div`
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

  left: ${e=>`${e.$progress}%`};

  transition: transform 0.1s ease-out;

  transform: ${e=>{const r=e.$progress||0;return r>=95?`translateX(calc(-50% - ${Math.min((r-95)*5,50)}%))`:"translateX(-50%)"}};
`,ye=n(ie)`
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
`,je=({markers:e})=>{const r=y(u=>u.tweetPlayingTime),o=y(u=>u.setTweetPlayingTime),s=y(u=>u.setTweetIsPlaying),c=y(u=>u.setTweetDuration),i=y(u=>u.tweetDuration),l=y(u=>u.tweetIsPlaying),[d,w]=x.useState(0),[g,f]=x.useState(0),h=x.useRef(0);x.useEffect(()=>{const u=e.map(v=>v.start?new Date(v.start).getTime():0),j=Math.min(...u),_=Math.max(...u),T=_-j;w(j),f(_),c(T)},[e,c]);const m=x.useRef(null),k=x.useRef(null),$=x.useCallback((u,j)=>{const _=Array.isArray(j)?j[0]:j,T=d+_/100*i;o(T)},[o,d,i]);x.useEffect(()=>{if(l){r>=g&&(o(d),h.current=d),k.current=Date.now();const u=r?(r-d)/i:0,j=Date.now()-u*I;k.current=j;const _=()=>{const T=Date.now()-(k.current??Date.now());if(T<I){const v=T/I,A=d+v*i;o(A),h.current=A,m.current=requestAnimationFrame(_)}else o(g),s(!1),h.current=g,m.current&&cancelAnimationFrame(m.current)};return m.current=requestAnimationFrame(_),()=>{m.current&&cancelAnimationFrame(m.current)}}return h.current=r,()=>{m.current&&(cancelAnimationFrame(m.current),m.current=null)}},[l,d,g,o,i,s,r]);const M=x.useCallback(()=>{r>=g&&(o(d),h.current=d)},[r,g,d,o]);return t.jsxs(Te,{children:[t.jsx(N,{onPlaybackRestart:M}),t.jsx(he,{duration:100,handleProgressChange:$,markers:e,playingTime:(r-d)/i*100,tweetPlayingTime:r})]})},Te=n(p).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${a.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,ke={impression_count:{label:"Impressions",formatter:e=>e.toLocaleString()},like_count:{label:"Likes",formatter:e=>e},reply_count:{label:"Replies",formatter:e=>e},retweet_count:{label:"Retweets",formatter:e=>e},quote_count:{label:"Quotes",formatter:e=>e},bookmark_count:{label:"Bookmarks",formatter:e=>e},analytics_location:{label:"Location",formatter:e=>e||"Unknown"},analytics_gender:{label:"Gender",formatter:e=>e||"Unknown"},followers:{label:"Followers",formatter:e=>e.toLocaleString()}},_e=e=>e==null?t.jsx(F,{color:a.GRAY3}):e<=4?t.jsx(J,{color:"#ef4444"}):e>=7?t.jsx(Z,{color:"#22c55e"}):t.jsx(F,{color:a.GRAY3}),ve=({node:e})=>{var o,s,c;const r=((o=e==null?void 0:e.properties)==null?void 0:o.followers)!==void 0&&((s=e==null?void 0:e.properties)==null?void 0:s.impression_count)!==void 0&&e.properties.impression_count!==0?(e.properties.impression_count/e.properties.followers).toFixed(2):"N/A";return t.jsxs($e,{children:[t.jsx(Ae,{children:"Analytics"}),t.jsxs(Pe,{children:[Object.entries(ke).map(([i,{label:l,formatter:d}])=>{var w;return((w=e==null?void 0:e.properties)==null?void 0:w[i])!==void 0?t.jsxs(C,{children:[t.jsx("span",{children:l}),t.jsx(D,{children:d(e.properties[i])})]},i):null}),t.jsxs(C,{children:[t.jsx("span",{children:"Views-to-followers"}),t.jsx(D,{children:r})]}),t.jsxs(C,{children:[t.jsx("span",{children:"Sentiment"}),t.jsx(D,{children:_e((c=e==null?void 0:e.properties)==null?void 0:c.analytics_sentiment_score)})]})]})]})},$e=n.div`
  background: ${a.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`,Ae=n.h2`
  color: ${a.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 0;
`,Pe=n.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,C=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${a.GRAY3};
  font-size: 14px;
  padding-right: 4px;
`,D=n.span`
  color: ${a.GRAY6};
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`,Se=({node:e})=>{const r=e?Y(e):null,{text:o,name:s,verified:c,image_url:i,twitter_handle:l}=r||{};let d="";return(r==null?void 0:r.node_type)==="Tweet"?d=`https://x.com/${l}/status/${r==null?void 0:r.tweet_id}`:(r==null?void 0:r.node_type)==="User"&&(d=`https://x.com/${l}`),t.jsx(Re,{children:t.jsxs(Me,{children:[t.jsx(Ie,{children:i?t.jsx(q,{rounded:!0,size:58,src:i,type:"person"}):t.jsx(Ce,{children:t.jsx(ce,{})})}),t.jsxs(De,{children:[t.jsxs(Be,{children:[t.jsxs(Fe,{children:[s&&t.jsx(ze,{children:s}),!c&&t.jsx(Ge,{children:t.jsx(oe,{})})]}),t.jsx(Ee,{href:d,target:"_blank",children:t.jsx(ae,{})})]}),l&&t.jsxs(Ne,{children:["@",l]}),t.jsx(We,{children:o})]})]})})},Re=n(p)`
  background: ${a.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  max-width: 369px;
`,Me=n(p)`
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
`,Ie=n(p)`
  margin-right: 10px;
`,Ce=n(p)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${a.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${a.white};
  font-size: 24px;
`,De=n(p)`
  flex-direction: column;
  gap: 3px;
  margin-top: 12px;
`,Be=n(p)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`,Fe=n(p)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 1;
  min-width: 0;
`,ze=n(p)`
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
`,Ne=n(p)`
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
`,We=n(p)`
  color: ${a.white};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 4px;
  white-space: normal;
`,Ge=n(p)`
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
`,Ee=n.a`
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
`,Le=()=>{const e=y(r=>r.selectedTweet);return e?t.jsxs(Ue,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsx(Ye,{children:e&&t.jsx(Se,{node:e})}),t.jsx(ve,{node:e})]}):null},Ue=n(p)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:ne,gap:"10px"}})),Ye=n(p)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),qe=e=>{const r=e.edges.filter(s=>{var c;return((c=s==null?void 0:s.properties)==null?void 0:c.start)&&typeof s.properties.start=="string"}).map(s=>({source:s.source,target:s.target,start:s.properties.start}));return e.nodes.filter(s=>e.edges.some(c=>c.source===s.ref_id||c.target===s.ref_id)).map(s=>{const c=r.find(i=>s.ref_id===i.source||s.ref_id===i.target);return{...s,start:(c==null?void 0:c.start)||0}}).filter(s=>s&&typeof s.start=="string"&&s.node_type!=="Clip"&&s.node_type!=="Episode"&&s.node_type!=="Show")},_t=()=>{const e=H(f=>f.addNewNode),r=x.useRef(null),o=x.useRef(null),s=x.useRef(null),[c,i]=x.useState([]),{setSchemas:l}=z(f=>f),d=y(f=>f.setSelectedTweet),w=V(),{tweetId:g}=O();return x.useEffect(()=>{(async()=>{try{const h=await K();l(h.schemas.filter(m=>!m.is_deleted))}catch(h){console.error("Error fetching schema:",h)}})()},[l]),x.useEffect(()=>{g&&(async h=>{try{const m=await Q(h),k=m.nodes.find(M=>M.ref_id===g);k&&(d(k),e({nodes:[k],edges:[]}));const $=qe({nodes:m.nodes,edges:m.edges});i($),s.current={nodes:m.nodes,edges:m.edges}}catch(m){w("/"),console.error(m)}})(g)},[e,w,g,d]),x.useEffect(()=>{const f=h=>{const{tweetPlayingTime:m,tweetDuration:k}=y.getState(),$=k/I*3e3;if(o.current!==null){if(h-o.current>1e3){if(s.current){const{nodes:u,edges:j}=s.current,_=m,[T,v]=j.reduce(([P,S],b)=>{var B;const R=typeof((B=b==null?void 0:b.properties)==null?void 0:B.start)=="string"?new Date(b.properties.start||0).getTime():0;return R!==0&&R<=_+$?P.push(b):S.push(b),[P,S]},[[],[]]),[A,L]=u.reduce(([P,S],b)=>(T.some(R=>R.target===b.ref_id||R.source===b.ref_id)?P.push(b):S.push(b),[P,S]),[[],[]]);s.current={nodes:L,edges:v},(A.length||T.length)&&e({nodes:A,edges:T})}o.current=h}}else o.current=h;r.current=requestAnimationFrame(f)};return r.current=requestAnimationFrame(f),()=>{r.current&&cancelAnimationFrame(r.current)}},[s,e]),t.jsxs(He,{children:[t.jsx(Ve,{direction:"row",children:t.jsxs(t.Fragment,{children:[t.jsxs(p,{children:[t.jsx(X,{}),t.jsx(Le,{})]}),t.jsx(Oe,{children:t.jsx(p,{basis:"100%",grow:1,shrink:1,children:t.jsx(ee,{})})})]})}),t.jsx(Xe,{children:t.jsx(je,{markers:c})})]})},He=n.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Ve=n(p)`
  flex: 1;
  overflow: hidden;
`,Oe=n(p)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,Xe=n(p)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{_t as TweetMindset};
