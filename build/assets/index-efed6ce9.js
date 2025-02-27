import{s as i,g as a,F as l,r as x,j as t,o as F,w as L,x as Y,A as q,c as H,i as O,q as V,H as X,t as K,y as Q}from"./index-f36d40e2.js";import{F as D,a as J,b as Z,U as ee}from"./index-0e0d0857.js";import{I as te,d as b,a as re,b as se}from"./index-d4993150.js";import{S as ne,M as ie}from"./index-a4f66109.js";import{C as oe}from"./CheckIcon-0866e03b.js";import{L as ae}from"./VolumeIcon-4b485135.js";import{P as ce}from"./index-b3506dd9.js";import"./TextareaAutosize-0e07d268.js";import"./three.module-4d3d7244.js";import"./index-c95ba8e9.js";import"./index-ca26fd76.js";import"./VisibilityOn-da66cf63.js";import"./SearchIcon-85304858.js";import"./index-12937648.js";import"./ClipLoader-1e04f884.js";import"./Skeleton-8c8f632c.js";import"./Stack-df306fd8.js";import"./index-437eaa08.js";import"./SoundIcon-e4103880.js";import"./FormControlLabel-71874e7d.js";import"./Typography-b639e375.js";import"./createSvgIcon-a2344662.js";import"./isPlainObject-b33283f2.js";import"./SourcesTableIcon-ed48850c.js";import"./NodeCircleIcon-879ce5e3.js";import"./DeleteNodeIcon-7dd57cb1.js";import"./EditNodeIcon-e60c3243.js";import"./SucessFeedBackIcon-d9b7e675.js";const I=3e4,W=({onPlaybackRestart:e})=>{const r=b(p=>p.tweetIsPlaying),o=b(p=>p.setTweetIsPlaying),s=()=>{},c=()=>{},n=x.useCallback(()=>{e&&e(),o(!r)},[r,o,e]);return t.jsxs(le,{children:[t.jsx(de,{onClick:s,children:t.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),t.jsx(pe,{"data-testid":"play-pause-button",onClick:n,size:"small",children:r?t.jsx(re,{"data-testid":"pause-icon"}):t.jsx(se,{"data-testid":"play-icon"})}),t.jsx(me,{onClick:c,children:t.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};W.displayName="Controls";const le=i(l).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,pe=i(te)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,de=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,me=i.div`
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
`;const G=x.memo(({type:e,left:r,img:o})=>{var T,g;const s=F(f=>f.normalizedSchemasByType),c=(T=s[e])==null?void 0:T.primary_color,n=(g=s[e])==null?void 0:g.icon,p=n?`/svg-icons/${n}.svg`:"",d={iconStart:o||p,color:c??a.THING};return t.jsx(ue,{style:{left:`${r}%`},children:t.jsx(N,{...d,label:e})})});G.displayName="Marker";const N=x.memo(({iconStart:e,color:r,label:o})=>t.jsx(xe,{color:r,children:e&&t.jsx("img",{alt:o,className:"badge__img",onError:console.log,src:e})}));N.displayName="Badge";const xe=i(l).attrs({direction:"row"})`
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
`,ue=i.div`
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
`,E=x.memo(({markers:e})=>{if(e.length===0)return null;const r=e.map(n=>n.start?new Date(n.start).getTime():0),o=Math.min(...r),c=Math.max(...r)-o;return t.jsx(t.Fragment,{children:e.map((n,p)=>{var h;const T=((n.start?new Date(n.start).getTime():0)-o)/c*100,g=(n==null?void 0:n.node_type)||"",f=((h=n==null?void 0:n.properties)==null?void 0:h.image_url)||"";return t.jsx(G,{img:f,left:T,type:g},`${n.ref_id}_${p}`)})})});E.displayName="Markers";const he=({duration:e,markers:r,handleProgressChange:o,playingTime:s,tweetPlayingTime:c})=>{const n=L(c).format("MMM D - h:mma"),p=Math.min(Math.max(s,0),100);return t.jsxs(fe,{children:[p?t.jsx(be,{$progress:p,children:n}):null,t.jsx(ye,{max:e,onChange:o,value:p,width:12}),t.jsx(we,{children:t.jsx(E,{markers:r})})]})},ge=i(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,fe=i(l)`
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
`,we=i(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,be=i.div`
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
`,ye=i(ne)`
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
`,je=({markers:e})=>{const r=b(u=>u.tweetPlayingTime),o=b(u=>u.setTweetPlayingTime),s=b(u=>u.setTweetIsPlaying),c=b(u=>u.setTweetDuration),n=b(u=>u.tweetDuration),p=b(u=>u.tweetIsPlaying),[d,T]=x.useState(0),[g,f]=x.useState(0),h=x.useRef(0);x.useEffect(()=>{const u=e.map($=>$.start?new Date($.start).getTime():0),y=Math.min(...u),_=Math.max(...u),j=_-y;T(y),f(_),c(j)},[e,c]);const m=x.useRef(null),k=x.useRef(null),v=x.useCallback((u,y)=>{const _=Array.isArray(y)?y[0]:y,j=d+_/100*n;o(j)},[o,d,n]);x.useEffect(()=>{if(p){r>=g&&(o(d),h.current=d),k.current=Date.now();const u=r?(r-d)/n:0,y=Date.now()-u*I;k.current=y;const _=()=>{const j=Date.now()-(k.current??Date.now());if(j<I){const $=j/I,P=d+$*n;o(P),h.current=P,m.current=requestAnimationFrame(_)}else o(g),s(!1),h.current=g,m.current&&cancelAnimationFrame(m.current)};return m.current=requestAnimationFrame(_),()=>{m.current&&cancelAnimationFrame(m.current)}}return h.current=r,()=>{m.current&&(cancelAnimationFrame(m.current),m.current=null)}},[p,d,g,o,n,s,r]);const R=x.useCallback(()=>{r>=g&&(o(d),h.current=d)},[r,g,d,o]);return t.jsxs(Te,{children:[t.jsx(W,{onPlaybackRestart:R}),t.jsx(he,{duration:100,handleProgressChange:v,markers:e,playingTime:(r-d)/n*100,tweetPlayingTime:r})]})},Te=i(l).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${a.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,ke={impression_count:{label:"Impressions",formatter:e=>e.toLocaleString()},like_count:{label:"Likes",formatter:e=>e},reply_count:{label:"Replies",formatter:e=>e},retweet_count:{label:"Retweets",formatter:e=>e},quote_count:{label:"Quotes",formatter:e=>e},bookmark_count:{label:"Bookmarks",formatter:e=>e},analytics_location:{label:"Location",formatter:e=>e||"Unknown"},analytics_gender:{label:"Gender",formatter:e=>e||"Unknown"}},_e=e=>e==null?t.jsx(D,{color:a.GRAY3}):e<=4?t.jsx(J,{color:"#ef4444"}):e>=7?t.jsx(Z,{color:"#22c55e"}):t.jsx(D,{color:a.GRAY3}),$e=({node:e})=>{var r;return t.jsxs(ve,{children:[t.jsx(Pe,{children:"Analytics"}),t.jsxs(Ae,{children:[Object.entries(ke).map(([o,{label:s,formatter:c}])=>{var n;return((n=e==null?void 0:e.properties)==null?void 0:n[o])!==void 0?t.jsxs(B,{children:[t.jsx("span",{children:s}),t.jsx(z,{children:c(e.properties[o])})]},o):null}),t.jsxs(B,{children:[t.jsx("span",{children:"Sentiment"}),t.jsx(z,{children:_e((r=e==null?void 0:e.properties)==null?void 0:r.analytics_sentiment_score)})]})]})]})},ve=i.div`
  background: ${a.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`,Pe=i.h2`
  color: ${a.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 0;
`,Ae=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,B=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${a.GRAY3};
  font-size: 14px;
  padding-right: 4px;
`,z=i.span`
  color: ${a.GRAY6};
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`,Se=({node:e})=>{const r=e?Y(e):null,{text:o,name:s,verified:c,image_url:n,twitter_handle:p}=r||{};let d="";return(r==null?void 0:r.node_type)==="Tweet"?d=`https://x.com/${p}/status/${r==null?void 0:r.tweet_id}`:(r==null?void 0:r.node_type)==="User"&&(d=`https://x.com/${p}`),t.jsx(Me,{children:t.jsxs(Re,{children:[t.jsx(Ie,{children:n?t.jsx(q,{rounded:!0,size:58,src:n,type:"person"}):t.jsx(Ce,{children:t.jsx(ce,{})})}),t.jsxs(De,{children:[t.jsxs(Be,{children:[t.jsxs(ze,{children:[s&&t.jsx(Fe,{children:s}),!c&&t.jsx(Ne,{children:t.jsx(oe,{})})]}),t.jsx(Ee,{href:d,target:"_blank",children:t.jsx(ae,{})})]}),p&&t.jsxs(We,{children:["@",p]}),t.jsx(Ge,{children:o})]})]})})},Me=i(l)`
  background: ${a.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  max-width: 369px;
`,Re=i(l)`
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
`,Ie=i(l)`
  margin-right: 10px;
`,Ce=i(l)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${a.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${a.white};
  font-size: 24px;
`,De=i(l)`
  flex-direction: column;
  gap: 3px;
  margin-top: 12px;
`,Be=i(l)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`,ze=i(l)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 1;
  min-width: 0;
`,Fe=i(l)`
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
`,We=i(l)`
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
`,Ge=i(l)`
  color: ${a.white};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 4px;
  white-space: normal;
`,Ne=i(l)`
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
`,Ee=i.a`
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
`,Ue=()=>{const e=b(r=>r.selectedTweet);return e?t.jsxs(Le,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsx(Ye,{children:e&&t.jsx(Se,{node:e})}),t.jsx($e,{node:e})]}):null},Le=i(l)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:ie,gap:"10px"}})),Ye=i(l)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),qe=e=>{const r=e.edges.filter(s=>{var c;return((c=s==null?void 0:s.properties)==null?void 0:c.start)&&typeof s.properties.start=="string"}).map(s=>({source:s.source,target:s.target,start:s.properties.start}));return e.nodes.filter(s=>e.edges.some(c=>c.source===s.ref_id||c.target===s.ref_id)).map(s=>{const c=r.find(n=>s.ref_id===n.source||s.ref_id===n.target);return{...s,start:(c==null?void 0:c.start)||0}}).filter(s=>s&&typeof s.start=="string"&&s.node_type!=="Clip"&&s.node_type!=="Episode"&&s.node_type!=="Show")},_t=()=>{const e=H(f=>f.addNewNode),r=x.useRef(null),o=x.useRef(null),s=x.useRef(null),[c,n]=x.useState([]),{setSchemas:p}=F(f=>f),d=b(f=>f.setSelectedTweet),T=O(),{tweetId:g}=V();return x.useEffect(()=>{(async()=>{try{const h=await K();p(h.schemas.filter(m=>!m.is_deleted))}catch(h){console.error("Error fetching schema:",h)}})()},[p]),x.useEffect(()=>{g&&(async h=>{try{const m=await Q(h),k=m.nodes.find(R=>R.ref_id===g);k&&(d(k),e({nodes:[k],edges:[]}));const v=qe({nodes:m.nodes,edges:m.edges});n(v),s.current={nodes:m.nodes,edges:m.edges}}catch(m){T("/"),console.error(m)}})(g)},[e,T,g,d]),x.useEffect(()=>{const f=h=>{const{tweetPlayingTime:m,tweetDuration:k}=b.getState(),v=k/I*3e3;if(o.current!==null){if(h-o.current>1e3){if(s.current){const{nodes:u,edges:y}=s.current,_=m,[j,$]=y.reduce(([A,S],w)=>{var C;const M=typeof((C=w==null?void 0:w.properties)==null?void 0:C.start)=="string"?new Date(w.properties.start||0).getTime():0;return M!==0&&M<=_+v?A.push(w):S.push(w),[A,S]},[[],[]]),[P,U]=u.reduce(([A,S],w)=>(j.some(M=>M.target===w.ref_id||M.source===w.ref_id)?A.push(w):S.push(w),[A,S]),[[],[]]);s.current={nodes:U,edges:$},(P.length||j.length)&&e({nodes:P,edges:j})}o.current=h}}else o.current=h;r.current=requestAnimationFrame(f)};return r.current=requestAnimationFrame(f),()=>{r.current&&cancelAnimationFrame(r.current)}},[s,e]),t.jsxs(He,{children:[t.jsx(Oe,{direction:"row",children:t.jsxs(t.Fragment,{children:[t.jsxs(l,{children:[t.jsx(X,{}),t.jsx(Ue,{})]}),t.jsx(Ve,{children:t.jsx(l,{basis:"100%",grow:1,shrink:1,children:t.jsx(ee,{})})})]})}),t.jsx(Xe,{children:t.jsx(je,{markers:c})})]})},He=i.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Oe=i(l)`
  flex: 1;
  overflow: hidden;
`,Ve=i(l)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,Xe=i(l)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{_t as TweetMindset};
