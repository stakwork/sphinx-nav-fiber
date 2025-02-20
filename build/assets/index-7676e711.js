import{r as m,j as t,s as i,g as c,F as p,o as N,w as F,x as G,A as Y,c as O,i as q,q as H,H as L,t as U,y as V}from"./index-84587b0b.js";import{Universe as Q}from"./index-28222bd7.js";import{d as y,a as X,b as K,I as J}from"./index-f2a2cc46.js";import{S as Z,M as ee}from"./index-f55481fa.js";import"./index-47d2b93e.js";import"./VisibilityOn-4beb82bc.js";import"./SourcesTableIcon-400c56f2.js";import"./VolumeIcon-cef1a9a1.js";import"./NodeCircleIcon-0248a864.js";import"./CheckIcon-9eafd192.js";import"./DeleteNodeIcon-3fc18938.js";import"./EditNodeIcon-4bce0b48.js";import"./SearchIcon-d01a5991.js";import"./SoundIcon-b7042f56.js";import"./SucessFeedBackIcon-e3b11636.js";import"./three.module-1c1ec8b9.js";import"./TextareaAutosize-0c083e2b.js";import"./index-bf37d98f.js";import"./index-8d793b11.js";import"./index-92507fc6.js";import"./ClipLoader-607065d5.js";import"./Skeleton-cc0ebb26.js";import"./Stack-e8d8b3fe.js";import"./index-2d960a89.js";import"./FormControlLabel-bf377359.js";import"./Typography-f12478f1.js";import"./createSvgIcon-d7ac8fdc.js";import"./isPlainObject-ad8c1ab0.js";const A=3e4,B=m.memo(()=>{const e=y(s=>s.tweetIsPlaying),n=y(s=>s.setTweetIsPlaying),a=()=>{},r=()=>{},o=()=>{n(!e)};return t.jsxs(te,{children:[t.jsx(se,{onClick:a,children:t.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),t.jsx(re,{"data-testid":"play-pause-button",onClick:o,size:"small",children:e?t.jsx(X,{"data-testid":"pause-icon"}):t.jsx(K,{"data-testid":"play-icon"})}),t.jsx(ie,{onClick:r,children:t.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})});B.displayName="Controls";const te=i(p).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,re=i(J)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,se=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,ie=i.div`
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
`;const D=m.memo(({type:e,left:n,img:a})=>{var j,h;const r=N(x=>x.normalizedSchemasByType),o=(j=r[e])==null?void 0:j.primary_color,s=(h=r[e])==null?void 0:h.icon,u=s?`/svg-icons/${s}.svg`:"",w={iconStart:a||u,color:o??c.THING};return t.jsx(oe,{style:{left:`${n}%`},children:t.jsx(C,{...w,label:e})})});D.displayName="Marker";const C=m.memo(({iconStart:e,color:n,label:a})=>t.jsx(ne,{color:n,children:e&&t.jsx("img",{alt:a,className:"badge__img",onError:console.log,src:e})}));C.displayName="Badge";const ne=i(p).attrs({direction:"row"})`
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
`,oe=i.div`
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
`,E=m.memo(({markers:e})=>{if(e.length===0)return null;const n=e.map(s=>s.start?new Date(s.start).getTime():0),a=Math.min(...n),o=Math.max(...n)-a;return t.jsx(t.Fragment,{children:e.map((s,u)=>{var d;const j=((s.start?new Date(s.start).getTime():0)-a)/o*100,h=(s==null?void 0:s.node_type)||"",x=((d=s==null?void 0:s.properties)==null?void 0:d.image_url)||"";return t.jsx(D,{img:x,left:j,type:h},`${s.ref_id}_${u}`)})})});E.displayName="Markers";const ae=({duration:e,markers:n,handleProgressChange:a,playingTime:r,tweetPlayingTime:o})=>{const u=F(o).format("MMM D - h:mma");return t.jsxs(le,{children:[t.jsx(de,{style:{left:`${r}%`},children:u}),t.jsx(me,{max:e,onChange:a,value:r,width:1}),t.jsx(pe,{children:t.jsx(E,{markers:n})})]})},ce=i(p)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,le=i(p)`
  position: relative;
  flex: 1 1 100%;

  &:hover {
    ${ce} {
      display: block;
    }
  }
`,pe=i(p)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,de=i.div`
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
`,me=i(Z)`
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
`,xe=({markers:e})=>{const n=y(l=>l.tweetPlayingTime),a=y(l=>l.setTweetPlayingTime),r=y(l=>l.setTweetIsPlaying),o=y(l=>l.setTweetDuration),s=y(l=>l.tweetDuration),u=y(l=>l.tweetIsPlaying),[w,j]=m.useState(0),[h,x]=m.useState(0);m.useEffect(()=>{const l=e.map(P=>P.start?new Date(P.start).getTime():0),f=Math.min(...l),T=Math.max(...l),k=T-f;j(f),x(T),o(k)},[e,o]);const d=m.useRef(null),g=m.useRef(null),v=m.useCallback((l,f)=>{const T=Array.isArray(f)?f[0]:f,k=w+T/100*s;a(k)},[a,w,s]);return m.useEffect(()=>{if(u){g.current=Date.now();const l=()=>{const f=Date.now()-(g.current??Date.now());if(f<A){const T=f/A,k=w+T*s;a(k),d.current=requestAnimationFrame(l)}else a(h),r(!1),cancelAnimationFrame(d.current)};return d.current=requestAnimationFrame(l),()=>cancelAnimationFrame(d.current)}return d.current&&(cancelAnimationFrame(d.current),d.current=null),()=>null},[u,w,h,a,s,r]),t.jsxs(ue,{children:[t.jsx(B,{}),t.jsx(ae,{duration:100,handleProgressChange:v,markers:e,playingTime:(n-w)/s*100,tweetPlayingTime:n})]})},ue=i(p).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${c.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,ge={impression_count:{label:"Impressions",formatter:e=>e.toLocaleString()},like_count:{label:"Likes",formatter:e=>e},reply_count:{label:"Replies",formatter:e=>e},retweet_count:{label:"Retweets",formatter:e=>e},quote_count:{label:"Quotes",formatter:e=>e},bookmark_count:{label:"Bookmarks",formatter:e=>e}},he=({node:e})=>t.jsxs(fe,{children:[t.jsx(we,{children:"Analytics"}),t.jsx(be,{children:Object.entries(ge).map(([n,{label:a,formatter:r}])=>{var o;return((o=e==null?void 0:e.properties)==null?void 0:o[n])!==void 0?t.jsxs(ye,{children:[t.jsx("span",{children:a}),t.jsx(je,{children:r(e.properties[n]??0)})]},n):null})})]}),fe=i.div`
  background: ${c.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`,we=i.h2`
  color: ${c.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 0;
`,be=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,ye=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${c.GRAY3};
  font-size: 14px;
`,je=i.span`
  color: ${c.GRAY6};
`,Te=({node:e})=>{const n=e?G(e):null,{text:a,name:r,verified:o,image_url:s,twitter_handle:u}=n||{};return t.jsx(ve,{children:t.jsxs(p,{direction:"column",p:24,children:[t.jsxs(p,{align:"center",direction:"row",pr:16,children:[t.jsx(ke,{children:t.jsx(Y,{rounded:!0,size:58,src:s||"",type:"person"})}),t.jsxs(p,{children:[t.jsxs(_e,{align:"center",direction:"row",children:[r,o&&t.jsx("div",{className:"verification",children:t.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),u&&t.jsxs($e,{children:["@",u]})]})]}),t.jsx(p,{grow:1,shrink:1,children:t.jsx(Se,{"data-testid":"episode-description",children:a})})]})})},ve=i(p)`
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
`,ke=i(p)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,_e=i(p)`
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
`,$e=i(p)`
  color: ${c.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Se=i(p)`
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
`,Pe=()=>{const e=y(n=>n.selectedTweet);return e?t.jsxs(Me,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsx(Ae,{children:e&&t.jsx(Te,{node:e})}),t.jsx(he,{node:e})]}):null},Me=i(p)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:ee,gap:"10px"}})),Ae=i(p)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),Re=e=>{const n=e.edges.filter(r=>{var o;return((o=r==null?void 0:r.properties)==null?void 0:o.start)&&typeof r.properties.start=="string"}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return e.nodes.filter(r=>e.edges.some(o=>o.source===r.ref_id||o.target===r.ref_id)).map(r=>{const o=n.find(s=>r.ref_id===s.source||r.ref_id===s.target);return{...r,start:(o==null?void 0:o.start)||0}}).filter(r=>r&&typeof r.start=="string"&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},pt=()=>{const e=O(x=>x.addNewNode),n=m.useRef(null),a=m.useRef(null),r=m.useRef(null),[o,s]=m.useState([]),{setSchemas:u}=N(x=>x),w=y(x=>x.setSelectedTweet),j=q(),{tweetId:h}=H();return m.useEffect(()=>{(async()=>{try{const d=await U();u(d.schemas.filter(g=>!g.is_deleted))}catch(d){console.error("Error fetching schema:",d)}})()},[u]),m.useEffect(()=>{h&&(async d=>{try{const g=await V(d),v=g.nodes.find(f=>f.ref_id===h);v&&(w(v),e({nodes:[v],edges:[]}));const l=Re({nodes:g.nodes,edges:g.edges});s(l),r.current={nodes:g.nodes,edges:g.edges}}catch(g){j("/"),console.error(g)}})(h)},[e,j,h,w]),m.useEffect(()=>{const x=d=>{const{tweetPlayingTime:g,tweetDuration:v}=y.getState(),l=v/A*3e3;if(a.current!==null){if(d-a.current>1e3){if(r.current){const{nodes:T,edges:k}=r.current,P=g,[M,z]=k.reduce(([_,$],b)=>{var I;const S=typeof((I=b==null?void 0:b.properties)==null?void 0:I.start)=="string"?new Date(b.properties.start||0).getTime():0;return S!==0&&S<=P+l?_.push(b):$.push(b),[_,$]},[[],[]]),[R,W]=T.reduce(([_,$],b)=>(M.some(S=>S.target===b.ref_id||S.source===b.ref_id)?_.push(b):$.push(b),[_,$]),[[],[]]);r.current={nodes:W,edges:z},(R.length||M.length)&&e({nodes:R,edges:M})}a.current=d}}else a.current=d;n.current=requestAnimationFrame(x)};return n.current=requestAnimationFrame(x),()=>{n.current&&cancelAnimationFrame(n.current)}},[r,e]),t.jsxs(Ie,{children:[t.jsx(Ne,{direction:"row",children:t.jsxs(t.Fragment,{children:[t.jsxs(p,{children:[t.jsx(L,{}),t.jsx(Pe,{})]}),t.jsx(Be,{children:t.jsx(p,{basis:"100%",grow:1,shrink:1,children:t.jsx(Q,{})})})]})}),t.jsx(De,{children:t.jsx(xe,{markers:o})})]})},Ie=i.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Ne=i(p)`
  flex: 1;
  overflow: hidden;
`,Be=i(p)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,De=i(p)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{pt as TweetMindset};
