import{r as m,j as t,s as i,g as p,F as l,o as I,w as N,x as O,A as H,c as L,i as q,q as U,H as V,t as K,y as Q}from"./index-e973aa94.js";import{Universe as X}from"./index-16271629.js";import{d as y,a as J,b as Z,I as ee}from"./index-2f63daf6.js";import{S as te,M as re}from"./index-fad62713.js";import"./index-deebe408.js";import"./VisibilityOn-d8cf0542.js";import"./SourcesTableIcon-51e63513.js";import"./VolumeIcon-70c41611.js";import"./NodeCircleIcon-d2b2f4ea.js";import"./CheckIcon-0f762a51.js";import"./DeleteNodeIcon-a1e9dc8c.js";import"./EditNodeIcon-b91548cf.js";import"./SearchIcon-e15fc77a.js";import"./SoundIcon-13ac3e3d.js";import"./SucessFeedBackIcon-b2aa4a14.js";import"./three.module-1c1ec8b9.js";import"./TextareaAutosize-b8155a01.js";import"./index-77b94ae2.js";import"./index-ffa02f15.js";import"./index-6c40662b.js";import"./ClipLoader-672c568a.js";import"./Skeleton-7d87ceb4.js";import"./Stack-8a40f6c9.js";import"./index-805d2e21.js";import"./FormControlLabel-4ea3a492.js";import"./Typography-004f461a.js";import"./createSvgIcon-66e95734.js";import"./isPlainObject-b35f5010.js";const C=m.memo(()=>{const e=y(s=>s.tweetIsPlaying),n=y(s=>s.setTweetIsPlaying),a=()=>{},r=()=>{},o=()=>{n(!e)};return t.jsxs(se,{children:[t.jsx(ne,{onClick:a,children:t.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),t.jsx(ie,{"data-testid":"play-pause-button",onClick:o,size:"small",children:e?t.jsx(J,{"data-testid":"pause-icon"}):t.jsx(Z,{"data-testid":"play-icon"})}),t.jsx(oe,{onClick:r,children:t.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})});C.displayName="Controls";const se=i(l).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${p.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${p.white};
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
  color: ${p.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${p.DROPDOWN_BG};
  }
`;i.button`
  margin-top: 4px;
  background: ${p.BG1};
  color: ${p.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;const B=m.memo(({type:e,left:n,img:a,start:r,showDate:o})=>{var u,c;const s=I(x=>x.normalizedSchemasByType),g=(u=s[e])==null?void 0:u.primary_color,h=(c=s[e])==null?void 0:c.icon,j=h?`/svg-icons/${h}.svg`:"",w={iconStart:a||j,color:g??p.THING};return t.jsxs(ce,{style:{left:`${n}%`},children:[o&&t.jsx("div",{style:{fontSize:"10px",marginBottom:"80px",position:"absolute"},children:N(r).format("DD/MM/YY HH:mm:ss")}),t.jsx(E,{...w,label:e})]})});B.displayName="Marker";const E=m.memo(({iconStart:e,color:n,label:a})=>t.jsx(ae,{color:n,children:e&&t.jsx("img",{alt:a,className:"badge__img",onError:console.log,src:e})}));E.displayName="Badge";const ae=i(l).attrs({direction:"row"})`
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
  background-color: ${p.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,W=m.memo(({markers:e})=>{if(e.length===0)return null;const n=e.map(s=>s.start?new Date(s.start).getTime():0),a=Math.min(...n),o=Math.max(...n)-a;return t.jsx(t.Fragment,{children:e.map((s,g)=>{var c;const j=((s.start?new Date(s.start).getTime():0)-a)/o*100,w=(s==null?void 0:s.node_type)||"",u=((c=s==null?void 0:s.properties)==null?void 0:c.image_url)||"";return t.jsx(B,{img:u,left:j,showDate:g===0||g===e.length-1,start:s.start||0,type:w},`${s.ref_id}_${g}`)})})});W.displayName="Markers";const le=({duration:e,markers:n,handleProgressChange:a,playingTime:r,tweetPlayingTime:o})=>t.jsxs(de,{children:[t.jsx(xe,{max:e,onChange:a,value:r,width:1}),t.jsx(me,{children:t.jsx(W,{markers:n})}),t.jsx(ue,{children:t.jsx("div",{children:N(o).format("DD/MM/YY HH:mm:ss")})})]}),pe=i(l)`
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
`,ue=i(l)`
  position: absolute;
  left: 50%;
  right: 0;
  bottom: -150%;
  color: white;
`,xe=i(te)`
  && {
    z-index: 20;
    color: ${p.white};
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
      background-color: ${p.primaryBlue};
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
`,D=3e4,ge=({markers:e})=>{const n=y(d=>d.tweetPlayingTime),a=y(d=>d.setTweetPlayingTime),r=y(d=>d.setTweetIsPlaying),o=y(d=>d.setTweetDuration),s=y(d=>d.tweetDuration),g=y(d=>d.tweetIsPlaying),[h,j]=m.useState(0),[w,u]=m.useState(0);m.useEffect(()=>{const d=e.map(P=>P.start?new Date(P.start).getTime():0),f=Math.min(...d),T=Math.max(...d),_=T-f;j(f),u(T),o(_)},[e,o]);const c=m.useRef(null),x=m.useRef(null),v=m.useCallback((d,f)=>{const T=Array.isArray(f)?f[0]:f,_=h+T/100*s;a(_)},[a,h,s]);return m.useEffect(()=>{if(g){x.current=Date.now();const d=()=>{const f=Date.now()-(x.current??Date.now());if(f<D){const T=f/D,_=h+T*s;a(_),c.current=requestAnimationFrame(d)}else a(w),r(!1),cancelAnimationFrame(c.current)};return c.current=requestAnimationFrame(d),()=>cancelAnimationFrame(c.current)}return c.current&&(cancelAnimationFrame(c.current),c.current=null),()=>null},[g,h,w,a,s,r]),t.jsxs(he,{children:[t.jsx(C,{}),t.jsx(le,{duration:100,handleProgressChange:v,markers:e,playingTime:(n-h)/s*100,tweetPlayingTime:n})]})},he=i(l).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${p.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,fe={impression_count:{label:"Impressions",formatter:e=>e.toLocaleString()},like_count:{label:"Likes",formatter:e=>e},reply_count:{label:"Replies",formatter:e=>e},retweet_count:{label:"Retweets",formatter:e=>e},quote_count:{label:"Quotes",formatter:e=>e},bookmark_count:{label:"Bookmarks",formatter:e=>e}},we=({node:e})=>t.jsxs(be,{children:[t.jsx(ye,{children:"Analytics"}),t.jsx(je,{children:Object.entries(fe).map(([n,{label:a,formatter:r}])=>{var o;return((o=e==null?void 0:e.properties)==null?void 0:o[n])!==void 0?t.jsxs(Te,{children:[t.jsx("span",{children:a}),t.jsx(ve,{children:r(e.properties[n]??0)})]},n):null})})]}),be=i.div`
  background: ${p.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`,ye=i.h2`
  color: ${p.white};
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
  color: ${p.GRAY3};
  font-size: 14px;
`,ve=i.span`
  color: ${p.GRAY6};
`,_e=({node:e})=>{const n=e?O(e):null,{text:a,name:r,verified:o,image_url:s,twitter_handle:g}=n||{};return t.jsx(ke,{children:t.jsxs(l,{direction:"column",p:24,children:[t.jsxs(l,{align:"center",direction:"row",pr:16,children:[t.jsx(Ae,{children:t.jsx(H,{rounded:!0,size:58,src:s||"",type:"person"})}),t.jsxs(l,{children:[t.jsxs(Pe,{align:"center",direction:"row",children:[r,o&&t.jsx("div",{className:"verification",children:t.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),g&&t.jsxs(Se,{children:["@",g]})]})]}),t.jsx(l,{grow:1,shrink:1,children:t.jsx($e,{"data-testid":"episode-description",children:a})})]})})},ke=i(l)`
  background: ${p.BG1};
  color: ${p.white};
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: ${p.SEEDQUESTION_HOVER};
  }
  &:active {
    background: ${p.SEEDQUESTION};
  }
`,Ae=i(l)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Pe=i(l)`
  color: ${p.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`,Se=i(l)`
  color: ${p.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,$e=i(l)`
  color: ${p.white};
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
`,Me=()=>{const e=y(n=>n.selectedTweet);return e?t.jsxs(Re,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[t.jsx(De,{children:e&&t.jsx(_e,{node:e})}),t.jsx(we,{node:e})]}):null},Re=i(l)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:re,gap:"10px"}})),De=i(l)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),Ie=e=>{const n=e.edges.filter(r=>{var o;return((o=r==null?void 0:r.properties)==null?void 0:o.start)&&typeof r.properties.start=="string"}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return e.nodes.filter(r=>e.edges.some(o=>o.source===r.ref_id||o.target===r.ref_id)).map(r=>{const o=n.find(s=>r.ref_id===s.source||r.ref_id===s.target);return{...r,start:(o==null?void 0:o.start)||0}}).filter(r=>r&&typeof r.start=="string"&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},mt=()=>{const e=L(u=>u.addNewNode),n=m.useRef(null),a=m.useRef(null),r=m.useRef(null),[o,s]=m.useState([]),{setSchemas:g}=I(u=>u),h=y(u=>u.setSelectedTweet),j=q(),{tweetId:w}=U();return m.useEffect(()=>{(async()=>{try{const c=await K();g(c.schemas.filter(x=>!x.is_deleted))}catch(c){console.error("Error fetching schema:",c)}})()},[g]),m.useEffect(()=>{w&&(async c=>{try{const x=await Q(c),v=x.nodes.find(f=>f.ref_id===w);v&&(h(v),e({nodes:[v],edges:[]}));const d=Ie({nodes:x.nodes,edges:x.edges});s(d),r.current={nodes:x.nodes,edges:x.edges}}catch(x){j("/"),console.error(x)}})(w)},[e,j,w,h]),m.useEffect(()=>{const u=c=>{const{tweetPlayingTime:x,tweetDuration:v}=y.getState(),T=6e3/3e4*100/100*v;if(a.current!==null){if(c-a.current>1e3){if(r.current){const{nodes:P,edges:z}=r.current,F=x,[S,Y]=z.reduce(([k,A],b)=>{var R;return(typeof((R=b==null?void 0:b.properties)==null?void 0:R.start)=="string"?new Date(b.properties.start||0).getTime():0)<=F+T?k.push(b):A.push(b),[k,A]},[[],[]]),[M,G]=P.reduce(([k,A],b)=>(S.some($=>$.target===b.ref_id||$.source===b.ref_id)?k.push(b):A.push(b),[k,A]),[[],[]]);r.current={nodes:G,edges:Y},(M.length||S.length)&&e({nodes:M,edges:S})}a.current=c}}else a.current=c;n.current=requestAnimationFrame(u)};return n.current=requestAnimationFrame(u),()=>{n.current&&cancelAnimationFrame(n.current)}},[r,e]),t.jsxs(Ne,{children:[t.jsx(Ce,{direction:"row",children:t.jsxs(t.Fragment,{children:[t.jsxs(l,{children:[t.jsx(V,{}),t.jsx(Me,{})]}),t.jsx(Be,{children:t.jsx(l,{basis:"100%",grow:1,shrink:1,children:t.jsx(X,{})})})]})}),t.jsx(Ee,{children:t.jsx(ge,{markers:o})})]})},Ne=i.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Ce=i(l)`
  flex: 1;
  overflow: hidden;
`,Be=i(l)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,Ee=i(l)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{mt as TweetMindset};
