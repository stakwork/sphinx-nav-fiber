import{r as x,j as e,s as a,g as p,F as l,o as I,w as N,x as F,A as z,c as H,i as G,q as Y,H as q,t as O,y as U}from"./index-732a1343.js";import{Universe as L}from"./index-c3f983a4.js";import{d as b,a as V,b as Q,I as X}from"./index-8ef9ed2e.js";import{S as K,M as J}from"./index-1cbeb7d5.js";import"./index-4becdc10.js";import"./VisibilityOn-509c7480.js";import"./SourcesTableIcon-243a21c7.js";import"./VolumeIcon-d7996dc8.js";import"./NodeCircleIcon-739cd8f7.js";import"./CheckIcon-821d8dd1.js";import"./DeleteNodeIcon-d8a819fd.js";import"./EditNodeIcon-a57b908a.js";import"./SearchIcon-10d98465.js";import"./SoundIcon-03d6e141.js";import"./SucessFeedBackIcon-b8459fd2.js";import"./three.module-1c1ec8b9.js";import"./TextareaAutosize-392eb35b.js";import"./index-8d3aaf23.js";import"./index-3385d701.js";import"./index-fcffcfd4.js";import"./ClipLoader-e1fcde07.js";import"./Skeleton-ce23c87f.js";import"./Stack-df24a460.js";import"./index-3621f240.js";import"./FormControlLabel-ce9222e8.js";import"./Typography-9b9873a8.js";import"./createSvgIcon-115874f3.js";import"./isPlainObject-b4c9e586.js";const D=x.memo(()=>{const t=b(s=>s.tweetIsPlaying),i=b(s=>s.setTweetIsPlaying),o=()=>{},r=()=>{},c=()=>{i(!t)};return e.jsxs(Z,{children:[e.jsx(te,{onClick:o,children:e.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),e.jsx(ee,{"data-testid":"play-pause-button",onClick:c,size:"small",children:t?e.jsx(V,{"data-testid":"pause-icon"}):e.jsx(Q,{"data-testid":"play-icon"})}),e.jsx(re,{onClick:r,children:e.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})});D.displayName="Controls";const Z=a(l).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,ee=a(X)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,te=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,re=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`;a.div`
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
`;a.button`
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
`;const R=x.memo(({type:t,left:i,img:o,start:r,showDate:c})=>{var m,u;const s=I(n=>n.normalizedSchemasByType),d=(m=s[t])==null?void 0:m.primary_color,y=(u=s[t])==null?void 0:u.icon,h=y?`/svg-icons/${y}.svg`:"",g={iconStart:o||h,color:d??p.THING};return e.jsxs(ie,{style:{left:`${i}%`},children:[(c||!0)&&e.jsx("div",{style:{fontSize:"10px",marginBottom:"80px",position:"absolute"},children:N(r).format("DD/MM/YY HH:mm:ss")}),e.jsx(A,{...g,label:t})]})});R.displayName="Marker";const A=x.memo(({iconStart:t,color:i,label:o})=>e.jsx(se,{color:i,children:t&&e.jsx("img",{alt:o,className:"badge__img",onError:console.log,src:t})}));A.displayName="Badge";const se=a(l).attrs({direction:"row"})`
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
`,ie=a.div`
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
`,B=x.memo(({markers:t})=>{if(t.length===0)return null;const i=t.map(s=>s.start?new Date(s.start).getTime():0),o=Math.min(...i),c=Math.max(...i)-o;return e.jsx(e.Fragment,{children:t.map((s,d)=>{var u;const h=((s.start?new Date(s.start).getTime():0)-o)/c*100,g=(s==null?void 0:s.node_type)||"",m=((u=s==null?void 0:s.properties)==null?void 0:u.image_url)||"";return e.jsx(R,{img:m,left:h,showDate:d===0||d===t.length-1,start:s.start||0,type:g},`${s.ref_id}_${d}`)})})});B.displayName="Markers";const ne=({duration:t,markers:i,handleProgressChange:o,playingTime:r,tweetPlayingTime:c})=>e.jsxs(ae,{children:[e.jsx(pe,{max:t,onChange:o,value:r,width:1}),e.jsx(ce,{children:e.jsx(B,{markers:i})}),e.jsxs(le,{children:[e.jsx("div",{children:c}),e.jsx("div",{children:N(c).format("DD/MM/YY HH:mm:ss")})]})]}),oe=a(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,ae=a(l)`
  position: relative;
  flex: 1 1 100%;

  &:hover {
    ${oe} {
      display: block;
    }
  }
`,ce=a(l)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,le=a(l)`
  position: absolute;
  left: 50%;
  right: 0;
  bottom: -150%;
  color: white;
`,pe=a(K)`
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
      width: ${({width:t})=>`${t}%`};
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
`,M=3e4,de=({markers:t})=>{const i=b(n=>n.tweetPlayingTime),o=b(n=>n.setTweetPlayingTime),r=b(n=>n.setTweetIsPlaying),c=b(n=>n.tweetIsPlaying),s=t.map(n=>n.start?new Date(n.start).getTime():0),d=Math.min(...s),y=Math.max(...s),h=y-d,g=x.useRef(null),m=x.useRef(null),u=x.useCallback((n,f)=>{const j=Array.isArray(f)?f[0]:f,T=d+j/100*h;o(T)},[o,d,h]);return x.useEffect(()=>{if(c){m.current=Date.now();const n=()=>{const f=Date.now()-(m.current??Date.now());if(f<M){const j=f/M,T=d+j*h;o(T),g.current=requestAnimationFrame(n)}else o(y),r(!1),cancelAnimationFrame(g.current)};return g.current=requestAnimationFrame(n),()=>cancelAnimationFrame(g.current)}return g.current&&(cancelAnimationFrame(g.current),g.current=null),()=>null},[c,d,y,o,h,r]),e.jsxs(me,{children:[e.jsx(D,{}),e.jsx(ne,{duration:100,handleProgressChange:u,markers:t,playingTime:(i-d)/h*100,tweetPlayingTime:i})]})},me=a(l).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${p.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,ue={bookmark_count:0,impression_count:1091,like_count:5,quote_count:0,reply_count:11,retweet_count:0},ge=({node:t})=>e.jsx(xe,{children:Object.keys(ue).map(i=>{var o,r;return(o=t==null?void 0:t.properties)!=null&&o[i]?e.jsxs(l,{className:"heading",children:[i,": ",(r=t==null?void 0:t.properties)==null?void 0:r[i]]},i):null})}),xe=a(l)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${p.white};
  background: ${p.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
`,he=({node:t})=>{const i=t?F(t):null,{text:o,name:r,verified:c,image_url:s,twitter_handle:d}=i||{};return e.jsx(fe,{children:e.jsxs(l,{direction:"column",p:24,children:[e.jsxs(l,{align:"center",direction:"row",pr:16,children:[e.jsx(we,{children:e.jsx(z,{rounded:!0,size:58,src:s||"",type:"person"})}),e.jsxs(l,{children:[e.jsxs(ye,{align:"center",direction:"row",children:[r,c&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),d&&e.jsxs(be,{children:["@",d]})]})]}),e.jsx(l,{grow:1,shrink:1,children:e.jsx(je,{"data-testid":"episode-description",children:o})})]})})},fe=a(l)`
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
`,we=a(l)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,ye=a(l)`
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
`,be=a(l)`
  color: ${p.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,je=a(l)`
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
`,Te=()=>{const t=b(i=>i.selectedTweet);return t?e.jsxs(ve,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[e.jsx(ke,{children:t&&e.jsx(he,{node:t})}),e.jsx(ge,{node:t})]}):null},ve=a(l)(({theme:t})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[t.breakpoints.up("sm")]:{width:J,gap:"10px"}})),ke=a(l)(({theme:t})=>({width:"100%",marginBottom:"20px",[t.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),_e=t=>{const i=t.edges.filter(r=>{var c;return(c=r==null?void 0:r.properties)==null?void 0:c.start}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return t.nodes.filter(r=>t.edges.some(c=>c.source===r.ref_id||c.target===r.ref_id)).map(r=>{const c=i.find(s=>r.ref_id===s.source||r.ref_id===s.target);return{...r,start:(c==null?void 0:c.start)||0}}).filter(r=>r&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},it=()=>{const t=H(m=>m.addNewNode),i=x.useRef(null),o=x.useRef(null),r=x.useRef(null),[c,s]=x.useState([]),{setSchemas:d}=I(m=>m),y=b(m=>m.setSelectedTweet),h=G(),{tweetId:g}=Y();return x.useEffect(()=>{(async()=>{try{const u=await O();d(u.schemas.filter(n=>!n.is_deleted))}catch(u){console.error("Error fetching schema:",u)}})()},[d]),x.useEffect(()=>{g&&(async u=>{try{const n=await U(u),f=n.nodes.find(T=>T.ref_id===g);f&&(y(f),t({nodes:[f],edges:[]}));const j=_e({nodes:n.nodes,edges:n.edges});s(j),r.current={nodes:n.nodes,edges:n.edges}}catch(n){h("/"),console.error(n)}})(g)},[t,h,g,y]),x.useEffect(()=>{const m=u=>{const{tweetPlayingTime:n}=b.getState();if(o.current!==null){if(u-o.current>1e3){if(r.current){const{nodes:j,edges:T}=r.current,C=n,[_,W]=T.reduce(([v,k],w)=>{var S;return(typeof((S=w==null?void 0:w.properties)==null?void 0:S.start)=="string"?new Date(w.properties.start||0).getTime():0)<=C+3e3?v.push(w):k.push(w),[v,k]},[[],[]]),[P,E]=j.reduce(([v,k],w)=>(_.some($=>$.target===w.ref_id||$.source===w.ref_id)?v.push(w):k.push(w),[v,k]),[[],[]]);r.current={nodes:E,edges:W},(P.length||_.length)&&t({nodes:P,edges:_})}o.current=u}}else o.current=u;i.current=requestAnimationFrame(m)};return i.current=requestAnimationFrame(m),()=>{i.current&&cancelAnimationFrame(i.current)}},[r,t]),e.jsxs($e,{children:[e.jsx(Pe,{direction:"row",children:e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(q,{}),e.jsx(Te,{})]}),e.jsx(Se,{children:e.jsx(l,{basis:"100%",grow:1,shrink:1,children:e.jsx(L,{})})})]})}),e.jsx(Me,{children:e.jsx(de,{markers:c})})]})},$e=a.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Pe=a(l)`
  flex: 1;
  overflow: hidden;
`,Se=a(l)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,Me=a(l)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{it as TweetMindset};
