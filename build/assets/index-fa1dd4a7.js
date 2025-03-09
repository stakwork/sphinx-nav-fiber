import{s as i,g as c,F as p,r as m,j as t,o as N,w as F,x as Y,A as q,c as H,i as V,q as O,H as X,t as K,y as Q}from"./index-0bc9ae90.js";import{F as z,a as J,b as Z,U as ee}from"./index-9492386b.js";import{I as te,d as y,a as re,b as se}from"./index-a97a73cc.js";import{S as ie,M as ne}from"./index-e33306f7.js";import{C as oe}from"./CheckIcon-c13450bd.js";import{P as ae,L as ce}from"./index-0813e708.js";import"./index-4044aa7b.js";import"./three.module-4d3d7244.js";import"./index-971a0f27.js";import"./TextareaAutosize-acb7dc8e.js";import"./index-30fb37bf.js";import"./index-1ed69b45.js";import"./ClipLoader-a4ee2175.js";import"./clsx-0ff35b70.js";import"./Skeleton-7f80f646.js";import"./Stack-faaea80c.js";import"./index-c7b1e632.js";import"./SoundIcon-dbfb099f.js";import"./FormControlLabel-d213a304.js";import"./Typography-8117be15.js";import"./createSvgIcon-39e89e6d.js";import"./isPlainObject-7a297de7.js";import"./SourcesTableIcon-db95c031.js";import"./DeleteNodeIcon-64022384.js";import"./SucessFeedBackIcon-06d2d64f.js";const I=3e4,W=({onPlaybackRestart:e})=>{const r=y(d=>d.tweetIsPlaying),o=y(d=>d.setTweetIsPlaying),s=()=>{},a=()=>{},n=m.useCallback(()=>{e&&e(),o(!r)},[r,o,e]);return t.jsxs(le,{children:[t.jsx(de,{onClick:s,children:t.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),t.jsx(pe,{"data-testid":"play-pause-button",onClick:n,size:"small",children:r?t.jsx(re,{"data-testid":"pause-icon"}):t.jsx(se,{"data-testid":"play-icon"})}),t.jsx(xe,{onClick:a,children:t.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};W.displayName="Controls";const le=i(p).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,xe=i.div`
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
`;const G=m.memo(({type:e,left:r,img:o})=>{var w,g;const s=N(f=>f.normalizedSchemasByType),a=(w=s[e])==null?void 0:w.primary_color,n=(g=s[e])==null?void 0:g.icon,d=n?`/svg-icons/${n}.svg`:"",l={iconStart:o||d,color:a??c.THING};return t.jsx(ue,{style:{left:`${r}%`},children:t.jsx(E,{...l,label:e})})});G.displayName="Marker";const E=m.memo(({iconStart:e,color:r,label:o})=>t.jsx(me,{color:r,children:e&&t.jsx("img",{alt:o,className:"badge__img",onError:console.log,src:e})}));E.displayName="Badge";const me=i(p).attrs({direction:"row"})`
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
  background-color: ${c.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,L=m.memo(({markers:e})=>{if(e.length===0)return null;const r=e.map(n=>n.start?new Date(n.start).getTime():0),o=Math.min(...r),a=Math.max(...r)-o;return t.jsx(t.Fragment,{children:e.map((n,d)=>{var h;const w=((n.start?new Date(n.start).getTime():0)-o)/a*100,g=(n==null?void 0:n.node_type)||"",f=((h=n==null?void 0:n.properties)==null?void 0:h.image_url)||"";return t.jsx(G,{img:f,left:w,type:g},`${n.ref_id}_${d}`)})})});L.displayName="Markers";const he=({duration:e,markers:r,handleProgressChange:o,playingTime:s,tweetPlayingTime:a})=>{const n=F(a).format("MMM D"),d=F(a).format("h:mma"),l=Math.min(Math.max(s,0),100);return t.jsxs(fe,{children:[l?t.jsxs(be,{$progress:l,children:[t.jsx(ye,{children:n}),t.jsx(je,{children:" - "}),t.jsx(Te,{children:d})]}):null,t.jsx(ke,{max:e,onChange:o,value:l,width:12}),t.jsx(we,{children:t.jsx(L,{markers:r})})]})},ge=i(p)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,fe=i(p)`
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
`,we=i(p)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,be=i.div`
  position: absolute;
  top: -40px;
  transform: translateX(-50%);
  background: rgba(230, 230, 230, 255);
  color: ${c.black};
  padding: 6px 6px 6px 12px;
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
  min-width: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  left: ${e=>`${e.$progress}%`};

  transition: transform 0.1s ease-out;

  transform: ${e=>{const r=e.$progress||0;return r>=95?`translateX(calc(-50% - ${Math.min((r-95)*5,50)}%))`:"translateX(-50%)"}};
`,ye=i.span`
  display: inline-block;
  width: 45px;
  text-align: right;
`,je=i.span`
  margin: 0 4px;
`,Te=i.span`
  display: inline-block;
  width: 55px;
  text-align: left;
  font-variant-numeric: tabular-nums;
`,ke=i(ie)`
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
`,_e=({markers:e})=>{const r=y(u=>u.tweetPlayingTime),o=y(u=>u.setTweetPlayingTime),s=y(u=>u.setTweetIsPlaying),a=y(u=>u.setTweetDuration),n=y(u=>u.tweetDuration),d=y(u=>u.tweetIsPlaying),[l,w]=m.useState(0),[g,f]=m.useState(0),h=m.useRef(0);m.useEffect(()=>{const u=e.map(v=>v.start?new Date(v.start).getTime():0),j=Math.min(...u),_=Math.max(...u),T=_-j;w(j),f(_),a(T)},[e,a]);const x=m.useRef(null),k=m.useRef(null),$=m.useCallback((u,j)=>{const _=Array.isArray(j)?j[0]:j,T=l+_/100*n;o(T)},[o,l,n]);m.useEffect(()=>{if(d){r>=g&&(o(l),h.current=l),k.current=Date.now();const u=r?(r-l)/n:0,j=Date.now()-u*I;k.current=j;const _=()=>{const T=Date.now()-(k.current??Date.now());if(T<I){const v=T/I,S=l+v*n;o(S),h.current=S,x.current=requestAnimationFrame(_)}else o(g),s(!1),h.current=g,x.current&&cancelAnimationFrame(x.current)};return x.current=requestAnimationFrame(_),()=>{x.current&&cancelAnimationFrame(x.current)}}return h.current=r,()=>{x.current&&(cancelAnimationFrame(x.current),x.current=null)}},[d,l,g,o,n,s,r]);const M=m.useCallback(()=>{r>=g&&(o(l),h.current=l)},[r,g,l,o]);return t.jsxs(ve,{children:[t.jsx(W,{onPlaybackRestart:M}),t.jsx(he,{duration:100,handleProgressChange:$,markers:e,playingTime:(r-l)/n*100,tweetPlayingTime:r})]})},ve=i(p).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${c.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,$e={impression_count:{label:"Impressions",formatter:e=>e.toLocaleString()},like_count:{label:"Likes",formatter:e=>e},reply_count:{label:"Replies",formatter:e=>e},retweet_count:{label:"Retweets",formatter:e=>e},quote_count:{label:"Quotes",formatter:e=>e},bookmark_count:{label:"Bookmarks",formatter:e=>e},analytics_location:{label:"Location",formatter:e=>e||"Unknown"},analytics_gender:{label:"Gender",formatter:e=>e||"Unknown"},followers:{label:"Followers",formatter:e=>e.toLocaleString()}},Se=e=>e==null?t.jsx(z,{color:c.GRAY3}):e<=4?t.jsx(J,{color:"#ef4444"}):e>=7?t.jsx(Z,{color:"#22c55e"}):t.jsx(z,{color:c.GRAY3}),Pe=({node:e})=>{var o,s,a;const r=((o=e==null?void 0:e.properties)==null?void 0:o.followers)!==void 0&&((s=e==null?void 0:e.properties)==null?void 0:s.impression_count)!==void 0&&e.properties.impression_count!==0?(e.properties.impression_count/e.properties.followers).toFixed(2):"N/A";return t.jsxs(Ae,{children:[t.jsx(Re,{children:"Analytics"}),t.jsxs(Me,{children:[Object.entries($e).map(([n,{label:d,formatter:l}])=>{var w;return((w=e==null?void 0:e.properties)==null?void 0:w[n])!==void 0?t.jsxs(C,{children:[t.jsx("span",{children:d}),t.jsx(D,{children:l(e.properties[n])})]},n):null}),t.jsxs(C,{children:[t.jsx("span",{children:"Views-to-followers"}),t.jsx(D,{children:r})]}),t.jsxs(C,{children:[t.jsx("span",{children:"Sentiment"}),t.jsx(D,{children:Se((a=e==null?void 0:e.properties)==null?void 0:a.analytics_sentiment_score)})]})]})]})},Ae=i.div`
  background: ${c.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`,Re=i.h2`
  color: ${c.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 0;
`,Me=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,C=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${c.GRAY3};
  font-size: 14px;
  padding-right: 4px;
`,D=i.span`
  color: ${c.GRAY6};
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`,Ie=({node:e})=>{const r=e?Y(e):null,{text:o,name:s,verified:a,image_url:n,twitter_handle:d}=r||{};let l="";return(r==null?void 0:r.node_type)==="Tweet"?l=`https://x.com/${d}/status/${r==null?void 0:r.tweet_id}`:(r==null?void 0:r.node_type)==="User"&&(l=`https://x.com/${d}`),t.jsx(Ce,{children:t.jsxs(De,{children:[t.jsx(Be,{children:n?t.jsx(q,{rounded:!0,size:58,src:n,type:"person"}):t.jsx(Fe,{children:t.jsx(ae,{})})}),t.jsxs(ze,{children:[t.jsxs(Ne,{children:[t.jsxs(We,{children:[s&&t.jsx(Ge,{children:s}),!a&&t.jsx(Ue,{children:t.jsx(oe,{})})]}),t.jsx(Ye,{href:l,target:"_blank",children:t.jsx(ce,{})})]}),d&&t.jsxs(Ee,{children:["@",d]}),t.jsx(Le,{children:o})]})]})})},Ce=i(p)`
  background: ${c.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  max-width: 369px;
`,De=i(p)`
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
`,Be=i(p)`
  margin-right: 10px;
`,Fe=i(p)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${c.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${c.white};
  font-size: 24px;
`,ze=i(p)`
  flex-direction: column;
  gap: 3px;
  margin-top: 12px;
`,Ne=i(p)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`,We=i(p)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 1;
  min-width: 0;
`,Ge=i(p)`
  font-family: 'Barlow';
  font-size: 15px;
  font-weight: 700;
  color: ${c.white};
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,Ee=i(p)`
  font-family: 'Barlow';
  font-size: 14px;
  font-weight: 400;
  color: ${c.white};
  opacity: 0.6;
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-top: 2px;
`,Le=i(p)`
  color: ${c.white};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 4px;
  white-space: normal;
`,Ue=i(p)`
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
    color: ${c.BG1_HOVER};
  }
`,Ye=i.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.white};
  opacity: 0.6;
  font-size: 14px;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
  }
  svg {
    width: 18px;
    height: 18px;
    color: ${c.white} !important;
    fill: ${c.white} !important;
  }
`,qe=()=>{const e=y(r=>r.selectedTweet);return e?t.jsxs(He,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsx(Ve,{children:e&&t.jsx(Ie,{node:e})}),t.jsx(Pe,{node:e})]}):null},He=i(p)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:ne,gap:"10px"}})),Ve=i(p)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),Oe=e=>{const r=e.edges.filter(s=>{var a;return((a=s==null?void 0:s.properties)==null?void 0:a.start)&&typeof s.properties.start=="string"}).map(s=>({source:s.source,target:s.target,start:s.properties.start}));return e.nodes.filter(s=>e.edges.some(a=>a.source===s.ref_id||a.target===s.ref_id)).map(s=>{const a=r.find(n=>s.ref_id===n.source||s.ref_id===n.target);return{...s,start:(a==null?void 0:a.start)||0}}).filter(s=>s&&typeof s.start=="string"&&s.node_type!=="Clip"&&s.node_type!=="Episode"&&s.node_type!=="Show")},_t=()=>{const e=H(f=>f.addNewNode),r=m.useRef(null),o=m.useRef(null),s=m.useRef(null),[a,n]=m.useState([]),{setSchemas:d}=N(f=>f),l=y(f=>f.setSelectedTweet),w=V(),{tweetId:g}=O();return m.useEffect(()=>{(async()=>{try{const h=await K();d(h.schemas.filter(x=>!x.is_deleted))}catch(h){console.error("Error fetching schema:",h)}})()},[d]),m.useEffect(()=>{g&&(async h=>{try{const x=await Q(h),k=x.nodes.find(M=>M.ref_id===g);k&&(l(k),e({nodes:[k],edges:[]}));const $=Oe({nodes:x.nodes,edges:x.edges});n($),s.current={nodes:x.nodes,edges:x.edges}}catch(x){w("/"),console.error(x)}})(g)},[e,w,g,l]),m.useEffect(()=>{const f=h=>{const{tweetPlayingTime:x,tweetDuration:k}=y.getState(),$=k/I*3e3;if(o.current!==null){if(h-o.current>1e3){if(s.current){const{nodes:u,edges:j}=s.current,_=x,[T,v]=j.reduce(([P,A],b)=>{var B;const R=typeof((B=b==null?void 0:b.properties)==null?void 0:B.start)=="string"?new Date(b.properties.start||0).getTime():0;return R!==0&&R<=_+$?P.push(b):A.push(b),[P,A]},[[],[]]),[S,U]=u.reduce(([P,A],b)=>(T.some(R=>R.target===b.ref_id||R.source===b.ref_id)?P.push(b):A.push(b),[P,A]),[[],[]]);s.current={nodes:U,edges:v},(S.length||T.length)&&e({nodes:S,edges:T})}o.current=h}}else o.current=h;r.current=requestAnimationFrame(f)};return r.current=requestAnimationFrame(f),()=>{r.current&&cancelAnimationFrame(r.current)}},[s,e]),t.jsxs(Xe,{children:[t.jsx(Ke,{direction:"row",children:t.jsxs(t.Fragment,{children:[t.jsxs(p,{children:[t.jsx(X,{}),t.jsx(qe,{})]}),t.jsx(Qe,{children:t.jsx(p,{basis:"100%",grow:1,shrink:1,children:t.jsx(ee,{})})})]})}),t.jsx(Je,{children:t.jsx(_e,{markers:a})})]})},Xe=i.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Ke=i(p)`
  flex: 1;
  overflow: hidden;
`,Qe=i(p)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,Je=i(p)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{_t as TweetMindset};
