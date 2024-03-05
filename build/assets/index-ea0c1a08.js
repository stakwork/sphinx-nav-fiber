import{s as r,c as i,F as s,j as e,T,h as ee,r as d,u as xe,P as de,d as ze,f as Ee}from"./index-2d5c8145.js";import{A as E,u as R,b as P,ai as pe,aj as Re,B as z,t as Pe,ak as X,al as Ae,a as A,l as Me,I as he,c as U,v as ue,P as te,K as Le,am as ye,an as Ge,e as Ne,d as De}from"./react-toastify.esm-7361992a.js";import{G as ge,L as se,B as oe,H as Fe,u as Ye,S as Oe,a as Ve,D as He,M as We,R as Ue,b as Qe,c as qe,d as Ke,N as fe,C as Xe,e as me,f as we,g as Ze,h as Je,i as je,j as et,P as tt,k as Q,l as be,s as re,V as st,F as ot,E as it,m as nt,n as rt,o as ke,p as at,q as lt,r as ct,t as xt,v as dt,w as pt,x as ht,y as ut,z as yt}from"./SoundIcon-8b742ca8.js";import{C as gt,S as ft}from"./ChevronUpIcon-f76033e9.js";import{f as W,o as ve,n as mt,X as wt,Y as jt,T as bt,D as kt,S as ie,q as Se}from"./generateCategoricalChart-8a3679da.js";import{T as V}from"./index-03c77bf1.js";import{S as vt}from"./Skeleton-9c903d5a.js";import{T as ae}from"./toastMessage-6ac726d4.js";import{g as St,d as Ct}from"./index.esm-60620dce.js";import{T as Tt,F as $t}from"./Popover-db8957de.js";import{I as _t,S as Bt,O as It}from"./Select-5a882e09.js";import{C as zt}from"./CheckIcon-3dcf59e1.js";import{I as Et}from"./InfoIcon-de0a2952.js";import{C as ne}from"./ClipLoader-4cf451e4.js";import{P as Rt}from"./PlusIcon-0bbc5baf.js";import{u as J}from"./index-9d01024a.js";import{B as Pt}from"./index-f465290e.js";import"./useSlotProps-a9ecde52.js";const At=({imageUrl:t,name:o})=>e.jsxs(s,{align:"center",direction:"row",children:[t&&e.jsx(Mt,{children:e.jsx(E,{rounded:!0,size:64,src:t||"",type:"image"})}),o&&e.jsx(Lt,{children:o})]}),Mt=r(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Lt=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Gt=({text:t,type:o,sourceLink:n})=>e.jsxs(s,{direction:"column",children:[e.jsx(s,{align:"center",direction:"row",children:e.jsx(V,{type:o})}),e.jsx(Te,{"data-testid":"episode-description",children:t}),e.jsx(s,{align:"center",direction:"row",justify:"flex-start",children:n&&e.jsxs(Nt,{href:n,onClick:a=>a.stopPropagation(),target:"_blank",children:[e.jsx(ge,{}),e.jsx(Dt,{children:n})]})})]}),Nt=r.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Dt=r(T)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${i.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Ft=({title:t,imageUrl:o,name:n})=>e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(Yt,{children:e.jsx(E,{rounded:!0,size:64,src:o||"",type:"person"})}),(t||n)&&e.jsx(Ot,{children:t||n})]}),Yt=r(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Ot=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Vt=({text:t,imageUrl:o,date:n,twitterHandle:a,name:c,verified:x})=>e.jsxs(s,{direction:"column",children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx(Ht,{children:e.jsx(E,{rounded:!0,size:27,src:o||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(Wt,{align:"center",direction:"row",children:[c,x&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&e.jsxs(Ut,{children:["@",a]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Qt,{"data-testid":"episode-description",children:t}),e.jsx(s,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!n&&e.jsx(q,{children:ee.unix(n).fromNow()})})]})]}),Ht=r(s)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Wt=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
  .verification {
    margin-left: 4px;
  }
`,Ut=r(s)`
  color: ${i.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,Qt=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0.2px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`,qt=r(s).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${i.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
  .player-controls {
    margin-left: 4px;
  }
`,Ce=({boostCount:t,date:o,episodeTitle:n,isSelectedView:a=!1,imageUrl:c,showTitle:x,type:l,text:g,name:f,profilePicture:p,sourceLink:m,verified:k=!1,twitterHandle:u,className:j="episode-wrapper",onClick:v})=>{const y=l==="show"?x:n,$=l==="show"?"":x,b=["tweet","person","guest","topic","document"],h=l==="youtube"?"video":"audio";return l?e.jsx(qt,{className:j,onClick:v,children:b.includes(l)?e.jsxs(e.Fragment,{children:[l==="topic"&&e.jsxs(Kt,{children:[e.jsx(Fe,{}),e.jsx("p",{children:$})]}),["person","guest"].includes(l)&&e.jsx(Ft,{imageUrl:c,name:f||"",title:x||""}),["image"].includes(l)&&e.jsx(At,{imageUrl:m,name:f||""}),l==="tweet"&&e.jsx(Vt,{date:o,imageUrl:p,name:f||"",text:g||"",twitterHandle:u,verified:k}),l==="document"&&e.jsx(Gt,{sourceLink:m||"",text:g||"",type:l})]}):e.jsxs(s,{direction:"row",children:[!a&&e.jsx(s,{align:"center",pr:16,children:e.jsx(E,{size:64,src:c||`${h}_default.svg`,type:l||""})}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(s,{align:"center",direction:"row",justify:"space-between",children:[e.jsx(s,{align:"center",direction:"row",children:l&&e.jsx(V,{type:l})}),l==="youtube"&&m?e.jsx(Zt,{href:`${m}?open=system`,onClick:_=>_.stopPropagation(),children:e.jsx(se,{})}):null]}),e.jsx(Te,{"data-testid":"episode-description",children:y}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",children:[!!o&&e.jsx(q,{children:ee.unix(o).fromNow()}),!!$&&e.jsx(Xt,{children:$}),!a&&t>0&&e.jsx(s,{style:{marginLeft:"auto"},children:e.jsx(oe,{amt:t})})]})]})]})}):null},Te=r(s)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: ${i.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
`,q=r(T)`
  overflow: hidden;
  color: ${i.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
  letter-spacing: 0.2pt;
`,Kt=r.div`
  display: flex;
  flex-direction: row;

  svg {
    color: ${i.mainBottomIcons};
    margin-right: 10px;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
    color: var(--Primary-Text, #fff);
    leading-trim: both;
    text-edge: cap;
    text-overflow: ellipsis;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 100% */
  }
`,Xt=r(q)`
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  padding-left: 12px;
  &:before {
    content: '';
    display: block;
    border-radius: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2px;
    width: 4px;
    flex-shrink: 0;
    height: 4px;
    background: ${i.GRAY6};

    margin-top: 20px;
  }

  &.is-show {
    margin: 20px 0px;
    padding: 0px;
    color: var(--Primary-Text, #fff);
    leading-trim: both;
    text-edge: cap;
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 17px; /* 130.769% */
  }
`,Zt=r.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
`,Jt=({isSearchResult:t})=>{const o=d.useRef(null),n=t?80:10,[a,c]=R(b=>[b.setSelectedNode,b.setSelectedTimestamp]),[x,l,g]=P(b=>[b.currentSearch,b.setSidebarOpen,b.setRelevanceSelected]),[f,p]=d.useState(0),m=pe(),u=f*n+n,j=m&&m.length>0?m.length-1>u:!1,v=Ye("sm","down"),y=d.useMemo(()=>{if(m){const b=[...m].sort((h,_)=>(_.date||0)-(h.date||0));return x&&b.sort((h,_)=>{const M=h.node_type==="topic"&&h.name.toLowerCase()===x.toLowerCase()?1:0;return(_.node_type==="topic"&&_.name.toLowerCase()===x.toLowerCase()?1:0)-M}),b.slice(0,u)}return[]},[m,u,x]),$=d.useCallback(b=>{Re(b),c(b),g(!0),a(b),v&&l(!1)},[a,g,l,c,v]);return e.jsx(e.Fragment,{children:e.jsxs(Oe,{ref:o,id:"search-result-list",shrink:1,children:[(y??[]).map((b,h)=>{const{image_url:_,date:M,boost:I,type:Y,episode_title:O,show_title:N,node_type:w,text:C,source_link:D,link:F,name:G,profile_picture:S,verified:B=!1,twitter_handle:L}=b||{};return e.jsx(Ce,{boostCount:I||0,date:M||0,episodeTitle:W(O),imageUrl:_||"",link:F,name:G||"",onClick:()=>{$(b)},profilePicture:S,showTitle:W(N),sourceLink:D,text:C||"",twitterHandle:L,type:w||Y,verified:B},h.toString())}),e.jsx(ts,{align:"center",background:"BG1",direction:"row",justify:"center",children:j&&e.jsx(z,{onClick:()=>{j&&p(f+1)},size:"medium",children:"Load More"})})]})})},es=d.memo(Jt),ts=r(s)`
  flex: 0 0 86px;
`,ss=({isSearchResult:t})=>{const[o,n,a]=xe(l=>[l.nodeCount,l.setNodeCount,l.setBudget]),[c]=R(l=>[l.fetchData]),x=async()=>{o<1||(await c(a,{skip_cache:"true"}),n("CLEAR"))};return e.jsxs(ns,{children:[!t&&e.jsxs("div",{className:"heading-container",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"heading__title",children:"Latest"}),e.jsx("span",{className:"heading__icon",children:e.jsx(Ve,{})})]}),o?e.jsx("div",{className:"button_container",children:e.jsx(os,{className:"button",onClick:x,startIcon:e.jsx(He,{}),children:`See Latest (${o})`})}):null]}),e.jsx(es,{isSearchResult:t})]})},os=r(z)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${i.GRAY6};
    }
  }
`,is=d.memo(ss),ns=r(s)`
  .heading-container {
    display: flex;
    flex-direction: column;
    padding: 16px 24px 16px 24px;
  }

  .heading {
    color: ${i.GRAY6};
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &__icon {
      margin-left: 14px;
      margin-bottom: -2px;
      font-size: 24px;
    }
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${i.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${i.SECONDARY_BLUE};
      }

      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${i.PRIMARY_BLUE};
      }
    }
  }
`,rs=r(s).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${i.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
  .player-controls {
    margin-left: 4px;
  }

  .title {
    margin: 20px 0 8px;
  }
`,H=r(vt)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,as=()=>e.jsx(e.Fragment,{children:Array(7).fill(null).map((t,o)=>e.jsx(rs,{children:e.jsxs(s,{direction:"row",children:[e.jsx(s,{align:"center",pr:16,children:e.jsx(H,{animation:"wave",height:64,variant:"rectangular",width:64})}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(H,{height:10,variant:"rectangular",width:56}),e.jsx(H,{className:"title",height:10,variant:"rectangular",width:262}),e.jsx(H,{height:10,variant:"rectangular",width:149})]})]})},o))});r(s)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${i.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`;const ls=r(T)`
  overflow: hidden;
  color: ${i.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`;r(ls)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:before {
    content: '';
    display: block;
    border-radius: 2px;
    margin-right: 8px;
    width: 4px;
    flex-shrink: 0;
    height: 4px;
    background: ${i.GRAY6};
  }
`;const cs=48,xs=8,ds={PaperProps:{style:{maxHeight:cs*4.5+xs,width:250}}},ps=["Beginner","Intermediate","Advanced","Expert"],hs=()=>{const t=R(h=>h.data),[o,n]=d.useState(""),[a,c]=d.useState("Beginner"),x=P(h=>h.currentSearch),l=Pe(),[g]=xe(h=>[h.setBudget]),[f,p,m,k,u]=ve(h=>[h.askedQuestions,h.askedQuestionsAnswers,h.setAskedQuestion,h.setAskedQuestionAnswer,h.hasQuestionInProgress]),j=d.useCallback(h=>{k(h.answer),X(e.jsx(ae,{message:"Response is ready"}),{position:X.POSITION.BOTTOM_CENTER,type:"success"})},[k]);d.useEffect(()=>{l&&j&&l.on("askquestionhook",j)},[j,l]);const v=async()=>{o&&(m(o),n(""));try{const h=t==null?void 0:t.nodes.filter(I=>I.text),_=h==null?void 0:h.slice(0,5),M=(_!=null&&_.length?_.map(I=>I.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,I=>`\\${I}`);x&&(await ze.enable(),await Ae({expertise_level:a,question_text:o,search_term:x,transcripts:M},g),await Ee(g),X(e.jsx(ae,{message:"We started preparing response for you"}),{type:"success"}))}catch(h){console.error(h)}},y=a&&o.trim()&&!u,$=h=>{c(h.target.value)},b=async h=>{if(u){h.preventDefault();return}h.keyCode===13&&h.shiftKey===!1&&y&&(h.preventDefault(),v())};return e.jsxs(us,{children:[e.jsx(s,{children:e.jsx(s,{children:e.jsxs($t,{component:"div",children:[e.jsx(gs,{id:"select-label",size:"small",children:"Expertise level"}),e.jsx(fs,{id:"demo-multiple-name",input:e.jsx(It,{label:"Expertise level"}),labelId:"select-label",MenuProps:ds,onChange:$,size:"small",value:a,children:ps.map(h=>e.jsx(We,{component:"li",value:h,children:h},h))})]})})}),e.jsx(js,{children:f==null?void 0:f.map((h,_)=>e.jsxs(s,{className:"response",py:12,children:[e.jsx(T,{kind:"medium",children:h}),e.jsx(s,{py:12,children:(p==null?void 0:p[_])!==void 0?e.jsx(T,{color:"unreadMsgText",children:p[_]}):e.jsxs(s,{align:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(de,{color:i.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx(T,{children:"Generating response"})})]})})]},h))}),e.jsxs(ms,{onKeyDown:b,py:12,tabIndex:-1,children:[e.jsx(ys,{disabled:u,onChange:h=>n(h.target.value),placeholder:"Enter your question",value:o}),e.jsx(ws,{children:e.jsx(St,{color:y?i.white:i.gray300,size:"18"})})]})]})},us=r.div`
  margin-top: 20px;
`,ys=r(Tt)`
  background: ${i.inputBg1};
  max-width: 100%;
  color: ${i.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,gs=r(_t)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${i.secondaryText4};
  }
`,fs=r(Bt)`
  .MuiInputBase-root {
    color: blue;
  }
  background: ${i.inputBg1};

  .MuiSvgIcon-root {
    color: ${i.white};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
    color: ${i.white};
  }
`,ms=r(s)`
  position: relative;
`,ws=r(s)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,js=r(s)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${i.divider2};
  }
`,le=({text:t})=>e.jsxs(s,{align:"center",justify:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(de,{color:i.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx(T,{children:t})})]}),bs=()=>{const[t,o,n,a]=ve(x=>[x.teachMeAnswer,x.hasTeachingInProgress,x.instgraphAnswser,x.hasInstagraphInProgress]),c=!a&&!!(n!=null&&n.edges)&&!!(n!=null&&n.nodes);return e.jsxs(e.Fragment,{children:[c?e.jsx(Ue,{edges:n==null?void 0:n.edges,nodes:n==null?void 0:n.nodes}):e.jsx(le,{text:"Generating instagraph"}),o?e.jsx(le,{text:"Generating tutorial"}):e.jsxs(e.Fragment,{children:[e.jsx(ks,{children:e.jsx(T,{children:t})}),e.jsx(hs,{})]})]})};r(z)``;const ks=r(s)`
  padding-left: 10px;
  padding-right: 10px;
`,vs=({cx:t,cy:o})=>e.jsx(kt,{cx:t,cy:o,fill:i.blueTextAccent,r:2}),Ss=()=>{const t=A(),o=[...(t==null?void 0:t.data)||[]].sort((c,x)=>(c.year||0)-(x.year||0)),n=o.map(c=>c.year).filter(c=>c),a=o.map(c=>c.rate).filter(c=>c);return e.jsx(Cs,{direction:"column",px:24,py:16,children:e.jsx(Qe,{height:"100%",width:"100%",children:e.jsxs(qe,{margin:{bottom:20,left:20,right:20,top:20},children:[e.jsx(mt,{stroke:"#f5f5f5"}),e.jsx(wt,{dataKey:"year",domain:[Math.min(...n),Math.max(...n)],label:{fill:i.white,fontSize:"12px",offset:-10,position:"insideBottom",value:t.x_axis_name},name:"X",tick:{fill:i.white,fontSize:"8px"},type:"number"}),e.jsx(jt,{color:"#000",dataKey:"rate",domain:[Math.min(...a),Math.max(...a)],label:{angle:-90,fill:i.white,fontSize:"12px",offset:0,position:"insideLeft",value:t.y_axis_name},name:"Y",tick:{fill:i.white,fontSize:"8px"},type:"number"}),e.jsx(bt,{cursor:{strokeDasharray:"3 3"}}),e.jsx(Ke,{data:o,fill:i.blueTextAccent,line:!0,name:"A scatter",shape:e.jsx(vs,{})})]})})})},Cs=r(s)`
  width: 100%;
  height: 100%;
`;function K(t,o){if(!(o!=null&&o.trim()))return t;const n=new RegExp(`(${o})`,"gi"),a=t.split(n);return e.jsx(e.Fragment,{children:a.map((c,x)=>n.test(c)?e.jsx(Ts,{children:c},x):c)})}const Ts=r.span`
  background-color: rgba(0, 123, 255, 0.4);
  padding: 2;
  margin: 0;
  border-radius: 3px;
  color: inherit;
`,$s=({stateless:t,node:o,searchTerm:n})=>e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Bs,{children:t&&e.jsxs(_s,{children:[e.jsx("div",{className:"icon",children:e.jsx(fe,{})}),e.jsx("div",{className:"title",children:"Description"})]})}),e.jsx(T,{children:o!=null&&o.description?K(o.description,n):"..."})]}),_s=r(s).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${i.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${i.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,Bs=r(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Is=r.span`
  color: ${i.white};
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`,zs=({stateless:t,node:o})=>{var v;const[n,a]=P(y=>[y.transcriptIsOpen,y.setTranscriptOpen]),[c,x]=d.useState(!1),[l,g]=d.useState(""),[f,p]=d.useState(!1);if(!t&&!n)return null;const m="https://knowledge-graph.sphinx.chat",k=async y=>{try{const $=await fetch(`${m}/node/text/${y}`);if(!$.ok)throw new Error("Network response was not ok");const b=await $.json();g(b.data.text),p(!0)}catch($){console.error("Error fetching full transcript",$)}},u=()=>{f?p(!1):o!=null&&o.ref_id&&k(o.ref_id)},j=y=>{y!==void 0&&(navigator.clipboard.writeText(y),x(!0))};return e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(Rs,{children:[t&&e.jsxs(Es,{children:[e.jsx("div",{className:"icon",children:e.jsx(fe,{})}),e.jsx("div",{className:"title",children:"Transcript"})]}),o!=null&&o.text?e.jsx(e.Fragment,{children:c?e.jsxs(Ms,{align:"center",direction:"row",justify:"flex-start",children:[e.jsx("div",{className:"icon",children:e.jsx(zt,{})}),e.jsx("div",{className:"text",children:"Copied"})]}):e.jsx(z,{endIcon:e.jsx(Xe,{}),onPointerDown:()=>j(o==null?void 0:o.text),size:"small",variant:"outlined",children:"Copy"})}):e.jsx("div",{}),!t&&e.jsx(Ps,{onClick:()=>{a(!1)},children:e.jsx(Ct,{fontSize:35})})]}),e.jsxs(As,{children:[f?l:`${(v=o==null?void 0:o.text)==null?void 0:v.substring(0,100)}...`,e.jsx(Is,{onClick:u,children:f?"less":"more"})]})]})},Es=r(s).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${i.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${i.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,Rs=r(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Ps=r(s).attrs({})`
  color: ${i.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${i.lightBlue500};
  }
`,As=r(s)`
  color: ${i.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Ms=r(s)`
  color: ${i.SECONDARY_BLUE};
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  height: 28px;
  padding: 0 20px;
  .text {
    margin-left: 5px;
  }

  .icon {
    font-size: 12px;
  }
`,$e=({node:t})=>{const o=R(y=>y.selectedNode),n=P(y=>y.currentSearch),{link:a,image_url:c,date:x,boost:l,node_type:g,type:f,id:p,show_title:m,episode_title:k,ref_id:u}=t||o||{},[j,v]=d.useState(l||0);return o?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(Ls,{children:[e.jsx(Ns,{boostCount:j||0,date:x||0,episodeTitle:W(k),imageUrl:c,isSelectedView:!0,link:a,onClick:()=>null,showTitle:m,type:g||f}),e.jsx(Z,{}),e.jsxs(Gs,{children:[e.jsx(oe,{amt:j}),e.jsx(we,{content:o,count:j,refId:u,updateCount:v})]}),e.jsx(Z,{}),e.jsx(ce,{children:e.jsx($s,{node:o,searchTerm:n,stateless:!0})}),e.jsx(Z,{}),e.jsx(ce,{children:e.jsx(zs,{node:o,stateless:!0},p)})]})}):null},Ls=r(s)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,Gs=r(s)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,ce=r(s)`
  padding: 18px 18px 18px;
`,Ns=r(Ce)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,Z=r(me)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,Ds=r(s)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);

  .episode-title {
    font-size: 20px;
    font-weight: 600;
    color: ${i.white};
  }

  .show {
    cursor: pointer;
    &__title {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${i.white};
      margin-left: 8px;
    }
  }
`,Fs=({selectedNodeShow:t})=>{const[o,n]=R(x=>[x.selectedNode,x.setSelectedNode]),{type:a}=o||{},c=P(x=>x.currentSearch);return e.jsxs(Ds,{p:20,children:[e.jsx(s,{align:"flex-start",children:a&&e.jsx(V,{type:a})}),e.jsx(s,{direction:"row",mb:22,mt:22,children:e.jsx(s,{grow:1,shrink:1,children:e.jsx(T,{className:"episode-title",kind:"heading",children:K((o==null?void 0:o.episode_title)||"Unknown",c)})})}),t?e.jsxs(s,{className:"show",direction:"row",onClick:()=>n(t),children:[e.jsx(E,{size:16,src:(t==null?void 0:t.image_url)||"",type:"show"}),e.jsx(T,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:t==null?void 0:t.show_title})]}):null]})},Ys="Flow 1",Os=0,Vs=12,Hs=15,Ws={g:"LottieFiles Figma v45"},Us=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],Qs="5.7.0",qs=60,Ks=57.6,Xs=0,Zs=[],Js={nm:Ys,ddd:Os,h:Vs,w:Hs,meta:Ws,layers:Us,v:Qs,fr:qs,op:Ks,ip:Xs,assets:Zs},eo=()=>{const t=d.useRef(null);return d.useEffect(()=>{const o=document.getElementById("lottie-timestamp-equalizer");return o&&(t.current=Me.loadAnimation({container:o,animationData:Js,loop:!0,autoplay:!0})),()=>{t.current&&t.current.destroy()}},[]),e.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},to=r(s).attrs(()=>({direction:"row"}))`
  cursor: pointer;
  color: ${i.primaryText1};
  border-top: 1px solid ${i.black};
  background: ${t=>t.isSelected?"rgba(97, 138, 255, 0.1)":`${i.BG1}`};

  .play-pause {
    font-size: 24px;
    border-radius: 4px;
    color: ${i.GRAY7};
    cursor: pointer;
  }

  .info {
    margin-left: auto;
    color: ${i.GRAY7};
    font-size: 24px;
  }

  &:hover {
    .play-pause {
      color: ${i.white};
    }
  }
`,so=({onClick:t,timestamp:o,isSelected:n,setOpenClip:a})=>e.jsxs(to,{align:"center","data-testid":"wrapper",direction:"row",isSelected:n,justify:"flex-start",onClick:t,px:20,py:20,children:[e.jsxs("div",{children:[e.jsx(he,{className:"play-pause",children:n?e.jsx(eo,{}):e.jsx(Ze,{})}),!1]}),e.jsxs(oo,{align:"flex-start",direction:"column",justify:"center",children:[o.timestamp&&e.jsx("span",{className:"timestamp",children:Je(o.timestamp)}),e.jsx("span",{className:"title",children:W(o.show_title)})]}),e.jsx("div",{className:"info",children:e.jsx(s,{"data-testid":"info-icon-wrapper",onClick:()=>a(o),pt:4,children:e.jsx(Et,{})})})]}),oo=r(s)`
  font-size: 13px;
  color: ${i.white};
  font-family: 'Barlow';
  margin: 0 16px;
  flex-shrink: 1;
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .timestamp {
    color: ${i.GRAY6};
  }
`,io=r(s)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,no=()=>{const t=A(),o=Se(),[n,a]=d.useState(null),[c,x]=d.useState(null),[l,g,f]=U(u=>[u.playingNode,u.setPlayingNodeLink,u.setPlayingTime]),p=d.useMemo(()=>je((o==null?void 0:o.nodes)||[],t),[o==null?void 0:o.nodes,t]),m=d.useMemo(()=>o==null?void 0:o.nodes.find(u=>u.node_type==="show"&&u.show_title===(t==null?void 0:t.show_title)),[o==null?void 0:o.nodes,t]),k=d.useCallback(u=>{var j;l&&u.link&&(l==null?void 0:l.link)!==u.link&&g(u.link),f(ue(((j=u==null?void 0:u.timestamp)==null?void 0:j.split("-")[0])||"00:00:01")),x(u)},[l,g,x,f]);return d.useEffect(()=>{p!=null&&p.length&&!p.some(u=>u.ref_id===(c==null?void 0:c.ref_id))&&k(p[0])},[p,c,k]),t?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(ao,{children:[n&&e.jsx(lo,{className:"slide-me",direction:"up",in:!!n,children:e.jsxs(ro,{children:[e.jsx(s,{className:"close-info",onClick:()=>a(null),children:e.jsx(gt,{})}),n&&e.jsx($e,{node:n})]})}),e.jsx(Fs,{selectedNodeShow:m}),!!(p!=null&&p.length)&&e.jsx(io,{children:e.jsx(s,{pb:20,children:p==null?void 0:p.map((u,j)=>e.jsx(so,{isSelected:(c==null?void 0:c.ref_id)===u.ref_id,onClick:()=>k(u),setOpenClip:a,timestamp:u},`${u.episode_title}_${j}`))})})]})}):null},ro=r(s)`
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  .close-info {
    position: absolute;
    color: ${i.white};
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`,ao=r(s)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,lo=r(ie)`
  && {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 16px;
    overflow: hidden;
    background: ${i.BG1};
    z-index: 1;
  }
`,co=()=>{const t=A(),o=t==null?void 0:t.name;return e.jsxs(s,{direction:"column",px:24,py:16,children:[e.jsx(E,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.source_link)||"",type:"image"}),e.jsx(s,{py:20,children:e.jsx(T,{color:"primaryText1",kind:"bigHeading",children:o})})]})},xo=()=>{const{sender_pic:t,sender_alias:o,date:n,message_content:a}=A()||{};return e.jsxs(s,{direction:"row",children:[e.jsx(uo,{src:t}),e.jsxs(po,{children:[e.jsxs(s,{align:"flex-end",className:"info",direction:"row",children:[o&&e.jsx("span",{className:"info__name",children:o}),n&&e.jsx("span",{className:"info__date",children:n})]}),a&&e.jsx(ho,{dangerouslySetInnerHTML:{__html:et(a)}})]})]})},po=r(s)`
  color: ${i.black};
  border-radius: 8px;
  font-size: 20px;
  margin-left: 8px;
  flex: 1;

  .info__date {
    color: ${i.textMessages};
    font-size: 14px;
    margin-left: 8px;
  }

  .info__name {
    color: ${i.green400};
    font-size: 16px;
  }
`,ho=r.div`
  background: ${i.white};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${i.white};
    position: absolute;
    left: -6px;
    top: 0;
  }

  .username {
    color: ${i.blueTextAccent};
  }

  a {
    color: ${i.blueTextAccent};
    text-decoration: none;
  }

  a:hover,
  a:visited {
    color: ${i.blueTextAccent};
    text-decoration: none;
  }
`,uo=r.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,yo=()=>{const t=A(),o=(t==null?void 0:t.name)||(t==null?void 0:t.label);return e.jsxs(s,{direction:"row",px:24,py:16,children:[e.jsx(E,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.image_url)||"person_placeholder_img.png",type:"person"}),e.jsx(s,{p:20,children:e.jsx(T,{color:"primaryText1",kind:"bigHeading",children:o})})]})},go=({node:t,onClick:o})=>{var c,x;const n=ue(t.timestamp||""),a=Math.ceil(n/60);return e.jsx(fo,{onClick:o,p:24,children:e.jsxs("div",{children:[e.jsxs(s,{align:"flex-start",direction:"row",justify:"flex-start",children:[e.jsx(s,{align:"center",children:e.jsx(E,{size:64,src:(t==null?void 0:t.image_url)||"",type:(t==null?void 0:t.node_type)||"episode"})}),e.jsxs("div",{className:"content",children:[e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(V,{type:"episode"}),a>0&&e.jsxs("div",{className:"subtitle",children:[a," ",a===1?"min":"mins"]})]}),e.jsx(T,{className:"title",color:"primaryText1",kind:"regular",children:t.episode_title})]})]}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-end",pt:4,children:[e.jsxs(T,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((c=t==null?void 0:t.children)==null?void 0:c.length)||0," ",((x=t==null?void 0:t.children)==null?void 0:x.length)===1?"Clip":"Clips"]}),e.jsx(tt,{style:{color:i.white}})]})]})})},fo=r(s).attrs({})`
  direction: row;
  cursor: pointer;
  color: ${i.primaryText1};
  border-bottom: 1px solid #101317;

  .content {
    margin-left: 16px;
    align-self: stretch;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .title {
    margin-top: 16px;
    display: block;
  }

  .clipText {
    font-size: 12px;
    margin-right: 6px;
  }
`,mo=r(s)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;

  .subtitle {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${i.GRAY6};
    margin-left: 8px;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,wo=r(s)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,jo=r(T)`
  font-size: 22px;
  font-weight: 700;
  max-width: 250px;
  -webkit-box-orient: vertical;
  max-height: calc(2 * 1.5em);
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`,bo=()=>{const[t,o]=R(l=>[l.selectedNode,l.setSelectedNode]),n=Se(),[a,c]=d.useState([]),x=d.useMemo(()=>{var f;const l=new Set,g={};if((f=t==null?void 0:t.children)!=null&&f.length){t.children.forEach((m,k)=>{var v,y,$,b;const u=je((n==null?void 0:n.nodes)||[],t)||[],j=n==null?void 0:n.nodes.find(h=>h.ref_id===m);if(j){j.timestamp=(v=u[0])==null?void 0:v.timestamp;const h=(b=($=(y=u[k])==null?void 0:y.hosts)==null?void 0:$[0])==null?void 0:b.name;h&&l.add(h),g[m]=j,g[m]=j}});const p=Array.from(l);c(p)}return Object.values(g).filter(p=>p.node_type==="episode").sort((p,m)=>(m.weight||0)-(p.weight||0))},[n==null?void 0:n.nodes,t]);return e.jsxs(mo,{children:[e.jsx(wo,{children:e.jsxs(s,{direction:"row",children:[e.jsx(s,{pr:24,children:e.jsx(E,{size:80,src:(t==null?void 0:t.image_url)||"audio_default.svg",type:"show"})}),e.jsx(s,{direction:"column",children:e.jsxs(s,{direction:"column",grow:1,justify:"space-between",children:[e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",mb:16,children:[e.jsx(V,{type:"show"})," ",e.jsxs("div",{className:"subtitle",children:["by ",a.join(", ")||(t==null?void 0:t.show_title)]})]}),e.jsx(jo,{kind:"bigHeading",title:(t==null?void 0:t.show_title)||"Unknown",children:(t==null?void 0:t.show_title)||"Unknown"})]})})]})}),e.jsxs(s,{direction:"column",children:[e.jsx(s,{p:24,children:e.jsx(T,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),x.map(l=>e.jsx(go,{node:l,onClick:()=>o(l)},l.ref_id))]})]})},ko=()=>{const t=A();return e.jsx(s,{align:"center",justify:"center",children:e.jsx(T,{color:"primaryText1",kind:"hugeHeading",children:t==null?void 0:t.label})})},vo=()=>{const t=A(),{date:o,boost:n,text:a,name:c,verified:x,profile_picture:l,twitter_handle:g,ref_id:f}=t||{},p=(t==null?void 0:t.tweet_id)||"",[m,k]=d.useState(n||0),u=P(j=>j.currentSearch);return t&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{direction:"column",p:24,children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx(So,{children:e.jsx(E,{rounded:!0,size:58,src:l||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(Co,{align:"center",direction:"row",children:[c,x&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),g&&e.jsxs(To,{children:["@",g]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx($o,{"data-testid":"episode-description",children:K(a||"",u)}),e.jsx(s,{direction:"row",justify:"flex-start",children:!!o&&e.jsx(q,{children:ee.unix(o).format("ll")})})]}),e.jsx(s,{align:"stretch",mt:22,children:e.jsx("a",{href:`https://twitter.com/Interior/status/${p}?open=system`,children:e.jsx(Bo,{endIcon:e.jsx(se,{}),children:"View Tweet "})})})]}),e.jsx(_o,{}),e.jsxs(s,{direction:"row",justify:"space-between",pt:14,px:24,children:[e.jsx(oe,{amt:m}),e.jsx(we,{content:t,count:m,refId:f,updateCount:k})]})]})},So=r(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Co=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`,To=r(s)`
  color: ${i.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,$o=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 17px;
  font-weight: 400;
  font-style: normal;
  line-height: 130%;
  letter-spacing: -0.39px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`,_o=r(me)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,Bo=r(z)`
  width: 100%;
`,Io=()=>{var g,f;const[t,o]=d.useState(!1),n=A(),a=!!(n!=null&&n.source_link),c=d.useRef(null),x=P(p=>p.currentSearch),l=p=>{p.stopPropagation(),p.currentTarget.blur(),o(!t)};return d.useEffect(()=>{var p,m;t?(p=c.current)==null||p.play():(m=c.current)==null||m.pause()},[t]),e.jsxs(s,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:a?62:0,shrink:1,children:[a&&e.jsxs(zo,{children:[e.jsx(ge,{color:i.GRAY6}),e.jsx(Po,{children:n==null?void 0:n.source_link}),e.jsx(Eo,{href:n==null?void 0:n.source_link,onClick:p=>p.stopPropagation(),target:"_blank",children:e.jsx(se,{})})]}),(g=n==null?void 0:n.audio)!=null&&g.length?e.jsxs(s,{justify:"flex-start",p:12,children:[e.jsx(z,{onClick:p=>l(p),startIcon:t?e.jsx(Q,{}):e.jsx(te,{}),children:t?"Pause":"Play"}),e.jsx(Ao,{ref:c,src:((f=n.audio[0])==null?void 0:f.link)||"",children:e.jsx("track",{kind:"captions"})})]}):null,e.jsx(Ro,{grow:1,justify:"flex-start",p:12,shrink:1,children:e.jsx(T,{color:"primaryText1",kind:"regular",children:K((n==null?void 0:n.text)||"",x)})})]})},zo=r(s)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${i.BG2};
  gap: 5px;
  color: ${i.GRAY6};

  span {
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color: ${i.GRAY6};
  }
`,Eo=r.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Ro=r(s)`
  overflow: auto;
`,Po=r(T)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ao=r.audio`
  height: 0;
  width: 0;
`,Mo=["clip","twitter_space","youtube","episode","podcast"],Lo=()=>{const t=A(),[o]=R(a=>[a.showTeachMe]),[n]=U(a=>[a.setPlayingNode]);if(d.useEffect(()=>{Mo.includes((t==null?void 0:t.node_type)||"")&&n(t)},[n,t]),o)return e.jsx(bs,{});switch(t==null?void 0:t.node_type){case"guest":case"person":return e.jsx(yo,{});case"data_series":return e.jsx(Ss,{});case"tribe_message":return e.jsx(xo,{});case"tweet":return e.jsx(vo,{});case"topic":return e.jsx(ko,{});case"show":return e.jsx(bo,{});case"youtube":case"podcast":case"clip":case"twitter_space":return e.jsx($e,{});case"document":return e.jsx(Io,{});case"episode":return e.jsx(no,{},t.ref_id);case"image":return e.jsx(co,{});default:return null}},Go=d.memo(Lo),No=({isPlaying:t,setIsPlaying:o,playingTime:n,duration:a,handleProgressChange:c,handleVolumeChange:x,onFullScreenClick:l,showToolbar:g})=>e.jsxs(s,{children:[!g&&e.jsx(Vo,{"aria-label":"Small",max:a,onChange:c,size:"small",value:n}),e.jsxs(Do,{align:"center",direction:"row",showToolbar:g,children:[e.jsx(Fo,{onClick:o,size:"small",children:t?e.jsx(Q,{}):e.jsx(te,{})}),e.jsxs(Ho,{direction:"row",children:[e.jsx("span",{children:re(n)}),e.jsx("span",{className:"separator",children:"/"}),e.jsx("span",{className:"duration",children:re(a)})]}),e.jsxs(Yo,{direction:"row",px:9,children:[e.jsx(be,{className:"volume-slider",defaultValue:.5,max:1,min:0,onChange:x,size:"small",step:.1}),e.jsx(st,{})]}),e.jsx(Oo,{onClick:()=>l(),children:g?e.jsx(it,{}):e.jsx(ot,{})})]})]}),Do=r(s)`
  height: 60px;
  padding: 12px 16px;
  ${t=>t.showToolbar&&`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:1;
    background-color: rgba(0, 0, 0, 0.6);
  `}

  &.error-wrapper {
    color: ${i.primaryRed};
  }
`,Fo=r(he)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,Yo=r(s)`
  height: 28px;
  font-size: 26px;
  border-radius: 200px;
  color: ${i.white};
  margin-left: auto;

  .volume-slider {
    display: none;
    color: ${i.white};
    height: 3px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 2px;
      height: 10px;
      background-color: ${i.white};
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

  &:hover {
    background: rgba(42, 44, 55, 1);
    .volume-slider {
      width: 62px;
      margin-right: 4px;
      display: block;
    }
  }
`,Oo=r(s)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,Vo=r(be)`
  && {
    z-index: 20;
    color: ${i.white};
    height: 3px;
    width: calc(100% - 12px);
    margin: -12px auto;
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 10px;
      height: 10px;
      background-color: ${i.white};
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
`,Ho=r(s)`
  color: ${i.white};
  font-size: 13px;
  margin-left: 16px;
  font-weight: 500;

  .separator {
    color: ${i.GRAY6};
    margin: 0 4px;
  }

  .duration {
    color: ${i.GRAY6};
  }
`,Wo=({hidden:t})=>{const o=d.useRef(null),n=d.useRef(null),[a,c]=d.useState(!1),[x,l]=d.useState(!1),[g,f]=d.useState("ready"),[p,m,k,u,j,v,y,$,b,h,_]=U(S=>[S.isPlaying,S.playingTime,S.duration,S.setIsPlaying,S.setPlayingTime,S.setDuration,S.playingNode,S.volume,S.setVolume,S.setHasError,S.resetPlayer]);d.useEffect(()=>()=>_(),[_]);const M=()=>{u(!p)},I=()=>{u(!0)},Y=()=>{u(!1)},O=(S,B)=>{const L=Array.isArray(B)?B[0]:B;o.current&&(o.current.seekTo(L),j(L))},N=(S,B)=>{const L=Array.isArray(B)?B[0]:B;b(L)},w=()=>{h(!0),f("error")},C=S=>{const B=S.playedSeconds;j(B)},D=()=>{if(o.current){f("ready");const S=o.current.getDuration();v(S)}},F=()=>{n.current&&(document.fullscreenElement?(document.exitFullscreen(),c(!1)):n.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",G)}))},G=()=>{c(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",G)};return d.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",G)}),d.useEffect(()=>{const S=B=>{if(a){const L=window.screen.height,Be=B.clientY,Ie=L-Be;l(Ie<=50)}};return document.addEventListener("mousemove",S),()=>{document.removeEventListener("mousemove",S)}},[a,x]),d.useEffect(()=>{const S=B=>{a&&B.key==="Escape"&&(B.preventDefault(),B.stopPropagation())};return document.addEventListener("fullscreenchange",G),document.addEventListener("keydown",S),()=>{document.removeEventListener("fullscreenchange",G),document.removeEventListener("keydown",S)}}),y!=null&&y.link?e.jsxs(Uo,{ref:n,hidden:t,children:[e.jsx(Qo,{children:e.jsx(E,{size:120,src:(y==null?void 0:y.image_url)||"",type:"clip"})}),e.jsx(nt,{ref:o,controls:!1,height:a?window.screen.height:"200px",onBuffer:()=>f("buffering"),onBufferEnd:()=>f("ready"),onError:w,onPause:Y,onPlay:I,onProgress:C,onReady:D,playing:p,url:(y==null?void 0:y.link)||"",volume:$,width:"100%"}),g==="error"?e.jsx(Ko,{className:"error-wrapper",children:"Error happened, please try later"}):null,g==="ready"?e.jsx(No,{duration:k,handleProgressChange:O,handleVolumeChange:N,isPlaying:p,onFullScreenClick:F,playingTime:m,setIsPlaying:M,showToolbar:x&&a}):null,g==="buffering"?e.jsx(qo,{children:e.jsx(ne,{color:i.lightGray})}):null]}):null},Uo=r(s)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${t=>t.hidden?"0px":"auto"};
`,Qo=r(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,qo=r(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,Ko=r(s)`
  height: 60px;
  padding: 12px 16px;
  color: ${i.primaryRed};
`,Xo=d.memo(Wo),Zo=({open:t})=>{const[o,n,a]=R(g=>[g.setSelectedNode,g.setTeachMe,g.showTeachMe]),c=A(),[x]=P(g=>[g.setSidebarOpen]),[l]=U(g=>[g.playingNode]);return e.jsx(ie,{"data-testid":"sidebar-sub-view",direction:"right",in:t,style:{width:a?"700px":"",position:t?"relative":"absolute"},children:e.jsxs(Jo,{children:[e.jsx(Xo,{hidden:(c==null?void 0:c.ref_id)!==(l==null?void 0:l.ref_id)},l==null?void 0:l.ref_id),e.jsx(ti,{children:e.jsx(Go,{})}),e.jsx(ei,{onClick:()=>{o(null),n(!1)},children:e.jsx(rt,{})}),e.jsx(si,{onClick:()=>{x(!1)},children:e.jsx(ke,{})})]})})},Jo=r(s)(({theme:t})=>({position:"relative",background:i.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[t.breakpoints.up("sm")]:{width:"390px"}})),ei=r(s)`
  font-size: 32px;
  color: ${i.white};
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 3px;

  &:hover {
    color: ${i.GRAY6};
  }

  &:active {
  }
`,ti=r(s)`
  flex: 1 1 100%;
`,si=r(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),oi=()=>{const t=P(o=>o.setSidebarOpen);return e.jsx(ii,{onClick:()=>{t(!0)},children:e.jsx(at,{})})},ii=r(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),ni=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5099_7163",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"16",height:"16",children:e.jsx("rect",{x:"2",y:"2",width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5099_7163)",children:e.jsx("path",{d:"M10 16.6667C9.16667 16.6667 8.38611 16.5083 7.65833 16.1917C6.93056 15.875 6.29722 15.4472 5.75833 14.9083C5.21944 14.3695 4.79167 13.7361 4.475 13.0083C4.15833 12.2806 4 11.5 4 10.6667C4 10.4778 4.06389 10.3195 4.19167 10.1917C4.31944 10.0639 4.47778 10 4.66667 10C4.85556 10 5.01389 10.0639 5.14167 10.1917C5.26944 10.3195 5.33333 10.4778 5.33333 10.6667C5.33333 11.9667 5.78611 13.0695 6.69167 13.975C7.59722 14.8806 8.7 15.3333 10 15.3333C11.3 15.3333 12.4028 14.8806 13.3083 13.975C14.2139 13.0695 14.6667 11.9667 14.6667 10.6667C14.6667 9.36667 14.2139 8.2639 13.3083 7.35834C12.4028 6.45279 11.3 6.00001 10 6.00001H9.9L10.4667 6.56667C10.6 6.70001 10.6639 6.85556 10.6583 7.03334C10.6528 7.21112 10.5889 7.36667 10.4667 7.50001C10.3333 7.63334 10.175 7.70279 9.99167 7.70834C9.80833 7.7139 9.65 7.65001 9.51667 7.51667L7.8 5.80001C7.66667 5.66667 7.6 5.51112 7.6 5.33334C7.6 5.15556 7.66667 5.00001 7.8 4.86667L9.51667 3.15001C9.65 3.01667 9.80833 2.95279 9.99167 2.95834C10.175 2.9639 10.3333 3.03334 10.4667 3.16667C10.5889 3.30001 10.6528 3.45556 10.6583 3.63334C10.6639 3.81112 10.6 3.96667 10.4667 4.10001L9.9 4.66667H10C10.8333 4.66667 11.6139 4.82501 12.3417 5.14167C13.0694 5.45834 13.7028 5.88612 14.2417 6.42501C14.7806 6.9639 15.2083 7.59723 15.525 8.32501C15.8417 9.05279 16 9.83334 16 10.6667C16 11.5 15.8417 12.2806 15.525 13.0083C15.2083 13.7361 14.7806 14.3695 14.2417 14.9083C13.7028 15.4472 13.0694 15.875 12.3417 16.1917C11.6139 16.5083 10.8333 16.6667 10 16.6667Z",fill:"currentColor"})})]}),ri=({trend:t,onClose:o,selectTrending:n})=>{const[a,c]=d.useState(!1),{close:x}=J("briefDescription"),l=d.useRef(null),g=()=>{n(t.topic)},f=d.useCallback(()=>{o(),x()},[o,x]),p=()=>{l.current&&(a?l.current.pause():l.current.play(),c(!a)),c(!a)};return d.useEffect(()=>(window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)}),[f]),e.jsxs(Pt,{id:"briefDescription",kind:"regular",onClose:f,children:[t.audio_EN?e.jsxs(e.Fragment,{children:[e.jsxs(s,{direction:"row",justify:"flex-start",mb:22,children:[e.jsx(z,{onClick:p,size:"small",startIcon:a?e.jsx(Q,{}):e.jsx(lt,{}),style:{marginRight:"10px"},children:"Listen"}),e.jsx(z,{onClick:g,size:"small",startIcon:e.jsx(Le,{}),children:"Learn More"})]}),e.jsx(xi,{ref:l,src:t.audio_EN,children:e.jsx("track",{kind:"captions"})})]}):null,e.jsx(ci,{children:t.tldr_topic??t.topic}),e.jsx(ai,{children:e.jsx(s,{children:e.jsx(li,{children:t.tldr&&e.jsx(ct,{children:t.tldr})})})})]})},ai=r.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 8px 0;
`,li=r(T)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,ci=r(T)`
  font-weight: 600;
  font-size: 20px;
`,xi=r.audio`
  height: 0;
  width: 0;
`,di=["Drivechain","Ordinals","L402","Nostr","AI"],pi=({onSubmit:t})=>{var N;const{open:o}=J("addContent"),[n,a]=d.useState(!1),[c,x]=d.useState(!1),[l,g]=d.useState(null),f=d.useRef(null),[p,m]=d.useState(0),[k,u]=d.useState(!1),{open:j}=J("briefDescription"),[v,y]=R(w=>[w.trendingTopics,w.setTrendingTopics]),{setValue:$}=ye(),b=d.useCallback(async()=>{a(!0),x(!1);try{const w=await Ge();w.length&&Array.isArray(w)&&y(w)}catch{y(di.map(C=>({topic:C,count:0})))}finally{a(!1)}},[y,x]);d.useEffect(()=>{v.length||b()},[b,v.length]),d.useEffect(()=>{const w=setTimeout(()=>{x(!0)},5e3);return()=>clearTimeout(w)},[x,n]);const h=w=>{$("search",w),t==null||t()},_=(w,C)=>{w.stopPropagation(),w.currentTarget.blur(),C!=null&&C.tldr&&(g(C),j())},M=()=>{g(null)},I=w=>{w.stopPropagation(),w.currentTarget.blur(),u(!k)};d.useEffect(()=>{var w,C;k?(w=f.current)==null||w.play():(C=f.current)==null||C.pause()},[p,k]);const Y=()=>{m(w=>{var D,F;let C=(w+1)%v.length;for(;C!==w&&!((D=v[C])!=null&&D.audio_EN);)C=(C+1)%v.length;return C===w?(u(!1),C):((F=f.current)==null||F.load(),C===0&&(u(!1),m(0)),C)})},O=n?"Loading":"No new trending topics in the last 24 hours";return e.jsxs(ui,{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"heading-container",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"heading__title",children:"Trending Topics"}),e.jsx("span",{className:"heading__icon",children:n?e.jsx(ne,{color:i.white,size:16}):e.jsx(e.Fragment,{children:c?e.jsx(gi,{onClick:b,size:"small",startIcon:e.jsx(ni,{})}):e.jsx(xt,{})})})]}),dt(v)?e.jsxs("div",{children:[e.jsx(z,{onClick:w=>I(w),startIcon:k?e.jsx(Q,{}):e.jsx(te,{}),children:k?"Pause":"Play All"}),e.jsx(fi,{ref:f,onEnded:Y,src:(N=v[p])==null?void 0:N.audio_EN,children:e.jsx("track",{kind:"captions"})})]}):null]}),v.length===0?e.jsxs("div",{className:"trending-empty",children:[e.jsx(yi,{children:O}),e.jsx(z,{color:"secondary",disabled:n,onClick:o,size:"medium",startIcon:e.jsx(Rt,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):e.jsx("ul",{className:"list",children:v.map(w=>e.jsxs(s,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>h(w.topic),children:[e.jsxs(hi,{children:[" #",pt(w)]}),w.tldr&&e.jsx(z,{onClick:C=>_(C,w),children:"TLDR"})]},w.topic))})]}),l&&e.jsx(ri,{onClose:M,selectTrending:h,trend:l})]})},hi=r.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 0.3pt;
`,ui=r(s)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
    display: flex;
    align-items: center;
    color: ${i.GRAY6};
    padding-right: 24px;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    &__icon {
      margin-left: 16px;
      font-size: 23px;
      height: 24px;
    }
  }
  .trending-empty {
    padding: 0 24px;
    color: ${i.GRAY6};
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${i.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${i.SECONDARY_BLUE};
      }
      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${i.PRIMARY_BLUE};
      }
    }
  }
`,yi=r.p`
  color: ${i.GRAY6};
  margin-bottom: 20px;
`,gi=r(z)`
  && {
    min-width: 28px;
    width: 28px;
    padding: 0;
    height: 28px;
    .MuiButton-startIcon {
      color: ${i.white};
    }
  }
`,fi=r.audio`
  height: 0;
  width: 0;
`,mi=390,wi=d.forwardRef(({onSubmit:t,subViewOpen:o},n)=>{const[a,c,x]=R(y=>[y.isFetching,y.setTeachMe,y.setSidebarFilter]),l=pe(),[g,f,p,m]=P(y=>[y.setSidebarOpen,y.currentSearch,y.clearSearch,y.searchFormValue]),{setValue:k}=ye(),u=d.useRef(null),[j,v]=d.useState(!1);return d.useEffect(()=>{k("search",m)},[k,m]),d.useEffect(()=>{const y=u.current;if(!y)return;const $=()=>{v((y==null?void 0:y.scrollTop)>0)};y.addEventListener("scroll",$)},[]),e.jsxs(ki,{ref:n,id:"sidebar-wrapper",children:[e.jsx(_i,{}),e.jsxs(_e,{className:Ne({"has-shadow":j}),children:[e.jsxs(vi,{children:[e.jsx(ht,{onSubmit:t}),e.jsx(Ci,{onClick:()=>{if(f){k("search",""),p(),x("all");return}t==null||t()},children:a?e.jsx(ne,{color:i.SECONDARY_BLUE,size:"20"}):e.jsx(e.Fragment,{children:f?e.jsx(De,{}):e.jsx(ft,{})})})]}),f&&e.jsx(Si,{children:a?e.jsx(ut,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"count",children:l.length}),e.jsx("span",{className:"label",children:" results"})]}),e.jsx("div",{className:"right",style:{alignItems:"center"},children:e.jsx(yt,{})})]})})]}),!o&&e.jsx(Ti,{onClick:()=>{g(!1),c(!1)},children:e.jsx(ke,{})}),e.jsxs($i,{ref:u,children:[!f&&e.jsx(Bi,{children:e.jsx(pi,{onSubmit:t})}),e.jsx(s,{children:a?e.jsx(as,{}):e.jsx(is,{isSearchResult:!!f})})]})]})}),ji=["topic","person","guest","event","organization","place","project","software"],bi=({onSubmit:t})=>{const o=P(x=>x.sidebarIsOpen),n=A(),a=!!n&&o&&!ji.includes(n.node_type),[c]=R(x=>[x.showTeachMe]);return e.jsxs(e.Fragment,{children:[e.jsx(ie,{direction:"right",in:o,mountOnEnter:!0,unmountOnExit:!0,children:e.jsx(wi,{onSubmit:t,subViewOpen:a})}),e.jsx(Zo,{open:a||!!c}),!o&&e.jsx(oi,{})]})},ki=r(s)(({theme:t})=>({position:"relative",background:i.BG1,height:"100vh",width:"100%",zIndex:30,[t.breakpoints.up("sm")]:{width:mi}})),_e=r(s).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:t})=>({padding:t.spacing(3.75,2),[t.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:i.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),vi=r(s).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,Si=r(s).attrs({direction:"row",justify:"space-between",align:"center"})`
  flex-grow: 1;
  color: ${i.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
  padding: 0 8px;
  .count {
    color: ${i.white};
  }

  .right {
    display: flex;
  }
`,Ci=r(s).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${i.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${i.gray200}; */
  }

  ${_e} input:focus + & {
    color: ${i.primaryBlue};
  }
`,Ti=r(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),$i=r(s)(()=>({overflow:"auto",flex:1,width:"100%"})),_i=r(s)`
  height: 64px;
  background: ${i.BG2};
`,Bi=r(s)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`;bi.displayName="Sidebar";export{mi as MENU_WIDTH,bi as SideBar};
